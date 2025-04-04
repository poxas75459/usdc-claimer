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
    "4Juo9h4JewuyYWyytCMyx2goRvAuDebj5ajKR7yxdScU9bApby9pyJWZDkMAnWq95hfKX5eYw4NmgLMvrvumebnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cxxi2pLjZvLGqhsFi5K6atrSGSkpr5qhnrLwq2s9cyKvjzAxzyujp8Gecy6DTWDsta2QyrTzroZBGPFc3y1StiH",
  "key1": "41YpNswyLRB2bq5o48iaRsGQRCj5f188eWr147m7JNWiGKdBDWjtpt7TkaA9jBTW5nBgQsxSaRoQ8FrKCf2kN6mF",
  "key2": "xooWXxuSXM2VeMC4cVnm6BtXrRiJTnDLRyJc6p5feiNSzXgW2fKgKNnBPSr1bdk3LUzRCpb8ehcnHZAuy2CQz27",
  "key3": "2FrhyuKahRaw68JvbSLuj1WzKcTC6gxts6GSSvXPw1p7tF5wbgY12H4RN3Fs9PhLYCai6NHcGXHeYDKoVtLVznM4",
  "key4": "4iwha4k2hd1HvStad6BYisaUuWzqURebscsoqAqRV9qRW4jcusQHkuL7X298KgLW1YvSyYvdZJcwGPSAojxnE9UF",
  "key5": "66NF1MQA6pvA5XLL5oP55KqX1DgWv78we8Lo9ym3QTFtAQatFA1sMq5Cjti24w39iBb6fQXwH7xzrTMLJXDB8LB1",
  "key6": "5jT1NQEGKiTDvTxWkjKg4WM3rS9u3LEtDNfbycJc5bfeJEcQeD5MvnkUhLpqnbtBLhCD6jzngCquQtWu9pCcrTM1",
  "key7": "b2nE9gK4GcrRCUxy5EczUsYyuW8UxiEC2tRUFHsq4boE9WRNPivsJ2zqo2ZjqEgcQYHj4Z85zFesaJZru1Xyhu4",
  "key8": "5a8QKn7ogQgiW9cMMG2HRcSA7mYVFeHBAkMdsu9AV9g2bWzFbYY6T49DFwJsbjB38HBURMb8oVt35m8AVtNL362Q",
  "key9": "5AeJUgR3gFJEACq2NoX4YEwnY2RU4f7VYsZ2hVVu4W8Pgu3SHSeWuwMC856kip5FCV2t5qdMntP4fbRD1nCtV9nb",
  "key10": "2HKATnar4VXUZv1zjp9LwpPrSUkMqDWRhMPmV4hkURDqyHTA1qsks6hBTyb46uDbiwn9vU6u3Ew85fqjrGiSe9BS",
  "key11": "2we62yx96nP3Brqh91M9w8LhPWnZjdtRKThFSG5xSF3cp5dddioVEGbZn6C6wt5K7Ca89Hdzo5o3knqW7ecJ4dZL",
  "key12": "4i9CMJXjRkB4f15HEQ36TgX1Ch9vV5rS8dcLmxUSdcRxwCuVAWVSPr3RaZ41t33CnpMPQxeEhsgU6J1eDgSgtudz",
  "key13": "3syVtQXaF6T5L5Q9t6Zeoc9QRiX6cruQwmVqSMsc6MJ2RXEzY3LBgVP3JmEyGJ1Hyv5EqamcsXfF7nSA55ySZAzj",
  "key14": "4ikKpjCDqoD1HxezNxGshCDAwmh3uvU93KCyqA8t9TmGsjEt3Yxw3BvntzJhaxFgLgnBqcFDDr92Zu4DsQvykof7",
  "key15": "47rWFzzi2Cpi1PmpAVy1sSr8rJdhwmiSwHCScDN6GuYhvSqdNcNM4EP4ioyUoj5C3qc3Gw7Kzmvog72f2k9Lzyp2",
  "key16": "KNh9jsTR9jgWcarqJSjLgdL5BDPWFFzW2JLjq6M4apyKDJM2SxXWEHXj5Q4udGeW9PfvgHPnR1W6tEXGDRi5MdT",
  "key17": "2UpV9xq93BfKur4193kraJf3FXJJst6xHmn9RoC8pxGdFSTijSoBgyFm1Ub2C14BPXoyqJkDgYMuQLiMk8VVDrWb",
  "key18": "4vx5VzVf6MAgToJCeZEZ8ZcrBZ4yBiXojCyHTpyFDjdpLUsqMca85y39pwgY8Zom3F29DYv1tKYcwnu8oMZdBToL",
  "key19": "5uWFu7qsKmRCtTS4jefQyZrYSdYMKHH8W28brs6v4hqeGCys9zdbtTNyFP3NV9To4jLqBsoR5mc6eyQRxFDgcrRi",
  "key20": "29LQUWKwR9676XptE4bcVkVgRsW5Scj6aHGb4ocWhVEP1Ec5JzoZ7DRWNVfCTz2ut91txQJVo3ZmAvTyvfUkzZgc",
  "key21": "5GGdmDmJyfXjdZ7kQaRhVVbgbBrgDiPm4N2qzjxNZRoWczoeghAU3ADPcw44wmVjibHRbt31YUqPPgm73bsRoDd4",
  "key22": "5SDkAbm3nXA7vfEVUYzRkzqPVyQbQUdan4prXggeYijQzBb26MkrzpqzoqaLK8FuLGr7iRm7QNbbQAMg1ypc25rW",
  "key23": "kruDRbm6H4HQo663FMn8qtBqxGP3BX4B4VYjg1jkNmsVTDoBxZU88tfUgA1vKST1nP6PikkR85Y2ezb3ZHYVYQa",
  "key24": "3gaxNp7nSFAezZDgreRsTJRPDLtXpj5QaWkLYBuy1tAtS9kFGcRR8Azndwng82JVZeWkZiz4C255QsB7uPG3bzPt"
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
