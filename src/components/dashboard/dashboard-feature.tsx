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
    "2hssgQbwKJSFw3KzzFzGPVnirLBunypm6BeF71nKuW2zGDtqDVib7eL7BaN8dqNDWLafm6xkd59vqcvjEA8DhmEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJYuWtS99QKDCASkERs3xr1mM8xbjLTVbXRNmhTAZUoHhS1ABwmZcXvAZmQSicH7p8Jp6XS3aha81UfeKjnQYH9",
  "key1": "4ttK4ojbZAzjWLmSntr1uNogDt1uxWd2GZuyzAXghxKMq32WgDuY2RWM2suwkmMxuiKs6p3GHwRzHgF86iYDpUdv",
  "key2": "2F4VmLS7zJd2vkrodBiCKrhTy3d2fdApK5dvCFibTU5rCrit3MQZgHTfXHE5QuJmfixVe3ps3ZsJ9PNtr5DHBCK6",
  "key3": "5NnfNosrre2hsdo53DMbxvrUtanKrKvnLLGJzgAyuw3ZC44gWkMQ1NsPkZNLHvg14FW4jmntuAeAHvZbzXaxeu19",
  "key4": "4iXR4nEcofPCGgdGojq5xGCP2V4Hd87ui8xHHgbHFzMtt2s2zdE79zDqj7sQpVdWxWUr6483wHQiabfprteHPcEN",
  "key5": "5wjL2pB5bZTgU72XjwNiuHiXVn7GnGiNfjZkC2k5efDBJkTLxyJ1LwBvXi2ThuFMgErztQMgRoKyCrLxmUVnEDA1",
  "key6": "DixzJqpsXaAt4ahxPfex4XYZmYpg1NP4qsJ5QcRbbe7MMxtoEMEakbUZ4hzbhiiEi6L6P3Tk2S29igN5w6GHVcK",
  "key7": "5ByJ3mkawdV9jhZLFeVupsLmLRhELzmQrXvPr62u11ew6NAJHSrSE118vFu2GeYjKUaaDQcXtJxnChAPSQNafHZA",
  "key8": "48MmETRZYNtAatgQtrJJbK9fL6Ffp6dEX3wJ3Gz7fBp5beEqq9SXua1pvdafYxT8GDckKwriQYPZqhnv1bohZFHa",
  "key9": "d9oAmAX2rDsUZTcrhgHmhhWs4eW7vpfAw4ANygWZ3JYZFHSShMaySoGvsR8psjU48pbGcUbhHkAQ2qEdD6JmdN5",
  "key10": "2q5vwos3mxxtPTkzxbrEuVhUeuZa7XXzUXknskfpmJwzct5AHQayNxHgoz9DvqfpE4N4wpVsMx6q5mmhDU5eqUrM",
  "key11": "2cQejcFVjmX2581GmnFAUtWZN1fNxCUeQSwJWRcNuoaq4zYFc9Zg5KntnKKBmNE2GgGmDMzMtMxQz8bgA8vMUvtV",
  "key12": "2vz4g9dkrNKYCnRp1vf9CYkJo3BjK53DQZZtn9vj2uD4VadGPk5MVNdd9NcKxcWcEFZyJGhziMTbnCjhCgbjpSF9",
  "key13": "38A3rVKZsKbTBFDaLRRZU2LMo5QxyMYoGV8wgPco94gE8fcx31R2mxF3UUQ2fRXNGVTeDnaZC7j27ZkUrE4HBuvh",
  "key14": "wjj1LAvU9MV8as2rEdp83qPsuSwqr715vAZv3ABNFuwoxzhfwabxF8raon3dryB9FcsMDx5ZySVvUoknjYGeyMt",
  "key15": "iY8W8f4oTd3Fi84zgXi9RxDc6dhce2cMM1La9WzwT4FjK3tBwb94NZokXmFJL7AihbTgzn874YwpDNUpTDg9cU3",
  "key16": "35Dcn5PHHCMkVKLpc5rs2Fyf7BaUVLF7JE3sFmMCkHogqAfQT4ApTqL4VPSprX2n4ZNhbHnBeCuiB9qJULkDh76m",
  "key17": "5xPnPcZ4fzN2rJFFqiJzpWxYaGy78ACNiyQvEYKARGpJFhpyoT6UtKTxcLWV6rYf3cgmFVT2z2Rq7Fj4cE3bHqkS",
  "key18": "5iFwizw1XfhM2A48DwkKBAUBapnPhZ3kEuYnHWq6faBD53AxME2fvBSpqKFyX5tYNwPoE9HRvLNkbBPuoqj8vMQy",
  "key19": "4ueAMSWnsz1Cb67QzxPVPwe5o7HkNzuwiEGy2VVsqUDDAKJMghCpqKSmeqwHykhMrgq8w1ZQq3wYJGeFaWvjisDK",
  "key20": "5suEK1QAoD2ecRzunwZQ2VFi6BrYVMRAVDPFx4opNbuFHGkDiZqsgCsa84oFLvUysC4mCKBmdo3hmdAEHFqzxdU8",
  "key21": "2uDwxv6ftFBDiHMVDzuYia34kRH3Jj3BaSDn5CuD5gD54q9A8C56Gc8NjQetgtTeRCYvpMT9xsHrFWmCUGZVX2HU",
  "key22": "5cMnxL7bTfNHpLWYGNrisCZjtPDGATBvebGMrHH3kLxNwvADpTgqFxynjBnMLmHQAkaCLvBaSaA1XLeDEaCUdrF5",
  "key23": "3xZR5ADgwj21rbZbovAj6eva3r4Ep7Qb5VanfwAnWtT5jEXffedgeMSnKx2J1zsBnafHfyrqT4fwWuXwmP5MjQww",
  "key24": "2J6MUaPejvQKVncWfzBkC8cBq37zC1GEADp3uHu5YgxufrGxLGnPgGWwGvP5r5P3JnQHLtx5kvt366B89Fu8AgbB",
  "key25": "26H1AQ9WbDiYk5ZC9XojTSZw9GALzScg1ECfnGJjJicSpoKmwuP2sNxA4DQqXnwsmrqkdPsrrWzF2QPoKyGF6RN7",
  "key26": "ENJtfMvuK8Dc51oyZag4BHHwW2RKUymAjZpBKKwptFjtBNNrB93aDpCPbb2uiYyaYpcuYA5Bzre5aZgc38eaPjV",
  "key27": "4WWdD5EEbnLz7N9dDpmjch5JHypGceg4x57ffHhZvLSH4Vd5ZKawrhiTKJ61sdjEc9Mds9VaDBM5ZAP7MaxRU8Rz",
  "key28": "3fibzg4d57TTRQRvm8iZjGJa4rjgeukwJvdFoyK2SNHL6ygaUxoUG6S56rLAuNjLETfNbqwSKzC23xkG8s3vyfTi",
  "key29": "49pv62LaZrWM9HAMEByDtJDsrBcm7RtezBQVKhkvw5tnz5r83dwFsYCJqGdjW76hwfuuUGQ59YcQB3HcxDgDyWrB",
  "key30": "47Z4orgoeC4y713gJG5LfGWgQ6unepDFQKSEQdNS4QhxCwoxheHWFC91kjMskqeFyjoLdS55UFmiCicg5y1vbkxx",
  "key31": "5wb42sVGen5ccuP3BGKJaYAc4Tocu1P2irtUUDSWHZkvz7Cpfq7up5iNL63aNVHkouwF6V4HxPciePk7Z3Ve6aFv",
  "key32": "6m1qAvoqiVyzwS5hKoTfboQ9bCstauQkfzUX3V93GBhnPDDBQC6rB5sUCPkMxw5QTKyZ9a7RRWE8uXQHQmJaJvA",
  "key33": "4QysxVY52DVQph6e58SRhUMmPfHWUNj2JxXqzL8ikHDPYoDWVGx6tAbpayrNTk5sD5mtMmBjdz4wDYLmiSPkgdyW",
  "key34": "3CMGY2nPc2iYyaRDM8SRy3ZFKstQQGXvoZ3cqcQtpS91RPQKot3FstD5K6ymdfNF6wHmL8kEPJ4Pcvqgu1CeeHUC",
  "key35": "3AHmL31v8Ub3pqwECUpsrDkvVKTDNTu9EcxcRZSfhFpiPmW77uK22Eje3TTmSHMEX6U8kh3iFiJh9Fvh2Tsy6TK6",
  "key36": "63BgKFai5aMmTo27m5zvifFzAu1Hj579X4zt2hWAMdas7459WFWhKdav9ijB2b32zfunmx5CnJtfRMWjiovQEzuy"
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
