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
    "2J6LNrJPDTK2MEkkCvYnpCQiwa8gcWd925DUM5NRqY7M229CNjJsPwThmTEp6FRvFqBHv2SNUouvcmJ3kWa9fNkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LahkJST4fixqpYa4GX7PYbDCaauGr21AdT64ib6P4V2ZQMYVnD38oayYLtHzuT5tAkNqvcJoADQEhRrxaraAtFM",
  "key1": "5K4jSSJktMd9aBkFzRfCXiuRgotr1Vew3xMDwB9fojwRK5HjNbNzSsvj1YHQ2no324NmPKVaQeNhSfuqb2RXmVvE",
  "key2": "3z2vXEvLwcHCGSoKHMnNzE9dBzXCXFUaD9y9uM2ZDoTEWVK2BB66BmHedHbz2tBNj5e7MSia6jMHYkJvW37uoGjy",
  "key3": "S2bM3we6fnHLDCsog6x5PX3etrBZaWkgydqZPe36iJTaFrhJzYuvh1fdkfoF7MQftxCi7hf4CABW2dd7CZkqqUu",
  "key4": "2jrvXMsJpz7E7tgXFshVWVoLgK2vVzGQ62E6CQ4BvHZghJ7mHERrE3ec41survohkmcmxDUW1Zz3B6UG3Z2zWmnK",
  "key5": "34Tg8XuyxMhppu1EiFcgu6ZxnZAEDDcgNRPmFZgzJSzues2QNa6i6DqLW6b61svFG6MAbsc4r5gZMt3SUmBLepSh",
  "key6": "4PtFoDXhLyBfjsVr9YQ4cHA3WDD3dXvbYEatWsVeL7FAncYYDooB1BiFz4ZTjXM1w521e1FdLCm8YbBoXUzsLMCc",
  "key7": "d9gDjBMHhYaeb3sAWZjtT7XTNajvoPthh2Sa1TZ1wRuKAXHRQxfTRDvZ8QBv5XSbgCdt2zWrwdJ6f3FewM1tp3q",
  "key8": "2dC7phzfgjs6J9cuvu3kFh2CDhZGY4BgbMCpEBAS58Ttaqs9Yc9Bi11VBPKxMFW293LrYai7eoUjd9NPBfgg4coj",
  "key9": "XMT8ZyDk44zyiQaAzJrZ2iNK2x1rXya54f7Z4hZUVawWVDv1UFE8x13KQsWkuxpJ8632XtusUPCM7RA86bDG2hT",
  "key10": "2HjSDnrnRu1DgyuuawyvJv94vegyVsZ1uHHabWYhjDrCuwd4pKj5AcdpzioR5xi2WUgHNs4DJhzW7oNXMtpctxfh",
  "key11": "64E8wUFS4yQvhtqsevCuDBs7qJSFk7yGqbCTDZyxxUocEo6Q2pn16SMetPu7uqQZg9qQ8sqmtpdSGptb3dUCJ8u1",
  "key12": "5Rjg9aeWqGFW1HGuygWfdpmAx5HP55u5dJwRm7rqFyBrb5m6oKMKtF35ARob92KZ8HRKnAt4knZsCrv6rJKAyFeM",
  "key13": "3nouvnGwa3dgVpahb9t8uxRsUfVAdmEAEkNuJgybDCVV5vKvSMm9Za23xLY1C8RU9AnxnEGxpqRd6n9VHsJtDD3K",
  "key14": "5YK72yzXfDt1cnswykvwzmXPPtBwTqZB575S8Jn32ZyoW1HGC7Qo457NN74YCEdFzRo6hAyrbsMxMe75y2vJwkH2",
  "key15": "3BVfTBhc1k5UuvJWBCqSHYqcWwV8by1v3Zv8wbXT55ZsR6ffmM7aVEYj7q8CAvMMcuqnMgYXSpBavZKnaJyZrSGa",
  "key16": "2Dy7sTy2FLr13o9yKbM3ZVvyVghwq75tfmQoRM4fWRjho7nrpyi7eejGqh2k3EXxLz84vWJiohRgy5dxBBwnisCR",
  "key17": "5hC3Gvi3nu866zYUxYmm6YDvZoBxECACQB9bzbDoZ4s8KJFS5155YLhsCSsm1v6Gre5fyqPm2BcqX8PSpdy4XNQL",
  "key18": "3Cmfeg6akpBfNThuSGirLDJfqEthzhmMNyCX8fEAUQxEuWNR4GognTrempED1Ta7RyN4pZ2NpaamHsvAC3yQ2Jwk",
  "key19": "XWU5ZyYnk8zdPhyyw2Rjkn8ypEdWS2XVnHrcyqqe7MRVaGW26UbXDzCrwHaRmcrpAoQWYpkRM5V7CZrxK5aNPgJ",
  "key20": "4QNhSmRWBLym1x5NyeG6aW2Y9tPGdQ3DBXbCqjyJ94Y9wZtCXcYxtjbM7ovPEqvFzPjjZbkCgcMiE31i8pTp6qPj",
  "key21": "5UVm5NEG94mgt1jC1Simxgiw4aPnW4k3jUwEsQFdNFw9eSDvniFWWpCEWTk1xKWn1u2unfnUsuyj8cr7cdAdT3o6",
  "key22": "jBQXZe2SnwPwref7NWL4GrdTyQKgg9UAZJLt2cm6oRBcfyvq2yjkERmWkKh9q29gQGfk873zYtxV11YGR2ccDcx",
  "key23": "mHDtqz7QH26vAga7qPDbiFw6sqjgbKEE7mnU9CCfj2WBdWH7DMqxn59X3juzf7wjyDaxV8iCJKTb25WzrhKjymU",
  "key24": "2WFr4J55zVK6y4aNMri7t6mcjJbULq6V9Bz5i4obpgDkPgPS2NZsM5uT7wXkrxgqWBCtb8PCRCbTeXHE8PS3J7eL",
  "key25": "67WpLVLgU5VXSYRyUvb7FPkShKVCKJA6MJSUxBgm5Dpkxf9u1d3zV366RjbzUVYeW7xySZAsmNbqRVK2hbzF1H1N",
  "key26": "wg5vZ164SrW4EZELuVKLAqVTsy9TVMGJssJ7Zn2MmUSTr2BZhduzBbHdxKdWJDaTQ21Ak7EmRJpcAHZu6PJrTPp",
  "key27": "Htt5KcTssEvRC2U6kHuacq6kpaVu3GCRujmzRCkNBPU55KAS7HTVQfJTfDHZ6BkRDaf8TRnzB92mWD1k5iE7wyH",
  "key28": "pd7zTg3a2VX8Gx439XLoPZwZzzak4nGBXFVei2LopSx3Empck93rkME3mx5Hbu3pwC2J4Lgrk3q6Q1JezFit9VA",
  "key29": "5jzVZtDPS4enFSUGQGJEoCHoKnDSvu1ZzEEUDgy4UFX1ze8soqC3qgFwPrGhTbazSsm3CXCiLfWbQMRKQWGe3eg9",
  "key30": "A5QRrL4QN5txNb4LE15asqz9FVWNS6iX2kJQrguuUCNnDQXv1ZXZbxPnZ5bAuen7MBp4rHPGPkoeirFg36dizBq",
  "key31": "2CupXHKbyLQqZfqDmFBKQdpqVoA3QfJGMdHL4GZLyZvqiZJ7Rfond16CHkMEPUxEQVx3T93MMfuUSN5Pc8AYDJEz",
  "key32": "5z4XzcGnuah1dBEVVAEXFdvBgxPxNMLyamDvsjT5xhEziNUq1RtK8Y6KSDKAR4yRPzh4sNMoCBEDY3fbLaf8g937",
  "key33": "4ND6RetQbnk3jF48JDUk1fvYu2avvyMbiPA3LRK9DDW9sVWQsjsNyoG2zKqPYiFNxXFgmJ8RpZneJcrrPywWTECQ",
  "key34": "3Nxqk9fQ2Jrkxqn9s7AE2CQS4zEUb8TZcjjDtyoStUwwijarLMWQfECe8Rqor6mDqPFokJHTKv4xfv7m66aCfbtV",
  "key35": "4kw2eamQ7SJbeZUBfDxN79jibvJazuxSfmLu1dHkGa9ZDHKozsH3zYQfgRP6uBQc1dm8y8sDyrEde4RX4L7r3k8n",
  "key36": "2wjAb5pU8AQT2nwcg5A16UPBZEK9Vuyp4hSjtHjaQmEByitrM55uZXavHqmFnrzz1gZadUQKPWp7fxKGYmAy5UE3",
  "key37": "5A4bhvvmjMjV8mGyfunV6DeAHjbJq2vrur1YQ9mdxaZXoYev47wHmD4a6pgfAFGjL8UbEN1qqWdc4QLjxfMvdiiQ",
  "key38": "3GGLxgcJs2BXheEdZvfPTEkPMfXw6DpCjPWZUtaxmLJDPeX5za4DubYhWWc9Q4Mgo9kwBFd7VgYJDbagXZEkfG32",
  "key39": "2R1B6GYfxBGKQC3KzrHjxoPxwhuiGgtpSN6EpwjkL4BuJyFmzXc9SkwKshTbYXyjtMFYz8vhqBgPxBL74AkhjNxa",
  "key40": "sN5sMroxsa7gWMLfa9VrhDsLLnUwgHiXkzNkW4zW1Z8nmhkQDpECvzxmD9domZ7eJdRBXh2cWYP2g16SGLzKi6B",
  "key41": "4eMQcQz1NQtJY6rH55i6YnE1wCK7kz5umMkd8FHwr5EXhhHNtwUhJVyt9rEPZYCfTwbq5dd9jzQat7X4eUEooKDc",
  "key42": "4zRzfFUg7giYkMcnNfTzf7scLxK8LpovvsmgJKJrvczFmSSyNB4BL32t3WQ4iPUqbe7xPeao6MpzV4ee4h7VJBtR",
  "key43": "5kVea3FYn6Dc4Lmbrbwv5HsiWtzreUQSq3UiRkdHmEGRBbYpk9KYzQ8tKDDN3dtTAkutp1zKZjh6GYbfccfeYMFY"
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
