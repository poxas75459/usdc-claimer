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
    "4sqYNJojVNHTofLnTkGLHkek5kiGvkL7wvhsV1MXPgsrW31gKW6P6anXiKr9jcQQSHVqhcDH8ZBX3JdTMqu7Mzu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64X3Luop3HSTvkg44P6D5GyAB7tcXB1GjYBtCZP31zyYcA88AWiGKRRaxXb7BzwKX3rSiWm8SuGsaNZX4CxEXHnq",
  "key1": "5hpt89rRvLS8K5yzwH2FWB6dJQ2vnDjibWe12sJmrCkH3bKuq8PwfGm57edQbZ7RyxZ9phExietMt2z8TCUJ8nMj",
  "key2": "4WapVq5jQvx3nxeUfZm4eQTD4gGSCoLDuujFo9h6HriBybJBmiW6ChQFcHMSXKovYuMNKiMSe3cLA3uNZ8QxG6XK",
  "key3": "23nZHeqpFD3w2qJeAcHUW8DEU6x1AAifo5mrZFW78VSe3sEawafkJi8LYhBqmdR93eM7yxVffrotHZWhud3G2vQU",
  "key4": "4TrW2SdZhkbuSWJDhw1HDJ1135tFdCj25M5thvs9sVuXWYBcqSJNQUi43nKXNKdqvDMAtKu1WDTqjVpXK1vcGVX4",
  "key5": "2NkNkxm7JvtcKyYMx6Krw1Z6ZoSertjocoAbF5zyvr8e69wsZt4EcAu66eA5JmyNpD4vWBoRx3u8HCLxpZkCkdSL",
  "key6": "62Bt5mTeywk6oiwuEgqChyR9xZMoJHjRV1tHXL6owWdtFf5H4WDsDJDLBDWZmNZVqYtLFmVz5HUeufoxET2ARdbF",
  "key7": "p7Qz5n4xEQf1ih3jYK7mUzTGZJaC9MKWvcQCpr4sRJYAva7kVb9HpgifeiXvPguJAXkcko3Qeu9WBcLa8RL9kza",
  "key8": "wkdgDBdskKaoNEX2kt1qH6Yjqs7saSRM2rGfeYeLvHQTjbZXP3vwW9Yyj9ECXvEh5Nu8mv5gMxnMoxLxNKgUBuW",
  "key9": "2eK1CkCpVxY7UStGcy2vo91gf58ebWoWm5qwQkBGQyUa54BnnRQCKJjGAcoRmbxYrnZfQa8UkyB2qx4VMfKB2uaD",
  "key10": "2xztbcq3MH6MKoEhkqP79qokSkfd6useTcwbMd7fdYgsg2tKto5xY2meqLhn2sgSj1Ycmb87xCtUPJs98xRT3i2z",
  "key11": "2zL5HCRqPGHSzd5CDZkkhRPGdcw7f1VTxCEZqB4p1cpRbuLpVvVLgbYFc1aFQiWcQ8TW3dZM8wTaC4FeCYC4D3tg",
  "key12": "5deyNobhVk5QeTzd9vZAFWu3kqn9eEwe85gGbD3F1JahZ61MWHAYautrxfb1o5uWugBvZ9BUvQ6TgL8vPRJb479y",
  "key13": "5Ket26SCxn1bDPsEss3fn22HbjjtM7AXtM4RQb2KjUEg6P1BtKNGTAhyfUbtk2r5E7iDYFUK2VFpcMeFB21rkqn6",
  "key14": "4fUpDmE6kq2Bmu5odwBzq5dM7BqcxFcGppAWu7JZ6ZN8yJPQptK1Bme3mrka1fa2GSFJYt7ttmaikUUJ1okgo4hV",
  "key15": "5WC9Vu1Gwefebs7jG5xqkJKaVSevD5QDZuZdVYk51xGE8u7YAfPtgJtPfJkfUPK1PQ8zQ12Y8bESFAFiEEC87MUQ",
  "key16": "4EVAfwCRfE1rFtNxP3nzc1o1WtJzh5cRGjb92JnuGYJvX3fksx6MxCAcRAzkzJPRYJVSNWoymZc8GEXLQQSS2iic",
  "key17": "27cStfXuKi2YE4PhkrbHuMmo4YBcQBCRQ2o63mftjYpBQb9jouz5SaxkJJU7Sqoz8rjPhMXS97i1KAny6ZqVBcdm",
  "key18": "5V6QU2WLJJVWCEJwEkVuQL4FbrNRS6ipqNbHtNeAVjBF1dB7S4Qgwg1yVNQFFYxzfRYCR679bmEcZ1H8V1fB4sEE",
  "key19": "2ukhhmjcCfBRzDgZx7pfRLDY7E9cSNq84yqFYzAPj8Qju5iLPi9Q7h5NqTNyxrecvXKDZyjTMMpTxZxTuGaFiNSH",
  "key20": "N8LMpxVJZzQNQ5KPS6Keig456i8yzd9XQ4MNByXGmV9G4JHLCJ9ya2HpBKPJmB1CyRTsrbEbAG8iQ7XzEGxz7Pi",
  "key21": "5kPdPy9E7tnvvVLfYBHw8oxvhdwgbBGbaYWqfbzxjeQ19smk1P4zNLnDaBXBzXoASX1sv3rwkMx9qPTjyP3B7Hh5",
  "key22": "4oE6p5ELtS2K8Yx6JpCv45fKq3gXmYkxSThwn1xNwDt8UjiKXfTAmq3bSQEhofpVkwyTzTiVV7Qn46zjwq51F8EC",
  "key23": "61kE5MmKRMH2bXa5UcjsAFkUG394ZBM55oDR3njaZSb2QAyWa8pmQrwGn6P4euTZRTjKNuvCYNMVpXBDiHhRzDz",
  "key24": "5KAoSYNFAS3bVFEiHdcKchPSr5VV1HX4mTKE3XdrqtB2RULdXQoezd4AKRKL3QAe6zZeP9hQYsNojtNJVPnXypJc",
  "key25": "3snissN3fHhCQwSBCWUVs6Ai1bH9L2tpXytTXiqJDhVH8DA3B6bgfSKdngHS36wM1Ujtt3EvJVntuLCPWAmmAfP3",
  "key26": "2RxLYBiW1KNPsU16f2TYbn2ATNCfqoRvQNjjz4ZhMzYqZyReoj7Yxq54M8EJjzoetTqDEWAo8KdLZx42wSDJ9thU",
  "key27": "3nFzJxdmrM8CfSjPxXKPr6WM9UyZCfv6dAT1nWq7c5iXTHzzALExutspaQBbR51HkTSx3uD7SbQD6LtxEcRfBQVT",
  "key28": "3dX9dND721uJLXXAdCxuda6zhd3W15TBMBPSuJpAD3cDbrzG6s6hJhoAREAQzosJMeS4Dz8FD7AU5WACiRpH7iiK",
  "key29": "2zpfQU2aJijpot41k4VKRmhdM9MTaqWatQBcP4j2Y6FEEPRsr7ezQs5AoVLgaJYjCuPmTKEPF48SksuSZNJawMAh",
  "key30": "2eBxeU5nvmpTKFe3tqD8R1UJEm33qqPRHcmabGREZrARZLqRkraQkk7hRRgdtDnvaNUP1CeGM4Wf9pb7YbwcKLhU",
  "key31": "2rXBz61ZGCCeZj5SxHwDkAZ4FQrArFWbiL9S311tVv13DrxPjvCCzfAPWqbBNV7qhz9kWJNSMgZwZNn686DYbk7w"
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
