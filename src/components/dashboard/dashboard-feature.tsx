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
    "126y1oo3HjJXXK56h1SiH9UGXJf98Q8vaf9KWzh1H9oUH9et7oFgLiZpdGNDRQDPA6gWYbaUweRgJgHRwCf2pcT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h2WP44BLxUSZYsiy6wA35qqPp7pmHr4Vb27hinfJRVyrXKCcxFLLYmBnhUg7MtEFzmKjnNaCdSXt4q5rKaKQjGN",
  "key1": "5mPuMCinFA16WdEWjPJVy8frYzzm1bYwX24GdD68up9fqJvFYpyh7cJpj2FYRWgrxc3EYuodqdqTQQVftVqhKrkb",
  "key2": "3rodov6ZdvQ1aVEKLy8daw5zq5smRjfzUEfSABLBb8F7ZJyyfcqdfvuT48iiuHXxPDMTnbco6XBwDeha9PJBgGSd",
  "key3": "2aPFjthVPFmBMKe1KFLrUBZygCixb3FN8AjsD7iq9Tk92pGzFj5FwfA8ZZ1vv3Hh3hZVDSfunVvNgkJ1jZZsGAyu",
  "key4": "5qNu3txmyJziP1PbQGWLoPChuiDofBoMqruwgbJx5KM5jFebGaWxYGpCt8rVX4saqqVZX5JuEwgojjgPtPddWHSD",
  "key5": "4EtjhCebUbSCySNtn5gapZVN56T96NSsDMbYmJc9syQsDBAu56AypRAgauW3c3GwnU2pR3J3bJKeRjTS9sMYh1tT",
  "key6": "5oQ8hmp96vSWXcWKzGEWRxiuPtC3KfFPbQJYe13ZQDSKM8fdTEHX9K5MWJzRiXU8bsUe82uZJc8LEdEmVGQKY87n",
  "key7": "3HUs2GqLekKD3a8fgMSm3EA2DXWGLWiACZZ6w4h62cdigZTUBLfA5tfgcnPv2jPmqdR3FEFTpwuQ4n9V2CniR4CK",
  "key8": "jggTLYdZYknn3jSozoXEawLiyroXmfjBt1eZk3FHFAspVVAN47GHvekjSnME1KSxoiTfm1eQET6fDEickjZFd4H",
  "key9": "4wKccBQrBKLqfNAgWDHYnPJx2EWi6VuKqEnhcEM65vFjTFHXMKYZ3EwKiA6eXcPKFKoH6H2HcnYJoutnkeNFLtu7",
  "key10": "5nAN9ofb998jUB8VneCE7kkJPvEWqeox3uUhUrTvAYK6nQyRqhJ6vryZwB3kpqjrHMBrtm1LiUX2SZnAtdJCdyou",
  "key11": "2H6TwnhfbmnrFUzRPcW11zGfT6HP7A3WGrMJ5oZbRajy3ucUU6urggocPdfdnfC7kCt5tyYmZbBjL6uLT5Kpb4T9",
  "key12": "r5YeyXDQbfgjvqgkENofX7rD1hH6KTDAUCDHLUMqfCFhWvP3aQa3whGbbWPVfU7R9QT1WK2juz7opzDgbn9W5pe",
  "key13": "4ek1AiK3oYEk99X2VxynqEkzupt3hKXP3YG95nBaGM2w5ia759RG4JHJ4ELiPZm4XoGYh9ahap5xUYWioGYrciGY",
  "key14": "28H6kjaXU6vbM4oUdTSEYE8Rhvx45Fa2aRZLtnzmoLTbV3J7kvZtua7bFss6wjGxNxDAieoQimNyfMSUuNUJ97cJ",
  "key15": "PX1JgqNMPv8wENzAvw5TuD7vjdsSfwH3dPZVqR8eiqje3dzUUT9PLWbRKRJ8gAHpu1oQGsfJhYe4MSBhL1AR9QJ",
  "key16": "4mZqaSEn25dQYJQYWTVh4mFGEwiDhtRYAadkTFFdCyocWP6pMTqfYnMNwC6MUUbYzk4cNP3Gi5A4buMMVdvSh5Rv",
  "key17": "46wQ4FSaePCzwJNq3RAgr2CgpqwJiGWRZYoXARpEbWNASCjw1gSYWei1ezwC3EgbGRdf11WoefV81X8TdGnuZVzw",
  "key18": "3TU5yDLmXJtNCQ6jSHCirBCfRw9z4eCKexjgayUQaVprKVEm1Ca9uzzJCzuiDUX9o83FEz3sGBWzonAzkxVF71mJ",
  "key19": "V1Hxxjgvooa6qg2NKTs1mSkaDxNhKVKMpqxpLg1fTSb6NTQZYPYboodZtjTTjvnvN3xNyNPNJCwTpUo1dB7upzV",
  "key20": "pLfnUNBR6m2GZQRBLTKJKPw7sRX5CcQ3fLtr9j7gMxGpD6boohjgtWAYVGHhcinHsgod53j4okZ9eT26vyGWaof",
  "key21": "29bxa8hT4GdZRSDB6Nj4WN4ZNucnNWtEBRnZWXe3ymo6uiVRqWYSdpmE2PveE3LChDYu1vpJA8mDQHRCPPniuk72",
  "key22": "gASXgFQVBk96DejXbQTGFd8kwYxTN55sQB5YbqYVA3tNrbgQ2k5gBmfuFm4Km2ebp98bTZayVMBTkU5zohWTJFG",
  "key23": "5Bz2z3hx5ZZmMmbZY1PE3ZV5RBFGozwZgqsPS7cEa7mFvGcmZRRzHsF4RDDi9iCg5oiEUjxXVhtaD3Dn2hA41ruo",
  "key24": "2TWTZFRJ5wynuJrTmhz5JTmXUTBrXWaGNazC1iW58aDvgZTi6miWSgRjBH78tWWQ3ExJ1X6vo2UD5zgxtnpF5PLk",
  "key25": "4DyQaEuPdRndSpSjGduHpFK3vmMqjP2Y3hyYN8uPXB3cuwwgghbeGLJWLgifkhAtS8PWLhyRwo2MnBPsLhpYgohB",
  "key26": "62zUdd2Ek1kHgT6GjxyVhCLsHz2d81A5yQHeQoBqDMh9k4apDpSttganSnpQDo7w3UMxzenXVF2Y5oCaGsE8G2sj",
  "key27": "3mQvrkh7X5kNmj1BsmGjgLeqy4itu9nTo8yrDLjr88PkXZ4a26R1FDWuLB4cwrW1kVPMrBBS5yYmn6anJzPbR45b",
  "key28": "3M1G9oWme7mEpTdp8KQC3n8FwSHSCWGRWacbbmcTjJaEPm1LUEge8cVa7UZws33ZRk1KipS2aM9F9yEQsEWasWrE",
  "key29": "5ygA75jcoH5WYAHPdDh6Zyz3RYZZCnSWrH5iGaQ1gfYxTZEpeMFXEGcoNXKqFfbJWT5iPXwQ4TU9JfQoWCQyjovQ",
  "key30": "5bGRwbj2Hrwv8GhWiTfsT9oNrzhZeKYYZPBXTyLnkd7ysqZwt2ay5Gb8o1YikHDYJCYUANKhiiZwCp3AA1ht5whz",
  "key31": "4D6E4p3VwEUGTuavMDoHvM2Lp2fXqEqRTUAWGN1BjU7yxoeWB8WpuUKAfHSDx5z3paw8ra7VmfKN6rHFjAGCMbDW",
  "key32": "2g2yhLjyVbmfBBVy821Q7a9XSEr6or4SQ9vxGshoWQHR77xh17xrciBnbopocmgGbJWRotjmhNfCTsqSB16C9Wry",
  "key33": "2343nXNz7xx2PTrw7mbPRL7T1RnJU2DAm8HnV3iBfYYRQPSCVEVHEycggaT4r2AeJqTKnT7nq9hVZfakAtznwhDe",
  "key34": "2w9TH3FkTVDEwDcTtS8dsedoNvoQRFB19Gdr6gzKsFFGdkhJHZWpdxMH99PRK3WJu7K4iAeVcRm5wDKJqDJqBrTp",
  "key35": "52TE3fAvfiVQ1SZnCts8aqMcKgAVynZatEDQG9wGVGVDieKmXmWfd8Gk8AS8mFZcHuWbUTy5NdiFnNkuXxZAg59B",
  "key36": "47P3KBfZqzoAxSGMT6FoiSWioRaQsj5JQKHkreRamHxBWuGoJR5t8TEezxLWm9FktvPRpmNibkBCTxtv379DPZok",
  "key37": "rdpgXGsVFJ3c7AYsvFxLKvyxtL4S7wvGemh2ccEZo3dQFYr4C5AnA51bzevmLwRxHucqQDJkJjrxwyMBcbN61KR",
  "key38": "2cAX2ojQotbN7qiVJuwScSAZ4zSXuevqhy8436Um8CbQjqsLPAP5hcJWf8SCmMhDRoMUUgRWHL8EiqJuUoYUrtu4",
  "key39": "36Nfzq6YE6FWCPUHnwAxmXxxniBXVQTPy3uG4QbGS4g6LynGJGgsPEEbgjyHEheEMhbPpSmY2VoE7sbspfR72VUS",
  "key40": "5nW9MSfhDatKFF5S2TH3vUZHZtYVD3pZT6P3MjZNG3XA9RdtevKjxULFS9usg1cRwFMGa7txnct2zL6SVJkw8Nsk",
  "key41": "2mKYJe7wGBF23gGNsRvea11CPWUZk7FCCFcrKbzhFZnYkqY6W9Naj3FqbFPNUJog3Kuau1cKzEKb2AEUCavn1e8o",
  "key42": "2itaQBdMW9MT1La5JpL4y9MX4hJwumAw8KUw3aozJb63EBt7gvfTQ6UJT19r8P1sJXJ1SwPvwUcwtfCYP1qSnAU6",
  "key43": "2xpbC4DscwGcas8bAB9JFfhdjA6zHRirCiy4ynUSFMaSNJJNPvyHx5nMHQomAKYXTHjf58Fz1keuW31LBnD9dYQE",
  "key44": "2maaLTATMavu2Sp499grXxnB3ZjZ7MoMY8if9dMMtFkxhgwrbt3nZwdAy7sGFB2sWSX3w7JbQpbLg8wPzW5eciVG",
  "key45": "3d59nNVPRB1xVEJxX7N4Z1kV7qgRJq7r6tSi8i5xs1YvVCP2FuVbwKfoAtRiH7w5EBVr4KssWg1xazJrwgcMU2de",
  "key46": "RE2SWZhq3muv3vtgVuXCkGk6LDLjPgZmhqmPq5qCw1LPBEQUwHfYoJ27UdwjHBmKve6vwK9WAxgkSCYeQwvRVMQ"
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
