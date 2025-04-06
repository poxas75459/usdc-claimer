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
    "HeRk4ashgNDKEYMb5qBVc1soBDfnbRJv8w3QaAqFYQvRu9jaCSNaDACoG8DgjiFqXEh8DBUzBzXPzXxGnVsmDnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PQCRC5e66WzeqNBuvk7hEciAcg4gjpMdwWdshBZ1n8Fq1UpuWG546D1QqfaXrmSRLZ3yznRHjoUqtUxxRZ7GzXw",
  "key1": "4xXZCe4sjd42nHbdwjQ9MyT8xjBEbjz7PtcZasGwxazu6Sqnq5zL9vNGpJZpqp91Z54ENi657PJPTgE1F585yNup",
  "key2": "5RynD8xyBFxSXH2YrybgqJBrZat7M2Md6zPyygTeRGQxYQ8DsXDexHqg6xCUAfMgKjazNgxvHwZ6HfB2cRxZ5viM",
  "key3": "3N7F1bTbZCNqihQYVciM5AYmhNq7LyisHfVn7p19SorHWm88ngBNAQitPXe13PvhYjnadoRxTHU1SmaeMR3icrRa",
  "key4": "57P69Wft3CTCsX8btY7FRirWJnu6mLPjjkd5KP9115YeE2c8ZBE7h75agwv14AUJkMJ5HdLBWu3pcZmZzA43xpj1",
  "key5": "46sUYiKSyNKHmxfp35JQB4hxprFw1bwprULPe4trwHyNXE9iVtRNZMcmjXBzmqnnrMNyEKLJJtC7V3j1DfsTHake",
  "key6": "3AhpriCjNsenX4QLjQgdHrJRNqS7kA9W7MxJXrXVkL244t6JZ3KteEXiWJEnS94mSme53c2MKXbYGmzRczuDV79a",
  "key7": "81uBGmMRruSZcf7L95TnGnm4Gpv1uLHzmDMGBnq4HjXpa7dMpDhhcPZPXkwAPxe8pz4KVtq2pi5DjudnKpec25S",
  "key8": "566f8kMKyMyoFP4RXZuD516ZpiPnSsLZytSSFGqLvvPMn5ZvEL5EHtRg9LPN25fVSCpqQD21Y8oe7gvemRcFALPu",
  "key9": "3QkRY6V3qLMdQ95ZMxypyHQg6ZyzPmzr1B6VVtCHhYDHfRA3B4HHiAoFE1LVxZCz6jLL1D1CcebGSH3NbQq4bzcC",
  "key10": "34xoNNiDqDpa9fBTxF7dUyD412wBQok53Ya17dHQkRVezMq8dCuzETBdWhyPaT81NuFwLvY7zXdZDyHcqD9bKRty",
  "key11": "59E6LLmJvCZ5C2qJxu36bivWfwWqCdtSG9Dv8qJfkEgPrC9YgdeCpFcQdzKp5j6fUJrbLwngcgDgWUrtiAmu2Hd9",
  "key12": "4ZKZcbnybHmF6AHPTWNCqjaBmf8XxczuKWgcsWpFpG849FbSaRkKnYydcCrRcdHfiagdLemSyjdTXQvpVZhvRcyT",
  "key13": "6dfTuenbnEYfSQrnM8Y5NLtQTGPxikPF3VahSu2iuKpx8ZRVuNnMvE6JBsroAK9mPLhM1jCr6eU9aD8prz4wEnE",
  "key14": "XqFzWyDtVC2oy1H6N1ztavbQ5JNe1fp3Nyj4Qg6jodEtxEciDa22Ce1Wx71SjtqvFtbsUjQaFjsoXmNsNHAezKh",
  "key15": "46fjnrHQfjcAYJw8B74qDPXC23zD8xKiri6qBsfRqbpmW1fTTKUGg4826gC9y8pzoswQS93YZ88WinwKSZMN6b4D",
  "key16": "5bJYNVNZwiLfG7AZE4m6R8f1Xh2jG51DitAWz19LTJdAS3at2YUg2PCuyRgwS2EmwGpdyuRiCMWXyFmjGSaJRJx8",
  "key17": "3sBk4CjupDE31ow1dzjYxc5oHTtzrwbREJ2TYjgEL3og44eAbEoVhA3PWdsXm41sVd8zPBK84k7QTAgzxiWV8Nah",
  "key18": "2bdykTMDttWmsiFMmQ7wdbmDux9z4Q1PZ2pBdQhLg5f8SQMPg1dcXveQSAiT6UGdzXo3KTTH52EcNekWz1QEjJLa",
  "key19": "5BkiWdVzeskG2y7QBAUuDZLjMbXeeYsuS2CQRyDUtXocVmsPcQC6AsCYQJww9E5VkyYrZehGu8RFpthrad84EbF6",
  "key20": "5ZEX1YX18XAACXiLDGvjoUhc43SyZR2Yy1r9BixfkTgfAiC2f859LEVKwG33FRponigSK1AgGcYo5AtYFGYsujev",
  "key21": "5ttH47EPQfrPu1PFMtUnVfpJSCwLb64HNpTXUmuJBouiZt2eidsw4zGf22cXygQwmScabHSqZTt7RTeZvyXDCvYQ",
  "key22": "4oNDhqnCzqTU2rXrTstwU4RXibD4iChiGdVakU8pV47CswE2hdWUFu8RGxyExkpCanmfJiqxGzb2a27ieWoJdsQZ",
  "key23": "4G6n65KzsJewffn3DvpDGtXa8gJcQaWGt6F3yqGXs9D88P1dwq8f5n2tzmFKr5UsWXUXhtJYKhBgYB9CecBMRpCi",
  "key24": "eQcNEy4HoabqsD94a5BC8g43AiWFH9KauwowP4JHsoi39nwaxDQq7N9ZxdmBw1waX64Ksy3b2ncRiqaRcZRfYHc",
  "key25": "61H1sA5NHXtjvpWs8G75aQHeTxXWukFXPHqSFsGUCGoeFE5V92LUcD4bv8jvpPnQM1C7a8xRBy5FdTRWGMFc8Swn",
  "key26": "4Dgyo6ppdFwD5aXTMFKYWMQjN8nATWDm41iL3VworgzL3wj32KtZyFvpiYV4euoxruo6qLpVYHYKFVkS5aURkmPH",
  "key27": "4XouGEexvBJiDVniKpHhYTMMtc8AetgBzWSNTBTjwdetvE8cdFZKqWaH8fGLLFTivm3ThyUfZBFqHnm8hUdXKMoK",
  "key28": "4JY2dTxVUeraLw1UAfx1yj4qsajx6qbz1okttBihdwjG6XFwmwdCVegMtF923bNAwaL2kxump1ZAUo6n62xvHMY1",
  "key29": "3edT1ypXe55DTYdVxVyuRGQFE15YEdtF9cYNmYddgp8q5PiZL7zLEBuhvdnmF6NV6pVgWgNMRqD9XiED1dxqAyWM",
  "key30": "5V7hzbkCQAwxa7KqWRdUTHcTA12CL2yHa13xpMyoRKhoxLC5eTebZka9L5P6tkaLVxFpZqCbqnZvjFinMFyqL6qo"
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
