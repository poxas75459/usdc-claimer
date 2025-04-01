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
    "H7fbBp85DbdtsBmPukB4CCtdLsfRkp1P9byL8R6XoccrNsaMdKrG4vbR9X4aVE1BEgA55ShfMiD1VS84MxA3fNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ui2tfczYCgUigMrz1cBkcLfQXUGtJaHonQz115pztx44kJBHgHhf2abZ7u9nqPLBznVB8RwsP4UfyRQ3XvS4C4g",
  "key1": "51aCAMrTRGtQV5hKwTYHwPLWhHnyEDUS7VNE64LvpzqzpQTeDdW7F6wPXP2SdfuZJS4hLQgVbR6FpaiWbb5omjUe",
  "key2": "3FfguqfURYM2KvGuugK1igVRCPsjJWTmG3rBq9HiiQs8MP9dLLJV3titYkU9yLNCyeTo1hGNzSQLJ3nTagXHBYeT",
  "key3": "HdiaHAMXJHetznuRHFmJBERsHXNY3K73fSQjTFDUTaZ3zpBt6mYUKNC9KX64CbfxDYGLAi7KUsx1B7Sr9G3niQX",
  "key4": "4vMLuMrkhUq1ywiYgZtSkrt4Vr9m4xmTfJd2hqzHxwMTzZfxUvpBUAYeFxD12YpcCWnbDnFRLmTE9gPz4eXtjQH3",
  "key5": "5qc9FwDherbJ3vtiYecYqeX4HVratJkpt8wooyAg2q5fYmRWZfEXLqZPT7KezYArcUDh4Vfgzw8NbWUEEvtnvWfW",
  "key6": "ZjsNd81Xn2GEy3Eke7Mvc7dy9wizV9ir9B3pZGjEgYvWwC8eRpA15uYs9zBWxmywzF4U4pqsa9tKQVcDQsStFJz",
  "key7": "63h4CuWy57xFJpn9RLuSuskHcX98dtMiPDqc5zG6JfVq2TMsGZVniMJizv2G2g8tzEXKok1MUxAHwpZujKVksXZo",
  "key8": "61HrCeM8nH4VP4q7QCQJcUGpE2XygxzFyBekxDXC4PaRwstQswhkAZ4ssmaMjtDrXbu1CqPK3pKoXidPyHekHP6q",
  "key9": "16foFp7dCoSHKvxBgQtt4WTsfQusfWu2Wkt1TeAJaVoRodeNfsn6TQVe1Ls1KAFC7rAPwVHbQCypvE2acspiesM",
  "key10": "2tswSdqM18QbEwpgWGnwpwB1EtxhrYc9evnfhveexjThriy2imU3EjyxuuYzsx5fYFuqEqkTH7xTmRcLQ57AuPDo",
  "key11": "5KsgEomtdQVFdoxtyKuMAyV8NxmJpNi2BzGAafrJZASiYwbKHXVSryvPACXbPurCicHzy42kinkR9e1kxU1FAAo3",
  "key12": "5ZmKXS3QoGsY6tPSLgdZakCSDpEbhsBEEWAGgyy3EGvpWMhwPnLQaMbMprBF5Jaxic4G1FynDkkn3D8NsDj79ouY",
  "key13": "5vcbAQ2z4ygdu67eBeAMKAj2evzMftUVxRA2PZt243s3JxdQMiiJzFKZnBoxWLWjAnurRqtNAQCKCkEhd5EevWyn",
  "key14": "2dPQjzHEMKXay16x3PrPeR9uLzCNvnmDrzfKKXPFet6Ne877T7fNuNbnobB2zLaZe5Jt1PjmYE2yjkaZEJdEy1T6",
  "key15": "3Cie2V26A9MtYRC5BuMQRwh5HvsZ4X3XQDWp8RFFR3vhm4hPCZr1e9sWt9EX7dA5qvby8bZSSg9tt3nSkCRhcH85",
  "key16": "mQmPQ6DZMm8Xs4A8uKR8KJfhFkftjkg4BFrjJHRJdbLMzwRSmZ45Z5pwYZV2QeNGxUnZYgsGyue9pUCjNvknSMB",
  "key17": "3Jka477G5pXR4ABUp7DSZh8Qtc3X8XW8hPy2PoCiA4W7GhP9kQLeAiqsH9kdxE1FxmNgAhxBizv8ag9R2k9eFAto",
  "key18": "3tRftqGewUQ4RS1sjUUw95CFZfoDirPtfroiFHzpYAhfzSRiZjwRKHQV3zE7S5mNuwRMvKb3ku188b7fPSUQyi9L",
  "key19": "SA6xdwn6QsbkQw4LUn3QEj3usjbU5GHvgvmFucfTtaEviEGYbzp53J1FXhZMNtuqPGHb8hiCimdVDaC3GnEWcqh",
  "key20": "5wg4efoMNGjMdV1TUeJ5HYvbGfGGEhuss7J4PyLSNfGoTvGKMGZ1uqXXz7xkgTEmuuEuWm59UKMeaDZNYW4c3qZn",
  "key21": "43LC1Q5s1dZZ95FUr2ijWqX5EbeAzG9KyJeKGTEVhxvfuKFLWb9DujAnSS9G24hyiqzcGiMbT5ZUiSS4bWY4P9Mz",
  "key22": "31NdusNL5Bs7cNXeB8VNqT6PYrRg4nBnfbeHrav4WgnWgozpNM4N1CDRhQyoFcjDruin22pcNuj3CXZ53jyowjxc",
  "key23": "5bFFfqdBtr5ab2eaFZKmtsbA38QnTbtkjSjCq4EmaHAMkZX2hboGxQYNiDZPXvGbFLGnER9K2XKnQwgeShKHeupP",
  "key24": "4oaTqqgziU4kAqYL7eLsKvKFJa5HtnqdxvYuCPf4X8dxQqobZVdugm95TZ1Q88LHbtTXiteefVTo9JxwaWpiUJYK",
  "key25": "w8CyEg6iBGWMPEaX9Pe3s5ZVxuh7Mz6EFXCpdwrsKX3SU835ZeNsRb2NS31RPiYAuPRY3hhx1R7FggYcnmDRnxH",
  "key26": "5ncipCnvmVt2u3n93o8iPXRXryvBfwX1DiXj44AZ2FpoizDvBMwWA9ZgQw6ZzGwZUudKjr8Lak7BuZKQTbREVrZs",
  "key27": "wHCreErgbo1MoMQNVdYwdnbCMfYqEf1Lxdh7aqQyvAZypgk4x75am5H26Bt3ZWAyUSy2YMeWoRS8GJwcMKuk4WF",
  "key28": "3JMnCSUXPzww3jVUpaHJEbX1JsNXaagstpe2MdSspxDZWb7CYNYSPgWcn51LJJ1cy9yk8AH2LrBgio5jHeC2ZwbZ",
  "key29": "ZoADPCU8UaoLMzJYNCNz29evPmSiUkKh9PgkQwfm11u6VUka8ABg2J3jfGBM6bbTuJ8NTwJeZeHDSbowj771wd3",
  "key30": "4jPVF1n9uzt6yC8enPHkYF9eSUWz5waHBcYTpXo5mxpzHPgRe4Xu1QyPcrJWfnbZRNen4W5sWSecMkvGGFuseen6",
  "key31": "kbGFfuvBEEjErwcwMrcQEEfzxRT2BjYBTVE12o6k4iaSe81Wu1uxQ7Lvo4BDTNkDqFuRcRQd2msRFruizW2PrBH",
  "key32": "2YmTdNBP6gsP4Yxv6wNSeo5NnpyFrZ2dE5XQVXb5kFzVBsMcZxgeaU32L62NQU1cnkgQNMw6NrtixvFfhKW6d2Fg",
  "key33": "63X6Y9N2LcUodic3pBLo3m6kwa733cTcWoRUjavzfmrbHkSUxRMGmMiczK5vvWxXuRqMpaWPqS3RK2g5GSboSqQ1",
  "key34": "3XamYX5R6UP7L8psLAfE3qqyYR3L74Fx1xGzzoMdvkTWSiQEEaG3mTa6P262evyUBMSoBq2AcRDWmNs7oc1HnAw7",
  "key35": "2Ym8wuNbkVscPXE1HNL44ET9aFVAsYE7dwQ3WtpAt8ARNopDPJ7QsUHari4CxawG8YYYo6iRMe4Z53zKuQ2xHY8B",
  "key36": "2QJm2HaC5H1uKebg3F76QTQJ1d4vqEMhkHjaE595XB3cBA6cZ2tHenTtQpBoRoUwkETo5R1TUQZtpU9ATyQwg2CL",
  "key37": "5tWXav7VY5RzkwuDbKjC3S4v1qFvKLCD7C3wmYotq5HfQPPf2psMgAYwNsFmVYjDMx6YsrGGGQGr9Ea7SPsQ8soj"
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
