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
    "shv8AnXAnsTSQcLnyjQju66Wsz8KNaNHBkU6JVup7QRRq25RBvSfbhQJKf9yQES2ESRbFpM8FBKFU39XTQT8mYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vWteuz8X4GJuhTyKTWXSaACWZS1oQ9LFio918cvpdeEyH3UcbLh53Q8vo9aTxRghnpCkFDgPJtbskMZtFVRwErs",
  "key1": "5B4X2PvBN5X2R3GrxKLHCise3VnPx6WFfapJUGTtjX8t9URWeGagHzZVDEsAdB6re2ZMxrX4FxGnjPAYCfSADNq4",
  "key2": "Wbwj8mep8BqF8MA3ySAyFXBP4TqMDHgWbjNQhv9jpSZQKt3Q7PZUWxuvyAGgtyywmbtVriBe3Tx4basfZcHeWQA",
  "key3": "5VDM1nsRN7rATsYN23ApsLuBu64nZJDdcBqafKdtcvhhiGff5TuLx4JNDAjk4gmFBXWxjsUiKuggefeoUTWGFtCv",
  "key4": "4dL2uUvqJtNkx1Fn5DSQ3cWwpqBnsBJTLdBcAHMeaw86CRCGxCjPqeHvCSjRSRk9eVtCayx2zjEczMKycLhonZUi",
  "key5": "4ay4G7LEDws518412wHB6EpLedakWmz9Q6DnWmm4uBHd9ko3c478mWstCRNMo4QcJJcFSQS2KbQUWPSAgHiCty8b",
  "key6": "WvX8ZdSwJkJjNg2xWmmAUTTLyndRbarr1H7ycNQCmnvDi5Er5qNEbWRWeKoXPwoswrQZQ9ja2JS15eKua4RHaB8",
  "key7": "23qcn6TAEpF1ZKMCHFyB7CWFzUpEeAGL6jd62wkk77u2sSC2WDCJN3XdnvgtSgHGMf8GJjHcQED4d5amAaFg5KGg",
  "key8": "3uZpz5nL7TnUmV4M3eqB6SM9nG8dwjr95F6D4c3FG7wSWb74WgALipmFxrjYnRuwH5BDgHcxSPydB3MeeSECdjNm",
  "key9": "4rqB8GpXs8t194hPKyBcC1t2BDAiLWX8W6qsmJWd1bGtDEdK2Q5pfXuM44T2CL1pB1iuRbJe3ADyQDZ73aK9MTfQ",
  "key10": "KkLNF3MXo2GRt5GAtieF6opE2bAnGEkbzdrU3y6sEd6kgCPXHYtwvtSkzsm1ipqKxfd19u9u5taazinWRYU1CAt",
  "key11": "5gAK2rUSCKSyoip7YRQJoh3abd6HjVYmhfK4CifyKniX4nDjhwLCaHV3iwdS27vTXWFE2xr61eJ8KpL6XigD6JKW",
  "key12": "2JCBKjJeKD4WmgCnUvS4QTFu4DTQqaaSgyjaseUS8yxr8cWfzYUbLxWNbbcDFAwjYGRoZGdUBaxNfz8oaVR4LUw5",
  "key13": "3jyTgkD12aeLjkZRBAJ3AnEQcGYnUZCsTLC28sHPmjosx8jwhghvKQ7DtCyjGcGXisCnjnwMQ68ucAijS25VMfLL",
  "key14": "5MQJig2iTmr5FRGMq2BRGvfKdNJ1sDmfkqs42pMQdMJBYk914da6T3vohoirbNuRE9EoyhTXLgoHx556dfExk6wC",
  "key15": "5FaZed2eXNRo6C44y92YLwFWt9xk7wGqBJH1ieLbmLpSHnpxg5Unk9ysnwsAEQxmuyLKMCbyswoToeUS6RL2D8US",
  "key16": "3AxNnsaZomX1p9N6i9Me1tKKb83Ev8e6dvGFuGF6ZqwcPGkVWfVzhkHC2WoU8ySfB9c3vCRH2fdNAUXV6ZZGHdjL",
  "key17": "2wMqiA74Zim3z7vZHSCBxWp77BvAAhthFQxwn4L967N6cCRMRxrm8BhYH9XrdunEUKHmNSCeeciJF1jd5Ppv3fUC",
  "key18": "5VCTw5YA7SxYr1VUC1aMwJdvsF1RZDW3C6MTzUv38Aza8bkG4jbG6cCw8RSzUnzXmqgCWpiteUw4DNto7amS1Mvj",
  "key19": "2UfMd8LiBPdr1iCR2thdqWMYuaJrk9hrX8p9ufZenx83Y8cqEjZVFXp7KVAofdpSQMD7ibQQTwEkKTngr2fv5Kwy",
  "key20": "5ndF4gkTsmyoW8cg58Ei8RzR6YfAQdtTTpGbvwgVFgeDtohB5DdbCr4dFekypwEidfiV6JK6g4AaZH1n1iZaWydN",
  "key21": "hi2jZgrJ5Vr2N39XRTDa28wZpERWrX5whgRLVGXZFjKB4TopmTbsBRgQhPgUTjhDmnsGAfeGW29rbqFSSyZ1Ubk",
  "key22": "3HvTj2EeVKUNmh5urUvARvnNX9T9zFmNCpiSdgfjePCNSYXjExm58X5EgYcoVC7Ew2ZvTB2v3sN62FyBH3RKfahw",
  "key23": "2MAsQuoffafWja3c8NBy4TB4yuEk1dHazeJPg99yHRtMsir6q5tWrMc6uxQbju7jmpS8jR1EC1uRUQZibvWJrro9",
  "key24": "5VW1X9CJ5so6bAz5htwjn9EbJD4CNC5gbU6J4B9EKaGHRhi6ZYbK9ooshVWSmy2RJEZUd8iJSjwHD2Pmpe6japs4",
  "key25": "2cNaTfyCv7sivbJAihtKHTcnKTjtWX6eUPvrf9httfvnT7j3gBEXwX2fVGoRRDv1GYv8BEWyQKE1NRFUAK9x9Wz4",
  "key26": "3nnCvK2TXAy8Wx3FRw5xJXA44XrJ2j3BU8u15yhcNR1YezfTdTyTWfR4gmSi1z6WpQbJVzgDYdvr2axh1KwcfYzd",
  "key27": "3T2GrPvMbsgC4D6EXBuqW2JZtkc1yL6DmR4gzoUQu8Xp1H461JeCPCGLx7e9hVVU8N19oZfB6vn5xN8JZQhUw8yf",
  "key28": "3RH6PQPtX1Ye5dYfaQDc4FZQe54BhTfE6RQVegTdgg8gNDeC5ohGbnYbTovWr58J2YqNWp1G1o8Tfm9vDrbDWarv",
  "key29": "3SkS5gswo7PzTzM84ne6FNL1VkbYcDxD6N3418ipXXMgsLc26XHrUvZzXQzv4NyvxcUVdi7ygV1UUWr1VAfkxWZc",
  "key30": "2zhtTJx9msA3te1mnDCNgtg2b5rjhUYGvwtDtsJkvDNSGocWrC9unEYv7eCfLv4XdTCcDZX36uD6RXdu5DYTm5DX",
  "key31": "MKceBRbAY2j3cgaFUjNcU4i7ZNAc4fYwCGk2znksF4ye1gQhQ4ahr7JEMiHdh9GL3BrNhqi1feLwA8nuJpo5QHS"
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
