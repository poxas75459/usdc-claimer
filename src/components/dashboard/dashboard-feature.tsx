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
    "4kmmP92spQAWagQ7kEniF84rNyBoAnAtHHLKBA4MihLZkpXhjKcVCHPRxetU1STZxDCkp2a6qnPr5HYvaiGLGa3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8PSaJTbRBE8bYUdBdjy2NCsjrm4hM9zVpDvBZaMEyJYdZFCPLyDhwgQXH794HoqegXLNBe9aByYAX91gEVFAHW9",
  "key1": "2s3thn4rKmVL2KYfMHpvrSwvzaHB8NZkKcm2GJdmBTqpEfAXBPx5cubnTTYYvuWCpCJ1gpuq7obhsWfLPJz2QAnr",
  "key2": "3NBzCQvYvcWmmfGn6ndxUhQJmkveHtW2Qb7dEDEWADTDNkVFmq16sG3D5wR4pLZwhPTBc6wmpiX615xFvmMB88wv",
  "key3": "63vjxa13Rh32UjqsUJEgfLCnRPeNKPfNoUFSJotFcd119LiatVS9Wozx1fwnjiT62hkCFMrdCgjGqmzou1Myn5pJ",
  "key4": "2L8GEsfKCs868Jgo4YheuEFBormT1aSGmtobz6Dj7GEepNSGHbWHvnaHpYSaMLA2yYtgHimhvgnnMgwVcss6wrQH",
  "key5": "wWgrq58YA8whfg5iWjNxfzrJcW5ytD5f8NekpfEaT2hcUDEn1psSZENPJjTdb855K4piKUbYwyXS9i5Cru17kTF",
  "key6": "4zXswPuN8hPLzDSdLsnkLX8e7A3WUcu96nFtZXcSPDQLYng1ZjXonjQwVEq8e7RVL88cyqYBocWFWdxjGcgShuVx",
  "key7": "5hpdydYDcqh3yJV46REaPWCwXFRso5XMxA1B7NzU6P6KWVSxZKeu45mVAHncZeuuVrGSXsfx3rxpXS258dcKt59w",
  "key8": "5y5q8NiDZhu2kQUZWvmvGAnir9E7RBeDBWXxeLEWZHPj1r8cwvaynNtWj23qk92egxMuht5KCukL5uFKY92MXS91",
  "key9": "2U9L1C1QZEUDehSfmWxFm5P48Hn7RAkBGsfX7HTM3wLFXSyJRKfvzsHYt4yptF1M2sJF929oxL9XyR3oc5vSTmMR",
  "key10": "36thnwhgDx8FB52ctkt3JmpjvcoDVayzTXrRvpwZ2k5qhxJWnCAt6qbLZnSapkrVgGivoBtp4Q26qGWb8kp9WzJM",
  "key11": "3YesqbDZNu6ff5P3DoUsSvqsPmM7CvNd4sN7AASkSsME28A7JyhuBU4qB3uXTTrPWCdXseF6fCmQvQcnyHFknDS8",
  "key12": "3zyh8ZazYZxQSrNaT3jA7k6TAfTxasr1tJespWRMdZvnYgvS7E6jCwFb6x2rkHvp2hYBpf1metn32imdCx5ZeVDK",
  "key13": "rG8ejcSpG8iw2GV7DUxEb471PjNQKATjAP2a6WkgnyrpDMXWzFA96YvZVgrvdhx3YBxmLaEt6y1ca2gCNe1mZaj",
  "key14": "5xkyNVYvbXQchwSWCLPtzVT8kpJw9yoGf7WGK8jrfjtKjifYYYnex33fugYLCZibYUopBVQ3nF1iCDys63BS1UsE",
  "key15": "36Fn3mVEzJ34EPUvHdDaC7UjZcg1XtBAwATNHDvwMPxcRk3UpdcENuGmRd7MvmMy1HwNkvQig5PH6ysLN4eckfov",
  "key16": "2hd4iNU495VA9LKSJUU3Hjuv1hWsLZod2YTDG3A845tLKH5yhYjdB3agDL6j2X3E2DXuHbEm582svGznFciQLoyT",
  "key17": "2B5vKWVYYnFdw3WuqwaDPwy1JKYGKqrTmDoFoWnyPz3nsfJieY1a1fS1zVigW4t3b4CT88o25fkJux1TRkqnX6nb",
  "key18": "3MVB8D4Z6S9vkeeX8pm6jRmymxuSBC1SUfNmWQsp5aizpUW8z6pG2Gyusj6VcTE2NmVAqbSJgMVaDRGq7t8jB94d",
  "key19": "2Pu4ZqU7tQDkm8J9qx8ZQwnwccjNnTY9wvEBD4BjpGCobFLLswHZZ16kRR9aop3rDc5y6SzAVZi6RRbqS4CABrz",
  "key20": "4iwyJAuQCKCvqvdPonpJWddWPCEAPwcaE5e76XVAagM1mBqqY5qm2uZGQgAVmGasSSsBqks5aUGPEW8MsBQHvrKW",
  "key21": "QtYHo2Hf8taEoL5DnEbN1eHeBwJWUcCREACbq7h62qb269LRsLnrJVQRyVhXXSCbaKyxkNC7aKJgiETxRF44FZm",
  "key22": "2EqNS6TD7gZSAAkRj46eaoGgsRF8s9iRQcfg6hzxBSsywGEd1pXgPRjVkCM8pMFsUcuCgi5BXxp7cFAP6xrn8avZ",
  "key23": "3bBuwoPnqRSCLbCxHFds33DEdg1UTFg3W8XkkgsWhUY57YKVADXJQCoAvstJrmKt2XWt1QsFRKo6kTpsjUYB19gF",
  "key24": "d8ZRS9ZeB6cZ1JBJUbKiUDyff8ZYrhzw3nndDs7pdSiQmH5tW2DGqkiPsQxrWuY2iXgKfirF9bPrwjYg9gfHwyZ",
  "key25": "5FNU1GZ7c1AcXENgxkzLWts3er6zG2YfYhSe2xcccmpGhgQEpqGwr3ufV93PfRn4DuYfQLH6Up3bXM8dEJ836mq5",
  "key26": "JSBmYiTxsSaaMqooHTmgwQ7BTHf8PuBDK5mxgwHusEDH6i5ESk44Edn3oj1W9gopjexgHH5iCPK75HpFMU5Xd7S",
  "key27": "V1y4nyVDuJbwXUUBqPVaexuhJxPBMufdvW9Jv9KtFqMXPPKre4yLwDp6NTBSgSk1YkYR9tU96dnLpMcYduKN7uX",
  "key28": "4kCuf6scgL2fMREFEiTWJCtdrKgrwiETK1AjRMihC3hCkapCLMqQusy14yswJvrzVhGKUGbNas3kWpX8kTJh44rc",
  "key29": "2QwadXd3HrCj24oaM8otThVdRno93KyNMTWxJtHVtStGEpFLiJoirGTfFGQ1c8yBdi89WsGbcWVxzf7V7cR52Pru",
  "key30": "3dRgcwFtLatHXneD5dQgb1rKH9twshZ9JbePEHAFCtqQ1HPt2tMMGb7KbHwNUUMQo3UMWLJsHpZRENAFBgDtDE9U",
  "key31": "4ajbJksut4qH2etJzRdNg9nzAXZRiCPLFWPa6cEBKieP7qtpKUU12ESJhXSdytntGjBjXtmQ8oTrxcwHPKAqnNQZ",
  "key32": "55XRSCUPjXMtVa8SZxMizBDohiv3oPDqRV9ERr9GCL5G8BHKSvTKn3KNJ1JztMgepm1wtxahgf1g2jDu5mEhEMdC",
  "key33": "4DTyyFEvWx26jD9JfxUYV46KrKHzRskYZEgDWYu7BC2BjWMEwSigyb2ogggfWrRC5EZvDfyKGqDSPtUbDy7yc2Qn",
  "key34": "woha6YGFFYW9Gur564ytPC9ZJdmMKmMiEN7Lih1ha2VcwzurF9LQUAdeNtNT7X9ft7ScVHGJmTbNhb31ndPYU4U",
  "key35": "U4DwtvtosXkKRxjcYaJiQnc5hsGjLhAE9De5WeWsz8Uum4db2wmTgTTSqLE4GPMGWtGkiT6m4AiK4fpqha5EzDb",
  "key36": "2mXWHN3kGfW5gVJZXEwZSGrY9qJDG6XS54unRUeWSJg1Kjev4JQGANWnkGEzYm6QnTBUN2EyJb6rtPymYNSgm5Wc"
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
