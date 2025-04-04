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
    "pD9vZuxkVW8oAQvC35EQVJCCSy4u5N8T3xstP6daGfkom9HCKbgZq9scFF5M3siAsrLrhVbhmaaWdok8nnLe1Wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22yGaBETjQPpHVgxq5U7zPJefsA2Vg3q4K38ftrixH8itEwN9vpSZoSpEdcFes9YnmtMgFMGi94f5C4GmT85goAB",
  "key1": "5VvG2z9wnpZ6p4bEzMnkjdaWu3pt3S7hL6rBWHqsnPx4TUqr4gQrLtu9gc37qm19zfz9Uo1FgdzaxnDkn7Fuq457",
  "key2": "29tRyPcYAhWUgeKUSfF4WgqvNuHBWKYChDfCPjJM6bzK6qonTDpvusv3AD1g1AFsDyjtfEP2DjdEfWL9vwCp5qqa",
  "key3": "4NReEGpvUspipjjhoMf1tjVLQ5NeAAN9szjPBFUojZ7HFQ5itZyATfywSsYkxFTWBcC6ZGqxF4xxcn1hdjJHFJvs",
  "key4": "4ttbiJnp6g3W7sxs67ctWxMxYVLYTWQfGrKQbgtrgTk5XREf641cEHs6KMg9YqEBNg84GMZYnqVbCGLrAr3GTEHA",
  "key5": "5bBzzR8Bz2XLVyZDNJyRvdLrsUb2uGeyzfiCNX7Xm5S2LK8CjmdpmdZhd5QK5aWwNB2jXR6ZuCbrjTUuVuYsX87t",
  "key6": "5tTavaUjGMJWBeyNojNciVcbajFfLhnQgeNf7Q6sNYVNZ6wmeVU1vbiwLUqfG2QtMybzyzBTPFtpDPd6iGGSPkxs",
  "key7": "3d4ink1Ckqx1H2F7MAnrCzR14MTAUBcAyCZ5DbFWSq2o2MCWyGPtMfugdg2RtG2A7qen7wDCKrCZk8fzZhttXbv5",
  "key8": "42NyFuAf7LHtdTucLp8CfZwE7WziDdrn3atPfe3bXiXUnDP7BxeyKHpS3LLrGJsZczKc4X4T4mjUyuDyHF337Xu",
  "key9": "3hnth6qMxJ7phygG9usi9GHq5hQJynNcwP2GBWmM3AmseKT9hwcgmjowiPLvyYVUoBo5B1Na9fioEm6kceyXBimA",
  "key10": "4rMpP4DHz1UhuQwZ7BYVh4d9SS9MpPpLqoQPz5nXYV7NxqG1uwi5XDv21o9BuxdoqBZKWgvjqfBM7SWhmEksMcWe",
  "key11": "2SURsvnWzxkj8w2GdvKJKH4fT3qQ13yNT1yKC3USmW9gX8H56ootLEXM5HHmHxBN2P5PjJnHuBi9qY19PkkdJtEr",
  "key12": "57hT68LXLRVR3AfyeGZSC6ar5nDLuYFYuapNjEBgHnHcPy1gxjLbWbb3b7uiMeU7xoS1RuUqb3QCRiPhziiewWRV",
  "key13": "5YyPTHHZjtVFSnH2aavdBFYyyseBKciYVgZ4aNE5bud63fUDAFHemdGbKr2nts6QVqSXgJeGcowKHnntXnWaSXfF",
  "key14": "45V9q8Ex1NbEynY57DgpviemmBXzGuJswTHpxp83JsgZM7pQN7VBWdLN8P1Kbza9SXbzrcpxWVTebQ54E5rapMEu",
  "key15": "5cW86jT4VVpyekG6Mo5wVniEcsUSss1rWERym114YDW9SnoFDoJweWg87PE8APVXX8PrwCWog5H7YqaoDWMjU6PR",
  "key16": "3qx5kERdjxM1inTmopEWNiybtvzYsDMKPWQ6M5mQYrVDCdkXaBxaNUHLq84j8Zhrm2vQSBKjT4zycRRhsKuD4PYN",
  "key17": "5DQyfot5DijTWbtitwjW6ZkArfDWbXdprhPD6StBQrMy81EQApdeFnenfHZm4rQZYmjWeXsnEK7rDtvBuBMBjy3c",
  "key18": "63kcXcLpg9VK3iPWfDe9P79Ws3JY8mkb6qpHPD3eZHAdgWrV2KF6Fd7ChafzqvivGFxjx2ZfJcL4TcUxiBK4Ryqe",
  "key19": "54MdCdJFe5pSVwkLsgnLQHHL89RTveky5axtt7FJ4JHGcm6XY2QZguW9tyupstH5XS7bC3eGaYrTHsasf1tSmUZS",
  "key20": "3kNnb4WRMPD6qs3Kvx9uR1pjhYCRT8JgihccEUcZLM7QtZZyk2xefXmWhQJKAmegFpfgK1dW6SEFNfWS6qHKZAb5",
  "key21": "uEj8NtLPgV2Uikb8XsabHkhxiEEBS9aCGGaFPxWkF3GJUXBxxfo4mENktnCgsp5hCwmyfKMnC1rvaADzgfKDeWC",
  "key22": "4xAq91tB6Ae9qjowqyc8KXHMpwrgwc1uVcAMpvKtbom8TseWVfkYnj2q5KTdVjHSfvRs9F7L5aE23agTcYDgk8Ap",
  "key23": "32jPcpR34T4MApH8fn1RAvjj6qY85shM778RwuCiRPhayZMqg474G7yNudE3tEAVaPRSDoyXoCT9h3jAKpuqpbnn",
  "key24": "3BvrZos2thTdDQAGKWe9cYaRiMK6u2niHZjEzKmwVgzvrtaiMEgFFMZSDUHHHTYUHEroPXHSaXbG1cboPXHGds7V",
  "key25": "2AEBwspqDT3qugcZwmMVzBtKASCMKEpUQ3CM4pLXf8vxxZjh5BTkYYubxCQBpKpaduozzSdBFPdZzvAqMdWwBBVp",
  "key26": "5jWMU71EML7ZZmLYz3B1RsT8uBETgDExeku39FRhD6ovLvVPjiYtCdio495Vbji57qJQizWVch8b59DycuPxRYjq",
  "key27": "2hbjhDfYJ8nt4znbBSCxcgSRPV5tzGdPUxESPjZVrkuVUKhsAEsc9Tqwn5X9LXQGnsdawTaMeJEtQPA7FcQ86oj6",
  "key28": "2MtyCQtyiYawvchvKq6spKDFZRykuhcR243dAnk8m7qbYRGqqkp9EvkDJ4HSAWapBA2hGmAa93ha6kGXQVLXunGZ",
  "key29": "r22BgXt4ZJwsXmxSTvwLw5op24mtSjXxqxN9LGbHSxKFCJMBVHfQX5BrmNSkUt2WhiYaBfuKVNL89JuVCwY4MgX",
  "key30": "4635VQF8e8BPUuCJ2nX7vYS7t3rxaqxAxL6AURBtuAfgBxdGGoQdRwojXZRhkG77qCz6dR1PYk8S4H4XGJS71g35",
  "key31": "5ZiSF1kbPjZckBtmhoTC3uoVb7AJ5HoKd3CjaB7Ti2ZpALzyjXvhJq2HJo4Su9oMfAjSHYTAt25PV9by78SLQRYR",
  "key32": "uT3BtfCTT3xGKwFbJ336FmvWSR1KB4vuBQvCjmpZzaAuUK15bi6coRsSdUDnYKxtxz4ZBzpkDkbkoJDEKXMswax",
  "key33": "5Jh13Viyy3VP5ZFnuiVU8zTSXPKKQjJKNfSVtKUk3iqdSkmVZyW8CWhLsraEoyaTUSTW284dgpQDaggc82472z9J"
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
