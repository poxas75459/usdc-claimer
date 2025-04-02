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
    "2poLCtd8p4HugiuRdmGSXMyig9WCy3Hpmo9awLVbeAvK5zwtufZHhW8tNZt6v8TyDVB2ooWeZB6zWbmxht5PDvXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TobpwrHHmxAcDcWdUhy5gMLUPXMX7AGMYHPyJicuhmBFhfCMyKT1RPH23ssjim3aF4MQGtoAod5t3Cgp6TafajG",
  "key1": "2vaQA29NjWrMcVjHCgMt8RZioyRLUNfXN5nxsxSbZHKPgFcBV1mR62aSEpFNkNQ7NZMRQh5UAKHSyRob2NvmG86B",
  "key2": "2e9tzxZtSrUky4Ufv9bSmhbUF9Ctt5YqDBhp9QDBLymjXCwAD8DHLn3jhfw368ANhnCTFzwxTGs77BpzoJuxcFA2",
  "key3": "rWBqaD1QhpRK1wUgQtWLGNqbncPSQ5DYQbU3oFiEwfy6HGb6fhtDMEZe4Ka6mu7Ged15HFaeoeWV8p638ey5Rtt",
  "key4": "5hLLgPG67C1p8cQT5EmTGKws2u3CS6cM66tfmQXD9eN2V73CL7LBnda6TzCy2GE5ztduAUXYCdMCwptaTPciLbj4",
  "key5": "3LZzt5GPCQT4QDeYVghYuUMhMx1WB1gzHfQGDK8FKJYdWKZeqEirknLqg8uGRGvLCoLR1q7NBQMBXcYtTNZbYT8i",
  "key6": "4BGB7S3HjmbjBesUYaNubrFKRPa1UeThBm4fEbipzLRqDhwKFYqrJGk2PkVeCBF3Y6CggFqpM3TeSpnXByZW54EC",
  "key7": "5WGw9ViUtu3PYh3TYxzgxWPfytTBw1uStLEW5PmJhMaXNFtqiqdnAsUkEvmoqva5gVK8fnzBvNTsp7Pg5uXL9f7P",
  "key8": "5dz4AfV4No59bAuubeZReiZYWG5xJbUM4Bh5JsWPdNUUJMLsifTAas7KevzmMGRLMVng1rFF92TJoShjN9K2XpZF",
  "key9": "4GNm3TbZkDUfUkJVBUYB2pwMfP5vcFz85NwvhWCFKe73fXaT1Pvk6T4oxgDqMJiU262DeDqjnzpEYLkmuLQn9WYQ",
  "key10": "358hrUAaVDJKT8XCGU5BHoma4tGo9fV7Rt6CzwyhWHLNiCmZ36AXg7J8FmLmAFHUdudqTjqNsuuQtweoDgwG7mkQ",
  "key11": "4FHD2K1yJJMtC9GML5PzkGZSnf9xv8E7RteDz96oTec27yqWnyauZH7m1CrK6kKaC1v2drxC7T1z5HUcRtpc6H7M",
  "key12": "4mAoLhs2JBdeEyQY7J7VqJwTH68q5koyu6XgL45A9efrwP1Y1wQ8rkAhQo1vNC5eFhizBMbPNBWvvcCbxXqCnXUL",
  "key13": "35qbqkqNvbWP9T29b3yN6THA2VSipzfEp1ErZKVgUz9CcpW44tSTwKjn5uPhfmvsaeAcYR569mCtKB8TUFETVy2C",
  "key14": "2VHdYdLxLKMHHSCLieVMaZfbX93KT1z4ACF4551gf1MLgbHEzHnxqbyn8J5mocyvWgbYrBcUdEABJceP6g3vcBqz",
  "key15": "2J6mGMT6NqEvHU8QoiD4NHdYxLf1hd4Ne1ojzwRzGhKnKfY85V2A82kHkDauUhyRFi8jmxxk4Nrm7qkT3UoufNaE",
  "key16": "2j9gw6NCzWB2BXw6Bt31RbfTYUFg7YJH5XKFC3zPg27ohbLUWV2VCne2CbgnVCYm66m93qCz4FRoPB2Azac9sXQL",
  "key17": "4sHVCRG6FE8K7hLjsvqTFUyyj6zFCwsyncnFo1Hp6g1nYQ39Sud6UZTWaMY9vSPyS3BqMZkHDQYzeEv4Jog94iDL",
  "key18": "3UcTkXUaN72yYbpFevuUiU5iEVeXRxvT5f5n2VtsE6RsfWmNtAU3VHkMwXTmefBMQJcPpuchv2gTEPz6otQ2PwHY",
  "key19": "44etMSXXEsjwvqSZBTwz5YreVDBj8SPBwT9TtdBcDzZXMQZYEbDxfgKURLVE38gcSvzxDabZtxhytazsKdVwQM95",
  "key20": "5y5qdt7Dt8QHZhtCLVEJpva7M9GqjZB9aPu7jMvWNSsgdF93qMZQ4S9t6TvWNepGfjDjZrpqxCU8puSpqtAcJeF3",
  "key21": "2pCRdvdKcfmLuiC616TppmBQZMV7tAgt9bKyVpv8oYV5GpFXFiiwDNEm38g8Gtrp25nziD7D9hRfd5Sbk5apggmq",
  "key22": "5d3vMYGpum6heJqZVAsBHs5ULSuo5rwiz2xCzFRzvudSGd9ME2fxwNFomVHb8aQQc2Ac79CyXWg3eogCbvrNWzRJ",
  "key23": "2Yxs2xa1YZCaTgmQqdL2vNgt7UxKAM7p4remo4zbEpgEEUNNbeGNcDErvTr4f9LNNHdmLaxJoVAFksnqLC1Lq49G",
  "key24": "vYGjAju9DtHMKs8awNn3X1T2xTgcFhX7r54bJL4sKvg51MBRjP3XWMK5HTGN2Xm5m5ieF2LfNAzk5ACq9iGUgmY",
  "key25": "5Hw5cw37zY14YaHe2VDsjE166jye4m8cPqvyPxDycCaxcAQ6W8gtP9aF6rYY5cZuNg3cpm1paApPJ2nFsmRqirfZ",
  "key26": "2SvQEZnC1c9XZ5CGyPLUautfERbGPZsepgJzbhXhg9m3MouLG3bTCz1SGkPPAdWWjsHk7i7jBpJXDHYhzEbsTGeb",
  "key27": "GuLjr2oormdzHNYSG7P7pxiiFYqf6ZYSLJYDoukZXQ2bycLDMHJ1GSrhE4xJBPeVgvn3LevRheHCYFAKd9K2XGY",
  "key28": "3pCzswwzkicPWRY5zU7rZ6ftEiaHYmxonmLpdEHgTFVsiGawCUCERqPYJMs4GAGKisd6s3wAH7Lo77PRPiiX6nSE",
  "key29": "2Pne9Wr9EsdEixfaAA5h5GaFHzbEGkyCW7mXhJgbYpsnwzmbhkV3o6NMcxTn4U9bFhcF7xukU97UGNhYRxK8GLXD",
  "key30": "4c2zShJJGpPUfVAU8QyL3qhE9LU7AjNJWcMv1zodneJFJxtYRc9223qwRFVNrvkd6MsDCAkgLGaUiY8Bm1B1AXnW",
  "key31": "5Uf5QU4RizLVuXk8uAf9aCkqsGWakCVEpJu7TYarFkTH9nsyLBzkqLBqERT8e7B3KRAaYLe21DLwP42qfY6PUtwC",
  "key32": "3s9vXdYNvA3mVStG7Jo5GJmJ83Q5QkHZGkzZMFNuJyvP4EVU2i7XqT1GdhXUxcxNeADEYDMU1fwaYbt8sARdo4Mt",
  "key33": "2H6bcNx1PMqBAE9cEi5SBmY5zwXk6rJjpBjs5jy2YFLJpY747dEqfoFZcVFinvRisjGehkuvfMU4ZhSqX3ahrhLk",
  "key34": "3RqXe7jDopvt3AjrQhNbmU2cyzrGk9VNebDBXridrt8ioEdB2cybv8Gw9jsPnB6iaSeDyrrHRTdoSn9H7YfkaKHP",
  "key35": "2B9qwZUqFcnBm3iprtQmsHHMtp34Em6X6tnooMuUczaZVbgbcvZ7XGWwnWxQ4xHff5fQWG2zobpnGU9uD9YAtE74"
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
