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
    "5wuZ3sy8roEUbdkTwp1Bov3sZq7SMU3tAWsQCTb7w9eoyAunkkyrpCkwzTPzVLUxrjt8N68uR4i4Zud69Z9tiADx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oMZ6eNvvu373Wi5f7LbERjdMVeCvKuyVxXKvUFZicc1titwfxTgV54kLwoLPioU5AV1oeytDfGowvTaeatzf3vv",
  "key1": "VXVeby6GnG7uiyaAQwaVP9jBKuZDwa3vJqSdhRAT7DsUrt5166gq1VaHZRgbwjRr49nHh8VqQi3kkRiaNPw5M7G",
  "key2": "5VvNA8nV8qqFSzYe75JQiTndCCMCQ9P4UXzfieff3bWityKYPZ3jps4nzQVRSRW1e8db6ALcg2fFQBM6cVjoCu6A",
  "key3": "8qQEBEJYuGwSyMTEDQ7n3zC8MJmcs1UMJBE7N7PZtrkZCwThRGsxDQuiPFoRcqEgDfNibQJdQY2Dy72ekfGd1Jm",
  "key4": "2QurPbXSD5iMxRcBbxbaVbYwdhbnbrsYkxrWuTSjByfRGE7ENL34VJZQCWYnThhTZpkqkTHCXgr6RYqRWFX3LCSF",
  "key5": "WTu7822mZZsjvbYyStzCurMQmrtJ8GAkBt16FHFbvu1LxD7PRmQN1F7EzY9zMtYoPuvjXZ1QijCFWLnRwoEqxAq",
  "key6": "5HnwNfY6dxUZyCUW5JFqYQgCMEMTeSp3uqX5x6zSVHzNiqXuvgmy2H5aPgB7uEiN8HJFKk4MPqZETi9mpQFjyQgy",
  "key7": "4bGx3qcaTfoGzTJ45vf6bzC7qYu2HeLybsRirEUzdCHoxKCfvzCPZVW38Lqh7FqczFMqWBJyW2zxAaB6S1UNuZoL",
  "key8": "cbYYWrKqxjYnNxRvVffCBqcpGNXpHhtbDEK4W88XNxNhrYmd3khB9zU2Vo4VHDZ3PDgZRY9o3aGRLj5PWRxz8wi",
  "key9": "4LeuA8ivnpwPf12XEdBPWUPo1tdnQBPXFYUyVVmvjH7wU4HN37QQ2vzERufhVAp4iQgM1cJowXzHa1gKZbiQevVH",
  "key10": "2Ug2NFeygt9hQNkQsBqZgJJAR3VXB73MPJfMv9L8Dgeqx6WVzjRzmhmqAbzu4Wyz5r1R9BUC2nyydMtVu6fnfzvh",
  "key11": "5FEPN6HKPHYnoyByCpxzmmBY2MKNja9JuFcMogJnCg4shyV4Jb22Tj6BnrKzWeSUfG3qJTfFe5CerqTgZgBy2Fi1",
  "key12": "4HDCDFCmQxFrmdcHCfZxHiQhobSurR8uSkFTnRQXQusK3fxsT5cuoPwFtGpj7JFn1mDUdDib2PHx5TN4DJiF8Bqj",
  "key13": "2oDCodutPaQLLEbpy5NVgzmgVm1L5THDdoDdY3JuAFhRkCzB8KeMa2qiquyBBWrVVxaEZV3ndKywMrfYXEMuqLQc",
  "key14": "2a1aYHzcnXkqXdNt4JVVCSe1xXswTy7qVVqy73AdZ7w35qgaiK58UZ8rz2YdWxYW4UzrieGGTXDwVzBRLK5sHDGS",
  "key15": "4sJwKLcYWKtE9HrEqJuY5MRAuQaMbWzPUurQUK4nY6MekGMSGmWLVX4PmxkBaja55ZWwGxTVrvSbDATPtSFvzQkx",
  "key16": "4PRRfYDM7NTsFMubFqXjB16fBZrySfF3fkxZu3HseH43VKpbdF1sqzzBgHjweyrrLEF54Z13W4mpfrYPnzLUrbpy",
  "key17": "2n3445FWCUTtjqWD2f75j4Gbm9cawe4gcHBSLMnP6qQ4erAzk1FPcveQsikSGhnkhUhPwGwhWiQemryi2azkshts",
  "key18": "2YAsdkRbmBwoJamYgjRUSq3pHZNm3iA4q9XMcz54EU74csd8XvD55GL1YGomLyQ3aTUBr3QH2tvBfU42CGi42CeL",
  "key19": "4LTwRRbMpV6ufn4H7PfrZ3BKTxiAQsUz9Q2NfBdJTeng2mt29JqLae7k5Z5regfFvRThoK2ZiwU8PZMGKmrhez8V",
  "key20": "4hvNcUZjf2KBG8EC4f9xB2xFFPWLYsgVmshNkYFhu7GPScEKFBW6CGaEFqoNeZkwvCP6Z7iEfdA9PK6MGvY365dW",
  "key21": "5f142F9mcNRmrj7jNDUBBvStBGFfNmKexitjYATiqRSGVLovxhm2toL4uEQ7ZuHUH5DL6mAra58oqmRB2mAK1tFu",
  "key22": "3v5UF54NvkUDcJum6fsBSsN3LkhPJyFXeJyMbitbUijfkcrumNmWF9MfZGgrgTcA3J1WnBFJh5TNGjtwEVNt2pFn",
  "key23": "44oT4uQBfRaaCJBSZRVDn47XAveKc2o8KsZhP8hwYpA8jGduUF6uFkqvJjXDpQDT9ZbnPK2ZvsnUKChw3f1uXsLu",
  "key24": "35UZDbH5VCkvJ5ncaBmziQCygqzJNmPBwi8HhPHqYCCEc9wFwUDqAAkbu4ouCjrnfQwFa7fnksKmrZXa4TdqxcFk",
  "key25": "4K5BUzqdBNYkn9JwWkaaZg9JRobH4s54i7pNXvdDemPp3MGb5LUpBQabrXy7k51ToBFjQyiBjm2g8NMzfuq5vUB1",
  "key26": "5JL4FCL6NiRqEqWKnbZNLTSiUbHP4gJWdLynq2VU59s6vmHMu51Vxiab2z6JwFzSfi4XbTRF7xbQnbkWRaSCiiVP",
  "key27": "65nXQPYKkMcnY8ET8uMBp76snDoFBno27xUEq2pfCsCw6ncVScuzrHvN3LjAMaG9uGFfRMSu5SmvYa14Cr7dWLvJ",
  "key28": "4SehTFgJ2EotDiZpDWFxxvCszY3CyDpBkCFKdpLxQbHEfHTnA7kfvQYUNFdgVZug7WJxRxqpHtdrA96m6QLX9tsr",
  "key29": "6GddbnwEc5AdvD8fno3jDraEv2nrYXAB53iftoerXzuysbfTikP6swhVkAAowrYykGspMXF4WVYs9uWmsa8zQb8",
  "key30": "MQjnQ1ZVsBNvqegyNe6RKiJEVssznwyGwZNJfcmr5riXXWNCdQJ8NruQr78wezLM2LyVfWmwGMVPirKmGhhuDD4",
  "key31": "531x6bHje4g2V7hFLz46PXmpVnRgXRTQ7tyVxhhmWw1LKvbo35KKTXvZ9a7yzg64JFv5f66tsx12egLqdhG1QEBv",
  "key32": "cDhBLPX1jcfFm6BN7Dwjfux8f3NTpBXfrguQQXzuQwkkfx3Pv4vphJsCiWEqJqYZgmEetsqfLutXJZHtirxiEME",
  "key33": "5QQWpZAkUhAWdrbGeiPrQKQJHhnR2PKm3qtj8CPJu2LWjedtK6uQ84HsnRWz7fS3jEe6YfjUvK33bcgnUjo7neSd",
  "key34": "4aAnQKdhnt1jBQsLb6ULeSgacCverk8Uf5D7YeE43PBdYpVzeXtvnumaxcqtJKRNWBRW5wo6n4qaycGzHcvCQL1Y",
  "key35": "4M47Sj68kt5HPic6iBz7diRNiGZWVrRFGC6iWZG57GubF1SX4BwyR3PrYEtAKQ2sWuUv1guR8K44Qkj492ru2jgY",
  "key36": "5cSErrHbyUDHkboBSZcHCHdTcCH3sYbp2MVxBqnEeGq97zxYP4gF9NLQcAJWZC3dgJHseRAiPMRgPTgdanxwtDjF",
  "key37": "3fzgQQLmDCvT3tptpNQKKCr2FccMTSCaWsFbLGASFMUaWSnCbxgRyWhzRiqKYrkeJHqwTZedkXkssceTWnhEkEui",
  "key38": "3V8xMsVJH5SYEiR11afNN6itAbi1v4qUV7JiC4PhPksuZzqf1Gnon2nJfENrCDCT5aHn5BNBr15qLL7tX9RPPhQT",
  "key39": "3PkceSKD6nCjhS9sPnaDezEVMGe1iJ3RZzNrj6RgxM7Pv8phhf8P9MD3p1NtNB2YZdKikHK6spJBTspThxLrWsnv",
  "key40": "4ECrriiuAcy8rFmbm6MRzySmPhXaHntTZdjbL1zShRqie34Cobs5zro51qtZTj2QMxjZsaLqyNnwP3TUHNXZxrfK",
  "key41": "4tyW7q8uqBMDDjbY8Z8sjPnU4Wm24H5gM7ax7c9R7XHG8CX9uC2o8zA4KNga5SYj53qtDzBvAAMvK9EwXP688Qmh",
  "key42": "U1s2HJBbuNJUMC8o6MrrXAKuH2BEhuUPg9qVEhRDBnYc244pgPuFGSZEqxqV4vm1CBQYGmicBLNFL1YHbYG82by",
  "key43": "56YgXWxXWgcDMwRF5hHtkfpyGS5fK7z7HSSYAffP4VZaAjDXC2TBK5YM98NsAS2VtphrzqYPYrpyxhBkkyPZwQA7"
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
