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
    "3icinZW1effbSrfCFWxgAPP3x59qcqWuaLgK6CARwE6VxRY2xaxFCCMRqRPpetx9x6Ap5Nn7fF6njHuqkQo7sFDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bqZFK6HQM4fgQchcPkrapiQLu6taoPeJBYFZACsJqpJxSsnYGepanobK1DqLV3u1PsxSbmzWNSAbC9QAGwpLAEx",
  "key1": "M5TMofNaqyJ5YxMvDtt4wFzfFghPkcjY7ADcM9Dm3a4uvDNgtby8xYPAJFejkZFX9XuSz3QuAeD42ryXxD4uVGz",
  "key2": "J9Jc2iuGiLf8VjghN6gbXAyzgUEB2jhLuQGry5huY9be5AyqEUpbxfGHxeXifmnru3XSKwrLQYiun99ujiWAJTC",
  "key3": "5Fwz3JP9x2wn8zpH7ca1j8EU4cDmTTgZvVDs6Ea39mSm9GZBaTyh5UtAC5dtUNVFpCxKJYHBzV9t7g2k7EZqp4Ma",
  "key4": "3FeAqQ3YZgz6gSRJvSesoGSMWnaDmojvKKenMquJSviCXm7yNPVFSQEcZaaGz4MGYM3pXkqNypcfSsfD6cBTgVke",
  "key5": "4vGMjEQkiKodqgn919hZmsxQ5vV2cZsFH9pcZHQLoA7N8JUWig4rVMbzVMWiEavNba2BG35ku8CcYRcWA7wL3h1G",
  "key6": "3LHycuiGuf3DyFPrrrq9FQZfPSttZPbW6XZ8egH2cfs7mrT1eShnRGbTqqp2sbNVNWdZwRKzzEM3ocD75AyW21F2",
  "key7": "sNS9e8PKu5izZR2BignMVcsLsrGEc1di1ky7uuYCuSrzcAkPuWKnVpE4UjctPjVeXa9RzY2n9y63eLqgQjDsHMp",
  "key8": "4J6ME5KeGhdWi9qPZ3S1eE4PprBe3zF3PxN9RDLGcZ7jMaPQAUt8EwJG6D73bx9Pss3BP76irgk1syHz4EgZXw4i",
  "key9": "5wfoKMEXjxGrPdFVNvzk9cjdr4EncNbmHuxTh27tv64DPeuNgEGXEiQQHzemhV4MZhA2mRNNLNqo3ac4Gy1QLkWn",
  "key10": "2Drj2iHYU334AW8SXgQkS9u7wcPqHard8K7fo2RJ3u3NjXjt5SCVXD8scPmv6gpowpMKPbbha3CuRkJrEsEH4cgJ",
  "key11": "3ADaTrmNKeLpeM7QHY4xkkTiVnite3CrP475ychZKzRaWJBnfTLCiD5q1KJNxsVnTGRgCndaKBDabDEpceiXGC79",
  "key12": "4XbED8FFBbGF3Z8vSRiTHqTH1mey3eyJiUX8FgxkwQRPjAyufgGiAT3ev7mVD7YjPwQKhorbT81YSJqe9BuhnYDV",
  "key13": "5pa5vKRR2uurm3WSW5y2txnG3iGxxoHRJxfwyPwpG51xj5xnmA4sW4V9xePcap9PJwVvb6JSFjJgh4GXPiKWQWC4",
  "key14": "4gcgWUdbscEKYvXPWY4wkjQjLe7iFAgvywf4o72WfrT498jLatgKsBM8gojZJ88VcB8QmT95hNYMWS91vKPdSDUm",
  "key15": "4VPoGPpiyBxy6NoDFvvCN7jpDsGWLD8ieNetkaNYntJC9vxKedyJfUGzJ3qNLBPwmXgQgBA4R25V2byVtqvxRYPJ",
  "key16": "4K3wttrhk1T3FwEiYuj9yunXpGKux2HL298evdsPUBjGp8CeB52sngga4Qp5hof1knKhfE8McvLCPMdqWRkJtyb3",
  "key17": "3wZsJh6wmzKDp33c5Kr5Ws2FFJCfGGJE3NhWnoyr3aA5TjWPqAwFSYsrMYJr1BD5sGfe7h58UvdtRemENyB8TJEg",
  "key18": "67GVeDJEsX3dVVoGJb894kEUYDx27KpjHXeKNEpPpZsWKfaupg9hYdfHLmSjb9TmS1Dv4u3u8tyY2oyPa9t3UXHL",
  "key19": "4dSgWU68ZHRc3ryDxUiSpvephyyxECeuaa4VABLT4xBbF9Mk2KeBPeu63VcUdw3CzUmxAY681L967pKNhe5UeTEp",
  "key20": "5NuUNDAZkYtemtgcmhGBSEbwMig7T7v3ehNnGmWYivTc6aCxVJXbctYQPPaKJGWVmCF4huaf8bf5HnCTsEQKQiTf",
  "key21": "3UEonGKEqAzZ6fR3LxSwbXVpGx8dS99KMSFLUNBSHQNs2A8JruzwDvVuzhBSUyWGVAHDkBSRpaFZcMHQV5uzPW3i",
  "key22": "3Ey7bLYMVu8iSKYc1JFhTC3wfSAsjyk7M57RfS44eu1V91FvUAz7qSRJWvkL926RP1maiA4gsD2mKpuSg9giPBG3",
  "key23": "3vLmns6B1dUnj9deQmPYDwxgemSLfDpdRM3Mf6K4fsSgtCExGiJdrvs9z9vENFFNvP8vZt36zfF5J52NonDRxLtm",
  "key24": "2sfGaduYyb7A5oTAvEJNEbiewqaGTR9BuuEVvyaZ17TutbTVaMvnY4TGZ4iXofudGXPUcPyGeDqJPnzCKxrc4GgR",
  "key25": "2TopLTJaYXmy8LQ8HdUrVi22xNBE37ZtM8akzWcPgztXXpk7fHzXPSEXWQcbEfsPyvvufCXdYZ1emXS5FqVQWboW",
  "key26": "2QcvzUE6ws1mZ4LiJCXYtXjsbGaodyAhHQrpUHLTrB4LYtLYv2ZJYVmsbzYzw4WFEsjQGqvS3GsLyNNZSmYeozwN",
  "key27": "2g7WkrgiGLuohWykMGUgPxNNj7eAPLqzmttUv3USEf5onA6xfmKtNJGmxezSFgWkRwG9ZFfEG1DyuQR1Eo9pgoPY",
  "key28": "211vvTniLyVGhtmAKdM9pzV7sYeUtF23bpR51AJHqZiUC79i6gqweYkkzxdtRn7c4GEm2SM93cSs4X4DvbAea1KQ",
  "key29": "251RiwbyhqAij3GgcoCivLCn8cf1kDec6Qn5sxm64s4zvG3pQd7rSM2XEZwdGKFUetrKmRrMsvVeBvQ4J6xJsXCw",
  "key30": "4xnfpEcL8KFagU88oLsu8TkKkgsvQz5BRE8br6UP4d1SyxFYnbmBpK8RiD6tDwTAo8gdAtpjXyKQ8x11qDXzp4Nh",
  "key31": "5DoSKTGGvuPhfwB6kPkZbnAmnQx9CbbPgfzAB7NhCR8i1YaU9KwTCd849Xk7pgTauo2qikLqDJ9tvoABz7gUwMAd",
  "key32": "53ndBf4hCharuHxpexWtfTeNHtDSx9gLmcLJzkPTSyjG6eX7g9omjMP8DKjxbBCkebrAKZXn2MbvuJL9BgWJJ3zt",
  "key33": "2RaCc4RuHFbGJQfaof3foLK7EFsEeXDzg5BLouexSqFRUqxg14e8gTmKJ8zkutgW2novS6m2abRooPrHMbMeFUPg",
  "key34": "5xsXZrkXe1v4D35EcBBqQ6KLCRZL1ZBpEdenqjFhH2dDN9DTiqtTg4fmeJFFsDP6MJSXLLvgMXALbvqmqznQu61x",
  "key35": "5pRFLnFaPL6cVSCyXoxygGcgYhFshV9F2ZrNsJQ8RCvNuB8iuhodkzMzCySYpysu9dsm7vDWR6REW3n8JKFuaQgk",
  "key36": "4Lc1mxhv7FVNxDniQ1uSBoxd3bE8mpWtxpkC4erUmJCyG26nER54YRawBKQ9aPmXyVQL2u5z15JCjwMc8CNTPUbx",
  "key37": "5C9dDVxqRJqTTmVpAJgoDxyRfn76129nWEyqSwGpCaPrFeyVhW3LzHPGoMq1xJcbvrsC7UrESp4hzgNU2ohsxmRy"
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
