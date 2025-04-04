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
    "SZs64Mnstomh5u9NVuRXxAzae31n2uC3P534bWgegPc8UYdt4a1g9hB2JFvgCnGNsorAWPDw2mD4TvAkyGAkMqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KD1Z3hZ9H5qqXbnUwNAy6gYMY4TTjghy9x4ckvJ9oFKmuZiVVriExAHR6N2jLPp32upBsg1hk548kymhGBxenhp",
  "key1": "SWWRXbN2nhx4mpfJ2PqGAEqTgw7n9L8TbEqhkenwbhTpNK5jdttaW6y4eijUkoX1f3VToAoUTtF8U5B1G7aoMkk",
  "key2": "pvoPq8mwybmX4sAoJmqQf56bfuXmdvcXPg5m2NUM5fSZURgDenfF78oeucL9jLmJQYRoCj8hDP7D7s9mGqQvpZf",
  "key3": "2LmJXegMT2JA4tFeqkhPhRD2A99akM4WamuDhdZAirD5VS7kKP8G2QsU9RTFUS4tYEvme3favtTNHK4JPyPrGLma",
  "key4": "55xuztCNwTidaXQM5zgoFv9r5A958W6y7oQ565ggPmYMxH6fkkvS18kyqFtsSPSLxt4S33XskPjqyzZqxeRApa9s",
  "key5": "2dvyTjTKNZBDaK3QcKB4xEGzYdZwe7xFPaUNoqVJzG1hfmW9FmLJP2oqcyyzjpCQSFAscc7jfgLZqpv56Gw9dwQ7",
  "key6": "5hdipDjKrWY5nCuj4m8PCKAppjtZX4nxX197atfKVXeJ7Gcj19g2FTzbPj5h8oA5kqmfkW5Tor679BJapTX3YVwU",
  "key7": "5j3WqzRCswocGaQv2cAQKV9hqh7vD37fGYxSouMRVtuEgbs2LevhLWN37dbjtqMZTh33r1jPWtJmngWnkUtAf6Hh",
  "key8": "2jx6HehPrdyhngfdKb6meVMpNdWjvquJmDw4iCY2q8mRRRvGVmQ2NCmabRwE11TqK8m9aEF2fjpuUWdv8RGd3FBK",
  "key9": "LadW6rfLiTsE88TTpQzyUhwgz3PDeiqdhU4L3TALHeDD8rNqxepiAu5tRTWZQbbt2LQHpQfj22CEcDdAKTmcE3a",
  "key10": "5VZRR4Xq7vhCtoL4f6w6BW88Pe9yKMUCKwYvFPwd8Z7ivsE4XnMDsmyyYrmeLqLqaDRv8dniVKRR3WvH4b87sf3v",
  "key11": "6788wEYZ9ViGnyeigkW5Cg2dbUr2gvitYB8ALgNaqLwkpEnd9bsJQ5q2UFqmf9LG1w6BJanVFiD8fSPFodMCLmHQ",
  "key12": "4ydaB7DQ5noPVKYTUwLsQ1ZUYnkoa5uPjoTWX1gNjgCiNCUwka8K45atuCtRkqLJQap1XDPcVyBGVQLbbvchdNSQ",
  "key13": "3MnmWpkgyWoZmKJWmvWYF9bJaYpn74U2ioMzZ6poFKFbYQ41kSKRk9BQHU8RdWF1ps5mQ5JNbqai7AdMvSoDjQno",
  "key14": "4gjphFcW5rGAhM7TEte18mx1Mn2vb1AeKgL9S9KqRZFBGisbDK492efWuy2HFDyifwjchaVDhwqELUdicN7cCM1V",
  "key15": "2yvxMWZiHDPLYahAJ4G7yFRb9aLiGCtTsktoxRaeoJmQPhfqdtSyES4aUx3jS9zFfuckdEGF67Z7n4S8dQYmz2hB",
  "key16": "iQvfKSniUbeNXyvqNaGpupLPTMUAuKUTjcBzPeQKFow6qCEgnWd3WAN7saTS5Y5cnnHfJBRVxgfpaRPQEFA5n7w",
  "key17": "mp9dLUMTjFkW2QWLYvpxzpVH7a5vLmYRyzqz9dLtRKo4gK5ey9SEPuTV2n6C1xyEHXrxPJzEy1iGzRMFNAWXnW2",
  "key18": "3ecrZjGMaR4JbAvfteSx2NyAYPGm6mYUZbVXdC2fyqtRuYx5uYLgHrfgV1QSTXxMizFBPeDW56JQBYG94xvXvKja",
  "key19": "5JkqmWKViKQWYLY7y4rm61zPYT1waf7hRXKm6bkhTkH3eGs1yUmrnwzTUE9hnRqfR6B9SG3iWJrYJW2nGjLbT2kw",
  "key20": "59TTeNZ3dyqB4gfkumWpo3VQC7jz4yCdcwVApFNkKRMuiA6tpvqu2vwyYrJN4MFcRhd5axg7YTC3uuSrd15DWMRv",
  "key21": "4mcyCUd2UBw2t73rjGxDc9owm98be2dEfJGXqLc2RxdUzmtZwgYBqps3ovLRQSjUWdxUs79qH7EiGP5mbmZ2aDiM",
  "key22": "44AB7m8zTM4T68SRtx7ev7XAY99kF7SeyrTmFjeaLfbMf17hAp1fbQkYwpXrrCuV164yBEEBhNN7nkukKfDhsUx1",
  "key23": "3H1r8geh1jZbiaS1W2zJmxbdQuPP9kLbYjzf6rDhszHK2dWM8ToSHUGKMVveHdHo2yRWu1F5ooxecCiKwHWAb4JN",
  "key24": "SN7SegYTHpU3aDFZoZazndzgfUWcEtSbNCuRfacCJ1y1QAvynGACpQw46h878tJN2gCDATRfQbxxCzsasK4TVLG",
  "key25": "2gsLYSToKoxLuCaaJdn5hfrezDVtzQeLUt7Fv9Ksd7mjMfooiQ9rp2q13h1FCnUJzzBXemeuKSHYeGyD1BCxdK3y",
  "key26": "36trxR1Mj6yf5YKWTiGwv1sRzMHZ7p9potVbK4Hq1DSavYBTxSiLKydBfH8g4sumk8exha9yLtQ2DN1ENW45BuHE",
  "key27": "3pGqmzuhTfM783v4Nekh8fnqovXiCpDSK3zKFWd2WNi6zysB4sGLzEc63X3xL6HAaxESvDenKqDydwTr8WqRjdB7",
  "key28": "3ESiRznsZbbCX6fhZ8MxGZ9YvQS8PKxNyZG4LfRpGo2qpDznBj9dneNcRzCaACUtsd3VgRQPco8zihKmNSMDWeik",
  "key29": "5AzSGDc2SGSpkH4eLUiJThG7KN1ZYbbZVLjJRiFKCU2SKbVEX1NN97wZTAvccXfWfdKKv9PsomQC72u2FeuqYpqE",
  "key30": "48NFjhyKE7ggmeumerpT4W9S42ZR1MMhYF67aLgXwNp6r93X6p7FptjDZH2VHgFSWjc3WXtL7nrnoGrHANNLMdnf",
  "key31": "4pZuTUQ9fA5TDEepMXooEXuGjYTzUfsv7gorjaXMeZomF3hTaWzDtQ8HGRLc7rkB83xUPAaZtyCYYAzJN8uofiG3",
  "key32": "3TTaqrPG2MwxZYmSBivgvyYaZoWitynV98SKdmPX3CuRzN3k5oezv3heEXZHhfWpd3Fnd41dCuss87ioZKZFCGhx",
  "key33": "u68vXASwNos6rv9JcDR3HzdJU9UKegdt3jSzRAVdqJm49WHhA2CMehdKhrGupXASKaJTK9xpoBEQXoBXvK6MVKK",
  "key34": "N4JpfakL54jbYWrSp1GbTbo4uEro8vNdc4JJ7mM2vUkM7aHVF6KLeixo4DHafDVhkbxfDBaxT2shTt4fWQm5UEJ",
  "key35": "3ds3bSwh6nku1gqWA6BKXj5ohoFgiPwDr6YM85Qp2hoQX1njCERWiN2f7M2Ed9W3kgmZEwP2Ehurta2xhUtq2FoS",
  "key36": "4RF3ZrN5iRnMVsH2eWeR72BFsazazivZyapukDqALwdiiP2bZqLULTLsRDTLS9SMgnde8DVyq35pHDavMTif3cvh",
  "key37": "AsHUDa6pbopiwBAWYb7uBgqL6Pb6v1p4DfHqVcCmhwMknxQhMrKNTYMawzjoTJYFbVwCwLoJSENd2PewWrgnKzE",
  "key38": "4Eizpcyr43AYcnQXZZeGitGaX6RSLW9rCwxkLCjdm8hUoQcoJeyvnBMCtJpTo5TnLW9yh9ZajVUoj3tkh182QuVR",
  "key39": "5NgJEAuPMuhWrZrnoNbKKpdmp2QzBdxnSS1C2JHXYa8kgXjMVrdJednKgagAUbhjKnpDG8bozHXKCQg9H74H9qvH",
  "key40": "Xvd7vfopKcUKMBCZwgMLUwEaccFMGTKSMjrrqozmUme8SHTNXLWvDGbTHXdGoh8hPBdcdpDzeP5k4gLtUdtfonL",
  "key41": "45Lvvvo7zB2rmHgvuBp4mjBugoK3fsMEszLZ4Gnw5VURvPkAJf7qY7o4wzuDbCq6fMh6uk8L3JFZQwrvEjD9aCAP",
  "key42": "5VnDJRkm17xqkfTyCto4U3to9vBTsS3ZCYisba8Yr5bYDRUiG5mdwXYEo8wCKXs4rk2n3stWGyMvrUGwjBezNgbe",
  "key43": "629aHHCkZnodGcqUPiMsfVwVW5GZMSMNMckTYDQiLGrYLjxaSd8fMwrSd9YvRzr5UVb3E37DM5446RAGaCEoTktr",
  "key44": "4ckENzscN7jD1JsGxCEqV9DXnoaAAynEDS6b9vAcngDgNiVCfYmMDQUinaX1UsVP7yWtEupnL9HZeLxAcBUnMBKA",
  "key45": "5kVBV6AbKsNDyPy4Wgc8x5237SpnN1mj9pNHiDVL6uEEB3mTr129DAREWHBQpu4LWDikuBvWU6ULLjSVy5QqCNxq",
  "key46": "XYdiwKQN1S8znzrKMHSDCk8Ahz7uibow38RAHM5XQ2G5Gby5YjRW4BCZRGvDx52Dj2xtUXfUUt1bcNFNRQ4Bsox"
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
