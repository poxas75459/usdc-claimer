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
    "3gNbcMQSSjzgL4xxmHXmsPMzyeoHQo6GYGvWVNuQZXZp3FSWo89qzKb5WxR23265UMaxqRCJjR2VxzQUiVjBXRNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6fYz9uCxHU3PbPwZUHNqVMJMyAy4GtywZtQayGWjGkFVb9LZmsNXTrFCt1TJFiHujgx3FUf5oWat9KBp7nRRAbD",
  "key1": "32zxpGjWRZQJhkad9nLsJhweyfm59Uo2QFgg3Jcan4fjLJR32tVR1U9icSo1kNXPH9khGpArHgyB9y9eBFDA6yK1",
  "key2": "35sFJyCjf2hrNHtz6awVFRuctDkBZa7wcYUdksFdrATxvySa5uJ4cBi1NtXMAvkAfu3YbFzhTaFjHHEzPbYTAtE7",
  "key3": "3xj3hQjz3jnhvsnEtHbY7zVppqcyDFRbsAKG7Vn9bW5L3kz7NEtMjBLTCaeQA5UWC28wGKGatxd9YqqVutj81UwL",
  "key4": "4dFFX7eSk6eDj3wwAZLoPPkHbkxW5t4fPHmCbizsJKRNbSHvtsf3SKs2fePfv6AjAWpVZyPY77yjuhCVo7m4GntR",
  "key5": "2j1QddF8YTbwVTe1kDP8NTXG751NAUwbpgGrjjwNPt18M6VaSWvmaeCSbWojyqd3FvaPT6CKRAjPGwEkwVnZz64U",
  "key6": "WnVKCNzCEGKoPM18MmZk6YKEweXRm1KKLNwLpGs9dPmBS31buufV9KtfakM4fsg6T5ZFminqudsq9WWhPrzXoKN",
  "key7": "3p3MbEFUDAzHT1wTuU6WWudVYfvRLu771eAdujA5x6x6uQHUdQsZaLrfEHAFDrNaYwcxZcGZdQv43cVuUQdbwGpc",
  "key8": "5nAzpv8tcYBZ6HQxXSojD7TpENCXxg2wXFVpeWzmw7TTiJGtgvcHWUUTY15LXpaJtEfNP47KAhfkZtzze5PPmUsd",
  "key9": "5Lx74iE6AmsQnEVEQtMxjsC7hWxt4tzWc4GGcCaBe1vxB7an8tGsTkpjVrDVUFz1KMUW94hA6ypfd1Dz2sBY6Kkm",
  "key10": "4ms9ST8xsxJJPbQc4XjmHbvEd9BAhst9MD1N6NG5P7bkJPCKvwgaihHaausxiNz7LuAHZRiCuLMeeAj1HADGc9aw",
  "key11": "4wyV4pTqQjgzDerXU9SRUDm4ZzDEoyTiAoEYdboW3rBXMdM3dyPFv657EpvanUByeGXdN7prm1xoFhuPV8194DEs",
  "key12": "5ScQeRZnumVw15MXd4zSShzTXzvFQpDqRk1istygpvh2HvvX5huQVqAmjxiLQYgwUBszyc94PDpMjSFz5zbpidB6",
  "key13": "GXbfnAyNWDmvzyKXo8cA6odSvpuMTb1urLtTBz6o3HQP17bo92MKnA7u1npbE4kez2vLvbyBGSjncVEoZZ4sqw3",
  "key14": "467FjrVSwCpmoWNv2vUUKHEfKY3VjYsY7qnfdwPaCrEwcVjJqsoSvvNptwTnmCN8seWA1q3cc8JXStR6yTk5Rzp",
  "key15": "jf8PNMEVZYFyV55rfGQcVBqwyhTf44JReGUxYt44GfmrzR5SJcmNf4yxDJmnrLfgeTBCW5cR98oZBAmF88VP4hn",
  "key16": "5JwLm35H5m1M7HuN1U7gSSfZuPzY8aZjeYZrpc5S6erWVrZwWUbg921ECSfuHqLSvQ64sm55uX7QreDVbsG1N9wz",
  "key17": "iA7tFEf8yVFz5WnQRzHcr1g4hS2P83qtDHFSgAfBDp6LNZeTHwo1GiaAD1CqFhrPE3jQNqjZtLqEuW4awno1boY",
  "key18": "581wvZuUjhWmQYkB4AdtNdxsnqCnUtk8yFPNRRBd11k2GTCQgPQFCVChmVS7XL7rFQKv65wszrVm4seZkSo6ydgW",
  "key19": "2GTi48qEP4cjowCckcuD9wonK23koHUTsTgTzssrWeos9KSDMDzLrTPphuvpy5PGakghN2xLjUPbs4A4bjvG9ACQ",
  "key20": "5nB2LA8x6WCXswe5qTsS5Dugq4s2GkjdKwTUAWDXeJ5CJhJvDDTBKqz4n2uSt7LpE2QKJgXohUZzrwkjgTduiiBu",
  "key21": "5oVwRXyjL55bsDCxnUvdw5wpR1qYkZrRDcaKpGpZYYnsBJ59gb6bhAhdU7Tm5Prf8XbQvRi8bCannYqrZGewJmYM",
  "key22": "5XLnVFNBRijYkfGJxNG1yhFo6n6scWb6tQYB2FvWGmvoocKVn7ExBCJyj8oYsCxh8JBmaACPqwLV8qQKwgWAWpa8",
  "key23": "4fgotZdsUB9p1JB4MJVcMkdPzksQ9kyvfvMTVvkLn2M6GZ4BpnFsN3rkrb7GSuZueEXGGaL4gzq116vw3TqXWj9B",
  "key24": "3vc2A5te9KyLk7oKvSKD7FH3MZNqCaVAqJN1aiaujBjC1GRNvaEus3F9UBnFqekpgZQpw75m1CGKwnLF9nHgRnt3",
  "key25": "5jBTdAeQHC7ay8tJU96nxFWPUaZGmXrdiqaiS5sqP58HspQ8AsSnmARv4eNyzdCMfzUzGi6Yi3rYzoWiSv3wxiah",
  "key26": "3eVRG2BR6suVmPwM9uZFn1LSbinYnfzDxeznWyk6mP7pV3fauqVUFMwUQJApviQqTjgdSAFcvZQGh5dnNH4DmESZ",
  "key27": "5pJUEa89Y91YDR7HWzHdhTEX7DDY4ZMXbuAzq98T5gX4UcFnRsQvN2wMqr7UnkPTmxfPKmVnbYMVouv9oqBKhx6g",
  "key28": "3Pjo8xqpPzBpmUzV8rAsGUcxcKZqDQi2S1t5Q9RM2HvACMYueZi1dRjLMiFrP13WzBwUm49zbpTmnMAtaaJGFaFu",
  "key29": "55ZWgYJrAw4FMjq17AEvk25D3QcFvjGLwNSn8zduAxupFJ6gAWBk2NeAXYY6e1AVotshuBudZSbnQhxQQCpY1qS",
  "key30": "2GnFE3Mg8bZWgd9F51F4yNvP9K2HoFYPXr8LVJu1Qr9Hbj8ufPyczzni97Dxwf36d2fHBK5qxrVXtrjN2HTRELqL",
  "key31": "2BB8VLxaCxQAC2HQPnmPFrGjMQRAr8WiE3K1J1mLTvXxMRVpSku35WEtPPLamxeufvUyBqM5AxtP8kTZREK59YkQ",
  "key32": "5goa5hGbZDW3R486v6EshyHSs2G1e6jgmAnQ7uKbNDcs3MgsE18ohBxdCV5ydmG6Fkt9f8e7yTnXnk7Mwuo358yA",
  "key33": "2QhVwn2yu389SxQyjBJP7ZscFNX2yVL9ysi24ujEHxc3NRhKQLywRkSV2tR7hn9i24avaAxt7f8u9q4D1zRQP76p",
  "key34": "2jV3tdA9d3biz6cZAP5uLwMxRdTydsNNYXt4H1tCLA7qoVgp4DJoGc7TANkd6ayrxu7Z7NRC57LtJF8smbiwu47q",
  "key35": "54WqiUsgMv2vgbBYJLgGKsJqNnznb8YMLAUoX9bSFAQUTSDbxLvoTNxxGoazfj51kAXuwmoYje8anztX5L5xtHQ9",
  "key36": "q964uATPfDobdibyE51bweYspdSHBATG14Vc4DcPyqNdJreVsH17nmxXsC1c2PD44WhGFq5SNN9DMRacKm6rozy",
  "key37": "2gU1Z8SY2myKETUEC9A3X7yViaPNDrmjLgDoxs5jo6jP3Qhdh87JX63qCGhx6AiqkYzUsGsZZhFeVtRhombxUNCc",
  "key38": "59Pend2mqZVZfJgFGebq63EJnZCpdYzu7fzJQqFuH9V3CAxg6ggnLAa1BusSK4xkDS1b6wzZ8oTS3uoGeYHd9Q5s"
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
