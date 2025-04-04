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
    "25tYfUakKNA4KTzDzxDAZyYXWHhVyG9mSaPVDskYGqdiC8UZXe8TdLmS9Y7USeNsQd1AQoPbYgUbyf7sd8Xmxx2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dAbCv8yP7Pzq2GAso11B6dG9eohfwY3UzvmWNcrdu75gTVzJMCFExjhKoxsuN5umDFomvdrNKnnRmttzrLTJrHq",
  "key1": "3D5fbLrB8FDzVrmH8abxTvSzeFvXTi6NvRDArenCKX75Cz9aikqqN2N9ePLCknvchGo4vNw6eTYcxGSZ7MhZo6PV",
  "key2": "5PLkh3hjcAsfHfM57Fm6NfVkgua4NmCkPAyP7qVagPGqx5zBgvxrhb97Y64SFAGDhvRYBRPcLREtdNJCLUdT3EKG",
  "key3": "3murj7jrwnjoj98XBpoMQdx1h7JNSQyN24xSY23Aby936juHHw2TJXBjfWcHEXsmXsAZh4H4cpTEFLbS5GabKKP8",
  "key4": "2mRPf2kJqdoHFdvPxhxXp4DbjBTfx6DbE2Aq4ncyJoqFwHDa5STR7QMpDUt9jBN8pzRzAhmPGtFofvK7VEvrEp3f",
  "key5": "3u5eswk9J9EifhCLBE3CHbNb6NDdHWq2dmoADhQf2daXxHDw483eMrJkumXNzhw9J22vNJ7wuhBwxGk9ppvy6zL2",
  "key6": "2jU68NDKUBCnWN3RdoNmHNTDbxiLn4UUVAwsJTioAT1eB2zdQw2necbGmbS7JPogrExcf9XtzMqWkSSLpq64YmV6",
  "key7": "3Y4KXBKx4eCtsEnTpjUfpRmRdVH3Q1ATKgijKMvfSXRpsgNQWAwjCWeR7GTzfY84JgnSJ4cbMUzrqVNcHCLkXEVR",
  "key8": "2WkEus65yWhvstCce2WxYyaDuvL8wTFidzMg3SduEkfwhc8AHBLvFc39RMiPcGaKJC1ntDCP5mNCRnsfi36ZnBCH",
  "key9": "3exsomoHfQFkH1idmuMnN6uc7NzMkAJ9S3fc5EXBjm6FPp3T5S6xzCgKtDyBx3ngBSPDWsAEKRuACKpNqqSfMSKG",
  "key10": "5gs5J7EcAEeyXxJRN1eHiTqpJn7V2EQiyaLoRtYRtMSGLVTAcd9kFMgFRYXsv2V3tzj99by6advtmuMVsinzrsYY",
  "key11": "vuFNcE4yoaKGjCYUyvMgXG6oXfEsXJzAnrmEiuGpy9crVWYga6Y3YZgTsj5Vod7CQCDdH6pxrMvvMsw8ZziK3Ve",
  "key12": "5RewBKRq2USmBf9D2TcUbxRiKjF32AqJLvL4DkVCfoEMdyimLV63RPsr4HikY8ocbjU8j2BX9nULH86ERYfK11Zn",
  "key13": "4x6FoM5tKywuiW9NiXRLsJf6HExm9KS1uMvDqcscGQvuM9ZQ66Yi85W6sSGYLLf3XeEfcFQCqB3HKPT3jQ8NbCn4",
  "key14": "LdtHEzxx1mPqhnwQmRquS9UipYHD1RcooqJPLrburcDUKHvUi8oqS6Yppb1oUhFUbeMpyrir2YeXBY57jgy9PeZ",
  "key15": "5feFr1jsrPjXNDPrLhgw153a1qDqvhP9uhFW4uxebQ8hPQ7nSuuMnrVFiJpNmo3g3tSZBuJQdU94MyX1xzwUm539",
  "key16": "42YGZ4AxSCkZMFLePj1AF6kgxKBn7m33yvnHCpR7ExfaWWcqYAe8X2iiG2xDkUrUhNcP9husCYNg6qqPnubP4w4y",
  "key17": "67nJZnMjxnVgeNCExLBYffK79epwkwG9PkhnHLe58V5KotE2uke3K4dd9qkUrLuBE8puTXTegDPBsZp6bMFohrJX",
  "key18": "4DFBkqhStj7bFRchWp1F41hJz5c1c6JbbFS7UnVt9C8NPSvPhJvTREBy2D6UaykJEiZ6Kvwr23oT1HWLEh75fvhz",
  "key19": "c3rHns4mHZoGQHyL4TGKQjwKcvsTptadFEc8NkbJhWdArfKJiuqwTQtRvoQf4FxcNryRSjqqJD1v7ojApDjy3d6",
  "key20": "5DN67UKEJbkd5xGxPQnzevnLYjxZfMQNoXir9KNxgfBJdH7QYcJepGXRB7YvSQs53NGFy2Rvhc7YNDrYAmJFWo1h",
  "key21": "3ZSDzGiFJtttBwx9YRG673rBNjbA7Shx9mpG9i1BiXQju5b3VZT7QcusynqPdy19oQLjGzd6WrnewHyiXouSK3FJ",
  "key22": "JwhD2cgn1u32S3cXo2zL1zxbP1mUsegj1f6tLjKwSVnuX6eTwA1nwGnwKMX6gSsDPHHsCMgni9Kyj6R9Aucavyu",
  "key23": "2yV1TpNZWqKCWhko9VGvEW8og7ShEF2DNyUPZ8iFj2NPJZt4XEdAK67i2QUAJQeZTG7P4yTWFnxaZKcpdEXTx43s",
  "key24": "4cFeZXgYAYnSQ1DQpLxkYParF6YSaNQe8EFiVw5dq8GTDjykUM7rLiapx5o2GozuZnbANrap2Ee9RosVFVGXwp9m",
  "key25": "fPpdRtmthr3v5enbakjAuLi8Ma1e5V7NshfpLthemcGRbs3CqYKj3M1q4jzNQXyzmybYDsUfWFwRmyrQPjYKaA5",
  "key26": "5DgT6m6jPunwY9w2QpAkRHrWBnZDWhPF2WuoW7adpEX4f4F8kU2cszBdK897Pu5zRFQQDetXZEVdh2hnym5tWGvi",
  "key27": "3UYdTkCeWv5YD5YpjYBEauggjM1qPNzxP7e2bUAdDuyWxSFNAFReaSkDzj7mcmgk8GipAGw9CzP7hBiqHHXropj1",
  "key28": "2bMAroYB4BN9Uh4wam3qkL1PxYW8XMUyWLzQFt2dt8sGGe25sUU4wcPdhiSC2uBJPdGZY4iP3Bto8wfQqSjvRuJo",
  "key29": "2yU1Ks67VhUsRX2rr2nwuMJxSQbdrVhv2wCyYSBVCBMhdJuErAEw4o7pUDLkUadKDazSMjf6YgAoLFZ3EiX3c4xc",
  "key30": "3ZgPMSatZdUFfkGZkwaE9juNZczVmD7nt3u4rU3kT4RLMt8r3MWPvsLhCHX11nsYnaufkyWcMjwwZnCAKJMBn9hh",
  "key31": "22QtPby69nNN8XF89WxpN9PmGPRXYLD9iF375ibwY9Y2KhdjRuRpUtydVx9rHDrX5rzKZYsNE3LiAaEifNerV3M9",
  "key32": "5BhW6RpKowjX2oSC8pkSZpnpDZv75bzPb8x5eQcDFBsnku1NYYKQ43ZmFjqNwQ2TLAp9uJKN7XEMMGoCLqMFVrsn",
  "key33": "3rQWNZPY4JsZDoeQUreUXumWpxaQ6srtwxQuiUtHvEZZby8b6gv2mUKL94va5WS9rXLjDmV4cB3qyXRY93QozPz9",
  "key34": "3BrDFFjGFUD8rKstejWEKKgUjsrq1XYDUP3yrUL6TpiiCyiv3yfQ8Q2ph6jaTAYbLmw87UwJtQGouX2WLeSDhmwD",
  "key35": "4E2mrNhfDFciVVbFH4hvCvtfKK6WM23o461pPGUDZ96B9KwLT7yv82HPAhDqdhL2XCSDSvMKwu42kw5t8pCpeXer",
  "key36": "4JeH9LGqZjYnVKWcwZvS6rFUJYkrUHFwkP3n2BWPqpwM3k5e7Dw2nNZpMWMw1h872CmZ9KkTrAKQyyGz8J3mnUVz",
  "key37": "3pMqmXsimVwMAH912PSC5z9R65sdfwQ8HdhXjSjxFkzySy8a12hX8g6vFp4pnarCTGMzR8CsgM5Uv8SLZG3a6usZ",
  "key38": "5pphruDh4XLLfXfgH1UyLwrqRQyhxp4F6Qjawzrd4JwVnGSiWFFQPhpzntfu5AsrBLBhuhw5Q8u2TqbH7RPQUVB9",
  "key39": "335eSA7ssuZfcdKbTxUc1dD1bHsqDQ2hkUeZ5LFhChaGirE5PrkZSBEM6o9vN8z8td2XCzcvsTom23iT1GPrshGB"
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
