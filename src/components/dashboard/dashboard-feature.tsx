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
    "58N1nm7cERLTfd3DocGFvddAUgzmkPnE6rBHLN6FaQb885wuJbP9QzcQFfMzQY1m3ikbXHb9BrkRvY9gnMnrvYc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HuXDsaVK5V7UuzazirjCJtUE71pm6QwJUt1f3QmopwWTWhovvMw6P9UanVs2gxfiDng7wriCbLRRzf66WDpR7UW",
  "key1": "65ueriJuwwAM8YbKXVsoA3KiUAqpwdJ2bT4ES6qRu7etA9oJx8HmQm8Cq9N5h2VhPNBFHUswgmfCXaqFPsHGS9YQ",
  "key2": "31ax8oDWJCEHQGyLfkcDy9bqrdQrGL3aeg7UNN9DwvUvTd9Sdjwm5Mv9E9SZAvrNZqPBC7adgCztfcyYeC92F15J",
  "key3": "3PgzxgNaPfMAE1vv7PRattb2QdDAGiAUR1ty1byLVPSCUdKFGLE9yEkBsmbcn1SHfxQ2JQSjNBcXxQzxF4yP5Nyp",
  "key4": "4s2W7eHEuAo3AiGc3tidYqRQdMpXxQ8D2ZtpKMpVhagjdiv3hJ5hGFifZmzHNbBuKctCUfhLQo4nYdmquDbAUWE7",
  "key5": "5aRmXKtRPRMGyLhfFJ1ju3ujMxnR8G3ivWskhuL9nf1j6LiPepmUh2esJpZ7fT45Qa2RJ6QwhpVUXNWTajSg1VJy",
  "key6": "4xMNNEtCggb6gCqrAKUg2d4CwBJ1mDoCyYxTKdYn31tZFBy2tA5dT8V6twZYiYvcmnvLYUzU7c5yob7X4duhRCTS",
  "key7": "4MRfn3d8VV6hzHBtDkowBDsDT19cZLwNQcQcBRyASvKiVVpt79jhcW7egr11xSo5rvVo2GJhTR1GFg1iwvFAGc6p",
  "key8": "5fHytmRSxPfypvqGp3dLmfGNNKqRxnLpbWrgTYw2WzK2opVkffkBhNk1SjRXEEaTqr9rqbxZ7Qrf65PQb8aJuLNF",
  "key9": "5BHmtVfTFsZn5tpNGj5QT2JY85Spcb34paPwYPx5ZmH8mRzhDxR1Fdz63JeEfmqKW9E4LV1FbDu1J6otmmqDJvSn",
  "key10": "4FFhPDnkzK85Xd8ArEeJUpU9RAZRjawvJYBM8bJC4oWetuB4nELHMQjwxTLYq75xiCUaoqgChxWk7by4orqYZsMR",
  "key11": "2TAmSamSik9g8SJUBpdmHxjTCvVVzsAAk4R97dV4uuPTW33HvruqV3Gi5CQay6otQSkTcFLw8yoCxrMNcqP8riDE",
  "key12": "5UFhhscYdcTmD1wT5SPrJzNChBVsyuKJ2wCPphGu44iYkhnoNHnDtAT8ufG8TRPMbyTu1UCtf6YjnSLrLc4Du5yy",
  "key13": "38efChXstgKVXyv11GMbRJ3mtdoevq8eUcutcsDE62gCp5SEwMbMXuUrMCNdJPZJHEBMUH7muSwPAZpkQd3QLbJc",
  "key14": "22BKAm2bzFG68YTBDJ1iHYouL75rYmuumB2qnxLrmQsq6a7kbLYyVD621spuW7kNiDvNJReNdLa78hHViTZgq2Kd",
  "key15": "4p5gV4wpiQH4JjY4GL2H4oEEmYQsHHV9qVQns3gs2fPavcCsRRcA4GBkKee5T5W9PzK5gcx8K4GkPjqgYBgPoPZH",
  "key16": "5Y2HKLGNmPrFsHb72rbQokmQ5LX4wL64yQ79yB34WKF13KPV47S44D1Uy4aRfTjsB9F4ohSG7bp28g5gZTQ65eVM",
  "key17": "UXNdvX3E7Y55MQmkXZsNkfDua4rpmFkfVmFSyUiyDCbYpydEP3A8MYDhu9j78TfMxNqLV77yU6iu4QXnQzhLJnE",
  "key18": "3H5y4P94hwJaKU3dipqemerhevwf941V36kTFtYcWo8MopWxHfhpnUjAmR94rFAZS2DDwmXuS6RJEDtGVPejZ8b2",
  "key19": "3yuh4CFf8vv2MsTL1Lo9gdABU2t9bwbiJ4apPV95YPP7pUHcz6B4ZQys2uyD6Wo2UDwoJWTLCGCiVsqH4TMgXNYH",
  "key20": "2JaHpLoDCN4zF8yAqG8sHhTjELc1487MjD1mfDzk1rjUfMLVynsdAR9rFHj8pQjJWRawDuSmAy1T4vK54AnvcDq9",
  "key21": "7bJokqPjurpiApRNdtq55Pvnv8yJHqige4Gg3SuRcBZTNKX84fjBPEt6YeRBasxNLJwSRzD2zdjb8bd7VZSLsEQ",
  "key22": "2DU5H5kXG3QqwPi7XEK5ce4HocCtHcxWrs674Ae9Gb6qBvZy1ziek5hE8RmhgruuTMDmb4q2uXQbyABiMe5Zjmmj",
  "key23": "4ukGQsgGNB5b4bEz4MKAitJKddJKr8x98URVSrF8TrSrUZLPHQ2ZuaeEhwJSpaEbeNyu3E7ucrA6Q99CAy2T96vE",
  "key24": "2ngkN8PRf6Hw8NQQfsAftBS79TdxT7VgUAwnZC1ETwZv8PZsQJUedgLXLpz4TogmM4GidWstCo4cjgUMUhZNue6g",
  "key25": "2edxFnggyvpockvzqGNWM23ZeQdQTxULZ9zDh4KC5ef9jVrSCKXHk8e5E26KCyBrgUNLpKDAJkxyjovqh2mTR8va",
  "key26": "4VWjpP7ydpZEY5cLJ7mN8zqY14UyqbUDaFpQZKdioHncG2Ek6DiVtSL5tkeLLFzndAUbM296wGJwNpV6JU2YCSEt",
  "key27": "2kJJzd3J6nbgY2FSkMxoRVZufa2jjwFd36LFTTYWp2UNY85hZAgvxsjWSFAo2AdgXSt7UWGqEU1zS3Guk2Pdyepn",
  "key28": "5NXqRdUohPNBoCuGBgfkZx45TN4EkCXEV1qR12H2Pcxb3VNWiiCcrY2K7vfioFJmaBZLPi6bhhuD61EKUq5brn8J",
  "key29": "3KMVbFY9FocxgBdGRkKpnuJGuAWUodYtUZrmBx7PeiTBwgB33Ljbfabuo3S6dsNuJ3vXALdnsgYYaXEtZXxdByeb",
  "key30": "2vZQhWuFNAg1cJ9JdYczXntPMqL6dVa5a98iLa1XC4tdN8Q3Gjb36qWu2MRCE7egYetZWM46AKQLxCUzL7STwG8S",
  "key31": "4EqK5qU7EoSYZcHkxGP2XGJ2pdKYw5mBEX14ZHTx5DEp5TVXoiPrKHbNb7fV9gxTY5YdTVAnYPd9BN6onpChZiNJ",
  "key32": "4K2BWcebRa3HeL85mD2CbuWvnt43EmfbqCUUYQVF3FghQq6QoGkaJBwDvZWagRHQEmvQ1Pm6Y7WaczB3UvVzz5iV",
  "key33": "3KUbZ8SYsjvcvfLzpWsucHnmRFwGoEZhGhXXZQiKEXhbZLYDHJxcEcVGRsFWSK4VVUr1nXacykCwdiQ3Zmtyquu7",
  "key34": "4R1MtBnsD71ymEufT5WQJp1fZMvQmHqC1KYKso4f5ZfncZ6dxjwxSdWs6sbu5PGduBfDBX7dz6ffNFi7spQrZJki",
  "key35": "kcKJAcwRoKFuM8S6bdyXXSRGqhV9iGjXeA66gZWTjPWm8JMzAsiGzoLr4dn6SbmzkY8sqCrrFAJZpAgv7Z8zZhd",
  "key36": "PDyDqTAY8U4C5P8mSbgj8SPVcXbqsZP24czTsaBuFvCHPnKi6Y46K2z4m6UiBaVjfNwYCGJkcGR7JyzMgiAeZn5",
  "key37": "3JDtDPRdww5deSLtJAKHeFdjwoiHpFQTSjuoUsi2xvVRVh4afJNdeZuykP54SYDQo6cmYbzz2xbKXFBatVS3tWco",
  "key38": "pvJF9ykHtAELd6ppGrbF9Y5kjBGx2d29NG6as4eHkXtvDrvdJUMMhuuWV4K4hV8gytw5Uvx6g9qvfuWW4yFsXXP"
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
