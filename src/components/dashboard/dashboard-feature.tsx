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
    "54eRVXbmhtY6twi6Ui5JtUrXzP2c6GoYU4BWnvJNtVoKmPksCcPXGH9HjJ3gRKoFZgZWeMdRQy54r4Z6nxrr9aeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2feJXEB3TQXzhwaoApXS2SFammGvrGoauYgYGWK9wm7egjH71cSPGJhcJrKsCETA87SG6aHcbUCCtJRQWJ7wJEvx",
  "key1": "3xQSUtWqDt6vpvjRVNPUGX2K5n6eDZfZ3zQSGFZEXsWRqtGjQZswMnmtGbTYzPvG8SqHVBJj2DAFjC7QtZisuwdq",
  "key2": "3eNvhN9vcocReaBxFt4cCPvCEWNbsUHg7qKApLuNXwYtY8b3cQQRZ3Fc7trSgGSi6aTPN1CLV7KDyAFJzxukHzfH",
  "key3": "LkkAWv6DusKpAP2GgNBRX9EqMwMzrQK2n74zMQFbTSd9Hhe1MSoMNHXub9xcPGXgJLWQpeSaaVqsTbnoY1WV5Fu",
  "key4": "5qj8ffRXYCydg6x3LXWBjntXS1RmAtAuQ75NhqLnbhw7DPLwUcJctJx9mtdf2o6DYpGqsqo96s3tHV5WqjkD4NYf",
  "key5": "Kuv6Z6xfG8uwwU4g2pERYAm13v8dwLcGa53WnVEgsrE2yZqqNfZe8bnoATybLPXUHrG9aqNUcsCHyHtr33fRVXw",
  "key6": "2PTy5iVery6sGPRWu4Vej5xnhTYV3VecdGXp4dQ5f3BXo3zJD47fMeiTuFPoAbXcJNdiEbtUFnyEjkWBugm1A1wt",
  "key7": "4dkWZEUxbTX9jZAYxBN7XnZR7cuQPYouCWz51crDD7BXCSL9DSRyjcqeXxay8gKUEk4z7cghA3cxM2aQ9dnzCPcu",
  "key8": "5ucbdnePRT6B5d6JtvpxNcBwENt4pfxYCrUT3ok751hXQWrTuipdMR1VnfTjYWTwCn6XsNYdpZVJsxKaT9V1JNwi",
  "key9": "2byvxYdH7XdXVya92jqBJQck3XRuJ3B2EuqCWktAnEb9jsDV5yN3WDuRMaXaig2uo1F3zU1MYn8L5s6JXYoUviNo",
  "key10": "5ezcYqwuyjf1kjiH6NvdsJPWD5hKAQBmehuY6JRgb9wyZu2onQUQQzyo2D31o2HbZif4gAjfqvYbyKgANfb2rJgm",
  "key11": "J5UGKrsEHhMnsPZriWi4WNEgBFWFyMNEXtNtkiBn2CySmWBeJEZvCGF79kY7dmRpKf8GY2FVcmE3pbB4RYrwtF6",
  "key12": "4DpoWLoEnjnnXeKCEsKLo1u6iAY59cuYV4pKt21SaeuSCVahQVUDPeD3fBATudVNK62Auq5gMe3EsUVmRWyA6nYL",
  "key13": "2C6htP6tiySQNq9cMpYy8mS8SKnf7yE8XMTJyT6adxr8H7TAbVMQnigZ8VpSJcMxkwcCk8Nfg1THcmG3cJPwUdKr",
  "key14": "3TRhckghMs5st9P5DosML784cwgEavb1PKHtNFPVqqTg4TEqucm9ZUTfud4XJqXxGQcRnw86uzL5xdk9vyC3YxxL",
  "key15": "soEH3HMGMph4h5kEDEcuz4CqBJQXFLKt58Hpe6t93hBFgHZm6kZEs4xSzvUeA2cLVwtMFbgaJgPZgt3mHg5Ny98",
  "key16": "fd94Vh3sbvNuAc6RSC27Vdta1RyngY82N5kgiN4RWRudJHMfYag3HxFJzensQwZU6wnGrXjzCwqtWUCN7v8qeM6",
  "key17": "4qTYs9xE4CFUY2sbkKm5VMTVJED6G43mAW8HMNB6bYpLryF3Wmh2ziEJYD7AQP92DbbzfXn2UZ9g7XHfHoUCnWnP",
  "key18": "5Rx6eKVb8Q9kAxHgr6dZ8bVKBSjy6CvS2FmTHEAu2nronxUNa8tcs1oZLYPAewBTyr9TKpHr5ysC2x4VmYtKXLpn",
  "key19": "46gVdsVKpB7Hta287RrLXfLU33kdudfpJcWDnR6KRqiUWAewQkZh9xBoJrUYin5RzUcSqkUuvaJSkt5YZs379RqH",
  "key20": "3FnRBPgnM72JHYm29V8r6PrXgiA5xdnWA3466ba6DGXSchnkysrLRiPvLf8LKRF46wGbe4jgnEshJP2Eqm3ywkvC",
  "key21": "3LGcR3idfLENZEsLVE3FDKaJEsCzGg52xYq5zTwt98d4pai4g7HviYq9t58GZMh1yDVgZpBrH4JyuoWgsRJyfhWn",
  "key22": "guEadaJgVxdsugJZNh9QkRQCXqPEjdSkLw92E5vNHzWb8iopzjKWQsPecMQb34nWxrCVjMRkhvrqhC9HXwpeabf",
  "key23": "3CweZM9HFzbxhr5xSwzv44cLXtYaXFEJFvvqbZgRoyXzbgajP26QSbsewDxFEVt2wQsPh5Esgye8MMxoyTNpfu59",
  "key24": "5MiGbVxj29vB865oz5WRjzfmDLmjVt6p41xkJAUYa2Uj4VZgoX1dYTs6tK3kHnrgTDUGRoYEuk8cxozs41KMXCyX",
  "key25": "z6rYxDtJ7zXk3qdEEDdkL7J9a7AdaFh89fcz335xAtcanRjcUQFu5uqGH8K2Khc2Ecn3QcYjPamZ5cn4cZZsuPu",
  "key26": "4JHqcfsBEBHe9dCypFq8bEFNjGKXt5TsuZ99T3vhLY8i6amkBRKjAoK8nF5tQmWxauebuvzifxuLWrC9WwR9MkxF",
  "key27": "4o8QBLUsUxBtxihPyd4ZgkPNXNxqt1vdz7VoDk8b779j4m2Q5w6P5suYWP2EHMQQvqyi43yDrvJaG8xXiHFphNMe"
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
