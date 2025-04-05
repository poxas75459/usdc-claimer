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
    "3jrp8QpgDRWDrp18oEYA5bX9EmT7KrUe3kVMqfcuzUbyhiH4FgdEJieeX5Bd3x8pT2aaNQSTNmAb8rYKu2bQEzeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u1CgLpw54D3DBVf2tCGjpnrS3U8XkC5EiPXk7GroxdecpJmHom3QkrSpfZwG3iSPnDzAwbubhM43mGyLARtfPy7",
  "key1": "4HBeAVB1K1X9MBsqvwEiuGe6QutHPZS4V7KJZ8hMgeRQesNcAFWr8PuqC6WVZopTCBsfHci53HTki9As5Cogxih",
  "key2": "5EZZYVA1ndZaHz1qbTG9DHukoWrEevdZbNQMk1tAYGZUJYqS2F2pVotYXPZ9LaurEdioDUvojnrpn5mD3jaM9ZCa",
  "key3": "5wFDsjUf2VPWpLfSJb6dHaVKauNDX9yiFDLbUXnwLii3peh6Zika3UntSw2hq2C28Q1QEe9GC71dKNGcTRchS3Ft",
  "key4": "5zkxnHwZBD3FSF2R2B8kvJJykBqPLxVdg9mKH8ftMPLyDHCoQ7rGQfqFx1kC97fiLBfoc2RRT34sBMDgKWUoRKrp",
  "key5": "5Wpgm2PSoHKyftLfxEUXaviRY7MxSBH7qGV4VeRXVnSbKHoC941ZAd4TSqUdnKSXL1MQUjx986bThkzBRjUDqxVg",
  "key6": "2zNpLbZZePYqkmeeNdABp4DyMcNY4WKwg7FFcB7q6BVtr94GMXwNN5pZ4Y57AFJ7nG3L3MozvrfngEtuvoiXNvkm",
  "key7": "4oCSXZVUEW8pGygMx6wDC9orMgZKksRDtMN9UAF3wbMzHX8CyurWDQ25RdDq223tS77izmigBSibnF6sxgEdRD7k",
  "key8": "53UMHYK94jpFe6kemB4hexRLcbHYthEouFFmhDUYbH3uNmz186oMmMmjcb7vt5u5FkNYguJmK81bvgDsw9gf7L2s",
  "key9": "5sxvykvbQgXSF7vAs3JWXmcinsrmHhEh3oNKc59qtS1nL32sXvc3jkoToqMWiX1cov3VEbSxFxrh22HtnN4L7b8W",
  "key10": "2iq49azg9ULcMu3JPujGXZmfrusrP1Au4eChn5LTyw3oQYHce3qhchMSo9L3VbU9Z4DkjaqFyRWg4vHkRkPF7Bjt",
  "key11": "gw44it2U9wBhGgQVPziBJXA5YH6vZJuXRM9aBXiePWVgUnxnuqci1NMFejqGgwYK4n9SPHWxpgfYVsZzTfLTmaz",
  "key12": "5mpZp89rEz7uEq2SUEhgWnpFbR9mqXyxbcEakaPghSNMLe6HuA4RRRw59fBjXE5runeHwk29tvkFYkbQYLNgMuvj",
  "key13": "2ME8SGZEnsGPPTgpFoKKHBm6nUuRvoQfYf9cjfnLht7HoUxyZ7hyazEDnidcYqQykHpHVKQKB7q7XNSioLbKjXN2",
  "key14": "3wdCnDkJZmXijr8kBao8DoAHT2Pi3DMe1t7B5zDNEsjMEkf8UDcDMnvCRT8gMPDEwA5BLxMQhbeLvLgKiBrQ4HY4",
  "key15": "2gpSpL96rBJ2ffg1kNgg84vtmHCyBm7xf1JuCLQZWkS3weBUrUSHix9KLd8XRcScHH16NuW1QiXGfsmpCRy79uPd",
  "key16": "2UbnA5qjh4RyecekjBJTdq1GVTHpY4dzc9aajX2kGVpTETfgNK4xfuuABucdjuUPhAhNyq5cm5rRMuhJeEaYPgze",
  "key17": "41P139ZYVYnJkoTbS6AedaCW3z2wvyGeofAnxMuTLAxriojjXmyQsMzUAFxPuoquwtCX9ayKocYsDXcovMSTzDyZ",
  "key18": "4he2vtJ58NEphubY4HpbTnoetJPozMECA9agKoCCY1vD6G3AmFaAWpx3pWGQfv4Uhc62shAt76vDGdjcMqArpjKv",
  "key19": "4EY9nkXHouNmbuwyPAiaKmoaWgAeD7iqRCJuwPFxZGz96PztoreBLNQdzfHubvj1ZWtcbeqTaGEfj817XT6msDDs",
  "key20": "5U3fVscrBPtHBiCoAi5NB3iZTTypK5wz2EXgaRJynZBABdcsQy1u7VNpdH6Wimd6TFoAayDzJyV9eB48FXdBViJa",
  "key21": "3QW67EizYo8PKDzbbTFCGTYe4Q9mWvHKFEPKyf23MBBcaVs9kv5x6qRaxjWNEAvh3TrwEyHbqJUqkdYKhqjA36PN",
  "key22": "4BvkYUw41X6ZfHockQNrtwd784M48RsT1RF4rwyFLAVaL8h9CK5CdmkNjSH8HGVEvaDFVrD52gsJAHdcgewKCs8H",
  "key23": "2xV4MGiYSFmKJ1kpWME2TjEqj5JAFZRPEM9ZM93Ykq16PrKRs24bpXsU57hcb9TLi3CEYmuBrGmanicEra3gj1vD",
  "key24": "4Rd6ToJf2dJGpnwZ2RXsurPNK8ZbN3cJAYvnKNk7WrHrCssx3sesFMAYBjfFvvMBBrJWUG6WAMUdJCe3Ym1DiSVr",
  "key25": "3wACcLpjC6pfA8GXzn7qjk5apYFaj2qQW9noiyxhprUGZQ1toXcPbBFwTZ8o8TNc4YMjeRyJrkpXrJFz1LhEibPt",
  "key26": "2bd56aMZo481bDm2aDHxxWXDF4sHnFpA9i55C7ebYRhS8yJ9BCvetU81qbUgz6vRMQFDUhAWurTKS46auEmTBtQk",
  "key27": "5Vz4da4GfZ8BgXq5zULArdb6L4mxyixZWVJJTXgbn1gfwgo3x2W1pv6PpFSDB9SLYpAUhHkFVcfHZUozQpyC4Leq",
  "key28": "4rqqnUcCvqGn4kKqXruxksNkxxSSemr51s74usNmy5kFJaBoMEf7pU4hv8n8eMPs8GqeqQanQuE9JpRN1BxDd8W9",
  "key29": "4SQ1Yxysf22gz4AakuCKw5ikqzRknmAUkkF7MuHLtBTaMvshgrftX8uXxqaUiv1WDYxLzJvJywZiR5tTSwV4uxiK",
  "key30": "4dphJp7vdbwyrB4M8wQq82uXdyLqoM3AMJdcRho7X7mvqidfK6JyiqKXYNMpJapALkLuS4zkGYNJAPTSTFFQhotu",
  "key31": "4WPakUo6sQWZWpL7nAVAPcvQZtV4w65J7sGMaxH9ZDKmBaZio99H5ZtaUY3Uk8mcB4Uh2dVqhMAZejB2CrDfeJ4J",
  "key32": "4ADsThjGe5UygTjjcQmTJNzZyxg13K6vgtZyP41oPajU9FUXa5dusApZFoW3221EkGViQGTeut7nqg6uQnEArFJ1",
  "key33": "4MRmcWt7dFFZjpYSLxV5fg8A1cfTTF7fmCFSQAptmYe6Ze4N8CyK288sV19gq8AsGmaKxqtthvXXVa1jFvFsdvu4",
  "key34": "nVtE9oaGteXXaERFvezEB7PDV9fhqHcKfDiG4ef2Bsm5QMEqHHrbTuVSfU3KuzKydFpJ9hWxAgWK4PVSoDBNxbW"
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
