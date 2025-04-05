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
    "2VQ38b6WNrvzAuo8Q5h8eNjCD2RpkGScE7ye1sYkszxrTFoT6rBB77fvYVEF3zThZYQyCK4kmzCzQQQTg9Ku8Zt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41HvK49Eer9qiMTVHvCnCF2Nx4G8o2pkPCMQSzE2Pg41jrY8x2HqGAKCKzq2NcB3RhRv51uAMAGeQ3hte5oU7d13",
  "key1": "4WiTRi26a1AmvwjWwThnZRekhufJyCXp1KZfReL3HkMzRHZXwpR5pbW5k6KMiWNr8FwFoy8GBPr2k8UfJGVGpktR",
  "key2": "61QepZySdndfKw9oT6bJf87ZwNz566UcRsRirP2vYzE99zqUvAJDGeRqC6S6ZD4Q2CG5yu8GG6gk2dV2bg75f64n",
  "key3": "381bh3Z1iYcwPzW3jsfkdTeWP5JG2bTYb5SeJ7CtpeJcxybQTw8mbTsUoRymfqUZGZyYSXyQmNZDfCQJS5TaKzyL",
  "key4": "3FbFf2RBrzezNqivf8D2ryieMSW5HCST157M1eb1JW5W3mG5khm5tJmhALAV7WruMYRs9n8gPraoR4zQVtBn7nPm",
  "key5": "2hdk2kXhgcdahtt3sfKAGoXawEgnaH9XoUSeJ4kTMPR3MhWRbWDU37udsaqJ8Kth2E6ZMR69qtHuh21znNeeH4JC",
  "key6": "4xy5ymo9hftNWcRe4MsrAvkfFHHZBsGE5wj6oB9sqPSNMx4KYkRVrXMigmk6eKCZbqUxqJ7hWMEj2omAT4BkTsBz",
  "key7": "3PSNVDTCysMR9h8HcBbRkMbWgpVAgphAr5MAFhdw8AD3R7ToQMwqzkSEPXM5oC7yv4JLSAjHE7GzuGAouQrCwK7j",
  "key8": "2fktKWa14VcvhwERapHo9evwdXroNRa2h72St8qUTSDvq41LJhRsgw8p3mvsKSRxGk8ddVgcHsqsUNuPKTjWZjzQ",
  "key9": "p5nrukHoH5oV9ga7Vao9PgCriCahsGyDJatzJwwuTUFcL1Q37HRvwMrFytB9ztauzxxG3Vydw3RMe9pKEN7GtDe",
  "key10": "kvfFbFiB5LgY1BJQxzoHThUwhcsPSTB4icTRu9rpZ8HGxkP5BMmEjgnPXdw2Kx3VQsyNxCH2syLh5P9mS2uCno8",
  "key11": "3VUJzdRS6kYc5LKZhHYvJtsYoXeDyGoCYL2C24AV47j7B2G6ySELa3ua3peNeKKHT6Btrdz4VKaum5HHQnbW8hrH",
  "key12": "u6VY9TpzeQZbKXhf4DnyWhSTThtuFvDiqHxULUhCmsyc5n6Sjf7UygjhFvziwKCBE3uzmnGVEmkScdunGmJWvD9",
  "key13": "3E1VUrsTAm4cJiEYtJQm33ViE5YLTgUpxpjkksceQr9v8kxhE8NdqB3TPGn9aUW3694xkgs4EufEYEqYgrmB1iSQ",
  "key14": "WCKt3LGQpceVmjwUbdY1q28facJKAWhjooescnoTTspCHAc57xawcAwTC8p2CL4gRYCz3tRkzAPS1RCJg8vYtxu",
  "key15": "4tbNgg5oqEBAN64Q8723YSQmtk81Ei6UvR126aYSGBR8BqgCTtn7oC23kuQ3hy5yaZvMj14EDKUzKWx71FqxwVaz",
  "key16": "AV7ibdp9KeFHCK56aBWYks7uQMef7UGR15AhB3quMiacagHepQPi9U6arp4TsX9nx5a7AcFs2rD29oCRyJCd4ZG",
  "key17": "3msuSpyihiB8u2D9tvYJirEArFRccW2utrybt4qkmFWBMtt3k1JBNToxwYuWr1QU4oBEtwQEVTh2PyFLeDEb5xoA",
  "key18": "5BGNtSNg1p6VhKvDnqoEZbKYgnub63n4jKHJ9L3n1JY1mGvM1cP2yBjW4F7MjzKSvu7kpTpmNKTuu4swphkjcTQR",
  "key19": "1WkeF6qsbYbC5MYMeDrfKF4vZ9uUn8xsKSNvDiJif4X2iRzRYEPppJ1RdTrDpdfjMJF4ZdM8GpobRSipXKjXEpD",
  "key20": "4gzRgcbg6cxYpVcPzxJmuMBQxgVQZSKwHb5srbuvvwE87MJAjRy5REJ8mPj4yykrmmiGEfA6Mn2SXmcqXap4RPtu",
  "key21": "3ApQ3jy8si7tKh8MjTQ2f6kh19mUwHYkaqVHW2xTvLCWx2AnTsgzJLE7Dovjo85DQJ9u3WmMc5E1wz1JQP4288LK",
  "key22": "2uVTTnZNVUc9XMaJ6UM6EMq7qcKNXC72Yh7BuogGT6Q27s3tnHS1wiWJ8Mf5ur735kMH12CHNSVTzoHeXCwyE1EF",
  "key23": "4p63yi9ju1Vjc77EivKQFNZAm4bZ9MsnoXf6A8dap6NawP5cTHzQnVu7Mxyn9GRzEq1fLkTjC9UCJG6JBBCaZQF8",
  "key24": "ahSRx5h9XP3K3XkVmafcc6r7RB459sPzKzAFXvTiQUzCWX1rFKj2vnum7gemHyXj2xu5yvGT69B6U7zdyTNoU1Y",
  "key25": "2q9imqTDnRNL6Sw3Z1pXk1LsBoTP4r5XAo9SfENgh8L9yNBDy7ZYPFuqmafcSwKNYUUmfjYCTVyT3cKstDRj9Z9Z",
  "key26": "MEaPx9Ak3KpZb9jfxTnAgMQ1Qnsm6RDZT7f3UXjhrcL2vesohamP9iHa79W9Shvfx7YLyAv8J3uZYabnJjZkd9E",
  "key27": "2M6VtiuJxfBW7zcKYsMz9qcrfbnWN8tXGTnsASdALryf63ruTmUyooniNFhLG23cZv58KumvXW7m1F8o6Whvtc6x",
  "key28": "3WJ2QR4GwKWvH71qzZA4X7tdeeai9PMFWCYyz9bF7G2o3iGQud6oznZAZxe8GcKDSAL6uZSzsshgzEBackEHjLEh",
  "key29": "61MCVHymcHJP9uTNjbLrbKhVeDGcnLtk851WqQB3HzdQ4yrrYb967t6S9dRYqFXe6LNwCdvuAPPx9md2eomX9ikG",
  "key30": "ZJwripfzpCKm4ydpZh8zWohcxvVgMrot1enLC1UpJPo8kZdN1dmP3AF678fx7ovuXjQ4MEyY9wqYVgrf57V72D1",
  "key31": "WsX6QmaF5bSsvYTKBK2RzgcZD5G2VQg5Ru6e7cg1ciAeDnmirjc6hRMoERYiA5v6kw2V8hubCjV9fZauzp7n3zV",
  "key32": "4buUWo4CBgWDzf2cWEWG11YRY7g4uacryyubVhkXxXqXHuCyMnrEjJEaKHbLqP3qDhon5uKBsfptYE2BwRvk76eg",
  "key33": "61jxGB7t9WH6ScEh9ubFxL8ahrgSLnzxRFvMKbGZbnXKP2RJ6dSTrrWYBtYCQqhAknHTCh2TgiYU1iKzePuPJRGb",
  "key34": "59TzeSbGDoJd5h1JKWNu4Aywfwo7TzojH7qawrxTsGAgz8j9AXywyY4NV8R5WfGKQWiBffa1ijAjY38unf4tq12S",
  "key35": "NPohSGKQCZXy1dF5KwKWBTrEbYN7naNi7iLZuLpyQ9q7YzFJYo7Md6VnxUTYkf19tP56jqa7YcfzLWuDzqqPPbq",
  "key36": "424rDHFPjfyCnXv4ZtZnfdCmpuAtFGn8f9sd1xSprajrn61kv4fZ4yFLTaNbNBkE8qBykZAWqoZyHFsLzEb7Y5pe",
  "key37": "5BtEDQgr72ZovBh5uNYFs3aepgSA3bGn9owPgYfMRbN5E9JFz6ymq7jXUVKHdPP7dEovcpurmkdf3YYeT6UzZxtn",
  "key38": "4DtcBRz3eStAAHVTbqKnFYKVRnPAxPZY3vin9u3qFU5X7eRUjcBabBKpiNvNwi2AjxeJg2MwkXtpVhPZLmxCSi5x",
  "key39": "5CV8GadqbpU1C9VUu1TMaXbJE4ZKsTqHVnqpsRLqoXjuqK8uv3qjDVxTwKY3uzioJpiSyn2pGwinXH8Fv19RxAQH",
  "key40": "EDkWGiP4Q2gC93Cm4ojUfWeqCjhwdUj3pwbhxjLGVwYdefYTbqx5tbWyGQfmK1LBxvQ46PqFrMdtuz2qtrQkbUb",
  "key41": "4KsWkopAWFSjphKdgVg4kJqKX78EktFSWqtQZDTaPNXAjv77Nrr2wXeGocS6ewSjPPmnyob1yoBqbEP95rnfwWcm",
  "key42": "3iJZXwcWPeQjoG8Wfns82LJpYWjg8KzKyq6U9nDVR7TYLmpUHDiFbFDivrjwKsZmWicgJ8P6HKU4B8ahmC4ZTUZs",
  "key43": "s12xqvdYCMoJJfjZzqgcQmi3vurjRYSNaA72PxymbFZRfdtoch9wNLHSmLX3CQ6g7B5TsqzvBp8BdrPxJ2Xxd5T",
  "key44": "352mS4Lcaahgb4i5H25bu6XUdCqkF6rLe4pwQ4BQYuoutkfmF9CcEc9hE7s6hDnM3GcRfUSBcRhUqsLxTowXYjT9",
  "key45": "4fRozPoLZ71jY8bxUrBf9sZScseVLuc9hn24HEkKeezqPx4zRFgo15PsH2CAyowStsukVizeg5Ltb6VXf3Mp4QQY",
  "key46": "5KAMVx4typXh9FttRUAxNXQRayJjEyXHBBEKe95Z7cgssW4f8PRdfGpcznrqBe4fKUZUD2Qbfpb4V6rz3AW65m3M",
  "key47": "61fH58ae5YguZHnz1oTYpwk3d3WDuNeTrqvbDhcD7aG5VuDvp3SEawMC1pvUdBrvx79t3noTwtfkuBVLMhDA478D",
  "key48": "3NWRxVVkRYJQxo8zY2jo1ci71866FGo8aYHDLb8AxRwCB7fL1oB9Qb4sZx8nGPcew8jBizQyX8bNiQtByc96CxQ1",
  "key49": "YEeHroAJj2LTjc4whqPivpJvf9jsBFFn6Ny2jN8nrBRrQdVqz7dSGqfzVcUNWmgRXrTm9bqPvhXgJrXvViV5pV2"
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
