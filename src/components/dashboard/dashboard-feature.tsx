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
    "614W915bNb19uDpGdw2J4JdHQLBREHK574x6f6QHFKVzVGxNeDnCbCyzMPn3tStt9KyVyuvSfA94MtL2NorBs9wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32rYPZghGB3F4EG4NrEtUYJ7hx7f1gazPgVhswSwdUaac4sjiZPxxKEkMAbphiEBk2x5FHqe9oheU9kKNAKjszY2",
  "key1": "2xcwefy5X9ryr6ZfTBRfGwC3ZkUywwNWoDKL19hhSpnUkqtP5iwbA4xRr6NN9j9QfAFMH3T8VvViz7mpfJWv3qxX",
  "key2": "3DX8mLwLXyPEaHrpq5zevzhKzPGzwJW1nuj4RZ3zWEAaiak2gfKrkwgrJqUXn5C96V3FnaksLo4UyjXd97cTZLfp",
  "key3": "5M6yEpdjxiNZcvUqU8i5y72aRwWQso1w7oBji6o3GmFsvrXzSLSRUn35RemuAFWVvrnEEnpHGJfBo6Bq8HkQ87Xz",
  "key4": "GTkNM7zyLYxNTqXBcuPb43miRtydp5LSX1BiryW5cy6djxzCwwpt9z8My43J9Kb8MDTzZVshXJwUkjY4tXxkvVx",
  "key5": "4WQhudqSgRtSC8YRqWuUf1um3HZMkUY7TLnwpxFVXpnNbwhm7gPsyBo5tiLBh6AUZB8gK6R4JfGJboQuEjgjhb1K",
  "key6": "38pKoCHq46aKcCR3TK88NVpgZWRPv2L5FVpeTR9BFButAXLkHWgF3JHQe7ehHWoxnxo6NFGckU7yFjZZgvCFmhdS",
  "key7": "5LKaSNmAHCBLoNV2wT7nhkXECXCrCs8CgsKK8ng3DpwkgCzugf4SVSaxii3x3AGEN97p7FH1SkBAKdCJ3dp85NvJ",
  "key8": "3xz98yvpVVWAbY5RGKwfv6UJbnuJCWjDJ2EbJSc74ird8XYeSFm9ZRfnMvJuenXRV3cPhDSYAD6fiS8rjXVATTLe",
  "key9": "3ciRh7FNBLkmreZNwNKKgkz9KHfzBwtVepwKaT9CKnxj7xiFTGy8ifdqJedDRWMxB8hH8ozgXX55HXf795WNi9Ki",
  "key10": "4YttWTWzNjrokr2t1BDttRmGrCWdfbmhiWX8pav5DAk2b7equNJnX6mtqiSb1Csdj3JGLUUvLEwytX7sFUYVHcGz",
  "key11": "YNnPp6vPwtWNBLKL9Nn8x33qZRd993DYUfMgsj2fKCUSRdQYykKURrXbswaqKbfXgYT5fQU7vSg292bv3Eyx5xs",
  "key12": "4YhsS6kbDAfRX29wm8miH1wWRtr1x6brTcsJYHkFpfhuomG6tKJCfSFw852KNBn9sSwHbg5Kt782iRuXpH41matH",
  "key13": "2biLr4CxeHkqP4JMcNAMu7TU22vPBy4SP7wrLb2pQW8t9n1ZLHriKyJyGxsMhvzGuvvM6Zxqr9AADjNVVtR3uXsW",
  "key14": "4rzCGpQfK2fa1xUXP9CiHfPwnabXoxEzWQQkMEW7ikN4cFbSnivBCGqceu8EMu68eJVmZvFdVdRCfF1kt6sxvJcS",
  "key15": "5Byw1yDqHvaHp9VuemCSW5vETvhx8rtFb5jeshViEiwKDTVbg8dNyYBY4GynUcTUeXB8Wrxr7PJ6inVT34DWH7hv",
  "key16": "tQUxKKwJKFsF6Q8g3dhHUWeo3SwCqyYoQxBXPG5MUHseQ8hP4cbK9mfMXPd6vK5TreBehhmnBQ4XCNnjxoWsnTv",
  "key17": "38bj4WxBnQ4aFwup6Q5chRvV3pjA4qCxzpcZRiuG1UjxbEGVDCaPvZBrRvGuPtZdMctSYaK1ooNAUjfYdZBe1RDW",
  "key18": "3KDVRb6a9MT3BgL8JqT65NKLCP32sipuLrrem9tcCfEJUWYxypNFu5KmtKKtdMSxi11ffS2MRVRuwYTc2H332mMT",
  "key19": "3KkyaBGqzmHXMoyb6X9oEr7myeHriHWkTeJmE4cvJmhJy3QoUsbpsJYEsLihDEiKP3VEt6kQQXnqpngSvFVozuDm",
  "key20": "2ZToZCrUFp6LZf65da3suCTZYYHF2iYSNgTXNMxL7C2EkLncbiUGfMDvKF5rzpcSpQNLNBTsJcKrGVvD4WgsGpCe",
  "key21": "3Qvk4QJF1n14pKNkQvq5hn8n819TkdQKX25HmL7YcnHYDdBqjc6ravB6RB3xiBhwun87vE1g7sGq8HVMyKzKe1LA",
  "key22": "4fHNyLK9t37MaqKxkDJa27hNPfBrpJGijmkJ7L1yitDhEmQPhdfsfPGGBYKufC3nwxTFkZLgMhcRXGfUsoe6fNjJ",
  "key23": "2XYL9WwBKXHtJu16k9sgVghiwHy36wR1nifZnR2ZdE1ipqvUzD8ptzinmXc2wAicexcKqYRiThNWSrJu24JoBndc",
  "key24": "5en5Z4VzqVyVDL5MCQhWZJ6EaZrGFmLoYEwE7jAmcs5MgTp5nkFMVtRAnuFKHMrJPpEDisGbGU9oL8dXZvoeLj1L",
  "key25": "7sxcQCmYKFREj3kEgSGg6JccTaDiCV5RCS1oyhMDY4n4M9mw5qrje4rECbrX2MLiXfQmY59d8nuBH3z9QUwK9ad",
  "key26": "5SkGHDMqpHnoaVGdkNQ9UUxRJfkuY6MUiPFyYc5K5FpSKaTX2XHSTqgyZKiLJSKKuoxunWJCU3fBJXkXaY3uPFaN",
  "key27": "3JLPFDRNpqMks7k7PxUzBUFstSYyi8493qQfF4g7JdB71mzVJzXrUZT4Bctv5F4Lnwagn9DxKMTtVVFzA2TDpWte",
  "key28": "3if2dZD2cdNwfQA1ZVfDBt9V3u6DnUct5q1sTcwWcmeSfAPwWriVxJhYrDDpSm2wsP8zdqB2CY8jZ25cDNJAg49X",
  "key29": "H74VZGK5tgS9HVG9beVgeeU7dVeVj9YUfdU7kgTXKSCJvjADxmYMAhjqnpNntbcrZ69Ks3YwFd6VDnGM3uPzRVv",
  "key30": "5SDfdKfjNVPCNaH1Y5PLuPr3J6pMkBWB8nruCbyY2HGGW5cr7Z3HN1nSN6XJENytiDww24QvJo19A7uraTjBqBnm",
  "key31": "4LNJb3TbnXX7spAjxAtqxnkV599F3ckQttVxadKz9Z7vsu7XSwq5Sf9S9rCzKGgamYPDxcLLwBBJn9wn7MncHEGq",
  "key32": "dLpU56CdVDgKAQUapEiZpJ7XvfgAhYFRbamxdch48Z8trnb2RHGujL2j1bnvJbfMKiYmBeQgCbyShcSeCDJS2jv",
  "key33": "3XXREYBbR66zWbXp3m6m2gxkqxcfk5BmrWMo3pL4whCZDwnmU7bHdRV3ogQ3N7157ZpYdL4xkiPCH85AyRZSrHug",
  "key34": "26vSynFhkmbTgAbyWhL8V2kyWA3q6xFwfBHbQsz7cYbzBCy3okdJnXybzL1eTvkzg8nSy6wsUinLdpcA88upSULF",
  "key35": "4Y5vA6CTR2K7d2Mmwn3LKtnfwMqYEPkgruNft9ySGcXN42JcsuU2EHpZB4maCdpGQQv1wfQookCgGkeVRZhe8KnL",
  "key36": "3hT5ycfENXfT7nq5P9P4VeZbzwrRdkVrPjBaQNwbjGw471jjbbuoJuMqRKmedTYavsa8TELtWuA98PjaSrsqzYVx",
  "key37": "4NEmNNsxe5rFudHkg1QroxciRnTio1XvUGGpCAwUCDvvXQBX1npA8KjkALRCiqN4u2LaWvJDsQpV8xdgrCKFV63B",
  "key38": "28LmQ2aDFUNKbG1ErgfU3f6RhAayiTWUSS2ZHzMsKY8WuwNTLKBqmN6ijyWkkaxc6Z1mUuBZPXjsZeyrKPNfLZaS",
  "key39": "HP7n2TM7QBgmdFX8qVTrRXki2RcEpziAzai8TZc6fuJa6YsZGVBmnwtDHksoqMWcSE2di1X4JDvr2AMhF7jyJnV"
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
