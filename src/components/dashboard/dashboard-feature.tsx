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
    "5tVewMPYiiDC6WuW4TSxdoB6imdSYbNrTaxJzAVFBt2HoUijQLgtUk7yGJdPYUx3oRdjkgPHxyiYHTskfXH7pagD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zwnaQv46WAX3uwrprR6aWPVjhnsnPRis7Yz64McQw4qSFX714qdAJTSSjaaQChSnFnP5cpjfcawMMSmx66mEHCj",
  "key1": "2eowHQCsowFeJM419mXwm26w6MHWhyRaAkrjAB9kqXVUPLMphBj4X4b6VhBEER9go5sTDe7oP5XEEm6QKnP5nu8k",
  "key2": "47bM56Pz6spKrubMjn6xvNd5TeYiy96t2frzqWj4awCJ3VCDkW2gAyLn2tQq9sg8qPQ4FDzLBH6F1m1rXuDN8P82",
  "key3": "2Ehfcdj7kXLhpo59qqFRUGcH47sxFpDvAfcecRtXnv9mLXzGpvexPSENTaMe1AezK7VUu67GdqzSbFhNnDUnfLTE",
  "key4": "5ZHyd626onsnAxmojwuvzXxPjsrttG6jvV8xFbZYRYBoTFFkq4a2ZaWgLugz2Pzs2kVAkpKxDHPoedfn8SE73Rx8",
  "key5": "2bQrWj7ParEZEAb3bUgtntAbiAEQs1orAXvjFScxXd8bP9c6EZbqJcCTWbkSJrdJsWEfnzGcD6BP2CrbQXhquVFV",
  "key6": "3epW2xGyVqg7EbA4wFLWxQitC8vrQfPKUf9r1KZP2D3CvYWquToSaBmD4BQbQdg52V6teHreqSdkfNfLYJR4kZTV",
  "key7": "3JGid6LGhhQTLdwc168iVvvRt7Gkn7Fbw48KEKDe63Mkaui9mhdVZUFPsUCj7EKs6Fc71UdAvecEn1VA4dWBEEhL",
  "key8": "smvHPVv2t9VLUi3TXYjDYZ6YK82mTUaeX6ikWBxEECMvkwnAxMnYaS7HRDNhfeYDsLdmpkSNvWCUfgk4TPZQWXB",
  "key9": "5FCFMUWA3D8PAXWa5RCnki1q9eAuG8KKKDTJqw17pBs1feUiFXbWdE2mMWghPP8yUBMFperP6GMc1rchxcQtR2rW",
  "key10": "3QVYv6TY54EW9oV6QVohpu3KCd6jZQNhEYETiCDbzWMXvzSLLRKUytkbZfQSU78Zb9SHHwvqZS6mBD7qjTY7Tyr9",
  "key11": "XUHnJ7C2Mcb2fHzVpVXpUS3LHJd1sKfujGEkkH9QAd6r8PwCA9JUyHLwpEFq8MMc93tfEC5xjaLpR47UBrkTm9L",
  "key12": "4dB7UjTAzH6j8i2uAqWRn9Uj7PGEH7rZzEeL1Nrn2UqWo2rNomHyiJL3CVf9bYRc6NTaSSpzPH662Rgru9aJLA5P",
  "key13": "2ZWi6Jaiujgtv4sMjhMEWPgW6ifx95daAn7gWaVSnij2tz8Zz8oC734WwF6VeL7LAU8XHo3vevzFj5kb67oY8xWU",
  "key14": "2ahCY9ENyyx8JrrdJyPUv2Sqd114C5qpP4vnpqyxxPBrFGgz9RcMNj9hacD1fCTZhxSv5EdLxFtLFmmvjvF5nwYM",
  "key15": "3FQUmvB1WKzzZMjzwcjjjnjXM2HsYgaLSV5frnoBaZ3jXByuA1XzqAZkMYAbLuvv6G63UXWNATGLQ89FMgLC1JHa",
  "key16": "4GnKgmLmbAuZDbkGdJS8dk4g7LBoSGRJHwpgAdjmCV9oavHnQiGPWVKsnxfQypA55WQhJn6TaaQmkrZSzg1uqfFM",
  "key17": "4hrLBr3amS66FtxDJyRYxkycqv6vELDK43d9ybvsZP876fQRy8TEkZ1AfzayhXZZHHgR6N9N6zmb71FV5hjG3ciA",
  "key18": "5vwzDLiwNK2771MU9yBWNWWvfCWiXr8xyQrac3BsAWnPQK6sXQ6CSojSSudtKdo65h1hQgW1o9EsBnMpk3v4p8ic",
  "key19": "p9muyjYBp7x5997yzz8Sa2wzXektRkYox3LT2ZQfWG2vp9Ma7KCcnSmvY4PxrF5CBmW5deLR634kU9rok2TyuGD",
  "key20": "4MYAwZa7NYD7dGeeer3EhGqSfQLVJmjC4DCtCPQupFEighms1MAFXf63CCHi5j2fBhPMsEK153DZUCiNrSvSNHaG",
  "key21": "3ekBzqBdrgcq2XwLxsVgn7WyadTdR2MDpQgUw1C33Fg7gvMDB9EA2tqTXkUorudNty3NVyjCMAEKZrZ9gS5gjUYf",
  "key22": "5bbddnJftGuzLxXbXjHHwXWzTE3nmp9ZiDbvKnygNG4hBMcPfkJdYpBjHJPbM8BztkHNhh1JrR6T5t4U29UP7Fj6",
  "key23": "G7usLUHSR7R6y23cz84MaBro5UvRvaUmx5kyz4CJpHchZy9fWS2MLRfu2msmSvAFJy9W99kL8FNiJiPC6FUQtZT",
  "key24": "4SSTyM4m4dDgKzwtSg4HWy4gzhnCxr4b9KjL5qJbtvBN1SuJQvdBnssMExrBJGU8xn6aEzGJDqdibAMyabjVfN9F",
  "key25": "2yZoGms4fz2zaQC2Shnv2bW4cZRkS8piasrrrHaDbkgGiTkTaCZTfKxZ8zGkZ5oG5xXzvfzYdoq6FJMVwGB9LepW",
  "key26": "om5iyoYZahMpY1ha8WreuNUhDm73d9v3fiRZiZu26buGZpPEqjHGtmcHemmFSADZaTUSqtuYAinsKRfEnkGLny8",
  "key27": "2aaSg4jLC3eZnoidhdxzZiiERtkXneYXT3JTpCvFgbMv4ty15oj61wbRabuoWFpiC3WRTs6jQZij7MqvRAw9SHTa",
  "key28": "4aC4ftAmyDpX37GxJUgMtYhz4qpR7QvAQGFSHkfk1RRiyK5ESZSkCQsCAx9XQ9u7xEx9AkhFx8pQhiN7npfm7xrH",
  "key29": "5iSJ16KHDQYsJh5XYZidJGNN9MzQGmDxuEPuLUEYG3y92yebWEZ4QHrUfRGNmrUaK34iqkWjsXvLUxYpK7wwCd7f",
  "key30": "2DEeYoiU9QmR5NjMMYVKGhcPLooLQw4MpKyuUkUZDPZNihTmTfRjr9SARHkmRYgcah15feRdM81Y7mZ5TEcKceYz",
  "key31": "37LsrZnBjHizD6hfT9uKdJeYg3kGa5PyZbmLUDqak4oRg9h5mbccCNEfbaMSsrX7MeoebAhQexrEUBugFupnSboK",
  "key32": "2KVfUAkkWuDanLuzimZ8r5PejudBuyqiVRhX4zLMLsAoYa9wBueWz1epKzz2vWTJ215UXXNGezTtZt7yWCMB3GxN",
  "key33": "5zq6XK9cqfVhoWxgpVMFacnJXPSXkgUMkyEKE8HgThxqbiVK8s8ruM8wrgYy5cnysAjwcxvpHoFcHZjEfV3pvNJo",
  "key34": "248p1cEuSZ6Pf6aCs2HNZshv3q1yYqs7bNMZszsg36kanf8YkwJz3pj29heNio1YsZUKnzFpfGkYeiazjkuQ3PjH",
  "key35": "2sdnhZexoqBmspkvomuVyHkxjcXUUJfWcTMcjCvtK5Xp8RwZPZZQew99a7tGLq2NvjwBcPiuQUhBB8rz5gEzQ3p6",
  "key36": "2uwQd3KDmAUSNB5VaAt4GdGPh6ytav5EQZvz5N9LFTj5mNJTkj3BnqVvQW5bLHBKKs7FS3aJMM95PVtzi55JoGua",
  "key37": "3QzkWpt2VKzbwTv8HUu5KjoEffiWZqnJAAKXd8uoebXyg29GH1HCmpx1R9AdVcupW7sPiKMicRR5x1FgLiiHH53N",
  "key38": "3equyoMvGHRSgMt8yJCmf6Asco9ojTW5GYJvXqgDibhrRs3nrAZFTLJP6yAEdfaMPuhZioesnnoc8Ka4YGyKwPwy",
  "key39": "bxh5BpZZRKD45RwunAdUiDvJzTBigLwMGaZ9Ez5baeetfmh8igbLwX26M4S1CY3StfSVvXLxHxRgn7b1vmQUd9Y",
  "key40": "V8gNnMdG4x6pBJGhHxEbuFYAoBS9wRFYTAhY1mSt7LnanZW5xr5Yy88WtcUe3CAkhq8n1BAGEuTFT1MAbRLtPbz",
  "key41": "5fqB3cbbMdNijT9wJGQWuF2FHWYPrH6iAM6aCbG92gk87cPzjjBXFZGjAQBrUWBBffGp4XLYFH4ptXQtiQsXZouS"
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
