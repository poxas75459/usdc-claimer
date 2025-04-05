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
    "37DW8Zux6VWJSEQpgmtXmz9Xjjs9LkTyhYy4uMg8RnLKaKD5LTxYi43YAD5kcwiGwpoSNGhzYXweoVqS3ALAHxN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CKoK97reh3Ei28r6dAu6eaFqukZCE17VreFhBoVTjd7Bu1fgCbtBjVVJY4sxUf8uD9xutUZdBmudQtmSNjN9Pma",
  "key1": "4QsBvvc6oXivmzUXz7j75jzUzdMQY8fYabSoymjSE71hujoPF73X6PVYAuXy5iBdnQzaewBLPdHAWuNcpBZFdgqe",
  "key2": "3sLwqeE1aBDFvRzbdHq1a6TmfzNi4HuqnAJhWU1zMtRBmPNf4PqHZ1YL5bPSq9pqxFkMhkPz61paTjBgKtQsbjhP",
  "key3": "3t1WgAWGt9fz1Y7QRPiLzV5qbwUMunG4vaZyNL6KRgTs99G7dCFvSFD1vvv3w61yxnprm3Vc9gWndYV7aVJZaim1",
  "key4": "9qRP7Gpt8NXSt1Yz1VrQaJtGVRYDQiahNJzYCTwEXa8rgum6paVxaZ8fW2JPZXzuMjvJjoupn1qk2bY2kBvmM6B",
  "key5": "5piPxHC7ULDZTeyqhNKe234VsMMhqAiWw1rEPF3rTaSub3P1LZznCixRdbCTGLY38aLFqy9nUA5wFPVko1CB1nZp",
  "key6": "3kLppRhLuNY7Y8FXnoNBmArLb9twvrNGPSxbAr5uxGYgPyJshrkKhfLGtXZSgZxW5nQmnFNr2noBTbEipYhMfomi",
  "key7": "2TRYTsau8TWyBhVzBV97hxreYbAW7mKs8Aq8JhgT7Y5GRHRBHB9nyzpcWqLuqHgbDzxovrrzitXycGUa8WkEFxLm",
  "key8": "3yMdMiEZNsh2aysPRP3DLiiN4qGyAqGP5EntM6QAFpft9a1kbBdVnTpdtWVMYiY3enqQo4cZHSJ9t7uyriLgApAw",
  "key9": "2yvQ3G9c1BWnSPaccRC7eRcX117t7KcRxMxs5nw4Ru8RyVsNUwe24UmsrnpWdhs1S4gVaLotH2sy1L6FvcmySDTb",
  "key10": "5f1zRXxxuVsQ95VQFTPKitAER2Uv12vrKu3AJUeNamCuZw7GxffRq3Q3JY9DvuLMxQbmKrqoUwtbKuosPqeGz6h",
  "key11": "N9jvbe7bApweeowEVKdnAPerx1hMErrbXxBpFPcxQsAaifnW8jQcWxGCK3fundiyFrqeW4vWfLUKr39KH7JWKVE",
  "key12": "2KxqK19HbC6iBLrEMaBL7Vc2JiRTzN6So13qiwxL4bmE7ugCycMJ9EbKMEadeEwWMPaCNmb3xUv91ET3iZ4xSrwr",
  "key13": "5d26D9WpzZao8Pk3zYeEFLJv2qrWJ1RW85aaKtgW9fmygKqskZRZMskSXjwT4fET6fApRpCY4PXusmmu4gPZeKvy",
  "key14": "xYQo88acxpxe47Xxfg9cV9FYeWAZoPMmKawzfLTGXbE4imUhBpmUswttw7oz1iD4fGUvNjPmWKradBXzWaVLbSW",
  "key15": "7z52NkLWE1xwg5T3zwe4VA8cZLcpN3bPojB8N8pgxjrJ4VaWL6ic7fmxQDLhThbSAkAVhGUmi4dQCDY3wWXjZXu",
  "key16": "cgEehrD6KFDKbrjoZz34JeVU4WGtwFb9FwcK62tJdA2SFfEDtmSjjkmtA7H896JEjDdM4d91h1ptMt6aFGUZBYR",
  "key17": "3jy9bA4kcsK4447He9fMuWMFjrqRPKgitZN6xVf2xdqRUYXXGVwEw7uonZLUDVBdmQHFHQzqoCoB5p3Vbihnh7a",
  "key18": "DtWsjoW95K21gcyoJVoSjbzyhxE1XZjVmstaVWSVmgQQ6wEZHaop8Qbr3eJLxZztXhdDGbJXBzL19TDX6EfrVD5",
  "key19": "4NMoKaP4NsKZKy6boCdsxKW5c7GW5ZLXwBkWKm3jqEzmJvzJY6C4qBoA2FMS9cbjug7sFHoYzjkVYvNT5okvFxBP",
  "key20": "3cstBYZWNo7VtVErXYxz4q4SJDi9MxsRTXQdTpoZkxeMqeQ9GwPsLnEZ4oneDUFnRG3P5MtTG2psyMnbDyiNpiF6",
  "key21": "2Ft295TsyjFJFQptVVGD1YVMxS99BVgFfbkd1fCtDZmqbVcwdvhJxVRRw8rjgJo9DCuciDXnTTtowPBqH3WRKX6X",
  "key22": "2so9bcPKd9t2nrLvyGLtZBzCVtdbWxKWs5DaZ51UsV6RY5iKUNybon2RTdRZvoGuji4XUHBCSZjHHC4WneESw2iJ",
  "key23": "5SmwVBT3PEjgVeazbMKGMcrniSr7nnXrGwrTzA27vQV5trEVijscW7wGD75sF6WGqqdJF31omT45ZVSRj393GLR4",
  "key24": "43TbXUk6xPX812c93j29nWVifKH4NJEk8M6N88uZtCBGeBZu2xPFVRGBbxSotbNgHXiQNWKbRBd4jEUtTM8ViqoB",
  "key25": "aYFpbMA5CNxrvkB8gZHydkjXrhymuHQ6AAzZ3Ae6T3F89oHbkGsjcJoyCQxybk5TQSwMMpDaEiB291vJKJEgKuR",
  "key26": "2Y8kF6AeGPzVLU9CoUXSCFp6jUxRiXoeeo6muiXaYhem3LuZRDBeEjGiUSwEJkwZdXyw6HWy7hRnjnSrt3QDUUHQ",
  "key27": "666cZTLcj6HtD6p8nicqcwEJSXHPqeq66Nh9XEyRxwnnP3JqgnReq1NwBmsP1YXxNcEzaDxXbNP8jV8aDoH1Kdi8",
  "key28": "4m9uhMqysWjZhDgu7nExEmFbVojL8hWvX2L5ksAQQKeH8RLxTUoi9QXnFqLwdDEsnc4y5wuJWrBRtGYdeh5QJ5Ab",
  "key29": "4n5a7RSQtbHzFQatyfHTxCHHHJUijawH3JFezc9iqepLwJvWqbAqio9kotjkCKSnE2WLGAMbYpZRbAjqHXrThpUq",
  "key30": "4HimrgjEH4bLmJ9H973Pest1uyfKp7KZX74ap8j2kWu8wvc7aHPJVPkmqpxYSwyavBiWP8T4YCDwrKxpQcjibMFw",
  "key31": "2z5jaqNNnCJ1xrAQYMuTY77SE5BNAoazvHLJroUC9bmbpoi8Y7rqS1yFQRKpWuJFi6zQoMCMgo4xrkD9YS5hqpWr",
  "key32": "3WFwjBcuriRy9RrVLucAVmtSBLvHoKZiqWJSS9De3fTx7WC8LF9C2o6EfbyKKiHkPAPHFjmhJL1spDNQZUZvWJ3s",
  "key33": "3kodXHgXMrZwh7c2iCfGAj4PKaDUZYaRW3Me2prQ2aLYVSCkrTEgJZGt4qPTuoVYTbSPMKCQFmHAH2ewbtPwa9Uc",
  "key34": "A3Xdw46jwAqnj9uRZq2nS2YMvue7UECTnsPjk6yWvJSxLFgtDEnyaTLebUht7AwV523JVjBvCcEmLTzNBh8uNsC",
  "key35": "53rCxcY9VvNC6tjq1BACV2mB6axPaTSihrKESLS5dUidcGSg68ksWZJmgW4S9SrMdKcR6h5SkAxGPf4EzMy5AeWT",
  "key36": "5fN8RZNnmRj8znvZj8F3DtAcCiwHjZfPkhSNrpWgwkRGS8djWPttXic4xB7LJyP7JPBQnCig16rfMUtFgsfpFxSo",
  "key37": "5iv5gheatqcFAsvVWcKX2NFm4ippSMQAvj5aHFEYEhbqnFHJynKXBbHkzmszumNCq3cRMdX8qXZL9CsjBtK8Tr9v",
  "key38": "5Qbq15tcWzE6nGr6ae35QEZVZhFBcskdbWERh7xF1g9c6dZvBnUz8dzYCMAqU5vQrBe2HDkDDccPL3pChHvMzVU8",
  "key39": "3KMKrRkm8ffG3FySyUG5ep1QbYRDUn7Q3FFSQYquKeuYdVBCP4vSSpXuuUkgzup9BAEGLVKuEnUQ3A8VetfznS6Z",
  "key40": "4JwS73msW86YVSdTv4qwSWRZ1Gu6jvVhZwLXYPYCj8zRbcuXUDXJNUxwrs91ysWHstenu1Bwxb7KDkBXxBJcQbyc"
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
