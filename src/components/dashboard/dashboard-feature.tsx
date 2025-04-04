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
    "43XtNfBMnZawu92VouQQL6mBNVntfzByRqNF2jwuxtidPnpbgk7czHVB1TXXGUehP9grtSWDULv3nZkubYB34Jze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57L7NtEwmXdzRKrpqggPNWmt5fswR6rt7AcKBxzNTR1bQRKhPiNdsvhQPsyDMdDLkpWkjiJMtf2sVyXSL5GSN4mu",
  "key1": "4qJutHLSkHwZD1WGu7P7gjSoDCaU8Y71mjYcdu8fx3onvGaorfj6Mhrassib7kgMUWKi7DTC9SDU7zF6777CBQ61",
  "key2": "53Cxw7b9r3RzNjeo5JF5KqX5ynPK8LcGpt7TwGbRy6Xmpn6g7NHfUwBcqLE9fmDqt6hQw13S9DzYRcKwLSNx4EeR",
  "key3": "3SAaMqAFtqcDUptDX1WT9cvAD4xE7F63C5w1jr1zi4AHEEmocfCfQ1mXqjHnozpxhHTDabYjUCDdVpbfqVfmkvPQ",
  "key4": "5NpvmZFnbFFUq4Ds81YhB1uNhRJoHRmoP9NM4aznu26tApe1EHkQwwECQb2x6QjbxQzv8vPFbW7hkg3c4HhMXiiq",
  "key5": "5xp3ES2SXMQBL5qcnaAFn7PXBJqhKPKT2MC9hkM6P2HiNWEAM1VtLGp8PgRCjjG8P3qrtq5e1LjhuE2wk4DdTufW",
  "key6": "5jrEXXWuxChQ2GXnbHfLTYSgwwhaawtn2euNPHYupj9o9nogDyJ7Cwfz2j9DB5XsZ8TLKUxrDmFffJbzWdbC1G3F",
  "key7": "4bqgRgkAjy2atWrN9MucpfDyY6y6wgPYVQi1Pnm6fvpMiDbvhTWAm2rcfMenuqS8E5UmLAc2mgebwiGg3mUYNN16",
  "key8": "4Poq8jv7YS2JqnkVtnP5NRnLDsx3SzbjqJuCb9W2RctooUjSbi4NroUwb1uEitsfwJAE7VHR7Y8WiUZs6JXUm9Dn",
  "key9": "261UhX746beFyJ7yhhxAVWU8JaqzT3odLj6dR6RZxpCD5MSXZZgVLXGyYy6hNX8kvuTEyw2Xkrd4qQGnkD5ypiFg",
  "key10": "4CpgNT711QVTfBvyY9VTge4sWUsmmk5vYiphHyXBNwCmCLPGF55kq6Kn4B5iLPfMzzSjk9CWPotMZuVo5fAbBjdL",
  "key11": "269hNAFa92duUZRGwS2zewrH9hRxhZf1YwShpDhZdn7mo6FSZZxiA7ZkGo2hA2yXRnN4tnCAJxu8X4QR2AUnJN3e",
  "key12": "33Rr5MmQu64UQ9MBi2brU75hzRwFyCUSG2CyH51A7XEdKi9NsK1Py7Zaeo7AecSoXsTM9JDsjYxy2BzCNVt4kNqL",
  "key13": "4eR142wt5unMXKsSYLKRi6VNZMs8WaBLNr9EkX9EpJZqDBwmi8vVtii9AJGjb4tnXir55Hu3aaw25fnP9DosHw91",
  "key14": "3ZCZkbK4QYDdQtMZB1Loy42gCwGpZ2UUStPBxBMMgjPhkgVkpanoDksTkLQV7iabvs5PUGZ972pTW69jP3JUKDCN",
  "key15": "3JgK3o8Fxr3oAQbPAPidmJWJ5s1vY8fW59o4pH4KD45UTjmGWKUBZZvSX7BB7UHqERMMUMQWMC1QrKZBRQTxCpQP",
  "key16": "61HRCkaonZGNvWxMiqc5QGpehypvssYsR9QmgpM7RyxPFy6f6D5eoQf3kS2KiSAAn8JHm9X7C9Fqw5JUP8CaqihH",
  "key17": "8EcHcXbXAKxEAbLB5MM4Cj9KK8TTDJV9miMTGQqt9mYw9ubEGp6X5YDXkwLByHKsn8H2ytRRc5qFZurpjYoUdBh",
  "key18": "4CkeBrseXXFTwX3RYzbXPvA2hxH3NbzoL3q9pHWaq9cdgLqMSoHStyxKN9rGvr4cNuCmrqmfdoDpb6uTHQHqwEUG",
  "key19": "4QyEANSArE5quyfzQhWoaWMARR9hHgHp9Nrbtwyx2f1xp6d8H5cCH1dQy7d7ouZFYESaQJvPwznsRANTWXY7Kxnu",
  "key20": "29jdBXdTySX9QeWyxzUwqRao8zeNXAXnwDe9UaTe6ToHpHdqGBgJ2NpkrhR28UP47271CnCZePyfvjRpDKf3sCh4",
  "key21": "4LH71XSaScw8HWp9WkQJC1VLXGUKy5rLfpNvF17rxSUUSSWuibenmgyiNrqg6G5VBBYnABS8LMUad66BAhBDYN5k",
  "key22": "3szNuLZpTeMT6NAGv8yZLYdUT9hjE8Ff7eGXUXbTFW3G7nw3MCPq7JkZvjuLsBaJJc2M9538JQJ33bqpuWV4szL4",
  "key23": "4QxakRwWeR9sfBaF9CYnecgoRLsXNpcbGGvcorCKT9fh3r8e5UsSaYH8bLD2GV5hNBAwMsM1TMsiYxgEhsufshF4",
  "key24": "3mLPYNdS7ba9ZZRLNpToJRCGoHNxREjwcRKMD8BVU82vuhJ6QGMzQUkofRkCDidRFqJK8daQEykjSmD4WNrgfQqG",
  "key25": "2wZUUnwCrBvdVwYh3qKvz7p2KkAe8W6KN1KKZ6WAmbALhw2XTQ2CEPmjLxkrEqp1wZptYWtm1K1QxTmanZVz8jAr",
  "key26": "5u7Jj5oLox8Hs7Nd6BrvqYiGdJpcZi5NZ93g7D3sRQ7d4cutf7nj1neEap3kSitDF7kXGcXicb3HERfLyHfY5Puc",
  "key27": "3GnsUMr3rwhqjxdQGpEEMjA9ReMzYEqr2ci4cBxnJTwJ1nvQa9WBJQcfZoDzoZkbyXXriRwuUXaYytWqrnhZ6CHr",
  "key28": "5x6ch9o99gvhnggofEEQzA3v553Rwfji1okEsuhVr8VwoUj9Es79Vj8Y8VnhwLsnZQuVUPiSrZS7hqZevFwizrfP",
  "key29": "3tRpH9YAf55rhKQuUuioqsurW4Be6WnMDsuQTbm5eJusDimUwSsZrSK1MoqDRaB8avHsqmPoGTPYrMPyvegLj8U3",
  "key30": "4S6jSTavFKJKP7hPimeNNVxRhBzzHEirP8T6y2y5YRo6sTza8ULsMZ14XrZ23dYmq3BSRKzy8FLpCT1epooR9kyU",
  "key31": "fpnRB82hskSGLMXpEuBgehuRSUK1Ew4o8JPc2T4kQPa5e7TCZBjJHBCjLw4pm6HdXm9LmfT5UYcpXAA79SL2msi",
  "key32": "3j2WGsmNr9xahBgz76ZRHJRA22niYDpTzVByRvbvTLdj9dF9XupuazxD5ZbNTyUnftgDSw2qW621sCsYdvK8iD1f",
  "key33": "48m9iV8tNbvDrhbisMMPAE2bJ36c9B9x2LsdcoHiysN9kQthwZf1NMTnjniMBTnWTskuxoDzzk4teJWUi3PYnYa9",
  "key34": "4jb4UWnRTr1acttzA6HfgTxyEjLy7nBarFtDha1SDfYeH446dP7XsxmAS9ixSLmi3puejoxqdqbqh1isAVcWhEF1",
  "key35": "2EnAX3W7hmaG4jfVycTHHLuGUKEXoRWGbgjpQJWH4a8LjiiLxt5GrCrPrWMhpYSQyFETuNqs5Zgmv9LT13bLBYn1",
  "key36": "5oprFr1JKsttePJ92SLZQ8TiBhEXvXLzmdr6rgBGb5w3cskG6X2jov8P4bBMScxS7BLJn3j86yd9kkeKVWGWYEMF",
  "key37": "4t4AvgNz5Jjj1vTwaJqEMcNTyiQG1xk6asmWp8XgALXJc5Uf9ojqgNrR914FLtvwN1RxoJX4WV3evuNcm8QUS1aB",
  "key38": "4VLcEqL3WPNTrmjakGcBErrvLSvZcvxUbUqGJqGmjPJbBRakrjodhzAWcENMAoAWS4ob9qLkdhjiyCozk6oEWbiW",
  "key39": "5puAQXfVdtHyANWm3QtkRvmiHUpmmA9FC6X9SBru3GLHLnJHU8L6HH4WBuDWdJvJWUHBEPgB3Y4drqQD5SpKPQeC"
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
