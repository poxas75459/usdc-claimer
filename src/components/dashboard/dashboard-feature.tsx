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
    "5q3ZW4LVQGkgUqpfFkhep2uHRQu3UFypYqD5bivngEkSWVXN1kXAbsnYjc9kmeFFUduaeyBhw4c8mn2eqpbSF25m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4dRa9svQkCgahQQBhw6qg3pVXosRGsTh5szZAH4ACPtsDmwN5D5hJQocoftResUd7GFsLrdJUuTUmdCaBCzVMn",
  "key1": "5uYTkdpSViC9c8y7xzqCq2mr2dPGvycsA8hXecpnU7wBSwScuLfiDSJRMnLyfC8CNR6buxGmP6PauKuAAa6pvPJ1",
  "key2": "3CytWmdHU6iwUu2s7qRCWpD5A7cym7FLgA6EDvgGvpwJLc6ScUNoQCm8dWuG1jhZzRjfZh97NQP7sx8kuJHubCX1",
  "key3": "5fon4WDcA8zZxh5aZdQFUfpw6xpqyADkCLyb9t1FdUU4SK8zrgXfHeMjk52j8MrVqwHpRe772Sw4Y1sCM1HyBTL1",
  "key4": "3z6cyJ64hsjqi7e9CZ8RL14qCNb3jGRYbLCHQATGGwsDzaaPsW6X7cBN3BSQQ6RDttpyZepniJvPqNAEDncoix84",
  "key5": "2DbchxzpVbr3jVmGXDVhBz6GaWXV2Lw3Y15rc6sUUAjVeyHEENuUrdUAULxgQNX1uua2n6ffC2qUC6fqe97NKaY7",
  "key6": "4S8gA4hEWutAPcLJ3U4FyEqd5MY6zCKiKW9d6wgsZAv5TnuNaZ5GoysR6RCbS8vTYKeCaciVVhLz5cWryZeMtf4n",
  "key7": "49p8WNFCBMhTyCQR84FUBp7RQw8GM21N1ygquPc5C5KfLKVW4MnzC7xgLfezsex2gx5pxGTMYJog8yasEdauhG6Z",
  "key8": "33Rvc5K1LpVt9dRkfPGvodJQER4kfs99N8zEE7ZZ2jghu2FmjHnsKXFtbKSs4s5epvRQxxiWGqRdsg6m6nMsPjQe",
  "key9": "3YC842aHfHH9yViqmPzuCeRVVw2Wrwfwgeik971Krf1acXmxxLV6zQmky51uTq9XgBJBsXvNthFUrkoFK9dguPDF",
  "key10": "4NsVJHrhqe5trHPDQJGgnxQde6JSjbnpByBEnu787UA4n82kyz9uYkVRDfg5CxRdFyp7sacc4mVz3gAYk8Y93gt5",
  "key11": "2mPLdRvdCNmrwbW92whFJUVudYPeZv7j4noP8XW9nLShiBq42fyqrgu52FW46A7DwtWSE1AZ5RWinHFMqbpcBQuH",
  "key12": "5L2fC2vJiCbj8T8GAL9Ucy85TxuR17xktU8Dbe6CCWCdExnZfb2Fd4MjnA1oUJnLZf9aijA7SnV7H8uES5ETH4iZ",
  "key13": "58RFHrLo9f4pTo6ZoX4YbYYxey3XArA4KiXbKk2awdZyY8p6MRvLWsyoK1SxYG4BuCNNQxYZan8R8qYYGYqHWySL",
  "key14": "J6D8FhbeB5N7BMym6sbqxcw8rviWCcNXkaja4Ly8eDxsdehEiDgb9FvBAviV4QP3kX1icVoRuLgYYwzPdwW9kPJ",
  "key15": "4c7bUPC8uEmusiUpSDPCog44XiWpdZodeqaCMFVoYrvckJVBtNhhTn32oUdwy5VehYuXMfea8AhAJgZAfi67ufKL",
  "key16": "4EBjQ8P92rusctxvX6aeqz1w4KHpFrDJ7Y9g9QmTAGT944wgz6VrCC7UXQpYK1AZhvYo3UDf2BzLKt6qe7nxBMGi",
  "key17": "2LkXRQBnKV9Zb25W8uC96R6vvrqS1xDXAaSrAjJ2u6L6MhUnaEfi8GBfr8JJtHdQ56sScz3pNN2mTEySSdtBoHZg",
  "key18": "CE3QyG3e1UW2713ni929FZLAtgpfZV73hbwfyXDRjS4aEuCREDYKKwtEFj1cD3GcJKij6n3CYsBcAabmMk7HSJR",
  "key19": "5gSwyDFsGtgA5D65gHgb4jKwvrsjiSUtmjVf2SXwFZfJpQzn37KSrUqGaeryUYoueDouDDgJFhWtieuyLrF6Ljht",
  "key20": "2238D5os7JgRCQ6pbGoPdJpwYR3YHghbehSveqrmaiV8zvKka1V7ixmfa1NQoQSraKoacTHnhmRr6G12iMCqLFvA",
  "key21": "5QB9k5s8nsdp7VeekvuCFv2dyw5gFm9TsnetbXzCQMP7qRK8urqCQgp7MuNCLv9fT6cjemYEUs27tbVjHARS8LYr",
  "key22": "4VidxD6Ryzjf7STMVuT2FM8wWCmhkHbFjFo3Scc1RZSJ1qbHu1FtYHzSxXuKmnKizQFcdd8kMxNzEH7uqApVPthX",
  "key23": "harvLWJ6qQUZcF1gtVPGFYSrGgVG3fzEdLYZhm7cwpiCG29v1GqKUyMg1PqYUBhyxagotajTGQTMYoPYJYpv6qR",
  "key24": "4Hz9oAi8ZcLMZQ6fddGkEsiqiYrMAezVCFxua5jxkiwJRiVSdTTSUNy2RduA87pj93JiEU145FBFdne476LBUULF",
  "key25": "4WYj3wfRVWtudKDvx4QSyqEsp7KsrSv8tUok8jPa39xGpwpYC2EzA9RzHWkXfongEzCX3dk8ruezPfy8HsM6q5Dp",
  "key26": "63nd4JSmSpZug4Bf7podf5UWzKe5QwV9z5bV2rkqd8h9kVgquM1KrC5rYMzAarjG9jX1xNefLKZhGTwnYiu6XAmg",
  "key27": "5WBJafFt66L3SaTH5k3o3ErKstVgatRn4YoU53ucvgPuArrQPrWrUZVyEMZ5nCSX2hdLTGFSXFAEb2qSHeXFFiMY",
  "key28": "qwLbPKL7dPfpCmEqPJqhksu7qDs8nBC8jsiPWyWaDSoxaYzdZLMsGv2WVC8fstQqvKUQsaeCbtYYEL3ex1AmuoP",
  "key29": "3k73wTxt8xUqBrUu6R2eVDUr2jM5QtZX9SQRXKtmj26pkLiEzquYpu2EtFCowcxBTqtuao1E3Q1fUHkXHBfvZ1pg",
  "key30": "5xYBVtjjg4qxveSBLpw4Xryoij1J2kPBUDVG1fhcSk2Xn4itvrfVxbMZNouiZF9eYAqUPe8LYMqaUENazbXQ1EjB",
  "key31": "5G1JrVMpW3yvjNdbm22MWPYhS2iZYy1D4BF6p6U2NpFSvn3HAj4EYsXke1t9rNeBz21okR43zece5GRp3BCiXZxx",
  "key32": "2cv6dkZR57yjpSgGBJ7jDckpLiB6jL1Ztcwg4HbhEtD4aFx2jruMTtzy1WKfgMt1qE5gkPfLKVmp81864BRjUq8k",
  "key33": "3cn2SftARCojBM2sUnue9D73fdJTS4gXcq4gc2tEnsyVoY9xkEbeQ5VPQgXJhZLvTruurVuSYXgcDbjKceaM98Xm",
  "key34": "3oW2dcxuxFACYRLZnTR51WYRuQorw1kRXJXYSu2X7uCaFkjfuk3Lwk1xbPsqKn7x6epQ6VLGGSc5j6fa7xhY7gFS",
  "key35": "4M2G5MVnDGvUYtSsFuQCPahmH1qHL5nA8qoK1bup7uwqrcskSE7TziHRTejnbLe87i7yXXQiEAYqGz41XBiubQin",
  "key36": "r8X9KXeJThhd5nGrwRqTiqUkLW9kNMtH7YHKoL3XzW9UYXZUx6Qq4aqhXtQpJ8VsAeAKumHaHfDCE3C97YjJrf1",
  "key37": "5eyZSZMBvAhgoYkMKK9V2BMs5J7Kmr1NRxtYJ2SV1CpduSt3G3HGR8cdPUVSFgsHVvKK1dWLF4Pq6XnK6qP32aGC",
  "key38": "3LnbjCGzJEgmYbtgQf6RafNZd8R1rdTLTh9BHTYPkkxyBqrHEJPg7iMaGxr7VFK4qyeLwT8whXHtzXzH7iExnRNH",
  "key39": "Q3qyfvKGLWdteaptpF8sYpecbiXy8cQEbjwBxRrxQCA98izxtKYb1KdDZK6BV1zqqRv1MSv8xsXFyA1xP5vUBZk",
  "key40": "3EKgeTEoFqZjcXpgg5kUm1Mdy8SAUqq1JzYKuHojcphitk4arj2AqRnUfZjjoiiBgZCbKocKCV3kDoKSZnANYS3F",
  "key41": "bXrbH12mzX7BQcntA6YWQaLK5fCNNfSdPgcPnCmpSGZ94j6qXhr5TaDffpGSyAqae4r55J3EVtPCtckF7Z56vDR"
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
