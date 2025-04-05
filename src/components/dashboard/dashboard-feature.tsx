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
    "GtkyUejySTotd2U4Fp9xuagHtVoufeF2ESBPwxdbu2MFJUTBmvTXy9HtWwTsqhipx8v6KA72NjiPpvf241iBTEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FU5t12DsNVVmA65AQeSBqBomWrDy8Yh29eV2wCV1ra4yYreNVrMmkPnN63ZhwefiJ7yXNZ2Q227JjDTK4nMrNMT",
  "key1": "2QWpDxvCNnWwN3PvYVwZafaVSwot9chhj9n2HtM57LqtAyDiCAiLRaNViSXigveWTnNPLvcMffVbrqiuwwJEZr5w",
  "key2": "jASvGY4MA8ZHzcwRqescJgxSkJB7qmo416GdfrBtVTYh3hLKrZRhRHfXkWNU89mAgq8zVUSgUkxkpuuGkaqizo5",
  "key3": "4B3QdVJpC6qVmYb5HHo5wh6KV7bAL5MHvacxWPFbe16ZgMJLHFYdQC1jgdNzBj6VTDHnyjc1oLufMUSREifvK1rQ",
  "key4": "2KmbCbDLAbrW1LWbytpqb1RtCUyYzptVMxaohyGLU27VwHbmyLTSCw16gGxz8o4gdAXATis5UNk3RhNj2Jj3Eago",
  "key5": "4zHfcz3Vwhh7t22S4TFR8xU77a7NnWRxu4EXv3TciMXem6wZvt6bXLFPWrsivKgqpJKTxTNTLCz3kwAe8KuP8ZsP",
  "key6": "4Cp8DNVcVPbMkyQKRdBJANPSKR8MRydeJgMFN2Bk26v5aVZDU7EamPE6UXaUgrA4XgKdRShYK9DdKREGFG6HJV8M",
  "key7": "2aWZWT15o6he1487ZLsHLYPRJ1wpyHwmbzdTgswukUuWduzVRq7m3rG5dcjs2jXRHLz9vw98om75end1J5n3hnnS",
  "key8": "63mCTZK3gGs9cAm2zJq8i9P3cp5BHCEDGpDrrPVwF4cosFgvhebinpKuHcSurNrNZipsP4ZvhWXJ7GmTfrJ8Uyzr",
  "key9": "4qf6x4XyMsAzZwgN7ucyXAx9GsNfRaU52WrdbYejd2MxbUxq6WyqsfwMB6bZiLschdmY6qpJh5sScB7SF5i1orfu",
  "key10": "3HGjSy15cctPmWmrX2AYXdp1cTyaQB8MT8j2NPBzuLYFocJ3g2oQjQeNX5dCA3MJXqkGFCJZbRSRxEAD5NoLBCj6",
  "key11": "r5w6uFmAkm5VaWaVPNVmdGRfCCPdmQhtZwE8VRNJS5sbzTmbWvFkQqX5LJh8M8hGNCh3ZunjH71t5N3cTTJgphs",
  "key12": "2HKEMoNDiHNzj2PVHHpqDEMdVt9AjZRiTW1GNiqCnmhSRuceNKqYDHfMztcQtB2pBAMXgBjvVQaCdv8ZaTTn6Qyb",
  "key13": "5nnTb7f7PeNVD3dSBY6RgVUeAuVxtQprf8H2PbNVDuxZH7cbuneax75JjFnwBuYy7H2ndzKMtk3GGVPcZdhU7rdA",
  "key14": "BfZLTN18hnJz5ytV1H8Wr5aLhtnZwVPxaVLMVsMpNHiUoRnxDLUZpSB1U5r1HHhUKj3JtRPHuHzihenvhdzVmhD",
  "key15": "3gumegeBSYHyqPH1JRtZM5MG8dJsLXDxSDfHWkyyeqce7iKZy9Eek14xqbVKh87LrWmaHguhxJRwbFVXh37qR3op",
  "key16": "9Shb32jsSuALXkiqzgGtKcAStLJRPob2fUUCrjUf7GD1KpTGw1579ViGrjkQhHzoUsevi4mpDRv4UhE7bVbHMSh",
  "key17": "4gw1dE8U7Ze8zs4nTLgrFeEdw7xbZYYCc6KJyA4C8FXZZaiUuEJiTSEe9EsasKfEwmcrFpLPNSifi2bHBjAC7hbL",
  "key18": "5YNjZwswvNr2wgtWRKLXRSV5X57QVfTnHSMiYNbTySU6Zo721PRSnwTsVg4nK1u2DBiRQytaVjPkPNZuiqHjcqZ1",
  "key19": "4oAsvjEtbkctwUJnShgUDDfaENnBWXcUm9wCc5z55FP7J9ukkD9ZFETgwmm82akQYsHSE3quJXABXBeqbNPX5cCp",
  "key20": "T1gJpcLrthxFBVTZLpLzK5miN2G3p4aZcZr3MU7dhQkj9KZwNmGXfdja5hfvbcuniRWNheFkeQQmbUy9UXMsJsx",
  "key21": "5GT2pyBqCXUcXqYx37UREDFk867dnEMALK3qx9xGoJWKBMkuejksq42Z1jgzT93RiMb9mLQRZvTM3hkG1nvhKoxR",
  "key22": "5i858KXn9mLx52WExxM8wtFWfRRAkn4F34qGC6hiZEMSi5fpawmadi5FeKeGwd6w5FCpw65QgKsMExQ9fPbqgZCn",
  "key23": "5tqYJkmsszEuWaNgnUEobN5GW8Mb7kFm1JFZaDNeyGriyTk6nuxcjrefrhDkxxou4S5yyrKrDPw4gVSWtsPg2Rhc",
  "key24": "4BJ571D888j2oXuUjAgoGpPFwa3CQSxSot7Un6GGsDMDDYNJaJn6Xo2ch3cKmjMgAXKuULyYqbzqQcERcbAnCCY8",
  "key25": "2ecRUGDesoZu7HKX5uGhcZ5reDD84GnzsPqKNSj6q5CwN8Sd7yiKtRc3skjK5cnSsndBtuEtdZgNUVG1CSDoxB5V",
  "key26": "28gojj1HxyfQ4WogmRWKacrbm7kLDdCctcmZg3cnt9GHLJ6juKw7xyq34PXbYkqzZxBgGc1Tx8zNB76Lq4FBn9JD",
  "key27": "38DkHy1hp6EAH9d4mzeK6QdRNx15AFf3icJeUjYAhCsvNt2Zi2WuTTJM4C2oR4gpSSAWPX2oEm56jufLftA6eWGz",
  "key28": "4XDB5yGS2KzGY8uCjrTCmqnRp9TJaCKWgqmGxFpFifT5QPMbKvurD7dzpXkLzriWXojJ53yGys8LmmMnS3YEFtgQ",
  "key29": "37mktb9hStC8yEEPyaxcUSMcViruGSkEnRsqZoAu3Y9Lh2h3KkvthGxTy827EHcq73Jj7w2Hs2ch56UVXbHc6KX8",
  "key30": "4dvHeELSi4hAo95H75injSYKR1tQzHLnmncym4rgbna7rw5hCya4t7JMWJYeU44JEg46LKyzpYn7MRrLfaW65UYH",
  "key31": "2UQmbusJ7BpHQ4XAmaRRfWvKBh5LqDDXL3iYfz9rrn6hqxDkjykkxxT78GXcQB57RtKSzrDxPXLE6N3mix5LkWiE",
  "key32": "2q2HigpPZJD18XJhiTGHNSqKuFEpw3zBseawN8cBFNsWJi5ZcqSrCKe9hU2ozsZR8gemEBaCJsRKfS8chVfVRDxH",
  "key33": "5xyW8VKvz5mafVhdF2HeoejqeBEpGdoHGmDVPmg7QQbTwHPU9j5dVFiecW81ex3qjBWXkKfkzFffbMm8bPnT5UFP",
  "key34": "2HdhKhKdf5WdyK8KUZRPzZPPBpXhb2MVGqUxJqo5tF55Kjd3aho7DxNPTELUvd8iXxmK2r36zXa9gorSvxMqDHTe",
  "key35": "4YBMyAm13mSCfELSkpgF1v9yW5w7ByT1GowySYzduX4vqXuMHnowFiYs71WAZfiFmFFDBjfSTEdTXXD38ctYefZq",
  "key36": "3yMppk6gC9JqV63Q4NnonsGHE9rfGmAskzVuqj47DAYr8R7AkE8WidkMFfRtsC2gsDQh1Byz8nAX9tDtsizV8Uqw",
  "key37": "66NuhgY4NzX2Wby3r5Boz3Cy2nQFZMCsiQcnNG1Z4nUowwkymfuuvg5uPxhjZVM4krDLzxkMjTiVZybhz2uPwHXn",
  "key38": "57toTn5VDhshdy69fr5RheMhifeBvURN44hmNwu6B4i7HgXDYFAH4uRTk9vwfCXRkxk6hQznZpaQ76eZjH5jBfVS"
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
