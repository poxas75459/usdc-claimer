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
    "3oscnR9WjrRec7cv2PiE75RkZs1ga3owm8BFdJaJ5odJDZT6qRKTeFzknCeqPgLVxDdjiFGUZ5TXa9nMtiFYFMm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7hUxy47fK7YCtarVQdo9X9sRBqnFLr1NKxuBGEaoabCJamTiZPLqTGUNSyw2XgedowrqnfBnveUm1XQC2MMpoD",
  "key1": "45A2vkFCA3E79CZDxWMaFWHU8irQYGUDZPAQg2JSX82EFS58NYHr771eRt4gtJkkRjy1MFTJvUT5yCrBi1Bkv9zo",
  "key2": "38CQKcSCAxfJeRF7AJyinZd5gTHB7bnu9FTKopJSYktWtqgmT9E1nkKPrzTHk6bndXbiJMhJdVtwuqaLQBvoGG8m",
  "key3": "3sAhXW1s8YNLUNi6yQn3GeADxJegCN2CMk2B3s1CXZZKCWug7cGUkhytDet8ynhpjmBRsxKTHybUWPc5z1XetiRH",
  "key4": "5XBoRb4nafyySWbVHsaFtzozGcPDv7UrA6hGjw7JAtc1GDAiWBoKS9MfWUhHEi3qurr49AR5NuzwJKKywGvoHpHZ",
  "key5": "3ejc7NAM2BMH7CGj7Q1PKokkiWmAUzWR5Kt9n9VAecp3op3XztUxicKbeHPE6AYjAe11YHP2KUonVJrqEr7GnxWh",
  "key6": "2QWAqWGx8yLAoL2fjKeYUspaPRdsBuKug2tVDT7MovEhR1jWb3njNgVAi67ARhpBQkxtN9xrK3ELFhz8vqyoQ4La",
  "key7": "MjNyxbanheDX12TCnWL8FxhecY4WZiVQkA8fqJTkrmuuazs9HCuXsG8EZmx26w8yoWZVnfUrGnTk8YUfTtYgRkk",
  "key8": "CXzJwXDmP4ttGAU4G9pbsPLiwS4HRTXL9zLzYYwBJWWvuHWE9CZfqkLvKLmKTWmyuGd9yYDzfiqBJnqL5fvBG9y",
  "key9": "3kWvTCCR8CW5VvxVTgYuPcKPRCHBaL8dV4VWUpRfmxeLbmZCF23HutAn6EtkJSRKDA41SKzi7xkE7Q1c39bDEPkE",
  "key10": "3ZcGkM5yD4qgkyne3fjb6gS8hYxCTdrtTGSAjqyw5gwVtBwPm6vHY6CHS77rpHypFEHH7qYFJgrcKyxMhoA9EntY",
  "key11": "61tQLxN3be1b9LCKDaHZewJewur1DvnzaEkT8LmkcqPbcvDaXKD1JNsa8VSRSNSJiBqZmDzPd6CHnJCo6pnQrJ4t",
  "key12": "5ES2vfkdx6TkAwZnwZVmAi6d99tanM6vsfJQVLddD4KJFx9jDbXoNoFHKxVHvsaBPqdtH9hqERNvdJNGCaXACrZN",
  "key13": "4MxngZMTQQqQBZUtERgREYg6Ja2uSn5u1NWEg5qb5t3Tad57pBmNm75vu27TZzd9onteVrsYaS8fTBKHJvPPqGZH",
  "key14": "5QUEssW12rPWSAvXVDmwxUVLwpji7h1Mm18Tw7z93YjJJjM5rmz2dmu2fjXqwcnVVSXsyg2zXsmtRGBpyEXRmSZP",
  "key15": "4dWRHgtb3S9V2mLEx55EWCUwZ6aXo22CgBsa3oXuHTdzQuQSvnHZvJ6bydcYp372Ez6f6v7rgvpJPzUVPaMh2K55",
  "key16": "5PvAGTS7C61V6Ga3qzbctyuBBaZQTyr9LRUW6eApRkDhq5Ey2QGbjayXVuyqkdmTNM6WLpbtiXwJt6abPGBLYkzK",
  "key17": "2thQPyuUaoX1A31jZfJvDNjKrirnQvBDh8wtbnFyJN1Cit4qyHJuuga2TFBiW7TCmh4LoN6TEhX42L6WspC3VdRL",
  "key18": "4mAHQtPe8FL4YmLZstdJcvrBaPhecBx6p3fGqVco9Tdy9BP6dbDvyD5yxWmWoiRuYDS4E6xAL8TJW2kNLBiZkhpg",
  "key19": "5inCD3rzi4KJBrrr7NuzMvcSQLgALWbX96UTBvMXPH8oxw3e7HiaWgwtvJML1MbA6nEmiKZrgnY68Ncf4pPmDymf",
  "key20": "58RKFqLMPeSZMCTgDDwMRin7gDo3EELpQ5dAgQDdT4jH4EdJYGwaBYaZac4ZQnop9XmggfkuPEnYuK5iqokHEodu",
  "key21": "CBabZo4smoqrVpLYeZ3U35uqcFzWSDk3M9bFspTSZtdG2xnzDRQZcyQZ32HtVDJuvXTU76Fyqqh8wVdxzRTcmur",
  "key22": "2q54a4wpXvWPLXtyf6zxNhpTyWATe62GKUZ2Nz2rvRJLJGrtEsqH4ZJGn8ZB4betg2XxicAo4RVTCdh4JCUpA73d",
  "key23": "RbeVX7vjQGTJtRotP6AMbh1DEcLCJVgegFoPmWpD3SZvBY2aN5KNAFSgXEgbZmQcypdixagU6iJofDXqw6JYPLX",
  "key24": "53aax2WeMfD1cuRoMyjgtwRYLX25JKEBL3M1PdCiiGMM1DgkPx5CJmzb7CCpgtPBQFsaZs1GnK71bLfYnQg7DPqo",
  "key25": "5mqb6ap3HyowbwpkJpVwieWAjPCXbYmjoERK2E1uYr2hKdFKbDmJzyE4Xe2WJF7eeunALWUhyuDxK7fpNsekQw2K",
  "key26": "48R1TyNCVsUp7JruMVf4pgvtFVpFrLdqCQ3VSPSBa36QPU5dR2FD7VdZnNBoEcfZs6sytjLgsVZiCwDgTv7BGkrr",
  "key27": "4qRnPKQA85qUnTWSfowxQUSRwMyNYy7SYDjg3GSK7m1pwiKc65ST2eMKSBCcRaefp4gWGr1SSge7RnX2sRER2uzg",
  "key28": "3u7LMxRKiZULgvU5ho4R3kzovNC5nTxgUxUwd4mmJBZ7Xqx5wmvtoce7utqQdGrMjNyfhvfAfgkVRhaB4NunXSt9",
  "key29": "3sBKJBg79kTS3sHp7mzbK24vBjmibeqs3fQWmJpgd265kuf6mGbX2iyiVsGxtZhhPJ3WihZHvi6dWxTytwBb4ZCS",
  "key30": "48D4htE8qxr8u9SJvobwmxiRR76ygDuuyvZ7f1KvMXikKkQvzDbG5TGPaTHfkpRTFMEfNweVegt27wSBS3uWLeJy",
  "key31": "2WhGzhbxahDMJ9WGbQnXhx6rrxaGCyFTv3UYecwoQZVcg6dHriM4eL6jLEremtXmt8zYot8WJbfRafChFXS2LSPE",
  "key32": "55yKkHeqBe22z3vikMNaCLem4xffZPEw4fk47XpwvPWdaFkybgutxmhai1sHNxJwuqqGdJFTGsCeZ1HZwhLrf8k9",
  "key33": "5sWCEjEjmHHCatj1Gwxsrb6Av2fvt7qBgZatcGYL961hJZSXEHTSp8bB6ZfwXqw7zYmgNaoc5uyo9nbcUy7PgqvY",
  "key34": "3fg5QeuAeCtNynNF55ZUwn42XMJtJDp5RMVSRJexMuarQx8qs3eJ8rcD5UH8AoBJ9Fyyc7yWrDKMD9pjZfogfdG7"
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
