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
    "kWcozysQvtqMXNsJMVx237qrPFyWutw7QSsTyfv6C1spk9xn9PUwiwuhuGtLSF5h7qimRPForzvMtMMZ7dhLj9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "259CvLwaHknuttTu4aixdd4KtoE7rDZdXBiaKS4rSDbqk1v5neUymbzo7UZgXTyG2p416RMz1SPx2oBbvX54QZGJ",
  "key1": "AUbVonYuyHaLhAmXYeriR6ygpahJ5v4Y9EcsuPqxtHqp4FCk6kiZtyf19DhMashQfVg3BzvmmjDNh2Ua9ThkSiG",
  "key2": "4df5YrDRddUPkpuq9V6WRJMoQF4UD5Kp1k8wLwAHCtRA67AHxQsYbh9Fxe3caPPsN4q8bZNohuJc3XS7rM9nNXp",
  "key3": "45M8SWFGaqztMzQxRyNzg3jWMyCkgCa1VoSuoYBemYQHLr1TVDG1coX3ykQirgFhwHnDMDG9hZPcCemcJH4JuQiS",
  "key4": "3Mhq6Mw7fmRbto1VL3SKmU8jWmiF8MLrtA1gjtEA9NnE56vCUtkXQ7GCRHQH3rfic9vsdrHDvYjpnG2LZQjxPc3D",
  "key5": "4EkQt32wD6B2mztS5RU62DioLh7FXTLbvRYLV7NiKhaXWrvBH9798ZCyQPcRxWLXf5K4k138uRYi675ts35PKX1E",
  "key6": "2X9HVjs8tZPfR3f6DundzA7jKwDVBkQfL5d4kwjuZHJTRRCC2yJaaf1KdWRyNhqJitovJoBmtpp5HUVe5Fp9k2Pq",
  "key7": "3n1uN8yinERg97WaehTivBkWM1HWx5TVdy7ZgQVP9Dt3JKXQG9WvJ7BtZHw3JJ32GQtK9oU8w8N2iprtL2utGQHc",
  "key8": "4PYb67jd6gWTCfz5WTbowcU4DZNu8gcp3bCqF1f276vERSyxPpQYHee81mCChtjycpKAQzqbpGKnM9qdzm9wPg6h",
  "key9": "2cQxG2SyZyA55yn6aBdjFsR2Njqg7vLXN2LjpTqVE6W1pm4R9Vfmrpbgf9MGy8kL6RUqu86XVuCJAfEEM75C3QnP",
  "key10": "hiHV8kJPaUYx8xD9kZhibYoLohNVqq9bFpwJa7gpQMRMhCShsLQtpAAMMEFMNfRvtZVCFjUWvN79rFTwVmu18pk",
  "key11": "tW9TLxXDb1RBzCDL9d451yMaT3rBm2aRwNqsxsN4xT3MTiVyvP6EfrkD5L3fwotw6HbmNWEG2Z7cDWg9R2mW83y",
  "key12": "5gjJoCpCQMTj7vhxhEZE5FqgbuMhf6rVvovEBrzNZSf75MmNZKa83sTe2d1wPpdy7TiTUEYAMts84SzBMJ5rssXH",
  "key13": "s23foZNgyNJDgpQVQxy3SzLPYsJFcEYx6sUc6mTQWfW7w6gwtfwo6CK1fMt2ijQwe88AFUTigxYkh4ZsEG7kfUd",
  "key14": "2KQWzgLy5pQhPFy5VfmJe7Rb23oVMfEbzYABKD5uRxQftr6wB5DdQjgr9sPSsH5bHqe5jSrCkchuoGXogpFyVjez",
  "key15": "B2tu5TpJYuotQz7T1RqRCByrxty5m8XpBPHcFBWDXJ4PqFo8wVUEqpz4pku61a3LJS2cufUdQorzu2ZGgwbmsSo",
  "key16": "3HHPG8hrtRBPYLtE25YnTtTMryoDTEZyV223sRBnhGt2cVmHnYTm182BvojpKahHJyoTeXdNupFsXe1ZLqfx3FLi",
  "key17": "2N2d7SH1Edy6ku7uL2q8vGVAv2pBhFZgJSEkMu3EoxirokEKMXv8mwCNMnshFrzKdfbN9eYEiXcULtSrTbovEVKs",
  "key18": "rMV2kvEkR5SKtiDzPTfhVDs9biXT1h1Z6wtANZXuMt8WHxy1ia52sZiRLfwDVYBYaY1kaSFxkkYoNzTFenVHSSv",
  "key19": "21nbNknSodby3YfGPckGaFBm7noqsMnxfzGpqzenX1JYxGWP87qa8oQHxEwMqPpMBtHBtUo2N9upNMDQrrzJ2F1o",
  "key20": "5ZPRCjPZ4qXRprnNxCA2agfZcLPNpB9UcVkN3en7ZmkUhJ6C5pnxd3hjauat5d9mPZPwXRQMmuVVcDtY8DE2cqp5",
  "key21": "LGJFzR9BhMvMygoHXzLVSZPijZB6wZ2KGgxGKky17XRzS4Zc4Fedrha3GwKdn2vEuq7NXzDNwTVADz63Ao7xmvA",
  "key22": "29Jy5wBNDz8ZAQ7H7PurvrPG5p5XFSekLfDjKMAw3dzWuyrYNxo73m3ohZMCMvBDTDvErQA9udEwYG4JZFVgoSXF",
  "key23": "5Zp68AzVazWQkJTp2g2ptCjvMWzM9kYMUMnFNDxExMB8T4twmuRxWUD4nzRUxQtU7dYmLW8qbSNhXe7a48J2BTEP",
  "key24": "3s4pgHAwM45nhopQxf3pNEDX7kUYNyiNrUaFNQ1uwPv69SRVtWKUiHf9TEZgsmQNKCZVLxR3HAXgT7QRSY8aYyJr",
  "key25": "2RDxExwE8C67vmPS4J7qJZ5fC3QqvUnyE5iiY8kJXii1MnLyW79BBH4azdAG71mFvUv63qiUCzDK7c3MinKr8A8X",
  "key26": "4R6d3ejZwNyCpuJBNeCQxUE6qATs2SHyxtS9K3tf2iyjh7gaabM15QKsqczk8zevhGKUYsVaHpUD5zkyyBsrhRoz",
  "key27": "48CdWgxwpiec4zK1TgVPZQGu3GWH48Uq4uvvDQVE8PHsosG5K4oFVpGf9ZmWktPgbrTiQtdEQuobqhTgYVD2n5KM",
  "key28": "3eTcUXV8h262DiaExFL1ajDpP5UqijpYv56C2t1ZcQDS56FsUCZchTpkW8CPtp7DZQT5dfbjSAZZy73PL8fPBFS4",
  "key29": "tDzfU4sGkJk1cyGUj6mHviQRXbtt7Evr8HqPxzC1c7ZMpe3v9YrHDenDF3uTFibNuZGUMKyf1ujr94o8GfEGRWu"
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
