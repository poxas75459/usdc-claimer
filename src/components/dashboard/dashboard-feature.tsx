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
    "2a8ffXy1WgW7QFAjuXuhkCvpnPcoCnEPt3TNsVU6d8hvotfXkytq5EcDPr4naRdGq7ZFECvKfDy4xV2GmkppiMS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZePLRB3DSKPrLeR4aQAuJLBhNTk5n24qSHKkQfXFdVx3jAjqPxjEbsg8pgaXZLYTNGxfDLM4dheiEocdegvKd6V",
  "key1": "3zS8xjpo5ByHSvwJRrP2qPSZnR9RCJygHBYj2pUBxuQihW7M45Fi9UEQPWwD8Qff2Z11zFEoAkKGgBjwwV1zqdHN",
  "key2": "3JJySsfPxNhsYAxgSEiKduWuNnEmpX4Y8WDCpzYzyuKjQyQWpWVYs4dScejPbH4iyadH9MdAa6tJCdqADdMPcZYo",
  "key3": "5WXAxdz1yuktBAXDJPgLcK746mNbsauRur7vuGy3hUajhJUR9UBoVghWrGWCXt2Rhn6n93AGLgTX7cvAeqgCa7UL",
  "key4": "5LfWTEbSkD8bf7H2KojF6zonmBxhVktYM22A34CjERX4Nd6vzz5kY2Gvf1hn1vXL15xh31UKgxJ5HvzBEh8H4Qv3",
  "key5": "4ckrNPzQiY2NDdFGofKFutd1JANpdQVD1ia8xG21kFtKcdHMLJdSy7S98PTd5aBiJiacagPEymEhLXNaXSHy9yR1",
  "key6": "HEi6HJY2m2x1iKqwFq3ZsQciyaqmCDe5z5vyLtQQMwDy5A3iWfkFxnjc1G9dzV3DDGV92WqS9SnNMZ3uqhmE48s",
  "key7": "3vbUK8ShqeUUocUTYRWHZgyhxG5kBu9iQWWubmDaoW4dRYNYsF3M1efqdGcbZaAWRtAyBMd8EHV6Di9zMd5krjcF",
  "key8": "3HVq5NJ3EAAQee3FDpDwAc9YfPtVX5Z6orB6KF4r4XZE6SoMksmakDgVvZBjYgmJWqQhAqZE8Vb3yKQeLxwcbvzn",
  "key9": "5T7BaCfMRFE2zRhQe5ZhnaBFdoGrUroXvwk9d3HYgDbKsnuHrmaU84BqrGrWEcBCPS9vHQi5gA6F61eWm1XG5Uas",
  "key10": "4iY6RNaqhgU6Va2yL5jhb3Zzy1zeToxHbVDLBsYETyKd78PwSdHSXhrLXdQPtxpyuscqmyBZXxUGQjtV1zY67Tgx",
  "key11": "2WD7B9dHB2FSLm76jpn2G8Vjv8P22hNis1JDUNyHvAZFbZ9gCPC1mcpnUMAfbVzDRo5NNJTaGYfrqqxgn5Y8HDG6",
  "key12": "23AYpk9q5oEw13d799sEjDMcri37SbqyfgxkpaxU7UgkLbe1pxAqctSxDyPFiyS2UqkzUxGYx86aWRwyEw5HQTsC",
  "key13": "4xPECUMYbJYHY5E8BCXFgrvXJLUw3Dp6X2W986Ugir2o2GwH9X3GvZkXuZKobLKVCDGBx9nFoeQMFocvhqrJeNSv",
  "key14": "dAy1y2yWNqKjrYz4ABqpajcpR5GpkFEzJcpCn5W3USuniCz7QF6cJKrkve1jE66PdSV6F21UnW9yiUrBWurti4M",
  "key15": "4wDXR4yoL2Bat73ZkGtC3tb4ohmdYshUJeduWGYKkQzNk1E8Tg971YKn8gf7wGnMCGJHJW6hjUzU4hk7FKcg9wDP",
  "key16": "5XXVBoYcWzq5zg3Mte6WDeEwcZkoxU9RJL49Eb1SyyGLQr92N2BbU1MFBcpN2M1tpMWwbrqYncdwqwkbSNCNd1r1",
  "key17": "4rBsvN6AwcbNmfQhj2t9ZSe9Mq8oqf5WAGHXWi4dW8QEEcjfKkEPjwHikNnmSzqzQAU7cY8m36LUobJ1WLbWH1vp",
  "key18": "5SwtqH9tmuVtgWBQNrqXm6zkPxN1mNdw3ZgPpEsKDK54JW8H9goZupRnsymovqPHHWBVZ1ek5encrAFVW9XCVD1N",
  "key19": "2uGnUKnjRXa6kjcHBBJKY2uPHasuetqiLuqgXZxmq8FozUS8LQVSJRju92neT1MZDAkdT6coKeKBkE71bJLHRK6W",
  "key20": "3KPSWDiNKqNgEcCU9NWca3zuBWev9xmSAeeWiAjaxDdV5H5DeU5cifUEfcWr3qLsmtXh71XPD2W9yTNifyPYejad",
  "key21": "39qoyZQPHTQgwJU5mnBZhVfAs21Rf42X6pxG2WthHFCqfVa2oMJZZoPopNh8ZG3udbZH3kxPYBMXRsndev7RMbF6",
  "key22": "cz1iehAw65urQdbAFbSJeYLExKFpoAxq3Xe8eHz4KMAtJP7YqsqNLhdDdyjvLZuimf8mv3AUWT7wknqvvhcEk9q",
  "key23": "5A4JAqekGpDPg4nLLrsoZ1pisoqLN6LjUyksMex7b8ho9YWDgFCGLwTh9Nzh8GwrWzubxz5MhG2yeDnXQtGJU2a7",
  "key24": "5oaaf7c9wCmY5dDTv1xefKVmYf2xTtMpvXpm2BcKZrFVo9G3aXN3JPhCovGpC89egHLyZStC1nbu21MKG4foSVLQ",
  "key25": "4oWRTh5BxtktVryt2JYoJ2SDJwxsyvLdedmsQDWX5BJ47Jt3KJYozfpqxB82u2zKSyZaMvkz8ME77Q97MQ5Dzdw6",
  "key26": "5o5aS4VMKAZWMKYZUHvKebW7BnrBwRDPwKNMpVLcgodzqpsj86TKfJnYgHXtxxna3JrVidVfxnUTzEhqkJRgvnnz",
  "key27": "5ev1Zj4yQFLTGbroHo5zFavCT8U7yrLsDcYZRzKNBWcWrMkjpE8pABTNsKJF9vgBdK3psjd5kw9MWauadVTRtfs9",
  "key28": "ZsbWDBjwydJeuHmx2HQg12A2FqF1gLeSswpHGNtXZG5VE1aK3YXq6AWreqBgEnR564bZsN1QFEYqTpfFSVQ9iqw"
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
