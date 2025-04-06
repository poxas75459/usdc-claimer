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
    "56gjmuoRTCpqxTSQ3ZJ5p4myPyMpMaahYwMwHSmkV8qgy1HbSJeaqHAVGU2tFFzkxbLTrEeryzrkjDXQ9KN4f42j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7xDf1jfQZrd4F5MjmZdPDhfPRrkZ47CeYBtJwMgPYPScFzMRbr7akDjs6BprBC6wmSTcKeBTEEN9pFrhEAErWR",
  "key1": "3aBWjBxJccUQ5mCRY4ZjJ3cLPbLMemW3h9uF3C7ENWfZrbAeh6QEVYziVvaao8c8yiCj6FJUbGGdDvfdyjN1e5eF",
  "key2": "osncmB6Xsdav11b117V2CBAFKzTiPU9goVr6Mk6eifJZ6RjUjusjwpCAXkpZsbZNg9JMcAGQUm1ys8Jrguqj6mF",
  "key3": "4n2fZ3ZBPJ6zyr18fWtTmmRpr2VghV7XgqRRF7SAoADjQbNvN6xogJXmG6ngNnvJDiQL3GxLrM1JPzn4PRAMdbSv",
  "key4": "3mnsQ4yKDYoFWoSh89JrpyrDsK1uQB9YKqM8cD8aBCogcwwV6458fQuGuCtsVj48baBRMDiGbzeHmY7dLHBrNfLs",
  "key5": "nK6ns4bnaGJsDLBZ8c4dg7eDkq9SGwNNGFNUU8RvQJcnRXh8AwzUFsLX6iW5RPwTaH6UCiGr2AFFCZ1HTTUe4oS",
  "key6": "5s5AJCqpiieNnPQcUGMP3yziUQAhihRELEBp4LMcUkEKCdVFD9JzmbnkgeJpPwhAuZ6goZcnar4wjLeTjzMkFHJB",
  "key7": "2ZPDsUhLCFSRgSqJMsCdXmDeHVWnraq93MAyHj1sJC3g2rVuKd6SukUtUihjH9deszSoy9cE72H4mCrYQFUJhybK",
  "key8": "3aW6rttCvqufyq494P6drxmy2bXAF7VwLzn8hzRwniFzuiWw7B2VTpDX5ZY9dyBAevq1vwPcyuDD3zNXRUV9QaUc",
  "key9": "2uFxMhiyNCyqucJ2m71asxdBggsDGEfmN8oeEeKxLFYDGuVGUf9bq1seTE32xBMiXkeNgfE8EaSqjhf6GHYxbPjL",
  "key10": "2JqRHEqWteB3rs4ERwXF17LBSJvtqJMvxoR6dRjMvYjRmXUCPrUM3yjbiNnqH4yEVUKFqyMM2fVTobZBW4HT7a4h",
  "key11": "4UNbRaGz4Lm4D7suCd2jHetcVzQqmTaNT55ysMLuTQnE3bJd6ma54TG6eUgmeTJEgnctU4Zpy3ZTMoXzk6RSnGhS",
  "key12": "kZYP3jtjKfLfC1fpT2disK7kZVAUzU2DZoNKRvoQZhFcG54XBiueTpoSYxGMMMiKvp8xBzy7Krb2VRswrcAaDBt",
  "key13": "Qxmx2EzwrMgui7jEQ9K84G7wPs4V6qupLxZrhHC7GzGF2jryGqYrELLXHmF85Xz21Z32izo1CxiYwt25CPhCVko",
  "key14": "2nWuYZuhePK6jNzZEdK5YfRr1xy8stbyv33qi6WenJzPycUr1bnr3aKijAGJYjdhTWWymPncbgMA5sggBYL19U7Y",
  "key15": "WVWRtAitotGm8tYpUW5t5qW7sBqunjv57nCKneGictNc7GXWxXRfVQeqM5UrrLUfa5Y7ogBfhyJqMv6qZjdemFo",
  "key16": "3bbuX87KK5VQV8Pdvucv2PkwJ145f1iu2geiyhwkmmdAbyLy3wysJzivTCT3TkXQCidtkko7NXwDmYoB9Ek66Gch",
  "key17": "3e7fsQZTNAU3wusPQ5CcbqemCRFxiWXKMcEjpTzzGoGgyyFbv3iTweM2tzk95dbhAajAVenL3fAy16yQFFnEkkYw",
  "key18": "fkAHy3mZB7NPD2n33j4y256QBTdrRCBZQAUdm3eaoZaURm3hXfQykmEAo8smn9LewazUCdmbGx2tm27d1pUpt34",
  "key19": "2zSGb2YbGNKogKRLfw7RHj7pw65y6LQ2hAVnqrgF3Pdy9h91L2FXZ85mYTMxJ9jDQYGvuXFuSUAqCQu73bQaDoBp",
  "key20": "ksDNNSeqQieEnq1p61Nk2novuiVa8K6vcGd6d7rvYz1zT7Jc4hmXc5csiGidCdyGoZGBkAhThCs4MQNLHrhgwg1",
  "key21": "4it7c2P5epe2yxkubL9FbNtX5my7AqetgULmrmKHuGhBPGxV7FXWERKEb9Q64cD8p2UvCU3VV3NXgDsTqWrCnwex",
  "key22": "u3E2sks9qSzsHLpBYKay7JMR9jmxEJSiHythUQBZEnrT6WHke9qD5TZxjDeTvaZgdHS8ixunboUNJvwGZ1kxKtC",
  "key23": "4hh2pMJwyAQ5tKDnbuBxNFMTh9W6M9p3hWjGy6WPpgowkabwKn8Xoq38mFVK4rc1KvLcd98dXSy5smKw37KrjP1j",
  "key24": "5hS3L4W6RDnZY9aejBkJXNa7NY1Y9tdM7fr8xcezA4C8eRugajErg8RJ9ff9YFQ94yj1uAG1dsmyKxh6Ytmdap9D",
  "key25": "2vrx22uc9BGU2veYccvQV7aL19ivW8BBMvFEQKQXwDwhoKKmFHogMrMymFcD7s7cwbwjXrjg6pTbGNx3kme55PAP",
  "key26": "2BvCxzvF3iqGnNJirWBZfqAFnsKPvkjFvZWCadEvXgfDjVHRDZWe96WrDJcptvhDhKyYJpvHQeiNwzjGXXeqM2N7",
  "key27": "3DDHQ5DWK8CYnjMN5exqkyL9DDBiJiXKWpocTddCjTaHm54cSw3sjMf393hJzQGumkDjEPRA56qz6VmMwbsGHvid",
  "key28": "58oXAzLc9dsdu8k9EgjULoLAhrP84Kj1iAXJcnSKRhYxgUDy87DbLfuMASkqKrHsypTc3jbrDcrgCmmAejyj4aht",
  "key29": "4A5rfFrNCKBAEEKge9V2CgbRd8JwmSgnXujAV6FAPvZ7pQbEmsquMKdRGLYXqUTHmSyzfAKi2hG8cqqhCYEGwCxr",
  "key30": "4u5J6z1TYf4vWri33yq6R2645YeUB3Hg2Exa6TwXQKYJiEvMHL9i7UroVrnKLXj1ZS3NdfQEVyMQ6AowY4PwrPhA",
  "key31": "qHRXzZw6Wi36S6UE1sLTfUuicTzyTUMkD5rJo1VwpGctYxTXc1WEXYoixEonsUHFU8JVhzRJ82Sze5LmHgobj2h",
  "key32": "5hubcde3WpURcmGMGZTXJXm9PqzVx1fKDp6YQPmRfAYHDbzMQGKVMSZbBo1C3HPMjaYRXgEz9J4REgTGM8UbrrR8",
  "key33": "36U7qQ3JMMrD8GV618AptRwZrS76KoDtCURrvymAneF9QFLn16bMoKRPYvxMTscRr2CW6n7y3Rch3TZaqcESwi1o",
  "key34": "41nxZaHWAtdSRvpkJnD4Dvpvg43iyFczTmS6vZhkipkYZ1x54HbH84uWZRzTUQz1bBYJYpy2Xtd6Lo98Vtqppzm8",
  "key35": "5sJJALpZH2iBBixD1tcGoTUYgfynstcLpy8STUguRmRfm3G2KCUAqDj241XqVqqNCadPUULmortuHBexg53of1Hm",
  "key36": "2TXxWii9fRVmcSJSqiBMk3XKXZNNYFaB1rgxLdbyzXjm42CU5TJP6TTXhL35Z1Dz7UvLYTh8MKrrZHS7BtkqyAdY"
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
