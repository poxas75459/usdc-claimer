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
    "5ahtAnAr7X8ZNUe8Ncnjtc93nK16nsipWkWJ8sotnLPj3eRPBkt9TAtMfsWHaueSaJGwTV61a5q5ASByA1iQfK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42zU1gEKZZgcRGGMiag5g3n7jBYXaiY1oSvKpArQiJqTtJWGw35WAVS89Kwc7dtc3df3eWdL3Yiv9Xwqx32msbEE",
  "key1": "5pvtRAMWpojWDuCGXxihKqcrDk8vUyzMa7JU16ojBPhWx8qs1qEKV2LWKniyKGPvX5wTPPSfuqxLKxKA4AHJLwC9",
  "key2": "5JiY4wZEvBL9p1Wj5sLJTrR5Kzvw7wSXv9kYg18g3r9GhQZyvhjZNWncdy5gzdDuCSUQGVT3fLGHH3WssKBdA94m",
  "key3": "5PUPn5Z4YpUVBjbuP7AHU87ASEjm1dfv4sWN235BLoq8HichFsrcvHiYb45Pir36DHviK74ADmwWPshxoX6fz5kk",
  "key4": "46j3k5fwS6QMPpHSVsod2ka9CLWkEYd7gs6r2mSSXYYYHFrjnkwPD4XMS9MYfiHa8jB9KoeMpNn7C6iuZGaB1t52",
  "key5": "za1k9nMqe6nZvLBNMAoF3PEmPvThskMq83ZrgAKZmSgHtzBpDLKxkkGtevfEYNiYtQxTbH2bzCY21oXuBeNeGX8",
  "key6": "BcthWrKpkMb3yzxtG4tptpcqTU8kqJkkMDYFqiL1asH35autJQLBSmqN6J8oMnQ1Rih6h4uKPgvtYiaiEyWz1jf",
  "key7": "4inF3LWwkoUsT9xkCZZDV993gv8RibgayAfWcUtzdJjBbiYUrFS9zi3gRWNubaL27rrcFRRtnzYA8UFkwCxHimnY",
  "key8": "5Los4XbxfzV3u36e1NsFF6Se4wFYsRprA1u3ez5xgRFfxAMAcG7qqpvTnW7kmmMzjaxPZeNTffXUzDGyYSbkYZag",
  "key9": "53WnQQiFGAp5GBrqfiJrcJ9NzrRndQzJNh7WUmffAtAgTydkUyvTheXC4UZnEqyQ9YLnomkffJJzDYATq4WnJBe3",
  "key10": "2SMkHc245SCVe95jnsz4cbmbJTDDcHzK1pGWn8ZmVbMVnuFD5EVEFCrWkv4QCJ5tABaNjCcWsmFGrXYu5ftS3Ln1",
  "key11": "iwHQjfXrshv98dT5tikXVxSz32MGV5HNeSxtK5UptcDv8RLDf8ELBazqtei6nhxH4busH39rYicdMBQcAejGJQk",
  "key12": "3ZTiavtyUJzkS81k6S41D4MzWQjbadkRKyGWeZ2hPKHPnxWYCKtCXvVhrzBStme43F2ANz7YR193mxYn3q8yepZr",
  "key13": "4gSqq7CYjE7apTwtTKrxX4PqBD6Lw5nTzfE1w8VSayhQaLcdJuHDDMwwTh3gsNet9QfMpsko7yQtwTkseCk3UHap",
  "key14": "5ftheHJ8bi8tTmvNfGcu4DHbTUo7s8HL2N3o1nHtfmDpZ2WCt2hfofRFeHwvwT8QkrThrrS59TcPjyZs7AUM1i4t",
  "key15": "4zL4iPxTod42pDeWwvinmbp4n8vV2qKeHoSLsgfBQawJSSmtHwqRayLnT2veBZkLHbsJJMYh8kFeAweqn5ao4gt2",
  "key16": "2MeaCWZRQ44hkPu39i4238hoXhczGktw7B5eB3jPYKqFn1ZKewghZV5VNUwZTErozeBBXPxXEEJeGeyySq8a9UqF",
  "key17": "5jnN3PaVspqEAMTcFY9u1CwmdzjyiPAXbh72kL9aaBAvV1UxNJaRBDRuDZFic7mHqLjnB6xsAzFqrQPYf4LLfPb5",
  "key18": "5ZS9RCbMsFwwvkmsgMb1H8KsfrFykHsiurCAVXiHagW2FYAXZfktCALN7ZiqQjxRZhQgBj4yQn3DkYxb1F5NWqQQ",
  "key19": "3thttXaFX9JzyW6x7hPTzCDbKbrTk1vDCJMZr8E5cVpmrL8NKpkKLRjBTYvaZLg3LjpjFkNW1uLbzAaNd5DH9CVz",
  "key20": "5awyJMYXx6fKe5CgKH8mXH9EGN5MscNQ5ZiUy6Z78EYeAd2HiQxxVbUKVWwCey4tGaXaVoDmznqyiRoxERtQs3qv",
  "key21": "3YVFEZ5C3z1A6fdBpQ2UmzyHn36QWMbRHGyhTchJq8chxhszC3VFJHg4JRJYpi6u4TnSC5G1dpVMhfGJBSXcGBRb",
  "key22": "DeeSRbNStSusduZijkjZFBXUgbuAGRQkhWnETAcmeDg3riSChDrBNmrFijH3f6hwwBCDkuhR444VL2kLB8NbD8Z",
  "key23": "3Ebu6wKuHKpgBSysqAGKtUHwjcmNzyXTJodXSRBJHtbiYLhEaCEmALNbpx1L22VXPXx3eWxTK7DYVzVaAE1GZdRm",
  "key24": "QXuw4aRMmpHmN34pgY779Lkq5UQdYvmmc1eRWcGAkAP8XpPMKTvd8pojM9HmiFLaK3SwMCGPgmPjMVhYYhENk8s",
  "key25": "25cYSyZSRHR1VU2i91B3xZamxkGPLpCkvF7Lquqivh4EPMZpEE6UFfnsz83fZqHVyZLgQzC7Kfnc5Gc5C7cJpmwJ",
  "key26": "3aHadXAsKzVFBsYf5Exrf3uZ6NuvZeksWZPsaw8X4GnYF6887RWXocBgb9Li8GDB2ShKmGJax2fGT7cr2PNWtGGH",
  "key27": "3RqYD1NNB3pC9QyJXnSq4CF7GTfDxZHngcjQfk2Jb8NCG3AfwbH3wdzGaLbUKHaHbvrEuZiK4SWJXDJFdHdQvMQG"
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
