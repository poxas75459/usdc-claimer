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
    "KWBe81rGTTutpcRFssJEpAUaRvVBDUjJHJG99MNYyy9eN13qwFeLajxa2eJZ3et8TeyzZVXB6Efwvzo6iMm2AVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yeyrt2YJCJXLaUKPRaH4QL16CF5ro8h3pTtBjV8hQXjdsSr8WKqqwp5cX4GNPeThSPmLWwKVjHNHFmAwqGRVHa5",
  "key1": "AvAHKiqxraEt5LLshwX3pUM6Q3x5yZwbA8XGrWYxFEEPEuJHsaxJDJoM72sUNY2fxqe3bA6Af6RM48VYKS4k7ML",
  "key2": "3Uk3iDTRvY1e5CmzbWqYUpymahJjp8oAWuuo2kpRi9fs9k3rVYRaE4f6RMiYRtdjUJoqEBoKmWso8wy2rKX4Ns4B",
  "key3": "2BL7vKicamSQEGPhoZRRrpSE8aXa8P2Z5ZzcMPAPcgbg2PEUmBSQ9BzjLmhomocmdwtBHnbPF6kxgojyF2Msctj6",
  "key4": "BnrE2XbhcwFSQCGvhmLPT4CnVfYiqExoA7WmZuHtWyiKdqWJc1DKViRPQWwrWgHyYBPr7LtoSKzrT1PRjpYCWFU",
  "key5": "4aWt5zjb48T9gysubjYyzhesfRJeUTMryqbiQ7FXWuNVEG6DzeuoGHPvCg8MVR54g3DT6N6FfVK4Jg1UGYoiWeXe",
  "key6": "cZexYJrdZfB4AXyVN4kj9prfHtvWyo9tueJerTn3Wqo6xYf5WoP2t1FE6CAA4cBMjUECyQ6E4kH6fhNrG7ZNYSw",
  "key7": "4iYthA8EWparEB7YbZCwCWEncZwCoArbrvXQc6sHK3qKZtvuezawQJXhuPSUXFDDD7Ch28FR9TJTVHcuSHcfqV7J",
  "key8": "4TYrgD5FDDMZSyAdXhBreo9XaDR8zBR9Uh69yXYUfaMRatkZjwwrtpNnJ7m6GsX2qUoqZJTGG8a33gUEYifb87VF",
  "key9": "5CKbANNkNVXCVbSnBvZaKTzMdvKdw43gySH8hrMyNqN5ioHN2PtMwazJApNfhMcNiuEDbcSub2g2boRaDLFC4DCf",
  "key10": "2wq4uP9e7DgJPqfhEsjNzkUA5F7R3teGyeDstu2AJ2XK3x8EtRvGpTcRzTX8XCi6348FFSQkgC4JnczH8C5EPYV9",
  "key11": "5LFVNTs6PbN5VjawcmWduFxwUUi59CDxSySJ5foWHeX4VG8TKQJGd8JyQC8bJAu5oNLf9Pks4GaUixsmgAPSxbPy",
  "key12": "6SHBQFkokNeYsCwgACsF1q6RAes6Q9ECLxWDCjnYDF3oWzFeFuvu3hXaJzp8NUPrpL9GePejET9zZ3K5xjyH5QA",
  "key13": "4F16GdV9g36NpZCKu5DssZ7KASkrZcsQzDB8XHz6qWwWxy5oe7METjS4ZYTE8U48Tb2JF5Y3VDvyyw3PM6GkCnUv",
  "key14": "4q2wpkFJBkV68kP8gEnxqRs9FMSxvMr4LBp5LWfMWQ9o3WcTgsBTKky6o4t5ChdiP1fSezuSzkKmbh5S8MFPonNB",
  "key15": "3zPGrUeCEscNcizTyMxSkbSoWim4bCQo1d7p75yR86xY8dJc22szfqKUKWnLZkeB8XxqPbbiTES7yUgG7HPrqHbC",
  "key16": "5gQw8WLy34WXEHBjyjmafzVG9rabny5jdYk9YBUzg5PpvSibPuQmUJmmsf687PqhuD35RqGoq6E75AJKEYoPTJiY",
  "key17": "3fWuFeNiUUrTH9y7zPtPYi7u7WdF91yQbZcYKqBkkBAem8GrwEkiW3DLP22ggqVJsoHY4RGPhbBcnGpVAKABx9cK",
  "key18": "4SbENP2AQyKaLWhWtZLdaychFeec4aqB6geNyFvXRhQfwqjPCHVQ4j4FfGKRPMjtHP2mPY85QDXhop5dotZEQagG",
  "key19": "5tS7mhqhTBeAXaeAaLXMmTe1hwhcUcosRynrPhvBYh2KDmQKGxDRUQ6kgj9823Q5z2YRLLwBceRmEQE5xYcTZCEq",
  "key20": "48R3Td4T7XGvc5T5gNGNxqRxrbphGQ7YaPrzsKgnPLorQvvxazVDn41BYZY4sXNAmXNrgMQTqpwfjNRRycsQrXbp",
  "key21": "4zXb1XJx64TdCPdPYmXFuBDrMgMgQQXfQSgcrZDArSJ6P7VnFeAQVvsMxVZduKVhqwfDWLsSZTkqC8vb2Vw45xSy",
  "key22": "5ysnQioJkfLFTD8wPzRhD2QUj25FPSRYKKL8mPhPjR7qd6nHbtxNszb482KH2ujGDBXEgvE8DLXPJaAmF6g8sfUS",
  "key23": "7PTjtSraekxKTnBGikEzD33DYGjk1TkX54g6T2m6CLGPpR3g2tgyVsCQdNXHmkaqP5rKXyyMHfguuUj12fp3tgP",
  "key24": "4PCu6EFjezyrC74P17EjR6XFR9SzbDvafMP83DSBfiXhV86ZnFqGadTBU2JGsNwr6cUcV48rV1f9UZGk4EWbUnvZ",
  "key25": "2Spqof97rnuKZkpKXFqp6et9txJnq5uc9CtRj2PeCkuBEemFnxquD4YsrA69zkQm9GkQWciauP6HpcAzjipiRNVo",
  "key26": "2LCV6SGWAvwYAkCYeAboUsWvfaA3JkvdBrevvB13Weaq1WWrXP5gxmiKedcEqPLYcAMTwBZp3UKyhGpdeUFYnFZE",
  "key27": "f8STTVEmGCE5wLMFCRYaqgvh8buqoYfB7utsB2WqXP5jx9shzAptYrNA354gPzjrTtuNb2xQLC8tgGsCqNz4KUo",
  "key28": "58fm7vKmeqMc9iBHaijLf4eK3M7xLhGcZL7922QLWRDK3QmTttW7SAJ9kPtYFfcKTCKjQyb3zYmgu8RgWwbbN2m5",
  "key29": "4jdfjZVPGVNWgBjFjnKh7Rm7rLtFVYJPCC52x4PK2JFj9QbRHwXhsj19FfPLmscAEHe2bAKHpUwopCwRFtxvDQQu",
  "key30": "2J6RE3dsXkQkoMbYN5ZpBe51Mkg2z4wTosgTbEvH3mJBZBGfMEjc6LdB1gUswqqnUwJzhcNFSuSYnXGzE32Kxt8k",
  "key31": "jkZmnc3EvrEW3EbUg3SxRVd8gqHJVxcqP4LtbpRveVJg8e9F4xnLGjWWNzfSKogs7UoTDDLy6JKXEpx7gX24kjB",
  "key32": "LV5sHeoL2crphM4fHjxLTPyPf7Za7WSfTSBCexgHG6H2HmecVeiTWwvr85oUcmYkeVqcFBX5aFbbogFRDVjvWZy",
  "key33": "iEShDduAUDRBsMrYgoM3sysQmzMru4qDQcjTj1uXRGnsraT9Z8ZkgmywbdHa3ucD5Yp2HbYLRQFhkhX1uFGMTZv",
  "key34": "5tSrL4ESg2e6CwUpFzdvJswqdCWP7vu9UWSHJV55qUxu8FkphEdS2GSCLr7oYe5Te3sUKQEBtFBVsdF9m9qpyW8P",
  "key35": "4BzFJhoVz3DtjXLcDhzwbrVacEzr9w4yb5SF4jAZHQmojtdNRjH4TEnF2XJs8uHKxEyEtT4vkyVQpgMvwXV8hjoN",
  "key36": "dVewLy7i3h7tRfCLg74ZbHpEtdDcqJHtvG1bV75GsAGaye8dWz6nk8hYxMEqbUSKGDhaUEABdLdKA9ZjCrzhpFy"
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
