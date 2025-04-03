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
    "24EvbMBKBsGtuu9GX8SDBztvmeU6iD9VhE3bfva21k5a1vo9tALQjtq8pppnLetJme9gbNtP87CTGca3YF6my9L3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gMA5LhCsqPsWGnwxM44hd7TMsrADHDHTLXqt9L6FK4HL3xnrGYeNyq3zSXHm8xz55rD5chAjTNZnDYr4F3fHTQU",
  "key1": "3Wndez7q4DDodpHTbjnnENq8cSeYL6nuUZfRzg6rY9DQPVBCyxCtDTyV8x1gw66fYQjfbknwsnouA1HqRiEz8fqn",
  "key2": "51oxjYVhyNDxKSzwZwkiKr2nTg6jWREbE7r9ktdnQjzx26m1VjW8Dfbd68fKFB1NcftK5Zm8tbR1PSvjyaMwaQfx",
  "key3": "5tL5NvUch9wmU34eYkSZrJ4vNmtQGk7mwW9jfpoBtAtyx4v66TAhiaqzth7UrpzB3SAYsZ25uJ9fZNEViuoMQx1A",
  "key4": "5GvByHtmsucQZz1SjqnhSbWNUs43vxVdHWJh1B7aVWT4kbUq6RAWcdsHH75nUHj8YKF5vHu3NQ91fVt7N4gxQbSF",
  "key5": "5TDcdgZZYk6XyumNtXM5Xj8qVuYnTeiT5U3MQTVxe9oxRcnM6J5jYdzLe8C8s2yqCQecDacG1x7i5GN5Pv17cTu7",
  "key6": "HHvSoxE7SV6vu2LdtvVyzxw1RbXFPaeCZWNNqw6Se6JFU25Qev74FQduF88u9sC1BhZCmqJYNvKRR2DdT7om6iJ",
  "key7": "4Bo6CjxnQuQsdJ1Vuk3MjHyyTCVp7goDFjc9fNYCoSU8ZtWvQFeWAovDSD8tQb9hdzvEPC81TQqYp9GYbyCpoAFX",
  "key8": "2cphedx4tW4jeJp2AGvt5gozbVYFXxJKEC5YGA8kS3BA6Dzvm2r15aQpku48aYJhs4rZ1CTx68aMppos48y9M4CV",
  "key9": "3aZMnevW31qpbAuZzoKquYGaxMc8Ftm42Ewq33jVLXNpLGwjq98R1yr55zL9wAqfpFkq9ypKEKQ3hGtmcHkRhRRZ",
  "key10": "4kK45GWxHPRbbbjdwhyS8LcNkYSPy8P1TxWN3oAuFT6NxPSNVNsJHJZjqMtyJDYWFFd5gPaiZgNbK4C33PDU53VF",
  "key11": "YR5uz3ZYPaccwb7uhuzLCMyyoad6SiqNBzYwTMyQNd3wE63nMgkRAAjeCZ7vG54nbMgSQbe2CAeRadpQQVtqXLS",
  "key12": "3MKevfERZhTFdu6Zm2wpWM16U1h1rEgTByBifvw5tB3FotPVQhW7mWHNybxqd8wehc5EYf6Uzx87FFBzSdoQdT4p",
  "key13": "5epdN92PF67NC5QANfUHqr6WQr59c2igKi6CCyuQ1sUTKD9ENfqpgZzcdaxCYpdFadcE93HBCtQVun4vrCxjUuUB",
  "key14": "5NjKpeZmssbTWv9Hau9RQywCrwvRYEsjYFnCXHj1a2zpEUNeTfEe7RXcADH2dpyXgoFi6S1RcWwyLSrMxDsgQU9C",
  "key15": "3NyzFifx6iFCKk2FXuF2mFUWoHZ2ZoaYFZkoWe96xyFpRpmeQkG7pdJoy7frUVfRrjuo2FqCfUZszDtrEbaBYKYg",
  "key16": "XzFawvatn6VWhsDiQB1w9TRAczBACopdhDia9UEkxuCdjs6JEP2oSJYA1siZpvKR3gCdGKTtjUUJ5E34yJfyYLw",
  "key17": "4KzsqYVbyww4RtwjsbitycSuBqQP2stNSh4axFoZKwUoRVQs3gfbSDt59uSNeJUWpVfJMzq5a8kFuB5xu8iBfV7F",
  "key18": "BiWCqNqVG9S456tu5WAkTcfhZFgYrGRh2vn1NgUuN6TAKjkH19nnaQdRy7giY5EBCNF8cBV4x9N95vBp7zaxvn6",
  "key19": "4pt6xEBSNg4qgcqKEUyZZboT4Gj2oSAkuW2Q3dwCPsDXR7REsGqhAtbiyVyrWwm99zx63U9DCbdcnTEG5f8ifvcy",
  "key20": "3EdM3A2Ks4vRBRU4Bg5nxeU5nGjGPygPnKZVJQT6QqgVVbTatWpPZbYM4DhWYREdGoSzvKbjoB9zSd4ZFatuhohn",
  "key21": "o86FsACpKqjGUWou6ZHoGrJcERFfMQr8q8ZgEoJrYApFXbvw7HQ3ZN4MeGxmR6yzhVY4fzEhtcRZYCCTtXh4Z4S",
  "key22": "3hWEZ9CqyDGYQn3Y9v62sUSNNdoCCNpakRqoPo8k4DPnmcDEHdmz9sRetMBKb1MPXCvTUbRMFiNCzt9dDSd4K7Pc",
  "key23": "mEHjNPqPo7VSGQPsWEHfdbkxfQgy7YLvxcf4gtEFEBscSsSExvZG9KWddtUfREEBneBLb8rFEjSm6W15ncSg1ew",
  "key24": "nnLVZ9oBR48aEpagsaHmF7eSDhKipgDHJw5y8LhGVZT7sCwpFN5VoZVjHrGa4twfrWH7N8QrEjeYJReVzFjmEX9",
  "key25": "4fT12goq6AgC8rkZWMLEASJrfP5dpmo9VgAhkgdnMCbqBPqgc72Kz2hdm3P29zEj64pTyhDk26Yv8zkhzR6eE72F",
  "key26": "4eBcnCkikd1GxQtvYCoStuPAe8AywijYCLeBUUTKmHR3BUHuKXKj8bcjFFKAsPrBAtXF75GYSWp8gBpuUHLM4Gwr",
  "key27": "4T8nz2y99WmLKYQ1Zuob6ZYBTGcEnhbE9DkGS7PpSNy9kottp2V9WnTkX7nvBjUDWsLk3savKioMdHssk45HtoBV",
  "key28": "XPDThoYjWza5szUJ4v2cdRc2qnm7ek4cfnnPZysJE1bAgB3SBmUZ74VvPGczvFG5D2ZSeYjTcVyKMhatdbdGHnf",
  "key29": "2XspSvbhnnkn3ba8P2wufDdFUdMmgo6Z7ADkDYNas46pcdXnHWeVFKhCKAJJ9hCnNvvHuceYW9qiMBcJrGpXHFyC",
  "key30": "3XsUHYdvK3BS24ex1W1PtuAKPoQyDWH6DatRvuxJJMFUxjLWM4FJFefhMxGa5PGBrnB8ZVdxG19u5Vc2LVQLXGg2",
  "key31": "4NsPFRzhj8d2ArgB1S7zVhoqoVA2jMqBMx9jgw9Fh3uU82XbrtLK5VmPrYYyxtiVq4v1WPzSUcKxayYBv7635w9n",
  "key32": "2q8k9pQAdxADg6C3VugwS9DMAXKLPaHpWKWtjvEzTznDwy22GraCGNyE7yQEKhvSyoD4pbos5aZvy87TEmwvvRFD",
  "key33": "C48bW8BkqAW4fZMvwEuXFV4iVEypQdHvyDLWKPtVnPew1H5AucVwpi9Kjq5p4nrJp9XY6irCCRrbdV8bMKdJMzq",
  "key34": "2QfpWN1KPQ3hiKZ79NMNZmZj1bGZiYN9LMvqaXNCrFYhXHjZWdcChi4cbyTqTGiUfFpxb2ysdoyAjHp2UmdEzUda",
  "key35": "5ZTuF2q3zzwWUpTJYyFcwonKKDoos9nFRk5eKM7GM1UPL46aZhjEhs85hBpGdGHALn6QSaN7tkCJYiHDxRz4uvFq",
  "key36": "33a1SLhjy2myY58gRTMbMg8r4WWj3i3jbzwLpBARaGr7uz64gFSyHr1vxgV8QWmpbPYR54hepVn3Fga2y5Y6sahA",
  "key37": "4FmbUJjpdNCuzkyZ6WTXumfppFHKEQ5Je8fwjFsFEMHwJassFx598gTZ1uNfo79xEowDK3gMnDqi2zfcvFZzVJme",
  "key38": "3QPqm74rcjatAXrZTWVAmzHQgz1gW9w5YRrPSmsVHTsX2rf6wGJRxqXGxhCdopdQ5Q7WFikgvwZrQYbrarG9FwBa",
  "key39": "66FPqiB1TQojEZk2uqGg2ByYRMQsPY8sozNGjkwoN1FjEFTruqMQFEPXcjTueSq5T4RgWj4uZQeUWHgoxGa3jH6Z"
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
