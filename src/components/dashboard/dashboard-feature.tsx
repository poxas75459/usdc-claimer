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
    "5PnkKA1KX5kLLH49RQvP9SSJbb33hc9FMcrZ1iwNMSTVXPKVZ3afbAw2nFwUuro7WY6ipykQyUg7TeAniBL4KxsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DoeFQjKNGJF8aQZgYywU8iCw1epQzqfWKNugAMxCHMwT2USMLChBveez8Lqddi3XuwzdrxKtEtJM72SegPxvppC",
  "key1": "4N1wNkxu5ese5BxWcgzaHvRwoYrTVhitWBejJLvxTGYCB6LBNAfQ2xveWFzLdtibnffwjhLjE2bL5wGi4mNzMNsW",
  "key2": "2qsyBZEC1McEKPvPWHhT8Z6d1NFa1pKbnxbtA4ic9yCNbyTbPMwVCMCtS1aQ8bSzKc5zbM3sm2c8T5adJn2sv4ZE",
  "key3": "2LHXKLvQf6T1mxWgD27PAxBDtyHLj3fU7VBzrHeiyaeTzAAYph376huQX4pfD6WUgFb1LCUQgwatDPSVB2dEGJ4D",
  "key4": "4vQ2dvV5XVBLGkap4frqYUi8ubdtn3upSZeinAaa6jdopxorzJn6gQzPdVuGUVCNHKiQFPGYUyRLnbF8PoPR6j3U",
  "key5": "5gmo35FUPzhoo2qRggH5pyZLcQS1YvkhnTZpLbvkWRTVQD3gXQEWTas3WW7Wn6z1D4gipiqABKwiPgNVkQxEuRnK",
  "key6": "cS2FRiT62JBcCY8GfyRJf1VxCRgB2au8MCU3zfeFuwxmcafcnBV9ZPgP4VM26johJ9JSvN7u94LY3adX6943Jdh",
  "key7": "27MEZScHmhx8x1CbzPEd6jn4epCV29tQuYLy5RoerVzkAjnYhWjvxBusfh7GHqveY5VGnfAW8vNmDWrpYkjRt7Wn",
  "key8": "2rka6X4aDfoNWGa1U93YB7X7x6bSiYWJAGiADznWUPJqmE9HK2xvibgzW3gR8tRt9nn6yGnaivcH7eAGjXv3Y5cB",
  "key9": "2xMu9NLEgnrsNhApDykqYkkC1XYW4WFcwdcWu32YZPhJefqR4vLUuBXxKMjU12K7y26Squ2G95wpV3Qb4aiggrsf",
  "key10": "4ZcC63WTrBH33dgtkkHgzpAcEgbU3RSBhCtPsAmcESqmwJQcL1B6odRH67NizodYAqimk3nguTruwWqXMn6MJmXR",
  "key11": "zq99HPnPbBrxVSiBeVtEdd2ZgFE7WoX6cktWDBHbdnaCbRmVexGDU8h4CphoW2xX1XWn8CCnnkL7KY7uaFyhyzY",
  "key12": "4UGC5suShhiLMoabAXRP9bSi2PnRAuwbAkRRjMbrQQpupKDAorWwuczK7zgY7Uk7L9Yd9xvuB5CqdjZ1nX49eGi3",
  "key13": "5AVqvFcTfccoVCCPqF4FsqgpAApVgK76BNhTUYnSvsCT73Zh1dfxMKmpkiqkcmVxpMw4S1Xmx5V4BmJMZFBvbKMA",
  "key14": "4KDZHdusqdWrNxHRzwP1UwAhbmr7sKZbCDNA3NoEdAgy6vSoXgCWhi1jQdr2VAgS8JCLvCrqqgfRAF63YYkTpvP2",
  "key15": "3baKXnJmhf6sDwBwWiQrwCiXLWRxjK83jhd7YVvqMZDRojRGadyzrH3k1VTd8ZBxaMDj25kjpoG5tFh1LL3TqQdD",
  "key16": "5Q7pWTc9A662t6TXPhWPeYKxUmfaj7mdUpDBMVvLuFsTfynUx99dGJsieh8yD4Gg26mnMoC5pr6SBV6v7WJjvtpA",
  "key17": "hZve7HEvZjtdTSHKpVi3MXCdaYDjmaGYnzFW2j91JU95brgazjiQgR6f5VbNnYU9vRicuVwdkJP7fVrjriMGdQr",
  "key18": "34AupEJQVTAQoVKf2CmtJiwaK8mBbTjJRD6zJWPqFQSgXZrt1fTsZ6rhZzt7jaJ5UcKmdAQU8xtDT4rLnRVW5uE9",
  "key19": "2XFEUs8xCUUcvNZxeRZv8k4vheG1i7435X3ZBFXiAN7bKWktLorBU7ivwHjP1X47UjZj8GH5e3nEraduT8PMFQKF",
  "key20": "4gT4jzCQbFzumd9dpYQkwi3TQoBbD2vYfsPoxztX51aHyxEf8J1KzuG2KALr9NZRQMkWBgCJnrpgfANjPAYWDGGP",
  "key21": "24LrjCp5eA9x4iC4npkPP6hMdQGipH8VvaRXNBTM4RD4asm4qBk7dbyHNEF2UA79dFbFAeAMmHtkT7oQG48j1Hz7",
  "key22": "2iMRUrbFjykYSo1eDNvUucN3kkzhSe6hWurTAGjY4ws8uASTa3wYFn85zpwPGfxpdcM8j5WRnLtMUhfCtiKtV3hd",
  "key23": "3W6hRCjarqpvMriM2nZLeEonoKeaZfzf7WtsGzgYDfVqGwRMMimi5LmuAEdSXf23AxamvJHAZZnoQPivobKfuXP",
  "key24": "2ZT4sSvQfnrCYeoKL6dCK6JhtgGFkzD6kdbmV6eru8YLZMhTDrF65cdqkiZE3J2G6c5LaBV4q7ZjiRzRdZg35ciz",
  "key25": "5me72RfJYAtMrxFyAM5CDJhE8JeM5ffQVxxtkoFxWQw7bXs7e8TkvTRYjgrp1QSydvSb8gg8R6tTgQbRdzbRHTNy",
  "key26": "5bWpxq48tkLK1N9w9LAMEwXUYAfHfjjcLDBLLCr4f8nQRetKgHnEcZDWK5oFaoFqV4f7ZWGigqDD311s15VMcqGj",
  "key27": "2GdUtWzED8TdZ5H58Mdmytynbgk1jDhBV7S4K7NoBg1imgGXa2KwHKH27zRaZjLywdS33KZBq88XWQPwUYuXV2vp",
  "key28": "5nQdCugeGCq7aSk2pt3diuv3rZcysZSDJMBraM9ZTPubPvfFzGqpMyJ9NBYgX2LgjbA6hqPEzJYqKZ3AQWTSCmAy",
  "key29": "3Du8KB7ntREJpe8grgPokeM5wG7SNsVRZdPjfD1RHZdTT7RdyQNNkCpiPReA4XaR4KRk3CJ9wBAYUYzsvdmSQW2H",
  "key30": "36PkW8jdfagiG6UMsGNAishF86Zx4pT3Ea2VMwFcdxAA9pr133j3JTk3t4fbsDNY5GP3bUcsNdyakDEBZf5ugzpK",
  "key31": "4wzVEKaTLWQzqwmaCaFKsMhkdT9u4wn5fVuJi9s9GPmRx4RfqVZG7V9PiZam4dR97oGHJ6TQ35UD8mUvpKowLCw4",
  "key32": "342Qxd3mHu8aoHqF4jtCZWe35eiJJvswsDmrBAHrYB9htPmtWfvBpPKrPhWgbZUpkHDKAfrqGp5LKduVDrJaWU45",
  "key33": "5MJxpBy6znz9CkUH9Qc4khpy5UbAiokZwHkoNHX4a9XQuDGQJLH63hwh6wETqJCuR5LxiG6NpcMGvQN2rLttBbJ2",
  "key34": "51JmDNn4uNfUXexJXQaXk4QnmXgJmRHgLZycDuuwn3Y61vYoTcCxp8sgpVn6xDGuFn4WnMaQGREjwnXR3K47kGgn",
  "key35": "47Cgxci6B8hf92veVWErkgRG5a9UMhoEFi69g9WnhzZDsqJtAZHKh8T5hYEjPDsTcAUcMQyUaRhMpszojMRc2LVr",
  "key36": "QDy4tu2D9ViG1NCcUD9wbVv5T5kM4tbEx8WcnxBX9i1BZ7zVdoaV4CmF1gkwiQHCdwx2zGsxYcKF3Um3k8AbqNM",
  "key37": "5JVQspiGJkJLszkPkLxC2ennk78cV9Mh3rvzrnwuzW9PN7xSVxNPrqp14g86iSk4hvMAS3TUh6SMzCPrMh6S4bZE",
  "key38": "3W5CVSFuXWHhD4rNexQvxD4vGMP99j8TuPMAH8bYjgYdrWj8vjqPcnoft1svn1AsgpQMES1mNhHwWFRAFVEX1uX8",
  "key39": "D1MFs7iZWmsj36DNEb6XMKGqDSVoCE9kWBUU9mB3RbbuHy9eDauYgHiZHd7HxLj8oAPK8eiwQsTX827nXcKWLDJ",
  "key40": "2zrXChju8iiMBJ6reqWHWGGzuQnnyF7VoSEvAE4yotLDhqgjdrNrkjgcnPWSB9AnfFTqQXmp5vNhbvjq7Fb17HCy",
  "key41": "53yWU4HE2h1DNM6JLYsZgHZzvvUadpwm3HUxF2ARuMpufQVtggbhbfCGGramWKkW3F8kfd5Mc499D79u8m2A95jU",
  "key42": "2chMDqSe15Tm8P2ztAjXDegDa5hueu7aptArYgX6bUVh3EtSaxR7bPh8uXWwQhozRUxCBb8EtVXfCQjw6gDzUrTj",
  "key43": "4hEkBffPL4f4ZxWwvPXGENkAhbQ1aLm8awkBmMJYWUSi5vPb5rTka9bnifWQbzJtLHhtj4L9xWmARGiW2sn6dy7n",
  "key44": "4X5kYKEpNnEUTbvyGtgXJ7fu7FtJ9yT4EKD8uFEmAzCKsysCyupg9nhdMM4vYZcZkXfPScQ67ZdWLssE1tH9v2GX",
  "key45": "3V64yt5zDgz9SnypFwMp8Cne2a3jvwWnrWiqG4cbqVqoELHEKmKYDWByy3oSNMcHvxmzqEm4ejwMnakgdVj6yoGd"
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
