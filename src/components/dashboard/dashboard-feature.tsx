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
    "tjs32bU2vvyRM5Sj91sGMU1hoPm3ZZ8au6GhuUtK4mY2mwPZqpQ6zNGQ8vQyShzx5HQHMTX1c3MJA1eWw6gwAej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nzwauk1kXZGetxQDhNqDdsbUzMPCoeyitU7sy4Bjo4VRbAs1nfAPT6ESLajDHS9DoXUn8fDb8nHu4N8i3rgvFUu",
  "key1": "4hF3pvYdFjUiBLyJsT5BDrNUaVqY6uJSnkwt5qQ8iKM4yzZf7VoTidTxuHHtUakHyRjcLi7vyQPSVgYxjX3zi7Ln",
  "key2": "76w8MdpwgCUrYpM5Fsrc79m5WzNBiB4QzaSnZNzdEPoLbMEa6xnHmxRSYu4RugQjUPkPtog7PJFz2H4zrvgCziT",
  "key3": "24EMGN8XcJTPLeN3fa4MBQhv6LkJBaiSvPwwnxktTev6n5zE6UrafmwD4Pk19K6f3Dox1CtXiS2e5vd85YmRrWpi",
  "key4": "4pm12nFyCbkgK5BdMUoJfnpTMcCTq4pMyww8Bwi5vfi4h95YDeDvpRVcQpUUpZLr1zxS91TvMK7uv95gVBgPRw5T",
  "key5": "3q9o1AFpjdE8t9mVn33Bdp7vvDLhcfU2cJBXRvy38ZW2Gek63EeCbMjDHRQg4NASBR1yPPMVth5GmqCCPduZ6iAP",
  "key6": "3XUv14vUGRAgjx1GLck8ponSzH6oo5azttzbhkgRieME8WHCD2WcanGhKCcZFRFQ1j4frQJijUE28zmPYav37RhQ",
  "key7": "ahqfcbQrbc19UdnZ63FWefRRD7Gi8MifNaJG3dw58wqdMacj4Lyh4mYTXH87pNphKyHGseqTYsh8NU8wPfSCMvu",
  "key8": "4p9Mb9FQ8xkdRtXqXNjWdsRNg9wzpBcw3mXvYtLgVM59PEomLABz5XiGbZy6MzTxBgjfeymdb4KNTuPFZMuszx4q",
  "key9": "27DZeVsHqtVWtQbsfww2ZUQfM7FTzhHb91KFvqrHninYYJXBBbXZyocmbd5uPoFZf6e9jaRyQYNYc3DQQkRnyNyx",
  "key10": "3a3DYC2Qn1pgYvjEdq2F1curSGc5uXckz8uBJcjwZPuuaJY4ohRSzU6v9tMPNyF8W5R5Fhweg8m12N4GuyaSUqnS",
  "key11": "5aZyQX3cFX6iQgT1Spq1PT3NUth5uXXn8JkNyGva5UdK85WoYLEwLFiQZ4FFW7m3NXEyFBKMPQghErQkUCp7d9Ap",
  "key12": "3rRwKbsFCuPGBdJWc4MMtkqauxa2w2p3ijsJT6ntS1tDaEzBBrSY2khm5fs5nbzN3uUURC2tNUBhg3Fp6zLahG5Q",
  "key13": "41ZUUPi49w93ePktTeQ1FhfMhetthfYSeY3tkuWqdVQeaEhVPPXX36bwByqMrg9hdPSRFMxUpq8LrkF47CXsB73a",
  "key14": "65p7oRNc72dWK5BfpYh8rtNALFX5KfdJucZtoEvG27xyswhJCZnfd8FAoAeCH5rqQXDWnfQRa1svyyxJANLheKuT",
  "key15": "3M7JH2r1Tq7AHJvTQhHR1dyjyDWe6RbzDEneNPGKsu9wbh2gGBaeMXnnC4msBn1yQgFFSvgATZKApfMaZbQU9qvh",
  "key16": "4UDSunxfKtZBHuwwiSPknXU8aridwJyqLmFshxCgfNb664BYrhTQbMhVGEgNAgJMetAVDLg9S78ix7MAe74S4jWv",
  "key17": "3qLKEPCzYjQh4CKY2sR29Sy3QNJQqu6soHcgkdkD4mqV3odHbkXFBSBLpZzXYD3WX3LBUtLKXGysGRAcgGM2jBp7",
  "key18": "5YXzXyFySMi3iuEy8A6f6o3T3zk3uV5vsa6kkQoUDLgTY2WC9iWGBqdqZxdZh5iWZNypfccC8N4QG4GcpcGuyhKg",
  "key19": "661rp9NASTRvNkqLfCcpZRyjMKEKcHr9cU8DEb5mBPw9DTLNkYDyDmGCARcHUqeEEFQNqtyomvyM9d422d6HWLid",
  "key20": "2qWqXTpS7N359ytsDpozZSmophoGGYbfhEJ8vq6NGFirQvj1yCTgJJAUEvKrp5FqRzGXUHH4b7NsYxPvCNLVGqvn",
  "key21": "21VqbzWKbw6XWR7u48CLJtRWsJx2zCZejZmb49p2HMVLj3npYJLKsAmLTTZ6tmNUa4rAv2s7DRgcfeG2JzXN4AAC",
  "key22": "4sZ8F3yrghH5xqLUTGeE1HHQjKZgw4tRAUUnK8G6Wq48SpEKkz4xTPHaFb4s8h64J5k7RiJXaqVKDcUzMdpBx64e",
  "key23": "5z8qrGYvf4qCHQiWgMLBZEKiFzJWeUhbjzsescVQ9nmGo47SdETGHnPgy79cvQ69vFUzMqXVcyfCZvTzDN82BgtV",
  "key24": "3cQwTpKdz8ECZWSWRvhSqxgxxGrBAx6cRtEXGEu4YZNs4wbJvdYyrRTcv47GQYDgZ9f9H9PaqWvMjGczNwBE1mYG",
  "key25": "5oLAuU8qp4rZjirP8QHvcRDVcNBH6eLhhomknVikXCchUhBdQwHn3kFdcGHrRMAdCvwWprmRBYbg838WPYbh9uQ9",
  "key26": "9hTMoi2BoQhTGEqEmsEz4pTmqnfWyqDsZq6JLa7rdi9bedtufR5qXLvPvBBUFQVqWS6Xx9qQMY9CtwUQnm8b9WG",
  "key27": "mPQx8eUwp9fufZ6oXiiQQCzvbKT6X1fQEVTW1fJ8AWVQf9jtDM5e6siviFnoUcujjMDq1TSxxKm7cDCC3YHTD3T",
  "key28": "3wjLz8XEnkys92q7FaqATRuDKhe3UQdENmyWccSqq8kUT6L35gpHxYAWNC35z9kEkJeyRPkuGCQi9aQePTcMX61s",
  "key29": "XrbBvmtruPkV1WSQViNVZ96R7QcAQNRJfnuseY1QwQjkkGHe57ix3mou5429Q9a59YcUkZ1zuHX1XvuGmRVYo3n",
  "key30": "4ntkztHXkgmdoa6wmcPDFTLPV1yU8EWziu2LrwbzrvbvYAheGxAPqi7BjDQbu4U4ZVQ9jayaRdWM9P8JScXrDcej"
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
