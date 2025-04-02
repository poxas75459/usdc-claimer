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
    "5cBELdun3dKoXeHu763nEWCanRozBaYLkxnAxvrsaJ3yMiQtW6BAXmeeUS3LuP4PMVTc2kMyzD53KFwGv3kyGuZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e7yHU4ZqZFDpYdzFtRmS8MkiWJCuCZ5R4U5sHM62QwhTFfgBN8CBQEg1ZRtRmHiE7jG4qUvChh17NCp4KeZhjcw",
  "key1": "h7xGX5qo1hrcjUSGXGHrNsqo7oYwtWVzBm3uzAy6ZLn6pRY4Bi7AKiVmpoPkVVhTejJbB6TyFHSCVFXrZhxQeRC",
  "key2": "61iUDCnYJu5KBS3QNfZs2RLAd47zSMDuRXYVT3mf3yudFktTvHZVNk7QPpNYMZ98395zZk1rRZGZi27kv5ngjA1E",
  "key3": "4yrxSN7eh4fqgmCPujn8ohUdbf2gstn8AfyprThN8GYArLJRkFAxEEq3WnXajm3LvvVQPajMH3JzJDKu1Lf7pz84",
  "key4": "4FwXqDTcSFwc4DSi53kPJPx1jJj4Fyk5phrQtnWF7q18RTzi6pjecAPLQS9wmyiQT9XsNvWwAFT9ainKmXZGmD4f",
  "key5": "3zg3pY54j1xky1CJdrgg53umP1aNFGBjMWmMSdhbsAnM4ZJfLgQy9F7tYh78EYg4DFbH9KuPC8R9JnfHLk9rzaFg",
  "key6": "2WSb5E38eGHzqoBoMRbZeE5YZ28q4SLxTuZVV8PU3XeVHBfUZMQr3NoADhePUtf5yip1FL9uyKiy68pFqRpRHEhW",
  "key7": "322hL1BYjNvm6xeHpTGqbZdML88CScPqijtnXor1ZfUo8TKhJz6tG8qant65Lg75CMjCaXkAzpcoicCSUkW9a26w",
  "key8": "SedZFwa8uprnN4pZZRSL1Ai8RSzyxw5DXfcQpZ6euLrpo1PRvGYdLZdmdU5Nw5y7ydxeSD3cWZJZ9tpJiwrSxRN",
  "key9": "3LvfbQ4FbA9f1LFJbdGwCjmG1onuT79Pvz2DERSEQLUSvughrCjEFGHzwAwZbRg8LAjA5EXWVuhSnNDERoRvsNJ8",
  "key10": "sQ7FTfnFGfX4pyQ13fxij52LdWZezZEyGrvcoA7bxmJ1amEDirNQFA2nSca9skSeAs5Rb4FN5RK2jNjmh5YNija",
  "key11": "4RzTgbVYSbgcc8QV3p5eKWZgL6zMTajkkjNVTT1SnrFnGibbVBricfHbaTxZd3TC36iPwQKUyVxzNGgx6zhjn1tD",
  "key12": "3cwfq5W7DheHumZr8GaBqEcJbSR7ECmnrW5mqCmD7zcn56ZXJTpkAUu2Ey6qfML64XB6dk5ED6jx6z5qe7CQL3Fa",
  "key13": "3iW3fprKM2KvWKBh4zQ89KikzXZVfU4JLYa1A2XuWaHto2rYWwXjeF6HW9xXN2Tagskw68QhtLUpjRyRX4rXTt1z",
  "key14": "4d42kRhqJFdG3T3KKmuwjSu65MyCjg6fcsGoCfaSyc58JwA2gR4BpCe4NQY8CpBWAJWhyFGDNNXtPq5cQ7H32MnQ",
  "key15": "5YMWJ4Q1znN8mCumHgJQxdcNk4ufrYGstfQSFXCAN4hWomGksC719tmteyHk2ho1xCsjdYa2suHq9KSW57Xg6QtR",
  "key16": "FotEbh6dD3Seb1QRQ7mCmrLkdPph1pv8ofbHGALZ5XVqc6szEMCVfxhhLpJ6Z3CFjNyueLSWpxh4ySfXFah7oyq",
  "key17": "t2DAHncEPU6pobVUZa1u2iagwEP7avmNfR9q2C1UiMze7g7fAFUrf7tgEn9CpxyacKsUVAuTCoVcozVjtHkuHZ8",
  "key18": "5RzU98qyVFL7xWzjZDkPMW34ZFWvZBpGXQH7T3mCqEh55CDu6BM9gpQiaK39nVxxwSdehNZL9YyPoWFbjmfWscTa",
  "key19": "4Fuj5YgbYou9PrRAUzbKeQwJdRWfEH4okNkejHEZu6kTLJY3ttsX55oaqL5WTCZ1GKrAXN6dsrAKBC4bP8vndaY8",
  "key20": "2oo9cY7KuoZdXx5Lc7szdLbSJKgUQGFH1p2UpjpWP2x98QSafBLtbrMgTLtBZvUx6DnK557ZC2xsbYjNkD51sazd",
  "key21": "3H52wTsjfP7sojM5tS5ffguCVvVekwNYEwQ6CF7w4LwChsVJrCWutZ7o8vRgJWpBAMZ9sNBNDz3YKyW2uodcYjq5",
  "key22": "2vWdzQVazf6GWWQG4qrUCJdTgZAkMADEtgLoTVcN7oUbmMAmuU2xXeCfaKf1ssPuvpaajhyeBJC6SDp7ZiGfCX5L",
  "key23": "5ZXawR8MuHP6kcgj1hZtcVki7syaxEimJ6M3yZbJyxxybnajRwbpXdg3GUQBdmUAmCwNLndEuecPZn2Uu8tztJwp",
  "key24": "3sA7ax83XnCVnPNT6L46N1V9tKnQvCZU9EuT1Ef4YJU1i59mkragFysxYKjApWPpbcg9FuXgaoSKCmxsUHj6qCSw",
  "key25": "2kMprCZYktZubv7nF6jVcGpM5iae8jrG9sw27es5f672VfBXHLBDmjsfqsXqt3LaJ3AQxwBCr9J2jiVvrFLcU5j",
  "key26": "34e6GyvZBc5DM6sirUHpM7MdVSzzErqG8r3a5PYH7SQ2auwfcnLdyw2HZ1iB4SVfzNP1ykm1EZaoFpsXAYgvBVqH",
  "key27": "56wfwWw9LncAEBAyGrtxH6VDodr85MLQNaAf5fyHtVnPFpkXqBW9E9Abmnhb1usyYeCkMVXLEcpn7f1BctSVukpq",
  "key28": "372ZH3gGgjyYcGT1TgsAd2cN6kUKhs1nS2dpqLWFZZW3zB721bjsHEZUC8b91DGtwTZBP4uCZcu1hLMhcqhxpFfG",
  "key29": "4wCLgEJr4QM39ajRzMQU8xcoqK178kNGKyvb55Lu4tKyFq5b5bSZUsM6R5q2Ktanepaud5hGqCXUPwkGrkdjHdF",
  "key30": "31z785zQPLvmXCUhMrVoXQ1tMyhpNUBnWTWXTdcaqvTd7xTko5HTQ3AuDttwzWEkGzbRP4QUDVe2RnvT9KETC6ze",
  "key31": "3v7wxfEQoW3fyYT4DepALdnPUBBcLbCDWTfvcnxp3mgtQdinxH6DxcqtZ5TpifXux2b2ZXczEkydDEqhMjtPxS21",
  "key32": "3rUwEb7bAHb4bMhvcXuUJPmwCaCwES4RFon3wtz4bzXe2NshtNLj2MfV9iF3o91FqUX8AyHGeJrKMt422cvksFiH",
  "key33": "2gaXNmhRckgCSCmAyuW3wasvaKWBPfnezxGMSdeSCZKSzuRstkA88q2E2o1ZsAqYd8GU8GrYv9eWJtBSpc2VZK7F",
  "key34": "aHaAiDGvJnBg6tGw2fDjBxAurzaU8PmGErrhAoKFeUxsNqqK8fuaevALVnD8YF1K5zKFqPW27zf4v11N2QA6yEi",
  "key35": "2y4UGb2S7pdL46WkayWafnHjAe2uA2s6U5x6eMuUTVC1ZUHNcvVQzNwBAGVRwgNYhx2nayF471E8auqJFdLASL1t",
  "key36": "3ywhSTZbWwHmAaPdPK58x1FNtdRr9GkgGFMdQDV4PYzQn7spKyqDMH5tphnemRfsCyGc5AqdcVjy971Ld1DdzauB",
  "key37": "49jxJxxzngNyF9KhwQ22HwRy1c6c1bQULCC9q2TmqzxLmjvmbgQA8cXFy88MTKbhvm8QbdmNsTs7VEgu2LqFDv4r",
  "key38": "XhcDopPavcv7yBBHyCYnKKk7Jb8ps41oqtJ1xe3gmRzBH8DBiMAt87q3vXTLezLh9G5UktocL4RNvgUMm464tgk",
  "key39": "4PBMmZcDSgUDpede9XhohiKfDRxxCYc6V4ms2EwCoKuYy8mpCv5mR7qweiToWn1XVVgm4kTqb6ZvdQ6cBwcYWCVM"
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
