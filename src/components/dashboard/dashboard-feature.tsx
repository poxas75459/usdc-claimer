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
    "4LbrS7GWrDGzrPkGJS4JztDDR1h9EJ2vnKSL3Gh8NJcB9m5bHYEnBToPtNkoU8hDANk615V7Ym9fwrk8ED3cVx4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V8xpMpLtAAjwGkZ5d3Ab192oE6JiKhLUUkKDntRjbygpFeXSKbu26LTq3WmCyTtrTXZvp4Fpp91NFQ9yQJXktkb",
  "key1": "3YnT965pUAq9wJPvT676Wc5tmfQyQvWEZMWseecSbwhq2VcZnzx7JRdPMzkuTixxYzLVMQfL6cM99TUe633hmoZy",
  "key2": "422XJ7sNH5a6V8xtNe9Nf4rKyuMUHi6otVJyi2Bavam1eU9QcWCzaRv1Cqv6ZcfeXmXQYBan9sCy538UKC9GrT5H",
  "key3": "3uK7oionFSy78Txqzt3iQRTkFNLbVZo7krsSEUJMcrR7NVvGXix452XY6thgwKadXpSqHe16ytDZ2dLdi4Ydw2qM",
  "key4": "44T6SUyDvdh5p5syuAsfUMGrNyydWyLxTv2wLZyW9Zw2a3TRtGaUYvdKiN88W7i5oRheMwr12Qes2Wb2qszjC5co",
  "key5": "GoTngTCWrn6QESD5eejsB6275SdiVhmVpuCashzWfy4X6ZwfNbbCeAy53cD527MAqNj6bepAmK8bXENd4cUXxV8",
  "key6": "59cA6CrjDDaZMJ1xRdRGbzLnDAtrEcGPYeqhCE8y67pPum1gVjjFTTJVGPVbrPfCwA4WKNJJu5jQDQ98myJsNbNr",
  "key7": "2mp6MGwEo33WN149kYfGB1Nj7pQ56Dhp4w3YdFqv1RU1GsJHVh6owy7xWnu63xyP53ZEPJMPzThaGM6wwRHNPmQr",
  "key8": "3NXjWoRQcBJ3cC4ZSU3M42TV7RFBLQPq66mhEBBcAYd2pHioSojJKaSyW5z8PAo3X66tHDjzvrqgnZLCCYvYtFM5",
  "key9": "64YoVYUS4RpML35qgLGLAGoQ2WsLjABVdQYd6a17Kf8wyoQWC3iij5ZqdtZsjrYb8Z8MghBC3WfL6bJXN8eJUeKC",
  "key10": "WdSvdKzQxAbbv8Rwiax8Q1LhKJ6fAafTP9JuEGuGEQEqohmtxYPyR8Fy9sQVainvgvGicBAwYe1YEUw8uhjWYAA",
  "key11": "3wm5EaEYvDn1kmw1UiJ9paZqSptd1d2tnWTDDGChA3WNQqhNUNNL7rHRrQPXn9WjvD65nx8h6AHHjcth63FmWT1",
  "key12": "258ahRYg6MSjGo45UiRCo1aVuBjrNyW2y8pcA6xe5NvTcB1TjLdajQqqzBWyuXeEHk46VH7VVxAfGeutoJHEoGFF",
  "key13": "54WmdoN7u3MNfzFpgjpC6RaGNhBDc5YcFRG6yYvg8Ws7HiEpgvJDYB5aHvmWKmVey6ZGmtTptF1BGVwt9fnsBmEt",
  "key14": "584Wm4yq8AE1KQRTegf5EaDPeWuqv5F9suCVLRPo9EfsH7wqCpPWmMUYBNAgfpyb5m52E2pHdUUCVsXj4cH8VqfK",
  "key15": "4JHuN6nt8ABsthWMj1AMEMsSF69aZ7nqGdh712hYhQjXRShYazxhUFdwQrkzLqYFmVgNGS66qxPipcdNRnYoRdX5",
  "key16": "3Aae5eMUrBLwkh31JqLrWv1XjDxQYGgTBPXySLcdX95Leaeo9W3wsbXN3WLW9NgX1F8d4aBexvcrFssAaXFoYePo",
  "key17": "2kdHyvYqKKpQQ3WQFwazKDp1a8W4T9aZtJ18Hph3aPZXN4KVgoRh5z5xc69DTfgs7icd22ALd4XyapVqkd92sPFr",
  "key18": "8FyQBhKYBb62mYeBPRYHYgHYjorqAfodvVUSrcXQTuo1hTrt2UkPvLZtn38QYiex7FcvDERAEqwNnMU7SZVqcLt",
  "key19": "2LMMTRJbJC4hpvov6B33w3f78RiHtdZzCuUqd3qLtTmmujGXFcCxhBagB8nckLhpD6zE2sx2AC8ytfr6mb2ekc9M",
  "key20": "5WjNWHK41FBwQ32ptpN1RsC8UwTQtzAJndXfYdxJ7BZmek7fsQ691wdgSo9ZnyUYCPDqVULNZVxrQfSyGddeMKBN",
  "key21": "qu3brE7rSQ3qLdsbZjt85DbueYvrk8VB6qxmoJb7ifqvPHJb3nCbKRTxsawLfGokAs6DmY2GE8ThGfspB1Cnt31",
  "key22": "2PJh8JbkSSQJvte4jEf12EqpRGzKVfT3YKd2BFwKz8TJnAuLsDP8A7PRMCodMB87JK8ojBpJNokcEeJy7JzQYs99",
  "key23": "34ULC2em6s565WsZU2iWZimYUABpkK4VE2AALFoUjaJtkbg4Kbq8fmkYeSbkLr6FoayD23gZmDHofFGdnx6z5Voo",
  "key24": "4DqGFvpmZRiVAbQ8U8HXXxVAhWtzfumFojhniNpaKdp8A3xPWVEnzgA1tm9ZmvePACZeCDDsKjd8RtgTcXGAqeis",
  "key25": "4C8Dyp6iKGgjN87qNjyq2dnPLdviJw8BSMbvUzjiN9eXMeAUXH62mg73yNQmazoNPjNwNPLBeUR2a1MSdQZiXVNW",
  "key26": "2nUJ8KTL1GWvniNBsE7HnKK5UuP4wKyMy8ySfUdSDHTSgajUVcz7c8e4Xx9yz6TSXLsZHFKUVJ6cUvNL1oCkw9Cm",
  "key27": "3iJ588UqNRndC4aFgxCrNEAFi4hCNJMMVq5DzxrSTd5Q5GbxQqqwPmxvD7UixkSC4enBKPA3ZCX7Dh4seyrQ3FVJ",
  "key28": "4kJHNTe4uJH7EoU7c36YtRFNZGC5ponv6rPQ5DM8i9CYsXSWSc3cLgRyiTKqJKZR5rTfVDfznrkahVEamjBeHkVU",
  "key29": "5WKK3c6nBTb7FbUyEFshHc9BEjgDutdckTJHCj1u3VgKuxmkdv9CwMAJVM6VbpG5AsSdmU5wAfYznVYyWHVSuSMN",
  "key30": "4MNkRxq4nEQFT6M6vr9dAB8wjcECRGiiGcPp4VNCowquwmpbv4HSbafjNCykLxpKPwFUwU6KU11RYFoSZnyfk4dH"
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
