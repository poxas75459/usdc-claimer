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
    "3ECgMhUZ1BmJ2jXYA6QpPjf6NNFGdwjueXH72Nc54eE8bj95Ec75aC8xYPSGj8JoaB7oBhapBztH7XQeR3cjxAXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vqtgHquHKcR998fg8nN6yytWnEP7xCWBF3DxLN5ZL5GpMoxNPF49aXcgLvisUQcfsSi6QW4UCL6u6xd1HdpcuPf",
  "key1": "3iaedUT1jQwjaKPfzvyRcsxRrLxE6SP66cgDeSXFrQ61BvApp2wiSckYuqEFJ5QssbVVxBicdVeahWxU8i4dwi8S",
  "key2": "65kiWzhbP1Xsbe4FmcywPbb79K5nNouhq9XBvdP3fgGU41BffMWTQku3Uwn4TuDRKqkJag78cBNhEUxAH6xzG5Gm",
  "key3": "5n8LBcXJbdsxpsX7nieLXnmtQh1nMJVi69n6YHd6VXZc2XWGpAJhiCEQSLbi1k6daki1zC5BvMiJ8RJN1XkavpPe",
  "key4": "tgNf18nAZBqsLF5SmeTkop7FDUAraU6RSL7YeSMW2YVLpAkepZWHMYkdE7QqwW7oeekBX3f9NPCMQC2WYjFe5bJ",
  "key5": "Zz7216zPiYZQvCZDCsuEesMPPmJXp8336F3BmMzFWifRuirVjPWaVzXn3cHovSZ8qdMvrV37jz17A4EESuDZswj",
  "key6": "5afiZp1JUQtLdQxQ8axwwLTiRGjEtZW8YkaUsxeQJdpN2HE14FxppD5iRPpJ45ADKZnFzsQJghmp52fMVqXm9mdv",
  "key7": "2jWwxEwQ8CfxkJCtrdBviFn3Esm6xs2d9f2VhPc1vxsUfL6T3czCchpAdap7EcttXjpcvtQWdrCdnzgLLRJSAepW",
  "key8": "29cusTbqfFTdGdCPdsAGT2z5LoEWuBq9DiQiBbpv3k145NfviTov1Xas7T9fN5v2UuYEZVv4HgbGBAT3VP6dD1Uh",
  "key9": "4w773ASmYckc9JNoMnYCeK13h1LnRU7jDdpLqCV2vimU145Qw572JQ9EvNDJUCXX3Gbsxiw3s1hebSf6CWhbVhnV",
  "key10": "5sPjqdKHpSGuDgNGHM3Y2mEm4b6reooTJYJNCsP9an9gTbWEZ2Dw3icpAYJP67hE5ze6tnbXQW6Vj7VnozeXqf4i",
  "key11": "e6dypbUFfjFV86McyUVpEWWNcEtKRhzS2NdpGeWaSZ3vx7BWdH8KyE1SUmcSGyzyTEEU4Y7D5h8FQriKRctrwps",
  "key12": "YizyBA1wDxCVu1V2o9Xdgj9b9yF6Y74m9Gu7Mh6VGDYqGHuELqc1Ye3WgWqUHZTpLso1xdduXRGhHyq4QKpFAHj",
  "key13": "KW7wcAwRPCF1CjW3ZJNVazcHK3wGD58T6TqPMTC5v1tRNzXDSCoYtmhAekaS57QJze4ub7YuCVcBePfZvPKbPfD",
  "key14": "4gVwf38ptcFiRxDYC5X1HQSndmU9saJ1tPrBdrNEbi1xhVjosQ6NZbafwZA3xUCxaHb5NRFU5cS9NexzMNk5GPJv",
  "key15": "2wiL8PeN6ECm1groQ7ZKbwqVLKYL3Mv6fZRBTMKDQhWuHczfq22cNL24Q9bq4dz1jPNYAyJgyJLvQHiMt3vmYL8E",
  "key16": "5yDeSZw6BUqy8HV3QV599BFXf79wkVX9MnTX95nqpamu1KXeohzKjiXP8VvYp7A5qyem2NsZkxyhxrsxhnEgdMSM",
  "key17": "5fEQJa7ENBhEvS6zNBkSnSLGGF4nWKkmN8qjdGDZkncNUvXyUD68P9zM2omYedUyicmzHh3FFpD4YwRErrfWjBVa",
  "key18": "51qj9PyxC1x37WDJWu8y8GeVTd45bbwu8RnYV8H4ddUzAGxK6Bh9vguv754zmMQj5J5obaFQ7sQhngnCgmvVrGrJ",
  "key19": "3V11391U4KgyjUYviwbxCMQ6Xj2kbKZQwPKS4N92uY35tYGoeSVYsRd1w3HGRdGaXUNcJKyRoV3RsT3qBa3RV58t",
  "key20": "VUoeECCWoTn7eTigAtLk5KDcNGB34SFdoTiWUjBGgprA9WT3D3yC6dvXkr9EwqyRGfCCP9K3ivYrQbEDnfoBv2x",
  "key21": "4jgWPvHfkb2TpBRweGxEz2j2Wconncq8WdvN9dfeDvE3Cku4D2GNhV3DUFCgJTA4WQjZZyV32PWYJNd8W3kE23Ea",
  "key22": "2FTCztmrbYnagQcKCHkE3BLtm5t9XHkBHUmAAuyit6Bh82yf5oUcXiCFkGbshwmN36XDHzD71bSSF13edCnCu4iQ",
  "key23": "2CjZ7skC2JGkZs1QuUvTg4GUfkidGqcvx3HvTUuRaQnAhj7osU79D7VDqF3dcrTMkBtk4o3nCHd3ovbH6oD1nKzF",
  "key24": "5aC6stZCbTHDyidfbj2GVPFC1Xcgpet6LLavJijnvj8hH5iYbVc8JrGgA7WHE78Z9nY4Mk8GBLRXJLFhucS2qtCo",
  "key25": "4BMNEHQaqQ27mSuCkFxFnWbbxvNBotBGobCKbcG2DAHn8HwgY8ziKnizD1zpBdmpxZ68ZLSjLKZaq6hSmbU4Z5ee",
  "key26": "4dFgscVsX83NVVPpoa8erwDpY8k2UG3fYNCXzct1BYbrAAYSUvdp6eproYwySuxRxwQiA4sW1KdP9CJetWJqG9gQ",
  "key27": "4y3wpcnijkAk4VBkiqRkz2AvLRRCc4Jq5yvTGUf25rnSyeM7DSrfXzbxbZy2gd3pWT1G5F57pJD2QUs3i8K4s9eL",
  "key28": "4RYEbdQDZqoqhXSMsUGLWfzsTZxov6a3zTc27cCLfHkrN5fW9CDwCjduNvrZnjSdVd4kicK6jSdT2mcFb9a3wisA",
  "key29": "3ZKdAEJpCk2GigEC21PUpzq9ZBBCBhBdd77r54hxaHforGNr4sZYaXb6SeyjwX8AMkhx7uqQ36G2NsekQuSV81Xc",
  "key30": "5UduaedqfBgYwmPTZGEvWbGHrGwgvDdpnMMuV93WcQBjKmemksLbSP6VG7bpXRQmNVZNJ6c4btL8pmUUjmKa3u1k",
  "key31": "5x96vnUBq2AKa1icAQXDNwWUaqDh1b6p5YemADWfS8b58ZVjdLRuR6BqymVYiJKhYMbzWu9xAHW1Bs6nZZnwmFAG",
  "key32": "51mf5yLNQqdeidgWrGHGf9r9VeGZTjab8Whmw5i3UmBViHDbx4juKL6FLTRzPVbkvSqWVgpyS1CY3DXWSqpvMiWp",
  "key33": "N1pjBRa5CnM9CkX8Cc8onLyxTExSTTv6B2EY3dGACi1KtGRcE1CCxSA8jgBX4bjU9g2xhn3bDkVkxCcSanwU3yp",
  "key34": "AE8BFiDmTn3nM488wQoNsnbQqQV9PZZLHUCJhCDrXZE9RimeTEcBqmcAVZ8fH76tJdhwgR4FvXpEWenJZG6P5Hz",
  "key35": "4i8FqZVp4Dnm72XUFL2FTAKgXZZ1RRWSwwZ4KSbvdxEFx5L6UKRTGfJ3UwXw2QZRoe3A4cDFqzgfXhu4s5hq2MVs",
  "key36": "2ErSAa28WH8ygVfydUeFkPMEVLvb5nZEKcqFRPuqTeWw5eP1NWyLaCBiZW5S5FAhUDAnnrV9NCfHDA6X43ezSiTJ",
  "key37": "4Yx93vSY9u6Q2Y2Gj7n7whJuUzb5vCJs1wqPm6SKFFPfQevx83m7gVqm6bRjkE7SLFBrFrpJMRgmYoRobtyBs98J"
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
