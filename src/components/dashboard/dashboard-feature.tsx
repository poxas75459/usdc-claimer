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
    "5iQsN7yG18qwYhywQJiwEzXFJmoRvusKXLLspoVa4YjAcjnfoHBEi7pHqBoqBkeqkX6kQmx9V2uTFBU7dTJsQBfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PuoDx5CxgvxuMRF2R4LhLatm1GKCNxSsy2tCXBvMDSewVVPCGY9djbVSD9Tm37LwnYaWWf68migZQXY7tjy32uk",
  "key1": "L8AU4GdurnStNZHi6KkeCWShKLiE29bbxvAKWPwffDUcouAXd2nv97VKNDwuGvWyk23CnfTp9LfBib2jLhwX7n4",
  "key2": "2wy2KD94QCqXY5HrDSESv4xAQWk5yPdGBxiUqCiZFT3rQYDhdL2dnTp37TaidCzTbBCUPzgPaTBThQMhtEPz2r2X",
  "key3": "2uyWXeobHqiS3yEWbkZPSXUUmbpGFVx9s2uWdUNC22zf3EkZnnNXrBS9Ha4fWtYxzC26Qi9soWU9fS8p4RxuuKmC",
  "key4": "3cYTtyY22JbgtE8kV5Zck3e6gjPyq7QHSgvryvVCcECBSaoVrS4S9aicbHs1HdZEW9ZKAkKhHd62pTJXoKLQuJ3V",
  "key5": "3iiNThCa5Mt3PcG3kjjNW6n3bYdd3hVipzPyVsYhZX1reTd351kj7bzX4yQ3ome2xtrSUjbPQZ444N4mKswvnXCY",
  "key6": "2Z6g2sMVzMrfSAf8G6n77gBkoNqmyuotGyJXv1vxAexDd2X6WcDeLgTeyi9QNNkddxwTUCuP2hHikspV6v3wSPDi",
  "key7": "4HzTbMYqXXjVetEk8enLUZVqczZttRvLJm8XEGHBHAkjD8DbGEjKovkZcELSWNbUsE7ZPQH4FkGQVU7RQe1AcFDq",
  "key8": "3pytWMPKQSzABjD3ffpzJZYs6CMiMvC283KE2pGeU4apNNuRX6LxUysbAsaAengRaffUY3VM5nU3u5GnS8keiFeq",
  "key9": "ZiVckhVhCj8Q99HZxXQy4n5cwotg95eW74VJoXrr7hDJqqdCDDVpzQFxi9h1Ubjn3CYAZ5JpnZBCGkiRvmJ4hoi",
  "key10": "2QK5tRJX4kKA4WAk7JfTPeLAgqMpcQ7kwHwxYCdFLY9jZD65Xi1mBKa7bfDd9nfzDDVGLx8aZTZeSeksY9RgjgZB",
  "key11": "588YHCkzyPBjdroeApJB548tnVwQwmc2gRmPFgf35TyUG2vifW96LjgSHZkKmLkUpQSKxvgVbRu2DgDh8vrrGpM9",
  "key12": "3QK5v84k7qXdMFg1A7Wd2bK8hkuorfRDWrw4vJThy3eGYG9yipd6uAushHKN1SKEqF29Rtbey1RrNDhnKoNqWNiv",
  "key13": "2wA4s7eaSj88Jqfvf8bfKQPhWSD4NQas1NDPtfhHww5B6GyBr5QpCSwxt6HGmnYBXuqbLhvX64uCB2GkDdbgpece",
  "key14": "4PQs6jPzErz78QeRu4zsQKk6Fo4cR1XXUcUXvzQzTehLtGto2MrgxGydjuVfLCvaJFykFNk2pm5qK72MR8eX5GPH",
  "key15": "qUsSrr6Pqq5zaPRLpXCe6C9BhssHscjU7QrpKcJGQ54zMuFtUNYEGWP3EGPghuV3jybNCNwdGcdsjdf81pFZipc",
  "key16": "3zRW2aZmLN8H7xDVLmUNsaFW8REk6ia7fQt8GPznRsrfbQAFSGFEbDJNsLksYMY4JEw2YdQqT4HdaJDhBqTjSpQX",
  "key17": "4fw2rejEecKWeNkQnJNEcF3WMf5KMBjg4a9QYBLBM42TBz2N3X32A7QtMgPqU6iaNy8GU8DupZ3u1EfDDNxLDxKb",
  "key18": "3Pnt3fRmvLBd11JowvZWQLr62HHCXdKvrPKxsq8QGSGdsLA78BrPCvMQxhj6H1hrKYB7XEh3DTtqTYpnqaGkVFxY",
  "key19": "3vyyhjYx6AsEWMgEdZ5seqHESLLSRZYXwNSia6pvjwV6jxjjbAziFqjrH3UvD6H67LBNjuatHCuvsx6AYdi2hT7h",
  "key20": "D9ok9cyHECCCmaGwCKtunWJuBwZuds7UW6FQwnCEq7b8eatstceWd2WgrQmXzoE7SQ24hyYDVzT3m88g7d4LzPF",
  "key21": "47uhrrk3qmm5Cq5wk1QQZ4Dv1TU2RAUA8twJuovBCKWKAf4YzJuzRVqxPFxu3M7WAV7H8Ue8H4hh4qjBWoxgsoRJ",
  "key22": "32xroYyRqBKSv2bhhUDHUBsPf9mzGg2vdRYNdTuuAnQpzTLgvoJSyUtytoeJNgyFam4YLQN4GVsPrV2EHS3L79qs",
  "key23": "3g2QW3JdyiJhfyumzRAZCaWAPkG1rx4CvetXq1augVQHds4jyASyZiv8LgeUEy2Emyc4mwRHF6XQAjdrrdcFX95P",
  "key24": "22t9ocV5Cw3fhJFoMmSmqLYsUNeCiMVVJ2cKf6yz8rLgpczuwNHMF6ZNkHRFSfWxHKTx395v4Bgd4GwxbYradvCg",
  "key25": "5YbFbFwfhobmxK9Qj5TVFt6qLN1gsvPewWpXqbLEvP6EtprTdqXfWeXERQUGUhwjBTShWgJfkJReqdWXXFHdkr2q",
  "key26": "3MEkh7JR1cALC7jqx3mkWLhbYi8hyUBJWYP9ReQ2PsEamXzkbyNcShtP4Hxm3Hn7S9QzHv8frWKdyqzeuaPFEqVs",
  "key27": "4henZT3QWs8kZBQY29nEhTuYh6YeJnaJqgZ8FVxJwNvLiDxfC2vuesqxNJyLHzdf4nH4Abkmo4e812a5yptFoHwd",
  "key28": "4bLvGE5k4fKTi8aHPHZ4aHsBmDAsYCsu1YUYWR1hNLysrFwUTchomc6iaa1urC6AaRoatQxKa8Ejg64WmT2XkHLz",
  "key29": "3JeG8A84gVGBjrpyztALyhSarVZQMAxjLHSdUxPRka1avZEiTcT6fEu1NZn1pkUrfDkebYoWoM8y2TRVz8A7PEnZ",
  "key30": "3ZJGtKFrjEb7Navwm6MAFAnGAYpqqya2ySrU96Eo769GSu7RjjrR1thiSmH9jwSGnaPTDWNDf5kRp8sgEt1VeEaT",
  "key31": "5KK2k8aT4Frv5R27SLAyjkF6YDLcJV9g6W9wDBjixaXhgbezJYZYRq3HTojmApQcvZJ6Q1iG4TeU8jHVoPtsuzQ9",
  "key32": "2YvJWs8dwaYNexYA2tjPXz2Y1sPKZzECJYUuZeRcEdvThWyP4Poi35FwWFH8LDz1ANXMhsiLPN2tCKhGuKQEqKZk",
  "key33": "5DqzYN39WdDuwR2VVQg8MGB5zHe6wnqfMLnRvTRZ7GbQUgGmgqaMYPUDLx969hTVYZ2mEFeFNUBALNVoJgHzVBa3",
  "key34": "2WFosPn8rL3MHsQpSSgpfWy7r5v9dXKQkacyr9se35Mx31DX1ryoRTZ9TBTgbVQaZPaNDe4QBgPwDAWndutjBC41",
  "key35": "4mDMX7zcdv2KtTmpcLDRp1Yse4JLj8DSjT72Hq439umn2t8tbh1xDkoi9apEw1q4xk9uq79XTSURnVhvfnWGfLdJ",
  "key36": "2rTNnpwPk2FNyGyHm249yNN1Jvg5jXsnfnrg1LaD3qNc3oXTSrmqta6cU3TVnUoR6qYiAUYokhG2hLyWt5UDoiUP",
  "key37": "4hiazpT6rhfA2uREHJaYmDfwtJz8xTK3vaviPuvxJFy2TuzWjdsgpRaAS9xJCmYgzY5MuzvGVYm9WghwaxnVzk16",
  "key38": "4rJEQK9kcxxtnS8weznfgivoeqoHDL9uMKUHQPhdFUxVs65b6pyuQHu1zLJfP96gBDeRYgNKPqTLun5TeamhwzRp",
  "key39": "2qs656mkimQuAem9uVN3tE7g75N2iQSLKVJ6oWqgneuZHHpee2GCSfcKX4fDjyzmMuqkb5V4vUuZbKkgfEbhYtbU",
  "key40": "5Mxwb2NoKEB1zHdLMmRMXWVUDWjMpDBPU5iZz7ZT4s2QVuMiAmzVsoGqGNoktcWPbXgxGkMbusQo7qgkkL63wyHP",
  "key41": "21RKvs443sNUZeCj2SVzddCKzQ9zvpibPrx3njcStEW54vhmpknE3s7uJdAX38F6crU8NN8yswTWFF42WN1veTqZ",
  "key42": "2wrLiACPT7AszKEaWrR9uZYDDdXuCcqx3CJSWzGJZixbx5a1mj1HLQiXZqLMTUAwWre2CGucPypouQwSvPmDXh2Q",
  "key43": "xPUj9p89ctSqrLnQg69LiN5zFmUraUtNYkv61CKzrafBSPKdLVi5ojjeuCLGwVygHg4QwERtVmqtRGZdruAPFSW",
  "key44": "3fib9raYtj9tvWuH3cUX5q7TwyY9WKLWYVbK2a1A8s2t7JVToSkyMFBYSApP4t4Jbd2npvMM7RpY6BpXNcTadw8u"
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
