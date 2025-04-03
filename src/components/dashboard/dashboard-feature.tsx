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
    "51EmhPXMYSJd4dKCM6hZ2vW1VMh4krKXS2UHWwUq6bW79qcaLBLYdEvsK5bPj1AonhXtbNuyBEvkCjoMTCNRkHpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PaaxVPWAb4c45Xcm5iE1g4avARGXFLckibqkQZBefMc5xMEt9Mfo9oYxTevBEysj4aQd713kruezFuJ3gEgUMdV",
  "key1": "2kyEYQCjohKL2tekpKoYeVqpzn81HTFgBMBcWop2r3p5pwJbfE2G5SYaN1QCjMpBhTiuTKz1aDXR9tPRwo9p4C9V",
  "key2": "26axiWipvY8QPMZ1kvngHWuB4dTGnmQ3EFX2cxMtihEakvEzW1W7cetsDBvYRFVsJ29qJxvpNeirtoeNhh4UQrDP",
  "key3": "5jtLZm3DTJsh4Gbx9YqB4nsByCZzcQ7FKWCuz6ZxGR3ejJc1Dk69aYya6zUvuC7uHmKkgmQ31ZRFPM7aC9nop6C9",
  "key4": "PTD92FnrSyZnWKUSSSavNCXxXEvj16RToiEEojiJZ4KfjMAkQCWLY2VpYDn9ZpYrhiJBYVycWgxBf1auMQPPA2K",
  "key5": "3jgJybbYx1chT6ibKAPt6enuTkUErgRTroVAewsqCWtQhud7YWxETmBZjE5WQkKNNzUnJrwQpGRxfrGFB1aeHjh1",
  "key6": "3WQdc5ZrKXWcz5BH6AxEJAv1kJMmGZ8wjozE8T7S9gWD2MFkXXqtDPTkhZTsA8aVi3ebWYX2q9UEGuUV4eqHMHS1",
  "key7": "3ZqHLvzBxa2JXzQxvwgxhsTrBUxxy4ciUEfh8q1oyWZZpEbby1EGxbVtQgpKxGX33Gj55m8AP39zYTeQjnCA2Mzb",
  "key8": "XiykSoZgjELV1RAoGuHmmmTjZBZofL46kGYeKnCTb7v54ok4QXdTxKDBUJbL8QTn8pMPcg7CCRE22NqDigacHLe",
  "key9": "3U2bSakmn3aGh6KLi7JYNzjyCT5cAhfegJbH8ePTGzHFdn7vFhwHN8vzbJDK7hYhadNMNKKkYPmqhUDzsJM6ZYBc",
  "key10": "JNg9XSRQJyuGv1hTZQvPjY5r7f1uuCq2PXvBye3LJc8ZCjqmGcrfUxd9XBREydUrcbhDueGLAj5W9c74SuCGypY",
  "key11": "5Lvkfu4oPYdbxyn7NrbTDQ2PypB2cr58qvuH7SQPgHMTb5M4PFibcmudB5MVT6X76Vk6Gnkq9kk9TLPtrX2izA4A",
  "key12": "36vsv9ACaURu4ND6iNTn3mrzwFRvCKnkGUZ2fjUtGqwtSBUjKftTcxxFyFzX6W1hx6emkjvKyrQzMJsRTttHuLKB",
  "key13": "5EEvneksbUKzeNGdmC9tkfiFAiubEWS3YrnxbAut4CzC8AQSq3gDypm4PZPnSAtLZtkaiQihbBJdLTcB5d1cwhEg",
  "key14": "5uE9yRcbUP65GmDDqPCkysvyZ7PL69GWruU8r3YyEMtPckxWocjtmVPKtdvrkVUknyyucDcMHJ9vEJWM3ZkatyyS",
  "key15": "2ZbfYD12KexTWBV4YB7KsJwPGppYyewJjy8Kwck5cHGr83ou664RERaeqMF5aNMxXYW2q1sFxDkgYaiCFsqj7kEw",
  "key16": "5o2Kfqm5jgJUkr4BHtpxZUY6M1YtbRomHf8DfGDWF1Tr5RpptJGjzroiiu9H9jNpSgksUP5rL4s5ZcfUEBgZQKH1",
  "key17": "2k3zKocKZMBJfn3v56xCWyfWWv8iQ6yHcEorzMTvQBM64K2A9HdXWPA3REw5vQBJSMxpv9ac2yajzp6xzq5fojT6",
  "key18": "5hGPnS6X48y1RdqdpfpFMmWSyJEearvuPDMXu3t3KvX5Gr6WPbHMRzfeSmKQSCkv9Sg9Jgi9Wb4JjvgYUAC4Ku9S",
  "key19": "2Ar8P2imAqwWeqfQhbbpmgnkKf6moDn47G8S2VQvnzCYSwcM5drq9GeKcS5JwWS7oxh3Lf76RL9SoAbXoooykPVt",
  "key20": "2jdwodrXdBV4UNy8XX3sCBahFe192uX4dVMNao5nNYM9tt5omVRoe8jt4csTFZ7RTUzfdx6TyBB5cXTQiL76TTbZ",
  "key21": "hGLacfDE8qxnSwy29PpmKgWKYFdpSfaDrN3L5CsQL17McWkvP5sgsXqm6sRWQgXFumnQ5wFDs8B4cWvSPj3HTca",
  "key22": "4KVDKbYPprPQ1hYhB6KTwA88ZVDKA8mHCuHW9Hgi5BWei9N8SaF8xwwxasCGM8Lz2yoSPApeivsB8wMEXpHJDs3H",
  "key23": "5jEsUTXkN1waM6iduNyqAZKaBPUDHX12cnqAM5Rq113NM9YCELQYXLeppXcS6sGzYjV5P6PHaxPorTaLvM631fLm",
  "key24": "46oFVKZSZFLg2TUnYp1PgWAfT1ykNBot6o5k7i51XnaYiFH7FLvKDwuRT1dLAYv4LCi4MJS6GgJ9BHCdzipWsZeG",
  "key25": "5a6WZk1Qs9A5Y8HMqjuTCAa2ZSdoTDrGWAmv8L4jKujDwjPTeVAAyMqeLFwuBc3ifZ5aG5S4316XbKebEnDKC1zF",
  "key26": "3khqTnW5VGobB3GDjGWYENngBBCyuohVRxW4ygdCc6V3nAKnT3hEK8Cj87dhwKUtzWKPp4mTBDbdCvqcKs66tWZB",
  "key27": "VcnwgnawCiEF3iLfj1Aug2Z46VXXW7jXeA5DFz1QpznuazE6KH9D5kuRQiDgH5h6Gdp5nCp3PszvQmts8BoSGHH",
  "key28": "5o32SsoU3gXgLHb5N7EGLukP4qW3VH3R8kCxuZhzsug948d7rZNMxD1NPgrW9X47bRAusAB4PyFQgy3PhjzpidF2",
  "key29": "4xECRGMuWB7tUju5HXAaYfU94XM4geTAcjCEiGtz3u1EFhtZvvDWMy66oXk5E9DJ3rCeZF3GriKtSQCWwVqXY6UV",
  "key30": "3WwzgNTpe3hcYedrirXbwyfi2NTv2jVugoYDspTfMBtdYvKrJMaGLr7m2YW6GbJn8DADRrcKeGejBxPzbfYFHmvW",
  "key31": "CBcwF2ub1gaihU1LNGZRuSEWdA5yqA2P62mFXuBHWujggRS19y7r6BF1GBdACEx6HjAuRuTPDZduWE98SBKpKKM",
  "key32": "CQe9X4VzJfnpYsf19fPX9Km7z9pP62My7152NX9oCgWaV8FCTibWP2fqBJyi58ekHa6xRDkTqVRHEkGhbuffT9s",
  "key33": "224gTUP3cwJwPmZwCgt846K2Ykqg4ZSWKLiPdJj5Nwsk7MB5p4eEZXdaLZ4c6sBWRhJGjK1wG6RK2id6dcqHKtzc",
  "key34": "4f8K7UmfT1SPfcnjsXq7gkvoY4rPqKPCoyG9bikns55ru8vJwHtjqHmWqTZyfCQZHyL38YsK17xscD3EM8UkLUGW",
  "key35": "Yc6wQ3STs9VsxpQYfdaKLdFBUegdRoiqQWqxLRwz7hLj4BRZbeC1iykQ6HHEe25YEY1L2cAqqimYZnuebJxNA7h",
  "key36": "2BZtjjDmSd6CFWUYSXx8M2PSYqaH23qybjs9gVzr5zaZBKm3x1uYerm7iZ8DpqHirR2C9W3RG8MkQzHmGwty3wdM"
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
