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
    "3MBgB486MUytLmXwmQZevnRaoEcczvj2oShcy6f5ZLi4rYeqyRqj1Xcoq57pjjVSXVm6JnyZDZtynRFRoisQATjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NM98PtdTwTEztp8CnxrNnpwoy1VC66eApLpicxEJJ1AokvUWTbq4g4AyWZGinD2Mp4hcHAxQGikYZ69YcmAjzSw",
  "key1": "rGFYHUoaRZ9HdWTsQMQSfrCoxEEJH1iRKoVamJMbVRKTZ9t7ag98N9GMF225d8sjtJMaRFJxBRx5y72wbiHSMN8",
  "key2": "43ahF2XiLykg2tp23oEQdMChfR9ierGSqgsPp3C7LAwqmbRJrDgTgsAGrw5TpagUEM68A9Q9srho2BcHfU97aUnF",
  "key3": "29fzHkHrxJJwRbPxXyKy9JUu5eoLB1oWsVUyNpaQ2V7WeK6oimkHXKbpFHiy7mX55Q5H2gHE4EjGNJGX1voP6jvL",
  "key4": "h2vAiRbvqkYmmBpfSLt6dr92x1RFMsdTzLYaAga6dczKoiVjJ47kuHT7RphoNGLriv52tAWnWQB7UAjiNQ9j8Bn",
  "key5": "5fSW1i9shRdLeQUjyJbTxS5yMkrU3JGyth45GuFgLcG4sLBiFqVMAyA7gEVArdQaQ7NdufA2HSWa8NgwopsXFvRm",
  "key6": "34YYLQHfXxnC1VkTMMtW16su9ZhC2TzRKTdy4uEarEi3oMsQFED29hASdzFHC17QfgMcWe4Jh6jdq4tcwskkimg2",
  "key7": "4bcxXT79xdXuVKgH8piq3w3oTnYDS78LMJDnMcNxUAueyKQP37tEh5zwmfwx4X8WX7M7bu9GZbbQHycaum66ybHG",
  "key8": "5wbKW2fzkL5Gwp7qM1qNKe56Wfw42HABU4KEDgmnHV8Pi3HRz37ZaNNH7n8gnKnppFrBwJ5gx5aDDamW5qzPvrrz",
  "key9": "2RiJQxynxVZ5Zt8UZfMy1Y7t7B2RG3TY4sGXYtxfviend12kQ7sgS4vCTBJLNHG7EKHqt3D7UfKYbCNycbSUtan1",
  "key10": "56Uh8Ye1GhKkoivxRMY16aWx4kJCgdavL8zTRvMQQxVL5u4ji3pFx4HuRWQQuM91Sg2W8QoxcewcPdeusVK8AgDa",
  "key11": "3v8guhTj6MznrMgJz3dHwczJzUWmcfeSzfguieMBDYBUPhzy1P5AKNjCD6L4QQsokmFMY2grioyWGC19gs4fj2bo",
  "key12": "6NpfUsYpgv4UTE9oX3Bb6c7F6WmLNMSSGs12x6tBv4cFurYiiNrCAzuehHDSy8u6hvCShTtWT2N3QcShihbm9Fm",
  "key13": "2W36qjKP5TjFWtEXYAeSZEMMFBEzTWzsxFvNu49qRGYJM8FiW4bTHL7WKhidSRtVoSSx2JVZZ83VvpCufHTE8SWt",
  "key14": "58xYS7rHdBdCBwi6EoZAqtyBD4b2UD73aoo1RHCG9zAN2tZArCSuYktoqtiD4VAGrtAjQ1PFDvktT6gbhGA5pczy",
  "key15": "421WWxs8ZmG6EsDUXqaqMbQqc4tyE2MnxfuDyCzsJoyZ8YwuffAqY8N2ZmhjziAPZEUGKCTvsho6wNukdSebo8ye",
  "key16": "5zxnYBb51C9V2DHRSmHfLVWeJa5zG88V3gfiXeHjG22T4gBMGXFba5WfFdHRxs1nqZMY3whasWDkVwVsUMPcuuh6",
  "key17": "2VvQkgR37g1ifhwBkCYP1RAJxd9nyRBYftA7cfULLCsqfEotVWPZqx3p8oqXuNrzSkiBJEW9QwFgryV4DRiaNbit",
  "key18": "3HkUxUTLGRifJNbjZsujYibzE2goft2HpDuKj5n48izLyZAQYmrD64jyqmghA5kSZpjdtMhST3TqicBf3tYcFg7E",
  "key19": "3V5WsAVk5saLQ2Pf9LbHsTsdkTzfdZddvoStwdDvbCGt5H25zLeMb6MrnRtNpEMGwSvHyyrj8fCHG1DnWEYqWe21",
  "key20": "255TmiKGpiUifq7pvp8egjJSP6Md13a2atQEsLifSjHAtQ676rx1G9oVWvCZunRLiPKUKSDwfQmdUC6T7hZiuPTZ",
  "key21": "5o6LHhEmaAHVRXS6h1d9bCmf5UPjTzqMb8JhG4KUZfEh7PYQGRmZVDw2YsLYGQBvbyDcZBEDXoa9HNF5wGWQ5ZMd",
  "key22": "53ZRVbBaZHZgvTUa3jSZPaT93t24fKRoVihUR8RRY4LJnTJvWUsyqSeMnci7iWKDFebkLH3C4RsokfByaLSWYJVV",
  "key23": "5KYBqio37KynTdbMjwfK8Zwncrd7N3z2x1m5NyC4m3kF7N1dUXLUTTaRWNJyrL1ShLcy6wf14PGQrXLym1pJyNTd",
  "key24": "4h1rNCuLt5zMCYdmenNxRktiT7nTZpsSweWdSJoGkvBiWaCKQsKSF6wUPmVm147dAjA2njnSsDvwRas1L7YeqzcE",
  "key25": "5h7tgqLbRzStFzgEUTbCGb326suH1WPfzRjA9jzx9ZJ7a7YG2LfTYwfPpBffhm85bg4Nz4bahtE8yytFFMjfTTDo",
  "key26": "GYnATmRJqxCNjgZivvx7WNA2G8wwbTmX1EKRh2j4Q9s2d9nRZADJTSHRJiHa9KcxZCbTCasob2yfGnExuCtJxPj",
  "key27": "68mBHHW3gAj2STjwj8T2W5oLFabYEJqEsR3T1DoW9F2ztyG6pQctbzRHFH9VNLovpH9XD1cdnbVW9YPyLGuME1E",
  "key28": "piVrRXFyLR3v6xc1CvYi1eMdWGM1CC99GAqcNLfUM8v46h4EWt1cnFCxbbBRTUWmFZLo2dLauga3TeCFtMLvYQD",
  "key29": "3jLsfjn3Yg1U78Pmw2nyVifWe7cMUgy7N4ZVkP6QyGXaYSV9m3CN1M3P7p883HRg4H2B1eCE7MMddWR2Bspqm2Ps",
  "key30": "2f8Xp87asvSRBJWVGJUgyjnyhYMcy6a92NU1tauSzAK6CFMusyRuo5Q4SW2vUhetgg2pDWVMbyVGtXjxdAfDZUYG",
  "key31": "4dJyQZUsHXSrF3e1VvQERWyBfGFBMca81fDmEEio8u2CL19DrYzPw6LxojWKN1P1rzd7TLx7G5xtwFrKVaETDwn1",
  "key32": "2iT8SoCQAMtAQs3QesHSD7Yc225J1yzZsCz9SMbY7KAHuyhWMqU27DAFVKUJCE4MKXPoxF9Gxzuqr5TM5KtoiPbd",
  "key33": "65EFFqejrNnJfRyKsdVUkBhRKmybVtaGyxMsigeYvbTEWMcG6GVenQqNtzUhNRkiWf2pLHeunB47mC4og9U3333M",
  "key34": "46SPDRyf5WNMQwDjtWp9KUkkE6yakBHNwYgawmbZNd1yvdyNK2kKQyK3xjGCF1orVPoEjrJdsv7qc8Q3mB34ETVd",
  "key35": "61tX5mXkt4yFRNHmBHveyeQTYySrUnzbxY7GASeJQ6RVUwFsmfz9nwXBekPVqcgkoBLCBoPFvBy2iGBiq7DLkALo",
  "key36": "2WZafLXvzcsPc1KJBskmMhaeMuVNK6uo6cYEBEer1ffBiAX9jWugFNKYKYUGmTJsL7ZSJ5hF3w1xCwSVFW6fsRte",
  "key37": "4xAj7zrPQCgP4jET87WusDZMbe1k2J1w9roZdjZREkUpqfcMYBnkoyir5t4mhuT6sauwTJCLq6CFrDrDxUWxZjht",
  "key38": "4VKwECvVruTfFxfXwcd4sL4pMRJmUrLR7GK1TQnSWhFSaUHvAy9PLNq8SA3cxTrZhhU5LDAp9nApstViN9svxFbp"
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
