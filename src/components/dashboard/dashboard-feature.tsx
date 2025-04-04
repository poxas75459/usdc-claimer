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
    "2fyVN3YxCSuxPtzmaRDsLAhEcM98PFMAChvkCFCw9Vm5P2q2GzPdKRjtRkMCjQhpoWBx218HdYoVBdZKqPrMnkxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t5muVbBDns9XNFE4EviyMVn7yNw4LdEXbU5yjoK8NxF7GQTo8EG78KgNkTSyFoKrSjXjffhmZjnQa1ni8Lss2UJ",
  "key1": "3fSSjRoFMybGrhyKJ3x1zLRjm4APsbGqWim1YQsVx3cuwkXXYBoLZA1j3DL1XHhcUu1QzBHZuKjkLsR4WtgP22hG",
  "key2": "53i1Lc48agVgya3Hrgyu1fQchqCLYW7uGPDcqs7mi8HVDEZrMGWMxge9SgpYL84x7yVXwoX5p6fq5sNwgUSCcLH1",
  "key3": "31ZYJrLEv5TCAHgyZeiDKMfQZJyhHYpUa1vbyMJnEt23jPkMnSQzieRysD69aRgfgGY5iakKCe8RoBVsTLYNm292",
  "key4": "4P2AjutggRGAqwVBoD1GDj8cohNbpWTBfA3sTfGF5t7ALJ3xgkxcmRnfV6bFFsZkv1UirndugHAtPQ9UbBMmrcb2",
  "key5": "5nwzwDcYSQTQGdhAiWzmJaNTFgSFiZ4Ww1aWJBjeTiZvjWfn1MbwuQQWwwzPeJwTntcvC61YHm9Le7Lnwprrdub",
  "key6": "3F3eLFNn1HCvjvjDVFh7qD2yDdPzwBuvexo6SR2LAYiQ6raQCiosVHrqGKvbCdJF244musCCauMPEEH33d2axRQx",
  "key7": "5TK8FHWbLmBDP2L5zAK7UDSJwTVJfnBT6r9sPdovup7k4QwveaAMaVeiYwbKuntC1f1ZiHNR6wvBDuSAbGk1YXVr",
  "key8": "2zS9ohLxa3W2FarTNfnerY9Rw86v9ZSt7n6NjhhD5CHRmf7kFGtstMmsWqMttx3t51gVLQbUD6rTsdiAizQvhzbk",
  "key9": "4KZigLWxs9fz3yhthnjn2EXrY4o2uvyyNA3vJGaqZ5Nw2L6fPBdosQS15dbLU5ZANkuAdtQvVJVFbKwTapcUF1gz",
  "key10": "3b7MR2UEsB8MAHrF1gZ6jEtagr7SrF1B4ChG3UnRjcDvnxaCSTJ81dPtojj8S2PzcB5ZkhNc1oXjypfkbWVRfQfp",
  "key11": "3Sf4djacv4XjqYQHNjHa7rXKzB1pEUEkkrh1trdhsrxGLCFnjHKiSM6CZA6ibXAMQqVR9BDxLge4qC33HCVRn4N8",
  "key12": "4c6UDdNFMLaMjnVvMZ9ZabfWQzcPcR4agm7d1AibswoYQAs712ctbq1GTrDtuxovKNpVBDrgwAduT2jSV5vkW5t2",
  "key13": "AsmrU6fBjdMbHZZNniRPJpS54AyZnyfcNwcj4Vcn3u1feFCT2YbohPtjaSrko9esAxkFVKAVyXJy27qVwhfv2d6",
  "key14": "1p9bCSKK99f4b3U3rKv1DJMJueETKBmARCa7ezSc8i7KRiJ6KdQ3uAUh8UtvuNtPNzNdxDNYcvAT17H8CuEQGjf",
  "key15": "3YxqvHcuGDd2ucj6c6dNatTags8Ei7Qb7Pdiu2MVR729mDrcCBtNS2Wo9fAVZfHXgVfYXa1VHiYwXLwuAUp2yGKo",
  "key16": "2ExQa5nK5YrEPNjkifJg4iYbrTky8Rjhv4E17zkxgxk53Q9Lj56E6vLnogPYofQoXTRbp82ubyeSoESCq1Vn23sJ",
  "key17": "5MSiCqhUpamodcbEkcePNd9wEv88hg7hYcpGLdqypq3LJq67XWP9AakNESj3W3uegjP1scTjzRdHMTkXP6BtxVQM",
  "key18": "23N6Dqid2goosbfNHxL9incefyF6JkbBqqF9vX5icTEsCDkAdiTZzFdGC9EYz3DaBfQ5XETBBoz6uFXRKnW92Xh3",
  "key19": "3UY6kBHzb7oePdzhsmBSor7H3ChxSRcqkW9159DS75AgHqMHBiW98aTNRDMWFrP7fEkmSzsZ4ZXWvDvcc9gW65M4",
  "key20": "3LVD3X9xQvFw2bnTG1JmereCLuJJMo9mhS6u63YVHYYFcDFBMFzcxj8Vq2iR68sx161uFGCeyYd5CFGKt6Px9DZ6",
  "key21": "4StCKnbiGSDhQQ1kj64tDGozanepBVpaZZWxXUxE5Rqa16txzt4oXgdeFcZpR96xxFHNcKe4aYuznMKWSCgRymvU",
  "key22": "2c13kbsydp2G41s9eZiff5xY37wdaoj63Q1RAnPKZ1fjRweajGN44tQaXKzdZedLbuu13U6GGcHKWiiTKg9Kgif9",
  "key23": "JUr9THP2Te2My7PUodcGyQJsQy6Y6sVmuouWNeKNwW65TZ7J2RJkFoHXPKXi8CSQXq9e8REbq2LN5pTpznZczwr",
  "key24": "4dGxGSxBYRWZgECKXFcynmU3bSptGtFNLnsXKhK3Tk2fNBwRoYuCwQZWjhdeZZTnUH1xtQR5838gdHFGtPbto5XN",
  "key25": "4K9CMBwb5aEWYhoCngHYPiQeB23JefrWpjCyKPDyQZiGU74ERW3A2sbSs2JR9zyGDSqfARgVPk8PWjPNkK8LNe8q",
  "key26": "1pptSnQVncNcmbZWCEdCymYrA6hzrjNNHUwDAydM7m5w4KBSjf4cZ12V4KK9VCE6qi3jW2iT4y6CyuvsrxwnKey",
  "key27": "3eJcswEuj2RoFgCVqtkNYHUTm9iHwswwSEDgbX5JNNnEEf43vHR1Hw4q482bHbWtaY1AAkiF1pSgAEwpvhedncPH",
  "key28": "5eRMXvvMMEg3bbY5oqs3PkQjKcNtbkeeJacLPPuDjx7BDhBp14tni2DNXSkmxjL6Se6ZAvgEkRmKhpWdjxJncay2",
  "key29": "3LdXAHxVJ6zGDFZwrrVbZbz8N8EshHj4M2keXV1JqCyKe3ZJgfZ441DYPKcHThDdUe8yZUtLPEj6u11oK6xDy6Ew",
  "key30": "2TbiQofCJ46wUxqNqsoScdvsd2zef7koQGCazUvB9GjmGkBeStjzHDybEkBtWLkF5CDSmT8mq1WpgeXDyeAE4ed8",
  "key31": "65DvpCHsD46QTSceC11xKBnj54gr9xppusiZFGsDnwdVW42xuxoTooa2foQBKwRqFdiS9kiSvQJNSTbhyH4G5R3c",
  "key32": "3tk4TYVKBMvRqzufjyHMYuGMdx6Jt2g1WWCrsHqsGeyZdrmy6ijkjhMf37TnSS4sjnQvRWvhdwqC9ihoi6ctZ4F",
  "key33": "5xJmt1Axv78Puq7JSsPNANTDuioUL9H6XqD9ST8zNGc8njk53EKs26kzPSBwhzs1JpUUCrtPztWe9ejEHZaPeaa3",
  "key34": "5XFgD8fZAJ6JDqHX3zMatPArwDHZzJ8X9grf32qFgvqVQtStoVPp1zRumRYMwYrEvBTC8Xab7PgNZxB46XZTQp8z",
  "key35": "9JM8BWCrdz9YizixHAfMRLfnsNJVvKoLjvPmcdvNdVfUoPzGd8j27Ze3ydhi6yiET7jswk2ZvA62WMib2kjuRmT",
  "key36": "5bHyRRCVmpSV2rthQCqHtZNH7SEHMwNNp9ze5Jx7mKLfTz55b8zUNgJJF2izioWEqfYqdMwYfSZSBWxtNiPcSh5m",
  "key37": "4BWwfXkrEQNtySD9EtjkqfswVUPL73s3AifZ3Qq5NnkihphbXsTzzYRT2P41pzG9ZZECxQeeKP3dR9PFPUfRkVS",
  "key38": "timefLdrGLYVNQR4diQuCm8VV18D5rtG3vqBSzbY1XTcSMy3HTb2YyjE5T4qgDFdQvaimxY7aBVdcNDxfEuhprN",
  "key39": "4tVFqet7eKsb5ucd2G4drrMyQc1NFiHzCaLwe4yPKyyGL9CyfFVXk9Eh91xcyuzS9aaatn5JEnMQnki2Aq669ohu"
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
