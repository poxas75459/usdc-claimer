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
    "4ZTQeCV7eTSTjWcMUerE38tgBWxsibyUZkZrq8CBUg5d2gYTkNhG7SJGcLbsFDdT4tKsi2cNKkeaqjXV52BPxFS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ijmqzTTeR3FHLxsr3KV3pzHQ1E6oN73MHbAaBGtG52i7hXYLPE7dXmtPpt6dNWSjaxd9X1RpCEyvXUaQp7DDKLX",
  "key1": "2krRGEGXAREps4hXirFxahnrQVFLNHtPfF6Ce8eFkbksTU7XAsAQsdKXv2AqLTdHfx896ckLHETYvPT8RCK921gd",
  "key2": "4GyizpxP7hzNM6pyBTJ2LPq4pvQgVmcu8zsy73pHy8R7pz6W6XPLrkfYk1LiXsjEQvPE5JMbiQ5PkeNFcdEGYH9G",
  "key3": "2uAQPHcYNUDNNzVwERLiC5qxkAZjDKnCTdbdChBGb15ooXatNLck7dTtgZpthgE17N3g8RfTnF1biZnzLUrEhkFt",
  "key4": "4Ekb48haSfKNojYuvP6GSuPyoCH2j3NC3jAYrc5skH9C3BU2hXqYUhydugG2EomesxAcXLgytBKNLZzHbM5ukVZY",
  "key5": "5E8zW2Pqg5NGXeNv2E8tdiBwMFCMHMGAjg6XpwAwqksCtCd9F55iz2xGbag9Xjq7fbWAGDVcLVM6eADdLwxrFy42",
  "key6": "2DNdkXu88isYaWqwDa4uhwtf6xrkw79JNZMQGyAibRCQiDb1LgFhG1QQrKHuXnLrDngbwgV3ohBSDzxMWJLSmn4x",
  "key7": "2t4h83L3fB7cT76hNhz7kPQGTM9LAJtsBf8XnAnMmZcRXPTD8xHyXg3LPzCMYUXAVtexrfnduDfWwZ6NQeUvdTA5",
  "key8": "39X62qqVYZnfSRtSGfZjpm5AMKUKsvDqxb29UzrqbSxm58KowxcVkrXVLbABEoKTjXraqFxEkupFVZYRwQYMA6tH",
  "key9": "5huh16LcnBf6skwUAx1xxtn28YeevikahVkhktrv9TQZVvigNdwxuz3f2uoqwkbqubVDkQHne9CwYThxtsQgVrWx",
  "key10": "5jb2H6SFfDKgzHvYHXPnHtDu4dsCiEJ5dLLUwEoodq9z1gxZ8L5aVyAc1qBEuLMrD8TSPRDEvLjiNRByNga8Jg23",
  "key11": "33cQZktHYZRN6msCmGGVQ6PTJ45WTznCzQPXDXMHeCTXHH59Um5F8ND7nStL34VHUpWGWWNy35yyrpv2JK93hLPz",
  "key12": "26owDoUPMGAMiBLpaaUeP2j3SbWA7cZkesxG9oC9VopSZTJGN4AEPka98aZ2M5rA7MhunKMtow96gqeZ5V98dZz3",
  "key13": "5hcDzNVmeyLg5iidxjL5Tp6YdYn7bmn1etibLYnSpbcyiyJYUgwsdEf7NEuk5qfYovJwjDuxcwHK7vPrc4JKHwVk",
  "key14": "4ehGvmWkX4x8cvJEh4ZFRBfnHuteAcHach8rjfrHUY3U4cdZUen7gtMvneQDM2htTUCoPDVyNfiCnSZDTiW859ke",
  "key15": "491XfBVfytQgaZsh4i8bXgY52Pti2taXUSv9ijGJZnCbs9LJanSfvcx15nRat1KPhGS72mSEkzjenq3uU27zFMWE",
  "key16": "2MQYtPENoYnPNCz2MQegLrqmpptEkVWRgYuk4ifuVrFBfXaVV6ZJdVcCweoXFHTzj29bbzqBbK4YMkmPFdXHcFNp",
  "key17": "2dqmNkBRhFSzp7LogC9J6bDNAbu6bGGFG2we8mz3vJtKHBsQQ9trZzuibacJiarXStyQyiYYqLB1YSdTfN5SXrL7",
  "key18": "5nTbFgUPqgQVUsfByoatvRjGzWegQ8NQgYgorbXs8CKiTzjofxz96mJd25TA4T7XzVqXLm36h1ZgnKwszpgKdzjG",
  "key19": "3nMpgTS9uhznbGwNDBekm8K762WRYUr4BvHbmYLRCgB3wnnL8qgdGVEkK58gbq7JGyrhehjqqjcw17GwG2R7vf9v",
  "key20": "Wg75fRrJA8CiDURpjPfPHEWw5TxbL7c4SfRedzz7UsPFa9AwtdEdQvW57EgtmQqdMT1oRUWknNxm6ZDf59mv9qg",
  "key21": "Nxv7UBehf1TCUktDsqCBnx5JB9v6kusXWyT5p4wupVqAjakso8MCqTUes8dELBcbCavCDDpNUFU4xZ4PeKSBuom",
  "key22": "659QiLmWWrCqNPc5gUomzeuFBQaYVE72Gq8zVbarGN5L93VLdMBWJCJL7hRKv11wi7sbds37oUpnsBvonUEsq3Jf",
  "key23": "3rLHZq9iiY3UimimESpDn5nG31Gzy4s41r7sJRSA48gvotuEGn6VbMiPDKNbFvADvMbcTXRpap4THHTsC2Xnj8Bs",
  "key24": "qURgNBLtrJzLskmPyMqCoJiFgqak1bY4qxsgsHpdHo4ooh2kicD7umuMkcZMyfkV9vKwHuR33CG3MzD18Rd6rLq",
  "key25": "XDR17q3wgDqSw6hxf6Rb7923aXHAmCvX4JKiyBdS349ECDyaxhMDALY6jupQgp4bjgM4v5QmunAdnrr5sWxzVb5",
  "key26": "wgzysDwmWSWpcwR8a24VF9fhnmQSqpnaS8k8Geh8h8Ay9LTPL4guDrBhju5sqCpBauikrpPq5gmMcLsFR7ZCXc8",
  "key27": "34SnSbBfhWGeNZTXd3uy9YEVVeeqMxqUEttb6USkcqRVJbh4XHcKWgvuqQvvqKd2mgEZXh31T79eJYoyRPYXWBv5",
  "key28": "3xnaF1emWskYC8U26J8Bf4W9AXswvAXR5Pvv4zFXNvYM816L8G7ns6TWCkWqNrFSborboE9QVDDCaRf2XhDT2hym",
  "key29": "gsBpnhRzZqtenJCKXp6CuGRNsr5aKvLdwnEoHqoVTPnauQ7G85gVVGAxRsi5JjvDPKwKeJjwDUg7eJcrMfKDZTw",
  "key30": "2WLwNXu8kZ318j16ipqHn7GSsj689XpSf8b6DTbzm6Tjp2Gg8SjzBxUWC1oREReL2erGd4LuQHiaDWAbYzKJXQ8n",
  "key31": "3N21j1CyN3V2RZoRogrfm6AEik2MMLGtvTAvdzELePvWqqHaG5wVGqZYxfi54PWrVgZ9vL7ALr2Ci1TdDCbuyEiZ",
  "key32": "2nW7mmMNWEgq6tUTJfU1UBYdo5beDTmYddcmpm3xDUaS2NeYaJHxXVLd3z3Rmks9bd7CrAZzmUqxqx3Xhp7kUo7W",
  "key33": "2Um9oLoWxCz5BZwrH9W4HhCUGALczYJ83eQ48zdfnCUFjkmiUYJv3yGnS6ENwMG9ndDXbhGzBWD9vDkwnk2ws4zP",
  "key34": "4viJwDeET7bGUVdPiK6Q19D2KuuQSFtHr7hfds4yHXDNqm6mPxdJ1TgGFeFXW8RguV8xMaYE8Zujbatv6G8tsNrQ",
  "key35": "5V4NgRdZWNi6Rw4QUPCDqTvYaojkWf7XW7xtk6UBHob1VCXto9ffrwH35kY5jcqFyEBjZXXLTZuFwimKSgTRu47J",
  "key36": "2pXTFcjv2BNmhBjnrTkTZM5ZPx4ySyDLeUd9PfLaT95McixtnzQ1EqFpNPJW54P5Sw5xd4LeL9dhxiDMu7237ynv",
  "key37": "3dgyz9Rd8aa2JQ952fgxnnd9tF8xhYQ1KoQh4e7uy3xiKj1MbTU7NJQbVeZasgs5ap4uwouwzWfcCp14M3AMCdoA",
  "key38": "2YW1qSg3N2KfaEB4uNkXFwisv7dsG1XJSWQGdqWKvkxCSRpRWbKHdmxkm79U14NRdizakjYvRwtToW7n31sZzz94",
  "key39": "4AaXpGNG6eGhwfHDEcm2YxewWx1CmBVGrm42kCS9FFPCovCkypoUonpJHWfVhQfqtvEPnYCA6VJJR5Te6jFrLZ6D",
  "key40": "5PhPYMjX4sZY9FKr8A8VB8XzFGfRf81fdr9reYgabj6je2SVkySpDjrN2dLWsmKrFRxdgYy5L4FeaGrGeeEbu9hd"
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
