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
    "2mtNhfpXEGAFSdPmD2isRYh7JUMVBMp2zDzQUhCEDu2Fw87r1SMd1Dq2TkFakapqx4pyPhxcYC5LJnVH75e32pPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zgAZHenCXL3YPxvhPQtvxRuG3o9y3va98dQtrz2Wj22prYDndMn2CmF3SpfdhqHyAvEBKVRghHvKXiuheDVHso9",
  "key1": "2f7JjmWQ7Wb5yXYBYVYUFH6gizqxFPp3tdsPPMMBbRDFbq3smwgSockTFG5HkuyNAPdhKafp5Nv4dxDtKstrQFNF",
  "key2": "3GSrGjtJ6p16LmAwFwT5mD7EREqmX1UmBhMdbAXwLkZkgy5of8btKeg1D55jx7S5F3MPkwQK2hDcjDBSKwQfJTag",
  "key3": "oyyB9FreAHKWvRaeRMBw617fNkbisNLt1g6EQb7SFPHPJwkRJAAYXuJR8fDSP6AkYEfdc9cmtPQp25FbjcoNDBu",
  "key4": "T2Ba645xnjnqWGf3uSEs8FLaDm5uBvp4seSxMzWVkJnYJsFsXNUi8nRyH3R6MjnFxmchJywe7xSAspubbUeuQGK",
  "key5": "2RFfqi88vG95XM5AJLeSskHdXmKUjrAJXLyDzHYQeNEMNLKjzsM1DEV6bMdUrGd8aEAj4rEazGH5rf2yBGJFym2d",
  "key6": "56JXj555kLA6funXeuq1sQXmjjny4yutWNpWMrFDP4kPWqPWZkrDa6B3X3skzoTF5Pdg7Hy5VmQNnAhQbmVLA23P",
  "key7": "2YjAxfQd4nUbBmSP98H6D6DYAXC8eWB98RYuUXDcge7QjZJfRyJPmaNF9grH5hy4nGNu1mn6Jips85mcb2XL6XrL",
  "key8": "LYcH5UZCaGrK2y7GXzqTbz9SsyEqsLfjNSUQmx7RGmjhv88AEE6iDkoEJto6uK74fLvyaNzTbuFTjXPmimkFhp3",
  "key9": "47YHTonvN9ENsnaQZ7rG5JENmjbZGKmhAJR3MCgr2d9iWjGrjRqun1hbSg3Pw9F1nFRaNoYnaNnDKB56yxDYpA9W",
  "key10": "2KXSfQ35uFEEv481MHqSgjUjTVj3yjaR9xYxvWwnVkYgKMYLUdu5U2h1TSZETdzz9s7N4KwAYArMPUBR5n76cToE",
  "key11": "45acG8pAc8Db8Z3vALEVvbCFas9XCSii7W8PmZHu5DHxVQ32FWeAPjzBjWKAYeyAHGNX9uL3cZDRZ17EyjJDqx4J",
  "key12": "3cWTyQ2R22wQJLkEheKdFvdD8T2StG3mT7iCmxyD2vn3HbJ4RmboZ4QUp9P73ZurFmNx69BEKiRh5vC1hPX7ewSH",
  "key13": "L8eE5ScG4fsME4vcGSWPQto6gCv1vgRvHH7n6RysB82ovo2mqqUdwGrMpJp8SaPZXNPVmhAcBEkJVS9a4Ck6dRW",
  "key14": "5S8nUM1RCrWHGdECQEszDgfr6mfNYzo61kbv5Y1ZyDNhMLVRghwV1z5bwphbyQjGBBi4ojANKeBpbDe15qwjrhgo",
  "key15": "33dQxDXXNEBRW5zHJJpzVknkk2duUX1uS3SNDDastQAsbaDkq4zioZf3c6pFaFnTw1N9FaDf4HZjh7yWPGDMjrw8",
  "key16": "4VKQiuUFCWXS155v83k4KxegVT3YghyW61TNrXLdsYqrbgi46n7eWLSucP2TwLYb4NMVHaa69Ympf19eV7xvnTfF",
  "key17": "5z5rYKssuvj8vbFvibV4vkcyNMHD3MDzZCcB64934YAZ9Q6Yjk6CB3U1VB21ZHdcwRwUHTGVAus14xccHX8SkD9m",
  "key18": "Dxu6CiyMXLvEPVgppcoPgT4HUTDTHFVX7KJ2X37Xrqf4t4ZYNh6h9NVr98HswHL8JY2GCP5trhE3wBEHL9rkkJM",
  "key19": "zDzaqkQGUALopcPe7vw5gVMrpSEgyEYLnD9wi64tQLQ4G6D9HdubuLjgbzC9RFTDC8qdC3JGTnfScej8vrBqLRg",
  "key20": "2xcT1MYCwQRLnfVVTtE5ufN9XP4zC9cRsEgCxuCKyhNHzzxi8c5y2dHPhdLLEMwJRocyyYWLsU9s97s9UjjaDTtQ",
  "key21": "59tm1iF7MHTtAf9nD6eWHgg6x3goS9VJC4TcirJUMf5TqFouRYDnJAQ71FWYNdVJEcdAWZRuYZ7qpyy9gg9aufRL",
  "key22": "2YpT6EoYTiE3hCY3G7G6T6UnjXmHLbdru1VJkDJvW4dTL8odVYcwbQVetPoS4PumEysf61XUb9UUie5kfY9HRrXz",
  "key23": "2LmrZiKLnqeEkp4y4krHYj8M36nHLcJSheEhbDGetpryf1MG6DvYRuMo5xNqVyCwr7R9JyF2tmzQcGJvE1NVdzb3",
  "key24": "4LWjENtKB86mJ2vh3DmLehTUSPhghY2FW8WQut5tLetJHXF9or5wgRxgGvfMDoiQ9ZFVX5TSUUvrwxo9ibTx9TFZ",
  "key25": "5zxziAEY1KwZGQMLUYG9awiiQaTVmNUwNT4jZ4Afw9Gu6WB1eTbimuQ3WFGVz6QA7pckJSLrRoeJtTqrAcmi5oPX",
  "key26": "o2EfJVAmwDJGxRTCwMYiozo6NL62jujkvj6ZpJUUotKUyV5Wq9u3ENC78EKJcmNjNzPuEU3aUcHxVhJcpjkFpmV",
  "key27": "3SbwLcJyxrtVjuAb4CFVZy5X9rKtv32nTgpCF18g3cG7rB3vMQxP3gqeyLiPQBV5o1NeMGCdKT58F5Mq7GGvefx1",
  "key28": "66vEfRdJYjtvmeuEyvzgzizcDnPAMcSvq6z74nQCMuC3KQo6sG3ZPUKN2YYp9xCzAXg7HWMw4YssHT1vJgMMdtur",
  "key29": "7o4ugj2bW1LfWAcEzHCjiiKA216mK1kyCgU1vS6epwGGAz1EHMqH8wqBDVMmUogCsNddw2HyVPf4dQUTwreJyhf",
  "key30": "5URRgcoyY3mPNeTiaiXVsdeo8be3V7g9wVr8GMUV5Fxw8aspdJeoTnLpP5CfsHHAZKiSgzLJ3huava4TcYWHD9aD",
  "key31": "2oCv5Rw1g429cFiwzAmXDCnHaxG3HD2EcSUJVkfcWKgb99NNH7xJGtKYPVFrwZiddyGQuqrYMuZBu6Xbppk4GoqR",
  "key32": "U6WcEGbMK6f8ZvKkgJ8SbtCknrqHmhtCyCAympaw4BtxmEUCADV4E4b9maTgtXhfdho7nUxqFYt98a9ZqREJSuS",
  "key33": "28P2Jjv3odCSyra5YNAukqmhxmDxpMKXu7gbta9jZz5wg5RTWNrZtWuVz48qTL5ehGpttbhJcgEKpGG8yadcHXpe"
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
