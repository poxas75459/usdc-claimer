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
    "4z4YmHQi7eLwkwMpuQoH5d9p9TUkY55vW6ZUKWVqp5gRrCtwSqfXEDhAxNj6TSuMUtEiQfyJscwtX3sHFujP9LB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C4pCZVgd83XhpKkESt24zNw955AB8buiQu1CuAtsXg8AaR9J3twgcSp4ggTPNpFLkqyhgk8eh5RuYY3zYTN2QCF",
  "key1": "5HJTZg5duyS9d6W9A4pCFBA9GsoJRLB2XMx8NBhsW6qTtCkBJZDh5Jy51NZRhk9ib1AgAhbEKB3JpqRq3cbarBnV",
  "key2": "2nVXyDx7rdH5FAQtWkBMBKbrCr5RzvNbgkp7gP8VJmybEymupvJ2jSxEXvYwYZm3WZVEnjVitxUb8s9YL4vqofcZ",
  "key3": "62xAk2fqJXPt6XMAD9wLkS2rXaTzX4Vnj2XJAmfRGUAHTjeWoWYtu3grmkPbPbqs6VeAe4BYKGJHHjzZ8UhkvzHj",
  "key4": "8YUzp3yctsH18BTcChSZMX34BPth3pYUNJgTZmJjws62ZhcQRQXAZARAMRY8XhkTo37FKZYfjA3hSbQCGq7fvL9",
  "key5": "5fhBhyV1kJ4cfKeFjRXCBQkFoRKmQwkDicUC6UPceNMLHzw2Y4veappnKSiWpRTo5jvM7Jiv3KpRPut3eas45pUM",
  "key6": "5b1MJ7EvpuAXwTPRHR4GZu8vuRLnJZj6WzjDnwQpy21TaySU4P6PCi3YKeVgdWGtNDV4hN8N4pCaSnT6f8u5PqQh",
  "key7": "4B5ppbnEaZbvp5ZcvozRYAge7LaGUrzimXGqbvUNYdr9tvQoNREjtwKBwjdLnAbksboZ4RwCWGhXzN7Z4kxaQ2DU",
  "key8": "rFf5Y7oefrgmNRCZZiJUvXNEVLhZYhPtuBtoB1Q4ncKJq3Z3nZhP21F2HgtKjBALn67mwQhy58k62GdDJ1piyUA",
  "key9": "3vLg5maEEgpMzs3NcKhjWDK3CuM2ANut8hwaYnV6YRDnZ5KAjJRvwnqWAtxAvAY2XeoffrrL7KdcZXRWqv5XLVAw",
  "key10": "2ynmfRPSsQNn4nrR2sz23D1KiGvZqarJ55wmFw9CMSowoKuocHwzcb11VZYMjiWt5yizW6XQ86qeNocXq7dW5PRS",
  "key11": "4Fg5z4SSSpiQGHtTZx5U8rMk92GdQwhvAgsF6rC6vQ9EpCiZYBDY6LjogcvVf5bmQKLUDV7neThFeuWRxaEBPnet",
  "key12": "5ixhaXK39Wiz8tdoDpQUDtkaQ42zkKWtpNEvnNLWtAazeA5dDPoGugSkbNiT7UwgXcW7jkWjRi1UhunqXzBQ3oJo",
  "key13": "5MsX4RWMGNjyqwr5bKgM9cPzU3jyDxBN9cJFNjBnTWs7u6FuqdRxEaWLm5cSPv3WenE5ty8PiWn5Ma9WmX9VPUMC",
  "key14": "GziTB8qyBRTQGVZd8va1CpCu39LWxh77b3QE6WceY3dJYMfwxbhYMzeNH4ng4gP7Mt2ahHQvQKbqovfrCxtmSAB",
  "key15": "53cQPN9bjDeXbAzPtgodGxchm5sscBwLgnQXXoh1vBw7AfKeooBDatsgjRdbAzu2aymm2RasinmNB5qLP4WrV8wU",
  "key16": "2zmXTekaBp24zdP2Gt28F2KgFw8LraHNKX3gHC1LMxEnfFEYUzE4NMnYbNECoTx9P445QuBoQrv5SS2Ac3vBJjNR",
  "key17": "2AVjpeSfsgjBDH3ih5XEgUDGB8wmVF2Py3pfWQMrp7wJzmosUyJfznC9Yyoz7SW1CyNsFLfoeMv5p4uJkQ2i8hd4",
  "key18": "2pRfKJZVayAKmnAoFcL258AMVJCq2P5McJjtSqZsLJ1bzb3SWdFy4jXRRgcZ9AT61b3XwFVHPFnqnih6cb9szGFR",
  "key19": "32cSvRTfhzgRiCx5VKjAq5LH4MTcy476sgjWLGPrsTYBZD4Gquk4F2ihLm3GBcgQ2y6oULqWLfLLwL5UEunFLNSb",
  "key20": "W8jNtdq4ArvLcCDqiYXw8L3cXvuagLnZS2gFAxbaM5Ge4aPdhPNQccj7qC7REGMJ8kAXGR8UXrxdkJyLaJWU984",
  "key21": "2jZRkPUENXfsrY9SvyjURMSAqfWz8RmEufG1HMLjSyy4LEZXEaAH8nfhCDuKTwpmGLis7a64tCg6EXJQbQWdxGU3",
  "key22": "5rY1w6j1ygQT2ahriYsJ3BCWRbUpuiqUx3bzGqUXmzjxtrYtBrRVbZevSsvmT2SkWopupsmp92JRt4d2RUvimuMf",
  "key23": "2DyoudS7EcWK679EdvDB176sCSZdyeNMiQn54csKSCZNSNMGfvN4JvC14jAyCfQSbeHWbjqB1WPZ9KnSURvetM5Q",
  "key24": "4At4jYVLAJRYtpMAV9N6zkm86PtYWiU3i6sycfY6X4nv3HpkEBR23CJg58k98whcvAbsbuW24LagKR4mKgYPFxT5",
  "key25": "FUBDQZFxahM7jSN1PWyzyfpESYvP1x1GLP5yNeGKtVBJZ9vmuKxLS6EFZoLBETBdWfzAknCPpZ9FktYzqQ8d4fi",
  "key26": "5JTPmyiiFNFLTkHVooKCLGD9FR5YmMXaf5qEdJUmDQzCXDZSuLZYru7gWUUxGyzSvbrWv6hBvX3y7iBGDHKF4nwQ",
  "key27": "4B6VeuqUVvsCYSTrzH4N8E6c7ND8SMNkjPYuFfhjSafBNgn4PMRueNQc2uk9J1ZrW31LJqMmXAuLNZ4jGuaGB7co",
  "key28": "3Jje287JCKW2iu3j92CaaQv3PD55fbZLLGfumhkVAswwR4nhNj4KNufQ3EfpPu375sUcxupzp4N8RUu2UqajcXuX",
  "key29": "mqcAjqaCZJgPXdtKicTe3BocsrVvA7qKic78GhCczv5b9tKaL5e9aHGVhbjmmg8KXXv2A6N2QiyHBVZhw8fZaiH",
  "key30": "5mCEnLWoMnqV3FERAPDjwwmPMg1k96WpkV82uBxBwdKw2D5yiLzvUhkj5FYPXMR6e14QcyiDrwM2mYXnCe8yrQSh",
  "key31": "4ox2mZdcTRhHzxuxBMegk2AXJnmDdb3yfHXVPtAbuELMvnsiMAfzDhYUmLgYBKK7mXU47nWF6Jj33y1vHGGegR7V",
  "key32": "5uHGiT8Thcjh4gEaC4awoMGomqucDnHSdjRQaPDUGeyhfEwcibZmYwqWLCou7Q3GFGBEnXe5X1kmc5zUqNPgcsep",
  "key33": "5oMV6cgwqVnSMAbmc9hTVtryXzxdbqh4R2Eib3JJsNrNUD2yFPxMMVEhbNkFhTr3oBDFqs6CLoqroSkCMX21hEDf",
  "key34": "uvQr4s2MwucwdP8Ljt6uJknXQ9s3aHND3b1j7maSv1YrcY9bWNfsi8VVFJgxHcQEAmXYDioVByq9w6cxk1q2zit",
  "key35": "2UNYQoUMMHL9hAV6FJEQzbGvm7rhpYpo6KPJ8eHYKc2GsVa1j154pQS2uDs9BwC1vgTsNNYBJGin8BCV44YFXBc7",
  "key36": "E3ch8vkFtGp4W2nEf9YHQmwB8gfsRZ55drETt7vbyLezNerbRph6qNvwZrHDFPa3cWgKDdnKWTpNUdAZrgd1UV9",
  "key37": "3KjSaqaeD2UbFD8Bm9aNewt5GGLjPDrD6X51GAs9jZWa5ccNnBeMgUChApuwd3iHUF4ftPDgXAY2Xddgsfv1BoEL",
  "key38": "zm9XF3pq7ZYtQKae3omMWFubXnmHwqMw2MfC4J8XMxwryebNAKTkoDLc7dPwegg6X4cwpkBTaf6xUT59mG7FuMx"
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
