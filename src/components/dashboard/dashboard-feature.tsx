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
    "2EXuStwtqH8jLhqrN9ikVPnDpYrX1ZeB7cAAq5NN6CCe3yLufUUAZnUw7JeThE9wEneXiTWDbhnrXPFXrysoqHve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47YEaEDgdxn5SBaakrvU5pXryb15oZMcUjWrYcXnEQ6SPzHgrAESbTTDbLUkNxfQQeh1WYVJ1oiHgqAnK45TuqC6",
  "key1": "2DoPqW1DeGN5txoMK1hXYUgix738WaqbFDpjdTeBJDkr8mLojaurg6wAqud6eb9bQ8VXcbNBvfsF9xsezgUEoVP4",
  "key2": "3WDZzqP2ySGhTnZeBy8xAojwz1GLiXNzSL6xLCoNgege5s4sYAS3PAwD3NRPDFEdewjnYCr4s46jLiLGDBonTTdh",
  "key3": "7H53WNnfLdbJXH4M1W1AVRuxtEgB9qZkviUyAUM2yoiBdUT86KyjQNTzcisega7tsXb2h7P26q92yjfXyZNokRd",
  "key4": "4g4fMP75cKsbviciRSW1gj5Lg9VKfQj9kHmSQj5WLTDKY1Lp4aApCFxvzKQq6TGNpZfcDMn6y3jqAXCWY6sgDYZo",
  "key5": "23YgwD9Vnr2KSeNHJ9xM4HYabeM4Zg9Q1Wmw3oc3WNs7iLdWuiBb5xkp6fZ6uNZrfKUGs56ePkAcp8kA6J7LL3b8",
  "key6": "5b6q88MvMZFaXKNFCAvgghj1XipeDHxtF2fGiJswEsLRpAGEXJhKWwz8L7JN4mLRg6bsqzPYb9wcj1yTXKXyuNfr",
  "key7": "e6sPM5CCG6tFxq6JqZ5Djwhm9nRXdzWBtH6aeZiV9Ruvtm5Ym57HAHhzvLfZjg2CzdUE9LcWZdbqzUeLtJoKZqq",
  "key8": "3wzqRQiR21ct9BRukwjX4xEePeWCJsDu1JkFRZ6LRqoYNG2QGUwPbtmkk5UkhpNSHovirNivfVXJRuEnw3LLpvT7",
  "key9": "4g2StdRJn1KRztcAuNQ48CqZyQpdpBJBD6mxCb8rMnddHFiszZnU2ZKasmMLqfMTFDfcC2CFd16RF1WjSSwt6bXp",
  "key10": "67LuGqDW3EfLhiUwnm5reuHaxE11LHMwtnTGUM6DMWtjhcoU9twUpW6twgqsGVceZL3rQYAid1xi4r9fTSdcBrKN",
  "key11": "5wxMfXRZufzg9PpwqNkQPyMWB7S98DXgswtNNa2RhE5UgaTSwVhP7PCTWq2nrbumxUfoTwFmS7BAaVMcojq2R83L",
  "key12": "4zsANdTTpY6qAQsetcntJupiCkruEaQPMxEgepa7HQjiZAJ7Nb5YGi1iH4YfV8RwnH721zFdAVRLdHSCvzmbocZi",
  "key13": "2XPCmqAsdWxPxsD3NPCySsmb1aJbc5wDbxS2TTWvwfsyG9TkMpTndxfEPdfMECqLbnEC9eomRHcLy7Sk5Hs6yNUm",
  "key14": "absT1BrkYui6ibG4K1jka5iCxcCQNL7N8wtKuAM9zAmQ1EUDvrcDrwN5uvvVnzMuY7Zi83YPm3tKoDNBDDMKWCD",
  "key15": "NTStqhYqWCrwsu8YF9SMEcZC3K8dXsHQncDMMbmdGfxUjhcuotBWGfcF6d3DqfmHcysCBKZxV9oF5ZpgARTXNCe",
  "key16": "gkUg9pFUXfBinsexdcNW6UDYXgCHfYghtVnd1P6xdimwz9mZuCd6TMdKiBNWPMXADtoBGJY8DkmcsLgTfUcKsaq",
  "key17": "LBdixBnMtmr719uoudqKQFqiTPpjDUDVNfUbsrnJ3aKiuZuKxHKEqWzoJDDUGZWwCBSkdbkyQQEYJbPKAwR54tZ",
  "key18": "4WG8e33kutyzRRMhp38vtTARtrFCURS4NKZHMVxKgWJKicLUTqBBcYS9FutnL8ubCag7NLYg1wExpwvT7y2usnM5",
  "key19": "5zZTHeo9KVH7MFVqRvF3LJRBsoxmWAAHvbdbETKjpNh3NjqHr5HDcG4USnk3gKeFTm3AVxe56rt6XKTxWKTLMBC7",
  "key20": "3Y2JiVUZ4yjCTZZHgvBxfJ8ZBaVuUJzLRtdRuABMMkgwiZCQBGS8bpBcmRdTFXz9pkaXyxFARndPHKE8QyuKQ5j3",
  "key21": "3cW3k8jMsJaHqAD56WmzkGMCHjCVwxfCanLsr3HefXjoN6N5vMboxyNnsBtNwVHUJz4u2K61nSAdEFbRxbzx6izY",
  "key22": "KFAX5U1P9yXmNgekPk4fdLgaAR5gzDGwAVybHzLiEdwyMnwkeagu5sJUNLaoG6gH8fraAMgfcvJXhqAfAZdL1kt",
  "key23": "45u89RwK6amUajPwBmcsNqUFAvJWueBNu42hZpxLGsKEnAGHDdJGsCtwo2x6d8qa9HtEE7kf7XDQDbKZFpQSdnNt",
  "key24": "3WAV5gXPaj7b2VHCweZuuV7rp8DaN8GTd8tkDZr68SzncS3yAB4iwUYAAqjJAGkWYhQJ3y14zGAr4zS4CAwXMxF5",
  "key25": "5SPgQ2Y6yZNiSoXnZUU3L92D2efoTGk8rfpiGRNRiwoJsEhAhF689xU63ntPBzDCqnhe5CSeAiuXJZXyEN1w7GbY",
  "key26": "2FNf9SG9wjAFKtkAvZbjq7yaTmodzPDJ1YajS11Ekn31YUL5UYrJWjkGpDphJgkuMghp5Mnz9dwNHnVfx8Ct6yYQ",
  "key27": "35yWkuGtJyDsnHWj7yBVE24TPLaS1p4wqx3MFoiWQ29Q4NzhaGZ1kEZ47zfL5WegAghQUATGQuHdxc6L3uYzKLVE",
  "key28": "47XpsT3zYNH3YxU7b7zi2jcLiA3xNP6rXasad81uQzQRU7XoN72Y8tqy3qaffFWEqZTGCJU8mdR64gBiu6Vzzfdr",
  "key29": "2modG38Saf6cZqK4bGXsrATVE6CSQM24v3ukPFCdMzwuggziBrSJWB8CPobevCapfmkb48MSWq5zgMu9uv3uVuyb",
  "key30": "5xpinA8sRVvF4DYsxRq4AZksw26LuBea4t72P8xf645K4YKzP1UiEquXoRBusxaAqPfsMBkvxG3uNUF8AzwDrS6u",
  "key31": "4zX95yMKiHkWjDMsXX8CnYzdQLN5oYPNMuoUccQqcJXmmSUoxFHzx5APxXyqVSiohNUa7VbZUrVWjsEDLkKiUCx6",
  "key32": "NCHZopVHX57dvGWBn66f4SDnAWnaRZxYxCr2ZahEGkJ21fw9MZN2KAozrQKQxPnTLkyBXLn2ihf4NuiQHS8JFY5",
  "key33": "U3s8BXUiPD737jXpaAnCwAyAMmaWymgFDKCP2hSWkXTjyqXUv6aEdTog57A6HDeQuGKM6tNtPPos4Nbm888DQhe",
  "key34": "5WGS8VE9rJoZXVtTePCP18dbv1MMs99knu58C2VXA71vZapmZcTyGrwYtPGBJfecLLx4N6X63hwtrUqdAqhAymcr",
  "key35": "3R9BhPesYNcQygTeEDqqic2o9nWTw3Zy9urHNsPjXFPRSjnN6xmGykAqmApT653GSyF7xQqd31DiASwT7s4WNcEY"
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
