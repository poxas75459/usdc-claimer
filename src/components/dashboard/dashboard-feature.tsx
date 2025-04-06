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
    "2XiFdBZa2nirg9UjBZf8dNDqEoorUeoaNa9jEEgbwJAV6YPNV35NwwWsVpBuh5uSmbx327ZSNpwJ9kv5DwVaBf6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wuS41uGFSTQvQ5H7HTYVt858NsYy66qXmsxgJtcD1tSmLYYtLAaFgzMmcYcEw31D4HQ2TZ1zjtEEF7SKpMbPbFi",
  "key1": "2ZQKEZvLZJvch48o9n6zZtH4bQJ6hqe35KDAHqykf5DfrQqYKgqfm3N1cBS5AAyYZyKWRbpVsMMYcuwUToVtohxv",
  "key2": "MhCjZVjzNr6obpGtiLB8uqMUNpMYnkTN5jCwJ4qFNuCGZKmnHuQHWHTXpQ63YiNcJKX5Np3wUiEMUchdTC54EYL",
  "key3": "4Tp7MPYZkLTmX6heL4f9KJhzqtokyKebj9L3h6z6mS8tTsYTvKUDDeshSHAbLRaLs6qzMaKCNXGo6Cnnkq7Knm84",
  "key4": "5tHWMrsf1bFQKpbCXdFSTyBDv7PUYSv3X8H57dEKYEcxoLyxdL7sgVoBbdbhmcqn9YzDuShJdXK5LJMpuf84zzhm",
  "key5": "4n61ecRbwV2DZ3yDAe8AsHhpnj5MJpb3H4Y6ycXi2bgqpRgba4tPpPP3kM6zK3paBGFysjuHm5eoQr6Lc3cvAbb2",
  "key6": "4kEByHaq3M4G5nA7NCo6Q7tn1E8QDTfPg8fMwgoduRv8CPeoNktFvqi1u3QVz8uUTRaZshsU9N5HuVSEJPeDfEBb",
  "key7": "5Y5Wfs6AHEtzV8TFCqMLeDg3YbeC6KYX7ABpBhVYuznuCBPMEaaeyuXJUpS8cqvZ5D8j3deDF7WjKfDUGNmmvg4M",
  "key8": "2eXubs2FLkoecXDWE6c7oRD89PDfvNguTtFtiDki92gA9jnsQWdoJDb2jHMTx6BNVjvpH6kqNkVRNfGK8d2j3Z4Z",
  "key9": "5HJM4EjW46gxyrhB5kVgCURmGWCXsJpXN1q4KNGBmVvNun6jS89qNjr3e8PQLAkCU9sU8Eny9gNXTfDjGVv1hDpC",
  "key10": "2SKvSegbfCV4tk7c7xwDP459aJcBVoSWEhaid9vJ6EjpatVxk9Ux69ZyT74jBxRGaNgeL83zMQqkEwcgyFPFVbQ4",
  "key11": "pxHqrLnq7yLysKGhPDsPDNtBLkwYXqHAjfwXe6knvDaTP2tkGYAVoEkVwtJJRBJmbtwzHDPC2m1e6d8hNSoC6WM",
  "key12": "5f8H964roBMyeXSmD6t9sqiqg5Ng9DJhme126tsbLhUymLtVxThmW78xkRM7HKxjez9waemneSwbgaVLZkpvdK7x",
  "key13": "2WK3jQiYDp7aPenaMkGYg79osbsDmLd1KZQ7SJZpMLkefwKragsnMo5ER2hpWtXXEQsXSwfbWKGvVnJn7dsD96jU",
  "key14": "44matHFDaaT3GBG8pqcFCqAmqjQHNte6CDAyZCFnFXSR8VS7JQNjH4qGcB3WBJEmU4XhqdoDdQTL69tm3jPvmrcq",
  "key15": "5BvbafLQhoWJxAi4VBGxqs8CHighuxoNeRGWim8oSn5eGc88Re7fuA6iMdgWviuq5uNZR7tHFH5go2DhfVdVyw59",
  "key16": "5tECkirUSo6Aj6HNUQuTihgaSUDy5qLWe5T9UWd4WA8V29hs4L6E21uvgBpX9r4fw249o6S6sTW72rKex7HegVF1",
  "key17": "31a1D9KawymDqscuZpy8qs27MMLJJkpKuWemZDpz1obWLLfNNd42JQVXvuHVanJXe4vHKW7wrjuPWu44VdRkCgZE",
  "key18": "4hG9uTwYW24RiQeJyVm7JFLAx529pMsVyskwhtVfkeDdMnR7J84t6FtkEPmb6rMVvJWMjPKQvmPRsLWXc6EXJXwy",
  "key19": "5M8BSTCycnQeU9Swq2NrfxoeJs8qpjKZq1Gqp4Xsu1KLrFZEkSLeSRyHyvj7dG5VaPLSo8b6hNHCH3WatLAxAhKi",
  "key20": "deBtgjNBMF2hSERgfRbe311w8dbWxYgTFheh7xi15tRcb5NxG9NLYJZHuiNGcRRj3cBftTUiejDpWMaARzzXqRp",
  "key21": "4dsooNWEc95xSUTgzrWhWNSA2VANzDatTiPLPurv45kjbWPtXGAyJheu7z3GuV8gArVy2ZbfxECLrpGFsQzhKnKZ",
  "key22": "5uCYcA9qVCxqe7FHzdfWEDa9UgASLMaWznxykTfG7iRF9wGj91wkouXtAwR2WS49HaBtdRgGLKoRoH3siCzP8D1c",
  "key23": "3bPF6YvaKAYhpVjMKVUw66nRS79yzqc7bqkJxPNiFotMtppbfPSgsQQfFBFucbUA2pfUvmPgo3FwsqLVyCraaAbZ",
  "key24": "44sdxbsmrscR4J6Znu2XyDKjxHocRdLxd8JudA1fVeT8pDkpu5Xr2oEyBk87WGapMFrdgA4kREJYWDf79QehSrSU",
  "key25": "2CwdgEmfmoFZeXn9NyEgGbWKftzAc9eDVMZ234Yitd7XRXRHLtusSShRF5PDoWErjuNqqeTZcHucMUrSVvwCC3eM",
  "key26": "5KKWsQoKoHkEJZViuRcouSzzAVWUNcX3Cis8P32aHMGTkndwK16scxDc2sH62jw4yMvyJnqBcHNFmGjjkVbuYc4p",
  "key27": "2zLR8tQnD5NzCuscWpcLfSXJK97QBy6kffJgDkbxZZFew6QGMHEVF9zRki1nYRDF3jD8fFrZ4htSSa4Lpzzz31oA",
  "key28": "4Y9X49EyKwS1V79ybU42fu5KRFjMpumxFK8tFE2CMSrY9MPVAP2c9UHJV3X7TnB3BjEkPRz1pFWU6k5Zgv3DhGCV",
  "key29": "3Kmbq6CXEDsvf1tttVnTeuq2KYVS3wvqjz4Xr6HgxXEzDpADGLpvr3qGw4tkxvEQLFCZYEaGc9LnpUnQoVdWzsum",
  "key30": "5oQAaE1uoq3Nv7GQ8WvoMbRZF1oCjwumvU18T4KicXeS89ki7S6EDfXzKGUqTwuCXMYAZBb4me99PB7mgAoAxVCY",
  "key31": "sYZU7ayxYEcFGFHQvq2z3Bg7YrmDwvZieWcySngch3fQUqGmbfw8dMGYeQXUHNoYnKPmuwDFnXxyzqmHdSk9bBs",
  "key32": "KTSK3y2tXPdvexCsg8eSbAhLSJvNaEBuj575wNaRxhqrKvfeDpJZYNRpGZxUXZfDDktmrFNrLDDwFL7frJjk46z",
  "key33": "2M7nhs7aqnBfsHCQzsqSFNmhCGKnTe1wGcThJWLcLCAmi5pQPtur3DazovwvxTKNme25Hm7UFaRuuygAgUK8wBFC",
  "key34": "o3FekTiTfXay75iqFGS3WBgRGL4raYFyoiCweDsK4o6HqFwSg6UFUFXgJ6LGB311tiFULFrRPSQuZFqrS6zMuqx",
  "key35": "3ooYmRTADeU9dyY3tf1QUn6cZi4DUwYDxffJat6mtRgMYDHz2tpXXo1L6zDsfYy9MzhWeb9JGiciz3FRDLb9JLyZ",
  "key36": "nt3jawt9K92GdbAFKy1LM82tr4sSiGc2LCeztbHeZrJHvVKFHC1qfTV39PTsTnBDsZTtNRWMbyewijTTLwG5nVU",
  "key37": "64y17f9AVFPjRdpEVm9RXqezkdNb9sCuXqUjsHfWbpFHG5iyJWsvDBdwLDnwYJg4HkxDWCf8qT4Lks3BCdDQTNEZ",
  "key38": "v7qDZ4bMBPFEKjDRZTA9BXjRVbvBfWikJ7azWPzRtkdLDuGQBWWEhXPULSmNDYx57QLua3THAkvwLEk7FUHQ4HJ",
  "key39": "TwkvLGU9Tm3AMcVcYajgnpEdyisE8ewdgr5HVwoyAWnhuxv4c2SqngySKT8mfHZXt9GZehR5zVQWKBUZjtenZhi",
  "key40": "2LDax7ZcdVYch7apauRtVYrtEq6qV5SyuXqFiwJotPBHAyZzbnV552E7XDzU5UxXjmw6HP9E1UC8M1i76LHWQQv8",
  "key41": "3vXBiBopBUHPmvr2kZtdCybwTfXdHxiQj9Ku8MT3TdBd6EDFbMBwJknmqreySpJbiDZ618yMyjzg7QSHadgT8RxD",
  "key42": "5VwMKrst4mFpfDkMKwZkm4zyGuB7fjWedbPDVrFbSGJ1JcEbu9qTptTgVdoYDqD4AqWoqMJVRj4q8vcSX8UWkkk3",
  "key43": "xpuU6e6NTzsp3tsLQf9oGKVSjJnDKHEYKwXVrHzdUt6tfshSAyANN7YUiFNEWQ45RaUppvsNmnJFcgengnEKd87",
  "key44": "5dsnp5YztWcJBQRpoYjW9gmAbGRRmu7yopmQ9Y1HuPk9KWLKm8j12BvyE8Zy4tmZ5sxbqzghT7nmehexgfwmBMR7",
  "key45": "5v8hMfRnTEEtpnq1SfaiaeseZ8cCLLGkActVHfJX3k6TUxHsDgaDavTuxaeavC7vudJC6nVQdpe9e4PxYCqsy7iu",
  "key46": "3QxbEtr2nYNiYqn9t2WQGAsPB3qaTmhP4Wn4D1GG2h5AwW2EFLgETnTp6LNXfcbzvRAo8WuU5voKtAaABVwEJrqZ",
  "key47": "2YZBXtspLcAc7NEhFwaUwecnZsEyBdaS5VRFD3nsJ6BvREbHKp2kViiLCsk1CTt2E7H54pUk6iAxgenMVX9kH4F4",
  "key48": "3m9gdRLkCz8BRz7dasnCwHPt1i7JH4JGib61MAmR9mxjCxgmyY2YdB7RjLAnn5ykmv8TjUUqZzjuhGdM3V1nEA7d",
  "key49": "121mEcgSrfBMJMKJHo2ZmLzQBxaXoQD2NsTsVCkVjaqTkvpcSLYswCJ5yGvTLUpJyE5L6kNi9WEMRfdGw7V2hfgx"
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
