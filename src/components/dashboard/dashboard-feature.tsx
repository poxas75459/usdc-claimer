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
    "5574aRCmMd5yztDFC96yxtQzhLSchmqnBTUf36f7AqeCBjiNQFCrKhGMScjFnd6BkcL49ncPY6ZtCwpGLvNsDhBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2smbaAA5J5eRNmCPU8YCsMa9TsVkQtE3BGgaTTTcznjpXJtoTrwKPK26t6pLoDP7tmpssEdJNpM8gZsNUjPWXUgU",
  "key1": "2KviYmwA31Dq55N8t1dvBSUcaoqxJV3ncLkesSjtstuG5dcqv9o4a4f8x8kCZZ2qUfEwAp9R51oif9ky8AquMpWv",
  "key2": "5vGC4B2r91YaUhyFeDaDmPBfL82bmUuG34cXA16iv6v8fAxgwoPFmVjKjZu2qwqebKy6DNxXut39GAXsk5hZJ1RR",
  "key3": "67bkRV9b6TGLefm1aLqym4ACDFeXthRCM7D5QjER96dp9B6PywNk3xSY1MnEhCBXGuVMZBDUTNPiAqxcH8wampp4",
  "key4": "4zrqy8xTvVQhbZ9CoLdVUHDQPYVw9WYerk7eXhCze4rgoza6Usm3JLTZHcFojWjcHxcNK6ADBZ6BQgagHBayEFqA",
  "key5": "4hDesesnaCG3ZTsjmE8m1Bj4YBf48WqHZap6FD2j94G8NShLtDJSFCQfjLqbokRCiP5B1icYkZKrKoqrFWS8Kvrm",
  "key6": "d54iMUMU7uELhPdJ75p6pr7H8RWG5kZ4t9oFVLP5n8is7qUwpQAZS6wTrJrWEyf1kiSEKUH13jsRrQ5UXy2qXvm",
  "key7": "67Ci5ZyqfL6bzhVeFRF9fat3FXdCMdp77yBrVqqRA5pFJG5M61dT3g8wLAwHT5aBDxjDPJFPpkgp4DHci6X5ZUfQ",
  "key8": "PzBRgNQkQxVhQdHuqZenPTdk3HALtiJBdhJkaZX7H7jz8DQxEu3R7hzdDoGBct7pZMWJ4w1NhTjKAhh3VSZHYhZ",
  "key9": "54Xg7xsrbzJXW5JY3n4ViH87yTkoQu3Tb2FXRRFW9Gk22vZqCFuYKUj57sFNFwU7FBBr4tMeyw32nkupfidj8AcS",
  "key10": "2QtfdfpvKdL3gp7GKY77DbSZD3rn5UMFPQG8tVqPsgxa87qc52Qmg46U71rADRX43JzLQg4vcv3o5kRXqMSZNTwu",
  "key11": "3pSWaef7qKQEKHsrHza1fwP6Ewuvv5gBbDST6cxXdSZyFoB6eacM8edehx5TZt6qPmhCjguifZ3DE5kRrQzZeDoN",
  "key12": "2myyZhP4xKB1iTpmTwkiWkoxhPHBaSffYdkfkz77kF9yTDvadHbBtvSU8Zm46W69JTPAWudijbon3LhMFrLJP3g1",
  "key13": "3nsC8v9Dd7JNYyAnDkn5HVqmjMq8W6zzoFoGTz8i7xinmJZzKNTzGzjZffkuQNSAYuk18NAWrkhMDfBoDYYrAYZc",
  "key14": "4GGJuvLyfBcVWkcgeHJTxS7wa7can8HCY3UzgmmPyc3DiJiX55NcXUguzfYZpR3KfKKHXQcuDGZrUpEajCf5Qk6B",
  "key15": "2uaKYv5nrd6YAjSSpNj6wJKL1SNNMJZDMGuxX4qMF6Las3ofVNpuhgk8UARK4h3ExK9s2Hs1Jd1kxjGkm7JrG6Rn",
  "key16": "CxtB77M16NL7XCX7mFBxt1PJvpVohvucjPngqQdajpwDEMNmTih6fZHXphZotumAtcjdYzXxpiNWBwZU6szTTNc",
  "key17": "3gcy4KgcYmQmV2PWjJ4trFg1hpadUuu3EynwiXNexci9wQBBMU9VLNcHQBFhtW3U3e7QTsz1UcoHJznoNc8oorF",
  "key18": "2p3oDS8ojPmTVLYB5VYQnyg7PgiuDroAiot8CH2QXZ6gMvp44N7Ujfpf2koxYPeeUvMzNQnQLDGRNMAwFuhXyrQw",
  "key19": "4uNihXytUUeBxVX6jejAUhJ7Lfw67QAXdw2K6Uts6Rx7aZp9xWmSAASDMk7gNsgEVXyf6TAzcz2aP1wYYdAkk7JW",
  "key20": "3eKMA8xv72hxPEULwC7qUMadunxhdBT6ARzPtz6yE2YxxTRyAzBfHbNgXB4JcRsnVbXzuGxbAD1LeiDMgt9JifKs",
  "key21": "2breF4z6pRGHawQiT6isAUfWnbqgKDTF1RjBaWFAdPtmftnbfGpJN8dgYVhZmyAC7yLSLGLH9awCFckHgh9ad7ye",
  "key22": "4xoVj8EwvmnhcMPC1FjaXsij88TNaFjxtHDYnkq4bzasCLrdPyXAfWSvhRTet3ePWpoNedeTceWnyQKZouR5WbRT",
  "key23": "2GbFgTsxZw5W3BPYhZcEpfMEwFPyTFSfbfML96m3vUSoT5dxyjhwHp2a9KxPx4S9e6wAc4hwgj91vRasTmXY98Uj",
  "key24": "2e8pV9Azu5R7Yc9wJ41s2YzhdKLgchMgwvEfDRSUQFT1fvbkfGN2na2KbwwRhkvJZFztyRBbK6t5PH7mfPH56QHf",
  "key25": "3NKH5ejQY8aj6F9xfwkSS2eBfaWEwAenAH4YsCwoHJ27sWadqXTd9yhy8Lz8GWx1FCb9K1xVLVAwChfANUZG8Jo5",
  "key26": "2g7hQ7D1J4s5XVryLWqw4pe2UpBJee8QwkNpwn7zrkdDvts4jLFBb6PdWPn4MgJCEcrAWU9YMneNT7w4dZsBmFN1",
  "key27": "hdPs1SchEJZASXK8keSqWKDKS6CAy8u5RZxbeBJUPRu2njNthkYJtqhqnFEtWkQBdiwNn1dCPCU9tnyJQVcUceU",
  "key28": "2AGR8PJSZ4x866ieihoSywbSz5oSaG1CgiHjnVQBX4Xt2jAAz4wcAQi8bWF1if46QbA3knoRNcP9dQPaxSJjDnXX",
  "key29": "5hkKvjFF7CED5Wa8BVB9WZqWCD85KoDFTvBXdFK8xpJVUUgaPdJeTxCfGYtB8wLrv9ndYY3HsExob9EY9umswHjT",
  "key30": "5SBXm4ZjmCaXMFNpUuVZdiKhPVVbTgeZoo7BZFLVKuu5AUJSFZ6pWNSXKbsQnwfUSiB7BUQXFeH1qCLzthrB1x7Q",
  "key31": "2aejnSKWSB5ADFTzHqNMGAut2MuCo4DiWEsno77gBRCiNpghPhi9wP31hhqrfDHuxYQRDhRk7TtiYFdPsvWbiry3",
  "key32": "2KyiYoGjKxjdQZgJzdNo2NkDALUBe6tA6dyHsEnfPPveyQFsgto5apyqmQ4ZwNRv5DpL7unqpjruK4Y7PnVKtCbm",
  "key33": "3q8fozYqZsiZKY7Tm7eMeosKPKCaaaQS8daWYiACaaPdtHV6UoFnJovxZcXfF4x3AHgDZXBH6biR1nmH34DARDYS",
  "key34": "3NNbJDna1d9seAky7TjvjurxYh51QsY5J3xitFhSHQAzma6qBG5cFZRHM5C4N8SupaWNVrqGuVd8sXrytCejQ9wa",
  "key35": "2W9ZGUPQcNjUA4QWscJnPBz791uSWBKRPzcEsRqm2mHbHPw2FDLEsGFw5UcZEqJDmsjruRmrDDNKMbx4efBCtGdC",
  "key36": "6YrZSQ7NZEXA75iunXActCSFTokPpyRFfVyLvDYyQ3AVxP2vXjbbTWyYXDUy9hqcozhLqjpjXyRZ8qVQkn8V2uT",
  "key37": "HgFnVkCa1E5NyEfM9az8RwP1kVEjLuuStdWqjL14CdR98z9azRspPDShZDdWYQXyGt1SLsHuUXnWJCRapQjwNff",
  "key38": "4rRS9ahWJTxtNaMa1tHRk98eBWEWDibCE6cV1Na5Dyv7bwMUyXNDPps1WgYzZhd55qt7io9kVo4PY5pqcxYwWujH",
  "key39": "5aLGx58G93Hnx9vXB1EDuyhTVcDVyJSpmfQD2ULMkqWqmBsgTz2AJhJq5aXyMZrrcE5q36jenqVnTp37Jxni3CFv",
  "key40": "4B6scujDHXLMi17aZhtWoodrGeF14xnW17X8T5p9qBo6Gg3uUPSsWb8Pd3CZFycvb5C1kCUb2cZfzPQEc4DjNCsS",
  "key41": "2Xkj8xTQ5xYAguri4mDGsf6RL3D8Zd1ZcAWy7Mzts6w2vNyoUUftaS7Ko9M3ko5LqvQ82NNx74kk6eMkfBGh4WHv",
  "key42": "4dE8He7T9NR6cZvBNdnK3zjn6HYU3rvXr2tVG811GCCTzVc5MAMzjtzxbqJuwXQ5ZumfzvYumFqXGbEh2dyhCjRg",
  "key43": "3cj3MxW8ChdjHWB1zUdAjrncFDDUpp8XnHjeubi4MPYpMXmUNWHSQAGj672TQwRxaqtgfS1nSMtpp7GJbZARzqDS",
  "key44": "4AkshtFNcdjYyQYp1kouJMLmh7qS3s4pVHp2b7xKX2jqMAzyACzwjTovVTtrMJQhXL8X6kWcSzX6qmFZMAj1Jo1a"
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
