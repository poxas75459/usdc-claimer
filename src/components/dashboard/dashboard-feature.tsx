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
    "2KLCFiDUaw9VHSBFNvu1VP6ExQJZLMSTJB6ehSkNZUGpjaKxfD7vdwsLarMryzxtUZeZt5PzHieX8BpDhooNTni6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ss4SCMT4o5WbxUvf7L7aKuCwFUzwyotnY3mKQBY2yVvcPxPDng741B8avvJrn4r7Eh9hT1M8zCCjyP3LXK197ya",
  "key1": "3zypEHcdrjN3uiuAugwQCeectypAFaGebf2NNNEmL6nxXhcUs1hEiHHYqVjuacXPGpFTgMUBYzq7yynEqVeJz3Sh",
  "key2": "8ZT4Dz57hS1m729yATRPqZznCzXB4hYDU99aw62xTweF2cyRAc9xy7A9k8oeZDL33xfYRDkJo6whskkw8Xid6vG",
  "key3": "3wig9vaA5Jyhpguze4n6eJMXPgizPrJqQnHNXFiZp3azK35xxn6PCF5QDAyBUFbsAC6UUttfqprEDdp8j8oQX3m5",
  "key4": "33sq1cKyK8PiTHHp7USRj8t9t7XaehbjRXqQTNMj7z9FV1dQTaKRT7tJHDDwaN2azAYmvW6jugzZvD5unsv6rJLZ",
  "key5": "RNLcmwBVXpxJxGDA9iDz8Xo45cNjottVEksvktJAko6hmqvxo8oBhHokWm3osw8EHrVqnACLh4cPSggaE1HUQWc",
  "key6": "2xGT12rzm6SaY74N5TNk5rZM2V8ZqmwH6Rkr23pCQbkdDo19YBHRW2KjKPKvUZVbgCubw7M6qawNSdaH5TW5V32H",
  "key7": "2F6htU9dzdiPApqQsbW5V2GdusxB34Ggg1rBHGzxTmTxt3R4gtPWbEqhse9UwGAXJsCGCMMimcnxxJM7sBTy2hpa",
  "key8": "4hqXt69RrRCBHPXLtkHpPrQbzy6bXAvX854S6hWJHzE53mFeHkC97BCPCR1TrC3P4HrzPAf6D2bcHAzJNzASMZsY",
  "key9": "5aBu9LikV8QjrAgWUEWhMTs6NskHY6m6dgdTMcbX4ttYzNmtim7dp4VbamfCsVZS5q2x4Qu9dkQkm2T48tVn7VSd",
  "key10": "UeWNjscEQfoeYsSUuPpXzF3vxkjonCEaVqQ1BcfCMzyLbSHK9Jhfo3wgva2Tmfa4m9jMMkqg9ejTuTiSLWSagcm",
  "key11": "3H1quRYU5eNXwFATE2GW4Hjcyqx5fcdGXvfsGTVvKJHzkyDa78v6BhiYaD63ViV4xfcfHewwXjoHnAR2pg8unxri",
  "key12": "inu4WVbJ6oQRLwrBdiRoac58raaWzaZyAwegjK8Smq2ZKGXuyVRnfaxFu8P9u2qggMizkakFhmUe6HdByfYwYQ2",
  "key13": "5fWgLUkunCfipYZSqzUHmeHnGwXUwTsBT7yyX2hAniV62j7gAiQwkatUcFABrAWueAmPq3CGyj3juX5wiQaMS6LS",
  "key14": "3qxBmoRgqC4GMom8CQFssHoKa1eMuegrLhZMuNNoJL1jR4SqvZDmYUoYnV5kr4zUXrt1ist7LcB6fg9KvFu6nY16",
  "key15": "2H16ZbGw78AwBaf8QvQVJtJFjVdEBZG2mrVfgTWxb6Cpvawu2KQdEXBxgw7zSWEsXQ4DmBpbtWv7v3tN8zj3ztD6",
  "key16": "3rJParwn5ytC7TYnXKkbQ3teoz1JifLj8Z6dp65Uj9uHkQG9hj6rj8FhyxEssEEUceKE7hAsS676t8CyV35QDecn",
  "key17": "4P1rPTxbXLFD1x81rh5X5ekAbYkpHBRiZ5fnJuwnkFi5vpmHXsyNDU7LSqB3tz34qpjKpLmYnqdh1DHT7RgUXcii",
  "key18": "2q3TwwXqyi7vXQ4QZMLc1Q6y2HMWVuB5SCRKccRKGak3gbyi9ZsvQ5hyLa478VaM5dwcMqpav99ik3GGUqsY1EAb",
  "key19": "3U2uQ47rDu6mwcN892hkgQyXJjAJoYZfTTzEceWMrs4JMdKxExKnTBPcnqA7AtSYoGjTdyhjiAoWnP4hza7TSJxb",
  "key20": "XZ4rZ1t3qh2wDRZo4yvJHRAEUkyPiBxtMMq9zeqchm16gUoTRC2quCu79qMzSirzPgk1qwJqpcdNcXPZbgzefqb",
  "key21": "9xZvwwFjABT4tfCUTdxPb1LB2FUYR3usgWqF3U5EpQVMgtP9gsModzmqFHa2vjCLk6yBxKGaYDwX7MiJCBZKT6w",
  "key22": "62BmWuhSvq9o9txCrt38sAjkfhetw8K2MnvjV4yxzUSmTo9VU74R4VGuxSv1J2jY7sNcPANZeNTfNjXehb1JFASu",
  "key23": "5NZG4z1NCHrUNb3DpiuSEfHXTdPrdeUHBzEaxSa6x1vpjNFTY3ijc8tmsquDL3ER3EME27SnbAKohZ7tuFyuCjc5",
  "key24": "5MmSCD8khua5tJ1GbLrBvFa11qDdZkGisVd6WCisa2jC6hhgSDydb6XjHoWoKgXkWJQQYnkKdZcVmTMqMueeHDpC",
  "key25": "5V9DPNgzMfuE49MkkrixK7d8s6G5GaY3tzv2RARNpYvy2uDdWfqna6ha6E6odH1ot2evYceWDCgbdB7NqWbiXiF5",
  "key26": "5NVQuARW1RFVEJngUQvsdCwBmDH6gfJftPiZ6GPWssqds2EyKsEfYdzQeULWuyr3t5gchqHgQFEY3FcCZxQUt2Qn",
  "key27": "XZc4HRCi1tvEypbv1eTUYyYeCWeNpQLb45LoJZbVKXFP5fv4Pt4PBoWUaVjbQvNutv9tQW6U7Sv2SLdeZkw1Cf2",
  "key28": "2YTtRiJ1NTHPTRJnXPGXoZGrcJDk4D3xRoZWPMEqPgFGcefVJCtaGvKkgx3JNUm2v7d96L9jUgQvVCLWmLGkWu4J",
  "key29": "vsQrNEnGt3Rc5cNKhoLD7NVHdWxjsVGm9EQ1p2gK3qa82iHxhjD1G2EVVhyNqMczMzKVoQNafrUXGxjunMAGZfe",
  "key30": "o4cFJtctsTVWQ3kVbrJ1rPjVWij9ywcw6N29Nx3VFEe9XM1434Nixp4vHVMeVCWF1waqm13Nur7yFscZtc8Dp1V",
  "key31": "5Q78X5kApsi3pguADXFz2eGwC6sNSBUtQdF84VwSqtvHZFCkUmT5b6qcEooRaMGoLJq3R9rRnhudsJsXyJiY9n8e",
  "key32": "2J27VgvxzwXusS9q5PULQKUSBMTUzGGdg6YiBsnbxFQNo1KMzHs5aY4iTEJBUfLWVmZ3oJWvPLW6Wto3me679mfd",
  "key33": "3geMT2tdb9CL4RbUcE7ak1gDvfcRpg7dDRiHNn75NwuSGsJiiuKLc9ht8uPnmGQfFLrY6ceHVeZ6BUjp7a9Hagzx",
  "key34": "454Naf666g9fYc92a6Uj1yKmSBFt3fPAo41fazLKACWgLNp65nw2HjjwT9uB9AXgj36fLoG4oHQXT2QYnLJe1hjo",
  "key35": "13SNybDQyPwEoEAYmako6UxQsWXcNCyHFQvasyn9h4TrfUB7dm49ZbKt3TPu1RmntAcEXiBpdrhdDUouGzmjyB6",
  "key36": "3u1jLtHXkTZLbuNBYV1fRvwtphU128Bbhi53S5CtWSnHLs875tSMgffrWREtVXeR2VjwKsvBv4A33KwrRLRjgATq",
  "key37": "34GZQRSweVhPKuQgq4TGFVnpg1W3wD3gAgAnoNTw2yym4S8hGjkp3pkmvsH7B4zVPmENsD9GXAdL9dzBck9odyuP",
  "key38": "5SgtyuysxZcZFdsaAASNEs9YKYA415yNAG19BFYa1PJG4uwwargryRp1FcAt2bhEEbuneBY31H3ti3AghCqEPd71",
  "key39": "654bCH2HcuYGN8YaMxqkjga2cuuZL3twjyZYTVAh1NNxcS4GrH354XCvQd22omoU6QrbBg2DRK2VE5vi6NAxGBCC",
  "key40": "sWzGCD4W9NH7k4doxUhFZanXywm7LSvtaJmGB2zpCuARNc2oEGynN599b35dRHWXGjFgZey7CZZ667qiyqLmq8W"
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
