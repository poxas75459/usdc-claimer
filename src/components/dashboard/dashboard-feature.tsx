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
    "3hRpVrAmSVdTJoAH2ikCFoTBQhepsJr41pbZEaGoZM5bX2mHdFVmeVjfM4rpUR6FDJDrQwdobFL1YZcKSX9EQPVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYsUiQW5ayMm4n6vhTcseePYeuh9ER3HYQv2vVwQPAwVHSKRLM3F645NHqEKiJQkrXVfndAzyvhzFjV77xwfZNr",
  "key1": "3J1FgSvpBC8rzU1Lh2uEirTiRSSpXGAcLhZpwtdxwV8sdseram6rCy14Aam5qMBdbSJUoYmCWeGEbq8XksXcRYk5",
  "key2": "5ZyjtUQqGGTAbQf47vmewn7zPBXcrY6RJqp3dockpJeB52JHqQpLjfYbzmL4XahnT55RHVTHMT2ueDUE2zTzz59N",
  "key3": "29YRkoNfdND8iEEoQhKk1MmRyjgns3NjBurpFAA67nGgKznFXNHxTacYppuvoQecfZZfaukqsg6PGaQMqxoosCKj",
  "key4": "3Eg216xdu8yNHVtpeNc1mCqYTUuisX5HoNBNNzYDc6yiqBR463VSu5kSMAdVdF7hZY6nzfMKHg9Ts9zwGTfNBDmb",
  "key5": "2c2TiAVkj6BjnRitFDA9j3fwpPSSDRvUosYg3Kpjei5z7Bi1BymtPTvR6CbUudc5hJwQ1cqBerFDnYZV1qPsFBDf",
  "key6": "29x6ZhDFKGsBExXARfgpgXDjocdK9yhdzuXtK4WGp4RXVXqzCvZGqP2Vxe9kwapo1bvFaHMATXvEuejjzZjUCUiH",
  "key7": "3UFMtoA735AJkFrTpHiVKM2Mq9G9Wf77SHKqdpiuH6vtWK5r6XiR8Y6qDP2LdrghHMQ2BRQXCgsNLYdZcuptdAni",
  "key8": "NfVGUenShSBjgwW6RitMKkQLoGPRQNF6T3HR2cwaK6sspQYnMGiR9UVzWrvLA4Se129ss7nQs2XBxj6KTtstqLk",
  "key9": "4DmpRhgCvE75ekNJsw4WmfSFJUT23eyoemATyDgbzRdf5jGxSKWKA4z2AZtMqHoChK7PTCEqFkspmWWJ7ZbbbR4v",
  "key10": "x5SxWn471vhg2jzwryMgfhALfgXBv1DCwra6dp2Gf6FmaomhP5CsJWMsKzcsnixL1EZ7WNmbE7PZ3opG9zkX5e6",
  "key11": "4EimkKsf22TRf5NhdhRUYrAYdkXgw6TyNZyjqED9VcnK6FXWQChoQJQaUrseyiYmfZ1Hn9bZ7NbBo5ReP8ymqS6W",
  "key12": "2pjaNeQcxJYuMpfdoB4YGynYa4w18S564XD6dTLTqE6MBPkviZgT2eZn8arHQUvaTRCLGPoAz7Bee3jyE3df7Dzz",
  "key13": "8nRD6VEuT4rBb8k3PcnG748dTgpH1FUmUf4u2kaK67GRVe7phAt7nDeV8iMy2uXd4hovra1qF56Af5oNuEjy3Mu",
  "key14": "4rinEhmjAS7uJgqG9Becr2ysJ8AHNSxbePEm7MUtKkdwpLAQcg8dUdbeZukhpjQMkayUBj7WUzJVSUD5T8YrWYqk",
  "key15": "5sVs6ngRSmFM9ynrf6TQZEsA3HUUxAKV1xtBYBjkcybThGAqhhpa5KkxouJ2jiSpSNKC9W2kgNy8n5SE9rfEduqq",
  "key16": "qW2F8Mq4U8TATdE92zwGbhYPozfz52Cz38P7BPu4HbPUdwyEYBwR1V1XxA9k2BT3eQHWtT9chQpR5nQQPveMU6Q",
  "key17": "5bdR4r6sDJSuSNxDA8DpdZSXKxN4XwEns7YqkDV2E52HxbP8H5q7hg2ky91WkR6XStm3tq3jNGH3zBiyew881fLn",
  "key18": "36faFw7YjebLTQS2f2QyKgVSSHCf1zxPAdaBwvU7bGWq8At8cKFBbYphWu4NzuGaJ8fhvVWu5QJMoonAN1ymWhWm",
  "key19": "2KKbZqWUq4Z7i9iePdFtCcS7MMPUWbD5ACFdi7r7J3ea5YuxkyoRxj58cdZXEQwAdDskQiTL1G72ewMYZw1bpg4r",
  "key20": "4bo2qdhG2UqMfLBhazYjyZ4SjtuRbT9J7fem9b8NRx3ZKgyGxMfW82F2w85az9MFYdUtXrfaUMtJmSN13HQSeaU4",
  "key21": "3TJ7LZB9XL6Ka6CywgvHNeTjHjuivcuskvp6JqjEBEBsP3pq7Y3VeZbW9N8piByDLVLyJUBHAmvt4NLV7HtukbCS",
  "key22": "4WHjAo1BPBEAAGyrDigX8zi7ybsJfmPkRLK3DbQht1ETyPRwBASevxk7pXaRYuvPKVUpGBJzA66YNGa9Y1sFDh6r",
  "key23": "7GnDLRGGEoGvpvfPPEvsrNvwhUtnzccnCcKe3FLa5KStn7GG6Xst1nkUFoewqRHbxG7eFWkCMMwDVWERAcPHzQW",
  "key24": "28p7KEt4LEALsvHJKXoHkfpsBBzF6Tmh9bUPukxSxTR6X87KPqX12JGA5i56bvFJrQrYhkqyKg61t9qToy3q7Cz4",
  "key25": "5MyLPEvpqXzw1nnnMpVcoxK9okRd626TwHNTT5bmzLNKGLfFyFGoJxYqgWN28K5dbnnKoB1Wub4MMmrZzF9iMHEB",
  "key26": "5JJvuTrwxEfM9bQP4fVg5HopzSK4jusVf1pSUSqyUEAw638wxMupua2RQRywusRCAzEkpeh9obvPu7h9fW4scqsm",
  "key27": "4bgiH1cGZqFMe3KhgnVncuNRMm5y3CJ4fhZeaHAL82cMJ95riZ4ryJzfDQyyq4sL6qe8WBu1uBeJVeJ6aBCfwrrP",
  "key28": "2ExDVmkTSbVbZtjSZFN5ZoPbNtJkknnsG8cn7NUQwumJbcEYbg91CGZubPioGhW83cXfuBcD3PZPh87u1cm6xMgn",
  "key29": "5jSd2EkuTpuHg3Bub9MM9kxdqwLpscoXwdW2KkP56o2eUAZQKyk8YdjZZRzgSEnDa1s37PwA5CKZxsrv61CEBbB3",
  "key30": "Fdqt7sfh3i2dCF4x8TAhZCTrzWJ7ZDvDUpobbDiiR2r4QroUTwzjVSZmwhDdRnkueHA2igVt2z1PcJE9aYtTUfE",
  "key31": "4gJLgiGb5MkWBH4recANGsxf3KLzaEPdLnrDZr9VnQXv8e6QzB5ReS97uJot116J33v4xs9kdUEhqRrAXR4k9nrm",
  "key32": "ayVtFCVE3H7Hzvc8emACYV9s5UYUd1Y18k25GkE4Kd8ZbfpGhMMVVv3Q5UsBhPfS5GrSa3K4GXHJcbBWwVNV6Kw"
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
