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
    "nDmoZcNi9AGPoYmdwPvJ51zYm43R525AHwYnwWkP2af2mtLVkHZyKkkneeqxy84PMayHEh1DPiFVMYAvw9wEVdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o1hG6VFaQ4MHNz5za6mBtcN29yjxrSg9S5R59WY58Eo5ThPbpSUgvEvJXSkuKg4BLamMQkhUFzY4Kksfrhkf6UX",
  "key1": "5iZGhtCzytRycrLgnuqvZJD92yMhiejYYdepqbPKwRniuNV8TZf7v1zUxHkJZA3qymohy8WxRPCndqKqqq8TfRkW",
  "key2": "1TvpEmBL4NLK173VayueaDcG1MTvR41zkjXjeTifzVR2zrod3EC7mXVDpNhdLr5WRJHza6ipxNCopQvBjJe5EdB",
  "key3": "4y9gwGjxiicKsvxMZbDh4pRn1SDmEfnvGfgiAcTdfqF2BDeTSV2iRLdEXBpCABizhq14DJvQzcJME7HoSrTC4Crc",
  "key4": "5yU5QhSy16Jr5B7qe1EYLizYf3W24pjuzuThxGZgNsb6Dv93DL19en48d2rFPn3PGcnzERknJDPcZXuC3Bzu4oeG",
  "key5": "4FsSmi4C6tgNGb98ysJknkfpZNZU7f22Xu7Mzsrm5MNo1nYmdby3A3sorgvZM3q2d4xw7Zx28mr6pxUYgSMWSLZv",
  "key6": "5bJaA7CQ2eAQ2gSJL6spC74fspeJtqrH7kLZqP2hHLfWkNQAdyxj4okjuZcsh6WxAwaeGYznuaABnR6HBFzw2PGr",
  "key7": "4WMnjpguWCkKgpjktRM6WvVWA45iMGnoQMUbNcTb47pLzeTeEhLpFg1dBw5cD7WbTHeRuG4QxcXvSU6fvv9DFu8K",
  "key8": "2jgGzK8YbqZCdU3iQpfqYxP33nwY7bDN4oXjhy4ZYwFktC43zAP2oU2Ub5We4bybyLerfBtqV24CNRHPjm3Jc1jH",
  "key9": "3v4vVzT6655hLtBxYha4ivaThg7TirPdssGK3bp5q9wRhWwBCuc9i6nLTvAVq1aLnocovvv9VSV8EU21yh1Z1UPz",
  "key10": "5xe4hX7rqkii2GACUdctYa5qd1HtZdiyL2NxaVT9ybe2pqgaQJW7Pk3qdEf4rgeHdRPPbk6JuBug5BKBGdw1odkJ",
  "key11": "5eRLruFXQinmq8UR52rumV3Q7H6DHCgZbCCPpVcs8HNtc1cNhGVgoKvA91nZa119WPnv7w1soxiCT49pmiAnhzRt",
  "key12": "4ynhhX8bA9Dxqy4Zpwinx4SZfvYjpg98cTwTeWq38UQrY7UpVtaKiR2eveQFpZgsqEP8mh541KWi5dKdK9j5ipSs",
  "key13": "5EPwsrE6288nrH3QoCF2xofkeYfPdfieDPRarGsGQ9beuatnSzzMKV5RLKRsNBuG7ompaQBLmwgDiqFZb3AGrc4D",
  "key14": "39vRRMSstppN3b6tiLHQaSFaasGsU43ncCxFdintsoZ1YEzUUVHCNPnPkduWhqe5j4exQtBPLdv5yoK1tRZvFpd5",
  "key15": "5po7PECk4Xr13oRLwyeBrhaN5nGxZVoE8ABsVkVh77nB5w1kPtQrwkmqhfzDvKgs3zCBKW6WqipE8wHJAggFfbq9",
  "key16": "3ksDYnhWA9UKA3R8qodtmZiCHr7gciJs34x7SjPAozo8LgtZQf4pLH11RyqLyyfWcFQihdNkohRNqUZkioNHFDzL",
  "key17": "257TZDj9tsC6t5oPSCpCM67xNBS37RYF57gzofLWbHApBwyuawngJyj94Q7D6ZoUmdkN3Hjp4HRdRwWStgxuceXS",
  "key18": "4jCEukMXN6uc8AhGHm8PkAsZ4xGwkTFby88yPHxogC8QBMhFSLqKU2ugD2kX2GajPJu78wAz38dQBHmhphsA5oGi",
  "key19": "p96MRbim3eYHWoFtb3TkXDqQvC858Wtb4nX8knA7BxenkwUa3ATkcaFFTU6QAZ7XqqcG8XqBhgunVR9284iHrD2",
  "key20": "XHZAqcQbq2s7y1ftq5ARFqGkLm51aQc5U3aDWgt4jW7yBrvTYHqE2Y5VywnFCx9zx1aVdRe4CaQgZxyojQwHQqX",
  "key21": "5V45RGVBHo8PE7MtMRzivi8DG7MaZTRG1VZBuKX1Y7T3cxqLSNGeUeHACRxMC5QNg8vA8MHC42tZNjicVsDMDHv",
  "key22": "4gdchHX7dqJjeEv2vGFNKjwxuwuwDhoJGebbLjYSXAGqnYFhJkFLNfpFx4ybqWrGbFugPKkcxcMfuV7JzYuwbwuC",
  "key23": "6K2Tx9wxD9brU8rywbjom4XPZDPEAeBfuq1K7fworAThRCyPs6pjhfCM9UfME91QxgYLne5b4qkKadgkA8GiaEf",
  "key24": "2cuk5jFJUCYonbwBFKCJCM4Z3DjtdJfGHWaihqafL5xPtzftYW5D5oKbEoRm7ip7WN1Ujo9siW6ycwJALfNzhgH8",
  "key25": "2JVjEXYzkjZXNpGT6DLFdPWFRt4gdeAZMNGVNwJZVehUMf4of9vzSdo1npWWdUZNkzTUCC7xyoTLGVRL7m1B4Q8H",
  "key26": "46bWN8zRs35vGU7XtxVeLMU575CPrr2EpUF8tjdL9X32esxcSBQCBp83BS7HrVNbQuDrK5388bZMJtH8X1ps48e7",
  "key27": "4VjSTK85vcXExBmJrysm5vP9vWAVA7ENfHqnRwhaaF85z1JPwzPMQoMviEMwsf1JkVfLBLW3nvwmXHMyfDt7LZQ4",
  "key28": "4oxni2HgeoHBgpVmirr1vD4b2ZTBBRvwuLjXvf4zgdYzji7jP25bCwzuJWqYF8vrXDvfa4D9jooxfhwnnJVjFYZs",
  "key29": "2uXH2Q62DU3ruUCqwtinmb6Dz6AJ3KqZTcN2m2wjQt7kFR5XqxTAqqYfMwyN2QYd1NrtTYK6g5yerk9NZXi9Q8tN",
  "key30": "4tbrjUrDqVEC97h2Vxo1Aw4GobPTfqYhs9pShpEUFtecLWk9yKZjBr4JvcG7tPgfT3HKz2DD8jqapiZWvkq8VjMb",
  "key31": "5N4cD6SyRHNXPnJCfJNndhfynP6xWri4gRF4yi3y7R3DeXeDemQA73Xrr2gC6u5CiPQJXeCaNNJWzYBFvBSckMao",
  "key32": "3nJ2kXhfBBe5huJfrUeQgS9coHU8uHEub1Pm86wPWNWCcUuDwzjU9PkXwjVFdqm9QaETU9nH2SrCuKndYG2XQoFb",
  "key33": "mw2V7iqqF3SQZenrrML86rXgLy2ynP4ys4Y4dw1FcXzJTqRKrBck1dijb8MSi3LmfWnCFwuyx6thtcvftrSUEXQ",
  "key34": "4gxijGyx8p3JN15dnuK8arfajZosJozNGxubuGz8FPxCrE42S2Yr7yqKFxrMWLPy9Mc8FWMngmKSXa5J8u8BMgsu",
  "key35": "7J9DZcZsonhVeZySc9Ffg5iiCXq4crYtXch24w8P7XKndmsrpw8fDG9HmFGm1hK2AGVSwH63s4Xx4XxhATDYFmZ",
  "key36": "3hrjuFbDTTNbdJGNj6U913hKfSskGMLyeoMRyZ6NfyttB7iR3uz5XUWHDPt4c3QdovCYRtUZAQGrKgXgMUd2JpZ9"
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
