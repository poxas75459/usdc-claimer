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
    "5jB1YJzRSs6GSB3FboVf5ogcnkNYCshEQseB92AvAfCcB5yvGUtzxEy45JQkgT7MD1TGUtPE5JqEiSYhitdnM8MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gPpEycpAU143kJar1v9S2cBywQYnYAuJ4bTaiHFtirJUBc1BqJ4k2AjuEhaeZr82Q8XdTEe5Tiow1uGcTkBtLz8",
  "key1": "4xRWZeRjpVmZCpnuGGSHRLFJqtNvjjNzKM5PNcbGE88qQKoBRjjkNePBQYreC7ieGzxWqcetT3cenYcCRDJVhaRP",
  "key2": "FzYg2WgJktv4HTAfKZWmUeAuNbVKREzb3zUwVYZL3zhxUVFWZ9H2zXup7UeGb9FLRW8CSMqobNjSBz2GdnJKzRr",
  "key3": "2qidDJMs66CwDsGLcDK3EPKj4qAKu8SarWZhR9wZcf73jCdHFgbhmWcmApJopEZ6Eos15LZbtMeiah4cwrX8k4iV",
  "key4": "3ZV1ix9CtTa3ZzxRLUgcz3FBDW11izC4WTYbm1McXtnEP4MyaZurpzqCBDRHvsoXuxZKKrR2tgwRVfMAU1a4wRSh",
  "key5": "5cJ6AwK7U1XqY4hRJ42nCZrbXY1rhmFghhuKiBLx91z4qVcYoDTLb9mM8XpVL5k6iJTyBYG4oAfsCuJXckmtbBPR",
  "key6": "66yDyR3PXsHMVhx16A7rakrxrZUiCbreo241mQ86FHbV3z39xNmPPaBmhsbJtK41a9bLYYtviZpVw9Xw3FGrnPzY",
  "key7": "5CTkQyLFGMYM7r1rcjgeaHdHrgYQJLRL8aKfQVg56nRm2Txu53jxkmW48kGVbJ1Es794nWYqvq8LmVZgM6KiodW5",
  "key8": "5qLZDYgDbA7mf7dbKTPQKEmkJSxnkfatcdLGdLcFmsLePKk7FB6mShG6cJSC8dhEQCRz1zhBudknRbjYuMd89eP2",
  "key9": "he8C7dP6n7BMeQ6CmqRDe1FSwGfJcDp4VtJKV2YQT8EZKorFbt4Qn2ods3KZHcYr74CcZodVqDWQN6fwTrT7pxQ",
  "key10": "4w4f5LF1ACsqGxk41v4fL2y4SohBjBbbh6NfDjvSUsEoU4aCwMTfG3MC6scadysQfM3vipB5Wbb4Y3PdStpPm5Uo",
  "key11": "2YvjuTFHTjYcWFsoNVmsctSSBVAWkMNumiSrtcgyedteRsjj6p5WNgBomMHaiMFpLLGYbVdEp45g2eG5G3gpwQz1",
  "key12": "3LZtDEqKESYXVEPhobu98ASNMQSzvAkqEQJBacvAW4aYc4adVo1vp9v9SfL79o8uTDEEs8gVgTRDd95XLJ45KqFQ",
  "key13": "2knJawMQg2zCtERRvQqYhJsDHXEL67PieQJQWJXmwASieFZqRhBRxhAUojpu9K8mKTYtqrqbhbnrKEBnZMPKUTW4",
  "key14": "3Y64G4iUHawK8H6KCkLzWofcugYMy37VX9v9sgnEDeh1fxgP5MVgqtHa3T9mjptHrt4t4tcv9wMUrhEBafm7x5CH",
  "key15": "bWhuRFowr2t1Dzdyq1UWAkcBdUYehk4XSFFuWh2nVqvRqe4bF86VYtcHYRRDGhnWwCzhhJk9EpmJTA4cHTHLbEX",
  "key16": "5yyAftcD6rc9xbpv8NiokhLXqURQanLN4vU3zG47YHZwjYnbqHE9frYdox6krNZnsivmXK3FQAHGqSj5L5eCumRM",
  "key17": "4s6W2vdrCcsh4umq7dJUzWpAZpWA2Zh25EqFkHbmQ8WQJrPKdhSi442FZMRZ9skd1bZzQjyTZXMUqB6UKDWASbnt",
  "key18": "35R1XMnqFRqvrgPa4o7NNN1GhBdqWAf5A8C7x9FV1p37N1DgEuijEmGw74ZWkXhaxziuzomwEPETQkcf8Xp8sSPn",
  "key19": "2zQs24vH5v6HsrgeWS7mXmDXKFHxaoGqTbgNk1WRRxZabnZhfD1MdBBVUDYgrSQzEFnJCgLJghBtFRicYdq8X2ND",
  "key20": "N9EaRKRP8q9AaXavm58mzBkYLuToV2z1q32AWV6qtiR6Sg3VJmGNU8TwiE7XTVNjnKTBTPnS5djhBYcf8amViSm",
  "key21": "iDiLH8Lr18Emsb3PFFa1cGk9rd8mpuHoCDaUkdxW2gEwfiRCeUkouriSSa2nGeQsqks2CQj5a3K4wEfBzSznXdP",
  "key22": "62MMNEdLbNW52HMHeAcHoLeEqxPj2QNTVLAubq431PJ7d7JyVLzUXN5LZ4Zm5UztGibFzevPg6cRNnRuWEUci438",
  "key23": "46zHrKtBR8aKvYqew7fTdZKVSijvL7f92YjJCYjg2musE1ow6uoZJHgUAhWWphbJ8bKhBSK1EdJpCqPiSAgwhC5N",
  "key24": "3xHS3nmeBcf59WFKqgDNNKd3RjVbrc4TtJfiMWUfyybuGrgGc5fR8v5rXfUxaE1ziX3DHiAjrTeQ4RnGpH9RPQtK",
  "key25": "3jwcB8L9C1duZknpPgCyDLK6CKRRv94dfNY2GhmUubw9ec4aDdDSZC2jk7M3qBb1wWG7iy2JpJGGb7hLe92sy5Ma",
  "key26": "2rC3mVwdpvtQDnMEaNfrwyfFQkQkdUjPWaHupx8utpHtvem9RTqk4Bsr39Csn5ZiKf11JH26eAxd3hcNDs2Dw1Ki",
  "key27": "5XxKvXDDGU3CzJ84vzy1sjGMHiMksN2SVW9ChHmPxjvDgqTVqayS84sDMbSdpUWgEhMMUCUp5LmwjMP6UPs4GPu3",
  "key28": "41dpiqLqH3qSUSTFt5rTHLZ8RmRbXTPrLv2KB8GhehyNdZhpXcJWAviEj4w3gvs2tV4uQuZyPwtqQQxvCdLWcUwa",
  "key29": "4sLeBsWnZLAPPPU3GnJ3qWi9zJHZdVzoprGoiNZNqQBNTDbErCKERuXeGeA111X3NcJYjDt67zp51i4aqjENbARk",
  "key30": "2vuMPLqfu8hZ4SMAZJG7o678CrUQwU4y7TCohzNBNAy4G7XjdePjS1NxM4qHk9ahmbZFTKouK3AjL1f1uTHb77Bo",
  "key31": "2aZoQGKG9gcskndyWdZ82Mwxe7vn6boTbDRFjgxrp7RtHXrk56pbkEr5tpU1kzJz5GsHFDJksH7zZH9RSHRRNrEf",
  "key32": "2LsZk6P2EmMBWVnoEHrKaPe77ZZkmk1NZWqx8LLLpTdym6YDT9eg9DRDLeidtafizBYbanGpti6vEmYjQLafUjCM",
  "key33": "2vZEaw5szfCi6jiUkJnpYDY5BKY5Vj9zAa94Ad2YBKGS34e3tNhu3QLTK7VHtSEDZDdiZjdMYoQYY9qNhohCH2p6",
  "key34": "2zXo4t6sW1rVexQc5yNMjTqTcgNCyTASvT1grHWXgc64P35j4bNFzNzAS42UxqzSpQn9ZWkwAUrFBrwHVJdBN7PU",
  "key35": "3kkMAp5QbV9dktCBV7KoRFFDqkjNbotbdkbjj7Gp74cPR2NvjEnSvZT7CZmw5BpbAewBhMwkM7XvWha4YMTEcTyo",
  "key36": "3wKBJHkSpkKwL7GHGt1Dig1aH8oF9HBRAhFPFXgQ2piHLKw9VdRc24n92TQK6Ry8hPB2HMVouWDL6WYwtaxruQre",
  "key37": "2F3qvMJJaJizQ9B3eK9NLVCDZczedn4H3PNYzteFL23Rkt34MerTjm7TUdRGrD9YQ9PxjG4G2VbEEdhmSLgNnHtc",
  "key38": "5SKSeM8MQNm6coA9T6knDRGgMW8MQgceiSE4MKXmGgCgFS1aesL9ng4ooHxUrWo24H5ramPyaWEF8N7HZcyM8SAE",
  "key39": "xU4dYBJX5Sw46Q21ozoz7uxtw9E8AHS7gnjM1uamwSPBAsT1t86Y9iJpBfQWkCHUgR6tCVRdH5HKVfBuss9ufvc",
  "key40": "wpy1Y7nuPuG5pcMwKd7GMzyN3rzjfasR4UcE3FPjiHH8ZnPNGDKEJjYk8duf3ejwMis3envdiuDuDWvaMQPdVH9"
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
