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
    "5mbauecvTJMRMnVFSMvB4t1mzaLAJmJAJ9UHoPTr6GwGK6dUD3h7vM41WjQPKc98Uk4PkbhcziHYLAgpPKy6CPJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22fNEG7Bq8a8a9oLPSV9jT3hnJChFYGE21fVQqLwaj9Pq4gKPAzQcD5YXm6t7979EK9w56pQkTCyABP8ViADXWci",
  "key1": "3waoKxioRNoa5djNGs2XJnjooLU2EsqvZsMLv3QWgauhQtYxF3gHbDD3XyTTd77p6M5vSZkxGCUZKu1UHygfeWXm",
  "key2": "3fVmM1V8NiJTkwPMjQQoo6S2hh5HE3DP7gfTzmAhWftSHdJCFFa5oVrzyxgNduPiFzpQba3NMXYLBAwauRsRrLAD",
  "key3": "4f2RQCasa1rQPof5SyYF2wV4JgYdHFJZLJ1DNJhQ5cunGN8vSsByDcZ3xuzgceWa3iHLe4SUQyGHVy5E7CPhG7FV",
  "key4": "53z6Bys93enmWiqwDpRB7bc3udXmS9LP14RHxcqAX99Vs8yAdGznvFa7GF43AeN1AazXVhBwEmdgxMZVGikQGAbX",
  "key5": "5k3apnNne5itF7L9DoXNynL1hASmUHBLZDvPkmWb3NHEngXDKpkt5JpqeazafgYKgaaQaZQ7LkspCm3HFneu2TiC",
  "key6": "4TD6jqEZnJ2mAN5eJVFkezwsQpqpxn5qkZL9ymQ1MnMrCH6hv8U6bB39CSUmXM7wMPXauqgnQ9rBvrKy9kq5wUUd",
  "key7": "2mf2JNToKXTpSE7GcJsAqxrEy4r8zWSM12o59MC2od8xQEg9v4XhU2M5BfRDSJboFfemr9YLxu3QSNuw1NcDQsBB",
  "key8": "5ZhXzM7s1aQ7sJD74vt7rfm3DDBzY1EaVWmdTnZk8iqSvQiep766dnXda5YDefqQbhkQQQh5iehK72MZmMLSwm1C",
  "key9": "4ifz9BDDwV5mHF3ZCXnnwZmdyYjKjmQKzG5Cws36Vggj9L3Us8ybgo9WgnxrZo8Cih3Q1koVWHooUZ6MfSMdPszp",
  "key10": "3SWf2YMnv1WJ1nesc13wDtRLpYvRnWZhR9DfXgPcWqC5BKtKD6tJnBdfPTXq8jCB9osKQu48HZgcB9V7RBK8N9kM",
  "key11": "27DZxwLaDPVYUBx2gmwRHNau1HdDFs5up9SzaCFx5xECRFqekTGmBTeru5YcGTu42YqpPqKgut6HnJKkfUC4hGRP",
  "key12": "32kKjwgiuMyDp3hgokgMLvMaxKyYd7mVJzPCKYjPHWHNptxVVGc9KyRm2WnQ7DeU5WSdkRUP39LZu2ASWRHyCmdb",
  "key13": "2RcihyhKfJuSgmeeMxgbi5BQBtpXus6WFAiFT5x5owvzpoorNg26VHbULVanYLkR58T8qUH54AzACsrrBuSZbX5B",
  "key14": "qmRmFw779AuYFMim2JFkMvi7xerpwsHigYs2a5rYPJVnEaTf1vhfmALrmVoW2FgMV3R7tf5uKJywBAMxMiYMyWJ",
  "key15": "2rJhHaRYXn4LotfCk7gRy9hML897DkVG7PozGUjAzy4xSFiqj4ZYELUkidbMRgA3dPsqJRs446FirzMZtKrWzoJH",
  "key16": "1j8wtjNcrojTtbD1N9bWx6C1yJkAx7krSQSB1KYdgwv81rW1Y5SjuZKF5hpK5xDbDMwgEWbah7gtTXyjem1dKhP",
  "key17": "4VqNBLSrqgdVHd3JKNqvRPdJciVe6vxvkvB3ReN49nozys7xj4D9z99G33ALLqJ9QYyM4dtBAg8tTQDGJMnkbQdZ",
  "key18": "gZhcqVbspLhQzRduUPipKmmsr9U4Cs8xUC9vdJuBmPt61NXL7G7RKJ1eHYVaBF8US4LknXsD7s57zJ65vj1u3Ef",
  "key19": "4HzA7nUqaKfJZJvGK5RcAPsgkaV7YFrz8gwpfiJywqAFpUHawCChgZxdasWHieu132qAjDWChfue597RH22nPJUX",
  "key20": "4mxCXcVtMcDPA11DbwXeK1utVNNvc4HeCVf71VLtZUbTLguhmBbBYKGvGZEii96LKSLDYvZ41mXjh4VJsAv9bdWW",
  "key21": "2rBpECzWkUv6DkTNfQBukygTQHURvibECF7MzK4uN4Lt2fzy7juiY8dcoiUoVyHRNnFum7CnETjoMfR1qDLSskVR",
  "key22": "TMr81pTKFdGuhkyqaXk5LxULbArVcX1eMnH6xQykTVjHwGStb6t2n9DQMssnQFuYTjGCQxh4SZN5D6peprMTDns",
  "key23": "4n3vRwJ8LSm92CG6GxoM1XY1ymqXGMy3EDqgHKrzcJPL5sBYbJ1gBv94XfDLUrHg3txUBCwThyBvxf2q3p47deqe",
  "key24": "2aifQun8qC2Uu2rFmtFnMa6PHpWaFaMaAL7NUG7f6v66i1B9oGVphVjTnDNZYSXAz2E2dG4ttNP7dVmiaaR8Nn5",
  "key25": "2NHcZ2PEdixE4bUYbi5h5tmKdsBs26DpN5zoMcXqkFQaDfaQ5Y5vJY5Lj2jD1EfUBzE48NgeZ2MKtEyZyrdvTeGh",
  "key26": "c7D8B5xv993MLjM4jG9yqkrcfLaX4xx9JQ6y7rPdQ6jrNif37p3MV5LmZRvn8182YfdhfSe3qYgMq5BaxLg85q1",
  "key27": "SM6moHeHePbwZJG4CVwSvw2GHrRG2yRB6w7To2jxkA6yj1CLgbSQkHJsQ93WGDkxjwLT24m28kgC6ZHAzQJmf4U",
  "key28": "3ixyDYLPky4KuzqpHnggfcXDqZAFe9L4pxHw7sDDEXoGYgmmcYWB6u4whZ6V243WqGXu9jUpMHhmvV8cTC2zBHKG",
  "key29": "2aJbszNCeYVmQdGV1Ko4CvYMBtPLarkpLDinERzcS2V5y9S2a96q6S542Zgkcjq1hMiwPKFWvBdUotrwZfX3SXXg",
  "key30": "5hUyja5TroZvy74HaaFUZsX4RCRGKDEsXAxRVrrk6NwFBsbe2S4ggnf8hS2F9uKAuWyQ3wrTUv7RBZi71bxuMpLW",
  "key31": "iYsRyh3VzM78eAJv7MYG8h7jtvWWpnaDuN5WEpvwtuEXSmjfhyYg7Pgyeqt4ZuJ81YCiXSenPdfqpqApzhPZwgY",
  "key32": "41j69VJhxgJTFB5npKbJLUJwcY2n97tB9PSrom8Up6jvzrD7rBVvNFB9hCAeaXCeumMuQHRwrpBSbrS3f27JbNau",
  "key33": "n4AuhdViSygnAvVkLvZzhVWsAPaEgeiSW5XfrzidL5qQtfWXgQo3Nid4cUYW35vrt7rtgLT3EbM6ns9vNkpptPy",
  "key34": "2GjHgLYSUpkyrsQ1J2Kjm1jTyewPsbDrZgcdJbweHDTtc2wTQ52GdHEXxNLDnM3r17wYw9ToeNNVc4K1kYzvDzM9",
  "key35": "3pgAyyhzE6uEMpGj3icQCVeBVBVXTaoMjEV5fFei3BLwGCsGmUsUMKh7LQLyzzi6d5ackre7DiaKNydeEHiqrZmA",
  "key36": "iUyVpjqCV9RJhkdjSACRv2ka7SnBgebx8jGeYCKCa6dqsjfW438uo6sff1khEiTPK88AmP7Q5q87ZLyrmxa35yH",
  "key37": "5F2mCv2Fa5CzNgADGXQwxtdZTM2gpgCK7MnjLDHPPPmZ3KnywtEjqSrm6B5eHVgxZNbBCzUybWzbD6fHRTgs5TzZ",
  "key38": "5AvszyUBLqQRp1QDjiZ3y916F9oMzecXyuuT4gbnZNS4Jk6zfHBrNopNRbDsWPLvbRyiq5xEx6CZDsmL256vr7G",
  "key39": "58fUYVbkVPjnRHcTEP54qv6cXdBc1CwS6H6cqYFkKDfob5m8cQiNSSjhAM4AQ299JSrZ2D1eH3RtYcUGGTj7bBrk",
  "key40": "4o9t3wc4N4FoH7r7f53hyevSC9PFqmgxnfoyPPxYFNZf6Hus9TaKaQoknis6g8AuMf5FpovfyNaZUDz7yFqf3FrF"
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
