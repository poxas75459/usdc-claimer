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
    "2Jm12sudrps18CWVLpb7TdNriU3BVvbuzraAZxifkR9ji3RBYx7S32C81RKYVNbe3MeYUBdDgP28RafMT8BtKdxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4saQHmHPhQe8xtLQquvHNFERV82vy33PTe9mUh3Mwu365TqopNSGPb978NdfUwn4sphm2Jh3LA2BZ6tzCuPZ7ngY",
  "key1": "3H8My1aGTehZ4bvnuA7zEawSDV9zCU2E6nHZhdyWGYuBZFYuUNFQLvSyUHLE1fDSQZCviuULG1C7Kuy4E7ug5jmZ",
  "key2": "4bXS3Dy1m8WXwUDWNiVPwWnbQBYdrDU4ULLEYQLKmq9VCyPQwG8QjJQWUEnAu2CQfPeK1o1H3i3aSFmeGYeVT8Rr",
  "key3": "UfAxWC6ZMzBoZ7Go8DaPm1t26DkbgtjD6pV8o5BG1wTwimPug58QsxEUqkuQb9gnLajNsoLXHnpWSRBUyN3zBnM",
  "key4": "4icgKfKpM8C99XsVw47QZrUErKWkZy5yhTs21ApB5CSnGaibodnWq8rZtkBbwEadjLp7S3m5gm4zkiwjj2mgTjTK",
  "key5": "sbjXZhu6ZyxQvRV3FTKZ8fhQDf2uPdx21bGerMXkL6f8H1tUZ8VRfp4TJyTdQSzrAcMnLLoboVsQZ4WBGNF1nPh",
  "key6": "kc3tAv97qvje5DRjaqAzhvVJnLgqsyBqeynDqr7wbyLxgCMqQXjnkrBJ9bZq4oMuZL9nKAi1eDXsS3YbCNfMoaC",
  "key7": "WVMW3ccWHdnpBeAkVegLkCwYn4AXFLNba5NcHfLDai3c18RLr9YGpyNo1UCMmiBx69RCZhFkxvWfsirT7gz4knW",
  "key8": "5UnTiMf5ukSdTWPpt8eE3XAzasxdpmN7NxGT6tp26vr5725HVKr2UUUFvhCoJCaKiiNwW2YLeTed9Sp2oL1R7W4w",
  "key9": "4EAUDjxXCCZQmvhzMHYjG4n8H48T2bzd3rDj7LSAEypaK6G9nAfMpiNpRmRBJ6Gys3Zff9eSSJMMy8ARWtesiqz6",
  "key10": "3dYYk8pjkf8rFstFPtXGuXX9qbG3SLSCXkgP8qot7PTMdhAu12zz4XX8qSqGrcvLqrwN9AhxRSRsWJJoNppYCs8b",
  "key11": "YAbnLsDAiXqroK6XpwRaVkc5n2apkDuHvJPRpEL9Ay8t1USM5bxa3gpuBPEog4E2NpCB9cBUEN6uzPKaDHjoeXw",
  "key12": "JfuzT34i9uaa6s3ofgYPvq36gfYCd4Gh3tYtcppefXUHWJoJpcHxJMG1FCySwau94n795a96cBNk6ToKdMLSbVA",
  "key13": "qcusLVabhKo6dAvdPHn8uF3nZ3KCB1gY6AmLWiEugNnbnPQ4i6DtnLbeD2TEHAY4xX1XDtCnxaS23zpQeWCMvBQ",
  "key14": "4JTCnh2ZxdkiMMa2JWm9p6RQ2tLtcNidSTVjeEE3XMvohA4XfzBQhehNYpKb6J2NnDHgRu1MYBqgRNsgNXmor6fW",
  "key15": "61kgVTenPvntBKMqWWYvNarNDiPpDs3nG8ixx82y2Niymi62m77qPav21Je61vTEctgwunrBdRP4dGPsxsENEXp4",
  "key16": "47kZh7fggu3cs7M12yMhwgBdKJ9e1pjbyx9BJA3gTX1YdckYskuYWNzfPSy59DEizSBHuCxFZRFDyoS8DdYcBwDp",
  "key17": "TqD2xcybhKsEYR7pCtUyrKaxcHAVoH4oqHyyYXvL2q4DG3wkphTabrUK5r1ZVNQqwamwZ6suXgLFmQQpuHA5gGb",
  "key18": "NbNNUAgKyr14epJqoNrtRNTTo8HYQdUYPhZVB3Bt6SBNM1aG1j8mLFKTtUpQe3PvTvmN9C2uc85WeYMDBAaF2Ek",
  "key19": "5VUy55KNp2p2aWmDxjBc1YN2xtBfTJe6gBqNDxJ2Xgr3J8CKdHgDchCVZQFviSMcvst1hqd3hXDuVmBj1iezSBg1",
  "key20": "eupykGSC4geu43Q1jtPiiCvYF4smQ3F9jCjWbXGXsCQcTXNELrBBiw1BbybpgzZncMr3pJ4FXkeL16M8KCrsBzp",
  "key21": "2se6WE564L291amsQ8ZSDt6HEMbNoRmhCDzxjz6dbfYCu4cB3Uu9jEBpit54bZzi61yZrpy2EimSR5cpkakJrRvT",
  "key22": "5Trm87aiztNBHuoAEjh2JW1YHCAdya6XJcPfqPmtj526BccjsXq7noyKhg1YdKsR1bELLgKePPj3jVNw2z2wSpDf",
  "key23": "4RvzazGyog6MtJeHG1MnBj4aWVVh2FNNvLZrm89Cn2xD3BJQrUHiD6AyDSYtrYWpiFYWBJdQ6NR46Vv8Z7N4KJXk",
  "key24": "ANoLpDrRyY9xxP37HgBJEeGJpSdV2MLe6XJZ4RKAostTKkHW6twRkoujoAkveK8v3bLfHTh9sR4Rd2GnGSBUMWr",
  "key25": "2DkdSFc56Wa3pv8CUzTT6u17Nh5qY7ix3s94KJ5hKTLarfbeGvFKzA3MQHiVnUP2vXpYCwBerJNZoTeJpiYqFaJF",
  "key26": "4tbas92nBDUstXPZbyvEXRnhPnvqHo5AdR7x7Tw3X4N7oYD6Fgs5U3ZuNPoXn57AnTZNsAfV5KyaBwbpxMaY6ayr",
  "key27": "TATjLsFpojymuS7EsAoSKH4wSZyy2vJzU2Xq5vmSEd7RbG8UM45pV321aKw4NYLLJDR3mQ4h1ndBeQX2mjeFXCJ",
  "key28": "59pdVLoHmN5ooDMCHiT95HuifSirkbiKYQ4jcFHyq1CSpTx6hpu6tKDQZKp3xpqWdRwVfPhCsdmL9Fz9jSA6fhz2"
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
