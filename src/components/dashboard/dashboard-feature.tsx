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
    "3Dy6brG847SuM5xH6d9bUyC8YVfH1ACQJWJrBdhz1Nx3oWfs8Ghk64ESvaU2Y9v2uFecnWHoitKcZwWCNadgMKFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V9k25gb1sYPoxZNsBceVQYP3ANJQRUkR3RXHSuw9MB3Aoqre3TwLNAigtWSV1bgXH1rjYk4irZvxCEZStQBVCt3",
  "key1": "4QRy6pqTmsszRKBwtoEmX4hE5XGWathRssbA6fdGQbDMBxtRNN8x7ZP6KicRJx6AGfYkpCVmwttvbUrzEQjRwfny",
  "key2": "31U9YFzg24cYtznwHYBWeTFxQgbGcG7JCsZ7EiD9yGSsN9BZmHcZidnTAuFQhpoLnf5ZxNyHURiaopPyDZMCR9UW",
  "key3": "5PsMy3iGXHJAPR2K8WL1TkNJny8vsZ8qsg667XbGMzB5Hki4ArnmBBbFvFpvruja2f12KHwW6CoRexomSMqbjLQw",
  "key4": "65FgQ5Gfc7y9VsMQa1fZjQSHJnF9WGogKfQmDPLwLG2UY9SJS9UZ8XwAR3MkuQtTfyM5a1ywVChzALmBXtKvELXk",
  "key5": "492uwxTPYc8fgUxjf8Mhv1X5LpLFgGM2xxrs22VrLaC2pLEt8GaV52fTgfc9fd3gLQSXVFAWf7Sxgfxu53FTqZ6c",
  "key6": "yUtUMeF7ZVLnpUx6GCb8QNZtx1ZMw3WNVv6zXAXiYmnnHzcvTugwf7dUnJ5EB9ohPNMw3uzfCJC2wxxYscWxd6C",
  "key7": "4wKBrCn881wUVgS95rGY8PryrTceKvE3819NBm3vggVBs35jENGy8DhM8mVrqHDByC1NpkSnhs1UxfxrhBCm1njp",
  "key8": "3Pb3eZRApfwJ9X9dG6VsCjvaMsUuwUaMTwKbPTZMn2YfsUpSHDA4HHV7Z2VscDAZb1e6RDhBoPADHYPvmJ9XSVpF",
  "key9": "2HZZzCNX7NrmVgASLFQB3XjjiJyGdFQAdJTjHU3YScMbtG5sAqrGvFoZBqS1vo3vNX5zzfHDz2jfxG4w3Bss2d9b",
  "key10": "5dEvmtVF1SrCEy2tm1Da9AoYDZb2axveWcfTcTnz2Vfv9tFZS38TRwerkGupbTA5PmYSFvxyP5RtgfoNPyiGKdCY",
  "key11": "3FaUdvDKMmhDhqxJjFtbb4VvzURZXyFVyN9BEnet5tFTgqNwesUWTP4zKQnZpZoSYuVyvG1T8XGtDryMpx4U6e9w",
  "key12": "NMtzQ8EgUrY7FVozLjqwpKzs2JgQMZMQW7g7wG3gBXcXNVyJAm8V6DWBjSw47Ck1ZRqJUGfWq7GpfUuGC89B93q",
  "key13": "5UtwAeGXY2fhtjfkq9KoAuZWTTwJ11ZuL1Y5ADjKc6rLsyMF5yLFbZMioSNx5QTwQM4XSb5MyZHVzvhkEtTkk2hE",
  "key14": "3qrtTyHRcvoqPbSMRVCgaLXyLfm66ftoNkNWUbhMeTG11o2BB4z3srkFhorRn4W3YP7vPj5M7RD5LJUNLzQyNLtL",
  "key15": "5K82CMnmaEaR7MQmy6uHSRX5CygLudnALQR7c2rv1rYe1b697tRrbtN7tBvtLmMXHacD3d9CSTH8Lb4jUxDBNj7d",
  "key16": "1Jwfq5G6zyEBZq9wQMw2eu65MG4o7x6egF9SijDqYGyDLVge6aQeipyj4qpiN9eqC8fbZ5YiCm2fk9xMwhKEbbC",
  "key17": "5riuAyw8PcWjuXLZgV6auSMJMB89CduTd1P3ozxh5imoMhhJ1Qrz89hAjwLAXphJyv3NMBvWi2KDCJEYsa3PPnkW",
  "key18": "3SKcj8caMrcqzMDBZx2cGdrXFhtvzhm88isGn9xGsmPSQ4aQHT12K5HPEdn41d2QQnKJcKA5cD2Pum5ph8rZH9ha",
  "key19": "244DAdXvGcj4HoEEht65xEPWE85hVdErsVGTcQBXTbNBdBjaDmyT3oPiqT44oXgM3FuRnKuV4zmbUVqyBVwitVEQ",
  "key20": "3HyaTgYryXAwgE5dsfqajvTq8ijFrvaGCA5nyGhwvJaD9wKVyJtWGYHJZVcXQAQJ854gw8tVzEEicYhaZ4iwa7k5",
  "key21": "4DYBBiz3ExV5wKfkKF8G55ebCF3kjqGYWXwNdbhBq2Mr8WMvbpVNJG773TF2i87A69pGy5qWrh5SSTKo6RHDSUoL",
  "key22": "2FW8A6hndYmzWxUCZwk4Mr3HKDFUcbmV4sBGzYdtujx9Evegzp3inZsLonirUuwmVPRYeAYnQkJNahbqTwCjYesU",
  "key23": "4stcijCrPZbBs8hm4DJzk1PmN4AMkrNNawmbGh2jp6mki6F9it9BMARwMbwkTYdBCsdmsipwFjVxfs133pAQKF56",
  "key24": "2UhBTBYgSR9WxeYo9VvUyHGwBN7wcoQYACCa5KxZwzegjawCCwd6op9w13TCUn88svEHGeuPi2A3aVTBkKKsjDne",
  "key25": "5xChnvEhqWXGbK1yWNhpHsEjPkAt69iVGT27Bxje1ed45hCsGSe8tUzkwZWTDcG1uZevFWSJnAATP31agXSZN28K",
  "key26": "2Ki39GvK1qJ8AXaH7RugVbJax9s2xmQDSS7FGSSvYbFjwA1AwNYx96GsPGckpnVs2Uhc2sdEHqJQrpMQRkkHdn73",
  "key27": "3qB98FB6PNX796b44uj315gMQG2ezsFQVVi8ocnc3MZ1eFiUc6afWjVqxjsrqzGaXMZdcw91rtw4i5R1e7AhHd7",
  "key28": "3WRmZWijgh3xXGsJMWALmBVZzZNNgWadAewxtPzvvpd5zK4KfQocYjitLG5zb8cZrFpSLGTunE8RY6rNtQJujSMw",
  "key29": "eFBixjanz7gSsqXbZjYJNFAy1ETM7oh7s2foygo1A8ycZ3kaJCtDzoiL38tA2iGrtWera2j2pTuWn55MosHgVrT",
  "key30": "ajWCU924XEgR2Gx3AaLBYFUkjjhuh9QNZWm1wrvVosFYWHxRQs2tBXAdqGEVC5J7ndEVRpnLHSUJGmQBEc5R1nG",
  "key31": "3b1bQ8ijBhLjXZCMRvJq6kTPcEpDQ7R9he5p4FNhfCXKQ1NuPMbNLXmFwEi3ZnnUUArnRzqZMGckhng68iGwRmy8",
  "key32": "2eCGigdpcLHRJxnJAqi8PNCyQKKdudKrFoZ4sz1yXo4a1xRKVFxKKwH3rvT7Xfe3xRTDNsfdmB4VB9FoaxksMcVM",
  "key33": "h9QkgBpQFQCPgScJ68Ym87SW6NdzTGohM6xWxT5qAZrFXZ2MHUEnFiojNpvETDG6RX2UT9CwJz9Z87sMuFtJXGi",
  "key34": "3aX8pXMojdQu16MoB6pshvkZXnEUScZpspeJ4PRTWWiLCLA8ZegeeRGFZPyjUt3jA6tzCEpK8ibqKjqEpbeqYeMv",
  "key35": "2zUAV3SbwZW2Yr1jeU4YhZCKzAr5F5cyi4gfQkgAWwyf7wxpgeodM1qGBvNYwoQtULbtTv8jzvqczaHerreFYR8u",
  "key36": "5vsJuhEPAeNbfJXvDvBKyNyMNvjpb7oh9eSxq96BF913yPSY2XzP4foKGCnYbiWc3wYT7ZYnMZWJbWyew6g8tcpR",
  "key37": "3rWPCctJmtWV7CEHgBULk4KfBk16W6soDCege21qzJUV9zkVL8gegQfVVdC2tqa5BCTnBX18bpaA8Wf9wDu1prw5",
  "key38": "2r86BB4JWuJQUkcbmZFH1deybkHXXA1jR97Nw8qDSxpyMEVv9qkchepyPetcbYrtaHAf88wof5i7vUBLi8JNyVkZ"
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
