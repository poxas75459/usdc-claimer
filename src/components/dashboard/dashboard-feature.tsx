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
    "1X9fcgnYL7cSqgVyqaSRMwTj96T7R7n26UzaQSh7VwwBnP8vuXoqaEvZedNPWuhfZ85biqR7ydR3ACrPXKY1h7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22VypTUjkP4FZ6KYf315LoHQRfvKCVxecYW5mGqMeN59W4puLntzUJYEowHrHJZgqTFHyigcvLBGjTkpmHkLvH4H",
  "key1": "ajMu5dRSqx3QGYrdexvn5KQezbcZVkemd99qQqPJnUbddUUHx1GREyDH6h7MLATPLqiNtG89r9X3uv2xnSbPzDR",
  "key2": "5Z9v5LwC6YZeNMQQyZipd1QFTjeWwcBtpFDEigaeff5cgzWGCNY3pLT1KFGViB3uUoUCjLmtnhNgcY8xBc7rimiW",
  "key3": "2y3LMiZLwgeG7SKX8xF3guHetvYooV5qHppKTYwdhm8NE7HedsiEmPfdoi1NkvmuN2uUHAzBXLLehipoZBs7XuST",
  "key4": "5DqHdsEYdufhqgYnfg8hNyKdEfm4cqzcvViU7XPNueVWDws6yZ3DYzZXpqGvUqbkYTps5r9REjXnEHzom5VjQxpk",
  "key5": "3YEWTN5zGH5EfszmorVz5Zer8yYoV8hDXQnrtKwRXWS2dN75Bh37VyUvcWko89Cq4yPkuXdhHdqwLrXDtfBTTYUW",
  "key6": "56mP9p3dexx8CBMweFJ2s8YqSXAvrewhXuuyJLggyJY3WZ2ZvFhR38Wvdkdrbc4bBoNraLmSXBz7vRtBBVjnoJQ4",
  "key7": "5zn6SNrq5CNepWUJLk7aKqLbrEv2hCNfYKyY6TjZkk3UzcdJrnJjaH8cUFhqr3MLLj8ubN7VAPLXJ41iCqCVnpye",
  "key8": "3bjxBcqqmJD4BUBW9hVrhx4ZVAk2WoP4VyKghN9hWBM7anqQpKGdjx7PyZQQydLRHwK1eKSexDvCHzNv9RFSXbVD",
  "key9": "56NPio6GdP6DXYfYBUJhHWfXuCwh6UcuKNUcqwxm5wBWy79qo9rxH4ReFViSkptQZRamGSN8E1do1MbwNRbkzkRD",
  "key10": "BXdCy9Nm8DCrcETkFpHauVdRM7aKXTiR35hbHDnvqNHxW39snu3H7XerN9UTkYj7WZYWrU3qnJsjPMB9b9n9Lj1",
  "key11": "3qyrd494WwaoM8ok9qKND5X431x7KjouVnSMVSLPuQEjT9G3hc5qVXcCR9TcX4uuh4QwLNBNQAMq8haMHAW8Edsj",
  "key12": "5Sugd1EbaCXkgSbBtkvS6aUaXhrATXDmtTkKStQBRcMNyzQsL4RcdY8VzRb6ThBrjRKbBqjSWUpYMQFbNHVj2rpv",
  "key13": "3V5zFWkBPw3BPhy8LDLbMahYhiPocyoEG84Tn89tkR934CDitB3gvv2GehxYXqqA71cj3Crf6ndbNvGXfbzsofaA",
  "key14": "5QC9zHCXRzEHUDnTEaUkSsLqviHPXFyA6vN9rfsMJDzKL3aQYjqQj6G8nzTxT7PUqX7hxCucNJU9Pknb5v9dXGVc",
  "key15": "3gS3kTY7uECYdPA6VG1RqbfL63ZNiwQUQ7CCSsJ4dgaaGaNfLBCjm7ZdifQZSm9iTZeaNACcK8MzpWNCv2E8cQ68",
  "key16": "57g9SdBirXnpdyWTgyu4Ue4mGaPHYsEKMLgR3dU94y83Bbz4EmUTPwVYePmdYxPWWr4TniBQ3n5ZEKCFwu67QNj6",
  "key17": "3umhgRhRpxXyTUYwmEq6usoMbTVYFm16s7NTre66q2gXNuFB9oUTGUFiwoYQZvciq64F7XY7MVhzVMrWK5rxkBkT",
  "key18": "5qkbTp76LZhegU43mH1vQtJPR33QVNVPQfn5x6L4ePmcMZgavQSbiMCCPb9KTi3sFMHepoa1ERYtk1GzDQqr2H4P",
  "key19": "5QBpwC1JNxdgzpH93Lz8BfdSbtc9FrYR23mqo9C8ZK2AH4Z4w3KPJWoEVdMCUwdKJXtXSg4uhvhUnLdwhHQz8VSn",
  "key20": "2zXncojhANByDVVh6BKKZcbPs2kySsnkpe2Hao967xbARgpVfX42fygaK2NVTqJW3EgPD1gdEmZGfRVEQtanwihG",
  "key21": "3NMDVP3goWbZgrb32Rbmc24yX5KzAqCVeqFL9kmK4ZxWbxDLCW4mwHcq93ruwLfrYe79J3FjHPpbzMWqhD9hJthi",
  "key22": "3pDTNJ3tBaZZLMWFSRg63TgSHgrWv5z4rd57R8apgePtxV4GFM6HThyZEfK8Xzp6Xghxbhh8wKfGnvhkQNqeeyyK",
  "key23": "MwDpnzeXK7oLTrqZ1nFHocW2fC1vtFCEYGJHeW6xGtFYyTTJnxEnSG9LS7MiDctfMC6Ze7u3FKuGpBeFg8yAw5L",
  "key24": "zrbGkdbhjMqeGKgEFZVNFTGxo1Y3xzSG9TvCYHYxdkBH4qAfrMjEDiTsVN27chHvZvY37AvnyfFDYheoRzvC4Y1",
  "key25": "UHFXYd8PK1AkyW5HiP3GQ6e6Qpr8pnUkG6VBMsRMVvxsRNrcdyzsN8FiLCfJiPsY1UfPetUmShXZ6PqDPGheUx9",
  "key26": "4kG1yThyNxfCgQu6fmtA8h4C5xKJiPARvZEkwyckWTQhAYhZbPjsLPgxteEtAq5pLkhTBZmSPAA3XGVpiGesqYE5",
  "key27": "4RA6goRwQjV34HYVz51DuN5rUrdV8MybJpi6owJ9vVX3oE3dvsP6LbNnsy6rziPwnC8LMyGe9DHm95n5HY6f8FJb",
  "key28": "gTpVZezRSyoyzuyAYUpYJFtxb7CZDKdUSJZSKXQEoiG3pgvuBmaq4AXZz2rMMWxNPgnYaybPP2NtaJzqoK4URNT",
  "key29": "39SizxfKcYhgYWmtNUMAcQ9SKb6pQj8ehpjbhGmKYus9gyyvPTExECY3s7BFcr7J9j8zbUY5JugUGNyPzhh19yDR",
  "key30": "4fBrydRdwFfxvS5CoutjUbFCakNawEsHYwzFLLBRnqVdz4YNdN4AJkxQYjG8qYhf3fXz3qryskGxfGKgaP8FPsZR",
  "key31": "4mnvEN2VV39cKmde7isAbY1kdKbGuagbE5dvkDTN2UPJioBZZMTea6DEihLnxL2MSvHctR63WhRZAjymiVZtT5eo",
  "key32": "29RKBFQVyRAdtgmP6z1HNXiN9jrvf4cxALLCtuivxXt9mYRXpW6XyJvMj6wshYRB2bf2os2HnuLaxd935L9cCW8j",
  "key33": "5mysXWSuHkJ1t5zqStUHuydtVZhckEVBhL6DQXSRPSK76k2vbkvCXCynNFnf7K3xBws6cboQEkDiTNPHqQq4Yqmz",
  "key34": "3hm9BFULE5iaWfFv38GVB7adjTp6i4vPEDwKwrVtTTriMYaCCY9rPhzWHkf9rno6ApxSJoptfBjsKC4XurR9kp8U",
  "key35": "3V1NaVdXfKjMrnUuMuVwtfbbf9yqqaXJu74qXofptggKKLH2885CHSeuD2nmvkSyXDBeKkZmz6XFfQQibGmtXVic",
  "key36": "36EZs36ME5URP5x2QnwDtLRmyFc7sn9tbmtbSr7fQC8W1P3ryBWvXUQEecefBdBL9sypwxkAnVARCXSHQ2q3mMvf",
  "key37": "3nZD1ZzEHoRJDidicDan7oAPSAxMozDawjgY5gturmeNviAndwrLRyuE2B9wf2j4x1V2cXU8etAnmUQRDa6rcZap",
  "key38": "3hRAPnwR8Ccf97UjEfyEKv3nNBCMi6WgLPRbcyGrQMHomH8G2ymzoqgHs97q46bHVS4bLxd9VveQFmDzJq2UbZw4",
  "key39": "3zuqMahL8facetXxF25VsbNo842iDwFtckrPEPPVZAyFVVVkCJJ7x1NkZgSvDTWaiAg4yAvpHeRWKhhssVVXGRGs",
  "key40": "46gKRxPMimoFCTxNDU6KkEihnPi9J935otnkW3YiPTNC2eCsEnaAzeaNQV3hPVxQVhBjjNpmnkgRQzj8Yvf2sKSs",
  "key41": "3HryXqRajcSNE8TFh8XqHHgcDDurHh67yH6ZssDBFXAs72D59iaJ7KaE2SAoAq5sJ2Y78hVLtKyvVUrUZfgEUVR9",
  "key42": "2VwydzTtoA5gCD3cBGJeUsjoHUoTdnPXJ3ZsrNVuGmhWSxkoqmNTHygLKYVAE4pu21YDbiUu5WiNVNbzXctFojKu",
  "key43": "VtEGYecwoc965UMPEoReLyf5QtpPXLxkJSjb8oFJDyYhDW3X8tuJtKfRonwCRzPnEEobM9o8v5mX81wSDhn9txr",
  "key44": "52gE6RugahUQTx7ZN2qrTfRF8WVc2QSRNnLrKAKPnG33NoxuYQwQF5HdyACwFRSSgDGFsqbsrTLnTM9FbcxWASRE",
  "key45": "5zro7Ho5UwmA2auePWv1nX9MAsJCmU9KBtnyPLnwx6eki61WQisyQDJGjjekHiWKFoF69VyuEJhojKXQP3RuLLuv"
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
