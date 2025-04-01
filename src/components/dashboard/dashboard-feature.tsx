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
    "45CKv274X6owwCR1S5u6rg1rQvoyaV3fVSGwGJV4vmfdqDv9zKHPe1rx3TwHiX8JFXMmjJYqTf7v8WC2roiZ7joa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2geR6XiBqTRW9ZL882rRj43zaxYrtXhNFWjp1xxTBtxxLwM8xrhnnsHurGAnma8JEc6nGmNPbsZp8tnoMCUpKPM",
  "key1": "5xPJcHgDRDnNiGdX2CuujDbXzpTqQeEwtmrRjNmpDuhCbyDVHjyD1CJN6iDvfDQny7RLWga3WKsy8E5u8a1TkG4g",
  "key2": "3AsKabSefPkDE9rvmi5nhG6Nn7A386mLhA1h8ujuqGYJguP9QaNf9eTAxAvJvcjietFZeKCJ3hD3R9QiEZCXsJ9p",
  "key3": "48HZQxjjhHjz6LHhFigKuPhT1wW6uzhss86brzuSYToCjxcWM2dJwbQ51s7ijdEm23Rf5zp3Wdow6ZEAcwbqGS1b",
  "key4": "2VPyCFmgiZYSPxhLKcScT8sznCtDXmgC8dzbbWnc9RNbri6sLTSRiqxwaabNLsFnUwzty1BbTjxu2cXXsc6T2iFC",
  "key5": "3CfHinm2PtkumCLjnvM9bbv8JFiWHXNAX4PX8eJJwcrQq6P4KE3j1KCnRBSsecPmyCbKkkaNWQPo7CtFtYgbZa9V",
  "key6": "1R299zHpmZ9HRC1dyPJDYXwmFiuiDMQWc31LQhKWNSv6Ua3wrySbMBKHCDUGtqBBERZgCeLRFDiNAmA3rAgziPX",
  "key7": "4aSEBboyvSpRSRT3yzAJx4AiRNcvqoK3w7VP8xdqgKXueEoP9sbvFzee6js1Q1kDaSvsc35VpRbRZsKTF127Wkrk",
  "key8": "PJM7vhf6GfcucAsjEFrUjfWdaPepTgKpojk2WBBUNVFYkTmNfbifv2xri6CmDdgGwbCpccKAg3DZFYEN826VrAH",
  "key9": "WAPBEcZaJnrkUVfPAEwGNv1yKs8iCqtoWYtfbZiMRS6HKvU9cTHRy9mKQEdySHzPzj9qCGVtXmyxHGyYku4Wtqi",
  "key10": "4H3zky5DLydZZT2EBtPCYrb2XR62VRmJ69xv9WKZJb4Xo3kFx4852f4vt5mYAMzoPRsvcVDjkhjcToc66XzfdzGG",
  "key11": "4N3ZnKx1nXstuR8aMdKXBj72483Md1vR1ZvH81N9yTVcuahgBU5G4JfR5gxVLKYkbifTPsBNoDL6H9yU4MBGwgYW",
  "key12": "2TB1naDmzefBMyYPYHGPz8bKk4t2L3u39yZCaixjeY1poGkKGqr5J2ahH4VYDKXfB1ZaWHo9483HF2LKheKp8o6k",
  "key13": "3amuQgshm2TBtv6tdmGCRwhAW8JDSJYBfyvVX5LSa1ib6ki9wksseRiH9js15HhJxoBuCU1grHoh82vpXiBnhM9Y",
  "key14": "SzneNGeaDB3N3ZRNNwZ91ZXJ8S5ZTQmk8RVPgMzaSVmJ1VhroZUKjUfJZjmX2oDzuutWkQR3SvxaYVtfKdjEG2W",
  "key15": "3qw7jjLjJconS7CL89H1A1Z8pNtR81Jy1kSpPrj6ucSmtTXtycAid5cvsiZb1h5WtvXV659WCe7WAXzjrB7yVtrb",
  "key16": "5EtFayy6k6bHnP5gh6JFJ7bfkG1MisZrueeu5Qo76NU7WjJctMDo9vifSpYRyzfFxggXvtNqxsG6cY2NjJ2Vmjge",
  "key17": "2HDdg6iKmSRqjJpSJLxNgvhk73qhSU3Na6Y5Wsvk7qH9PgccnmivEd9Zcwargw3hucLKYTqK81e61kTNz8bt3a8c",
  "key18": "22GhSEgrBmjdz4uvHYvQ9puURscNWSv9s19QwgxEm9B38TGqELtT2u4nMZH3csUjusg2iJuDnrrQuFZcoRZZGRdz",
  "key19": "5SgEu7jKzffom6ydsFAkbAjcKQbX3aCogPQmeQr5i4gTwxkHNiH8qnc8op91fv39izyMotivXCTZEsm1yz9yDzAd",
  "key20": "3FnUnb67wDjbZME9xwyaxSMt7tCLrXc5gaKJB98jdP46rNeigzS3TkzFrNZ9xdSjgNRzrMjMvK7acrGr7uiThZgD",
  "key21": "2mg9bbHSLR4o5Au6cVarzv8FwstU5UZbTKDS179azvVjWEB8XMrQr88AqWApWdveZx7DFfoNJLNh7hkiYQWstPnc",
  "key22": "2WEr7jMPzuLVzEpYYEJS4VFEGnEuryzPGaVWHL3NNuGdJC1TsbpJVaBPd1x4Fbba7Uvi6rhWAMteGTTg5njmeNgA",
  "key23": "3rdDGeuEbiMZyKqkYravnqu73NS9fQwMAqR1mfZ8JgzaBGFWbpsYgU2FVoeQjZYmSqgZFNDVJqns934JodcF7Z3o",
  "key24": "5zX8TQTkN4rMvvzVS185vSGRuQFNrfU9P7pkK6vCDVzzh3HzezyTfARfCzgaBSZPJQQgxqouc8RcCSPHCnESnfWJ",
  "key25": "2s5ZwzwwSuf3UYBFbDjQWqN2cQxxJG7A8bKmcftL7EDXn9VVWu4cKjfkGqeKxedLGQQMXwR83YroiHPawsBpVpDf",
  "key26": "2vyGx3MP6QntjMCTsorejMFfnvs4kEgqmELTuG1zt7PxfW9Nqnj6zdJUC3GLn3tRJPKoPoQcBNCWgCfxdkYyFLJ8",
  "key27": "2kUn2ahe5idZq3zsCeGU7nT635tnxpXfXg3ANrAMvaskJDkZStcZ5UbqQAWcSVhzKmvgB8fKerPYPeoVmxKJxgs9",
  "key28": "2L6cDLWgGV7iJpXRURU9GBdoNv3y8TwXLKgKsEEpxnoH6Fyyyz66ajtuLPLhTVRDojrhnKbryV7oooHehgU4VRdZ",
  "key29": "3RTFoD8BjeGJW8LG2AwKh59HGL3agABMSHR8WvXdvwYhdX1Amb54DL32xLazRriiaJBbRGKxvzRuhC273KkQttUv",
  "key30": "2kyrPXYeDrC897RsRmhq1e5o58ovWXrP6GrNeSE43quWiS5VwfjqfLmGeAvqH85GaizWVQWkCdiet8H2ZybViHWt",
  "key31": "2onRYsGeH8XL3KyhgiW11AwcCWui6X6iV3tPqBjP2VdbGFgWp5UbYLxa3emDX9wKhgp8JDuKNJp3hVWMEfNbueeR",
  "key32": "5eTRb3VYZ7AUA9joAjh6VvsbegD7SaLZ99TqUuhmgjWZe5YEoyNcKcSYxeKVzM3WUbNJeZGac8UoxumktabtPe5m",
  "key33": "4UsSDQs6tVSxjEbt9YptsgjNZirQsqWjYhijrWJzDTzPG54H9QB2G7NEMR29guHgnrumTahaZ5mZjR7dkBYKtJW3",
  "key34": "524MeSuv6CAYjd6mvE6SNfSZfxRsS2H1Qgy8qsECYBhmLDESSFZzQTwWEmtaZfAVnSbwVQNE7jGudbY93pN3PFZw",
  "key35": "5A9HTN5nTEqPXcuTEoB7xunQxdqVkbrfVb6cuekamGGqGTcUkmoQW3NmEKz2EmsPNvXfCTAf1fgwsaqjy6nTJ1b8",
  "key36": "fzJStPEEd78uaLUL2X2gp9gwMQn2ijJZDsC4xdyyDsnonhUfAySsEY8YDGKuFzCQac14DBEiNGHwHQwrejYjqR9",
  "key37": "DgdB4fZvDcFm9SDNizDo7ptYjTXHMDH4Lf8h1Lf4NhisXLHZhQRDuZdbPHVmZwvbVtDvaPzXDFCeGWeEbnXF6ov"
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
