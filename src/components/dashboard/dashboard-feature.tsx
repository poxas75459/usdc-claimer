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
    "8ueByUESe9cnQKa4FtjGZfczMeBHPpbMPv4oSxCqv8QGdZF4aEvCHTGwxxFfe6UwFPN1B58gNvP1qu3sKZhggp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rrYQWFEZTyFzxGH8eVUwSThfzeNUpXTerq958NB4ZVurmKx1wzMhizmXKR7qbWWp9xd5SSKxzT6pHQbLtKEg2Hv",
  "key1": "48KD8ik9TfCkjKcLacvhDfDA7mCZDjZsEwex3C36Aw8cEndTHteZvWkbUzWYkdMtptch86wmpG8xopaZv6BZEiTC",
  "key2": "FaSLW2n9dZi9VCNMPd1e5JvdxkxrqejQmYtcWoJMTMtapP9sadZoefd4vToGSqzz6p9b4GNN9KMPgRxANMy1DwL",
  "key3": "53WNwQ5tdeZ65vBRQcVya7GyGjxebET78ctBZbSKeSm8fG9vPboLTHQERT2PFTAv1hksU11JX6P18qJqoRtXgY4r",
  "key4": "Ke4pmaZY4F1MXSuZPxhbGM1PevfxaFN2AXp1rBedvnnuCdN492hUnoh2iTWq4Xyd45uZDJHJh7gxBhWcAwWodZB",
  "key5": "4Abvh5XJPKBgf32EbdZbrZ3FX5U5TQ3ueLhriqxj6fePVEawLD7knVn5UdtVsbz71PNTvc7oUL5fNY7bQWqKAgqb",
  "key6": "65zPWhLzzXiRJC4Zm9WBrUks9QwuKApTqQxfXiBZxVAYErbZzaZU6WAK3VvDKK4L36owrRXhyU1WfNjxu42YvoQQ",
  "key7": "2mhFJy8BmjDNXe4Zu7WinN45JAjcCsh38P9eShe2EnMMjBaZEWLU82CQPTMp6rxWE6dWXZ5RGBW8mAFPy9j8YuB7",
  "key8": "sLPxYX6LmophrqSHzJQhnSX65HBBV2s7CGSfiu6i3bdMA6EjQt35vevRh6m4pRHQwF4iFrrMjqeLj5BZhjPriPL",
  "key9": "5Gng5fmZZ4LSsJ3ZWy4qs6Ki9n4PyeWfrBBiMrb1KUSc4zs2aQRe1TcV9ySvMkY2Cn1bWr4eqeChgGcUpAQHEjgv",
  "key10": "58c1jAgJqhF6sNVwo5L1rubfXmampyf8MDtQMkk7DpKrwJ8Te3w8fgEWbhoJJZtkC25cbKwX1z9XycNQayH61MFs",
  "key11": "53z5jmL1QGSZb1nswqEyYYYCMbWB8uyX9M82LQs3H6cLWZUXHNQffAJwBLz3B8ipQxkh8nPbstVDPPDdBJGjv4P7",
  "key12": "4NiwA5hKnFhETvb9VQfKeixGq5YErnSMe7UcZ6RKk4P3o6CdCTC4WHEGCiCTeVzntno48vT9CMLV6uzXbTERcKxj",
  "key13": "YpPMaWb3xWpAFcy1Nkd2e4eKWmYDo83UtD8aX5TkLf5tNboUKS8uLvuVJk1u7Ji5kPZf5qJxQXthqRsVur7m4Wh",
  "key14": "3EUPnzWBY84eXhNnxGmifJp5Dt45mQGjgP9E1UswM5VqgSam6dkfeJmzfcKHWEiiZVKTnAydsobLzN9hSXRpbrSa",
  "key15": "67Two4UXTeuAZgWaWRafMYuuWzv4ZhkMafniVbimiB3tKQ7VkLBpKjjqyRiJhWJwygpYdpS7V1U7DztKkkTMe6Jw",
  "key16": "3t9wshAWMKCMLqWhPajJmGDokcMm2MyxBrPo5D115b97MZLFYsHsRgqGbSPZKesT7eCUEo3pL73NBQJmL9fYFeuJ",
  "key17": "4VNRQHs5y1wvbQsbWQ1MG9FdEfRw7MMLAtUzY1drqGVgvnmti9JPzknf7WCg9Cu4bAKtZS7S7bdtbUumvwKy7s8m",
  "key18": "5ij5NcPLeVdPEEH6VFYW3hYaMpgFrVdjTdC5mTowkVRhTPU1fi62ErxVuy7GKpuKJPHcqKDCyyxSXd4cZvk3jfEV",
  "key19": "5WCHfJZsQqeKQA12MZtWAyLta6Vw7iCDxY2zpjHFU9WPu8NcmBigDVE4X3QUS8P69LuSq9EohLCRkcE9NF9y7So8",
  "key20": "22nxnE7AL61yRW5TYTKJNZYE9271gxR5HTknoaRB3rJPHBJsdRUekUGPgGoZ4iBxEyv9btDcNgNrPJdyAP7pKrGm",
  "key21": "21iV4gJGAsecfZLPxMw1gGM9P36Csp89Mrn1AeBPCSsrq61mGi6hsT5fhU8wnZCj1Mtoxv3WxC6mDk2nbctZ8a8b",
  "key22": "64E3BAw54MhGydH6GFE94mYVgjUV7wbuDrDyBMeHquXyJt9Rt9oJPh2jhmQheU82pzYvjTYCqqFu66ZMZW8mTBz8",
  "key23": "3kwq15j78vGRh3L3n27wAFYfhkQbvQPWH5iNZRrzzg1ggjmsWw8WBa3S4kaEobMUBWCpwRn7kuGi8ih8jBp7kp9W",
  "key24": "2RUmf6XM6KEW2wDowBbzGjn2Q3s6iTKujwqSWFnREPV9gFxHnqDjQn5htQS3AjaZbAHbxhxS86o4JyZ7hApcLjLn",
  "key25": "5hiPiKcxMAe2vEcNacCNesqhT3byXLriSxH1V4Ec5kKSnFxe8WnZxgsK1HypFfHcqxkLs71J1CWJwJSYJ1gXDUqe",
  "key26": "4GuADphxeVaY14uWFTFbdRTZThpZTu1i27MtM6BDDztWveKsr179BJ4rKsrekzMf4TvPLD7Gs2XC5BFuxVodLZq4",
  "key27": "2aUsmPC8FyBRU7pnF4gMaAEgFAAYsm7dFk8aGQzu25AF4G2GCk4rHYpEZ86e8AgC9dz2gJAVcTDhb6T6pZZYGtd7",
  "key28": "47PYgpnDKAMX7yAjMsYytiijKXosLMGAdowejDK4tPv36WnQT2eYUZd8eMKibPtjFECh2Y2xVPD7CTboWnZMDGR8",
  "key29": "3TyCKnczJvTThtfRzLzAmBqXAuvvygunPimBDjb6JqEZzckQhHDYCrZFk12xXNZLWhZ1ovm1We5HG6ShM36SrJJg",
  "key30": "4qQST51DVLyV7bdBRCjkMQoCoAhZDRffVV1YxdYx8xUxoB1RM5yUMQUmwd4tEhKVY6wsWtPhF6ripmqgVuV9B7Sr",
  "key31": "R8h6Rwq64j8GhdSVK943V5uC9k36jM86Qh3xf14gKRij9zTR7R4tRU9p6TLeQXvk3wjm4qmupt6QL681PTuriym",
  "key32": "66pgG7EfS6gYetb8WG5nmDaHnmh9xtYbFkaXHrroUPCrb1sA36zpfxE2LV34vN1Dc2QYVpjApkiCsf7uh82rqF77",
  "key33": "2hezxAgTteT35Bch8r8Rz1xZoj84539zvuzzxVpnXmCxKkjxnaSNeazRrGwfuZtswuPQraRf931oBANwTnYXapF3"
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
