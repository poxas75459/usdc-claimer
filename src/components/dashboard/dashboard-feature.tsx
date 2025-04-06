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
    "GjXD273LiDdzVXskuVnZPWt61d5pGMPwWkENzXQH73Qi5iy4S21uxy7As3CGfBq2ogpGYJ8rekXGnovHbCEa1vU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJSYmpKUD3QKBF9uTRkjAmMf3Vhfhd3RAq3bhMTw7vZo8VborMEgSEKHWcVCi3X1miDgmmy8oJxQaM5uey6rnEW",
  "key1": "4QpNjSSanBb1btdBPioWdeiFt5LKiHDG1yyzeBtszYnLBTuJxhi4oqXSwQxr6CAkW2uF6aDtoUQK7xBndY7wzuMv",
  "key2": "2RMzvDaR8MX6mTztwkd7KuqftJpUm4uTp8WN5nQwyWTqaPz74EQF84tdLJB3wPgDSWqjnmyXSrGCGodBfoNQYFjA",
  "key3": "3ZxFhPZ71bKGYwGMkeNYMz9AAky6d8C7c1kgsuxmX8fm24jcCeAE5zFaHD6nWLoz59EhHYotpeNqaD9jwdbyjkFR",
  "key4": "gohr21CuhywF59MXxtcoFea8TyxkXoNH7uxoYu57jSFQbyT3DGUm6zQYg9RscD4gSkbnm7BGmwRgHb5iEw1imD7",
  "key5": "DqSXL74wDU8SCqqPA1BVnJDCgERTmiTvU8V7zakmqj35GRnB1JffRws1roBJWUGdgZWCKtaEwmcmp86JxduDiH4",
  "key6": "62q2x2iPd4fM7hPWe5S4cHCRhZ4eFLeHwhZQKao9wF64EKMTL5YbZHXLNHjQdMppjKEEcy4PN3kikbEeN3sX62Bq",
  "key7": "43wTFLyEGYsRGnccc83GpfJ9gi5s2LaLmKU77DRGjVD54KW94hdEzKp3LqgPZm3XvD4WYxWnxbBfWVEEVFasEURE",
  "key8": "5gUaas7ZR15p4N1E2c4whLRENdxEcBJ9KGZceuMHeUcomhr7Y8ns9DAKUkC8TPzbNpVKYXoSiGBtAQkpiF7UWwWA",
  "key9": "3ziAv3eyZpFyPUppajtmzdVjJ9cH8ecXaeG7QLdWLQtDmp2odAXWGHbuvyo9EZG1UHZ6qsgFwqBJhGPFy2XGgDy4",
  "key10": "4APv9A2MZfjqvGnA5etB58bmqALQJpyBaMayfB5oNN9YDkjfsFobTUePnRSJmhXhTtTnphVVbwRR8zYQBU7DS5zq",
  "key11": "5yk1qE8zcJ64sHbxAD6q8h1zJSUt7Rz5NBRp6dgu1Cz3LznUb75yVeaG1eTYGq3u3xMNDxjkbgSx8RsyqstodhUk",
  "key12": "2Spqg2UD2PQMD41cxXe51USxSFteto4D4Kv2jXnrdkXUGSZcKt38EuM5Nb81iUkQa2tfZaN8gRYnoXaHxkxszKbn",
  "key13": "7eRA2oPowfG6n7rSM4E9vmnad75sj7iMTRcyDCbajBfpCLsm9EEakSR4xvv4FYeZmWDXyyYS6Rp1Gtu6NWZo7Fe",
  "key14": "4wMHNp4d1TKUzxMwG69AzccuDaWoSCedoth8Jf4Agx13YbosMKT5yagKVJvs2W6U5361x6wrAqtvWZjbW96f7Z2v",
  "key15": "4VdbhgJxyJqAn3nUce1mmUQwyCy1jfafiHEXUHLaUVzBN2AeauRuQhCnWBSrWt61dmMpFFVYaWu1AdTbAJUoZPVa",
  "key16": "bUUCywpH9k2YS3zwzC7cH9qfF1XMLFERsQJQSSSwuju2mFniHWAPBGsvtCjReg34Nc3SfKBEQGgYUvbYYddY796",
  "key17": "57NSwHVefD8dQZbRPzNky1iau8ndMNYK9XGKjuwPQsQ54cvs4Mvq2Q2x41XHm6BuPAHDYuoR6G8SgNNVuzr7VZwE",
  "key18": "32SukCgQZ2oZvuCY3N4NydQq1SsaFoaeFwYGY3hn9Bpt4QfL2brb3xVgQp9KqfbuGj7W3ZLem9smjFYXmewcRhuq",
  "key19": "9ZymVqvy1KgTK4T2Q3eEqvJcaGFyp3DFM8z25pPFuSEUVPctZijhsYC3Lxq1vrhpCRy64pD9kJu8ExKTjYEtHFd",
  "key20": "45ifaepqrzoTocQxvh8V3Ho3KPSTc2DZT4Xh5R56QmT949FL31UUWx4V59eFrtKrFozqbwXX5B87DGLJ5EZTuNgZ",
  "key21": "ZJ24one9WL8HVgN6yJiFsYSHvHqi9kJHSBdT7NrVcddzW3L74KEDjT7WuYaq5WgBHiCdowDJ5WgycMCgNDu1QMp",
  "key22": "2z8RhPzhoT5WG2C5kM78RF49ib5ucmTrnFaJYn5mHt5DgU8SYc9te7nahbQDLQsjM9oxWBiqksgZDxQ5EDGsXnWh",
  "key23": "2TNRyKjvz61sdU6PeG6ytcRy2y5JnPXAHUUb8iRV8UgzRzRVJPQLi7quLG87gH4wtU3evmiN6WaKkY43EdeqBjdZ",
  "key24": "5GsnvQXFFMspNsqmubbyDn7YQge5cGk8Jn41drTiijfsS4sq5U6Foj3LVHto66V6AT34FEcNDJMr8GcNvJczhxWA"
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
