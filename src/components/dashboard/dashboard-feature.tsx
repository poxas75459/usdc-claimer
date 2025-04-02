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
    "55mHFGksrRHMzbe25LUSRJFAuCQLfK4De4bNMJicC96LaeMzzT9joBzWAEpecdxZ6qbHvT1VCmPznuZGonk4EUfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AQU6WmqoS3NebENCqGX2NHpizqUdeWrGoM1TaVg5hY1Mp4yBzu4D2BUz3djXLD7CMFDVnZNpVqEh692y4zAnuS9",
  "key1": "5pSHZVaELeLaRQwgWv9iMMBVu3m4eaR4wpPoVm6cXuUGtqKKxwCFL3KuLUnvap6dztKLwfFQ2jB5Jy4swZQ6Fxth",
  "key2": "2Npd4oucddkk2ytjtTVew7JMn46Gdd3LQmF8j4XS4hjWvmGV99wGQwXbGo4DQqev7xmCEJBtuSCVZZhzx93H9nHo",
  "key3": "3CrdEAfNt1B9EFkp5fE5m5MeEXiAevycwaCoaKJMXN9GBoo69AjeYQYPizoahYmyKhME7MbgfzMj3FUB4amgYH3E",
  "key4": "5h8dVsVMk4ZhCBH7ufmvaNg6w3QxC1TNzitj1SnQ2rubnL7shdWyXp1dTrTwyVWw1pBEZfsctHCp2q3akiPr99m8",
  "key5": "5vVzh1jXBVPbwdVqAVVkiuQaQUGiYeoWkgHqY9DHnnfFuP9DaeEgsgS9nYBKXuC6NMGMw8X6huVQmJg1rE9EYVve",
  "key6": "pBrjbcGaV9txNuWEcG8wL8aD9vrVmvwnyeV9SE9GuNUwb6yM1GtjnvesUsoGxiz6BPNbU876ygbNkHFuM4dAapT",
  "key7": "4XmqXXtqyTemT6be2eWuCUqRjWw8a82WWcDL8CCRMmwYdQjHh4PyrgzxnMd5WmPVPo9YUSy3erQrouh9KLjUsgn8",
  "key8": "5C6Va1xUHUQmFCyTEKXm5bFjixJGrAADfcQ8BayqGjyC89dsU6NMXCboNeKDdx5fHXdfytEEK2sKn4vA9dpqYy68",
  "key9": "2qN12LdjmXoBaJReBjB6DtbPAWN4oR1CGLchHT365RYaSUEMdJZbuCjgdmBhsJR3KbGjAZPtjG2fBrxCfN9DaMMK",
  "key10": "wUxMPjd85VgeBWcH6nusNmTVzPLwsLWxXhaJ1x1bbUPqoBkArNENhi3Uke1MHYLUEJUC5aBRme1mPvbqthYQwef",
  "key11": "2iZjPQziT2Ahc26zDnrpU5QzBNy8KwCyrXDe6ALnq5XVtMdhdusK4zG7BQyj4rWiMQueVHrkZGed7x4eg81HwjtT",
  "key12": "Wxh2z4FfEAkhuCpKRVbwuLYcWBLLe8MZH7hNi55oPEcRaUmhpfiZrSpqVB5Rcu8tncMR1nHRLTEethWyNcuFSBu",
  "key13": "fbq8N8jiz6rAVGdrxYkUE5TsHC3fnY7ox32orxBbNVwCx4JxuoyQYd9J9FEvMAEgDG1Ze5cMTbjngATmJyJPqRY",
  "key14": "3PgkX1u7thytJwsCZZUPSoZuk8nUfZvB9CH9S6rPem56hDVVbKKJnJrHwi6Z4fqKCNsJ2AwqRmZ3FyMBiYB5ykWS",
  "key15": "5Jzmsn3GzMLV8YfKqCQ9ePbk6zxkVSKRufyZS96Fr26reHLW16HZ1f4mgHcPRdKmNGqzabA9SCvzXRNTDwNbrBkt",
  "key16": "2TysHNGPzMr1cvYVrwwNLE8rHVFgiVBLLUiKCxzCogitc3AFyVRB8XaRS5ZQ9dpFCN6i4dTGekgHeVEKWxpjSUQH",
  "key17": "3hYCq2zb9M8RHBx8rvaNxF7apEKzFQJtnXobwpMEzwDQcnyPmHz1D3b5xG8BfSEtzx6CFYqGfaZc4gnUjxGTWWaH",
  "key18": "5nXEVBBniszYimnzmqC5LZtLD7G52ojkNJVuDLKoxhf5rEV9T3r7aCHvvJUZArdDhaREpdX9MHUApVqHD5Lud7m5",
  "key19": "64KVEXhQXV343W9TeXuaw1UN8m9M3SZBYHkQDd4tR7iz9iScKcphirqnwz84ZF28ie48aYcj2zr876BeZy2EAr4D",
  "key20": "F8kJfai8GZYHDW3r3cNJ8gSbHKtKDmAgdUp4ANrb4qNSV3moNwcMzWTeVgFbHFjNWPCJwRrk6zKbXDc8GwFgm8p",
  "key21": "53BP1Wd3ywL5BJPdR74UTe4PoNVZ5u3X3kAZLijorh2qEcGJo2CdaCbxPMT4XEkRenPHnQKM4eFh5LyZsaH8xRsg",
  "key22": "4MoVYPFAQ43nFxSRzUvrPQi3AzkeqtJqy5MZo6k2dkwbGosNeukyX73o3Z9Z4scFD99TFw1DLJoiJz4H5uBDhCCY",
  "key23": "5uRK6GUCuKu7yhTndoCV9sndehfPM68HAG2XuXoxhrJRfHq9V5sUGejz2C3rbzBc7Nixm9dznaHXQrBb38pZvjY3",
  "key24": "4biHHBoApa2pwxJXXyVTTeSLxgxR8oHLiG1He5eShSCzof3EQgdCMGffoANaJJ6bnkkfSXRndXhGDf2vR5jGJUoM",
  "key25": "3p7MhZXaNVUZ4CfrB5ve3m9WbTsJFukFm8kYaiWjV8ZMYzwoiN32b4T2Fgnc4uPrYuRpc1j4m2aeW1dyqpNNss6Q",
  "key26": "7BhsLgKwuXu7RzGShETyTEvXjqjVYpyJYvDb489pASV2GWbtu8tJDeC1tUoPk7eWy2fm3J5EfetpBNKPeSRME5c",
  "key27": "3ieQD7rowYj9L8FsZvYtoGWB7gYktAqgoxy5Q8tmnz1CbFB4EEZTaZv5ToNmD3atHRGG5wEf4YT2wPPR6Nj2uBNY",
  "key28": "5shF7JsQBhrCgxkFPt3fgAE72fZfqQLpdA9LpJzcYqeKTiVmYp5muTWDmjccViuNJFaQ3jywmTRoVxNXBabBSwCr",
  "key29": "4SKwd3RVQUg3zsSozACvE1pgFNpFkoSJvbMZcAmFak8G6kYNEKFeT5PrXTqKamELSFxk8GX5J4ChXqQhg7zjVdRx",
  "key30": "4rHHrundUqhfsxThKAATswR8Loc3rLkB8A8wLs58Uw1R64bS2Gesub3FQB8uHirf8rfoaPNwa27yzwsGdUuzoFnq",
  "key31": "22nTbx32vKSsKpaQfkqMNYuRkvNRzF5WJ2zL6NnKvw2KHgeD8XkMAQT5nGrHKfg4NB5DMeDWVWugVPABhxc3c2bv",
  "key32": "KA1KcwQV2ksufQJD9ZMisbojx2e1LnBDPfPAh9roQ8y8sVT5eFcEfH4q2gWJ1c5S5gFZtCXffzhTnz3erzVK4d1",
  "key33": "2SeN3TSBY4HRhncC78NcsKgH2iB8cWfMkF1PKaQe3BApmoWNzVdxbDv67ZfaqVrW9upD1V9vUVzXueUDzE74cywP",
  "key34": "2eXoX3BbtQjQBFQ1r7GxGVeaWeLN9ZrP4qrfxNaUD2bupgmjzMa8X8rFPaKiHHFPQkBLJcgwsR5bHkEiT1diKGR2"
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
