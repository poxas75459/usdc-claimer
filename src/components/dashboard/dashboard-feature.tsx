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
    "2xa9kC4CNoKK4p78fPMF3pViPoaWgcD2Fiu31Azu5ZxR6R9hh8jU4MU7V9YZtVig1UAnQxLtXqKNbsiRYsMHHxHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qSr4rXpGq3baikYBLib5mrLaw2ak6Xa52EsMLNGpCJNBgBMf1PypP4aRvVZqe4eCvcEz7AxQr9kXa4VLgB1PRsP",
  "key1": "4MkcL91KhH9YUdVGiLEaAsDaz16zjydLdmsaWrkhKfUhqVwxYGoZwfUHYMnfUAkwSEP47hCF6grr2ZQFVucFsAC",
  "key2": "5xd55BG2Lxei52mvWQyRqMUVTkcva5yQ9npTBY8wyC8E3F19Vpz1VqMiT8dtb4EkGSrtzQ73P2F681F932TLi9by",
  "key3": "2znhr2roBtdiTCoQQmBEWQPLBZvAnecr5ZBSbs5NvBDgrYqw2DJDWNV2yJetYFStFrq2Bi1WbghBJJ2N2afk1JH3",
  "key4": "3Tp4THffb3VeSfM2BvWFzsrasD6uEWNHLoTPfCbLVt2nxqtSsi5KcvEUDJuWwuTLeXbs3jo6CYCT55ro2E99ddyh",
  "key5": "cTZi52X1CXMFwqp68EN1q4J8diezPLJe858XeF5oqrgCs2J2tD6DyuxpMkAZEnsbwNunSNPt3Zi3bXR9LZmErGe",
  "key6": "2RJLimRYkGXuQhWpszSzSb9AWKq9Lz2kThsDYgedxeckRoAQpWg7U69VuHDuCYFUyGBRGU7qyHJzZcKCogg5GbxP",
  "key7": "63Hzkao3o3Zb8N3AHwcyDoepyhbpjFMKfQsHpQcG2iKPhWGHHBc9JgRJUR1cRXAZC5KB9SpjXPmH46dPJGkebfs3",
  "key8": "3GMwxBmFnqewEaHc7AJGNaxtLnY9RV4DaGxGeRq7V6ZGpE8zdUEGVJj3KZMMKgBcT8oaGLDFCmvk5MnjcsKhFEaP",
  "key9": "3ygGLEbvqcNVJ3QNc782MPNDDwS2uELdfr9nCezWtz9a7sS6fnXLZ2arGhQkPW2V4Na4fEQgkEKKnoDE5yHP8hTe",
  "key10": "4L1MrWctdneQWPyn3oisSj2DnLGqf5f46gcdDruvjsTQ9mFXQojWDQx4w65bAYHehUxwDWEruigMNZ4mLoMbgnyB",
  "key11": "22iNRK5LpzSubuJ4VrCVpub7kvwtZHQ51uULqUUcExpD7tQbphReC9SXeSpuQn6BeDLes6XTjMTRHbLt9raSy9Gy",
  "key12": "7H7nkB2vvXn3x2z51agPjBRjywKqH16DyqTYx5ZuRVFLpdBAG5sPbLgG5XRJfCe1Qnkto2n75UEUNyAqUA7NJyq",
  "key13": "4NH66V1YhNyR3ZedDWBoiCeZgDh79vXNwWMbDiFBMvrfcn4qdzSbi4rNxohvX2gPTkTCm3MpNFVT1D5TETMLSate",
  "key14": "3o5CfViGMzGtYiJM2jBanLaWKRi5WMUMm3hzeqSWkihsRnSXEaCVRZ1kpHt6Pd545ExTJarbw1DAWG3opNzJyw3z",
  "key15": "3onbb6qX3Wir9qSiKaoo5xu4Sqk4fAEZLswwfL1GCuHhQBxoSJY4HhdHMjHbNGyRuwNTPvDYHd9jDUNUaP9kNEGS",
  "key16": "C2gASUrhxFbo19Nqvutf9Do628MS6HDuYriZK4cjcSgLWXuzjyBEoJaNM9ZCKkC1mNzbPvdTLm3hmCwGyePLSB4",
  "key17": "LsFNAJ9N8PhSwS5m8aPiaoWzFgBtM9Xv1W4kDNZozep1AT43dEmWEfME2o1p6tCzFJy2GSMDBSYUZZpiuB955Co",
  "key18": "3UGcSMQpxXisrLapDJPDQbBx5DJtNFcBcmobCPrqeGH5B4Vqv6vDc4m43fLB6y3BnL2YwwewrE63HD8a12eGZ65o",
  "key19": "2UFzkx4rYa9e8qzvujL4ZozB8SdySFAzTBKQopfkM991MCbzGoBEjzSqWimBdwzziA3ek1CcS5PXRP6ZHAdFPWLd",
  "key20": "2DM9WfrYafhfVmHg5hbwuCKr1uHu9Z57mTLeq6mHwzR18tHoNNC5kk7s7dZQ2EhJbKnzstpNC68ACHLjpmfCFi9M",
  "key21": "jiFfbfgtZXESQXjcP91bNsfmw5XMQTRza3PXoodkthSgavN8FnA4Z9iogdHVX931Ydsr8YVAZSCFhPKVieVyfXP",
  "key22": "4aMswPYLiT63Q9uch3e1vyK6cQghU7meXftGSasFN4ngAWKdmVd8LvuFcgTRmYQDE2ua77FtVCwZNWqjHnx1ieXn",
  "key23": "2taYXr1S1HuWfk38AQ3UhDw2QZNoqjQKxLPvQLGrcjYagqbWaPtwtQp3HzMRsH5MobCmoGUdUVy1UopDdn4DQRFS",
  "key24": "3jAMHRZo55BsmN1vZWciJkBXg7cLHASAtmcQMG7YGwPucQsu5iGHVenqa59bfQjo6GkdqQwYwmhHu1XcbH43crGR",
  "key25": "2fbmVUcYC635McZz8mALFnHWTjZHCf7NB5eyi9auRL5syhd8v8GoDtLUq9iG4t4GQhh5tcAP89ih9gwaaPjsCB7T",
  "key26": "3gCfNLhvA5xGdCmXdjR26zdPYPmRJ43NgYWPnkw5Z2UPzKjwJBg6pitopmnHoqPhQLPmjNT6o3otHeZM1nwKW1s9",
  "key27": "AMXwNpcAhBX2CiJ9T4pkN3cf5NEqMvjrUX9ywvwkASM9PpWmoGYC2KeXEU194qEqgAmqvH6pbHHwpXsQXgJpXUJ",
  "key28": "3xGfe8m7WqDWozdRXTERXADUN7VcEtbPXGqx77mct7qpo6z7SSvMRFuLRwBL1Jc1Rngv212Ei6FdmCZX5VRDDPS7",
  "key29": "2agY3YKNh85kzVag6y8rhniNut7FRH5FMSWzMAedqp4hSg4ZEs1A8P39wQ2wNYp2zTZheQrZUbG87knTjv2vG2pe",
  "key30": "2ApLhTYh15CPeKBKo4tpgBq7uxoX1AVxY2kyk3shcuFaY3fxGJWBX5qBYWNF8NGM6My322uKyN7HRZukr9L6qyMH",
  "key31": "4r3XJ8t4GqdNNbdX6BTyiRMJJ9HGwrWMkuxaXRagvAn5c2URrNfTypVmzQWyjc6UXJELRC8rqvy39J2MfGDFPJjo",
  "key32": "4bLykkQdHNBKULwkWuG75adEYZ4cDVLEhJeSF5cCpA6gdbMsB6ea4f1TFTtr68dPSbLotQpSGG9hi5NQEYwc8BSR",
  "key33": "312dePx97MVo3pNqrzokZf34AxaoJvvNjXCPxbWWZPN9T5GXFhe2JedFcRSjYA5cL8cfor5LaeGE9KEHMtfYUPaW",
  "key34": "47A3PGhg78Sgd56fwEBdwBVEjVsnUEtj3UutQSsW8yd2dswtWHR61J58EnNogrD8cJAfcMViV8qkb4to8AidKUYF",
  "key35": "gXmiHL6dPW8WV2QtK7YfxgbfRMvnt7mFj6PpZwPEg9LZRhwsr1urXqcPYoYGb41heJBBJtajjdPmywLrZFGsNC3",
  "key36": "5Q56e2tvMJQgokU61GMSRLg4tXfGBuFbefptqrekqrytDRQ6174Cu6f5pLmJDrSnEBLvJ7ho6EYAdCTWjWejPRH1",
  "key37": "uonm7Vspq364KLx8FgBkbgaTTunJmKry2oL6cJSVShLMn9SmVLeQ6B5Yf8oFtkgS85qTPCdA1nHP8tmB97ZHdae",
  "key38": "3vsUAARyndrxcYm9UukWNqy6J6gwnQq6prhTwexwUDcmBw82xhJTpDqcwdRhKEND1FBwfN6RwpRKANcCZRTZ7xDr",
  "key39": "38XTsc29ss17pDUHN8qKcPkev4YLzDRsmaMivwFTtEmnnW3XcALxmJrRMnyfapyDZWLYTk2cN4hFWEiVnJonye43",
  "key40": "mgDp7oSUB7mXscMubk1FB3PbfY741Nvhv3ZCBkXaxuWaU5HfPssQrzFzLSKn8Zy66YkpVEytm6pkqN3fUcDhY4t"
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
