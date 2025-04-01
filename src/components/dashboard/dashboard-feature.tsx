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
    "4AzN18gqRC92vNLyoKGbbPV6eyxA1EJHg1tJfKFDFC3nPi3SN2nCg2dcMt5RXEhp5a6XfDw8NoZ7vgwYWtsEPzuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iL1u5RDMgvfv6XPbLJ9dd5qrzPgyzZNkcFHjBBSzE7E56BPPexBzsktUm8zWE3JJKD8Sog5zTrkTJ9uTh6h11A6",
  "key1": "zVCpr7QUb7Lr4cTCo7uHjNSEGejX2TAyS5E675cCHPW5cB2SQioyYC5Z9uZayi2qZC1UmP38RXPkgn9FcFMCXsr",
  "key2": "5nvFj4ayePD9FnoaMafRHgDCY1Vyh7wAwaUCwRrta6hn3obacdN4o54tKwAYiEyugti6asDbFbZFL51j38pkk8WG",
  "key3": "2NRW7VDLxunYPifJcAGzGXQRBjwoYyB6qUSFtSFFDhvj8fpefY7p9NhRmuchF6V7CeZ3dHzpY4SRvKxZ2wKXscJz",
  "key4": "5LgkvoBmTpnnT4LmTAu3AGmEnvWwRRYMrThgmCjRCkGTbdrik96ySwvtpCBTGQFwrggtabxcSSFFndJ2SsAvECQ2",
  "key5": "4DVXaDeXG8McZKVjB76dPLfSkgZjNJn6soRSMS5kbUwSgc4r6HVzANYaqdreuV7ds3uAy51DXZZTEU5adh7TvYRL",
  "key6": "2QQByJHhgC8jb4CsJ7Bm6EPixtanKHtvGpWeA4wN3hMxJSfXDPvSANVhneFN7w6UpxSNZvDp59q1ekJeAtyQMuhB",
  "key7": "5zQaQvGEkB6tEgCNovmgmhnyCrrbZT8JCfshRk2aYQz9ZbzgNqjCGbSFDTJgsTWyMmAxRFzRYGUeGHJ3v7AcimKu",
  "key8": "3F3RNy3KfBLCsHcBeEvmtD3zxrMzAUS1TADwALnjALtSb2jRSL5VTyozYcFKeN2PMzBJKANj9ZvmAZmZCuKcK15t",
  "key9": "5oXQbLPGHq9QvjscaKJecpN4sHVNiHCUf5RTu8S2hBtviLVdWTd6xy3t4iZrsccAu6FCQZUBcd6h9nKvQcgk2dpk",
  "key10": "2TJgGSw6uGLF1kuKqB1PUXvvhWJeZob1AiyPZMVxAacox6bTZkQ1AGKXUBdGhGyE1MTnhv8StnkcebMzYYguEdq5",
  "key11": "2tdtSTiyYLzL397H3y8q9GMgz6LCp7JznRBHyvvHoSeUYGNZRtp9Uv6YgNL9PWbWo2Kz7kAz8eCoi5q3pALdq8z4",
  "key12": "66zHTqT6vKYepYgqKhd4yGsYfBwAaqaE2aT4KmG9c4Bs2wiMrSegmfcEbxKebvbeeS1fauQHxh1LLejdEzmYeK6f",
  "key13": "DJsJf2QsadVNo7tQGMtPAK5sbWRMVYZBTFpVm8WCqmfGsyicPntEXDb8N43skRoucpzpsHYih29f53XwDwHPW97",
  "key14": "2p27DGTopjToPMtmg2vSu9iHbHL3z1ERDvZQjFeJqno5zC54oRh3CefuF8NHQX4HBFapQViY1eSb67tD6GJTQUeP",
  "key15": "2BuGXoKHsoRW6HzAUoLYo5wgZtfWBy3FJR5USUbYm5hGvvvstmszvMGnj5wKBGenYduXFwX3gb57AdAArvpUVkJe",
  "key16": "4Pf3HuhhfpDfcwuSvCq8st2EhYh9edb92DZGnPomMZYjhH4H7XWEa5Rk9ANpBpnaGc1PjRJD7J6eovcck3TjhA2W",
  "key17": "2VqwHvQvGrPf2a4XFcYb6hx4FHxbbyz6vTVhYU1o7Sy6jbkkK2RwySUXrGVE2zb73cSbB8iVta1rzNedAM6QMepZ",
  "key18": "23r4yMjrSQTUkvYhANqKJbk5dYXpuM9y8eSq6GPgdNtPio5ipjeS7kcj9czK3VD7sLs43vZLpTTP7b4hDCa2quvt",
  "key19": "2XgyoD4L7qVi2WzuFCDC8Mfk9mv9vKonjnR1T7fdvvbRFDCPsdcMKLbbR6aJ4Y9z4Cy35LELsEjLgD7bxgYK6kSD",
  "key20": "4ZHD4Ha5n9VP5PFzebUGVdvAFL1XgKfrWQosNrLvbdbdghg36ajoeiVR7veQs9nNv9orTjmwBZCNtujZPr34yb84",
  "key21": "4AeDtiVfhWbc81DKrTS6r3qaAJh4arGLAEThqb8AZMPZKYL74DJUFGV81uoaesEMwwa5xUKLCwqemQdg2yEoTLyG",
  "key22": "4pP3faisNMzcsGxdzyricjznnwGEQKNuqsHXc563dJWibKN1uKM7rN9ZVr8qp7paeHtkv8HMLPxYaeMu5d96NNpp",
  "key23": "4Ag3DothS2N6nkafFWoiDMwapkVfJtXojJ9ic26t8WozH7ZhYLCFLYzvBEsLf4xRkuC2FJ5dw9nKDcSMqz1K8Nzj",
  "key24": "35obVrjPCoHpNzWF5JA3G1SmT3jBRRA2yXbg9kMKqk2F7JfoL2dkQwCQAtPEe6MJfz1TCDNM6Apy6rgqog7JqdSq",
  "key25": "ZRotxQJkbWcjF7hYRsye8kK3uR2mgo131x4MsnRHq1TDbSp8gY1FsCrbVLNwrhYkXCdPg2dCrw4VgVuJC6FEHTr",
  "key26": "JQGpdnsqujquQLKV54X5bSNFYzmEp8fyTsRSYk8k45Dx3azWC6QXcXVxvUYQqPthRvNnLYq4a9HwB4eXYPcFa16",
  "key27": "26aDnupE2oiMikbnDn9ffZExjHvtWr9VKisn832a633ftmHkKstX8KeX1wzA5DdEVDXZ3YLZHLeaB65SuMFqQ2vH",
  "key28": "4HFH4oDgwFxZjHGZrFu3e7PVVFP1VA3cQcZvPy6X4wVmvssWqJ25uZ92jdLAEjjxyjT7brhVTBrrqMjtTHNsdPPk",
  "key29": "3jvudr9U3wAstYwBEktz5qLSLm6puuYoN2q7Yn639hN22GPke59tygS75yjo91PpTtwrzA5h7UTyeJgghtpBqAPX",
  "key30": "57AAXFkC8LSVTsVxyZiBSyyXb7FjNxTrCUBQYdpZRRHufup58kBgQVhBpJTN5ZhVQc6cL9sdYbSzD9YmnAd3DK2u",
  "key31": "37sWj7D35PNixgm43sAWMPxc2uahAX2wBdFMyuXrYL3qf4JnqX98UQZLydQq4HujWUReskzNReaYpHLTJHn95Jbv",
  "key32": "3LULwo6F53ZmszZUQN3uhWGUURn6T5mYfKDYF5CvuisDdocqSpZqZjQG8Fg9wTuKdYzzsJNKmUr7A1UTr724SvJ1",
  "key33": "3s2W3ohp9YvyquDQyMr26xF5N5FaMCv6y1QcPL4SCGnWcF5K55xDrqziKdvJ5sR98xaDpcUNt65mKcYB7fJPVFAx"
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
