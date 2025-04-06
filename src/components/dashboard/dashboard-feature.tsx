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
    "5oR1DqUKhdJQDD61SLrb6L1XbWWpFgwyGaAizroutdD36ruTqqkSvpoSomWZPvcJPcanqzq5EzRTCreTEyCGn3x8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JpY8hvUptN94tA6LEsNsf8uUyjkDby6mNk7fN5dMfq7uNRvYREsQeYewt39RHNMXFWG73QC9T4H26Awg9DFw3Dx",
  "key1": "5r9z8vULpfMUCqeXy7SrgxvuYvtsHSvGYhtAcnU9fbeWV39xgurgwkX1qJJcd6DWcszuLnCWKEUh96Ri4urEeSm4",
  "key2": "2a8aDPLLCkn6qhMjTmMdxAEhpJ73s327jdvVrKp4Dkr7qnVCiYqawQmau4NsLabfKXjN9ttk6TrmcjfxuQVeUeck",
  "key3": "3pzTn9E4u2Yb7dN8SgAvDp8yEHQ8dT6BEmZpQXJBzCcF3QXJSF2LQW73k7tmcELEW9M8QigNRBDVdUA2xsycPWfL",
  "key4": "21DFqpBD9nxEyG2mDZ4soaVjbnv9WD6aVT6Qf5ndwGrMc1GLJ4FmYiKNB3nZBnptKmt2RZKfD99tHQRJvSUCLv4h",
  "key5": "3E1NDKzqz3wQuSnTvDVFZvG7YRdUczqifurZEdjiHaxnFzpn2wdGj1Pvq1YHken5ugHzknLaUzWDMjvWGZekod6f",
  "key6": "3ZjSF2Lu6xm7621Zeb5x89mKU1nNQoZyd6gzW6xE3LiWZ3RJrRndbcWye9hFsCFTUusFsKCbEk6CR3jyU4NRyybM",
  "key7": "8Y3TPrUzdaCVHwHNQFxtSUmtJ7jEdc9Z4fPLJThGZPojb2a5r9RNcFXFTZRC8XCiBfcVyzwt684Cq83u9ZWii9q",
  "key8": "qiwcFw7bmpen7avwi5Vw3ABcvWNounxfxoERWkGdJVzEoVLDx7iJqfwvai3xT7yECpxaKJ5ukhVg4dCXhUjuR7h",
  "key9": "VtwEc7nvvqjgkShBervHHzgWwbFFKzNMd6gPTArSd2hcQGdveHeRwH875FqxtCxacPnA2Eo81PUkEoAYVryJuhh",
  "key10": "5RBqAtxYNErz3Mr257r8bpyFphFaz17x9JsN328GKdfkZxh3iZh8u82LTkqVHvWiQULaM5ofMPuFtPFiRJcvUAg5",
  "key11": "4CPfVsroSvEkHMXChbpuVTdQmUENE55XYWgYywSqj46PhdLZe44E23wvFPjH3AKECnFfzGzUfWB8Pnv6Ujyy6cFM",
  "key12": "4gHXAqPoZ5XYQmBoN3TQNNAQ6o3qwarf9Eqtw2aFA5gvfyfH9GwVirGhTJemArvUuxQbG8bM5NXJ8UVHRVaGV6ta",
  "key13": "PrTDok9UECmLgKUmVca4oiHCEb9t3MsKqKcBoZpEm9w77zMnPnZ2Bg85UTqJfjb7gwieaETjnKQSuDdEok5eHRG",
  "key14": "37ZaqGin2AY3bXM3YaNSGrezPatKTYqKTBUgwhKYihKiGC49GsLBhL5pK5yHxHTiyBnp9eM1dUS7LApCSk1BN2bv",
  "key15": "23VBLDaEfHhPHY89PmRgPpi8Vq6A2QcKRRpRei77XUAA7WuxpZEvhjEqBXx9p3r7mw7ET1M4xNXDsoGvzmT5ZnXZ",
  "key16": "3ru4VXJhG6NBLcsR7NYExdj7bXNYqG9ZHrxTZjsniJpGMWQ9skZeyc1Xnt3bBaUy8sYxVxEeqD2Cq6fRrPyxKxut",
  "key17": "b9kSktJbDh125WVVRD7yxfcsCb7cVKfdJTj8DiKaFqVLdWUHpFzvhSpTMcc9pucnFxoJJ1jNnj7FbDtCQ1Tj5BV",
  "key18": "44atN6nym8GH5rrsAuuPJBdGQacyZDPR4eKvJ8b7gbUghZ7QvS69EUdXjKqTqS8Pma2P5W2txFiyxXjdpk6CMSkU",
  "key19": "2ED5KdyZiqWktcXu6jW7zYLvBG4vmt9vXjgUR6PAouLmdohAQSoLyWkbuN23tk6cLryEKaGPGKRNvJyCbQXHn1KR",
  "key20": "4qSsoseM54xs8gnmqmRRzYTtjj6XrpXhq3EAVLGEvLwGuY193W49b7AHznNrDFYM3fYz54Jh1P14eUzRTFbnUaQR",
  "key21": "vVwaeGj7CcXwH7nhRt42H34eWyxsqqFFJ1PjfLnqYgJMQ7MgrqhGMLdBuEmc65PyKMiVpwTn4a6rj3LrrzZmTjM",
  "key22": "4w6BvR1u7u7V2ivcv7SqgKXt1SNarK6EbWtLFMiKTraFVaVqAx8mEaqnb4fB2W96MFKWSJT2BdTGQCDvjNKpQJqo",
  "key23": "3QyXAxXscWubPMJXxThtArio9nKKi8MWkwMGhhykP2ao8QAJVRBDRxbXYLSW9da9z51Nw5J79kkSJJDyNqyxbnQ4",
  "key24": "9ajztRqQZ3MwmqL922chCAq6ofg9MnTtnyoJqecXvbo7fmu6atKGkZ1MSEZKHgW6k9mCFeqdNYjGJJc4EY8Ekv4",
  "key25": "3mB6ydSdFbKfHzkVn1bQ5g7AnCS2dvsrdn9dSRPp3gvbDkHgKYWkVKoP8vqGE4nhtPgJpkErFZqSzCH7X9p6dsgB",
  "key26": "43E55WK4wVP35P9sfQYHU6YDsqibE9dmcm9gRVNoMUUHRLQzvUDfNXrcwXrEmKSCU25r4CEG3ymA4XwfxWKwr6ms",
  "key27": "3bPmLCh6eMFbJEDKTsai4fYLDkXjYUumtwY6C1SFUWVbZ3DE2AQQdGnbxZWfKHwEuRHteLBP2E2EsxpB7QaCPRBq",
  "key28": "2moz4ffjyRCC9zhn8w28qqsLmfbpYi7yeMoCAZGqHVewvzAPMzoeJrtqERf1Nfm3TzoCBahVhNkgYJZShS3xm7ka",
  "key29": "42ihPzLvtF2v4hrxPkttoXjE1QNQW4wvV9TnVvYc8A7VXdERmiSoJALJddtwkvYDb4Ws2ybsdr9rHFyVLRRVeaLr",
  "key30": "62r2qySwJkTH79S8VW9miWYevnLeS8k5aCNNLU975tYZrVop34BCLYRxdBQMyz8jxnMS7XaKMHFmm3SeBFx7hiXv",
  "key31": "583iznNGjRxPDLMpC2b8Q7AMY612MQYHeQxB8SgqvwVZc7DZhttD6oRSsJ3pXuZWkPww6oddSWTsDoC5qtdwyA5S"
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
