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
    "4nBJ1cPrskNDhZb7a88RfpN1QRAMoHTA7Z6kVBC5XGwfPLSCyLbz9vUgbNt2RDQgBnkGFkXdDgXENEJnxPWefyUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TBfmVmgxBWuhZ5Mj7sq6HVdfFszDnX8mpy8hK6rmE2fK3k93FB7rYGCtPWtfEpPwHjE9N8cr3fB7Gcgt69JBvHf",
  "key1": "53LV5Q4ueuK24SEfH97HJeHpaYfis4EYzGtsQ4CuTe3SHAXYSiNDkUooVsuwZphYTpKNeUrEBumwHT8tDeH1UEFD",
  "key2": "3UjZET6dpGNruBRpDTrk5TPxpd3UhJ71WdhbAfitMnVzzwuDdrd5UdybkJMjoTgneqUAMpVFeqsUc35JSzscuVsV",
  "key3": "4R1cJACXdCdYKrAxN8gjPz92MJrX4xbfbsPPFUjqrRMSrPmnZZeApePpWhBftvLor3euL3q57LBM7LuiL83cRwEH",
  "key4": "ehPR6wJxgG956Js2gQZ7rMuDDEx1AuvZeSjc8RYKN9sGo1y5xgTjzvTvkYqKRdcZk3HFfrjqTjQse7CWC4T7KCg",
  "key5": "4v2S99JiRLY4dDbpN2LPWwUj7n71EAjvvqRe6qVdiYDteRTrcySfJLoKuDA37oUueEsX27appSKgRhedtzzB7RcC",
  "key6": "5ukSgZ1riQVcBkRAiQMV7zTRAA8TutbLdRBbBZWDRQQjKNgJcPTTWDxr3SAkEj6aDa4TQqYzA83kE7rCZd5hpvyQ",
  "key7": "5eBSAMFz6W9iJidXrjp5LDuHF2BKK4QE3eaNT5pkhkZiB1z7Tkdoss4JzRgqf2XZR4wNaMf38V8EyiBHtHzqQNjb",
  "key8": "3sE4oGW8UREJJ1ZrAYkjf3wLrsgDEWRbzckZ9UFm7zx8sPNG1JCgsoyc8Zz7d6VGDWxCoaDgFSiQ2sK3B4y7hFj7",
  "key9": "3EdiGeLFNwaH8FWEAAg5qV8kC8PBXRr7AvyRHzutMEG69tZBUQwEaiW4L3q2h7TUiFWZW7xz6kafeP6vVJFCNfaP",
  "key10": "2NJSxyA5eaEZCjA2wkk5ZNUvXnorp4W8TVsUcYsQFWEbE141VMmnhkWDb93uX2f5iL5hn492NVFd9naAnNGyZ7qL",
  "key11": "2FgfsT3ZFZKSgLbxbuwNjQ3yeKP1GABxuX5proR2uPt6mWbuGwJ8xZdhJcJtuVFYRhd8KThNecn2u8xvjDfLuE2w",
  "key12": "3ACG8sYB3ZQmTX7oi92FaCUtaaPv4qyWjnJZaQjtjbVWTzVQqKsBoi3WyJabcZwDuyemxXn7mFuS25qHUYf3gNfu",
  "key13": "j9cc7GdEFGeDAKx8UPv5rRCnwxpHdGFeKj8WWK6aTKnfhSuJDxV2TneXFuuWjYoE37AHo4uAAFS4EeWFRN1Ktrh",
  "key14": "LaKoP44ZecNPdkY2aDg7yjhYfnX1BJ1NfEP7VUpjd3CixH5u23E8ydYarZULyCgRXgFMg5nrwsDEfnsFQFD1NdE",
  "key15": "4pA2ufpjjDRHo24741SwY7jYtjod9cNYz7cRnTmYrb1TntotYs4fpZJbxXn3PFgSYmYcax1VmjAPrKJgN4yy5Yrf",
  "key16": "5J7PmHNDEzctCGDwZXn9XRYwZu8ZouQTVVVqDWoytrZoUGNwfbJJkAShH9W7SYu6g2gDAVNtEiWzRNS4uE6rXXXE",
  "key17": "3RmmTyhXFuNjSjaLKP6DL1WLtGBpnTAE8rhhEagAuX7Go2oRmybHGVK2KyYAjCz3LqsRqmkUK8CSb2bHFcNCCDqz",
  "key18": "3zhS7ibbJ3vKTs3cf2xLKJHsd1K1BDmneKD8mC3uTv7Bxr1qHPcmoppnU4MFkEdRi8fWpu9HBxwKp2CarSezPDuv",
  "key19": "3RNbPM4qNVGf6Cb2gwbpxVQUNdDjcCL58b4oZ7ZJBtxBF3XAwH9eMUWdEm6hnoB6qweiePaPunyLZars8houaCU7",
  "key20": "3QRGgsTrB8RcnZLKbR3VLM18SytcN6y9om7uWKMHBpoJYfKXfKUc4z23ePQrzQqDJZZZBzr1VnJzhAKZaAFavgig",
  "key21": "5D4hWVmoEZHtJzRfK2og7dfJjkMR4a9biDJoAdAgEzis4EWoQBz5m44NZRP17ipcWsLfRmhyT9N2a96WHYygaTCo",
  "key22": "LLRrhqRFSFJtHf7GcAx6i2eTMNrVST4A3NqAxc9iwsT7ZymKXSKprrtCNYgJUVvPNenYz66MGMWwkrGC4q48bBD",
  "key23": "4PvTE27ZatfTGBpyRKuEbjyexiKPxcDF1eM2FUd4p44xGZVgwKd1ytFcGQtQMBwyvFNyFvTgutBwtiL2AQefWN1x",
  "key24": "2dxcHV1RU1NDvSqPusSuu3CdJpUCmXuUQNX4cCwopSM7qxEpthYXYUGbzNWwH8fKMR22YRNi2Y8qRSxc7J8qAfe7"
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
