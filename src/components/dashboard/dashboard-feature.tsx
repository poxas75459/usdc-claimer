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
    "52miEV5Eskm8xgtydYAvL8iHf9GeScFGXrcKNbLamBNhwFa4uAjAvE7QxguzUBvdSKbbX3yz14Y7AcJj7wVxzDP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bWefZDCjJFDSAHqxJjb6BXXw4EpBEXgBPdRnLt2Jhbxx2a9Kadq3wbmTsShqhJB3cMmdN3taTUQxJvThJH3GT41",
  "key1": "pn3h3LDjL8HsQV5MQqoiYDCG5q9M9Qmv1ZAwH3FYmh7LPb53UYzb8Lq2y6QWriBnyoueYUxwuZM1gReT5M285as",
  "key2": "3i2zwAQAYHDsWZLjLUxedJ8VABuQEgJX3XhTh2nBLhvKqxLA5tLccK42CNPXiuEpJwk3ideQKN3ii1Pxi7yNhoEU",
  "key3": "2DCkMk9YArzurab85TC8jLEXGKF6xesmecnMuCN5CyvBVfT9TNHgt5PH6q4m9Pyc8DwKGodLRH3zCfuo6ydtU32w",
  "key4": "575vvHk8Cg2Xr56uq8B5hk1aZM6DXcVumWQBcNrjRgzeET6tX9gpSspbbxedeZVaxMp2koQQGM8hJtruHfRDLeH8",
  "key5": "3QAB9EoZSk3uM7DgugSiLWGPVhDqW6Bfj1tLFYq8GPyGaTcGGwCaEjZXsYx6EvKTPueoqqkpffVFGYqaS7DWQBX4",
  "key6": "4qM46maSdjPJgQQmrmR3nK41pjo5UsXuEsbjWetfUKvu9mmYp5VV55ECs1j7LNpMnSQ3T1nHw5oa99QEavjP4Lp4",
  "key7": "2954QbPzVNWBtwSjzfTw1ua3FXxCCVc3mmsU4bsFLadHgGJrLtKcCKLL8h2rvL4Re3852VRqYfcveWsQLhG9Q59o",
  "key8": "2WsrjEDnQKj1Q3poGdwSLyeE1tkC1dqAn3BS8nFdhjbtYrPBcpF1eCDfUNkF5N6SvTeGjkR8qmygztQB8s3UcagY",
  "key9": "5HHv7B1GhCmrgwNViMKqAQjNuQje8uwtYPtYBNMFMw3NvnwpSN6hNSTwLvM8MHkpecC58X3PZ2ns8DErHuiuRU8c",
  "key10": "MoWip12G8uZT6aXdYDxdVcbJk79HtHr9gCy9GrnNSkDPn7RGL4Z6osPJ4M9BpDQ2JWKjJnTSVZTbR9BNcPekiAz",
  "key11": "4KtbBijgrF7nnkQn9ivnx5kY1Pw1Z7sHM12ojvWes5RQkuHqFr3PWdrxRZnSGbhxZ83kRKfUuVJ4oPPd2TN9kjAW",
  "key12": "51QYby13VtHUXv9cZ1amzQ6YYEoZrkJUBD7GKqKdCo7c2EYA82Lqy2R8tSqKhRkKMPqX6pVPaaTu1sDHvATHSi6M",
  "key13": "YhaTYbsYDCDCYiSY2cB3BwpXpT2UsEtCCkhpehjuGjLTwD1nLBGojF4u6J87xq3HkhDr56CiGo13Wb3pQJ9kQnr",
  "key14": "5xxWkUb26QxNt6uzMNwM2kXGjG7HqNcLA5dR2N9QnxrRtFBMntM2oM1YZHmXCQ5vDoiBj5bVrNygFEsmu5NSnRUw",
  "key15": "2RNkk2VRiyD8pPpRGbkAd98ZNb8Q3Boy7nW9QYyomb7ZSUiHNLvCDWxBqLY2ajBnTqRy1Z75QyxgZzbcuecwwGRw",
  "key16": "5uvFtMn8mQJ89gdGWR6yK7pkiAKddYbfKYoaPDCQeBMWZYuWeBRXRRWEdW6RFiq42sDUk4GTFGpyQ197KwgDH6sW",
  "key17": "3QLZFZjiqEtyunQ5MuRdkGEXqn62CphNSQBDxNNYBkjTdxtNc9wiac4DY65C6mzqkVcCJcphKjbcn1XGdjHTitvP",
  "key18": "5KMSf46ykN6kLHVGwbHoF9xUuLkpaUozacSfVVTBhQqRFU6eAzatUDB94VRufo1NXcQ5cYYkQg7gPVmXNNcAjNSV",
  "key19": "3S4oDLQVfAwZdoobSRNLb5fk4zmRvtLYLWJcByJYA2veFSM8EtyEsfpFuFu2b3KFMq2D6agbYFvVnCzWV2nZtjzh",
  "key20": "5yFdaiQTaMjBnhtQ3iJmqDf2ypcghwvPv51s1pKddRuZTjPjRiRcyJg5TUbeDShJu8wNdAcXvz3QHPVbpSxzDoG2",
  "key21": "5qLQw18JFH8oEvrZhkbVtLaf77pfc2SvUDPxQk3AzN2c5YBBK2caB5iU84cpuSgtKfkHyZMD9qkvHwihiMFf5uS9",
  "key22": "2EwBjzvuKSsiRAThoYkkmXqfWrRmDcrSFzdmKZcMg8hw18X5LrSzFFjodwYsP6LwYdwRzpuwigeC6z26KyxvwrSF",
  "key23": "53mPxvJcu2717TidimGk3pS1FnysoNGpMWJcXrGU3M5LhhN5csAejtEjsW2sRnTWyg1xMQsy5dHPkPTYSpM4QqVL",
  "key24": "3DA1cMyzx5ExqoxeBRrD8wzMoznjmTvZc8xX6rfWKwBx7MfPimzANAATHUq2e5adnvxPnGgvmt6dGPsFFiMsn8Rm"
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
