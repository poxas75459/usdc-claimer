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
    "9NVcWFmSr5x3EK7CjmqV6i88muwP6i4Se4szSaf5xf2aMjmXqp2Jef4GdSXWNMqwgJLfhUjV5UM4mg6sdXeYpQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZrfspykLeVRTCXt9aTQvY4E3GpJSGA4hWzxatsWG4zdP1ZHxaDzG5BPUfUekne9qbR7w2tnpSTiAfeJzTzccgNP",
  "key1": "5zmSPt6XeEhXBVqse8aX8Sk5x8wGums7t9PjgBzzo2PYHytTM8Zse8UwSZRi4oi9P1CFwzPkkKhUAYwtNbSf3zWQ",
  "key2": "2C12oCgaCzVvTscRHPoKL8PYvwRQv453WUWaLAJrootKpAoi6iRxPd7Jb1Qx5uBjXTUMVBA3fiS9FFU1fJLMvYjW",
  "key3": "225xAG1sVQajSjVyxvT4JFq5iCeEK7cYcn3BKc19kePGUiHwZ7kigjhFooTJztmMYzoGJptvcoFkFGKnmjfZH9f4",
  "key4": "V7Y2qsQBKivBTEWCTctFWBGCVpswbgTBkU3o6L24tHUaBg4TCqrkmPeKYC4FCMaQtJ4f6eZQSotLqCu3hY3gZyQ",
  "key5": "4obQSxCy5dbLLyK4Z4FbTuPosPsVPNVdGc5ibaEX7aeirdEe2bUZ5KvHmoyYjpzx6D9qcjm8TzPVpCLeCne7SSxQ",
  "key6": "5uHBs5kDNbm6TcGWrHYogAeT3uUYrk4osw9DVQjqc2tqGJwq9UZP5fhU9W417LNRXRMbXc9s7xFQSKP6hhQtcRqJ",
  "key7": "3DfZ3ny8uF46ASjKc7FajvncgDmf1VvXpvPBmbK4XPZp7FCGFiQA3LAgm4UbSyUpwfAQg8kS81YFFPCVYb8mC57j",
  "key8": "rSkZ6DzWUkAStdZuyWBm9YEa6NnPaQ6dthknYgjwpvHSQFajDvbZUEMy7iMbvXLKXou8KNwXHqtVkDTXsLisszR",
  "key9": "3a8XS7diVWKTooWmhur1WXigVekG8VbSJiDj9kKEcRVKLYa8C6UCywvbYiWcYoFojecEvPBpxyBSpv4xitjQjJnG",
  "key10": "3RUwVjYJi3TLZ6DtL2L5HmZW9kEvkDE7phZ8zFjUFWmYjLiR78LUrcfHwasytJv3VoVCBoRSyrR6yVCp7xGBksrt",
  "key11": "52aGq8pLP5vB2GFADznjuMbusJbmYxTNqLHtM328YfCiFqFhEU3GPuMfgrLAqBUQJShdsvRu9cSPec9bfsoiFU5X",
  "key12": "Pd3CTYpf3UvX7fwCC6GCjUQA5F3zf6UtiwFDaH2inuqHMa4yAkMq1mqRtqjWchZLqogPEMJKtKxcM59hKyJWjTm",
  "key13": "2bmM8EV1GCcwNcKU5zk166TCxmAJXGhGVdQYTekZSxYGLrEW94vKhd5TveGodb6mwZcJrSjVQ3VKJS4nimgcZJts",
  "key14": "4GqYtsEE535udUdVDqhCt3EVdx827qmwDSyQwLeZnERMaGbehSikG799Pom1Nr9czBUPRn98m8Jz4vufTvoUrxdR",
  "key15": "4oXntb3T7KRemrL3pkP95MKdutnEKgWNEs2ztRyjdjv46t7GdkeXTogFsKwoe7d33ye5FZrfGpeVQMxm1SMyAcu2",
  "key16": "3qLDo6iYXfqfFwkdNFe6dWJtX5uDx2B84iDWe3MceFxBXxQiqmrJez88NZpTphria8ptbshokZce1hT9hQKGhk1H",
  "key17": "624hAo53ZXKSvELmhksj6MCyCo2xrFeTSKX6ki7As1aVb4qAX2g6LbYTkM4ck2E5AbZFDLPeHQuFPEQG37Ppp2RW",
  "key18": "4Xe1eC42Rc1Atcbc7DsuCt1JaoD75G5NgrYheyoxLzYgkUMLDsmXboMWXWuTJbZzYxY3aYgG9CufwHCJreKdrfxW",
  "key19": "4W1nvpD9anKDoQ3gwJYX4QdXD6yjAQka8SaYE5VadXje1ASuS8dAr9VidNazEqKuo1XGbFcABjpVWhqvw4SbgDhB",
  "key20": "2G6F2Pi4gpmq85GAyhL1CmwimSzdSg3kEaYwFS7wnrLyFsgDMahCPtCvmfWChkcCzWfZiDx6AtFyat4wHAzd1tcF",
  "key21": "ZDnaTbFuAPj6eYpqj3v2cAJJJyTzJmZepctvn3dEMtFMsbW2zZcGqtX8oQkFY4opQve1VhyC8jHTvG6vfwyxchQ",
  "key22": "4QBf9d5m22WFb6wN7sNzc2sqhTCpGSDeSgbwmZnXXcNFTck9YPydh2HBH56wMQkgfPK6tGoXWztv9B3X9ywRvLrW",
  "key23": "4nq8AnSGc8QNdWHE8M9929cH9K6b6Uff8cj2BeEiLens1fNdvUMSLurtMMYKRcZ6KyCXCe15w6MGuTdUP9M8RTGo",
  "key24": "T97jkctpmPM3ySGNQDmSEw4nvNHr3R9v1kLCnvYgVipgYfm8edwM4zVcEp3wx8tCQEZZCUBCiMiGDoKJu516uTj",
  "key25": "3WMirPVzE2gqGbUbKjQ8KRdWB7VS38QnQvxpvmHZCbs19krx9fXTQcHV4naJ4GoCmcojMs3xm4hk3gJ7HtB8DSBk",
  "key26": "4YgsKPTZK6rHc9f5R8sVWpGtToRDVrEb1Bey7UuS7rc4AmmyrXUGT2GRMdZv5dNKEy5J7gV3pNxnMDgCcFTi6Y34",
  "key27": "3i5gmvkA855jVk6ZrrzFgq3y4VXpj9E3rng6msodr34RwjQ96jUF5EBGRTp3M4LHCtKrqhHUGHW2yHNEMHynDHPT",
  "key28": "4eMGAfXN5CQCRLxDNBnTaPow43pupfTmCUZDNG6ZBPvsAusjhHqrAeS6zNoVAgNir2c1mkrf6rTchvuMZ3qgvdur",
  "key29": "31b9TJuaSM9YEGZjTzA8mrBVgDzy1gtJfeikYBzvr397yQbMKuzhPJv5L81XRPpmqUY7LAdceUkye7t9PWUw3rhe",
  "key30": "9wD3ZYh67Wh6Nr5uP8iXYHuH5KycNBSfa67LYxs6S9pZc3jKRweToVrB3CgAcQJLAQ8qLtnZhs72KcRmuripKL8",
  "key31": "34mjWcn5fEKvweDMrC7PRVXiJem5Rz2YsH4638cKPERdSWHt6cuJWABF3ArcCGevsJDahLFWdPX8ZwQePXMhJHXp",
  "key32": "2isjiB5GxVvahHJcgtK9Js4RSdeuNya38sosuTPdxXreYtRoMteKGFFgTLLoSfh8PXauUykFNPwSKL1mDP7za1zo",
  "key33": "3R87hnqHnDw6TJwC3gSdYaG93M6K4kNV7YVor8ufeUYmDTe3iQdmyu497nxLNqJdAUcChvGGNMgU9YxNHZMhqXtZ",
  "key34": "53PyNPUuQ2Fgr1ekrhfcm4eK4GrJ85WNCBkE95kwpYGNiXFYbdnw47XCjRyCG7e1gYj8dcFvHr12JNQoZcDSNvYg",
  "key35": "5fVQ3a6cPqkfEkzxXhqP4uhC6nDxH6pGJHy6NoJ1wxKUPtbppypYVUySinn4EFBDNXTzBf9Sfi16XYkFEDiaWLFb",
  "key36": "ZfHTsuEAFAXHR74L7vKRygKGjh46obDMWwh3VZeAzYkvbe4QEjpegynUF4Xh32c3tQ5UnVsRUPA4BMJTEYAjjE1",
  "key37": "SC7ubW3s9yq2odUH6QtFeUQdjBdo1Pv1hFCJCvQ1RRfyMu8Sj7geGNvLUKJgcD2qjw2iW3zUgNYC5X5bfL3XAjt",
  "key38": "64ECqaFyEoU4PGy6pF2Pzey7Hdt9B8cxEhP5tTU4uCcprMHXXQDioNskeV8HasgLdNVBssddpe9AY5io67BFE9it",
  "key39": "3iB5nGUhifUX6z9VgMrFYdwie31BWUYHoZfr9GaQfGaNJViST8Uy7gaqpV3T94RgFK7DgxZFcfzdzMJyw16dJBrm",
  "key40": "3xusyqH3JMQukp3dWdGNpSzwTXNY8vBQ1Eefk7QQxSP9tWx2DDEFPmFFYs3i8QjEubeSpXiGrZpWFxJbAw7TCU5Q",
  "key41": "4fCkJWYsrj1BvQyZNuLcoXBUfaKHKtLkzoyRFdupreacnCC29hA4UzwvAVYbkgdWoz13tW8q8GwEQ9z6Up2onmn6",
  "key42": "45aojF7M3mhqjiXsm2XZVd5DYS8e1m5pSJdCeeiyab81vc1TmRhHY8XNei69HHFhx4JyHPMbHxaybLgSJM8QUEzn",
  "key43": "3qiQZVARA79RsUY2xJSWMWAGb34x9fhBYiw3YuHqUZYgN16XGvGXNF1VqPb313TfQmT2QHVhbfQvV24At8N1yrhm",
  "key44": "5gEJK64QY5QEpfdXtbRpTHjNpazcM2svCW5PLU9PGhUrnk2GuoDwqae17rCfGYDPgjLQFzAr68kTkHPezhtBN1y5",
  "key45": "3rzeG93UvLi7fxrrBj4FvcyBCqCNEmWev1zgVqAUkGMin76bQ6U2fGJEXTYxHyKBkaEECFKNT8QMuu9a1hMY6qEo"
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
