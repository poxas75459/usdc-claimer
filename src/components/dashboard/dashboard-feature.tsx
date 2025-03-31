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
    "Qzh8wfexX3a7sN88ER8neP5x8hun6a4KsEBTcm1gvDiwEbKAtP7CKs1nsAwjNj1ovEuHXBtiA23Z5PMukssbnRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YHtedfZGHUBwXdDVMFfeSsKRCYqsX9vs7xSNU79YLSnB6eMMVgzmbb46qGBmo1qRc8f1xG9VozNZWiAoUhoHpEB",
  "key1": "5QdPAkd6KQ86oiTvKebZYwVdWTu7tGVN2UyTh2xay33xThhJCpfkpNxNsuFU4iAt1N3NTdTUff5xUmAV1RHXu9nA",
  "key2": "5mA2xyUbwRjn8jFHBJGbbBQxcKXAGZR9gCeYmo4EFeJ1ZhysBxSttE1VG8wG8pe35KQtPwHvJTsnXJsCtgTYGe7M",
  "key3": "46sDqNmQ7Rf2xVsbi4oxyssWxsW5wxFEF8mUnoCuESXHC1LRmSinG3NEEjUS6E3QT2u8CxZNBrYLAuxEBEQ1VBTH",
  "key4": "3P3hAB7LduyaY4VD9EoSUTxGyaMfWZTCWMzCNGBvmEm3gWDkUY33sHzp9LcnzfWpBtYoQF7rbs7Mfzw6D6eZ5c6W",
  "key5": "dKyWnE8SE3SQJLiZFsPijq5XEqjgBZj1sN37KwWhs3RK9TSmDM32C4C7L6vsU7BfTUoAe1K2nPsT6FGsfPk7pMj",
  "key6": "2oq3nUuz4A5wDVny8cy7erom8cCAqFZXcqhkhGMr8S68qMN7pn7MtcwLuMjeGs47mBAvc1EEjowosMKCP42aW7nQ",
  "key7": "5Qx1ZG1MXEGhNJrsEeN5Gu5JDTHRfGw1kxSJyJpmRwM1e4oqpwwjtm9ZK8v7symSy9m28B8XbxnGT4CDDR2tsJvq",
  "key8": "2rme9r9kAGxfDin9JdTWKjWy16WWPMVosg5by9khusZnL5yqpwgcabEWoL2zoKeiNxgihcG8BqBrhqTrieAYqYrt",
  "key9": "5imVNNU5K8iY3ipzzHnpmpuvDrHajPpSKNFFVT9HKrjJmpHhPVLrifNSCHXufVWBc1iXiJeLWcb1EtxGfGFgKkyT",
  "key10": "oydB7aTDvZ5gc14KrHVftnT9nbjUDxGDTvyRBnLijmqcffEzd8YRm9es4dBegXd3sbjwgGnCp3fpfALrhv2Lo1a",
  "key11": "2DztrpnBeeL481qJJGRnC4RF8LG1oECdJo3Z3VjqTfXmoiWsRfq5DQvvFXxuqEtMTY5Yz2KFFKufNmaAuZyqFeKQ",
  "key12": "3sBWSoezZJ1FcYQfEneH65VeHcGtFSaXaNUU7hxJ55TcEiXXm4wXWTwUhCoA2QGRCJwX1X89S8F8nAr6RNwGjKhP",
  "key13": "5JHt6w3bwHXMmufKjWTGrQYeeW1xVFnayB5rTZ8H9aoEBFupa2js5JA8xhKMXGR51vyUdgAED6H56oqDxxauoY4S",
  "key14": "2urorZRiJPUafgpLMKRTqw4ig8F3syUoMBJgggfnNrQ7oU9YTmHjB1dZoRZsPHdsz1mx22NKdteLkVmenhuwaPB",
  "key15": "3gT8MhTNYc6x7rWuwXcW4ePKxvKKVrhcuLfJoGhj23DC7GQmfzynJsic6dk6bBJM6sDBeaY7mc87q3HEUFx2vqF8",
  "key16": "2rNS8CR5G3yH4DgoZ2QU89x9JySe4vcfhWL7htyWJpQLxgMvqjGnfKvA8igVtnntJAFoUjVtXQtwjZteWHfU6uKK",
  "key17": "rQop1YRXm9PoujTpTFoVDfbB3hmaztrkZdTNb6QY4FG7XTmJniTBBg5eYfGgXgUfceYHuyB9KK6UPtDV6Z3Nkzx",
  "key18": "4n8xvFmpvcTpmbZpPUdzSFmdkQ2iXaQbzQkkSoUaQhyNW6NyhzmUfRo9P8q8fwpbbZDd7JP8uHabcA1dQUAcJohP",
  "key19": "3CTwGJpxWWniP7QbirNjBYvuQv6Q7q8DWX87s7gaA8TDCW6u9KSHSiJvDhKV1GwQd4UCUdv31g9WR6EH3VwYKrEx",
  "key20": "2Xp8okc3vGTAeVz8Dy4eKF6wNv5NGnGkzQk3Jrz8yp7LctzqUK5ZZAFuTnf8C1TyVkG2TpnHzoSohfTX9PmPw6is",
  "key21": "2uX6NuaPzRY7iK2s5t1JJMTarZgMtUhDb1FgLawi756HZ58ezNXq1mTKHts2Xis8kHUWarmsqMidEf2bLcj9iKfu",
  "key22": "2vZdWjEvqiSBnz8pGS4Gb6y83b6phsRCXVdJTWijxMNfHkuteedVRy1huqSbG9EqJ2SFa5yKmWy6e9teEwVGKhmr",
  "key23": "3orELUYGrqAz23LG1KWG7G6GiBV3NFRxEsJLzw5eNsryFBQ1w2AyqhtqupgeGtMSLECPJEJy98xoYjnJ4uUQNuJp",
  "key24": "5BUenSzvdm5CVHE2NUFYatszKLdLNZyDPqgPQBh3uED3TN45ncCRvJK8Xs8NuBzcqFepUcvTdF7nxCGMdrTVYyhw",
  "key25": "5vvxgWRZ4ekCEak7vQz28SiDtYsYRVCSBag3vA8qEoSHSQFPUYcCP5xEFtziLR4WYNUPES5FPwNnqsMi2GiES1Zj",
  "key26": "31Si3v4PjwXH978455waGJQwh8fxF4Hei4rLkzgzF3Bqhujxf9dAdiDiiZq62ovv21SMPxQ5nVAnH5L7cD62yhL",
  "key27": "2ZYu8HcqRKYQ1ytfpqwvoE7idB3b938D75jg82veka9xhNKDhoTnxB9rthReftEqvpxqJFewFeLadwLyBzPw5VNw",
  "key28": "KZAP9UFpgiZwHMtYZAZdhYJMu7tNARuMLUdUhBtsm5XY28uzqkd4xV42Fq7HF3X7fAxxYUi9dYjsKqZbm3QH8DP",
  "key29": "5b7UQPPgNbtZzBtEgUyZx8dobiJFW7T6g14r2pun7mg3pnPKb1XhU41vH31HdChdwwkJ7Usxpto1kj5pfzywAy1G",
  "key30": "SK9EVMiY5ukCBBMdrTycZJbYp4ZV3Qsn5WoxRDiYs6zpDFKDxuLT4oSATYKLiPAWdDFrLfRcj7fXKyGNqq63Dat",
  "key31": "3tczJRQLiLuvhNKg8JNR4rEqNjuZvpnxvzzU5Ync2V2pkVRnKrGLxqHSMmVTdeh6LGJ5dunumtDMgbh7C7jn8Ua",
  "key32": "592aLoPdZ64FPvgE9w8cmAh4Kjy4SCiGLtTukS4Vnigm2xiWHAjMUtfvkvuLkcuEHwevLUHWq1iqJsmMrHa5C7ij",
  "key33": "5ZM1x5dNuy58ru4zUtCB17qzzvbQNCwxVZgjTaX2KdiTCroDTG3SGiRLE4p8RFhusKgDB4zBUfnrNyAyM9TxQGyB",
  "key34": "4GBwojXY3LEzeEvJxz3Jv2zxNHNXVnAmRn671oMeQddeNurg5fJVKC3KsccCRUgDZzZjzDdovkri9CJkNSCijHHj",
  "key35": "RjsaJtgRgRKF2pDYFenYaVy7zyGJuLEgP8YUQk7xmvsjgndB2LhmACcdX5vxb4b8Et3HpbZCqEGvnUXdAUd6hDm",
  "key36": "2jxDxKT15qnENNuSL2NpqNFaQUHipbVktAaQe8X6mmUc3NP6REor8kdnthmdEb1SFWZ1k3WXprASoMuo7tAJjy67",
  "key37": "53MNqJKJAK4Zf1kxC9UnQkWBbZsHxmz8zWZHabKasNcSg4xrCmJ8DHkbkaWtnwp3vVgs3STECWfJeNYQEGcv9ivv",
  "key38": "4hH13E7z1zgfRf42vPrMDrDJPi531vmCKpP8m9SenDfbrucddaF2Y7kURpz6xY1HZC75BagD74fmj7uXPgUwtYdm",
  "key39": "2JDMQ8nF5LUdXuE1WZCYgKE17zoPP83woCC4mjUzyEhehkJqZwf41sfWpDREfFFRJzKf9QQeRg3feADMjtowHdrL",
  "key40": "3J1461y3nwksGFLpRvisn6VCWW74RPv2b1zVyDWy3Wm8wCYLaQCqcdhA7XNCgDQnRtkx2FUdNaEt13ZxZEBeU5tj",
  "key41": "5BL3ZmKA2F5JvHV6PHELN5rbnZXGJspECprsucBCf9MYJS7AhhQRBtdF66whgKF3PZM5MZFeXmyKVoTiNEnxYoTs",
  "key42": "1DJvAEovBA2Ax5RmaNZqjiZibAP3uPSw5at34D9Fw5kVpRXS8mLgHREq4MUXDAcRbKZj6dpNJKQ39Z8y3Liyxjz",
  "key43": "2aXJ9GWx1borrAXi4j649i4NLeusvKPoHKow7Jc6k1YA2dziwZT1fHRG8CiQSmZrPFRVZS1VZyoE7REGWmSHUKkC",
  "key44": "po3KrjadepC3snhB6hACjtZSKAWuRXzjA6kWwL7h2jiA68hAuQYjhyz4ydnizptbn9S6aizvFxtCDBx7ZuaSwsD"
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
