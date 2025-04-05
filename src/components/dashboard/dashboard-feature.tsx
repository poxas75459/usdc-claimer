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
    "5b6PwKmCi5PBj18UDShAidz3LJJ4R5GtZDUGCBEgE3VigTDYo8bKnvu7p7A1xVSnqjD9jafFRQV2WTLpvtikUQ8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bNtEeiP2HNo72S9mvfMEDzFXDWGu4JCsySdXJh43A4xmZdP2qyfD1GygSJCMncREWAtoCMypvYh2sVCHfTLUub3",
  "key1": "B4arLPJnf8TXRC27xSrqFTZNCrZU5MEZPtonf5dBvVitWrDWTac8a8pYoEevVXWDqbeQA8pPbMxnod2kWX1AmKX",
  "key2": "HrHr4MMSRcjGB4hADms77ktAbzuuxMS48zooxGmdZHTD9FgwRaSmiRdpZ58jiBmdpYxbk3Mg81FQfLC7BhXAVzT",
  "key3": "3nkeR3YrhaMxHh8AmSiykzt9orFx8A53ezPthasF3L8nvykLwbxKv1J5QdJffRVMwYmSrhuMzURmpnY1YNt9Ec5p",
  "key4": "5j6K1qmoDWfRhjRCdLjjY1aieseUmtJLSP2r5kyRwXAnA7nyqQoFqzMDVZbYHhNWHZBZ9KoXDcxVvy24aYrTMmW2",
  "key5": "5BJxZk1xS7ebGCrZxEvxm6stbGe8QvATmAeDfmFv5TbJ5WqebmRxoRuGmjxHJNrqscqC7HFaQoDCkzD9oJfGMR3v",
  "key6": "tUVPegn43PBNgqKWDD3AmfKAhCHVcJnBowpLE8Sfbd5CSvY8Y3BpLJ8Ks6YN9KjyeuiVe6nokxg3zpjVNhFM7jr",
  "key7": "2FfinwNNDoQcjBjpCAKdCPYpu2t9asXXnEpweNyQfG52538vZ3TaTGkyWzoZn1AdWiCYMBPHpqawRiUX8YDWeH9D",
  "key8": "3JeuGj3uHRyiNiaaTu1cNSGcbiUwvH8fiqwRRG3swGdy2m47Z1DYEhyhqnb6rAo32aiBispBW6cuGt4CXpGd9GwZ",
  "key9": "tVo76Y2fS3oQtZcBMCBXMgBAJhsNiE6H4AM6KZnYmXJyD2Rn5mhVxyAbGiURm2wcEZNUrKUr3v4BYFxUUztinEf",
  "key10": "c7E6kmQxrM1P94Z8NGoAusWmnHKyn2MsowRaXQazMb2XDrvzcBH3rmcPKHFauExLC3TBs6TVsShjUygR3gYNQpj",
  "key11": "23Ux4aN5jR4UbFZ55eavckjDk7DmPCGWBs9AW2mBa3iwiKCv2UAoKFtbcjiGn565HhRkhqB33V5rpCnZt4D7XMM7",
  "key12": "4wpTTfiAztm6YBRs4sy2ohqdhjrD6VBcKe3MNg92P2u6DJsqK65bw1dWi1tu9f8dC2GpHj8NJnibCsXgVn4JcZx8",
  "key13": "2DyZU9aB1ymYA171QuptDFcRFdXWvDqpMZTDpRWspVpYHVPn9KMCaWDPJnm6HAvf7uD29c7whL4254E8H9SKaXCd",
  "key14": "4B8nGeujoiaPko2FE6oe8UXyFuR8L7gFRWciBjDz7ktNfgYtrJ9iab1qCqA2p4icjNfWMZRytRqbGKmEGCYSkhQi",
  "key15": "BwhavUiVf2MwL4tEf5jmjqdGxupsy3ccDPoTUpekEvAWrieM6j3cTtu7kQxvr8Cy9QP5HHJfMpaACfmJxFAPdvw",
  "key16": "3SiigSjkeF5HoeRUUxvn48HMNcxYUEb6VDEtseBpt79GY56z8NcXcmEXBpJukup7NyoJasMRMvJimYFngHAsxZsB",
  "key17": "5FymoXWC6kMVEM4AiLAigoUP7K13DcveaCSNpBQG4Uj5KEuGMgg5ZHw5ig88cj1pU645rkqpYoKzVqiTQyLDLuYn",
  "key18": "jW8Ko15hzTon75BgaeeAuJqCHbUDeAWnZXpL2N2yFeuYTGjUNNmw73RmjRvDidbKnwhQ659nb5RqxroTw568oHt",
  "key19": "fiDfnBeMBhj4g5dsSeCNKZmUfshKWJ1Tv4SP1y8eD4qhXQEzdYevFDShf9sFPzBxNWDFyzrRAPwWKdwXBesRH6h",
  "key20": "5eYzmzLtRwoL7jh8Mq9sm9hMvHQNQoMp3BA4nHRVnPsr5WKQ2uy8bkociGGk5jmouamHxHxoc5RXbQ5NY3CUjPGH",
  "key21": "2fhrdQ2T7cBapkBqce5vnN3QGdJknyp4cxoFJ2QdydVmWBsWRgWUHWFv19iKJ9DRe3wW1itG3cCne1J2nXhQACpp",
  "key22": "43PeT3e34jwCFEZfC32ZFTGvWBNWJmn9aAhcdGoiNp72yHevupdcj89k6E1SBZQA1JJKMU6h61mWdThsqbvrzcix",
  "key23": "3obaQVej1aLStKxhBVnqV6L2Z6UAhX9qkJJsRpHz2MXwwVbCSekCgTibr6uYcfzMxiWJ2e7YGK81onsZWBbY4HvK",
  "key24": "39EKVzh4JWekXs2WzdfdjD6Ux76MyTm6EtxtPozcr7TQdYRogepJh9xKqYdss7LoP5AoW4JzdAE2wsW3EKZXpZmM",
  "key25": "88n6u6KbQTghGEk2qxoeAK3f7B3GJKmw3N29rfH7MuVtja11ddk1yTkQPvY1rqe5JVt5SZbL9KCWEQA8Gx4Zpyc",
  "key26": "4Spz4iTHMbvgRrHgLCw4ZK7FqDFvCWGjcR1tD5pu9hjc98gcRw7nMG8a47ZKmYkeZPMZPgpqJtdce4YEzSaaHMvh",
  "key27": "48j1gienHfhdtJ5baLxJCaPGpVUHVF5Gp8nz3gzywzh4CawPxdUS1MZfBe9Shd9gJ38QwhmLy5gEC9Xxgw7CHjva",
  "key28": "2J8jbAHiEuhQuTGvyayfUi2M16cL6taU2VnsBKFntnJjR187otWbavFXw28MWAa6cxNUf4FbJGrMC8JPh4nusSBA",
  "key29": "5sPU1za4Gm3iGaJ3GD6189cobfHqd1H7cCDUL2kxfHG6EGi4LzmZBM9A6FVn2SFTh2zycvbFQAUfQD9xnbvZXzyX",
  "key30": "3aXgYvgJSPkQGEUzb9coNmVfWHt97PZJ4t3JTHuKPDScNABz9mcvoiPGsT2SrnnQQGonNdfZ7sb2Z1CLsCR5TKie",
  "key31": "tP4SUGWavt4M8DTfnC3ARvAFBTcCpBByc3Xk2aZPSJDkiVfvaQYn4YEvC13KCukKUEAzDrFgBynZr1j5YJYgvUQ",
  "key32": "5BSB2ujWq3hWX2NqYjrLS7K6sqDkJ1cVW9iCRSF6uH7LRDanMuEeN8VFDLgKUHxY8do9NkVSat7Tvgw1577cJ7RK",
  "key33": "4x6AwRxpmhozfs4XisrNhbbREUEYSW7AES8E7gCHW9QabGUe3UQmoV9hjkjWHaoTxaf8Tz2QTHGEmPD3kXZzLNsa",
  "key34": "5StVGEDUafYHBcuYzGHdjP4gZxpYZiRVhySws3BdoXP8TEKcnu4KVexfyW4xs27csW7Xa6FfWajDiKgjkspwhgRV",
  "key35": "5wy3zQAFD8tHpeJVecvKieVtmma3FS2Y6xAEGSCDfQWvgo6HaR5q63jbi5Zghf6Ahje357FusHMX2U7oZVmHK1U7",
  "key36": "41TL4dXvmHQjmsJedpuMnL5eS4yWUqSWwxkYHMKhf8fx4sL2MjverdtxtDb51pNbFb9DaXiD6DeX3rdyRhBJ9SPy",
  "key37": "1ki4JhRkeWnxugvRGhRwVKe9sRMwUt2hvAwyVrh8kQKYgsWHSHmHy2tXCd3K4bcHVya2ddoMfUgpM723rYCSRTb",
  "key38": "55FArL7W9PQP7hLXpMM2847UqBg3vySWfqQawZhF7bqvYNdAX5aLBHZLeLrUT9dH6zGbDxzLKzgUJ543Ugr4vVuB",
  "key39": "4dgx3g7oQEAVUEbzMZzvNYwsynQtVQthAca72hBgLf1pmMMR97oa3jBywBSfFDzUZg5DuTWCyvfVQdDxDXTFRQwZ",
  "key40": "VApW64TbxoC2kRRYNfwFR9cCpjXffKrG2pnWEMtAyRAaQsxcHq6PFQ1gySiiCXtNSt1Fcj3as2ALbbByEmA2EAd",
  "key41": "62qtapdBH9w9kUcZ4D4D124fgAP1EaRsrWJ7wSWBmNfgh4yZPGdF46zpHmHFyBi4sjqiG9BUxjunpRTeYa2QSC3B",
  "key42": "EqCTwaZvteDbY1g95qzjSMnA9AgNd6hXma2KEJwQeCtyDwsDiyPNwFF7p3N3zGsNF1W6zS4LB4sxfZz19fikpaR",
  "key43": "5UeuHPLY9QhH5sqrx9N8rvSfvrUEZyjKYCscdAnXqJ91LWzrjNMSBQYutdxHXDiGev1NUVu8pTxkH3AAwXPJxrp7",
  "key44": "5dc41v4kp4MVr11EysJXFMzbYhexTRzKcnHwxC2NRky1eWPiNsfnoHUKk4df2cixDkTfasvBNASWMfULGJtrvaDy",
  "key45": "2eAZZ9izvh9zGzzchZFTVsh5gXgbPvSa2kQ8pruZKMpCuUMjvfQhzf2y7CdsKViU6FSAVu5TacFUa6dzdZNonhaT"
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
