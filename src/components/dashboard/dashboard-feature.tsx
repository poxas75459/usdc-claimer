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
    "7QcKASo2fDqTyRRYeFrSYcvRPGMH2C4SeTJknCHxgf7HCHHgLNXGvkCM5rDvam79kwNj5NyeVBK4JaUAxFv8G9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27UAkYMca4hDfgKqmSNLFkCGGqtJwNA3B6d25TGomUCsq8eSYdQ4pZrXPhw8DP3Rh56aibaKiRs6hLJgZhDdUECi",
  "key1": "qiZ6NqPtntK18LP1Lbc2HuEQJSznJg5TjfR6MADAshf39KMymfKGUTgEi5hqJduiu9dXm7VC8W1x8sDBd2wW7k4",
  "key2": "2k51qegaUf96fEAR7YbZg3cCHpaYG6XBsJzNhdeir8TVAaTEhidb3fk66f6sUqhQC3mzZwkEM1rC3F5LCwKxpQYU",
  "key3": "5hheqgg4JUUeHq26nRCh7Qnj8RaNyLBygbNm9KL3AzDcxUTVpVt8EbQEwXyop4y4pHJrs2oAM1CyghNnfHYV6wW7",
  "key4": "57NskQrfuoYbRC1vTEauFmGWALzB9hk8u2WeDgsy4zzSzZpQJ7MijJkpKc1deEHA3UPwzrd27skWkzoyTp5JQ2SD",
  "key5": "29MvkjdCakuBHnJvPaqFN1yBXRfRPSd6E4L7RTFossh6WDGWUkfEqdEUF28XQqxr9YsoWdG7vS6dqYhUEAurW78Q",
  "key6": "UoHhZ9a2xv9wZTiqzTifVUtQs4UZoHCdhURsjowiCbggzCTYmYZwhxBcagYi8pSBbhLUcB16WN47y9UqnbTSYp7",
  "key7": "2pHuTZJaVudSNG3HbdptbWi9G82tkXvxDHx6ErfwNCP64fUPZMuJ7GNmiELBAD7mn7omuiiXuAk67yGRZWEjYWHs",
  "key8": "4pfru3nwbpNcbDzZVRbmjZHYrDoitEfdg4B1TgVqzgWYwqPcqbavtrYxWnH4qEdkByp1rwzxw5ZfHzN8LCuJaU1p",
  "key9": "5ZjJTATHq6ja9NEde2MfsEWcrCV3g6CyJbsHtPtrB55HrMC5j4R3mLofwkbSKPjcbfRZsft9E23DwHYdfaAwsQwS",
  "key10": "3a6A14SULG8mgoJe7HEaoPyapEuJ8XGKxNGCv5QZawVED4cVcHvzWYq5kDP2qCJ1wK15VYN3LrnxUBpv4o1sWEqG",
  "key11": "4wjvjjHqy2SzFBi5K3WvtkvF2sp3thEqztf4mD2JhRCHbGbaciKYfZQj3h2eNMDS9YtLs2gFDR5kR3b4KHDxCYas",
  "key12": "2VGoXAJsS4GkZjQgvRg2qdGjCZcoGtqEnuh8iyrMcg81T5MwvBAMCQCVrxiWFS5p6BmipAgXc5aQZHRssj41UepR",
  "key13": "4278RKu81GNzzyuw4amgqZurxLuuB6rSQUTkXJwvontpz1hmpkskmgza6cDjPajjFob1tpJrnpV29v7zdgvxqHbb",
  "key14": "woZVw9cFz4JkZGaK8GPZrtmbgmDaXLkaVXxCswhQPWfcyaKTc3f8FGJxWushXAynDebfkLKLjW6s2jMEtSCriFx",
  "key15": "2txC2sQUTWvMhBB4WusCm2r7LeXK1J4UgDtq9Cce33VURd8fZwX42tAiE32vAo8iYsYk5rUSiKSBeRRjcsYd8e9d",
  "key16": "3W9SpJuWmaTuF6QUyb6CinMLxgFVzA5zhk4ygNfr7yRmmeGBncFKkZFeZxvNX7XgCm81Qzd5gGGLJEdPfwf8dVc7",
  "key17": "4hQsAtnux3GQeDYBWq9XaSY3Xcwxcxpa3wn7S6kW5dW1ai3B353CWhAhHKyiaGwuzQGf2ddrtDbo2iADb4CTfvqr",
  "key18": "Sg7XXAz6jgSYukrh4TvsvZhqJpGjkmx768gq6mBW1PHhxvozmEntXYM8NGxLggJXVGVPfmEs5s7H915Pdk4ncxf",
  "key19": "wbzEV3NRQXaTNCFNQv9QHYgAkAmaWeKQaknWmidJ6Z743BAa3NB36jLCPb37vq9v8epG5gVEjzXuyrHPf3pDAbm",
  "key20": "3Ujksm5VQvpNcEbbFEyYP9a9TiUH5AWqqhkPnzjrEmeJ1ptEBBWXJAGGG8XRTNaPQY8ayYyhzuYYPygMk47shPt7",
  "key21": "5xyEHS3rw2Rf9qWDktZSnUJFNb6WWNYHwtxUnhAacSP22gzS6PvHRVoeTXtrmWSPPXcGhjdt5XYzNd98qvgSRjuN",
  "key22": "c4xTH2cqmrnKkmD4zK33SGZXJtTNsXFTNiGvjRhS2bABRPQzEok6UW84vndRr9uK7LiGTjfk2vUEto4aqUtAJm3",
  "key23": "2fsK4UqcwJ9RkdzsbQBycNoey37qgw5nUTDx7AzRh37TUsE7bAPR5nu6rwrn75G4aXRtV2HDsVKiraiHkbGKTE1v",
  "key24": "5bkPQ77QqCa2ZNBJ2LpdQwCNSTM8thPttC6sCyijYnGY9jsrkBX9NahdDHMVbgmLNbQ8J3c1jQ5F8K5HhmGedUZS",
  "key25": "5HpCGPVWtnTDWdhNmaGoN1woawDCG5acLzbaizTCQRR3Rzj5WiqiWnnrP7P5bgK8ky2MwumwwYtiBkW67Ke5YDzF",
  "key26": "jgvsELuD64t8ALnVPh3WQfJN9ciErwM2BMu5hWeSHnP7LA2dhbBkzD3JjGSzQk7x3eJnoHVMXcKKzQwnUid6Ta2",
  "key27": "4kMrRW6WLFU91UqDAwsk9D2oLTLwhk4oxZKVCbCsauotqt4FaUxgfTSkuHeRHQZTXE8QXCKZ9gUyW1CfBQvmYnBS",
  "key28": "3WebwHk495o5DxqZzq5vvGc78D3gB3PD4uJ1nmGWm4B4kz4VUthxtHar7BVtNao1uSigeRAx3AAF9JNnZrrz2Q7K",
  "key29": "pUdvWtTq75usrKy4Dm6nEGoYYAqytDuRR2A5dtvzJgbnzsrCMUiKf5D7cGUHETdmzJrWkSuUgt3TR7xNuttmEdX",
  "key30": "Dz3eJ75oVP9bErdwTwo3REQWmAv2z2cVJFeS9XBKKA7zm4nscqy1yJauFF8hkEf64bFAkATJvjs9G9KnsGy2Nay",
  "key31": "3znLBmfhah4EimXv3iVfgHwC8wAewUXH8obEikKnZazvj2ssGzd1cQv169gPEwSiUjSzgNi3ZRvLmq4i18rMpbY7",
  "key32": "5abfnRSGywch7f499ZHCgrtedyunH4CaNUUwxCQ4ZKUYJ1hytKUJYu8n7ihZjvaZipWX7ZxNMGMY46grKKPndSM8",
  "key33": "5yVaUxshX4Uv4yedW3wHTMvhDr4y1LvuhjqbY2h1H6nmxG7CieHaufsqVNNGq7gUEf3MfsVVD4HPBPxP6Kknm9z3",
  "key34": "2JhX6ELBPYPWobVT4TxWkfL8pJkSaAyj2ctcjjyKhxHcFJxx7fAa5xvoPXYcCZ5x7Hw2r9LejKvvq6W8MvFPqcGi",
  "key35": "2P3naui4rHVMXE6RsndTu3Kr5Qz2YqCgCoPiUrvK6s8P1H2EoYX2qmiJg3uB5T8EwCWuiPqjKVM3KbkmDurvpsTg",
  "key36": "3HdYSemBzR1dntxN5LZjrY3kCT9wL2gdYCCwRRXtXJ97ebiGGrHyrrRmQQapCpkuvdSDtQaaoAymUREJd2sAqBPP",
  "key37": "3MpFiShoXjJaQ1xoYes9YNuYVeFXU3hfqScQv3XbHtJpsMcQbK8ccawwvLJpn9Wdaxsza8ijTNhHtQ5MLiDgcBen",
  "key38": "52oDfhCHbu3g12ZSh3LsaQ4drZGN6rrZH5NgGuMih6oDHPf4WfjTaJiU1qXwHxx2xqpv7vciTLF3NgoRuKBjdUPR",
  "key39": "pNbd5EVE9CKFDYkh3d8Hg9To54BKJTN5iLhLM76Q1r8zcUa9TrML5NsHfHTB1SF8c1fUkNnJdiTz7AFZFPwj2mt",
  "key40": "NTXNSycvkHSpCnS31cCLuqQufMoAbCbEyrXQTALLgeAqw67xA5PbA1pEZtWBmaMVG3R2RpagFsMPYjQGdKbYJWx",
  "key41": "4jp3ZJY2koyioZdA21pLk9jia3LwCcTqWgMFuAgiSThG1XpbGy1qLZjhug5JW22iQT7bFSdNitYTp2cMfem4siXG",
  "key42": "soFtedsxidzVKPEtmk6HgBXgJbSj6huNRYSabtRmBq11TmK4it78f4CrmrzB7sS4dEHd8Ep7Z6K1bye7XXC8omc"
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
