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
    "4u75JsNoCJjYnb7tJboM6WAiiSmRYQDEb3kcQSgpBsfvmy1waDUQ4x4tcJhEKDGXvTvfrSde85DrEyJDKA2CJiDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28azmmCMV41Pnu6oEAi9Z2rwdTeHd1qZ95z5xbVAhjrZmMffzUx9dFnQQyb21nxb72opYhqvUCKjJrvKRaoCUAYs",
  "key1": "32AXFWub8DRxWR5Gzk1N6zkMK8vaLLwmTepLdZwnvKdqnA1RZUY1UjPf1g3tpetHHChy5TQVnExafQsxkHJMQbnM",
  "key2": "4151YDfG2Ge6Jkv16xFVZy2z7hjZwPqMF6x8vxNWLhCjhx5FwMHrPqUK6jmjQwJwNmf7iojhnRcLkEYKUxqjy6Hm",
  "key3": "3xNNgNHm5uUvqmoVr5jazambAppixx6CjGFfib3gbrX85DoVTwjK5bqN2mjaMFKASo876AqKsHGymZhA4s9ZiFmJ",
  "key4": "4wvzWwzSdnRF4n8Jnv4WZCYPdeq8WDjJkwUu6usuadZp6u7aN5rE1iXykXz74nxaAprnFbrjJaFwcBpbzSRQXj4v",
  "key5": "4Qn7aTptwseKmfzre8mi796Eo1DF5eD2S6HunFbYNhJ5fGcKFqPuZavtF3hDc16kxf7x2oBXd9kWfmzybuH38HaU",
  "key6": "5Rv5A4oDSn9nDMRRZFpeDqfcnwqAQHDNDMkQHVjN6CGh7AWepCDMS2d5ApZRYw6kavhPhymH8Bj2WYnzBzQxABjR",
  "key7": "38ndnsQtWxKrovuMCxAuzKMs1dFQ4xSMxNe3UZa8UQsFg9KB2Tcv9QTTUokxVwS2nY8irKdMrdRrEin12G55UsX7",
  "key8": "4zsUpeM8pTg4oaxz9C66UKWX7q8xqvJEGcYpCH73s5x6RpwacDtFnXahvcy2HwXsXP81B4y6Zg88Y5bLyuUC74oT",
  "key9": "2xbBiRmupnUTc9gg9NP3mqUQEp9yBRDLjiR6cx9hUREPB4B2w5q4JL5w3tEJQyXeiUiPZ36QRebwonfmvjoEKWPY",
  "key10": "5MAg9cfifeQaZMzUydH9AsYAbwWsBJXdp1isuAfXkdyXkhumirRYvqsqVyPYparsj1AYF4DfjSCAWyPqu1GCf9YA",
  "key11": "4kTHbGqFUEvUTKAGyoty2mwqTQvNESDj1JGqEqfQQUW3N4Ypdb6Fs5EXeb5UD8h1gkMyDnAm83gNuiwKY3zkazSE",
  "key12": "PGfb4KyZdwPQjEHeYky62oJLbdAkk3MQcop99DUHaWc46Q3qCELvGJypETrmtRBy1DCXCrUXsWKxzwsPMxr12ug",
  "key13": "2vNbbi9wxA6adqjyCRx9gWTCQnZLopFQBJSMcPAWgyN98twSfVXij9yZh9YQsfgZ6TrJJwSMpMgur9G85AtNgdex",
  "key14": "4xdWnvfe9L5mMbKsbQczQ43wRgU6vGzPhy14HW1J3TJWtTspPwEJ8GBGwutVAYCrHAyxskSzqqanr6zU5wZJCuwA",
  "key15": "5JKWMH8ubYt7HpsZym2rTwUR8VbF2PQQne4L9Zonxj48uxeSRpUFsyXWinTUFPtfLAnYvWaq3qyYNqHAVTHF39Uq",
  "key16": "3ZZkcopFftjXhfDWNkscLKvfbrZkhhnefndg8pC6Pn2NVq1NXc69yVTiogpPDSa8E37t2YxurS2EFYBVzR5CavKz",
  "key17": "4s5eGRuVJKpGGCt97J3sVMShb9bPCm4vwZQ1bG5qq5Q5mZLZUS8CAABZeb9sMnFKDx11zYeZJxKoHtm3iLsWgSHe",
  "key18": "4TfVyYf5tsr9bsHwESjB9uJQv5DYwtBhafxPYXVjUH33XZctFNKZYkcr5dmf8jzkTDUDnPXt8TLxFMUGrNDiMgQv",
  "key19": "4QkTo7xCQ3V9ifYtEb1Phy5X6MRvD9pkQLnKnP3x1ViRmpQCJM5w635UkDSpFoFDrTTrtyNidZnEwEMBbvZhfwxJ",
  "key20": "2nEZq1CTDpKaQVkSNErS5AaStfBTqKwX5kkxpnaRbaq3oHM8wfMBRX1cq93ZMBg2D6HDLuUruyaasZbX94KiYgnw",
  "key21": "5VFK1eTRfKhVteDCNWjGkgVoURSztTZHq7wKztPcoSFSKMawBLEHWj9Nk6S75nH6QXMoPzHhP7tvxt8F6WKAEcna",
  "key22": "5cG4i1SzsWCqFqrbHZMyiLkrZUiuVreKry7iY7MBHxsWXs5tG6VmZv542HnrSCrpZgBkJWbBF4jXv5shGpJeHSNu",
  "key23": "Wt9X8ksKKQSCydSX5BbYusnfV5QfDShqkDdjN75R68V6X34mu1kdsv8iR6aenJuJGmj8H1LLgXyW1rnHSr6ChPU",
  "key24": "53sfChv2GtsnLJ5ED1z5b2BwL9bJeAhe2TGPbMnvj1Bdu63M4Ckye4qb9bSBgQAeFsf2Exd3HNTsMHqDAeU1Qu9V",
  "key25": "4HPE1JxuUPQ8fHFo1Yb8JKk8tbQRFvtWfUmaYQjkLaVatjFjkLSmbqmtirVgCfvKyKLW6ZAdmovSb7QTcXbvhqyK",
  "key26": "2F2ooZcbyWHZnRyHB3YmiApLfZTnyTEst9P9jnxdYuyQUqC4cB9TXVQYNypFmWatinXfQNfWWfWMDeHCPFp96XqV",
  "key27": "UGM9RPFmB8kZEXBhYwCofGRk5t7jnjRDF2hf63f42s9DVtQ8vejuFamofB8PgezwEYNMDGnsQbA9VM35CdeNVHX",
  "key28": "5RJciF75Je2RX9jf2FRSBDUs1XjTh2t5qDc6MxJpkn3GtdKpraFpgPUBSh8RYXTfEWGEWKTcqrWyqKg8cXY2HhE6",
  "key29": "QKWAiY3nqeihZmJ6h2X5XyTtEqPd6Mc8LzqVbSyATnXGrvtnYoSYzsBteTse9VTrMFU9XXLP59BJQ1eUG87GP7r",
  "key30": "3sDoSgLipxhMWkbMbFcmdKW9xdmXebcT9yMMhaWrxW47UjHt69CjGjNpdqr7CQESfKY2zhMsTaosNLVSHRWiioyE"
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
