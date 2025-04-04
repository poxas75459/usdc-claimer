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
    "5ayq1evJfERVMYKteZt5vwZNaE593XmoRSnvtuP3WEsGp57m5XPRSGgW85LHDXfooCQUwA1GrZhL7rPN9SsCQ1KL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kh38gs2kJPkmqS5zSkuYytTFeTnBMy9XqNe5dhKEmXxuYAhDw13HhXFSm2Kqs3L9AKm95rh7MkYpryjCqQv6JK3",
  "key1": "UjmDL4L6hniKQeYY3BRTVgM2sTkTuLtJU1ExyZPCwC33qgp96nPvNa2dDeTgiejtJfM8rZMbDHX6y2fLtSG4xpv",
  "key2": "2d4YUo6iKY65WiFFBLWchSgV5oVKwCZDW5pT5z3u4wttVKvb6eYDZRPZtVNG6i343eFVJmdZUXm2FpsuQMHR6aPH",
  "key3": "2N7mZkHv4uwt3WKjVVKt3TZmdXajmjpZb16dn3V4WRGybNypbUrJjDrob1WuieL7VkWFUnsDKVgSxMQsPc4CeeLJ",
  "key4": "4CUQzGPqpduQfe1GzAcnxp6d4VWQi92G63DkbrTCUjiU2LwmavfVT86jiUgNh5e7u9ZvXipfjkuCv1Lx12M4Fj5F",
  "key5": "HiVBRfLxCeLKg37Xa6491nj3E8evZ4eEvEF6zrgU7caDL1YSNBVx94iZeDZruv5W54qEjWY988yrKxUwe5THyWh",
  "key6": "4uVMjGsHQsTJr6AstHzvFfCwgiuztYDo2Ue6E2SsGUL4xqAP2HdG9bytbCtEJ2Yi2G9F6yABCrRPU894NFTkSfPC",
  "key7": "3xd3ge2ZhNchV7HztKNjvxzNPsJK1KUypTPM8C8oy1FjxUXjPm3EM78xabP8FfTbVc2HBJfwKrv2uGX9bQbJgyCv",
  "key8": "3CdSStFpbPo3HUbvSAFpesjNHpaDFFNjZUAeQCwki2cgKNtmCh5GW8vbEN8GtAQLXZ8e4ewzWDiNeWbGypcsLdqb",
  "key9": "5reuMwbENAf1VticnGhnRR6DJrasLLwHSTkqArRrY7ghRsebLexPCzPNRAkHUZVXV6iQoAKEz3pHNkyeZ5UuRwkR",
  "key10": "V6H6FQ3H9cVbnzirVXyUhABFwidcTcoFAvDz5PjBK5NJhyQ94bPTAEYsJDcDP9deYr89LdhqgQrkMRXKCKJsNRD",
  "key11": "5gVHmuw938AFwU5ovzqcz7y7f7gQDrEkMo1U2X4hvbpbfNe7g46e3nGYrRQMNoTGQ8rvufApLA9DPyChXB2C2YUm",
  "key12": "5Px3HqRqZyL4sm36LfbbBLX4v5DdVUhrrJv7nBXPy7iTSKDJ2s7JnKWRTrwUeAiHebLrrnDqz76jHXGsgwrVfdX2",
  "key13": "5JMBbsSa4NuZYpXojD7Y1YL24PhNKbxuCXLSwRq3CYsJg9Wu2yCgeNVG6wS4C5VfJwMKcccE2aqQKkjzYVsLD9BQ",
  "key14": "2YFJ9iBk9fzbpBgCbz5aArz5JwfpuHqfgup3ZHveWZHi4p3TtLqKSKSBJjd5fmUcTUaaeje8ZAq258ykjuXiwMjr",
  "key15": "52mD8puuBeTVYBrn8iWfpSFEQpZAQp3ENHEj8JXBYBmX14r5YKzm2d6aoCNMF9yYGNRQVv9RNt3ZRFQo2oV7fSGT",
  "key16": "3hv1QKBDaUzR7HiW2GxHUZBHvEUCbNnGTH2zGe2DqnELfcnuDA7KyFAuA8WendW6Gm7y6AULoXqwxLr8hPp8BW7Y",
  "key17": "2YmoCb76nVXVbTo75h66YkdzYRfeSSTs7PQ3r1hbMZJm35EZAzhtqUUZP3nXDmEd8GX6ctzMrHJY5iGsyotYPsTh",
  "key18": "5QxiUfojJ2tYyVndX1MxnjXexW173BBbXmVw9oL33uEHbMpjf6qqmSVWXHhugFjQwoDvLVbgLHuhukNTLMkW4iw2",
  "key19": "2d4n4r3H9G1GHnmVZeuyFybS4CnXozBwfzpbxv6K52eCMw57noD2wwQ5Qk1C3dYebspnkNFwiM1Mhfp6bT94FdWS",
  "key20": "bsTPBRhyt7Stdw1fHKT4Yo8AomWp5mnBGDtw8SMHQx4YwzhaHWWW82Qa2dE8XkjYxYzAUX2DZUFxqgdenrDyGkn",
  "key21": "36mzJfb5RnWfGcFk8CFTucBcmRGRc6vV394t3Ngx7hmnu2vpoR5DyotYgWYuwy7rNSS7inwjpjCbaHzjGRpY1vKF",
  "key22": "3GV5Yeh5oAsHVEW1YDEotJf8cTDwPy3SUUVk8DhmMbLnUyZx77cQDZtXjriCMQdfrw4BhdmVQqC8t7BzBrw61MDT",
  "key23": "5ksoYAHtZ6n8sQk21fYpXTh4BgkzmzBnTAz14N3SgZRyVgHEhQBfyAveb4nZQycGpXutjSkK4gsUAF4zeyjSaj2Y",
  "key24": "5FV7pvadcpJCMCWidJ7tGhs74evxRVb6py7uofq7Djp7mvNscU7EKQuBTKXH46ZrU2wLdNaT51ZXXjZiswnkpaGy",
  "key25": "3Sbx4xN12oRvDaELKCoPD3Ppz9nh6E99JvdtCtrCip5oFstTgYWjKMKQD4uu2zaLm6tMbSgNQ3W9eqjJTKx3RhfU",
  "key26": "44EotR5gVCJ1K7xEjD3dvYkEV1HTgNWJDfK5UBKUq5EHwq2D4LQLL1igVK6yuRKU18Ehq9gVbbDWHGez1PgY3tYz",
  "key27": "5Xv9A1NgnWGZg2BwyUoWbzCGSNZeCy7dLqYoJyY2wKwvdmzujqmFp1xy6wnGwyxR59tgHcXUECWTghzsdtDMVtN9",
  "key28": "4SyZwXNTW4rvAxegkeT5L5iQ4GSTEVJuowHeRaTaqytL42g7MNjHmtrTXLmnW3vzw6ycx8gb8wfz6C1mVkEWcZAQ",
  "key29": "2huPtjSvfbD3a6vexRD1V9iUZeDwcddyNKzRMSkfQ2A3UYbXyphZ7XdHov3zvAcg6AhNpgFHwhZBdMDoyUSGogWj",
  "key30": "26xeaKDWqG35mYmhAGT15egZ613GAWyKzz6LG7rgms1imrhzKAoVqZMa9izJFtdq2G3peD2EzWZtKcGJsfv5fVK1",
  "key31": "2a2PfCQBGRomA1FDR6WThDHH68S6ddox9zajxgFAAtjGixcJyPAFCwDgHuwjrejnwEDrWoNUzGeqJJDsPJtwr2SY"
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
