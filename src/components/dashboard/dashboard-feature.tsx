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
    "5EmPH6c4K43Y5yWGpQCQZwRndLtjVq9cd8yJp4ckSabUuy7ge7Pv2XyZ7wqqVYJgtD3VdRaLJbPa4TX7eKFsLnbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65V76RsayArwRT2fmWX1BZbrWhytSKzmpvMXJEKHGRNwDVnSJYK4W648Nfkg2trBgCPcs21AyZkVu8fLeyMzjwqw",
  "key1": "3dedbxzo1RUZThWeaVuRTL6m2TMjV6ac335jB3sGUkesr9YpW1XKGCx4VovP6wDQhppXB3ZfGy5RobweCoyzQCfi",
  "key2": "kHcmcZbtoqyPwzHDVmXM7fYUzcKdtrBAVtPGWB7H6ZPrVhE3xzTvfdumrRMoUT1qsWUdanGexrn8HeArHnajUpz",
  "key3": "5r7TWB1gJ4LmhE5pYVze4ER5eb1ftYUznz3P6ot6kZDT4Cy9kvTVJxgmFWMkqaMshTXWrg3i6qKWeAtWvdJfXJnd",
  "key4": "3A4xq8sH35F7tRxPM31vmPea2Uc1ZmRuXmexUqvjppSUKacTUb6B9TuZNPXgQbARpai1ZeCfLVd2ncx74DkoieCT",
  "key5": "3PgWUtShEhPzxfF2THpSpLM7Jss5iSktJcTET81XYGaddikKW2vGFme2Ti1CFbiU8Hyw83dppn9mnPnpvxdBvK4v",
  "key6": "24b4Ze2vbxEsVa5TjTYaw2SRiABnWPJQ5h2xicNfhwXjpqViSNZkcBEnmGr98pStjtBhAwyzMRCF1MwfBcqYccqq",
  "key7": "2U8DQ94ugKvrKY2ayUhtMYEjAJsvGdwFxQLjfp4H6bSdfEk7xbDSh8wEWUcjssowKPUu34gZMRj86CTq6Dt6TAjC",
  "key8": "5egNY7HAEh2nw5y93nXnnm9Vqq3k5mbGXY4zdVGUTy9fPkQxy5HJDjFfcV5CwwZ5hATnmFMe7S7yrQeKx2eys6YN",
  "key9": "1EdUe9raLHaBzsRbLnD2mdBWQCN84fRxFwnLeffQyy2r85Y8UkmVeMr1pBtAbbowuUH7erhY7WUQu7YQ1LD5qQZ",
  "key10": "3bDCD7vxWZ2TKvWQT6x6bc2zj6upES9dft2JfAKzUcGKexoYWRtg613PNrfsbLwUb6Gr7PVhPDNA9FzKFLLu9iKF",
  "key11": "5nzsWdPNNj5qKqrw8TmkMQotwJY4RVBvf3PXJanALcmsf4YZ7nKREybx8TXACUYz9hgm8rCdGfjiJJCPrVCSqyLh",
  "key12": "XouXtBN3zw6TUbCeejPDEZaD3R4jE6sji1NN4c4g5wwi79NnsARAbt4T5V7Y3qMRzKPXStjTm7h449zaCWbVEib",
  "key13": "2j4knBJ9MwKhxirYWLihDwdBbNyEUcra8MrgEQF6QxfaCquw5ReTemiJsy9YjgHRPdLBM4kR5Fuea3K9cf5DrBf4",
  "key14": "5K3HcsfxGFse1RMJSDvgBTjKGoMRL89zjLWKy2d7f63M1FKN5duvHBT79svGgoxbPm83ufnET8oRjMpK2FTFPmJj",
  "key15": "3NXzJKBpoQyWdMbcX7gBL4RzRLBPPc83Tt1GoyaT6ZjmiLUAFcXd3YwWUpjZYz6o9UHtFowSdijQ1YaPZUFzYycQ",
  "key16": "4jHJf3i7mX54oM9EWe6KR4hmWzR1sC6Fs53Ya4bDYskjACCRqRJgnscyk5wMQojo9mCmj9vbBeFDwiYBckKYLQDU",
  "key17": "5r51YDPtJPc2jbKepbCb1NRXePpprfPYYBsq6femNz7vTfZLBbrgcy4BU7kmLaHQgXkrMd9e6cJCwYR7gp7HCXnU",
  "key18": "4BeFB2ngJ7WGMnGZxPnVX4W2tk8ZCsHvFyo9C6UpN3NTnDJHkbaBhex8e9UqQX3CDbXxTHkRJdGiTSWFLtSs41BN",
  "key19": "31EHge5325zfcGeGxNqFGKxAReX37Zf9hGKWRpNzWutsswyB4mzFtc1afQDEfeWcLzojsYCRhseGocfk2EUrZBC5",
  "key20": "5tYV4unRFEnhrRwxfiUpfa5uAoF3L4qNr7QBo99jM3qfV5LnCQ9DCsVTYQkfgHCaNj8JnKwduDqPmTy7R6jzMw5y",
  "key21": "43Fxvn9srwh7492feTrP3bZak6yNHoL6sK2MRM7uyePjuMuXgiU8ukGnBTQLfqhFcoUt8EJJucEtJFhegh8wVkAL",
  "key22": "3YTHYeQXrugcnZ2wUX8CJnrBiZNs3wDyDvkBMjfwuE5AMq3zaptgrf4ka8LK8EDuZnhcmN43JtoJrjGdF1UM1X3w",
  "key23": "35TGD7LQEvf6Vhpj7k7aTLgWHt5EKaLMJemxYaZf96CHZfhkHShfLAjH4it7qYKHpWvFZTD2VVA26hviSCw3Xqac",
  "key24": "5gvKup3c9SzMhp4c3xC28yULaws54NQn2QTkmpn5XCWmWsgerkVwaovicUibcmBPvQ2axgKtaqUWuFBcMvHGz3M5",
  "key25": "5QpzU71vgFAq7e4Jim9HwoV2RyTGigWwq7L2G3CFDFFzAzg2FcuqWs4nv7qr88RkvzWz5WQzd2X5MqyYyGAKFTcw",
  "key26": "2a5bRuPpEDDeaLwnZcfuNx7KfQYDxDHoozXmevDJo5nePZGhLc729kbQeSPbZbVBKtZjQwzAyyuzcNh4kW1K2X5d",
  "key27": "2REvoeaChKN8HgitdwfaViPRmgcPgW2EuMN1gPNTRGNoTYFgbVhutLi9cyDz3aBqNcPBAzMqoHxaUq4aU6MLxhSB",
  "key28": "5u4qbENKVVgBZvLunUVefMBcZ6pDrA7sKSJtJtwySouQj8btLiNpCXY6AtmeidbiiReGoWXLcFqskR6TJsaiNqNx",
  "key29": "JgpeeGRhSonrK56goxtWrjbkZscU5CSixFpcWHqB4p49B9SiGcUvsaKx47Fdkj2gAbc6JDVsTryEYDcnDABeTRR",
  "key30": "3gxnzLJQxC8WTswKyWx6f5QrmgXoqRmMbnerTXNaQM3EMjGv3MsS8p9V2rraaFZkzQtX8U6bMim45yYWJBLrrzyS",
  "key31": "3Hp9jnELzAwzUCNWquBC1eXKdTmCsuQjE26mxzMDvqZJM7u5xpU6PMk3HFD69QU3YNS7LWB2zoxbfZyzREArib2R",
  "key32": "29rEMScUov8NDr2xmmzcE766gNhoRK4SNVGvMKjeQqjyARQUEuxU2XBgJhK17HS87LVr2b1PCosYgbPmcF33kJWS",
  "key33": "49GpXP4ZpqCyPvvyAd5HfyYw68634Zd1P6X9z2YsULLygdpKF32WsnZLhJh8Adn9EaCuRfasMPeznwsrpk9ag89Z",
  "key34": "4WokiDTH8JZe4XmdLA8zf714BL43HBBDU44xy3kZ4zA6bsN9JZ4dnRP2KMSArXNa7XLzKRBMzJLinkrWZ1nrW5Yi",
  "key35": "4GF41Ay94BcjBtScMPjhmZUnzenpPDuVTDV4XoWnFYaD6YaweqRWVbrHF8k1ifubyghkRag5zbq9RQ13osZKuQAB",
  "key36": "5JvgQvJxyMF6jMLa4otzuWkgh215QvXQRpuA4QAi5caGb1xWaqdVq5uHEJLnW2yJexQbzAUC6iGhgpzZUHfgUviR",
  "key37": "3QAxyypjCaE3evEmcmL5wJFLzRL3eTooAaQ4jWXznnrRnEAirHP13u8LZ86Gcoe79GuQeVwXedQYNBvkvudJHX7Q",
  "key38": "5cTdXnz3XLr3qfxkL92a2YwHsMz4ZaL8aJMXWbJc5GsPQgqtWxbXFfoVrjYyRvaqHsidFpZYRy1gMFi5vk3BfmNi",
  "key39": "31Xb6w2vxUmXgs9bsC6zbkypVLKZ4f4ZhXeSt3RcBxsiFAJmzQwLAEG9xZULH9EGn9aXeHtwqRA4SAvXzTqdduDv",
  "key40": "4d25PN58SbfnEV28xxv191KBxdaRSkYhUNB5MPPfJVWn9ZKM15hzi8WWZd21oLz8kxYts5R69YMeKhWqu7HeqQon",
  "key41": "49YXQoPt8TQZSfQHZEVWFZoQz8cvveLqfGzMti3B5zBsdaQdrmVE7HvpaBZAi9m7DJyreAuadKLZVv2ZmzJUUAwi",
  "key42": "2MGN6CkMqkzSi5ioYocc3AdRZvL7pzq9sEDLNAaUugK6MaUnBhFLYsMMxzunyNZGtgCJcb1frXqRYvXuqd9ZT4TU",
  "key43": "3mxmwQk1JzN9zU9hbmR5tNVyqWerxDRdTD273K4ax9vnDymncsGS2pDrvvr4v3tGstdtZmDSg8gPkTByZYj4h2z5",
  "key44": "22j2RVQwQGWiroeB9RVqMA1PtFwb87sq8e3yK6jWCjbEUFDdMGGqwZCbzhPhRsZ9JwfX7rxMTAom1zn8jK1dc8VZ",
  "key45": "j69tn8dh2wBtoHpw8hcWaSvphmj4ft65bmQa6BeQAEuY7oPey3aspkEABaedB65yq23GyMAqmAVswaN8Loveqhk"
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
