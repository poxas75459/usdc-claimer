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
    "VZUkTj698Uj6YqP4QnZwpJmuhQVBRWiVA1Fkf8d3D4vnGNKBET4dDg4wkKYGyMQMoARa4fw6UUsUjiqEi2rXCeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51U3q7uFQfkUmtVFsJCyd9KKPjh7uKwkuG7ppDuUSUmTkksncM8GPYrgbHUE7QK5ad44rEqHdwKgH1ib1GBoQNkA",
  "key1": "3FNjJcPM8ZELt2v5H5v9dwiJ1AgsZnwafHpqJ7DqWxKpNUtFuaCA5W15XiBA4ayZGTfTZC28ctbPan534HuHDL2v",
  "key2": "5xJLorZnDJRYGd9d7CUxxLep6j7gKaQ6MQghkFbSPkuXU1Cgi2PUfCs7rSxaG48nKD1teGMXL5CcpiqRp8bvDSrs",
  "key3": "5wLFWkz9hHiHeUStWkn8jdFALWgLTW5wNvKjFNgCGab8aUJwHPHkud4CbVRvaZuNVVZyJYNwXhXAZP88GekDbr71",
  "key4": "34VMyooQSUUfLwxLn5DX9vsdrLGKqTLFiBV7bqXvc2QEsXLTMoXC5NVXDAhaYTX3XaXe2tN9bxaxvpTEf1fgUQW4",
  "key5": "HyEw8VMPCaEDUkuC1riUdvf4GxAy8JVXH55y2Dm4Pu4RCkoVdVBryGJTBMc7QcQyXQn3UER7tBGrBBuUeZexRxt",
  "key6": "5mMAuZvrLG8iqSEC23mp2s9Ttwkgut6rBgddU1BXk2bsYeCDim6VsfLVKH2pjDgydKNXFQZYpKVknWrSr9NgXHPR",
  "key7": "2WWxejUzhcxju1izhEhCi9G6E6PsujEbb221ErbJA4HyQGxYh8rUKJ5K9jDZT34Q9RXJd7zaEdmYQRCd6pKNrpPD",
  "key8": "41abs4QqSPTUVLSiiTrkbRMhvExQPtaur22HKtfBGd7gXG3HXZ8ZhwDPQSB8FQkLmEsp2d4RjHDb8U8Aj8bPx7Gh",
  "key9": "4pGZkf6g5tGAWsUNLYWitJBHZ5FqHpBJqjpCXuJuAmCBSEWeqDZazeMthsZA16f5nDHA9A58LSSN9yKrqW9j7tb9",
  "key10": "5a65LpQxi3h9zSDCJ5nEAfDiDBGKCgyQvJj4DomcbgeUZ6HYkCeSc7EF5bZpiHMtdA2Xb92PUJyPXYGFemcAknud",
  "key11": "c1hauanN1cdgQ15J2VB4gnzyuDW8N8PjuYbf1VbRxh2CPQRvNzmtcfEa1Joae71VZ6k3fsU4oZPja3oScrN4eeW",
  "key12": "3VhYRdDWN1H4bSaUNELAwjqNrW7ugdg4ovgzzPPDT4yKHCHnHjdT4ieLQNUDBbBMhfAfZZjPMAbS3cjK35XEzAQz",
  "key13": "3Bz9k7Ur4HBAvAUwuda6QfomaUqrpu5SEGWmQsnqGG6VQ9iZYhdfCMyAME95MkmTprvV5iVWMB1qbzFvuY7fKocw",
  "key14": "4VBoNLVNSjiNinRX4FiSTjS1i3gCUk9H3MtE37D4zbxUj3WL2GLx8SEhqL5rfgcdTULV8gsijbTyLJN61EKF1n5Q",
  "key15": "4DTpBvS3FtNpKnd6x6wp3FZ2uchnmLFVE6isXDkYqkUuEbtXrjsBs1GTrCiK9Gr41tBsEvTAXi99Zp6WifuSVFj6",
  "key16": "3ZxnU8wAMeaZsfvP2bH7NPdfpHsMPTrVd9khhR9b8LqBNxnp39eHm1JmqzK64S3dpgR4SSerPdvY8S5svMqARvmG",
  "key17": "3regNxYsQg4NV2rVmwvKpduCbNnvL1yE8kwJwpVnbkc3REzmSSsXw4DyMgXZmSvu69BD1qM4aQbdx9qpTQmhuz8F",
  "key18": "3TokRuTEFEUZFejsDGj5TFFZvmAM9kvfhHYdYPx9miPop2K41EuzdsgTFsxkpp3HZqeH4CFTXg27YsR8ahx3kCEy",
  "key19": "5kc1ieBeyEDpW6ptkSJaRXdi4ynpe7fb56K4spPD64tPbE3iCN4yEimbLrHP51UpTJCiMgMCKCRgi8SqNsjRwuW7",
  "key20": "4PD7YGdvrCfQY2tLuXa1gYUAYMdLp4Xrvs94T7ic4tRr9dE8GhYuLyi8eCao1AqQhocMXW3kGLYkVdmkkgRrr6BD",
  "key21": "4hbW3eopSnuCrgUvFCSPdFoHAGtdZStfJMXBDS2oAVKdhTMDg5ekURn5BezHNFvvkVrvt2qTEjHMjB3hfRMpHRcg",
  "key22": "4ZU7yYE1qFuPkDLqhppqaXp3hUbMVVFigU9jjyFxheUpbwqZgo5eat1RieStTJQU2fHybqiwTg86V9iifFLJFGiQ",
  "key23": "ZDGGeQMqdAbyG24TTEkWQH1uPHnUwZPz7HPdoo2z9EGScidk3Frwvwn6EAw7xcPGzKwshnknZ11dDPgc7E7Cdd4",
  "key24": "29UykxjJcDSsXHik2e6xf5qodpybWXFmUag8LYVcmaYeCNz7CPNQRjEGPbb54c5hQXDzbfnbwqUKrMKBDY4AiUrs",
  "key25": "6PYry7BodV59uA3HWsSdhUBmNCZTUGzDfbt7qGLv5VrGKp2zijTm6bCLNy7B1w1V7Wr4JC4nyi3htdL4jc8Uyjk",
  "key26": "31guNALu5qVsHqVngn8fhGMCKNNKDuPngN6pQcFAFQd8TL1nhvMbDFW6FvsyDpkDsgVY9PeE7LSLa4pY5RcLVocY",
  "key27": "45xsirtkYwKLhM44aeH772eqRJq6gMBkqwsddFNiUGj2T5icDLtdt5iPdXUXmnpLNnbfVM7rE3Pz7DZkJ7yhwdYU",
  "key28": "RzFSikCvmFPvmGSZNLvDnB7Z38K2R5Mc2rTZ2ZoakRNQgbxjWSW9Po3a4AxcXRmjwPDyc8TekdVxvmE7YkPjvTh",
  "key29": "ngTj6b42Mg1mHvckHHmptrJYwMNMjRb6A3LHyPwn8NLzt8qUeNQvwnmTX95cDjVVzS3nJxoYpHQyytnw3GguxwX",
  "key30": "3C3AUCFV7e7q3WRgUycVpdyrYtuo1voz9NYDTMz4T7JGVwaYWWAn8su6j74FSM17Q7oKZGTmswR5n1F8p16j5d6V"
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
