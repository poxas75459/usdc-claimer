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
    "2XgxZUxnG5kc3XESyZ3X5F2YatZsbAqW8TEphHRzj4wyEBhnHqbHNzspa4hEec85FMUSFo8WmNuU1i2R1dNmDoaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nrGU9bP6xz8iqTXvohj15tmnWLq6GxMt35KdN2BPhMyCuMhaHCvF8bq8SaijhXFHYb6FB3XUMBkJnHZBgknzkXm",
  "key1": "55YgxMXQiKpoFguU5MooNsTxXBFF1EH6RgmrV83HaVvWKEQuNtjANRfRa6vyWd89N8coGzEFg4sZ76LdqJc9sMBJ",
  "key2": "3psP4j9MLnPStFh4N14WncYw8qsXYVHu8B9Po1hfj25F3LmBLPhQamjQRX9R1aieRmPKj2jwRndEnKaD644e4XHJ",
  "key3": "33YgfisfEMvJaH4mreXxN27bRHL6qvsWpXYK9ad9cTkDWGz9Vd1THzrexmH5kAdQMzgbq1WCv8jLZg2SNxeGfH6x",
  "key4": "2ESgao7Y51dwqpmvW3aJo5Jq6wAm7ReduXKDQo6v7MhGHsaYds61dNEKFEpq6XU6EM3wazdh22M5d5hZrmJwHhLL",
  "key5": "3MwJ6ioaF3ohTAsw9bhDWgXpbqBXHqdRgik7KHCn9AwEWe7exdoCKKRfMcX6vFuzGpMX4b5FsDkndgWNbNNHpA7g",
  "key6": "5DA6kWKDnmBBKigbRKqD8GobED5WW9sovSjnxkj1vCtWoTKRvgXiHfQTpPMShTb175RZLy6njRESJoq3tcEbtL2u",
  "key7": "5dNu12naNqZKGUyphA44bvqDAp8xPTY3W4P1rfoyV2w2h4ZAjzSthNrQE8Tz6Asdh12FCyMbCZr9sD8dWDEoZeBu",
  "key8": "3hsDwrvVUcjTDB3Btz1jdFwVtqHUgR3EcSxSSC792cmxCNkoM6Sxbq8qJg1xJ16pLvQuuVE59wutjR8HBRtaErYw",
  "key9": "4jctMVbwyzahi4v5yUHwEPmFEcVgBG1T6CvkW7pgVdxESq1527vnyC8t8LyT9nsneSix7Z6mNb2QtiGUYRXmZSrf",
  "key10": "RP5zywJxb6yA3Nk2n2kTPx7vqG3tGMMEnHhDfcLGkXpHWK7FgcyMuztgyzLELvxmhgJ2hEEZDdiYao1CaCKL5oA",
  "key11": "2FyqFYgQDspGzD4Gm37abeXo8zajzGLq7BJez2Z1T73BAvgPCcronMhFiJmrACrByT9zEPjxnPrfZhTZFLiW5KLh",
  "key12": "22JVWFvoFQAYwSu5yELJSKqHABvkPembyehGqNZGfgCJtxGAWh3gngdvhyzQMzxTnHWTVnPRS8kjER5mKK11Fr3N",
  "key13": "5pYmM8icvrU8Nm95gwFTRq1h2kzuejXmWXbGSHu52tQwYguojrc5bNMFgF5PbdQwoUUqjogrp1CLjmNfmn3GtKRu",
  "key14": "4yTXAXvd4omim5eAfBpmZkn6QQm5mHnH4LLo1bjj4KDrcnitrHoeEorXaLAGNnLrKXsPnyrQPgp19h7Gf6D6r8iY",
  "key15": "3rA8szTBJMRyXYUv7N8JZBhbefNVArvmRi1HRVaZ3Te1m2eJzYsMijtnSe4PprZg9nqr5dugWNgxuwa46ub67Ndc",
  "key16": "3P5NQ7zUyUGGHno4m2hXkd9CbbavM6yXyHfdyU9gRVHS41v1pYGKq2qNV7jb95o6FMdw5H3ctzNf8m7wKCUxGUVF",
  "key17": "35h7kGxzPZKAyVhD66KJFdkfsVU5zbwMVT752bL4KnRQw8LCGtrG2EzrLCxLWbiHDQMwDsH6uMMzvyv5CbFPGvWg",
  "key18": "VB8C3DUPmx7hjo7ZCd4ZpHDZUCjxESdKzBm2mFwvYo2Ae3pcMoemLWdXyEyZqB8UC6131TnnsJAQY8axf4XGGsM",
  "key19": "52sdAyqCJm56GMP1iL5Xz9SPJBed9P3AZaE2ZC4KM2YTuhSonYRqp6wGGJDEeyFc3HJRccvTS8Lb9gDM9ot29nqN",
  "key20": "57hqB6RJuBMLNiFMxqBZoEVnZQUbm2NeE5ooUN2w5cc2Fx81oEp3iY8rYdcFNjPcVtUWDFJgETXSFFg2eKW6CS9t",
  "key21": "2ZYDGprr1wuyxMtB5QbQ6fewvCZHdL4vdxSv1YFf9fxTmH7ocnqFKvyhSeaNf6q56kyt2TQsenEA7wzUNTjgP4MF",
  "key22": "4WDfp674rzccanRVgcdwcnVhVPqznmKUBANHwt1nD1Rc6RoSpH5Q1cAryk7M6rHrKBbzg2qMBvCpqAyaQbD8xhvt",
  "key23": "3AX4KFEEyDUPjHfBuqg5FrA3WquUFMwEESVKuGTc7ELD7ns3TEcth6BnedGKQtG7j1ZkkcMoWA2dG1ga8oueaRzw",
  "key24": "5KPJdKCeU9ASM1qJ3jU9JPQ1awV3yA7BXmZbD95wmfQbbnmfFCJocR2azho7kpZux3PuYUESB3hG1Xreywur2i8c",
  "key25": "4HWtSGBQovmfa94UW4SWhqb1WEXGhvD6wpYEPR3Z21nvFDzHquUfjZLywAN8QTAdGi88frqxHGbGfW9X1PGgUdLy",
  "key26": "678xXYVhXdAqeskwEoPkEbyyK3tfoiYtkVWw4TQJa5qmJ71gPA7qK3MSegKXTnj2FvsgssuUC7qBATzfEVe9NmqF",
  "key27": "5Vkevg46pqegmDQKKWT3Szankxjt2HNEkxB4nB6GbmEsrTzpHasqxYRRiDcBvkukAYUyydqpcEc32NnqhJeUEkxh",
  "key28": "4i6nJyjntkwN4TGhBWfCgsBhvhWAYmFLYKpvbzLaMKqhrYnMUAAq6xqxSEeZdnTxc9y4QMAysf4xsGZcU7aiAXHL",
  "key29": "5jAFKAm2zvvEiaiar4KR3ygK5G2mxxB3WxSX4HWrBVwEdHJKRdiHGidrGoZzCsoAGEz2TAECA9F6dTjXv8rjGmwe",
  "key30": "yNhAdqD2RSzdK9zUpvbhew95PDKGEUW6x3ELaJy13xoKVWLciGxSKzGFqSpsHinYZy2nAV5bzSZNJxmBsC2z3eT",
  "key31": "37SamC5EMBqoePTbSLJXNuC6dsKQToZtKp16C6s54Ug7REAYuLTXo6rHeQTdBEQrQY9akepMj4NnKjG5o2K8BZWZ",
  "key32": "2Q5WDicZuzw6dYDiZWeEoVEY9TneBArreVSu248YdzMTWXQKjTzorxBjKGvAU26hGDH5jvbvk7VsnngkiQ1er134",
  "key33": "d9oT6w9snTzAP6UXpN35QtJJT1dcZ2LRoojMuDX56DYXGBEyYVCmw8Qdp1PFGYnzsg2MZv8KtNyDcgr4mmPzjjJ",
  "key34": "5nrTosfeBjM9euMDHCQqJYxUFUBUKbBweBJcoYcvo6z6znA5wyXHMBsz8BgKUC1BZbCmBo8AhyiVMY3tDHhpsvLR",
  "key35": "2snBm224LTZvmLkK2RtHW32FhSYq81RNoowZgx7AYHudN1qoyWN6HqDVaRU6cBDebBaFWDBWcJwpY53xDbQyDzdz",
  "key36": "2bYGzReAXvWDsc4C7yV1WKYGhYTQimY5HpRaQ3uGhgTWNo7oVued7YXxi5v7o37B5AXpwJDUS6qXce98so6EYX63",
  "key37": "3ADmtG41Qwfh4zNUKCPeQ1q9X6aXKBbUQSfe8U9UyWDhovJ2Qq3xdrzLTuf6CNqWhXGm6mdPobs9VDH2v7LmCC1r",
  "key38": "FYYgmxCTXNmh2Jr7yHWUT561PWwD5JicykjmAj61xNNyDRknK4bYbgS9UWgQySZPKYiynZm2sXS8NxqtnbVpWmV"
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
