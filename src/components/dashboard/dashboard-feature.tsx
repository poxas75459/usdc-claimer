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
    "XE4TxMTtQ4qcLiTwrFwHdLVvfEAB4qg3VUg8B6HJi6MDtPdM4LakacjNivvNGrG43wbxGMS8CPgEUcEb4kcvgE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r6MZMx2usxRt23vPkk5oHo8uLpGtD6QjxpFNtd2QqfNxra2xuR9DbJLcNmgjfYTZ66MtqYnv8SNjqhRNLZZJBSD",
  "key1": "26AVvxsmwpeAeVZ1Zxhs8RUUhCLqpQZBLp3tmwmMEjJiVUbKDYD3cuc1jfsaekWiRY5apaePijzsHAz9GwFdWHgh",
  "key2": "Wp568iv3LyZfRBZZHaPuYc9yisaMoFMty6jKgB9XGQgUkhsF5NYU3fFvq72ZTAa7mSJ6N2mvHnw6xf7wokcJjjp",
  "key3": "3FJnGK8mvbhiFJDm9Rdgq2XrUVSGc8acRvvtLQB4vWFwPfkYD7kB8pUkGPLMYhFN6yjDDBBFYHtuizTq9YC1yRZq",
  "key4": "4GsZ3cFd5StRYtoXv4sodPc4uZ5tLuJH1vmANpViUy4FF7ToAnWrbcvNUnMta53nLXZ3igoonMDpkxAmZBzXzck8",
  "key5": "J5EijUtEAH2ahRtuzxGCYqauZXPqN39Mv5BsMusk4DgiywmdW7vwYbNm6Fbv4KuX7ZqszS3dgQvtSHp3VcyDYEA",
  "key6": "2U42adt5wbSKavgieXc8f8Fu3tGC4LjS2YZu94rTj4vW4dEFYcCyczqkPmXi88y5qkSVvVD3y84CsYxBLKajeb8f",
  "key7": "2AmVfGcYA43iyNaHKGyacurntyLCj3ZYtZmkTuHnuAMWvEqYh4gvKafvZ8Qn6tfqaiqDAbahjUnEFV4wiZTcdLtP",
  "key8": "36qRK9QaXLgjbiXE37r62phTS4V2cTXv34vcbUmWiijUMEPJzwejP8gzwoj3NJBvZFBXJjNafQTNXKsSYSShUjhp",
  "key9": "jETTWTxKpnJKXF4Xh6Uqvn6ckDDmcmpd2qv7hLEkEiqdaJVLpgiDB3YiNTRTruqF991d1vAwveeSJQxR4MvTEcg",
  "key10": "598ELBMPzW9H21hP9VLsRz2foG5Qg4DUrDbDCg32zHfwXt2QAEBoBNe7Dt6F4Fc7z72xctPnT21HPqFv2ziVq3Ym",
  "key11": "4vLDaVRNu3GF7hs4e4aGqfB3xCLfKYhaPNvcFPUi1kqeL4x2ut3Fy9zgMDbYrBeF9C15MVLTPdykEs4rHDCWYzym",
  "key12": "3s6ATiMgh8nBX1ycgbNp2SHQkxhXhcbD9RfrkN4T9npfGZtsGiqnoWUaqaWgmS8rzfxMMAL78fCiRM99VfyChyQf",
  "key13": "56rWAS1c9kN1zTedi7jDJNoX9kTG8RfCRrvpbLDW2GXdLumea48mXxepAHDnfQQZydKEKroQ3MHgXoUam7KZ5FV1",
  "key14": "3B9ruex8soqzvZKpEZw9igxsiZv12Sdum2Q7tsyPukJ5GGXYz2XgpFi2ksWiK4b6uj4UXQ97zHrpLAUmXS8rCSJy",
  "key15": "4gT4o4bLY2ucFG4kEjZ6KMFgpFRg1M9rBHEy7o63e9tgGgHuF4Cg9QeTp6ApYjvfWM8PVvk5NTQxv47b4NZbZp3H",
  "key16": "4FjBf2ZF1eX1wP4rsNAn4i4Xjz21yLEpQApC194XqkNktiUyNFvGq9XYYSSKwoE9oDr7LfajeWquBFFK2gfkeCVC",
  "key17": "66FC3Hi25u4chBdiSwVNNnhVRZuBbG7LutNjDQKXFDqMpKbFhsnrGLhLMC5zDvssJV7JsRxc2PhSHGt3obznxjrU",
  "key18": "5DmZefdMAwcehJFo5rbW3aBofziQhVSrKtNGkkkChDBBQtjwqhRroofbwNFxp8D2ZrGHUuCzhySD63XdgkjDEw1f",
  "key19": "5YWzkte8coM5zuqMZQaAoSoeuDdCJJ5YV4SX3mxnVGTZNcn9jrebHyofUi5mzbFTb6XuqT5zHGPDjRcjoin9v1Up",
  "key20": "3zQLdCFsKt1jRTqu5WmZcq3fnhbJCwkujooigyHS8wVk68vNa9HzvR6qbwNGT8WyASsrLo8KTKZGeA9phShgD85N",
  "key21": "5yW6kxhJXLZXnfAYWgvB81CBM6dTj8x4jnreQrzepXhsnimpiBkamHQfUdHyp55TXnmUMigrD3nW2sKTx2xufHgp",
  "key22": "CYb6hfzHXs2tW2QY6bx4VN3MufVdXhAmbUsXcq4Fc76MSiK338bdkrLjGwZ7GRjCxx7YiUDWHgbooCxFhtWsAck",
  "key23": "3pfczw2DpydQ4iNXDasyeTqzF5pQX6URXJrDBjVWkAPC3K9G7a2w6F8QFN7ubudMsRnfyuCfaoToDA8WCMChxn85",
  "key24": "5NKXjBSFhr2sneeh6yy1SwMSPLD8oK1M3FZCZ57EsrLaxkFaqLJFcxqpotvV1BRYSpRkqGdy64fWBAfGNNRarHsG",
  "key25": "6tXb3Mjq1J5KheNBgiiRxcd1Lktst2zpFTcGrSn7FCgUAgyWT3R9bdCzRer5PVuWDR5p4ycSTgSmDYrPdf41PXg",
  "key26": "4rUbdQTeYr2mFk2NAxeDGL4Z7MTZcLaPGnzTwLQp9N4VEGNdJfXhYSqjG191oYRbxzVjL8mqyAV71KAFtWrEffy4",
  "key27": "2qzA61vjrDSqxB81aSGNQh4EtrZS3TNm2Uj88KwwRUUs9byfTRMZ1kSW7eqxyyABdaWN598nvknbM7xqETdJANyr",
  "key28": "5dUCeAh6wJkQZCzyWfxiRxEJ9dj5QoZDT4J6DxdWrHFP4eram9uE8tsAHMspRcuLMXYzsYT8DNb3jPJ71R8iL8uG"
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
