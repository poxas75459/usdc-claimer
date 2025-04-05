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
    "3NF6W9JUzMmnW7tLesuk8hgdupWscqste2Y5CpgDUGHquK1uW955dJkWpYQQXRDrNEVLgXJzkFLS3TkSzkL2E8gq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUFS2ackfBeMXqmK2GWNUiPJ7qnjDYLSfa7uy746xxhM4EkvKiqA3DkfmMVXmzzGkypmFn3Kayfv9HSazsw1bxM",
  "key1": "4uXSXvD7gydKouRJ733w9SokTixnne52ENFEqyyvurF24C94LxinDTFPqUgVgHju76BCKTMSHfop1penpkupwyNW",
  "key2": "3L5DmLkJkZ4R7J7j8CrPaPzZJtmvJUQTGHnANCTYp5EdJF3z7enZK8MT1sxNaYPv34Cf9R57Poz1gCDaq39xANif",
  "key3": "2J1JxPLFxyo3R5WpqSRy8Ho1AnY6d8AsyHJwxvM2Vv1yhAyGDsnroHbqyRH7aCgrYrkg6nThWq4HiPaW17YbENG7",
  "key4": "4s9U7dmK1KpVnX9TxQYVDQJrpA5YvibujsKGMvrkrhBerVPgip9Dae1RPViucrPeNtsdRqhLZUmpHgQXSBqkz4p7",
  "key5": "25JBFihJTLskF88EXbgCCPGQ4ysBVp9ufpz4sUVNRkHCeopsLCoHL3egdT84SmfY4m6ZMxgp7UfSfcYXn5xSw24y",
  "key6": "4WHusqyGvj7XW8rJ3JAAdkCnVaAS1Ej7xyLDmk4SzDWGgKdjo9WmGJe4KxZigwtu1WJcsTZNqzv64L8Jj4RMnjhU",
  "key7": "M7Quw9SUMupW2w8iTHw2RZbAenM6EzAH94J4YjpqKrsb2aFYQz3RF9dXiLBb39qqVDjXN7K2STBfN1wqu9jsJ8e",
  "key8": "2cXUPeu8AyyeShDhhfuqayVYJ17egUnj79CbrANyqj3DAtpbSAahqSqW4JZSXf8UxPC5p3mmB37ivppxWRpP3Fdx",
  "key9": "2JsHq3ozRuQUezyeGFCXEo9M7U7sTWRgEN3FH4hwzu3Cg71179Dq4r4yfwQup9E2WX2CdkPo8ibTuiPW1HXEpr9j",
  "key10": "oShJdaEHukTbbdMvEiv4bSFvHNCgokExfRohFnEHRFJXH6HqYb7EiRixheyUGnwoExGy6jK63KZge2K2oeBCJy5",
  "key11": "2v92NTPoSJAvmVsHYhURjdthQd5dgiEvyrBydvphUTyz9uGf91V3g63H81JDnTQ6X9rjpb9dPxhX9w2KbCDA6mya",
  "key12": "3VeFvrTLnSUSo85w9oniXBhgZwFM1KLjHeYvCcGnwE2QHqhQkYVEzuKQqJDybNTbcY9fsbKUoFg2WuRf26QoD1FN",
  "key13": "LRGH5gKJKQkAHBeNKoejFNPvTrMPYmCqZRWTjicC67Ca7DG1gjSbKf37sVT2EvrGK2448t7ivxqVHvQiccSZMGe",
  "key14": "5kR4LUsjHXUWZDUgwx3hXWvMxC3ur8YG4S5qJZNWTjWnunpxtf6bA7NdTijjDg6CdUSHdYZ1ssKVCAZ2QdPcaDdv",
  "key15": "4MeNJ9BjKPAXdAKKX1YMFa9j3t8GvPiRuXK7tngVhQvcjnkNKjQTJ9XsXL9jt8BjPL5cPzHxoiLieyk6kjE5uQKL",
  "key16": "r9mMAWpSeNPV8kgV8wFNAxuY8Z9SsfN8Lid31yxyPB4kNtbbYoKWkEnEEeVmaod4BwKfQeuQfj8LT7bKdF71bRb",
  "key17": "3Qqjdyav8dXLWpsng3AcRcekTnHuRLSWT9EuWexc2UsBdY8St8KaEBfGfXqBMu3aUhtxSsgtKQHpv4c9q6ADzHAk",
  "key18": "5dQM9XzAjE6uQ5pydxUfNBbhjedqQSrgpo6NN3oV2iKxqNBwTcUmR1knxnJXtip2vMgNHcEtm6zasQ8owZVJ1CBN",
  "key19": "3TW5D922yEdPfZPYdhxCt89qwVKBP2z4TvBsLL66fnzLDXSTRcZ9FRApjYAs4kjdwbmAcuMu3EAqcw6cpmLK5Eo4",
  "key20": "ZvZRbG3bvjrydeHrYSHnyGpL6XG2mGKE4TaLuDzVU2HEYshTBdDL8t8rAxmMK41GTYeq2cMQB5afb8W1nXv65uT",
  "key21": "5Co2927dsXFk7QtkL6grPzFecLsUMqUUASFPHEvirsSLi4gFLrns2zckfBxPKW1LhoQtTbuFY5fiQjC3AG7F9BtF",
  "key22": "4NhZdfqewqYz8j6B8cS8XEAZZiD9DLSGs7bf6WpYrojKAtjTGg8x4puoS4iqi5KVvvb8dyTtKFFcC88JpXXi6mD",
  "key23": "oM2BNBDTYvtLQ7eYvTndJhdhYZa2HoD4nhE1LHCwGt1SNp8H9hPbVTNzWY6u23sP2L7r1Q1fLysq5SGRpHEjo4T",
  "key24": "a8AsRJRswR7MjsUvMrf38D9kR53C63VUK2XobKMUaQtvopk6GGLNEtKNT81f4ywP5im8d8oCfWuHwRjTvhUZ28u",
  "key25": "2Y9dc81ZDaXc1ESJ5aSpEQUR6dFxEZmepadiqDwzR1kLS4CC2uvxTRLtHxRcnVAoJ6w5Sfdxru5bXU1zEBpJYrNX",
  "key26": "27VUsJTm2r5eey7KV6ieQ17T6xvLSbvxrRn9QD3ZCskXFcusZSYzeMAcfFAkaDZTH4pZbTdYU5i6eFmzXPwArvUw",
  "key27": "43A5xJGXPq2Uasd3UBYHDj8sX4gHwZ79VG1U22ufwLi8uujiEsRg1DCYN9oM8zYb2SLt8GqjLCgW9uqqtLNytKru",
  "key28": "4UFVEQLqBEYwXienbm6GGp6UoMBc1jvDrYxVAUidgHbQy3gxn1oBWvsB1Vug1ztfnwArFstBV9ChWXXwCwQJcSMJ",
  "key29": "3EFMvVNESGFG1mdTq5U1qCpDitMaDxV9FGTwYXQiUS3egtFutnaF6R95Hb8NkN8YBp8dqLNvHnW9pQYTvkscSdwx",
  "key30": "Ypcgcf16SasYi5sBmTja7G49YfiVuUi2CpXCTLQkP7D8hrWrSHNXCHdYu1WKF1ebCGxWLjnyncX4Z696LKTff3c",
  "key31": "5X7g1v2YVM9mEvPkV7LSWMpB4xmukTJKLnQX8FAC42vhXW4YEncLnzeg8wmcyRE4FK3PX5VKEPBKonqUBbYvuLTw",
  "key32": "2uEPTjCGGLsD5twD7cU7ktHvzT4kgoEtWjGKDiMspsn9a8xmu4bQvjfySDGBruWzYXNHJJGLhroYjzSADTviym61",
  "key33": "4nNiqPVL9TjdwTqJ8QQYzwTgoTUjnC9EPNznvFH2V5LQKCQBKwTRuzZCPHkFw1Jn7qtrRCrW4PqFjDKkCuVG6e45",
  "key34": "2ZFua2f6HWZZmp1rEPHBFVbNjMVR89mj6PWFaQvVP3dMkNM7gp8ywddRQ2AjZYRi8PYMyXc8KaUvsLiGmqijqegA",
  "key35": "EaaWykWYo2wtYGiqUwfzLRVEoyEZcacC8boeq2phWjUaRFbcFusFVK5LUbDq4FM755HUfc6M1bhBMzHRzNx6EkL",
  "key36": "28pQ5BaHDRDWmcQKEZAEDGKE7mAd278p52LoJzdYvtAfNNk54PBPMyCJjmK5s519yJeANheE9BksGm1mQmR65uA4",
  "key37": "4DKYZesPHsWjrUak3WHwBuLANG8VcHrhrGfpcrrKGqx2NUEvzhkxQ4yDxpFP1HnD3bLCGDeqvKzWKAJnZVus5gvA",
  "key38": "5ZiGCGF1qcqRyVBMgLs4xRG5kh74j1LAbkhfvYLeUbzPmSMBrxvmrrRco96Zzhq64osYBq2cFBWsiWDrBh3Zv5QH"
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
