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
    "LzTTJVjaAapACZD7okqXZckRUgSqysNtaxCdp5wyQtTiH2qFoKmLUBQeDA7pPeBoEyCn9GmiRbBAyqQMmgNg9c1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gxz3tuXJonrL6chCn2Qvpq6i4P5pLe2aPhufHWpr3Z28bKTcsSj8hHsWpE8N7fQeBTDwQgCyiaMKkbeCeeB7WW4",
  "key1": "fXoHmwFS5dPeNQe1wKf1QmPBzbAfWvEqPFnrQqvnJ49yqPjLyq1Sd2J8qFjk1tyuuHd8EYhNtTSz4N1zjrvd3CY",
  "key2": "5Rha7BhGiCs5JeBs2g3GuwSZQ8hsTehYsKJBWQwFFkXvCJMVn5aW3XC3sYbZ8yFkvEnChuByu9PGcifMcHASNu9C",
  "key3": "xWafdTcrVb6oiLEQjhYBjSQmdcSvKFZYRkPqKo27GuwaEbb7WDhEckxLj73F9eXL1SKEwSVm9DMrjtb7iJYfgwz",
  "key4": "2WjVeKaMP5zS7TUhkTSt2tmHA9YV4N1aggU85C5xF4TQoRNrsbaodR4mVc8xX3FHrdCC9R68BBzkzBf1nLLmfRaQ",
  "key5": "3gdb1KJ229v1n45DC9RwKvuGzvzXt6uqAvpVtbo5cwhecgnfoCjiurXDgHZtuM6ABghSAXcUyUDaY3XHd1e1WstV",
  "key6": "e8uLWMxWydmTZnRGpDAysXWd6fXBDL6G5DrwZ1Zm9NjLWAkckkUoQc51NC8Tq5nbMT3L8cAcUp3xbnq3H3RU6nU",
  "key7": "2sphRkxqjE8ZNe2jG7Dx3snCu5ZPufYX1s4dKVdqXkYCAPkazDvbXuT5vf77BzLD415V5jhsjzYmTK7a7Dyq4oGU",
  "key8": "4vbDMmkebsAdK2fG68DvQXDjaTQ89TXeasp1YyHAgWwfJMuXQ4sD5rZdfu6557sH22g3UyWVRUj9wQahqw8aWgwt",
  "key9": "276sd5C59b6GisXwaDQDYRUT1CWeWQXpCJ2cciFxzMkqBS3ErnbnP2UAAa14QsHnfwuNEpNTqAHFRgWkGN8gxhMq",
  "key10": "2MVpNRmNUJK524ufgcaPBYWdc7TBJWNTA2qzwab4zNCshza257GxAPYRQ5T2GVRmkWZEmuNS8JrEaUYr5gTNsoMc",
  "key11": "4EpkgGLBsXAwHixTKSUsynkE7x4eSkmJEUktdX1NFE7J3QBJdmcbHafnXzxZYFBUGS1CcCqxZ63DZBohe4rtvA8k",
  "key12": "3QSwPZ2uhByzAZtviyoBnn8w9RjivMqpfTUYobLuu4XtXAvmoqbM7bwVEdoDX5Sb6jBEeToY2ymkdNtPx4DhWj5V",
  "key13": "5QpAxEUzAgFyY5Db5nuZTYvehN1kAtYuPcNHxQinRwWJLt2fA4nHdJZ38Y2qN3FFCMVKLGs6FwapXDaD2tzfSvF1",
  "key14": "2t9YoKMN7336MoJsxPYnFUVB7gjCGPcz91km2wNzbVNZFxCytnXvFpiAaSC12ATjmLhgL1vMoANmVT4zTMqtFzvD",
  "key15": "3LTuNdQ99mYV5YDNCNgD46tCMr9A4RgQeYiEwM6aywHCMMeLGdypPqYfPiU8Z2TZB3HhYV5m7eCHS1RMRezKDWg1",
  "key16": "2A1kPhHAzGyAa3v5aDZc1WoR438kFF8HTwwUqnUVmmrxXbJjXDAN15YDoR455LTdSwRzA34jzTg7WjFueY2mkB5x",
  "key17": "34Sk6NQatzw7nv9s9tcnjsViciZVx3kzjtHs9gR1Sm6Lx1jz4Fcfc2PjzBQCk9DCUQky8fqkQtCdMe8Uawtnijrn",
  "key18": "3WeuRy2cgFx3TaxcY4t8qMKYG4fsYb6Y69zry5YP2kJMyp6bpDePuJNdahkRx29YQWEptfDeq4Hfy7faW7gFk6Xp",
  "key19": "361ky6qanWtS2VheATZz8Zeh9S1QeCdzZPs7WXGUUWWYjMXxWfC2k9RS1Ch1tEVdhkhBWf9khuuABo6Mn1NFaMJQ",
  "key20": "5o7cBq3wNDCdpqkybadByhXM3tGbtEt2ei9EzAuCv2axej2kSkWM3sMfLkyeSfSKciyr3Y12aEyCzfHREE1a57jo",
  "key21": "4pUNZYvwR6vNVSX4zi4qetmkCosQ6ELYBC2Tcxx1y8o2TDyydLAfAxLkdTziNiU41E1vb47GrfqjQ3Urn4YornG",
  "key22": "5gj7BYtCAXPyTKrUXPAWzmBTzu1hg4tqjvbEi844h1LTrPM4VMyCG7DBamMfErE3zQd91kGajbeeNKZWSHMqR5cn",
  "key23": "2snLqkN8WoPhGrHcAQUVfnxPDH8HKY6gN6xHmQMmJzq29jExtsqz6fjiHF5ybvfbvWtGs74oEyRBMpSSvAbSD7EG",
  "key24": "5Ugtg3H9ErhsvjLiG3muamzchALKYYTL5QPd6NTazhRTbor7R8borrUFiLBMFsyhFnzkH4PSSTePscucxczqsunM",
  "key25": "4hae4MtYizhCxu9FP3JrNx2AYLebnE3qcEWg3wGpstKmmUJ6WCbN1xgSAkowC2BYZA2pnb4VHnvwmxJRchQsqiBi",
  "key26": "3aCpM2cR8apDCvsw62SdsAY8UiZ6NyTDMpNwFKqV2HFBanHUJJ7nsyBXxt6Tc5mzCnFYKsQdicjCJp9KjqNt7tr1",
  "key27": "5PAmLS46fW9zYB9mbyWGYRoYtQnMjLC1ZQR3KsRTmEmCJd3jLaUtz48mUtr9d9fUMu9tqZ4JcN8KayrgdbbMnrL6",
  "key28": "4QNjhnstDjJ9WT3G4jcYUG4Jd6hFqUyYS2ESM95U3zjT7k9a7THb4LkJx5m8aJHVTPBh6k5Xz4u6app7zA7iHD1s",
  "key29": "2nbDRG93m5w8gWz7G1CfeU7pg9Q1EgtxXWGWjpdtWTLHj7BwZn7dqXTqwc8WEU9qHePtwtt8Jd2mu1v1JFcK5TYZ",
  "key30": "42xbed2JA7aMTGyR1NkUkWJved8CbA6D7u9X6XiqwHM4FJQEnC2rtGbJam5jwwPKb7PEfHg1aR3B3hdLxW6tDojC",
  "key31": "5vDY2YHgEV3adDRAcsBLsNVkEfKLiyf7j22ovjr5cC1qLHPzZvcjZ7i7KtC727eqo5arsGQhxrcnaeuh4FuUw76t",
  "key32": "4jwL7XkvbHJh9yWwmxGKcAq5VqG5M4EfPRH1BLKENmSgemuESvvMDbu9PYXu6bgTsKQqVdKWrpsMF9bGKEddtrgr",
  "key33": "4uXj4DRzeG82YoFo2z21WheCujPBLKAsSmdwxLtLSKbYPDPLPDgcHEjVoTNDWvst9h4xXSnqRTX2xxaqQwed64XX",
  "key34": "bMCcM6q4F1yzX4n3PWrg8B3M6brkrL2kmmJFqFcEz5TmJjnkofqSUyRhoyD6B9rmaUvsAphUVXp6yQKLSghHCJT",
  "key35": "mYsMbt5ZdbQXUwemmP6kTmhi1ZzJg5hNa4QwBKhB4geQNcYk5aForGGEFXzZxgAqbi1hE2MtggAb8iQaqu2TtDK",
  "key36": "28o68UHXJpEFTkYvxcFJ129TuhrjtFQNCwSTwTAnn4wQq5QQzzNFvxdj1kdv2uX286Y4vAd6Fy9uYwNTYQqTwjbH",
  "key37": "4oWH4GF6oUGny2XXeKiKCVGv5Ksqq84NffMiR3mRwgmNAQH3wE5EGuKk979cbUfq8YqLuWyEDEmoQBLFdWBjZtoT",
  "key38": "2PsJjgMbJuQnH9rnRvBabSYwQwaCZbYxCW5PouT5XV3k9NgPEwwZvTcM1PdSdEesBFwRKhUNJJsD8B9Afxeg3DsT",
  "key39": "2Npa47GVDsHAnhEaD729exWZZKhhdddyMc9tMTvRBYbhgm188UEhpzuMGzeVBfw29EK6778axky5HR6zKFaitsWW"
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
