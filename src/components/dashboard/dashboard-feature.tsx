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
    "3uXmiajedY4W1Sjv1WPj1fu2bFcboJYb5PU5BBPbjCMXg7qDvcGQH2JDbeKLcdt4fhQqJXxUPNSxWmmcfNKNVWpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x2tUAg9JbLBRWyFjJEcEfrtWQoXNvPYPnTpmjV1nEE5g32oyu64AS8iXiMbwJwSGVjCptDwzctuJFRTH56SK5GC",
  "key1": "5QbaQsZktCTXHMLjYQd171X4WUM2ZXF4WD5LrCtmxLfcKG7ft39NjZAFAhSwjDWNiWQbdnwBhSpcuZFkwUUDoyK7",
  "key2": "2GA8RDnQzSwg3NKhzL45eGEh4hPj57RjRJbr7PA2Wu4CxxyBi1E38HmnPJ8rJ7z8tb1FkLfidWoHzkWqKYb1pkGc",
  "key3": "2rGUUtbNP1JrmBBxuBHjoHQBLVD55naVajqZeuP4gKCQz61d2SDEyq99SFW6M2YGQBNmvX5UA4dJ4oBpXy8c3L52",
  "key4": "672oUk8a9w74rFs7RbHDofbHskfXPU2WaWkYdHWHL1L1rCGzogVbFAeMMHNG6fxF5KMRQSqEYx1BCEqY2ynuqvi",
  "key5": "53E1NtGpp6KRDvcG62qpuSVL8TZno88WsDCgazgQLjVBkAwMgAJWskn2nmLsRJSTgJtUGtFFjUv7b593pHJ8ASmw",
  "key6": "3PxtQnDbneExhxD9abX8KWKc24USrkhDTVa7zXU7kcUAAMVu5ykXXpLJRWMsU1Gy8Aq3VMxLjKuYtCBBW1UNhGgX",
  "key7": "2TWTGVg5GCDSfTcipbrCrggcgFKCPBhZLCvA5GYBfBKmVSyFUuFgh6s9UFN4Vexo6kMML7WRiNuwEjKsztQMEuLw",
  "key8": "3hb3o78ogeeiFyKYPZjPT7Kp1KeFWUSouQfKWx62PjK9kmRmFmynYZJ81Et2tDVvD6ExCyEQoqAG9oh5JhitywQM",
  "key9": "5JPmSLXeAjF2VXEDRJrKjFx31eTB2s2KwbJjj8a1FECSsRYfo9suyZP4LBjpLxgGuvJDWTjtzHJcrdfxN6vBuNuc",
  "key10": "4Joov1x1u2KDQxtM4qAuUCWS4BWH9APf7gEW4b1jAppRJUy3bP3nN8ZovQt5NqxKYs1W3v5CJPLUzQYbML1MAUUS",
  "key11": "4jF6QMvjZqcLntU4rspv5FdejVsidDwdUPmZm3BsLzP2dcB6KT7gBA9EmLy4fXs2bPYk7MYr3EEX8RtHAHr73TS1",
  "key12": "33x1uH3eogouYrrjAy2UivuTHUDUiJHzES8x1qdKY8Q2LWSmRdvZ6Tp6Wd8VSiQ2ogowgbU8yVL6YCfEJCU5FBAo",
  "key13": "3g38TZQzLg9Yh16D14Bdc9cCNowSiWurYQdRSHegM6U9HpChwC9fzPSf2LrNhK3GKPadpWP9gQWNyj6Xm46JHq1y",
  "key14": "2yZw48JufUKtEWxuCkTTqqnbsZmgMxZ1a591C8N2G9XpN9k4mGwiL6EuMomXGaqoosPKaUWz8gTVVRBsSiKX12r1",
  "key15": "2FXtruZ6ah2zbrWBAfLTdJ1cbGnUVRbcxvksezCVxfeAuc2FCbFNi6wrbvQos8WbqHNiRc3f8ud6Bsc1trAWAevX",
  "key16": "3XN1FnWene9W1UqSyFuzrPaiuDzcc21KBH4URzAmrArjG9VALTmsVerq3dp79M8xPp8okwrBb7yoNMDNNYJdNEQx",
  "key17": "3g4qMHRNR3aDL3zXaktfn9ATNKgRJefKJXQbvakBWwLHgYAesTuxsbyExy2473qmWLiDtAki9QbSbmQscrniAuwM",
  "key18": "2iTo6WvHKTcsKpez9wVz94Pq9Ny89i791QDqp6ZrCAney7i3kq3auKru642aWAPWJQ1y55HJDALVGigLSSJF7eWo",
  "key19": "2AYmAaiXgXjvZ87kL2CCqKhodYoa6tqnATKQ3p4rhohosjccJdH6ovkGujt3hGv4KP2w1ZQTbC4SiusJjSVv2QtK",
  "key20": "3V7HCxsJdNexYuShJrtrQSfP8k9MtaLayv4m5XaMRp27F6kSBfBrDcUxTAHUUXPqzWYJhCo9cAEWthfffochc98g",
  "key21": "58a9Wzx17Kv9ogJ1mYZfDGLcoZLpMfmTDGVCDfofYxgSMQPMgnRtUTnHPuZt4JfZnQnhnU8g6zoqnD5X55raSotw",
  "key22": "3HPep8RSLGGyBpm81sdTiu6zFJ5XNBUFgBcv5z8rizePcWhY3f54W1MzfQ37JgrzKSYokmHuY4CNFBpoJd5iHTqn",
  "key23": "4qpYrnras7rKH9PPAxqnovBKMJBHwtvFJypW8frqGptpfiAuwqSUwXwXycXcSevtRwaDGh7AkQ7kutDrH2Dx9FJg",
  "key24": "639596r2TaDRTEUtzyWwcYUN22aot1sCn5eBHLJ6WrkAsYv8QkovNFSu5vHwH78w3PQW4qSPCPyMhhvyQmMxekaD",
  "key25": "22ZPD3E5XNvn8WSqgAbZi6cSG3qdaH4praxKYLkjxz8Mb8kmioUxDydiwnTz8wddCUPHpR9nbfxELEsNyVLFTjip",
  "key26": "3y5jP6uyaJRGYYzHfEqtAAjh45WqT8dLXXRgaRPvWDUMhTjJhn8tv9wJ2cQKRS7ShKU8VnCmuQBSMVxkBTU2NMZb",
  "key27": "2uxnYexHJyrhWjSsWcYVGkCYrAmBom5ic3HBnJskQChbGcV5ziMhnZNiCHKuYo6mbwWRK1oMYthNk2bebuGQYosN",
  "key28": "io4ifeLvKhVbX3trnnUavRbLv31dVHRehv7BTUDERCVwcQxak8unE3jGtQz3wHMQmGUDmkMK3oJcJJwkL2pDNL9",
  "key29": "4VpeJBVS9ntsKZdzMvJTx2VfpBfAkTvmZkFeGiqM8Kj6vTBjpt6BRcz4k51ygAHg7bQ2uaiRHys9Qm8sTHkzBJhY",
  "key30": "62PwsuQ9yaGUFa6d8yW2ckNSzpXXAKYNpaxqdh8Z47wFPmmprdxZdwEfnpPxFAm682U5Z8Rdugs4b4ozhp1bxxrw",
  "key31": "2sAGJ94cRzKCBoTk5oqDvPK7G8DfZr6iTAbr8NpCrUYaeMch2wZq1N2ypjJmK6P3798CkUfHtde2AV6WhVRpWdob",
  "key32": "4Jh77j2UKWa2v1YxsuhAC1THx8QC2rf4Nexk1r4bFqw6XcqSHWL8DWr9ZFvF7dG7o2pVSHBPLZvtTNFJivCrvjYT",
  "key33": "64UZ9hNLmfQP7qEUeFaj39zfBtjLczmbmLKcazPQeCRecac8mcRTC9aPqZCnCmJUeGonVNfo3YUBrryp47aoKnca",
  "key34": "5n7rZ78zKxMDwnWyLDWJ12FhenQFTr5KGaT7hC2mCLDPAATy1zU1DWF2Z2azuk2Kf7tSKNJ457UAicyVEEmrCXZ4",
  "key35": "bUFviogvj99PQwnbiGjkEhsKUEmkcASbCgQTeEW7ZqGKwq4R62MVzgWMeMtPttFSDqnbkWdNbAai8acLUhTaY8s",
  "key36": "21ZdZXTDDpfLSpSnpCCM7gyKFq6zF8gFhL3XyKmB1uhLE1itWyVnVPFsMe9dGyZuaDTsk7dLqynx1rFfLRnTQ4mo",
  "key37": "5g1w5B7TZTqspUeh6TcFL5ky7MvED9ZMaffgzuVTtZqaGsEeAAyBAVijcgTkH2t2Whn4KxjYWvbsPbXjt6skfJg4",
  "key38": "XgyPFHV7SXLoRirD3S1dFVQfAA5dwBHRHAxm4jjNnsMMF7ggEGaEqyKGfGGww1UyvHXYK5Wt7jdvjfM4XwHeMDg",
  "key39": "4JtKqAi7UfAPhrUtrWFtt9gZwBEPApne359e4GQruxyJcJb9unWBzAZGq9JoZ8ZbPzGxePydXopPT87zvTwxEu2w",
  "key40": "48U1tTqodNdHYH3AfMouQcUHPWerCvD8Dx7jqwXotDdGEmWZug2zVLGtBJ6bWQAhvkvtj8eKPbgkoHbRweL5mzeR",
  "key41": "2fowQYEL8dvrqGLLYocCsGSk3DLshfqVCsQCfacig2LDVZ4ZFs1Xmyk6CX3e3eyFwpLUL3akqgwdysatsaqW34VP",
  "key42": "3abUpiUkeBZmKTDGfz1CYTMkBG2FVGmZ8pZxenHWaMrkZo8Dhu2ucPAeF2gaomV44AU4aYRvWLfjF991yEP1F8gH"
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
