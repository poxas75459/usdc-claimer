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
    "27HwYcd4obM8v2QBvQ6V717E3Ao3VgmB222NnhZgAsSNhc8vgBQrWxfo5q63BQAk6aiJH3QBUZxDVBDbEMvd31fA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jMAxYfEvocKBrZL2uiKETYzjZZAVZFedk9ctUWYvugKSeKWWxX9RgLThPhVS3QGYx4Xc6z32y4dr9JtVmYmwL2B",
  "key1": "55dKupbiFa8MPZWXEayX6c1FpAiLNxXBdZfUNSnd6abPSDtPPJS9fjpCcNuq9XpAq54dM3vVX7kou9rN9yYrxr5e",
  "key2": "2Kti2j11ParBDLxWKF8qS3bWJC3cb7rRkurri2mvrp13QvUZdjJLrNmWNt7wAoGiLkaAX1tE1XH1Hx1tp53G2pZK",
  "key3": "bN5t18V5nVLPAQrGsPjh4jVw83u7F8gn7jmN2qeezTjsQjK74sKTnkCbN21iYtFhpWv2R651twoQW8mMKMifrhC",
  "key4": "2LDUoEDSR5ocQaJYNPDb7SGqgvNvqkCdN9ZHUAc4LjbShzsJ6dj1TsYZvm97XFJ15e1g2ChERHgdzkiHf2yLB4KS",
  "key5": "2nMg2fphEN2qEuQEE5jAhEF1x4nVQv3Bt8yycAGZ6koMe7TZr7uoVECtKzJFz5W5vUyP18gSBGjJfV1K9RisL6go",
  "key6": "2sGi8UwsowUehpzwhzxZzcB2bUYraYtpVXNLKVreUwgzRPt9AQjyWukPcgYGbwte2uAVdUfjfbftUmGtE5iRB5Mp",
  "key7": "5Skc3W71eDp8ByTCLBAiS27YHVG7U8QycZNytk41NcbhUJaheXzHMAYFoxgd2sCS2fB9SoZufohxov2XX2gy7w8D",
  "key8": "k4j7w9kjKEMcntCemNyXGSBjsiL1tayrgbiVvSwzT4VBSRnZuSjgdf4k6LFsnpQt1M2tNwP1iExRN5Fs8krLFWF",
  "key9": "29C391WoF76EvNQANMpPr2dj2ANCoCTWmMgGbn1ZNX9ZULjg2RpjyrjfRSMtWWs8PzjpM5Vmq5mJ9w46Jz2xV2Dg",
  "key10": "vD7MLcLXVneviRWYdCDfNbYiNcD8oNRRgW8Tu3UvWgeTCq3FHFrJrjmKRzCH7sSmCgcWtuiccSdbX3oUKRNXMih",
  "key11": "xoeThgpps57zK4fcdfZnK2GVJPhsYZvYsZmN4q4oJmSXCXz7PUffpcnqymqB5xi39nw6c3PTBL438KiPkYRu1Bb",
  "key12": "3kBcjfngso7k5B12cvPCgYAeWCqiT5AbFFtRm18Ni948AkW6uTX5AoktRC6eu91VJ1a9kreENh9KpUrrd2Ynkew3",
  "key13": "2tbmH9571jneiwkoRTZYyA2tVMoM2gQYshQu4hT7MoAfB7StHSxeTVnMkNSrTm2kUU8n8GZ6Duxppu37kRGhhHZw",
  "key14": "2zgAhbKLLtyC4XH7DdoqeMC8ShBv2ouc4Z89cfGygUHJodeYK9Q5r4fu1uMmWJNMCatn8psrxD2eJgMKJ3KrM9Yg",
  "key15": "3nGUCr9ZrphdFRs9hGTp6sxV45p4vccSt9f66Mna2jkA2G7tV4Qp3EahjFDp4txeC8qte4Ao8eNA1R2U77uEjoAr",
  "key16": "2BNbwZugnATREziWb6yFJ72ncFrUF6hpmTpS6nKpd2io7S5ZSWiWbQDRVcRyRGhptPRUHDAHBQRKsFvuJsohjyCY",
  "key17": "26nJTzYxk6Q2WQmNdDPPo8Lo3acVAGv2fKMuHQDzr9fjyRvNs4WDDaRZ5teEXxUw2GDCHRY2Z58AmKKAYaUPk2BE",
  "key18": "3GkKgE5ewn8xn1q7X5i325PtuxUBnXzii5cc5aDUamCZXgxmM9sbXNMPXo7PMKgbzoXZJFS9ZiSeWEu62Ln21Naf",
  "key19": "2XAJLK8ERE8gDB353zSKFmatoo92odLSqr8dnpiX5GeqNKn1F9pTc2ouckzr8DB379RQypwJSQx7c4WubMVVYA7D",
  "key20": "5oLFkYJbkfsQEYw7ZgLCxm1UtrNJVXzUaCEs4a8e8DocvSyFPZwZzTGvcbmXTjP921qGLAAE2Q42crayi2fpfmb4",
  "key21": "3GE9TK9q1osDcWZSb6XcJBD8RAzLJ32acTGE6EnoG3qU4XF1s84V8oEK6az93eKLNnLSVGvKCqmVwdUt8NdY4xzq",
  "key22": "67ePpBVe5Rfz727PcdN7j8E3YJidWYor26trLhVbi7pcRgC9Hkr9JzjjhyvveKmrYpBFDKRkRP84NkpzcYTe4r5",
  "key23": "3Tu337Ytvdqc1RRQWVsCZvHuX2bSB2p4LCkYm4J7XyEtaZdJjgZWhvuyo96DjKRY3wJhSA8axMuzJRRfeXbBrCB6",
  "key24": "3uWPYtVy4KLYzeDoFc7ad8a3izqCR6y7JRVRhfExS9Efgoxwg3z8S1TPGUS1J1LT6UveFfmhbFPJEc6cpRNYtQrJ",
  "key25": "2GVB6LcLBK6QuCPkVhJu4kmHKxAgK595r1GMxHqGFZQLXG44HZHxxDCK6EPxEuee4QQLP63cNiqZ3u6Aej3JjpCg",
  "key26": "2sKQRbGrY8sWrb1Gv73J8PDv1P3FsyHb2BEeRNJ2f4epRQcjeQ1iusVM2Z8U65UMMLTA9B9CPEjdoLeAcoFvPpsc",
  "key27": "2pSEzaqsLjdzLoreUhqHDYej87HqaqNmVEQE1Rx1YynRTEHLgcp2uvLmJUgX61LZsDD7NMkJiRnN9F4zMbFuqRMn"
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
