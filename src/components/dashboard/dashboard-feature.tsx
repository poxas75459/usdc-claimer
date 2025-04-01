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
    "s4tyvN4iDfF4epepweUViv38hsRGkeN76b3vwY9YwLioHfPwoaGoFKdMVmkbRTouziPkULR5r1TZKgRMqiK44Av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ky1GCzLcZekQ1WmbqHQYkoqZGh6vALbmxyXa71E93SXfPdBNDxsfMJjxiakoZMbDyQvnVnspZ8vb5RLqhAVPyHa",
  "key1": "4XjHdrbG6XUxiHfE4bMoZ6fmTXZ8whJ4yY1KTnSH3e6WYXRD2xFisja7pj3DQKvpaYaqSaDb2qqszpxKU1Cuw6hn",
  "key2": "39GBPqp1Fwybp2XrGjPJT4dZynow2azG61NmiWHMj7Pf4aRcNXgB5Edy1ZGdfCFozHzFohBDQ7ehP9jmmAv8CU4",
  "key3": "3dm9TiKyEB6ixzqxxY7ebvT7RZs8HbQs6wMY7UB6aFZ8dg5av3pohTMZuD6i3wVye6bnwAuN5VLjhyqZcG7qH5AE",
  "key4": "4eaKyqBkQKMncqVDCV6tNJf7kHHaQhmAkzUNuT2wgp1QreJPUPEz3AXPRkrSuuNP2XEF5qeQ5xkJ8AU7wHXw8f8n",
  "key5": "4sLsVihQsHdTwB9q8AqQjMRTVXxPPLKd7qffswhVr5MemseV5bv9BJ1R7eReFpXCNTeemUhAMY8m8zhD8eyBw2z5",
  "key6": "Cfjp3S4AcFMiJRD1pyg4UziuA6LjN6uhTjH6HUjcBhsanqGuaMZm6Hb9tSav2ZQ26E59rDzPLkZxLHxNtMfwhmP",
  "key7": "92PZEKpdkG2x48V19cBi6mQnA7EttJxouGu6V7SAtihfLjzJzwEDkvM58S7PzodUFxjXDcYFqNEgwo4qYBGAFTh",
  "key8": "278o8E4qXyD9WuVMoXfMQLN9cq6Baf2TPsTcFSasK3yHHMWurGHe4ySWkizr5TMAfqSiKcbE4i8sm3cEBNJuxFQX",
  "key9": "yRteq4CoycL8uo4KVjJW74Gif4CUN7viZ8u7sYCYEFKtRTXZRjBJc9VfTh8irjwxUtymwS2kq5WiHenk7976M5r",
  "key10": "5iV551DnavVXbSKheBZEUFF6Dz4a8JWYwQjgAhKHNjfh9op9mLfNVH1FexNMnnw6sia4ZuzmVa78SKWwuYkHJHRB",
  "key11": "2ryH3kmPsNV9WKorhWRN4bTPibJ6pie3fucfpCT1zFGFbHLQMK8BaG4g8NhkkGBoJnw8sQkDMr7sW7rBCcb3orPS",
  "key12": "3WVrfKxiUie2BC5FxYK9je4fhFTcHYgNuk8q2myWDk2b4uJemXnvZrYW3rVz3kabTXEPbBCfH3D2V5PcmXbXzzQt",
  "key13": "3oiRE1SGc37BGaZCrNV4pdwrk3HCHuiNpbJTGkVvZwon6eUPdXbLJ53X7p2oD8SaEGvJervZDdjh1q9GrxWLqo4J",
  "key14": "349awK5x51Nr7JGsGGwsWVTVgNY4PZKk3A2yTJk3nnkqtMBXVvdtXPNhTobcdgbEecpVKUPdCXLuXgmmNpKjzXn8",
  "key15": "2vtUJKf5j7ktJ1D27gFuJ1vn9FK1JyWU6H2KyzTchZ4j9SiEjMtyVEa3tv78KRiJpQibdRPJQVJpxy2MxKkpVD3D",
  "key16": "5dDPEWb4LEsgBXwkC1jrZxacMxAm5r5UwD9i2yYCvxrAbVxp48cE3t3t1KE2vhcp4i9c3jNTZ2r2yxN8wgzRiw1Y",
  "key17": "3enPWLvXHAciEhgAHG5NpoDqmBm6r3tURuuVezhJeWubT8PX5xnuF2adQDuqbqeBnwtb1NNayHQQhHaaRjdfjCYb",
  "key18": "62bWvA3WSPEvnwMETRfxD5nqVLBqUvr2YxU4eQK1nLPiUy8NtYGth4bCM4mzqxBP7Mzej6nvrKLeSkqHD7A2g3VQ",
  "key19": "3Ua6entsF72GUPTJtLUyBA6fZMtrqnK2mhvpRsWyPQYr2NfzFuZrBjH6waSp2C2dFZ7gZPtJoaUGT1pcrGDwWcoT",
  "key20": "29SMGoZER9sCbw1FjZmKv4CeKQDpFndkPdvoCtDG2VAjz1NQCvqHREAFTgw4ce39P2oyYXsiiKzm2Qs6qeCPqdhX",
  "key21": "4idv5F8M3z7gNZSa6GNTgv7sPJ7j5SfmPN6JSfVthoJ4U6HZXTsbq2iHzTCW8uS6ag3eoSEZdttLrZkuZK9dU4St",
  "key22": "45hhEsNDExC9AH7Ao3xE8RvaHbdufwPQr2SNpN4pLhUbyXt4XBniFqMQnxaj2BtgeuefTMXLpHQPzYevBko2Kvnr",
  "key23": "44GFuN65KwHPt8KM9FCupnzaxwYb3xDZoGUGZtJgiRxSffT4wsE15MNZFPtPtD2uWrXqExUGCHQyoVJKxSJSf4JX",
  "key24": "3BSoivHJcAXm39Z7AnjMTc1nrMQyV8mab6UbY6AdrNmHRSsgWCLkvpo2sWF6WzrRQtfs7eqfGJcxS1QPa7DaPopa",
  "key25": "2Qucj72u5ZWJasCX9uCN4fuMLDsAysFvENw5Qtc73Q5KSzkUkxMcMr6uTCCt6fAsq4Qb5Jw9dZFMgthZwbEpJ82Q"
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
