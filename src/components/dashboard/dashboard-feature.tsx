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
    "SRYDhuCShDtD1rPsBb1Su4YUApgB8LP9z8U7azmYCpjod96fSmuksDMP3bt7iTyRxo1AfHftGy7RGdFYwAywcLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KpqR6KZXwW8LXCWxY1rHjtJybqKcp8ptmY4mGnsuFBVuCeUXf8gw3YTjNgnu5qHkt1RW1PsjCvSeXEfU83QmJR4",
  "key1": "4shnpXWGZeP9bVePMm53H6ToCpAr6dCH2gMTZi5yj4bQh8Z2ngQZD3s5n9HXvbVpgoVxbrDDhDvBAMizXd2n7H9K",
  "key2": "3JqVRngJW7G54vb3vTyVgQ3QnQSu8tRE99nBUvgEgP7MDUDBxSPBPSbAmzNorxKc9TupfaP5zFn41fXm3sD2grVX",
  "key3": "5k4QWo51TsVkRgH44gFLyrd8q7V4CWYwVkyz8YN5bnt9bEsSFw35AtfudLJvGjUAFz5PstNjH2QPWdj4rqd5tY3X",
  "key4": "3L3HezgpBZPjNeDQkj3brJ4E8V9wMd8KRv9wXcXcscDvgjG5agNg2XZZ4yFfgC3CX7H6krBmKq7xB76jFunkFGJA",
  "key5": "67nmKtowytNAiqyp4FzgAj1ASZS6axPrmL1pBh8k2QFTwBX7vfVNCb1SBawTUyuCMPMgTr1cV6d45Z3kHzr4TXhj",
  "key6": "CbJGA4PvnvcjkCuxpD6fhy3sfPBrRiRoLEfd4undMmXyzhFnMkXaMJrDCLWx8edj7VrGikek3R74BCDGBXGqfEd",
  "key7": "5kFG2S6Z4nttj4hvVNKMs7jqAufGmN2rAKFXLRorcQeVkoLMReDydMXwA6ZzDGSPSPGMcKALGK7k9yHUWK3Jmtg8",
  "key8": "4qgVsNwFiqzXM3RbRuiWdPdh3UM1nLXNSopsUQVwJPq8wbRQDHSRFN8v1KSpRBKg6FLS3bJDtGMmrwiqoZcqW4Lk",
  "key9": "4RLamAgXfrXUcbSS7iWNn7aJpuPpXBLpYQjAQbVQbwjTLKfbUJrDKLsYrSofhLxVTbEJ3ggkXo9RkoQZFtFEyhyp",
  "key10": "3AxrQGqodWMiyfAErqoqbAaUnpXHKGD6W6ftu5ddwsnMXQ215kRy8SY6MYPUJNP19ov7P1EUrQWwWnkRjnzdCEP4",
  "key11": "29TH7k9Zs1WjxZSdSWmGDzNk7Vp1Y9ncBzDWCfBbJt2XcimVWj5BijwB3Lxti5a1khJ3xinFF1PqU6dCt6VNmwtr",
  "key12": "3uDdqG1kEokgMuTBXts9PLvQCN1xAEtEbDyNiS5x6cV5VeCddVYGxqzWsbck2S39GEYuv1psxAmbGUCXYA6WRJnH",
  "key13": "4sYfCb33owPjSZMwgjDcMeDkaMX8ZJ7RuJWWxcsuuYREFuN76K19FsAjnymRSUaXRkAPcMYWqGQ5esQXwbDp1DxY",
  "key14": "37NMFux3hHPkYG36sLNubCZVg6yBiHitPipdwXC5XGRXpb4PvVzieUWXBxVn2UiDvzbUAXg1pNTXBYNTctvqcUcd",
  "key15": "4CZzT7zpt1LeGYrefXA8HRzgJzixUy42sFT9GUG4MkUCv9foFr3Bv9voM77PyqB1EVew1fbHzNKuu27JgpJ169YH",
  "key16": "4CWHSaPyDunYTmamTP9LyBPZXKHrrzRXCJZ2dGj6HPG4D4zPJ9FM6VudWrnfnoKNYQZmvN4Eq2oudBnSQPsM8w8y",
  "key17": "5YA5jim8ZHUPtgQDeZWUCGBcPZPMFdhT71TAXWxMP3MfYnanvLHjpa23Yk2cQaFx9EeeNCSQnonfJTzDrScKwLGj",
  "key18": "4ygtG9d1wFTiocum9Lr8HYE92e5hQS511wr4QHvgbgvK5FfGGZHZiuR8ZG6tNRUjE8MSPpr6irdSardjTF62bZCk",
  "key19": "3U45iRvNMhWTKJJmDsn1hRA1DSVYXNSCGFX5BHM1vKByq9pCU8Rvw1YsYSghgQiuRdKWzNDi1qt6bGwdNgseQY71",
  "key20": "43ZdScEmEBVYaB7oWnTEzx2uxUpusD5cGXNnvx7L1mDpfyWwtmpver2knY7yuhrhz6eRPgkkcnv1T9KZY2YeBL5g",
  "key21": "41ypehXL8SCoVvq3J84KDhCYPQLeWxEn7tXAfzXfJKKGsA33gXevo2MktXSANX4CLn67Z5GLFbDxhbjNEV1eY83K",
  "key22": "4rD1BjednLtJtKrECuFFTBwHAXzajRyqmsWDbd4GD9Y6B6PbS7PvYQhALRcGdkRMDqvcN3nGRZohP2r7P88kHvP4",
  "key23": "4dWafxWZPecuxrgAq7spbKAfBa4ZbVcFV7v6WhiccUHm4X9JYnCbQGpLxEY6X5zwmT589fmRRwkEGgCHzCoFAMu7",
  "key24": "28dZwQtUY4rDDbE1fEACepCs4uGifjJ467rXUYCmcuXefFDACQ6fqj3oqhwLeaWVtE75JvSkbrKQVnccA3puHr7b",
  "key25": "9CrKuQJSrGev6HtpZodQ64tA11vkNjH2hCpHbMmBJiYdptLsvX9fakwsXByRSdi6newXheofik3WPA53Vr8PY8j",
  "key26": "56FLwDjvqSuNbFDqKH6yTmgNDqanisB1sxRRzQg1cD6UYgc6EMCYr8t4AT9dFfXK2fH9gAF1vMGe6zWju1Z3z74h",
  "key27": "35AE6FtoBS3YUBzfj2TPdZfa5x8KNNcwek2mPzAfdz4raC4DwJU1zaceDcJqxFAtbw5C43QCgnJhcbEJ8KnWeKRg",
  "key28": "35ERQZbA2mVVTY2hEJWMLhiR9h9QPG7HDf7mH8zLbpdZp5wkLo9x5ZfAYWhJC5qT8BpdockYrvNT31mzESaPkPbi",
  "key29": "5NDmkJVSq3VfPfXXMHbHis8EdWoAvQx6rjT5J7WVqgm4xS4amHgk4cky3E2svX6KwsUA2pF4G3mmZKaVLzqNuCbm",
  "key30": "23Vvmm5ebmyNHaapN7LivZgDfFXEAt7koB8yhAiMj6T5msvtBm1PkwjFW61rc2o4GQMrLqQCWFABZV9e2pxinrKD",
  "key31": "YJ6FQJRb6BVtRX1RYXzGWTVaCjWN2dGyLVFvsj7yp8kRqxb2oabWaVfjM5HrHBJjpHPBf3zmJEAs3ccSEEykVAR",
  "key32": "4U2pSKbKp5MLuwHZFEp6QLgPT3sQxYRTonv8zkDLfLUTsEpRpCnA9D8LW2LF8QUrgmCAsBnksZ8UdZisda9m7ThF",
  "key33": "5bCfSfcUBrvQTeitq5hGCPSRrcQd1Rjwenkso4VzRQwNKwk7V71zdP7kYnNfVk23ELDW9382WgWgKgQu7ZEWUAeH"
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
