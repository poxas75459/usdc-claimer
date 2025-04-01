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
    "5CegSo12wTgNDfWM6xEMmT2MaJJsNJfPm3c2Kf5WKt4MQic1CkvbbFsetCvoufJjpgkHqYt4u2KYxz4fvfijHEaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EFjw9nQTNRQNgX5QzMzvochMxd9NyTe6ENB7iRcJEMd8vrC51Ri25cbBP7GB7ZcJMs6YP7ZaAwezvBNWDPchTo4",
  "key1": "ukBMedqRcPv68D5YbrbkoXdrywhABoLnSFvQWgZzmWSzyNXuAJcwH9wgMkXw99fxeGvcQkqXHeBefGf5wEj9Eic",
  "key2": "tYmHWnEt4EVREAv6wcLbuM16EaB8VKbabfjcCfH4gcfvZRm2nTzH5MTKvANg9bYM2HN3vMjrhTApQyAYbKAS1EM",
  "key3": "5XqiTiNTiauTz4TMNtU8RL6TZoVDGeMGPgentWUc1AGX1mg7Z3rEMv6t5db5Ce5HnTwjJopfwGDjVwTE8wNeswFj",
  "key4": "269UhgjQGNkoqQ2Dm8JhSTV15GMiCKV7AuiEBDuiDrW4knEV1bFtF2zSysbBWGA2Ytu8SKcTLbDDXVSCSxTf8V6U",
  "key5": "5Md64EDcZxbs8sK2TdArvUK1NZFAxrERVkC4mwAeihw1YBMudLhPjhVgYDJfTPyJnkf3rxw8yRPDMwhaAy7hRZMq",
  "key6": "4Xt12RGhNizz3aX16DwDo25GFmJwFuEBSMVeiK6jybDyNbTam2WbGVLTZX8A9gYJdFtxyoaxfY65ZbJBbBnswYDA",
  "key7": "Hkem4bhyeemkQFbVF1AxMR3i9PsPrA4kkhTM6LMCJZSVmWiy5aBHQTMh2MLrSiMRphrDV9B91jpGz6zwk7zTnXR",
  "key8": "35w4hwmhTczDuyG4R3zg4NktYwTB4fG2twkNLTAYnEZreUUYz99R8aXX73xzKGrvXdBojSykowUUT3swyjCUJe4E",
  "key9": "3jH1UpbZRnVghRVFEyZg6w3B4oBhEk9qU8vRtFQ9NThPQsvTXy1KghTQ6hpXJSAy8qtt3i8tVe8HBbNEZ9P4RC7j",
  "key10": "4FavL2Vh59o42d23sLGooYAas6jMAWZLiqnen199MpWFTfSWAzUapHjJpcbwb7JJ6TEnrDbcgfMtKEH4zWwmSiwG",
  "key11": "zrZf32fCdzf7e8tXVdxFypKbC6QSVsZ9vyqCvk9wuWipB5vYtfw6m5Uo54oHDdyTVebSzDfEb6zJZnHhcz3Nv3Y",
  "key12": "2VgQKBC7Ay6KNJBaXgee6QwKYg2xNASSswYKrC6DDmtceGK8Jcfj5PKqBHiuDxPnJukaDQpGPjA3areSe13wRSxb",
  "key13": "gYeYXLRR3S9huHn8uKucVgzP6F4cAmD33Yw272LG4xMzM9ZrJ3fXn6McwpQ42yskiGMdscgDZVCJDzYbhp8cyWC",
  "key14": "3byVFkzoBEtu4buTFduEJDwceSkMjtLByN9UUcfZoJ4AECi8cyv1bQVcCByyMgwqDXxhCJURAfABXxjSd4tuHmUj",
  "key15": "2XM8AECTdo38pvDYfLRpBEkeva18ucRJtyHKXVvW653v7q14N8jA7YbHn8XQ4SEbDBh7ZfBkNUiYbY2zSWujWxbF",
  "key16": "32M49WmWaunn5bLZjzJC6vMQLYfkuX5NThPQ4yV2mZgQmCUyoQbya2zUXZLb1pbVY1SbnFSpJ7i5fmzis54cSyow",
  "key17": "52j6sCmjqTy7g8iDdrGyMErxoWYkAs6ooYvtugGESfsQwnrnEJ5vNi1WtUDjsCz7unxqHrwbG89trhwdF8Y7qgJe",
  "key18": "d8Vw3jFLtbQjv6nTzohdfz1rUWMs7L24XQnMWeuYVkcZdPjjeVV4cSZGNtPu6VQ4pvowcKB2rTCbR4FwMjAtH8A",
  "key19": "3nzrZWFkXfn3Ex8bk2oJ8tx4sYgCsDAHTNMyE11uX2XpqRNByyJUBDs9MQt5RmjDWFnAW6EcKEnFteqVUXKsH9ZU",
  "key20": "E2bYUhDeNxHz8eUxbwpBgem1aJtfxvF4kGJYPtBVC98EY9Wc9qFGqLfzCR48sw5thKgDAAHRNLo2VaZho2Q35H5",
  "key21": "47tQkhe3GD8rvf2espywJHMXueUGxNoMXcAajQp251ZJTtECimgog7c2AVo5gVkKvTmaaAKtgpjqf7g7S5E8BKPm",
  "key22": "44p9eKnXiuT4BgzJ28imdRrDy4dQtoRGeu6GAx7Xsnbbs6wEegomsFgdp6qfZ7yZBqvkF7ewrqEhxK2fSzWLhebz",
  "key23": "3GXwSKW3bJ6dYWNju2YBrywjM5Fhr6mUW2qQE1sgkv72g6amAQdDQQATRJYdD2P61KmoPM8ZWCHpXGshdf5wMHFW",
  "key24": "4VfkLj9AnsWo5mSxPDL24p9te2ddLR5medqrtuGx4QbR3EiSTfa16fAg1HZvP4fpn5Qa4LBRcF5vccu1CkqrXpLR",
  "key25": "3JJ6nFCPmZJWDAcxeNd8ppt1fuuhkQn7eNed2coU1P7GV9ATKgbbXG3inkzVPVJVdw9tA5hWjLTp3TjfjXAfMPDT",
  "key26": "3Pv1iSb1tbRgkXWJFdqgSEsRGVqiT3rQpEEodnD24pV6ASyr3pnrqR4wPtSbQ7uUu9E52hbbFwaoaAuN467uVeTP",
  "key27": "4quLhyqKe6ExzHzA6dmVQ2Mz8pDwfQmcLXDNSNB4iaE9ZEqmHdMFfkyCUQ7RmKr5v4xr8jo8GZqCNUtnubSBkPNZ",
  "key28": "Zp7Wsy7ygQzhAzUVVkpk4CehPwe8LACVEnM47V8bxqnouYfHnG97e6PcSny4s7oaBmXJQ6YCT3bHrmhjCAQDTbz",
  "key29": "RDiFGfM3dh5UxRpQoADeXMZx7zdgsfweBZtm1447ZJWFsrZ8LYW5YhCHe8fkBG5KbxJKFuU52iERoU8tQL72MGx",
  "key30": "sqvUaSUrMBTJY4rdwUismPj7SbuJ2RcRCKxAdoyoJdAuYgJeVyn2JvWkWLM7gwNxduPUtZBCbWytwA5sXgghc7q",
  "key31": "42KXX8aCUyqZdHQzGSwmsnV5hLWdPZiaGoXAW7txUYwWabnoVr6T9nCfC2kAjAbL3Ws4TPXHqdMaPVkWTqropQQi",
  "key32": "4r7cXnEzJy9qBFYS5CCyWnvUyBTBo1wPFd65zpQpf3DnHqddNkgpLKJ8Y7YYTKzzet7DAbcmPrFLGwNGMuW9hFHq",
  "key33": "22txku7AFmS5qL7A6Xh3q85iCaLVXphTAz9Zhx3fHhYea7yXDSy5wiSQsBkNJv7fuS8CxVdTZaUVtvDgacAJjpK6",
  "key34": "pE8mqH4s6RtMTcYGuZ3ZmM2nLk1amQSJcQje2jDHaBtrQjSU1wHXEZjn9K2ys8xC6hiJdbBHqw89BzsMVfUytdY",
  "key35": "5D4pEtKWu7SKuqAwLRvbeZELR4MPdfg7nmcLLk1DYm9DzBLffvBJtuAtiCytJmVj4PAPtrSUwbV4ojH4FCCWYBMh",
  "key36": "2kVCdhDXy86syndq7xb6jzfk8ziqTujMWW8aVDwgi4T2gkwuywpdhSFuoEdMj3ZVweUzSNaLiyECp422UmiWd9gt",
  "key37": "5YHNvP3d8pDtATbphfBcELgjSw7V1WNvL5pLzgGZimRES9oAh2r7mKg1hSu9J6M8pPkojUYKtYCUQNrW1iMB3cTf",
  "key38": "4H3mrmq7i6Hf7us3zz7mXm5VDoWpUhJS8atFYePR4mExJ5JKLFGxQisPaTh7KPimy75BaYYujyHvjntkmrm2vs7j",
  "key39": "TXDhf5txcyw7Z2A96Qm3NbjrvmTZWtm7YJcNQE7WFRRkh6ByrJtSUQPyrvq4VB24UsXhn2EUKh8taH9yRXMpKAJ",
  "key40": "4V42jhZyqu2XYpXCY7twiwdWR8rcWPsggg7spW9AXCWrXCfPc1yVgcJPSaHSGwwtx6EbUvcCaYuT7mGoaxg3xrwH",
  "key41": "2cq6oKrGi7f42xVQ56QjCo2AMXkgnpoakqfbPG17rLSyggEbHvgh7DKghETtpC7fGnLJdbZ8tKo38YKpkHYgfu3e",
  "key42": "kGKLxcTNiYuh9MgvHnHyg1mmnWcXjAsPkAyn5vyKFZbXyXEnKWvVG2if5Up9Gvg4HTkuQzijdAsMkJEkrkNjk9u",
  "key43": "2zF8NgGyZUNtHQ3iDj2bcCzLSBvtSyNcUYPvX3TQJmis79JcnFjcLQKWwCZHzSr9HQF5NWhUDNrpnZnSKQeXsD3C",
  "key44": "5PKXaiBjMZUKxZdUzbHe2tqoW4htCGaxyspwWRHTAXgbxXvTpBVYpqYpw3yBSQ1F4h6TYi5z6xyp6xeRgtqmBhz8",
  "key45": "2yhX7X9H7MRj4Fjxdp98CuSAoCAn4QBpu8zeXuYwkD656jccjMJnBzUG1KSAH1UXx2Cj1oJj4jdVGSwWkJWwGxsr",
  "key46": "4goMN7y8HLdcU9rUBK66Lb6rjM3abJPBS6jwcifQqQFNZiL2c6TfgbE9s52ocJ2sVLnNb34nwLRBYJjyRGqSSHNb",
  "key47": "5mdtwpQa3JuJeuMgcTH1doNREyPLpiuxpwSMN4yXvwYQ7VbM8KigvYQtzJsXmsqRZ2GWsB559CtJ6HjQuXuPvoxr"
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
