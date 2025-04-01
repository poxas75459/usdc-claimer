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
    "3ckNPihRHAPhYK9bsKwJizWtfXDMHUoXKD4DoiMp3FdnfAAVHiS7fTmR9U7Qx6heTFeXf6f9HLxABh9XxiTWtdEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZTVikXGzWyvgMMvn9a66jeErQ5U4kNntgXdFvcosDn1aJJakrj6twnZM71LdbYkqeqBnPdEwUL7cqYTh4jLYizv",
  "key1": "23PKt4VvfehegosN9BHeNvewaBL7RKYcWNnEArbju97MMS5tEYANRYASWiVUfT8XrmFsKeS8Hvr9VzHavSZMucsK",
  "key2": "4F366cPFnjnwt8sjvKt5KniCLwG6norUGLuXUpv6bYnuaEbr8Xwzgz6DgmoLCCFdBR9PTovaF4jGpw3HKNUCZHVj",
  "key3": "3Nse37DpFWrXZ9imckQVXpzq2GgscPmVA2XZjv3vmXsNSXyZjRPVeND2UW1LFsWZVLWjtXTaRU9rM36tv5EdhaKL",
  "key4": "XZqsZuhU74wDjr4Yk4e4Y2K6xExs1cgCUEkUuefqnTgUgxck3QC63jrc74tUCeh5oTBF2BUvJbedg1oU3oapVNR",
  "key5": "crSNFgLmZsmuTVHkbATavtomtvYr5WckjE1JMySPgKFBuPiW8r1rpwP8ibmZiA5ZisggHNURdgJ7VFTt5cbphLb",
  "key6": "2dXz4RHinSy42sNB6vi5SrphfiRKKRMz9Pbe7QuzwsWNuLEJSRF9NM1xe65wKf6D8TtLjSejX3aADUoC3vNxB7XP",
  "key7": "32KRZpbG9qZ9NZH6Y4rciNLJuBGaF9bpWYQAFAzoftUfE55Q5qHXXm7SQZX4xWS2CXPtaSjFYinqfXWqy1msuVVe",
  "key8": "52TCTFq7TCqrKJ4JkcoHJsKRt4jo3Uqdm3srEwCAeKYwji29cQCMxsvfB4iwpyBcxtwvNqk6uNZjRjaDD9fnifj6",
  "key9": "2zfFRv676AgUuok74cmTk98dEJiuFnJNn2TjvdaKRahC9wm7vfGvi3zWgEgviFoJvxMv7UHZ5vZpBbQWabFuEXSc",
  "key10": "psCZ6gWgVfZs3C6jnugYoKMJ22dYApnKjSz3UismHcJipT29LnE2oBWRPuVjRR5yteWHAomgU9SAZ7ufSq4PqYk",
  "key11": "3WpUDu69CbH9763Dd4fBT8uPqY592LXjyS9F77abrm7KzyTJy9SPf22NR5WAgeS9JfTAfT6QWUzyLAq8mgJdmrXp",
  "key12": "xchzKX1hj3Em6ryUBMkf1TMWGAWo1KsSxhcY9Zo7mHuwxbaC5RUL4YsoPdGct4M9nYQF8TsbMGkyKQjzQmY1W5o",
  "key13": "5w9sUMLhFJgxqeW3tFf2w5e6EYPw79YYSaUme1yG2kLD1TkLTg3U8AfB7wxepZwGYvUZKeRC3MygadEDjzF9SoPf",
  "key14": "5Q68xQ6fz4ttoUcxetE9nz9QmD6fraCbZ5z1jDJUGZbt8b4UnBJjEdJ84gBs3VSYeT5und1TEnbii8MTQ3WLLSKS",
  "key15": "42YyZh1rfSagFNzArLAFGz8sACvjR8QsGFnH9NfsXa6RNxTSiF8qSgvVhFbh4p6ggByNjNby6fzWW1XEeUdBbJ8u",
  "key16": "63UFkRFwqSqYckaWyd1vGfP7H3HmEnD49jRNg6dkterW963Z5bwQm8H3yCijyY3tkNjPze1Zx6m8fwGUUbMC79xm",
  "key17": "2eSjLiKxs9DfHgWJ33E4fqwyZMQKHd5WqttsakWSkF3QxSHF4xgj386aEG6soH3WsfjCF9ieQfY4Lw7ppsLztCMx",
  "key18": "4VdrpJj7ypP1cZuw7dKjZ2g3PUGA3LF9tRT9vvf1ZqLZRrBVupE5HrhbkDVZfRC7Ck7JP2w3WStsYEsYuzeiRAB3",
  "key19": "4UUUBLsmDLXYLrCe8hHxfr3jV9SQd8eRUkLASREghfDq1RyUUZbDLDeWJo1cFXpSBpJnvmAjsxHdJ9D1mKsCfNHn",
  "key20": "4A28uf4Zp6Dj6czsscqWNSQYtRcm7tZGCsFBDz7WEFK987rQVQ29LydWASrWQUdAh72UeHbZCw6xqkzDCx6p2ZJf",
  "key21": "2g1iqa6DKQqKcri6aZvGBSq3HeUPFDE97DVhf6aH2Mx8DTUah9E4VoJw5mA7U5Bwfb5n6LbZKrYvPpk3H2wzKfyu",
  "key22": "3dvshHTHtuSZSAkMjGjNSQ5Hsjq9zFKVTyfpnrVd5ic7taTwKLeyMycMbRYqBTei32YCSSb94Z81FSNALBhAbp7e",
  "key23": "Ns2vk2s1SdqfSkwfmndXmnKmyncV8ns4cHh5MDBF4VY6K9Xh5H9p8d4B4Qm8zmr2xVCQWorDVewfi7GMDyvE3C3",
  "key24": "5tiwzkjvqiDpG2PgnxdfTfn6yh1s2zzMUj9BihZgsrCkwxJx3oRDKVWSmPwu66pkKmLGLzQF98yzRaM4rQANqESp",
  "key25": "24VY6yPc1VmQhm9Hhr5cYShB5ecTpiib3UjvPBDY8HRyiRM7yyrv21t6K6yHnickgZ4tbL6ndgDAmNtxA5jAbUTZ",
  "key26": "3Yni25s68D7Zx8VaqFJzWcmvfHMX76wQDQLe4f9Zgk9RPYUwr2VBxSU1geMBtxdBReLSwNjA76q8Fi6VJ66H2HUf",
  "key27": "2xRXdegcD2Nefz4hd9SBjskn5W1ME3Ch3r4tRbmxcSz64cUkzTUQ9WdkyD3UyMaU51TWysdxmTVajsabps7rP887",
  "key28": "iWKJGasr1gk9zroJeJ8CjDXaARB9KpX7hZJkhozxoGvCnUT3LSBvpi5nkofS5LnWHZ5pygfhVa5wsYANtFAqYok",
  "key29": "5wwhVw483AKZGnMEDyNGPgDxpxkHqF4f41BQBwRtbQNV7SbrxeZehhQRENkZr4WMnySHyqtQvd8pwqBoEkN5NFqL",
  "key30": "3iBmZRrB7qa1WBdkUc5A6DU5i5ixQk37vjwVtpEsawFcHp8nsXe4Me9VL1qiQN4zmoH31GMrPvsXJBerrxBCC2ES",
  "key31": "4VfAZTthqA3Bn4QoezqCeAuEjCjmRtQfS3Edz3UEtw1KoopgrfxQJCEJVGzbDYx21ZHLJrbGMViJekCTHWWyKhjM",
  "key32": "3MjtzL7ErZWXyvKYDYx1bso8fwC6fMXQPPJipN3fAxcjjkx2Fs6X42sTdLJfhEu52V4MQp27QVv27SVc9iNxqi8s",
  "key33": "2a4gttTEhcxMS4Xc2xTQeNcnYbq4VByFi1VNWpePCX71EYUWidgPQk66YnpHQ8bEYZfsuUmoVgNWpmtf3jPMkuUM",
  "key34": "4fJCizP8zFwUpRTYeddfgx2r7kXGH7yt7EULbxZYBSioUaU6p1T5EotFFruXQ1gspX8pW2MBHpGPF9j6DY5vfe6D",
  "key35": "QpyxDtrXtfazgokVSetiehEVCH76d9cnogQsFKbSa8ypWMPAv7BEPqHSEku42sy2HQsdRyrpwpuiGM7BUds9eVU",
  "key36": "3ACbUqLqRjx1znnfFptWmRctMqRp4kDHJjmo8tV8J3UjmKDnYL7FdzJfTXWJyU42mvtoXpxoWx4zkqmVc7HY9GW6",
  "key37": "4rm2xSXnFMd9S9RwLJzzmyxJjLLNLSXQJ9iUvqH4YeCTf9pBtPmmt2BWah2WLVHRwanHvPSkNPTYmcpCyRnUm9V1",
  "key38": "5kbXBdY6gm14RSSmLioyzX2oNAUUHM7uKjts7mJ1VuRbx8jGbVBUwUUWxW3zzyNHzgJeerTz5DsbV5vPPA61wUk8",
  "key39": "e7KXbtmwmzLXHHAssLgxSEuMcYctqMU51QmoeQvwK6yc2xNyxekEgcifuzbCxTdEL89WUivEMCJ9u53xwawHCw5",
  "key40": "vDikvyjGssgaZDMp9scwQD919N8k3hLhRxFHXLbfrJHTeczKMutzvfvVNTm44aHDSwxUeqRJ1dZhhLRtEMPBvtH",
  "key41": "bFxJphXA3K8Hg5DNErHcgG6io8ewPU1sec62pFseCg7EkU3CuKurz1mpoqe2xNqXwj9ZqWFhmqwd589XvcN8hQp",
  "key42": "4T7zm9mduqfAQ3FobPym72joZrCVSLb3sAMmpwCUKJE4wDazdX8vB2H6i7ozWB163StVTKDfV2ZFycYgzYAjX6Yj",
  "key43": "3UAcyeFcdb1kSsidZNLqi5fUSAyU6kXKPzeSHJY9YcqeSjSzPdS6C5wrZnkJDrnGBA7NsZ3oAH6p6FscyTPEbaXG",
  "key44": "2mMiwWwMZ1dzss1HhrjKyqAGvGFftA1ffMLqfhj9dWziFFA6C2J3PaqNyVgv2Jd1XEeK3B9yfqebkSndaKtyDk57",
  "key45": "56y1NPCboTPQtcdUU9SBHZDcoo9CcP4QkHhgynt9MhnShJUfdKCyVrqEmqEA2r1gnatwfzyUAvi8aXsJ5ghiejJ6"
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
