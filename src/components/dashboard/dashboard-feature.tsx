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
    "4rCXT4couj6wofep5axwN6LxgEUDSVthDnwKGn8vQTDtE1Uok8vWWUbPL3BTcVeLkXDy92XMsYPWM4kaDjbb4pn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62t65eRAPin3Mu45tkRXNZaNc2B9jKbDLtLnc8Hbd6B9GtFztFLHmXpB4yQJec9wxT4M7qrDCMJS6Coqakh2eHpS",
  "key1": "JWBopF4pGeE83YyxqzqWhsvtd46HPt6KFSJqaAgX86tsvUnezmZjVhkiPp2ZgbwGqnexyq1ei3zMkXo5TDK531P",
  "key2": "cSwMML6yHB8zMawcgmTwnR4JSn6wki8zxYgxH9QpRotdstSdQWc9ZqMG9pk7CaXM2S7gJJ2du18czHuMPXKKLRi",
  "key3": "7UmN4Re1bmMMKdZUDk3ckrspAeLQHSjbwom85mXNxgNUTxLDPkMy5L5BLkXvXini7vs7sHPLpCvrAgpGMXUbPnp",
  "key4": "5ngDRbpfoWtYqS2d9CH43DVqD1uUCjPgXd5fC8M2bFcpM5NgHtPu9Ywp9MbNeknhRUAyooGXdyFsxe3n3rhDw6pf",
  "key5": "36j6umydDo7DuSTwmPbDbfoWDGcF6JFomv5pE8jrrnMHpjp7vrqZnysyLWx6uibM1DnHaB2kR7QHoetmdm2w1cS4",
  "key6": "3BCPM67JebqnMMCNbR75yhGUKLSB3wvgwmEcnDJTK8TXqRRZWedZ6dMsniVnSkwo3NVWhu4yJChcUu6hin8VP1ST",
  "key7": "4k7M8XjixHzmPuzBQUH2XLtrNPd67f3dkUWNXYBGjA87wSHnJMRMUjiP68iHnN8C8YTWmKWVn2tvqovPm7tzM2EW",
  "key8": "4KZJMwMRMwkLqA6JFXhBJBfvDXiAiDsZM5UsdJYM4KRNcs1KAVLe1TuJXPPikpsUZTRvdqMd7RyKHKEeEX1Zr9Gc",
  "key9": "3HGQPtjuAmbJ4WYTCr4jxUzRsWD8TLhghTQeRbo5nMwrHTm68Yn9L3jMN452K7utP5XbwprNTxXBLvndMHj3XxLE",
  "key10": "2ZTiapZk5P97jRCjdNqxSjv742BEEn2bHra4B3BNGaGRWE361DNFKcv8NBs31xggpuxWAgHWH1j3xbZNviEmRQ14",
  "key11": "5owTue43Hr9d6H3RsbLNG6xuzY9Jmn5BuZzEYXnCKCLdFqNfNyJr2qRat51E51SkdzR9v6HAUZ6RP9tq5KMfqZc",
  "key12": "c5hwePXWeDh9yDhY9NLaAubs4xwMeYn4pmT1JReZfejkoE7mXgxJdhR9vGj7LARfETu4eBod4wenhdNiJRNe4x3",
  "key13": "T23t512UYqJKBksSzuoCfT8NeDhKRTDJk5wgHNMmBMG1pHkRis7tuUMrbvMTtqrNCdHPKBkUq2171jntUZpi9y1",
  "key14": "EH41iBFo9VKvGGwmkUAbUB82VYJHiAR965zma8JjxNYrhwc56XnyNFp815Xov3eDPUq3c1EccTYtzRFqZxHAMiJ",
  "key15": "3PNTe3T4mBfrYk4srngJbCpKKnqkvF5dKprHHhoKkNZemGYxZR8kAjC7vX1yHMLrcL666wGUP5RToRi6bMW35zZi",
  "key16": "uqc3rTgUyACKCzLAB5ygSdNfE9BjW6ebNLuTtron6myZV7VaPfv8drVAiQ5RG6ZUAZBJiMjkEupaZK33tLPVJcE",
  "key17": "2pA3k6oosgoRsvxJSXGjivFeMwjSBDp5jXdn38pDENj2XdjobEhvjsneZ4LrjKApPbjpbwGfsq9dq2Lct7dLVK8M",
  "key18": "3PstRMdkmGeCmTnGr14NL4QGgEWrPC5rGvCMSJVisP7BYGmg2wVctWWtbQZUaViR2BJxJ4vYwFXsQxC4MRDvjYHe",
  "key19": "2wji7WAXpNPSv2j5sunAdQMHefXZJuErj1GkKYPjv28EZK4zWaLS8RMeUbtci4H8xz4ruhhczGs6CYFjBADyzETY",
  "key20": "4NVyWWP6aTKGyv6xJV5yBuvCxppnGPvN2V3Notwup92uqh1wkbTXqejodqqxdinga6DpN96BvjHxMkWU8ueSAUSQ",
  "key21": "3DsT6dUrqhZNd8TgwGvBrLkan3ADU7K76eyZaZqc4kgggZr4YHeiAbpviZHatfN8tTQ6pTCQQeS6w5gRJaauouFs",
  "key22": "3ncXB9NL7WGdQznQtbcPc23CYTEy1VHKU4ak1mwX948hn4THPHLCUpfGHqMKwmKwdbXGqYeHjDNWvB9ZUJbmRLji",
  "key23": "4YY4ngiaVKPsWRoSsztFynQJV7tBwjFzUqsqxsEqoc2Hpfd7R649i7XfQcUGhjUSj8etVaQfWmW8y6EZeSpLYA1B",
  "key24": "4qGVABdCpgyE6KjyoNbwYn5hjDmMqqchT1cw6j9ugm7MotUj7ojYBGK5nmM8oPgdD1u4vj4Co6YtDtAAqA9s5Fgv",
  "key25": "5i5paducAB6BadXHnpnVZGERKSpANcqQKRGeKX7do3Q3XSefQES1nkeM2w9KtbjXCdoKdfiZPWbYfoPdmUFaYLda",
  "key26": "B2Gc3hvvi7spv6gd3f9Hwpm4xYYVhKArZ6LjHC7Jf4fEvtrQsEuRzikKFHnbMYDNQZq6mgee6uoz2Yogt25ZxMV",
  "key27": "4bBU3mEgk5ncr9cLp6wKcvBGRpHYuoC5rmQeshbrq7WmZcraWfFQHTi7RtVGnxJVh1nQuhs1WxNJ2HVvQowHwTBH",
  "key28": "33uZ7b4HjZHHCBZLtRgieTmu5HT8n3SaM7mAmhDp9JQGgXJTKMieQ7CBUHuoCFEVU6XZiQbTQ1pF9NY1h7qQkHeL",
  "key29": "dYY3dFW8D9sqoghDgee8Stfu9va5cMmzVk41zdFGUZzt9Fwav1BF1rBnLpkJScefQb2GyqaUjukhrf619ssC2pJ",
  "key30": "5ssS4LkVvGp7Hw82R26x7XRcnyPP9uiKMsEx4SPaF22cG2q1tvpDYrfkkmzsHiawUyRRx46KqM5EQHWxoErnVwGR",
  "key31": "3DBocHYRJCWxMk52hixfCBxcKX6rdRenXU5LFww58CModLJ163MgQxxtqAhnhiuDVNPhtPCNseHRhWr4mzxMA8Jt"
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
