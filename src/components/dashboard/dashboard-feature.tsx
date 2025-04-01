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
    "5zFQKEZYowidAbvaV8tPFFKhwP1PSZk4wTx8TKoZq53tumDSr1dKHTKeL4fJDobQ1HeREUackzm4YtUsdkx9Lbhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LbgrTfKgdDcPeNJvByknpwLzdZj4aEU4MsSm4su12dfWabwruWY1nigdiQV2p5Uqn7eJZ1qFYjtpnA1Fop41Ep",
  "key1": "3xzGi733yfxx4YEGfUTwfX9xNjfBaui43eUwX5LWP48rSzbVssfgDbP47Hg39gg9HkA5ZyHzXDLEMhvu6yn3qMV3",
  "key2": "43Xw24F8aA6eYUiarzBmarQVoLzaBp8bBDbMrHdjXCay4kMkAugh6hN1K8pabusk5p2tdLi9Z3obUjFyyNksVvrW",
  "key3": "Ghah3WCpvfePcGVrzGSycEqbwuS6LLYenDyq8uw2hxGzxoEJ8YqD97E1UtPZ2fVZZbrNsHbeqC4bWEB65QmTC8H",
  "key4": "pkUfSMPxwi9rBiGtN4PA36nBupnAm2y8aVE6rZF5voo1B4hYhnrCEHu6iMP7baihmoWCKrDG52ZLWfaq6W34D6g",
  "key5": "4Z9GWB4FRzFVYocZuLQSU2d9pt13JLLwSMyFu69Ao4H2QN9D8dVuFKqsChAPMnR94GG9ZRtViDvt5sLEzq1eURL",
  "key6": "3YEtmTfw2KF7cXCx8XMxyjcmA6d4vY4mZbsjtN58cFQMsxkRx4TVCBfahuMwKJ2jc7M3rdoGnRfbSLa6xYtXifZr",
  "key7": "3mfwgqnguJ32WjYZE5rMGxQGuZfFTE8dfjyDvPimF9FdSGgBbFxMeaUSKXKkSozQcfm4MJ2JavECUSPAXjy6urTD",
  "key8": "3diSrWWvkpRxNptRWkcmoWHLTQcB3Jd329uVTwEMqiKtqdAXSabP9EkrV3meiqUB3YStU3c3nD1WvtZpcdPvC6UN",
  "key9": "2Au1fKqxJrTAxgWDEoe2ZATQ9AdxfdG259Yx4LvjyVVAf94CnwiZP9XxQAZhHBQPQEk3CKLernYCL4ZPBQdVsnsE",
  "key10": "5C9nMEdqS2BHdTs9wZvPXp5N2XmpjU7fngSqp2Zzcy3vBNS1TRFhPcAWCvpy9yhXDzgvvk2NdHjgPgjPH3kkDyo2",
  "key11": "L9AcQeSgerAYz4ssaFFoCnwzBcfQeAQg34XtKaNH8qRJbHxJTFxhiaCqEzcYSvN5zq7hSMtXK8y27BA2boPTQR8",
  "key12": "48kFReK2iGnTWCxRkLQpJjYsnq6fGvJjpLtrxxFryVMkc1giaotL1Sw7Gs5v2beQWMWRkYpxiUzNrmBxwwX6X5vK",
  "key13": "4iMTVLmWW9vmVYMxnHkJ8S9vu29tSPyV5tbwVcyA3ym2SP7aW65Ye43npiwsJF5EDDCCWiFmJcyTd3hUWzfkMyWt",
  "key14": "4ZyHzSuAejVWt9MBTetLQA3aWm8w44Z7wHUog3QjAkRUhbBEaXX3tWrQQsxaKXwMrBUkJw4PDUyaQ26UXC1n9hG6",
  "key15": "5ARYTaGEnxPR3PrikXN5pS7qcAwTea93AyXAgYYXGUHsnZxnGeuEKf6WfBrG1885eoxGnwnKrqBh9PAxRSXYWgyz",
  "key16": "5WzxHk3USdhevYDX5e8kbBv1TzQ3UYhe2Yv4EnkkSGc9vs6jk4vc44fKXg4wxzsyxB8GhJjy4BXeqGrRLmgznZw9",
  "key17": "5P8Ax6MvszoRZVMPPzJt7rafQ1N8EJvPfEyptXmWmKgQL21QdjnZbefp1dnzrvk4d1q5GZqpT9bG7fRws5Uwecg8",
  "key18": "2qf8B1WDBXReH9RM9Qvw4738aZRHmNvGabLPbbCkUH1rKK1oeVja144nTwY5MR4eZaBGHGNbrcnqtQfQitQqLLgp",
  "key19": "3n4QLJUoj4PatEfPWJk2pAJRW6NE5HXtBrbJFrL5U7WjSdwvuKTaPGDx83hSnQpeNPzh9MfhtnP2PHjUetbNDmcH",
  "key20": "5XuhidExocFRpSHkbYNENRjN9GcxHcicJLr6xNW7N432ovLQ3tGWUPHVyoge4fvi8MWsu3FUK9QDsWPuB5e6HbUf",
  "key21": "nByHg4METKogHjjqu3aEUSqaEEJJrU7uMSCDVBZZX5TQzXtF6WA7rk6rr9vXv47kkKGgmoANSRzovBNHgy3dFc5",
  "key22": "4paLQWSjLFB3ciLuEom55WhCdMw5TwKXeHNcEATmPyGedgjQeAPeALEYNPYRnMrWri5mqnC68RGsfW12vf4JmhQe",
  "key23": "3bt4CAfC17rigEWHnz122rTGaD8qybGfpMXS13Q13bj78V1utasUHkNVGrrrC85T9aYC2vqL8Dx2Q4DziharXH1j",
  "key24": "47f3MvHsMoAqJa96EQbCNnVCYsMuhbpgh82dNgsGggnkHWzvTM19zaAk9ojRTNxqSERQh8PC99wgn5TsaSYjsBBc",
  "key25": "5q1eHasmHeqJJp4YwsNNa1yKRUJBRtYLfuoh9rhRe7CjQTHF8g562Xzj1wRKp3tGz7JiT7YYVoUQqHJT75S45FL1",
  "key26": "4iRbSSHJRxNNoUL3t78gV8AQ1tfp4t6X5ZCWgR3X9HGAvEKy4t7cdu6vVzJRkNHdwwg5rH9u6xAyK9HoLDweR1C",
  "key27": "zBnLvu2TK6tzqiNu6MAgagm3WfRPrkQhRqRcTzuBnTGhoHXAEHXVPED484svx4nzwv44AGaq8cmwJL4xe811BdZ",
  "key28": "21XTCNKrZYVK17Xfjf3qhJmBYenmi9hE3xykyoeJEta49WYiTJo4P7Ko3LBXmWGzQT5FTKf83vv34dK1qswG4FW8",
  "key29": "3Ct8T4QuXi7zgbr3gAichm5dwM6QDW4sTjeomGXHML1yB3BUk7qDqnRgrfrtRn8a2Yjjubsb1Zsz1vsrV2q2FSS9",
  "key30": "42hKEgxiFpZmCbrpbTVqJzKAbTBKvrjcL3C2Ltr2kXi47XmhSQi8Yq1daRDM6YJmA6BMUbQwYW4X6Hdqpafxufkm",
  "key31": "4Ykofx42iuxsqD3cxzNar7oCQAG4SCjQNGb4sVmNnFELPJEQ127MaD6r5jkc3t5GA76tEmrE2uUUisSe9JnCa3y",
  "key32": "4npNt3P3FAWx2jAQnmaQRXZ1t26V9yNKgqMUYQ41uGrqmKhnTtGLTvP4onxD1gWgAMtrZsuaGWuyw2CyJYLp6EW1",
  "key33": "2gAX2vRSpyGkfW163nA4ai5Dk2LvPXEFjkfyje2zHtLUTL3BfrM6wGqiMwwbiW8YbdqZPPrGVnsjBfK3kxooSnhd",
  "key34": "5utrJGAXua2xU9STZ8hQVSBT1LmQYXV7jTPugzPiu7wvMCtmy2bSukYQv9aqQc1g5xe1N9gKNyn1L5MksKZRuEmh",
  "key35": "3Q3qHhV6GRC1hmAKHaS4vdzzuqyNXkBTDj8WEfFZQWP9Xu7Q7NDaUPdvbab8478MNVSKriiQLa7HTWS3ktMmuYd",
  "key36": "5eSrx7Ye7a4RJEt45ZQ5q3tGbRGpnZMYRLy5EKZgGTt8HYxvzhdXZ8TS16AYMZ1EfyaiZkhQaHAE2itjrQdAvZiQ",
  "key37": "3Le16QF7WqhMUJoo4uQcJRydHpqSKgWXXbo7dF8msTRF8QXeJDaAeqA2Y9GepTbpTSUTWoWhKbBZk8yZbqCHkwWt",
  "key38": "5kNQU3364d1eLcEeYiZQGjY37d8x9VuGyxPHAcd9qkjtCX4xxpk2NHFiUCmfVdHGxtrpekMj7iRagLFu1WF1yhV4",
  "key39": "tKRES31JwMVYoYAMNVSYivwAU4aJ5R1udrE6XbweAjyNLjquukJF6vu1ajjPrtw9CR9r1aA4CX5eqZQwMP17KSd",
  "key40": "23ZA9Ghscf5StkUs5DoskZ9ahzFcze9A77YH9v3vSQXwSkHSd62ZrkSRCB5pL7DhAKB1sBVffoiMcB7MFN5xrWp4"
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
