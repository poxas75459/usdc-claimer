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
    "44pxc7H4Ux7gfCApEFPzPgYgTpA9dunMwhMHdpRJmpC1munFVtkvAwH1bRbuLTupofCnDjjxNa8vsJsZNKExPS4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CAcuhRNv81bAfPRE95Z5Usw86FzitJ6fHDyykQtgSN4MjtaT2aDiyTspUAKYhnYcH5NPqKEmzXVX2hgFoWe92oU",
  "key1": "23SytiBGmhM6kCUFeFSrVzUHneRFp9BjLUeYNwZJtD18WR8CRp9bGVnnncnq9qUki5F83oB6hjzZ5vNYLafFYdia",
  "key2": "5DL6q8sVKwbuZcqxWKNzE6nj1icRfM7Z7W5GPquFryz1JPBagcPSoxLWE6Z7bSuQsdsookQ2s2iDQBA3Po2wx9Vj",
  "key3": "3JX9YkfcwhAXNNKy2Tbz2VFZfC7Tb65CNNfwqdfzqgp72kKDNy6SFCVyqo1fkdbBL3MTSuonghefPXaJmZogx3PV",
  "key4": "5Bd5i7UizXBjfw5SXa688XehtTfiz1rv9qagKFpGYogaJSLB2Vd8DZT914mQJxax41pse4i8afXYPfxtWoE8o9qz",
  "key5": "5YRcdvBCWxNmDK6Gmbo7FXhTaySfvfHMQGgC59LtZRPPtbrvQu8nQMm4yRggtygEVohX9cYmJFK1H4RBs8qUmFjb",
  "key6": "2HVm3GFAFVgqkcvfpmdbfCDUMQMnVzKUa7KXxbk1ktLTgEWwiXLqAgY1HhLdwbFmmJv7ySESoXvahmYnvX35rF6G",
  "key7": "iR5TR8egdnAZ4vakvFLgGN7fjoTWuHiqKSkcASPsXmfrZvGb1sGS6kWtdXWGo2xBDH3AL5w1sU62gSEc66PjJT4",
  "key8": "5rw74abAkuVrAFF5qFQuQyFWex6zsCZxjRu9698do2Y7rKsbYLN42soEmVNBAsrS2QKddL1WroAQayckGPfzoQ81",
  "key9": "4yrt97nyEnEwQWQi9gnaKc99v3GKFRqZT34vsA69Sg43diPsup5b9bCLjVjnrvQVmRdyN2mEPb3uCubQAGYsBp6V",
  "key10": "5eBAX9G2t3SVW6cq9zvbyiD8SMjthgRGbT2i9wP3a4kaAxPkp7tGzMGmh78JwFYAAcUWRgU6vXMKkC2ZKp9sD2gE",
  "key11": "5dAyC7fDtypjWLUuKmmEbENMRMqAgHsTZRm35x1gZKfEQoM8FcFx59e2r4Zay8nuq2riVFCqLq4GR1oLGecSNfej",
  "key12": "43ZbsuAw11zC5J4Cg9PCqLUUNYWtWRWHkbMGDQTyLBSDvRNhHTsHtCgQaWNGPaPLJmMiMwasWkSLBmff6qYjBpsM",
  "key13": "3dVwGEQTKAaPnmrbD5RkxEwAmMdRTHma5xJvqMGXja6wJvhEirLTPr6QydzXN3HGYKxyzftSsmHd3J5Hcr7Z43Na",
  "key14": "RsKADkRtp3TcJuJdb3v7gcJjhYw51TWpsjoMQJaAvL2TRqV4D2PKHBSCvhgpboBKxnTAnBanxkvvb8feMB7oRpX",
  "key15": "G6qubBXiWuBabAiSu2NmWm57BsVhSPs78bfrqH8FPpv7hUzyMoUZyE1E1g39m1vSpxBBTRqdQGMHVAXTDF59oAw",
  "key16": "3qafamJnszcWVWxRJoLecw8uNUdJhEJNzuzP8eybTLHriAgDvxmjFGDNJ1qXB3ZgVbbeT2F8xCCsjfJoWAWx1hrD",
  "key17": "4mUAueACY29UBwo2tx43oVn3FPxHJYk37E7q91tFACjTJRyPbqCeQnispfu6WqwbSD3otWtcsHnfNhHfHSgRPPLx",
  "key18": "ZU4TNZsMgfZu3GKDYKmrVUTSudMRzxEGUHbQkCHgpMemSSEvkdPozMgbpFvsBsmjCKkTHKvsSBcw1QpmK3TnYB1",
  "key19": "2Km59JSL8gao3kwXsWoRySyviFnHFKiaZDK1b25MugGCBw2KcovphiCC6ww9HzycXSb5BrEy5B3FgTbfJPznrcVo",
  "key20": "fqoqWE7kMtWXhLyjKzU7NUwHkknCmJaRNEkK948h82vyDvNHUpfyQtYf5PrQYdudPjxcdWas45QsdCowsurucDD",
  "key21": "2r5rQCoSC2t5xSp36Q3Dn3fhxPJRHwr4hzekvwZ8JEMVMgYiEDgdkBCG1wByREFLzv5rzFcEHA95aCVFNUsWW1jL",
  "key22": "2sPYm6q4CJfAFYfRKtdf93wd5SkjzYV7nkDbgqyqKqTWxruvxgKrgRxDJzShQoezxjGSch8vT7kcfR7ZedWZWPoB",
  "key23": "3t8iQDGekqap1QhD7P5fUpfTQKLwu3hN99UcuNfQC5hqhgSxSZvfoXA9aFGrhsd19rTxtrZbnAetFMqjzCUd4qwL",
  "key24": "1sgZwzaTCEcpc2yicJRXJY84XvP6iMubmxe4diLSr2mfzw1iUfojzzJdanpfMtY5A2ndFtXvdcT3pp9hfHPjwNg",
  "key25": "3wc8WnGUxWKrbVyxPZptgwzFc5nXBitL3Gvv2KGFLMtPCcW7kbNDvXidzaWeHxJEosM3Uj7Wi9TsZwquzChGFq5c",
  "key26": "3YXZuGqDesE1jsvqsFjz4ZRTP7XvAVkCZK9FKNtf4UwWwRwmJYnfQHd4tG3wgFm23aVHqGEyorcuDJJS7k1CzpB6",
  "key27": "2tvFca1KxxKNZHgpPrmQsEsQqnvjBAvNB9AcDs12CEERrtXuiWDZ26vVovSu3kAL8JxFMRSC9XK3T9uUrxUBYe4d",
  "key28": "5rFVHzU2MxxLhD5bQSdbfCBVar9iiANKHArg4VmR7EAmH5bFc8Ei5S4R3vjQ28cfKZ7PEECm4vVAn845uqszoC7A",
  "key29": "uwM45ZtcXLwJug84Y5PACqn3nArzVgtDBiCSfYKs4cFerJHourHTMxJFpjgj3Z6cgyeGCr8FKA4r2aphrgdw9de",
  "key30": "2eeJQBP2gejvasJDKwcog4RrcKJRnSHVwST1v6vSnvay7Gzw9nXvgVRKpFWYYkCWKHARFFBTzmuqmsT8RLo9sNxd",
  "key31": "3wDbUhn6oGguzE2bqb3asGSqQtFbGyG9t9gs3HLp7BGLJHQLPHebp8tMaKswumY41A8qVjQkXkVE2LDzwNuejdT3",
  "key32": "4EvNn1HQJbYGXah6MYqeVWqsd6QGpAmeSuUirmtYFECo6XVh6bpFmCsKtQ9tmvqknofCXm4YUvJimrpKkrvQevxi",
  "key33": "Gas36bUaFEDMSzJa5tj5D6zjUQb7caPBrqjAVLiQ5fd9nfyS7ii5SGoNrkFXoDRPdXPc4i5c7ZzyCh5VsHarVeA",
  "key34": "2WvJbyFaPHRquJrECQSrEnFLW4odfn9wThpAmsBWWjaLSzoVpMSEgEhLC6htyRne6tVLQE2z14URicdPB6Qsdr42",
  "key35": "51RZ4opPdTpuVdm34gQpsqfaBYUvEjthCFd4FZWZaYLsyAhAL1K59L78QDgKWXykY2pv4xHX3rbDnfUi7XA84dnm",
  "key36": "428VkQ9ViuGpAs9QZvBXCJeHFoy4WQW93EDGDJGKx28Rb7ZZimq5DFENY7B4WZdEGXLdy68i76MVbL7XEf7fh4QH",
  "key37": "3vhH1GxsaHbUnnwoFSFjS7kqJqCdXvafRa3zboZzroyix5SCiUpGcwAUAHgQEidyXjEV4AYW1Aeyok1V98Ts4Bxi",
  "key38": "4BXfqUWAfmwr4qQFgc5JE82LGq8bdokW2y8RgTN9z4U6hR2sQ3tN56pbZWGDswLHHKjWVSDDwVzt2xGRuDUysepS",
  "key39": "7wcjsCiFpPgQw5XbwtrqPCDJxnmMpKM94h3Ws2zSHkCd9hHMqDYTA2VDLxt4F3SxGeyUmL72H4VgiM3Ap5PfnCJ",
  "key40": "zrjpZn8XCSDpzNdtszZ2EoFwqHD5cE767UthVBMBgWPatfYA9LMEZGz9ekZRTvwok1guXaRZp3PCbgzoXbmvkix",
  "key41": "YMwFMrDwbRzMqE78Tj4FGP4u2CQUFdRiFYqoFhrBS73BqCutAqQmCfXh7UzYGADbF39uRMg9ytZGjTVxdANMarw",
  "key42": "SmKAF8Y8GmJkbhFgGRsRRGanGX1ghMkYDWQQSSgRwCbu5ZqiUTaY9j62R2ghnkgg4PHKKuzQRije2ZyCFh5PQmp",
  "key43": "5L3c76FZYJ5mu8RcXKzHK5nRDYb1ezKgAGxRsVXjqe4r6gQtG5tHcqTmCH3B3hsgWWrAvGUvdArokUXSt8C1tiWx",
  "key44": "3rPCoxqFoYhEyitdV9uKSiTnafb4JgKvkRKvwqBZeTzKX8wWYJCW84iZd7sTxJuyfKUSrzjdgsTdfxn8KkU9XC1u"
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
