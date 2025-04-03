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
    "3Qsr1SB2MThZNya13hmLup6ao3M9gPdAW5FwvCXPCcpuTPfX1MhpY2WF9zs4u6WYaEfNrVZPfrqAj6Qu1Xn9EZ1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R3T1DFmwNADrWFUu4eYDWPbZ5a5KgTKghZV3gWinhhNKfgFgJgLvbDqVSgwiR94BbKVBev2FUAKAR7gUaQFye9U",
  "key1": "2Hf9jbyYiuLiPzm5NaXPHTCXp4iV5ahTPRvVe6d4Dz8MoYhMxfvsSMZhiPefTojSK8ePE19JrUNtDxzMD9o4zRFg",
  "key2": "5vZbYzUmSb9sMWn9S4MRJy53GVbegTM9jAT1sC7rkuxdY9Zc7udYR3q73CCB6nPQAV1ajXyhPgFvAhbT7Xdve6gs",
  "key3": "HccD4zTejfoHoRhaz1QDgyLvbtpAvMGbjZNhArcL22PanWzchJprzckQeE1431EfvdjKKi33Df9N82oPMW2HysW",
  "key4": "5x6b9XXVth2Ao66KXxqnuSPvuXXUnHFEmL5dxvrLooGnaYZ4GZ8iDft3hu1fA8nJqpb3tcsKquXVfTWLFGjTootW",
  "key5": "3KEuqnDMqdSfCb18NNaz3bz7gyn4126EtG1x8XeL2cLS9v1ovNYKhwxZzdGmSicsFMfMgH8xCdbk9z41YfmenwRE",
  "key6": "JfAVhxjtzxUnwWkYdZGrJeErdJUR4PFijcWQD8vXkRGkaXRqfpGRDXiUfSYSWEaDFGwCnzynXA1UH6tXJ7zGSG4",
  "key7": "2FKdNt68hKwDFDwpcy8q16GzH4ptwDUESAAn1UN8oJRYwKu5A9VQ9frxcHWh9uVLRPaDJGH7KK4MVVQzFQg9LMpp",
  "key8": "pRHMejQNcaSbxUVYqTCFZ6VcukUUM1WvB6V7tx9gxWkNcjWrzmT2Po3bU3PfcvJZ1gFNzZyTzmUWJoAWy2AFnnw",
  "key9": "3bc4YZjUd71diZkeQ7vvuJm6beXtuvVfJvQYE9X6AsWEei4Jhc3UEYsC91ympsGVC7oSq2C2GhNS4HirUDrTEHw7",
  "key10": "4bDHdkfQEr2GCuk9vPA6MzJwQyCNRe6MrtkV447LM9LuYN75FfxB4aNSei3CDtrmv6RxmmWE4LW8ufosLJP811ok",
  "key11": "2PSYiWH4SiunPRGwsondYrwbXeqE3R3YTUL99Mu2xzGjsrAKFiGv91yQjw1xJbbdpt7WoSqXoSPnAb5Sey3wCDG4",
  "key12": "3sbgLnZT6yb64NywJngMm9umtVw2UV8xhZ7CRW8dS5UVefQdsbmh7cb5vZLzKRBpvmaNMrek7EUmJtMmw8B3Kunu",
  "key13": "5HTT19zgBRufSHXy1Haa3aXP8onoorcJ1aCm68PLGPctG95vfJuVFwDPMPRijDGS95eNEjC5XfQTNUGriQS47aUm",
  "key14": "f2ZVbKwcFd8YciFESECPZ1PUJVSZjoxRdyGBeriZU3WrBE2EwqcFSe9LdzVHufHnQq5tRoq7GeeGSYVkVhvakbY",
  "key15": "3H8zDnTPxefSwiWW1hceF3nN39bT43DhQaazmQfCkvhFEo2HCXNtCxGifnFTsFuA1s857a7djN4HwXwJUyypP1Xe",
  "key16": "wBsPAHaGvznggFrfh7c9kmpEn4dwzgdJNaCwvJNJ4yHhCw7mjhbK9XerdpTPeyPMrxdGQ1dkpg73F2tnfaVedrq",
  "key17": "63Ncmp1oqhvP8rbStuiTHn8c9gxahgG2ER6ZD4AgoUMAmarutDAqmyanBW7HpFmkrT9qmHWhDmLYNoMphnqn5Nq6",
  "key18": "28wH1VyGhauvC5cgDpzuBZz7muxB3Lr6jsvTSd83wabDvdpdHRJNpY7ckEDyoZrefFHHzfDWgBkZFDqv5ycRJYH2",
  "key19": "2BDKN6zt6bE4HGTULaBrbdPwipxREoiki6Se4sYGzZhLSLAJAyF8c9pEUjdhd9i3ASx9oWXj7e4fKbt5foBKD88T",
  "key20": "37m7tXX2B1GrCjkMbTdHKnLXnGhVhaMbeS1GM6u9gw9344hzTfirGCPZfwQaaMUPDeJQcSzzHtgXGbLYNVHK1M3u",
  "key21": "3YSZVbmSQsjgnbEqzcwKZHxbCyD9zZgVBYxctdarwYUBBfWPAQtTUt4zCansiJaLYk35v2czMzobRnqcCB3Ntb35",
  "key22": "2JZYeQbJeB9SuWyrFpFp3fT9yUiLXbFtXkEweFLrKEoG1VXLFAnNtSqBskcwLL5MC58YGYkdPYm9cHv95NvwkE4V",
  "key23": "3ZR1tcXd5ki5Wo1h6AFy4P73XL6qjZtDyQysFEKfBxcjfs5GwnXy6Kz7w9enMcayA1wQiH96J1FUrXReL62fxmVq",
  "key24": "5CCnucdjBu5fEN5MwvmbezfBLUBDrZPHk1F5kR8PaSqgU1TKcVxxLcNacm9C6ghbsSquAJXDcAcTE7tCTT5rWfyu",
  "key25": "4Vr1kuKwoFpi61BH8eux35vZakBsL47G8aYr6nbMFp97A5KXC3bRXWnv5kD6AB8ssh4YRbbeefXvvonJsGkmfJi8",
  "key26": "5cKtHC8URkzCAS2WrEMHQxX6YDqkoBGjZEYBhjDBjcf4Lb9KGLCbgPLiPiddWfLaaREFViFVSUSiWu8w9iZMbCA2",
  "key27": "2mru6z8VqSrEAQvwsxA3Bq2v5Qkyn83T42ZeDcutN1pWdyAtVJdcrsTDJZkvGzEem2AxwZenfyyhEU8AYFp6nE8g",
  "key28": "gR72x8bXvLHZDiB7Cj2zn3EmFDerPsDrrc3ZYTyThzpy8XqECnZypxUXaUsbTuCS8mvm82awkCcTVhFYox3pqb1",
  "key29": "5x5P8sVZPezRJAD1F6GxtrHeTt5t28fxeYGEjkWxDixKZrTN52SPhRpPn9QNgpPovGY3hyM6gjRU5mrHaX5VC3JV",
  "key30": "3cASkR81EekckD2d5SHK41QNEiNZuqHt1e7DKXsWJB8tYTS4Yy7voNVeBCMjgqzg6t7mXcA15zojYuqru3o1mkcM",
  "key31": "5kcXNMBtUwpRw7jVWrVHH2SciW6B37GzcGrPvKXkt53hKc1bcK2f9iinUhgLXm2KuCVnvEVrgMK8hEKuRaYuzaSJ",
  "key32": "iKxoziCAfJ3bBLp6E3U9CyLuNatHc3Fu3VkaQ18rcz9YbtpXVo1Apd8zgzuRk1Rxpx28yisjXAyqyFZWwKD8kSb",
  "key33": "5VbqWaKQsTyJnXRgNFbWXjQn4FF4w2TzrjZfKvNKxsb7wNacH6X7eF2X6Zu9KjXjWdUdh7KjUcFDoYGZJbNaFTJG",
  "key34": "5rqW1jwAbL8sNAabTGVKc61dDgfyoT9yGYEgbq5pKTiiYqiG84okEL8mpoTaQLJHcRnPL7TJcRL8ptMpjCVG9D8U",
  "key35": "3YtjrWJLkqjvD2HfZTn4gfBjCwqZWx6mzed2nYF6oo8tbJR1cy6tPJdAzg812V5uTvEuev4AptmRvW5MwV5ZvHRx",
  "key36": "2NyUdukwhAzshNQbyBedvUXgCPWLKnEkifw68DpQgafMp8QeUEHJvwnHYcL68wDPjLCTWRN6hx1HEnUuQTLnZXFR",
  "key37": "3d5PURBECk6EgpQ5gnzzGtxSU6Ve9cGxHpcfW86rVnwKrhp1xcCryCqUqK3HzPiru3TNz9YatSn8fTsCa47XaPmY",
  "key38": "7C1hovUcin8fXo1LhLYAvjR3QEdFfpsti2s6CfH75TDs1hBG3qYUKxTocXNibHDPNF7xDm7nB9y3E2NPQLDt9tw",
  "key39": "3FW6R6nRChuQLzpKgq1Nbz6Mr5k6sUxLJ7mRJ9wbbEk6zKkEpqze62TPCJUrnYQF5kcKJjuvruiZ1AH9xRd9FH3y",
  "key40": "4AHDT1ELqt28WKE3w7q38gaGj418fpJDr32Hr23xteJ5BDDUzcKEyNmyXi5wn7JHi93Z4v2oUmrtdSpKyMyjKcsM"
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
