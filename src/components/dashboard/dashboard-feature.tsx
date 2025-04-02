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
    "5uR2nwjFAN6VDQsR4izYqrmddqBMUCarCAhCo3DiJoTZofKofNGCCCde6fBnS4ZdzB8AAuSAZXTVX2EKfiYUPGbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TPD7asbaRBKoz2JfDq7pmjNb25ArFt6kBWLdB4Y1qqADKB2AkdGaDfuR3u9EQLD8k5HXEBqsQXz4bhRs75scAFE",
  "key1": "3H3oPVBH8SszpSsSLym4xaThNgJoD9iC3M5yb7NaXgsp524sPGBDVydFKA7Su4dV1AubsXjuCeSsrJsmeuYrx9Lq",
  "key2": "3ybJnj8wFWwMjBn7a34vWeo4g1k1fJkmX6BeZqb7HBT99rUBSFEn54eGhP3QzsSvZbyFNWTCDe3GwxbLmpkMR4k5",
  "key3": "4XFZM5LY5yeLgeELn6rrWTyN9w8ZEFFX1WEtPbrrKUBPbGD4KxGEGgj4BmFHLZJhtUmQ5XnNPyGxLv7zGhNJxS99",
  "key4": "X2YKpatizviuagt1C2vCxEeVQWW6rkovNhcs4z2w4FadKU3yeeEBjuaE4i6RG7kLS3AxFRy5xfJcpEiqogS77WH",
  "key5": "2jWV5LXCLuwMowGto3Q5NkLXPaFVtu9kSukrhGCbNzGB6kdPuCefYVKmbbag7h7fDXStA4haBGFTAk7ac5dCsxSC",
  "key6": "4zuBsQS68YWZmgRmYE86VpXmpLFaRs911n5xvpv91T6MevTTe5dDtrHZKhLKgMndy4iTVSeWGNhbEsmv1nSsKKQw",
  "key7": "299EQuejPQAxrPDCBuj1KGpEvFFdTxfVsEn193VFVHwpX6S6ZZpDRn1wMqe3KsgqhRug33wo7ymTv6bkor5NQRea",
  "key8": "2x3jEosjwYR388kR4mL4TKn4Y9dYDaZc763L35ZbHxrSYucs84UvxSgkxnsMCJPbUYwxg6KR3zjqXcvjMhGvA7w6",
  "key9": "5NvAv7nWkdPFaPC7yE3zJSFVn1zEewJJVZKFipPSUJzdX2iv8ZgSfgd1kM8EdQ3Sc3fkifLecmyHoYTWE2ai6B5N",
  "key10": "2Mqs3edaXmATzfM34woPyn5K8zkdmHAtZnaxurKAjfvwi4gyMRuzHB4UFfknyWRX82WdiGD3R3isVqTNRGtJHtKh",
  "key11": "67dNWu3bqxHHTm6yJPMaAW3JooHC74QvESNh7U4LU9vYwQSgUR16iukpmyursypBK2RAutKHMrUD28tApfc3x6wE",
  "key12": "M6xaZy643wbyJk2Uz1bzK6MngiMU8Bsw9PfqpZzSYSZ8rZ5Ch1FbK4j9Q2c2g4YnB1v9p2H6jQ9geJrVUq9X92o",
  "key13": "52npoCXoGmShqg1uaHXnseykV1Dj6XVcUjxRr9n6D639BfWpAHfTougyCZgnQAw9o8aMeo7JnBFNueMnkBYVPjdQ",
  "key14": "3N4vsmZXaM3sW7gMokXHP1uFmZzsXuyfWrvKja3XUHfL3sxGTVjt6ceW8PS47v2tYn3MEMyZBBa7K8MRSwun8wTm",
  "key15": "4B1CwSPLsKZV9ypgBfhetJd5emLeRPFUwqHm6UetkUYxhtchwApJirgxyWWMcg8iSipngUvnyEuPdbVJwQUfJ6L5",
  "key16": "3wKTe8XVY7ymtiKTwWsprQoyPsFjRHkHp9NyLvsXSA94MHDMdGgghtE99grc6GhbVSYrsktaAiSzLKdVhMjrFFph",
  "key17": "g99kQcEuM17rLvZCb4ffZg4yeEumVrXEHA2LRspBoz1ht8LYBNyMT4xiTbchZTZeSjqTDDpuwgHoM6bRnUSfovF",
  "key18": "AjeutWBQuHcciSiT7YBNTZJ9oVrF26bzEpePRxrFpohKVYzMgxNnqfWck88f1fFoF2woUrVu7ebW9biNZAs9Pbu",
  "key19": "4f2KYwnfCc1yXkTgv1PoGwyiqFCvwHngsWsThkTjykP8HXk7qUrD15wyoETYUTpdBgfwQgpu2k7QfTmwVhmmgka7",
  "key20": "4GodWpvgL45ykB6SNZxgMHoMe8oGbg9zx8ZSRgmxKE5qmEo11ZgWgLFCfYZCsmqDFLYrWQGqubSKipQMD9LL6aRM",
  "key21": "5Dtc9RNr11phaWTpwjmJkCmmA32sKCcgtkCpB5h5s8wBoiQXWSX4i31oLpEKS8FsEQj1fwMaqDm9mQG33gVQK3p",
  "key22": "2UNVeBrJRhcsqRbEW8zre3vW8A3XtcQrLoPXFFgVJKptAGWpr1LFKXbWmufu2VdALuVz2eQKjBq3LDEvMJRrB3Fz",
  "key23": "3k4DBNVWJYUYThMao7VMB7ewQWhspt4bc2zgCkgSk26BBQE1SjZUZA2d3ySM518fy3T6aeUAdUW8ntkEWwyVhyPp",
  "key24": "X615yxr9wLUPzkoRGd7ukdLG5wUCHUzmSuaxXoxS3oTuDx95Sucy8UuPiCF7mYZ744b8SA7Xzmb3Wx1gkfipfFZ",
  "key25": "2gDWkbjp9KNK7wWALFi1kbkenthnSQgae7icpB25Px2tgWtqszeBnKWFDRrirgKMxytZLueT6ZALhK4DmKY6J9NG",
  "key26": "57DKaxgXPmWBNMCvYdHXeC2XiG3mznPd7786vnV4MVyJgeKtyhUaH9TMWfBCKTj5559mQCcvRFg1TgghJ2812JtL",
  "key27": "UJaBUfrmsjBB1CdmpUNsJuVVEFpn4XEwys9kNWVSxwxP1w7SBV63nmUhEgEnvbjXbNf8MMVvTXc14we1mDMLwLF",
  "key28": "FQWmR6CXSnqfuEgbZGyxdwM8XbP2WTpfatMyfG1geKmGDK4rH1aYoAqtN331QrEvWC9Bu6secqsT1rQTYapHoR8",
  "key29": "3TmYMVTENvvtCY4vzRWAYX4Dn9uKEAANT9ZU9ZQfb29BsHAk34AXSaSrRGYxnBAUxQbL8HQQwG5qPPYmBKZDeZ6B",
  "key30": "4eRwSLoZVHVYgcEjx9dfGUQrQtphcdpAq8HX8dSWbPViP95UJsgK9RFvkNHzmd8QMntgr4JB1t2EpqCSwcDZC8Qz",
  "key31": "29SmQxjn3B2MPEEXLqWQ82EDfZoSrNzwMiMFZP2JJpzJLYnM5CmfzEzVjJWuXGT2q5Jrw5v9F7RoAbNhueMevDCX",
  "key32": "2yyUXP2nqDDMpKbks1dA4fDRc5eY221dsDmLE9JP7LBhGTKtkJZZdmSM8NcVUmD4stoZ31jyuZJCdMB7wqGaEHyQ",
  "key33": "2fPQFuwR1EswkVcEYsf7XtsPXqeWbKkELnp9rPh24e37ZmWWwAwwcD7MU2SC16r5nH6cXmL3ndVAiau5JwB5qWBE",
  "key34": "5GEEVz8AzDHhAvHdxZ9ZSdGma6NMgZ6nEBMDasVSkQNfmpo9yBoRYsM4cH4JVVY2J72NcGGMFoJoroo3AdtUb5BS",
  "key35": "zeUNuj1iyP98BpKNsFZh8HceNhwzk4p9JhTdB8VUa5J8NBJzaRtbzv9HfkJpwUokLowqRd6FYAhNdxQUEKxJp5N"
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
