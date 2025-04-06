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
    "2T8j2vArbE5KqMvRUocnMQCTyg8Dr1rzVdmDxEJPtEfzd5JuSJi63Uw2LQXUz1ALv6Qg2CmiZYdNKEHJ6EukaNfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32hTbC2ci5tGhbwoDdgZK36RoXRU6FLKNTt8YjT6J2R4F87buS2fBAih4XZmPpwGqq1MUoH3ZkavCXWoeMBpJKxk",
  "key1": "4eg7VekP7DHouwuH5XSLNCygFAWqoszVTK5oYHLk41ZX34m4dk43JSbqe8S37XN58yXr6hapmhFEAfJdq8SxPkRK",
  "key2": "5cfVmUkqDbspry88qbRNgYKr8wBQt2F5BvtzFRbGU7Ugmc4zuMw7m7x2euYSQ14UMNi63VYVVk5ttetbdjWRs9e7",
  "key3": "jsJWDrSwkz5RiiiDN8eCWYFdcR2DnPjmYFmjnbRLz4Yu8TSE1uiKjHSV9YhT5Yn7uHp6PQE2AEHHQNcinHMGFMb",
  "key4": "3ta559mT6q3GZQb1Hphx6EmeDhSbEF16YV7Yoh3qDm7V24GUoctuS43GBWzCM1oPmthStU3z4MrQY6gd9SMWD8us",
  "key5": "9PcSoTy8NGmr9hFq9bQBo5ZaQg18FZNew361PXYehyRDkpbSBeyfBLPc1bqNUfshqiMgA9e1S11cFmBAjDvcmpv",
  "key6": "3Af2Wfcpg7kKtMSvyzKoNNJbBASxP7FocRg979exbdZJ49K1bSursVYyoQEJhkPf13xosPF9xfq2Ma1n4tnoBQRD",
  "key7": "286K8vzfznsGoVdSEPXhVZtJcMgcH1gmLgTJ6qfsnLHN9RMztzxMSMq5JNbHppeaSovM6aX1rP8LctUAtLEuHS3i",
  "key8": "4KAqdCKRppSzS6UsvNG5Xb9R8WLesX3xv7KK2JSKtu4Sgq5wLBfkrDHKF152GfEQHZcy1zXbJazbKwNak286rX7m",
  "key9": "5QBG9aysvuuRHwtvnHWEeJqkZYHJaGN32TwuruRCGabVBHm9AerFR93iGCauqec79HZ9LmZkYRUqQCyca2tcdMTo",
  "key10": "2iMZuswNwKhtVDRDjoqRM5umirbMGKP2HGyuBqhdZ3B8iP9ywKeFdMZEa2as48QwZDjEGSEbLuK5jqviPxD1htGN",
  "key11": "2ovCJNzbfSZ9caUCJogvewJp3fd9N5ZbqhjPNm6nfrRJRXMWHySK9fHPTDWx8scCrKWfmDF4V4gM8m6K5t2GDsdj",
  "key12": "5XWpHTFYvtMwFDhdfdREk6tRbzCNFK7AKTypsd2UHuWHJPazGDzQZ3aaoTWbGLpzFYMYG9mJWgiNzCL4Z8JPhUTw",
  "key13": "591EK1Lh64utVnqb9AJ2yZNryZ7nDKSmG9ZqV2YnySUeHJTCqdbaArFAeuGXJHxMMxTgWQGQKsJ9Ym6MhLQLEBuZ",
  "key14": "26njRNkGUg1uDEJpNxNHfiSELxU5aW1H2LU4Bu4iTLY92JkwwPRvMELJs6ekF7KavBfJ9ziaDxZhA6GLSuMf3doH",
  "key15": "2xAuz72KkXoHYrwTjTqt56b6XAXdujXeTydRHEAhkLC8h1p5TAsixYpwzPUxmqK8ekGHyEB7fBbhFPtBC2GFDM6i",
  "key16": "2Z9P8ZKPEHniJBAzQodhCXmAEmrJ2v8UKNGRv7BMb2kHCWBmiQgpf2N9BZ6SR42jjbSgx9EHp52T44e77mQZiazE",
  "key17": "2nr4ScEk4a1HEDDNxTGqLdRJXj81cF1QM4qp2CL6JWSpLBQKRMgUwVs5W3W8HjT47wfsZpE7EqxdxeFTG4jq56oD",
  "key18": "5hhvE5rs5RA9DsHa7cuFK1Q1fwkzmTYXXreg3wN9YgMwiYTQEJMpNGC93nJFuPmkKe6rh2eLgYUUqrTuGsVyQwkF",
  "key19": "xBE6CJ5jCaMiKvs9RzKZBLJJ7qRz7wtPdmqKWgFTgEPT1dFoj2JTX8aZBx6nbZS8RHWjFcDxRAr7iftcPVLthAx",
  "key20": "2vzLNHTd1sktvAqhXGeDHw1vHpe6P361fuwiAhhyZm7cyxKz6EjYQ1VS3gdPq5MA2TPtrJZQtpL9zeE2sanZ2Xnr",
  "key21": "2XLSbxxYRn8wibH8hxkoftA4ogSnS7SEQfLyM1UJq1TKFJHcxhVGrgQcHDFLPhiu8fsdEp2RmR6PGPJZDCeyfbNS",
  "key22": "67a1ojHSpkKxWt5YXfSqNNER9TP4hzfbeDvec6rVJApzHqiCXLbd8kB6rBJXCmx3euks49V3aCdDJs3wGictZXqr",
  "key23": "2y7Fo4rTMUtYYQp7A6eWLQurg773GCG8XEUjVDaoDY7MW3bMp5KRny84rPMMh2yYKC7qM9vRGCo2gaF1Edqktdq4",
  "key24": "fAMqzrVsrgk9vrPgLpgTauXQ7FMjY8erSdt8EdVfQYEvoN4itnY8fWoDZh9myRR6ftABGPmKWZMoqRhSej4pp7m",
  "key25": "5pXJZES23CbEeM1xFdsB9kNm6MPDwZU7k9BT9bNriKx1yc7DfQ7TuK6npbTjx5ajb59kXLEuHuP2JtUMd4D5K5Wp",
  "key26": "2HGyDpVACKuFgeenRmYPvg6QzR2GEEqzfm62XSN11KNX4KTHcPP4zhDUaHDdXBg5aTKKVnqHkmUAmXmYBnhukWAj",
  "key27": "4NXPF1zScRSk8SoZwX5bjzCTRtKegN9AZe3U51cPKtigdx5ohnsAAXEYxZ726od2VJ4Dcwfu4ca833CLetMBGBA1",
  "key28": "5ckQSzdB5j9ycgnQ9EFjNPt8yXJA143DHPGZpkNG6gbsbyGZFnsq5xnc4d4FpCedYYj3vcdh6dG1jpQCchmjLWCC",
  "key29": "22HVRTuUE2RpQv4ZwDKJSzs8mUixN85vtSogb1XR82v4sxxe1vCqqU3JNC1y7xcW8hLnFyYh7pL4zzPKjM9XcMgK",
  "key30": "5NCAZ1EM9Y3oHWNiUh2F6xCU2UTYbkC8xmx8PRv6JjU5x43LXvkMJD7mGhnEoRmrtHL8SS8nDDEqLdf7r1E1eU3k",
  "key31": "4UPo34i8QN7eZWq3PNPkMzdzPZppJij3UQR4WjStkJCwjWuDppnno3NCsmPXnDRFeEBYtKoX5UJboXLTt6TNQUHr",
  "key32": "3dSPuNk5j7YpLLpvetYFmz25wAjL6HsRP7eKhKzPmy75mp45Jwza1s712pYvKcG5eYrAvP3Q1ZGtFPqornKVE8LD",
  "key33": "48eHkhhCZSdCyEkk2pVxRdwfTK2G9gNCYWLXxw1frDwbd6TqqFZ3z8jBNUf12zpyNjfyB9VuC6H8oG8qaqi4FC9G",
  "key34": "2ZK3RVAo5uqfpyYBhn8CPzBfRjza7D5SVRZdkQG9BpH8RoaRyJMU8pV3eAqv6SDDaFa4ju3cisYEz4JCdwpMeRov"
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
