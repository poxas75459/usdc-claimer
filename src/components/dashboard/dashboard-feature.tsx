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
    "mKh9DEsbjhSEGM4DhPL7h2X3G2FsmVVkGk3N67q1bZagz4EAxBS8SDnbPzGXHgmZjUQoeqSukEb5ZevDXnX6QyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jRE8uQWobdLQAYZqL7gTK27s86TmJtPZsURjG9zpViffqYD2AaE93gwNX1t29SH2mxj8tV8px3bTuAEHi3HPkN8",
  "key1": "5YVQ1ohrNEkz3NeMeXmjgc8y5zt8eyQHabeiBuWGtHGSEAitCgWimRrUqiPJhQW2pjnNiZQH1PoaTSqraTRaKVvh",
  "key2": "2FZBSVGPr5AUeE4ra1DTZsYzibrd5SPZmts8dUMxEXaDBQobUd5FUVbz22cpvA85JDLEVEFdY7qTgJSSWii1bd3q",
  "key3": "5H7Puynsyfqu6tzZETwnuR7TjEa8Tt36j2MNZAKKT84arZRGjCPtdZx23c71Y3S2d47U6oRywdpVUpwXGH8xe1og",
  "key4": "2LzEmkFp92durfraaNz5GQosfxnFCiBbeWyBQkAfepbeCkKqWoX5yUbGyCUbidG2vKT1x4ZTMuPHWnVyV8w7BfW3",
  "key5": "24xGRJL7jQM6iXuUc2wje7NcCbvWLvbGRg5Drn8MpC4JVu8TjF4rQo1U5kDXrYwa5rK5dQZ2xjSHPMrigWoeLZsU",
  "key6": "4uQuJX4pFWSUUC2HBJJz7SpyfPHW3XN3w2V6GAHme6W12me36t1TRBqESCfYxdDa8Ux4VnjyydNYjeCHZQ9iWr5w",
  "key7": "2V5RsC8yXwFCQ7Jh6s9UUqWZQ698ex7CRtGEDwLRbR7vtrAMHs32jqgdhAqHNsMgGxB2WPB9s5xARnDGJib5zXBW",
  "key8": "2dxfYAtjtGeLypv9GEUTzkP8LRq3TqXJDSEHrUp33GKARDr431JAKT5ALphcPW7EysyGF5FmS6FxLjWa16wTzdvE",
  "key9": "5oZPFDy9K9gVAz32N5ACsswgTfAGXFiaWA5QtTX5jQttQY6aRCKMgGDQ58s2K95XRXA7C5KzwgDsrGzP9xYmwma8",
  "key10": "5aJxWKqXL9Ms2688mKdfaHTuJDGXAatpC1Whv7CvRT9mYmBW4KeWrcFLtbRjKtuLBirfCuVMrS3SHSmXWPEE9hKX",
  "key11": "4H8F64iMi772zVW2gQVRmAmBMVYoTBLFXmKzzggNC1RZHiis82hC9zR2WyGSjCLnW7AWSpL6yCZmT9S27kXqyaAH",
  "key12": "3gxqXyaZDKwtvCTPZ1tGwp2hUtQNGZfzyvTkZ5RRysedbZ8Hdd7nnuhs7XRLYjG1DWMAh3yK77DwBTkod95gTi6h",
  "key13": "Rc5gYRFzHFSps5hdMogJCBFLxduhvTUjYwJwjvu8kRtBxNxggBDC7tN8m3Um2w5kz3pFbRE2fWt7MVrPcQihBhT",
  "key14": "2TabTLJK4B2eCReuj65f6GttC9R2S3UzGYwoMmPY2vtTb2amQDLF7DHHeKRmx7XDj1SLeb3G1AjPnJEC7fKC6Et4",
  "key15": "32zcYketLxRhsmkWDmMn9qoT9u1yxKA3Ss1uQvHUbw4r43SCEANHxPHr773ezpRhj7ksbx5dsFw7AhHAFkukaHwa",
  "key16": "4NFa1fxxzgmWBtj5RoCLsMfU2LYGKNJbYGNkNxramLA9y5jwC7CvwCfp3NG7gkqMs5zapfDaWgJJr8PbW6ESguj7",
  "key17": "65ZuiRXdTRDnWEewXBtyEjqNrV4JceKubSiSfTyD6hRCBpuDTNjP7JSAPgzfLaoBLjCtQAXxxrJoHewLfW9ZLTjf",
  "key18": "2FWUHEtohAZeTn2JAD33D2HaRkDCiZMh7v98PhTJ5CC4oWsJo9UHhpnQxXjEJ8kSeCB8xUH9mkH7wcBZwzgDr6R2",
  "key19": "3hpKowKZ3HVwPYyZnfAZFKZWTtKQPgXohzackCm4W1TmVSEJwPrVetCwAA9AT6GoNKgowh6fPTrbU3owSohDRFnA",
  "key20": "57g3miu5wjd63s6hp7XzaPkWKTKRrUiAw3AafiggDhzimg2ZtzQmcLCgQihhuBC7qyB4LU5hbCiRDRnwta3MnXUP",
  "key21": "3BVpUwnLeBqZ4ieivEA6h2cieDPmZDqFkh9rddAH8fUUNWrayRMgb7wTfbTRvZ24jArWYYcTPctBHtQWTgKHc6GU",
  "key22": "t8ndyiQMYpY5eGj1b69kzvPFjmToKhrpb3PSpyACDXykxcbS6KbiURQ3ibDVAdeBcM9M9XKJBPihHCTPysckPis",
  "key23": "3eUv9o9HCksLmqs48oBrzG75DoA8PKb4ASoNzty5mF5xeWce17MshJrhdb6bTmy7eoE13rT2Q37uxDXmBZitUHTK",
  "key24": "hZkecKLgiDb5296m36gjSR6mmAdxg8u5DbEdLTtPigBVuxFHEJfht3ZP5GbPHFcBbLxpRq4yWfskyd67ffv1FQA",
  "key25": "4mBbhnC69Wk8hYWWE9JnKRCMQ46jbbTAYNaMgF2SeFPFmAQRaQXStP9SgXzsVMx4fAuVt4K3u8e25CSJXHEZfZ33",
  "key26": "4F3BQir1dbW64VHGuEHXUrDnziNrLEAuLth53GvCdSMDyotj9VBnhybpHnSPZKRBgKH1qBuXPxCi2GA6aJZjgJHL",
  "key27": "61uvySByXLrmdwzwAcCYAg5fjev52XpvCUYcbXpFE2cHJ6ozcUAYkg8kFwRHnw2FVZQFLWyxpzeA1hv4NQ6KGUJK",
  "key28": "4QhaySVzEeR84iTEYRXe6oQi1MTjKYg3QS3StwSbnkBqG5t4sojonjYzvNsTDJyqXM8MuLRvcfS3Dvi8xjE65ZTK",
  "key29": "22YkfbDYL3oVBBjrX7g6ZWm8trXLx5ARUsd6ukgNCdCahaVRKWdLaQ1erkDtHNxMmUcpsMyoDp3Q73P3kpxJ9CAd",
  "key30": "2HM6bLHYKiyPhEJeLCJG2EShPfvB3mh1zxv4Tbgzb8i6Yie8He7e8xMh4HdNzpvzVqarA4J9ckKvmwPQJwW1EwBS",
  "key31": "5SNXtAgN4HnFkkAjPmeZvhfa6xsiJW4BhALSYRmuauhiMLGq67cL7WXrpDmTys6WPVo2UKMPBWiCkaggRY2q27HM",
  "key32": "32jw3ehEHFY8P7qw55RB9uf81XR1NmG7K4nbxnDsRvkMmVeQQfKujHMM1pH4u7q2yLiuBZeSPskya7VN1ri3SuJz",
  "key33": "43ao9EhDn2MErQbXLvLQCcmeAZjr6yAboM4L1KFduk5BKb674xVuCWTR65ZCZJ7rNyt9YXZdBSfaH88zCeL2DhLk",
  "key34": "CZJcRxkdi1mKNerLqdsC2Mcj8xCFFWYV1Hmh6yLHijYvKncYkHByPRNPPGHAFYrnRJWVtr9Sk9w4YuDJrycSfX8",
  "key35": "4XsEeyUVxd4MBsZeJu21JzxfhDE6zsKj4dF83S7mNYzF4Bqr3tHqw6ptBxUhTsjfN6v44GfCyKzVAtgeufuMWTBK",
  "key36": "5cnidrjbc8ezrSTMiaLX7AAdt4AuEdjdEuqJHqCuifsnjZVaDAQh2J4TzEkQP3iqUwPARagjUMXtQwiMV7BaPnB8",
  "key37": "2mETePcaXeokLyxc3EAHYr71NQfdntduKY45rmj4rhqRPa19ucibX9H3KFDUtnhnZCKr1aciwVNkWsYE5oTg7wkk",
  "key38": "5EKf5ck8qj4cXZnkeYjk9shJNy58sE842bSTucRMgjBJsBgk4kje6BW6J1MJiQEzY38aCRFe29VhKzjeGbW19ded",
  "key39": "5B5cZETFoBR1iGiGMV6ogobVRkLvEWVS5iTgonvyXdHUP6r4HFbDjdpm5hWectzyQTZErgBUFbPdiYN1ZekbQfop",
  "key40": "hA6ExWVHLijcbQa8a8kX1aRpgSUVWbbneZPoUXqrMVv4NwkshsQEJkeRrHx7DNorfVTpvGk2Fn88cxmKrQEqXUK",
  "key41": "41jKu4q9gLymB569jWHvdJT7hGRVMK76Nkj4kvvgK3j1mWPRxVoaVrGUaRzDibJ2iucHDKUKkXGMd6NDhMSJJFH5",
  "key42": "3BAjDbgG48qS1BVHSpvRJKp2XpxzQ3n2VzbVFAqhGzytJ2VuhLHTTGKS5NS2LaxxM9KFdQsZiDBWYB9ZLTMKVzdw",
  "key43": "5GEHGqZD1AVR5kdD1HizPTZUdNEaanwU9rGmaF1Jus4goMEVFV81EARicBSaiBurmABfFpPbE4KgeB2jyXuCThj4",
  "key44": "4yrGyP7VY6qik7cuZLEFXm7aXDHZU6xmyA3fWv2PhzV2Lt2tCPudxVDHyKnHRs7ftsta76tPSPYyXzXgTFBEZg6p"
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
