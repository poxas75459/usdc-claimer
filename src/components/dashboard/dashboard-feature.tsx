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
    "5KZmBFrDMYdbwHu11HnMdmPzP34gThi2RcgHDJq443buRFeRG6CUzKt4Dwdpp4Mre8Zmuz6VmjuN7YynN9NpbCKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zpPaadD5gBm7RKvnCUiBW8QmmX2MpKAGQStvgmfZhbMB4dWsJugYMvTtK3kb5CLNeer3UGu9xr6tT64nGp2Csds",
  "key1": "m6MeYQp9frUDqScE7PzddQESZFMdnBxX2txvfZwSoPXL75oFpsjzewZBqDCFgMkaqPyeA8tarrtiCQ583DdrLTC",
  "key2": "3taRDsQYuaQMT6q4P3dGp9XZhmeRq4EXHbM17ypM1LM9Gsqpzv9d5HmbwFAjebphPjSkKFVLaZQH1cv7rmqVEcdx",
  "key3": "2H7oAWbBN8jjT4U9BNWzH4aajcZr4LWAcHqqTk6g7h4ktD97PFLxM6z6sAdEPxtPFLmu9fPTg238cermHHVaAwUi",
  "key4": "5uxkMvCAecR14CK4YGqg9FB4MpbUn7LNtxtP2eb1DikWzG6N8GaXuEaD7Q9wRkoZMimTpxbE4ZzdJiBoMYA5BCUa",
  "key5": "3YzKpvzNQHQJm7Tms2rpA5qYXQ5qqotDrWvXioAojE4EtqbYM3ungfemCcf45FUgNtcqDN5pApSmCD8z1pJ1ZB3U",
  "key6": "5zcg5UaoRwNDdTffs3JUW7bcZxk2186iJqDNPDiMiHDtXyhgEnxBG9P4FsyZ4Gu9XgSubiUwTFSWDWBhTE8Z4vWq",
  "key7": "5xm99ZGWTSDqn6L5qQjRECAEovaYoAzxGQVuk728o3SbE3SovMQnovaNuE6pBB4BPiFGmR1uyQxo36H9uPTjn3QT",
  "key8": "2CjCup1VLL98HPijeF7sX9barLjjnHcrGywTNz8MNzGUY2B95N3yMB1RbFLoBJu8SNsFtY4AZMB26J2AB9tLEosD",
  "key9": "Ss3CW6tNmFbgNyyUwFNSoUGHMHSp7uTB2XHFtYHtGaj4EZp7bjPEDycW94hMmvb5CedRc4KdhBQ7sfbrAmxxV4A",
  "key10": "2mvZ8ZaFAdtNmsgkQ4BLkxj4pwdFQ6tGsednPmub4UVgzsHdUbNWWcDGHHpTEjSANx6u7PZ6bKLhZbTPCcPE9Xtv",
  "key11": "21GiAz8oKLnJZcfthPi5L6V9xaVXLC7up5VQWnE1F5VowPWNCN95HpnQyLqymz8Hc25CczqxaCde13zoQWQCjdZr",
  "key12": "5Xe8jNqAA1wDYVFx4vGGXi9YWnfoMt2y2aFRWtuWAdT87mxTpWe8uVo89YyEJnbDpNvur1izzYodBeE9rvtQkzF9",
  "key13": "5WJvRRepQsZBDic2u39ZWZ4MMRfUrBVg9eTTD2tfiZpZPo4hjTwtg2KDRqdh1S5CRUhptSKYhKnCDAaaJrgDg7dK",
  "key14": "5QwAPK3hwA7UAVvUZtY5m1VQsBifVEQ5VmbcSZiWbA8hWxd4ogppFFTcoqgbVA6yxzAexC371L4J7rDNDdW8JjF4",
  "key15": "64oRk5Q4LBYibPoEVqmpX2EZSXX5ZPrrhxrePfeTTGDHgcjPcbQ7Ue4qHEdkvc9HfQ1Nt7sQstGonPH5PsHjVCnP",
  "key16": "4z5zpeTRfGMLKykqZBaes7SVj3ZdMHSihZxxNtnzqTuD43mnsb7NnM1TtmL1uTw5Fu7gnS4zoWYhwQ5R2uxxxmRB",
  "key17": "2KnWt7U4phwrGH6w7RzWCcDDSbryAy7wycYsh5Q6AB1QTSNEJ3C8sqUsB5yke99dM9n4BGT6P2qu9z4SQYz8rArp",
  "key18": "Akhgps5fimZk8TR1mJwPsG5nmXT9kLN8wLaFqT64gWDgUg4FHG5Sk8QWqmtVfVNCzW5VQWJ7DBxYNDbdFrFGjMq",
  "key19": "cXU5rRXeqbDcqvckUMXSsu5q3jn2HSHNyuYr3iXn39qX9adoty5vR4CM4HAKVr9kR24yYvJSDs1J8szUktEoUmC",
  "key20": "3pFXRNgQoEnvfqYucG7HzbsuvKKnuD4uRvGRewYfRFG11qvUrh9n3LkkAv9mE8hB1nDwZoMqKiBp8c54UqKzwyj2",
  "key21": "jsvQXDpvQKcnm6S479k4T5NRgtfsFLLjSxcJAt6Fp9DGLbXNjTUcNbGSCTPyUpmoAViCiY9vEsQxrLSvNGBrdiZ",
  "key22": "51LB7DxMgeJEyvWmMtnp3Mc13FPWHCRPtEru4PtKnccQYWemxtBCWDZobByPktgdu2p4hN7PhzxsAPL7Z75uvVVZ",
  "key23": "eZ4CNcsTG6qqFAsyEvXbWmWpttsx5iPvJ7vCkrXqyBkeFcc8wr2W2t6tz8aifXLdZg6mQmEDueGu2pwwSybkXxN",
  "key24": "3n5yAsVK1VM69kwn9Brrndmgn9h6k22HaqjMKnXABe2BiZJQGe1CYJJ2ZnTuJkeeZv3qfioYUegBudyroBNxKKEm",
  "key25": "5r1odJDJqmXbJ98Q5gTGi5XbVskontUtcDiXJQFUH2Nb1HftyKTQTRiHXduFspiKsYKF6kdcLcF7rq8myfavGf2W",
  "key26": "4VffQ3Jujijeuh2r6yhe8dZg9WxCf1tETdAzU3pFbBotFNBrZMVpRPUzcwcpQoejr23oLGidAGKUTaz62WqUkZXs",
  "key27": "45vuv5QkbLW59BpMAnLkmwcWsvaXqRJAWXfhUAoGQUCK9qFdT4c2VLeVDKkVVAQuCk3ufM8BKVvh5ykXP8vTyUVt",
  "key28": "4REMzbiRTXiXSNdnc35wfGnajvZeiYhrJ5FSNmMb2xg8GcLX3ND3xTYdwdNBdy5HzJx3SNTkjSmXaLsJnDXBWtyC",
  "key29": "46aHb33Hn4wBGmPsFdFmFuh7hNrWQHDNYtUYJjjwSkEe2k37qabeVBFg8n6Zgc1ov4ruYyieTo3Ba2dA9T69xD78",
  "key30": "3gqDmyniwDJwNmjLHzqjSmcxZqjsHFPUt928vHM72AAZ7DGkj55i7iBj6GmQdLoHADd1ccZoR5obE7p1E8gDeRgV",
  "key31": "5TFCr4CZ7uQLUUXLHYG6cStGUu7Sg1n7w34dLPporN6vEtRdacwuDYz5STxkX4DAGbyNxwSzf3LTC6QHZ3macTT4",
  "key32": "2dnsBNM3mGA66nQvfEYgsUZZGDt34bAU3Yp2d9gQVeEfsCR2Z7zJXCSww7MP789mKD2Nx66ai5MqSnYLddr9u7ip",
  "key33": "2k1h86KM3WQSXfFA1hU8tgUNzPVVuPUUsguG5ujyD2FBSiYLjPpLXUKLNZSM5uUyDnHUjZDf9mMgr4Xd1Z2tYF9e",
  "key34": "2ZHHzigyp1aNaRcvqPjxn18jFGG9LZEwpDC3z9WtkWKFD5eEykBuUMxua9iyN3B274qx7DwQLaxQbtaFdNL8372B",
  "key35": "51Ezq4PmYk3xxu8qmAjrimCsUMnu5e2mCdSRJGfNAxwuVwfNP7fLqnEpvFYUMmuXpDadpRtxg7vDqDXyGsokwWzJ"
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
