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
    "2YTqKwnGmUKBrYNyXzwYHWtT2SiYwKtKvFSWSjYXh3pSBsmDH5NWrMeAheKTopfi7qkWbmqQqnVsmTBEbjuWoidc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AW2AfckSpwYR9oUxLaFNxbmTY8wr4TqBYR5fR52nEUA8ve2onzWqP78SFxDxJC1Tw1a9GAqidnaSXhcVgmrhd4w",
  "key1": "2vUineQ2mbbXR32mzYVTB6iYXQJpwS2ZTBpMiGkcEZTHu7LMrtuypHZLKDwE9rkNzCyRLoTgXJnaWxyicmT57Xd8",
  "key2": "3UD8SWLjofsE8WrJRi9HTP33HzMfEJuzC1sPshKgimHJH1EFTw9NWj7id4LddNNABEPzm1D8ymkCPCSavf8s281g",
  "key3": "4KEgfr3UdXo2HNFdQnPExMsJU9pjyziBNDGzWTb1Wk2rzR7kayLLQn8cfZjmbTuQEvTK6osLvoDMn4jYaND38JMs",
  "key4": "28a8mGk2SKoAkFLvHxakj4JwDN1ByLYxx82i4w5jbKEZDvaLoKQ2yPnvF5QL74V9QccvACWsgtySgXF7BxtYk12M",
  "key5": "93gXJbVQ4txm4Xn1GwQhHnULPqxnDtdHAfPdNeAN5dkFhB4WXTeRSWNDAEpDAbrEmS6UgRzKrPaiC93MxDjCGPc",
  "key6": "2hSMtnVtamnsqnXWSFLsAbxXg72TF4QJT3QBuJRYjzgPyjDLPePoyvtaPx3G8noAVh9biWTe41YuB4HYBqETmZ2o",
  "key7": "5t17AAQhLXXMsqqigygcH7zsyadMRABr7FoyKUSkFmLxFEwnVcU63FFwK6efBSu4KPZXrjnHB5h9EDo5XUtS3rPD",
  "key8": "2rX84LmCWSafJHAHeYoBnyBGD6SMpkVY6qU3AnvfgmY7fu4tGp9HxJ12LaiwicM9jg8JLPqYQDwgRexXj2t7HkzQ",
  "key9": "4uJiLTQd8DPUf5sH3sPHtiEphtkh7WFVTbbD4JdqL1xubbo6eRkFwVjDgD44NYLM1Yq9KC4rQcHvMpMaCqGqzXV3",
  "key10": "5tpB9bKgAPXpsPiYNBaQp7TJcFp2guueMy69nZ5r8gRnnTGDsiBfsSCHyfF8MJUXWhpcwEKeNNgxZG5zB214uFuP",
  "key11": "tD78Ba25QDaFq5CqiGrzzqNbYKd29QonRey9cwgQhDNmdRztenyMSv14yPigfho7KMmaXGZ7HUWS6ZbrQKd3keP",
  "key12": "BdyE74oHpUVgGk4a8nSftaQNtLNGs6soZvWWimff2YMthzArRefE5qAoGsT1L18sTqbLGpDoqjXEX2K8o5Bp3KL",
  "key13": "4Jk2QqU7VYuNATJ7UtBdZiHDDPdpTKC25pNbcCk9oC88mkk7Gn5eejPRT2CfvybPh8c7XjgfgeLcQ19WnL1ZQnBK",
  "key14": "3p33WjB6Bocak2eDSynWTfub8sP7ZYu6vPMuyVJRgGWwHDoLhwTzL5ohHJZ9LmffiMMpUrYaac2zFNRwz3vyoMKh",
  "key15": "5CBpnbbcxV6XHCAzstkpB4tfGxvf4T9yqPrEYN5Q11k6fEX8aAghqonwB9pEDQDrnS1oqnWe7FzB7q5Frbz2e7Ah",
  "key16": "4Cqd8SeZfLJ4S9sGPV24q31GkPTQLpipV4pv8ya12X68MJAPxqkTrCfBr8v9uLFgDAWKNGkPLS48q2ti43LAQbxf",
  "key17": "3p8JW2xvsGFMHwsiwhXhibxcbe4zdPfUH8kQuR6eTTurAZpE7yonEwkp9ipLfQTA7NsQUPKaw6HAY72qZSGig4Gn",
  "key18": "o2rQETQv9HEedcCyVhLnxnXR57emXs1bcXHddg7SF7YzAuED4Vw8aNDgqRrb3fQtyo9F8NWK17VqsxZdg6yijTN",
  "key19": "4nHoxnHn57a6m5rTriP86LH3ZJmjZ3LsKVQccGgkLLKJdYMH1eeTBitsdoayzv1Pq1pCif8kX7CwufTtF6Sw6QLB",
  "key20": "3HdvcEWF5j32VVozbtVAofAJDSbVN7ymV48G9ViGzSrvYcWmDPwXYD55M2E5ZvvV87sdL9XVL62DbrQtH5W5L4xR",
  "key21": "5C1KAmWnZagajNRrRYCSieyJcFTVhaMqAfWDsGX6wRahY6jKNQWYCiFNZccm1dZj5i1ynsMgv7zuEmwJWYZane7g",
  "key22": "4yRYGA3UwLCGcv9E7VQpvg9vutPicmRVmoY2q7hB5qzihUpZgh2uZaoqjFBqLwmenaJAL42pp7emeacbLz4hGEP",
  "key23": "5K3sgkGmyV34WQWzKycdJjzeRpXK1AiERXDwmrdEHUhLXDAxWyFUKZBt8mGDqMmzDGYQDiqGg8dRBDrN4mHtXBeR",
  "key24": "3yR7tusE3GvZHmvgD63fPHSBvCtb8c4ewQDHz4eZaxfRZvvVbScvw5DappE3y7BjLpJDp3oesDcMr6ym1uYWJnG7",
  "key25": "2kL52z56yuDcEaUWSwkVUUqeahmUBXQhfjGQ9nX3brTd6PvU2cuGXNy2MyGn7RwNDQZv2x4nnEpmWdSF1qDV1WqN",
  "key26": "5T9e71sG9kL9DLsty6S3LgWXZxE2d3WyGDf3cAN47jiAZSA4tN8aKvdL74SH5esUJaf8C7jnoPyMdAYeAD5AZMDx",
  "key27": "5N1Bc6c4HNkyBsFHpqaZXEwYwSdnHJZQ5ocB7H5c7DDGJr1gPuYqiSfbxyDLuLGXDuzT5S4Zy5TMWE8kccGTiakx",
  "key28": "52jHja2DjvoMVqeVvtQ9RLstLUZf6Z43A756EYFL21y2ZDb7KPLccdq3pYuSLAQuxgEfLWhBzxjFZRiDCtXehm9F",
  "key29": "4CLA9dNNbDMcXk98rm1yKQxM8KA2FMt1sSxu82nxDNxKQSadNVLatisg1Z1F7Z7acnoWMfHHD8QstvXCeHYenhNE",
  "key30": "5BxEw8TcuQ2zfefD61bfb9uu5uSDf8epVbvuRY18V6pxHKVkMsd3aXpraK1oYYKkuo7A4Pjn9yciUqDDs3QaQJWp",
  "key31": "4HtztqmUXhzcmAyJdRvdumL2V4ErqvqnasfXF8nmaks6cJXkN8wJYYkD7igfDUC7smiSV2169tumC25pUFeA7TwS",
  "key32": "2RtBNvaJitWwJBErqMqNHzFNncXThRfhyY8jZN6g6X95E7ivFgvWrwoy8wZ19oonbPGJQonbWwwYNjKp5MsGSCCc",
  "key33": "2N4QtBBYgRUGH5hTW5QUspvEZBnDiYR9LHbPzNM9rwA6h1bHXk16NHztJCYhFJBh5dYbmMrq3GJDDmeigguCYiwv",
  "key34": "X5xhPALoVB4XoTZPEhmh3TNhMsPxxiy5N19Up3UgXtTP7EisBNgspxZxWVZxaSeMcnovLAbv1RKaKM5NArdeZEU",
  "key35": "5bFKw2sp2PPk2kBKLagvdDZn3E1p3bzy8occHLbxKt3xF3cR2kxheDozL1Gb9wDspki4Ne1WK3VUsKYvA3D2L8oS",
  "key36": "27441wM6yeJG9hDU1oqhZqNfbR6TfVheyadcTw4nVhDvu1idzLYkAH4TfkDZLTZarxX1dXnKoXDCuUB87tM1hMoH",
  "key37": "3kPuux6CFxjUneAgMJ9EBm7dQWQpxB2U5V8Nu3UH5YtgPkVG4pAMD9ExomR2n6wGnU8GE7Ba7wWUiabkVWfx1gqi",
  "key38": "3cFmLTLxUa5PXtFZeTJxNDrbLgS5AedEuPNkBURXR4pSUWF9TewEYqJXCX79c2cnJpbyCBQRmjR6tRDZ5ztkwMSS",
  "key39": "meZKNbQJLEqCAt3fuhVyi2CzuxiVijPMm4zDJRvpugvgEDVF23cCp2SJEbB38cuGYFQJqtecf4BwUNkrt3tDvyD",
  "key40": "3mHtNFPCmxNkHNMirWB5ikFvEsauvtezgqsJhThCjJWn7FRuzRzhu1C8prMEe7nsYQtRVHNz1EP6T1twZhJCdvS5",
  "key41": "2mAG7hhoGmM3p8EKJti3PqoFbK3EHDFGEfjyyUia86TnhVSQoNPUrGXkfb6aGkQyxS8Prjk9VWPifpTV4q57txzL",
  "key42": "4A2FQpBndbgnWACZMEf7mjAE9NnRp9ihYinJFC22c4tTqfn28Graypeau79kM9mtt9oRiuE6xBkb9EGWX7H7VwxV"
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
