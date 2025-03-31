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
    "5hDJ7UfC15Z6Tbbu3rnyWPJTtLjRK7VXdhsgvNhJ6DHz76wC6Uxz4fv8PdRmaVwxi9eieCY21HLppPjkCz6S392K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5an7VFCRX1C6LT2sjAoGn8VTgk8zpHtDSssrSNpy25P45MzzLcVNAhMyJPLPxsrLs5Lm3MA2x2oonRuzt2W7x1Mn",
  "key1": "5BTZvgf2RE2HxTSzVfxrzLGGcnsorTzDkZxPo414yowXmudHZAnXw7BmWzXZKFq3jbXREWtWNiobeZ1HV5sXQhBR",
  "key2": "41pWPsxXWwvh7MaeGXriEaPoABkoSLFM1xi1LF6HnPsqAKYD5NKL7WhqeRt9zrLTeEL4XjBZuY978Pe9UAEmtTWn",
  "key3": "5YLWifmWFEZZZKqWqVXyFQwssvKy82V2psyfW8PEUmE1hUHckZAQK26acvFt9PM4MZABEk2mCUdgFncd6p9UJ5j6",
  "key4": "4UvFaMJ5hdPzpA99uMVdaXJB7af7NGw567ZYr2PkUYysLNKdrS4BGjmyn87UStrinVtdQ6s7u9zptSSqZPLW57tK",
  "key5": "5w9BS8pciMBY5cs2qQb2M6Q8B7SEjs98tHizMiQ7bnVK21EBiEGyHXvYkUm88bEt42HyD1S8GXbHG3EhWf5JFC1W",
  "key6": "5SKTX3ZUDDjixmyB9iH2xh7sAgP7SnJNPRuYFRNEdT97SuZCSKYNFmjoqWCkbhggHzM3ApxUCKDaauASLmATWrSy",
  "key7": "3NdVoaTQR6yLKGib8MZ4MY2WsFPnBEWti6xCzFZdeSzC3cDBbJJoZsmykocdYG7oYzDr4dAH5oXaLJy46SVZZ3mJ",
  "key8": "3WJkt4rjJEcnwTnSDdfGtmCoRQraP689Y9X5TGM4hPfwvhZJwkwm6oRAKsMMX3FxrjkXMUkwqC5aZLjxbDiBQ9jN",
  "key9": "2ewXiU1tWgU31JFiP1TCbADR6avjvHAheSv1rHB8QDJg7ETCUPP8PRFmLoH9AnEJ6k4Ffu7WzFqjQN8r5U3WALvu",
  "key10": "wa13uxFLMpkGGkRKJqYZRb9BvNVKXrULRYxJzsiy2PWuhHtnPZpt7Coq7QVqBPsfNKZ6cu45zmFrpkHR7uo6VtF",
  "key11": "8pgGkRwvJaKnJBDorMXUeDwS7d1vD2KtMHZdGRjpn8BoJVx5hHNKVXisvWoin346sjfQ76TpuLgzAgnRZmPDcAU",
  "key12": "5Hwr26yqU6rz7misaxUbt3CSnsvvckjYozcP4LBGBWanRPorgjnfc4VvPoXfJpEp9UY8pCydeY8jrMqA8qJRtQKQ",
  "key13": "2gRMaUHDKPcQMzE1Hs8CXMNHYLRd7rofLeP46hJ6ZuzLjE9JUuKpiL7sDM4dkr7m8tQFjcLyrW7KaGCAcXAFX56x",
  "key14": "3QCZ3AbouxSQWmNWjvAzfmCsyRANB9UnLu7RN7GTBya75e22x6WSREGCBYMQbLHeCrZFJXfVmRth3Z5eRgBCnTv7",
  "key15": "4fQVfvPqeKBJennofZwgGEquv18PDRoQiV8ELVKuDvqNpKmg9q1qLvuqMx7W7DU1fNZQesFPbYEKef69fXto95eY",
  "key16": "2sVS3SMvSGAeJ1xdD2r4NsK5VBQmr5EgaNuYNirB94FqBn2jrzqDjTTpeAp2MPqXJB3buWT5geB2BnC8xNm3Bb21",
  "key17": "4igQ8v3EA99UBR2wz54kpTMZA1rA4Pd5de3MCrKZpUt4cKwcscCkHAZYSiUMkNoGEmYkDtqAwaLoGcbHG7EJJixz",
  "key18": "5y7wJfLBe9LXVyUJ6KjN3Zp9QzE4F81gPeuyJtzcvw3M6KnuzU15vWB5LqCg1hU5Z8U5PXWr9EPWe691ewVYjN2o",
  "key19": "FN2hqk4fJkirzbzfLWU3mDvtaQgT2f5j6p4mKNZD9SMiHLjYDVqM9ddDXLtWjfZBmJZjG36u7EFxuzJfYRWjeEG",
  "key20": "4gWMveg7UW9xpgyc5GQQtXVxrRPnZg5ZhinrJUp13bkpoGmQBYNjfTJPUdHuY4BgpDWEEctZx4GnxpiEHgL2UZBf",
  "key21": "4x5fRSWm2mANmjMUvHcVfEtEPTHpER7AjUwY8wPubxm1pRjzoHrMWQknqVk7k5Fzq4WmnWZT7M1JHPKAEXTkBwVX",
  "key22": "2BxNbXnU2FbQmEHVKQi3AReaPN7Xt9t95BNLdGUYEx7TSYwx9mHDYwC457N1upHeDoW7MD4AGFnPmQVUUztFPoF4",
  "key23": "2iHsPg7a1rroJpXWg9cXtK6aSEFdWCQg9tb6pYHYotdU1bioawdMVdtwC8LaHKoejC41SD4GanFDiT6QuAN839xC",
  "key24": "5Uaf1FWAEryUJuhaRM8xHcEg7LLBaCmawqK3xVo5N4fypmpU1hgu3LvY6Pi1t6tt3TAtB4ati53wrXNL6Ctfzf8v",
  "key25": "3t5kRod5yhC3GJcb5iUF9YGh8kSRge2UXxGACJMLA2axCJ3ncFqhcLftnWTwQyikpWnZkQa1PyxQYX1aSYj13z9w",
  "key26": "2V2Tf26Nn9t4Vntxxb3CYmm47JgapXc3y4Gg6Z8LkkmophQAGcojrL4JyKzuYZpuKKUGiWhNBYg5VHZwCNxQPGiy",
  "key27": "BnYCCYPbgSU6p5GymwWNp24z4yhZRLrYgQ5AoDw1HkGgR5iGmBzxvEMXuWMQB9pYgZcXZzDWY3nBmydDyq5RVD1",
  "key28": "5EFUiBpb91HtCJpKjMYdVbBeNAsaZe5JEGM1Bw7ridwhBF21xYPSPc8cNFBBRiqgCnLYYLcG9pKcPXy5hS9534s9",
  "key29": "yW6gFZaLzFALnqW978B2oNpwJizpw7oouRd8rQ5ovtKeQ5rbnFmz5XtWsGskfhXAXjZMLwNEQ4uASeTMmdzFy9c",
  "key30": "3JaeGpABk5skT75c6RT8ssj2i2YyF9bN9uHPtKPyr6kwKK61VF21Ub6eb37R4kxmoH4vczd9bAzYonCuPhkXhjxv",
  "key31": "5uoChGeKyWanBup8FnsEu1GV7ZNgr3E6V1JgPMpWXEWiVmStdchqPzhwD53KsfyzxsPi84AhehrHnAorS1JtKZEM",
  "key32": "5QZhKkqNwcuBZCbvVCznDa6Geog1Yod1Tzi9HFzGHExfMUm4S1cypPMwLzQFuC9mxkS7pNY8WkXjPTWAnvHomvqR",
  "key33": "5v2hFpjQhcQv8uhsFjgvkzeLMyj9zvVBj17g1ZALQY6odzX2HTfMXfhczUdgRqeeqEAhmwfYUZpygBSgXjuTCjLQ",
  "key34": "2Au5GnXbWWADJj5tmZ7XxWvdhnQBkhort9dVYjusbm1mEJupjp52eHMsefmZNUTe3YCgE56q3NfnUyUpEQS5yM5f",
  "key35": "iCtJ4FvckuorcMtLuFP1YMUH4WTHskCZ6rW2Vu1BkZV7h5UaVVFcUKrGmZ8bTibg8cs6drYcU2S4d2gp13RAGhw",
  "key36": "4TMBjs59f78Y5GYqUXZS8SdqNBrDhpd7u5mbxWXZRsC5SVXKGzWtqwjFb3jptpT1Zmdn75qo3pFZFdn6h7BdR4Ew",
  "key37": "5VrxvNeA4t3y79pWEFZycjzAdudy3bQ4FK3aZAQbyaLEt348shB5Etza8z2zychRdufATsde8TE6JtK8FqxHmJ67",
  "key38": "2CMeFc297ZNTbMy8FuZcmZyfyAM62ATCsfRTHJnv1xiLtFZVT67ruUTqju9RgcJ4QDeKDtQkejYfpiJkybVptDV6",
  "key39": "3QnFV8R2JNY8dFDq3qh7TjejEbB8k9h9thbPN1R8NS4yvXfMafRVUYtcC3ttV2wKpMXaA9N2piG4g8AFNGAhMcZF",
  "key40": "2cbBGFbuYqjbRXxi3KnyzCVepyzykbLZurcTDW8bPd5jzCc6D8yrUBEVxDWp6y8cyaoyYxdgF6HS2Mu1NSxrvuk8",
  "key41": "2uhvhJGjyZdwfHynUCEAWcZCsJshTD6AZgeYqq6vm6J1L5rAR6GRYcSJfa8QT9jDThSYWDVeqpf2SkAP9NG1NLMG",
  "key42": "2ootxSWD6JZ4SUEa5r37FDuXgqZAgak4CzkEihoo9o4S4Bv7FadbU3fRy9ohiXQciP4JFxX8winwBjdrJhLTT5s4"
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
