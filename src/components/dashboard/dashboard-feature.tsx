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
    "2ZK87wkx8zLAMFVXrQDAoNzDzQztK5VVTqH4h9vZyDYqpJtY3kKBKy92jBTb5Cd25qx7khfcDb2TBCKGX5U8UMMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26894K3PG7Mm2LwjifLsXnQXzjRLVgNXjAYjsjgqAwYzc63uJL2uwVtTwDVc3CyFKx3DVJNDnmrcJvm9r3JSEajA",
  "key1": "3qZKcDQHyfGXjpVj7oW2ifA4nogHRPvWPts7aFv9cAtHGHD8SqvcQLRSDESRvpmBx11mpfgx84KmCB9cVEeSrqmf",
  "key2": "43jWMPTFRk7AziQCQ5URXgKDekkdKHzDVWoCnpcmWmuaXf2es2nHTcNm9zJWSkobcMF9Gi4ck567B7TAJ4vM9QqP",
  "key3": "5HV4eEy9R4HRhyhXKsyLccKFpFGYG4L4Kn95BPqeBCDcWoSDzWqDJPfXXxfPEJHnGcdqPdAJyG3RXbCagK6HKUoK",
  "key4": "5KrWGnGcKnA7iPuZBgG4RFMEp4uMssFa9wCwK5TG5AKH9MyTjpuNfBGpHN6qMfPkYpj37V6csvSADvzU3BVWkbsX",
  "key5": "YAJsu1KLN8SwT2B5Pfat8HKhYgwBgeQjP6i9Ve67kCEzkHasEDq94dnZ1CZy9JUMrBhPCvxeAkUh5w4w3XpEimQ",
  "key6": "2FzZC9kyWP1C6tekAKC83g7m7vJWnqe5g33VkQDJpmD6FDKHuw7FVdMkp7hLFfXkiSLrm1Hg16r7w4m3r4zJ1jZw",
  "key7": "Bvg7GfCrnoKM5aiCtimtius5P9ENM9aXuixsfG2Dc87KU6muCkxfbRubSyWDisef6boUrWj4PuXSa7wPnap6bCY",
  "key8": "4zJAoXPPsKknHz1CV769bcjjh2fG94NFrgnbgkSkWns8d1KFvsgtHanPtW7P4N1z5r51aRPqiuxWXpD37VL35DEg",
  "key9": "5hPh7cBGZX7P232zi7q7Ce4S3PXR7hY9Nt9j3sf9FG1DYqWDGo3Zd64oZt4mxXtTCVUn9y6i2UbwsFrTGdLQMvg1",
  "key10": "2GumB631UTRehL8Xo1VBAnZsgp2t6y9FG25kDeDozurGq2kFDmtnoKhKyNiQQ4NAJiatAvX2udUBQXWqeTS2mtPX",
  "key11": "3dZ5B25ypBEDVtsCJQZTFY9Ag6YqFLkmFWMRy2ewTnZHAJFR2eCyR2gXnSbFa5dshAQVb1qSoBy415ruqZsLxP4P",
  "key12": "574du9vHD9Np7hPnBpszpeZuEawqeK1cAY7MLj6cLFTJ2tN7mt8dysVXXGrxaNoKW1TTBND1znPKT8h7g1nJE9it",
  "key13": "3Q6Um1yTXCGg3iuKfAyaWVw8DcS5A2NFmf21r5PVZXDqcUToMeVUd4QFFbVxzKLoudvzudNWEG8W4gM5Mmd41kz2",
  "key14": "3idpQqpDuE5p9iqpmuMYt3hvxBme8aRXQz3DvDWcTfqUUswkg2r5kEEM1gp7TWBxsqcV2iVRUSQCLjnG8fUFCxgY",
  "key15": "4JNz5Zx82riD5YT46gt4fZ4BAY3YetnXkyPRMNmzXcbpqCNjyezyNiPJBXSpRJHsnqk7giHPpABxQMszLrHaRX6o",
  "key16": "48QLkGxZzjEaFXv6QPP5HLhjcbiCFXMf3JdSFkYTWaX4uoNEuaaNGsTKxuthTfurL31o9g8SoXzSXxuSDSSrrkCF",
  "key17": "3KHniHiJz699XxHVJJsAiAAYxQfVgMWFX2Ff34iQntFBLAQn85szqMp2QJ5WgGRduhBTA44Ap4MvQEx7S6NXPLuf",
  "key18": "3FcxtJ6aVpPGJMenHqoRF8aTbb92fb1A18R5AefiwdsFvNfnw6Ar66JvGUYcSprHqGbpJRJAZKeWodUCMQRxEPzE",
  "key19": "237XSap7fmLQCUJeHQ9x9Wn9oF5PAK2TPnLid2TFxEq1rnmv7pvQ79ZSLMkrVWUGQ4t7zT4fNXvcLjr6M2m3YUNK",
  "key20": "4R3aMxSkuBvLywxE8hBs7x1Di1wSPJg6fVGCtEQKAsVz2f2is9m61bGc9EKVtMxKFtKCoE2jUhMYuj9YFap3v87",
  "key21": "3WQ5CFfiFwAJV8CkEwyS6pEmSYLwCH3Ducw37RCvAB2XNVuN3kf7SNT2q69TVp92ULWHgYNjaqFaB97By3wyLR6K",
  "key22": "5tjBMpc6zFaHvfJmboLPXd2zDVAs3NMyap7koNj3A6eaDhQRhPahJN1XuC6uchNG6nZW89sc8pN2yQvFdMfQaMzh",
  "key23": "46pQyjxTwNF9kyLJ8DwknvQfTMurnXzdosYa5AXrqt9P752tLmWjUPcr2HjEPGCYctpy6ooA9wJcRM5jR7AKQBmN",
  "key24": "2aEogQG7KUpj69ygFxvwdUVEwZ58FkVKu4vsmceGNyR5M67RBD4XY9uTZzefZXte5TSsUkeWeg9E46hxJH1V98Ri",
  "key25": "2KHViw9e4ct55S9jSsN3u3nCM6vMSktm7aienzLoyeqz6Yf1HthKKkGnjm1EYpZBEN4kcTvQVCq3fpfPwQr17eeL",
  "key26": "2yCwsnDxtqkMUMkjp5ww9CRzR5jkxuQnPSqRj7GW4i9g8DwuQNxwouAGJ56hNBQZSejXcfCTG3rFQjbf914mxkq8",
  "key27": "JmtV6jqMPPWCLUuDM8kgHxnMW69iaZDHDQtVCV59e4X9RMuYs919aBV5k3tRBicMauH7jqU5HbGbXtDxmHTA5AA",
  "key28": "4JLPQTqRteoYXG9AmyjKY8gSkKrUknyNewVYPhAZCbyfBWeQKWbDVPotQ3Lhwy45wRAT9f3gLZKbqgQg7pQm7aFa",
  "key29": "2JdHpCBJKcGEchRdegwSJFFfgPndaW8cTcBBkYtdNWyS5GqqjCRvGvxcj1uSyLM2bZ2jQbVy3PMfhuVhFFXfjiye",
  "key30": "5K6efzYWeCBng6B47ckjNmQNZiD8XjWoqqYgMqFu7nM6fHXBiyErk7NMe6NiQALU4o9xViZRFxteV1EUwENZsHbZ",
  "key31": "2KTh4EvfYXsJXfUgR7L2tfP1cKxz8SJf6zqcz9NxR4aXsk1A2XzGp8sfJNBKWwzUKhg9awp7ouXQr5KvkUkcZFgo",
  "key32": "2cmRxPU3vqYod91a1RNNdBDH89F3rpZxx94fM8KVK8YevQQXvLr1z97XEvdWt32PcyLiY4UJ6jkP19u1eZ73GMpC",
  "key33": "5NH1iB8k2ZwVuG3UPV3TwNUGS26dbxcQ2N7iFAwUBt7Zh9qusxMq9sApxFX6gvfactMHwWk63cfqV7k5tcV3K8Q4",
  "key34": "4mid4AT95vmURSosnLF5TwEJ1QrBTmmqMnWPi2VuMMLsfZdeP2d2wWQf6NAcTHidWEwpBrsXayvepvXsA8Y5XtqB",
  "key35": "5L5WQgwuKRC9WXVEpY3VdvpDhGH4dq4ie1LWZR9fXfKTGZ65wDu5aMUxgzXn243xMJbEnrq63CoHFCZdbhExW5Vw",
  "key36": "3EYmdsCKMKZHe5WQAbFQesT4cn9zjWegmMYCmxqYkc9YPQgdJyPmEjEZwv12U4xFeR9RCZ4mV2roczX7zfDrkeu8",
  "key37": "4yQahUuWtpszBsNiLG8ZPpH9thaHVDmuvoWkLRey8b92MB6w2Ujuuz86nZQZkR38Nkbyp6dvTVev37ba7N7KkUSt",
  "key38": "4VdcD4PPtQ7GbE1KpHU8UJyuz3tCRUq9kd5VGQUSpgLgKQeR2aX91E9Zhv7AgGHzd2hmpBMB9KnWeDEB5TQAUbsf",
  "key39": "Vyu13kLimTbkEvd6gSsL3NqugsBVTfhggSAD1JJYQtvJpyzwm1RjcSgrrdhAHUecGHePYR4KBpEbEcvVnuNZN5b",
  "key40": "4gjgFHsAFhft1vKLViGhMhHfCucVpUPYF41P4fHhFu4TtxJ7KWoQY6tGyaK9jTJY7c4e74j4KJcD647ga1bpYxrM"
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
