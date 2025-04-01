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
    "yswBntaHUjcWY63L41AFWW19r4KiHCEL8UVxiVz2zAVXpMkjFmLCRovopjWsUoEf4mkntWYcvqM3tbT6FKSg1Bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kZBhBwV5UyABTThMsDbKfbCJre2Tsbd1AG3nJQE7emEdamc9tysb23K7RmhaUe57iZAysdKUY4cA3J3fVr8aX9c",
  "key1": "4VmNAwsQN9sJDwMjDbh3x4AJW5GQCK1ZV2G73HwCH3Z1rc5wJcJZT9LxbL3VsEoLYrNGJukw7ovvYwpeqPPKpnHF",
  "key2": "4zUqzbHGamedNB6CnZDCBM62rQd1ooh91tDgxzcAAWx8M2aU1RjZZuicuVBFomBWVYWKRoFUuDWwqLGtjCR7SgLt",
  "key3": "2FVRKG4DPNWt3dVZz1GU6Y9yLnqzenHQhRzYMv3t7xaWtmGU9sPoyVoNcuY6avuBnZkQipF1cpkkexxTh5yf165J",
  "key4": "tNjZnykJ2XkWXGkoQygWaFcdzrMuFbxcR3NqT8qAPvWPCXpNHSoAQUUTsKv2fcdBWjtw6PLNM1uQMFmCwRwdb3v",
  "key5": "5XkArL3VrWYTYjopzyJgq6YFfMzjZ1nUXqSDBNHyabechDoQKW6p4wzzXCRNxd1fTfi5VSfaFue8xwyfwwjmcEvx",
  "key6": "5utvZCktKhXiTvJLCbL5GHZe1gmhfZrqpFAazPD4qmERNodBnfxPaP4hETd5w9Z9pq1gd6ct8zJcnSk1BpdLE8qG",
  "key7": "33p56vBGkA6eBXBPYsYrhoC4xydzpF1RpvpLxm2exp25ksecCu99sihSzb1iynZNjSc6As4cbR2nKGgwN18PtgMm",
  "key8": "XZjEshZR8F13yg4m9ki4kiZ7JCWt7qF51wyFsW2rMA9j6cfQCFoebfVimioeqakxjWUH6FeJRLP7syUTjnJgRT6",
  "key9": "4jZ8jBnRfBMzJZWcGWVoJGn8B9nqDT3oxPcKA2UQvGe5dj2mAnBAvoqpiX7FnqyxYnjQzcZisFC2L7juPNZrdUxw",
  "key10": "3a1kDys9hGwyHEzmowxVm27NZPLyVhwBNTaqVxejxw6G8Y82Sw9g7LVjL83RDpg2BZ4ozzXAPRhaU9LFkwrKKHxs",
  "key11": "4SPFd1CDF4YoqyYikjoBHyumwdNFVdEZ3sFWAE4fgV8zw1twJFTvTq9XU3UJFe5DQL2B8R7viQGnbxqaFmq2tfNo",
  "key12": "4hnzNXJ8nVmcEv8qbvpAHqRGGjWUxoZJvmLdjguywDUpMuMfMv9CyURWJwjqYp1FQhDQKC2UvXSHPJh5imVPLaiD",
  "key13": "5DzM1T8SgbxLWuuuod3GVSCitvqZEMZQEZ49yZ2egfVyZHQDGTLSrUNuFbhTEBsaGFCedusJx873daVP92ByUn7Q",
  "key14": "5cpwbwZ1C3zcZaz7iM1eacasHt1hDmfQ2nAmYFzgyszeCmMtFyqU8SCqAtegPuTVC7b2BTVJBJXUSRhz3P5uEV1W",
  "key15": "4j6bQLp2naACEUF8jr6L1NrS4L8gSqNWwJWLUZQreVFCBp7Y5s6XqB8EDGJehgoSLpY7Su2itybWxvJHS612h9rn",
  "key16": "236QtPdLNbseA3vRXp8sJnewCWQxSPYGHSQRucv2Y24qUqY1yRUYbYr4R4DSXUn6zcukTxmi1E4tBXX6HQNHJygt",
  "key17": "3ExNrYXhUkZNAMRaKUpVr6AGLYtzuYBt5xixriA5vEM4eoYWw39SQJH4JVUVSCLawBSCGHMSoDiihFhNaEHHTfB3",
  "key18": "3Be1gYzjkroQQGYRf6eZ5gYwT3ffaXYvQwiPZzCQA1iBGpvK5JxosUZ9utrBQsN16kboFaWga67BWUjjVQTJGZyV",
  "key19": "3vH4eSMHuL8YQJRM65DEdC1f8ZgSgr2HXYvWtkxS7gGARk61EnsjZb7EHbPfBiyKHEe6HG5ubfB78hiFDzWHganS",
  "key20": "2jQaWnGHoxWU8i9CTFmdqT4kvyzYvmzsXQoG6SZBb4FYmfcDAaMTDxDziRJvZThBMJ6usU8PJJENQE4Q3audGnCT",
  "key21": "5kBztvK7mdts69upUwF9S3Z8Pnk556hUBtskppvyGjhv3o4uQvdtvuRfNZ4UtZYYtiNsCfHWYhr8DDJJKb6CGHJ7",
  "key22": "5nbv4mFtaMkCvRErHuTwskjPTMxqiekdkVHT2Ur4bW5czqTZDGLFTwyG2a4xNVLx7xuYMQH1Wd6j9jGDETnMAb7N",
  "key23": "5giKbB3fd7rWvc2UTBN8n2DZbPcuVnWsBXrvcZ6DhucztfLqqKtmYq2Ssan5y1ngawEdb9FeMCn9b5octLbGk9BS",
  "key24": "44VtWvnotr6Nr6ZqaYFEwBiy2ukEeEFhJeHRCGCJAj5p4kdenuooHhAQa1TPQ4AougSq6tadHxGgJrAqYduVYUHK",
  "key25": "2G3PGAsdnafzQuJAWn3bh3Xn4stTa9EetSTzsTZt5CGpNtze3aQnwJieiadiQtVPKXkayGNT38rQt18FFUQk7EZc",
  "key26": "3Xio1ibhFjmdoX4hkXdUyHeXbkk6dLEcTF7NNSBRLoKWQu9trvwceHxrF1da1RBnB5nHhZ5qa4YF47yvoCSd3WsS",
  "key27": "uNbLFwfb5ZX5BbLXjjfMkXMY2u1b6AkMZEaZHi8fCovN8xuq82epGoVm94AWcfR2jf2mVdsrQut3GSUUPeByhcX",
  "key28": "5qj8a3CNQggVx2adMpeB54wXk1aAkHEmfPapLLiUmonCcjBZWqBkiuqXB3ATKadp4BXYsuSgd59oDtmTChbocFhW",
  "key29": "5XYb5gU1VNMMpqQ5na92UDQSKjnuyucBfw1rx2keEFd9MMYotNAyzegnxbsnuinqxN4rr6FSPti65sKA4MmZk6Qm",
  "key30": "3GpTdnKNEKqaziiVntQyPwGXr24j1t2UwTX85f862tqmRJDxMt9LMQr6ZGwKsyyAQdTJHF3XS23gWGw1jZSyYjtK",
  "key31": "3V5q1xRLQ8Mkr4fZbGshAmxKaVivuBMZZhqCTEXD2oLgoY4WzHnqRAkpH6NhXxrvMMMR3HMFn7gbmzkwMpa4fZZC",
  "key32": "4cF4Sg2osYaH1H8CbpVDS6nyG8bZK7gZ46jhT3DfhAjcwG5rMtkCy6awf6PERcTaVqdxFdotTpSxYKncvn2A497o",
  "key33": "4zME28h2h4aDQY4ja81uy8XnCCv4hNDgt2xCX23BrL4G8GeVeodHJnDfW5jQEsp2iLd2SNMGzpkQtQR4nkaaXwXz",
  "key34": "4v36XswPBw4Parw94dDA6ao3q5phAYDfKXsJJAQyM5ZuGY66kTqRykwb1S5T87PajD1C43HpdWCrpJsnthh1R7Lv",
  "key35": "5Ankgx2mgM6uwWBYP2iVPrM8XzqxQ1W78JNh9amzAAawqM2cD48YTyTABFSKUyZQNAWtvKV6N3cR3qK9SzLJ3odx",
  "key36": "499JkhSsjdzeU8fUZQ2gdR4SbjTwkUwuoYjr87eNjENjZFRyzzqRMNEeceYEMRxSkfuCwcY2sLtaXSkW8pYDdMeu",
  "key37": "5Aq5CZBNY8LUJHTsWt4nh3Goiacb7rGDNRuR9RmQVLCkj6wFYKqx4wpSZrndvi8eAyE4HKd9tVm3voZGNnVaH9Qr",
  "key38": "2xRLCMcQxTf4QBeiYdUmZKFmXN2B5Sd1JaHJq8PKMxN57Cq4Na2884sN4Jqr1oZWHKUFws3EXKH44ARghUB38Bg",
  "key39": "YbVwpaCAteFhvuwtGqQoB5DBgePThi6haEDbGZNX7yUGvAj5jo8v9oLJRkZV8gCL2NhUZQsm55vb5N1n9yofDvz",
  "key40": "5hsikqSUbBSo1GJPrmx9wjEWobrwsL76xDrbgi8iqCzBADKVcyXkJrTM9pKfKK9eqCUK6PfyadwfTw5khUMyvXx8",
  "key41": "2et2DVk3XCRWrVpAmyfnauccKgWahk6Wv8i7tw1kyi62SaXj3RCpn5qW6qVsCEj2bzZPkBxAhnEMfQvoG4VPoPDB",
  "key42": "3dgrpYnParqxSNmCutgrGbkCbrj5kq3ZH85GapZC1yu75GjJBdcoeHK1k5R1y7vrRE4By6okvxFV6jmEZWc7gMxF",
  "key43": "B54FJnuZKSXq2EsnXNpMKsEsgC3UpyvqJAYZtMdkoda5ugZ76B4kKzszeTZUjBPQ2E1KdoMzFsKmLYH624a3W8V",
  "key44": "3XsPtF8sDBprjqtekFcgrYsZEsydgmXBRub9VJi5TPohg9NYMPshKxk73B9g1XEkjaRmkALpBTvezf5bJeaV3GR",
  "key45": "zzfWrF1CKHphSAbcqarnVZAa86rUXsw6jBNKdnDk9uahFLFyQw5VQbPF9jhGBS7C6PRuW4r9K3drxM2G6AikBx4",
  "key46": "5n48HGYh2CWMKe816XtT2ZMAPSroXhomniEnSMzVPhodruD4Lt1ovGP3U74kCvosL4bqCKP3EscadigGhWuaqLS9",
  "key47": "5cYmzetUmwVCvR2njdAGaT4S4J1b7vrpmw8YE4WqPdKj74LxEhRShYNn9Ju9sasfqM5DRxgDhQBCFkYqYrzRCjB2",
  "key48": "2jWLd4B2K5byCFuqUbwHbknkvgtvfHWkCaTLTftKmmZRczVpnDy13in7iq9jF3Ljhnvx5bScR5oQ1KqfvN5Mbx1B",
  "key49": "4zALs65FafZXDYfmUYXBMaFDJAN7aofX992WG2Mhtkwxt4jAKL9GSthrWncp6uvW85KNvw7PacN7TaE7MgQmoFFv"
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
