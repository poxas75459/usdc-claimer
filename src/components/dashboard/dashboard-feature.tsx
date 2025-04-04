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
    "5kavgT97vD4utHT1k8Kjs4MkPfQjJgv36SJL8q2oz84221yCsVXmma4vRjVUPWFTKWPuGX1d6cs1MF8wf64i3wEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4THtuRubv3dBy6BqW81QBAzibi3eJgCruKsifjrG1UMEQ6Xfv51RKJuaukXF1zHQsKGVTj2Ssay2gzMbJxu3dfAQ",
  "key1": "5FV51CsjEQG3TpyosDENR7oYVc7KXvSz7wFqVJLAM94iUs8mS2GUUiBaGPHAaiWsZJa2Y7pzkbwaVT4wjwxCDGy3",
  "key2": "2EmqXSvT9FKEs1kxzAWgcREBgPnBEqH4a4sXhdsShA4sQhU4B6Jj3pPuzbsz8FdzDYARJ3vfBWax6RkHJH5VY1VD",
  "key3": "5H9dHQZU4EH1Q3eNrnZpiCGAMGaAUZaSBDTvZLzgraiyez1fgDK8NbNCMX3j2Z1rvFjycNwXvq69dgKWCzbJhG9T",
  "key4": "qHnKaBw5y1JZTuJVChaa2X6wJPBwm5ZdrRKQiGFqAUG6myK4U7kcSfHSnAEm4yrXhF6uPNs1mG6H8T8hBbmmat2",
  "key5": "h3HG7YHVf6vnEyBh8vizd3ZmFeSbdnWBAWXqS4VF7nSBcXrqjqX27Tvu9kXAkFKyEUogRGVsjvcEk3Jd4qstxt1",
  "key6": "4EGo1AGus6vfsewF142d3fjQqgDYiuxTZ4ZkmdE1CJ6tteS9qbriXfv361fRpBLmsb7iLEWn8GGmiyKFZVWxSWBn",
  "key7": "3KrZxjwn7aHUdVDFdsFUfWprpAhEgtNVEJDuJkXS7bZbETFQFvF3WwdDoupXjDSsKYvZ8gE1Czojja26rkM8EymZ",
  "key8": "61UrKDYgWRkEc6pHVHJ5Gbxjr97owKX4qTgUHFtyAjev26XxRtXWkHJ3SMQpRZZquqxivvMzE9sZ2vteRkmmGMc4",
  "key9": "3cLoHSDhbE5nUziCMHhXtufjVZ2spNEUJjnhwAMHhptvRTJoAPQzKVRFqZvL26tcRMwp47ZEgwBc54F6TvhLDZRj",
  "key10": "5FedqmfNB67MVRYjsahrJYi94E6jCKLvsQBt58KTH5iw4EhT8Rq1CmJU6Cw2hYLxFre96QQsrereUVGnUKsNc1UA",
  "key11": "2YWKzwG2ZodCQ6YQ6KtS2Kx2ugimckpTeynPP5k9aNgjQUxbHP27QfCfDtLwT6vX21uELyfCiPB9xABq3r6XpgLv",
  "key12": "2pqZiQK9XWzbGa8vvDGU3rXRQMUwmfnXuhsqArmAP3uk7fSkm8FS4WSteTGFCwARGZG9ZShSAmKFkdFgULbFQJxR",
  "key13": "5G2obSx411LGQbn1mQmRQJE9jVvWzC9X1Cb9tgP6keTffkGxkUB3qXD1f8qzxsYgSx29ekgNoKgBXf3kowaPhAPX",
  "key14": "583nSufP8VmW1Sz49jF9vg8jH7B5ZNMeYSmh5qTXJr8tvob1BMkpNckXooWT6FJ3JjuzPtucLFRrw1fxFHi8Fbr6",
  "key15": "5CUyVkgvPgNJoyrcuQ258PK37Nxb2hNB7V5udsozkgHFTJMNt8kQwCGcTg719VLMLt3BLJF7na1vCiHKA4HqLkEw",
  "key16": "42ju7Jappc82au2BVa9C7uCXMKGFGyBs7YLt8NPkEC9BXjDab2bYEMrSYnYjzXkjt613EPLypKST7qMycRpXb7eX",
  "key17": "2sjDQzv1oBeg4oDpe5LYFh7Xug9eY939TbYsJuYgLNA5jD3oXPJYMKXkoFENDGcH5PgacD5P2qp9fvadP7t4YZjw",
  "key18": "C9BaenJ7z7CBq62kBQRgxDCn1GnZiD59SVEAT5xiMuXxkgteuFDbjN6g7ywFNEY7WtLujytqk2wP9TVNpnq9Kj4",
  "key19": "28d22kqHnfZZKeThA8SfsjFCeksvGTUBXVyXuZ2seteXGPhft5pYzpjrcRxuBWE8EicwWu7u2TTtwqsujEb8cjjG",
  "key20": "3oCEVWjC57FenrLL1cjLpETvowBdXzJywAmaaHUC7wMt1bMcN1jrYx3pzJJLh1dDujmNo8XAwurfR8dG2CbSFbyL",
  "key21": "2Jh8zWyc9VSZTYEuQKDPrUKdyZoxcNtJ7WqYBeRWToShC4M3vidsfSZHwPnLf7GKpj6dK7P4jz34ivbhw7F9ot5B",
  "key22": "5FKASfUJzsZ63SgCfajyGQzaf6vU7oHty3uFaKmn3ytxBLvmyPiiEooengzESsTW1ZoUWZ63sCAjk3Ypb9dcSCWv",
  "key23": "3fZ5t6cspR49Ren3u973jRwKFMT2eCxeCksbFetzaBoiWQPBtUFLhgssr1bRJpZsnfw1t4DqKPUbBevHTcxbur7N",
  "key24": "4Wr62yGn9Ft9wAWh5ZUbK9NYeKc6tPxuMEr9HQn5EWXacR2SwVRnFqwiww4Czuk2X4e1hVMQmGNg8LVvTAcPJjMw",
  "key25": "5BpeUQDiKvZHCwbiZ2799taYghfMBJuQdySHips5Mm6PZQMNePrB54R3ydmxMXok8BabumWYVbhvivQ4c9r2C6kj",
  "key26": "3yNRsDGh94unQBLHgeWvs3e28a7MLPPXgP6pKHH94Bmj8hwcpeocHTZCMR9a31BkMdrscm1pREAhb4qAjM6X3FwS",
  "key27": "4pjozXRt9A6Q66Dk6XZbZrArgr21c1aX2yb57cgmPe48VTuHnrb53Uh4tyRU4UP9xzzVhH7cy6Czx84Az6jUsmMq",
  "key28": "26YuZYJ9YHS4SqYxPQpWPVBNoPL4oqodk4Ah2XxTauzVHo8JSWwC8nM8gK5AYwtKnkZjj4fCQ7A5ZiNAraZQVdZb",
  "key29": "2TP7iUZ9wS5ik8ayyJ3qFUD7wVhQCP8SS3jpxV99raT1T5fTwoEmhLwycoUDRnu6LVkzZSk4wTkFBhnhWNR1tmJJ",
  "key30": "3f6xNG6gcQBFUSDDXVs9FWZkaD6KZTCy9xdHwpcGzqthfjq6vTben1k9shMtXcxiNrfjSkpEqo8DLTjaoFZPKx1y",
  "key31": "3WbRHLJe9dYyuPtYnuw5rjGKfKFq5r3s7ZkfSyZSpZExJYFb4qjkXaoXxR4GFNHVbmeL1YqNPYN129yUXPpYhS1U",
  "key32": "5bozwdzCDqdcGrJmg5tTBL3nAcrT3oyHB12encbRJoRVZMsqo3T37hqZMnekxmn8hfC9QZyia9KHfFYYmWpdy2C1",
  "key33": "fJT9sp7ougAD5gL8suJHAFTypY3XWy3nMjF7zN8utKmmSNVPfUJgBviNR2TY12NbnTFTX3umWWjqcFsHaRzEHVF",
  "key34": "ahakvcXoQTmpWzYsoYaS1iKCLzpUgNxzqvYYZ5grBNzgDVFPG8UFrsjwCdbakUkA5DKb5pFLzG6vJP1DAdxZmGM"
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
