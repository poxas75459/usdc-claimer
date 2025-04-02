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
    "HcMBHMFA9AA6N8mnqNvJFzYtcu3TQL8ftM3nxyki7zXJ8MrvrBnvkpmRbqBPUkKWGqdoaXN4W2tJMVZRLUCTLXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ao4G9TR97aBKaWmzEwwSrMoDgJ4onFmHZhZncP1aQ8w7rb1HaJncvfDWLXiv3acytTLo1CaYwtyxAoVeGH2tScw",
  "key1": "3fXN1QoqqMrF5FPUwnT5B5HAQLta73oiZUBmECZyqt5B13tApd8rUZVsX42JQHniVx8KH5vkzEVSa7wwG5Xp7ZPu",
  "key2": "3kidd2ReP67sctGD5cVvY472ioJ9hXbmnMXoEHD7ACXQzDqyRkLVC3sypmaeVcvm1bCLdK4YP48EpPY2ofxT37eS",
  "key3": "5tSt2WBNUJPQKys5WQuJdoNn4yYQAehNLH4YACVtWmf4Q1KPEPVQ9hns4Y5LFVbuM1pvMomHXdsxR3mit7ibUiye",
  "key4": "3c6DL989sUG9forxFZ4VsB4sTUeuv6dfdWbTvrrkdmcRs1BPUWNFoE3uNPuAPnM5otoeSxP5fPY2RBKZctnoiHTS",
  "key5": "2RzwG2nPKyB7d6BL3PCT1okeKWc3HdxGo9FeNC2UEdiPAC8zXHgqvEsN1AuRqaerq5LT9ZUgX6at8YXqqvEfQF7v",
  "key6": "3EfYYfSMzYqTJsx6iCTvqB7fGNmXHktSxZKdWFWRNqH3o6fB2HmKNCtwGUE9iWGGKuZSZ3m3J2u9p5eaNkfEw6k4",
  "key7": "47czpMR2pAictbHwAE9uMUh6J9FDXWrVb6jf7FfdNZs6FUK1GASqVtqwX2rhTbRL2ddqSH489CjYEGuNAUmPuXyc",
  "key8": "endgXxqvCXTvAqWXgoxuDhsNDfvZBGkN446aZ2gyqEoLyNEUCcb1NBDqycvkdqT8kuVA1Jg1tiUCxns7XybhYrT",
  "key9": "5UpdCq4cjtEttzkfsVhRCAz1ez6EjaHoxAR8DEN3tzi2bBkvyyrwr892fnTcsRsjNUcv5q4d3bX2RjhnQFaYqX2N",
  "key10": "pGNK7dsC6vzsEn28bRU8if26qMECLMatcLNKuZNs5HCqwNXQA4y1BcHsEWa17cuLWxpF4bWR2xZrxrmD5SMVJjA",
  "key11": "4sHHu8wDjEEARqsVE3fCFLUjD9qBs2twW7xvQ4E4JVY548g9EymN1xfJ4uxZ7EeuSBJYPHCSaqqbnzA7kh6ofDh9",
  "key12": "ASy4G7aZmirfT4SNebxjKci14yFfmgJ8HZnC2YNhHCBunUNftihxZuW1EfoNEUnZiH96HB1mhHmU8qkKXGJ4Wrg",
  "key13": "2ysVMzSnu18c8VdpDuWa7R6ogEKAhBwQ7P1CfNhmNzSWEFn4jpjTkY8F926PZExZLbt9dM83jW43b4wMGScwB72g",
  "key14": "4Xa8f4gq8REy4qyDmvud1G4bwZSgyYMUMsW9vZuLL4r5PtDHEEwzfT4iPFp5CfLWKdzt1f6PDZyw3gEkT8H4uPdb",
  "key15": "4QaYBoyKo4YafQRFNftzuyJyxE9QQCpnh3FAuLVxRaphLWFh9SZZ3EoK4thfUjkf4CmJqnWDdBYACve8iTrtBoWk",
  "key16": "4YxzUPQhXKs6cArMwh8VVWyQ5aGb8am7orboi2Ppud2vToB9Ks5nKtFPCT6x2K7Sp3eupiajJkqVPGWYJZhF4rK2",
  "key17": "2vrWFWk8Aeb5tWYsh97kG5agbmHZRZ1h68LoU5CtYnTbVKJVkn8E6DcwStCNHLvLYDvTAPXQgjekQezEybNcGxST",
  "key18": "26qz7k9XC3GmhAmvNGiDrS6C8VLjag1x6sDvaZsgp3Cory737QTjBi9JHwKrcENvS5p3YbnJ5iQe3htMHD5Jymhw",
  "key19": "5oKRpVbd5t6FzN2dRmVJuoP6ydvoRKs4HRiKvc65iTvDiTxUDuPXcNg3hCUnQDir2xKr6fdmwqoEabW3EPa5gq1G",
  "key20": "2dAgP16WSmsFqv1NEFd5G8Z84sZQ5wYDQQpunQLf2jUbyafqzrPucWKc88fTRotzeQ9C9qSpy5jC7CJzWjJeTW9f",
  "key21": "vDYsoLCh1s9xyZ5T24T4BZnrVK5XkEippwk3CSdni1LyfcpXJeqx4YRgyh5UvMpK7yvz9Yd2s6qLyksy6XmTcdn",
  "key22": "5hjDegr88NuTyUamZzT3LrRrbfTVXEGb6gri38P8nrKyjd8EYme69P7DLfgoCS3dxk7U99BKmF6V14RBZvT56RYy",
  "key23": "42ocq2sPVFciTCPnNizASQqAbjydfEkXEf2oTMYmzkgch3cj25iauBDEDiXprtLKNgAb6M7UA5XSZFefDRPxDrsd",
  "key24": "3yzRhM1wJKP5o2gmRs7uJq4yYVavvXZvuMjbzJcxtQSwXUx1nVYzpv7HCZQzWXw3G7TKaBSCUC7JpM4GFskjM33k",
  "key25": "4v7ZBiJQjrJcgCsLeVGkiGi3KSGGAyfsV8k2gwaeouCXJersjcs4K7RV89oM8jY4igD2hb5Fd4nxaQNnc6CVH7Uf",
  "key26": "5DnSpavngEqx5VygMMXbivqep4WpGPsQVmjtbeJKWosgsA9ZWnzqwMSWGuKCN79SntVKj7pbEes1BQBhvKdfonEs",
  "key27": "5CxtrbLuM4sVN1HVPX4zbBgSdoKifGWCQN89zjMFC85QQgMTp8joMJKLQDRxLywVoVjUFARNKFwG2p6txyTQu9Sk",
  "key28": "48NYH32U2i4N61C98eEyF3TsswfeHZrqHRcGiSJDt67pdtrDc4K6cj52jLqekRiA7PLiTyizpTirR7UaDYCjypug",
  "key29": "287D8NgBiM825SQ7JeNBoFBvrZgxG8nNcQAVBuou5NaWk7egxSovSMHyMeYpFaypNhcu1K2zgDatWQGPGgGCBUDd",
  "key30": "3kzbQLW4YcEdcA1t6YqLVVwQm7zq9SajF2YCZYjscQbQRNZjjxh981qmGUe3Xvyb9xCuLkqU3rQ8ZxkznuJjBRah",
  "key31": "vdh1s8TDVPVKe81kkifFs1dzeFYadBdbhGg8xzK8f8GBAdwxTzzcMKjNXPm9CFNFjtqKpz7KZWShMjafNWPVNQ2",
  "key32": "2QTGNKs2XYEuWDNu3yEvzMeGNUjgvyBADWEvFGQEVpzPNPuBnMhbZTXw2qBWYwR1SzYFGbJtfacrHZzTJFMfGAPB",
  "key33": "49DCpZ3pz8eEFGyDVQ3K8s8hFsSuubHHadf65DoBedTyPSxCLdezg7ru4sGGaeXK7MAW56PMyJUhWRsqykbE8pD9",
  "key34": "5UhNSQjsvbT3VCTry3HsCF3QGG6QGBgd7RM6fBba8rNCXD3Noq5NyPkjBxvf14tLBxRQafZHn5pjjf7nck6RkKNs",
  "key35": "5DHRBtbwu3PkzvXbtJhuA4t6A1QAbg2UbW2ti4ErqnWb3AnqUaQnniVYcmKFMYN7KhoEpFTPqsNiHLuRB9nxy7Hs",
  "key36": "2aaVYYfmD5kzkbJev7Dv4ePDkbrn5nsvEfFFkcrskCPE6xSQk82uiVWAzaNygEhESTk76NnQ3dxmShizhXckeyd1",
  "key37": "5vPgtzVUvWVeyNZ91i12iqmFoK4dQ2vdjTHuHLZU8T4SK4YVgoq2aAKiiVEJ6hBPd2CoYEcjsRP1AawopNrERJkE",
  "key38": "2NEHw5npZQQvFCPsjtnri8i925fsbCbJxNPpV5JZxygfe1bt548L9YEBm1BtGmTnoVFfP6AciRRKfAYPqqSRxk6t",
  "key39": "hMZhtPxvGFnRBscFVXB23W9eVJ8cUTMRnZutetXv51NDC9u3AbVjQprT2eAPYFQgAdhZmQY2punootWVUSTZrh7",
  "key40": "5RpCnSyG6ShwHhzf2UKL4TPkS8h41DoGZRyNKq5UKkvRtQ57ZPeJL2tbgDk2cmvdTcpjyQedTqwTyNKovm17gMVQ",
  "key41": "5mkuaVA3rxgP367T4tnNDUg1ZPjkWdYeUUDJ3JvVE4UvhdVtjcA6v8GAsvf9tStioA1Ngyba6dGRyutqY9V5GYEy",
  "key42": "4mVKSU19hwq13MDXUozme6YK5hZVtcSiHCx3UX6iY9SUtD7poqdAg2hzY1a6pbBnCaej2eQJozyP6caCFSiaN1Gy",
  "key43": "5UB963jCxUYnDLWuaphSoFyYZSHUcbzSxLDiMQBo9z8napfbFL7L3WQi3KKsQrWXDmkUSqYioy499PZ6Unjth5Py",
  "key44": "5sDyfBFPrFCDUs28nKBmnqzWve3PuWZFvtRxL2g6FK5R9BKX4m8X7GhvQQ8S2NFLuwPxKeGQ6ZeKBUNkceAm9Mw8",
  "key45": "64i3UzG3e8hxT1bMRMBABVN5NMVhABsNDxKGfheC9sEQcqXmzvzsTKZBKDU2ebEDFLuMS66SMM5wn6V65AEdXJ6C",
  "key46": "kuPWCiTJmnksxk1KEAUPvWJm6DFPghRkCqu9TeciXWS89ddicsSwrfH5oZtLCiFDykfvgswtpKnG1r1wN7BkF2R",
  "key47": "HBEmRFseSePcWPpTG4XuPRfR9sHamx7PsckWUbe6adbq4cT3nsaXSnVHJw6V8jzEnYWBikAfHLeJT8HubsLJ5Wp"
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
