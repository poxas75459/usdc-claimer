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
    "3jvo91dhUZajUUYZRQQLHA92dR2Nh4k2c7jt54vxYYVYfe4qz9Sybx5WTTbuauYhwAAtHftdsM9bNAj8U8PYjhrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M3S3xv7aYt9oqrcujSefsfSrniHXSid2uPyzv3DHiu9KMduVzZoib3NhFg5EdiNSTHgUJvwb8L3SU3mqWhrZFHY",
  "key1": "3BrNmMRrfXWR5Rwi4ukiNgdckyNweAUXGKUMVgCvYn9Gwh6ugmr7GxEFAGGCd2s4SsgBXviQktsTef7zdbmQrrHU",
  "key2": "4ixcJjydPFV6t8EqZ8cH325KuMxtkDdGfaa5nK2RdkuPHEZ7EwKyU3ajmMpkA4JQScDc7qzT7CSAgEe65ahBdWGC",
  "key3": "5Jwz7gjFhuFawmXHoA3KeQUuvy9A2q2aKArN3GdZDxGpFoyqZe3SDC15YP12Hxqa2o4qk6zxeuMXRJppqq5Z8cMJ",
  "key4": "r7Lqya7Q6ggBthKz5JNqu1UEWYmap2kSzYQ6xBbnyPntY9EjowH8WkFuAAK9NG4xeYsYkKmPrsiE9SLwuqzW4RQ",
  "key5": "4U3i8Fi91VJdRepmbY57C4F2LZNisgN95ovngMkAWBvGu9kBFHHuKE9JjAXfCPbNW3nzX4sigsSJnM6EK3GTagD1",
  "key6": "5GmAdhnT7JZGMXLNUGEHgYiythjz6SUze4Qs9jPsf3G5BuzsurkC1a7RgS5R2hesWA7BPjG7Aw6pqNtbP2YEJqrR",
  "key7": "3xfrZJgKqE21mAxVSEriVSzxgbact6jFaL2aAcHpMDynbc4GhunKr3UxvxrqXXupKPHEFkixr8Dyi2t1riY8TVoS",
  "key8": "3FvUa4FaaEbqGM6jtBWourJZ21JoYbLssG8smaYCQt8b1VwTcHmrtGK3J1c9JRKrvNjoGjS5qSMzumTLo4waCbbn",
  "key9": "2dosLwkmXYGc3xjutq2FRSm174rpcqBAZU2dWeoymCnJFWgFoSpXyzfeG3mJcCp7j2si9Rk93h9wNrccGsGc9J67",
  "key10": "49o9awjfe2FwfEQKLCssow1bZt7AauMpuurK7Niaexz6gXCgdnefaH3romoaHKfjoC4MHQNj2XaJaYzNq7tKadba",
  "key11": "2BnXdBmwT8dvhLewpWxgVeoYiXAyBbUBfMwY45zNPatA8rPhw4pgmo5U3HZ3B1GMuJw1v9meL1xL6VdsnUYVXuKc",
  "key12": "4XhixiviqKDWzTxXPmgAqVyYppuHRSb8EtN4wzBn3NYw4PBUTm7XhsPrsh2wMQq4d9iYdDQmLJzAP1Vs7zGNZ6tw",
  "key13": "39z5UG6vUcRmEUHygaDthcUMe7sfqWrHyFqopufsgCyzts59ENk5AxzKpExGs89LiLF2FN83bMAdiUqdmD5fPHKy",
  "key14": "4LYGZtJwCrkYhqiitF8NvRGhZj6NAfHafXd1BCYU6XwV1howmMzS22oxTVfiPEWt26p5d98CDXsNuoQzUiFXZH91",
  "key15": "3SGPb4L6BCFbZpqfi1wB9UdUPRusNHBwjZZdQgRy4RGkUow1pSSh6LTMnbkkdoX6fWHSTcoypnMiRYM4WaFFPbSe",
  "key16": "4bnjsHQWc2RZ7rDTG7AbKqpq4UVt5VCbwYvEBv3HAH7X8PzYCYkWKUDSAR4AvyuuZChauEveNsC5vHteHGo3CqRn",
  "key17": "4ww844emxP6pCKuanQu537ukzV5wCQAuPdQnjYowuRHrDYhaTZvQ5MBAbGFe8DnWMSDCGm5mxXXoq4VvyR9ArNG5",
  "key18": "5ZgPJevkTuVJmDqQHgz3PniYzdtvT6CJZRdtc8sLtA2pXrqCAe8tFd4U5iUiEgBxfmMdRMsvbTeswRrTbHcvLCcD",
  "key19": "42NrbkysRtvqFcWugpdbKCKYc24wE6CTjvGwy5V9gNc6sK4ekM1ebJmuVMEMheyFByhPhw3gSYaYvKmNAzMYNNEo",
  "key20": "4zAkB51JKJzkd4CFFZ3LiVuDc2g3a7ehsyKhG8z7XUBP4qM4GKZjtKRLDBSjWnxqhUFJB6DX5QBnvoQfacC46H84",
  "key21": "3PKUQA4spTEFaw4PR3L1skMnv4YFJauQq72vkU3JFg4PZqrubpHpL2Nf4B9Rhtnu6AxnoWH8Xo9NuWeJyfQCeysp",
  "key22": "2ygQDSKrsYJQthwGTNiwj4MnhXuRfe2WHaXZ5ULt1Kha2fa11kLF4Gna8H7RodcLvTPVvtKVQYbsSZk4zJQYWdmB",
  "key23": "48YyjGZjoaqYrocVu8TN7fLeVkCeAAEkLzgcjZevC615yY5EQMcKRKCrpuMPRfwaNsFAqikDp1oGm7on16cgy2rW",
  "key24": "5R7yuUqwzAgyeTi4JuzWYchWr21mmLBDYkGTtkidDHaAZKLU25ZNV11C4ChuE8vdey2VKnVRKiNe5eLmRZ5hU4Bk",
  "key25": "4R5Gm4DTYy7fgz4YRP84MkzeoPtB5PwbDf89jd2RA2gsKB2yRQxLWYaysCJ7b4bmoub8nBpTFUzYn726zRVJZfeJ",
  "key26": "4Gkc2yM65G7mm9f9DR44CMWxQQ849vtTPQ7RiDnkyfxqCED71AcvqbKPGN74EymdHe5XbxodChw69PB3Dx1CLu3g",
  "key27": "3mk2P28RbrTgmumoZ92gQKHv2UTYHqCmZcToB8Kh8B6mij5xD6mCLSXb2omoLTzn1qEsGGbmJbhtV92boPovhJve",
  "key28": "4LSSSkWXQQqhFjKPHXTEkCc5iUJRmryfsQj8a6rHQo5JDqdXHvn4D2Qsg7b8AhDCsesJeszdirERGkNBouAyAeCT",
  "key29": "54R11ExM62C1U7f8gjtouyu6arhkSgM3C1K1wTq3ZWafevZdcVp5W7bSY3d3GomNS6UZJXA2reQB2XQFxUprcmQ7",
  "key30": "5UmBz2xAWYvQPxWWoosn1PMb8RtSvBYAyME2VNQ8JpipLyZ6UiNq81zvvvKkP4KzzYfxn6mRmEXgb6UTVtKvBwCH"
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
