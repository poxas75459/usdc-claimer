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
    "4WR6ThuK17s7dxfoCtBeQ5zUgYT1YbYhvgWKNiarxfgNVjjtBDAbnPM8TWJFpsmu3fUgxjUHLxsN4ZqPqWzwuJzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NmNCwwpi5qdcm5m41axHwTpdLSwe49QdGLasUNe4DE7JoGiKNtXADnxQmTnrNPsoMAX6jc3zUfzd5kuxGfuqTB7",
  "key1": "dTRb8f3hxczDqbGnuSybaHqjQWTviCcyiM4MEoYoMPAJ1QQga8jg5XAa1A3U5FNFoRbbs7KChP3qVNiNB8wB2ns",
  "key2": "2mLUZU73uEjLK4TRe9LqsoUxx48TBcdqYdfux93Y1HjmnvCx9X6zs7Ksu46EKVgNNyCSq4XF43KLd2XHyW9Cotp4",
  "key3": "4sQJwACZfV2bfFgasRZbxzckY5Y83bA41ivVvAhmHd7zFkNt3Zew4buug95Nwooh4xwDorSinB78hyh9xrMfHZp",
  "key4": "3J1Qjw4Vj3rFUYbueG758f69GRnEmn2BicUszA8EEkQokdd7THy4Dbo4P7zRS5Fzh5RiYK7jBwtuddYqrgtw3eqq",
  "key5": "ShsnWAJkHtuGgFRSGATLeZN8cTo67sgsniTD7aTduyHFSu823kHL8DHFguPVVdN9HFYVJFrJSZtWH9mcEyhS9EU",
  "key6": "QsBrs1fugm4dQ4ehEWvVR6zo6dFrLWLp3etEdnXxNHxs2cR7NpxfBVEe1kfF2XwNraL93a2dRhu7BnhHNu9RAwV",
  "key7": "4zWQ5XcgbeNk5AbcGFQNEZnk4afPzrtEzN85x86dYLnBnTwqrTkxn2uBqNbidNYfjVKoXkmMrWTieZVR1faaDdJA",
  "key8": "hCYnMDeNR8FBhAHYXKuZ1eVovYNkz5UJSFBb2w6DkYPBDyR6Frsgf7yhbLa7thxnDBTwcwzLCWBkd5wvviqswnH",
  "key9": "5LrBMwAzY9hhXXEMhVzPCLoKRaBUGKch4BTCNNWgwnJ2nNVEPwVLqkUrQipzpEoynRgJnGQPVW7fQDsCAHUPqEvi",
  "key10": "5GcduBwjNKeLh1o799sQMM15o783AbBbw1veRSLs1EBq2EhGtHfR5s2We9zP1gCAnuJrBx2pzXAMQj4kMfYGk5mN",
  "key11": "41ehqVRo43rikDku3HGu5BGLSksuADYJ7De45wAyHtzeNa5kC6WUTFFBXbNqkjCUA5oUDfDFtrK9TEHtT5MkTKBD",
  "key12": "3nSKZu5R4AS2FK1rEV9LwFz6wG1RNfSUjGnV1LBm8CbyzG67iafWnaQ9Nud6c9WVvCgv4J2F734eSynVsbMH3vhA",
  "key13": "3esgeVx8sudN5JSVEWjUzFbcFY1qC8RsRgLwpoXr1BpG6vdLkp6BKDpu8Jpj1V4MgFrVcQokgHxjWVK8uYaJy7RD",
  "key14": "3ngCPyST5uQBZKoutdjgDLx8CKdcRKLfQpmmSagWLighDVrEmtZzVpcqLwzUBzdUK8GU6z517NDxZtXAPqz6Ep8R",
  "key15": "2DfLK7vxF6B7UtgvyMxUBYEFjd2n2XdipGszYpGJZ8peAgecMHviYGnZr1e8wSgrkXpZr1HRcG99M2kxU9LHf8gR",
  "key16": "HwpY2ihsQnkbZ4LA2A6g5ZK4LtWM2ccUt1UNAwAUxwMGGvGYLcbGbYG3vHSJppJqf2e9ujwBXU5xoonbtZibYkh",
  "key17": "33zaEeqJtpCpfVb2tohbETrdR5RQtsT2v1U2TVFDJ49MNWM6piCPRJuP483CE2Trg6yfGdP7Jztne9F3N7NL2rtC",
  "key18": "2h3A1zGScDtvRDTpKC9iSHbRQNv3kKf5A5nPC5aNZq5yvs5K7dZAFQN6BFbBycdUSQNxcU32RRRCFcjkA1cfRCWW",
  "key19": "46hzhLT83Ny2kxXLRUweHzXRCTv5Fkfy5kYRLWYFrJ95E5NEY6zdKAHFFWUDantxD4aFQxshofWhuswadPLb29xs",
  "key20": "oDT8tBjCxAvaPgU9zVxkAu7kKTMynBDRrcdPGemc3fPPu8Fydd8mGBkphEUNqYgCevmDZaYBmi7W2vwgB9r5DHY",
  "key21": "5FGioXruwXLvMknJJRSqRj3nNHRZifwshboDzeaZ4rq5x414q6YMZ8UXscV6SHdJEG7w3bk8SCyaQkJNvbMccZ3R",
  "key22": "Yz4oZeMPPFcS9miT1SseMfY1RkkvmkSPzJHH3jaZj85uvh7Kpu5bxRbGU1Y8QuFTVZd99jcwahJJ9W8VSXsJKkP",
  "key23": "4ne53NqW4zSnL3BJ5gcLXRQ6y8NAfh5UnmBDMDDp6o7jYde6eKJuxpKmqTJ6uX7wgy26Fce8D25vUk4oFuJ5SzrQ",
  "key24": "3fYYg6GpNq8Gt6cW8XBXfN4Vruz2veGFKnPdpEwCbEN7E5kKHembYM1zFUX8VMCDhZgY6oNaxHmea8fU7Sk7vxbU",
  "key25": "2DbwUxsibHEhkZ28nBds2xMQgamBoHQo8kc5bK35dxpNRdCtg7yxnrCpxHZ1xBzw7LyQNuVeZkj8vK2YMg9fLRrr",
  "key26": "4a7394i52AgtvTwog9DugJKYgpsFAFW8NKbJNwB3Mwmf9wTF9AJX83gqKT16mUvNw1S9kFmMxKazKF5HSoBsCavU",
  "key27": "nMedoVvJkRsPRv1sSg9gDdfveheNS6P4j7LCghceMcZBmZM7USwR91k9u1UA9B9Yw3VUAjH93eJiyLeDRMv4QhN",
  "key28": "4eCw24oAwtnAThY9z4mqxbQjSozNxfHz1iZV3V9zaQLL6puydvyQkSzQPV46K9eit77N1kW64p9MxW6AKq6JCEx4",
  "key29": "4F8z1vTgEAcac7jXasjX46ha5FBSG4knUcpMZWYz4659AFnd7ZhcQtPEmyYzrVbBuWRHFxUupwfBkSzG7hUSNMHv",
  "key30": "22EGUEBHgSQiUovocNfgcDjW2rDDXBQiTN1ba9VxJjSH7QLCTsmW3jSERekqbsJ7ZTib1WjCrGvE6o7MBrH4befz",
  "key31": "2tXB1iTzm8uExasfuNYdeWoHBf8WjpWqVJ9rXMfVsgoc2FkcaKrhipgVk3kTkkKzQSTmLiWef5A91s8caBaM7Yez",
  "key32": "5oEYsXevqwRJvMAfC4msX1ATsh5EJrgTGNUMtMTgripkDpS4g44pYP7TQwwZM3jnn8bAYni3NyaAPwNCu4MeNThq"
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
