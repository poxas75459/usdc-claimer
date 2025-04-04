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
    "3Hew4VAY8pvNh2iiV61ysH47QZnJXkgCY2cNadnNhAaxKAwytPz1sUh5dqK618hCyUQC8uzJtdU9hwcsTUxZoQZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Byf3bUsMbwkShkvpa4W2db9RbNGdAvAtqL6hFJtJHGDwXXLGirm7phHZW28QyqhniFr9kkpYDADwWGYQgeqvBkH",
  "key1": "5VQyyR8RfYMc1qvCUDpEHVUVCnpRmEqDdcm4N9hbEY87WEXN9nJeXsPnqgFAx24zF98gRP2HhaCvuuqHNh3sawMF",
  "key2": "2EtpPjXzKnM1vzv4eLVR8BKoWMzeMp3ooEeE7jCz1c9g8jccB5h2iz1btGLLBeTeuuDNTWxLMYFZ9tkongRJkgG8",
  "key3": "vLtCzvzvuA48xM6RKko91Cj4a6bZ1pCxL6KPr4R9KV8CE13a5a35WYpjWPRN4Hw9BhjG9icW1uXdvAbENraQRE7",
  "key4": "2W3Je9KJuSfVUpLbJehsB8if4By436nfFc5z1zcSzJmYM7UzUdUYmQkz9KmFwWFPQqQwy7696rwqvj5DjpVnG6Ud",
  "key5": "4WRYW4qhwZx3FPA6GRXvp9fk6drQHo2iFbFCHwGdBZLJVbkd5BM2YTMQPPjDgZy4mMiyLSHdmZeT97JFa1W2SRbn",
  "key6": "vHaouCg1zaibQL4cX53PCQjNyWU66zuZD8prG4Sj8rhgUVpUe9butEzUX1A2rYWhevQQfyfZmLGHhehS4qGwfP7",
  "key7": "2yL9CA3ARwT2t8kGCcUTormKgqrm1RkNK59KwjnaDYimjv9JRHtHzYaKzvzrcz8XyZTqE6PPbGAyTou8DcFADH35",
  "key8": "3bQgBjzWzWXvGFCPr9YtJKNvAEt87Esas4E6KReWt1TyTajzmbSijx4yNonC1rkaWHd5k2cQePtjZ5jajxuaoy7n",
  "key9": "wa8FVsAvxvRM6dC3epTEJ9HfCKad2WVfuJ98mCnTXuYV1qHBhcvchw3R6TVpnC8PbR49r1PDCqLNMmGTmeMiQAA",
  "key10": "4spcfE9qTB15yWrDyAQBKPfkfTH9Km63Wi7Ba4qtNJJMdFBVz3d8wLMUmTiaR4ws9NryXqTUyZsnNkjT3R7hE1AY",
  "key11": "2o5ySuBh8eEM5x5jHanxA987qpH7SZbUSBTp1d4jBDmSkQBoJ4QpArymGDrQzFLvgyQ36hosBCQz3ucP1krzBX18",
  "key12": "Cm2H4azGUeGzeXdd3HiGct8xEZFW9BNHSGt4ijZAdhfrJZ3tRssrmDA5FvfDo4VKZu4e2SZzUMHwbiKXHVUAiDq",
  "key13": "5oLJzRkvCpj3jfDr5vd14EkeSBgFXWsECnqGcPs9BcMAga37AyoJbeEsoyDpYz7rXFxcamMbAiboiEyG15Ns94zQ",
  "key14": "5Xvv3SywJcVtpwHwzpQcsBbewJELJgvv59tupEb5XvM8B9u7iBUzNzstFyEwhXDNGRAqipUj7E4S4xLjaGKjfgwE",
  "key15": "2iCYrkcsRdDRNs4z9Xm6Svd7qsNSNPsZgb67gLYwfuJzzffM9wM3diw7v5pHe86ss6fwrFT3zGRoRfeNZJdeZ37x",
  "key16": "2kJ1F5cbHpxSFcvjbRJhXoLLhcTMAoeQ8z9oSrKUw6WoysuPKztLsWrwBH8CpEJ8zR2pUHa4YecYN2mUaGYjJdMX",
  "key17": "3k1Kb4L5rf6BjoWhn6dgpzfWaSAqLGe1rv7Fp9nrzZ7utdCxvodwwLjv58vuFVPGJ5WxD6UakJjiZQjaYKiaKHZR",
  "key18": "4KEMgVw88Qt6Jz3boEpchKkuHVdPXa3fQ4uk4pdovJHSTreDYRbELGLN39VUSJ5qgnFQriNiQpeGqU5SfxuidyUD",
  "key19": "KCF26PAzLHPKJuLLE5di6tuJWFY8S4U6emcLsk8WNMhyMVD3yPd2dJ5JCgSmSM8MoWDZx6x9vwd3vcpSAtQKbd7",
  "key20": "KnoXtqTpbwgUmGvtghTPPnKDneTDavZVebN8mMgLNNSqmvmQXUXG8AJXoPf4Z4RbrqfZpZc6bcfkcQ26gYwQdvn",
  "key21": "3ruzPjptwpyPQ4EfWbUYTFjP2qpZnA549uZyuYPDFyiSQWwT3BRDmqz9q67Aqa6KmEun827fw67FWzwWDWjswyHZ",
  "key22": "z7EPzmX2qzPjV4QkF45G8QLAGxEEcyHjLGNy4uFLws64uJsirrvkLttYjvQFBhkMTTQuHFJ1ta8tR684tqwudv7",
  "key23": "5mpobD2bzR4yCKyQYSTZB37JCMG8U1dz9WKfocxpwMgVxEpcQzxPgr36KEnfWsgDCgn39icvopKHdDgamBXo9mLd",
  "key24": "5ca72fVYkN13R6YjQnw5LgWBWX5brSCSms3F7Lj57QGMq79JjrsGmg6newZQksm8XtHec5Fd6KFPm5EiBaSMJNHh",
  "key25": "28FSMCKdM989yTkXC1C4kcNk5uPR5QVRWa7toGDUimP41fkfkPsx57Q5HSJGbZSyG95jACTgNTGK4Jx5QE4HQLLL",
  "key26": "3tN6dfLbEUwbNDnD7kRkVVx3xFqXcQB5ayH7hv5vDuu3zk8sWsnVH2Frs2GQLxQvMxexXES9mveiFXJCkEL8NRoZ",
  "key27": "4C2RATrqmSnCfSboFN7F4nu7eWmfMKf9mFfD1YuBVy53Ls284Z7g3tWJNz9CebHyMF4VK92i64Jwq4BKiwC7TAuF",
  "key28": "8XuM1jvhfcB7RtFeXVm3XeJiPuLaLpod6XAZ92FJDbrYMQb7WuNzdJjk4F8Asia1WkTbG7cjjW2jWk8JzoBC3PJ",
  "key29": "677aCNfQow1f418bvrnnEEtBWSxoeFuYN68JbB5wczSJ5AC5zLQhdTF4e5uSJsoEkzpqyCbamk9jUxWBLy9Rt3fM",
  "key30": "2PAJ1uKHbMLGeTBmpCK9M18N4qthej3pGyethsoAz4BE9RnzUmstLme3ULsiH3Lkv3rWuvgfkSevdKbGUr7F7sWS",
  "key31": "33vcurGiPGTdSEHXizgUAhhSppimmcteZeSHFXmb3D5fzaahKub2cKuJetkUNCetZ8U5DaY9zm9UqmjGmkfFaKtj",
  "key32": "26vh6BTCyu3u7VAGVef1mS8mEoLv3fKjh3rVt4onunYS95k22HMQEHnXfGo46kbJWBjDBtbU8gF6C5oqFoeZAvN1",
  "key33": "4oGM7rutWkAqeDp7N3MSPLAwSaQi5b9nasWAjCBiWMMZtQ114WEGbHSXRqDmbkVppECCC59Wig6QqWcJaWDt4ctG",
  "key34": "26AUwSw8Umey5w6cSGf8x4eMLMAGtoDy3hB1DaSivs59oYmZ6Y8CmAwZo6ZsLnwxu4Nsqega1ryhMXgHNcVcfNUf",
  "key35": "2wxuGj6WZMS2N69chWxcEYqN3MYga8ucfPLXD4M8E3AYAHsEEod3YUvRACE2A3pDp9rbkPjFvN7ZoA17sWBnnYru",
  "key36": "3V7aamxWh3cp6zMKjeQC3tfyP2kCGj5hDu1eL5hgwmhz7ZJs3gdyNV77FwoTeqV4zzvSp56StXm9VTx7hbwRu98x",
  "key37": "5xcY1qLRYuNshzDhzMXU4Bc7Esd6NTXk9H59dk8yzDeg5HwGY9yKs4jBS6VKU4qzhL8RAYRs7RE71wfKDBLUxdnZ",
  "key38": "5Coxyc1tNAAk2yyDfsM9tuo79X7tk6rQQruhin8Myiva1KWteDf7du1SVhozRY3epxFBP2pUZKyfk9h9dtruHfUJ",
  "key39": "3hqXq7k8KRieKUAmRgSTAwNbDvnM8BdvgKe4CRPW5Wp6nvKXoyn5oodiryW6MAxNMEbtsE14x3MvufG57dCTbYe1"
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
