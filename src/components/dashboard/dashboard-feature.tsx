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
    "5mZjmLz96SoYRFmK4HP9HDJ6af86vjnxxj2sJ3aMpwzHtDKquyFM12NkgU381V6HJdKVxAkUB1a1fKw8SYvnhd5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLKU7x8R9CgGzvFVJY9XhDxVaRMKHkXRhGaugdcxLojQWedLYJvvJLY8vgxZ4nU2KfrcBWf1kP7o94pmjs78aBi",
  "key1": "5uF7B61e1GCUEjRrPRX3KvFAdBGD1WB6NiVfk5y9Rf9Uv6Ui4vpKVNsSnBFEBg76ymRg1PTQwo1qHk7Tui5wjqUj",
  "key2": "3hMNJeuthRtEP7L5fn7YL23QbZkiMd7PGA3e965dRweqzv5V29zvcKcEJQXwcUbA2J61Ky2iYz3vhNU9M3m3mz9K",
  "key3": "2CvoTzzYVAcgQyFREs8WGhS2VxcEmYEpLLyBkrd8ocX726wgZCG7msuYaUfKE6zMCHTyrUygb93PxfKfzPK7fCWk",
  "key4": "5gDAc4JRwEL1QKCiaJ48W5WdtxPxVjuoEkEUoVEZ9oWa68qtmjVJpXwZZjn15fqxPxuWj45ExnQi1wNm6EzKuyfK",
  "key5": "2f1Es7BVnF4T9kJX1rTgXB2ntWXcQgaEwGHRffH4QcYReCTqAt1ANHGKt1aoXBT8Sn8eLtVeKMdW5QvBoBPx7qUL",
  "key6": "4DffM8b2fXBDCqBV9QVtZQ6RCRgvGUbotG43JTw5Ror6roMMNvB9tG6h2D4wN5jt4S27eGyBYVvCWRT3fakHukAs",
  "key7": "3sMMXeYH67oW1XzQU1jZhg9UXqDZSJSFZiqBJPaiD1hcZK3FrRfXpBevTkQZxJTbwGA4jFpACDRN9UnvfY9zDHQ8",
  "key8": "5q7zwxXYsVfcFaeFPsBLtwfjJv1ZyaGohc3Hx8X29ptebiKjoRU8EWxmrGJJc1kdsWQMmdpQBoyFnxsFD17z4y4g",
  "key9": "48B8911b9b46zSZSiaSamEducWSCWD5jyY2atZNCimJAEW9XWj9RcijsYw4KtBaDdPSFV4cjHgc2KmM5CdE5RaMb",
  "key10": "DrYGiA7xtbu6TZ7PKv8Dd5XPKUUHAo2ND7bRiHZMf44z3YUUowH5dQPPYVzJYzSw7WmD2NVNcszRMPexpuj5gRr",
  "key11": "3Um88K29GX6pXoboWFsTmdVApFHQuKVLKE2ZJYUypHS9vyEU9A4puqceeJkCuryvPKzquqUeRgLMi9Egq29EBeYJ",
  "key12": "3tgidnJSixcqabTYgUjowjettoP61HUAyT745bxhEtPDZV1bsDfemqzoEnXs47nmE3qeQZywqNbmsG19X984ZQWn",
  "key13": "brjUhwczNYm8bEaYBf2xYWSBnhheFFiMRbeH2iqy4Rp9ZjBiJPdTpJWbL3iqpzA3HvrYxBNvKE8nwV9CzfSNWNA",
  "key14": "5k3H88Y1jFkm8Gqhh2fPMocvoF3oSYsnUWN76e9f3EhiwGjsTkLih4np9buvTv1zDrDqWKRzDfS26RgQWoS4SkPg",
  "key15": "3fpuxUuQbEMKFMtUvwr9MwSTY3P44yCTeo1KerDsJ2uJ8GwcMsW9oemjMzvAFJBre9v5wVBwMoZBv2xYcRmvVfuH",
  "key16": "TGpFhQR7XZFqHkA64nXhsjKoW7bor8FQVXi7kbvdLDtDbf2RYhA83VTT2K9CLXBbHdh5j7VKFyhC2oK5V6v6xr4",
  "key17": "2ZEanTs6Y5GTGHC9TyyjKJNuNW5dmjJjqJ3N9fxjnj3dvxVTJxBnAm7YkH982H49d2EJcWkwe7htckpFL9a5dvV4",
  "key18": "3UBDe9mqV68VMQJr7xDefuCHLRBgpnZe7LgXEQpZp2pH2deZwGQskmPbUufkVXPa2sByRPyuFkZ96BYBn3VbtQkj",
  "key19": "63YjD1cd7S1b9poC2RPi6ieMRrNEQvAe4ApHBdX7RdNiXHCVzUXcN8RsYSpvrDyJohnUUpa1rbra4rNhzqj5sjZs",
  "key20": "67ZnUn37WMcJquKtVZaW5vmiWpHVd6woSSToe3SZCC2jeJxpY5SHZX3K24JKrWHNm24YB1rpbrFj98qcJroGpEQy",
  "key21": "3B7ga2WkZZsNyXajts1nTufHzTPRUmUprBRUtAxeTD45rQdqttV9CQCRFipGo9eefNxy3xqpYPoYehK7vSe7oSXj",
  "key22": "4do9KjyuatRU8hW3E8ZFKnSS2hYB5tetKR6DjfPzpw5wKE4SLRbyYrc5TTEPjPYWdPJKAh1T5ee59BaggVSnAPdH",
  "key23": "8kczPLUYKXN2MTD8WzFd6Ega89FZHgF2cEBxZo9emCX8arefZrDwTKQBtMYbQoSM8AVsYqk22f4ewEFnSM5j3Ku",
  "key24": "5JoBSkht47Yucoh6SsUxmAdV2xXj9gZCvLBqEjkwmE9crFGUivQHBf9bpvqgmireWgQHxgfTS7tzXeKQNsrmL37H",
  "key25": "5dhByCbYiC5U2ncc34aD8SbxT9qa3KthzWP5BEVDUW88y4jppy9ShTBEVKwxxMxAaNHdmo9DHd75zo2P3HSEEiJn",
  "key26": "3GSjbCMyXfKBHvFUmjkXkcJQ9yrL1eVrcexotfMyJ4FHHVZGatFdAzSRw4QEvaqktwiXLZskedRjeuDzhvrMvSoW",
  "key27": "2zjfAs9KXa13Yv9Uz8ovGTUEBMsoyZACBcD2iV3a1qLX8zPQEccGDuGkxwqUDARhtRHkEtC5uquqPHXQoZLavtkQ",
  "key28": "5xS5ha6Lwj8n8gBfzSc5R2G6dGEWq6FRa1kcvdV1uzDNE8e5EEvFizPXeJuzSoVsM7wETjCQvEfLk5ZYQamzRrXu",
  "key29": "4MKwTDDBcdV86BFxyPpz6hU1Rmufi3EokQKvyZjtYbDGqjB313ZFFQYRP4B4c4wSA4smSEuZDoVVcpSx1w3S1nMj",
  "key30": "5NsA1QvCf3Z7ZUo2Vp8dDUvKbCQ24ijsr9acZrTxxPtpjsvVjiKLnrLtqZj8x91xMS4rF8x3ZEf3X7g34qdjR8WM",
  "key31": "4CA55TVCAtz9zTVBc2VnLwhJr1CCKfsGXuK4b2g87Qcw34LWbR8zLUqjwMX4pUv9dakTNbLamUcCQPrzmqz2tU2m",
  "key32": "4CBxLg2znzLkz1zKE6zhVGcUp9EZFsq3Ct987j967RdJTnffP5NWVChwKUmxCUfQYeL8JfvGfjkeEQfcxApwF3XP",
  "key33": "5FAbsgbqBoFQpPXbkguJrrpJVSgMNLU2Cf6pjg3No1Woaxc5V7JMb6VZK8fkxA1gHYsiGpoJXmK4pz1raNWs5GJF",
  "key34": "3BvyZLseTRuHDvwtLMRC89iTo6MK7cRdP363rZisYFJjnSwSvEBzpmqKQpDiJAHDYyVQzrkpLDwx6u78jJ2yxZt7",
  "key35": "3hhFzN2H1EtGi3BuVug9u9zHSUQRKxtBVjh4JqfYmZy9EoZJJzo2gwtm22ubN8fALQmWhaNwNzX9qWyUCfiZEKbd",
  "key36": "61KggGACuAUVEmY7ZSYdgbrovQFoN92QEGefo5phN7nar2u4dnLaTYbzAox7UabPbkfbLJWta28JvJCPo2DM8qa8",
  "key37": "4ei8mKxhMsnu5n3x2Rewun94e7aXN9P89Jkx5Na7wd2vJ9DDxawk57RVFf8G1Ri28qpHAoUjjkiauVQRpmYTjygM",
  "key38": "4enjR76dn2p2Th3hf4dCLgBvCjF5f8kV5k3rUL4kzUm3dPNt9sZMwX4NohJYxBrqvFpsx1tiZ35UkRMqsAmm3oUm",
  "key39": "ddEtgNM3QwSSupfRbicJhc9hjfnmVHiRAGmMAj9uHADVoY1TxMRFMoNPDEsLV7EbDKXHqAQrwJXdohdYcpYzqVj",
  "key40": "3kYyb4zidZ5KEHhyMP6tGwKhXmoKC7yzN36ywx64VLpYXrebA2uwndGXKCniY6uzoYnAxwwsSK11DgnBogz5qC7J",
  "key41": "5toYfjHNkQyCDszbucSxGAzFzWyGKoEkwf17Z4Xacc7iRYT1oZboY849QStuTZQrYfspF9vxMaxwnwgnCZXmL9ha",
  "key42": "UxcwtdgePRgRc1aVWZUwrt4Gk4bXowuQBvmqTWvKifCLNPBhdVwHxkLmHNJXmArYUyq8ZMqAcYd5EyCGLBSWG8h",
  "key43": "3oLiiENZjxsHzDr4qD9GaDPRrMzgpu42XGvYJYaWuhg75SNSzqGVpBaDhywFJSmiYtZkUPGjADx8wAwcZC7hsqfN",
  "key44": "2VBwuzKhEzzNLrgoGafHLhv9nEbupT2Jombn2fE4LVGe7BUcUZFujoP66ahhL4hxNdqvVhS6B8CjxxHX5tfRt4cf",
  "key45": "3bpS9VQizbmyvaJdJViJ1yzVjrMDkuZxQBL9bZrR8kbNeBvouzRs3MRfoWP6g6M4rgfmZzt5URtEBeY2fWEMRswZ"
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
