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
    "fP6bGTXaXpe1KBXWUZEupgjvYb1bFvnMSxTsF6VVC4QJBLZBjJReZ48wLYzpdXpwCKCBNYnJjPYLgwC77oDYenT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jTQvuVHqegsLKCFqpPFGZ6UGo1koKGj4PazDTJsy6AFi7vZE4yQQcUUNx8U2GgUQmXJZa3op9WUUFivAdMDaH8v",
  "key1": "4qGKsb2ASQreVgQeuSuFYLptQoEbV2sbAAeKCioBxr62gyKxEixhy1hQECgQZxisPsJZ2W6HTpCpqiYCZbJQPDZu",
  "key2": "4cjG1bW2EvXHu5U3L4RacKM5bZ3nnjKpyupWdPYkW16gWTEFXhfY3Zv1PHoxnppK74Ehaf4E1C8NeChw73ugBsha",
  "key3": "5AhNqzFtQWQt8jqFEviSUtRcckGC1TsfVkdyqQUbZyyYwUrzHTqoZYtwqHDepVwePqYB7kGmrrNJdKEu4YvPGYN9",
  "key4": "3mQ5j4urCjzwfoufswaN1A2VGbkx3K3ARhr6StZZZPtRrFQQbEc3t1pt8hMJq1QpjeYzboDaHnJBc4YsqWQaEzRJ",
  "key5": "4YPGk42iLcC3nujxwJvMsq2sfErCu1G3g4EsQrED8DdREQYrD7X4WZPwXQGdiFbsAfj2SP8ri5m2o6yFYuU7Qggg",
  "key6": "54y1ooZCAQjQmf6k3squ83k5UTTdVYorYbYZwQpuT3hV68Tcv99WtPqDe5TLZLVUdFFB258GKxQdn8FqanCPv2Kk",
  "key7": "2n83tXBJtSUdtgfsx5SwkfFxXGZWRsNv6qmFBPC6Cu7NBUuBqeWevmGWX8tbeEVCZfRLzvGFn9KbaqnyJUE8EVgL",
  "key8": "26n8ScGtA1fAY3mgaW9jdweesbENk6EYm2SNixjsWHtAkWwAiqWRhghK5J2uDDztU9W8pQuoqeNz4TPJgCZtgECp",
  "key9": "5zhU3yVn1Py3CtnkF5NWo6B6yAompfzXNKo4DjWNCwEPh63T41vBJWYDLgB25fCFZmEAZ2bswacbZjUgb6Lske6G",
  "key10": "5zcSRUSqj4gPcM9vr6mPePddan1Cs6dA37WgzC7mdvSXCsGKqJFXTyDxaaRRcrM5SVgbQSoFSmFvhrb3NTZuXRBn",
  "key11": "1ywe49Daozke8McTEtVXAnsTj6dPLhYANRgsCwYi5dQTPDZSxneAU8jSyPfa86e84NNvSNR1Xy8oKdVZC7DqKDf",
  "key12": "5miA4Pnqge3ggsYhPHxNeHgadXRhSYLZBW6qEaexFt9oig3M4i7g5kbYQj2cykVJYrWjfAUZcnvrhWVCjRGaLoEA",
  "key13": "3y3zs5U2iyM4B4fitcFD8AaKMn7q9jrZtnPzZxyPLJqcuJ66Z2tVCzGNdja2KExsgwkMdwqDYPrqNd726PE8ntEy",
  "key14": "mH6QuhbHQGpcPV6K6fuzr8FDvANyt7yNuNgSN1aAZFRN1o4TJrSEztv9RA5pwXFqQYCPnfoVu4KqbCriMpMAg9Y",
  "key15": "2KFbv5h72jebFdgEX6LqxZNKeCXufoRpPeafA1XcLB7Lp9PtjgVamiRbWTXNH9ZqL8Q69i15EKrXmpmNraBWJ8uy",
  "key16": "5gmuScGkR9FMozYfao6N2Hn6p5d4F1iXXc8iCybiWc43wVW19D8e3EeCd6zbuMrzEqBeVDoZP5cXfdWLE9iZ26kv",
  "key17": "2YzTcQKCugP4JVmmKJ6gFKiboN3z2bipzcNuiyn7udi8oYLyQKitfHf3Wq6jWFkTWitQrH8XppfFUAABKH8Gkdjv",
  "key18": "3RVcH41u99be2BqwHDp4akp1rc6DBwQjT5nW4gWRxE8EfvjnHEEQTdy44hVRfXu3wesZvQ8zZ5iXtMJoZMtxKq34",
  "key19": "ryGHUa62ZHW5f8Eg9ZLBRveHkC2KrcBkkBdRiEgKDtY8ntjsVuDQmqvvi9PNj4YPAdW7N8xx3mFCgzVGMkFLNTd",
  "key20": "2bMhUMZyVeG7enbcH1U4ZJY5FoAjzGeVGnZ2QE2W9T9MSM8oUPksYzwu1LmX5z5BuN5uhYFsAdAn8ux8xUS816eS",
  "key21": "5eTkoLyeaM2KWcnF4Lq2fUfTQJvGVp7Jp3wRChGkDdEzps1ecdizjZ292ro4pWs58EcK4YzZQN1wmhAW8xanz3J2",
  "key22": "5359L1UrDJfrnNnG84344AJ9MyRnHe75twawDwZ9h212JWUX5kJpfRgfBewHXVLUr1cThcczt7v51eEv2iSLBHJ6",
  "key23": "4bWxhQhCC9pj7jJBDKuEo4hcxPetnWWGrTsajsjVxJHr6m964fVs9794h4J21Py3MLqeuwz7myJtE7ya5Jd3WtnN",
  "key24": "aCAmiKraY58FPefznz5mtB7JmUkctEzePchrXTkipdXzRP7oQWrybwDeS85Ryp2hiED4sJTcKEuh9bwPYH2UuwM",
  "key25": "4ivTQC5pKf39boUYs2g2HpnX73T3kLcooUXAmSdAcU7SmRTBAtwZFRDjYRLqxPo2bBTDbtroXEmQBFAUXvFrQZhk",
  "key26": "5VgrFExwxMQ5aZCAXbMaUv9H3rPPaGKaYb3tewWMZMF6U8qtWBq1jPo8j4W8qhsPNf9XTLtFP3UgkikoGMW29jYV",
  "key27": "Ge8rmvryMxt2HqfcaoqS8PaeZgdmqH9CVMcMr1DgnAAKHJoBsCeFCeUwpvVuJWqqgcDsuNGdZBwmpyjdodJ8WfW",
  "key28": "526pxA87ycxNKJp6AhSsXnWF96qb7uER3kVNA1tRZb57UfwgZoubX22C2KhMnG8gfHBKqjCB5vaYgJEc3W7xSALs",
  "key29": "2kjsHyiutjFXXr4j4Hra83xqgZyLhtVyQULnAE1YaQDFbaBNBLt2pNR8EkXPhafPaYXLS43daXkQTHQrrwT5DJkR",
  "key30": "GaDBf8w5NjMiXbVDRf8doMVGo8AY7QUbphZQwuWL7dorXwVNLge9r8JTJNcjb5BcSdPke3uaKaZzPxgQiX6evC9",
  "key31": "5iV4zY7cYdqWYNjGrNbyGT5wwKztsDKt6TKwrnNPVD1N5gJfBGsFjtjeBHuyPed9DU6N3obJHJnv4kUG58rkXL6b",
  "key32": "escUD213L8e1LTtV5D4e42sUCdeymxAsuwVT4HGrZMbqskHeGAi27NFaGHSRMrsy4H9zavFG3rXhzmhX1eGLV1R",
  "key33": "3sJucBpNCQqX4GBuFBg8nUK7XzSZVsUxiSJxu44M8cww5iJ9EGCuRWbEXudgKPpfKKoquqWioD3fdRLcsAD9KFa",
  "key34": "4KNKSTT77VGiktCFLmbuUwSUEsV59PRwLPzU2pqBSPYKmQt58eoZBJcGHT5K6vdP6BVL8y3XthRoawzRbtoL1qsm",
  "key35": "4MKiYV2UQfqTwiTqqsMFaaMiosju5DAMMHAqfino9QLFV2XqpC3PYifsgGMXaAJQ6Zrm6s8vF6yJB3s5B72PJQZJ",
  "key36": "25mjbgoPvmQ9UK5SWMrbbWqW9p9kX1LFLTg7hxRNJw88jeAWozA9Vdm1ipaBJmfdHmWskuw9VuoeofU87rBTga55",
  "key37": "2g5sUt2mg7ZhZxhd4ajrhhtHvisxQdyx4yqjNovrSMnWjnMdj6aQMMZWvJZD3HwYJjM1y7iZRhYCKU6ERhZN7ska"
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
