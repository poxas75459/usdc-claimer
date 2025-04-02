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
    "418WpqD2hoMGVdqzYxoCZsd9Dkc2uG5G3LgQYM5MtDWDTQfTUkJxLwzwKkhkPdC9oFf5UFQ9h3Jgb2yREvinTyvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gThexQCmrgUBxaYcVan3Br8t9FsGZNLBRhoA98k6s9Vro9hupwr5uqPhhGUfFQGohK3oYUTppm2cNnrQzh8mwXR",
  "key1": "2wtsia9AfT8cJ9v7wBxtKf2Em6jSWLcCfL88hjxMWaF4FfRfRVbvnkdCcmSzsaW1cJ2xFjvNasdbrhALhrcD2kJ5",
  "key2": "51hNpyczErCY1mttuUzb6pdPjHBCWYSC65RP7Rc62XC4V9zFY4MyyywBZy2ExGnSqduPtYvRtWaMjJPsHnxyPCuN",
  "key3": "7HiCSEo4hETuCTMokKpbmKWKL8HvnL24V8unP8Uk8ooayj5HcuqBNPKpe6hc1NyCxSXWBDzErx4K9X15KnJJ9sD",
  "key4": "2772NdgQCZ1xGQtSM5e9SE4dnGf8dvh4288Z3DQ6SkEaKU2fBLkJ7Hy9taPSfRfGuFSprDZ1Xakm1R6tPkKDf2Aj",
  "key5": "5fLwf5mbQvYdxwpLASDNiJXJ5XNxrhJc3c8j27haRrdBTxZXSywPzBcZVPB89uEarLJkkPmY9e9498na7nYrYsXM",
  "key6": "4Yc3FHFzM6VXSrWXijD8TJjGNrf7a4rFjuQMDoQFw9LZmZWawgKfejF4J3YMtyhynAHxVsc7TjiRGLPjNYPKdCVy",
  "key7": "5XnVUQ5FDtxcVAZUNd7P37qtmpiCZQYANjGGjbjAqkj6yuWak4W8M1SCQQmYwUkkvFmwZp68gBGbKoNzjudiuxQP",
  "key8": "56wGBDvDa1vgfotKbp3pVPBsKJPasUhik1DhFbhcqAnThU77kW8QmozwsRpfwqqypJduMmst76SCbSKpAgbKbVes",
  "key9": "kbKHpRn9GrQJJwoLxStXhYo8EZQBUbBEFMczELYcbhcsEKYUq8Ktysk37dxsMY1TiWYaYqqiydDQiRtZcGUU6HP",
  "key10": "36MD8kbc7ot17F7tR3LFQUGrM8JpZknnmJdL1RN38PpNvKmqT1GWALp68pE85gv1Bq2dmr6VqL8NmKks8vnGrdMV",
  "key11": "HBFrRtqeZzwXRHjyo8WZ7G2HThNKZLC2N8hTgrPvuPe81EW2wFmDVmXCJkbwa3WpsvyZtD6Efyye7syjNn12MK5",
  "key12": "4JbUj7NG9cmtmm6bKTZxCsvqfRQSknHmYJhTkSBpgRrqTNen3cM8XXbA2Z3Za25KWCVaBs8jzBgwZD8afjJVyX3q",
  "key13": "6U79JCpa95zfr6PhX8f5hF5vkpdYS4MFMQC69Rm1qGuw4mm994dGGmMTdPWYuv9cmMr37QqgdADUMkKaFMkvpHE",
  "key14": "3vdGPFA2kNpwrTcSgJJWutdcaLLnW17JCmjG2BtCAv1Byof2MtZAPyxD2Yvp9zjzeDto5je4CMwGZoHyHgBUa4Xx",
  "key15": "3KcUbb3bSxqn5EeBFKKC2me68GzyuH91SToJ46Xccg7DzJcYYaSTv2W9Zx4gEbRXSQvY2cKirJsRm1HUXxsEk62x",
  "key16": "2ibWhPa7TxrdXHwYqGoPUL6FqYYptZnAzKqjLNNaw1fCs6Ru6a35p3iPQx62yuTZLWwHSo1XbgxRiSQRiyW97AQ",
  "key17": "3P3UgM1A5Lw14gEKQbbnLAztKv13HYqLPPNDDEGEX1eZF6TaAneVBnMHJSTN5zrXbY4sRzUAeodPqXiJmtzKxt5e",
  "key18": "4B46YSb8beS3E2MH58iyPdmJo8uACXHEhei8EdgwqWUfrpgnZ6iTuHGjK4fsZ2Jof1WkAb2w2rSSTS7U5mZ5LJtc",
  "key19": "5bRHRTy1d43gpgByjTW37Co3vuqXEsWubW3t91v3cWsUdomCtNU2wV6g24gWzpbppzMpQz6ygABEHugbzGFmjJT1",
  "key20": "VW5kQ2Fk89JbNaCGtV779q5i7EWjcNiNs6GaBBBFq7jxb6esuvdRZeHNkz2P6zUkYD7tne5J9qMEUja7T6AyUZg",
  "key21": "5GqHsS1yKu6wKXptgNaJsE6FN9AJvmGqZjxQVvWSQa7bpC1XMxjN5kg9MtgkDyUJWSc6RitNC2RaXQ95VUUoz2jQ",
  "key22": "iLiT2WqYFuQXC89JGjvvLGsUQU7MEGcUEv3eac1qXnSNBtcGsfz3xKU773evgZbWi3uNEFQQ6HT9hYkrYY5bzai",
  "key23": "4ZYoKpLFaaRDzokFTu1hu1wt4RuMFXz2WZJR1wSmTghAw1UGCkx89cZvzNvxhaKXAyUPeZa2SWoMqgnwkpd15xV9",
  "key24": "WU2ADxDSmhG5hRvNHbrhSw4jVLNJuZji1ToBb8S5DtHhwnXKsTFaFJ2hoCkw7wcUHcjS29Mqhe3wtFkT4hYw8Ht",
  "key25": "5ZZ1RvCt4Nqwf696C5MM2xMmUHB3cqjfibX6JZnrYfgFpoZZ8Fd6VenWa9rZwR7h5xP7UWhX9KUEXRhAHQWc4r1e",
  "key26": "5t5GRujFVYkUUaN78WPHBoKiWzwgTtxuHzTSTnCoDa7YbqrsMdd1xfA1AawiB2ujiT9pjGskcNyhmiwXtySfxkuc",
  "key27": "2jisU1Sh7NLmNFeCx34nG3m4MMkLPJdiBma18RJkUY8HdtbC9a5hGVRPKqUqXKh2dz1AxpSTvZa9rRMZXgFAvd8D",
  "key28": "2uj8VPqBf7CbPJetw1rdUSCipq87Q1XMRttPqZ43q8NqZsdvGe3SqUgegKZwrKunZ1KZc3MuhQHTTjF5PLo8SJjU",
  "key29": "4FbeXz3vF9b41eTihAdBaGHvN9Dg4jz35QsJNxrN9zU6r1VpNEMN7xF1jYugcrVnXueaFqhNv3N6xEqLw3i23UdT",
  "key30": "5tipu5e2zZAx5PneAjSz46pJSxBJTd4xWCeW9aTsQypJ59Xtwh8xobPPzxQH3pCb88FhBJznxEgBp4ftSA7rEY66",
  "key31": "nyvacavAtXDmhZRW9LLMNofvXbDmrRJa9HdqeeGwJbYXTARZjDyWmvNHD9NmRcqrEWBFpaGxUCp4GQ1hpinwmES",
  "key32": "5EQhhjHzUZbbPc4WMEhqE1rKjfYnC4HkGQnUeMF2r4jgj9YMJoJgjh8GNynaaa1Z6WDLgCSfor8vqeW64SusSxSS",
  "key33": "3nHsKVYZQzmzMNzCdCUTTGxaYfZBgLPPHcMDTbwEFuJT3X7a9dUokzNED3XEC3CcSu6BtJNiLFavRoZbGbXZV13g",
  "key34": "4xb4g5LCBUPRgbREQ2QA3BEVn7Pi6njhV9KRFC1f5B7voWwXAh2esKHBx5rhmMQoQQpRcbpZYohzwUc3ufTb2N8c",
  "key35": "3HjEWcuh7dwV7ZEy3iUeHvkupwvdqKJijm4MJro46WCAgG3unQsHN2vbqqGwWajjkDk97XDA1EJEjRiuaAVpqRpi",
  "key36": "Z5JDyugMjwj7r4cZwHwowiepTzckXi6oG9aBL5HnatGzVPFWy8tb2Js6XFi9wMmyetQy4Qg6omRmpEr1dGpeGRv",
  "key37": "4H5NZmEwY38RFEGrkRLrdpYiwThbzxxPzDYCY24fnhcMW2Li4DY4GDnY22PadGcpp12jriZY8Yh6J7pNVr8EztUL",
  "key38": "3CpndwLfwNM6RyAG9qM2KEZu5fwSJZoKymBsWmqvKaNEsybG6UkjXwFyEMTmxXc3kdK5wFu2BrPhxQ8SBY8ZxBix",
  "key39": "4Qmr9Q5iP2GjE7dzH89ZiFMScAcrYCSMhFauV36qZ4gd6oPiqMw4J938ntVv6u8cKsEbvQkSAWVQ73GZJzJbq7sV",
  "key40": "28aqHXtFgPHPAznXh2SRsCrAyUihixC4PxYYzXBr6gnNJ5u5xBfDsbY4VZwL4snkVMV8MtCbW6nBLuPDs66Thy3m",
  "key41": "41KArnnteh8oWUQ3xjKFbYnFhZQBvJBZChan3HK38jAFV4B6cLyCXbP3JY7ToYAKidnsngHGbNEZM5mNa8b54wjT",
  "key42": "54NFfKB8u8pMrjUu8rExFDYeLoq8K5BiA8ZsJoMzGaqhbHi7387vWoS7oipbKvZSeBfMFiZrg61GxFRmXEmQSAyH",
  "key43": "3yAuLeN4v9kEX1uxZiY3ehPbd9SqQSdpJ4BJZz2NZcQuqisCXnxZKfYXTBjbmwUptxwBnVivmSsgRPvttT9CS12V",
  "key44": "2rE5F53cr918jQSipJgAWu1teSqEB8h3w7H1Rhk34Fh6xyL4GZRRojRSxEYUfVkyAs1de8n5CCFSs6q6ExvTxyGS",
  "key45": "4YCQ3Z7HPG2y1HjZVvggug3jh1QAnsUquiJre2MJyMBvoGCRBX2tMH2Hk3QNxDmXW9g86VZxyNLLEWwmAkSVtYWd",
  "key46": "42BzyHpv5kf8ZQaAwcHpXWKYuC4gpARVkD9VqY6AQpq98yh3eik1bvhobgwwNkm2cSJwX4rXEH7T1cpmcbXecDAv"
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
