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
    "67LvzNKBppxMsoQQZgjBU7XwyLkju2zaYXpMa3QUH3FtECJQHCACJEAXLx23xYsWvV5YcnMFG6owLYL2gwFiT6XA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63F18eZ3WNuwGkiuiUNLhiw3uNcC6Spwq1geif12ZWURBYgWDBJT9UVaZhxvaRVG3sd9HZ9eS61wsjFiLVeq4khB",
  "key1": "5dfob5PCNv4u55G5YMqDfwdDQRAYkv4ujXCBEkfrMjgWo6DtP9dgvYLiwu5gGGWMA7AAfdoGu35dXoALgMtzBDtp",
  "key2": "4AZg9NUgaR9o5sTvhvDAiE8CPTkauzfzAN1phBWkxyAQnWBFsHje5sQij3RAxL66xWW1yBii7597zVD94wP8eXLV",
  "key3": "LYZhHFUXH9o1zoHocRwADjbpBuQTtpN447JatVwoZygTxyTTsrdNEKtmTt4nAkokUn23JNwwWKdbzDxgbV9HtNK",
  "key4": "tKhZ5WALEACNZy8APpQDAJpXCnzqQYUdYmKDirnyXeDayL2wFNvYCuDQXHMasxcPFfgRA6Rrdzhpjp3zLS6yVeb",
  "key5": "EkH9RJ7X2RZKUnjyL2Xo9JXeRFVDCpEnRJxoTfuCJr9QMvokS3S4DJmCow4oSC9WrzVmjbNAW4cJz47jWtoPG2t",
  "key6": "q95aRp8xRPsCSxi11Ya1YLGAeZjXtWpZCNoJvFXYVghKBZF4k79GfmBUhfZVhRzEaS55dXHcxXw6qf8xQa34iag",
  "key7": "3uvnCCgEByWmmtmskxBZnkgrXwDEZ6mMbRu2hH4kK87HX9uuQAFpbE3zQmDDhbJ2bt6sEgDvd6o1qhc13PdKQs6h",
  "key8": "5JoqtxS8Um7qXPNFCc7FHCbH5YoDmrpVtVw9rwid7ocpUpkHYgoBAkmGgHBPw5KEWhc6MmifGu96aUZRtPgJPAk5",
  "key9": "5B8Y4QBoeqvnLXnXjHhrv5G8BsY3S2hofcfDsgHxnwfd5VoqAdgqiu57jrcqV36LdnYALscpqiQPkgyWA6z5bDWL",
  "key10": "4xNfaaw4bMGkBbTviMepombxrSLT5hTph2wQj4yxeU3m6Kj23C6aYGKptbB33s8wRpKBbwEwEX4XKNrEL5LHBUtA",
  "key11": "35BugqYtGWdziFBs95gyfdjyHEYnkGzAWEbo8T7MKFKCc5mFWpNn1JN1b72gUJMPPzNeg4CDwrjf87mH6vRDj2vV",
  "key12": "9PzajasMUq3FHzBLKQr8VLFYjSjbxuKWEQdVU8nE3FmmYp5C63XygM7fEUMphCh7YABz9MsL2SeBtG8DjBfYybb",
  "key13": "51RJNvqzCpdBBPfYBP4PnHMrXu2bf75mkjuHvrAzx8N4pMFTvWYqVVQf18FzZ5TgPoZHPs4q3ztmbGJJW9KU7iGG",
  "key14": "2RW9mKzLuhvYUY6eogzCzEAyyJbmJpzmX67Gzs1cNN34yrzqPkUz4X3o9syfAnBUMYzrrv3J29JA4m7hNQp3vryX",
  "key15": "67TzbBkLQtjh5qMhcVij5Y2Zy2HQeSzsBS8HwhGfQ4ERQC83wGNg9hzvR1naLdgi7gVSEsLaTnXq6VBq5vsSTvG",
  "key16": "4oCGhCmn3V34URhwvnUzFQa2QLEeBBcFyjsBDbeyGeoHfh9oEambtw3bKBxdUFNzS5DokJQCrTDLH3KDPEg9CPzq",
  "key17": "4mQKBLRw8hHUgvjA44Hq1x3TbVShS9Vg5WJ2wLhVR1J3sfBLn5rYJgbPCxE1T7m1Kg1mi3ZAK9VyKkxshv61a4xS",
  "key18": "5zaqiUJbQrNqhuqpRbmatweP75L3TEYWUXuymYt1DXUHJm2twFGyVLfAT18uFJXTbSvqYeaW2JgHhbnkWg7w9m5k",
  "key19": "2FL1vcsMbBcHALpLgt7EJPJ5pTHinPkgyq3BeEfh4U8q4dhfwcSyc1Xge9q3BztSdsLfJs5aHFFhv9gwghBKUaYu",
  "key20": "2XzGtHk7TSEb5xW3Rqtf7CDykeREMrppoNnC2QxzGgS78fgH1vjEKigoK5dJMd8WgutPxzA1stwnd1J8qhonaZkT",
  "key21": "5TWRucty4gCxiGzt2pCLoQCoHQrfNdUft3umGMVqoop8dPtvjtTghe6VvVnKjK2nH8sAq37L9dRu41UrQuACDNTh",
  "key22": "4bPTcBHLZgNqmTZ8gaXVTvyZH2iH75dZEA42uoTiYA5f5Y1erLigScboZkxJVbTXZ2yNcjtCryvJyHJfKrP8zW8j",
  "key23": "4A3q3XFCZyKCtabCwRocao3L794JV2G3eHP3YsxmpoK22rxSb3pVn73TQf1UANDUDMf7TtqZ1FrKyUNMCG1wKghd",
  "key24": "4TaPek1dBetFFGLZx5c5Z4WnvY4QUmLxs6xgr3tU2frzTFjfpMYR82ubCWuGZhz1c1jVDdBrgErtWqa5MU4Yoosk",
  "key25": "4F1cRPRJ4K6dCbn8CD8VZRfwynY5Lrtujw5xKXDZGB586N7sJAeSUii65ZLFCMQ9WYm8hAuzberGMWCb3KSMXSQE",
  "key26": "3BpsKtgQ7MeHeeuUMnadnuXzZLsMkwP7oic9yGfJwzPYoBriRku3U85DxiGdy1rRtoWdWoo2cjDxxjqdWDb8hsBy",
  "key27": "xxtktvZELeoTiQ5zP1AxjBbGMN1c44FvzZEW5zQ4Tyh61oEL6a75Z9XMpZtwz6x3wnxHk2HPKuSfycay4cfnKyj",
  "key28": "3PceWY2z4ciRjEsaNoWC3PUJwhTPXBneyfE5Q5DEvKx2WSsDkuDmxozAbtBDrJsXZBVBWnwPPpXUtoBg9YeUirZk",
  "key29": "2EQWcpWoWutxqtuBXdzCkvBvDksNpQWyhZkvti1QnbXe1NGXNUX2zxuakdHTVPmko2j4XXGjPTCLtJiCU7af2mud",
  "key30": "2zwwn9pZznab2fGSDEggF2JGjk8tLviMvqFKkHsMX5SgWWHt2vrZPHut74k24XqodFDz8LJyJHPF2JA7C62UXezg",
  "key31": "2CP1DTFr6P1Acy1MKx7ihFZSN6reovdf4qgGaBA259Mn8dSnvQQuaJkCrLduwiqaq3hPD9ankfcrQrXpPN5iKPYG",
  "key32": "2Ky1JRAZSWxvruGNhd2di1XP1ZJ95xQEAdqjm2DcT8dPaQoRrvNmAuk9Rwt9Fq6BEfksNxpjD4RhLa6TES6xAVgT"
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
