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
    "673Mu2QD2mAiZnc8oLLQamyCJ7GscsYpxoGxdDeSQwh122794Kv5HSgWg94djaM1qvmuie8aADh1Qs47Ze6LbxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HkJM9hRpHaSkDUY3qffGwwmav4aLJVk4ronkxckZAFXJSoXQMMRmLai5DqUwKErQubpx3sA3YZ5PiYGYf6DTAzu",
  "key1": "2ytjkuzWqA5FGxZxXY99GimhChW96omnjPXb8NZ2Ruo85QAsS8MLbL2A4NxjyyZWhG8oRGJWQXJ67RcZpFXn7yzQ",
  "key2": "4C89SGiqrNwLq8qLqaKCkjM1M1YsRYL7LVr2nv5NPAoSs9kL5qizg3uPToqRtMBCtJdmBx8uLmkd6wE8egE43Lwv",
  "key3": "65xh9EP3U14ZvumSPcRBfm6vW6gYfDApxjFm7wXN1rC8pg81eeBFe5PeTW9ByZSq8MjMP4sBzEkZSg7MWmH2uL1B",
  "key4": "39RYYprAr9KhdvwxkHMep45BH3Kv8M8hR9xRXu1iRksZpkJDtkLECX7JhE2466wzstUNrpa2YqdWDFA7yesywWAm",
  "key5": "44Xb6MvF7Dc69UyufT2qiPLvZyToJnY1GufTNC3ADfgTifXZgRBa1uE9UEX9CwW5GSro3KCo2BzXVazTsCU83Tns",
  "key6": "25UvZmAXp2Qu4QT9QZ9cMJpLMNTwn5ZTQ1tTMQ4EEX2yBoUYDU9z4qpNe9jbEQWp5VasQz4ZykufbGbw842PSeXJ",
  "key7": "3gLDMsHXKCLRnFkknkUnmGAaby2fDgYn3vopFAXLBP7KN1iV68QLGWztdzF971BL6QzNbQgcfjcUEyCCP7EHTM1q",
  "key8": "f5hfWbRrCwzMrreiG4McGWgwNGHwxHUQoD3KCB68qCj5EzCEtTnNnuMmdGZicXoCxADyxZerBTyePYPf9S79Xgh",
  "key9": "4mVsgoNAaxZaf7SKs2H71uXgUj8w183R1ac7FMZpsNY4y7bjy5rANEcbuAYmUQDZBZT8mqwAK4icTvVhX7WwXTS9",
  "key10": "4HBZBGZF2k4DdVQvb9RWK3SbdBLdgZKju6BYj1Ld9LobJZLpuBGWB3vYFVQQHx3UiVRUFo4fKpirWK22r7QXGJHB",
  "key11": "5AhiKkBxScKCKAT27p3Q1DSuGTK2VMeqtFwa8uYH2jp5JC6EgB4ws5wRq9CNTFU93oKt5B7NQX2UwebyTXAqjpCX",
  "key12": "52UHXqGJx58fe8AsKUBjN83fXZ79WaSk3GCWu9buRHKiXcPGhXN7s11eXHqdPTcEcARUydQ28fWQ4bekELhCpRPf",
  "key13": "cNZxLtFNWqwY9HWBC8AGWezAku454WaaDJrUULBjF7ZXscuqQgzuWgx8dPKsKrm7jLkMuejSgxDH8wBLQvF9RP2",
  "key14": "4yFJ3mjM5FsumHMruzSEFNfuuvCEExTfDnNyXiK6mbm2jMcDYbRxpakjHmFGqsdnJcCb53sVLduxPeVnNgr4pxD1",
  "key15": "2hiptGkSwSx4W5Vbepp4BrayA512oFYCsB1up4enU3TkLBDvDWRMizzRdb4cqXS2nyFh5qbTnKJRbyv2CX6bMhM8",
  "key16": "3f4KZA9Uhb3K9JT9TzCkxffZCkGzY9XJWDVJVkEFJMtRzgsPE6M7URDpYm44jeZbJ3KX6jixYqq5iqLVnCXCDTNM",
  "key17": "4ABpuvyJ5Tcisg4JY3DrgqeCrJ5jwuUum9tUPZBAY12MaUJLGej7VXbbxpbvYG846LTuqprav9Nxt4YfpS5jcFPd",
  "key18": "MScv4QJqgcHrJjLQr3z9yjDgQ6RDhVPP4JVnvChQzhow7CAygGJKPuKWpH3FgkLJDWzeRkqoXVdHeLiatjMUCmT",
  "key19": "2C7hpVbG9FRAv2ZhwCC9Ns7SzpQzaqo6AvN5tyWTQ55FzXDnkczUHfT7QxsHhWSY23k2T83t45Q5RLWV34wRfpB5",
  "key20": "XfG4hnKGCchPXibEyLtgN6DzbUrRGF5FH6MZ8uv1KMXBuMn8MdfLFZqQUNKqaVCd2MfjErvwMSV9mPMQqYg39es",
  "key21": "3UpNe1aJcSMNR3pYZLzUgTVyr4rHuDeaD5NqFw7oEEiad5KtHa7dWQ4zNeZ154r89Dg18RBP3foEtu1r2aKagbB4",
  "key22": "3kXR2RaJoUgMZ9CmqUBc5bibB186v7KAR4TWoPRarUPZ5DzM47dZrfdyDuKm4ENDB9ugEWMSCLaCoBfZiD7Xfo7f",
  "key23": "dXFxX8vkm4zmodcjtHeni7uBSQDW18H479MGAtPHbCgcJjdKai4Gu9BfhzMfmqCm1WkttcvHA12KXL918n3HJUJ",
  "key24": "5ZWjgFyMxESpWtFZZLY4nh7MKhteJfivM9DmCyawc1zk1pVzs3DTAJ2MA3ykSwrW5ch1MUPLkrVKiMF1YvjZc4tP",
  "key25": "3R3DS9t2mSxhuGkDjw1jWhEstyNfJLPCJjapUf8czFMSYPRUKZiCrqUb2hPhrQEsYtTtDk5jdqGq8wqk4xeKj5wS",
  "key26": "21eYWtXKzoib2TtYbT8p2biK5aQWYmCT3gGJvXG2hA2q4qMzRLEhystJMCu99nBobquipZJWTQmv8uCbJXZJZNqz",
  "key27": "p6jTqtodh9ggy6VPmCPy7aksqakdzB5zJH9XjTfhtfNe5RMGJm4DW17dHnYd4uRubNZW6qjWAwpn5K4Yt5yuUhc",
  "key28": "3XXg3stYVXut14xEdQpQqZXsZsu8T13o8nLmRpH6SzFbQBNHdGMBEfoHPaZixWvSnCpjkjSTUEnZx8c6DFbBr4eZ",
  "key29": "31qL4LyBC2GbAxodCsvmjKrWBKRN3Bdv7yYDLYnwmY9ZHSe33qauSh9YyptcBczGFeTgKVgLEueGeTJNBQaVA3oS",
  "key30": "4h71FzmdYtXafwwU1hSiZ1NumqDwJXZvrAqYh4M1rJWfZdRQcpJEZkzUfM9Bi2nwSFKmUBABNcWwn2NmnDK5YL1u",
  "key31": "kkuRpEhTaDdoiwX7smFjvJQx2UoWyp6iYHSNkU642Xi32xLNranzTvJudLCLtLgSFaeDUZrDigZVU37W4aXU1Sn",
  "key32": "5C4rGbso6MoRWNtuTwwBhDutci5BJYKE7A4KQqEvKvXvt7gKJBANoEbCofpZdus58VGtfFYqwCV3vzsj8kX6ft9e",
  "key33": "5KnxQrxrbpWsoHeGNex5J6L54FrNfDGHgabTUTg8onrnAiPY8MrEd743KMouNC1GwUUQVK6D6oRxiRASakR2PVV",
  "key34": "4Rj2g7XcwfwH6rHNZW1dcMrU7DBXsBrj3rNWMsfmZAZo46meoEokDdWRiVwZUgNo65ff1MAoLTf6E2AYjUbSE5fa",
  "key35": "4AGkhDwJ4Lp5pw6FE4SW8cuvq1UJvb2ttqgV83bZk8PWCMb7GaQXtzs5hhjfvniHKSfBLRUmUoKkfEtJkrLGQjWA",
  "key36": "2hdyzR5Xjmm3Ek3HTgbAVe9CPJT4UyCGjgUbe3KwrGNvJ6NBBp5hVn4P8KAq8TcXiT5gubaeNdcxGyunVREFCXN2",
  "key37": "37NZZ93578q18m6j1ap8v9ixbTD6Rir1hK6sBJUmKF9qjb6c51bwtiUK9xp9JGceHJKRfZDVBVa4qiwDjxh4gj1w",
  "key38": "2q34vGAiuEghnX5ttawaWmjGA2hAXCj7nJCg5BXFV3o6TsSspiqQJZrVbt9LtDSRmWFcZBer3sdpC1HpMRhsTe92",
  "key39": "3Ua5pnkwAQApxWM6QekuNaXV7pQvwsF6tBCbmHkJhqzAiv6r4hUD8hcS3u49e6ns9KrNB8DXosM2ugofwmto2Lnx",
  "key40": "3ApAfRjkD75u6H3UWRr6NPMSCew2yJ3kcB9Fue3bqqWZkNz9AKhUQQpJC5MmBY7iT6uDZfa7QVQNgT92uzxJ2Zku",
  "key41": "zL9bEH879puUeThXNwbTjtcDJu91t4e4nNT84Y1JYBF9EVsTAgk3oek4ZgDkhuvP17d8CcgTbxj8gPLsFjjfYwG",
  "key42": "4hAqbfEtaTozMXm72wHDQSS5BdudkMkYfC1gFco9jDJ1WLcEyohYiuBBVqbdCpx7aME53RUHZ1pDGMk7N4camrUv",
  "key43": "4QwNX8iaGHWzgvzRWiZjcT9qHngcCVP7N8aLcvb8v9zfwdstXBEo1BXau8cB1y7ifQKMnnKHfxP1mVEiRhcfNfcm",
  "key44": "2ucj1or95djSVfK4xJy8FRKHtP81QYg7qsn6aasBvwQz2EcDRMwKrxRy3zXobK9kGbWCivE1WqbAV8TXo7fGPUph",
  "key45": "4Mg4xqvfYnqi7FQg7hpAC7KXfVEkReBmKeJBRnttdfgpBBCkKP4uwtmg4biW3KqAUpLv14rcKrjFQhC7cZP8qF8A",
  "key46": "5o3T1Dua5GY5nWjWWjcokcQL7imS3abCw6g9gfiDJVzsBLp85q3ueakbjkrCbaoTduTnX29e8dAB33D12miUUFk6",
  "key47": "5L91X5Hg2ntXnALNpXj5fP9DbrH8X48EuNSC94SyLu8H2PNHLTJtKzxJxjtCdQ4M4VZPKTjCaZha6MXQXv2wPtz9",
  "key48": "3PHGaVFaUU4BkDfCb8WjF39BAKj4WoHSuDuQbbPyfL1yqkrbKJaGbNMC49LuBFmcLvBSyWacdTrepaGTn1TqXqf1",
  "key49": "3dzGJgD81odgSn7YgdUuYwcGcxvuR6WZJQZ6j8mU8WyBwEQPkjeCwmF4KcRwX8j5qC1o86d3x43yX8HRMDVpAXek"
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
