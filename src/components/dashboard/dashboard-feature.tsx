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
    "5FESe5A2raHgDEUufxyago9Pt48D3LDXswdBtJ9cT14wVMfKLh3zHtjQQbPua4RfQZbGPfZFQhVMKVp3h9w7RENN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3piFJsmjJywdiz6LHRzehMWSbq7swZxh6d5H9XcspS2hq4zGfFyVoAsHTjZiksD4dxrHoH9M1vhd8E8c9goxLkcZ",
  "key1": "3wtgfwtgkVC2xixHHNLK9Mn8gjawWsGsywZtxQuG8PKBAtyHcm4TYZFRkNNDQrThBvbuhQjaTuu8R9WvrY3An8Z1",
  "key2": "4wZd2hpaemVYd63LH12rBHYPVPXfXqVK3rjk7x3274KwxF52Z8UouSfKgciVhF8ciCvZpR9PwNWw4eEtY735CUtM",
  "key3": "Cq8WUqthXY9KgBoKb1x8bc4ksuKcmNP3PzYNDTqQtSUjoe4kKcjCuhCKsFEV7W364tT4K8QBGPjpE2UR3ohkNYH",
  "key4": "2BdQbBHfZgvESXpvNAQJKKs2CBwp4oQ2DKA2SevJPxR83oTBRmRVophmKdAQ4dq5ZJJPQ4gU5KopdtfzzoTxbeZh",
  "key5": "5Ap7rVADFJJtvaxPNnhz965DbAbKeKZUxGRSCJRsewdRdX1hMHSD8s7YUmmaFwnfz7ubZFDfzEPvipR5rqP2axdk",
  "key6": "Nj8eW1f4fTk9JSUDMdL3iZ71fFJTkU2T3PfvBSUUQ2ExMKTamXDm3uRj6dJVRL7Vbfiq9d6hrMwCVdWg2AauDbk",
  "key7": "5cAkTHkhRadMzx7VwvkRSiY1f3ecqixgCPuSfZTUBvKXtCkFtXZ3fHkKZcg6jv1UQNmBpFrucpf1wBNTXxgGLmQC",
  "key8": "2ACrAMzgoEcwQBcf55WVhTUX9TAeD9yiqHKXaDAfb4EdgUt6KgYLCySVUdwu9NVTegkstUqJYRgcUmbcMLy9MkDh",
  "key9": "3LKoTx5MywXpQDkBoEGsuvpJbx2kyhmPc9PwBrYwrdtApVRDjZUBtrfXcp32V9552AW4Jme6DQbvGduZ6PmoheT6",
  "key10": "ogBdH89HQeTXC25CNKJ63Uhh6NqktHmLnuUFDxQbxYvcicAiKHgr1HGA2PU5diBaUoBLPemFrT2WPp8hzkgxVbV",
  "key11": "g3CRjAeR5CzuQKXZ8x8M43chdA1Hi14RHZS8paW5CZWPY6hgVQ6zqjWjc44yE2t5mL2x9tR1vuTmxdDnuk6m9iG",
  "key12": "5MBHsrVhnyqYGhSuJK4hfb3js9zMmkF2X875TFvDSiXNjHsiCTncMQRJXratKzxJA7dG2wGLypaYkk9Q3m6h4MB",
  "key13": "4hrnmakkJ3dwwma3A7FDpi2ob4T4vBczTPnd7A7CTCBXRz8uknWPSDEVT6Ejo3SQG53FxrbtoBWzY6wgXTjgsMyb",
  "key14": "5ENXUH4bZGc2Yo4L7kNJvj7iALTfKe6Kip9cu2PSAFfeyBbAf7xqVQuV5MSs2JLaCLEMr6fyRwx9DxT979EMs22L",
  "key15": "23mgKwDsMtKQ87HppLBvqFKSVB3zEcbrSQtJVChFSQ4ZoCQrtjNbBdU1Rcyp5YkdXhEY1tscyA7oh6eHEFg5Xy1w",
  "key16": "5PjZtLEeCyVq1TjCx2m7LUFMkAF2To6uHDnQ4e2pRWbiN8kUFapRGDYGc6Qv5AjNSeiARMjzZc8Hqm9pRdBbpBz6",
  "key17": "4dgboNsA2iFtsA58E4N1eL72wSC82BzyYuecDa78ZXZVtf4yKzQTXKQnM1VE589QnrTVt7LhTw6U6GSLUBDSeVgb",
  "key18": "3p9LUE66fhannAN4hL51eW2RkrCCAxNRicfxpJk2BktDnc5uRgm51yGGdibGBS2LK6FMShQ8WGER1ncfnou3RFn3",
  "key19": "4g83AneEvogbaUzcEjCHVYvR55KfaLve6ArDWXRGtodzL5fBTdNhr6DXGDTSXqvouEiiGL1uvzUSsdYNhBi5t9bx",
  "key20": "2z2ttVscPeBsMCWSsJ2TD4QbCgLh8MLVmTbpdrqze2rPNRBkNGcaVmzcr1haJrkhrhtUjKaqD4wUt1mjfAs6qjqu",
  "key21": "4UPSTSJATmwMfiP8AuqwGAnDtCEMNwBGp9okUhY6dH2E1v9DTKWD5Ne1SizaxmR69ZFW6X2J5UrWGWuZGN5EGK8K",
  "key22": "3FUnrgyWoFL4LyA1pVGCEB6S4g87CJHaavSehU9UMzZGDPArYzBgYbExr8TLBE4WFdbVy66y8fxnaSmUyXn8sbhM",
  "key23": "5S6AL5W6NfDkhkGDLYeB3eoCmSSr2KKGq9YfyyyeyN6NEwmiyWGGMqumHRjipLQnvbpraek7byEkxWgwQxu5FsKC",
  "key24": "2ZGvJHNfx1vFVXAwhBKHPAoG5CS99NVSk7VYsfvk2d9ES7A1ZHq3Jp6LDmhEnyh5rHdu2hDWAbTpYDnEghAZkGpL",
  "key25": "5jn17r4Rw54xGRMkQ8z56WwvG8ujvfm5S9ky5z6whvzckmB3Zt8QMvEC2n3ce67qskFmpNWQrQJHs8qi31inz9tH",
  "key26": "2nwNsnN8d5PtFq9LiVNYkHZDJo9AoE2Rcy3xsYVLHK9cyzXmWaZurKzafcQGDkecNEDBxHvddGE1tDF1wDd3x5jP",
  "key27": "VUtBo4d3XQaVAnoYBc7SEaaffvn2ptHeYi2PDw4Ejo6rbN6LZtjBg1H73Jfuv5ZaDXHHFwsWorZQ1tNbhS8sgXY",
  "key28": "54YdkLJ7vhmcAu9ngJfUZYb1Ybx5ot7du4atxtygCdYV2MWgTKA9sRGjg4RL7LCK4smhr9eJYaW7L1Q7A6973BQg",
  "key29": "4o2yMTgex9Xtf6kmCM8QRzuVeYnDhz9o8dQMHxGU9cfZ6KumqDqz1K3hU3fPEjZL1Mu4huZ1WftaZ7A4bTDb4W3Z",
  "key30": "5pqwAG6dqu32yjGPdKEPbbNHfAjUUzEv4zdn9vw81nFrixeSawHShcp4NHPCfzPWE4mu4f4bLbtZ66T5hWkrZicg",
  "key31": "2rx3UahUVN1RDZDS7RNHjbXsLDyvhmAaJSa2UsxidqWtjtZeeHiPkoQ11bg7dMPs8mUa1mu23w2BHvJHpRdFuZHa",
  "key32": "4kPwaN4aQzk4ggYyDpSv91HBPSSoNRwNuMQBUzF6VsJ5mWWDtrfVkybCdE5f3MDTJqKA1D8BqsyQXKtnNF4H31oW",
  "key33": "5nwp9wcUbAL1TUSgEvRkZb48hPjPmVymbYC9hELsZLPzXku5YE1HHVi8ZvNPdpSF3SH1ZDphSbcT3Q9qnRN4ND6V"
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
