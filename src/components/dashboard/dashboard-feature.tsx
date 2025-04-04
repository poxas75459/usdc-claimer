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
    "9aajvS9TUjtUUphBYUEuBRCrSGDagCrgzbkzdfkNxwSGKw4Ni57fGB2b3xYpezeombsPy8mhkp3gftHznFdvYsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SMs9yHM5k36rjqKEv47LN2ttrC2DVdyT9ztzF7RUHNs8YdnYhcfPo7nrDWWnK8Fkz7pEVm6kSMKSaUsmPY9jRfe",
  "key1": "4j1cTAc7sYuioN9FyKgTnkDKv8AVSxc2mZKMDrrTswGDgEBrz4TCSufNUi1t2hf4ZcgcS5h7gty9ADmr46nhPmFs",
  "key2": "yupgVAaQFEKnW1mJ22iE4RBuXLR3keyjxjBR5WSiWfG4Q13bDu2fMa1MLuTZYReHmcwDdD7qgD5Dr9mHRHvvQea",
  "key3": "2FuJDgjbuoUmLk6PN63Gn6E5VPgnLiwaWka7c5r2nBQVtmvGvk4fBtTMum3ccbCsgiFr6QFYvhtBShx1dGHq7Sqj",
  "key4": "4JU1NmK2kqpimJqgY8NJFdhEcNzBeyE6spgKApprNDq21VpkPzkwbKNXnBrNrkbD75WaVwzdur8S823jDi8fNLKa",
  "key5": "2sAHeajqTw7DYBAkwfXRyk3ttp454uBfC9GHok8VP1WpaA9PBnTj1TTRVgxqcHnviQE3FYtn3PYZuxv4ygfeRdmX",
  "key6": "3XGSGnhMvPXWNc1svSYYKDqR9Xx6LNGvMD7bwPyiXW15b2a6ruCVAJ5S1oNYiwsFYfMRK1oUchGRS6vqCWaFDJ6s",
  "key7": "4fDwb8cz77vZt2haSykuRFS6vAcANi2dha9SVKNXXfgjDQbF1VaJ5WjoMZpxZAojYne8JqoV5wAWVuok3nBq13Aq",
  "key8": "5RxPRW4xsrbB9SEE8wwaEhxiLU8XheffESr4mpApBUjC2qEteGkG5HiDEYtJMenYyRarcqVoy8GZKxq7QyJZjftv",
  "key9": "277Nbhm1VyK8EWoFFCYnyx4jq5Wr7MzrF8KQitA6iVTGhJAUE8tnaD1TKtFEULDaEMKxXSSrex6vJ5uRz4F7Uzog",
  "key10": "46gkU1RbfS54BAzVPkghX8w5uFAiKeTEgS5z2sf3ePtA1sgW1haNXUPEkQsuNUcox3gaxWpZMKmX6GhgjwJLscZQ",
  "key11": "5LADQDnnxtET3Z94JiVDCkeXMNX7tQ1ZsjnbRfZc9rcsB4UEXEf2bzSNUmnuiiJTgZWN5Fox2xcn49mqPE7xf7iL",
  "key12": "5CdJpGqkAXwyTaque79ZhJ7itQUNVXD58VkDNheXKKxaYCm87Mue8oAtWcviU5QEsTsqbhfETwRmaWn4eBnWNiTP",
  "key13": "oJEd5dBk6qERBYbFpKMVW5H78DYFaWfFwR3YMbYsi682eHPS6JGCZEMqgV2ZgmKEdHMicbkYhyyC8qEWHShE3Jh",
  "key14": "H7Rak7JzDecDareGpt6zBmvpJW3qAtSXLTsMe1RVBix24NEz5HZ1PUdxU7dBxVfzgi7ZDPvoyHv1JTmMk9gewDh",
  "key15": "269EHmd8uTyj8yj3jw8UkcJAkAgUTHMNsmsJTz5i7fB8ssAayKowS7tZL1hAEA5Lkx6K9sEBH7sd2nwCHvYFuErn",
  "key16": "3HTionGoHTqhHmzGcMGnpTXHZjUxxf4AV5XjJoiHG2VtWdUPQBpVKxQ1Wd69JQZ7zCpBsBDwd2Wkk1Z2WVKkUjp1",
  "key17": "62LPmG3UAvcnWz9c9paRCcwyHVCHvvP9RgdrB5Gfhb1K5dgVwk9NqH45up7R7cYLEeZ2dXrqoymUpimBp44zoJoY",
  "key18": "4b4BjKXdmmJoBCiGPMdaAYVREvFbjKx4rCpsQLye5coKyJ5AoMSHhJ9dDN5hv67DWKtTY3tQ6XZ3ExrDJKnMy3gd",
  "key19": "4YnoyNzaSfn5fnazkFB3tpkAURCqua9K5GLYhndPwKYfrQivDMEzxSNo6BxPrWAZ4NGLbMDNm5gY4Y8KuQzd6Fps",
  "key20": "nyrSvmCDwkX3FR7DuamUVByr34JLzkLPu3vyYpq44GUaVt7rpgJ5CzH33Yyf2C78FcirvyxZPvF3ezz1G1ADRo5",
  "key21": "fdqb1GKiLdS8aVrSQGf9y7hLhvKkvsdanrZSAzF46m2XnSYndaTSr92hyPA2Yagq8GPcY9U7URucHrbctEuGm2i",
  "key22": "5HcrsfVvEoJof1FS7KuaGvW1JRozkGgaNi3cQUACCPTofigZ4CxbMq2LkbeWNmYnXz4ieASHS6HnBMrgPkhi5ud1",
  "key23": "PC1WcN4oDjtF7Lbmy5AASo1sMS9ZLqDhXYoPzscPpY2aU2FATkLyyAy2hSWWtWXhWxzHxDiD8Nk6CJtv4k7th92",
  "key24": "669shVAKHWvYrFwJ4axc5n1yF8QVywg7dY7TqHgazuNntQ4amPZX7WME9fsWzsuf4xxLWUuz5c6tVCktzbmwcPJp",
  "key25": "36wi1EW1BvnbFQn25d4qEfeZb7zHcaLQbzCS1Szec1vQVpcJHDvmNCN5UeJ7wbiZ3EvMKrLjRpU8zFjhdCTZQ8tu",
  "key26": "2hNDhiUX11XwDkGcnBJdBpxcvbHUs4ShrZDb1oEwdqGgwkW46fJtJfKACbySnsnburWAwFKSy8NePSAYT9sj3iGZ",
  "key27": "3cToUyKDjPixvbsLB99dfAsHtkQ3ebWjg8TbPQCZeRngp17Q3tnquPXrgCZ8DhJiVXmcWjuEuwNo32vQu8fUGP25",
  "key28": "HhcughsY9zo6KN1DBWZHC64S8qfY9SgUkzqaPJZkXDQyZrFJS3Cy9AruUY5Foo1vSuRXTwXJty1FhxMcmA5rFFz",
  "key29": "2unwp4i6MCaBSjTwLw3wt8bZGh1vnXfCS2GPhXh1xSGeYgM8gPY2nmzGeT8hW8PvJUuMqojubJhco3ovk8zSmnZk",
  "key30": "5nwQBcWu2ckvGZ6G9Ny1ZtZMQmV298Fpsj3kbJrtxnbJsr92S6MpoFJsS6GXgKvH7BksbmAgZRzhwdZFRMEdSYtw",
  "key31": "eRpW7BDVeKmmhyakFSkaHABkKDbnm7aUG3F6f4rrFPLmUNWXHqVN7aatLrv3ANgRiSYftnW1jp8myyGZHqxkwNb",
  "key32": "2v8f7AqGmsG2XXX63SsQ9gprh9YTQw7cCvq2F44aw3HgM5SC9tRZwbwuLTUAyLiDWQjsR5ZLyR1vFbnNnUbFYkK7",
  "key33": "3f633Nh2TZhLmEgXVHY29jxpfZBo79CELL3cVwnmSaU1tn1WS3g2n3qYdM4i248TnEyfY4vTe7KdHCzggwVe36or",
  "key34": "2rigwuyht159oBjbKdokVqcKwixWB84kTUUwBP7a3J6jbexKuTuLKTZYNX2CSK75WoBfSHAQ9fKaZbupLDFvRSxy",
  "key35": "4uqjG8xFGfayquZMXsoYJsb3g1ytx1SbybwEmZHMeVvNZCQvzoa8NiR5795AphiKQsVixGYZJXf4cdbANcZiEtzv",
  "key36": "45j5WxXd4pxXd9CZiC3tSdLrWRsY3XxfUmVByrqfSZQGLipYCU5dnh8vwaWRdWGvFfyB9hxeKxnjNB1rtKEBRujX",
  "key37": "9bK2w18z5PTNfE51LmKYHmSZB9KnLNgffe4URJ51AQSHUCpVbmChaPPRbmn8BvvskTr3PmgAjCTZb7s4ZfRHkAF"
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
