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
    "etgRTR3QZAQGkuyPY9bTNBVtJtvRz7iCu8QdQhAuzTJa5JaGXHJJay5q824MBTt6AGq1PjHzPFCrhQhvwnk2xiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CdhitQK7Xhw4XqenjQSgabViiWotWxcf93XaUUbufXB6PjUwSFbekkH4uPqAXnDfGFsXc5mwfuLb2m69cn8ceM",
  "key1": "2ny7NMKEYXWy13ucnGqstw63e4GW3QevYHAvYdKxj4F6V1eXpzkArwor9M8QkvcbRXLXVTjVniZXLrjSTMvG4tuS",
  "key2": "4fUiMezCkEK6ehuHthG6otUcmSX42AKXba65yxw3Yh7CGXcxQi4yAECi5TTBU5UZDwtnbao2fKrxxGDBrDj3h8VH",
  "key3": "429tTqpE7YybT8Z3UCUYw5tL5LNngRfNKwohW1W52YireMqkX2NKbvQQMZGVEYUbdYQrC3r5VmNpEPqZQyWks34A",
  "key4": "gShpZdyegKj4T8tXtAoocz7dTiCJ1mojGmjcJHWidw44JC3PACxgv4VAWyqXLJKgW8jZzi6m33k9sDxcjq5CfTu",
  "key5": "4qsBVyr7BkQYpJBEFmBme5xCzDgUUWMPbZdjYq96Khu62WMuw4EeRsZ5sh8u7T5KsFdCKb5RZCFJgHUtAo6A9tBb",
  "key6": "DCXb4PZ7MVmPr7x1nx4efP6UB4BYUgeQ1ah85QdSXfDv3qYaxvWe5ureFX85hEDn8mKun4zXtfm84geZi9iNP6m",
  "key7": "59AJofgZYa1PcScjYazerHYGdzCaesEjYZMt3AJinKJByP9FSKGMP2jiyPkNEKud3UDTFJmYEdv4UspiWLEmABaC",
  "key8": "3yMA7aFRnydP9XNjzMG2JbBRFHW8LyZxBRVieUnetEhcomXxcRR8BfsduwtFjEPRxb8np2wkRTz9DEfD3EEWAxCj",
  "key9": "2nt7HLgmbsEr5ZpxKGPdErLWX84KSzXutWxoT3KihfYGU6sbkr9hEN5kDw4rBjkHt3Lu2SdWKXsQvPMDcfcnGtPs",
  "key10": "3nGJtSe88CRf9tZYXHkZhXgcZDfv91MhG4ofyJ858qHYTeA7qyTtixgqgJsTpHky5m3oT3H55PaxYSvTgLSdd14A",
  "key11": "2jBnToRDPtdvoGeU8fz5r9Rsorvno8ztKvZqvsmX98VvadqtVUS1SHvuYmZNnAXkt8NYTk7915FxJwtoBJPaveKN",
  "key12": "2QT6NTp4etKmQFiFv8b8iP9BHScRJAg6gMwguXBoXgeeYUTi4YGXdPN4uoa78du3zHkTFGCmgn54o5ivQ3FsHxCs",
  "key13": "72MqAAKHqbicyNCL9NuvWKSHjyEeduXFmFoEWYtJqCofCu9QthEpt5HvQKSaYra3sBmY2Cy6jMfkH1N5Soq5KnM",
  "key14": "2w3VSMJFzMqowyNV5XsiwEoVzMSqRoVSrznXTSkkEkYn2XW3HKqzcfpYpGUBHtadMdaErHzcNHSKytADpKx68xzs",
  "key15": "3AjYjQUiqU8FG4S3dDmDheWP32bf7RTmDxbE9hRPBXichoMGKc52joR4UrN7oBqMcE1ZLiLKwZmcfytm4vkY9rjb",
  "key16": "4cw32SPiv74WbL6n9iQhaZ5imUYU7zp79YVR23dopphdEHCqXRvik7N6T1x188vVawKLWAjiZctBiiVx1K7cKoUm",
  "key17": "2cTn6VGhKbMrPreeYUeo4pggtaX5PrjV8hRPxQo4RLrNG4LweGdogyUijdGEqB7rzaJYePb1AEHfxAhsScqt1Zcc",
  "key18": "517S8gWyWf8Yp2rY5uRaGqBMjpyYhQy8pAEynuyXzXX67hRZFRCQmiu6ga9KBbcQCtj6dgHYniTRZNadMGwiA8eU",
  "key19": "382VD8kwRojHEhNHRYKntAAvxrVB15ugvMQ3VZCeKpxknBeKSCUifzHccvWTAtgMFgPiEDiGK5jR4uHLwhTXy8VA",
  "key20": "3xh1FpixN5V6UyaGStoTLuVax3qsZubbRoJxyiniavVKsfBE2a1gnvNW7sKT6KmCEbqkPSbQ5wNQKYoJc9R1oNpZ",
  "key21": "jmu1GfscLj8BZn2R9i6zZ76Kr5CrB9o6ChFZf7WCJSjCFis6W6KrqDKteEEzQCvnXhfHutgTqzqwYKWgTEyiWbr",
  "key22": "4UheFY9paxrjdhVsUmrq4pLjYaEfELd8uxis9H88nRjpwmkBzj1spemWSfy92iEm6bA2mkqEkfkBbjKS9Y9xDaB7",
  "key23": "3grEKBBhWbtpA8SGd8DoYk1Z18hNd8bLjZ6QmdmVDiwfaSxUEZqi853mcqA8fgqi8h1XsAkPoS2UnxR1PD1384xR",
  "key24": "5Msrp8vpFw7sYZRhWtB2uMwTABDDWFDWCfEct9fT9vnNJdGRdMg9Y684YY6aGES4xxTup4qg9N9SB5F2Hq2LsfVq",
  "key25": "2rmiEK4LmtJaYfzCmUCfvFbaZjpuKkp68G3QV9sDZ7WR4F6KYZfQZesp98vuPrDK6EQsi3kCiAR4BezPCUohd2BF",
  "key26": "3UBnTMFyRb2PYrXqujUjLdpeVjqex5YkQZzt7ovAwAeRWaGPAHYG6XVdgwfq5HVujdyQSNDwgQesxizVQqMfBoK3",
  "key27": "2spbAtPCGx4gkqXzuVaEuXv6qPKpEvkZkX7VHT32fEYp8Q3GWvAnYhBBHFpg3dn3KzG9QuQAEwU66rM61kss3mnF",
  "key28": "2BXrux8rBh9aUhUoPH5NoTeGDXbxBv6QXghhgvQXcC6tJvsr4s63imCYkLt8WLK4tAEhANsQe2bAFjKBaq9LfbqT",
  "key29": "59ut5NiLYLCpWyrSxbVH363twBKLqx1PZamE3qSCfNRw2LB736Jbkhh48yYLz6TskAYF763YNiofRqsq7X9gm2Yz",
  "key30": "DyqFDYGFX9LwziYY56F3Zpmmgek7bHavZPS29GxJis1yLmMBEofFd541i992AHGK1Rf8gNXgCGdKVQqELrmo5vE",
  "key31": "4Ke9fvjMTV3bi89YAjhc8YwYCSP86i2hTB7KhwLvHcjuogUCn9GFbqMWrJ23Q7HkHk94EEu8KfqDE5VqFvvyDE3",
  "key32": "55t7BSiZrVLJgBMc5MLhX6c8cjNk46iRhKpu6ZwyPSG8jbC29NDtx1YA6xEXr7rCqFM5TiVECtJPq8WmeSNhnZpB",
  "key33": "41QACUpp2J5p9HntqXNonPwbqtPAfa9MgU95VkBvuL7cbtXYz39j2zJC4t6jy33vQvvE7q5Fu3vQNbWtGAasn4uW",
  "key34": "4bt4agFpz643Xap98RBSZmww8N5oho3QNcu4cT1UoLWYbNyP8fzwyfkDtnDW634saomgrkZwEbndFiRrgXYCTjFu",
  "key35": "3GdNA7kAceXuujcsK6wCUsysGFPmi7mvVZNozzV1DKCenU1wYDMVzHPKTgiNCEj9akbTTC8Zu7AodHZ2QD9ZFnQN",
  "key36": "5d6LRnTGuXjKX7kee7tmAuZRNVXGP9eq3cWz8VPxS4zhqfqVKZAWedg36yCVjoSSfuFsuMhsRPTkDMZeQdWMtjyV",
  "key37": "3iu5fJ4acF6ahjmG9JvCRYwfJ8FQEEnFfumLCmxsWgsfynaeEJZYymJrh7tC4d3hkrpJyhMwrRwzEdq7YHJwHFAn"
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
