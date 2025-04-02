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
    "52S4EqTwdFbg4VuQ1iZSLt9zErQWDqoaFSQMqM9BaioxhuSpLgwWFLTtFUJcyqJZwpvK7MSBKKvn8LNjk1hahkKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DM4Rt9bWuWTgo6ujcPWVLemVaXHXUrRw7Q8Y6YdXpkPr8QRnUCdkZ5gQiAR84G8pYDfbwaTGsgtdeRpeuQLHjz5",
  "key1": "3T4KPeHENEzSVGsPNArxKPNhEfdxr3shUX7oSR3FyvtHPrMomuyFyTFc8USQDArEBtGyhKWn1s5XDukDhKKhrH2h",
  "key2": "39CyLwYaAFSmNYqWLStcG7H95BpvAUB15FRbzz3KguMLtRRbWNiQ8U28qUYXU7ZPTee9SQnG1Rb9rhKErUDSg43V",
  "key3": "64WrvfvYJfNDrY5y15W8h3GQuUvxz5D6Lo5n2bHgocg3AJjJkPrDbNKsMbwgwPvCw7YBKyabUx37VwiDw4ba1eS4",
  "key4": "2dLJHQUJARWnxmDaRNbrJDZzwxPA6Q9XdfgnbBiPKDtb56xjXH4zrVCT9i5cwXw7JhMvpgBoXGzJq4tcgNUMbnZV",
  "key5": "5P272q23uQwnySV1hMJNrXguG2KK3kcnhNwDgVsSBsB4Hk6BoQwhA1orvngaVN7GVceL51NQ47BNivys32qhuCPn",
  "key6": "23dhkDFR8rCCo1FL2fnpymXL5fh2a9VizDyfxuaKfQ3LokrZx2erSLi48NbzuAgXHxEpZMNGSBKRutcQEQzkVsEf",
  "key7": "2ennrg5UbCBsuMTBQsNCkdfG8csSGVtZr4yf2XoiXKLU4ePkK82bXwPxPm85UZfTVRXYDFdyy8C8i4xUkpoodPcu",
  "key8": "WeHfbDKP3q178PEugVZ187Voa7hiwQf1sVKYDBshbkgY31kLAYsMxopENFXvvB291XqeHqjyGe87hif7HWzwLvY",
  "key9": "49yPgRkhAV8SKu6KF5zecARktRQGbBrVXpwyp7BUJuP4PmAwkpGd9cgerE8zuJfH5KMjxHvv5FxHM8AE5aF3wWYg",
  "key10": "5mWyKkgQ7cSkTWZHdsM5SVvJGX2NW1oSHfHrUw7zAU5L8a4Vo6JECzf1AqM6r2K9wDMdYyL3Y21PD1Ga5eqG3amX",
  "key11": "51beBCGYrW9gT8rZxy6A9Yur5bibk6TvEXE6AQk4AfxUEfF5RSfBQK27LmqMSx4A6VRedFeGCbNBDzsH1bWT4Wb6",
  "key12": "5MiT7ZRNvAMb2jwPuZRAR7thuDCKeo8nSv9T4MJ83R9oJjLsqcwRgpdoQ4CF6Qc4JSQugKKZUGWom5yPomJevDh3",
  "key13": "2FfgVub49Q51S3iKsNBUrDJaGcYit9yEQ8fvvYsDf5QoJxgFMHQQBL5XnvMc1f1ybizJA1iRhmKRr3u3mshLBwYj",
  "key14": "3jiJZjzyJMNwtq8rF4kDnPf4hT8JuCgW3qN9nBHfub5yxMSiDTT56kxLkXHLWmNCY3NGaEDBYXBorLDBpe5oFJpi",
  "key15": "4XdpQJHvvQuipcSYVZ9SPkrtvSueJKTf73cj4ifyqVaTDvDRdq7PU9if8Uub97c81vvbTuTdkAydFT38MUsQgusk",
  "key16": "dfPTCJxaoA7hCegdbcM6ipkm7szWf8WAxU7fS7EpTf95fRBd5Ck6NmyL8i6YBtV2DzkKEamnZMVE3YJkW7x2Jcq",
  "key17": "4VA2xoKic7hiyph62MqRXbfL7JN4F1fvwHwTsNGb8JSBCchFoniEk53B3AxqgNHLGAuoX3GaoMKpdBExyyVJXa4V",
  "key18": "8SFdTJapdFtfsJH4YvDED3TC9vH6pBf1iQ5zHagPoM9foDwT7Z8sJECGg5eq95s6grgZ4RF5tGwXYTm6PybRD5U",
  "key19": "4ogCeHnewxYSBe2aZi5xoZVRRrGTh579jJA4Uagag4SBGWHuH393oc8mz6fYBv4ZKZTRNZ2xRGBcvF27W3E9p44X",
  "key20": "qASvydmt24PBVMixF1WNr7oF3DhQsnBxxfAYnnsnJJf1MM1mAHECi36heyYQKHSpDxK2FUy15gu98vikz5iSJ7s",
  "key21": "2wUZyZnZQyS8rnZRfq4q5JnivD4KhvXm6w379BWgBgvDJwe1Yxu5Pd3WS74uah5m9ZTbFni2DogcxUcPrfhvrEu4",
  "key22": "PMUVEo5MAwmA2nXtPem6krtz4gCoFopgjCVHQoV6KAvAj5sjqgULYqzSZbELgFaF2iSGpk6TPbx8M3WJ4XNT3Yu",
  "key23": "2wkqSnbirdoevUjKyj1s8QrKH2TCYmUfwsDAe4juxGUqUfaiVEjQUdXcpxF7SSNFTAivB6nkv5EzKH7j7J8kJ6rr",
  "key24": "63rNaycoGHh9JHG7NcvTiL7T6XHycw7pFhZMfTv2d2yTZzLwkqfAqAjENA1UnfuSAr1VBKeZ1sEZhx6HyWJZUBur"
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
