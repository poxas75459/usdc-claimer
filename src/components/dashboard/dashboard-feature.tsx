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
    "4F8ngj1DuYHgdNfV6pWmP3SsFFaDuTAyCFnnfyYR8qZuarxL1U57nuZMRbMoxfJ4JwKWeR91UwLMHHowzzA7G1u7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CLyh7xqCK38kFf3QKD3FsaqHFMjHmynQhKC1bMXAFHgJ3TD7ibqDhMe9qZ8HUrS4D74RBNBaSRP9w6q6f221qos",
  "key1": "2oPTbnfDE6wGyspgKv3KsQLwazVMdDVMMitfiaFthBPrDfJjMmDKX1bKmJ32xbFCCK93ZMCRnBapt92ijeEYiyKm",
  "key2": "4STovBbbCcDn9kCsrW4bxzUFVeKWCg8b2v5Q9iDNWe8bZkpm2w64o5MuRX6uas2T9eks2JGQAKu3X9Ts8MG9T9hs",
  "key3": "32XyvMi4GSFCCcHnikNARdTuFAmeoiKgDFp5hM8BnMhAA12RzWUs2TERxwbW8XHEst2QYfFfp2UfwRYg2rRbpPNq",
  "key4": "4KAk9bLYqRwk33cKDu9eeQ9ag3mX2Rnb3hcHr6p2paHPgGATGSUPWce4fbTY4LmKa7ZHPzNuq5n8AZnq74PbzCdZ",
  "key5": "4rJ3qXPmSsCxrWRCBzhnsH93cy4GhfDS97PVruWp9TG3AM1yApWpBvhjVR5NUWHF8dkyR6cqUcLWcF3ViAzsnkPy",
  "key6": "tSU4eqrhSLM4msYttKFw2PzrKFDWvGUZ3YDTeyaj32uReWtguMayoNW4Q66rTTUubUiwDbCgN42WWSGosouuCDH",
  "key7": "eQ9K8KDBESknC4sk8zYW2fs2KStrcBT2J8UFnDWJ34Q8tMKL7mZtPxwbC9bcnYwiDFe1uxAd6EEUoVSXcAngAnV",
  "key8": "3NgBXvLJU1bq385TXRqX9f6TdYTSSEUaEZuCpzFDRVCj3ySWqo5t7jc8aUzRbeHbxdc9Kqcqpw5yfVfN3ofKRTTZ",
  "key9": "zp3DRFpvxU5jj4MaKTBpifHdmLwdtKCpkrwhr9JXEUbigwmz5sRvFp8R6d2giWhPhwXiwxCboDBd1UWAXbLWDDC",
  "key10": "4Y3MR7GEti1ymdvVbXwNF2LQCdS9cVL93sgeGNbNNyVCYNmEM1GbuYrNo3gnHTPU4NHsWqK11xPGpdnq2XSEDmWL",
  "key11": "2f6btK5Ni6gobPAqGdXLW6LDgUq4QGCVpbQnbM2KZoEJaaChrSopyBvBaweRZSkbsj5uvFw2DBdroX6J5cUC7Wy9",
  "key12": "2ZFiWeZ8NU1woTrrXcLqawhQ17LJ2BDWTNjZC3nbTy1SjKn35Z8ebTvp7jXm3JHQp2VtHCUZ2mZnrYQNisZEctNu",
  "key13": "7RVsos9ymvEPN3rjBMQF5Fr3jdeEkqLc5zbwRummhWMMiJPH8sPq66YkF1pLu4itCWPRQ8JnKbYL3hvtBTBStfY",
  "key14": "4ef22etGDydfzKPp2bKqVn7Zj3cW5kiguZ2EwLxULsq89LvCUEpQQMk1BiNtZaNnyBpCUGjPZS9FM1n7eGLo4wZz",
  "key15": "5QspNP7LJjBEgxMiTp5WP7CHqDKC6AWZCAwrnUZHwPMjLUPRYiD4Xk4wq9YU1X1fLud5KGrPLS1LqhBSuVSrwEU5",
  "key16": "5Er2s6y2kBXQGS3zkVgyHpj6g3pFGYZP5dkV6JPQU3g8KApUzquc3MxjrMpbPZt9jwL52ywUYAAU3NQpqRqHvQVp",
  "key17": "5k3meD6EumaBA2oNPTcXgffqa8z1TVRtyqmBtH9XoJm3MrkDdED3jLtH65Yw2ZMBzNQNh1uf19ewgTxsvNhE5LKM",
  "key18": "32QJ1JAxgRVrhjf7kphLsxQegBF2KxoJmL6mRNRbvY1Vr5scvgE7vAtC5xZhrsZy9tLshBcVWqqjs7FD2PeuNp4E",
  "key19": "VKba2eXxWm3ZREGUrNvixks35bKhudjRPrJQ8ZxihtnGaisLHH3koGSp9qXw9pYNgbrMiQzMdYJUKYjb2DvaEBr",
  "key20": "4EWt5QuMUr8nQvmTn9N9cYRstVgMS67haYHGGBUCgLCPKpRduLKxXabpS7ZXqu3tBEn2R6JbnW9bwDNuPRC2xTkk",
  "key21": "4F98fSE1fqkvTCNnYpPgh9PuHMpCTSe6cnS2Yxu7vAWvEBUNT2rCjGSsEF4BQxxRsc9rHN8jzkwHnA28WYyzxxzN",
  "key22": "3M46PJEgi36gnWvSwFHdfR53q7psQM4kUyzS3ASMnVJ49e7JGwjqPgs7KMZP1HUDBt9PvLMKYZvpsqwe9yhhz6Jp",
  "key23": "3j3vHFsfsQ6ZHDUTTwyZTWyKwyFTdEjfivNb6VWejSUasTviZNWzqCjSGoB41ndPcV7DGw7o4per4yfMcnpQLaCt",
  "key24": "3eMBce195dPLiCXdBweBXfMHqsp1oS2TFwe2fiCV5SNj8AtpVjjCfVJfByJs5hbKtoHiyh42YdRo8HyRgUHvSiH3",
  "key25": "2DXuLEn4u8RMTwLfL2o6fuAfeTKcGyxWjUdmhNg7mhMpAKaoL75n2cUKRr9SvBpgKoG1rbYdAP9UT8Qfjbtyz5BR",
  "key26": "2X4hLNjoDeoVFX4vbXXXvv2XsbYzA4wzHnvwzoe1cxbwTmNaDfa5G4KNrP52duJ23UHGZKgaVBCiKf3p4vPx8K8C",
  "key27": "5sx4ibDyDhHUd5wJU8jfdbrcVcaZ6xkonbF2ebspAKCjY6RJzQwLKTm1NF6ZVX1BBMtVP1BwT6m2W1gPZG5Re7t2",
  "key28": "5FLMqb5UUP5WK4KUXTT1Xw7odsDJjcmjMHhUBE4Z2cs8oiSJACrrHxNDgNDnJuVFLMwxPnoDRWb8y9Wk7kN8uoAr",
  "key29": "4XBqvG7aqZjFhFaMUkD87UvYFsQPmcWuUZH1Ro9JXCRMcvzsWqxjBNdpQDPLZrCCEuHRxC7vpDyto8fmmfH5mAfd",
  "key30": "49zn3B62c2gtoErTtHeP9aY8ixMs2L7KzCFozrafRm8efnXXxvaEnqiHedAfpaFTDCBqrVt8VdSLiZYSVUGsZB3Y",
  "key31": "3e5A3xi33rA9cpquWrgmRGN1hdiGqdUPxFE3pRZoRMFyhckdFWadoqXaNHNpKRYCzaafBAybW5jDZgKjXJBPfJkV",
  "key32": "2pgkYoFTkTMQMLf6H2HB6d6Bs79LCocACMkBT3NMqHxmXf5qMkJBQgc2L6zwMea4eWuDmSPGYyVQoaEpeBrpAS45",
  "key33": "4DPpSxC3YChB2ihLzA2enx52BJp9xw5yZSVGvUVxoZVVT9CyLR2UnFvANFEdd4rQtyhDu59VVUPjobXKF8WxsUKM",
  "key34": "3YabRTh1hnMKAHHnzrFuUCR6CfQUQT3hEkzjZr7sUsU48m2uknBJBYz24WhoBAQ2hZhcXccqWvciuf5gNTFgCCWR",
  "key35": "413re9j31WUZ1dmoTCs7MiLMh9VyVrxojXKKqjkDZ8qfADMF1GmrtGd2T5rUu4rX1uHHc9yAhCd4NfwkdhwP1oKK",
  "key36": "2EnyPUBhx6xmt6UFqQK7STUqGpt8qrV3wQkrKy5wDKHzjnRSmSfFY49UNBDAt2abhkLKLC2SrpVNTdwkz8fWL8KM",
  "key37": "3h6dUz3RisovifpQyasLe1xkQ1htfb8Zb5jMNdbV6g3cvgzFpw4FL2ypDhgvB226fa2NDmSQ2khGVN72JSFUFrMk",
  "key38": "4g3QpBzmCnoPsRVECMmvehMQ2cKpMVowoqkArm37ubmRwweTMGHozjqwTh37Q2t6e1N5U1TE5XTpQ8WnhXe1cY7a",
  "key39": "4KmHSSA2ff8SGvZEY28AnJmNRxaA8YNHjgQEDFU32sNRgjdWhPdrknvpanyN4sgU51PBKyJN5Sj6SpQQ7F43Zgg9",
  "key40": "5y5Gs1VtLcsLXPejKDaNu3QXs9RiUmxTZpvHKpf5REedVDs3TReUjxeMLSaj1aKaLMb28LhhpjS9MCXSH6fhkGr4",
  "key41": "3PpeJQK4Sy1fKPjx3xz1kyTjyuc5iPQYJ1STBHbsoLNEEsSL6GGRHQuktaB8yrXjot9tkDdJPA5c9DDcMNu9foBh",
  "key42": "3uvnjUU45DtTxKynPM3pJjSBBUrffkbBdJFJvwES3SXETBxsT7PAgGZsHHGzxxz3uJwvGcaLRZiL2LHqjMzNiSQb",
  "key43": "g3VPae7vjMfbCN2fD7CptUrB8cXwXKg4XZxMa1FNdB3Jv8hQMmk4MU5uVYxpXu4CALiR7b6ENJTagRGQtJXtdeH"
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
