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
    "2iw7TwqhPPVM5G6jGLj2B9x7JTQn2Yo6NwLi1fBkMjq67xF3KWBeyA1FuqQFnNNN32PReoUoRTL2V9hsopwibnG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PTgBCw4VR8GmNC3J9J75TrRoMk4ANRBfidx1WnjnJxxTsoY937o2VxWiiEfMCzmF2pYT3wbgZmJqDE8e1o2jQN1",
  "key1": "2t3QxnMQDt3XWXs5xc6ZbPFGZrapwx1VFF3DTaud8noMavzJKmtzmhs6wPiq2ZXXEaEwqnGui9DNokQiLwjH6KJK",
  "key2": "jYYHFHXMP9rwap2GxB1vY9FU4XCvhwHhYUsjYsY3fsnro4YmrX5DpBwZqwMFLauM4DCJVzPfCWP3ERUNaCL6eNf",
  "key3": "Y1mDUJ8Sv7QAPAUHmu3LfyCAXmCon2teUNad9GhttjFcfYkBy2w2L6hqToDpRYfA3WMjt7WaYvWC7JHEU5QRfP8",
  "key4": "2RS6RJcvtcEGWJ9WXjteVjMBPvuArDPfvgM5fU8S1bFwzLCrCk5F5nnCGVMU5TJ3j6nYwjcNNC2pJcM7d57Uwm9",
  "key5": "21Lkwsdf8Cub75fsEbQd2obfB4himX3677KYXJnHw9StjrZeEnuudLJdcYfaMALVnBkfpiHtv1ybUroZpJqAwHq1",
  "key6": "5c2SsAGW9mYFkR68bfVgKF35kwwaJpuzY9Ax3p9P66TMv5jvN2CUgThoyb1HXb6ygHHEBKxKPRaGZAufHxiZVMvb",
  "key7": "4NJf4YPrb8kchnFjnAfT1gaCUkqd79KnaenxyDFFggH8nm8ypLd75KksvyDr9Y4pUqoaXZVGTBSqU3dJxYDcH6hU",
  "key8": "5yNnW4Di2qTHrBa3ohAsGe6J3jG4yxDGz2yCMRMJGZkZidxW15DvUrgKgZvYvgKJUjCBkJUcRdTUff74T6WrqDri",
  "key9": "4BviHZDycJSNRmffQXy9FPHjiWDBofWzXtztaZp6kLiEJutQRXECPr3vsk6a8oj3jD3zGmcKDNQGbmd3ZbaSEuv4",
  "key10": "ouf7NUrivxYGfLf57BNaYyyqHvT3nuK3hEVyHUQHZ7hUFvGa2US64YKHdzhKzXCzUzru8SQkfZXznc7W6Qc4vsH",
  "key11": "CFhTiX4vrZUoAGJegEgrJXKD5TcSioc5VJVDatMCSvQqpLv5K4uYedMUtpN92VVpbZJeGvSDq7H5n9PHUizU64V",
  "key12": "eYyJNr1G6ovzeQNoNxRDeBvsDDvgGJF6nHSL6TcUp33uxSuCLm3GEUDGgKFRCb2g3kQJbgRN3CNb5M3UfHBYQHX",
  "key13": "5g1Kcjz1cuNUyiE43L6woN3naWSkrsTTLLboYVvBi4dXkZ9DmHUHWZXPymzgDPUrnUTYkYThx2ANAmQP8Vu1RrnA",
  "key14": "4KRewb4YYstXDZJ9WBQy8Qimj3FfsEFQLc1djvWHDxTwbQgQbr8ZruLGzwNFXooiJ9sW3puGvxuazu2buC9NXJDA",
  "key15": "5evyyTCWm3vGzMUhYJBmcGeS7Prz4xniVq8a5Lv8fmFuvCBx4HMQ4QQh6RSJWbVKfeM98GBWP3Emcs9vAqqjdbgm",
  "key16": "4JFyXXCuYzJbTpfK4gsKqXKfaBEGHcXtRZ59G4AQSATLeC2uCjXbM89UW8wyCkG46PWL4CgyVYfyekYtMUqvUwn6",
  "key17": "2QgTzySpDXAZHeRSwxbz8ihde4K2iCyHsqqcyViHztjzbW1aFLG1uTKR8hxj9qVsUWR2YjHkPSnNx35mD2vc42p6",
  "key18": "5rEnZLKfnyggaFUEj4eHEFS2EnYr1E8DKafZ6HyJPQGrMBusEzDDugwHFJYFQCRLxJqvocaTLDn89QfoUDTngEvz",
  "key19": "5WYDWDgFsHH8BEuHgAtPobdcgiotNuKxZjh2R6F1Nvthr7QivVYPSWbE7Z8pThDQfiRiuhd58R5zB3kxiL9yASvJ",
  "key20": "4SfrHtY3NPWMZ2PQYk4YeCKF5kS2KodpGqGZW22GCJYqV7sXCP8hUQ5y5hE3BoNUJF4mjHQGc2xeEUo1EYyX9HG3",
  "key21": "52vBLN3ZuN8en8Poqa2AyAVnfgzhEmvNA2dEJmmkfnwF39Q6qSQvq1VXkzmdt6LpfL3nqM9Y8AqopH3hqUAJec5T",
  "key22": "2QAHx2x2SBnv4PyDMhpv6nvX89xWTWXh6JQob6DrhpnCtBTfbJqh4aPxCQeaSmskBP1wsUEYKCUXonGLQ2MH88pJ",
  "key23": "617y3Sudmv3UiL5MVzD87Yhcdwhts77XzLLqrKfrtdK2Bqo9wmZ2LzSett2g4Wk35U3uEAqEbnQHxR2K4nPcEfE4",
  "key24": "2yGt2R6QeZ6Lce5ZnyR2DGd6KwTSAYpiLHxhXmQsC1q4tjUWScbWjX4FoU6Fga8Yu8HxiU3QQUH4HVm6MkYk72Lv",
  "key25": "5bNGhNbpSxiJPiofHtMni9bBjJtAT1GoSsR9yY3jretRqWxDfvCRZXyQhfxhwx9e8qMwbLjBp7RNGvWgTPCjbqpj",
  "key26": "3rkBSFCDtdT8EV4oXbQ9KWVY5R3LZG4veBBZ4Y2boU6eujW6idB4KaCeaeyaCxTYbjdzETNtaJnrgiCsoJGoFd9r",
  "key27": "5LmLEWqHuPLNKodMCCfXUDFT2aHQ1ZanBddtW7s7bknQLbk2RwKUSV9678NiYomb9sMXCEDfiWmw6X9kNeg9x39C",
  "key28": "2qGjns58BmTvC9bMHBFfA22884cW5CY76Su8wFVFrtMHZWHEt1WZ5sFgiR3e3VPngLp3c7jaSLgZBiBZDyccBD6S"
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
