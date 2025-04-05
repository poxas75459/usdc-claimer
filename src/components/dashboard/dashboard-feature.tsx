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
    "4CxPugbycSURQLQuvxMvmSAkZh8cZdtzjc9VezGu6n1aYfniCdpAF5epR2CSvS7ac4g8zW5x7GQ5DJ2m98h7uFRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JHQy17Z8JfgpJjMAMKCTr7XrzjhCkssWVQsWNJA2xB5aHviqgV45MqRvHtMPZWjvbxAZb58aJjdA8WGGAiTeAiB",
  "key1": "JYFckLMutyDMKNxBbtB4eAGW478JaWEwnBTMpNtud6T9bqvBk83yVLoMrdArMin7avsbWf4CChFZD8gZWRkdhSF",
  "key2": "2YnJGEDCYgfe3VeY3PMuEmKnVHRkhxtoxSeq3SjE9AACXMi9AhR1xdGEAqZXppVB17uPTx5Enz5FUV17BCSXpSWf",
  "key3": "qGGGbh1ubHXBmGKr198kVSw9UZ3ukon9ie4DnWfLah7WQ1gHbsBaaHVnDpqwBcAxBYs7YT9XfjWiaAAw4sD2cfL",
  "key4": "5SFBmiZh8rdP6QJwU91uXMRZcZec1TdVjMUaqgYMJkMGNN7V1RecgC3K8ZZ5gW5XW9tLShsn9vqDxjb1QGz9wEYZ",
  "key5": "5qFJCP1DgCLkxWDygTPaajyFXJNd6XZWfPUerM6c8UbDAiiaUjdm1SS4TZdNoAWDRUHuqCzErn11JLWUTTNFsy5d",
  "key6": "32rPBNe5ESP4ys1d9tuC7S9qWnYTqHLYyzZvsQ5dDqwH8WGPZDPrMTsfeGP1NtmCTZHNGupcUG51gx8dj65L9Kbf",
  "key7": "2WrWyrzxWXHRA9xv7T1L4o57baRFpXtx7zxjrRxQnpyM1sGR1Ww85mTng6YGGPZSyvGix9CNtaUTh9LhRyXyQ7FP",
  "key8": "3nZxDe5Nrq35YeMzb4gEzTeG8rGJpVK5XrL22b4hgdzN3UHJPn1feM5tF7k23x4ERfPGi2g5Jnf8gGgYMbyfLyrj",
  "key9": "2SPXfByp7mgJmXmEWYrCy5R9Ldr2BmgHSStf91Ww6NgUCDvsxq8Tg4wQhmFuczBxVCyyK8itrJi1RuWUySeP3bvq",
  "key10": "5qbYQ6zfKqRf4LJY2ehDYHu3vvzPKQeiEJEP5MG2wzuuQiXNCMRHzCLZ7ktzt6LxDyPZF5jos3D2vkagCisjZ4vt",
  "key11": "3t68dh89WzErFCU4S4SRorPsYN5566RRNsnk4sVeQzytTLwqonAh7Dj7W61UXQv6U3v6zBfaqppCrSEhpmJX3ZSD",
  "key12": "QvedPHpY3KoX1zz3gX8avc9ijRCSdb6si1txTQ7DwiNdzpEFwmZiPWWQSWBj56vNakYjUQCiwaowYpDa4fen5Np",
  "key13": "3n55gZP8fkiQLoyrx6ihWz3mtTkHGZPN6TgWorq8how1Hw96PzFcScphQsPyXKH1vVofERoF1nHgnZyh8nZVWMss",
  "key14": "4Fz4sA3gc8eaCzXd9ouUNHYdjQxFLZEWj2PrbgYCtwmNKQWstk9pqPBB7Ry6S3SQ17Sr69oEQ1LJ3NSRnkbZvcmz",
  "key15": "okMHBpDhNFAabNAxSXc3Cozw1JNVESKZ2QG1JhiTmMkrA8cpFS2Dxt4etZBGDdXaGXNtQLNZ2dTh1GDaSaG8kXt",
  "key16": "5UWnfpoW5LtAHp9q78dgV9fnjvG7P142aJJQntTQwvAfxCymbY8RFRfYriaNfVzuxkKezMSdx9eaeJvr387YBBff",
  "key17": "QzUsjaxzc5Uqm7ELJDni49Rep6ULXHsbwHof69nTbNijHLahAXa8WNc9CzABg3M8rszvBmp1e2faHKFp5xtTFTh",
  "key18": "5jGYBiro5yDX5iz55Kx49z2VgkLQtBfQjkFZ6JkYvjyaTp3r4tNf5KE8JsSFtzeuyN75kB2GP4yk1AJ97jGpSNXr",
  "key19": "35bQygAYUUrTPCzcSjWM9RVvVHufLaBobZMdfXiHv1P3YXBs2A7D2MCkzSszoSM4SAUxNraPyU7z64cz7TaTxoSU",
  "key20": "2aNFnYKGyBRjk9jdDCERaS2hCx5Vo6MRvTB7Ja6ouFVKgqb9HAS4xRh1Lq3omN7QUdmPvMf2eK4VSKGBZyNdPwfb",
  "key21": "4a8MqDQU4npjSDmyKqdqsXejinfm4dd1qsHEWLtJB5s48W2WK6gwfzeq2kHw6W4nURp8gbg8y7FocSw31cuMSWey",
  "key22": "BdX3veYMyoS7JEgsNSygBwtQFbRiHZHmbss7M7kW5BsWvqg9zaHCEvoCRpCHUTXzARXPs7CFC7SRk2DBRFTcjRs",
  "key23": "67Lvh54Kq6zRbMMkF2ALv88GYXzfJddJf9GRZdC2MKxzr4WY8ZarZs1xLEqoAXP2jYjwsUa8ysTiVuwrVqMpQVgr",
  "key24": "5VkZM27kidfJEjwdLnkT6YmJXXbW7QsWHTVWefY6o6rekgzgtWG7z7sHFemZfDUE2ygFRgFnzFjdcwqmuZq9acq9",
  "key25": "49mZfzmLrTvb3ufXQAsSCyEn1gAXHhw9N5gk6CnNNembop7EaPW5nLn57pRYHGEhJyTcjaWfhNtriYMLLmzKB8p3",
  "key26": "2BqmVyWq2nvqsGT7rxC532LQ3vq4dqXYur8sZXAx4pKVGZkUigCfnXtbdcPHBpDM7nvAfXmST4zGmBk4DtzDXNwW",
  "key27": "sVz94EVWbMhpzae3oT8VGvGz77Rxv8gkYjmGPgwR9mQTeGauD52UdpkNi5LZdhpyWApXVRAjyqxqXpsHTKHMcX1",
  "key28": "5EywGWyWHjaMj1bNxsa4frLBcj7v6f8NJBUYyyLPmAUD8dTviE3FgEdJpTqudztkbbWZkY8ieV6pbaBhh5rNPFx2",
  "key29": "3uQRqUz9idsEKDgdcs7Wre2zeicvzWuyZfcN6SaEDaDXPK7PFwXWLqS3Bcxb2jwHvuMg6L9sTXShLXvpNVRkEFYn",
  "key30": "2nxH6LpzL3yqAqVZ8Dzy14yuufst17jjWMV9fwbgi74cq2cgfBf14FY7ytLzRFSWNtVq79Jxa82TKC8PvT8hdwRJ",
  "key31": "3CdhSdtf67srADDuybTbKrD5iaZCfPxyN4FvU7DaVddq8pSXrkPuAGBKczpYMgx5qEacDNVGDT8X6Kyhi7r91J3a",
  "key32": "21SLMeThexnsTsqXVkyfvZm1smgeLBQRZrwazgvJCTSbtDC9tQy8GL9F4jfcJoCHmETws2SebrfiReoMRQxxPcK1",
  "key33": "BS4DHArxv6RJE2pHX8uBtrxZ5w5Dot4PMyfNrBPiYszf3bnPEvvK1mPAP7JzxWoEcbkepFUkhvNu1mHQoCgfsYY",
  "key34": "59E6zVenLbHFy2MpaJbmUbvHri1bEHbMqMFyVQRzB57kXu6JWVHsr8nPHcU7ikoB29U2vF5AYVHemzxgft3hjdoA",
  "key35": "5wGcJ87VvocqoH3Nk2nWaeRuLWWbY4LXzy9eohAfBPrtCGW9QWFn8sUqHUs3usKkhRdqh58snwC5Pb8XFBQxCK35",
  "key36": "5ntnXSvGT2LeiWnNX8PxPAYxgpDj3kYzt68rapFe5YjzTbS7gmrtk6LbsMhZE1S8LSAQKrEKwvbxJmtXnWjYLViA",
  "key37": "rkSqymQoCgif54AYLbusmNTnn8p6iSWjRrouyoDEFBtM5WX3uvj7gVxRQmr6WLDoCFiMxRMxxHVw7kUoMybWwp7",
  "key38": "2gfkCb4T8cBqUHNBsrwVdmS776DrmpiLoiJoZ6SSQtW5kc95BaWtnamR2X1PjsnPMKyxWD2pzfk2a3bvC75rZuXx",
  "key39": "2MFhDyg6wjkzahYXMLQ99FBkLvTkotH1XY442NdAqLeBjXCngV2Pq4hdiruhfXR3Mv9bU8BuqpzcGRYsno6REZUh",
  "key40": "4Akb3EhEUzUQDUvNjHjsRDTTPScB82jztnDQ25wcEE365ff1jMgSbRtvreZ2b2tMrZeiuP1U8JGkXSNhoDQQPiJp",
  "key41": "2vDRdLuXYr6NtDL4Xzx4UoAs5LggLWRQokYBLVjLeEtz7QUAELZ5MB4A5xkKbKnc1RR5DPPxR6YbegMPKPnFgBUd",
  "key42": "2SqLx3R9k4M13KjU1XiaFJ6BP91VTZey4rShGstBtrQ7Ap1ZPxBgB6VsbmrHqMLtBrb9p7pczfQTqzT6VgxPi9CV"
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
