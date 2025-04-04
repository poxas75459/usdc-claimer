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
    "2wFs5rjYmmRfxv4f3HdFGHgYg1MZ3wA8P8xJHCMWLYxi8pXj3uvhyE8tnHRQV5UGN4QYG5f8nwpLseuBcob1K1LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JRryeboHfAt96tDwe9hbGzCG8G7FDw6kmZMxLV2cGV8XZSAHUWM5iNKM2FPjEr6W4yL44wRyrsQQhrD6x2Srcgv",
  "key1": "ifwndLQn2d8ekztceQkYSxKT6sSZWUS1nPwFtgNmee2iQ6wad8gVLWVF7Ggxr8at4notd2urDyw3v3rzS1XZhQL",
  "key2": "39aDGeMTQ5ExjoM5eDo377K7Uar2dvXfabXpNsPsCJopSWKMrBpAJZ6DHyu45y76zua9bn5vdhPdzNEeCerPJEpD",
  "key3": "5kN54bANkGgeT4iD8E5VqXpwXnspFMYCwp2aJr9wRLctvh3HPdDcHtfKRBcFgcA7RWR3JkFMD24NKw1Gw2Gsd7rL",
  "key4": "5FTGWuNvY17uEgN118hs3gjsyY3A3gFrGXAoJBqBX1UoSxRWEnPPo1v3h9RzmmZTQ4ah6tdABVPGW3Hj3MkNWYKc",
  "key5": "2QGq71DbeDGpACuSBbG59SYRNfRx8MpyyJ5EEm7TrjhCsfeYEJ98HcfhHnLVDJET1WfLs1WKkBAVGcfhdEmh6q3N",
  "key6": "5SFMa4aPEJ1HRR6EKjLkVbqpeLC5d5G67jaUab41FdArmpeepz8391KfyqgCeV5iZ2zE5LKQE6EHHa9VFw7QqxWe",
  "key7": "2VHM9pLXoJ7JoqnJYwfed2Nu85dT9nxHKxtzxvRuWoDePYsoVW87PsV2TsZ6EFVA6sePdFjoSdmQ8kriUfFyb8eY",
  "key8": "2D1m2yBaj8t6NxVytKT13NMFVqYKLSPUSxghTsfzpcmKydXPexyS6oGQnqVMz7wDtKaLEqdSMGwFWtBgfhAc3gR7",
  "key9": "4TXfoKhA5CnixiuyuxKnzQonZ9UoE2EPmNhH6JnQK1vKB8rrFbRebinRv3787WYVTZnMdV2v8EGejdQe31B26xrt",
  "key10": "YQQD4XJkRWmTqzAE9pvAWiva6UgpJnZo8S86FDYVPxHmYk12UCNmzbbuWe3sY29NzetzfsuSK1pgEWydzaqfjcY",
  "key11": "65G3s58BgdLYeLpaUwpzGSfTszUGtULp3q2hJ5yMUxgWoE4Dbmn59rv8o6G8r6LFoLmAwxVRJdsF6S7bJuybpxFy",
  "key12": "3ykHdSLKHHFWxnfQwwiSLMy2iwed3FegLrsTpTvLyKZmyhoQgxoGF7K6neAzk8dNQFquXe8SxjXEAAVxkVLP5cX8",
  "key13": "5Wk1DMUrfjw7TcD6wq4rwmUh6r8hEKF1hf47XA5VDEzE9nH1zp7af2VyFhYqcXgvirWCris1DrpRAPYEx6SvLAWP",
  "key14": "4Wcwe3eWeDYCYiEc7ctDQThnSbsucQAbrFZA2dNhezWfzZtN44Ggyz2YDVt4mCdMGTdNm6gcAuBUNCzNwbwBrhgC",
  "key15": "4tn8bob4rxhMh1UL5uR74zvVunMAg9XrQa5GZ7siFW7dePmwjBHhvHK6rxyxXbig9tvtNWT9gLAXi6NuVRrgjiPK",
  "key16": "vgL28BG1tZ4TkKSznD3yrPCwGnvaeJQgxnVDPhJh7UU4rmedS5m9MfrxKSLfk6Yumxhdvx83pa6HDySbGPgYg7g",
  "key17": "j5jt4gEXtJ8A5CbLuDtD6r6bcpkgyBntNinyoJbw1o619dmtAqcKw4ox6Uubnvu5hXqCV62jxkg5ogkxhdJxZCF",
  "key18": "uLi5GdxXQNX79jndXoT3PCWQk2cGpjnVJ5nzUqUTRCKS5m6PrfYxy3cbEcZGeUZfjxJRKh1ZnaZVYyiAYyP3xNv",
  "key19": "5t3XamNocRQ8ti5CXMKYLpJWj3a7yNreG7nxrxUfgsDKJabg8D9QHgxESHzHLyrWBaASVqU7CphtzLG1LzVgrfNb",
  "key20": "4SpWoWiwuD47cewyu4R59w2ZnJ89PDm6f86wyWwABA7wNNP9127EmLsyso3e5rw75ebANC9FUmTEhRdttzqz7Fko",
  "key21": "bAMSVTFpyegmoX49zZjCgHEzhcz7ThVFDSrf9Afx2X63NppyycTjPHLxxVdYR9728hyFxTVeET66akeZqL8S9F3",
  "key22": "3Njh4nysnKMm1fixMfEyw1EhLNbXVtKxwi2TkqKpJi1dmWtodYSUDCtyT3D5L8NxbtRE8dR7vzTbfFNm9Ep2YK7y",
  "key23": "4r3U2AJeHgTGZCCpj1qgqqDGqRrWdNH42DWWLj7HJe2eD1yKjsPhdzPYJc5GzvaZ6o1RmZGZjLnDp4p6NZB9GTe5",
  "key24": "2WjUsNo4hy9fbVV9V5rBwYQieSFdmmGdVVpLHEC4nBS9x5dMhPseb5fJQuHzbo7XrbWyNZUNKVyZZX8tm2HTZUL2",
  "key25": "PdJn9ZnSNUJyD6Zjb9iCFVpYDPsPvFA1UdpSMSfBE1rxwnQNsEdTEstpaFwFTpzKhwF7LJpeacV3eYTQDpEnXsZ",
  "key26": "499aqerjbAEkNmJF1jLRmG2GFQnx9jgciaZ5rRtJ6NGAiEDZitC5M2e1iM4YW51FPj4QJMGtUgAr6V1VZh5Rjbiu",
  "key27": "xgzcNoNPXzgL3tjrVxo7ArSq5wBZxceq7WQCjsXZpckQLjTvnQKhH3Ko1DiwUaWVGb9D9iwg1ocxU69uVfrSu3g",
  "key28": "43vqTFvmUBeprE8Cj2bWNKfzUgCW5qEWVS3DNH8wiTtELrBCUSfvhNWkLNYzg8ReGRP8832GY6rUsZxgZRpmdyNN",
  "key29": "22PHJ8XaF7DVf77wzRdsciRPXeUgEgUifAQQBKosDhEAd8Gf1JkWgCGHdwq7Ac92KpztKSCXAawhg2873nPpgmqJ",
  "key30": "57cFhop8apNAWbLk9yvHvVjJBVJPHs7Q9JehmwirgzFcjtrov5HRvWnGp427UtokbJRy7k2iBpZtcxYPTrePtCFw"
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
