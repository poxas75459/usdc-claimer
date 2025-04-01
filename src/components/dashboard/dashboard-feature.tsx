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
    "2cDijRYUeMqmykCJJv22MCitmGbX4JFUCNyLYD5q2CCW3f6Ymw4PTTqwJ7Bb4yhiBUBti1jcKzGurrmqCz1FpU8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38qgy7czitZyUPTVq3SAhbpk2kqq7XeND5Nm1kshgWgFsH9mPPupTzWW8VBK3S6i3iVoitUyJQKKZqgUToTdJ6NV",
  "key1": "34SMcnVerTXvagYgHvDbAVmLp8DWTW8AF3hw6VqCn4jPe6Q2urKPf1HJtXicm4XNEVtJEzsEQyA5p2taqzFanNyy",
  "key2": "5p19ddBeojufCKc5SSp5LSi6VL84Hxqt2b1oPPpgoFm6Xa7ytysdrx4TP2KGAnb74hTBqVv5iDnLmmRdNBufEVEg",
  "key3": "3rekFVEKugoBQ9hsrJjQce78hH9GK95E7aUbHzbd6QQXzZSyeFrRYUvzvHXzegh2Gad8hNbxK3wFbai6fEGfg4qd",
  "key4": "3L1BohCxSZVfbtm2U99mRDFgm4HS8bD2xeCgFWUkydEh1TcDRH8WDxthYYoqXXsbJtTLATPgn6BTuuTTJrnvwUe7",
  "key5": "2ZooTzGKuyqu66hwPv6jNMRRKMVW48cA3wwhaJx6h5VGvjZfFxQRGfxkfCiLQwjFdobaso1YVzStmMVxnJ1QaWnC",
  "key6": "JrJpbFmEQPDGSSoWuPPG3bz5PbqvKaYJ4xDRuCHwejSr761DX3oJ2Vg4nCpDf3eLdy7b5U6kygb1PZgr7HC4AKj",
  "key7": "ZoroCyEMWSFKDFsjFqsT8MRSbLceZHVDZrZmvJMiZc8vPA5m1ME4FbgBtS9psPtxZRfYbm9bDgNUj7aA5NHzPEt",
  "key8": "iixsrhkPusSEjpbJE6oqHZmQ7ZcMij3zqEmNw1Hnva1RqAYCbMbpBGrVjUM6bz2baqjaNb9wmLrJhvKkB5zQ5Yy",
  "key9": "2UoGrzCyQfSH2QZQv9UatAvxLBR7ytCMPx1NNjM3NNybE85y1B8NXDfCCFfVbXgze4Rnd1PR5mkiBbUN33cwbsBr",
  "key10": "4CnT4BmA2gk7CtcgGPEHpXFM6HQFmzb5Ek79VwzmKbP6VvxFCnLWNmNQU6bPtSh5TtCCQ58uptJxJCrVrDeYdedS",
  "key11": "3BfjD47S7XmpeWhMWyLiZMLNepHqqiw4yZTK6x1HRZvb4GSA3dCbYh3RmsgvrAqdTtXG8t4XgUGLrjN9YR2wy7Qb",
  "key12": "2XRyL7WLwpPjdNVGPygkDuLyZRzPX5LsFygX7vfydRJMgxmEbDbu3AJSK3PrAr3zLD351yTsh4ShGQzEPQ7jCqSr",
  "key13": "2SnYrDPmwuSw5METQUW2EgxSNFhgUWLYEDP58oAmba3A322gWq1a7sfAGvW7KP8tWVV4MhezDYXHCsfaW6k9QaJk",
  "key14": "4t5aMd59mpNR876gafXwWweHptrJrTVPWfXSwbpHYWgThP2H6MaSNUQoQhaUxZ6egsDAjJPCfhcJVU6NyHPrryD7",
  "key15": "VpSEsijHVLf3hRLZWBQDXBGRZLwXnCKR9k4xkB4ystfYjpiEgMYo8e6SwFvH89uXPdVDec9xZvWPPKVNf7r65jn",
  "key16": "5LMrP9rwmyHuDxz6zR5eu9WNnXx5xhR9VuFkVNKB7HjMsMQbkDVQFGcBaCVxCshaCmn9rBVV83SJwtjD39sPAGvX",
  "key17": "3X7FejXae27z5UuLEjjckJiDkueKJ6nY9a7MuektEoxxh9YwTWVppYric5hrnup1qoa2jhz6YCaAprtz71pyjFnf",
  "key18": "21mSX6PGohM35VotEmrng662ToJv5qMV3gTyPzeRXTsQ26sBMrcWAMMrFDeNJ9yFQTShAhPKTKH5JcEUpezmtMuK",
  "key19": "4dvpu6UchQ11pao56ZaeSnoXiWZUqCD2Pj9n5wVJapAfq9NQiwHoNa17aKwPCYuVt7ymr1fWsHDaMzBGenks4r9v",
  "key20": "536mPyT32dBvqZNd6ea33pc3eDLtbHe3mqvLQPhKpfaGmiDyMmdCxnFFoYdPMxSjdvcGSgNz2UgB59yDBJnMFVEX",
  "key21": "5N2YcVBqN1JgNrgjK7vjhzCfbdBx3KxjehP1av2G8DbhZesdAzJc8qCxZGnFhivqhrinqRoZwF3tXVXMPLa3173H",
  "key22": "2psFdcqmvkv4vsALM5WAxLe2sCwVduLkLonbW4GKcXFKAJPKkMKHSEH9iRc4sjed4MLcajMruLAMh1KU4e3jiURg",
  "key23": "3XWWDHBnwC8EvrTk8r7AShYqAhnhBpSZxmDMpiVvWmAmi2VyYymdMRwyt1TGG2FFnGZkFodusPMH7niSBHnP5m8P",
  "key24": "2DyxTEjqguqAEkimUnqZRcuB7ZyCjt8teoexQWNDWJn8Znx5DGTdGCQJK31gUe7A4Rtrmpc6J6kBi45ux6qsj3VJ",
  "key25": "5Yy465e71tA84YzDqHKPQnFf2DHzZSqUwLoojQBez2ohDySE8T1KsRKiDZQHWj12QHWT1CAY9umXvX7B8nb6NUCw"
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
