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
    "qHAW5mXTApTHZbch86soMgEuvhFTmfUZ4RoExpwv7u9qj5T9ynWkEw4KwjQHYX92xcwxpmdqd9egCtbQ5cxhgMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KyzZbxxropdXVugSKUAwE3nTpXK2NGZukJWxvRUcnFzoqqmasnLs7VH9YgLMUWsN8hNHGPuoeZxmaW1KJe8wCWC",
  "key1": "5Z7kHsqmNaWcHDz6e195Gz65PB8Gas7pN5A5FXYpoXqCEonLwhQVM3RWmxmDnUJd2Kv2T1kE4yiYX8opL6E2F17M",
  "key2": "4hPhCXPMFEGeTBPVxh1GkGQm2fW2w6nnijN71v3MYRYkYAFFxHNUfn2ojp7ya26u52DiXwmsSdWwouhVfpxureXe",
  "key3": "UY7FidBKfwgFmda9bTbCdAgKUbJbfgPP3UGrG5QSBxHhuKwMc8GazXmk6aRSD7k6iqaVpoUMivqE6N4FHcv9uvD",
  "key4": "4jUazQm6qCwvRTtMrxJSdBUzsQ6pacWhuXY1TuKmHXYThfd11keQnBs8imRHu6bfLkxu3ui1zk1LV3D6kdMZMnvd",
  "key5": "XVcizHtHfA7xsTacgtbKN2LazVkS4SGyhPvrbpZnd6WDogVfKw68ihkJLc92CCWuTnPGx1UdFSWPUYnAygq9qVA",
  "key6": "4p41LASZbdCBGgyEBdhpkxajxSyiJ2tG4edBpYkqxjzCpdh2y1ZiHY9g4VTx4DijWGa2uwKze1KJDJf3CSTLrZms",
  "key7": "36KN2gyCNBX6wntEFeax44dvjq4uddeKo2Kb73NNZkQ1WpBBQ8MNYrjyNAwLcgkBvRkrRNw8jnEyEas1RvmEamAA",
  "key8": "21Emz2SLY8oumSE2gL8iHoi8RPcqctp2QXNiyuiXWZWoNFUBm24YuPpJLMhkvX9chTkk6oALmgYRTK65x1E4r4ax",
  "key9": "68TixRRuvXDETeSd83zZDVoS2VeZK3SWjkKZEhDgsjmxrwHkNSvGXt95tY7d5X9VXrPDLiy29JAWwFD7ZoRanyt",
  "key10": "kUDVp82N7YcWv9CE47EGUVUPL9MsC8e6A2V9wGpEPnZSce2MdKyWTzLPZmifCBVLDZ1kkzJSYwd5NGt8giBVd7e",
  "key11": "zSht2gqkk3DCTENzEWaFsQyUf6Sr842L3ev18NSFYiE8MdYL24LkxoxK6RJX38qJdTGJhySS11tYtz5b968zJSq",
  "key12": "436Pi1yHBW6dUakWFDpULoYDk9FDRjg2CotTKF5tfjgYdowz5yVCJFb9KZk3gTajTZ6sgRStpCScTrMCYfyL1Fx",
  "key13": "5bxMqE2aAsJ9fygfCTt5EwNiV1YkN7zubfzBRAAjB8JQfFANJGgnaL9uQF9ZqqxoSzWdgdjJmXpwnzgzkoxg3cXJ",
  "key14": "39J4nNGsSZJN9asfHKXF267sosJ3B8xR1kiijEj6dkQMq9mpcQxJfaADLXnQZaXTyX6B5XMxDfktdCErqFXzhNWH",
  "key15": "31TQTnquVWwZU1VauALMmHj2boXvqdsRA5oB82BtAcoDjgtnRrHucdeTvQ1ERMrRyzwmJT64JfC4pSVcKw5Z7q91",
  "key16": "3FhthG6LxXZS2VAQJynSnVg8MR9k3m5TL7jkNUQBYwB7nrJRwcgMbwBmh8y2DWBbQ11zyB4iCN1v8qzUB2anPiSc",
  "key17": "3YUb2NGzq1Sqo1AWLWTF8bPKoVcBqxpdZS6wFZj2G1NFof8En1y16sbjxq8UUe375zd4ULKchfwm4Vz7ZJwNS4Z",
  "key18": "5HA8to7atbhsMXmffgaVYmcWNCVhupoyRkQ88vwEAcSBCq6rDkLMG8PAYUTmBEmdEkheHewitTJEpEN2Y14qyigm",
  "key19": "4eNaA2n4ByYsf1SGR5PKHerSqnFMDYLdbzHG1MgbRCRHKqdKqEi7QyWJuLqxcJ2EH3nUJLhhr3psJLRGeXEvnANx",
  "key20": "3X9u4vz8Cxk9ugcJSCjwVeTx3PUq7S9WmeZsP9UoCL1fpKAYbhfHDaPhR24i2X3ve9fvg2gwumSiAXv8shrv1ynR",
  "key21": "3xqt5U57sdjTPVrvQANNCvDjBUp3RDzrHq97nFJPcgGiPCCa4wqLW4KjMTURHrWVhxvjz2zDfqZs257Gy9E3nwfB",
  "key22": "4K9z1vpcHWzu5cV9mEh6ynEuac3UDUijf5HHvGnp3AMYCBVp2s5J4aQezBDp6W65v3eYy5gKq3M7Ei62DFYgoz35",
  "key23": "4bDrYeSxh28tFhEvFJcBFaJUqhPEt6iBEuhjMLRxV3HbRbUqTKcRvq9aq22pHe5jMXQwKR8SNvTFEqDaZyNk3Jhs",
  "key24": "3ZCG8faqAqnyUDLq6fcWvwCe3wAHdW7tMPjyzUzYKiHPworb2cZvCbYDVqrFaagYvB8T75N9zWdzdGsdZn9fxRYR",
  "key25": "26RSAp12D2Gp18JtSLmy42LxutTUkoutsByoBEsWkYWnnz64Ts6GCXBYrXB9rCCjvutXPmkEw3VubahEVs6vE5Rg",
  "key26": "46Tx7yb1V2vAoYRk8GvWq91BiRvzjpApzChj5tVGi6ZK4vPkYBWCmeThWWGYsEsDJZeGtCUM8B9geERgLF2kmGYm",
  "key27": "5Tj2stCFVrNLXZNH1jKSSrqiaunamvXNz5Ja7CN1uaukz1LUewP8wKw3E3ieUau7fEarReJLjf7vgapwtfjfUecm",
  "key28": "39vpVAkStvD9oxFCxTLfafuPef2kn5fPnRgg7j9LJP1CWCx4HAHbMBNFqownobCbUbiHHxEC1JkphZ3AfSzJtJZW",
  "key29": "3GkwparFPBduFPXpYRkDkyQnjYHG4iyEU2TJTn5W1fo24fmPbLJXPKLWNng7jMxKEWUS9s1fPfqkf9Rmor3gBHrF",
  "key30": "35FkHcLhzUXS4AqXFoYUNEis3Np9kApqxrmqdt5dNWzdccgW3jZophZZy86CxY8dTpjDRMvcggsXzNnVqzF9ZXUY"
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
