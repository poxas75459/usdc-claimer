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
    "5pNQz92jWUTBkP9hJk4rzGQuXyk1MwURxRNpnw4FhF76wHCncdb4Ckz2kGE3fRSjhawsvS3fyWrttyUKp57x6Y6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WNetjaohyHERFJA21ypBnuykjvybd8KJKDy1jxxCTDgDJnB8BurWCK32QbQ3GyageNm6SSXs28uJ3i1VtAm8XbW",
  "key1": "uP1yewQmt8PvevxmF5fiD22aQLJre8DnAz5xKx75ytpDeQXrNjyek98ZZj5fGXc2z2oCmphgsUerNM98Z3acsm9",
  "key2": "5sEt7P3cU8iJXVdt2hs6e9wfufwYX7f88nq4VwHvyaHyEsG2TaTmxtP6tTiiZcqwxporsAfQ9CdFaFxgtEtPayz4",
  "key3": "2ghMaqJDjhahabgq3umNzRa881LvKMyLrQM4kBdp11yXXbojiqzzXG3uQtnMMd4v3NzmLnyFn7g2aHGzGYUgmXLs",
  "key4": "21vwUEyoR9npFvLteoGSzuqbV5hdvS9mcQJpJHW7NAby3vmU3zZqQZRJcMo9hALYtF1Md93iDeVZu5cxFssdmfLJ",
  "key5": "5vLb6S9AQiQD1xBTWJym73mPYpVjBSxG5mQcnJNwj6cwNTqR2YpsdBCbrPQLbz9wWczcx1WgVmtgVxAGdgFWsJWz",
  "key6": "5cWUmSRgyPL2hj141vbKMAdgwNb2vRc3rQ9Rh4MUPVo8tJYVhVkKj5yfMGJqCfFSznVdfVjSTBN5MdX3DvMfn66z",
  "key7": "3XVPqhmKn5XMz5GKoTX51m1L477sjFKt1DTJLzr8TtJnB1JuL5muZEGtBUkkwjJMAiaCJk7wHuiQUpAkgUMzFMVK",
  "key8": "h6V2HRedgZTGTfyLMEH28CwSi8QBZpDxqbQcQNinj5EYYZrsJHjCNhVu9ZsvLFLQ6mtdQ1xXpZZCgAMiemrmHZg",
  "key9": "3QJapiFGEzZGoWaDTmfRUUQuhT55qE7NHrpZ2z8jcozdq5oxFZ1K7sZhoG33ByPRhZWRq4Wwyo7FpBKGWnGdbxMZ",
  "key10": "2rD5YxVePqxKawB79b861FaGHqV1fpqLqt6Zmm8SF4iJtavScQ2GyfcaGtwD9JFuPjN3TDdNEFjhTKAFFLci1GVn",
  "key11": "5A5Ezb6V1tCr2q3rt3fZ5Ym18bSckkdsC3LMArbM65k3ojcFrTVy8zyPfnUD2jQsxaJxtJzGGPpcxiBazXBq7nab",
  "key12": "4gjdXm7adSrYaobxPmRZquDpkHsj11iNDB1ZzuvPrrFeLsW6yF7H6nu3TCMLmtAezvuZzqhKPNcLsKrvut1x1qMs",
  "key13": "r3sspVzn2EeQZoQ3sFwwwR4YsbFKJWUmAXm9ujQkmjcFVExMakKpcUjFf3AK77fiN6MwMoD6cuzwuECGoYt78gr",
  "key14": "5JYuyvGtNJiuWd4RphFHMEULPbK25uEPebJEGgB1qvkFqf2JmkPzuUCiV26TF1zrTMbseBAUEnEahn4rSDPbjixZ",
  "key15": "mtjEyd6NGxWrVMmTcVrBGUakyQXoMgwsxWq3UKeyEjzFwMUEP5JErCxP2HrWVV528ZgQV7eykRmY8mDnkqhJah6",
  "key16": "5VvhyuRAQ5PBF28GwCb6XTtpKPYRtHBiJqQiCx37rKQhcHefpfQiMaeAKkwHXpNM9y9Q7ABKVi5KmrFHjEbgYud1",
  "key17": "2uuEY32kahgLigeEtNRBqApbedUDocPyysWqpbroQZySc3aZ9ib2LQaSQzczTTNmxQbwDAUzdPk94mFYGt7EwD26",
  "key18": "x45wToDAvBEaXe7BVVWu2stuamtKA73gkghtV8SZsuM73vpFxHdG64CTYLn2nGcTiTt4gh7Cto2tRVkopont82r",
  "key19": "2Fq3ZmZKes2vBwp4N1wBrDy7rRVYN5oajKRt9uhtXZH9b1GLx5hqm2ymMLWq2hY421MwUdCjR9mRcQkdTPbbDzsi",
  "key20": "5UcrAreqhFRyTMYRvYayoy75fMBjRPS8TVce2HMTS9Y5p9TKhJB5oqLvpyUPwJMH2rUdHR2DBp2k5LKvkiN4DWqG",
  "key21": "3b4AjzaFVNMGdAAJQ864TqporANYSQbCenYw4ZG1awyFPnktS46oo2Gbnzwy3ffENGXiZ8X2F48fs8iEFFroburP",
  "key22": "3dHRVK2GYX7o2jWMifErotietkUWUFiXgiXoZdyqWBhiNkzWm7VTXfpHegqDJTx1VCG5bmaS1dBdYomqYAN5GJSo",
  "key23": "4VbffsYYxB7NR3SNZZiroXXM2cpDJJ1jTadLHS1rwYNLz5wfmK1x5dG8CcqLnZKmZ8QKDGEi2vBcNkqPiqRquCLj",
  "key24": "5f8FByafU8A1bP6chH7yBZmjkU9cVwUf3Ug29uc2ZuvVgn27qmwCgWqJWtZsGbVcuopHyvQ9Fu8tEN7YNjaYMAgT",
  "key25": "5esVYKEJGeV8ZTosFPquBPhaATwn4QvE2nj41djLBVEAj3simGAKhqw4kVe7aGXVN6J9JoeUnF73At6D1T1dXxEx",
  "key26": "3MVncBWMQVEaNXnqz1BHMwVr6goMYQqFK6Ew1Gbef4uCyphhZjWtKgMKCHsC4qeZC2X1xRzQ5dHgvCvt3BRL3cF1"
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
