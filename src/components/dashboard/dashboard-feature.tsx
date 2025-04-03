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
    "4bMzFz98bNi7GJFGWrSPrVfizvnzbyYRFuc4Ua4dit64iVjWR7jkTqC8zgDziCwHJqFaQyQw7MqpeG2xYiYDz5UT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V13yhzSisXsShLktSKqY53Cor3pWs7bhLS8Nz1uvyhu6Gub9xetCj73ZHVVD9cj38dJMnU6vN2WSFkjX4nAcXx7",
  "key1": "2MH8UVFiY9ok4UEUwMdkhxPvrxw2wD9tMndygc16MizrZCUpTofwBUd37S4B9rNkpQiRsMJqw4hb7zdWbWSWdCVe",
  "key2": "PinFrqWNyab2DhifLD8LUAW8HYjYyvXhHVCRx9SSEVDWZPJKCeRd9nWLkYmBjCCdh3coAnFd9h5ASQAm3xNMhxC",
  "key3": "4yuLzPAbXKGxCMut5x5z8mUGV9EcRmNLYS851qiGy9FtKP344iETVXVXqmyEx9ENRntcb1Nz36wpe83SaLEp1dWm",
  "key4": "7syyyXNvKe296YmREJFzUa2Rvy6Zo7S9HH88B9NJKh9yvS9466wBH38kNGeJKZ3cvNP8CJHiBkncjurGCXmdFgZ",
  "key5": "4BYp11oQDmg9BtZG2AGmKeBKAobSYuWnAoRatrRFbgvFD3TPHjKjS1uKd5SqFDMM6uNzcLWTxVifMGv3CA5JPgBj",
  "key6": "28tzwvKJESj1zZxx5yTBnfB7RnzXxuJSugw3hCchXTWEA6dCRqw3fqYPrtPcxTkQ7XdcpCknt2qPiUrpdjNpUKuf",
  "key7": "42HGRbzoiU3WWuhJ8xWHvn2G8wvt4cWvnsSmroPFCuKBKqPuNeAurhwJMjcFd5nT7WQLZLfk6t4oztL7878rXCCY",
  "key8": "2brKX4B4TNjzKbAy4MmbiJtGJDLukZbfhprQB3p1xdXVbempcLktSA7YDHLekekygy16zcdx2fn23YcttwCb97UA",
  "key9": "2yqXAYp5gPqusoaZrX2pKBJpKj6moWurLA3HYCmiMGXyfaSDqXavczb54maRj4yP5x2YrEDfMshJTkDp8sBSo48C",
  "key10": "3urrpuHzDm8pjuYbcZHhrSPUuYMG4QN7b8F9MRQah5LMXfNV3ToRFyEvS6kw2KhsLYFrkRhKqf6PkdLyjb7581uE",
  "key11": "2p5YwEo9n3muK1TQaDHCnPrd9zdtB7shY2uf57mMf6Gtv8v75c2knYNqke8JPEWFeQ2QnG8Rdxv3yH3LtmfTFDKQ",
  "key12": "3MoUkgK3Fqxrx199csHxjUpkw6j1bTYbgrqwJ66paRSQMkZp1iLbphpxsEmvpcu7ffobFJWj4qMgwqh4oUFU8ATX",
  "key13": "5b5qUzq92xz9jQKpd7ZC9pVvnMsrMaA4yJiTQeQc2H5T9LnqcwmmSDiRcP4XBLgi7muAJCr1PXHKhAnFQ6L6bTGh",
  "key14": "UY49NzJcy2yfHVRcxcx6qx5H2pigqzeNwWdKkacT9wKYjQXDTWzNqC8kJQyA7AsPhJF6c8PGh5K1ptvheLHyc8x",
  "key15": "5d4X3MkY9vitKcDeamQgRVzDzsC74oLeYWbUCZgjxMy35L3q8QEUQWyCvELtCJi4wQZ5pPEhBEshFJPFwL7oDM2w",
  "key16": "tPkToeF2nS5mXVu416yuw13Zc3ictuUHoZ9CnyXwkRhrcLWdHxfNxvqn7o32gJLbZ9TZN1Qu57CrG2k4AVWGtJU",
  "key17": "4z4NB8Tmb5MzNGMJCJtsihp8ZLXwdgrLe5z95eyV35Tx5GHnN1ckQPvVeT5nzcmeUNx6GR1ufvyCpgsf6LoNjQp5",
  "key18": "4Xx1J1Dge5Ti2sFvUHAMZWPQw8xiS1pyjWEEjCmDvZ9TNiK9Uht2FhSqyiGMTZTSAPiUiBTN6cEjrsQk31UkFu52",
  "key19": "3xv6vdykC49zZzX4tmGL42ARsGhQYKsBkETRPzm7TswrgGSnfacymM3XtjEBKnZgxNr2WDfqEoabedNEUTWUgNHJ",
  "key20": "64qy2PCxCmUUYpwm3eYp9vbbm7GosTWiPJnJFjhNYRwtAF1NGSDfMbmmZsiT41jHSbAycworb6xcwHcsuARcWS96",
  "key21": "41Aiosim3ABaZb42KABaTLmv1akiKe5FQJFK79UVDiVZeVkMVdQ1w7cDLzF7uEJGhXXSHtXeAaogTfhZ4mcrqxek",
  "key22": "3ASjJJBqywbQMu8zGXaVpKaLPF9gcU3Q5c6mUbxGYNsh9mpFmNaNN6ZxUCgkqxZ3wcdFPbGCxnfUWbBnLJkrVQWp",
  "key23": "5SneDhd6qs6LDj33PLZaY8poDX7y291HYd32SPxDqQVt5BZsqNgigFnCaKFyFeF1oTv7KbAGW1cPkmP4RS1h9aTm",
  "key24": "4CqHyrAXmyYaQEuRSjH2uDYExsu8R5JLKRZ89imC7L24ZissRWFnYggaeq9tG9hWJR1aKgUQ6yrhdKMqys5Ri2Y6",
  "key25": "cf6Py6Tejy7LcAwxxLQhPqSvhGts8a76atcyLtb4KyJFigYFe4H1LSnSVFA1dhN4guH3ikFXoYcqEe5K6cbK8Lm",
  "key26": "3iPZx2xzFfi2oh1tVWJ95NNnpxxcGQxY5DRVY8F7FYWtq3omJNvDiiotyyBLbHsnGeTBmhn6YR92CgMAE4cBtEg3",
  "key27": "5EnkZhkJXM4XMrcbeDgWC1Snczx1zAKyw4muxhcyKrSa4UyhqNMUfuqPAjur5hntVXdiD5zCddcHunFCnVL9e6S4",
  "key28": "63bYcYXv55zPGDtMC6AvjwACuEJ2bmQnYpHWXPZoBAmKDSPpR6SySi88vawdFSXwWPev1QjJ6xHD62i2X2ZUR89N",
  "key29": "4jeR7WnQ776fCisAjajs6qZfXVneHXp4Q45DvrPzo2HcQyirK8qPErHDxDJAJheSbkuLypppauMW6gciA3A9oWZF",
  "key30": "2zAexgpgszsbvNZeCKMckeRRWk1pRn7rBrFuobNCWrg5mwUkNdiNJ9HBZV16Fh4PPxwpih6msnDAYv9boybd5YfS",
  "key31": "pAPndBmH5etKukMqiXNYNCMLpsQCLDixjXz4pFpSsi7DyQM5kwhZzgCdmA9mwwACnW6JT5m2nmPTn4RsNQtcwyx",
  "key32": "12Qm2dWwLBShtcPew8sUo6pA6Y2p3iYEnZhr3bTdMpNy8hNzgChdA9YnTUtpbi1iYEz9ATqPyvK9PQ7sJ3fTFpv",
  "key33": "375zMhxup2baoPdt3HKneKmke87tZrtNxXk8eycGdTehVGkmmCuisAvx9AXdaGi2gc4qyFE2rNE2MpRykJYRsnfJ"
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
