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
    "39VQMcTwjT4vtPCqMBb6urwczcHke9vUzWzv3fiwrQtAtaFicETdhzsbqjdunNsBqCwPYJEaZMLvW9ipvBy8k6Ld"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TTkyBcjhf258s4FrT7iHMAWdw6U9BX3f9mqdf4LB4m4DYesx5rJN3JSYNXBPfRPgNCVo3eNNFVRbKVuwCPiDjGL",
  "key1": "4GVdJ8HHySRqtD1c1Aqd98Vu8PQaaj1r4Np3ixmQDmjHyHotVd7dFybFeJ9fKi96FiWVz8QzLnXw1t2CFm3Zo1Lt",
  "key2": "5xfqw6mKaZKZtkXb972ivZbuJVuCSSHMzmQoQA8JY7Bkio8SkM9E3nGH4sHMedLunaJW7WGQS5mxfEpZ2UB5p9og",
  "key3": "3cP2uBHap8Prb4X6zJKMES6FZQv8GcxHDs9KtuYPH5oD59XkzJknVaQnQSkn1cA1H1m9BGcnXnizRHAWSUno25gJ",
  "key4": "5mFH5abL88nBmHMdyCtmn7vPdLwtWvPFqb7nbonRUes6tSYJrWBEug7qijtemCoVG9mbDnk4yjX7opes57yn3hkY",
  "key5": "3xwBKBuwY5ocXUSYMD8oBooTEYyXmFLNCzA9M8pG4yfSdvwVqhYkFqJq7NY1BtWoXhNkeNvNpwGnVf4mraRfSLB3",
  "key6": "4RrUvSXNXpkxhtNGnNikLQ9qfnzaGUFbQSN79J6RW3TkAqAMxXboYvzHk9PsCqPTqd18Kr8V3EFxn9Vrc5UoG1J4",
  "key7": "3k2uybdftHirMy89dafSbC6M6Fq3151PgcS4UPBqoiEJYMTmJMDYKhkTn9rWeWhErF2DLh1kkmSmS5AymSDNFAPa",
  "key8": "351wVvGy4GJvsdCYjnzXKVpSCq9rsvM2VNtJ68MDqzscGc6aZTYRyKzoPAChihq2MHtwP9oXNM3mN7TvGQo8nqkJ",
  "key9": "4ssRgAxqTkuYMj9Nte2rTZJ7qovuw5humpqUdVyGtAfZgS6qUz7gJBojGeneYZ1cKgCBT4UrMj1kM1rJgDWXqhn9",
  "key10": "pX5XUrBiN92Cn3RDS9fyebFCMoFedA2dvTvEX8RMNeyRBhjZtYnPRLi8DdrMk9YitXNU34GJaRoybAtyNxX2T8m",
  "key11": "2SvFovRgEPcx9HG8anmwG7s1YAghz9gza2qy8ehqfDAXWjQJ8kXo5i311eJEY7ZByEZDkPSb2SQcwucM4QiK5E9h",
  "key12": "2Byzi1SssC2Vh181gJRYHPpdnpSHcSzpRUxckAFXegFdgrsYVGNUz8UEoCTgjhQXh6Sfw6MsKKTamaphGsSxxKvf",
  "key13": "5fKpMrN57tQLZCbxfFVsiLZb5LC2GdTHs9mCYFs2MfPJbXFgvWparvziymzr356QByoBsA2V61PLZ82sEcLPY9tn",
  "key14": "4qGwf4eijayWxmSPMYxab7nsGnjfCeEfnUUQ26Ew3EArkNNv2BjhLBSfA3FtjBvS6aFGVvT3emtWM2JDxjLRtuuu",
  "key15": "27RXKLAktdsYwQhgNHJFBXV2vQXtixmz1EqFKgaMakqdygukMKW1rgsXbGnjCFr8vpB1wHwcYU2SzZU5QVGhJdxw",
  "key16": "4C67uioxdvU1pLN1m14P9p91G1t1cAUJiq1uEo1RHxEtRwvjGfcLe3Z41mPzj8Dy1vPJ8z3L9t7a6EA9B2c91KLr",
  "key17": "vZ253RzuojXfnApqqzqo5ej4UBUMy8Z6aPqiZgZMn7bjNgdDTtP99jpoEYip71cdT5n4rwNjiA5sfdqyh2RcpVM",
  "key18": "xm5thtiYc7rMkSUZJS7T8UEhWjfi5B2mycXibTXKJo4hR6JuiMVjqF8LYgXaVDZMbdKQWNLem9LE6sxU6paghNE",
  "key19": "5RuFQ17pzhBR6Qm5uFf6To5vVF2QPK6Bi8gvp92zd4pdLp1AW1runPEN1nHQwPRKtPNFrK37PDtXR5Ph8D8V2eB2",
  "key20": "3kkrCS1fEW6LMBxsm9hbDC2bT99jfWZYm1HPkv5TzowvnnUcQwgJjzFk6M67fM8oZzJu9jNqLcuLyPsbnPtcDV3F",
  "key21": "5zeDGAeoRSvY2foLu4zJ5RBtvM3qwTuBDJm9Kpgcbj1hwbmJ949NRLnuUezHXg7sL81Jy8JA8SJv8PwcgZ9UBMBn",
  "key22": "5yC3GkZGCfe88VScmePqBj8Rm1JkgrJRhU9baWm94tyn1t1mn4HehbVFkfYVBMZhmiWdCcmUz2mo3bYoeWQ8yQet",
  "key23": "3uWrPp4hiYXXKjep3veCtx9sqtFamaFhubcLCcfmcTNiuoaLHga7HnDanQjwKBEsgTMYzPprZ1ACMtvGK4CSAcYq",
  "key24": "qRTfiE139toC6cCB64v59kiYx44CsfeJXiTf3yVLTaucmxXjkDyNYyhkGbYGmqTipZoqQhegaPS4yuVcc83L5xj",
  "key25": "2gbxBGJUHL7ZYLA3X4nqoFamYaraAfkjE91EYRtKDC79kYkWpsVwXNnSBPQC1bVRh6xavdVWeAj8vZqUdHczdESo",
  "key26": "HTJNRKdvBmhKB2Vu1LoceXFnag39JSuKXLwcEWbYi3xhnyabfNR5A2FS1BkbafCUPkWqvR6TVw16UiesPtHmfs6",
  "key27": "Cjcyy7CtERZUnYF8RfAEC7ym2iEVPWm8FNNbhEBvi2QCvVC7zARkZBCp1Eav362kocUedyC5c5PCPEpck676oUQ",
  "key28": "qQCMBzDArLSJaRxMCE2SmnwNTQFqbt1vaYE6L1xWQx69TiGFQqtD6mRPjTtfvH9HEwPdhrFksrFA2etmLjx9PTJ",
  "key29": "P7iM1xoMrzJRFUYkEDG1LqQLkTLmugQ3VadDqYpq4eFyz9YcGRSZuLA21sbyAr8bupRHAC1TtNxPSHfHYdVpiWD",
  "key30": "5k5ZASJ7qTcRoPsMJej3nR8v1Pw9aXdShneaWNLNHZ4akM6Ydnie9SVJqVviYcvSJMZKu31LTEcYokPg6gXyNPkQ",
  "key31": "4bxipTJYUBbkZMggvrXAbp14xAFMbQBRAcNnsScuh679C5ZLG7eDCfkEirKkhRVEct5wey4dvQngZ1M7rUveYc8Z",
  "key32": "iWNgjSuW1GgHn9LuGz4WN3mzhVYw15YduibgsTg71todpWpXRt63A8ZkX6qFddyDXaHfggW7jAyScoZBaoT9d61",
  "key33": "4n3UZLLSbZLoJC4k3zjSKq9gRgkemnQE3L5ix3svtirffo2La6u83vE7X4L8g9ZM7CYg3fwQ9db2NYCNurPNgiSR",
  "key34": "5SARCjy29aVDpYcH2mW4yumvWzC8QSgpirMFn4GgixpF8T1ASDwjUBU9ask7QYAqDafUc1EpQA587w6PTw2FVxM3",
  "key35": "2uuatVtSKDBz8EYkdGkU8VibfRAswDvES3qHyRP46WVcPxninFWzx5mKyxLGmL8z6VFhdTp5WeX3AsgriNV8U33s"
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
