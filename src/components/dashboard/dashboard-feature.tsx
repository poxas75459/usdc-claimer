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
    "2p4GCCHiF41JFAhuMktYUVQjiFosUZXaB5YJvafvKf9ZHBddqUCdG655WVzsg5ese9zof4rarx2RZEHcbDhZHun9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44RTHWo4bhTomgBDuHca97UfeJp8sfJCe4c7s8RxuQtwspH7FQQUCBa5q2uYiw3yXpDX6QXV8nP4NAZxJsJcW6pN",
  "key1": "2G4y7ajZDUzoboUQKS4XFzQwVacYZGRX1UJMPXbHdr8gXFsc132C31yQXEPbg9dkZX5ust7VZeWHiby3Hn7qSAxF",
  "key2": "4MNqMSg2hCFvzxSL94n7sWNKE7w6Ez6nd1vKcptpRtxwUaXQQdzLsMDAHGuPjm8NabUu8fS6vsa6JJoi4uyqy8mP",
  "key3": "4Xwp26roZTUK4s9U36kaNdpvQALwsj1AuuLXJMcmnkrizF6wBBUqeGrQHDhgYvR1RQTzR5P47hAg3EfRtFwLqRPs",
  "key4": "2NdgxHWGmRwDqA57o9qtg6exAZfbPr3ZRuHZdyuP8pRTRMJCavGxD4rWAFQ8CAWNbErLw8hZMacy1ZCzDDYfXujE",
  "key5": "2RzNsFwMhgPaoaR82qjiaQtw2pYTD84pzXauh1qWFwAjkj2PpAThGX9kN9uHgG5Dsxcvy6SDSzYzkBgBmqJY2YED",
  "key6": "43sGQZc39ybPr3rzaxPtD9SDmNcLhhiV7qUGDQd9YUkmgx6mXcZpy4CjK26h6cQRSEtF6GRvJ9XzmEWH9ckrTi6s",
  "key7": "3t3mXgA8PXwXd5Ab1qqnEdK3XM2upR5iViGY2BQqth3iKx6Kfg8gJogqfvgkMKziemGwmbRN149ghoPfiyqV7225",
  "key8": "5xfiwx3SkBBYk9JUZMUV8gE5fFf9Reyk5auA8vd5YHDnnojqyLNwawTjamGFazBN9TG8HAa9bkTLQQvDHDmaFUUT",
  "key9": "43yAQz4qSNU6Fea8H7WMPioWRPCEgyFsp18Qpk2Yb3NypVrTk6bLuAdQ275QfJHdyN52ruZE7K51hr7rrUTEJeaT",
  "key10": "2QvCDkbirYJTNRKMjk7hbQS9Hi4PxvxXLuqTns7BmuubaafCVD2udjpRf9r1siNrSMsenFNCHJjSzijyvw5RkNLK",
  "key11": "4qAkWmSPmP4XMHQrNgoiGf4M4Li76KciMPFwwoVroJDBLBgr49prrWbjxVgViLqK3LZGm6uUhgBiG51miArL9aUH",
  "key12": "4tM9kEkLbPGzodUdfaxjEV5jAVhFk5mk5gBavsuUpmV293FCcDQ3pxfpP29YevUCiqTbmVrHRi3fUtekTS1gub9j",
  "key13": "57TFynKDs1DgEJTwPYDpqJ5TCPHDfCjz5zzYXURk6erTjoKeiDKahAkt5coTqxo4YrotUqGvzb47BjBYtiutNWHE",
  "key14": "dhzUb4qdNMNpE23d55djrw6rU9JiS5KsWt7SEXWfSQhFTgzGmhfM9KMq2ghWYKHbGU3EaLPaiToyC9Vq6dRXa9n",
  "key15": "35iCJszMoNmLqMFnzd8vW5KXGUhUQ3hA4tarXyegz6DuU8hDeREC6FchHqmnAf9N414dEM9HSmxc3ZjLKEstckaG",
  "key16": "4u148uMTtXQLpxywJq1bqnS9mSPKkrCD322hJvDoYBjkrofrJ1c9Z1Bq3RvtnQE8Ginx8g2PidAjVQ2kdmcvGX5G",
  "key17": "3uRbT9qj5YnmNc6q7yduDsUhUxJeUAcjY4eXXC74r2wbGxpTwnUEAwuR4ejiRcQPk3KvwHS1mVvSNY4jzs3hJU4e",
  "key18": "4Ps9xdYkeWh6jyNnvb8jc1aCmWck8mLybaURv4aLMVgadkSgq13E2gJeQdS1c6CZRsF2PeQXKoCRFp8d3jdCf5Y3",
  "key19": "2khZHdeg3m2NmHmfbjM2khQdcJ6qRwCBrBsqi6kwEvYaQ3LtbSBtzohawnw7c9NZgybBxGqCqqLfELPZ1UhePPX3",
  "key20": "22g8pae4sNMtrGKJviRmrwDh78hXq137hMibX1Asv6HxnnrYaFEuW4SMKgyNrgDKH46kRh8ugW6uJ2czS1UR5NtU",
  "key21": "25LuQVow9kLmjGMkmyBUH1HjZsEM4YwkfcYDb4c6CRwHtKAcQ8BuzVtYK728gjG41SjG9vf7mZxnXuaHSp6ZsBZQ",
  "key22": "5BvWkxcYvKXfrVYmf62SC8viZN4iTJ7q1SVocLCAJdse8tq9oDhhCAuRfwA3KuwwKcjnM2gpxdwR6AT2u3pTruoM",
  "key23": "2giCrG1HKCyCPLjMtwRZwrSrjeNtsUiG3PK74DxmFDhPGjnHjgui4LFxXYijo7U7vRmSo393GQSB2treWNTEffrd",
  "key24": "5q9qedivNAn1D2nj4DqUUBDoWKAaDW37CcdMu5hSNHCx7ip2GdWrK1ew2aJDcJwUMJJokdjQTyRgRRZtd4yZ3nZ5",
  "key25": "4m9bt7aVxd4pzMeXVUqPavqB3PJxLUg6WxoVfXKNxTVMoctuZ3n72pRGXamv5A1zEBccqZXZ6foDiKFydCysSWuv",
  "key26": "5CvYBuG63F5ous71cZrV1FYSr2NpaLpGncdpSTduRdtDCHgDv8K1ZjJWrgnHcUAsxDevNKnD4sup9SV5WtWRZYrB",
  "key27": "48YZ6dK8kruCpukwyiMjcNAj9C6MunnEjz7LpnhqxuD52WRiRmzsM6mYvZpkrRmh2Eydu4ce58NYScPbnJ2CfLat",
  "key28": "52W1WEnRWfEGLYY2fvmzGs3z31SXviwwrqfbjt1fwH89j44EWYHBKNGsmGwX2fSHFCVcj1JrtenKwbEwcoXmk8WA"
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
