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
    "2meXKmehiWwQKs59btefc6jXNzDeDnFsdEp5wxTY4sAKrNoBJRq1FbiJPjsbQRhQ6oKsFbKtWHcgsoVUKEykg5GY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i1eSA5BgpnPB9gdcxEdJNhDkgveYCUEMRVrQDi1uBTAgWpJ69fj6ySjwhf58NvXJPqVudc8VfSyeTwNLbGm2hyR",
  "key1": "3MUgVyUnrpDz6wqLPryApqryCA3PPxCTUQD8D5J87PCXHhw2HmjLZvHngGehWDPzmQ5tZhR8WSx1ee9p9NufnLJW",
  "key2": "2xP1XUWP89wSJVmfkhUjQYgpHJNjrFbG1gRzcS3Ep1RWm9owxEUvrj2FXrLmBHwFfR9fbtwdigf1DkniMJDiFCN8",
  "key3": "3NAFj87ziHpiviE2LEm8MygmvushDEcAYmxUQ2uYz5EJFVLYGfr6JztqdGmAWoE1VbZ4TJ7ariBB6fwy2sGGqpPL",
  "key4": "4BJKy2kYefkDcda6uutp1sMg84G3fxQmFnJgimPMzfVzA5eqgRSEtYYQ8m6CDXJkH5xmxbr9ZutEM2x3RgsMbi2b",
  "key5": "2t2s5bsYVJnGNE3TF1yYbecJpKzo1TDkgKF6pddQ2aBJGXwqhvaAM6NQZ2X1TXXHBfjB6bSSV67jwchstoQTFvnQ",
  "key6": "4sTutufH1FyM4K8ZMJhzp4sYM7BAvGuw7U7UExz774tjxocrM4UNBhS8zRpx7fCLqU3uYYSrGz9hRMZCfkL7sS8X",
  "key7": "3NdSCc7mjKCGE794V5LGuge2aqvs2Vd653x7FcXzcFZpBQBBhaKmffXm1h4UKiica6MugifaNFQRk5f3hXaMNkj9",
  "key8": "2T6wRRU9AUe79t1jTrqAApGFgyHzNv82drvPVLQSHTHYMCf2mmCNZ4kTZ6owZL1PnJH27Zxpfqm75hTyaq1RtB3X",
  "key9": "545W9pEF5CBbMHJ2tBSskfMocDJpU2FzpMQJVw9bwwqznQxU7p9PSi5LCoEF8XG3VPpJPJgShPZiDYUHQ8XpaqDg",
  "key10": "5F5dGNLDiFSFdooZAtoKatodwDzJL5pnEKAaThNVPENgEQStg74ndNSKtUptq5uJBhwd5YbcgyNdAqabyZNynXrc",
  "key11": "4bk7LNsDgseTDzosKHTMDQzyNHqnsMFjQDPtEw3MXRnxSepfJKkonWYPYZQHdHfBQNTrNop5zXaTCWGKxM7VTbwb",
  "key12": "4ss3zHmeUCGoDxLcmeEoJ1pgXPwr761LWMKMzRiew22MnHKa9XjwRaFjM52jmxRh65FXsMnGmjCCzpcehjHFGPeL",
  "key13": "5hm6ppy5Upe7bzvg4HNFvg7yDpiTVja9dut6TT4DXS5yUrMAvSqKVbCSVuULArt8D7j8u3wsjFCndWkaBvs55zCv",
  "key14": "yx2NhcCfzauwaFLd68rzGkn5grSMRjjAHyXWMd8cpdM6d43mUs5xwXhk5cK6VmTJ1DSTxpJzQ8tXCPWNNAmQRd4",
  "key15": "2xdeNoQ2DYEBYjAsJTZ5GyY3mucsT2cHEUsVJCmpTkWXRtySQuu2hDfH6emFy1m4uarJHMh3PAKdW2QF8D4WeTKX",
  "key16": "3VFEt1CPqG6k6x82JGVv9nhnnnCDEUrkoTwMqRr8k79GTDYY24diFEa7RFtej51soC7qA6bz1nJmMwc8hHotrsZB",
  "key17": "4tRWybYdQyhwpUiKyQT4JwPUtniuk8iHiwgmRSvE5gxkB6WdGhfBTdUSmRNUUf3D1JmZB5eDGZ95MG1rvBeXAZUG",
  "key18": "3GT8KHnhPkde7W1PLRL39aWJ7ZMzt8yPAe6ynN59AVQJAGmh6EsBY9sTGextKMnGkqfm75hyFDDqsWmBCuoucY9Q",
  "key19": "3etmcZommn9HQwbXy9KRP3JrSusWH7zBxU2hPZU63259epNcbuAzVV2sLdsn5EZfYuDd2gs9vYbbf6cBitknwrd3",
  "key20": "25g9i2hWtwFLFyXn2aU37Mxb1zoguV93ykhcGyAFaKpD9V9aRJH56ebF6pDZAbopph6LrvsenYR6jtrnzM3EhK7q",
  "key21": "5bqLc1ZjiZZUg2Eku82WqweUjYmyU72dJP4wcHTsneXzQHwrDZHC1x8vntrs5vkeUiQX2HHPmLmLg9b4zdeBKPrX",
  "key22": "63oxNAfXs1j7Vbnd7Kd4KeQm1RPTKuL1t1F7tr17FMA59DwezP7UU9NuGheLbD1CWPWJCVm2Hhe34xa1DXGJCaH4",
  "key23": "4Qt9QSee48askah6eT1heynjeAxQ9r9XTTt3svLnZ1RRS7GT4AmeGkEuVR8yH6ddaFnnAw5pk8CejKawRrJxAdmX",
  "key24": "5m6Jww5fkL7ppgrSn164BwVary3FsfMEjHYmoc7jh6Niu4LdohMzMmMkxAKYidMbqcyBB2X5umTMGuP3CyHXsrby",
  "key25": "4ApPP47h2qMR7oZuX3rLy8tFDQbbXo8wKSvgejw64EjemspsG5hdWWdfveUF1mdZYtLSewgLE1hf7ZedFStHecKN",
  "key26": "5x1r2Ce5CbpWZ6zhoGC67T2CaNH7TS8V9u2Kt4BbSEAL4KFRRrnWXfs3kuUgpmdBBf2s3viCrWMaD7mR6SQ6L5AC"
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
