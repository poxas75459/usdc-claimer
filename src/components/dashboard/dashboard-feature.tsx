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
    "4iJLauzCyT6AcoRrrPjoFJpSapmhRb6Hgen8dbdfgy2E1RZAQZdTNnQ81WqfmBVCXTA1sH65RQ9JbfJyLioYURen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633XevwkL519bzc8p4RHYJkzCVcyp8ZNkbM2yj7f9SsT1jXH4acG1pga7reccYhKLD8S3sokV9mmWftF45DWMUsp",
  "key1": "3Qyp8Mckc49nVx2sZhxUhs1RTngcaCfwYg6LccJ8prsSJPoiedzC9Gr7Sfp4h9QaAYpdPRyvbHijZL29eLa2MJhY",
  "key2": "3giFmm9Tt3ktvxpD1Jg9WuGkGaQa8kQVsL2WbNDRrup5M4Q598AG1V4FCdChzC5m7V9gYe1H8a7BbA3sKdcEinFX",
  "key3": "Na4fuNmmPmTKgK1DZFGH8NSxXuQ8PPNBeT5wbY78qYHyqZNz6CiCqUmgDYFEzcei9FmzSNTMF3B2dW4qhB8pkEw",
  "key4": "2EuSSdQyGPA4soHRCYoXgaVpreMHqqTTJcwkaY94ZvM8hSyHvxKywKragt5pTXUxJ2wJafAFgbf52FsVgqGsUwSw",
  "key5": "4e8Jd1ybpS4nVREFXyBGFyZZMWvHYr5mU9C9R3VtgnQpYoBygHHSj5cQambeCyoZJrDUMS4JMVXjBdeL82ukdS4t",
  "key6": "4ZEEQZ5T31B4DkKqQkFpiaBqKu8Lsww9jSZawauokKUEvMmdg5c5VQKWk8gK7bPmF4yiQCQkavSzJQm6FvvUmsGE",
  "key7": "56bGPEE9csrPRMSyjR1kXexvmQURikweeowExrqEdk4M4Yp5Ed2GgEZgx5UXfsWyVh2FaawUES1byuvoHh4J5Y4r",
  "key8": "E1wD9b4c3du5VL3EagHzRHer1dDkBF96UT38oA1fwB9RkDgAhRJAxrGNNVrrN2DdHkcvgmHVDRyzTMHMBCjTDiv",
  "key9": "4HyG9C6jBMQffWW5obnGQ3wSY7pFp7gaUjr9nhnLL3Y7ZMhKQEASo8ueFmiu1RzQ519QgkNbXpZ4wgmS2CU7DEBn",
  "key10": "3EJLHb7sNiEpbjCqkyZY7LBbqqxeWjGKUmEdedHgmfGfHntwMW2eNWc1ubbXTkNbeUTLDFVeg1GJh4vTm1uYtFBn",
  "key11": "3sC2pkfb9iLcTLz3KrzmhR5uLu84QVosXpTFRMmcQe92PGHwzsKCS3yyBUM6BWR1j32HdWN7WHRVgK1QCcomwVdK",
  "key12": "62vStfMACXmPEHPjsNHdjbZ61c4SPzj384nQBnpBSmF5dE1AtH5kPyAtbtHV5fFt5wzK8BfBbgAv9DXStJMSunLB",
  "key13": "38VzUwQ5rYXWkCe69mQ6nxzDJvYQMUcWC9XpGhWx3ruc4xDzai1u3JczzTvzFerYRvBanpz4BWkXZmUACrySfKGT",
  "key14": "3vPRgzgGJ8pqxgXxrjwAgQZySwny2nSsK8sWc4TtecuqTks78xeiXW3iqmeDiWkR3Xwv7zBqADTrh7pfcQavxgJC",
  "key15": "NM58826ScTgmyTEMwRq2ogHG8nYPttm8ffm2wdv6bGys5mhog1RzstfeSfKqV3UidWJijegKGgC4uKKHNCRXCRX",
  "key16": "2gE2eznigNGoseScgt7K53qqWY5NvDtAgafW5fkrb7JQGHeDanYz2HMZzBnr2jZBMXFwLSjoPZfs6YzzB5KP8YYM",
  "key17": "EApAP7i4q9Re61eKXja4nDfyvqE2pX5FydjA78U1yn5L3mvS75reYmi8e6GWmR9GhHXRwgb5iXAArm7JbvPkFje",
  "key18": "3CNR4JHixeGwDFCsavVBoFY9EApdmFGhK1PuRKNYSwQH6wk5xEPvinC42GLWoi9DHZLCY7xrZd3NRC1A9zpJee7W",
  "key19": "2fqg3ZDdypJR9Yi5S326e4n1Es5irTtZSN3EVmsM2cNmfd6vq3Nfqcij95Sg76gjoZhTK5tWMnHPPGyAusVeJn97",
  "key20": "5T3D8wEpnBiAf3wW4xHreJbrBbPNiW3s3Mv4ABanKgS8Vtxof9Byp9AweDRMFtSrckPg3ynkSmrFSyUEB9jmKjE8",
  "key21": "5f26ZgC3XN1T3FZMUG7peCAqZQocyJAN9UJxSAeS43Bxcx46uyL5ESmznbxKAbfMvxSrdmqM3xwqDJDQUncYCFgp",
  "key22": "5yosSfp9bsn4RkBPmZzeAvsJhKyr8L7FmAXrm81aU42JNzCbAf27emvd5xGnhNSWy1Q1rPrkBLyUDSc7SVsRALTQ",
  "key23": "3jMQb2QNj1yKRt2zNYFSNsXnsjRhJJaefeWoDSzt8YZg4a8bb2ddpwYKC5xXDa1hR2fUgHEpssXYC6CSPCmD1gf1",
  "key24": "2B3atNJSyC68qwWLhjb1YECiZnfZ5qKCKBeU6zvMCiVnBLaeehsn2fY54QEq18uLS6youAFGxd7PMv6SiQN4m8Th",
  "key25": "5c7gkDUNys9uQYuPBbhmwj2fk6ECWADRnYfM2J7MkTf3S6k4GLS2pjri7EkasJXEuMo2YUgQbJQTK5WS3QbUAVXk",
  "key26": "3nx49Y5rL3tcZd5vkZGeNHee8tJKD6GVDgqyhoTs8mVUET5br4SmvA9Tky25dc4hDmoErmmoutvoqDMS1beTSVgo",
  "key27": "A5LYgqZiGcEHYJeEy9SWSGTG2pu3pQTH3eMXZZGUAt5Rdv7og8dsarB1Wx6wfggGFzXooE9QVDjekhHuc566Aa7",
  "key28": "4Ng8AnCwgYnbL6koKtpmk3UMmg59w88LqbQFTiJYnNP5mgBhPShN13x2K36vUib24xinE3asBmmmHgdVtFU55AeS",
  "key29": "3fQVe1GVTqkn1jzPPYZQmAfFgZnoxHB5vH4FSz8mZx87GMyn24xmPtyuNAYZ5nuacxE8ofbV1tJSjAtQpfeCKxwz",
  "key30": "5dKmr9SaXSuFZGkK7Y1PrcAJ5KGnxpSAUdqtFNsqJHaK3EQepTmYiKhrZRGnv4Q8CZjjdomjVwgV3H7QGuWrWJqX",
  "key31": "5naN2svvAYdMgQJ8X6DZ5TPkzHeLk351dsAbu4zoiPKhhTjuzueA7Mqkpmy5msLCnApreHspvvFj8m1ceayQy6fP",
  "key32": "3kb6C1w3w9ocHeci7RkeYQhe9reDDsSp5Re2SnfwpHVB1XbypFyuR6RYBnDBcoL2zcx9otmoanY8ZpWm2qtVKhFE",
  "key33": "37Xcu31TSv5q4pvCQoXLiwEA3fsoCC8cGHkc2JPWvBfwCo9knGVUSDJRqCaadRg16JfbKiTcJBs9KPwfxVqV87Qy",
  "key34": "aKhTTngKVdU54YjqNgyn8i6eeY27ZKrLjSJ46p9vdC3bgE4xFnzDm2UTDUFubFuVAAtQSooMY3Q14zETZyF6Dt1",
  "key35": "3EG7csVuNcFa9torKAqA1Qg9woWynEMDWyykjnGh6ncSw17jaYsTYKSsSN87F1KkDKsVweNrssGrhLpE21AimK2L",
  "key36": "ugkcBEJExifvjdevwjpxkcPvPwLbcDpEMkJCjuFW3cNixnZ2Fzwa3ZKreQUkeax9dJvao2rHsoivB8oqZAie33x",
  "key37": "4Dzk5LmhFe7vAzkphcVuM3DbhbzKPyBeghjfNyVS9hcUWdxXjyrErUhN4Sovof4euWvikMMNwAn4anYJfE1pYuXB"
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
