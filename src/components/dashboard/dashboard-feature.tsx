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
    "5VjDEL1g7mYKBTsENgr3HcESeNfnN9rFX3yhZYAoqq8ePpCpDX5iRUzFMwskXMk4sTCwVwPTxNMR4QFU3mDcC683"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJ2gJe9KUzgAy3B6w1VTfzpvrRpnsFEb3nnCGVAhBtMUJctedJaavgX9qF2t51usXmig5X1VpziAEHeRVDPmEZp",
  "key1": "2csqEj8CYjkJfGMhEEAZus6hQCicPuB7no4JpDm1ZuBtytkUh6U5KrK5S2bC6tpd6nGNdL3SVH8qJ3jXhmfuxNxp",
  "key2": "3duN4KRv448r3HBuGvqPszXXd8kqNexd3THxFA8Cqh5Kkuw7QgdxHvGjpcsiPXQYqFyaGr1yTxY8D7xe3My87v7Z",
  "key3": "4261GRDMdoBiSBPDha8UEzD2kextieaxZmPKb6Gc4TJ5RFaNmmG5P3iycUtn1R2eJdrRhZnmZY5LTK6rT5vaz2XV",
  "key4": "4ohMRJP5ufsnKHMDr7xBvqgWuMeMF9sxmLhH5zykHKcq6GTrF4mLbhauiZKgKqejz6SwUG8cjgdvtnGKVSBuxFPp",
  "key5": "5xxAV8M2GNJDNXdf6GCZ3AwUzLmu2PoMkSy254qwKHSYAb9tXuzzopBY9Nvv4TicTySEBF3ckrSriYrjjoFRbcQF",
  "key6": "5pgYoQoB1V7gQGkmEiPFZd9NJd6PByMwRY9cjJFTapoQ8HKYPbv1mLVDviHFygaUs2mCGBsFWjVAbvof212VjNtb",
  "key7": "5wWxyUqrbQgNvkibhHLKp5RuNBor5mtdAfLLuaqF6MMQmXA8Zmaxh48enHHKR5KpVV3rZoc4ci5dGSuajzyrqvqu",
  "key8": "4dngE4p2o8rqmucthU53qzc4GemaxxhP9qgt7U9soVKMCu8PjDM8duVzLhntKyJN8porfmwugmcByiFviQpaQZrf",
  "key9": "3tddL3UfRrqjb2k2Tk4tsvBtdz1ofGnPXhnv2fgFq9aumnZ6i5DYJx4qa6wsq7uRht88pmyGjhS1iVNFmJJdLT55",
  "key10": "3efh8hmNGkAZBZphYGYBhVDKhdhQBxtDXXG2iNPt2Edo2Fb9CbxMDL7Ni3fbBU9PuVUyuvfXPKjL7kkZNZ1vUJJp",
  "key11": "DGC3c4CGfLJZ65jLEHaXp7Ny4zukMYG5jYnYG6sa1mXbXEgX9kJpKRLJmTpf7By4uPnNgnJnerSbstJXxFDfp7d",
  "key12": "XWuVVSFAk2xPwvkinXXM8UVjGddB3TL5WvNeVi7vJy3gxtSYxY7Tgu2kR9eYy4yeqrtihEDpALULq4UxwadeKQs",
  "key13": "64UL7N32Dnt7FfKTgUWtvoyK6MCbGTqQNyTKrR8pbDyxGeBeDZiTMWSPHxHKGionftiK7oQ4Rns2UdGuUKLGZU2y",
  "key14": "5MTtSxMp5s9x6UBnxqhtYCfwL46RpVBFK6UKmyrZrqJqZTvAYFcrekpAuH1EeppVNBSa7SVWjANtCbNvGKbatHTp",
  "key15": "5zXeFqgDq3vPmdY8iAu5nHHpS4iwWkLj1Vs7pPbYsf6WLNxwHU5Q9Pv44xD4eEzD5myvXXGB8EUnDHZbTg7tgQdJ",
  "key16": "FVFFfjhGhrbRweaA9x41N8CN4S41iV64PLQzJLCUw1Kyk7PGjVccmLysMEqSJRd3D6LutrxKag6X69wzRJVSASd",
  "key17": "z9bV3F3U3qVvCS5vZwrEMPiFxiAbFUUpmeBvy5jhts72qqHRMg5T3kaCiHkP9uBELbmU2NWSh2VsakBGCxpxcTg",
  "key18": "2aK63rYGrNdK52p1yHoRjqYjnsGppsyQTWf4aK9wvc1BxLvcDAGevstEkBvGjsAKUNQfsjq6EJugi1y4HA1yvFed",
  "key19": "5sKe57rBkgWygdm9aDX4tDu8vdSqUpC3VcBHqAfTq5cK5pSzU97H5yNXCkfhQQdoN23JqnJnX9DkdmXCXP5oDwWd",
  "key20": "3WQvixL8yDeXKukfmADjQBCKZB7DVbtsHPUogXfvBRfjT9waiMzZEDiy3XnCMQwcJGRfsxvBEwZEZ62w8BA8UrkA",
  "key21": "4MnBysZtmtijyK9SrMgwNGc9Fg6MTAvipLSS7mQHNrWhjTpJb2otnqY6C6SBhHLpRpSodPnRZiJM5bEuoVKGYjM1",
  "key22": "4MHAfU8gFgLmVES8U9iUUxqDEqPDXdqA4jtX8QJGCHJ2JSfMojeTTNDN6JeFDJuJXNYxUkC9ubYYGvYkQhs56Rg9",
  "key23": "2jra2yZ5f1Ybysf2rSDU3Pjku5GUCUqDkYqXJZ23uGWjaw4s6GNN8GgKDC1hA9ShdwwBAgMz8P43nwN1QWdTxo9j",
  "key24": "5EkHt8NdL4AFKAS1r6bHKZTBMgDpadXXAHRC45pkmRQWab8b9Lk3qjiwEFKhXyWY77zJmBjPy3yY3TuhDiW1isdg",
  "key25": "oW1LvwU8fJ3dCCiuw9Li8cEAPuWKgHUo8CpXTfQsTjw1eotpjQJQou9xUBzQ7jSHw4TVt4u5KMiYRRZtaA7YjYf",
  "key26": "4GH2J9hF5RvFfDTdPMTJTvivpYyCJj1qfuj7gLR4jVojYiLhR9ZwrFWs4E2rkgwugcwgZSKwrCNvrnAERb6YrHDE",
  "key27": "45nQnk4z2R1fwCW8vWbYsQyAsQmvRyrdQ4myQC6UnqcXZJ1vTArjEWEJrQvPqidK62ghFFzK5GfR32HxjQN4xWJy",
  "key28": "5g6qgovXFdfFsCbFxgkf22SYhExhAkFVGsR9gwad4EewrnAYiCBLTojUcZqApjXcsJfG92RbuGqVVvqwCfUyTZo5",
  "key29": "DoTfVhwTi4r1zk8ZwbygycAQAgQAwu6e3KK3hoG2FwZKsQ5bkkB9BQG8fAveHsiA6KRuYTHQ7NjxpqfUFYfbBwr",
  "key30": "4YDRBDvGut5x2GzFNZUKmxYEMZnmwY1HTut2nD6w52DeufcHpZsRdFATvYQfeMyRVwEeYAB2spvzkj44BACp9DhL",
  "key31": "5AkE6Qs77z7wtbk5r7GxQVM9D49CxtA2tN2bCDb6jsVfnbuGayyDFk7SFAM8MLzP73EibV7GXAXXp5LN4ZjGK5Jw",
  "key32": "y16VkiVdTkJELtZSepZn6ZiW5Vti3QvcsNNXuqe5CDmT64jDoKThyynPEaoeakCi6MbgeS8B6xSDJ94hbB3LKJm",
  "key33": "22zCmMt8aJENimn1xX8kkRcy9LZBu86iPiwXgFv1X3Qy5sTiRLaDcjK1Gaae1hiCYPq9mfnX6zpn13xZXWPxcSYq",
  "key34": "64hKQ8cPuV2djadnoHkEFZdQgtd44RBrwiUWuWLJgUwF4ks9YMCG1dUpxx5GKijZh6S8H6cNpQS6sxkkeqbqjwvL",
  "key35": "44296e78S1ifFXdZmzp3Knu3Ky4V4bHqxLVjHmRzHcNyUapTUx8suWbdqCNMjAFKNT13FLP2AKjETp13K6cqbywv",
  "key36": "Yf7fjU4cxUWgBxGXH8drwE57VDHqHsiFeUbzSbjRXrNFU7ZiijVyBxkTrkEQeetjKmEtnzrDDzTKU3Tyhsn3ZvZ",
  "key37": "49KdZYhJyzEk3pUyrppYXd26LX97mQmVsAbgC9Rs94tiofkxeTBe4T6UMmwk3hKctV37MGDTgeGb32xiNRm92N4n",
  "key38": "3o8pzUrTvQ4WRodL9KugK982GePW3QHLEQzgT2Nyzpd3NNdHgbdxpHurWPqsEAfw8zq92L3en56jVh1hNbbXX63V",
  "key39": "412oqJC9yKa8wfkEt45Z1pwciCfFeKDeaDuHwLt2WVsRhiMcCkypaw4QEJaKdtrdBafsJ67QFUwo9oat25J5tF7w",
  "key40": "JVn9TSKN8GWkBzgSp7Efd95JSGUdSh7DZPVePK8cqSPYKXu9wrSTGBAzRCDUz7F1ZbuNniqKYKsz6nXRXr13Ua7",
  "key41": "2Wy46JyZQ9k2HiCKwQQH3z5haCiuy6dC7HqYf4cHkE6cFoVwa19tngCFfdr7UX9e4kZPB4fqPnzUZBb2adbmoG3S",
  "key42": "5Nd95qhQPV5uVvD3mFbP9iC4cC1eBueU6Yochbyoa9Hwtabz9XLhMKvz421SigQ9FkMafhBFraAcdLXpc8aVxwr1"
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
