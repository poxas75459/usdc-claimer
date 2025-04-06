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
    "3VXVNXqptgS33gmvG6svidxdRBkGs1gnuDApHkAtmW9n9UMEHP8j3By2xLppbR79bjpfVxyWBzqE9TQ3hHdA4RNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ToaXxv2xTRpFdfPzd2cnXkf6pVWh2KxoShavKiEvc4hNh74Kb7v2c55oYkymZgJE8kPJ5WQEdyferwE1qtWdUt",
  "key1": "3QBneL4KsnLC5MindvNWJ8QCANrTERJTpiuWLs72hqEh7r9fECXgwYwBARTU5N3rwmW32aeBhxzw4HYhxBtMPQJE",
  "key2": "3BhsSDzAcX3vBkmEpSRWeVy8vMTTi74GRaDodgiCErQ8H28qUrZ7dk2T5k6xvpYkxYeVXZ9nJntUfJuPRSaweb9d",
  "key3": "5C4EZq7Wk7H5u46DY86CrZMdU2kKG955fAKVU7vaQh5K1VDcQ2KniXV7VZVQJgyAmsEwceiAfgka6jDdDZrY1Eze",
  "key4": "2m17uEeKSGNAjhZCM4Jg97H66V31kSNSAdEoPUd2zvPyDMfw93xppAD4b59aXvuP3EAzKFV3weezduS3eZfrHHWQ",
  "key5": "5miDxvZLbeF256xf5QCnLhCeapk8EBumi4qUiMBwMow21aTeqEiUosyqBnZVum9c8zone5LLL9Nv8EbqsjrYNiyw",
  "key6": "56czcZFvZSmu4endMdhVnZXq48cnbX7oyhyXkGEj2kFhFSmpmQYpJEpKYUti4r5Rhp1wfwUZkFyxjpPgbjHnfwGe",
  "key7": "3guS4KmpT3KBqcJyo9ZuzoWJXQb972uKH4tS7RytvXNS495e6Cp3XFrx75tzeRstfQK93NhwkCuW76Nc2AcmS5y4",
  "key8": "4JRSsJPQroWsG4wVYuQ1fx2ZpyFecFVVM5aCvrYBorTrM87wGuSMXhjSoq1Zn4afpqoeZ2sRBGjAsczoBRfyEbwf",
  "key9": "21siEinQtMmLRkYgZgGYrqYr33cFQj9mpnqzqN2j2yaiZ8LE5XZSTqgGpoKtmBtQSD6CuYdvSGWErjkrsv7wYtug",
  "key10": "24eSo1opBoN4ygJjMfU3pXrWnohuWYXQ2RxSLfaRqkvLuC8AfcALijCgPVrT1wfucnKJqrmBobyDp7meVwu1chid",
  "key11": "4PQm2NSqzEhh9Wok2zYA1r6myGWFLtfUwEF2ef83Mg6F293oTz1xtmvnfWsczDjAzoXvzAKWB8jrTc79P9iTUXyB",
  "key12": "pzTdqkXo12NJDFvBfM8VA1oB159Rrabvwwhnu9jEuSnDQvpNkjKMA97M8PxFXRb5YhTabzLn8o85fn2s6y9UcJM",
  "key13": "5UwPCqZQM1gzesDGERfjku6ZLUDiVVee5nTNQrfUbM2XiSKNijEu9R3B9mzzmxvs5UNbXpaafwcqzGciqUXVYDo2",
  "key14": "5im2yXm4jFcmNVaYtLD8S5599NDr2jWndY5zJNJzdE2n9hufbgEXG7X2a2D3qwQsAbkcvLfhXBPRnpNmVHYT1fBR",
  "key15": "GVNnfBq1no6hDbnXVwUCgEErPy9SFXSqYqCtgFyBfSEUCCNE9zstnDJXQ15F3wRuWyXLPayKuPsWMca3h8YdSCs",
  "key16": "oFCbV1KiTGdF2CNc8JRtzBxV5AuPXz6h8Mw48R9byaVqktQVA9ZNddDkG9vvfQsPjerGzwm4zP9wZzdWQafT8fy",
  "key17": "3pDSBj17DY59n6aamFbzyLz1j9ziS6Xf3yL1BfoiKYMq7ZQM9KHx6z7tiJGds1VNtPT1teoESmDBM4wP7YCrrxMy",
  "key18": "591kdHDuGkWd1XLtstQogpja6R8Y9Vzp74w49MykE79EzmWyibUbvW4BPH2ZcABxi5AL4Mr4zsiqpQoY7CTCaTqg",
  "key19": "sKQU8xXcbSVRHcbSKPM3DuYe39DENPHT73uvHVKMyuHLeYmkTx6L3swE9DwH3QAfAKfLSuRwKLd8cZq4TvN9yie",
  "key20": "3F7hrzTLsfR677xXJP1WcK3Rp8GnxPJMA3zHTBM6k17oo7ion5PtrcMy1nVX16RNHU24oUzJhwZzoJozEVgz4m4z",
  "key21": "2YbQJqRgz5UXtqWtJ276S6Q5FwdM9EmiHJFTaDpy2cknzw1AfnAxthyNSuTUq2sZs6NeDqP2rpNs3SDgqyZ6JLWj",
  "key22": "429QwCvzJUjzEYTVrUGNg9Y8eaNuYTegnNUWhqksKh3JK1GybNtp66NPqV1gHcrwQwVRdEc6P23F77ftWMs3cq5q",
  "key23": "4S2iCCc3ynaH59ya9dwG9SZeX9VKL6SZZ8pKyEnQQkbVsJYuw956eBbNvr4UDmkLKPMWgcGu5gn5qRVD5HnRxCnt",
  "key24": "2qQAD487cBi5M9oEtH9bdtACvMu5ZgRfEswM4gs1C1djKyKw1YyKt47UkwmiRwR1hGmbuNGhMUYBYbLRArPpcMfW",
  "key25": "q1BFhdAYtFoXsBbaxdxmTFBrpR9HeDBTCmEgxrP5kPXd4CKvUTc3se1tREynPPyEZ8xJ3jf9x8ESjYeHguAPd6F",
  "key26": "4DGqBH5sySEpDCbhbUWYgB2FzCppjYXhF1hsUXZiyobiGY4B3sn1GMKCXwpc8YUh7BViJ3W9PgT4zC1rBfzscPmR",
  "key27": "5W38r73mRwaJNb5AfQGCaaKwztFE183Fua5G4sob1mCQmRSCKrAcmWtk4Z7gjF5bFmbNQ8KgMUxwHf6y2rptPZF4",
  "key28": "vf5cVnMLGxQVZ7SBhpbqfiqGeXr5Jku7yDMzonAbakeUNzph4reQLJB3c3AkQ9E9ZJTKDi8eiWiTYeFkv1z61HS",
  "key29": "4ewWhpr2dUTdkjNehgQtNJmUwP2dHWzG2i75mh4m7AL4H19X6zGtZwRNU8JyXpKgnuJbFVWjqw4NGYZYu7QAVmCz",
  "key30": "2qn8KzE8B34fzbWpnEdUHPiAWuZu7d1sW4DHo4TbjPLA9CVkvbvaf19tPY1MZ5SHHrzPd2pvrq4suQa442x9wGot",
  "key31": "2HGG5VyoGTvTUY4xdBgWudY4rTxPVyHdrNuL6Qr6gf7VoKRMrVDUqUfKf5xzanvhy7srMitXNeirfwXkdw3knago",
  "key32": "kpGSKH8JpJW8XGsqRucXWNbGnPWo3HfjVJXnQWD6rCCcBgEWHcVNsw9f8VoPMUzyse53JbHorza9L2kk5wGjPmU",
  "key33": "2hgTJnzGsgeoBnye9SbYmi6azkAQVQGw1axnf4oYNNMZiupzU5gmC5in1GkyUtKLJRB3fJRK83KBRsAQHCLNYYP7",
  "key34": "omy3nDT8d2M2TpmEBsUT2Vp5hCxJVwCiQWboM2ziedrq16M1JZWX6uQAYAn6jTTYk8M1yhKTS94FPJoxqMKNqFL",
  "key35": "2XgS6Y3ZM4EBrMn5kfpoM1vSjYgnjQwQ1kCZ8G5A7L5CBBQyHbRV5pDqk1eomeA9PGJpmtW6cbYMUNyKhZgLnaZA",
  "key36": "5RgYY2DJbiQ1WmhAPAvinQ7PvrzF6NudFN9fFWe2T8L1fncqwXGnbSrt7MXiUafHGfwj6aQrp4P9CWQyq2egrKJK",
  "key37": "CvTT2Jc7dvaynPLbxK9xax3zYcjicFXxaoSn5AgJY3TQkm6vw68uXyWjr6vPHC2bYUYC6e1LmrWwiR5dJgJ3bc6",
  "key38": "eGtF9y2bgQ56UR6yUrHbH41pLwyAZm4oXLNTJjkQhTgE2ffrpGg8ghsqVcK4ZTEcQULto8P2MD43qsjm9wv8Lvb"
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
