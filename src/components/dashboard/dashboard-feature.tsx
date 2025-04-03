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
    "2PJTRMkr7KGbGm1ZmFVghVM2tn27KVWPaZwFTb4V4pJnuECru1ivjgQkkdnJNLcKrAqfsUXx5yzuE7R2FJmG3v9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MMP8uVHvHbmq94rQBwv62cz1a1p56AbZfgx6ojdReWyQWL9EdrpjCe2rLifx7J9DTKcV6MKRoTGqj6uHAYteiqx",
  "key1": "3r1CnKPRe7WwSxTPDccrmM9xoXZmz72t8XY649EvttGZYeh81qeyApaZXowuVSWyc6sVjc2o8QRnRzUDXSYkhu28",
  "key2": "3XYKJqzRTUT71rzeqvH9f4eLpZu1xFms5aNiibrc987Kvwht4htayn7D7eSpfbJXuEq7eWndT9HUgbD3bCw3s27m",
  "key3": "3Dif5yiVGaPSqCtnbuTAWTB94ywYqAHFjRphwYu5PVmZbJiUohsHRGgjAT72fALZXBsFNGDJ9TBi7mGAuHdURr43",
  "key4": "5CQDeX4v2E6uqfHengdWK7abaj63mBG259eiy7QpH1g9hiRq9tvtBZLKniP74R8eLxpU1ZbaPKK21wQsnWZSc2Qo",
  "key5": "5xZSx8NVKGpsPt4boGoFLvw3U1tHQRZoLMqQ7RgoEjBWDySdqPyxjbKpZSpXdyqob9avgZLgTnfLFGjfC3vu3D3h",
  "key6": "4dTJFuMtFTvpFjLrFwVrghUkkgb7bzS93XM3oywR6FLmjC3PwoviwsYhGSGcs7oxCrXRi6r1GZ3krdRj1jbAU5er",
  "key7": "3XVPkZfuvUddfNgQjZu7toH8psdLasfhBTRfxe9cEfWyBXFSKjyQv7hr4kk2VipLyyJC3PFmieFDqVzSPyv1W7Qp",
  "key8": "3rSEa4EVivfXDNrKzaDGBvNLqMLAnenZtSPqt8a5HnY9TeQRHvFhNHmGwC8PRZVt5tvQ1ddmnVzzMC4ZtBKCYgG2",
  "key9": "x8BaZJFMMRjRgnFTti37WndMknbcZYsRHAAkxypnLGr8exq66aizPFxVtRHkzPyc8UYJKDk7Wkhz2pqMdvsRPtX",
  "key10": "2TZGCAw93nUYYn3hobzuzRYAHpr8ZqEcbPLQo2RG99RuXvV4qRDnmFdrQQxXmmZ4RhLB5uthRJUTRQbKKntTPRXf",
  "key11": "3A8izsxypnYepwNFNFZ5hf5MQyi9YZQAYbMMSR4dRsQAKu5CnDiiU9HGqBddRs6CpQZrkNo5Taeq2W9dAWmMKBoZ",
  "key12": "7RmfMybuiEhYzRgQF4bRcDinpg2p7zFaacXFiXBeUEFZUEUhAwRGySqkCeurF8HvGSTp6ycHcaxBE7VjhEFPcMA",
  "key13": "3peQYquCd6DMsyPf1qMAcYwWzY3v5h2kbkBADMj84wYainSPF3VpMTw7qLkL6aWcsJwA9wSuGcGdSY4uCfdM3LUA",
  "key14": "3SJpowX5SLanSxKWbUo4gzyx9wcDCDSVLa7Z26mhcFoau7H98C33JyUtLzGbS7odz3U6pyjJRgdV6t7pwYAmrnsq",
  "key15": "2j9nY4Y1K2zsgfa3kM6HQiWHYSjdqnj22KxnU4jcm3huXdkn8MTVxvoKqMBC2MAFgiuV2ZkFLnFoBU6j1zZz5vTP",
  "key16": "3TyTLSjUbs6mi7hRYQWErm1veL3vhX1P4ZYw4qu9JaqXiB44RA4kgekCxUR6y7rGe2qMv1jjPfVNCJG4d4sy9n1K",
  "key17": "2kXbNP82y8KT9P3uSt73Dt47BrAjCnm4pSQcNkR1EhkrnrtqwKHqvSzJwD1CsAxZE1ce314Fvv6htSgxFKWSeewR",
  "key18": "42zq9Cpti38NupMDwPkoAzZK5pSm5GH97YErk73WJ2osKr9ZskWWkAqnyDR8frZeEJEv75Q9a9aoA8KurnsFstQi",
  "key19": "3o4Wu5hDAFJ1rMTX9cqDisrz69jMR9Cgn1VzpWYUYxRgjwDK8aBewvadEruqZH6bwawCja8aXAxHUwpexcitSv7s",
  "key20": "4p3GLJVfUU5FGUnAQt9ekFuvWF7JWqRgH4gjPBPPbMKLDDU5Qc3wn7MKKjRH3J53AKcvpTP3u2twa4oLHdThb9CH",
  "key21": "3cmvs9cVjVnxS57SosPx87KBuuEx9knrBYDkUnGjD1pCoKtAuwPFJeibr5WUuzg5bttZ1PhoLQgPTJGMw3qBdiS3",
  "key22": "4xv9UH69oz4uMfexxsLckWYute45hbZiMaNYTNCugB7xE7HHzM5c4QYZnhoUVYSLBk1kMPEovonNbNUp2pMhHNfo",
  "key23": "2HQV5Rhb9UbnaWYCZxhCRnZzkgtCWW68JMos1EfBF177byHZmVurArC89aPxwtzbLLWHnhy7bdeEUXND7Uv2X1Dj",
  "key24": "2txrLJET1Ha4tG6uLKfNnwMMVn5famtqknxCNPfZJ2JGn3HLao5Umf5k3pY57wv9RgqEx7XVJWUCAxhzntT8jGAB",
  "key25": "2BAMpmuCXK7A9nZz9uDi9GkqpeQngLWdrH9Z5QqqHT14WiKKhG5zw6Lho8wzSSRZFUMYKWiUwrVZhpMPGka4ErLJ",
  "key26": "557vK3QmcddVqsQPKQTzRvLdri9c37TbDE4R7E5a3Yq2c1suiY8BhoYr1ydKvNBBtbfETmMQqnMmBLujG3dC75Qx",
  "key27": "3dVw2CTP57LqXEzQrTg6B3Q7AeTm5Bb1aeetHEWoEAXSGavgcEHGvNZRLXBtR773SFiDTssBCrwgEuhVhvqAcC6R",
  "key28": "4MmM6Anu6KVtMURQMDC53F3qF3rMomqR9BqVUBJeQLmLGQexDfA68ttkjoyhmfuASFBAbv3pcUQ9oDjZ54UubYgF",
  "key29": "5TXBsqtdePxYHundkPpQGgDGLH3nwtWQay4XyHZjAm3Q4YjgzSfRPA7DtPdw1AqnmbYNca2MQc5jMKo8twLviRYt",
  "key30": "Fwa7zGEnHjE6WYBsPnKwUGKCEwXXEf4BY4iCZw6t6U15i6ZfqesAW3TFAQ5CPeWayxstDqD1GA3J73sm95ZvExA",
  "key31": "5y2SLZBuMh4qVPirALY6zp9c3oZPbkZcjRgrqmoajMzPiYU8TPkhTi2UsSWywG7BBjrDgYyStYtHvZhFhxuozTcz",
  "key32": "4giwAukvrRHPKg3SEs3ftCnF2oUoaewEkX8s93JR7iqn7CxWyGAuCxnT5baxx2nXw4DZaKJjnT77Y4UCBpTUNpJv",
  "key33": "4phuNny6zA9nhm4UFhsiY3MmpEpugvvQ5bToGaHQUmwfqBt4oGr3kACZTtRQRkTTuAu7QZXwM54Rp8XWWfJYBjTh",
  "key34": "2sPVax3R8bTx3Vs3hhn9MawbckJFYgkqB1yxuLV4y2WDAVX6HexzWmomAEbXGqvJMr33V3pDdhKRRkrqq92D11ir"
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
