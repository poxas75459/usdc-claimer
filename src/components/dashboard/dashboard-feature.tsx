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
    "3ntERTYXS3Kk2eWpYjbDhz92LE2yecuq5uv2eBt5ZMx17Pj2CtoZMjvBE2yBRaLCnkz2JvLsvkRmHzbZYmAsrmPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xWrLmeBPCUwDNXD6cXfzXT1H6tWucxJEpVyoEWSnBSFrWZQaDAd7dS4kTxsWwt1Xt5Qor2YTHkdSTKDopQGJxUK",
  "key1": "2FXDd4tiThFMHHdwDkH6Upo399oxsckm7umLy1Ryn8a6u1mM9km6GNJGcCqXx5AWWCdBvwv2uZRyAQNgHfPFKQKW",
  "key2": "3ieVotiN8MqrCZGGdhDum1d7RAcdfHSBsUf6F8Xw37Ccx3jwUgHktM7syTmRmEMScacFsd6qcmJEkJ7Adk6PHZRP",
  "key3": "L53S1dWVJT6aLJStM4XfARuZf1PstDpNakuXV88rMWBLiZfUXRg2RKjMyfkX6Ty2w3dioPmy7TLanPjdQL1oqmX",
  "key4": "2e7oruRW2FDmfWXKXko2bbvjBjhxAb4G1PMRYvEVwv2EBYompMkyguq5zRgqKY2NN9B6NfNoRxNsbnoRMfWG3puD",
  "key5": "28ooNVdwiW9oBc5NMjVpZCezbNZLkS5UMJEdrnW6fkYUgY6DaEKW6UaUp4Dq9ELkUhDm3fdcVgXFG3rDXA5Vu4By",
  "key6": "23fAuT6Mb9kSkTCDWrDB5eRXuqDLYf9euCoqNmvin6yLDfPeZ3A6fpUqgfAAvNxuMynaMC6SFAidQ4jxVqvokC9n",
  "key7": "3G1YTA2UTU5BhP6eGzuMpzrughat3kbZboBLkCwnAxhhnP2vK8fWULgSBCgaykZfxYrD9KMspEqu264RMcygjChk",
  "key8": "Fw5wjrVrwuaWa18YzxW8g9kyzM9WajViXkY2pzjCtpofn9JH2E2mzJrRJmrAqtKTNZLTVhc9GETSmp2XNM2Nc5a",
  "key9": "4g4A9TtJrnrXoAj4voeyh6MVo6pXUy6gNvXePkoq1QeRsyejxN38bHNfSQy6esy2cQ67MXMZBg9qgPn3WNg19eY7",
  "key10": "2ZK4aZJAZchckq1JeE6Py9Zi2a7MK3WsAa354Q5xbEVDix8tcyUkcHx2e1SQ1p3rvecjhjAfrasm3rXiDTR12wNu",
  "key11": "jnoxvAWLBkTXSk19Ye2w92AR7fqQsR8Brht68sGP23MvTnkC6rtZuL6UX4TgLAPgdbqHzJyQkrXwg9jG8KNsFxS",
  "key12": "ssgjqFJ5DNZgNgwaD6ENZH7AVQsnZqMTgMJkzj4xktXX8NGk5RCzwcjAnb5PbvGPyeyqpFiXKQ7bQELLkap9LHa",
  "key13": "UaVWG1m9aCvrD3UUNAiFgn8gUF4kDQj91pATKGzr2sYZsgzfN84jBPCYbrG5zK78dBAE5RTSzYAUVZAUi6m9wL5",
  "key14": "3pi6VCKF5xL8QJsjJbqzXd6tBoEGT5db6tM3ChBZN4pdpbjN6D6MkH8dnN5g7wkQp8wRi9ytz7WTrhDEwEzum18A",
  "key15": "5BAQsknUca5y1rAMdYvsEB47YocptXxQ5tdickqp9qDRws7wCP5SdZmvfLZDRyLvqkLUv14K5Ts6nCn6RHuv6ErA",
  "key16": "3EuHf1Pm7gQh8M1dgPRYLEBLhsb6MiJSr9agXvpNzQo6tZrDez2D6oRFUKpvf1a7vcdYUe8BPdFa1RF3vV5r69NV",
  "key17": "j5DiDUXusaRVJmeyKt3zRDDADkfdT2ux4dWULRweB3Z8jwy3v1YznHqu7FMLqN463rwxTm66viBmeNn7nN8CfQK",
  "key18": "427mqGDn1LGBUpKSmnXXQh3vnbqVtNF1sTjZWgfxMrEfdXDhjYk2S3qCFZvRyfXTspQ1eMPkk3CFZ9yEDMSARzVp",
  "key19": "4cH3a4ZiVsZeDc7eW6xrGy2mBQuwf2e8WFfA8bnE46XzaDnr1xJaM76YpSgfCpCvFvHfmv6kXrhCkrVAaATm5zew",
  "key20": "Rz8dNY3fh8o8yeXJtDzEw7Xs3fnVz64izynduYtPnmknEnK5ykZKTsWfknTM4Vf2JB5QqyYs614onbS7FTkGU35",
  "key21": "4wDqUFmLgrotQXJmdtWGR1FBVRCCntM4C3BCr9iuPVKMNWgmCn4ggoCZwJsHdKPBHUyC8fNgG3UdxncK64okHQuK",
  "key22": "RgVYTbZ6AUXsnsFbP9JqsiFZCkWeoHFBzov6BPRBxLRJJQnaE6Ws3Lift6FfPb96mAz3tT2b7eqd8aknjsPofJm",
  "key23": "3QbvEkEps7f1gvZgwgws33Jjpiy9dn7xEy3Zjr9RDNiABNLtax5XgLkCGG1hhEywfK6TB2Yp6mnCi9k3yATvGp7v",
  "key24": "4ohWxrUisRzzgsgFA6KWJUzcJG8DqC6bQcykbYyBBPdDuXL7QprMmyT1iyUGDvmcgx99bkQsmvGabvxd76DXqCUe",
  "key25": "4Gju42v94jG257GhLVrXvojaSzv3pFxXUHHGZ8Yi7i9kaJ26xyg5YhjEsaPNECWN6dBaqLL6o9DVMzTXftA6n9Up",
  "key26": "3snLkPRLKv5og5LFNNS4uHS3Upcta2chdKdhXbzRain28Adjy4shwfgd6fpV3EV78JCDDmNJBtk6qTd85PTJzozx",
  "key27": "3wg8QHEU96Ev76kDQbDjadwe7MdvVo4aPZmcGTgEf43LPVk2S3LSTpHJePqnRsaPjH9CG3F6wvhZgBY9KmPMMfZH",
  "key28": "3dKJrZBAPHDTnPQqsggoZdHaLjAErwi81X5LYxGR4SmJQMN9kVpLXkcN8FkXd2tvXXfp7DSfzA5v9KNdntgGCPSm",
  "key29": "4uYRTLiDShVJuAScrjKAa6YFqBztRNXPWUVb9x4kEYRbma2u9fpkEC2LnMz6yzqp1jKewwtUUqPUZ3xWUHqEGB2V",
  "key30": "5gLR5Ub3NmsatmuALbCB2kkmjxzk9rkwtCq2ekhMdYtfkZMhyULPUXyC3gHKh9eFbn6r6ouzr2M9Q1sbD1yrhW2i",
  "key31": "4pxiTXKGq7WvEDEh5fowMEogYTfsnHKeMp4Sxnjw1xbRGc46Y2yZz7P8ZcaNh8MhtpJCRmA2wi1eb6BzmEDdS7ia",
  "key32": "2CmrGaNr8niWD2kt5FzetrYWMXcYpHs9qy4uP8GC3uBgbRVnbKZQySJaiDPwqjLBQWhqvU4LHK7YGhNxHTSXkWxD",
  "key33": "5jwT2E8xCpmcFKWLZoQEfFMmiRiqpt48BqE8d6UfGM9i4qJrvfBqeF62aLcVpA6wiujtsmieSt3WAFut3oLbWDnj",
  "key34": "5VekJ6dAQ376RSJB5R2FTPWsHaKaSChK4opH3gz5JiQgF534ZZGn9pEbRjW5ZvegvNWT33r163G4cwe6HcWQiGPP"
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
