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
    "5uoBZgpFYsegNiwDmpYJnfmWcnGNJKEKsA79eWK8HAAmm6P1ui4JYFNnvbkETot6hs2oSeMu9WWaVGvx76AXLMMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "573ey1tVjwxefhwK7RPkebALftaAEbkMpyWp13aPuSEUh1aBTKg4hRygnGPGmrhHeM2ecmu5rj37kdtTc5QzWz6P",
  "key1": "3C7wVss57LJdxxn3WNV2K2Hqf3TGLwZDbmsDnjNMHRWEE1jGXsf6T6a3jpag6Kryte3kJWamJkKLo6tAHfDJWUur",
  "key2": "MSRtdUQ6wQiQhHkdG9MnJY8VaDsgj4H6u6qgebh52VZpQyU4z75cyvneePhXpst4r3StSV3Kf5E7WTh59zEcCxM",
  "key3": "547H4Ce873U21KgT56dnzFFFfSJPYAc4SNttcmHEUG4i1zv2WbrfGEpAa2qgcWNFJARV2W4tKe6zMgsnfHmybDTw",
  "key4": "3ovgCKuQQoTJUNrDjgAphF1H2e6jx4aAxK3S2A81FHbXJoz7CJpJE3BSf58fDBXG8M3yajbRYpJcXeoVXt9Zpsb3",
  "key5": "2HSv9ijmN6rfUYpzck8NAKi2BKuRefWUGv2LLMK1QQhaE9gxkBu1UvcbaWKAnKsAAQ7gHZevfePohCSFzdJLdN8s",
  "key6": "2HRfPk5oyca5nRPCzHhsYALP4WkKkADiPKevvjuGoESrb78kUrdKbJuWHhCMN9tZ88hcicWqZfsrQZkTB82jU2tY",
  "key7": "4BqJEpBhTWHNuak5K3HWUbqiu38wW4qzZ8Yi1QftqkvvWD1MqrNJEVy1hQGDP2Dpf8ewe4MMScJV2jVuDsym3CKx",
  "key8": "5pMnKB2uNANEcX1xJXSDVpAmf9rGytJgnqkSsFAFAocXEpikywQo2wvM34hvMeHJNJuUbLg1ZrFREHGHZFo4DVw9",
  "key9": "5xYNDNb9qFqj2Yx8TJLmZe5xMK8sNkS7j28MPKTLuGmvciWZBvMuYGGjXUyHK7BMVTbknSGcFVAyQSiUTPbJ3LQ7",
  "key10": "21e2ce11p2Rew4EucQd5ib2cYGkPrmLMeVWD6VcR4XedaxCnE2TiLaYfJX3eS2pGgQNrACxBRKmR2YiVnomxbsTM",
  "key11": "3peFgHg4FAbGFLxqg7UAf2jsQ9afj42tmMdU3bi9jCmNJDdZUEQDqz6mufTfwK5HVW737CSWGpb4FCdAHkHGgtin",
  "key12": "2zP213cd1ZgRmk67hFyAuFh9hby9FpRsSqecenFaVHRG4pacqGwMn48C8a3kYPs4jyYezejVLjuguuXaUCqw2KJb",
  "key13": "3J2UTAdAudAqyzCQg9GiaS5icsvcsrd3ACcGmEcPcFj5MADqmWNqJwDEFMUqkJhHnhGFKezcWz38XyyNVfaWzgbt",
  "key14": "kt7WYaFpZGY7ie6hdju3nFUGJkE4sZWJ2stgtWpTr1nE8thStm8XcoHhUrki2q26VrG61RsEru15Tfrj2YoZpiH",
  "key15": "561rny2bkd2fyPa57AFGsS6kbvNZgSuC53YWUbPdgTnPM5GVZ7dffU53C8LoqwYdastRyiQyVVZmu1b9LW9f1Lxe",
  "key16": "4i24z1DhrHFF6dVAoiFB6zLbnakmE3MYwNphEy1DjMFMgdjuv9zjjEXKHij5qBL1pJK64YV5kfBQcc3syccsknS6",
  "key17": "5h3nanUjpp3bkwHH55QWyvS2DRPewopmAyphh391YKEPKPY8swgG9nESTXpwXRKgfj1iwbxBWC2uc7u94d22ChkF",
  "key18": "2WjwDj4PqCtnj5q71XtHY7EASwn29aK7sNEs9BoKBqCQUdMFAZYddwb9BvHGK7FZVwdXEKGxBfbh4y5ZiGJrEuuJ",
  "key19": "EFq4bXKzRAuSaDXWxK3djwpRmgzAToyV1kt8URq3neiJrUaHxTJL9syGbpDLiKWoDE96hZV5kbVuG5FKoM1U6k7",
  "key20": "3RgsfM53axvHDKCrwydcrm7UTh9ohr7CzYDBZY1pVrSYVD5w3mJFso3cCksScdNwUogG2oy5MLAuCxL6g3tbXh9Z",
  "key21": "5oKBxYooCzWkCHXv8XZA2McqHrTfDkxfKR17ezBEVdAgzQd9sKZEUnTV6VgXp8QeEVasJeSw5BtPJQZpWN6RTARR",
  "key22": "5TJUTuHdRc11mpj8CXC2iYmwzwPZ9UwkCxjbw1LmU1fYvu25UxJr23ohWoM53tAjBG6CQ11iWGaJ8bo7jGohS6a",
  "key23": "44wYKfmPPw7uBDFju2ooePgEAasYDe6XGr8hHU7rduu3FjoA8EKqkvUvBcsP2K6AsBVneUS2CjtWHGHRxn9JbU1u",
  "key24": "3muiebtUdujMzhju47TShJCb397wTh8VxQ6SD2LzFZgPXt24YdyGQhS8vDeLWozysBFJDdXZEuesHC3h4cFSNkXT",
  "key25": "5WUsTEJgtJ89vvA9SqEBmDh5uKNgsSbS9JPpvVt2RQ2xf48iskdieCVqo1zNk8zTL2ZXKM5EKo74JX56371s9ssV",
  "key26": "3F9itGCLFHLwtFRcbBGSS6YF6A6mAKXuuYNtAMarRH8z3QosmZLcCUQvuRMe99Hka1CDm74JmNSjZvH5ZL7BDo9j",
  "key27": "91SpuJDsom97mpztHbQftrbTzZ3YoyuNbfE7ewFDuU41gZqBK3N9ycnmETmTVgjfk6L6tTvZqRUQnCCsxva7sRD",
  "key28": "59NMWWYyNhtxe7Es5wqSQRBMGbbkJ5mAxM2nBHpHvn7p1hC5eCuEgp65uGRYoFzZ7oTvX3JqEkEeU4FS3ov6Atek",
  "key29": "53skbbNxBJX3wLhwgbHVztGsoXu91uXsDpkGimcQzmqPgw9BwWUVafuCkKfFLha6wFGSXTiGkDZSbYAwFYKg54Yn",
  "key30": "vQtD6LV8iMZo7EpHmb56HWxPXhVLtVt3DMjtj6aM3qvgCRnWjVQESxqmrRHnuEt3zDi1xa7u5qqLAhhgMusAaaT",
  "key31": "5hTuPEYBoSa6wJbGBcXGghxquMQR3GuinXKJLtjJTr5jfNh9iREf7xeo9Lwezn1dfkoNWW3JJjoGBKi7i2xnF71k",
  "key32": "4ZvpyfoABd1pR2eBGSG2Wh9f8w1GgFkrWuFm4tLSA19fmvFAkud4toTrB2oGzRBXkjB5VvrFmZBNu5FPcVLEsn4Z",
  "key33": "QfjMcrqubQKe5cHgjE3LhfUDZfEP16LN16USfFLxyZkdMDQDBiQHmMZr5wh1VnjRjzXtZXUhraYtNEutEBiHtjv",
  "key34": "3hyVWmqmSAQQ9woHHgEmEhaCkttQX1ADmebLCm8hnok2zeSzvvWeett5gq1JSH9CTGZS7p9jdK2nRbw4VRFCPUEi",
  "key35": "5vuZ9YoV42rM29xXF88bF4ZiBPbavCeGn1ezUsRVvQ2ZvDUhfGF65fSV9QMbADibA9qjzWY7XEc8etbCtCrqkjRa",
  "key36": "3Bcg7FoRrThLVPpz7LAQw7qKXeWKf8JSjCYWActSZFDPhQzK1RU7KCx5zo5zgQ7wok6Zh7SeKwD7G6scmf4MXwty",
  "key37": "dFYiiaU5jZA8qvnyhgePBhJj4ygfPbSdLyxWT5VNVB5j9VDEf5bVWtinQcdV48dmke1VJEu959MBLjSy7gzNh3e",
  "key38": "5pe2n6VZ5XgkiVX7p9E3FQGfAQ99N9egLxx91X8VPG4TCrv5SaVFj9hmw27ZUsddEmZTA6vPLfMwCUCo4mTGQw3x",
  "key39": "a9EGDgrMmuGdkPBpSnpeD5ZqPa8Q6FSg1orX4zMFECE64TmFJvZqZ6DbZsJr3BqGYJA5JwNTj8RWfzAzPd1TD2B",
  "key40": "1zz9zg6kzQYgpPDBdKgzbjGE9pJbqaM1AiDUjkaaLPWZCYhZgRL3Yja9V9qKawVNfAKRZiUXR5wdaZjHRmDPUbg",
  "key41": "5juUeSi8jNzcGW7Y5UQvPXVrVFkSU34MkyZZtotTTEzoG1eLcw2C52CPb2PSKw7wXL93UN6uRXZTaKHeZGtGvABA",
  "key42": "wSQ8cJaAaKfBRcCXV7tqZPdKHeSNBHUHUnVKedUoYpyP5X7ayfjenX7cHdPkrDobDPV9u6Geq5uUCUSatd5CX3U",
  "key43": "4LNWTqDK2CYPEb1tgmzTKPCDEFCgfxrKa11qAcUomdEDjkFZ1GubNBt66FiGPK27D1QQPLAH6BgoDndbjz7E5UVv",
  "key44": "Ah4p8Lcr6jQRdG87rHqm523EZPpLS3n4Sj2EBCzt2K2EfGnHUfsgAuf86LhXzDM7LqaKL6MDs5vR3ucrybMSze4",
  "key45": "4J55U3PqfsMd8WfZJLTrZXkBMvZnrNssNBikyeRPgyJ1a5DBerJry93HkkzLNqFPgMxYDao8DjCgzFJtqBsMa31e",
  "key46": "2JsL69PDAcCHdmKESUp68WMyv7Vs8PdnCBshWTNeVgowwtxV41FmZzaX1xdgjEpjE6L6y6izxKSjbMjN7ohCEpyy",
  "key47": "3Vk65MhrzTT6UQXCn3XiyivbxMMAHPi5nLKnipi7RdJG6NdwCBpKF5R3qipGrRreFzBGup1RLr6F7RzeFkJzrY1R",
  "key48": "382CeVttZkujvE7g9cphDYtao8nNG7T2ekfW7nhie6vZC13PdLSK9VsXvgwpAiLYgSASVWZBgbCkNtH7QkgmXrTz",
  "key49": "551zhU2Mv4qtxksxrdb1wRHFLLT6PhX4nCNwPKeXUyHnsy4rmYJnocGf6Ni8GxmfW1j8xRyskCuc3x51MjmbNNmA"
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
