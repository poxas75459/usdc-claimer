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
    "2pAhQrBNhEvrEDibddx2TmTs59DJ8RYuF93y9nUBqMx9f69sQoVnxkhUPyQJgi7p5DKQ1R4BKvCUNppHhYxm4wLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YeQx8REWY7mJ7aobZdrdGRMMv573ggrWP71typymb7nKF8appZDJnhfGEqKdoTwvrsruJNRRhBcNyf8pnn9uQWc",
  "key1": "AR2LPHoo4VcJjhfgwK7aAEGKb1YRioz2yRerT8dxR7j6dvTEJHdHTtQEDKJ5gqzGQArKfk3Xf2vNbVLnsLhAios",
  "key2": "4pScW28bTo7V1SxktFS8LqTez2J4wMXEDHwtsVBgDdeRsdX8rR7ErWjn5PzexDT5NjcrCGviAuzEA6oRsekhddPY",
  "key3": "5SL7ko7KJUF3YhhaQB1FJUhdW1wjAv6KQC9CMGtopHSLfXymz7uWjPbuMwstwnP18P32JFZ3a4AAVYoayfzFcXu3",
  "key4": "4nE93F1AjwiW9G9TfJF6r3p5fdbVvD3JMPYWz7DWkfm7mu8xSjwYVnbPKwb14AxfsDDkTsau94dTbNsdh73JPePR",
  "key5": "5dRWQR6TB43kPN8zGzVoobvueffNNmtJGUqqmAaLCaYwQGzvEVjm1ensvBNWWiS7123wisUf8r5E7RfQcSbXhNpX",
  "key6": "gS486q9xYTYbjgsRqx5hQyhdC3WUyY2Dy25Sv6bYfSnVAQtUFkrSd8dGeuWEMmHfeBvqevWH61cdLi7xPXTSRpW",
  "key7": "6672rJrvXVRNNpN6tJxPR4gUsYofMHVqLFEGWiccugve5aTHQoBVJM1Ba1vfrCb7fVdGjnneWhDv36oAphKLPwUY",
  "key8": "5MuDqg2nSGBxJhV558Wga3xoURxbUENLGMQGDKoXPo36s6VEBKEcC8A8RDz1JWHeXuXuzcg1goTS8wYH9z7SGaiV",
  "key9": "4ztEkbx9N1NebHryxN4mTgg7exZMvaghtnqokjogRWa8hoXqqfi3RH9FJb2xWDeZ4bUo1YZVY3ZCJigna8v5yhDB",
  "key10": "3VmhWg1CgKP6GwDQ9WZfjXPHGLh5wRhrkGwuyz2ed8XWFAUGrRDpppWZutLxLAFrz1MmggeDknZ3PdRNvcBu1AJJ",
  "key11": "56xK5fkmJ4sdR2BiKssrQBKUZ62RV6iMnxWk8DJvAnny26fpgHrtEjUDk3zSriy88jSQv8YDf87bWZc5PxGmh6gs",
  "key12": "2sgW2wE9tgzP7b9ER4qgdUoowSXzeyQimsye47gTUP3c8vG17oRdcxQXUj4bxeaZMX7Rq1Gzo5BhRBoanWEw6L9N",
  "key13": "ZMsWje37KHHFePGJcL6WbkHvXn3jD26JNJJgakbXhNHMojedD9jk2tqcTgu3zKu1oXtCBRZ3qRcMA4G5TCmtGTJ",
  "key14": "36s9cNe1Bah5cpBXobUHcUdynLgKuE8GFp7gjiKAsjoJmAxcr5aJefJt7itaVR55tRhLZTQ1PCMVFNAetx8PN4VP",
  "key15": "3hLJahKxW4efY1n9YTFp5sXGNx7Jrwz7XvH4s1VgQomxHhJxpDcf4tRveCPCDLUBeNLb4FZR8ffdpPBn8GG7thnv",
  "key16": "55zWLJLF5PxSjKt24dLz3iRWuPfNyrU4d34n6PxmTNfCyYVWLSaccCrxa9X7W7TwSEwyxhffEXRaqfMaVZs8u1Wp",
  "key17": "5gaoqsF3m4THGbRAyVmsxLcxY3EycEJStCCDzZ93UgRaPtro61Z8ft3Cn5jZqhEp4HYPWf7EAkzJqnRnGZCoxbJT",
  "key18": "4u16eThQiR1jUa4WbpnjfQne1XS9rNE5FkSd17sXyQRbZ59K64GLTR65td5JFUKBwKv8MVsqi8CK5ZXejqZJWvB3",
  "key19": "6Sjrj3AiVrXxTN9sZ29cJvR9HoP54xn4ZEavGsyWVx8nhxZkMBnrns4oA4UiJKeAbimTUTwzirkkNbb66y7zcrK",
  "key20": "5UEz4bh5jVDWSzJF8KtScxKyqiHwBMYjKaJ1U1zL65fWTiGdapnSrS7hduDxt58Xbq7RTj87E6YcaJivA7N1w4ai",
  "key21": "5kvvBdJNVukcbSRKnx3cJDZGwC9WgvJ35uXLaeaXWSGGH2wkvayMVZr7fppufic3MUhjTArCW2t7XY5qEaF8tT1a",
  "key22": "4vvwgPN5aNhoGEBxNNFL12va7RzXm7JTNSZ3ogbcgWgbh2rfRmWWLv4oCbg7fwWUEASoWeiwPPZrJGCAW6pGGHEJ",
  "key23": "2bi1ecn2smKir4rqZjdvDv58SXihNxUyC7YR9irRQT8XZBWsihHcAuf9GrEWHTfk9pUugWNifYoHFzeQSs48PXKo",
  "key24": "2E7uaWWGCEDVxMNFWg7xszPLzCng8Qv1QfsynyhdJcyaaZa4x73NhUHTQwr6aqocBcqa1cZ7d828MQBpLEuyvJKm",
  "key25": "61v5mmiPuAC4dkAtqdmWyq2zttyNzuJGPSJ3cQMPzTFrxHB3Srf8tEbWTcTyTfQkgmZPocqZYuVkJUWJCCBJ9mXA",
  "key26": "3GAgWrHmFBKvn44KuGwCBkLiQ3QbTm4Utf89zpWyQoVE5B8TMLDv6LDg3dwHbhZ7WPjwWiZxecukPneuTorp98vz",
  "key27": "33V6MVzdx1CLouTRDoueyNA6riVfSCLfJvWurTe5Ly2JzBhcXBjHxEknFYt2Ns7PFgQJJyQvGgGtYy6ntBgtXDFo",
  "key28": "5ib5nwyehcRBbQQj6iupheFSjdRembuv9zZnsz9y2aqMqiMzUsKeY3fb7HktQMp2P2MmkCukpNBMxudU9ruUtRWi",
  "key29": "4w9pSzcjyjhivXKvGNNUtJzfdU7GhteCpYgFVU6sBUDpCFt8WaXJH9bokSLB2w6ujq28TAf2wwgTSNXkSbqcyiTD",
  "key30": "KgYgG1yPdziX9vu8Xhq2cXmDXFvhQE6JUpKkpU7T4uL2KEM6qUTTAV5mrB8tpWkSobYm9GnpdxvQjZUCBcw6Um3",
  "key31": "2y6G1ywL1hSPLNB21XNVqizrXxHCoAfwZ9cRTmAL1mQ1ThLJgAbucGsv7D7D8RP8Q8RrmkoGZq2i6iU22YC5nouK",
  "key32": "4FdRshofWfum38JSn2KP1X5iVCFt3w5qmiADhnfGFs7sS64gB7Q7d1DB6MGXYnS1bJ129sNhDjLhq8QEun8EXwua",
  "key33": "2h53bfK5vevmaN42UWjcry1k5NEun3qpk3SPMNzVrDwkaxjrrwe68T2khj1JXvdcaoFfLv1GaxKpfrMZe3qVT5kY",
  "key34": "4j4axU3t2FeLc6QQYUs6uGrTURSBLVcTcrPZygPy2QTcantRmFzZ5oF1aHMywi38Dq7prav4Cq1QcVA8N4PSKQRf",
  "key35": "cd5a6gvs1vLdrSgy27gJRzBn7v6pxXhExHsrqq3TQ19pSq5aZzzFE3Rmm9eGCbU844ceLkj215R55CgGUmscZF2",
  "key36": "623cwVWPKisqFngbaJDkSi8s7rTRwoy7dAD5Noxvp1ZJ75SrWzNTwdnXmt9ZxVY7quBGMzSVXcfSKvQkzLqjWQfz",
  "key37": "4ZJGcw7SCCFfpmwdgTrN4KouL5zzYP2Y3ZmZanKc2UURZDkTy74NTrTdCXhCTt9MidW6cWuJfN52Ach86NzVKmG4",
  "key38": "4g5MSj3HfMFmkLBkiABYSpHoq3VXoH8w81kbcPixQBarGknZ2temi3WbBn2Z5aQw8dzwmkTuUmnBW9KuCQvP6AUp",
  "key39": "2gVBZpRvvoBKv2LDYY86HtAdBf7xKYiomuW14Nhqm4P2HVQqCFY4XfHg9aMP8cZyomUZXc9mTMCARhQ1DhxmMiMy",
  "key40": "gKbx2KCya8S3w9V7cWwide8yovKEpYLj3ZYZdmgSdUvAaRdAcwsiTQfr1VZQetBVNqjYeLpU1uuNqY3Q6nTUqZe",
  "key41": "5YbwDBEz7QwcgcHnLDAQm5DRMu9NX3rmpDhRqZN5n5Fajkorw89a7sHmybTXtLo2QdwP6pVkQj32BQBHGgKozpGn",
  "key42": "5mHpKwp4mbwUR9FMPnLsArAAcF9uksLYqxcSnchLtzcnPZNpnvrXMjiTDv4QRxMBHo1AN1vFy8mrVqPRAbeCeekR",
  "key43": "5nurK1gDxSkxsxxWBiTM2SjZNd34TmHCU3pkb2ubYwF4gW58Q2c23AbRcrGMik4Ev8TZ728ygv5QA4EaEya6pwV4",
  "key44": "4FrQDicsLtpQHiw9pLHXqCDZ15zcU8Xc4qjPU9WxCp7tUhiZidRpSQSqEVCewJssyYCGdSi8HmuttaJUjuKm8bG1",
  "key45": "eAk2Y52hXJKd6Zpy54ffV5AGxZWGN31vqmk1Sj5d6qHnfkVGQ4cTbuj8JfjGzoBX7zkAYWAijuDqPDQ7Uh6aUSd",
  "key46": "5FFU6gz9z16gUSyzg9CCeSdwJG6w1jj3WNtfpDL5WRG49eU6gGfvooQkNXsrNgZ3nZX35HpUuKzNGKXkSwAfuV8e",
  "key47": "2z7PEMYNEW3j8e2CT1bXfEkSxrHxqqJr8UGgFmhgmDq5s2Ben4fcLALyyyGSrCog7S3wXA8RdSHDegEGG2YTpW1s",
  "key48": "5tJMVasxAuvNBo9ks9M31goBwKg2qU1ELJSPsmuHRDJ3SPwWEPjj4Q1sgSCDUD8ZR9DuFTcnU8hfFFuNAJmazAhV"
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
