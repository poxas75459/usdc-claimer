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
    "3ffUF9FaSijkszG7hns7BhezF5D2EC6ronqZ8NcqK1GReNM561Zt6Ji1ZYuQRXYiRE5c9cumKikyTwzwtuBL4cQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TFDiVhaswTGt9JchZo6VtnSr4YkAoUthNTGYSC2uzLUUbr8GteAAAnceyD1sofAqXzySjHRbB2wZPrumhMZoMAN",
  "key1": "5LFgcLX1N6GhcH7w9N8eNuqjG1taxW7Q5bKPpuuS7zuSP11pACeYMoGEkvDZwsMAy7RReRsBSwqbQnjL2MGSbRcY",
  "key2": "3sAYvLvR2LcQGocgbho4aELBHhC4r1e95jWJTiAeGNSwPDPnSrFYy5MUtJByC6xyoWR5BJY3GTfyg82NgVKJmuT4",
  "key3": "2oq12gKSvnaRNBBwSDni1Fk2r7SibJHX2tiR921adEFV6AD221v5mUqjvYWYrwVcYksW66UV7gVHtyi6Un7tqmHA",
  "key4": "5CXdaHNKf1W775eG3ocLoukXWRb5dJ9nj29RjLWDvfiYawSNQLbrkNA5r6QkUDGzTkiUx5h7y2pxU8j9cPGZkk2P",
  "key5": "4myDmdPNQcvauahEtJZ2PzCb8sANktR9irDVf44bo2j42BYdFtS6EgMRWk5mAJPbd83dmFexJadUJzLHMbhcEpvz",
  "key6": "2j4rpzwTGUytwYh8ror6fJUd5DntTE97X9qPyED3HLqoUHcBL7BiWtqZdjv9pQJZJuNvZ32hGm9XUktzKBWGtEG8",
  "key7": "3At3RuMUFfUhtXcj3HjJDeTDCBmSrysP2TN51PC4KAisf68EX4sWBFibap5r7jcZ7kgGgiv2JKmFgdRr73neBZUr",
  "key8": "Yt4ARt5FXTVNdKPpd5NJfeaoAokBgkWZ2PrPey6XVbefAFWuf1krZ58RQjibCnJKccGpEg7bKdvemAs8Tb55Gzk",
  "key9": "2d8ctK18uU5XxDZWnLeAjMo26VJrL2A1Eg6W1DUS1TFhZ6NZe6BMecL6PZZ1EZ6Ln1wDeWW7YtGnGzatrZABCA7r",
  "key10": "3EsqhZHmKGsLMZd1o1p1NVFC2SfpMZtgEEB4q1f3msC4ZnsNdMSvSzx8tAM5wTpQgdNvWGgCwvmviQj2GDKegbkC",
  "key11": "5niiPGVQ8tTPmFyxi7dFcLvUwpgY3adxFwHNnvU3Wc9EmNZHqJigiArdmT7CtRAsEi2vFcT4iivJa8Y1FhbnS5B7",
  "key12": "4hDFsaBXDzS8HNzSynH8JfPtekpXSp3Pe7xbdrh8HELPoGWen3jtej5GEtDLzLZuNyBXGncCK3gFRgTPeGCWzvqQ",
  "key13": "2MTjZnExbx8N9SSgVZFB8LXMQNBiwEBBozzEF5vYFQJNZXHMtw4UMMLAKyrA4Dxq9ngp8Xd5YsnpBhZfjaD6sBwJ",
  "key14": "kM5B3M8a6G7P8nd8kZP2ZBDzqdbZPUWnJhXVKgCC7G8hBa2UsCEPi6iqzYEUHjSdgdT1mbehXXHhBKoSmPD63En",
  "key15": "KEMcdzbV8EQExYAMqrHBBWmKSfM4i7WMLMi2U7T8ktE142RCoxoyYykGsFGdac9dyVem488eRDh64k7zhkToCsT",
  "key16": "5GA8vPgeJCmHmKQawQAd9kaukTjWrahC9jbyMnTGn45dHvjMucm9riKJE6p1s752GX9EgYKPEQc4U76YmJzbntzN",
  "key17": "wyCDj91hHpuAHh8MHmNaucNCr1FkNfBYvqWMPD3sH3esURP3jH7x9XxEWuQNkqECe1LzyyvWzSJ9DBE3AE9wR8a",
  "key18": "dqnrpHWd6212Pvo675CjuTtj2Ni6jSJpt7sm8bqNo3iciZKHX2kvQoxmsJwP5wYFzeVSfMuDCxxKHEQo3WjnAkJ",
  "key19": "d2cbTofNkUBJ9HWr2onHGQNHK3iEbbyKBEgopG9oA9Fjo5dnR12TQYT7r5XPjLSRB6ngYz2hc4PFcC3YN1uRzLW",
  "key20": "4Jf2kPyaDibjkaP9unnzNsrxJrCgedTNwUtVr9xua37w5Zo2Wbz36fcM7ESLNwpNfE15UJx7HgTVparYaVY4fVN3",
  "key21": "3fSFzjWe8HhNU2eAveJrvUQ9YBEYRqzj2zsFPxsTiZWE6gWSZ5aKx77s1VbbZznTkSSCrRphqcQPqJJJbAf3h5mL",
  "key22": "4j9LV9vXijkaqWWnLuJoJPBByDCE3puxHPpCmfaZPzU5E2RoWXDk9pdStNGkUDdgpd9pBKpXX7AAqLEGUfFHW5zc",
  "key23": "3ywtWqVTU1ZUbEhqRTT4K5Edk3YmsYuNwnsCferxUpnwhRsdrbHR33S56zfPMU2oGDMwHb6nW2aMtRtyP2kLaB6X",
  "key24": "4sp56xZ3bX5tH9Q2gtVsEGVi24HXvtggdoFHGzfKUfCp63LoeWmLZDfnmf1ymWZF4Hawq3XJsVH6nmqpzjriNTTt",
  "key25": "3LjgeuKmNNZE5zb9YBjWpJpdgQ5jtcJd73B3qv3fZLEaDhDNzyyTuRSPLJyP8aB3sGR4G8DQJ7oLbmutJzE6aCAn",
  "key26": "4kdGY4osR2LgshNBzP2McfHyXkUr7BrW84dU1iNUcZkPbENFUTUurAQw529LJ1fozgiQtgxixr122LkLaEnRM8jF",
  "key27": "3dRMMb53te1nf7euxNANPhwdmdaRXUsoocYSPzxP5Dm3UHjrFJaJ2bdESUfAWKQqUCwDqtncBcwEQVN8Re2Tudub",
  "key28": "5oNMPVpMVcUjH2rEJDq77jVP5quVWnDCf6yTRrb5G9Cm8Zz9oWsDzKuigo9D3L21oenPcFJUHJCkZeUFjyQ9mgtY"
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
