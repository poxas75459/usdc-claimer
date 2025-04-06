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
    "3nrDyALhHuQgcFXL6xnYtZQyXFX3efMt9mit9MnFejSJaayinrbEaEQ69B7TiXBquVoew6QDUmdsDzmbKazkeN3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i7viajWKL2iUyt8AR38AVfnS3hL87A2xCGUadqb1TDuNAcVJw1mWQJaRHDChpMbbnehRGhUf4yiLM6JCnjRMd3Z",
  "key1": "49zSaW53BPav4bob5qKuYUQmCe5vv8btzJiDenMPqFeyDju9SoVPxKsoCpZ9Zv6b8RqF7Gd15QiLDwfR811gV6w3",
  "key2": "5H8eZT5xoYtwcD5ZZr9L2Dc7bnXm88ReHmriUzjxnrnLjfKou78hmzVvwiqUjQrsFDz8KUCLi3wczY41r9jq4YwU",
  "key3": "62derYEXx62dbW4eWh5VH14tscv2QB46hHtfEx6VMzTZhuD8qLgYDzD4NoaQHPZg1xTn66RVZ8rwW5zk6dgBb1qu",
  "key4": "YSSPMeRL7W24Y8KzsPwuPXenUjYdSKxc2eHm6DfKc63JmHQamt3QJmZMpsZ55vABQ4QL7q6aGcpeEt7xGUNmGMs",
  "key5": "u64NABWhYVXg7YW5xVW9j1QzwAui3nA5i5Vuo8H9CdzdmczohLVsfXsnYDBKZ3nbUjiwMKWv4x4smJmcUsi6LX3",
  "key6": "5U5aaBMxDZMngc1aTsKGiSSw4DPDv7zgq4Mt3XKJA3c2ndpXdiA8kNycsvoAkdNZrkoA2JPmpFLtDqH9btM7VpQK",
  "key7": "2RCh7ek8NoX4dcRa2EzBTx57RbgRCW2ovc1Qqvu7R2dSpTnnQ7YcsjyDQCJhK729ypRyJZDpV4AHtfgD85dXHgYS",
  "key8": "2ofKT8Csu4Np45HKKJ6g6Voibga9kTTk1sbZgymfcBRx9wFaAvu1sipTMXn4QWeMXA4jHCcg1r7YmMFQxBwrM6C5",
  "key9": "ncEoKj76LuXFYyj3jfNo4NYtrR7GKYDJqtwa9BqVjLG3oarjzM7YLfCZHFSAZPkHMxu2tf8rAj2euuYYgTTuqgw",
  "key10": "2diHUgancZngYqVf8zGAYy2fWnZSFZDTh3nxVBUPmxjGqeSpXgx1TgKj92L72G8FKXuSpSUiK5bBEG6JejvJZFSS",
  "key11": "PexEDAZvybo2Xfb4dgyTBRsLGG2oMb5xdHXLGuNhi7DD2Nh8YRQ7XUY5kz9dR37RmUdMxRo2kUgk26oZFTg5fYu",
  "key12": "4vPtYgoiAL8TdkE1tNREu7WCdpx95uA84VrhzSJt88xZ8tvSBgvVaHub33aLjNCceoWjBFjNuAmq6sgtySTZRcQh",
  "key13": "9YLG9oexzPYEWLUJgVjnbXmVCxXXfWphPpSH8XJ6qMkvcWHU6XpfNpkC3hNBhVWpKW9VPCcTC9yvekJ3tc2y6pt",
  "key14": "UiPTrBttsRCeChYPoRvRtuDogEM81JHMNmCQundbwWJiguf5jqwgWnR7rNcArXrqYvB6AXAKCtxMePKu3y4wWdm",
  "key15": "3eyg6HHKEcgUxzmaV5uhkUzZB6PNgW8UbDMscZzdS4JCqznxScJcFwxtDrjboWwXSdTeS1wgEeHjotMJkLjXg5D6",
  "key16": "MKiJButx5YZo5HiuLFpzvd6CngyfWuFVmEDMYgu75GxSAizECYPeMQ12KU9nxMW1Jw8zgwokUA8LxXphCUNrwMD",
  "key17": "D9yeCzCqEG17DBGYMUg1YwD6NZngjonUnpiGbxy6W6asgn72wdbJVrcpTpUrX4z8o3jdbprysGJSoNemqF7jdT5",
  "key18": "3VJmMGRVLegRXSiQjRBDQsseygDWJzfmwzNR7DAqjcVFw1XwGBY3BNkG33ngvcWAdriTsLv8dqqi8NMQwHfEbvTa",
  "key19": "34kDCgtwwb3c6mGXESymV5mFaoeDqPMqN3KaymyDUeHjDivJr4DowpkMbpuN5QR793iMuwzV4y5vqyvu4Xhgjxee",
  "key20": "3HVA3CRTCJ9Kc2kjcdFZ5fefzNTgamucmBtEHUc9Ubrj1RdwqkjSafUPrLtubuQ6FyLE9VAxDmZCzNHScsXtbDdD",
  "key21": "3MxVnZrBxFVGDKpM8XQnM6M88tQZzX5sdS9NMVtDXGFm7DHE6XW3bQT7s9xAFfjdQraT3Tb4uWWam3v1puxVwkaZ",
  "key22": "2MLLscvzkitPXKxzcYBkff9br9sSLUnNsq5wpmSsP1g5HcuQzzHZSGbMCNNjpEmy88NkEjLMC8LwSKdmns7f2UHm",
  "key23": "3RvX9wU23c56WDLsD6ky8snf8idNUU2ekbWPWT6jpvpyPxGjoVFeddG5fuhRLPa3K6tdVsY2PHpkrVj5Ku3qea7W",
  "key24": "2twFcZQadqY4MVEWckJySvwcHvyjTfHNGV2MJajYvh1NLSBcPT4cnApexuFFAEQ4rgqmPgRt2NJ8rbeWPFGfRD6b",
  "key25": "511FajsJTNB5pvfhRBYFiKguzJXrFGMazQRBdMeTwaYKeuW4i5yhmaBma9syqmo2gAgBSEQpcWt7ZxKZK76WBUMN",
  "key26": "5px9bcTczZ4ZhGSKDkChMUhntHFmFUEg1KJYM5HxnaPRVJWvEpdbFMFeMN1NPGrAjAKfxVofFaoPpUoCNVxbanZy",
  "key27": "38XbQuWPfwKzsp3NXvh3thxGyQ1GYS9vw4txFCS9XxzN6siy7HrnyoFBoNHNn7QhwgnWzoPG9wo5a7m9Ra3PE6ue",
  "key28": "3PjGWqovygKEXyLB3gbi9RQWkg1xstrRXhK9B3M5xXxtuzFHLYCDqVu9V5y7ESBFjty73BmEDdvtByKUQoq4rULB",
  "key29": "3hHan5afoqTkzWDjeU7jN2o5XxBU8nfbcbWdDphXqQX6snCeKB3cTQn4cUywU4AVk6LvRNJBPwHzuXpDLrWpXS5d",
  "key30": "3burm7DGjBzAa2pfamh7wPjF4sVfWxSDFBd6sHNcge6TwP9fMMSJc6mTsUwV16qJ8Auv1bCjQA5rbvydonaZSoM8",
  "key31": "8Spr2jK6WdRbgj672Zqeu7WJDzraJd61WE3tCw4WKf3fG6MUSFmQPZyiBVZLg83Deyk4dVKcD5UE2tv9Lh8pbtV",
  "key32": "5pz2xYf21v7VQRAHwTZ6topEd7c1xGAgLiYoAExeXGXz9xEaV5F89GTKMtyLyDLwFUrLUaGE7nCDeLe1AwNpbo3K",
  "key33": "5ASmB3CqXGKqoFniZZk6ksBWaYa8eZSK9gB66kmefkXySQATbWAzaekpVNnLhTEnf9Ze8E36kifPC3XpvdRMnUY",
  "key34": "2rHUp1z3Q3yQg2opMKpqZctvAXk8zdn7Amfjz7CzspFkDWzXmggdPvGVXkZShppkJMcsEhviTRexPe4a26WptMnS",
  "key35": "3bVLZmXJNsuNYnBgB2kCf55BjFdpbqqcAS3JMDRJUR5d2rue9okKpsHhuj3VWdjadCi59JVWGvDzguzfWJkV5crx",
  "key36": "4aCZARXYW6nmWYp3M4tXjKNgjBAnpk3n6JGgNEdwU9HdFGKW37cK4axNcG2STSzChFBdxjsQyG4gX5cfgLwPc79n",
  "key37": "39xvHF2qqM3vKMZ7F5VFDtdF2iBBJueEr3HQvSMMKjcP84xe6nveNmVoayZT6ybhUU4QbbEh4suX7vR7W79ZpB1d",
  "key38": "3AyHKdskRfWLQj5K2NJufGmVQeX92y7pAf4ZBe8caS5k5CE3Hv2NU1HxiuRTyxwiJ4K7Mp9jds6mgQacSxdeawAp",
  "key39": "2k895qfAjzy6ewamX6e6U3mCpUBkGWd8zWhAci7QGt6YnyyhQteHiw2JGjWuEN3S54UjVWUmxyLNLQXpPfyk6AJF",
  "key40": "42J8jv3zxQEq3NyhwknCtabAYzVgNMakSx1bDkpn8FP9xWMdrksS1si5A7YSWHam9xvNucwegufQ2XdshR2zQi61",
  "key41": "5k9jYUaRxUhrKfMaXC5hZ18CAEfPfAt4Xx9GpXKEcQArUyNkys5EaLwgSw9SQ6AaDx5jzeHpn9oZ7pNqw3VEJTMz",
  "key42": "5cjgvp24BGNeGckrnt5Z3sYYvLXr5ZR58he669VmsLQDVNRHctkd7Y6qoFVKiwMLEPFRPV6c95pU8q21VmHgqmU1",
  "key43": "3ScET3XomAgAnRhxJ1EB2tfD3VvLioRcNqRR4HVg56hB9Ccyr5bxP2UJ6tmjgRzrVAo7iFMBCKjTJVJLfeD4f8Ww",
  "key44": "3M8PrtDgwDu5Ff8oLubpML7e88hihkFAiSH5CqyU7fzREzV6V2iko5xp39gwbU6i42Xv6VgcJpzBRM4ZAvcLfj5Y",
  "key45": "5KP1j9Buq7QePxEmxwDGLcD47JBTKe8GWwotp7DjFrRg8Jek2acPfUUoyBPQte8rDYZBjDk4NTQiQyiu1p5nbNeS",
  "key46": "jMyhFoqL2ugFTJyvebFQ9HCZe3yTdG5bqtTRwHfi43PBPJimgLG2TWGawvwt4arSoGHQ9VqqQT4nzUcWjHkT9aH",
  "key47": "4cSPuVUhBet5RDuq2g1dSxTvdM47zK6W6u3Np97JmdkrFY4dRnUDfkqBqruxez3bmPBL6LzyL84hZQ1mAFLoVcYg",
  "key48": "4uwFdc2YGeVgNDmtW3sRckSoeLmiJzGfmRW9eBFdL523JjzgzSHuTz7ZxWYL7gURnfEAvWp72aiR1tJTasW63W81"
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
