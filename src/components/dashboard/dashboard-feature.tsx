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
    "48fb1iwzE2e29SXp4kiwZTWJDcKyqFmrYXbE8JQwJWaZi1qCFzkP1NCc34NB2shfNr2TFhaYuV85TDXTucsRuYHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Ai9ap7UiwGjYJvUfbB2MFGBDJyQwJBYKm7reERrJyCqjTT87ZWapeiJckKTVXtU5E3eujuRrj6Ww3nprJE63QP",
  "key1": "5HHHsS5e4YukPzNBFZByMkWdej3i8aUjJJ7mb5yLJeumnurKxjyAc6oW6RixASmpS79AKrJBWJeNatYr8k2gwE8T",
  "key2": "2dWC74BXjVV2x6ZYShXySbvSiXt3vWeWQX2byaX56zckP7B1P46qZvxAsaCvmeDZxuVqVYqhDuKr8FJfNkUtnMVn",
  "key3": "SARNECA8kRKy2VhneSvvGHU5pcXfRDVzwJ6JAHF5gMNAKTKaDt1GKoYJJUHdaYxK6asJgfDVmcMTraqja68WpoX",
  "key4": "59gW7oRP7P9JtvTDDPqTMJAPVeRw9Dza5XEwVPo8KQxcbLEAkTT9EuST99S9bW8mXpPa9nvix4APQrhd96izzEAV",
  "key5": "5pXE2bJvn6MvJCR8dazLNQnymrddwFRioExoaZonkiAGUi7oQo2NUpRkwmqPSSw8pi4oy6BbFdbt2mQa5bCg8a43",
  "key6": "1HTMTyHAmnQ68qz3fBEa6YtQjVAYmcRsKPZmTdXPBZAFJMZrAtDHzMMRRYjiVipuLpyNTsrUKzLKTfKANs4JWVh",
  "key7": "hufEhrk6wGGBjPaWov4tWfWd5LHweCmuEBehbBuKKDRvoXkRRTgwK9ADyQ9PmefDGnae8oDXJGg9HmW5aM5pUFF",
  "key8": "2zdSdLiSJGwbKxwzuM1TgB3WVHjP9Lw56uVVufnGCU61WkEgCAoT52mjksQ8L7bNqhPtfwEidXJkD31EpodirFZM",
  "key9": "4Q5D4NjHFbRds7AeiUW37kx8CKCMxEpmoQuVesWR8kqWPMCNDafbPV5nnzKPtTM1rZN4NjbsaqvDJYYH5GbSbfKc",
  "key10": "29ZgXjh5iddAsGdM2pEKvet8e1i6qTyyDFPNxFVXy6s16eTQ1iU5ctv7drbWhZAAJYKVdZj7BYJLJDM3u72s5nfc",
  "key11": "2T4PfsAhr9S3Va3SM1hnttjbEj3Cqk24Y2xfZgYVhKG98vhb7ccX2hGadBbzKqopBUGZ9jpkUeb5dN933hyugEHh",
  "key12": "2wLi7nC1W6YDMvYTQkbJGcMVW6fgj9HWmt7UFHxE9E3S47agQDpywduEF4qQZwrYDYjRR8hS66rBQUMavMJTaS66",
  "key13": "FFnJ3o7H2hTgcr1R8y1i1nmJt4w6K5VtF6BtxTC78Gc2fSk2tZA6R3oi5TAvxLMNvyMUxVL98ucmqfWCR28XNyg",
  "key14": "51kRadhfkxFZSugemeiKKXzgGGKFiS7dKPUhyiEq8EtqT8JnKbZP1wsJZe2xQhSL1cMdBMP33HLkdgieE2dNANzx",
  "key15": "5xzMH3nqMeWCEqJz963J15MEYbxVRq3mHeYruSKJRptE8GnWqrwCNMCUvm6f3wYxZQCAVZuvhn18pz2gjwk5SDdY",
  "key16": "FuZpS4TfyZtABpgduDycyZpMqSySYstdnfbhK3oDJDHVVefBrr7X5sdameCjmRaprB5WPHoeb5FbyFBxdvYG3Hw",
  "key17": "rEXB7cFtND1cxCAyCjo72ZqWW6xHYVz2Wbq9yNhePu8SwNcHvmdD5zHLuCs3fG7B8UmpmyRvhHvZhieSUS1VqUr",
  "key18": "5M8mebiYccAuCYLbeSZRXmusPqzMJCy7QUagsWMfkCcwB9f4txJJZ3hP2tnw2X5FYHSx2RPvT6Xu4ieHUJtnzcTP",
  "key19": "5jqgXyAoMUNvdZ8cr1aKJpbW6BeuteTaYEr6aS4FYNMR1pAwYz6M997xfKU3Kvi8vqNvDqVtM5Dy7FEmQZwjMwbt",
  "key20": "2shKgFNA5ESqvgNswmcRXj8MUrb8576ttt5f33JShXjVXwVku449dTxhigbACK2sTJmFkkpBD51EyqhobCqGPfJ",
  "key21": "2AjFJvzaXeSBV3JJbkWavTubih4pe29uy9ZuVJYGksPDnLYvsbTH96pdyf4H9FhP2XDQHjGbx3kWbApoRzkfctjC",
  "key22": "5bvF4PNkKYiDmDZbxmrG1zwfyiLi72EKqY1SJXSDJ64V6couCcp5rzcDUHGyUPVtXk8McPE3bPojwFye39rLtd8e",
  "key23": "3aWJHMSN3G1kyDz168owQZDtoSLt1tPAsWsVevkZyLKmPh7pJgXB7437bUPkLjzmKdEagBH44WZxKs7JgfsRHbYD",
  "key24": "2QuxfjMqe3SGEQkF2emjsdhMYHJUqgDBMmXurcawtg5cey2VDFSXjMYCUiz8f8JzQHRMH4DFMiEhXHZ3xDiU64JB",
  "key25": "24dxt38qgSuARNg1df7RNjjLV9BdGsCJ3tx2HmDkjEUp8QGSJ7Pe9pCcaNtBdtkQCJAJkHHbrCPDbSTxUqQYAjbt",
  "key26": "Mq5JzJWpZAfSySfKTjwZrTsiHnMo1JtYC6oc5SrjL4EpycK2aUNbonp2WEzkuN6VhTHc9uyUb5V96MjhY5cLFec",
  "key27": "3MYgf7JATnGcjZw8Vv6xhwnMXZUnRXxKYEz2zai3WatDMKVfoP7jjXodAHApqdgYtWXbEV4tZJkZ4W9fe2fDJqgi",
  "key28": "49aU8CtiiUz8mG8CZLfEWijrQWEaBAs3PjtUFAEJr9JxPzzvhAJT7sRv9tKoELNXPVdk8Ba8XmWHdfcAcg6nLzCG",
  "key29": "28ui8CEZewAiQMnk3Hk7cjHD5TdH7AdeCMVDYMusBgUqYHdUkQaGvHBPpSGp8AW9h2QkV3RspBSMgqHZ7Hz8ZMku",
  "key30": "3v48gSAHcp3JDVv49zFEGDgzGYoZ68CW43yzp8Xy2ExwyhMh3atLBwNHcMySHZXZC5TfywCsEuE6P9BBAL4KuRVf",
  "key31": "tU3yf3UJgW5sAcioWnrVKcWdWWACLUq7mPRq45Q38qQQ4VLxZwKMqe8vFpZ3bC3FR3C8vwxWasSTEs3NhHSZt1L",
  "key32": "23FrXEGrAgs5iDwV5arLCkZcUHoDEUFu2wpPAEuD7uNBjTXBXuJTTZJG7fEScSWwZixjXugiUqGnDSDrGrrf8pFz",
  "key33": "gWkjjdfgoZpcMtSKmQa5zZaLo6Mv1C2msXnKosr6bnV5dK8kVTh6u2jWBTCgpbW8QMEHdk4G7ZyugTekhRKFxmo",
  "key34": "5mqakrSddg4JdztbAADMKweAiCWAiXxnMSHvB7mwUArqFj1j7zze6BxupkTBFMbFs2EC1GQYEyWKLRY1uZr7GNkt",
  "key35": "4bGAGNkYPjkk4oKRY5hBBdbNQBzv8jUpozAEUDbDo3ijxkjxnaJX8eTd3QcwEd9sU1ezaNijFXiSYa92MK77hKp2",
  "key36": "ZQVQUAJ3kpr7PsseCPzPnWNB3bePjqeuAA7nk6DgiMx7JPiqVmxc4id9yWNKNHKyZd9fbzYSRp6wt7ZPistA8Ab",
  "key37": "5krfCvCDh2miN8WHHftukaHbUEjc2XMR5EEQ8kv7tMWcdWV3VKH4HVHLNS21DHhL9PZrttmj3ZxBuiguonG9jkpx",
  "key38": "fHTekDsx6kGpbwXddWSa3cN2yejTXJ2wwiVr2psovN58DRnE7JcrQ8nbpYjMjksjL7L2sdpZ1Ey2LfErc58RFpe",
  "key39": "2cKjRjgRF5ovtKuL2hGWuT7eW4AsFqssK1LrzNu54mhBWfmcEM3x63EPnSbRLHsamQwxBdzAAMqjqYJaeBgmFTgv",
  "key40": "4hmXGEtgzmsSgjHypEdWRayRKtqKGpJSuVEvbaM5uFN3NHfLzh8NpwSPGmm6hVMFGAJNfeU1pq13HbaFB5jbiJCU"
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
