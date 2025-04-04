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
    "pJMJpaoTFUPUA1zFXDBeLsyVZRny3XUG3RJ8fcSsc4iNvx466cAcL98zmpe82kMCbWZdhePhF5KHAfg8NEA3HQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7qtCTFwNfN9PDgFxSPr3dVqDmhT7Mb9ksYRVcb9TGUZvvvJFRDzEbbKPTTkAMg3MhA5msUnxQMpKYDg2GEJicG9",
  "key1": "5F82NUsZimuoEgvXSP8nj3qeLjdz2tRaXAyLdmEGsgrsZPT1gDeD43bhtYMzmbSwRyVofn8PvgxQrWdWtmu2Jt4Y",
  "key2": "4q2tnqfFXXGhWDo6KexKH4tRYn9abqUCLDRhcdXK17KshiXzB5GcTxg76bpWfnHbFnN93cAyLFGF1T9geHamC9fc",
  "key3": "SJv4AW2BBzgS17kPcCSud97t79Ni2YFZpzweu7J7141jokpTkah9SfNhH53kmNWJPW7Exs7NkhbUb62YpgnUwTA",
  "key4": "5BZyjAy6eaDGu2B6zC6TKCwU4sjAY29ZAcEDPv7bQkZcpy2uzBngfKLZVHmCLuBHLp7YRSe8Vb17NNvyN4Pe4q4g",
  "key5": "5ArPVrTDLf6j3hAbAeKRJKYQWJrt4yno6ex2gQYhovMDnCucT4YrRGfXu7YSS7QoUas5q2jZsKiYZp71LeyHyuXC",
  "key6": "mMTduUDH6yTNZygcPNgAMgpjMwQ6RCW62mWpuePcsWvA2W174zrnXGgBy1DK8jMEfcewaVkSMwoRwfeEMicT5i1",
  "key7": "LSsEMs9E6J19M4VHnVjWccgC9quVrdYkcqKhBRo3agewW4WipFULvF15coG5CptsH6Jrybs8JBtN6JcakzMMTVq",
  "key8": "5g6sxasTkXutkf1g988bZ4AZ1EKZUyanEJCyU16kfgXNu5JyH7MPvHgcZdpaS2ndmaafXifka2m88izeoNCMoT1h",
  "key9": "6P5H8ostqnymduhuW59qnDHdZsy81AB2XxeSFRaxAzPry22Ym8r1tJmPKUYe2NTmZRCMFkNGs2xPAmXVbrLG2sU",
  "key10": "aAiKfAoGfRfoMe2rfPioqRv3tPjmvip4Ho9R1Pi48T4y1n4RaPYFPoTWqiAgTcKtNrF5vpfWPfSxwu6BfNqCGao",
  "key11": "55kvQWNmC4h5dfmWL2uzQJSX9YABfTwuve2VT4egZbXsi7kSAYmTMdaJhfPspJEq2hACpdxVFTTG1vrcRaeG4Q4N",
  "key12": "5Hd8iocsJSCpWVAAsoSsoBFF2cZz9HRp7twygpAHRTbdFDRh9X6Vt2ctmiFaw21W5un8S6Qx1VG4gD6dVUWFTRj4",
  "key13": "5Sr7PFimKWReGzwD6GQSAjWXix6m7CgfUmGi22CdeKXqswBmpk2dAadMcJdGQFeChiM6AKfPxgsHpLiGL4T5AYS9",
  "key14": "47ELrbJRwtWxBp6bKGFMg96RWAddfLGpQ2xpEN5CPQZ1uPzRZAPQyZQmdYRxkZSjCtauSqWj6eDViTs8QuVECx6J",
  "key15": "3KXsqQ8tvh1quFBM5aSvpc1x8P93Wyvr1ssbWSrfFfZfbshQ92djbdbN3JvGjnD2Dvp81JhD8i6TKkRnW13MnDGf",
  "key16": "5APdZAzNUm71wUwsQrrB7troYCmi2m1y9VouxuViC4eafCu2sfXVWMhsiasmpD6SEY2KLHtWFB5AcxsBs4G1USuu",
  "key17": "5Z3rncpW5D2WpZyZsYouJjJvmunzVaqMwvDjNPEDZTcuyDq5nPp29GdRgXzjyMk93kXWCSmgnsuqp1oKHWHb9ffg",
  "key18": "3Y44wT2G672JC5Nv93SqJYH8Gb7aAEvZsbA9MvQDx8Bmgw4X54tbzFhy6eNKsWYoxZ1zgu4fotvBQhuznqkFcNM9",
  "key19": "mjw8pPwtLJ8tBrrkVCzPmqY4nSYmkE1SMiwtDe3ny5oYDmaeUYhtfb6PELHvkXrvnTkHZPLWQQXPXFSAdNqcSBa",
  "key20": "3kWbXfNYdTxqQdrh2VHZLCoypNJ2VfLNubokCreieCiri8BTjfpA1V9vategBUDfQNzggodR54ieTMTtTAArnZZg",
  "key21": "w4rzVdC9vb6JjFUqW6uqAE8svpjqeGryFdNDHk2agdnYGJD9ukHHzFJAq1jAmsSpS4qhWC6giEX5p3cfdzdsq91",
  "key22": "2VkCVnC3wstmWY4ybNR4tqhSQRrdvTibJCQwhPZTfLPcG7t1T8P4XDBW9f2WTmVuZuavgiPxNjaJrCmb2fjsavbb",
  "key23": "5h6JVuJHnzCdShmQJtZz4ys8h22TJioZ3ymBGAuzD7y5qLNn3A9LHYyBKwhbxnaGfHP2df4Js3GQozdgCrpqgFjG",
  "key24": "3juZua5PRhcxog61KA2coekwLQkt2NcAwgVpD8XxE7fyrHGFA4WPJuevCtUyTDWmzBqFDzCrdtGieCNmTjm4HwkJ",
  "key25": "3h8KLQvd5WGRGCVLJwbFD5ZYftZzmbRrcgBKfDm5FD4DdKGQ1Juyhq5cCvwMsgqe26s1cuqKPzKqrtTDkg8JpgLJ",
  "key26": "gLoc2JTQNNfFhZgxNaiYeL4iYxa2Meh7nDvSzahVQT3Yrq6QXN5Mtgxc1So7XLGDhQjWYNsJdHKtuqyEi26Q3f7",
  "key27": "4P849DECkQLFivjkYTH8n8kqLeYr2NgP6WH87xMjSBzCaUdyqy4wfHKwGJaTbprpTXeovLhAh1thEyWrdRUzmCRm"
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
