/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2QBy6WYpBtZzxVxz6145vk1aVkuXM77SGXat4sDZ7ih17k8VQADocnmD8t7mBVa51JVXjeJrPckewGBeaTCmBLka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e9PAFP3UmModQZWxpkwM6gYpozdAQTMnKqY4jzjhXLp5R4QF65eRdkFBMzeFX5tFi3F7kxC6GETTpnJ1VGog2fB",
  "key1": "4u8YszPDBkDFMhQRVH8cUfQXZhYRoe4YbZmSUhYrhKQpQseoRY6ab6ZeU2aG9mX31jvbqM7fjnu4SGmjWfBks2FL",
  "key2": "4PsHjbDu4pmUh2YVzKh59NBrBFSRLfLsmJtkGK7FPzkTaA2Lzy5KyFL5n8B5YJTVAwkLY48ev7w1oLFTNycJT8ri",
  "key3": "54skCPdnha5QVsJ27WsPDzBDXDossocpTVSonKqLWYDU3CcjtSGgiLdQ5u78e46W2q3GKmziakkBjSFrQvt93t6P",
  "key4": "fkEyTLTn7SHeCJmpnVtmV3FC5aQwGgYSQy7CbqBZ6jPK9NCRfShEnZVzVWdyYW9sUvthP1oVU9eMq7oQNTwB2rH",
  "key5": "3Cftqm7VfjArrLBNPwLxCwfeFwyzb8VFvFXrYQ43F3ZPdQFp9stPKCuLtWkBaho5tpkPNzdMiShQ8HLTSCy7v8vL",
  "key6": "2MRXC6eNDJc4HyyMc1uG7JwsAeGD8CUXyyxLewviyqfk4ZrDavkDjKEuzL6fRFHCdVxxH1tnvH8H6N7dW3rohECx",
  "key7": "2up2LohKvMpeCuDk9qVH6Rz5achJX1pYjucemw9v6tBxRXPmRdzQbQc5ejbjeT2mk7DKC2NcN3Rc4qUUBkM5wiW9",
  "key8": "3RAffzBk4Qzn83Dg4L5ECJA5QgrJoF9SEmv8Z9ErwTnDVwZfdm1Xv4eX7JC8SpbLE7MBSFs3WYJy8fCuUYmB3W2U",
  "key9": "23ncbQZyCanhEV8rmWu26FD76eUTYKcepWRUzFzGDmFVw4tnNvY59aFD397SzsK29xdPkHwkYBSsdevsriTDUuj1",
  "key10": "LMBAchfHNcnZRdBV28Qnea7pzyGFrwMXojfpWvbdRf3rWwbCmkQQRNGftEFgfdbbDGCwLXfBL4adRaSZGtzU6NN",
  "key11": "cSKpP4MT3BRAzDn8GD1qVzTK9c2d8T5Ld8kcQQ2GLczP6pgh8MU5D6DAYXCEV5y1PxUN4hPW7YU874JadKXoprF",
  "key12": "3C2dWyxceCqY9Lmgst5ChbVCUaujX7Ueft4cpgwP63Zc6oGxQpS6JxiR64oRjpWdHCz65x4s5YYBSy2EdmW1Vthx",
  "key13": "2zDDT1xqKEtkxC1Ae1uURD9bvgbwEEraZRDHYox9rBDMRLDf2E5JnjeJhZ68fmQCFkacvVFEpHHkEmVk5i5uXaBx",
  "key14": "4LDZxfHbcrbhWsXJ1yMwjcNq9TQrkxJMziinfVLXktjcMY6GuQRvNWzFdiJNoaUfpzg5tYGtYYCsdFtseeESnjsT",
  "key15": "323itGdVGzdeYVpp6pXs1GmyZWfM7Z2Jx4qdVxTDWzhRak8ifoesGFbxrvnmBkC3f1URowEZtj5UR6j3J3842rA7",
  "key16": "2M6GCzG2yXwF4PBq1t24AXUEb5RybtnhqGefPWrRN2U1ft7vYrC1vjb61An6NL5VzZhUuHEd3SwN3jondGxwEKHJ",
  "key17": "3BaLeUzS1mLcaCgpfjHVQwDfFNfJH7AWdPTXjWtKHBa47Wb8VZXVkmrKV3yxu3ghpig4Z5dyPrc6kxtSUUPf33Fn",
  "key18": "4cPwVWUdcX1jSCQaTwZXTv54ezNjPg5BBDoNNj2S4E41VSbiC8NfJTBaduoJzZxsKWDNC4Z1eN4bjQUVwpC8pAFx",
  "key19": "27vC8tnycKfUMTcqLW784Psy6NQpkCVNz8TMFYVofEU7eCRbeFfmfG3xa4NQ4H1Jb1d9n5M7nm8EtKbjF3goEHAm",
  "key20": "4KbaGpxywfkxXSnXMtybBnWL3vFoUQ6WUDwa266oisoSKLkbTRqb1fQv1bimbvoz2mtX9oZ8cVtBPeAAE6PfvEYw",
  "key21": "5AkH2KVt4k7V7jssQHQjJa4hmtNmEkDgkzJmfNp8Rr7SGm2Z6cnv8ECUVvTq4dNnQNeytNkXomd3DfSaPktHd59V",
  "key22": "4mnjbMdSwWC6DM2sGpxfG8o2hABKUyvyKkCod1sGW2xa7MnMPLKKtYiTPWQtkMyytWWsvWMWvau9RtmuX5i3Cbpo",
  "key23": "5DJBvQ89DNCysCJchJAaznEywZVvFqn7QFCmSV8P1oedoz3zvS3vs4JCrzYJoUxnWo3m3zB7khSqeqBtXocQxjxL",
  "key24": "2AA1NKfAd99TvR7zpeC57oWMQ5gaKH4P8L9MSr2Eidr8c6wsjPda1v1QPQ94Wd6RQK2DC1F99Sp4vF4odHo8FHKK",
  "key25": "2f3QyerKxdtXonHof6yaQhXw54BQdYpKfSDN9HQ9LNefCaJMtFPcx3WeN9aruMqRpLdzhmQd5TJyf48pYgi9rzQ",
  "key26": "5jC7TC8QywHXZwfZ4TGkm9KP8SJGGrmgseaXZNRXc4Y5xLF8HwUrwnNERdUKG1WPyS3jF5Vazb1VqgUkVMZcCpBr",
  "key27": "qiV86YLurdYEDeD5usJiwA7gYyCjzLqRAbQ8Mq9G4L2azf3XmRJSaTNEEJfXhEgM9tDKfmhMMgdn8GBa7fjetPq",
  "key28": "21S51WhTFUTUN234afLnyKFfx2gtVC1w9EY5KMsdMANizfomH13VjxV2foCyfq8QxgMAWGREGYkFk7eFzgXAgBw6",
  "key29": "4FzxXPzmVXgcPG6CdQ6JmLLwycemLgNwEJiV6tEYvdvw4F9ivH4zErW6e3731MePJTaD95X9oD2HMPQ9AwvdsNXg",
  "key30": "5JKhsnP4B5pHSNCx9XBppPQJ11mhHGuLX3QQEUx8HL37Crsd7GpKu4U7JUf2rpDeVV3RRaCHFfKCkZXTvNAPf9Wt",
  "key31": "5Nax5FrCBcnS2NTd97eTPp43qYNstYkbQn2gtqVHcBjoDi6UdGWZDSejAsUP4729BFCM27pgboVKTH4RHGGEXVji",
  "key32": "2YHDvhXPwSDzdbQone5AyT4fKrLPyGVxfYyRxtGQ8NroyiYob5J45dfhN7oqKjaG5soQfyddgLgxvw75DAboEgPJ",
  "key33": "41ZvYq656BmxiiHrw8Y4VyE21KTuejs5u7nXc8v1xiSnhP94JhAehhrjHLY62eVX98Hta9CD5MH1UWLMTFg9NFhS",
  "key34": "3CzMJnf11yeZtBYdrn21GMZNVH3HYvfApGK3HGA3Ks9d2GKSt1fJBmRVuqot7hbGow8nNt7GBmXNs2oAm495MTKf",
  "key35": "35Htk79RFkzVRAmS9LFRXtrb98Ds37mtjXWYtHCiys2NZ9prjZ2ytTBG6m8cMBpAcSduhBuFQn5i1Fe4mByfRnQM",
  "key36": "3PxZsmtJYiC2QiD5pU6BPKXMeDWx81bfyo4scixAwpPw2DkDq48agWgvpttCatRcHTrrzxTurY2C7BNqzjUazEX2",
  "key37": "4Fu7D3nTUBLbB4pB2mGyP7HtPea22zHfFF6ZkF7Pk3PEsXEig9NeV7Dwzuezb5i2Rc6GGz9tnKU6NS18bRCorTfG",
  "key38": "2ChsA8ywiVRSMU5UEKieXYFNBka2Dj8q9iRej9ppUo35TqA18V2q8czzXQUBCdNNtfeyndWajht91vSBi7PCfNWk",
  "key39": "2QGzsETZxVGfNpdmtDz81SeaPixxnJerzXFCsRm7EXg5ZDLnTCuEqVrs9DyiMvcmin5qnvLJwTJEU4vfriMigSMt",
  "key40": "cXjvphgeWmtFYY5zLAdtu9Dz6LiZ3N7DSeAXVv5Z2mauPEGUyaD2kW51PuMntDdXCpGYeEyQ9Nh3Gc1DTZCz9d8",
  "key41": "5DhFGfBwGZiBgaSQ85KKeDvAKR3Fsi7U3cKo2o8huzDreYnno5tu1xsH5TaS88cAXsHRnXirEkvCnHE8tncgYrt6",
  "key42": "598Q2Gejw3jebPxfyAiJx8N4iK4y8dKRGnwrRz4ZQAWP4QmJ4ZethCjyLvrDPpb9X71G6MAemJ1g163AvR5L7jvy",
  "key43": "39tCZym9MpUwXD9NGmjrw2kqiHqLihsrCFgu9QHBRLiYrxHP3yTaQw5CcpnXQfGqdjZAkxpi26RyWrKU9assAuQ7",
  "key44": "5M9W5NS7trAGfmCNEUrcwip6eNHknrCw2cpnYmwVWea7e5CNDNSZ2PSnNR4q72JqYe5KQwrBvUkHyUPD6fcyyYMD",
  "key45": "5X9H76qKHGQncepjuKzXVLAnFkoFjN9iJTFKsw1y1NFsBaCpg9ZiqqJAVwpTDRSVo9x8ewhS3c9DHSrjxcmSedmE"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
