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
    "4N2jG5qAAZ1AQXCYJ2YTjZNwyJrnpKLsLM2civi8ejrVRYtohFHb2MBfTb4YsgqomzET8ZxFTo8ofuv2JpsmGHqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pcXNxvQx54Ed7m2Rwds67y3ozykWMn617kiHW7NCWisdFAVFhWoEcm9KWMiiof2GfgHUXqYu3TLBA1ujWL6W2xR",
  "key1": "27CGy284U7bqmZCiM9a7pgdc3WFRCCucvQ1DxHuRFsx6g6BEfYEkhyPm8DnCLgy5kCAQkqBRhU4rvhbiWXAJzB5T",
  "key2": "4LuEsinJsMAm8CQoWGyusoFPuzcE2BuQvQ2mVLG8WG4Z3pdyhHq8VRJuCcWnN7tC24BSf8FVi9Pwgr1Q1QoiL6ey",
  "key3": "3P6iXRzq1AqHz4qqkRBPtGRZ2o4FoBk38Zjmcf7WndiWdJs5foW4qrNj1T6MVnBqWE46cTZLxjreBmBdZxX4KqX8",
  "key4": "5ENpLqLT7GXtFuxzMkKTtzMt4Xreh4sKHMcte7Yi3hNaambrqFBDRAKdPKAysV4dqKjDQVSasnuHSz7jT9y39ady",
  "key5": "5giSq4Tao4BEN3t2JU1oNXk2VUiq4s4R33qQBNtvSEeRdTUg2pibi6Vi94wcDSjmBwUK57Uu4zCw34r44XgxC2rg",
  "key6": "5zZWknATeUPZYyJCexjoCUHPdjgMHUaMBs7dwktGGnNg6CjMhBqXaYE7iBpzoTcwf6nDbYnAEoozUCYt7WJ8cwEn",
  "key7": "YMfwCoqYCik99vFd1MVe7j8FjBUiUM14NDA4LFaiVL3WZVG3kqndpnurq5dwSSKeKTdofzv2ghkeRsM8VQyEVEv",
  "key8": "5phtgnTFr7QRxFdk43azdiW716kxW3QDtBDNxm3tQaT9oGgZBSSZKTSfBJo2JBC9eANNrNCWuPcNTphzQbRfvitE",
  "key9": "66ApGgWZBnbDb6a5a9k49qx8WMoosQYbaU7wkzHDWwT75gnB1xYxM94TNVXgoAr4kbPVKt3fteYpnxxwSAVGDZi5",
  "key10": "3gJJGTNK8XcsbDR9UHTu4TRhGoTkizrZ3R9KQBDJWhc3tCbhpzTh9RFvMkMV75t9Vn4w1FvVPYG33b46hMVw7FNL",
  "key11": "3BiFRt5agSz76XrujQEQQgMUvdujuuLTnQ4ydQvq3AHRQPvApz32JcqspZKmYkEGcBAPxiCFJrhwB7oPgYeM1N9c",
  "key12": "3RNJtFPZwCGrxYbv67bMPyTJEuopY9W9QZ8mJmxVUvq922XN8Bxh4udSTiVbm3qNv6N6AqcewCdDMcRq6zPwmKex",
  "key13": "4rVz5uKCBwBg5FpVUcdxMv2ys7JjWe6TCM7DJ6LFsgddybrezN7zp8Bd4MGh7k7T6DFphAoBsjzepvVZKA3hxQb1",
  "key14": "a87gxbAck75nTPKjp6iLDBcjZ8rzkadj8PmFWLXo2mMmyco7hRJMSX6Go4X48yPmjm4zzPZTTYSc9cJ1hWWursE",
  "key15": "5zLTxQ7YRAtQuv3qUZbA3VEzLzMyprki8us2QnSQkoiz1FASUbJ3Z9Ucpm4ytWCnzmZvmcDDUaa5tLFyX7M3pCMx",
  "key16": "5A4w8mBvh7SKcWCaxwVNnFZkLuynkhXqpht4AN4sCZdp7eANxHk4wjNePbfqU5YqXrUWjBj5r83yAGPe8VG9XyTz",
  "key17": "4TsCsMQMYzxbUcn9i6sB3mVM1p8PzyV2fpp2QzGFifxEEnysa2bEnArucoeEFzk1RLAXPbJXpcQEgy7TfbwkNXDF",
  "key18": "2tPobgndoHZ7xo1QC1cJ5aJJKf8sJGG5yDFVEE7ty6E3pVim7mm6Rn4Qy8RGAd1Bk3z5Z77cien5Hw1KiqHtiyYg",
  "key19": "2FygLhLdQbB5Ab7PWKCD2dUYrqpoL1VMZvdoaZK6YRwiQuZvxxtiHzd63QY4tB4phqo51n5DXDusZZWYSnhRvUdh",
  "key20": "3jS2fiUgT5HB63w2sSgGCSz2bEu796QGc1qMfEUbub3HpCM2qFkmt7juskL1noJtYeitQqKMzpvuTsLPbMAea8Mo",
  "key21": "2SU8r1qsejCYZ7ucYhhF3WS4yurakcZQtVUeyfhkbuQqWrmzrcH9EcxRCQmvG4ZM7hnCarHRsg82C3LYYLhjWrrx",
  "key22": "7hcsCgcfoFoJgwFtb8k5XLANPWBdGjuRioc3JGAfSS2zLsLiEDCvhT9s5pfkPYUfoFThGnbgJ9xqb5kfR6ttyEu",
  "key23": "3ossUM1nQjemNLV4Bx4vq4WtiwA7BskPdCLsr9wtmbtsgj5FYX6svkPXvSSGhai5dax26ascVCbZxnNqGD7pGMb3",
  "key24": "4pL4H9f78G3kzn1ZrUp1VACgXsjAvPYZA4mBpWWkJHNJkeeNoAJioeiLpiUZ3dU6VimkfrCi7A2GPgcjmMxYmFgx",
  "key25": "5S4HNogVWrBwV6zLBV5RDnoqtdLSA593vK8bZ8emvFGnDdqoQayXegXPKP1zDWwhgEshTDBtHJLw6bjyfVjsTZVP",
  "key26": "3KeJHfb8cdyKKraC7HDvBrGsTRhuwj3LLb6RpG1CcT8amdZtDDrJXo9i6M8zEsPoqjQBD9WmJdYWMAkR9jaijHgo",
  "key27": "3H28A8vBrEGbBoJadiNZYusvfzDn9ZxJhYqi32XeNdbw4nu8j9fkyT3kXrnCZegTmra9kARN6RKnk5pCGGu2Qc91",
  "key28": "2EUNDqggKhTW6hPJdwPshTSqmErAEWGQAnRwoweCcWmNmJKdaMBFreMrDWyqTkbjfDQMKFifaXHy6VVjxoMbvnyU",
  "key29": "4YDRH5P4ird72petao3SPntdAo7bnXyrwGfpsAaPaEDiHTJUWCENuDwAuZDhBqnxqDpsRhFWYVM8pHVrNyXMBp4Q",
  "key30": "2E72fhyLn8rGfPG4huap5DUjuVRHcjkSYSziiVeymKuyBtbXvsDoz7L3w13fY97h2ko3hxLjvqp3hqinDF7cNSCs"
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
