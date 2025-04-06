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
    "2MfdFq9SbTu81R5YfTLs89qVkNYN9qwmYxu8cVpLRdkY3yoxmbND55FaffxT4iPvM7joHpCky7W8EehxYUxP6y9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p7j97T9bA7Ewfsae2ynKTdEQDssdswA2xiLv5ahXnH3A6RmCKGAwMDZbN11YaXt8rC4VWivCdaTg95GZw5TZnZr",
  "key1": "o7fTNEM1bgamtEhVCB7jP8w1jHTasU4FmUTcjiWSUzyiEFgvYgqX8pQaUp4cQJnCj6uziNnqZ3Zbe6JnTh3nbuW",
  "key2": "34My51jJwHdT8YDiG8TkZxFpMmD5nAuCMB7qpLbAg8uiXMcqiUC3dNvvFfAAU55uwoxcjYkTkXYRRYrETkCUnQib",
  "key3": "43Y9VvjAjFNCyjusiusvJtyv54Zk7JpaEXQUY6Uy4jprJ1epC14JLgoQeNze73LoQVpA3qCyc1eBQZxxzcWAZoze",
  "key4": "2zcP1Qsoj9D1afX6Y36X4wZnzYjYGLs8HhNiptkpBNDyaTrnTri2No9jHoDr5mvDPs1JmNCrA5uYEP9V3FSz3XXC",
  "key5": "5T1kLM97WCygeHUsJpVk9TJxpY7KfYb4HSYFDdyKMWh9gr4Hk1BKSBrjEgXvVTchjH6ErgbDTicYxas8uLW19aq3",
  "key6": "23qAQJPC2SDPLt97UWqhiXwKVbBsX8euh8tCWMv7Nn8fyvxGkT1QoVcEeZHZATu6z1ownBoCR7jnpomkvpWm7gHo",
  "key7": "4sMu8CVpnJKUPnbfVAyhk8c5MvgWUDcxTeFsvTKgVYaps3XZu2N4o3dB84YmGu6WARPPKa1HtTzRhA6Rdg33VLQt",
  "key8": "5zG2MuzobCEJbXG3dvTGp8jZUcdoK6RfyYhmJTuM7wAtXo9dZuFydto4qv9tsGiqnaBJr5e92K5paMPN84SwscdD",
  "key9": "cC3bPg6fP7oBPT7dA6Sqj8aEbT1AtBCSx7dqcVHyb7ppqxfsZfm9FBxS7isJApqgV4ypAzjsyQzhGepyFt8KHDR",
  "key10": "62NA23tRNaHJcwt93ogG9MXurKBuGD2NBoTsV35SnbppLmXZhE736evJpsaFPPm7YrJtJvrsvjvY3DBNztcZTd3r",
  "key11": "5YstwsYhtiPzNs6tnMCMqyCszvskbTaZfhpNe11Cy8H5MGBH2YcBxJFAuBPVSiP6PyjQBVbdepyYdvt1XwaToe8h",
  "key12": "YWBV27jdgJrdfVnhbHpK1C2gyEoDVxs4YH6fqAGHcT4APLFvKaeXKv6B2MHPe1yja5GjNiUDq3X1JTHn7mnnccH",
  "key13": "NU1FmJKrgJMSyjFoKu57bjEAJpayVb2KCv2VkWCANEjCJyziLPZcqYYiAjkjauzHQv8V8VGw1X3tpKVQYW2RbmR",
  "key14": "25JH51LDTLW1WYqjgLUjhvnhcBBjWru4zuYvzUvXLrwb95QqC9rWK551MnW9g1qXwG8tohqBg5KjNoWx3sYM7aRW",
  "key15": "5QgMU7qiAd2FQbJ53zSR3WyCbKVJBoWkG4SWVn7iyPTZRqRNC26fqYfScp4KUdGcv5o8CorpgDBNXn365swCQENw",
  "key16": "2vPtEQXD7rhH3Zfkuax9qcEWVt7MR9YdhEyL7ZvYc7gEeUexzM71iAS75Y2cmzmewwEwg1zAM2KRj38MzP4Bq8Eu",
  "key17": "3CRxmZm9t5VX7bbGPkznj9qeLssN3bi5GMa6it5fQGumfuUqbygWpgSYyv6ganKsEG58NxkMoe63rTNphRtpFFog",
  "key18": "3TjZTHCAZgM9p69ue2FBmJSmX54yhCQyRtxZHnae7xXJr48teU7gyXbpsC4Qu9NPvDiw2xNG8tykCgvKFEf1qw12",
  "key19": "2DxzqUAfL4d2nQQdYjYTRGbh7ZRSCNjJCnSHvSeUi5XhKdDiqKtAPZBXmvnXseB8mJZrrfhwCeyZBskAWQwfWnmL",
  "key20": "39Jag9jWREXVJ83hDd11HG9VYB2Ed7LHLB2pHWvS7FN79LHd7wPPZyeg8jrogcs3n2KiZKnm1Qy3LjuToBUNSbzQ",
  "key21": "48AhjFtGsx8XwPvXHUQtJZA216HxgyGxHUKSBT6g2EUWzSF7kDRjSY6z5fMB9jbuPq2vosu5FMCffRN3ECcsy5gF",
  "key22": "4mzE6taDLuV8AGcdRjiMSa8wgRALvHKhxpkS57UNAwUneDmUwVK7Nwyx3gU3ftaHrqbP63gMJECB3jnUCehYekPP",
  "key23": "39uWKN4E9eUHurJBxbkt6PXFczemMiwhG7EVnRDwWAMXRUT9KpwgE5od9331zNrZnLopN5vyCoe713Dv3hBFP2zi",
  "key24": "3Komxgd2K7fcfw5m6vvqwiubCxDNRD1siL1i83oxEjv3eZXpBQXoyUGjmRF4dRhGMTE9d2855aqKNpuZcbKwdQPt",
  "key25": "4yi6cCqnvXKZ5XdBrwb4RCqYshH75K7g6jrYVVBtVrd6ZokcXoNa43WdkfSMcTwtTdv2he2kjQQHHrxFZm4vbe88",
  "key26": "5MyY1uXAdsmxoUsz1c9X25XiqkCAgczo17N1qrE8Yikp1t6f566pz4qjgrwxwbUVQaorc9NfbP4L9mStm5bgy9yC",
  "key27": "4iRAJMmuqbPN4ZxpymDJDQbRsy3CK4ooo7bz341yqi3xKXmZtFcJUdJA8ZKjYKVbwyKVQKJuJdnDjccd1XTRi8u6",
  "key28": "2yFbtAuG7k4tA22vvHtn57iXYpc38RFdvVitQCNEXVUqeqrkSKLEDYFC72V6MgG4NMvFxpLpdcS99iwM8gjy9pGt",
  "key29": "5v4xPGKvQHLPibRYonbFs4a5EMsvw1dmqu5wEBy4LsZbM4LLYDTbUzYYht5XEEPmifcJQgRNFgxfz1iRarYfj6XM",
  "key30": "4y3ZeKxvU8R37HcickrUPqauSqniPo8jjSqfC8fsjW68D4wGaFvaE2NDaGE1jdrQUQbENhUbDCsoeMwJyE18f1gb",
  "key31": "4Eqx5xphqATwyMd5pCggt114356sez5LC1ekYb6b7z5MmW4Xg9N6TPato3W4KUCCxR7xjMcM9jhj3XXNMbRkfBdr",
  "key32": "2YprYRwmaTYJLKv5MpsjvGu4ohGHXudW5taqLqSYzxf5YB4oiNGAJ9jBKuQzWdyqFcytqr64K4Y7cwE4HkWwfux2",
  "key33": "5YcAW56TkRz5WeS7nsz7m6dojDD58RmmFYJ5eetnFsrqeyPqKi62DL6QzeDyxtVCKHzW6TtgxezxCBoiBKS1hnFY",
  "key34": "UNYzTh54S2kWQEJaDAhCiReUY8pB3yyAUS6wRrURP426dzgi6BgBjtNcAfLmkUo5x1GADipATk9uA3ajATY8d3A",
  "key35": "4qh7NMCqaphPmcneQjDS1QLQ4CL2mo9ZCTC9GEzqB8vSDqC5EGt7XP79TsnVDjjRmnaKXSPuSHtcthaBn5tAvMgH"
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
