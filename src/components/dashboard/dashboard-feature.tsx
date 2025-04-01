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
    "3JQBFDo3XJZu8AoKzUQH3hCs5e9Js3m2PYgV1ryVJgKmPFdRx2azZsyWSxMKAvGRZYQokQg7jYQci6YeCyhB5gLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BY5qCTqse7r53AtyqKAQPcMnLFtDiKhnBqHWJ2tjaYbmfHm2uduyMCw6t7cjDZtd5FdMPdefpfLKP3tZGVhYcjV",
  "key1": "3HyfMwSfTTEZrgPWEBHkHJcX3UguuysoxdwqYFKLsjSgC14XqSdndhRXFaeEDvsSSP38UUXyLghkCcH3mD2xUxcp",
  "key2": "dXWkcapAsKMoPCNgoe5N2ApBXAjhCDrxgrLYGCz9TrPxZtFE1s1smuabbdY3gdUj8a46RNS3PWKVgnyPaLHGnSn",
  "key3": "2JXeoCA1iYAtAdiQT6o3KGSchro7WzQLy5qjqQy7F5PssWdYW7Bpjk3XKaApS7SbTb1L3yys27oNExcPfRJjYvrh",
  "key4": "2kxeyZdkeAB4PDnvQy1aMcpozU9bDGcxtZh1kByvWuN4CSWGn3r3qxifbFVUfg9TbTCC8AstkKiss44K1sq4eAVR",
  "key5": "4hb7yPuC2ueCK3RZkQjx8SGyBanCmKurxhAssXrXoQFAXSdFcsQsZpc36BcDhmuowAykTVYwCz7zcTB8nZgFK6Bh",
  "key6": "35iLtJHmyyjF2CyTJ3zHn37DujJwLZeh9AcRJu8pknGBCo6tjU3okmsiGA4sD5Dweqh2humHqq2a4k4B5x2myLjC",
  "key7": "2Er8vshxuDpJcnGuYtuzPWEkijFPxNVUdxaQAgPEQzV5xCijTwUyN4UFmNjbjsYR76LSufgu3K2ThJbDRuK9x4iw",
  "key8": "cRwpdgYrTPXTSPfPuQptR2SCWntU7Gk49WxT1n4oDBrfBGqd9sHjhHu1Rvsq1HYgVJ7aLEYZMNkni4GvbjVEsvf",
  "key9": "3FUpZBRu5eTHn9w7kLbW2E3NhXGXtXAWuumBW7qpLKpBscDMPRESC23mVGNPCETpHCSrgVuMKeJPETKcqBEgonoE",
  "key10": "3qVUp24mbGRB5svwHMkWw8rap3C6WCC52L3G6FWEFd4Dx34W1iwuurggM6mqQGYLydGtTUnVe1M3bVE4iREkurEa",
  "key11": "4gcBTVtgaVUpo45BTENTBJSqBzzKLUpk66RGHSBYykabyuRw8FmRWQ57bEJfnGj5MxmnRcDfNLT8fMtwn41uJg9a",
  "key12": "iRrjTsdWKYLx54v4MABEoxAi6ArrhKxT3u2GWNJvAm7v5eHZVmGSNJcVHqmmfvzb8aDAaKyXdWtkuxb8oCVcHzk",
  "key13": "4MYfxpLCZ2GhC4fm296Pm2rddfiCEMi5fNds7n45q9e7GjcVHB8F36EjiB4XK7u1mUp1UVKwemM74dppHD5D8yvj",
  "key14": "337tW1ywE1MGZ2mTbovy4naME4bR4WgiW2kzdpVMnH3rntKpXtbWkjGtbvMRK4YGhUfAfkJzFUgncT4pdF7Yt7Kq",
  "key15": "woKAk2zUymzNQcWxcaLVSY6wut2ZS5J3RSKgMD5MhmXQVHiwv4hVvBaxhn85zb8B51LrJ9ZxxVXGHSEUyPGF6rm",
  "key16": "7pc3KmVQv82dNeeyiXHF3rLNrueL69mhVeqpDQzZfYtDxfBZpbVcWpJgiMMTsqocdRpKiixycCYwNaqE37mhfXb",
  "key17": "3qgqhQbVqQZKQ2xKxH2SbGkqxd3dtndSNJpujEqqrZyMy7RX3QwMiDqLHJyQsHLnavfxBeFsKUB3e571EY4gsTGt",
  "key18": "66D8Z8Adg91FX8Xm1bmu2tYq1dtBDgnN87BtASSLzT4vZi5zeZhriuQAcQe9WwPJimdAS7ewW9HN14KchZFKnRTU",
  "key19": "YWq4oghozw7uHkkUHmzuKcMF3ed28iAjaFwqLpUwGnWk6tL2uA6SkLvRh7BWULiQwKoCEYgYwR94t4vq3NQJ58Z",
  "key20": "4aSUjZGDSkXrxDAFoxTNrHkUXpjucFkywxUejM22qn7yQi5G2fbUwnyeQUSyoA6NRxjGcXLmRDUpXEfgSMGtQQWH",
  "key21": "2tTUNFRGK3vQAHw44JpwWQkmsqemVY8fa2YdgjBaAurMdE7sZpGXNUM1Wf8ZvcSHNG4YQUHWkiuTBUPGx7yKNFh4",
  "key22": "4rZ6a2TDZb4JkfTtxAqiQvHYyzsQkghPChBk7229SGsvrgbmEeEktpdcjoJ4PJ35nxa7wLBfiqVwf2G2j6wYHd56",
  "key23": "B9fkWQFwUoPdCWKuDxp5z2NYunTF1CdxiRFQsiCd5CiS3wpuNu1vCycsKsFay2cev6dac3KHJxkCYkJMaCbNBTg",
  "key24": "28GMb95G2TjvA3LchAAjaUS2EPoXwQfYot3GMSrdqSaCQ4jTSHDfxJUF7AeLgEKs4kfTPhEog428LV6EQMDRqGtM",
  "key25": "4KXWvJiQxv2kiwA5MafshNQ5bNkBv1jBumdTvswEeMWLKPNRvVzJe7Sm5dqzefhfWqymCCMDKdWdDaEERDAncPnZ",
  "key26": "VfJSez27TK6zfa9F1dui3QVm87Emrpfad7Ce1AfqyxJfXReGmYoCiuLXZuTH8pRNFVLsxStMGGnHEkS33Qydu8d",
  "key27": "2MboiC5NAH6sooLdqH1CZGCsa3cxuuboT82ewtjziXUDhAgVjjjvezAqFHr59YTJdXJwiqt61Vjv8YdHLXwMjsub",
  "key28": "4hHWEKLcwpwKWgvqtofEjeCMdw9XuMkaNiwWeMmuGABxDGrqdUoGYULa66faHTuH8y7AoGE7hnPksmNsh4zVgZpB",
  "key29": "5imgNra5XqdE3SjKsQEqwZbkaUB1oFhqK61ycQYguwnpp3AppPAyB5o7FNw7BLp4R537nsnrJy9ycxQmQGQKuvdb",
  "key30": "256oHtu9E7pC1KQ9hzLbd3tRJUToZGU49AZ7WvWCMGBk6tWacqsHMsg9yUfTj3u3V1ti8CDb2aKXEx2ERmLcQrjX",
  "key31": "3dEo8yDBEZaaUrvXKqhF6LKcsu8JpFDRw2U16DQ2Fxns2fBfrevFz5iNkfMakF27cRqzLYQQSFDnrxLfzDXrdiZH",
  "key32": "4wmsZtQpWgYF3FsbAAd61R5935LvACLqwgZC4ahGPwCY7n7CXDcfQVmgmFHu44xx2gBSpY27N5GNh2TBmt8VPuKE",
  "key33": "qrsFpKEMSQWCJfzYv5CXbMH1mG15ypByosJttidDtPFudDrauM5hETaa4Vuj8nhnhQ9Dbrypvj3CaGTWYtRkGHR",
  "key34": "5UxxwgA2U7UHSLeJ9Z15VwWNi5q1XNxpm224VLiJYis3TFcZRutvFXVjRjCanwPcPoDLrsjT6VgMqxeEkBwL1NjE",
  "key35": "54Xe8KqjE8t7mz88eENpG2hsF655CphMNg73Td2a2keJkNaMLdNQmqL6pmYpRQARhqaCe9JqFRetAGCDrnSpJWMi"
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
