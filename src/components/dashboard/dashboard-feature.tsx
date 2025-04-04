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
    "3p4GhXLNo1fBze8dqTL5QVjBhzaLDxZCN9kGcH5K8qgh3MvpRFuBNfWeNpVevWCCHenSXgoJr2jBiWB2KdCtrQMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w7xYSKrtNsRFcSoDc5Pj1Qqh245e8dA5zsZyAGenV1SqhuafjDKGKd6dz4RXuM1Xja6G9FXWjYJRvD4uZSXnoT1",
  "key1": "7UoehVMuu7Nd1wvf4dZz6QuBsJu7KfTcD5ivtgywqRCowoTGZuF4zpPyVxTczb96VA28tb5Q7pAyzWDSNJXxQGZ",
  "key2": "5tQUt4E563MK6G3CsvTDPLsrKT6nZfTQQ6mLgFQrKJHfjKFAEUmS3EewKWN85Cwh88JWPqdqLpPHcMY9mQ6vDoHY",
  "key3": "4YkvApYV1aTcq8Qcsm2J8BmMuVffkA2qEo8tkNr7ueR393Av71QBf6rzmeRnB6B1WH6W9nzKQtfH4hHPRd8tM4Eq",
  "key4": "2ccfCLVTXtbAGCodebJAFjV61h4BqYYi3F31SSyQFiGyRxZ1PWBdXzSZPM9nf4nx2SszP7VQ4RpwDz6nECj5NPxc",
  "key5": "3pG3mDYXMeLCFfZAiYFJuu6eXq1DVdwgycBg5Sq5EBD9TiMJAHdYw9pKiVsQEsbUhUbuBS9cGTwXzHFhXQnbWUoT",
  "key6": "3nPaeEzyQYgRWyjiGx9zYSasbH25fpU1sC5vE6cL9u8TK4jQjhiZRGV4c2n4zh9i2RTUfFg9txLf58sidWXuDDDt",
  "key7": "4LchfojwNUDGgVHHf8hYDHXzxiqzn8roshAzBPnED8E6n5jY9ARHF3PdjrCbBPrBY25voHfVLrEdGiCDxHKhcq8v",
  "key8": "59DnknAKRq7NFB2wzvcSFqtK6V97AWX5SgEWA5NqZqDqoXf1zttcy2vqunmStjw5YG6BYbZp4K8RoKRw41B9XRdc",
  "key9": "3v9sJQsRgrUSWnVsH5yTxUGCk61DGcNjEQTifay1Bw5QMLi5E5Lr2TNSiK57gDzCSiEnjChciyKaowsjtoNTUKXR",
  "key10": "4f5pY7erXayQgNnKx2kSVhv1zb1agsA9QxkrnH46JAt9ZpJECRzZEb6WgrxVPj8MBSfh9b3bcqTanSkZF7AJYHvK",
  "key11": "KKD1CAKAhtYLKSF91F8YGmCNpYftUbV4NvXo9kmC7rECfJSNFuGwenH1Mkbx5J1XsoStZyysSVDYj4feUFZ1jtL",
  "key12": "3RXZRxXdRg7c1P3bKyQStoMtwLnvEpPhXtL62ubNMtjWxiU64vwWBcqmF7RQ4K68pLX4V7RMLBDMhnYZ8u1b2gb2",
  "key13": "2tQa31r7XH8FPPnuBHAzHt1gydUjQydM26TJjvJa1nHkPGSs3vHe9guuN9LW6Zaqz86NNkUHhxwkyyzz7qC6cq2j",
  "key14": "4ofM7b4ugNUg2mXUDDvV1L97KjYD5SMdaBWjLPf9MSyFr78CtYX7wE888D3LmFq8g1HPr1Hm1eQYeq19rb86UAq",
  "key15": "4cz33KRxK3nd5CpbphnnNq6yZQLo9sTo4Aw47ieoabq66yK5s1XTjhoHUfZusj5iqHu6oA9ddZghJKF9kF9QCsNx",
  "key16": "mKcHZKqG3kcdLYyyjE7fgzaTD5B31mKfCVW6t8dY8RHA2ZwcFv32gLVUD84esATCKRusM1VHGzFtcjPQeKuFr2w",
  "key17": "D9CkkgF7e2NiqmWiiFqNKMBJJMLrvUmdpt9o5WYvNWsQZiNn6Bw8iqznEapaaXBPD7KikLZvCmM9aaEKHKSC3aA",
  "key18": "4K35Nn8o2i2rajTXibQND6YZPaL7vtYQ1S6RHUzkeUihFytp9yZheFevb3Cp3DVrMPHFx43qucM4nxZRSV9ZuvYU",
  "key19": "Ci1wSbpwaKmpYUYUKLhx7z1fUhsuz2iqCPFcLMn4gsux3w4QAV2wUrJFKMHeRTbayKJZvzVKuy7i3yeE39soJeo",
  "key20": "3JzHVHuU1BMbRwisa754GRJ5bDcVNF1Vbpk5KH7nbtzMJHkZee9RycfRKbGs2k96bsx82f8GWX1E4c5kWj2mNMAn",
  "key21": "3pFXfJnhJANG8ChfZkMBLNVYVFGxofHHKPXtELjYUXtKDp2iE1HRymQ6K7hQ2T2Uma74mtLeHEDD11wTQXS5GLku",
  "key22": "mJ4yxA2pp7gxHi2A2xAYWD2d2yeXqKTKLhqnCzJQtNQoxBTfw3962J78uTwkjjQQaCKZa4uCpidjmf2RFHsramZ",
  "key23": "sMqmbyT8eC8JX8fsMaWPqAPV2g7ydQru7bz9GwxJDpb6uQuMYoSHJ4ufFemec4u2tsytFRPJay4zcQsV8nxynYv",
  "key24": "5esVPdmhfgp24SP1QdXvMoY2hx3Usyu6y41rbhJHisTGtXUJizGjE2mgpYSEiidmiags6U8cDJ5hhHrt8WQxUMWP",
  "key25": "3bmPijKYCqDxVvM7b2dvV5SMYKPmZrvWro2bemjfgMYzTziubGJ8Jmb2F4UMR5MGKHYzMwnHFJodqs9T3Sr4Juxy",
  "key26": "5cTQztrTeWTMj8uVTBLZnxAM5CX7TXYS1R4xMsFDbeWVJgPZzSppNYyGBuwFu1Pg4sBsMroAFEHpTzxJeSYgk6qc",
  "key27": "5wgVuWbf1wWrWcDLuqSKbJYWaqV9Vc3Tvh9Bxs73gaXrfQ5zUUrXV9ZuJPXYEtFMsNkumUkLukcu4thnjSrqfUJL",
  "key28": "3xNFiZBewYPXYGT96XUejf2ookaQnEzcFV6BPjxYGSU1ptdH3mWiYzQPkgmViurzHdzGXBjbK2xNNWvan6tD2ZQJ",
  "key29": "2hg22p7xzQ9mG3kFSsJW1baRx8g1JqYNqvyWTppSN1jMMFpPvUmBFcYQicWQATq54vuB2xhBiRPP7AjQ9m4ZnVHF",
  "key30": "25V1Dx3P353QwBfFFVSfWwaVu5sM5ZvXDbUK8F4DsXEC42q8rUbX9F9BKnCLwxNpVmt2MXts2bNPjAR4G7X8RBtR",
  "key31": "5B2mFrtqZaTHsk6pp9hMtnvtqszKsahPrYiWSRFxnkyEz5EsMXbTsiCvfpQZdxHCS4HT75q9dzPuYpFk22TP1oMy",
  "key32": "C8VffKkoQETyWUoDhnHhXCNkSUYP3FwJgXLVMpT9oaSEmXTfWhmMgonU2YQxXs8xPpUtpBXGiRPyVf4k5XparY1",
  "key33": "5gF59Zzewu2VbhpbTgoBjmskrkgNGqvKVDiPaHFCz5ABSsqdGLGop9n2G1zbRpFZD7V9ZfNcLNa3m5uoNvaPCsRt",
  "key34": "4rziYA9x82X6KFiyF7g76mzR5oCuXSk2duF5VFwz4f8VihvrtAYsFhgtdG3QGGf7jiLm1hRjHxtSMMGN9ij1CoVB",
  "key35": "2PpGD1Fhmf7yy8sejggt93REPgZ2KUvh9UezAqLbcp9RtUqP3VhQxNT4xkQDSH6wGuusRjsf3u6vXiTHQ22yJrCL",
  "key36": "42WApczt9wt8LggxVZAEwM6gaSbKpUHZqTMhYoUfzHAFQXZiPtPMMUJFL1BuoxbU4r4fnCwo7bcTNjt7TRNYKYRB",
  "key37": "5mna9KyJQ8pKJscNqq9n6AV1r2v6JUg4y4HQUf8xYATYJZuaX1jTqiQvt3K2Y6Gj46Fpuao3gDS8meGtg6Yt6cup",
  "key38": "34C8G2LhnJMNXuRb6jUoCBMkYs8KgvKa6nuDzbvhqaBtnx69g4Wj8aiKTUQVBHTjARKRaZ9PpKYmHMGXvTKEV7ns",
  "key39": "3veZvm6PGLRYZykL5AZRPtbvhvQAruWh1H2g71dUvARKPbXyuputT4gNE2yMWoNoZVLoWiQrJMnYc3ofji2vrZwM",
  "key40": "5zub26AEUiddTrg2UBnKsPJC3ono7NVY3ZzaUwWk2gHhQwPsoSMoXo34PVAw3MvQ9JtxKjmDzAAzK14LCvhYiGaF",
  "key41": "4FnyfKA3xe62RL99TNxQGoX2vxsW3Bz4Ys5MqajzFvCuW6j7fPTvjgBPBQwVMFrVhANN7rPyfpANd3oWfTKR8hfa",
  "key42": "2iWTAdS4YM7uuHeow2cwmQYmRyPif8mhk7EVVi2fD7Eez3zSwEVaY23f1ZedEuYTG2MW3bu7iJVKJFyTK48vXCFn",
  "key43": "2Xy7dazPufGX3pFPH7iCPYvGUyazSsKJfby7J8DQwX1DUSa25J32cJwnsVSbUx3JdK1k35db373kSjEQjKfVrVGr",
  "key44": "kdqzpXGWGERWNRa7PCAP8V4xE2AVHcK8ZApjoasfBMzNKVkzqEyXa4CkRPKDxLEVR7ADQG6n1u7H1mSeWGU5gUS",
  "key45": "5xLAJe5fDAKe5xC8vYhgKK78RXB6ctBLTtsAg3vnjoy1JRdSDvTZSS5vZ5WKQpbxn5NJbEqMfjai1B3puVLT6Zxy",
  "key46": "zsL7xoUHaQD51tSjSxaGprqNjZpnrpRWTmBaJLhYyg21HmgpGUDUH6jJ5NBtudhfq24nUM36xHLShGuXuzdLbZA",
  "key47": "3UA9uweHBZCxKd46XRkb6n97FHYuXmMTEowAYAoUobuoUQMEvSNrkogjGTtRQwdCZxCYn2CpWS17N9KAq47Vjxxd"
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
