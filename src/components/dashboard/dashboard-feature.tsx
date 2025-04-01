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
    "5niLWwNX4LJBg9AZ5nA81CmSjDkwfGN3Scm6i49WpAD8hc7Nvud9AyxU9r9ZVbjfqVLvydeLkdsCcBT3u4gM5Xq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32tqoWoMQAPqAyJs12QBzgrd9NKD28cUyvmjHoPQ8iFqk9U3VMnaJx7o5423Zu3XAEtyFvvo6KAva65YyzXZcCcJ",
  "key1": "5BVXU3ihy2GaLMgqVrscEwG3L5m5yjYoT3PDpdZRPYhFugMRFNYCGfqXLVUoQ9hqaLiUoSArXEVvbgaTaTxDPKZu",
  "key2": "5DEqXu8jb1ZqNYd5wsNPNQ5vfWJYUfit4iNkKQfD3ADRgpod4cwdP6X1NmJBC7vvHvuKzjxxDHTEJVXChw4Wedpd",
  "key3": "4g3TdLHN35wHaLnpDZBHmUBwC7Z4AYva1N8T8UG6xippSQF2ETGLAK8DiUZSdSm2Y7x1JVdhH4MvzmFFwCGPt8kQ",
  "key4": "2nNMFja6YnbjFvTdTHsGQVRh2ucnxrdTCiFxfrpWkRdkTVEKrsP3ip5J2kUrQmhLSF7M9JFvZNm6s3R97NLD51cA",
  "key5": "3kMWnciRuWnnQLLffVuUmWNwMRybwraz9pqpQ4gQYg4vRpVKfHogoc245Xc9ZNMzhnfThamdSdnzG8EJGVWVjTBi",
  "key6": "FZiMoRBXFGaJQsEkVFydK8jb4ENHuRq29yDp4AugxGxTafAMWz7ta4TuroToUFgaZZPMQmwJzH1uKqKbAKQrfV4",
  "key7": "3SWFiGwxJc7CfqQ6LPnzFg1aZjGjxSupMxabsa7EMrpCQp9uysKM4gQJhmaH6v4hhhh1wSxC8fiXw2sqvSTTc3r8",
  "key8": "VnT4GirbdvdVctdXAY1mgo7v3Wv7anuoYDWY5tk7atGKQwHXJZLQCki2SZtrHeoJ1nSmJq281xM4KC8sTotBBSC",
  "key9": "2zbpFnNPnEpL1nqkk92jHVrUc3csab9jYMqMUdH87jQRZ8TxGiaRFZrs96vereFyvdftBhFMJQHXdd26JBR9TZkr",
  "key10": "3URu1wmMwkVueJgcY9Sbd98oMQGXvHRWrjaadBTZvgBZnmDaGzG5nsCXSShf88FmHqYpAaFLhHmcGr471piLiAtB",
  "key11": "iWY45PbCnNUqWJL4SaWtf7H4kSgeVR4UC471m5bzZudDKivS6zajrS4TV3GuNqexbDUYCipjkDFpSekvRKp3YiZ",
  "key12": "32RBvTLts6hmEbyNq59H1zxQXb8Ct8uBiDc76rRGChnK4AwMih6Yawngw9HQi4vcKFc41yfWQwLYv2SksEB1T6WV",
  "key13": "dNhxfUg2THZ7W8PWbeQVTEybYd52WKazRzCULux1cKnojNpNPEsPhWg33hMvNYKghv39LWQddsNfHMuM8X6CTr6",
  "key14": "4MiFHbVSZnqgXKKFicQKoFbgZSBtLxX3ACERssBA2fcKMGQtNmiUqNojYjN7WkJyAAedbRxtKs27LqUXrJqkoNBE",
  "key15": "224ZPWymphuMsWWa2YreAVAHUxtpy9HBpMd3crC6NUZeVBNR4q9bAX4MSVnoVuwyYrjA45t86EibsjVpfgzMdeB8",
  "key16": "5Sx3GSVWaztiXaA5x6x8YfgfvoEEmCNX9CiQWHUv2D95hpsgE8eWzR7wARvw52SQAc6e379PY3CyhvuXE8g3WWK1",
  "key17": "2wQhmyhfiXZQdFwnWWSyadJeB8n6cid4aCPtLFtKRycHD6mo1sn9kYVdXzYebEdEvXWx6P1kXi4DCkSLiDGgHYCF",
  "key18": "4y1ek7t38oKTKZdrKh1Q71PpubJr5GHUVcVBUHYB1e1Bsd34j9baSoAkJAZc4kCEydHPpqYuBHzr5vvnLxkTG2k9",
  "key19": "4zsz4BksSroomAV8JCRtTjEtFvi2zPqMWFMBVLwsy66KoB3cu6WJ9ETErqLE5Ag5yM6joe5Cky1bqFJrXKzH6eT5",
  "key20": "5vr9ErTQinytGBsMnoKWp9m2G4q4kC1213tvYhcapHRxrzTdgfp4NqVhgZxfEU8EDc3gUQiwpS1huvcGcmjzh1eB",
  "key21": "2sy1JfUVub1wb5wV1uSJvFXHvCnuZ4SjWZG1tB7DFM2qAyKXjZKymRqhBUfyRm9EU3o2hfXQFEEM5srnCbA74PLt",
  "key22": "3Jxtmx2aFV5EFiVbTtvdPPeQFYttFXQhxJTdjrscgVhaNGtAjMwkfsQ52kVXAYT1HGNnMKm3c6CWrhr21hhUmDZg",
  "key23": "5uEZDwGRfhhWPt8MLygTWbm8uFEiojLgiKYfTzDJBERe9owmiPSzyZhFakCngEBZLoS9v1zqVtCo2Y5TKBFoHZSL",
  "key24": "4kZVCiLA1eVa6b4hhqSD9ee8NFkH8FxcKaqZdFvwJFNqX34mVHz1YnAqvc5o1T348n9b3RCceENYaCYPuuZkMd5W",
  "key25": "47snZHCKLhAZtLGW7yqVg4wR8GtXhfW3TzAYfyZYjfoyUHQW4hwqqm76KRhHH9W53MExX2NpZgagSyGHmy42ipju",
  "key26": "4Fa5K8kohgV2cRFzWWAtjnWQRZmExwaX9UKUSnDKR7a2KJSyNQDxzAPv7BsdQsXZLqTSUV3s4WGV1HvPCFy1LhKU",
  "key27": "31DNGWZrknAwAEWwb1CGEpJd1KrfRwBLfn8zDjswdWmZEPktmD7VB28xvcBm1HCJEKoM46d12vKXxV461xLS4b1g",
  "key28": "4uEDReRDJwxDypeqVZtrJJ8jM8er6XdLKzK29ndf6P8vGghSyHLrEGSb9FEgFN5cXy2aKc9S4nHqxFRfbQ19srhz",
  "key29": "bp1HVnUw6dM3Zi8gqt433md6z6v26AwhnHBqRdwnwtr7Gow8nwKJwn1FBGYnkuik5DiTLMp363YRy182RW7PVVy",
  "key30": "2QkMkVWuvZPYtBp9tZaKhz3zpmBF3trJGroF4qiv95mbj66EydzNjMXcVkc6yJFv9vrQ5p6LKZ9kme8HaTErdgyB",
  "key31": "3FxCojwgje2QWQTQcTwJ9bqny8b8KsJ1xRYnEcY56JWZviMvm5dQXhv2EG9Bviuui2n7ryoQArtTpWzbs89ETabA",
  "key32": "4a4fwjfuhLEYj1tjKh7Fc6C8jTkcQRhimegfXLp9oiGUb6WKbg4t2upjnCmTZfPdN2nrv8bbEh8GoviFddT9m8wg",
  "key33": "sb4PWMnhuA87yQeKn1TwVEqciYHfkPfMuye2wqgr24a57QwFpQHFpNcrZG44vGQf2kbXUKrQceUH1i4NZs2BXrt",
  "key34": "2bjJ8kG8AWs7tCY3t927RFTYrTyxEUWrnUFq5JgGuvFrtWbqJg4v3o2wn2vEZh4bMqjDn4QgS12ztVzxGSSYGEDP",
  "key35": "67TMmLa4ZWYoBRZJZWRgifCk8NYb8Bu6NZqPqRuvmjtkHb3YRuKcAUTK1sk68yKToyo4PHm1JhbWvV7HRFaiQ1t7",
  "key36": "3hMP3CarKRY1MZCbjg4jJTb4NoX7zben4qZY97eMnRVyH49rB9NpxWCrJ5CzSVXUPCS28YhjwYkHAcWe8pGLpZaH",
  "key37": "3st2bj72u6eBjms4YX3UTPkYQbqzfcoAAZboGS9jMXjBNWN8QCusKvcVWZW3Sq4vSrhnmpFv7dPgftqGBJLsjAE4",
  "key38": "xudhPiwTWaXJrNHyAwq4o4Zg2XHAFKDPJNrRNL3BXioKoNK8o9y5gYrWGJaEA4FYniP3TfT7ZJev26LQ6hhmp8a"
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
