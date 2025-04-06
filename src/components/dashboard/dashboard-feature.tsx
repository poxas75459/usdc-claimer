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
    "3962cgLYdKa6F1S1dNtsMo1thfRUEeAPuqyRjhNndegPEdjv8TizdLYaCsyMaYgbKZCSA6F53uvNnFVLojca1nhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Ud1uBJ3sqYxarBvMiMrsUJTVdqL8HhM8JhLXTJhPcPHY8cr1cxEQe8cF3KUe9Xg6zGF6f3Qo8Qn5DhJuRj7A6D",
  "key1": "2McCzUgJbkAAS1XTwm9QdD5dwnFfkCgMMX313YBmZANLEHyeZ168CJAMtM4cYWVi4PVfxZGMevyTJJLhcG62uSJE",
  "key2": "5aptQhfNeH3yWa1sZJUSxLMJZKQAUpMpSyCWiySA8CGDqf8dCEXVp7kss5K4CxoPbUAd8z216wSsuEsTJtJhiSR",
  "key3": "29Poxwmc4bixS9Z3oZUsgsv7fgFh6QasjEjwhpJE13dTBs7ngX5QzAsFthdYGFYDVATbBjniDzPi9VCagJyuS5CQ",
  "key4": "5wW8uu7Qdo9ANFFy2JNLhVdknTYxrfkqYiEVdrqrjgHTjUdRMq5Rsbubk4ug87uPBvj6SJiVY5p2otuZewEM9Kfa",
  "key5": "3DGST4kZSjhzR8A7bNX7YTKrCz9AM2YPaPSGs7zm83BgxFMsc4aswgxGo9Kc8RoSA7dGY7YGZhXU3DjmJKFqw2AR",
  "key6": "44F8Pc2i5Euo2ZBDazzR3vz3XmHvDfBux2oyTndRjikvDac2cx8FFvVrgxgNSYQ2srC9gAGWoW86BhfSA25wT6Zt",
  "key7": "3bcrMy3beeEMLyLY5whQikS8NB4rwcbWCv84zbNRCFJ2qBFqX7BpAhe6iTc7FVyhPGM9NhwFjtwVkHb7onR13SLw",
  "key8": "3botPpJpiAn79D9za6NTV6Xzw8AgNdu41AdCVf5DTzfV9AS7GF8djEFKtKx6dYaperRguosn6M3cYwzwiDTEX32U",
  "key9": "3NbJUNdRoDwPf5DEmmDivcnq4XJco34hMztWWLsZ1wXsQ8MpEXaiqWt1fv4hkbXujHXgp5atgJHzf8m2S9mB6NRH",
  "key10": "4KcD1ZXAopH22mBHy1EcvKY7VAGVRJvr5X554YwmegfKA3dnbvLugoDtgJar8EZTPVqej2dbgSXtPvTKgFvpY2He",
  "key11": "2HFjSt1ZFTP6uwkpKbjRxXyDjs4KHrWD1MJqakc2gGMZX6Kf5pgXAVqTq3ZFxTMMZAhue66oUfcVDvySASUY2QYh",
  "key12": "5ZojTnw6Y2KxSfrRjimf8ygS7H5ta8nkVg4u1qQq5eP55tNjYkfYwq8S2Khzkocsjq8RR8xPzuKiGghFq2pehWoz",
  "key13": "3oC6M7oNN2vUgbXhexLRHfHCHkXoAUDAJpUMFWUJTzqEgJWXbNbDh5w1EcyBtM1Ss8fDKxLQt4EevSGLuhqcwXwo",
  "key14": "EtZ1A4BcMNrprCDo8qkr3Q9uRnWjnNHXR9aojVffbHJhNFQHAvCe5Jd46sGbULcEjkTgxQomy6h4vPDQXtBxdyD",
  "key15": "5KQ1YkfEmJ339wwgR25Vhq4btn8GcVGdbrj42eyGn7KzEncwhbk6AdV5roZBRu4dMpy1EU6iUXiWsMpCG1ZZUW51",
  "key16": "aQ96TPFEgy18CYh8iN5FCpzsdjweFJPjveqkjvYnYsWK8Lc6oU3eTA7o5LsPQYap9u7tSSSjnfRMjWfPuEdd4GK",
  "key17": "5V1hWMsVH85z8QDW3Jpcf3G5tTu3gfbKjrfVn3ww2ejJQNWnx3tv5n7cWWM37UEnbai2R9WKBsC74V1WEELQvBiN",
  "key18": "5QDFWaYUkEoneXkgHRoKCx2esAYT8d4z7f2udBskbnCeGojcYzKdPxokDzgAdh6if1Z8MPm3MhQZjZj4Mi6aBTkK",
  "key19": "3aspzsfkxC7ej5nwS5KpCJKAo1mqPxPQxNVdiPj3Ydn6ZbqeF4gfWeQj4vCDMkRVRj3zK6J4vjVS9tT8Ya4NEhRJ",
  "key20": "54gveftQCgBrF8VGVQNbUCPWjoUW2h8BqXdtCnQB67qcEqRn8DF1awWSmmBsfV7aHeqfcso8YxkBcyEXCf4LDKgf",
  "key21": "31aEb9uCEh6DozeKF9h3Jx5qjXbinAanVE45Wdo4Quj11reNTUyYANAoQyrwgVeGZHtiNxZs9PyYAg6f3tEvw2tQ",
  "key22": "3GqEtEyE7eAzENhV3NJD7uaya3vzkZLgKKWuddHpCx9uyfhPNspHf16dMCYYDPr6HuByLyAsVuinHQhuouHP3xNL",
  "key23": "4u7SdfGUiGsanYCo7h2TeaV9pmowFM9dVxbWpwHHdrikDQtZuTezELqYMQ3Js6AZGW64MiXBRjKceUvG2dd1cV4h",
  "key24": "4vM9WytzDZ5NBWEUrD92rX9GKZT2Q21MzvnCwuLN8J47XA2vRWwLEbgAFnMDHZMjCgb36DzPu5DNfkigXaWvknKs",
  "key25": "bscwqS5XSpNVc7c95U5RjcsTXFMqNrTeQeXVrMvy3xsaCwgYWHPCBh6aQALLJZgJCf2334Sz2Hh8mk9hbfmev7F",
  "key26": "5S64PoRBqoh9Vu3pYDRtnRtfbr4M3TofyWnWFy4jXcEWHs55KmG1gzkfrwXYVUxtztEeZmUcQSfrdLuz1XpZHBZk",
  "key27": "2hFB681QUjsKpHe94TqQfS6pgEwH4uLNTDANz2syduT1gW5SD1EPsxjyRKzZGH5DAbX62NgLx9Rx3N7RquXNeP1W",
  "key28": "4uK3bM7z4o9UTAgmwyQEJsL1bQL6bkqXr3yv6bhAVdAfrviBbFEo3c5kAeUb7GXbvq1f95dhE5a52miDyv6ozuXS"
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
