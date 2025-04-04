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
    "5N2fsAa7FgVNvj9MxiEfjrMxvYWRTbNGTNn5CnY6vdLQJJpFa8HbbrVhRQifKQeD42fK5Xo2iz5xk3o7hFB1XKD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K6fHyFNSGMSVDZ2DtEqEGdv18QecBX43VKxFMUTD8VD6wkT4PXxQ96xV6g1Sk6cDGB5KUcQqronzotwYpZTUQxe",
  "key1": "3Xet6PTCnpRB5Q8hHWsNqqUtqe6sMurZT4zce1ajPSaexctCFDeRJFu2qZvAqs9zXP4X28HwmR4mLnwHKfZ2z9pa",
  "key2": "4cWWqNL9ywNhFyZ69g8ZSb77Krpyy6LKdoLVxyHSEGQuH9xtBHaGHmHkrkAwAiZH2XTGTbmr4CXBpmzHtxxhbF2o",
  "key3": "4gLKRbqVMxVZtUuKPHmjfm8DMH9gTwzz6RbyDZbATRKgEwA1CUdVak8ygEnHpsSKj2LoxiRtTPDadV8eNgjCGTgz",
  "key4": "5VkfKiD9HVdpqfzM12HTUHKbHCEF9aEzERvaDUbNhTYDo83V5wKxfq7Zm9Te8xaoC1M8Y5wRUmNo75EWNqSZC2Em",
  "key5": "j3z7ncDuRCYKd6DJP3xVE26BjqCi6yMNvmaCKxu5BpqYSBQv2DyzCFVFjKCQxd8XoPZEH2yq9587B7xstNbwvRz",
  "key6": "4HACCA2FZEgoHdLNF5J6FFbESS5gu3sqg2DRBiZ47mfK4E9jBKX8Gv7b1NyfxuEYfoPmmJebzfq7VWQozWGQ79sD",
  "key7": "TvdVM8eTgSThZMmtqLVMjxvsLLgQntnJLnq84NfuGr7ELgvhRqW9ozTHci2sGZYPQuW7vBhZSqqpQxzuBQGxCsr",
  "key8": "psoZM1FR3RvzD8EJRSFkhQnY9WR9th7qQTCq4ZqqmJLXYS5DAuPX1ouc9e56wCKM4T8MC3Kk663CG6rDWcPQbzr",
  "key9": "4LbejXZ1PaouTRsz6rmudxiW9akFRfcqzyAeaEURNt9pYAsopJW9Rum8TjZ14HzCyThybdzV9YTZuU6Gwbzd1iRn",
  "key10": "3MR6dFmQpxQv4uSdiMSzzEGpb8LSHahVP5YFnftpKkH317S1qvVjMQguyHJN1ZRtvYdXDSb6tQH4G7n4yMuk1fTi",
  "key11": "4dvVV21EvaRjYuHPAScJwYnet61bGc2mksAA9nCMqgxTeioR5j484BxXUzUe23mPgyP5T2rTV7FGadjVms8nJQmo",
  "key12": "4xZTvvKiSzgvvDwSmDGq7xt28HdFmzr5D8B8uJrNgj4V8Cw1yHubiLbNwNh1cLUUgXa8GPdPZhMVVw6pRJVSj8j6",
  "key13": "4Fq8jspcpQb2a8Q6TRdkXCC3Fy2dR9ZuMPUoSfDhbooTXqgC5Yt7Pnetvyurp6jT8QJrHVnNA6CvFU48t7rMQuf8",
  "key14": "34E6GjTTLHqhsZMtZfQ7b3xT6BUKmijRfXApzwdzeQQ4JYGvg6QgefgGs5S2kvvLJViH3YgxrWoec7D87P5UK2X9",
  "key15": "e1hNNMbaV8aEzCjyTPLfkXmd1rA2gTWY9vyP7fVnrq82doqXB6tof5UVBYpzAUPTcufCf9ueuTY6pffXCKDfpRa",
  "key16": "4jCePvwLsnrwVXZmXkJREcJVRcyytqVLbP8dtLnhyMWwgBjrqY9zRPSuHiWoPveDmUbvB79cntxqLPo43QLcGwKK",
  "key17": "3AxwXdPe6TKAya6zD8E171u3xewvCBvc3qeQ2SVHojwKpipMj4WpkELX8ZiwUk42fae97sWXC6FLnvQ7MCUxbr8f",
  "key18": "4tVFDLekw3rMbg1RkYShMzpuVRtVkBNegMj8xVRYQMQSbkdXgFX1fFFoXiBPEgtek7UVx5UFeePHhcdxRSJFHz5g",
  "key19": "2gPRfUC1RfKac8EvMuNyKWSQCNVeek4u8YFvxhW76F85hfuQuoCbvyBL3TSoS7oihDM9VfZQ1Unfdkus36cZMamT",
  "key20": "2UKsE4ARdS6hek1k19ag1YcgfUeidShwjWDQNbHzywbnQ3fAEYMn2ePhtBKisftFocp6iGZSYVZNpgRoyawumJj1",
  "key21": "2T11qUk6NthjT2sq4fKG8jf4v7x5XrUiVzW8JgJdJ7JRLmK5HochEuvN9vmef3PDED78gv4LErj7ecCXdEoTM2BY",
  "key22": "3GXf3SgYPMb1SLadp1XYNWv2ax4oBrKfNEavTFJcEAN2sL2mK26A6VYZaZthX8yMAAFSEtAPponBQLjmZzTLEyrz",
  "key23": "3HZBkE6S7UD2dAntRnQ8mpBDwXk4YPpDtYQN9BN4Marinj3EWt1pdE2yqx97A7QiFPfGwhchgG4FK6fJJGmQ8DWc",
  "key24": "2siY7pjDo2QVX6igzE9WMZBTR4JwjpHiQbF8Jd8rPP2LqznJ1dQGbs41sH8ogtEpFWZWX7vdGQLVa2rdHB1Dx6XC",
  "key25": "4F3VTqgudXi17ZqLd6uD8mbf7ws95GqAMvep4BoPkkW2YfjpYoXzzN4Tn4u4ShuLQR93cLM1dM4QXPtgHL8WhuZS",
  "key26": "2aKQJdZNWBnYkxfJMS6gkE4yTrVaz5dacMrvWvXjqwDuyMU2o9Wny6R39ohrETyTJnxr7LmQ6ZS7BxFxeZmwqgGY",
  "key27": "4cNaDeLpC2C9gALBWiyXs3BNL4tVGUYzmPLTe8RKuxLzSawAsMv2F4AMWBqZx7gjxZqE6sbuNEaMbsGHWUWbGCMa",
  "key28": "4Ze8wbLsjTfVhXwEWL5vdn98TnsFhNJadvL92kJCoi8uvn9EGXTVdSxJVrjnRWDpWtwB2Brpi8MQXTd3z56fqoqp",
  "key29": "5S1pKJT1aT2NM2ZqMUJjFfjFd7vn9YzYdzsVnzQPg4gBNus598kUoDQE6QCLDohCRqAFqjv9PJXryNhnAfhboWeW",
  "key30": "3vhkii2aTe1rfQvWgW57zFnDpPCEABKDJP5uYjYM5LPRge3p4EwHdpCzdwQCnv3RNVmmYcoNYHzd5Rhf1GFpd1g2",
  "key31": "62Nv3JkUPjRT1KSLxnQyh1G3mLHtddgsW5uWKMfutFn1WUFgbo3nYa87BgDzG5rX63NikrwGcYTrYxQEUiYReJMg",
  "key32": "2T5cr7rrWbuoHHbSUrZVmaN1bM2DhN9jHM4a6Ai2pCZfwRGjDdo57RhLDf9LoS296JZLeKauSFCeomaqNrKMcqLq",
  "key33": "juW6nNz97V5W9tu6McaFbDVSStC7qX3dHNQuqZqpKEGy4dAi5ztSeZvZmf88wAr6NBWQybv7xQ7dcKo4taRcwCz",
  "key34": "RxsSXH2LRC9BwLGf8CPEUBDrbX7EBHufGvchL2dTmQzs89pNA4RYnPG13aykLFfCXV9GmJqm1PWYtEu96V2RSNW",
  "key35": "EVL2vud9PJD6Aze23ehJ4dCUqYnbLiK9raCmuHGmmYXSfoN7GtfwW5Y8k2sRdvhbmYygHDt5Q6YSn1h6ifsCkD1",
  "key36": "5wfgMMFUxNtmYYdGfzQqprRS3b4w7GATWJBACsfvtKpCbet1KiHozvUxGRyf3drset85tYMx7NdiEba7t444H8S6",
  "key37": "2f7kimqLVn9AGEUCwB4xJvEjFM8hstrAofTgvpenMeeGJx8HWUo1Vyr35Lod2fV88o1NZ4i8JxrGx9bSpJguA84",
  "key38": "5jRoMFtUJekYSWYpVoyXtjZrXbBEgwKvpox1ow4iZqyj1PMTjQRja6xZExpnM2mC9ZzRBm2F6xv3tzvAMBPiez2n",
  "key39": "59Ar2P1BX8koZApAccG2j8uQj1YCufUU6C3EGKrNZ6HeccugL3qwCYrqHNwpKVHfZpSzDb9rhmRAgjHQFLkDzvRq",
  "key40": "5Rcz5E5B2sRBxDJmsfUEsfbVzca2FWC1MvoNgxk3MxhdSjykvH6os6PPKw1CSgmfzayr1P2p2kabZMozD5FSqW6d",
  "key41": "4Gopg2AvRfrg8RPaewWGCrRyHDidBYHHF149Naev7XwBi4D6dtV7TZyVu9ccwPToAXjb7AASGS1C35tq3nwJZDwp",
  "key42": "4FG17pTQd8MCVt8wV4dfWCi3pT3VFMFEDt2QdgHRaY139S3SYKHnohjJNDkGJNbWJTg3tsQKto6xeLgam18g7uUx",
  "key43": "inJdADLb3fWCerDVJXBy8PkRFbnSZoGq8AmEueHyga7ENJ2LdSyANQEwjvsmKXsjh2U1YWJ23DTYksU9v4QDYDp",
  "key44": "kTQDhxYq6zm6g9zBrUWaf8ZPCuXKxqgZCXM4ysnsBLLsKCq3EGc4iA67zWhSTCCzPtk9erHBYd5CdCGcuzxgcPL"
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
