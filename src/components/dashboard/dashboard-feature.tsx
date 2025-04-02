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
    "4CZ6842CYD7BmTtADH2wK8cSvA47AXEyabuSawrXaHwTREE9rwWSznsvhuociZed4jGVWYVX5ajk3sqPrxBphJZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rG8DYMzxA13kiuMoXRgGznQgNrv6wNBojLjEQnQp6YirpM3Z13HZudAgW8ERkdWtLgMGZNAjLUXRuV1ToaAwwCP",
  "key1": "2kqX7qmoHnMDBujXVTTBrDWK21Cb5mVEdevj6T2e67sipnC62dHoXTUjuwwp3yqXJyGXUeKx8hYiaRviGBrLYFLH",
  "key2": "3QAP1avXFZ32gavUNeyk3fvspW7frq3uDcBTGbRXBse3SX9ttjYCRY7hskjGPeqgQP9kNkzqRFkWpcgXdBVojyn1",
  "key3": "sR7mrrR1iGTMQnwee7WWqsEpijP2avaQvS9zmRkTVZvW5t7qV6FkrBhs7sTkAfhwGzJ8S1KGYoSJ8EhG2KMZr9M",
  "key4": "qK73ek9C8KL8SReeeeDCy2FXU1s5bWAYGN6AiqAsu3sSHudE6kvee8gbtdiS9EKWsgvakT5Ec8Ja8gjvUGgGEz8",
  "key5": "2MuKZxwdqYmp3cogiUbBEb7TAGtp5LQeQznx9i7BE2BU1BGd6Ui7crzY5boEUtwNuFoNc1XoKBaeiWKkxeA35GqK",
  "key6": "3a7aBUR2PSugpekCsPYqBvE1XGtw6GBG7FgFdxhRHF37YHJEJHH9s52WdJAaw2s1jiV2EaQFHw4s9KworEs2BmfP",
  "key7": "57Muv2PUDLKwjDwCKVB1J6vUQ7rJi29t222Xh2ugn7nXc8xhzQYyByPyvsYje29sMhv4TXXG5tFjDvQ1nNYzT9F8",
  "key8": "Cr7RTsaySwzsDcCFV9tBuFdv68Yo5dixqHmHSRhQYrxNprFLuwG63C83EnMsiv6nLFHnkVVVhaVcia82UVPTkYG",
  "key9": "5MoqjGDobt1gi97yzLzjG86jKpF9FCZLghzdgEKgPsok2SZMMGHtgMLKWWcMjBghYSytuC23Y9G6dqrmbT85autY",
  "key10": "jAoVbcSoT1i9JStjDxDb2uw9aHrwTwZ3JNqRYeEBiJTeqxoV9t6xsqcBXpDxfKUA1DM7kje66VuDjYc8LdQvspd",
  "key11": "KukpBPodgH9wPnWNZX9rqXnArgcNSL5XWaZSqbe3uDNHxLUYWE5WwrTDeYK5zoiDBVP4bUq5r35BjdQ5aNUTQXd",
  "key12": "5qKJqrjbSGCqWbArFLLu7m9qmz77GfGfQHXA7XBNkPtCkhDixNA4R4L5JVNhXppA1e4T85DZXwv5WsZEuJ3T7zJx",
  "key13": "28RF3gfsCj6PuB6kZTf4fgiF8bPqSeZnuM2G2dz7aW7EXSLh6QbXcsqMYPgo7XTSTSYcXZ3u1owGFzeErQeyCt7g",
  "key14": "d5KYfHtHffgvcQ3ovvaPv2DGpq5SBg3y3KfFSkBD4WYuZBWttmAUiNDftXJaSEK9sA7QNAQYEbgDLhcuXPXnHBX",
  "key15": "4f9CcCaAs9fmcoHVCPtXZvpqzdcf17DgtWNZomGcB9T6d6KgzmFyRkbpcMfwXyemCbwTURwTD3wNpjkFeLr5DZ2o",
  "key16": "3ZFoejoHKqbhLQ33NmFNuo4YKUWShewwyVCWy4FJepwPEGL38ABFPyfpvZ5yytVm5qbXwicUYbMXV9JH15Ur4K95",
  "key17": "32VSKyMh19unjfS41idLJPoPahpr89pmr3qCeeCV4BBk9Bw51C9U47yVi9bBXbwELcjdSRxMFZczQifEkQEu1Nrg",
  "key18": "VvQFYm2mqdtkcLFLNzDHsTZG44oCWhVaxFg52qVdCiNioGSx6QDCc5ypLA3pcnjsQZq2kqhjhQYDUNvw387rq3h",
  "key19": "5EqXp23pcwQQpew7qnnXpoJharbXaEJ2PUG27paAq17cGtjvwHBrkdjVcLKCKDHkrs8sfMY4URmx3PnRap6CFESs",
  "key20": "4hhvaG6GsJWmS8RSvU6LDWDMaCWLxWuHqv8j8E3jDbxcqXFoiktCCWFXwu6zXJH2txJag6AXFwaMkQ7JTJL3D9H3",
  "key21": "2YVpJAwZ4GxXS6oTRYzrLpT7KNRcWVnyZvjWDTZHWNK2eApKn8LvT5pXyNzDfnQNGvJBenxu8cY4wGR5pdUKtZ5i",
  "key22": "4TVqPvsNUvv6TF8ok5tTDb8ZXyT7ujiNZR6u8mWWfoVWCrJtqEDyg4VwxozzwARDK6A4zhBVqtmnvFcfHTsjtw5z",
  "key23": "2d2dHxc2FZ1Cg2ZkbqnK85eG4bFJdepKZHqUwv12uWv7grEDphJeQfHTG82n5ewDXEcTL1BJxFws92w8jQHrctJT",
  "key24": "3qTwkBCtAS5vR6G6bsgd2PXPTQmi1TqxJfN6GzsHi1dMNZNrcJi2BYrPeHNY1fazAxvWGMxBbXdwizgWEvE62ckY",
  "key25": "qqj7Zf6KiB8vSTCuThmrsicsD8jgpfQpnCC6rktUPaNz7X8cG52tgt5sSwDfH3C9Gj4WGPfJp95adepGqRGfN37",
  "key26": "3JmwTX5vH14R91ArgVoRmTmDJ9uQTyc11rNwrmaGQ7iHNnNj463um13qVpGpfpnTZEMo3AV3j3WdUyKDj3GgxxSR",
  "key27": "bFym6q33WGRZGhS9iZfF3SiDg5pRNrTHhxanBx4YY9PhNpe7NrzQMqpm81gh5J5Je5CqkRgs3QMZCAiu433DKsu",
  "key28": "2RVNuAU8KTbj3Zxumo86eWCFXabZpJYNwf3uccK2GDP9JeJoU33mk7fkyWKJsuDFBn1et7MvhUtXAZyQiJmVuVdX",
  "key29": "vYcZeaHovuPxDjC8VqEQuGntn6AdM7VFnaEdds99FFcinLhqUXqWjkJmX4VkMBfDTRohL6KUPEHqqdfm6TXZsZL",
  "key30": "akVCc6R7yrp56n2sDhRMa6NXVRQzFYxXab3H9ytzfaidEnKi4e83GAXneTBvZ6anFqV4gFxSuoLkFPpXg58SCgd",
  "key31": "hJCvfnFEVznNCPKJUyzHtpNPLVcxeqtWtznGJxReEN7DNVtkf5Ye4XgL89yAZbPMW3okhr6Ku3mXSKPBFghzFfV",
  "key32": "5oysa8i5UWSQAzqwEcBiHh2HqepmGR8bQfwetBjknDQJ7ot81aKtiM54n7wMUzsnnCg6iBUgHhxqBZR3obs9k1ai",
  "key33": "2PrcZd4gPWsioE6cZ9aXRbdKatxAwXJTcebikSQ9CrcQjzFv2VxjoLVGcVX22rLTuZpd9Be8AzbrkveBeoXiDPjk",
  "key34": "3N1ACPNuFN3NCgVCSGBsiVh8aHW36mkCe53mojSndo3hZgFVtNdnme7Nczz3gAhJsxizqdkMLmFBFPLMYbWTagk1",
  "key35": "vtRHZNuwhxoavBB8SyBCcPqqqLTXvjGYVBma4f8WG6nyDwQaABP5FyRm4Js3PK5rzxYJPudeuqH3PDfu3cYVrXH",
  "key36": "2QEtdXAssqZBVjdV4BJMqNrxVD5A7zxqhZqzuyh6wj2YhSrJnwzt83c7xhKLwE8oiB8QCTNBZZMvsoTFKfsPBZh8",
  "key37": "jbkHu9zeS6dE1WdLw6TXJu44nfX5dF17kiBDYCGGqr3Y8ZdnPf6Yn2q47BwyNdtD3ZUJvvYdhHaGSpQUXvrHiW4",
  "key38": "3fkbY9ng2rVMVghGGM8XqeGh6jtFnbRprDh9N8iZk1xnMWrxkrCfuW4pA7RfFSryAccMg89ipLxDc1fUPwU4Qv75",
  "key39": "5GhmmAgfVBP9YuHfCyvZsMt6idikx4BikymajW5XQWpWVDU6PU8DJ4asqsW176dMRRqy5s5DiP4eUJ7wGz99j1oE",
  "key40": "2Ukcn8GwFU4jSkCo6Y7hJMfSaFfQ5HKwafEFFy54kqJegJs21dr3wSbJibsdtXhFzqPVWjxVYsqqwdDfqR2CHXKT",
  "key41": "4KT5jDJchSmrW67gfRwTqovZxuE3bVmttAmSvUuPA3gBuRMwTQc9qYkHxYxFGAxkjjufMDWT3zqibuxMANPQzWKS",
  "key42": "2DqM9D1AtqR7f769vrQb2EqTZ7ohcBdSXjj1dAaGAm9ZpAaRBEPFs1hUS5V3FWYjCqJLcUcUZBf2pnooyhU1o5bZ",
  "key43": "4Mz7wtVWJa4AQ9RQPzz3yHJJyiz7HCSZh4cGRbnwJwS1FNSNDjDDBoGKdfRxtguP8ANsWF5tvsG4d2kNU5JzDhtJ",
  "key44": "4KcVEDQaNZRrQZykHqvuDkrZY9pisotW8BkFUKXGD9pAZn6nfjY7YhCjtFLM4WcePo7dc4xXRnMBiD3XB76Ly7R6",
  "key45": "3wL4Fy5LNDexZTdwp1bzsuyWL8WdJzepQ11dmehnBTbHVH2Empxk3xJQg6nviV4XYxUCcs1XTUi4pHEgfBqBy7CJ",
  "key46": "4GFiEZnuQJpL3zvugMrdvLvCpkNj3oSmmVe9FERnEGRDrve5A7roU3puvESYR1EC2Bn4ZcHavBerwiHH7R7MSmf7",
  "key47": "5zTHj6fmBJJY3BoxTLqZ7Whn3iQv9EH7VUVccWfdzEJtgf7qcNnn74J4meLbAxLo5eSCjVjpj85JoC5FUPxkc19h",
  "key48": "222cMgBUUnof5d9vpNTyNgH3FwLGX96YQywybw3Kvt4Hk1F5S5dR1DXn2kExQhDu3bp6o3VPYXqQkkCyX5hBo29U",
  "key49": "67ZUd6cHkTEA8YGKUDbQPv1ZjA1wWT5ZMr7sBbTi3rzRfaMUQZRg1dakfuti7M5cqDwH1bWfqocXA7kdu1wm8HSm"
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
