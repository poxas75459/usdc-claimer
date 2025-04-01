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
    "4ZvSV1HxXXUVzLwArzBWiZ8HuTi2AKvBWL78w1Y58LMVRqSYaFWDm4RX8cYKSvWV8HNct9DGUnR8SNVmQG5qdHK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29oU4f5fKGmpZgs3rCZQ4kUEzRbVYeY17XEECD1N4Z8i5VQSrcaK2zHbLyhJRFS8f7xWPynLgt7GogqN3tiV4UZr",
  "key1": "2SCzeHE6D3CGzzH1NSb7rPTF9uwPbPW1ozxwbDFetb7W6fkEY1pyFgrQcqTXEw8H1egntvDgeu6uz2o6vUKTQEAZ",
  "key2": "3KjQdEsSyPbNGE5zcu2yUUKWAQ5LZueE3T5CXHsUTiYhFYEtRSQJXBRJeaG2MFqGbYUzp2e1FYjcqRMsbhAKyLhv",
  "key3": "5JEzSMNLuBcS6z5BB54qdscPVc5ATcRaurGFMrVY5Aex8QAkRV4EgkaYAqgWKr7TcFB44RTjNMn9LXeWmPykhYKi",
  "key4": "zipKw4qZpWSb4MHkLcWBVn8YMN6fn4KPPq3wkjLUttTshLhj4hzxcNs9N53qZ4hVpWDwYWbJng3y8vA7uRmm73Z",
  "key5": "2xFzFcY1ra9PSXQvvRQf4Z2pB1wPggXyE6gKx5vnzRnyxqP9DqYpVVXwwofV6NjR3eGbqJZLFsYn3ZetQvvKAMFJ",
  "key6": "3Px59Ar2g6Sr3jW8YFofwJfANKcF6f1jwJzrzALiLyyVGXXKUaE8zdFBGD5D7zEecVWb6VDnLr3GjBzV3qwoP191",
  "key7": "4iSrh7en1FcZnjXNAJn6U67vMnxMDWbBQH9YmScyBUMP4pBMF6SZgiEdfebgpFAD8oHYa7eGw7xTUFP7zxGmQgBy",
  "key8": "61RX6QjR7ejnpCoubdCLPJEKXdqVYDMQZJqfVuU1vYSV462WJYPUm127iscpzx9UuCrrGkQ5T38ibicvqmBTBXbv",
  "key9": "1LzL7Nw2Xsk1JsTHKwTeHX95M6C55ouosuuDPhBkiDyEPXxVzzkadA17rRyvZsTnTSdCfbFi1WNZcm4ejgnZpnp",
  "key10": "VgpDH545e4FgrZw87uQbg57EAy3UAQjg5a4MraenU6NvkSBBv9L6BuMpMXsr5vWDTQUM6SKz9iLfzwMkcDs3rCt",
  "key11": "4ieuui51vRVHufzhBX64snCWie33f9maFmiemJkqJDHFceTpUwDsnsKeQPaVXxCGE45NUaaDMTU6V7ykpAnZzBEp",
  "key12": "4GADiPpcsSabAiW4VTakikbyMaxEfk2jQ7THbsM19DhW1PwU5ovpczdGLff71jooLCSxS3dQDTzbT1ezpV78RCwf",
  "key13": "4yUJNAVC2VKJhYJ5E8smzB1DddQzTzRiSWFGPNhiexHNgVkHvtrZaGMNHozGLygHfaTRsMKuR39nYbGxM6k9ejG5",
  "key14": "5VAt5ZwDdMTKR1jyWHoHr9Hf79uxhiLCgV2gaTCdRVvuBF4W5uyqPuaRaj9CzEh1PQwMJR8vz1XxV6PYep9yTus5",
  "key15": "FAFkw5Zc6sCjz85y74L6YCEp5k3xbN5JK5FAR1z4zBxymb4m69x7ofVTDBfSsSPn2CvnBz8NUbbQQgMrYV4EWLY",
  "key16": "5VRMAaLPAUgRWMh2jabKP1XAZCPy1nQLEeNuiJ2XST1sVBCLqBSTJLXjvjXcvusrR5c7ZMNjsz1e91HxGu91id5m",
  "key17": "coi4DGf2gTewxaoD5dB1y1fXddRTta6RQwrjpReq3ezxSkMbF94JGrkLYuXQMGdJiovEQbhvmXSuvMBXL2nDWnC",
  "key18": "N1s3L7i5EqENcPFbFfnsU14KSK8qxzargNCW1RqJd85GHP66cEuUrN445nfJqxhvp2Rs4rE4Z914LBujYPk8SsV",
  "key19": "5vd4XqTSCh39vKv1Upk7Ljoc9uAgZu6GQhKAdL75tRhJNTfuwy53b3YweSiqTMqBDJVsjipipSF3FoTDXiVE68xb",
  "key20": "PwXkHuZa5WMpybayjK7cGvE9opsNX67ke5ncLktban6bJq5st41WDPEELALHH4GtQDeY4w8gBarkvKFiwNsFbtV",
  "key21": "4GDwPS2DF9reJkjhRUxs7dNmdtdjEDi44wf61nDSBvYxvHuLegQB4EEom9A9NPChHiY9W7D4ooaWjvy7FAjXFNXM",
  "key22": "LFhPmuqw9WoBHRJfex3jdowJn8e6khmzKCcb28DwSH8Ux1kFbVnzuKVh9npM7iWi5oVVKf5cGSATuzBZVjcHySZ",
  "key23": "3pRwYNYr3cMCZaxUrpgBsNF9QvN5ZGgNaDxBPtDctMCC34k7hC4f6j2547vrKnEBtnzCGr8xoMXNbkzFWjqmv9T2",
  "key24": "2ae2STrAEwrHz59CGT9LQ357M4YePgHrYY2grhCcxjfpuszZ7m4auqzKd3xevqx8m13NR9KMQDJGbakpLLYKX5kK",
  "key25": "39szKe36HpPbm8LVT9mvwZ9nZn8oukpCK88Z6pMQo3nAbPXHRNxFnctJ76pLejXarSNNbq3GdW6oHNtLKeP5Kg6g",
  "key26": "3gYueKNYQ4zb4nT8DJHrpLTLQhynvqnW8fgH3rpf6v4FN3fCSyyBDwD5PgC5UhHaaVPs82gL6jZrxZGfxPWhhg92",
  "key27": "4s73YPh1kRTRkT3pXcKgeeA6BfCbfSDh7jMfKHLR5UHWdf151791RaDVqTz9Uki8uKAKDgcKR7etv2coXkSp49BD",
  "key28": "aFSet7oT8YhsbGGeforNYfTbQrUV1oTkxEcp8eCjTRw3NCdwvAxzHECNu1HjdTcDTRiovVvBBzcAmHkaia4ZDLo",
  "key29": "3oAKM6gfsukSvmPp3baDHPrzu6yicRTgGb7tmHHYwZp4RaK7syGkDeJ8AiCPFiVShwgW99XEZ2tY2V57KYjLnkkA",
  "key30": "5EMK5NYoehuDTGmZdZLuwfENenGQugrwa8zqYB9Zjeovt1pxmeYAuGtfbt16nbUZVDoTV1gEmbfAFvkxgGS8PqNf",
  "key31": "5HHWG8QcPFPDjTRsygRgcgLrs7Wv8uAEyW7J4kagQDzrHgyL4RVD3EaVvi2Ekd5SqVaEz1qRSb4GF3AXjAmFgRxW",
  "key32": "2VLpYCMHkZEnXF6aisa5Q31jo7vhrKTYFZjJe3kfmREy2D9EdP25fjbiNeqxRwu3DehusXCCBXTZHkkCkhSELwk6",
  "key33": "hgwTwM2NrJFnPBFMaw5QYexssuRMGDTUMbdnsMhQG93EYD6hhPbr4KZbYyLaVVoxfT8VuRpz9n7PY9roSuH7HaQ",
  "key34": "5W4twUvEyBwgTF9sKfQcvyrXkKPvQ3MyCFcqV2ysyZ6FdSEMiG5yPeCgQwJxTfLcWGGfYnVeRUMPTzi7ZVS2Dzpd",
  "key35": "3WnwjBhD2pc4M1nRHuc4JHq1HBKhwWVBFiNFvtuW52hdseyoDwYkL57xfFJaqubMFedTZaVyhx8jEjCK9zTA75Ri",
  "key36": "5N2xPjdovrSJfLFzLz5Q9YJfcTZcWXqoMQyRHvZYPfxrFqscRVpAyvku54ZwoZzsCbp9hmGk9YuwkBeYrLcxqnso",
  "key37": "aYyoe7BFqHSx71F2uoQr1htAct9XyBbBoWbsFgjAYmLiSSo117zT85PFDP3Q5Pq1dTMt4qzfHNqMGXHrDm2C1Fy",
  "key38": "7wSJXcwFijqJacNtgicyVG24F3tPM9sHZa6umB7T7yjowgy8DAawtQ5XLrPuDeAfQT9WkDV4SnHcWT7ZWqC41GN",
  "key39": "2eiWFkJgoB7M7xSjkLzuuQD1h8SotygAvhmB11XxnJzghSCi9RcdLrMbaK6LaFcUAf7wEYm8SpXWiaj3dVFZphzZ",
  "key40": "3fXhaQoQFKxRGcYA7eDiiG5XxV5GvHXBTxeDoTPZMMDdLXKnR49zHLhtTMqw4mjg9EhiBkMQBG1L475m6nGEhtKk",
  "key41": "38vbu2AG73YEsT3GbVeTYbQM8nYyKDbuScraNKemesaNpd1MFsbRgegYZZHNMCz7UMgX6rKjjzqUd9CBfGvYLp5y"
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
