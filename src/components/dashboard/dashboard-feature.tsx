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
    "YH4hYAZ8FNa8qTW3pDYy6gqH7gg5A9FfZzbr2mqhBWJ5Yz1E7kSu4ytEtKmhXQkMwNPXBzQpE5WQqPn2vbLwN94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GwD9ZTvzTYfcN5qGcwHtcLJnhcMFJMTjg9jSzPx2noLcGGNWqijQQfowXwqxyvete2FBE5E2mfoK8dkN4SQXsC2",
  "key1": "2EWqAfnWRjn4rzDmQV3kCPBAnNNtmf6nxMHiG1yWB8ZDFbxA3kC3iBctxStmoz8txJCEW6HNUERob2oZopZ4RJDJ",
  "key2": "66Zrzxcja2K1ZgxnfxRvxsdKZHwhAdPVw6Zn8Hn1iQ3DJpxSbuoL8bwLioS4fd5jNkKxYHTtHgxReVFgMwga9F9o",
  "key3": "5oFYXUV4HEcyksZxbSj946kQApkcL8yLiKTiPVUzJLmFm2YBqT6x5uDznwhQ17ac2D5aYdEtqaM9AYX4TA6W7uPB",
  "key4": "4i84Dm98FRETSmAd3FvWaiAg89KoxEnsqH7LLnKwBaN2ztzqrrypMZeQbmPmHJc5DbURbhCEN8usf2Hxo9uqX3uQ",
  "key5": "G9Mcyc7FbScxubSSdZNhwk6xMpjudPrEUrSUBxmwLNzDjgRekEWXBXHUMF4HmXrpNkd6Eu8Wzm8zJCARKoq2jap",
  "key6": "4PVz7VcNLt353iZQ1XSfSj8Ad55fDshAs9tiXwuUcQYBqrAfBz8wKqMvu1f72o23wM39772N5J1GSitbYXHcjHJZ",
  "key7": "3ABEBgwx2FDED8YD8vXwrai9ymYifvgrAXP93FHCVBAp57fnBMuFaZd5pby5WByGkiVxiZpRprspuwjhkDkjUbDa",
  "key8": "4XaTpEk5eamD1daCsSUqg1mAJcVeqUmGzVDF2pwrivZTXS4kNDkvRAPZb8qRszWRDcXAN39kuisscJSnW8bcxx5Q",
  "key9": "4fB3hja2gLnSfKKCQW1K9fLAvUpwepkXW9yp8VDwcPWazLSmviSNaFRtoDLdwmihGUqes5qvpqvek7PMJ3ys7du6",
  "key10": "4No63K5ha7kh2ueFcxNu2g4PKM3Ms8UHLk2Tf5jHmQMBpHRBiLoHhCrBnb8aE7FyfDtPjwEhceoawW6QTY1DaPqE",
  "key11": "cv6DUfNJVMso4BAiazWWqFNeZc7Xeo2DMntvKULQYPBuTFSCp8Z7qeWWNpHGH9fixc9yWhZD8a2eTmqYZXTPehT",
  "key12": "tkmvkik215CofA8vPyxGi7biZtSBDxFtiTNFBMEv1d45B91AUUZqyd4UWUzEUuwAjzdVgZaCoTXSjrWJs1pYFjF",
  "key13": "4TjrQnmX559QNAU5fMBp871BQEdY5WRELTQTe4C6UwHCJy7dbcNzEFPox56eJnEGgEdS2Ji3u7BL9cqmuE21TpWX",
  "key14": "5uxnWTgTkS9EdzjYzBZDcdLpk8JefqXaGPSStfGxj1Bh8aZv4fu6PQvhKFMCcassQ9wcNDFkcuAWbW187HxKe451",
  "key15": "qBvJgvZEXjtkRAgmEztTLKnjULaLGgh9PTLZNCdcUKwkgbcVTy3sJXkodet9cHL9jwkG6NBCAYUyoxLLeGfVXd4",
  "key16": "DHMxvZUMC2kjt4ToYfFK9m5nzXPKrMroC6WfxYSc61UgLm6XXHEXvqjHemhgPUFJWK35d8Q5QSWP2ESf7NTErm2",
  "key17": "5x9DvWEP9G5U6PZDCMJBTc9Ysuoo4JhADyBuipJu7rjNwc3c87ZH94vZ2yzUPMh5FHVZbSWWbkptDkmKQ6nSsm8x",
  "key18": "2RhgWmSBbSHASXudfxHm3V6SME8e19hqyasDi8Z9wMXWYswdAjkwSQNzpqKnL1s3eLfyVh1sA5vGWC4DHG5qE6sq",
  "key19": "2r9pZxwL5kC5VVpNe48KTf1y7on3kJH7XVDAZrbe7xbPBqmKdEfevJ2XRLJhTZhf1MwUvRXZZA6wX8TTb2JD5g7V",
  "key20": "5QMADquKB2xjkGXXk6GhX7zgHcWSNJfd47mxaAkNetras9UHLP9PNqxhy6c4yC6ko3oecoAkg9PzfkgT5coHkMW",
  "key21": "QvBZGzdrWwkz7rqVfuFFGCMPQafD8ZtkQdbUEaT88NJxGrDeLZeFL2gzKYbQNzNTkQomyrxTdvSLBiKLyCQyo4t",
  "key22": "4SzL6Pd7ztELKJzSHru7DndXig8jg4qMQdUAE1dGkhM48nQq8d9yh5kaG2vwNnamuTfY7CuBXBDjgLx7krhyAMK2",
  "key23": "2iLJrEkRyDkro2RL2EM5LAn8fBdkNLaHSAvMmwG4WwGCsrQ2dzdPudmcvdgFLpMJZctHhnihSMg8dZekUiQqRCo8",
  "key24": "23q2QFAEmczDyfAKaAuVk8zhURh11zzpJ6CGpDzF1235462nT1ChQYZxKv5XUWfKmHUN6tqeiaJDMCppcHAUrxwU",
  "key25": "3WsZL85M9mokAfAJPZRQ4aA3TEKeDJg4gGcH9XhP9N1o2RK2cDy2n7hQqRTEzERXwMag8s8L85unpGtU1FKGQYYD",
  "key26": "5n2g8juiB6poxdhEgFnUzUdndJR4ZxqihtWapFbVU2117mUxk3yds4qFBTSwKm8e1LgGEo6cJ2u8HL12J2BUhknw",
  "key27": "2pko5B4a6pH9MWFTm6WztYjND8xJA3veQpYtgaUZ72fGtQBcd71XBjsZNfYpyHoDbxPqj2niNVqd2BBdEr1ReNFr",
  "key28": "2QvRbmiBF1uQYSnT9jpYX45MXziSF7fVRBChU9PJY2fbjNYfvx4qy2VE2qGtCyKKv8KoW9LexoLvEQjtcknqeCna",
  "key29": "ijBdt6FZpf5rBFhWefAM7jt5exSyz8JsmTffHhU59rRtVe2y19MJbkpwuwcUzkzvsyTd9Sz8cRMLmpBRLFwYUxn"
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
