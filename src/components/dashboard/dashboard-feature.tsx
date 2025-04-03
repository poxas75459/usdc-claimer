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
    "473D48JrsLkdpDyJ68C8igEXi6C9gxMQBZjAgqszHNczE6etfSjmZkje9zKyL3JpVrY5mtzNDt1Nbjhgu5s3ZE6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e6n1EHTgvW3jPYXefmTEVebESbJcPC5TSAdMmaeN6pMbvEb3qebRD8CywgGr8i7Nk2ux9v2VBLN4Vb8oj43dFRy",
  "key1": "4JuA69z6dniZC8yuppo1bFvQMJsbvAworKw6qdUr1468BTYzzDaXWqCDZdYAdsQyDQYPix4fC6F1fMu7b3xPwTmz",
  "key2": "HfcjKHABLqFe18axFdgpi9UuJkLsZq234VrocGuFdMxmySbddomhn7dvaVqusvZ4jqQLDeG2GPJqht8ppeWEDH1",
  "key3": "urzyAjqTePeeLr34Mx49Uwgx9dZWQ1HQ5opk8Hkghi7rxnmNWYaLesjQUjjVyT5ZvxY3sTEyoFFU7TCUtM9cVL2",
  "key4": "2r2qYDa2okn3xZMcSe7RgbNZ7xHbGFvssiYC9v33UWMYEq1U2MyKjLdD3NpzJec7cX51iWXnPzTX4WFFpyWKegzy",
  "key5": "2g32EjiaS9vWEpmN1JYoDT4tZ9mHVzCoNMXU4eicd2oouGK6fs3d38QPeepiu1sNc3Zza9xQko5AxTejj4DAmd8Y",
  "key6": "499LbyQtXBbpWL8KmeXLEphnHVHrsM5ByHLURfpyjTqPdcE8FSKFXeDbjLsJY85K6bMYJ8wTqXMthVgkScguk34k",
  "key7": "GuTLS7GqQEB5T2mXva2MXvB84K1GubEw3LTp56giE6XYnPc8sbjFYZLxNvjvqDCFxb9hC99FTnpVHJSttLinbuy",
  "key8": "3134nJmeXqPQ6MMd9NZSTPr2Z6RsQfuRusT76SHaQYK6aDRKfuCNPmnRoSSin65WPeXKkzmFyhokqfNc6156J4iV",
  "key9": "5Uj2tqFuw45BmtQDKxMtYvPXhLpWGAMMKRM1wanXm4uRtnQ4i1XTxh4NPzT9Hvz5m1jeTG1NVMhtRevF1wvcZVmn",
  "key10": "5VNGbrGWkhqp4VaPEh2BQtySNwAr3Did6Y24nxJWWiA5RVFbCs832jGoKpF3sxZptMZr1BaZKQwF96K7zi21gwep",
  "key11": "45oMi3KAnxvo5vSK7WDQgq3XDVTCiWvTtgA65pARWofYnKWcE9BbmaGL12cEbWufJj84tFgcTDyQA9FVkaibFk4T",
  "key12": "TsLC2yn9tKHncFyJTAsbCDyjMAnHJ91jTTP76Ugjkjcb82jaMBvMJxLhir5ZVzzsh7BZVjgUkeAU8icJ4S2AkAW",
  "key13": "4xBioKx7UV5o6wSFdZq3rjtEeYyw6nkbtJqkT2wcAvUzZU6SvBD1XFMR9ZCfgqUr6AHFdEwJbAyo12aWiQsrxFgU",
  "key14": "3Aj51MQS2wu6vp31DkPxBvyCLBd2X64cpkA6sQevR6bBrXH8Hu6EvyNJGjQT1YSgt9Fpv9NfnRXsgLWsjK48Ze7e",
  "key15": "3ahBrbsLW6EhkTCqc6Mxvpm58z5tD9yt5co3ccJPX98QsZVwEGb4MN6j6smG4ZN2VBi1HMHeRPxpBBhzYteofKSN",
  "key16": "2UQST1aE2VTnEuS3FGH4cRyiTnt5EdE4Xcjj7zLrGhhjhqBQKCbDqNwLLyn8XCRwaKcCRhRfUJaUg59FPWrX1DQ2",
  "key17": "ePLfBbCzkU6ixmvL1VpeVSM8Ju6yCnDfgE4pRM5W3mUevedcHK6uJhPCfUKUkpCNurSe6C41BiWCSCq1u7EFKxg",
  "key18": "36aBUSrF7cyM7etNWbhAg2KMvgdHavbmQFUYqiQsyjDm9bxUzvueqSYVgCTTYQHZsT9c44JUyWpWAEEHvf4AHMHw",
  "key19": "3Av3svenTdLsRz3k8nUtATqhV3jptdPr5CXEGukJACw5QnKShLgoxfnMqskTRnuevEjTfRPkKFeqmbwQjJoHUpTy",
  "key20": "498xc6BG9zgV4BB7FYrd7mJ33KrpobrAGrw7zjD3zazJVCVkHEPLaJnV7ggT4wszYVzCEEdujDURVAhE3rXE5ZBP",
  "key21": "2M3wESTREdTwFjxTMUrAjTycXdQy8gNb8vQEg8QL2ggqxmzA74xqj2JokYMv2MCnufcpx9iCuBBqgUK71k2JEUJe",
  "key22": "5jyQbgWvfrK2TaauzhTHvn2yo8BqFsRnKenetYjKZmoCWqL1D4hNnx1ECV611wWZtyVdCZYC7vuQa9SranNah3NG",
  "key23": "YcLPdfRhpb8K9WvegtQNFKGLaz6z5p9h7e23VEe826PuBEaL9nRdxH37c4ZECnxE6oPFmkpyXGrJNynV2VQz6ex",
  "key24": "3wasTZ5AYKbM1Lwrainsc3jxEWHdYym9hyJJ1tUjpWt2o6n4emZv826CauGui9QgRG3hEBzksCDFwdrkdoewESYL",
  "key25": "3LNBe2tmX1nX5FDome8EQ5zhSdDB1fTFXDig28cNfm9aVmgVXqYqDJiZg7BW8xeH7fK6io5G9nxhWFru2rMWGBgo",
  "key26": "yNRxfUbYYRv6Ccc8GcAYTjtx8drEewvhk6N7dFbMafKAmuReYAAuTHYQ8FQHMh6ZeotBWzUQGhkjuYHwRhaPhSH",
  "key27": "4eYeMinmnWw6KNfjp8877sp8d9qCVcbVwMdrt1TYC4auDqHKobkdbDtUmrcpGn2rYKNJ2rXv7WGpszei9xcyb9u1",
  "key28": "dQ2bkSmsXVa2yN1a19PgJ3kDsFXDr3TRz9AvYmF6WixW2unNJw8wC61M8KLhGVJJUhZQJcPciqafzhjc6pH7UZ6",
  "key29": "Td91w1qj7xkMtcpVd7MZkVNmQak9rdhj8Y3SbxxyR287nhJdJrXH4KmjD7Ve8a8ymyULYf3YLRxAzZEJ3wyxbGt",
  "key30": "57YWv7pXvzLUgj1KghV3xdJDw9pvJcLaZDpVeSf4E3UyYqjuFEhsf89S3i7Y6eievcH94rCei72ybyTMtmBbEjbj",
  "key31": "5dPxAqWY1heBKcjABBFYFjNL8EnpWM9meQVz6fmjY3YV6xJWHXHQVjcoKFYXn4jdx76YyXeHgdhFfHsfuuVueAS8",
  "key32": "5apX6FLCZRvnU5eWLw77BQi1MMdJNoYEb59McujXmgMGHbjCE8d7SixCpuQVgNESLGrkrYPRKa7YiN4vaSgz233t",
  "key33": "2nLdSX2qWrW9MYaFiATxzM3UD1bNi1Rwoy7QL6PGYxB2fu4EMnS22fSJ51t3jM3e8qa2KZCt4SJYCmTwoC1b5kM3",
  "key34": "53PgNyqrrKAhdjXQ1PGu1sQMmEvDmhDwwFxYDuUTqUGVosagZpRXbP2bjYg4LDhBPW14dLqoPukEXSi6ty5yzba5",
  "key35": "3SqCXM5HhYGiMwFMXtnA6t2cdWQ4yD3C5bjGjTQ7vmhDpX5juThf8oTBBzpCYeGD7PhMekQaEVdT7RJNiWKTErCu",
  "key36": "ah35s9hpqYMPsUtrpvDMVTUApwMBqLCYdQgUQ6ZAh9vBoABepJPmaWdSDLwrNatKXkSqG518W6jPyBaXoRQaaAy",
  "key37": "4QeEJDVAEjEimn2qZt6Xob6VogWWqspkHhYxuBDVYDTc17Ln8vWB4gk2m2MMMfj2bXiJbonVEyNSsJVwk5TzB5r4",
  "key38": "GTsGLHEhVcQVNDRY93avmRdToWGaLoAV2DsPvj5ZFhm3gb2oVP8Yqp1PkZj4m33L6fx5hKKwEtC3FMwiUDcwtrz",
  "key39": "4PWqnFMGQYsENtWGAAwu7z1GypVfReRnLyWEs7hRyb5mQQSb1CexFfuZYQKGtfpgF2YvbpFbdT3Vg6pXsGnSRdET",
  "key40": "2MLqe9j2PJm5Nni4GzdL7uVCWfrDXsCYEt8q565UwHzRDw5yzebgtYN8kz5D1g5iZoCygH9VpEBDLuYk65eQUKha",
  "key41": "zRDE3UPgz9GK5TFijEFwkCHZemDt9JQCoRofsjPajXCRGFR7YhNWMsH1sGay9kzvVGn5rcpzvX9zgZfiKEmrM3t",
  "key42": "5tjTvGx3QnGiuNKAEqChHRMzW48f1aHW9A1Ey5hoUuZG1eCcJ7cSJGE8qEqSNZXVQ7srxrdcnNo297hCAEGWpdTK",
  "key43": "2fuJqVT4WdfVTmmGRWCY9aunUqQEAYV9SQFvT8d9pbMPKUMw5CL5UEdXjw2TwKSWD1zrfBpCcq6yux4xhjDpfyuG",
  "key44": "4Z78Vc9ejLZS3ja6TkX8t5s94N8gSEU8mfB17sjW4Gbuouu3ytraaMTNtDT67tGzNY4tvuf1Xakd3aZtoXzbVx6y",
  "key45": "2r7cJBNui6htjcC17UzqGKWT3ujJQcVgEUNqsWh9k24wgub9TCcVaBdS1e649P249nEmM5P15Mqef57MJFAQeztG",
  "key46": "4nABHyWXtwwDaFoK3tntqSHHtJuU6L8S9oKxZG2HqPiqrnYpszXP7sD9sLCoMAWpHLWRSNNLPdqcySJNVtjDfRKV",
  "key47": "62hDy3VRw5pSM4fak3GttV9Aeesvg82XujSrYyZBae97WUuZfKM8T7XK7XkHMkRdHaeoMv7uXJkkfcjm7SgBJXKQ",
  "key48": "5TRd7adMeh4hz7ijV9NQBmd8dNX3CuXAmBgMjmV7Ju8vSQVduzcvKcjRRZihowAThH2AcjGXCZkua5ZG77TJMCU6"
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
