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
    "FJrScUsqeS2rEPMTGQhdZKwK5ojDE2fWAkJTzeUinjffQFJASnNGJkE9GS6PxagmKhETHHvGr5utNRK6FZp8vUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pxcamEbXiXsMAND3z3BJto84QnmAKW1c8ZhuWGK9mvXNmpZWhKAvtVvuoEQsc185JTfdr4V3cqzvZkJbDfUnWua",
  "key1": "4YYvwwgqcxhGQzWsp94xQUXPy3g5nyPL2YDNT2qvTrJjWxEMgHqXBQSPEwbB9B8CAHgf39NXxij2bYNAsFPZs5MT",
  "key2": "38yhsYTj2ufJzJ5wqFjSsGTXSbxEEZh6sd1ahysN6UbrPMxJZ1U1E7mbSkyYdVUjr2ToYS6ALgMk5AMhzbHfijZC",
  "key3": "3nKGVUHZ9DmLYg1SPtCeFWgjFKvpStKHjSE68vcwReTfWi8t7ZXFra7q8WTh5RVdzZdgVUKPDsto867ECiuL4Koj",
  "key4": "nqxYrrNpTyKJroUrYTZTdCcNYz57p5ZemAsViNb7sNJ93jWkyr7ux9fw4J31vMNhqQFyzktgU5h9BCEFFLHWZmj",
  "key5": "3FbEfKjVxrvkKhVZgbGonHYS2qe4U9PA6EcSKr5DFf7aogLZ6dKgjoHDPnqgoW4KLCgrBWoBWUqoew4a1tdoca8Y",
  "key6": "odBxw4wvX2wTuGki5FTkvJTahgbbANAJbsyTJkeHP9k3Pxccf6DihcGizrFpHkApun5ioEyk1L33TNcAJRcZecB",
  "key7": "36GAsMQ37Gk1osfSHXwRW3gjDJsgD5aMA1w84xyYffaWXBRSiWbmWGayfRwyAAc9rUjrxQmjBKWdV6EKjJM2jfD",
  "key8": "2yqKA8sX9zoTzEp7HZEviwfLBAron9PuK732xCTFAN99C8qrKUkuTgp9NTGY47urrq7rdphmDPPxc6aAuU514iyU",
  "key9": "2jc43CkRdinUkbemHkHuBf6ysVBdAVZBpbLx5Zie4V9hzDunSERJ5VfYWBy9iMKMBkoFxFXTkPu2ufA5ugTW4Z4c",
  "key10": "4QfQ9V6afDX7CFdbSzPRJz1pEiYTvQTDm2rXtXNAccKLxRtrHqNRgWeoXEyZ3hynzpRnHCp7vbH1oMuZBKF5dLbU",
  "key11": "5tmhE6Jvh7cXtqyjGhxvz31sEJy1DKTqC5QSHVcqGVQBFi73FGqp12HUb1NQgeuBUJPJDfNTYvzRRcMMVNfgauBn",
  "key12": "qBvAE5ERVEcUozCa79kbKiFnnbBT1XdU8FVLra2TxGjGG9iAamtruwV8iGXX2dESaGjpRG9Hautym8qRVYYSRTb",
  "key13": "2ehRFcQRnC4hcH7ocxQDASmCHSMDm9aXbv4ZrqbeQoBqJLxkFzPoVX6Ly6DdYr2b1Kf7MVWEAEfPZE8TooTgkNs9",
  "key14": "XvS5wHmkpvZq9AwfTbGXmLyabSo9pzmuu2FnAHtxwFWCy5v2hcB58bbtqFu4gn4vaKHC354UYZuebDuB4Weubw4",
  "key15": "3CmW1ostvhjaExQhDPEediS3r3wQBQvFM1VKFh6tQtuCPs7ESpibPMUxW7DFmckgVzDhfcEQpVYavpZmRUfEd6GD",
  "key16": "62XKhJGaxgEJjeJh4HiSzmNzvu1djXrX5kgreed2fSzKm2CLuzhxtB2ePKdbtX8DKzMGa9enwNpP8fR4Ah9eCQnz",
  "key17": "myG3HMz4jnJ1XXnMHTxcKSSWFG9FddcZJsjB691poZeyc9cxJHdNeLZ9Nzp8M5172DK4t3pYCn1BkUYy6cG6Kd8",
  "key18": "QHrNFR9mWLGrxwqG4s4K9JkUjVQ6LiSNMocrHsm2oRcxfQgq6hiNWNBeYyxVcgyBA2gxzHq4FGpdf4EKyvXm6rL",
  "key19": "3Eiu46gwjbHWhwPpGNinWhnNMjfPRtYVPJgL5w14CMThbmxzr5GdFn5aQow3bPKzMeHWZMnj6TMGgoLn1FcyWd6h",
  "key20": "5mHEns9H6hAaGuXsiiUSnXvRqkJ9DxbyrJzNiue2aGonmQt2tD3BWoZH32ETGJyoFYxnMLSR3HbiNS1AqrPu6eUx",
  "key21": "2Dze15sHmdFfNzWiPcpBkVBbAZCUXo1j9B6U5DuRoHDft6yuUSbYSzFTdsERj3rrfmzwpPaj9CZUsN7bNnAzpbXf",
  "key22": "2Nz1Ed54H4QVcD9sg6UgLUYhNFiUf1nbEEtRWB1NrzWQ2d9q3aFzCTh8hTjuFQCC5MW1tBmMtyPG9F5jaq2E2xn9",
  "key23": "oMQwUyV7aiPQGX8oKM8oD7yHsPgeGuxnjSiCSCbZe3tRNVmXTQ6Posn8y32hBTP6ybERkcZ3J1aLN98WmEGd4x5",
  "key24": "4gJsT1ajuh22zihD2FUUTMfZPwQUhYa5nsZvKFKZgZEK4CGhHnzrvUJSv8UUxbQ5W9bxLwJQN9mE5NpdBUfdz1pT",
  "key25": "2wPtouR7ZjxufAe7WXsMUztJ1pRc7ngF528E6mdicoz6SVv7WVGKAui1PTnvdEpmLnwAtnWopBtBTibivD1XVyxY",
  "key26": "535waV73u3ysa7rchZKi1jFsKGrJ79zvrH9w2Wzt9ofrzdtBuHGSbAC8ksL5dDCATFGQtTBPiKmhGSU1V3BMThcK",
  "key27": "4FaDpiPUEaF1xxqaUFuTqFYVcUP7hypKRbz5YWpkKDwPBqepR18esz612XdxgNfp7kt8Mb73Q2h2JJ5qXpXcFhZU",
  "key28": "2Z5aTTAib2T3d1hLMMD8FeDh2RYbw1MX2kXwXStzeDwpq7zwWaWHk8oK3QCPE1YnKU3rdVgAP5ATK89qpzYrE5ur",
  "key29": "5iwskTkfgXBgDAdQwPKU6pXRPxruzCA54c7sMeBwNcPwGPbuuE86Z7FAaZn7A3aDuhR3btQZ8wC6hA5RkXdhgNsJ",
  "key30": "4MxFDseyCm4f78JNEHMjSi4danPDe9kksYPUodgQ8iZh5T3TJu8SSYBKzSxjvp8Afbm7RgyCa5c7nFpcfKaR7TeJ",
  "key31": "3Pco9a2KbjCSWJs1dWnHg57G1ZtFu3hmeGbkjm5CsgGtTggDiuwhQqV1KUhG8LM1t4BD8PbXw4TzxT7LJvZjqX8Q",
  "key32": "4sPfrPFhLi9hYVrFPXdetRsghZcjWKMdRFwhuTnX3tknr9HSvQr9CnSn86MP7Kdmzn4XrBUnymjnwLPwnq6iCC7K",
  "key33": "5EmXnF7dinSJZtfC38tDnpYcZFwWVoZ2kVxHBu9CQoA51DPWaALRv74Vty81oQbLZZ6QpWJGaikFfEcmN643ypHU",
  "key34": "3UctJfVLzDfnvjSTrzyiw97moXE1hEVco8E6YGyr7YHAUDfm7xc4WtWV8k8Q4k3QzLrRpM923Lbg1voidAPWvJeX",
  "key35": "48Vt9B88W2GbQo14iFaFSp27QLYLkq8mE1CBNAJke9V7akp5EiiygNcTzjkmPmNTMFXGY5CnYNFTzU8rVaGUZ9xV",
  "key36": "5LLwLj12oSzaErRgFs1mKkNESW2Z3dcECdUCJGi14LqhbqQeVg9C2hZDkaPEuai7uUTr2xas1c3jpCQqzZxxquKC",
  "key37": "4tHyjyp9N2fBzXoihFxKZ7ThYfxCB8PvubFj5sYpzZWsa2ejP6gD9Ri53hzW7PYKkqAh8AK3KRMitp8TGWu3uv2G",
  "key38": "S5bnBRuFG1ybHxTSLysYaysmkn5poTrjP79eTLBaBxGQjRsjJ75fMTXtSQjhhdKD61Due2Xghk4bKXgLAEi5XBa",
  "key39": "2mdXxKhwy6uMq94AMAEafdBd1YZJRTpwo1uxf9P7bBWWwGyuRF4oQ1KS8qiL38ojLRwk2KgeFRS6hpnLGrdkfvxp"
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
