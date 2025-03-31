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
    "34x3nS1iwoP61qqamLxeDXJ2UmARQDq5d6jgKEjRbpr6bzAWmCWcUPnDShLFSARbyi5mLRsT2D3sosPhqUtu9CNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xd9goubdsufrkWbZnq1rauwJyxkZxGpbaPYJA82fD2RdgZRPbAv3t54WLMckrbn3XGykNqHCoMU8n1ZQL9QergF",
  "key1": "58WMi6UaUBB6mJihzL6GYpUZdueS2dAHHSe8agLd5hAb5LEg4XnzGSXcjRCsHFfJjd92o3nTqjcWUBYKyQ2rtTYQ",
  "key2": "51UqwjSs4hhXuUvRPpBjAnkeLzjVRtGUfFPzDZJML1JGdiMnTw64waHGjqhXbxi33QLVNP6ax8XcPbubTCztPxid",
  "key3": "2Uu6cfRh57e5vj1LnD14Myzhh8b1pL2RYei7xeKqn2KSNijUL3gcprYNCY2L6iweenT6DKxFutm5o8WhXbDo4Y2Y",
  "key4": "5R79LVhs7NpFeFBvwEFKiXoxDepT7qopTBxJqbNNp69svRV733WGZkKeoEBUT9o4hsG6cpXvmnyGJHM3n6eoYdy9",
  "key5": "39ZbHf6H4fuPHDtUNk1uAh74qg3geyf5XYKsnNAqq2nXLJgEFtT2oZDefFsoQeiSFdFViSSiQty8FtAutdE3CCis",
  "key6": "3ahceNLbmuQXeikrCoUNsQvhZQdhpnnRYsTbFHmiYuHQo4L7z7j9dAZKuXk6vXsuafagvkeKhP7RmAYEGzkz84z1",
  "key7": "5XwDDcontPEcYDUQG3cefsDro1QBQYF7PUSBTMmHdLZW5Pj5nXvkBMt7zdnfDqCwoawWxDbgmPJyixXqJaQsFTYs",
  "key8": "35y14KKdYiGx94nkc4uzZDYRJYe69z3ZHRkdZj87raYkGriVkTTnJzaBG4U3LfjP9ecKgXCtz9pWuUpR1j7PuGXN",
  "key9": "GJzMYQyiZi5ZhBV291gqXxbZBYrEuVGQdmj88Z5g6oVyyhFx7UGZ6RHzRAqd7Sxv5NzLj6oZ74Vv5j1huJtJjb6",
  "key10": "4kEF4HP4pRNtS1WtsRz7q5WgGVnKTpbgsWaVF2mRu8HqsnsQtExriSUm4FHQ7f3De3gtPMywLc97w3wadnaZc9Rf",
  "key11": "3WHER7mwvbWdb51zGWpL45xuD5qfawRL49eSAcA7nw8Z5SWDEnHy4abpH5pMtzdjKWy8KfqR7ah4CyrfJ5QfAnKU",
  "key12": "EW6j7f7uxYkcMaz2tbVrrw4nUxg3FZJsn4kuLL5XZ5pS4iT95Drt5PFKGVKdtUZiRHnx4Haem4MXk6hVR7kHrey",
  "key13": "5eSvAtDRX9TY6gubzXrfJAC2KykPNoB2jBNVsgHdaJYPFN9kHo5vw3ewKsxcBoj2yxRoUKYXrrFE1hM2WQmskQ71",
  "key14": "62SGWqV2CWBmCThTXR89jC8iqvCKTwh8biMi8qMoiXKQPmXVyLNPiT3oMWiJBFQbBpc4FRxLjJmhC6XV8FfJGz1y",
  "key15": "EmG6Uw47sAHZczpmsfbRErw3fULHBnGA7StbweAYWJp42tY8kh2zbP3dkmBMWNanc9g69xvqZfgd2BSNv7Ha4q8",
  "key16": "5Ukd92GQpTUcPi7t1fuQhiwKqq24c15gvuukpujtALNizVUU3vtpJBm3zXn33RH6AngAdsQg1NwVMHucR8HLBAUm",
  "key17": "ciaM5USeR4r4uxR9ZXLHDWRtP4XTFyKtGWzCEGdXH9PNpyHqU715bJ6s2HNfRxdp9HMUzuDgAZdSu8o81RTdqQG",
  "key18": "4MVtSXXvkac6WbdL7dh1ttwV6n1u2vh7F5J3GHuxsSGRSWpLeKHKNPJskXz7wekisY4ndJMq3vozHJtz95dhzZgf",
  "key19": "35oqw24fxVdc4Hk3eLhXYyM9E5xsEqEWGnRLnKGFee1NMS4D9HVrm7zHjNKwody7zRJT96apdZG64THrMKZnkWBc",
  "key20": "5dc2V65gw8cuSo55jBfoJAAMmt8MjW8deWKru4DLdxtTs1cqYuRBK6PxZyd5i8p9acQSsH7PyEuJUX4UWCHBFCcZ",
  "key21": "3dSUujMQiP34KesQaZpkgEnmpKPeejVsPWwfE1vGSxGfA26qa7RMf1WBFBATaXqpZmPbvFqzPZhWTtzovBc5ZzE4",
  "key22": "3hHnZttueNu3pBsh3awaGbJthJAsmPfu6hJsYWPZQvP8u5bK1gdWnWHuCxs9xYjMRVPxB6p9cwRw1tTo6ScvLF4a",
  "key23": "3s5K1ZWVnn3H44MXs9L1b5dWBTHdAs1uXvH96QpwLNX4SBUpV1oB6gcV2e8zvVqGRVBYR8eHT2yu4GfwLZ8ng7Mn",
  "key24": "3roYuAV4JDToNWZvAb5DnFR24yi9h2k9VAPqR8KqKQDjNN8iqzsUYgSK3bueJrryWNk8khXnR7w6aVw4FEfQ3CeZ",
  "key25": "4yywiYXqcWEKfW4ZVUkde96TF37Z1A5axSSGSnGwQ9SSeXKykoAUJArnA5VWbwk2w6PNb1HUFVPZwK1eUdkfZYMa",
  "key26": "3pY9HPMYvgq5t4svigE5c7vfcGDVnPKfajKtoRR3jJY8QTWnnvw2ej9Tv2AhjMqwQzRJRiNBjUS4L5vWyMUSwbRF",
  "key27": "33MUkTwkCgk9iVcrMtzGvro14bSe1Rvx8CQqsGQZuT4q7E9sfKLXSut6Q8xnzhJcrPgmThHceHo4gebzeaFLRfvQ",
  "key28": "54CpUFFmfFCPCS3tWXb4sR2yRCuTTgzAYXxLdJfjUs1uMGZrbZCi24RSC7E53Ya8YK4zeNRwDnpeBX2qVvfEbPwW",
  "key29": "k2324gUffWDmhkL2JWNWqaX2BisPBegJqXyyFov7Dfeh3M7rbiDjMyPzxYr9tm5gGJwLeqtbPZ3K7MdpxDU9f63",
  "key30": "5cSfV82wccqs1HaLpdk5isGYNRCVoQLhdXzQ6gyb8Keqow18cKWYigmYmm8t4ETAE5n43MR5Tt3jSN1Ro19j8Lxi",
  "key31": "3JqThQXSD9XF3wsxAMqfb7FWHpK2LDek3KJdBqGxaFEvPvj5m8Z4DW8k8qsfLUoZPXQjXYoC1uZmW25QNkWugNUR",
  "key32": "5kNtBBXY9KHUxF24AKNyNLxV6Agch4y4FQhmY9TU6fdZsWcdC9vUV3BfuhtvAhGv3NQSPi92P9c4FdMXnZYVc8vR",
  "key33": "AJGFjemRgMhY8ts3AhcNL1ehUX1hg1WACx2gxFfXnpt9zcyUtpsfjF1X3Wcs3eXDcxnC8Gh6fA4DjZPYrpjCqju",
  "key34": "2GtZDDBXM8M1ALZDGVJiKcUZEFYLAQbyLvDFx7ui8RTV8th4FWL7AvDxynohFjHufWEgjT5yxRBuSMWxgmMGcZcQ",
  "key35": "4mqEp8391q7oRxTdvQtGfQaMwFJYV13zQNYoVBRD88YEpN82MMo9roE6nccy9z8Gfov4d7MfGjCBun2W2MSD9Rvp",
  "key36": "5XBXSai2x3HnL1xSN6ZSMe2KFsDdmYJxWAznRwatgjDuzq5USznsmKpGhFMAJZ8ERP7G5QVoRwr4kTZTrbUdAApp",
  "key37": "3CpKwZ8osTu8R5gacvyjkf2diPigJkQTpvq9xH3G367wuUhCAHjLmZNBRW2ipayQfXsLivjSdSgtfTYaGN6YGptD"
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
