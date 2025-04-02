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
    "5WtJxGZmChn61v1XjUkHSbEhEVXyQcDUEh9zncMYogWEw3CxdQLWm1qQnaHMcVE4F8ooQg6D9W9jCSMaUFvzadSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FxZ1HDjqz4w9WYUyfSL9GiMPXXXB3DkTFL5352Kf8guy6tx9QJ81hUpeYpJeStwoeiFVKBdbPNzXBJaRSZtxzis",
  "key1": "2xLKWz2MXtm4WrHb1kD6v5uHaHm3etbzrZMDgnogMHnD8yWRCPBiaYaghSouVfRBMpyvbbiHVtQcZA4jQbvtTH1B",
  "key2": "58PAZcdQqrHgnGtfDCJk2m2dBn1MKVMLrDuVibBq5mxQccv5wMW6bJUxg2LucNA6WpH1zXAnSXjeGfNkFTNCfj85",
  "key3": "2hmfTStBR58aHteqNypn8qnSEegcfLDqm1kYfBxoNweVCSWnkat8A7Mrd3cuK7BLtrRkoxzjnaCNCqAhyufRFeNY",
  "key4": "iRbpBdUrJfxhgngXTpJEb4nyq5nv6eJ6WWZdUUAfxBui3P5RWQD7DDotKJLVYcoyjMyQdh5Lb2dnA5YyWj8yeFd",
  "key5": "66XWSwsUX8o8geKvm7o8gE292xL7Wxazi4BabMndFbahAGKmUtMUBcSTLGwamPDAxeTSbKPCRmTwtihhGG2E7a1d",
  "key6": "4hF9LZk3VifzEu7yMvScDB5Z6VtC8wdT16pjN7Lx4EuiLYdSTSTuXgojQtkyv9JFQ36qXrafSswFBwntH6wy18bc",
  "key7": "4PCVGso3VEWF7rn3Swaqc3t2WSRWVyVetjh7KAZcYSWx1UBxJ5AjYTBcBkiLRXURDArHM9Lyiwoc444zSvgNvH1A",
  "key8": "5PRaNsv1gyXpkwCh5FJ4o8wEp49w8zdvNSue5cA7dvpaS1tcSaiZ9pfYs3VBj3tHqyKRtFBiWGEZe5yw1UUQTKSm",
  "key9": "sjuuCYRrH8FJUkJiNN4zVAjrmfYSJe2RN9Y3pQQqi8D6raZnh7KAuDvHoPgLNGeAqdAdvTvt7WNN3byLEYWnY2F",
  "key10": "5EQkXFQZ3vCAr9WNT6GizMJofDTyzsD4QTLwPBTNkj869goxoCkoMkZ4GdvjvVvjKP9WHaVrxg9bEZuSHJfozT1z",
  "key11": "3Ekd8f83qdB2xw2JQV9XCbn4HGkDjp7PxHT5nUvVj538gx2gWa8Jkn5usCj4eAaqUq5Y7JfBdHSsLZjMxxHm1opb",
  "key12": "3kPXS9dkAuhjEPi2x5jKMHz8f2yjuTyS2JxbZtVHuS45KDHJURgv5mf3nVbGpRhNULdNWkvWiCWZ5umHG2Bm9bJH",
  "key13": "27RycT1sgebWhbHCnCpCjLkk8vcznx4pySgpnqj8VD1Qzq71heUK3aMoQ4PmzHoCSbU8mUEPp7N7LCXPx6pPHYYh",
  "key14": "226pKcB4iiyb2avm9LwJWhSN9r9RN5PFPxhwk57ypTC6pqvsyJeufgX9mAT6EvRMgu8DuH4EvnLs1VwYiHhnXzxw",
  "key15": "5qKQxT8aLU8uYZJ1SooHWcyz96ZEpvtUqi6DQPboqYWHJrd9tPTivhVLoj2gJygBP8He3iSsp7K3RpHsDKmJaHxL",
  "key16": "229pVzHZco29Jj6bPjDvG4d5gZFddajQMtqtHaEi5WuKxt8FMigta87vdrMzNUPEdh5dCP5YY3tVryFW1RJ2z1qV",
  "key17": "3jKvH11V5ETzRfVotP1pceMoeAma62jghdT82PtUbAUQd5b52EiN5XuYEv9YqAFMBP3q14t8cDt1FuczCX4g4KDJ",
  "key18": "59dtE3Px6HtZt5ygeLkxr6qkkKVCvo6oxjm4bQaeS91vCo4dY6Qwin3iVpU4DzVq4aqQkR6EUuAgAGcJAq7ejefQ",
  "key19": "5bqmNusP6hjfSgqZZFifkB4PjnLV1Z9bRT9bw6V8cMmyDxUjaATgC1DxmiGi9SF4rA9kJeNSmiwpa7QGgdyaKPD5",
  "key20": "4arcwT26WXtGCEu3iezd9qW4Adt18MZe3Dscc8HWQmqs9sNWAW4HHaeFpUDB3738t4nfHrx3jfQKWgtN8eT267Uz",
  "key21": "VAsYanbWWDBGSsE26zuhBWXuMcUD8TNG2x9XtAwg9fwVujP3HjLMzksNhfXCgTXombPkDTdwHe2zKeFkV9C6QsY",
  "key22": "4XwWo1sun1ptGihSsZh16vNEhgRF8F97L8rKksP2HFPrYJwMTdy35zRgwybkccL7mTfLHCB19tKAffxjRGT9MAuU",
  "key23": "593tnUv2zXA9MQMxpd3X6fXN2p2L9wX1qe2CQ7n5NTjb1JRFygqKvVmTPCx8xGT2KLvZtFYbPkNe9trSUsnaxKTK",
  "key24": "v7Wdi4kYwqhpAeAvFcgFrB1AehTGYoqJjdadfqp3tu9XYLW2nAXbwCDyfgwgWxNUJNamxvsaahNhFPxpFCFFDHp",
  "key25": "3A6T4LJiBTRr1vwWJLH6jXBMK8YEfiAYWtJDzRnBctmP2iF7QSYf2XjNhZRVQqWQHBkGNSZABWErkG4j3mWNnhaF",
  "key26": "5PYg6BQKKz5QLUbGFF8QAZFE4mnQ6ytRgNdnSee1MSXcuWqbCU7upgLoyoFQkdJvThaq7VBqJxL2nWr3uA97fvV8",
  "key27": "2nvhQVwTAjzPgRkbAfgJyxKbsVCvPTg2RazVRy233u1Ga2z7h8ccj5zh3kpa2hV2j1buPM79k3bKei1GwNZcBbe5",
  "key28": "4xZYNdxoaex6L7JqPVqybozTkjmQfziG4CrbLoq5vnUomYfvy3VjhsdoVc9HvhtCZnP9ox8XbjqV2N4QvhndR1Nn",
  "key29": "2o1PQgKTYYYvAGpKNXaRZ6fbcqWnY6p58KX8jB5zafesidFRZPSSRdZgYrnpydhxEXjwpV9XMfCKfUfmHvPnorWQ",
  "key30": "5Xocdo2NtNxU4nRMDHb3yvrKkjPJPsudMeD51tNGPLv8YW7smHtxF95dxDBZK27FQBAQkKsuDJhhm2TNapuqrAjV",
  "key31": "A1sun35eV1q4EEgQBwK2cevgdm54qLuRF4P2jbdTFDxh26WwhHThP96WKFxSH8t1pxG7mVqLDzat84vcfd8Azmn",
  "key32": "56Ks89QLpyoZR3VPykK7j8C2gLnvsy2PgT9ipE5JACbgKdaTF2Qc4WqZC5BfUBi9z7Tzpnc5efXCpdGE2F7dn4nm",
  "key33": "5g4rrprde8hTtft8CHsLWQQXRQhptzR8NkeT5NPVc1wXzz855PWMaE2N8Za7qJCyWD4gSpiThMshJjq8Km8om6fN"
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
