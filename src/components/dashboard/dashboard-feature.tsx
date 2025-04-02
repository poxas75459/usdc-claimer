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
    "2CtrzP6JmLRUADJUaNN1GqRX9AdEbtkhuzrVETvdjyT11NmXrzcHHgELCKpFeUeCk1XM4DvDg52H3CBvkPQtKMSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kswmYtp9ChRzRFj4QQVkjzh8YbsQH7LZvqsp4tUmVXj5oNgZCTn7Enp6c5E3BG9vrrSZPg6pRa9GUaN4QpVsuR8",
  "key1": "2GSEtwdGEvuKjUPJ5HKKFheybvMK1t7s1EenruCuQd5jTekq54qbSEA2dV2xn2URvE8rXzPxvD6iayQ8DrkvEeUY",
  "key2": "3n3jQ6JWjcGiev81jWwzTh1qUFbNtG9x9ixEiQnXHgCum3ywHS9QC6fnvGVD5n96rq98NFdKxHttx7QBNPvPNKuM",
  "key3": "r2nmFcfwbJyiyB5kFj3iGhM6TvgDmV4bSLrupkTWYncrUvuNLY6GacJUkTVPWfhpYoF95eWjAHE5hrztGR8mhEb",
  "key4": "4SeWCG1nbhcfnYYN9jJ281o9GLXSV1ydzsNmF2nHJCaVmWev5bha8xLbb8bKinW2TinQPQE7RExhHD8ZHe8Lh8Cz",
  "key5": "HA3PKrKtUgUb9p48zfBKYdrrHeNMLJAAZ3DqSz9WVFDRCWU1YaTyVpq71uRpdDvBePHZBK7KjFBxy1s8BVSFVZS",
  "key6": "2rkQrsfhaDJJETgU9gG4iT2YKUFFLyjN4tXN1oebzbSkXQmpZHkAFFyBTcWnYsJda67BBJkqxvRf7oHk8HKsgag8",
  "key7": "5DHjQs1Kewoka3eYNx5NSgfkmdNg7nrqj6VJFwAv9CfxKp7w3WrRpHvsG1KxhpQq3NdHubYoeGjdzfMbGV5V57CM",
  "key8": "4WnoGnkrEpnBXsFQMJkjV6g8c9ix9iaDBwK1tW7WyxS9VaHDXJSkkAjZcSAPaTXQQkUVdCpY6o3Hj94PBJXFUFVY",
  "key9": "5sKnAUZ4Y88ctfLZNEMYneup7paeeNLyvXecdnb14A9EXvzZ7mgoySsWy4vqzeFG4aeucJbgA2sapuE5r4tbxExe",
  "key10": "5B4veCMJLpTuKzhr6hiUn11g6bkBdKRhes4pqUj4pSmTaytMyvE1vsVZbrLoZ6rbzeh1yBAkqKPEFy428yZKCDgp",
  "key11": "556rwuxz6XyMd4iLN72nyG5Vv7jFSBmq59Dwxkfgu3GAd3MMz8c2Ky2qbwL8PJLzToDsJ7Ac6nyzKjMaD5mJdch1",
  "key12": "2x4GqjybGp9rTKHQK1xYYgSULwB6ZqcQpTwez78UFooyXYzKVrHEpBkohQZgxPC4y2wqMTiJ3oVkUHjnTYHa9eaN",
  "key13": "317BprSvW5bE8PyQxeSxyfXETJD4qn7zBrS6nUSCvA6MGWHvMJmBTzDh6AHqLhjTEFY7ZE5KATKSRCuoHCzN5uit",
  "key14": "41HuQTpuXwLnhNqTD7fwXk1yuDzwVhn5BY6GivMiipqNJftMAGEby5rEhFUGL79pkPna4M4K93zyyFqGY8GckTwo",
  "key15": "49HZF1Ubo5QW3HzEwRU5p1MwKS9nDSKAreYNo166P3cwVdgvwtbULQpcPBRrBYsocFzJWKWLPid4Xvg2WJuD4RmG",
  "key16": "JcK3Rdjm8qK4HucdAAYwYkmJXAQUqRpEG9YZMYZtwc5qXT6HcUMUivYsLn8q3YAD6efuSzYxaHissJKVAVa9UYQ",
  "key17": "ULeGqdnAoqGwWfmfLVsQu5JhJsJpy8mijLxVHqpnnY6833MWAFQbibziAB6wbrQipR9FrGnJ4nKEN8ftKrese7a",
  "key18": "aLnpgvVbTnYnkydtrsJQaEacD9fu4E1Bn9CLoqzLDBv3KjF48jxHeFGmte8Ujt8eYSSZB6tg6kL9LwgQDxmJcP3",
  "key19": "ftL5xpsgK5KindnJB3Y9vFy5sPmdaNaTBVnZE8zpeZvaJvwmXFVn2kXBy4w5s1x8wLGS4n1hyiv5LbByjCBicn2",
  "key20": "5ewrmCKfj74bmCDHATPdS7D1pXytBzR7zRARj3QZYuSQyZjgcTy6sLqj9HhekQSPBeLZELPDmvgaRhYnQWW2NGVd",
  "key21": "37daFDbQ1S2tzfjgmHiHgEw4movpyhfr6o1mqDXsjkYtGCRqjQJytceV6hqmPkAru11vPBuhVuHzBFATaeLysNHK",
  "key22": "5nC57jVVZoVrbso7HgN3cS6kKVSQCLBQBUhftweacSJBP4KgZvDa1AQuZE73jsutA4y7FBSUZLPHqedri6BGjYhq",
  "key23": "3wFopfjMkFDF3YmqRabHfzQ2Fc2dMG2qTY1T8p7doThGhpUMziPdkkL8f45hhDBbMaRf5QjXRT9Kj5SXkj3PYiKz",
  "key24": "5K2TYkn7qCWQjx1gZAjcbQKPhXNGs76iTctbnKsQFhVoAT6mL5p97vv1xtzp1Ky4qYt8aPXPiH2AWDNxaNJpwH8n",
  "key25": "4CeZEFnS1yNdHXnYxQX1EHf7GH9kBiYuoYj9dRBfPuUVpzUPWxPeYCEH21JvV7jbw73pw4HZbkCzcT1iqJT6HMFH",
  "key26": "28LVRaKPRktxw7rwoSnh3pzpMeS31TgcTYwunmQW1piuRicihCP4HTu7BPbStAGgRSHFLBHZktvuTfi985Eq1wsk",
  "key27": "41pnH8a5mXzbQdxxhJ9NuS2pDrvN7Y6DtegrSQRPzKpzk8aWVRJe3YztbLe8MVBaKfrPH2Lm8XpdLQouJmD3HSJH",
  "key28": "BqneTxfuxsJWnamMCUdTxu9cocKrd8RN1ns59xmbgkA9Q3ioH9s8yLbZWu5JeTLpcmPFSLtge2knxz7g3VWAevx",
  "key29": "3WXKN1oaAprL9A42kcCTFENW6cKe9VLx46qt7hXQuiD8FGrbuZn8ensVyHDE626qdt9PeMeEocgcEDBq3DphyVcV",
  "key30": "4tc6c8pxR7q4DECDx2GM8nWmpLuXKUjnB2UDC8HxcPmeDxTcZ9NHZdSFD72EDisxYBUi5d3ipgXqwrs7dVDvsk7a",
  "key31": "4z1gFemhS1uudDauD6eQucNsMjD1PZMBN1W6dPjwFZnPxs7NvsX8DscoPAnGhQCiZ7iZFgot9Q7nsQKMjRPZ9eYu",
  "key32": "3ESWC6XxkHP5MXcpEytxN9AShX9D4UPsijMmMYdFJrswn5kvxU8A7Kg8LXCHmQdKJ9f5giCiX3xSL1AngfUg6tRn",
  "key33": "5bmAM7aMQVerhN7wHiGv5eGhzyRP3sQizs7ejJTcZwHec9o4u7UaUBxPFX63Lk5M3XSSKsJuvC7nKdSTyK97s839"
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
