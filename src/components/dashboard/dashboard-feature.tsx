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
    "4bRGAXt8ksoWmHtE6tJhFi4i6fVmA5GrZMw89N7V1EkbuawQuytyxXWbEQFR3dhfCnvgNYg8W8FqVV8vGSaa2vne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2um5hTeLhJZYHnNid4twoftLrDx6j28HGYerVBjtt178yCBBpqcuvePsT6vMmQ45zhYCE2WXSy9BMxCUK4d6QmWq",
  "key1": "5xjy5MgdmsxoHuocwcbwupxb3mhLk951J5r1paRYQ4sBCK2RkXLTqyicDZv418i4dzCXjbxhMrSeKzioQcPJhSmQ",
  "key2": "tYNXCkgDi4B6ysceqBjbNEj2e4easqTibH4VrnMFvWUMKDB7E9bg9NNnChdfHLqpXkjh8dVU67cuEhHiDENYdkH",
  "key3": "kr5uspYaoLk461G8oywSQqWVgQP1tTaJsvGFqh1NxjAt5NVoFnTh4kyuoagsRkseYvSbLQLiRLT53cAynBZ93P3",
  "key4": "oDc4ZLdPPgFRPuF9QXTtbe9Lj79feiYcmzF2TV4cg4eAve9srkrutyNPHFbDVgVNNZWz5nqrKFZsPqsGg4ESSrA",
  "key5": "RtZdjA1RCE9nyd7d3nxPYkCcTWFNKostYZATaTzjx4VBBfwP6929PiVZQypXyxsiNqT1ivGwgg65EtfxjYT7QSG",
  "key6": "5e7hbaTb3M3UjnxUV9tRJvAsYWWuqDjrcUswDnXC378A5koqxm144okcwKvzDUL9GaA2dQrzXR8FP7uz7TtncsNd",
  "key7": "5Pz4H79ftSj9CyCX1FJqNnVAjuBKezN38MKun1n8ehunPX6CwwuYRme49LDJesUsoNpTrw5wrNnvy5KJPmMdG4zJ",
  "key8": "3x5zDsDwzKkmfBjtmSp38HBfErVBJMihq116qJ2wftvHNpedjK9gavaaKY6eDLuKBXn5LYM367t9cYCdX8zYZ4fG",
  "key9": "59hKY6VDWSSEpag8kGYGBtZQ1aprLmeDB5ZnnQ5ygzDwiBxRhyCGrFjCfgWgnn4BodB6WUPwdmc63uJh3axpyXUm",
  "key10": "2RmprVKBtR3UpGC6JcLoo5LhKA4ScFgq7Px4LviQs3Wr88z2mqEin5fMp9GxHr2tqD415ESfNfb4hBaq1tyK4yP6",
  "key11": "UxXeRFQ8bxxHMMumJoMRx8w2paK32BVoFGiNju6dcdjaHSNA3vuUU65cTzHQb9NNJXrQHsH51SYdHSoBscLJTGj",
  "key12": "3xPLu76hiq8sfypS26TwbETGZ8nvXhRns9p5fesyYtzEMHfmffApVzKC64r5zkS433wuGkfj47qK5dcBpgGZs18d",
  "key13": "5R4Xs3A7SwrfQEpohbGvRY4Xtz4ZEFaRitQzLWr1CeGejCGXX9Qt3qBJesgC1JTWmPNNMSZeLmpDpRPjpdirMcd4",
  "key14": "4uQJzEyXGmfSduhiVWw2hKuLJdSAbtnJs9D8J9dX5fF7CDWFkSrFfqBbdWqCQMpVg63Pxc5GyDkSSZvAazKzstDT",
  "key15": "3VvuyHooZNjDKvh6MM4t8Te91fSUkCkFCRt6ed9PHpoeC3bac81L7HJPzoPAgoXwVapU3Yxr9H64YwkQZYodSbHh",
  "key16": "45BHWr4HaWRF1DJg9oQeNxBVceRjUYfmbs7npj9ZxtDov5rLMUrf1k6Yg7dVHHeHWzgMW1sSXicvAJj1BCg233ii",
  "key17": "5RwwNVvYFmQGkGRHkVVs7g3uTiy5z3NZsimeAx7ydGUWEGrnnKCddaMHQBYq4PpKqNNzZD8GPBAJXuVA59LN2kUE",
  "key18": "Yn7LSqfErSAyTYbrMDUZQHYsoerJha8s5WaAX9THdrkzKPYaDpH4jwvrRJJ5yB9j59vNrKeuSrBXvC5yNKK4Zzq",
  "key19": "Wfjgr59ZkdjQdBzn3gncds25KzkwvS3gM9sSJTL5D1WS4JdeshyMSSgq88BxSP9RBS2PF76HzTVQsRHibZqcxUU",
  "key20": "2CdmsbxAKvbY91nrkWJYnY9361urvbS69WDcujaEkmYd6MCc7zY3hKTbUqr8GZ6DpaeHQEJktpLkSXYNTkMF8Hm8",
  "key21": "p4ZREYLryHSYYNcKwW8rBn4CgMSQd2upmwtVbmquYaoaFjU77uqffdiDRd2WCoTpWbEHX5Y3sxWAWwWZ5bU2zLP",
  "key22": "4iTcP5KzxeUpVMuaMgTQSz1VRUrqL1EYdiKZPnLFK5QjbjKTiqyyqExH2TZ15b8REG29UYCf3ya56e9PArLSyxXe",
  "key23": "4CwVNoxWiucc6p4q2VkC9YEGWJrScLw8uG7zYPq415SngxuRTMgURRraLmT4okDKdTuxN8RPche15wWPRf3stwJh",
  "key24": "2HdqgAUtmYT4rf4newX2rtSuhABTuv5ssgkZcGHKgBaSZicDYdYdmLgQZMQoVdo9rMKW1UGBbKutnGwhXd3gesan",
  "key25": "318HvrxEHqhjmi9FCVk32pdpng7ygMq5tVFGpDXHBB11tCDk1xnUuYsZ58tBrZtowWNwedJYsCsj7Gqb1vEMLMaw",
  "key26": "4o5y8N7ohdb8YrLMd1awwqgRtfkC1Kk8qH2S8pGduWYqSmtZsaXnJyb7K1GHTqkEEzWNyCEZznEg4aPHeTKBDczM",
  "key27": "41cTUeCcbK5wR8TwAWcK2RYXkmoYaZnXUcVatKL5XHEGip7eqkQrxQ2k3JoHTkWR3rJcrKmVhwrmYfD16xdNgCAG",
  "key28": "5ceU1STiDMm7LtNKWGR43454FENtL7YcD2B8Bfcte4fhSRdn5oYZhwcEuQVDPCai47wqGQw7W8cb1yJsS29KNVDc",
  "key29": "49LcDNjr3zrTatbZ8A9mXo4bErsodbKcjEMnNNx8pzu91Njrq5gPxPKQXLz3NdpUyFnqabwrNotm41uNT7aJfhm5",
  "key30": "2f8NwtC4aCdDw3TX385cmKVo1VtjqAuuefsB7hzcinXCswcHBffCjRtbUzKaLhEjUXqNTozoKTE6P9zLEtXApoBs",
  "key31": "3bb5ocs2rM65yuhfNPABbeAzsh2TBJ4Bg2EigtVy8fXCrGmfcrppAGFdk8AKKviv7XkYM3c59qenVs1Qg3eMFLfL",
  "key32": "4YnzUji4HvHDwekVknhVJeCMvSaXnXmx6JmQ3FNaisGE9EBDwXHiFDKk7Zk43429MLfwnBxMVSN36bbstn9wbLjD",
  "key33": "4UqvzoDMVSnfg2J4ipdCKG9bRDkqoE9yB81oQz99DR15V9Fj9qzrorvWP3SHETHv6ABDupNT5nVkL9PPzepVtvFQ",
  "key34": "2xAKpL7VkWAyNZJCW1epiit3UDh7KsaKyuBJpUvLLUvrxHHNAGYKVzmqr4rpiYGfiLxVRhVAF2szh22RVcfW3NQN",
  "key35": "4ivrs8LkamqS71yEBrQTB5s4xxJZBwYfUzNJnrMGGTdabBTJdvBLvFX63FdbDmanmf6CMDPmNnWaiYn1HkiiftqT",
  "key36": "4yCeVNoeyuzdYtQ62y1zeFiM9bWoDYXXQNHjTqPqjxzdAF67UvfMtEzN8AZXF6j26Cf9fNCuHAqGsD8BhcDT5RYi",
  "key37": "bqQuSe3VbsfFqSMwiKSzRvmmJgmYidJUvWfjabjsaEzCxVpx76ZZTwz6Gxj3xguiSDMUbsUHdLZFAFnjMKAwfHv"
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
