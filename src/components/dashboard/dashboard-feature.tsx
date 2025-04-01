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
    "2trtMfzq36zWdchPWukW15kwgqsPAtvy9ffTHoZFknVi8bjAL5vM4qwTG1T5aCet3R6cG7XFVS4cwdYL6Vz27LLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRheX6vYuXxnqr3VhXSAqCyygnpXY7VQ1ozUrmwuogrzSjfskCazsYBAGcs5zNtEPhnHDFFgk9R7WcJnpDJz72C",
  "key1": "36B1aK67rdcQNHEbKiUqxStyV89FXbTfBThMR4eRRfsr67fQ3sLEBgMDd7Tz6S4Hxhm49gZTAipsQ4BJrFtYcT96",
  "key2": "4wJTf2ooHPTfJSpoRUYviAjYUNMtCJTdZDDJo3jrrfqAaBoLtuz9Bb5SUUVNaiubX7B3bS7qughpq6NfGZ7u5QH5",
  "key3": "46YFRKBPMrcaJ9xA4u5TheAWwdbVP5r5CdcvHopywsgfpaoJ6ZwpJXWBnEzMvdRYpCEWKzLAtUUHQH7vvYVhgi4Q",
  "key4": "3cPP7QMx6AfPZMWPbV8GbdhJ5StHnX3YMY9ovtbW5cUwm13zG9nLQgNsLofcj8Qpc2QAHiYurj6b9J37eyyFpAua",
  "key5": "4ETYAav5pCUAwpn8tMPJVoxSkSh1ozXxwb82WQJ6DtA2eUK4QrYbZLFLWitpbaVAMcny6GGKz91P37PL212oSTvp",
  "key6": "3LG6G7jEvXbfgtq3fhVpjwRk46UnTknvVKbEiKEeFaWVXbgJ6uAMusGPsiYbVNY8TMUa87hbVdkZPVSaj14kXkts",
  "key7": "5jMTTvV9KXN9JhqG71YM2wpaub3Q44fWDbhmoyh67iJ5ij6MQEgNP2ohEANzyzTECejByjgLHNnU9HKffg658ESY",
  "key8": "215jBNaPZ48KSh6kapXLEDJiEotHAPdPACpJR3sJzPotwJ1nM4XwxNMphUHpv1dAJrmt3QFxdphMUoAswsfsXVuh",
  "key9": "2praAHWMkffvAAs11Ka3CeMxgZcp72Jv6wk49YpYVjS4sEecUbZhunr2Jh79dXwzZKzmmUbETafCxVzQ6YGcvE1J",
  "key10": "4mA31Dr2uxDXfuQ7SoHQami4xfwdTFDjC5LdBDsFQrE4pEWQepZwnvM1G6TfweKDm6kGhsKG41yoo8uymNZFT5uA",
  "key11": "jnb6PwDrRF5qDQn4u6N8QXiGsqutRzCsBkXgCFEWPK9hgQ3e4MVeoG22UdWdNtkv8TUerM41GNAnEx7N8UZzeg4",
  "key12": "vMB9Ana5VL7WZH7gqy8mvWDNjTaC62V2SgdDkMYDTQjU3hQK9s1svsvfWcGt1XU5qNg67M7ZXgjyhbwRJKPyPS1",
  "key13": "3kut6pjU2hnKXpDFEHzLsZRUud2FYVk4WZqsY1b5wNBUW95eaFEjU2oEz1pSUPVH8CzVcPmaFQCTTmdkmF6DWqq4",
  "key14": "4By9HRX74mHJ6fWQSbUhq3noB7DMrHQrfguVZHZYSGjUK56dXoxUiN4AYmVHccFmpkAULL7PixYSS1bEMJDUZkpr",
  "key15": "2jvfYvCmaV9XG7vx7zYiCmsdPS1Ltd1TojcUyrv9tEKoSPH1Y46qjERpgfJxrsjCaWzS9BJPuC2a7XDVSpXpgebT",
  "key16": "5fEePJUqp8FecBSJdz7QkEdXaDQJfXxcGh38D8JzmXLtEWAcq6rbDrC9zT5x1JHDCCAUej11qRJZcqaBwYFcYGVL",
  "key17": "2zfNzqLb7mBC7nnLU4vZZWMMHCquKS8XvhDdrjHqX21B5Mst7qhmpVV81FUPx33YPv66xAnUgxECDEA8jHzAcsLF",
  "key18": "AYD6LgExbunpwtHG4r2esM2tKdizusQSShJugFFSSymsqUgS5yuQFYKBP1NMgQddbiYBq7mENR4b4z7a85nia9s",
  "key19": "5RNcg2bcWAXThy7uhSsr5VnKDHo25Zo2VkFNLz55twLT9xjxRYbrW8ynU4qcPpmUmzHALof8bUFoYwQxQjx3wo9J",
  "key20": "2ThR2CnqqwFP6kaPNR9MDhUQLtdn7k4nVnL9TovQ9pcxQyEpDciNnqb2EZzuGjRkCi8eswSPWtCjHy9VU9jVDDiz",
  "key21": "3vAPPMjSh9qi5vDsFKwSTvaEL8c3MJASkshMVCuJPkLhRK6vPbZTBFnkhkV3jemhDxzPAq2qopZUsFgtH4rXbCwD",
  "key22": "5vA9ir4UZNk6bckCNMha7jcC9R1tqEH7RMCVB6V1ftG2wCyoyGxTTdUrJTMkxCEGNvnEuyzW3iKzK7Kt9VEPGsF3",
  "key23": "23bqdZPYicnqnhZL33f67BHzUxf2R8UFn6HwcUdc9JC5c3ZFxTVsYsaHwibyEYMSggZPcFazSir9PyjH773GzKad",
  "key24": "Jh3KZPSj8La2iWQZRSDw9rfe7kSQP5B48NXocwSbyX7W5VmwHNuJdEAwuCo2kgTV9f8LrevV1juq7ZEL4m8UYGe",
  "key25": "3LmQ3kVYB3wyvKASjKDnb4cJtxpdkRYvVF4o3sT6Ca3s5CedK8v69UHX23Z2SQRntbAYrzkBfhk7N4GhefhkWFFD",
  "key26": "5yd5yZwRQWLiiQURcY1sH7LUC5FzCs41ppTdAhVZCj6rqj6MgfagvmX9zvr8kv1BbQNwkBGBSknZ1rFS46sZPPkf",
  "key27": "WoSiFqw7TorZuDx6m6YpmwaS45F9KXrcSxYe5gV6e8U6sRosimaJenSogLwPobRfpShW3zqxG5rDZW1i7T6M535",
  "key28": "3ViCHt9YiMHExbqjFzCV2GqUUa1Zvpnabwfau2LZ5G8ddgxk2eCujRVq4jsqLVs93P4ghyZMJ34eNo6mWRaLm52Q",
  "key29": "5Q13mht2P2ht7RcwL9QbLw6PDhNBce1RdJDceGvyySTqs13fiwd391rTUUz3jbsugwW1AKHDvn4rmFS2PUCBTNNH",
  "key30": "363soKuaZnRt7LByD1iW3fi2UbMj3yXnXcorZHqkHF7XcPuw292BxagCxcxxZuUSNUNVabY75miRYod3CQXHYg4s",
  "key31": "2pBYmyt8ZzyZuw2rYvMgvoSjKHYtmCmYXqCbrN76FiGGLUzJz9YW4dkuHkdsmtjVumdJiomojyfB2VPFCyN1gp9X",
  "key32": "3gvMEGyD2Wb9hYNL4jYyNbgm8icTVWy2mS1Ay2mpnzQcEATNBX1dwmPeZ3xAAxSa2osqbj6KLA22KeQae2gkTjWe",
  "key33": "2L8JbDVffwdRWt23ZprJoztrfxWdAVVYTB6r743vmvsmZ5wxz6xzxELwXR4Pm5iHXXnhwuknWAyfrdkrUbrKHTs7"
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
