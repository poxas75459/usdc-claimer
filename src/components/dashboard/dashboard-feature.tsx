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
    "4GazsWbJZd3byN1BHJsEYs81bBeUrEJrQrHv71zjCmxySHZoHnmJZjUDEaAsmDpXUAzzn2uogtup9UQEJp781BKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cG6on1R4BRoHW5hb1yz1x9QYkqUP9jnMt4PnrtZDaNwysUoqyJAWJUtxKGQsM9Tuyt3ur69fvZsYrYbZdCMnABn",
  "key1": "M6pxs3rEUi9M9YTq6UD9t8XHi4HkPUVfdPHicYCFiRUqLJ2SomPYFomXXZ515XkoaDJ4Aj2ZYGjUrKJNkHbGbKb",
  "key2": "4uWWnN3SkxbfHHC7fAgqJTYHXAp2y5Vcn2ocdhu4ppoDpvqYF5ymTvkc6FipKjzt3X4rZSYCtmwCuSMaDSScgxH8",
  "key3": "4GN18MffiQbuoxvpiGko29qSxr52kKh6LzfwF5CqqxmrbrXnd7sjbJXkpob1PMySHfAKU9quxij2XeTWoKz5pqdH",
  "key4": "EaUyUPoyoAUWMLmzDiCnba6xLkMKtH3r2r9h2yPCHXCr6FncvGZN8HE7fCPXPsmaYhGqDFzuaQSYw1iqQgLVBF9",
  "key5": "byycDdXgaSfE4iTLXPatpnig1TW7HaGMLC6TVvPyr6mWf9VSdXa5DEf4qPNBSVp7yMbwKvPqvrvmgWGvhP8jFan",
  "key6": "5Vyzc587r3wwPXbD2Ram9K4RxMVr5sXyAp8EdgLrZ2BNBHMFBT5GusUTbBPNtbvvr9rWVFycHnaAdezzSBVJZnqb",
  "key7": "4Zp4axNktBZN49EbGyFJvwJey776mpr9p5DqfSjUDKVPoDqG6TZYL8mYiKEf9gAQwGYajgieyJsZ1PSg57x3XXRG",
  "key8": "Kk22dsiMLJTYmpuRGnXmn5XEuLHTpnRzEmmiwjTdSH9Wu9pGtjaZ3rrdDcPFpFXT6uue9KWPCNYe776qxsxwv96",
  "key9": "26Y8iJtEfoY2y38WCgT1xMt54itZma8SbRDWbQqqLiNqECXBZX57kPfS7qxsdBLJbmx59LgZ6RFyVBmxyNxd3iKb",
  "key10": "gm5V6sF1fBAgSkMW8g9FDTHjnEdJSbLhc4PtEU28D83vEfKMn9MCi9yK5ruk48pTPjbrgJxt81ePd4GEvBjgbwN",
  "key11": "2B56hJSNkESiHGJfthpDpVDXxPkXWPts3QLmjwyMwYNumuS51orvFLVVLQXAEEsDhUr1j4zv2SAPrvsi8yQnL9pj",
  "key12": "2uAVLAt8Gi17qgfSiRrVd6ghRobDFAj97ZudGARLjUHfEGXH6rvgCzeVkytNapdBQEbYL4mza7QQGbMBwrWQNfLM",
  "key13": "3vsK1D8WXr88ir9YNuAW1Vhkb9SAeTSzk6RGhxyA3pkDWScH3XR2vUqC11VNFLJ5bEdHUWpiEtGJEe77qnxSRDGW",
  "key14": "4k5UhfnTK94ykmfZCKgu39wdpwNjCpmZJLSnTcVNwsGjjbNvMnWCuE65fiAZXMe3p9dDTa6yTVgmWhMhX7j73cNq",
  "key15": "2inCjSbCGRWFNpgs7rauv6uHQXWdXqitRQ5jJ7DJ8TWXe7JDs26ZBxhW8XWxvF8k523KDaQmuMM1CpcWwxdGtp79",
  "key16": "2uv87czQe3Qeg7og4k5pRmMm5xV5jQKbTTEYqssZXYmpqAzkx2DHs7exHga7H3pMSCxZ7pBq994UkwmVFHawg3DY",
  "key17": "5rbNGEuEDMRnZr5yovgGcP3FpoGiNSzgn3gtJmRwaZEvAUzaVgwbL9xSYy4XAY4ggJmV3XMkvs7hYcHRqUFV13yv",
  "key18": "26ZsgoLiAsDLUuaLvpbo5mMjVR49EWhrjJY17qLWkTzg6vmvCWMYQRQtuFBUBmLTbHbb1H6C85DDMjUmnahxsQKr",
  "key19": "RoTHHCMn8WuZLXaZmTzG8dSC4UeBQwsiX7Eg1xeQq8NWLmkGp4SUkZFPKTD691vap6sP5vDadRCu7LvqM3fmBpJ",
  "key20": "5Zeab8cvDvZPxDtBbYTtKCgUSDQsrx2eroxpKTCivGNu4WBL8aZnVPxmxm1e7N4K6C49iYmCfUGaYRL1T91fjZct",
  "key21": "36jH11aV7FDrBzQ5YxD7JxjZS4pUiDjoMU5aVF2ZcZnN1Zmbbyuwi3SRNcXv2QfCB7H9qp1FCaTBi2NLjhW5yGeY",
  "key22": "3eLeWhk96oKWoGeWCtm6r39J5VkELeboSEshzgrk6zpaSq7PZz6rM23K3d9egbEVDrnZ3998fh4Lupg1p5GVxBAU",
  "key23": "2HfeqDFYfXxqyisWMbCLLowkTJCi9em5c3FmUhYheKNDFSZvaHy2cbfCxbJyd2zSdVbPrRMMHhMV6aN1uRFLJ8dr",
  "key24": "4BaMiQQ6jbTbka8ChBtcdShqUiyU8fgsEfhkntQs2aNuq2s5fBBAgkQxzxrnytfp7mfukBkt5CPcUfMj98Y9FbhE",
  "key25": "2PsQrF533Q6gkjHhp7zPRqZ1cfjPZTqK8sS6ooRgbWeUcf2ZJYEcMsfi6VSV2UWaPefDpFDc2VF1ZURrDv2jyVLG",
  "key26": "3xu5qSmWGSHNAy43t8wegFVw5iSVz8mJVcUUSPwkqwxsxUWrSGPrRE8x8gqNQfGJAsZGyuNJmCQrQERQ6yjoM6ph",
  "key27": "oLruFAg5tsy983ngL876ijGFQJuuVk4wnCmj73drTB7JCeW3zFEsv3YL1KY4Y5cz99gKWaQx9bRQiUHKf3WjQ8W",
  "key28": "5GTsbcVqEyET3LLCqJyQkD5bQadM9LoUKsZXAMsfVpkKfdHheWDJjAusZSHpMzsRBmPNgxbETgV8mSrhsuDu3RGW",
  "key29": "43XUXMiLQdER19vPJuXupquG2jJd4iM9knuWf3fuGyUXFvZUKQ2T15SfNtP38m4ZhEuG2HZCu89PUGDsrE3PmrHF",
  "key30": "53A2RNPUjjKbGELdPrScYh9vvjqvxSEyEg98yuxwfC3B3oVW5HhaG8c9VMSF5td3SYhdCphd2Yo3aRYFkCGuWBqS",
  "key31": "2T7SRk8817na5jjRscgNhzkqj8qZyYJDWmyonwG1yeqX8HogSh9SZ1Nqr19PycLLmN8zxwVtCZiy2rRzrj7MQsKZ",
  "key32": "4yFShGA1eLwC4pnxHmmZWVupKCfJzSq7rLff7RsDay6RxRFySCNtPWKEvP8RXKC3rTsrPRHpAjEK5mos44yWFWLX",
  "key33": "ZUdaFaAu2KXY6Tz5cqa4gD3xEE1HoS3UjcjMZYWULA4bp2kQKWqH7dPirryiuZiHJbEbAFrPU1hTvVrTqz12NkB"
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
