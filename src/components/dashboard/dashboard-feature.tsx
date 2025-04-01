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
    "5XAnP8iejT6wjU38KyooisCuWvfkAiGMfCp6mfCiNjGEWCfzNR1CGECXu3Y3CE4tq1jBA5DgMWv2wvTWcBPvFJjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6oTUoq141EjzSwgdAwcG5fYnQbpu9GNBMPQxWsoPhNTAkncs9N41uSBwhSXjXcfKuRws4BtoPquT1KXRZ1ZeVYK",
  "key1": "3htZh6wadTEWcYszHHVsiFuzTcJ5mDzJJ1rWWYtS878rhW5CJ2zGBdV8U9MYJiJEiP7QKdKrNwLHP5P15Z1c1cov",
  "key2": "z1kQJkqy2qNy6ed5u8rJKXahU1BhoaqviSSzcDM7F8ahDLo7hjMtb4EcJEh1EchVjimxdtxFstSd2Wr7oh9ruaq",
  "key3": "bg8sAz7PryjeBBQGXDUp6Vzjd6BJfKBbWHBHEpEQYWVts18Djm533MGTUPebVmhnD4n8sksbdHj1UCYLrduzQY5",
  "key4": "5whxcPk7anrQU92Z2MQ3zo4XZPVzP3bCVFPcDEFrV2sxvPM8A16GK4yfPeVR58b6P55DxeeJJZsmGTtGTY6GAfdX",
  "key5": "3DJ6V9qWUcKP86h94iB38Aan9vbqZbZ58JJoVzQdSwgH2BWJhja823iAS1jhkmbFvTCSepi6KH64FcPedb1u9X8C",
  "key6": "3HkJWxDJBhjEWVErMGXB6B3TUt2szbA24ut7C5nmUkaVCzXckiyxfkiGq1Z38CdgurVHfrwD3iQPkXHk48JbQs1K",
  "key7": "5Vqi3obnpL36ukPMddVqWD3BLu8fUgwurFSGxyVGYjtDpAbEDjQCQYhi9SkCGu3HeuNvYFqvXx8exPEbE3mcjmBp",
  "key8": "5dHBSBvfwpfUhVNVYCd92jKXY5UGyDwbz3K5aUt9qW1SepX2BnApHDM97cMnd9T6TpjRQYKmjvP7yFp32jGf9kvC",
  "key9": "5pCNYGPGUtYBwokwi9rvMFB9iGyZKsugTuG9qY5CjiZwvwZPLQ9tM8Yc6u3ocUdPhw3gzjoWehhYrTvgVEjfY1Wr",
  "key10": "3vS97CeVY74WcvL4GGLEMQ8Pn7MLe6999uaJ3mxkchohPpvrdnX1spdGpyiYSgpmWMhGmYhQdzEQuva13pXF6az9",
  "key11": "2sgnbDezvDsnvYydqBVABUJyavSvdjnzjBqVYgRNnogxsbC4mPUcXinBc9R7cSZveRScvrtYcDt11wtG1WGuYMtV",
  "key12": "5vWTnNXUM8rWitQdcLu87fNSHob4tMFuQmhzVvoPj5PypkyRuXh3eeHrWZu8uuy4zmqkxKh1XzBSCtxAfQqVWerv",
  "key13": "YUtZzviLEt3p35PBZ9hnGr4u6XWeysgfziE1GWsJeVzL2NKThHaxS5Ycajv6jfU8KwoN3pjUvkjioZa3ERPdsLp",
  "key14": "382Ca2XgBktHDnbFo66EYSUGN1nsPjNenijVn29bHyR1rHsx2D4gQpin9pU3FiGLvSWoZ7fTr1noxsLnvrtSHA9F",
  "key15": "tWNEwc5kBQRYWqayppBGNyS5mbrgsqL7TY8GPvhqTC6oGJPjhspaoLQVMNMzz6oAKSoABPgHoEaQMP63ekcXYAR",
  "key16": "22rVZVfHRpCY1Sgk6G73f93U9ndn3efDgocvk5jic9Nk6b8DoeCfNoabjucy56HAMyJeQWJsXjxM29uJyCZLZnpQ",
  "key17": "5UCsEjiXSsz54Wjp7MyrZyBZfjSwEH1CuRLRsBwJQpLgW78hiNFB5LGLJiPWrxLBGj82cL3895WkZFD1cPDewWc",
  "key18": "2mQMUmXmSibLu1oYp18ej69cbadJUXyvDtXyj3wBpMAjpyC3XNrxLHJ5DR9Lms2M6jpuenStxddJZ2YmFbotM263",
  "key19": "3pSweDqvusdpHqb7BCJHEVBdsikNCDiA2raEYLXgBwmkJtLBWsjbUXmM1RYM5woHHYeY1vEP64npP5ED5We4NQZX",
  "key20": "5iJov57QfGW4m2Y561q3b1Mb7pX2NNtK54TP9axWWXpK2dWovewLUGKtwuipwX93H4Ukr2vDCsHxmPCKWirpLcrs",
  "key21": "2dFQxnSofMg2t4b7QtSeJwwR9PjZFgzFxtv5XkxziCSuQgw7BEtJoKKuUckftrKGfrr7S6Scjg7VstzshzPxkFgT",
  "key22": "4Ms8W4kftAxSVXuwT6m6DLPtCrYvBAdCU5jP9zRqGNefHYp6oEj8CjLevWoYu7YEYBpH9mKvYGg7qszYU2tvYc4Y",
  "key23": "5uVTWWCtEEyDAXdE7JCS9HMarrM4jUiVqXyKFzHpm5y8TMFrZoGjn6RPk9WciJdipcrWfg3DxFaCRppJBjcct8nt",
  "key24": "4w6prQ9Scw44588XVyRTAHoC1jmVZe1Pzy4oXE56b7XWR1C9fPyBvvxfpssr6srFrBRg55gpVAEBd59hS6u88sWR",
  "key25": "4DZT3r63KEL273E5vUeW1MDUiUAXRW7Vz235D7cw4wih6UdFKBKHai1Qbgnoq9sz2mwfNxbP2ydQ5bvfJfp5VwpR",
  "key26": "3hqFB6zf6bBaBSrDHvYYPh5sJ285yZqnQoa3SCvRzK2ubAuaZ6EXeGdY288nz8i6vAF9Z6ZpJg125LC81TE8hceW",
  "key27": "5mKGCmTL95jmXwJ68pGTf3337jphKChv6dLt4e4KxXnStR47sW2MgfhvrR5H3FUP4NhsdrbardGk66ecwkhPA36b",
  "key28": "4YGG2koSJtJkuVyuETMrDtX5EmVZohSnYQ2C2rmJrd2dePd7G1FeNupxu2FS5vhpcPABRBSj75WeFBAPoDVSi9HA",
  "key29": "39tmn2cEbn2nTa9xi3mspydaVCyJ1eC1NECQkCknREBj22NqjckrBXfTNZkvdeDpYYvHSH17EUCbmMAFvHUzCJf8",
  "key30": "3ggDndtQQA8M73ZDV53AYdw9QuNkWU2hcdjvrv9848f3faym5Fk8XMgJtXekrEkzFdrzM8bGJ9Hk4VdzgkDi8AKV",
  "key31": "28dQpVv7uhLskYM2Z4EgADjAjACNX9Z6CoxZgjDCTKUwjqgQ94uU86BmriG9S7oxHKPChiQkKqmoV7ZuLyLR3LkC",
  "key32": "4MeAw75NMrU9uuVxJZRy6ENL4Tt2SEqLFpncgg9Ad16VR55SadjwFpjjGGQvLYFYg4MSYN9KwmMqAcN3mYbtTfvC",
  "key33": "25zcATw9RoaZv2UdwNqphpmQ3boD3Lrykjjee6VFuBH7v8YUdZd9BbEznGF2kgJ6xdgRuibkkefBrc8imCXD5CVb",
  "key34": "43RUNgaDMgjJTusruhkcL8tJHbMdN9NRYr9ue8MovDxJnyZwYPkm4Ef7WNGH8n3ZDqFf9MTmXxpnAWDGobsRhcUw",
  "key35": "2WTPkoDMkrq4pg3Gw9Mbshm6Mb9MYmRgary57tyDu9MKQYCk4C9qXY5bctXHtLYJ7Ahs1KGq9UfCmgLfbYwaidXi",
  "key36": "5wdrnJ37HpBLHWUFq6VUkmSTrXcAAYrdB1YuBGxueYpbpQY5i5v3Ds6SQ7FQhCJNN6RMSddBdvK42dRw6ZtRoAFY",
  "key37": "2B2DvDB3sdZx3nPuBwPKkopP1uriRyB85dzTvqhz1YTxBwQegd9XAHdZpH1aiUUHTzsb6HQZEgfMjr6uxdabbz6F",
  "key38": "2yuyJNNCshDuAhg6pwzGquEiG5CjpGFntdyB7Gj5nAWC534XAwqKT8nnBHLWyTvawkMpidc9m1GXYsVRvKKYha6m",
  "key39": "2jfHxQnMwnC7TqXLj5cmagufsNV2jtYg8jQoLrPWHhoC3Q2uvp9vjQcj7yks5pFrKGCDzV8a1iyDqAQw4pddfFBY",
  "key40": "36FshmTnwJBiE3Fk7zSQQ9nu2GCjcyCzj3K2ZvGPkjJw651KPNb6qGww2DS21T9h5nmdgXPjQJ1HsuYgBFUCWBXt",
  "key41": "25bny9uqeCzmXnKzEvSSHbb6aFkUF3mzchdVCnaAD1K8e8zS83W3RFwF5ZCWikW2qDGw8jMTYXv93Kz3c46jsS5z",
  "key42": "3ov5RKJUQmCmVCD4TnqK53cMB93ar2bSSE6QfWaaB6d67mExTDXVTQGW6xgmJwo77AHqvY7o16behZQXb6aDa1BZ",
  "key43": "6579j4ky14gF8UaofaQo5E2vBNMfnYPGjyiHpz9TfjMWhhusrDCF1V7sMGPc4qzs1Ey8YsGo8biT6TGFApkFAf4K",
  "key44": "2Gp8QPbxfVNiJqovnXEBHtYtNUZTxjkiwQBbXLxdQZHR1eKGyHTZEdC5WYL7aM2oDuxsp34xcSAJomkZC6abndS9",
  "key45": "5ckchySwrzcFzY4SqU79jDLrbip2L21JqUMUF3Np35mX1DvKki4qdRhmJwhgyihdiV5785Dnt7Ww5tgT1hPY9yvW",
  "key46": "5weUJ43eGZPtNHJYfxiyDrnBEJjVxv9jtkXMaP5tMb5bXKTpDXs5zpoJSaMTQLg3DV39i8qkrCZWKfPfvnvgv2zQ",
  "key47": "2mhXpmp1Sw3LK7A9Z5ddt7qGcot7jXQd35HQA1JjMLRX3yWM7ZYWGBRbNt16wXqBtUFoE2nVPDJvGeR6vKUngFdf",
  "key48": "Mh4eEZuugXijTgbfiQAVweKBJxyWhkh3w7htpRBM8c7owebkvyaLnDxW1DXrgdQpx7wnfw9bkDj2CoYHCzQA77E",
  "key49": "3YJA9YDC8oikSmarZNtp1JmMMomDA9MoxY8N2cVfMtgg5W1MyNXd6rqKScgyGyde94pyvN5vnx9t5oFGKgNrR7x3"
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
