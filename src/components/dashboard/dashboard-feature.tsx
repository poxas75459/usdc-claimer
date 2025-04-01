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
    "5vTe7VP4W6VytaGFGsjYzEgL2sxbR8eRZsTCJg425SFjXk47SkymYqAZwKPrrgkDDF43cbt9GPdPK3gjrH34DZXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9rPpWRZHjuiEHJDdywiwXpPX5tDNQyEra1WSdBmos3HX1ieodRWiZqMzrBLfYNJhxdhh4tqvX7vVg2VaseyAs1",
  "key1": "5GSBxFxBWKRST9Cvrc3pdbTuUXVr1wJjY68uGzHG9URrzizngnSDuHRfjPY2Vym3hpGGh4uegzJz6GUZCUVpTC9H",
  "key2": "4x3suMK1FByG5YBwdAD1M3goeR8FtfficgmMr28LKV4pTvtPHFL8JXNCpqxM5WfHY6r22EuzjHDNLPd1UXb5yrAK",
  "key3": "HSrX4VstqS8PnQja9JBKgiYfi5yyVNMdyY5HsJyB7NL8mNFo4zEG8Ea58ZUTFwJSeGrX6jE2NPnfn8FUciyKYfU",
  "key4": "2g6a3dkphqmR86CqX4KwkoRNBEVmbrcLzEYaEYQqoMNuvRxBFFh56o48kpdMzGdbMnvCW34RQVvShjTrYUmZeP5h",
  "key5": "4kDrSar7MHvD9kT9j9vpWmuWLZXtjQmCtsd5RwhBFJvsZztzAdU7MJyQvGnrAtoNahmUxuDvNziSLmGFFezEaeod",
  "key6": "31sMcD2LApBUCy5ZNi6Af7hFbbvVWxQiCJnKU4fcJQBAMAhziVeziyzS2ukdxpa2GVF1sx7jQjMUhnwdPkrZmWNj",
  "key7": "5dv3Ci1AV1RbGrQBQyJHFNccsCFv9Y3ZPTuhVZi3EALCLjk6DScPwGjnmxhpQLDisNxRQZkRiaANwAiuc85YhXKh",
  "key8": "25MT6c2TSAFfrgRbGFRfRPHkgpnEYm2f3RqxiPMf4oSw2LYKftkQH5Nznrr94RJcbByRhodg1yySAW2G9jcofshC",
  "key9": "3bSz3GBnv35joqEVbYgy5j3BJDjbxCLj3T64CGmuMXtkYDMYUKrjbKwWDCHB78dQuBarvAAjjoZv54qpVxTfGv3h",
  "key10": "4oJ3WFdRzDxoCqSPsQv75w9Vd8zr8Twvrn2s5DbUeV6bfFekGkrYEizE7UVwdLfjqap9gzAxQdJFMxgwsajfJR99",
  "key11": "4BinJfi3W1k7bM4RzbMJSr4HVegT1YNicQ3FaWyGcoDT8X3hLwykwXmrxtsbunvkvC8XhUxiH8CwgaJV4yqNdMRU",
  "key12": "2owEY6ay3wHoctdYc2W3WUWhydUPrswCWMuhWGQ8VrSiSetdTEH97U8HYh4KRJ7944sqE3MtvvM9Hq59U5vyBnM",
  "key13": "zi4ftpXTDvwvPw1cQQM1jN7VoEio6r6vs4CMQWSPMmdHA49SPJumWNGSq4dCX5rhY7x4PdEHPEQt9Yo3d1JrUw6",
  "key14": "Su2DeCqGbeg1KD79WgMG8LMyJFvJDjaAVP2GBq2cHawDYg4QvEnMcw4s2APTaemYe1Y9pZJrC2idbYyDGYrK464",
  "key15": "4xwVLcWDxaaXhbrZpL8iWgSUZfwa81heAiwqtL1XetJVXs7Xzf3VE9YqsPUXrJLrjK4BWH4tvqA7qYaaBvVkHmYm",
  "key16": "jYqGyWYo9FLzBtYpr9FnVUGAxQpt9Tcj4EGuhPokFCEVVcKP9KqaEDdCtd8tLgP2wmaARyA7g4E4gATBs13U9bP",
  "key17": "3pjeSgt81WEHRYueRgYUutA65HHC66xNR55tCBaYquGKb2ZqY8CHmjAoe2fH5pUx6iTHKHf1KxffhuD8VVyrKeNj",
  "key18": "3EiUQAAxuo749FvXxxy5ZBUzKnCsPk9GKRitv4SrBJUVwVXeA1M6NbhVGn8snZPmAHePtgUmJe5Uteh7DBZvx9tv",
  "key19": "3T5jziivfoZWdYjESCghukSSox2o9kzgtRkjbWwfxVJB5dKxjKhhfatEEQwakyhDE7NMyq2m3XxLuVB8C4GZAzHf",
  "key20": "4g6UMDQYVvBJkBfFpETnZ6L2hYQS8pDDebf2BtSdzw6Va93fdbC2dBYRGmJHKo3fi9qNKZHbdbX6zav9oxtk5ncy",
  "key21": "2xpabjfcr9LgsCFZKhubS7KbpC2u1fEwj2jc6eA2a8Ehap9n5QJcn1SK7CNE8QqpD73vV91SJLd7C5ZrXb7hiM3x",
  "key22": "2hAVLKpcvRUaXWcGex633sdkYmW1kETSVNzRWGwj3HT5LAPZ4VfMBQ2uLHdnDZ22z8vnN3uuxVJ6t1VdkwoTaQFS",
  "key23": "5yTLWb8jHrgeRdSWUcK4fi9GBzRbunzJtLDiwYChvPjaWP36U2UzPFyzAsa8rXASCi49epqEvnuDvRTxMxQ98sQH",
  "key24": "uDUYZ4yGm4VW5kgVoj5xwPyy6W9wsw4rkhgPHt9HKB4bnCphKffUdNcAyDsVbHeVd9KMthSM8pYK2ChE8Kxfgdr",
  "key25": "3kDSb2Tk91dr9TuhzYTxT1n3rwW5L1XEvUFR5qMvXiipfTka6AJw4tE82Ywhj5guMRTzwVDZzxwntW5UXX6C7idb",
  "key26": "4iPceVkGKjpUkqhZDEQ8oNqvWDEJNC9wSqWzrodifTdNdU4TmGf7RU2vm6LwWAYc8WgwFbVaHsq23C1QJRvFqxXR",
  "key27": "2koYDAmJsG35KLCDPp5UcGfPArR99B2E7GYVMZmqXfYZ4FyRwnc8JQQxdGfu5Ks1Fcop3q9vnvf661BBMs3XgKvK",
  "key28": "73V3MxFneMajF7USErhDM5RqymUnZFgSAUgzQGJNzn8afdQx8dYcb6C5ekPUekQ5argrJcPt2EEVi7xKTyMGZwh",
  "key29": "41HDhQYbWrnpALW65akzMjECHdMtGtMCGnQm9oNWLXPE3sEZbrqcrpWUq7BBqJXc2WV7CPZ1Zm6wQD8E3RMkXQBo",
  "key30": "5pwo9WeAeKCsAT1uncnUnhZVd6jFpur3wUUAq189yA9WcZwLzXpgsUpwEmpMcVrrRwR4oDVyKfJVbSu1786XCTmS",
  "key31": "4thL4F4hjhPnVKv2RbCKhZFYVfF4E4LrxArY1orVKmsuc47RsZEyzhALeNbnSmgapMddv2PKMQcNhZjKp1HUb1hj",
  "key32": "PUydNdjuoNzzPYR6ggw6xCqQnKw8vc45zQ3QPjTx2KcvWHbpZUK3EhzzCdn84vBMVX3v7MWSmhx8Dw3CM8zCRfx",
  "key33": "3tWjY5okXEBqjz5UedpDmWKqPTybGYWf7moQDZPhvYwpPNrUuumLmzb9qVEgtVnNgFrfUSAyx4i7ptXCZcVeihEV"
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
