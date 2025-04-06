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
    "5vWsfKiPqSEZQvDqttPy5jzKviw4G62gbp8uWgZJk1kh3b7BKGLr3Brs5shCcG2W6s9c8muVkg1cMwfcwSntiEP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KP7WGyXMApBza6J8sozU23BFnTiUYkzY3EPndzpZ3VQ58ETc6ZzX9fXyyKmNjXT8Y6FnCEADvrYsB2cg1fUKesW",
  "key1": "5bQYjU2peFGqndgzdENeELAV1Ygn8TRmmyXQTS37AN1YRwNF1b4C7URhatJA75CfR3frDRYZz9rKjGgaKpRJ98VQ",
  "key2": "zhuHXSbkWdqVkcs39K778UcaLBf7ynh7XLqpGBJaY6JKJGNtRnTrb1PQ2xe2tTFdt7j8G9vSFpSsTz4qi71j5uP",
  "key3": "5EJ9AjfLDT3EAqs3uqcs8hfbbUCboCyesa1FrV39oKPZm5WnVBB8YB42whpQzRYDWWCPvm46sjeR4DZFWh4L4TVY",
  "key4": "4MGEyUiCXcpo7DiM3G22YzwejPeWpUdmjSdSBJzpMWykEw8TVsTBHm5438jbrWRWApygaoLiKn86iFxBjzEyyVAN",
  "key5": "54Rfp6xmvSkpr3WoEaTaSJaiCkv2RFn1wXMcT6ja2A4oWTg9oB2gTKWWMNUzyxu7fSaSAhikEwD1jJ2Z2vNrFJ7B",
  "key6": "2QV4HCpGG1B5ao2KvqJH4gq1yT5CQv8NErp3kF6Z253pABANB5dYpEF2zq4ftM1hh1PtpVv25aYWaXnjm5UbXpRw",
  "key7": "3DM4hw2Vzra3RgVDeSReWzuXs2xdbzJGEYBcygc9mFxyWN124ZSvbfasFNBDM1mFNpXXNvR5sHX9ZPocutXdbVQp",
  "key8": "3R9YnyPoNApAkARtPuxB6h6tQA5VWfBuh9okdZMm1AZ3nH9YEfu9Hke95zgrzmary87zYYio742FTSHiMtDmgPWm",
  "key9": "633xAACFCa234GXBix1qgSCcYu88x9vGMBByne8NBnkKk4wsFdqj5hxwR4S9XWUGme9MR3JZyTvUYQi2minb1Vtr",
  "key10": "4oNRgM9gcJRyjTZ1FYkqpr54sySJhbK3ZUAnRaD6iUG66xUM3YLY3Sp3Gqaq4YkSDnqPSAAexVhdeUVPAMsxFh3H",
  "key11": "5FGKyWyyq5ujbHJxJU8kngyoa67ezivZge4eyU576LoYooqRSbK6VNY1VMwj5HmcdFYWqFV7kJZKzwJMKUAjqK1j",
  "key12": "2SwWmQEzAvWnFJWLghC5mWMU4WCnCX6V1hFA8TYCiLb6LZi9bhmgSwQLPWZztgHT5HaBzXPvQtDj4W3xhay1qkZV",
  "key13": "5Pm9cajSU1rbPxKPisaCmmYHiKi5Muas7LGxJoCcCLt2PSnAypwkgTZXGXabqqzyBqJFyXz5sZZZbh3h8XKH25U1",
  "key14": "4W2dg9FPAkn9jdsppzRmaiwmC4i9GF8AuRMuieihvZNmZ6iSkCcewahTMHK1D6DEYCnh4UjQ2N45j11jRufTrNXv",
  "key15": "4cYu4yyWyqWq9DHJQcWDo1PETx7GiqiVEATF1sGbXD87R2ek3zPFhwYVNaShPZa3qKqubTdX88DCksaxTxMuUNaN",
  "key16": "5DmHAepSrtxT7mJhqVtJt1mFsGV2Rc5V7eiopxHKe4zQECtFBTcjNYbtMvytXzeS7fZiN3fLnp8C8wB6RYQRyAs7",
  "key17": "3dx8KqXkWXfXNfWU24futWagDTCnBwRWtkZxveWHyJSyqw2VmDMZ9rtD5fQ1BMGgKvo8js7g4geKp7EgodHY1pq8",
  "key18": "5ugVqyChMxnaCw24jYHA3tz7sKX8hkpmvTWzjG3WwE2cFqk3vQDJsyDNXftjktkNkxswvzkEvqkCidP9RsKqroRo",
  "key19": "FEvZFV9b6L2x2PAZmmxZ1zEvJKTA7K1cNcLGPpTdoDJF7TTEsKdy2gmBU8tCig6MG3AhcqfpbjHKA5ZmQFmKAet",
  "key20": "4MrUUECGQg1u7ZibNuxNekZMbr3L4PGyLaur6P3nS5LSe7GNbHzgVMcYNktHCwvcsRVbnz3u74P9Ss2jUK2e6hbU",
  "key21": "5Bns1LVMEHFjWKAcZUzHpSfPiMwxdWQsiKDkR3WRJaczsMxQEZU7W35xdfPkW8WPy8BRezhtBi5Wm3s4kcSaMFJA",
  "key22": "2pdf9PBxddibUdhv2yNcznekgaaEionRtfztxv9kxzanhAun7CNGdqYeCoiVModZ1jk2sJfwpinmugWqfpru8ojz",
  "key23": "2UGLC7YVBvKVaH25wHzXwKsCrZhnBvaK4Y4JLJmP6Ta6rPvUSqBzYUzXWnvEYhgoQWhTexMARi4bex4u5jdN3rsc",
  "key24": "3Mfh8jRR4x1j9put7LFTCm1zXFKEXQXcWGZmMUAZKm7RkJBHYN2GRJ28QSRf5cVsQwV3KRqVwBZN3ad35ytWt7KJ",
  "key25": "3rkQi4BVQKWG2j99TTAtWFEmUuXYeAEn8hanH7b4TgHtyUx4QqpaZC64BjiegZFdPcgcfeejBVHfHYdppeebW9HT",
  "key26": "38jKzcr2V4a3fyPjZNUX1tvfXoHYuCrA3XLrKpKrSChgEk27JScC6K7hkY1C1MEsmf28Vx2hAsZDb1EjbhgMsjY5",
  "key27": "bfkGeXK2YJzzwTGEEh1t5iHfxLtvTrW3yEfFK5Fp36q1KC8fLswZoaLU8SuJkLqk8Qx9tBwzLshrxUXksfRrdEA",
  "key28": "cbXAivN6dstQJmxJqSprvggpJPiTe8WZGtrZRVhSbdNwiQWLDEAfBaJvrnrQvAapf6ZQ1ReHr7WtGK781mmg1Dk",
  "key29": "66EdhRZEsstBD6FQNvwqZduc8KLGcq44ozHNkiDYb63f8pWRCmDmaK9E4FUHbfeQoyx4M6J37AjMHpFX9pVMS1JA",
  "key30": "45mnVwfQt56ERaVW4YTXskZ5MExD9L4Fvxa9SQk9QZWTiUua13CXj3VbHabrz5F63DuFDXn4ta5LE6uiz5BKJyeK",
  "key31": "4CGRMb2kQPdTRhYDeB8AbGwMN37TUyLYbQUxAvArKkghHBPyVsR8zm1HRtDNjD83wGHVTFrckoiPugcy9SAArHda",
  "key32": "5Rdmc4KDWNnFeU12dyybUMtwywpx6AFofPTdTgpt9SFE8ydn63cWdvnSoaKFZKTgX56tPtZq2y1BMvnTRHzx3ZXd",
  "key33": "4Xuy7ryoTTGCaoK6LF8QSJuNwreTH3cxNNcdofPT2zBqKAXYaGSpZoQRY6VTfkCG9bGtzLTfqngSHncFAmtmUdcC",
  "key34": "4twZVHU71x7SFCXZSDZqU7GTcJKJUhLbjiKeZHE4rnK6w42KnMiuCVw3p5QySeFPs6zijDA2M1VWegZEwpxYu87k",
  "key35": "5jqnHKyQo9coqYef3wxg7cehrjk4E2GDZzUThYoUAxdt1S8vch82QMCtxzUrTPP1mbFFydEpa8ynGXphCEVAeVs9"
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
