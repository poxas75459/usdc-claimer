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
    "3LhtnrGnpVKdHJiWrjN4rh8ZoxeHbWGy2xsGQS4r9KnqaQpHbsE8pU2hBswPwntvgxpPFVZF6q1htFYvZZb7YoBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3coGAbbyUVxpz4xQghKmhKQMQ5MiFt7Q2zwZqJa8xti998cdYqNv9HcE8nWZS9SS18DPokvJNwBD8MD7Rd1hV28i",
  "key1": "249ZfRMBVTe92ES4dDSZVyaGWS6HWWyWgamxuDcWDsdU2Dsh9pK2w9PkcxQmrSadT1RXNqgN5egsNE9BaBsyYEzi",
  "key2": "4V541Py7DPSQxUkkV61tBDSwsXBb8PhEJQeiCjS1eAAEFHaFaxvKPiY3CZUzhDPwMTWoMQXiHR6SDE7gqx8E3Mzc",
  "key3": "3XqjFZBq5aijiZyNQbNXoydSTWL4P8y3G4yxf5HbD1ssERYLqH9w54dsfQMYLmuFvDFpFU2Th4p4iNuTLkAPf5dp",
  "key4": "4KDmbMa243sNBerZ2kV1uTRLdW8MZBWfw2Ag4hCUrtRvsdhu1hMpd6NCs7GjebxV2LVGkM7GEpG6A1bBgfsKwCeh",
  "key5": "3H7QLQjpRU4kkoDp7k6X5cSBNKLNTfGwy2d6vop8HDok135bSMqkEidwsUuugG6a8gdRS5fxa9AYX8zNU2DiY8nn",
  "key6": "5gnwyLwBMvfjjBQ16DqeNyUAq3pBLdATim9sTMnvrwZ8aA65c5vsBT7xUFrjm1cB84g9jVLxWe1tJ7azMHtfFQnF",
  "key7": "4a7ogDpjAv84jDLmh5rnYhM3C8HXjYRW8gXLv9wLUpapwNCMmfaC58qz5jHmj8tdToY5JTqgtVwGQbtzRYSTsctY",
  "key8": "AxuW6bz5sEtthSDMQ1SnB1g9zkfaUwSJ6VDR5SmFERp26oSVQsm3XadBkndwv977szer3xNHnreRvrSeaTujDfy",
  "key9": "3Q6ES2SG69vtwUaHFG9NQ56GvxAZHpZeE9tuK94azsL3jGYYTFNsz3yFjanYrfstofgkYVUZYtdrkZQcbdyaMaM2",
  "key10": "5AQYyF732VyJHzYsYReyvvAM5rcPmASUXkXzzbAVsHYczz4YTvGR1bNYDzgwdRaQk2nSipA81zCdqwAShfBB3szn",
  "key11": "43vDnGJifTVHDSujnxbJN8chTMhiv9X2WdpxfvxGkKmhsY9xA3wTG33KYt1hs9SyPpcJ718hgpXFUBZ1WpNsMDbN",
  "key12": "5RFBg3vnqEA2VCqDXAdpvdwPWtdfk8x51H9iYprFvfCYu1DKnz3dSa97EGZtwjx9QwokVWi5Qcad9aMYmPeFwzsq",
  "key13": "58sUAwHGE2MLBRiUUFBLdEwM2DubH2gRiWG1iYrGFXSiLPtEQz6JoDaj9zHsVkU5guBZVyeQ11GVqYC4evh4DHno",
  "key14": "5qqqVdwhzN4BM8VJuqQnWYuRVjUaMbUYR1bNT8HZFtkxeku1oTMsD5DQ6oFupvMM4JWs61uC5qhyQ1yPR1GZjSsY",
  "key15": "5rU6wujrpoazpooB7eNTAGrFa1EB2L4emNRcvJFnP4AmLPgBmaYQD5rgQJpxsDSPjC86hKNrw44zqndt9c4GGvHs",
  "key16": "2bgx2iDob3aoXLJxcok3k6WGX2P5es92dtntEJ6iU8j8gS4EB83mg65z7rjjC7rdUAZtUn4A5nkBrqbXP8WMNgw1",
  "key17": "22ibYLQ8DZQWhC1V3zPHWyG8Vgvneu4G4QUW6SFSrQhAKUYbfG7ucAVizQQQksM61odoEeWCYtUrembeCN74GZzC",
  "key18": "3c5mQXBaBTkTLdP5QU8hd6sqA4ERjs6f2tB9GN7tMD4edGFomxfotgEzcty45uwduZLHAMm3hQ7BWAp3vYknbKZH",
  "key19": "26cGsyYXduVDdGDAw1puXNvK55b9EPjuby7NsRS2vCuEjAG7KYzx2HxNuRfowGBc8RqUYua4bmWPWH3YsiHgQzmp",
  "key20": "62DW84jR6iNthSUZmYmAU2Ctfuvk85oCBfjehtNKu8JwkCBcgWSAN1w9mPjmWgRVucMAfFoX4ynd8Bm4XuszYiAY",
  "key21": "3ZVtJNNk9q8zkgZEF3YbJM3AUi9EsdKw1q7MFqYX797FPHFmfgRbMneNBapDEDpinummZd8h5JKq88QtuB9tQB62",
  "key22": "4cTxeWXokVQ2qqqfUT6x9dcmb7PomnvzzqRLfV9pKXNZFigu8BYuueU6JbrZ3GU9xZTkVAkM3oCABfkRWQg2quWv",
  "key23": "2QrDdmScK3CrsPykNGi1Kqe4zZdxgHVmxcgVuA766LBsiXvD7tTJuLXonmVwyjsBaFJKrZDYWumEtMWSorViUtun",
  "key24": "2cvpgzrC56tLiUxobycxH8pmTFvqSf3hPpihHJpZUStaaAq6fq2qJ7nqLEQ4KeAsYt6gcuCreNsqWFELur3ZEBex",
  "key25": "qmBzAemyvyyPxrjbNW9H67QUpErjkrGE4PLhowiH2k3rcdkLu8iGzFor7GTsSFcLc2gQtqc8G3jW6piYJSui47F",
  "key26": "51x8LGviQ7dpG2YSeZRBcV1c52739zgQADHVjtqQUgAJ2fnrhouqcjT6mcGtDdUgi5XTNJvW4f5BazhAxFhamPwH",
  "key27": "3Hhu8ifbHMC82WKquMkTmUVYc5vzHekpqQt5bsMpausVYkX85qpfbdgG6aosXbyRAtyKYdg3H8gkpJBAu3hzHygm",
  "key28": "4Km89P8aJqrXW89puEj6nxmEs2nQZrCR2DXJT7W8kAja6raSAHwSZFXoVZVGBJeqxZ5FmCA7zSJL9nA9prSwifUF",
  "key29": "44aArXSi3QFxjEgwsd3mWrR4dx7Jq6RVyWEcYU39sHGYjJ3GWitWRsvJLfHRQCQaTntcpfqHHetwHmbfuidUCfsi",
  "key30": "5pzBoMrDomkpihBMejrkmYVF8D4HfoGJtUQDFbuEu9diikg4NEKrSJMcGnGhpzhuJ2B1SUoNowySYJrtu5jpChTX",
  "key31": "2KeXmnKod5F9CM6HMKbrFyRnXai1qSZZZ2K2ZTVWJVJRz2EXac6cRky4yXQgwjZ6zmyF1DAA7HPEEtfHFUuUvJvh",
  "key32": "ZHnHP7RRxERwmhQbuVDZXb1q1fT8b7UkbFVQmLYYuLG4wGDJgLjLr8h4snPmDuprLpGFyUWRTE5i5wFv8xBQ8XA",
  "key33": "3VQMithT69kFBYaTCVvwqVNBZ8r9FMyGN1uSxRk8pqzE4BCGq3gyxYAyXvqFLGb1EAr1hvGhC1AB3dPKfBw7EmFn",
  "key34": "5EVRsj5bmkDLsppabNT5EekxK6UNbnGcHmcBa7LfL5zMQEnQ878E57S2SMtJ3Z8UtCW8RFNkQ291k2aHwhQ6UdzD",
  "key35": "2MVe4gC8wjK8ec5Ld9q712P5Yr55w4cKrZRkoCSYGXs8qMvpMHqpckwBdXJEYpyYNsS7NKXVUzZzykEUyRyjiEeg"
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
