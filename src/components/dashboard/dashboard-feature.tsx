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
    "4GF5MFs3ChQtuE38JUpgUNn5oQDwE36y8ZQ15RQcwmGNQizU5tSi39THZgX7VLuRZciznc7raPVvqDkktTKfL7D8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z12ZKYHQyri6N6CFU5jG2r9AG4CHYS9XGPUFyD2t8Wojxk1YWAQVEEnPUwETU4DHDVh8ABmJdY8yV3GV6eHnrEN",
  "key1": "5MF5yc9bwv1MnGDubNgkmyMGJVZV4R2LGQCzrEUGV98JCwnwBe6ykDNqXokBY5xNDZYMqQZjipHv78H4DkxUxj75",
  "key2": "nKLsDSn8shG798nDtRyEH2BWB7Ya5tjaVBA9EAqC37fUwPGs2EEaeMN9Ajyz135M6Tg4Rauj7XssoMu5AgqjZWS",
  "key3": "2iRTVDRuFhUzTHspmBjrzmHMzQDShz2jgb7s3WcznTjv9xNPurnmcFp8okehM6rhCn45wXrkGXG21uB8LuG5nw5L",
  "key4": "2BVkZyinkuMDvVy6iJoWvAzD9GSFsmyMc4JHeFX9NJX4MmtwRVeEAYE8nAqRuigPzvzPP34esRrsiJRARnnR6ZnJ",
  "key5": "2ji7nPeu6Xrg1TL2BRTcTVwNiaxQBb42xCqtH28hQvSsxsr9sqk1inNkzXcjZNHSoT7SY4ratrbpddQPDKhUpHMx",
  "key6": "sxRTqrQvJEQXyyx2QQkAvQcxPGqbxqpn8KCzPeB8JipUppC3J1FKXwRpzMmWKDooJnDjgc4t2x2PvKnAd7GASeS",
  "key7": "3fGgjHHfR5zK9JU33p7Uvq9qv9Dodp1WXCJNZrsF9jjNto1XstKgvSCtmD8QxKSLrJFURhQz9wM1zQjwvryJVBmu",
  "key8": "2jPrEcaWiPJYzTCuVczkDQUgUFoHWaUvcg5yBHVoMG6E1XdE3DFXvEdMtsNxbPvzsW7zMGFVDQvaduLqa5VbYXqB",
  "key9": "5DppdT1kH4qyLEbQERnGeyUTQj1mKCqySF7aupTq4ZCaj2eorrgZx7a2mHDjsWHXosWEecR5WfGpgiGXomnEJwJY",
  "key10": "3XsHGHVPUjmTXpdZNxinLcPkTrCfp3tp8EsLkq69AHXYGfeiqxUEhrrxTzg2vaZGCnKCKWcjvXFVkcZnngvrKbFA",
  "key11": "2JBQsd7fA34qe1E9ZpajbcCjFLF8ximXzVj1sPURj3QZpch4eYH2nP3GjBSCkiXEDQKrKnFnWEJvNUZmjXTL2Trd",
  "key12": "3BLzRW5bghuxterud8466y5QVHR9W9Nkzb36qGq6A4vsY4SCFqr4SckdLCdLt6rEoj9iHdwcx8NuaWwNhZnq3amR",
  "key13": "px5eDKXneofoQ2844MHmzBy6qgp35oZkKhy2mNUQp2D3W7WfcZHWGfwa4y3m5sXVsdmqUTM8a6VapJovNuZEKXK",
  "key14": "3uNPJaXEaDq1gDzwWNKsHKhxHfheStNXj24JXptpsQvo56xne9vxUWNN6Diz27bdnUZmrRyQcCmMg7YVs1dzQi2C",
  "key15": "565T3ZMypNrsWTghDgSX2c3nmMhiqhMsCnahR13etziDLAyaqk85ztUuAEi1rJy1jCoeaov8xdqT2spoE2yQUJKc",
  "key16": "39Jov1EvfXaN6ZMQ3rbj8wNszpxZKxEogAME7iCkn989wT1ApBwW8PiEuzHNG1Sjx9wDhdyVBAk8fSdi1g9AcUV8",
  "key17": "4Bt6ne5DtTsTNckQCSUdYt8nqaDxyA5gxUhUeJFNi82ZRm15tS2iHaKQ8jJjw9MqHxpHBE3fS9WxhXmXj3trdzt2",
  "key18": "FwomJkKJswbnui5aQ5CegvGrAKdJuorjccbSwTNJk7qjx73CQDr9E2RiCtSUnNKYAU8PJT5LBK73oArcKf5QaGT",
  "key19": "NoWDaGHobkCF9beMJbcrerVBSpjyKvuLFAwg53vUx2TJc9M9DBv7PVVJGjFPD11ccT2ftGxx8TekKf6NJohUM1M",
  "key20": "97wYR1EeHxMVnYUWpjodRAtDD6KiM7aSWL5c56ZrXZrB3fUWPe5DYrG1nox8rzLy3Wo2s4dH59SsNHPcxebJQyA",
  "key21": "3rBevaGPqaKDhtTrrhsi32PXPBAnDJVMnSA8URsXpRLKXGqQrewnHCYLeQLBgxj4T8LCra9tJBmQPVyMZXHHMsF4",
  "key22": "3Fiv3utjJCvhXDo1NCmYwYrL5kzGB69gTsvAnwn6TX4TREGAZSHjCrdaSLRdQHR342Kmuiqpwd3NU3iWHn8F7eaj",
  "key23": "2W6aKC6PRitwm4LYm7HmeKHsSxR7JyHYiDdXPkDA2XpFXGCATjvoX7LrWayTd8rzPv3imuB3DoLAqzfxsVZat4nH",
  "key24": "2UC4qVWiZ9UULM7Vt6YPxTXhEoNQccv2dEXdD7aAMced15e4SjRSkUwSVd2tFJBudEFScCzyHFeH4Du9SRj3RNC2",
  "key25": "4kZ97os6RCR1Q2CakmDjqWQ9dbWqqm7gSmT3fD4FtBvwhi9Q8jfuJZaVEyi8uqkbPJkHyp8Xuus7rwoufUoXwsc2",
  "key26": "4mDovjkaY83RA158vPjHUoLern1PYMxy569k5Cf2pqLJppL9PVvz8ro2JGWQnpcLXg52Wx6ttBDAsJ2wm86sX9FU",
  "key27": "3PxWvmiY7z1fHs7CpCNEW3skQzKsgebe5bCuubBPQEAwuzWhR3LRj8ynizgaQbiH1TosSATMXcZhz85ixTcG7PxY",
  "key28": "4j44B92rkFWZnQhsX1oepCDxeWiHh8Tjo6YhKdnB9ANKJ3mWmoVc1NGda5imPGdTMjbC9vXwVDeyAgnc42KJFFmK",
  "key29": "2xgyqCHm3t1p1gfBfxeBgdgAZLjvzCaocC83bwV2ymWvQg5ZkhFq9t3B2idSgCEDtmorb6dKc9MKprboxrUgoqGd",
  "key30": "2co6o8Ac6dwVmN5iMBCGWuLWfPUHBoxaFZnETBvgXWdbaEBc97JjDKYp9EVE1uByGUY3vkwZtMUQ3cL8mfoVbacQ",
  "key31": "33pBrC11fbd43jaQBfyZNkLdt53rzo9MwwzdJqWuTBJKDMqW8VDdnnCEYdr4AMr3QYZMfB4owKf6p3EkqLA7kz7m",
  "key32": "P7hCahoi44HsndyMuzqwGQb1dS697b6y3fisSfZx3k9b8GypdLrQZmw1E9tN6MZSd8DHDEv3WHmUwEMCuo1PNym",
  "key33": "5Vd8P2GsAXx1JRyxXV8ssYHZgSxLe6a4MQFQHYd9zDNJ98M16hTTULtUGKeTAJF94yvhigAd4A2NjLJ4xJwecVxc",
  "key34": "5SuKoMgTdWTvCWMjWM6pwjNr4Nyfe3L23fYNXKiyp1mi9Eq4pEMJjd4ByedHgNzV8evVmvN7RviAbMrjPgrJY2CU",
  "key35": "24r7VHQfz1KqV88a4fRd1wP7DVmCnKT8ATGSVXePQCxhM2ZUAg7iNQhJXmuuRNrvvNLR9pLqfCCEsfdDNZPPmtAK",
  "key36": "4NEn8whtgtzwr87Zg1CgzVAdpFbtWL7jzo9qExksKdJtfdNjKpYzfBcstXRNSdNR3xd8jwmvU7wnd2N4AUwy946v",
  "key37": "d3qx5GQPhtVibFXueFv7wy7Zdy4mMRHRBF7QkjAGpJcroSKJaZphjmWEFiqZxTVrn8zgE9JCDkGPF5eJ1KzTKUd",
  "key38": "3541JqhJw4bekvoWsnnoy1Jy7XFbNRjWLNsrNv3whgTJjAUZM1wpnDpM1aiSojJg4zdD9PsnbvfjfYDYz71SF7c7",
  "key39": "3T3cQsos7riXscB57Ffv6QXmCxi6nehYwQQbbDCxWdFujUfdzmASXQ18me9Ju2PuhWEP6ZAnhotrTcWrzFijPCjT"
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
