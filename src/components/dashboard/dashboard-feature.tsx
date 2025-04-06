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
    "5SZauZWBzabnzrmjoBtCi5E7xS74qbPtiUDaytska6UiVpBXmLJvt6xB43znnkZE7va7qrJESe1zVDx6o74qAbZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rXViycmUDEeo3p4M2DFs1TyrqNpx3t6L1eLy92U1XCda5ckXSfVduwv6qG5QN419YrCnXFLVVpvnyyFtPXjw9Ht",
  "key1": "219qTCQCLXjWeZqXSRPRS6qBMnTmnGxtqDkGryp5ZLGFdm24VBxXf51r4QSFySyvkvZN5SRWnYrowRqG72wXHER1",
  "key2": "3hswHmF9VnCjjE4NNR3BbYvmB3Tf7pSbuXx4m4hCZN5u1ftPsLPmDPwU5D9NhoihZHjY3wwHhCAXACUs5gL3VjuW",
  "key3": "2wvSRgWhyUJzVm1pn5NoCY2mYtKTHwAWTa5ya5ALEpFtfw2LAvGZcComDHnca7gLx7YoQtNCydJjwFfy7WkxTqAx",
  "key4": "5PNubG1WtySGVXsBVza4ocKuSSCg1AwHQJeY6K1Lo7gSTzysdkEwr34Pq7rXdd7GUJ1PHg3iEJu2cuNuAWjrPJ24",
  "key5": "3NzG4AitZAnBwuKDWLq2rYMK8fiu6KBJnzksS3o1XHjKBLJTgDdb76KfjyffnRUMSqtahGQ2AbkFSpWfDZ6xphxq",
  "key6": "3gZMneMERAXRh5maUdcgu999NWDPXZTsm28BsaBGWoKa1d583vYaQXrwudfRsRJtbQeoFbmgDEnvETRWK4Wu9dT6",
  "key7": "514bdmaFnQHTXNa5foA8w84C7JjEcqGYmpoDJbe6UcU9uAQEbbHY1KsRsXzRLF7T3Fo7YpZHkXp1anvmFG3Xjq7x",
  "key8": "4J6p9C9fuvuPuBeFKv12vGax4VE2WQ1iCx8NcFmPZHEsvNm5mLVdkQDhC3s3XZpD8nAzSAyW1XuJLjYG4Y43qsVT",
  "key9": "5qEbM6TtQY8baCE9MMzvn3FobQUw5LthLa3PJoUD5H5E2Wt3uWxQ7cvAsgT9jiTK7jCvC757mELLPR56h3AWdffm",
  "key10": "61t4kcabghn9C29ShC4ubYCapvnjSixmETXE4Kyz8ykze6C7bVWHuEB6JK5Z8rV8YkY9eupa9EsoLMKfpTGvNK5S",
  "key11": "43e7s8xdXk8eNRarY73QVqM1qK5z4SQDe2La8hKTuemU8ZGzLBmv41NjYk9hVKZ2tZZuZgXVork1kP55BhM5jPja",
  "key12": "3HjjY1kNUmzo7SnVob7TEmCw67BcpLpVd9FikCAqLKFbvjAX1LFmBRC9sMKxpzvJ7fb9kLbd8QifWWFWVV24MVnb",
  "key13": "4FHpteL6316n8ZCgJZvwCmMwUjrinYJGPbNQowPiyYGneiWLExxMoBDe55xSQywLv9bFXGH6pMR2unUipCLBqaRV",
  "key14": "5VyiavXpVhn7Tzw76TnjaJPGgQxxFMYgBkfwYwQSqQ7KZZjsZEjphTpNeDvc7u6KFEUBUbV6SU2rqEfi6VYYF7UU",
  "key15": "49yPmJGZZ5oTbnd7Mc9T45TPRttDQv98biVEVCe3QaGzt3MNwQ2pfjnrjbtfGqUsUKrH9bYCjdftzXSZPaf9dapz",
  "key16": "TxvNJVZeWosJc3je7cQduKzmkJFw758YRXDkDGU1PNq6NE4kav9y9GAbA9aSTyqBsyLNqhmmXLuNnBUU3onEy5h",
  "key17": "5NetSFbjgKSDDCc9dY56q8EbqVDbMR7crmjojhq7jg2U5BPbycmHhUyPoj3wcFzTmd9QEM2qLbfJrc7hZwsdN4ff",
  "key18": "5zKo4h7FYJKbYXRDcNemrTjuHd1TUJirYLgkrTvoG9AcDMniMg9KY9DT8abTPuTPtcQLREngQHx7VGiUQDqkZWNF",
  "key19": "5mVRn8aqVqZt6TWJkcUGwxXKtRs42HGdeCaCXPLNUeFggNk7Vr6x1Ba8wPsnxvHQSFXHJ95qTK9BmRRgFqpcfR2M",
  "key20": "4rRpE6ZLLCuFC4zwpMCmXzqXd3w6qVkpovSWe4EhQ6kwwEAENvvAzZai7XFHX2wwVYn59MibGUKh4HLEfgR7FaJB",
  "key21": "5PMyBbG79Qgz9d3cTQ2tuEcxmjPRqA3CsRXZ2wVrP3gq3L56g5qsaqeL1VHLx3fHuoskLT83rXQo3hyykV1BA4Qf",
  "key22": "2w48MgapBgjeA2kZYJ97CJobAsEoHqYQzQVr9WsvNVosrNSnNvfqpxJu6uxXwMwvhCq1ifFBmiSoyACaiT52PrFb",
  "key23": "5S4xua3g1xvRE7p4WNstgGnzzoQUzuneL8qxfkSLeFSFRXzFmSxoHNKf6PmoaN5MmF9eecjbLF6GEQHVnuapLVYB",
  "key24": "KUscyrFr6sh6i4gnXfNtuSj4P4H9DBgnCU7HXsTd1YuwXKY8XZGUsEGd6YVJG5e7Gu3raErZpq5PP6gLQGhGjqP",
  "key25": "2KE86Q1dvETqJTw6KWewybRMsk8LXjgFGaCCSLqykLvCxVWe626vtApQprXai7aUqkPjPGEXiwHsujNHhD5nSjTr",
  "key26": "4oehJEWcRreZ9fQdnBiSKGMWkAV2vjdcJNLnYuuLhx78NMTh8DRUub3cGBqAvVnUfJjzXWZMSu4bJ2mAkzRik3vX",
  "key27": "31VtNFZ3tr5pU8qSy4wiLeuqdDirSfN5vjnYxfvz2oys7oHRkKcE2EEi6TCZia16JEjBmNn6ZZ8dVxwbsmojTWGp",
  "key28": "5T9YiqbcEQQ8hUJJcKbSJ7dhpUdp4RVcfnr6E9TgBYQJxvRpYVZRjYPcs4QFa6NLrtE5KheuwRSkE6QBQHtnbUtn",
  "key29": "38wsypZN9hG11zHGVT6F831f7Z4PPa7kRmzzmdQfJNFBP4VTuBx3Y27pfJr1yrbh5M28ZYHTm7ov2rsoLybBYrwU",
  "key30": "4oevLrvpVDAp64NUDN5qkszknERBEs9ctf62z1vCouQY9qQ1rEaoUYshWQW2A4FBnAZeuLDLb8scfaFZgmhazr5H",
  "key31": "5tpTc8KMiXuYUSaysFizne4MZJCk7YovidiPRNjotfoHyucCTd6MvJToARpxbYCWhfwPMb3GtroRqYC8Zm7h1myA",
  "key32": "4tjwvCYGGQMnP9FYiuuNnwjKzQtiPEr2p1vztukMavHDt2rfde2xwx7W5rfxDcmPDvaV7aNGRryRaHNfNz5NEiom",
  "key33": "4X4qFt8qh3jbLRWmBqf4SAi9dWr64UhHV92AQefjyvSA44u4nHxY2WBvZhmBj5mBF5C86WASDNe8QoVrp1zfV76L",
  "key34": "3Fia2mk7iuX62JkEFPjKmjkrT2LAWA221ZJdHfj9x531pmZH3J7DUabNBegPPXKejW4DRYK26Y5auUhQXFE5qE1i",
  "key35": "QUSWKNvaAXvEiocNvS2upxDawGUCyHvxm8utrfnMAgL6nWbprT5B6fqQxXDmkRuHWuSAH8yaQfwQZ79hjdoAjHP",
  "key36": "3WUqsbWVs7bnjV9nfPnH2UcziV7y5JC62gHHjr2Pa711Gbu1fevK35ZtQkooiiLKSMv22hfBTyv58fDXnhSjx5yN",
  "key37": "5bz1AnNc2odaULNEcT1x6onFCZrEPvM9F5vWRkHVdJfHQTewje5c3SgzWGb2krMv1BGFgfLhXMMeP2MMVnvF5uHJ",
  "key38": "2x2FZszqJzNctUfRLYmy3xDTtK85BkuaX2atzLAzJdQD6fWixbCmhzpmxq7fPNheWyrqCgS1Hq1v8sQa1jfC8Hpj",
  "key39": "26KGznSUX3MaEYAsoPsaJ44d7tXDjS9MAyQPFtdEtD4xfpsxrzzajfkS9pKvNdnHmWtMmfomw1ChCFVpuELjRqS4",
  "key40": "gZ1PegFpop934SQWzbxC6EepxeG8eAxouiC3KZsXoaLu7514MKuJwLcYYwkTatUvRMXyd9c5NzFjNKMrijkgK5k",
  "key41": "5rA9Wmmbb1A4uJBgukgiVdaBREToPmtP4Dj6ynuQv8QrsKodnukm9nrFxxA7LvKHwYdM8tY2sZV3DJeYThCnUNDh",
  "key42": "pP8LDX9Gx5ok6H4zeJ5HdooyevRQHYnQn9Rj3eAnWU4NysYUWB8pUGmz93sGBWG2LDo1nDFjemkzh9cYAYokFcG",
  "key43": "3yvc2WKErWNfwF4zY7Wb9sWd4ezPGqUrY4gLcotJYA7c42eLQhzz4WL3x9PjqCWEfoHaSLhCrS8j9hvBHYtBNWah",
  "key44": "2cVtvXnaQbBHo1N2GEHBwtNj1riCKkfWs6FUExSorRczMKSxAvSxeadYaFXepXTH2PPcd9jArjbfLLHUW34chofa",
  "key45": "5YVVTboQpdXJmxQAp2oEveuANN9QMqz86W459S4T6Z5UsTFQiTnLcNDpYn5kPA93t4PzHiEmfXpWDyPthPmdFH1x",
  "key46": "31iwDryGw8NyEDNzmLjscwB9JHqMnZcv3RADMq3tH6NaAQ48xoSGRscBAC8Kzybkfp83vnyRN47NLXodDdEZpjHg"
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
