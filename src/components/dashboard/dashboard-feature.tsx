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
    "3PV6oaCn4bZgPyxPkyTWHMssAoSZSQG4MBnWHwy1Fp4EG6KN6JrxYhmVXCxMV6WQbXqcimfKm7cq4btCBRvSxSuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mg9FodH9EB3rsuwcfB5xomZrdLg2QYXVtcaWyUMEBFtXnjb13Y8UQosF1qrW5ciB5pdEUXYxK8aFjp7FWPpU7Vi",
  "key1": "4bkPERvpgwGaEXCoUnX6R7FXHMreDPevH8rXUWo7knoAuz4RcDQ5tL45pW9jVigvJr5rDWbfiqVyZrS4qnaFyirT",
  "key2": "5hCY18F8pg5jBEqGc42i7zs9di7SnK9UwHyetjWgxbxP5ohmvQfASm9ELsCCpzpvg25bYoMSEfydEUey7uwVjvqy",
  "key3": "63GUDH8jErJUFEXwFVrKiPsrnXSsnSTNB6yNuV8vUVdCXuemyPzgTgFc3ihD97wSwgmxVCeeHyLt1uLZnkNVQCzi",
  "key4": "8r5HyEJc8oRKj7ortHW9bNQWNeXWFXWHvWGAZ51q1yy9yqZm59Pf1qhsRcVrEa1ZFreqiobcJC3TXVZ6pGte8Be",
  "key5": "mAavGP3zhsjmYADV8A62khvRLFQp73nPbohpA9V26HLQj15p65oncPfRgFLyUEVsTEZasFHp1SbBkSrF4Q83574",
  "key6": "25p1yadRHMCTAyqDE2eED1ETzzjB58jcwptSDqf8WGVihj9t8K2rYpK5fHJujonmiZDC7sqkak78pxcm1e9Ag7mP",
  "key7": "3Wj5LfEFYSHDdA1EbdiaSUKyKVQEAD6TdXTs5J9X3Bciq7hNRGJNcibyUWkmArvAZN68aE5XyExdgtce9cx1uiRB",
  "key8": "2uptd4PVhgKJEHsKhCHkpHHxtw87GMewRiX1Rchm9ZA3pEvittV4xdsxswa73fVjdbV32pFuGLioxx8b6KmgZSCg",
  "key9": "kpwL7XQTVqxYPSNW8dBCGLgJiHSt2ReAKfKPHV9RH4oyKZTKXBb5w3LkQL38KVRUrTdq7KC7puTj6TqgpksJ4tV",
  "key10": "z1LNa4rHBXgHqiWDYLdp4oh3WBTuh9ykZqHwWY3TAbeMmt3eTLMKWi4XUW7tFCdKQMmwcbTWYH9LpgkeZLq6x36",
  "key11": "41bqo8QnBZFZajtZouGWDYDwokck5tsvaUP279XqtEWCrzrDMXaZHrUE7NiCjzSugtSf5CE8yBjJxVTs2zoboQxb",
  "key12": "49E99kip1q4iRvi8vQWgQe7c9TLheAw6nPXzZqs699XiknEmkMNZ3YXn8NGJ95B2qqVd2dee2QxxtpfSUQzxrXHG",
  "key13": "2o56EPiumzaZsjkviSrHm5iZJ2mDUatsPeiguhXXv6haN2x1AeStvfFAry5e5YRVrsV6USAWkdQ9RUyZkzPbsg69",
  "key14": "4wWb5xgmyBCYZmAZB435DinBWibsUtNMXXnqGwr3CR1XBxCLd31tWy464qHF94skD4vTduHkax66BU7HjTS5wApY",
  "key15": "2koaK6YtUPmAA4TdyGXqUwpUUzSghZ1PLt33qM7woMYnNv6ix1tHsVbUV63bVdRBJ4bdkrw5woAKgfhTJyXLxLSo",
  "key16": "5fbqXYiw46hC1KVbQ9nCYXZY962RGENSNnoqjX8cPBRHzxUUXA1H9jj2vJK5nsVDaYg6k6L2uhoUk2VoFAMXwgWv",
  "key17": "2WZdrfiBuoZdZb3AEmVzw3AFtwpJAMZWundHd88oMyxAU6h3ttRWMjoe6X7xR7KLefYGHZUAXgHQe3fumg75hkZi",
  "key18": "22MatmMF3ZJt4FYeYBzHCPeE78JP2rev2feFSoLdkQgnojaUzLgAUwNKXk3mcxLQZyP4Nuf8fCcXXiLNW8hdWwd8",
  "key19": "3LJtiqPXALbtbK92v1f5VjUshWBpCqih9V8Z5mRWaonRoLnNrRBSii22xjoyExXXRt1S8F8edRbyfLPn9oPoJD7f",
  "key20": "4SXm5cQ81shNEURyX7ga4TESspA6tVbLTqUvQjRjHPTNiPZhNnuEFMy6VbDJYooMrciNrpiP81T2aK3RuhL8XEA8",
  "key21": "5dUGhEVNvt6YKD6QRFBPQR4XUgWc6C3fU7jFJdEt9vvYX75Wa67QWbnEQ2ysexg12heYhzgnDtvamXY32SPWcbyd",
  "key22": "hkVMxyHRCXZ2mKcHHU34qjTWJ65WGbu7CDxpsGzeaVuiTLeKsi7fB7ym857F8WQT24MBy76hkhysvZUQtmKK7um",
  "key23": "3LwCh8vdzUZZiVke7SPbpsWXJe6BGCJyv38sgh6HbmCY269J9u4KN46oRSaJxVEC9Z1TNH9P5LaV7MFFr626TjmK",
  "key24": "dm1XFbDAgh3ntNiRjkwNZLeJh3GrrGReEm6ZHGiwyiFqA2Kce4DQHNYmApLfMJabtggMTDBsGTR2PZ1kHzSo5Ta",
  "key25": "2yHVz96eazaV1i9yuo1p37TnwC5s7KeNBcC2X9D33pqLhR5jkzZC1wzVeM3XjcY2TzFwfNNh5hbbTKPuKchRCpLn",
  "key26": "2TusTdUxbtn4TMrwqPcBpPQafbGn8NAdLzfGPuwVtVNef3c5mg6ocAZ2ZuGionUHf9oJnZHFhCTMTjLtUkekC2wG",
  "key27": "5rBws6yyB3X1D7YRnsXqDRasmrw5GmyJ5kLqyddWFPfb4HjP9ksfhnPQoACZ65FpEbmipg6KdAnXJAghz2rVgBft",
  "key28": "5GgYPeesjQh9mZHJkzWqYQuPpQmaojoA1bPtZ5vduQE7xCuY5rC9shno2UadGEakdEkduYFTPaw7Y1e761HRr9fi",
  "key29": "3QUf2CRwpnNTsvGVDfUiYhY9S5wo6meJVyirxNkMWRbWzkop52zDcF9fxiH95wR77Sj9eo7CKuss4oBiwBjxtAgC",
  "key30": "57kFTsXFQ9qBpcRev5eAc8wUo2CJ4Lw6oTmLNV5vBcAsvXXodVR4nGdXu82bFxapdZDWxb3mB3AHC61rGmYGxnSf",
  "key31": "gpG4mPPRRc52e23eL7KPx7iF8WTNJTMds3mBibguFngqQZYwg9BShc5qzGufLFcajb5GhsAqMUCQR35h77KLfy8",
  "key32": "4pGShXiS1PsHBvhym9u8qtnX9hR6BQcFq8K6btdkc4U5WeMfwrhGgg41VdM7AKjFXxR5WBrRMxboGhsEeU52FVXK",
  "key33": "2tCVWquijoBXor1Ug5jLdxJCR6TgCa9JKdYQBkruHesBtpfedd4TgauGWN13Adw2W6mmeA4ke3Xz9vqHXhXBMt6",
  "key34": "2xKUYkaUKruXbWrwqx1GVXFN2YmR41QA9cAYmA5ok2nSYCKZhTNAHz2Vb5M3y9tUA4zxq9kJRB3ayqkac8WU44M6",
  "key35": "Nk59qCEof9Wca95uGe46MEMtaG1gBMrjr4mKHqeqmBA2QKAe8X1TuGFEvEtq6knVSP2bDnDupYGiemL6Po3LcUH",
  "key36": "2bkSPC1ZBpCASSwGxFizULUQZMjD1PBKHRNzm5wXBqZxiNBmwSEbGdggn4ZCfEZDc1RAZ1Z46SS82FsKKgkd2ZXF",
  "key37": "2mjPbKx8MiSQyMbsTL4c3KpSV2H5W5qVDHrAAQkbpajgyjMrzyNXUusDbbn6fdixjkuHnwELjLTiFVotUUK2asTP",
  "key38": "CcavGiJfyjh3R55rJc1DmdH9oBUBuw3cgaupjJK7WdoG8hHzrerLtvNvF8aarSL1utt3J7V2stZBSwHx1hnQBtD",
  "key39": "CLf7wgsYDMgeLFHhJs1hVQMpCJtWUkh9QheiC9kcD2xEbArRyhMzThQgq1zEfDHoLwF2Bt5U4Snzbw77hLWnCA3",
  "key40": "2Bh5yM7BKJwu3uM7D8EsqxYXGRA4hzpQ4ZGvSp3hW5JEPBqL7soKGbhiNs3oSHpdVBUY2LZG3qCs1aBEnN2WD8Li",
  "key41": "5PvejStq1Dyk8bzwwwaGHQBGVCXxdBPjT3XWbapGxpRNUoHabVfNsE4YAKVSrVZcWPLPFKzhHdNJw5DAkJEEoJSa",
  "key42": "3Q6LLMjRRcgtfxEJ1naZa15D7ab7kpts54HCJN18PUjheitBAkY7eYPb1rgXDXTDXqJ9stogtgrZwhdSeVQLeKHK",
  "key43": "3ZY1hEdm2NBbVRda5aTkCXkadZmPnSufxzf4v2BTrFvYKJeHDDZTqc94xeRv7CgvSDTWJn4nVe9tn9hSsA4Rr11p",
  "key44": "393HLdTJ82rMmSUMBmbq99sTa1sQDcXrtfPS7XyMsNnSckDcDyBFpUA7BLq96FfGLYrbs6taa1C7H35PQZwFBCwR",
  "key45": "GiUR5hBjaBbPcyrHsSAqupu3JQUSuVjty3atHGHJxbQx5hK8mKUCbW244Ydjt1sfvytfTYgy27H1VFhzQiwQ7Xs",
  "key46": "5pM3ijCJFEGVNCx2jFP2YvEx6HZpHzuShY6fEgoUZLZunx1mfWRFHeeeEJnHEfbZszUCcxtDn5nEqesvjYJXCiG9"
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
