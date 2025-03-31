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
    "4UeU6FygDQ4kbKqaPkwbqvToWPwyA4bJjw9YYm4JuTFTnkgRzFUVVQD73563DmieLP357MbFaZ76D6i8xzTah6Rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3onnMFZdbdUGJNtwKafxcF5MhhfTLHkxrqBi73MLJ4YLM2tjWGjcrBAFkW747MJxJXFaNUBDp8ypJK3ZvxdWQBRD",
  "key1": "3z8C1P2eDJjpytKkJ6qob3miNBT9a5kFdbLS6Zj5R89d4oWkrEu3mehtFvBGt9MgmCq2481a9PdVeTZsFGyqrQL9",
  "key2": "3b6b4fZLmT3dEvtt2Wt6mgBeQhE5MUQmUax8jGhqTbEg7GpbSNCg8rGkyygJTuswzq4TFe19qDEA8xzhRXuaajtk",
  "key3": "3fTmZFFA3eDAxUWB8Q4CmWcA8xP7Smv6Nyfh9cjBQnNkDYuzTBPzqcmcYwP3uZ5d1xCZ3qRQwi8tmXFdaAZskrZL",
  "key4": "V9xvXMa6A1c7orrAn3G7cSNrwkeQH1yHZTevBQy5imHAEmqESk62oCg2AqHoaLqnG9tDPfgJE7ibiys66BQmmY6",
  "key5": "VZehSyanrR6uWmPzgcN7Bj4dtVVWc7CNQFCw49eJSa4RRVkJwKErY83bpc6AP9uG841WqoUG44Z5sSUiY5r6MCL",
  "key6": "4EZgoTQQrgigY34KR5c7AXQn6zWZSu1uZaXyyTLFGj65ccuUKrse8z45WYQgVpW8njTC5v736CHU6rmcS9uKD38B",
  "key7": "49yhSsPBrmiK2ZgdasjqCBfbvFZ9a8DXRaoBKHu69GfycF9nvi5PNQ87J83Nr8VNTgJgEARFWUDash57GhoGPSdQ",
  "key8": "ywGS5rbfR5CkBvpNPRd9CE5gaL91kDwxiVk9K56yuFQeNMxkAm8LfuZDeTPpVZxGEnVtX9bsPTGfMUSxx2UWudH",
  "key9": "4HGjL2MRQ7P6dAWUwrvvb2attfhG52cEJaTh7BUw4549D5tibCZuapnhWnKyJJjMCVi6ANWXfp976Q9rBnHMdp77",
  "key10": "5TAyG6aie27owU8xoheWUmNoyfttTmkJUAXAEjYoRfHAFrNG4de6ujNAmxnkHsa12vH9EwMUyZMrWpLEe7UFfeUX",
  "key11": "3agkEYU3S671SYMSvgDj2EFAwdLFLTJB3naQGEgW8NSRy6KR4nU2Q9q9h74u6oz3tLZuBUD1q3Kw5CRA3iyw8YVt",
  "key12": "2bG11CVkgwbGCVdHhmghVhfmjy6bRKcko1b2duhn1TVXLo8qUqcDmJqRwG3pkg1xWCvn5mKjnQr5crrfzBAyr8pp",
  "key13": "5hXxYiVw6KbGwdMJwUTzJKKQjoyXnHwCR9Hu1hDJWzKXLMS6WNmuFKrKf8fWczoGyCyUvKQZsMKjXCiCU33a4xyc",
  "key14": "5yCZagh57Eykn2jWLN945pgB1VCYKKof4BjHbdUSpsXMppDAAZxgVXZorXYGt8EFc9Da9TyzYGDB9LgLucohS4n2",
  "key15": "5C6DWFNHKGE2jPnAtXBnf7xEDgm9PedPStSFSQHbwq82Wd9PMUAy1HqcV7v8BEPwKLdSaS6p3v1mgi1FT6xjcujc",
  "key16": "QV23XcPnNKz7xHHknEf2iwWMYPLWVZWCzDZP5kETdXTdkpe1pjj8n14o33eo1EHsu63df9VbNvecgAQNXQoNsbf",
  "key17": "3m4tSES7292WPewywVBwEdYStfPv9U6QLNzBeM4bo9ibh9aXB86vnUjXaCUZzMA64h7JchN441Rk6GGm2cud4iEa",
  "key18": "5EQAKEG1akJqQMkJvMFFbeHhcqez44SLXAasYpTtHcdeBjJVrBJ3n1WfmFdkkJMf316pZqY2wL8c9MwhokkW5xcS",
  "key19": "3WM5DupM9NiFPdMwcnjLKrLcqg2HgAipk4k6pnJ9hzoZcRqN8Cv5TaDiX5hU4CsswnJ1oPD2hHfF9hFqoqzd6UtU",
  "key20": "ei7h5pFarrJXPMRqg36KMeQx8VNbVkNxaMkzGp7CBHfXHgeEip8fD46mnuKDpSbWsEiaAFZsNii6AuVvqt7tcrA",
  "key21": "5Jy6tLkYPGjsXwC8XTTkzwoxiLZ3iwCUerh4LF6p2f8TkdiByTMbEvouU9yuxxqEaHJLMm9sQFkwNEL1nDVHeSFu",
  "key22": "32aMwfL7Mvsmj2uoWQBe28DS4dHALPFMQpukUwUAE9dZa4f8FQT9X9gk7hRx6zDaf1cmBS8s7WBmSBwbBvHstseL",
  "key23": "3VjkLebdFVudwMaJi7h36xhsYCFtMxEDaVd5drC1yiaPjLf6qMfrBQMmvU4dWEtSGz6nKzeaXAaxN1rBuZZSFUJw",
  "key24": "3A7kMXjmfJQrby4xiaHQRaiQavWrTjWH8hCYsXNr7jJaAa529Ye6iAR3Qfg83BkSFzW47E3WaNMaQ8jxrgJuL9Tk",
  "key25": "7XUGWtB3Hjtbs4MGwDMDo7LaSbNPXk3CLy1ia4vwZCuDEcf6JUVYACZu3g9xkFipLfjzwd5aNJwAtvJtUaWSq4h",
  "key26": "5u46TaYkaAs1N8rqVHbeKMEJWskXg55FZsLut4R1o54mXxc6Zeks4magKDtzLiWSrC31K1AEttcTFCq7sSqchvd5",
  "key27": "2taXBNm2Y2kipp1Qq3zHC38hGD8LAJzGTL6TkymF25u5f6qNcuJboGxFHc3todUBfiLpMMrWwaWAeXTc2xNkHHTJ",
  "key28": "5cgmbdfv1M7TAvmsREqKLRabte4ueahyXp3F1Jp3D6nmfK4XSDWQ5fJPmczwzpYgkmttTRpkPM8hiQwzCodet8GL",
  "key29": "4MqKxtEoGhvpt15P94GwWzmP5SyvBw2P8ogymWwLWxXo3FDhQfg6B6WdTBC98v2Jqg6YuCsu7KkQVdZMDkwvdDos",
  "key30": "2gZEM9f6xotB2477uXiXbuPU1vhDDBJ76Xy2ga3KexvtvzKFBdLuuJkAN2ZREWz3gJC5Uf9PHrg3GEYfuVWtvgVY",
  "key31": "5mRkJH7wPn8zYHzuwak1X1G8RqRcuwfDeHdA5Hy3fpwvEUpbXx8CSaJwRTMvFSYAKHrzoPHEP2vAKtdfiTy42h5v",
  "key32": "5ZsdRd59VGgNjjsgKa17RyXpm7mqmJkV6gtyYQKNX4Rj1dyQkKg9izwu3JuA2sxzUFRCDF8WaerM8qgDxXRJUJLG",
  "key33": "5N9tLoCLTT1zKqaG3KKRnpKgXjuKUxxqqJT3Ton59VyCUeSrZRve6pqNpoKrLfppYGPJj5rAZCuXmcLq1sKhaNy7",
  "key34": "5Mv5N9iyvAi3ESxGJQTvRLpz5GdDQ6LjL8fbmm7YiMimJVx4rFhiT5aLuG4GGcPX1UD6rWkUMnUK81Aay9brD2Xc"
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
