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
    "aEADfUtTCYzc8u2tCwxv148FGR35dtNfwE6sGXgVTWSTh8ebc9qRGkx6fkS5jUkYpTvSbkbqp5b13cvX2VGtaSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QE1vmnnqYVJTPu1qab5DhxxbXGvPsBzSeP49bzWC4ZesQsi1w83SKDTp5zoao8ZMyaUc9n93jatRfCxcYTWXWZE",
  "key1": "4GnwvdFXSBs3sLGSexStJ3fFPj8NN4cwPpMfRwmSEf951Y3PmRsyPb9SWRDMJQtCYAPJwpECp3DbKY8uAju4UBaJ",
  "key2": "29QW4dcBMiotcZojnKCLmAieokHwwtYbnDnDvnidycDSEQMvrJQoTSLTxeLLxh8H5TNU8kM3dfmCCpf1GpB3q7S4",
  "key3": "2vfpdnR3UnQS1EApznXd2X9iMN6V3Mkt8jTMJNQJHZ4BYXmcanWp2PFiPA5L526B6Kom7sSRJYCY3GUPsecJewJ8",
  "key4": "2D69UbHzvb4zryK1hbv6gegE2EonW2AT3GjuEwE7T1UTTS6X7Pdbqg5LpkaWuX5yKQmygoktTzJJvY7NDodSQgT6",
  "key5": "4iz7ZNTfhSd5vpBD91vNBkQVKTuaE8MGTK3gXqvF5zge1Pgp1Svi95AuZ6rWRjgpH2hj4NMxknWvth3i19p9Syr9",
  "key6": "5dYvJ8cgkVAxJYH6Src8gckHMBTNHrPXsDsaeqezP5qoxwcasHfr9HE24v9ZTrp6CJ5AZJf4gE3ZPAueKi6tSN99",
  "key7": "2tXr1QfSqkiiq8CqxXZK4ucNTrePVzwi7mjoYy8RJvoKksQLh83E2D7gWEoLoXyp976JFAmVa1eE8Uw3Af2ckLYE",
  "key8": "443ZmF2KQy4HJqqB7o9K5qNWdBJvN8ZTqirGGS73f9eiqbB81LsL6gEokTxwQ7xDTDDYNtQngnUxkhg4nQ3e2iws",
  "key9": "Jy49wte3aCWqZoyMbvCD8bttNRRg19eLzjHkASFYBsc4tNbKpZeyEJ8D3Aoy7JRr1Qqd7XZaGjNw8NwuSjLy2xx",
  "key10": "ZpgjZEEeJe8HXXbkJMXewdEqWsbHhNVJy5Jyapq1KceV6C8Q3MjMd9rvFTgNizhLr7VazoeD6RP3v2m98aWecbz",
  "key11": "54kJDmodAaPgzbW8XcwywhymCguqrstNJQedfgTyDvDonhBYqp3YQH3LRwod3eM6JPTZjEA4RCKB7yjwwqLpZuMP",
  "key12": "47tyCsHUdW8MguU1fxVU5BTbXwwoehgoi942uPMgWQX5MwFNwwFhRoCrzgHRoGkB49DoZ6ZbpeZTBPCkd4Lnsgn6",
  "key13": "4beuTheXsBd13HyxNHCfr3RgiRGwa1NfmfZgyMRYXYb3LhCg8Sh471k35GHSWhg2q3dgceEcspHy9FTESc1hidus",
  "key14": "4sr8zsnAxwY3FekwLo9K6xVhsDiUVm2HFfSoCe5ag9onLhyoRFWfe4fLQyGCfCADMpjZ8EVssiYfTC18hqXLMGEV",
  "key15": "5S8SSa3TqPuPYkUqKH1iYfrigLwBqe9MWVSgq8rwkHMA4JU2osBWsMDvyXbhhuGF3hcpeJMifFZxrobvPFSztVFK",
  "key16": "3pKhSKm1yvoRczSsoTNu78Lemq9Qg1gFnujLmRee4ViSYpvrJDistbFd1FP1YMeFLpQzG4eNy1pMuhQhuvCwyVh",
  "key17": "5fj58GpyqxVTvwdaAenPMieRXVEqDAU72a94gfevWFUpEoE8gTbjyo1pr6Z4UzUnBgdU7xpT7oKtNWb1Agd84p2",
  "key18": "52fu452GRU85qsVATHuNrjJ8wYEosXg4eBiwSKo5CC2FjbA8HLRFEaf9bXvz67wf8BMSRjcAyk8M9eHZaHauvDvk",
  "key19": "4Q2f3JzTTeadfptYy6ZsGHcgxjFgFYtNExP9NGWccd2kCREARv1EaEpnhcEcwMxwf18tLX6hR92BLRCf6uVRpWeR",
  "key20": "NaWoqqrDCXL572jW7RHKAnWgC2AidY6Tx7jNSEMr37aEi8UfeJAYy8niGTsf8vAsXWZwCh9QT22oDBwyGr2rnoY",
  "key21": "3uuH3sdynThdyaZaQD1hSxWBgpA1wV3w9pxybVbD7gJxNJzLZdKvSoSx79hFCzNYPBWNRSzZyGktctvg2fAxE5aw",
  "key22": "26g6bHZTEG9Ue1LTbPKS8Wa2N1CCMXQaLJe3Kx4sV9nSVBuAbdqJEL6jExoDXHDhMVrVoFhWhwNWbrGWKRcN6ZU4",
  "key23": "3EXFdcfRy4bxdYWHhLoZsYkWVMc4dcEE7w5RjPUJgNv6JR8ua2W2LBS9ysn9Ca4MQ5JNvnkcbjeNfw2mDKUCBu6S",
  "key24": "2rP1NN882ZcXrHyawNRYGJJ3npg4v8cUqHqpNZtYeoKxHQJFnmkwkwDG43FpCgqnNRpSZ77gz4AGxizhakC5ko6X",
  "key25": "MjYFZfgFcpQvATs67VYgHrE5UsRtB62h8c5nxVft18RiuBqtSDBw78s8UwbYvPxboBih9fnsxLxde8CvfpXebAF",
  "key26": "4awmkk2NbkVKV8LPmXwKupYhFr6qckWpT6s6ypPJR1wzowhsvk3zFRjz17M4eT5KX5dbhdgo3YZxhLQ7vFWirzhQ",
  "key27": "23fFBbcsehyRq1ocbaigDpFixXqgy2JAvEospBfs4qCjHZPQDBQgDg3LT5jwXFzdPEDPi9MpvrGYpi3w6EnzLAE5",
  "key28": "5XE7R3aaDsWzkrcXnNSHMvrwYxfBBjaEws1sz1Ra1figqy3k9TcKqFij7n7J7JZScySumVC3gwvD259uX1XHweU2",
  "key29": "4dfntxZXgjPg43knbnWudsVfjXJ4oTMMfGE5Ag6cUzLeNsdRbCbrqGhQkpd95Ygs6UJQ7sWfrcKFfBBwNS4bnfqf",
  "key30": "gyXHvJ9Ngz44VVEAbdRHLL6BcsfMapexnaMH29h9TkjQvcyq6qXnVbFY7rrZuTACf6eYVjwQH8UVYPZAcb5MZZs",
  "key31": "5XgWGDRJRY4giU7S27hbUvaSCpPG4k6AWoXM3612uwYDPti2VaURTGPoFwLb5CNJgG6KhrJsyMv3BmtrCYYEFacT",
  "key32": "4AysWe9xMqfonE1LorRV5JiyJCMrjHsqj2r1uDjvLLKEyWX59taQkAiHRbmBQupxguQ2p6YjF25F7u1jGgs2b3TB",
  "key33": "3M2eAX6FAD65guH94VAuF8Mde7JXWUhxg5YKuaDDVCCQY1EuDLYMTiq1Q2MqEosTsVt6m1BooXD9BrgDfNYJhA77",
  "key34": "61Ckx779hNsgnX8DL3dWnh8LCK8KtQ9kq7bu7MdbeRFTyGQbiANwSwQ3AQHoz6XotuQQxxetduA2N3TBn11ZagB8",
  "key35": "yNz1FzB2vYwyUgj9fe1Z32fLbnU9ZixV4QS26d88dkjh5Kcz3E8QdNjNo5jy1m7Uxcoo3fQCdRSNqoKHpfRjDAz",
  "key36": "5meU48VLkiDErcpbefQCetsuX6xZpA9Y6M9d2ycPGUJaz83QE49fCrBYapT1jGBZR7To1qqdNEFNrQUYpE1DMU6D",
  "key37": "5pS3LPfVBARJYQKBWJfToQQNxTKEFeQaudL8jN6eqUsjZ3Ced1ahjbMtRf1GYjh7F499rLB38VNrr5644Jgc6qiM",
  "key38": "4sEtJwAH3cPEG8TfpQyNXaEjTEwpSiRD2VPRm3WZoM6EZT83DkBWKUn9Cmoszwf9255tXe7qMy9BGqyaju9gN66m",
  "key39": "2Z52j6N1RmUtC2BypbHNPTiqk1pG5xK27hfVrWrP9jxHzt9Fz8tuFYtu8mfba7pafVAGwyCnEtiXhnDqmEAmdGYD",
  "key40": "5pVjpKGQizntEnqAZPSfkry5sqWFMqpGoSv3W539DhQE2EziREa432AeHRdfAqzMHFTdX3KNQEMoffHcZLUMPX79"
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
