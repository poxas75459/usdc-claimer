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
    "SqZZnTMRbh2xZKnBsgFNid4bXHTcNJP4iaV8Fc4ftDwjYRokp7NVRYt78BTj9puXSoF5pMSVLhDHP1HsQUueJ6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DTY7bjc9TvBwrrhpBUbeccqcgQz879Y9sDSpKBzYKUJMLPddJZjyemRa6WMjExrVLbx1gYWUQunYpb6YxyTvLhK",
  "key1": "UJzsCqrmyKWRf4XhLMknNGTidX5QXYnNB3dexvVSG9z5VysbLepJK9ZJY5AVJmyX79ge77unNRZTmPCdQTXk19i",
  "key2": "2EmWuJpSGbBBcfqQfaiV8557BneVxgMrHTDnVJ8i5kjhMZFEPVrwbrc3ENBSp6KGJuriUB2Kmq41hobJeU8r4fUx",
  "key3": "3YVZ4RQwwVxki2nh4fbp3REisxbhUwRKdeqqThptBP7aVyjJfebhEMDqg4GbSXKrHpAdnWh2YbzWF5kZewmB6tjm",
  "key4": "29mZXiTZuAgbmTrFg1yPiQQKQg9DM1FfhY1D7orGUikkMZ7gTQzUaYYN4icoDKn3L559YNT6cSZeTeAvb818kBUX",
  "key5": "2ZEm9BFjidbcb4hWmFPaxp3mULAzMEpc23TCswvQUEKNxqdQRNAQ2qFHTZVzz1Nj25tqtTUJUMk5dro8nYpVUQdZ",
  "key6": "32f67WXy6mAWVkGDejtM5EeYdSfahFUpKvp6fzujnoARsCpUhuzaPvxWcYJV518aMyfpLZ55AUfm5rWw3ssxSJWB",
  "key7": "53D71d2MmkLLDWHQUpLtAJLhKvKUDog4TYyxYhMCf8bKtHFZY8xgXXrwT7GEqK2ypNCUQMcUtq1b3VPRNDbKPoGY",
  "key8": "3fXugFQ62svc9skEcK36KaNVjAQHFEa6q7kqcPMpQZLD4g7C892wkzD6g2inFuR9xNVfSzH988CbREvKa5DcRWi7",
  "key9": "b8bGyf1VAjw9NnMfvNGdVzRUuxL1RmpCXu7kkaT74rd8cNBfuJz4dPpVTsNGQUdQ7tVBAmQWj2KQ8fDrNewEQEh",
  "key10": "5kKgSeRgFUMEuMpNYFNHqkiix7uNjZFzFKyHVhZWi1AkzzmHVdrdaGW1coV7nixHRCnBrNNT5oAN5hWcSG7Tn24C",
  "key11": "3JZ7NzZsdxpkparG6MjDKqMFswM68xekg91Umq5c3Pcb15by1hPF9fcYcJbDKfzso92TYB1E5U5gNvpqeVWUozY5",
  "key12": "5WX2MSrsWcWJBLitGYqSQyBKdUAExN9jNqfygdKuF43tzMTXVQXierdgsQ9H8y1VnXoKRqmvx6WsRDLaccJCMrF4",
  "key13": "2RZ2WidhdKAk5mEvUSZttudJVjY7XL2zPxMCrSNNWX9Cxibg7CNZt2UgC3eJaWDFptuJn7nvcFrPQ4t9CAzowgwM",
  "key14": "5vFW7qo1aeqJAX8en9VhCwff8Qgd6W6UXdERx7xadkH8ndzPi5PSrL83Zr2nxMbGv525RbW98ukybWbF7Wea2b6g",
  "key15": "2SigZcV4kS1x4Uw5K8AQuX2d4jL6qkJme8DV3pgE3CTAcwzyy1uC6vZTUY5GoqoNXa56nXa2GSppuzfRsBBHnXRp",
  "key16": "2h8PhnbpdCEM9aMQKSN2pPXsk2c2S8CRkT8gLBHJk4RGWeNLv3VDtH3dPNnHKcruAoUcSVwnej4bRnXqe24fCYHz",
  "key17": "3CfxDZKRhcX2PinaupZf2zSaU23ZBM3eYvxgiVDDFNTbZNVLk8PkqvAvZH1mEjZ1x25cC7xBrCU3ZipRFaj6T8nz",
  "key18": "uP87uvfP9tradWJUo85A7Evx54hBBAyJkE2MKKYqxDbk3JkziMRg6pFnxt2XGqsKhRgvYgchnX9PyHeNGxMePjX",
  "key19": "49VNAhydWbfyYXWCsCkHwbZmaXaPsHrdD4BAs7UHX9px1SMACFLReLqokNX1XH3yH5r59g7KRHKvtsAnx5Zjigta",
  "key20": "5KpJrpSi5KzB2sswLTU9WFKGkeKKybWJcBD2CjwmwHUkQW5r9ntvtaNe8kVvKpu9V8SSHzgXmM9ojyJ5ZeFY92Az",
  "key21": "4keUw8RuaAJYHp4JoMvmxVGhypZ2oSoxKvp8q7Zifyax2PRRDkEBKXR9paYmzQSU4rVdeHnrBpuqLyJixbGntdEa",
  "key22": "HLFzWECLveTE2QvY2uuE8GzJBJYdRYx1ZXjP9GNWjvCJuipPc17pUM1Ydpa7SNfT1mXj8U3Tq5HiNpYUGsdKFFe",
  "key23": "JTpk9Wc1mNxMBtJugmwtBYKHWxHATC2xE36cWi5DaCzdnmFMGCgWm4H7MMK4QLam7LXHRTy4dxKvBCiGWiTYiC2",
  "key24": "2uHk2kFaJCDSF7RZjqQMFtKuPpJDFF5AFEzDQtPqvMpZb38MB9Ldzy5uTVdBBnh8r8PWyzWBuLgm79d5TEibBtMq",
  "key25": "47batBR8EzSX9w4RyAEMDGxEHuy3njEjSrWLq6kDJgabuo8sGb1Pk842EPZNqLDUeoFfR5HS9nNZs9b9W6121Yv",
  "key26": "43bLMFzMt1rJkgijqusqWbSbBWhV8GJvRpUNTEmtFgqapHFEPxXvAW9VKx2SMW8ih9worjA6hfPomapMgsLoTjDn",
  "key27": "3Q9jkSBY4m5xRwzXXXTTnyP2ozZhHZyiGRddb87e16rKamF4KJc9KS9kniXTWWqNZTNepkfN2eeBfECPwWQfoRVn",
  "key28": "yjM1Rv13uRkAYdPFS72YAiUnuBkj91eNMtJdjHwExHehdeHMBNqw86FwD5PceU312mFjHZhoQtcgnK1xh5mZ6U5",
  "key29": "yfSf3M4BDw862SkuiGyRSRoCkb3zyZjBBrejUjdZc7wFrgNi9HbQRj69bsabM6zydacAR4XXPRwmzVWwa3xcD7j",
  "key30": "5sLrhRQhBSNjobiXW5fiWMZirxDH6JeBW1WKfS1C5ERbEVFaovTryYU4ReMEmjP8UXroCQx15agdmW8ZGeKScVyY",
  "key31": "2WsT1bAqHo35miA1b1PRKwKYfh5zykZiB8XrAhB6xzGiXoYXVvkArT5z6J847a5nrNKftYNTZw3PHdgAwv8FV2zv",
  "key32": "3rqVN75nYaKiZad8MwGFWuZyuXFRACCFbuc7JfLxk5ppVsjLGFwvNmjDSjrPiTqHQk8Qt7UtmwqWuGZcZ1uuGKog",
  "key33": "4BSiBFDeTGYNiek3hctnfcS9RNRhiVHzUGqUT6VzGm2k84pBDWh7kVTCYTR8XbXUzsE89EqMrpkjVJEkJ312Fu3E",
  "key34": "3Km46aefwS5G1p5X8TyTsAfqQNmyxidV8tARt8qhvndmotfF1AjBHTHo6SJna7Wuh3yY3RAZtNqfM7YB6qfGGkZR",
  "key35": "bj84jiYhvLe1xks2jsjHC8rWH1JJNpZDs8kxnHMxa81aqfAR63S93MwrzrpTPHLvXBqUmebPhGPyERthWjR32kZ",
  "key36": "2J3NVTzBVLw4wxtmMz1kcERT8iFmBU6fGDPvVy2Jm6ADYgNeDGs3cbLwWfVhHxHsqTn1T82oG61zcBqg1W9KgXsz",
  "key37": "4b89R2xoXDakMZ3aSBjtAwby2hfwjK6CVbpcv12m7FmqrcgybdmcSQ9cDGnf771Jmo5cjRCsMoWMLYgHQds26eQs",
  "key38": "4YLwFHptR26jfA46NK9s7fmPdvJ7Pa578nNQtCA5LFNpWh31moA6fEzXtUB4UReFU2SUpntdRcGZAfEjsNSzqkLW",
  "key39": "2vapT5SXc53Ch7ASUTaG5xb5KjVhT4XMtNBfXR2mAGXeswzG8VfJoT1UAerP6tW6w7JF7motqpHVXQ6243tkuQf",
  "key40": "3NTVY17tW5w9sFSFiYcdUDeWsJeGTPcp8kdSZymgJUWt2A7M5wjzWsVMSHGjAjgMjHqdKctmNgs7p4JBgR6dK9HT",
  "key41": "4yx1Ukjm5nfQxbke6HbAkkE44bihfzp1FJNUTdbWwCFpEfSnhEXxXEgQRotxoU93kyp11MMs4Q3es3iNVJ1v44o2"
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
