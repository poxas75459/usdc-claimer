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
    "33aRbTdWDhBsePW4djNdyjTPX45CWnMc2tSQ3k9NTp2ro6i5F9nP4je886voGHhFuPFwcZgjQJUJsfFPPmiwGhGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWffjYBv1dSb66PgjPoPaE6QMJzGMN76HpbnhobeCRM7E3PUKPn3u4pFX9vPXK7FuRDQJozSVgHkefZeLYBRNr6",
  "key1": "2Mh6F4HH8P6KxDFm8S92PQMZuVnvsoGPP4h3KLMbbAmMoQ5HdZBx3aTuq9jdhgN9vW5mpYTMn5UHJfErzuCJdTZ4",
  "key2": "3oCioCWcbfkkVbou622nfTaaajXyjUUjwfppimRjengpNydE9bPNWtAjvEroQoYwVJBhXWwVKxxN2NzUhtpBH3SC",
  "key3": "3ztk7zrGZNEteMhSbFCrnzhQyjQwWjeuGpSz3vbNo9Kih5s2iQ4fGfRbHW6vMWshLJ9Jz85s3bU6D6P8SjvCddQt",
  "key4": "5bFGBDkYeYorK6zGhr2L6QGRKV3iDKKzXtmEXKDMEj1SiW1E2iKcn3SWiwt39KsZFZ84xffh2NmBsK4CV4PjTgjc",
  "key5": "2Ep9UkQ6pa15RsWs71hqgguEQ4uGXZEtcW7EmTr84hykFDw39ruxigfCPRmpXTy2Hzaq1NvFhuPcPLQNDMy8UBQ",
  "key6": "5Hjn2zMXWS3z1KmfvRcEUGuHGtRx1RXLSqU29HRGTfusHZYETaP2BEpeQsXqRbJaw36xw7FLKuJ4f6avzMCEuUJU",
  "key7": "4iMbap46672a6xpMdwQtWkxHbVMnsZYVzYZQ2JM3t5gMscqKeTCbveAn8fiisFWDJDnanShV2JLzhLdfnFieRCCJ",
  "key8": "2HUQRiRXPTq7rrkiYGDK95jMxWYrkC8kyvtykMBta4Bp5BHfwn7TLo2ozMZL81tRQrkA7tkyn5ZziHEeP1QrCdu2",
  "key9": "5chWNcmdRKxWKNVahpr4qMKXVaxudxsgqeAMZqbEbeHKqu2jFpHM39MWT24L2wwakesRZKFs998hS2VBBdgCt9hb",
  "key10": "z4zH1ztAsdn6heoYoQiWMZ8eEZv8j1G5Jna6NYRZQxrds3TYtQz6CQoLuXA2ew3WgcUPhdhQSLw3xRGEC2uTAFa",
  "key11": "22n9ibqM4ZUQupsRVvhY8mUJm2N8Z3WRBRJHjxgSYogWnRudbvkvAhptpAGVGVCLjsSvjrBzuFGneWm7zCqWHt41",
  "key12": "4zRT9nCB5Nh6qz9h2bY1brDWiuwuZNDaDSSnQjchJojVmrTjQ7ogbjigj6RJbhazsCfLQB9M6MN3b2ek7Vs5SeSr",
  "key13": "61jGGdicK7h8mBFZLGFYocPAjtr2cnUwGrMfjyB7Qf9okPEhAvuMgTf6YSpYN4iArNFd3vQkCg8N2HW7Z6SL9Mkn",
  "key14": "3V92nQrSqXsNrUzFEYV7irRSJhmRxhimAKhrgPuVPQCS7mj3kFTaenhvEgFHgt23pgHRGgMUVmvrdqaXiUfcapHL",
  "key15": "4kjkMWvEzhvigf7RVpKLzV1TYoTDxjurTeUpgxrwkQGNbHJ4gQmvDw1paYm3cReG26VUwxG5pepGPQS1GKdY5sWc",
  "key16": "2q1NuingitdESvUWPVWvEpd28qErM3pvG7QewzyNmHmGXPJoFCw5E3QoFpmgzwJL6vG5F7cspXJJdFK6EPmj7QvT",
  "key17": "5icHfcchFzeSKLXS94dh2q11DUjrhjhtcBimfEE3nmjpofLFeHQNihNGKg9mfWkK8gb3NBpQCLcHUc9ccJJF88s6",
  "key18": "w5uvVAA7vB8QXfdWCSrfBZ33YhrvL3pV6nS62aqqvUewDHieoEGGKTbA4NN1wvLdxBJGojnASqEgtwxf3i61RBg",
  "key19": "4e7TPYriR2DXSmxTDCjcusosd2gTZAduKzevz35Nvu5i7ZTPudMwvTCajpYgoyeqLWBME8iRzvZ5csCXQtXhAVc9",
  "key20": "2ffFNco9swKGTFfs7L56eH9xqAWVYiKd2qLKnNWxCDu1HEhz2VB5EnSuctEnAx4FNufrNSgzWor5D5ZP568BBxhi",
  "key21": "2ee9YbowsmE8XVRNHH64rnveo4Pu73wTQMAFng5Uzwj5cWJBVKr2KTbXe3ognmr32non1zzcgiaZsxf2f2u3JkgX",
  "key22": "5r73nLrr6V9yFLcDE17SCjPSgKdroVEzECFWdNBz5j7yEWieqjEZa5XW6sMeALrWwT7Q8kbezFzmoQJz9MvQwVS4",
  "key23": "66ntPYvFUsAYnmhEFrfMrZM17kFMaHdiUD3qThnypFTHAhMNNEydSmgiH87xruvMqJ9X9HPrEZapABRYeGDh8LHo",
  "key24": "k6j5BvwXjYQScuGtgYbNcg3DpQnrqwSD3iBf5RXTtvUcN9qcXC44UvYDWyQggx4mcbqM2CBc1rH1dqHHiBypW5F",
  "key25": "5vwiGp3u7vaDKoFj3hAXLFwgQZYzMdcpdjVNzD4zHjVJCuBfdF1dXNbT6QLi6m9Ko3pjH8gwKRqY3uJdyt3Ezwuk",
  "key26": "bfrxFUemawPSCKXXpbssaGs4PbGCxj55PYxQX31uJPY9asyUZc9ci8uFKcZk3Kp8ehGLNRRzN6oZPJeFo49X5xT",
  "key27": "N1s4YLz74FqE8apX1zxXzdKnNXsbcj56xdxXiLdkczpZF62Xw1sUZnQ1LqLnkNaLgHpVKv1wvMUbJGV21rtic8t",
  "key28": "35B8mZLBwfLN7zcswCRRwCDdxmPTMSaXc14jadSrsAt2NmTuBqRRdipBSWnTTKaHDcmXFnuk5KitxtmteqY48AVD",
  "key29": "2a1n6UjCX4wLBAbEvTYFFGQRkuvyro48CgRMnTw1WbtbvXCzokpo6PiSzjsAi7JS9zKqADUiqtC1VRsz6Xax4Ky4",
  "key30": "24stTZTEQr7YRTh5wLzFvS4LmywNKPYpbteKkPaDA6eCka6fVh4YK6AbMDqBaRwGc3jrTdUEDCFKR4KVXydpHPMi",
  "key31": "3xN7Z77owRzNUezx1cXMQq4zoJQK2onpyb4PrKQL5PtTfG6NPnC1sR4VozGHiPQLoeb98aCo9cXUGg7QDMfDP7zv",
  "key32": "67Kd2bv7k27HZmdwM8TEM4viM3Ksf9fju7om3zAVe48Ge6TZwaCshpRQNjjzrsCgCc16zt5KcoKzEr4KLAiaS6sc",
  "key33": "2zeuVeym18B3Ft4d9tbGDqXHQoRbj5NwinKAeg7jLspoyVQaHHW8TCVpF3UddmqyvBWUX129dP8VZ6XcLoJ2UAfK",
  "key34": "2XCcBug1MCZgHmzNSwrqEqu6diU7fCC9jNQkarwPkXWQz9bFh2rbU4iDQFHjN16mi2z8Bt6Gb94zCeRj7EchzEez",
  "key35": "3pznPFeb4D8coW3nJj7VC9fw8R1gDzzvouKgntGCYCUmBQUepVW5tAGXviPjkXsDowW6ZTULvaCj8fkbda3oCtWD",
  "key36": "zK1P7o9LDpEL96WBKwffTHnACvvaUt6aGxQwULYreyTE5MbtjW7uWY1fRUh9aSMCYyCVc1srtkGJBzuQjzzAmZC",
  "key37": "2S1pQ9TJRqtt8RLRTweyb8VUvGA26rrj4fVT672wPkQm2Byt7mChQ9D5s8t4Gn8tjLQuB5BN6JKJSnnpVft1Puay",
  "key38": "5DwYuajqEmuCHgaBtArXXbgLSPaYTUkGnUVEhpEW1aJQcF94A7P28F4afcUBbEoHWGfQwr6AnZV3kv5pJrBetYKB",
  "key39": "5Aw8MqEZPTtgsyRDKJARvbu7QkEfYUn4wp7VWQa31PfKsBUBjtDUNA955qBtJBMrR3Rts3aUBncj7v4x7X6ziyxD",
  "key40": "61kQiHdE2UDajhEYf66wBnCfc8NmHKmpZqE74J6p4MzvQsiGh31JAEo6YNZGGCwRPYoBJ8CcEC4qmzRUiGcdc9Aa",
  "key41": "5GJ1QUQNv6Wq7DZS5Fj2tCqdubdjmZxhZwV7oGaMPgVFrGc9iooiKJbjwchHte6DPFHJ7EoaAS14tMmF3EkLAprv",
  "key42": "KHjSWajEfDXUdD18KXdEqjuW8Tz9713tU6dm8YnSKKFQqRLZ3viavPbnA3eAhLSZ7LwswYGR3k5WhUhGm9b7nqs",
  "key43": "3jLrePhpcxmUZiv3jS2jRaUHpQZmigcf4p9mFVLcvNpZqENeH2F5S8vZS3kBgdZwV96xzUENyA3TUY2dqLVBb31o",
  "key44": "3Sd5zyjr4JuH2CLpt3wDPj6cKAhcqbgqq7PTHxnL3k7m18fihFYdErYegpQNfF8pYGh6qzdaLCQT2BTCa2156L16",
  "key45": "3WLMTDhyT46Edz4MYJvcbinPsDm881mvX1HHcXbdsDEPUfXdVABvVhcRHuicryE5prCcyrdw9eTeExCf3amBo2Tg"
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
