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
    "bbfLuicP6QGjSmmeyrbKef2EVQoQpHPL67MhpBwwRLo9ZTHaNppoFdZfyX8qq756tTXoRv1hWckxm64oRc4ztc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28XNdEzLgMfMx5d3KjazCbbWk1rQThBsBzaut76RUdJNdv22RVDvktwdYs2Dwc8GgwiQX7uHdrC48CLBDguZLtog",
  "key1": "3TDdv2h54ammHfBZeegQ1GD84w5eRKiMjkB14JEjz9H4hoLkVspZSK4HdDBMqkXci2xLHsta3KMZbAMJeZUrPJUe",
  "key2": "4sLx6Lo4kS31LTS3NxbdxyzLBdp2RwENcFWKA3kYPikkpr4Ws3b3zRa62jKxb98DWW5sneU83ZjA7v6B1u2c7QhL",
  "key3": "3fbKo31S1hUVxPZ23PLr54RngQTyYdsxGpeWtVdYrAjEbWC7hmHPcS57sPkGbdjyaghUodPQ1TXBV48qURPD9AGE",
  "key4": "4rHv6EigXSJzbEkgQr18kCcUuXsH9wh8WGhXWVwcXSVCKg3KbFqWgCvu7dEPZUjfnF1zqWDor3Y4KERvTHcTxYDd",
  "key5": "SztEdwFKEvR7PanbHeVp3fxHFXDZURuE5DpyuUn8EADkAbaN7N4YUgvMXqzVCYowo5VNA8WR46AuEYkYndyzemU",
  "key6": "3gyViqJk38HXpYYsWYWMt6K9sGFBqxBrptxoY2Ygx2asBSLzmPk3kTgCviouLNDr8p3PoGZ8wfeB6Cw7Vk6fbZwt",
  "key7": "s9QHKzQNy2gtj9VbXFc6yd7qDeWaFrwQTrGvMAoH3oZEoTXYJ5rCeXBUJ7vPKwRS7CmP3kQKGw98UHpcyGKcXzV",
  "key8": "5fU6hoqezz8mCKYHe8cjBf8LS5Kceq1BJ6xAY8CsQfCSRphn5UmNYZZa82RrCVvr595BJzak29uSVPf8mHbru1HR",
  "key9": "3dn8kDSQzGbRnwiMu2UuX3yDoy3XV9uauhXqDJFpX8u5tv8ApwoiXBTk6z3ESCCTpGUuWDSSgG4L2K7kU1dHM3sQ",
  "key10": "BQwb2EGJqg3XKYMjKLZ1w8Tt2cwfb8RGm8wxCc7GmcQtsR2j1dfEqUKbAAfKjBrgduVfEB1fpoaavfXCxxvk8xi",
  "key11": "3FZcT93VYUUjB6hfhB8qBxSHcrNPA52Yj61VH8X32NHywqSUuBR4U4cnsLDCS6jPMK1cFfiqsCVvAWNYLEUV6Mtq",
  "key12": "2yz1WSB64kDcRBLunUkiCuwL4GtfPrZgZacQLh2Fsk6kyYGXpjPoorR5q4cT7G3nd1R19nxPUdogCP5u1uL6WkK5",
  "key13": "5VPMYuU1UQwyP1uz2MgZMcAmNNTeCd5iFD7cgJsQMYqDCCseCSuWeJCfb9bbCoHdd3zt19RsdADnLAysLeq6YMhu",
  "key14": "5jB19MkmBSUtS2ivyGnUJWKWwLrsUPVJQawxZPVjHBRtCYxukbMakGtazov2qaPfLaBMVTHs7YfGFQ6CGgXcKT7s",
  "key15": "3ntqxJ2FQ7Q27ZQJJEHugzbkzuKBFV3A7tXuHsByLAXHjH1ohhPnhjBcnT5umg6xBZeGk8V8o3jfz3ZHGFYpcp2t",
  "key16": "5Wzv8Mj6u26uxvd3wb4CiX2hDhvv1SsY5zD55UHQg1fQegvzspg3xrvEBSJDMRjsSpjJo4xYAFZE3W3ysnEu9yx",
  "key17": "3W6VSTMmyncQAf7rSH4j4XEDwcFdC3LXeK3HqTcUgCHKVUQMKfeqYYJSzMQnpU1motD6xP5Hp8J4XWX2ynXigjem",
  "key18": "3uF2xEv5UmG3HKDk5zND1A29yQu3XP77p2Ugxkr2HqZCanJ9Hgr5hUbajzxzobDwdqP9tHzRuFabx5DYSCFhLebc",
  "key19": "5RKVucuRF8JuaqAa2KDpGReCUuQRQHaQ7ggC6fvmASqriwCYTDaNkRe7o97j38otQsF3ZJFkKH9QeTtycrBMD7iR",
  "key20": "R9P1h8qknfTCEPZ2tz5VBUMWvPKSkZNtG4EUBnXUWaDrJuFQUNdYVb9fbDRtbaQMwkhR5Q5ra8RsdvfPnavSsUJ",
  "key21": "2ey8NEzL6bYPiCu2LD7u6GCt4BUjyyAbT9FS9uY6ro73dpcvhgp9vn5QTm8oenu4BBYGd2GKSrFSdTkg29DBpUVu",
  "key22": "43GRJyM21bYRHESan7M9ZqeMBRrHFstTEAVFwXwGgVX7E6htyHRzqzM5Fito3cF4U7sfZKHwK7RuixHyaELK1ZB7",
  "key23": "3BBRMxpTp4K3sm7iTKwn73pA7keHpiKizW5H6LfG3mNw4UA8D6P3M1ubjmpiNuYbpVoPNi3KZ8E9up8ScbyYpvuv",
  "key24": "41nntB9WPWpnofpFNF9QGFPMR5XnKpzUzyM5TWjSa5AkVRvCW7tfVNcRPiHJxsrW8tgi7gbDEVkeM4WZBEMoNeNG",
  "key25": "4hZHZaJhDYMDW4fJJXtXRVSkwENKcV9c9fipLdwKcfxeAjfHQYRehwFt9bxAm3FaNqaeYLqe41mkUgxn2RCkd8ng",
  "key26": "3B1XDZq6g5MgBzkydUqmDGsswk6LzFvGnq1andhgjr8idTBD5wuMoBEJoZfz8otkYYEuRgHr2T4nkaZ7a9DNxAg5",
  "key27": "4GEGojMQKUuJAKXynZmsF2uHrv2JxAq69RKjkAJFabBH84izkz7Esuc2idyP8zYWRhbrhVykRc1Vof2TvPM2vyzF",
  "key28": "2YapbmkCQybcovYD1tJ8gMB2dEicNikFkBvQ12NA7pQQXcXyQwoT2pwS9VWh4E3BzT4TL8Acz55Kn8uj8qTF4Do9",
  "key29": "3KRm3oqweJHzcFmdV31xSwSjPTyagvwxz62zSGx9cc2muzSt6qhfkeYQVWmingT24d5QKxNiW3cYyd1ERLwVnXyL",
  "key30": "5iH5huVPKJHXoJ1CEZzhzB6XF2GMkMwq4u1pbtYT4GbSj9RAx4qKe9RKuyR8zMVjZR9uZpBQSD9GgSRrmV4M6Yqi",
  "key31": "4i6k6n7RnhLMvRpHCSQVN39g6g3mSGb2aR7mKZsXamkUekZvUCWdLHWPBeRcfyPznExMAoYPtps5FyJ6rQPB8azX",
  "key32": "5Afvm3QjrMxNmGLB2158o9oA77PS2VmknWoBiWgk2VmtqZDXXdar4XDqdKXCYeJAMjkJney9mhNct4vRHfxC64xp",
  "key33": "YRTxqBfrkD7RLEuXEsAqsYLFGnkQaxzqGZuZQTkrctKx9BMUM8QZu9Pk5D28dAXuEt2mxoa14K284tMkLpd37ij",
  "key34": "5z3uupqoCYAF6ExZqUZdafy76mmexbaYe4pBvYcMwdE97iX5ycX87no5MCMN1DWrUNfaDoJ6ecZu1WizNox3oFNn",
  "key35": "4QhzqfUrzeyf5dEaEESS5tPC9HREoRqmtfpD8jenbLSsq99HFkpYpbRk7neX2ZxLdDWjPuSPwAWuoekxz4BV9J1T",
  "key36": "4L7bdHozLLznphAQcYudEMkS3wTPzxhU1pkruvipFAGCxE9vSwY2WMQtFuEHidyBM1sUCFbyFQ4b8s88yL4im1tw",
  "key37": "3pVWEfXyjwvKGSzCvrEnmrUCC137WpeWxiuVcvNkvcFyJoiosNFEygEU6ZmUoPZo7aWrVM6YUgFGH9eFrfzJwYss",
  "key38": "HbtMf3ti7eASjWAR8mYThPa21dBVPrUFuKzku9z85s1N4butnoDtpR4P7jbhZjc3qDbLWnZuN46VsTo4kzXtYVZ",
  "key39": "5xs5A53UfJpdPygWe9GRKjtYVMa7jADiBfPZU87qnnQQvG8FLP2Kzo4G2awve5h8NscMf3V4Mmj96JVeBR5GRvfN",
  "key40": "51QLZP5BeFV82pPLzJPtUf5NtoRmsq25fuVQb4YaZPm42TAEkGTBHv4xQAiiGe81SWmDxDfgqvoj4zbKMPb7RUAL",
  "key41": "5G7ukg14Vg8XPEmQ7anME84rzhLnfH7L9djMhsLvaqsNuvTjLGjNZgUVTDFBXPfA4Xe6nikuKNkTLBokDjDNpU7d",
  "key42": "517D73N6U8WKm3ktmg9hkfCAauL127gU8uAzCCipz5nEr9mScuLisiuSHPhrcTPgocWcLg7RfucvrmY5QN38je8c",
  "key43": "2dRnr2keSnaVmeKgZoK51B5V6QXHYmS4TUL5PysErPydPz4FMB5WSbXnuQbuLWtsp52xbbcnBi42F1sLrcrpUNcM",
  "key44": "3W2QwHKgGtYbXAzKZCxazWC5kE6so3PDAaH2pLcwS1cnpZWJE4esn7XMxQTCapTkm3WUEiPpyUUYosVjhE8kor6X",
  "key45": "W7hwrPU7Q1N3rFrsop9V6a39pvoGZQMMX2VFZLigLF9avpSK4NN4MwdK3hN8YrcgZ5aVZnHatrkMdcE6Ym8kAfG",
  "key46": "54bZpm73aCBmSWqs3Cd3A5kbnoP9HRnQWLF6zTdwJwakp5gE5sr8BiNp4EXjjXRXkt75QQuJ4jGU3cNUBXxRWBQo",
  "key47": "2aVAudBHdEMZwNzVVjRfBvyBJYhVkBtddQL6JyrNthWiyDLizvVqjjt4icaVSnNDvSRJpr79MBPgkEeBLr1THGz9",
  "key48": "7gBRAj53nCXhw2vabA55booDbytj2kjUBxNH5KjpKSkcpaaLgtB2RznvNNWWXrUJZb9pvTqbfgAKdyg4PQGT61J"
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
