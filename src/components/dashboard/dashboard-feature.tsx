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
    "5iSyJiGxt6VKbY6GN6GqSvwKweqMLVqC4BcYar1J2h7eETQXRhtaQbAdTUKAuGop81G7aMXSp9dBSkbRaet4WeiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27exqh8dhMGAx3uVmQeTJiqXSEc8Wm6P78xhRNz8oys96HBnnfErRG4KXLodzxrGXem1CgKKkuftawwnC6u1Zo4x",
  "key1": "42v82GFyDp7pTDbNi3Ey46HjVYFfz8qqYELdK7EER3EzrAA7BorVbUASfwZcMBMb1LEkV5XZGMJWDDT6wuRuypT9",
  "key2": "RzQAHtu9gLEeAH5wfSnZJJzVG4XWeK9jNSBdKzyKHGNkM1E2eq53FBSV7FhGNZCRkhCCCTVuFZHkq47E1e1Heai",
  "key3": "RbFCbcs4N47F93gaTJsSjVRu4bumkKdh7VzJYHd2kdCJxZ9ZAFfGiTZqxx35ii6a4x9T8qmXcnYKuJobhR9JcWg",
  "key4": "2CBChANG97YNWwgQqMUVsA9SxxeTY4vApJMiH5CdsvKs1mCkniTH6HmZRyLXkq7f5RJd7GnxvJWrnzgRknMZPmRz",
  "key5": "5vo8hP4TffYX7FemmxukhYa9AJTnq6NPXdE7RV8qpzdVN6pdmciSixCZE1toSc9nKeGc8oPjdsHedi2GQV3u7hH8",
  "key6": "64F7wvXsY1j2EFqwKrWBMEDUv1md97Rxe67JXFrNPE3oUoerTRS2vEkjuqa8YCfJ1vcgCntNHDg1mYPQtMEqAnkL",
  "key7": "3gS33BL6TkQHq5tY3ACEto1EXbFzbMu6aoUmBFwEkmTXHenei22irAjcy6YZZQsq6g5o9sA6mNhHVd5hZa8XyEU",
  "key8": "4DbhvApgEqfZwDsyjBbAsh6mXiMguQCZjL8ZExgvFZi3zawPQBqshE4jVsTshTzooWZjPutanE7AsdDmoh5dACKe",
  "key9": "412fPYNJ7kvTukRi5qJTYmkxRLaCiCe7CPK86hCBavVdQEaJ414ab8FAyf58j86CVZavnEvPxFJynNqhMoExn1Go",
  "key10": "47ZUsB1siSQN54BiUXsXA5FLWgeb7y2fuKDZGHwRJ7k2txnAAyyawnA6tZu17GrMpEgNns4bPeVJk1q7y5dwDSfN",
  "key11": "4t3yemQ6hpNaqMKZykPLgdhXHxMNmRTW6V83WA6kwatLiEr7sdHNGba3PSJjnWt19yr9Vni4qXKiwTFRFqY9n1pe",
  "key12": "51LTn8nCnxatGj2Cd33ui2E7tu1rNRKCGBDfY3JdceekwYwe4w6kJNwsVCXNXpsnsn9cRdkRpxq5qw9eEmeesnFh",
  "key13": "4VpAxkQGytEtxUvTMtkAR9veBbzCxQ1jpPYxAqc3ySgsBKmpmeX1DbBXwZtjusedvJnAw1gyW8d9BkTns626ts63",
  "key14": "2uxZicccxFN9dyq8SaiB7TJEgjKvjbrHSWiFBoBPs9sCCYATuxs7KKmfcFAKwwVdxaV1WRSnguqRJf7U9TDFTHnG",
  "key15": "RZJpfpV4sY5WrAg4myUhFTjqq3LJ1bDctqy5ihNdbkqfqTWC1PZRHdFwQ9iGkbjQ3kLQCxEgSx3cPHhxkif3Qje",
  "key16": "2YtCB37h3J8MJBc8NP6X7RyRGbsYMXKoeUvmFtTr5BdBH8Vi2CQwzfhMhXgQ5gr53W4hCw2AAbMTdEsZ9AWp8vn6",
  "key17": "bkcFZcvHdswMfVyhgJrR4wJTtMmXEGujeUELPhtVVx9gopTd8ETppqQLNwiPfe55uUuo4s6jPv27PkVq4NrxmNS",
  "key18": "64bhUBtyHs47xjMeFhRLdYPi4RvnpQPTFisrygqzhGNh6mh67GgFcbbQqjGnP7f6DoaEk3yeUTTubuHPVaqmKwXH",
  "key19": "2ddsa4EJsTCkoiXotYDsshQyb4PiX7ZVXzDUMGQLqwETy4ngY7mUajA39oZPU2BqV5YPwEiCa3wko1hWBtXgXEtG",
  "key20": "3cq1p1B1fKGWq9muCQFhU2pssfsVJmjLBPpLW67DjqwmcgCWPvD63jNKKJGzELE7Yo6PUBKiycXGoowXJ5AAjjQU",
  "key21": "4bJPi6Ukn1mgxmbckM2BDmZHfzK5mvh3dtM9yZHLJ5LpHmAzvw6YCasSETAJ7eQT7FM7m8SAGxEJX9ZzZ1ZD15py",
  "key22": "4jbRdq8HN31buxQVED1FeqzGX9dficdYoZW821ELkjxZgtaMCP2xsciTJu5KsZn9smBdYN3KwNnseY2SwEVGtJWF",
  "key23": "2jfTph12CEhjTbpzzf3J8KVY1akw5m9oDSScxt8y1pCkHzBQRMEUTs47bdc4JuNwrqrU8ENkEihwdJ3qykjFysHS",
  "key24": "2Mc19zt8xRfbZvKbaiiJGffoggXpU386K1ZiQiR2fbb73fBQYexEoRa9jxSgizDVDosnxnmcMYveeFp4qopr6Uzy",
  "key25": "61d3o7tuqEVw32djtJkAdTbpfvKuybghkQgtXhy2C9uUYZWYPynVRatzhu5fGWZx1zgasGquPHxoUf7tubcu76nT",
  "key26": "5bbv5Bihswis5xgMZzokwbwHrgBaTaZoKvt3wyVUQwcHQhKVhi76Zwz62wphcbPFcLZScyeTdBJeqA6WDpEvojf3",
  "key27": "252s1JgCuwEpLgXZonDBZHDK7EEngVqxBFRj3NNP2oQDY9be4vJhW1bkgkeKHAFSkR4kvyCKG5PzhJTJ8F97Vkuo"
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
