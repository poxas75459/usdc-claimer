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
    "4bGFA7DVAXybCoWjxLEHvzSYvT7EzU3zatMXbPA9HM5bLY8wSXRjdon7vsxzBcJ52s7co6645DqMppdxjvggUynT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DfaX6n2vSiUxgAHMeWXAqQ4nMY3q3jxBcjbPKkGVsBG6KTvwMRZgHgZFFUt3u9F17cHxvgueZxV9VD3gx71rZHp",
  "key1": "5gFj72sZdzunzMPmYsusHZjfi1tLTDA6dU65iHozBom2jQuTounsgM8xjWST25p9yWnkyX2S3Y8fL7bdsHZ5g868",
  "key2": "3pP6QvwgZ89gik5JC2VgwszKkE6F76JCvLcHJvWWwTeWkV5oFxL5dfCPjrFPtmXMpKL4HohbrDYqDc1ucMNGoZEG",
  "key3": "N5VEUttGLemD3xLu5S6ijh1XnybzvLoDCB2EX9HFKc8MA2oYwrtp2EDd72E6ZhhBV4jLZw7EvuE9Q3cCVEAKAZp",
  "key4": "41XXHsskz4xegnEsEwPdNesXJaFnJ3EbcyAHBExafFdgGV93SNx18gVgrg2tyA3FZufMYHQUaQTuWMKpuC7a76Ft",
  "key5": "4TzHbcBFBhUT1CYs4QgFocmPZwirzgEagP1MuZmjot7eczYduR74sQUUps8sEGj4snHKuBDLN1rq9D5DrtBXicUW",
  "key6": "62YcBPFArQ3JKb2942dKTkjmnwMpRDR4dVZgVoJCaQgTarwiXPbLpsgjdDe7wH7WAekwKds62yVH22uudPFAcNXN",
  "key7": "s1sqcg3ePLufac5oUzvziwTZkozjauB6ad1xErPsJv1S7YRP9NcymPsH4fkWhqPGBdnqwW3a5yqWpLRxY7Wdw7g",
  "key8": "2QedqJtRzpETAb7kibMiu2kG8Kv7rHWfAqrNaqaPxMV8VBDHt6ZEcn9bRH1BLP4erFbXkVNG1tHHBMhmLu1Tci8H",
  "key9": "mAeSeyrPEt1peGdnBu3Gg9efpB6LywKS1wf9PmCdRVqmFoBFqrQXbc7dyKZxQzDqSTBTALRMJu4hYQhiUbadEpH",
  "key10": "34nmeyFJL7oq9efFZwvVqbmesqsHRUdAbE767mCZNg7MeTsjSvz1fuKXtLSUTjyEYWVWdR83C33HXdH7sTQDfyhJ",
  "key11": "3sL9h1Sa1zr6wdkjnBNXFrb4JDsUtBqdE8iykPPETGF7Mah4AFbpZXg97JZUfmWH7JL58orMRZBB1jDCEtzR25ZG",
  "key12": "4uvZtVGJBBUrpBu3DZMW4o5HCKThrmkHweJutYnXheytvgVr1Zwgch4H5pgFxy2XMJS8s9o7FbYCtU9Xw3S9JnLw",
  "key13": "3cWGJG5ow4JHFAGGUEFJ6QGvHcNVdbe8vmcuc3xLmp8VBPNrYFS4F6FruvQ5iYcDcRi48jL2xM5CD6Z1Zaf1TeAE",
  "key14": "5hKf3QwxK7pxRARVuAMvgsVbRrJFGE4Scn4iVarXAiyQSaFNfJfjoxztb2tQH5nr4AANoTgoTQTzVw2QCuzgKLcL",
  "key15": "2UN7VxMCZNWdWpJ3gr9j9AfHoHn57P82L95G3D9w22RDwQTJ2mUUhiZedGPhLRVDYA9mJgqbhYBkEHbYnbii6k5M",
  "key16": "6492pkRaJdWC7xkHH1P94Z5HoMGHFLTinPTTYsrPCrNnpZrh5qoWSes3u9oHttq6zUXo6LzGYQNhPgvRkp8tY8zz",
  "key17": "3RrgwdyZexj8VrbpuskW2YGgMuetDGWy4dkZypnGg7ww17DRyYGjMhZdm93zsEs1FNEjxtR7HzVdDAUBhPDkKou2",
  "key18": "4R7qGkPh9fbT2ZqNDoZ8bCn1aecycSA4sJ8ZSsAiCUeKNnQaDx115xRd4UvFMmDEs2d8Drnwuo4SKTynw6C2YQwm",
  "key19": "3y8GU8eKUUX12BYPvbjTKjzDpYJNkszFSYYGai41iLCYcjpfVygi7DmJGNgjsvPQjpdTXzEFNhuMCC3WpkUzmCzC",
  "key20": "52zxKsNmNASuR6tzM4wWETMuWga1GyhhPFLaWDTyGNV7GKy2RAF1KwJbcGeuEmWmSRvFqptdFepJKVLNaqWXDFqv",
  "key21": "5dm3LndcMaL6vqRURXwXBKeeuDManse8HnCKKgQn7Y3R9rJoLcxFXTaLw1K9qhQuwNL2kHts4767tCkeNV9BQCov",
  "key22": "2LpWyeH3s7T5tuXL6FayWzdPTggmni86iYE1XQGZpQxVvRmwHVzqzwie2aRLjQoH4i2ypKhvtP1K44dXu4LhPTxR",
  "key23": "YoBhxA1P7jxTBEgAGcVxWA6fWQLnLetmgxxUNsdVbCmYunNVNpXgy6zdQxpDixEWbqXibusT9T6aoZcrMbReXte",
  "key24": "4PAn3Y7Cb9kCQyC578ZbiYyhV5m8ZDdndyezFzAMzH9rCwrEVqNu34zg6MMmoZzK2yb22ETDGpbyuNPchqcLXdiw",
  "key25": "2v47FhSNRro1rhvMsm4EVyeatfm8F6szn6mne3WqtgPuvbioYfLeXKLFSTpq7Mad54NE8wygnfCj6FaMrdxNohnK",
  "key26": "4z1q4Fpi8WDc6sMpN7g3dxGnuZ6Ys2777oVKptMNkT7Xhba4dMn4xX5uSY7FefVx5EmnSJ1yctC5CaG6Fmn2NZjP",
  "key27": "4VN2QYnUDedMWu78yqzUYWuz44uXBF5TEH4v77BrtLX4oEJYuknFP8CbYoPTQcPHmmD5D2SsaDe2iJsJUFtTxfLu",
  "key28": "3ihizA7JJKUU8irAJ2DbDDpw2kVsUYkTMmQfZDRuYemZx79boqXMbuNCfgxgaveciNnpXpctasDiG3QKZnUxJqva",
  "key29": "4JNuLG6TxisYzk7Trc1FFdTYDwi6Qr8zUaY95HXsHH3HCezR8RC3ahjS3T2iax8JfDM3tMx3ChZH9xF2A1sVD1Wb",
  "key30": "4B741CGdxs8AiP8tSB62QKcUiPVoHehWMjzU9cAZih5J1z3k74agBgkFSvE5vq5KaENThdA2juTH41J5AwNoHCEE",
  "key31": "29p6PkJVJnkRXrBMXyZGBoYwXyy7Lc2Zk2VeMHNfWngTjstCx6pZ6uU4JeteAWD7Vp9BR78q118WfSuw1weRhtKb",
  "key32": "3eHufT1H1P7tyQJYnJqt59T4qF5NfA91dA2BEbPCdwaeMFATjG659m3VPWkYe148bvyzCqHBg4m3oJKC3bv8zzan",
  "key33": "21JNEkBYpg5LNxBZWdrD2ydCHpbiD74K8VmizcFvGEFAwwQ56z6GNmKZkSmC4aPRtHUqwPw8gUHykpadKxhvnXSf",
  "key34": "4ZvartNNgiYMi97daskyt5VCWqW67TpycGeqiUzABqj2VPE8T5jZGQQsWmet8ZtqxrqBpRso3oYmckiXQop1YvCS",
  "key35": "3ApwjjMmypFouj9JDccjW6scgJL7BBjTPnLFASbrC5hCNm4hkJodoNhoEa2B1RaQbV1rS7tMKn9wvUjcNrfNkH1o",
  "key36": "4Ud3kpAhXvH5xv8ceNEC7BWMwRF79zaeJWedvVEgNAhPmjL5yJ4Xh9emv8UwV8r9kgerZGeN7YTL9mgpZ5of7MBo",
  "key37": "2mkmWZSpQnLy1dpLcZAkLq2bM9yBhYTaYGsQkb4reh1FbBrzPpXthJz8ZFeToTzY85iKUCmLEir9tq7kx2ZK6Si8",
  "key38": "5oV1KayacdaCzEZwnV3xNjou1BNH1hGCz8e48Ux87M8L9uUm2uwPyi8fB88fmbfube6RDArkMUoau2ikuiyDnHXh",
  "key39": "Xm5hsSE2886sajssVKgNKZanppCX55iM5SpePFyJXYNh4dQdHcDMbAMdoAcricQbzRHrSGHynBxYyKSzrH659E6",
  "key40": "4T3cM2Ldiaaqrmy9youyWRnbkGQThpyveBfvFFfz5G6L1ARokbu63YVwBFBE9uaGFmx9LWTakrNPKUCXUSi5Ez8V",
  "key41": "W6UsVb3kq1H7y3soxed6CFLk23fZcwRJ1gJrLfHpr17v2sZiD6eMcZcD8jquZf7M2XgJ5XrA7L8WEy3HjV61gvd"
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
