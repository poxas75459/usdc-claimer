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
    "3vLRCcNjRMUhgNXp2NXFSV84ihgA4wBcMPkFy6FCBaFECquVeFdRVJUDE4SQVdYQfDr9s2AQN5KpKbCXLtQGgfiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e6vKjbqUqoP2jqheuoYTCZrYTM6e3AJ6BzffroCw2WYME3JctjsELvHm7icUQmLSXx9c4NxYsE55KPzvfGF87MA",
  "key1": "2HNigzChNfLo6oFYeVfktbEkVtEA7oeJAJmVBkn8vFNvDn7gYaH7YivMbUoV1tb5C5o1fUwp17ZEruUxXdf4XaW1",
  "key2": "48Ri8NhxjrF5buL1iNFJVTrJhhy6SQzXTJyq25oCZzZ7t5NHXVPcX5Jf9TSRiLSuGtKaN9whsCK3VPjBovJZ7Tmu",
  "key3": "3MCcrRn6K8RrnjrwJP2nLRhN9h9dbXpEjXfVgoDnoSw2FeBQMGjhafi6uHqRVD3BzaMtjvHJY5mgLc3rMmWFoMUD",
  "key4": "EPZQVcDinqRELFBXHvtuzjRC3wPNgbbfxfGxTsVfLar9Xz6m53cKj4PAz7nmZeVdyHQ2CzYDGwpfQUJdvoVTWro",
  "key5": "42FfmGX2r66en5netHbZQMpFjSuuaH3JHYuwgjqBD8ys6Sb1zh3VpbE7yvu18cuvHRzF5398vd9kifeq8cZAPC4t",
  "key6": "5t3VobW32MaSUc4skxAzLoNSXDEYUAKr2sGhgrymK2c9cTXUMZehHKc4P4qosf2gGxvcy3gEhBuMmA1CzXJUMR9k",
  "key7": "3ESy63xc87pjYJJeYtZd4CaSnjRPRn3XDpBDt1o3wYuDJ3UaGxGJzgwkosLqByYLzEmxPydZy6xawGe9E7X1g3vV",
  "key8": "3oy1eHnaTm58ejnrfan9KAuWkom1ztdFxviUGQzsEgkyFH6iVumyEbmsFQqsKdaEmguKyXxMZYVUmofdL6BLK7sQ",
  "key9": "3htT78WNtnrLa4Ce89yWc8fzQSWy3Uea8WL5AE521GpZ2AgRb5krNwVpQwQ8f6tjm7wnCkPJo8LxbRDE8GP741ZS",
  "key10": "3oUCLD1UdTRAyNUyax96KcxobsVnSKBur3V2CKwspxG9RDnogTRqtL4q3WcxwDAobFECEyGjc24pDmcYULB9B4Lu",
  "key11": "4tbFGqdeM5t56LtQFyBXYanTAShcYUADqwSvXWNKdZRWeGXT8dbbqwNqut9shytNXwamyf4bsqkb8uyGmoyLFAGi",
  "key12": "59HPshAhq5kcU2t8wUTApMbju23TAx6o96u6cAWsh6qYsaLqEGjmLGttBk3wML53TFdXDFvgxy1v3DKvmMEHKZvh",
  "key13": "5kEgEySJMiN7ymnEqgMDSN5GPrz8fhRAeHH1aRYmqMKwpVZn7b97xTbAmqCxB7TQkoajgVTk7C6Lp1dysom788np",
  "key14": "42PJ2XZrMSimG9Ah5Y225EtS9AGzpb1u34JCz2qjCW1DTxHwEsKEcisEc2vtf8CBqkbE1UfdAJ3FgjQSeaoURi21",
  "key15": "3sBWNTqUHWsQcyzAJAb4rXyLJdSaSKXeEXvrBx71CLq5svsyDBfSgzpAEzoCRHY6QAaedpg8ZzhvS2zauEkuyAXU",
  "key16": "4CjLM3RSaJnyGWQPiurJGwT48S3oRZB4WMc68stukCHusudaXR98b374GEwmitnb4tk56ZpSZzAiNyMrgNX3ta6L",
  "key17": "4aXAgPaUqA8tvgGe14Ce9EVBXs3r3T4LAWVu2Z7bECywfdXWaserAFm8YWQ7S5zZ7uQkf7jzhb7BoXps3rmdCrrk",
  "key18": "2pSNHFhstJajfsFKNkqktSUz1Gudzsb6tnESCRwWazGL7FtRt46yvbf3owxykgJ8dZZc2sHmfYMJ2wWqL7cjEJzB",
  "key19": "3KRHuAq8LSaPFRbKTyHXDi8NamDLf1gUriBw74MyZY9drGbTY7qaZR6ZRg8R9tZALsDBFne8X19HkTxTCANrynyi",
  "key20": "534JHYZJoHE7XcHZACkCqZQh7bRg7YDi5GszfG89TDQ9GP9CLYPuKdZ3guTo5THFGW4iUBgnZKfQgM4CwzL1c2Dt",
  "key21": "JGpLaZxpkmZn8X879Zu9nkbMVAVFGz2rFYbjbyQXQyfdLqPARv7iN2o4unp89iWsfhdLkuiXcXSYhomQQkjZchz",
  "key22": "52MPDrWU4NWkpEeAU24vETQdjvn42VyLU1ZDjbM3bzkwoY7hmYqMRGJREdyJSgtvckY3MozNV7vLzCGiLo5kmCQe",
  "key23": "3bK6VwSKz69JWtCGFPn6Nwo45EVGmuX1PPyjkvLYWGMt1huYeJDy5grL8iJ9gc6vpMWQQ19WqRsYhoGPXS3YszNV",
  "key24": "agoYV3mVdZvoTFCornphtCL4i7x3JDmAwonoJhFFonEpinRUyim8PNyGtQevn441By6kZQPXFDiDJ7LpRS6wqDk",
  "key25": "NGNiJ5KLzLYBTkpx2yvaf7AXeRotXKN17Q6vp6BgxmArzXw5jMrRNwcvBr9V2x24YpxTiWN4oAo8Ga3Y3SkcNJ6",
  "key26": "5RNN6C5cC2BNxFhhJAkZ1E9kdBPLqiE1QTj626RqbERA3QbKaCPcPPYVDidJ1zPmjmBepZaKPaobukXEsjamiDfC",
  "key27": "2YPvyCoaVQdSqMJYBk3kXLXW2ifwxwT7uXtnzVtj3a4dTqP5kfhZZDeDGdzM6jCwhQftYCV1uxQgepR8ohyaLFrX"
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
