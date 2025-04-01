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
    "4FB2QHTFrAZH6zuv7jrCpZVNuiEPva5bLxMCp3QBkNUk8z6dP5zGRPGP2YzRzpwZm2o7Y4aXWF1LXcTbw4nau2x7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AbnmZMCYMDHrrBkwMLhF3C8k7TmwbHrFk1tvbmhj7ct42UtExyY8h99uM7vCZQDWMDWENKEUwF2TVTsXfZGtyTF",
  "key1": "3bKrWNQQAHtM59M1txFjFuyCSgvVDFscGq5ZZe2yywpBqNmAWhpv2UP6V9qsKfFGRFPFZFtXgvnDj55n12NpXc5g",
  "key2": "5Xjmaz9cmjEyzTPx7HqWkTSoNamBUdEnPqXJfi5XNoJ2Dn36S9Us8jZidxrkcQ1vhoNpWQV72ncKAUnjmedSi3mH",
  "key3": "61RsVSKGKm1TPGrQShd7T8kAWGUHtWxkhUtBugcwwmhQEJ4kYDArzA77eJpUZ4C9tWfnwgtN16U9a3F2vCamwMFu",
  "key4": "5C3oYNTdNVtaiYfJ3tzd5WwZ2ionBYhaDzVuDpryob7G9vj1u6C5gyXTwWaxc8yW2x1kaD7yaykkZKYWnYsHLDih",
  "key5": "4aWpiMPLY5VuSXTKDCmE3xhjgjzWxHnpRWJV7nCEfb2EkQcHkvkCdKdNkLDstRxqHVn5ubJW41eKAjXc5CcRnfgf",
  "key6": "4qttjTe5wgvWu6xZAupegCQyfjWDq2e8xH5Wv3yMtdZFKb2aMH4s9Q2rduv6tsMNDt1v4NAKXSjXN5yKkVLGvvZL",
  "key7": "T6L693aTHFDLystA3zC9SS7Vx7fCkC972Rk2gBGQDpgj68Ud5zocXBjeNt68rvmi6k1jLaqRfmfbA3qWWtaWosa",
  "key8": "4fCxmyd7y3i2MrecNFSENhWHf6Yp7QHN3X6F7cocfFmxx514xyWwoLA1kj8LjAU7wrWMGGgZAKcY1eRsoZMDtsW3",
  "key9": "5J9F8bWAuzoLZH5ySGtMFGkgHy8tq9EJBe7VvbhqgFT18h5nYWdJMfbB4FoVQqNA4CoSUGCcEztcy5Q6h6EBbA2H",
  "key10": "3CXR4nwGXv6uVLtwjm2ekRiZX7KZHL8Ko5QGTQnHXenmtiLD4o6j5yB8YUyEwgzrMMbgq1q7zY8H3Mn9M5W1Yk8e",
  "key11": "3GW4fNfPeAUrmWzzHHht3J1gEDRAN6DY21FNgwrtibkniytGzoMzpP1PvnvVScATMuqx5uLMgSyWBNcfK2bf1jec",
  "key12": "5nJrYYGkUdX4qWBjyABaSAKLdoPGPBtQF62WE3s2dT47t1vP6ZU7TfcvAL6NWJf32sPrcnXvrMJfkFhofjyDtsMk",
  "key13": "46B3TzVkUE7jvZzhUBsvVJ9MpMgSKykSCV6x5ZgWdtb5voVpRVijbn2RfWXHWNDyZCYVAsLUH4m2WHG89kfNYafx",
  "key14": "45BbTBeztvQ9ZKu7LfaEbAJkgAqYvH7JzDwCVpNYb1ZhLnbkWKDxyT2C9vy1fQJ9SAtsK67kbyVQbCHENMMjYQxo",
  "key15": "5hy9HVPak1FSWqLhs6zzXRSHjS5z1oyvXEXXCEfDLNEiACMDc79KkMdhz8URTx52DkpeVMtqmRW6CvciYUX56Gm",
  "key16": "KC9Z1Mbk83wBnRMpbG3Jgqf6mRvjN8hmGc8yuTjaky7zFZSpQiTmvcWgv561vHV7rALF2rR5x6A2gpcyKGGYJh3",
  "key17": "5rMBr7QCnrdZo15XVNJ9ojUmBXvg6fBDNw7szaXDJLRcSySX7zaZu78i5b43oeNbExeyEboHgFuvu56X7gGRwBQd",
  "key18": "37zfpaWnDVGkrPiGnsombZgCSG4on3mAP7ziTvyDp2t13iPBU3oUow6qXm5km9tQPeceZsr7rqhfRGBCCVL3fJBi",
  "key19": "4j3diRqvDTmAEdEDdfjybzqQgne5wx4yPgBp6fivaDZNo3P3nb6iXCNtUzyHLqvsHCqSp1b9mF84xV8Dr2dPCYyP",
  "key20": "3Bzd4cjM9aD1juTAbv9xZrCn5sSNQyaAmH7kcWbinKCoM5QWmJosDVHQ26cv6QHu9GsrxYwV45awrgQ4UcwKAERs",
  "key21": "28cMR7WAyAD6PueyHRatBmdzW6EgZxWrf3axyLHooWQWsYVW1Y3cPaTtE6iN7hhr2PTwBC4dkZzYPNT9fVo8smVW",
  "key22": "5GBx2keAvhtNbc94FuNxCwDyC9BA5PxmafTD8npf6cZfBuq919aaFozEQpWjs3CbRyhq7mZswTA4PfFAQn5rC8ze",
  "key23": "5dHYKgUGPu6Cva82GBqdKsimW1DPmzPbqa7JMthdfHrCos1z2Wy2L4fCbZWB8XsU8B4SLmUR9nQPga8oa74CRHie",
  "key24": "4TsF7pNEy4vnsw2WQdbUDiqkB2ZTvndKYj47V7Xqwwiuh5ewD4gW13GCrTvJHriHHzQWxraXQBvenxXJSSXS5j7k",
  "key25": "58XUsmBAJ55VXMS2N3Q1emMVHf98s33K9PAcUHC4kSJzVKsvCrqQKW9JxrWd39RCt19vdHndqzqS29gEjWVDGKmV",
  "key26": "YpDiQW1iX1BRAtpnpWiA6BQx5cNAJP3cz6WWbtkGgrb7xya8axPvd8XyVxi1TE4k1G9yqsZagLi7kdpvpz1nK4x",
  "key27": "52T6UYAAFyPE22cjPTSXSrM2jahg3GoyZNRXrxFk54SZgWmfb42nCzhD2Mxux4LCaSmxmcVwCoeaj45H4Mpmv2L",
  "key28": "3FKmBUXxAY9qfbNu6Z1Rr7WqyrrbjMPXikw1FcUVur4eFnmn4WBeuyqGwXoVXRQi9y2jPJEr8cYjAcz71WyB36RM",
  "key29": "4tbnFVdP6toC21ozXcaZiuPX8YfXzXh5D1xpGj9exxXLWhxf1Ca8XHg9XH7VDxX7CDxhTLZXBJCmCQroTg2VGDwc",
  "key30": "5h9FfXn15neJ6bU3gfimgG4jp6hHF5dEGXU9edof91f7n3t48Yv7rJqWy6CJ1DMNVjEHLtpGGWeQ1kKQTygJnhTf",
  "key31": "3G6PwP8PuS8z2eAKg2Lv55KeVTSvABWgoX4mCx6qRhUQvSaK9c1UkJjztzcLdgbdWcmqCnTBvqE8zGoiVVo8A7ZQ",
  "key32": "67XQsDH5VegiknzFg4aijHVKAYqg1J6JKyDjab4tSswB3HzQTAzqQTVEDkmdnksovWKGLTjMPeV81v58Cb8uDrJF",
  "key33": "2eqFpjpvLrPuBmWxscd2pz4UbqGDTFw3uTxQc8eGU932FMdzQdoYymqeax7xAEEfhNRWK1xLf5FKiQ578JqodDL9",
  "key34": "3maTSBqQMQWG2jtC7K7mDKRSDReiFJKzCPSTHki5NuPsKmnTTncz78zH5wm62a46bGSBzp7FZNkxiQSMHmnELMu1",
  "key35": "3nr8mFhuM6Ht1A33uD8dULkRpVppU9hTfntt7vefxTXgCNbUcrWK7N1NWFmUsK4EB7fvJaZt21UUKzc2arYiJ6m6",
  "key36": "3T9MfAtT9dJMsgEEtfqbNmZY6k6JVXJwuQLQ3sFJoF3E8vzaWEtUQ9rjzURbCtJRKwjinG14DV2wcudY4thE2U2Y",
  "key37": "4g7XrW6duNAknrAY45n93CSU7X27E6Xe1KGF9KujASoxTCqAuxVvLy44yNDuPWdUDhY8BHJ5DJKVPL2D7modVZEU",
  "key38": "2mZyhi8nmWD5qugyTgJ6Asa4PVQSZawXngULQ8Ei6mWBCF8MUcxNHSe51hMWY1x2kej95XZVf7Gz8gHL85KVpbhC"
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
