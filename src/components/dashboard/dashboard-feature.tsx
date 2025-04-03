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
    "65AApdbcRj4Wx6EjVHDh5M3W86b9ANEmomWGP6fo66Tioq4vRqSrTdqbGwwjc4gxAoHy7rNd9jyLjTgS8AfudjcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25D2XN7aHPBuJmmjTRfFZ5RZMpjUNhbPbcJMKPZgZ6JGgF2QV7PwKQ73bGh8zoVFrApCZ28VgpsWtfCrt5tsSLNH",
  "key1": "41yvycoiSCX81vAQT1xiK7WBettSJoUuxrvhsJzV7W8QBQ4V7aXQSLDj4etvrRyjn1X79bsvmW9wEX9WjEoBMzx4",
  "key2": "5CpcuiaNUnwvN6Z92Z5J7ykweV9GphqFNS14E7Bpmr8XqqCPSUjfLgkz3DktxRC7ox3d2c8iXwTUfvK8fPYjfRoD",
  "key3": "5Pr69tZEM4nb2gozokfYenYePGBhFL8r8QKToT5BqCPWT6UysLuNfQJX6ALmiPyNrdD6rCxydR2kdaXPSx2Y8KBt",
  "key4": "2GEqXjD8vVapPBmSCPACsz8wGzPZX3LjYDXbujeQD2t5qQcGLJN27NARb8ki565WpnPbUb9JJxSZAYFUbLCyf3Qi",
  "key5": "5y7NavCV29eQhteZcbg2efhS8KgGMA8y8HF59tC9PGe8EQcB8R2SMpaf7e1cXhWQ1ggHhboc2pHPvjP7aZ5ra9pQ",
  "key6": "2csLNfUekK7EH9TXujMkwK8G4LBwQM7od5ppNVFuWJjV6dsmAwsjd6ipTYead7Tn7vy9SbPqMPXX2KvKE7PMpMDe",
  "key7": "4vv7ZGb6yMoY5Up58r2Jh4Mm2WRJz5J4XZ9n8hFyMRaAv6kMLXVGKRdMgzdK8qzMjQNxin8yztcB4TQUwJRxq3Zt",
  "key8": "4zoargcK6uqqbSuNbbjNYPf8ZGVSrYKkgfj8HE2arrVFgyeZAFk1i62zM9KHF2Z7Gjz1Nd3Px1mAPShbrDsuQVwr",
  "key9": "4CAxRRBfMetYRAnoWuowoggJSzuQ4cKdz2qhXsMHHvSzgtfKbGSSNW9zhh3cTKiXS9mQVsbDu73FQVW8HCSVb9ow",
  "key10": "2PVJEsXVxC7bf7yu9Bn8JBCyM9HeuszfiG1Bz1mJv7EhJB8R1VvCdVGu98KWS2Rzi2DfhD2CZeG7kdwTNZmpP2uu",
  "key11": "4fk1dbdc1GzsrayDbPuRwfGMdruRpiAw8sae2io9iH3r37rsW2Aoxn2UxgiKTgbJLnHRXjxbaNjmWgSAKfAeNHv2",
  "key12": "2FGQ2FTiJfGLZCPZmCVjHAWKZttkHVvgGRKx1YLzgmd6xgdHozuf3NYCGrqTWnaSKm84sbpuqz6me734GNDmx6wx",
  "key13": "JvJ37SadoYMjAvD772bwjWrbKKtrfhJYDo4kPp1EuV9d7Ez4XT66uHJWDu1NwEovj6cE94tfNMJKvMCcS6UvBXy",
  "key14": "4nmu3ivvbFkjqrWbsBL86TAJU5Lk4wyit1GMgr6jo9nq7JFnAAA5hq6giGJ9MWh4RM4mRYauVYEEShWf3zviNh15",
  "key15": "5zS4s97WeeZJGPRyyTJzG4Ezyt5j9ovAuZyKdEDWP8CwazsvP6J4jVvg2FVEAotCg1Fq2niqFCYTN8dYHisPF5WA",
  "key16": "5vhdU2j6Dejui4wVVdLPGQpyaXB4aPx3mNQwhTkooKmAaa8kfUAySJveECYvdGgnVHPFk4hf5y3fyJb1Kiuvr2WL",
  "key17": "5ZWV66DXpCdttYFdFHwDvY6ZRHeoo2dDPuQBY7tfX8c5tzx4u9yLdHHkRmGPaVoLWMTRdjtY4Nj2KDTCkB9RUdgR",
  "key18": "2i3GxDSCYoJ96e14ihYXaFRRHHrRNdS9sofNdyfppPA1wBe56F7BuqWdc9zKVKVLq4DE2FuS34GwoHYUR9GcXj8c",
  "key19": "3Bm5gp7HbCd52xfur643eV2JgSEhxKMfGHb9VZqoZezzXPhaAcFPX6nofaLrXcshRjRy5oerJAUUXugMowqDq2ZC",
  "key20": "4KrFEakMm4A3T2fWPGRXPSRP3rhSZj9wrq4RUXyxiHxoSww1BqqwN4oJcacYD3jZPYi7KEcK49ys8Uo4YgpQ3nVb",
  "key21": "3PZLzwNmBRLZmMrxZxjNLAP6iLP4Pjspv42eGxABKj8gDGgHzQqBFdzposPw9VJQ9MseipFfrqmiHppzneLdK3Qx",
  "key22": "s4x4gUmJK26ZwezVBng3HniGCXFwYiE9nn4ak96tpWLUgV74H5n3weZc2Wv3TeLQbvvkSp6m29L2WgZaeA2Q9V9",
  "key23": "3vZ38JvqEeCZY6qBRv9YfZVvAV4yBC7Yky1WPx6W6bCgBoDj4hLbxPhVU4Q5c1uedPmsv2jsvsNwsb4zgHS1Mdsw",
  "key24": "51gUycQCFQpgjwd7VK7qhBXx1Bq5htJ7MSGhEMFDNRym4HoGzKSPw2FtJcKE7aCJ6qD1Htg8VWRrF1uo78QNaN4n",
  "key25": "3i5y87sUUNm7vhjfK5mahd789WCmH8f5F2A6DqbzBRyxBN1Ffhjjbs5VAKejrzedXzyTiMZVqw4AhqYLtj9ajEDk",
  "key26": "5oLbCrqZyDK1qpk4nTr9baBzUgFJYFSNj7DtzmHTBHD7FqZ7tuuqojwyTpjgLTuwA4DLVUguZVr4sg2VzUi1HJvf",
  "key27": "4g7ZS3AFivKYwVNFtAVr7BDA62zVr1kJKbM1cVD74acVr9pTZy8yJGR1uRsejvK6vCs5xsXkHkmBsduYw65rac8Z",
  "key28": "3cxPhWvgcWqMn5UZr7RzTZTdSb98VbbEKneyQZoxEaApdAx4qHF7uCP4SCfFcnDNsUTgh9AeT1eTaLpuNU7Nt15y",
  "key29": "5HyxvyMmfTyo2dmEhwfgVn7KmBTRCjcfHizDnu7vEyk8hvExAfkWGQU82vgJTc3fuvwb4mYun19SMeVRQBGEwWMp",
  "key30": "5Nibh8GSsw3MkSziAdUn4BrGVR1HH4e84Ycxrnkcpe4Zdh2GniXY666EgVqyfJN3CkiK14ahd1Svf8KiGyVgNgjU",
  "key31": "3vkzF3QwVRTEhF9de26MA7bpYwAxNfeEkbaKGEPrrDLE7DpEAqcXFkt8Zgo1E5m7sXNKJEgcNPjNkVmTzzJk261d",
  "key32": "4xaf4KuhSrF9LZK1FZyUuH9zcQnSa4XFdh9k5MADcpvHmZLXJe7cndjuxA1jD3STf9LqEhDeTdFp1caNkhfGm6mj",
  "key33": "3ZGRAbm9kDfYMWVrGqT73UqcwVxLrJnrhQBs6g3ovv8Kqhx5g2LjfGTFFYxB5bWHp6cGmQRQYYqHqz7prNpyAz4f",
  "key34": "3psC9sfHNjtsNRShkEu5HVZn7bMwNgwgJWSdf4uJLzjtx7jqyAucXSvwxeMAY9ZokCy2vhzTmfkZ753DVymeFk3b",
  "key35": "4a8VLMUXFttizNoVni5Yoh2sbNpotWe1WTMF47VZpaCxHSFPXkZuhTR9HgxLuByFRk5d1jDnQq2diTBDLGLJ9gru",
  "key36": "QEm2RaYRAQMDsHgFAMSscfQneh83mo2r6YrtjbTpDEBJJp3VyZVzgmAYMGwLJHvwBoTiEwQGEKuLa1A2qRz7hyu",
  "key37": "2qjpVwYJ1qoDJtWHEcAL31UY7GoTL8dwKVG5r9zvzCKtWMTPq9Escc3EQRTSL4z2T8JTCVDdhGeJTmRHhLRorfQG",
  "key38": "5HS8GPwu275XcsPbLKsSvVVGCysgdoVkX3Gmf8XmvUec8Uox9eydagsKhu4KMVxb4RDEuM8WzjjZbPFG7sayo3rJ",
  "key39": "2Hi53785956LPDNDJJwLkmC3Mspzm6Hpmzj7bSGBRo2DKojZnqUg1pAfoZp4MhMPh7weQp2v3iAMgV99zUKdiCRg",
  "key40": "5HrR7kEwe2DoSaTH56pHZM5d5mXpA7o6ctXGxVbVz9dpyQXHvsVsbsfYHiRDsX2kjQFqo1BEq3JEgC9BreDKtDMC",
  "key41": "G6x693kKAqVJEDYKR2VZQD4FJ6iErtPAV3Bqcv77WwR26hSxkVQv86guCkF83g7Lt9zapWNADANc8bbMhpF6LPG",
  "key42": "2qy8sQ2qJs5ed8wHqG4yAJQ9mT382iDqM1CBa3Z9AA4WCo1AwKeyDh76cn65peVeGzdCKtCheq6KMN3c9yrYziq6",
  "key43": "5C5PAyDJrp1BHh7Aj94Tqyu3jWfu1waG1Swd3QosVgQ6c7EoEfesQwF5WZFPJgApig5iYe69wQKzzvJ57hRbkEkD",
  "key44": "5NXE3HGrVpDZC2hpfjvYzEQg8qVd3AeEvFT9QWKLATZnuEx514BugK1urcM9cV8yVmvDagTkCd6Wubkn96jpnyQ4",
  "key45": "2uAAGtdfZxyDYREgzJC9WYn7Y8g8iszeUo2ejzJwCq3ZwxuYiEZm7mMZT5Mo4QNMaxPs7FfiGmffPT2RYXmxXpXV"
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
