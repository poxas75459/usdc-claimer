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
    "4v4AaZkotR7oncGACsCUN8EBPVbrY82MhKTVBpwZX5P7VqV7qhuPC35etTpnbj4CR7GyinrKcnWwohv6GLTDGB4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59AJqEkjsJWmTv6GKJaDBLXojNVESsTzdrn6cFbVJv7eZxcxaVU4aeiwG8V9Ff8HU6CR76sUWhPDTwTcco5PT1e4",
  "key1": "6fhMr7PerbcGjy9BKEZd4bXnXnqG2MDYWYWj6hwdh3qqkA6fYsCngia8ePv5ZiW6iASL1QfQr41T7Y4oNxbQbrA",
  "key2": "5zMBws7LhHiHmc5vv1H9Ce8iFKvCqXZnkDfRPvNuXmHbRvTbwBBBuGkzEXsFiR7LbqePFKUX8kJ4rKHmQkF4hXT",
  "key3": "34EAL26UNdAJUcdBWwYGvYxtVYuJDh6MLW2Uc4bdXt5tXizyQ6CKrFLDE978MB14XTEbw2xzcZBQij35VtRhKeNq",
  "key4": "37i96rhyguHLph4UqGe3xPB1n1cQUb6zSurvba52Pw4vnsKgUSgZFCUdNUBDWjsQtHe6oVJGE82ayG6tNB2y1NLy",
  "key5": "JeWgC6KcY5b4kdjT6qtei6konSD4s8JggTvHRwHsNP56umeDihofrzDMACdaefC4JQETnvfYehFsE2vUdMJVUmK",
  "key6": "5Lyhotez4dBAE153DH3KWVpP5YQiNamPRwKEZkkKLohY1BssfN8wUQDVem2EUmnyLkrzLZ93a216gZJ8TbfgmqP6",
  "key7": "95fgWUuiyTuPzpxf5kiJNAnUj2GFUv1C9BdnxHsRkzKLdv3jknNxKEA8HagTUNPnyh42fWEAPVcDwmU4v95CbKr",
  "key8": "3dwAs5NrLosbEaUABXtrjctZT37egXKpEJK995zyaNd7R1yUBj9AKbLUwkrQxQigLMvpf2iRwPUypuakhxG92MVB",
  "key9": "2GtCqm1PLFcsL4v8gZgtiYNP9swJ8jZVC5NxX89zGBxZfjCqwd86gsHLvH3PJYbs2rKVCWq78NsoUu3AmwVoXyf3",
  "key10": "oABwuAvRquFo3jz4TEad69XXzLPytBftd2iJSNopZNtH2bmeX52AH84SDPKhvs9JG3K1ZNMh9deFTFY4iRAVfSL",
  "key11": "3bvqyitNgToPDbCee2sHJGkfxE3KWeKzs3V3zNcsN2hmJHw4qvnkGiMCwZrXjP4cP2uqY3zPsm1byB2hD2SWtEfD",
  "key12": "2EbX3CHdUuT19xarQNuHsX3kNbqrRTYXmrdYhLnrS6sVbpbpYQS9mvTncBLR8dQWWawFiwo8L8Wg5EgbQLX8KBXJ",
  "key13": "32bgo48jNmJX9YFsAfyTJHbDT7tG6gWxxUdAULq4yc9KVfgbwXT2GfEJzArYTgwh6mTZaNjwUGMsjxJA6GRSknsD",
  "key14": "KuhHtSAQKJpjS9sDkZ9mUN98bN3aBnqfqEmXDsa5VVZbRPKJoqP9FoYuL4CmBRBzxRBaj874UfQ5hNMm5zqZ3te",
  "key15": "hibUyBfSHiXq2DP8nUjXP5DUwrQDh6EJrdweNNu774xBCKMAXWJn3uLehueRDaSz8R5d3xo9tGMjor1EwFKPsjw",
  "key16": "2oWf2jut3guTTZF7YzQJY89Q7aQBxC5Na9PpLxWoZ8N23r1A9XbKZVCuYw6DQThrt1AV11uhnz3ne85mVnaWMC96",
  "key17": "5hYUmdRdYyuyKyoe7UctEwhW6Up595y9CF6BatDFKF9QNXvN33BkpG1tQP9icXJuRzY2pVCKC9pXDjcmUfNAUKJQ",
  "key18": "3amgHJvrfSCLUePTZpwt9dpj1JeJYXY1KLzgt8SUw93FdSK4dHEbthUhEhc8XThRgftg2RBvGL8iizk7h6173RzU",
  "key19": "2TZxWU3TBq6fTBV5bYM2VgVTgFrayrVSxbVC5NerEVhUc6Qs7gosyaUS4zz9uyXuKbXoEbdFFXDUGR3HdxoeJ2nv",
  "key20": "3sRxA7dwkmB2TwipiYXzstsVtH1SuAaarGSGrGjQYvGy6WjoVXk78uPdCAJM2LNULFBadwXumckr5fz5JHqy2osb",
  "key21": "YDv1jazksHzCQvED9o9UK2NVy4LJxX9RC3NvsuJsRG3M371ZG4goGWRjMXKej8Fd7pcvA2PbWmyrHGHjxDFcYTh",
  "key22": "26mfvUuvEaQU4JCgi5d3ZFdSBfWzvGCNum1jMXTmRUhE8XfmsNhkjUXaArwA4iDAJ4axp67P5Vn1imn14zkCu5NZ",
  "key23": "5zAheGCeZk4NKgXQkeXLu9gAvJxqkmEBEryUj93j5649rRiTrLQJdKG85qoQ6jLffx8jQF6Xd9adcPkNaum8tM9b",
  "key24": "3ygaK5QXBsZaS3DpRU4iMQgwmLPyPGmeLaCPuA7m8FiQcbR5igBd3kNervx7YmwtVitU9igmxL8H362NJBzHKZbE",
  "key25": "YxStwdCmLhcnJ7aaE8GBXj1Pi2nMyzvGPeSMz7DFZ47HnUGq21CVc9P8YXCoS3Ky7gbBxz5JpJy7kEMHjxtKhjM",
  "key26": "2SXbYkHa2Xx8uNmmgmPQASDprUXZDmLRMFYi3tNVzMBugzoybCFtcNrS8dE4NS9D8dysRCiiLV13Fm9rJX2rdtDm",
  "key27": "gNbcRM9yFK9pN5nkkvUGP38BBpmD4bvWzZhSekYwxk7Dh8NHXWHL5qm4mdJHyuT4iB9MfwuTBBVEgWxXjugLkVB",
  "key28": "4FST81FmuBKs6kSih6ubUneLb6GygTx5dyDiK7E7StPCHD7VERSMNZVVLWZk1tDV9dYMvp2bwWYzgazE12EzvmmE",
  "key29": "4QamYtEK1hfhsxa5KdP6hrdh2uoVp5xQ6fQJkmfQCsEsPacmkcDAFNPGFLB3GvVhbK8583aXCsixzTHdERUiFnYz",
  "key30": "3EhgYYJTa3BP3RqPhEc3p8kAecsVS5fw8SB8jg7R1AncukpZkYWnLRJDzDbGvic7jVPdhT87xZU2WYeUpRHikgat",
  "key31": "38PxKJ76NiJNZLcFbDNgx7GMmSW6W3Edcf4QKBaqeBDXPQsTFNPMLydNepoR743oWwQgKA47v5Fb6rk5otFkEHxh",
  "key32": "42YGj9y8R4oAojrBNpCye7Ujivm4a1xCHZSdMfsDyqWAPpReQ5iBAiQhdcNj7LVwEi4xViNhZeekudGee4rQqEj8",
  "key33": "2p3axrVG5KXpHqZcWjLXrrgN1gC1TWWH3xuAhRXKkBW32vQ9ws1uadtX4ZmoQGeMdPj93d9HoDZREdXGnxYhffUM"
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
