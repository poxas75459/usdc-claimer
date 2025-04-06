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
    "5DN8FfjcoQQKEFmnJAFxdZCTWisw9kHmWnEzGVsNUL8Jr3Cp4dQEMXXoDSWYqT9mYBn6o3cmoLbmnqHUez5UEPGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FDHYajncxi4JxyaZrTRQ5aPiK3g39mQniGBgaMXFkru15NaGx3zM5LFvoMJjcyhkMrwNKQvrTVtrtTHgAvGVDx6",
  "key1": "3DjDGtR3BLCsKxga9yGhVqmWnjpmYB39M7LgeGRkinij5DhYMBY6LCLM6MrgezgYJhCAPnZMcmMHGYeaUkCzGCkd",
  "key2": "21iYi9HcXnMgr8pKCP39MMdTKcJffQjqPJkfZzJwNyLwpUVeJfX57EL6mYJZ2DvBQXr5zSFEATKfe6pFWZbSK1CP",
  "key3": "5hBxBdtcuzMZGk2rBmEYVeHzJHkT2jAL99FcSdves8n5umy88yYK9MVA2gNfQavsJymAYC4zNqHmJK8sgjivAtVQ",
  "key4": "5Eod2pViF9CWsH9qmvci8py44mcHhCPa1Hvx5Xn5RGAmk4Dacb3hddm7ny3phBm27HGF4SzzgzMFJYcdit692Xse",
  "key5": "4UoKEDEz34SYtxJ4q1SUUFfhEfSZ8S8J9xQ1rxWaLK78AvD7NnHeJTLuf4B5SmNFkT8cR5viw9mfu5Z2V6yZpWzB",
  "key6": "3Z2fvc472u2QwPRc5rymcWFU3UEKk38d8kHCacWnjNZ8FwnTwVCHfETxgJ3BBHn5ho17vPwpRAG4tmuUz3pmQ4bT",
  "key7": "22qpH48FLrsHpK6dqKcyW2GpvoQT5WvpnHMX2ttXPXEoMB9H7ko2EG3PnSfnoH8sqpUqYJvJsEYQy8YGHjN1K75N",
  "key8": "2yyx8QKpUk9TNbqDcr4Wk9963V7R1XfD4oLYL7sUV28vmcXsk2jzAS1TidkMJDnrXV2rfcMgDPc3ad9mvYAu14WG",
  "key9": "44dYYuZAqpCuGMmeGyRbTkquH5T7VNt6r5tBq8yXjd2896xmUG7CWA7Gzf7HBfDXQwZ5FboKMS5vjGKTG6cMdg2n",
  "key10": "4TNgpa8H6dQkssPqcB5CAQyeyoAy3APDEDipVd3Vku82J17YDMDnwVxpaDehCjihp65WaFyDeZ3ceHDXiYYUbFTm",
  "key11": "5FcGCaGjQuYn2tfFH5yHY8V3a5pU9VUtWukuqfM57fpaCkVYjVCKwXLxr5ZAVnbVVpaiJACcDAzZ3JypVGZYUcb7",
  "key12": "3pqg5qdmvoZkqqUwdQEWjddsqZvfRSJXc38ft8VJjZV6kfuQsCYj5Uf9KHRGrxSdhXXpKww4LJiuaBVn4E7hPF7R",
  "key13": "57JrNCgJhTpAffgFHN18Y78PkTwp12BE96L9XKgAL9peBxczJghPk3iyhvhEjnz7dqgQZTZifgGXTjtvwrfEW4uw",
  "key14": "2nTxiHHNbb8oMicSMiADG3psJhbiurGpg1sgvfDvxmEDR42WbPKk7cdY6w6pZsceXvasu8pXruLTgfKT8NyD1NFR",
  "key15": "4RybVXZSPuryHw8N4v1PtvbXm82q6kjD8NMnEU99w99Umum8NnJ5aLDeiPKiveiz6miJmP4Gx9m7LCAqpGqVTqpE",
  "key16": "2P9Q2FDQZDFABTuPQeK9TvoDGktdaiZXNynS89524eYbgoqFqGLmV5j7bcZCH3j9Xb3y4pCMp65i3nEc7ViKN4qV",
  "key17": "FmKecG3i1AbbpESEz5Hr5X8WP9yS7on1ggNjYd12qmXFCQEvEN5UidFxAdCSPx447zBBruzx8k6QMx61foWCxCx",
  "key18": "3cGZcKVXdXmyPQBEbBws9r1zPf3nqcRTF365bYrrmvp8JquGvgsnZHnvfuMf1cVLQ94JRM5LZeevVykMxNzpfcC2",
  "key19": "5XNF8oz9ySLKdxTAkmXxWdhaa3KtNavg2ZWpMGadoWjoxvfcVEe4WajpFgRQzMHnsXLjq74RFFt2bdgtxg3HQGwb",
  "key20": "5YiZ9PUXiwpcimfW74Y4AjDDMzCVutdpQB663cVdohdFXbH3RRD4zuCradqDj6wsY4Bke99ms2pgWSCHgzR3qqoU",
  "key21": "mbVKgr9VKRbi1RTjNa7GrRjWdSsDvZchMkTvVpExBxsB3xxwpMpemXbxYyTCyTVfFRZqPVJKku4r2CbsSxrJ1W3",
  "key22": "2VVKjDQTdtWttSHkkdPUzkUh2vFiahoHCBYMy1Gmq25rifq81iKvEY7Nc8e6g3EgiDHxcpZfocRX8qyuQU61dGzq",
  "key23": "5oyTguoPKSzuNfb7NgzEzo36DQwiw9NXPZ7pwSZEByjDEVFacHCjE6RbL7kyoLH4Amv9VBknL81YSKNvWAUoQLXG",
  "key24": "46h8BPGFzgTgmEUrW5JBHeXjxNWwP32sGDrGxbzeTbyE8fdHyttSPjT6X1GjqCLvEZ8dKNJJYoR1bdtjqB1jnBn3",
  "key25": "2ftFnwdhSPuqxBdBU3MnoNkQjxwCD8Dvz2FUdFVJBCof98LFha4FJFzApMnsFZ1ymUMcU6AbXTebir2hZg2S45cU",
  "key26": "2eBamKbn1kn86AgWsXenx9FRpfeG7T33AeJytoncV2FyKXXq2VAyeWjZ3kLx9RnwP9hjbaTCMS42RKcUF3EkigVR",
  "key27": "67dGpM45qFhYCmNppcG58A5LsAFxX1kBiFh6Jcpc59V1yHLNBpTQnfZ5eeyfT4bEM2KVwmBmTx4AkotbDTowWyB5",
  "key28": "48CtqpdS8G76sonVC1mi5qTTgbA4pQJmnDDn4XWHnpQxJatSr1uj5YvzzXNaFxCvsiWQw6hGyno5T1SNnv4TmJnM",
  "key29": "cQ7Q3mubcx28rnskXSyUqSvjQMhGeNz3eSPbLWp7xo3ZtCLhyhQDTdQ8Vbw1jpzZPThLQymKw67VTp8ZF8sRLEQ",
  "key30": "EN3iLVpgDRvkmsGTQw2GkY2WuAQ7ym7iz9vQCC41dvYphGTukSKSQNPn9udMTtRQHLS2eTxTqxq9hCL2VfP7vZh",
  "key31": "5FvybC9a6pdenoMCqt9cfVVzT3cNacr8h4YzLVkiCQnuHobC1K8kEaK4o9fju1nmpXzXeViDgxFnWmTb5DEhgynr",
  "key32": "3XkYtvtyR4T8Sa7hg7aUeBga2YC8NCyYHnZkX7LS4phxyJLNCSBuq9LbCLok2Y3Au5WH7kHWVZn3i68yA4oQ41Y",
  "key33": "66A5R7UxgfrUsaLWnPekLimRrvAyK16F3D1qFeoR2fVLQNddAMDM2qpKRFTGoazYqdnn9DhS7WXe6e3iTtEqfoGq",
  "key34": "4exScDmAG8bCjFPHnv3HNmuqAb522yHMT3y4pS3xnGbnHqs9FAiCkh1ruSSwXgdGDagMtZUHHFnue6DYg5XrDsz7",
  "key35": "4QCKBd5LXDtoYE7rztwXNCHBDJFY9c5ckWbPTqDP4z82uD63utZGHshTkGihLDTXiU8Vm5Y6yTovxUj6cXpkSSzC",
  "key36": "5msaZcKCbx1PKLKqqXDJx8mFyvnmsQR24n7gYMSkPSHBY9chKrrRtcXGeRiepUJWyVyFThDEg8dgx3dj5N2Qo6Yb",
  "key37": "4zvvrJeJse3juyRL1d3gVgdFQUJZECApEa5FrrukJot4PUHXcohS5pwpFxGS3Def1qAqN8eZLAfVGRUA828z2PWE",
  "key38": "sZQYMF5W6c8w2MfNyqRxzWpiNuT1PRU4UiBvN58yDmYw1V4nXhqwxU2z6ruxtDXD9VTCYZi7KMvfzeKmxf7ay5m",
  "key39": "39b2SNdzpwmvxRnCQsfipfzLd9kqUTGN8s5kKyZa1jpvRoQYrbzXxw7ZQ7nww4bPP8CWSRP3NTpChFQxnPopPyQE"
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
