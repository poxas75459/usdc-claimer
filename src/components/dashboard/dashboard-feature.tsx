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
    "4xUxknxwETzCrKRWsfuvZ1XgTxDVakWj17H9ihwofWEJrb7vQ7kYUivJWZzuc91HpTnHZ2PLue1SdC3Fd8nYQWM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gn5EXUaDkpLQHNzoTfcJfpBqcigr7aG8jc522eZDRwJZ5FcLBdcGAzUosLWSCNFiJWvNqfywRjHDPTZ2XsSyJNw",
  "key1": "4vaZ8MV4vSHoWteU1o8zSrrkidmX8hgMAzbBvNy4g5GB5kvmVpFmUzCX5PEzgRySWqJeqE3Vpmr91J69HTPzwAsL",
  "key2": "2Y951wAV3gupss7VELbbwQe7WPbsuYELzSBoQPWJknQdL93FgBpFBzExQd6Lc41EqzHC25JiDvGhkGwesb87S95y",
  "key3": "KbizWFoKwhEFBfb9NN6b6ipWrurfxWsAkb536Xfk6duKkhTbFR78S7WyuqQMjLnLhE1RfrLYwSmWtNa8gDdfpGR",
  "key4": "4qzAqSEHa6EEzJU58jnrvuxguTPV7dbyjVBT7n3xj6R13nsoRY4D2mqbMPBYR986Wzi5QWFyWUftQxJWgZui4ouZ",
  "key5": "5sZKoMZfcH7KYMC6s57MRUMPTQCesVDyRoNW7ECsVsHwamRA5dwpPqHpkEXkATQxFMjHDykVoGAeCTNph6LYWhe5",
  "key6": "66LDXbxDPC4dtfC1nyFTky1f9DTATbU6RGDGwmXg4DeLjBspBQr6aajZCCBsADdWk6rDMD7KNhUpPnLqcYiWB7J",
  "key7": "5eYvwUnefHNEtnjzUPSJopTryr2V6WVGihGsX752Achd5Z316VmeUUr13DziuWMihnSnjY8ahk2Q7jwGaCKws5Rd",
  "key8": "j7YM4X7awNV7pWcGgMTQ8rk7C5WxYmpS48yJhXHS7x27Wugtn78PKPiNyF5Q5zKETn3FcRXD3bVCiZW7b7DbRC6",
  "key9": "5vuHoHhNXFBroj5oqCV8MBGFjrPam3rc2NTEaAiGwzyYhtg7dvUVrkXaKgawXW3raNNpkJNYwSbifH8Mhzt5LUjZ",
  "key10": "qsZS7GDMiypWjNB4kqihRK5nvogQid9VJGMGs1Q9rQkotwy49m4GVzSYMiMPXR372AwYQBVLVg4XnvWQ9nF6ysi",
  "key11": "352ovvZHgVzmV6bbubSh6gT945iYWS8mPxcrRbBWEefpXKkVoJ5M4ktvGEcaSMfx2bvBVaDnkf45MAarPY6L7eT3",
  "key12": "3nQ5rkvSoig4omnk8jW3dt3VU29p532ogCQ8Ku8g72r4VoZrs12eqNTMKAJ5Q1X8KAEdehmYFkX6sqyeuZezJpX1",
  "key13": "42fG2njcenXPxSifCUaXtD7bWnde3pTaNqfhVwSbJpFHgPbC9H5sK5umCZ9UbLi9RxMNur5g4tZhQosKUcwuzQsd",
  "key14": "qLsSV8sYpJ6hqxRYqbydXYhtrzFWyByH39cGBaoygURqddE2YD9mt5QbWQuT7VvMWgQofVU9hKorpDsoGNpJEus",
  "key15": "TWGqdqtcZmjY7x4Jtws42zXSLKJz6EXJDBnM7DKDeuLhxqLHVxiJ79zp73UZY2pP1C9crodj73V7TqpUNi8E3vR",
  "key16": "3b2qfdJrkNWp9U7u4829zjB171MvUShbk2vPyibUzTLRbkUnLA4DdRQ9NnnUwtBEPAWm8u9otQsrJLGbJb6BbvZK",
  "key17": "5hZBDzPpk7W5SsHdYS9mBD112GyReoH8MNM4uXdfDjRCXdaHaFKzquC1eYrvSFiNARJ2ZkRbNQjBb1nGR9zNj56m",
  "key18": "47f7ioX28xPbyaPFX8R63Xi8fgqytoqymxdwrivG3YFyMwDjQgx4g6ebWS15RkS5pnrvJDbb4Qb7NF1A8WtBpV7D",
  "key19": "5uFmDkN9Z7JcWHU9dJp8fjAiwMFjZ6AS1zDy6AhytDvMyVQ16X7stHvFUYZCrmZtt6ERt372CUB82XmjqF3thhQj",
  "key20": "66MZgkKmDCSZLRLNxRhhLcJSbbgXxDHWR9FQPmCdeaybVxhdSy5NvjrUhajRtoT1oNMYjgG3chZ7shQfM11gFxfc",
  "key21": "4S6KVp5AUYXdCz4dCsyT9qw2gcbvCvDA4AzNZhEGsjiuus35qjCoqJr5xFDQfx76ZNd5bzg1t5hqCjAX1azcX2uR",
  "key22": "34j3KGNb6PiWGzrFBgTsPHTtqEiT17yAJi5vvLubd9XPU9JWfSfmiykdLzUmzuvJZqHzXyZGj2DAVHbCiqeDnSPb",
  "key23": "2hzsBCMJjTJ5wuy51jt9LrFxWNqX476dZKEt6oNzMBk27WqA5NipiaXSsQB7m5pM4Fy8vqrvYM6E6Mqxk8ej8o5M",
  "key24": "51uGj5qT1LzHFctpJTqBedHA1vSRAsD7TEcbt3HMPhR6gWx6KkUcGL5Q3kRXd4jJdGFeeS22ntiWVkQrj4uGX4QV",
  "key25": "zx2kReYnFxFPdDU4mSzeycrPKLVopdVVBYzj9b91f3ySzxTyhvhSoA4FL8AAwETiPxqEowYfBKjm5TUiK5yWxa7",
  "key26": "ZJervLygfWqVT79jpLg3CnEAc2Vgkqr81vNnzL5vMF7z9sF39mdGDH4yxGSPYVj2KuprrmXdjZvc3Bt9yM9MFHL",
  "key27": "m1RXHdovnzDYVB9CaKa2JPL7d7aLZ7SoY1ax6mir7GPTbUgu9wzEChYi9M2u17UYufRHutDERFm4cLHtpYWb6LB",
  "key28": "w8ewAyFjmUHSEiJCtMTqxVh6asB7ja46QEeezmcBGrAeRwM52pVrtLq48EtCgdN8bdKfTK28TZ4S2kmhLPeQLc2",
  "key29": "NH46aMa43CugFUd6JNt6dTofVc76YuKbifqpMdGYEQzLdBWUH6sa1zvVMy4suqV3cGzA8HbcCZUNNZiGvMAqk6i",
  "key30": "3yszR9FT5b3a47dojBPA8Whidozs5V4tFxnrFJYfmoPocPD9jhAExsU1ojx5cQdgLm6R32M1VSjZn7TxF8Nd1dZV",
  "key31": "qW4P1PVFpMhRbShReRQtkH6vgPtw8uVZnuyFemmRQWcF3xTThh4jS5PwR4LTi2LZDAAe74c95UbJRooMJS622Sp",
  "key32": "S6xpbLbECCpZL83S4T3V2pZdMbbuq5UYJfXEDXkFZvTCc6u5LkQRADgW2XwDCmUBiMutWurbeX9KRQWU7k3D6Jk",
  "key33": "4ecS7kxSnwcMj9PQz9Xh5Qxo53rGNb5t6xUBH7t3kJURqJoAS6NzCZFkJExG7cbtthb8j2aTcYMNEf3Cu8MqQeAC",
  "key34": "3nFmvwkrSaXUbyS6FnzFPvcgQ4M9C4T6KA57AcgH8VZiBxaRNHx6RYRKTLTR44ShF5tVVTAQGqgFFz8t7d8AQcFR",
  "key35": "2zEZeVmf15MEoFHTdu18wo9TDZXgeLs3Q33qjiapavk6qDNLG4LPGSxCpEzn1fHDtiNjtzUKcVjFbS9K5SeKt6iD",
  "key36": "57faZsk3RaKv3GJr6XwitxXoYNtyy2psWBTY2svcuj1bbZWkeAobxSYmJP96YFhU6mrC1Diwt51TiFCPrHTn4PHu",
  "key37": "2YjyAuLzSk9sHeYGMthworNTCmqH9wkEgb455QMh9ksQqesvqRb3AzoKMXp4z5BTteVkiXDVgs72R2CWvUjAV6rT",
  "key38": "3byJdtJqrvVxrBL9vunCQPjuH3KPyzVCS5WwSqHtV2z54CEVQbkQv6wnGtyKJ8VeeWgskmfJbjyskSQvFy4wcWra"
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
