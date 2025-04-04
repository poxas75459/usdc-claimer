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
    "wTHbYdfL4jnSUgrgev12xPPsGocG9uyUNU8saS7iGGpj9HGs1hZw8HYYvwfv9VXgYqXGgwqoX6Vdmwr6RFtzqfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CSwERaH7kYJRd6R4itkQ4hsgCnpdzXtv2c5CuNJHJqAXir1yCzwnLjm4Qcb1GA1zs6qBbA7JJKd8Z8Q9H9XWX5n",
  "key1": "3HdiKN38cuwCrcd4WqnSkqujctijpgzSK12PWZgeCSLkbA1qPqLGQCYe3Drqbu2F3sfBfkgvUYeSFDxaU3RULxMc",
  "key2": "5dpj7YGgFjfd7HL3aHP4uNCSvP8dxRYTFwSVdCHdCDRM8CeRHvmnY6hPoR3Yx3gsBMsE9upGnMfPxNFbLiZr6NMi",
  "key3": "3DM1qq7qrSYB7Fzi9n3kJ47hV6uHVpNMSychPTWfPCmkGtSYvmAW2FTdP61CMN1PUpNKtrgo6aq6BkBrqdEs1iLX",
  "key4": "5XVSGyY7qcaiME9P5q8uK9YUKbAWMeJhoCFWohBFqah1NnJ6dWPdf2PstXk4YuhnEx232XH6WkftxpSKW6Er3oTJ",
  "key5": "26DS68m51WfyEDfZDoAhcHBMP3mgZh1H9ys4VRaNEVsG6HJhykon3cxrCwhs5GERsMQ98kHbXQEvxA3KpjyQXndz",
  "key6": "5NJdzD4J1CJm4CS4JqKVTLRiZZBgY3KoQtePPaj7sRy9HLqZR3PY5NJ3p7PdiSRENC4gMouTibpLjSnvgo16qHF3",
  "key7": "mQGdvNaMNmaog7jEw3MP6rF5A9FYaD6CGMsdU6YSqzHVuKoDfSAzpiyeZRL2fZLmN2QJwGD4aYqWZv4kkcV2Z96",
  "key8": "4gnRbMPQzo9sovKpZkwMX2u2T85v9gmjV5wRQhbtFJ27Kx3L5TwupvAx5UwEttHo1cKVipECVz2w9z34EJmet4zt",
  "key9": "314P2eQL54w4UJS7HKoYypiRXZP9SZjiFsKPqhsPFkMPDUtzgM49rhtc62VjGoXGAfJvTzEGcykBoKM9t68Tu3TZ",
  "key10": "3FvbhYegbMgZ9mxoVZ9dxdrgL6Koxn91qtWo4sWiYedgvmZQd65mtSMCpEeuu99KPqN3HAfWMZEZLki9Neewmxzs",
  "key11": "58QTRWt3EHdugTLTAjroYRHpgwrwn9s8uZx5Xvt3p1uST9tcLWFSkgEeDgUe8Avik9Us5onysidLJ4qb2wkgQqfE",
  "key12": "p6zp8SHuJ93famUH88UnZTwP6JW98qZe1U1epMUZzzioHQzJNxodkVaCkaZQcwmGrc93VhDutxjajtWcnATvjtP",
  "key13": "3uEfU8S7a71AEyna9zp1yJpD9rh4WtbYq4f7TPMfd1TCRZrJTS2Da41hjrGZ5fxqNkzcaoAzDz6tD93SnSviNrkh",
  "key14": "4jgomjCNY6vSwhHHXC6CA9m5wG4YromS9EghaPbSFbUyybTsRuKLGrnJv29BbS7redxLAPDeD9nifXk5Ft5RF9cr",
  "key15": "461kKYndc5fc1STuWqmeEA6BnYUbbP7CDERHBqZsTEDMn26Lfse7rdqmcybBfwqFUdKk5eJpgp16DfRZKDoFHjDt",
  "key16": "4S1nquMP4mUn9nVd71af5U9EejjDm7GugGjCwF57s7Wp1t6sybHyYvUGQqTpBFy8LJW4mwrsPxR1MkWPnzewTqYT",
  "key17": "phiKe36mFxgeM7BqedW11r1mmjnwVPuYh8yT3kSEyHPeTT3gBPFYRCeNgb1ZJAaT5dTrjcNzAFm7LGPq4kZ3ie7",
  "key18": "2f2E2o4QjfR6243SoUnoTu91jkdwd47b3P5LRJ9wvLxaW8V1948X3NutppKcXm4cCWXiEwrzdYsydYRvRBEu4yBi",
  "key19": "2U9BqtMhpTjVh29dk1HGfMaxuFo3e7itJseKoNCNrT2pKGGPdvVNQN8UZpjToBmmK1BA6VGeZfCK5gtYhJBWarER",
  "key20": "UvPUYcJrFtqNtSz8YLxaEwa494t2J9GqhK1aLhEuQm45XNN1vgE76wwqVLmkvRGPJ7F1TNpcP1WP5vwKgcDG44V",
  "key21": "UtekeT4HDp8a8MozMVX3TYNvJu3SCm2Ajz59dVhapRmqxVP5ys7LnWjMkWqgzFyN4WSh5bEwGXfxuYK6mGU7XrH",
  "key22": "4RrefgawWQjaTLgxDUs3vtJAKbnVbbcbW2tdks1srq9B4KQnYqVJNuCiLTCCa4vZ6qUf4S4RnHA2WkCoUjBM6XtS",
  "key23": "HjvXhFaFkam27g8tyD3zxzJbQ4q6aEEnFHPFqjBi3FiUNtb4bNrVAHhafjZx8CctoHRauVrffcfAbihuL5z2Ar2",
  "key24": "42w2qTVTFWhVdZvr9bjMyNqfrNubJXbjkcHKvXNrjH6rLNxESaNto5t4icu2ux1Lbax8HLE4Qtkos5Gg5YhoeP2u",
  "key25": "5LQcGnHChSCmqBvGjMAJ269K5dW3VUqTQWghEibA5otAp6suAFwhVXZvu1up9siGKstQRwkRHpgyoueeU1z4WZDQ",
  "key26": "3zeLBKtFuNsgizSjGtUY8idECqJrMSusvSdFr9NXfP2fe3NhWECZakZQhazuuG8tYjXnfxbeYGjXjpoKKs7aCavf",
  "key27": "3f2ctRmbLK76t7TTNJQVKh69wYAJ91bNYyMSjDqttTgHZ1gJWAxE5edpDmPnvhDJjGAQQTFZY5nvyADV91p1iAtX",
  "key28": "34zQENnogi9nqaVUUkp98Mf6cbdwqDQb6GNo422mgMxNxAivCc3UwBZJYVxysb5ayiWpjRUXgSFweFZB18rsDHAX",
  "key29": "2qJk7Nw7hoPdmioxJepZh5fQ2fGMXDii6DCY9xsqZ3PbQPMRXMT3xs3nvNdn1FW1jK7Vf4Vyeu2ZpucGe1bWM2XK",
  "key30": "55Lf39c5WThHQ9XJQNsxuAzoLXS6rvzwaJS5S8wqZ2CTvhJA3sD4MiF76gLMDajo5j5kj2SmA6j4VaAzoet6HGL8",
  "key31": "2KAZtyDWsFwkjVYEhfUiD2gSXGDxMfebSWAc9k4Sdb5MVMUBYGpVNSzF3oCdEbyYduSgS7dBrmnmVYSMJViQ3Qvu",
  "key32": "bFbhXfM31edTtxcpqY8YPs4YKT6MNmLqVr7HNhjvVshB9GjL1k2Mm9sCubYw5LqJxvSUaBPTL4ftDh4w1vA3abF",
  "key33": "3H1SkLV1Wr2sdmpteMSm4YzABXQLoyALfGsVy6xahdgkRFjvr8Si3vg4BE61MJKVPD4sKDunB8Pu8QLfdFWRed7s",
  "key34": "4oWzwYaiuWcH1h9FE7tZRa3ZXK4KUVKm6DYMzggZbbAZ4BxzhT1pvYvP7wcjKUx9NshBsfKcKMmfVBVJjM4H62Km",
  "key35": "4vUZDkzhjg61TojtHvAg3Gn5FeUsGMdQtUU9bhxt9wRY9gidQ9BhWqA54LgDTD6ckwZFK6E4yhKHtQfg2P4eELTY",
  "key36": "5h779VfiG5vaVPzrmcxNtmu2ukEDHJRagzKPJWToCt3MoUzXQEPoAgHskK8GZQau58ayXjWTdmpgrPYyZGxfZyMM",
  "key37": "bG5JAaefMw2TtzQykDkzoWqrF4TyKmRcnk376iG3J2aNqpmU92CvmF9PBbriUvkYtTwqKM4GGmUb7ytgYmrYwMY",
  "key38": "4Q2tPJ5qUWrcHFtJK7W5y8j4Y2U3rFWPRnNEZ5KFJqBsuaALSWet98UUiVG9TViLu7Ma1o54j6QecATpn95mHSFX",
  "key39": "3UY4SeRRTF5x25kWgTxnhjVXXYVUUyBBkoGELj66GxeGrc6vVDkvgFV5DoKSRbhuGu1peDGiLa6WwerBkTUR2s7g",
  "key40": "53n8pPsCyU8cGYsh9iD7vC3cfMuwi5gYVJUWPJdbWc9eYsa5nmSuHo4xscbWnTmvyJcdXjoeFjiP6TqftUqnMRPF",
  "key41": "32U5MeKdxpze5R2N2FHoQi6qLU8CQUaq8AkVFJJ4ZTQ9od1Gba9DFd5f6gZSZfGYbfDTEuEDQ6GtAKTYkcKB9VLj",
  "key42": "UmTd1hMZrobstAjLmkAn5buKgCQSebJpoTpH57EM9QhWCW48G3Aa3kaHyhSV6F6dHS9CGWVV9BEvyqwfRBevNTJ",
  "key43": "2Eupm4wAMvkchbae5uNu2qtBpB3a5HWtXfmQUKthPcSXkQLBv4GHVDKT1StQZfoJa76BzdcprkBQ3HRM1DUQJZoy",
  "key44": "2iFyrRyyut766thNgfgoTAP2TjLdtg4wdDeWMKLjpBjceBwwvTrQq45S3s4Gp4P43GoCwNSycX1eeZ68Tc4H7CpL",
  "key45": "3XBtifub49J9yYMSwvTzooKQuygBAnYqPE8rK7FtD2ej2mBrRiA7k5JoF7ZZBxvw4mfQEFZWLayRjX3boeCSAZBR",
  "key46": "38XBT3P9QQh8Pnmv4jGbJZQnQvk7XgW54pcREUVJBjEBv1QZ4CR1pHqCeNowQGwPWZGhdR8hzN8sTByFUb9rDTR9",
  "key47": "2UfKmmXt5GH8YmE2BAq19Nir1d71voyESWj8jYzdUGhuHpXQVfpaFoRRHbNQTEJ9AA91bUzTzA8LDLxzKWudC1m"
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
