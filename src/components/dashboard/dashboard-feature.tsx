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
    "BPvYbgkVjL7nbdywhaHosJHLo9priABev7GFQBr2xvDvC7HZCZmBz6TBiyCRkGYCHR7B9E5d6UiRPwrXLmVn8t7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UXRkcLk3oBWvSDvJsu5358NXg4LS4Kqe1nEht46RuJGHr92vib3f5WhGYDDWGkAXXuVGPFP8eWtakZ8azUEYshg",
  "key1": "3BtPTCZWXfjkCN3DGPGnDV7TNgxrPNuFPUQRSpCLmkjQYG3efx8knu7LUgTs5AuZDaJsS4KtG91ktrobd4i96yTn",
  "key2": "2fsGxhbowjFYoj6D9tZ6YpD6BLJfEMUePQmtBbgHwc3kqpU3yi5try8hyavxnrLTjFhNsCXxf2DzL5ZqiCsus3Vf",
  "key3": "3fSf9JcVHgtJFtugppZRDwNtfbVpMSiCRfEjvwQkznQCQ5cWLW9XFWawczMPNx8co3V1L7V5Xd6EJ49H8EtAdydF",
  "key4": "pXxzBLC7MKFdxUjiDbah3DZGvebCQqJg9ZxkjnEUwhiucuDRq6QukErwXw71onvY3qdJeukjhsH2FCUxXSfwTGC",
  "key5": "3WxxV5JFBvUkXYN1pQz4VV3rzBe9DZC2RmFtKSQgqFSC3TUvfSYcogV3zx5Qir5dZErbyvEqv48fEK52PVpmYK1p",
  "key6": "2GmJF61dUHnARogSuMJytLaNWE5U4hHLFgqNoteYhSDaTU3FpD8scqTVN86cFCo5Dm5s3pFzHnCxoYuSoTmAkpeN",
  "key7": "5a1nvxiSf6sptu9dnCEq95P5p7ozSJbNwsHzSYMupHeP45KQp5LN8Af15yw6JswTAwKYVxi1ZCoeqwhPRMbuHSuE",
  "key8": "yf6NtUv4vJNwsRS78CbpFVa3y5itVESxLNoixfHqPR8ZZkwYBiHC7mzzVqt8FwC8KnfSrr7vxQJw6AD3HEq4oTc",
  "key9": "ZUfZGzyRmJvKt6Qc8Da1HMifDp44DhD6acq2CEJJKX3w2eazw3e2gUPd6SzSUAUF6Y4SF3a8FsRYwdWm1N1KGb7",
  "key10": "5mE1MxeCiMVNmCKXjc7TiwkdxjEWwsSZ8GJqBh8EAE3zpK21uHfg8aLz8f43cvPwEJry3uEuft9URAzHN1r1FXkx",
  "key11": "21FwZHG42fcZ8MwHLawiKhoNwWJhP2wrDEyontH678ZybWZkj4a7gRCkEiiH1q16Rs5w8RDSydAKzSWRCWtBRj9B",
  "key12": "4bDz4a3FMmCfbCtMokZ97Pm9tkURfzNYJ45YtHs6w1i3y3JtzPW3nXwky8bgMMBDByF3QU12fSb6P1mE32a6BWAS",
  "key13": "54jvQz1qHQ9348SEf5GfUcq6NNMsD85Q5gr5iLB3hfheVGnPEXmLNRZUxkw7MNorfCP1yEeLQ38aGcgeXGzsyMzg",
  "key14": "2HHcvCcYE1L1UwfLjSZM6kQB5TmCAmppXvfjQtBQF8xvPaDVuWKxPwZDDfcypjG3iszHYgtqik3yq3UwwfKmZCKZ",
  "key15": "45sLVMKJobc53UoK3p3PTXscB9XhJ7hHHEeXP5GRV96bua2YgVkSBKRibuaCggesNwNQbyyEugDt898wUgywjJEF",
  "key16": "3vzCLpUYfmvfyWf1Sp4CxrXGRK7kHoiXKtgGSCdwQdqLXgQBS5EsfMpnnwy5uuHEYcxq26WNBVjQzZFn6Se2KkpP",
  "key17": "3vmrLAsNAscHZqy8wp9yfDKpz764UAU5EC8mjvm988f8n9Jq5DPuRwyfM3uLgq5dHjqKk1rBZaXDuspv9Lgj38ug",
  "key18": "45zn6CJr584zpYwUUGxWy8J4sX3id9uNQgRizxpuHCjqs7yuhBH2BsFVToFeqH8puBPSJkexYpd7zThoj6rrJUB2",
  "key19": "21tHvTPMiSy6wR15v4FedYPqyehnF9sDuqcVHoQr2c9potwYvtyWv9X4zDqJE3UXpmbnfFQZfeTGBRr8gsupCbQF",
  "key20": "5gFB9RWNW4K2PBpjFHJ5y86muxWyCgm2RuRouu4A7aN4Roed898USC1AftaWUoND3xQK1cQSGpCMHAsutBuuakFq",
  "key21": "2tMvXCnEZUyt8Q2BSxd7CsBxbpPWMvRgvJZifutQq34xrsy16LMbaLzYm7bG5qVb1t3VdLkasmEXraZRHWwirBSa",
  "key22": "VmvcKHJgEy7nacZamTC5shjC7edDbi5i3XRn9HASjCmaSp8tuGXw8m6nwNG5xdqa8hEQqeCtXwGSxAp9xb4e2kj",
  "key23": "5V7g7pEfmvkfc2ufqmyxE4rVy4XCC5bLSib2rVrP5H2ReR6iftVKS6v7CmzUR5HmR8RxZHkg9Szsz7fLxGEJZ5kJ",
  "key24": "5xQhYZywXwuo9dQwaySD1np46494bRkFb7rXCzVF4UmCu9C3jR4X3XTMF8FUU9sqvpQRDAHq7mnteHz9GcnqoBC8",
  "key25": "4PNbCQeyEc5SzSqzX4DS5RrJCCgghB6cUaGovc4AP3LpTRxPKj3jDDtDgao7f9s3P5TFN2hpY3MWi2HdBiBA6ij5",
  "key26": "C4cGR3FJVyVQ68BW9kCAL9ZNERxri1pXShRx1HhG1iMLD1Lrye3JKD7HfNNCRh5hPYZtmm56LckFCFD1tJHLQPR",
  "key27": "gNYyVXvJJvfEp9XB2RyN3sjNPnkGrq8Rc77gXp8W69wNzw2mbJcRJW694r1t8cFkBcEFicLGEidHDYupFFuCNZn",
  "key28": "4PzdtqcLZbrSQSs7dVLz9bTTMBrYAc1mWw1PkFvfTRtfFSZx2WBiqQgQA7MLXPPBKLxnSgv3S5RtF7V67sJZxDm9",
  "key29": "4fyCok3uR4DqnLUopZyE9zp99XkJyC8nkQmNx8sNvjSMsgj47zBphszTUQwQoriHcfXJCnqDKtbgjb5csqqCpusM",
  "key30": "3EbKQbpTzkp7eDX9cQepSx8shNm4MqmTrVCsX3UEeWVdhzLKxkzKrhJvwJPPfSY1txR3K4rtTW1HHjjL4irNSZqW",
  "key31": "3CkiUh96fnj74FriL8DDzZQXjQXEZoUxzq47iLeUaEcVEGU1b3Ws1vtTnXJWLwrbScTzib7WkPdx3NBodSQGrx8r",
  "key32": "yTD9kx5iZNLJUXRczFmu441PQFao9GnmZwyRFnifPDKR1XhCgvzpJRENjyST9ZxHtFjFzkChfj45CF5EA1X12SA",
  "key33": "3hTdEjdAbG1XiTMLt2THPdBeWppoyyb7zLNDhxZ6auqcwwGp53nrXHrwA4Pnu4UEUah51egwGRZPAvbtwzPbYPuJ",
  "key34": "466mr9avKBFTotGRobqZprTDzAqngVUE3Dr1PxMRapV7YHZzqcyXVVu5PVuZvJNtfGoqyWC8qveDXUDv4NcEPUPC",
  "key35": "4v8ekPf7Q1tCYXpXsf2mNWQsaSqj5wR3rCQyREdwSYVhDK4frchaxVm3kGT1kAnNC8bitB2YRVHqgvRxAwD6JaEJ",
  "key36": "5YQk9K4SBJxdzAfn4E6KAwA6Zn3xGDRtHvySd774bVwKb59cRE9Lt9hG6nKs1AbwmBvpDncvZU34DQJjEgfscmhT",
  "key37": "E4byDajrLfwNoKfbpahTYdpbPbGDiWFDqPENhs9bXXqry1W6taLSLXVCYXimskyYxhDGkjMk9X68dEDc1iG7Xaf",
  "key38": "wUHN4PWry1RaFfP4J22PAfiocDUJVDLgvAzuaZvS3KvgP8GShaANuNNAQgyK3kM44jen9u44GYtt3TaKq8AKVxr",
  "key39": "3stfXV1Pzi6fgcnjTayXHWFTRYgiGGsAqh124xF9mzJorNtG67hyVLd3Jv6ARtbUrCYb4nor4TTMxfpSEpwLfGmA",
  "key40": "4Mt1wXqsaFJBysTwzXg7bf9wSysde8Eth6CY8CVTsQJjbGYucMRJxFJzutPijm9tSDZYXMMXQxmQquPpKqxKeDaH"
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
