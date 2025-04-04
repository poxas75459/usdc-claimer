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
    "46krok8Kj3kykvjETXxQBcpAfHmcNKAZJnFj6bLeYarWwpJZt4Np1XNXw1XzSLZtD1W1VX6i9qSey427Cm35oxys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUH9LVGuFokJe4pQ94nuHCaex9fMWYopD4qwTKajspMbMwd5YA9EWixnJo5HGZYzKsahdRtZBDP6fcVrie6PrPN",
  "key1": "2gfuNiWUx3goJ5tV6emzB765kCy5SyDWFeKaXu52yHhYCJZaKueL4CecfdgR5XcgPHPk1TJpdPh8K5oiAcoQVmZB",
  "key2": "4MjZjiZV1pFiLDYZtYgrFprAaxDTxd642PoKqCDXh8DUPD1JiCrohDsnxeeyV8Rj2WUz5hEqqWQB95XyREtozGvR",
  "key3": "3x87d4oHbykHmh9W4T1kRRBMjLzYCTBpu13TUfjNCFaEDE3xB3Hdh116QxWohrGSKwBr7QsoUtae4TXC6FxQgeBD",
  "key4": "5We64CXYdd3zkeWqAc6D94tJTjXxugjm6hw3d3YQwnPiQEzyVWtC4j34YFVkuH8MiJ5xUwMUNBk4iiyc3tpWzFpX",
  "key5": "5eLXDMGcGrtQiGEmbZWYMMHzcKk39u2h8749FzFhsxa5UfouvnGkP3uUZ2VUpqzvyZ2adnkELwbJ3Ypt1wQczHYA",
  "key6": "4tb39UaeS7gjbSS74dkMbAPSoWXcWGVRDBb9uvCdA9n8EduRafsvQ31SZiesRtWKu9WqZHBmuofzxLA99QCT5sin",
  "key7": "2oBq4yM5fvoYNjbm5GzWawrZnboZN8a68oxvwH9F6RA7HHFMjy5W6qbYmXk9hyiVJdkXEHeDWn16Axvvx5dKcJqX",
  "key8": "5rA6c8z65uHHy3mw2QJD2jdgRkyXLR6v6adWebtKwoG8CoPbby6uR3GaLptvrE9k3QAFYqeacHcp7FtJcUsvumHc",
  "key9": "ydBvEVNRGA8VxZhX64ceBVXunDr3LtW6VTCUvMf7eQDycToqQzAZNGptAKZQiXeok7eZ1x4Ue4Vky7xYMbGy2n7",
  "key10": "23ZangbVLXzgDvfrcEQJfwX4ib4bdYbvmLGQPd2CENgWMeHoaGZD9Vfw5X9QCH67DYpHiQaKr1z5ebERvwNrHQSK",
  "key11": "BmmkznjEb5mjcvG7YJ63yr7Gthy4gJFgJuidh18VLDA4GEdMzBK2AtNi7YqQKqM9iWneipgjSKJZN8dvJk4pe1u",
  "key12": "51SrnMLK2DJFeCopfqJGvzCqL1CFyhDHfKdXA263hLJrYDAUveSQqPEoEniS78SkMYGT9traJnEDiHA99TYsHS46",
  "key13": "4AicnmDZdAKbpdxDLbUVFhBJnmFGA5qVzNUduBLKokeDAc15MHGxsPz1enBriCyexrnSTZGWFXLJ7mdQ3pRTxCtg",
  "key14": "217eUz1wTfzfd1RuuYWTHADLja1mTVXHrE9kc2HWFpLmwfLEbCpk9DgyDPi5EnxrAtN62qiv75yUcnBR7s2HXSsm",
  "key15": "TFUxDNwf9WnuVY2zxXw2GXc6LdCSnkSca2KLqsDVhZEMuVnr7Dn1CSSXNFrUzpivALAfttRbkgoW9s94pK7piR4",
  "key16": "3EsaQxzuR4pgT2ffkdPUcZsWFjhzKKKqH4wH7wFq7EFKo1qcPkPA9D3QyvJv4SewhyKuLfcQ44JD7piyPomoAJCE",
  "key17": "3eK45w7ZaSTeK1MeWWCcW1hthYCzo9U3vKE648hAngS3nFXxu5XzzKPg6M9tb2fZmVZMH3pp6Pz3o7PnNsoXGc3H",
  "key18": "2XpnWfzUQVcQQ8Q751hdV9kHSsNrXxrFAaYL4ipWJpn2hYYYfBdXcma62wZYxaiVJ8k9dN2RsxJ8yNtGDNp7kH9Z",
  "key19": "3cEFizxWFZtXVaPvkzZXRMqgvXHAVKKChv73uMgwDjsAnzzNqZCEnL7AXsSzb4rFetiW2JQcoPbcVrUr1mFVRv3e",
  "key20": "3Vx3iDitRYZJiffXFZEcMd8EFwpm7GaC45u1SMsLyWHvCZCYiM4AuNwP6MauygsxxoRA2A3ud7hJGjs17678Z1hV",
  "key21": "5BEEEFedupPk6aAgKLWGfzQZuFFxxfsZHqMkRMvpa6nZWeHVDM34oJyrffS5sxAtXFNo2vniipvzyoGhbb34rSbj",
  "key22": "3vNTGpRuqGEP5JcxFvtGU3kAWxEXWRpMLvCYTxAanmoUEhGJWeAEVLhGTdDYNmrUYhzwvJ1G8RzjiHps1bfv19gV",
  "key23": "5Y7KqepkgADXkmYmoWdk9YGSq2qfdNdACbGAA4dA1omujcY2wJ7Lz77UWnwq4ow3QCqS3UeXftmWFs5A9YZKsKSb",
  "key24": "2LousLjET7KkyLfQDqXYPog9JMfPtT4feDsQkoYmTXEsuwALZM4xiqFSpVEArNAzgXT34c8CJKkzcSWMGRTqgNFU",
  "key25": "5HyXvquynqBV31UJTm9fV1UQvtEivbaeebe7v8i8Vz862D6swfYFRVzYjt6bNV7aNvEwVpUToxkwrSBk3LNLEk8S",
  "key26": "3u3AAnTV8XPweKaMxmVAQHEphPkhTSSjfheFkdVnAwV5y6sSaEaWu6jiNwTLD3yvLvhSiGXdyHWd9EbDxmQkJYzp",
  "key27": "2W3ocpPV7AqDErWrawYeqDgK25di7whBDRJrQhBYchsKFz8eQiwYDRtgn2hzyoawZRhexdAw3XPHARmdVkW85zWT",
  "key28": "4V8FJPdGkcabbXjTLNvtGHtmXJLWeBY5CRvX9kwHactepfe7LBqtwih4jHtpboFN7hmbRLesK8FjAgS6Spen5cZf",
  "key29": "38iCLj2iYRJzcAKUNk4Qw2689fg1DMzWyZhYCjw8Qu23HQgAWfTiLnZP4x5VXvgxv1CPGjLGFBJG3NoZyTkSGRkK",
  "key30": "5dJaE5aaEwkzHvfDTCyvC1uRAiHc5obyZg64eyzuVK9vNYD9xSYNou2bU6FhyZxe4pGPzDLVLQQXG9oBkZV2p2Ct",
  "key31": "47MnpFwXJcJV3whpEWZy9z52WnPzpP8jCXNMZfZfThxaBYi34t9FjjE5tGKfL3D11fU8SU9z79z8jTnt1jCpznQb",
  "key32": "2z4pGSGMg2nz7LtP9jFspMQ67kRryd1sG9EhcRqrkkFAnBM6f1N4BqN2v8c7DYVp5y3MeQMXQ8YhgUVPcZqDwP65",
  "key33": "3oyxavPHWbfAi6LsqUBLg7S5ThcDmmyeBRnAYhE195Pgwj8RHT8FpjsS3d17XhWQq1W62r9oyv2FwTbfrqLNdy3G",
  "key34": "4y91xo3kN4Jyodf1DA9s7hhMVZzWW78WuP1wfd5UKJ6kUXxSkFaEg7Ld2XrG4pCrTvU9djJZLUDyW17rnQAyh9j9",
  "key35": "4NiHxczAXmZeYoq6ZtdJ5CpJuxN6PXTz22dARNLThwdoihwuz5GfEbbx6HX4uV32icC637fDmJp99YduwfAoerLK",
  "key36": "3MEuwA5h6tsK5ABu1VT7pqws1xhR27HLEoaRoWsAVCydn7udpo2eVcQ7hHpvrYLuD4thBHShAKfSAA8iiB4FPoDa",
  "key37": "2iz3JGmhWeiEhuUj3sVu7VfAgVDfMbHPVKuSPF5WtARtWNHJZR1DhY4uhY47A3oiyG89SLGc6gPsYNJiVN9bxwXu",
  "key38": "3iW9gqoBmTS82bEaxYjYxVvH7ZGuTWu7KLFDnMfNWXWrhfQfJySXXPfDbhr4kCJFqnLrRW3eK7iP2TgdPJXYa2dx",
  "key39": "2QmhjxqxxHz9Ga8G5Csn2m4rcujRNSzMwbnuS132eE8FgYdicJSpCPZp69NA3csTF4PtsDPqZZGSfBTpYqhkxfVf",
  "key40": "48LWfAYVLPDAGsBPpSiCwej1FTdSQLT2jtxuo6Uxmr4BGzEooxZ8oGcMRWaMihL2xVFLa3pSF8rnYAdjR3q3CyhW",
  "key41": "3paN8g66XN2kCCtGYDvCjUZCXuNLGrfLxQzaAPP2LEQFvm6bomS4PkBE3RuC526S63DgwvWGZMb2m9DKXekQNrP7",
  "key42": "2fmUXa1Lwm63dRMjzceRefuxSDoekPkr6eyaV4rZCL279FEhAjCvUX9nuYjAzZi4TEktHGr6fvFPoz4CRynAgJ78",
  "key43": "2v3iEXJq2N57sM4g2dXT7vGnr6UmduZbrhwXkg1hwg3qkXEoW2W1GjkMoJ19PnMwoQCxHAeWjw3ugU2kybjMqNKh",
  "key44": "5Wtv3nEtJQosZuPFpJxY8pNUwroHUjpVdfWzL2cwUvXKXeatNFnUDyLJCKoFNduktABrY7Y6fBaEGu9Mw444Yf4U"
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
