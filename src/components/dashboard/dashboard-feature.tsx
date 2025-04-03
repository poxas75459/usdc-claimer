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
    "3YkUyyhTs1xMncssoSNreUGqgBTZWqyEmPaxzu13Dtz9BFYmnH2yQ38QuRaiitSJpFAZMD5UF31HNgABKXC5PGrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xdCSjkquSAho66t16iJMSG5gHFHr7eMD2z5SJMbNXa8RMvgJ6YvGFLUQAT23r8v65KCtwbWLqCVDW3KPAKny6fo",
  "key1": "4eeKbPCgDQqGh2DCnc1q45Hq6XJrwKE22wcq6hQ7qT2PRunDCjnCmwMKBBQw8NLFdCqb7pAWYyEqQG6qZVRHoH7s",
  "key2": "5GEwmTWM4avxHamA4nYUNUERERuz83hUwf6BF9KzgRBS8nNjGyHMuQySZ2PVg7bCxVfDvofNDitsymsN83JCGi3e",
  "key3": "5Aheeeark7rzbKx3PgzHzXefTt4bn48wYvhWwxMAbjrkTvoZMoYUcCFBR4huYnnAJohupZRPRptCmyGNQhqs79gM",
  "key4": "3LVYavFYpZqk2YYpRkcm86EfrTKgMsFBBAo7TmCasPMgNQk5vbxXHntd2c2pfW6XrM74hGpn2szxJSE4Rm23duHf",
  "key5": "2mGYGWFxbkL8Fi12ojdy5sPaVKnY4oKwmXPo9Crk1JdSD3Qq5Fczs6UFYGsgvhZoykAeA4zwN6k4wnbt5vT2jx3s",
  "key6": "21qUC447frQXdXNkjC6k9yspuhk5N9uYAMUh3tprzmLpazHNgnHdViigTtYwaY1HkkPeXxHo2DnQjv88KWUjWAzm",
  "key7": "3FscTTnNpwx7XXyXxi3tFxqjTi7cisUFKkq6EySBC96n6AfDenTPkyn5UpjAhVur5nsAgBwYqUB5SFJpkE3z5WNp",
  "key8": "3sLcZKQTAsGj24zepNDmRNiip2dGsWg2GT27aQif8LJ2P6USUwJYC94y1PuAdh2TU6wtNnG5ubbGXUvbuwjygEJd",
  "key9": "5qrqGcjLfTAiCTc6EemU4zHoz48AfxEnfzL5yeqcgU65rYw4kM1ceqsbqUXq2ZERdkY6xNW2ndnb8B88dLFSKJ6H",
  "key10": "2kGbPF74eaWdyfG7BfYiAVJosiKyTuaKiYiQBTuCv4HBqXkkD5gxdjxRQbdq4ggEgDch9Mh4kKFgsxqFKNN8XJsu",
  "key11": "sQzH2NYczu7XgB8QbNvjhDacFJNRLkHzXymhPRz5vShMy1R9ejv9fhRoSwS2pq3iZFyf8FX1EZRCpQ4kRUP3nii",
  "key12": "5RtdtD3uCj45nDYP1TxMkcVhG9K2cUB3DJmNUipNazuQdPAbP12btRMs24DcaeEaB893YiAa4j4X4qTCJwQqdihA",
  "key13": "2eF2aoFvrRucsdByjankd22ts6Sa6SbWab9WpheExcDuKPMdDRRwsF69izySVDLz5YyBcQPVu96MueitnQnDVa8e",
  "key14": "4yBF3c5QwPupaUvvNLnRA3kmGXhjLWBNqQpX99Y7MgdfTCDJGLzR6WS117Ad7JiWgKm3zX1w2p7kSWJh9vyQURMU",
  "key15": "5eMoyPV7EZJkamR23t1P2VNYxe4dEnDU4CS61pgV7ZkDZkdVEqGAR8gnkDKtEreJhaZYoVzyRHPucJjwoJJe255R",
  "key16": "4JcgPNZtWK62VVNvvA7FKE2iPq4J85rGbPZKX1YodXm6ZbXRuYjDDqqdPvbJ3atJEeRQjLrZvNQDqcML5nmDnYGT",
  "key17": "5Sm7PypG9z4nt1HVHTZQ9Wvvhhg5peHwCHNpybXNFXaQYRJY7GAzqQCwnqkpc3UqufLyhh2HG9kFNPDAAZLkWN6X",
  "key18": "bgifxEkootPEniZ7oNJWm4i41UhXoVZLjd5NBhttnKk3kKRBCnBY8A1nCH7TKBcs3d9afhsjCVczrYukjbbJMUS",
  "key19": "5Rk1snKUamh3bNvAzwUhNBV2md9S8bxGRVzmV66PhoDsoNTTPbPW3oaMhu17r9vLDfePLRKcVcYzBeF8d45ZVYPw",
  "key20": "5CLkcAfeP9GyWy64or7KKTNnpLTKQd9kZEUkxhGzqTCSxJcqUeNxjvhx1DzUJAw7HSveRnpmAJf7q3bUGQpsQXQb",
  "key21": "526cdqsbyfZ44BwA8SdBkQb97JWtkiDsqCR8LdYYX2ERFZ64NuZMBooehWd9HMkAXfGR2tm87PU8Uih8P9GU3F6R",
  "key22": "4cDgikd6BoQZUtUftppqs8vEcb1ykkZ1AsCT4PojquuzgK1z2NqepchgrSNJaWvbTcDUyAb43vk3bgwQ1tWnm56M",
  "key23": "2dWbACWSTrUXhuZAgqc27N6ECegnPKV8XHujqLpzaXvHiq4tyFzegVdh8xRtNGzEAMrXu3LYt1WPVPKAjETHatNd",
  "key24": "4J8NWLZMKc8EJhwu3wKde3hZqdRo9Mb6Vem9Z9Pt34cM9MB6y3kxa5bcupPpZ7WwM8wUsXXdPyrLB7LmazMRFzkN",
  "key25": "49VER3M7JYbMUiqrF1WNK8fVqmf7hitNhDAALV7pKevSbbPj1Eeh8x3basv3R3tNUvCuNnmGvMLdsjP456ddvs5k",
  "key26": "3Jk8dHTCZ7U9VsxhyXtRyYNqarUfA84raSMEi885FKU7oY939CWeQwsCXNvkDv1rizMiVXprvec23d5bRcXUeTNp",
  "key27": "5A3TzwB1cxpaajXsiEtAoFzLtHEk3BxG6V6wVbs2G3kHHhDiUTko63gPZ2Vxjh1LhftHMbNWnnkqg5JvDAP3vJh",
  "key28": "52y3ajWRr1DTFJygqBuVRWGoS8meyeSNv9iJSNYoMAktSU7XeanxtjzhaFGKRHA7KDtGY14JYZ9t38BQUwd2U2Xk",
  "key29": "5EVMpndzbv9WrrX3zHPhc1zXNhkuJrUcq6gEwXcHMvNgN8VsyQNyJnhkm7Hu4D7BwJ23nR1cUN8PBnpc9twT3E4v",
  "key30": "5kACCudy2dhu1pPtFbsxmCmNRS2hVghe1RT3kfyjCBpB7ddcyee7nY98BA9etGe6HqwfJ5rYKfr7szKtC8tHym3J",
  "key31": "4vXRMYssogxPYsQCSEb71qb66un6dj69o9jt33CEdsggzxRdnCxq2ccn5Tc9nyMQHh4jgPEF4RY8s2pnW83w4gu8",
  "key32": "5TU2p8goEigsEfFXkWDJVMq2HEZqyAVVYwGeEvaQHxBN18uKYDkSMZTWAuX3FvhEmEZJ7Ld81ADAN1WgH4Z1aR9t",
  "key33": "3SpYhVNUmfmz1Dd1DR8iLyhgV7XbGPCQfRQ2bA6CMqyJdNP1mVKCyeP1AKcPSsZdr39E1dCtDwiSPaN8gWZqKxzU",
  "key34": "5oayrQLi7LbfCj7MX3RdX6SjYKfWLHAi2ifNsnBvGGRsiQ48XJNJYh5Vz8deZeQpQH6VCG3xb2KeDfBT5jBTwTGn",
  "key35": "28kagicdsjDAargvQsQ1ZFgGPrToSzYwEx4oB6fSRJGAvf3Th8iH5jp7VYwzWZAnqSi7uQRifPoZKkVeP9fn5Ept",
  "key36": "2D1hSbWLjVHHuHzUpaapBnrdu7YLxYdkpP1PZrwEgGxivQWMLaNkRW9AkvrDGeqHmWakEt5pRHR2iKn72QA9EcLw",
  "key37": "33vDV4Bqgp2hAMVpCV2c2hR1enZdQJPsC4EdMnxg1mMQXmU3uMEPcysLv7Y2NWjVqQW5c7oUyEf3RPdp92oFbYwv",
  "key38": "2TtPiESgvrtytPKj1ud4symhQEm1MHASuCmsntJm2EcYt1ymrCpH8t5eXN4C3bALCH22xA8CB9AnkVNMvaMKFJbb",
  "key39": "3JRWZKS8cm7XzywNH1bJStQoL5sDkSSsbhVk9VUqFvLrJtTEQPyinfFVFLdYKN2UaMSj94g9HQLeaZYo8okDWYZm",
  "key40": "2eRZeqhzWapqMLtLTbRo51TJ4mvzbw6TN2xbCR7zp2JzDEbvyRFJ7YhogrBFqmASuHMJcT7sZCicFPg8JerUTkwj"
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
