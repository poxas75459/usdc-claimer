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
    "2Hanqc3coeWTaJcvRxxY26UD2q7Z3R84LWJq3RRvgw9x9LNXQVUs2ofP2cdNrywc95gN1XB1MhxQnpDRevYPQc6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9aopGUfgGLWZqGHDnRhkg5Cdu4fC3GVoXMh3PQnHMdSYVkXXXH4jE8ZaC5YVwPDzgayGDj9CZhaVZWNshzaoF9",
  "key1": "BySDoZsm4fRnsTbW1S2r1rY8CkH9cRWTzfphCVz5n9M1hQk2b4sKXrofi3sfKGmqCEKxsvXSW6aWxps4Uq9iaQd",
  "key2": "2DmvjXnjsz9KcA7Sm4ybNhvpbymPQbMmv4cE6msUGQV3quJN6NNrpZoScqyTPTXZFUEtmrXnQvuxN9Rq1o8Awd9x",
  "key3": "2RgueHRX1krgu2AGjD6LTstT7n7Ly4e5aPyjyC4aR8C2MfVVJKeRKPR8hLbmC7Bd7fGSmUdREYchu6JqqcMG9gFu",
  "key4": "5pmuUcyMMpkgSpwhzSGQg3cUX81EPahWWMNGt98ey5fwHxbQd7Zgf6nBp1oEkdzam69m4DqCb1rvgfCb7DgQy2UU",
  "key5": "7DcTkBcVGjmggWm7occ5hWspvUA6YVsnEqgdsvGFYBV9Hrf9y6ienJFrRDAjJTSW56hPcL3uqKVUgTqbqSXd8k2",
  "key6": "4pJnDJE4xQfwxcpK6tDc9u15Affu2oBnvipa4SW6Jc7dvuThiQtZL2u2sWRCJwJrp1wLvT2tAbDSY94LvGos5Ufe",
  "key7": "5Co1kqPUMaoqS4FCrzJfo2bNe3rEuBvHz1r7KWg3Tx2LwDWDctJA3gLPrCyrivYMef2zuyCdJa4nDaxPK3uMyk7B",
  "key8": "4ouMsbTUGbXEw6uZXo6eyDjPqr5QRsUf9mjrutCc6EEh7483VNkEvq3EVfRSuncsrWH2YQVosYNPnbHfPsXaj9Ro",
  "key9": "fym54mPy2Vmf2kF7N5mzkVQtgpMMWnxfsvUAV3sxwVZtHfSJ9LwFJeFrjA6MX6B5A9o6CnZDpM7rqqodX35iZPo",
  "key10": "2Nqx7oYHb88Lv6hMDUFMs8Dz1rna9epwZw9FztnuqnMovWXLVHbgRWTvFF198CoPgDJBynsfpbdPeh6P4haDRemQ",
  "key11": "5nFSy6q6naXfnrXXyAWxXHgB56ePfUC9oH8WmroQuimR7o6mKeg2A6u73ohiiT9EFsPF7bGoxxqgB74r8sakQVd4",
  "key12": "3FLMT9p3zrq3BGcmKtpS7GKSWXbP1iL1JLFiwZYZJ9JkCUonDAS82hPnA72UEUixWrdRSYtuuM7KuwCigppkXNDN",
  "key13": "2M2VKkYtBhCMzmc2dHEiuskbbbMGhrRUscqevAx9PXfNoZNCwfAaysZR9FqrqKgTnZD3Qr6xutc4L7SNuWeKDY2m",
  "key14": "r6gR2HrUnNfrDmrYdQYSYTSPUU8GSJPnkTdikQ1FjytjzFiUoe7ZnnQPEs3ncJqT4QHPmCmQVeXLLm3FiGdJbst",
  "key15": "21VjBzbnUF5RtEQ4KrP2epkiesXYAnkSaaZbeYMwj5fAijUvJyeNu8xGPkbbo8HGwTEGcHcEWMqXYXLThLVK5WbA",
  "key16": "5PdUJMUNmwHbtWrF82wMAG3fp8noAnXaFMNv7eTb2Txgfyy91Fe2h56ZZhyopsxjXDLJaXiUQu6j1pDHgkWsEWBa",
  "key17": "5YmN8S5qND2moGDFPCDtvtEQtLYi64N24TygPD6pNaXixmD9oWp5BnLbJBuDsb9CgTzYeKzrU6ptDPowabXsxnxq",
  "key18": "5Q7NXYPFdWpwCTYM9ZrCbkFwdQRfrKY3D1g3Vzs5KctnbhA9XmYSn3n8LUbkAH2nz8n8jwxnzgLzH4VjoYKgWfuY",
  "key19": "3hre6Gj8hCd4tvTVHR5Kt3mywjBePsTKyB8X1QGLhvZ4emQjwd3LRwW6AUAYAowH9woW9eVHLQ9dgYGErUm9rihZ",
  "key20": "5GEfcjra6wa6SJFbsibxRTb2CGZeReLyk6fan6zNxjwuHRqsnSbXkvoxxVvCd5YK4HCETAH8nNGauB5ruorAAnUL",
  "key21": "aqux47HxxEeBcSvbhyStxixpSp2YT1DGmPw2qKuNm4kCK53mUYCy4QbmEUhSSxPjqCo24mg7p351YDg6dwzgVhD",
  "key22": "5eYgp9CLWBWSjH2JBqLx9iBvqGuDLro3gAwt3z5pkW4CZnqKTqHSHoEDy9kkNMifDMxzXKf19n9GbkXM82JgBnna",
  "key23": "3uRUyKJEJiAapaCszbxRBowU2ed1LeZGYSZLeksjwS2DYnM8MvpYW9wk895oQoGTvGQQHxGhXuaNnG1Z2Xo5LKXL",
  "key24": "6UqPNMzwbE33Q8xZVDrMZGWM2gWodr6PqquqiAfyyLF1wjL2u3fCPrwoRxy42BdWwWHn6J8PK7CL7xVprYMjN2K",
  "key25": "3redxGzgEW5hmzhrZzR5smsUBY9xUbSz1TAbmjUNEnrbSphEtJDwazf547Ga9ZnjqikAKW5Q9fd5iFqgLQCTsjTA",
  "key26": "2zyZyH4mxV1ELvmNCdZGnR5cA7h3Nk7wgKb6i9MYd3ZeC7vkzXFTFjxMDbiH1tkGcUZndDFdWHVThuwhCwyCDrKR",
  "key27": "4FePLzN2ZWT7Dz5ZxgUjFmL9kyLue8qFa6GLMkbX6yXvL9Rf5Y3cRhEKohXizWQqupEMCD5jXrrRsDUEafb1CHxD",
  "key28": "5FXefKwMk1USqanYKDdN72P6M5o9To3J39QGcMDXHPe7eGhj7R18nc8cJxvxRpVyCe7Y7WpWJwhyfAKHSARaCRCL",
  "key29": "2YKcb9Po2M6UWq9oFkJg9aJ7nZRuDwvZGKfkjyu3C8JwtaM2RoiRU97aTPSeTARmuJYY4aLPvQBUGhZbjA6DEwGm",
  "key30": "5DFsHWWUXjdFrNJpY7SZuH757okRw6d7SihW3JUvjGD2Sg8TnEGkdheijapuKLvnZe9NbThGciu3Nypc2YK56FHS"
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
