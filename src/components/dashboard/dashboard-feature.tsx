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
    "UNBp6uezCv35erS6egoYtfXXLM8ebfvYoQVpMAojPzbNY8QDLWCgUuF9Ur4xkGwz2Mz5Q34J8zivPSndkBDoSTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FDPSbXv8jQceeik3nQ5HqNwU4yVkJzGHmuCVFfsBVgEQ6tysWtMncbxAUrKVLUJJoL2DMGtw4sbU7U7HgSeGT4m",
  "key1": "2tyCRyAf7X1rDxasY1oVF3Cu8m5U47z6e1ooB6UFdUxEUaMhvxagcV9X3cpCXWQ7YScxupvGBr8TfjfLUC8AcifH",
  "key2": "4U8dcXdjxyYYdjSP6cVaEmGHW5io4yGQmtqLAXHFLwbMdGfYo1VrGoffqfMo8P3CE8kCKYDwh3LnWYeEXxPHPtCT",
  "key3": "X6wUYue2yJwCfBBKxGkagyJBRVDqp3hUGTq5jpaX1Lj5W66RS9DojK5LD6EAGhSbRxSsxXUXV6UxrQANikSFCJM",
  "key4": "2gCB2JMtmzcgBAHduUz8851tS1KcrryxAjYgtNNCNuWd6ovSHbA3syiMHx7SCiK9hvvv1zgHx5Lo26xTePQEfkUY",
  "key5": "66CJ2KDrGfhVZyJhVX4hWmmBz3HuttSthdiRbS6zcajkizGBKYSn4VtRP44xhyergLuc9MPBkXZYCtCDebVaz4gK",
  "key6": "2uGS1PFwjqYARXmYnAX8McZfXUkdWApRH9qPwoqXWFcNmQ4BRZP4c6jxm8Nha5TvavFFKMa7GKbEiGEeCfG5Mf4u",
  "key7": "4pJABRj3FoNRUp5hgtgNLAwvN6aFfgjYjA7tJ7JmA1ghMGJNsqe4e8L4wHaKe4SMXrDfb52qoDBkuUA4EvkWZFLL",
  "key8": "4nfrC7jZ5JWB1nrYWzJwgSv46dg2z3TbALqMRP69A2eT8YaY6jdciUCjT74AniywgQw95DC7RwqfhVLmuagrZGd8",
  "key9": "29NfnDiayeBBGTGpyBBtkNJVZoJ3bSGNoTcTiZyUdh67itdbsYdnh35wMD1kVJyy4JoWgTudeb41A8EAsZJaUuAH",
  "key10": "45jktqLYWRDm3ZGEKHpJVwM3bz75yiUD6aKFfKngHjmBytCGFDjzgjRiPJSV44xYgB5hkxjWYbfNSg7W5CDZfXz3",
  "key11": "2U49R3kjhQbBUViSWT6yNLYPAMVUCP5BCF1ofnsDAJ43UBSUjwPxKEydpDoHymJYbMmFWVyBuMtcWVsNckEkta6y",
  "key12": "4pdLUvzqLw3rorGjXoLvkBZKm1uYNHK5gj6UoaZCBpN6iUyDZWv5jPBXX2DWHTfmREbw8V1wBcuRUYwfv6k21EvW",
  "key13": "zFcaUPXveTnUqrqxjZSmG52Kz58SxjSzQQjnAtvV3e96NozqPV9BDdMTruQytQidM9esqtLMwaGF3ZDg4nE8ro4",
  "key14": "2rdxWW9EEHaQrbe99PJGFDptdbnLQPQzjkPvSKqTfoZLvHZTqvfo2XF811M6tghreQs9Z13jT25qJMQ3tsXCfKB6",
  "key15": "KSv7x7VKe2taEnfrkVd6WF8f5BXCcrMJsMGJaN4mPRQQGyDhkwk1r9QsoVhPFAGzY1LXmemz9KXURWBkJ8DREqe",
  "key16": "4J3rkBSaKZeXXGG16h4vWpxxn9jfgk6AApZpvcmae2PvRvosnCZ1kaUqesnQhLHhZge52zm6ScWcfR91xq1bdc1w",
  "key17": "3iEaG9T1kHXKw14ELXvSWKavRt7k5AmDZjivZ9t7xsWQBBRgPHBqHhS1wU9bYEX3XAG8xSuhNfXbRXv2YFvTwQur",
  "key18": "5MGKFffkWGA2pkEzDXXfsMrU3u7sVskLXGpcbVY9v4F6D6g87nrLZNkPM1TVEsuqyJAZ8yBRuFn3FXuqDesCqoGN",
  "key19": "4UbpvpQt6EPshoXS6kRAj4v9BbJHpYSkvWifqovW8XcF3iXK9u3dcECWWx3KyJbvCw4ibP82rMY5pQ6Mp81tdCZt",
  "key20": "4zGjrMjMmZaiuZUptQBTEYkWdy4GDsvz1BKrUbsKdSp4aaSE3YgpBdo5uc8PBDxW4PtiWP3rvguvr458ibEdqLr6",
  "key21": "2JQPmDFzKtpid6v3VtSrHr3tqjbTtCjCEubFz8fDkvTyNPoye1ZxUYfpZb9hWVr4nn1HE5hKY9SNoYGL8gYUbtNm",
  "key22": "5RdkQhAuPUt3N1RUJSMiek6MxxWjVsU8vzP8QUtMhwUNGV3H78r6ceKiypuBBjoifcZHdrJZFqvtog4H6z7rkGtJ",
  "key23": "2Yx26amqHmSnEbwAXdFhkQCVa3w1g1MEz8fcd79krtERcXAGn17iQ1qrGCnfhJx2D941SiF9oKxwmTqrC7dEZtjm",
  "key24": "2NFpiWJ4r9bBVsYqj6nfE7gd5z4HH4rocvP4HRPR2AKZE6Hu29AeEBa4HyntLY1gcNKjvBeuFuUyyzB3UJXCjaub",
  "key25": "ntqYqfHKLjeqSYuU1iNJYRNvVQ7xU8hpGphpdCuh3cZ5nfpZ9Aa3SaDCCw4qfihZVHM7c1HQ2JWqrz5Bd94kio7",
  "key26": "2USUkTBUWtoPGnDNQGXkc2The6mxUU6vCuQNSP3UWwZx8UAmkh7QWieR5cbtt5Hn7b9AoSzdpyeZkQCuxvMyDpRB",
  "key27": "3ugDuyMsiXtjMtxkxvF6ycqdq1e7mGz3WJk1F2rPSsdB4Jd4ZeABTENChhxNc5NMLcmUAiDiBvJuSevQ49UWQLFx",
  "key28": "5mqntEdLTKjtfujyo88CiTHVN2WBvQU6UTpQ74o6XLiCbipV9czjiCghZyWJvgZofHneoj95c11k2G69ATPYhGDL",
  "key29": "4joC7dowsD729Yma1z1zJXmuTn1RhRxXC2mgiqhJoLoSdZmJSFYEN1ZnQEyKuL7jPweLwaER4QGJD2aW7XFMEUtF",
  "key30": "MtLYrwS35maa6wSgmseGpAisDhmJp5AAqurqoxz4Li2AmBhuec6kwmrcefzfN8YZWu8U64485e19JWXaZV8kuBD",
  "key31": "FjsF1ZqCawNBUonBXizwGKQuqoZFF85DbcRKdmwv6yLXvNPUkH8UQc5L9L37of8YT5rxr7eib7KuWGNSPz7ELyZ",
  "key32": "5ZrMzF8sR9KuzWWi8qtwZmPa7gFWL1eHbJpM4pURw8z67i8WnmN16waCMmj16662aeas6D55D4nP4Hck5Q7urzsD"
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
