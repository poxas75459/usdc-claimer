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
    "iscqnGYfg1Ts3MfsJmjGqNEbDbT578Khv9me2X4N5wjECWUPmhUL8fmNejHbaHB3dStBai3caL45BaxwYojJw5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rgLgRYzybUQaMmvSDJ1DikRT5bP3YpUYySzCNavbPnXeovwuZn28N67GbKX66ozryTDvZ7RDPEqNywtJ3dz96ui",
  "key1": "5CkEbkpcB7PPM9SaScbdv2TLrwDkrNiBXU3nnyXXMn5jLQu7nJK7zL7ERmqYmHdGkEwvobtPuWbYDHtsUJ8itQv",
  "key2": "4UjkwHUEL6DmmFCxVZ6nu93oYFYyMoRH3Zy36u7VMWk7BBram7mhaBzQiAT4wiAtwUyBSZQrMvzJgmVSJfR3LqZk",
  "key3": "4ZRHmwsrnCaRyrjo8AKTgMshvQnitFu2W7NfsuigBEVyEEhr3cweBBCX82AfpqRbGwAe5NKv8HMR8qmed8pvuc85",
  "key4": "2t9qLkVAFNUtAdq6N8Re3WepjKWAVPasf4i79UqrEiqfT7RrGXCMLBDiJt4TuC5u9pb421U9akonYcdyjxC7wh6C",
  "key5": "QUdLDYTfcods4r3UWT27m7FLe7JD5vghs1GEx8Fu8GHZSXGB3pWSawk92NyC7gqNrsmJBBrYdyVY85CABfMKGj9",
  "key6": "3QaipWa2Thy7iRNkA9CmXXPJFfsGD7uKNtNcrZmiwkMo4AtWjLCAXMsuhiYbdiYVzMwK5YzV6Q1PZ7jA11R4bj3v",
  "key7": "yBZV3ZaqY2NtfT5Sz7eK177ppNm8iDDtcnNkWQ8h8MdwX1kVavH4nif124RzqHHLzAWa9Two2YDbFdmXGv8PDj5",
  "key8": "4AVVLwkaRPVVRr3eaYE24zBzKZZRQcyt4FJzLTjteHictZKHrRDCXozAmygFKtYwYTdW5hDgU3cBLS3bqYBP2HSp",
  "key9": "43B4ZgptGfR8mfJDG3NGPHkg3SXrzg6ftdHRcYEjU5KZBVmhM32YgsGunJxFf5FRUxdaEYf5i3BQ9pkRfWiWgduc",
  "key10": "4EHHf7YVwamkJ2VNJ2jEcvraFVKVzZyJAirV4tU3MxJoCvVUJg4SXzjQnwmBwMiLVhX8SwAw5T5hbWX8ieXG1meB",
  "key11": "3oSCjP4sdLVyV829LAK1kPvEUQEd6c4CL9sz9ucePc9yApK9BCyECfSqAkMpbkMFsKnCYhXSgu5ib4w67fjG7CN9",
  "key12": "g7JY73VZJa8g7YhpXiL6KPnDS4SVtPbZhTaxbzvkRyc5sCHswYiKhUzfokDN8XVALbJ2BDN61C63f6h1HT6de5D",
  "key13": "2FfToYW7u2VT6WqzUVRfUSgByG73D3ak1FKoy5up3BrXCEu1wd5NGUuUMXrQh1iZS2N5CHcSGKKFbrb2EB259WXR",
  "key14": "4xkv7kVC1xJWobVK4dXznBjbaKPLYaSnJCSok6u9b3b1oSi9HaL8k6J9NvThPjJcRtUm4kEXHwSZDkxTxnvp9gco",
  "key15": "212vHRprdcMPABZpbwScbYuoHjFs8sjvUgHRjXD9o8MFUWStYiwNdEzzusagR8kgy2qo92JfpwYhLiVatDufm4Wn",
  "key16": "fyQzi2VRvx6uD1rf416uScktUuyp3QrP54ot2ntrpKreUP4KDYSEbepfptMpnUdwFRm157BqfuaTYRsjXArMrxj",
  "key17": "3nXjn3s6BNW9T9CLr2zhrFEWdvdyL5dC58LfJkCKVUhxo8EGeqAHTSbdFaBwTrfyc12eSBWTjRsBiRjVULPBEpKb",
  "key18": "5ELZ69UmbUavviS2bTUJoeMoWJKxNgmr2goycYqtMoeEcuS1jNtTu8kJo4mX7YPRNvZKEYtJfyTXP5k4aaeL3Nxw",
  "key19": "5FQL4CeJpCnXyg3EoYNbmaEdqhcqus6oLfF8C1gt5x7DpcvjCgrPqubLUCoAHD7Usjp5h5Camn6gZVZ3THviRzmg",
  "key20": "4ZcsbhQkxhdPKgRuQeFN7zFkXn4uGRXQ8d1qG52fQBNVLQHPPXyRL38pJ3qEiayBLAxCdS1cMSpQnK9ZHbCJtsJQ",
  "key21": "2TRT4QLRRyqvjy6LkTL4rhAtJAJsnuNjJ9XnHbKrGCho29WgB21EB43Z7pE3GSME6ebw67Mw2ThkbWwewbukbN1G",
  "key22": "3ghrKDRQtnh8gmmCzvtxguUkdW7sPZUttS1nHibjF66V7G8xuttHsu4bYfHULdjeunoAumPANYvSmutgPZ7722gj",
  "key23": "3dvnRhF2YXDWaQ5fxboBfCXJJgxe2GBUtqqkibyTE2gQfsS14w2yPyicUEfmZ6nzSZyT94ejL6KSv7CyDQV6yHTc",
  "key24": "27feCQ4puxrD8c4kPEcusj6hh9M3fVeHgWrr5wZZHphho4gYx9E1FHLeaDHpmx55H5e1veAwVQSbbV27VAaeds2F",
  "key25": "5H3EMfD5iEafZqz2Dd53guNDFGSn37YA83GH4VvoymG8xqW3g4RBCE9cKELCwNmPKQXA85uyf4jjdLQQSYTPZtTz",
  "key26": "5n5FdcYUEQ8TrAUTKE43AionXjsCSZYieuavjpboHmaVctGHGD2biVXKggPD6J689qHVkF6byMqUNXMkqb7tq9DU",
  "key27": "5WupYZmg29FqDhJ5rppTLjc6k6poq4nWnTxCnWbcTs5wCFMSNahYkGx3SxwqfmA4uFV6yZZtGbXGHnhXqSnRtFsg",
  "key28": "3L4K4So7AVsb1DNhtWLnqAuZsEu2k8WFPGpYc7b2gwbMsMGgBtRa8FuTUfRvg5MWR35Q7TRr24K9f8u2PGrcVBGh",
  "key29": "5R3GWirxBxuUguRyEtrfYoaBsb8ztusWUozPPu7zrU89MnyzfFjXbS1nPvKByLbD2EfwHAWQ78ucL6CfdJa7jauf",
  "key30": "5HnWb7FZiDcdd6FkZcZYGkQ9zUe8hssypVbFqGxNzcPWP3jJCYb6bfbW1HYPX9nefgU46pJo8q4iBbYWtcZMW3YP",
  "key31": "37qgXAUNiPJp1CWB5XixnikvXFxf9mqCZRFynH4qAe1ZuJ74QRg5gpafxVQpPtEuvc4ra4XFMgzU9d6swkFLVz87",
  "key32": "4e6UJQZmYkN58BFnP1rCdHn9divcdukjyxEk1AYbjZs33qbfBPLHyGSGKP4wBsp4xfEGMZ5xYu4gGcMf9XZ7Pcup",
  "key33": "48MFW3vNiXvnivBcmgKxkacnb8fXPudCTMr6zEK7uTr1FiHu3FyWftLTnLHqNFKsntHHG2KoAXJk1KR7BVugG8Nj",
  "key34": "2xnJdKhUoiLboRXovXMArmTVWaNDkXAUhGiV69SAED9xo6257ZNmWr6hnsS956sxk8g3zG65snZVcra2euyyJvta",
  "key35": "5vLdTZkxsYryLKHAgHqvHWXTBpBseYZaMHTW5fcb5pnTprP377L8Pe7h3gRq7ezYRw9UvvArHHR2Kbc4wARTXE5E",
  "key36": "CyZnCEej86nTotTyEHQfgDKgTvHfzbDio8isJ1HLdqPBQFsWcP23Si2nmJPq237tm4A9vVms9bhLJZm3Ypw9znZ",
  "key37": "4rpEkmBWWuY1PB46UeWpqZJAbU2XR2cTJYLWsMDo2ehwngcbuq5xsjWWppuSCm2UuyiVpu2T2YDcHjVcSrA9sH5q"
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
