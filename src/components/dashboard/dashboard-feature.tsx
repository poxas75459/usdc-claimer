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
    "4iV2FAQ56pdxD9rJuPUYSCNaN58bT1GHFcNFhggAcftSbjRQdpwDvUijHKwzWb9v5bvhthx5ozhGxCECBw4FgWha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25qX5CUAWgW7zEWkHpvkUrUQDVJ8jYDQ2kuPUsr9jRLVv1LCsAC2Fv6jDnyvjJ3CfRqTheafmEZxha9Ci4HNiCis",
  "key1": "4GRLVysxrfYH85ciWFuHvxmxSq2kz1DbABJQYwcMdDJXJF17VHmDD4cM7eq6fMTb9gbiLYuKaDGkbWN1CLV5M3yh",
  "key2": "5EmaGAb1NcczdzSsrVg61DXX5dYNkcR8Ddm4zoM4dqZ37zgizsx3XXGqxmdV6H23nuAbWDQpryy5hJ61xxVJf2Li",
  "key3": "4oEnNkWfyL3XoDCQ4MpK2ccuvR4vm6kqVDkjLvb9mFZLifpaGDbBvj77qnCtB2NSHK9wUsTnmf7vvQD8JCRaZwdz",
  "key4": "VxJXXgrEKmhZGHc3swt2NmNu9oF7wfNRbMYjuQiYqWKnoEGYjTmRjge63W5NFuwq6QRG5yw7AvzZqChSTfhZfmU",
  "key5": "3PGsUroiFJBZ6UotPpPuvPQR7Zsnkx1WVT12VCvdcx9Y4kCou6Pcywr2hUy1hNKUmQhnx44mn2poxGvnuhALGQNL",
  "key6": "CRuaEYbssmZnwPzagLhUEKKKCreyFBypmFPsp5thkyKNDAycqmxJQX7ccTmS4ecH4TCqPSNyiv3STZDXdUs62So",
  "key7": "3EYoC72JiqLC4eRng42erB9jx5QbNJ1ZbYE6CrcmVy87KjHGNKnG9wbN5rkV5HpKtWzcrSR3Zr5SzCZrYGgJzea6",
  "key8": "3H1VXwm36j8qBviHx87nB1VzVtZzPKin7ZyHdVMHMMpK5AWcs9cmRoZP21AC23vL2tQuUTeo7woqALXApXC88sQe",
  "key9": "2CykDfpdMoKEXMHRrzB9LX456gWRZyecVEwURQftTJHud9qyp22ahBqfWV3YRi6go7s8kUxW9rarwn5QD7S6mBBe",
  "key10": "5w3ztYPohTopnUckWxtScjvo1LERoPDPvKik4XmE3LWJcyur5QGP9aLTeMoY2Yt7JGQfkJ3Pngb4wA7fi8uEaPrn",
  "key11": "2sWUqcdrQ8jGKJHpc6P9pTedyheuDhTr5aoTa1KXb49C3XwU8XB6fR95qrRBJEDpHWZWtnBNoYhVcphdCcR3dp3S",
  "key12": "62TR69PG1F6pzedHywUhQ5xYo2z1aexiWULr74MWnRMn9zBPG4T6RyvpQkGNJfB5vLHuv478dKLza2q4WUgcBypY",
  "key13": "3FSbqNpZQAcBwyFBszNpmb3LzjyGKYGaoBfztyLzoCshE9LGB2PhgpAkMwqufU69XRC7oC2LpfjYWZHeVoA5YjMk",
  "key14": "3PLQYXjXSNatfwR8dhFGsdqXjXJPPpTD6QELFx5uir9pxf3VU84WQVoD3xxsxWXFMGry4JtWYmGt3ryTyitD8PAU",
  "key15": "5VV2xsQ2peorcmttNWx5xrMxAmj8qeCgswFaa8VZspT76DdTW5X8cKS6BWWaEDz2FVyh3BcR8oxH3UWsKwjueyMv",
  "key16": "5y6YmGnUk9xHtaNf6E6GraWswQWy4XNqiPhp4hExJCzJ4yf11Pz3fmiDCWwj9JkuEs595wkXtHkyMp2ciBUDtNPf",
  "key17": "4NMgEaxnHKrVWGeJPpK4NtmMNBxqtuccfQzSvkWnvJEv1SxbfGPYNjNd1DH973yLmC6KaBqt57y8UuSt57sL5hVn",
  "key18": "3YWH769fnVgMuds8u1d2Wufjmb6MuaQFX8rFAeLxJGgKHhGSE8bH6KUyhmC5Zi1i6c9YVAAyjVKfC3G8ngHyeqmC",
  "key19": "3Hp12xo6UzVaLQnYy9GxHK2bWjgt6Pu8Vv9wkaYvwoCgvRHJoy21c3aKbP6zLn6PLd8Up9KBPVkV5UDRcL7z28ot",
  "key20": "2ekCAHLS8CPW2W2yr7Ai1x7xvukkLRQLi6XkT4gZKQxGa9SWpn1QMS92xr72AqmUX6fHymL2uLE8cb1o2t1qGf5r",
  "key21": "3skPo4jcKY6XvFZhPw388pjqLv2p7K6FuMTkjPADnDn1HhgKD8ThEAoayqP6mrJ9TGJkb9Jg1Vhw6GNh2ZuNsGse",
  "key22": "S6f22NMWHUFZXJB655D1oHLi6ckG1KppbLh5GvajFhU2N7dBfpAfjrT5KKTmWJ8fiFfZhv5JKziva9K4TeKQpRa",
  "key23": "2f3djDwcoycaqi4mGi2UZwmUg1J87rK3sBZUheZqtQK7c4n8b546HTAz6DQaCtbZr93C3Xm7Dm2GuxtSxx4Yti2d",
  "key24": "3XCspAqR28stxfgmAw4FfKv1sgeSEpAsjXxFRXz2tbQPfqGVRzznyB3TGcxUZ7dQ9eAZbj9DJFa5cQQ6gpLHLJQH",
  "key25": "2MACQw8NTJgpRnhfrfsnWDPAUJ3bdxo6kgJH4b5MBtTnQNT4dtsDu4wd9ym3rNCeffdmUyxZNcQ3qL6NmQrHTq5R",
  "key26": "39faUYA6okUgwuuZ8x8aPQ9BBf9j9bTKSzyez5jPVRVrvUwyGfvhYDAz79h3cGN6sZaRj5DMWVKMQ53a5RjrnKEF",
  "key27": "3tAkK2uD5Qq4kbPPQ8C9UH8xnpHTts6kZ1KhzeqX8qgCpgoVf4Avm3Z5aNkjjcWsZe3FjBxwY1pkGfk8rxZPcUsR",
  "key28": "5iaxEEMUFonER79zUJ45zafeS4g2Z26TvcdymvhPtEnYw6uY9Kqthu8iJjLUDP7D79kDdTgSz3Ay3KDSdYBo94MT",
  "key29": "qjmT8pHWgKSmE5KffXF5ZDt7ZyU1FZNhdDtPNQQKV448DDRJf7tVt5QcS43aViaqxcfjbCmpxBf71Bo5QZoCqZx",
  "key30": "5JgK621wyH9xXrARHWq2ZVbBwVgPFZMaXP2Mrq8bvVbyqkcT2qmW4q2Xy8fTZHfRQMtWLShsjgRSKYw2Bvv9oyBd",
  "key31": "MGHXBxJMiYytcXSukwXDym5TnbQ9958FHn5HaBz6WC2vbmuHhjKatB6sNt4WJon87W2zqs8w3js1o3ezgXk3ocs",
  "key32": "343iptiacxGHd5TQ6P3wb8uYGWP1a8EzBzsh4mEpYoCMyNxnFs3e9ZEWoWKWZ1yCLzjo46c17ShdyYkmQtNiLz45",
  "key33": "2M1U6mwc7Uh8Mz7257F3wna9FBNGjcDW3gNTE1x3ZAEK4KxYcoraVRth9B3N5psEehcg6dUM8AGPAZ5emwTAs46Z",
  "key34": "pWMx6c8fFVPNS65LyWDDZrGUsR9wJcfK4SMFCPH9GhieVVjk2Vq2jkypbqCAft4nieX1j1tEvxG5DRGnNH9jdNJ",
  "key35": "3WymHH5oDNCByiCSzvMVDn6y2ZiKD6WQAoi7YHTcRimku9uQHYADPqtrCCK3pkEbKj9igwAijV9wjV1339E6jVAt",
  "key36": "5wEdgB5NThdtnZwYYMmqULXwwsZpj8HQ1y1GpW8VzWmg86XU4u7y2u26cuTinWACtEdp6XGCoFgFt4hf1FjVJskY",
  "key37": "5fGnsKdZCPsa6iyxzRpBpadJa6ELhjQgnUUQJW1td3HwmxMCHXE5LhPS84qR5oXQcTKNMdKSGjTz6GXf8MVwymaC",
  "key38": "57CY7zUpN25n6DeLdAg5G4qAacf9VuzsHxotWqSh24y6RfpVKqL49uaetHdArAVUJhwitL5HRFG7n4ked3vgrYzg",
  "key39": "3aKp5fLcsVvvW9EYswAKY4yxnCCtfD7p2jW4aTfYxjhDbp6qdeBb2EC8HhpmvxfLurNG1PBhQ6uvdb5schQyrKda",
  "key40": "2GwiwwTv3sBWQ78Sn9X1JKUWhxKe6xJKg7NN57ADJwdHMnKDJA4MuHYyRB3C5EbVn8nyeecgEwDQyz9FUYzukunq",
  "key41": "2zLXG8pQtUEZPXTfqkEjrk2SbNtcftF4s9w1g7ipN5JmDHxTproHoWkpJZ48sw4LvDUu4xhcFrbSCEdXfcp1Sc4K"
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
