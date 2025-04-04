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
    "4HBhLGv3XrbwUBmUH5gzCzenveU1MffPCVQ1A7kRw4fB7d5E3wpXF3cjCLHUikQj6hb2VHXezHnjG7tCx4nY7HpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67PiFUJhkKiePCuRk4Ba4ZR1MoYi2h4tQUPh7oru8qjNjt5dFDXhp86f8QQgbLf2ZAnMD1cqouYKctAKrwXWEhvP",
  "key1": "HEPFrQF1juwqReRYxfpL8MrEpcYE4ZXRr3JSK9nxf3Z7P319hJAQhDTkqm9MrCnd77WDgqYVZapfDfFY6XUmrVP",
  "key2": "2BTedPen7MG3GEt5ueUaq43deyCV8ucUFrw8cLNpXpjukCStrBvEC136NPvwYx7e3nxi8dosSnKb9FoLR2ykhyCV",
  "key3": "5VgZvDLqN2J7BGU4LyCUdMncSmDR8JKKNudaguZGNatbct6umWGBmGwt7tVmV6sCqYaaCdvStT3WusjaMkvoaGrK",
  "key4": "3UsSbsqkBtQS6FxXwH4kPWrThS244Rg9a4CaMxZsJg72AjGpznQZcEYKwmnYc1S8RiUYkhzprC5hvE9AhUnVn3BT",
  "key5": "5HLTyWQvWC4FPwzQJxCdNadh1wKzFWMWoBMrPNJVX89Fzw24tizLuaHewmusUC2bSRYnENVT3LbSVs2U5xoYp8tH",
  "key6": "3Ji3dfti8aJy5WUMXNEtZp4WWaZfdMsSxsC13U64ecnbFhGW7g1vynkKjZR7hKzhAxpXBj2qejmjPcisWLqeQPG3",
  "key7": "3S6UbnyEuQsUZBEJozXdujuKATpYYXtJJi1aNaz26NNq7UWGEzfmfFViy52L4kony4GmjeZxUHMkkZNseXqNzh9o",
  "key8": "5EBNu6bBXCnYY9cawyPwwkbMB9E3mwzccivCFuWZPQ9Rek6qSeRVBoQ7cDC8fhP3cRn7g1dW6d7E3w7BMDriu7jR",
  "key9": "3iU1ciMAJ1szBrtUjRSwUDqcbWzAtfWo9N3gBW4kNBB6Bszqa8uCvLYD4zfq4HJ3MZEevTdkmbT8yrjzfx1iuwSd",
  "key10": "533p1x87K9NMQGbyyzoPjQu97r1ZpjWczMnzJnEasX8o1nhSqUbgxQnYoyR5zw9rkznkRCrHyCHhZ8uwLtJALzdz",
  "key11": "3dkSqchdRF9r4TTKQmcX1dHtJMyUJ8NscJY86pYftoTtKUQ6Ligj3rKAJkjFpUeCY9Gpx29LLvUMMLgxWrP2pfUW",
  "key12": "3zsm9dgJUuYN88yenuZVR3bVcJXPkwZ4rGDPp3fwqVEeyp8RnPudx1DqxSfyzYHDi28pVo2MDzN9RW8UP5PEcTmg",
  "key13": "64Wr2JTPa5DpZcAdVYwxSy5r3yXVhhTr8rDbqwqojLu1VJRZ7oW52rdbhGzrxQDycikueoCU4jPJ7kUmauutV6VT",
  "key14": "5AfomYFC8tFhWYtRo6RXBKnnj8T3YtoMRA9yk8ypbhwyncFuL9FJDoef7hwQ5x27kAj3iuGHdaV3Gof792ortP1s",
  "key15": "4zWb6rkhCeYb6bv8vFg6tisQyXVpjVWjKr4CdhCuXL4vHRrKmteoHhdtsueuzZLTZ6jPaNAQTrrKqoDNXgT6iTfa",
  "key16": "4SyaScmMuRdDFn5A6MkHVA8GrY1BkmtE3WuwUon38d98w21Tr64TjRftabe6ejZXdumkDVVMSgfkJCJoPW3kwMRe",
  "key17": "3bCL4carhycGqVf2e5xxBy7WaZsnMtCXo3NiVjgkuT22bJrpMD21CbfVE9r8FJmnaD7KcC4QikqMoxauEUSQTXwo",
  "key18": "5uZZYViECJWba4RK39T7BaoPV2LgzWxD9r3NSzkYBAVs7WNDbPh2RKfyqsmoNUyeTLjMb6caGkcwusmgtqvhzc1S",
  "key19": "4Vu3XCKz5yutd5xseTyvxga8EZGqFnfaM3CVp8jjondZBeKBbjrBrHtpVMvXwczmmK3ywjZG2K9Gwv96dFyTjma5",
  "key20": "2acaS6P74qzC2b267dz7oMf1NkoubWunxqZ1EKcr85nZgdb7MyHY2jm53AUCqoFJ1f2csKSiiXhJCga36HNsr5po",
  "key21": "FRTqFdYs8yq7nr7nACafq2sKAfzZYnfWVToyCwx8EmJ5ygwUk2LroH8ZpctNCCz7J6hUT3k1ebtnGL17Khh3Rc4",
  "key22": "EbWtkfC8hWgCSEjUBZrpBr76VYd1LbkhZgH2ckP3mCEs1V3mtz4aGt6BPrTwzfYzC8aZiVf8kXg4qZ8rqQVmYSE",
  "key23": "ugELKyrzBrnsFRZLyVfdda3zVerSJAkdhq1uE4gKpEhNCRuqh3r1vvEGG7RXvkefPuPaWnR6irS2ejVuq1Zpzvh",
  "key24": "UaQbSFKvHUvChUmwagEjTE9Ve48EALXARiZSE8wP7WSVneAVRDQK8jAp322xZbRxr61eeQVNWUzeprvr9vnYVap",
  "key25": "4F3odxb2nreBQsGMx34wPwjVr6TodBsv8BuXPHtEidyNa6jXVkb4UmnFGEn6nzpQGTsjUocVrdskuP5HS2zRp6s5",
  "key26": "3HJ3ZBpbMaBqCdMEy8qFAvo5P9uoXyekrDYdN62NZJZqQPsw9oaF98ppTCFEYTNNBhhP6Zt1c17tcARJXWovNjnQ",
  "key27": "3WRti3F1cPAJnRRhMnZLxQy5B2qG3bf95qNa6pJBkGN7PXLczocJxMBTb8cC3rDtWY3VC4WTuteiFwULQN9qS3Ey",
  "key28": "3PLyA1Luy6iFsN4oTGHicDEwLXS4BxbRcscRLbD9nwiQknV4AgBWRcKh7tNokE9dx4yacBdP3UcUa9mmoyFUZZJS",
  "key29": "3cfQESvQBHypE1bvTuswYvwEnvBvZ8SRVaMAMsTeS8EWftDLyfiTt32Ja6zVLArATBaNDcypmqVNaQ6YkL7pQ3gW",
  "key30": "6WCaKcEATsRxchQarwarig2kvY5irhS799KPnCfQcR3udgjVopz5MrRGwT66s9pbSTJ9xQfC49NnXXS6f7rNvog",
  "key31": "2fhg4XiPUPY1xQ7QkL1qPrzg1JEKPEjJQzNTSZQweWCEsXqu6Jn9fPyZZJnmKduQh1mDx11gxe5cFBpfStrD2W39",
  "key32": "QjzFPwTFqb7Li7JaerQ2g7HESTrbMx1zSXUJM3htxEjRCQPqsX8cGH8U7FvmqES8trpfeSpdTcizbrkUtdyCnkY",
  "key33": "47zqcAvxpsMHkt4rerCeZz9jgzRFCi6GTgWC1zQFBDxpCrQVKezLtYAMJUcEZC2woHZFGfd71Qbxfk4ZAhWL9rca",
  "key34": "4P2Mek5fRvUkgs2cWQiTi6irfLGyYLPiSc5Czi5n3eeTVJfiuK54BWscNDvaB9BYtrzN4495G1iHT4MW1J3DT6Ki",
  "key35": "4ov7zVQzXWx4DisiUztqnMTSuzLU7iPrHemkZC2JreY1be3N9EpDP9Wm6PJStqY1bhq4a2daKnnZF5MayE329uHU",
  "key36": "2gAjKYrVqsRLNfhBNWiEt5mzVVPzhj4LPBZUBSVVXmW35wH5796S7MMtUVLW6AD6wqYBBi8YKKqZJ47gHhnThzgN",
  "key37": "4KYzT5dBqHSrQU83XnXCLkFiZKvNVJyX64niYzYP8QGZbk8HkHF6nzYpP4w7EQR5wBYr8NSfyf5hNhHs5iiZsWUB",
  "key38": "4kcv8oemcW7jcqe6hfeQw2qEW6XbNKVWQ429zFzvdJzKvpMX6yowPUG2TRxRnhq8diwekRyr2QdECjHEgmyCfqCa",
  "key39": "3Pau2Qhfv89yLEtuBRNFY6BATu6qddgK3m4wKVcza1xDeFrkkvdKnUxV3mhwtjfKrf5yZkJrmn8JSEozUXa5Lrfb",
  "key40": "2ewgGbayUDyJ3fy2LCrcTnud2FaU555DuvXR9cUaZBSj9BP59LVEaYJLiKSmC1u1hkGBgsYg6QqMLc1ATtzactsL",
  "key41": "53f3M7BYcBqjRQLaLm4iKvbuwtE6meXiHe3JtEkjP6aL5Xg2WRP9kzVPURomUCRT7nt8DDtxZiVohrEyV61X8bhg",
  "key42": "3RxfFv5tDhuNPB3qet8fggQ6BV3ctP1PRALjSx2qnhYswKmByPfKp1HnsBDfKUqHoM2DaJ7bnTYJZ1Tzq4ZaDfti",
  "key43": "26FpV6nEYCq1YLE3o7UJbrUbhLUJqj5ikYuSc3SfSyGD5pnqxxirCX5pyu9B9YLYdnMkFAWmouJyTA5ZmPZ18tAD",
  "key44": "4k5jBUKzEUwLLFiUVQitvVcjy5yisj6GGu26vRw54dvxMKGDoFuC8bn5bNhi9W7t3jJFahQXbqi62MNS6kndkxcm",
  "key45": "2iZ2QzxKfvCTdLPdChGMk6FXS6YYtuoSRXdAvEGgdkgLvmg1mAGyBRrjfhD89EYT4e926zRTmfZM3N2BBifzK6J4"
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
