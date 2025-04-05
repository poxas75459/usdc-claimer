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
    "4AzZVTTQhp4L3G7KT3eNoJteSN4p7VoUNsXocrwDGUKuLi74xkVfNbdhwE1LpyZqJ2fgaytGccn8JGbMDV3azT24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38FEKA4M5nZ1pnskEYeSCvfNE71pBDqVBPc6xr9QwabQEAyQnz8ubc8MXPntwgSnw4RFRfKgbyFk6NJmiVLqaYAo",
  "key1": "4S3E4mnMTZbrriYbdfNR28QbKUuERjeWkncX5tVh4pa7MqyoALmW3udN4mnrYmPQ3hD7eF3JjbxBkRKuixG4DRLZ",
  "key2": "42sgPUonGDALT9YFoMDmAYbViLB4ZvZ8DXjg5ywU3rL4o17v7v3FD9sAN67tiMMpm7SdJRHVVrJyKN8hqCphddnS",
  "key3": "CD4XigZspVz8V3pgtSyjQgATNeGQgBQSbjK5JXKLXgnSstzgdNWrhRNwodNxFe1h2Ls1wic3LfBoZi2W9RVkcdx",
  "key4": "5MD9DWHqKom32G7RjeSkrakVCZn86Tca15cbMsPXbfK4XwwRSoCyy2ASv433vQkHFyFLnjeVSi2D5uSnirmCjmDY",
  "key5": "2BLGM93U85WFqbHctYT4DHM7LdCfK6gbqTwup4U2GW6nsnDrRnfmR8HP2e6oYZsmz9teVzYg6xQWvoKSx4utgZgf",
  "key6": "UfwrU76RRo57jQv64we6S7R96xXeosqqGZdevbcdXrWkF5sxKrsQWBi6rrxiD91mnFKovBrZHMh2rQzuwTdTEgd",
  "key7": "4pJmn3qLr5vh8pHggnY34nUSuZiojBQgpE7AHgCY9r3BHq1y1RVvv9QRgpVWuhxLD9YjiXRyd9FpUHTW6yQ1ZAbG",
  "key8": "5be2fZgnPGEnt4ng37Hp1BnUA2BVzfKZsMD3zKrcwkNB1tefszq8xhJnCgrTQs6Hwyh5ZF7AJDwkUoKu5usmedXM",
  "key9": "5L9WckXd87fRBvJq1CtBccWGHmnsy8mD1SBrepRPv3hpWNhQrvtweSBhqmkbkMzPPs1iYSf2Bvcjvxmea2DRSDY9",
  "key10": "5rBkU4hN4ZaRcYtMxxadziEvmxn6aLVW8Y6v8x8nBgiyD5AqwY84p7tbEELVUhDxbGYRSikqeSBAvMs9Djg1KYDW",
  "key11": "4EjuvJFf8d22HuFtyuNpUNjbGVdeqUyy5QDT4vtY1KfwB2hiMQAKJYR5Z4c6v6pCbTUJwA4baaFsnooRxgbMzKPw",
  "key12": "5M31gVZ3xKhCFaywUhDQssw3gqkbMXVVDrpj5yBV2TftxHUFYLv9qc4Vug6Q6cHSfXSmbwzPsR6mg7YUTr6a97yZ",
  "key13": "5QqR4e7ALoShfH2nCt6d2jsEcXonP8kCxrkwaHwUfqZXPbSBZ56vPLhDXrgasUobdLnXeg6VzcBPzS73TFxg3eEw",
  "key14": "diuLxMgnw2qp9hzR7fYQjLB8VJ6PC3GGUq2xw5kcHeyPM1wVPiY6zpbTNswo2wGFh7p5x8t9wzECUrePin2QVCu",
  "key15": "233qmcimREQTAAX2ooSf8NnTU4ZHzBhbPvxRteGy64mv8A2XtebUpPeFC1P4iyhPvKkveuwF7qwe5ktHbvwq64Ld",
  "key16": "2UY5oEDPYTvv99Bn9VZhXgbKDCFts9snAcwYejU8QzJcr1uNEBXdCRgwnKzbcQCDJRadYwS9vyHHkvuw1F5xL9LR",
  "key17": "3xJF9qEfYef4rikaPXNG2RLiZd5ZXFYvh2Ye22mSYNjUpz5CuTwTuYs5W7DCTVNX5XfP7AzTT493GJ6tQDkcnpgG",
  "key18": "5jYtD6MgoTKKkRbNLzYcgZm4v6KivV1sawUus25L3HEMYm6dBBGtCC4Qepn86PUoKqDfQoKUuqVsHnjasmkjmbar",
  "key19": "4pxUZt1pZBaVYJayLUrsN6Hn5KsFqUWTHVXRyBWGCJ2diLQtme247H5ZDjvK4BV6CYBKChXoj8t5QjDxKT3di1wV",
  "key20": "5nKvoo7iY4958LAgQAbR6FnFrd7TWnqfbdD8L56r6Q3yct9W1k7cL4EsMFLCpHHBpcZcJ4f6xsjzuP12MEVLhoLe",
  "key21": "5kDHpU983V9XQJn1T9m1Vrp3CSr3sD3j9D4iex8EDb1sy8xQFb9pdZbFDWfnou7mJy5G9J7pKyXp899pxRaBV1f1",
  "key22": "TFZEgCTMWWMDUQA8qh8poHrSa6ME8CdzsdTSzrMTtCWF7gYBUgZRYSChdik4HNHYhHa3KtpBKNqbrVgk4PoNL7y",
  "key23": "3rYNzfu8nmkrtpqfkDxELjVQoDekz94qMrcBKZhhAGvB3KG8u4SrCFZERMjjrGjodeYpPsn76tKGKMzq4miKdMt5",
  "key24": "48CDTnMEHQLPjvbbw2usbhQVa2rjdE5MEc4zsW6XHDWChvN1Y4488wLihjB88r6afgzgmNysbLJANXkWyAgVakeK",
  "key25": "5g7WTYCJw7QwL3b82ag5fWhnaL6RUe3FwEHkuXg12UEkRa79REH2X15u7URE7inPZdiU5qAo8vxdVvzWcYSbnMaV",
  "key26": "3mRb58hKRGz1urAPJirw5vJPRqZncwGGEaRKVpp2AwqTit6CqWTMp4QmbvBPx9kTgEHB5e4YYfbDikC8zjEesXVh",
  "key27": "vKczs5PW6XDWVwM2E93EMbyL9iAdt2Nt6Zhohy6m455fbPdMdyiQyzGvsVHWgEE3xrfvMBw3japmT3q9vmWna2Y",
  "key28": "3cCQsTew64gP8ARwMrdhwsRgLc5ieA17zY7KSCVfUdKtWDj16QuLp2PocFHDwPnV9zFoAHx1W8GSwhWimiK2eK6T",
  "key29": "4Nrtrm2hrbCa12eZuEbsnxicJ9AQ832gwHrwMuHd5XK51JtGqyZfoJNL5yFxnSAS2yDntz8qrFu7wJKjttEvuXay",
  "key30": "3e34FWHz6g87CvJuZZgJkZ1yDw4M5P5uC95yGhnhjLmLrqNNxvAMrHdnht6J4GAESFfQ2No96DkDMAg9W7xwh4h5",
  "key31": "3xt49sAHkzcrd68jgsiquUqgPqVheKUUW3FeK9ffgFXXaDUMc3LtqCtvS3bDr8KN8DVonuyZG1f36bk68zDWxzss",
  "key32": "29eMH4HegdtNCbmP9u261tTgrRb6oDPB39JaoveHQomGcFsQAW42HKYsohYpKkes91GZmUhr5DTt3WfPhyXbXP5b",
  "key33": "VhyTjqRqZWTDdJev6eq48xQcoh5YDd5MGzRj6F9aJCFzFXpxoSUwtaxLZgo1Cxw63srSbtpc9RCTcR79pa5BqQo",
  "key34": "3sFpHSn5jDTyRGg5E3u5MTh8jhmWe7BXQYQA8qFzrfd6ESKfaXzuAzKB55ikiATSv13waeCZiVhhkNQSSworQ5kM",
  "key35": "1zK6vnMJhxJPMxupkPpgsdt7L7hrevxik5Wc2JYkYCiWtk6ndjdPF8Vs7X2GZB2PtJFVPMtWUapxhHBPwRfkTi6",
  "key36": "FCUKyJk8SzsU9TtzrPrDXNDoM2bRwtKgXTpERCzDcu7D58ZnrTro9pPa4QHpzwiffBUW2RiN9F7eC5LoZJ58b4E",
  "key37": "4TPkvCUryjXMvdEcwkS5kDVhjt9SQrKpaDXbvKd1wbqGpPU3TnFLATFwvbSFQ8eZj7nyMbsG7WyiFfed1ph3C3d",
  "key38": "cGPoazcsgzNPCNubfAzWuhDzJzgeaLC4pz4fdRCBMZSiF2e3TxcHLi1CneVujrgmQe2Lmo4gtVgvyJrUFTdMLU9",
  "key39": "36tRvFtdp7z71aq6BHBCH9jhvRck8rufVRNa5Qw9fD92MtpVfVkUoDLGQPYhrCLUFch7GrNEhuoBqwrVVxndbrKA",
  "key40": "279fD37kVWPLPivApgjPPyLDCSwbmk5CTGTurKjfJQSgcKUrukXbtwk3zsgWYKGZBqJ4un5jZbFdpJGUCUGMBMUz",
  "key41": "2VT7gLZEggh2mDQXcdXf9k8ZedmebV4Bi7eFEkXDZnXzRLbzi5NHodk8heJyUDTjtNs2sJEb86DwU8UoeuQVKhJR",
  "key42": "3tMxiGtxt1zNsdtyEknR6vSzgB3k4Hm8TgqsydgDtGrN7qdBayzeHj3dyRR3oRJvAaWaT2hT9YbqqkxcCJKQc8qL",
  "key43": "3XDZy69N3ie7bqd3YJL5CU7ymg65whqWyFE5DuyNh2epAFCztpnSKMJT2nEjfB59EkAsuoeSLLMqoEaqSgsPfaHm",
  "key44": "fTkSudRtG8zt5R2kbnn4WmPL6TzsVtx59tc2KqCcRfUE2Jv4TAx56Sv3iRJuMFjFPetJpm5x7i6GvpKy5m217ng",
  "key45": "4oTKd5KZY6zmDaQriR7Ht8LivbWRXA9dgWpM8vNwNGHkcsnmA6hk7eFCU7fHgKtLyHkWYhmsWTookjvphXK72fTY"
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
