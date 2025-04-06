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
    "4y9HRDMptJTbxxdzNRM9J7xgLosQedK1CKS1s2K2FoA3qZdCCFFDVX1tyU2dqqyMuwk1wmHfgK4a5ZGw2GU1i9La"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sx4TNArMkQFNxxUQMophxAM6DRPneipfaoE3FPKHdEj4GrvLLWqveoAfFCNGcMXnj9uGuq9Xyib8ZrAajytCUQM",
  "key1": "3aCKpKgLxG45RyA78aei9C4AS2JZRbNcUM2BSsFbqsBDT2Kv6ERCUqTm2BknXyCmBkn69zdg1nsy7UbE7PngTySm",
  "key2": "9jiqniwVefVaHN3WTD9nEj8uqXpizvgALf7bhxaSPKHZZZKfVj6gymtFD5DZNQ35DJaKU3GpwthQest98C3ky6W",
  "key3": "5xFe8Cx5sGmWdDnFYmrCXZTRxZBJDGxr4T2iqN5F8rnXcxSUFegeruCz1NPWMwJPF6f1wjbMrXdJHzt1RgrA2Aeh",
  "key4": "rGcrR3qCF1Uk5bVCMamrNWbDNpgJCmW8s7wmLnup82cWDGz6xhSjFL3zxXdJmysHpqQqcbJK47rDbxrA5638NKh",
  "key5": "Uo3SiygJ9Kk77ocjgfn4nsPHqycu8Ufco5XThbtshgHHjMVHu1918ZrAwF2kqZ3Vb8N1aQ5ak9qkENM5CzY9x3B",
  "key6": "4qvugccRgAynfsaARTdsZei9ab6S7eUaHgk7Q5hggQuBQ6MzEMm6NpQs17Cpmu4N3hWroaV3rzymBrHSR6k5yE7a",
  "key7": "u2eGXhRoc4N31pJyASBRcDg6iVMRRa15mXm5VJKZsmKPcxusiKGvFXip1v3t4KJJg3s7WnkoH9ePjnVbwmrqXRv",
  "key8": "3NntXJi4ZZw9QjxQuGc16P9qehtjUQphsFPB1SvymbRv1jhesHeipnNHksYxUQikZ6Vmif1ANQBvXAzGLzSR1siE",
  "key9": "4mYVaJXj8PDUgKr2LLi91TTsEy3uiDdkvovPp75hbfYU81QfCeeVNqjmSTY5TAeGDbwcU4bwZSxqVcSysr8xoRqi",
  "key10": "2xdhPtLW43H5b5KrGULAvfAEmLfUYo1Sdsqzt7PbuYPdJWAMyFkRD9B6Zxe1chG6cgJWNmQirgQtNn3wAC9MG5im",
  "key11": "3zFSyP7uBVLnLx8TPJVuq1V7S5BfQKsfPL6pSoSQKB6FVuGFKBmuHzsoackveuFYk7P2ynoJisL3CMFfEfqDdUEJ",
  "key12": "2y7BQUYXWaVzznrMrU32vPeaCe5YSPYxqTossvNwoc1yMxHtL6fYS9E13HBzXSHphBKmEdGnjKMPLKG8wFdnR32U",
  "key13": "2kDjQ7z2atfbCqkNmb9ZbRRqHiEUaJavDVwpXTKYYGuq97mTPV9Ybo7gbwtSu6d4SJ4psTeSetUcppmhHwV3dGev",
  "key14": "4msc4Wr7UktMEeVkESkQURSSDiGiSNvGjECDmwkmEFWsMnoApFWZAUY2FxLYt4q8YU2yrKSD9TCsVnHZW7sPAgzk",
  "key15": "2wPm5uyzNYjB9xbnocpkw7YSDbdLSJBWpvAPM54StHB4EawCbbFQcA9Rsgbo1s6mfVkenkmXPDZXF3GWrZjtFwgq",
  "key16": "2ehcKAF3dSjW4xMaEQUDGMa8JZQs26d3m3sDmFLBqjMEFLdNtbeC3zScVf4kRpdW6tBjsVQPURBoobBN1ZbeNd8E",
  "key17": "5bcJ8bmDdgvnrju2brVJVPLsj1KywN4dM5JoptNzenEmtNxfuXLX42yrD6kZPPnffyqWdsr2snkmmSProGxxrj33",
  "key18": "4KUdhRXxWkUWb1gNm13HJ14xyYb5XSrhbfe8WccDDL5AxzuwSddmXVpACuPRiHJBmog7S4DZqhdF7p8GEGCrZ5Cu",
  "key19": "5vuAXnijLXN7yszeYGcgjtDoQmAPX8hjZyuVaB3Rxcj1kob4iaPwrDNSdbV5V9WvALa7PJUbd31sDQ7GYCdFW8oq",
  "key20": "o14aFyE8uqP5L8FHR4bx8d75FLTvpBw3mJVUZeiVXG9bjEppw3dydweY2ijkcdFDG1CprMxdigfMYTv4VcoR3X8",
  "key21": "5KLATp3B4YkEkXv1MBdNKNUqntMQpL3iKz2WKgMEXngiqwYbRHZX5iH4PFRwSkztBuEvvYqepU8mv7ueZsbap6mF",
  "key22": "2a41bv51Q7dbS39YaLRZEGWmNWixS7jNbFVLCEKefbnARnP2hUENA738zizfejACcuRbpj5sxpfutdNnf2ym8Szw",
  "key23": "Pi3J7HkZBzbVsjKC2566jbaroK7yZDZENcctfj2eCMKGF6SqYo1X5P9TEioBpfzFjLu4kZJEAZrNr2DRmYCW713",
  "key24": "3dQSxRfsUxCiLEpJv5Q3sP6jNg4Cmc9mbeCW7oov8BtXHf8zi6gJWNfHitinT8P8LhAHgrHJw3NyRjwEMgdLAiMN",
  "key25": "5Nb9uCFgUHEjQScX5Gq7dJnnzpYgudWX1kgzgARoDXRwXUfZ8da9GtTWbZ5Px3CEEf3n2B9EPwmjSRzmA89goWKJ",
  "key26": "2y1HNKSX8gNWNEXcH7Van9hTzMg84qswwsug1cZNK7mGmFVPiV2knhyMRExkD9vFjH8phg9kDzVMx9jt6ErmQMuA",
  "key27": "2g5dwhNMW7WE3bLJKz1JrMi9deCi1QmvnpoMuyVR2WzQWz9nQTCXnf9zJno8jjTxbKbbhARsnrhtic1iea8jGQPj",
  "key28": "2v5X8mSrMh1rLB2iFWcj2v9NfBqEVVrrweJETJ8CC9pF7uGU1ErsKZUmxkXmjQzNphEC6Sr3hMNeQGkeB1bhA92R",
  "key29": "TYBuspJ3W5eawND1XxBUfZqGgQxNL4Y1D15aP6xZtm5VoQcbcfNii7jmqSF7JVimFT1PgJMxP5tWk9doYCSWi9a",
  "key30": "3gys4reo5i2jSS8nQW8C796YQnVDTmV1c18YbA4cxoDHY5NCYqvAa5ViLKmQLRmQLXwSQQZzctuQJXehd924R2Yk",
  "key31": "35UHzsuyNNptGT4fEBPFVxM9HkUTMDkzwGv5dXpVHv9wm3PREQL5dK9XKcZbeztSJTewrDsDxrd1eZNMvpNA2RGG",
  "key32": "4wRMUZuNVMFWZN1dmm8SJFMzQLsXjFvwFPeZ5WHNDKYca4W6hMts1AWpTgVm1roF9JYGktPHnGzmiEzeEdxUjVK",
  "key33": "5hn4kzxzu3PxxEmcSsdScEzv8R4dy4TEqLMZSdwcdcGJTekjF1wTpcJY9UnqL4afmLjcYsqwou5ifxEcn6fdBzHL"
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
