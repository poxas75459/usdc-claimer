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
    "41AVhd38C4wrjndH8WDWmyGKqmer1md63pcNZS4CmdkWUXGU9YznBHBynVCYZeMf8fdhoQvtmsskmg5x26sFbru7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NHZxHXqhLhfYDJAwayv9dkFENgN1ePPZMgVAKuUeDDQ7G7tsjKcxB5JVYKEEcDVdXdmBrskck6oqBej2nJNGegB",
  "key1": "41Eo8K5SwB6LHNG4yeQPty7rtHvifrhdhbHokmF22ECkuezysZeKDUvnLSbjSEW83PMYWiCa4hEyDpLZ3TufyT7Q",
  "key2": "3T2vKnoGEj1hUgX53jh7TVxdxBVgmP8TyAEhTN2GqWUJ2PX1oDgNvz2vBJDv96oSqXWv2xrRAcSjvU9sZDBKkrWH",
  "key3": "5RUhNmZ1rpX6rQhoiNqqFGFxBJc1R5gywy84J9aFVmY2whUzKEhcshU7cho4H8tRk4KxPh9uh4CS1dsqBxoDdkvH",
  "key4": "3tZVza2bchZbDretHfFSrFCdAwSYooc7gwvYcCcPNwYdJjgianTq5J1gA58RyPCg7q23MUKPeKwiLEgq316RCgz3",
  "key5": "4ToHMpVB8sruPfKjBD9fyNMD7VzNxZk8zPgvKjcbcREVmpDAw3n5xvekveT758NxYFJxZcCnAk6C2MSBpufR8ZRR",
  "key6": "c5GFKyrdWN6dYDTzi6oxzZiLQXr5FaX6aqBgt4ppRbwwHzEyYgCSKEbqRKUrMTkghYxFCcg9RmLhU1gFo2XoAKL",
  "key7": "MFdQP8ZA3GBFXdfM9HEReQUcmzaqTMMbNtLMPSgco8Nq7SJxceYpJASAcAtuWETXXiaaSEa1sCEeHssVAZsptci",
  "key8": "5DTJHRovECRvk9zutzovNAuTnJ5ZitjHQYG93vj7qNDTFt7eYRzfNKnxc2uTGM5jG9p7GEbFE2mew7FV7ihnS1Pi",
  "key9": "4v4herBomXgYpxfnmLz3c4u7Gmk7N85Tgq4EYrkbXtkdo4Y4LNMnH49qjjYL5B8rUCh3tPHata9ChD4mdqeWNNsa",
  "key10": "oMaapmLetRUXKNQMWsPzBoTb3vKrenYvXeK4bHLhKPB7T8ZHHcmFmYSsmEvCntA3o7Hkv4HSPm4kMD74nzpjuVU",
  "key11": "a7uMVbGFPitdkgM8NLv1qURmewQgQa2jbXU8JD9123FnY3mAYaCX63QD1MWUheV9TMUd2SmJzeCpBSUoDty6B32",
  "key12": "5ADXMbPC18Qjksmrv4hN6hfDvpaocUDpy2yQdsq1ZEGHVHYt3wBcyN5vovpB7vxyePNavddSxRW4dcsHcQdSKEgX",
  "key13": "4SNwQe6Ad8fAFsLsWcuuk7bFyZrZCBZfr5dKvHBM6qeoAqBg5q8cuuNSuEVZNbFFbfGTbpD3Bpf4Fxe3oA5qYRYm",
  "key14": "23zU7LZtKk6C3P4wCMqvNV8C2wA7RtxvGgY6HFEHmrXbUYGDYEYUfhiRHB7sT7JSGbjiCKfTus49CNnnqvVtas6T",
  "key15": "4mVY43ZFHruKoANZzMp8JELc4MS9f2sVBd6VT5pkFXtDiZntbUPiucQ3iQtAgyE1KCMYvCGMUbpYXsA9a2JSuZND",
  "key16": "363SL3qyhb3kGiwLyF8m9fbQQ8hm2GiPtNp65xkwBsgdnWVs5ND8JPvN6mW55oXKFWEhoaBHv7F8LhCPhQaZuWrX",
  "key17": "5nH6rhskGYqRa9ZJPrpGiABzQV6HmVgDKUrCowRQEnBDL3FSkQ3kSVDWcjBkcMBVDPZTC8U8nUdz9ZXdGrBLWBFS",
  "key18": "2AmEWiA6JXxnHP5z2m6NcGd9GKFPV43KTfoQpZi81Pxe5F2JfGXbrwsjDz2N93MQTFS94rxz6HkLVXZjY5d24Zud",
  "key19": "3ZJgf8aXBoQEdyDyqyrh2cXBjEx4TJqyw1nANxMmYgUTKHMqBAwoCPNe3dLUKFtxqDwAGpCSbqMPmTNaLsehDNhr",
  "key20": "223P7snPxzubr1qs4fVWmLYqgneMBwgNYYvYy5USDgUX2skYUXgAtSozCgtYQMLyB2wytJ2LHV22ydjcQZM3jkNW",
  "key21": "5nVqL9WoDjokEBrpYrC7ZQsazLt4bte4LDv74xiF5eaN8f6NiS1K4skbVQPkszRb4yiutp5ASYUBmuW4hFXbmT7G",
  "key22": "52eWh1BpTzh9PW4eeMP7bJ3FaSpBPQnpV4QGRo4Dmqr2qP5P2wFHTvTWD4MCdkxw5uk692zD138pfFHZQKEMc9Z1",
  "key23": "3i8oNPr8msgnap4nB4XAnmejXzLk7ZqynBGVyijyiCYLHvsPYNARy4SMhouM5qqSXHg58X4xRainS7ynV9VFgWSM",
  "key24": "4ynoSknAMtN6gTS5hNWiajVSona3NAkMFuHWDdpuBnrAPinDJo4Y25vrDEcfrx3Nh239r8G8BL3kGJvL36yeuT4o",
  "key25": "3xDdpp2MaGPHLM7Kti7kA4NdpJpy2g8uEeFfTgW46ULPARafvRwscphmnEEra2SJnN8aQiCrCRXorfEPWVRWeXJ9",
  "key26": "5XTcf9gumeaD5SmDE5dRQ5kGhqp8jPjvGGAVCB3BzSg9sj2NFahKPUU5mhMvJp1ZMRoRJ8DPixXp3DDkXZpTGpHV",
  "key27": "3hzoiR9tjTCmdDZeZrWiHb6ADvVac3ZJtpi4buXx2dALwMrm1Fh9haB8wZd2kWZhEiAwLrVETMupZC8JEeN47Xs1",
  "key28": "4dUnEJxQuf8kTkf9qCQuSYpD2EYnZQyswvS57YaBPws7dt7NKJjbmPDqAD2ayGM48evUM9WUVZsZBMvavTQkQBM",
  "key29": "tPdNn8p1QDnEEd9fEvCNgL98CnHDimw8mq5ziWKDk55QMiufo8ZZb62Q5h68jRJCTX49co5ZwApFveBV97VKL2R",
  "key30": "465Hvrnzr8nxmud9EmpSoAkKSPEMiecGRj3BzQhcWKsfB6aByNL3q1nCYQ1Xpzcs8jirz3KyH3qYuGAD9xuZb9s3",
  "key31": "2TFzASGQ1z7368AvDTh7bLAimCbFbuUYT5xUBF1jMZK6iYsqj6RTyLH8fRC2CeCZUJuheYZsRMcNizoeCAgyu87a",
  "key32": "5WoGuFHzcVBk52uECs6oDwiqrmYGyCCTknesXjzr9yVgKrL3fGKevDhzVgHmfPgyDtTM6iSSquuxGNCgK9HUQ6VK"
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
