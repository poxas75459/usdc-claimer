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
    "xWAV4GfWztt7pxcnriTYBff6cPnRAiTKrGar39SM7BRP7ggM73d5Kwm1dZPXKkbdrEGdi6hXQ6W9RusRvdWxsMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cKZcfuNzEdbrGxzHngxevmRrjp7keDzg8b25ZWaArhNMi4Ea6DWVEdM5NiAznNaoy3Lq7A9WSvef8zDraebQYQq",
  "key1": "4dPeJFaoXUHwkv4CB3JEdQiYzx2Sw7GKDAYJAH76327eA6hxSdBvCYC5vVeVGNEpGX9BQ53z6CuCU28cMbr6k49E",
  "key2": "46Rbcntda9uCroNTKJrgsfsVAWXafG7fwkLV4mhtRkj1PVwwiKzYgtfeQJkCLRZaJ4beNkSrpqLSsJvEPcnLri99",
  "key3": "2KYkGnQb9cisXMTEyRY2vHNDJ6YHhuAQuj9LqA5P7kD6xeh18WUC9mWQ1e7rKiXg48hFrgv2Jqhh5cjFKJZghg8D",
  "key4": "3TxjSeK8zBkd6DKnsKtxiigVGAHAjN9TuZUPgGKNBp4YbBiNcQBfZmFj2LgL3t4kWa3n19mB25ujxQeSWGgL2abb",
  "key5": "3tXQ9oxU9msd8GJtUdSkKauegdxFGSi9Hm94oAZvijTy8bCfvxbcgZgBKLwKTBiWvJPng6ye3s2ot4YgK4XMJwT1",
  "key6": "5rSGA3uyp3Xr8ZPDp9vTduyi2Kg6uopEZr4tanXfq9NqZaF3Z9tE4ShdWdeezidbYrGzENWQ6yVNj6qYVvVjMxzN",
  "key7": "2S6dSRqCBxsGyoL3MocbwuqdzJqEdQwJk57Lk3q6v5WHBvsrUNNTNuMmjznuMS5kj8FSXHTyQ8z2ou9W5UtHWrhN",
  "key8": "4x4XtXCgQmewvxGJHW7ncTPt2sfiW9SCcwvpz641yMqRAivzTWtD6DGLgkRJU8vwbMdKu32t3zaMcoUMQ2VXfaKb",
  "key9": "48gNrGuiFrJEvEjdaHnwP4tUK8TvLYxNNQ4jPAeSQCzHmCBCTiJTfyU2Myke7JuveibmQx2cS5hFAjKDUNGR4tye",
  "key10": "3d7p42i5M5TYpt1PTR8aY6utGvmVWvTTT8f1GxtMB9sgJti5Rym3vJ3oXnYam5qyFXSZ1jga7j4DKZTrTg5WVTUj",
  "key11": "3YiJEZc5jwhEqR4WLeFV6ajnnCNU7Sqf6ZVxY5AFXrMNFQ18XwqKytpYF6eYL6JE7LPp6R6qsi3p4tTzr4HLJafa",
  "key12": "5SBfJJw1uCf9QTrs9HEJohzKswc8bdkLjvZAtMNwvuvNCTe2tZQfwHrrJn9y9acsrMxu4AGiRf8XLLBSpExW4sz3",
  "key13": "4DtoYK4rJj3mVanuYtZNiJAKhpoQ2G3WB4N3rKez7pJoUKfqER4BxVBiPeJVKNnKCoQQyYbjxKjtf2M7fZmZmfVi",
  "key14": "3rhP7TQRiWZso5aiwyM9HubJpQhKGZChLzZGXAKPh1x4seSwgMH1j9TKKqs8nDDZB35Lk3rSB68f4tw9MfbSUAEh",
  "key15": "2DTS5GFN9t83K9oPFFgb3KrW4Nne8vkcBF7SPPYX9hhpEcyENib4VJze1hCNsWJGfRPE8VsSZccvcX55WC2Ncfv2",
  "key16": "5dQMtTGR57yRuuZZ4y76ZQg4wU3PxvitqpT5a9Mr41E3kmjVABbwtVpfZq8dc7mMvwTbjkDqgXa9iVPe1Nq6UxNZ",
  "key17": "3bAsqa41rD24gZjcJA8sRGg2qBmECHtbmEY2vbkU8avi7TnhyPRWW98JomhqGQvUqNico7meToATDERkvZD2twyP",
  "key18": "3WpXfShBxLoLP3PaSm2SVXFnrcwS4MJ4qyurPqJgLgBHS5R6NXzniXakWKnDyb2Zsn9rJS8VgukJTsxecwAqigP3",
  "key19": "3hAFrDyHDu5h7eobdRpQ1nUB2TZwHEngETkaDJWUibX3MmMqfNynBg7kEMuKJZmEMRoPXaDTC8ZarxcDTXVdKR2T",
  "key20": "25iuSGmkaHa5SKSUdWeJxqPNUrLqpB38zed1h2wp54LyAKPcK5Z3wNwKZ1fqD4vmStYvn9LyFpyQZFxNBHWMLFih",
  "key21": "3e2BTF8LmJj3HC8NCJmCtb9zcfb8ZJXNnBJP7vKfyfCGdMULiyLz79YfPYEoLJbyf6urM2J9S8uFNq5R6WTgWrHk",
  "key22": "2NAd7n33B25XXEqBAPqYmrRNFMcJV9hTRZdQQwkFVp52jwwrMrDp8Md3T8hz5pgYegi1poXxgFwNTELQX7zdXtvJ",
  "key23": "5URCEuVqKWPPH2qzwLj33kSqHxu649fNYmmcvSKnrTu28hsNW9ZWkSxwhsqBvLmvjjjQgHeMMBZSpGDcSDwk5Wzd",
  "key24": "3chp7xPkoeSFxsQrbwWMN2Acz3qL9SL4m3Yd6MnXsSseWFhZqZqfLwNy9pXZXWnMy23jb88gY9oqowcsUBKhm9L5",
  "key25": "5Eb6YcJdtAHQs83aGGiHqTgBZ9TmC3pbmy3EQi4zqXqVkX1xksNhoQyCmq6usFyQrhC2Yq5aP6xirSyWGYAjR373",
  "key26": "RZ8MNpv14s6fUKX39iuXgyTt71PcWfc6GgxCqGv15b3t8pJs9MBmBcB2FsVy8qN9fSyZgdHQDu7zvFXC9k3i9S2",
  "key27": "fMR5CeeoGd5KPWcmHRdt3iqxr83LykEymEZMoeHfQPqzezG1v5JVScb5TQmqo2SLn4bZnioAngnpxxL6Ej4udvN",
  "key28": "4qcTxVsAtXtSZzd6UTRy2QJkRZwNJUcUtgLXmqY1aWcE137w9CbzSj8JG6Z7YsYf8gaKaiC3k3p9s4wMBn66mmw",
  "key29": "S1CtfUJqJscAPtQ7UwHGdJRgNff294zBRzG4aEVQc1qntyYcTVESLR3w9vC3VfW1yp9Q7NTQfpqJVYHMnsiuTfj",
  "key30": "3JErQJvu87JcEv9i1f1mBpzHUQFY5oi5wHaw8QFww7i3F8zj2cJbQPifaUCwuyEW9zhNC1FZwqATSSB6VAfJr1YH",
  "key31": "4wEVGhHzZaGcqPyDcazmmLLUady8qZrJbGpRJFgyZog2JfagkJ3SFgUUCR8uh4uCtdHADJ5wfEzY7jwm7JQCsB3p",
  "key32": "WzEWPnU9Az3QzPhXgsoGETfkvkWafpRpaXoQWXvUxzojvMSoadWTyUBJcJZqVzRWjqHztPWsijqmgzgFcHe3evm"
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
