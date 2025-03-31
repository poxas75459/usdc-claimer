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
    "4d2UJXqC54qLRP9MmAc71kEEQZueRewbEt2sqorHgREjUXMk3V83UDNMhrCh1o1zUeN8rA6VaiL7pntceJW25hLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ue8MMNHirV2QU4mASG2EaoHoAzq3z3LLUjq7GDWFm7Ab4ZifyM1oBtJx1KHz6wfFoBwA9UbiU7L7y7LgQwoRoCt",
  "key1": "55bjBeovU7CsAWxbtCbhHt8Vfw58wmpoDRbUPoPf4q1kbs9JF3FqfcvFL4ca7khLFpGi3bnXtky8xDbjGN8SXC5R",
  "key2": "5Rv4KD4U3251xrx4zQuNFVx91tbCL5ntzVNLpAGCsxXmxgFgEgDaX8h4bfxSe2ej8LAKJWovx1Fzgdz2bak92zah",
  "key3": "2W4Z7bVbtkoG9CWYsFgyEJHxibBbMArvEjvBErqMdak8WRQ8PuRGVAZpFLPEHwyw9S2HBidQkN9Z47WM5zYExYn9",
  "key4": "3k8JcPB5EyKW56RcvvjxhHtaNQJLuLrVZcmGbQ6uMp7RmUN33njywxTwBK9yyYghXFJuuNLbA5KMt8BaT5iPNQY3",
  "key5": "4WB4G91ovvNvySQp8u4aeuomi28YNG31JfGU5VqQLD3kF93GNh7YTSxtEW2Hzq8kmkKgNrmhatUGt6CwJvXh2hYq",
  "key6": "2MXN1BZNuyXKrzuaaCc2L8PoBxFDtP8n6kdLPfb4CXmfM6QfjjpvuGFZ29eokWFGX6jnvCERm1x2qwBGXMGiw3pt",
  "key7": "281H7uf3D52QAXa6hz2Nu1JnHpSVj7Vbro1aRcKVVEumpUuuCWsg9hXWwTToxXrWe7CF4w5soTUvLxLKJi15EbZv",
  "key8": "4TvSE3W7v326cLHd5KPv2vAV7obEn8AEdBGtMyFLRCMEDu6YNz4Cyqro4QEeRh3LqVQ1eS2wVG8jGhiZujyaWfFb",
  "key9": "2V4KcFq1fpSJax1QtbEyL14yvQG5FA9sp5sctYK39sfZFNogAPxdbfLgCh3BHBBnmK8SHKgSFwA2xMtMjmtViNwg",
  "key10": "3hMhoAJavQ7LEnrizcav83KmHWRbXBUzX6vynwrKG4NWZ84UJn8poGAhSC7kCXyt2pZJkGBvVf4BLrZcHm5wmhNG",
  "key11": "d4YyBQ9kGx6vbzSVB8ruEMWuQ9LPTxCwgy8A2sXRwu3s435m3Z8P4Bzhw2RfoATLZLpzVkw3E88JU6uZabjYP3V",
  "key12": "4jenWRT59f7QmWXuTfkDu4MakA1zXaBwmVDNRDcuw5iGoUikKMbDLu5ghpPkXikPsuetsFReRCmNgRfNkW9ZRzYf",
  "key13": "tt64urK5ZfGooBNsPmB9NYzwEoxpubeNAr7L1nyEJNRddYqRJXdLxFZCH8NZfJnTx9bY3jBBnNLkAzQgYyb3caU",
  "key14": "wUbhhCBcq9GPcqS86Y7ukqg9ZgwFnK62ZVHEEUn6qc7b7WThyAqUoW92ecZcESiWxMQRENbBHrgKHtuN5ZDoPCB",
  "key15": "5ZeeWSJ9SXJcmKaELq7cX5DFsgVsdn97v8nNnQsXnqE1NPEF9EM5uzk7GMkbf8LzU6vfHN8F1f3uNWDz9v2XZSgc",
  "key16": "5tfXWzAgKe6jopkoZTshCSGyK83Adt5e9J4gG2xtPRm9Twe7Z8NR74VArWsmiNNiFQHmVQuVZVhSzBcBEi24M3cm",
  "key17": "2z9CwfnZDGjDPmDm8jkT1TB54StWm2RpA4rPYiZJhzzgSxsY7zcq1nsgZ8NSX6rDFqxrpz95VoaN9tbK7AYotLdu",
  "key18": "5DNXEcz6p5DZT58aVVag6enADG1e6uFUyAHmFfYDeH4xFFaynULLpibks3DSLbZMSD3wB886n5ibhyFhVPnhvELb",
  "key19": "3XmTyB6j63TcLZndKAawQcRd6j1n7bRmNEvveui5nRDLZFZMFEbYLP7QatCzzjEPv2CqEXtv4t9oCVP2qgvdStQ8",
  "key20": "2D8xf2i7jrmxh8FKz6r5rUgxJE8aZmT4YRhJxuKFoHufGKBeeScbZJhWUKAFoRsNy98w2snM2PWW3MWDkuVSq6qo",
  "key21": "5XoEGc3ixjRRDhayLwsKkj2udqi9kA1Y5LqjQdLH7bSbedfXmDNBQSrMenwp6APqWZUuq3M3JQ6rJQwh7ViLUGrZ",
  "key22": "2Bx7GWqNruQBLVPpKPfNjoQ7axGu6Xdr9qp7nWk5U97WnkGqGAwVefqMdTNzu1TyjBgi28oKNR18gN3Sz7EC6pkZ",
  "key23": "4a74LvLja5NEaTfqrqQoy8sLLQNSisGXbMRoTto3a5gQHTBGP3tGRR8XYzXFhkqL6Ziu9fYApaBYTxUFZcDf86QD",
  "key24": "9Tx7Cq7gEH4viadnKydTQB8qM1GpzsJ858gQM5iQE7SmcAaNTSQSLpjrbRaeN9b6Js4fKuC4fMi1P8sN8Jseggm",
  "key25": "3hKvMKC3x3CTj8qYpdPHagknqusV4s6cEgpwoqqEJ8CPF7FFt39ixBUUVb4kDh9KoMaidLYjrJDQqruZs6BP15dz",
  "key26": "4hZeqaCFRs9fBcHwiqotVKWTCiDRaDFrG1qxyd1M96PFfjoFBfvTjWtRrvDbBuZJ2fx22jay3LYZVzuBD51g3GZC",
  "key27": "27LQSwfqQrL4Xxe1tVSsaT8s6cjZ1oUCQq3wXQnCW8YMvkEJ9TcBxu1ktufwqJhRehDYh8e8JWjMzu8acrKVQfJn",
  "key28": "gGA3QZgu9XtB3mR2uSYT9xFgfeUBKW6bcXpqShk4BZdf1XZXuUwzjggtYfs8sRK8jWXKTEJztriAKA3zDBEgFPP",
  "key29": "5tjWVsT2U53xtZojM4JZ9mJK3QMck9Nit9EMpb5ebZXDuqRtsB2ctXgrRKEUkfteRxDM3Yihxr1ZERkbZbmLhrg2",
  "key30": "3rN3FdE2Kmj8nxJAa6RcTxMuQ4i7G9TYia3HXx87WEQFGpbfKEuqYLqm4HbBn1qP9bW1rb7M5EfLmb53a6QpaNfx",
  "key31": "37xtHXTZm2eMM9HBbLX4eQFhk6hGfM1hRzG5EjqTXZLk9qo4xh8FeP9XYMQoWhtzV8ZMEvnCkAwsmYJDqtNwBNzr",
  "key32": "5AcVAv2rewXKc1Y3HApDJbY3AxUi9E8Qxo6utn9TYNsGVApLh6buZXynW71UXP159KvGV4LtpELvTj23ZszYV5jg",
  "key33": "327wpWHBastGji73RPYa2beUUeAcXMtzTDXiw9VpeM2RXLh8XVzb78M3pCkY9iJ4gtdTsc8TKohcF6ZWfRm9hZY5",
  "key34": "4V7azzKkjisuHZ9KPBEoNXE7tyvQNrNWgU3euPYWycCPhMB6maKmpXd8cKymHf6tqSXESG5YQj8zXCm4g6pQyqsX",
  "key35": "df44xS2EwzcMWsk5rWdsMv8a26Um5iUSkgJy2J4WGugaduQDZBDEVX77C12MmLy5Cn8C17Cd56TNhfdSYJA6CgR",
  "key36": "3HhQ9zaAWwtLbkDCPMtvQZmQ8cCgr9pQkfG95MVJGBYgRF5XSZ1WQ6oBW2VdiyayxmKdWkjAkpeLL42BJdMsLAMP",
  "key37": "vtGLj33rHvqR4jnsebb3oepdmGDn7v4tRMkUXkezyikE2KCmrRW7uhFh3HD9ZGM9tk1d3xX9nk8x8o3WRm6GXon",
  "key38": "4ZG8TZQwrWx89ZsRHxamEAmSaCYneXKBwuJVXuzs4sJDxZ2cFCwLNHXKUvwcQSNyuNktErXgeuvmTLguUHU1LJz7",
  "key39": "3x2S8S1iXpmfTrTzsjE7bamz47Wt8HMkrNa9FH1vWYJJ4z3E3xeHH9r1WxQdgpHN7mYrzT99NkiGiwqMDn5WBLV3",
  "key40": "3vRcoSTHAbF8xf2ajGbRhQcV6rC9utjMVzyhF8ZoFxG7P7dncXWfgteNozSezxMLRDSDRjMd9kGxMwJ6RwrB3UWr"
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
