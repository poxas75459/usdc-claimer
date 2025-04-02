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
    "3Mq2sFhzwsMTM9vNarjkP9RnLJtefbHVy1QjxdJ7W92A5mFgHagrbe9ndtP2DUxVmqwKgmGYzVZRrjYFvLoQTMdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MRtaXqh6jjHV8rAr7YwqFevDogA1x9nje1pdtX4EiEFqcXaEXHZzr5fXkNbY8oF5e1LWvif9N8SMwn5cwEbUMKq",
  "key1": "4vQyiG9JeByz1JJfabVS6MPQW3nWhCWS46HaaprxU5Ycc75pVmUVSQPqBqRKBib7fmZPRhgyFrzQSCwWYrS73oWq",
  "key2": "7LgN4TCK4vKu2cGds45c9UyKjSswPdcbBQX2VWYYH5kPEycoVVZHC6qu5HcmBNAxmpUc7u6BFSajMoeJ5AwGpGs",
  "key3": "5rsfxSjardn93biz3sVYa1L798thrfUfP8j5Ly6qwrm9SoRTamJKsd78qKkiubGMMAtFaLxw7kbKkoNyZZbfQWc2",
  "key4": "5g6TikUGhw4BssQgdi14aEwzYnATtnUxFUwUPru9CFP4EPgD6Tht3mt9q7ehsscqAUxN54mUQaB5vDMS5gWwTPbL",
  "key5": "5ggbvC9gsVpPQaF2nWoorHz8BJ6SygTmqPBPGqzM4m6Sk7tBBToEtHyJwduT5K88pFhjmvgJpw37zU997exBAk4F",
  "key6": "4X5q7rP8V2wdWpkP47QZEXamMLC9X5rn1b1pPBLCimeHekZyhQJa6ctdcnnhaHYcmNDhG3quMc6EFaYmChZABupT",
  "key7": "41jbKZXooZ7GKFAWTt4Gsu3jdBQhq8DUAuLuLSyXM1TvpgKN5PGwiFT3yS5SG5LHNpsjrSYCERNUCUrrQSMtQp5X",
  "key8": "63MzZK79km8k21urSTW673kNwBE3U9ERmywM2UzTcRt7c62wdRSJwsbcqQUmgPKj1K6HTwk7nbUnU2KcoYAR6w1R",
  "key9": "3N5Tuf39kzUhDqGa248EaZFJpxNXf8NnB3BFdWn6qFbcW64DZcqK5RJ2TQ6CMat3Fy5PBMGf5TUM7e8TcyNk4XjU",
  "key10": "48RedjqZ6yY1esLKmXKytSzzEKfs6L8bY4nwhKWR2ndg6SNdSezkhEReZBzhfUCYwFFGoNqyghbZnEJi3rYrbExN",
  "key11": "B9AbYk7uhJbp2gNTkSDAnRsvNnSFVHNXvvhqG1biDzbty6u4qRA8yHNRuDM4pCqdJvEQr6bmdJn29ECbEP5NCnZ",
  "key12": "2QqZJCGmmGTFPKaorS3jUKyfALh5vX22tpZtoqFkwJW9EUDhzLZJbnzhkfHdaJwAEYFHK7HPQa54tj7WedifHdGJ",
  "key13": "642fGhaR4Q9DMdB1FBpAqeNgipnb9ajzGZAWfF2UxeTSFV3TkfMCk9yJv7zAYELwmcT2nva2txJCbKBafTzn1nDi",
  "key14": "5wD3UdZyxiQG6M9vcdf4Jh8Wn5kTW72DNiWHfWXVP8Z4St1YVyaH538i5V4rbGbuPYdkY91gZwKDvEgD2WtDUjR3",
  "key15": "1cFRvb7PRCU5bkyrc4QfWuUxXkfp42sYK9iQof4am8eH5uTSrDfAXCHEGMeU5NrNsayppXBwsHn4ceUoL5A1yjZ",
  "key16": "3F8vavE6GcAdjJii3y2cVH1rjNxfV5TjGszSts1LXKhTKe2HRzgRE1LGGp6BnwXjU11FQkgo6xsL3cVauca7C15Y",
  "key17": "5zrhKwD89LTMKXiecJiRuzs7oxenmcstgDUMUG5iTB5jZ7TsCWAHJZyuNtnAnxtMeBz6SeEUMvztyeez71zTq7sV",
  "key18": "2TB3nEhKPHPom2HvoW9tbWmhiHbayaaKVsVgKcMnZ8VgFGcMc47vrGjsaZL8orktdMz4QCej9N95dC6wBQT2rxcf",
  "key19": "es3R2F6eRXgPyumGkQfKBU7grZQ2yGPz3rxMfwMosN4EyfPS9zfxYELY4kTfFGSgvnzQDaMXEsFoYihe7L7T8jb",
  "key20": "4pEgHCrdLBy1ACNFEMMGFuJ7w6mmqWMP2AroqcAvUoxNecbrrHetMwkRcckQkTcvS2tyRNNuYrrNNRZahR2VVioA",
  "key21": "5NNco9mF8NHR18AvYBSAk4M2FkYRQo9Q7LmaRJdbaAh6wz63kSqpufHbEHzGXaBAwcn5rwDXJMUDBoUZNX2Cfs8o",
  "key22": "4nuas4hcT1xYFCgFCw1Ft5v3GfpXr1yrHxzbdBtP4hbTByhXUvnxmU5mbgreHc152a36Anre5bicD6MZ9T2kZxWg",
  "key23": "B5iztJm5HE8sqUW4vS8J4QW8ZRmhZVS5knd4NNSf91dBmy8iriutUnCzPPF1GDs9K2sXUGPxYpJXPbWe3B8h8Jq",
  "key24": "Udpy3852RmV3s28hvSRGuEryY6RFt6aj1Jcf7UraGAar7sDWm5ifmrk1paLVjeufwbjLhwBmVGFp2Nh6e4m2Xvh",
  "key25": "3NnGxHFP1wUUMcgQkebZiyisgUVuFpXp7vt5A3r4iTU8ruxpt4YjZRpcJLpvgbHMoHCCVCEw2niS9K45ztCazjcp",
  "key26": "3xWGnZSAi1X73ZX6bpP89jJP1yMU1SAjAu8EJcRhPp8RSPNZEhP6ePf5BWwQG5d82YvMsaUDEcMRRwCjCskXLe4E",
  "key27": "2gmsmMQQmyHhphthBgrBaJdxp3GcizSxR6YnU2p7CdKyTPfC2unwwcMiRgataij7yd34sapUz5zCmv6j9oKnpzMD",
  "key28": "3s4MtBQa3JE5E9SYPNDnMSRc7BWA4f2YUarNreevf8g1UZf86ouNZ6A93VJrwigzwXSH2CChRmuwdorBWy61yVxh",
  "key29": "3dQTui91XJ7ZGXYWrcrSovWuwrm4AN8R2cShcbFw6nEDHGgWtfSdiEAhUp1hxVP8xBQnxGJaSdavPymtr7TXe1KM",
  "key30": "2TwDsWtZX4bECvK8VPbeouKjkznYBseknd5wa3PzAWo7ftmUzSPvBFUqxWWDYKymAZLie5mAMH3YV1D6eXjS5eDs",
  "key31": "HKcSUFsPJTvMVV82xNwtwkcQM4G6mBx3bZmZiqVMJeqGLkeCscNLC6FVKDtRZfsCVKpU4tpveDMgTunRHVj34W9"
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
