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
    "5r6AxAPuqModSJNiU1CHSBX6fd9WWDDz1DFAypaccRcNxDjZXDmZo8ch9Wg3XosEHHudsmSgCWHvwQ81BKj4kat3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kZ1WQQedVRK6AjHutwnSa1zTMozokDqHpCsSRNQH6SWFXgbK4XE6eJiUvfWVHL6djLxrgkw5VD2iGv4DswjNS5N",
  "key1": "5ntxqTAdV4xEmYraiQxTo79Ec4LpqSQUnrypqyaxenU8cBmyxZXhrypJ27mymPxU7fmPw51ZM6WHr3LvYgygv8f4",
  "key2": "3QN8hLHn6LUfmQhx3Pa11sJMQDocj6i4UQyQZQogZq3Yd8nifCuWVMeVbpa8CTAoMJzQRczhVEJXExiebiwgVweZ",
  "key3": "59uJUwBmax1i7SCrVr37MzefEWJnS9xJjN6mZZdUzhXBxKHHWPeXmooU2mWRqvwB116y1d4jyBjoPXyHXNz2EnTm",
  "key4": "3hhpgLbW1o7PpwtaiHBP2v5ZyG8QUZi81Xmi6AbpXnWwcYgSJ54UNbcP68dixhtscQBBaBJV2G29L6EoQuJ4d9af",
  "key5": "32GX8kLrk3hut4Js5VgPL8BsLvcmsx47KSVDXAqXFXELkBwUPuTULoaFaqySu91mHx7WS9vx46rhuLovzrZmGoMx",
  "key6": "2Ug3DiLDkZsXTEY1s1ktDGKuULnF67iNEaen4YidH2nnQYqBSVkLV2jb814JcBdXhZGy2GenN5HVQM7jvPAxCgek",
  "key7": "5LWJCYPvA1oeqV6QXueZ9tLqo9DGfc94FiYGyjcdb7Dt1kNLsNGwsMeaAsGbQQUJbq84sKMBvNpLyYBpEVXXD3e9",
  "key8": "42mERbdMBC6P7dTJBnZSKMbVNKHHntwXSjhzf4oAirtk4RWUw2fELq2FDUApdC4drkUQEhoXWGY3nvfKRZZf1e6i",
  "key9": "48Wwd6MCUEDkHrtu3TmuP5E5xYAC3xL7NqQkDTGM97aE6Rryi1k8VdTpTx5o8bNZ2LaCHuqGtJtrabH4RPC51P4w",
  "key10": "28yF23Fr534jCj2K1haTYX28KU74wLaR9q219FNNggQx2GbRqTJzct5Q1WdEHkMZK9geJZqh5cfgNUENwwFjSwa5",
  "key11": "66bxTsTpQ1eipGQvaK9ubQbyEAmV684t5r6RYEJtFUsUeu86ZVNUPgEuALue3CspL6pAYXjEQ9sNSWbMjFnD1WA4",
  "key12": "41atCj65m246ZWx97zXEPR6GpHep7YsvJrJwScTTbdKNNk37oHsPkuihXn3cHKVqxChe8vfMW2339sVfnGJxW9qy",
  "key13": "FUgViT8PJkAQXrRDzqQQDqBN4TNJwCHF6GWRfpM4m1JocghyjnU9Cj5hgWqoaubffXC4Z1LTFa6uSE3hUHmT1Bc",
  "key14": "3EtVsLz4Vez4Qe69tBGeQo9KZHwQfpJD7f92wHRLvLoxWg2pfoxWQJPtaPy294ev33CCR7oaACvNwkxJWseTvRmc",
  "key15": "5bGbLvM5QGZVWqiusgcagPBANBVqg1tp3YBbjrDwQCgz4stsjCs4PaoqJXXzZTnQ7BmyLC6wfNM3TceqaKsUJ9Kv",
  "key16": "2boBPXJt9qP3rdZLpkNGeeZ5UbevAxk9TxuHvnCTdfYUfej1wjU2Vgb7ayHRusxYUx7QoiXFHfsnAok6AcZLXsrA",
  "key17": "S6VYMRT9XTnNxW4nG1gKCaN9LpndaHhZpZabTHXjXhvdW5bNrmcjLk4mfVKDEmouMKEeemMAHaGvs7yHCR1nVSb",
  "key18": "Kbq1vhu6XX6LY8h4FktifQEAnFAkUgDMBEGvMvLhbBJdZnqUBfuKpTGavKUn1Ayr6azqXkEm5d8zyAzwamnhjcz",
  "key19": "3be8wrPs67HC1tDHZ9DnY1Shs66ithaGs6QPgeDChUop5DnGcDHbfY8BJEk6fJiZNYWNgaSiajYs3dtCUQHPZevw",
  "key20": "48hyocCCcJMKWMXVSWg6oyHRtvAGpgut7p7Lb2rb61rQ6rj6CuAnjmKkK3iW5TjPdSATA71mxZZoamQ65iJRif2x",
  "key21": "2UWep8FnwE62QdCMDmwRtju1dA5kBLzBoqNzhiVYQd7fHsA33cnvcDE3FPea5cktQCo6yDY7YfACv9BCwi87XuJ2",
  "key22": "5YNiv7tvA5rWSvhpMkh5HzohggcSNH7qVocDP5EWt7ib9txqRKenQPqjB97dTDZnu3d6riYZSkYS38buxgX7itAv",
  "key23": "25YXuTvHdQ8SpwCqQpE3LZ5niCq8qevyfy8G96HirLzLCZu6a2VTZwKsmQ4PhitfcvK4JC8J9vCjB3SaVsTAwgXJ",
  "key24": "4zwk5GsExpe8UXoUBNBB6RHpVpbBQWQoqjDSoVVRnQV5MGUV9z2Q1V1LX2mbJPAR4k6mzacrS6cZ6CSiwivGRzFC",
  "key25": "wBPZRHi8ATJR8Cf8zSabUGb1Mxyf7LEtofo4QGkpsfMRJ1qBTTetM9ikF1oLPdYnHKNnaw86sppV78AuGGjMp3g",
  "key26": "3F5c6YLUUv7Pcok6Lu9ko1Eaf7YjcjQ9LNRiHA45WYSdxVsya2vFtAXQtnn5ykR8rptWh2vJPvJgfyytmVHvCbqE",
  "key27": "cW6Yn83EBcQR2akoaVYoqVXvjH8SXUTmKt8eT6Hf8foQbzvxoSUjKGrFcLNkdst581j4BE28Hvf5yPqgtpBAi25",
  "key28": "5cVc4P5HUDUMk8HAKew3RR22J7p8RLbLXTca7nN2ULn1svBwqv7V3cTUX2QetuSScsoVPGwsrHTrtdNb2PbkACU",
  "key29": "2VxX9a7uRxyH2DKEswQnMpVbG9Ak6kSijuRKs5i2z9kZGtDRMvAe7Wz8TgbvpMeWxyE1exokBPV9FU78TFSiYkwB",
  "key30": "45sU2LNCBfnMa47S4YWkoMW2Maj58p7WD9qm7XRH9eD5gmsts5NRHLFPX2ayn1GUUUUVrgsaMvgDgq46sGgMPnRm",
  "key31": "4Y1BQTXVdsYU47D6Kpd15RbjX32jYeMFw3Rdvcj4v9RunZBu9NoUHY2FJMHgDwqmGrSJNKLgkYY82PSnxooz2Fv1"
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
