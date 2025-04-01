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
    "2mj77YS4Vs94X6iqeVg1b6GhEZfMuxFxURecnwASG9F48WKz8QN8BLGX89UgMpuE51jUoLL5ohV76LbY52L1n9qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UkxcvRhboJzQohYjshKq9F1wU8Z82ub5dMBBddomfTjJTZQXmUsEmNmLQTBDtxHui8VN5PDzroZLiCWCEmEwgV6",
  "key1": "5mErrdkqouH2TD2fXw2EXtpNK43A2zP7ESnUCb5jRSE4rMdva1ASzncm8BPZvRMsrSm1UoCz3681nJn11N67SyjS",
  "key2": "4R6bMHmCcFAgbABgoLWmmwZWyuAv71JWfHSwbaEzuG8dQECAaZdt1Ng9TFeAeW8fwjo1rFLAwcPGkAVaj67PybsZ",
  "key3": "2iRiRoiAitcKb1VGQPdJoSC169WzvgJRo6SpcQ7KNn9NXQ3FVfyEwcRiq7gAWRCCK3BbpJ4ETXGQKwJcnWvHaYmB",
  "key4": "4tj85QGS9VRhBWUXgwV5F1VV2poEZJtY7HApXRXHa7Yngqp4HqQhzMGS5WfHTSFL28u1ZWyJAkApYMsB1sW9Awk",
  "key5": "53paTJ5836VtJVPuiaecNu2WU1ap6pyCTxbgM3AsmFdZfMTkAH53bwXfTDPAe4w9y9nMndrC3ZX9yA3bwBj8uxpr",
  "key6": "5e4dLh7fvN1m1PAC7LBbYbmUTpmgTTmuC2HXJe1MW5m6U4EcNQaxXTpi1QDjHnAZ31L9RHK9jWjhN3qvWiL3apAs",
  "key7": "2WYBJbkmiFve5eJDevQiLYwAF3o7cBKLuGjqBGC6aJBWjZbWjqpLgSBxdNPK86kZS9xBVio74bQSDg1VrqoqunjZ",
  "key8": "4vAyjKuFW8LvwsWzRyx1f3BNa9PtBBTDMRD8zJUF8fWWBsvnjtzEvdpcW5AgMU6h9DXQVMKCAj8EJDsE6vTGUkSM",
  "key9": "43vGGs7UQ9dHTfawxbkWnMGqDWg9L6kwoTyzZusR27oC4TaPPFJqw9HBD6mRHEXDz9dmTCcTLsKT24oiehDjpia2",
  "key10": "3W6Rwg11FdbfNzm8hXK4uhADnWxP8YNKx9UgSdjKa7N62oXg8DXT2JPtt8kodkWE9KpshYhDnHJkxPMK76NQuJfv",
  "key11": "3p9D2Ws2UvByJoPeY9QceffL71rCHWJzi7nRYudBpdWsni5CFx7uWVaUFQDVkd85gr3HXH11LwtxzkAjEeG1fpLF",
  "key12": "4ZqWtoPHcqg4MH1GL1bShEAX4rVRGNLgJ5dEmfm4ZoJAYgF4wdBsapJ3FC6KzRDM9qLs63ANawAwmHc1Ygi72P6R",
  "key13": "5bCmS7wKqhfZREtckatsm3hSYhPpcw54mXJcarmu6jWAgZkMdACzHEkyndXigCoRiNX3mKVAfYCBSoupzGqjXBCH",
  "key14": "CTRXrXDXXXATYtoEkgjAjfzQ7GvJsd7ZcrymTAteQXoRYwutDsnu11pJ5qLeoGkhPiVie6wmYthYN2C94HN8Mji",
  "key15": "3dVAnoUEnSGLBxa164G9nDLUcCnqAAwjn1cbTWBVpnJFX1rX6hkELPLNomcuGtZrSmEtQDiaTKeJSS6ZMHgBUFZa",
  "key16": "5eigL3XwqmmruiR8s1pd8BicbBhodA6dUiSDp5V1oRECVoessgWyfeBkAb7f3oMoeo5NFupFDDtMnkTtVcARBT9d",
  "key17": "5QkzySW7zm5fM5KmoQT3bouBwqa6s8aPgwnteFYruqbodUoHL2GzqKVGQ7EV2wwQHaKAseThjJvYU3RptZYX65aj",
  "key18": "3PUJcsVDNJktrzVWWkCTB5PGasy54qkt9uWdYyCQLiDgpH4DJomo4yxoArVsLNPjoKFZidD5WvkHhc1RggFEFtz4",
  "key19": "3seuur9yyPnpgQQS5s9Kha67HyB7kzm6jrW9xtiZSJf6t53LTXX1YgWvMG8KT9UgUjdYUGPny353AxnHw9juvMvZ",
  "key20": "5rfGng9J2Ey8zbcrVxnN15GNM4z7ZhtUaMuXou6MYzhdv46NyZrt3ZhCg8cKu47NMicpbzegkUwuuR54VHgNQgMC",
  "key21": "2mEb5k7CcjrL6bMEnAaPkcJs3zxTFuSLQXfwBm6YVHwJPDim14uQV8kh6jAhwcQHtzf2ju1WWY89wp1qBCUVJNPj",
  "key22": "Fb5fK1dgKEneibycnDPPs8kUMfUQdNSBEnFGcJK3wuyvpo87dTCLBbe4AbC7sb22jgVq8ruJywDWZfCo9YZ2W5G",
  "key23": "5dBenZvbARd5uih2arFrCenjgGraGStByBm32QK7R94gx5pAi7kCxxkRtYZJNnjQ7gScMR1tm3y2fK4doqfe151F",
  "key24": "2y8GAKa1gNzvZ7qYDYZBXyQu8h8G99kPtK1eytTP7pm66ZDAfx6uRzAEdQMJBDV7ZWP1djg2VkMfvm8AwpiwPf3T",
  "key25": "3LdehPTnCpB5M1KivjYgwcsiNddkZjnwoUAfiKzBEPekQ8kgr9x58djCzAtnm7AYUeYx8piv6DKXB8UrTHBmX4jK",
  "key26": "5ecEfgSN3mCYkmWvKMseNbaNXyaB19khT8bWVeLMciuT8KNpTvd56aQoMU6JmRr84WRyECCQ7f6qTPt5iRKsD6h",
  "key27": "51BkF7EyUrvwKfr38koPasUUuZwyK3HgP5rDK5fhe3pUut9GbgoQz5qYKGRcUi565GmTNV2W7wU169nHgwmh8B89",
  "key28": "3VMCESHX6vRcufNMNsDEhwQU66XHVfrNKf4FqaEATCUkRZXrYQVUUv4ag1PFbnnegx3bJxLW2sUMqbDJT3wu81Fb",
  "key29": "2YrKk47kHFjafbch46JvbzGcY2gQeVCxTbry8UHC4vit4Y1kzmkZe8bNu1jadQhALfANCF2jBAqFm9JBQa7jxjyb"
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
