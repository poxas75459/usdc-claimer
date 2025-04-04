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
    "4v3npSNYgRUcRPBh2twmiXVNEBUwaFU9xxuVz8Uz2qR5RMrXqrhJCGfCzGR9yqpkNy8K931TxCvm4ZPhMC2tRCjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PbjciDpkdCmg5guT1Da9gwjthx9VFXaePDegMf766NuLV44mmoB7MMcHbGfKd694DPPHzqYPKSspdLk2EJm9mFy",
  "key1": "3NVeh9oSUiFvE97Zz22vtA8vpezhnih2yxefULHgAwtHbdLupwhT3zrzcShZZs5HDTVEyVeqZM84SriuSNgcWxL5",
  "key2": "5SJPY8BZyXvCio1kfohQnPddjYdYmcUVgQ1YR9VoPahZ4FEuN9zpz9FAzSUpmYLRy3eQ28M8ppQPezrTaBedq4nx",
  "key3": "3vezcEUNWYf8u6qdSF5ZjNmmWjyTCQQy3i6QUkHDhAgSp6JjaSBrDnVz2posrZVYBJC1Xvp675ctipQjC2NRRiuj",
  "key4": "4Wxi2RhNhCujtDCT8xuGrYRTDBSRCwSQDQZj1CFtXEDnVjSTTxhQo4CDQouhKnZzdh2XjMKFwL7yNvxaJ8Vuqf85",
  "key5": "415UVLMDjoGjzG2dDNaRDBawPT54T5ipTw9rvr1QYBB3DiHbsf8vxuQ8hjfovh5Y8c3KH3yMzhCyCqQSVWb9HyRw",
  "key6": "2yB9dHbE3bSTycPSRgFggSBcNP476grpSW3PvKswVxtoBVyML6HxST7CTHwXZUi9PMZ3k6Vbqe72GHNxL4JbwzqG",
  "key7": "MfYzDi9UgVawssUBy6vRAeaMLycHDswK7LHQfqLn83CaVcsjmFGDPa8j8zroVBi4dovnYpSNoCGVLsQPJfeqTW3",
  "key8": "5GFhdYHAwd7mbr4WYassrept85DCdR6iT6Bx1yJUUkz1paAw6VbjTJLnoFDJRrGCVDzgHzgCWnEqfzGN8XaPyeyn",
  "key9": "YYwWEDspHq6CmTcLS8giiKEGhRVCvdKNJ3MiuNVhjJJbg4PUqBoaySmBZpP2NzopvJPN3sHmYUsyXeSp9K1AWa2",
  "key10": "2X6q3BHD1DB91E55i7e62kmC7fs1aspZX3BM14Gc2xKDjaWig1mqkYnWjM6aR8bWRZEgwSP7P1FsPi8Xr9Bm4qjh",
  "key11": "4si7GG7QL3obbdE5RrGqZZ7k9AdkAjbAKJPLh1A82EeWusNk4ykTtX2J5YQiFt3AxjSs1rFoGsPUePfYDBuoER1z",
  "key12": "5tThcsyQoimkg7WoduUzkPovraEbXpL9a96vUHq9NPXgAVatyC1tJDKJGqucqGaN64LhAWNujJvPZyswMD5nzmcL",
  "key13": "5oU2gtFudxkqxrJaSvmZrqpzqZVdnS3w3bhy5j3LZQG5WV7sjoFGC2RVd5sz6gPay9fKFktDTTe4i1rM3zX3KjH9",
  "key14": "YRBiyAyyd5gdDFb3XRm4nR1ihsSCXQi8RTLK2xiSXbA2gDiW7Ns33YzK5RLu3PJjUoVNWdXqFyyPbkMAd9YiUzW",
  "key15": "3cwWCMqFDUX9zLeqWdC6xndWaFxfz1AUJQ2pztuzAmUqttpddwFaTEfTqsq3zbmvngAk1dExEvHb8oezngBjgBci",
  "key16": "5qb9x18Jt4aXKXTuQzvfVE1yPvgaPVDA3QvXZRiKjfQR2K5Uixan2Xmvvk4oyKLXZEfNuUqp4WsyTfTKvG2raeoG",
  "key17": "4m2wH7SUbQKGFVVrYo3Yi9RnBZFszmHthbC3fhj8UEmVByuyewvKRjVVYC5k9SQe63eVTKA3B86Tq7s9h5qpg6v9",
  "key18": "3tjggfEYsHKtZGPo1Zzauu3FEWT3RUdsTDHyYy975DqgnDaSEYrzuVVkjVXsHdGpVzVeRdNVX8HLwxxTviVPfEw6",
  "key19": "25bnjYhsAQUhc3bLYPbMsa2oH7tMCVNhxFkd4HC3QmReQEfSevUbirevNiLuf1zenRMkiSnpJseTQrrNNKQnraNi",
  "key20": "5sTkmQL6LRt8HKj2b2QikZfsWFZheAH5ruAJRBorQbfnT2CwCK8YR8hALG45wSC8oCtyeKuZ5j9A1xVX1LNqy8mq",
  "key21": "i4PYZsKJxemie52vobwNtyqfw63eEbGjkzMkjYqRBRKoNUxK26rhJhbTHFm9hzMReg8UUog8n9vps7SgFmK3Fpo",
  "key22": "3Fmw39xQitxBmPrEZS3FidLN46DnEPPRzhoEgK9n3c9TZHKReyFYNmBfu9DWptPFJDQqrQN3VwEDdfVQYC5rAXDi",
  "key23": "5EntNqLmDPS4rn7W2jRAx2eWQ1j4fVdcroLKNPHhD8PHCnNFzZi3FK57zPG3ftxQg129hCZKg5E6KcKiZoH1B7oF",
  "key24": "5Rc9gy9VH4EGdAQpHV8ZK41HgVpUyqJHmWRR82X4qzz2Q4G8RSUNWy9hRst5qMKGRAVmhGUQuhUgacb7VgDLLQ68",
  "key25": "3S2tq6jmFwHKXRZQAt34n7TsMa4kmUHnXEsT3CbH7vmgJZPUJFpUQYZCFNRj39qHpJwBHKLGxf4FDbNBaG1t6ciE",
  "key26": "4B7Bj9aK4wi9YeEmLHeGXZiBptSMzChAFz5oF2TCnbwiJH9U5jin5W36iqA9r9GKs4RY7V7NmoTqiPRjTZSHMeV5",
  "key27": "3rhcaPx6bCYZrrpzELokiAUhvZiCQGJCBovKmZKzsqAKdEZsWK4JonYwYeMQEcAxZLaPQJVhf1kiwfwYEGk328Ks",
  "key28": "3QPYVUAyNs211WqeT5aRP8KavLTmgPqVse46mHbJQkhkvgACVrDyMnU3c5AymzgShN3Q3VXnHAVf8DpUx5tWT1rP",
  "key29": "4wwrwvy9DxRcdpWj43Yme37jpuVXTysbkWjcLwWdW73tLANRmvS2AW3xD86mCutktWhMS9ejsjrZKQQ51ahTmCKA",
  "key30": "4S9DKTspzAexZNpqb1xWX58x5tQzGaCYMAKM3afCeQpTGvaoyy15xjNStS86gLV63m22SdePHN8chpB7qJkXXETx",
  "key31": "5dEApjpX1S5Ta1Skk7pEJd1LfncMbZqzBzvSsyx1iWnGCyN5RC9zhVM6vVEqRXkjCegHYyhnp6kZGRkkmbKUNGSz",
  "key32": "4JoCXV8F4mo7HiCn8iiq4HHaUCQrjvYW5MkQFttp8pL7RVHHShYjNz3G8jtWu2r4EVGzRNEdUXohHFxQfEEqNQy5",
  "key33": "qfg4MCG1WVGn4DMrLNqnFwxUV4AoyFqWfTkD1gX4whBxSFtgWqc9kJrzNw3rjXYsirRsb3ha3kHy2RmG8vTZJmP",
  "key34": "3TiJDK5Jr7V9N7mJjRXpuSaQjVAWVkZxc3eSjX5uCg6Bk911wdzbMEco9sAmUwqC6qU9aFfNY8LsymYMyK8sV1k6",
  "key35": "54VjZuzE5FFogMNUwohr1eD5azYLJEpch7JnC4vEma55TjVy4Nj6HLhHL5SnHr6jpxLNavDMsqf7NtQ4rAautvBE",
  "key36": "3fEXJmLouMHoCDtedo7hSAoEX1EudwhCrtTrsoVTRfHnvYdKSW4dZxz5SA8EtVdsicQkbiJpL7x88s3GwFvV7n5D",
  "key37": "4AgLpZDLKvWpgAUPCjZsGz1AsvR5q2dZm3yLGJgecv5V6RwdHm63xoejEbUaTphBaHuMtsmRnJWREW9DSeya3iwo",
  "key38": "5yQXwN3AXPAMVQp3HKdLwhBKzUUvntUGADeVjr4BTrnQc1kzgGTxEz1ti8pLcQVnwDHBBkkTnAxYGgHsjttRPFMF",
  "key39": "n3eYNsvUSYtejdAKHWTbKbWw6EmdZJjqQBZii9BXGZSLXZkAt2aVN8vGrVTFqLpmYBxeiCuQrUkfuBjihjzBax3",
  "key40": "3fkYFDQ9pQXTPwTkJ9ab5Hc2BDXqq8o6oyUr2Gm1Z1SpxmTzDr6bEMBGEzFHweoM5Zm9f4rz6jEb9PvysDPD7sqs",
  "key41": "2H9rTuXogSqBq2f98egPJ3Vpm3SyFf9xf4ANJNZ3wm4JaDBRDtrKsiLFWmzbCWZrLys8jng1i4h54nqg3VHhqYvU",
  "key42": "66hi6xTs2Ae8Cb9ywhTQHpTMSqm8wFaAEZZoVpDdcMPUPesPyWV9wMea4L4G2kLoWqdXVQ5VN6Y1rKK7Y9BxHsHj",
  "key43": "5UJbyL1j1CX72oCRw6UpJkJFjAcak6tofB3ot1tQCtCUKHfbzsAQHPZn36DeUKcjoU1NP9G5ewJ3d6sV8hkvfUE3",
  "key44": "25zTj9W9GQmfC768Kaw3rRKzx1xXCFbrR1pvkku7uGCwsLStMy2tr2Cr2C87CdsNEVu6w1yeDGm2kdc9KF2ENo73",
  "key45": "5tJG8JKySDfarDtgbZh4oWx8nWMp5Bty4fQh3uJVVX3gLhbwVVaZXyqHGWfPPrsDToUqswpXgo6QPCcNmcWxBfwv"
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
