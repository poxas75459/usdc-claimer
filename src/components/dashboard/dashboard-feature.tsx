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
    "2ZyqBDUJWDg8g6ZU4A3eBsAQawtB95wVfW28NdUwRyKMpajwGJ7hXT5YAybAsZypnQmJpWTMYoMYjqm21R7h7UKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HGEfUo4FVFg8yfKo38ybqjNu7TyRuSgXXZJebxxv1G4L1xTXywa8rZ9wQE7Q1T54zWmGJ15aQtriuZa8buLhLNn",
  "key1": "Zg6zoo1bZbeHUUQnDYqXZMFywtLUPi2CvAJXGpA1KgyKxNvsURYx8o5CX1svvaTzUtCbDLqFbvD6QUPAGk4aCmb",
  "key2": "5bFcPaGTdg3NGbiQz5TJapj4rVLjuTYHCmsNKPrhZR6C2J5wRgrGgcYBNqfRWZw61fgSTXTAAjRNTa2AZGjMpaEL",
  "key3": "5PFH9rTwG1JvTLamKCyxD8zYp7h9sUtsuF3fLMVNAxsRyxXGTzYLnH5Cto7a9B7a8Bk9fqiLUkmaN9uvkC35vd2S",
  "key4": "2QybvUzYiE6F3UinTKQURsYJmfnJSEkWctfLzdcTSMgxBeRtrTrbrCSbP7WmbZDUNwjJjixanRMnS4zKMaLHW8A5",
  "key5": "wR1hhmu3GaFJEqYV2yU5jjtz7BoxjP49ZQSRkWFkFhx7JY6vzL6d5itueh1XnN8bfBJtwVrwneS4pYHuATfkHoz",
  "key6": "PwFxuM627kK1Zx6khfLxuJzbzGJ28TMvoFD8K1AD6K958Y3U3MHHwwcssaqZNSjtkt5RDsfsswVXByBXYq1AYUD",
  "key7": "5QoBfCfeoA8DNoB5pPaVGqHZrSwE6EQXaXz48nyRpSdMf23XEZbQVbBewJ5AbzJgGcMZXAWwUPv4ekjakzknzCu9",
  "key8": "2ah8TmD4ro7qBynZYyiVJUKXNaDA6aTqKAqH4sdyaz2t5R599895Gque5SmH44HoA9ApsgnevwBEbc4JuPFyX6iV",
  "key9": "4pf7QKEcNoQev4ttxRxHLEkhRcKPhF7fgAVhGtTdXgzZ2Ab5QRH5MMZ58p8ye64yhbDHjs7R5i6q5m4xqY76Skix",
  "key10": "2R1kVKeewFipFzxP51azzjzpVkr1avRjNEAJjQ4suXdSz362xt1hnPvEsn81oK7rpQTxHGs9uWFVes1XHyLUGwer",
  "key11": "5pidRyM9FRVTyTZziNNMFqJiUY1A2Hge4976nwhhSrgB17RVNsDKJaMuAsUdDaj1CbS4sw8zkTJ6tKqFhdBuUhBT",
  "key12": "3USroSCpzkw8AKpA3ZPY3z6gaKmyVqvF3uCFqKLcKZtNRcz7hL1yPMtNaRL6xMCzR445ESwV5ZZPQRveUHQTsoNv",
  "key13": "43VwqiqPA1NXLGmHjBVFBHNDGtfMxL5kAFtXmGc8xipvKcpX4sbkGf3gzaQ675ishngPQr81GZsb5jcXtrzmaGB5",
  "key14": "3xevRB9cMMpuwyj59zak87FhpuupXNsfMHcWxwP4jCPpGyh3ZQvToH79akHkvm6AE3RGZBkGyyrdRJCcQZa2AqEp",
  "key15": "L3Cto6MKFKr6Y6F2R8wHZXJ45dMNSzkTkSwoR4YR6imFGSZT6ZSj6SmVjkkhpFfRgprC7eJj6qJCU9yLSzQCvxL",
  "key16": "5yZqnGMMJGHew3jjuqxsGUeMFfDuHXTpGcb6iuddiu5Y4CgCxLTZib4mSL58neAXdKC8SbiuH6ZhUEhYMfC5iC8C",
  "key17": "3xDTP14s1TGFN18d8vZbzXU4YnTFJe9Fz72pUsHtznSDZ7ndJ5tgKgBFUMnAjcvtJZm78VewuuiawbH9mTEBhy1T",
  "key18": "49BAoHmWV4QmJEnpwR44mrxMBjckSAwCB2RUhhZH7VtZrkXbJ6un49pKp6ejtYDWhncuRGgMLHXxeCJbUiwznJFz",
  "key19": "5MRXhB3g4KSzkkVZYwjnnQbGjFVCf5zZ4tABRndRpCCkA6BhKywzX6MnwJT9DDntNU83bQQYCfBaHvpmPmKRNfhh",
  "key20": "4C4BJcf36jQDJepDYsWDKqQ1mgK1c2xfafjgnCRPAaq5cjsG4V9EMbKqjDLBuCPfhvowptkvkc9ovjgr2JYusHCv",
  "key21": "3s87DNWRxvmNU4s4wjnASXdwBhZDXsvZ3omW9dzssQnCxgkooNJ9AbZANd24Nc8fsuVQf518BnFNYu7fXu67iZXj",
  "key22": "5teMHbWoXusBMqPBdLb9b36BBoknn1szHtZzhBW71pPeGf57rMgeKN8UApeGfzyixcmYnMksN3LrTH2c2m5sPNKp",
  "key23": "2xaXzpxJUe5q5acBBh11cKaiKS6UFRDg37RyT3r28phGxo1jcBhDh2btAs6fbcX8v2DP7LZy9gJCttVT42KCbCbG",
  "key24": "3SukzZkk11DfPeuTg2SVz5a23atBs1iuQ1Wn45YQmnCfWPLMUwURRf4e1X5RTcCJ6LZosrSAR5gcstWqP87bXz4v"
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
