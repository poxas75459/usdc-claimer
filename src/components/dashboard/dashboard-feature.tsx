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
    "54jfskQfD425eKYVYsohe5dV4tKDtix8ZmjBr8F1if5cATmyP337Y93yVV9im1xRMcRmNFbMnxZmsWHdsk6oeU77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MHgzRaZmkWDmGkjiCR2cvvotmdKkvBHsWG7crC5cHhhYZtEhTuxESNNkYpQPa7BbVBrsxA8mzfZpk5RAr2X4vom",
  "key1": "5Gn4QNg95B2vU5rcGza7hTaBs3PbmY1R8FnxTohFuZqKR1uwgVQZiF951Dg8VKAZsZFtnSvyz4jJtgSQorYN4Mpo",
  "key2": "3cyUsaqPRX29GKXvvxtVF7MTV7jDuxaUhyeowCeMHjcxDZdHMaV7YMXt5DcPvQFMKbQfkKF3b5NvNPzUyS2N513f",
  "key3": "3S7YJ6LF4dUzkzqvkUGSDcqqp5GGNr8JJRUJXbcZkRj3VQeMZpwWhQp3vywVk26sWKoWq89bdxg3de9jwwxFNvhd",
  "key4": "iRhGkLqwLhWMnf6xwEPF3HYaYwAViQSg5hjRcNhrBiSMMRtWBWyahmAPZ9NRCAKM2VwfEjuQ2x2ZnmT3WELmRuj",
  "key5": "3FobqdZno2HKSDh7GyHpeoi7GnTyTR5M4stnN3APwTv1UVMBYRZXZezit1FLs8EPUd3bwvyejR8SDd4sDSUG5xDu",
  "key6": "3bT2hqySdqZJQUhXQM38CSFi1wfEt59V2sVBbGnbThfMqum9f3p4D7NUR5cgcyCjAdjkP7EiTMopmuN3fH5hZAPE",
  "key7": "3wXji2Wj4UwK4Wqx3uYuWytzC73qWYBPmeUe3GFCDnz1HfQYNE1zBAFAShwGqbxt35zeBfBSTr6A1eyjrTsBWh6s",
  "key8": "2jMPi1yuz2QsT9T73VjbjGq9ybTKRRVFzB7fN7T4mHsSnsnxs3bDHZGiZuKMxp2x9uK7YNKVPsFJe1BvaJ3NwLE6",
  "key9": "4vncNSsZKaQYMwh69z3K1P7KyPoq3gPEy9V4KCVTsTTwaUadKXTsjwtSzyaLY6zs4197ZbVA1gt6vZsPpqCZKBCc",
  "key10": "4VQRE9rhfez1zTrDU7v6cTaH8xZPuDy4MeehxEJPYjemayte29ogszsmSnEwiuY4oMidouTikm92GjYoYzEE3zM8",
  "key11": "4b3VPSTAthRbBWVEvhwUPqQxVe7FY3UFHNqxny4XT3wGvVWFhvsMjr21ZRScMWiXLCVToQuP7cEkVD9gfKWwRiNG",
  "key12": "4prPT2a8NSBjUkjhJS7vuR3QMbwjo1QfA56NUps7CUGUeh7SNfLJVSztoviQAM2uKAQCuwq3o9SRx9cNsubnYnHK",
  "key13": "3P7r3U9frumfSSKHt5jPty7u1dJHiM6Tr6KVPP3eyaAD3B4y9TnRBXDHfNgAJGgqPkZvP4WthHpFcYyRfYmDf3i2",
  "key14": "4UJotRwnWn4UnRmwXAoJVESmbe2Dyt4kFBBkmw7XzurtNUGXAeR1JLq7H8ykL7ejFmsqRs8pmKvYoNqsocqdBgoR",
  "key15": "39CUTfMYDV82erM5c9eW18habpRP2FsoBXYU23SRCj7Zm8ojSoeuN1y18fDpqkyv4cGT7Kod18j49e41JCpMYJka",
  "key16": "4n21zo3Abfw2jUvVcLjd6Gxii5NKxPmS5UVRwP49HmyRzDdcZy4k9V9iAK6t5EursXRp38CHnfq6whyuxUDMvPvm",
  "key17": "4hQve1McALCAMqSE1mmKF77J1uvemQ5Wz5MVstvtxnxuLxdFnXVbNwDJo5XLNhKvhETuRwsWzhqyU2DHZBZAVNrG",
  "key18": "5zzZu9WZ65waipjarvFcrSKiPK7XoDcWNkdBX13ppKwq4geiv5YHBDP858Krh2UqnkiFNbk2QQj4ZmC5W29EiDPP",
  "key19": "4Hvyc3GzY5p7oA3TaTqxwoHpDtnBzJRfzFCHu7JVL2r8xVTCWZ17J5xZiSE3BZsiQA6V3f2FMHCfCpKFTJviB78C",
  "key20": "4nGSvGKizKR5kGqff6SQqe4kaQnVAfLpFHxYhzjkC7YcTvp4Azi2Hu3TKRK36JHhawh9sRqGo7nNcgwgERycAx5e",
  "key21": "4PBZ9PK74xsUEU3w8iKNKkrXNtei6BWTuYvEFsccPnFvTKc3jJ1JyJgXbc6BaY9BdfqkrTDThXTEk63941zAmrsr",
  "key22": "2L3WkR8irLbKuzgF4FXFyc3RUH1wmMuTSwxBGkVgkkfcfqaXETtyriQkHdzxoYydhaZcTF2b8SZLh6Axzw5hsdD9",
  "key23": "5ZD3qvVwCqQNn6LQBy2nsp3DczW6z12VbwRLGKyCpvxtx1hJEnRL9eehq7V19bn6UTMay5rhYcHgJagJUq67hPcC",
  "key24": "H4qYJCt9Wf5QTrdjh6A9SiqVg9kDLSd6DtSwtYRPoCR5oDMnT7atPJFBRJWVpmGnZG6gvXXcjCpc2aDhB1Z9CX4",
  "key25": "4A9nfj4JtRZB6jfjKdqTywP9ejTq2vo5wYd69bZLgmVEEpwfrschDvJwm7YdEV6UAaKjAcK2eA2Ro3hvohXkQE74",
  "key26": "5VNd4XLiiP5ECqof1mzuyaipcL5TwLxfqe2yzqgiaWUbQq4sZtpNHkzsxTBayknT6gLM4ykAA2KCwTnPjfxyaSAK",
  "key27": "36m3USDXXNTYT12X2bcVc1WjnEEqTqZqo7nC1vA5tqBEDNNYVSrScVdpVhLdWwbB9dzCM2yuKVRGgvupiFfQduZe",
  "key28": "5BtTznPL6kxWAZsk3epbXG2WRNPqxiYfDr798QfYhvywesiMhxzyEwQ5mxcx917p5BcQyrLuUDtc1ezTGj8gzE69",
  "key29": "cF83jWTdRUQMoBo77bbq9yF1HYzxJELYDKEkdN7rQUgceMh3B7rUXKHV9EkwRR1C3LxfjQZTEGHDuM4NNwW1tvx",
  "key30": "aPppi3x6L89jbmd1DS4adzDhreKooQTVgAWuvZwde2duDhZtuFpZ2hXGjJgyua8rRRcG8DcZqVFM2GMADsxtPm7",
  "key31": "aA7LNq9JdRcosjWVRStzXCycB9s66V5JayZ82X8WwqePf8TLHJy8JfWBwhUJjQknZfQF9HYUZNreSHKWRjUFUrV",
  "key32": "42Xy9y4VJofSpuoTmeZc2cdzvN9kz3v6cNJEg7nrvnszjnzzi3PwnNqHAvFn2dDeM6NT2nPbRK5ZZpFmmkeE1aK2",
  "key33": "31sReK6gkNgqVVLS4H98VkM99E61bKWhqhYX57H587Q2akVb4vkpqwjXAzUZHCPVY2bhqVtwUgEfAeb5GPz3vhAf",
  "key34": "51wgmDRL63incJPK1kPfjCAbwf2numsFY4kv2T9fJ37zxHyCkuKsgYcSc4MGSJmv1Vsht8rhGBzAsFppVdWNtMES",
  "key35": "2pHWj9Da1tbXqprCm6FNZbHgQefJXSMBSqk61sHwqH3DZgy7U5aGqcxZkhA9q7z4AANEUM7hsSP6nb2CcziZVbfY",
  "key36": "2eYExt5rnSFVALy8V1itXr9aPzJuxP5xjPWG1c3w9i4JnijhQVLM7APGitM9XVCkEuJrfYCosUfXRczKvjaexUge",
  "key37": "3u9WZ9iuHr3QD8PsiFfpgjuaGbsf62MTVJFNVhc7d55zVAzqLpRPNtkQ5GaCPaZstnqACSGtBdHUuMzSCgC5NVXj",
  "key38": "DRR95oodUhMy9pC1ZZ4ruKpj6t7fTr1ymFHQKUVMJip6QAc4dgjpjc9oHR2ZfY3fhzVJX19xNWQ52DZCKQq95NL",
  "key39": "33PftgdJ2vg8U2eXwBpzPd8kAPE1Azo1VbM3KFmMkemEKXPgASaSmzaedJKrMexysFEtRZ5LLi9MjrRQ8Z7j1Udh",
  "key40": "5GzCyFGxtnZW3HCtGwzhVN3wNs9Ry6nicUGoorawsUTBL8buTS6c7FNWN7qPjrX6rwvdpgjrDviCe9oyRAJx3jSS",
  "key41": "3TCRt1nMbGDoHSG6ZNF6aXx3QRYcj5J7AtcMx2NxaW73XVQKCZ8ojKYXcPZMuyHMHSm6gy6domgVzuDhhh6cPfst",
  "key42": "5zenRzHpQpUQff654JiYjDUo9ukXUcJ27Bcwy6PGx4G3koEjVVGYDUVgAF4u1H7RooTfTpe1SMVjqjqDAP4gR25a",
  "key43": "3TuZQrL7iBq7psu6CB6HePahRHpcd5j785TQi1D8rH3iWrWMPBUwsv1ZsbhkKqvvshJPAFfh74moBQKqF1t1Rw2V"
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
