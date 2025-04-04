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
    "589hSynEc7Z1T1n2Kuu3j7f33zZDzeRsGKaqBqbWqXTtrpVXSVfZVFLuCLuot53aWbgccotcDPZhV1LQm179Wk4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "513ZH2cJiAp79krnu8XhTNKqBBgfKTSmsfYcZXTTs82aG3kKgU5asWGK75iymHSEXXuhbaheWqsGVd9g8UfgUaaq",
  "key1": "4mp8zzVWBcVU3XverhsKq7ytyfhSvC1xmqA1qj2rrUEjsWV3nczZzAUKum27DYwmxcnrGoEY944FF642yTcapMFG",
  "key2": "44rehpL1PuJFjxSaKzth8Fs7oDTZjiq8tHs4h18T53GFsBcyFhoVgCRJdG7tZ3jE1tRfDQhtHCjBXtdtfPcpqaUR",
  "key3": "3s31FCDNtx5tWFcpCio3VY1BTtBFgJNNqX1MDpzpcXxEVsxY4u2gUpvP14jkRHYUVAaC9R2w2VhFWYytnpSGUEiL",
  "key4": "uNLLgx1sphbQmnfv3U8JFXrHrrgREYf4G7ZN8apHFFdEJvBbDxLPeoKp21oY9TPy3Xbtjsm2rnxNXckYLAcuF1S",
  "key5": "4HvA9ahMq6PnaigMMkURAYLaoxmy3jsjGjv4qNAKAzhiQML6jHYAbRVm2ze1AUGXf9mfLbY3aex6StXSxsCGmFK9",
  "key6": "2Xsas3pcsqMfA9sixxnbDhr4tWpUT8NppZXph29M516GYJFGBH3yccYvkAtBBZRSChEWGgySBdtpJgHYgFpDKST2",
  "key7": "gDtZCGMVShaikf3X5cBCPhhcxSqZmkuxpERbWt6jupUbNEWQy3sLFnSssaGQCHBxyUZMPdUaZ97ac5xfrJFZ1EC",
  "key8": "udmNqBfKrEN4QLPum6LHq6kTqLBfY6XpuagcneLjpp6miW72RueY5EaZiPayZrFPaVb2Qg7bxeZLmFLmNGfMwkr",
  "key9": "3GueUpfFzWLKdFnVbPHSHDd3Wug73YTovAgDUHiAv3C6gjtuxcDd2uoKkNqb48BjxViPPS9oH7xw1bU1y5p7wY3r",
  "key10": "4Y3iLWLZhdbracgix5aFj3XcBRd9J4jH26xz3YPn8rVXLmLogf7uisFjBoNDF44LSbLu8qaCJoz9VgeQTDbpp9kN",
  "key11": "253BBBsnJhen4baxQRBVh5YdDiAXAPvGbeLmZ5knd9hqSYNZys8dGQGq8Tjtd6ayncEJXJViyyaG72sYcgJHfmya",
  "key12": "YdG2jSnKbu5fZ8pUPZDnnra2o8N2jnyYPCUiFR2LG2kmUFPfvb9xvJXwNMP7yKYi4Lmxrd7L5BUccg9TxKz5Dbk",
  "key13": "49HruX9R4b6PvRbXbtqSC8z6fSR3Cu5xYiB4JrYKTt4fpLc65sBao6yfdsU4Kbz1NHiFDXFcWkofUJZZDqzu6kwp",
  "key14": "5vP4E7a2v3mYFtCr2fBbwwXmSFEDWjwV6mgfLqgH8qkjMbhsk4e2mtkSTHCHJU5qApTkqtfhXKWkG6hqQuJkco2n",
  "key15": "2q6PZJjZ83edfocj1Tmp2VPxWganRRHuXXt5scjhdVStHXY4QS9nDi5HtmWJriUVyaLp3mHPLJJNAWzETYZygD4",
  "key16": "aULjhvEGrTjC5SE7MHL9i8xEvnHnZPEtLViJy64jQ3THBBpc2XbXJvArX8iPdHePNRRgoUKcbwaL37fihgssnGc",
  "key17": "2BJGhz3SP9Xj5YijKHNcDpxjPSoRn8wPbGtt2NiTEpZY2gdAxCD6ecfk4DMrgiijDp31zbsDyqD6vfPTcd23qmX8",
  "key18": "1HEonN48T9dsa2msb32tUdjHv4sL7fhPKtRYzy73CvFJhQKEsQreQ2wpTE47jJ8KSU863ENuT79tufyNhLJ2awU",
  "key19": "2MDsAukYsxuzK1EVhZSQju6mpQi5BmYu6oTfXmB5zS6xzHDSHF2zJw6pEAaJfULUjcVUhGnL45WUbp9zYvh3XEHw",
  "key20": "5TSxEZ499JaK85fDpXDZibahfoXmnbP4jM5sWRSVsDWCbrT1RZTQbNyiHEhtLcjjD9Avy7kxPH45Jok6ZQMADqmw",
  "key21": "4aLF3MRtru8rc6isirszLRdosPWcikvRQ4R8R7Zz698Hba9zZoGWKFMt3xvvFKgeTQjzMupt93Dfo8gWCoFeJfYV",
  "key22": "4T963fUVXNAYT4ZHsRbpDpDyh9QCyYvDNw8eusSpena2RGn19XEWmAzkytpbjcJQfJqQ1XicKG4YcCTvPjhGQEiP",
  "key23": "5eDKjU1iTRWT732o9PKHLdoLXAThSjiFb9GoPGovKiF5Je6NRaiLwqe4t3fs6V1WagAvAhj6EFqsKs64BMg8bU5P",
  "key24": "5dmeVxVEfrnuDmx7RTcvMJh3bKNzeqSMmwXqTGZ1y12U8qmJriveecenvKsu6BQUvE3hHUNKNz9tNo4A3cqvCRG9",
  "key25": "5qDjh5TPMQ6sxFoyTKifKh4WmmvVnSQTLENYUZ4tCtEkJqRgKu1FHVhSFmSm4LoueCUjwpW6RoFEqnEVUNfrJVGJ",
  "key26": "35wTwfvi4d4rPrj7UBg2QoafJtqLywgBsajkJNp5WwFFoPSNGJbZPpnvEHhcDbE9cGHFJoV7B3Lot2RTifDS7Jyt"
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
