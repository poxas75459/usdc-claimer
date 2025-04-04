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
    "44Pqjc8MYJwdUoMR765LAdbfHmuGDBUrexvFXtakeCCtTAKNbBbfoDSfiJ1TBU9pT7LsNxRV5dm28rjB1DYR5ng4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xk6fNQCXFs8DRuEiPouu5ciWhvj1wCLvW5DE7h8iwro7zCnUXug6qzpYEEe3ZXDCDvgdbRCsoHmVXHtfFPhkj9b",
  "key1": "FMoE4FRF4mubYBnp5SC2e3wmnX2nqSo5TbNV9P22GenWW6e4FR9EusvjP1ZreFdmYATUpxgvRaWMYpaxzjRfmNq",
  "key2": "4JF5isdyDQYUnEJC4wLfhmKzvbNYSvqsvMMdKwD39mmSYDRDX4mFxgmus3eXrKbsHHfP5mjVyfEHLQERiTsWj3TR",
  "key3": "3r34pXvBS9ZfcSb8gtJUpEnTpK2A6pKEENqXESNPEdvumJ6cy49DogGHySgeshzp8F5LT3ZCb3ySG6AdKPdDyDGm",
  "key4": "3h6R7T7LdLEA8mCjjuhATdpb5X98rTqwE1y4Mc8y4w3j1487EZgJ32XRusFy8Y48utF9PhamKqq4huVb5DN9KLZa",
  "key5": "4ZoagbhFiytHEyju7w73t7Q68Q1cxLcugLgN6JZdXxqZB3chiV1MRR7k5YgXzNXQ2SgHMudEjBnyuoL9dcMBuitd",
  "key6": "4AANZwqNVmyZUPCGuZuCjVst8MqULaNrCRATGNwHcCAQ7QqYhCrFSZD41Ks4AEuhvizuiYvzrRFpYer4y9AzJNCb",
  "key7": "3LDTENcnEroRU4H5CJvS8QbcJwLPLRQXjU8ScKkvw6XTr6jFUqBcLWrBvGg7LMXKwZ9PjVLt8CDyonNAwb6Pi2sY",
  "key8": "4dG7EAGq5F1n3wL7qnBrN5x6NCUAvK2UZ1vQUHMH96ecaFWzAqyUBbSWdfSWL5RVxTEGfHsUUSUBAeM8sEij7KQ5",
  "key9": "jypBo8BcPxi9WkQB38Aw5hywn6wN1nmYWiHNjttgPgU46KXQ9KsDwk1YAwcvD9pMTw9ZXYXkboTY5zt8sUCvnM4",
  "key10": "MeAMLrXFkBcSHX3Bxkk6JVrSwMy39Lk9joSVe8ceC2ZYZDBDhMVRzjWyWwx1Fz8jPNMw8vpJDYyFgH92PeBmu7Q",
  "key11": "4gX7G1kMc3m2M7GLhZ18Eer8M8P88kngsq1LDgQxJx3PmawbpwJGAvuV8uqVgTUuexzUiHKgxH7Z8VoTn5FohxFn",
  "key12": "21nKZGJ1zG4FkpteZeVS896oER2Aj5VgXsGRyG89iMeJT1vuZjfkhcdaQEfiQUoEibYbLo7fnZ9sXnFNA8SfWVvk",
  "key13": "2JFy5gEGyrzCEciHSsecdF3iaMgr2bDF3eao2XMHnBMb7BWorjxhwjdQiTt6kvuShhM6yKCFoJrtUFr4qCnsnaNM",
  "key14": "3wGa79XXnBhwVY4gDEfnZRdEu41BqHcv9oFes3foswE82GZaUfNRJ3AvgaU6nUb9mBmc73x4c97Kw63NBUtJ4eST",
  "key15": "4eJam3Depc8XKFGWrQCq9TgYwQb2SEhv88JJi7grX4Z1oH4Muznn4djcddz2es7UFRJWaSsmdNveRC5N39VYU8v5",
  "key16": "49C9Jr2ETaWHwx7MFrj8KkpQLHMr68WXDud8cHYGYu1gDvmaHTLnjJbyyYogFpS2o8a7Aje9F8G3wZ4fYTo5a5Qg",
  "key17": "4S5C7epQWfUkdf7KJpLroD6JUrK27SH8RyrB4v4gGuXG5BwL2KGFVL1iyUDwgiEo7fTHNdTq2Y8n2FjosnnZWhvZ",
  "key18": "5uXhzZgwj6mJcR1PASJuTx7D2sFZuWQcCjnDTkbovBHtEWMNLtcdXwZ4XHW6tg1WtALvoMxsntZyQHU5XaYJwWFT",
  "key19": "2GewAmXiVSDtXsWn3Z5qso42p1DU56waPnw8kCkFx1SdYR7L6WVZ2oZnLwQ46UBcKqjn12fYhcdiPJU3iDqN6qEd",
  "key20": "4GUuRcDYyT1XYESCUia2qVodLo7jkq3LfpQ2SB6NvY1sXYFGi6wY7VJ2cXEFstxDYZUD8Y55bmMfbra8Cwxzhw2c",
  "key21": "f2nRWuHC4cSVN6UYU9xJaZfBGg6pzF2jRGQpnZGPdofw9KfsWa8aBcuiniaVBSApt2aHiMoa5zF8T7w74ByAeZC",
  "key22": "2Pus2DAjExMcwbRPTapr1tChRB11hHixUqC4Y7TGPU9RgrcaJFuc1s5JaWRaQ7ALTXjm7KzksJkTWt9Vq76o5uAv",
  "key23": "3TjSYyPLp13LBCWiCvALCYD61AWDqinA8GLfZpDcYkQHzVjkBcTkQmzou4MuSiiZ9RGJgni3Kr7gC8U7JaMbA8u6",
  "key24": "4WB5dHyydeVuV92bVKRMkEGKnsJRzjMR7EUcxQNk6pWAeQixJG1JTJxrbqsugwYt1AmHoGAyS6Co9CmQwDiGZqyN",
  "key25": "5K4YbiZFog8Td1NYxjosF2ZYux6SSCKUM47m9uVrqDDRdkrMb3DzKw7u2vwZocp4gMdSt6PLvLfvjp3zf96tpqjc",
  "key26": "4WHYxXJtxHkpTbxdwYTEjrjMeMsEMyQdyateKu1i6kEyoSSTD4E2VoHWPp3iRAySXbJjjmaq4n63MaSZNh6sZZjc",
  "key27": "FWknoMc54FiiEJ1UZcqJe9omCPmbAxRx5YoWD8AQok7jq9j4c8U5TNBLZfQkhY349umAD2tjtz5jAx6bvHNBSnm",
  "key28": "5PzwJD3SrWpLDq37k5ECkHJKohqKhTtApARmD1LzKTorvWFVY7aDTDC1qzzVUPjx8EfvCdrxTWckbmP29qmXC5Pe",
  "key29": "gfvnZydyqby1SHtY7T1Be1wBD6MekfGEAE5vB3MR3Wo7Vj7GVZGZg5ngp3XmnncdCcT6Gz2Hu3BpCWaPxMfE2zY",
  "key30": "AqBUCKjpNaaeFWYdMAizrnSNExPQVTWowHQEAmkSdr6YJivRwipsaNrBegp1Qrrm8zZ2QxDfpR8nMmNSGDWVAAf"
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
