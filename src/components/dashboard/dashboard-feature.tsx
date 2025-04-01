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
    "52J4NWU8t8MFwJKBQ2PRq6wd1x7gYSEHoL6VjGDNQbpwjpJNPjByVz6UKrFvk3Yf3DtuFUByUcBYqztdYdiHcipa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2edkzFaTrFtzT6tSmcYfPhkx3Y879qpP2wZQPnaxwo29WVCuLSQ566ijbhs2QTsKVuubgH3MLtooQRrRvRso2wW8",
  "key1": "3eCJJix3v6ahNiWGKHUDRqEVdPKh5MurL2UuofpXY2iijxFZfAXPQN1m3sT7kGLXMcBuTf19yNgx6YumUVyrWHAx",
  "key2": "4VDgcsBeokYcaXs87fZ2bKRmjw2rNzcYMF5GcUczw8VkmH4iZVt5uECUX43Sz5iaK28GyksRJyqiHBkRqnz79vhU",
  "key3": "4nLVxq85vZ1oKJMknFyvwwueS5bzacMT3ojGFzwXsBAwApeKUoUbnW37yhjdEVPWt4rL1DX63zV5VZMjq3XA5sc9",
  "key4": "5769XYX5Fg4A5UxWjWdvWXNmykc3fUz3USrQycvfugvCw9JDMKRE8tYWCoUAsEJBsp3RuBbZ8uzEZra7HNStvqjc",
  "key5": "2LKvYoiGy14gKmFiSkrBxL7vb54KqzfM8pPRxmZg12ndiwoYQqr3Y24SSpReqe36wxUFGQ8vXvKqnmMnAwZVf7vd",
  "key6": "4xR9PrXySEwgSb9avfZJKG1aHhRacH4C6zrJvgYmZGmzdt9aU7vykrC31rinvbHefkCp6wFJS8T5oVn3WLUPAHxc",
  "key7": "5khXsnzxQ4JzgvduUPLYQyiZ1x4WY7fqWLM9VeZ5G2fA27XmPkchMPwUD628xrsbVg5SQUNn1J1SzJax12FwBGvG",
  "key8": "5LPnBbcrF2p8MceJkeiyyCiQqoV6piaT3nkBEouPtvDW21mic6UXSMBd8oz1VJPwmDdN5hS2M1es9xDaZVVbgewi",
  "key9": "5RKs2rR1BpZC4h5nwsFgu4tKmQgbVStYc39aLucBMHZVK6DyGRkgGDqVr6wcYVrZZaqNmebyh79PqTetUjQCzRsc",
  "key10": "5NANZqi6sgT5zQFdNLi3h5GoW44SLh9tWzr8DNBe5yqCFK7dSYA6L4uEaoaauyVpmLJhDUtVgL1cho3dPZr1fhsi",
  "key11": "cY8BAR5FGqefhHJouACUUDLHXjw1PvGPQqnwyv2PWUGVAdQBGaPjWUavBc2gaBx5sUdWEjWFBv38hxBRRUXK1Rd",
  "key12": "3R6XBCqLoHc5bPVQvn4JBYfA6prLEJdRfyib2y3AW9EyDDGNvQfY7jK5AyTfYmwGukiqXuuJy332jNmyMsT6vr9w",
  "key13": "2uRnF31zHe6goCAp1Vz5WP3CfSqxsyC6zSW1QC88p5SmcvBVTvwBcCBC9iuQ7mL6gQ85dYGAzwiNzgB3QPFvZw3d",
  "key14": "3z5wdGBPL3GvVBa7VJBWe982yNukEUNKURwauGT555RHzucZDmbgh1UUunD4Spsg9di4mqYBqQ78fLPxseiCFWms",
  "key15": "2UrYWW9ib2vmtx484Fue3dTQgs693WbQigS2ZdvnDd53BpVo3jX5t15m17LmqJR8bT6y32PMUmW8HTBAiUJ4w6Cm",
  "key16": "2BFaJsGTXQAGuHXSQFoYjtn7dVmnSVXmCMtq3dw4u7yX6wCwucPtn9fFCMaDoQaM4bfiyUKgSh4iPiTdP61jF26",
  "key17": "5Mj8GSQmiQTdaXzeTERYpsuxxsktFGbjnLvp762wgsAbQ4USMSLMnwqHxFXwyekCLKhwvHjCho3F7Nq4x416wGxL",
  "key18": "zvybuPhvKWazUB2oZGRg4Y8XfmV3yvE9G5oL9X95wJGDF41oeid5K5vTtqNUVNB3yjPi9DEHJfpqzneT8sSsJrA",
  "key19": "ArGXhJupmSde3Sog3qCczxA1j7HGJen7pSuAYz395ep4sqB38tnVjY9h1jCZMWKAs65jc8ZHkuVRjtUhftZH2VG",
  "key20": "57Njx6guYzYQVkEBXUuboHHYJhH6Wd9Ca9QH5mkGyoK6vv1QGjE1L4sQYTucxWv1R7W3TuMxFRS3fcjaUKKs2xDE",
  "key21": "47XuvfePwxoYWXQ4egQ87PEF7ReGNszkgpdDnqjsuBsdTqG68Y21U1fJja1V88oUGhy7ZnK2yGhqi2pK7Ks2yrTU",
  "key22": "5cWtthSZm1VSg36iGqM2qkGmxtHDDkbjghahqgDwvp2m7sgbH918a4BmLNBgTZZopmQ7KiyoUszJcweC9fiLnyCb",
  "key23": "2BLxywCFeeokrVkeD9S52gvXNXUpgVdqZDRQy4jFQPuKmp2gezqnbdyUjXQoSu6ejDThcjKWxcgxuffTYMHdBhwN",
  "key24": "5woMfKbGjsEhdqa6yFirBtPkMpxGrY5zdSfwiAFus22UwhfgqGweAAabdeE2TFdYDxhgWKVz17iXcRvERs4UnEww",
  "key25": "2VyBLMWF8JTtxvP6aixugtiwoK3XUVFKtGw2191hQa861Z4WcuxHHmb8UiRAbD9yEAX3oWuPgy2r8v6J8zyjK8sK",
  "key26": "3qY6fFbJTtYsfUCctgnfTfWoWtd2ShpMg5W87gohPR1MuvUbTBKLET68wf9KL6oWGqsStR3XZk6brRGC89PYKUsC",
  "key27": "4riz7c2FVapUHHhVSCfCiLUHjYVb3M7LdUrkWPbYUHjeyWQc8vAJVxvwVLvsJu6e87xX3XmxgwNtDGZsifYatF4E",
  "key28": "2tmvYETY8h4yvEyXRmcJ2kHrwEM1tLRYnVtissqNCJct9qgDEDCTKZuZKqscZ94KojH8nn59nNJtrWWHWvFnzSjk",
  "key29": "2tprgNshob3oMCmJW8655GGjSm3cp99VLBBfWaUNMZrJZRzjtzH4kxtArEUBLshzRyXWD3dsZHywmdNjEdB5hdaM",
  "key30": "4pW44FcKBLVgNgE6wmNNYkdX25gYFzozFkn8tPyWPEYFkr8US6rXejJXGmQYk4MCBaTeW5XA7ojSYfUcSMriwBw",
  "key31": "4X8wNHbTxGqHiXs57owTMUXxBPPLb25tcw5CkoGN52zC1o1yrSWVmGVSQWDQTJRqwsJCpiMJ4goizpm7aAPVo3E5",
  "key32": "47Xuf4wNbvcYasfBnTPCCrdJpab64Ec9KB9dTr83eyhu5xAg4Nz538FtsvqPTQvBfy62ncJAxvzJmQs9WLsq4DSz",
  "key33": "463FTXkiiJXTvMsMoJ24ynpSzNSKMZ6ctMvmDGUrpW9RzhMF2sHWGmWkshiusJXy3EGYYxKGd6SVCBdLt11Qwm5w",
  "key34": "5xrap79oprKqcFCLVP2bKCPH2oxQv1grMCqF5wvXsnwfoh9tQc65reiKGtAJDc5U71x4LCW86cgAaMZwUEDUrbxW",
  "key35": "22kVqz8RyB7V67vA4M61YABFYrDJTnwYiLrk3EhD9iYYjqVVrNLMPn1vALVH9GpBkdPSq4EsE3A2U2Zjyha73UrB",
  "key36": "2fgL5EynqmCmgmU4uD5ZVLtQZShYB7vFAc3M5hqkUkrKPQdcPcRnf8qYqWbsrMnS98AXLz9TWBjnfSBwLB5JyUKU",
  "key37": "4e8fRGoKRq7aFrMi7LBjmM8zrubSffPgLNKTfW2nwzZSqM8AhJSWJZEhHKKsFHLEoar8yaw1yaeRkFLPZoiN8xXN",
  "key38": "39hLgXn4n6mscqaHdjpv9hrew4zpP4yg997mfFoa7DaQT4L2qgZVCXn1eSpKvwnw7wzL5nXmCPJQsVeZ9ry45u8f",
  "key39": "4yAyQtYJoqWaufXJqE6sKVXGVC29yEVdhuAsPrwDseMBTpz3hCH211x2wUnRBL71TyWvMpGWssBigHqpwpXxdAST",
  "key40": "CNX1FxpeXcPkAGQAr9umuMtDZ5jJEmW1FPGsYSEuSYUFEknEcUxwkHYaJdQCeFqfRDusZ7pWzwbgm4UgzVNSgiE",
  "key41": "vbgQefSE6mostiRZMAC8cpfcrxDRgmCYhXpBaiDLMbYRSHDCpiGjE6Ucfu9nDSPyaqxDQN91mWNV7niJmEVtN6d",
  "key42": "4Gj2GsqJxeMYjG9t6GPT36xu2cMPsTVmJn2eGAiBDkk5rWYBuSnASY4GatZsgKVnjty7L662yTBGK4nzvqJgzhLs",
  "key43": "EA917YodgPt7jUcbYTcZcGV7z6GPiguzX9ZTnzTrofH8Us4Xvt5oq1wwEhb81mVjvmDiqm4qWBvTYcrkp4vXVMf",
  "key44": "xTvRyZft6Yc8CFL9UVV9GfLGN7GJHSci3qzBKvaQ5PFEhmZFaghghqL8h3wmPRAmJb3tvrADgEyqnbs8BumBVwo",
  "key45": "3v2zPVHUYckWQtK5VHuNf7uM3xde6cCTovcZyKgxfqWsY4BCemTDc4hzUy61r3NXQgG2iDtAhPnN3M2wvgdFbLif",
  "key46": "5zgSdqqFKVNzwZbNGNnEod1ddZsU3q4EhPX1fu3Doss2m38qSsV2GsF5FdAAeZBysL3uqEkeeynrBEBBdtQi1P3t",
  "key47": "2eRd2CDbyutjkg57KSii5nZr4LXyW2EdrmKQPqaRGWfbPrN12Q8oGkLi4Dqb2gugs8jZEA7Ewq4grFkpXEv3XuTA",
  "key48": "27ZXt64JwTSfG7erjJs7K3HL9VEKn38dcg2DiRB6RfY8d5hZboSAEPH7mNYgU7257XpeFm9ZArvmAgvoTZHU7GkM"
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
