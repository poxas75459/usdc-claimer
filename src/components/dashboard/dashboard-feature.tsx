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
    "2xXSf8fJXrhYzPaFikEZkaVaFE5BsR27TskwwvJhhWoDBJaaoBhLsGf41MZxGVcQnLe2Thahs2WW1tTBxmGTD4EU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mTWTb3kPLLvDQ5b5xQB4wq45pjHU2jjSfww9bu9s3fRHWDbWV5gUueydZcD1rtUxGCnKMboG2LpdAq5AaVfTa75",
  "key1": "4yXB6qxr14zaxcyEKTuch9gBPLC34F7qKy4YvZxQPJffLdsxdryJ3Dd8pBEXDsJWdnZTsMjQKKp9AW9v9SbBojbt",
  "key2": "ZYweMCkydy2F4wfrpowddTChQiUfRN2YBg18NpCnv8biWE7Zpu8xgi4EuS6T4njFASK8xkooNi9RAdrszmERvQA",
  "key3": "3fRWM7HgvvBG7yVX4fNg5W17kU1CDJiCzL9cJbeQWLv7pEE3MHqVzSMMzwjuRQiiFsJYgVNqNTv9riZL5HRbbhYk",
  "key4": "TQnWxMVGCWUqH3rKDpPkdHY9WM2FP5VnSXqLvdmPpWsDVvEkkZUfdrnyr3fATmfjPaHsTbYHaNJrQzDtoawhnDy",
  "key5": "4ULygTdCRjtcPYSoipKeDuAuJuXbisphMSHnpec1WDni9U8P5h1A55B5GQcDdqdRtqMLPZpmtXipWJB6dYrBmMdg",
  "key6": "2GBGvRr7ws9sPrvUPK9qN1GiQ74cihTxibLgCYLqy2nYrr6xrkdqveWw5yyngjZQ2y8k85VRaf6QCDhSnGRqUoLC",
  "key7": "5dMfUctMrWJwr3KkM3vKBXNY1WQu99VaZnqe3BbeL9VAaJjCS61Xg9Uj3m31u6A1Gj7cNngM6cptGmJSozoNsFtc",
  "key8": "4X58h5uBghs64KvhoZqx775b66it7iF9hmdVUYCZ1P3SvNyuHUA8LtHyqwanVxKeVEZVVjjSmNegDyLDGgeL7PPM",
  "key9": "4fAsNNCFfzzZhCGFzrppMpBpKqiQM1sdEHbqTnbS5WPcTQP5D7AMJtvzwMGNs1Cikd9UVbhm7qdkAD3uZLAMsNr9",
  "key10": "587A9KT3dr8ttM6ikzgNHqR8WZqNx22aC3EkW1cHoCemyaAdqPzfoq1muceXoabvuavfVHZq8ed33KvrBraXPfqS",
  "key11": "3XEUx75PtgWu8uXiwaUmozJUzXWigDToLnDZ6Rm9YPFPVGA8Fk9KFNtbeiBu76YhmEyN5tMJtTWUJ98Ux5tGmNLY",
  "key12": "3EzLEGsZ2rUxoUdM9WzD1Kxb3QhjwNC3Xv5nZXmUp9TdUw3LhHtojaSVHS7dZ6AyH1sPeo2UjV9Fz4gz7AdfdDub",
  "key13": "4bihBw6oELKMi4V4yPwyjgeckC8UsuE53aUmJ8rbsrRtr2h22VyfsB9QSf8LCUnhhNuJrH2wBBcA2CJ6FJqEctTi",
  "key14": "4rLe87bT2jTc2jRNtFfFbFx6ddcG4yv58K9kFG63ot1sYLkpMmuUugRyMRbi1wF7micc1rBgFqyXuAqxW13bEnAg",
  "key15": "4DbfRhjfyHg1VHxssdwYrzefsBoGUoezNe7WhLGsVBfZBpZckfWuz8s2zhKSXW4YCBZMvspBJwciSBNyHvDGa3rb",
  "key16": "2RxadKCGXDgGAsHKkp73RvqteQEJrUQs2WaRYCVCwCebbndUP5nzKtsi8tRK6vbLG5g3o3ed71pTjjBmEX8JkY8J",
  "key17": "a6PVSbMpTEmrWaGDAR6Zm3jMQMPuUsnX6ipjRNYLX8aghoCz2yXHYcWbYF8n1CxKM7LGpfrzFMPsa4xAZ2tfFor",
  "key18": "2cs8LYwYLBhVjPpB2pE5RbGQUvrXhpRuY6D3ahCy12zRUHTNPXuVR5ZuLzCSsSjcR2tvH7fe5UjCa8XUA1yZHRrB",
  "key19": "5uVr5sBVLqnGeLKr5dQEeeM7chxj8GBcwyEHCFQc8qkV12NEDE2xnwjSajMCp1LX5RXgWuC7r1rjuMkhYG77zP9r",
  "key20": "2hMdt5TdZnCeFgtLC1WmtRzByj7UhnawvyoL6FcPuNyK1x3cWewdwp27rZxPv1Bbjj93KL3Ger2J3shfhaenBBPC",
  "key21": "3yQC5HxMCXhNDaqvEg6FiX232feWHfd2QaWV7rhTuDKDhgQqG6jjnvfYWU4f9qsSUQYockxL1RBHDdggJZEcjkui",
  "key22": "3UpWDCfhG9mySuyxSwCNKYXjWTR4hCsg3TBxvxcAnQnXWEaTKprgfUf5U6uiNxNmcPehFmsaT19Z5osmVv5yGjMs",
  "key23": "VopHweP8TgajMQsYWPLepx5PCHZknD7BJtvf3pU3bnrUivmC9yKvRyCULHTnto4p8kqrby5BiK2ZXAC2pXWK8RL",
  "key24": "4B2xeDkBiuaVqt7Yd76JTAtv1x9kKDFdKSbv5AQXQUJ2aVcd9crKfVXUhXFCjYMM13pX8JVLPivFx7iSxwrvJGqr",
  "key25": "2pVUA55mmRrQmxBTt4gD6YQhHQEiqmR31Zko18yYV3Lk52wwx1K5Ar757cCodmDh6NXRYADNQ9D5V9isaJGMgxd5",
  "key26": "4o8ZSEWqJsMZrCKTALDJAzpmLqDR1kFtQ6LuaFvbpKqndeWRgiRR1Fd69P2jNvQxaTCgMzJMWx68inN8GZz8NZru",
  "key27": "1Ab8eoAnHnuWWkst6v6tF8Dm8mizXDPPu7HBAB6q6pZTgP33bBGwWDSqDQzdNNP1VthDXJybeDxeTkpWCys471y",
  "key28": "397ChSCPCcWjZ8vcqzBuXB1ych34cKhfZB8jc7AuPwLWkDj1byYj1TK86WePhupRRau5b3KfHcnVacZjXBmCYKgb",
  "key29": "TYFG4mh6fr6pJbi4UbVHheZFWtgtNqZjf4EF7wU3QZMPiAaiHPhQyqT87aohCrWQyfpQuD7wKGPrMEz7oH1jHFT",
  "key30": "5reVpAVX4UF8E3nhokGWiYLHtSU8YBQQMK1GJdY8ZgMJ42i3VQtTAcg1m2NLizjL6ugxuuaLz2Ukd8h6xKxUDG71",
  "key31": "4nS351NdZvufGxh8WeAJeR1wJQi4EM1m22YTWBBRNwjxn4Zv1hSCMfCJtWHxwUUTcs8RCsdfWjcKbNawDAA1wv5J",
  "key32": "3oVYpXbqKCR6ZNX3exdbWjyDs6skJzWNgC1BupZeEG6GqH1g9uZmib1pcoxoz56eANKbEsTEVbaH2azPeThVdccd",
  "key33": "5c4NdgvoASE47jisK3Vv979S8nbBGyYdkpX7XFoxiZooiBViQXLv9vadhuTrdn1VtZBu2tDuzj4BdFj4Z8tScXdj",
  "key34": "52taJGrxNxWzVNszcjxNszrY1J7THDpV88WR13eeNYLiK6baa8gXBW6WDgQUQ7i147NcJYMR3iGS2oJgau1mw6Yr",
  "key35": "4pZkf3eVr5FqokDSjs3SjYY2G9LSnr9SSz6u4t28koKRCbn1BEqXuZJKzse5DrQ8upGdiyTmxoCSKnnfDeWcvipf",
  "key36": "44UdwojScEQd7cSsSeH6VMkYz5oiQUnB26MNUsG2AxkzTD9gAiKWZ1PiQ3Pxk3QxFX3HjFf4mBSFenTLTfoVzscS",
  "key37": "3SqfQtobZXn6MgaKSCbzHUbfkbNip2XvwNMnn6YrPn3iFxKatXeFnXeMUYdnRpCTgWVtefBcGkw3A8N31KfwTcET",
  "key38": "4JhxUKFBkBuv6DSpMyEPH8YBWJ8yPv7uRm3TTaUjUs5vBcWpE2zW5vjzyJvKGhKnRUBqCXtrZ4PxMMTYTA2AjUNB",
  "key39": "4FgHiCqdMJbkY8zqxVEwN3g3yHb5CYUCf2n4MYaLFkqVzHfUW7eU9tczjYLPLHQ4fRfQP9tr7knSMSx5pDVvYmtD",
  "key40": "pZ11TxefNjMPLVBF6aaQ7RvEBF8LEmSsqQhN8K3HM2adQQ9tiFSKHfD3TdVLcMCyiUgZs1JwfybZ943PGRgyZY9",
  "key41": "4P5Q3TR8XgeQJ5RGgcwWcUspzFBn5QgqUjkaaGm1ywZJMe6rnbaRL333RmWezBMy4WTjveYHqNnacEL2Dmw9jnLH",
  "key42": "38Kv54DjG13hCW53UpAaktJAGWHAJydCZQbsEutvq2kno8PF1RAj7x9Hd69XwDnxS9pAK1jsVANbrh4xQ3hLmPeN",
  "key43": "4zh15bTqwjAjVQ9TKUWx7xYZ66ZGMZcomi6w9hocr9tNGJEFexVd8S7GXqMS2Hmbvq3k9KJJy2iCyKnEqXs6TMQf",
  "key44": "3ch1eJPbaCKUCsABTGAkw7vm5ucWdPnRwoafT8emnLGjAKgGfbCWnrsitJzbZ5f18zfVSAUkuTxeVe11NLGchScZ"
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
