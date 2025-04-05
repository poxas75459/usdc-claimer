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
    "4FwaJhFLj4bZnDL12JuRUGN7ZdpxEbBjKHzhuAqKNaj4F9kNyQkfwuAHq9pjPRQT4St3X2o3ze5eXpqNB6ZDDVtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "82tKEQ2s1Xpw9FadyZEyPp2f3z4X8YtJ7u74wQj8BdfbjW1qpjhNv3jaeLodDz9iHcwi7iev2GsHYVwiyW39Qim",
  "key1": "2hA8yw7E9hQq8DWZgAoAh3wU3UvP6vE9bK5TrskTstHR2VTtWTwXFrtZ4F2zWeGy6mb4bbcoeQmFjjCCswWZvSxT",
  "key2": "4aLzMXZY5gniPVu4ns2QYzBBBwCRGwZNVKi34MF7SkqYYbnGKHCzqMW3QieuPCXXUNdXo1b2TE1d5dbs1u58XdcW",
  "key3": "4zfZQ7HxoHrxWYQBNrLD8xG7K73QE4KevzzEubx7n9RCZ4EZextRBfPH7tUNH7pA8kuYgKoNQ1YwysPrKwXwGxuN",
  "key4": "2kJy4He18HzQUgZ8yE2U2dxgVQFkMbf6aiiV3CsnQc5vAgAUqvC1N8HXrFgitnYmdKRTuvdefAY6jizWdqnwpj8K",
  "key5": "5nRFwTd1A4WSJEgyvScSYbhe61vHbTGtDB4dSAfDLYefdfCbLmrYj2QUBeNHSdgozireMjBVujm7tQPk1Cjfy88",
  "key6": "3pdryy9CGGbHoqtBwKyopFBADLTVdvnYFvssoKp6mS5TefeJFsagWwsFuQLfXx6dfPV6Z778YR5uKJJVYDx9KBeC",
  "key7": "4tJX9afKSR4TpJ78gUy3rEyuhDNUDmcLpMbieKHA2isRNn59SppHfcKZ8Xxa7kb91DQ3BeY45c7iKD3ZwxXPSwYd",
  "key8": "QagCLtEZBmAx2XSkAanmuHqtb8jRCLxn9E27bBQB4t9iLyGyCYS5FXaS7XnkQyoBGPcHkT3JgfUk6xfvkDZBnZe",
  "key9": "TutjhZLCa1KkxQPmj8VBc7c2pBd93Y97jAqLMdnYzxrEmqfw5HomDLqhNApWH1SspbWPnuvh7iiYQG8DrXFpbiU",
  "key10": "AmCMKzt7hCT3ZfAx1RoNcPWf6wBHK5hjD3BNV3PgvcJrEbwE6fvjeZxuEbgFDpiE5rLqSETVJr8WeG9GBR4qiCc",
  "key11": "FWFQK1VH9rFoMaFKUcMTDwkXabzvoZUfK8Z5u9bpKinxPFdLWmk97PENLaXfGDDUCZ83D2KDaPghMDbZyXqKUzg",
  "key12": "5UVceD2S1jdZDZzNCUvVxJrvtnbHV1xWKYUj7r8Dv86j8qMJeMaeE46sRdGbcpsrx8j7NE82nsk9DyEiJ7Ak9nQa",
  "key13": "4L9r7XCxVrZgjw2pT2FEzZCxdB65Xdg99xa71Jr12MmteMFhGkZ9Hhe3cvJ3hSwoT74FZP1PHDE3QXNsbwcGsvmK",
  "key14": "3BhyrUDt1F4W3FPKjqFo2GiWDFmpcwoqDdJSfLRbkzZqtfq1PQnXS5ovHMig1a2KWmJXdsXChSMeTrx2JDEJbQJx",
  "key15": "3cfNn2jqwJA6RqtYWpN5LhUbUbNe4paPCNmUfBCXbTpQqKitBWnbVZsAgashWcbYmZMNeMNPK4C5JwayRCfDNfbp",
  "key16": "3W5fMza6R2HEthEZNQTx2hNCdWtbSatuZeagnN1HAYp3pWr9QyhqYizUxk7No2YqkxDB7sGyoP5TCUYkTPMfWtFP",
  "key17": "5FWAJndsP2aTQoCnKg1y5Xm2tTaLyQGMi3WmgCRWFLKK5p2URJStu5LP2UrT1QnuY4e1zAj8SyqEzXUbqq6Qi1CG",
  "key18": "24ypajTWoSPWzGHA1K447dVdvHhDMZu5FLMSYn5hkKMjMZtjE4qurzvWR2bwd9tAwVcaopNxQswUqw6Jmvp2yyFA",
  "key19": "3NXsbVWf9LBCjTPYhppUBYREKqFgPRGYy1MzJcvbysa4fQvpM7MmZsGbhdgMyubtkfqTB74FsFBjabenZNPjE6m4",
  "key20": "tHpKydnCJzrGhFxchBZmcQ7L4xJ7Bu9NhhrQnh4CSVdbF5Qh8KEVXkB9rJudvehFT6ohWH2WJTAdXVKWqdP434V",
  "key21": "2zQ5Gf86c6jjw3wYgMt8SQGc3BbHU6pRuKzv6tBX7KrgUZyeE9gBHZnHuXfiT6LKQgHFgkkg55KpfTRiwRTX5cMr",
  "key22": "2HGQxuBFPQ1mxHn2T81FaZmrF63mDYd641PsXZFXihhVn9LPekVTZor2NBQh37Lxo8e4y2o3VDzaD2xDkzewfr3d",
  "key23": "5nCNV5bcUqqvUv7HQM2puV6MaBEoA8JokozpEJ4jxZBtpQoXBZRCHehTu8DhjoYKYkhJgQjAPEazWwexMfeHhRQn",
  "key24": "5sNYxCjKbMh93HQ9tBj8f3aquY4dtZum5M4s9AWxhn5sYsPwsSGvY9kBp87g3rS7n43mZiYqMU3MMjjTTkVti4La",
  "key25": "3LX6VXDugFa29uREqpAFo9odBtwZq3uQ3Yxc2JGYXpakMCnWnVJz2oxkY5a6FJ6krnENeZzt4FM2yUAY8BzTYSFk",
  "key26": "3nFtYDgRwgwe57Yg4DKo9aiKzGemeMhfau41xaSuXcx5T7otWeFynxfH8d9zwMQ8WD2Jvv2fD4nHb4kf3P9E18Sn",
  "key27": "2gNwT9QzKdPM6J1tBDFWqEyE5hU4i2rqMJATFseaRAamWQZRvgdQ4dhx6aD4cf7SHoVXWnjaLCgHDQCborpHpQC1",
  "key28": "Wfsu2vu3nz3SBeoX4epoZNY4RBoBDmCKNyvdrLf2K3EwxnnKbmxNnfpqfSMYoyBZHhA4k8sMAjwcwKMXWpyBmTB",
  "key29": "wTb7HoU1N37yc4kwv7nsPmsBjzGB9c24wPhE6VV2vpej3gQ35ycQ5MrPy9AfmmR7Vi91NPkCKiBvYMo5geF1ozn",
  "key30": "52NfQ8n4MJAEpTCAU7j2yeyDGX1JitnWaXXMSqyhtpFu5GWmkF1y4ApY2q1poP4R7QLcuLF7kB7sTk1cP1Wv1exR",
  "key31": "4rqvMAvfYx995b2agknxNd8hh46bJf9M7Hkxx3DMa1qjLLGsYikZ4BH3cQUnDgjcEX9UN5xMK8JUd2df6Smw2Rwx"
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
