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
    "3Wjzw365DYNJDd1vp6Q7CUaFF7EFswUivBJcRCpMpnN9EVvLobtzKUiZMLDHXpaTGT5EKJYkoZ2XdXYyCKZce4Ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U6fjP6TpD279Vn8Dkf46hUTH9MxpWVwmXMdJw9VnrABpiFgR19wq8eSwJiidKABPV2t62JDqVznuKzK3A4PeJp3",
  "key1": "58Ye8H1hbtGMkHuAAG5z5q3quXvHsBVUu6949x13jsTaZYT4F8bWJmPWZH99sGXm5dCEHdcwquZBqu5ZkhBD7UkE",
  "key2": "8UWNAfUeRhbi9vpybARTFBKnR4SM7YnAGdVgahUgGnsa9eR1PzBvCQ41nGCHUMenfFqek5CJGknMMgEQTuQfR1J",
  "key3": "5m9i3nzyumabvMroB2GJcd3qaQkRa6roszoGoNBzQvSGAh9y6XGS3HzDEDGksAUPFDnTRjVcqzTBYVf5NS6xabJu",
  "key4": "4iLGvnDyzZJCTuHCKmahJvQevkZAaaNfbvj2XePQYBMyQnK6wQpafQuL3MqKrvL9xDeuM34CCiq29EVTWuGDEQjg",
  "key5": "suQLLq5w6GXgXWCwt8MR5PQ8ExzLG1oAjQSkduhJp1Lc2c5HrqmsSGLKu9bMBYHsxnFwpqnspbHaS1Qhxo2Vd8K",
  "key6": "3yyBAM4RLmn5juM3MbtCDnwogqj5jqjTfudLKjKY291sRPjZ3T9hCEgNEexG9RFum8zZU3SLnLX9N1EMoo7v3pTu",
  "key7": "4CCQAqbYYWZR9LR2vZUwn7RnvaRSZWD8DK3jwhCWRdy9V11B6FWQkGzzeHMwgWqUm85MKb6PTbk9JWMub1PsmyEQ",
  "key8": "3BdyrMb3n1Jef49BZRgy64eq1P4FthdbYFNr4HZeieyruF5jKc73MiXcYansE1ioWuKXjWpowmHE8wpTk2ry7QFA",
  "key9": "43iqZtBXmaEYMcKKh2pSxFyy4HTa9E9KJ1FrmdfVbiwgvEeYrJ5U3HtkxxpicU9w9ZXvdoq99sVTTD6vhLhgTKc6",
  "key10": "5G5RkgkddutQ53W3dP5rrZyse7r5JgoFjHhYv3hoy3JVaKHPF4XHUphwHp6kLAj9cJNusK8tZH8jTot5VyUH7rvB",
  "key11": "2c4oMdVWpvbR9g1gSJn4Jawit7KbFraqW1JcghkHR5Qg8u9xeLDX4SvgaYN7kEZ77TwExtQmso1g3ZDF7YkgMEtC",
  "key12": "37a9hpuj8755Zev4HWcqLGV9FA9HLRxzfqFUMTwAizygC2xV6W6Hv5kZYmjbXxjxzekfmWay4vpSpiR3CW3mMSd3",
  "key13": "5PVhJW8FUhQaUe2dHNnNmRJVuCMaX5SrAcG8GNpUcQJdy56ZNjatPNGFW4neSVTyMuuXG9fkhwMLsLkVM3FJVUAd",
  "key14": "3LjPgtZGzoYFb2E5rNCemF7SXpmY1UrdBipCjo9D3isWck5sJSj1EVLUShSjx9eLXxHaQa7zT2NApQPyAYa2Fpp1",
  "key15": "5RAoRPj1MWLJCGS6T2ag5FJ6t1wduKimfSt3qMvkVFmeFoZ4s4iedLPfLnEFR1uZRpgNiac5DvjoGuM8YauQrBpK",
  "key16": "2NNAN4SgEP397Si2gbimxYN4hGnFzHG8d3YJjgtpHXbDRByhT6LkVkF1ycLst13bpRsspUvFbXqciz627jpecsh6",
  "key17": "5pK6GazrLpgaEgMJqY87zNWddLoM4JtRoMgxt8hshYyRNAPSepGJ9ejVuWE1b2LwVXBUSZdExcArtpXCKcg8WHH6",
  "key18": "4yTFWJpkbCn4RFPkSdvAKUPEVzjNryVxX7Ly9xEPfQ5DNtfC5QcgaPHsiuSKc3ws2dkYD6cZvT5A7DEFYs3uq8xn",
  "key19": "3BcFsbPKTXWHqYtey6NavVcnMsmBp1x5MeAp3s5dkeB7RP8iUn87TiinEqyRMPfARpMWKXZfpeabs6ivVRq3tKwv",
  "key20": "5L5erQg2TXJSG3NKAUU34czPnhyRULBAHhRny4eJ5u9SVhBN2SbtiHieNenofgWCT8WEGS4WrooQmGTVpKkXM5Sa",
  "key21": "3Etx6PFNbFCLZA7ZHZVWWQDFSKmzfMgoMY2faF95Tz8GZZhU1pjWLQUSq7KAUJLE2TdfsGLfTJFvJ2VtBWNHAooj",
  "key22": "63xiVyGVSMBeKosCJr4ZdniQtT51nQZWPezwxYumHHvzSEsX7GyitSQoKKG8NgJfyouyLidQy5un6smbKPFoX9tk",
  "key23": "3WaCJWrncjU8UsxtkB3qsDwYS1Vty5pu1aD7zSJSsLH3QfFhjQg4yLM1AwMCU4ZvbqY9cMfMmAACNWvosxLAFiHf",
  "key24": "3gLB3zj2rzrew8WkhpdMC9i3QJYvDyYVCsgjU3K5sNoZv7Ru84ovkX3hfdi2HWnkrETxYnTf6gCf77KfPypdaH2G",
  "key25": "5Z1yQxhovHoAdVmcpgBmnJtXU37LTxDFYUFqQvqMKop1tqCeQqttH7ckZyJM3K2hz92J4bsaVVSp36mLcmRNjZts",
  "key26": "2rMNQeibSzDahpXzavtGbLdkumXjUyEpFLb9RLosg85E9Dehdgy1RQ2duXDGkco22vS5x67AveYvxvTNsZRDpEdg",
  "key27": "J5CGSeNh2zXHVedL6bARLVh8RSc91fQimHwJphK6qRHYz42gqXonEUJtbNDUQDK8A12Gn7Sg2M1ZSMwswwaKcti",
  "key28": "3v4bNwzms5jXjk6qBuYNkLvqgDoCvuNP1yDWqLXQAYjExMY7T8p4vcUotKvFrTkXuNUY7eRBuxFnJWbFgKM2nk8m",
  "key29": "zQRahYA8yYu58AagocZCfrChp26ntLyc9Y1H3M1qXqy2dyfTkDFqibMbRuy3agymHyx2y1rkVnLCG4sCrTMS91w",
  "key30": "67RsR4WocDt5Nxp9nZknKExNpYqrvyj8XnGPCHkXzdUF4znZYhnD33BfWdn6rXuQhGagP5QpepxptEjyTphsmEU9",
  "key31": "36ybcgd9DTEdAhD5vnpZ952boDFbn4J3MfAoip5dUbPi3f4GvzyJL1pkHTKxw1eF9bvhYnEpr8iPDfCei688nntP"
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
