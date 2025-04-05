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
    "4cfqueLA68KXyFFqZUVbJ7tDiwtkP5JuYEKamwnRhUhjaf4UYat4kyVxSaAhWNpjmPxgbYciNgXXnsvE6uJrmDvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qdQ5ZuKCqxEyeHSZnGFTVVxuRKSwM5ibT6mj7TxumqjtKt9UVHeT9e77H6V8RLsYoNgFBKeGhBVv1HxSr91uEko",
  "key1": "5DBJKvZib2x4UPByjPuVSbjNYtt7SNM3NeRywap8XPhKDVougqqJNqTh3nUgJwXKjrkWPR2JohaeKJrncb7tbu7i",
  "key2": "5pw1YXcjwBCNJsT6WzQLiWda3J2H7xcU99fi2dRw4jhKaaQpupHfXWhrhniRHyngywazspi8Fr4W12FQ2gJ3Cmcu",
  "key3": "2ce4CaRdCJ3H2K6o9ZhBjEL1sZB1ALsBfXwQ2ht5DkTaBub6cJM5y4VboKT41v735UGF279RY31gfp9jnvwFbmPm",
  "key4": "3aUPfvGmqPF1ovhXLbq3ECGb8qiy9TTDFLMYiK2MNXXb3oLT81cL55rnA8XshH7nQCxp1kqhkt7o3rz1UMz5SNqM",
  "key5": "PLitdkwzUEeDNHmPbxBmJ4DrKsEdnxTyhQ5YqB76PhE81YWHUDXfmpewAhEKfyj8kyveXMpiwmQRpUquyDw3gjR",
  "key6": "5UqXkxDByENfmuFTCneFkdAQmzktUpNS5aLjb2voaZiVSJ5ZhBZNSuRrkmKoK3TVBd7MgVCA2eDCFTCXmu2WtbgE",
  "key7": "3jowS4jxGBZcsFkEqVsW5HYJU2Z4Khv8Bkzkw7gyvXzjtnjiKvmUNqgVzCH6kzvvSKpB54jnbWU7J7v6beUFCUQU",
  "key8": "3zUCBbQEJJvk3vcHWhYLP7N3wVaQkpNY4DPwKukYnYd1VC38qTauD8wMgVutJgAqwUUPDc8G5Lkd74SY4KqDd1Md",
  "key9": "VsSY6TScFy9dPPDrciRrGifNtXzkYcG5V5DLyv4dj1q8LCWDQypNfbYPgGW9JdiAz8tZwzdFgM5sW4dyTudVLBx",
  "key10": "2fu7pwPFJdZx6t6ZGcbcX4Lg7K8JAzCkuQoVTnqJmYjM9DC3b4P9odp68mnTM8fvdMxyqPyYXqrUNER3i7yTL7Lz",
  "key11": "P7B5KEurPycLEUhW7DoMALXKQzC1BChB5ETT82Gub6e5ii6yTojAkG7Zh9VNvD7yuudXSSEDP69xFpfEkZjkRti",
  "key12": "6NGigzH3JiCYyjtndvu3qz22jBSFuZsNgFi53ej9wc3CsbsAi9XQsSCyj46ZRB4K1GH2jVr2hstW6esDYbvjEpF",
  "key13": "fRRnGd5Rv2YNvWzVNtYDypp3yxoupQ2zuMdbJFsnTCrto7jo7Y2j2CqMCCvdNTRi4uBkSYJ9nG3tFy47BX4yc9B",
  "key14": "24ZoFeuzajuaG2fYCWAQfQrB5rv6eSE1uNY1y1QWWKekjkwZ8tnxoEFVDQfpZWHQhtCFSggRDWmAdB5YfBAP35Nm",
  "key15": "3WqepqQh6EHcgRZJcbMKvnkvBWPmoJUMePNHiwFzz7EyBtsaxvETYbqDsAUEHsHoJyR7aSHSXuPUHabKfxxHhkaw",
  "key16": "4og87RidSMUWQTXZ6zasQohgSGdYYFudDvCN7hWyoHw7RASvKTZV9RY3nq7cKum8czPSNcrK2NejcGTscAgyuTjC",
  "key17": "3Ua2dxqT2xt7siR2gVtVntxwucqqZxkjxrqDr2sYEsYTKt4Wu2bwF6UcRXygVkV5MUzJjA3M5xFiDUKMVS9kAevY",
  "key18": "3Wm5SLvMx3jZGBcjBGK4p9kpdjAJdvftgSYA8QMUSNEQSdbzUoSN3HowUzmydQt4QptQH2PSCa3AV3sapJ4vKQ1S",
  "key19": "U4PHtM7bNw8knf5DR25jSTC3gYEnZoanbzN1ratZRdp4ZnbY82xDsKhvVhCVrkM82D1gsmMRC7veAYpCEwmudRu",
  "key20": "2aBY6vfuDQ9mvnCzndRp6wuVWFZELTzMapgcGryYqbYyj3pnDfJ9iKN4GzMez6yzQ5rdozowk9iJ5nLScjFtWKSX",
  "key21": "2B2VJQMZZbkyQS25Wi8mv6KX78RWH3AdkH6cLoF6y2cKSVbcVGChm4BpM8UCC4yPfZcPpgWBxpUKHs3HhjfwtEdc",
  "key22": "2kN59rsBnTrfhxv9QzbGT5QWKxM868xuRJhsEaGAQ6nTUDb4v4C4waRVbV2pXNG7TZFeufDSKacXA3Bhq7JYxEoc",
  "key23": "2YZxxqFwBfA1rSV96AWfwj15YcdVwvaSEMiyUYzna7i6RDNHXwszDCpTM8x1dFJaF5tJ6PUajeVJ8EDghHdDkCch",
  "key24": "5Q918JW8ApXrKzLUJSGsQ8GodjcNmdpEJdq6urAm3DQ1gaq8vFUR2CPepuZGUKzSkZ1seY4bK45ytQ26kekvaDBS",
  "key25": "GAtb6JjyYXMh3xAjYk2etLW3s2K1rKr9pwD37L2n5y1oPrsfUBYc5Bd8oczbchh7xro1yMbEvEsqusaa4zjpmbb",
  "key26": "4oFdYSvLLVcU5zjoDQxQDKvtjFMXjRu5EXLtoA7dBmcWe1Xg2NoL8eFFxDDc19D3QoEe9fyxXn2rZiRTzmKZghF5",
  "key27": "4MRiqvKh7mxxCX2XNfngFzs9HtDZdWYkztkQVAmzhcwgqc76VtJ8EZkMxPviL4XFhg8TQBQXH3ssN7LEFEYtKTgo",
  "key28": "4zMVy3EMq6zZf2Ans48bCMLVoMECiuiN7L7JX5LMuFcXAEaVmKMbk4qQGwB24oXXPXTzxS9jHdoBFywRdriSvPV6",
  "key29": "4bVVQBCW6D7CkZuvHGpov54iTxuMcqNkNWDydmPkqJH7HCVpqCc573kFCN3ZQvHd7GmN5AFavUt9AzTsCNEiBdBy",
  "key30": "65fgpSKEz5vSRrTLkibgwWaGJ34APVMVUL58pZL1E7G9BSmVMhB2LpzLhreN4e4PRVFrAzh4HQTyZ3wSE2HMtamq",
  "key31": "4UyrSUrDVQYReEmUEEzqCZUg1U6a7ESNN1jufNwbpZ2EyqKYkzF2Zc2khVWWTadvytmkmFGwo6S4VSjaTzttHXee",
  "key32": "19XEiC4RXBEp8ftjnvBuN1xyynHhW23izsj5YjcXt8Gdu4a5k6G9K9tqounrAKTVLYokxRbGYwqMQPP7tfqY3yF",
  "key33": "4xHaxQxDV8RuYW7SSLSfVrhQgBLHHKdBUALHGExq9XpUcR9AX3AP7DE4oZdnHruYeQGHkaMTdQpKSt2DeAvBgwMr",
  "key34": "4gqUpbUS4wARFgywb5TYMATCvHMeVerLB5Sb11xu7pacTKKaTfmxXhYty4oXHY8UaGP6WBUvwYDwXxc3149Jpk3Y",
  "key35": "2NkMvfQjUbb9ZCySsFtxvBScpuZScbjKSHgcqFQViTHtb1Ksrv8Gx28LS5BZudDsvQd7FpqksTFbVnuxKmqpXcok"
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
