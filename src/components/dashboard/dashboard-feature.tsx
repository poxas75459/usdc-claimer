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
    "28EkYtbFLv2MuDxbT8hDbQaRu3sV6x6CcYEpJMKREA45gZSCwCSqiPHDgXgFBK4WidFZkWPShfq7DtUYuf3vkxHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zv4zcYAN2REPjar6HwJDmgR9CbetwaiXmkX61sMAnk8QhjP6L4th5shoEbVg2tJxQpqctQcmFo5sAig3xo1GK9z",
  "key1": "2xcTBxVeb1faCxRSTZ6Sz31TLd3X48jaV4iEHK9Yb7FYd5CNGPJ1421hFyUsFNMDeEpAsGx7RHVspdDXNEyAsBit",
  "key2": "kjTNrBiUPuftsWqczN4ABrck9sWNEMW8BWoZrojatxmsCfCduWeDVgGXUWMpqQjMn1cX4jdmV46uYpsqn2tr4C4",
  "key3": "3uciwnH6zuf4ZJ7hENFaD1M5fxqrBfxv9XZWF6PnXeH91igM5jybcp2zZfnfLtTDdJY3nMZU8eRhFvKmBXAymmXJ",
  "key4": "3LAJ6uyMhMNWBSKZTGiwAGP9bbouKQRSafUDCgraBdZbkskvrDDp1cLdHsxjgP95CtdpWnVoDiCagTinftu33ToX",
  "key5": "2cifFBWXp1dEv7mWjTFFJQ4hkJfszJc5VpYrHgstBgtqLBbSGbaiBhLd565T7qf4qG6vzy6sXFqRG1gEifsHbZgX",
  "key6": "4MWyyi8afzpvvy1rNvAL8A1JFu1XqrsCjVSqRwc14M71yre11y3wGpktjYFCRtPB2RKPoxie915NYwXxcAwe6Qvu",
  "key7": "35D3vnTEENhScz5ANbx31c1c5x1WgrAN1FFT6XVVEUuzNJQn8tTrZwvDMHukjNJAyvc1FfRqvy2EfdQgXMtTaRfC",
  "key8": "3YyEMY2a3PHLiumZZnJRXcBKG6J5S5vCoYT25Z7AejodLGm9QfJpuuEN2kHCqB2JB5eDdGprtFWJ4UvbeLFtEerc",
  "key9": "2TNWNAScnK7ov2rsTgi9uW2BmUCBvymyt29TbhskcDvVruwtZdyFMisNyFfGwZA4ugUZ3o4xLWj9wxga3tT4tzmY",
  "key10": "thCGpafMoQCUr72wPGLU37XoHdy85jvwojLJM9L3ruFncEjyZ7TJeJ2mib1xzhhn5PoRMaX9ZuLJPgRgxnGqUW3",
  "key11": "25SKref5gW6Jmy5gqaUqf4fZVki19YZoxCffUGnXrqLTSbaXdFHNsGrcJzwAzAxzjvAiURT32XKJ49cC99PoUhsv",
  "key12": "5db934YwGuXjqRXVCYTEidX4jURx9eCrvh9yUFYrbWhahawho8L3E7wUETCQStqcGfao243ibMXfuasxDsrMo1bD",
  "key13": "5aVqLGxJ4fQy6v6nq7zfnrhjhiUR1mu1k3bc2cHaabJtRa2MMqEpgbGPhgE4Fu7wk1VyjUunBFEXRogjien7QSRm",
  "key14": "5vnGWJNevk1nWJsXZ7LuXWbKHg71uowRFvDwBovscwJqBh9EjZiF8zE9wj4zBcwVgsFBwQwSRxiMgQGY8b8gRDCS",
  "key15": "DnTbmsrev1bFC6bMjghYAHtUKkXLQyFgx6KeJKSQjezSX2TuZ68XkpJ9XBFN6iJaP3vkGhLr2CuhB4iGPZNqHNQ",
  "key16": "4aAM89E6AdpbhQabdDyST3tm551hdxbLdGi1ikXm8ifetAheB1QNs2K81FCniEnwiSvVtV1WosJt62F2qB2MpR9A",
  "key17": "2LKDVCLPGXAWbV85xi6h9DKgNtwHad7xxcnsgbEtEDHAtTmTaH4qfPxn6S37BSDyjxGhTRpo55jzh8tL7NNP4FEN",
  "key18": "uqTVsdvkrChb5CcGLdkFo2AGnK7gd3AAXfuwquzc71iXkmktJQhfJYUcoKtdbNjv3ufTZk5ohxsC9bc9yrWjEnW",
  "key19": "4TgrtF68KZwuKvXFEd781AjXajrBFJX5rt9Hz9E883TRvnq3M7ku96Uskg6Vs7jzRABfgp7mJyxHEiSLQVi5monS",
  "key20": "5ivw8WDQVmbdDXTr4XrZMwFte1y8dTv8oejNifwbf4BaoGzK8PLntWTgtpcdkGpYsD9jaz1uzMXbPNaPzRSDFntZ",
  "key21": "5scx1AyfZNBrn9m8WVytsaJ22VyjgxosN57bLdvZmovjrXPYBSgxuTRumu1ygAGSzA1JsxiUckFkNERHjdBVRLk3",
  "key22": "4hBfvkCrCBnqfpe2Kek5x58o5YCpFCWgNh1Vrj8Mzr5sQw4NgfRMWkK37R53AfbzUu45AsCAw6xb2qD9MFiPWmZD",
  "key23": "5Vo3NKrwRoQNh6jaaNrbPLw9PKf3qQzSmgGVzS4xERjcJKPxz7tk81dBjkTGMzhUHdCpBpfZXgSUaAiKBBsZDFz9",
  "key24": "2189ccM9jqcEVWjgMiUJgaWarBeGSqxWPdyZB6x2DAG6deVnzcFkFWtG2P4Pp4m7E1B4ECo1LLbrmzkK69XZNFGZ",
  "key25": "5nywUuwzmyEuFv9QifR3uqx9b4vVs6xDEsHNzYngLNYBuU8NDsknovzBtXFxawWLwYyDhRPF9Bpsuji8g6ezeKvS",
  "key26": "4DuNxVTwvP9uGEW98HjSpdBNyREJAa4kG1FaHtbuZRtCgMdLRN9G2m2bmwZPGTRhwrRi6Hqy8FT1SswfjTX1wWNr",
  "key27": "x7NT64khH1HqwdBdWZ9DSjXXNmfKnh54QCMLzQRzkARVUntVwQhWFK2bYLH2ZjnmvqoJmMySYtg1XsWgx3dFqGU",
  "key28": "25h9F57XJ7Png4R1eJuYxCvvuXXmBdtDw2HUEDUVxqqkJAfvPRxtJTub5ueVsYC2t78zdkvN7Fag64crhFzxwSmG"
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
