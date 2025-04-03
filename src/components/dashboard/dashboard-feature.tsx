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
    "AwTzBYDfJu4WdDrvtRruBx4RFoh99hBQnrSc2wTqKSWFAhTCGMkzi9WfaqXgmivXjibfpnb1LwZb6oTyFMhCmYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XoGGzynppU2xvmeM1bRAprrchGyMmusRZ7VQacai8q8w8fCkycuwzxrTVxswCDvs9Q5uQMP3emjK47dQp5eGzoi",
  "key1": "5AB8482CNbf4GBnD1g1xiSM5pudARFPby3BjqpfdZ5yTEdriArZ3AU1hUnkgdUKebJ2nSHRcozPiZWKU4n7wC9s8",
  "key2": "53jHQwwSGTedFjXaQxiuP14krqHfF9EptAbWbcf8WzRszW3BgKRJCAgx1gBNuiQQarAj7cTRPJ6BZbPs4j2YzMoG",
  "key3": "vTxHZGzcGxgbNV7FV97USPhT5E1KNEnxKsYWSAx8EKBPTTD8XWRSdYHS648xYqhkR7hibb4PTzq1SNxATokn6Rq",
  "key4": "3TNLGwX5xhuPPkAa4Y9DnF9vcYJVLeKBCQmTbY6emXrr7AHgNpaLFQPHhc15siAAXhRqyRwY5upRYwGA6pugwJo6",
  "key5": "4PtkTQyZhCtxxXh2W9yxCNr8cYp41vMcyDHG2pdZVxSxw5EjAygTEsvdGpE6hH1txrt3ZtHpEHLRMEewY4Mj9uve",
  "key6": "2jhfuhzca6EvXpLBP7JQG8FB41kN8U45CG7HCqoSmksQQtzYr1PXRbEquLh2zbxpxxRV5G2tFHSz6ihdnj3tjehF",
  "key7": "5YoPCrGSjYqYtVpM3qyoVs5Cxj53YVahi1yiWsVmBqVwXZ23ZQQfJ2HW71kVvDM7azqAZ1Dr6FLpVvTPpw833XZj",
  "key8": "5oxfvse3CPxSq6wUBWEmMa7kBkGHzipFzL2WYaCvQcXvhW511qhEEqkwXiyJpMW3wULx8EMYhpvv3GgNeWmVjWuc",
  "key9": "uW6emJjFn6HgZas8Y2ndMvaHjQ8i3EtAjgiyGMqZYSPjbfc6Jb7kHzvR6sMer5MWMoZNBnaDuLeGT7WbuXSth3B",
  "key10": "3bdNeH5iNecVPN8KCLqPGfmimdZpDPVq2wQsEa4NzooMkoKsezrT9hRAskwExTwCmCaRUgwJEL1hNgXNb9DE6aQ",
  "key11": "5ZdDcuRJoyWer5qPiBTbXuJL8jvNHHz5c4SjXciiuuwXcHEqG3PQvMyFJUUaFzQ44hn2XvddoxGJenaik6AXbtWK",
  "key12": "3WtVWPFcBSkjkT8L62C2Z4VZu6hDoMCw73V4m2TvkWZrnQcXJJW1D1Y4t8WRDuyqtJT1L3Ks5SffdoXvPTJQ5b3D",
  "key13": "52k1LQDXPc24rSs3X1Tc75jQMSjAQgYZ7jFcgNs7g3bWrDMR1WfQVoMWm8dmdE33DUWm8jV7REYoE6AV3tN4be6n",
  "key14": "4oh7RxzvEsZYw6FYrNV88gkP2RDDuYqxnF1EEx7V5ohL2JfYDUd92dZEbwvjQWUu6KA7BDMpgCG4GbNTfwMCEQFo",
  "key15": "Ekeo73fii2y6P3yBfv8T2f6YsgXStBU469k4yEJYew56Pw5Fxga5vphSdTB2paV5HUnzjNhpLUZQZasV7TgwF8i",
  "key16": "2kaC2WSCZVgTMxzJMkahV2KctCuFKqGMFmWfEzGHmMuTntiLhN7c7wmi4RHJnV9t3rTPAWU37pbTD8qSHTNrJoEL",
  "key17": "2fkN44nryNRPgX6mqHEYFyZzKUKGx6cRrK7rAiEiyy8sZsySM8aAaLXvMFnF2WEcB28AEAYvNsacwSiL26byCiti",
  "key18": "499oz16ohGxa1e9BNZgKmo73b3t6zW72C6hvEjrq8rU2k3yULyYryFVww1oviX1V56GwysnufetfnCQgmjKwGT9Y",
  "key19": "4QfutrQYv5tHc89dkbCWnv2vSCikGKggoJro2VmP6qoqAfeLZ5EPaFekuTpWaj62MrM9d2QQKFdRi6WdCekyryNh",
  "key20": "5daLidiUJrHQgUn56MtBrLMqiMbf4Dc6ak9TLhtwmrZ9eZiiQqxe73y3yxHya1AUdLpEjrJwHk5KArDtNz4tYcaN",
  "key21": "NR7jSPwF5vrSu5f2jHXMBg3DPgNMHhpHyV53cYVs4pXm5uj5oE1jV7sRAR2N14bKb1SqBMvEjtWRjW28xzF4wD4",
  "key22": "Srg4a3816EX1FUkXRUQrusELJXPCVCBZt59BPkjUddfzZz12MX8vSau1iyX3of6iHXrZ8xqpUKWVUgCGA25WPbn",
  "key23": "493MhrUJYLSqmGxFz3xmUZWgBnT9wR2DKNcjonDZBdmGETkd3ahHWpNi3PkwLKLRTKHU97b5QYJ37K48vTYPk4Hw",
  "key24": "4WytgEcNDka3gzseX7Th3YcEKyu4Aam6twCubnPcUBxTyWU8cAGg77AREnRhUcEtmVfbDm3HRNDTV4YHohEgSiw5",
  "key25": "pctJNXzCKZAzZex4xKiLY96pYHKJudWd4jinSMZWZGMwJgFiNBJokPmxAtrZtiZP95SXnzqvPGjG7NwKHYu3mgS",
  "key26": "3S423AjJX3yHroWMtc1DwDWTaaogUEzecQjfMeoX85zgrUvxyiS5EV9j5MbGs9B1yxcEtHVJh4Xgpxa9U5QcQB9X",
  "key27": "5bavVTdDJyPKdjNs1UeoBR6KGAtFHb6QS59Atf99Ca7pnPhHCeMRUx78Vaxak2dWt7ZBeBZmxiP3v3kZ5D9xvw6k",
  "key28": "5CcvxngovK5FBnVYSeZyRC6ndr4PCwkAnexTtsGq25i6gLKM5afKvr6meF6oRynvvL3mjD44ba6EhvMWqFy9RHwQ",
  "key29": "5Xo3vxZN4A9tUCohS88tvvacJhrtvMUiwCWz6Zo4YyvjeaA5ML2LYnZaSD2sQ7otev2zaqRziw3i2ZBmVNyKK9ED",
  "key30": "2rqxV7J3WdTmkhYZCrLjYVmf5UkKTtX4CGjDZsv2HwMVncDe2aaVrvvAbQfBVGMjmVRQXMSDa8g3u3XYaKY5Kjjk",
  "key31": "2mfrKU4ccgVHgTMeh3LmAgobqsjTT716snE8ymjKi7XcMVHYUewpBjHWcdijCRkEZoRHSQpMFRhUjJBHG8B63ntX",
  "key32": "43Pwy4PjYWWVpfiY5NcYJtQ84WJCYLpN7m1Q8db7qXffF3fgtWQvB97uvA5kvHKq3jkNooCsgNkTx756miwWgmok",
  "key33": "WVU467nW7RGkWuMHsjHfbwKA6XSWVYBBSZvcXcNSGyw7ughMbD8JMjrcQxZ8ZwarTnhftdz5pxnsERySh3nfzA4",
  "key34": "2pVnZmqJ2Jbw7sDucrYcCsexestBer53UcAKXuiH6kjVnaSijc9ZDtZfNsRSBxTBj7Zo4L24RN61kjRHRX9tosku",
  "key35": "5sgQGuM32AwpUTXZ8P2AAWLXSZnd56DtxydbgW7G1hwCthree8B8iLJA1xuuNywPu7nAnKeLa7YiV8f6hb1PFmp6",
  "key36": "eVbWsiE3yreTz6yCPHf6D5VKJk1SR5NcW5DfqX2V9X62ugoJZZqvGXXkiZTLwqW8563CUckU2CUcFgp8zGkLwiZ",
  "key37": "4zC8pwqe6FXfUBX1gtXv4ei2VgN9oYfQUZW5u488KxqbbRjJ4VNrQNKSNG3ftT89bvnzdAyVWZJnYYTobLwX3nTF",
  "key38": "5C3qww97RViXJG2vvwEh4MWFQxBNQmGsEBZLZBaPrA3XcRE23u6c4BMXGJXwXDA51EqEUdxsi4Bc2Ea4qjJ7sNAp",
  "key39": "39L4SmQiTZ8uorNJwPYufnGktsjTmjJ7MzNVazQKZEpw5JS9ypz3AMFrtxEbE3KP6CgCqUCwRycCoBHjbZ65gWvK",
  "key40": "BTqp4CGB2pJUacKLTUNvDCyf1BuM9LkNWpSpisQkK3y2XbopUYQ3C9HvFfdLL5WEdUpf4Jx9nJWAWx5g1TUNYxJ"
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
