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
    "4my6Ae3Dug2CUWtMdJS32Fo8Ec2ZwwTaswKTRqn37VW76R2fXwEmoAVJ1r4hDVtMoMbtrrUnwnT25CejP7eyygFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v638mxXZMNS2qsH5ioNmmY6xdTPn3EYTHVDpDnf4xkHas9AeW2UvB3FMRhYyFo85U3ZwA9s7Wd7gHAfiKnDSdGt",
  "key1": "8P5ZqqnrB31B4LR2bxBssFdcAvmdFXMXZHqihLwK2GFMYb6LGUV1zrzv4L4VmH3bPQpvtNNfmNTCVyCfEJR4wWa",
  "key2": "xjfJP6hrQrvLTvqNJkifLqRDLRWXhW5KyGQUHhUCv8nP8qZU283EUradT27uSjxhUgaRmNX8c9ZiENv2ZydSoPg",
  "key3": "3LTxF7emXqG77uSYvfRHpwXLqWfktxacSuJFv8H2BNJ4TGymd78KLBR6JEfh8yqZJRfk3iKqJgUkqx83fTnAEzTp",
  "key4": "24YveZXqCSYgnZaHao4c1b2QoAj1iThemmrHANDBiqiJEUnWRL4WJFWXASAPnXjceCvkJB2rkPyAHv9PsUGoPUHd",
  "key5": "4vdoPm9ugVPeC2N7szD2JGpK7XVsdyL6RdYfnfjL83MzNPjxMYrSX3SmRVATredF7g3AbZyNbkdAoNiomBTphMQD",
  "key6": "2BDLfrUwUUpWSnL3RuE2TqjAp26aPRLpiQ5xBy1MMdtTmyKP8fLisYozH4A9RJ8x1E9BhuqLnBpqmwP8Cqux9JmQ",
  "key7": "21VwX6x4wc35qBRXJRb3PVdUSAeGwmNmdUSdVBMUoWKCPNZSMjTHnKCBvMGykDAwbWU1XSksziR5Vi8EmGEatsic",
  "key8": "2zWP1u4tvB6bUmXvacXs542TRUK99AALWpEVQRYNzkG29Xd8ThPtiHYEgH6icuKpW7D6s5GSUAELd9xg1xUjZAPb",
  "key9": "2qEybFrYs7dSrJKTTkypo2MLxVYwFntjYbktAAAUfPQfcPq54RDswJa7JPYuSvyLjpwAUuRe2QYs94rEn5n8fTCN",
  "key10": "5iaCKCBvcXkieLSuPLxt3Bqjc3rcAWXB2hGy1bEBtWUthgTW5hfYLrNaMsXBmt1No8N8c9g3Si1yhrzp6XWpXBHT",
  "key11": "d3vMZPbFyVu7uRRHaqxv3uPk4Rxig5t7RXWj5CeXTrUDq887Lpbz6rwJEz2xrevb7W458xbBMVGtwvEZq5T88j9",
  "key12": "fB4ZkzPTCSLuHpm2DNfJ8XB8c1BmrYF7ikDhdWYzTmsS5wvMB2ty5wvRoRho67243g8grSE7tKxKw7Mgeq8nCCD",
  "key13": "2TAb2jhYo8RyThn1xRV2hCg6LcSSec8XA3aWAQsFnQEJJ2R4rhWbGizqbL9V4oC2rNAskks3eUhKrxtZgREVk2da",
  "key14": "4UP9n6aoKTabzXz1Q8tMMSMg8mbFgvRjQLZAYnjjUt4n88qRbZHAj5oMfQu8djGHHk9KAazJxcAWhnxSur2D4kKj",
  "key15": "29NtCsQJXo81hy253N3QYZfkPMnHMENuoJ2Nr8voHpVtjyRExTCNYovKwCBKBNz3pobPTkrWdTTkRKSQGJMC7Srf",
  "key16": "5uiZTMCGSG9A3aE6FQjknRMbvXgnxoT6sh12AK7BRTNiJW2vEU6zQ4NBdpHXzFkXDdNSMQvmNouhfcQgvm3AWjgy",
  "key17": "5ENVPyEkr7EukmZdpMvJf8WQdRGAYn7UXYdqULa9g5v2wB5XbVCa9WsnaTkH6cJ87drUh8wV4M861R2YJXLGpymE",
  "key18": "2VbayNPtP472msuhZMaZa9gU9CyBbypGLY41wvJdGpRNfXp7zSKx4MaVnMmiuAedKah5h9xp1z8zM1Evn8DUV9oa",
  "key19": "5TyHvuRcRkgnVYsuWGk6NTdAZupL1rkfJjtSDVQ13VtuX2DJ1afBgsgWGK3PKYBdHswxTjvxcLKovHGs6d2ZQ7mg",
  "key20": "jk6p859ST4WAaM64kAi1HTWe3SdKVodKijzTwarX79XMYMvh73pxwnqdwsjGjXawxNWNhHCBdqF9KpPvAHDgL52",
  "key21": "2bG8FQJ8yUcesVbdzNg1XRe3mXHrKNCUNWoHhFNw46buP5tmSsRUfCgEbYv2t42MPs8rJQSBGevy9JLjQrZGHDue",
  "key22": "33NjxJb5QEyYtqL8CfmBJ9QgKHKs1c6LrqUgnWcF48aCUN3VuxJET8cjcrb2vMBJ3iUSffGoXutLHQbFh77FBtMk",
  "key23": "MHsFPJ9PdS94mAJRrNmSKorBWBL4oLk9UeehgRZUJTXhyZSWysmyy1vyyaMbM2MNFG8YLLHK4du3Bc4BC5eC6MP",
  "key24": "35kq3RMGHyRwuRMw17ANHkJtG77XeUoJyinUKyA2hk5AfCQtboViuhRiu1zAnuvTwyvQK9QaBtRewcxmLb3YgsDu",
  "key25": "5sWCEy1MmFur14vy2ByuXcA8VzASVGLd1GKf52HuWWb9bAUcdVp5GNiiYCL4KwnSyzvU9mS8RHwkL2RHP216Wsxo",
  "key26": "VvTtG5GZYkr5H1KNyF9TNx4s8ZQficp1Eqa5jhFPjRo57NMsiNXxYXbju8Tw8VMb76DeTqHA2CyFNFU8GBcdXVv",
  "key27": "2ixJr9XYe2sQamjiZ5tK1krZCJswBJeTZjCFw1uLEJKNT2DkDLB1fTeJoad3TSbsNCqtQuN5ZgSUBG8Qn3uE7C8f",
  "key28": "37xxMuy8dBtMTA6G9pzaSwHRx8MwN5PfE52piudey48MVCGqHuCWmsA2fNp7dVRnxVTjGAQvt1cnExRjWNZvRWWx",
  "key29": "ToWvxMB4N9SsaPeeYVv1CQFqV33JLFhE31DxTqutPXZAT1cSri4dt537j5CjamvDhQ1GfE2WFnL7yCpZyTaxCvw",
  "key30": "4u2GzeohLJoJyUX85ouRQmLbEomgJ8Qo9SBZUqe9yyjA9YQuf52skDzyLA96PFncsmLkBNMuBZ3fESPpQsLH2RUh",
  "key31": "4ShGqJJgLbeMsduMLxUfmfFvHzpoRZKoRT6FE6at4NaXXUCbLXSxKkZdzpzpK8fnvTai4r2aPNopdiP2Gz6XJEnx",
  "key32": "2qm6yeg6DG6BLkt4FEdxJ2iZhSagoQzrsa5xRjhYNo5YbwSwgS9sawLh8j2B87v49Ao7X3kZjuGPemPCEi6wFt7J",
  "key33": "Bfm2MEJy2MmdQSjjpkY2H7Lwt9hEp17tT6tB6onaPQoEGfePnWk8jQjBqAP4YiwveZ7TePAJakYS4G3o2T3gAQ6",
  "key34": "4hyehVJYhmbNe48txB8WRgs5SGb5hgwwrZhghGf3yMzgj9dWDgVKGTnSreC7CRkeUeecpThPAPyBp1o9sq5fyKcV",
  "key35": "54yMq9EYL3Cwmh8ZvELuPGmaMNC4X83rbVKqAWhKtyBU2m8b9MH7fdbMuehjStnXd21vurCTVryCNd9NKR8MJamU",
  "key36": "3jAXoSptRyG4ybC2jGhfXggdQQR5z7Dc6Rrt9PpMMnwuhNB4wuqVSQgTrK2U9xj7bPQzvFpUh1QN2xrfLikTd6jd",
  "key37": "47JFxfzy3nYaaAZ1rdZapxvtNcjgQJvgFkDaj9WdvXttt7wXuxtk2vZCNHNdeTHF8EY7wUastgUVNig2DVg8GFnU",
  "key38": "2XqZBevn8QE11DEk5QuECi2whiBZVq1y5nxV9n29QtfToXi2H8EXq7k2guRn2xM2nVvb9PnpgXns4CPPkezYYWRq",
  "key39": "4LRhHA1zH7cqGjuRRcnaVa8UUEPMy3A8A3C7FKkVNAHXPx8Cn1Rj7CMp8dx8WNgoQRYtKMBoyXcnnVZX92bxj1aU",
  "key40": "5dwir6HisvS9bih1xCrmBBUg5TeDBqFBNXuMpZR5n8s6UHjhGiCiF3tvVpfjSsVwJXp9VBPhYjWcj73r73mjSGBc",
  "key41": "3Az9vUG3iAr3yJhxU8Fa45tgWYma6URe5rHQiUfWyHiVfpaeREfWoykF6PHDZTduEgv1fcrrozP4wMYRD94FqTKy",
  "key42": "4er4hKYHHPzMpBsxD3UNmwuyML1svfc1yhJdC8ScabNtQyLoWRH1t3FAmmFdsZQsVjT6RD8fZLAgdEdKVQbeo6dM"
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
