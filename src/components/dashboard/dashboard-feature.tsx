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
    "3TnJqE6c5Pau7A5io9tgRtndz3zundyTT5RdVoaKHARnDEq2rr2NTe2nbQ88tGq7mhfSJ1EKqEy1rmFweKU2x2XC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZaGhC1SmAt7gSYznKYo3Kh6VfaMbWbHYcd4bidWm3SYVzUvL4js3oe3CpMLjP5yc3d1bdgB9GkZdGwpoZiXspK2",
  "key1": "3q2Xf7p76T72krhQP8Ezt3pCwkmF5Yvgq1DLescytZib4jFepH22G1LxtVb3nJfWznWNGsVPqtMqwGq14RCqWbu8",
  "key2": "5ARDs4stbeiVTNZcFR9bqi4vzjEZ1XucaShUB4cuYZowgpQxQSChiHmZnCoPgTXvWHEC9HkpE5kxxh4KAJPZkva3",
  "key3": "2bbb7piLFNYj6rbKGSpPCRbv7mrEmCGFiCX1YsFVXqmQb1VS2dqHRVydowgKLkbx94rvo6S1S47TRQFeKWLRhG1s",
  "key4": "wB9uwEVLeuKRHTnJiJf7eRLNv8MBcgcEQVHvecCcjEziea1cb89fho7SKQRuiEC2tELK3RLFdeAiDZqz9S5EQ5s",
  "key5": "59FbsCywyoigN9tQvvosN9tkrcCUBBDaLYKLQyv1E1zJEwhuT7uUWYPre7QofuzDjmi3KnemFw7dC12HFALuMpdx",
  "key6": "3XisMUwkBs3jCvTpcfLpnFz7XuqKQLbY1pmNLpW6ZaqVHbUSBzqew43NLnoA93KcesViBG2ckEuVRSC83B7qSsLK",
  "key7": "3u6u3koaZWeXHgFt4M5Rj6Ct6KS7y6hD6Ubiz7engB3R5vzdjXvmaTraxBxWPfzzAYnJcK2dkhk3eTpkiuQkyXnM",
  "key8": "4RXtXpEnQtymrmRD3zH7s7NuBp8hssH3VsWW2BqX6QFiV29ac7M2RJzVkArMegXSmxaX99SoMxKApnCmQ3Qforw6",
  "key9": "51wGJDmSUz3dEjgnVaTxpC6Zybggy9YzLsvWVLFUqriTX9BaghCfS76CFZ3SyyY1VCR5k4pHYUUQceG7CgVvaQRP",
  "key10": "tpDgZBkxzYSHxu4yuEpmpuWHSkAGUqJSGToonmUBvz8XZ4eQH1pGDuDVqSULeTDB99ZYeB5fnbyQDxYAEA6ChBE",
  "key11": "5aKzj8mMBWWEnxPc3BoG2tK7kTuZEHdALpcjx7zZ2MureWGm2jgW8L9T51hz4czX2DyydJ37W4goUyEGRBtX5MH",
  "key12": "26VeWErPcDjyjbndTJ5exjVN8RpC4kZjiHeWwdpgypNVnoE7HAJmeJo6symmrJQ4H4ZYZNZgNUGy4g5dULHPMbPm",
  "key13": "2mLRsFi9igLJnYGLseg9dZYTiEaFb81otpNPwdWjvgJGRWqfDCoWqXkALja2PPA7aNmP57wtArtAx6buRbR5GEu9",
  "key14": "3vfNKexAqQH5U9zsw4KT8zjNHGSDkqYMjgyGiXm59xpuDVvqYW3qYVZ3gycH3zx83CmuxHGxgti428yFTiKqB6MG",
  "key15": "2G1SS7mB7tupE2b3f86WmqRBrHJj3xUuicKsE761tJ88kjCryRZtMHyfLXYyxF27RLGajBGTTQTKkA7T7zuWiUfQ",
  "key16": "5PVXWtQvzeamcvCdGsecDZ6SoMjCR2RU3Am5K17Ls8zsjEsUKU9vE4gF1e5YvabYB7C5M7RtxtjbcJWyzVJY1wuz",
  "key17": "55M4sx45DQ9k6u9r6dWi2DHYmfwP9d5UTw7zFEV4qmNj8dZ4RrznfBdJWRqBmWtA6a4qudADsEaEak3iZd1qLcNe",
  "key18": "x3m5utyrjPUfm1Dz2PiQvozXTjYemGBCSKUhwLT2q4zSbpFdF4a3P9QvNe8Y1mdaoNV549BzzZKSv4MERBeYJrh",
  "key19": "ThhvBFxFPcCSbraL6jiLkufbmrA9dcciR7MvP7cMMfcMn6KSEvdP3Uw26GWoqk3f9xnGaW2YKXpDMjeRxF34zY4",
  "key20": "5qS11vpWf3gpMKmPm2hNDDAcZsx5avoU69z8p5Wc6ay9uevnzFtiwXM6YfkRjaVXiLZKr4CnhHdHqyBX7BBBN6Fy",
  "key21": "48J75XPz3J9tJju2kS7ZWGgQ3oqAhfNZ8UaeZGKTksKGNGpMWbx7RGsRz9D6z9TW479RPZErc8Q791ui9ZfTqMyZ",
  "key22": "3uzEJzh9168unQCaXUNgLGbbpSHGat7fF2b7T8xH3gLCiVDxbCBnQvNcUMxeCgs6XS1ddpewK31u4xo6R7JBc3mc",
  "key23": "65FHn3aaiP8wzBGrXhfTYRWHdhV3QBTpAiSkFdtujCbyT9xaM7Fc3T3aXnQou3JB8nCitqQr5o4u7X6hdBBqrsyB",
  "key24": "4fSKTabCCcLoC4MN3cPxuBpX2uZ1kyPybu9CJ8bRHbUjHVpJbrKB5rzLhbT1tjFaDN3PvCzj4KJzVrmgoQLaKoLf",
  "key25": "3dXQ6CQ8AAvQXYmdxxqgv9g4K1ayf2RQLnt6yPAEhJnoETbb93trdGQ58Qsx7bKJ8pQerFeFWdCSCBbcuok7VLEw",
  "key26": "mpxqFpNS8NctKQCgX1TbmjC3XWgFTrUqeDciZqpKRjtzWEvgsFpnnwvUYA8mao7QByvNjmuDgdiDUmTchS13AsJ",
  "key27": "2mrH1QWg4kXUNLUziaoc2jCq7xKpFQz3SaSn9Tf94t6j8HUAEDKKVbtJRkeXn2ties13gB3g3JAQ1wpte3RUB1or",
  "key28": "65iZKjLAiRiUq6VKiJy9FUCydenPpTCe8prFSdJWuopi6NRedgokoR4G1n9G4fpV8PTaP8H9SUhUqaLJLVTniCa2",
  "key29": "TpnnTbQKxrdJa5WnxHv6gQtffzHpmqaMpGcKvvKoRLUxvRVrjZNQwzs3sCf25h95i2rAsvtA64trmHyxdaPh6cH",
  "key30": "2rX2rEb93ihGHp1YwpTxuqAFkZjbpQARK89j2h3p15Bg1w9aXbNqGbyB3vAN1UHFL5NuGUXv3qvmwj8bfmNF5r23",
  "key31": "55QhcG4XzgxhAp97G32iJUT6mGJJRc8tgoqZLTFzzhQRqnxDEULxLfw2KoHfSVPL1TVru6iXwd52FJSDwbvz7HDS",
  "key32": "oqno1VeU9nzqF2Uj8fFsYfb4HXHqgF4qvu1VwhjjgfMRfGp2m3euvZ7EQiG8k2UPEGE11BCXhNBLAYjhMyfWSiY",
  "key33": "29vLCGRE2yUpZHMQn9y3bBbTMf9NBGFdbhXpqTFvQAz1NzQvMxSjs6PmTKnUkQzkwvdYuZVjUHt55XR9JHRJwsZ7",
  "key34": "28vtgnwfxtJptXe3Qw6BiX8wyMo7FiyyuHERjjnaQoEKU2p61CBKz2XcVVrgt99Ne1VBwdErKESWhtKoUzoSqGRM",
  "key35": "6wZn14fvDEt1UMNByVdKBwwDX32pqfrFn14A9Q1Zsc1Vvm6AHwLroEkYg1puoWC77ZZcTZTumgf1dAvPFv1mpb9",
  "key36": "5XL14dMbMzEfjDrNDZvFcSxGrFsLoKoxJL6qmx74TMAv8xb8WZZbRHrT2UxmjNDdNZBveVUBgbYEGmhMt27HHqou"
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
