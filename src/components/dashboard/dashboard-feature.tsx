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
    "2fJhTizh8acZa4Ygp5E7qAjBJt49zCFSweSu1Z7fRLGyutY3CJhKUvdHYui7vYpVrqGps32ywKJtc681i8FewV7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HTEDRCWbUvnbqDTXaM8EBSoUhXwEFBazRkCWepipizyDnJ93MVhGXFPA15zHbh5Pmv4Q6ZseYFH41GYQWVXei6L",
  "key1": "xivw6Lwvm5hdRKWz7BZKVoP484Um9C3eixxD288Ut9un8gzhqVnCHYD2LZGPtB2azTYNjxN1FoHFg9PpmWgEXHj",
  "key2": "5KxuEKX4wA35imak8zZgnhMbSRr5q9sHNUXYQWypGAWBeFCV8wneimEwYS55mC9BLfEDQpGb8oCR4TCKy6BYSzxh",
  "key3": "2hbXkjhigeffL6WyEgKcQguk2MXe8X7jwERbDrSmRvzb8ZFF7khz4KW1XRqsdeJ57YNeEQcBC65iK7W6UJ3NdQzr",
  "key4": "3SyLYwULNSZkKEcLSvnrqnRD82DAbHVnqNiS1kD28N1uieAQGqpFZH9tJnNcjD78Y3hAyGE1ZzQBSw85jnM8XzPo",
  "key5": "5iBfoTTsfHb5eNV8NmijAq6kHpJdd4rmqVA6JCKvvzWiYQ9eMRX5Wi1qLKRt5xLRQL7HgsMaQjoMwUy7kssYJxDx",
  "key6": "4aCho32SPyhg23ydcwmGe4ws16SWQx9bfWQ7cEQmBgaKjBgDYZdKZxZNE38SSgqMg3SgahwjJ4tKqkw2iicGMRyE",
  "key7": "fL3zHaMMZTE1CDd4wySeafSZMXxWkAbYJLYPGf2Rnmq142vcuuXqKwQDXy8iYLLHBnPcdyJ8eorEdUc95N2LWUn",
  "key8": "2d6kz7CRVa4LK5GWtGukEDtBFKT6ZBv7us6335QbSEAWef6umHggSLJjDaSSeJ41CDLPhXdYWQkjkV69a4qhPPzm",
  "key9": "615wQpqHEKBeSPTdheLDTbgb69nUAxWctFsCqCBADTX89WfWmqJAvYK59yaZ3UqThTgevA1o2Rkc7xpzvKMHDmfU",
  "key10": "3eUkMFcGH9i3YMkuo5zKWcUDFnhmkLfkGJAQLoubJQVzTz4KZDnuRmRacThsmH7CPUj6MHExG9gwdYshKpCBg7SQ",
  "key11": "2DdZzeb4QxMeLd8wwfNUao233dAwEWRcDeL9RQDir6N3GNDJR6yM7tx4n61zTHLK3H3FYLiE41UvGFhs3C4ceioW",
  "key12": "3RYVtW9tVobUt4GTqHsnf2EYbgPsro5G6C81Yzm7njLgaf3Ad7KVDNQWqQ6mmuicFJXN2PXByiY31KPkjD9dRU62",
  "key13": "s3LXFitbRiyq4SQXCAKgj9pWwjpLZYP7gMWjYZfEGxmyvWBFcwcF8cmr53Udf3gkpm6LbqkjU8KiQFkrHiDv3vP",
  "key14": "6212up51idvnHnNJsehBfSRLpSKMc9UAsxXmCzrxvv2FJnmCHatxCsN3ExbXGmb1gkWcmgoosZJHEa7ArT4mY1W2",
  "key15": "58twuSKKYoFphn96NBAGsfgHyoDN6QKFGYsdFjG9eF7idJXn9eUQVX4Pfsk7NJqHbwUCGULCLYThByvzEvfiktAr",
  "key16": "44dAZVQzjBpyHcZVjdRQuVJLnKBuUSKMMbd5W9o3pPqc5BamEJu5fwEhHqEQ4at1B9bkfjwX6Dk2kaMLTxuJm2vC",
  "key17": "5RnXAy5uhFy89aKzRamZksSjxdq8RSwNGLUuQDPuEbHDiEM1o6JfPDq2ePh5S59wzWEWZhAYQe6uGi8YL3J2haVa",
  "key18": "4w2YVbtsKEmSeExywSVnBy62nKevxHyjEC31M2xbjcYhj7uFmBPGwy6qyko1nnAxTG7U72Sg1jzwa8tV6vJYyAEh",
  "key19": "5jeKHXoGbMeeTbikUukhLQ6RQ4gGFc7CBRsXMfGhne6Nih8yMQ4dnzYnP4s5zmEKT4PPXvHvXaHs3JqkjcpNW8H3",
  "key20": "2GEDQiXVH32taK8966SW3REWGsGUuW3vhL1dbDy2zY1kkD4XMjwxddKwu6TTwPFEJjjdMVKMAHmNhkATPDkFZLen",
  "key21": "2iadXV5gFba2z2b8r2uFeJx7qkBDVTTB4zH5cK3s8M1qX3G9ocWYj6TMfkNACPijLKb8AhC1RMADMCaEpX2z3P1G",
  "key22": "2ALD9eeJB6BSEWnigxqBeNEBK9Vse8ZHJkYBVsWnDydTUoe27xoEqLaBMc7ngf6hax47Rd1Rf1PCPnwSKeTwtd9U",
  "key23": "3Jp6ZCrgVXWGRtLHFpK1iCYSy3xmZUqijH9MbJaD8WjsutxcDGsC6Ab9DzCwJa6aoGtBbDEmMf8bXJbkbom7WDt1",
  "key24": "N8XoKwiTWqEGKkZMkHp43vJcj19y4BsjeAqK3L2W1jrr2QwERRGSfPmag6XakwBckGbLwXm7mLaErLcdCaVCM4u",
  "key25": "4xUALfHwsS7gMW8KJ16UqbFZP65t1aY4EhJCZaZ359kswhhRAoRunRn2C5DDyGHD13GXLCVeFNC7wtMFFaqBznE6",
  "key26": "617KksLTTc13hYU2V2krfDAEcFsALY7HUDmHDpFk3FokVDJ8zbyeuQ7UCYL5CD7hwFPKuZfxHEcrRzMPv6x6YxXm",
  "key27": "5AYAvp8NyePAhEoV9WpuTerASTwGWTQo4jJvn285WKLHuMDAaDk2wEYyzZKpaZ74QWUiVgpTf4ABfFWWWTyPJS62",
  "key28": "2M12LLNaCssoN65DfGXy8jRLDbZvvVYdDYroiBYXWTtTBXHqwi4H16kyAeQko5or3ZWB5odZgkGahF8qAZdQcbGs",
  "key29": "36iWTb7fV2NmvVw1RD6rRfgemhW517shWLm4HKgY7UAsnpUzknyKdmnSavWbwvdDqn9K2HCEggjdRkTYTFHwPZgn",
  "key30": "4utF6PwksTB31nwM7ZTv43qnckJzj6aKb3VMJdHw1Cc94MWeyL9dSe3b9gBGTXyCsAGhHqurVUYoL7Lsk7kUdHQ8",
  "key31": "2NC16CNjqVWi2Z6dMUG6ezncPUVmpBPfhHzeK6phVxgsjDJnn3WgqVcr6ZGSPTp4fJGWK8HiThmNU1XBMCGTSzV1",
  "key32": "5t7FKHDkQHazYJm5VNx9bzKDLGYW8nwGcLASqcpKh7851yjjcW1xXCLtQX3xEpdWouz4YQNVkRKamC7PdQ7da7oD"
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
