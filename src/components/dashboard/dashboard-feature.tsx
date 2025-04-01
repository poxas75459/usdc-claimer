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
    "3Qu6kNUzrQU934YwokjovEeyJukmTBWtr5u9YaMM3Xp3AVQY1F4cPinwzLEGjTuaSjutQhw7oWKPKu5X4RjqpJKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33PSbZGWSiEVFBRk4ZhcMAxC5S9q2BcU2fiGaAYKeANTmdzDHjAZrQrJiK3UXVGh6HNMRGs9zv7Agq2eunEfmdun",
  "key1": "426YmGdmzkjnXadbwdvK2N1UJ9mKqQd23DNkDzz1vzABfyePuXSfG8WXhrtg2aG9uMryDw4C7vSYEw1etuTXF6MY",
  "key2": "qRdCA3crHGBWKT2QKJfvfeE5qxQx1YcNGzXP8XZKEnnKFhurkcBHNciJ11wAUC7SWuF93ucGsiUbewriuVVHUH9",
  "key3": "65NEyGmX4yncHahcUCPcuccDCHUYzgAVBEenVmrpUqQyyPwSqdhV681Z4FuLEPFvLmRxshiMvVP2tspQTaw7rdyH",
  "key4": "2SsfMtJgkUP7gvA8TJKcYgWs1SgRtUXV8dgDprfSmjRcBkCbkiRjYmcwwDM7PVqHiL24E67mugjwgi1ncUWgS3NK",
  "key5": "5Eq47BhP1Wmqo7DjXBYuRda92qFj8jNg6UVs6RMCyRJLzD17BebrqT1PssVc4tZaLdMtxbPjnbmMfZ7pwWo5oX5c",
  "key6": "5DJvm8moeu4zVCf9KXpPAfpJjEeSoLS8kZDxVL1u4bqZs18CgG89YWhvaZVD12R1KwAdnC8t1MBXhrQ8DYNzpAtg",
  "key7": "5aEPZNHhPKN2Q86DBWMbCdJUihyif3pBqzGL6e9PGr3AaYvvwcaPkBtayB25swonnzXdqq6aTNnh4BWZy2ekBG8o",
  "key8": "4vWsajv8YVJEVDM49p87gwsVkkUW5Cfdt7PQLJ5xiUdhu3k5mNS8eg24ppKD3BAkmhfNR8ZAtPZwm8b6kiLt6Zxq",
  "key9": "4Yc13W6Hr5YqpvqxfJ11wkSyPCrBq5LFjMzHBJsG5JMsPuehGZH5SFx5wN1N4xgmu6M2FF9Wv3cGvRrYmNTAEgw4",
  "key10": "3km4TXKuPXKRzaGbB3GjpHnw4oG2jSvg5AxuDUnvranY9pYNZ8udvLCPMJXGX8Kwe8ozTdfxQgULfRhidFNRLxU3",
  "key11": "4rS1in2yqv4F4M5TDYj4eTL7VRZQzRYwZa7U8YHRd6ijCkB9rh58hD9jabMhNLAY4owopgA5pgNt1oXfQpQZfapx",
  "key12": "3JgbVABnLNr1EXfX5q6qLHp7Q5p29eWAuY5bMZSAs4ggCuhKNU5SHNZczgR77NrgUmAXP9VkqifYLYMo2d9b1gZ",
  "key13": "4Swb5pNubBLZGYYDYcCikmm5eXoRqG9CegomwgYjxXT86V36yJbavGhFGbdn7hBVvDhk1jCio3wM3K8hTk8BD3hP",
  "key14": "34JULYfnrmoeyuDcURwqguecLdwREJjFM22x4uyqru8uVdUmsRVM2BfAQYQxj5GgeWo8fzhHfwgGWoznsfN4ouCU",
  "key15": "4zX5KCyr3FBc7ovhYx6KVVsLpYPmuDFkFXP51r7oBNfkQ71uDWSPLMx7GCcMqZeLcw4x3BYHtW249MW3KwSKT4YC",
  "key16": "471dBRA44LwMWLCQvjaNDkdcAxiZmwDtk8Z5ge8q5hXFcpWsKHgLGGtrgFoQK5Kh83Y4P9P5LM3EjoLSU9ESKvoc",
  "key17": "5rfCx9qwdKq6Q5HPva6SkaJ6YPN8ZHzc4ufEbABXtF1abtjobdsREzRpjDTjwAmYevbSH5nrbf3oV5UE8hoyToYn",
  "key18": "5s46XTVE3ouFxDqxzEwJuFnqiFnZq1F42YJG1U3uKofbFavsS35fe6AtQVcgXPMeiT5H6GSEUgJkgN492i4F69Bs",
  "key19": "paEYrVAQtn79egRxVUmuWWJkESncqfsh793Nikdunj1GSP49xUyVPuWDoGRDvVt7g4i5tz8yEo6Zpcn8AcBM1z2",
  "key20": "g4whZMPK16WoQJPrHN6UmJGaj2XNiefxvfrJje2odr3EiwJ8tRQpnvt9GfaJQ7UJjD11y4WoPGsBULtxXysQNNC",
  "key21": "ebAKeBHta6GL4yBdhVhdYwDzeRwajeUUuu2CVxVcSfdBtL5De826scpduTRxU1zK1m266DfX4WWngxtWeQQtArs",
  "key22": "4NRAD7EVf8nyvAUCbaRnD4qvVoyKkvSxToGHZjKk4ZJX4KxdiPf4GPXPfZe4ULoh4Ymv8md6T5UjWdtfQZSf5UZr",
  "key23": "5qcAmPxFZqvRcyVJsojh58xL2iV9Q9WU1wfuUuaRBkgVpGDob5m9nX6RfXrGwMmvQzzJjJS7bzryRJUCfghARDgh",
  "key24": "2kedep7yA9mUD8fg5ge2m9c4GgFWoYmtRyQTXwha8iAfFzGzcGnFBUdGaJENwZeSdgrULX54p65a61U3eZ2GG4pV",
  "key25": "4DaBCepcKqZBxjDb2aizaJTHwqTfz8WRQNHcvRExVmRzGZJK4KkJ6TUiZVukdTzYNk9VB4zdHjHd51bzkh66CDY8",
  "key26": "uhDYePFUdBsKGTvz7zAfeWP6Pza33uqHbJPGewkAvFyTVGD4MpvwEktVzJH1wTJAk7BpKuqJcMEGVsL8byNZcMC",
  "key27": "5uMidz9fB4bqcYJoFd6XCVQ7T5xVVghuu9PmZ79eLLYQpWdVSBNgcVbJtH7vLBZgkVyzgTLibbqVRB3g77Vcrzj3",
  "key28": "2LSshYP7PuuedJps3xB6KmAv2cqp8FtMj9iQKZwgSi5MELpRaxtSQvcF3pczNpPZ8Yi7CqcnPpw8buJ9bTWobriv",
  "key29": "3goCbV7HCw2N2bnkpHuvctGabWhBqvPvzdxjsPJLJxKZsfrxxJRshQEBi6ExDnaVV9bKtpfYy5hniSbH8cHmNYUa",
  "key30": "48dWjoXtrAkzCiY5XuR9J2BoFvQm47hhETjS9gMGpaBnoWC8WfEyfEAebdRW79522pf3RbcspmdNNjfVfrQfXtsy",
  "key31": "3EegGhBHTtEBcccgn3nfvRyDvpvSGzZ1DJcq5gyKkrxBnmXvhfjHqGiBNiLEByWggUE22ut4NcgWrnusfGWkZ1V8",
  "key32": "N79dJ9ZoSdDXJk38v3e7GCN42eqVfJJtMeEcjr33DYZPi1A9vNqGYBo3tRzHbzcVqvf9Yqie9nFC5y7VvunEUjv"
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
