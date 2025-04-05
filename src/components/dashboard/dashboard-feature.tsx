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
    "47RFyiUPtpAtzGiBbEHWWLLmzxdReyB2chxcP1zpYkJUsWndhUCwCgWLdvbGJe6bZKsXMhtxBmekk69hYZpSkWHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "389hoTGECi3Tmhj6VXCxFWTuAkznAtmFWKDxBrYq85aNHbRv5Gz2vDG6nH5XPHrBMfiFeW9M9z8YzZAHNhzpQDeR",
  "key1": "4iXJR4jRQwSAGHhPrBhcnergepeKtM3PehsGZrDSp1iemuxEZ7KwMdFZR2Yabf71sqF2b9xpT7kukmQXMtk2msxa",
  "key2": "mwFnkYhYSPjctt8Hfw6uYYQ7TXkmZi68DfQ6fXyrdxvk2qxVxZqt1KBTRac2DguSg7FvMqf7FDXFxq5oA5saMsi",
  "key3": "gCHA1YvHYZoZhrhPaUGGj3pVxnXLfPQmS9Ju9BWJ5zPSW89MPVSuYfkVgm462t1LD7qvq6XXmPrNGJoAFxGjYCc",
  "key4": "BgVMKDym3KC7mDmni2JDdwC1QZQkbBvvHdbVA7u44mq4NECRon72vvMJUgHVj37P9HAWFDYnjWih27aFs4Qovr6",
  "key5": "36pSdnLE3tFM3hZZo7pBW5syQLFiCNCT1FMZL7ZQzSZ4xqLvQ1dgrVVAnEcXyzSeKynhYu9sdJimjraeHTDGhtqU",
  "key6": "4WGebS416Ad8KTzCBez3rLKfvXP67ivZuGzm16DykHxwdximrrsNomHX3vMRRgfrQBX3Kkm6XnCKi2GvXvUqW9qa",
  "key7": "2z3zYQK5FetPrk7F3iQU6gRKF6w3BKbJVuoyS2uHWeRkWCmNVgjQaNxZJfFV6EzCTFMQ97Aoar5SnC3rxGH9PTdt",
  "key8": "37DBxwaSBCHdeixUpn65hSC7LrLDSAH7ph7GuQ3XRWZ6kuwwXBQix6Hf7MFCVmuaPA4XngVp77gwEDbhiHFEXj2k",
  "key9": "3qY92EKW89sKPpoEnnrruotY6hKCiW3wN7sH9yrU2UDRYPJenJc1riJ4r2KLr2uHwBfKeRrv9abkJA6P1uN2tbcb",
  "key10": "34So2d3SMehvqg2eeJ7tWAAmYTPr9NCjUiL8VQ9NixgTs1CXWWbw8av3eaHtijNH7hE4ke6b9MAyiCgFuahHoTtk",
  "key11": "3tbicjbk4FbLhR7mPYFKkxUj7rGUG71BgtU1yce2oXXZGTGJ7YiGeHoGbUUQdrR6bp5xbdEpHMaZhxoyHurkhd3b",
  "key12": "nKfzyVhwTnqFbhcavZ4xENsRN5okd5ikfYtWETZXWsXtaVMysJfcT18AdwkqeaiGsJzZyxQ5CZKXECMNv6sUrpr",
  "key13": "2Yw3PGtSGcBQpr8HB4xABL3L6YwyaK4KbnTJb5fybxFuKofsgKJBSwPSmjvhFfVRw6ukG4XW8tr3WvrgcrYURKQV",
  "key14": "2vmJJ6fKW1xnpbmKe3RvDggReLjK2n6qVVYfKL6GJot2K3vvVxcB79ZyEr1veWcYPucFZvTnv7cASuccyiFY15pC",
  "key15": "53ML4YgKC9brwHPrL5i2E99j5YavNgjNts7KzZwkaoSMaegiWS9cBVFTSn9h5bxPvFmQL3vV6DP7GULRNYHG4cHs",
  "key16": "Jav5xYQKNULpWqnEkDz4GVTqGsCZPgxGW2Fsfp2NuLGRDAnFfzYWqWjYpn2LKcJa4gybiSPbpP13tY9EsgXckEo",
  "key17": "4BEgQX5mdwKKLCzvXnCKkWnwZfgapGYGyjywkWs1VhTwG3VNnHpRNFvUawbt5iwRVwP5BNadw34g3zdQ16bJZmrx",
  "key18": "3JAZEHic9u7FGCDmMvC2W6jcdsw7NAV578pvoiUX9PZ5Uz3eNGV2aiRbGkVTxSdQpMLEdv9RSxBhvqVevx3z7NUG",
  "key19": "5eQ2eEAhZkBiuCbx5rUF4aXqB6E9WmucjwUvTPw695WSJPqUzrBsbdWxLTKurNrTzFxEGFb7YHYi25drTCjqrTEd",
  "key20": "4YbDg4vRqCnCirYMdaC8iUocaMC488jBUo7UrC7FafwsdA2RVXrdtWGYy9cDUuLW765LG3nFoHBFUvSNkDen5D5C",
  "key21": "2Aw69sKptFM8dP1atygphvFqnqw7Gu2TK4oTQ3jUmZuJ7FzeRGyEYRGYiMzs4z5cGM5ZyquoxJk5dmVzYMgEcRMa",
  "key22": "4TspeKxMr7j5UM2WRrDaNcndemDEgmXHGDopCcWVdQGQNa7hgYL221pC5H2cYyzGfUYVxo1YyxbpGM1EGanxPUh5",
  "key23": "2rWAG2MovifUR39Y3mbPWumbrF9UDSR1dJNM5zKfc8v6KAiEWbXioMnPjRbNPeoJea1oApvpFxzssNSyVZiUxRsy",
  "key24": "58x6eo75Tbm91LAQCNUvTPfgWWL4gaP2TJVyeHa5kqEsZTuXWvwuckGJ5r4cvzK8iZqPYqeJ2vBS8bkUqLp6ZL8k",
  "key25": "4wDpogCHkR5duuy4k9kyjeYHASotZKiJJVoPsZW2JnV6a5BjPEu3JN5wo1cXVEnYQKgr1FVUuto5pSUHDEeV9vmg",
  "key26": "2iZ5FrMie8EM1Zoi93kfNB4ZGUvkhzmq8e5HWQgzN6MSfQj2w8DayFCe269tQ96kxE6rnfaWda6MCxpgnSAtrgP6",
  "key27": "3GmWKd39m5RVyZ9QyjbQP2Qs4wpkZWUoAz93utK5uDCz5xxHaa6TdHpSqX2FgRNqiHxmHpvSSks6ubEJTLbT4738",
  "key28": "2H9dbWtLqcjzZQLj11JuG2zdhAicKfjZtGVkyom9dTshiLa69zwQ7uGQGMJV7LQSwDNAecAdT6vfjTU49vNQwR4n",
  "key29": "5fBexKeFVD9G4VLvESwUvay11pRxYyfQn8T1i9skHsQ6NjDWioZAAwZkANqofMREzxBSow8NWNhWJm8i8hHfF9aQ",
  "key30": "5F7HxGKEU5deqkUnYCujrwSGUJ1mfwQerLj5W3HJEEqCM9NsiDy5gYGfRFidmSXQwR4jkr4pogobv6RknAFDtutp",
  "key31": "2VqkaDrMNZDVJmzQAvdMpereQbgVGjYgULa2nFJkafsD7yVWwZcyuhX99Gspnr4PP4CBgCyXdPuFyvjyCEAJk1Uu",
  "key32": "2PWQYsy1vS2Xgd2MJwAexNAQjVz4uwAy1Y6cszH5UaHsbTSVBVipsZiH3PXAL5YCtUX92tcvWNpJV9fpfi3Pv1fh",
  "key33": "566fjwdnMmRAgaB1PCKTfy3qu1X2UTPWNYyKmTk2otfbvjBNW1Xg2QTRokYMbPy5LMM1VbZZky8rm1NWphN4d3ki",
  "key34": "3o4vGCpZjkGFFHrwvTp4vn5Fib1i1sHBoq5y241c269wpeKR4H3tpg8XuLCaYfZ3xtpTzdNef17wdnxYUpRyX9uJ",
  "key35": "22zgApsXk5J2LgUKNEAy6rv1zBcXjhCPHhuW4QgreffgahZACheT7bnt8Ast4LffTNnfrjz2tLz2X5mqagKYZxZy",
  "key36": "2UxqJQ2DxZQTnTY5VzLhtKwaNqJz7TChu8xPoywT6qtCc8MQEoqCeDe9fffh29UrxnwpN6RerQNPwgWZD9wz5pPn",
  "key37": "2sBK1iyxb1XetbLy3SLKksrvsPRyypTvXWth5KafoqAAcT7dt6t1YhH9suSFwARQGaPqimk9DVQgS81MBXUMwhzb",
  "key38": "28LDHRLpqf8wrGwUSKERiDcNZoJXLxaZcJPVoZiQxnNXK27MgPNVwsEmGDjVtUxqaVrTSjZMdj7i5vVYmR6PFHtg"
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
