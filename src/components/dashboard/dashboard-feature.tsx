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
    "37c99KVuvMWNihnk2h1i2TKtsjHfj7dWVMmgAq4dCwkbuDQmYUQeuK2HVdj6aPjM5eYUUNrW2X4wUDCRgfQajXfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ML9gMHLf53rd3ahSJucFibngWgkisR2buE5GU9hg2ys2yUS3GKam3uHTjGRG2GWLoU2BfC5CSFBGAYtgBYY5xFF",
  "key1": "62CngVhzqkfGBzvhw9WDsK9TtjrLDzHjkpLV5yjR2nB9QByACKTPYL5wDZLFXSquDBxLPhDrwoCmU8NE9h423A1C",
  "key2": "5Su2baZrj9py61Hyw8MFaaGZF3rnNSawxVZMgn595uaa7MQAUmSeEtpHKS4GM72n12VvBa4iAZPA3F93dgL91bWT",
  "key3": "5iRsRyqcReCmhTqDUpygjb9JRzQtFj2ADwkPWEUTzkjx67SBgZJxLMV5E9RSGsfSqhzxcA6rCvcB4NMwp18wgMec",
  "key4": "pEyUqDaZKRyRMNqEhkPzbFJZ528tD1pgqACtH3DRPbwZz9BwvjodYYmkZVCU3nAHLS1UMeALjga6BVxPExE7c8h",
  "key5": "9kpg15we5nD5NEbMnEdFaxZp3MnL1cGNCw3B981PPwJeTJXS6U2rMxF9fhEAyiaVZLLuvJRQamqFMNWPHfFL6Xg",
  "key6": "34ChietXWk2JQpryu5jUYAQbSB5A8RQeHWV8CWApUbFLRrgZEd9v6KadAVH6RqrvAo3rWBM7iNBMhczhTQEsFZL6",
  "key7": "3HDnkytHUR9Cw5UaooNT6MjdvZJMbc1ArzUQoLQJpM4c4wgCgra6kpfknT4o56CghLiqwujN2DTEHpmhyTqu9Yz5",
  "key8": "DvttBjRLv3b9mKTZEBeiuKNAZPBHNktQ8XTQ75HwACDjFtz3mG2a9MLEG3yxbNExYfbSHTTvPyhRNBWJvjnRQZY",
  "key9": "44VTmAtcCDunYVP3B8J8Wmy4LX8gbWj2gFvVKyZXHaEoJ7Nhde3TB7fQ56vQ7pU4BvK75mNuVeS1kKikYpW3hYXE",
  "key10": "338dzTAmywphY6UphwZJ1s5q6MiU5twj6KLTPPVJMC86tZz9PxKSPZd7FNRyoGuLoZjW93cooZKxhCMYnED7meHd",
  "key11": "2S837GwUngdkPaZzmev63ZqW1WwjPbYiHopuYfjKmtEUsAd1mNaTUfSdLLK5guJ8c2xFMXTgDrCzHBFnB5WQhQUw",
  "key12": "chiYENyP3fWhN1Qadw54ezo4cYcg5jMhcLmBXDNvyuRwqpqzv1yDdbgMYwDzCrmxPxAChtVZpq42yFJN8bEARwS",
  "key13": "rMyiexu7GewPWDNcX8K8dZaAzA98UGfgyQWpGJ9own7niaKGrB68UnSj8h6aLLy4zCuCrhLFiDHBELVry1gCMz6",
  "key14": "49v4tj2F2grJpjnQMruE5D9TbmSz5M6vnDHa4ysLZZ8h6LEEX3bKzZdRV26Jw9mG7rMPd1xWL9uK5uu8bfNWJ4KH",
  "key15": "2CQSeuUEzSHtLLwLbuvy1czUSTZKq7x9mBcQBY2bgkgTXQCFQPDi8n9WG4vvLs8nwJVoiBRhp7MX3iejdhk1dMvV",
  "key16": "5VFbLAyXVNBcguHYbv5UC2jYJgHg7FhAimqRifzFT7f2wWGG2dSkWz5Uqe8LmBYRUM8o8BfvbqQcgax3rLsyB2e2",
  "key17": "223spujHZ3trQ8rwURe4eBQuJZcnmdrrv74yYDckQqnPmNhyCauL4QKqwGUYvc5UuTEVBSxVjr1fESAoGwXXDaUm",
  "key18": "4T1PtecV9AzmeXiMhyUckb8bGvnyBqsptH4U72jizHMayW8Xb6hKwrBem4fNdYbva1NkfKJx5c2W8c1Ap1zoAjzT",
  "key19": "2U3TsDUgKeQXYeSqRwfa37xMVy1jAGZ1iVDJbgXYipAWd26gH6MjM7qwTZgXiPEX68i3uW7C6AC65QppvSLBYbL6",
  "key20": "2LJNcxkBKVrUsFQxEx1cdQtKqS4J2poNZ7h1LqeywPMQKZrBmEVGK8BFawfk8HYh8pP4Tjbh3ZnzmjSH3rBNwjQy",
  "key21": "2gKmqiitpoPQ6eUsWkVpfEaUQucyidVBZoELCM5YNqWos7KTWnkPwnd9ErZQd2oSevyJVk6ZgvR8zCL9Re2uucAA",
  "key22": "2b9Q8FZn7mCiqF1vLzjFvZFND91Cx2TWJmYEsA3fzjhTxzdiYC2ooYt1YGvMg1yx9bTrqBQXWyZ1Wf3ou7AkRtsr",
  "key23": "Nc1GQsHn9jo7dhZpg3WvoMmhixjdR1ugU3tgjKZfnR24vaSsinAyhMGb2frqnB7vnzYVcXDZd7dfYTJaxmMYoez",
  "key24": "2tr57hyd4NdWeEo9n2L6Y6HKUddRdF996m2nFHwJEZMdPFgYvC9LQrNEmTjWavGg8ZueKzciJMmYiBhqGNvgpaK9",
  "key25": "2XwDoRvBMiLAzYAXDpyyrov7Ab3P4FdC99iZahGc637uebWDWDLU7SdJt5Ljx9iKmyDkcDxs1Z6Rf5C9Zu9qqxo8",
  "key26": "ZumwQoEsCZxgcBgMHcqBDMYHZ5Har1L6Gocp1HBL9bXxAcrP1T5Mfd9DKyQEcDRtu3AhbifeYWM6kRNGW7wsfme",
  "key27": "2oHLmEXCyoKn9y3wUHaq5QqKbGfpqGK1P3NULraaEPccjasdAmYae6WJhhHSUpRegTGDNPM2ks5nVnQjhe8kCDFB",
  "key28": "517RwqBgfMWGTTN1BNDWvxbhQP4kBE4cNiXK898jtPbGFoTGgfeVij1C7sFqxa1vpywVGDBJymnE2KAcjVtNsSWa",
  "key29": "3SmYpsW4UMqHH8KAnocsxGUYPwyy66SkwGkpKxSMDk72uugq74f2GrX14tAJTDE3G6Yi7UUqsKp94aGmfmPgTW8m",
  "key30": "83WrzvFjCBTt6a7afVA2Wrdg9LfnbNsvCp4SunGd5WQH1qXcQvY8h9qPqHQKFGV5Qmisv7MovESCbJk679Jvodw",
  "key31": "5xJCr1fiz6TmRW6LUoCMZs6eiJL7KrmiroAZCAviSuMP4yLawyHWyFZVnBWppmsDoey2u8ytH85gHjtWpgo1dWCS",
  "key32": "5qwKVU1MTxAZqAE1wHx6T96jHHdWrJX5ih9dBJKz1TT6pb2HxjrTxvYsA8BdYQxbwrv7mW32RYHgrGC2rM4yvNh9",
  "key33": "3JCqEWnE8rUnYvbzGCtAEp8H6WLCC5F5XnkzKfUF4VxCVs8sBrJ2T4LKyDa8umen1JXfSydfnopnn9gJ3ScCTdT9",
  "key34": "5h9g6HYru7Nmkz4fDhUCuBPmM9wqddbME1UV4jd94pzgSna4qU1Km6Jc94c5W4zJF8HkbsvZJxuBmWG2qTGZaGs8",
  "key35": "57h2LePgV6JE4Yq17kmR8oUQdESEDirFUAHBUugSrEedytPJ6hhwBcunYV4VULvqJy6MrwxeYWWPgsuWytKjF27a",
  "key36": "5BYUpDKzKB6xApA5dGsg9ry1FfZZ5VhbzAjEmscjUZzQs8wqP99LfCSsnM7CnDNvtQYTtZTFKjkeHY7tPUa8rQmX",
  "key37": "V8vkEDh8Dm3sqd7xtQtth6AVW5E86rHhoFG74SNuDKm6ucYcxszRWSGjt7HUduq9BqqHexintbwJGZRPbY7CrAC",
  "key38": "2apLNTMQukN4h5aSDMNV3nPxN3a8px88GcSXt76aVi7B3w73aiqY9zrFjtRHaZDgAoJKGVHRAMdJhgJHVz1UZwEF",
  "key39": "4qzQ8tkFFJ3WkKCBaRebEPAoC5KwCQfgcxyS3yB9bQFm2s5hHApvLXeoqTDJwAbhX7JCRgNw9BMTMFkAwSbRGmo",
  "key40": "39CXYu7K4unr1FfzBFtzgzwUYrqDME3souNCHSTab13ccmitc5Qj82JAyuihEa864bvq87xUrySB4ru5qVJMCQhB",
  "key41": "xWqrQqMsaQpteMZvpz2d19UWP5zcYTxZVeChFhFXf5yNTNBK9GdZtpfYtoLSwUBCoDNePFBmNL1VQix3yW3V8DV"
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
