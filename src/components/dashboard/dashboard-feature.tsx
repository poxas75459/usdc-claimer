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
    "3ptzR768dnGEPWtTEjc8poczQSDYU5sPaAiUBEBUTAwsraJ9DYUVuGxCc13g7kH1P85mk78vJBzJTKtb4HQW3wCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ts2Px2j28smMrq7aTec4AqqYxkewjM1iCdJyhooDxGReiszMmKgKcY6kvExneNUB3ekq1GE8ewsBjTzLd73Wcm7",
  "key1": "2fpNdMVA1SkA1Hjnz9JvuhDcsKZVvM7NymgnFLVrduTkfmqeDkTwiLSkgysrA1td9Pvbamk1E7aJNmBFA9gyuGQJ",
  "key2": "5hhzTxHT7ZsMu9AFb5x2hXwtn6F2cgUCR655RbRDAtZviQDqtFfz4QbbwfTbpeysR9GQV4HMTPHwHg4VESRr2Mye",
  "key3": "47MJnfUudcDMFhS1taZm6Q9g5HMb3KRGv9mii81jgUbVDxL3TErULnV9R2bUZLyTMx2kdpptfXjShbPeAEtPiY6B",
  "key4": "2oHJgWavJH3ZegnMnyAfwAUT6Zd8krtAaqvgX1wuZsS81rTJcagxGu1a6awLbMe1TPJKcnF1d5yhyR5c8Vt6cWTC",
  "key5": "5XUEzna7bfyZyZt54M6yiDrvgvkDAmZedBrk7EDxq5y9qVi6sFCRv9gDEKrv28qFyGQRQrP1NYn6s6EXMRygmkdx",
  "key6": "4GdZENMGa6XTa4zh7USSwiUcWrWvVr9spra96FPmyvjQpLbp1pSpoLsJShp8pTZ8xVMUQkKFYgrsD9nXMWBnnkP7",
  "key7": "5FvmssKU47DmjGZTaqM7WR3dyHRgPGpup6ANgnctEwDvfCnRb7VqWo544eM4cGjR953bC9tgXh7UUUdiBmT8PZ55",
  "key8": "5jcLCPohLKGWKKg25T5cwqE7DNLfopoehSYWzr95wQfwrx6NeQnN7PjqScSxNGiE9Xmi4bDZimhutaHEB4BK8EnA",
  "key9": "5xC432HaJYrveDyG1JTMKgAvpVDfnjRaMDhwdw7LvcNe7z9e4MSzr8k1c4e4EBUHGgrfCqiXbYFjEmXYU9KeSgEH",
  "key10": "3G9hyjLHYjsSo8Gd348GY3SFD5xMtGjkDcuCi1DsyLcMQNfduRXnkmKqFz84D6rpUQZMDLqUb4JPAZa9QXGnkdSm",
  "key11": "5skj7iPJHddMMfphRznpGkux5RUzDWPcS4ezKgxQgB6kFxt8Jfje3fza3XzWjQhDWeestbJScfj79mFavuQ8YAf7",
  "key12": "5Rn258XAF1JqjZ2Xdm5MS4VwwJfoDyHefm2AH1TZNdA8KEC593UR7hBaRgH7FmNxSu1HeRpVxKboiEwYw8YCJkzB",
  "key13": "3NEDQxq7vLAbQuTgy2pGZfo8p87EQqct9uQDQ2kq9KPL9Vwu6TYNcPvE4mMgopmEFhDTtukJFfqtBdcFhK9zsQp1",
  "key14": "5KybMeK2MCjfkpCZeCmUkZevvuAuSxnj1G6QCLRbLfWP8tnKYp4UZ5G8xsYC2mtX5o4NE4VmtwGS7Ruf5QbyTf8H",
  "key15": "zz8FkhLFgz4TYbdDSAwokhe4QRSkoJcHD1szSSxeDX9DSsskj9BaUr8LPNsyjUToghfRxpk8r3hyGX7QaPy7JuN",
  "key16": "5SH5p5Mgdb6SscQxBmjCzXJjeQL5D9jjQWgC2zVwcPFQdWUwg9rb9MdBpW2vQNBmaGPwVTyKWcRmvMCwN2j7iL4s",
  "key17": "4jzqjY4ms9vwthwaV9jBr7M7NEskKgVGdCpDQWhhvQ3m9PfguDnMwdsuK1rnpgi5gKBrifN2svjjPiuL6YUWvfmv",
  "key18": "57bT2WavCd4rwvn2ShvZT2Hr9yPUwD8auM3SDDFtFeTT3YVfTDtMTMkqaXJqJ5L5cTxtpg2m9JfJoxyg9Hn4TUyq",
  "key19": "2xxUkP4oUDaWw3mh84kfwB2nhUR4UpikpusY6StL2Xhbm2NtSD6NDetW643xshaoYvajnLxwnQxDpezGvZvFw9ZN",
  "key20": "5oactn1F55DnP5LV9pnpMsQs383mHhAfEkDb6AvBQirxvEMj27dSpDMSXqvh6FyDhhYbbT6qMfG2rkqrGADNrFZp",
  "key21": "LxhqmiicoQH8n8HaFrD37TkpKtumKMUHUfKBFhSfdbfAGktE9Ak3JZyueSCKRDK2bWa7LojdRiNnub5Ti2T2osR",
  "key22": "4WeG6NNostpM3AQEJqRABws4MzCPycRxEyzAsMkyxiqjtxe5AL1T3ycBruuVyhLbjZt46chYZq3YD7r5AfWa65rJ",
  "key23": "42g3NDXKLXoYgt35hUPJ3GRSLTRi7jUdj8CcbuZtjDmZrEH5oQwqvX4pE7spSmGAbTCUbqcvLmHYyAAMeFQAerDP",
  "key24": "5NTz2qFX8jZr67A8wyfxtiitLXiY5QzfqjyiZAW1ezVHxoRMtRZJh6s4vgKi7ey4oFD2hsZ2jVExFu7oVLheN6zA",
  "key25": "Bu9pdSQipdj8czYuvU6hDGR17NbYfLMNL4CWfVgv1o1DoGCN4eH5Y6uNZtDzAPTk2jbHZvepYyXpDAfA628smZA",
  "key26": "5fpdRFum3LN4BmhnZqZzh1vKUCcUwcgnZhQViL7zp6e6m2yN16mcaQjVN2VpGfcYibnSbcWvfGPJhMBGckCNFHoX",
  "key27": "2SQkJgczaPBExUGVfHRDode4y45eMsGnAvupuU6BFQHngaTwsMj2FZwn9YCYQUtQ247NQThhmozuGC4ChKTEA2rX",
  "key28": "5wk3Zqk8gzwU8ChpNZreBEYcvsdzJ1SSm264DzK3fruqHEvgKTQDQXyu7mFP5uRbbLyd7WS6G8EoTmLJXbzgNjvn",
  "key29": "3yyzyEbknEJ3wB86Dj9fmmhMYw5D3kUSTMMoCyQZCcVtcvjHQpPGGukttaeeVgCM9wjqabMSwzEKwpTfqZEC3bSW",
  "key30": "3Ur63oJ6a7i73CNbLzbALFJKeoXyqgVvmxHj2QeL7qeCQv8enfy5hox7rFC8pbnm72ptx6YSuc4oMW7vwajeWhgK",
  "key31": "2p3rnAF52YY6WrL8yLMBbPNd9t4FPzGUNioGgsNwfJAvrGRjWKdhawv3VvkqGGD5Jm6eTBy3LQDRENCXc2TDpfWw",
  "key32": "4R4tUmHc5wfEp6HrKXhhCNLp1AdKcGcX6Ypz6aag4D9xWZGShq52PMfb3KefviEGZZFhPfztu5iqrzZnM6gXJ31T",
  "key33": "4xhZ43EkpZHULP7bwPY479Ug1de9RBznYe4tRF6krVBexoU56RgZk6a4JPSKeqZQmvn53hbPRwcCDW9eApTzThTE",
  "key34": "djZAkQtegvYUTsLGxmD1Ri61gBNAzmRrVgeBDKx8upkRvUwBqSa7NqTfeSEZ6PkFsWkHhy37YihrBdnfyTvG45c",
  "key35": "27n8oNWRFhTEEe9nHFcpcTfjPgC7E2hYkKSaMejk4u1cb6jQPY6o74FujB5XAzYEBUGaMCuu4819bw8KwD7bk2bm",
  "key36": "5RpPSBB9oVcbLPN9hT4QbxnDpSPzaRMreKD1Qaxv1PMSXKmwNKYdH5AXtjEHSVfcmY4qCb7E21MrDaHSwRYi4V5g",
  "key37": "3LCdbay2ouoTWr4YEoQXtszUNnTSSJGdSzQeG7jvwMqK6qkqTc7oVn5L2ByKx3FtEpHaLV1VvVixFQrmhjgLQ7MB",
  "key38": "5nmRQfWT5PHpfJMiqqvpTS1qLSFAGpjxtU7zcZM7Jzowc3Tkvh6rhou99zZT8AE35ttGmdar9fsQFgGBQuUFa4xb",
  "key39": "5cWQhk6MF8m5e9rcfffkmXYipTWj2hcTTLpUA1hLVMReBExECiL2WNN3SQsBjGvD8VcPMS769BB7xCf33Q3BaX8C",
  "key40": "QWFm46A57aiKjHXdrdRm6DGGFUZ3zqLMDGfNWbz2vvwwx8s8U7sCCpLqTMj9qoYnMQPtnSTogTqqvg69h77Mk4t",
  "key41": "4xRWXkDXeMRFG9bWtC9qjAV4KgeWDN3gTnFvdReqwjfGTiP1JJAB4UhA61HmDL5qs6cnVYf5DA6c2cjp9G9b3gG6",
  "key42": "5Tir9YdGYw1HDvHVSStkZE6XgPF8NraCXWVNoj56cG4obgiuy2m8eBM1ifNhGY3t8otpTMgpFy2MBsUXadKRFZUG",
  "key43": "3Dyike75WvhGb1CCm5XzW7XyQQ9p8sqnAL6bJa1MiGBxa9ruF16G1bkRps8rrU8g8mpRz3sh5TkrNYg3BArw9sjE"
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
