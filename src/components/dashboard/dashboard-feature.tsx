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
    "4o6fyq2ukBakkASrqqhS8Knuc7R6254cgFAgwvcWKdDwGgVTRZjBYoLhD2Yw4WJzRY7rbAc7QBzQmFYTRgJngQRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J9fdvGJTtoth7iurDSdfFg5cGdJJ6UJmxjnm2FzJ9fafSyejVZ4wV5XxTeq2UvZGYdtLwnLnrwHASh6uXQFjsRc",
  "key1": "39FR9RxMyr3K4EXrqL4jP4UDHM568SrDYQ7RgduGWGVSaRSrYtFd5xG2QZ41w1rACScYZspr4LeAfAkyi8f8q41M",
  "key2": "3gLUswtPwyUkFMmunDxzgQDkEJqmQDxWu3K2o54axEh4yJUjbbWAZ5SqFeF672ty7TSTo1WLBoxnFAcs2ykxGRWt",
  "key3": "5maLBpyxbBds7CRRsUM17hmaVe3E2LGFg7An3XDyLbaohxrZrXhSxGzhuNhQrzbfXFHbwtD6F6M2DqTaZhk89itm",
  "key4": "4Uu77Wqhs35QjTJTYHPSKDKwhWfx6SJRVjx8PjNJ9px8s1xHaqWiQ1A7FXrCVWi3r6Z35oi6qBBBBiR8fs3Xb8Ca",
  "key5": "3fd7mFaqdmcD7bnmP8xBrp1aC3rkeZ8M6SUwsKB67J9vJgxRu3pw7YeoRpeTDkQPiWyw8UEMf8nDLUvwgY237zkA",
  "key6": "3rk3HvuksEF7GooUjpAogoZ1qDUtPdDEdgkfnxekSvrpUv9NrDQnnHKTGRGWjg7zRiHTiCgJVre4GociQwdF1RN",
  "key7": "57BGd6gzuH4cizLyxZfTUvYsr2PdF1FYrfrhU9D9r4ArjS3CJ8kbFGRZTTujpF9EJZt7tBg3qbwofLLCMMhdrdTd",
  "key8": "3ELuJ8AWUevniJGTf1GVffvvKVg4EnLu1GfsZbZuBdextjZe8gHbaauURAcLhYxmQkdbDbzM9qgLfKxAcdSZ9xoH",
  "key9": "4FVUTn8cAr3BkVRswuQKiqXZTRBxFs5nrDhivWsVWdEQoaiKiAWnSxkoZsDcSRkB2nSJB8av9Wfi4xwd9amEHYLU",
  "key10": "5vJYih8CZYJ6TtAEyn7cyxehFFmJpsCVmWZgf7HZJpL6oMpD4ka7dgMBHmukiSWNkKt8Zqy6uhNULayt5AvGWYsA",
  "key11": "5PVJKLC62ssiMDPb6rVCRJiGJh5H4Bkpd8vaSZvA6MAR6CT8r54yXXnPc3YfFyZmVgY3HZsCBwM2S5Ywq6Vr9cfk",
  "key12": "rnZqVKs3KqQ2V4qHgTrRGZ1hrj8xLRq5JG9T76xW33imUSKTaRD3GfKV5dsQLwpdCZmUYWRfNnC449ZcATbL9sZ",
  "key13": "5MyxBqUo6gRdJ5EUtUUzYbXFrCNn2DYmHiM9yxQoGgCEsFAVtQAFNJLqXThMRSUzHKAQ8mxtHpZrvFBqapgtmE7h",
  "key14": "55VHDFkssSGML1NQRsDJxq9XDxwTGttdVdweU8ZDLy2WSe798HvRREGck3h5xkkoucahq9oTCGypLpUWxYuCx3Pr",
  "key15": "4tGu6VFGE2JaVoaYxA9fzmqcmeUkzWdHp1ypsdEoCF5RGJidxW2Zn1LTCH8iZgWKfSLzgikAXMHyNM4n223ZGyti",
  "key16": "4T7c8Dz25iTLJTbEV3eNqYofeiW2jytFB9QEsBjMWB3TyUuxcs2nfajBw4igJzE3pAMtyC4HwQe6UUBxFo5ipkEZ",
  "key17": "5NuiGFbWuL6yZyx11M5mu6r7xEGAQmgNToXt6Sa7sXMLwAjufFtwy5t5Po93zkzvJHPL45wZNECyVfchPUDvP9ac",
  "key18": "2LKctHvVdMqAyiaku9J6PUGWT7NZ45DPCgMsHP8gHmZcrBGbjW7o6H8nj1SAxNjSZF9NCUXb18PFbizMtuWogFPs",
  "key19": "3iixjQioKekEXqcxa8qoFcBoMBARqCFmnGo7q91TzBEVMq155Jv5y8xi3EvcHVjMwRY2BjgVDycxnWeczGi2Wv2f",
  "key20": "3T9vV4u4Lhc7pEcxPePAhNDY9YUjg1SNJomEwUFEQBmGR4wu5QgdzdxMitjtmVQhycJ8KCqNWe7FLvg3VLR1gkss",
  "key21": "2gxSHdwaMH1WjDJneLM7TaxgB2xvnkg3MJenKvXJk2XSFxWwZwGMBaG38uyX3iBGpFft6PFeVDByuhr7cbkyzwQS",
  "key22": "5GZeKMWYvUGtNHr3Lhmx66fK69ZSGxErry1xXkCY4KdfpLBUs3dLzqEFh6eErWkoiVjgejFWxKhRAsXeTBgnGw4U",
  "key23": "5NVLG7CCHK7t319qoKEojCapat81WtotrhEHWKPZbBbrEXtF6kXXR4h6chus5rxwndiMrmuppwzjT8NJTu7vUHNx",
  "key24": "oZv1nD2Ak5rJUg551aejP8Up76ZCMpya9qkvgUVKFNotRb1yE4vjpFA5Xf5C5pdPewG3FNDNcf3uJqMNVeYDaH1",
  "key25": "4KzfwoTh4bZgYHXCZmqBP6i5UuxFUzKfkrC1f1DJZRMsuMBybQGrW2zv8BD9u3EiUYkx7vs7wRbHYk4s4RXGMJKm",
  "key26": "4Mde4NwHaXHnCFntNCJJ9x6gAjAVGiioBqoLHKBm2czBiGDHrmCwBwYuG2qsd3YFaSa4g6EAcxojBEgKthhHHtzu",
  "key27": "5QP4BypRF6T3JQkwmip6WMhgG9veASekDCGN9kZuidd6eykMoLVAgtxmr5B1ku7ihcSgUUBJueyM6Mmup9MofTAx",
  "key28": "4aWeBS5jMh1AJHbALDWqNb55yQKaV9oQi4h61WHkyQXyeMgQ75qEmCHMndA7oSnGa2iBxk5MHbUR3C4Com7xCYqr",
  "key29": "5Y22tpbuUs6tG6coRBnuzrvLHheAq8XZ6yMELL17Any1v4A73vuGjydWJu26z75671L6QheyuwstgTR7KMbAkGrc",
  "key30": "3FfHPWaaSMkQqzTsaSgvMrfsBs3Fts1r23kqjTFAXbC9dTxAg5Chzbt9nPKi8N1tdD2wQUpcp4SykVSUaSyea6F9",
  "key31": "261Qvv9WeJPrB1t5jun7dBGXo98yQoXvxeVMf1SPN9bNU9JsHB6icEbDQ4xW5MJq8dVjWoD4QPPXYqG129JmMpje",
  "key32": "4W9LuR3EbscSYeVcMQmeCYsK11zmcZKxWpKMvcn4LM6zNJAoJgrCQq3jbRbySJVaoQoXsxcX2U1PL7oe8q1bkdAr",
  "key33": "33q5XU3pHk9yk6jYz8MisBMWYX76dMnQQQ4y1d2SQU2DnkwnAMd6R4Len9G4ANj8TbnMCu7PuKxwYu7m73qojDu",
  "key34": "39DNEFGJ72toQuN4QDS9yMDxK9a9iEAKHjeEnyAfrtjKNkeR2SPvf2K1pKUo8KizQRGx4GDfYYvSrnHTfMxcq8bf",
  "key35": "3dcaF8wExuhZ3fF9uezh6efEgjTBG6PJa24Xu37oD4tA2HZiNqnv3EQ9SY4x5EC4vNkLbSavSVqeUUtsnry3w2Cu",
  "key36": "4jJpn88dfRB6gAPG2JBvtqbwzjVzqSAuJE6XYWvbZgJTLd77Wo8xNsfTPqAkZ6JGe8brWjkrjVRpCMfvwXTaJN64",
  "key37": "5SotZpFs7t3TrJBursw4pidZgg4yJWyDAXpyKR5HjWZhZ9Dwv7q7ubTjKL1jLDTSutjHGf7ELPSkXs3UiS1VpzkU",
  "key38": "2bmMMYxQquxZigH3GuPcoUyLvhSt4Emh7kr47wovmVmVJcRBNtFuvE6nfiY2nQwzbsYBezYWAjgsxvyamGGC6CLQ",
  "key39": "2ibfS4csggyY7SkpCU6Pd386wCm7X8XwWDok1mj41EhGeFDYLzoFYKgiLSa41jLZeo8kbAdgqSGKF6VcavoCrVpU"
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
