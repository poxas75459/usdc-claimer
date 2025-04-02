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
    "qmoYhYdjAHM7dzr2h8zwV1DMHozdyHapCyeznkHYSkEPvLTiGEyhsp7cXADH5Go6vnTNzMEn5V2x6mv1aeuf83G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42KvGZBJ2oWzZba4fvAPFeHJvT3CPkyY674WUuHvDpSr1YpAyEhuWMsRi9B2tjC84N7q5RhyFvP3UTAPCJfaBBEb",
  "key1": "fZNh5hHSHV33iXTnAFUupNUkVeGDaDYxNFLniPYv8GRZVuKGbUxjKdY2kM1zZSstbAd18b3HuZ13o7Zih7upcAK",
  "key2": "4RZ771UdnfywHkMQYsU6f84dM6qmA8WQ3jtcFWg164Ydcp7UNVQx15xnxAn88Sq6yGn6TTLKrU8D9xDfSJcKgsGH",
  "key3": "5rqsjsHPx84pWMef5PS5xjkDXBeLraEzFKdNstVk3Nh3DiXNP8ytzzUJERjYFP4rTeJxp7ZFJdGQDoFnH43hd9HA",
  "key4": "ACsXYU87APfE2iwFMX7Tqr87trWfrghqSPKtw5SDtz2y1n5fhY1weok4C3KdkmUbEFcq3hrWAgMGZzRT6hxpMxS",
  "key5": "36UHTbjDbUoZvbe1qcqFqVTF5bkT62AewycjSCm13mtygcSZTVtT437Y2svwg6wLkjTmSG3sT43jsWHGTfGY8rxa",
  "key6": "3iXvbL8S3qLZrAhm1gZ8uNk7guor4dV1vkmxGdzLm4zT7MzWDktZbgNnRhF4FD7o8GHXJQh98nKii5Bqa3rqLg7P",
  "key7": "5cABK3htqkK73QwBiqUpfFJrfjWnkG7Tzpw4kME9URGrb1BFJ7BNw4hkwK8wX7jbi2ToViRSQyohwXeFziMUpY8E",
  "key8": "2CL1Hy5MWgxFwfyLjf3ySkxAqvNbhR7Qnhp6EvEhW5haWy6E4voV8rxJJ7zMbd8rXbGRLrCsyRTNsTAAsAkvs8A2",
  "key9": "3BTLmNYUJ4xzApuivdYf6HHAGcdY2Why68mnd1H71vXURMrrgftcmKHwEuTEn5S3g3JDkiPWFeMF4DYcSnDWxJjw",
  "key10": "4SzE9NaWqs3aoipCJYx6MSHrhX3kRx32Yfeh4x1Vg3mGQmxWdnKX91CVkLewfXSu6gBnJyFUicD4XT9Xi8s98LiT",
  "key11": "5ukVMd4ZtsSCT3tE4Bc4Yiqg9ZnbfqqczHgoJymJPX5sG72kPWYz4jhfExbHCokLyGeYnBN62iX5jVMsosRL2qLq",
  "key12": "3Xp3gwbsM8VXmbb81nwTb4XMfqz5MJ3LqKkVmvqNJGVdAV8vnGzy1v45NY1aLv6kqB9r5ShC736TMqK23XDQDDw8",
  "key13": "3K9XjFUz6yyjACGyhMRGJmbuuic1qtKUvsucsSr8ubR2kdB5UE8Dd9ihJsUxwZvzRjGTxPj3LXiKN9KHGi4jRvbZ",
  "key14": "4zNypf7pAgUnvAvtkZCisfQGeEe3GDfzFQawFEH15GKQKtywV5QoPz1YeRCgwgu38vndz7A9Y1He8CinePQk3382",
  "key15": "FridKKTRrF8A4K4m7GqpGFJFYkGz7PNwHYoywYxBnDVBQQ7kvJXhR8RvYmNBPumqmwdm29QxJV6jirHZ4YWKXkN",
  "key16": "61YNymABnQ4xn1go4rMM2rBUvA6zEp4RiERcsQVoqQyF23MuB4aXxBimCcCC5PYbczyQwbEiRWSySnYy3aRKiNy4",
  "key17": "3ghSYTyPcrPgTYXN5pvvNezBEgozKZZWzgzGpbj3zGzu3XhGFfa69PbTjNx4dBcMUx4rYfWcSfMhMAAdwzX4been",
  "key18": "2tfaPUcppDYjszRjtxLcBcwDihF2cA3wychDEQFj1jMJnms28EuhEuToiQvoPbTLnjyPU696VfbsrUWvPf3uDtkf",
  "key19": "xX6Rw4rTDsYjpGLLBW6FQqgKrpbwPz2w48xZKmmWq2L58MtGXfMidKwM1cyGrSAw5yNTqEn5Qs1AAUBUNxAscS9",
  "key20": "66v2dGfiG9v5LaF5m69HfvFriG9Y7AH48X1GVX7trWPP45VDEG4ShWhGbGKbtkALKenYwTdZwmVUBEnYcmoRxgQe",
  "key21": "28qSdrQW7kcVFVjBqe9yF9JMZqWFzvDtt1dNgDe94VdjrVikW1zDUtWzRAuEeu9ie1b8FGYssqH6VXVqtQ9vcr7p",
  "key22": "4TQFNEME6KGYDaDMpLMNGDdSicVQRDoH3wfEL4vrPdvnbYHdHQ9aJi6kzk3jwadcYzoBMqmvNqetEWekfvoMkLZd",
  "key23": "3sVWp12WxyyYw2EjqerRSoTjAKG37h8vFbWbe2Q7dzB3qkJ1XMcFLEMpaxiYDXnpVse4zAHqxN21ghitceYYucsu",
  "key24": "3bCw3fnkXhAoAKCscYAQfsMLn86hA7XoHgsM2S8JhaZoaESSytdCV8ScM6vN9eKog4QybgWh1agUfDdkHRNaPxGa",
  "key25": "5515qbn5hVyvcUXR87nAZ9HJL2cs9k1iHL7Uy6DHt3ujVUpzKcXMsFaot1BLkVysie9vZNbCXWQnBmj884TsuuEz",
  "key26": "2guoH3mXCF9XaZVfSptqpGwkAz3arD28fST7xRVux11pggGHDXsYBDZtYWWehD8Jwex6aWehaB7Yq8yqNWRyf5ST",
  "key27": "5WPe6B86r6RvATDYCkcAkfcJivDieBNx6qUGW4YhDVPPBXxk74Yt7QzyCfUhsgfRNrGbSHAuHy3gX77YrEaH9w1F",
  "key28": "4X4SenQxyGEFy5TnR1ZqWDgvvSuCj2ppUU1WTbpSx7ngpyUUKYCmDDpdFyXcQa19Jcviii3W3Rq2tZ6oXNrHRW4B",
  "key29": "3qZjwUsMM7ij3ZfjapqtvaykDEcrj1zAKZXWm79eAMZKuTXEZekaZpPug6adGYfrtAQnpAC5jYHWfAMTQ2GtVvdP",
  "key30": "2LM9Sdsn4sBEBRbAgjgKCzMw7SyrjFZRpDinDY3udAwbA86E1tnaYTpWio4pgvnE5DgKYuy8pGgyHa8nu6xAh8DC"
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
