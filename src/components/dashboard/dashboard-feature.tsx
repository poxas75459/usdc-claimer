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
    "3UeC71PJt1ceXj9hWp6HKAcY7dfoX4tF96CUMKvGHdkvt5WNH6CqitN5uuSN95QWdGZzr1NZe4HNvKGPkrv7ng94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LwVpuUuhr8BNyF4gG4aaX6bBnQn4GekfguTqP6E32fjjMRwdR84tiSGM59ELCJdmy62zmShasdVL2o5AVvJiwc",
  "key1": "3BCv655RBkhnojQ3MVLx6LzytbkQr29jVEvQTPbLbY3ognjUKRq1Pa3XdDL4huinCHn8XG3SbDXWq65iLt2aGGwh",
  "key2": "62HhGLnRqdstLfrDZ7YReECKP3dbw22NuRj4uraMzUy3foeCwNcwWWDhZCxFXt8bYXbE214BjYUQBfSEioN6Xjbx",
  "key3": "2GbNJYsz18r4Rnu5iiSChZVc5UFGNJW5HTbsNtgujXVFMjWZaivSVwVc7miz9SChBRc1qXgb5srKevPGgw7QqB2A",
  "key4": "Cb9PKUhvNJTXhPahoN66omGsmUmGovLpCBJAfwYAXXUM56gav5Mhh2HkerCkwa75NVyc35AcvTtEiHXLUeLXsdY",
  "key5": "5Z4FkfGKxYvV41BiJ6simWZaJv3AVWLS6K5dXqmspDYjdKTNDmhxXVHMnnJ1vqPU6iodzTNttaQnaw2cytgKJiu4",
  "key6": "4mXHpdW5spHRc2r9RwCaxi9ReYi75pccopUYMHtU1DiKmhi9B2JLBXo1hQfXA8YhogJnW6zmc58xhY9yig9psmFd",
  "key7": "MqH3CXHpVgPYyKcGyQv86sNoDBQhm4SMgATx14P4R42cenyt8ESrM8Q5Ljeyx9ZqsKRvKHQRFYWfMUgLUeVuFSh",
  "key8": "46XfNxZ8UJ8WDGkGeUBaCvJbNTkKC1SDtSrYJ1ZKPRjKo95PZ77hHebYjh4YEwzHhfWr2TKSvKxj3xfCWqhYoqQf",
  "key9": "4tBmZySKqbfgDtEvjQWhLcmfyavFApiZgrbGksDhsWVVXvtpTzt9k1ZbcYEVnT76DuhZiHZoRpxqumKsBF396U7U",
  "key10": "554fBXMqV41q8XxnSBuZM7HSYKfqcHH9U4wUhvfKDcR5ydQi7gxpxu2nWZThzfXpCWeCEQr8x3XFQ6o4xdoAdeQU",
  "key11": "4rUWia62HjcNKwX9XmyJLdXK5yhMCsAdee4XjvoQ9MKB6gQuJaaSUHEussnBDc1VSD8KUXRxxMPnZxPUHwz3ogq6",
  "key12": "2HM3hNstA2CuRzcyDcd7pwA9oX5wo2kQvj9DMFLqcPvhELUXMWmufYFpYg8hXDf9DGruA2Fjop2ACNFcR3jDV5VW",
  "key13": "5u6LiUKj4YxYKq6ZkDZJ8UGxjLt4mxVLMx4Cv5CvsHcjhvVAcoSLMiUjtwgFiMr5Kngjhk5MjMhRfEVKDfVoz78p",
  "key14": "44kZsBtLu29Yp5nZ4mqLi2jwBm7GyNw1PQpnr3MRG5FXAHNH3RPQuZCBxLttcXg2usJ4o2LpVe9vGH3nmr9poW7m",
  "key15": "4yFrbvJMoPZWcuSf4p5HXN1dJb6p98LM4R3vAHHsjYVMSrve1w5UCbjSNZHnEqGnuVsYMbfzHvVHLB5P4MJ9q4pm",
  "key16": "2hYSwxUvuzkuY8aa5mNwMgwi6RcxVb1n9qgWntzEBXfPCu8gLSfjMou66fn5YobsjxcrBkopa3LhkYFnMUfAMtm2",
  "key17": "3199B8SJsX44WPfZEMwzKEtMnEJitpP6kHGd4JwzRPbinVS3r2tCQuidiE85V3wEYsAYzuRKsWmsYHvcVRfDT6HQ",
  "key18": "62SgBL7cyHrm1h1mGfKRy64GjDJq77xqpFReKqbhtq5t5HW1eq6uXeDHa4pJGHEmcaEKtDJfWhvJZ62B7baR18dc",
  "key19": "2vZ8JZtzqdGQ6cmgzz6ga7ZKbDzsy8NMPoiXHt5PbpDkQvjZ1UXeUALs78mNk4jehYfuQrP5EEgZJ6gNiiGtudsW",
  "key20": "42rNBZHPUqTeDeF5pH2xnKz4Jbh6mSTuQQqXcSpYSNB1rwxE9LQ58UBde7Uy5jjCKKejXBpsymzEw28NXJTFgXoX",
  "key21": "3g4curVLYAenQC6VQKhjhzRwGWomGwsofJChUzMVycfAmJuJTiRXtQYx3FfG9JbvokrqS8P51kvYD3uJpjrM1evW",
  "key22": "5qeq4Z8GYWkdPzgaNY8qZSbTZ9SCRor8em2AdMCUD8QB7XyKXXRJur4ZWhZoN76HEatTj2zMGxX7z6aVt849HHsC",
  "key23": "3w6wBH3pXXDUFxkhbynpBBdfS8pefWCwzfRHG77AWoVbsMcdhnKJkcancpv3aGG9dT3NCd1V32Tj5XQHhQStyijU",
  "key24": "ihV2K8MuvVNT6Hv9HHjy98aLuyDKjd8MkJCbsX7k912WA3u39tWWRUFWWr91Ze5Ys1ZfbHB6UHg3oXX4SbAUyiA",
  "key25": "5jHckWDeqb3bX9xucYDyFhSTCDho5KBiHqZWV9NVrDwQShdTBJvB7WjaqvkK1kXFdwquUuceXxVqPibSunhnzLv2",
  "key26": "2FNN63UcGw3B6GMwTAUqvvP5HTEFPqzEYeKqXsbiwQ8p6Sv9yotwA3L5EBRsuQS2CYHFKUW51bsSiBfVyLT1y7HE",
  "key27": "5CAHkskGXi7pRVmK1ViJzM75yhAZVw5J9KApzZAiS1vr339aUeSbfio1yuPkdwF1MZD5CcBkNBNSyxX2aiGQnMtu",
  "key28": "3s79xRAR2yk7BgtsG6EfXmJf7kZ6qoRpuL1y1y8Ydz7sYvMsfgQjwRYGKs93RiDXUpHEBpdrYVqqQnrZJS2GQJGd",
  "key29": "3asQk9Enipdy9Mjd1qewHtywdZYqtFoex6fHNURKgNwqr66tX6xEVMNUPkxu5nyMXLckiwERSxLft8VVRQPGpUEy",
  "key30": "4y3imE6nP8QDDXeSdgkrKDfMMV1CPwb23n7f55RniBtMzKYiACktmVGNZfA9pGWWawKREw5fLNRjVpwt55bQ1HQW",
  "key31": "4z3hfWqfcA1QzXgtgtjwyqWoffCcrzbyN727XMaC26BTmuYYNxyPSs66PXyLWhetiHmkUGwH7jQcrrUB9HAtRD8Z",
  "key32": "5AZ9DK5DwZ8hCQhHarBkz96TTs64PQkEKdob8mqpbx3omGDpw6viwyxP4GLaHZEa5zJfW6Nq9C1pkmnhNtqxyjTz",
  "key33": "3cEzBpXJMgAAEszJ4fnuS5MaMfGEGaYxaubZuJJt4pLT6keXzBbmbGXP7TeH6ccsHtAXwHSjospvvbCsQPAvteMr",
  "key34": "oEHup4QigM3rewovm7Pra1UQSZ4d8tRzU6ywhKnjvALNP5uh324TQW3c7ys3gSehT83q7wH7ucBggerhW3n91UJ",
  "key35": "2u3jHkDcCVrDdcaVAJJ1ZzFK9qBLZavPyXzFFxisRgEZiGNBXwvyX42VnnC52amGyYsXNxy3NjTSbQmvrQQL8XW5",
  "key36": "3AfHYWVKi4xjWvZ5Z6SZZTUqDivbvm87E4ZpfQKJW4PYExEjWL7tpYAPSsZcpkZLbDPsizCPNSxV88JjecPFHfYw",
  "key37": "5y3ABaBRJQa1F6pqEZM8YLzX238u48pYJgKk7h6Dd3WSs2mx5HKiCx5B8hc7njc7AhuhRMxLGsy9Jxkm1VnJmvJK",
  "key38": "2ZdKJ3A9zhjf5ZRjJxVC7aNT3kwGyYTEnNbFFbuZSsUMhMPoCboRxHVMf7sMqoEM74RuuyjfqPH6CK7vcNZfdW82",
  "key39": "5b7wUGEQNQvBLX2VSRBHsQ6yXGYcm69gvy8RPW5DVVyADXsVDmFyNT6WKJG5hNDoCQ7AfUM8gJ6S6FVh9RChQgms",
  "key40": "ptdNLmV6GWpAZhkkMxAJ3KPn8DpADY3geU2K7JXHaTYAfew7qWsTEUfZAGsyPoD4BNd6QuMTbJdqyK7vyQY1ELE",
  "key41": "8MRauvBx5gmNSTViGm31qTBY6pUN472rz8zJmYfnsJjFivpqFSKgPqTCN16nobvtRH4p41qA9YNAm2Vu8TUvMhc",
  "key42": "2twQcFDiQTQUvuRUzt6ehr18iphXv2Ch5q429HycLge33JpU46SSHSBwtHvGVWw8MP4zqNwszPrduqUNpXFx7Qp1",
  "key43": "3iJAe3e1S9LASGQQZBwTkdL4nMHT9o1QCbtqzrLuHYXhdvW3DwHNL9osbGhrcJu8kpccPJUAtr7hz9xSWoHy9RbN",
  "key44": "4DwraNLepEqo6FynHrDsfBRQm2s4VdFZHCv1JKVYDmW4XprB5AhLLBMQwdp4fs3SGz2fivnkET78D22a2rFJzJXT",
  "key45": "E13SKCKeTqE6QvzWA4mvUrExd1DevtTnecEWrSNtPW3yM46G78RVviDpvGpzGC88FzjHbrDn5u4Xz4agrUkMRnh"
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
