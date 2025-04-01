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
    "86s5RACNqsoiGYuxnZ7pvKEv6y66KWhd7LuAVzcFphkMthLdFk3y1KEvs6KAwm1dnY5KDQFYCuq8GwHivtfuxAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LADYqWUJDsjSn2keyGmbsyB8VrqVuaUsT2NjPmzBC2iYGjMWwB3xc8awYARan6W6fkzN57AwiaAbCPuvRxSraxr",
  "key1": "hWiTBWEPVFnKrhYGE4QbpGGR95wNcEnC2x3Vt95xxQmphA7KLXcyc4QFMVWzZPXAfKU1E3cnGPBindYNAZGgxyB",
  "key2": "4hYrVbnh8MWyMFGMcMd6Kih3Xpid9iQPKR6yrR2eR54NjaxmQYbAnd5GFbExdV2J91A1MBuJ1i4hkwTtG2V9fwu8",
  "key3": "48dgCaUpeGLvwZXBMPdQ5CRinhjikYuSvM7S3seL42K6aLPZaqke9Ju6E7KqnvBntT46rjTZ7qk3VQwXmTSqJhHF",
  "key4": "ciY3dFcEiKRxPnWKV8qFfycqobRc1RrdSnZch3rkGDar83uWMj9DSU3RczmVB9dxJNoC6kcFVKUHW2b6mhxY5uw",
  "key5": "2QaMRYXcMbAP4jv2w4Jmg281icezptdtzpso1TgZzQFhWWqB5nQjhU3atDN1pYq2pVfqDPViWMfZeGZpC5hdf2Ft",
  "key6": "438AFF7tErxm9jz6yHmU6rg74U271ZeKp3bhxVQvLQyrnUdbEePmm2reMjnSJ95PNN72n4Lu9ooekgyt3UDgBe6D",
  "key7": "3qU9gpFDF7mTPPYucFGiZpXjDc8U6Ui3HPgLhprE9xJhNzoXJUq9JPyNnqYCYPbB1dcP7T4Z59JFtXythy5u7REe",
  "key8": "3zanV9hq32PQGFW5MuemTf7WhXJYC2m7xMabMfp1RanmkKxxZ2mkcuXKCk5jri96BVz5bV4NNPxLiMsydXit2W9q",
  "key9": "3ZJQcCbvRJkrfL2EMSV7vFjsCTuRfXZHG1zxe59qzMh7zbyjeQyPiPSszX6D1TUrGysbRxX6Xd7DnLRSiwzXgyiU",
  "key10": "5AUSGVevowqYzAJ9GiTvUWChRYujfUoYZuaxnoGGmWiSRn7pdZNd7n16PUhCzVpKVB58M3HpGZjU4WHLa9y4G3Dk",
  "key11": "EaknS8tW1hBdDvj9qztaLGQYCAW8xkchD124X3jSAa1uVuYiTZov6PF4rEYP8Qe2auVH8WGghTj6w47FftGNibL",
  "key12": "2mYYcxDn1nvSDFp7P5K1cVAWEcmZrzJDVGXm9HuABna3o3kqnthX5fZ3w5jFvMa8G9WbcFEtrd9ux1mw9QE5xa2M",
  "key13": "4RYQEek7yPgnj1RZYd14y4qtRCeqFQgZTzQdQrfP8LQEUSDyppwMZtTazcxeESrezxr3audKAkxjJ4pHK3jibYZj",
  "key14": "3Hd3eAfQEeEUnYuUVzZ6K9XKmVFcPqspCkKzLs4tAWLNGC8VHsvdpmuEZRp76eo3ajWgw1nhspJBjdtisrXJ6QRh",
  "key15": "9F6bcxuYLi1ZrsoRgFLxG4bhaViJtTCTpLbtzFgoccDJUdwG7J5GPtjKHVEPQ5QcbKFbUvXbyy2Ux61v6ysQzLz",
  "key16": "7m5onSGhosN2kUSV2Jy1t4wzyh6xxV5uW3W41sY1geyEDG4gpVBwhaQBkGvdnCjCkTM3nn8jd5xtyAauskFpp6a",
  "key17": "4x9KseeAWzH1H5bAGBMVuZSkniLBWvCmNTa1Us7nS7UHHoxv9Rb9G6jhWunFN1mvrp6noKr6ATqfgQ6sqsBvihwU",
  "key18": "45vZbCLMoHAVS5rJrxrLJGAkuyerBHL2UcUdnMtBhXqtGEpbdmhcgLMkX3HY7fr1ufq4A1Th2WsWwMALcvCe7g7s",
  "key19": "23euSCy2tBNpwkVUJyKzrFujx2osTtdDxbecNXWbQnKcMfFfWvU6unPBGT2ZRQfUPKVGZS5GeuvKEe1KPqfMpBp6",
  "key20": "36goSRX6uWwNoNueSyxHWkre7nFBo5LwmgkRgpYDFBQdbisyHAqPNa8EJHsJusUyQRL3NcaLA4jRHgd7HpChuqYV",
  "key21": "27Z6VfGGtveyWzyCdHg4Xoh7QAr4EaQjQ54SJoroHTmmZR3vHJNc7Dc3QCTxwSqF1y3TYacbNUQd3ziqvRYTdn1u",
  "key22": "5rxc9BkxN17Ez4EhaSPVu3zU78fKpVfTqz1u2jivjfuXS9TYnWAtCNGyWbcV2EZz7FUjj82YEsBHaTY1Sk9pk7u5",
  "key23": "2tke4Ye4iGAVZcs3sZxmbokt5BbNJPPHsjkNDMhrSgZaY8fTkZqHj2pukgHn7gwyXLpo7GEBia5ZqfL1zUSoAppk",
  "key24": "c9hc3ihXuAZFcDUY4qVeYVEmsQuEqkndsSEF52LXi1uzAKS7UVHaqfsMVuKG2DWWPJfUb28ZRwbpb1jdHbBUd1u",
  "key25": "fMda7iSLUB4BHsSwvqiNwtYqJdaWRJznA8r2KwxXZTKiEt65gYBF93pPPArMGqZMxp2bqM3QVxXGZ5nbLNFkgNd",
  "key26": "3kgvPidBBLTiU9C7n4B2rk6HD5vUtXRQsWK9ns32rJ6igqN731e6UMqzmBVVYvHzbM6peS9nvW3zgGKaLMSswUew",
  "key27": "3xgjbLj5uBbjShX8tigPhZSZDqZLM871WU8RT7ippzn38Xnifrf1e8vQazuUGdHixK7wQsfVKBGmS29vjQq3ghvo"
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
