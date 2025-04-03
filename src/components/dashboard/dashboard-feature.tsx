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
    "5vP46YQN3pE47mDjWkZY3kpoV3MJm8RZMAP73juuAFJSuDFxYRCGQHatTVv4crch1MipsUgvEMz5H8WQuL9VnvZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z5CRzVFkwS6wikXnQFLzUbxaNcEWrMfZMLEnG3QViHGrgbdEWWaCecJaohuPUgVofvWUXUe4wJqoZq2oHEp1adu",
  "key1": "B6TXn86iDD3HnCPq9FD9cdrBaWrHkBVgJmEb8KuJSX4hEzboAFAweQco3ixVddk7kC4em6AURHpFJYYxBfRJUm2",
  "key2": "3sf77wEi398uEy31CrxhnbbGnrVbdCfU4HDtzgAGFvf2tok1KvUAHypLrmTKBFt3G5XbxBGigLUD1BoH58kUuA6P",
  "key3": "QZVBSfXuwR9foreHbp3Ri46W4Sv7yLMEsAcWQJafjn6nMtYuW5BULoechrLp46e8n2aUjZ155DCGvoWGzdYe42E",
  "key4": "5aZVKzEKUjvxVgajAqNPjcgVPsJRZdMjsrTz7z9m2Uh55xkrujZwzjWDTtE9cwnEEh9ZD5DyJUm4pSbB9GzWXCSs",
  "key5": "2pFu8ZkRJR4231vJgaDRfRAJdwj8pfnWzQZiWv3nAsb23XWCvR5vMrjo9W3sJsA1JUMDCRpxXY6gLede7uww8Tdw",
  "key6": "jHHdj8wTzaet5HpTMcGDz4nVhk6CBBddu4LpLQ66TSFMRht932jYae6fHmQ2y8kBZGGNGi9eN2z4AzC6gWnihWv",
  "key7": "5FDFnKsr644q3xNX56YbQb6EHQ9giknHHTyfQx1J3oJFGn7wK4g2nZarqFB8gWZNYGdDjQEP7fobct4RewQVyeof",
  "key8": "2KqdSWrTLRauqeazYs6V97R3cVKEkdRGoPVgkAMYxwHNzp3h7KukhvnDnMo6qga2RV1ACz9EmREQhj6Av4GtYVA4",
  "key9": "4YfzAF66KGMCYTpp256RMsPoYZfzeSxEmGtEE7JRxWVwuZJGjZyXkpW85wS4gydVvPNhLVXZP3uvrsN6yAmHs5Ty",
  "key10": "2Xrq4pzMKrDHGLCC2ykXHJZYzUZgtNBCygywpCVoXc1x4EvtkxqAjdWxrnsCw5UUkBHyR6JCDeXGSjoN6j8P8ueB",
  "key11": "4KDyteWf7eVqngvrt16BxJECabptw4EXdsCvPJjMFkng6L4RY1xRUzcWK359TPSojSJpESU6J9QSh8okWWMJmRjQ",
  "key12": "3AZktPAXL99HN93YzubTseHZjLtvqZkfq68qCDr1xYpZpssk3YBrFLLHb7pcTdEqEzUiPBUJVctJAqkcJB9gfMZL",
  "key13": "E35znsW67ZU3qhM5UqSEN5UvUcuv3HVqXVtaxb6X1iyzd2zTQHq5rfrWjhfNVuuam95iyQ6uKdYVC94amAMU1UK",
  "key14": "2H5tt8jAmWwETVabS26N4pChV4VZsfyfd2B221Db4Bncj8iK5QEqcvagex3HHBp8eKpvYrHRz9vhzgZFQDDPvCBM",
  "key15": "3BfBmzSKuL2pxkrvW8PjZKtfupLXjq7UY6Y9zrzJmDAkHppjqG8Gs28JU1bNCCLoomfq7Poy8Gea7dv3HXkbL6M2",
  "key16": "4YyaUBgMAFFSkSmbyv7CGznXtw7HSj3nXt8kdGdAbUo4L98u5jHinyRHHxRxJaBDD5ytCYuY4YpfoBQq6PJhDf7J",
  "key17": "4XeyJ1fXqEebePVq3BvKL41DC8ev55V59c66A3e3yMP6SjMhQLvkJDc7oySQH25kQPNwwkK2LhBuUrK1eaqjFM1h",
  "key18": "29edUC5T5R1MUQuaJcohpLSS4yZ1sP4XzyAtg8ae4L9Ye5SonaMk291xmqDdbYwp76gpvtqAPQhSYS6ZA4cZDo6c",
  "key19": "5PcPDPdGjALaN1YXbMYWuTxhj6Z3dYRPhWKpna4J7KRXT7CFKzoViWdRoRL3FcHHs1yYwGD3Ln4MKSfotdxrPy4y",
  "key20": "2igVLMyuZv8JmYB5ugsRRR73DaHssQBb8T7JyqU9W9J8DjFPCqBJvbZ2LfGMiKiu9SpRsNXAX9TkhwU1pVMx8qfX",
  "key21": "2ixMUYENub9SfWLuHQEQCUm87afg8w3RnwuikEg4YHGpngiMbWU99RH9PXJJjqW8k4wPKDknkJyQosXvviFdZc26",
  "key22": "557Cq35mTY4aGwyYQWcqUbhnTo3pEsiDLimvhLAvFdMHAjGn1VfGHzZutzdNpguWraUqS8WRfvm56qSsB2gSyQ3u",
  "key23": "MTtG9M4STA61kcvw66DRx7FJkZhnnpZdjP2wBqP7BKAfx5AHmooV6LDUD4bVkmX72qaCxGyy3ror7FMoGSs4Bhk",
  "key24": "2o69jhxh9ftEfKtY8ffW63vr3izDTgEs4yUgeBK1Yb2y712WxNWUcCipQPcfYTgbSRnpwHxTpgcWnveYMRfB7jqH",
  "key25": "54ZSbcY91Q5EJ6o1mF3at4wRnWikGBcKQfj1BZfQQsUWW6TF7s9S71CaazQkAd423P3nMu6sNzTFH1Nq6ivWkXUy",
  "key26": "5ZPzgJ1xoHqHqgYLXXs6roQYoqukzdmP1SH5Nr45wYVg73pC4TSS2xSDaZM8b8YjqUnvLgVrDbdgHJmH75Fm9QvH",
  "key27": "cHSgadrk46Z88VJG4Z7WheF7T1kvZprNLQ35h8LA92Ef5BYvDKh6BRhmWzNU5mYroj2fCP68jGYpVtbJD6e7bYx",
  "key28": "41D9yqpm8U1EGan3g8jX82qpHSHJcuUKNS6B679Ewr4mBAVMxFQoBDk5pKdx4QeAXhAuamk2n6NwBmQshmUHDe8T",
  "key29": "5iW14xzPJqXieqYUSCVS4msg5wxd2dxvHZcepMMxNMi9AVpUrLsGo3tyU1XAa7vsQsyvRoGpzRbHmmGfnkXweZLF",
  "key30": "3Z2M1bVxbk3dDn8xPHkoF3UizGcH6fDNVLCoeuiMGV8vBV7mSKWmHqBeqs2bMheXdRXwLPUW7bzkcxeTrNzosES",
  "key31": "2BvF6MW4qpFRwoUWBHF85fMkNNTT3pa5LBZz1oUhPPDDsUVPTBPYznCKFwr8BzYHac1jDUfToyf7urd23bVDS2EL",
  "key32": "4iK1YGjgGVhdSmwmqmtHA6u8XVbKbfE32PgSsFDtz7xXNtDzxn2RDJ7S1Cw8v9pqrEuCmnwKbWRST64NJEajuKPf",
  "key33": "5rG6pnSgPQXzWayUDSG3xRTw3gZ4d4ZduMGa7gWqQumnaNe8dwH4aiXL7XoetbS8aZVC1yc82Dbvm54ApW9mpApy",
  "key34": "27G7je9j3zkTC2ab3odqxu7CWMUmjA9yRdL9bSFHimCwEwUvkuTw3W82tV6nW5gEXyHJBKzbfThAPeRdRdbxEX5v",
  "key35": "5JPGTtT1FHwZjXUmv4V2VYw6LgidbfHJg3RqVeUV2BqV6uLxksHQr14czH6qaRgkwvdaQStYimbiWbZbUAs1fr7j",
  "key36": "2ddT4UhGZM4zpD1hYUC2UXW56mdF5DGeBpYkDfPsjnRbRTeBL3YG8ysBbjjqYX1PfC7MD7Qyy26hriS9s2BcntG8",
  "key37": "PQsVVcgQSmxuMpTnkK5ddWQbpycNw4rJt8VR3afDAXiToBy4aRJM9ejTaUiVMTpHmKxpbpxPD7MkWHs6qS4EGz3",
  "key38": "5tFtAeWdZ8TAbBb2vejtdH3Hf9yv1jPzXNrZhymHDdjVUNJE86Xuvs5JFGzLgEcxUNwTawmbXdWQ7NNtS6hRKwze",
  "key39": "2H79B6tUbWJL8DF3zCWM827Hdab5nHcbJtj1vcTuBuefDmw4X6hJQJbVmrYJGm2mR85cmoaBA2yY73qVgWzBiaDw",
  "key40": "qnT16Ei4KZwCNXf65tv4wbWLtLfjujw5vwUkDW9ZNkRZVpM2RVsirvSi2CZjE1KoB1YQwMN2d9qSQphvhSLFoZQ",
  "key41": "5bKvWdsZEgEWwMUdFpD9gMdgXwADQyRBovxcsszThiYTr86eq4ssQxuVfELh1cBmmXMRUPjxoxJZwyTMa4RSPnHi",
  "key42": "3gNsddqZ8DQQ24F68Rh78mXa9PASBXsvydijY1PA5tS7nSkeLeK3RLPFVFqNwduFWGeLsZwnNtYYYzbodqHcQRZm",
  "key43": "4jFtdngKSE8FddJMJic4yrp7yywpUAX6ZPjdmp3dUKfgeDCX1SZTHed8Numnoy7JuVUuvPHGSrizpqdDjqkVhFtM",
  "key44": "2NGHQuXTWiT5GeeqK67MQ41aYPFdteffV9YRMPbwNKK2sGk5Y9xhaseEJRZ4nNWhkPRVRHE5Zq6QNHUNbTr55DnH",
  "key45": "2yHPVN7KP2mgKn5JxyHPG2BhVsdcDunBZoTKK3ZqpWGdU1CwM2DZM48gxWWdaayj1Z3xxCejcSQvWusWfE5KBNco",
  "key46": "BPoYDYaTLctnP3QmY8vvEfMfmqPjVL9NU1KtXAomL9jAtzQTQbmkzk1Zi1msGtreSt8R9iiQJ3ZhrZmpFV8Egm5",
  "key47": "4t8nvBZWgR8G8kqYxKPMPPY566kiocoyJgpNDbGSFwr2Bk8p2o6z7T9Hx8Xx3oY3jXjN3cHF9G2UTEamhdptxZgZ",
  "key48": "3AoHNGP7Sza95HdkYaGD4QZbGf5hLYwX57dsYNWXKUhAvyKYLP8qZUkauNGCpFCsLf2T9GCVdKywedbA68jgAi6V"
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
