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
    "5bfEnKXimTjytPeViCGaQREpKuxoHib5LhZJcT5pw3nUxhpDStfj92F8zE8q8pqMrgnthJDCd2uZ7radH6rzpo8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52kj6X4rKodT9kwGsgALes93QZeJgvkPKBK3xYjTpV31BuYnXVjtX2XqcEQ5KxenKLyYUAkoLZYzfkYbxFp8urAk",
  "key1": "2CdJRZLA3Et7HXnybzKf5Rn3KUgzuXV5bxECKcE3kAr5hr2VHTNA4JJNnpkZ5ZAnsrdFpnJP86TASLpJ3E1tqgQ6",
  "key2": "4ztLiQfxqx4ZMjz7ytJ2dBvKSvoZPnvs3RZS4S782dPQLZ5Ws46g21TXGEkFz37EuPWFH7sMjQaJ7hMhBk2hG3XP",
  "key3": "4YV2m3uQDmQSeniv8Yb87dp2X3123yBLVXjRx9XeMnvrtHPauqHcpEaswpJ8YLvC7nAKVAY8bg7qXYPgkKaS9JBu",
  "key4": "5nDEzE9NRJ97i7Qszc2cYUWq2rSiAyfM9hnuuPtuqvadyVUVot6NXUF3YSnw3rnJ4yCunnvZNJvnBbXRaZcGQoYy",
  "key5": "2o5YHekfB8YBhRUwbeMzXVCnw1NhLX12RQ45aXKfnfaeNQJdp75CfoJkrY8Lm3wf7Y4ewz2RaCfDm5hoHCYBBGr9",
  "key6": "4Znu6UNrKarYM1FwjkR7cyu9kNwmz5WSEabAZoHeYrXwj2tjJM4JN8112EuSyHGXz21aFDm3RUtQ4AWy1vaCR9d8",
  "key7": "rbRaMPmnTJ1HkPw7K853Uq3L9eACmLWzPsoEVgL5A8r3yMf8PkfaEvnJrnXc84hevu2fQR6mTFHCQt1ZKf8msu4",
  "key8": "3cNcVwySzxjbU15c7gcR6cdDsmk6RwhTDoFKq3TEkFgxQcdDSbc2V7NQenyemLMXkvCfWM5r7ddhuvn3VFaFen8v",
  "key9": "nwNM7RhyToJ3FrzBjK7jyCzc4j5BbdxbetrrqLyt4z5VWxhFDc5pceZAnr7G4AVhuxiLD85KvMT2KL3SRh93ErU",
  "key10": "ettzX6hdxBrF3U82dpyPCQAaj6XsB1w9U5xwU7hYJ6DnhHEKH54SunJq24EsT2Q3KYDqH8P9eAkMYpzkufhtQVH",
  "key11": "4LTxNLtxjcHuoJgbLLjGP6pVF5YFZVTAGJVebXxfxmTNDGUjB26w7CsMTUA8E2zDq18AKT9AJibZpJuvAUCgCRAs",
  "key12": "3YMox8HitLPDWMmdXS12vBrSoeniszhc1J2cWY3QnzpwUuJV5qmstkRa9ubSJpxk4qu39a5sZVbpyzeeqq6LcNmZ",
  "key13": "4BqurmUwHFGd4q7ud7R7fEDmfmXjbGeSDsqEFk9XkcyKcTDZSn4g38fB7xKwTDGPw2B8ZL2rK1SqaNM4yZrmkexE",
  "key14": "3VDLBn2DNZCVcjAagzL8iQ7Sseo4v1b9x2WDtX81y9qwtAHQ6RTtTRGAzbgiq5mDvCDJxC8C2K2Zn7YFrVkviqpr",
  "key15": "5DxcQS6hTkJ35Cg3NpVFZDaUmEK3sWT9j1Y3CthLqbSJLdtQ6GufXvHayBcaQiG6MamRPhFvs5GRsgja2XsCSnny",
  "key16": "4iYk8WiVi6SLMSWWwy1qG59xUv1tsj7mBB5FKQMU94LCHpwXLhyV98oC8ATqsBghxD8jzB5NQroJyHnEP78zpaq4",
  "key17": "Z61B23UtrQqsNnTdYoqHrsABnXjNTcs1UN2JEamurnRXPc8SnjXG7je8GR8BWy1Eaag8fkbANcCUAnoG9xngmk9",
  "key18": "5VJzGv4QV9nRR5v2ZNVetTGbtPsyViAdjLKmAPNuCtX5nzJu96u18UuuNn1T6FXf5q7QBeHC2hxpZCpn9znyQ3p9",
  "key19": "tsdMqWALDN2rJYH3qhyTGAcSXGFqFgXEsZQhUX6Hj5NFqLmwuSPDfAeV8LrRHtyoeVhZUjN83G2QmhHaLhuHzZQ",
  "key20": "SKWCeAQTVLStt8iYQmntoFkSNR4DWyQjZitHuSEGAzrr7uZYvYPBMMXtY4Dy1BAQrPmCctP7urgkjG461xMEo51",
  "key21": "cTBUXVFonn1iKui4BWoh9bXmbNCS32encaP7tmv2JUvPEQzARvem1fbeTDXULirVFL6XEQKpXHiRn6bDizkSfsf",
  "key22": "3B5NuFMfitXWDF95vpTwvd7XJJtvK1kjjzuqTDajaDBpRjKht8jmsCx7oVZcBqXJJNjMib3jXepgRHsE4ij6bA4e",
  "key23": "5pQsTGJ31yDJWzenZcTD921DNQdjCALJxcZPVDXE4UJtDaPw7BgehHVf6e1jY85QCY5zhQzq3SWfvtigdzyEqnA3",
  "key24": "37hfWmd4uDwWUqKZVoCeTEmSzrEujqodegWpeTnyYnAbQ9VQfBJEdVfyqcgWpWPvb6dLZnCqdycpebpRHdjQQA6j",
  "key25": "64nVKixpGJcArmmYdMgsvdVadxDAxPA89ahZQh3Sjn8iakRQXvA4t8bKmXFtvg3jbLmvdymEt8ibDjEHrwTsDqbZ",
  "key26": "25eWNbNGdvkw1YA9SDsnVgn6Pqj1fAi4Y6BM1L9VkjYFRPDN3zUtVqEQ3TAPTi3kf8W6feV5otX9pkhvtrHjJ6aQ",
  "key27": "3DCT6nQ9j9gUq9yqyNwxf1brnpj8wdJxBd22nHpfpxtxMkVGQYR7WS64vVbzBodpHByaEbBwdSpzBkzpxWauiPPz",
  "key28": "z6qx3J1umy29HSaPP31kTJCQogpkMnQMtEny9jDgsM8KBRubFWWrNsriP7Sbw6Y8C7Za65kH9ycZ6koVJGV7zc4",
  "key29": "31fHhvHLy8rpE89DVpfgNSoX3pyoakHFKPMeKtsuUUD7Q3SvhF7yyq6nzK3UXJMGKbAcDCKD9i9QgpJ5cr5xirST",
  "key30": "3vZNGEdzeUPCUY7sSGtfFMw8kVDuGEVgHJFWbvwnmHY7Cd2HzWybpiraJJLV2eRet6DqoVFPKHzCGyLjJiKzbChA",
  "key31": "3frsMpZXmLkgZERrEznRiZHKJ4qnYNJi5UgUGkNTYunjbUmqRFFjh6aHhSJspktKupHfQrNsZ5hFXfhrvAe6k5y",
  "key32": "5stE6X5gf4PhAAfZipjuJts1aoMYwM6tAddyuUXb1ZurhjQJ4NTg8kXbborMUGYHe4kJ4oKK2Ce2h6XqA9kePwPi",
  "key33": "4fRyKMyjysY517wV6jXhtLVZ3SgWG9kmvLLtSH9L7PCi4rCfz7nYpXpwnSFN2DDmVxmqB6Vb8dMN9fP2yayNyaQR",
  "key34": "45u1NP3C4WVTwBiQ7UZYDTXq6Xibxhjt83gZFU7H28w58JdHDR9rgSkT9QuoXbtG3EXQysXDzLuHDmqpTy3hfCin",
  "key35": "5y2jtCn22WdBag8ffok2FTtndGZJjRro5JC4hU9e81bd4x3UpjHJFXrRUR3ZQdZe7CDnVG9WNY1ewia6oDokDBZC",
  "key36": "46t4BvfZ8G387MGdoPiyyEUNzUjPCdSkHdhSKxitzjPqK1DfioAYHCWfAR2oVpj1v3XhGqz41apHa1y4qJUwEQLt",
  "key37": "2LPoUJCGakrLgWD2uV7qMw1cJW2TtYAyP6dnhNV5kSggMRVmjGYK7yPhPwp6S1e7ggGX5LUbUTMSQsAGDBuUByhu",
  "key38": "qYzA2mY8ypLawty8jNX3Zg49t7EC5z32cAwWnBdGWnwgex7KJnteUxmNjd8S33h4Rg3VB564UA2MGaK8UzyrVKd",
  "key39": "25MkUGabeeayo4APdct6K62mkAGVmaPrQkWp6ho9SzDPks2sTL9ppVgFmW9pivk1nxcFKz9KzG3zDTSPUwgvPALa",
  "key40": "5ymNVvHxcusLANUjwZHxRtqXsfLy9dLHvytrh4rUWribVj7bpCQfB5BMX2tGksqd3YDkrJFNZPqZjoUzGF5YkMUu",
  "key41": "AdbxfDia74AsvLNrJ53s7F2hz135Co1Y8TmVD9vgSmsaX2VpPUzCnSmocRgqZN61hQuC3r5afm9Dq3e8gg9gQRB"
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
