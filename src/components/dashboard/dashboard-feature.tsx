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
    "5f8m4Qp3A7m8DDhhNj5kxxzaNSzEKSYsrLXXqU6QbNMAzhaiPTeYQVDWdwgkL97ezCUSTHrHXdq7cT2ji8Fe3627"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c8UcfrKVUF5hA3G8b9u1yBxiYzAYo63z6Dv6houuKV4bswWbukThbXVFMgdTAsMFgZ7ZWxWVh7VRzFeRPKQgS57",
  "key1": "q2Cqh7SpjYbqJXxkyVGSQHrS6MNQwVgiMxzdYjaDZbr24nvoz4KhSHWVs7ArGpnqF6KMJE7zZdtJffDAmgueL8C",
  "key2": "3KD9H9PB8YKhYAgYKBih8Tri22APee2fz34eJiXswemnFxik3Zw4g7k59mHPsZ4kNjqmoeBYyeAnP14jAdAESwih",
  "key3": "4oRHPyF3RUFHjTvpPeJGwKfpuJtL2qEtoamKUgzdEsx2ccuy2WTP1JeaL7tiC7wJXFbgrrrJshJQ2tLaZyDqiTHg",
  "key4": "4kXbxRzyQKdnq8baKrjkRHwrqrgsSCyWsDafjx9s9Qp9jYUAsBfEzQ2QHdG16AfzVyRcB4uSwHjFxyNH7s3bhcEu",
  "key5": "rQJkUV9vQ8JTWxY3sBqC3QGCDNJdntTMu6cDxy573gTPtWnyfx3h291UY6FRGkzdbxDAApYyC3jSFYsXiuKDXXQ",
  "key6": "42hPEhXWoyRAGk8sVZrFjLTHNE6QB5eexYMci3YLDYDhpMxj4W19iJ2YRCYYs54desyFGusRpyVPtskyj18caqT1",
  "key7": "5n4tNHnyKrePY5t14XHBJA2LqVuBHW2rTzX5KFRTcW3QwbV5brZD8oLWBkoFMBMUgFW4goJ4YBgW6hBRLBwMo4ae",
  "key8": "4QV6xEyBsSe8FiYy6Pi6RJ3cHYqw5HANwGMiLFDRMJxNMnFhWy3gx1B5FZekUuuyKow7MMT9fYMngBqxyNbXyR86",
  "key9": "jCHeAUXCwntisVtMxXGVXS9ncoKdeSRtTQKD8nFZMMRtp2SEbdxTAxqphrfiBUrvSq5hK1T8c63BQ7fHwTmi1gf",
  "key10": "2ihavYnmXSoKiZGhY9LvV6Ez5vXUpBt8vKP6ztdcGS2SNqinF1n6Ew8JSreA5ihronF2RqSqqQBTja7RGttX6dK4",
  "key11": "VQBvJG59v8M6JnX19F29fXejHGMXNfz11EjM4jmxH7fsFfTvUPJL5rMUN2j8ZJT8T7k1YHR3CA7WXGSivnaPuvX",
  "key12": "3voKYrdzrepvAC2UKyMtuNV2rEtdTkQfVRdabB5nUP8322UH634gohs4b5x2GF5yLXBSMnWbawUEYYLX9BLMzwK2",
  "key13": "5sei22TsLk34cwBkjVB5GKbrYnPxaun2rNyizKVQBRxFkBnh9GVwf4wtaUtXtRCKjyYxnMVPamhVNj2u2ymq4zND",
  "key14": "5M5roLqCywLJ2oTJQrbjWpJQswyfRHnc3CjF9EidBBiqvoaMYyiF5XaTZjBEPD7BDGt3XjJW9veQ5taZ9sMUKP22",
  "key15": "4ogyShs8pMRFQn7jmrsG1g6tiXeqiL7C1Xp84BCoRjuyvYCHhKPk69ZNHQoj3prWcKwqjtN9ZGXefwteNmKyzoUA",
  "key16": "3FbdeaDbPB321ZHEL5ViZstFNdHvYbANbVFXqpVgSmkvm9NSNYSM7DCxLLUbmvthbFG1a4VyPEjrwhvHE1jfPdWs",
  "key17": "XdgG2aQkEz3wUUUd7JoZ3CaK1aTjMjfQphS6qjZYXCxLWpX9aSyadKtBwrTUSG8Wky2NcnyMatGiihvySKtxHCQ",
  "key18": "45T4LHgarRpKLMYqSeaGfvV8d43vMZri1hSryHR4hhX1DmRzmbF7716nXmvtNzv9hq34Mx34wY27EyA2HSjsmuev",
  "key19": "6EyhoNpTjAkwtQjWc1eXYWDqQ8TqJ4nLU6p8J2EX2rcNxcAtfbTUooUXyxCGeEiF8wSfWsgZRLNGhPNn8zxQBk3",
  "key20": "4dhQUner21P2hcfdCV85dWptXPmiYUP1sY1oBwZRyWVVipjbA5n29YoERS8A46PiykmHhjimnEoonwZbERMtz4Da",
  "key21": "2fCBMTcdWr81pT83SRT9VpXkswqutds4Ym5UtVThdkUUMkC6bF5AbTWcDRqr4P5p5nLDXZLngg8YfRDBLP7KvZXD",
  "key22": "5jcYg8RQMVJE3NuLn9jA6os5MuRzCcZZYXbqBtDapKHeF2kYdbNYLTMtv51TNNQZpdNLx7poBJ6SAiGTQVNyCk7t",
  "key23": "yQVNCDuBLUADnf77dMGY3YZk8r8s4oiPBfohnGGpiPMPx4rJjmGgrpxKcgHCixouWSay3QqotS2YUhxGaDz8Wj1",
  "key24": "2tmF8VBeRV7XyLP6Mjf7QsbUBjjRCixCcwi4ZMNvkH85KeS51bepdPeEtXefwV4DxHRbxEAniGbnsm61PYxM4a1u",
  "key25": "3L6Piy3J8qo5af94yCJ3oRcK6NfrahQMRCya6RZ4gpnrtM7hBqi7T3hUou4fmCsMiRAtSsDVhnYLXhc3ZvETkHWb",
  "key26": "5evjyMbT7fu3zwqZ9qKjhWcZcANRvrKitWDsncAHeuKQWPkBm2dxj2Wr3GpZL9UzvoUdsyCD75kbmgSesB6auGWN",
  "key27": "2g5CH4k7pDg8HJS19kv1xnPrT9kpgF2SnTJFK1E1BF3FkKMK79JR1z7gjMKGgx6tkXTUUjNmZyDacy8LNa2kxBgF",
  "key28": "4RE2XB3ewvAwQXdmTK6QyvW3Xj3GhADPgA1dfzkg69E4frsq1By9mQyxUS18aTUfu7BmdeqGDHgriHbT2JUKiuXu",
  "key29": "4pLk9XraosCqnTLL7XexpyZxdL47yvhoPqCmKA8hU4sCAfq85Eh8Cbir8PJyiRie7STozJAirTFNpcrfeUSEMRPs",
  "key30": "338NDwHwUBk6KZT2h4sPTxeCKPtbqdXnjg1AErBjZny5ikpBabw4gsTnZAfLcknFosQrDN6EbJBFAbrC1U9AKetm",
  "key31": "rDwcypaiPZ3F5MUo5hAWphVAEWArZ3NE67gHm5du6TFyS2fgYipb9vUmHbGGc7eeeJEtzuQGQxCaZ4DYgHsbiV5",
  "key32": "Z8aABUY1iLkuLxM9Vm9yUD7ShFTPp5zzwdo8c4FH5qHx41GQupTPmE2nSTWv7PLxWZB5sq9KbCuKBq47cYJhVe6",
  "key33": "PBpmxEKxNzTHxx2RTV9DEVGTTakadyMWhfvVM9518mY3EirTMRFkMXRocBvqENmoBUkwRse7QLXzLFQjQVEN7Cn",
  "key34": "HkfqL4zggDg7FKzx8ajCGGfMBYRXm4tx59HXYpF4o7VTLZK9yqnWKx6jmarQGMcCBXHbnDssgJBQ3LVaHJBQy3a",
  "key35": "5We8MK1yopd5EFNhADWfxufuQDQgMbwx4Wi8rvZjffH15cJU3dRGAyWYhxY1sDYHeZoC4vuZ4ZZhdAVyojkDd3oE",
  "key36": "4PxnTYqL1iA6U86Scf3M65DEZCxceSQvaAnjhmdegqgkkXKZeLaSmRm9CSxqne8fRB79cJVaow9uUMQpLyBGi3ge",
  "key37": "35ZFm4gbPGUPd2UfcrzTYbhRCNzrb18uRqdCvbcdRmsY2f7YyfPbqHjk2TphH1AiYC6fRiNEEKaiiVTfqfHeCqXT",
  "key38": "4cAR8niTJbmB7WqH8QksmLKPozR5pjRxsyn1wRcABS9jBTByYnokBTDbszFovPM4HzuHVp8Qcs1FX66BTNw1bcWz",
  "key39": "5NPA46Adm4nD4RtoFW22KmaR3E6X5tofM1EXayaqjv7mo9B9njyAaXVsyCUEob69M4vuoiwdsfCD5dyQFVGteQLk",
  "key40": "4QX793ZG5gKYNw41cmaWmhrcjBx1L3CmnNGtNFYXKPWA3rDpkEWpF8e3eMTyCe9jCPzz8C9vexAhH2bAVvssJWPi",
  "key41": "2mVnBMQ4SRNYcnYEwfazjM2tLwaKHRgwFTJLHxv3QTmxvaEPUqwW84euTE41itkjcDoDkAjufkSyci8yioqmSRJ8",
  "key42": "YREGuSNUvEXXV1mwmbNWgmFvVG1hnYHLd6sQ4MJGDFpQie42ckVgH47G8eswdFYxzjP7tmoWoEob2ZtcAhZPXNx",
  "key43": "3yz6i4GjEezue6XR6TzUSyp4b7kNN7V6YW8W9RAGs9mqBRFkXSLP5yrF2xEe9b39UJGUCfYJMqvwYmKQFhAWGiD",
  "key44": "5CwyoY9pBtYr9TQqoP48VvNmEoGjAAa6Lw2n4RqRivX5C1nHrsnZHaxT64pN7mxMUPFWefYGpEoF2gz17ZrJmWVD",
  "key45": "5xzuvtASGEipKtozNDz2mhvkBNxZc8vfs5E5JsWxTcJc2F7ZqqgeX7n3M2GMqLtjzN99rfanzCmhxPYPFCJ2VjTb",
  "key46": "4bZ5kXWZqCZCiZpCCo4w2Nm5t1sDZpPxs6BDiGosmrNQ4iQkKsmMJNVvmLqD2iAyTGPZJMHarexmKgJi3ZG6sUC9"
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
