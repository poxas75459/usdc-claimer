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
    "54pRZUtJWBADYnGeAAb4Axd23C3sjvQnbnXPAAWSmaNrqyRquuEBeVyGYcDa53p53orgd2UkCNB1Kw8TAFrH33Az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58fg7uYMGfPxSXNEnPuz17KgQZjf7nWikcwBbcvk7SDMLD4YFemcRFGZfUrJ6B5jjYP6w8u4uvRAdej9LGjGp5dR",
  "key1": "5xREVA5L6xhft1DHM6yxh7KECdqgxDy79fUDZJmx6a3sgHeuBovLiCNgywAck36weqgH8iUk47h1f6quCQRrH1oc",
  "key2": "27cmGnsz4PALaU7DEobrhmJumU86buqPBkzvr69RLr7MFfrpHByH8hfsiR8cKhyMqfZsJyQiM2L6YKtA6ECEZX77",
  "key3": "Nf3sb2CyYhampdmeUa9dj6ExiCUGVtqGFvGJKKoowpQHGtQAQFdGK22X7UYVrPhibuCwP6eGiHtdi4wUbmaDKxq",
  "key4": "4SqZBYex2pMgd1HMMVdFuSm5EyasHpjzaV3baWrgFbR8YEKKfV5UPTpLMGum8er2JMpWFhAmGh8dUSiQMESmPFBC",
  "key5": "5VZ74XzdixvSNX7u79tj3ySBGY1eG1mf4wN29c78XGr1prSKWuGfWz2ndWzyndw9w4JwaxknaNybYEGgxDDNyj6M",
  "key6": "WTb1dLxeKQ9ViDS4rSJmKhttNGEYaY7Q9mqWa8k5JFMX387TtiRM4ic7xKzrvDwtkJNUkHNHb7mzEW3NNTFgqtG",
  "key7": "2TdsFmvBq5hR9SBNFwYvoARoeQRcL9qDpWzo23Wn27dfyVAU2CHxkHnVTnxGbNvKaavzZNhxBqVZBaCjxK3V4Fk4",
  "key8": "3bUBiyYcjxnU5ZPCwZaYbcRg2KqbBkMqFkZzHTndn6HdZumFWEr11CuXRCxgp3bMizMvgPhFuCcpQiTjc58yDggf",
  "key9": "5sse479FA4rouMdetvSTUwKBR7SZsLfdcKf2fiKhqYKjcWWU34K7umtyGsa6kNnSivMD1NgrCqquCUYzYuVJe7S7",
  "key10": "52o4vrh6fpp4FEQD711seH5EXefM9JcsJabU88cixzThCGhigDhtCnwPZrv9gUrgcHv2n5gCvRJvucdrHky1KC4",
  "key11": "4KGtSmFo1HVc6mnHrdHouaxfD3EBkb7GGz8AtVsyB1LQTbnKvuqcscdU3VgA7T2amQtgNgUy4Fy1RnutPzLtvHTq",
  "key12": "3iDK8sv5QnmJj8tRFXosuK7sw1YAxn7G5fRP4cZby2ajMXoPVu5esDWVVq6bLjL276JmggeZNgLPzvpEoRTFsGjR",
  "key13": "3NYHPdnhPxNH6Ss5rVfgfRios3f3FC7WXUhRw6UWpbeDhG2ycezQMprHXDZ9pqr5fqRosNEnCp6x84Az1PD85F2f",
  "key14": "5kdbV7HcTckjjN2T6fwjzux55oYZq1jCmkhFbv6s5fjGz3YYvZ7iySaCnUEgp3nQJtVKjKq32eRXQsW6WwPEKppP",
  "key15": "2weCc7nUqrUJueJyJ25KMQjUEEuxrpTq1AktotwrrL9oLeqM7mcKt474YbHvXc8o14t8Avjjs8nHmTyLgBVrP5dK",
  "key16": "4CbVFvUc9GB1BsMooWEA7EknsuutjnvPtSkDWVVXj9YMYdMSKmRcyrwjGCP5sfMUgnjn1Zxbv9nU5wn1uMiMgs7z",
  "key17": "5ZTXpEB3bMouFzHHvmiC7ucgGKMRiLCoAskU2hxdWKqQkzZohoU6sipxW361wr5s85YzmLsEAGqCyF4vkByRY1tU",
  "key18": "52PPSYQgKzLMUbZVwbcSAcdwoJqEEmwEkLpQ2cB8cGBKSkNMfwtC7eiKwVoL1JmmCJQ8XZCAXx8DNB2FwXPv7rn1",
  "key19": "pnHhoyHHWSawRvA1BVG9UjzKT1Xn3foH5gVcym9LFDMmxLiqCcY5p17d9t6dBogaraidooZkrtmShiPh92UnjZ6",
  "key20": "4J3i2rBtf81ts5ziJezMNvbTXQF7BDR6wEy2jyeMEUbD3JzUR1gW2PNGGrTa8EBEeA798bbPemFZKbizBYejfmN3",
  "key21": "3avQ2PS9au5Ux1zY8QViQb17Q4F7YFY92oLDyhjZDBR9jeErEF4bqMXpTeWyiYq2EZcDbRUmWTFdrEyuCLpSY619",
  "key22": "51WG1B4yczxuF3PpfiQ31BzaetwXyBU5XKf8hPhnQG65xfxaZDqqWcgsUeecQQ9KkKCojtmZjbd4kcu9A8XH4bDb",
  "key23": "23KTnuoLcatPohBaxWQzMxRH7VbZG6CdVEQHckvWcMqS1thBsgXsVCLBdsjkzKpJ4S3vb4KmDAQbdCAg9xjp1mxX",
  "key24": "vpqr9sBbTdwYXQakgMoBSPPDjvHpRB3fHQTxThjhcQQHnp6Dya6oR67NCBkJXjAFxdz1BocvyMqWSXRW3Q2jXjw",
  "key25": "43Mic46UR47mfmJ5B44T3E2Zajq6wggGeDwK2dcXTaMYSTDs9r3gxs1XantBqf1mJHf6jEDvCPasWapSjvaLCM4q",
  "key26": "4kUr3ouuNYzX4E5ZioKJGSi4j3DZ8VJHzCyW6qUx9XVCxZawEsntKdgPHTxfHtKPHVowuaApWedR1R8jCNv3WdCa",
  "key27": "2ceeuDyAYDF8kENKkk8kdkFtvrRtxqU97AcaMGvLBnmxputvsNGSbd5mcWDBsgG1ws7cQW69ndHZB7KUsd3vBEJp",
  "key28": "5DjENvWrmSUx49oBFbx8JMLKf9TfU6RRjzZFF9gW9xKYRctnswLtD67jCkT9Szayhsts3CJHpEYwkrJNWA1qzkW4",
  "key29": "2XqR2ddzq4xMM98MXucd7fqxtDU3yRVa37AbJLCYzskXwESisTH7ghAX4X8ZXhkMdJz8nrhRK3CrA2QcsHTJEpbK",
  "key30": "jmkE4vyZUCxC4UpdX1PszG9VQkzTJcAY9FakHPEMo3AxqenmMGbPA41PvXmospC3gLr9RtRsky7emA8ZQxX5e6u",
  "key31": "3t2qWGke7iMt1nGbcftvynCUeVJeUgaGSsXsHCXQmrdtDCidNSJBKAnu29DrwQDMqUvhDnfBHjS9U14jjK5XXi9D",
  "key32": "4LUVHE24xqNaj5RzCCPsoTAVWjnz4SinoAFJNPbWsq4ncqHZuc9fzUxS7R12cMpj1QrN64F9G5yDZfRHUeJtXTc7",
  "key33": "5rfZLn3dDtUTLKMfDJmDBtquwyH4zCeWwWGUpoujKdTUKnt32CGLSCGoAk8W9ECmDp6LK59XfAsKcU3DaxDvhrjA"
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
