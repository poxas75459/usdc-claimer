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
    "2w6oYX3jYiKFf6uSVEX1A7K5rQ9kXuAzMMFRHiFhjqcbfLNBtQJk2gNBTxWQCkF477Vo8vWPThQ1Q3ZW3z2s12VQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DvVM4J7hjwWDQgtPmJnVFkzsa6NL2co6doUPpEDkGtWvqHzLFauVjM3g9GJqe8vavkx4tozuJ5FFAUEUsqRp3v8",
  "key1": "3jerJnY5Ah6CvfxkyQjB2yAbz6zBGKvRKuqphsZDqQ7vKMsXH8P9VbWTxLQmhX24VBRKs3wBpP7BwkDgkYL2d8d",
  "key2": "3PKJHfmQEE4qa1ziLaKLjMLwHTek6xyfs2yXzhQV33aa2mZgkZPvBSRdps4qctYkgPDKfedsn6XALefoQNjE1PFj",
  "key3": "JfoVLcYazvv94WAsvxXiTWzqkAaHPSJAY19Uo8nVxESFqPjPQGqLHbEg8JX6sD3Xf6cc56E4CSjBc5zcyKvfpRG",
  "key4": "5GvAum1CdWJedPd4eGbEhPpWa3oz7FQUuWMFbqeqk9anNmj8as9JpD3PxR3CdWfDjzo9tntnoNDY9MkG57RKx5nP",
  "key5": "25XNpBjVzuKgjqY85ePhMH4H2XTrMwThYNywKM8wH3MSsMGz2YPyzxJKvhsShKLNaULAgeE7sJqJbHqv3JpEvicW",
  "key6": "2wojAE8fhHGG4AMnDJ6tnwEb3mSmGXctVYUdFGZ2aKPEsdabGATREU1GfaRfyYiMG9vminjmfJveCvzCcxdWXtC",
  "key7": "8bVy28TUkNcRNDJXU8H2VZ2hjZURez8DLTj4cXaG97ZHKyPfcQ4bmu6Rj7HpkgaWUsW7mcjMQcPpsKznfhoTBSg",
  "key8": "CVkBZkFGizDSKd7JfK9e6W82LARtK1ZfEqnrnEVc8N64W79USJkytnF8Sw3vAJAjefhFe5nCm813m3cmUcNK3YQ",
  "key9": "3ycpfVY7Lkg4YYm2JqYvBq2BVRGjVQZa5PpQowceASW9bKkmrg8jzqxJSLREZcUFPnsHTFzGdP3HMjvrh2EmsYfb",
  "key10": "2jUuABoZxB8zYZYF7GkdWxmdffeUwQuwSEuhfR2VxcDZfZaTwH4519bTcRb1qHj1YuQAkoYTTRwnpzsaQBK6dSVq",
  "key11": "2dAD7oDHDQc7ti5oyLgbrkVWB9qrTowetziyXSFhTb1aj8Fs8M4k3UJsn5srTbRNvrJ27aiAAZ9XHkG21SRx8K6e",
  "key12": "f8mbMydfo1DTLX1oK3MFcHwYmNneqywZ7vtkDF6dWP3bZThzjS9rdzF4mewq6e4w1bDv7G87NKMSS6PXTjjcvKA",
  "key13": "3KjN861NdUXwz57AG1EF2sS3PgZzLtbjspyLGPvRCJjqpkdjZ8FCLiikS7Db7FK3SESpT6EM2osCsKD5SqcayxHU",
  "key14": "4kqc1KriNxDqiageFjZ5pxhHzPacqWtWVxtnZLvquVpJb4eYsVUjnco7TUQgmsPf8yRuPi93Lpr6SGTFU5kaAKXK",
  "key15": "2FRwcxBfRPm4iL4okgfE1NAVJR92tLZSN64QDyekCUJb94P8gNkUb31sxau7JGhDiFRkigRB7B459cKPTik667nT",
  "key16": "38KDy5WvggoD1mTZS57bhV4LFUtzWQ9Noe2kZCjJXdxbTAnda3uArMDFfSGFe4c9iXvNJwuwQLVgCCUeKAVBYWBE",
  "key17": "2NkmNNi3afBhAWCQzfvg2xEvmyPihcBWdUiezAZZ7og7gVs6zd92dshF4HL5Wz3tpgFEX2r9516HCapnhFtyvZFn",
  "key18": "5xtr3eUnLYqj4h6jsK4h7Hf8G3G1h9yarwA8fECZG9qHEzQjpvU7DGhU1ZXaQmPyC7jyJ6pYzjRQxqtWNmJv58HH",
  "key19": "4knhMFCMfmMwsKdiXpnDc7A7pyttETztfnVdvEJiTeBjhdAknA1K5qg7s3XjM4koBL3bi8mLquc3s25K4ZjQdQaJ",
  "key20": "4PWz7DRGdLJS4Du6HxasXsuZ5jcbFeAwaG7TdKSRQwkSc2PWLzvUwpf3jqhREuQtG6eUWZmWypmUzWEP1WKzLGjt",
  "key21": "7ZbMTYUSM2Ckud6bpMAVtfHGRxby4FFcW7GMRoKyqpqmtvaP2L6ikRtZpD16xywRwxv1dRTWxydBoF6iMjSEXvy",
  "key22": "5qkNj9xpQV9pDjyHUBVpiSnadi8vX7fBmm1i24f4wvZaVttjpVXqV29QSJF7p4aQ5iWqKR88nRrURjirCPgPqWSH",
  "key23": "289EqdmCjavWfhwxgXmt4158Ugr8LRvkKPdNoGragJveYHXhm7KUqSugLX3JDViB2W4SrjwFs4cqJjMN5GpFf6Z7",
  "key24": "3tULU9x32YL8SZyiDbtTibnY7Eoh8c7h9TrzU1BwjX6q2mGDaBpR8jxgdLvgGMpiwkVogmefSM7w5mxno8yT9CDW",
  "key25": "seQrTzqG6Xw6fHjPPbmgdrE76kkaqt87T1yMMn8iACCtLFdaD7P3LPrqwZqZuKQWjHoUGGdpwBEuE1ZfR4mJfGY",
  "key26": "3hSvWNBd7eh93jRqFkx8EgzivdU9Sb5BqjYiyZMhfArT1uDh2ddH5oPmhjT33JxH5rNt1yYfP3uWyN3UGFwLaGWn",
  "key27": "2uJTrDsvBt8dgsKyods7XckLLYWFPgaQmfZYeVofMEeBySTRVJoLyghGDabC49uHuJ12XUbvAT8ZvgFqMcmHPHZU",
  "key28": "4zbfkDWBzttBtriA8eQHvE388kHoJCAAmQYNg8fpY9V99xWeusjuQLcPeoZtagAZ7TJeHRZwBrmXFZJjZncHeYGN",
  "key29": "4K8KNvfg6wFRaiAp3CsMGeKB8m9Y5Mmc2QuQd6fxS1DmWzgA7BWwMq2Zeg12Z9uaMopZyzMzbDSHo5xWqw3MBTGQ",
  "key30": "HXzJYw1xCQaYJKb7AunJoLHRkv5pVQaLxymf6DpxRVqdKQZ52Ph2Vai3Cd5b7N5h4d8DEFKHWottPGqsY1c1Vzq",
  "key31": "2WJQD8LCWKE9cBZC8kQgsJLyXuhSF1HGuHLSAQ44BtfQRGPjVQBrpQC7YgcPeomrH87N23TJjxM7FaqLpZNDaAHA",
  "key32": "44yPd4QwjexucJgtK5adwYBQVWp2Wp2ZTeKxGH1FRFhFz1mardMJmf9bjdMUbbq7BKdXvPGuy7WUe2tRypE8mWm6",
  "key33": "5VJomwczdf3S3Ant4bAUq4yC3cRvW3bdKusAYzRef9divSCyM1xaYV5moALcYi9mrP6LauSbe4CgSkNHPJY5o9SC",
  "key34": "3h4xzvswHN33vd4ZHkiAu9N3L1pR4eWQ64bc1EN52oHqTJaaNxE9jsq3DyqrJDUNP2z3F98CyqjRHm4V2teQfMR1",
  "key35": "3VpEtVMGTJvkcc1xbkb8yMQDCxQGwSaRHyVXDTJyeQincBckj2iQwyR2FEcJdfFNzHvwaXLidEA7daFBthgwGrnJ",
  "key36": "3UpxcLbu9yF1DivP6QZPSckSx3GZw8yuTPXnfNxVtPyncF1fyLKD3UBoYaVgzmFX6NDtWY4hEc6k1SRKRJ9o5cF5",
  "key37": "r1eaD6y7iXX1yZaRXQy7KX5N9NJZmeRecnYr7Q48FZwKmLSKAzoqknkzoEKyp2gmFJw4YPWUCmFBXxCaC4XdpGE",
  "key38": "kboYeJYJCjG6hU9HX8arKZeL1BEzgVSCLV8MLtskhASf1L81GkJYPwgbDy2XPt7JjARwVHN1JAWwt59mCfYHVTu",
  "key39": "2mCpXkwUt1d47KTBs4MQnsK4gvKzCx3HCcfrh7sXx4B8wySd1KLZ2CnKxYJbG6SERi3BCh7tS6zpHshD1DLwHUBQ",
  "key40": "2zVSqTvrz7VLo5m8CPB3E6VZQgNZrjt5YEs2LcKVDj8dv8efpszdZ5Xfr8UXRsWmM5fnTi1Y4uQt6RhWXkeLS6Vv",
  "key41": "6bR7n5xStW8Brp7czkoWAX23DcozUutiraizvci8U1ATv3LuRfRF4E3tFhMyQDScudsEq7MCH5TFXh2XahVQYsR",
  "key42": "zGtn6gBdP6oJquU8mUaX8BcFCw3UPfytvmop3DRccp2gRc2qq14iDGY2wHQJqGn4Ebo6Ncnrr6qCuG7AW3KC55U",
  "key43": "2mppdZ4UwK32Ue8ojqKMGMpJGKy7ZRvM6K7drEhnkVQk8carNA59a3dewZPqEDwMCB9BZDr5QteyanCHwRFjDCbT",
  "key44": "28s1Mwf4fbJhCXE8Q63At87o5LCgkp3AxLrbniURiCWEGdD1vWkaXY4aHPoY3J17N5T1qyyWGR2GTrzDnGfNEA6Z",
  "key45": "neoN9xWvAtvgG3zzbEDzbsDpbobSxQzBr2ymsosiaDYY9fTRrThisGVeWMgEiQWYvfdfri73hRYvpUWuNHHc9tH",
  "key46": "2KNKC5YuNUFhfcAQ7xyeQnmvJKa5g7nRghhjpvy53SDtVC3ET8JX5effz3rQxdxjoiUwZLevWWaQqowyjCW6jcpD",
  "key47": "4vAQyY7hiXVcJr1xMhRGh9HLASgtema6vVLR6HAze6WCFKwsBQ42d4vEfd5dot6btots3h5QD34tLoXiB6UhdKih"
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
