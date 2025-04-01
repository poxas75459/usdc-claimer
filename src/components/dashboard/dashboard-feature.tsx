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
    "2hcpbCecz9QGNe5Z1sPUQKsPHV7oBAa1g7qWYS4GPdSznuqU6JV7evgwuU5s4Rxhe7djD3rCgj2ZET4nw4vGQDKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GYgQB7wjGY9whz6tB4mgo8nw8QJJLUcfoXXLyL5C1qBaTAs4jqoo7WP4jQ2WSb44vR6KapgXTCAeLf3BHVrcKSi",
  "key1": "3tTcNaTDXw9Gdz32AQfKn8wce9iquz1PrCEgbnpGy47U9UnTFvhfJyZByE5oZt1GuVL4MNE14KGmes2t1FbV25rg",
  "key2": "4tq8jm3ppGsfB4EJXWtnLrSmuouQe8DNcAyPSsmcYGicfauTztQkK6nLwZMauESaJz9FptFjdFuZfTNF48tcvwKY",
  "key3": "2bYMiQpBypuCzqzk5Frwwv4hysgnmE1NcThSobc67fNhXLSQK1Ej8ngHnxBFbqbu3To2hGuRk2XUNWwjNDZhvdWc",
  "key4": "3mfmxPdNgm6bVKWc5xXFbY8LaTWrVU1aJCbVgFawm4Dms1ESiPgqcxaUdMfYbNU2dp8j2RM232WWeXerjaYE38GL",
  "key5": "UfTnKQW44KZuXh7UMwdBXZ8ShiqX8dWeMqrin1nFpLgHSeJUsnyPvYRQ7jfkBn3qvrMMj61JB7XXGMBnHyqfcVe",
  "key6": "3Zwzkkuy5LTe7Te4XyoHK43szdUTt2zm2RzQeSiReVQ4rj4vt1HeS1QrsZ4eCTtYYdZy8Fu39z4DVRyoGFMk9EL4",
  "key7": "2zhibkGnWrZo9W3BzXJ97oPFBJCRCzX95QQvBmbopMmssarwGVfvp53HBVWz1kA5jv2dgF7YvGXV59wAkNJzq9sy",
  "key8": "2TKEVg5CMWg3zjnB9oVXzuvXTKmK3MYjEaTM9zT9jjNu5RPCYQg3eSFmVTVjk4MXcjkLa23ZtCx77xGbovMvzNji",
  "key9": "37BRNgDqTTYLXW8Ft5cfCMW2vcwV9bLSJhKZBvD9EJiTAnfUmNJcAY5pepJiUMVJyxiYKRf6583AcqYL7B3N9DZP",
  "key10": "2vaG3GAD17AJiT7bePiErpAAT7bkYT1oyHM16reQpQtnwKfGt8JrVesPRYTDb4wPrHZJ8xFwwbjS1jAohDHDaU7M",
  "key11": "3WTfCfykA7UdXy8WFYCeqtDWEGTBDJxyDkNubEmS6i5wrb6V3kZcgELekaFTwHvXRE3hohTyLAt8AEecSJC5zeWC",
  "key12": "52rMmbAVUZazeuvKuexuWSg6BsCKZ9zxnYL2yTLigfjJfSvG4cgHNXVmrnmsXHudeNHW6cXCNjqN8Y6ZViRUfHAY",
  "key13": "4EA9TeaVg6BsXUtfT5UbUvwrnLfVgG9hUhdeCbBpdjAMqSXqFYXpAV57xgVu8cXNWxTeXX2rsYQZuaXpeq7j6s8c",
  "key14": "23LeqxUCoKeXhJshVFNdM3UJgeXJqUEyKmdw9ZztEMr1RYJYU1chaX7E2YU7B1vCfAAdGnBW4P7hSGQiTLoyw3FQ",
  "key15": "3BJAe2tWhcBZFh7WHYT1jz3fs3FhayHVqCnDWYmUEvweudSt2dKuk7umW6dSwE3ehbbvEZk4ZrgoWp9rZ9TZeb6m",
  "key16": "UyCSTFmGtEQCnBj4qdKgpVz4rbSUjnNgKPkkMrCpJu31YEeWz8F6n1pqhA1qNdHbfCfkUhH3Ajkb4JJSD9UmK1g",
  "key17": "5MDL7ouT6GvEpn6tXfA4MKjNUJBsB6fnBaQLB5WePMMVZDsf7XTVMF9ip7iZ2QQBpbbfz1v4MV5TuT26YAKhg2AF",
  "key18": "2jqEGUXrduFpfutNcdRjaknyYPuCBJKynycqrXXZ7hNAV19s5gFBanQSUn4h9rVN6ETq2Y4rkU2RxB9xM9q7u5jr",
  "key19": "5LC3JdUYgXn2d2zoHBgCkJ2mewkxkyb8ouqxX6B4pQZLohBtqa9aFzxVLtegtafSANotKguDCNqe2aoYLjhSu8G1",
  "key20": "4bzbfXX9mLPoDZoqCsE6A6pLxwrUzwEyFHbb6cHgbBUdLaVuaVFbUtVRvE6fQ8vt2UwCTPDeBrRNRo4VPF3pMU4y",
  "key21": "4CNUhgfeBa2pP1G6reANPVMfCWPTUKyzAVJYU6PG31T6bocFBvLERtca8EKuR3ryomvnk1VqLt75vyXTby9J27UZ",
  "key22": "2R2z5kvF5zmebdyeFoMEVbGWjExMzPKnmWd8TmcrXGnynNzhhowSk6efGfuNtda8KpDynuovYRiEuoRALHEjnFAC",
  "key23": "V4R6Nb4zu9aSni8fjC2ELJjdX7MfFeqbUgJ6jvaQ8iFpmGpJ45Kibs9qehm2VxZXrv8Ta3WYfuUz3snx3DtYuUG",
  "key24": "5uBuDndWyQgnya26cv3y6EuWe55e4KpSG81aU9K7brg8VKb72X3fzMoGM6vL7pqDGJZ9gUzwhzVxGNHW8DCY3HeK",
  "key25": "gtV5ZiXBBmWKZGhSMZ44MYCTtY8Rka2hpzZA7xxrMncEeseJtUd1iAGFqApijxJw6mWRy6SbJVQcWcA8gZLwUPT",
  "key26": "3WKu7wjUuisSugbJSDww79uUa7MoAjrX9wdPgHNEqKYVXhLkA1UmEDuJUnNbcg8FTZyS88jc7mMDkBSPdDnYkxyd",
  "key27": "52D7KnKcxpBwhzBbf2WCtTAqrChpYatWfcyW5mGv5efN1eUNYammBF6sEQaeQjRZNjqTqJtAcSxLrKvauEMDv8gZ"
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
