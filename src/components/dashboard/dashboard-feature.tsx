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
    "2DLXR1LgKQCWG1Bypjw9CpzVxgm9tg4u9YztHUnSMEmikGJQNgGwkvXv9h6nsZUQKzcAnkPniKZdHZuC7qnzXMjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o2dEVqXUTKBiobySyRS8Rz4ruvFg1DBrmuLErMNm5MN8bb6gPvtFagogzd86adR7phRyzb2mepWpWbamvfn9DKf",
  "key1": "5F1gUyErP7dNgSmTX46ZSQjgqSV5vZq2NvsH8QzdpGzgCuc7w2Cc8ZBzgS6wGUq6S4ay1bGG3F8pWmMk6T5ZruJD",
  "key2": "2PWvBo8AY68XSuBjZftPLjxvP7SSwZsDzxGWKirJmd5q3qd2smXKxH9jN3mxgqyCQkfvf75qkCGAuoBJEdQovpcD",
  "key3": "2Z8X317SdirJSfgYfbYFqv8kWN4f5YgcivFG1B8KMvUmfvp58GJZAnzFDq1Uq9Au8rPrYasheqjjxthqTW56sM8W",
  "key4": "64GbX9S74uh6DRSYR7F4o66TtxeWjoUbTaySYpTVdfgbqgSyWzM7RmRAD9pFuRptxWLRyTgoQ8kLwNaYjiSZuLYT",
  "key5": "hfXTFRLZgscio4huZwb7LjijAFQvPaYHcgBSzQnNMweHJqjEtzFfXScvtJVxqdnNaSk8qHC8dus44CbSzxqMnC5",
  "key6": "2QAqfhydLSN3zrvPynuSPtd2gU16ERxnXLxX3zNkYNppJ5iUpm7rCykV5Ff88FBTHs57XEeprMYzfkR6WeCrii5v",
  "key7": "56hWY2n5n6tpHoKr7TV2hhoGiDBjuBWUBSh6chWUG6z1SFfL8K4JJZQ4TrmgGFJr1LjUAqvz6vSqxobZcRCQzUbG",
  "key8": "3mKuKKdvjfZmKGDj3uoGzPmF58R8maVRJ3i5AkdygqCdR5PFsH2aJdREP2riuc6o4gMSZoHbVpfgfnLGuvh4NJfP",
  "key9": "2gzEBtviwj7einLFJAJRu34dcLhrj7Upoup36osf6Ybnh1233Adwgz6RAiRjuepaTEKUcLWWZMVibH7FGrLFGCMw",
  "key10": "5m6iWZH4nFUxa52SVRSze8qePnS9Lq4xYWE3LJKu9ZhBj7Aq7VdBCpMcgZzUsXTyyMvxsVJtyf7n6bh5STbrGzUC",
  "key11": "4T7Q22owTdFUwfoHE7ccFBhBzB3ZhnpEYLZa9JZgg8xFS1zgVhSGd7CFxfHnuqwaAxMd3qJY1rF7zpUW53CmmVk6",
  "key12": "23j7NbGZQACcgXUD3NYgvEiPLc1PCf4mHrSg4CyLTt8PnwXMsF1kG4s1LJJJKnoKU2W4LWFLfyqD2MHfJqX5tm2E",
  "key13": "qqXVknGeXKPd77nh6qTZaezdXtreW3HKFWLzDEo9hsxNbej9UT323NAA2mZbeCt8os9m9NN9vpbQfQZFksP4g4q",
  "key14": "5QLPDGhZ2BinzJhZ1dhhEPKnvhyrirBDrVjRNiv9QkwQmfwgadDTY1KiEpgK2tF8cFrS7MBcyr6QuR4CnCJ9j97j",
  "key15": "4YBcT3PjByCU3saiJoqEN11spGa2NvDkK5YdUBPJuNyfdY4ZxE2DzRMZqh9HAi8dHKs7rKGxKMNLmxMzZhuB2MVV",
  "key16": "4RPREmdZNftfi8aJ8dAsjBsxvwYf48RnTmxp2DZ3TNuqxQW5vsbrUGwoGSwRD86qyGLV65ndG41935CnKv58ZwnA",
  "key17": "4t6Nyn7R2UhVFN5p63P4ajHPkEMhwSNVodKmEbqab65iqdNSxcPzpNge33gM455okVJ3RZAkbnZGKjY4rcx4w2GL",
  "key18": "5CyWr6dHiUXTBoy6NwjxuZSFfueFS8dFFpb1f2RQyjn9GDjYDrXx3Y7XtXySup4eSXiGVa1DVS6ZoxmXJwHFezoN",
  "key19": "s68bcTtYbZofhmiqEr2EwEQf8s22pvTJTMFxh7Hk9a5F3PCnax3TbxxiMuGndEu79TMcwnk58qT5LJQmcVTJ61H",
  "key20": "PCoz1uph12sf7mbZzcTXV7mcTE43Qwo6MfUs9vK9goGNyFZUWPVvFVrkSr9FUCTV1LPX27XPEnN5N7ErtrwfdqA",
  "key21": "3jsccDKAzArvx6Qkucp4kbEQRK7pCoXSpe5WodXaAfz9kWEYKyJzbbGVcqkMTWyvdg9orA6xqxHtZcUtpzAnQs9F",
  "key22": "Zp2E1TNNq55xG2ERpLJXDa4M879bitbHaybK38qD4H3zdk14gA9Z7g2yEC8CaRcNFC9XAWqAkWCsVNiNFNM4G4x",
  "key23": "2R31QuaFsoWrkZMdrN9YcUB6pQwwEvdBRN5QzNy6fepKCsLYqeQsnS4JDuGqYaeaGTwZheRCu1MZBnh6c3uEmiNd",
  "key24": "V298vib545KB896PPuKFMstf7gnY8jgBCiobWVhHuYVZxhf31nCzQKCQKn25M3GRiHRvoUhKzTaAhBXKAHZdsth",
  "key25": "aemuh7jkNZHGnVSTN63PGBawhCsQLkR3gfqvisgcwjPFuqm2tMvaxMDwz5U1Bk67SEHebeS8vUghsdH3kwwPd5W",
  "key26": "ro7RnXfYsyqpux7FAJ22gha7Rozirysh4rGPhwzEy6ARiPq1YwoY4W4ZBEcr8H5XKkGeBHjmZwiZd6gMv76TkRU",
  "key27": "2j3rJbbjb9H9sNxZTXGFWsJtqSGrUEXaMutF4NQA1DwMo7JUyp3M16q1bFhJ9oxkyPPibfWTuYwbktZtgLqaTJ4G",
  "key28": "4LH3L8kNnFLtUJfNS2V9Buze9wr5TfsSQA5c25vsWjVh8JHc9VPjVgVGFFtbikYfoix5yddryCTkCgngxXFqip6E",
  "key29": "5oerHvyXoFX641ACt1aVcYQgCv5K5sLfCFjnobaBR7pH1VLP4D1PB5QMxeCK3cbi9izpGSjSno6cpECY3nfPKpfq",
  "key30": "2a7CyHYvvS4D7ab5vz7yhdtqiQjHiQbgHFCANXnRmF8GkzpEGVQ9pRUgfdfWze5GZ8Rfv4wNsoUc4z5SFMJjFbvF",
  "key31": "4QkyNQGj4bA75d8Q6pF8MgSg7K9L2smfdnBXWoHeBb9a7LUAyDMd3VoPiougWDahRoquzAFLJy1YgE9PZyhyv7Po",
  "key32": "gUUyVSEbZ2zq2zE3m2Syf6m8U8Unk42PtYQE8eUyiM9dZD96Lz5Mfzz24XTHENaDUXMe5CYm4Cb6vwytPLq1FLN",
  "key33": "67eu2nh3JEQ62H3z5mWEpfzqhgqQQVewZyoxn1mJqvHDA6JMCuvrRa6bmAxHWPRWW9LRdTwAQNTD9EVhrSmPgMdH",
  "key34": "38gM8zZdcLncRKWJJ8eVwB9exNMSfZuwwpY5GMqdGNmKLtBhr1Y5ZtnY6PsCxSWuVuT9tGbjcCkqAfit9LWojH21",
  "key35": "28jxyfsagfRADGg2EnrZ9G8JzsgLAuisiyNh9g6jfEqXoqV81aFjt77tsWNTtxn2AxXa9UfW1w45zMQ9Wq2cdLjU",
  "key36": "3k79xJeopMnmsbk9PAJhmAgtg16YmwgmDBTNpvsxpqvB3E8bkVYaLLCffAbzLHrV63egtNrQN9GSBMBfziLoKTrx"
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
