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
    "5Ue5uijFaCqoz443iJDmiym97tzshrur3iNjvwFh9QTY79rXRTLiJEJGERBU12RWkUEFRRU6FsRXmB5JYFHaffeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQKyDM8EAzmB73aWU3MjzZpwzXoALGNLXwfhV7EXxP7bdaqknh9txLtg7VKk8g896i7pH9Hy9UeP56MWo5dqhaf",
  "key1": "3jtT6RczPDBbDkpLw3jQiXKBwRoNjw4fFa1kcTysZonfF3c37Pti9U2nAvs3ibUModb8ryM5jkm4jhGQdjVeDwJE",
  "key2": "4mXaZAmWrUaECykWxovWwgexdHfNxjrc2SKxBjQm9teL43Bzym8DV7YTdpq92HcA6GGNn2jhTkii67zfwKVLA4xn",
  "key3": "qpzmDU2jpzPuDT9dbsmchdvkS27FuBPWd3pGVhVnD89qPJS7tWamsWHAJYU9db1awjMf7sQsiedJQP4meVnCziJ",
  "key4": "5Tm1Cu7jZakp9kuj2ZVQVJfkb8tKZpvSsiUfxY3AgpLo8Bkd4JGug9wkxomhCAkWQWsN9b8oQCKvUbrq85oH96fY",
  "key5": "3AHPZi6d8NEES2LSfcYo1BZoHDWQCXCyQWZV9g5vMXLvyiYZXmYXnkbhstFqfA2DrN6MhZAqUK8twpUTA6F956Tv",
  "key6": "38gWaT9QMod7v3R46dt1Ab7pc5KUVvobYydttPPgDsBH9FAznpitoYCHfjNT9XzHFQ9v8NA2QKnyap2KowNgqpii",
  "key7": "5ckMTQeoYerwNDW5UWnCVDjBf8r5s3kaGfos7aM8Vn8gGzP198dqooCm3JAfKmRMng2dy7JGVdh3CkaCfUSV2Z1r",
  "key8": "24zH6KRcqfU3Pfveeu4ADFFAvxJziMuaY2X7anPNxTU7CsYBTz9vcbTVZ59xK1fKJTsa6MXmTubDf3ahqAgTrWVm",
  "key9": "3Ux98cCoHiKfjuMzc3b8pnWbCGTytsJqErtcictWU3EL23MoZvbmHrpyHerXoD5sS52xQjCWdC9h21zHMJJKyTXv",
  "key10": "3JeAvex8tJa3DXpKMJkVzosktwKFAsqtrn8yAmiHd7fwV8mLfyZpgoC1LLVR5NkcSrAFcjpXzX82NGDswPfcAVhw",
  "key11": "33tkgvohN8vEcVDf5Sx1p52qcdJWjpREjq3JvJzYw3HL5JRsbmezvWi1VYjTUN48ToXe9viaTRGWKYc2bDF4zNTY",
  "key12": "2yPeWGJ9JwmUbbiDGz1vDupdVPa4VhuaZsr9Rtf2RS1xKRrsT87yvcLgt8x6fAx7k69rSr7XjpbGU4K5dBn3GWiH",
  "key13": "Ke8Psw3fxdZSu4jCxLakHxnwKezr4t7m4NjZSkkhy4BeWVBtRi43rbf8Bm9gqpxPLf6XLgXmWjHPhGUFLhqSKqQ",
  "key14": "5FxyLzuGgLonsdJPYBXArni68serouSN1TxA6H3KxzBcwoe1hRmpRMGoiNUtn5mzGKAvy28JFMn5888wC6jTia3z",
  "key15": "344sgMF6z2K5nk94xj1xCNvxWMjPvTn8LQXstsgTzPhcVhUgGW4MaDXsQ2CpbGWvecHeghSZbmx9ey87dWZBYhry",
  "key16": "5vGxseF7ASexBSZ3tsYcVmJpeNPsMvBNrMjJSc5CYmwRYP3apLReerhVhpaDT8qQWZnVgmv59R2E2X38Us1arFuC",
  "key17": "2QMTebyTZi1LRG87de5mScsNwnesJW8d2NhwcCm1Y1L8VQc2X1XcG5VxjKNVm6R1wUhSxyFq7W1k5PXFb85MySct",
  "key18": "26wzkWHKuX6811bRaSJ5cVHAnU4ifGjenyJjx6Q9E5UpuTyD3fT8H3Bt5pV7aH1eXN2wTSBthyQeUyYcUeZLvxHk",
  "key19": "JnwXoxJ2D2hrRNqFzyWLTa83JGYLjM14HuyWM8to5QTXFJuJ1DR2nm3etwvB4eEXDnrLCuF3XvRn387eXmTjGm1",
  "key20": "36AGrDj4qE1GFFJmXQ4g74zMPxSAH6tCNm4anR8j1pYa6LmvCscBYtK6VzGudaXVbv3z6NRkzT6tsmbLqxCBuqhm",
  "key21": "4XcfYxZJx9UZfoLJyTk1J44YTETYTZsT3CjH4BFYZtpyfJh2vktumddVna1iPsmQ8VDAtGGn9ZLh7oo7iXiRHmop",
  "key22": "L6kh1aWnGwBF873x3wr3i78bUDCDUXfz7aDTSKJaGJ2HMW9aBfuVNT6yNKz2VoRFtb41KGayv5AmSFZvok3FkxG",
  "key23": "4QVqgzyUBaWnqduQARZBX4Rv8vSF92aRgh9poa2MqS8tG9rMAXhTtb7XgEcce3t139AW97gWudGCinbPwetwMcit",
  "key24": "3sTBGP54EXZGeaFZcKHYN6k85YYCQd5XjEZygCVmErPuYZ4p2a8tSK8v5S5MTrSTfPPBHwMFTBewtjX9y7yhC8QH",
  "key25": "58HFj5rJdeSF3UGPMTdumLd6nGFXiMbLmhmKNZuRG1P4q4AL7gChcvfNRszXdy6fBotgR7WnAdhSjDttmkHneZrn",
  "key26": "5spLbaXzAaqMpuizqX9qdtgpKppsTLP54MwZSmvRJhhQouMBDgRV1ox9ezvT2xhE1hKYLrya3da5ftnwDWFce1dx",
  "key27": "5ZNTMFzaU5bRzCtuAPsysuw95nYU8bLVUThkpeXzQfSaR4grh58Xr1AZ9g3kvrW32TdLxHe3PtNue1MbGnbJMGQE",
  "key28": "56DoSr5Jx89eH8jxqv9uW5GJrgVtDqdyhycsWbjQNDGHo7MwHSH5MbNwLUBJRkqJX4R9mFmY6oxtbezkTBU4zJtY",
  "key29": "51v1KfukxeAULbBdxXXAHf5Z68mba8m3eNeQEhPuLcZZsBGnSvwDFH65Py3i7FCPtvU351ApYduA7Nwyy1jYy16u",
  "key30": "28EJQkbe7NFVpok8UELQPGs9zfrWGLBU2nDEffTV6F4HLbqzcEV1t3PK9zkMBwzdqhHj5wJVq1oBD2EFXBmCguvB",
  "key31": "3CSjby2LpHvYSUjGtgkZU72C5XYCvnWtV9p1FPnLmZhAUEyQfWeKxSAGbseAuyNqrsjSHGui2KRGJhu8CkuqGoCa",
  "key32": "VhwMjK9oVcPkS5WXiW2V8EoLA6iRBjqbAAfLLUCJaU4oShssTD29tzaA9hdmP4YH7FVxasBNtfPTkgEHwmN86Md",
  "key33": "5UMqTJWUR9icqDZQLpnLm7fPF7cHLBNXUKsdUiHXaPyZHAQ4zxdgqZdNGTQCEvd3T74qJ8NtAz5ffwaNPXpw8aSb",
  "key34": "26AUxQsazxYBFT8bmP4PocZoDJFYE9HGzFU17qKMYBLoctKK6soATum1W94M8c4FRA2XzWHCdRt2U9uUgTquN9LP",
  "key35": "FQ2X6TmrNnW8QMHSH9p4u3qSvSXgW7cEw8XU7fi4t4J91xBLTkcnBCDCYCTqY6CgFFG5mEfq3SdxLrCUEyHD7bJ",
  "key36": "5LJJVXSYtGNUaqkfDFjTkjPbgBZo4CFKAkwfN7UuX1nBegCuP6Au2YAGYNhXy8p88fgViLewbJRouTHv3kComRVh"
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
