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
    "2Wfs2fFHVQE5zdcqXPUe9WSLw7NeLThUTXf6AiQGpYmeGERsdGKHdmkQXbQuLkMphxcy94MahpKNMxEcCVkYxxub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "641KK8uEhkmrcAhGwxWDacnqzCfF7JhaoVfY987BV36NgfLPNnawBQgQRPSkurvLjA8seKVqiEa8ygDsGM9pyLUp",
  "key1": "59FoXiTzfbEVDTHD1JMTz9SpnxvUfHYJFrtzCV7jp9voNGd89R3UWKBfbgCPvmfxeKJxwx56UXQQ1DYZSCbZX9A6",
  "key2": "pDZGELtu7nArMkbmnYyhbZqCbgmEB9BwD9NTZyp8MVkb5g5D2bdFeNW2UNsHb26UAKxrpxcVMXGYMAzbeuKW2Z4",
  "key3": "2v1ZTZc2AbjioYrgUPtc8CuGnfNUvNpxyCVQ8CH9CMRkJFEKZ8zzDh4yk2MxrBPB9LyvuDBt5K4cmMmAuTKaxbtn",
  "key4": "45RmFv5aSXQjS9C8ZfnXrFi4UnJRgJxFufkoCm4vSGfFTPnYaPcZjVFViYunPy6382EbhnN8fC1eAD1MhtyXm7a",
  "key5": "5cyQaVaDH3U7JRUUMCWnVGsFkzAH2M6CRfYkpLmzN42xDV58W7r7CyjrDpZUZi5W5DYrZvf1jU6pfU7VnxvTzLJe",
  "key6": "5mkEHWsSZndf2dLjGsJgGcjuAnb2uHGw3QpMr5W8JZnMmt3geGq9dHkHM6REfGAm5bh6R6DBFnuTfmu6kX1AxSwy",
  "key7": "57TuYijZi4Cme7CyRbDZaQokMWjCsDyPhSjX5bbFcRcYkZxjg2CAeUbof2v1XTg6mDghYZwo7p5AGjkQgtmKjVnQ",
  "key8": "2LzGBaUqg6G7NjLx7u4mr7AJgTcTyGE28M3VeffmxLrXRjkUupDqhfVP3LEvTKXCnvK1gFJzQb4wZUFjEYzMh78P",
  "key9": "2n4WSgW1bbrPaKhvSWSVWYJTU5zEas2Xm3cAuXAz2AzhrWfTbgmrrjdwquFFPthFyAU3N2i11ckhZv6ctjmChb9R",
  "key10": "4DkzGVJgXqVQ7ufL3T9rtVxsLGkm93qDxmxGKB9ygvdQ5QjmLRdt2MvvyK34BNfDNoj7rxHwaNMSU4L6sMRXNDmU",
  "key11": "5o9RctRGKUkZjmZNTLiTTdb8HdMpHAb4gjKng5JC4D1S2Mh2rP6Q66gc9LKaaedVHCZMQ5mjR3wtv9sDDctf627c",
  "key12": "2gyaYCBHiUdD44jLhrLFqQ5wcL7VJCA3sZ79PbVmvy1dGp6QZL2BFFkTJGib2DcavQairwvo8GtSt8CSFB7EezrV",
  "key13": "5H8TitUwJ3WS1QPyD14pi8Z4fnhzChcRwPLEHAKVx8vn5KkEnbUST7mMEAALohiduiauHkfLsqrPyUEAByDvrWQj",
  "key14": "537QM68bjNuaxY5RWdLgaifTi2Uqoan8AwJkufG4ZjNThjtVtGczNfkNG5SXrXtqGd6R2p96Su4VabgV844BKBdU",
  "key15": "3HqpJiCsLhJFZKFxLxcH8zqdhH1xLVDsyB7UQDRJUvvsne7aE5XHJRZSHnSNGUnqk3PGnW8yd4U1QZjD827j2W5j",
  "key16": "4isKpazYw1h3Czgnqos175mktFMdm5Hbn1htuwRe39oqW66Qvv6AmwBa8uaU7EfHBz5wEhoyLcGiVcg4U17p5CXq",
  "key17": "3vhZTgkQAtS8NVb2A9Yz7GoJhSB93VwE3TYBsQL3kCXeB745XnqSHYgqApdTv3CH6LdvLRbwTh8Wm3X7XaxVGykp",
  "key18": "4Mq361dUQy9QMk5qpQVGYUvH1ogWLMcxPfbDdfLhsGL7hYpXmAwXSNQK6q7hesfADhXUbAqhapoPC4D8c9x74Vy2",
  "key19": "46rTzNwnn6eLAUskcDMtxqX3A8MJvqEoC6UHbhtDXYzrinCqm3wGxEzLe22Cd2m456aoQHd4hAgXdphHzFu7pKKS",
  "key20": "368uwH9Zz8k2KuNa1SgYFvrdCVxqqcsfcCaFicv8MFrCMYmbLU9xXGdXXqvH2tGw5j1UWCgdWsMbYCWeZpzFetxF",
  "key21": "3qtAoEXsNN8tWri21RsAkWHaLrafkaPLeSU6YYeLoZv2nuLTdhsw4YAZE5dmvna4Mx1TXSxRRhS5V8okwJiXX8S5",
  "key22": "3t8Q2puBYeP1HTS8h67M6nZjzigC3RcNkDmMV5VrLNr6Kew9LwWjmN7JZwq7ZCFYJFsGapzXB6K5FaSzeV54HdX2",
  "key23": "4LwekfMBuG5TmwpqFHGWiA1YZbXLA9pvSpShDmWezTtj1xpCNCsFEyzuGf9cMH7YkTwBbdUtHeu3NsGy5sYDWzYz",
  "key24": "63xNhWn1mEXc2hT76YzTSziB9U2KMa8ucw4VbwuYmkGzNAGSYThvWe1muxh9VFQe82f438PV3aNnbZsQyoqgxLU9",
  "key25": "ubKYrhSkNucCVWPwgatube1idWtviyDfgJbSFxGTBNhqxTE5BX9s3QRxG6udfNFS2voBWQoSTXRVryjeuwteSv3",
  "key26": "3PXfwVH251ip1HQcg7nzAnv7BH3J4HkFDd91X83s6FRZu6UTn53Su5jdSvbAKZwToXCVbbzHsg4Skd8ec1UqULHf",
  "key27": "3Y5iV3dSw3jRHt3xfGGFJuhpeuwfRJCZ1qibtwxPj84MhH8gjEfTMqMb3e97yLdRTzATsfZtacnLL4MnvBynqH4g",
  "key28": "5hCmH8TPr4RYBTmaCJxhX6RPxek5tHWvrtwvj9xP2u799PJYTSWyDjPBtD6CGJgMt7YSrRgeH1HRbVyeD6Wt8bMX",
  "key29": "56NaCPN5uJHCJVTM4xLpMfs7T9T6i1Xhcb4kR6KfisCuTdU9M7whx7hg2t3EezXQc8YPJoM742dqw2f6gzeLqjJT",
  "key30": "aW2C8EwxC5FjR3r4FCyxvoPF1XPwo5EkyjDkBwco9y2HGhwA7mLAkrmn3oiFd52qWkTQNxXt5scQ5DRhHBYXXxz",
  "key31": "3xAUyyKGpvJjaPY9zEXyrfXip6TY2z7Q9o7og2wqqJxguWanr5zQ39Wu4p2kKfSNh7xbppErBv9xa7ubEDU77EqV",
  "key32": "3zMCBqM8DQMXAqQRfwRJ44HDDVC8zmntmJjx9C4z51LPa8qkwSQHVscWLVWnzSngcvg4nCVGqVwqvwLQ2T4v71DB",
  "key33": "59furgGP41DKrtgeKkjG1nMjGC94maJPnvCCz3JiRS9VwbXtGhhmtatFPSvr5VNomDqfQYuAcBZpK8RLMRjjrWgB",
  "key34": "dmy3f956sR56KJCumESyuqX2cznmDYJYyJA78XG47AaRqoH9pVeEb8qWRJDxnK2J6BNaQqR2Lm3LRgiEizZ63Jh",
  "key35": "5TDnKujDedin8dCwTgMW5d4Evu53UL85cK6rLoBcxpiuS5sNgk5EGJL2XRoQ8dZunVz9CvHBbUJM8AVVFB9KXW7p",
  "key36": "3NQRb3jwuwAuZ6eTSsvsVpL2hw5uNYKCjCNDUHMSh8JqG5gHEosQmCfU6WBitRPmoWcd5AoesFZSiyuh7oJ9Fky1",
  "key37": "4NGePB1Z9k7Ht8qSyPqBkdbTKFmrMBbNNuR5igu414nVv9tcSbhPBU3UToqK9Tv7ajpF1j7x7gP4mev79H2St5d3",
  "key38": "tVkR66r4JkSYrqHhVeBGymbUAj2QoDUuP9Aj4GGW7AcjLU8rL4bTd1vsbSpSLe5Lj2dR19rRr2KRFkJGwHuzMuJ",
  "key39": "2U6p855a4P5QZehy9h4ZySyeVhVTcnXFdN9td4UYG1KuCU1XLBXT9SESRmL5AJWyCFQ8Fgp2ZKk6T3BsbnbEoXVx",
  "key40": "3UTWNDUeiwBHq9fUNeiHsmKN1GWNqQyArhy4C9Q7SyrGbEMtZqrXyJ1p8myEGGrCoA4A4f2KT4BkaQW4vQ5Uutm"
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
