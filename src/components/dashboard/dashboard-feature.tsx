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
    "sZDAiMj4W9rc5t5yQ1orz43Hda7kS7bkdncVeR5b4SyLo6jhy3i2aGXSNpzgDyWXEN76hHqu2s2mYoBQKwapgYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545KD7vXhKVkkqiBd74GUADvviGK1QnW7ZzKVhXWCsfW3n5ga4cP6fNxQLPEVqgSnBcLu7tGPUgAwEmh8H1HqqMM",
  "key1": "5gAazsGU9j7uGia6KnsG4hNsxVPbKy37MKKUY7WrNVUNUrUb4k99wwDnTX9hko2LFtiYYdZ5h1eTWs1hwpCADsUn",
  "key2": "2m6biVjstBAkSXtXEjJvHzMV2E45ZMDqH4yLkWo5hbsh5P5HsvcADCvkQtUMDSRXXGNUh28maunuxttRXfyTiypr",
  "key3": "58rwyS4ijzRJg588RVrpQoBtM3enmdWQM5R7ixCfCLMsGTWud8QdK9y4Y9BaJXj4yFZS3giU7kD1U9VnpomeMFiA",
  "key4": "tQkmUWvCBT8ffZ8p6RKDAw4579M5UEgVCK6ii7UNntciMRXvBPVFV84DGmYreZ2kE3fH5RF1Rkax6pqNnEL47pZ",
  "key5": "4Y58Yq7RTvC5eUEkiBmZygL3pCvBDj8nToBwrjWqXe8Z7GM2hCCHTNUp7cC7iRoyno8tPVNF8WuQohKwRMw9M6n7",
  "key6": "n8iSUvUv9xN9HBjKzF9ARHadVBHPefHCYPdsZcpUNkfYVYkyDQd8Q7AKDWFXu8uoSwPPmCYH8NrLCqVrWJ8rmG7",
  "key7": "uKds22ZQoELxz5xCiUCBFkL6tJCY28UNXF91tabr3jCcXq3a515kwAu4GumubkwtZSr9bkrEgA15mVwYtvQzabS",
  "key8": "4LnBCbW8xLruowAsV5giYBLj7J5dFtY7G9UvXQ8cPhmJL5zphMptkPJ1ceUSLjXxqcFHZ2cDwXtPK1co1VAWwdbF",
  "key9": "5iQQTx2ya3YN7Hb2sKChtXtThH7fv5kmySNdshC3cNWVJWJ3TirED29yiSTGyp5BE6Z973R7qUVeCsxrFC1y9G4N",
  "key10": "2TxAX9FkYYGh8MnEgYbQAJDtyiLeAdWPzqhncoQQ3dwzMAKCSz4tnvmrJYW25RFnC2YeHU5BEtQY2R3eZ3afCn7s",
  "key11": "55U1x9f8y5gpFGpeLZHcdbaq9MRYTZL4pUXkC6zYsnTa6wa1w1EawWSbBi4GnmJPhZN3HST5yLfUWiRF4NybGBiv",
  "key12": "3yj9Txt3YhLs7NM6HDbiQs3JvY1qFvbae1cbP1XK7cmkt2Q5gU8Wc9v2VTpZYzYRcS2zM6bUytRyNXqsHazRjBo4",
  "key13": "2RjBV6yqzvyfK3TsiEp9tY2cA4w3kE61HoXSEnzBhx35rgg2adCVLs5DaH9k5uGc45x8sS3KwbReJgqT8f6vdeMe",
  "key14": "4QgobcUXWAB7WbVVLmniuePFpXB1d6f2cXePFnMuUfi4hRnJfRP7eQAV7K5S2A7Y62XNcW9cdSfqhRQRBBfADCTs",
  "key15": "EWZPUKC4fJSuMXjQECFA6nwgo4jZk8LU3BT6N4xdnMVcphrkWquK8vsBSkoCo25fTTQP1NgavVEtg6bfazdsKr8",
  "key16": "2Bf4qPsTfhF4w7hH5NqaTLN3kEvR3cihnMfWZXRVowsJnCJgZbTdiZwDzywauQtNTwaXv5Y1FcmAiQBMHjjed4hc",
  "key17": "vAuXrxpTHSjNbYu4hPPLTj7m3eKNBo6GciVKuqbGYAFkq69nvJry7z48iAnkZpkphHnsafgxcAvZPg4Kp5BrY48",
  "key18": "2MuhexEJNB8f1sPso5gaD8qHJTupQnv7Ljj1u7aYzaSAz1XNqHfPt1Jf4WtCtxLWR86RLNcC9nmpBBZWDPiuu7hM",
  "key19": "5reVAQhWsDuNiD3jwcYDgNWCdZJpjiKLpmKjgnxhFHnXqNMDcRz6AqwHjSWap5LiWnkNvSdNNFDyXH1ebUNbGB7r",
  "key20": "3PpqBdrHb1bzM7MQfoXs7PNDtX1U4VuSRiehyhAnGsqWZ77EJLTcAgcQ6fCfPTsAJNqoGo7UfHt2TDLGcFH4Ax9C",
  "key21": "2vFpUrnTEtw85c8p7Dm4Gytgts7e5VBrYhwx5ndQyRbx5mtCWCwAtW4PqputgKQMmptwbjr7xQZNEFzMkmzuSys",
  "key22": "3VjyrdduwwECLeeUNJ37CkDAGcNngBqdabCDEb2kRjDTwSWLpwKCnSBbDsPPS45DCwrb8A7qtX5Tdcqsru4eYQpE",
  "key23": "dwrVmpGRJwojoBB4VRFiUQj7g8nQzYdEtgg2C3mwednnvkXU1RiTwFZcDxe8VUWg5rHCXRyDHhzraH1JZLmXnhj",
  "key24": "53DrzVgQhkEfW4uoR2dWBdb9UpAoQaQqFbCjpjDL4VbiB6Fhh1JzB1yJQa22mZfyLTsZEFrWxp8VBsK4NrWuDkaE",
  "key25": "3G368rfwpEHABv9QutBavN4WNZzMpZKECWmkNrRsA77nTg2SNgZwGinqVNNwZ25prKZPWZiNnVwNm5bdNcPQM5Y2",
  "key26": "3jec5mdVFXyobfcUoUCsv1yGsT6DE56ghhh1iKnMyfzUdhVK7AVXQDYtZjMnDXHxWNA6F8rjfVcgZyXDD2PbVMpB",
  "key27": "yStuX94FoRim8By2ktCG5CBwmDhhkpqN6EM6L2yReeBcXqWcDi3tTGYTyXmNk2cgcMTsaFimqWwWu7E9fTJUCt9",
  "key28": "2ifkwFLUVAf7RJVjbD46NxSzA9b9WxLQTKMBS9AnPNYGiidQKKHXos3nmdLQFaFvHqKwQzgGPiPnXZuY7gNocDfk",
  "key29": "5HsniJesCmZnx12mCFeDb4HkUns7zE5XwRWerDhuykBe7zWVpEnQ4XhAW1NNg9k4ZQDnjm26K9BGBfNZvKLTiFqp",
  "key30": "5LCimxtuheN8pxhm99V2g9MnsLuHfc5AD8bPvRw17q1769GsVzYA6mwajiUxQQj1SdkQpzpvkwMqJfY8oiHh2JKK",
  "key31": "2BFsonBmC78jRwxdxarPnLQvRa8tK9zhMWEdPFhXUYSRbfwBnLDr1mzhLC4Hmydm5qdKupVZKFTF7DeSVRh7ue59",
  "key32": "5SudqU1Mdt7QdKvhwHyW4R5M4QZnaq3xHGU6gL7A1nJhDtNgynnXm8HHTnJoPyuHtATSQz3bRHFfxpk2d1XEvBZY",
  "key33": "5aHMq2um2szAxmbRHrZTGaggXfiJ5ipo4b8HRR68KPCez6NyLz75fnGVuBvEzghnQ6KBtVBPQ68i4UczVTeZoQKJ",
  "key34": "5eC6FtEFM4TunRHVBW6Gow7BmLtitJDB8q9FAPnN42Xz6pvBQWgCSzDrEXQSz5NHp3nefATq23wQUrmz72jhrhqY",
  "key35": "2s6SdP8bH8k4BhU9p9CBoDGR7a4QZqJtph81LVbhkq96RhgRcGf8KvCCz7qu4BJVbEPXZRpekjm8vRS28TeomPgX"
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
