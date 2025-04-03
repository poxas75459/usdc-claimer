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
    "i8jFPdWeJSDxcEworhzyUAYSCu5G4k26HRXqsDVejYypUUbTDqQcRebkrh9GmEXZUmkhVAD3ztC5oF3CKQpRSFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ejLRjSNWHV115wj65TpCqQE3LHszDvGJ9UgDCF77uy3CxYdRXEaHPox9KYxfrZEymET6jAAedii8YAzmE9Lyner",
  "key1": "9xAs4qh9aZNUkP1btCReTBUUJYBfZd7bZFH1J4BSCSZYWxEXymMiE2jtBsEYiPWHcZwEzKxWPpuC8ARzBu6mpRB",
  "key2": "3Fo9MpiySMq1pJhRBCUggBFDpsBtz32BUmL694JbQAFABGPQeoapJy3nF1RTC4iSUtBWoaRnnf2UitTsbsbKEony",
  "key3": "5LgxUBpxX75cHUpJrsMztvkFocZmxR48MPiZghqP8iubhxgvVXEjnUN9y1BmMhTtXvipj37tXJM7mJdcXVAsDYch",
  "key4": "5FvcBXBW5ZwRnFrb5Aoua9goi6cdWcMeXPdw4HJtAjnfJ6Cwz1iWu9BoW6oTDmsL6CJmQo29XLK88AbET2QZtuLd",
  "key5": "2FkvkS5GTyN8ipfeN8tVDyhZqztkZwLbsukZz3mkNoeDkn8XJ4EM1ZvCkjmW7TRB6m9iwSyJUD5hzi8g6WccX5jc",
  "key6": "5QozQjJugG5cij8qJpbLvwNGgU7VaAAaHGtMJbWTKXANe7euDjV4AJ5qRQ4mZaxkyPWD7wFhX6yaCLHyvZsnF9AJ",
  "key7": "44c7ueRARYR1dHsWhC3hBHwRCqSLxtDB4B6SeYD1RbwfUrrJbBqZA9ob1G2cpQUf4uwQ8vAyyYP7uUr7aEtTzTB4",
  "key8": "2UEbu5PGZmVLDmV6P5vRHKsjpBQUnT2fJGMpym9mSYR2CxH1HJPd1t8wxoBymn9gLkBnWhho9FD3Sv6Lbf5Dcfb4",
  "key9": "2kCWt5jYoJussrsLNGj4MJ9pw8YXuRzS5EpnxqdoRX2yLjM2uHFAPeAj5EZxSgWC1G7ErW98TNzfkUJ1t48TbHix",
  "key10": "4ZK4pNHheYKiG1YBEAr7Pqrtc96HF3nfdUjj6tAfAw6XAARuxsbZcYQaBU5dw6CdRb73rWSLiqAKF8WHHN3MwL4j",
  "key11": "5R6EANZn2GqNLpcpfWLZip4Ni3pSLTh3hmwq9cBaPnfXJfa4aHDuqo76vpuXAbG8zcvJSbyNwdbGuUs4zLfNMe3E",
  "key12": "2H27CoBHijnHQuv6X7Z91VvJvnXSLGbAV848bECAo9rKzwrETkhuCmd1xkvRhSQYNZuFowaeaSSZv2nT8rWSNzvg",
  "key13": "3VBi1G3v9o4f5eCJv5SXB5ycmuKPNuzut1p3L3eyiHQPAGzKzK12aXnnJaXsKvivqEnb8hrLNJ9Ww5VL7Qcbu4dJ",
  "key14": "4Z9uFY6XLBBUY4Nt5qiMkNQHVZ7xfyUc7XkhPyUNHfgRJevHU7xnXc8CRSXfZ8GN9LyLHjxWK8FxmD4k9XjGuDzc",
  "key15": "2sNU1DqdLmQrCcLS26FG39yaM2CvEzEWXJyVgooxkDQFCNx3NUcnqRUb2BNoR1YyGoGf423pZYrd7Jk5xFzGFyqS",
  "key16": "5r3uggvVvNPN3NoZEHiaozDtmwaZKmt1oFNXepBG4tUzi3mJzBembY2Kr4R1t8vN2oJzNR95yfAncUk3idbQa7GC",
  "key17": "3iFJGreYVTaNY9fiHJUD9XmuaxbXpF9DQ9jpHkiBifDnW4Q4F19C21XEJsYoRHMkFSyXxNM3BQEixJKWcPkH18qr",
  "key18": "3PFU32Z2KHGF2CxhL3oUkSbU87dWxnUQj8TrH16QWBRcmkPSJwyd5NWR3zqA9ghxsBwE2PVRELnEz4kPb8aVKdbv",
  "key19": "5x5PCt6zNY9qsH2BJc7barLD6hAEXcMmmH1FYtRYoGXD5nFpPyiJ8upEFsbK457PW8dwsiySfRrGLmVt65fyjwdw",
  "key20": "4cPNw18kWshzxd66zSAcma7t84BWTsbWzYonDrkMHRMqtEw4xj8qQL3qpopbT7H4TXgujTXFKbGgbEUTm5J2H18u",
  "key21": "5rqPxiukEdWetZ7SRQ2NSUnMKYcVUxADP9x2wxVVWy3MvX7VNTFRHA57fa4kJqEBGnm3dmNVWgwLopUudHPuum4K",
  "key22": "2oLoXn7JZWpD3372B6KbEtSoyMqQCDcH2YBruXcNqHtpoXJHATL6G7VfuVrtGgeZ7aH9xt8pdRPrEYNwENydDgGe",
  "key23": "53694cFQWB6jFng1gq1MUWjS9tScs6473c9JKEvxcB6mnuxzF8MwSBciR96u5hyecWobZXffHVmuUrMbZGtrXrat",
  "key24": "4EVTHms1QXJXxUFczyNLQvZ3im9r1qBcFkNGhZA6mWgBfMCVRu7km9S5aELYcctvZUaCv3pAomZooLAE5bSH9nZH",
  "key25": "5eiCzG7EqHZKQRnGazxcMEmGBPHvGD4mXePEpmLmc7ccCnh2Rk1YD6bhgkfQUnFDxwFQbFiWfokirNaA5uCqySy8",
  "key26": "3BuKGC44PR9PUqDTZ8XQaDUqH3bAZPYwZuMxdanaEpdCXyJJC9vf15nE7RR3eoQaWeGYPHgeekL6HSQXPrfk2CZi",
  "key27": "2vUK8jrcvGvKkUK5KXK77APgXdEmJSMfBQpryxQzKkh5ef7SHnEE8XSe8q4ubEKFLAswzHuWcziJu7qYFqmgdZTF"
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
