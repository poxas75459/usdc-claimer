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
    "4rX3ebBnZmGiAm1PofkRQzVuodTiVSX6NCGJkGKHkBRis9aJ63htj8AHw6bC7SsmUBuATDWzDR3RYCBpFrZoEwAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57hemV9xUUbr2TbCmfTSCoVi5VuoDgZqJVCKftjh8DZ3y4d2qzYVuZTfikgZtJ4qfjC2GfwXcFHhRqziMAib9hFr",
  "key1": "2G2qSxnp432D1ie3Vz8RGrn2Eky4UavaocJJqvh8dVLaWysK63jT5vEuQEarcQjeRE753v3qJnkwhUwaEbXmSZf7",
  "key2": "4xQYRPb8CX3m5QBmPYxNbM7AJX78Cs8uBH3gceeHMjdj1M8NTrz5VVBzGseAfDMqWHDgYakRNaVqrk5QGaP321Ub",
  "key3": "u5x9FwiFo51DJ9S5mZxHvr9natuDbeRM8ZEYBVNxUYTAjnLARKdnvJiPrGRYNzSkuP7rvHusrRVqvzP8ALEN4KP",
  "key4": "5zrvziHeJp3pTUncnmCtQLBhgnrBMsRhgkpMJBdSBGr3WADJFut1dTYr3wyJH6gUgsasQiHcswe5uN7Knrw6Cbm5",
  "key5": "vP3YYDXRZpk1nBRxHpFpKKvv5hA2XfC56sAstfhijV4WsQ5vsR9nvq6NbQvVPNZMJSi3CTzCvcikZTRnpC21w6H",
  "key6": "2KeqJZi77t795zjWT7ogaZiVSXgFiqGTpUTdzeE3xe6h59Pm1X23yW7b34vFKBiYtm6iuGzNbq23vjayn94voRqr",
  "key7": "2YdSgQcR5je6JeB3wZ95SADf5vH45apwizW4K81dpKL2XPV2ATFPohZgVk76AKf39D9Wb1rqDFMquSdwQ5LvWENK",
  "key8": "33JigwejfTe8XLLRSHaJNx2VgDQm4fBbfqioy3qxwwc9QKaX9g8s5rsmhMSsedDx7WRNhS8hNPD7MYTVXD2xLwyz",
  "key9": "2xkQR5kTDgGgq6wGp7jEFgutXvW2aYY3QtAxkSjkUaJy17qD1dHPQhypsJTLmxdy9fyGjjdWqnXzVHwPxUwZ2mSx",
  "key10": "5n1PUPqGCHD8S174J9X5dRhqsmNrWWviF2xZNLHrdzmj9FgwNMmgWHzL1y1prUFVEZKSCiYo3Z31cNCwRyXdJZAc",
  "key11": "46uJikT5E1ckbCUubfjNMzjFwDDanBSPhDJsd2zEAg3BgZ4c6RyccCYja73dC4tB7FudFCNRdZuLmQ5CMy9C9vZz",
  "key12": "5UjZ3vxWE6tFiMKqNwbqxXoUaU1dhQz3wmsye1pQD6a4gFonRgDJgURfP4ZwM4LKbiwf9BJCMn9nG9LmzLSA7vvQ",
  "key13": "3UrFwEtgKjTws2EsEydD94yDAX1Mv3fpZwwUwwpBNbebCqTtWRzhNiL8T59weA4dgeZVybRLjUrTvBHmPDr8sVNB",
  "key14": "tZWLiXrBbnKc5saTJKEfZG4JgEMqXR9jo7RW72sqmJkuTkSKHTyojncBHFTckLMPfn4KjeUyKJ99YTcb3iE1Mhd",
  "key15": "4q6AYwgNSzjcTfweCoMNq5rgY9e92GMnKngcxsSpzpNmw8NKueWpcELz7pBWdBDQnqPyo7Vn6RH9HZdtbdj4YYV5",
  "key16": "hXPoLd6XZv8EFexBsZhQrGxPBqxdU7aWeAUMj7RX5SM7iyRJevrF5yLHzQau7Uiem3bZaBeg1m3qe8MPtzLnhBj",
  "key17": "hsk3kLT3hnjTZw2vE3XstDRDak6GYHdhvCZ8qhefeWbEjzdAm5wWd3W56XcdAXowWzdtuq3cJx99bz1cb83W1Lm",
  "key18": "3YLai9ed8cuLy5pBQmByru7pMVQPYvZu3QYFSic7cWGiP7DQ88bpvAiwXsShhJQ5b6anBX8oPFPoa234rEJNbimM",
  "key19": "7zDaC49gxBEnpFJpXhXh9XDpm8WKdJ9S5zrAER6bpTivgYtvSYeKd4ozyvggf7YMCSkk7TBeRBaNkvr9WQ9DkKC",
  "key20": "3WqpgdCwAKWzfD97aLhPcGC3RqK887ctd7phBi9QH99hVpBBuJv2Rhk4xbd2cBtjmXJwmsZh5SkYSNDY3WtiAf3f",
  "key21": "VxtT6HdpsdhhamTpW87YBGJGa98RFiBPTcysTkH4zQvd5oFnXcQH1sfHr9gsTp7i1eQg3tkWfPv4nZAMdoERZHc",
  "key22": "356YgdqgghrWufjYXSsK63PVbUGfQ4pa6V8b9FadU7QEa8V9EBE2Y36Nfd16UZ8oh7pj8gommvpQeFP5aizm2Zrs",
  "key23": "33p1GCDhM5BfCzSizastHi3z3nDNAMLzmWbqmYtX6LkbEyHw9eLdcMXhE6tcrVAwq4dTy5YKeXqKCdQSwziaV8NP",
  "key24": "3RMGqDieSTz2MLhDp1BcH2JdWbV9e9nqCmFnZT6y4E4zZWnKLUK9q5tV2FgpAdpkiqcVtUQssKX6vwUXtFH6ViUv",
  "key25": "5ggz3y5BLuaBKrJ6KvmXWVfnmP1iWWFxfEn28ALE84LMauz54UNxBwJfj8BYDsVWXWgdH9Q4KDuNvqVBDh1am5QD",
  "key26": "SSFE6dkbxRkG4i6jFEV3UygjGJ1oVhoJ48L9YMfUW9UXmufe3JTxKNbBvYp4SKGSNQZREDjQ6C9ZoE61v9pwSuc",
  "key27": "3TvtJSuYFn9ZsL9x65GMQzS2KpbuNEqe7GRpu9rmeQFr3aew1LrtH3CWajW7722SfJpKrwsN765wnXuUCkSytzzp"
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
