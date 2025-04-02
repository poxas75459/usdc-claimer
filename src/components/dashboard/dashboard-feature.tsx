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
    "27KjDKs5keo2wEyRY8WKNNcfa4reS5W4dMaSJBMsskkQXB8GGeLJTzECr82ubwdF5opcdc5rhWDCngNEjdW1ANPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FbvgPvQHEAowzvftVetsDuE7sxkhXP34bLVDCnt6hbWVs5H5dPhsgNYDv5TNB1F49PmdzqARGE4VogCMhZVcZEY",
  "key1": "2TEnhTq8Z2okWjXW2MSymfJBH3nGUXTGPNFwWqitfpQqq8wvmTaARtyjEzmwYzDX38n5uB9inA1fEefjX8tuBdE3",
  "key2": "4Kb4xfqSZQbtxwtia9Qdm9r1MXLFguA6E7RL9WQPi4rTLR5FVRaZ5ABZdubjkz3VGy8MQAdojjVD2eS3VJxWJjEQ",
  "key3": "5VgJ35fDeyJGeGwthf4S88Nfw4db95G4N8QdFqqzB949rJ54qd54rr75gR3JTt19qzuED2EjUjnp5zgHHMGpRzRT",
  "key4": "HbJGdiEcX5EaUNpJhKqK5DDXnJPGQeC1kdQzRLRKGUEy9rqnNDYUid3beoTzV8DL2jy3zaCZ6MZzSED6fyUV9Tv",
  "key5": "2nTezk4L7APCfvakzHYeQ5s3u53CrBPfjNwyWhwUSbfnBVR9jV46dzqB2aDxWvo4kFZ8eNtbdqoBYKpvAANh4ET8",
  "key6": "44Yzaa6RRxkRfFfbJM7wXRiLzyMmtixCZxP3Yfnuw3rFGBGfMte15CsJciJaJQJSpeKPQy5XDubogjQN3djUU3qr",
  "key7": "52svu23F1Luhg9YtTR38kyDhxBoGaPVzQWoQ9ZcGbsVZzUa4rHoi15DKRFhn5JLH9wkUKvac78XckGUFPUpQkYfZ",
  "key8": "2KMnGCYXVgrJAne4PCeafcdtpNYAm4s7WA55uNWidtdKf8LyhakCmYPbUDfEYg8i697N9zZ2s8AFVmKyJ47xrhTv",
  "key9": "CBQMEvednyWt2thZks1bzrsP8bnApeQEAhsAaWK3xnjdUEgtPsbYQx6oDmFzjWUmfiPoW8T8BBj258b2cQ7m2XH",
  "key10": "XiBMeodXg5dRPrR2By99b5XyZdQYP8v6DdAz8VhATQbjK5baNVn2dSxHXtrebtrnaGxrjYSnmbwQA93KbMUp218",
  "key11": "2w5VpCuR2wYSa6aZYpz2hQr8bMwgMLE69xo3jcwg9FmxY8QYVswxT48PtTpg5QADKtvkxVBrNL3LKQwRBhCuZPp4",
  "key12": "L5wJWYcoUy86x76mfiXYQfoyMmRJnLBSPnzKML5E1TzqJCKg13dt7U21ZQacopJxrpScwvbZPZ5iEJXnfuqBRp5",
  "key13": "2HNQL9mE6BwbEW6tZRSR4VxV7NwpLUjYmpM1Pz8H2tVWgXjev1qD2JDC7uvQsMbNTortpADXoqHvFXYc264SiGBr",
  "key14": "2QULbGuBX9NnXtKP8i1wdJYTRUoZHjVYhE2sRqiWgkNfCQz9HBEgNdo5ZovgJyW9Rp4CAb7JaVQWRhYpFkjuTEgo",
  "key15": "5TVkvg5jzFevj2RqZaY7YK18cEk3pmrsM2rHzX53uK6fkQXkb1GyCNFGTeKryNn9sE41W9fJSuZ4dxaD43qxixxk",
  "key16": "54vvJWaQxawSdfWkNwHtUJM9nVjF1F3ovkZVwKsJYpddaG2sMzjPsfMxag8XoPjHXkM1zQjNxFUS2fwikxV9jtwG",
  "key17": "5R1AKSMDzvj38jgLZUrjVgNBVpwUXKuu4rqYbina1xczv9G8YTeodG7kg4Hov2v3N6si3TGvF85pGDfkTtwhf3oZ",
  "key18": "5CAu9QvW6o45EVSnSkNUQnYoc8LYaQmPs24nG5rfr8SqjE5JiJPLaeJLtrAxRvWBuwe6UmoxNMH5NMVB34x4WFep",
  "key19": "5QC8V7ZQZnsVYN8TWzyrRgHww2FTxNwtMx7HQddbYEgfYAtaq9yPfndxjZja4qycmAFkiZezMWt2MaVH5GZHx2Dt",
  "key20": "59MnrXsmjjyQUUAi54XUdFebbVvipmVnABDCmaWK2xusEkdebn9Vf4dpzujz8LPZHz7p4LGPReYWGPiqzXca2zmq",
  "key21": "4X3zSv9qevNvtmoCDxkLQjYg2qGnbW1xrP81GNnVpw2pgjtwdLcod3sTDXYtwS6ckQEVdwTUtAnpxu4QyxwKWCjY",
  "key22": "4c2AywuAQPDuXrBBBr72Q5ydBzgDKN9Y2bWveZ71HrhEGSA7wKuFTxvsUQy5XfvvN7o7unGDCTDjE7BwMG3adpUx",
  "key23": "4p5q9yvXtJd8XKRuFrJ92Rg9HbdxbE34Kxwa7NGTnuBf4KsCFnoueshp8ZAY17tcU1NPeErnC5cnM2GKNLsq6XDi",
  "key24": "4RxWqjbbAJwA7vh7zV3JRxBuWuQrRAE62G5U66aKkEh7TjvwWyS87um4ekBXU7WGP6oWEpx2nFDyJWhxEUQAc4AC",
  "key25": "2BUJEtibjWRFLrqapCu9T9NSiLJ3KiJLsAFbPDQjvWreubLcPyrHbicqKiyWNBYP13D38k2DUoeoXHRxbmi1BfVh",
  "key26": "2ot5xYtbQxWazi2u5ajjoSdtGzxXhAJFidVrzF21wSqfBPYkndQaF1iK4LQEWGKGh8P7uWh5tyaRcHsioU9nYJYH",
  "key27": "3YkM7MyeMtWqgaJJx8sMzgjufD5J5qsRyUytWXChkieEGZ6ThJ6ho4PKB7nG8m2oiuJ6nrpK8xnen4JqSi62WkBD",
  "key28": "5UdJZC7D5oFyqqS87jAtjdz7V7CHwW7uYUmcxvJsTfJ2dwrat4jPd6zFYFgMjqPLZk4t7VTT64egJfWgjWptBuaD",
  "key29": "4bTTNfn6Af1dUSP46SYtFUuJCoGNjYgRYXBstcbDUKzkDW9zJps1tZnmcZJejpLK1eMMpum8DGCWpa95UhHBzMmc",
  "key30": "4awDxUVme8vfhord9hQ3KAMHWd1peg6UsNWaPvDvrSK6nSCiza44zVeABGHLRXtnRSdwVmLEspMP1mAnAs6FeAws",
  "key31": "KkzKHijkD2ts57P3JR7D5CsKDUK5vEJ9eK9W8yEm3pQbNSyBpfG81nttngcgKPTdeLjB5hrWJLSpHfqMgNpwQHT",
  "key32": "57dTXdtQvSuJoW2CLjP8zMoezMTXgWMHwLEecYBtZT9vq76vcx6NRzFU6vWToNWPZ9d1uoNWJaoeGVTwpXYpdt4Y",
  "key33": "4wrssJm1HxEPUyYcXM5XNYwhrWbznp6fsBPofh5dwtXXkzffHdCvUvD6aw6tsknjqNJ8b6WCjqoho8qay4Lpd67n",
  "key34": "4S3YjMNDcH7wSoAKFZ8TumBZEvq12yU5MJpY13vXoDax7VD8Ak9zmUHpTkdvkVJ1imCtF3RQJzQrbYH8xm1dmGSW",
  "key35": "2LtkH3hFgEQt9KS8qqZugqrcVj6URgosHnMmjufPgfM6RGiUor2gkWsSCcq6BszigGfqgGWhwrrDMWnjQgHz77uK",
  "key36": "4hUE2U8AKtbPFWsQwXwszuhjou4us1toQ8iHxWecHG9cLEwuKya5Qr5k4qbSBdAeWRYzedtKh8LdMEJhbWwFRfye",
  "key37": "5zSRqBq3GbqP5xNDypvWyfJXZe5gF8VE3PXuFinWJv8UsunnNEESTc5mRerm3aMNioN4MrkZPam8rQDbWDx1QxpL"
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
