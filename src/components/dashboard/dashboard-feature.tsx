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
    "23aEiCQY5nGPj4CQH3MYGgxSAHWosBErryj3oHBJc8MWwmWk7ZLJgeLsa7re5Sq6PPpy6H4osTsuchrA1NLD1dNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m7na349eziSZvbToLyzHJzYC1vfGyeJL8r9v78bYNCnkX41VZgjBpTaMhru92sNuDxgAaMww3qnyY22qD9WhZgb",
  "key1": "5rfCDV9UHHFowkajKaKHxuis596zcBobSECyxJtGXbqpqHGjrVLfvvZzQpPrajMAwpHE4hQJo8HE2AerSjL4AXYZ",
  "key2": "5za3hb4vFpzEDmtzc186rZJdTpVUafRUv8MbgEYatXzB9vPgAzkHtfFJuPHLod4DZ1ZwnZ1zRw3cYctvmhVFNyUM",
  "key3": "2YDaTYGReKZwvFHPmgYr9zQjWDV3xJP5uP8GfH3aDAHqCCpiUiUuNpsGwfaMJQGYU9S5qoBJ8dVVMYdgUqm1i8YV",
  "key4": "3Ta3WVSZri49PyaBgWTvVyNkpF5y49jeUJszmaKHrYFaoLyBz6THLQ5hCtrJ4ugDfURdCbkoHqaSCXPPj9b7icRK",
  "key5": "5fJKujYLDoP9LmTkRcBysy5ApUj5eD8cnis7iXCCqG9PTz26xLcGvuuunM3eb7bo9wegMi8HDxdi1MUA29mz2ofH",
  "key6": "brcrvJWLtXW6HujSvZKuP7f5xpT3v7M8s7skZHNaitVKmsCojaaJ9QcJ66BsPEtqjeumtdSKLX31ZAtyXS9wHs1",
  "key7": "5TYS8vKcgh7UjudNdz49rPg6yDRXGB5zp4ZAkfiYAmn9C1PwK7U3tyY7bTaYpGKTcyBrthE8xFrzAkcaVu3iP7HE",
  "key8": "2atDKL3MKaofEKhUWRW8BVX2TtsD2mhZtY2xFtCAZ5y2LJGRTa2hrVcpKwtiN9pnyjq71PKAXgjVy1frpzCW7B7f",
  "key9": "3NNRjdJZKXzwz7x1kX5HgUcCfB4J1hqmtsBMWU1rHqpFqBGHDwuNryor17J5oM3YBWsvxb1dDFYRZy3Js7yrAyLC",
  "key10": "5vJN83MBHsnJkNce7qtsthLZMLU6Jn48hkff4uPBQqmDdxpBc6oLwLdegtv1MRSoqaqAoa8CGU3nWpSxGiQRBWGm",
  "key11": "2TkiqMz85unvBkkiD2ZYWGpqbXtvyY5cv7cnZ8Dd1ef9cxVr1GbDVZz4VRz1vfbzmQCp8L1qbZSmrRMSnatXAjKk",
  "key12": "4YMLTxj8GbbS9FzGGoA8pJ5KRKS2JA49nurbR5eTtKkABq6jon5xcpYf6LXiiqnsD3su1ToJiSnfKeFjUMgmX3nJ",
  "key13": "5HwdgtsSZ1p1JgFFBCBoYZShtAWSocu9tAwrQte7HtHeDwau8K9rLynK87boQBbHu5hyziq33cVuSTnHsMNjgzZp",
  "key14": "4LTJpBK9oKHV1oHFNV4Vxq7j3vpwJzAdDRC3LsCRAVMmuUFQVcGWqhdjE9V3Drmqae8GdJYxywTuUEZqgRJ42zhP",
  "key15": "3ZwMMinFNwKQ2X8bLtCLtbKvnDUBgALHF1npWihTAZYUYUrDqGh9quCnGTqkf1LFyUynXXL5XJ3uvnQeA3ZwLX8j",
  "key16": "2XY1wCzdyWn95JSv6Hm28po5nQ9HpbftMeBkjx42ronprzXpAJKUoa5A3uYy4beuL1XQvct34dET4He3WSqhpP9y",
  "key17": "5ReNiCXLXc1FJ4NKAt4TF2A34oexQwNCQK5E2tJ1u1g1udYHvjeL2b3XPMvCJ7pyrmBoULS7VwXCYh2R9jKRXH2p",
  "key18": "4V7uVFwoGmPDyYdFun3C1wyqQV8QmkWKwPrGbKkoNN1PVkV3wa9hTLtHaCP9QErS1yGKrTd9xriU2A9p8MzBHJsm",
  "key19": "52FKVm1HZA28KwVBfD2bwpm3hqBmvdVWrS66wnXe5ffVUfxj48nsnraJ3LY4k2fofXEKgs6N8QMsrJZjbrLCAL54",
  "key20": "63Y3XfW5UQHSmSBto3qtJjZ8vLGae14trfvSyNFmGcvGAW4Fs5pCdUk2UJgmyjpbBd4KanbHsFd3PfwXK21msC8",
  "key21": "3YGeL3azL5kAzrJZHh5yKfsyKUByQYjYkRfKMP7JAYqbzudPdaKCW5DEddLxrRPZqX4ijNBsa8XJs3LVctGTLYt9",
  "key22": "23WiWfAuh8HaP1fMGpnZC6xHeNGcUkvFJwLiudFymCaFYnbvjVdGeypyPoeBh6Y795B2HQhozBhMyLrWuH4s5v1x",
  "key23": "2kWEqTC7pvUvhAf1fCKsUVeToGKEP9qNtaUmXcB3JYuPcEroBf1K3cow17T5TpXrm5bcqHiVAuwjhMQWggNn1nVY",
  "key24": "4bfPmEvEchqxYDi4o39ZcGjJY5rmznn3EvrBaDy3gtn4fd8TsXk36zrvpbgZBWJEYEbrEhM71vefw19HtZQ2MEXT",
  "key25": "3jGcsnf5QM91aifCHHAHpqtZSi93T3uHaqqesrRH7BsQBNDQEr5D2su4KmWLuy9mjP9QeCAbofZd3RbDxweFfKGG",
  "key26": "3tP5xUpyiTYeHMaeywwhd52e7ghCULbnmaioSQfGX7AUCiMNku9QjA7VaahGaa7BYnNmqguVWFNY2xrPvdxQVTzs",
  "key27": "4H18KevuPToCuYqcYdKAmq8jW5hudYUVXw6v8ZzTktTCZEJVVGJpieHx26ZS252dAXFGyMYD2M6HsVsDJb6nq84u",
  "key28": "kauqehVrbCUK6VtkMqi78dRAvzX8LnwKpdrkJ11Pcp2YaQxBFbVid7Qp8fFwjTxcFJ1uLYkstTWhrqL5Tz4udsU",
  "key29": "3A74RQGp6brzWrwiZdEtxaxEoCZjS4WKPWFrRo4gscsPSUxgsr4wSGPABs4z4or6Lc4NfzN4b8Y4dVXjNfYmykEv"
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
