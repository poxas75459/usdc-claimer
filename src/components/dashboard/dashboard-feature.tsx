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
    "47uFLDCN16qRynmpy1WF8qn2NVjhAE7FQh2SujiHodXHv5mqroxzaqtbGu2hiE86LkCJDQ5UL4oLa8VAiD3xMKVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22GrGLjouLvi5TUxQLSCynG2hQhYcaiZ4ZscC1HEpqpPjh5yWUBuCWbsb2etfGMKd3cZfPoJksYmx2YCD6nm6V3F",
  "key1": "42tgCZNYaDQ38uuqbEFFkKkVKN7dS52qvkL8txN2qBV3EgzmqeAhRNUJXqu1n9DLQq8tZoXXL8KAKa6sodMGrdXH",
  "key2": "62SpMUZ6bq1nQpL3VVhvZjRcyMKjuDEFajdGfFWNbqKd6WccDZApvsz7U632ycYayaCf3wgiYnK29HnC37netrxM",
  "key3": "5Yjqhio1MttSY5qshKuTPtrGGfFM9iwYhmnc1bHZCzCbSbUSohpwVSK7hTNARFCrPXLZKkagoL6sd4sKdJiLZchi",
  "key4": "2eGonhegmq3TrNhs3TUvmzicKSPztKJD55WqTuw98niDQ15uGShmhkCkwKJbXocjFxZzv3zPAnqV38weLu4hzywo",
  "key5": "GKWty1UU9jJsVvaD6zRfEnrjMsaA7nAwe55mchYc5GmKJfU4TeRnK8zSf5fjsC8Eksu9AMwm3oooENQKmGyNxdA",
  "key6": "MaNQtx2zsv7U6Xk88hoS3LArggYrnQr9WYbrJBHcCBXLijdKkQzAii71GppMB9htDanxxkonqrfa3GT7zrjoSE3",
  "key7": "5XChvgnJLBvhFEwfeTUhkD5ZJ9rd7jCyDVLdhydDDoQhNeBub1XCEqEvVQ29DWAe7MEkNBLr1DQM3kqU6EBQ1yFR",
  "key8": "2pXkmFGeqTnufwfkMB8WaNFAeKRFcBdeuvFVpSmRq6oePpp9Xw4spHt7wgM2uMQbHWkfqMLMvzrJnnfFvQW1EYVh",
  "key9": "3UJp6E59jLgPmq77Ewhbut8RBNH28Y8p5FbwFK9BN3WTwQbVRMcoTnCQci5jZyo6RxXgSc8rrKYj2CwwQApjHJWa",
  "key10": "31ygLWdTSEuy3LZrjaHGcZ6X34yWSjtASprQDWG1sBWGkSrE8yE2AEC4C1vDY4pnzDnuJRQaSiRvKv9238PF1njF",
  "key11": "2Jnb6eq3nxHLSKLg6j9XqwuQk7yZBnVSDNc8VbsezukgFoavmX313vgJUkjBPV7giZZvFbcFMusMagwLmFTdqpGk",
  "key12": "dnRdTvwzWdvbofs5xaGaKSvCxXoH22azWpaM4px81uFFEbbvPeZdLuGk5D6sAE1SbgNRu8eqNZy75rLQkiBDYhA",
  "key13": "66oj9UGirKJmnRhXJcS5TPWvH22h28UVqi7D7SehAZyL1UYwTMtg3yfGSre2qhgZHWg589oj3iDACD9CpgMMBbBQ",
  "key14": "23AC7J25Athe5QRV1PPYfULe4bqFQrBe3aLTNUMi3p8hUYqHBy6Pn3N3WTmM34BBY4YjF47vUpxKbHgcwLWft87z",
  "key15": "4nvLhSodXckDpkctLFxRKLdy8t44hrwqPDXDLyweURXdc71zeEcH6FbBbymFDaQEwzCcUci6yTvdRfc8DLqq2zmX",
  "key16": "5YJssP59tsAjmEy8bFCHUJYTxFuqTLUgVTJiHm9DUjJDoHfFyWo4RXCHGPHbfuw3JozYFwA4ki48yS9Kycbgy7rz",
  "key17": "4ZdUW5jKqQYiv2ofRCSt6iaMN6CWFoKmB5yNbqZrgrUMG8GVVRYSJFAABk3xKA7cj7U4J8tsDfV62Cm2KANKD3xy",
  "key18": "3x3qE1YDFbrAQgMAH5D1fczyCw9anqrH5via3fjEwn6rVgVHM2GrmUGRt7GTeg4n1jSEbqtf7be2bCjUdoVWxan6",
  "key19": "2T6XBiPq9BZnG4hLZvgKRJq6pCB3JuCh9credTFmmxpMS4NBUJdTwFxmWpAz7tNUvEJzAmPKtT4FJ5imecyXYf5A",
  "key20": "54Do4pFSQhoR64uSctaewEg4gMWTZ2oqGaZsV4BiPn92WNE4W2mTg1Lw7jHdt1YGwzCZamWWXwK7TGf39LmbwtoJ",
  "key21": "V3W2BsknuiA3wYgB3V2VnzYPMyLXjw9yFxkxZinVGJjqN5qMhyY9jrjhK7oDi7dZzuobCydCMFe6jqe3wfy15Ns",
  "key22": "2Z8LYJrHgdThgdseet9kChM7cxYwfXnQ7qpzSE2sM6b1cWP7XeRGfxYnyJa9AVsrctVky9VUF6oek7RPoseS2woq",
  "key23": "63LV6u77U3ZvpneqCLfK6KNiZq1sTCFPAf8VoSto2iao6DaSkuUkHDWjXqS5yxUBxGQMC4KSQikmt1fL6ePFQW3o",
  "key24": "355P1mex7i8Ch6P5jLG8W5g3vTTDh7zzJhM43GLNESKh9vgoZPxKfy9ZoseRDtm8P5b1CeMVmZ7qRpr7gFgGEt72",
  "key25": "oP2m44nvcHUrvHSj7hSmvtpZSJ46cqzY2DvgWWbTUa3awVJbL1Toq54zLSZ4LZnJzt5onFtW1F6HioBJtXJNZjN",
  "key26": "3ns3XH55x3wu2Bi9SejvJHWKstjwRov5S9Y35XEgJP6ToFDkLPh1Gjrucn5PXC7KSTiHmVquSZ7GmWRLr5ZBXAys",
  "key27": "m8oiR2B5jusKKaFo64PhwKEufp5GRSr2ASxyXJYc55rQQMaAqt9X1hsFJgpKeLwK4BR4hjoWbEA7vbJaQTBmCVR",
  "key28": "2seT786a52LMrqUU9fRjqSZkbjRQfNEhQNJcpKSNE2QR32H9KxXYM68Y6VcPjY17ty1kYKGWyu3bsfd7ov1GCNua",
  "key29": "3nS7YP4SYa9qp7nUJckgH1gmEmgcRPxDUQBU4jdXRU4ca9QDLEDtYoerzH4V4xnCUAYoLtLw2mpy33Mmf6JhKfET",
  "key30": "2Hh7T6uq1AicycYdZbt3BJERaCNjymyazy6svYdUjbfzBKZN9zeyqe8dCbNbSbXJjGteFP92iX7913M453Pj7hF2",
  "key31": "4sbwSMAe6YGinJUSo2SGqciFCaS7ncDXgwbk54bT1g9e9Y2XrxZ8AkpLuJ4K38Pg95RgDKeU8uSNEChadBioULN9",
  "key32": "5p96DwmP9o6mLfexookuVmegtxTqSdUdk32q8UuPiAXJ69NYd4dUEbcAfZomMLz9EHCk3SnBA92hybfiB84aS2zd",
  "key33": "3Bi39DSwHYWzSXK9JynLNbNw9hdHXdVGpv7V99uGYA735ib2Z9kKfaa971bufDKHdHhn2SBNX9KqMCzAdfDrXn3a",
  "key34": "ornhvoffr1HU67ytvjmUi49oUkyDm7hnMMu8gE1jzMfA6ifsTdUbhFyhD6a4niJYgtnp1bA1Kdxs1TzEXHdY1Lv",
  "key35": "5ixrYzUS2MeMS5giB5TWw3H5xxdAQgXiF3UeSuTmv17FURkudpuQSjQWPJUoTdrwRQ5NtwRPVoPnvf63MtJ1wmr4"
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
