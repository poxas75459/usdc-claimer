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
    "3f2ywLUhUsAXderWPvBpZM71UFM153g1hWr6GqiGGzWapg8RHf13jbvJkxTQzQgSmpp9kttxC75huxPN7Aw1SJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VwpZFK8C4FxUZjbamcnv5RkmrPt7aiMe8WajgUovpLZ5e2Zeci2YbrgR3UXkGzhhgbhx4RYjgD5Riac5FZgaUQV",
  "key1": "4YgaPCzn59yWbViPz6p8qDMPgZTTMUjtw4QMchqKLh8YurznBCsjvDg2qFtqjsWdWRiqTtC1fgDFMDiaRan7qWE4",
  "key2": "a7CddGwagkTyS8jqumS98gS6C2Cc6oGfZwwEQnb7tXCZ3AqyxVhPbHAwwY1LsxRxUSDNcWWK8JN63juRMGHfJ2U",
  "key3": "3vqsv1WkN3M2vg7gUhqTn35dbBWQPTRQHnNRvVvoSVPTVn6hWp1nJ2msFiMhGS3C5x6Zwv8JbejafCnb8r9tPcui",
  "key4": "2bvHrahhqxM8jUgNb7mUTVicdh9efvQsbeLd7GDUuWuYvhrLm1nPqzGnjk7KXHx1TcXZwGd7SHR7nnoYj1VyyXu",
  "key5": "4arP8FPLuiYVtdN5tPJo7kLAg93c6vni5XfVHX3PfPMc7CiMVTRsV8rUwmAQui8fwFH4N1KmXRVQknP5Nk43vhU",
  "key6": "52DzYhyqxKh97x6aTc4541oR8nZ6CjXh4dpmpoSGTuJhJHP31q3hdtQyLwN4TSdCdG6HRPyLqbPGyiKkJ1BcGVJ4",
  "key7": "5GgPr9qS59Si4PSyVvnXZE7VYzFzs7Ff2JeNfJugohTJ3DiEL3Yf2V7qgTk68H1U2QGr4JDH7xLuGuafQReuvUd3",
  "key8": "5PXrsDXLXE1Jp9hGANWcBR7DTLMGuHmvdhokA7W3eWjohzK8cMC7ET2YoULKiQnGNt9xo3U2xCesD4DnyL1CD7Go",
  "key9": "4QH4guN8XHNaMcyWr9zmwyF5ZDprygHxBxybPSvtPU44QLMPALH9eHrXQgA4PXdzq5vKbGU2kkDdQJsuP9mDMSuW",
  "key10": "5VcYLtQgs4nZHG9RFpHguLSLyCcMvdc8ihbnSEugkmRbtVyGMRo4Ydnn9k8vvbXQ1Ag8F11zSmQFZxZWdw3BnsNU",
  "key11": "T9GYThYEBD42o6JrtAoRWM3AWU9H78JfPyy1XiLLiAJyL6Y5FdGq7HefzbcfppdrnLQN5wDBqocMNyAJ5XjQ7Zn",
  "key12": "4HkLi79AX81HHaBuVzLP3tPT9cDvn66jdhgYroET1WfkZESdGx65es8NubLMjjwSLqiMXdR1jPec4F48j71Az48n",
  "key13": "3S7JFjDN6riNBa8MyqSfiReuf6FspQFVrpXEqejZP1JUTgqkemxpLhNZPTAQnjJX8EPUcpvCGh8Zj6gYxFT9d1EE",
  "key14": "34rLqK6RcQTSRdWGC8L33EQpQH7b2tQDEkC9BMcTpq9feQSxaFmnnJv4rd43ysdrM852aLU7w7eYvib99njVSnX6",
  "key15": "5yrEDWGkhHT3bcjXifYViRC2Asnz6KFSTPM1AtHmTuSPqHrstfqydEDPijxozKo19TbgcCfdbSi5GbSv1RtXB1EW",
  "key16": "3vcPYyL4Tg9XKGXH5bvw3VALdUAqdfABpboSKYxi3kvH5Mi6EzB3L9BTW5xBPGgms2PKmtZ7tnkdhXAmfmubC54d",
  "key17": "4vX49uGYvD7WsyBoRghv7CANxbY3cypANRzMdNsf3PZGHFPCw5PxGaGc6fRDtxwT4x8Q8uGbWt5cqNLUhvzJp22f",
  "key18": "3o8LfGhv1ntXrdDzcp8jNYzk9JTAVZYdFCRwrb9upMPpHo8GjJQPrg2UrDA29Qy9mUuxQ3LFrmMm9kqZaMea2BBi",
  "key19": "35QeTvj5vXjtoPRbtcAdgsy4bGV9L2y4YS6E5EkhbZ41Q9CfD4wWwWvJxMuPBFRbkng7663YjnygNcum7KiZpPZE",
  "key20": "5zjLcEgEM39oBY8xHm6ZVKoZkJdCEsevGm9W9Fam5t4urq2yJiXXFT7uWuRq2wVDeiuk1jiwLCK2rGaGLo89qc94",
  "key21": "3JhTRgRwhZKAdb93Eu5wxXKPb56QcD2j4U27trgvwbGFQWVRCYYGKayUoJTkEYxL8Z9BpEPwQqjQRgSPcQra2T31",
  "key22": "t8kNcqBYWshqFDJDboVhfgen1NnLoST3qqVqxP7pBSDYgZgALUe5FMPt8Mp72QE7bXmwfuViEbrYW5Q9poEMK9Z",
  "key23": "22LectMbW4jgU4Ya17qXC2V1jSzmY5ujyR2cBtSfKKJ782bzk5wLrHBUrJoYaR3CxWqK6tjoCiR3EWbApMLcAo9U",
  "key24": "46TAMoM5uDxrZooS8uxu4sWQhDKzcW5SbWbHNNVUiJxNUGgRcTobcG1onLHvdUhPedc1q8az5BCJHQK2PM2wTThr",
  "key25": "3CBBfsrb9ux6CxsGng5pHB2WvrTaTWsH9Adc6nnvyoYLCZLEs2orxukdRsxLvErqwafdQMjmVVs2LYQemXB3ZuFC",
  "key26": "3aEhRjH8Cd3ooG1PEPrZ2x2VAMNFtE9QbUsLcza2b2B3xJCVSsN9vsydYG5RPAair2FSyBXoyZrybVZT2JMw9rUD",
  "key27": "3xtoM2RJtPBrS2tfTpz9HqZN8UJ851536PCgfosTbnk6G1LfS3uujiA6yy15sfDsuRoJMLm4xdbxYMicLm5o9XaP",
  "key28": "4KA6KpKxzt1PWfSnMmJTfjNfi4s7ZKjJzN8BhQYsdV5kmAqp56qvVcHJvHSbM3tXf5VB4RPSswmgLAmg48XW8eVb",
  "key29": "2PPpmJNmamjvt2rZKc27rPG1dHzT5XFTwQzfnghinHq7sPby91fQHawytEcYdRYyG7vnuXbdVxfNZm4Vccvmj65p",
  "key30": "5HxFAHYhWZeRxPKCbXkYdjTeJkmbGk4bUWJVudZES7t4xeg8PFxEgyCDVPmj1ucTHBozmmFirQCgojxknpAYoSgU",
  "key31": "3TCd4NzJ1RkMGDAFidqhGVbhhZJTtTQGwiYtiKBCXHvKH24XLGk4yhdas6EWBFBKKegaNK2uZ1fis2dt8p8fRqdh",
  "key32": "2fPeZu3BipgGSrfpEurNmpDYH4p1YwALfynKaDo1gaGMnH8vyhUv2Xqu3oJP2AM7rWXfjVQdqhmF94bEdhEE2szV",
  "key33": "uBK7SjDZy3KWB5W7bpkjhcCY4iYrVXVWqTo4afLE9htJkWfCkaVidV34bQ1LrdFvxPfdE7sFL2NvDAe45or7JvN",
  "key34": "4xRyFu9oQwfS9K9y5VyV9GJuFTYUteNiFSj9GUhiX65ZEcDEYuQBTsEG3svxCVoXa2eTceoW8GkpPf1TPpgGqbnk",
  "key35": "2rGw749HH3Neck6367cqoxsajGgZ2nC5R9H9T2RikykVNm2dSX9y2LJWkRwM8ByTPSpuuWC7SrReAYgdgjH67mUU",
  "key36": "5ThhGRrtcn4ZWXd3wAFcJmWgj54yAZ9dZzLUxPjqD9aBkDG2mcdwrh8jio76jFcEEriZJXirdhfvZUHwoVujse7E",
  "key37": "cCy2kTAtsz6JCC6h14CZ1pGYL9ggsa31v2mNwzEraFf6j8RpXGvECGiaSKRUgGeTryJs3TcKfm5Zsr8UQsANcx9",
  "key38": "4YqWeAyQ7Zk3L4BwHxFqhP8D4HWkLNorJbZqoRUy2bMhHmx6pYrXULnv71knYJoEMyBDjHPjJa58mJTpHjN7Afqw",
  "key39": "46ZDGWiP62kfLpjB2mB1Vfu9hu2PHezkqFL7VTCvtQ6QD5FiexFfaLMKt2RrnJU3jP1G6i7obhmYVrjPNcCim8KY"
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
