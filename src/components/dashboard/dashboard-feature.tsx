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
    "2vAztyR3vQLzd555nARheuaRbeW9gywazA7bdhgruo2bCW2s8XFmmccqPJY5ejFFJNC7rtbFh7TXmr4rwyJP9gGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s1MXrjb6UeUq8X6Fx5zKq19jaLSspwZ14wYpgJNNqhrFMCksqCymhdRF7igDUGfeAowFLzz5TuPwXv8pRKyaiwi",
  "key1": "324veH9eF6vNSxtj296Xv3YxP8iK9qMFq5gayw8FaDRiWcG6YhQ1PT8SUuWKNaVXPf3o9h3w3c2jkwbUd8LBhfUR",
  "key2": "3cgaQW2BejMnBcwNtBX4UNUJUyDuDNDLZ2VT8EabTg9LLDffNVc58RYafvipzfWWuzrmipheWmJZnch9jopwBEGL",
  "key3": "2RobrYhfbp4Jmb6Xr4ZmmuLg1mqEdWQGu7WCaGJRTN6RJcmS7q3PJsfehsMwWK8ikai5wemDxJMe24o8qmUA27fP",
  "key4": "5Zc9dNrMG4964YxVJQCJ5qyPWSk4huA8yqxsUY8VA5sUYRvMZpZXKcv6dTqLv4DadMkY5pqmDWkUTyn1kReYZP33",
  "key5": "3oWJ2618WCGKD7UEgioemfNXvjhwbBJXzSZPPtNtrPJb3GwewrYR4LbuGgBRXqMmkMEMSjk4hLV5Arz5jyU4oYUm",
  "key6": "211Q7jqTS65smSfbw6RueXTDXGhSNtuPo45v2uxo97MAmu9X38TpZt9rntfphrwcxqFn5QyWgx65P2sGVfCmriMm",
  "key7": "2Kqk2ToEr1Ro3XCgWHin84MR8NXrH8HxwtJCRUqHhrnJdpu7XBrF9JiFQrJ3SSoy4kB6s9pyofvjNqLLWGKLJQv8",
  "key8": "KE4fUsoELRss9TjHs3ZZsKfrqx7b4TpmN6TM6sHgywn4XYaG7xvdZqZKKiApFiEj9zzBW9FUe86anWEkrajXzoX",
  "key9": "3X58g6SxfbCfqcFGhgetsLzeyPJvjZ3PmDAEn3aBunYwiq9XZT4LSC25j9G9Scd4pKX3JRgmhpgg4TovnRkfRgYD",
  "key10": "2fqMr7FnyjjVnNbW8C27WTJLwDW3WsyAVnjLoCvsC1gYuGxfVxTp1PBNW7Mec5a9uiD89vTinqSgAwdoSviytQnq",
  "key11": "5YC181cARpETbuUxPjrazFJf1Gy74tYZ5sXH9PJYVeK4GwSDqgS2eVMgpk6KTTP6H8W8KcFT3ksBp466H7vh9Zka",
  "key12": "oafujk9rNXfjG6WVtYacXgfXMCqTnWLt1WfL6gurEKqzgHcQq79hULFxiMQCcLsX7zTKN9t8Kx4WMZMvQPAeriL",
  "key13": "Qpf3UQRLZBw1Gw5ct9CUxz4JnphZghNxs4Rmhqwh1LUkqD5AWXAEbvepnr35ds7ivtQyrZvRpgu7kjbSX3Lq3ZN",
  "key14": "34Mbduve5XsgyZ9XgkDScNzZy6iPV6KypKA5bXop8x6PpRgQmmbkboSPAUygxMbgLcrLXGqiJriFFYs5RdD7DmEZ",
  "key15": "3pqcmTEUpWChXNKUoA4AgVsfL5kFBtoWrtPF6sUwsA6jgyFAdg74iCEe6hef7s3y8cXace1PBi3K3i2G1NWPeRFu",
  "key16": "5xmAGNzip3YfywniuokNbVPrFKMgJqj6oPubFDZFAPYnEtc8KdXoKRBjbhdMxY1j2h1XRRfBzswJiQ8iDoyFiuoQ",
  "key17": "46qyng5HggZsCwsnsXq5vm3D7PiPgfcLv2ERrDzqBMpB3izrjGg54f7WPoPDm1ZQJz4rfBmf6GrVrob8XK22eAEP",
  "key18": "4jGKd9wZmG5LGKsq7mPDzYrMqGYVy1Jg6ii7dHLYkDJf2sRdgeS6zRq87aZaN7M4kjvqfjKCMqCCb24UdZH32L1J",
  "key19": "2qWtDUCisXev6Bk6ikaL2m255F4EnvcAdncWbvNxNCsGMfuF2iZ9Ps9a4QMEZYzmjT3HT7h2rHwZMNncNgKbcDzY",
  "key20": "2VndLUmJVEGEBut2ATJwVZqSPK1dMAB9qgfFieBbKGwrWPajtB1kJZpTFTfCjK6bxrjBmPrCj6gCxCE7tfTA6G21",
  "key21": "53eVH4tGwJ6Gpvq7quae2Q2TzTJ7MzaMYryhRQXdqptUgg2UqcSLFbGfB8ZS5GwhpnQ1xSeKPUoSjJiSE6kdAvZ1",
  "key22": "bSVieGDnXKPcYGUPyBhGqCfA9pffpwnMJMdLP73VnGC6rjh8pNf1rkVoSr3sAoZKzCrokXTtUbAiQbUKNpjFzka",
  "key23": "Snt9K1QtKv7aGptfZ9kQ7rxb7Nuwz2npB3V8KCjBGReth4ngCwTgiswP5wPVczJhzekRHvSvr9efSWBTV7jQ26y",
  "key24": "Tv8JHvuvdDpBiCbXrKMfkbkFbJbVsVjhoNNDgfkQTvBfBiWWqUrAxxoXR7sGeSYAbiBecNePEhEDsvm169QuK9L",
  "key25": "24aqaZfj9FVqDNaVDkpq1YZpbgKDxxigw8sK8dezeb7Y8sav3Sj7LKhZd3MSiTEhiPMQM3HwPK5AixkEXbahUmWp",
  "key26": "2Q5UEvz8Dz3T5ike7EBKz12KsARai9shiBvEbD6seEBkGCBgLUmTbYPXiHrboiGxhDzBeu4vokgrK6RVwi89m9xW",
  "key27": "5G7a5t6etmakYKuXEmZpCpowdLeTC29idpVWvMyd796o52UHRwBQZKYN9edDRWNW6QFRSefovxBfBjtU2d8tQvKY",
  "key28": "5sQTn4QX3o92RuAic8dTh3g8eqAmdPzEhsLAPPdHx66L392HruLPtvtSVUENeinVuwmP4HR1izc8W56NU6tipZh5",
  "key29": "2QGDTiYH7DYgWry9hXLmE6WzQVN2eTd6dFtNyjVSRAGd4nrtFVxH9gkwKdn2RNCMJgomAdeN3YtTNYMEdRpWpBXv",
  "key30": "3qER9YDLkCatgoUqgu2Z3kgHxciEccKD6nrcNdCnu3YGuw2o5eTriWoMPszoWJ6gXxeoU8p5pm1vLDb7h8yKpZx3"
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
