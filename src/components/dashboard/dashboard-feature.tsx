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
    "3soSGoQPzW5myLtHG6if8dMEDJ5VumAngGxUPiESFfgzDpmiyiTA1Tsig1RzmdGXZgTDm6vaa6zVQh7joeazFNGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SgeTFVZHWQHaRWtRqj1UVjxZpDR5aeo6VjYKLNJ5hmAgEQTBeyPPsmJpyTfhZErywZDqAy7hZbteZVjEMxLHHwq",
  "key1": "2q949Pgic8Y4UsbYsdYLGsRU4NXczcHvtvicY2P93ujSURy3arQMBu8yffdcJd6pZu4VSFmKdywb3zhBypr7Ukrr",
  "key2": "4yPMe3tSx4Z2xXTg58K448qU9iJsVbrHMFzvav4984mSC4y8oAXYMkJNQgHZx4DRgRAfSi18ZqayNAmaUPLcziGW",
  "key3": "7BCCJMPG7Cr6Kh3WBRcQMTD2aRMGeBUqXmcWB4EU1PbV94YsbKRcGpcuw6v5nJ6dw1rty8ZUPnpEo2PaDVTs2sY",
  "key4": "62GEvYSyJy4xXjzzdTZDQMZeoue5wPH8qJ3gesPFjHmk85dvSJEgk1JARbBspSkRTxTTzryJcakuvVPPwEqgjs3i",
  "key5": "4LRjQt4AvuExf4551RfNmpgBn2Md6XQpBhb9CUnAaAVrx9Ss79taHBFJ8XBF8TbpPPt3mmQLDKcDXpisyonBq4dA",
  "key6": "Ep9LhHoHcKAz2WqwnA857ko2VpxXEakXzjQNDMkjLXJvWE7xwDmEEhm1xXmoassEuDtxWse7TP66SjUc3XpeebR",
  "key7": "HivEaxzai3aZD89WvGPVN5cFLmATehj7hYTgThkMf4AJ2kuvQFkhaYeRGFo1eq3QTcJbMmZpcedZF1wVPsatJQX",
  "key8": "2fWgA6eJzH5ZLsY47nwzbEfuLkDsksxCey4zzraPs2yTzdqbvtzGa7ZnJMDBoj3SjANrWAvn5sMQ4WoXhoB1vY5a",
  "key9": "ocCm5VwmAPvcvRFt65oNQiymgwFs4NLYfdpV3vKBrxak2DqbdKvag9fuVHuKjVZ6ATb6xXdWkbbkN8HpoNRtMcE",
  "key10": "4WWrMbaUVBAq8JYPwhXMNbFH67j6V1othH5Aa1w1437gcGBJtpAFm6Wx8erLEYyAjV2mEzdLkkZRbfCTKQVBbjXZ",
  "key11": "5SRjrGPaFefyiifn1XvkftPbdJCyASFmgu7BdhGfyiDj7uo9ALabozpPkhVNQWtrXsopWBLGaRRg3QrbNijhxm1C",
  "key12": "3vCtGXjyH1x3Dho2EKbJ8vQukP7uUhaicUzTHcqpsZHCqMfEj25VwH4SFwbeTxjAzBYQEbbVHibCQjAsyotFfe9j",
  "key13": "2AKYEpUthufG6Ek1qrcuHgnTasvA9hfbxzD9VZHaosKczEcxTjwoybEKJUQiCP8HrvBVziAh3XPWviiAmYuK6GS9",
  "key14": "4iWFAfkDJ1iXZTTTXT8UUvGHHfyhrV5AV1MhrfvVCS1TGnY8Nudk1Mk1kbFB7GPuwfcrmpkbzhcHpp3u7irrpWDr",
  "key15": "211nwNrsxBpGY4seqKQnJqATwpou7undZKkhro3W5mBuzCSEM6ohv19UZrjmKPubSywrwAnnHPL3n975p8J4EoDH",
  "key16": "1JFCqTpysTqCj4kXoZ2k61Bufx7dqN7ZfqYzeQHvhBDxuVSdoVM7BFijeZKFNu3BwPd3gKTncRuMSqEStgJ1A3h",
  "key17": "5hn8jcroLbM9jiyJpRDbq7wHSojLC58cwajhokRQH3TXNGa7b5nDVjJs3WWupptuCPFqFCGHkRQCqAyrLJtbThbi",
  "key18": "22nxksC7iScocpzzhfD9oczvLa8Whs73pscpQ2dWKJ4gQ48izKiL4qZMC9g8fYKWwEw6w81PYRF6445K9pBQMFUv",
  "key19": "3buZWCM6BWvAXXHxGemvR4J9TCYCr7CU2tLsa4vu67xcP3d5eMFFAuJSDPtV17zDqWAuVLAXVckUL3U3kneAZePX",
  "key20": "3GH92CiuRfxqbdgZtUM3w6NGhUuozvvgpGsvZxzdJouSErqNjL6sEvYv3b4LcPXpeoKek76SPF97rdtxMfKjqTFX",
  "key21": "2GyZTc3845LpTTVDhim9QoaeV35UjtSTi7n4AzQJdomzxZ5o2f9768nAHZQgnteFyhQpGpJ1KyngnMY3ic9kyd3c",
  "key22": "3Ype8XotCyCurGMc2VUY82GxxELjeuMd4zibKHb6SmbHpY7S3dd7APquzXwmLi2mXCyxXy5DFHymGnuGAkZ4WzKW",
  "key23": "5nQ8fyDG5wMKHxuPcQtKXQ9WWrr7hB7aepjar4RJSzTjaNXuAewoCeFdyDZCE5RYf7TNretqMZe962a3UzAmy4Xk",
  "key24": "D6nwEo6YBqck9LZbsi7TAUk86DUxX43Tt3qW2hciBbYbKXdbVn6UpagdofYNHbWh1D7hVUBEvDyeEXpF4Xm3Nqb",
  "key25": "42BfUB1LjnjiGaXcumsZB7WfzZfDWUYD78uEiELdEgQdzcGWJeTnkpihetwLpr73jgWWtyYmBqyu2sRGnSu6Eni9",
  "key26": "5udddKvfKq4dUp7wLvkx64eQZshaZvxay7dR8kQe6QS3kEHfVFKSsYgqAbV3d3sYb1v5HHxBAN7UFgbUtrGDaRay",
  "key27": "4T17ZGXm2WpdE7wzASfPkiqiZvebhdrAQAMgXwynbQymSmR3kaMQFGiLvzTmcyFGzmmjrCCCQxjZo5TycLj4v1Vf",
  "key28": "58izYb9FkgorJEYoyympiyMnJv8jsMquQK34ZWS8TZN7MDDjn9DBm6NtHcGSkyisMDvRs8Rhvc6ph2jhQkFbyPJh",
  "key29": "5wY7YhM2UhbbR5fVyZVwM6zoHSbQpY4FBgcSbRGtUKzKKQfFzMKGbf7zHB3dcVu5uKhkYBgRsTXAGjhozXHXBdxL",
  "key30": "48y3qRp5L8nV3hT2khnUpm3K1yrZsgjPSStn4wE2U3pTcYLJNa4V2pmdu7xG68HHV5ZEc8iYC5u3wDqtbgNb32Cj",
  "key31": "5ae1ngLSr9dqb3mP3yyBFGx6AA8vQEzXZzK9TgqPHDc4aRNgoKfKVkQzaNcsVGRqmqdzBt1JP8q6Z2eVomhMJsfr"
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
