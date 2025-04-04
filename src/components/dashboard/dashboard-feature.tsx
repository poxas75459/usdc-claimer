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
    "4erM9r3z6y8tjAzhkppCwPkmmtYKyjSUPh8n1cNWF75GxRyFphNAXeWy4YwgxBrz2HkYVL34Dc1h9F5aLWJh4XUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P9JEpkgZU7uDEXfaPa9uixHFmf73fY8oNQvD34ZXAS6bPRgYeFw5rjUgwPNBNgVrr3G1gbj3rBwHhc8wyQwKynV",
  "key1": "3qihCRB51pkVcFJfxVcvAksc2guvjGfK5EkTnuWbTkUgoDKzga9cqSAnMimbTHAHsKJna6xGqwAhtBbFVEJuyX1f",
  "key2": "5YNy2TCBwS4Re9znjeXXoRTK4CU6dvrHccVZZ1pKaqZLQBkDzbSQrA9QDbB3CnPSDHt3zhBiWQeAWNiJ2BuL5kAh",
  "key3": "3wNuVP9LSqmYb5jStWP826xNBxcLXpZ3koXpyu4X13qCTekmPtv8WARRqLer2Ao1HCkgkEVoEeJ3bRkuwP9CNTQf",
  "key4": "5ZdUJv9rjxr5jDLhR87VY9cSHn1qfAStVAQ78oPgB2cgtTjHGiF3RX8YAbfZE6RjA57UEGWbeMS2yofgzWqhZRHb",
  "key5": "pA62sbNDKN7CH5UDRZV8V76q6NGS5BSCbw1PWrVbL1qyuisvhbg7xfE2wAy8f8Axb2yC4aFoU9LKsutqYAhpDb2",
  "key6": "mPtqTUGfGhvusuRJoQHVmS3Hv3LyZnzcATZnEXEMWDrG8WtZHCyB28LS9JGjCNuxVTuzBxc36KaDQaU6QWCXbXg",
  "key7": "3arCAzgbXTzKZcRQkCUZFcfPzmzC52td4bW4obmrQVaGXqxRiDAWMapEsb3pSmsXjWhcKAckNvZcxNnoaPbZz7S8",
  "key8": "35yQmr1BVRSGS96oU3vc6m2w1qrDyXYyYEQtH4Ajq5MykKApW15FnYpREcGDS3CMxix8cyNM6UcsHZG1JJMdNoAf",
  "key9": "h6wKFNb7qKusHYAA6SU4icvRTHM3C7cqMF5HH9yUBxXUSTwcomHyYjkq71wbD81JsKphazzHtwCFUNdNHSXProB",
  "key10": "4759sKfiXPRmueRPT1wZen1PcnWEmvqjMr4RFfuh2qm3GvrfinV6fSRhWhAYQE9rJfaXbYxsLY4H8a8t58CbGBmd",
  "key11": "5LodxcyYVgikpG72T1o8s465xmdBjaR7Xafc3UG13MHxsXpBWh7EmYvTMQ81sQ4Eh2haGrHApGZA6N2rJu31uaoH",
  "key12": "LMCfNWpGgbhCx1oGYLdv5Un7YEPeY3Fc2smNNckeJ14HJz2BfJbSsMUrx8LrhbMs4dd6vkSbvKTG1KFpNC9q6ZW",
  "key13": "3UqfvtshKVb5SfWB9xkitXirmebiHqfc5HyErEo4qgfGSrrVVnF94GBzgWTnXrGXYtNDw5Wg62SDZGFSz1Nd7ob3",
  "key14": "2rmvbYJUkgD4iCtt4aNEPF3vG5gVTBtsF6VuCPjGpHxP4KEmNYmNYWBQNEaALxsuW5u9mUbv8kdaGnvYWnUiNHLB",
  "key15": "3zd4RmKVR3jqLeUpERdJzi2h5kJdZZd6cn4qoTbbG3nLYP1k7PLXj5fqkh9yRwnUfmrjdnKzBjdpSiHkFJMmN8mm",
  "key16": "5YoH1EqwpfMLesFmtSBQeTREhHagu4aSHkMMxg9JoauEQXGjNTsDwHoXSgVjvbsvE6z8Ju1pqT1rUB5MNikZcw8k",
  "key17": "3YiV5iZy5x9W7VpkUE4hPJPGs1KfFUxYKynGxqRzYk1ZdBSTuexw96XAocpSNN1Q9sb9Y2fKnp7BV1oGEjQDiwDh",
  "key18": "2L8iMLKrxYc2hKBBnth4fqGMx3CGe3miGrMcVvpsU3ap5CXtQD6We4Vp7s3asDVfhxVMPtSyiF6nEjjMyzYKxChw",
  "key19": "a2xJSUWzfJsCBzET7Y9jRj2gPfA1DukdEV5cz8vusJYC8hH7GD2YA2GsqNu4sKs6AZzUDEoZLohtJMT5z826ytY",
  "key20": "YFXexQuBH3iJ3oBDmY49qgZJnQJ1sQJ38Y9Ch2gnYsdoyVF5ocpLGPCEWTvQq5tCCdVs6RoTq6pFZ91q89oK8H6",
  "key21": "k4TjSv9N7MPs283DUJoM2hRWtAqLtY11vDMjT93ak7mCLprPX1weQFUscA6kspVR7Gaj6ebLJGdG6FuX8VftExU",
  "key22": "3nRTfrQEb1tdSgi68VWB4NJScDVah4aZ7pdorNndNbjE6BUxPZWs5s6J2SXvhRQYYon9RGVpFqDDz3T6aDtqPHrp",
  "key23": "2BvRQPHRZTo2md1oLhKvzCjhusurJ4NTrVwVTd6q5dBQyeYCSGX6sCeVvp4RzWVzobuKZU3ktEV7Qp3yaJcpsHMC",
  "key24": "3z1EZeN9qnC5FSB5LaCwWPsbLg5mXYEh99xFd1QsmTHYdmMcpsdpc9oE9Jkx3Fap5ZLW9V12ZgGpaWNjDQJNMVsP",
  "key25": "2yeyTQjzjcGaKLyfHSm4jECg6B76ZqUTTPgo2DxTfmd2AfroyemaUHMJhpbMxpPxWKHpyXEqjmKyaqVzJXPi5yQ",
  "key26": "3rTMYcBQjkyezZCrtMiScaEAKrSJv5d5JR3pZ98gwapYU3RUh2LSpE2gaiYD6Xs9EafwCp1dchFqdrhP3aTovxZk",
  "key27": "35bJ8HsRmHyvrvpecXJaMYHCAvMkW6BR7CwxoTWhDu1voZ1YrJC34Z3tF464SCGNHbQeAv4PvXaCtsbKhHYyecUQ",
  "key28": "5qsgrP9H6f8nfscb58JYzufr4VczbHm4cQfPRroj7tPQVHLt3HLNJC1Yy8JrPHCN3dxw7hQtLuc8U6NBCrb917Jv",
  "key29": "1Z23FJQbiFm1ngyDSVaNrnRzgqpnvryzE5dUUhMfzby6j27fLJUfnekNXwi1ZETXoivKcvbiUBFKF1cWMYao6MP",
  "key30": "2QgQv48PFrBo7DQNk9FF5Z2udot5svrx9RWwtr8H3Qr1hcUiYzdocBxynNitQTcqJBrVqT5DBvzKv4soU5ojihZp",
  "key31": "24kQ9P1RFygAhMEM9zBTvKjnksCPMGN9rt7hfkS6tPdxMcQawippH3pV7ET8oNKWzigeuQQAmGRxseMzeyQ3n85V",
  "key32": "62AD9c6B5YxRskJjhZMLErgkFpz4LJbmkL7mRt3PNFVRtcqRw5oCXiLxP1sQSQrimt6GtAmmpa4PZmFqSLHYztqi",
  "key33": "2oE6qdY5BGT7yTnyPKhrM1i883GVxXMXifF6WLaWyTref1i6W8UfNCJgPmPUXSuYim5JA44bcXyoZvzrws4XrJJ4",
  "key34": "3BDEkhcAtumzxmHSugKDDU7fg4gkFXFeEatyHuHeuXV6J6ycbdY3KWti89CQNzMGWfzALZuRqrofRrDmF6AyzoL6",
  "key35": "46t96UiVdCwjMoW55c5KDZm3yV56JEVjwg9TdMMvHoJzN8gNXxxriDReyqw22HVjNxMQoSD5SXi6m6HfkB7kcDK9",
  "key36": "3X3K4LH6uVpJpgvvkAAdRfkdfaKxwNCyC97GgK5pCZsUE9p1ZkzDF6fCgkK9n6w8RetvbH7MNtKjohDKLxsnmFWM",
  "key37": "41UVxCD7utejasbjwRNaJALhJbCxNPEFj51i8Wbyx8V48M9zq5MDMVPNdpEfWcW9XknCy5eGQ7GmDpis1NqByeMM",
  "key38": "2p5yooii3HDU3Q82iNfM2dn4VqpbgywSqYxcZxQXtAgn4HKvfkAmuvqZf5uMoDkgFhXuZANxpx2Ghm7D7P87PaAP",
  "key39": "3Um3fUHFkkF6iskpmUuGBs1tLHEcQ41wL8wighzuXQPTZ4dYyYYtuTTo4BUaFd4VnQYQrbGjkUTeDNLtNnmNZBQ6",
  "key40": "29JRuzpBKA6BMxWBbJv3oKt4ZTHZN5zG8dLbaxP4m9o6ZH2c9pG31BjCcHdtqvthJqNkkgmeq1yHdcBLgUHWSZmo",
  "key41": "5FDYv994vyjrwhUGL2Au7vPmpFEfoGD9R2TWMnkAm8Qzm1foTq4zW6GyRyz6t2J383GxPPoYu2FifUhZHZ7RaMMF",
  "key42": "2vWUNu1ibcHE6Lo6ksSjmvnPe2Ep2JQYA3gaiN2BRtKmW3q5i9HNvfnXJb2LcGAMGT7y1qS81EuP3L553jZF3J5",
  "key43": "3AHDTERVXG1mACYvtxeJBuV6rfQc8tmPxFKcy9u1NPDGFcbEmyQuQFzqFddFg85E4k1DaWUNJoAJqn11yqxWeemd"
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
