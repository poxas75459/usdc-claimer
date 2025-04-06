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
    "2Ls4Yh3SqUNr2g5ZJJEttY6hg1yj5szDkfH2P1ZwC9Uko4otTDsvvdC5vUmVBRGus9f6QgFDRWEJFrJgoBiHRSEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4avgovTURp8NkHSCL7Tv5cs5RbjWDmNgTnCxjLZKSAGBDh9mLcewzQGhoJcLJfX4W1hLU9D5sDT5FfdxC8G86eaX",
  "key1": "HTgSueSsXFTKH8EoFcfjzdhUfwBAKLB4DkksqZmh2unynVXsDVqa5SsceBX7MbRxxVLwooCP15Vf22Uw88HeXoo",
  "key2": "khGEC9FgPWFV6C7H1cr5xUJjUscU8jHqqeVMbn2fD22M7WNJeVZPBtrvsr35T7GFZUczc1rcgfmduYce8YYoABS",
  "key3": "2DNGWmGWs398gBt92Sw7j61S9fQbhaXumkvibfxcixbvEXwB9bmvVKvRSZQu3GDK5URaEuaxsL6Bj6gXxFMaxScq",
  "key4": "3XgQ22S8T1okQsNBmgVBsYZjsURPJwdKVFbC4Tx4371jRGF3x6rPqGw1DvzKqWGHGHBUgAg1fSy6LmqBgiDaAYY2",
  "key5": "3GGUXVoL8kzenvAAqjhRgpm2eSbs3x8BWaBsgRCgsfczH7KLJYL6LXHGzagNKFvwLRYKvwkjzEAm6JZMx2e2df7x",
  "key6": "2Rx18HNa9KiLa57P9Suzxdc5JqAUFoUFfATR72A7CRSJUcD4KNp2FJbLfLabtbr18vntDh1rjRXk8dkBXV8BhsER",
  "key7": "4M5D2otHCkunvYu8BvkHR84KCEpmV3Hydh4f8CJx2PCSPmimqwZheBXEvaqs1uA7P2BK5Fd5uTcGenabKcKiMM6K",
  "key8": "WQoLz7ewzgjiub8TbKxGRHbz6BgRqJBzJ2kqphGcF9Hb6AWNeC21poRifEBdmLjqan52FT8NVfs6CSyWSPVh7mq",
  "key9": "46kUKKYXR3Kh3AtQa6nHCwhCf6bZjkCaPeuVEpsaDTu4NQ4t9HzKJ55DagJVernLLifAVrLXzBtCwfFciBCTr1k7",
  "key10": "4XBuru9crSsXaeQC9GmwXRyMuSEzRmsNaWDDRfSM1n34TfJMcYEHtvQGXk5Bt5pHXg8MFRS3zfSVmBc36RyYRbvu",
  "key11": "4oiRPjDXT8Xjaw9B3ztwYpApCvqoAgHYxRvoBTADzm3rhijrgs7Jk8q7YjCFurWSV3uErsWFwPfWAht9uMPQqqtV",
  "key12": "5sikhHvXM1mgBJ8HM8cQ7WM1wt2hipDX8WGuGhgUYxyByc8tCtVkhiqdRRU2TPgbpRAbA99HyHVoZs9nekwe7Ubn",
  "key13": "3nTv2oKB48um8xp75Rr1v7WGtd6zsUVwGGCTeQFMzNJMmpWqpuGq611ptAdiLaa9RVYhZTWmZgsVxaGRyYAvpwxQ",
  "key14": "5r14tEj9Y55MZy39Z1ak6ndSWR3byo3eJwx5fGw9MD6uktGXHi86iM2L1rNTedfvFPEyamsxGN5TruAU1pu5sqP",
  "key15": "3CGgSbqsiShGs6FZotE66qyEZXwjWbT7vhYg73RycHZtAttuduQDX3fu2P9ZBMT9JJVtKLW3dNwSWztRCy2eYVyH",
  "key16": "25aXhKPGab98E8GC2cWyQD1psSWmmWJWN6EqyyBboT2ujn4mfceJYFEat99xG4cfNzu8cQ1FZdMTJvMtaEkVW15Y",
  "key17": "2q9Pk3GzDE8KLYLDtuhVVJXonH5wfhdf17VREzqnG7HuuuBDQxdn5UcFcwBotawEHxLPY8Lw2gPd5P3wYWEwoPMK",
  "key18": "4EuctvkGRnpo3g76bZYuaQeTSS9VMdNvS9sbweKDzu4HqeWFAcTye4aY8qAcJQwKGGr4zCrx7J4zDQPbmfBDy1pJ",
  "key19": "L7FJe4651UsfL8SLKYGSKYZST9Yj2VjqVLfVJGRAeE1APbr4LUUZpfJSaiq7XrpqYL4TFipd8D2K6TYj11daHBC",
  "key20": "4btebh18Krv5gouEgZV7uRpw9ePzXP9w32B2imM9FahDHeEnYkuq8Ra5r3WZ5zchypRtv3WkQXqBdrZ8qKkkU3kY",
  "key21": "5rZ2aWELWEf8UTbZq9pEdFcMBsxBGhxhjDtKiPsreonjckEoNindJWQHGPfWNkg9e5ZyT7mUzdGBRjTtCuaRv7JJ",
  "key22": "7uGc63DTKRGSMBjv9Acn1hi1ucBsP9LRXtkhJbwio4xYUqXeb3cXpXni6sw8qXURfESq5mi2sjCnyswNp2jMyNz",
  "key23": "36KMHCRxgpk6pmXpV13vkpqquAM9GkwMSyVEE14BCJCmv3EcmaoRcK8Lh6TDGuNUTgUMYvqaKBtkDcwDu1aHBorY",
  "key24": "553ogtYiNY6HEVU2jb8LuRLf9QVb38zGKfms9Jd7mf4aGniT7rEXoPJ8p7FfXSPrtSeB3wiFWd4PGhCD6zUL5Bcy",
  "key25": "51WUqpxF5t4Mievp2RBz2ZbjSGKJuTFcFtkjjFXDUG97rTXGg7iPfUwuroa9C8URCCdFmx9bQDHrZeqretEBbCh1",
  "key26": "41q8vWybYhZ3Qh4V8ZUp7qEfMdy42KNoUZ7P4pJemuQTo5nedpZk8jt3Tk8fDHidC38qHyAtBm8ahWrR9ojWRvqh",
  "key27": "4V1Xmp6pMqKKaTeJhUPb6CH2JV7zkdJPnmSN2akvYNeRdbGaX6NwNjpBrEcMfas568jZEYrZFPuEggsFE81KSafM",
  "key28": "pt73AkdqYhMHcfuUiSxevoR4v6DRqehZU5PXeYmsbTUyG1ESJFrL5D5sG5byX6JHxHFqFKkQgPMcq25qFwafCs8",
  "key29": "5vPNnEfLkaqpKutpYDsTZCDmmmLtU65H6b8A1Y6yF6AhEc2DC9741NMsSeHfMemYqg275vmREZthC8ZEKfExDScC",
  "key30": "4wRD1Ah8dBFBE4qgGZw7zEZ9Nsn7YE9xXCnPcqGHYhMaM3ey2kyMMe9WHgzTKU7hcGUA8C8MivedG2NdCKMbZTWX",
  "key31": "4tLoA4Edm5ededPk8dzdDiBCrwECPGWd36L837XNjXhSUTkZC72wp4gDYbHGTrCkiyELiLeyUPFMAEW8kkNJb62w",
  "key32": "35xJ3gbb6LQctqH8kfvtFxCrjJqR2Hbhp2DW2Jo5PD1ccYJNFf6Ye7eTLSYcZCaViJdgPgbRw4z76g9k1g2Vtgdp",
  "key33": "4yMMnhxb9cQ3BrzQkyTaNejytpkho4X76StxLu9poWQCZLpcEJdLn74LiuE4okqDtBmQgtP1Lo8Z6pSAdqnsDPPx",
  "key34": "ov1Bpc3FAntJhMJ9PsFP7WiifTrcRSazxPaqzBLqQWpREBvtNe1azmjC5u9qQi11MCKS5o7y9738hmv1YC49i8V",
  "key35": "52eRBJDeT4y6CHVT3mjbqBNY9s5YeRZz7p5jANHZCq6pS8uFcxDXkpd4ezBe6uc98EbjXML2Pm7u1pUBpa1eSaFa",
  "key36": "5gFbm232qnLm2s8wxRb8RTCxJLiwCwRWVVfAd6LjvPYwTLtkshVeKkrahiHNUugWdDPaywdWAjwwLc18bHrkrBPD"
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
