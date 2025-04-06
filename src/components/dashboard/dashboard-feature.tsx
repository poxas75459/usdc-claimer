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
    "4N2yPvGkYTHCxNoULRybJe8WV5LZjh8q5oYkEpF3DUn9rnE6pr3Nb8SH6nnFCG3i6NurPdKHbTBqHFbjtbAAjB2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MjVHYJjoTCni4msXvUXJyeJWzbXkLqcsSsqgrJdSyE3zf71ywseXjLwac59xb7ojmgqrW3ij2s7aqbErp1cUx1r",
  "key1": "2mfYkfBcQFWz127CjCZSsKfhztXvJ3PdzUwABwcDtj7Duob5RPkWxcztfcNqVxaKvyVPp2pqouEfdDfdyMMfiwjv",
  "key2": "5VNoPFDjdCEJ7ASTEZrAkUubqUCiB25FFasoQZ6cpy3fqDEk4vKwpPW6tQLzHGHKtkvdkkxXigJQMesSn2bfh8L5",
  "key3": "2ptfHbYPW1z6XtTAVYE8QyZTy7zbZXixY6WnQKEBqh3M1ZZUxN1uiygkrNV3m7JLsUTT2eAeDeoqnU5zjsDAjnaa",
  "key4": "qJrdQENhhsB95iRyrcTyrEomTG9tZs97qKH6vdaKLuC15MUA3bm1rXcnszNnyP5fLNBL2hZYwoJEdTyL27tCNur",
  "key5": "5c17Xon74C39mfzZDVXSzxSYYwhPbnEzibFbn6pTF4tyYt8CgTpTa8nnksaAnz1b29zkjhT7gznghT22Z2azyqDL",
  "key6": "2KGpBGD4XyFw4w2eisQpy4QniMVHKwBv247uki2DjdDzn4eDQiFWJGb7HKn828JozgZuKonNLnzj8qUAyx9kTPds",
  "key7": "4rxrGfmMJgfYUM4j9jPMe68o2x4TMhXnTrnTyMQquEXeFDvHWHqXHKAvwJU2FFYj9HUFndeBvdUdHZcXQ7Jt16xc",
  "key8": "4chtJ85swopcpg6tc6S6fcKe4JURhKTXiSob3xd5jXT4TuDC8iA86A3DpYojmFzGyUHiK3aKC2cwV9oZcAQaku4p",
  "key9": "2qBa19qFCR2sU4C18fXTCgdKQBBV4VWaW8Cpjv6oMYjH7QAWTwPyriJ2vhQiBH42pivMJ3oWezWvbTRSmxXMQENR",
  "key10": "4cFTrhqbgZ2rBvxjDaAEWNDywmef7mqZ3pxX9KxRKg91j6Zrm8QnZXmjQKMH7XNHQHN7K23cXC7Pep4nByWxcmeV",
  "key11": "3CcXR32VxX9jp2xUdKnJmcCpiHSbjoLqb5SqpVvyqUMxgTheamraRcGWoiicDVZmz2EG4fFwyAScMpoh5SqAJQTm",
  "key12": "3GJSLStKQ7htkTSrjT8rnHifVQQzXbiVqW1WeAxXy6UJgmaukXuipRSsyJv93PUBqcGbSc32yYVAstfYc1gNzUcS",
  "key13": "2DVNWBvEodhDtRnDTxu1XhEhBXyURnsBW2wgk2pGtiA1xhrUTnJSEHCNWRKWNFBzzRuXs8E4FryeiuwF1vQTobtH",
  "key14": "55SLuTG66dMWTHkSmstbDhE8wRJTfQGLohQn3KyFRXpuBa5Q1eHKLKq3BcyexniLiTmUd2AZYgckVqf99VnTUD9w",
  "key15": "3jtjPEnmbkL8YE379i9dFvpWms2gr1MmLnkSSDvAp8wBmmSEacBmQ4QsQvS9xpDEBpMaA8N28GFTdbb2MTZLan32",
  "key16": "WRVYXA3tDrWPTKNb88FYGsGGnHvQWYq8kJcp78DubDg4dcLuKa5qbADsARZT4MFqBnCQewJ6iyzUhNyZzZsoC65",
  "key17": "VBzYQPN11KM9jAFmJijJg1vQBgUr8y3cvT5nwWaTACjEEMqLWw1B2LWnJsZS9ymKJM4xTNBgnLctQYPL7MCNMMz",
  "key18": "5Xoj5UVCwVJtosQW2kbaM4s9ZVDRQxpBkznPbU43r3vmrc8xFoNGwNMF7wXC5Ki8em7T2amUU8jZLSTx7TktAKp",
  "key19": "54avTiSBRUxXHZLv74msyVNks6Je1o3X3uxbHZQpxTxmSKBeH2rg73G5A1kGWt7jerkL91hMQn2VQZwXxiHEMcta",
  "key20": "4V5cqYumZtGkYoyss6GSUZKPmqw7SMyS7jwixWHGn7zj7YGUrhyVkXstGdZ374JPyLqLA76mwf5UzfoFhccGRA61",
  "key21": "55Wre9b6aDNNDgtmZFSTaEU2Yr7uwLySY5mFkAoA7FjVAPPsua1byTETFLiThBkC3iTaxWu4EBaZCDabnbyDMmNx",
  "key22": "3RKtL52MPnjn4hWC4ujH9hpSPsKBAQmVwvfbtZ8WauArnUvdCMY2LZxaNFYZaN1USP5wc6YjQkr8TGJ64SDgE7ju",
  "key23": "2p5i6drxpyyHYSxaW7fXdwZA3ysheh9p5nX7NCyQGaWCYNZgLb61PkhLZCwrVKZW8tRSqvNRPh35hY6fT86BZ5xT",
  "key24": "5jDQEQA82EfuastjjkcA7FQYJe5PaSPsW55GC9XjvwgZTg9RVtSGJ8rFUNzECftcWvSis6bveg85gHzLVipK3k8T",
  "key25": "4P9mA2GLbTfqzgHWE2cqVyZTcp1KqFqXbHDvi4diPNejREgUZ579Kx5JtkAPMdpvaZPUzkP8wcyGt21VPct2PqRL",
  "key26": "4fo9eU1DUmjqc4uQixMTkzkHz4jbJxAdwmHh6Y9tsn9g4WxTTq6gsSxC1CbMPWaJ46LC9ghhLyxMCba692sTScZp",
  "key27": "3V1mnyHDLw5VnupJKvhSc52QE3sjZZCSW3g2uZ9DZcZLEwk56aahaE2M8SAxjNCnieaC1Y2W13iwHnzrGcc4ud7Y",
  "key28": "2YVLpEXeASdnhkZUYHAwVrP5oAWZy9KXjGpdXnj8hDThFgfkwowHhHJrPTa6Uv3dQzoFmDmjBwBfxgyE2uttS3m6",
  "key29": "3gfzCVvsETgHyLwcdofaqn3xToxL2n8Cv2QRpuLFEXwPkiYm4FngMSUSBkAYdutkWu2dxgM4dP5vBuPft8x2qtiJ",
  "key30": "4oXvyAd4qqhMWHLyJDTDFKcqLkXNYjG92gVRuQqAmuQjMHAfN9mVFBfhAWX47R7rUmi3B25WX1BnR7EkN8vro9hp"
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
