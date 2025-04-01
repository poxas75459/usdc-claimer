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
    "5WRRh6CUVKiYDZN1qckxj1gmh5fo85iGkCEc6LcFQ1ffGGUrvhA1atWaqpsQc7j69dDeiXeJUZ42tbA24yqnvo9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AraLyVYjxhWWu7NvrB1P4CSBxRQTDL8sU9B65GBMaNrESLmKtsgzqK6YgBokF8sfX9aBgVnAEQ5kSWzRVeYYMTT",
  "key1": "4N9skcDLhkDLaA77PP6MaqaWBcfJCnLTz1oypYXhcastskxg9PpzAKgY8zhVnQ7USJwybW4n5tZHE1fS7ApQgj5T",
  "key2": "2aWP7CUDVYiSVyULDvGCk5a4Xcwpa8JaVUBiZCRX5Bj13AX16tsiXHnqpWb4yGhPwsjkafEc9CT7aahcJLF4ybjK",
  "key3": "3dH1WQdA4ysDbmoRSYZeAnNsK5LLuwXEpAbGAry5V9fXLsnizEftAsW2V5JpMeaak9wmUEqKcP91QkzmG6acV7c3",
  "key4": "33ujf8FHdxENzAuHY7WyxmpMfcJeFXaeW6txhD9JtPByfFsAvdheAyodiyp6E8Ai8QkcTY265k4S7jT1YWhW6c5e",
  "key5": "2Mcgrjt5taeyHkAiCJT4VsDsM2xXqZ9AypT86BMVNNiGSZzA7u319UD6bwmxAo87Y3m4cGRNSfquQBVnY6pAJMrT",
  "key6": "3zUmiCKFNAQPh2YhiikPYahgbPKVceRfUMs9zXg6k4R8GhNmWA5C92FevB3rs6GK7ewCzv5RSmo3zPBTvheap3FF",
  "key7": "22GLwBGx41ML5oje7XnM6gYpnPttneiKfpDMjDaYsy8WEAPtWb7DA3Cd7LsRFkE3pQoSHXHisxRvns9moCraEBkw",
  "key8": "4U8N2CmYHVKnpHcWrMGJVo4wavqvXaXsYa6ZVHQBZqm7gfNCksteqJDAB1vby7dcD1UuBZ6cqAzru5Cua1NjumCa",
  "key9": "54QtXeQzCETHc7uLqEw87zhfstDjR6Q2WRBFcSygdtvkg13hER43RqrH7FZxh2jt4hCfswZg6LQL8V653q7Q4fRw",
  "key10": "2riVr2vkYnzyZ2yLxUN2ADhHcoZSzNWjY52SGqqCjmrW9ww6hz34bkGJpSAvKCUwHskgcSqKWUeSPdKxGjAotMwW",
  "key11": "5wZV29s8uUNo9sCkFAzEXoMXL1rSQtJ7ZZnGEM9UwXM4nvgBfHxJT3B5auNyPG5yUBQsukee6fKz35Wkg48B44i8",
  "key12": "5dbXFZvam2JpxgWv2y8VW3wL7PGDRNc4rsEBFPL1s3dv5XAQNSeqHUPm1xnDhKNfTWqdeF6BP2uJyEUKLSHwXYL4",
  "key13": "h8pbPoJ2c6zXdM9JL3LWDncpGy9iQ4QkfrxVsJjd1BQCVyYRvCPZDStFUCmym3PguarC9x5JnaUhH1gh85mxnf3",
  "key14": "2G9LuE9sM5Ep1XJjX5ZtRqxJHENgNEAvrJSzuAHTQK2RBSWRR5yrYUD4AsPAyJqWDpqMRhEjEf748KgYNUHwWFkj",
  "key15": "UHBnFid4PmGfPPy7U2Vvp7xP5hqwePnFNoXFYZNM584aahiAUY6RZirZiZZXJqaGhABQaHswzf6jKwX1iXtWTiB",
  "key16": "PNS5BjWwpfLhy8QynBLeqAQeJCSxjPMa3ET8TKpiwtBU8hYJzvdSTGmWaDi8EYBo4cQzD2kkCzMvQeEFq8zSvGN",
  "key17": "4Y4kckTdemzJ7ppNmChrv1RPBDvyuctPpeYQLmUomvtS85kaVGxHomzeyyv5txqwefzzPx3MHc4aAWXxAoHW41Fx",
  "key18": "3i7eiFBW5RMzYsBRrYWF6546dhwTezgwwGDpgpEHd9dXNiTB7s2Fma9d6Jf8PXYtuNCivgD4u5FZitFX1re7mKND",
  "key19": "4fnuhPs7mmVmEGbuTdziZNQG7EAC3Fdqbf84YBDcVKGKB3scHtKMfybyunajpCz8oWLxkRbj17QpXxUTnyPRGYBC",
  "key20": "38GYpPEkuRFSziz5kwDAyJ9532BWx59LBUCTWgK9pcePUKsRDmMF8YFe1Jo5xnPbQYJ2HssNjVYk6b2fGrD5u97Z",
  "key21": "qWs7VkHfmqo3LmfLNND9JgaVTibvb7hCiJuYKpHKa4anr7YGUCkhLuS6ModNi75craFki5GjmhikiN7q3pbHqJP",
  "key22": "4j1YLoxGayj2Uqwg9RRM1cZ8hrxMHQrzAXu9Qwjb6P6yeE55LW7pgtGyZAej1R765p6ymSChv4DRqE8Ua8s722S4",
  "key23": "xZHALx3yF118d2Ph6YhjPy3uWd9VFhxQk5ojXCFn45QvViXbxL4MDdPh93w4sirN58BSRi3616ih3cAzjXd7Dx5",
  "key24": "36ak8PGaBRnnZ2UigrxYYXSXqPs7YuEYtUoDaopRfRkDgX1qcv8hVeCi4vKkDRHcf8JZmXKNw5ph1SD2RKENghk6",
  "key25": "co5XjbDkWg3jZx7euXPM6nUyf9bJqZ3piffBWs3fBJfe6djTbMRrkXJnHGiZuu43dqgLt9CDnodqt5tJVgfsHhR",
  "key26": "43wnqAHLBSHkv5GMHMir6oYJHxvXHc2wZTEPUtriCnkq6xsckz9n6sxFoitaUDGMGY4U6K426M8DCZZhGn8uYv38",
  "key27": "4RrvB9E2d8mW11fEJvX9Bfcp9JDLKguDeBJWLjgEKKDcC4xpGRzZX5bDQ2Bgh8cjcbf4HRQdhEw43inbtKk9ESAo",
  "key28": "46EGjMBvWp8Kt7ntAr9HdizPPR4CscpPeNoDeCmJAeatDBhHmKcx6sKrVSKeXECcHLbBeRSZbpTkDUJ5vjkC49CD",
  "key29": "3iMqCTSeXqpqAKWEQCjfkpEzFVJDaDD3CHk8cteCVuoHAHxSjqZid6wmaAt6TPwTcWP3bjU6TdYnqULjwfNQwEhR",
  "key30": "3brB6JSsyxgT6RLpSQw7ismtK3KFJbbF4wH4WZ9KeTrSW1kkx9Xf8TXzc9MkRYag46Z1pduxFn8c9GjqYAvX73Xw",
  "key31": "3ChSteTttKY6mVnsNeWwk1i4ixmo6si1zzRKUcafZefD78v3WQwjS6uqTd1scmRFvqGrqJXddJJ8W51UCsSy5JAF"
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
