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
    "45mZBdmj53gL6MfqhRdfj8UBuCkZeEXbTVJaKdBqJUhU5bXn59PvURmnEWFK4X6UuQxAZBAa5Mw8qJ5NkAMzrnGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ec9FUQKhK9CL3wLHDwZeWietbVc1AhCBj2fuWcqBDVKkCRHfTZbtjXWwV4y76P7WUP8mPxZGhTSikS1s73SWMBx",
  "key1": "4mcd94jNia6nWUv6exGjzBVyo3b5ha9yg1NCkVPjS2YbKZ2oMcEvCBdvYWcjkeJgvUJKqptMYAKHKBEdmGXxAf8X",
  "key2": "56A5miJMZcvKrisSvPxagXY4Yp238W7eiY7RUSR9Dr4GcnPJ5xWmvx7EfHBZwXUE1d996q9exvnkEidYvvpedcdt",
  "key3": "4ie4J5tuKxnMWNmL7je6wxzmvkkBrQGuD9DJoidDVmNkzDf5njX2PbgsP2XcE8wBTex6BDYhpgLv2W45nj6yy8aF",
  "key4": "4vzyses1mjWYaRQ8HwnQnuGewqHAcLXLG7zn7F7LkEJr9m8BqUeQwFU8chdtDLXxZCLRTmph9MCXMPUFUvYMHJYX",
  "key5": "3rWYi4nkBZBEpTGNADYcBEWaPaNkLgfKAArW6daMD4dF4m3UCtkQnLTRwMYfvbs3afpkBQnSpfuZho5KkJfdrE77",
  "key6": "4i95Xjeb3QJc1eBHVePLEuVBf4teecihvsEqdMynrvfVnJTYb37VQGh4f9TzBLDrMZ7zTrABVcwQvTVstkQEKeGD",
  "key7": "2ENezamBP7tdMhVsTPXruvHCCxERzfBnMYgeCEYprnzSCYVFKP16TJ1cVGZ245Tfw7nxtrcEpaTfHW8VxDWku8Ec",
  "key8": "2bK6iB9qemdf5BAeHqGLX3ypJd1vLqsaf8Yxshz624Gzxkas1wrFPEg7DivPDiZfbFEJ8V4BUHBLieD8RubUW4AJ",
  "key9": "61Fvyg7eWJD2U1zdAvZ1JABnL8yfvYYzTJC45nFaq998R4Bb4PJEd9sC9ZHuwa3rB6p1RejRiboseF4gw56qxV8X",
  "key10": "2KXHrnPign5FJn16DUfCJUqGPXM1o2EGbid9YjWHa7n52yk18Ejtx9FsgihgzNHqEMqhUmgzXawpDd555acnAD2B",
  "key11": "2NsawoPq1kzGWCHazL3SmPLK6oBtE1haKuK4BeDyD2uoMqNcxCAaYaGUX9xQdyLG7RSmqBg1u8yAypqggshekz6M",
  "key12": "2VRx43Ap5CwUCr1f5bfQeVEnbxNHKqqbBXofKNreefVoth7yCwbt6fPq1UG4YnSKqqGi1ro23GvdGLjVGKZyFYh7",
  "key13": "2QUDK47gBj9Q5fCfUog1eNYqz4ijRa7NpdhVMuSZgSbYgaWT6cHhnq57N6zMbU7ofpyHYCTc2PXF1Kvcr3U3qeHC",
  "key14": "5tcpSP9zCALDojKrDgYpydLPeTaUwxmDTDT2Pw78x2vhPFWp1ZSS4XZV6QPbGmGLQGo6ydiy7Tu7fP2oHCToZQZB",
  "key15": "4gaZUiHfgEXGe7fizLgY46SbEby6yrJB2xrqDkK1X7M5n5fWGqzezMD8k92AeLowM7gbd2Sd6vo4EXUMRheM2fXW",
  "key16": "2nGz2Jj8MYaUSyBh72aTy5XdEihWWjERf7e7TePW6oRhHFE7DvGqpp4TK39fV7CjhCmysEst1W7U1zbhtdk8dMXo",
  "key17": "5S5mEpDFj5M5qGxjuUiBhdHJbSbhC9MbMR4gPxU5JetopxSfG6DB8cwu1G2hAzr1z9bHV27VNEFkfKPWhC34sHLa",
  "key18": "4csQCQTjrstSQutscaTgyDHj9vW77ALYoNCfpwj5T4x9eNQ4Xjz1ZQ2jiRwKtBEVaU8zhwuTVj95cAS22daw4yyi",
  "key19": "65mYM8Hp6oEnM5sfFuDQPFJrZgzivqthetN88HFydnRheRxXHw9kQ9k7QbQdfZj5kw7gBsNtC45TBqRLGFFLZCou",
  "key20": "4pRAEC7HxVqWH563xj5FBghRfMHJWmmX7Q1b6jMkFNb1wtZGHjc6DRUKEpz8ZC1WT5zw3PjLDHhdKQsPDXdgjNi",
  "key21": "2tJARrMwbPU3ooKZyvbLqeMwUPQ2mbVFR8wbuvnhBEUJ2v227Y7KHAX55S76bDpY4isktp2oqcr7SG2MSkSZVSwq",
  "key22": "3qq7kFvdQMRrqcRzpRy8Qobz2GU1Hq72j4ydNtjWigcqsAZ5mSnTwECBMTs8u7wJWYqAZBLJDLLHuPzzCnz6bUkQ",
  "key23": "4siPNJbdqaxxXz1nUJgPibBKxYgmZe35SuDoj1yFs4j2VrDZDyF4ecxseqHawxFXdwuTokTrLqAoUmN3pmpaAB7Z",
  "key24": "2o8HXTwT1iN58a4HCMxGL1kCzHHyhQArgaB53FKrgw9H6VbGEKxd7sLqjhmvnpx657mbf5SK6fRvxdQpmf5B1mRt",
  "key25": "2thdrLDLWoUJMeX1jo2VucXbGFHp4L2anuksMRWFEywg4vrxvD1j1WJMtHLte1PcD4oUAE8S3mi9fmpj8sKhrn9Y",
  "key26": "5kN6mqZ27x1A2oyrcUvkQDCDNXNgYuUyPzDbHhdtGZkWa5baYUpsRbrSoBqnY1pwQzGp88ZkQWQsSKHHosieMA2D",
  "key27": "3677Rgtc71Ahi39XNXSiYEFDKRZk8wf82iZXFNT6txTDwz37mthW6wPNRAQQ5xSfs1A843eP8zJwSrooNtuL27Sn",
  "key28": "4ujD6dFXtjoqAeckZLpFG1sanz4oKqfQyLbHzjJYWUYjzqBfA1Gs9WHG6cYTjPxwZBm1oX6UAjeTFV7YjRu7z5xo",
  "key29": "4WNKtnproRCjrCtBu8eeNky3DjQrt32vY1HaXM1DCk9yZZWUWhaeyHbxDnJJYqJjpWDTnZaGPYHjgabPbKpHeinw",
  "key30": "4yoq6FCJEjNqBVysUNKSj4FMdyoRZ6EiJQ9kESvWdkaPp3Qu5sCWXG1X19wGBQCc4WuMVZQRiQPKrFWVTCNuDQwd",
  "key31": "5Z33Qp7biQvMVE2FcVGTdDaYh7wnZ1E5j89qzbLPpkXqEiCFjfNWehVJYEbYPSnN8MxVzwocET2TAjhmdWwib4je",
  "key32": "2GZk3oegLwZzUjZzPgpxzBy2KZ9EGWudMwBwUix5EMPx89bPqoBR83kD5KDRHpzJ5q3yJk8ADa2rGUMAdMnb5K8J",
  "key33": "TXHTK2M5PohRTPdNCx2PZZ6e73MLDRziQZsazL7j2SSDkYq4i54xniUtBQERoXsKPYn9aXKmh3rXBGwgVAW44Vc",
  "key34": "pMe7LL6Kr99jjyTftNadpnuNrxQnwmh3bad5aizkucBet6J3gA89tu4cT7r4VtLJsssVqVcXtdeNoMFewnr49cQ",
  "key35": "34Jbj1Lm7YYCfN4vRekGm11gd85gWQJmGPMwxujouZtzcGhHABuqpNCuHHz4eFWiV8KvJpAasCDapsTmqYJAtrjL",
  "key36": "3vqrTLHJDaZth5GtdJf9oKYND1JbhjpAUhk8FRxw3X6Xfpjyg2YrDNmNJAbXfre7RnPKmEjxKeWX2j7cQwEWH5zx",
  "key37": "8f3Rgheqj9soSRKreJHZrZF4AFVFhbAciTrBPUbNJhihNGUBHb2v9ebGCooegjUUbCud7mHFVWxWc7js8UDfBYN",
  "key38": "5DVv68RLXLD166NuK7zbDS5yuEHg31ZT2JwbA4denHH9SjzHebEGSsrWDGJt2Zxosu3odFN2zY4sTndTFfkZ1eQh",
  "key39": "3FMno8vHcvKuuHcx1RZBb4ecjGu21jAZiDk8Zd6peMd41mYzDhLM7NstAGFfVgvnGgcTuApBGdXmnweNx9wCiXz8"
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
