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
    "5wCrjGtavcBef1EmUyFmFSwFzDNGApCcuomuDtshXvBkxk2tV7pS9ad5LqBzrxRj7v2Loav55voEqUQzQQv3pz6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hYWkh6AGpWbQPaLsFR3yfY7S6UVyXAZKfzafqVzHzFqRsutN43E1iSXfgUYQweoxwNBxgJoRd9DHndnyvBMYiSm",
  "key1": "T6G2nFnjXuVGWQaFjLLRcKk17e7k55qVLdakxmw92tfTTW5KDmjxTfiayBzCFR22csKVr4ENdjAZmZ6mLhHjmGM",
  "key2": "5pBZ4pyY9PT5tajrTd4s7yjdcHb1pWVzAuFuRgP5CkfiMtRbU58vtD9GVHEAoN3NLEZksEK1cnof7XY81BCDTVXb",
  "key3": "4apmt9MgAotHdFgwe8ArwHuRVwBfEPFMGqgxzUQD4LSDBwHmeCEwLdEvN3gEiWLoja1XvmFrHA4YcCHGuGwbLKwk",
  "key4": "5ZUqPg7ETaLGLCamXxetQkfr9fGUXpi8Y8AN4hht6PWG6yQd9kWwHPJJ5CCXR48Hp9xoy7r23YoXD3F1skJyQJfP",
  "key5": "3w5rWj4pXTvxDvM3Qw2Hke9ZAizC6JcafGQhokyM4jVEQcMw8Rzbyejh4aa8B7XmPMYqNMRa7prT63yxaY89TKvZ",
  "key6": "4hZUWrck98yKCjYWatjfAARc1cpGuf7foWChUiSm325UdHWUzt9zWPLYr9ApthTWhewawNyApQKFswVbhhpohGzH",
  "key7": "5HCPsgdXVxMDMGgiyRum8QG1tsqAkRAypeC5ZiHuveeUZwDS7RZEsj42CLY7e36rTi3u2qPRRmqD72UvK1k7Ye7F",
  "key8": "2dNTkfTpvwfgANCo4gYLzHiF1nVLeeKTtX5vCGgxkGVY2uFCE9y8GPqo5GsFmSCo3xz1LDXGR76N5mHHNcW76Tko",
  "key9": "sAiyKusmD7qQkQVxts16RYyFaAtoNSXSXvBBa7pQ1kS6rzNHFiKWUmikU7r4ddeGjsr8j1kzKNk1ZYseKYJ2a6Q",
  "key10": "2W6fu1EyMtkXv9vVdeEf6TKx6RCAjgbbNTRkQP9PqjtJrH5XvFA6P1wwkFmu8UmjhQnTxFsE8xpuVQbZ822cn43j",
  "key11": "3xT5DKtux2uT6qD47rBPF4TyubNTQfDqYJ6soUbcXLYNkf9YANLu2LBTU8SQzJDMuor4QyDP6MouKTbusTvqEaZm",
  "key12": "3e1ZMtAmGK4WhvGYrF348e9F7yHBXARmCaqzby7pckfUGvjJwcRvma1Y7Ne1xZY5UQPKXYSvy9Fgc9tCcN5nDVx",
  "key13": "HffKEFiEipE7sQmDwGftDScSqHk44uv3LJhSfT1R7nhfTTzKqhFzUC1mm6WSCW9rAtiLbA8UqPeqPnEAUCH37W8",
  "key14": "2DmHKwxmZD71gNWVy5dSmnsg3pujuES11oG349EosYV9AzEEi5aS7nTpk9ehd5uzhLNYKTC123Pz2irHgrVBsy4P",
  "key15": "4LTSE3f5zmyQ7pQ8m5Tf88aQByAp7FywzdffvtNVyGA2j7h7pt3TtKsAwwQXJAsMHuSEdQ1xfrtYL5xKyF8uvqB6",
  "key16": "4A9EcDe3V2n5uTFWikDAv3fzpyQkjGRUgzN4LzYjNfpZ1q7V9G2YLqiFXzxQQYtk9u43ZQ8S7jiWEKnWLxTwDZCL",
  "key17": "2efCkKXpeqzeMaAJ5UnuXxcoJMUGdpHW1v8uuLeCA8oXRCzmoFfSJh7Nfy6s3UwgQsuj9Y3jCYvFyxyM8AYTCpdZ",
  "key18": "26831msKC4shL66iBh2rJwZkqMUU2JriXwhjd957cEp7tcXFa8HZ23PyvHvgdXoMHuTqoyZaRwQzhTYPnjVzHS9f",
  "key19": "wiQ8Ct6UDrhZuPpVXjoZMiWdju4BHCMZDuVR7C9iaaotLkRCi5yoXiAjgvA7Rvg3zJcywJj9zgbnWeVKLmdqZgm",
  "key20": "3M6J4kxCar1bj2bzYEtxKEFB9iFDUbQmzuAhF7Uo1Ba5zidFkEmUeHwj6zNwAvwfNTVsQUkivURP3ETFcYgs6Zk7",
  "key21": "5jYB24pi7GsyjPP8gXzwnpfa75znfnT8h96gkc1Us1fRDSvGd8PbKX1mrw7P2BTrRNfnxygaYXcBcEQAE2uxgz3u",
  "key22": "3uQi4DANjeurCy2EWj2Mx4UdWoEqXgG3LgU3Ee7FPuWJHna7CruxXKLYyt7JYBgZKGxi5RtMWNS9FEdB9tYXv56Y",
  "key23": "4jV9DPYPJ2LBdPYH9w17AS8ws6eewQyDDCZaWJ83ZJWfsFJKYmcXtAkETxKtLQNCPgirXhXYoBUGEpExzS847LSm",
  "key24": "4qu2JnvdP9YvM5tUeg8d2DKGeNfySewPqyJ8gAYgJbw18rrJDHZEJUykGi6W1pNygy3aXGvGJHdn27Yy5Cuu3PUi",
  "key25": "21r62S3Sz4JiuS3tZ152uaHvLUAmj1dt3rUDu1wj3GtaZn6qYQ1zQWC9ksrwABG1ST4baB3cGbccUsBNtKuGZtJt",
  "key26": "5Dn9FK5D9LcnbuAzU9zDJvZuGjjdQ7pPqZorDzvmYx5iXBaSFRBeFxEoUUvdvauf7RqfqbZsAVfLzd5uEKKwaoMN",
  "key27": "62NkUgxAE1qk6PEXRzU5gsgM46ZXpKnNjQpKwE5i8Bd3uqgCp61PmibnU7ixSNtFs26JA88853sSB2uDjmPHauLk",
  "key28": "39ocVooCpVKzkLLsyg55vQpdbp2gchfpPShgk2Fie9hXxpmWNJMu8Qo5nWqUF4KTTJeV7m1e3u4yGjFyZa95XN1q",
  "key29": "3pWsjtEfrVJHu8vAErsxiDq6pCuoHcw8wmK6winYEcYTgP39fkkHG5ocksjR9ffMffjh4xoUk5zqeB3hbKb2noZD",
  "key30": "5c8uzzxVXy6Mc6jFjxiheChLWTa5UG3tEL8SrboxVnTaNnR99yvYVT9fvn77XT889pPnS7TLyVcsEDRcSVeyWJbR",
  "key31": "23MWQUxj4o3qag8sJANApAVscy4cYcD4bqFe4npGB8LvHDyEwfgDLnmEzA7U2Liz484HhFS9jJ9C5v1XWvR1oT2E"
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
