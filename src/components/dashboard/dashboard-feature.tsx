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
    "58QXGyxWsupxpU2EVJbiFgPr4QYpsQmeR1NbW73sTNgKEpb1CKLc6pE3Xb5iCNtip3fvvAeX5JeEQzqWh2ck9j1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z5KTwN6B8DrE9n7TGriJFFTkdcUHDjRbUhX3cfrTQG3nEJUiE6EVGfwbUk5BvaSnstZqnkSjksRFyj6jDCzFfpb",
  "key1": "2W2RskdbovxcgHSW5MAMKr8ukD89F3iU8Zw4M4XryKmP1NmDGP6pEUwtKumydYmcvyBYLC9AuKjbbasyXu8aXinH",
  "key2": "3DHyrKiEVJbesDmdeayDfvR2hdAZsbw5nTJmQm9ahzA99AYWEYLAokBYUNxcj3FkDpjLd97LEamFRVQwGsMTko4Y",
  "key3": "g9iWzf3jmK3NFMiCtEzPww3g7cdxZGv8mUtZDMJ7McYoQTMKNyb9Lrycq7CbgeyBBh6ZfdDy5pW8LMdeZNz934c",
  "key4": "5DbvyFeKK7CUkbWgXmTw58yY7CWUs2ZDZTv4qEwHN7awcdH4vkY2V8MQu9tmqNEMGhTJR12czj9tspY5TH7sXGHx",
  "key5": "4oQtTcJontoFprBCXRKcZhVHE4meBFhaaMyFkVZqAFp6F1exDskWXwbv1Bmp9NyZq7m5zdS9eKhUVtPpv1nqgEum",
  "key6": "2W1psFvaVjTMmKMPJnFBB9nNtdYVe7HKZSgfCvwL2EP8bjrBhyNbKZoS9wBGV3cbvwhmT7SfuVUToGqEaGLr2wDA",
  "key7": "DRXucgA5YgPhH5tDxQnp7mUr4RQJP9QykRkoXEerrmcVV885yGXzoAtTqCkL9pPscafNZDdqNLVHuFpUQM6oPgC",
  "key8": "2FLqNMeC1tUukE81E6HD8Dp8ra5wdxAFsuzFw4thPG69MGCwaot1rBwK6RUQm5qQh3PyVZqDtQBpT3ecfwjxZYJm",
  "key9": "5dcQvzmtZXvz1Y4LEGmkxUVAyyr8qj8JyDCEuQy6JhQCBdBcLCV9hojn8UxLXDAX7EFnLRXbjm6eHdbbrD3kiCCc",
  "key10": "53aUweQ95GC65dMUfJgmbECszVJf4ah6QtCNofterXupLhwUD2pYA9T8mAwymdkSmGGEAGPCasYpvw2zCgVwJLPK",
  "key11": "33zZ4ivyo8dc7ni18QKhzFvW1QusJahCvTRg2TwAGJkjrgbQvx397wgpXM8nwzk1peb29uWbKr7X2xT4abio65dt",
  "key12": "3fWYzofMpGAMth7deBLfuU8nRdag5YwTGTbAqRb41hwbzL74X5e7xRe7QqHFQ3zq6yAvYTnLCyUKdZ8nYwQGUNcP",
  "key13": "YbrUx811ncqvBrwsAQJYZ4VNWRL4egb9PtB2yqZ2aw1mgi9bbnp6QU5YgyUaMqj1V78iLDGXGhdtAYGzF2RDQ5R",
  "key14": "AJQ4Fgs5dD5xgkEoxZYULFhkBETHuZKhJ2Yu4NCchicrjxsxuTzcRhMaF9fLSzMvxJfgs8JMkJmDYYVkUMFixAZ",
  "key15": "4f1DMaJKVusbVFWc4DRZLpPDADKCTch2mJSVMXf4aMcbYbnhhHb7gTqRt4gjKRCTStHjKsVprngoxKkoAsLyPzqd",
  "key16": "2YQ5jJCxU9v5cFpCpWSfmEpTeZ7pjoCgtqzU7onXa63s1yUGFZFyKWQ8AGhyXiudbaGKAknMuHGhZEr9eTbJNiYK",
  "key17": "2NjAFpStr5ZZbjkqScEV6KLQxzWcNdXxddmSf74RSE1NA6y96vw8sxSXmy6GywCsC53YsoMTB9cS7KpY79sTLvyg",
  "key18": "2EARrjSsWEQtbC63Lid6HkoajeYN9gsP6hzLzZCuVYwkmWh2EPohTjKKUeVpVcVBHyJwXauwygg3E4Kiu5BQ46gj",
  "key19": "2zXDhxt5G5W6Pv2yztczAZN2Td1x6RzEMmMbkfvEwFZXMDABbPGZHGdakC2yWcZ4KD4VMJRB1C2hnKEkWZ8XfHth",
  "key20": "5p4Ahe75v8xA4gU1dPvdF7gS22AJiiFGiCsMzCgrDrgDVwkgUSZjnyy8t2KoHZgw3ZN8qaH2gD2yqjDS9R3mhBf8",
  "key21": "3xiDCxt7VMBK4HkAiKmbxw9if1gKBdoJicukpMwqaocodzhm5iw9cU5ppenkbCtYT3kUi4WwtmgBHYN1ZJUyTWi3",
  "key22": "3otX176SpCfRYmhfhB9XUtRgNXQ9Sgc2xjFUs9Z14RZvDuNQw1YbWg57t7QGomD3RHSoHhAJ7d138QTjxgBu4kqF",
  "key23": "3esDnif8DvqHx7UXWNvsHxW561iTh38RQGCWzzconFQ2qNd8PH7KTzmLwvWEpQnnWGsUNQ4Vatavj57jhTjddMzn",
  "key24": "5tp26ekPXkiwEPvMSorRF5yDCbVhJi2G89ThPAdpmkQyeWVjQcqjRB67a93fuMZk6yukBZikNv8f1bKneP6c5QnF",
  "key25": "ka8VrZrXRyqFYgW5e4Y5ZTian5p8jwZNqiszaTgfvqJFWMtiWdZPbaQNDc3modT4tLvqNrMTpg2mkoAYqy1c5S3",
  "key26": "3gPhhFEx2sybS3aeMPGAVFU7e1b1UoxsjQeT639nmKGnpPKUoXsZhCCM6NmKzX8SM69S3PkHS3QDCLPKi2QiFPSv",
  "key27": "522VuDLC7NZpTTBAYKYdmaAH4djBE255qtGYVCf6KfrZQvcLowbwYRvHJvxYmX1DzTgs2YAPfSw3ktkhZ9mH9Szg",
  "key28": "4oF6Z2xnvK1ApdP6eaRVL3ZcKvPr96dee7drGe9wjKrgDMh3exiG75dou1CfGNX3kgMcFxAPaLBFTXP6ZhmVvdq",
  "key29": "7d1yTFMquTuEz6Y7SDrqwKemwFc1KtHmHze5jwDP2Pn6fAkMS8gCWwGAgb1XttLrsmz7tYVhcqEB7K7J1KSD7sS",
  "key30": "4zBH6ENq5ExRCs4oBRmzZqeh7ikMJt88RYimsPj9ouZSKZnk1uMGApgHCzaYNcTJGAbMFsSAwgiFd8iPJiDSGbAB",
  "key31": "121dqZrgsuA9SoruuFNrbzrPLx9jrfkoPwJ5JfqznYdGpm1wQtwgWtDj2Hu1WVZtJR3H62M2QEN9TCSvQjn5h2re",
  "key32": "58wdwNkokE9McqM4HQYzgXUWpZ9tcQr7SYph7BmEXgxGpYAhLkzPvWgdS8CNRmegizawzV6SoXVuLLmKqxq3vE4o",
  "key33": "3rojD9kJBuPpGfGFKgBUfWsTpSffB9nEVh3rdZ9eYPeo6HE5f9pxLSFm3zhuH2Kz5BUZTovJ2jr6HecDH5W7V1eu",
  "key34": "5hfTNYRdzQgzPzPdkSTuccgvUHGkygoHP5mWV2KLqNosTvfXuom7FjjNUXeCHN2ae5CLvdRnWtvAjkVxPP7oaX9G",
  "key35": "uNjGFwWa4i5qZPubzANwduER8jFx9CcxqTS9BjsHsLoeKH6Yx8pSiwsYiEc85pDgJf648HQdyGe8eVMkDuuLZ6x",
  "key36": "4ywJoV37Ypnii5M2zi72PndkLUih2w2gf6PFhdgp3SwuVuu1ruQFvnQ2fYELBBX8tvDFWm6Rp55EUy5RZJgFRfuR",
  "key37": "2JJauTxPUokbhRr6ynrttX842s2jiBKK6dabAuUDGEUeUb1w7MJzvSEhYL6V4onG4psBF38QhgVzB8oWdnTKN75o"
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
