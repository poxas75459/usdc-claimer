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
    "2SSgeXqEKgf1RgTrFJvataWFbfSpiXp4qFYDkK1343HbKqHqaLBaqbZTuAhSofh38Yj8ug5UFbQeUFrGH5snpeDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mMpzpVc9wFRiTa4WKEYcL838Dxpbf3s83ftnowi2eeqeqRhwMQKvmneTNzdBZuojZ8dEVdMcMLgbGaBhykRMmVo",
  "key1": "67Ye7PQ8u4c1k41eJ8YRGGu7sFB5szf297nyjmFA2cWUHan4ZUVHJM3MXLsb8h8zMPRT3d2S8TKFsmr5e4KSmbGK",
  "key2": "26qyHHYedyDStGenqHmW1sZRHgbNfWX7RTfAN9QQzByUYFBXuYyxWaSTEkU6s5eE6pHmv3vze66WTKPNcv4YwHF7",
  "key3": "dH3ZFKUdv3GXQnNwkWTqdY3L2ynsPHK8mkfvGhwMjti5wp3CAq2b9qM4u4miSmmUoFTHFBmJwBdGiz5RaWYbzSG",
  "key4": "4zrBQTg8c82k3VT3exjZKg6q8NLFcVcBRmDzRLfisiw9eihCHtF6ng2FCNWEsgoNkk8K9c3gLyqXAQCe7eFWVXsy",
  "key5": "2JPv6F2uduSrUHB2Yf8ogq18cwFVFcSK8kfrNKP8Kb6YYQ28wpsMJdUukPBxQBrVigWtTepHpEeoM7guWYiR847E",
  "key6": "3T9XaEhLZstwUfwp66SYrXW6MEuP5oHKfecNpcBxy3ZMzcZQ19vHHngKzYrEGDUJnprUW37Mwgk7K26xupZLqmNd",
  "key7": "5fTgaQ4QPqpqn3JrEfgmAUwcZWWx8E2ThfqaiUdhiHMVg8eCaz7sSEdcJXmMjJ2bTqa6kdR7m6N2ThQ7PVJ1PYse",
  "key8": "64LXCXXJfNeb5u83sNHFuUfcwPUYEK6Ukg4J4fgigoVZ4gAw9jFczNoW1SbZucCUaQqTg6uL2ep8CoR4pY2VGBqi",
  "key9": "28XECcsgQ3nBFzPvTkxZTYPoCLK4sgFSMbCTdBvwoGQLPnFuDeQVfma7AzuAVRH3y8z8VQQN4hRQrC7ztZMKUV4g",
  "key10": "5ZvJkBUX9JP1B5G8RC9Yuap4BUVpBRGLmGp9xcqSQ3aV669UqAucZD3hLgbypWmBcejpjKbD1wJj1NgJi2msE8vM",
  "key11": "2B5qG632jPNyDQRcSpUw9MpstwNHJA4tqoe1Bx3Uqz29wY5GU85jGZWMuZ6RgLzF6rocKpkfwQi4ZYajVkNdMfSg",
  "key12": "5iYWae3MnTDvufyinfdEYvSDJuL2L78hMx6zctJdunV37U6jvf36En3RuieyrF1rosixbzx4AamXBbvFBbSh7ood",
  "key13": "5kAY5QPfVTyrqmwa5akFzyQTBRGNGGcxkJemmrHB5KcqqW95MjmQjfu1gE3Y7x829YjRCBkDk3f1vUP7L7XUA11x",
  "key14": "2gfoeiY5s2yX1SadQqeN2ZEqKq7c62wJx6G1dgzyJN1t4dkf4Q5U8hdxpeTPfzLYf8j8fCQYggVKAVHyvBLeEPWS",
  "key15": "2bt2ja8TsnQrGGAQYf7FzjkNx5D6GEsg4gSB2zfp2ULkwkTmGKAe8TYdkijkq5psA1RuuqqJas2kPaYxgz7gZ8t7",
  "key16": "2UzoFAqe25PhEHJZWuf3i35vnvm2tkWuG47A46mGzUBD5QxY5xdUh1RXZtW5dtmnUNqZfyhzvuXx2rYbmSsy5tDJ",
  "key17": "2hoHnsjHwX6QJdFaTH6sPLZ5KsGA9wCCLUZNFYVzpEVNB4dXaQssrcVgoJ3ABjDz5KNHk1vAqXdHpaR3ofkqgNWy",
  "key18": "3sz6EjdZFvUCBXVFryPqNumAA937oCBuUnHbN1V9eqg9uN4e5QLzrKY4LXqnjjw7Q2QQ6ASA61tdo6ytbHU3FnHj",
  "key19": "4qbnmPVA7K5bVpyzdDp2UQWtJor6tMSfLSNXBwkLdf8dsqYpgzFRuF9dgW7gWd2upJVpHFUQP1hQASCxvwbc9BPf",
  "key20": "3yb3Ktgh3XjfYiEC9Hj3QLKgJjn53mL6NZsnAPi8zMGvee7sFBZibttJDMz9bHqPTXCgZdFqnmtcXQBj7Wqu82X4",
  "key21": "5pYjLuBsUKzuErJFUXVykcSd7WLhz42SW1wm5Q7mWaZFDtE98322qq76WbcNr4KLf6VAnF9qhqenPiaPmhMh9qLk",
  "key22": "4SsYakGde83qxkzxG1QgA4crXj4oePDih2vvFvkyCYvV2PBARQZ1KhV1h2tAQipRUAYBCWh9x5YHgjbjyN4AjdQV",
  "key23": "pYRjv7pHnGsP6AZ2nsqrTVPd3JdsH8gWu7Kk3nZJr8jZiNv9aPesEHE9UB1cQUiZugKTJ2WpZLUFV4xmhQwHGwe",
  "key24": "4urjjKFpZAEZ2bdzHtKzQt3sFchdmR4FcHLNNJcH8eErZKXS7KZLyxS5YcHnyufXLJE7f5m8F7oiMBcC7LoBqRjK",
  "key25": "634gGn9Ld6r5iqntb7uC3wfSW1MXWqjerMGZjNqwp46gEMGD4QPyDyUGkVmMi6VkyW1aEpgiYza5Y54D3kfYqHNu",
  "key26": "67jKXa66ZMHCuPHu6BiViQ9ftDiwcZfq8aqvLeYeo9YLEpwKpe8QL6ehUVjjTrzKXuMNaxrRTbagde8PorwBrXd6",
  "key27": "4jz1aWayzZem3RBmaqTyTYHQjNU5vNPMsjQv5DvETct41YMchnBYf3rgdfjNvqoBZNoRuoQggxi5QwA7i5Hrx1Un",
  "key28": "5aJ8U6LQ6cyNg8pGoqUxqtrNKz4RKJdPwrH9VGbewV9ovAPRazaDFMDRTvzkvg8s25MMZSvR4KGv6e1KJruUPcnN"
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
