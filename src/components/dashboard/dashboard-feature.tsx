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
    "LHyeMJMfzV6n6xUUxCUuXAUyoLaX3EQYWwJHyrGbYkAicuMH4Tk1HRJPDY4Y4dERUELdZJCFrSYJiBAYXLkxsD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hoKM64z2zkC4N7sCV4DZopisJUR1tbYC5gE6Bk3LdHHvRdGNJ77eo2MkfxgQ6D2YknTfUpj6K4Wfq4aSKvigc1x",
  "key1": "L62znnkmGurMVn7QCqdFpYDfScHomCZzFvQivU1PN9cLAHnmuUW5ErZ5c9qXXuZ3XS2iyfv5qKT9YtwycbRXGcy",
  "key2": "3mcM2e6co5HgjjzKeDJaHf692MAzg4pi5WZR47MLg9MAWwVNkjXdFU71Aioan1Rt1F1y5Zq2B5z1Hqt42kkp4A6r",
  "key3": "2mwxQuzshTQDsSoPeNMM21sfCLctJfpNDvisjwV8WQziRaVmt8RzdWpzc8MeMf2DytvrYicFDDDcEoEE3o2GUfgB",
  "key4": "49QQmdhNpaAry64xzPihPywyhYCqPSYUUCVfM3J3uAi78nKynV2UC4N2THu8s8w4BMx5ZR3HUp7zuXR42QvMwFBM",
  "key5": "3bUCiRro7oB6P3u6TqK5PMzKhStHHEE4rMj4Q5GB3VpzhHrb5WESxXvCGNAGFHoJ7kbmfGTvgsvSfYSu5NikRnmR",
  "key6": "3aFaEXs2KghPCFnu7YJUR9PjRzMj7kaKkwTfiggGkUDfsEgofyt2WPHte4uZN9HvP4mpRttJ2SUJ1o4pmLr1y6Pi",
  "key7": "3jTMjr3oPkV9K2yS2YBpxQMvdmqnokkKEA4e3LPWCowFMjPKU2hgGtU7KQppwndJQ61RvKYAHC4xAUrFyadgqgJR",
  "key8": "5HA9FHmjsqjPZrAHnq8GmDNwKNi9WwSeQCBqXpN9jgauYqKFWD8PH6UbgnmonBwt4sSS4XQHYgLuB4dp7joaxecB",
  "key9": "5Q8KKoV1P1XZsGQ18qQGmys8zQCdfvV5eHULKuUsYoqDoh4fZJjt4MnPoJi4tVJ2gHxiLZTXqWnFp88KB3r117bK",
  "key10": "EoowLbvbFesD44q1iqBKHUumCwv4jdbS5Q6UshSu47EwzHrAdyt1TqfkSdtVnSGfkT1zKy6nqMGh7Hbfdc4q7Dn",
  "key11": "3aco9jvJAR4SbqNo6D6xJWnYQbuZqQwqnWHbuJYUbNz5D8usmhPhm3riAKKCbjGhY3S9pTbEEZYJifCd4kCWXRtB",
  "key12": "g3AWQVva7qqZrg2DnFY7j2hxGSHcRFDEXDrkevGJWRoq1yzYop13ePjMgi3i33iKcN3uxFJijMTweR2FNdpJ76t",
  "key13": "pcGpNDDxpA1miU1Aov36sJZKTjpxEEEdocxr9e7id51QV7T3TNtYjbfbfs3PASQd22wZTD5zxkMjPdvFGnFW4F5",
  "key14": "2z4mRLyG7v8u5Hdakthwv6EZgyzKs7NrDG5dUZXZSrpkuZfZpapZGYTdS2APZWdWQaFRE9XmsDtnprX8wqStmVNi",
  "key15": "4oyWXSDqgHJUpzPLSEpsiKo1M3rK3ey7FUkF7aUFs4FwE4qVcNeygSarqb9bwat9B5NKEbNGtAqqzsqS6s8eqR9j",
  "key16": "3y5iXm8vWoNv8YyrAvbn169jXqC7fB2T4dZXu2d2fjVAjCis3E6WWb5SbFS2KzFTR9ziKtLVa74GD6mU7qjNTJ1m",
  "key17": "2ZBB8GPg1gm8YnDU1tBqxQVmrBzbyeBX1WaiyKmo3dX7ns925m8RRwybXbc6pMLJt2DynVx6TLxKNBLqszYhwB3f",
  "key18": "5kG2xwsZiZeP1G9zjpnr41mk6pVHLC9j3VLnL4SJXDjKp57C889b2qT6Bgbtb7zaKojbPS1AQUTMKFiiiBD3EZ9w",
  "key19": "43xfZ1tvWmZiFunUu86Rc7t6VbXEzBhYgBGscy69tgEDte5LkxeCKmATLGpt4YpZpzZ3G58MMBV4YsNroKFy347S",
  "key20": "4LebNpWztkEEQ1aNh9A2c7KsMjz6nQFumRbvmPy1LRVT8MQnNFGh2yYnUispgQZGiujXZSd4CB4fk88cqsNVWkSk",
  "key21": "5hzbP7rq3MvvXxoXKMF7aDAEunyTFXHoT7ABiLDVyNyopvVehgD3C1SbxEHxSRkiW8WkTTMAURkBuatMAMdfVGUC",
  "key22": "RvDvDv3PXcQAYjussN3xHL3FyZ4nCFtM2qQcjwK1jo5qNvGDfZtv183E5uKKggjKdikuC79FKafYMn77FxjEjYW",
  "key23": "4h1S3XH6N9BqWFMAWD4m6AKkPGmYhJ21eQhRBLqB8LFGJkdXQ9CB3VESor6HdPiFR4tv3i8SWXMVpp9CufH1jzUZ",
  "key24": "bTAHMMwsSAmKZbb83pYz3WiP76bZAerRmKnoh3mYb3wuBvNtv3ZkMCiJ1pVeDzxdtynAF2aMcxbzLpPcS2jgxKz",
  "key25": "4eRNvrHHd4HKFRukz7ebr1yKAzrE2ppm54VVEhkJMbX9kUbou3m61FBuLg8XVkvZf5cn6rB2LHU1NTDiFRpVD9GP",
  "key26": "nVufgPjV7MJD33prwaBXQ4Sc9X3rVyaoB8SdaFTBoaQBWEyMNujFdHiJBKy3pbRsT85RL2REUN7NG7HT4y9X3Yf",
  "key27": "3ufB4MUhRTWG8poDbvQGt6VG3vPy8HN5VhoAqwyXepr3Uv1v8kppkr6ogjn12KhD9AotKC7cbdZUAnDypiV6THdR",
  "key28": "5hzLU267rATP2ksdQvZnKKmrefsYV8Jq8CbGR95inU747NSZeCtNEBDypJPLtJoC3S3GDoss8JKF1YHZGYCEpSah",
  "key29": "5k9ZdLugt9KrRBLEmeshG1Yss6mEh8UPURrh3QseSNWdc74crtojhnvdmLSwGDdQ4KC1549XFjcx7cdqgRAviYjK",
  "key30": "4tuNQUz9PszkSmj1MfHGfFTtLLmATUwRPXLdx4KYLgtJCTYg4upJ1dSwHrxEdQ3SFErbUVXsBTdiskycwn8Phz13",
  "key31": "4QAiftS14nTHra9DG1iZXpd4LMiRgBis5HFZVa4sx7X2dHv6Z7x4UkusWRS2fDBrhrt3uKSSMUmgAeY2VwhwdqRW",
  "key32": "4ygA57XjNgCwr1SwcvuSnHdhC8NYcuLw2tq9x8Kd4RxMnCKwD8VBSuqcSZFVoPDJGpqaGmmLpeJSefh3S27DjyzY",
  "key33": "2DbTfRnCNDkT6kcyBYxT4Xk6WPjZjzTfiML2q2ABPGHvvb9VxN5ifSS8e6Ksu7jHm5teDt9Cwa8pqqWmh6aWa7QZ"
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
