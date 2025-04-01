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
    "5dq3jveffovbQHHW8s3oG9TbUpH2jc277kcuiHgjjkLtgmgp3nFbkkJNGsW1qANswvd9u6mFCkyMi8zdjgLEPzjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fUxq4aSYJgUvUyxU2EjgtpD1nz8iy5ovsQxLqyagYVcLmgnJQTLZx5pjQTZXyaJ2PpYebRGeNYBAghRdvWE2Fc6",
  "key1": "4bz8zzrqAJxk11UnFfvWCZ4UW5HtmdKZGtDRjUFniqdpDMHMKyHy3QATTi1PZHyhBjoeDgSy5Tm2dPjGnDc9LARv",
  "key2": "VJixcHmZK6FUeRJBXXnrMFGpHJd2dPRKdUG1aqkirBX42oUYXfXWru56jTDFcCkiSeXiSY3yPvgQ8MBGF9morpR",
  "key3": "ULibfs78rcHaeHuPqB4ZrRfETFYcKdAETWATvqe7M3kDNKuLNKXifA1mnb8BeCzHy8NYbQmY2fpDgUSJV2hycmM",
  "key4": "bRjDSX331gYbNf85ushdcxfZrK349LYGL3777R4TJ36jkzCou2c8UJK6tsUzsGNyJScvVAWnBD11Xk8paBDoqDJ",
  "key5": "v2dqXq2srNSSQCucuxDZUdzrS8G7qLVHJKzzx4wvkojmTZMfSYeScgV8ffLBPDDoiVzv8MhJc8FSVz6JrRV1PyU",
  "key6": "5kdmwQjebLLsGCE5T96zz8B9eWrvKyH4ppd1zaRirbfcqVDJBUqXfTmyrcwiNoFcTj4vP6ScapwYM19dMBnpSjNH",
  "key7": "2owttvBjphAsuN4BvtpwNEEkgybX72xnMdirGPWsmtP7WUEq8b1smnFWsZPNiyuZkMmzmyophP8PZxV3deA9xV3d",
  "key8": "3zy7YNyAa1XmHbXwszpAzqvJHkXoHjLQZczAd71U42vjJVB4cmVC2RHAz8vkgFPdVzAiyYvtzWunRuhfZyxFdgkx",
  "key9": "5DWSSUCrBVWiip9wdBLZw9M6JLz7nj29TcEiZQmKtonH1MZLtEhgZtNB9Ao85w27p2BXNxvR4uyAjamkUvbCpDWX",
  "key10": "3PpFHvu1BqbMdw3CfcvkbiU4cAfKdHH1pxWgAtTWfjiug69ep6z5M5itMGeu1Z4yKRpxwFviRHC7Ro1FJ5crCDsW",
  "key11": "auHN9qdULHs1hNisUQ6XGqwQgLYYzUFnXt4sQJnaCGt5Drx3Z7NWHtEaW2qKHRdJN4H1TJCUVfZjEraxwfYhXaA",
  "key12": "fMJFrd5XDVBxPhAZmEfm5WdH5f3V9QhhpnQBSFVY5Kvj1vyzBDzZp3QsKY4FZe1cM789HmoD4vzqDfcg8LtpJDj",
  "key13": "PRATtWWUa7gdqYmwx38SFc6iPKrrb6cmhJUADAtMyJG8erwaafgVqtzx6bsDTc24J6SKx47qxCYc5QxujaVu4fc",
  "key14": "4tFT7g9Pg3939reYDff3spiq5asgULMbopKsd7odTXHh9v5nzUi2zcfoK6YbmK5VFY3Dm4uDixtgJYxHkLrw9YbT",
  "key15": "2rJhnQD3fQKsyGTCRjZYiotg9FgxjeVh9E2FWGGZBa3qnPNQoV7ga1SvMFjZLqiKLTjkFfs63BQPTZKHdyHR2C3U",
  "key16": "3rPiiL737EAzaV7fRRrBnVfxb1xYAbF7TWUsXeQYjxrBLjt7PwdUVS58Q3Woy7Rgre2SWJKtCpz3kqy2fR3q2oUr",
  "key17": "24XnsqrjMfCfUoX2XtrwyPG7eeGXZrosBapmArLzoMABq2mLM5Hwj7awz1xyBgtwwmjk2a9BKc9s5gRTDNxNXbzM",
  "key18": "34zPmwZwocvXErm2LGZSQhBrmPcjk8dtvZ1QAvfKMa1wYgtK66izK5zUjuJP6fCJmeSrYQEdFhqHHMS36NSUGqDy",
  "key19": "5yiwcqnvXCZqj2BC7VsvnqiqnuQ8YeajXTHqFjHfeYa6T3okumiTomp7QBURQrmoZp9jh89jA2hJsD8gpPFvbNiE",
  "key20": "5xHiKXnScUzA7K3vnNAEvjFLqtNEPZybMSrqdvyVw4gdYvGp9bA7yxZamu26LyKJz8Va2kZSyP93mqEX2sHXcr6j",
  "key21": "UpGvGFJERPWHHqG3tfQQr4KoZucsgztZVnRdA4ajSGn29YyidaeevCkKSpHjHzbaAG5v5hCM7nK3MNhEKTVMFwy",
  "key22": "2W1jHERb3LJ4h5iukxU3q1nZfY6UKaVy3dvAJUpkt6AQ6s9qcZGdwHfUVS9YPCt1cnT6WybhRkstGun2o7NHWUDW",
  "key23": "4biUzwMP9M9oZqjxNWmN2WaoNMh7REH9sfzBXr6wKkS4cHT1mgDa65WbkWYXJ3yHc5x3fVaeHrzg2KuYA7CB7NrB",
  "key24": "7csfZYRjcNP7xezYmdk3U6SsEtsQycXT7B2W8DYMH55xpTZxJDDque35bvBn7Qu89eivDMvt8mLKs3DbtpPxeRV"
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
