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
    "2MVKM9ZJsbceWuSdeRZ1tUKcZMDxxf615JsV4Qj4MwH1Jow5TJCc3MYneRBTfW9SmS1GeqZ33LYEa7c3XmGcPDzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AiShTe1brR2D3Ru9wqmcLjvtp44ziq7W3fyyx9QmwkfptLYyqRsrFKc8CeBCJV9AE81f3pG2TfZJoLJ1ZjUoXdU",
  "key1": "pvSCjkmYoEUw6CwNPfjhbALYJmD488JU8K6NJSb5N5xqTEYioNG3PJ4s4eqFjktynCC928T1t6QJZLMLcXYuBf5",
  "key2": "2LeA7P9zqdWeHfbvUaAaPwnpmrop81Wy4Uu5Pi7LGRwioxdBbVn7BiK43iSjL4LFDeUoHHNRZ9z48ggXxrd56k5P",
  "key3": "4jJ3o2QzTNSDMYk567cCYEFcGcYAf1eiwQnuAKd6WsSKQe9EZmia35Nd5p2fH8HhmR22qCWWWEiUsuTbvmkHkYQ8",
  "key4": "3BAzn5R1XfzqLCQg4VLRWf3MM8KWuGxNgZVHXwdH7AbZ8jGJEwn2HGcqUza1e27CdQPwKfkaWHoGkHgQcQGwJ9gd",
  "key5": "21hFN9WM2Qy2QCN35sSBGL7GN5z1pRetQ2qLpjVAVJEjHtU7VywmiCeSz22yix18e9iBLjvDzc82qtd7e8ibkB12",
  "key6": "345FLpqA9AusGgY9TSBbY35LfZhKhYxTsUaimM9nWLfdDE9GWidaPySgis3oehcqRyEUicD5PMM3T3taPBQZEZWj",
  "key7": "28vcnrRS7Ar3W1MPT6Fr7xZW7c8YmZ7n7yKPhqKvvicYzoVLiHoSEbS1HDtvGFd17LtG5CifLJXU8o1vEnHBxsPi",
  "key8": "2mrTAH5R1Kt5wabjcwd7mnRoM63ZwBPk9BUzLM1j88cCbiHbZ2ZLKP7ixiispuar3kvQaUwoxK2Ts4caMe353BJA",
  "key9": "2yCVuKxzr6ncdFwF8GmKu53VovNjEhxdgnjQNuBg48b17DaUYMTV2b5N7EgdywbDbjEhHF36iiiN3qY5YCPEsr2U",
  "key10": "5n5pdEqQHPXhDZBNaA6QxFb7L3rUyPbS94yTosqTeHVM5kUckfK8PHYj1Bec83cz9T5coaotAjjmv5UytJFQv6ss",
  "key11": "22KgV7NcVCNFSo2g7GHdeQn75FXcjSGqT33RHzo2eVYVkFwdgvwvV24N9hBniNiJdzUeTj8rifUqEt4k9W4dKkVe",
  "key12": "4yMubyDocptPmWjbLKTtiXdvDEgrsAwcf8eotq5gbLWdVPQxpPHeh4YNuSQiUSU5SEqt4hNYgPKrC9G15RqfMEQe",
  "key13": "5hPi5naFoYjYHxeNqSMuc3Wn93heTTAsngASTbMht3zHz862kkwJMEJ6xoYPTag2aFRswjWeqNqcHKdoKEjwVVtV",
  "key14": "3Qd2vjpPvuuXLzQZwuH6KYbDJ65umTkmbZUiSjTFhFwJNmtkkJTJo68nFVCaMQ3FgMcF1fAtMGbNFw1DJD4zodZA",
  "key15": "5YUXrMQvMorsNqZURqNnENS5mc2A4orGVQNMx7s1VaWXfNrsMEWPM2uSqtY6Dm3GGW7eU8hZJvPJcaeD51AGiHtX",
  "key16": "SvRCtALXTGUTA2efP47gfe3gPRbqCdhSroyB8idEzZFMxHaSjiXyurrhSE9dagZGKigS6D7stqjxqjCQb9V5YaD",
  "key17": "3oP876HLoNB5d28d3UFSypHgPSRevXESvp8kmzGz2Xy1SC6WsnaGJYAqVRdmR4c2fV2eZDh5ycg7xiYeLXnHN2bz",
  "key18": "3uTdQcEx46CWsE1PWwQvSjkpFDkhNtjvs71hdiouLhLdj4WizKhWjMX2mZU95nJ5RMZU7J3FZz9WHWdZQ5JKPSF3",
  "key19": "Cme3kUABa3D52FkZFGDLRbV6M5g2XvujDHVZMcrk2eUxM3mEKrj5wKRLf3C78xbLtwS6QYRmvvWyKXRW6skzUH3",
  "key20": "5f8Lz49SZGSfN87xzpRuA6d3nrKuSxMYhN24oA5pAmaUwXNfDDfDh5e4pvdsrHK18GwWaDyM6u9quGwF9Vug1mST",
  "key21": "3jcNfNDEFbtovuZCmSAsNgYmVUhT6iGqSt4WEUypjrX5wCtuwLDY9VCV7VjFZCxxzk3CGkt8aujomeHWovMVkd7e",
  "key22": "47Gxs4S1wm3CMvQWQfWXKiFQBMspkmFqwEPRcJiBa7vdRnuDQica5ohZE1pmW2cpDRC84RoPqWUvzSDdJYVP3nf4",
  "key23": "2WunFUUbReHsEpMvWMdYQPAVhQrVrhD9JUiy6NR6FgNnoGkis7LwuprzWzjpcozfu8DoZRGQao6XTBykdeZyDtHX",
  "key24": "3APHz9Z2gBRPP6NbQStvesBS2WqFMijb1gn1e3VMtct2pmFerZyTSWSRbekreaR4xrfR9dmziwn76ajBeAbJGh6c",
  "key25": "518mf9FXLebgbWodCsmo1vvL1WEuZzUThS9Munbh9ZdFYDKU46YN8nqLvHuF83jdPmk8mQzXgoD8WZEFyesseS33",
  "key26": "igwfVEGVmwfALnxBnPNi2pAwEJZh3NpwbUAWzJex6MytBrcdzPyjVxffK6z344rWFVVMFn9KLvVT72b1UrdCikf",
  "key27": "krXwfaqcTja1gGSmdVZHqoic34dUoin8cVmgYQSVsFr1aBVL5r3nxLLJVQvySHNR75RhLCC8kMQUWHBN4cMt3xL",
  "key28": "2tq64LgcHXt5nBThN6ZwdpsLdjygvZVvDRdWHcsqqhEv8o4W6wc8vJEKgkC7Pjf5dmX6kM46YD2b3V428J1SrdnG",
  "key29": "5fzVbVhH6idijDSFKBEiycxRuGnuGGw4jNRvSaQZwaoYqrNw4ubxUcskfxmdC8b993k1bQcA38yFJ3n3fVbAAaZi",
  "key30": "58zsPB7BXNnqCyAgjVcGTrdBx9XQgmof92zWBX9P6mUhpPFjkVEYfUztmSAaJ3k4x6LHaQmHP9oDnoLvLP4EbKdb",
  "key31": "2ieHXb4a39SU7Gm64uFDviumNPb3ciLVNFukkTC6PXCGTPBFARyDiVLAJTj4mnSNeKYyYZzKHMY8hVmR6dWtUBvv",
  "key32": "4TTrSd42SXXWc7XtucgA3BdZitAkboErozvGGNNf5ahLth5o1fQFc1ZLsTWv4RhMVaZr9YWHWRxGioaiL9aDuquT",
  "key33": "3cpQWnXoELGCKPQFru2rdrh8QyNcc72SAtXGvu8eLzThXaQwcCu6q3jCx3Dm65sFA88kamfn8siz9HbHvUZ6YxKd",
  "key34": "32pNeJHUdHWpLFNNGAm1V1KuUyN2xho5zMNZu29qnvfRXHykMWWuodeJm2ja2eK2sgCzS8zHhTB1syxqDY4wLgMZ",
  "key35": "LqRqX5PWVszbFa8P8McvUhN3aAqT2av6ycxvM4LtsA62AcXjwSe3QKDN7LbZUWgHYnRqWwvvVRah4KaFBjHjqV2",
  "key36": "4znR1Qy6ig6KR1Zo6bL8UnYA4uvKQzjc9vJPmGbNhD9rfgh54vyEvevzJ37VT6zZQgUUydVb31QJKRXs32xgej7E",
  "key37": "DzMchcwRrHkqGaEJ3JMTJrfiNXkCJNqT7ko7NmRjBM9oQzCh7Bi1tJ8K2boFZT3DKxBbFCKEEmU8uynju45sPgm",
  "key38": "3eicv3KvAq4M9WW63uuaAAwaS4GcLSUqGYQNS4G5faDDfioWk1Z3cusPLm5fkVb2YCcxcRCmfEBNxsQf4Lg5E1N4",
  "key39": "JeWoFTnNTm1XVzfxtNJpxJtu185kty15vdr8rveHfst2gxtYtdnVTX98PBZ7QbU7TEDEqPqNSF4UQenif8nAL6d",
  "key40": "54Aun18EaQrqwy8LHRnbyA7tUuQXws1EKqUurxFp1QNhnUudUYLc2CeHDpbxzAJg6YiKsxdtumcBLXaF7iZEBiQq",
  "key41": "5KWy69LWVbcJygqXf5SqR7UChDBpVo68huNdcvJWFCSs6qaW3r7mqvc3CfsfZvYSHVg4JQC6H7AJg4FeEJuPf7Pu",
  "key42": "3tfETjUW3N5849FegxjFPCQxGRLFBrTvqaiQVda8qyeJ7iae4zrSvYoKZcjdZMeQksaDq6QYf2GTw2vXYh1cKWLg",
  "key43": "3GkzEEpmoodmjgTVNgjLnB2HK21b7hV9ZBNvioxepD2kGMTfsR2qqvV4Urvc8PaPphPkxeP4CZoqbfiMkfGHCAFL",
  "key44": "29NnpzfGx92DqWsgQZD9fiSU3bK5SGzCQweojLBtHqSGKcU75Q4AUCfceHtS8sYvEPoVLGqYQT3GuUgMeYrS8JDj",
  "key45": "R9oq1zRKCbJYoy9FaK9LBzrxUZV81yx7z3uCqdS7oroWMRm59YyLqgRTWR7wYPaVcE9ghPU5UPPd2w2AsiFVP78",
  "key46": "2p4MsfBBaRdAyoyfzy6WZHWsNJVpAJMs2GUp8hrAwvDohkiWq8de4vuPAR5zXpneQNC1b5XD78HWksJAjUdkGnot",
  "key47": "4YVPmUciE7yuXaQbn9PG6s8xT1mLhFUYizw6P4bbNea8kK6VqoEQhFJGbjsFfJ1w3chnfcbYzyNbPnNMc7vDpEQn",
  "key48": "67auERveoGJ7TUBX4RVa6T9HVPUtWZBXrsqJZUi6WASnXRLixbjxEimmWCLsZ6SLaKN4H2bmEsUfU7q9pcjj8jxB"
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
