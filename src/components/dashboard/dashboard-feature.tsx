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
    "as1nSMXjgUTswXRcGMvYG8yHkzGe7iQpVogCGVFnEWhfD6z7a4TxKhNkksQ2XyFADGpxUbcx6GvMdL14ctUG8pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EiTrFxPW1jAP3RW9X2g6aThGaKncPPsBp7v9SJHGEqZswAyCKVLNHvYVrDgFPrYVP7i4y9mvg7bQNCDnJYHK9Wd",
  "key1": "31X6Mj8MQxeEAAaqs5pqAgmFFbxTdXUmtdkxHzFuJdo3sW8iqqZZf7epnQs8mVYcD9qhjWaA41LtDzZE5jmrsGad",
  "key2": "64bC5nob7Qt881ThSh2inKJABqzeKnAeRFumTBnz4gMi6L6p9PZUuqz2HGH4rdmGHrf5ki2S53HRJdZunqTYvYTT",
  "key3": "4BrtSkM4Yxpq5w9GCs4SdyyHEjexhEuUJNabLmoPm7hfqXs9VDYnZMDFKxdYy9ognyT2jwfyuFJQoPaD7mBzaxyx",
  "key4": "5MggwFhKNSz8WZkxZ2P2XQjy2ZGhTKa1pEufByXEDiMLUWmthDeH2fYmtHcNzrm7VDLDbEGxd5514dN9mUnJGbt5",
  "key5": "qGvEMvrdXXeH3xcRqtw4ELZJarwLAu5ueWwvsmfLXFoifqwy6MZGEurRjsuaUDASmyiaxnfeGdSn2UGT8MxZEiV",
  "key6": "4QXrDFdhiU9imhKS5iHGM8a3PmrmZH9WjiGeC1VMVRgWAgjdoJ1ERZk5iZztcHJR8kh4CRzWChU1gMNP3CENKFRn",
  "key7": "4nP5Unbnxma2Sk5W78U3A2ECXtmT3TdErzjo733moJ8xfTfXd1AmGgmj21XcseNti6dZm397UdBHyTnRzWNDNxd2",
  "key8": "5W2rWcMyYKxHofH9ur6DnuzPCVNwaW3tjQd8xCnak3MAtRxuHtWaEvFz1x2HQYGQ6K7eqDXBEBov439Zvdtw92aG",
  "key9": "47UT2Yg3qgZ3EHuqksFwZpPRLZrDJ1TG3KFCfjHWxo2rhBKQKtaf5R4MM9eyh3ehmHkRYRh7Ab5qAFx8UJtWPr7S",
  "key10": "5wk3pWc85jKuCY8uMKmUxvduwZwFbjwZg5NgHJPatA8DHaQb9xQtc7bBtmEXYLC23Ygz398JyYyRrFy6fzeQdACn",
  "key11": "4DvNvvx7K7amGisTatbpDBKtjGeuK5oLnhqzjjoMc5r2wg5ELtUvbQ21W8zGAZy9CUZKiYTbfnazocj1Ysbe8jvr",
  "key12": "2UG4QMHx2eUU9ncmVW2YNZR2aJL2LJBW1ZLgY8D5MfsUbSp66BFb3XpcEfUGbd7srNsAVSvVDh9rKXvAjxtCxHcB",
  "key13": "fQbsM4EpCSK5GkikbTNugf4qpDRvQ53YjJowRwJyuhvqa3KJun4o662mMGU7F8Z4J4o4Wx7wZT6xNtqXN4QQ9se",
  "key14": "54tA3v7DLkC7uoUVMT5Rqk6SXyEHCg34vMKy8BCVHuVHHZa2h54yvz984fqUx73Gx2r81JUrsB5fS5aSa1rT7TW5",
  "key15": "j3cndfQ9o8RBdK7UVHFLfTg6TSJjPVMuTzwNJ6L4skTj1sYdkJFGHzm7tJrBFRV84a17PDvsNUGmJ2G5VLvykvE",
  "key16": "4qJGv5ozmDZKU6TxSet24zvQa89i1cS8zLLNdoGuaBVFr2LjapaTTEkUyGeyNG39wVGW4pqvLEPBtR1yYWgw3HNK",
  "key17": "2zaXP5t83hJ9MbMVZHx87qyrKWPa4rCDj1VXhom1Km1N4eD5jSJgJih5tYmz4nKgA8rjTuCnDEikpcC8TXVhm1Si",
  "key18": "5wXyVvjYPaqcmtQDc9zf3ZX8nBCbpknT3ou3L9Fv7AWWbLzLhj9Wz6BbQ9Bi376PYwA7SzVDNaaizwY7mAtWLnd9",
  "key19": "3TqmTdfsdSZzZmce6tqZYpzqeW14LMHPXmZXsuJ8uhoeBTLWwZFA83pqnXD8C8vjTDKfCsA4C4mdNPG9zZfg2EiP",
  "key20": "5Df7vNJvagPnbQurSJPuAx9MAdf7SPSMWzLVzKeDMabHJgAk2k4nRCpqcSjLQATfpGiccYMmsXkBSNQdraq8H49F",
  "key21": "PfPe38kfb71uLG1Fj17yqA8oSmgDgHkqTgFCknqPE8E1pQ7hWbA8TaY8B7jGYXT7meEjT5PJjywPrCVLeYZqep4",
  "key22": "4yZnZu31bByPi59CKkYzzbkqg4qqEyiF9PxprL62d9YeKL1hkxwAYFRMMAaDe3RjvZyTGfnW6DXhNr2a3in8cy4E",
  "key23": "4xjxkYzTHbVzJRiUhybacyjJFy7hsvteK732nz5fzYG56DuzAfJeQ3XxP6BZgaDZopo3UXpkWHM2KQZLWEnFA3Cf",
  "key24": "58acawvHpKywwTcQsUDdc3ETTtJKePs4tTxjaHCgdMrQJLLHEucB4F9VUghG7EZ1Mdgje3kVynFhw2HJxjjZrFRZ",
  "key25": "3w9sdBowEGiSX7Eqii1UvRAbLLL4KU6kb67Ep3C8nWcVTV5Qv1ff96kfZBbjGJk6W9DaRPnLWuP5e4YDXt5JhD7q",
  "key26": "4dmMxZ3vYn9rQMzLak4ZxVgx5U6DyjyNoHcxksCFZzvik9KQc6z6Cjy5EB4EX2eSrqSqeL69JNN9y8iruR1eNRhG",
  "key27": "abPi52Pe6iGuKVzTKQ9gGJTZ7XEWjouzXtmf3niYT5gTmq6CAJhavUUKWMtyyiHCT1jc1oTpYKm8XPcLQa6B93J",
  "key28": "4uKS9SRsmhjHnJz3BbxugPMLEcJbDx4o2XmfeKQHEowQQeu8HWJPHCv6BHeW3FHwQUSmBB9BCcRbPjQkoxJiPpYM",
  "key29": "5BdTMSSHoGJhmHgrj6bvGDa1rSVExAsLaCrH4UaRZ3hNp78BNWPhM77tzXM5du8qVcTHKEx8sMCFU3wGdpLDD2Be",
  "key30": "4tneRM5dmGNzi35JzJm3WDbKxq2ajruVWbqiVRN3j5MhhqZoZ5MgGuMNDzNbHoQT2Q8HgrNAokd4YqptWxYtsGxE"
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
