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
    "52kAUJGMC8SfZumrJCVvM9P9uW43MTKVNQcaqF1WoVuVzfhKKcxZDKwfoSbyNMQFJSBnFRXH849zShCbPnk4VQ3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "avTdFJRsEhNFzaMY3tQ6aPPTsPhcaAdtskqb2TayUjt7jAbR9wfAAbSPgwbQffgr6KHEXLujad1TH4o16zWtp5K",
  "key1": "4Cyo4grgLuyYZ7sSeAcrDCHY88m9RiKWSaagJwkiMPfAhatgcfegBbmURAcxHYPPM7eHFBaM8v9y9Nup3gngtK7N",
  "key2": "32j5La8JESMFykB5yz3SxE3nWqbcrWy9aWFRnyUWTu6LgPGZjhTZW9LQRCCwcdMnzvHiH39X1j3iLRXrZDyYVyex",
  "key3": "4jn5aYS66PT1eSrbpvyjcEKST7hD7ty2eaRc6y8zYNNVUG1iW3iCyEuCnGKDExX3ArfXKoZN2NW5TCjetHwuWtn9",
  "key4": "552iD3HaUtQnTxAgF59P6JH2XRVYtgPnbQHHZx8B5iSY9rqvfwXHRZUM4SNWEah7aTkV1DzZN8HQ7hVm2sjZCwqc",
  "key5": "26npHxFFdTGoXpVeKGcfCkTbdtMnff3sHSNDRwnn8PfAi3h2wwgsDYKJUPCoVtbSQedmV1hBvMJSNV525BffdZvD",
  "key6": "2v9XML1S1nN512wwnvyQaCRVVZzYjNToychjFd5gbwZ3uyWxKKGN8QR9SAT2524hYVQ9vcZx34j79QvCoKXWKhu7",
  "key7": "54HtoCW3AQ2qmDBhuqU8BbiHbvYLB8hHKSJr1N9PT6NKo9VaUcsUQHVbcyzFTpXXDTwTYbPhNFj7pAEA5ev2XyKV",
  "key8": "YWeWsnsdp3zjJY4qL9M3BtSp6uUEAdkF2jjPtY5zceymcV8jmt8cPjcQCWDT5puWWzuS2we642FKv4r8Brvqjnp",
  "key9": "2ARo5Aj7cFahkMSN9FNoGinhdWPQiE5CdBMTL12BZpHvjHLHPyc2REEfnFpkviMny9GRg9jybtQGSjkAGrzk5KSd",
  "key10": "3f3v4973Mhe9ChMBWXuAxMBqvdHkPmkktgpS344C1goZ4TBixxFqvuSMQZzQsQpXUp5spok3wMppk3wYMyPCxk9S",
  "key11": "ZWSGtkxN23GvMumG23b2fNwjfALtmmXA51USi19vtuXsev5gK3qLp1a1xoD4gwRLGPQPRid57KfrHii4HALBHZg",
  "key12": "tKLuLJqzdsXyzhHGt1CFhnuJG9WbDbfe1drWrKNHjXe8L3iipYxnxS4yJavf4AijKCNR2YXg1cY8Qgtutbq1iQr",
  "key13": "395x4eKj45tn2D1F1pcjpVvH8w1GyyeuWbCZZmAH5NxnBAdYgHxvRDrZ1ACCmXBK7d7E1UhB29Ey5vyF4b7jeqLZ",
  "key14": "4Wgdq6DNHuAJmX9TFGZxZkGXFG7N68ecU9wJrXUqwdNFsGFtmFFUo9LP4eQMhvK2t4qwJGytQFttn6ozDBjv9D5m",
  "key15": "c679v2g8GDfi8d4DhvkrsgStS19pTcBUByg2TMdTZFbLaqfTAwz6DcVDBKsJzpNNDjLFQCsV7b3kNEq4iSDu2Ai",
  "key16": "5YLbHJidgoNnWsJ2KHYPLCsLDqYP7kmwLhnTWRd6T1WhroqebfCeWq8GVFZCYCKQ7YJYCvyMj7GgZvv5H6F6Rejy",
  "key17": "2GdpX3EdYEvQyrUjoa5HZ62BmsSvhKxRabvCctLhx83YRXMVUep6e72nKySxZttLNpZm7Kqc7scJGLtLt51QTabt",
  "key18": "5FssR7Xq7GQ3ESptz1ihX3rKScpbyZ7HMRveZDkcvdGkbVU81Yo2Pb5XKDEx5croE9zMy8TGEyPoBWFMK1B24igx",
  "key19": "3Fbdnb71xGHWrcVtwdidd4wUBRkeotpmmhGgYr5VbKEUxQttkYxjUAyhcfXmfGtdpRrE8o2CXcFNt6hMW5u7pSrK",
  "key20": "4uM3JT8NtDzyc4bZ9oeuxT7xjdU9LQYjY9a1817REdQWsgNHFeLn6kJtC7sbnqGzhgZ4R8So6u72nFgP2tsbZyv2",
  "key21": "5H3HPBi84FPFgjosfH13MhW6rMvCXqeT28gJV3iwG82XKuY6Ftq4Ziod7XVBxQSH8VGaTWzfZybM6gFC1QEFBBZS",
  "key22": "uB6tvibiWhYpe75HTyher93RMctZPCuJeRQ8gPgNVy7tf1C6TyWEqxHMkNvnAd5s17A1MGAde9DFWZ4BgKqh3qx",
  "key23": "3PpMrtKv8Zt7rJtSu1eCyDc6kXeVFo2SSpdL21CdGMoDBEwYDKbeaeEMbsuaQStHdkR95ykMGLHrzCK94q3zGd69",
  "key24": "QLQfd1NR9qfb6kq3uERovpkBKFBujo6ckj3Cp5rEyFasShxL2K3ekbhutgUdzPxhAQqEHFMNiG1dBPnWy5DmXcF",
  "key25": "5afMmQTg14gZo7jjrdW9MutzgdKGA5KokkY6zbs4wdrL27PDTdUZ5cArVYa8rNsaERyHjPne1dDpoRck1q4U1YdY",
  "key26": "43RCpzWVkd2tMgkFHEdenBH5g6baPnue345pBqaNmM6LQSxzs4L9d3DruNTj14FwmU7ftagFPRvkPVfTwBYpnwLn",
  "key27": "7FxEZxVHpA1PjFNizXqvu9NHydF8PQjqwH1DFAWL7FYXNSdXPB81Go2HK7ztXybqGjLrcaxNtFaVh8C1zGQKisD",
  "key28": "2F9r3CE2wiamhyGsK5Zqsy8PmGDvH1tzSR1LgDfxvLCMjA8qWqmoGe6MyJzDkChiWxTfHLGzTZFS5asffGoP5Mqb",
  "key29": "2ESCxQ1hvvQmFL1B14txkLyTA3PT91tXDCheAxgbK9YqpiXtBoViGxJEHdhkGLAmtLPnrkitMCAdz2XSzJB28yZu"
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
