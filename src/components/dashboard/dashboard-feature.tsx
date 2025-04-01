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
    "3V1EemfURqvXQjbXpVBugFwawVBa6FPeaVVXctUyFjTXjcYqN74aE2z27Tsug4PrrqpJtdCebNK3drJvVu418SxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s21afb689fM6EA358JgLsbbooLc4PEATpXi3AUSn7LyG5XDQiN5Yr4nkge4PZQSZANzB1pGtMhd1LPHam1taTuP",
  "key1": "4TCK6qwmryMohBgNuFJu6nhRWFz3C3Wpj5Gn3CDgwy1GAhcr1U3QaPkPar8xWWr2fyevWqbFGhS3Bi2t263apBDH",
  "key2": "4mhiJ9tuMFXweLsLiHhRXg8nYwN8GEhgeVzRoadtQS5uWHzmck6vB2hikLX7Jdxkk1rwQPUyCEMd2MSdmuKcXigy",
  "key3": "5abgC7tQHXUmurAEfkBZgo9ByZAoVhsjBQuA2foaJg1qifUaAxuQaJUMsQ1hTJVi6TMLHU9cQHCW28PUgoDsisoa",
  "key4": "5EmBFvLiETnNwE7KZdWbG3wwSonV8BPDRpnwypzyMwjCaeh14sEu1DpwupxLLVjKaCX1vXG3iqKFhHoJ2a14QWWw",
  "key5": "WFmhk4aBgP6coXM72fvAAbVxQKjBrCP2wDAh8z1YfGgGShVS8gr5cSJesPbgj5CkWy48nLsU1MgqQyNi81sb61z",
  "key6": "2s1wYDner3MDReERZ1NNfwJzrgQ3ATFTKPsNoqeSXnPUt7kV1JUFQhtj34Xp7b7HMoX1dAih8qSMabHtPM2mxruZ",
  "key7": "2zq9EgprmzoSTrMjtrDruTcnk5sgcVWwzQMvYhki184FVUPAqd7qeTCTfhZgfTbzxPCkDz8Mzhd3xb9RbggQ8Eqj",
  "key8": "4yqWELShBmimdzSQvxRjXg4juTvojqVXCMjvJ8LBGNbfvHhPL3wbovygSgunyNMaYTYZj5mtyp7cQ1Dzk2zgrq5Z",
  "key9": "3wLCFkyvaGLFz8yeCxtcngqh4VqPjHN9n6VNZS63k6zkQar5KCCCcNUjiooKiVPRAmWoUCRKWr4BgmF3TFo6BgRR",
  "key10": "5NSRWmF8trPfsujK6D5PApkHryuXnjT2eBxScDD2FGhdTxVZJ2A8XbZj9A43WoS3PoopPr2auJ9GcfjConjMa26h",
  "key11": "22rCKC77MPxAEaZV24nKRsxrGQZjkMxouLr3NKnGnMvNa28WQbSnqQWJt4UG6qsbQ7RxzjnpzE2XaV3Sk7wB57nB",
  "key12": "5nQBx3DjNVQAB9TE5qFZZJ4a7Qysbd7EpssrLbVbkSXWsdPMRQuGQbonDijoehBNZMTnNQDd6ufiEekXm6dsgFue",
  "key13": "4CEqG64hYZ23zPCWbXMLSzZTUgbkb5G3rdWarPCrZQ7CNZdYNGLvpPQdocNqgBcquUqHjsLcHMwVBgu9bEa2fTPe",
  "key14": "39EsEWV1ecV1brQRe86a1rbKUMrm7H37heYBoYYCDyxVpPrmvYiXtTbZq9J4BVdQvono6TnqbC38SJSZSJDosxjF",
  "key15": "3qemWbEyB1Q6cJDxxKEBUwDMbjZvD5yVDERsu5nL2DNjbjHrzGMh2tpDexgA17815K9rU3ngF63mhhVuZgsweLT2",
  "key16": "3oss5CEdTbG3mDVxPvDzLivBkADHA6VNjCVHGtH1dX2tY1NV3hPsZwuxHaC2wePcBRCeHME8MoND6o19w3K5QZAW",
  "key17": "rCT14nsBM1dmGSZFhZQ3jXxjS9qj6Wego7ZVuuEDnA59nJ3ACedxjy7caBaNymPeAxezEDnibry6pSXk9qu2pPw",
  "key18": "2s87jibkeUaLos2BMcG4r6tuHGv5q79hmhTM7Zt8ieX9GgTcR2Zo44Q4z3uHD3KnPNMf4TpJiphyGNVcM8CNTagk",
  "key19": "MxV8VeyFcG5pNFpmQSUjTz9CLgUMTEDagLomgLLmkttNPjeGsPoFa5SniNeTUzhtrndXVYskihvEiWWoUhdqRSD",
  "key20": "3W8jtarVRLvZjpZzpSMzUgjbj55rkwg8MGMKdxChjS73ZBXrHjUnBtBXye3b2N8aeftgoTyA8meFLmAYW1UoA1MV",
  "key21": "2ZLR6jE7HTt15VC4gkLkiKaeLXayo72N8b8H2sQ17EsUWtJDGq7HiFMYsu29wqDEJJUm7uAGFLNvYWfmiHt25i9P",
  "key22": "nv6dS6eMWBzRGpdiwqcqA1prLSSMY1hpWLKwzp1cPX28q8dL7b3BcWVYXPPQD5ACrP5xi5qVwfaKnQFu81cHejB",
  "key23": "2BJY5fGQZ1BxGf52tGpob3Z3JNN4m3NePVP8hcttTeGn3St1p3TNHJVZb9WsDeTZwcqaCwfXuHcdkbKgaQY9VML6",
  "key24": "4c1axAieQMnawcMXRyhDBGUKidsmxBgDv2kDtPtSR3UPwGu8BK7NpKVzHkz488rqLHhCPFeYyWbpAtnvEWdAAc4M",
  "key25": "45g5qhKM6iU8tsirUBgD3fwr5Uq2KejiSSyvgYjFRXqVCSzguR24HXRdfEgu6LwooFwjR1o34E33F1L1k5p4n8EX",
  "key26": "42uMWR9CmkvaomDJLbAx4wz5TPnEGYzLAUYDtENUGcWCgUy3eKbnvJ1de3ZHrXjFTUywCbZoSohowb5nrgro8Cjc",
  "key27": "4NnpKchW5p18BirQ42r8kvUqLhdUu1k6m3oHQytGA7J8spRCwc8Nr5qHucdgZP3VLE9DqWMst7BKVt8qMYkdX8w3",
  "key28": "4ALuujy1Q4HxqXaV5JTBigQjKFRtokpJesp3XkZzHmp8i3vAetpEjxfujzKWqkJihFBDz2s1c3eTNQGFVSQv8yi5",
  "key29": "3N7hnXrCWLYcjzB3GpVFkvHJcaGr1qZDDLEDZ1SrkPPQgYX8wmD27jTqYp8QbnEVuYc7CUFfLm4vz397twuUiEsq",
  "key30": "27fq5hhk9byhMsfBiNpeHGT7TpHWGxGTrf8Y67Kh8bqnBV3pXQPMBHVv2uRT1zPp9hHjW7bNifs6SKfbz8Wn5mPJ",
  "key31": "2L3aL6giqs3ERQy1dGjBCT7UZPr2zmv7QvHaNTXZsoJYza2aJJ4ogDkfAQEHTgmk5VLRbF3wGQ5NAdqnyEBoqpCj",
  "key32": "2uKnahUSZ5ArwzdCzPtR91JkfjEaH2wWfM9PayxZvnEUkYtZqEBA7vygNAUMcEV4zocM5v3XdfB5U9fzGb3xtcAL",
  "key33": "4WGg6vLSfo3KQJQzAxyW1mcd2wiKjr7HXXTjKFWJQvRmw6iikcJJqFatHjhks95m6w8cRzfihY1KekhwPrFFCvAG",
  "key34": "3Atst6o2tqLEEb3pNgV9viB8GZqu49bAPEDyJhvqLMXuuBbHHg85NyC6qu18FnzdukU7TiyYba1f4KQVRf6Z4vFQ",
  "key35": "3YqzfeHfRvEZVvZjSgV32LpjKts4qSC32QofjCratJqeKETtMkMZbniE4H13XoKTkMbUJabk8jABzPVb8BH6Dkf"
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
