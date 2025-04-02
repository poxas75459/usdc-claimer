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
    "VTNMNoa1Pg4WHkECiEcNfYdXda45iAd2Pkgz5XQ9GXv5F34QJitokV9umijbPYDR72J5ZstJpHL5JV5mmzGTt2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXeqtMbgV5HgjuuapF5ECcVhFC1HU5eFCKjS8bxowwAe31Vmr53tbyxQR8RBbG21T247H1mEpaKtaKT4k4nMGkh",
  "key1": "2RtyiTuENzKFHWGzP67EYm1uQLNkDDRD5H24Vmvv99htLtWW8YSzbVURv8xnnvXD7uZYHdwZLnKzPeJDJYZCz1BD",
  "key2": "3WebSsJREqkTPpecNEJQKi2RFaXkHzbgFNGLCgcz6RMHn2pRKtpNwK3bHbRsVFarxTrkt6oN8M6Er8jyTt5kXrLE",
  "key3": "3XwTXmw9ivYR8cPVsWm9dAUKTjestRERiwpNEZ3Gd5FagAD8xA3dsWDj9jdmn9frNgw7Fxnq5CCGbY7k7U7dQa8G",
  "key4": "4NPMGfijZRzoDjJqYtxuhChHnVcCwgtoNda3VAuoqqVUZyCjcnJbi6mvAQBjpTVKVMF7gkbA2NboZcjbRyR4uN2q",
  "key5": "5RByxtGGtnrmksPJaJGXtX4HYUk8i6D3VwzHjWDEfopdaCM3v9hc31TJ3B4phDzj8P5jVZZDbBiisECzNYQRpC6V",
  "key6": "9eUchowAq6536nUCbJC4Ymo6R7MbZciHvMzcfKpRhF4feTbtLnMUFm4pHPps6wnRnoYNME7wbw1uu6i7aPKNJcV",
  "key7": "35mCnZS9JnDi2hQf3y3X7H2xBJkJ6gC64GqrMXKbYJF9auwpsdxkLp9uBnccd7uiLz9G6cVXi4jJomYyqqo2XkuS",
  "key8": "y1btWkKZWavGhbHfJCVpwVJtgFnhPFVQYHJvPzwQuUTE7jYk8JzGzfobKAkSPa1xVN5JPk7tyfpq7TM1PEDB3Lo",
  "key9": "HJenK6VZCpqaCxU7bnR3cove93jfsAEFw18RQiEN8QAJfW1DEJC4hmDsWHbsugYshSoh19bPaGLjjRYftJy8wWD",
  "key10": "4cn8xDYKHrFCvcNfLh9dkUVSErbXKE2DYyRH1rrU3eSqtC3irz72ecCtJm3emBSZvXqnWgFTBmWEYm2Uy8CwoJ9j",
  "key11": "2o6GjE51wzvHwxnfUizKdb3VFCmyc5Exab1nxc3oFRXgs3bpLaWBC7cE8UbNAF1PWG3uYDVkRVpGEEFJHh4P3rTY",
  "key12": "2CVniN8UtFx53ntPAitPaTnjQtZB9ymBYVeJaTsU1YGH3K62jqLAr5JMRfDGSSSgALgPJXEthZtb4QjMvZw3PpFn",
  "key13": "3yxKJnt3y1iftrVNB5hnDrwbaHSpQhbbNLUBwVMr2QU1MGJ9DR6G3QZjvDGxh62GVpgbX5wDhxTLwwkb3YWmNvg8",
  "key14": "5rLeH48vzSdwsRH9cJ1riQsm7V1QZUfPM9NYuvL2aPhvALf3eHSxrBPwu8mvoMuETjH9FiDiFisTiQTeMLvEQqgQ",
  "key15": "2DX7ttRY1CVWJMHZgR199cv8UWCmLGur3M9m3SgemEK3udz61s31Rkioi7oEGsWTLNxH2cwagSV2oPZub2ayB2Kv",
  "key16": "3L9Ycu8pJW9J1tSnHeTAZumtRao5tWWYezt9gvFNrG3suMYBq5oS3fZRn6LngShTAnUw87e5fjBgSfaazwxmWZWs",
  "key17": "4vNv9QpMVFQXjKCUq3AKoidfQtZzZbbSqQxGaehbW5C2GW9jrzGnWXFg4qQic23emutTnRizi6bHFN8N9czcbzKx",
  "key18": "4ce5YXTkEHzv3BpqBZ3xsnevQhXJ4vXKjXDBUonsNfuSySqzPmKspDYZEvjcBqFbJDBNmoqBGheUodzgeo3R2LTQ",
  "key19": "3VAqyEPsAVyXrfzSpw8yQkY43yRwqtn8JfpUP1pD9mUEfPDsGjtZcKnMUotPEZaojWx61EMPKJhBkAE7MoBeKLcL",
  "key20": "4Byx5N8i9w6RZKoabUmZt8aMUi8H6cns2S6E6LWbufFBUTKQAztQpHYotZdKSjzK76vpTWxbit4CxxaZBPAmEc6b",
  "key21": "5GUeTH2v8GdukyyMidwQYhDQtFscu5aoQn5Tnd8B5soJHW7BwiWiaJ1Xk1JmpEegojg6ACTCi38Fuf8WwhM3dn22",
  "key22": "qexQ9yRMUQiVMsgqGPn5YztcXa16V18Rn2uH1QivJNCM8EQHn1mf6bxR33etGTyKwv21haBkjU1kZ8dNmenXsHi",
  "key23": "4DnDpHfbp6CmfLQWJsvj7VrNRhGaKaqKC7Zt5KZUiWEq7UemwHkYxBDvmWuafVx6RoGSroMY6evoeSnpZdHCByVa",
  "key24": "4YDNEY266ejVjKaTLwojAER4MZhoHpe9pa2KSiot8Y4bf4pnZkQTaZeiGjeSYiyQvewauai88a761ChvdHtQ9Adp",
  "key25": "378C4zSoFbNVpUng4QJRa99sCym5J7GekA1WEgL38dugAiPLVGE6exXVQ8WEcj3jicvrwRt2vv7Mcs9FXhC9XjTN",
  "key26": "4F4jfcEPtqozdXXmaMBQ3oqBdQSq7qrDLztjE8sfuYHBo6FgSrCn4Rrsu3j9ggpDYqUJDiErooHXKqDJx2ZHvacq",
  "key27": "Z7X8VtKzn6DLM5NjvM55s1ZZCCYwVRf11uFAz6LRTVDZS2jH5ryRGW2QyqMShYn43HesMM5FoMCknMERC9G7s7N",
  "key28": "5LhKEZVEQdfdRZ5k9USwRxYNEScZnc7W2WjxzJSVWB6sFhuDQvBffaDaKsNrtLKEqMRH2PgbFPBX9HEJNcz7b6zj",
  "key29": "3yH195ZezLyQgZBcssWJuk7B9A3t3s3nVxoPPehv9swjE2WfKmimNRS3C5CrTDrWrTDJMc3koziXzMjid4uSGKGi",
  "key30": "2fhLrYCwoXuxsPcJ6smSJL4dHUk5syZmyqsbr9TjY44feBsr97c8NZhDrUbKqwN7BAUJytqG2KqF4gTyas2soNMV",
  "key31": "627aLRoz3w7XYTKpqLG1vEnWjmEa1M6eQ3BdNK7vydhHiMgVkXEnvQgEhXhuJ1HPSye2jQyDqw72U2noHJ2D4n9s",
  "key32": "MZ8azejHZ93gQ9yn7WgPNqXnoP6fpKmtH25rNaq9XiR8tbWLxj4UvWg8qYuwaYJDgjHooSBeJkopBeN28MSbZTA",
  "key33": "5bYPZGyEEY5Fm4e1WH6wuPB7DhcGTTP1aqUUDgeczJ3392BZUoGE1yFLG46YHoj332EmBKfsYS4gMmu2h21Vt5NN",
  "key34": "LnwRfSxnLGSgVev63WRga52Aj1iUaG9GWQe9Kyv362qR6eGkLL5bPmEzZLqgYmvrA4jnQzbBsUacEMjgG2HRymp",
  "key35": "55jFQ2vAHrwdtLaWqPgvNQpJwDKkP7ccXxyvme6ZWqPStSp6Q5DdzU4qDBviWnBWxK32nafwCX5eoy3BaNgvg1wU",
  "key36": "6S4BEioQfjCsXtA1EtcBK8Urfm5Cm3Gq1nsnkVVhm4gEFbALGChY9treSBoim2qD4M7aTyCVKYT2ioghastnqML",
  "key37": "2mwXz1QGMv7dV7TX89aQcCaxgdotmbSgapN1CtiwVY6mkuu1vXbBx5dbP9UoxqN1YEw2tNyX1SCKgNWpEYZ14V7f",
  "key38": "4Q6zQocG3zYP21jnYENUwPSws1XHSV9k8hQz8WaRPTHeiML8wgkY9nyb8ccEKTSussf3S8zjAVnUydbfPLAr5GWb",
  "key39": "31Fwbj4rt1YtZBk1FjxVshCokz2aejBUKY5iZePQeBzQ1qxvR7gy9zZKjP4WtveoqwsiJC1pLpQEmo5Jng4VonxX",
  "key40": "5e9qeppVxerX3MzmitypFcve9dcWf7wK67iA7B1wF4M88x63nA5Ne9eP2CDXh3wDS2HbEYNKRkNNQXmpyDv3BaQ2",
  "key41": "gkhx6pRYbFnm34SSKCFq7vk2J6JbdA9fy2fjBUTPqztWgVYBczcYW8798u92sKzszcEAYEj9sfPY4ZpUMfpTUwd",
  "key42": "3hcpriHcfALNEzhHQP2TUYBKXfAobTS8kpvWEeWdr33JAAKXXjVpUBr8JT4UAs6RRAUYR6rbKtcy6SZuQyra3GJH",
  "key43": "c9u7pZwYdvLrUJLxndPhSwzKxnjxRiRCrbs3XcVwLeNJRNzTczs728p8HYKjq2saRBTTWnwKxhYptMYRxHUeW1i",
  "key44": "57f6k3HozU9SJTppYofy3dVP9RwL16s7df6P6Z8fjY3MTU6dJx3sEYCZCJivVYjEyp3HZT5xdiKNFbApauMChcGS",
  "key45": "5hgUevcuaGLZMywUbKWhRANwZ2mwfRQjshTvNjdVMHXGtfWbnyfFrQ2t6ycGSQS2FHCAgHTanAv3v7rVtrVayHf8",
  "key46": "VLVKo4fjgjW9iVJjenfa6kMqtNdV9rniNvY2GHYvwhnSiHrEbwNY1eAF2efPvatR4GvCFNz1twah8HTG3DgNzGL",
  "key47": "4eHd6y4DCaWvrSgvsQyfuF6sB1qC9EACSGsK1YxoUQgUec9bTLsS8Yqhk4UtTN8S57MN5iCEokJG6gqZ9JfiHxF6",
  "key48": "2bj4RiWXft7c6d5rPMXm3jDMZCSs5rXc2iH4VjpdFRWgx4WKSRgTgQc16asyQXTvBrtwTnqyHA3ry14NbinJC2s7"
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
