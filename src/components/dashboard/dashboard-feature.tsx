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
    "5eR7oN36ejKgusRNNLwqDYBQLjVJMMWMiGUunqgwpjQFLhzmycu8FPGSeG5foYEyjnmmNrcLKi5ZH5nEhEtFroXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62m7m2FfEHEG15BBpnLkxQeF8eYS2hFkW9xuBhxNTnXzSRTum87NaSRKQF9xegknmJAno9ta4dGTXgBV1Nj73FYm",
  "key1": "3ZwirH4brRwD6DYTTexfXXZnYS1LjRfzFhZpz1wYYPeXRk6mJ5ZdHrCp9J82e9YuA8VoTpuYCoq5g64odb61Wrhc",
  "key2": "5BigFw3iZokRGart6V1wrmtocs8jCaWv889H1f8BrmQMUbXi6YshzZLiZnd7i9HwziEEZpXdFLbje75VgPDo98vw",
  "key3": "4NCoHoiKX1qXhnKYPDZSQFs619Cnnor4AsLFBuLPX3vEk3eSJKxa5zYqAwAaUYm9TsqVd4tba9XQyuYWQp1fRj1Y",
  "key4": "zkFmTiqyPgyHWktcgRJCFVVKohYEsX2Wx4K6whYcNdLcnRaJWvYwhM4q9zS6Ev3wvaMviu4M158n6EW4TrHC167",
  "key5": "kWUhZF5Q9G8hDGqrayP9RLLo3rpFep497Efg6DDHuSXYpsnKiqTKktCyEQZiKdBqGyQnVVw9AZ9oEvVLJXRjFva",
  "key6": "4XfFxuqgbyqeX2TBLj4MuJ3vU2JzYssfFWPfZ8quGxW3h88ZPQ64mij1WNQTmmPQrnzkm5RRrhjnCZpL9wbUA9Zx",
  "key7": "2x5LGXMLQrjGvwJgbxA1A1eYbLfNv9dM4ve8gJwsRuc3CePbSbm9WSYMk7nxbDAEsps1ShtdQCsV9YTjYdCKg4xe",
  "key8": "3AWbF5ooxqBpJQ8FVxVbS9RZdVPabBqNGk9yuy8VaU3YagtGfhTwN8P1a8yagEryY71r4rj8LFnVA3VQX2mBmpvr",
  "key9": "2woCzZU5QbYVX3eHP1m48fHChTmQAWCYcvw2Xgibut8jtt2Wo9KA4NRSf44qH1aD5h25GtY6WEC3VRQ5vdEqUXw7",
  "key10": "33mtV5oj4R1uMrPgyA9wQCxckML4exhJL3fb4eea2SDx1MTiFPtEVJDhPRT6ytJYfK6tWBdsGptKninrNzNAFa3J",
  "key11": "3TMtSickE2MJCTzpnUFbJEkHbDvoB9cuHLsNcw5Q5dLnakyoGPiXbefqxpKVbQCE5iGespqW8UuQvaeDDX9YA5T",
  "key12": "86icFhJQLm1hcoibkYZ7BeoUmWQ3tkQZsHAEtkt9DFAX8XPtY2h4errbL6CyVRCvVxRepMLDsdwDkrNVKMREx5e",
  "key13": "2iHDDz5995ddKwpWJHrt73b9PnwwGxEc2jCeBsFLtX7iRh3eDw3HtqRvA8avXUwdKxFiQcCxSpKrwCr2CFU5zwRd",
  "key14": "4Hy6Xr1N84EdS8gfeMLjnNAGv1Y63BHAWw9ecXALeFvq1DcrnMDFZbJSawfkcaegLgz29qkJv6KLZpAumQ9aRDc9",
  "key15": "75d4oX8wWUUaWhLhMKavBRxxXVaupRydMtP4ZUCmwcokzb3gZJC9PBG33aEiVHiGGrxWANohL68ghGnT8vugBjy",
  "key16": "Sw8Xjh8Y47c2KJEm7HcibEiX7jCX3xVWNwLk4MfoQ23e46t8L8DWDPkUNdbnG3miKWjBtkMkN7HRmyaUih2m1mx",
  "key17": "3XgDL8HjGTyxda5Gu4AnyYkoHbfrGS2c5nAw4gzKdgyindebVMe7wxombhDT3Te2R4whx2AyT1wYiinnUDPySML",
  "key18": "A23xgo1bp39QnwCkFDPKxjSKs4Ep2MCxmuv31hkAtHCYw8TbPjvbVS1yitzJwHtmvZ41aZgSBfXYTKxR1DGCmNk",
  "key19": "2sJYdQcqiNYax3SWbgXLcTwUdLRJ2VTcUVXWn7RL3aC17bM9kgqEsuhjNxnCdh33sKXuwP4pnwoXwqFB1SaXfUs1",
  "key20": "59ptfV55pvT2LT8jy6aqR47AgjTomPJ4wHMbvXdTb5um6GRVaahUVQrueJKhfMUSM8V3gqA1qL1465vwuk7nJxkS",
  "key21": "Nw8pdGqXun2A6u6Y6GjfPxsFwHi94eJiSN78bpLXQXZCz66EnJm4nMTRrnvN5aWUKVB8dEZNkPMk1cgxUV5uhxL",
  "key22": "SjMGHwRf1HLhsF4mNtU7sFK29eYZDfyi8YKEjSvurjBjwHEQutjXsoadR3hLWWYE1WWYTFmqYNknXU6DHC4u69W",
  "key23": "67ekxz99trpqkkQFy6cHcAMPsHV2AqTXK1eTK1aJYHenDSaMTnfe9D1D5m1tFZQYdq1H92rCnCy4PvrEuUUhfMfP",
  "key24": "4wqJVk5ino6yAfVMymRMzjNZvtW2txhNiwbb9kGPqVwW7TtteXnR2BSnujeXvHVCbjT1FWn7JZs5F3whUt9JqgNu",
  "key25": "57JXXjMeXebXBMZeHktYTWaLY1twXHdLHnLop49xKkc8LstetR2pFFQJ94GuX9Bx6FXxocGtnxhqBmKEGnGi6C48",
  "key26": "2oohon9huMWfQSrQVkDcNiiBuc9GhJ5cHjugWW85dAzTKhNyMdSwA9AMeuzp8mFRz6QQ32cD5p7bXeN4j2XjXZca",
  "key27": "3kK1gsgsUe9QCKXeecwExkjpLuwaVbHiaNZhxjPEzexQPsxxfWALUskrd1heB6U3oGzZtjk2ezbThUZkZ9NAdTSX",
  "key28": "5kKj8dYx3QcXsJoXGLAZZXe7K14w31mh65JCu4bKzqHqNxxUWzxwRAEVVLeZiFqYH8GVKimK9Hbh1CFxatqJj4Sy",
  "key29": "5cpdmBQhxMWCJ45X6fNm79s5Jb5S75NNLCK5rgxgCEGupuXd3iAEivK4H1jXkHYcCXgjnhQp2W9sxnqrT1TossqP",
  "key30": "hZjncR2qHk6pRiiw1Xr5nvb4bLiSKVzefNkTvF8ANw3r1ygQUY6XxhdgonvWzRSkc2nV2F9X9XU1UUuudjUQ76w",
  "key31": "5AtQbH6M8uvsxzWWzAzKdaZPuZ7sJVCyKuzYa1L2BKmJ1ot3UXkSZxTPUYp5v7bVcrJipnrYWDu9GCEiADdqZMXd",
  "key32": "51p7CBwXnodZDjHkQN6LGuUUKGaPi5qLS8WDT2b43PSba8Wbd88tUMK8vVgAbipDmHmoLFhXBeNkFyPkxvQ2kTem",
  "key33": "5obZJvRh9DdkWxjrUGFrkAd6Jos2kezneqogYiVSceV9LuwJnW4sVV5rEaqyjVTqWmT9LRMomBpQRTKhbv7oMkbt",
  "key34": "56fZYJxpPSNqXxjxDTtXB1Ns3AdJmBVzRf3yyGaMUbYahPbpoir9ovKW4RDE3jKEV38eP6JX5La3SMmBULtiD1iP",
  "key35": "2Mg9LAvHhBW4KbyLgxySM5wMeekN9iexiNDroM8EjazxSW9vA4jpXFTp1Cp9XB2QNHxuHHesX3ZmjnLyWPMdgtWd",
  "key36": "5pfbVRmqy12CtEtCUJHGsd1d8yzKx1TZu8w7dzxhNgpGCGRyh7i4rskqgr4mi6AgUWTDFHihxB516ws7UbGXDt6f",
  "key37": "5YWt5CGGD4W45d2Db4syxJfAYNahmhaacLfGzwoJgvZRR144bCfrbZh51bh4uQrkALMVzBBYDcjt2QHqmsvfWyYD",
  "key38": "3JdR7NT1cS8q1jcaDBLa7hpuppeYPkCyczktbAsKS56MwhYD6rFNtfqKNr9T4gtFLPv6mHb3f3nfYhUtaSf19cBr",
  "key39": "3VAErBeK28diMf3G9XL8UUCuRkWRmz5cBe29XBfzUALM6ipEHXW89J9r79DA783h2xNyhjxBSxyuAHZyQwWpaZxf",
  "key40": "4utbbQxT5vsoy1LcnfXVnE2cS7Bm5i6ErRhdgsELZK6b92NUndNayTCAEfxQUmpgEM9XTtEVy4j5Am5As39wobvE"
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
