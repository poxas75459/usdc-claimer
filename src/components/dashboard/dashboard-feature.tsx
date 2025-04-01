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
    "3DDQ1ETD6SvonimEoWbj28m3zCgunqXR48Ur3FTxBBAKdUbjpbiGbU42thskrcqq3k5BryckmVPmq6FMfg8UbLHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A64uHF2NiUFv73URDSYsW2AYUaGwQUFGxU9ppnYDEKLDwWYmCVtNdbmfjzvXHPapTZbWiguUt8Pf9DKyLj17izQ",
  "key1": "64EtyRXFAMe3iV96PaGL5kZjJiPWroQDZw3LHeP5k2U4vStbCWjHywNKuvkb6E15sRE7GSMMQ8uiLgqM2SqpqJdn",
  "key2": "4TCqbDqaBEx6RaKLT7PjjKai7skhvSd67xH2GGivbY2A4ksixgBHwKwzdNhrg6KmYopWYWLJn3jGcYob9YQwdcMF",
  "key3": "4vigkG1EgE1AN3sWT36knqA4DXbXMGLLYxXb7xZTmEv8q76VBfGiTu1cySSn4ZLdns8hdoRRjYK5A2ChrhnPMS4h",
  "key4": "2j88SaJrB468XPmtcNGPdHRwXyP9hG2ub1dpisaHGpXfS5PEeyTyHeYabRnTEvN1ak31LV4Uk3yMfYC9Zvr6bw7d",
  "key5": "3iJsLjKTpRgQ4bdMWqsPuYN9w1LtcEF8QAaJkadaYN8SKnuvtv2mz7PzPptgHRPSTivyfsd25RHjNXPJUMoCtSXK",
  "key6": "JBNeSC9bjvUNCsyHzebXSf9VVHg2W1844KJYw6HvoE6JWQKYdZKN61qbocjHmD6VFR13gUzHRqV7tWA4gkPv9fx",
  "key7": "3HRChMz24dF7ieHmNfSpBnNhoHnRMXE4YaUzEEoPuM3tpoN9fRD2n8q7JjuWr5YfWsMMosNjxCuVTRFSMU3TjLQQ",
  "key8": "5xwu16mLJBAi553qf3ovNhqkj58B3WxazFdZFtiY5pU6MxDPvc7akE1cXVfonzf3cTkyEf3VB6koHcGzTBSaDD49",
  "key9": "5bYyxJx9q1wrYtiGgmFqqapzkfv28TVUszUhni9s15jVnAdUwumhaHN6PC6ZDuCBSxqvDArZ5wncgx3rdo3tEptx",
  "key10": "33xgwQqKNbp5nH8RE6PzRHLgxqhhXfRQPVrawjeJdTqKWMQTukPYhsXXwREvXrVoGXyRzK7xU53GLu8mESPdaZ6E",
  "key11": "XB32xWo61FHcK2TV5zf84RXUn8ut83rLftonJJoVPBAU2zSdUzkKbHmq2phgphE6ojcGx5KbAQ6DoMrZi6mGiFB",
  "key12": "4bpwHHeRwjR41c8aghmmYuGebN7CsJ45SpA1AFJtVjqiD3W73cUU9r2cogfz5naciuPQ3XTZCpg1Y1jJCSbr3MTu",
  "key13": "4KtitgBNEm44ih5oRMq6LwD8w6xznJDGgbT74WKKBX9ir1WpznEnkUbhsCg7skVgtm5V48bCXfxanxq6ePc6UJB2",
  "key14": "4tE9rrDRFVFJpJmkU89nQHu9wu6piXtTs5ojw8We6E9m5WAX5d86M4QJ82Byu5PAagyQ9BtoaqN5KWZDkHPk21B3",
  "key15": "3ThJP46BqwxWfngDtqCEU1Lc4etppg9EEZXq2Xd4vz9nps8Fx1AtZ54WtUJGLk2QMGKkjFLHewkFx6XiQDLCPx7s",
  "key16": "cCAn3cnnqGFZCD5z3GZjpeKkGoHWUZnbxC3KJNf3NCSNpngPRkBb8jqcm3hzEYeYmrTDx8sHFpvJasVgX293kso",
  "key17": "5tEv3pVXzGFwHmmZmuzgD6291buSU6Wx9QWm1vPXWNtk8t58iFaZVPZArWocUmJ2vzqGBnCCda7AgYKM5jehip7C",
  "key18": "3fpcrC6JhjRd2LjMYaqoaz5kyVgeLqf5igFR6doFaLBvSuc6jiq7yUj33Ugz6FErBCfcWUZ7bKzM4Xxvw9udfLwg",
  "key19": "WutLvzZUfy7mL2f3qDMg1Uxsov1gEyQYoXbPKMyQtJSihbyHFddNDZbFDbzzHrZSD7d8kuausGD22V5kgzwZte2",
  "key20": "4ksjDyXnotFv9Eu4oyoh9hBYRoqQa7VJnRCTRnMybmxKMpwAi4VmaKPLsU6WvFhsauuWQ63uD5nYmqo5QL3G1hBK",
  "key21": "3HoZ8Kr72SQUmngnRCAaaGZpkomfCoNVqocEfbJGBry9jFsrayak1hhWNDiGcVqvpCEaBZWKtEB2uos6Cj3QC6WU",
  "key22": "2vpNyosSBjaaKFBiR65RhzdRb7ABg29WjkppTs75JNm2XfVoDiaaALaGtDBsC5HNFGAA3LhLcJwDusaMgbZqTPiU",
  "key23": "rsd1xYbgLHLSbEscTReELojUnGbw5eRv21ajEQVTivg16Xmx4oCb3sRYx5FYdShxFounSZVK5gfveFYvxBgbNiy",
  "key24": "2BSjMCvyBmtWEzMvzvroF1H5esnNGYWc2XecKwr11R32ZY7REtdKue4bUpJ2huUTS84kkz7nGPP1HHvL2VuwExek",
  "key25": "oEZkrrikqaxy5QYAk2Q1vvKbSDmi5NrkJxNfMXATjYibGQfYfTdANGsg88E9Q3WYLnauYDNqaYzy1Z4TmjaeJdR",
  "key26": "3GvgC6oms4HhJCA51PhfEA4dFBXER1kbP4SrDfX1utiB2knwgj88F1KfNBQH7RaZwAm7vMzkyLYq4qaieaYFhrx7",
  "key27": "39esxPsE6hBsJAoeUmZcDwAETienevWcjRB6ge8W4v49gTVGCft2HG7LY8UR5jbFC4WJewAaDK1LhZjg1iTgfpTQ",
  "key28": "pUoqyxTczUTQBQy384pCh7c557S2gnxntL7XN4LMprvsM5DYxKXakci9B5Yg4R1THVx5FmQJhUQSS29jqDEU5b4",
  "key29": "5V94WGqbo8reTp5ck1S9pB6659yT5iF8K28qHPnwtsHEECg5AfpoyqxS3BYcdNJDW5cfQ9H2ZFeMD2xj4D7cPjze",
  "key30": "5WzQ1rja9id13YUGyKCDPufcpYCDTijVV3KnNJ8VLBCgBmA3YazYgSNn4W9x12BDxF5Q6e9jJbh3hVSJeVhHAJFy",
  "key31": "48SbpojJbcAAz2vjjKx2NJoV9LYCBxAMsrUnHLh5TeYu59aZNgVENXmVLXcw9TmJvtpQEYt6CdTRyi4G39Vx9u7N",
  "key32": "2TdNnxDfGVtujb1gsiNK2revEFXPPcnApN4TF8dXhdTmysv36bLtRBt1aNT3Q2v27pNmqeFusSk6URapVkNYugp2",
  "key33": "4biLTMRf3ArBiZvp4jjz5APh5ZysgFn6SRYe3AaiSMmGz1kAEgcwzPAEAXznZa5eN5GERephd98owbxiuM4dMGHS",
  "key34": "24cebvDy2K1fwC6kKoCChT6b51hqDd5xFvubgD8TWhHiqbCWJ8KHUgP98hhkx3QMakqeYZDbeeRutVRYtAxRrzXL",
  "key35": "3pSDhvuF4eek1ViQGKQ2SeCWfdbU2otvLgPGQ4pNdoknSGssT43zCZeiAQ8pGiZyCqBfoPQmkqssJJtJk8sBdPVn",
  "key36": "9MteJn6ffSi3RR2aSqHJupwRHzPSMDm6u7ot74rQkVeZbh6qQ1yEKXFYcrbq4vdPzkw9DSbXjy9RAWytDrEmvSa",
  "key37": "5Vv9KVHaexMxm7pZNxk4ckJRwDnjRcT9tgcvHa7vkhy16ZxfEvYVCwztPZQF5mxfrGVgauD1zvZ57koxuwHTbEXd",
  "key38": "4jQ4M3piL6SiuHhzYFivUF8YTWFwxs3FdqsiTvBpc9RKXi8n7t81SDFt6Gj8xfR9D4zxsBBT6qe8z7aRD4ePJ44F",
  "key39": "2P6uT4FrqeLHRNEnZqQw2mByDGqMJLaXytSTRdR4QbmTQBxkQSSuJ5HvtAKnRcmupkD8djryCRjo9ziG8VrD2zKf",
  "key40": "37NLX5CJpGCLoEbTzX5NYawnqRSVGMmHVNG2sfjhJiKZzyNqe24CbPduyCbuR5icdU8m5YJ5bBxyXjucPyCuUqgG",
  "key41": "3bmTDAw6W9X8DNU9Vpt5pf5T2JhuaFGH6hoV7afdsvvd8RepreUpqDNWBJBSqmHyqSk72LdM5foEzoAe6fjRWxWK",
  "key42": "34Lv4xeYR7usdCQNDVmC2AF3VaXMGRHFqqzPwCkPWqQuonxkKn6KEZMXxYLBCGPVgVMBz5TbwxRNKLZooXZD4Npx",
  "key43": "5khEvZgpTvV2rMFEZtGMUmoStsCLYDUqRxZLm9bHPdtfD9PhXbZcJEWBP6bynnGtqaktAxhyzdTab8Za59Xg6kEe",
  "key44": "3AAkc7QT2sFA8Uj3SuskA8gUPkSDQdqKC4GE535wAxqatywcvJyr2QGGxjGCSj5mM7zaxduy272KwdCghon6Fz87"
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
