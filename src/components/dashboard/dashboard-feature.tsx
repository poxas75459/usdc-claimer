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
    "3sGZiVbGsjK46hFai5pdqoDZXqTumt3rD3vCs61qQYDMoyGNBn8Uw8waTrmhKESuszLGQuJwmRu9v52iSawVns2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NFuvHqYqP477H4bEWBCzoNUni53ZJi3ZemHLxoimcppnbUVUc5ZJeqnQYvGwLqPB5byH9stbQM2kLZG7ip93vpY",
  "key1": "5Auqy5C2eYJExiv8WMcjt5ZJQ1PrwiEMBAiWq8yVTJJodymZzCcepRt5ccHqY1Zg9i4xiP4XE2bzDjGXQnjuVSPe",
  "key2": "4S6djPcXi3zSeCvZ8Y5Xkao3dEsynmYWS2ZpaV2E6vsEtZrKnjE2FQwfEiQNzU48m9Rnpfxft2FziXDstUbqrF94",
  "key3": "4xbT199EmUdSFwaWVvKq3XpR3V4Lm43QCrpXjK4bs3bZwyNonCENzoS4mVxVtXmMeMNdjNjjkAXLWDg8RXo8U47L",
  "key4": "55qKDWunpq7XcuL5C3JhJBADK8gyQ4DgsQMwjqGYybxEnwDPY7G6RHkKiDPHatA16gor8juyemjVBw9TFesXbHyj",
  "key5": "3mJxFze9a6FWTTtXTZ8Bb1yesJUQ1meSRpgEcHxFS7YVPJ65y2UFP86x7hmdRf4pVFZDAMmBA5WqxgZSntLWieEy",
  "key6": "4r8oAqRPZB1tys39XCo3gAuMjWRzqLkyHnY75eMWthnz5qPPNadtTZTe9gQDYYDctpmyavR9Eeguga1qbCoBGWiv",
  "key7": "3HTXbgJhnncTFNfqz5RX13yhb4WX6Wp9WUbUjKvgdgASTpWxad4XsFa4PGvADP16uiHtJeHcWaBNKvh3u6iQs2fd",
  "key8": "47CkR4WoqY9AYE4h6KGh5jVMa2iKJoPn4Aj9y3LLs4h81QgSxk9mNfSkRnD5hQYp94VzYrGnbycc77rt2RqbLpAE",
  "key9": "4H9oCyHAhV4NgcLHHVC1fK46LGLxxe5mRUuc4qreujvW6NU3HgJDA3LnTAztVHEA6TwLBQecH21XSRw84XdxMdAy",
  "key10": "5nV2cN3YA3EVoBp1paz3W4CosMcPwc4awPjCKHEcnABBgSE4AsRAiUZXC256tsDWFWnwM75L9otJoiPzRt9sLf7u",
  "key11": "2AiVxntJ7K4B4gfgZmhHDaW9pzYFkpX7zSsmJHeAY8VySbfSij4joTmsoj9UAWbWm7qksLviLMUbXF3raYdBFqhY",
  "key12": "5ZoSWWw8XEghHkwNqLMaquMWPg3D9xKGbgA3rVpF3gaX3rBDGCCnX4eK7F39xJJUYu7AT2dTLasokyNZX99TMrXt",
  "key13": "47ukoXgfkAPbPj1Ha9HZkazRHQVUjgX9iWjoQt1DR566BA7ShFcbptmJWnie5cyDfNCY2MoTDkjk3gSwoDaTSjt7",
  "key14": "22j6AGzSTcZpiFNMEoFkKy2v6ogAkMqBf2NNRLJbBtbh1jkhdqipdvwUgcWzQkKgiqzKmruc4v51iNUmdfK6bWGv",
  "key15": "2NYxKRmpfyQQENs66CGk4SZCw8qxSfMThGqNEFLVR9ipudSqZ244dwcGw7L8zKizaSwfSyJq7QGKss1BFwyCMU8D",
  "key16": "2jrXkbuKwPA1hVG7nqmJBpXCE4miDyBYMMQZ7fiyEbJHBS7PFZSQHEWcQS3rmCmN2ke16dXCNNu8yRdBL7F9Acaw",
  "key17": "4CXQoj1ckuwzSp5aKsndqiZV2HyxNXUcDpK4RChhV5c8i4NuAZRtogLdnvp5uoHaJR2hZedgk9BVJaeKVc62DVaa",
  "key18": "4pbmfTDbeAfsxzCh9wnG7BUwNsBeLBHcs26b5i277RouZbt7pkBMSeAH6GV7eN1H7BgPXh9TqwPR1mmGM5ytppTP",
  "key19": "2spcf6mBqnkX24cQ3mLtGKePHGCy1RFfDnQiBXJBJhQRsue2K1tX9jcmotUGDSKAoT75y4VFNUH3ifmrDkozfyvZ",
  "key20": "4HcfXE7yX9APDTBvaQbhvvkRHxs3x6nwpjjwmuMzNYocQBNRUPQE2hZKENNFgE47hQTJgsAVYcSYr7RSJ2r3XJ7Z",
  "key21": "5nNM8C7sngYvcmQiR6CsTrEzS7vzRXQKqnpN18CqXWVigZn7voHdciW3JoqjysrAvbrDDhdwqAu7s1kJHsvDhABG",
  "key22": "2augBDRqEMwpgjFFJ8U76bbmXDucubv8kGJXMs3XAKDQHMVqWvY2vhKwLCUV4Yeiv5aWkqMNEP82RjisDHypn69m",
  "key23": "4bcgyU3ibHSUKRzXzwkMEq3KSni1xnrFWbSNrKhtnMRQorgZr4P65QSMfpHgFBhHAShs31D64MPhRcuCz8jCidts",
  "key24": "449B5FHKbMa8paPwMcby5C5iTuhHrbF6PKvgDZx7wyo3nReuKKzJHkYZu94M9XthydJr8n9ZCVyVC2VSDvXN1YRA",
  "key25": "3nKSpHUYWD8QGLwaMK9y7yMtg9gF8Po8D5kfCXHLJGhMnAebmMzwj32oDWM2cLrUNmGAyx1xJipwa55B2bsUMJSd",
  "key26": "2iYKJeEGv8zt6VVW7EomC6izLSWS16PWumd5udSXhApLCdyByep9TpjhrVM6VxXW3TPJoUYTwuuiVwYyWaCSJhBr",
  "key27": "wCZYHY85wntCxeG3QZcttX6HVyuCBwebroKCHNTbjS3QLtXW3TjArkZKd9GaxrAoZnG25UBFSmq6BtC5TVy8N2r",
  "key28": "2PDmj7pygEPF4JkgWwYWYQrHFFTk7ozbgbGHHbFQw8BqSXU8HefJN3hD59gKFBpMSymAn8mVFQnietZqrnbDa6K4",
  "key29": "3JGwjnE8Enk31CAGcdBetQJ7GoHADvrDZMFaTEtsKZtHrD3i1grfwWbcctk6gNvPsj2a7CXNPE5ewoXkPp2G6aZ6"
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
