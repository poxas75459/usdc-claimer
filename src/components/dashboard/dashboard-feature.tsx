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
    "2Nd7f2FJWsev5QVPxw95ZKoCJMS1FPV88nwpzSz8hYExD6PfZ3CcASmcVJRt55RGyxgj7TW1X1JEzv6jiRmFnW2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sXVAqqTVY6bscLDNjuse153qmknSABnBSkH73JWAgce6rU8eGih657tFcu1ufUpCH9dFUmq7YErjnbwnNepwgoB",
  "key1": "kGaFsTodcjjqZBS5pcy33wHzq67JrURGN3C4r6o9kSzDJXX12b6eNmihHnqtTWruSy65EjNZFNNCv3WJePKqHG8",
  "key2": "2n1PjQqipmLsDzBhGiGqYZcfkuDL4kT9jsGaEyvLx3iVV3jb2ayNmPxFwmcR1ZSx7GfseAdmTHmjE6XeWzqgSjAg",
  "key3": "8ycHdVHpMB62daJgxdq9ffosbn7JUMgdonQrx2BwSBWEPJuFfizicG5d8W828AbhUMBxx6cPCBrh7SyLSuMMrt1",
  "key4": "ZKuBkkQ24qVaj9aCTfmbdab5sUeDgvQ6wQSKDZpZqbtnu4g3vFKwXwTYHmGJwmZ89YBEp4gx3VqDKZ4618bYes7",
  "key5": "2kGfcG53ZxvA8MAudgVdYjHqepMYAtYWqwTuziNjpoYMMDpzxqPZXwbrhSvLHy4YCz9xGfS6PsAiei7fQ2NDAtkL",
  "key6": "3t6ygVzNKxi1MsyNRY7yE7Y2692T25DJ7LJ957epRRjCQLSqEVDmm9Ma3RdF4JqAaJHBnxsgCHJSdhjs8wehcRGY",
  "key7": "zSPs5fXMfunsYxThPDub3hoJ3Dfmt1PSDEp23FHpqzLkDcVJExnqVRUh1WgRFdHj9pHcNAzZDt2tQCRNJtYQBnB",
  "key8": "AcwL26qif2qPuuta9HWR52ftobw26GpDm25SQkjtmF9YHYZhErZ8WaMLp74BtqkFC1giiX5oVrLy3dLMtmyNVHa",
  "key9": "KsgUq8aJLqHLvdMXX3fFWGiJam2J6LUvBU9Wmu9WNHQ8x5oW8vqfrMxGtek21Em8mrsXqzn3PuGom128rt9ZAvt",
  "key10": "4kYj3h3NJaJgeKWYArXztgaBGAZxg3S6US9zn9hjCG7NrLGUA6bwP46A6oNuECuKyg197cqvawQecBpSXwB61AB5",
  "key11": "5NJ5foUR9dxnchKKjAP3FZ88HyubUa54MLS7LXzELfKLxDnbAJPGVCNee4KwnfmEvzAAgbQXiY1XbTT3JW6o4Nrr",
  "key12": "2yH5YgDwx8UP53FM35xfWRdgLEH6mHAgxvAy6vKixaxV2x49uHQxxkse5WKuLWv1KdxYz4qcfYC8cG5BJEyZgJMZ",
  "key13": "KSTuMXGcWxzfXWDuC9hp1sieTN2iusHGqHWwUP8zZyX7RJ6eRT4qZngd3d8WqTpCwXat9xYBZAEWqAK4HBVssdU",
  "key14": "3NG8dobuz58iYaKmxFLdccTTfzALPdSQnf5oy1FaVNKSTACmVMrJPX4x3RBfvPcm78NxXoFqdpL14cDw5euH9d87",
  "key15": "4v91gx6BKoBJReeUPmJDcvuneTDMSjLvmzzYmq6RqKYbwcivtqaBkPeBiyB1zhfsdV84ivJDE8tBKrYxvjZitTWH",
  "key16": "2tw9Q7W7DKyv1ijF9ork5eASdjCy8LbZBx3akijPkAV7Rm4ECvg23ZbD3eCSwnu1fo4aNkZH9miuyVa3hTS44XiA",
  "key17": "3abGjHxdjERfmD51Q6TA8a49L6K8YmzV2GbL97rdVES92eyKmr5andjZ8c1rsTyDwVjS82BqAdqaVVHcrshNFdNk",
  "key18": "56P9aew7twRzsbDAozTeZLpNqhLRNcfJEvCTqUYqWdckG5vCxDmUm5RMjAFk19SBcFSnYjbHmpi6EmS6TAagddZy",
  "key19": "3oW1cDECBi7EjVY7v8e4p4g918EzAcmTrkLxp48oPKNJPcPSoaskL4NXrcFnE2y2eapW31eCUwgT1izqrCxPa9DK",
  "key20": "5HmLJLughT6MfErGYpKcD5cS12HKPyZXB6Q3Sz73pXci3hVfz3hnL8kRsPMsmLrv3mupXUtMbE5qouSYEN7j6fPn",
  "key21": "2HrTp9M3dmVfH1EMut3iXj6hWzvkamB1gRWJQLpnJg7myNwfvZ2g6W5fetQ9UEDJxbRic4vbq1LWEPxmgdxQk8tr",
  "key22": "VXhw8nrHPZ4N8apHWAsT6Tt48o8tatZCtTd96KL5rAXEMt74KcBQD3VvK7xWXn73WW1cnRUmBKAuA89AS8TQs9N",
  "key23": "5oYd6Zny4cpAuay2pgiK1fEoL9CKjEm5Y6EERHevSuxDejpxjJfMWXvy8Mpi9kS29NwqfynDsFgi3qVcxamdXPm4",
  "key24": "tZbsxPcmCv8w2pJkKaR2Mi2sNh8Kjcg8NraA9BPjghFrvUHAGVvbmLs9KS7gV1Sg4dEjSBoePy9W84uKH5VLuy7",
  "key25": "51fwKYfWMbyk1pxZvV5L3N118qWEZx5v4qR7wzGkiS85Wsq9hcdhbX93tTHkdQgB4qPQGmEMYB9jQ1xGSXhmdGh9",
  "key26": "hJbFaUxCHm6L4HgSWkwuiiHBShYrswAscJKYSTWRvm7p7DBwoVsnWjJV8q4YE2fzEdmipr7M7hZ7uHoNSSBqEKY",
  "key27": "2RgLhRn4dh6WpV4iJsaMBzy6wihxLThbnwK34ufK8hQoNQXZPnGxhFp6w62xGfrHViEWa6epo7e9ESjvmxjD9KJK",
  "key28": "4qEp3mbJR6V2KBbScz4tM2vayWfpJry8r4Frdt6mAzwZkzzXpbcM7mWqVUQiYBswkwyEFKySU7wGnhwqD2N213r9",
  "key29": "2po7fajP3s7hUFoXH5NhnSFF9f1RDL6k3Fx89xnDsdG45BD1EPXjvcTSyefauRA4wJHDbyAZimqqyt8xzPcHkW4z",
  "key30": "a9ehoLL1a5DHStKnGyN5kK2eEDtGoSXJcbu6PNDB74qLAEJ4wJ46DLfuLeYbpDzzybLaShpUHnDcPZ7CB2tYGYZ",
  "key31": "hgT5S7Qq46iZ56b1ozwKadCSdpJv3N96394Njz9fWEVSY3HbSyYVj1KePLjoJSJurRGkz1hCt6Jfpib7xPN88H8",
  "key32": "fp2JdfTaCLYu2A4TPgkSghZczJhsdzi9r3vX5Mjey2dFYzFnZVtLuQfe8sAN8SY2qeLroEQsmkwLRZP71KhERMD"
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
