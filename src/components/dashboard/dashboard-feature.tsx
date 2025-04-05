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
    "2f73VcVeoAyPAToLZQyzL3DdvXPHTGYBjNnRCQsFU3JunWiUhURQCXYVvhJSugba5bnNtoqad3ida4i52iHSkP7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tnUsHNxdyGD6BXE9BgcJgpU1hfqMjFD1RdSgAg2zgaeqy6DrxvRUMSpyPH9ZwrJDgtTkvTapWuiBbrtAkoefvC1",
  "key1": "2LgFLryETxmCgCTwiWrtwGSgeCpuLeWDTZFRFE2vuiFB8irT4q8bq9EbCqMQ1CeyynLCNT4XK6BjCyopfr8xvq3N",
  "key2": "5EhGi66t3RvPuNuoh81Ac8FJJpVc6pVkeSXXSXWqVfuW8prqZteipUXaqkP8rm9Q3tLWGCr9Zwqf9yy4NLQuj6T4",
  "key3": "64jKKWJJnAhhz9cBnN3FGXYFavknHe2tyULexJ2Suv29M7mZXX5ZRNXDhy8C8k3sxt8TJNdTVATyNf68ouyzNhbG",
  "key4": "9hd2GXQUHGbH5uLit9GBeqs5PKGszqtaVszJMz1icid4fyGbNdsbiZ442sxRgARXEEijd5yGKsQN4MT7tnd25ME",
  "key5": "4U6Hw9qVLFfXRRo6a1NwArq6Fcmxi1EQtkZnW2ooY3oqg5972AUfQP7yXwXmiWx5ECQyKqECoJzySSdh6asZa6WM",
  "key6": "2J528D7Wa4q59Yxdz2EaKch3sZxJYpA4EqP5wwPG84QkRdcyTgvD5ijjJhDVPWJWawKyt5z1o1qU24qqnBMZG43",
  "key7": "RTphm18CyUrmHmWF71zrb8p3HJdMPkZzcP35JjJRmjE3qGfh8AUBtn7fzwdQYNjyaXMw1DDavo1vCEh1KcNoyH9",
  "key8": "5WLC78oWz27VeGXUCpALiA2MzZV5TTrQAKuuKB6v5bXU923wjSLDTAksgbEDwa716Cj13EZSwqSKsWRab3YMfDV",
  "key9": "hQPVscDRT4EhkFyiTKJ676k3KNmPKyKYLXFg3fwT8U4fkxtGTfh8P4Qfgtpz2bkwRRYycSVPT1pGDccT6Zmdy1i",
  "key10": "38jRn8QfntQb8CiE9WB1ubQpTqDSomKdHvubR4o1XkXjydoJewdWDEZLtBXZN2a7JVF834RReWX3M6MdAgwgCM44",
  "key11": "3hN3vcngz5JKL6szZtF6ZV7g5RN9Gk8SCjzfrXrTSgm2vLPnF9Di6LrhsK4DaUDWiTp8SbdRfgmjjJsEAaJPzVhH",
  "key12": "3WWViAHttHoUfDZj6Tmpz7nsjeRH9aL2Soa7obSw2y25azcVWe9xCWNnpudx2ApMHZnrdvtstbYKddV3doPdXwT8",
  "key13": "4KeSkmg6Vu98uNPoFXYqtyrCJff2Hstxr4raAHzcAPSSPR7gHoFgW44dUjNDcW9W27n5QchGHxhJ4UFzWn71C79e",
  "key14": "3HX3qAMypZX3ixw7HTQHDSaCE5QWZHwCbQ26M918dhGZ8SxEKMbMJ6XnNBwdx63xuYvrJdeETF8VFcB7r8ARHJZR",
  "key15": "2hCq79k6L6FuMSrdswzYxEmJ3g3MKsaCK49TRT5qW29kECGeUsz3UtoCp9tJMqaEKmemXZzRE2YqpS3ZAbHoQYv2",
  "key16": "5ufDMGtm8354AJGjtwEGJk4gJ4w6eGagWdMxRsyExFGe5Xcnn7N4EPFNHky9bXza7KVMx96pTemzrWJEVELDXbXc",
  "key17": "ijGrRVLdhTqrR7fPSp8TApQmZadviWjDKuFD2EcS6VadzMwhA9Bm7ngMiLDnrMaKGryxUM6MXKpLAHMbZvyK57s",
  "key18": "42np5QcamRVdWuSvubbCYugX78RTrJYa91oeMmnWUKvjaoHFmNsguSYtu3x4qM9J1ndJANMna1g6dXjhawziYYBk",
  "key19": "2ZqqpA4hDtYP1rGA2eudDgv6BtFz9eN9v72WfLZyHRV39qCEignQtpzTPxpWrU8KJQBpPWbCjoUAEwowBHV3PeBm",
  "key20": "5AXVkLu46Bw663Qritr6eLsk54MEv9gDPcoWVjWqMfbm9sgSZk49BT1ETWJ9CZxPKqK9xTtWRFnYhfLvo8Q9rwJ2",
  "key21": "3pqpZjPMoR7qTc7d7qonRGUoRiYvjWgAH4fQzeVNGWb4wAkbfazBUySxV5MgSGqSggBn3vZKWRJ6AKbLvwQik7E9",
  "key22": "6uiSzQj1HMUFjqqKCyr463oviwDDXBhDnhTYL4NBd8aC2B5driBfFg1YNip7MjJqhPjZBvGrav2ejo8Fu4LAvDS",
  "key23": "384VN9PhrHS54cSHZpDneqq76RovE6mKwvaGtwMVfYKVN4qrYztJ2LtFNCDkYUVJLGz1tKTTyXy8TWk71ZMEjiy7",
  "key24": "3HPaH4QuNTkjvGndjp2qZZBoHx61K2SYWsWu3PQanC3WvFxrFZbv8UQwKj3wDCYVK6r9g36GvJd8o7TAKppDhWwt",
  "key25": "5s9g9APq2BaTzUKTh7DQE4W69wMuA52YmXSe28sq61BQjMcZsuxKMTxG9pvQtxkBEhA1mpJLuf65MD3XSkdmPpV1",
  "key26": "4T4Yd4VymJCVwzusvp5pvGDwKmPQhizsBSuTVfN1RNwNAbNxk8TAgFXx2wcD2CedwJSbTeARiKkZuGoSMaEC5kY8",
  "key27": "5atNMG59eXSuKeGNyrViZ3ogCsFnfZxbWby2hjnsBov9EmWKcycdiypVTKaMNyXuPtkL4H7H4dYj8fLmEF9nBWPN",
  "key28": "5CD1SJecguSCPZ5AmA6V3E64hhppAU1bg6N4BUuhpNUF1TwsnvPxt3Atw46wLJ3nKJGaR42Sz9XNAJE8RJhqYG8q",
  "key29": "4iTfs9s3WTNzjyW5MTHnHasv9MA8fjGvuyWqRCahx33SnbJXRoZGrvKDhDjtE5PMfFEuxjnSTLJKEnFVAKUNqUyo",
  "key30": "eZ9HAfirJZtesbSZ8bUMJg21CBtC83TWQQbyCTs32MF585c7jdoDno12GgWjkhCAM737zE4yd5cPyZyw7jRzrHx",
  "key31": "4PSy2sZPg1X9aGdRVh8uTpypKGWsngX11NnfMRrYQUoheGEW6svnpwGwLqWAb2BBGeeg2dWz1Ep6FKzkWDfRaF2g",
  "key32": "49NgPTbza7exNZ3jHBbYCxu5BTcBpiRcp2ShU6RAbMX1zqgbxvbD1PBngrL9WMAUnS2rAtHWUhiCxsHmEuvFLHVz",
  "key33": "41uAUYKwZYnWN1vDFDZgdd5HtaZ9yzyyrERRjVam3VG4ifejEx1fNipS8HR5dxTcEbkxpKFeEdQVHm1MY5fc5xLs",
  "key34": "3tBHKyY1tCDqxyo8ESBAQi1hJUKqzJ7kvbPX9Pq49BtGhi113WV2UTR4ApziEYdg6rzDFLqp7ui4vqzdZDhDJFGA",
  "key35": "5fa9ANVGoz29LrU6QXiP7GkYJqDUjyeTbctM7YtE3gQSCwYFH5fAMxHSn2v5sRaQcAhD2WUTTum8Eun1N44uH25k",
  "key36": "4ExYBuUnJuTUjAgsHjzvmZssHcxtPMS8eZABaocjPEtjZBSX74s38YRgPH5ZD4Scp6kptYm6FBpYRBPhiXL49pWm",
  "key37": "3utFhPnYTuCiHUtvUwDTDCS1ziSURyyNZB2EieyWdgRf8e3ZcS5vqSkQeW2Xz4tsV9ESWk13KzQQLFhuYsf67U2T",
  "key38": "2iiRo5wd89g1qZx93gEbE7Xk5nBhpnxS96LqtbqEXZddGVjg9DvjnLu6JkdDeK9HWBjYE58t7rfdaqsPqJccgaMs",
  "key39": "4agvTcSfs28EM4iUcU2s6EFesd86ufKBWgM2PeXMvQ4Fb3fHziyZbW5gJyYZpuvxqY99qHYviMGEoVCa95pg3JYg",
  "key40": "5814hxYpEyf3VbE867WRYKCSsWEnedbN4coX7uWS7Fc1cSV6LcMaA1xc9cDk5HKqkvgBSYK8BuSbck7DWSKeQZUP",
  "key41": "5D7fHwLgAP3qtGNbon5VNV2mt17HGF4XJ5K2msHHXWpoL8WfyVggrUBJEAXfmEHc9y4x44JM25K4ufv9a7VTb8dE",
  "key42": "5BhmRtae6PznYkmU7WST55v7pCGnL3pYynbYA7aZzhfQ32qki5dPZJ5qRmeM6j8BMPQRzz8J3wsemuLPq6p4yrQC",
  "key43": "5gmPh2SpPYiuQXvL9NU7bi6kVPpNr7dERJbSFbahhBVcE7EZRCc5NJXMQG76wy1VwP4VtVYTM4jFhRN1PuexUWQd"
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
