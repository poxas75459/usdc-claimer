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
    "4tRLRwDsWM1go5iaAvYqwjEqr68WPFQxbAFHTPfrSAQoBeu7RSUpkDQ2We6MnsGiE99p1WuQwxiAZ6SYMs5VL1q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Me7uMzz4UVVNwgp6r4hBf2a44PhEzpojwQq4deQodub4aZf3qPXDCjhGxBzFkP58SyGW8JbnpK6E8BJVwiuyX5v",
  "key1": "4uXMkcECZ9zQggHcC1Un5Low6x6xunQzMY3KVL7tUSioewmcgehUDoDg2CUgbLAy7RCCfmxETpFzbreGsd4ihAA7",
  "key2": "2pYoyGBQTyV8tJjzpmmgCwa6iJ2zhd9oXP8RbDgJKLpNS95NjUnnNY3spE1G6ZNZayNwuP42Zc8R6M1ZPMd7TMBp",
  "key3": "3YqVbjzP7YY3Jc5MRSftddjkihJqdRNsYFHpN3tgGFZV2MbWAmLyW967PSkRMYWB9g599KaceERxYMmQwD1XYaAy",
  "key4": "2uW6fatk85qJZLBnYSXj3sM8k6LezcrqWJG5ARb1YkcDUsDedqXH9Wd7Sw1yqqbxTDVu1eA3uGmJvbgD1L1x6qk8",
  "key5": "3E9BfNRAcXsxXYZAaLLZFFg26APwYFJ8Qrxo19BaVuBNJKhK8JEHWQMNJagJaQKdxj5ibyGfBFcdwYdCSMot7SaZ",
  "key6": "3hdAZBrQTtRRA4PfaEpt8RJSbupFWuAf9S42sjvhNnDgGCXM4SACzSQiUDexEcSom2usARFsbSSqmKoyNBfhjpLv",
  "key7": "4abucP8B7npbzM8fovSP4kXcU95c1pbAZGwmUyC5Sf8VpH8GnBJqM3SqfN29zoG8krKyj5U1kY2GSPrHMRrdm2Dt",
  "key8": "5uqSqfRBswcTNCXPnNJFqHDj9XXSTwrk32SfbdmxbWauAXRHmxfYESTfW316F1Cqke7hrEbQ1ryw9PnL5hVDuauR",
  "key9": "4Zz8zSoaWuq3xNvgCjrwzQZXowQVJdTx5iLqZTMTWrypPKWWRhNCeNzxNqij7MzrA8sq51YRE7Nx4zDGRNbkCgtz",
  "key10": "t33U7Hcfw1dVdyKcfNhU2wryAcEF2EJ4KcqWHQTuKNfaRhXngjBVfPFfnig3jobuEnKECWXvp8vNybUFgp4JGNa",
  "key11": "32TyrPAJtDXEWJvX1C2ieaxynF4zrFPHsYjwz28GqdTrvjpVBBDSeiL3eCcgK2oqRUdiwvSG4ChygNaVoojMj5nX",
  "key12": "5QCA5zhE4t69YQA7T9FDfoGBB1xsNJLbUhBpsQt1ZSQ1sxF157jfYPV7fj1aNZzJye6D65UCaUYL5w7bqafeoRtN",
  "key13": "4sR9FV8rA5zggqb9hf8dm1moSGiabm2dNMhisBxZnu1nu4azepzkv7SmJHpC46pfh3gydgsFPuMCYfybPgTbV6XT",
  "key14": "49UHtJ3AYqvJRCftsuogBv2X9WFyevAkRgcYF1P9LumYLCscWwBL3QaCLUKWAikjzASZf6E8P3afgaWBgZESEpqB",
  "key15": "29gkNqwoHSU8RLVixs8QFaHRK8FiaGvGTrpmj9JUo9LEBXvroQGLuEJjvYqoBKjSYy5Atdk4huefQ2Syf9jf243V",
  "key16": "LUAiNkhRthnfwrgyCd1Db19h5qdo2geQ5vfNT7Nu3fFucmda4tjpQyVCxABzAZEmWJCZC4Ns7aWdBaSR6u5Dhat",
  "key17": "M5XEPVQF4zET8njBZcFE5q16TcamW7L14iaiajkWrVLCd1MfsyecMdLUEH86uxCWhX9TWNsxJmop1snAusg7GMf",
  "key18": "61YXPjgtwWJdeNFWnLNaeBMfEhR7WKkh9reZpdqc6yVjoMayN5X3ixg4gF4U28LkjD1WnmYyjmkNavKsLj1QVb37",
  "key19": "24CKkJoticw27iXy8N9kszMuVNG9X3gaJ9fg6qfXC3M4R3Kqn826QvqUto1T6Ab3mb3iuQgSDjxUbuU2oYhfFhCP",
  "key20": "5QtfPNQEQGMGaNvP5ys8wdEU5vMoknDGE4tJ84S7w2YKC3yCfbKMb32q9CSaNpJNDZ3U7AQZzh5mtQmVi5jN8WYd",
  "key21": "3BMoQRm2BHy6L2K9xra8Ey3Ny4YzFGmsGRNafZmfm4uh49QpvjDo6ELYNSogPoyi2rwMVrsoQCKb2EdkxG8fhnqK",
  "key22": "42c9jCTcCPwkzwxQ57pVVVN2gnpb8inVbjNwPdfrgnCfSV2JNtddNtj7Z84SaJA8VciGEUNjL1WGAtQRixPEECHZ",
  "key23": "3ZsQNpr1pVdtuDXH2d8krZoR7gSMHJkTkLU3PiKGqe9SQ7F7mEj7UE4cA1Y9bd7RRxjwjzbphbCL736SMN9ZSmC7",
  "key24": "44w6urHoazamqrwb4pZDQq2WaYuJAYh3Fd8DKVdYv3dqDzqbtTAmpxzEJH7kX4U5bYz3UNGThUWHAhCZYY3i1VuG",
  "key25": "3H215QLqv4W84owvzBx4fLWcWsBWtLztVv1vwDLMP1z1XSUtW1tJqLyqAz22aSqyu4o4CpV3EvsbLPq3MsxWeswo",
  "key26": "3F2LFqbMqPxBTJbWdn86ET1c9eK9TKAZVxJeycCaPeUv9SpCV5ZEYkC9C9ouAgJJgxJ8fZsdJprCEhPftq5MZ7Qu",
  "key27": "3S9RoQtKd4cLhDz87iwv1Zan5RmDgHRFcbzALAwkAPU4REoJwgDkh4cLWikJzoQzwqWHgtURL3aQh9USERd4MvK7",
  "key28": "PrGCT1UJrAAQUDbu2Zz5mxcgtEPCuPYzJrAzb8KCxXtffa6XQDN2JJUwHCkCNkdq7N6YwNngH2KMC4Mu3nrWyM6",
  "key29": "vJduNFqtkqYEnEnL1RXA7yTNmo3wui66dbk9d2j792dthU41sLLWVEw7mGe67iSvSJH5usdc6YSjazCnby9RvQg",
  "key30": "2YKJYRKYZbTLgcAKjCrqD1pg8Bb61jp573rLKMLGK3hu1nRprszg91cu5AHQ2in6B52kzTgr8H1Y4RiX5UuVBh22",
  "key31": "63tbSr7T8AqD4w4WBQLcgEXoaR5uaYNS3esgxY6X9MwfgsoHFUqaUQgdgUDgANEU6mXWJTf8ehgWLsRdiGVwRzXb",
  "key32": "4ckBqzyHfHuV6NsHjRUc6dLLq2c9q1ZUBwJXHcrxP6M5e2yojAg9LSmKGUZ4XqxcweXY4jzv5QjxhagtqTTuSWR4",
  "key33": "3d6W4uMxjuoF7acHHVBXbTfdu9dEyYp7EwMYr2bYAeegPiSB4UJcq225EBz8bJuFJFRSE9H8hwWuv8b35d8qUJEL",
  "key34": "5ETWrfuss7NJuzns7PqHTExPYdhzERrmKLkcwkyDZEdcsHMrJaCDmxtjRCahcP3JmpvAJQHGHipJBUe7BnL2HbRX",
  "key35": "67QDVsUd2oe87MQWxvggBJ3opHNU1yYHdBhSk8oTsZdg2RHBEeY3wSJkSWBRtdrDNtDcpLKtPKiMcAPCv4jbGbnk",
  "key36": "jsrnhXR3UYJztoUVWr6eDsG8FxzhAi76u9cehwG678Li3xQPS2Drnh8HdPASRNiPYX9XEJUe9ZZcHaPYLjXEtbZ"
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
