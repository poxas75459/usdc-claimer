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
    "2iwF9URUFfTNDKZCtqQ5ERdxxodTmxU2JPiV6cWmaWzmpQNqdCYrnkbBSNY8xAdFMkdc8fjp4HBD2rbUhiFY9o36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfbwGReuFKh8sGsaP8v3osas1S6Qe7xJSMHe9rd84NsKTnCxoYkquEEW8xucARb5TBygnNmSftGmi4LNCxTGV8K",
  "key1": "2vvhjQcw8rTcM2qtCXPxfjEEfzb9yV9WwBNdPfzxDPoNGp8q98JEzEKt4K1DBbvHQUgXUopLhApt37qsuSWVShcs",
  "key2": "STdnkbe1TEGKhG89oUzu7dcSsnPMpnZX4LSGyb2dRVrvjh2jwH6fXoiszWTHARfM1KtGy7AyjSnyiAhpZetck9V",
  "key3": "4g6YE9v1cvCZV8K6fPfdkxPRt2GFp8ndeGxXZqKhGMiy8VfWbh1AoDAUDk1ArtRoBV86FkqFXt6MAyAYNoFJ4ou7",
  "key4": "eRm7KkYGRdgTdaQfKQVu1eQUZqRZTBo1sJGgzQN63xocD8X7hmaFyJKpiq8QnkU3JfTzwXLs42MHYNNSjjZvcG5",
  "key5": "3BUm5dfGjDov6exar3tksUgKMLpiog36PtXyVerW4FVj8qwoNB7smCHZaTKxhJHTHKVDybaX5pEfFBcdat83MjE7",
  "key6": "4LbJpZuLLgXPzvhBkRwyfZWo5QPRJfcjU89VygDDZNjayS6iz63NSbxJWhFNdSZa2LRpqYNLPFEnbK4Z6upixa6k",
  "key7": "2KxwKYpeH7YpMxtr7HWvNZ6tykaqSBttv1y5kWsCVUgkqXZrLM3CKXSDwyA34cQCPEqEJVaA3ox1dsU8fjfAxANA",
  "key8": "5ipRqc5aTJrJEzxqEpqoZFj6TVn2XJabvRkT1pYNk2vJAhsAMMep4htuw36Ju3nLJkGm2sj2Ed9pQk2yun94whs6",
  "key9": "66hNnbNrae3nXAYMorAyQyJyvfQQiaBW4493KQnBUxYDGGXcDK3YQoikHUMXg5oUZB1uZ9e8rU1vM6Cu7YBbZWdr",
  "key10": "2v4YHzqpUB384pvEZSYry4Jx3zMR2MvMZW6JEgB2TrZ4LKbMP1Nrqw3auQpz3Mf8JjZT8GeN78DPRvovCEcNgGsb",
  "key11": "37ySik57TVk6fH5Swh5DPQDgHBdEbUvGVAHCGdVfbQWwkVq3VcZL6zksH369n8PB7LR1AHDogWhyKUXjUcbjtvQZ",
  "key12": "4oHXJqNdFPAxQJhuJspbM2GNb3H9e4TRGDgUVVD1WSztWjyo6sp2oU44HQWR1m6JoVY93bQJWdFZDCiXgFUnR3vX",
  "key13": "2iTppot9YVNEPtAh71xxvHVhT31i3XtAtQdxcNVDJTyZ8ZWATZUgdsbgyQfFVWRaWTACCksZ6zVvD2gMAU1t2qmF",
  "key14": "2P5QHFNp3dsARykj3Q3gbhgjLAV5pZ7xsmKASThrdTGMVY986eY6VTVYRVNhExR2BWUGmWJZMUakY3C2asuRRyB7",
  "key15": "33SvcQtqco1zHm2EGyfuKLB2b3jgWg92GwCjtMDrP9Adc4rqcZMviWUEzD1YgCgfFkW9pLqyznWFruVkJLA4Bb5x",
  "key16": "2Yrkqh5frQquUy9CrEjTb2jmrxhpR6xFNZBqkjjS41FCVsjQrdmgGW6jVCNwRSPPL7J6dVdpiZrpVpE9rw7VAboT",
  "key17": "3RNpuDXo41RoBCEKdNoMKz8xiaRKYtdcBfieaHbUhiJSbXNqj8tYUi6w7a1jFui9XB65z9GDusugcn4goJCBK9E",
  "key18": "3AkRME3Lq25yXGdoVDUtqpTNRT3rCKh3M16r38mkZpyzp1ETq1bK5bLwmJ6mnnN38Fbrdw12UbgpQZ164QRmJmEE",
  "key19": "opLdocZUL6yHh1jc8ndTjfpYCdEARHexV9PbniZcfHVmsFW5PhUVz5JgGWg1KoxJkYDy87dEgWagovMoPEmUX3t",
  "key20": "24xXS8oDq4sZ4CGe35tHMVwuW3oJXWqE24fSUFqT5mEoLCbZ5EBtWF2FtA2tnAomce2dNk18y9u2CBR7HYRNAXa5",
  "key21": "22bZMydpJogRnKxnxtyn4tu3i4WAPciW8ApwVTxkcTPmiRgKrJgCQDAvQRRr6yRZxjLzvkv3g3bYkomdwDFKTj5R",
  "key22": "mFXwYHwMMeLxop7VfUBp8kBf1qgYacnAXtcKdxRtRk7f1X6HAodx89N2DATpcTQsk9g7Yn4tVd1Cc4TmbK7nvUM",
  "key23": "4zuLXhwJBvf61HctxFihukeM6aKvwsZPFDiQtFNz51NMxLeHn5hMZz248VK1R4QjnsgrvGEQ73ApGsVPuGKuicPe",
  "key24": "66y3FYuPmoWNh5TZD1Wres167wrYkT7vbpKxV1AvCNM8X4TiemLoZKBLZeWfNnZdmPGw4NV7TNFavNUFrU464kyv",
  "key25": "62DiRm9qUupaYxExaXhknFnh9tdvk7FTdGJikqJr3xVuoPAbeh4DbN6EBB4NJ3nKmU3KM8jKf1s3UY2Vy75F2qDC",
  "key26": "2698yZo5heCzzBbbjoixSAn4U1xzWMjYzXgx4XgWwDBHRStEbbFeSnQhx3yb9WnBAANJNkyw7JhncwVPiJcsowJv",
  "key27": "5ne3Qvsfkzc2S92UpZ4BXXxm77GQWCdMWFiotQyNr3S5LV4h6gL4Frhh3gocG3CUbAeZ1USyM5Bc5KsCFhaVShfu",
  "key28": "4DSf3Up1QrJMLZ3xPiqFEvjCZN4U2oZq6AnDBLBNgYdipN6HUJA8q3FbAyNC6tDQwQry1k7VRwYGyGuuWZaVTjTf",
  "key29": "2jAAP2uZnSbhEKTQaEtjVBsyBK7fZVjSQZjFYzqDrWPcyebWGN8ggajmdrExSaj5RoatFv2DzjGsJCZaFRhmrkmQ",
  "key30": "2FX3kJVxRru2WsGbnU6NBcfDrtPTBkXnMqncA1DrwdbUoXmRuLAoDM8yoKu47ax9ovPhUCcpXNS9FKJFyW3zVEY4",
  "key31": "2JycKAa8uLTh2kKfk85vpNQW3H1C8RdXPW3JuLTmNWgsELMWgLJ86HWUtwHv5ZVyopwyFpDsgyy23xY27GTkCuGW",
  "key32": "4FgDZhujFytDVauJ1jQhogjhwhqwJ4aPBXF43PTiEvHWJgN8P2dbmxaX78cUHMFCG1V97bCZ5JRgsTWDQfyrvMaU",
  "key33": "4yorQaLgDL8zUBc3SQHhLGQzvne3aStQH6bpi1WthM1wZt4isEFARTUFT3g9tjTwD5r1vsrF1WQs1StpxTuqHsqZ",
  "key34": "2amgmeFAWLwSccRkkQZr3UuXPAEURjaBE7DPFLPoNGRysoBbxNFHy3K7TXufTqLUKR4Y3ndF9qyJF8pTFP1nJWfX",
  "key35": "5qzLkfZjBMqLGpMsBDTnjfYVxNimuAdgZpwAoBWeAFTvuLBvBV9k9sfWFCEDqGxiSwixVtCoNMPGMFJbE5FTv5rr",
  "key36": "5S8jiLdGTZDZozsbM8kf19gvvLF8ycW9ZJE79KTj83KxopS5Ug7NoUN7gQvrCxGGskp1pdS8mFxM1WB5eLqFEbhM",
  "key37": "5He2hoATCD2eLEQnDF9qB4r89tqzvSnv867g2XnGZnsvhXjPECwdSgg5wSGrXVy4NBGvjdtCzSjMwvqzobhKBhv6",
  "key38": "34s1oTTyegzyU8zzLdkAhcGGxmT7NZuNmoXUKm1LDXfGxB2m3pjGCfeQ84TT6JxxLKZ2m9qusdXAqmzrAHKRVpVS",
  "key39": "3rdLVa1RMc7W6i5PdjTFGd6qV5gyzJojY8NwUaEMtTnLhSJSYftivChzzPE6NSx2fLMtP9iwSryYvqoo7zZCs57U",
  "key40": "4qiDje9AjXuiod6UfjmW9EXeQpBd6fdd8gLfFhQ15CmQg4PoQZoHkcJo5y17BTnru1wUjWQPwNWFweeUxwPgt9g3",
  "key41": "4wgDdXSCP89BRUyN5jcFnoM98MwkZFh562bhbiqFLKCWYk1iUnJGCdueeFtYz6Vvijwn53iVaqW4i7VxBRE1jzPT",
  "key42": "n14mbt5K9rAtf35p76wvRgwihcTb6wNJe49gbE1dDyRSKcBqgyj74DzyNt1DhPGv37pwCTBNXFyAsYhGaeGUR2P",
  "key43": "PevhjRh9ZGDBR7F4FTB3uUMmqEAuJFxEQ9SqpbwzNVcVdzDPhxXcVMfTcqK6ad21t7q6YCccUiEsLnc4riKpk46",
  "key44": "5suT5ydgemJgmqDYjjP1TA8peT5oZrEXYynqbHfiei7i9c1SWrsFVBHpNdeV828S1rGW3JsVLuaU6ymSVppywPjt",
  "key45": "5fqFP3rW9E3GEpoo2s1DKHBCKxM6M1LxfqCciHiJhYGCSss74wAPq7DsUrnVdfDuuWsoFdwbWq3aR5wwRbPpyxuh",
  "key46": "A5T5zgciZYZuUM5wedGeVjZiApv8bcNdfngVa7dFpCZCLyiJF8rG9xAGqHRhUNG9DegogYye4nTKXWKfRw4XFgM",
  "key47": "4obMLzNcYmb5iKhCGceuy22V3fFg7FVs6BU299VeDbrXjCs9HSi6MQciMkcBWrjJfrUB5VRWajECxVSxKxFy4sFZ",
  "key48": "4YiDZaFbwbYbn5rHbXohrirzCYetiax1aXeb5NVw97foq3hZ6NBSaDsriHQi1McGyH724KifQ78RcaBTCFQQ4f13",
  "key49": "5ynfHGr3CRGhxtnnc9PwSZikyva51PPV5Je29DdVXzXv3dHsK3zjs823UXpPFWdXdeXQqfe9dLnyecUm9WNHrvbm"
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
