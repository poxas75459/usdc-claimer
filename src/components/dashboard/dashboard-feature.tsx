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
    "jnjDuAUiXgjXkLbfSXrcJRufFMpESUWwkz1M5sYAte4hrCxE1NzYtr2iPzpHKuKGdQHSHoiKPCigYnuQ6Yi82ss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LuGphviuopFyKtUPpLFovtc6pZTTVTq2GP3zUQvEQC1utse666DkZR3vqr9wjehMDxXrSCLqsUxpgZd1FjVNqeU",
  "key1": "5d3ghnPiVXDpGjqLmtdFf3UqwN8vCoRG3E6Ej7bVggsvD26hnj3DT23JWrncePDGsTQiVdMmaH4HVhWdi2qu6jki",
  "key2": "5nCkt3RNUzVwLx4CizmRMrkKWGdidRbkCZucKamHmYDkCmD1rsCnAMjVcCsVnVCArxSUgGuiiZ6LwYS4n7R5KtYg",
  "key3": "2WHk2a3HUnbpuBgJSWbENqybNTTWYfQRG7V34HQRM4nXejhfsVZZ8hd5eKY1TXnAquQsd7LgViHi8h3P5Zdzg2EC",
  "key4": "F44sL7tyuELKBmhF2Ey8xyffz361gcKCjP5fr8mRR3X2cKwZeYnBBtHEMd7d8Pa97ENFKwqP9ph4c5M7CmEDY22",
  "key5": "2cBtzehLUjfoP2ksX2g7ZHszZuBjz9zameMWEm1jEG6ukSWsDEekxwXTKU5wj8EhqQS4JXWan7YhojJyTreC978d",
  "key6": "4i6QiCQMRunQKHcoCLpbmCWkxEVDzAjDBWaoS7HMXbEVC2BZuuX9ZL4GXJMg2SiGrKDk5vLNzU4m8U9sNmBBGohB",
  "key7": "368wEjewQgK8o2PpwBZKo8uTBMnTPaAtFApMTR8EAHcNBc6dC2asWMJjdgA1hLTryjozyYL2NGWEM5RjG1HoTvcE",
  "key8": "2HXjjFvvV5ipJsxm25vprXYEkyb9HfnAyt4CBvaAQ3LUisMFNJNVysFwmy5oiTzyrJJtxQkHr71ej8jkp9YWE5W4",
  "key9": "45L7ECZMzbu4Sb8N4CNkAHS1cr71geMVdWAy4Xv1afWtpCyyAMuRD4WnQhUCBPmgUSi6zzL81PNaNATjxVSF8F6w",
  "key10": "2UwrBTgXxghXiCdwJTGyzwq7KdXrvN8URLgL3k7PNxAP5K4wjf25nHTr9ZNRCbGZqJwWUxE72D25Wfs1ESFgZ4Yz",
  "key11": "5tAY8M96wq1LHoRv5QWvDCj8JN8QgYUYswgUZFLcBQeiP5Yth4B9X7wtoPTY5wmkv11YAW3bQYjhKW8q3mtrNZYN",
  "key12": "5t1yRACjm5Y9bbp5ccp2QZCmR5UQG3QrwqF7aow5D7zCaSTsxW2BM1zSQQSoLx3SgkpbRoX1NHHcQUBsaJSC9UFM",
  "key13": "4DJrFgdjzU91jKL5V1nmSEmgRCMmM75McgbkjU5uV7UbsmFYDAeoF91Vvz5WM7tQJ6ncVZ7bDt6LUm8nUD8XNb6x",
  "key14": "5e3dCh3nVmft2X3ZKFm9pRt2KVWmhNP4yPzKkxmh6ckKZXXKqiTTbbzNw8iQVLHsvsw8qB3eXRxNad7NZEk4yGnG",
  "key15": "5a3zQk9unabV2LtWweHeZJyeD5HnerwnVPLBRvpPBNz4vbv8v2b5cUZv18ondcDXPtRoxMsFhtGgFFVu5VKpauvs",
  "key16": "HAje2uo8zQkkixFH4NvXzGe7zniSY87vhXV53FRsjKKH6rJ4dgD5rsY2FwDBGgf1FCZZuDqD7FHwJbCejjLHXDV",
  "key17": "JMhHbTcFeYTjJJpBhnZaNH3XCuAQwSuY3iCstNTV7Y2EwsdKMyP7M2XWPRcJ9W34xSRkCtibpiXSiixhpA5x9ts",
  "key18": "5TPj69gjSAUmS8pqtbe9gFLnKJAxjSiJoTeYhZPr3yaC4csxj6xRcWuXDd5JMyLEcwCrhXaGQjWBohuam8YauK5m",
  "key19": "5YvGHjSJZzPkCMn8yAEzgTktexQasrkjbTPTBm6y62MbJ8XtFq5uxUqepEsmaM4VyvDjr1C8wgqRJNidUPNx8Tqk",
  "key20": "pHnfXGMhyiMkdHmqc8L76bMzq9koaPGGEHpfr6yfxzWzyGfKNRbE6CSaAaKbjdCs2U8e8LGrZGRMaehxCSYa6Uv",
  "key21": "5NARXKB24vSR6sdfrzBNtMXcGm6KaLLzWBV9YxKxRfhaYuAh62MDF5ZAaQrdUM8y8PWiQXkQRKmuMUjgt9aawKUX",
  "key22": "5dc1aMHPTQwYQDJW3JGRAy5zNn5fdhfX5TTtGHpA7h3YLutm2aMgd2feuMBGbeyxwJW4pumV5RmTssGL5TVwxZV6",
  "key23": "54Qxzumwkhjca79kwVjFV1kwxudYvPcRFKeg9WasLD76evUuuj6px4pfZe7s8cbvxXMT5e9oPzek85ut23UVDhbC",
  "key24": "2e13MhwiqAGLnwAH2wtKgVwu4dqNSv2WBgkeXhnQkuNxKoBvq6u3geHrjVLbsi2uXmJUPSmRKhAekvNUCNhSjVV5",
  "key25": "3oip9VXAC8rZRvUCkawqWAstWQYdfddSnXtnwxMSUjNRNRu3yXNTguKgFZJCvytypjTyM2YqerhTzD7uEb7QZQFh",
  "key26": "4VHd5qwqkSZEzSBveLmc6MKQbTzo2xQBD4cnWkQ2Ywx61PQT6ccUTgzSR2YjajbUgRGvdrmfeTtL6DRmg3tmqQJn",
  "key27": "2neNLaAfy8VpkP5S1RREz65qaWJXSAVDKi1uRzCqgD3mtQeyYKvLUDh626NLbWc1n7MrQFhwmQuh7wLv5NPdyYA2",
  "key28": "4taTF9xWJyjWyYADF2cLKYcNkzGivmcvKkoQucCvGNktYuGKJ6dJQDFXVtivbEiv5jZBfhTVQEzSydyPNwzcMeQj",
  "key29": "4m8QiXEWx1yYYzYz9XW1trzfbc3fKzoRVUdx6d58v7Yj2Q8WSUwYrrvibUHicV6v9eEb8KtSiVnL3zEZ2t7oSGmu",
  "key30": "H7mqVcUTnaRrhXjDZKC4MfvTq9EnLrzw6aEaMBN5zYayXZXimSi4QcX3oGqbBfPqtya4axrYYzQw567R6oU29xf",
  "key31": "8g9W96r9672DnfSU3MHVBh7Skk3e7qfseVt63M21B4wZgMt9cCkzWFxPJeTkBepkkHQBppnGCT9YNmPYEeo1tkP",
  "key32": "51KczxPxbC4pDtbT8J8o589ZL9vxPvP22UR5iWJrZ9XPwocpoCQAkBFgDTdSViAMmPQxoH4poKfqzttXa1enfPmC",
  "key33": "EX6NLa8TEwUgwCfCrVUcoyb5NHk7KK3Qi4egDmDP6ePvzE7X8A5yyqiysgrAFzqnMooooJVsLy1WthQCxTGzQ5k",
  "key34": "4FERrqKY5kHFPLMiFeTY5f1hQ7u7XGome7E6HrQoQdkQpnP6dtm4ufVQgQmEkotbfd1pZRKekWAgfrruZj1YXtrd",
  "key35": "3Tc83fpZPHURMWNrwiQoTzgZZx7gDR1SakdBin1BAq8XREHpLvtMdTyHgU4hySZ1sPmc4F8v11ecJrYk74usuthU",
  "key36": "3CpfhYfXNHNdRX1zABUoXLNWWcREqXeMGtfGicXFEa6v7o6hUfQ3nGtaECCHg1Sz8x4jBv2DA4X8Bq3D6zPiytLN",
  "key37": "5ZB9cnEQY1Zs9Kej9dDbijqLitHJ5vPHrvJDq1VWGL44TJxnHzGq6VFd1R9jHRqbb5xtP3G9uM8r6jK7eAMRyXEa",
  "key38": "4KVd1JiQd5db8JWYKEQjxJXmtNGezUej2DxQDdanmXHMpZhiPz73N49xMrZ57qCtdzwFwddF7SKWAcAqBQ1ScNxp",
  "key39": "wJWog86KkxoXBMMrkccRyhS5r9FiPMmY6pKgEzRiTpBFjumtG7BBeRcrY5rP4FgaHi11JvzKADFN9NAfxAA2x7V",
  "key40": "a6VxyGFwgSKHdVd6NGWuEY4pZWbJ5UZCezxiqDeg5etF5v15f1kokvKjFRQrDAqEsMjz3LEKgeULcpTNHPUzGsB",
  "key41": "35gW7iB545enHGDPCPp7yTuJe6Wcs1QKquNYc1U8HPr3Wp6PCyyesQmALBUKBZcJ9CdjUZDtFv1uRj4aQjC7UqKu",
  "key42": "4W9By6ADHdExKmuCZ6G7WrwJJJDGMTt8yfG4PLXLHUMx1yZURh9nwjrfyNRMJ3fNTYogt1b9uQMkgd4Nxw6NhYFf",
  "key43": "5GEcr6ygLF65ZnryqnmbBmLeae1bamxHwj1Leychcimxi3F7jGYDrJmsNcHsG8kWPgyrGsM2gCFnSPFnySx1dyjF",
  "key44": "VdMLyVAxtvfQNBu3M8ACFqSgd1fY5GMiw9pdK1fXq3T7S2RtqyMvdQyoMV4yNkug7Frg7H7fHS11qAiG8RiASPv",
  "key45": "2BMYAM6mXgTRFR438e4wGfFvps8iEgP1giM4zsK6AGihbYVENc336uXBkfLRA7Tc4uTpaEjot27LscUnCqGxX3GP",
  "key46": "45L42Jq7vD4yLJer5jZe2RUsZNJZKWkUy2VReNPJtzqD2NaEPtLUF5MYq2jNHoKYBdqgAKD82SwsotTo92yHogQL",
  "key47": "4VTPDE5gEkhFbR8Lgw5VUyRLt8xJzzq8MdVJYm5fUUAHQMBAo5P5TSTFW1ACrxo2232pYRsahnvMUEwapd3MWP6V",
  "key48": "GAuvEJxLf9mXmxVp38TQq1MNatujJ5n5XyxrLNGsYv7CeC8bY7Vh4S1GsQBuUhxGQW9aYAk6Fxz2XwigYPmHcPJ"
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
