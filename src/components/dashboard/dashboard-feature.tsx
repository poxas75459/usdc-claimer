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
    "5mPqqgzSpvTFvjHiyKnUg2seggfMpb9X4hdx7WG3jWYN4hEJTsngt8joPeiLNRh9CQM9ohQhFGXS1vWbfm8vnGBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ASg1YUF4qUBn45f8wM4jsxLsjpHhSjiMWUEo9jhm83dx6Q2yU12Ad5jHWqgRryDow7R7mfQPjfH9ZLwi7gYEta7",
  "key1": "2AKTDRyqLQWFk1P1k5s7GLFWLmc5MEFdAXsVVACZeC3HCoi9wdYFcNNPwiRVF7NPcGTzaeRtf7bdbJeRURbxWdzv",
  "key2": "HFssqGh15vAizdfKXfKaxHT4SJWepmTsqY2mVJdRUfV793evSPfEKQv5gydX9FTaiPLfCGdknMCjcZNQjwjrtoo",
  "key3": "5Nv6bPTfeyVLWtxSKexm9pLZv3P38d4tVTq44sF34ctSSnjPiTTJzzNo5r79vnn7bzwECCBABbvbKsfYZ8T8pxvY",
  "key4": "yaGtQDNvQLnKFume8JAnGuW2Xq7WLfAPZn61NHB3hp9TrNTKZLukQSw5Vv6GBfixpACfqk61AZUUnuHDvbxmGYz",
  "key5": "4YS3h97rZdbRji2AGHYvBgECLCFfvPizeA5jbX5gitHwKNJS85DJPmrHWm5HJEykszA9cLRfNzk5kVF6Asz2YEub",
  "key6": "4vUJD7D31qt6HthVux6biTboXnwrzS4JfrGs17RvEgeJ52TW3i8YmoachijiBBPkye3XN83H6LCEwadhh43kNYiC",
  "key7": "5xhwtF3hXEk2CyNS6yzaFBuVyjQY7y6YePrAqPcsTYBAhob7bWzu3xxgn41tSL8ceodjkmUjxLtXpg1UQCyvUg4L",
  "key8": "5eNyiDxsmWBjMbAi9a95Gufr1e8DQmpZNonnJ6sjSbqnV47LKhTwe79SP4uQ6fTd3E75MY9CNof8X68xDyhuB8UC",
  "key9": "ZBCqAj9FWGNSF46e6FXbicBazyShzd2epsyUv1qXb5nuq8gcR71hW7nrcCYg4sHwew8vNm126Vvzq5NMSNvm3Nu",
  "key10": "2qY5pNE8j6iuSURFrBJHUrjKGC4EFbtDX1R1RKNGzwfKWA5Zqw9zb8xHWuNJvCGeqQBjQxH7EMU4uwXdF1tZUL1o",
  "key11": "2HGdafeondqhZ4WmL8qX8JxB5nJ3x5SarqWyojSgvaUP4TGghbVnumf1MAqqB5JZvxcJUU9zn5Zwv7P93kL9AK3b",
  "key12": "4ZxG2HDVFBqSqpUouQAqGbHRn6r88maZxRF71hyfpiz1brRPe2MemriagTF5zYcbLcQUg2cdSDDmFoDzKWA4zCwg",
  "key13": "M4TYK4tBAqbwqgz46z7VTTWiXfehDM9M6dAN45ZhpuadrsPJKGEPq2qMFM6w95XH3ReZgSwt8KmjLWmLuaC9nTT",
  "key14": "dCJUnb6XXoKyvZ2b5X7Fx6PxoeYc4RkxrYzH1ZzCcJaaZA9jUMsPnqXxHCd2rK3wdqTcct19rgjiGwy5jBDmA9j",
  "key15": "2zpd8VWswxMTdCFYw7CRXy4QWtFQD6fn8QusXNKxGc7VjiLXnd4xchEdG92Kg8JmikY4GsH3ErBbsAYuhHQgDn6z",
  "key16": "5gCFE1Cu3oiG6aeTRTQD6SCaKv6tivLBAqzvm4MyY1kE1tuW1G4mMhCeEu6vPbbLMHaJEBgmsM3HQ5LvNDVmJLDh",
  "key17": "fpzAKNRBpX76k3cParN3o97whyYfJhey9fMp8MSFgAXeTWweZot92UNz8ccWjqa1WkDhdEzeND3zp6dNRD2ZD2D",
  "key18": "2MCWqv37ZYjA8nhjjse2SWijtsVLmtnjhqTvbXqkZUjbZjJhL3ZycLiYL3N8sZ9PVBbGa1Tigy5RbL4jq7im7ZoC",
  "key19": "5Xpvdw6BJvGhHHtRjKog3qGyP3VPiryt6p3qV1NSYQkEGg1aQE3Bx6xd757jKu4H6GUUEBfBeAt64nWrvJmQvqNk",
  "key20": "nTGvW6F4pCmgZy2jNXYPuSyo2VtTjnaaPc3WSn2XNVgB1CP5iRnvKj1EDRh6nbeBCAX9nQUJhfTZ2DJktT6Lvyy",
  "key21": "5VrTimbPH8DJFyPCd2TLrxW3tEgGRqZEtfkpxjwUT4PUkiwK8rUwrfSdbk9HaykEyVA9me34SQc4ZDKieJ9mL77c",
  "key22": "3JEorJzLrsJj1s75wVgLonLnkJoCBU1ZJg7nsR4inteRAmR88B9jwUfadSu8nC8B9cfjAupCjmwQpDbai3HeZE5s",
  "key23": "3JhZ3KeYqnw5gYtL1PEE5irZMEwRM535fTmtXcqMpYBF8QLEF54ovuLtzJZsM2aGyvA3ADWeDaWJCTNcsdtYQd45",
  "key24": "5CyfL7VHCVT4LVZXgWitksEjFLVZFiLo4wgAE33vjokWszo5BN593XyxeeUpQgj5bH546qQaFaGjj3Wp93FCB6rz",
  "key25": "2Wad2tWjiNg5D5LADhDJ9Fd1ZrbkA5xQK4xb9XSNU9ZK8BvYNBZVkzWmTkRZ42nU756P9RLVnfb9Wr48f1NLXiiX",
  "key26": "3aiEgLSWw8uPH4ND5wFUFbse8ECPQMJwffQqfFz13kJG4pWKk8UU2Tcx3Qw4PnXsZSbGH9YBULKu7ZS41GmfgJPa",
  "key27": "23K2T1HJ7AnqzDvMKmTPKN5CRY7GUjjZZ8W168JccB43GegPJ4eRhdNqPbrbzsT66vfLxh6NFLb6wx8gDhap1xfa",
  "key28": "2Hg5wRaCCdTSTrmDre8UppMQcLqHNvi4Rz4zdT6FaGaRt6rmYKci8mCkTUarAjMog3w4NWMVfGFHtUcyuQujttTp",
  "key29": "hPqhbFzU5AVTUCEEXnWjPzSH3cGm9MHnu238Z4esy7DeKRRBNjea8911gLcifxdzwqmc22yT9e9Jj3jnBwEakWK",
  "key30": "2pR73EDxcfyY6LHf2xzVbyT9fhTKi9TbZdVXe1J5kicpDJiMVTpYGkLW5EFmu45cQvjZSpHdzyFQWnWW9z7GTpDw",
  "key31": "4aTaDbgzHoHnysVtib3o3epPGpXW4ArEHji5bwZs7daend3M6ELYWxJQLKfzvBynWDbawi9bojBWNfDCtVzNELJw",
  "key32": "597JJkzGkJ44HRxd4LvhzRhfGSw2Kc2ETM6ZvG7W4A6UPHCFssjgMtTJ6ax3CXi824nac3ui2WDV6w8pGkdFuFT5",
  "key33": "5SbmpqBMrt7PCphwnFvJysReSXVDfFNmNqG2s5YkEArTSe9bdBHHKnNb3aQ4HhShLzyyhFGRM6zMnf25asaACiXx",
  "key34": "21xWezvFrjrPUFtJsHHBnrv8rzZY3RTPwFb2qVrjeNV3843XUR8RGC69ChkNZfRtEBunABf9hVdzBNyEQMTzYDLT",
  "key35": "2yCD8AXitNAdyao5gNK63NYmRd6Jp3W7oaJsw5FQvkjodhnvjfQhtSxB3i4pJRuoqCfEZHYjejxdKf2wPzH2cAaV",
  "key36": "5EBmae7W7SL7iK3W1Vmh1se7VaVU3TamCsAf5QYiAHKzeMxV5AvdyprmKvdTBJoCwzSeKFoSKM9fDUVV1gb1wY8u",
  "key37": "38XApwMXs41RyH2auRbPPqPAbMhsRfruq8KCGEgkaJTmtDQLZjp8mdPxRmUwLiiY1RW2iccukv4ddfoWcKAn1xYQ",
  "key38": "2zsPxM9QYjNHpyKGBjiy9oUMCwrfN8TEM3ecH1JARApVNPkEKLemH7YGyU2b6LYj3G19vVZAf8UnKyJZZx8G9tnr",
  "key39": "2ttDR6PXqGZca7DUtCJVEVEZeBmnNnZmGV1jH8LQgiMQEWvB9N52tQ6K5SWN1NDDpNRUxqjM6PsT25VMN2UgfDJ7",
  "key40": "3V3AyTMy4ubGg8Fchix7FbCrxkTrd92tNjdne5t7RjoFXPwfBr98qHwFGRC5QxdB74WhpBH52R4J6AJEcF6pGtsi",
  "key41": "3AZ8K6okrfZ5KFxrRqHZeDaYQGJ9koWCVHzZkPhsJKSiBpb8fCjc3fP7pvypwSGHWzipeeHGAtQfSxx3uMZhaRM2",
  "key42": "3Dv8JvVE3vzno43RJgZ6TCha1hJqSN55uRZy8KZ74m5aa6ZNsKvhaG116mmksEaYQaihX2TVJswwURfFVGw9yLL4",
  "key43": "5Ts9mpdonXsnvY3WdHStWkfmF9z6jBMenacXBZA1B8FvU6U7Qe8e6oLoyfaDmgsXfvczZsbWN9Pg5FhhLqcSdYjb",
  "key44": "3iqMa9cxzGHs5C1b9GydLLWC4yieD9YMYXz39dXpHJ8CmFn3NTxtq7zwacV7h2hceLEcryDc6QZw1SfotZHc9XZU",
  "key45": "E4uqjkiApBBBGeWZHJhpzFLVgx4cywYJm9CWpRf7eAzuu4gttjGEHqTh8pcV12K8NV717EMUGCqiKpCkaHQCuiC",
  "key46": "3ZC9MkjQ8THG1pjp7nCyGDE9d5yLM6ekJ1ZdeGS8wfCPZ9e8XyJEesWz6q7A61wkaJHMuGfwmJNQmFNt7R66uybX",
  "key47": "4manUoDSa5JfbbzUvBBUckq5aXbxupubjLYScKXScaxoydCkm3oq3reyeLGm9rrovJbtzC8Fxz1Cw3cQjiezRHoW"
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
