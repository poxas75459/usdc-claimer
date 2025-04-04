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
    "3UkyYBVG1n8yPAE3eb28J5WYT8Tr4KyCokmsxu6M7YxKFH66tyfyqQgJMWF7AgRnULiDVC6Yiv7WhEfzCS1Wtewe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJWqrSbQspZejbvANsBea66V8mBDgMq8YZgJpStWsSYfw9WVzrXPS4Bmepcs3uu73nvWbbnmQTPxgRieSCNEXoC",
  "key1": "5uZeJJgSrRxWtkRGQMEL9UorWkv8LrRmHhSzuQYAUPfPbLLjeqACh9RVFVaAk2LEcSiqn54ZfEhBuY7uJnzcUtZn",
  "key2": "smbAeaeFMbtSUdGriseFDToqmhmYme2SrZGFxhqu1WDwGeKk4hWf9hD1FtdSANron9MEQbLuyFNB2pom1wzDHB8",
  "key3": "5wj9mEAZvEigXEcdighaKnd3DeQyoJnnB9H8xtT97F4poqqZYfKJFqiGPeu4RxtpW9Y9Hy9egFDnBvQ8rHVrLw3W",
  "key4": "3qA87SnaABUcxBowKFo2DB2fyUmHJA9ysyBaacBUi2GYDGo53nuVUKtYwgmfNWciwfbQ6YLBTgkYF4qx5KiSvr8g",
  "key5": "5cWBAj7D5KAW2wyhy24xjBuBWfHWynS1Budghxuw6j1j2rKNZ1LzxRT1jCqLdyyrjSkAbS8LNj4VUkkfrcqgAR7v",
  "key6": "2dUAci16JCMTWZ6DHJf8eZgJwc2cqY2fnCxBXms1YffVHweZiyPEvYhZdn5cv6qybtveXMfY7aD17aPrR6j9hSyX",
  "key7": "483wmP6QM8a6BspL83xM3r7XNSjpUgJzbtL6RTyaPrgCyFvBp4yRZfN6iBooCFoUGBcGNDnpouGorqoPnWHsfcPz",
  "key8": "2cHzSWqBVTL9XxqDfJNtSwtr4pYfjVFjPiG8AS7VzrKfkYHD4d3x1mwNadyzFkmFodM96HTvGQyB4kUJTX5sdbAu",
  "key9": "39qJbc7wAWJeUeWqWfYPHBYHnRTqJMrMede82hG5Sdkd1jdQLeJmwJBHskd8Vs6JZwC4XLGcenm6ag4YrK2TmcE2",
  "key10": "3wgN69HgWTjYSmVETBTLv7UcbFMiBMr9rVjjqWVcJo1S4dHYqNUaDLGVaGAiZiT9TfwWPY9y9wG9848Uq47sfUrH",
  "key11": "51W5ahx33WMNmwuhQaXDpHrWgwGBRV9uAZuQauVadasyAM1BHGPm8a49PFrK6fHbaFZfpxEWkTQJpb22wjGmWnBe",
  "key12": "33SJCCmPjYzhp2LoXouUdox4P22AY7ZQRjLJHkuR6fXSu71gaixoQQ6jNa9cNRQEpSmstsBjj78r2Ee4vPvmnc8g",
  "key13": "3DMDxPMW4Qw2CLhXyCbfC3HMLd9Zd9zdPCE9f5FudR55D8zd1r8PVnxiqxKd4raBpvsHLc3Cz7kmTVBo54yJq3FT",
  "key14": "3PgsYYQvhT96bn7P8c6uQvqcFdqzuXzqb4ae36fKGQbznXDnLXM7eKy3XUTTs6qi3jwSLzS1iR3t6x3MoJt5UhYo",
  "key15": "4akQtDGKLamifLLLnp4NG4B5AYECoN4UoAme9u1dpQwcJscWjuBtBnWBgkoyMtWo4mx8w3G9xJUzmfrEWhJpkF4R",
  "key16": "5dwCxRTBTq9PwxRPFqJCLeJy4NREgj4NPf2tRwQFCq68eJpxyW7rtm1F8vnmeyouB9kuMVAY62q2FCBkZLKUMLnR",
  "key17": "4X9LrVQVxDWephixn9A6XYEf7nibwb8gaKRqGJwTvPgnCHLe2jYpqi5dpNeawAGcxZWtk1dxuPiyixgqc4BAcuZ4",
  "key18": "2gwzYJNh2gZ9RuzQCMjAU92LfLrjtX1T9nrAi9W3TXLfrbqKhQo1BBSqUrKgbvNmqw5GbSG9cHHgZtSdNArux1ku",
  "key19": "5KZY1PBsCUS5SSeAz7Hjor6vet2oz4ni5DxzFsDeMk9LDsM7q7ejboQtnhY8GYdkABhcdn1YDrjRYAyNJz1dCLiM",
  "key20": "DAfos6AaRo3WG4Y9qaNwf4wvzV2N2zMn1PQh5WnPQVVC7kUinvEcEVqv2pPu9mn7eGWgKunM5RLVMYeJRgCXV4g",
  "key21": "VrGzTgVYYCMG497spxaCdQNDTc2T2byfd71Xmd25ErYnppwQnK4JyfBejpgTtRvR9pt4F77RpuT6mqrmi2b2bmN",
  "key22": "7f6iQtmNDoigP3swgHPHtu4mg3W3YJgPJ98Qi72cKkYk9zUhjR83gcfYEp7QLzUCPJBg115JzEzFCTcoAYtPQ9R",
  "key23": "AELvSVSNrtCA2qQvhckaiLA7Zah5GnGnqP6SLUsFAFroprX9eU3JkScaP8VEUcow6BvwhCG8xU1xHk8a192tjeQ",
  "key24": "wFbh2fn2iQ1zbXdmjRRAFAWu6cGoV7tGkSTAt9sWEntt8DzaUjK8YSoVwsJddNo1TFsgtNSXu7HxJWkL6QxqaY4",
  "key25": "5NqpEZirBNdsaruB5xUpjWsnWrTMGYAiGf3N3siHtSA5kdMJxJfDmxeEXrdZP7Ygsi21n9BvBJCNE243xtXoxYqC",
  "key26": "57542U2s9nDjKUDA1XHcaXP6vUVyToiDxNgZHshDdB3HaMNv4BbyRmZeLPBvjDth1tCSKtdXMkqiBZgrEqt8o4aM",
  "key27": "46JCWSeUU5Rdm9u2QJArhrZ7NbC41iCwgMkbPBFzGUuZPhrDGwrvLoPbouUJq9EPu48FVuwshYq8vRJ47EBNH4pB",
  "key28": "5TXVEVXZYapWx7akdsiTwmBzbnNHFxjWySSya24Vd3fc1eKtrHH17n2eWcorvnidqvhCMtAxUivBnkBPUu5zQJ94",
  "key29": "iWQv1Vof7818zLNhxUd3EsbtmWHRJnYcFA9VjhH2CA8GKQGCTe6ToRnncBXXnXyfCVcz4EvRq4ZJYjwnyedozJs",
  "key30": "4QUSn571s4kuGuiKecojeSHgyq2e7EXesFT5XEHxAUCc7tTnVGh7BTf6bhDNrjyB7CvToYGMygfqdQcuHDv5msrG",
  "key31": "4rFepvTGo2fXTT7pnSKFgJpLk53fEWr76RKC3yqX94hmHMDCq7xY5K4ybuVy1dV8HZgfYfPYVAxcPT4CcQdho16J",
  "key32": "4Q7PsouqBhnAd8KE2JhsRzYGaLQvU1MtDphxJQQgtfzfUJRUbzeepqvctiAvm769ojt1aQpZTmXKa9Bw8uLAsA9T",
  "key33": "3i3wEDp8T1oGLvxfgcBL6NLsKbwZeoRtEtn31cP3j7Yxo4FJGT8SQm9T2cfcCGaoXBFz6Qo5EdcRT8Ks81nVfe8D",
  "key34": "3hkcHTkKwoAW2K36Fnrff1KbBmqwq5sK9p912agouvPHDQzNQuYjhYh6Mj1ZymFASKefzRWqCAu6cm1nEo7y6LCe",
  "key35": "4oWEYgGstnwhPo8a4veoThn7mpPxGqpqdY1VHqP4RgtFhP6ACjDWvktS8b7eQHoverwtnVwZPUSPpFA4fJStiia5",
  "key36": "5Vv846tpJgrAuF25wfsY8cvuXJS1xbdNJFAWZhhWaXGpuwpB2MjJh7psvLSfBpgrpXRL8qWSXjA57242piREyNak",
  "key37": "46GsXBwZV22G6miHpHNRquytPRMHNTvqyK55nzzSSGywE7WEtMw6mooQFdC5sYyYmfN45dJAKL4udenUTex44EwL",
  "key38": "vcN8wHpcCprJcSP1disSCtrh4VSefs6wFBWWt8bGu5EgjWqnWL85RoBtyYDPMRr9TRDfQVGj2WWyWdweMc5neza",
  "key39": "46Umhdq81aNKBxhQJHSd3aGNY2yrBjgR3jdmwYVbohA9h9LoLHasKsRZehyKyr4DonDTmM7H1foURUR6gp4E4pbs",
  "key40": "52Y6vTpTXb55hNzfSumvJ5s2UrVFMpbXnRYoJB4M8mxxCLdA6UwBZbJPLyJxyzXAGKqDAUcQg3fXJGLP3ro6CMSk",
  "key41": "2RkB4gKExeibceWszNqMg6EwrnDBTMmf1xow5bSNfZrGQJqpC7tqHDFRcmcg8whB3cPjRkVwZawbHnzJmXSYv63Y",
  "key42": "5vVNoXpiz3XLsR9CF5KWC8b76vPhR3JFFNXZCwTY9wBuTZgPdVwSkryUg5LgQpcspbmLzPqMhjPJLDeGa5zLnmYp",
  "key43": "4of4NERuWWNbJwQcs1y9M15nhvpDbCGzn1N9ByNzhcUfp5kZ2hLAXoKL676NLGMUxXHFbY1cNCJ6PSZ1iiGNSyKv",
  "key44": "2GhpBfYCXAt7ApdafFukZQr8nyeTCu4DMQDer9SBAsKbApzjxpczSruhVvjszvhcPgHPP74u3YZYVgnmXBxzgYXy",
  "key45": "bft7thsFfbjymb6nm447AAfyrZsju6X1kCL5PkL1uKrUZb4uowA8xjZtbNemK9V1gGM5eGrgBvUg3Dm4fMx74dR",
  "key46": "5xiwdSX93ZkMUvqm7Y7YHLDNap7EWGTBT6f6w38cMEKzEXgtfqpE7bvR3SZmh2HTGyJYh8p1cmSSb1avX6Bz8NnZ"
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
