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
    "3wHmHSi165Ui9k4ts5dVF6oyRmx36hZ6GtbUX7g7pG2bymX6zLoJ9RP9pdWReC4gapN8UCtyvrFNhHci4XCweGyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rrZP5ZthUQRSx5ssTBu9dSQkbDUZmfdAYpjRKWJzn9cLzyjgd5i5B7y2M9zfBfFU1Pq136A3SJAMa5xZ5oVyrGA",
  "key1": "3JFWgGQTd1x5HKfoST83CPobpnHxFXCE1ncaCMXvuvM1nnb5AWDXiuq3UvSoekae2oYwefQHQsmXyWMnvuG22S9L",
  "key2": "4rVFezWTgNtWZsvLX1N4KY4iA7RSpjmLX5towHY9DmrcBDFccMdk4GSsVHJ9FVH9nDmWveFjEKD5AUojPcuHf7i9",
  "key3": "KY2uAi1HU1Po6vT8qvq41ehD8U4qzykA3JGofe6BeKVBdcuQBbrBZQCWAFbMkZbcRsSeFWjQje2xKdbL1CGTsHL",
  "key4": "3RL9szb7YEED7if1wfc2JS7XJYVkweS6TaTSpTB5Xi41ohD4x83qp5nXc3SUM4iA8jUqt4JwMNTP4ujhh35xhcjF",
  "key5": "3XV1hL27gyF5VpiYJmA2PSXbKvwoVXGbJZCV7dAdK9tsjBnEdpcbmPn1mYidLCXTrcKjCJBezMr2fsgY9cPqjuSL",
  "key6": "3UbGUAkGvVYvYaFGo9Z8EPHiBx2URr14xEDzsNMhrexwy4eEfpMu1Q3vW7ZC8QTWUWngtcmzdtCDb4SKzJPS5FG5",
  "key7": "3ZhtZz4PNnxgEAjJvPqdULHhLph1YPgFXbNPVpiGyLxyzPHaMqx5HcySzaoojAq5duCrfQ8C8dcqApq4n792pj6w",
  "key8": "5kbmfXZX2ZQsYxiG4ohHthcYzbLSTqtdsCTuYpFbVsnNumKLoDnyrkRrRHpWpkRUgSGBEfuvEg8Y4Xb8aP6heLtM",
  "key9": "3wZpcC1yM3k6Bs6p4PCTqeMkqtQBtmE2HX4uvN1bhDQoNR9qLUujer8GUFtjkNrZNWQqkp2C2XadoJnVKPDarskf",
  "key10": "SkEYMsjSNgEWcKvRexmbqyTDPTVToaAiSksocsTjtda8HCjnzB2MW5pFQcgXT5TBGJKYB8ZEgj1VwaJfFZrjVrZ",
  "key11": "5ytBiKStspiCeSUdcS7Bz9G9EHtnadgsEAJ9pHuUdXvFAUBoWLvBkGjWedMYk7j4E9Ga7irKVpdP25k1FBQwWPe6",
  "key12": "3BqM84avf3mQ9xqvJG1qxDyVZP97EPXFwiLA4cAcbgMmLS4P7rg5ZQxYuUoLAmSRLuZjN2QV6KLHS5u3ofx9FU5r",
  "key13": "3gBSwFDCTVg9QKHBxx9foQGvFB3uooQ1YZw952euSYptHPdCA439UqQLaMsHbm1MAuA5pS3h98RkZS5fHiSSedcv",
  "key14": "3z67Ea2JAgphHzGtVxEc8jwuCGZHL5rDjZNqtLvi1PmkhmwqDLN14M3KWMAB41epRkkwecEuLFiHt3ZjCVPyh5j4",
  "key15": "4smotQGVbgMKCSJZ7aqXaw5sYx9GYhgRym9oLk2Lv71CAzq7iMiSsSStDVFxnVgJmwFD3LHjVTuKVufjJbRqCQZj",
  "key16": "4uqHhLkCQZgxhTtqneHuax2kUfjVw3wu79SUFi6D8yLwvYBoYNYD719wLaePV5dKh9Azmh6xr4Jxx8RHuRAbiNnU",
  "key17": "XQK14sjXJ8FbAUSHm98KJDWE8Rf5tFr7i4u22LS834TaH6GPxZppeZRjNjLfLpoZMdm5f9FKDEN7vEMJEqc1xVn",
  "key18": "65K8PvJ8jpQTytaLFvCKEULGtCQmavm5rPTffojfpMhkx6MFgsWJVWFAn1934kqzgnt4BX4FVvSeCWb54NmLtdGM",
  "key19": "4BnJW3SwNof5yRASUYPZo7fYb7EkGwJvN8GmPmh7RXF5mJopQ5mnZ5mfb4aEFRxmBbJC69pitXVaxRopTaVkfk9a",
  "key20": "2eSzeqY6qNZqxoKusrzgUSHF8V7Z1V5xDNwptm7oUfC649AJSY6hJwhdcer2179Wv79NuJDtc5ti5r3h6MEjrqNk",
  "key21": "2wKtJV6HAqKauQzQNediZxGbRVNFbuX6tEMgZkVDCBzXLFmvSjGykDfhrPu7hX7FycZCDs8719Mw2kyZ5NQC8aET",
  "key22": "4da62fSmKu7o7r8UafHvMDtjD2HsLFfsRhycZ4dp8cdrVcMo6sfYV3fxnSePEZ2QXXbLwhNpz52seYR5Bht7YYHf",
  "key23": "3XtwA2HkqDuq4aYwME6Cj59eC3SUxQkK8gz3BoABKH7Tvpdv5XFzMGNzVFtVnE3V3rPkoGkccgEYVssgnP35cY1",
  "key24": "64A4vQz7PoXs1TebKQ3fQ4j1VxK2iAdeYV5RPaywNHhm5bF4ozQyqvmGCVgpDnBh9ELVRYVgHvazvSiVNmWdLc4",
  "key25": "2M99RBwqfwCQ5Rg7Mmo9pZBwzKBGXikSa5MtN21SmvFRvXVH5bS8sJufh9WnNY9XNPTDMq7pdhcuXeAydiVRfzc8",
  "key26": "3aQQBuTLeWTTgFEdtM4gezuKFMAuh581QNXLgCGzTL2TjTNjM9i4RG3pSw1yBXPogv2fUA4o8FVZxNs6qAy6ZVEj",
  "key27": "3L4jLQ63BsRub8jkuaA83FDViFo79uGE6Pk6AGTpaJZe7atooUgrcwxWhM7jBonS2WRnBDT6uXzBpdc84gVMKcxr",
  "key28": "2eKx23ZzxyMY7Ax49iPTgMFbcmhDQwk1QaBZtn6VezkMGe5tuGhA1D2S4tUpjriXm3LaKG6kkwrPgq1SRomy9ER2",
  "key29": "4D9n4Kdn4Kxntf6VCshHJBHkGKJrSj6HxcsBER5sW4oNbNSDVZerdCLVNKEVvp7nKgLCXVDeEWogcLJMd7GKPQZz",
  "key30": "2YBLXf3ViTqfWpCUURVwZjrxuNTRjP3nVHQE9uJPktKboVuRdD2st9pfYWXbdCt16G7MZRhH48tcWnoPqkMWBmTC",
  "key31": "32F8FoZKP4xbxKX8LzQgkc5UEL12jSdjwoZsQQ3DbFosV68dwW4e6fPsRkGzk42ytWDdtA9w19cbP3Bq1xLTHfSj",
  "key32": "5DHQbfXQsYr74zAEEk1rt7zC8Uyk97Lv3zgvdceVrWxMeagYCVgnBX9MkMDWtRMeznAsTVDjkuh6YuKQGtVJHy57",
  "key33": "4tbjjmaPU9Q95m2bPtTo5hKBy3WPPApfUJgTkqfBzc35DnTGWLPHypAkLfTGskdsTS6ikk4uHBXvW4VYXQJtLgxi",
  "key34": "XV9mWGa4HASwwqdKe8PUnkLDjnVveXzGePsgoJtvvDYRHXh8ZJNjfdHotmf2TyWDdo2YJQAzk5RVE5soFyhZyoJ",
  "key35": "2kkSRLNR2eK7migBgw8rDmYQ4MYdoEeogtbjKAvomcaaCTS5mUGPiEeb5LbD4gGvNjQ22MyVEt49k7XUAjmqMKaA",
  "key36": "3wjQdhxqVBpPxBrg5hnjYSixc7GvwS2tzYbXwMUr1697AYjsGnzJNawgsrQ9NJp7ayTANbcHk3dN1qbXtFMtgpNN",
  "key37": "2qUmG8mGdj3EABaNxAfWsHeWm6AxJB5ssAVSRNFh2LfXmevtFncUUNXNViucDeLrwgUnzJyVoXHcMCPdMVUQZMZm",
  "key38": "2nPZpxPK7B2yVScdAdKsY2jNcFFaQakBd2VtvPpGJ2eWR3gDN6aFzU3pwmr4nsmgRPwMQhdN7Scx4hzVZrmiEnQ3",
  "key39": "tP5vAWZWyHUYSouZuMB7oHk2WYUvXG83ubghEouGNhJFKazLZwyBrYj6LygfRdEG1CKZ2fZ5au5aq4fdMudHXQe",
  "key40": "2iVobbtQACaRpvaurA8zMv6NmZ2VWXTkxtD3F4pCpoCVcUQDfXojfWr99j79v544yDiBoQGoxxyZ51ScTNaZkv6b",
  "key41": "3H6Z4dGUVLD2wNtbwCC7m6Mt4q6jGVpeVvcczeMEfUW7c4jWkM9hoBgwYbE58Tiim4xGpVjjTNM62BaL84PN1hMy",
  "key42": "2fD48d5w7ZRyMj2QG1WeJy7RB7Lzgnu2qui2sGjbt8G1jffwL3nLEAAsR53xfsYFRmG4XezBmzn17vB3vymPD3eU",
  "key43": "35Yy3t1EMttWYwwyuPjDCQfSidfqXbExvSPZqdkE3e3YJ6uZcZr9oRVw1aBKFDrjoyBfJRAx68YHoPZBDqwuLdLr"
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
