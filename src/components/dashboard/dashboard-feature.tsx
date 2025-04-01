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
    "3pUvMbz4s8rbvFpwoYcBKaPyLdYtvQpCNKJurXTR4MqaEpzipNkSEYNo2XWfHRPNbvqMGie4nG7uviHJtQFfw9Xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54uEmM1Hr1wbK7XFLXTxYB4pb7ADtPGn7NxvtyL3ACnEH2yjwuh8anFbhNhCZkG67d1GEhEWZGNYJQ2KSTvQqWvt",
  "key1": "4qHsg61KXav8AXQaTg6re9WM3NJ35PpsUNZ5dtRANWgXPMYfKdLu5CaiLqr5K1hpEP4xXHcxRgmuZJGag7N1iSc2",
  "key2": "VysM9dnJjpVjAvVDYUoEMieiEnaQVveMLr7Ybd3hSsMiLngAeMLThSLKWfF3fZfEBZn2KXws4Lgjraf814P6tiv",
  "key3": "4FhF7McpFQvTkxJZCUCscPHFfy1DzNFjrkiKPeEHwi1ngN2tHu3BW8KDxYvXtSZbU3GxSNHibe38awycExMefFvq",
  "key4": "5JZ45ajjKmxJXjwJPQkiDYWNkxKRtmEi7D95Q3JzAdJwQPgEsWHJtxVhWPC3KiaJrsVoRV6VEGhKuPxnoPFnAhyq",
  "key5": "4axMjpWXYJVs43QL3t4EM6wJRCQCAWQN5QRZfzT5tMdKTPta6aU3foDXgPDkTUYQX6vGHC7iNfQ7ZynjuWErT88C",
  "key6": "43enZ8LsEnyM4UxJGpoULeeoydbAdyGNUwMAdT8GPLxKDyZo8adpyVHeWaK3MreKefJ29px7gFCKQSRMoxqmWVd6",
  "key7": "3WfQPb8NumrDkRJuK45u4KBJCXtNtcZTVjBBtn6XR7o7dmNhAQ8P2xRGSvcaGuFzMT2vS8GYuHCmiL9oyUZHQdEs",
  "key8": "2TS2ryBptsqM8bu1EB3erhUJuKaaoVTTzMEbLVMUx47qgFtbJJ3B8eo8L8AtrZdraQLUgA7K8TYEy4zmeYE3v4gs",
  "key9": "4EVgtMskcwNkDUpmdZFGi3Ks7AxKp4GQ8goBqbQ88rFjZgAxp6kRm3rzVWcQDDhgW4xxkE3AiPACaagsWShF3vjQ",
  "key10": "3XR82RESW7hdD2HP3NQnuDHgcKKK5WyxSXTo5hFPQNDajsLw8hfauN2cx3argp9SsD2iaqtiG1wCbyMDco7PR9ui",
  "key11": "2WSzywyPkiY2fc4C6FQff7VSvDxHFLcgedcWWxXz8iKWL4njvKiMJHXTomxv4nq72cYSE8zG9kTQjTX98qnk4h4b",
  "key12": "2x4Csjws8m6cnXvmc3TZZd8P9o7E4ZLJQcg6peeZxirkptfornEZgVDRYRgePNEgfTpW2EXJvs9uRuXQamkzJaRZ",
  "key13": "rePBwV2QncadqkCo12sjLd1RrBj2sd3JtujRecgMBdjczSUKaa3tjuG2oVq87wUvdszrpQ6Gkqyoquq3MRYg7uh",
  "key14": "4ViVqc5MR5rbngyTSJuB4U2e26XLEzZTj3hsxJKbuBheoCLrzHnXvvjEcnWsx25stakF5b2jgatu6qDtgmQEZ1Rn",
  "key15": "43Ea1UmGPvrLQfwx2tYxxPqLqiFUC7T9eEBubNJm5x8713t9YaPScHsx7Rrh1eVUK6y7uzRHGZBWDpgJrvyj54Ld",
  "key16": "74c5xUD9y9rBM4bvbHWmDVrfQ7HdeV9ckvkFdhNhvT54ajYnPbYEd5HqMR3FoyyGcHMS34vMLEpRX2hjUZfE7qQ",
  "key17": "FEYytnAtawqA8utZYr4JUSkFFGZbmqdRAhRavgtdqrCAtmfugKtZ5QwnCAVZvscYUYMLjnV9wQ9LStCVyMvVoL8",
  "key18": "5EH8N4j4wpsiomjUk749LzASYBik9mAqEbF1m7W9oLM5T7zxsd7Gkda9tevs3KKikiEBkpA9N4QZEgocPbFWdKH5",
  "key19": "2uAgzkhXWJ6ES2v9Epm2jEkXdGoL3GvfDV6pEJHECqajuY7vHuFYxpdt2nwo87VB8Kwsupd1mufRvWbUDndEZ8dJ",
  "key20": "5KhWuKGHWhMvRqzM7rmhau6n5Bbh6HKLdq19eabtEURbNUnjyKca8ww7FBsMb7wUeb6SqymjsQX8dLWxWQAkitzX",
  "key21": "5PdSWHm4PZQfCHZ6ZKyNcRiEt7U9aSWGhGRLvTwNhNVAARXKSjG6KHcHDpwXkZo91GRfMRgqDQCxhRJLcvyYfCma",
  "key22": "2uMDrasmyLjsuc6M5LT7vpgcFS1cmy7QaU1FChgYUXM56xPsTeKyxbYZYgveoZ3PbqCSL2VGqA6Lh8EN2M4jXssq",
  "key23": "4N37mmhFfiEzwwRAurLnh8LbRjaQGxNr77yiVwxxPt1msMkmBWtUwUPN4Z8co3zKie6aDioTs9Z5v6q1prGjDgxs",
  "key24": "3cQoezcprayfZL2pzo3w3RpK7r2A8vpxsYhoj5SVxR7P5Xb6czXX9rY2Fh5wxZUYRenEs4N8KS2LQjx6uamtLXdt",
  "key25": "5yAQQvzwSxJUmEobWmQeF9oL8RJvcbu96yH7qhWSpGzmF27Z5T9wJHZ3LwHePMykHANLXQVtBszfooGzzcok4U8G",
  "key26": "26TzDozRzNSqpZV35g6fsTM2vbJoFDdpk1M84bGeoJiaeyXnLgRjJE9tW3cpJMiMvHKyyafuiXXCpgp15Xp6qG9F",
  "key27": "2gS3YDTU99kqbn2wjNgmiVB3H6uPP9KhEA4NxUwdSUAP399J8YFZ6wReCxAgfKSUnpdT3iA6PJFvXaAbn9kD5ndy",
  "key28": "2gy5JzPWFpGkZwWHFkmRdpXUuMQfpFNm5Bqgw8g9SHmEEx3aUjghUYc9eSf2HUPeztVQ32iMwqb3kKzSetJcBFSC",
  "key29": "otKWi98sRVgFqiTKDNGUG25vUUMy3Q7aRdxZ3p1WfW8PgQmY5sWt9jn7wgisHSUMoNyGLvJwP5bYZfQoQDaXdHC",
  "key30": "4raoi7uzLJyeqnrqTatgBuzddVXZQkm1QxWM1tZx9Xb6HFmbroFqgUBk6Dtg3xT99akp8MgcwdFpN832LN4KNXHJ",
  "key31": "PgNuQrnBTM2aCkPoAbBgKjqLYzBztuhsTE7wRpEDQJ2ckhJ9tUL1zzEESE56MGAk4ztmEKMiuBZSUhjCnZ2V4QS",
  "key32": "yAHBDn4UZo2FANn6MrnC4yYcJnEREZZUdUK8jLBLamZ28JqftBP47TC8jfeRSUWDnN66R1y9EbkqDfhnVvNmn7s",
  "key33": "4hsHxU2J8sJSgpXwm3FP43XjAX9PNewzWYkPUHtmSRT7CZM9p2GdwGHyNthuSiV8E82U3fATMUfQKqTtzrQuGoaN",
  "key34": "3sqS4Bf73HkbfcH7vEnthtnGj2FqwgLiQoDDUVrD8fx7mbEn2PpGYn8ZBK6qSAC4qvEadhwakqf4gs5obDf2kZqN",
  "key35": "3iXyjsYUGfgWD8CEaQc2bvd2Rx52ar4Cg4xupHkH9WLE3VaYurn5SAnKw92FaJ1M8y3BMubbeJAo8qxViNCV38Dv",
  "key36": "3izqx5gvyffrvjZsFHa3SQTb62tUfKWv9w3zpCq2LhcYcMFDRZh8YbDsk96oTKQo44t8CM4TvFpHh1C6YWxgRL5G",
  "key37": "55xcwRxZsESBhBtWVH52r9rHmP6p6tJyBdyxT77wQW7w4WCU41dA31UcBWyFNr3FiC42UDrpZA5jrF7ZTqp1XTqJ",
  "key38": "22XoJf9jzdhJZ98oPKdSrSi6noEPD9g2kw34JRVja1TzCFUvxRCvSdSEQdkqJnyf7mu2hUhrdqmvgMiqqewN8G2V",
  "key39": "3k4MM91Asw2vJ1Tty23J14G6yqWoekC8xZBHdfRxUSaWBEoWTSM3YhawU2mvBEfUxQZy1nzre3eoyR3AZy2n17uN"
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
