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
    "3HCM9hfcvnWALqYUzfiBXhCBiKdRmm71jwYa2r2Ub4Zw7VfwRD9VzrLud9RPUJ5YNUaew1DfRzmD1FtseqqVE65H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fprb1T6HfEjKkq1qYMu2AprxB6K7NyJa8fJdZ1gsgnsB9AdiCXZ6sa1dc23KgKCAH2va5YMT7w1e5vHWjA8mYLQ",
  "key1": "5BDuzb1vYgrHYUafseADDsEWhtAqMkoWqMXcvR7fVNFkfb2qG8C9iqm37xGKWRPUwDkeN5NMye2TeEXCwdeeDT6D",
  "key2": "3AagvijHR25abscbt9ikasYACKk8kX4QfRvsgLxXQzet9Nn8dE69eyD2MjvK1x6Hwh7P1ecvgHfWV8Mjyr3RtNcE",
  "key3": "4bTu6ybWrxjcnXzHRTSTYeJxg8R4bJKXY5gwZ8pnvBYZJWiayZ9QyLSkUqKXRYPrLcuPshfLNe7dNTFV7uQnha7u",
  "key4": "LUzM7UtVJZ4M1LRBn56826LTn1Xk96qCfYfreEkhtHRTY4yrX7zQWFz7kFEVmWVjfvoxMAxoiLWiStg4UcHo6vK",
  "key5": "5yffLjM8JnrAV8KLz5ZeynC4rUK17kbM7mfKxhVtaxGQCth6U4jrtd4rLwv6cJUpoFJxVDqGDnwQD8A86gfPbyqb",
  "key6": "pHvs9wz7HaXXDBnsbej21ndiDVqeztAffSn9pp3ePszQgArU3qi13MHPyMrYYaCoaEbkbHtMt9k9PMG24jPSjzU",
  "key7": "48mXXX4L5YXCDejZN8Z97EP8BVf9PXjcUbb9kRzVMSTi2RERFie2g1d4KRunkZYn1ox7Ug2bCMtJbmLXjquoyFPo",
  "key8": "4R2WP94NHL4irJm82tLzJCPgX9kETRed2fiMTPif61HTNe6xKgPSdowQYioZbPR8W1nunWaj89YztHWqV8LArqCY",
  "key9": "5FYbk2ETQQBKQkegEw6vN3hzgAaciSfzPPJWA9Hp6KT4GzjwiqyWS9aaQKyJ2zrhexc3uy3HeNxLzZ9yeDjeGVj",
  "key10": "2ZPvaqStGgJStiDv4DkLeJDTkEny9fNosHq8yVCB62neLvV4eppNxh7vnQY9cPg6N6rM3UEwQjk7ttitDdEZi3vf",
  "key11": "24fPtaH1GaqGFvjWSF6dXDEvLFFwN1C8uZ8MDZrpvsknavkqu6gU4FidUaWqog2CMjLPQVXJQrtemMoatr5hJk4i",
  "key12": "QrVYJDBTVhFNzbcKaK5Csf5fYH4ZQGt4KXDsJHax764pc2sJgasQMLBWGF21oL5MVW7AGrRJrbAAUhuWEjgExbR",
  "key13": "57PQPhVXPimUr1bV8K14WJALXGwmYHSjxNL2XLFQ2SkdGDk9gYf9bAJ2MnB6WiwcNCD7ZiYECNLBEzVDgcVSQvkm",
  "key14": "4bikhSpaLjs6T3auhEhvCwCax42gp3KZHYDXxDejN4rNYwQACgYjXmjp9BoXrpiHXPG7fTwBA8derZ4m5qUxkqVd",
  "key15": "3GXUu6ZXeSLK61LF1gUb2aEEGtTYU4KVJtM37nCooiN77tv7XVEpdrbzzWc5T4Tmc3XYWxado74Fi9BMQRJUuwio",
  "key16": "YM2JJUE15F7r4KACzLo3CnLGQMv4Bag9CtqH1hHcVRn5RG5Ssasd7s5D8sy3zLguFr7uM8LsxMptjASbdd7129P",
  "key17": "fpCXHtj2AC9ZeWJfWSPgJs6NCeNcyBjvSRhRLUwBeSz2D4STncAE26AbcAsULNH4D6TNmX8yzm8Yznnxi13W3Rn",
  "key18": "AM8YoBrV2rjF5zhnxavspdh8gFVqB49DUQGrcp79Ud2r4se4idcQJU6MM83SaqHyrMUDNoQ74pF6HR2C8tQ6dMN",
  "key19": "5NmLHcQ9AtjWMpqAFTB5QcjXCMumqPqQtkGwhah3G4d7p7En1jQxzyCSFVHWzwgwXNkbMc8KqS2VBXj9oTmPwwht",
  "key20": "ndS84RYW8cFCTg5yWBJ6oBuf5D8YYEfkY51aFBqCK3ZSAFjCLHioykf2GLYMwa4CnaizjSZwji7dYJDZy5f2mTA",
  "key21": "2a2DnNLQJvc4XmupAGssBTFMu4NgaWGqWE4aXLjbdHG9q1ZrgP4vnSKrZnbNqC5pLUhjRjam2RJ21dakNnKKF9fL",
  "key22": "2Y3B2c6rwhFkgB8peFC1GwMXnTofVGaPxvSNr3K1wFnDYXoHiyEMCTrUZK7N6WuqZRx796ufPoS4xuXNfxFAtxxC",
  "key23": "4PzvGxBZRV8Uj783w1WzjxTJ81Lxfump5Yv9F4VK2DzNCxRbEfqWCgZBc4xf5VVWZvqBewbyHhZ6w9YqmVFnZT3j",
  "key24": "3o5v1yYF63trPnfGCYx9SLsK8qSn2gt9oMHrkvfvbdjsjkUfAqBhP2SaxtV54pi9ukHyrKjWwE8LsvHKK6WkY6Hf",
  "key25": "2qQ5BZKySGdVwzsGzSrbztAEFbYv31WFq6NiRR9cBhCABUodGCDYJX45Aqv3Rf9YgDHfjzABMFLjYvjhvuBUBSdk",
  "key26": "vE6L7Y12kAF8Cxatw8CUjYK1fzjqp6H1bJdNV37UUqEgT81WBqrCnL7mpGW2A6kS42DVe446vAkFABSsKCULQro",
  "key27": "4dy5fAZMEyJ7AzXGEa9fwiA7nuhbrDk3SLUarr7WJyDrjcBqPGocBmPbKzK4oaiR5UgyVNY33BiQ1XXGGvctPZnv",
  "key28": "4DepBaRsWpUWGFkMA35ujyq3N5mBYeYGs2NW6nfiCmhSLSHRWuFtDt8ZAHFB1AT7dRpL58DjnuXagXFHMoyqwaT7",
  "key29": "2wkXv3dQ3KUqdFJqYb1Rge5fUAfdU4yta63Lg6yScNuF9tZEzZJN8JW6Z518sods5Mvhb3h7BconY4VhNWVvsVke",
  "key30": "3SDUbsAFNDjs7NjnrSHC95HF7d53Lhe9kX4QTc6TLaWGBuf7zfuC9dqcVEAvc2tHF1pohKeMxYqXQc6KwT5sExDs",
  "key31": "4SVDtfAmX81uYHpSAcCJSUKm2iCyHBAGSWHuj5gRxwuvoTjn9j7WvY6njao3ZAQ9ucLb2KsJUjMVHKnnFAMtHgHw",
  "key32": "4AZwmDCXJpSz4mWZBn61KUbNToLTA39umYzwKPavgXrpaQeh6fWfBPEgdvbo5WZuJSMEsfnsgupxC1qtjaZ4CHjT",
  "key33": "381hNMvFFe2kwwkMwRLGPGyBoboFSAXb4BFDD6XdTKs2KbEocYLHiM6s3MEHc2DfuFHcgnKn96dodZaEUxTi5aQb",
  "key34": "5C1weLg2Ub47AXA7bKJzaAtv5z7RSoYyixJxqCA9mjNAorzxmE6bVFMa5s15W3PadhyjNYtPQCHVASNmWV9M5oZj",
  "key35": "478e6gMk6Y5HF2rntz4wrWToebEGkFchQH5kMdL5awVYwTKimVCtvH6dFefUnH4FeVLvGZfDgzAe3cudA1chbaCy",
  "key36": "2XveisxkHro7veNfML3EfdEXuwZM9PayPmGCA5LitzejHsEKK8JZ5NRT7GWa5qaHRAiDVVa4DzoPv4zJBAUKioo6",
  "key37": "5AsHFqeRsf3VuVuQ3dZdVBdcgQ1fdMgn4LxP6V7t8kWagRsnRKhsxStg3cqTbpB4cGe5tZYMj1m4kXZxuAmwusiB",
  "key38": "5m89ipRtUqCqBi8VktYSU9Eodadn2wgri5JYoHkNPnQdtc6rmuyXKmPVhXHgHfuN3EL8FxMShXq4uKqughoR19zh",
  "key39": "2mpEhkpSgQcJ2e2277WjJfnQfuYRFY37dTML84ady6XkzWr3XV22Lzm9oX657nq6EnkS9dihLeRhaZteNa4Uy9Xu",
  "key40": "4jiXFspcomWGeRXJ3LxFTaKYUi31ZEetdWY99LDLGRxAWnkrk1zDpUfFZmmK3DntS2dAHDkmCxrmbwebzZJQP6VV"
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
