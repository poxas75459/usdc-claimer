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
    "4hBuYtFm6ppC25d2t81K668y9AUZLXFN3DdwQ1Rho4pLJevfgi2aTkZ26VBzhRDwLRdHdebm6Ev9UTG12ToJEQMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZRLZUQnvA18L1LL35dQMcedRadKd6RnqZnR7zGo9SgtcnMekGZdU4yaaLcZbvzwtnVVA9BFmkrYyZZSqqWuecBr",
  "key1": "4Ec9cpFQoyAJUEDEYGduGkv79dRG7otz91fAiQu1kZGuyNf3HcZvjTQquoEukCtBMTyCwdySmHX7oLKFSjGbe7U9",
  "key2": "3SpZ6jQMcDKx21yMrMgyszBVy35Gy3N3dYbnAaLvkp2ASdaDztPAk6qiZe82UTagqywAvRUM8PN4Cdvt1zKmmQ8f",
  "key3": "2hWrGpLHncBiNgf2JZuBxeyhhQDZcDA6tUffMPTdhXbchYWRZmWxgSn7mkRWC4YBN8kkfApF9vMDBVcgQuizP8VQ",
  "key4": "51P1rjz8PQaDMiB9NAiAoHSgn6fW3jw1AKH1j9wxhFaMNp2LXjPFecsMpR7C13w4wrXYQdoa3u46sxwpE2yk6t8f",
  "key5": "44wsrzbHJNckNc365EEobuSb9KHbxtAiL5AGYP62StbRce8PiLvq9F5UwMA9GRgKLU8J9v61QxrmVvFDxkLgZo1t",
  "key6": "3KP9dvRSgwJcSK23PP55Lc6BbrGWXtp5E3hGswF2XCmPjq9gUarXXixPYoFo42Sme9R42FYnYXRcGPZcHBmeKsXK",
  "key7": "3Dtd5Cpc1a569ttW2XXrHtrD1YAZxUPQsC8E2nLq6UNsPdj5v9nQsmswwPm8oDPiDkjbUL9PoLqRmCZqi3zqhiBz",
  "key8": "2GXAVnzTo41VWRGPNtjsMX12SweEvaAMfXM6B5A77bbtJgiKigTrQb1ubFtDmVfZLQ5YuvMkVFRtqaYSCY7Vg9nV",
  "key9": "5LjbzFHXBqyYVw1MjQG2UPLd9YBMRRNtJ2Q5wfc5Eai3KtY31FZJKtaQ3AjrKkBDDCyMthAssxTtm4Ea5ogEaLNF",
  "key10": "5GqZMasRLxruaWYyegyKgfRV8AapviYqDor2xSGJ92t1Yx9HMrwyEebNQSZE5S5VPABhoKGVTK9bRDD3C5o4f6k8",
  "key11": "3DkdkDBUXw7atoesvnhGKMfyYtcnkTr84Ln4zmsLi1xLHyzYoks5gSyZCnJouLEEajTr91FMLsKFGBDWFee6tMe2",
  "key12": "4cSTLpb3BAAAPzwioJqSitPMtGxXYJLosfey51S4Hn3puc1G5p9miLbiXVQG7dt2bypfF9rVWAPBXRqnCk6PjGLo",
  "key13": "2D7k2bTRuR5yZZRAVu4XEkQBDaQqLTTt5NoZAKpu3riePiMsBkLY3WMm7Cdh4H9TqosED95fAmCyCAt7mJyqMXgL",
  "key14": "39c6qHKLr64uV4tUdwoRQLC7BtCDdLNvjE957KoUZXhP2cGDowbkbC8hVEf21Y6Nh83A8YGxozP6xUaFyn8YiUZz",
  "key15": "KPDHEFuhGq8m6nHGdovxFpHCbWio9NMDfBPyeN33eA7uQHQphwdTkvvzvRd6CoecKvGFzzR4mvhqPzVc7rtEZZZ",
  "key16": "4eNET7t8cQxPjS9NhivkXHuUc59QWbuFAZFmpkpFMTynbCuF1eoha2KcN8mkTBnWRhbbhXs5tJqjxzPev2xXJx7A",
  "key17": "4WjP1Xk3SjSFTmT3s2AcUEcNokomeBrrxYyHXCHvBiZ7mbuyVFiQfjvRY5yG2tiwxVMWyGwbdoDN2iZaphGab9fx",
  "key18": "2hKSmUvGFUWCtX5mcFvjGbwWh6GN6aLd49M9fiG9KMrMqi8HisBkfPma5n6AZeC7Fu8dgomYrWKfnAF5u2jr58KK",
  "key19": "4gvSH3dxr9ACPuqiPjQyc57cEQneQ7o6zmEBhjmtPXodievgXjN9BsYemxbW3y5BS1GrCTuhLmrfPidZYoyv1RMX",
  "key20": "4DyaAKBCnw3j6biee8bt9gBf27icjmTj8taYDKmLDxefudsrXZBFDPUzeV3uWwjLJaXVYvNKyGpPSZKwfmJpopCy",
  "key21": "3pQVyXFwRbTsx1SBBCUKriRY8XUaAtw58staHVVN9vnx68NCyHKXrJdnTWS4y7mMGECCwbLvd6qeC1mcALRk4gUs",
  "key22": "5be3rQMxssUr29bVhAYj5dwL2Sv1d44ZDDgiEXgD4SEaoXpDAi49xVgXfGi4oUyqXaWRwQRncT5CPXQnGTL55JDv",
  "key23": "3XuWjcQ9FfQ2zAidz72ZqDGksZFV2qHmpB6dDw1ouKJjpzC9qjYHFLjw7htwc6Nm2AdMA2PVoAAh1TqJLHRkBmk5",
  "key24": "4sSdcsefmXCKUt9x4weeqiPpgXbZR3zaeJBrEKXXYsAGwvaatqK2zRtjC6wRTEwqTFCzShTxAZecm29wCWZXZyxz",
  "key25": "5r59Sfw5xunExpr2Ra65DKtnHo5chhbEwWAiwbCuFRuedy8X26Wn4wnzkpLrEssVZTDeV769yTw4e8GphfKJDjAW",
  "key26": "3hx7vN2gRvQPDczMdWDsoiWSjoE1Sy4xMqwEZ4ea7nuSLCZr4p4unhCUbwrvkBNxAVX5DVGYymgqERyu918hL5Tb",
  "key27": "2m3tu3bimNH3TJ3mzRzNuns6UdTuJgyVTbKEkLRpVk554mhKyzQUaXwQw4QB6XGnk6ccsBiDqowxQJZUs61pC5UA",
  "key28": "3TpY8bshWMnaVTQ77HMwzEcy31Z8yRg88Eq5RbZVFHJNiMbvTYJvrup4R8w5o8YLiAmnisb6XGEK3UujsVnr2BeE",
  "key29": "2oGKdfJPrxEAqpCdK98gTa9MpyaZiFatkxUtX3Mqgc43dN13PJk14Pz3gaNUcXmcQKxRQ2BeTJDng7heeWStULU7",
  "key30": "8PrVh2XgvAc9iGy8YqJtyvX4HUi7MvXFjvcUsJkZnaGXgUoHp9r77rNGFWA78Rnwpx1fP84dsFkC4Bg6wbHXJdZ",
  "key31": "3iY3p6tcj6yoAQArPa9CutKbZshnTccGhBAk6aPueCCXgWUqwnTq6wW11mn2vEtPNGUfvieExHzi94hwZCjvHRQz",
  "key32": "3TfyW5dggmm7wnnMiaHXHRfhRGBgu1sMvWNPqmpQGUNVYBWAQXiWjsGP3iedPUp7nY4ZBmt6niZCxRBywike9zur",
  "key33": "3pBJNtdYwQMXp1XPAA1AWLPMGmvsUCKSTgigFecETFhN1YVp4zFkLs4AnJTkKp3L99akXA1j8EQpfaXtDrMh6mv7",
  "key34": "2xp85P1mBcF94SbmPZY96bs7hZanieU8WPXpJuum3pshLMQTAcUgBvDKykgQAxF8pNbXbFJH9BWXWxCjBvqRXjUh",
  "key35": "3x4d4zsNi9pq5QCVyjxmXQVit1LTEvR23jjjrABFQidzmYTyhNH2gVDKmQ9mn1birCrA3j4vfnWe9BGWiuhniHbM",
  "key36": "4GuQghGNtkj3kx1HkLbCNSasCe5TWeXCpYWMRGGT86YrJ5PWgHqiNijAJS4P44yLgipqtjUS5U6WmDn8cP2Jfhpp",
  "key37": "cpBuXD9CT1Du8jUCE4NT5QwcWZVYquzBu72MnCwgHkM2tqnHzbZsGDDuzAoyQocWdWvSf5A8p5V3oFVUrD324oK",
  "key38": "4H8uqSgHt9jh5u9cJqGBweV3XBGkNxaUrwZKY9egtMRLGQBAMczs2xDhj34DNmhf9KMkuzXKoPASiETjFuzHsiBC"
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
