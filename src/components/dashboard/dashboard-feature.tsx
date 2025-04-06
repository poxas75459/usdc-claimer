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
    "3AHE7g2t6GGUWABa38XphX98uVUUFwrZsmDKX4dh2zuEFJF98Gq1oF78xEzN2642TZmCa1B33Zt6rc9JMcZkBpdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BCmn7aCahHP1CAmoKPoLfUhgDM4wbGVvJLmRWzqWW4JPFoCL4tXsAB6KSwqt9MKbp9zFS562Lh3EtqHwszj8797",
  "key1": "31QYGgqVPuRkZ8oSz2uWJXm8B5qs5TSf6vDfw7CgkcMAEgpdKEDWP9vmcziee4h7Z9NLxT69cJapra3XViusVuuh",
  "key2": "21cWPYEubG3xSxWucoPjopjSCsoqysWtwUyFhbe66Y3PcL4GZMLF6dFLnx9H3TfZjU8LUWb1DzPRvrEWhvX9w69X",
  "key3": "5f3diVe4idKtPvd3u2LtrwgW1TfK2Y89ScfAnNC823P9QuFgYS2jTHLbrECr1j4DtVFcfuZCJsC9gkz5CFZBhy4P",
  "key4": "2fAMVsWnEaWSSwqbnW3vaz76Yn3bWw2vKGGVUMRBVX4ArUAUf5FoYeWv6tMULwu5xtyR1enEHvbPzdZcaqmvz7Jb",
  "key5": "4mPEueYHtdcCUf47YrT7rpxk1JcE1sMqnsaJcCnKdLv5GLkAb8bg9GsN7H12oHTtrqPBHtyNYoV8ZbjczLDXhWNG",
  "key6": "5LfNjfBnRuJwLnogtUnuDUBev2yPFBXgG7ddnyRm7etHmeUuoUnxNGd8PNpeKiB64DB3dozx8wowofi54ggKdnUN",
  "key7": "4iXsebJSHPWGXKHpDbrfiQcTJzQfwRGetJf37cPd4NzujNPy3f44cwRtf8RnEkpReLpcDPUuLEqmTQnMRTy1mUmp",
  "key8": "4u2uLV1MDNErDXbsKMzmDzfANNiVvBmFPAuYyhXonXofLRtENXjKAPxdAtDqhC1AEEweVTB5BehBFs28vJXwpuA3",
  "key9": "4x82bMBqR6g3Vk6Ao18QHtLHGEyn6WM3vajP9htXCzRxf1vJ7SRDSj6DMUnDB6gWWS1hdj4NKar2exL3vDK4eNCN",
  "key10": "4GrRgSVnDNCsBRzuKsz8xyLVFhn1ibXhWtMBc1Gu5tVWc4XRDNYg7pNA2x99TcACygod8YyvReXMpqxb1YPK1Bid",
  "key11": "4f12DB2YyLYfRvZKbWLmoTqsQeACaJkC3PiEeRxE6XQ2G5yq3N3M9tU66gLsrvZawsUaMcw3hU1bgWf3YCZkjc1W",
  "key12": "4XzLEm8poshGUc7Xp9ACTdDdXWpU14CmdVcpqGxTFvGJ7jpmvmLk5wuWJTH6A89rYVxQ6EkiypeL3L6wZhnJ2vhb",
  "key13": "3CtoBuhy2CSH43LGkahVtKBZrbLH2hoQpgYvjH7Wp49yD1E6aws7Gc6LatWMPTxhgDzoySJC74T9g1smPRFaLDkD",
  "key14": "2KpHkn89UJtHLDaqwxAVDsaPdmnwQEJDoMb3T9NXbn1oGu5KWhfdB9owjroLwRBX8sELc1FyeW776mzeZcQrrd6B",
  "key15": "j7gS9p25G3DQDtnqJRmanXyx5N3tFWG1dKz7BBCriG9HdKhYymFkR8iuv7VYqpE3eiUTqfkBQa6fLSRsH7KA8Ej",
  "key16": "4reU4i7X3xsmGQHRvW4eeeRADRLvZj4P9jKuTbj16T91hEQnjnexwPPMSub7ZfjeqykWVAvH5rJreQxDdLwEmmBQ",
  "key17": "5Q86RL4Ka6gEvWRm5Q48Vnd2idvkTn46cHci1RRBKbmv5N69BFnxqQyVLWJ7EstZmC5G8usNhTq1px4wB6d5Kmzj",
  "key18": "YvfBN4K8r2EDqzhcjkywbdwL3x3QiGp2XyJj1Dy2PgDFFWgK1ohz1oinN24UHS6Mj8SKbfWH1SNTjHkzvB4LZTf",
  "key19": "vbSKLWuWaVd9FpFCoFtefNWMDJMsEPB2z2MzrZtspw6MFKQ4F3pwNpDA9oTsS1yBXEKjbb6SYG5x7sF5ai7GjzP",
  "key20": "2fsJ7A9oH5rArNANNgrFzrZAw1oWk7gtjbuo4UC3QocWhzu8kA4aRcPZVhmfKsqy8QuMe8UKHV3wn7tAkVCEXBEF",
  "key21": "F6y99H9PspcmrQ2So1pfM9YGqmTY8hQW2qow4v1xnACJxkQ41QuzMVKExvLLmVQ9zuVZUb22wTLvk1unYUiXJeg",
  "key22": "2TZrV1nQZtgiLZ77H4AH4k1SqsXtS8WpT2QfURnRXozeduBieMYeh7YheHqutNTDYSYKDaemGrT7be8D2nctJJig",
  "key23": "5WH44W9hhofk15r25omY8CG1Lsto1yeqTrqjT7EXGdXCxkAuZFLi13gmnSN1xroEPiG6WbExCtCcxi5FhaiuaH5E",
  "key24": "2DwP2ErNkvDKVatvmkTt27YF7tQhAq5kMu4a5phkTFG8jtA1r5spEMG9LsyeEuNp5kp4YhmMV8b5eQAF3ofWViM6",
  "key25": "5cDEvtzm8yajgT7ypbRzzvUGkd3MFAXdkUXgTtr5XXtW1vB7SB1w8akTXue697hnv4WksVTf1SwycUQUiXjNE1v6",
  "key26": "RJ775JazCQAehaPhwzAxAFQ3rV3ZsBkbn1rQ5srzA9mLRwpRHw9v1UfqQuFHYzdXhETBYcsKXgkNcwNxYeYufqh",
  "key27": "5zaqXkXvJyU8Sddo31nfa5qMAYyQBCGjY9S2ckteh2ybeVtVvfSGfPG2TEY2g9nfRfETh48ziuFzrNgLuptrEYB1",
  "key28": "4JvNPFUaRQdJAbfMkgn4Lk9WpNa76ykfkvzHcs3RoDK8bDyWwQztdbQZmvbgBxiVgU8DQSMUgdC2Q7vwnVTLrXHW",
  "key29": "63ZR1VmES5ZgHTeT87BNTj8orVaXqYRQnQ5BxZMFYoy2ZJGp9BxTtFhcVwQe8DARceoTTz6Hohzs846ibe38viNf",
  "key30": "3e1UqV1h241qbEG2g1tdBpcTVvwiE1XNzPivMorA1gsmR7HCYoCqkW4iEYRTs8xD7s1tok4mxMyqWkK9Nw1mDLiz",
  "key31": "3HjFeBCo8Muc9hFa6eN1HywYi8AUcJFbqUFCZqwGVD3XHZC9XQNjoT99UoPYtcJWcTdctk1pQNoGR2e3B7gmmUXc",
  "key32": "5RUb6kiMVdRfpmBWXj2f97vAKzAhVSSAcNBKrQW3LyCJy5n2WER3WavGBjFxStkCvDiTSanE3gJqPxUgF6aBw8r3",
  "key33": "2aV6ikQMP2CexgEEVJsNV5hbhM6PJp9FuoDy1ot29Z92tXs64yJET6uQyNNHsP2i4crt88usK3eA5Vz2MJUD43XK",
  "key34": "5FnynraNE2bkmyBtR9yxjuagK7RnrtjJrquXjTQwLFbp3Kq9UzBELS1WfDuCacUX5krBd2E9AiZ9Rb3y8vP6MV1X",
  "key35": "5kfMHKCqPhrYcEvNyLBr6BjTFr4MwAEcsXkJjBncPZMuYcZukw515KMzKnSvJ71vHhsKkBNbYkccZ56kBc8Eyjeb",
  "key36": "2LsiwusBNG6bbbYwqCgN7MbZNS6ocpqxzD5dEbXDP6JV5nfMkx78vfSCGk1sazw4r71JJkvjTuWVagprocyvH6vT",
  "key37": "s6czZfWjtiHQsXw8U7hbEugpvh6dPjgxspasQCapfJvCe7TctoEKxPe2m1KqpYNu22q58bXgoBva7Q3QBtv1smS",
  "key38": "28NZnvkFfuqVbnR4JLikpVPmgvdaApsBzNZ1mymzQWxKnYFTGnQVWgH7x4PbCN7s6BhHmmkzRLWL4e19c18Si49E",
  "key39": "3PUEHko1RsVbh3wMKtGkb1cqr4cGQCYQAtJS4rSHBGgxcc7o8p9GCFsp7JzznaxLCUs78R8F4Wg95NppJMwmQ52b",
  "key40": "3xkM85gzLpA44CHUH9gTVJe3JQHtwkhA1FmWNK1bReGHMJvh7Lc4wGnwNFYA7Ezu4AudgdP6iD3BoJvBGNnJwLSt",
  "key41": "2NS5rJQPmRAdukb4gRuzHKGGzbr4bWenHZ2JmueUQZ5XTB2ttuj1Siwrh8RDmqKnL42xUfZJ5hBV9x9Areb6V6yv",
  "key42": "2JY7dgkoDTTHuhD9b2vRGCwicqfMSbxYeh37PZ7T4qemLN8A8YDCkrfMX3twd7PBZDKWEtgVH6fgKTksQ41fwaz"
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
