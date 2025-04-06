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
    "656SzaPDsDCCQV6FjgYG4tAtC9jTs81YySQuWr5NSbwaUTZhkJjxwKjj9L6jPG8UDsSdWYYBYL3CTe7N1UbdaXj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Etmdm6uxunrvhBSK1ZM9aSAxwcg6c74xz6h2sVBVmYVqdwgZvX5SML7Uo2qvV8qbE3duG5D9h5KXuZgxSS623zL",
  "key1": "4HcJNqAgCvJswXuBo5Tm2cH3u3EPfmBRqgvdVxCcki494nQsXbMaKsPHSTvU9aEyc8wnsJcxt7w2qBQKs5vhjUKY",
  "key2": "xg5MMXPy9HqRFxCa4PFbX9m462MW23sx3kqGVwWZKc4Hc9ZHkpyYWz6T9nFHJz2eLGyozAmkmdmD4H1NfCWyeK1",
  "key3": "rMTw5RPtctRc3b5utJb1AVCBa7hQRmvGifL8CxtNwtSUKtU6RKM25mkQ8UgMyewzrGVrchZ8Maa6TwmHZZ6BBwP",
  "key4": "4hTGTtRfSKDwtmbUJc89tiotZhmHVeFoMWc51zEB2EhbvEkZgCBZFXGgKEkLyH4aMPGvSQJfEF5hLLiNF6QxAmzq",
  "key5": "3ydR9PSNCpUWabumxT7JyrDhckb2Qi23ZMzZXVkzyY6qy2jjFyadRg9oQRynvxz8WKizTdbhe7md5n6sVGot9Nz1",
  "key6": "mVVhUbQGCe1QWa62c5pSnxipryhZXEtXNCDhvfUjfXwh1si5rcSbFVS6QFRFZRz4d83ghB8iNEH1mSxyhizmDF6",
  "key7": "2fLEdJFFmaFanqPyzoSXrVKicewjcNQFSe8mME6scNSjU9GLn6NnPmot4zbE6dwrb7Qkfxef2TZ8NWApwuzHX1V3",
  "key8": "2QDEqmyWxZYHVLA8k9YNdXJoSn59nAWDKzTka31p7iMdUZEuBbaDhLDpzA4zuBh18d1fnGcSupx36uXgag854BRt",
  "key9": "3wajF8TQXz2fp5Q9HPQaCrS4dQ9ipVk4oyCmEQnhQGa2UiUw3KqDhw4iFGhR5G6d1FgRUwU7SNKjo6PDgFoYrb4L",
  "key10": "4NgjGBejLjLnr6huSbCs1WQqPLydjUVgNCJ9Dn5iY4A1yrWqr8GtawjPS54WEnBnRxyHjkDpgNTUY3eqvDdgQnss",
  "key11": "C9VFprmSyEf5jDuVVUGf6cUwG9M2d6hHBC7i43dkRN7troxxRNP5rMkjXkYtRuHtMgKrovqKs8cyz7rzVxmbded",
  "key12": "4ruqmqDdXhKt23dZHQuT5bmCs97k4fUb47r1DWrqVnXZ2B8H1YV4Nwcxmo7tto9PQ5XoJCHEycUWs2gitZZ5tUGf",
  "key13": "ir8ofGBCJ4YypGkuZHe3nLyzgU5EcRxVbxeZLyNFvQ23CPnaR4vGpiu6z1ab21ztXesfzcgNQ3gHCWq2VDK6Eyp",
  "key14": "4rdPdYjyffBs4mn4tMx5EL5gEY7ExHgh7LwGiH5iGqBdNFpqqumaq5q51q4JwM3PgfMcxjgoCiMBpVWnEaxC914U",
  "key15": "2bVYFzW2wa7MGQPpuA6GbyAvsQ8U3FKvjRtamNpbHdeq544Qe5oATCPas9HDe9xid2uP2UkJcMpaUv7qk99BFfwf",
  "key16": "66o4JJJqTLaEy8xg2aomnuLxmMHy8VMVFgfpJkttm9uJqqZAWsffrWLnGbdTk6k26t1xZxFybEG9pf8sJaaBeH9o",
  "key17": "2CFzGLPXy4qGLk3urbE4vymEgoTdytAHEqcZiSFL5EcVEKNPHerYpEFA9nBPLPRK1UiTyAQVHQvA4EWax9hfc6j8",
  "key18": "bXLJ3ApnEA442V8tkwsPhgKBPxCaX9gKYiw34BtBv6ysuXxqkizLmJomQG1ihLVnEfTBPbjSDqvu1dyhpuhhTRX",
  "key19": "2YMhLAHnfcbMcXhGK8mbrTeSucXVqPnqTQt86vxPzZyNUwwdsQCPBWHMb3fc1k4S3DbsJFBJ6vQp5TPdQMEKZQkx",
  "key20": "33ferVUqu7nYNM6264iVMMJX9WAZCJstqTX496f51hoiiLrh7c68zmueQWrQTYwhrxCoH9MM99RPtiofnwgfn8pX",
  "key21": "3gKvevUhUzEvdivmt1hieeCP9yLmrGfrYJX8kE1iSNe7tapy1uHg4ZpWT3abjL6ek9eiSiDysTFr7X32pNnEu3Kh",
  "key22": "3nin1FzVVpRxDPU1pprNZ51fiYNnD3YNT4cnSuj3xZk4F24tMjwULaUxShFMbR8ni5Cnko4DodkvVqNK83jRh9zz",
  "key23": "38xUTdN5gqpr5cuTby4iHa22cXb2LSD9orG3wG61h6NtezKS1QPccGXpHUTF37J4GEDkvYJFZ4dNHLwYTer8AfXt",
  "key24": "38iBmzN5ToLCEbfuRz1jAddcf3Qo6XpDAWoEpKnucMXLTuho5Lz1pEY3dnyA81eJdrMvosKs5jFutrt75fLJoriH",
  "key25": "zpvzpFvGZ6Sf6YpeNqUPU4Gt8J6Kgajz5vxBxVjhASUWP5W8CXSUXDvA5fJokyEaQ76fp3ZWd6j82rGbAovzrR6",
  "key26": "53tcoXKAyg3xVSwVcDAYP5Ry2hrtnhg6JqLWdM6dBiYjMxDWebGGFB1Tvb8dDvAHU7p9BwkVE691hpLRP7uy8Mre",
  "key27": "53tF5uQfQZnQWcXeHpuUMF4GdqNopkwU5eEHJAVAmSYqpvSU8WsfDotdJRnDsLRGNFrE18ZxrXNrJCzMnXN7FjWS",
  "key28": "3yYasF69RVanCfaNuEef1tZgFRb2cdrix44zac3VZCjyw92bp3LfkKEUfonYGLsamZWYkL3MUgAs72Q6bMjAg2mW"
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
