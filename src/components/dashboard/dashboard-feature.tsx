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
    "37sDH4T1So75Btm3pCzuvEtbANGsDLwveemzMbCb4psw5PiWvLZreaJu63Kb98gR8rQpW39LwDujCXk8ThHSJuEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UpNrUJUcxc3JuN42oZoB3UyQwHNbCuDVCMcoxDiQAJ7sNatT6FVF6V4ZNsYJFVFq5jw4nEgRToixcH4vLUrTXq6",
  "key1": "3dvAQqp9vEcXwewmKqRtP8v8BvPUwHnxAmwLrio1ixNrBivj5wbrd1apS1ruTHm9BLAmaeZXA3rHge4L9pKAb7AR",
  "key2": "PFSdMAtDXeEFhe36AAppeQxnARMrqD699MhDBkUHKeQm1Z4qVRSUM3B96ZYamXtmGWiu1HDvZJwB1mTP5Je13ah",
  "key3": "2zoauT7mRhUC92iPpsphxQWNN4u5VzpfEmMaeSqZNAWaTmkhHKTn3HX8QRp2wLArvg6MYtgNSQrh4goTpraMWpGQ",
  "key4": "2zzwFpfmXLdj1HQoPK5N7xrXH5daR5Tvawbc6k16Ha61hrpxZ9sTnZ1XM6sKWA1e4jEV3QVpAoFsV31EXsvQegkE",
  "key5": "3AauHHLjGMKGrgcAofFczjstLHn6VR6WvDpMaqzeQ8Mua8Z7cEHM9ryhXgD92zCUvGtrf6Nfv536L4aSfhsy3Rcf",
  "key6": "3dC9WTdPmXQrKUFXbHTxS1CBytNHq5fwaQQBaxZbPZaEATXBEHkUyRBc3Fah7PLk7C9fn5TTVtBqb8R63fW8b5dE",
  "key7": "5yt2v5HV5qmuyAF2wKzGfzf4Cd8pGdv8rtZ2EpFicjK2ksNMxNct2xiTWxSVtHWTUQc2rBYJFWVZ8A3rbFmEoaNQ",
  "key8": "4LpX3jceCwn4QmNtsifFu8i5eAUAHpP4sTLxYgdeoDPUxM8siAcjoaoddiM55cMnh3d2SmwafTstBaDd4XnoPtC4",
  "key9": "kYstiZ9LdsCvrK5fSbXoKASnDKUxA8k46pHHpxpj4uxgBBcL4KNTevMsiM3nBQH6MJnHZZyWbnor6jPpMkEh5sn",
  "key10": "4L4kRLWLpyhzCZ6DigGq6AgmJvyYvsjYLhw2pcEdEz9DCKzaNE3WeYoZe8vBj7tKdwUxJ1GYMSuBnvRqMB6krqxN",
  "key11": "34vhPTjoHhwXKoFfU5rwCVo3gqxUHNPHY1gq9GufcJLgxpfrfb5gHXcvgergFMH9ShaBcb1oTKu9E9LiiUFQWNj4",
  "key12": "3V4WTdLP467jpKTtgk2w6bvEwEAk8fXrLu8VkQ6frqGWfs1JCrMFWzjyutoNGjvPsa9RaBKktQyHSaWhyxz5bCui",
  "key13": "5BRabm5pdBoktbGrBu9ou6hHR1KjM59QH6y6AqBqBH3D75yW3hfwrqVYfshDGo3MmUkBrUqTagGu24uhLU7KXSFy",
  "key14": "watR46ytUz9UxWzKFWNfrshVKnAqeZbK2W5BevYjma9Y3gcvVhvCg5k1t48cErbhs9cxcZgR8zAJuJDfWd1pybC",
  "key15": "2pVPG5nVLPZdWtArREUkh2WEzquAhJHUe8ujhDx4vzcnActMNYCdnsWw82xCvtnLWtjhjQh6ZaTSbsgzh3ppYRQK",
  "key16": "41LxY6rVruKVvwBERBSEyUrWdHLv8m4uHYtDYcoQd2ZWnju2sGUzDAZwR7idvBjDo8XVBzQDae3Z8JBqRqQUmeJ4",
  "key17": "4X5UBG9Tsx963H2LBnetYAGNz18huk5Mkt1fQiexCUT1quomwE2tK7Mjhd9KmgkQtGoBfWBDYaKZ91K2LhtdkhGU",
  "key18": "qS786Uhh1fLDEg1ZSqqLGBawZhf34De9JrYZhJ7kn7DYDWMWagL3aSXVSoR9vaiCsKgB9kciuSArTxbskoJtbpx",
  "key19": "5ptRhqVRc6Q459UHdevA6cjD6p2rut6LduvwX87GnXKNMPibPFWHwmz66zDSaU9UZEmr9dt8e7ZJnW52ejQxS3Zw",
  "key20": "1261qR8sa6yNMQpdJfNmcnYn1w8fUCwgNZ9W4QyZ1HvFGqnryY7twJh8qKpP9gJrt8Tw5EVd3ora9Mw16DmM6zK4",
  "key21": "4ZaMb9ZtmLyVZG3EfPWWJktriKGH9e4ask7izY67MwW3XuQunsr52hufMGVhzm4odiNwL8AkwGHjLaNiq9oX4sDc",
  "key22": "DzB2JvgJYJ8XmmQewFmueM7a2aut4j8Kbqq1HV4yWFE5QNLmsQE1iMqb2vC39wiAU9m2tVJf1ZDnSgw4ToW1YAH",
  "key23": "5MuWy6VuFUNUkU3CBNkjLJHEfFfvvNG4v6gyvstQAzwEHsW8iiJ2dA6BM1nf48nX6fsG2uW8Ltm7VuCD4aRWNNSz",
  "key24": "4WtEgRZRZh4V2KBVMJd7hwmBE4niTjDyocSD8hDA1t6x5HhK9Vn58Nv93z8PKAoWcY565oLbTmreG5Wj3XMpRS7c",
  "key25": "2KNZKoEMvxFDHaEWAsEwipCja5M18v9tcpQ1zyZL8kbNaJ3DoMyy9BNvzpzuEK77eUVCDGSiBCPGaJKbxx2vAThf",
  "key26": "5TYtHt2ga1kUZvcpbmmnEkb6bBMLxxZEhbs4WZjtHLd1qmTnYcnGqrPCvsmvnLdcnFmGs6QjcC6EbyRGRVXvCbKa",
  "key27": "5iiTmp1CVRkFKA5vqNxz5QKRUTtxggZyLGKF4XEe59biXCMG5usEQ4YUraLgnRAkW1DKGuHPrgvmKu4UGLVEa26B",
  "key28": "2xNmT98QA3ay5FUDkCL4qaETCxgAZFFuwHyh8CcZomoNRVUFvY6oUjGBzQVb7YcqFQ868XwdgTK9niujzYgCkuLB",
  "key29": "anzoyZoLYfGJGp8aAUi6d9ACRPHwYkJBdTWZ1fFCbtxH2HkXiUkX7WqZMr5TS9KqAW2vdmojdV223YqozhKZ6Qu",
  "key30": "4ZE5LwNpBbVnwZKDs3PKLqzjpspihqwroHaKDwNb1NpyBi4bgwfjFAyZ6Dbz6bD8xb88JAX1J2N26EY66Cf9ksAT",
  "key31": "5xRDJC76kJvQBJDpM983ZH5Fm4JACxq29Rn5ZVHKcesM18f8zfkcg3xbReckvWMoHS1NMPQNcSmBARAk7Ed6ykSt",
  "key32": "3Hr9uXtt3FjgWNqS1WGBn72WsGvqG27rejVXSJBg81nUFFfzfjFWJfm5QyhiPELrDNnfA19imeujg8ggjCdtQi7G",
  "key33": "3F2yyYfL9WKaiauM15mC5PYawrWHgRHjF9MRRMnos2CcgAygP32sMeXotsPUCr4PU3ExnLBtMLwZmUUr8yvMBwbG",
  "key34": "67Jns2mFnFRLvneKrsrRQUK4y5WMyUQtoFgCk5gUdA2G92DtfwXigh35obLUhrTGiHBjwV5g1TW3H9A9nTp5Ukh3",
  "key35": "wTEwBTy6Q16JygXEJQz62ED8hf8a9zAZ76ay1nbUf3gM6fChFRchg25SGdMZ4KNrUHibmfKud7VJsXFvEkkF6Gv",
  "key36": "Rv17VVLYzG2wPXsAP3nLg3KyFxVQsLHg4t5sbgmk5v4UMJTVMkAxQEi68ss9dnxqjTNVLgAw6dZgdfyCztZeabc",
  "key37": "5TLCRjPN5gm6FtggB5F1gfGLPgK1Kr89Fm1oixZ7TG1VYXXZtrzdX571YXfQ9yTKMmHZXtLhpycMFfufiqwPwPNk",
  "key38": "4MBQburHRCpdBBWFxdgKbJ32iu1zB4uB4iaBK4ZtjF3RGQ6FEw24jCCdzuJioYLA5z7j3YcsQoao1eAkMDiqnfi4",
  "key39": "4Htoqjzj7N2vKdNaydteUJAdN5XfqmxSnUwXC2Bzxoy12byvBUQGFTDVPabydWEdSqcDecWYiY5YrbBUip34prMG",
  "key40": "AmMGN4RQzezHGqGNEbugFjZHkuLrzhtmDrh6yacN51PQZRyXLLxbsEgAzvuadBC9z56mvsBYfK6Y6ee41R7UYiT",
  "key41": "ELqLo2HeRoS5cxqtbQ6mGMfbfntLcGhDzTcASXqwUdD7oe4J9yvBc5uj2Svi11e2qJ1nSm1i1tkfrirfoDtsaWs",
  "key42": "4Ai1LuFBQToHvBLDq5uENR2bAAZw8Po1gZdqV4swBhCHx817K4JxXtJS5roThsgRJn43shbdjAagCAAdzLyeezUG"
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
