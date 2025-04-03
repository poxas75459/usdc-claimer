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
    "3XeYiceDVSzos7yy7PpCNmCKHGjsMYcmhfR62YbPxoZvEMbEjnMFHxeRq8jTd2HoAgZm2MA8HDrmcqc6H4vuNyAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "afYLAbs66KaN2AkdiUEk28Zhti16osjt85bzD3C4iMyAG3H3QdrgHZnCEovRYoDJHwjFHycb2cX4WAKdQUJfWqt",
  "key1": "3sDEmHS8jjaZbinDdCKVbreZo5Zhyk5UFbQwaE2gdzkAVM6inxocjCJGgnL5kLPdvWzTApqyRhmPnWy7bdpYDAHr",
  "key2": "3UaXqRatN4DqAPDryYdAFZQ2kgn3EJZs5jpkT9WqpSupfet4mH3ZhHSpMLJPuuWYRA9sJiHnsQjcXgzjZgKHr87e",
  "key3": "3KtCuaJ6MNigxRBrx1cL8Eo2f97kXt62eZPR3KG6DVajCrN4Mgs4XeS9Svi9u8G75TnevvuyaYMDuDKzRadbXHF",
  "key4": "4YjR19sNjyHQCoGscY6n5PUYYJXqF4TTdpD2af4AanuuqJWHqGYJVQB3cFnqiMouch8MSiFjaBCPgdd5PUnP2K1d",
  "key5": "5XfHQkNPC3oYuQD7JTG4ubYRDEiA3TVUARuSXYKJgJZgRZdYhbmkLyR6eMFJGivCBMyURf3JCTteGRpbQDKpQAue",
  "key6": "4Hx81gRBJyywUuzmhvTmQsk277LJsCM1eMgBhDWGXmrzsi8Nwd2S9uz1MRKBcFMhZ4zfvnwRJChxfW4cZVWfQMDX",
  "key7": "2XPk7o9Bgx3S3N8YnK5VZdMaMLZmqCx82cVYdLJVpukjz7uoha6yrkvNhgJv5gFGXgRzpgdhbWvEerTEmkf6a986",
  "key8": "3XQarNdbjUH6ZuxHVHTuT55pnVtgQyN4B7RWqHgTNsYH2uuoPDbv5hFuPyyLjE7Lo6fi6iP6Ga88tqxnJNQbj1gc",
  "key9": "3g5ZLRQqqbqFsMQBT7XNJNkAEcahmQ1YY3oCD3FfyzcJdppRUuKLaz3yrKiWjDgbj66yCcR6aRCo1TxeMkt2sbu",
  "key10": "2Kfgjf4bpHFhfmsiWhC5xffqmZCkDssGGUVi4ZZvtcMDD1x8hPFhXni51d5M4o7AJyuZKKf9zDT87zCDyRBnLQXM",
  "key11": "4BhTi7FWoDxLpEPsBBdA5U4hL86kTLPKR8RrYuctR1Jo7ger9FtV3wMd9KbsEiJqgtwZvsWruCdiMvdsPyFbtBQ7",
  "key12": "47PWmd2vLKRAhwEYfX3JzLEzDBfixfFgJdwk1AHwXBu6BvDxqN7NfoRQxfn7hQh5BWFt53ArR7tdZXnp56t6DJAG",
  "key13": "3ab74csYejHHBMdjJm4551dbPmNQM4eakX2FJHF7oD43YYAr5Fcsg2hCYkzksPjsHfeX2n3TKk8QGyoctBpSbPyf",
  "key14": "3v5igjmtTuayPptAZvWEvKRM3LwqWTZV73F91UrkwqHanJMXJaZzBqr9XF5f2SN1DdkqoCRwAACRckvpdgbLHWCc",
  "key15": "4bRunJXVvCnJ9Wi7WbEyomBR2f9JmJ1HdTnZ8pRUUPwKc9gSLvT1Nn8rmmTmbfWpHbKDcLBY8nmozRmyFxcrJACf",
  "key16": "5phUagvHgzq73Mr3s94Zwe4R9X2tHDqur5Hzvs7qcowAWrJGnXMBBo4Y7cDoCoJnqJsYFP1verSdwA8kKpwhzAjM",
  "key17": "4x4ChDmzndEzKmwfi2v39CGnY46SZb2vSKHDgCVqLbTE2X2MTiSufHJjy6Qo1cPU2YQGGBPFaDRd9HFp1nC7Suts",
  "key18": "2ffEQj4AU4hyE3S5EzkhcUevhexVw32xHoE25JgZXagmPknTLGrcLrBU8kigmCpZB3ZG3nHxy2kzYXqEeYajDEWF",
  "key19": "29rVrVBBDtikLBx9rTvw5SbZ1JSRN1JNPdq6tgpGPyJtSLq5CDRADLwmSNfxLeFF6s5YFtgPG8CvhPB42fuVhkZS",
  "key20": "5bKnH1PbukautCho6XGqwxLzWycnKm6DSuGhj8SPZofL9mKkSxYdUBRujnZiHFGqG5EUJeFHNrzfkyY6foRFjQyf",
  "key21": "3m5baWiLZRXfNMFDdw5gz6Xtkh8WgK3anrwikBpJaHVMrQGkWf2yfW4HK8hVycThrsDXnehL94uHRVYc7jKu9dC9",
  "key22": "45zphi4mikMY6LKYuxUBnmYAnwstfoDZ5pkhfmbi7MQQZMS3PV5E4Va373cYnj3TzWy9Awas8HMs7CK3pWUC7GYv",
  "key23": "2sJe5daBkhTYmkUiXj4P9pQeV87YWgwkZGgNHuPYxG8THQwFafw8g6z46JfV23E8D6XLhJf1ZgPdU1S6mdLQGRTr",
  "key24": "4gP8T3wMfmEfxzt2QFbnr5WaTqi44ucteoXDw3Ybo1afANA4ebvQn6pffsig7jkV5ccJmfNi1wjH7GRRr776dCvy",
  "key25": "2hBAm6azgXDZEyEaS4pT2bVyLdfhByTDomcAEzTgGgQWAbYFBeLwbcXQMbsimJ2wPjLnSYcr7cQQQVfYwBonwX7E",
  "key26": "4qsTZfrGwqKMMWR1WR3rYLxaLij8UfAxXaur7tTwhCQSyuAS1hv83TN6yyTbmKkdh4BJJsr5gJeGtwGUaHfBQze",
  "key27": "VSiPvK3buJjDaTumSDwV7mLsfY58KXtywX3fJ3YHaxG6MoidNUSiCRFivNYz7oe7CacifpyLYqzAd53PbeUJrFK",
  "key28": "4qzGGgn1sa8KWnYicrVTFpXCxgjjsVJ718dRJpLED3fie7SW5GWJQG9itZwMtQXLEZw7WNoS5Boa8zgc6q7KWR5H",
  "key29": "2Kf6q6LXzWYDnqjKi1Voq3iA3DMCizmnMPoFsR2KSW9d893qvcCgbUrTZkqAi4yYkZ8LrfCiusnkWFcHi4kSAks8",
  "key30": "4KdyNaCxYvPMrtHiLN7vsvC9ctYeCWfAvyZoL6dD1ysBfCDVXgmHfJ45vNqntYXN8kpxygfwDKP4PUqCmS1oL9wu",
  "key31": "CTfW5WMuWikqQbPceFCvWETdq18vWQ1dnmsuYBQN6pS7BUYWmFnuMo1dZ142fWdmNQn65BK53i67oBKikaGmws5",
  "key32": "jg4SuHqScBWcq11AaY2Z8qaGcgX6ywGGBFMttudaTrdbFb9jkM8VcZmhHd3R6qTcUCzBnuZX7wXFNYpSEhiUFqs",
  "key33": "gu5QWjp95zKH5trDLyfivUK3iArcB2LfPbATxXxwrCLCEWmbnKDoNVrcX8C1e7N9ct1LzLFkjSWBaQkJfEi8Tx3",
  "key34": "4kCLt9JGRfLuqaKgH2UEiduj3ShvN8yNFo6G8pC8xBV6PG8tG2J1NHG2iM9jPjvfsfdLq7Zm4mK7E8dXjPjoAxL1"
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
