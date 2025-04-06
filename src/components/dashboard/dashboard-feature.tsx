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
    "xTLCtRpVDqx4yEWKZ5zjMb4FE7aD8XdLECEABko8vcrnqeAxZWRmkp1TPLLGVbmiPHcJPjEVa9uusS5hfPr9jnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26V4XST1tykvYMJy3nrzuBQb3TVN1ewhz5S527Z8YiwL5dXUtK1krZzCCkMKa5cXE1sbm9xTtEPKPjDStiprmDQ7",
  "key1": "3Xm33ndSUWDUyrLvxMfF5CSzPvQCPEVWKKVE3eP4X5WAiTnYzhJPXd9XxD9jzaMVhwKSpreyZ19tiGkuru4oTyLL",
  "key2": "4mzbtDgMFNPzpWQu2B9JAL4VscWsLBB6bztaPWf6cZePLQbiZjKR8E3T2inzsDAim49nvQ7obH3zhBbq8XsDtdR5",
  "key3": "seT5BJY2WucVMTw1GFeN5k9G6egnKXWtmevx4TqxnDLEhdEBdZCHw2PmrvzwMm24rFAxJ6oYr9f36a1m6ZzkcdX",
  "key4": "3HnhBLQiKieZX7R1TjA16apaTM8ZKHb2NzkraxVGBTviwNxRn9e4U4x3QUBFfWMLbfJDwaSaLEJtBa6fZ2kFFfpm",
  "key5": "2Tf1Cwxrox7V84zitsLSfQFwkLSH9CQipaym3bQubqvURThacEPQH8ymjrp67PPBswPjTC3vGk8G7norkjafZGPW",
  "key6": "4A4L2K2oKDKCWitmpfUimr3UuocGPBTzVBAXbx2nH73znpmxSX9hDYY4FeqNUhf6u8BzLjEYbQLUyPopmzCYBAQD",
  "key7": "5WM2dhsqEwELE2KkiCSMPXjEouZ36g8Zup6eamjqUxNFpxXDw2V2bNzX8b5ZFjbhaAJCoPNdNjEHzeSqXcioCXWN",
  "key8": "318LpeGhtuSKMcUyARQuiVTZsodxgPccvJkocBiHo3EcVXh67TndifZvJKgQcGX5SRP2sfHsd5yGvjfFRQcNDR7L",
  "key9": "4khq76b8SQ7qkkadWSz5Fndh6boPTdniZgc5WbTUh7BKTNPCmH4zbi6aSCQ69R7xJkQeEfmB2ThEo7HVyRrqfVhT",
  "key10": "wLywAeWNy2q5FApMpxBbgPSXnnXHSZzWcKAg4YuHaKJDvdy1RQLHssQ6ZN5pYtpYkqbQCbM9qnbsHu2VmS3Rqsb",
  "key11": "5VkSzLod7okkYBqjuYtQA9MaMt1sw5cjEkV9wJeZ7vgrTsmMEoo9qaSi1P9Phnpzer2QLuo4QHyZ4vtKDw6tGm8M",
  "key12": "5jYzi6QmuPyX87f8kRPf1nmyCH5SAkit96pSRuEozCBaZ2bWGmKskbivUGpFYM8WEC3NAV1mtAyUn3mVZWJP4MSW",
  "key13": "62dPZKbQJV2L2pkKyUqVEXneuGzzufvYDepjeDxasPpdhvWT9naHkdfF4C4miKEQCMQbj5XsnYUhqSvM9UucT9iP",
  "key14": "2guuFsAz5XpZ7A13iM3A4gUcCy2qequcYcudskSpsQszwyyXmGdbU3LYkkojSVdiEEYANrc7MrBUaCbaz4RY6nTu",
  "key15": "5Pff4HoRMW49wBrdNHLAYNQtYkcStcF2JAt1UaRNwDbUvRzwB9M1qmrzFzva3sJ8AAaTmD5dWMh6bxGiAQDq12DV",
  "key16": "3ZMQjvX6BzY5WfYWGdQR3hAUJe1dgoKfNRJiGTPNsH5XX9ypuNfGyxGpYdC6bi5ZSCQ6USNZ7EBVJ5GjrVLPqMx4",
  "key17": "4qGxdgAfknLRupjrbGTb18Ystfg4bYvjC65hK3hp2ECgvhMtxZK4T8aMhXFJPeSeti6XoMBft3dMou8WcKKHoXA4",
  "key18": "BeG8uvzMYnZeFH2bdjCCKmY3xny46mvjTWejsCofZGxrwZBiJExPr2pWkPh6gTraEBJcxiFMeRzpEZQTXrZeZkj",
  "key19": "pQrPXH4TcDoDjXtx2TiYYXPvyHr9VPuveRV19WHJCRY33aeyY1EaPdXQifaey6JWtPJVoMAxgYs1rrXKu1AVQQw",
  "key20": "5AnPZ9UG4THHKg5BkhfEd5U1jsYTvwLTRf7KuxmUqW5S3m3MDmNSTFo9mTqSizhAeLD9bzV1qxdc2GfJ281q5Hgj",
  "key21": "5mQz8uKrBjWVAEpDBNCWfZoFpY1uS5QdAHfYrWe6yrtJ4DHT9hRJnnu5gXYULrdfxYqTLbgDmiEKKbhXKHekMQGj",
  "key22": "47wj6KcSEAueoh2uKUdKSb86jzfhGubadnSAku71jRhPXVayMrx2dRmjwr734ZvtQQu2pd3k4ULyzPPxZXGbPSrC",
  "key23": "pdiEzR4jbVCtdmym5UW7MCUofsRFJAdqWQnQX7JFoCgYxXF3NBQJjpHGVhS3BvfwB4FP37CtdBGeV3Pcs9MCjHH",
  "key24": "5fTiMr6auwv5m7JiYwSCjZs8vMoojzXc8sQT8ttKmvavF98K11BNvMyM95aT768PPAfNiPdWEqESwHGtpzXUj9J6",
  "key25": "ELwtSqNyqzdzihHLQBuwmDkThadE6sLMiL26m4aD6va2irDZrDSfBKboZeJC2dfoLcwkcApFumBUmp1E7SLZ72x",
  "key26": "4NzAqZScbibo4mXwdaqUThdvGJ8sYZAETUhgp1PXQN9cAmpbi7UQswJtq3rxhtg8FEtmNdqUnoVxN1ptdAF59UBL",
  "key27": "3cKDsPcXT35wbhNRYKneqts46GX5e1iZX8UKdwzyb52AoPrGCQ37SMknMC7defyi6eWQY6XauijXG7119RM6joyk",
  "key28": "3bDhTEV7fxTTu2ELPRGRByTrCqRLMkLMcRW4bJM4eWfFTKYvxocmyBa3NWgMXssfrC3pAY3ADKPyzNuE9cPMKWY6",
  "key29": "58k4zpqXee2HkMvKdMV8bHhrdgSb7zn9u2qQe8gvezhBTUffRru6i3RKMwTunJG1CeYrND5HbxfLFbYpy9fsuyWB",
  "key30": "31sGpgx1M2e6K2YJeaZgNRQEAZ69HKWkJbCk18ozgWL1XA1gaNNjiGjZXJBSWMhfWsaEwghrHqB34k6JuAheJu6j",
  "key31": "sdxtZJG6QxUiPicL5dcWaArXMtoSbvnw9B952cJUcdo8fjpa5jaXkAmKKXVNF95TLJaokqBbGW3fkJUW6Gp1z5D",
  "key32": "3T9tEkC74PCe1fnNgq1SfpKHrnHFbpDWtGsSnSvTUcjNb1gVnABqrdoLDXd7LWdSakc1yeZH68xYqvcVyD68ozgn",
  "key33": "5TuWLzVHiMhj4gd42BZxz4PYnQ4PAsYFJxpm89z5zHwyZCWBL1FdCewwKHGuwcTNnAeJbKdMTmh3bRpiMjcBxb1Q",
  "key34": "5cG7zRDLqxVmUVD2KUitYJQGHnkN2h3tY8ufoT4hGvTSpax6yDu5LDuPtkn7CBMpnRPu4a3fr4JnakNRburNPSXM",
  "key35": "2KnDBkJDqkkUTuwpTU9a46d7yFQ1tKxKvZ7j4caQTaN4tFwU2PA1DJwmmQCz3FP9p4qZ9WhJ1KUdi82Wk95XcuKw",
  "key36": "4FbBde5MXAJmaRrTUkD5ssLDnL7CA4Vb5tkysRG6GPbxuVf3RYRFdy51JewzrEFcTktoPAnCj3LsbNTfom8zfiQi",
  "key37": "2m7aZMqRo7DxoDx8hXuwKH2wZTzzjhStGDigqcHW8bXCabEtqaurDbaSNyUH9gBNQF67RRfX1YFFTTRKoKE8KF4B",
  "key38": "5FWBvNGnUqErukmxuGkHRSeinKihpQXQmU3uzb9VvHAaEiNbJRy6pLbeKd2LZtQdzfXfQMB5R9Zp6AsszP5cgtzm",
  "key39": "5DDrVzygfywjGQ365ymWwH1sffNNPZU7DUrsyVEn8hfKeZB8gmEnoRodSHNcqVBP1BqexHvEneJMpoNFQuXnytTu",
  "key40": "55gqjDUZuHSzNSYaEG2CRsT3HQiAxDQqGwkgqKAuBLtXksok7FwkkbzpY5Xe3RrHnyZcuJMNcB1vu5GZSedYVW3S",
  "key41": "4DC3apUgrrib8VXY14rPpWJxPeKXQFkoNdj6xaS3nYU2aEyft9TMF8jzd4so15oCARLmGdD85kWU3A33U1mydmTd",
  "key42": "cK65tkg8qY1JushabZco37a14GyefK8G9hchdAZoUFm2beKRbv8SFu2apSYjydR7wtCLrBzJjniwrdPcaysCFsT",
  "key43": "52Wz6NEvApgtZ7HbrHPYHRhfzpuxzU9V3bLS7bMjopeeKEcoqngqs776u2LDQyaqLbxY8jVskj4imR1UyJ9oSWoz"
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
