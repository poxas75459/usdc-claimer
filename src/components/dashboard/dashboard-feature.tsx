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
    "4NdijSKpd4fufTmZZCh86sJhuXRLVKCUcshJWnpx9zzmfuAGax2GhdVUoByiwkmL2nwvMM6TPpy4pQNNnEgM4f7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wg142dcgPanarouXr6mWteaJr5DKbR5bYJo7D4zXMncMq2DjGVZww22VqfW2me8KmX5RbW7ETLaHB1dFgT8EcfM",
  "key1": "2mpthfgiHnwA9sK4v6fZyAj8qNoGb379YWagmVWZUedr512BYvKD2WUx8rpqKefMdGP6S1jAz9FtxCmutd1WwNfu",
  "key2": "3T1At9h7BdnyNvUi2mLu1mqN7imf8SsRHueE9TYiDUZCFH7PVZ9r2i6LjV4f6by1Dz82HNuAEFJRSRUSiQkd8H9s",
  "key3": "66p1NZzMzBpcmbCyCSGRY8Ywxm6U2zsgYk4F6m1WMsaPMwmrrf1HmzED8V9YJopjsdA2unYPpLrRagGFEu5jBQez",
  "key4": "4vePR4JTnRrwCoNcAC27Pvt5nLF8367FH2xue5FFR2oqFqNBLauLR17W9oqnse48akqYjYYDmCaYk7xNnaWm9CTs",
  "key5": "4Wu9TELdjMw6BB3EHt9uiWGhko5hhagjqt1nnEJ4JujfHzBfbmRSCA4DZ2Ng2ywVJYmU3W4oUnEvwyYZRQinaMUg",
  "key6": "5tYvWDKBtNiVofQE3MWcNcJoLDcHsaz7YLxuNfFWLibbzUC8WGx2mPc9cgWporVtTgqjVnXGuERQ6qw2BFPJJnA3",
  "key7": "8aT6ysTooepphSCJ3kQk51NR7q1HTHDE6TLUvJezAR5CZn668PDzfXstJQf6bLJqGcULMonsGZ5GrUd3SeJ76k6",
  "key8": "4XeLEh7QATxtEkVVdWxXQUhXj4TNMqvSqnVHwvHKQeHox3RtQXmudqm5ZcuoPx43z9vfMdYFywPhv3T1hefwLhqm",
  "key9": "5siqZqQH1iXCxoLK6EGWZpVqL1mxcWbABdnk2kD2graawiJx3ZdGeh8KnMe54xBSD9d7UyY1YpVw1GKSRAPa13dw",
  "key10": "V6381sv2dLcqFdaQdqDpisEgCFaduDvRCWmJVvbkEHuXj73Utt7oGXCMrqwgovNnHDidLYFoUuegjEeHpFk1fYq",
  "key11": "5NySJtLoCsqPFKaoXaeRFDzfgbBimjz6zNYFNP4hyvj8Fgmv8f5LzRTiLJ7JFNgbvUt8EcKmE5ZcR93sVg8VBFcR",
  "key12": "5SajojrHhMtwBzF7KZmNJ3nAmhpcQQPKYqg3fQhgHTbmrFY6LgztYFkBm9JukcAQGnex7zcmXC9TU8WefRZ3A1S2",
  "key13": "5x6nSv1fLHwgP2hfmLKLDnqzqBdkLEwZUK4LYBstn9PCphBi9CF4uW56biwJa6Caj57j6tnvEUt9rUbhEnqv9mrm",
  "key14": "21Z8tPNLpeV4LyZQv4RF2ijHU6f9KCPznsCHXqcgyPmxoXqTHDY8E4fbhFTASwZ3vYwexBLyGXDehFxX18Sr2FRD",
  "key15": "5QK4D6Z7EnHt3bLtwsh76QCoXw1uN62rLv3CGVcF3pFmS8YTyCFMj8x8aFit2JsYjxRmL7tDXZiP2vrc4Nz1qaBj",
  "key16": "2RDmMxvhwcyfELsqiFpffqUzuLHL1HD9euMbPUqmfMZYMxgTLbqwBYW72Bk8d2xvnhw8zrX9sM2e68fHLBjFMCj6",
  "key17": "5yeBspSD7Cmv2qXQTvmfGTNqqHWzWMcu2To38HYUJTF4f55E74MyWswJSjDNS7DqYXqii6eMZdaCH7GJM5WwCszZ",
  "key18": "5i92FJruzuP8bR3iLHxXpVE1KkJctQ1rz5mFRX6LnSEcX9C72EJDEPF3XWq2gt1BXVKX8h3gHYND162zS1qAeg9j",
  "key19": "5HNDn58qCj3PFZ5Pu8Naa4vo4xLvRh2L7rKuncoR3AiR1i14c4uV33vATbexnZxRrZCdrMh3wPYi6RHu5QC59VRw",
  "key20": "3cyPEoJgpBw1affhjmBhFEc6US2rJ1Xkt9cJc8zcez6uDJUJp486rF6BPGNBxKMV1YSwDRQEQzWSp8bcSJeFMsmw",
  "key21": "5nGe24o8LLWsBZdNgFBwtpzFgYEZMmXwL9TDJJBt6D5jMnJeJaRSM2DjDpiaWaSLxeA2Mo7FyayhuBRAnJ2abyJs",
  "key22": "5hDuV86vW6FpTCv8po6Bq2AyeALgRr39SoP1Sy547Ux88ymK4TyE7i66i9FfbubyZtP5xp2TSwtcE1zHF2XBYdez",
  "key23": "DPHJUps8rWXh6MdYp9V7JvKwk7CpUqc4sQmW4Y1rEehH7gnXx3uqBMd5U4jx3f6mE7nSxifCcVygGtTgjZs1sgd",
  "key24": "4svHeyWF81zECKmnEJTRTpAB4UL587GtFuFS3R5NxDB3v5qh2RRQ7qLBFK46pNVcMv5NSZ9jfxs66hpyhykZVTin",
  "key25": "3fZmSbQ5AoJ2itFQRKwem3dqRqpBsQjTx9G2TvCRowN6TMkDULnajBFzPY1eiGG76AkZTxWdNUo88tuSFU5Noe4P",
  "key26": "42EGutMYLfnmPoL4h9YXp5jyg8F1PQKNbse8P4FHdnheahTDGgkRMKV1ay7kCVhgbGngAwhdzhCABceG4Jux7AmZ",
  "key27": "n5DNyvgvAZgs48LXuZ5iX8q3HuWPiCM1iAhrm6Nvb8d39dzM1HhhdZ6DHbv5TdD1HPCBW9GrAK1FdHko8fCsvPe",
  "key28": "2Xxv7EmNAJozHP1d3GKUJCLCn59oNV2UWUyyZFAF5BntzSNniu949EpKuhFCApNisRdn31WWXCL8zA1Tx89zTL2c",
  "key29": "2tfVBK7FSL6D3JGoTWL42ZN8S7gi5iF2RYU61cgri1BTtg85LptRSQkU8JivvpPnHMw28mgH74m9g1K8PPj1u5fK",
  "key30": "574QVQz5WjKVCZMC5Doq7EDdPKzEN84o9TDXkD8v9GeYx6DvP5RM5XB2F6ca2zM3yooLtfAfjQJtQfiesuBG7o2v",
  "key31": "2X1PsT925fFyE3Y4Eazg5Hwc4SvK8ABG6oy6ak1exK8NZmpMcCmxbN3fFFrc5UeiSbXBFh2h6KeHodtX1r4CHRRB",
  "key32": "4pQDGKGyQnnXVEu44vvnX33w66pUJpSzvSGGwW784vPgKUBDThNgpn5QZwh4tRrx2gW6QxMPYxuQ43cPWYPiL5Wh",
  "key33": "5jqBFR1u2qvGi7BbqP75Uo1t9KwHBq3tegbodss7fdbAn2K5cA521B4iCrzhaZDRfEyWfo8qV9NgQSaTXuyx732W",
  "key34": "5RnjAWL16f5Fp1dtscQTcg5RCyf7vps9dc2FeBwK5XjiBkqqDxCmY5ZfzytxNJbeoW5hbpRAC7RLot9AdC8C4NXF",
  "key35": "25cDnYHMo74ck8pbKUTYHo8GtD6oN4kGqv2zr4gNLZPamAMXa2QVnkHvDBTQGTmjyWFS2wEJd1waY3SB7UZfCyL6",
  "key36": "5grhKfXbfqQxLm36yLbDJYpXzUcaAF23cyJCZQPoZvKZAqtLopMyZq5spnUZeneh2J9AWFT2WUG7Y1BzfHjmHiKy",
  "key37": "4JvLL3HPNBTZ6MyLsgocvxqK2RJwrXZ2VnKgQKSYm6t1EJYZvyxNMeTBFKSY2RAgUFkJL5TS7DwJ5E5t6KET7xx3",
  "key38": "ZKLmGmsxmBSgEeNTK4wBms4TK5yV3zDqSsCnUk7czhWFqBYWZh1FvT1XGkCVpovXGHHWsTDtE9ahZAoi8CFotgw",
  "key39": "2CofmXzUWXqS78EyJ7ZxrjezFyY78dLboSgiazpZGuihDMhcx3nhL7zWEBNLWmoMVYmF5EFKvu5PQKeuRZZxba6g",
  "key40": "3v6mKkYwS4Urnp1vpG7gBP5xCauEcdkNLgVwfcnjGgsVgHWARYKQd6NP6Bz2LYLEntPh2YbMpvXFGJ3aHk1DqzG2",
  "key41": "5XX8uyTuQpP2NF2wdmpG921ZZ7axY5x5H9PsESh3y3oaN4BeNPb9MYe658zHXg3eUxxyvp3q8cu4hPp8uypkEZYq",
  "key42": "2uzKGDTzVSsnD6J3Pm7oPeBpTYiCCqLixzxuChhmzaiBFnyAg6MoQZDfLTrtyC3hZ5oxsQxvHKjFHtdA9WLivMFH",
  "key43": "4tGLpxrwUEeVyZyhqE4mh8an22m9KQeRnHdiG4U3BWYJu7xsLaJxHKt1jYeqcbcuPk5AW1cj7AnekakXNHCQQqdV",
  "key44": "3x78PoXWHB2HYrMhiz7VZmfhh22eafUCHzDMhxJMVNfbjgPPP24iLksAkm5JJ2cKB2YqpFnYFRJ6q7HMTYouvxVB",
  "key45": "5RM2yB3u6iCon1xniUtCJWh7CV3JXoAqerrLjEn35XfP7exTDYp8GaMJvR5Nq36wXcLjwSS3VtFPwrAXStLHB9Z2",
  "key46": "4od1NfUGopWPVkyGEcaWd85NQ5w9yCJQwg8MSdNGh12JvbDGkPdzmphazUiPpcnNUxA6SBWbrQ1on9LUwts5LK5j"
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
