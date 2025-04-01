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
    "2ZYxejD7TaLsqTNGbAW3izNyuFfwgrcNKrPF1Bybd1zJ8o2CqEeBxyNaNGTtQ9GxEDvkHQtg8BLvr58e5gsVyV6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XuPyyrVf8hV2crqiGsmNr16iEtkRCvwdEQnPpuCzqRcSY7ipFUfULbcUXE33uVBXoYw6EkRNWW1hydHpeL8eWjC",
  "key1": "2bbfrJyitzthPjt2K4sMtvrrjYYzjFF1VbDa6fZFWQV52i2Q94NNbq8weHyCGhXEm2s2JvgoDKohzFmY4jtxe2we",
  "key2": "5pFDJHcQMCameY8itmniiHPzeyhqvS5QE3S3moBmrt9NXCvoPeQgW5XtEvDfJRX2m8T7XNLk5xnz2JtHEyyN53S1",
  "key3": "3e14vVb1TDzoyMTSnXoor3NBY4vV9F4EJfXe9phUmibdNSN9H5Li5TMBdPJtMPzyTbtD4Q6Sg8Q13GnF4fzCsBGw",
  "key4": "64XXGF8ZRS9BQDFeoCBdDxBGZitcxdVNLHBeF5VYX7qBxqs1KKoBz64tyhUNWpbYUvN9YT2UepwduxX4KHPBttXD",
  "key5": "7YUhk249HV793nwqcX3WJXgBz3LVLod1YuMK5ney7TWU9tizVhhqA3FJo9UiqfguAmnvZZK6e1okY9U5hEprBXn",
  "key6": "2QHtKUdVL98LmnjirtAztsyZLhWzqfsdCFd3mJrRBYvwaKXvF7wHqYfrZF9rNT4YdLFDyTzuqyRcaYHePKQyR9RV",
  "key7": "4DerUyWuGXmzcWHfqAaAXygiNfTeSCFfDWUKjeo7Gh1apGhTZE7a5ovzx75jpfk4A4bFKbYUeEfFwE4BY2TSjrT9",
  "key8": "22jEGQmBpuyKbSM3yBEyNzxLqkULrXeWSQFUAqNidB5xzJcdQ5NyTMRNEkR4rBjpoHUVAcAPTKUDgNjFUqKsbLgz",
  "key9": "2CAopaN1Yo1ArMS7MkPQ43JdHJTYiA7fTpPjzL8UbhrDUz2ZJd8hc95KHcKdHgcq7W43pFq2R3VirbJh8Rg3LdvD",
  "key10": "3XSqPaQGrjjvCbHDP5xN9WpGP8dV2Md6AqBGezdR4C3CDLpKe5zFKz6JjigKaETebUpBn2wS6k6WAiD1iV8L9GZt",
  "key11": "GFCnwfyAKTfbVkw4rwymfo6Uo1GuMfaMFpjphXc72Pup5hpqgGFT4BXo8ossuekE4Qx587o97Xxi5Fi2JfZxk2E",
  "key12": "5wc633GbZHWCSkTpWCGUWFdmD6QpvYWSwoLBZ7pL2T47sqnGqvMkRMmFPyHVF4wAVxR8pM97ucFiXdkDoHayACQb",
  "key13": "2wia4LXjT7TXiiXr1Z45ixs7ZJFnasnSk62TNpxjSK2PzCjphPRjvVaJgWYPwBUfoBPZFqBWPtRKoC8UseDFdNCC",
  "key14": "39NhQ2GBFhL2dZS6LS8GFRRGsaBjJH2owPpZ2We9CzP6Zmd92k9jqrExXHg58ZX3CMMrS5UPW6Si2WBHQm3kB6np",
  "key15": "2Z19QH2SLapXHavvrXznoMHWqoQNpVwZCqpRT4b57T5GiY7EdtxWZGhJXhumfhji5J89TFDfKU9GjaoxZGcYJKcP",
  "key16": "5eWX4ZHLAhE5TCh3VLUsk8VZB3J6rzGRZ86DLLcygbvxKyBfb9qC2fwLmNToLv7TeC8jEyDPSqM3YMx7CrhZfvTu",
  "key17": "ANTppwGJxWfA5erPBPHsPZW1zw43zYXKRcZ9uLv2HGvFgMBVo9Dp9BybtTo2KRbbmDbogvUkSwQxiba6Rz2cFCF",
  "key18": "3mZpox4TrdCZFy56UHgMyx9pDSrZ5VYi7zy9oGytsWQkSZHhTqizrinxoS16hgTVecSwBkJaLPmMnA7LK7f94NrV",
  "key19": "45ALdVMKqbkdaa5znaXnV6FXYGc3gnD9a2mPgsM9PXnzvUWRefw7THYH72Lmp7wFCFFHpYJde974m4bYFph39gRv",
  "key20": "5epNGoMKjLHZyRk7EwPqTXsF6h1jcgtrniJSsp4QDiNKk1pW7hxZyHT5en4it2YSBpxn2yyjXAAC2ckFoTkZmwe7",
  "key21": "4b2XfaTNPrTE1DARmRjDcwEULyQbRmVVcCoGHrbDCGfb8ny265rJyADzjJfbBcoZ5ffBFhwaM9dwf33K99qHnw99",
  "key22": "2ee45RB7BE1BwvUqy2FwqGXt8oTYop12AW14xu3w5Kpwts6Mz7Uf8yEMyPsRq4seSAiDFHbKnTAQwA6NrhL1vgB7",
  "key23": "3mJhEWd7KdRd7CQnR2pWg8R7XWnHfrdztFsDBsm15dMkJ1LRRZrz3Pn12Sr66jK9RXGr4dUij5HrT4ZUpuTZ6iu8",
  "key24": "4F9MrCN2tVSUkZiA6NvpcDRwqYRBybUPLX6BYUSragK6DircMYsLxxwdhg4cRskd5nC9bmbPzuYYQbfTV8tM4QMN"
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
