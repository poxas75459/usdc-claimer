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
    "5XdaaYHSDguQUpEBkkXcXjqumSNmTSUHy3a8kUBwEGfR1nahKNXGRAH2zVNehpRzJaXZxN6P4KDgAXkNqCbTs4Fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xwmpj4i7ioKhuuQ7peh4aLKe5p1ZiL8sQfxRzbNyjQPZL3Rtph631aVFujoPt6RwgR5M7QtShGwxM3xuczQezJb",
  "key1": "3j9y21MnxzhZPpqdLeNk3jjAAZrgEVfcxfJXo1KEb4Z83fcvUZJ74dHNwMqaupgnjDYkHmGqAwavxAFELptHubmR",
  "key2": "28yvTuMBmqrEnWPV9V7ozkWRLQ4ps44UYRZxVcZULLjg5ifU8Hjp7Q6B8ZaCshpPZ6TeFSXc5csuZiez87y9Fah7",
  "key3": "SnEhyYkbSxk1WmDH3TSxcEJM4L1qZByPnDbaAfBVidZtk8s3FccwUmcbWZBd8FezuZ3C1grERKTz8KWApXXeexs",
  "key4": "3ULUAVt8AAWeY6QTXyKhEgH2KHrGxq5yJPUVqED4mAWVbqCdF2UFZkVgVX1EE7tRLsuN8RfeQZtDeBfirjDBP4jc",
  "key5": "CD7T3KMNv7VcXzWrzktSeJnQTzdpyVtAuYWDHDkh11KCURHrvAD1WL49BW4ZwAeukCahgwbryRzGHVknz3w84zu",
  "key6": "3TDdm5mA9ua7RNFdJrnQhihnHVu7oQbRsbEZuUNhDVmt8HP8JJuuxVT7vnCsb9Q8LgFHP9pwv1QhXCwL4rkEdje3",
  "key7": "znxRix1X9UNkaJxVyHq3mBqwwY1BzQ1GtE7V1NVV6rbBzDd9Dxr3Y4BT6jW5ToezqyKA292JuCGRhYsreri9ry6",
  "key8": "2pDwU85aEursFbnPAackmbDGafkXPfYxvAfo8PZTk6sGiNyGMok4GtcpsvguSbmXjHyxfsuaW8CqHuDGR4mBy8ac",
  "key9": "5iJFXxCJnoUgAy3af3cQZZHVqQ9sNXryEyn5cj3YPeMzdxVw7vtfVeNfrWdwtW6ne6Hf837w7ShuXEKqgzW2Lbim",
  "key10": "2wDngbAuqdfdJdKbu1tkJSuWTbzV9Pr1pao4HrJNdrNYCyNcGewKRshwXzdnZWXg4KomxLxkjoYKBcvxZ8hdxM3v",
  "key11": "4myBexTMajoosMy76cXaNa4EvFVnxuoRA5aViuMhBi1ENjxh4xoRdk1evYR3n9KFRsGMpQy434L7C4B4hTQua7qg",
  "key12": "4S8UHJqSDGfGtm4Vp1iVG3S69ZcNk9G8imuzra2jzRhjo2rbLDuNZrvTM13MbPKg1oEeKAT9eG9ej9o7AQoM3GXP",
  "key13": "CnGzB1ocP1vJfjBUBAdqJ4iLegsXsNc8kRfxeB7gmS5qtDQg7xT4S2wsj9MNeYfbuCUo4r7zM42Q3UqD887oRhG",
  "key14": "2j4TY6pVcL6XtQX1xzg8GmiWip2HTRTjewXYahvLu7JfW55eQgoZAx11wSENC2snZXwXRzUnomWLN5xT89XbsMRB",
  "key15": "2i8eiGm5WrDAsJ6vTzXQUa1Fq2tqwSeKBYZN4GtF5nzmR5ghc5H4JUG7ehCrT56sGojbkbHdvstffscF2YYm8FSg",
  "key16": "4tzDUPLQzfu2H8CvaysTXdS9HWhNHdhcw5PGwVZL9Sh7GGrBgDEwwG2LtPQU1B7iu5ULNDrJXEw78vzyomVq61E1",
  "key17": "3LBcgNvG7uLN7ZaQ3m824R454rdxrH14vyv9r7GVfEtkfMzeCrt5Wvhm6nL6GJZkUD4p3VWH6sQe8dfJdKeiBLM2",
  "key18": "4shRJvHhM1VWiFYbc77HSAzXRcc68pDrNVyKpcSXSc5mEn8sfAtvQ26oV1s8yRU62hnaEcTahzRNxKZX58q8yWoE",
  "key19": "4sjVRvJusPTFKsVEszztj4gN9ebHjWroDqhMyd855EfZPj8ipWza88Ncc3Y1ZHHZ5xqNnMF31WPDhi9hwXCH6UtY",
  "key20": "4sJSwg2v5V5eEaVZyqz4XB3U9JZjRDhL1AS1zfHwaiT4Dj7UK9oprJpHffN2YqcWmBHsyjxM245S4ETJUr2JSPjq",
  "key21": "pqK4KMQcaPr2MtNB2yp4JfUTVQYvmpnpSvbSan1Tr8UL2cELYPzidLDAqxsPrrBAud1SsfoEwoc7XJmpcVnNPpZ",
  "key22": "4iStYRH9qT4iqbsA33QYvRkyizyyL4vt5iah8Mszh6Nt6jaeA22cBLTPWRPqArLBhPg5SNfWMKLbW2cPajzwHdgA",
  "key23": "4aqZV1wUuWNfBRTo2PLaBLiW5dkPe4HyVi6uCzByGwfMqdaJ4GUPdpoHTxD3DBwJMBFbt3gAuC1QWkxGbidmxW47",
  "key24": "32Ebu9YGJaPEUfTHALXFKNNSMQMPaT1muGpm2th8A31iw2MJuZpBdYcZoxZvYTyfemoYaqJHqfCyWVx4DxJrsFbe",
  "key25": "yLMQwBme6w3s8yddwDe7kxSQfJvtjDJTCkFgb1r5QydtEirZxdM5kSB95XEpN5RRhdF4A3GjLbKdN2varUpwi1u",
  "key26": "3URwh6GYN15XC5oWVi6FTRLq3aJh3J5RaqBKHQfHoFpkMVEgGdY7dWKWT4YEiEPQEFaCxbX4Mg3D6HEWwxKP6CMu",
  "key27": "3xuqQvkvjXUbHeA7h4nvjU5WtQcbL4CbpzCv3BMFQDofRaWuumPdA74Q4vua8RiJks3STeqkneowDLhJF5a4Fdxr",
  "key28": "4zamKf58gQ71WoV3HbpW2v6jK6aRKaZu6SsQgCP2vccr51jSVfnQYeQf945DmGwBP2Pw2YVDpYHSr5ZcgqWbUC4j",
  "key29": "jA2PmGz8QnDiTskVJagVUDk8j9tCjufxEGafNhig8gGsCCRDThuGhUeZePkd25Sjpc67CsstfgTzpqDsBqgbtcu",
  "key30": "37J9nTzxVxXKvfQftNZSPJSGzkc3c1qk7pWQytYqU2StexQ1Ezo1L7JLRmorhgvZSwUoWpX3QZTFkEV9RbVLkYho",
  "key31": "5w9UF6VCnjfooBfKJntnxNVZvTJmYyFm2TyGq6bizm3yG4Zc4hLVxHQXeZJqc7wJ3qeL51WwXj8ZprjYHqdajp9N",
  "key32": "3xTuao4PN9o8LbjgmQ9GjK9fTziRLoFeV1Z8HpYubgZyGWkjAZJqRKeVHpQ6NrFVAJWJGxP2fStXqL2QsrLhq3PV",
  "key33": "9agWYm3sFRXigvJzsSPK3LkvREWXnZ36rPmyYyvjtsGRkSSTEoEuj8LX5v8tYRwDBShcfGiKxhcejkjhUxEATCX",
  "key34": "9qLePJUMCSGgmSqBwqoULCVc7KEg1hgSpPUCG8VB3TxKcRsvZdbGsmjqUeq5RFQCnPUnWa3NVKEv45EAgfoy9oE",
  "key35": "5G39puGshXX6gVKofQwmBkJbNx3JNKi6rjztbUjoj2LM3EccRyHNB8e3F4rXfQ7ajvqvWpYv9CBN4Ta5DpT3SPQJ"
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
