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
    "5HegVegEiTwGG7eA727LTKkTawoTLckq7JuS5XVKTLmJsdKLXW3qqgMZQDTXt67WmKq46Lwg9DYRie3zFVdWbHjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45eAw2aXnqSvwRVJMzZRGm7hthPKG3rJEmdhFoWabRSJACNbXt9AZQqeD7WZPMQm2YNFEVX8rMU9uLsiFfTpgLbo",
  "key1": "5aPriV6sXGSZ6nnBJ8k5RfrTr7KthvwbUfLm1mrRBXGZPTJ8xjNwW8kVCTXHB7pcdGbk4e3WT5oC3MdWcyDQ8V4S",
  "key2": "2DuxmX8CxN3eH7y6N79C2wQ5eDt6Ztuq8N3VF533RxBbE8dFavamKMAfM46LamEe4AQnHzzYxBUaj8NcKjFsC4aT",
  "key3": "2wvWRVCpQQnSwgdi5NGiFg1gbrwPNxywqMGmA88xmYRwFc4uQLQB83vrjj8M9c3KnhGGN45aJueAYV5fUDFtvBWv",
  "key4": "2TjFWhMZRY59A822zhffwTL7PpsepRyraTwayJKAH1p9jSbq2neZq7NXvSDec9YKCFRP2VhrCYVPpA4Jow1pvgSJ",
  "key5": "3tnfVuB4SKpphCrwenGMEGDY26dbDL9g4faET21BvVdyLNL96ecjgrNbfdwf9owLzG7aQr5uaSG4kzM3QHfFWn6c",
  "key6": "32x5GGKSTkfh7DGnkzvHTbdCd3FsK2NyZGe77i2GGRmba5d2UPVXzL4QHp8S4Rsrwz3N9WRTTx6j3cXZzVhuxuKT",
  "key7": "Xk1ji8m9LYi88fQH4oHo7zTiTuVLyAduh4BKUzunvygEB6NV8hgTkfa1vdh4XbWbtL1CGk3JkdmrWr6P4ufaqx6",
  "key8": "4PFkPHW3BGZW7CixeTgWY26XYUTMgJpY8h8o8FqBfR3u7Nmet71BddnnPfBxLjiixhv2saypVfNBLDjtSnGuXs4t",
  "key9": "3dakxF1Gg7Du96MiePdqmVQkfANwjwhT9wuE6hbtxcsbSSN8XLeFonFx6hJER49gFTRiiBTaE6nt6HVi77Wqsh58",
  "key10": "4PiAoNFwrcTKJePv8Yn7cjf4L1YnSXGJJQfxXHt2XkVfCQVyhuqwMDDRyKiyNHvfGEWY5eHzegLkkFD51JpZ8WHg",
  "key11": "55ghWuUW2MhRgvTtYqiTJ4GsSMgap1G6YKzU3GZoEPAQBVtBowWAeZYeZDg8M6GWJWK2TeouHoMuQ2pCMUBe3Mtd",
  "key12": "4NfsEymYotfGK9aPt5NBFpK9wXWyZe41NnVjrSupJfP2CTT31toRRuucRbstMksH1pDngJpAKki1A46FvwjeMJhv",
  "key13": "4A6VF9HKqkVdUkp29quktpWTKqTenbxHZmSzZZWPNNcPK8oMcRUQ6vwDsV5iurk5oWpxqfxXyH34T2zBFffBSUkc",
  "key14": "364imhw6BNbZDH6xfGtBxADVczgQQasLReHKcwW1zFvvkkDnj3k8cDsTKcX3kNaqHVTTrkdb9JAMq6yvA7YugGcC",
  "key15": "4iw9UzCdHTzqjDqtzoVN96tSQLbEAuRybZRq1kQBPMsRHE1WeCuTqzFF9feV55YxeLZE3D9hXiKWz57FRMHxbEck",
  "key16": "2P5KmBY3JfwdoeSdmv5qUvdUebM9XrFkbDrCnYZgYi7GXDxaBjdDSUrWrnD6wwMZnSpScNJ6nPukMoTv1KTp2DRG",
  "key17": "42ENysSLrKY85VBttKDm6RHfn343U8DDyEjcYCwDroFXjmVwfatkyyPPxs7moFPmR1NNJwXqaqvSwrzpMc7YephX",
  "key18": "5U18nYQ9N4gYNPu8wEzEickoHRZjAEun2D36USXH745SMVBDkQKyeaH2idfGWbfsQ5q6S6o5xAM3zgkDLFiGLTez",
  "key19": "R3UuWJ3KDW4da8rZcSz2qj4fPxPZKE9v4DVSPfVQiezHgD8n5U38A6LDGgt8iux1PgHH7dnuBLHzVwN5oxmmi84",
  "key20": "BZtd2iQHUBTnEkRc9FvPrNvS8Up5c4kEVvpWWbBpxH8Tmc4JRhLrcgm5vFJB8bm3HCFKkJuzaSGGQLqPAcKFeEj",
  "key21": "4uFeV5yfc6hzjfXtjC6KpdYQrgZnfZ87Xi6AsfRMKaTHacVPmycTciLhecMTU62rjuoF9mwSozShuvEx1cVbkdCW",
  "key22": "5QykiYfM11kUmD2stMbmnMyg1zHS5rUo3VvES2a1k55kVy1daHHZK43gyzEaynSt2QdKVrQSNSW3QPEmzhfXew9g",
  "key23": "226CBmCBY9wNvnq5sCZdApXCgqU6HEzmUN3oxPpKs4WoGKNajQSwKSt4sk7SAgTzrkysHsKY8B7P38Poevyh4Kx6",
  "key24": "4mo34ftws8UCRXRgj9XzuRsrCDmdY9vt8LWkQ8W3FfSn2yydXTTHJKD7vgbgXXrQmDxAFCSdKFadX2LfmwJCRa3P",
  "key25": "2Bt75Qeotfywjn2hkEJ6ARfCbaXmF8YDQjfrFKoCAyLuhjN4kJnvKD5ng8jQCisDnDUGKjCRKqLK1JLga1yDiPhb",
  "key26": "2rS5xYbuZ4VvCKVetNW81h5WxyYkeMWqiNSjygYSuCKF4c6QAgnoSBUG6wUnFGcmEKXyqCTaFSXzeLFgur5mJ9Pj",
  "key27": "61rHRKUFpr29Z2E6GPA9rk6ffa4JADxenbCdJm7Rm7B7xYsaH7KQ2yPiQvvFcFDgtDEHTr3AtDwHYnatwrKG8uKs",
  "key28": "2SYvhDZAdU79gppkJFZGpXN2KW7bzhdxoGwhudPDzBpWpb6p9mvW6ycLhC6xgsAEN4hZ61b9Q2tw6S6TgE6jnEA5",
  "key29": "4QoierZPbkEKbavhRt4gv71JHavRWm7xHEBBBE11VV8S8rS17fFSyErM7LVZSX8oTE11AVjcEPo16fHLRgpswpxb",
  "key30": "4Pioj8buzcQvjGtYNwDuzKj8rhMiGsNQuSRf3MK74NPT6fVVkSQGtDMj6btq3CYU5N94U63PZdp77oH51qaP4r6H",
  "key31": "sitHWSKfEKS9kXYNpaeULKvwBvNiZa67vwa4TzEdxWr3aqo38T4tTrkEs5F4s8jXo2QXfqnQPaPtUh6c9xbxySv",
  "key32": "sqkku87NPTj6cSSGD7tN7ohcR2i2sEqPJrYtw3QoUagNyy3NuQkkS8rf3Tifo6tydqmJ61gNMv46f4FtoPZAE7W",
  "key33": "5eP2pyWa1itFDHJB7bDAMXGNG6QZaSxtaEc6J3d8p7abf2CpgkWZbjvRmchB4d2FsvU22ez5imZEppCqCfGtSCV5",
  "key34": "2Qy7oDJquwB4XP9SSLneWC7naJpUDos35oJC9puVA6TathzhQxr3Yxwm5HvFe5RCbtKxQE5VqGd9oL1MeCPwBYuT",
  "key35": "yR9BeJErUnaWtEhKVCsUDkaa8K2jSySfLQZ4wu8Lg2iJLHpJDnpdnKYwwibU6ci9jpoJahxDHGmB47VV8hXRQY6",
  "key36": "3wTFxfDQ1MoKUchQuKaTkZy6Wtz1wmuCwwrhngiNsdBikRftma79JwULhxTad4QjPin6Qvvbtuotkm4YWjAQ1Fcv",
  "key37": "3A3T58t82o3Jhs5gd27FhZYDR4VrGEkrjXADns5HiMTmZu6qBR512ay8VFGVNzJ868uyR98WBgKpDrddoMnM6TkD",
  "key38": "3ahahF5QQvf8xzjhsWeHuBw9f9JKg7rdbveQUkhTxCewD2UaeEAJ67trS8Kcj2PgyNy6uhFyFNJURmc7BNKYTTsB",
  "key39": "2JeXMWYyMdnyGhJGce6x49V9knfE7EneFD8147NqwBehLWmSVex9u3XyyCM9Exd9pJEhj18XamB1CBM2TpdAUWTw",
  "key40": "3YQ1c755cmz31trbZi2PaVY3uyP8NG9Aamn4fFptHzm1F1fjWLPtSnu9Nzv1hyzKuF4EqGRhiqzjWkMujaiPmxVC",
  "key41": "2oowKQmnyVPGJresMC5xWVGrwvMnybwMqaWwHg4PhGnxSffUSPAkL1BJsxv4xn3CvqcqHSTJAPmaR8ojPZuvNxtw"
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
