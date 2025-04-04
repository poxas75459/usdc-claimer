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
    "2scjgsqsBraCy1MH1vK2qJo9cXi32teukdAyrWBivpo66buf3yVtHxD9SSMayxit7EyZTzK98U8upnNfYUzzUWtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QXsBySuFkBqVsNQuZ3RWueqxXRWiJnjdqkPx6QqCW1skQhxJEGQBZN54qZ6KxGEUMfhn8StFS7wVwF7PWHBhPV4",
  "key1": "2avpHTxbRMaAD7qaLLcur3pwv6TMdfRc2iyVTdMekMp5ynkNyVEbD2DeTcW9q7tzpL6y6oWEy4YLTa2M4Txf9UUr",
  "key2": "2w2iqHDFQa4V896afbQiXNYKbYk8xQtEGYEy3zW5J3d4Kf78oMVCooo6EjX9dHvGKXRsRiaWEuyeSZjBdAPudxYm",
  "key3": "2ucpJoZ7zjj5X6vxYz6axbfuU5NwUEpMQUzcU12u5KXCBNqTft4DqiEtzd9kJgMuk3ytHavBhKJVrCwbf2krC4t7",
  "key4": "3MxxgJ9VKwTTHxnrNTXCxcW3Tmmh5Ka3xsRAxFEPTdDmvHpXqH1WwmoqxSkP2mqP5wEuNHEQnLf24brd5mRTcdfR",
  "key5": "5hHiuDUvCfK3AJoVZ1GngrTc1V7VzxebxsKwTSjk7MVprz9FZWnRc13STiZfS8EJqtiSrKofG6twzCbF6SDjKTHL",
  "key6": "5vUmYasEuodgm2CVQrcqjyQatQ3GAZAYRGxqazondh1Ck8cLt2st5ZKhN5CDQ7QpRrfw9hQn8beQGw35sacBJiBi",
  "key7": "6PQuyiWquvHwxyyjiKFGqmFVADJW4ybtif8kfC1iM9ZcfBWX1kd8DGkiYJ8LSRvdf6NmDmMUy8QSAPtD58E343G",
  "key8": "4An1tiJhRsq5UaKfRk9UHo7AMu6YY3CKmk6ewbMKVFNC298HFRkLH4dHFomfUXEQmVZTiu1fsYpMfoi46zynGiL6",
  "key9": "dJ38pEjMu8LZdBepVu2uNnxXpuXQPzHoBGLBQggtrJZegT3YgpxjaXh4CehPQBPeaHRZLdgwkKi9ihchYZek49U",
  "key10": "gVN1MCdnkPFPvGQ1WMfAhgwvAXzMf1qECAaW5N4LN1WNHr7Ps1qnYWAg4gjGC1GMausPSz789mFp7KsgkG2eT7F",
  "key11": "2bX2mKzUMwdpouF2EaSEp1rusH6AK7vdCViseMajCLLhRZ2JejzisaGC5Qk7W3HwUdDNmz38iN4647WQpkH4eDPZ",
  "key12": "4QgzXtaLSDLTvfSFkgWadwj3GfougTmxJZ7YJiZNsFUEp45TasNC53kBiYb8XfCbDVxYtNYdcc7GNuJSeDPfKAvh",
  "key13": "2pokjYZDe3YwS15QHGXrrAPkb26cE4hChiCRT4hG7NSGBeM8CXJq96PLRieN3VAhXDX3MggFWTxCUR18TUbfx3Zg",
  "key14": "2tY7vud783ux1T3jdNu6bjFiJYcxdJtfRx5ocPdnGnwZwjDMF3vEVotKSGoE2y5H9YticpzaPqxCtbmXQcW3rxJq",
  "key15": "3vxWJcafYXDTq53krKAuxZfaqUkJ3PvYiKdhBFwjfKV23bhu289SW7Uo5LLKtgJtQNfQawbWz56MtCH1iKzcfDwD",
  "key16": "jcmmGryQieccnpzesV6c18QdPrkKJiNSDysrXYtyASKeySFoKVLYAFPczNZVxLS6HXP346SNJ3QxtFu38kKmVNk",
  "key17": "5TTa1DzejPAu427Xq4igS5nFeMmRRu3rTVjkdnBTFtWgVXkLFfNfWufui3akFZBntipM27YR5GHPbqdjqnYxF5Yx",
  "key18": "4GVLQQiAZEix5FTPtBsMD1tk9KBdNf7gqzPzEX3studHDK1ZdZH8kafgekgYwT4pRqxvFupotT9KHnvohgoE1kvp",
  "key19": "547SfRi6Rat5Wt1ESomhEXvDkLTC5ksSX4bznUtYavW9UD32ggPyYzENDbRasrDUbhUm5TbsgXGL1q65tiGNYBmu",
  "key20": "5uN7TqsT2ud9LD1vFfPvVdgcXoAhVzCZgmRRbsMdeXANG3nxZUvikXj11dG9wEy2qnLmcuY1RGzeY8nfYGCdaCAe",
  "key21": "QErh2GYj7cn6fKhi8zQHtGHUgxRG2TpRN3q6kpta7rXierJSAhNxyLcaJ7hoEXmebtm7fyW6PwStPcfttTzcPpn",
  "key22": "3jLoM2z6zABAzMn3nPPC2xeLerJrPhQhLgDawgrdaYFnRRy8Eb1SRNT71HupWZ4ppWpvqQETbWBbHfLaXbD9dUic",
  "key23": "55X1bwhRiN6Jb8BUeLUTjT545Afz4mHCrh178GoTn4z5F6KvNEkqSdpd3bw5g1a7nks1P2fomiGa6D5tzxVuyJBn",
  "key24": "rqPkmVbXV4qsYJb8upFVqbf5euMgA4ytvtGN8jrBj5o9TU3ZVaQSGqrD4xypuThf7jRonzQXpvvjdzjVVJ9y3r8",
  "key25": "4a5qAubABrD6zawqdwyo4aXpWnuMFJ22ws2Ak4v4Xk56NGMY636oXFkxRKaqjTn542kw3fsJHLPjyEMa77LPoNp1",
  "key26": "3HojbuB1y4YkKjPpTAfmPW6HHDT2XiBPJv1wY6uyW3z1gCJQqv8sxwmbojy2DS6Cx7pxfYwbyiw3ueF6hFgEdaPY",
  "key27": "48UfcQE8pU6i7BXzzuGsD4M9cXMcThgthWDZPi3uizyFTn5v9xXYWBeHWHzHZY8SiVP5NVhWAi3SyQyeJZnoyNno",
  "key28": "4BBv711F7bH8znhDoQpEdeC3Bqj5FYfWyFagY3THg2DBSMLYNQrnZxf2YSYURVByPRKseDLZXf6yhZLrSZinX1J5",
  "key29": "4UCtM89CqNmVamp4ptC28qh8cx3qqSHMxM7w1zEuibDgihDjknpLPkHLLz1yF61wkWTQWk6i3HW7i4VBEwbLVbep",
  "key30": "4TsUy2eDyGCaZBemKGwP9YpWWtufFuSVesKrMgUnC8xiKBdqhCQLsD2ukN4iiMGivXaSVK8p9f1TWZH4AT41UgMS",
  "key31": "4a4F8XQHjt5w5UFx5Pwn2W46Kn2fTerx3gSSCvxfaQFfxkctLXFPF6aJUHJjQJ13mPDihq59WeDWEakUWsc4FbTW",
  "key32": "F8KdFLaVcFb4pV1xFprD3XejDMXyF7oJYm4ZjvkfHZmGQ4HxJiRLTHRMbwJ8qGhzZxhGFjFh5sxoL2eXGH5S2rB",
  "key33": "3Z9eqbzm1PVGPrBHVkwurwbfJsvPLUb8c7TUmsBF4h6gmaaHgi2PQtNmJs3W1FRpg2MS8iPfydjmY8FVgv17fcXa",
  "key34": "7zkR3wjQmdRx5UU5nMzgdsPRVNhgWwu3Qk7hUBoTfQPbmek6wT9k7DM7idgR4HoVoP1pmqbNR9WsLqfEaR8ox5o",
  "key35": "5cp5F35scTwMEZtc2hHLHSkCePpF5ajZsHYteNjg6cUqM3RxtXVg4Dc1zy8xN1KEnVKaEx9fpJYorjyGer5UuugY",
  "key36": "3VR6JrHgbfJBq9iiPZrEE715dtqS7KWHmSv1wKFjk58hHs1oZtu1Qcu6vSf46RQEkeMcXbPzfmU8UJurcnBs1xqr",
  "key37": "32VuBcNnKjEbkEdhGqiN26f6FfkN9jeU6AZEknDNsBN4VJ4iAAmTwfcmwBA8fPX92r1QLaXAwNW4wBndaQrRToFd",
  "key38": "2oKGTd2b7ce3hzqxmdQwH2iTFdK51uZwvpRVBWQ7d5jhLrrQ2EtZdukYCfA7W5gYNoTrVSJwruh2ikNHiMss65sF",
  "key39": "3SUU6H9Gs1RLKT5bzU1Df51DM4oqz6e34eQ4zWLcAVFeTceaJGPUtDDkspWR29hpSCC1h8gkffQFvv35Kuqij1AM"
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
