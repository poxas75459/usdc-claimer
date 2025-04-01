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
    "3egtfrV9qFgnAYeBn6ehY5mdGs76xs7xg3xPBVmPdfWMN4A1872sXsLnmSsAFF5UMq7tZrhjqeiEE54xrVfYs37v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CdEr79mZGqwyT5wCbUXmuCfKzh3PgvpcUgHqfV4nhpr7ZnqhiXd66WmAW6DnbD7v4FyHmSKPhBp8R8w8Hadj1RB",
  "key1": "3sgxyfSuodmXe8pzBtd2wpHRhfknNDAsAEWYe7T3xVad1L4KBhThwvJkwjrhgmtLW9SMeLvhpZ9nSL3EZVcULZmo",
  "key2": "3xCDoame1nmf3C76tNzz6SUYzFZuGNu2QieQMU9ift4Gvrbxw1JUDux2557ZawXMaCRtkTRvqj4meHQypPDfiHiT",
  "key3": "3iG6cACTEj3Z1NfakAfDQhsGbFXnomTbGsSW6wpjKcQ8MVvVuJJD8iMA3ntMxpMPArbAFHFqJMG1ufF8AKUNThBf",
  "key4": "xNZYQxZ5B9xbGXFjTysi33fxydtEfCg5Qv5t1ZkgLj1iWpQiqZN6Cxpv1YryRUUSmxDDzKPfsdUXK9uyDys3ntX",
  "key5": "wR1okmuDB9KZmX9yUS8gf9VGGGdTAWnu1vKV8yHHGgjG3RosZEua4ggXJ9A82xrvZ9LJCnfEXtE7TxXqLFjpFqK",
  "key6": "4k8ZJRkbZv8p6WLUcw2UrHJQrccMW2tnTd9hk9WQpZM1bE5XbABy19SWU6Mcg1WcT65v4k3e3rc8NRmpTdi4Wjba",
  "key7": "4TTV84f5xFzyT77a7wWPuVXTxRj7qy752zanYPXMm59gyf4jcjKNhmCnp4Sg66Ua4dz7LurrjroWU56g7E9zzWnY",
  "key8": "4XfDSpZXXFgh9Bx9TrLPbzADVgnHQRGAaEHckyomnM1dRZwDUirNsu5tR4c6tgXfodELxf22uL7ZuTmn2hrRPoyf",
  "key9": "3HrjqkgcmfsHePb74beqTfwercQvcxTEqEcZTaPPW2xgYSBKat3DsJMK2ixVtLW4UhNWNZKWokzHqjUVZruCGxm",
  "key10": "2nU9SvdnPikPt75DJs3hZ18j9KbN4BK8ZaFzYcLGpAiJESwVtwnya7g5HjRVigAnmfLXnBsVvy1odPDqwPKFBbKN",
  "key11": "worvJ16BSRbhr9KXWNfe39nM7Q8T2xvfjLY7rLW84gNqtra9vLf9U5pveunj6yUeSK5w4G8bLXqJt578yCz3nby",
  "key12": "64WvjyKDZkNFzgV9U7CHBxHv9e6kBZHGVYU6oVcjvGg3uPfE19aKScV4PxV8AqhkJZ9hgoJiCQdzzEY6kxnNFFb9",
  "key13": "25w5H72GgMmoDHwgAYUTL5T1g12hDABSZmWj5561avTJFyq4JtZLfBYAQEGwTSBN296y2aXEguWFyJxzFM8iao6S",
  "key14": "3Fgux6adUxSbeHFCcH9ZLXVZ6woz395HevdYc8XTa3NEifo9tTVk8TXc1mTExQqqb5psMCeARj6mnouD94iXtEVk",
  "key15": "2vojGPhdhBb2sCfB1PejKigmxU1PCR566Nst8CAZygDZ9V1RX6v2vHToCWNcqVyvXMaYDcBLncstStrGY499Brwy",
  "key16": "S4yYUEJ4DnhstbRphodaovN25aL7VSeKKFsrCtdqJdtT2AcfoJsxXZ2iTxE7Gbk1vq388LDNmjFbusWyQbv2kcS",
  "key17": "4ZFY6tByLvuyKj9NVtBYsMyps3FCQBGMNNJQ8gaWDiudFoUyHNbGzNtBsv9FxC9qvMeeESCarmZm4PEEbdhGJ7QU",
  "key18": "5NqNPxrncUngYx9rRvqiJyzAbP6fPi8C42yFr4nM62HkZe5EdGY7dK6m8f61PBCtBbhGe9GJYTB9ApZeMRJvEXK2",
  "key19": "5FaHudQRyjPXMvk8Wqu2EQqXgY1BUSd1mBzsYxZopQeDDA95Ym6EtmJ8Tixmh59kVhaKnAnmVRNaEzDajz7efxfw",
  "key20": "5NxD7dnyrrRTHeByDCzETGknCQRkmKLnKXFSdVNFgJZdfV4wiGEbjZU7b6wcMYUJ43pfoGHosC9S662WTTTWevA2",
  "key21": "wkjpwaCDSwB2TgZkUuUdjGXHvuEJr1aZgvXjgftHY6EuaTHDb2k5QZX5Mgr9kmh2iDbE1ocagKrfzTeKYQUsKUA",
  "key22": "3z69gRJiaS9traixdQ7tVEXnAeuLDDJCxjRPhWWPTddBGSQRMVKwjo76FteRLoGPaXMhP118PJraztygG2ixjkcT",
  "key23": "NNXkn6K2PfwtXU2cEscpbmMsdP6JvKD5KuGKesdRb6A8s2GQwAg9Cj1LPr68yWUDEqpfXqP5WxKEkuuhcWmjz6X",
  "key24": "Dm9RSFuVgMXSrKztx19TaWgKyoGT6PoaJJqwGnP3eTU6GHafpZXvPkQ923PTF4Es6csCak3qNUYTWubA3qVtvdS",
  "key25": "3i9AnndQ6hb8XndoaDNji93xpBMDFEszctzh19spteFMDfVsomNDhsw79p2PPqHgUVs39HrrPzYp3xib7kZeC1fR",
  "key26": "4B66ewXGTJS6ChCaC5pZhk4dETTt5iehMhizVwyawgXzgCTK9WkXDEZyqftJ1ebDyrWRjhNMohQYP8takPTAE1uA",
  "key27": "3S82yePcoiN64kbYdPvBpQx9DuHdTd66zNt1rvLQ8vxzqZqYFsH8hd2Cekbia8UdzC26ZStV6Xf2CtvTYc2MjLe",
  "key28": "377c9JYfWGPgophhyUgwPrAuBXWwWmRFJg4EWnVsBsb7dj87ApxmmfAhy5p6PFD9wuASn5VM17LK4YkAUEjG2Ui1",
  "key29": "36aQgfLpkjMBbjGvPAgnmaZ9g8GVNkEpi5ajUgTGJhYkgXiJWTM9BtHT7m2RUquD2D2xeRPF3kGaSzUdFsmcaffh",
  "key30": "JsYhUAPAmJ9XebR8zAYqj5FxxQipra8Km7mAqmpg5eBaMBfsCVZFgPKRRLqmqwsCWpBRKU1ULx4DuFK2S6Wvw4P",
  "key31": "NuDG1mH6CNi3a2DwosCnE2BDULLt77v9z2dXCKprG6242a34V9Lk9yFPJAZmqKBUqPVK5EpchA6bru9nTk4Sgfu",
  "key32": "3savAjhQUyz6DmjJuNnY7AfrLkDH8NYBBrjaXsSNsPuN9BQ7v2oT4pyGcraH8TYvJJ7XzQ1aXxdxDs5zKTroXv9g"
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
