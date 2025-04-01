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
    "8uXubH9XEPiLzn72GvzqGSMaYQynqmMa6yT2QZb764tE16XNdgndXye1LVGA5uiXFcU4dWwiEgPaXjgwA9juoky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KyVpizHTRUvFeAJGqskHg8LewuwCjxN3rvoiZpxjto21EX8o2fqhChaQvBKCiVg55mDtzpmv6rDw6vtUKaDV9Le",
  "key1": "4M4H1UpqaiKUhvdGC8QWrWWJzoDxQgCTFBXS9PsnoJb94YXE73kaX65vw1wbiU97zw1xdwnQzGC7D1fp11U46FAQ",
  "key2": "398GzfHD3iTYmWaeq3ruWrNPHePrwkX1ytVxJ94QxXeG56YEqv62GEoHCX2ceLtEu9ATy698HQjFSaHAF1BmVSmy",
  "key3": "3JaU6H6ziFYn6ZjnmKH3nvKzcuTdCYMYUpnWQLpoo9JrqieMiiAreoFS6bipM1vbEgQ3qQgrLXkNnprLDecDKLKP",
  "key4": "5zFYiBHMUiZoo6P4nmfJcn2wJzKrgHAa1g5oJvhMLXtzFZVFYigBRSaU782ts2ToKugjo4NoAaVME1S636X8qRbD",
  "key5": "22RAvP8X4iDYfq7c4jPc8Y6S3tvudHJeTjRwfDbZinihZFJGRU3RQ5jSzeUSx3HVH22pHjzWhFQMzAJGwuvYmukj",
  "key6": "42Yct8opfnqHcgEyJwWbXCduFp48d4QrfD5duRdJXDFEKsfdBBBa2yZxSdJj4f1Y2cQfBrUxT17m3q1aA19QChMo",
  "key7": "4shJ6kNFncZeJqJSM9rLEh7enHgYJzThrfguxHrCR2ZGFYu68bG4orQ8Xyi1pLfyzUu7wQEj86TNknzAaH39g6PX",
  "key8": "Sw2Km119GacqJJRwnz2M4FwatfpKouhmYY9eh8KsayxGZWhWs8DJB5aZgWRgmxeqpctLpXUcmmENrhn6HRfDzvr",
  "key9": "3iF6uQnsMPo4vhDfHoBJAdfsUqDmVenWre5YjRsGGzWHRj5fts9VETdX67a9jUzjSQ8LUJ5L2aCSYF54tVkJbgsR",
  "key10": "4WbyhbuBU1uGbwDrjJ6SDwGv25aRaaAtsmGpDFXKoExndd6DFriYzPbF5qqCdiqee4NZxiupSzc5zEDH95mSQAHy",
  "key11": "8gDhEUxzvKoeLTEch7LnMWSTNGR78Auwh3qCwBjBz6JBNvRkuXEV1KzWBDxKdrWcoXkdPn51J6cPeoj1cov1UFN",
  "key12": "5HkKNupNw7uybQhauznHZKLxtW6c1pKWrySyqPzhmDujZzvsFy3V1wu2CVauuB5Ji756ZekDjtDsmr9EDN3Yh6BE",
  "key13": "AwHQZVAmpZwtB5ZwN7Apo4Xd5wgRu2Yxk5VV8hRxsoiRXH2AwGCu4FEkxXhj9B84psFGJdPJjBxUAAbRXv3pfMk",
  "key14": "66SjwfeQzYroWdGsXfSPrBjiLBV3MtPxnRnj74SyGb7Ke27yNS1kRiHwBuabMs4nEPcdLd1oxmpTTtyzxEJZFgSe",
  "key15": "3JGDCm7K9yfysTdbSskxniNqjVRW8jdgMXrAdjkUw8YgMn9g1eShgxzphrDnWrWbNoxw1dXFMdyPyPS9GgM8cj5w",
  "key16": "4x3Zr9wqKHpjm5AckyR65Wz9xi9CvRaTXtNGF3Utz4Eo7RspZ12ZEMApsCTQbKznfBZUJ92TVacrQWQjGyoyPrnn",
  "key17": "5hb7VaczVwYcNWgjdctzW7xLFF5jZqcpesFKXC89JhDBU2JBzJi7dH4QVM4Fs3kRaLxTJfaC3UEucxb3y9VyJQAb",
  "key18": "4vvf9Ld9yQsrDjMaRgUyZujuKdv9afZJdPJ7s2nKSQiuVS3D2GWd8nHG8Mbru6WJjJZtULfesDFkzkEV6asGtF6o",
  "key19": "26HYLFdw2oWgUyngpM6FHkwHo8d1o9yZ4QfopnS3kT9hX4imJV2hJD7jLXUYfcR4CUoEdrU6EfQmBt7jMVVCuEd5",
  "key20": "2JsJPCwGL5weDHoGiYd1f3K3LywSzbQCTKumRU5Tm1AhDVsf9GVsgw2d5Tv6PKByqKRW5UDmbGPiPrRtC2HWN9xV",
  "key21": "3jrmB7mQdgDQ5nLtv2mSKr9tpkjU8KmkrDbUBq3QuM3osHmx9hxXJSoGWDCTrmfHv8RyBrLoyHzYJ4soviozLXcU",
  "key22": "2wKSYy7FDhvxEmeB6fs1AT3xTWiesiWudyXt93yAbkBPfexKjSkKRU4aD3bduutCuu9cWW5ZX2j2zZj645yYawRP",
  "key23": "2MzsMikztb9BfRZ7XDtLZPjA15mBHZeGVqYcNZJaBzFvqvo3CjbZqibNARqa75HLen3cKxBUCw1AS6Sg3MJiFE51",
  "key24": "26BUWF1ZeV74Aq6GM7odgNtaUeGTQNXeoEtFyLCSMVB3FS2nntgpsH18bhUpfGRC8ULEMAWtrgwWDVVpXWJcDDJE",
  "key25": "34sg6AwRjYCZLBz2RGGJMY4qwtZua3Ao6oLoQbwpP8RGhp4LxNGrCsVCBxdGWXTnKYeBpBzQurmW8tqwU8UJvTHM",
  "key26": "3h7KPRbm9PcwZwXu8uePiStr2KcWhiQRV258mSWneFuZEiMes4uvfCt3vKc5jU7drUkQXQ72ddebTCHkkKmLQcxw",
  "key27": "4W15f6xPm7qa5sMotmUB5uTVZQEXPz1G6DWfmudAdscbszUYwyQmwo2E4U217HTsXg1M94qSt4gWZygpmwDQXY2f",
  "key28": "4gY1tHBkQiQn6oV4yqt5Upjqy4mP6irJiMxwhmxzmdDicfvoxcsE19Zuyj9YqgS64X92cXs3XANVSkRTvqhYkU29",
  "key29": "612fHSY2aYRg3hEot1oqumg1vGgJ7dzYs3rM8dM76npU6QcXVyrbxa16eFM5mSAtk9KWVZ7ZoLoUL1KKEXN4sEJi",
  "key30": "29sE7L7MhKQXtwTQxtL7Ka1MQn1DBdpjtF9GPR8sicYq7ZwskbJJShTi8WRnv43x4RoRbjMSoXcmKErd9RXdqFb6",
  "key31": "5itH6a4H4AL85VkcPddYQXyYvuRoxCoWSKVdXELDef6zKqiB6etAZDeofhp7qqvL6DAX3wfjrTV1yMmWsGogA8bg",
  "key32": "4EdFbkJWGq1sKsmRMpNy5dN7SSWqAKtLJbjyQGtgZ4a1KbL1dKh6cPcRwukoVH7Qy6tEhnmiE36HTJgACqcjHNHM",
  "key33": "5NjjqjbjZHk5DLryun9R5PTf62dLA9Vg6rmJkPXxN6ytUBURrKBqxYFZ83FfuMnpKknKY7MRWECLkXwD9DsbKcov",
  "key34": "54daoHJd2PgkdwBUt7VV1ouoapYr9opAfunfU2iAc3D7SNutSxJtaSa1DGdZuSiubniYnnqoFL4Ra2SCAvGQzNZT",
  "key35": "4Gynf2iFkRhTbA8rb2CgTZAbEKzjiddjVdq7HH6pdc4wy7x5cVwt46Tdvw7p4UdQ9wF2hQVJFevLvD1wQpEdU3Kb"
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
