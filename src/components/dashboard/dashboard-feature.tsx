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
    "RekYm5FzecZN9CpCpDRhioKvNgLqK2MGsAWXiFwZrpec3baWomXPo2ZnG8NdBYTuLWx4ZZDJmnsx9svmxuxiQDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PxtW5rQxHuCmqmHUDEZCTXX5Lsf7ATme3BHTwDsZamuFd1o6tk4VEwQD5SrVCKtgNJ5QDg2J8i9ZLZhqYxyY6rm",
  "key1": "2j8d5yNSmz93Brma9T2vuYLuZtE7Z79gbKGTGWm1Wo3WZomCpeRPogyM2RU9nikpcTBN4VuAeuTfUerB8ygGcFLj",
  "key2": "4mBLTLtwKAatrJJwzy17Z6uSu7YhLDt4GKKQnXehk7EEFNKXK1ZeccYJMjAzBhiiez8fdrMKJrqRHF8Z65fNRwXK",
  "key3": "65jF5AdkAjwZo8HMRuVjfbfTA5KqVq2WKWax7mVXmtpbkfPLRqkCeoRjc2SL6471F7ihR3tDqgtseTY2koA47K2z",
  "key4": "2L7rRE5ETw4n5imJQNeH8oziZPrTg3FRsCdWMGLgmrvibqBN4ZnB7cbLiy5YjCPQCxX41ZLfxjQWnnZDrqQs7ebR",
  "key5": "3pByS2hZE26odyZgNwTu3efmtdsQwwqrjfjGpXCHDRpwAwWXuXB4MqjNEZG51E2GweuSSB8orM8P4dsG6WzDKu5s",
  "key6": "4HHgWL83aEsG16ygBDDjFfbEcLk5Cmx8PSTKFRXFBgcKyTAHQJ9UpM6S9JxV8sGefdv4XMAdRb311fvr6sVyQqhD",
  "key7": "28UeUdaL7xqmDGQYVpQZNXoTUe3VCQmXCPe8iyWtU6BYpf8Bgfv1zWH9hQ6NPA55UhTJHRqkyVbD2xJagE7AWA1T",
  "key8": "5v51xfyAFxmxjaWByPPrJyTJTuY3cupd2sS4sv4u7EndDrbbQ9dmEdDmE84pPWe1vx1hXAHwGB1DMDmFjQxDujNP",
  "key9": "5ALWycYUxtDK8QVyEDYATCs5XxD8tg6SpsV5uQ7KH3QatQFi8Nq2JvWXJN8BLu1DkjvS2mnyo7pDKGrHPzQ3qwea",
  "key10": "4izBvESfFS2NP3acDsREekhVnXda2PtyWcRWSeDtgismmonfXha6cktjeLSU4QA6spx5wjCPCWxsCq3mZaT77tn8",
  "key11": "6iYxPMcXyCCYQJEqoKsrjSpLrupbYBnqYZqMuLX1WW6H6VwFrAj9ts2FcsmerE1g3b9eTCcm6FS4PqcnXnjoDEu",
  "key12": "5udVmnpsYLzHr6w8TNiuvxdfPwLAiQMAUjQbcAKaoJ7dWzoU4SNUyM2eCXc2moGa3CGt2XW81Wu4hfJgHJENYhe7",
  "key13": "4eSG5PXqDvE2X4jKNeHVKjRWLEnCDb5gtrgEaQrJZD1cLTtPahva8HjnqF4Kr6qLLd4KnRTWfuZPs1SYmZCL1kHw",
  "key14": "3TUubuRm8AVS5yQfhpNvuvn5xSY5HwymkMoSXadhYsCy6w1VEHRjtTYzuz6gxNhjj2o14rczMo2sG8i8gSaSjy5d",
  "key15": "2pdSmLwMgNTwxwXhLW3EmNMscRLPKhzjdFp8kSJk2XBaQbMAqFzuTTVnZr9xga9ZPp8quJUqfLM6b5KGzfL9bYMP",
  "key16": "4K5yjfKExvboUenT3QBvo4BF39VA2SN2AvcnrD2QVSnePsbRgU7PW9JXrdZ6ADPgCusSFmMavargMbzTgjNTc32a",
  "key17": "2oeWPoKCCSaRJRX9Lx7i6rKhh7V9xEKMfD5MxSot8Q1p8MXNhKRydtZCxX42uke1FriU27Pm6YNJHwze6wwVwfzg",
  "key18": "4XqsnDYQsahooic7EZtmPn3qA1La9TfonNkYdFJ8oK7vyoA4L3ozPX7Df2TyvEBHodNLtuB3Jgpohfi1MuJqQBEg",
  "key19": "5womVLSZ9uEE2ayu2zGJnVnHmwooqku22KRVXZPkRo7L94E1DDpCHM1R6Ex2spy6akuXwjnGqCCGhN2vyLGxPXrz",
  "key20": "oUbKPzEv4A2mpEEGEH4bk7n4tAuPToz3ChYqrysJZtCQZsjLQ6fDMcsTJf6mF6csQc4MqbJetn1QpzbeqFYAtV3",
  "key21": "48xxYg58KGgGQQ3Cfjf4G4pcC3ZdBhNagWAYTvKts7YXau1YrnvSEcZe5pEGVMc2AvHXhfEj34PKpsKSXVxnPSv4",
  "key22": "2tThYNzAULiYr7AUiz1aTcQJMM2S5FgrkgUr88yptjzHajh8y2vsrH7EfCiqLexef67uiRcroSx8wf7uJBjn4cNF",
  "key23": "5mvHnkLttM5oB2Lh7eZBpMPAMCpMpHibrYmafCmWK5EN3rpYgQQdDXoJwjNcpGNoLmQznwXVY1xe3oKeQdD7mUFS",
  "key24": "2bkoiRSkHUGkvzCy2cSxLPAgRDVKyMBM9SkXr5NDsrWHFPZLqrN8XQ1rCwQMqLmCuPzgUG65QvF49PRwJ4qDXbZd",
  "key25": "3yo9cq3L2WRBRjQ4UZdFzsU91jcuUeFnMChFJAXVWs7cA2Y6xKnFWWVUquuKHWwyfDykViTXneUpeBczug9hjpgw",
  "key26": "2JztcqbWfKwCQ3zTkLDqRP5StW797gt6qXjHr1GPYk9BqDQmzQeRPTD7ty218rn3cYKRqDeFBTbshuSJgEHF7Eak",
  "key27": "WzM1GjPXThjjPB4UJwsZc9MpHkVMr49cMoT2oETAZfiPSDuy6xQre47543tA1v5dwjgnek7bLoopZTDHK4Gj9pA",
  "key28": "5Ztn8JMhwg4F42q1teQ3XfkLN1dhMyq5QcU5Z9jNEeQqwnychUNjUdWwq6KzGX5LUp3pUrhUaXcXf4LoFKh3q3gr",
  "key29": "65AVwpT7SfUXBCbYApCRXD4gDurWxr91ze9K4DiKxh64CV6hPhKgDe9gBkasvWpo3BxWFWK1f8U6iNeTbwa5JAsb",
  "key30": "5bPY1vB2CfLWtBmX4suHRNCTHpTpyRzN8wLuT1jS4rWUpC1ZvKrRCi5vJY9ADN7pH4jhtsLfGh8QzzSgS52MJ2j3",
  "key31": "4fk8B2X31bZEndS92ZLjSJUpd9to8oDxeAHYhZaynKG4Tws3tMN38jQNEeSF9nCjxyeMqqDEoJMmfRhsoKf9pjp8",
  "key32": "QMeFVxm21od2ww2LeN9qCrjB6VnBh81oBbgT9REy7HwA55Db6kYrW9fwef5ajFufsHiuCL4Ch9GPAFSGNLzR1ks",
  "key33": "5GfVEnpLpJykPmBDuSPMBuzrtx89oppxx5Ws7U8Lp2BfQJ2vy5D26YnXLVQzH7Unn7HVLkXXbizsRWH1fkrtQuFT"
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
