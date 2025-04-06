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
    "2ct58HhMLJG7eC72wdExBU5tDjgyJRJ2MoVrqP7XF5AP7quNCHaQknUNrHiDJrxtAo6BBCfWuwfjuUm6CSyCp6sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sahad14f5U99tbh2vAny9TS597JKonWy5xDh4m1CdpiEjk1nVdxwytyQ97ry9aBY9jofKXNjjFkhSzD4tFPk4gr",
  "key1": "4TqvMoNHi8Qt9yhKPFBuqgdyZP5Vn8gtGaJg93X82YabLUBDjdQ1diRi7Ac9UrfCW3wC2GjLpEytokw8RYkY2Nz",
  "key2": "4YE9tTd7G5m3iKYGxxR1SkZtzjbZcATtx6JXER1p4zK54b2e3a1z8rG6D8awiSHTyLNzTQYxtbujndLLLua1zfaw",
  "key3": "41ouZ5kKEc7VjkMZ5UNgt4HWgqNuJEeKjhQq2rA7MbnHg6NzB53fzg7FgaRpghSbm7S8mvtrDjJn6LQ9zNYdoYzL",
  "key4": "2HB9ccm79Q1hQ9etfrmciPRMjhoaZ2LsnW44CFU6V31SBQqoK7FU6xftuN84HBBgrvVe6MD7hjVKwW4wBA8zwdy8",
  "key5": "2b9girzarMwDNxnU9FqCrmPvGnpcCmNLbMo2gsrZEZD8AYcWCbx5RyzJyCR6nnALfYPbwZRxWmo8A9Aot91J5gzv",
  "key6": "4E3ZPh4PsK9VPqoHtVfdhVPVpveVyrVYc6Wogyj4p7tLzYC7ftoqTF9SadPGa99HcdLzSTxFVG2W7kBjSJNK9Vo7",
  "key7": "2a18b5PaPkEVbzxvcXdsUWvezAjVssLsF2BhwFVHCViGotzpg5gTyzYZMU9NZziuXGwrG1f13Q1jDkZe57HPABmk",
  "key8": "QWJQoJcntW9NTmh4yWC1LY5EYJ1DZec4mLdYcnZjiY2DCBa3dumnaBfJqLXjU55poHTxmEQ2vz6s38FjQwL6Ywh",
  "key9": "3vrwqxiReTRBsxZuZ6G4VwvmYaTF2rGN29YPMKMgfG2XuxDdYWVbSLrd8fQRJjJaYxXF6o7T7GWLM2YeGUe8AyPH",
  "key10": "5GC6Fv6HvYAvbL7XrToF6Uiv1Xt5RbMTTZDmLvHPoVLLKDRpexjJZgYhpYhjvQS6MddX6FTuCuuoqCaSMe1ZeEmY",
  "key11": "2mQsBdUwAfk6MQ2ZQCasDnKDuVEAk55trUNPtHWs9ZAckt1mqCHQsBP65QmFxcwWMCBHMSgZLxwZFbvf7mcpCvJG",
  "key12": "2SpHhNJ6tPfPrGftXbGCocvwmfgMU3Jc25ZbrD22XZoFuvLvHcxrmg6vVkm13p6yYzNGL5ChW3uYyTNtveKgHxYq",
  "key13": "2mfJaB2YbZcn1oy7E4EWd9gvQ3MaLG4yaC3kBCYuuqDvdNKEmDgPinCSArBHQAskmiP7GfRw7ufLiQe8UA1wz5RM",
  "key14": "jVp67qzFCZ9rQNdw1LBgL7Fagd9VUMtpeymzn9DSDrmwt8iXzankiThysM3L3wQLZv3TSvaCFPGq2LmSMx4Rx8S",
  "key15": "4ae8TTsvRscgGwWai2psWJSauaEfZUQrXhNKUJr9Q7JUzo7ZtV4cPMWHB4j2VwJcGWToHrzZAA529HSJn7CX2ax3",
  "key16": "3irnupZ4mi1DCtP8PJo833ueahHTi1mXxpDrzZAgYMEgNEHHaRCHthBtP3b6S1mr35atvM7J4UDB6BgPdkrHhSid",
  "key17": "rxnM26bcew65bzBeSjCFth6moHafFQ7vddJoDLNepqj5es9EMNG2mPN9Ggi9jWCqfbPwZBZEJnShtcTVJvAmWAJ",
  "key18": "3kf8BjviP5T5Fwch1wdBeAKdj5VXxtDVhZZPpJWqFyWuWnwKUaR2WKhY3dxR5oqQWRH5L4fooieZSGNxu776aLhi",
  "key19": "5dNT9fxuriZTQdgCNWEkov6BfuL85yw4LZP9GBKpSNvpeCCCMrA84t1aspcF11PXkuokc9TWPEVotox2usrcP129",
  "key20": "448k54hSgUpGjUg2JqfFV4WPfZW166GZYFEbubqhHtohgSjZR2cLQjnP3gXMwJcv9aJbHek44FVRcanKucZZGT19",
  "key21": "3LEtuPrCUTJsp9AxiTmvXPh3ZtTXt2T96YMoPuiJQNTJBt7AXtCR1F1bFc3zSUVydMAvSsiXWsX6rovqXBkhq2G2",
  "key22": "vdisHJvWxNZXtJJf1CnwQ7xVAXystjMs6KhggmuwDPZfoKH4BQ22gFVJkrQg5VDr14TxxVje3g4wR4XJPe6m4B5",
  "key23": "sXy7vD3cwnqvkYEaQA2m5icXX3wpAL6S4Aa5gBhCJrXrNsyhXTEXwr3KGEjfqSRu5sAeE6oB8SoMRydUxJ9MGze",
  "key24": "2uDseT3L26d5F4wT6L6ecK96i8TEdWANgguiPJiVJqQT51idcc8qY3QATHvTgGiQkpYcBGD6CxeDJESR8qbgzU28",
  "key25": "558r6FXxDJKH6tVgphc5B5cUyvpmq5T71iq74Pmmbo3MrEJk8BvkGiow1PGoYdgW15fFSjCyiYDP7T5NpHUdAJnG",
  "key26": "273zGNSfyNqffYsKMnkFVZXzVwFnDZnFK8tP9ARBJ2HD7shkqPhs95Aa5ca2S926ZYbeNkeEEJYoV3qZbgbPXTwP",
  "key27": "nRfyzn28P6Cnq4cwgvngp8VU5NwpXrVzETQTNfjf9KX9NBRJsqGMn4hMy173Zt8GWA1c6pGRfVASVxoLzPfawnF",
  "key28": "uREYdiNxgNJ6JmYF3atM3XQc3kfDYvaxHMBNUBQDZL2aPK7TSWEzUKzcmbXHSEWk9Wug2xDwosFBwYkho4YxFSJ",
  "key29": "292b3EwxUYPytsbMq1KcwVU8bdj9sz9Zb8stwpzQpHgheK71hqsjajc3C89piVPzATx4ou2We84Ys36JkzyXE1Ja",
  "key30": "5gj9LPPs5rrNZ6zKxgBVLqSFzbdtnrHPrsDvo4v4V5rSZWSn84G1AUCdWHS2q8W3Mitsnj5Tr49VVcRL8Fc4ibxS",
  "key31": "53s5NpGf8xoW7PYL7dunmGbS7h7qLqLmzk1eHupyjw4nZGUTDj1dLXJCJ3WhaYGyizGH1YEmPbwHZiKKhvnsh4Vw",
  "key32": "268sSPekMXZw5XeMHyppu5netwEx4g8dmhxVCWMyuNptBQT3UzzjGoLmJviuMihC3jTqnAhEDwmgBCtY7voypxFw"
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
