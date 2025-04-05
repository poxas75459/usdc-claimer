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
    "5zADZhMd3h8bzmWdCiRyHKrHYfrrPw6pSBBbSJFFChUAZbC3F8SbxA3guptwqusbCmUWCy6PxFyXuFevvNtBog3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cebGmr1vqHu4KAUigaS4zMCM3rbSXLFaXWeuCJRjH1ayViYB9pRHkMMArJzba4VoUmCqLGmTnCRoDdDnRbCL1Jr",
  "key1": "2EMvisitBWdEnqF9vhUGaLE9dVYTrSqePN4ZeCxXMbjcoedPLzEZTn9TYLoJsomtDToN3nZVuAbqoqNkwtefVxhZ",
  "key2": "3JSv9kzHmTbYzm632JR9jFGC9YwNQ8eMj5JqybLd7xqCjDFs5jhWDiNwLJm7akvvvVTjWK13rAEsz6qvqTrP5AY",
  "key3": "ZEBaq7LqfJvNwFgstztyeRMqFLfJxd2Jm5GDNuyWgruZF1vbN4BAfze2SSCTyPFm6Endi8WkhnxmCP21NNSmrKL",
  "key4": "4hHWPZaSkVhXpABXDzwSqGuLrHFArxrMXYMRgmLgiawvusFbMA9sao2yFCUaAp6s7H3bXUjbfVtHEV8JFFRL8SjT",
  "key5": "2aUadE2jkWGkPFXQZJKCvCsxN6piYEaQYWmB4QcRwQSX1tLHL9SJV9JUQqzBKxBumoczrjPuNG4nioJrtDFtBtjq",
  "key6": "2bg6YRs37N31Kir6ooiBr691gXGA81jGSLWGpG3u4exJBySy8fHYwh4t8UsE7nQR6PRtMzroT89xx4RVRM4EcPWT",
  "key7": "3kUkp3VWP6Lo7pTWppgFXnFkUxN3wyeURrGLGirdiHgNVFaR3sPY63e5zDKoiStLT8g4d9RPMjwnSCZJCYSq1Ekd",
  "key8": "4PV3whB2zWHnLw73TF6mZtE5fU12MnQzLzBAwpqRUVW3MV4P4w8c4qk9xVVK173fshoUrGRKYJxTWF6QZXuSKZK6",
  "key9": "2pJ4CbTvRcoRzaV7Wd6p2VkrDBPe3yL2sLjyEc1xQ7WwP5sy8AoMAuHhb9Fjt2Rr4zudXoTuD9fUVSdFjtBEBYqk",
  "key10": "tci1LsWYGju5d7zmr7oRxPzXn7cFfVKG9tTnY63mT9sbM2tAtbhZLkNP788SxPerxqf9wn9zBXvMFWcP6H1KVkN",
  "key11": "3mGB4m5Rm9Jp4Msdo3SVgZdtWYZGFconsFw3CA3DRLgE2Mgaatk9LyZZgi42P5XvzoGkzipnLFQrGfyc52vgkwmx",
  "key12": "3BZQzdfWzb6sy761uRrnnnvQUxxMMaiFEEssuUR9Go6JsTkKs1B5WjmGH2S1KjPZRtL42aL2r3PAv5pq6hUwRyMX",
  "key13": "54RSgvn8Pyj9fpvzDRjMxbDKcYky9N8yr9mR3VbbqEmxMZyA6sJLTctUbyWpGqfas9EH6PjLa7SNAHFtVHV1FR6n",
  "key14": "4AnGzyyx3oKmPgtyerYMD93KZjjkDq8Qn2YwK18qCzm5UBsJaUvZzRfbfDDmKR4pCBJHAgtF9Jyds9tFgj5SD5Ua",
  "key15": "5CyRp5wEQ4hJPa7uzc9YqxieGtcpcqrypSGDMPWneCfwuP769wwfhkbMUq89C7YpyyqTejHbBAxFu81X2TmFsTun",
  "key16": "37udKuSbwuwmNEgKTL8tzWXAFH8vCMU6t2PEzpdt4cevVST4e8wqkLTC1gnPW2C5DbGg6DasganrVwETdQbRDxyd",
  "key17": "63QZpYsWo6TVXrfR3Pp2JGZ8i7zFvW3i7z8JSPmzPVHEWo1QRKLiinvocffv8kQAuStdsU6gpkvZLHsRcx3RcuWC",
  "key18": "3d2w3A4yhyLMc6feRV9FGxVmtLcmB3r9PtGNTW7qeNCgCv1fC7ZFhPum153hLEzcKxp7eRChiKjBjyscQVzNMGph",
  "key19": "5HbKhDQxBjuWo247uqspmusQ9pmzQV4kbkSadoRXedG5RJ87LwUASRAcjzSzEs4naP6xL9KS2Jw67iwNhat7ogKL",
  "key20": "qzCuLdg1AHkWQdUkUwRV31PzZZe1gDv3HuJLzSDNuoW6C15CDDBrdzLFyh5f5xvXLnMtrjyoB9n6B85e8did65W",
  "key21": "3XTw8N9TonRKFADSQyzEkAWviQt3DuPXcahebdRyvbr1L8cMC7yjMQ8VQE1FErtrq44G3RgyZPzbnnBYdgww84Ff",
  "key22": "4h9djg9fQh6nng6cGZ3dL4yZEn17syNMax65p8A1ESoq9D4i6RMdqnqktftZyeZ6CzrxjnCD1TVJrTb9WDSAV3CL",
  "key23": "43E3wDjr1tps7B5bazNP95voj8YUAre41xGYRpRcfz5tX1N4R6VvwDYUaiucfHrxQ5JvJzFEZkKJi1Hyu6uM2nf9",
  "key24": "5iQByaJTmpBnoawxrB81w6KLsCpuR3XVrMZQheJPHszxbE4AAu2AauAx93xgF1t8G57HkyJqdfHH3rx3U5t8G8gV",
  "key25": "qihXWEGnXG2QuWLvCcGPjXLJWE4PcKsALHtfAry2tKmYxQEvnqBsKiXao3wnSVYiAeKJ5QUuCSdRB9Mr2gNWdb9",
  "key26": "27xuYYkrStzbp6dTcFejb5dVBaKeCT22uWsGnHnFxj7QscKVZMYEufcMK9oHVek4NWmE9H5d1SRtnGtmkkfqhPiv",
  "key27": "3zar4A6Z3xAD3K9HhRLvVU1ggLvmJqh5cVVRnMmpfFagVyHxzVxUtXvCQ6LLPa1MnD5DLU4y3MPr9PZ2RmMPKgY8",
  "key28": "3e7MF1G3XyiGTmgogZET6jEewZRJ5ktzsa53VNYojFbk4Lfpx9BJyiGQYoYXVzd9xL56jCu3w1bhC9PBmz5JPrc3",
  "key29": "2z648Cr3xwroCi9V1xoHzyUB1J64SqzTVU3SPnZurPGg6eHVYc6J7KKwaX2U7tBPQfTt7vcwb4npTnsjSSbWHdvh",
  "key30": "3jEfhGbME1fuRPwCqXyhghwTgxbc7TSpAjjAkVCZLXQnCBxHXFkaDhsVUwU28RG3DxFcozaLtcoE8WWsjYYMQ5VL",
  "key31": "4VE1MMG9uRLohyWhrHFheYR9fqX91aFuGde1KULoDhpU2WRM6AgMu5w1gahfWKgt8dbhovXii5vrHGrQ9UFWqGMD"
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
