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
    "5GhC9ot5GxPumETDcUgmeb3yopJWkdARbMxSnzt75dTWAUCzNs1rDphmNiNa26fD8x8DuGc5DWMFnzH155xAV7Fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YtUBkLcUikkLo2ATCw4VWMzQJStFFwwnbReitzYnuyE6kLhbiLweGrnNo8WMqzrgY5Xye2Uif7h2ZmZwhjfVRgt",
  "key1": "5fNcJC8PSQNDxGrhXL2UFec9YhgaTRKsx2jLfrR4MyVwDYRNEa2ytA5mssYEYK31qGStRwDfYYQJLa1PJzRTWDHU",
  "key2": "5zKGbupQdcm9W1YRZ2A8C3L6BvUn8b6t5BjcyoTuFQtoE4ZM5NngFcJFHS4HQSSKZkB6yxeNdrjScNUX7V1u24So",
  "key3": "5nQAvsSx758xYCy3MQjL1e3t8kDE6veDtrU3oxKwr4TrsY2Bu6aGDdm7UWM6DcphWLnvmboiRoeFExkqXankYMxs",
  "key4": "212nhFBJGGvgKwd6Ey14f3DPnFf5uirkSWnLGMNH15tuDiX2xcGZw5kN882niLuBAatQh8GjGknZQwipFKUbFTyc",
  "key5": "fFKF97Cndoeab1dQYZzBLiEA3syi64V2v93UwfG77SwWqzMM2LHfAC4HUjGg9kScFqNtkVuqFX14XXsQDp6fqP7",
  "key6": "2XWrvMtkWicQhBGCGnufQTgYpB5LMgSLt2i9CZkFMUnAne9mmYqPca6Ua3XkhDGVyCK8VpvUGFrVNx7MUumww5K9",
  "key7": "5KWftYiqgvFnqgmzynQ441UurwfUKAPPpEoRQmPE4o1u8Xh4cKGpWMnWQWVgZGNjZqzMuy4kvogSLkTmiG2VvFRQ",
  "key8": "5cvnxpiW9MpxWe6xyvmkh9oaKFnx2gJhXUWTStqgFhAH8h33ENp8e2AnUUrLGt6bhmVb7QncmbBzFQzorqRntGPD",
  "key9": "3N9J6PhkopoeNcw9uNQ7gzKsNdaVi6yYbsM2phD9VDZp8u8hjzx5oanjzPQg6xzXJS35G678pi9ip41p3pubi5tt",
  "key10": "5Pw4zBixSvR2Fpn4vXB5aVqKpTxoRdk82DVvv8X8LdhsAJF5HzKYmySkB1DsNmz6MP4RUgHmda9rUN7S5DDxpCQn",
  "key11": "5f65cEKZ4rPWof8hGn5Kd4wZHKQr3e25gs1WkVPHRnKw36bd6NC7A2FwMEjaC2fsg6uhvcqfYrBAR6yR9uG4pac7",
  "key12": "2h5dapxeKfQo3zwMxtTuTz6udgA3Z84yee3xGpEdmA5vwnpLiiqwBRcMyMv4WkPbGn6qMhU6KdhVbnaRPnmHFGo3",
  "key13": "54suksBr7E8fEPo2fZzdGiyYHGihYvxzfSkhKD7dL896oZzyvRUY2MZmfmQ7ZaQ33A1BLTmmPs83VzWMwyyYfEJk",
  "key14": "4Z3LJDrsuDQiGAtpSzTqqoYgjWcEcnVjhy6SG6F7WpLiGKi2LrTfUctEQFAbkW9Ufrdc68b8GWod7Ytyj4jsiDF9",
  "key15": "4yqpJfnSbwitoBRdXRezbDA142pjH2xsEfsxJjQypEFoffyhg96Eztm6RrJRf1VKmRdktCDQCP1MzMxZk8TeVMbX",
  "key16": "3ET1idLTU5dvdhhHwdzDTDb6mNTaG1UVq4Zux2pGWpVpV5zVidzCxzz2TtHHdQtDKHP7EstVtbT3yLEtZwbArFQJ",
  "key17": "4GQbpAodZPcUPeVpGizmbcCSACTcv7Wkso7vAdqM66TswiRDRFSfr4y4WjxXHTznrWU9r41jPQjNTWH9WHEyHipg",
  "key18": "4nRV3V1u4mU6gYRrpi93KrqfVByNvMNGUNbjVv1rGUC8ttFoiRGQedhVL7ZG4hZvzJP9aBuBY7Nw5efjxpmedUht",
  "key19": "5FKxLcffJ1yiYK79Fw8rJY6xeSwxZi7kQSZ8nbZuMoV4frTvngsoiFnar7T5AU5o7SwbqPonvK5YSbAW8vwyWNFT",
  "key20": "3SkmNQaoXieqBdY1yvUUGx6XBKsjc2AKYwcDuNetT84vyzfpTFAhjXqcXXyzg2qFBMk5qsgvBHmUxqiuWzKbMq8p",
  "key21": "5iCPr2VAfD3AKFoAgSNKss3fmARSmeseGnhjrxWM1eAyqZG7RSFV2BWZe6PQ7GdYU85FbgWYWQDASh2Mb7tChfWQ",
  "key22": "BdRYnXhkL4JmELWvEoJJzYe9hoeBUwpvWWn47CKjmtpMpGhGn8CGhkCaVqynekWeMZce6VFkW2NGKdgXbf2Vdtx",
  "key23": "35Ey83tbT5AuopcqU9oRhZsD9sYNbimyTWEN8wZy2b7f7U2XNpGgnukALzTSgWykz9iQzqa2WBhHBt1noYXYTMYA",
  "key24": "3j5UEnKLbMMQNrKgYf5ivLXLEr2dLPSxubJ9gTWPBvx3T1MDwfKuRGPfeDGKpkeUiJnv75XBs8FpER4u4M9eEwsN",
  "key25": "2CqGvhAS7UWCvxeGWhMHv9zq3ndYkd47S3YgwpB6etA8A6d76Ncthi2Xw4qQNaW5SuCZammHZqDEQEd26e2rPVtE",
  "key26": "4VTFhVYy7GFzSavVmQH1bYmVoM6bBLqGyEqrPVZVbhpgd3wRdQzHZ3qh3JaUEhiC5Jm4TGhfjEZtuqgaP7DuEa93",
  "key27": "31v1g837nrrvLTkDBoTmqK5HaZXWNbENgQ44g6BCjV9nBCWRz26oECMX5RH9EWGV9681aLBEnpA5KxGgzh8mMXbW",
  "key28": "2fruePxcfSr1aZYz6jUjF746KWwMqoJcpWrEyGbCQhCasxH3ySPF9a8wmub1BxDHKifmx8btwnMK6pzNawwP11cq",
  "key29": "ydhmpKqW98ogiLezkLkBctGZxkJwmksDd3T8gskybQTuJF8UW6HgJRS3NLMLLntF4niC8Jqsn6xmjwZts9MjMmu",
  "key30": "2aKpLf9SWjrqsfyvor93WrUstMEGBJq6nb8fwwLXqjsQsQ7Eb2EsFrZRS9pBxAGwsSscrkYa9t1CFrUXyZA5mHjF",
  "key31": "2GAsAXX8dTfzYYTHudR62nx3toQWEBSDMScFnsRUkzVzHeTjFD64Go7kbCG6FemL54ofUFgGXbSJuw7inxhMSWhw",
  "key32": "4eatPsmJMdf1ksAG7Rc5hW31zLkCRnU5F3AbxBtyZtPfFHSmTvQ2oy9UfmC6n25J5BEVS8GEQZ9JeZDWukfU9RDN",
  "key33": "3etvMXUw6BG81cLPcYArRW3r4Hx2kfUyNVM6jcyvEGKH9oS94aVaR6oPoLtq7hArs9MeoGhaVrxcVhyp3nBNFBK8",
  "key34": "4YmnwRC3ZYqGyDeBZGAZu8XDtZYveGbSYCnnnrNivhcFxDPiJRz9BEvyegN7FsPMkzozGYZNNeXk8d7jPp9BGQxr",
  "key35": "2ad2jKBGMmC5FpXo64XFzEmbih5aYHnPgAnKqQrsCaN8d5396HcXMqA7bVeG4knJwh6KNitaSgVoAsyXvuug9zJD",
  "key36": "4c6L6ozPNai2qRywYpEbUdw7u1BwFagpDK1vteEZiog8gXUFkmc6Af37FnVJAHup9KJwcVM7KTh6uzwdc4a6F8PH",
  "key37": "3VoBiWrqCdqWpfix7tbeJyantGdiybx22vhnd4g5LyjM8qqc4EA3yEp9ZbMby8k8jVHaJt56xm5gBbXS5fGJvcZV",
  "key38": "4e7wwKfGWTUkXK3UeUntRDqzXjecHycNrHUz1xKxhygUoFV5VdQM5J4Vc9ELwzrtFgpkmEM6TUvTspqbYx52KzLn",
  "key39": "4rDprRhDpeU3dT5QSZ9nu4HUq2eb7cabLSkcUv8S2AZUFTqoNGvf4HmWNTkPvBnbuE8nGkrGLshaDDnHstBiXb2N",
  "key40": "31JWmmKrth9W2DDAFfguUHD1dos5rZL3RJdUCVZaBCaLwPtKzv5JDVbQEDYvyGqAv3fRexukEhoNXgAWtMK85ruC",
  "key41": "5NTcH3Gg8X1jnnySsn4WKZrvNmHw2gUcEMEAtAFfez1o7tKukmGjVqjWZz2vjWMwxUT6nKCGPh153xXfJMeQdnPg",
  "key42": "51FXLLTtQh3SBSk34bsC3bQwJ4evKaK7dAyMkXhTZoPM3YAr2cdX7M9r2Nw7gBpbSfXvMRMijNreDDmVkoxbLm5T"
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
