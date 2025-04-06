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
    "3syuU6v5o3e4qkKWoFARyCht4hs4cx1gPe5y6RAcCvw42qJrewNHS24DyH4FapKprbSyx1i6VFHkor3fc8Vd1ZB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jNkLNrNwuD1tRKn9fh3WBzAHCtYyqMTxhjjzqJBTeCeK6SgWMZ8JZbYKR8tPaSoWoxUSqbV1kAzGweseHrwWUe3",
  "key1": "2VruVqYNZCnxxjknWxef738zmrSZQ9EqB6PJcxYq414UFf5t7R3jwRrqVwbZ9i6B45ippRRJebnX1fUFMtQNeFHc",
  "key2": "4HwkhxyneTi31FZYTxBJfrePFdtrcjn8n7aZAkeDkzfMbv7WHQnPdd7SccdrRSsoEG9D3LSaRBcC2SDq2hty6Krp",
  "key3": "5KNfJonyfWuHCCQZnuvkCN9qi3HVHPatAzESqccPiQ6mDp786wgtQSUASTo66zd12RchWFs9Vz2dvZmuXM3nYdRo",
  "key4": "5Qr4QiDckCFnkTiYJL2ARNm1tPAkATAPdMZ1SjHYE6g9dcFmNU9BMVrWpCEz9gMb1T9fLsC4wCJDVTH7GBeq9MvT",
  "key5": "3UihLph7s9zmwsxwctdZcgtHUEKUhCv5HEHjFP2GJRWoALTYT6aD2ro63ZaavKRo2UvriWCqtPnijjSAzPmfAQZe",
  "key6": "WNkoZT5UEZ84QD1NXNKXR37fqkrixTmQno13XQ8q79hyJ1VTYt1Z7RuwWRp7xLCrrXRdmctdZC2LHdT3rwNvEAJ",
  "key7": "61UEiWTdiTyMvnwCCkUi5EKhh9NqjkAfdBZH9VX8DodChSDNzq4hzJHXL9ctp86pHPg2yc2fzN6XUmTnoHM4mVdh",
  "key8": "5vxvtsPtQppLZqT7fJ3DbpvNvh8JPp9PH2smFG6t9cZX4X4omje2cqiwQeTY6wV2Z4efHZHFDX1kweJZKW3LWtSm",
  "key9": "3ABaZt9xhHWR1fJJpXC1GXgDKgLCkp1oiUHCa1Z45zMuizjb6AHH7U8aLTQLQfegbDG8NSLifdkZi4FR7UveQTZD",
  "key10": "4mbRvGW2D3rgaeTYNWRnydiZNmA5dHgRX9XhB3YJEG2CPz5Z74RXvCVEhfrkGYf4VGpmVbSAQbDnFVTs6vUbgctp",
  "key11": "3GjnVtkbjgHDe2UmEAiyYDmvM39Pb8xLt15DChDRbjuqhtn3cozfhqc4zB3Mu3KEZCTMVpaJCSW59FUafRpMXT9j",
  "key12": "gYieRKA9RfuiRd2HYAPG9zvaXq7UokWxwAnGe5BUPqpdjZzRdEXuQrB7anHAsaa8UGBExrVHWsmdUPg4s9SH766",
  "key13": "5jETUoBxDGitSFBYqpgR4MeCfmC6aU7VmViBvmxCYFQa85jnr5t4WhvENdJ3ydPjoqUMtVn9nwqBAUcZGnHAvGJ1",
  "key14": "2gtKghm4SQaSN7Uw9DnDSqSRMEJgs5diuWE3bFzQ1LymgCq7QcCjesdDBRsKyjSZLDgHuZx114SrgAK5gVWySxxd",
  "key15": "5Vo4ztE4DkJ2KYM7YQU5jmrmiA3ghueFUvtGetycQ51v55kvBmTuCYjRe11bjSPM5ojisVkNZpCctmdPovEFRaU3",
  "key16": "625c4BgKz8cDpNK1h93KTUWfkQECWG2aFngXU3RMUUdSGzXkW6MJUwmDiGADnUMttUzoLgo3D1H8mWmdzWHiEoQj",
  "key17": "3ittpz3PJAQhym8N7tJsqA5Nq5rzV8d5LC4eThRDPjmA1G71wCfnGY6nv8xRzLMcuvnhpgHwirMeRWGR7G4ZBQk9",
  "key18": "3rECobQtk8PgZRjeVKBSKsqJJz9ya7rmp7yJDFvEW3NTY5iBAFAnhVsfcBYCM9boqQfPN6ixWRRPT2y1PZ4AKdrr",
  "key19": "51fVQUpbnaeZ4FmbHHoSWUtkAN1zw7tU9BjUBjQuy14SQMB2EkeBAia2ECXq65T16bdRv1aZ2DGQBoFUcB81UQWV",
  "key20": "62SCiT35ZfeifViPRPQHpkM6CGZTDJe4m1PYQD6egJe9A3EZFxVYNvn9WnCjigGBHXX3hLAhQfGZHDixMuaeFuRZ",
  "key21": "25AEDkxTj4zb2AaBpbH4Nm8R7VHaS6qCAJnMKZvyBBHmsovgW8WHgcViRUyrVKRd4C7J3GhwpvwSQqNF5XTffFvh",
  "key22": "5C4MbZ7AyujFUpPzeGGG9NDfMTwAhZM6J375tBCE7r3Xf5X2wnb7vUmFrGM8eHRJtDyCyGiHETFqSkL3MkRfxapH",
  "key23": "3qLfVcDXAFmHKK7Xa6nDXi9b7DkvyLejbyjDYxydWr9ne21DTWsKC5Rp5STKpyRvCkkmHeN2q8LvPiQ9vTye7a5e",
  "key24": "7XTFfTnytmJNYDoy4xdrvDY8HzBwfPT6UsSscmU7ZAtgxwxmKWBVgeCmXaiudkKRrL5WSZWsqGGduAZPK3bz8S7",
  "key25": "4SaqXszg9QuJYVhUnXaTrRPGiF8QqSfN7o1GaCh5K1XzjvHDLDEUaQSYqjVZ2wK6ToFm4L6kvUnFz4LGhdFgdpUR",
  "key26": "4byfTLzNqK7BVkJ81q5a9FwgsuVm4FwvzZ4beAeaRp1iUrALvinyXGArQzTf4sK42AGCkSwYX5TCVNMczzqHuAmk",
  "key27": "3ppxtNotGFydSGBPsijVTMRN8M8MVgm1ksSnhsjFr5rdgvvViVqrSc3PBwHafaxrWSF9b3wLEk1QuuLHNDaKmAf4",
  "key28": "4Gf3YnVby8EAQCKd4cg8kNXdCJ823GoQjFwnCNc11WrhibHKwH8Dvwybp9mdCVVYDeegRh7TXRmgqEWp4sCZFuYJ",
  "key29": "3yZRaxFVPaYaKvmVWZpzsR2JBbgPZThrVkvveDsC3YDwWgHiY2uTxLw53zr57UxhBFp3gWYcqSLGib5UjspFM2nZ",
  "key30": "4Z4ECC112c8VNpvdKKqr59YMBn9q9xzyomfeiL376kQ1YtaBW6YXE52y7JiKX7nyDdhmJPKCAfghdAj9cfjH727X",
  "key31": "5expSwcALh6YMEciqWJ8CPemNffXuZZRBRsMdQEhkiMV4H8mFeTXuvLRVtKZzibFZ5fzRfh7NXaMsxgtchoQKDTj",
  "key32": "3wV8i3L6PqQgvBY7EtkQAaCYUTAJaioVBQZMsqeJKxhEYHim86dReCFNYuvRBtwBfWpa61fNzdAuq1fC5a4MQr7Z",
  "key33": "3TvgGQbXKQi7EKRze9mWhp6giy4WZggQm8x89rXjBgeqv5pkEfFWjacQYVm6X6ZREoK8nQDwKdcjMyJPCU39pGJx"
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
