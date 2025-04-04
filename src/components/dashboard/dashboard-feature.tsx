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
    "2BiStMDtyD5rofdntXJzu8kmxGiX4zQtZrb7gkx3m63PhzvRR96wgFRZ3vKB2waHZ4koC8sUet2Wd5VCmJCe3zLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTfMAAGJvrBMNCmaKNFovZfQYdkBzX4TTaY2pSULob7gyEJPYhmwQ5npnTpLms94jzWHVJRgHpGzNYB55vCgr2f",
  "key1": "3QR67nJ2uvJqbhA8jWaxmx8TmDpHNQtXXiFHHJq5VuUAVd1HNhSAf2TBsfkU2C1eGQ9b6H1r5itRTcYEpAxMZ5Ne",
  "key2": "5nar1jsUXjzZXEgFeE4hWu1hKaJk4xTkHdJKN2YLzXuSxyLi2mhUd3918zvt1VBNvjxRvyamzixCrCeutSXcPHqM",
  "key3": "GPtxLsHiyoQpB48UT1HKxD28Lg2Yr6Crm5rndZNRFyeqxwFDh3eRX39xuun8f9qe5BDkqjSVfpmZod2PQ7bUHqS",
  "key4": "MYAvZgAVKsLeZWEjhLHu8ZGQdjBwpFJdDMVCvHFNw4rP5S8x6Au4hHMsFskHBXjhKyh26Ndv1SHcTysHP46agJm",
  "key5": "62BV5Z877xqJay4yswLy9jACvjjj4TGmKUYq1raxH1GFDu2FeBZoNKtqw5z5Csb7TTnibArLmNHXs6kcMBQuuyEG",
  "key6": "4E61Wnq8kZx8GYvdeEtsJ4F5Guy29vSN7sYeeWnkh2HDFeN7CWCKHSRji67ynaB5hDJh5sA5Eiq66c1wLhjPWYQf",
  "key7": "2hVJTJYFbA3gWBeYxApjmQrMBxCSP9zcuaG6GNcK5UDFn1xap9pcMnKaZshwRapwd8B7cSDHxSGEzXnghTcKSvGy",
  "key8": "2D2C3xNp5Z8ETqjBYcH21yPdvDXoj82VEW8MErft6C74dpYXAVeRBSsu4bXXpgdKWsminqb7JF3uEKmGog7jp4ax",
  "key9": "67YPMXZSjVv79Yinni43K7QnVP3G849Kj8jPZein9xfv2JnFq8KHNbNe3eyVDgHs9hxfRCaVQTXdwZRP9fyYAtbh",
  "key10": "4vcZZMDsiyWYj9tG7iXPr34ZRzem3gh4CX28QBwkdyMDAWwbCL69Sd1aEfHfjgaaRZZSAharuanhJy5yC9epoaKe",
  "key11": "23Rt3GW9RzL3VuRTvwCUKhGJRudWbYUv1UKXGV5yoUre1bFcGKKHxLbmMBBXj7iuLkoCdWAbSdcqFtqCkNYd8i1E",
  "key12": "4YY1bgDYVHkUX5HHYMFCnqC7FhXc51Pe4MVtekx2mN4m38fDpYALzPu9QYGeFeV2MPXvywkJxmJDwyc9ELHUu2tV",
  "key13": "4D1Y6JMa1KEm2nKgvx1UdyzTTkvpotTNnR2ss6WFFijdv3KJo6ScuqfJCrdj86z9gMssgsd31ZCeDLVCmNoEQKLi",
  "key14": "4hfZnpruw34hGixd7KfBc8MeQ1LXrg86tCv6THz8bHzz4dUVNuBoVXRLSJC1Tn6h5YKjV6FJ5bSYEeLBfTRzceCA",
  "key15": "juRrAUyoyKa4UsAY82zavXxSxPFkJfNJzN5sBPEmutSiLFe6yUGqyvHxE5bmMuBQuaE45pMovqGv2WWkt53Ww5f",
  "key16": "4bsetssNGSpok6Eu8DTTkj7wERkNcHQwEHwJsw2VAht5iF3NQu8QvCoyG1bNzgLtsKwXk2ChQvvMHTBChamFKxkA",
  "key17": "2K295NYjaKWvfJh5JXseMUC7AkpHZNtrvBvJweda639QM7P13WpKNux27f1HFRf9LjhA7KppuuaMu7jaZVsP8QSv",
  "key18": "3tkTtxUPVLV8YctPUqHQMg3dE5cw8b7smzCGXDTaEr6d8oQTG6CtNDsnXSH1nbrYUHSqMZWh7qvwQtcZx3xaaYrB",
  "key19": "5wTgTk2LFKFp3g9NyRvd9fHEpUCFLSRPawfzsbm9imoPxoqR8Cms5pKoNmnkswY4zVqEw5ZioribooyGzsbK6GkW",
  "key20": "31L3sHU3zuHwCfpZgkEvSEmLmiARi3xCeZMcfJ4iaLy5gVptaivxovNQBVeG8jSgmMD9e6KXsF7cNMnqFRZmViSD",
  "key21": "bveDonoSXJ2BZXSTaGDXeXN2z8DEVazWw3fRXwd7wdEPwFCFZDMBbtH4Dk8ir4WYthRSCuceqFV2ntJHRSiX57w",
  "key22": "D4guBBU9WKctMUJhRk6Ap19B6CpEMgDW115DDmWxnFRCBCUp2F7dFYGerTgpfJbqWqjkpzmpnpxRqDUayFNkC2n",
  "key23": "4fY72J1TztWDmfnTDVXB4UULRPsr5cqgsBLBJmB7TXWAZUbnKYb8aaDSYo4SfTP2usf8ggoARpcezMEwM9bJRqgV",
  "key24": "3QuMKCiFiD24ybf362GhmDtAF6uvSnmm1KjwAy2UPzcp1iFh5Md1Z8bNQvQe1Cxqm4nPueFtYb3xCoj1Yidqsy3w",
  "key25": "5WE5XStYp5T4eBuZtYqV3TK4qi1bD19SkXx9NDVMQ2Nw2b4XRUfR2jfMp6k4hBcBhTFP8cdHr3gX76xRXKEjXNT",
  "key26": "2s4xALHD8SGjuhz5RJ3PKT6jQe3y6pB3KAYihg55RVqptgTtdE9x94PhY75Z3cKYKSvYnVxFQnP8wNetATmKGHE6",
  "key27": "Sg1Pj5Ygj1PhmrHvyg9wS3twPLYZhrkYp9KcPJFstRrncgeSZmfrtyEZCvCcuCupBmRmwvJJk1QAgEK15Af3KeL",
  "key28": "4DwAc3zHyvQLdgjkBA5dSSRgEq8q724TR6AYoCo3yR9kTyaptSyguWTwbA4VDccn6F9ycCzP6Z6MQonWdzAH33KM",
  "key29": "2hgKcGgZAnnjxtyPnBfCWhVFbnaTMGzV7GAKtsWgHXanqoSSoHvJiZus2zqYtfj8voSp9oZRr39GxnaXVe2pKkBC",
  "key30": "5adBeKQ2XrHjWsiqvgz3yugz9oTWdzGfeQYLwkhbaHu4PbK3WWuR779rrwVc83CnaGizEMxuguMEokRNuHoMNdYa",
  "key31": "2DRQ32d8wGjVrvY1aaa7p5LdsMByb4ZzuWc2xruymx9SgB5uz9yWg1x5rPP2Bm3zB4KRoxcx7hb2op5H9hwPmk8s",
  "key32": "4jEeaEBwXDY6hUha7eKrrK4KQafumBScGXfovXWaGmsjPjyRZWyc4RQSfBcHeF2X6p3SFnNvETPQbEkiZ7vpyG9A",
  "key33": "3npSAqrmP1gyAYnAaRmzQFxvEiMfT4LfQreBEZ52avG5nSBEL5uje3T2v1AXCFi52QPQp1N24ttXZ65WSk1QVcWu",
  "key34": "2Xh3zG1r3xzqv9pUCRLFiEDGog96pYkx2W71mRHvvPWypmBNZ1NhBTHou92t56UvnC6vrAxYnxFBbDRSEhApEr7K",
  "key35": "iaTHXnYMPbAZcwBTGGZPmA8soGB8S2mPC8N5sx3q5ccQDd4BwRENEMt1uLGhu2pxXmmYfTACLrg9Vh4AViNWM2K",
  "key36": "QivBLyVCQMxHjW4FvkXyroRMPg8whVihjAPXTFze1n5iHgVScV3KizE5bVxiFvwAtxsBUp6G5kV4rnYNnNB8cyj",
  "key37": "33sLtJmtfqKGEQswbQBWwSrfvuRx5Do9NXo2zTVWdq94ruT7q7ttZBZUJkjQvMMdxkidqvK7Gv9TyQW9oasEXmSj",
  "key38": "6bNXRfvJm76HotVPTbQeVQSpty3aKrwmCi1Wqn9Zu9mAYweopLGgnBN4CnJfppSZR1C5vXzYDsFQA36RD9pBBuh",
  "key39": "27fBCVKqay2NsUwmNqL64eBtu6kWR3PKEBrVD68Wo9mTTHghXNxVhXCuvuWoz7goXJk6zD1ge9QCM2Q7eXPEqRft",
  "key40": "2yR3HT47n6rymkKe9fyxjoJRK7FFN9uGf5v7nt7T29cC3uLZdd34ZFBvrKGKNS2VVcuzKhojTS94HicUsPjXYfBd",
  "key41": "49NEqvHCRrkvho4Ty1f2KzaSyPCoThJDsNem33nYjNfWL3vkf1bfHF8xME7RZAfAh8qFUcquPt5U1ruKjpAmbUrt",
  "key42": "ySG9Kjko2q3S9mWYuc3kkLGo6RVPB6LKA8zTspayHVxTiwdSBeE92f4mUH5uTjG8RPB35KnaLWpT24P8HGb3ESS",
  "key43": "41RAZ48crWXYjPosT6HniVSdVGHJBoqUg7Fx5Y6NQifa9YvrU8v2XUhV2GqhMb8Z2G2asV7RLpk1fjXSkK8vCFnp",
  "key44": "4ZDyVAY8hnsYGpgcbQFekFjZGg3Pf2hs678d4tcASW8v6UBVrFd2RVZz4aXRcjYTY9dR7WjebfLv9F3XodKmmhBz"
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
