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
    "3mvyg4P2JdaQDzZnbviamSt527U7SrG1qGYFHqHrQQxwzHMGzAFYFUaqmecHkv9FPZGgNTAJyBG8n11SQSM1wLwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CKRQnhFyTTcyWiEZZnE6BSSL8JggXANXyDZAyw8B7RpJKBRESUwMR6iBhP4bGKvLBBsmh92bcnnPhuRufnDXjLk",
  "key1": "PzmCpG24NVs1eQxzBcyhXXpQS7L5oe4GGj2rjkyEWHPamqiwPLRZ2trTktwJuBjKAiz9mjWEdSGSWntvZqAg6ne",
  "key2": "Bweo93WfUrMbX7AkT3jPDut2iJQdJCop3YsHZdqfEhBvQdxnALsEfww5WMLVEAwGsq9CWf33wrQUCCajkAij52Z",
  "key3": "3cS1FoU9hNMhdprmS5D2xGHQzh9k1fVQqwevXW3z9i6pdbFtqYGPgqJCVY9HvB9LfZU9LupkbBVnHamb842KmWZ1",
  "key4": "4cs3pS4MAKQVoCT2jTBvWGecZ9wi4vDr7ar4H37sfKvjJXJqJWZA8U5fumabtyYgp3QE9J19no2FAUh7cYEG148z",
  "key5": "5VqyqXuGzCZyiFBMPUdLTG8oydX1wNtqtoPPgvHjk4qwKjEE1NXb7wpG5qQoU4pn9UGKZUicXCAHyQsjPcfRzVNs",
  "key6": "2WLHMHP8iTpih3ZMtcu29fajoA3rmbxvn5fS3eeYoLEVmSSfPQUw6SsQ32Sh8hjXhKYNgztcbYa5qhASzQ996d7f",
  "key7": "3RBvyo66zaNjwb59Pqk8vZPeJRgDEGttoUrdd2s4CbyJQozj5yDvFABMVk4LnUQd9wph5tKak27X1KrQYdunqX6Y",
  "key8": "2jfohH3q135uDU4DCt56NQ92ZRysLUUqq8izPRQYHuY2f6o6TkyNFo8o3zJjXJADFEpBzoqP81tuBr3qbz9JmU8a",
  "key9": "3mHKJrghbkrTfhQr1bVhpq186Vwd5m2GzP44roVqf6PuF4f1VieGJHbCtWLeUMA5rRn8QMSGjaWint8TnQBuHFY3",
  "key10": "2GQ5TwSn7sCLKdgghkX3wDjLqa1pfWGXUxbHCPAJSBqS53BcBr77dhwSwDcFWXDGxYifVnxu5xPToi71LLntiWVQ",
  "key11": "3R1SjmAYRUecubvA24m3GEy5D51AgXo5Le7KKA7mKbMkMTa3e6qD6aZuHfLRL61XS31nKjqr1XU15cHvUFTr7rBH",
  "key12": "4aFAw5oZGv1YJeD7MapQ1mzUhyGSf4z8FksjDqvceQAydaytWxU69pZ7wZKk8x3fewverR1PyjroLGbXnkKy3Fy5",
  "key13": "2B1kRs17NgNuQYKibCuqJTEU7NAHVpYgrzBPuzhgLwzzQekweirKaGaAgSxAtqsXNrTvHade9RRfun9bRibUSyNB",
  "key14": "3QTh71N2dYsUNocnhwdL4wYRVNBnHLcaDijSwMD97owRNFBNWvUMQRYTSRfCirg8gjGYEvFc6PkbF5pY1xdfgx2u",
  "key15": "5PQmXn71YnQWq2aw6fJ2PZ7KDvgCCAE2DYg6sofqbsoQtRMuoerwKx1dtNkwYosDcfkfugE5vPYp3xh5KrEXcNCi",
  "key16": "2LdYAe7XQ5bEjPRq8zkz6Bj3xDQCQu8Hk7XibPydj8uwsf2LJapaZ69BJYcHvyUAng3kPjCvs7PiLZFM71fQdFa",
  "key17": "5bs74oSMxNw83UXG2VTCpffxnvpCFxnJN1fXowBsNhkZ7iEbFktfALiCCCbh4H7B8Pp3dWo9DXCrJnGQmum3JPS4",
  "key18": "4owZerSXmdndyU6mjyckAeer2RJstyYCAk7qXupqT2jebdKWB4wU9ApkJsjgDAzq9Lvd57UMph2rJU4kh8kHFGEA",
  "key19": "3wpYbecDfLN9styztaNtRJ1tA6er5o8ZGJ4rp8CLTehdke39vhsXs5ng3Y7jywPCvQz4TqXL7FuzSJM9zzk7Mdqo",
  "key20": "3LMeV4DGzdTdmr9SgiiczVMx8xmaJQQJCtGTcXdcrMu9n6m5EXE1SuGqCKJA3NNYyueSamBGb3ZCSHq4sjTRXNjV",
  "key21": "5Yn2xuPnwctLsDoJWRSRFhUgtBoHwT7pTRX7XwJfunQytR3buehX5fRArDm1UMFgubDLdur1GaQXUECvCYgUKFBo",
  "key22": "2GwDVsu6xcpKTVy1tSA3SDVc7ivRU7W5hDrC37wdtyWLRXeQuYe5hMA3BLJpk89Ha6be7gsnS8X45UbN8a6BuxRN",
  "key23": "5rUyv2Uou1VeXaDRK3T4iMN2bNZgYb9TikY4gfL1PD6XACuNeVDnd8XXtAoqh1SnMAqdkgBoCjosyJqikLd2Un93",
  "key24": "WtCGdbFbcmXDhLPyQbtqzdNemiMgyNLFvGrB8YmU7Ce7jd5ApSmJzB7Gy1jMiQWpRjXM3t7Yoh4J4GzGAWyXX6z",
  "key25": "2616HczNXjBhxPsGZkaCqoKaSyUHcZmAncRMtv1nwZQDi4mKV862X7oi1EXCEPfsnHEmT8jhBm4hZ6VdZXyApSNR",
  "key26": "XnfyaqXypjAEYWFuyTPRexPEiG7cynk5dJk3oY28vhLmWs45zaHLjXAUKAvPYnhYX83PsQ2MqZyByxxmzqkiA6Z",
  "key27": "5Hw6Atf2u65zA6M24xWuoDjZXJSpk2XDbtyVsv7n6qAqLqaFveDxRwQC3ytzaemREffdcVMjJAycCgF4NGNFxQBR",
  "key28": "67eA51L2uyDq4Tk6ssVpzbFmkFPNxgcPWfa9r1Z8TWHhympbLBzEWZHv6uHgDwk4uzGaVTLnog9b71b9pc7vGmkS",
  "key29": "3CcR3TVs38Hj74yVBtHFaZbqsfmAS1TQc6cyvkzaSi9TupTsce392XJ9N2hipjvBtR9YQz3iS3jC2cvy4muX1kDB",
  "key30": "2dKgeoCoo2fJe7ddfxqAFXjrxJLMdGVVcmfchSYUvPnDecsMnG47DR518JYRxvHx5NSvv7u17Z7BCVJxPwUbLxgY",
  "key31": "2xrRVX77TqZu7bXcuujhVDhyLeX5PHcKZJW9s6qoYavubadyHDwc5AcdArYd8BtkcFq1vnbXs51faa89QUTJDt53",
  "key32": "4jHfZnM5fcytWjRqQcJvwEACcnc3ccS17GFjgR4fPrghdwyVnLTEcQKNWfYuBTPBPUt8XoUAF7csxBirpA6HhqHt",
  "key33": "3xyoPzQ2jnVJcagf1VwvTPQdRi4s3ybDFzqzdREfUFWggPQH3TariiMaEqPv6zHb4dG7qNPanv3YjEzgzUhaUVMx"
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
