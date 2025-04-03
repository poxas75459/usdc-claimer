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
    "3qp7VLc8tesz64SbfNN8Ncu6y77uRz1kAJip9ADziHmYEE9zJ3MhtrKCWHvHL9akaBsMXUAfwyZGXr9JoubeeVjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VQtegVffr47TFErKs5se6JDt4JReoJDAWarFSjATac8RQYbtXerRb1VCXHddWWngjgnRAdsG7kXBRgXMsoJd7cL",
  "key1": "3rHB55QnmtDDSmHcFquusjZmwtiNLusEZyozyYtqxpAtGxyqiihv2wCe1twn7XptuxppV9Q7ZCQSvDjcMMH1gauM",
  "key2": "4hHy4oopiALZYwoWzmCxAFnaMKMFuc9Vyo3RbdXMRjTUZJwg1aZt3Td9QFkqHxHmy1CHWVH55Cy7vPZUAuTRHraF",
  "key3": "4DeAJJS2pRrLnZmwxBfEZiSd3xYcFkdyta5dF44wpKd93WJvqJ4iBnH6KdggsRJnc48tukFc7ykdY6t9cVsojmx3",
  "key4": "4PtDYi9yCS3chxzHgRi4mfVwBmKp74gcZEa7RbUyZqJV5QtbRyUMCYqG4YHRVLJSqTc9a5nSqRs3uZjbNpGW6g3s",
  "key5": "ZXdB9oWNdJDKkSWxCt9p8ZVG2NbbTzf96nfCRvJM5gRonHvYuKteUVyHrECu38XVf8PGNjxsciUawAudiRXAFFL",
  "key6": "33gW7BGeGjSnaHNkka3MxVaB8LkJLrnkgxhHLKueC3Z2wsQBLwNtNGTGcTcz4eyiFp6McuGRpF2vAdJF47meiL6B",
  "key7": "675q4s2taD6tVdgjxyuABpzGRHAYs69D2qcJ9UCvmjj6ERCPeoE5Pz5abnQRJ8vYqHG8EpgTJqLC6yjQwch1KiWU",
  "key8": "4N3jvix2KbPpXPoXJ825yJytETkfm2eXww1EqNzr6LeoVrAaGFeNnNGrmWRJwXFgJDMM2hpQSjHZxurxwfhuz8Jh",
  "key9": "66VuPCzjtLJ3MzuGKhCs8pXHS7La374oDZE5hrRaPbRRCA6MfrZ4xZhaqgWZqXftiq8E8LFUfEGrBGqB66Zwuz76",
  "key10": "3i6x2XyBDDpUwchkZskGX9qJmmJvhS4LTT17fSX7oigLCyWUE71rGXjNE1EXqhyc9eRAJwSHS76YNPbJq5igCiuE",
  "key11": "BfCPLHEsE7kCz8hnHF3zxZXZ9sSnYSYir42CthsrDheTwFCmfyzmdvPhtDJdSMhSFAs1gavEz3edEcWpigpfRcW",
  "key12": "3EGCavmZ2JrHAWYx7YePmB4RCkEf6dTqFjYpS1yP6kE1AgkDV6QrT2esBdefo47KR7owf1SeMngt38quUSkGo1ZQ",
  "key13": "4aoC8thV4yv1SfEjE8yay6edpTFMieRHTmPKa2uFeCmyxcoehk7fcniawMX3gdaX7puYnCk31hqRU6rcESK6j5Ze",
  "key14": "63stZF4VChYigmY7hebnXBArMrz899ZiTm9mjJfCvtFJx2fxb1WFL2mkzv6BY3KdE98Zqt8hWBSN4t5WWMHDiuMZ",
  "key15": "2aVLjoKvKky3UTk4gRkPkuUy2cF3MpVUU9HRGn8tETx8RF4GMQLxdiufr8keszNUoVZtSHtwetRHgUkVdNnp2BYi",
  "key16": "5imcVxZHUVHFHGi4eCbNx29CtqHpYzNUNpM4KEPFzP6X5FnbUKNLGxDZ8zhzvAyvMHEXrGNKwxkTKaXQ5rYtSvFs",
  "key17": "a8HRp1gvzpAm4xR3WquMkfXEEAy8bAAxQvDLfCsE4LG4hDQ1qw9zRm1STfDVEkd3FGxxS7FuvPivWLuCKajm3RH",
  "key18": "2uRkThfTav4gRRuWQ4jLjDoFpnxhEvJcdCXM7sieaCe9isgg9oRqgirEZ8Yt6XxLw1EjsnkBBafBx1AGiBNE1haR",
  "key19": "2wNDLesNpwFZqojvDvWHxkG8krXbY4GepH5C5eCsX1MZHG74GLRJP9AJcXSR5UAWv9J316GxJnVF8h3nbGUhXWJs",
  "key20": "2NcRGd9iUd8SumDC1uHtfvCAznA7ty2Zzdvn8tFA8UCkrTCwVvhLKP7ibanbbcsMa3dm5e7Q3yXGJTEzurwQ3omH",
  "key21": "64aCtZzcub2YjxPQBnrL8eTFF83duqLygEsCeoXHxuEYT4zmJfoNGNAgfD959KkPY6bsd3DamXZBiAaSUS8fh6FR",
  "key22": "4ZxCq9xiJJGD3cnA7GvdDqLBL3ybmK1ygqjdfCxAzPiPNxVZPCGhxfr9nnRV7Uj5ug6sBGogAhfQQFJqqTtAEhMr",
  "key23": "2zn869GBr6qxswzPa4R4e3F7WHWqjJ6ys192asoh9tUucDGNZPLJxskqzhsSFXyQBbcuJP5SkVSsynyHz9MeYsbk",
  "key24": "hWgXar9YfEVnxwHDoGQcdqVCKKcHvbQkJQ753rFZNzY8z5Bgi7vKN4Kykgtf2Ew7AvHBs5TadW1Q8Ct4WdFXLz4",
  "key25": "4pZcrye8ndkdd89RqbxuDF2UDCZEXdnzV4cLvEsK42f8CesqbkiAHTKVyXVCLfaxHJynsk9AZNqaCnJimjpnPsPe",
  "key26": "WijNCQRFBcqTtDAJfqgfYCkKcbUxD4W7XxYD5PfMJK2EBniKBnNHUJEUBMbgciwMH7vEs8sQmBVjpior5HBHomb",
  "key27": "cjY4Ng8Yf3xqv36PRPRUA25xUhLEGDSASE9QtiuFpTjxFTGRTc5vkArRSFWzZmQyJ51HkskSDDxg9VJGvTN4zL8",
  "key28": "3gkZo48cuPwvjGJuAfP9SMhhyugCFxRC8C7edJAbEvBH4DPQVwkTxGk2JcbNP4wueUARPHfwVVN6i6yLNZzHDAG4",
  "key29": "5sgJek1UY1dfxY2sUURFCweCB7n4qQvxUqnigfhZJpMQpVfaLykRyP57W4DYALQ2UQBr2GvbWFNfcyYSMFZhP5yB",
  "key30": "4WQy8Q81H3H2V6h33BEtGNtUbQEp1Niahm8quqSsF2Af8vGnqcVv4WHEF2qYJmJELipc9kGFeNRH41B4ZdzefJ3T",
  "key31": "4uWSoHCwcLrkt4vDXoFadgWVpc9kcuB6qGy3CvL9EE5hndddWg6avg71XCTeVTQih9LjDctgXYZiWqgETpFbS6tG",
  "key32": "4fvtSYVhgrz2vaFm44Wtuy3MbLuXsTc2F5ddpa8XmWyD2T5YbLDhgetqbSKo8vnjhdZJu8F55WG4kT2VSVTHXChD",
  "key33": "bp4YayojM4ptCqnZmLRpv3HyL5BiHTrY6wApRVDE9QGoHLEjMbq2V51Z5K8VjpbjCgtL8JtvEfxnjo6yfy4Qf6b",
  "key34": "3rPU8RGGUZ4auxceSRbrXXvaTsNmTxQG1umNdCTEFuFt5YFXfgikryuHBbqEaxGjZrbQ6jC5AVq6sEffJnhVgp1n",
  "key35": "4KdRA4atNd52AQRZcHpfLLSZfeLwV8TXSGMSBpCvLasJK3J7DuWcywsSpfdAvwcY6YCcPiBxJGTLHsU15dVsDmYM",
  "key36": "2TRbYj3iNmxzrVPymJNWaNSURjaybRRxTT36qvgFhcZLuKWeztxKQ336eN7cSb3EbTsUz4gkim5U9iN7y2nKrJEY"
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
