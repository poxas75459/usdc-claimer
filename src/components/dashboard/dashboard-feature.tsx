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
    "3oPRScuhuDx23hoU9bhCxjjxiW1Bfuww1nqLxi1ss1UeqJBn7YyjQDs4Fm3uRpVnkkaQ1TkgLX794LT2v828fFmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V3J9xnkFRZRaPkrAzK6npHb4YtzMceVFsn3rW4efMzKfsst9KLd92DcsF5UF7TifkdJbSbxFZxagKpTVBTjRPmi",
  "key1": "5FXUK3zmzHtEivodpbkhBEi7JrbTQFvDNA3nhSWzcKidSkDkUoY537TKWi8DWMq1LjUArMrMX5K3H9FMHVqBvw6h",
  "key2": "4YQPcDyoDi5gnrxDMC5yJkRp3M1FmB7UGm3eDqGm8ih9bmWPUfWrFvw9AxNxKQGWbprYPXHbWzffSRtrryVTR3y9",
  "key3": "3Nxcyu2G9jvm8wZCviWhfbrNdY3PnZfVZoXvEQccXcyEQietjv5tnEoLUwy1ZmsQgMEsjfnMqvBqjEunnssH6SmB",
  "key4": "3caFUPxC52QkP5vFhJXF1ZHFfAFeJeGnbYwsEucmuaWiLjforyCMVrmDaSDUB64L1nE9DLPi2HV3YMNNDcqdn7Ut",
  "key5": "ZzekSu6cnVfLNsRhGiGzrRkJVbcjphSewDvxKxWY5hzcewvKjjC1EgjYL9uJqXp31gpdG7DFdtZm6g39LS2FyMC",
  "key6": "21ViwbQCmXqbcFje8Cv2wXyzbgfAGdXRK49yZ8HcVbjpqRMpPZXAuXf14WsLeF7TbW2TNoyzNYwSq1shXR2dqr8D",
  "key7": "uWDoJkG6aLpThobAAssan6B2BHyeEgFJY6FupngkBzLhJptxq3ETNhDLpb9MSBLLyETy6GgZd6yadxBAxQdMQBR",
  "key8": "38hzpi9SEA6coScXSeSajwmngJwY69RcBJu3mcDqo1k6YPt3zrwmDrLDu49gcSu2ks676MGmm2sne4nF6dna5ju",
  "key9": "4a6Le2ocqkXDUqSZC877tLfuBFhyRKA8rJLyiqdStWftUjWxxDrFFeUK4zSc19YDJRjCVGP5XNuKmgMxubmoy4xQ",
  "key10": "512EYmNjefHkfGHj9FgRAC9erCoLxPyTDKkK2TpVqEoRgnoszpCvMfP5gCjY3ounsDbdtrSxY5R4e4gifBN6QfP9",
  "key11": "5vv37CzhzVfYfrJ8wLGA66xMtaxnGh1MFqrb2yRoTt2zJX2fjng5p2j97MLhEktA51axyMsRdmoTJxFwb1RNAqFg",
  "key12": "avFWSdnWEDGX5DSSMj8rZbA5crygLkB63CYgMBpg9vULf99KgnG9ivK7gx6FpaUC4SMLT61Ancw84pi1BPzfVMw",
  "key13": "2PPjHprzFChYyboszQK9rBbWZDURV6pr1cbaSK8R2rjPz2rTy6qt18nEbJmciAQjLM8sNSya2pFEvch3fcYRS1KM",
  "key14": "5MP5dTbMDDpxD5kmUr9wahVkDYu6TEjUM5XMSyikwimYrDHm7ZyosUHEbovY96LdzTTdpe4hS9i4BcgvsGj89UYN",
  "key15": "dUCCNbNig9ap5fHcSrM9Y4nauYtFsRq42k4QpeYRsEoTwno3VEEreJ6qW1PkdWSX1k2LqQTiSabnHTrDeryQiCR",
  "key16": "2THLzbJ6gC7re41R7XgS4oehf4mbBXNReZL2xonKVEzVq8je76oifhaeJ2dDyQD4fhoHotxkGFHkP4aksGYNXZwP",
  "key17": "4jRq2r9Es7ajcfdRLb2GPResB1E8P4oT4Ep9X6fzgWYSvAGTqR8aVwT3FP1St2ggy3SPy1bA2Kh3a4ic1Hup5z4h",
  "key18": "5MmS6mS6q1ptN5aZsqXZDf9mDyMRzdwCgDrq5ZuxTux85Ac3NTDRVDzBhUjpcPvjE6Pm53WKmMNyjsvajhbNZrAL",
  "key19": "8wXdP5tQQ4DxEbkNaNjXh3ntxE6sQfAFDtNiCwZYGm9nsX3QSyZdoC3vLi84MkxwzKgG2dcTVEMLBMmbPhXveTL",
  "key20": "4o1nRHdLMdgFTomZTiWwpLeVQo1Fi4tdDe2nLLnxKEwv18RYbVckNhrSqScabSq4SHMbNGEiNQPW339VqDSHqayc",
  "key21": "3KgJoMTopMm36QTKEkWXERKZ9CKctNBVPVrJn9HJdL35FFW9rkReRHhGsyDtSDZMnUQdT7LLAFU4JmPkwwRqqjvN",
  "key22": "2va54W3pNUyGXjPasASTL7WuRsBEuyQDRMQj65NQpZMYsf9aK84MKXgaHEc7vWMS6B8Jws5GQ56UE3PQc9RGb19y",
  "key23": "XBMRgb5vMHikstqmiGqW7pquobqwqMHwqRS46LNn7YyVDe5yVbEZoiaFpycAsxApQVmMGrm12iCzGKFJJRtppS7",
  "key24": "39hXruBdmuYYJoBj8xn5Kfqbrghei3ovAbN4nFVj1GWNUeze2yXbbGRyDuzsJz1jfbNM1NPC7AiyyiZjCb8AhdKn",
  "key25": "5kEKxMx5FRc8rv7bbohexKQQa55BmDvY1kPHssV8k5wx2jbm2UyqRJRd8BEBDYsnB2enimNy1F1g7nhjkst88p18",
  "key26": "5a7pHqskiBbMR8LR4mWXBKBbnqfxZikZ7jZJuv4ykCkSEGDqM88PDx3UT1amCvUYtPt5zE6PQfvANebPaJjzyCND",
  "key27": "22Keu3BJqrWbUyMg6Sr6pdRgFNw32bSj2e8GscvhVCGxTD88EfGKpwqnSPow4wR2JJbmv3eboD2yQ5eNLempq2uH",
  "key28": "4EawJf7iHHRGyC4WXMU76aUUyJUqefyFkUT8cyyhbAJ2w1R8JLsSUL2vgHhioGYQFbCseryzuf79ChgdBjUY3Gbg",
  "key29": "3wBAJYpMSsTyzZpTF5yb2MBBY5NknuX2RtiqW36JUF88vhTPpfw7YaFh7emxnaAoC6ZrS5ZtwsYXZC2xGM7ZQAkj",
  "key30": "FRUQHmBtGh7dorKBMxpUVg9YLUe2tGBEx7VwNCHoUQ4CDoUSWMTJCu6v587RvjdNU8sf48zKsZFfESEYUU47gD3",
  "key31": "eJAXZsTGXEzBunb8H5zXZcprXy7TCaBCXaYxRhfeup4cmXy7r4CXx12eb7epPaEm368Xkp8JRrdrxeNCbEJDEdT",
  "key32": "5aQ3SkmvkzqUw34mES2fA9tKoEraoXHY8enY3DMf7caQV9n1Wd6y5mgVr9eVqTN2kPeJy11fuMozGckE3QikwGVs",
  "key33": "53TnDyqijnGVzoYeDku5C28qu4HYQRDW7Z9CHznifBok5mJUsKtSFj5KvBs2Kf96jRbfBgTipnhX2qsVBYYv7UkU",
  "key34": "5P8LS5Tuo5b9mtoGBxqqLeA3ptvazYDYWnEViFBzBkAKQYD1Kevqt3YHSmQicxWAA6vQ2TNuphZXRVHuzGBoynN3",
  "key35": "tfBgDB56zQ685pX46h8KyqqoXq9cKG9P3iZftWjfczQu7VmSSAt6KPJ7gY7ystwowuiU9gon9iXJ4DsmBQCRvNz",
  "key36": "661FBAH4dvQ92TrAmcZ7pxdPvJfyvcsCrZvg7oyUNHayThsoULCFjXkXU4tEZBA4jwH32xSEPSTpk1Ur5QSXSX5G",
  "key37": "N4HqgTY4DoK5h9DEvcpcFTB1CCZTQUs1m5tx1QeMSHKDsZDnTEPcb5Fq6TAPkXp3um5BNgJGp3xi8j4U1tqYSH7",
  "key38": "sr4pF9NQPEYvLnN4N9kLDuGXFyDgr7dtesbDhVxdNAKsAVD8QEKrmZGCZNAPuxWU2tfDWyeLPNYksuYBfvy2oKS",
  "key39": "chEuVWzpJfesU3wZK8MDFh5jvqekTVtzVuC9Ns3zUkU9GzWAdGiaASrYyk1p4nv5i4q68yqoKYrySY78mcCwqDG",
  "key40": "4KtQMF27tBs6KgtdUCWYxRJ2MvtxSvyB5iunaonMhnCTSxjXDwMAvdY6opT26TjwtHf64Xfb5so6DCJUp9161MT2"
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
