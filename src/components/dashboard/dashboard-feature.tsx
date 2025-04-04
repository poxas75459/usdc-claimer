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
    "58q3LGikAQLmXsrxgWeiAswwURbuZyjFdk2ZVvSByBAUT33qFFEQSowXDjLo1BDG1AKsV3sY7PbvghYvZco1tDB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mcWW6r536xNhzfdvC7hDvwznvhqhEPuWJqWffJNHCscBCNbhtKhV5JgCPxh2su2uUay2e7iF72an4NEewY8d4sv",
  "key1": "46HSYebE2nMMmKpGyBUN3YEPaLVaZvFdrU6d96QVGHH65QF1oCufBdsSSsrZ37xgTt8NbcnVfNwbN6mswaDtYHZ8",
  "key2": "KUVNdh7s8zUf8tGjC2chyRrpi9mvpcCGCBamQJ3LDLeUNy3VrVdHrHVFsALtyS7co8S9ocEDom6Dhs56d2K1umr",
  "key3": "vgqdCsvtn6R3JTn5wUL9b7QQKzLfyYbekEfY5hJbB7MCyuoNDyU5VFTWdWGyGZUcmZ9PHcgxFfmi4qDhPpQMNVx",
  "key4": "3AKRDq3MEFzCmf8m2HiTEambAm6hGmEhozRAAD2Xzk5QVYpSgrsGfYdatDLxEJxt7nii8nxjUV8qZEM1Lv4JBDF1",
  "key5": "2nDgYxTRrA2K5DfbPQ8FsVnxNeRjKE5k1VfHqr9JocUPpaeJSCY8f2d5Ehzb64tqp2Pbo9adbfKkRpKyEpfAeui2",
  "key6": "ocWKFrAiBnGLRyUudETL5pgDTZyG2rVvnYRLCsFrwSW6taztH8XT2RKAnPTzdKpgbqUhPmFN4U8BKc8xqL9hC6J",
  "key7": "438sM5VYKn6tic81b253qzd4friuiFWFxgb4s22bHxNX6JFUasGwDiTMLGpJ8H5PeyGFX6ELDAY2pXihLcxuuwX4",
  "key8": "5JwKBLwZd5h3uwPXsNSiKNABNT1XEh51ZwcFmwhKmR4x8VMzLzZGworptYB7VjAeZs8drnfbUN27zXJD7p78zswM",
  "key9": "4Lon4qwBJyYk499QVNuNdRFLqAYSt4qzpcGUpQuoUiUJMpkCvHje674TtxmNaJDZtUbQBN6fxS3Cu4uwLDBLfCua",
  "key10": "4a7o8FdF9EE5BvbQwXUZH48YbE26bevBdKkZVemgSihB4R7DKRjyFeewyhtgUaJNB5HYgKminzDB8KZSKrBtUYuQ",
  "key11": "hUem1nD6uqJ3jX7s2VJJLwJaywRqUUHUTF9HRHCC6bnGN4mQgDCfmP3SxCvvJrvoQ96GMweZ8mRWRzQiH3vNG5n",
  "key12": "nbwPfPDXF2aZmb6JwYyteLiHykDXxpGqUFgpL6h16Yg5jnrTp43uzBbrStL32RaadFw5zkxL1hvayi3DJ8yvgCR",
  "key13": "4Ci7w6SABWEueHcrfkGPwMM9sJgfuJezor6f93B7zx7y8a7wR97Kj5MXQLss3UXY4mXz6Dr1ABWzCUoKHnqXhDed",
  "key14": "xRGUqiajVcRcd3Ja2rgcZD1tXpk1r86hFF7xZqX6ynZXsZW7osEt774e7LoihjSPda5UF4NQSsht4cqrcEQgEnm",
  "key15": "5No62V2p3PvY7FDY6cthUEW9Y4zPdyvBmne1oDy5P93PmvuDTEW5z3gCUaPNp8sv2YxHWpEcaHvBr3FTRAz8p6sc",
  "key16": "4tc2zxCb6Fjx2Gt2GXJYTChxVrnrWUTNvEXhXrhCZ4YxJC8k9ekBVCch2mxjGXzkqvsp7YEYqfNtdgCf3kHhfbTH",
  "key17": "4roJBovLxn7beZ7tG8yLQcyF1QGSnjuyaedDZewVJQyHWXbkAzvMA8uhpSHB4dCs2k6LP9s4bTvdPWfQj9Uv7pDV",
  "key18": "63b934urjgFhf1CwdW8sX1rS6Dubn572DuLSkd6W6wejHmD1HHy2BS7QgnaQ4tkLmifzHtppN9tn72XeXBznUqGh",
  "key19": "HjBTjQ44bFxjMrL9hk7RK6QpK8h4JyXt5tm4eTKPdtmStqV2ACRMgGPCPSKxC7Fe8tfvCUNEguQ3yjVSw7YDUou",
  "key20": "3Vs1WyWnN5M9YjV3QoEZwFawp4TPV3LB6nULF1Up3x9xMKHXQLVfZAWUsv9LVQnpzg2g4PPcNY1GPDift572Hg1n",
  "key21": "5ePpNkWNudYq2trd5VkhLSKybE3eM2kC9YkJkfNcL2fWw3EY71WedLw52fnGu6GbgVNbrcZu8ZCWaGgrMv1NyPQq",
  "key22": "2bZUDSNA1hbTeqRDPqbNuZ2HQj3LWMoed43PJDN1SJ21Gndzesh9VrkHzqnphQxM17Loh76oRGmJDEm5x9cuEjCQ",
  "key23": "4cdgzJaZSzPdecUN5eQTLdRS13s8uWJPQoAhZCJFGsd2PMjJbBGVVfvZhL738sgK8576jwNusAam9AV45NY5XUKN",
  "key24": "3g623TxNtbLyqsvw3hBs1S3k5NnQcgQmEcWPpxbhy566guDton6z3iC4tvydGTJZAV42Y3pQeh3WmSrUyxQnWvqN",
  "key25": "3L4GHK1khkUdScJNBSDYHJSXnk4vwaBZ7Bj66EZ7PpT2NjUgMmhAKFnWfjGmna7BGB5pCxSeivbQvy55LGAmMBfy",
  "key26": "EJ1S48WNsie5B1eXqH9Hpu6FUCyv3mRTjAb5H8x4gCjKi72ttpHkpPHiVMwim5roAe8KrFBxYvc3BT4gpyto7WA",
  "key27": "4CW1ARTeNJ1KGy6pHriFTPjbpD2LpSGq6qNQ4iSax4nFSXWN1XjVtCzPGHyrsSGPPVeB8yeTexZ3EL74ZurHwZat",
  "key28": "24CGWVn745aN8yyfYvEcEu8w5tYSXhDj8tttu7ap7osMa4bsVVBCeYwXRsx4JW6cEFf1swiXsA4yKC7Jp7kawQJY"
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
