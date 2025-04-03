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
    "61Z3vZeyBEfTnrAsdGUT9pGtj6FdQAtaYj1k73EWHTFm3yUVRtccvKjRa2YDoub8LsYzLuuXN4wfTaq1ruAwmxNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Se7gF7v4UjRg5TbWHKQC8kH8Y5RVRkZCGxeWqf6PFzGh5bp3x6dRPaG28ECgc2eNdtS64fTgQNZCmG88jDCcsCM",
  "key1": "2b4a44Azc5Yv9ynDuynhLYrmpdfhjSddH72KYdZwcP8kreVwR4xoFtjjSpEpf5MjzTRvXh8c444LTCaN2dP9YCVk",
  "key2": "3BasPBc4GxhaQWP7M9N8WTn7euXNQTX6HStTeVpaFvYnrEH1LV9U9s3jason3N7fv9wZQyWR511ZcG5Bzwod5776",
  "key3": "5PJEachk1GjtbMjzBQDuzvx67WsoUgu3gdU1EUdvaAqqwNv7rjtioy5RvbjA8YuTRPr1GfTdqc61zoD5SQdx3upj",
  "key4": "5c2u3SdbVpMkFwWJ6BzhECHntBUjGz3tmUH8iac3d9z5yimeagczhUKSNbXpc3DJ95NbewUqfMGxg2wmmEepD83z",
  "key5": "oD3BGhbmWAEvDE7pHAptDmCyHnH8LZSzTGEN4E2aC1WT2cUG5fRMghdyyBdHnGBmEpVnCHbq8UfXTPNKEZ1vpEV",
  "key6": "2tJLKwJASqN2CDqhbR1HePixcVh8mh561fVnchSLcm4XykoFEQ4mEdmbZQ5nTy3UyDv4QDiRCX1VprFeUfiAkdNL",
  "key7": "CzWyowt1y11qV2oKP445Vd4yB8L8bFhJJkecYo2a1WZeg3tbb6o5WLcKht6pWgZL44wHiANCGmtCTLmFpPYW37o",
  "key8": "4yc1Qsyr3MGqp6nJFPpbUZptA6EAGdjuDxaNFmLRJKRw54rt3aqEQ6kfGGzRXHGkAZXhvjXyriK1AY7vyrdRSd5R",
  "key9": "5oQWkcEAztWpAqK6PN8UabjBE6p7XuNFdtQY5xdn2VJYShWindDU3smuxHKi2g5LwuxoEKozBHff8kmFuDh2tBAm",
  "key10": "tb3p14C5SUTsQH1j3qo72uCvaUjrCUoHc7m9ZnnGm6XACFC946CfxWsRh6tQqZticp9JmUx3mbB7AGF8bav9meg",
  "key11": "57sDrRqNcXGfSGcrQGEVknEES376C7XHqSjEngEXY3JQbfrN67wD59pW1gP2g1U7gMxkvAtBi7uRRedar8K9actx",
  "key12": "63EFV5EdyVAE7tYx96bKtRxWyBvxPCM4yzk299kbGYyAzU296GG6j8JeTQ2voAGFwE4Js1ENRu9Gh9W4vz91K34D",
  "key13": "4eZXyAxSrCtDoZNBs9BDPyU31srS6MiiC6nf6px9aiJX18sG65YXBrwysHhBEEtNaecTSRqNLWVmPL8seFHK18Xz",
  "key14": "5QFD3HC5zycg31BhpZv3jLn79VTEU6MBxBT8UxJH3WrmPsvbqNyCGk19r76hJxLMuyUmSGtTFjZt9769DmPegrgJ",
  "key15": "3owFc7JuYRudqMDB7jkoNsftVsKfSsaTBLLiCg8ZXnZjtFyd5bMyv7n26RWJf4a8zYmRM77oMkiAppD47tEZCHuw",
  "key16": "2iUuuaRHC4pRe6i9zVFxAAspM3DkwYkg2Siww5JjciTXcU8BkRgE8sXhYib8UFDugC5WztXnzDBVcXar3pg5CndT",
  "key17": "3QkyQzRsgNZqVSnW7rd8baLWeU5g2KNAS1MJAQqB5y838x6dSrGgpAhD3a3MDGqhNthJwKypNNxXuJjzroyiD7rJ",
  "key18": "kkqC26K8o7P9TDoPzyBtimTUuXDS9nVL2wWeQj4rbwcpQGgk2hhLhDffi3HmT17mV1M3rC4jHGRFaStUGxNhX5i",
  "key19": "3vXJYxcxF5gDFA82enfG8tYzAQEfd2gAnEF6vEWesSYfaZ8MCSCpH61cnFup4XEkyjks7dUHXtWqaa1uq92Znf8E",
  "key20": "4b3m7UUE8ytAUxmaHg58oXaLjX3GdecLJFBbLgd3UCPZj6zTxEdn2fDqaghdNbSxcAoXFc4ptccqUvvSfjRNSboA",
  "key21": "58TctER7G3LNxThiJaoG9pLBbzQn7Vo29YJKdsRbdr8dyucTbdKcu7gHadhLm6pxsfUhdzdhsx5ZFNhskmhM5a89",
  "key22": "kzGWN7RJzzVpvh5zz4t6VchVNLDswrT4RsqURweB7WiKvR5XEupeEajvPkLzMvXiwE6eJqCQZPScZ1aEbZX4hZC",
  "key23": "3oLKRkkh9szruNbx8EeZx1SiT72tn5Rq4ULukBYq4PUNhgHjYEupmsrhywj1NCjSmEAKmqJma1gqTuvQi5pESiS",
  "key24": "fRqceZRtUJMDGZ6nFoGXYsmtQuwQpqa2r58giE531tfyb4Ts6biZUeBZ72RoTpu3DuSjEhBcQuk8gytNg44R4gs",
  "key25": "z41vfk6xMTo999aByjWXp9aWY9k6QGfHPo6kDib8om4x4hLgQzVafeajxZxsHxjrCu7rCHuDkCEgDarTqXhZWKC",
  "key26": "2m2UeGYRWGFD7GrGXDEeiDd6bFoe5UKyq6diP6UxgCe7EQWiKbUgHHLXo1eCm4GaH3PkuCRVMxQpfRgBHWDHFfp7",
  "key27": "5rBXwzoBpH9uy8GdPWNazEppjhpnDZgQUGqVPwd9vuPogL2NNR6G5c8iiZLVKcwLZfij2sG3zrPDbVb4R37JWmKN",
  "key28": "29twYH2xhfQBSAwP1LVtrjJUjEk2NLDp7N9GzFhnN8HUjRaNT4Rme2qUw4zTMj1PrJsqYMQBnqJGSUDabV4F5pwS",
  "key29": "5wxyX24VVkVc19mvcsqPznz5MUSbmVEsdKLiNaL9da5qRJb6n18cpHBYuzNCQegxCrsqapDFCH1AnxyuYBCGJyG3",
  "key30": "UQdH5rqT4aFamBkAixXyt2dmx4ogeiU3dStkExzE1UuKB4KUevajvbZPkazamL5FvNC3kpHEiTSprh5WH4supAX",
  "key31": "3VTNUcWFtUA9VmJS62eHTCBfwHWt5feEvjTFazRvnYy1kZ29eWzF2AD5tzVaqkbRoXk1yws5fkcsJNdQYQPEDgzh",
  "key32": "Y9WoVoJ8bcFL5zcNibXwk6jR5aZqMngsAfCwigF6VqXTN3LNneb28QKez8QRtA3sU8dUyfgUrFxtw3aRpVAktts",
  "key33": "5dYtVcYZ8CHaB86h9DkfJqimyCPCk4thutk4G937rorNkuF3SHAkFbf2ET4ndRh4oUspWmu9CXJjih1tSYgg5HaK",
  "key34": "4JcHR8vaMWPs38J63kL5p4crrN99CUdz79YBR4UbHepPAFhKamxtNQDg17jmXFz3kPWy1RqaNZqQo7owM5Lrsz5U",
  "key35": "4caSGzjKFcyfGMiCmwasJgv6cRWm7d5AzPk6pPAmQ1MkWiGjdaPPn8NJA3UDyv9rPPge8267TxVqFYW7q9QwDjuX"
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
