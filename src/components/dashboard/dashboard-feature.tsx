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
    "3TFZGgsWWhZidUn1SZqSqj9JbUBK2bcrKopMEaHo3C8cWKZkFPRoA6VPnaXfdetCUGh2srkbvzVzvn1gaoeyyKDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YQQerzUKvthswHQ1rWZspTbi1mJ1UMyj74z8huJoowiTTbMcE7LZEM7d4VkXsJemuFNuvNvDe2YGq1mjE6JKPFX",
  "key1": "535AEUhA9oStdDzNc4CWoCqo1tVUj12gqX4x9QiDahtGMqj5sA9jUnk1YCiB6p3yo9f5f5GEwLMQy6JNZgxsHq5S",
  "key2": "3uX5Brx7knwC8WuMqx2aRqqfZgF67eeiEPBgTXX9bhwykaKCpK8p4sh9RDdVxHRKKSpc54FnFCqzimL1TMh7CTa3",
  "key3": "5kWAvsUdH7iQWDyG8SZGhhnhWVcs1bGaLQfMozwyXfqwAd89uwsMG3tJbaELug3ZbBLvohd7PX3hs4Uswdpe53b6",
  "key4": "mxEFNqavGbyoHc3XQsUcyRxoX7LtRo1E8rWKHPQFmYmCuLa9KqYExtvGVA7Z3fnXqgBwwQMmQ2TP872uNhpqBTi",
  "key5": "2EGEMmovEWCVVDdvQD1Bekhb6cqTZwCVjwdDikh64oygVHm4tSu2jamdk7rzjyNyx2RaxG23LvfYKmXKNDGPBM3H",
  "key6": "2xsPHbtk1T7NqgfV7YfSCvbM11xtZn6U1G5CzE13Hua93og6AnkHWzeuvJXLmGwfdT11cZAVprshVJ6EVQhnhnPy",
  "key7": "H8cgj6imX4YFKUZfYCuuetH12S14naA4aR63ipiGgDPmchx2ok6sJCMY9ozrZNTK4GwHUdo5GkpjMCyNMMYUqGA",
  "key8": "5ZWNTm9E24ZoqgZeAVLtXE9sjHkaUiifMcipf34mVMRbyWNCEVkYfcvPScUKZtBrYjzKPEp6R7LbDZwGDgSYZJWm",
  "key9": "csUGMZ5ohCa3SBGyDWGz8QKeuaqqWAtZiB9gbvb3YZFhBCyToZVaLkHw4SPNgNKYs3G47GkwvGDewBtikTo88Rt",
  "key10": "5G9uPKK3RqQuzhQcE9psTwUppZwNL9NfeKgJfBqKFkQfS2iMRdHSoJT2i4urWrnoDzXDULBsxQGycRr6yxa4MLyc",
  "key11": "4XQCdvZcbeosicGcX1DKT4GEhUPviTt76M3KsnXipLjyzKu7zaQDdyi31h5CFMUxrtEGvH9nZkcWsPmBrVEt5giB",
  "key12": "irNm7gCrxqwp3dVF9oLPjPkYBFAZvsp48Vc8zHZ6HXSphRSChcDRLPsr6gcmRqbLXeF1Ku51VpyBxzN4pQarn7M",
  "key13": "2Wdswc9dvmD5cqNTCX6zevozMvodSxhEfFQX15qfEoEYjkv5a3VYZgHmTvGCAxpYBYagwVmrxYWuxvBiMgyyMA9S",
  "key14": "4bRHYQnreCWVZ9VK4B1Tn7ZxjK8mfFRz1Q3HXXvrpW22XCcpmomJVpJEb5cdowB2TMziSR1HpRbyo9vNyed97FFD",
  "key15": "F9xdPD4nda8HhdQuMu3ssmWqnn3v5QUXm4LKhYPnzM6ndKVc5Ye2UkYcytaGqwviGaxtT6APG7wvdhgzBkwba4h",
  "key16": "3vYFVJPjvXgEvpRZ87SoDYXoDMbF2oqJWMbZKUrm3Hv3JzEUfjYDvvmjpajsrR535Jg4MLcjJ8QyksKibRXDcTfy",
  "key17": "4Q31uKTU4GXT6AGgh58aB4HThrgM4odg7LEyt29RRLvMVKY6xX1ZkNQ6vdxxy3YFjn2S4F96ow12YufvNqicHY2Q",
  "key18": "3BMU3s3KeoesaHRiBuhj7aJ2XkErhRi6Rt5AnUdV3EgudJSTVECCXEfuBnU3zrQFZLNrXeLqqu8Jg5srFC14o52z",
  "key19": "5zJvuTD9PAAnhoXjnkwkotfeWmhvztccA26yQ5q2t9XEgNYHHhZvSEajMpBhcxRCY2gihFRNWKekes2pxYiuE92R",
  "key20": "9ZEGHywvKve4aacn1yBtvzsr5rkUj4ugJmNZhcRrzsjzsSn8Xb6N8SeM23if2Wi894HUPjfBkMNPAuJk7cUm9TT",
  "key21": "2MroYAnZv8tuCwStWiRiV4sPRXp313g2bxeCwNtx6dydTaJcrpE71tgod8HRTL6hBtwCYvF9FdVSH7oBhREFGHzN",
  "key22": "MMvN2sybfD7mjF6KwgopZar8xT1iBSDjrC4dWNHm1Y5rzfyMP1CehRe35DnrDeiJCsDibkAV1z35mvJ1mY4wEvJ",
  "key23": "2WgQmfdh2haJPKx5raKHRi9PwWbZoKTiuQ46j6Ta33kzdZEY6uQBCpyS3PaGZX7mvjfGMFhJ7EHepw49AyvKap9a",
  "key24": "3NKhT8qZ2rbL4hgWfkK1r8EcUPXwXj6ciQTfqtrjn1MgmfJcEay1SGJP75QrevS69GweU8vdpRAqXPaBPBKzJRoF",
  "key25": "57FoaPqgidCLRg6yvaXXKpPEeLZXV94F2rwdPNSNaiCBEhv3kGDCoV9UHdeixHKpYTw8uNx8BpgdcVokF1MoYcgh",
  "key26": "4jkenGmGadzPp5dpDL5NNw8zDACcsQDAaMqQ3j7nEfXZKsTcRUDVjjewSyqKVexNobJ738DJhRCCBuUfxZzPcKL",
  "key27": "5SFf7Wh2HrwU9wWyPfthpxMMLL2jZfQ3SDNNtj5v4HeQETmYferB9EvF8i5dWbA9waYSbH7jkQBqtNXQisuqEAAw",
  "key28": "2TpYQ3iYqvcGyKFwG69QMYZjxQH4kxqnsKt6iRpKrbnSCxnzLnQ8uCCag6L8BPGJ3NWA7eSf7wc68WRkzMCL4DNc",
  "key29": "2sxNrbRTGFa1PcHWKdTpNXcQheh2f8UruH1Ya94KCxznThZ4GEoUoQCrp3cuEKVH9XZBrQFJyq1JPUxrwymeuTiP",
  "key30": "5EZGsVcjTChN1qDEJCdXEnnvYhRe9tehNkGxu9psfFq1gELvBmeE9z3E3sptDkgF3vxnDQDpwCAB6dPXGKCUZjWV",
  "key31": "61y2u3YKaFJMqrE6yLR3eewj78z3ALqd19aMZqH2z1CkJGn1qR3dy4D7QxeYpEi9jd5CA7xnZnzEuLgrLXRU63W4",
  "key32": "52cMFDgAYZKxuhd1dAJ4BRhbP9Z5vUQE5Xhrj2UTYACU4CFNPN93yQjjTWDoUZQqdtEB5jgvgNByBptVGUckoDhD",
  "key33": "3JwJ97c9Amv4T3dkzRD9DCEWH7DmX7ZkbSXzNqcft8k29UHEpKcSp3utvL9BKas6dov1p6PApa1zcsSxgjn3FcU9",
  "key34": "o16njUUFqcvtV6wq7KmbzpZKuFiR4wNjk41uLesGdVKjwqB6BMsxKDAdkC6sKB5rqYAznbRYoE5cuCEJH7oHjUE",
  "key35": "iqBdBznaZ9nCq8xWtxGH3PRZwEzTrYshZ4SvkEZmqYwgKBpY2bFaxgRmxX89U8cZoGCdA77XUpRryDajrRfsfE2",
  "key36": "3TW7MmPw9DHmstoMvtx9fn2DpdtEsZj1Mry4rMxJJBTtn32wNxMr4T1sPfMKrs65ykdEFxRA3Mk1qNNZwRv3vnCR",
  "key37": "3rrnSW9YiMBm746PLXhUdBkMayQYy8ZtmTYZJVYJmob9X4im5ZHi1t9YFebcCir3WVejMXjLkhcnnuHrcA2SGZS5",
  "key38": "3nCL6ZtWuFHXC4BQ6mUFa4kQAf9X33BYSCEKjxcCjzYqkJ7Jy937PYVq3Qk6DmAnLhw1dsN428GijH6foVBzS9Ds",
  "key39": "5uFhhd7oSM9Ax1eaUweKovYvyFQagmYm62fDjQMTTYMGh4ZiVrv2s2uTihVntGDy8uqYQ3dWfvNmNPQ5kKcFfmkr",
  "key40": "5zyyjyBouMoSd3BNyVtVJxoquz7GZYsC8D8noLsUncbSS4ZFrtNweXSwUNcvP3ipCKHD5pc53hwWhyGX7UzGMLRK",
  "key41": "67TxU72YBXiSoMQ6MCpP33ySRrAD6ZwvEDVaHP2fzTJmD2ATZ5f4NHjTBXjbB332oaCLsDuQoSuNAxfhXhzuoJxq",
  "key42": "4NEAs67UZE8CD3ekqkvUe1kt84khgy3XjeUYPkXytHyL4jx2sciKvVx8miryZUtz1R3yTFaiAzk8ZSUk7MQPFanP"
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
