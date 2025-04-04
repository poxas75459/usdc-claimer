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
    "26fwkL7SHThkUJRTJumVgdxQR6UuUWFLWqtBdoZ2QjvhGN3FqhFhu2ikXBPPqTUiyAaeWFBvevGe6Dh68N1h2trS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qg4zcTGv9dfV1b9CvkidUSdpJymb6XjD92pkUzvuAe2mjsDQJ9wv3xvPQmL1hmULVG2d8K8kwzRSc6c3nkinY8D",
  "key1": "2orkkPVLuYwGmDsTHSE7LKitoS51Mr2pPAb3WkqPWrEfhktcRp8DaPkgVZAbYXB6xCB7SghZZrV6TR9MFDahCxCA",
  "key2": "5LxhtKNfEhhchWZBTt85Ch9dwqJ5zqqgTyo5Q4AowNezYEEJtRLKAxmK5XyLTs227i1GX7q7e4bo9e6UcSib2zr3",
  "key3": "4KTRtP5PhFCE4wF3a3uWYQ5W4CvSYKETsDUxqUMeaA2TJKvdeF1QiT48LkpKQSoEwRY42QJWkK3AtzVj67RFhfag",
  "key4": "5cbhbJa2r6noYJdceHieWXEmVcAjAVicSdsD23jSqwta78k8Af7Bfnn7sQCsVBj7tFnxULmLxN9Xi7nL4DD2HLWE",
  "key5": "3zznw34etU2svffuFHe2BChKfy9YbA5cZ7EsogmZyLyhAf11s5FPyRsc7Zi3ZTMRahVB8nYHFcGZYunt5SgZkqwj",
  "key6": "4BAiowbVTcS91BUyPMyBJYZQiRRJeLS3RFqbV5qNRiR1iY3E1Lbiw3aGuWv9yHz6BJFg8B87jKbRVEzTqJb1k1NC",
  "key7": "4mx3TyPAk44FjatqNixQGsFSXTAin8j3VYu9gjnXs87q7GGcHfo9876skbAkm5jJHeznd7djXc7cE6DvDsT9cGx6",
  "key8": "58V8HXX3QHQpUGLEb6Us43wCNEYyXykXbEwHceQZstXzmcNCkVLCk57DfPNRPTRPHXJiKUYg9WdqfWUSphmTLyJx",
  "key9": "3THYpehQB7pwHNTRy6auQh9CLWCQApAXxbZTuCkRCNAJybdcySKoa366FgvcJLERTKGyTDn3X9NBs8RvCbA2dS3N",
  "key10": "4Y2B4QmAzeqcvF9muPWrty7wt5ZDqrsH5PZKu8SdhZwH6X9QuWux9XEKzDAGEWX7S97Qkw9fZ2ZMagrL8aFrUPsY",
  "key11": "2vAsuuy5nZRBWzedjhpeC3Kh4gRARDLZS54j1x5yRT9xv8qg4APMKH9yjL9mfS54gy528fBUyxTcwmYZbH213fiX",
  "key12": "FBuW6TDrXGnBrLYk96iaMQBGiFzjZf3tybjm85Sj7T7ZUAdiWbWmJiveKa23vf5kxxeCeuYdjQsycnbdR6kahEd",
  "key13": "3JhQnuCSsM5QHd7ZSTRmCeF96bcPW75JGs64tv2nz2DTBkMp6h4UuxNT13orWX6A4gSnWS3AocQmPxxNam1WzCxU",
  "key14": "4zPKTRaic7BWanAy37tnvfg8Z5h2HaJ5foGYDZw9yKUmXhhjKYdELJpNporRKiggQrdDfz452jPkH4LGbr2Vy8Mm",
  "key15": "Mnh4i2AdYBZfB4aSR997LYo5o4zoS81VrPib4M8prGuDeTQt5vmJGj8UDbZi8bvn9zusAbEHkF7iRzma1zG7wYA",
  "key16": "2TkPWX2GS1Y9SpsiVQPfwkG32YjDvxXCezB8PBkSMKuTg55F2oHZyxAvUMeyCSk1ULKozf3JPUMVphPZZThT7wB",
  "key17": "5HY1xZiJru12o9t6zcWK22cyLuDgzXAoFJkprHk9Wpp2RKTiNiGt5x9zGBQrNS4wpriCtjguxw1AbU4fE6qBd6J8",
  "key18": "8ZyAqbzckVenkhGXCrbzNe1qQWAn1xSZ4vLmYz6zJdwfCR539f6yV4RxchXR8BsaJsd2hVU9rzP5r55unKRQof3",
  "key19": "57LmbvG9vhtuRJMq1BVihNTcKjFpHdEwuX5PbtKGsEpiaPguBxS9SAoCZSiccAR7zPaFSQSa5UzeLwzajiTLdpgw",
  "key20": "4E1RAY6fQtArwuXhW1SM4rPU9hjatQvsQZS4v5M7RmjDoxL7XyDb5AW6qj6T4UGb3aEr86UYvGeFqMmAimjFuRL8",
  "key21": "4xCwxYDbCrjS3byRfZ6tQm4PHtRxvGNXiVvpDDYFspZikuNX4KQNo3fxv6SMNotcMsfdNj1ynyVYW3AMwcF8SU7s",
  "key22": "66RjHmbPjbGuf7yrxRGgi2iM84jiGY42HG7RJNvaG9Xe3Lcr3U52rbciWYuRUZU11nWqPJwJEfAurqqnVrPx8jXY",
  "key23": "4qe44S7D3rPb69RoyyyNCrrNkJaP8wR1SoqVdwwi3rJ4JgaF2Dm6rf4cZZe6pegCGMRmxDHf47Q1T3cLm38AFiVH",
  "key24": "5eBMZFzLFid3kNEBPhSZKvVg5Cp2W9X2rVwkmvdzUUtwq6DcyvWJ3ETypdGAeEmgHfZCee8PxJrfrtN1eBQdUeKu"
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
