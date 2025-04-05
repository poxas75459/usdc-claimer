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
    "2ogpSoNdK5BTFGrw3xFPVtXFyCPagWSYTWYJG1Ud5BSmvjNjJea1tgPhWyfiTrhrkXrQTRRbGet7XQkuztRjGHHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PuXfxnqDHLMAeWZXHgDZh8dtrDycvwerpkLaRR9RP6Th84s6vECG5vkFJ3uFFjxqrAM6bNp3SiiHb2jjUqTGB89",
  "key1": "4cPYWY2PpX44aMiBRVKEnsYWT9wcHWBiX4y59TAag2m6DskArK4jW8s5vu3C7zDMcPMkXYFYEoqv5eLSC9TLikyq",
  "key2": "i6UnFeeR6iHYiudyd2sx3LcVDvVCXuxrEoxQG2nBXXmpSLwM91Uz4tvtGbbfZNoJBLH5BktoUPLcKTocyMGAcZh",
  "key3": "3aBSuy63C8TYT2uimuzXZLKWrFURCpvxUFpxLJNgV7QiQJeeJcy8st2p8fQ3Bg18RWBWKXy71UJgGN2CKUC7qrFH",
  "key4": "5jgZnhiVUkbuHcxwY5uFTGc9NnunpudSSoQtxEBLfSGBoQU5vZeeSu9FgR1GBX97x2A1v3UVjjxwrZH3M5y1ytZj",
  "key5": "RBiFkceB5RQ1CFzW7UyPwYK1n67wuSSUzNHVqv3LXsJG6PJajgM3hvnyGHaHHpdoQXjZESD4gABqdBgTqr1DR7R",
  "key6": "2D2Xik8hh2bYKTo9pmm7Eujp91CFHS4BvvvEcXP1oD2TQhoKKnHaRm7VVHofACjMNgHt2qbuf6bkYwbRDgKjhvEz",
  "key7": "3M6B77CTcQcYD4ToSBHEwGzsSyYxaqp7JhT6uNXfDxrkD7NJDz4KG8PpHRxERrp4VKtg7vyeqkZL2pnXyZkMtutx",
  "key8": "3XwDasFr5wkDrnLXxGCFLw59st2NewJp3UZ7Gb6XYhaK8rSx65rTGZDoEQuzf92abafZipQoWBywhqhtjQJjKwxP",
  "key9": "zDWvm6gY8vjwZvNfFGrLFgozt43nb8h4izJhEBUtM8KxSTps6MHmjwYXXz6LdgevWJURPEqsTNBEDELPGoWUpfg",
  "key10": "4eDU1WhyLXLWooGJsKPDPdN9TQEuSSPbsXJnksr9mDW6xnEq2DxDqpTumrHBU9zg5w7afXbcG3rw9D4tAd6ZMgky",
  "key11": "4bTdC7WoBU7wSEf8px3dHmWwFkiGRTifYk7sK8aCU9YkVoy62xX2f3RAD7BuJsHiRZmHean5ZtbCb69HpEF75U3C",
  "key12": "8ZvU43G9TWNP9mWsibCwp4jJF8GZBXsDkAYSnLxW8fQJb8iv1HyhMPgq3FTXGyENwZ79QhCYNSye5XREwiQvvAs",
  "key13": "3f6v9Kf5d7wzfdmfMaC4U26cQfdNrzyAsEk5eMcqwjztKFahPqCHhUzLhLXmwrws37NdWy4eo8LnY3yh3WYYPmZK",
  "key14": "53jpdEqsvN1VPCSa2udzfTVgUM1xwaaR828YBqcYY5KEGM8YCGrmExU2ieebu8UvzUaLJm6VAtpbYSr4Fr1rTkiE",
  "key15": "5hgYUbDN6zMM5Du2S7iZ1C4uW462g4CUttSfapqCxxsTWnJocCSAauemFd8QSbonpePWpgGWbmqSg8ZgkrgZYkY1",
  "key16": "3pn6fCFvwtJuS6jfzFjHnqJQSbrufhycVqokQmE23gZRzBpHz8FJTZR5tEVEWj83xhReCv128HdXbwJDWUGn54Z6",
  "key17": "4tcnMUMxeGjxmXdvTW9Yg7D89zeRZgZJEY1pn2MHT3qF4mE1zzA8usLEQsVQNHo8w5rMCPe8mjwBT5jVZpWy2j5F",
  "key18": "4SSMkQMr7sWJ5eqqELGgUXVMaDko8EeCq1Dnh1jk8ibgwtohSZ3HgMdAjzac1Cmkn8mioufvxbNYew62a5Mv9L1q",
  "key19": "5UcryAS6TxK5kMPxyGvsotuECHHdJXucV7VhcMjW7C6FYX5Xiv2ivA2MATfAaFoDJmfh1Sk3vmSiUy6Cge9nZU8c",
  "key20": "2BAh1mWdSQJ3GRNy7TErfeoG8Xzb2Wxom5tCWDQa1G9kXhW4KrEUMkoPC86mnccGUaaNXW1pRQ9gc2dQ3mHL4Tka",
  "key21": "4hv1e8a6cc8W8bmEyXs88DWtPspZMLCZFk6eySAHRDJ3JWa8tzVeuKJkqMcSwf4mw54GBULqSKeAhtq7FrpVhbgR",
  "key22": "55MqrWhcGfGK1inKYCCNijABK4mBb8Ps7wnt6fq4eRuRYasrXMtAenM2haFMCrq5mPjFz4CBKoFsPUmo9YzBreRE",
  "key23": "4gwKZtXumGYYKxg6obRkmLGfqythccGwXGa6cPuE793AFWbYcLRPHUY6aeJCfXbv79EWgFaWmAbjcAGfrvTudMya",
  "key24": "yD3cHDwrKvhLzhQqYWEBxWNcDf15zmcb1anRBzPUfkxJf15vQjpGN7vR1eVUJNKAPsRcjVU6wNyaXXT33foAfpA",
  "key25": "4xC6p6Ry7q7PvkbKTJJbSMbZp62ypRSMDgPp7fqn4QckiFA6Q8UmcBdZMoCrzYTczt7KSNE4xiVtZShyAHdZivCq",
  "key26": "y2At8k7kBkLuyaFUB2AmbPwywCNbXbYPbcg1j2sJg7uVtQHJbwBGyKNk79KT2mehhhY4mEfVCNBryCsLD8TBnSJ",
  "key27": "28PaA4FcdLKjmUQT7P1uyegNDgaNWSooJcRStLscEqxV9bbozzJwnmBa3AdPf5U936Fi36Z2yDpieQDcBZK4MhKu",
  "key28": "3V5E2P6B3gXCbxFm33wKS4LbWXwpdR5FZCQc61u1sQyN6Bt9GESUUrfF8ph359XLHfmZgjx5fi8TUWB2pDAAreKc",
  "key29": "3ZSDY2syU58mYAqTC97g1Z14oHckTu5N3bymXyA2UatGX8deqiJ12oqdQZNHr8dnqXcdZYR32aNfnJtX19QTa92V",
  "key30": "W3YtCxvTYR5dQQ4cziRPHLf5GCw9miDk2ZaWMrFhk2bEdBgnUwgB9ixGXwcYm4hezQJYuSCeVvvromA2kWgQrdz",
  "key31": "3TDzkEHV1v5wrPtyWVJWQyAFvNG8FZHJzdRf196mmw4uYYMKkZy2auEcZtHq9bCYuK6asnaoGDmPAdpaKrQPrJhW",
  "key32": "E2CVtNxPyWH65veMKH6xkKV1ZN51an3Fb54E81eZta9oevfh7H76pHJirV4ajg6MTHRXRLqetYHmyvzUss2WUnd",
  "key33": "38hMh6zGE4nk6WfL2hbwwHimf6TMDempS8ha9QxUioEwTpX7bcVuZzysXzqGEZU1XnpeNV2U27BJrSUvyrshVxys",
  "key34": "4nfiAbCVNRc8d9Fu5tXspDYqSShGF8tfqjeLaXtmM8K4NW5y9zQHgFYn4yUa1KJchmjVemHPoS147ZA6GEcW1d5Z",
  "key35": "4Cy85bThwxFURaDafnfKF7JqS9SmedM2DwBNdZguE2UNb3uNLfRTrGNeXquJH3Bewo1NpsMuoXUCNLb3NUMEBZ1t",
  "key36": "535obMvaXwBwFn1h2mhT1ogW9QKJ5RbJGWGyMHxRP4jce7bUNEKrSHDR85FneLpBHum6oJdoTRah7aFkK64HNARa",
  "key37": "4ZMRpwaxZiV463yiwPBrnCqLzaPsULCu6JCcX9dSFXvzm3nZ9rauDTbewtU37TsCsJxq52pYWfR21Y6XoySozoFi",
  "key38": "67Djvu4ML57VBMVxVJbxZndQ1C5VeStxm4tk75uLsKJNYZy4B2u8KG9DMzSk6v4gx4LoKKEd6h3wcw9TNtZYt1K2",
  "key39": "4kiGKWj5gU2PgokMbDJs5FXD8dc7aALYE9s6uXHDYJKUTUs8toXe1SwqBoA3nwV5LrizEDWcqbFJUnvmWQzeE7wV",
  "key40": "3665bzi5bsEAVmjrRtByvnhRK6zcf4YjdCyECwZRcdj3rVvFu11MXu97ueMn7vSsCNWAV9SdQNcUZxrnTVbmw3Xb",
  "key41": "61XKxHnEwCBo38GayyKJBot2ypKSrUKFSACRpCV7UPGijc5mDstYz3F7dkeZdcnVnn5RiNTeQe2GTeXKQuBkT7iH",
  "key42": "3DLkMatH6fXQhubE36EyKm8CgkdGbUKK6DfuaLuUoEzvQkv4rcYLKEDV3dpJh7uHJEWEscZjKVrxvbSTscUw2A8D",
  "key43": "5Jg1Ra2X3ovdZm5LxzSWqxNZhnSyR2W5getzrnp1wZ1xn1dF8uvEa2T4YSa31sVhiushaL6dMHhe8AEDBW8xvo9a",
  "key44": "4d3iP95qLLj7eBzxYzAEv2vT6oYLnMavN749gnKWKDqBWTUimCxfay71SM13SrfuvnF51hvUNsw2AxCrWo3bBF9A",
  "key45": "2ey33VWgF12HkMcefQigey6uyU9g51rBGQmFR3XrrbdQrb3JtuvMpf8Q4wXUqSLopAhDjV6QRyAyMFJDmzEwVkki",
  "key46": "2D8Wi7fkgGrdGmPRb9BgjgyQgouRk4Qo8HvQWBeL9pe4ARxgGZbrobCkSmFZcQATvvo2mUeTxGYtAFpqf7twHHLx",
  "key47": "2mqzRTkkwS7goyDecd6NZ1ku3SGKvhfTDBzEmXpy2Uqjpyzgvdg7s7a82xbasjKikTH8hhXsw1NvvnNpG3HgmUMK"
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
