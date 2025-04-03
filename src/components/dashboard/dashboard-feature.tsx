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
    "svrKKgmgPM7KCox9m878wCgHYULsR3FePx6wiNAwaZQWchUSPeyAuUheGDUGWvyjhRxqxwTQURqETx6Tq3LKELP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z1FsK8HHD4cB12NhUpJB2x5xKe9RPhmGivL9GjFSzNqeSidUNA2UwWVQeNExim4TYrLV7AES7o1rbryEfYVbJJ4",
  "key1": "Un8QvuF1FbuEvLtXcdfAYcGpekF9SJeVxEaMSPbLN51SzGx8KFfkYaf17r9oNmqX2fA4XhzyxDg74e8PdaykhU3",
  "key2": "3xP1JxvabdisDTaJe9QEcQCENeVrnNgSjeAwgaDpzo6kSGXWtGhAcdfo5GoBVcSLFXqFNhpnZLWMwYaLuEutiZrk",
  "key3": "5WM4iKoFHobTZAqoDHwon6ni2XyvmxsJWXFFbnDvWWYPdfTKdS6DSTTCDifjJpdrTL78HS66SCYMSz5XAR9Psy2U",
  "key4": "4zdgYvYrdW2KuV3L3PXkRvWZj22sh54i3UCycVR4b2Z9iBVboT9C5pUiJeEw6hYpf7GdGqLiwhRFZ8QNBHknLTDC",
  "key5": "HUQgtdNVixhJHHKUpJBVcZSc1yuXgB5aDmDWd4SNmepUgmCxEaTutdmPmoPzZ7N6BuhkpNPGAjVFdWZ4jH6TREC",
  "key6": "2qPeQ4dMqmGUfaLobqbCjBSaTc9CsVvx4qMAeeVwUCqVg8AsGXjXnVpsJ2ePWBx1f4NVa3k6m3qgP3pg5j2NAq1G",
  "key7": "2hRZy3SbNdBL2JDJ8Gg9ZDpsfGNeJZngAo7VDuwYKmPuqWS45sC8maeUApPd43ShbuzdPnxinTYzkB5dF5xKVwvZ",
  "key8": "3fUAiLWD2YssFJr8WHoVd95fcyJe2GGXjLteeDvfoscn3yyFoi6z2T3BAmnpSpb91QtNLzPzFcfp7q64ACPKDCmh",
  "key9": "59tP2Uddky8jB66qjQn418V99fwWyXtUycFvzQf3d46dfzJAjj3NXocqimap1aa9WPZWf1xaVeR5YBDRKaVPfoX7",
  "key10": "5SKMLbikngRuTtcS52tqokYxD2cU6PdZZfv9cemXTW9ibcfXCyMWgXMjJ9LKe3vgXV8nddv3GnVqc9bkxUWpnJJ1",
  "key11": "3dvkfoH6pUeRJRLf3mrirTFxHRa4fP2ycAENNRZebJ64C6FDKA7v1Zdp7Vv3YU5ARVWHxbuzAHvMpug9CeMEZxRo",
  "key12": "qpi3891cuu7RTrVS4aQJYaEEbTgxzkk5BxpSqgtCU9sAWShtJ9hjdDsM5j9KQmcqdmctGGdJQA1dFRo2a7TCjvK",
  "key13": "4zcD2AzQrMoAx1aE88xamCWMuvRq5utBWLWABCgUtLsPhgEbL2JrMHuWbpi9Lx6AfjWcZLiqGJoYkZ41pnrfNAV1",
  "key14": "53v2A5GrVs1YkU8TDNvenHNm64c6v4oELkgGggWcbBvKTf4Sbv9fs1TNojUdQqv4yzQn2dooGSpYe9JsfEzkg6tE",
  "key15": "5iAXdzyUqz8rrgRhxuE1uo3iGWnWcUSd5HoKV7EW8MMrLAdx6BDB87NihoBDekbBH8AYseE2yBqwWyYLG16vPtQa",
  "key16": "4sqdyXrSdDjMA6FzBvBxxGDu6q9TWVJT2CFMob3reuLeUYD1ihr8SbZRyQKpaHZ8M4uxE4ZFtj6VsYJYBxP7yoYM",
  "key17": "4s5WBNbTYtt2ov4qmijDmJWxqbDiaH7bQAuz73ENVbGY833DvAtGAhJvAT1mkscYQyj85uWkUkjsC8gNabvJAqbM",
  "key18": "2RWCn6sc9ZP6V4bxG7JrY7g8pgpu28y7p4rkNy6wsP4ENyKF6mkLGjSQ4cTW1GYyeiMU4JVP6jYP9BiTm8i4WLPn",
  "key19": "4YSgvTL9J2FJ7XHmrmyYodLwxFtcztr6gsBjYAPp74m6oq62gGZ5L7e5P3VFNe3TrHQqafWt2NruWpstg427uW2T",
  "key20": "3sJKCMxgwP3gVTgvXVZcaRgsorbuwzB3fCMmYqRJsGRv4j5ZqjATVLVdwq397o4hXs28tVsF1Jm4rD6U2c5wnCgu",
  "key21": "2N55RJcQ6wTdniuJuWGm3HeiFxrykwcWUEMLnGJtEfuCrQ8ottA57Fqg3Nips92fQ5758xcaZNNKLSQdje4KZ4SS",
  "key22": "z3QmgQ6HZYzchisXnL19W4k5Q1VYHPjirgUaeeqSnGmz9ePmomH4VCaVow19Mtf92v6XsJxeRyToP8CPxrpj5kD",
  "key23": "3m3kJyW3jpUxdTyNdvxW3wsZpCPqJdSmtQXmWDh6y2DxvQS3BFguXz5nofDskPqybGp8UKkCqQsk3sZ7Q4AafTkE",
  "key24": "XvCTqzip7Z15n13w2haDX3U5CFSLir6GdiahGkNHx5HFp2FFALNCyEKKQGYSrjjKqpWgsTcPPSZXA8t6FY7E5DN",
  "key25": "3sKmnLZ2iNcqV5fhJ83jMFrJAie9bMmSpaa3dac85tNBMLuB4MXGjpSHCEMeba2PwNpPXQo5hbDLAkp9BDN7ijPx",
  "key26": "3Hck4GPBFBzjxmsfdzcWK8eY8QyEFvXUAWYHWrUWxVs42y95B52pURNXRphAYDkzSsCgGRLnFELygk43N2tfh7aX",
  "key27": "4xyFkoxHe1KtgwNChzieKiSNFHy7kwM93YYUvMAvytiAnWg6mWzDUEfXv2CtqezL1RHBmHwkFV3y5NTc4zdCQmug",
  "key28": "5XA93V8AA339QspStmjMdssdQUD8SkjXmrDBL6YQQkHHqTrWR3pAEeJ4t761rYu3y7Ry2ucKMhhgWKZFbbfnRLxf",
  "key29": "39FVayzHsbnGCBS8gM22HXJ7vUZscznN8ShaGUc74UZRL1vqbtPyQSszZ8L2XAnPeCUhTQLDnaVCkdArhRRQDc2d",
  "key30": "43RQAAoC5BovEq99nKLnpzCvVLAYVGBAz6hYt6Yh5ZH1NqqQb7QFyBXWUGqs8ecmDKMNXe4GSnSinbRgxKRKRvyc",
  "key31": "4kx1yFKqYDwv27ptjErw1avY5jxnxvGF2Ec9y6RGJxhemBnQRH4YKch6sy8ZUAxemTBpLQRLx7Kot1pTq5tRn19a",
  "key32": "2TcTn73ooFB2gLZYKCx5SWnzrx5YnHwmdGLg31ThAWWkUpvYdC3jgcgCpPbyj3t1zynSzYyHcdpYc4a3EB9FT3sD",
  "key33": "2AtYKM5pSugPcy8W5H8bQGKDbx8NAMWx2JyZmYo6AHrQBHW1av9ZdmLprBk58xywyJn2PSorGb74s7b4kZXNG3xg",
  "key34": "2Un8tGdZLqzR84BoR46zbRLie4xByiHc92TcKSxzPWd3nbffiU4GsZaxQ5agKfSQ7yckpj5cfxojVfEK4Fdmqcsu",
  "key35": "2GoUmmEwQaB3aUWf3Z4oDZybS1zyjKzdGk21ujVfPa1cSt5zkpTc7fp3mUHWTPLxdo134haJT7CqS8baMFbTp21o",
  "key36": "5c3Sr2hKxRTRUmTFBkccuJ7b1tYvzG6P5U474w3KxfNLirkjAHzBU9RXvDDUw1CVjD9bCQj7avxjWc8vZnzftALF"
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
