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
    "4RngyherA27UWVEisMiQwNF5Ftf6geSvGhzQpozjF1onK3iw776sE6qaxuhdW376XMvLDLc7Z6TQG227R4Egne1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cW6B4TV8yArAg3LXffQfbpN3uD2BJS4RR35h3Pk1RsdXM86gaLNKT3RmdmvvWZjModAMsc3HRiwcGmLczLxdABQ",
  "key1": "32sW4yMn18C2XvjnEk1YtqGQug3mAaSN2skFE8FcrYSW21aoVkyG7g4pxrz74f6WTSLsDGDERQ6FRvmgzLTaeeMK",
  "key2": "WmBfUe18TygE6iZgkQsEuwySonD1RNXzyHJrKGLwBkGo5iUz2gcN4WPYCG5QVazzmPJktT8YTqezTHSz3iyXDwT",
  "key3": "4axCuNB2stArfj2DwM1xD6hx7BnrB5YKXV7NuCWxjJiJoGA1uYVKnptix918FUn2JP7iR62HXb9nANDPZJT8mukS",
  "key4": "5BBPV3dJK6TqV1tfYQDtwUmXEzQzDUqaDo2FZ46ukMbUEYU2FTsaRPSLXq6XmTqednkvd5wHVtf6s2MvEpv5Arys",
  "key5": "5bFgp4cTuEfq7UgjjZCZ9gBxaLfPowcvby8cyjVLHVJ2fPKnm1byPpf2N6uXMc7RJFcaYcmZitKMKhYFXg219pmn",
  "key6": "29eG55LcNFshBkjJPqGwzwYYrVkV4Z6ddrua94MZRicmh9RvKqD5Ubzb5qMPE8YEaHu1XsYb5jgzCxNSWorUcXnn",
  "key7": "KgLhCcK2D8aCBBu76hVu9gxDjwi4WZWvQnkBowtzzqtE6oc96e4a3j96wb2ufq8EymGHo1wwHwxiiUg8dFBSQTd",
  "key8": "icc4MiMoNoygLbmAS9SBLzM8SBau837eukzhGJAXzzZxnqB7BcvTE6tNuMUuHNkVC3cPDd2Ewdc24p4q9miihmV",
  "key9": "4htZXHuW4NZwFymrYvnqjnqRFomMgUuZBvrt1pFsm4BDbf1YJpRzABZf2D3G4zdgoEL1vqyec4uBWyHnb22wrN2r",
  "key10": "sLgpDRxw3va2oXEnjF3HeiL9YTTRHGnfR3HbEvsDkBvfDxfXKCwS4kT5YJ8zTUMwKASdQYZTH1rpbvdx2eWWBZK",
  "key11": "3YdzMxc7mSjDBgZsPj4P8atT2SedwUoREW4aWVy4ucnJ3P7dMBXXkAF91xBgZWxXFm6acM6wXuWvsX1jofnrFtpS",
  "key12": "58n56KbovZt3CMEe62nv1jiZrrtqwJ1NUugUMVE5owJPK52Mkeh6hV58LYttVPf7TSCB6LQocQzD7FqCq6tTEAKn",
  "key13": "44K3TzyrpHJ1z4MPgbyCBWDSRCkWjwVuQUVjPJtQ2RRB6RZjXzfyX18ohCQcs4jySJ2FCdfUeye3dq8PVMjFgM5z",
  "key14": "4Yxt24Wn1nzgaFufvTUnQB8YNJmEs9wFZsZWxS1e9YhqqeRmMW9A823DMmhYzxARxMZyLF4DCNfR8e5XYHqX1pKy",
  "key15": "2p6EPKqVcSj6Fv3VJFtrKbifYaxx9fY4od1vvvfdTJ7Cpr66gGZLVgxkhA7qDcndzAfrjkJo8DCL1UYbrwwuryVT",
  "key16": "4sYsg5NawL32c34qFXrnVcqbTzp4ycJ4QqRhM7g6Hde78s8ErfV5FFgqD3dD1fZh65sz4Xgse9DWCkxzf5Ce3uEd",
  "key17": "ZPQiqTQ7GBfo7SCAGapTjvx1iHB3Dy5fUeJTvJjRysBPDuYJ1Mwdzr9SAThRur8W4c72cBFGJ654G8eDbYtAmrG",
  "key18": "2AX5ooMNYttHh7SGRmyxrs4G6m8LNhZazQPJhP6bJ8XjAhKvRDwieea7xUV6zHQZsKXYUPKH9JSCf4g7fsjR6T57",
  "key19": "665Mye25Bk4CADWep1jCAkxAEd2R9sWqdUKTPzzJCvwNbnVgQX8XWdch6SD9YTaYJZySJi6J3B8hPTqyawWMaHLq",
  "key20": "4S4z9mfi4WH3RBqh1FL6j23wwwEqthr7BS6TNsrsP4FPTza2bTGBMc2qf9jbGjKniBbY13zydreanAi9UYNNr22C",
  "key21": "5Vt4MSPQAAW27RMqK8nuyB7TjT1sjV6hN69pEBedvgVrE1bQuQNKQP3HXDq9w2axSNhv9zSWGGhgf1yBVJVRQd9q",
  "key22": "2GYR68ED2SvMeUXFZB7DpiyU4J1ErorFWiimfw9D5kCdBsrEpiZAveKPj7KJagbt1MxZ3AesZRTYpaSRzYhj7Y96",
  "key23": "4P7hQHKuigUpnGQgWpn2DxCx7crk9Ua6DSB518BHHXSGY5TzAAiVALt748USukSgLW1a533RhBDQY8gqFqDJMBWB",
  "key24": "r7A8a4yT4JDfQgjTBVDZrsWfmz73F1yzM1hmu8qRQKrL3vkf8ZhyM5GJyFe5cmW65i1Bf2LYhytMLNK8Yuv94G4",
  "key25": "MNgpsbxoR58qpa4HvjmGRoT4GcZTyLyt7H8n79gJjGTfVqKa8SX2yrjyTXANDAVoiZ2G3Y6i9JcjJZYdKeektZP",
  "key26": "3VtYwWZc5AjX34cVMExfVUaSnYPy5mmPzkSDGd9JTe4TMq5ccTd3vkUgtxNP8f1VSbbk3WV3xVYcFCPrPsWCGZA",
  "key27": "2TxGAfBKE4PHzAvBH4abfjcQpPqGNGKXiLmLn5PkyBorNwRC63pfmBWjAa8ipXCqYttBtozofKaxhtxVXrrvt2LW",
  "key28": "CRjx8HYezzSub6EGLbG5yrS3cqeiW7K4EcTsTogYLUGghtoc5W4zzB9QRYKXg4d8xBrTQBdy6kmjhyAhNoynPUi",
  "key29": "586SUvcPHdK8hzjc1b9CT4293pmrYTXUDqDv4NQHrwRfpj9BmwbzU79Qf4q9TyNCyyvjcg9DM9duNm3X9NuM2KJD",
  "key30": "JRzikRDyhuTYGoMSVRUQGJSPJvgEMyzZc6CPkuo9W2JiF1HzkMnkqtGBVfaBK66krTj4Se81RStGDXPunPXtcwR",
  "key31": "emereErRmWTBW9NxhoCnsHedV97t7hw2YmwnXtsbZ3f1WokHb1rrqPdwy8nhU7xKiVErdwwKmEChXiKsHD2H5Xa",
  "key32": "46mPjrkzT4qtHWkFfL49xGQjxgMUxcPhMVxk76Nj4QnQtgbUwjuKwAosoXHxZgWdrmDzcQjGDT6Fh9BtuWpRzwmG",
  "key33": "3mxevcEQx26hmovMsXtNQ4B8TtWopfef8Pi1zJA2msPLSswRNzTS3sEEZbcCnN6ogA7EsFdpHV76fDgTemzTgcq2",
  "key34": "3xSoVZdtvtwR7aP7swanSYWrnQKzyrK3b1LYp33iH26a9ypb5AxdyrezNZjvWW7AGgkBF8gBesuoX43u2Wv61JPn",
  "key35": "EKUeY9zVukWageoAbJ3vC4RnYE6hZRPufbTb5tWoAhenFhojt7t5Rt6Ui2WwUZMGFNsZUhST6WhZNd2Li9YAXcV",
  "key36": "2zG2oM63TakynydibBbfnp6bd3PRRcE7zxof4USRsMnoZ1Xi39qXHqvRoT5YLUV9wBjvRksZQsNZySt8txCF2QjS",
  "key37": "4Tjbg6fs7EmHSdWSU8cLpWmpwRsBYMhXRJJLVLnkC9GoFqJRQhDwJvm2j3CtrYVTFBKRLRraz6SpVw8jH7fLo1d8",
  "key38": "5ehH2D743HL5ZyRdeoN9xu284qh85wtc4H4mJE8VZ7Z1tAdtdpMmMY6nFUMjQMnCPt7sJ5netdUTBgdRvBS38i3y",
  "key39": "5Ld1UBf5Q7oK6caoR8XZ9nSbvELRRr6vMDpFa6A9jQUMcQ8MksLawpYs72K66C6u6yBAaFguCKZWGPiEj68HhagH",
  "key40": "3tYPevNUaUsJAJzqQiQ3kZWLwCDnHgAmd3FVrG9NvGY5up2HDm5pVCAgP69zym2e9SEQLoaTD9Uw2TJHTrtpKx22",
  "key41": "vLT2rePGpgW1Z8Haey2sMWkWJ5UPyKQwjJh45B5W7hdLUFBCxMHTkVXXRw9mK8pA9NRMrFqTLTHZw9oyC8Z4Ujj",
  "key42": "2hQnKwQGV8vUvyGErvGLLtAvKN3KjUNfSUXAgeQVy6Yn86LomkwvDyWkmhfHMePc5FRFVyXaioNfsjA6CHBSLo37"
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
