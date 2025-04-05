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
    "64GeSuTdUN5hnKCpENvd3SndKjYm1PAin4L377zeiaujAMSdoqTBik96xSoxJbTiqro4gxX3Y4xk9q6E4Pd2phn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TMoTMW7oXHd9ULA7NDbPe5WdJ9VP4JDiRduM29iRHNehbAeARaTyXeEhSqgAgcArW7qZxT1YHcpsmkWsStBkm22",
  "key1": "5URV51zAqn3mPuU5fWtwxxPWGq39puQe42AB9b8AiQTer1xJDBwizR8Akd3fpqajPLEzxBHkZfcLtrLqMmXuVEr3",
  "key2": "5opHopPjsEEFwSG1WHdwVH6ibPSak62PG6EyBqP1QUyRc7v84TA7jYsAJdZXGvbPvczi4x7xcuFFdKf7wu4SYVu9",
  "key3": "3GzzExZfnS9Dfscpng7reS1e5KhnAHMEuTNCUrxqXmLtBQMSjcrtKWWF4qaP1jEF1DNrPr2zhUwsuYFW6PL7zUpx",
  "key4": "25kDj4yxw2LtbjFp6bzAJF3D4PfnFSQ8gddFew8CaC7D1hwqAURuQrqceGX69WvaAgU2UzpkcbbqwugxEvf1aPDb",
  "key5": "491aJPHHyUyBGiykQeMsfrkBKvXUn7JKPGYbNn6iMC3Y6sRbF5Bf7N8Bm1Bj4HQv85N3m6fpLFuqGWqPye2k4K7",
  "key6": "3Fkupibk5oqPRqv2bZs65ShCqSZT8sumZsLLeVdypvsHx4gNfyqc9EFDJHLXnBuPkRfjZyLJGhE6aSZEa8H5Sq4f",
  "key7": "y7RwrJJm93bp4jYmMdihyFgcxvtMmLfxhBvcy81aL4bqPKc4pZfibgHoGuBtaik8TY7n2mwDgLy8exLSqM35q5Q",
  "key8": "5kpfbcyHg8zQLZmkFfqz6ar2vmFNo1nHCdUJSTP1ENd6gWr7QkRPQHvtjkKGZictW3vfahVUu1gXpYhT6QSkBdhJ",
  "key9": "TpgHSwjhRrw2amZC52EabSWFF8iuX4TcCX4B6tmPa7CQNZjJ86wP6zdu5N7catEUAXcQmp56JLZMzHht2stDWM7",
  "key10": "3rKtrbzWn4UEGGC2sLxnFs3T88UUyzDuQA3XQ79pdwDwDRchJuGpssbYDvXMeeENRJfLyA6Ax1dWVADatqXx2okr",
  "key11": "5FdPB7QBukdED7xnb7HjmaV69fQpcFH1Gf9UFqNif8jzAeiG7kAhevvFow27qfNgFLd14yMV9PicyXi9xA6oYUej",
  "key12": "3ngCeDFi1nUcUPPV7pWSxANk8MnagvsJwKLvLwvYKvN2hRL6eKvTt1R1prZ8iCjnrc9vZiyLv43rQzhsz9HK5jnQ",
  "key13": "2BSoqbgXsbMDgscgmLfjbjVNNuXNBgtmoeNiNAWLRYDgWUGtkiwLPTNKhLvSqK34h1RWbiStPTrf9Q3tun2q84vt",
  "key14": "mv8R8koDb7RteMGacF144WPYS6sjszLsm3SjR3y7zG1SL5rCKhseoEUa1VFpozeQJ5823cR95DjYHBTgd7x7scL",
  "key15": "2yu7YAArLjtXQDucESasmvDWv7Cyo6M1bedz2ADnpqj8dM7fgG4261JPQwnvPt5kbCn3222CvjMLwUt7HinTwofJ",
  "key16": "4a4SE4nVhbXJeWsoMv2t2Di9hVu6LAJMBwj2A91W7rHM14x1Y5ahS392oYBVLd8qzFB14ah1wwJpoA8wbDEGjqp3",
  "key17": "5p6H2eaypU3WWKRG968GKqgfZX6cqQ8PfFp9EDK6qGPXY2TD7AfXRbY2jxWRwGa8Y8J39JfobivbWs1CJrbqis2D",
  "key18": "4bmTMkHpAgWjPAzH1HZRdsr5BbGovZPt3wUw4hCsexbWad6Jx1xh4GAJ3ewQ77NNypLbArpbMRrN8ntEZU6UhQ9C",
  "key19": "29zMKypC8vNCshJmTn7zKqBd3JP1NvLs7zrAtTGkySEDDregJBJGY9XbzBHbUwMPrWRFnspAUnmYYmHbN7up2DDB",
  "key20": "2zJxZ5iDBSM4EYVhsS38TtVdnPLsxQEe8qAuGF1AisYvTWDyRAtwY7jxAyjcFknr6HfSBaGB7FQ6Khjfziyamjnb",
  "key21": "mFxUTTtZ2uKpaTJ34usBKPrHUFWGVF9bZEWS6pwEZqnv8mAa11thnPtM3qQ3ggDuE4rxZtzrDPmzbpt7fBCozMp",
  "key22": "2vZj1we57CdDkRS5MkBJQLUwQ2TASPHazfRiuB9M9zUMxi9qu1iksR7mfBmY3FPodXs4hHg3kZixquhpyFFaq2jy",
  "key23": "31ngQX9cgxfkLTfWqJS16vpRw9oSbbPLytWPmADNr5KvYHhmRV9xFfBQX3VdnWdDiLgyNhaJ4UwQpbVHVQoqsgkv",
  "key24": "2s7BeMUrFEVrCuzuFz4DgZsQsfHyNhuCdHtg4LGZm83CsrZsGVGdczQc5jJSfLHeuQgZ3J3o17F7NNMwPbQBFpGF",
  "key25": "mswUjsfjNv33HiZ42Ycx6183v3wqRT1yXsn15cMrXiGsURdcJzDFNRGHFfB1RBFB3Ac6TWUy7msQkrJxqwk3zon",
  "key26": "5ef1skNatuz862Qh83rDz3cMBFefP2AAPtYaNz9HdtfNeiT3wqDHNUcHkTa4KTyyuex96s9oF3VC6wjLkBRWGuwA",
  "key27": "4fTHGeY976tYf6orA7WpUTwLd8PBXExMr4g9o5mSjUDfmwW3yTduL54LfNWQ2wJRV4whrozRwMt8t1kZJUfT7mUo",
  "key28": "NtvYaUoMhHZLh8MExKFZNs8qJrKdE6iM8xWeMMNxvJknU2SsYgFi7ZW5hNt5RYyGupJHyQsgLCnsasyQDAPYo8z",
  "key29": "46bgXJqoA5uXjCainxsbZ5M1tLLkEkpLAhiyaf6NR5nD4FF2DuugKeTBmFes6GfUtk4Ti1dapCjWMpC6KH539Ptf",
  "key30": "3kDBrm41NtjysN7VVWHMhb4SLH3YiFee8ty72T9qKrQz2HpvXabndzEejUmcYQwWKR8WL9LBnb9T2F97mqPsjuYW",
  "key31": "5hMNoJDZnHnpQQ3ErA2jrsQyFQcXPJKDFChwAcfB2Z6nkKMKbSLvTdGuPjw3Q953mrrw7vvsY2RwNQnDQXqunr2X",
  "key32": "2RxTnqrenAMApZ8UmAqxYXK25Y4kMR15X2vGnbTjVhauwrU4Nqb9wxhQVPGKGvvvjDUzAmzCEsrCqwRhv1HJdd7r",
  "key33": "3WipYa8zhQ3odekskyGPPvYBcM1hJi4SAgiHWDDADw7MpKqTwyjt3PUyjEi4auMkNC8hDEBt8DFSyaeKZmjcSuHd"
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
