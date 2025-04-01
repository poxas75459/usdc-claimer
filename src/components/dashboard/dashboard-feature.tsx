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
    "5EE6LFEbxEvs8fJJEbp8KpxL6Wj8B8bbdweC8Zbuxy7ShBZXq527Whiv78BvhWXJvHLa1g8JUKSjawZA8usQR3pN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yAT7fU7pgETYeTyS6cjV6MUKKcCSukRREMjxS3Xp1TLvQ5bPeuxX1YZnCjdaUZJT9ChBFpKj3JTyCdnLqhjxeRv",
  "key1": "8fVdJw9PecHuo7CqvMiNm39EEhBwNpUspcgsszPPSo12pmRUJpUPQVbsvNFfqTbRWraFLy3t4jxDWbKw6W821YY",
  "key2": "5uVa1gk2NZpcxoUC6tKogB5nF8h9eBE7TmW93PjoLCJ6QufFJmShH45nJ5y6iU7sNWLFpjSPwRFuia4DhMNhBzz3",
  "key3": "2Lk6KTHVuzttHmTZvecrMebUpVbttMoKy65p7j3DGSLfeLLacHLobp759F8LcwAYJefmUcUsnXeKh88C6oCyCSPu",
  "key4": "41oJzuDUPMHFsHBhoFwba3pqUozuzTmLacRgQsKQByhaGHBsUBXL7Xm3vVYhuJHTGr1hSQ9unvQYoRHAEKEo9iLv",
  "key5": "5nbzxGJfYBanmDPYzboDPLYuzm7w9auegARDagb27jG95VeAWLjtqxrTtFDAWVPMJuh68AaoE7da3wguk683feHA",
  "key6": "v5CaRhwbGqffzrSgDVVBs2BDPxftxYEQVUMJgu3mQE8SKcY4kSTBqqmEASvmwkDfoinwCfEKADejEunoT1YTRaJ",
  "key7": "62Xqhab6MvEXktX83jEhsT3FLGHnj8P7snhJJQRyJkdB6HQULMbbkJ9seWTcJ8QAHYmxgKmsT4EZq1qdDpiv8VYR",
  "key8": "554JT4ccA3q3WC8WBGQURzW4bfdbMX7jmQQnPHjysf7tCUQp2SpJ1WSpMum3AoFVpWTzSzMqVGyLw4K6VUeLpFDb",
  "key9": "NBM3CRdzwGnjpxPUkRAKm8U3HYmokuxgvf24SvwRwmpWpM1AVWST1a5zRfmSnx2MjtLq5xRVUYQCt6orK7Qu2ay",
  "key10": "3pmNsCpjHKVFFfSrwecWUdDjpNbS8HoexmHJjNn8NJNZTYvkeN4hkJrEkRTPZukzvwBsE3S93DM3SUP6bfQyDeSv",
  "key11": "49h3FCNaPDCmJteeTLr4aAXYjewxthgNgmgxsMX7oAiuuBx7aeoReD4hBjgfLB51SVy7gRtPQBMtjseRqa2TPaX4",
  "key12": "mgyETYiPQKAdczHJhjPcmduwE9x4ypMDPiJQiTFGcRaDL6cPJjv3ZxPKDZfrGwh2rd2UtALJaDUBghb5yM5wJ3R",
  "key13": "4mCvP3C8NeE4fRGQ7bkf5is8Zq4vczCo4uzbvgYtjF3xPGmwep8dZMsvxRv6ZgPJ7XTrsHV53K7krqn1S4x51syA",
  "key14": "4mAb6eQEuV19LmAB3o8vXRAixS2okUSPv2rZ7wNbpZJ1FPePfLgDBKkZjYwhBYLiFTCTXBRMmJM6m1mbUATJXWV7",
  "key15": "3JFdR84HcCdY8QKY5WQ8hpG78eZDixZ7X5oGRvxeuoH8KRatKR5zCNbudBuV4DYrsFK8eFm47DfznwYrpyqWwaYT",
  "key16": "3wK1sBNeZ5WsGPiMAaabEtwD98EjYtdqFNVLM2cufUhBjZvJ1ud4etrLZieqfgJqQoW8KTuW98aChdfAvHQR7LAL",
  "key17": "3cum1XzSyBTFGWrMopGU2w8yexp9LkQjYcCiugd3YypfnbNso2ftaz7FFj4Un4bXb5CestwPZoyX99EeizeyJLmp",
  "key18": "27CN4chjz8KwiFoGZCANh4eysPD46gTvc5C1MjMzoQe8qdu8V4UwLqZFjzDCZg7d1B5DP1Q4dSGQUmPK2b4Wgg5T",
  "key19": "3atnmxAbbYAF7v62A14znRRRCnHWsLY8XwfmHMFoVzYqc2VrWWQJmGt1S5HifFyHG44smysRknqPbUXvkMJARcYh",
  "key20": "2Z7MdksxfKCu5b72EzUG6iZbzuUskL3FFQjyf8ZELUNasEMMYfXptPfu8N4j4xQkSh4mb5oMjCqE9nhaBhcqJfkg",
  "key21": "4JNJyki1ZW522V4jMKuU12ETHUQpf7pg2TVFPykkSNsWKupejGi97X1nHo8q48JBrrUNumocFN8ArsTwEpFWYjXf",
  "key22": "qBef56uD46bUEf8Uzuvm6CtnWiHHBarWymTnSmhMDCs6mKpLQJe3FX3rMv56wXdmQJyMWzu1Z22Mufn66JXoapk",
  "key23": "4hBEYpWZBvRGprRKKCHx3ijLNzGQpPWUEdZcSQupwutTHigbXXqrdCvTtAsCa4TVEnBGz24HQeAVusVdfGfShwj3",
  "key24": "4E5MJtvqi8mxTNRJ1LXAJJFHVHALPnW6d3SSGGFwpFQPxfoxVUGe2Z6KF5wBde5KB4Qx8sCgjr5CGPZQDtPK2MJX",
  "key25": "5nboKema2ss5B9H3mbtRVerxN6G9G34MYoyJ5x8qmj87FinasmTGkWBai8BEwRTXGBUnwNXsogmMvBy3PkmrXjJm",
  "key26": "3hmZTwtrZyqEBxkfergxuypPr4xs8yjqiN3ZuHXy6kpqgPLpuoHrHNrp4zyHx9h25JyLwoNBJtspjLVJuC1o4j1C",
  "key27": "4osSaLLVFJn1rnFMYqUyDy8k1uH3Jk5rKHo2GBLqGxH6886B5RtvzwxRhbZdrd82TNBeksjamueDTFtWS4MjFvo4",
  "key28": "4i3SjUtE11ZcnQPxAaBa9jtSaAge9oMgF8Vd9tPTJzZnXaewWaX3zwx5xJefweEtmkZrUgP9Cnup2f5rJf27tPfP",
  "key29": "2qSHKFUwS9xVaTdYCwNnraVewD6cZna1QMqFQeEpdVKsY6hdamKRANUJeK1jpAZjFxSA5T7jY5AcpVVVPcdZP71P",
  "key30": "3EAtFP11ks4pTkVRPr2MwDNdwkrmU48dgxV3MkGr8Qd4bktFyhvHvyFLsgus4TXQcscChLTG1kTM92LiAHhQ8XMY",
  "key31": "3F8NAitNs4tHMy63umjN4m9spPaTd4b57o1a7z3ttY2xKUmveJ5DqCDKAJgUnoJot6nTMWw7WEsA9G91zGKvi7K8",
  "key32": "2D4kw2wefptQCvqZcJk2KUEfbMqMPCJBKanusRzgQ8BDMZj1xe7it24vz9UV8mFUjMJP47Rh7D1ipN6cmGM8t9TF",
  "key33": "4ppnpWqXc55kFubM9GKxntbj1jRCYYWPSULT8RLgocww3MdLSbjedV1p8JgYXvBCo37ptxYCgDdQkBtr9C8AMShr",
  "key34": "4YamBS2srBzvGRnGoKepPsxewo8FovQCprXM3TuB5SbX4srsYce4azvNysWmaRPUVVrUfAxHHSzGRPhbRHbtCQ8U",
  "key35": "47989fRZZXquYSdnrH7pEqRMMbDnHKvTRt5N6mQBuqz6PFQJF3xPLNXSqgbK2cBsfaovKojo9vzP4G9i67SGCizr",
  "key36": "2V3uNeknzTJNSo4j36XLGtMCQdBJhyJ6qUGK7WWEyWdw7o5o895oFwH9PagXL3ih5avDyv7PZyUC2Xwqufk7myW5",
  "key37": "3uGBcKsQLT7M5KtmAXhpF4m4nLr2DTc9sLaRo2HToW5q5cMWg1mLkQcUWDSD4jYHFJ5gHFboP1pnaFwRgHPxacNB",
  "key38": "2zQHZjtB2aQ96bAXh8qvY6UYjun4mCZ5Dhsj2ahppJV1bue8gEs7UUYN4BmmnfWRFDMTgGq8iq7rZBCxt4cjCwb4",
  "key39": "4bT3awZtievjDsfGsaA9pQWG5DfjQXm2SDdpDgwfwjTFpr9QWwKN8yhGqc9pp8iHdKKEcs1AMu5dQaghuhhec9WF",
  "key40": "5j1Yr1jcmie4U5saAyGxuFA9HeCzmpcriy642v581sQbiGtTaqDi8Tu7avNKisi9qC3i8rwvsUBRSQyj6gJtbyZj",
  "key41": "8akQEqVy2CHccjoc8GJ5ZqNELxioY16zEkpKu84pzhNzXKR45yd1CozJ1EwfoLNWCEPQKyrfNnUda3Uf23U4RRe",
  "key42": "65CPzMzuLHwCUUF1NRtAvQ3LUKbHNPaWBid4DXMWypQ78u3nAJFRxnoD8HMTDBUFsrgSRJH3xLeHXkLByryTuUQ4"
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
