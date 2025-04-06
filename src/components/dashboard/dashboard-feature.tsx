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
    "4EumHYLMhAz5XbGWwiNfU2GcpasZvtndEfxTAMgxS5tnDvYKGqn1rSXQicZVDdiaMkai2YtBDELdxPL2fWJGgGag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DyvysH56B6m3CJxVKC4jbcaqY4ADXGp5Ffm9dcRZZ3QxHofQiD3v8pDHki9E1AVNbjoUQfhRxUP2ZqZ4ErqMuG2",
  "key1": "23JECMh8JGMdL7o1ydykC5n6jGoFHa2DGeX4rbGTG35AvP4uhCacysNSqtefJyPGK9T9LnBJjFdwvs1jYJBU9gf8",
  "key2": "DHHEtWGDhejpWJ6BiRiFPp7GqMggyWVQcF4NawfEe7SKJjM5ST9C14BQJEyAQc1jnhLGudEAJfuRsksu46SDd7E",
  "key3": "5pHsMfqY2Cmb9arnq1KRpENQodPeibXhgbR6HnFdVkUCrzi7Nqfxj1ZRHz4zkJiKPCUBC91bDUVW1k3Xdgis2zZN",
  "key4": "3KWFLjhtXCwWJ2BrJZMgAJfrrij774Yu1pTD68UPHSY85VwHX2ZAsdX5Tko532CNTHFvd7PCFS9JxoFVbG8YUkLR",
  "key5": "36XLaRAvPuea2uT9F2sWtafWYyEts4Pn3XkBxbrESzrJWtHZqAUgdUJWpETsNZm5NA4LuPpDBrcTEMd9zRaGTMQN",
  "key6": "3SWBVS2phqAUgJWufvvvD48MJJ9Joazv3X4SPzacTxFaSpFSFgtSdDsTab9Nj1XZ1rGDn7cLoYbG4Amx6hicZGps",
  "key7": "3N9NxBHTkan3NdqB3e4apkaLrBPPqG2SvAZwsi7oV1MTCu5qUgh6Yau24R7XpwafboCfnWSfRpAwHeNdYJuqkA8p",
  "key8": "59gxm1QW4pMxmVx45L3EZpN5wGbjfjE8TY1ZfxhZTUkdwzdqg5xAWCyiGY4bnsy6BmcS1KCyHroprLTLaHTSihAc",
  "key9": "3jMP8Y6UvxCjKarvQMQHVJyRw8kFwGE3Y5zfgTfJfkhtwExRMndubxudzUD2MLa18FwXDyJEkDiLeHMG5hkxK8j2",
  "key10": "4XeUmKvU2UHw4gEMFwZFDsQxHK7uJQWywtKpbCnXhWGKx6TKLKDu9LDjKGkYoc76rMa8xpF5TnFokkQQHNExH3Ks",
  "key11": "C36Aj8RdN5nYfDoz5rgQG1m8SZuqyXvBEmU5m8h6bDyjQEcZYiKdbGTt2FhPQ9PHNqCYdWDzcwJehC8LyGaTTNd",
  "key12": "5jLifarMZLRWKRaSkXW4RhceqUmiqB45DwjVmTryWmLVRSt2cKZTebEVgAH4ajZ4bG9VvJtSeCtqaqhqQ1hZ3UeW",
  "key13": "2ZbQ7sT7yBzyWmxYE4rwqQoK1Sr1SisyfiKLvRVeVALXqqDj5qPiYz3zTefJepdTnCmHvW9ZUks9FJREoDHd77Ms",
  "key14": "3jPagu3tL8qizmvW4Dmj7m99gMNHJvt35m2urRAmWrczp5hsdf8auNZWucEU6u4WZigr13KV4hZzAZ9g9f8sU5YA",
  "key15": "3Kv9FsqWMEap5EtuoCYmhr2a4Akb7kPn1EQKnCwVbWY7cDdhgxvUx3ibqWYcfsDCvG7HnptQ72DZGcKqGt13bUwd",
  "key16": "3xmbrU5y9N4db27qNrc1g6YiQL7uEj8GovPpg2jkQ7T7xjgPawLDsbxT4a3Kyd554EdAk6qYbcSvUY78hdRCn1BB",
  "key17": "62HkHvrWEvJj9rnuy2DhG8CfYWasRqYBtTiChe68XErQfVHdgyQ1YfAVvvkTszNMMESvcoird1Yog39fsG747srq",
  "key18": "4XBGiHismVTV42gtb5xw8yjTbVAjDme2o9nNLn99CCHTt3ZmcztAn9pfxma7abXVp859e5pa4wqMQspe6fEnwuTF",
  "key19": "3xdJXs2jgcVRXxyEt1q6yvegYS9bHBdSfZ39ETaA6UPJUhqfPm8zihta26RvMcp6RupqmKjDjVVZ5ctjtDAaZDsf",
  "key20": "rM36sWhYhf7WiVuTrUgLiR2wyvLUH61r9Fw7FNtb23YkyUWDAtYq8G31tcifZkzwpsgTNL9bzKfSCCLH15NFSqk",
  "key21": "2gLLo1QsNpvK9TmtCwXVGnUnE1Z2198BxpqF3YMmnxswkMJPFngPanNbZYSNYZPQ7GSxNfEynGzDaDoDSCAn4yT6",
  "key22": "4nKU3yKUrycsf822DtXfyZMbp5D6QkQ8nQ6JnkY7dsuLpUkXQxUiCEy5XUYmh2q3SUzxG6GDW2z9Tvii2UJ6i1qs",
  "key23": "4uruQfKhwumSAWJtDEF3CKBbvEagVXBApKYL6tSBzWMFNdmzDLKb8A3N1ihcLgwyeFo8ex3RGkm5UTjkDt7x9Nag",
  "key24": "4SbWngzionhBnHj9fmvneknR9jjHrC4CvZkZyqPkFmvaeZDE11rG5iLhniZP3Rc5hMsdQPjzXM5m7ibosCTmLrR4",
  "key25": "5yiQTZxcJyJXh5VLf5mBt78AVXLSsut9iU2PRQvUqELH5ziZ2fdh2JWS3poS2nXva8zDLDDdz3wHUNsQBLnvfVr6",
  "key26": "2NLcHuLBnqGXKZvCwdpqymZJqEm5bzA9Cj4MexGj6PXfSLUMWDzTWhmpqk7rtMz4a4k4tjuwRoANDjKyxtBpLHCx",
  "key27": "5FZyNZqoi2Rigjp7cmuXk8b2SgpXhezjji59EKe1nJZHaogLjybEMhJ6UNRQnDeWYRtGfU4WzUWv48SUUDC22WLk",
  "key28": "4eLPN2t1c5p3oGYXFH5ru7cp1C2BD6pC7E7FaUGzTFiLBJjNrh5JMru6WP4tkpGuQvY2yesLCnZLtqxRtfB9qFQY",
  "key29": "41qo4gjsnoKB6onNg8yRM7E3PseGmfpLhsvG9znTReKDJYMGLDBVN1L2LeRnALNaheBaev19DZXJtnYiD1QxDiWe",
  "key30": "2MTy4BMAVSwpWMf1bhBarv13R7mSS9EG3UQg78gSgJqkUndGLt1PU3vUVCjm9yAQfDWDZqc64N4LD8nZTZ1N6jYs",
  "key31": "1FUzpn5JER9WsW9zP2Kr9N8TM1jy3dmZp9zpZj6fX4RU861nt6Ty6X7ieLieDGiy6kQhQ7V46PtSTgjAS7Luy2H",
  "key32": "fWff8YZxzixTSbLAfjjVvRVyRprGLGhVtyWBiGHKJc1w9TDkSWDKg4dZV6KGJzwBwaNyZJjqruKsEfdQRUpU7pn",
  "key33": "2BGZfsBEocBLpmdZeVQZRp1KqX1NVL7iVaWrxbmTTWYtRSyTsCtm6JhwQVkksZ3txjLbZrqehGdSDQQHBFQWFk54",
  "key34": "2KayrDPi1Aj4UMnbaeeJTcKeNxWjYabJjSkkba32Hyw2jPVAS2xVtWSmrjKVuNWKcxnTiiXZLXWnvVaEeHF3YDLS",
  "key35": "3c4W735ctj68img7uDHmK6ZrvvYH8XyDeUiwqC7hEbgg9iaw7QGvweEREsbvH6sVg8Tk2tQ7StBBJ8vTfdv6Wiod",
  "key36": "os7EE2jz25Xr4E5zCd1LQkikkXCfxxy6LDkRo5W9mMw5VZLMCZ3bJjU69dgAoJquR2C37LAsXwyVRDryffHYyrL",
  "key37": "2ZvkatTcCqNyzMemfZePu9bh6AYBUDsMdovzKMst5DN1q7GxCYKxHrAYU1gb6TGDBy4uz44LUKnFzeVFsfdrhcg7",
  "key38": "4G2vH7hGaQB2owSZZUuX6kfsYNRJbYYy3JcCyrnS8DJuJtDUDhz46GaTr2GJFbGGrmFAEaqe4bgo7o7wi3CurcxG",
  "key39": "28FvgKwDcg2U1VoYndZDsntCN5FcNH6vAqqn8z4QbXqaXf9y9LuSjdfDgYe14UadQ8nXGTd3AEcwviLdHTres3gr",
  "key40": "mdPSL9ReHcgmSELbNqRb4SnWofbk5JAxBVWxytHr6BUSVhZtCZfmsghAJa9CCnowr1AAZGxNFseKsVYxy8M7rXg",
  "key41": "2RkNiVFVSGue3c6XfM8zieMHcXP246ZpsYSsmeLgxVGyPqXagTgRS69DqXbiJ15VAp37E5ezyodrotVQ7P4EaLLN",
  "key42": "2AqinBhX27WBsL5Fuybw6oEtG2rtvTFRm4jQTjpm3gBzPPy7Sy4BsJUAvtjnqfqSNzstNpHD7AVgUAkK9c9DbeUn",
  "key43": "5Hi3aEL6Q1sLYpPqBWmhcPLk1rHVjvDUtgbvZUcRTZDJL79u7HML3AVarCU1pcBwmGwMxwnK13zsJYcwnqCmTqHH",
  "key44": "5VCL6mK6a1AWAUdAuDacQnA5tHRP7JGKwMkLsu2ABLEroCsm4wyNi8YrQLuZBAhTtzRzoFfh7pNBV1TQUohJmnNp",
  "key45": "58w4w2RrFhSgtWCGFst8qoY6CTmox66jKqATTbauKq3agP1cpMMdNK77NJUT3KDZULHsPi6o8LF1HrvEXc6Eb7hF"
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
