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
    "2hiP5eHGiYreCH26ujcfoqwDNERcY8kPz15Zri1onYYS5jJWvavVXtYGwLsbaYSFg4ZsMVpfGBmkAJY7PaywQzq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VZzJkobft5SDneW7C4DoBNuZtvQi2NL2nuiHHNLXq9RD3eSDFuSsFxDiGLXYJhpPHFEHPYSR9eiZihoLhqSQCKn",
  "key1": "4NxzcB7qDK8bkNfu5FMyvNtrhbfxsU8rqnQ1P2HgHRgjfRpnwWNokKejT1aZQYxBxPzuhMHbYxH9mHsAPdGL417q",
  "key2": "4iBtMfMb9vHFeTmw1gLZYptPFjx1L4LWuFiLcfKMCzJycGSn9bjGC8Tt61UmVnyrBHZdHFjUNtzadNK2UCUYkDTn",
  "key3": "3RTJ1aFjSMqQ6n9Uz3ek8UtRy4gqkUtttuz6DThfzxP9kBotML9iYwUQ8ncTgFPiQ6v7Rk1HxAKNTYV9rNvdMLRp",
  "key4": "46LNqrrRDF6HP6FBKGoi3bqtgePomTe8Nj7CgnmX46hgQEddZyW1kxNtZ8657qdQvkVcDiMk82Qn9rbc1GxKeHGy",
  "key5": "4XkBhRbqYDthsLjVkbitkjknyf45uB55fcbLkGTyJjRWqwmUrVG1hsczZacBhz78A3KtVpW1iugC3m6BqSdJAkTt",
  "key6": "BzSdE5HiNB7gjKuXTqszQ2nQgGHZZ5PGAM2V2wj3zD1t926mX3Vs7EQ3j3TdmKFaeyVbV2M2566DSUQ3Nz2o6F3",
  "key7": "34RT3yTyJti2cvhrxovnpiP9Te2EZUgCZ2ysY7EEuNztHm1Mn8ET7XM47QzZ9C4TedvSnEi8f5xScbp6C6RBUmeT",
  "key8": "3u94zYEifk2kHXQKiDndv5Y9C782HSYnszr7SLi9gzVPUUX8YcMXSYG74febUcoKpLWDkw8iJ6T9goxWhpLRRsTp",
  "key9": "346BRn7mRyBWssT4nZZMpwbnhHZwShgWGBxxF5CaaneCHA83eh5YqVQEZGjbhpoGXajTFCkTDi3RSun7Giwp1XiC",
  "key10": "zpMkcRoeDRp5YHEaebgYFBHiNCUdSP9JB26kxqQeiRaUeMdjC2NXondTLkBxsfpNuKPS9NGaWpTtabMjFLEdJd8",
  "key11": "2ZjnAaeMBTWVBzY6Xiin4HovP3EeBcGtxtH7JFbqL5XjBFcgc32zE6wYCs3Zy9urQe4FPCBFRAkzKkPErmhUjx6x",
  "key12": "RDGLxUuRn2VsHptvVdrQRH1Wy8kD6apfA5Un75n4kweURRcUiMqo2P9yZqcGSyUAEYnv9DnTV4TQhcUK1MBT6kk",
  "key13": "4VMxw8WgfXzdgXoHLLM1wrdpPjUDx6mnQ519GCZ4KCRgPgmfUQ6iHiMpH5V2GD3XqTwCGPE6NoGJ2nR5wa6KHVt9",
  "key14": "AkZuDW4BJv7emQi5D4KbwhVxyexMJPcNBN9yEFEfiDVaF6hdV69QkWptFbvq4YA7jYXZfTMbBs3BzLMvLyVPdYh",
  "key15": "3EqKF3rsPhjqGQwF8pqNexfucWNK469Qevwa6bWwEz83v7LKhrjAotu82FeWi2JVHNfA1jNMLJY4h1Gdsyj8kecu",
  "key16": "2JoQYFuAjdKVYBga4QVJxwqYWbJExwVuZpYLYMerkqZDZoZUbnjxEe8iwK8tBhPpyqw1KrCp2z4Rwt9Y6YcgtKQQ",
  "key17": "4s7kpT7WPDWC4HP7Hp8m5wnWjeuvkoYoA85rquhex2TvdXid1nusYWn7UZsocLnqC3AyChPzimjDuxXZjuC8aRNo",
  "key18": "4kivanjHtVP7fdy7jxLxjdiACQPoAvorRLtHb1Re65XtSXkbYxQswppXc1qjwM3zme7CERQAgPgonh4TufktC9Fx",
  "key19": "3ExaveS5keHNjfmZ8G4t9Y67nn4NUkLDtY7TYvYshMocGHtphVXQ5ESBMdnUG1fYnU4a5AFRVMyo42RR5jfb5LiZ",
  "key20": "bN5dZU8ZDEFTqJ8hWVJc9NAy8MExDG1qnw85SeUWs3ymcXXw5pYzmZQsqBbURoMXTV2kfypnq3umG2xtnKRLpPr",
  "key21": "2oMy18vEZG8hRY7sk2Pbyit21b8RrY3PberSGMEULJ3zy7sVr7rnT5H9LBN62QW2xjR4NpdsnY1t8jUQroCavzUJ",
  "key22": "5mCDKGinfFsmNuDbLzNxMWZBUu5k4pxSMpquAk4izwFLsGrUFvrmgPPfwzK6R3DpC9L28u2dfyAaac7RLZwTd6mE",
  "key23": "67Mci2oZ93dYzxaWV2t2irF3GUEsuZ2G6J3w3h2HV7otYexsY1nHLHfsBJQjB36X7tXFAKLmfFdrdMkxwKpCLRtM",
  "key24": "2z6e5eq4BCofAwHRqN93g2yEMPigctuWWLPZMA1GgS8VJ7SgrEKnkKpNJ1u8SLn8UKufEfcfKa8fWWbGya6BS5tr",
  "key25": "NqQU5Yffk8UrPTAGSz6Nj1qpAQyrzhVYzU2mGX4zSUGW9kLCVar8W5GdQLjzmoCnXtmzz1T5HanqjxCQojBjLrU",
  "key26": "4JTA6JmE9S45GJGvAuSjjMSbnWPrWWHx3AGEkU5h2nVQadJ3NNcsJkC54NrwoRQ8zkVbhtgJA3m1ZNrhYyJa7iKS",
  "key27": "3QkqbKnAN417xo2bFLRmwrSn9XqoHAeZVHTtnzBvRHGExKBJyKDPrwongXgmQ69HWdXGhc8xaoppERfqyxxgSjPw",
  "key28": "2YtDAWVqHfnTrptThEvXH6wYHzL6Lt47NXuPuSNyF946wLTLNkJAyTq7TESGw4Wkr3GjooLqhWXJD2nzezbDnHwQ",
  "key29": "48wxXhDUZsVaQnt9f1bi5nJzp2TCgbFqQhgZKxfK6uKqG1LECVKNghdfdm1keFwksFNxiRHrKcaVV2Mbq64XZva3",
  "key30": "2gxHKTwjUTcM2kuADohTqTA49F6yXBMUJWV4RyU27DLobo9QmJWj67XkFhpFtCgPhutXmPGuDHcUyTy9tGPTLAMB",
  "key31": "1rQMUeeF1JqopCqi211X6XYHiceeWQdBnpSSCq38wNYek2wb7nfhspAJmBzChC9bHbGcSEDARawux1TVG824gEP",
  "key32": "3DjKCYk6MLCJmReKeNZbzaQNpJDj8zPddpRXqEvXb2cF2brQ8jXn5iADqQSiUxuxFWG7FXXswEqUdjEmnCVj6DTS",
  "key33": "4zryLY6PXtfExTc9eZ1Ytbg9HDmzKP4DRp8a2VDyHqBwDYZykmxzLrSJCorrs4iLgxuPQGGr18x8PoqJq1VKX2pu",
  "key34": "27akHWT1QuRNL8ttdHHwBKvs2QWBimucgzxiDfuk2moNmHoChEz6zzZc8h3WB8wZqL3qErCY4M8cJ6tRuG5Q8CbL"
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
