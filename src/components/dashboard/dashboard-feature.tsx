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
    "4Atj5ctVGDyYXxTUXhtS4CVGAc1hgpCtNVGdqA9BxF77EoxiU7ynT1Qp7FYmhj3A679QUZjTR15bDYNDGFn6UQpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eQTDnXymhCTiHegy5c9xcNd2YpeCm1enryKMzLwcU4R93nqKhFpAP5SWAwrFXotHUTjESoqQkB3wNtmuAJmSGKC",
  "key1": "5LVptZsL4rimXZpDRpRdZ3u4ed2x8DUNtn4UUQVp8KahyGQUSAnvvMcDgmd9hAPft6AjHzJKuK6jGZm8Yz6DFjmb",
  "key2": "3d23ksg89mFaB7DS5tTjCczGABp25xPtmSjkxnCHZ2kckLLP2SaggjYdSjSGnX82mhPqLywwYgdtoiS3CB8GSkbK",
  "key3": "3ycycfNcaoP1D8UFpVd42LJ32uVHcCcv7JW3xtx7Mxh7AE8sx9Q3tBYT145LW23K7zHP6Q84hR1ZcvtbTdyqiW5V",
  "key4": "5eJPbkv1i9v6xmFsQayypnxyzDtcKL2ua5URKhX2fETkhKxpxz7vt1XExut4rEEmTwsPFw2DesP2oLAPyh1iTN3X",
  "key5": "4vvZXXC58nyqkSJ6yNfDTsgeQVBT36B3BZpCi14Y1yKZaPHwWEUVjnwx7aBKBiJXKbrCvsGxndPsGBJ44qMoxfFA",
  "key6": "5KNdeTWWdiM7PNhGHL62aUmLwXngVWWSE9kb8QpeqCzQRMNwo51UqxJohkEX8BsdUC5ze8muJ1skvJDVVHgGCH7z",
  "key7": "5KQzYJ6xcuER37ZoFtPrDLnnwdjNSZpvUzoqJddD29odjRXrWDeQUcPJZFXpiAmFpK448jznvryop4wp1bE6XQjB",
  "key8": "5veC2ghqnis1qgo7iandToy66Kp6jo7g8norP2SgUnL4dfBLcfXa49HARpEySC2F8syAEgoWJva44ci9fga8pUyx",
  "key9": "4yYs7BTWqXLW7z2S21QdJAnLSvfgvqQnmRTktF17tejXp3s5hYia957VGNsnctWtumUEakoBCM7d8TXMhiJsbmiQ",
  "key10": "47bzBBzUqiPP8Pof2wAuWnvGaSAFz2nfqfCRvsse8wK5oh1TSnZSAKaTrmdR8MF6GM7N6Yw7fiDf6PpQouiAjSBh",
  "key11": "em2YoDtb7J35R38uM6FdAMfu7JVAHAh7ADjy4nCzGK1bgKoFUDeyVyZa92s8wfCqWNi7o4SzYQ2a5qRUDkz4LLi",
  "key12": "4VjaHiTyiiNk2cRfhB17sZ1yCgVAkuCPUMUqfmMb7P68LwquNvVqzTMamGpq5HYsGHsqpthADvVmZsHSHrhx6KmS",
  "key13": "4uNYk7NzBjbbFuGZ9nxmkTmsVNq8Sqrjcap9Kdruz82En78nBhYeUeBSNJuvQ3NMKeDDgdMzJHNP7qeFxj1zjx59",
  "key14": "2eieT7WecwvaSKaAq7Uo4MNUjp6jQvXABj9X4tmej5KHeKWpEdQub96Cx75H9BnCVDA3HVFPDrDyAP6nVv4ux7ow",
  "key15": "4Zd1Fbz4o2Rj3PQK8xtKidsUJ79WZukYWnU3zEVsYCUtQ32uQTWLQpGcfcbuQ7wqm4qWvgEjp8rfbpbmopFws588",
  "key16": "LKcYQcq5hS2QRwcTXnL8XTyrk1oi1uKyQhGvYf4Heh65wYPbsvMagGq3jhBo4vf8Ag9iggrRGZGEfJce7ThWDQ1",
  "key17": "56XZT7DKUWy9L9D4wVJH5kpuqNB5L6JzXBKgtdCBXeoHaExRM7mQyC6eDLakAkLf1u5aESYEoihnpwTbiY4f7fuh",
  "key18": "5ZJkX2tcSYZuKjnSsnQGBxYGoriLQvVTn4xj8d9WH4WwVk8PFLvdKSkgdb41Z6HGmCnoWi64GZeEAKuosQdnJ17M",
  "key19": "2MHXcuQL44WDFtjTth6C7w54fNDVvZoN6gfWHm8UQaC3XVrQp3Cumoq61BjaLwcCxCu8qMYt8FsEwveNWZ4c1hzf",
  "key20": "2nfhvQVgUT1AUDspYnYcpkmMYCRjrQPiCGzSxLRpv31FvV7C9AwB7RyR2Cw9SZsbvkooY1BQjAYr4WLZoRTV6AqX",
  "key21": "2wpvVAmPfBFSRmPgqPJoEpJSfeFPFw7jobCTPHAe5ZJLsjKQn1D2XybDV2XwxtqNVE1KtghuJ9xNw55zXtKjGa9K",
  "key22": "5HYLcBRHEgSwhtpPbVNpwW55vVSWLZR6QqotrKhyQRfX63JUiQVcb6AGU1W9HVv6keqAyyzBEVvTCCPgsgTTg9m8",
  "key23": "3BMAr9qYKmZ3wHBXotaRCMdGuqmN4Phw7Hvnqd4UaGoBCcWNP5jDsng4HeKoeGPTwWruKkN1f2KjgkpSm6SyKHpC",
  "key24": "46CHX3WwT2vxm5sxAUgUACQvP6DpZeztqr7FJnxYYHCAkE2nLAHAticHeEVWRcmdoX1kyuURabW5ea4vi2FH4aEp",
  "key25": "5FUd5NbnCYtmUjzUkzhDXBsNRvnmdd2dFF2XYJu5jnZQ5j85sRTaa5wyuhbwvsgSuAoVjwDPi33BGscwXba1icLD",
  "key26": "3iNQwu7EeKusnHPhYqM8Ji7QM2Lk1qfoFsVxdbuVJaWDaTiq3pSBZyRqBJpBABmqExzAcyUhsgnLYsXYtDCiZZRe",
  "key27": "3Ry8hJ9jAXDavRV9s7u4FW7XbR3uXbuhvcbmoqrgR7aGzg3LRfzzce6auozq5HCYtQRQiq83Nt1E2PcAhBwhFjfX",
  "key28": "4G3uPa8EU5qXwX2dEAGM7RLMG1q5yRpTtPdc7NjTNo4tVxcecxxJCY9JBdumBxyrTVHgjFksXaSRQo3k8EgE8rkZ",
  "key29": "4VtrXhWKTsZkXRchBU7NCsUfyjWVHufD9xaN9qveFPuGP7zekt3UYyUK8wr5ZXmYfyASCeLhL4NZH7MndzwrbSnm",
  "key30": "48ycV2zB4iWACXBKUq4F6VAqs6k4fKnxEjetrF33rvbsNcmkiUPoq5aD21xh7cjDAhAAAYcUgdfLh8jq3gNcDuJh",
  "key31": "2oshUoD5X5SxuDMvM62xsx4Zr1jWTYu8TNaX6W6MfLwfP7zhrY8KBhweZpRvEuC8KE9g6vvDJYTeumsEoVU185UP",
  "key32": "37H8ogoC47gzhvBG43VHh73D3SrwtZaGATtSGVisXMxWS22yga5uUaHHC2YP8djF11QdRWBum7gkhp9srcrehXrq",
  "key33": "5HBpuT6jndk2rfMQSnRdW4cduohEKKgpgKcdrFawr1Zpa71pHbReZdp21tjPPQWMRkCpx1emRKcBAqncsETxTDA2",
  "key34": "4r84vxAACunRSuLFrySWPxqWCWBXJN65X6U4WVDDZDVRy7WowPsYkTkq8sMvPa63bKJpSTMkP3ia5Hpbz63nCa16",
  "key35": "KgBRpEi3nMPgup9UgCTdvNGZHpveX2LjcEPiGtbfoJBWGApTDyKsDUWXQa8ZJ8Ft8skdB8J8U5svnkAcSe92eJX",
  "key36": "2RTZVpNFWJZngLHnWZRL1KWDKjWMQSz4qx98zEfFQ1QaatRDpLQq4gaCQJvkW3rBVM6Yyjd49vp7xLLSqXhW252q",
  "key37": "3SV7ccjMXEqTbUkYmBtinEENYC8X9vLhRgXW63cBFjd74fpLc7a1aEX661dW6oJnLyDSup9tNzo2fDiTqAXYzKwV",
  "key38": "3Am9LeKe1jm2R68A85AtpTgrRDHTx4PXAkHgXWMro7UxYNSDM2PgDn7r1JzAz2MHvcSZKWAemorfxBJJf3VSDVEe"
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
