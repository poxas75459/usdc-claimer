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
    "4xr4KpoidJuvEaV34kHv2Jkvb4d4H7yPGiYmdw5EHjVhZ9JsxRWEtW3HyfeUNUhsKyK78bvDVJJsmTB4ZwXknpoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BoD3YnfcvTcx7YrkfZrHojjbuy6duzJqYrANcoQhEdPTLLMPG6iCNX5PTD6ibdfWCGk2NmvLF3Gkuq8C7wi9G2L",
  "key1": "3fXj93KXrua7CBzWEqsvv26keTs5Dj6moKpnuMzPSP6GDD1stV3QjvLc2Y3WyfXsH4ywa9QQhYofk7HGWzjkGD1t",
  "key2": "MraPQ8ccvWtM2vhNxV3xs4iyGSqAuSabbePfuFpk48PGtu2jZTwZ41hPmZX17vgCi6PTahe4XpgNjYnAGXH8PH3",
  "key3": "5YfuJvRhsxiQJB9GdMPTPoDzZkdz2VWJ772ZVc1RBGWw8Z8Pft8kNbE9d1CofHQvu5QJepFkWGmg5wFHYCSEtNe",
  "key4": "5Cj5gr7bJ1RJSg78umzUyCPRyGXcccPKxMiizdaUTcrJjM27BGyWcKDrXLQ8TXBKFj1Dzjms6bN8kNXyWrdwsTbr",
  "key5": "3qiQ1i1CKNrgpZPCqE2TZ1SMx19jbR2uVRMAkn9qtByGZaw9Z36mZZiuYvvPiFLWmTh6jykjBs5otjDNhDk4tToK",
  "key6": "2wdEKSoTiSd9zL3GeDBoyUsPjqhWD1o9SoRu71htTn2yargVF2wC6GBFJ5H74mvompQsyNYN3akYJKdDt14kPgzh",
  "key7": "58sZEnGNoX7Cb4YJ8mRX8rbydEgQjQwy1RQFGsfp6tfEPZRisM1hmXCe45jHhVoRzpToqKs2yiaGugRt78qtzQot",
  "key8": "4oYe5FzdMBtyvjANEhK9KzTudAk7UvXg142VYfskuLnDNPnGatV9b3gch1vqscjWGU4XwcS2FaJzoKAzoEvmz976",
  "key9": "4CkuSR6RFobbomJAn6Jb6uWVgUqp2YM5JoGPSB69fNLjpNiHgTeBkSKzaVAMKPkxnJBkjQtYDscLeYhzaFmaDAH3",
  "key10": "4UnXLcq8XoDygQM9xrDxmtVy5sYJtrkNwM1n7PjVbceuYLYLAdQE93bZftbSFsduyCkwG4XpNAr3TiryUkLAPqqf",
  "key11": "3ocEnASaNaSpoCPXcbsc1D1qp3TrBqy3VYCoHZSDFexBJbmijeuqxntJiVvFrkL7oXXyYrMddHd8KCrGAekvLj5Z",
  "key12": "5M5V3WRV49ASmTK2d4AkDDeVoi5qdR5XVJgFxbp36M8eWNahPtU4HjeFMGrU7eUUiu4Ef6WaKuFvcuAtUxGKLSbs",
  "key13": "3UKdAgvDZyd2LJSDxoxg3YTwUwVbERpP6duuLe1KfzNUCNcU61cLaAjUBC9FqXKFxfuuzXekHA82C4kZ3TPQyECQ",
  "key14": "4RF5eNqWVSBUWrRZR47dPYj7bo5x4fJwyNnC9bN72Q3jSVP4JCgK6nHfVQ3fGwyQzD11pQrUh8sYyTFBb5MWAsNQ",
  "key15": "358s6BibMeSGP4ZKMp5kMAAEQtDwFnp4C2RAaJVL5Wtcu6ZwoibosiZtFkeds4u3QgyPoBksLRC9v1ExWWumMC5a",
  "key16": "1twikPrQoMYpLMNTHTMnTJCAKMcJfzDkxGexAwQmV2K3WkrZ93RtwpfQ9hexq3AZTQaHgg3Kz58RDBbA8v47u7n",
  "key17": "64rssguDqcmDA8QbsMeKxbBU9WPYCw4svnuP9v8G1SLPZpEXaJm9Wfpuk5QKNSPMH4LDYNyCutcTnYMtU6JrwSD5",
  "key18": "4CkahVgVTmMaMAaYztSF4x8QKUUHXniBwfMTJ2SVzLsbYFhfKh6LFKVxh7fgz4oHes9kgVfh5ETRRby22UM2RdZ3",
  "key19": "2gReQUDNyASzK11uDNEadxmG6Zhj8MKNfzYbF69zFmW8ZJdf9k71VL2KA9y9defFczufsyP7cEYXipjH92iQ8rYQ",
  "key20": "4ojsh5wRURpa5zG6F7pkmDLBvFqo18gvm9giRDhkPxR8zMBbZUVKRohsKsF2cBD4vEaw4WjeL4WWnBU5BBdiapgJ",
  "key21": "4iSiMv6MsCrwr9rMxyAoG9tNZHHjykfqNWDe97NFgJPqCixRzT6uHQQkVWdvGePEVqdhC1Y4U51b9rwPn5ALqFGr",
  "key22": "U9Shthk1eu22avbs3nEh6WL1f3ktogrqLZaKGMrJeHFDRA257zyEXTkt6HXWpUkTsmLFrbPDqowJSfgNsUVv6X8",
  "key23": "2ghRGNtH6u9oLMQC12paWvSDXXfQv6N6eLbk4Tc7YujPLAFZ4Kj7t2VCXDgmQfwy61vEvnckES7v4X94NQmjfxqk",
  "key24": "4jcJYfcdMpXDfduTdLPGTt5KHPoT5X5i6jFBo5bLeLQPDMQEYnBsPwBFk68sToTYwP3G7yLwBKqcadiz5Hb6PzP1",
  "key25": "5ybopfupZdTmT9GQYD7ktyiLwtSxkbxV67GvS1UiHKEovRZ4EHexbb3S4eZvEne3fENDjxzeNKa7qHbV8u69ynMq",
  "key26": "4hiLjeEr9Uvn9mT3wbVMdy5vq2rcZLDthT1WjvpgwFsnTo8GdqfNVXzuFPGtyMyZMgo3qfgEHSj2iADf5nUjZvzw",
  "key27": "3eqcWRjL36bwCt3kt5YCcPhDN47KuMurV4mrzDM3x4aM4aQ3YALCbiewoPRbow1bmhtXN5SE7BmHz7rDHK3ffnnh",
  "key28": "2VsCdTRTBoh131p35wRtbWBqAFd1vyyNPDakTJTVdzzqYLM7hSXQjmiVQpmHJM8DKT8eotaLp9YUPqTepV7if1hs",
  "key29": "3GNmWvxskQQGGsJfe5ENjRV3BbPhmXa5mfxugZisW96rBuMU6aQ2FdMy21iRzfAeQS3xaB5dWtsQYjPJxJrt7Vuo",
  "key30": "2MyMgEdg1cwWCR3F4jVCveomvAcy3YwLsFVsH9C5bnw44Xk4hJnTbkLR786xzeLU9ZBwhYSx9v1R2inVdQ3iybr5",
  "key31": "3p1dG8FPqTzVJts4ZCA4p6mKjYo12izMWL13HtharEgko8Lw2s2CLVtweFDF5hWqvPwvTTj9eLQ8fxKkgb9haMNv",
  "key32": "3Ze1DpLqsVtf6hW4EBpPp4VmAwnBBEjV5tu5yvqL1zKmFkoGvp7sKpiKGDDiTh7ZmWB15Kijci8JPWKv7hcH9HPt",
  "key33": "FzVLUwqxD7jJWxZUrqvFYLiamaXRg8mcjzK35NW6d6UkWiJ8VK56dzhhYPdKgp2zUk5YccLreTDZRyYgRhogjf5",
  "key34": "CoSjffrJtzZMY8WgiK67NMKVBuBzuRJLK8zM4cmFQs2fkvxth7v9nqWUKZ2f2HNyjRY5Pg8QK9WqLLZe8xGHabK",
  "key35": "4BSV6AxUvw2hnmGpQBXbC3hmYyd46aoDgZysmDrw2AZqnLz5s27q44sfRPyXq3XkecEVTEqJG4fztjfx6HjnJJiZ",
  "key36": "2t2DkCSUHTcd7n1xmk7YCZnZvWKiRKRbK466WvbpZSrohwnPqf7ouFFmWYHX2Ao4X43YkRm8ajUXtjUSFpHhxadg",
  "key37": "4fQRpKWGXk1AapUzGcop12hht5KgVGDH9HkZahfjuu3VyPB3aSLyiBLFX49ZfAZJvJNy2JQUbcWX7V7marAwRRLm",
  "key38": "55pCoGgobpsyaV5Lo8DKQuQkPHSXGsxPWhgjgmujBSyyUXPu4ko12dMrVxZ1zDaPuNJsNZWBkXYYbA3B9deZAyy7",
  "key39": "3Kue3T6nn5TyMn3g2GN5NnJGCASb6KvuLCPLep6MKoyrtAHgYp2CLpcqCaZvVh9WxuBVKTit94k655eyseAfq5Q",
  "key40": "72qKMPUNXp3YbtnwcpVjrnQmMLdCr7zLGbSh1GhidhH2a8wVnYg9wmr8ctVvuMiyfA9YQHfgPAHvzbyoVCuYbYY",
  "key41": "2Xh2CuVfqR35q9SsdBBsQAZw1egteBSwBLEc6faoUMsTLRUMSjdnBkedNcu6b1KhL3MYuf6Akj5tdn8xYjkbWW75",
  "key42": "3eyV1LazW9h5j7LXmpary1nKVgHAzTmN33cSqNBft37V3obpSQjwXpRGReLyb7DiyuHaao3eGp8j6byv5tP4Nsi2",
  "key43": "37hDrJDfCXpyVRpe2fTb7bezbDryq1sz8SkViih9bJerF5pjR47y8gBCK3b2seoakEUMzCnptHq8k8GHTuzLUPm5",
  "key44": "4woPBQhoJT8xoHfc2WPCfevRyuLvWQooMzd8pR74w3g67netRaCdTfnztdqcxDdJbjvHsBuscTukAgwjF1YFPxGG",
  "key45": "3AeQ3o21PMU8uJMAPqttSuA5boxfEu5mZwBXT2WnugPcKYHL1Qzha7NiAHfDDQKVYgQpQnq8HtnkxRcXidRmf956",
  "key46": "49ZwkAE6zVHcr3m2jmY2eQJgZ6s2ouHckWmXk1JciirisEVhZ91UzUXuC3uyCDqCo38hZgGikLS8gZ7JPYALkowk",
  "key47": "5wxbYXf72TzaY2LpKurRPj7yXtC1t6Fz2M1ShZMvY9WXHtEZ1PxmomKvBxS3zdjEMPxP7iGCckyYNDhGuSoEDkLL",
  "key48": "iRbyok2T7KqbVYUSvopEuC3gQBjvnoggKo6TrECrfxtRaW54819KvUnMzwTxHk1iVUgfCZKYHSUc2cTNPfZ75mw",
  "key49": "4JU3RcP2SuDPMkW8nhKmQ5z7ifW1H488YbXtcWuFJN9xFwwxQXEPdqYKswEnnJZYux4A2cCxVzMbvKP9Hi4kFcTp"
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
