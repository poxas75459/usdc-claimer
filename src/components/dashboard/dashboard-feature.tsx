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
    "2jRrwffrHEyitE2eZ1qmWjRCdD4Y5Xk3d3ibNiy4aNriNyiKV2G49f3DWEcrUdXerjZJZfiwArzPpA3WHvWp1oxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56NJ27cYLkCdnLKHNm9qkLgqunw1jhkjpTKYr59MNitwtekyJbjVqrgMyb2djnZti37WoL45f2FuVXg1sTFLEFnN",
  "key1": "fkThFDaYvcfUTTTmqhS37BvGLefqEmYzbdCLELet4nEmuBktMfjtSxnxeA8rytGa5tPyaVMMKX3u8NJoH3kAhbF",
  "key2": "2UoV3HFeBYMYWhAjWgJNMFQX3Sw1424AvMf8mbZPrPhA94ZJ4egb3aohupTdXmGUKd5b5Ztn7YkSEwWnMEusNiXF",
  "key3": "628sxPw75pJ4WEFwqVX3kunjgGy4pk1C3Motb9efDFd5esyhY1dXgevxmT9GyNoEfPgJGRAD3jBcFioBLNnaBWq3",
  "key4": "42BGxvngQiUduVCpjD5qRJbKqN9xgPMzJKqej6dU19Mz4HWwshZhZUSdBeobJS5cB8YNFVxH8F2GfW2HoJxcBdA1",
  "key5": "GyzJhQPAyp9ysxmcixq6qKHeKQEvsNQbv5GXLDeUR9d1i4DjXm2UyWCHSgsKxKPQ8w2qWDS7LeCe7vt4QxZferW",
  "key6": "49fiMzyP1yzVWDfZ1A1MibjPKNcTSpbekKJKUVBKq9MJstUQ1xfUiizBBFwPfZHPukhvKiu1caCAnoVhgyszP4yc",
  "key7": "3NYMpRL9bAAfJRWc1cZTtHdTfSntQ1uWb4xSYAZ9BwXwBZRvLQDbujrLV8s1evG4gWMebXZFyKeGiUnF35Fh8fzu",
  "key8": "5P5ZkggUe1iXaYGi8Nx9gTi6A8tkFxizSyysV2BqS6GxSK86GAUQKfyHjjEfydvoJWppJUuPGxniwzx32AVpkcwg",
  "key9": "5wBFjQzY2cpwbFzK4UcYrYnPJabSrMge7zJMRPmr4WU3mw5z64umUx2Z9aFaiZssfqe2GYJr15mGG9vdEQ6m7cZw",
  "key10": "4rGm21xZxw7sVr7zftHnDpbm1gzxRq2nthAV9E7CRz8EBDCXuzxJcVX9mNZvBx45136ZXxVuaCsjM8sgcNxuB6K",
  "key11": "5ExVcdjTNNg3SAr63j7WrEpiaY9F1TX2t7pKXdTQGc6qtD6QDwPd1Gkm8G1AtYHRbdyCDVNq2EKfwwMMinf7JFGg",
  "key12": "4ie7rWqiLARhH6Pf3TJj7ARzt112JQZJZEmMa3HPeQ4JRE5cv4TZvEYKND5ssJqfPVgngGEBpuyKFfratT7Lp52F",
  "key13": "X6HA1JDYKNcBUnZaBygAF3GAje5ShFmG7LczXBG3H93mc9YLDZhKZLoJffTU411cjmB6Niyb1gxx1Y9PkTNiwuV",
  "key14": "3HgFdNGFv5aLimSsdY8T1Kks4uQYABG9gq1E7LmfzN1SPJMwP1YNHmJS7NphEXkxxujKLmksajDtsWpuBjY3WCt7",
  "key15": "2SJTGsT5betE35AYDTYwgazrtuWJm1VA494trVm6TonbctFwxLCj9FDaSQtjzhRrPa1dWVPHW6dVbkGV9fPMeRrb",
  "key16": "iqtxugXhxaShu7wkUWrWTaxgVNYT6YfAD64ms8SLchMd6gBPBZ1sQzz3jcDU1c7qNMp54Xffbd3fbJcdotAsQZx",
  "key17": "3qAzEGzBrYUAKnwHqbtmxHn4sfwLAZfMfrpoCxDTn5SafJ93FNmf3q9qBSDiu9iGk2Gf3oY2C2wqzU41ByeeBJBR",
  "key18": "619DtEXtTvEwiWMP3XrjbQ2WGDn7VqLXDpvMWzvV74reGcvX1jChcBPMWi5GZtehpw9AaRxQUpGRahkzLa7bFmrm",
  "key19": "5m7rjEhJgyC57ZnAUXRk7rBghSgDmvxhKYAJoSsujUR3QxSgqg3N8VWT836xScjmZbE5xHzkPhjcsgjwdMxtTDqi",
  "key20": "3wb3qGcPsURZ42nppZVrd7Htvpnb4twQriR8V5FYjQXU4gtp32ZR2NXwHjKbeAuUNa8o1VjS83YvRHsYk93Xktdh",
  "key21": "47xPZ4X9nZs3PFe98pQzPDzXxvGFUvcEZPFdX1tSUcyfxLQ9aDih8Q1aHUu2q6MSNa3m6qBNyPhWZm8FDmw9CRxu",
  "key22": "2n9uevaYpJJ1yPC1DaLZiqvV7LTTNMQGyupwUhvUUDiV2Zpc4jmRvw44MWbH4fbd4rjFLrn7gjoR9hVZSFCnwXPm",
  "key23": "4zeLks3PAkyMWQ4haNY5qEFDasnAhS3v5KM8SYKkbTGj5wfg7taWcYR9s76QJYSKiE97C7dL75jsH4jwVExPKp68",
  "key24": "4wrRrb6yRmmZf1QYSNDgouF4DUtAJ2SPsXdu6fVTMXQ9vq1xzM7NaWTeu9HuXyQwqZDek93XCfEwkBAcFgSmtuGt",
  "key25": "3qEaVHDWXrJwY1W8wM9EVjDbajZNX2oE6P2phpkHeHsCJ5X74Ut1mkdqxtNHqikQkp42zS1qnYChuirf5HqhhdTW",
  "key26": "2cWBWksCaJF8w5JbYcE5dUFexJT78aPQuPgPLA3NRCgJeTBGNYJAEK3MTtL3nBq5u9EXgX3B7ryinAd4n3TnuzdM",
  "key27": "2zRqSJe8acwmAzAp7rfhNiHWswJaJBkihqcYZsCUU7wG74wRKYtJmkuYqJ7Wsjmp9NCyraVCrsPoVM5V9Jz99TRY",
  "key28": "3qFzWZ3xJCXNNMzQCkj6sKLDZBBfWrbj1DrBR4TGy9WbqR9oLvGQu4f3uHLcmtiduxVNnKahrERaY9z8ZryLatXw",
  "key29": "4a3gNbkEQRGSkfQRD9mYmmw8ZhDMzihHevYKjQhw7VLGZVtCKyDFhzqP9nUttowqAmYmHA6kCxmfwVz1vuRADtog",
  "key30": "4VesAG33vEBANUoArrYZTB6LUMuv7khv1yPgD1SNaaqZNKbyUUD9m5mXXutB8en4xiU3QU6RUZsTLQXbTkqabtF9",
  "key31": "5i5c7iL5evHLZensExnKcAjCP8jpe43rr7SfqPCJy9s1dFVRYKaHao7NgxMdrs4oWhaF7fRxQomX52a3ZvcrgzyT",
  "key32": "2wupfZcrCvmCkfttDZz3cqrJcLX3Dnf8bxgAPNeKDmFDztiPDLrDXBoMpkFW5qZSfBkoEhSSo1Kzi7J3oBHUvjsZ",
  "key33": "2XQPLmz3hCJaUZ2JrhEdBe7XA4sNDoWV1FwtAjmZq1bLF8EFxqC1xBj6USmexLZHScJukzDhTuMugQL993XUkgVQ",
  "key34": "5jEYerLHLVMYvEnYg5PLryHHNqEPJ4sSeAAJiRMy5ZRaPRBG4g5VJK88HPtrMFhZ2TeykerFDCX6ZzCBVnqWpLky",
  "key35": "7pkTmKCG7GAno6JM5xtX5JCMHXm9KJYVSoZ2Pgh2UrQVoKw9ZDt1SDTJjjCVHNW6U7YPG3w1baHLunRGtQwh2xT",
  "key36": "Vq1HYn7xXyNhUTijC3e1nyYQP8QS2UVge9rKUj9GR8c75LzaZMXXm4ocuifQcH5gYwML71e6PQvfrbZmksTxY5i",
  "key37": "42NXpc7isnRAw7L7VmEUudv354nBCPgBbQshu5AyQkZzm3udgczKhb7e4wQTj73c9gBcp2BZHJA6JVyu96akBaNM",
  "key38": "Y48ntkDTwPNVx2CLSecWoT7gUZba3V3mdd7BzyMbq59Wm98aWWbNPEHeKJdazHxZZXu2gVRgLLKRkH8UK69WJRk",
  "key39": "5xA5h9xNLWL8AjfG6TeakJTUiagsmwwvmWQvyU9iqvS2PHTeNkMaj58vRkddDvkNfpDmYuoenEHZuzbzXTw1cP7G",
  "key40": "3SwHE4wRi5SdU9mRVDsWXWyuEkm5zxCJqNnSk6tGwtSpWaqYufty6WZsQDANWhip1iNyEed7tLJwUq2NwHLoChvo",
  "key41": "5ScGHoCYfbwELHabTbyfv1wAuHp5mU7iAKeyJuLzyseZDhAxLgweipdXUY2xXFRhKbdr2ZXoob3hmfj2ZfoUv2PX",
  "key42": "2hgNESt5Jqv1Tcp1rSy4W1obLYTfDe3PYJPEb33zTevc8Zat1uPRJKycZYFRqX99D9ktbNURrsxtETtv6E4vq6xF",
  "key43": "51CERLs3tSaQWdS2XwCrMCBpuH7hZcDze7ApVhwMjY96q14A473mmqdsp5wChtw27rN9UEcYzDoV8tDbu1aNtjBZ",
  "key44": "56AkWMq6hBhrBKFvP1eDqHVgoPD5aGDBb3QXAjiLfy6NC93Wp8yjX3vWkXC9bKzeovHmfVn4e2B1zDZR7A3wKsRS",
  "key45": "vPuSo19iC2Tc7CDuwjgpehe1h3BPfCoSM1fRMWmhWrsfADZZKTQi3wYvcuPaw67LwtsmR9hTV2JfK3bNXfLkWka",
  "key46": "5RuS4fo1H5J6X5g3sgUKWagXUeThVDqRhzwG34pjMjHD8GUNPywvS8ydTwG9xBVD8oykY7dZPX8c7QTjtYV2ET1A"
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
