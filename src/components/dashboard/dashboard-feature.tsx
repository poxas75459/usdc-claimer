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
    "2ezxxbFie9hFEGUAj2sLv9nsrceLEsmj9QGbwt4ksGGruuZdYpBBXrjuf4s1hpXkeqhSYZRsmj3zXgQ1jnnSJeNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tC2XSgggLS24E3KfRBPnD6a3gjS938KJR3tGaGrpLZh6NK8o9QesQVmsLsu5JYDTkbSLswC1oVZZy1CT73NKX2j",
  "key1": "MKma7tSwX5QBKpBcujYgJsxiCkTw5fJsqfdaaUAEDniAQJk26zAvve7DkiB9X6xHpmdxsNzKM5sMjhHDfbNVGsc",
  "key2": "5BxDrsjaYnEnFDQt3yXE3t8NTDWsCx5UBAXe7briFj4txYJTqhR4Q2wegDrz2p9tsH2vvvhCvQLamhSk4jQkpjv9",
  "key3": "679qTCh18aHugHV2DF71CwE2VudGhzyXAmA6eu2opK4vZVaB5aG9xDj8oShGMngbSxdKrY2pPy6zFWXhMRgiyjUE",
  "key4": "63NK9nQdEVtGjKNhnnQD9nZCG1TUfVT9QCAWnaxPH4Qixc4CHqY85EGinrCQYmjPdsSZB9gfiENeU14BzLWFJZXF",
  "key5": "oRiPQeBZruZRhrbnUkeSZ3AM7WK9QmtyLx8oRppmdfwzQ42qn6jaCtHTytYxLUkCCnXiei1GXpyqi2KxF5HfFJa",
  "key6": "3Q2JmHMqf2DsroKbaZH1jBhcTxkJ1RRWek6XB8j8WcR3gnUB1xD5nri8XsjJiPFHWjnTG44BLarYj8A9MA76YMPC",
  "key7": "59oRfYymoEMrAqJwmc6cEyb756Y3x5kNBeduZKYWJtm334KZJEQM4nXiMtec8GwJpyYisrPT1CW2Yyxq9XtgU48B",
  "key8": "2mTnBMnsWWNsi6veR4V174Yhik4F42SSHzXmT3pvzM7BbeLhNt6nDeV8omwRf9J3HHQAyVXJujspdsqcWhiXKFkE",
  "key9": "2cMqMdsPNbxu99iMwoJUFo18H7QhXF9fmSAewJuvMFsTjFDeAnAizbrnQdERe1i3Q9GVbmhjS86TkdF1WvHMcMok",
  "key10": "2gbzPwkjUSq6DsnjgqnbrgA1g6wdZGBxSKdC1it9bwnMwvzuopLYM7hjPHG95xZxo7nReQYp9mZV5uyNt92znVZS",
  "key11": "Bu9XCBiyhRpyMs15JAD2uvsPuKykeBsQ6QDwEKKYhZkebRpwNePoJjR9rbLgTy2xpo3cDJa68EUwubyEENZBiZo",
  "key12": "fTD86JQBdTgUwd2EYbkLirf8eH3kBF5FgPDtJA79NF2hYg9WcmNwCvx87W8nTzatgtYPzMGC6REu5fmaciHt5Z2",
  "key13": "2Gq3YbDkU5vsEGnsiSjKdmcz6ica5SW8Ba98Q2pn2ep5tFoYU5k3X78y3bsePcdwAaHDFYshodjHZsQhrYkujRPp",
  "key14": "3zL4neZwmsGfgKQaYgQmrKn5i1bYNHb9zpiEm96TRQiaLtSYJ7dmc2mREKPgktBZH4kvMLTgnc1zAoYReKynSdDM",
  "key15": "3edJ3T4Pp3yimWPaEAK28PfouLT2WX8zbkpa3eNCggyWFeSZ8gxprdJRMUjAYietJkMntP1FyrRrJc4DEhyHPqrk",
  "key16": "3TY4ZTWL65F5vhjTQsCiVcdGuZ9Cai5YN1TfJyixm1oMfxVGTQXxjoTHeuQPjBb5qBk3wGYz9dopTuP7cWDayDJj",
  "key17": "4CYxon6uqmQN7WC6JCbQ6UiJqpq3hNnhhyJtPqQaEf8CeM9M2dSePbGHS3WTALdwXAZzXGPzcExDZNY3BaEdAuyx",
  "key18": "56ex5aFSRZhw3V1vso4or2PAmqUcthKdvcwtziDa7FVYJYVUfAbEjGLrEgjoNf1QXcLe95FD8PAqewQLXWfZUEWQ",
  "key19": "5G3ur3iWHdM2oZ6TXz8jtCfxuwaRNbCBT4CBV6XU4WWuTi815uDTd9K1QG5wE9m11GU4xYnWM9oH8EdWXYAnZs1F",
  "key20": "5tiuf9uerAhhiVCk1Lb5VpfLmrKPAA58HyBcCHhzVnmpu7hdFVoCcrJqT2fUodpmzSgJoTJmFGqXWdTZrchjiw7Y",
  "key21": "C3CSM7bR82BNEVeduNkvHWe7DmV7Tise1Qg7fMDXQNf2uZFhb1u9MQgPQyHzXagnN52h8nM7Z4Jqu5LNURCgyjn",
  "key22": "fAAeFxqmZ4pJkP3YSB6bj3kfq3EDVtREcd4VprMAY2zjJyaxguXXbMoce7TjjodWqTSUMCV9SScA1YfCijWvfSA",
  "key23": "4NfzNMKRtqDZxs7n8q8cp5q74bMznvbhCApoKULFquXN7E1nLtefb6KJrPKwmc1bJRu71Quu5pasYm7kptE4jNPq",
  "key24": "5o2JzSRA2qC4zRwr3e3dtfrff5moZibQk3s9Kmahe4KMrJ5TBZiUhgQLUKUc6mGKAmAASLHu8NDWoK54h8piS86",
  "key25": "4vwGC6GH4Zw618NAteug2sUZ4b2xmmYPpDwnmkwYY5rmBy5RrGjacSooVWGv7ywnquGb8aB8o1D6eGh2ssrrnt5V",
  "key26": "4CeSSAyEDjRq4otPMgkRgF4iaf7jBhkgj8iDkGx78fmbiF8vTup2RdRRM1AMP1UJkx824ThKhBkWgj7Ji4z9SX4K",
  "key27": "43KurnUx3BvBPaYaYCxW3Gdd7p3G68P1YXLY27njiE64t2DiHaHvUPVRZqAAKHy5uhvUGjXEoi6KG35QsPKbUrwv",
  "key28": "4zJFgY85R1nxJPfoSXZ4MiLiDhjWzG3ijySnF63tds3WtvhZzwrSyh16fBisDxt64RQS25iZUnvUvWi8xJKitof9",
  "key29": "zpMZbmM3F4BFgqVa9h7enEBNYGEnc4guGhnBHLHifRnPavkGRUpjVUJVEcSABUHUW3WdF3hCiGyYZkL4P1jDxdE",
  "key30": "4arfepNbr23YGxDmeXsLSQpTZPNfuxbtyhB1hvP5XbXRyVi7FhnTMmC2M2taq37ESMnPt64M75YF432TNBVRcKqr",
  "key31": "QkVH8L55tmSoCbUxmnLYTw2NpBXt64WqzihqWdAM7BmoyVc6sfJwFTZpjdoQk3PgRFkwXwuJJrCF2PDAadDtfYB",
  "key32": "57VTqYwb1tUrbuucCToLFcWpeEJsV6q2a25RqjA1aeuLmppCuAG1QmADZE9wZoCfk7b9TjChbLtHqxpUmuZGLJa8",
  "key33": "3E6Zrp92dvc7ZEjVNcU4hUFm33CWDETbeS5ZCMxWEZmJxR8YNkWKdak6m6Lg8FzZ27kiVR7jJSAAgAxaF13NwjDG",
  "key34": "5VLv1xrRPP4B8vG7yJorh8yEWh5NmBNw3i85D7UB7FEASR5Hpa66Sghp6L37a17pTfS4L1iEqHHtnAdq7RzUQmP2",
  "key35": "2PyyLP7MQZMYYwyvEGFsyYPXGs7UV9ciSz3KNREFp8417rZ9GEUKwuN71cpDv5C62mwZRFcPYMmzq7v5kyNa7Q4",
  "key36": "281ETMfyMK9rgcFFJi9Fv7uVjcYMs8VMqpNFstWwVqTTspjL1Be8dGYrE8jZ4xYiudXsR1Re6C2VVTDQdfFE1wy7",
  "key37": "5uLpvUsXwJ1uUizvcUGeQTDADGSRJ9jMEBjAamxqArdZ8nNDQXJGyXd4YmaV6C1hUMkJQWzy5cFQgDdAyGe43C1S"
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
