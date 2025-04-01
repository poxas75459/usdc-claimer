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
    "4CHtkgP3wkGEcqzRqjQ7vnNhv1dw7YV94Nz7LCBDB6PRKiEigjHRSP9yEiHkXVJGQeEk5dWLdciLnmWYJUmVSQXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AGyuKoRcRFwBx4RQYG1Fez7wCNLbrvMFmd1tyLxzFnTvz8YMGVpSH386828jRYcDEffgojFTVjTvEGH7HB76vB9",
  "key1": "5d4Q8tJtm5hsqR6TfHFACztX7UZBgERjJk45sYnLWb9VmdRfW7buqzDBsoD7pBezMuZEcWG1BZTwC7MDN6RzYx73",
  "key2": "4xkMww4Wy1LCWo2BJkGfqCy8q4uvKRSJGxDnRPYyD4XyYAbXdaHnkbc9f4LhYkQDNRv5EjTK79DzpmSadqu4qdhj",
  "key3": "MAYiKCztQNLg6vMimJNLGmwmnzh22QyePXHMQ9rim23Z45EvFT9H6pNxkfsgUjNHyTLBuJHnJ5YrfYP7WJnNbdg",
  "key4": "4s69jprgRkaWoTHYjvdmo8cVthKxTyBzUpsXCpDMEkhMZDbmcWDQEaSgAJWqXdn1XGVLzqPNzytTxtmV8yn98Rvk",
  "key5": "5DSiyz3w2dX7moa8rT2VtegXHhkHmCcNNk9xA8B4G7XNR3CNEgEMJCdNsArrFEZXVfpJEk4fchpUaX7kbf3xCChW",
  "key6": "66Tp9QSueVES854e9tZuGn5nLan8vR4MFVahUWqYMeU4TACkMA69gQH1tTdH8jZr82j1fpLUuwwt56PArCEvjefu",
  "key7": "2u8wPHKtnCSQ5UnC1xfqTSoHZXcBt6Ydr2PVR5a78iqb8BZbCofGJ3CQ6jUYQy8y6GaWgf8yNo2VPvDAAFHzrvTQ",
  "key8": "g98QJ2QZJLFutTdpyn5sjKaow4dyorjYzNcgGWjEEWck9GfASFrAkgkF4dkVMpas1faV7xhBgQ8zz9mqQDrVBWw",
  "key9": "3ZPYaddMWDKKrAEu2KhSqNv8NpQvabi2i81pFVDwqfq7Uoja7grBn4QXdZKgTvQDjrfjNzbv4NLXkppaDFSuaYje",
  "key10": "2VWPCNTzfrqUUCE9MVKrH7M4Misg97yRpNrUjZBs4AFJhk9JMkycpXAiKsVSS1hvNanFbNzTZpgnWGb4iiwzNFAS",
  "key11": "2xuYJKWeqZcV1HbKJFcvK8tey2fSQNtVE44PGRP6xgYW6XkN7HzxoGe76ij33c5adVf5TWq1okRgw1UXVzRiDvgJ",
  "key12": "2NWtfeBhn4hGXAxaH8u1rM3md1goDspLoh6ASRYyNSxMzmtfH7FGB44N83JXZcNDywNpR3btDYRav6xaRY4NLSqo",
  "key13": "Hgujm6tmW3uVJoMuGCiY2iiMuoe4UPkzmwW2D9bp8vf4RW8YS7M3aDKV7rQRezbqgHggdGU1opqRExkKUouvZKu",
  "key14": "2aYQ8R3shF8iPZHh69VRvW83PspU2csvMgPzNcQLzLMSCjURNQXsMr5PGRzysEfzUWXGR4UZjBqvsYpDityesxUH",
  "key15": "ERBB7EEeRv5nnK7cMzydmchL1myKuMzHBnjLytMoEo8aLdgfD8QvEwNQ8NPtDkcw2y5SsFoQaTeNkB7Afi5xuLi",
  "key16": "2wLTA2C8S2tRcbHyFog4yzGvapyJEmjd6t6VajURSatNC1AA2ShhEpL8vatcA6n4fvCgFrkqiD66NZTXfMzxXgBw",
  "key17": "tWRVKvRzveGmrVGT7zCnsnHE4LARS6FeavsbZ8vL9wJRCAPk3wvimZUJfK4qQLysj1chDBknkNUeAdReHQVbZ4W",
  "key18": "5cdVWEuWCY7idBHmx47bVfYkuKkk7MZH3PZ6m3xbdbn8h42nxpjGhfnmutayFd4L4Kp1V77yxTypEcw8TRSJGRNw",
  "key19": "4EzqaMf9W3C8VuHpDjy8smBsDD2s9zxyvyaB4p2hLRwaVN5tBYRDvZszFiKaXq1xP2D7hhqQHFMZF8wBwNfKc7F5",
  "key20": "3vRg6nZ7rGwqFy2bkkikVDMq5ekT2YUheWQjHVMeXZxaE36yvXMrUthxABwXwaCySeCye2CTq4uDV8LmjFFh3Xwa",
  "key21": "5A7SvCviw677fabaSQSTRGJvUmyb22ym1q62tqBBMfc6u22yqHcvij5HSgj7jnB1VtpGYoU7vC818GjtUVNeJscZ",
  "key22": "os9ZD8TM1GftRa15BcqaaP3bzARQHU7xfwsw4QJZzBx8YHx7q7jkMY2ALuB4kGgxiUaN3QWyTEdpZpa8PrxStUX",
  "key23": "Uv3R94cfRv3sQsXTQ26d9eRpLzKbWmeEgDVSUfHzeFAL6e6b2axYeKEhBrr6toyKD87yp1YKfFnzkHxLk4ZD395",
  "key24": "2Fmmxeidz54vVjVqhVXzykDR8ht3U75zaYve7btSpXanJ5G2UGr1YKwFqsCzgue1MhZj7daWHkbrgqEjvrxr6qzS",
  "key25": "2JaGG9n7zJw1V6pHETkrc7zY5P5oC8mNiLbXG17Zvrma9nJvZUe1svN6nnoUFMiXKwhQFtfdjdU8ynt1DLj4AYsx",
  "key26": "dHRWaJZFKC8h5x8vebd6oz1tCnhsAREf5yjMfsUgdu3e36x5sjsK4RmaaAmPe23m9Ua1B4QapKXjKG9pTvkHu9z",
  "key27": "4CNmgKZPrfS6sRcW4bm5ih8M9Dces8U6g4wJqP6nNPgz8ydW84Qni9Cw9XHSsUbSXYR7GzssBGzKcDuzfwnq2HGR",
  "key28": "5XZgHsR5YYdP9Q4doeAL4biuaiXPd82PgHmuFyU2BEpoJzBmQ9aTPy3uZCLr7Dfq3RtZedkoDE1gFT3ysBxyVv44",
  "key29": "4iSRu1sFsACeAzBU3CmTwFBbmHW1vVdSDvcRAWSUGoWGh6vVJupJk3zp4gY8uGMn5ngkeViJJoA92oK8JCTfcbEU",
  "key30": "uPkTGSk8oKoBq2aq3Q3KXScMMimatniZSfGdEFHq5yqrPWRBES3wigPirmFtG5221MtLqk2hnrqxjQhnDcpcd8A",
  "key31": "3ULYEnRPwZP1sU1nqLsM8rDhzzcknGqQGFtqX6YCL3MtzFwob8pDYw1vbHmWKDNHzS6kUNTHomRG5VdavRWbcjgM",
  "key32": "nz5NMn7VoGS8qbjtjm9d6XwapfVftk1qnJVjgd5DavjBKZDJ8CGHyX4xCCE6PTqEc48PPUbhbYMm1xYofEjt2Ty",
  "key33": "5MSBmkwLjA2bg34YhvJRfNEtY2Fy27cGJPmCqon8SLCeLafFq3nyni9XwrRf3LmAZPAs5V3fVZ42uZDMKU3k9DPf",
  "key34": "4EQMMS54cJXJSHC2dqrgLbKCc88tdLMHpZBgBA6dewYwUFm3Ygn2ey8MAbtKvfQGVvd3yYWsQLqcqtnsqPb7Z9MG",
  "key35": "4NAe5sZsN5oStkoKpLaUfgAwj9kXdYzHdDFkDDJQAoJdtvHcdrKk8QauTFuEBVsGyfjKmYH2tgXuo89KEixorrPa",
  "key36": "2ZUsHsF12PFBXMCoEdL5cKQdrPP35Uf6ypVbAzotNRhjB3Ns3xfG2JjxkTpMvRvNJoxpc18pYafhnppjRvdNktNT",
  "key37": "3o3Qas2i57woRy4QbHJiXmQHkbgxv5jcvK66SMQ31NbpM7YXx9eoYjQGJUozj6cMjsKKCKQeMAqASfV9wsKRNgDh",
  "key38": "5pA8hkCWLYAjM6pCAK1eoaHEyKdxbAWYAinhamasJMf1ULeBJDK65EJkw7r24UnQHqLyhkHtFrsPaCcWnYYTorRQ",
  "key39": "3tFY2WWkSY4xtu9o9bv2jw2ma5FfshP1XK8zLR4ddzUaXPxaXNeUNAGgMum7fFTsnYugEsoEmSNrs6Fd9sRvyMMW",
  "key40": "59NpCXEHaWoMJ8t999aae3fsCBgf2mw3VKwKMvYqCfvmJugrmFD2CrBhUPMGDWNB4cfg6V9EhkRaBHtH5CAMb8jP",
  "key41": "3xEg32s5ndVTVj8dgvtXwjNRZRmHaL3Rd7jSWABiYd8kLoook5CDyhCcfDimXoHJpAUoNWU53RyBrwV2SkwAdry1",
  "key42": "5KArWajtSL2QSr9RqkUougkRi6su4xJKRvzuBhqCBPSfzZh2Btgh69vBUL6Ve4tZkHRuLEWecHx4tGgrXSgu2mgT",
  "key43": "3tdJvZyzfi5r5Dj8Do6xAgZUBqdrBQnJQicnRiwGJoghL9SBgNRuPLPhUsXa64ZHxdCKZ8ehrvsmbR2jVLripAD",
  "key44": "3Rnce3GNSYCWyPvrxQEDA1q6CYm5Mp2DTj4gLuyACMM6ya5DYMGgyfkoYVhUt1s7gKidKSzhoMZ48A6F52hhCJTW",
  "key45": "4i2rShUSfpFkZkw1HsDYauTzkgfxoRrnW75LsiF1adoF6RhgcBJg9jke3fGZeJU8deCAYDsA4mfG7atJKuh1eei7",
  "key46": "5kyfd2iSuz99F9kTiQHWsPEQ41JTCDwAJqkK9TbmyfHWByKNvmUnYd3KECLEwVt61Geb5JF5NHEtWEbc9xnS91fH"
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
