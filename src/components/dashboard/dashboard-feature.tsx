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
    "49JtiztNyLLpfw4vMFPqjitp3JGWcqbDNhrRJeFu1dAPCpNV67tN1JwKavY1b6Uiog9zpCLtQYxjpc4zTtXWaB4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FkaJdoRsfcbCwtrTdY2FeqoYmBG1qv8RwTVamDQw6cpZzS4p8frkP2T5PdpBhpUP6Jad4HjRdVWZU6UscLzAuvx",
  "key1": "4nsRWP8e6UW5PK6aowEx6DTDYvf9vLVA2UHuQg1hD4gTR5LeyMh3BJQ4aNekpP37yt1hs66a3qwABe3fTFPrMD49",
  "key2": "6JABLfZNGTrYtvQxjvWB36nEmQaq4GdTW39s5EJ6wMo1SWJLCyAQuUw2QwdZkT1JnNUZY24PDYPfridJbmgrwo1",
  "key3": "4i7qY7si6gHJFRNdopGtRvRoxmxyWEWgTnSKK3bgBzhJfi3wb15B81Jp4JS65rxAoiNbdkxKsEedoQEvnmL8mYiT",
  "key4": "rZdVdQXgEjiUXk9H1rJEmtXWzxwrhYk8qPYmkVvbdrdRh9YKJYVCkj6FS97JhnSimt6Atz5eiYwyxDzSuNPnthx",
  "key5": "3o8vrPgvH4D2GTTvGt5rv8P828VTmzCvaVrLBcTiefySrWZTw8QJompvyT75NwuCY55v2ZFUzrqG7oXTzwUWdU9A",
  "key6": "55j9nTHxBFYHv7P74bUL4hw8F4DsUKd8PtPJA9DWdFM53eCx6fN3cmYA7PaXJaKXvZekmE8yvNneznpeA71gAQuN",
  "key7": "5RUVBVaChzukYwmekjgdvZbarVMZYiG588JvGJtftnJjW49PxW5DgMkQZGjZJwgo7VRmwDKqG7tTx6VbENrzmWKZ",
  "key8": "4aSqwvCQzzxHnjLtD77Tgz12ctkRnVMz2JZr7CA6tp6SvVxrJkfCtTMX161TFT3Zf7ueAn7xVv35C48A6topGzJ2",
  "key9": "66jeg7SE18ZPPHWY5omAqGNxxSuGBgSv9hwcxJ3ZbYzZLn4A41QdLkHeCiWqrAihGmpxBz4Nn43kRFytTS31g2HE",
  "key10": "XHVs4FDM4i3VT2x7ghM1iR4X1A9F6A58NHBvS1XjxY4vrtFP6qMRVT2Fty1JRhZpBW4g4NSRh12eF9AisXaKYcS",
  "key11": "32HdFbFCSBVd8Fs1bkGpKV3QgpZadcSTgo2DBDXjP1DT2C3SiBr3VbyHNbiC9YnrWSP4uvvBrSNjy7h1Xe1cF8x5",
  "key12": "4hWSePnZymkVYPzHEyKgT9mfftX6FKwv3vHKmdF8wLBXPi5jrWnmVh24MPXEpkwEFdVFYqJ3EufLgoNViDkU97re",
  "key13": "3LWtXN6AXXU4nktMpi343UEi9AsLMqncFtRLECABuA1ySVfyZ6PpPvtRNPf171vbH6zN1PJzewH34Dv68z6nxDk1",
  "key14": "4wNV5MXonno7ZwEGU8Kkzgc3YwNRYzqRGtvjKNkQhTGB3cMk5yMEPyzefh4kmAYUXV2YRnjGLsoLp11CuLayncai",
  "key15": "3DWzdwyhzvTaAXjATWwFsoBseXVa1Hqqu6jd7dN1ktbYMGKBqJHFhSx3VbT1nnb69EcLxGTXDYZrkBYcaJxufunW",
  "key16": "cEqo2kuUN8wpwpGCqVVbBcpbYf5WT4qWsWyY91WRdH53vHRAZbgB23dPj3ciycyKgLjSfBcDypvXqSPgQNw5nCV",
  "key17": "37iXJfnziYvmTxPJpCa1PJ2d77SiQNZsp5GhxTnAqNm6KsxePNJQFkYVXYse5fhCVMRV8RjuxvvFLapWHgZgCbWD",
  "key18": "3QwNGaBRhRjjYtEfi95ECZzdxj479dksD6P6S6nRfFg2Re2D94q9qBgYnPwdJr8kHZUey1XXVKG6MwuVfpma8HWc",
  "key19": "AXUn2DexXMLnQ6u8tnR3yXPfiFijrxjnV9GXRLWiU1K4mozegpKYib59dkdwrXT82KbAxCtaZb3sd6H4Ten3EAd",
  "key20": "3nSjpgayKaiDFFG9P3pkofsE3JACcAMKDP9Qkc14xDC6cdzYBijWmBxpyDgwvSGCitEYTJzTpJrwTfWTRqcWYoHE",
  "key21": "5FxQdGbRRJ6Nk7gCYvKggmYFaoe9uRoDynLzR9oNvCZu6v7k1u8ZZQnk9NEfPhUeta7cCrxdghRMj328Q9XevMUB",
  "key22": "3avEARZtG8BMLAHiy3tpWjRaB4yKEiuWMZ6rJ9E4U7adoqJPGRZLBq18jz2XGH3jAcdcqqLbbhqDvZpsdJdUuqDA",
  "key23": "A1Ai6GBTWqdxDgHTZ5eKkXcdKDJhL9K1J6N3HPhaS7gSAy6zgE4y5hygZ1BdNDPM7Grh3N2wMRKb3uziPwgkP8g",
  "key24": "3bbJQSC8JUb2CCcZEJycyQhbVm2czFHnm2ovgEVSCocR25Dvdmh1edGWHinoxsJL59AttajmE85nBJ35ThLyXk5s",
  "key25": "2f37YiNX2ePZERmikZJ3xbYs3KRPDa3RFA2xxJE4h9qy6GtWQeVfQ3mYwonJ4LcKfdjUtcuq18NSjv5h9aY6hw4a",
  "key26": "5utCBR2XNhmzA3pNafNaWwQmzoJdvV1LoL7XktAa55UiaJ8gHS2wTYWE5tNmweNZdFEEWevXFpmak3SPLvanenzj",
  "key27": "VXjupkYoQrmRXXHuHWkM8K1xCiYpnLpuunpCNStx9BNw9VdYJtQRENbQvkk8ZN8EXJJjvkqfcsYgMLJd2mTqAmz",
  "key28": "3Mnt9LnChuJZzuhmoWQVNYYFRErNbexdMRPmZeNrfNDQBq2YfUHFvhHEGTM7brLiorbiVX8o5TvUHVdqtoNoq9RJ",
  "key29": "3uGEG8HJhAMYoCtfHvauc28A9XAQpCpbbZFKPFh9Nmf81nX6XN9dmypVzgiy3XkxwiwZJ9MF5PJEXDYJzK2j7PvU",
  "key30": "3s9h1Fh7bRWiC29Q87Mn6QE5CxYtyLU8J2mtuqARn3ne73TdRESed2hhXBShTGcnbYth8uwXyxh3ruzKG9PioS97",
  "key31": "25LTt9KSGbEDXP6yjffCG4Rbbn2zjVA5xQPK9ahHLXkmQtUDUc4G7AHQTfwJnX1AgoRUKkEsF3S1KUAuHwrk3tFg",
  "key32": "haCWv47gA88NAia4Jd3bwPpE8PSxEcQzjxrwVFSMx3GUB81LsEmMEYU7vSCnKtW7nR9dh4ufwoCu6gzsf3hHwd9",
  "key33": "3cMhb4sbppxcNMgTG7AGwBYK1ZYgnKg1iSKjoXbqtC4dM4iUtXku42CEDZtx7zAwqRfsSvJ1iXk7JdfMBqrX5cjQ",
  "key34": "4A5cuQfGxjdavSejNWZmDyCn6Jkep7AjD9TmSseQXgausCRivkZEaTK7pWqipmWY1fr7rP39E62azc8JT71dwHPe",
  "key35": "QKpq7YaAHdgEPLLzLQgtPaM488GwgzCs1k8Ly2ZKNFMQcqS2FiuBsRAvjP58qDmkYWzVHKScixHYpYGbq8xW4Dd",
  "key36": "38my7kDBf43LYWyv4ZctsrwL24mkJjgZvsB35PNK7YVwng6jh1yPmWgmJyhFRedsJc4Zfhk7SZ3FUxG3sNduqpQ9",
  "key37": "2yYPyJHHT87oifzyzu3X2i7EpUaa9qmupoL8XiC6F1NNFqXqLXgG9JEUeG4PV1f4SnsQo8PzR8wcHj2dvJY1rAoZ",
  "key38": "2eGn4S2Ynd9aBgU1TVPXhxhD8jzv9CuXUvr3h1j1LJoaqf1oSgUhCPzJx2JzMNAncKjwBsEeK9JMvhp15DwiaZyy",
  "key39": "FyBDn4SSdXnNpuKkcpfSreXvdxST1EotxB7XFcENvUsYXstEdhm4YvnR2GcWUGwNxU5keQ4Ab6D1m5q3Qe3Ubvf",
  "key40": "4EZCfoxyRHxZFC1HuqvDrYza8v6rPvEgeguLtCRqMNabrqwDvxe95aupunXSdGwYtvY6uh1AwcSKqkW8ATa1Dp2Q",
  "key41": "3wSC7kGM1vpRC4bf9XSivxqVXF7sp7QfVVCPaGFsSFjNnbC2dAnrPsRoTKnPfMnT5831aVFw2yfnkCiW5qgui3n6",
  "key42": "4K3sgNSwKHhc46rEGCErG7FkLvNqdGFASpQKvrAx7XYyRUpMeUBMURqpqhgiexZSTiQ76f9jV3qsZBaQYXnLn3oh",
  "key43": "3vewcsBfFBmjvRXRYNSYCVNK9YHCEj2TiDg7GdEgVsp4kyosLVYSrmf7dbq9BQ8UVZPCcaGukiaoynHTxTZsQuB1"
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
