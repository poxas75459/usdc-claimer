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
    "2iQikAKeycnggfESubcUhNaSCM4npmDN8eM3wZuH7tiC45xF4ztmLYkixPU9vMBzhPpysYsAQLb4z7FPV7SUvEgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T3TFXJ6MWgDJvromEP5tPSqnn6L5iwtBU9uYrfNeKiqHCwWQXypQhUMxEXBjfujeFQgGbQSKHCUrm6xHKMUckRa",
  "key1": "2uji935TggQwfPYQe6ZXFouEn3HnVYAQvkawHNu2nyTiuaHpBBkpDAqBavm45yQ81gtNfxZ7cAJGmYZdwqTEWiQG",
  "key2": "64KK4HcY1HwVRdiAoijAqb76QWtrchV6CJ9Bn393Qf8UoU9DgXNReiskXwVgtHT85ke3gvdYj9T7d234vqBm9jnp",
  "key3": "2VhDGouyreXVSfhZmW5GSkDkk2NMcf3yZjC1HRyzgwcHcxb6X8EFj2GSWLYayHPjFuN8YUiwq2LeibBiWaku3cEQ",
  "key4": "233UFcjWJKSZUE2whVkyWpwsxpxVajDzVC1Fix2k3duqm4dMrHDsxnKcZkJH8FQ8k8sGBvAhjV1bFiCqSY5k5aWJ",
  "key5": "gqkFn4cHwsT5Rp3aLWTCFWjWLKA1Wk6v3f3PaiSc98UtazPSZV37gj7ezGUDcsU8Pu7MXtv6v1uTtzRpQ45fRt9",
  "key6": "36LRKn21ES2Yt9p6b7tHCdhWuMWs87wYZCWj8gzVVwL7cKezbsVkDv6bKnruBcsv4198yo2yCCwVzUYvVWWgayqE",
  "key7": "5y2gh8Xpk69ALsUaToWs5kgFUJEKhdsYdJN1KsaY2PUzYzANGroYUxZFUJSsEg6Xw7khtfeB39Bk6XLihUYN2sSm",
  "key8": "3uXGEhtvjTEy7enncBswA97pptmGkZqJWcck5KPZhQLBtV3Jx1iy1U6XCATEpw4LYRZUkykFv9XpXUFFyXYtMNbN",
  "key9": "27k73ogYoeffwzfmj2jHXF6esmXcpHSc3NMi1vUz2SLbFfPEkvCcqBLN2gQuu1HJaT3WjfbQQ1x7WBWiLD5d9Lkb",
  "key10": "25xBPucBP9iCqufPsrjpjE2RVyNGAMJPA68geHkLf2mfCWKvetZjDZSdijb2FL6TKL4Xtz6F126auB3cXFjHbHun",
  "key11": "61LhQPzkUj8GviDAi7Uak8ZqtPFQe5dzeC6JNjPbooHDnuNKzbDNHaVGpTVv5p9Rh1YtCioDE3Lo6p4c7W3gDTxV",
  "key12": "9aD6WvZZYws8GxUoavmKMDYRSWwfp8NzYcyNLDmzcNXe7aQZCpfwrKJnNowqz1wYTN1vExge9UzXYwyHQD76eAd",
  "key13": "TKNdMzpJXWmNfKgfu4eojJKjPuQXyYoNMR9ZMbCe3rSMd1BgBYgj6zwrKuik9SGj5aKLKuzdHtutXSjk84smWvV",
  "key14": "H73U7Gojm9iprQz58cFxZLukqiWB6vbvQ2mWLoimguGBYPaEbLx8PAobbGhhXWJwpDd7S9iyT6VzCme6siaukXg",
  "key15": "26dE15LG6AnpnLJnFSTdArC4Xn7BumDyCRFt8iPU947ytqwxdebuRv7LNvb3cYHmGAPUx2BNN8QZBgf8ziMGCp1J",
  "key16": "5ovWvtg3K5Z2Z5c4sVfXLh8a8SnhxbCVAPk2F8AyGprvu6JaWnsdjhZQdpgRDkf77QdDn7STHraJja8ms2VPGxEH",
  "key17": "2FzhXdrkRrbDyXWCffZbQMrfjCe3n6J9dEGcc493TAgBDRWzhx3A4jRiS4c2zHtVnkYR4GW8Bbt2PpQJXWVMNaHG",
  "key18": "3Trud6Kb6tJC8UQ3xo84T8uj2m3ULRgXxLWnG7BL7nfgwYBBB6Be9DqnAqvCtJ9KoTqAxDNaaQJYjCLJmas1Wqw4",
  "key19": "5mQxGrJJ5JPaEiPGvTLB9VeZ1KarUnMgqAjeFnSLFQCqfbAbUtyb5PxzwozwXFyrKkWGehxq6gio3JzRd8tvQhAg",
  "key20": "5zNqunxn9iNc7t8WXNErne7XPLQznZ6EVtaLBy6Ab3D1QiePq8E9doSmBsyUEzthBybJ4NM9eccQHgDEEemYVAuv",
  "key21": "F91ytPhjMJadiwjirYJLXJTHefqs5JAhv7EXPhm1AVnU6LEXYcbJXACi6LdMnjqfUPxG1pKRz8gbnqsTCQfNp2k",
  "key22": "3B6r6pr2QjjBkSpYBMYUxYBDqsSLbCvP63nDBrRTM8R7vFQBaWr5aCt1GEQXasvULRmNXmbwswNzn6fdh97VX5RS",
  "key23": "46vh4XxkBeBx5NtLfG2PthD44z6QKJunmoAyts3tAG2iY1yMs989c8wo2XyuGKp9P2ydw6GVSb5bMA5iZqhsSfuP",
  "key24": "2Z9HDh1NtqtqjLomqRdwtnCJWRi9cBuhu85wnz9vcH2fYYBSnLKSy5sXh7ZMydvagUr4hxrmH2gbjgqN5kR5bTDd",
  "key25": "2xMFVWFRX5LtR8E3BATTrMiYK8bcvxrV4o8JqHUu97WWf5FrDfrRcqH4cvnmKDqtDVBpLGbZpwAxEj3KJLcie4tF",
  "key26": "GNPsQLpfY5Fcbac6wM9BZhe5TLQhyyP86EQwZNSxfSKKLRfqDriXBqeDqeCskfCm9tXm9NTGHvbWoBMxPU24pLv",
  "key27": "5NJ3Ge1DuUVZRxJFYva9qTtr9PBW8aU52Mke4HTRKbMKrTtcFyjgJBo74rSsWEhnkz1XhUktccx5zFwoNdhLbjt1",
  "key28": "67L4ZRTbUFqe4ZDnspFHMSsoHa4qwGgahAvkJ6CkaGTYLLg5VPRD3LmaVxkq8VoSwjMhkh2EcD7u6RpQ33ADsq32",
  "key29": "3RqRSGZrSVPsg8CKucWziWy8sgCqvEnT9Pc739bxpsGhG4qjYsm96ek5vxmpL1NtoVn9bhBepN9C5e44RY6wYvjv",
  "key30": "4Y8XyoLNyNQZ4VqXTbQWxgpQyRkJsgUzgrvtX8TS6udKKqBebGRiMMhKqaeFzUNsqqUs4GwbGyWRtAuTvNJ7sV3a",
  "key31": "8Ab6seE5Z91ErY2Uck28U7UJxvMusKFAshiCPncsSQ1NmdBwqr21ZqK6MD24ezpCtp9RmbFEfM5uNMesm18wzbh",
  "key32": "53xHPiguBKzqr4SqAwsXUk9vL6gp3Hw2wr3ZQ6DPY6YLgrfQrBfDF9HrDXJ7anFeUswFuQAPyQjWBVudmLGaUKUT",
  "key33": "4VvkYhZqxtp9xZADrvpkx2CJtmAoDu6KARRsvY6EXE2ANeCDMTUe9A31bc7VYUQsNNQW2thwufTkyvwtwbGFfg91",
  "key34": "UAQH9JvSQMmdYmtAxqDzkS1aTZAAC53y9ojgTHNrEcf3BpdAFDbY9H4dRghyXb4ZnhAoiwgUsDiV6zueMi6aegA",
  "key35": "4FJg8dbYd9pmHZGnzcQ1i7cw7eh7Hvjsaf7goi22jQXXXpHTJvEvXot32HF5XHFXndQk5zbFpyxWqWYA65M55egP",
  "key36": "5udsbtzd2XrEVrREAsiJvDUH4LNQFwk6P6s8qfH7vxzcqaqi2wtnj7peLfLpJyNV79hnBogjLnVpMJ2UpDYG1Ufn",
  "key37": "2P7xadVN9wxGkBJN8fiujGqFfZT7updp9E6Q8hJ3qniG4X8BEHVejucD1TqWg5JwdArWQcC5KQonEnt9vS4fzvxY",
  "key38": "jJDtMQ91uANpXgjKzMp8QVCb6XwWMQrtQAE491pddQvpofA8owY1ggApKXgYvrVv99aYGTPjbFHJGf78sW3sWKW",
  "key39": "hc4abjZGBZeua2rRLMFNE2oAxHnvSo9MiUJ9L2UqNMBUDLVpgc8ftvZzfdatyD9Xo3eXuY5Ubpw3knwxE4Gz3VA",
  "key40": "zTiZNf8DgbEeAukcgoHzYaJ4tdzVqgScEpWkW6mQMjpoyJEoLwEhQCPei47EnDFf4GbeAyRGrMqy4RysDXPAS3S",
  "key41": "2t1a4mEDRBhcyPrkiLxCgttzoFtM6PhkyCvxFPeTKpgt8mCQxyX922v816PBfxp5gBf8YPrdnfaZHZAXKvtxBuQg"
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
