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
    "4tEetAWfQFf6eDeLccvatTKZE1QuWiHfZ6MfXAKLtG277Y7MMqdSCgzpBzNNmQ1dunkAX9GcQCpMjz2mzttRfjP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D3p2iEFET89kLBiPWNk8B1RtPM1uUMbPkZqxVKsYMvHC5uw7NbeZM4ZzwthHXqDC5sa4oe67E36WfUApfLHXR6H",
  "key1": "298krweqAF3vWpsVhrchAPfrWmBhsT949iFCazS2LpevuJg9fZFU81UGbcwHAg5iKhHjKnfjCxkjawZmLdJEkQyf",
  "key2": "4zrdRPqdBW3vMze2o22pFvDvDVxYCJRtoqnj4NGPhwxoYVJPYhjjr5NgKUYqEXdQP2pUTFpLuLFH5nasQyeG7Awb",
  "key3": "44dQJVbRv95WyL8fwePjuWhR9iJhSpJvbaanqRqSmrkgJ1VScZuHYwAYjmq4KkNtGe32Q532setHaGM4FmKYnhZe",
  "key4": "NQs8uya1TRuVaDZdTcwpb5sAgAjnCDGNs2oR3m7nNshWKaUiLVzEFPb5657NRXvYXgx45kzxaPiaeS86Qa44sj3",
  "key5": "1t3JJ4XaArfHuWFY9HfZgbLpmvBUJQnURGnknejpVHQDuqPWKS8tj3hM6wa27KX4BVX63KS49TYc7eb9hSy1MrZ",
  "key6": "KrkU5d2L12Mb9J5CmomQvKJCTfb127mTnr4DeufG9jZ9t3nkUPC1zTV1CLRuZBWBSYJPVkDdXk6qCKWNkpoG7uU",
  "key7": "RZU7kx82wfyPUGWQutNzqwnJbMFd7AwX1rKMnXTZjshe4zu9TMa59whZBKkf9fJihhAgjdsC3LBnjjKVsmVXduJ",
  "key8": "8dE33QErDWdH3CbXDJLFUCCxfZS2LLwoN57nzgq3iCL5sHNnCTAAjKxiw9eQg5b9zMsvvVufEZSbuCdQTngQCnA",
  "key9": "3JMzV9rBcmPrY9TSj8WxAkJ8dGtojhXJmeQovShcddtc1939Y65VWnDn9ksueXRXdtVxuEWx63QtMaRJPiah6Nz4",
  "key10": "47mHjG1uMPGvDYF5NVHW5Rb4ermy94JqfSWGQcZtDPGTDcW8ssPebwo1B8LRCTLGowXKRem7RA918ufC1qMiadUf",
  "key11": "5pzYm3wZkJz6CLen3J7Fa6nsRM6uUU29cSafUyyj5oJSPuCtTMp8SK6FKSSiGPnVqFUNtjWsqSDuEoT8BqrSURyZ",
  "key12": "5gmg6uuNWo5Uu3F51DSnUmR4hh6jpogDpazB7X3pridJaQ4Ny28M88XG5KkX1FzvSEcMRcM5JzMcQWnNYmd5Cws5",
  "key13": "5RWHuXvQonaCztWAmqvps8oXkDjmFaszjKDaw88JRYNmx12Xo9RkzxEBPcMQDVjDfyb18L45HPCmenBGdwPjsm5T",
  "key14": "5CmyczD2ENb2fCsNZYAJvAvwbf7ynFDefjW9EC3MsA6Yj9W9ULjPDMnKZyMeWYrtadZ533StohZHAE1qyzBcDoio",
  "key15": "2dCj844WtXr4srMqAze44dQdQB32PnmPJWAXuLmPmnJLtK7VKHdBxEpyfbetob5b7dRQ1WCDeHG3GVDhW1eVoK4Y",
  "key16": "2KWM9uXZ9JpXnFR1u1wHR6KAqWq3vHQdAeqMmgtb76wj8jMjftLLhaggti1p4VPsaAQz8ThHpDbEjjjvWU79ijhL",
  "key17": "5A6s1neayL5GxaNwJKWuLaSiekQo3x1z96b8REXF5WG8JqfxHZbny7Muq7fBSosYrdqhqdZUmRpZRFiXMxuRqAA7",
  "key18": "5b9witMTZ8v216EXycBjqm2G7gbEyqmNRfebmk6ettcJ5Qz2WXh3dU87EGvHrmg39TdVeDAreaa58fV9PZPjTfff",
  "key19": "4Pqbhq8PdEanV3uqvAqmcRJzH7f1k6uE7MpTVmgQynaA4ybpZHybg1v4igjwWfEUbJG4zLR18zUBHdrtTaozsi3k",
  "key20": "haD62SLxT2Aj9j1veMP22NvzG7yUrsUqGZ9t3Bb4SbThFSDCAeQEKnXbD6SfetU1k13TcrBZdsjeJFYcudiyqnc",
  "key21": "55wsuqgmxpMiecK2vFckAyqherCmRog7pYQy5cCDAQhcGFPAwoPQggsxmgL9AaUJgZXUcGWaJvKYLQt5U6Z9hAwb",
  "key22": "5CPDGphiN1vUz46saJMR88frGgJFANck3GSXNRuAxoRBxbXFqfgzk6b7DpP9JwS7D2Bz6YU5tWJbvcLj5GrdaYhA",
  "key23": "3qmRXZ5vg2QEPE17d2NjGvFajrkBwQTrigGd3QdbXUeXPAXnnwg6iMid8jD5kuAKy6ExFjY1avpwjycrcZnpkYGW",
  "key24": "3JTc9HbxMMzVmatz5EcU1Y7fcCamrc9BdBzy8aFzozrNS6wb9SuLHB6ovzgtugPXyfCjqAmgeJ93BieDSSca6vUM",
  "key25": "25CszSiEmSVdcCd2YsRfjefNQxjsLcPUsRETmJWY3C65QRS8RCs5N6pHC7GtuAq5hXrU6UVD8YmHm5UfdbuzSoCF",
  "key26": "343yrLMqpewquovsdb5hvjauJc4N8TxJS86jWDrsMPmhNDXT2Gt9LZPT2KLAYBiG9XEE4DmnT7aZW1KCGVvuF6eE",
  "key27": "35SuDeAa7yBommLfVwR32WtyMdXsTCSK7hWRm8MfFJ24Ftgt7TF13VyPuBMQ8Y8Sg8ubspLwVX5r3S1NSyWYAw4w",
  "key28": "47QP7sVDCuVPsDJga7KWCMMJAjnB631sBHdz4jreatMkbW8jRwQAuxPAYwVoRD1tSX4wTiZgzExwGkkGmTwVu5ej",
  "key29": "2MtA7miXW8aJm6nCDRTEcRYXNCgjwrHXeUTo3TUifS4r7xKroGyqdS2wkoCQELV5HKWU8t9WMVB6GqWA8eaghTsj",
  "key30": "4pj2mnsnbNicwnP5tcUL9q7J6v9ftArR3MJ9Dj5ZtyhKFMeYkjnfyB8mkoSvURrdz6MpSWiKjvFbKGtT29yCGXWN",
  "key31": "2Tb97yMj8CnvyZcnJu7NGRZUwHWb2TcqSWToBrxSmb22t7RGbDjoQDfqndsEWXPuj5f6V8yBBjb1eaxG8biZCySv",
  "key32": "4bTf9i63onkEHmQhsd2u15rzMuVR4WfB4DyAzQuxu7YsjapmWuC6jwRa17j7ajXk2nPiQPKY2NTPCpQKhBD6XQxn",
  "key33": "2FzYdfHWZfJ6srz5WKj3DZYAafn2QqdN1Sm8xmgD2Jxo4JVhUwzHywKm4B3YtW41LhRCnJScUTFxEUmhACaCrYML",
  "key34": "3q7e8cgYP49KjQeeX3QHxqncTXdn3N89QhV7r9jDRJUBTas6jv2NEj6zoMtFsAjaQXLgZwiHp8SmC3yrrwKo6jn1",
  "key35": "5Bi28BSqTfCspWEdRoS8jbKaW6rxTgzyRSRkNNmR3PnikE8iPvKTFgzS86dKS2RbHvzGaZgrNBx5rnHRJGSK3cDC",
  "key36": "5zp1uWagGrSHTJQYsjXKnYT3MsSYiJo3hAkKXr8wFoWgem5acTdnNUpyP6s8aFbEW5JcfmBJ9aAFGurN52SSCuV2",
  "key37": "5RSXpA7kG66LHFZjrx3x7HwPLy3eGvhNNeziDMZK7Xrtg6HcFWnatqExZ7aL3A9pAoLi7HuPCJy2GmGpQgLuYBgg",
  "key38": "3SaCwGeJmvR2LK3m9h2YCLaTWsDERmUVLnAt7jiDyehBKmx7Jo26GAdbhsEzunxoBBG35boPEcxmwXjmYS8F6rvk",
  "key39": "G4UFth1b8KC77M4U2peM3USNYWhduzNr8tDkmuNSKHyFhoPPHhTCZqJx1FGLXYcBCSuUYErKDyddEqYeY9KJJe2",
  "key40": "jdjLunNvX3Q19pHfHRVQhqngJR2F8kWsDjcuqdSE8ibY7oWfct5i5NEKE1s1Po5kCs6ymTkbWTfy1WQnjcs9Am5",
  "key41": "41pGHi64KrG3VZtF6vSFF32kucyfrMj14kogyEKaSxAS3xrf6M2ED2E1cYCU59VRUXXkPWFAKTgy25t8HhdZpBwf",
  "key42": "4JNbdZVVGUT7j9r5jH1j1op8uhMepKZYmuXTpyiFDXR3cq6GhY9p9mUi3t7fF8DNrTqcSZkvr8LDYpVdCehqNNgK",
  "key43": "41HTmscZhJWBAhcsNs5pBEr19wSkMFV73MaSUjg6BDuWgNCQ5dzRAuaNs3PR2SnE4AjibVgEbK3qKzU2godRuKn5",
  "key44": "2jLNDWcaLWw5ak9H87bGu2pxaND4PnNMFHyaUpZ7Ps4Dm7DnX2s5h6HNnmepUhV6MP1979xvi6ig6Bhr5oT8vYwi",
  "key45": "4n5gY3PWSjxvRXtVuw95W5dEkrjzGcZTmNwZibCgjKXNNGCFokjqsQeT81w2xA4S3Dcg3ygNkzc8Wtw7sBJUG7a6",
  "key46": "gSXSo5brzpmAkKHyutuHXJDMeKF91PKCgNdVKJaUZvH2KpkSK6MWyysp9TLmLoiobge27XxTLiX8o4JXebwfT9B",
  "key47": "5nXjD89kuhJCns1Yx1SMrRTnNy7kHi3HnAWM7fkXtFywnbV2dEYjkhoYYumMzg3vW3aF7DHGvxvgfYzYVqKeoXXZ"
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
