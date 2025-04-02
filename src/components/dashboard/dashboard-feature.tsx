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
    "5zhxhUCoGwCVTbGonGE2uCTf9nZcLc5Sxs6ZGJkCr7QY8qPRiZiKG8kzR6ezbq4y7Evwce9wS7i73Z5J56QP7mCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36KQEUYBHkjLSRM3bdghvkNUhWV5AnAd4jmNciR6XWjsycKTK3W7yjgra3228WunPuRgeirbo1WngLBmU6Fywwtz",
  "key1": "5zWKkG6h4ejQjBc2SWyDn1QMqq4ovnZLKv3AAuAyKMav5FA7xG924ysvG521SB8PmGA1pB6picms1GpbYs4rTyKC",
  "key2": "5AjAdY532j1LS1nWBZsRigppGVLk1zbFYpBxFxmWouDptPLELZ7XrLZQzSJvDGcc5URteHznBBqbRgQ829ALP4Sz",
  "key3": "6477b8ZEa3B5xUbAnyTivzaqtrsY9p1LEUrF8vJYFtXdnyzMw25D1hDtdUVBr3VJo26AwPsJjnVcAnczxDAnE9Fi",
  "key4": "5qvqmf32aee9ZeKQYc7uUjwd7sx15Qovty2mvtKqXEQvgsnTjdU4PPstY9SgLMAe7DAdDxotWUb4koUdTvx42kUF",
  "key5": "5KPbeRmrSv863x1kYo9rbhTYwGL2sZ7FZu1ZJNfEBr6ohikwD5kzJq4V49WttvsvSHa46j8jLADEUtD1Aprt8KYW",
  "key6": "3WEwhD7Rwn88pa6SPXjf1DZ5y4ZB9XCQ8BZ1kBfLT9ZsvR2EzS9QyJkK89kSijFP77Vu1n248AuJSrKv8q3Pvr4z",
  "key7": "2xKz9d3robqwiYy6B88G4tefbR3pDuhndABkJFjFHNFPBYkoiriGnUDw4skR8TeAy8SKZa1VcMBR3XDGCvKMVYcC",
  "key8": "3vEiXFX4SdimNkUfCKduAXzpXd4nxpcXSyDsepbfRC9DhCZ3ETxyaAkWLZ7wKjLLmxiwUuWBJvtHnqGcM4DyEa3f",
  "key9": "4V9ikdmtxTyuZn2FaxFQDKcPqazFsigy5f6CDoqV4cuuzcbisKEy8TCyVwJKZDaxop9Fs3Ebmpjzwntr1GaMSEZX",
  "key10": "3KeqJkiMx5w6oLRwHbFhyq9XHTb1MVA2q5vGWidyiicNmyo3Gc4zhqdCLVrLLt54PwfWR4BM3PV7WoeCMPTJiq6V",
  "key11": "4XA4zsir4rzNnJzKobBnGnkUGuPzYUheS5JEX16rdVobEynGtPu2Cmz14VizyFAio3CaLQykmxsUvZcEfjaGxPxQ",
  "key12": "24EuQrJfT8dakDTxpw3WgYRW97jxp9iamfdLtXVoCizUQV4GB8XksiPZDJQzap8UgWU14L2PJ8QwCgn9USNui9Nf",
  "key13": "JU5LAtvbgTmExjdw8jijASZvKefxYWu6hZBoP9Rba5hdHzPCJdQbq2TYAqtjhroXaPtyuHmwHRiASnpM2LpvRh7",
  "key14": "4TF5QtGtD96Fn4ak8a7wDL9ywm1ayxNpYTQRNKKLrJT2mCh8FtVcyyQoMFmTAwAwCssYc3aBTCjdJBatYS6aMxyS",
  "key15": "4kh1qtBc6cuJyX9hNu38th9MfGST3f4X6YkjcGv7Ra5HFHfk8np7q5ZXknh9vCRFJkbPTZ2rKYeMGzmRcMne7PYC",
  "key16": "7UkafoUPkcoYkbFrYdqfzmVzaUhGpfJkhUNPjFmVTxTBTjGkh2q4SvgjCGKVivYpDPjg4skQ3frd12AVvwBfL9t",
  "key17": "3i9ddMc6s6Mdo5LZyL8vA4qzToQPgNTHv73R6Dq3RbsN6NcopDCTi5GBp9bHMUMcB8tDdh81RuYf7XL7Bb2fLdpz",
  "key18": "2ieYwoJH334M1XZ1xy689JY61rHBq2w6jkcnGJPBpBhe8BBks7wqiXbbZQmUKvbVBbVfzNMNfWmc2W8oBTVBxjUg",
  "key19": "4vhiEicgUcg3aSLLkFwiDZmbC5CWtT7RatwCWwe3NwpvMRa8wpkNWR5XAqn5GDwRwwK3ypDoLKAUjJYvq1XzSffS",
  "key20": "8R1Y4T3tDgZpM8XoZNn3anxFUTCoqLohhqySZcoewopG1kroS61VGBRUhkFJJnM7Uu38uZ2WmbrDFAqdN9Fm8u5",
  "key21": "4sPiYQbuz6zGrSYg2erBMKHZDc7bH9FTghz2A9jt3ptNYeKzrGx9fhcgawqGsDPjgKVmPFPEBWa8oAjtkpaJZL1n",
  "key22": "4cAm1GPN4B5Zd3ZrbCUEmky9e2J5TamwYCKAsUZcPHyej8psCnfdy6RAxu173U5NBhVSKrtbiHHMWSQaoet4hFBY",
  "key23": "3NNqgqd8zP1jVbCVatvJ5rRwuKkVb5wb4a7zx9kPu6wYHFJjr5FjZk3jNgDyP2Re535Hh6tYkUh6KphuuSxWfVkh",
  "key24": "57pkqTvsx4MSLLemRgkaas7UT4y8pwDTpNRyxyq9pD6HDCknxqC9TrpXHnZ1VCXYF7yWa7JhZX39kwMBHaMX5CEr",
  "key25": "4skkmGygdEXpD8LYqmyvqMdqZ7eB2dfy8ocN7VYYE7bQEFT8BC66BCdCsso2T6wUEqSQGWR97V87rAAjWT9agmpQ",
  "key26": "5HE9g76uWDtLQsnwx9VzRq5xf4axet7V9gM2b1Mma6nHzeqGcQfA9GW6SotHSNkSjYXWjjxdHb7c39p6mqUMGbau",
  "key27": "3BAX9gKdiCfvf1d4qhswLWRYznWF9Fq3QxaAEp4kLSkn2u37s4W2A2wryNiQzccsDTud21rcuJEf8jiRe4RbWGDs",
  "key28": "28YoULYQ1r6kYay892hhd9iNz4fYpeSrUk1HDz7wW7zM2WVDfzGCpMaSVL2usB62zHHpGnDkhmREo525r5itETu3",
  "key29": "4jMLFNXQ6vhSEcLpbKfFw4nNCxukyTNPewdjtW4mGF2WmytCoB7A644Ryc4DzTQrEumXT53ZeKGfeWSeAkMPGmFc",
  "key30": "41nvgRLas5A7hifgvSgXi2eGp4F5mz2bYp2X7YsHbnKgsLqaHRnCaJZb1Tz3a92weY3ATrMzaob15J7iBbitSgBJ",
  "key31": "3TAKGRq3Vdoh1tqTbeXLwUniQrPWYZV6SUM1SY9NwUBbXgzaa3CuHrVrh49kUPpLsz1guTaDKWfgtSsgwmVMc9jN",
  "key32": "65PqsupeE7cvCJ4rb2UHMUC5ii5Diiujj4czpNoK38f5azyguiUWwnQEnznn8ynZU93fjobAotY7pGTXJz7jUjTg",
  "key33": "5bpFu5MKVQ5BTihwh7wwqiLdB7h7KrDgH5XnZDnU3k6qih8CudQmqVX86nW89mXGwTqef5UoXVZVsunCbs2qTXYu",
  "key34": "5dSRpQsTiYSv1DQdDTEVkg5M6BkPC7rw2K93eoetf8sJCupz7PpbQzKF2xJKzs3ewnzUbBugeeD9PhZGjVCMuQZw",
  "key35": "4t3GiKzyzfCcSbamKwrRasjD83nYzHqsNtcNBhkADKTzb5gPcHtLL1uFmkU3pRBYYdsKx3UNvYeCPthvVDUMyQKv",
  "key36": "3c4rBncenHCkUtTrmzU7LAhjKwFCxfsEKngPhia8SeiUtJnQ6a3JSkDueZhwcJ7N1HtySLthYz8QGyphz8Gz3YU5",
  "key37": "2kK2V4bCP925fdNfGis8bBLwimVPKKPF8ZZKSFZ3uGpoty9ivLGFDcLLfJPsj3QDCsbxPkX4MUdZcHYSCcEL7qEV",
  "key38": "3eDYzKRTgjhz9WUpUm1225NX8Gw7sUaSsQJZ5acgd8xjvoaKWUVcPQmKJK7si3zNtWhECyYwvsohy2tj5auTsXoW"
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
