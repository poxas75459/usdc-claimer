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
    "23JnaAYeCwWgiJsQp4uc7rP2C7GMCR9tC1WHsbiFeBX5srpXGuqruVZgQ8hK72JTQbjwEqYykeoLpbrCzsju1t5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DmYWQRMj2BC8zMVztbHJxD3yZe1VnXhbBEx8FQW47U7dNkFEFNFuY7J2C8MBWoXPTKpNAMybT2A6YSt82hSwNzr",
  "key1": "2EL3kRgr3a2rTFKKAR1HXV6SAwrhuhGyrvCrJt883wX6gtJhZtp9WXf3XR3NKbroZiBiwymbMh4f2yyLkwAoxijf",
  "key2": "53ftnYq3ri1DThefcbskosj3GwbnSAvBJDdKeCGGDyZbthHd73X5YLkcUL8tiL2e8vGkGvKGVeBYDM9JKrnWvszL",
  "key3": "63153cbqkRGFt3AgCbGAU19brxjeNWtb12V3ien6c6Tf7FMjqm7jLdpgmUxpgxbx91pVDtKp6Qhdsn444bX7hwP7",
  "key4": "A61PcdgrDaUhzGBrZcKEyFeLAJn9vVh6eccJ9DpYdn7iCWYXRuqKA7LMJ3mK5FTnBqwxmBkagqW8bscRmBqgJXS",
  "key5": "4cUpYjSHk9eWAxbC8azU5Vymaw77QLELuS3fgU2vxmHQD3gnjEah9Lfy2McgiB5n4hMy8QTTfdL8itVn29HC1CW4",
  "key6": "3nxnRovf9niiNhpLsLbrUKFPeghwqVgkxkSoKwCarDePnvvG1oLD3X1ij1YMzar7PySko1oNFboTjGdaEUU7zbu8",
  "key7": "2AzMt3dWkKmJ22nPUbFnbXAoh2LwXQyPXftjYjmvKUeDKY1cqcPKYi4Dx85VKwunmBNGmyeGj6thwe4dawtKRsst",
  "key8": "4NZPfZ8ZWLAmMKsV3urqQ7TW7nxTwkHkpppgazL6wzpCQW2P6whtB74FQ34Ah2AVZy3QpHAFRSP7Cjf4EVy5MSB2",
  "key9": "3xKZzWbPGSmwQ5Y8B7wsw14G2sU67VNt2knnkHd1x4PsdsaVPcj2QVSw2omdXW1SqLSYyRKPzMqixdM7jX6qaPGA",
  "key10": "5c4GVxiPzWiaGamj3ENFYEXEd5M7jdzjHqUZbTin8bDYcRMajtnpT7Vp3uNMbxLTvvdzY9HqgxG2XcAgKpTX5YGy",
  "key11": "Jd7k7h5nsepRvtUT7BAC6HjPjczxkD7rSgT9ATvwh6JvwyJjwoLksuswKjY3fgvXbNEdVWxQUSPEsmWuoW8SDm8",
  "key12": "2D7VpiAYpTPa2JJcx43tBHdkMw86ftPvkX4AUZLqg9DDunco58x2sptHPJJLfvaGtqNSGR8J4NLFHENKX7fPzAAS",
  "key13": "3upUST6iBKexWQT8nqPseP5SSyotf6oYDncfZN9g2upXXz7kpNqmbf2KbeHiUdc9vYCSkkes7hN12GiKEwwZB1LF",
  "key14": "44kfcLyqMBhtCtkE7ZrzV8zbSrVnPizaYaZYJaxu1Uattjc4R4cgxEJH3MrfH4NwXpjfYGnQ6v9M3MeHGUGXrMgY",
  "key15": "5Px9D9LS1iwbd1qMg7XDBrGGLbJ4Nq1JkysKwU7EWAu3Hf44Xz5XhUjadwJ531wWZaUNgpLaHN6Kk1v4b7fPAVB4",
  "key16": "2ZUpgEk7uJL3wDLnwTAP5n39MVhUEgRYevk4USaK6FW6B4Cg94VHAs47MN44AeZrJDfbFVra2Tt6enDjEcUaex3Z",
  "key17": "e3WTt4yhcrspACb8RhjVbsS4i7q5hdxMteYPBRJQqsELjWQK7V8XFQToJzychD3hDdRpkTkW6o9BMwKMquY7gPg",
  "key18": "2YCNE8X3mHBLfw3QHAWiGhZim5a5UnJL1mjdZEUdW1iCDLCacUF5t6iVQ1Uoq1AHnfRaQ2p2sZkJo6TcNqJhj44x",
  "key19": "3iWFce1JuWxboTt2iPGwZLpC9jnPyGLjjoqkcDP6XsP3LDTxUp5Ub19GZevdCzrxLi8a46kMxgNKCwUmgp3XQgMj",
  "key20": "JnGqFLcqsR2j2WH5o8ujn51e5j4Dhk1DZjaLxf2hzq3nVAhASmPLfLtwCoUhmd7hD8o6mngiDBV7KJmTheHMemX",
  "key21": "3RppbQG3FP7dre9aAwRxndNRA63YCzmN5sNDm5W9dK6qpHyJft45bQcAyjxpXxVTKtedJtbj8q2gxUvmHboUQVTt",
  "key22": "4kvQmiyPVpDu5B6gUtnL8ogBvv3NC3CHbKqE3V2yFEx7RmTpX89xCGja2oPqRHjrbosnGtVssdasgJ4uftZjJCVd",
  "key23": "4h4nP2Xu7YCx3qQfAd4cqdHLTbkikvv4N8uatnjzps1s7KojD7Ko7GD78djuXdp1N1EYCcwbQd8oQ3Kwx7sge8S9",
  "key24": "23erEmhX1UUZzrKv8g6ZUAiSNdseyxHPpr7U4GFnQWQpnQrWyBGDRnQ6jNRbPYkdnA2d6BquBELrLoGiSYsQ9hnJ",
  "key25": "34o5BJzHfEDjmXhZ3VGwkLT2Fj2UdWY8ZvfmvzipsF3MrdECTKfSP76ihvxGRAKBFdupVsBurgMQF9ZprTox61jm",
  "key26": "2xD2WSuiYp5MQydaeiyhwtaZ9buGHzjykFpCF9UmNvMdeinir28AXqMsffUDnQJcLw4VoTdf2iGoNMAgHucmXyYW",
  "key27": "2Xayx6y32xrfo3ZPgzSEMtc37bKmmMwhzby77wmsxgakZjPttfJWoLeUGmqptBpyk8TQ7yALAVUfoZzUyjtCyFdR",
  "key28": "2iRweLTq1wD7Lebqr7xisdf5HbDiGxYoCaULRRSQuNFKTTAKSeLYco4MnUACAdowQizSzxwk2uc4tosTD466EeaQ",
  "key29": "3hU9NN2EMdaV1URBhoVjr9VjpbggQHMJ7px4pgPKfJDBt4XfTbSyFZ85VyyBc6WtttB58ibxEN8CBhBDFxzGQRLx",
  "key30": "5BuNFzhBypwkZa738Edr235AFhkKjA2gcsfY4Ca7F6a7MTHo73iwnfmuKfVT3cVdmXXBTL4W18C8wRZeQSTxdBxY",
  "key31": "24T9mKsuDsoGNeFYxUEztsn4zoNdjk1vreQAH6iUJyDpagjt1Cgd8iDzEJjvo9MWeJbZmcPDEUg6vbsdYLcNn4zH",
  "key32": "5z9xTgVrnCZmEQw5kYD6VfqVXiXUnfdtfzT4ekJhABQxA8GH4GgJXbkqGMvQ9zTCE2Zurf8JkpCc5SmBDJfYR9i9"
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
