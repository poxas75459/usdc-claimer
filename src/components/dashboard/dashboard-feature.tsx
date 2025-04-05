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
    "5vPbkJ6idrxN3B7wg2cqTQH4hK1dyHhAboK5BHB5XFVHsbgp4CrtV45Fp1dFcWow5KSBy7ouJuBtpCG8mcLFoc2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gbkGcVFfF5wzjiBPuXgEZJ6egFUBvH4PbMF4ueXehGUEVA5KWTZU94HYZg6iSn3tY344heBbXwmtUaudoZEhoTv",
  "key1": "4ie5DWR8ZXwHJsAKEaCF5S8H8YSW5y3q68gsKLhRjML9wDqFAw4vWdpUXKTovrBm22xZvtRyzP8GEJEqTYKdECG2",
  "key2": "2EezQ4PKeDXscyZYnCZqUiAhDVGepLQ7hvxMFT6rL2nsSL3o4MBppmn9NqiNAJTvMb2aaKCzVu6comixNDG1QyKj",
  "key3": "CE4XhJbtZ4WgeuGzkopgo6ga2wcqcUFyS2HkCYa7HzaKyo5xfDqTgmqfgxMUzGf5bM9EdKc5CH5xDtNGMRz9tXD",
  "key4": "5ivXqaXMZmB3VANwtbmueidXacKfWeG2uzUYZpbX9357KdxnvzgfsgqqGKspm5KLqzgxLxTXD6nMZkYF2eXVqLTG",
  "key5": "1274b7uyajQMv6ZvopeZHEoC8jcUFPv5k1mKm2d4rvad9cMoxVF3RUvGQTaXjK7nv9MKzQarYt1XJinePLJ6TNNJ",
  "key6": "3eZAUY56G88FjLSB2umK7q3HKkqKw9PqoQyWizy1qffVfYa2STX3RchPZeAKHzX51Wedqh4c7HrxVwAnzuNqPQhm",
  "key7": "3oqREdnXBt4gNZL9ZmbQvMtHq3c9NfkrmUC5wXMCvqzbiAAYLeguKjAVR4UUWRE1k8q5CtAE7W2LL9anRHKZKoJE",
  "key8": "reQkXxVFyW6SpKhZh6Ya4Q2NExJPNzwE6oKtxaQcA5UYSV9SwDBNKNaieejYJmdDxiYe3k1ohJCAUZCJGxgz9zf",
  "key9": "2Mz9wZt9sbFhAtb8DgJz9kTJacEiWXdUMnRTCtS9P9d8ym8JqNhvJAX3JWBC7Fsx4sMYN2KF6HvNBzZLDnibEEuo",
  "key10": "2QfZ17ryS5Rr14XnmtfB2j3CKhEs7dto1KSNcUnAYGZtGc3sg3VUK99NLej9DkVWD73PVGTzmeVudvkXmGQHcETh",
  "key11": "39B2QmLVg7FqfqD2SZLydM1UDjBwVRkz3Kmti3c2kE4eUomkFtZPgCQY86EX9bLvkhUxJTmVPacUnZ93UcBLPbeh",
  "key12": "FJmvq5D4m2aGt5TWXb2u434GY1zuEwHS5KnhqtJzcfAvubfpQvKV5DzPP6yN6oopMF1VCAf2Ype1y4FzMCgjuMz",
  "key13": "4j1Pp7RPfboiNz4b2qXFfbHVvozw14NMMLnJM6Wxj4M1itYTYVEtToFyygMw16x1p6NcJkZLHQuszrZNFtgusJFd",
  "key14": "XEus6sGj9dvEKa3nZVxNvNocEnVT2tanfkAyCeQfU7Pn45tbwqjZQJcUXpe6p7eLjkVmDDkfbJLMR21Z9iiSZxB",
  "key15": "2rC2nmRm3j15hBUcZ8MmfmpqFbxvip98W9PfXPmKd24vgufcvPi7oLhwVzygUpcfsCZTmouYVYy2UsDHGintTR3G",
  "key16": "3Zx6nBckDf63ku6ZJXtD4DBq3946BE2vixfKHC8XNr7T8gXRWbVw8VWvhWYMfF4UFdk45WJYa8pcKEWqLdsoExDY",
  "key17": "3PDv2pLoh3QEWGkc4vT1j3mH8mRqxpzLehobMmweNpYM2pLA9FNfmuhPW8pEeCAs1ieRnEd6u81h13zpsYR3bfsW",
  "key18": "3e934xuHdMeHV9Bg2UCupENmJhgHoZLkiW3HMxtzhN9tTt84z1tS1UmV7cbF631gQ3PTh5qmsmboR52FZ6nXQYQJ",
  "key19": "5foSxKikZBRiymBuWQay2TyD9qDbLQsiMbEoyvbrUxqbnj8fdrjnG5kcgM7LVBYJVhHhV4SHHQH5mAwYoPm6Nhy2",
  "key20": "2FyxVK2pUvip6bdu4mudWjfPoiJRNNP1RJE3aN96okCVMxFgYpqdfFg7DoUXztx3rHL36RkaLHsf9ffHUD6U5RP6",
  "key21": "5SKTSyLwX6REGykJ3pgBfNpLQTiMSGtyrBihhSNtZrhiyQwZKc3Jsm7UBzZnFKtavrGkNEMeXaUpoTsWg1UPKsvv",
  "key22": "3kWrF1uU1iUMSmnaphByhHMQqo4KEfdGWQkd1obeabYRrc1b1zZ9JEp2cFA6WwMqryxK5EZHUajUCy5uxFdho7Gp",
  "key23": "5o4wtVLVGfpQ2okviNfCHx6h2QeKWxuuZ682Hioydgb1SUdkex7RGtnj12ALn2fb6wvbZgdM64q2mWki76Poy7cr",
  "key24": "86fPpLN1vc6H6QGUzHoBc3b7HGf3edMXDRN1VkvDsZ5UudP2BjzMnn3KraMxk4xt6WRXrZxQvfD7GUxVjsRrrtp",
  "key25": "U9Hn9a21wvryE1D1oVF87Qo1QksqkvYYd89dzBLKagXk6exq2tm7mb2d1j9L3g5FtRgVizGjC1NKsxvjqwJTrMC",
  "key26": "2rvGkRTFXJKvdNBzKd6tDtj7tTBdz9vGVeTDszzS2UbxmcJgagscBnCPBG4AdZKhGEkQsNjoHZpdyXJkAR6hRDnP",
  "key27": "4xueZ4dEiEsqK5246eUNZqfa7ZESMT4ZmX4CajDMnZrhCSHCsifiqWX4hghaty5ECJiZ8MiPuBSiWQoajqKgfC1e",
  "key28": "5yYBzZpnCkCmfJWatqrJrSdKkTRM4mcNCuNvSHj27k8qcNrGEgPDp4KREmWH6oL9EJJvabo938Qz64cPcdccBdp",
  "key29": "5Y9kCVgFxHShZWuZLqnrPNGBzxPNTgkAoVWZBW7GgshAVjjpUyECNbrbZbCiMXppNM8ahvSK2z9rauTQPa7LWWEH",
  "key30": "5eF8NPwRnwmUnpELggmw1DtWVV6XaVwVK5WNoMA1M7WctnrG5bZMY19uQ35qFKx52DabtYBKHYAEiPCxxoFrw85N",
  "key31": "4AoYwcGYUKvxkY6gnj4eSu1BWt5ajbZrN77J9E4ydVaXKUeLx8pmdqUedv57LbSzrqWxAKVasWnfjVcaipgFZL9G",
  "key32": "4on6b9YKxkj4CuuFQ1ktdSvn57YoKymrgFbTboPFCHPpxdNvnJUwcVVSuQ4Y58cPKVLqrChHhvNqYuNh3XCsZKhG"
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
