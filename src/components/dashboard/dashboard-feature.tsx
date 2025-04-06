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
    "612DGTJirtyT5JBL2dW717YHRjLkR9Xu9TspK2XQoERdRnh3WERLgZMCkyu7SQqy1uLesqCk8apBZgPFjCn79ZA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k1J45Xio6LP89E7miRRwQNm7wzXLu7r3hyH95CCPrg2FUcb3Q5tnnbjtGNR7qDWnKEuGuv6nkCkxC26uiU3gti4",
  "key1": "2vrwULX8XhGhnmCZVArB7UN7x3pdgUhEF6NeWy46wFTZuyJM2kaK4aoUdNFswMh3zYiYRcCKGgdhtjpsMUYqEkjf",
  "key2": "4xUXYKLMq6kpWoBeLD3zufa9BBhDkdtdZg8ANdfp3FNfzNuYoasHyFKFy9AY7v9rLmYcY6CDHcAmsL9KgScN4dUH",
  "key3": "zjpk97PYdm3ZXmFATFjPpSw5KQBrLXSt6DjeojTV2FybwcVuEtuy96DCoQoy3PShBE6UFxq1PrTjBLUUxLXVJ3M",
  "key4": "36odaoHs5jhUmLtkxrCMd8SKYrrMAvF2GEJnWNaUL7PMRwik93HKRHTqATxC3eS3o9ENvLmESseiBTwMMRSDCKxq",
  "key5": "3t3t64Fv517XEUp47u1zekJ2K74nbYwiBzeJLzsmJ3QLfX1deLRAmAXhPgVh2QS1UeGUhzwVioxZhVj5jt5vKHmx",
  "key6": "5LxordJgjf3CgPSahTEuMLXtHoTYm9qbKSpcCMn4KidqMppGa5A15PznBD39PebLHceokeHHNf9iXSe4t8tHMwaF",
  "key7": "2gfkWy8RdLhUyf1QMWdcCEDK3XJGLa6rkotLoJvvsyyb6eqXsNziweQrZDGh8XJ6SZRjwj4eCzmLCZ8dH9xsE441",
  "key8": "2dF1jFKZjXvuW2McHsPaZb8BAEZRvrsXVuoNrATJMeTDr8oQSt2g8XoSs6No3L7tHnV7SRnGVjvSCE72qj5CQdiS",
  "key9": "2qaQHVMav7oaaDontFF3agKCeJg3E51Qtp2Y3EfuwE2YupnJRqdCinhGZLrqiD4A9MkCTwLPcYczg2jWeqpAMTGf",
  "key10": "32HAVYs3Htvo6XckNA2kr5pPDx5FqWh1ToGuFY22KWmFWvtK9ZxkVMekqiE99CCU1SJKphrcetqG4mbpFQuh3Aiz",
  "key11": "4edLE3PoCGrkAb4cbufPWcBqLDuKt3pqs3nxEF59Fdi7uFReNQzsJX1pzR1KL6yrrrhD8dj3EPvDvByrLacWu3wX",
  "key12": "2JwbcJPWRZFMe56sYyAKbi6xtnbav7wSBK2TAb6wMxNbx54nfBt51ja812TN3Czsxpd7WQaSwJcpA3yYRj4fsJY4",
  "key13": "4nUL66zusBH859uQsCdB6JeMFAMb2N4Rpmb1onrt7kfmcm1q2G3pGYFPAk17KwjJnUZpzBTgK4Aq8bmVCCsFvy6b",
  "key14": "4eynDuKuZ1Xt2k67QjGvWBWEqvRJT7dtDSv3aQGibXaPJW3c4LWv2aafMexWJzTdLGitSdtiNwugLkxaavdw7yXm",
  "key15": "5qw7qAQAVVhKmfmVB18XQtdp4EVDVjCBDFrnkZkB57kYAmg74J5KqciNwm3Zv5R7Z2kPMrv6qpe4aBohrkbY1fXW",
  "key16": "2MWYavk91gL5sqnGgeX7ZB6KVXpo7b9gecLrj5QJC8kwZcTTDCvtmzzaNGvADRfnHFP87V3GXoxkLGLLpjJxfs9j",
  "key17": "446VrrQN78pcF5xNAGvazVthtWV3B52XHWAU7fPBMED7PpMr6FyHVHR23dhNWhUsv1UEPvGu1Lxp9smiArcbVyno",
  "key18": "B2E1boArV63Y6MYVTmk6x3nhJgs5q7v6yqdG9mYFW8JV3fGhAi1rZAMCniUH8Tdv1h5rnPcj1pnM3NbYU318UaC",
  "key19": "4QATgV2FJ4GG297SEWwPrRArufc4XAjn98QZVeY4H7fk9sdYwhjDjnF9Y31DctF4dNseeVDG6VSQ49zmA6541Tim",
  "key20": "2TPJccWaKvLH3quA2kiK6sLzmAsHeqpn4q7EFTvfBTTgDWXAQfFWdnUFUZPMthM7jCx3nB9DegzhAUFE6UEpjKGa",
  "key21": "633pMjMD6Tv35Q8EkEyDA5eY3drDh6KWm6nei74LwFGtdEjEvk8akukWQX2koWuZaqa8qAtgd4unzK3omkkRmBKU",
  "key22": "26AJnRfuuqW6QSd7oZKp3iNsxJ6BHWsQByCdMQL7QffPH9Br8vst8mSzfTgDvrfhJKLSXjh1XxzRYo3fU8RjNNnE",
  "key23": "gMEPb67LUMiRbqA3akjBJKUHMZ31g5uvZrXGGvnT19SUHq5C5YMotsqBY5nMWGHQifVZ1bMvyqcjmn9Z3WHsx16",
  "key24": "2yZFwC1GAR3QzCVdDHSSBJHAWM8PUieaahgygsCVwdVW1oPaCRjaSrbPQNdmyMrEAgsuwYPjJLbmjMU7B2ThUUea",
  "key25": "59JeTDYZQ5VhpxsGX9714cH4YXKt24pgcsCBu8M5P43x89NuvqW3L2VYn2LVXj593KLvGXVwQ32VcDxW2qusGf88",
  "key26": "2LFBV4e7T7Cca89CgWHkb5U7kgQVCVD1SL68tZxXW6nkkRrjQTZZef8e9BPzLy5TpuzdH4ZxbU7kkyAHueczu6MY",
  "key27": "4jC7nbFmY1LK48bDgTkvXZ1MZjjhoWiFnXfW2gNT49kQTHXToquCDgCSoRci56nbpdeb563BnBHCr5AoxqYjLB2H",
  "key28": "5grF1dTuP74miCmVGBVYZuGc2v4aMkDAdcLwBu4L6nHynCznpE6cSDuwdoijVxGeKhmTHo82bvadQYQT8H6LEy9D",
  "key29": "4GCpoSssem1h5PbufGu7UhaCZfWA2kMbLnNiFpz7FU2tiuygY8PGihfDmup85M34qe9iC7qsR7FSgeLbbQpVy3o5"
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
