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
    "4ec933q9JjYSchvFzrs9hUsSDrvdh9sw3fGbsDACYG2sSxCwTduYtTvCXoEkmyNxzy9gZy9f9PaYUQwXEuNrXDUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hATJRKqG1HW9xhvwVQMowmoHZGvJ6oWAVrzs7rsDptayNcQ3J73VvwZ2qH7UiLvx9Rh8eWDDFNi3S51KmvUpqJS",
  "key1": "2bTwFE9upXZPGUZSXqYT6eVP7y1M34eP9x8c971hC62NmNqh9PHM2aVR3BqPeeR8WpZxobwLBxDyMhEtAg9PKZCf",
  "key2": "5Xsc88WnHVHSWHYZEQuFH9LYhweWtLorxrxx8u6mJRvNocH9Qc7nPo6ZbuX7YVngz3B4YEh59jsDcWAnKq6v3GEC",
  "key3": "xuta2P5i1SXz7q2FtRpvTpjFQE95NkJT87XF5KzyPUFFLyZj6F7unqR5EhsKXVvFKRPdh8Sybn8d8NVCS6byBhK",
  "key4": "9iXNwiViQRfN6RDVK9vSvFUtn5gLzx8j2CA8htT53DAR3ZWzV1thcG7Ln9P89kMb6S21XyWbnhHZtm8MbxRgFLK",
  "key5": "5PvHroLAR9yTMxcoMDo2j1ag9nSNGGGeQKBfMqZpUKnfQsiR5ot4uQQuyi192cReExw5era1igwYLi9Nx5KRWCf5",
  "key6": "jbr3aT5nq1ryc4Ff2rDNJPnXP2ZffjAYfZtzukEMLP8BreWmvaEt5j1mppvNMadZ8v2Y75Uw2Lqxt4CAGiPm3Nk",
  "key7": "mbtV5Bx4dk4ZTrZSQabQyum8LXM2xX6aMfz9QkvJzVHV6TYWHuUt6Jysd9cFjaa5gcpWdfNvpZqf7ukbwd1GMAw",
  "key8": "5PkGUBv6XtHqkiZ17kY6cekYBXNbDuZbbtsjLhdaNeDUMg6zawCkVpzuc1js2Dz4CTLadConYfWu6jHc4nqTvJuW",
  "key9": "35DMBG4aEMKmhTf3Y9PvS2GbFcjZEgFPGsYFrR23Br4d6PfyvzdoWA9SCqapHYsUPWb6fMVFW5XdWv3oZ55V4MXx",
  "key10": "VhQkTBaxSRWzcyvCHMyBGEsX5mXJ87jMaeY6J8eNuM9zSTybh9poiLpRd8NsuVh7bo8Se1BBSToeW7pnEgoBwBp",
  "key11": "3ZePRQNg5RqNoy5zDW7btJgiaZwci8MzDKGbs3PfgeCPG3KHeeEnJJgCBjZojN3pPx3cHCBESjwMhnu65JZPp43W",
  "key12": "3VnwmqEEpmDM7VrRwUopHe37WG7vmpVjSDXnyaHjTXeaHJjg7csDViA1rypiRoYa4mQq1nvjNMdhmGGQpYetUhce",
  "key13": "3YAA9F4jcrDf8CiUiCwf4zuDzk6ogoDBFVouV711EjGoNQMdUbTD7Ax1E8LXpJSnkptQs6MVDSHSghyg2A6TNXaQ",
  "key14": "2pZ4AtZo455VAhbJs4p9ep69UAceWQAqkzLzgJoeFmXa4zXpciAqknpXvTUfaWBS3HknW87wMdDMyPv4yNPDEtt5",
  "key15": "46zrBFS1MHLqxiGkM2QZc5Qga4Gh5DUs6c11R1Wk8r3uo8gYHQ4PkQBPtHmp6QZVHJ6Xw9ZHU4NDE7irUGjfeHN7",
  "key16": "2qHZWjfjEniKnwaS3DLskpErU4F9EMF7hWEgMDDHMfW9Ag39pRmnm6Lf9dt352oPYTbQeHjgp1QWTRYVutRYtYWY",
  "key17": "63uZMejcTcZnnidbz5eiKwipHcpZWrG1CBpBwkahBmnbFSxvb7ncfr19sYZhNRYUHyZUKyJ6ZhowNbNgrgrZRwsN",
  "key18": "oGWPshvFUYE7j9obDwFKcwsEbNgVmpUr5gqzKrUhE1XDbzV4MqN6dqXnqhZyXFjRGg3QApysc1Xx9Q2ripdyT9V",
  "key19": "2SLXCgPb8GLLRVLTb9MBRBnQkYi47NYFJN5mUtuMNydVJRBRrFhxzTUTNQm9u5tgXEorxy3hKZLa591L9bLQWWyh",
  "key20": "5SNeqYakkGESsJomABL6us4Gt8YLukFDfHQB2WoEM9XcRASbkExXvTWiQnPtJVGGnKKZcadNTw99p5wgUtwfrzcj",
  "key21": "3MiNJZBDu8jowpfPQtNDqHNew1ZWcgXikiyKd3FMksygsNvQce1i3bU5wPN5NASGoJwNtCzrXPUCqd2QuaNmubPf",
  "key22": "2amE26kYZQP9L2kSAfLqFDTLSBTzimzz7jRoeDrzsXytpkvPGabroS5qAbTSKASZJ7PD44PeSYGEiDkEP9fVoB3d",
  "key23": "3kScoLhgsiiatBmeRSMgashMv4ewuadAgEUDwBLqaK7yp4MRqH9kRFqqbXqyCnKUNqePF4B8DF4WhTCG6zDYAegj",
  "key24": "eAftqCbKT8u1JBH6jQpBwnK8UpKuJ57uQjpW7poDBvbDWn1vdXkucLkTcLN7LkfJwSn5qn3hH6PhFNZisEcreXx",
  "key25": "4PBWvNJxG9X7w1j1KCbzH3taaiDQ31XyvkH9S3vHmn8mB1uahLfgSitChxDQ5BYB4TNB8YJH8PBK4NQsyXkxThYQ",
  "key26": "3xHcqkuBkAdQQKiMakHeiA6CCtfHSYbe1ak1416SHTF3j9fs4SJ5PNSViXNzMPySLHeyGWSsf3eep1KKzbQeGP9k",
  "key27": "3j3a4fhvUWK8T8dTSTiwdUQEcpYSmMKEFgg5C4ucZ7B8nSrvAvma8gAxLjVsuCyzP5g28zWmG6xjNSMKKyLdyULN",
  "key28": "3Nn9Desatrj1t7teyX3ztfe7pT8mi38fLKVd5yQqKji8GPsy9fvnb2ddu7h3fiz86AtSEpJjrVjwgxK6N7AsZoQt",
  "key29": "3YugGNsfBSE7ioYvtbcdnFC34mzB2G3JSiC4rQ6Z5WKy8cz8TZPe5JAYqNXwkssmKTubQM3s1GyTLJSVZ9frcvDy",
  "key30": "39kBcjbPFSqmdtZRxiFbE6Aue5t8N2Cqn3awTaSeX7pFpKtvwjWXw7S4SE3sMChj1XxyurHfRAN2Gd97U2xvk1E5",
  "key31": "4obiTHE4Ecqwe1DqervWjZXS2yUaccX1rxtRfQ8zrcY4enNcXupLxsaUveBcV32KnLUkmjWbK19HRkvJaC7fDE1H",
  "key32": "HCoyL2UE87j7eHw8PmgbMBcnbBE7eUM8E39YpHHmyVYyBjHJ5tKy1zoZ3S8B7eCehBgnePmksj5Eiar4qKxruBy",
  "key33": "3rHG8JPZvQXVTSeLySjfs41wHcwqJobXfM4ifMdrGwJnxPSQvpFUtji4MwZ4efx5NKkhaSJuWBMM9j9aypZiYbyk",
  "key34": "3i6Ygv1CwREqUoDD3m88ToxQjMw4MTEjU1aEJzr8aJuVGkZL7uqizd2c2fzMXRibwYCLKp6GQcPp9YPcGShZ15hh",
  "key35": "Wu7FQoaK6mV2hFRpKkzakyth1J3KyDjrR4YRocybA5NTsvKh5DuuRLBzMZkCL6Zc2sKXr3e2vfuZpJNnC8TGQBM",
  "key36": "2wPXTHEdsYVBJNCHY36yZ5Ci5JELDwHfcqXzEf1d9vNdJhFxHVt1qTT4QPxkeaEufV8uyMKPrWaunbt2NPJMDA7z",
  "key37": "5CSJWayXPALeGiLndHANSeEFE1mVFnHkyfqDvR184eM1sdUdwCKvg1BPJAFVJifJdLZxPGuzGsMTdbmjy8f1fgUU",
  "key38": "nooYz5N5eNbQEJPXA27UggiBktcUyjYGFyPwudn8VH5F23JUiDgTXjzkgb2zeHvCANnp1TYAtEthWcv2fopzX8v",
  "key39": "3nD2n862qBHtyBzhgKd6f5UbVT97e35C1seF2s9JXY8bgXGS6YiPUTZeDYtVufFzmK5PyYdrKAWsXiTVwvqFGLzG",
  "key40": "62vpEwnvnDZ4W8zpZdwS4t5mUwfqfGV1wPcf1mthDMWRcLzCMy6bxc7KPrufq6sKpeF5E8hMnspBZsJ7pohStcSr",
  "key41": "Y5mCxgMeUAbX6KUcYR3fnSBbR9yoHnPrqeqF5rSNhWQjTYDFAi3qMHJhAhUXqkro3oiDdRyRQbA1YSTTzocSXBw",
  "key42": "5TXZF1ZPL567KHFEr8Wedz696SRyW6xAEMDrQQHx9evC2RJrEwvJwrTYrJb7KqgVs44FJZC12Qd7DpZiTpcpYa8R",
  "key43": "4Xw1ZPuPDB6r2Vt3VRbchxwLppwiNfuKHcZF4cNjQ2mgxEc9t8rjuHQbvDweMtiLjhtHxUk9b9SWzJbGZg18sciu",
  "key44": "5VwJCyHf18V6q61i7WpsR6vzKUxQJbvCheMgtL5qTRCSH4pd3Ms7YHPp9uverdKFPyuVAdJtuic7LhNhqs4LUG2V",
  "key45": "SAC4qV2sY3VQkZjs8geqjJxvAgCycu7jPr7vyTrepJ33hx4jGBAxqhD4Kfw54jrkYhJDyCRxTXMQ431r8Jy33Cg",
  "key46": "5i78QX238J1AVtA6Lh5CHndkfkX1bNnPdYE7VBeayajx7b8kLRhTPeVtsQwbmJSPcLbjfp5nYCsKemd7mCsnPGjp",
  "key47": "beS4PPDcz49tJHHcT2kFcwGKhVoDgtewh12HM4toCv3SzU3K6ewBVUtXu1YSDsDFc5MMUYvPACVFstAs76Dqe1R",
  "key48": "56UUBkHsJ2mH1Kxnzpg1f5diPtvD7jwkb2XxcWGAsBEgWrEwoWw8mVhiSqNW46J7UFbXYQFUuF3WUDYXgfcFuEMn"
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
