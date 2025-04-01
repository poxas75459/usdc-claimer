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
    "4MFbdvCwUSkcXGMY1WvTjiN8Ft5aBhVRa2RUu532XhtyMgiRFWHspRA7BwF4NeAMhyy7ayejvCeEfFzkkV8BidLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43vZKw18pFeWNW76iZqBLAjhazhghQm4it8W6nvsEJi2afu5596TY9LQ2w3rEpGakp1NFAp4h5T4ge9e1hem1eff",
  "key1": "46apRBZWt4weDCJALbQpJFWpUNzKsYjE61MchP6XkQBgj4pXn15htdeBxpRH3vy9fVSZkM3NmY3qp1p38jiQHSo5",
  "key2": "3SVu2QGMfZDerjvyrSmShZMprkPGnzYCwbCPXx4n3SCdoo2LjU717XsCb9zF2Wo68jg2reDiNTAHSxq9Ns9U7WD4",
  "key3": "4G8jb2XPYg3RXpe7i9L7s3vYgTEb8SVmiZYY5KbCgceM6qVGeDtDA59JDwqAR3wS3DWiyKsvV3VpTuWmAagUxWWx",
  "key4": "5e1S6EkgFVjcXYsu2VwAy9bLh9ZF37R7wF7bcK8ThnKajGmoMZ8VyUxqrPWKvGyNEZhoKBH7nFMabtwqetZUn7oM",
  "key5": "329UzFgysUmcU8GCH9Jcy8EbWnLrGhrXwpg15VshBohuARoQUd7WUgpRUdqiScprqNk3whGjYh5HmUqxcaG6B3z9",
  "key6": "2HHaQRGVndak3uA4Y1n5cZb3y6SzASmVgGKnN1BimY1Utsg2DP9wTC7PfG8V7qN4JDii3NCE25fYFEdeiG1qSp56",
  "key7": "5HVACYzvo2zHVLgusWkx4ap1ZadhDi9uxJ2Hmn27xpQtzHC41yAPGhzCzshTsysbLfuichABStphzUXK3Je9fJ9A",
  "key8": "2a9oYN9rpQo7AaJanyaN3UmGhrr211BKhXfq7uVvWu652A7SfAcbf1QgpVcTwSuKimnYzy7U16b9wGV5VeknZV44",
  "key9": "4hMpTRCUXhLTkix5NB1Rxox5DgPAxVBu4zeaCPhAYoSiuB5dphyB12qF8yPAT3EJvjqopQSPaLcruP34dHGHgUqj",
  "key10": "4aTv2oNEUZ2hdPWyMDQMsXvuHZ8tbLqcZ4xbQXcvZ1yrMW4gP13SDfsDh6EoPQYFbFA63aL6pbCgYrB94dKnkbPE",
  "key11": "47ELA5QuqCCy9bxQGauEV1XNwcmqjMY7NJn4bMJu2vSjmb1bT4dBJ6A7Ez7i3WRey9kS9FLfTaphEiMSyuseAbh5",
  "key12": "3mF3NZrKffnaZDv67kUyH2swDuunATELSGk7Z7N1X35G9in79EKyD8nbVrnVzcPTtfDuKpfLpnWGZGAdHsnBkkDE",
  "key13": "5AkvxJYZrcHntH5DLvCVpo1326jmAqF7QPf7w4ZeP7T6e95bVQsArigB93yVxdxtnY65mweDrqyZ2rixZonLphGa",
  "key14": "47bFBf1irenAoDqc6af8vPFeWtJ5uJcviQZtPXBKMFvnqKk6DimziT1ZRCwZfzAoXa1GCXQkWuTp6SZaVuocMKLq",
  "key15": "2PH8NADdJCEWrPUZm3xgrebJdUbaddyY7gJ5oFuEz2sNnVodjtCJJd7zkEdw9BunvMZ7caJGSTMiiNPBPoGvx8UW",
  "key16": "62QiuvCFk7MpjbpBAromzv5QcLC1D3repCfmmc2EFyTbeZFH5HBM3QvvgDCTBG6i8Ebo2bj9H2Te67o62PutUTWv",
  "key17": "52DdfMQqGZn38VNPocdE1H9QqKbRgr8urR7mAwaX8peX2xe7PfCDvqfH63aKG7GTdmaDECR9QmyYqUj3hXw9JujR",
  "key18": "qMWKsHB5ErA38b8enwHXAwj8yt9dyrN3HwfWFp9YbkUbE9GtEwmoX6JZecEBY6ugzodVPMtqoRqYBeTSnVTYc93",
  "key19": "52woRyKMkiU8G2xed6xRJt4SVCnbmTD9Hp6PrLfqmnQk5UskgmBevPq56yFecg9vdLJ45qfMV8decW4nUo6b1aND",
  "key20": "3PwqihG4qFbtmtyZQKfmjNBeDPmvUhiKoCrh8sYjPdC2EmU4C1cgnNYPEauMnofm22WgyAyZyRx3ZFYf8WUQn4GA",
  "key21": "3KxgvSAghbf2fkAuSYDeLURFogXdUpTn3UThNoTD7f7X85aSHkW3xy7sosrRuBqRJEGjyzsW6Wm3JCEKi4T3E1gt",
  "key22": "428pdQmk3BMEUrvAcJE2WRFMFAa7fVZMNsbT5Exb4EWGZbsGhcd2jE4V6PBVs8UHVxgLyR1iFTFqASwAXpzvFYzR",
  "key23": "4YURgJhvsm8QrdNQYNppB7jwjvqNdxwYN1ZbPFGT1N8VAzKEXau3jdy2svSmvQLraWSzmyttmZ6gfTUWuD1YnK3z",
  "key24": "qMxteVQDBSkgg7fXN3SSW33ECyz7Qyg1XfYPntXNK69zST2EQ5mCcnLyYYQSzvDnarehHrKFgmoWTV5CYjKH3xw",
  "key25": "2EvAeHEucA9tfNff1XNccGwT1Pb8XFZxhWATPFwqxr8K3sqPM8M4MnTCxJbwLzz8QGykw4JBjDWL22t2QbL8v46G",
  "key26": "432MVfR49z3s3ieyuKYzNi32rD5xRLhbiQhe5ULjxKZCjCtDUXKzyYRWrBFxX2YphifCJezvHy7sj3qXzDvfCYi3",
  "key27": "29yfzYXnGU9gVyzC9TY19k8iXLaKYhAfJrxrU7UphNeZYNDiJFPy4sYVRnpxMePrWRH2nfW8qSKQajRk16vDCuz7",
  "key28": "3cQEmnV8gFHm74j7ux9e3vqeFXzBxTVhqNqoNGJujx53Gh5oQ34pABDRPWJ7i1n2X65dDHc2h1hAwv5wsFxWqJxw",
  "key29": "LvZ4a53mUmbQXpCsFFQQrVvVT8di8Q57euQji3NJdrHxMkSc32h7YHWinfPKu8e6Lrr9fPBGwrTPjkfmkBdDaxE"
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
