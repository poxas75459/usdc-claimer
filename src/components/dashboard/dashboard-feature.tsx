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
    "5DLcuVH4cBGnx1cXC8JhBuka1HbKmeS8WQKTj4jrTmLsWQsgvhZLYjGtZjA9GEJWhbwQrqQU6NwPHPHZUArzAS9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uncReSKiZUiKKJG2hDGVptNTAGv59EJF3pBBsHf4LW1aii9iP6HSgNKwJ2yx5iEpyUj1WDxx35zHMxFcjsqazPU",
  "key1": "5JU7vhJx9qgy93de4QKFXevXWzr2s8w4op14aAPcS3hrfTNdKLK23UW3R4S3GXpLy38NtHq5ZdMigUydAa4uHH7y",
  "key2": "4H84msbU6EFc4AfAr2Xu7GgRUdKsy1puy1bffkmMuxxGPaeqdcVSR5hRB624zvNQotrx2MUH4sx2ugznHrnmcgHB",
  "key3": "121RhR3H99LXCvDp9ScJqmTvP8GRjNRSmpjywNqQtjL5NusxzWVSCRn8khJRUEAfURvqFTCtY5q9rd8jc43pC9Bn",
  "key4": "24r1okvSKo3FdNEwq9YarmDiVw1Yqko6yjKknZAjx17ePjdbXYLx8P7Xah3hBGkj4REeC2bm8WcW69hvZsQHwPwW",
  "key5": "2ZocKqRXjNHYKzL3NEGoePz2GEdyGVuVd6wz6uezFxwC9iEfdr5ymrwPhbNgagkoZif9xcrWhzHqLR2nEm8apuBj",
  "key6": "4PpAW5agFfwTUhFcjA198StgRRuxVvyLjBw74vgmvqN3mQaEYPTxFEVxLupTqAETHFY4ovoK1KpxDYBR8bUsKycs",
  "key7": "ns6CTA3PiwKXggF1UJ6JZi7Pc5sjAGnvPNeVZePqeEpuQyVbbyECqbYkW8MR8xV8f7nkyBd5V3gzYNCuYSCr2Ko",
  "key8": "KbiR3NkSC4fJsMxfqH8c8tr4d283ARKdwBEpgbi15LCcNerNqdFNBAygqg3kwS6PB4vAPcZboGokPwrrJKq6vmF",
  "key9": "ukLTAG6eewA5yYvybnU3Nz14UwyHYPAg2ExVAJSb2d679ycbG4AgaKF418WfZB1UAptZgWwXsPGZfvS8UsvRrBy",
  "key10": "3TwiXbaFjsEY6bWZ5SuUdgRsrBTYSmhBuUV4vawNWmvHfXzj5GiL7v9irunkcTb88Bunik6vjuFXK4QoPik8MtwG",
  "key11": "dPbbyuQpZKaZaFKu4LkJMQT5v9c6ediuiztUGsbeBE1J4FR4pDqkCaWs5jv1auikht1BRxgV55XBANTFJZitSVc",
  "key12": "42wfxa1KwCNAaxKaA2wmm4CVFmebACiySjRVnMyEoAd9EaBnmHTeLAa4PfPM89NUE3K1yvnpvo25poDymtDBgnfi",
  "key13": "36N1GL9CNobUxzkzqvMHXje6BN2gPKFFENEA8Gtf9PZfeHu8giv5QcL6QyEPTCzJVh93TWQz39fj8WYGRvKTBgk4",
  "key14": "3UTc3oaD6N2r7NRDgUWR8CJSnbd5S3BHXVr8NTGy6o6n47nPEFUyG5xLbsp1hfMBa1DSAAgwiqyuwraMwoG2J7ML",
  "key15": "2QPNDKdX2qeYuRbXyUsFRSFMnbD3122ewkfc7MLJsRu4MhBvUVE8q7AKnD2WYnM7P99wL3X6Yw1LAi7rrBeqmLe",
  "key16": "5orngZgZStVaDmikJzLQ8ckyr5X8AbtYU7c18TdDX8qRPyJ9u8Dx4BaLoj83fqNTQLr9LWG7hkA6ruWCeW9YpfCr",
  "key17": "3aSUJjdGvbeL75j7VAQdWWufaiaVwFUauVMs5ptJehHHD42byjMsvkUet9WJLCpuPNBSUgvWKUvbGao73PUPzvUV",
  "key18": "2R9kazzsV8ogc4j3sp9zPn77bfwyauJEu7sbNamKpm99VNXCofsVb9CtfwxfLFoBAXNS2QsAj4BwMK7fEifWNfnt",
  "key19": "5zaj9tBuHg6AnfcTsnJwd68Sz7jRVKK4yMS54jtGRrUszfNAPfKnWojzDHU36C811Ye4WJ9Gpd4LRTxGLHFHgWYr",
  "key20": "4Q77cNWwzMHoKiV42fbejMqQRASuobZZ1aPDLvFbWoGqkRbxp6GP9sHivoCWiJJg29Vib7Hh3qaM41FddgJ9oZgB",
  "key21": "ZX41oETzkbVdojCUXtFkzWEMpo6c7UBqGhrYjp1zMD4gf4pqFauGi41GfWFTZ7yLQtanrmhMwW9QLnpXutMami7",
  "key22": "5p9jFN921aEggRZv4yiKZJRqrtFagoeGe2Ba79rpVboD6PMKZTVZFTYY2MfP3AvHp6KPxwH1n5Kxqb1Hu3ipKetp",
  "key23": "SQT2hNVEp535U7aoRcbU7D8bouJhhatnDarxnaiJ4SuNfbASbaPCt6aYmkdymE5rEz3AZjwVgM7M7ws61ef9PA1",
  "key24": "4wzmUjFZ85LYvPeQLaurKRCFeP98CegV42n1r666csYS7HkTR4EzsqSMmyiZ2NkgqJS9bcVCNd9ZM1owTWheb2BD",
  "key25": "4cRiZHQgUL5sbmCRwjiJryrbn1wnc1Lqitu48TwsYKuS4jiyUnLkwtZwuk4GH7GBy21EKgNoTwErMxeujLVqkCM8",
  "key26": "4tM9XyXbTtgKZs8nDU9jrcuALXGLR7m5fkc3bEEpYJ21VLMBadfYkLUyJ1Hv7utXncebRRVhDPhSRLNrkhb6gLGr"
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
