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
    "3dfYCXY9MAA7XobRhjksRzeYFFxwqkWwbhBQojMRB13aNU6fbADaP7MP28vQLFqpq8zr8k1PMDv3RpVo3Az2WgSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ARYoE3siQSaRKqTbRUc8wQR38KwxBQihTVmJVuzJuaT3Q2V6smeLMh9XMAEakBz5GJyrphkq2z5hNmeQYh4S953",
  "key1": "5GJG59f4vkzLRZAvmFzEyb4tTj798UTWVmm2yWELb939yujTjK2Ukfgt98UgiDnU2RM81zBoKRWZm3a3B198dBXE",
  "key2": "2VhhYkXB8BnoAmypmDaDe6oDqfg1Q72r8DGo33XCiqqvGcjL6TxCW44fK7azzWYJNvM7R5n49aCWdNnt3fBqRuwR",
  "key3": "28jZbkdMwSvu9u2zAQK6ZidKBVpjGbW2u7MK3bi5Cvusn2mYuL9rwLRfR1j2wxk8NJ8usarrLhhj3NFsqb3roKdp",
  "key4": "2vmHgKfJ6cf5RxBQst9bG4RN5LzwSP5sMNbbJ5cK2ttz2sKJUrfko57qzJiKubkfc5wZy4QnUsGQwJa21PERgaZX",
  "key5": "sA6RgFNJMGPjdS3s8QoJXXoSNQAYNKTjgR8gwfHJaibRbS4XdrmscN9LAkLvZBPyiTMmPVH1ogA7NrvMpB4jhUM",
  "key6": "55fPvy3y6LrhDuUNiRhr6hW83rdYvsNLFAYSMfdpdoTRJYKvt6NscrZmqqDyRitDjNiThT9wyBNhnWz6Cp4ZX9Kr",
  "key7": "38bps4ZbyMRNi2YcM6D425odo5Y2AjJDS1AnizEWKJTgxUnzJTdY3QpU1ujSswuF2ff12gz6KG9Vq3DFa1h66jTc",
  "key8": "wZVRwRkJ5KLJ7cgTHi24MUtAb8LwfS3Y1QsGWWsuuwwYMrZAXZGyPvNJyiKAaMiZT59aa5bqU6vn38girP2D1Vb",
  "key9": "3NkkqZzVJfPotW3r8VRewM5Gt5JakDj2h4vEmyWiu8vxD1MVqgh9QEoVpa8qMVJaySTYMgefooEkMjmhHRMFkukk",
  "key10": "5ZQbq7hWrFKH9H8APXkDsGb96CUcfwZ3pyUjHk1F3aMZD23P1f2arUDum1ae8iAjEkERMoJ7PsDD11JnLNT8aqLf",
  "key11": "5R9nz4pVh7d7U4siw1PK3W9d2Lw5M2wXAC6Nu5mihLx6Bp942ujrPRFMaknnvGpFyYz6qMnRASd5eoa5gACCj5CG",
  "key12": "tj7yw8ZcexMLLm4K1qqLHu5WHHDAKqqj6GWq2JQghQAAzSRDJ22QuVTSUkRp4DUSrH3FJbGEm3Zo1QL9S3Tn7dQ",
  "key13": "qzrv7wRnwShn1aEqDJFACrvVtPnqpF3ipJiTp3nwXqVgHhyMZN58GhKjP5gMzT9PBEwqNfkDmVEH2GDTRQapLsA",
  "key14": "2QK6UkWSWofUjFoaGYz49kDy8xMZmhXncfceNwcCwrgtitkPGCzvwWunQ7J34Z1nSXREKnJi6vuvmtyvSv61bWKW",
  "key15": "x84wK5a5A3BSwrYkyrcf9q5zLcQFn7Y6jXqeM8S5kap9oRBaVyDbgujhCEJxP6CMzDxdgJVf8AuqQLvThAdUbqh",
  "key16": "3tPbY64CGHvU4S9HgXauKJVnU8XaiUdfQh41XUUcc4B9hDaxB3tVTiwKRmD5VDEkBLh4iGJhiuwwfApcYAJPzyJL",
  "key17": "5yzivmqc6VnQkFwtzXz8MUWMorsib2U572iWkq5FRjf8mnzeyLA9h5RtNfUaaRRvxmaAhD3riLKvuP2BTXdxd6ei",
  "key18": "5Pt3UeXNog3HHTgCZJTY4hvQ3EnQLPTiHq2sVWP2zE1izQAr83fs2d17Nxhuiv8eRvwES9B4E8kExC5EMsUyHBo1",
  "key19": "2Ax5fBYk3xT2WCg4i1SxEFRNe4kDfqesKvZMmLDHjcvndsL8Htk99RsgnYwk2XsRKrQYfbfniHQMuXZpekaeJr9S",
  "key20": "3wkjoFZEkeLYaZxU1P4UHDbWYSErwhzx5ds9NVCAuvv5MtewnFMo8ggmiJTTARqE1Q6LgXR8JEk6Sjp4tqdZz2gH",
  "key21": "26EDvYDpECkTvL3TXHNDvdP1m2fzCVEnDC9bavmETJY9fgBxucm3kMnn19tfGNrTZYEMuWGLdYG8MEEAxuEAHfr6",
  "key22": "38rtWALXdFbP2SnY3bigtZqdhTwcUHsJddNm9MaHXBfa8Ffabocxuj8jDgr3CX9N6ousmBzxNYi4m3YaSgvQUx3A",
  "key23": "3Z4AiNCKnJznhQG2mJXCnGMsxGLCttLVjLPcQYy6jJ91jniRzU25tExytRdsWtYgP8qCawMD6a3TTzhSjoULY2eV",
  "key24": "3Kp7MnLQAGbHLtDGN95BSqaRnWMPM8YLVeTacjSXdt4pmWx4vkyS9g8ngUMs296ZcaBCT9dYKUciaYqN2jEorFXe",
  "key25": "Vv97nBXYo8235mu4B74CMkNF4FaFuJJmxpZAiZX6ix7cQPEeygbdKm5AQyZ4tiEqpuwii7YN6CUbejrVVpW6P6U",
  "key26": "4C9KoQLbGyVnCMB22qFzLJbjC1MkwmAmhYjymKmDRvFvSPaNGHE9MFChvwXrL1UcbGWWPAGLqV6XCyXJQohqhRHs",
  "key27": "2u9m4yxWwEWnHMPWadStzLxh6Lrj9NGPDF3V5U8wjQizseWJMgo8bcYMvtB1wuVPMsseQn13mvWstoyAYdDKGaTL",
  "key28": "3vsmoNwLKFLS51fPpLcRkqr7zd6Jsyyv6wgepm5tB2DUpnh2NUQwqsLzdg1LJkv9K8rr2VKejMGSaK9KDbDmx2x3",
  "key29": "2nqTjX4ixpyBhQax1VtCNuzdigoeNHbBhHSamkrruy3hLTx2fQ6MBZvqrrhuekpEBSz6XWjUzzrCW6hmtXD5eRjp",
  "key30": "Y5cMfbzgZZbmRFpg2xwAMdDgZN22qroZGiebybChbVuDSMbhKxZGDuphLtmNqvTKr7AnJj6ksmZC5jnFGJ9uoMK",
  "key31": "We14JAjbFVQhKiP7au12xnk23epsGofCbiSfVuKMCT6tbKM7u9i4cCJudPdhGQfku6K6wf8mHj6MHd9MSM2qoDK",
  "key32": "4aWgXyR6h8mjbn85oEpt1ip4qtq8sF2eBeL6ZNgHyJ3DXxJeeuPD7YCefFXHGLvQs2677i4pHeWd9PKrW9fXgHpQ",
  "key33": "E2Gsr5BfKazqkzU6S8AfvKWYiJWekgaE5DRscwHU7u8Dm7vji5wRKCE86Kx7Xs6McZu2nuxGgPtgtQtw6zSeuJz",
  "key34": "5beb7r8XcSZMqFPq1sGVqsESZcXjnmMniNmk7vEKAS4TR5T2UprZXUCRQgrnjd99ctYj2AW3ysC2LC2QTvywYsUY",
  "key35": "5QJhRW7panUnMAk9r6brn4s3Rrg3XXeRZFm18JE5vPJdxm35M1Jwja5TGbybwXAAjcEFerwb99Mg2P6REJxM42H5",
  "key36": "4tMiMf13gcotPiaKyBupF9ktaeY5GEQ7NxkcvmJMvWWUT4KirWcHu7oUugKRosQXHpoUkGDCrnirRKqZbG2hvPds",
  "key37": "2mmLjziRX47zhpDpC3m7Yp7SxHpYPszqBWkKHmXo9qQDo7ey343PPymUWHWJbV5mLXtcKuP725ffhEtNcqqFXrBT",
  "key38": "4twb19bYvEBjYi6A5j4gkoZM6HZbCQNcye2eZFPccWX8sxUfSrdXfP5a54XfLcFRBD8CXNkBgQusQVYT27obCUpy",
  "key39": "4FgwN4cDX3p1zfirhNHAHdHVZkVpjhbgVgrRYYMnaPpU7hfoW8oAWHGBvAAVUYPoi9nE4qRjV6g8SiVinZ7o38UL"
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
