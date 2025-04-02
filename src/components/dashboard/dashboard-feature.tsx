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
    "5sXzQD6p6Lv1BMHfoBnYLThUufZVfWtryPf6AmnF7BjaCe5bFDKaLXdSDBsgcGXjwdmEUBXDeKZu6GG5131FEafj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sodeeudcwXSrHfZ8YxEsX75vWiqCDgBqg7oZrweDruaP1mH1EMhYUfU7s5d38L9iGiiTFiMRzYdTLGFunGifgpa",
  "key1": "2FmfpreedQt1GjL86Ct1dZFXsPor3155isyRZ68j6hTH85Keqs3JJ1uUSPdd5REunEkQVodQxNSY79wq4y1poBvb",
  "key2": "RS1Mp8yPX85gDjDDBrrW8dV6NC3vmn1EEeYLaNpSNu2gFUsRmKziHGtAKarwoukFyFAD9TPM2ZFvASqnVma6XYK",
  "key3": "3Lw61RJtbSoQdpnGbsYe2jUxc53yaKdcNADdSCPSwABJ16HKNj6jMfT9FpfbcnGFVsLsCGWF5GLxhX5m7trTy3wg",
  "key4": "L2M3zn17UQVXuQ3paxiDW3MSZZNxmavvyPLXZun2FyhfXa8xnM5kMyei4gUy2Vje4EM9WqRKdJqwG6u7UmxEVJ2",
  "key5": "WiQoYoaV5GsuHDghRT5czGaNkfhUcvZ85z13WZGUuVSxFVpvfwdKZArd2dxWxRcQq53rG2RmPC99cWmweVt39r6",
  "key6": "T8QwAbmyUuHR85zsE1pR8LEV4SaxPKTRBenKvNthBmyXPgw7wGiWpE3jhvVhuQdxbTAhNKoSHcJnYpMic3K2HFd",
  "key7": "5gv8b6ovr4z9MmqaE27S2omWkL21g7bMGDHVC1oGgJ3B8XjQEimyqq62EVCESVF4eKwXm3rVoGTt2VWqK1Uj8xTm",
  "key8": "4R2dd2UtKeVNUC7uyvxj5Pz1LYFEeeDYesoae9R37XgXA95yBgP75WhWa2ERE4D25Vnups3ojRvJXpTxerh9u6nz",
  "key9": "5ETUBt3jaxQcbq6P9CZ8cBhf4ep98ovNnYFa5Xhby6FZUxTjXWumJDVUfJMHpSk4yCQfRhhibjE9HAJox6ww9JK9",
  "key10": "M2GvMq6PWxEecih8UTDLxKMWT98aNmivSRz8R2uHnk3jCCAan9r5UstTRJggt3pzzcQjKZ7Q6BoF1nCPTKVHbJM",
  "key11": "eH4s9WBcpVBxDvqZgjWgb8D4HQT5cjEc9dhTE4r3xUJFPDQ1oLLwxxjmZZWTkHCUQkJLfa9PfmG2TjR5zqrwLFT",
  "key12": "61gSNLiPjpj2wkcriJm1M98jW4aQtFSCrfnRTHAY9NgjeZntmLTgsM2gt7MSonxBiFcDWLGxqwgF6r94gEb38vxS",
  "key13": "3NAJBhT7Y8sphpfr1jejpbGkY7umiScrGuRtonEYXxhnnFcqnJPudpVQpzuN2vwVrFao9of99i4mPKTGHUesxKFP",
  "key14": "5jmfvGLcBHd9i8yYLWdtMe5m5b5ytWnUunAwajyQDBSREKu1jEBSqPPSECmTsn5nUQsuRbsLzbHqKEEYTmpUf8gC",
  "key15": "9wJA2xh4vQqeySJ4tkbAawh7jC5qRivFXBidyibYLTGTqiY1StGuMvYmjsRwVohWvercVbrMZ1vgKnsMA8SfyEe",
  "key16": "3Pr11jW4LkQNCumLAGus3DTtgMZK3n4981LACuvJivxSstCmoZLBmPX8XhLJTxo2dK9WsLHiC9b5MR67CH2RD4v3",
  "key17": "26cFgUEHYGc7Qeahu4MQgCuRrdfSugdTEAN1gNzYnnXMzSdQQzzBL1oQCeSckhCGvzxJP5q1BVPPwtzGgthBGRdQ",
  "key18": "44dphY4ZauAhUWXZWLEUkDPgTc4QRieNTjQyu73HjPDt6t8k96R35FGLRZ8KQcvVCG5sytuivZv84BnnihbzRAF8",
  "key19": "4yF8suksC9rz8eoTFp729te634ccCRGKDT3PQaKDC4CweZHbvHdZNNpLEYkUTwZyYd8Yhm2j3aWwByAjm5xBUjLh",
  "key20": "2SjyR1TojgazK8bgUF7jocHPfrqA55a7n5G4oEQ5DX86qKkW9xpvbe5ds9bLouLBW7iHAoyAEYpGz5hJMa41XGZ2",
  "key21": "4vs8w2vGLHqPgMwbHh8rKHStkfYujjXzXW9ZXjvTupbHvCHAAnGWR8mwxX21qbbfq911rzVfv57H47Jytzi9NrcU",
  "key22": "2WbNmdymgnpuYwtook92cu78zWfK744Ja1EXoFBk9WeaXQzJ7XDMyxb4P9VHcCK1bK9c4LgvZZBNaLgpcamwydUd",
  "key23": "xyqgBHqdzT5gX4YvL2YoXffRiFZHvdrCKXcEZkjWcsd7qbujJ5T7KEoYi4PrriyC6s3xWUvCQWAH5RrvkAQYT1o",
  "key24": "5Gkco8pg8qASnxRbid94GzT7DJtPJHX2ip8LzUjjSE9d2dMyxAAdsidvwBPJZBLdfhBZeo2PMkdau9hpoGXDFBjf",
  "key25": "22PYKs4qeuvWdRR8uqYUCFpB2QViFDK2Dk3bA1gYrhHQWn6JZL1H8t2iBAQo2vTn8pVhmKjeRf8SzJMNVFeFwKQU",
  "key26": "v3ogrknFvXGCbZRCScoQTg5TSZytDxJcpCczsfpYPr8qhPkoGVfTSbacLJgPeLQ7kqjcB1iUxucePhS2KYDy6KV",
  "key27": "3ZQV1z7D5oH1cvuoHdsUANjdmAFkQoAkVYjr3VBRhHtiRWHhK6Q6kNAQe5Bir16chzRgDCSjVbTksTmmRPmjSMb8",
  "key28": "3MnGAHipnSh7LntnktbWKkJ6vBsdvqrhDfZbcvhczkjYZVZkfoDzUZA1QKYpuaZAFLXHSogCJT6TLvPJfjgduw9r",
  "key29": "28rmuHdDc6ac7qL3e5uArus1QeQtbuYRUN3Nzp7b2Fd2Wq9hx7QKQsXtGq9UQJdefTxwaChxvY6AfaFaGRYqZtTy",
  "key30": "3fbP8mfpG5GYxcFNTh8sheXV6iBgx8b1B6G5YZxy6uU13WuqrYMYaJTmL2X5djti3Rp3wxmcXUYmPxEKxfWKjrBA",
  "key31": "XRownVLiFBBQPfSt8rGiKhWj89yiGXBKD7RqgYMkBcbf42ELai5owGFVSsdz3gPTLp4Mkbf2QCfcqqnKnsdikrw",
  "key32": "64aJu7eCbYZEuGkJ37n5ZoJQEpyPUGbfL5dFLu4BaYC5acWd92SKvUrDWfT4HfFfSZC2dqoj9gShgr3sshLs1NTa",
  "key33": "3YNyPmHMoowNULmDLgxFhPCUT5ieUB4SeBVDryU1PuT9VB775Ccy4Vfz8dpPw821VT9JG1DPqkuiuBetkYWM5TSK",
  "key34": "2cTwrtQbv287bVUur6by4R3mXpQgQZjRCgDcX48UfiF9i6zn1qtq2Z2VKWiZuFJYYZTcf43ArdzNBTge14YquXDE",
  "key35": "3djJKmg3YjuoNhFSYAGyXS7UNciLBWgFuZwa1BYtyahVbvpaRXVSGVonFjGBdxviWXRBYbjnwL88ZESERLpzq3e8",
  "key36": "4WAmbpKTM8BticvPVvBwsFjQcVxwRtNd36qq3XJSLg6rr4r7egQE7637biWbG9axxVTWcGRpfKt19TkzjcAhzST8",
  "key37": "49wX9WejLk5hKiHntPkKnS3UPpjNKEZ8qGNLYHGJtQXTQNur3K7qT42duApJ1n8xe4jAdVoNagPep6fcsCZwa6EV",
  "key38": "5gnhH49KkSZ9jXHKQzmtjYMNFqC3KnDrgQgyN8M7J6aHx8GnX5xN3GmxJcuTLUoBSAuf7WyH3HRDkbDqoeqwpmjB",
  "key39": "3a3MTUoXy7qV3a9AkCTDAybRLjS1MomrS5UuAbfNvBPbwD7WBbSarg7R1kJ52tX3zmFgnB8fxDPszySDNLsZHLdr",
  "key40": "W3XZqGU8s9FWReosYqATRrKf1fNZSay5mv5iaTBo9JbNcor91bRMbrgMxkHQ7ddvWb7iQ6tAXvBNDWVJA8cxBeo",
  "key41": "k1QdujfXkYhmX59YYSpKejaaqDfcyxhfPrP4M7JY8acvcy8VGbyA1pdC3Lcw7ritnxJmhE2G3PLJZf6abxjh57U",
  "key42": "3rLkY7wCVTDbxyZWt9Haejiwsdj6JiT82RwztyT24JJFsLCUNvqZDhrU5opGYj1fBejfwcF57p9nShBb1ggZzhRj",
  "key43": "5NNnJ39e5LDJsnNCjQ1rbvgHxfvsTeN87dKE2AzNWd1jTQbZNeZEi8wE3GZDopLqJeGyqvhjJiK11jLamXCWRKAp",
  "key44": "3TL7pPrPfHtPeSvEmTpARUaRTARa447R2jDcJkHevegRnzH6zYYJ3C39gw7hPd3Av5UwcSdN7Myiy4jVek5y9gzx",
  "key45": "3mpFShknjLWsodS5yA3P5pKnTP73c8tZQ5dVLgw3GkrD5Rd31gJN7mMexJCji6nLoobdjW1scQySuLR1LU4Ehs1S",
  "key46": "4QwDppWXnfiiYe1dgdmAfKh32K7Cg3ydEVp6r1qBnUJxCwyeqMxBnr79xJWqAtmskoKSy6gbrXYAuNgotnqpFz7Q",
  "key47": "Q4P1TkD833UxLqMYZX5qt57eAiTnpHrxtFGLvRrMSqupmpaPvfVSgEvd7eLNr7dneX3LqYyiPR7eeU3ZGYURrL7",
  "key48": "idZcZAYJk96Cc85tuwefiYgnfuQ9ryh7QQ3LYfkboM476rLB4auSETDKcfCtVsrtAwM2tdL2o2tVxTHB9qjoo2J"
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
