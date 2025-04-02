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
    "3xrdmmM4RefrbRNv2NoLHXfZcCh2LtCtfjdajzVVCT6TrsNBsgYJZNa6FNJ3QQTahUChZk8QdB7smoiKPt1PL5u6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "whoDczbPq8xrkfzBzd51um5DsCztrSWUTp6bXwybAm2eyNi2M83aPKd9pX9MF98rgNeSS6JsGs9DxQyawHo3aQL",
  "key1": "XcuqG7as9GDEeuf1qMmtmmTvzBmrC7uEarui5dL3nZ5NeThDoYDnRnYhvSqtGBS1JL4CTCqYeLLA3ibqgx3jPqe",
  "key2": "4UVTidzBKgEExw88CccwXLzATfijM4B8fdrq24AvC5pVFQZYPZ9j2ViVEZcTTfc3RnHGrwXfLDTdHAnpEMPQER8e",
  "key3": "3M1XbKDX6Twq3a7f9xWTC4sCJHRx8CMq5eVRvgTXXk6HfR7m5hxzM6dvHeEoHYoQVXEmwTmdaUU8rsqEtFcQW7yk",
  "key4": "2H9QbMhPtZiWAKjQU9Yd7c7nqKk6fZBKWJkEAVreF2N4E7odXSPjX8t1dytpuZ9TFb1GhPdwfJAbgiSLtZyssLFX",
  "key5": "5fEihTmpFKR43zNCqRsGcbuiLPW6jSgokCdSn3omNDFnUWJrjixqoNR42LhZq8GeAJCeqgAHyBQPpHc4WSVtwW7z",
  "key6": "SgcPzgtG5f9MQS1sKTMEzwhsLhv87YCHLBN8QAmy8h4wQYBhkCvV5u478ghPC78qHvThwEdf4h4v54qrRc9hfri",
  "key7": "2BbgSLEaVxAMZTHvqRUeEx6GDjzb7opQGx7CDQcSxzuWWGxpR7L3aubgjk74xnoXnPxvGQfRTfxKxc8VKHSXg2SC",
  "key8": "3CggzSC94jYwDPVwjXSQpmptqbsUZDU53b8moyskkj959YFMuPrK76cqeJxB53QeCEQ2aur4bxywvqQkHRBt5A4w",
  "key9": "4kcWvSRWNZSnhGJRw5X6nm92GUkv6BxLcJEAaTkP54sSkaCvPvExhw9ozBDaQFJMkHEuF5NSb6XskTAEkWmRkjhL",
  "key10": "47RCHqdPxAWnMikmCxJot9Nb9kuyzzsRpQcvTr3aopQmCjFAUbcTKPUbtNLUn2JZkW9yujroqM2jK1XNWVDEpoYg",
  "key11": "45sToJH3Zxtd4qSv2U2RWuB85EiMY6mV5hT5PMGwwjoLdmCtmebw5qCnXzDh898NfmEY6JDjFDtqwHiarE1N5b69",
  "key12": "evDZH5sgY2AWNXFd5H2SfgGfDqvvTusAYk965AdEhQZF9u6eKUFg4LEmD8dReu3Z2QMmiSY52noGD1162uQscoF",
  "key13": "53VXjHUqE3px5wFGw3tD3hs4GpV8U5Mi3HD3jbVRhoQBDVKM4LsaDTaHwLKx8sgWYmJSu5DNfTqbXnwiyP2iCbnW",
  "key14": "5M2eyC4WBeTudbHFyKgkAxXbHdkq1yGjUHRcqzdrHQgUpEgGmCKirigEUUDbGqKEfjHpz3rcuVCpufbJkYqNpiX2",
  "key15": "2GbpNEhwXzS7siECN1kZJ7BojM9mueG3Char9CpSYc7GFMKGGph3i1QuTND5NH5kJodH8umJ5kny4PsWHVTQ4PXm",
  "key16": "X7nvmnaXpxXokFHH9VkzqLsqorKQEJw7UTSLZynS8PAP7vF36pCqMTDZ4bwyHJRoZwCZbzgmrDt3MnP7kQSYW7j",
  "key17": "4T7m8Pa8hzszHz9iC9XaX9fotj5QJr1yDM39sFLvZ8Hge3hae5oSx1YPA12ZXc6sduHnG4LRPFsF327pyrFU7HGb",
  "key18": "5mykB49y7MVQgYvUabNo4EfgXNMMZ7BLrgXadE7tWkFUx3dWfPAQeKU7VH6vTXd9TVtRGWQgoeUvbpfGzbGSxdf2",
  "key19": "47123A3kn7Qqr3kWAFv88hkMkg9pSC8fvpFxQezfBQ2bkBXcqTgzS9sVGzcyW6KCntMpYvmepRGNKVQjGHbKGXa6",
  "key20": "5hixwAXtsSD9KRtbVQVCSDy131tqrRDGjf1Ljg1Msqbo1kmZwq48dSpvLVcFTGftVnAgTYysPz28tFP6ZtRdBRwo",
  "key21": "319RnZftXmPYob3ukWHCmZgd3Am22qG9opg69U2uvpGMcbVMoJeK6QxQnLpan5CeW54QXh4Apag5T3o3fGbzq1Bi",
  "key22": "4NudX2oEBNZNCW244pRsBnnMLmJyi5pPc65FHYmQW6jNV4M9RoCggJEh2ar4sayKVNHHomKdPGvSBd7MzpsEktFJ",
  "key23": "5JjmWDjPXkUUWXH2MD33NsTgeamjHPHkumM6nAbjAQHoz8RZhoKJ8S2QHSjx1beGayihYhfAxeGAoy9gXBRXGrVE",
  "key24": "67YiF56FNJLxcUPToyuM6E6RJ71mHNCmnZNQjmyTvULCPGChyim4AEWHfaUcRHq3jbAArphC9ufDVkWBpC5u3DJF",
  "key25": "4sd8rgKBsxKHMPFdnWFhK1mBHyuQvxn4bkXpU9rgz6w8qQ3sxViSMaZQt3ApDDojMMi341BCyG36DTeUSHVv7757",
  "key26": "5wyw8sLpL6ddt9Px1KZEfgFFnCYEhGdH5KFmXqPYC3SwNd5LyH2oWHtGF8vjBhpcdcNDpUqvRfjqZXwcDCCPND6J",
  "key27": "2tHKXWLh27FgvdLvQhMV46hwLYirq83aAtvVWd6ZQ4NuWXQ2QQDrp4SmSN8ovNZGBDvYWkJcJoNNSqjPmTrjjBSj",
  "key28": "5Ud5V9HASUqPxcJ2KhHKrx8ptCvNPrMgPPyRxdhE5TbvF6UwqYjbMXgJwjQXkMyjtfNPHMPhrkj5WBGL2heYoWAT",
  "key29": "uf4n3Q675fbYU3FazmqLH1zWtzaCYoV5SYxoQuzNTgRjAJhEgZNkdkA5bVABZiT83BkdYfAuH1Wi3anhRBJXeEQ",
  "key30": "2BCPDcV1Tv5vs9KbQ8qR89pp2avAKb4KebShYJxsg6nqrTwajmwPNvjrntGhhDCeLJVCiKMyWxbDoH4YV8uHAj6F"
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
