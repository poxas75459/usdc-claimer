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
    "xwdkGKno6HcSofS2LXduZmrhffmrrWgwyrFdifmv2v4GAvmFjKfuDXZAPxYFKbCQDCpj55NXxGUHzLhwuNAxYUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NvS1gwDXyKKPkupC7skhqTX9uZ7jiHocwUmWvgqB95nmbxLqwkak1E7Vo4iHjdfiMr7vqxo7CRPT8T6aj6pdRw3",
  "key1": "58WHDTueycNbJYK1w97t8XywgAvSuZAYC83Frd3twBz8i7qqgqpJseS9zaSewMA1eeaZCr3awx8KYDmYPXvmxVUt",
  "key2": "4pmkY2S9MfS2xKHXM5J1wFw6HydoCYC939r1TP2G16ySMWKDeUkMzy2Aae3AwmD1HY5xCN8damto6yResB7t8k3N",
  "key3": "5CvKyTPmVFfBCnMiAWHHBvoZovsLH52dfRwMmS126dkHFtNnfnYJpJxbe9DronduLTwDiUBGGoHD6ecwJ3gjLxxh",
  "key4": "38TWNG2xgHRohU9BVSemJybEoMKcsXjnETmDGnpab7Amv8cagJ2yeu342xnsPQKhhQnexKetDZWAPVuh1eP7md7L",
  "key5": "274o7kwCTNMNNsdgudYAtW5G6nZTCkSNzTRY6B4WGsj1ZxHeUxYWWBrLuvhHgeuLee7SKVE88QxMgKww49uBYE4P",
  "key6": "4fQonuTTt2qZ2AiKnt3UFRmAiv4yoQ5a1EgqnQpeiP1umgKK4kuoskoYHDUCbRjd5KviLn3rFfKuBmxmLTtkYRch",
  "key7": "3tgsGqoMYEn99rpZim5YSKkSo9j6XQfsX2EMQesFyb1RTX1x7xFTJo94mKU3123z2tJKKoyVtmJMcCNyuJk3u5Pf",
  "key8": "4Juy1LEQEWADDu3x6fYoYou4Y69odjsKGiL7PiXWummJPXwkX44Qv3G7pc1q2SsrEzY5EemSqexR1nHbJDeqT9Nf",
  "key9": "2LiECs4uqvj9WDhgzeZ3EbavZfVFKXj7nhnewvdph3Dg7DYcfVPULZzLK8p8Ltq35usuUVEg91sRA3Dd8j4n3Vq7",
  "key10": "65kapdQjr2M5iEn3gjEV1p83PDLs6qoMVkPmuJoNBsTqcwV5Qrbq2Ab8VMzovphEMaePfyFsWsJNUC55NNWwMsZA",
  "key11": "2FTzA49PMMXGgnJp4uPmeWn6rz7z9Eb2HcPRmV7arv4Hikp6Z7oHwDrEtDrwRB1VPghZSsZaG9K1Jk8ttStAwWNk",
  "key12": "39GxdjTwvWtzaoT4vqQXmk4bBKJdymdXdyoqtxyKetrVYHA3vW71Xf8ypGSohRuu3qptWesuSqbZSWjFbpp4MUZF",
  "key13": "5Vsy76Xq3UGBZ7kLkk5SeEs9GsYumirWpJDJaGVBzQEGMpD8nLS9BJg44H5bQSvPTSqG9pN1uu25jBovF7842g3y",
  "key14": "3FU7hdEHDBhdNqsiRjUHkBsAeBmr4L97jziWyg4SvGJxk54uxMr3C6GsYW41HbwN8RgbjRzjJpccLE4ETYUVu7bm",
  "key15": "VqSd7zZVjqcuZkTVVtd8MGpAZnJSaaMZodRn3xUVr17w1TRViXUhWzEsBAKAa6mMQoMJx8Xavr43ModjshNJT8k",
  "key16": "2cCFzp5GbGcwE1MYaKJHKGhfyPjZn25ofW6WtVgXWuobLtv1QkKKQSDXbAgz72Uu6PCfcpZf1fQDFeA2RTma6QMs",
  "key17": "3K9rMn2sqL5oBoGCdZ7uyaaZrsir3Lak1LfQsgCENBSE6LKJmR9RJ6HJiDdVjXSFsRC5yDksHBECSeCtJyAARtuM",
  "key18": "4T5puwcLUPKnFMGzaMpvWXuHmDZutRnK7M3r6BxeQB3xeNYJ4DT6VYBzHziNNhSEqnMwfEC5WFYQNDAWvJjPffHj",
  "key19": "4v7uVckCZzc53hng2aHgDMKzx6BY8ZVQXQkXBFDPbaKQ2visPBBpKHWhm9Y3rHpVoH1Uh3XJHvsmF1jTvi7frk1B",
  "key20": "2D7vFX3VbYWE5qbvuLu2FSSq8S7Nxh1g5h3vdsJHANuNzbPVWgoijb9NWdrMqBPNP9RMYiL6YTa4gnqsZdYALFQH",
  "key21": "5AyzzZVJUKounM3nrBoFvV4Yj8bHmR9fZAMfEhAYjHR4NginQ68DpxqJJsE7h3G8iraL2v1uhdK56EiJ777XSgKx",
  "key22": "5Tnfn3cFt4m7moT9AjZHHzMFDhdhCbq5LW1Nyt4x6R51wJhcKNaYYAnaFVfV927HiEUA3xj4ZzorrwXQA9XgJAy9",
  "key23": "3pBNw6AfiGUkzbob85kMeguKcXtW46Uf1oJQTFeJCLW7pqLSXKQ6KM5m9cmfrgWhDN6U91nChhXJ4NA78kxbxjrY",
  "key24": "48sZuEaUEyNNjhNwBx9yTAotTSrGyC2XX5c4r58B8sJ3L8sr5su7nf1DLCQhPUkhzCU92mXy8K1LuY8h9Rv3LmA2",
  "key25": "4WL9nKbgpYUU3YZrK3wJPmX4ErkXWbR9ysKi3bGSUwqofDCzHccBYsgzSc2vMPMmMpT9oFhppuBiCiRyHiEAGx8x",
  "key26": "3z4ZiBWTfkbjtUMkNn3QMtrApXrjYcJ5WGgg4LsMRQq1K42Qo9J8PQknAFrAT9jVN2pxFjGUBJNGsH5zfoJxZUWE",
  "key27": "5EniBhwYFbWD3Y7zmCVH2bHXokawgdmqFSmx1wR286oTJah2t3mC4A3K136xTbrLt3KQUkra6pAsgE2ucMsW8f2w",
  "key28": "2zCFEASdtXHnBvK5dioNSV4vv6PWxeHHVNhU9dSaZdX29Q7N9fRhrMSpWwHoXJWm3rKRdi9Z6Mp8w8qyHoUuNBNA",
  "key29": "2Foh5GpquRBwhJv2HHeaYXmPv7Cbnddr9KfLp5U8a9crufjMmcMzDnc5tQ3ZAU1hZoc7S5xj3W9tjmVpP3GVzcAh",
  "key30": "3YKTPUZBVVdDEnFcDjU7PnJg4A4MtGeF5dPJhnLBw6MoyjfTaWbTE1PuMx4StMBAeZ6N6bTnXtmYr8e9jjVYaAo3",
  "key31": "29tDXTEXgAqK9tZtbwXc1nY18jsY5dVZrkApvKstTTsEwLuMwp9GP3bmcSRvz6VZDika99UfyDKnTHNCjzpB7ZHo",
  "key32": "4pnNfVngRyaBnjPMPpMNvfPjyhAVtsoDPcERwY1zpmPwqpkCWHzJedZ2S1xXHtKUM5BreAE8gDbdMqkuiCiMM6u5",
  "key33": "4utWzMKRNM6kCC8anDea7iGuPTombCtpcJ66ovWJST7GC1nNCpsP7FBNhB4DxaUUroZWcWQpuh8VgvKNFdbEMvS",
  "key34": "2weTLD6ttGHcwPa3av2GbVg3vfYHnsnPjmjJ3v7GRsC9pnMa3tmZkBuQ2hP9FvqqVwyAxCDoh2G1uqdZkjSJ178z",
  "key35": "5rR3SakLeYrKWAxdvJhULufkSKx6is352Ye5M6w6yADmVUeYKThGzfqgCYMbKhWPYcP5DGHiytpWCwxNxf9eRB6t",
  "key36": "2ZENvQh6R7SWB8yw29ZyurU4x3qC9gMcG15oaYT6gpjBhAZZGVuzW3WF5EU2uFp39qeiNmjxKjv8YkudtxRYUayy",
  "key37": "4BN1iFMdv1ihmKswukSHrY3fBUUiLfPwLGCberi3qWCupYv8gcM49MLwEUm4kq31q4hUDSiJwAoKbAcoiRWfZshd",
  "key38": "LuyJGSP9xs4KurwcxvnhbawKdMrRcwznq3isfsSh2YzLyWNrZ9Ax5g1or96bPcp8yXNi8LZeM9SJvFacJEQ9yds",
  "key39": "3KTJXogkkQxc8wWYboJw2pzQLHfsk9EYujj3vknkhBW6k7mzeWTRpS6eoLvAGMWCvSyWvZBE2nUktL6v5suU3Ae",
  "key40": "kYbsgdfQMHhR2yvkpQ5Jrudv9qy7AJEjzX2RKGyKbvHYMeFtaS3E658ofDPW42RwXhhu9SGE8QGeUBxVwGQpVEj",
  "key41": "2qBTe2TPkd9bbr5LkYDiGECF4N5dVRghbptrxdCN9KameE8kJG1VvfYqPkQVuUGNCBgNDU2anT2AD8cFkV932uDM",
  "key42": "3QbjBJcHDBH2xESt1yJL4P9Sz35ryByn7jEJd1p7HRZMcMHArvMyUr9Jqgv5ENMeuHqSyBuGDU5i88kCxBTQtRXx",
  "key43": "2nAu469JakcXKg2CBTW3nCSx6pLfwHbXB3V5yYHnZgVY41WbP7iAcXNXboyk8ANtyVuPzi6mC2VAucWfV4WFsp9r"
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
