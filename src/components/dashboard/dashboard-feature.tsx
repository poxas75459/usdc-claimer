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
    "5yZyMH1AEeBksvYwCFGzw7jRYbR3q1jVEcpLZpTmAYkJAimkFhYWNo1JDfuwLRQbRTMB3cqhUsS3FQQFmLBL9LX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fZkLECKg9P2VDqyFzmCXEirrmsP877fg4aJWmwtHMPLDy1KhXxTkWb2sCLVhVfVLB1N7kcs1sR5YRcpm5uX3bAR",
  "key1": "2c8wUuUCCSKjED9N8xtu4VZKk5igvwgbWM6kpKFYWx7GUKtXoDuU8FYXjq3ZZfY74ubxbcYa7ryq7VzgDJtvswxo",
  "key2": "3eRZUoxJ6U844HfdXaRgfGbBu5rzkq8PFvNCUtJtqKQm7ZCMm3h6syWfi7LBwzWqLWqxnv668STbUB5UjbWkbfDG",
  "key3": "UVTvsxRLVUwrRn4MpdnChKtmZK6tqTNNH4CBvLKRPYJZpcVAWghvCd1X2ijgYpY3NtRsZTAF8nSq6uga5XGhTZj",
  "key4": "KkPfFq8Wtkg6GY4hZAqcLBX6N69etckPnYpzjd4BVgE8hqjhL6r7u8cgAkBLaEyoj41HmdaHHYCsz4axdRMAAoy",
  "key5": "4A1MjgoWfb78JjHZywPupMTK3LX3Sddc68dbsHqNFfkEgbAMiqrvPAzUTnSNkKRezdVpqKAKke11ZvDsk9V5Cavm",
  "key6": "2iT4hYdAnKxvXbT7oRNfSe83myR3BNnipgFwdT9FbGkeUQcvMPUMErqxdUhWCVzftvvnknVjSKcEvWDqHptL8Shw",
  "key7": "43rxSXX162Y1dM3cmsV91Uv9U9t8rM3n1Ni6KmcB9FQhQAz9rhFZyDSbK1aEQwPeVFmuszF21QG6sKv8VK6RsQvc",
  "key8": "4WeCYcX4WojJD4ssoa8xJC2y11kc3y1xnSGVkHqWzWJQAH6Z81NJwW33LA7Jm2x6Vtn33MDsNCNr8eTbo1KsZAF2",
  "key9": "K7S6ujkoQsFzS7yuTXc4hRMsdiG1M1t3ACvkKMpvpoWdGKpanmGdjUqqgxi4paZVwXuoEagH6RWU4foLUVjbaJw",
  "key10": "2dvAZ7nc4aJxVfC7aD63bYKttaSdJ9etCRnk9Fi3g87jgygWKTZofd928aJkeYvHJG1ieKLbJSSfiCmHZTVhkUve",
  "key11": "2XkPr6a7nxVPPZFYFwu2ex2vge6XirEAtXkVNy9ZiWiD6H7bZna3NMAiA9yW5rnR6PP397HY9hzkZ3wgZ6CwMWEV",
  "key12": "3KPXCMDhUYRDKwHxRjC5Kjpq3QtoaGtui7FZjYDA3h8EDoxsgUJKrFaLARuPtX2FVXR9jjjGeoGrTigQSWnsCEx9",
  "key13": "4WUZkvhHAS2pNvQP3v52pYP4rSTaL848b9Xae4Mwe7cdjwo3kiqrRhpqVagyLDqesBpSEDKzD5Eq3skayQe4LeeX",
  "key14": "4fris72BmKuc6jhMjJF4UfcJcQQXvDhx6fCVh42V1w7gC45SQfc3NyTSTpJcdCQptSJRx3wabc2HG3GzuS4bHYhe",
  "key15": "4ZYS7weMU4PHQRZYb8cKX6aQ7aLH4RkCzt9WTZQwCJZS3PkSQd4k4fGuwF7AUAfttsNsdwgk1SAYir7scm6Keg7o",
  "key16": "21U3uTVf6zDh9osKbSX23bCvPvQBZEp4cXzKqiWSyC1eE6XYLmn5zkLi8VzKmcrdSG9qDVDgnaA7F5JREZsoCnrY",
  "key17": "3u7dj47J2KUcSXPyysikrpBUtZ7GkwNLV1QuQV6odKURWN7H5JFRBSvFk3qLtP8Hp9EzC6GZ7Gf4CVStrDpJmH3x",
  "key18": "5f2uqT2ywPx6NDsDjQg7aE5Wk3UeaF8MXScwrejBvUVLDx7xBUR1yMfBSiCPMwpvsH6RbrdanyQUfQHxtCxwBsef",
  "key19": "E9XNGueSU7uZm6hPCnF6DBhRJGPvQU9hQVzoFiZRrzC2Rcbs8Y1ioc8pJg1emqFwCPFM5Km8Dk2o6Tna9HYv7zH",
  "key20": "5AuQKQTo6UZSHZjQD3wiJw1iMJQwyVuhdErhEaD7ZqRdfUgik795dhsYQKRtRj3c29ccsCr4TJR9MkLWk4wgkcTs",
  "key21": "2e88N1GGKjpjyiXS1kmjPpxtqsUfub7xRcqz9WiVqoxYDYsfeYPXPBP8TxYAJBX3uRbqheH744BfZEEkRa6w55uq",
  "key22": "2wWKo8ErH9Nku6Js7jvqiQy9qm8cCHvUfNb2LBy7qj2NdhmJGUWewUEnKpEwoZ5Qoh4CV3tw4SgnotzFwnP3Bq5V",
  "key23": "5MRAynqSKuMrBuohuCGPkef52epbwCrExpJhnTTLo9wmpu1ME12JjBb3g4Jxcm4v5vqwwFxeMzUASrVnys6nZ6Xx",
  "key24": "4PFVHR2quTWdtqakWiDUWxNxY3VQrB8uZNkZTSSFJZZRY29nAoJ1vNU6KY87PJJBNmukBx9MyvqM5kvYdPTtvSBj",
  "key25": "2REDdtgCWHbmz8UzqwB4zqUANb1LWKUZheujdHyt2c6KvFeWFhbJKUskgQ6K5F42u88QhAhzNpGcqfeDSQsCfkbF",
  "key26": "4LPqCZawDjnSbU2YosoFnDQwga3rv5dmnCkpTSjLts8j4StWJbNmaLTokDFDwH5qZhTBpe4RauyZs75b8xkqpfAn",
  "key27": "5jAzv7C3nHism5bP7sgPwzBvXtYujJp7w3Sz9dMZQfDQNGUFZApBFagjT2RZMZW2qdNEq8vCDLR91tDzxuzXtNGb",
  "key28": "43nuFsqeNy7aQuykoGWeA4WyqqVncxs65SrqSrFsJk9LECE833hZZwwgH3dz4C8y3T9fKqr9YQpnMD9T6Y9t12iU",
  "key29": "u74X1FfWSjgmHFiN6o6SuWMxCMt8zfZdYPgxSfW1oadkQ7pJN3VCyrGzibw9wejLphs4wdLRnFq52Sbx3rfZraG",
  "key30": "2p1hT2QjijYnmfSjmtkVexG7emGWYUiWh3m9Joztd8PGhiA5VQkfnCzsUMakgVGkAMFkmm6T8rHW1d9vkpsGSZxj"
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
