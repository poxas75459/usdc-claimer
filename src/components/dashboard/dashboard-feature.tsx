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
    "YiqyAvCjKjaqanscwGGnbyDH6T6hfHEcrS2f6xjgmgTgP7DowWjvAFmFuoT1vfgefWBoKjVspn1dUuL19aCqg1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XCZsADGxs8Rz1iTsza9EzRXAH9Pc58iM1jy3M5MXuA7XSkd5zPkBdRjPna2cVyPCafVao9orDMY9YVUENDuahyQ",
  "key1": "36YaKT5JX83nsPFF2xdDd26cj5DDgKmmBgYfR8A1aNbbhhvmDYzPmjygG7ec8Wh5S5brSBwRZB1Wz6dnWi8uRgn5",
  "key2": "46GdBv5mpDAJw9nV5WMBsnpmb3CjV4TFMeCUN9xTNfMdPJXyVLwruZmr2RvMd2sbMLPsBhg754r9NQveGBEFHtnq",
  "key3": "iVJjmi21hftB39NSzwSqbG2mbocU5yj5u59iWQhG2RLr1ySCyGt2heJxhF5fdrBa7Z6FkcqGcFdLHSqNZ3Y3oD2",
  "key4": "2MreHB5HG6mBd4GhVk9cN1kAtV5PLvWJsyNsXBJ6J69HM4R5JiP3m9dP1wDt36yHPXH2XxeG7FdcyB53DLbbgNNf",
  "key5": "5TjyUeQ5HHh9q55RsK9TVsWuAhMnLnLjjDvXTftoJKYBEshvc7PQdTqdrecGWSV4fwWjcH2cyfLxfYyPPF9zgfCb",
  "key6": "4xNZjNDqCVJPqAZcBfjp69s39kntfeKV1cSGMLHumPXARqePU5g54MfcWyydNZhQUP85baY1k5BEShTDGKBNYozC",
  "key7": "2Grv8x7vUJVabG8ANYraefM3yMtcjg517HK9goYvogjGAUnzmk7Fysi5egj5PiFfjnpn8Jqba9D9cARS3fnCJz2c",
  "key8": "4wg8umMTFoxJ9LPyAtYhe8jJCCfBkBySk5shUT7oyQRHzqsv4AYCd7Rq5zvBEWJsvjXYKUcHxbhXNqzmncKd4WgB",
  "key9": "3kM1sML1A2qZB5k6RRg1TkwoFhRdUPyBDNBZk72BTcmRzaDxKSJmwokS6AUFMJHBhp9jMci3RydshTGMKykMDLNY",
  "key10": "3AG3qtavs1NgqC9TG1ZtJKfwbaDWN5fGPVczLunFhgTEMCpdEkEBR5WzmzydD6KDtZdiXfFhgv1itbybnZCmKvk9",
  "key11": "4C8fUyFYrmApGZfarZkbHcAPjPyCC1GGyqVYFQPuZwf2AHbdunAQAGUF5q6Po7hxXcaokd4vGeTqCTtZzVS4zRDM",
  "key12": "2WPKTmkt9rMptTmDcZ86D9Xk3XJiYysXCUbamR4sMZJdFPsKLtZVSECESKoQGoBbcBFeovp6VENhgu8o1FGCAXuT",
  "key13": "5FavZpXj7FE4ajC7M4krQuvQ2btCmUkQ3rWkjbFoddCKBEFwxgWwSHs3NouyCjneX1K2bU8BZZASaEY8kV1M9F9c",
  "key14": "2w9cuuhAfTmMGsWYxAzgck2aECusjdHyPbWmLt2uYzxxxqohjbGfDVzoPnJVZQcLaWGPb7CoBdkWTGvctngBLrtJ",
  "key15": "23WiNTdSp8rWGbYrGZkhXN2Pj3az8R4XeykDZKTFksagpm3TJkYLq4QyQbTcdJ4w9ypXgRv8X8qb9W64fJF4AyJW",
  "key16": "31y2wVY6ejAN1rbbgmq9JNsRmVbkGT1x7CfpGrjUHF4mUE2k444fc3TNJQkdFvpFiAEKfaBbGjQfJkGxgwNJogzT",
  "key17": "5pfHagSNStUKsMTZCvD3yuBcdHtDSi6cFwJT3DLJghRjZURLGxaqHJhVxLGNGzbBer2BdvyTnRnHVqRs7jAiJGtz",
  "key18": "35kAq7ro4z7K4XqQwnPfxhPo8nXB1goVWpfeY3sMP2MKEwhwoPbBQAxgwDxQAUJMaSVmykMW3xrXDRnY1QmaXPn1",
  "key19": "29Wvko3UoSShyFhWaFw7peR9LDnwkChUcGXqTtG8Ee7LnvwCwgmjTP4TACT3i54rjZAyN1HusuhGbwof9yDW9g3J",
  "key20": "3QEpJvbLyEMpCqTsPSnY9GQHSeeDzYfUfYfd3LDsq1Qwbpo3U9TUi6Atrm193aXU6fupCjhbFTMNrLVXgAXqVkpS",
  "key21": "5QogxWHAvTMnmNBcdGHn1y29nzrbCxUNr5TzT6TyALARhHu46G63qh2hzgTZSKny51C5JHNKiijKYn73BVjfAQa7",
  "key22": "45eAe7bAew3RajWkt2F1dALFjETMLx8NttL8q6ebvdwa7UMhnkHhkwt57UtFfi5qWpVSzuqsxtNR9MiF22gUjswu",
  "key23": "sk8zFgnYSWsRAbjzo8i7HEfLexz6cH2UqXmiy1Zm3hkKfPKYACWNuzRyTRurbGpRNPT9wvLdMVGYn9WeCRdqPna",
  "key24": "4ozjM2TXGQRzNkazF2eVxZdaMDU6LNEYbU85HSdR3BvnjMu5jqfFwsURzByK1DeMZTMQMMd5SXjDXEH58hTBDXwD",
  "key25": "3BkxZLHeWqcJGrvfmCPHfx7js8WgyeEJjQfPqWwsqF3MHb7KiudKLSUW45kVGmMpmkEJWRK8zmPCQ6bLd1nCqzLr",
  "key26": "2K71SFcCkMsnN1jFMjaAQ8aniPMhE82MHa5CWaa8w8AR5b41fK37m1yj7fW8rV9gDtpHubWqKyoonJFdi88o42Xa",
  "key27": "49f8QSfWZFtSCcnSXQp5nVmmdUevwNr6AUJfsZPvmxdwG6WX9QBWNqWCoBF9XHPMZp52JQzZuEohaU3emToUFgpW",
  "key28": "2ctidxBjVjhRS3uCfWJEWKX7QREmy2ZuPbwpHbfMaUKBzRyszBUdbG5GEjL6z6UQwJzQ27axTvNdp2qDZj3qDuTJ",
  "key29": "42hcbz5qsjqL4M2CZapiVVVpo2TTTMx3942vE9oKTTyRWzP1s23e8AJM35K9ivq61BGrq8ubP5Ph37fpnq4gniTA",
  "key30": "HZDTwidVdSHvVZV6K5DTTQFp7eQUDmzgLR7kPn3s1D8Mxz4RjtCnD8FPk1469ZCty587puZXkh7TWAx7JvwrrDe",
  "key31": "4czEwBPjxBjs98nRWm1bC4jhtigGyWnoFaHLZqyDFqn3y4qgBX6qtSLvdpH1BF1kboqyNLjZkjvNDoJ6Ya22H3is",
  "key32": "5jMjixmamHUhkAApTNowPN6KZXvKWuFEaT9GpjBfw1rcCAFWNAMPWDSaFU4EfnX4pCFxL6r6Us5iSx3wahr3BnDP",
  "key33": "QG1ULYvBVxVurN2c5JPDutPwcSNPbi9Ae397aFtyxBdytZHVecGiiBncs4QFAsw5grriuHMbhCA76QtUNqAT87J",
  "key34": "5VNzuLMjXW7haZhEH35jX8C4UjgHeEi3XRurd8cB4YA96s17Li4ypEzCZZR2bPMLycyuwAxNPcXkJ1dPJzxV41xA",
  "key35": "4G2zAgLkbfjcTmvS4VsTY6aVFhqAiKDMfhxqMw3XxjTghfxnVXzYy63HSeutohPCtYUJnfit53PTHU7SRnoTyNsC"
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
