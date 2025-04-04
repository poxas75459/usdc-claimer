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
    "8TxvKcaZnJB5eQHWB2zM4qvc6yrL9DmbQsJEFJJZmKtwxHRRhKGCZwwqHFbP5rRMbmnJf5C53RVnHtwfkcCVHqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g4XRq4fnSmSk7wiaXxDBwnncfDhBtDbgGLVHujNdfGYZGeJGpAEFvkPY3HrMU3xZmd92i7fCU6xnizwwDiMUDuU",
  "key1": "59c6Q6nqZV1BL9wuWcbqq4juwoQA5N9PSX6ZgsSkVnfxKYsdR9Kqjp22C8CaM6mjcmkjvudg7Fe4DyWxuCTnxuQZ",
  "key2": "4TUD44oG6ZExPZfy9n8UfWsfTb4XjCMPqQ5ZpgXx31NnnrzzDUgALs2GSDVHADzL1KA9yccNwF83DXY1EbFDBgTb",
  "key3": "4Z4tY6Z3TW9tZkqF8AwyUzZTTPKTBkYFQSYoauDR6EyqcBfutuaPVTkCqoSjx8aVsnbLuMTvGHdo2S2VUsvyjPFj",
  "key4": "2aVjBeUc9VcA5SZgMUittddxS1YaFwWUoyqXbytSmxnqCtqhgFKPt17BWRGFL2JR2vL3HzWx6hnRqZkbNCqcyPyb",
  "key5": "2jrcH5ZLHmWnJmEQLoLpdtPS6VKQjGp583x4ADHyfC3yJxMoAEgBrjvQUH2uiWUo58ZygwM6Jc1jVzqocdgv5tdQ",
  "key6": "5dTkTT7hHY7vY6FccZ5XfjiKc1LcAau4iTDh3rEAbTDxrhncA3X5SRNcjDkTtvcRSQrqq2zpKgAF7ShYc5aAry4j",
  "key7": "5UGXAzw24EchzBsaPFRN9kb2GR5StKo1ETATwKfBAonKKo2QhVnomXxx1Q6J7LPqr4NWiYRsAkmoHskk6ooVY4ib",
  "key8": "3cZAUV5ePnUq9j9fdpMgnV7XCVqmwF8h7Jea5FvUsxWXA27BgLhDyw1KoRyz7rJzCuY1azW41nvCyAr9b2xSb5a9",
  "key9": "48xXfvmLPnW1BRzsthjSvbwQssfsXf9KPKBdtTpSdruaxGKBZs5gJyUYj9vj3pALd1dLSddTPSrpgK6SQ5EEPjc8",
  "key10": "3GxXrhpPKWEQerLaZFrSf4kb9i6Wqq7cNZQbfgoZYe7cg4oj1Jm94vFLLSQEptU4GB6ekDUX13suNMMLomcuGXJv",
  "key11": "4NQ9e1vXjXHTvU9Q4CPmXGoM74ugp4N7YuuoH74Bp1veZknRNruWhNzDTxTScC68cwrLivnS2yaMtP4QEDTauuCM",
  "key12": "4RHj1J5feqTRLi765BMWn1kd59gz3pdXaQ1bd2drBymueS5KyMQvWYuw4LypivLHkRynkZZGRvrYsjuU3h9vMQvk",
  "key13": "4fC2CBaXxU1YgnR9KhdavVuT9MZhqxKJoSSvS8cZWADU2x1Wey8SWTDMErpV9cP1yT9s94ZWdYgnUkNcGFX4oBMf",
  "key14": "5zYSWnU18YNxqUmT38ie889L29aTq6JoexBT3PiFSQnB3Pz9nzyvThT6gBZfwjrhCgUCucRtfvhci1BNW8UknaxX",
  "key15": "hUXgEAzBBHywHKXBKd1h86VWi3S8XZoYN92R5XwfuQ78tmoXTCV1LVehmpX8R4X5MU6rXKPVSu9jP9b54oSkAGv",
  "key16": "5oK55ufkvycDduviM39QntQU7pg22rm5iBziEzQ3AfisNsaJtb4zcwUYbjorWyWJCH2EzneR1uv5uNKCs4K8RBC2",
  "key17": "Uq5zEkCfuEafsrh37nkF2XDe8DXAGpGCaLKYHCAXavyLYbTeHw3qmKms9Z7yc7XBxWkmma3sZvh2YnPfwRkrN8V",
  "key18": "2LHKu9DZTwZDPFmxMh9PzZC7JZiP8Rd3HBZDtkJzNHLrDYRQ5ek3vSCtHcvhmEtXNMSL4vGDgGjGY9b1okwfbMP9",
  "key19": "38MgcznPwQ6qnT8pLNXKURkwhd3AVoB6knLojM5YLdeZbJQbmCYJhdfADJzQNzDBdeyAR4YV2fKq4SLruLEtYafb",
  "key20": "4Prs46o8eXNNpnRpawC16PLKrjaqiMhL6w7c9Ciyc2SC3cwNqMU5Y9ZZMFHJqoaaUhhyDQnfawFF1EP84upFfERY",
  "key21": "5rivPaG2nMZPUiBYgriNj4rAmuZjsk9uMmzGUcBUqSuJBQb9314eR2iD4VkhHgEYHwTo4siF5m6xk74XBJXQdRvs",
  "key22": "YFEtKrqyfGukTXis9AX2PzqKrjkVY6YNTzXNWVKvuwe7cc8nU7UFohgXAtnXWY34Er9RMRVEoHXN3nJqQPP6ou7",
  "key23": "2L8HRXqqpWmsNsgvn6YfpnN9WVBiFEqpyHMm1wPRV3U4hQ8hSCknn1qrG33s7pSKpRfGiM1Qx5eSBCPDsgEXf2mQ",
  "key24": "4U2iJFoPBAguPS9VvjL8gSiBRFHmNWWio6nkN48Aus1iSmhcfLviM8wmfjTGuACmLY4ZXJoyLf5y9rPuar7HLAhK",
  "key25": "UMhieoUfQrmi2LXkZwGJEhxEjzkXQFjiTcgpGJ8WhBE41uXKNL6rfvr95L2UkV5NN645zEzqGfreLv4JThgRC3x",
  "key26": "46jvu3stG65MqbTGRnmyBB5NjvjCeh8sKdb2x6D5ZspW5gWEow8qtugKBCEygxS4i25GuKQeh5Vr6Xe5gTRsa4QS",
  "key27": "31c6HUAnGHieCV2Wqs8ZTdVQQDmR9czVDj9Mzcn7KR93kcsA92obE7eq7HEtUZPr4sx2hFTjYtekbZQCKcGrsUtE",
  "key28": "29t1ykiPLRgJAeYimPfeVhc7tSohmMUdnPXosHnP9hgrLK622qPJwW1rPLBZUNWBQJLBqheNgss73Eom3mmRrAHa",
  "key29": "zAUjLgRzsJPwF6bbqvi7zdUddcxJwhY3sNYobLwDuqVK7qK3VqjsBqtWkC2ypMe8YSGnRVRVzUUok8ADppAjeo3",
  "key30": "36ZHHssF4DaNDpHCD2Rrm6B9do1ybpygQ6J1wENygVdbM3pdZULcpDKfBv9sfEByLXw74HCMetKU7HfLgpuddtXx",
  "key31": "gvcqiopNGL8LPJMnG5SHYCbQD9jScRhQELjXQ5Z9144bnNWDvPbSExzpRF2cPJ33VXk8zoC56t6YdJPVvdBxZUv",
  "key32": "ED3J5hBiJBQtZiaZC5nYjSZTw2EACu84B6KjS3ar7EUyLnmr3hvXEoz9dgeieudN6BHzSS9Q7T44oRu5ThvUTcn",
  "key33": "zXeDFwo36kJVrkGRgsA7gqChAPgF3FjeqvXaXt1R5QnxN52kpsXJvH4UjRJKAjiXNBrrjemt4qDHQMDHuFWGzQM",
  "key34": "2uEqrx9Jsa3qC5PmZfTEHdn9fZBerSruHJodcTdw9QwMbh7y31atRVFA9ZeiThBjgAyeXZq4TVeLvSsWCdxizpSQ",
  "key35": "61agZPMD7EeJYy77FGhmB2zBqBCgZUHbR5PZB1BN88yTQB4iwMxt8vifFdyrKtxxN4gPUkJuZoCfLYPQJ1zvtATg",
  "key36": "2rK5kGn652UrKQyDvNRTnwY4Ch9F7XNN3Yjf7WRTBLrjicZv9ApYs2uFWP7F5nkhdv3Tr4rdJ7yJcJG8EJsXzwem",
  "key37": "37LUhmciBggvovWd9uK5bijZv6qMBTR4DLAvxy3voa1xqykGxxidTQ2ac2F8rBpFTHpipkLAVri7vzErSnGQ9GWX",
  "key38": "2hwMCR2WzJWhVmv2umvpW5UZKyu3WDc6v1i9CoHuKZJGpP9s1f8im6c6u2bXQyeQ3NXVMTH8LYUAU2LzsDeRe4Bx",
  "key39": "4LiSm2JKoEhUgYaXAYdEBBqFxLc2eUCYPY2qKjRmGmrKXXKYzq693PfFmmhuaBCahBagnWJheGsdtNvWQEXDtJih",
  "key40": "93isLxow8XbZxcWEcHufZd9nTiAJeH18ZjkTcMhQHLBsbGcZen5f6B1tBoTkP2cdde7e9BfHadSqV4sP1g9DJ3d",
  "key41": "3SeNj5djEZ9g1f4mtbnzPFx4CiQCKvzijWiNX2j4nF54apwYaesTatANAvecpmiK6GmX5aPJCWzxogym4NpPPCPA",
  "key42": "5bKDnvgRHzdgVQ2R3ZDsFArWMjQbfoHqZCpmSZdUcG2VjiuFUrgNbbmem5QVZBEiYSvBAn8gsF6uRFhJn1iVzH5x"
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
