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
    "5bAzjJF5LK3jc22sbADcCwQcgZ3qXP9pDYm2yS3prB4X3JVL9ia6b2ZpZhhb1LnGeJjHhTWBpzY4K62nyZBeVWuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2brkZ2jC2yKQj8kqLDyHsLN6BkBLzSUUwHZrrYEaHTBnkhYSSvxDxzEzSv7SLaDhLdPVkHxiSJSNiVdbYjXHG9FS",
  "key1": "VcHSQZAZ54oxn1WtQp7nzd9Zq5QW1JCbjaJnE99L57iF2qmgEQV1nRzDWv9xw6e9Kz1QoAhADj18H1DKG4ak3ez",
  "key2": "4mAPnHw93QkGHzUQHBLXkQWZxszzvcHGZsiuycui9J1ZA53oCG1J8BgcZzSvd63TaMoDo14dtgbbNVbSTXeLvfkf",
  "key3": "dzTDVkj9CRApQ5MumwkeabE4t7RkcnNQ1Vw3QMafsqU6BwGQtneVGb8N5JDokAtzkZXhvV4rEybN1Aki1S7LvpQ",
  "key4": "55Y7cpVw8JQhjtZ2xrGgkcq6x1tdYcYxSWbnttuibFArbgNBGAr1ygy7LR7LiEKMceLyEhmenPtGkU6jfx5XrJGi",
  "key5": "4FF7fDsBFXUDfbzDVkAuXLEyK7pB1TajbMsdvXSpYFm2thVNjCkE34SBzE2MtSUygU6tX1FZgB2dBJxTvgUQ83fS",
  "key6": "2BBauafiyeBenE1yrG3p61E9kuq1qe1ZYeeJEtT3hqZPbyRGbQqfKSJgYxUqkj81E4if1uAbNZocjfcpHD3iNfHQ",
  "key7": "55rEdx3RAfuL7gYa5p3P2YJ6DgsBzpn5vKHfSDsqmnMibtYtC2ek3AtpWJxwGvYdPe5jXCqZsMpJaXLHAKGt9qPE",
  "key8": "2MhCeNjQhAJMUWZux5goeMskr7EPw3yeANMshuDEhsJGSVnP3Wjt3pUhzNbWuuCmKukfoenTo1MECG9VEUpYtfsW",
  "key9": "26GzmY6WBrMpQMfgNdTDKYF2xZM6FKgYzVYLHvFAU6WCFrwZfNin3QvBP3FtjWTVoCxYnfj2AKStEmFn8dy4Vvr7",
  "key10": "4TiwKz1qQfLsa6ci9aCruRRj5yKJMrMx18DfenCNR91euyAxdwyWjC7ViKCtH3ebVsJXYfW3cshpsY2DzTR6a95e",
  "key11": "5KoFtTSP9g1ipEUhZbjjNNVZ76BoGBfVEZGUpnq7ieNUcYZJkDzFNvKgMgoGR2crnvQXeUaj6k5b83T8GTQYxzGR",
  "key12": "kCzHNvX4VFpvBCdMYXLeMRjY51d9who4ZYUjCg9DwiAWMH9nbP5w8B3pyGditYorkzySS9ZSbTAuQgHBWhmE2dj",
  "key13": "37s2nGGXnraf9U9gLYdudiGQ5xJpdKcMrwq7jZ5ZrDyE4CixB6xboE2UGGX9xuNiMrEMovSeGhV1FcjPzVJAhLok",
  "key14": "3Jg7JmwSCYbgVUQQZQ1XRwhrD6HMsw6TB6TBU8vp6enGZELdGAKD5eMXViPsr74RmhxKv9VTZxZewgFaF1WnZUc7",
  "key15": "2aV8nsmLuf3cwmFE5RUXZ6mNicXCzc6hbNWSpN9XBWPSy3MjQ7FkKKzVqpxoH4XsyMdUL6uhdok3P6srAumWywhr",
  "key16": "42qsE24UdNF9feam4WR3kqYMPVzNW4JbqR6CNd6FzdukV4BJsUTRrgTBohXoMCB5oRcXMmxSMVMS7879f5PViLcF",
  "key17": "4Sr5SBxfCtyAKemEuEvxyqwYQVZMu3nV5ZRu66TmpxnEYmr9i6HJXD5R5oCGYxbWc5paCYe9Fkphy5aFAFU4bSKV",
  "key18": "3JKzrJDsT2vJxgPpZ6jkX2nS3573BBCxyYFxwNyikWyWt8sqKE5kTQkBNWx6PEFfukGsDV1cMKsBpbQU6pBzwcxu",
  "key19": "3J9QkpBYkeghRb4156pjcZGXcwc7HK2gi9jHMCwe9ssUUzkgMd4e39Hp44x3mEdJMnjKfaLKJgFVRMC7qBYwDPo8",
  "key20": "72oY4FQnQgT2jm7hMxsTmHHKqs86PttTrmU9KCyZD4fYnhyNrGbtCxVAdbVuav1E8agtpBLjhWtsW7mgUcAqZoz",
  "key21": "4gptRFECUDzaFQMj33taQkLBMGJVh6VGyTqS6ehTUvuKsx46XpQnHPsrQp8W8hJNiaqPnqWN9FStVXUCvQw6cKmZ",
  "key22": "41Xf3Z6dwB8GB2aBfmkcn5Jp2A626EYrqD8nPt3EnyYd4J7kKEB3XLtJLwFs4SJ52kpuTdQi967ghabtj6X1uXng",
  "key23": "5baoZJbAsXSacq4nQNLkrRSfRaEnoVdTx14NyUCtoDjraaBKFXY14b7BLLush5giyyVZnC4wdpEDzTS9mCiqMBfe",
  "key24": "Ls36VLk4A6JAxJHPnhZcVpjJDDCyevJUeoSuNvhZdd3RMkmj5HDjsjeqDHTedkwCYqjniXb3VGLPVPrcCpo49vt",
  "key25": "5GYbxTxZ27LCEnyzRVvVwJ3T2ovcNsi9dCHWvnpBnmfHpuFTsW2eHPoNebavBPdV2KAcvEcUMDwatzYxdSbY7QCX",
  "key26": "3WsqQkC1WW511WrFMQbsZAJXJzePE3GivGbGhveoUnDUHv5M63iSLBaKSTLSnPgneRwpbwZKGn4JrUqxsN2Sj6Ks",
  "key27": "3ifEXido34mvWTWdQ9NNbmYFpEhL2FUfg1Vht9kapcR9cmPwfkMy2Ldwe5Ncgc9FykFg6APUs5YHmjAVnvah4EPh",
  "key28": "3n2zWFXg92XwZbXZuDYtZPMXaNPqHVjHA1ThyHhmsE1P3AQMrHWDNyTtdHUCBatSZ8JEmAzVP5r9G24UsSAHFHcX",
  "key29": "5tH8s6mCWbmJFkcNsJMQUAsYyXEhKNknHwTUxQarftcwduQMB3HeF6kF9mETsTbWgfe3mSxVpgKhHtW3c5dL2URp",
  "key30": "365bJymM9GUkReV79t3eKJ4VWW5No4tHcQoBjAJaEYFX7qqmx1bTwsW2i4FdHkrPrPcrL2LENjh6ah5WPisWFJp1",
  "key31": "mMHVzXHnbvmA8Dtxh3ekWtShQmgDjggNbuFG9T2fAuqz68MZkNSSjbMWdXKaRxspwTtn9uVTcyP1hHcCb4c2faM",
  "key32": "3worCqDd5vs3hL5MpTecHAmJdt4JQV131aonwxEBBh9uvrf6aAdJLZfsyCqpxvBGaabM5tFCcc4GnPEXcmjEpLr2",
  "key33": "57mHqj6syiFfjvJQ6DS4sYkL9TzHUhETdkjw95bejTEomBq16YFuLE8832s4TwXTxDKFL6fvQi1tr3rJPnqFra1H",
  "key34": "49atywsXcg8UzK6H32WFteQc7KA9824FadgNtTC7SCaJnVCo5HsE6Phaqbg1fRQhD7kXLuFfHXERxugsEEEuSS9R",
  "key35": "2Ac82pdCmHdLGPCvxNMLtxoYiD9ikgoEiWnWURMMYpPNSBUAu4YcPMPd8vqyFrXAPKcRM6nVXJ4mk8pkgPdqzdEL",
  "key36": "3LGw3QTWvgst4hzGHesYddtbyHQbVj4m2owagxjZTjcKVL9NBnNDdVcwz8SMLsdp7SMQPzx8hbuGNM98voccjLag",
  "key37": "qqriGV3wD8F3TToJ9vhhSfvcp1RWUjct7i6XTUpE9bY4k3Zk2K7TkuZCWHkDxFg1vqGLV8Gfj5R4b9W4ZRRKxKC"
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
