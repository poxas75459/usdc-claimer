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
    "66cwUgtt9yvAqBt3sXxUA2csfVSaVapAhrAawwznNFnBwpAC4Zv2ZHBpzAsycFiq5boLvYMH8LwPHTro52zBsp7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m742PRCWE8y1Y7zqXxTJitSXKdn7hhbqXZZaKSNaymL3Qi4g15ThCvjmuPPxm2ctDGKPA8qRP8nEL9XxL13LRcy",
  "key1": "4mvqDbUUL8byMFy2TCgVSNS7UwiYxWegnr78fE6zeZvpKeLZZwNhutGHAr6s2hYvL9sqNknyntZa1KgNajmxzpG3",
  "key2": "3ekqiYBDF92KyoHtLuiZrMtcXA6QbQHKRg2CeodCrtXc9zEkyYUoKLd1jMbEY1hD89j3iGZy6uShP39weJzckX6M",
  "key3": "4fzLAj9S7toppCn3WF1xDsBiRz5DVcWvpmqSkYeBCMNDVXY9oDbxFX3w9a8HC7YcuC183bTwB8nPDntVdxpwJtDv",
  "key4": "3cTcAbXrf4GxQPygkN9XMfzfhVENjnCnDJZraYK85vsZb4qRY3vFtdYoj74DQFYuhPmcKjMWgHpbfHCjCvkJNUDf",
  "key5": "638trBtMPjd8Hq623FhPe1NDxkG1VWvosbLwt5wFrayBZHpMHEC4o9UnWvijma39ET8FKqKQCGvVuL4YhUreUGn7",
  "key6": "nbuWqAYgXaPBiC8e3PSA5u8SbDTeuoPSx5pjK5VrqQEG7nY25AJFaAtfTJMgh16zMg8d4B5nxCrnBgAJYkAWhqE",
  "key7": "2HctrCHkSbBKFJupzv5ynPtJYTN9uU7HyhkBHxPfDwnR5BZuABYyzsotEK2sc9zC5EaQgDD5rWeBSfggmG9roNgZ",
  "key8": "4KodBQ3XPKwNG5H4H5vu7XoKKv57KQsQMup9nb5Uy8jnCkd4qUg6w4dW6yauf9mAmRobtCcYvKeDJcHjpr5qUUuj",
  "key9": "4jA6sYaWDarPjUUrreFGTvb9G8ZwvVH6FbTwe7NyHU52eL5s3iXPzNdcrvoo6UCTxstxokdPFVx1zutmoqfudDu8",
  "key10": "5FD2rdG3tgHbaFBCQFWXtQRrRbokqYQYkrBSevyNLeiopw2V57xCEcXgsTkpnLSLap2Wy3ad2shzY5Gt4Ut4v8CZ",
  "key11": "54J3m2Yp2Tr9gCpuNaPFiyrfdSLS9ymkrQkE7odfrtpSyrV6eQhnd2HAP9D2yFXfLbk2HCBxeezP3VBXeWSr1DG2",
  "key12": "2Nw7L8rjCGj99Q2955pCcJSyWjdTN4pxYfJriHWqVikotKUfrDBj36oe7no2fENRaztfTjDYhdYDWpSrzhj9STqz",
  "key13": "4dH4SVsUKxjXsqA2E3AgkRaV98k516QKKpAN6CD8awnbS4WUszYiwQpZrzEnboZU35cSW9KdSpXBhJTGf6Hjknka",
  "key14": "31FkAxKeBEN65BFtpb7chS1tiaeKR4KnYiNYK65Ymvz7ERSJ9e1b9E4HeGLyBkFUmf9h2ofEGmxFRpWYiirXVTzq",
  "key15": "4dh437LwD21nroGz89VMSRHkZ5kpa2JYW6qoHyxGRqkh12sxLa1Cxt1B2Sf4wYjuomjxwTR39MBxiQLkGaLeP742",
  "key16": "iRMFt12mhLMeCPbwCTsbTCz4aboY6ySB7M2VPxxj7Gqt74oCN6kEAePF3hBDcMJK5rfbNzLFqJi8KD6BVc3T7yv",
  "key17": "9SuAqBGxwNrLhoeapuSJdhNF56ZQ8ChGN1aL8a5DAK5fSsdL6vXhksMNBZcMgXvtQhBgB4dxkHjnHVqvPqQyviy",
  "key18": "46EVwMzteRBHKGbbCuwdCT6U9qKJjLUkJ2Hoha7xVKYR7DUZukHd3LmRmrKgn1avUvCQ9Q3DEYHtF2Gvog1GmVgG",
  "key19": "EYeqP9rrQsCL5LZnZASxGG7az6V6XyxnAHUrPGAemG4RHKsuWs7jW7WGsDSNbQxWiT2YpjTBr9Xp2LDX7wbkagZ",
  "key20": "5YxoU547eiKtQdA6WxVqD9UWJNnQvGJC93eM17wP2V6yUrAnodp2WmoY8VnwryAm12kKENC2gqgDdoBYoVct2wQp",
  "key21": "2PQxRJgDuz7cvMKzRmsggTM8FrSDV16h4uyML4qRntGKbHvFN8By6DzYBcb4GDxX2ZZE8hHdGEQEQnYiNPDcYNEj",
  "key22": "437kt5QDA3ir71eFfJDbH9uaHHSdK63r7cPoSnk9fqRiMk7uwKHhiSWNR2QxoVeiskE9AyPPRcBDdLpqm3mShrnw",
  "key23": "3yjaPjTzCQ75rUgAUFq1tD7t3r9vRnbhZv2XtDZSGGSP58xYSREkGddWvzJEuSy7aG8VztucG5N9QC1WDHVKVeMi",
  "key24": "2MFxsL9YwrJwfrM1G5uX5Fsve6kqFzS84by188ocrfD3yVc8qqiRvqoro8UawsEisPJfY8BSjqUgsi5UYwybH4Uz",
  "key25": "NQU9mwUrrDcMSLr1ziH3iuawdVH1p8qL9LYDJRurDTyogZm6y8uHHJj6mXqfLYhJwWqyjeL7ozoQBTBMW8FCs4M",
  "key26": "Pe87KmfTEAwNs6dURnYdwaWtEoaXxcvdLi24zZ2YB8MQcJRzWn4oc8GcHjAq3Ypid8SifG9UNcsaPXj5zfg2fUw",
  "key27": "26EJWSnTzmQL6jWgZm95GKYBArgG4X7wuyqnPqY44xVQfTmgDET69GDn5PpLpbUGYV8Uy1YSkMZNsRKsNhNN874F",
  "key28": "3GXEVFBvDQxWus5jZRy98yThiv7zD4LWebEuwb1MXqjtrFt6QdDNvuoRZbrwc78S1hVTWZJt9dkkRBJQWdnJkqF2",
  "key29": "4dDoEZnuY1cfbB5JLe2TqytEpfVdFaetm411h4pdRmtSzzComY8F7XVvZPkNG4GK6zFUXF1i35eJ3RkPeQYjwDTt",
  "key30": "mGsDdcaVfSCwnQMktwBPhWVFL4xQ8xRGx2NDqMMQ15wLyiHFkK5PoabyFHKCZsc2dkYidErXXDhTu7fXaiZ6Lnr",
  "key31": "3QMhJ1HHhLqUv4hc8CmdnLwUKugbAGmpdLWGxYDBjxnphXuGjUkvdzyGsrUosH4yauMug1TA8eH1qgEG7Jc8esih",
  "key32": "3GjA7xNWszvxxt32K2MZN1r6PVVNpdxhHvcFjVpAsCrdp1ARxYcGZQqBNujsQppT9pFfWgQvUJoyDdkRVVnfckVL",
  "key33": "2SUYoeZooEMhqgBXsdXQ2pbwkCdAaSerU2GtX1jCkqH1mPUDbbTJphVRFBWYA4gMdVH8yuJsVCjycFjcS5tkRRqE",
  "key34": "5e1Et8WQ7XmGDJXTLFYwaqECGcya7oYds6btZmh9AJeqocygpPrW4oRn7J2pssS2PmXPrUnv2CdZsAbsAW9cqJgm",
  "key35": "4EHRGm8dbH1AHc6sgpSbbgcS7sa2jEuWc16Rj4feMJ999z47qvsXuT7EtQQ1Yho9FXLuWWRPREadFDp9KB32eER9",
  "key36": "39c8MCkz5M2T9GGyTdr1jdgyi1HrCHbm4ty4im4iFXpCxB1fB9UrhUzuuXde7STHA1jQC6VZX2MQSSK7SStPzjiA",
  "key37": "3LinhF62FZniyUHpeth3iH5dgVn3JTjS53a6cWZc9My378Y8vW3TYX77CXnvpG1kx8kG7wqMcAjxhmnAa3guatxT",
  "key38": "XD2rgDxX2W9zo8Za139Doh8buT8Si96HP4DgRnunag9FfRRq6zaWqokrgNQkxhphQgCabqboSRXJXUgJdUUaLxm",
  "key39": "3UwCTF1nPqdBcN8GDijxBsshyxbBwgbcbA76i1Jp3AUvnXHnw1BAnU9koCKcM9dHP16k6i6VMQ7XLyv6Am373cL7",
  "key40": "4vKgB5n8igPFxeQ5uWXewThsuekWjXT4A6BVQkSzCjtSELLVgSLpKuhcGp9s5qmaAVdd48ACkRbUdMZG3C5thtq7",
  "key41": "5LX5xqktYTyVJYzeYASfphsXtRf5gQDwkQi1BzKRLZUdANanbW4FKfqqRw8TtbgaAECHoGchdn6p5cQb7KmRqeCy",
  "key42": "5ey8xB3zPCrpjHhqVd94gSgXC2UEvEZoFBCJetUf2T4w2WG8LmSfmnoupMBCr6b7bx586ALTStDBCoTgmA1fmG1X",
  "key43": "2B45zFohpgAA9fmzHXpYJoZUgyRV5QUEZ2MwBo2Z6B2Kj7kVykAJQ1g1aHux3VAmCgJRgYQBcyNLvufavggqWtTv",
  "key44": "5Wc1yry3tKWeL2GhaLwreeryyoPe2Nht1V1boovS5EozAU71Zt1wDvxqNY8L7bJzKBWKy2L6Q1tQ1a5FYabVYWbw",
  "key45": "2W41Uvj3bVGGhxbWdpZxTSk4rZQQzuCWAt8tGw5WyyG1STWWBCrFRUXf3dB7Eb5ubzZo8viJTrvUBZndPWPG55BT",
  "key46": "5G3WEN7tJcmCAPHNtXbLEJM1qjujQkZUaEcKHjw9k6FqxJPTirPLre5Kpjdo1HurVZvx6hhCMKCeKdpwDQcMG8Xo",
  "key47": "3GYMZ9CtrGb1SGbhzutCBZRMtyCHDAFTNvWdyKtQSR2CtCS6xPXSdK7o1bMh7yaEAHjXonrfLtq8ZBmQ7v9DUTZp"
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
