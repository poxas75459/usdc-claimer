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
    "3AJbWZHQLs1ye194C6Vq2pjQvZK5xKTD4rdEMw6pSeTZ11qiCy27vMk11bPSkfAk3qD1AqMjP1trefvbCixqcGsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sEMJSyDi6SxsmoQ3G6kcUxu9AwcEgYcc7J45TokbjujycqQnSHX11ri8c7rkv8gbqHnAd4PQVHoA6UnMysEQfHn",
  "key1": "5NJDPF26NbARnqQW77pj1FLYexWCK47fh1UnaxUdkYjd95vfmSAzMWT5Jxm1y6JuNMqR1MnrznBNnCxpw2uvDoBY",
  "key2": "2DQEctG3UWBvutbcugsKSySmkbNTNSwBcM8Gnr8pkm8e1as1Kc17i7Fj2XTabzNcD7Wg4G68jo55vQXwcTMuHie4",
  "key3": "2CLNxYpDbQAmWiH2NiRzdU6KRuvTvJZyGrXGGUzRMFFs84TSWgAbbxsfsK7P8b9GqYsx9HqMtJ8uoxmRwvJFMJzT",
  "key4": "38MMXj9azsE4ghnFyVpihzS7QQXy23yHQb8qysumwd9mrHnrrFeNHo3UXWr6PS3CNubhPBaTD6SoBmYVNTQ937Ke",
  "key5": "4Anu4Mfm8ciTvbSHHEf6KDbHcwyh9Tm9GQiB42bcfU9FjKuMrzjSKoYnm2c6D5jUpvB7wKsp4HVtjiLsj4yxXREm",
  "key6": "46fDDHcAD8bWown3Gp1zVfpCykYb11Te5MyWaYabVXwvxFtkikuSYe8rc59R1qoN5ApxviT4yh6R4CS6q6GMgkVb",
  "key7": "2GxPhAXueyCTeU1PP2BUznkpZuVymCxoVA1tixwBWxZRUwkATxMKdnPDf6KSNq8WJpLeMUgsPQBidsh3Y6cUoqVX",
  "key8": "4jYEyvDJL5g3ZeNxbMepxp7sumFQUBUPWQtV8BWfDoA6gqrpch76oFZTTSYa7WFCyjhvEaLtWgAF5SjVqEfTBcNN",
  "key9": "5oj44uvfNwwmkVrmtFd7Lx3kRjg2k3WFRvMFarcKFiDWgkxWtbDyig2G4WZrNpmX7w8tqUoaudriyBbD2X5mJEF4",
  "key10": "2sWNPdHoo2LbLDuR51cEKdL4K2wALvtw382KQdcMPYHsjT3j5DGq7jqBXx6C1LVXieueF3YQdCRGJ5ZiJc4aW2zg",
  "key11": "34mrjJY32DHiQMEKzxHSeVQGY4tccxG6byNZt8DnLqqDfBP8PzXfPc5wke5KpHzDURvUL6QjRMh8KVKkMXqJf4Du",
  "key12": "2tFBLZ7K2roJv7MnURFSXkJqmNb16z4KPkivfszoVvkoLWEufbdVTVx84rH1CBqCc1m4xR2GhNH5rrgiyXFKWkJ6",
  "key13": "2y4ounY986D4GKQX5Luq52MA58mddHdD2Tb8WxPNet4JDHW6gFcQ2sx91xhVMB98fk5jwHy43tyaFXgrbb9QHqFM",
  "key14": "N4tyrHh1vEZocg1MiPbuJx34BogZf5k3WoHVwDMzsgPYKw55qokRApXvmx6DSJxkL8PLPtci4M4LhDdprtXwGhJ",
  "key15": "Ca5ijt3Ps6tAqBbUB1j75DATj4U21DS9Y6piiMqoiPp1J7zRijMuvohCtjiQbJkcyuUfUTjKcLSBWsZsQjoAWQF",
  "key16": "5gU5vEKy4cYK8k8eNnqLhrHXDptqGwT1Yakx5WaW1jqzA13VP37rUFiUdpxFn4vZedzrxHHhbXzrFzAwcJMiP5KD",
  "key17": "QWe546Uev2Uht6rTFNKfNo8GZTYkdFmfW9Tw9f5t85kV6Vvsg7fH4M5G5Cv1sMYYTR6V1awVS1sZyzZfH2MUPan",
  "key18": "4Y8SicQjV5gXiWSwPx9Poy3peV8MZWE27c6GXsPSwzN2zSZy8Ae4daN84297scy7Q1rh2pRVzTsbjsDujuGV8L5P",
  "key19": "5LKG4QTMqDF4ntPuqv6oEBCscXVCuBDF4AuxfVSLCGRd4xS8qJnFiNzKhVvYbK9GW8EgyuRhS5SorfqkWAswaSEK",
  "key20": "26Ba7BtfVbhcGmxvJ39HhUt2UTG4eUBNj1MdjgbjRZBbYN8Jxob3auSnjNbZngPTGidurEr5SQq85Y3ugZ9YNnYX",
  "key21": "43SA47MysoCNuTpFosVekZk9m67Jh8TRH2FfdvsFLqNRA4pEzW5JLfm2frvCzTjAfb8YrAL9L2bnf9tbAcjn7gnK",
  "key22": "5H9ynDsHDk749ECwdJ154qNqB5ZrmehJeZrGvCXMmNJHZfPh1qKXtnn81nxZbB1ryqSPiHqDyJuvyBA4WM8Dk4fh",
  "key23": "5hd6sGrDTq91C55VbKnDdijY9tECNiSb42frbgPEtqJNz1bN8WQuGyUSFzFK855gSnukchYfyMdGQCZoaNXvZwHM",
  "key24": "3J6AojX3qV8DUC6WPRUiJ4UB3ivDHeruxuqBJ945uGwdNwUtDcmWLeKpUtQygYcWwLxXqNNwSjWP6xJgWQs8PjoS",
  "key25": "5nCBaqrWCLYmbEAmktwQ62Q7JS4DgNsh87bsmKAdeeZnXe6wDMw4QR75GVuXgQCkKGBdwnCBknKMRjUhk385FrH8",
  "key26": "4gToMbPQhqo7N3VVFf6PdDWLbHsbYDPyN6yeJza84jm4ECKg8TntKY3xFVt2a1MEH9UKYiGGKPJLaVMmppouq1Xf",
  "key27": "4wpkjgZR2m9FPQEJM23dznXgvAWzWjAk6HVpM1Z6fm6ckVdrsuxaBPzc6XzfGJJSBXirCjokEyP5x5BoAGFuz8uM",
  "key28": "BiQT1i5AbYvQgeH9Cmaw4knVmnLYJSiWZcroynWdn6rNHrfZ18UscsEXLNxBTjG3f1s28TjMYWHubvSfTbUJhmE",
  "key29": "4RkYQKnJaTn2Po77McYzs5Kio4NZJ54xZWgYRqXibkbGdUEA3foaQYwYzypMBoWAXD8N9PVic5hvRLo6iR37E8v8",
  "key30": "5Fzcre4GuJFLBTXKP5VAydXTGAmCanh7j5URc6QwpHA2VcnGgC9Sg7EAjrEUzRPHHiXDnvAbnVcn5S8e5Saa78nj",
  "key31": "4pDZJPH7zuJMXxXfqTmhStx1qitAd3iLZjTtZFwMd8TzhrRQ1cW13J9sU4xXLZM1mBx1ZU16z75TLTqwHXG1QtoA",
  "key32": "38LN9QawkRctoUF6J3GPRdWNsFVWeUEvagCHLowgztgaBKiTuX8cQz4TeimKnFBPwdabUyh9YMTZHP7VgiYCiaV7",
  "key33": "2qjc649NHP9xDpcxC1DsKyH8rRQCiCtYu4jMva25eJuycH28Jx4wso1jFHJNxToFv9xX8pyhbzwCMSYjeWzvNGVA",
  "key34": "QxD4bUc9jVFgkY3i9RPRexhQtoD8wvjtqRQGzhfLFvtGP2wrVsXDrFjfSWvJ1iEdGxciJVzzFAg62KiyqxpH3Nv",
  "key35": "65C1FEdXsfVb83WfMz6SpoJfTiCGRiGJ8N1mT5MfhfMNngc2ef3qRZHZf6VVRwQ3j3TQPxQUJA2pxyWxY1UKGr9h",
  "key36": "5FNxqD6KLALZknU4WtMTYJdgkmfpxjfbXT6Faox5nJFizUQXSCjvoNd6Pin7VDA9CUzVgcRjwpfPkJaeSj6186mJ",
  "key37": "4gkGmiWKrxRHTcogBweVTjPTnaWP4GmS1Q1fMBsPXgbaYvpc4Gc1mYScZRpoLFhkiMSiPwQLYxqouLnToU2Qtf8a",
  "key38": "4FmVyRYkhxpMGgF4hQrUC1rQYRieDQhSGiTQKuCxiJajmJcmnmJbySqyYidxFqEmJJRbSMpXfNHwH321Uwi3qxRe",
  "key39": "3AZyVV1ssgwxTnkpuSSRmpSsmYCGVX9p7ntrt7TCkrm59jZcnwHsaMFGT4bUSGmXxi9P7JoQcB8XpG2tPLwuQdYR",
  "key40": "2pqscBMxnRT8GSFbgfAFs4QNHEsebMiJ7fhrC9f3RWjB4FbHHGhoSKpHgK4jj4HFJDQ1TCrNSW4yBjE6NMpyXhcM",
  "key41": "ifudrxnbNtAhXUcie3dRHyiAJzfEeWsP4yKQqMXqvqQ45BspePf9E1EfwpGaFeFyW9Q5zLzEvSqa2h7mmx7jN2B",
  "key42": "3RGwbzVho4j62rGcnXbLfF2UMRjsDaVQUHELxHL7EfvibcmdDYBgN6RxyAKV6uqLt3SSV4CZnacWvLvRJJK7w3tK",
  "key43": "4NiFprLY725LBz5qUM4chfndwJ8ekt5mSRCaLywLfNomuAwGzBRDRST2jKv8icC365d9KEuc4mpNxtVumYPQFnSZ",
  "key44": "5La9U8niGPVLhPj1fgq1wLrgsF2rBzea5NzDtQVT4EZRT3veSuUeBECWwLgEZZmQi8SML6FA9oYN4MtzbdDmXtMx",
  "key45": "2mVDFaVxnPTvGAsvvXCwFu7rb1UEcXQV1SwMm7SSLZBZKxxkHdGWLU2Vs6Y6FPKv1T5bcEVFa86TFrv4XP5HPB6V"
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
