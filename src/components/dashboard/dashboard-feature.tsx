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
    "4xUVYnTPubLr7NC9JCM6PUtxEPhr5iC7v8S8JhrhftNJwjjUg2wKC3886N5XUpTY4aH24zbuVik4kmszbuqrHAus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qSjjgu3ULCeaUNdSrEvBGsfw5EzxoWj93jafev3UoMDWRnoPYHnKb3YkqYangJa4icZRZwzXikrqbMUcXfFa5iJ",
  "key1": "33jcAY3jXmZDuTawK6ahtu2SwUcfEjZGyuKLEymd99wpRopMH9m3hzhRA3gzHUowFkLgKKfL3FaekAq4xqPV4jUw",
  "key2": "5S6whvm6PY6aehqTNKMaDJAo7UXP2nLeyxTq6trD6DTHLxLiDxFyKEinpU9bgxiP5mbqtdFaZQSXcm8Axbz3nypi",
  "key3": "8duaMD2UDTbFd9aUVt9GPMkHxLQ7B4weXP8C5YmVcsFZ9bR6YdY7X1MoGp4fuMSV5pMuETj85HU7cZh7ncdLfQu",
  "key4": "hcBht9DtkeiFEorj2ruNTBX47nu6huJ7Vb5PES4aMtujwpbneLvURUMs4L6pponWTbTF9NEjhxZR8rNx2ftNhpD",
  "key5": "Vok3JJNBKhFbenUNo4mMQGpFrVtginjkeCHYHFuTfDeWpS1znmRCYhABXPGUP7DtWMKRPJbb8mu5FTrwnEvdKYK",
  "key6": "t9LuM8M9iv8gZYG6GrVo9uNmrd9N2pMMNSzc1Hsnq4NEw5QSeqT1DZckTW5vF1v342ZV57hs7XsDcPYjwCxa2R9",
  "key7": "4AcquWZJY79aa7R5YPxZmnNWtS3jFXUntWVGXz2PPvDHgUC9XdFSVzLLxTGC8PNY5QG4urQA8Kccfyv29nbQdjWu",
  "key8": "31QXZ5SBDvoGGMr78CEA2DhKNykAkUoXCtecku2vdous6Y9mLThVpvSLth7udApSA5jiu6PxWvSfrtSZY4nxxjDT",
  "key9": "Ane52MTEpZUCny5VyshwSQx3krtAHQQPdKcisxxXZ9c8UTMxZm5q6MheeVxRVTP8jXtLwXi2VTnk1bjDPfxMGzx",
  "key10": "3FVL3FxrWNVL2TKKPXYrqspeTeEnbs7QDMxp6pvUEfzpLm6xdgmdTNvXQURJqG4C6Nj1BH3AvsQSmDVRvxfkvgm7",
  "key11": "5SXkiHg9khsxjKNA1dpSjCzwutYke7N4QLX1KnEQXxHiQDQQ4rU9P8i7LDR8YDtRMwWsHCTk2R956XvqC8jmXS7K",
  "key12": "2XmMesjzyDivUzbj7HZefqjCs4tmpmgRgwZNaRJ1crWrymfgHQY7SnwJNw1bqX3fcEkovaUpLz2iDiVrXXWgtYWU",
  "key13": "3Krim3fpe8N8Syjm1hSZesPiDtmDWroHiNEBWgq8JiyVssXEpPxA3inQvryn8yNshu9YYo6oJrfPBeiwMSL8YVJB",
  "key14": "2bJftE9Pcyg8AeaQBgbd3BYXPg1KFiauwBkALrcoATkcFnMrYn2BN8izPGEnPdBt2J4PBeYAiZpL9wZMgyM6W9f3",
  "key15": "2WukKeKKgbcjnuCKajkkD2zaG1VrqZa7ywgVmAKaZn4eaxQQz7kfEhDLmbZSum8Pzcbht7ZZx1ryLjuWtgUcavMo",
  "key16": "2hKxdVuSUmmhrXwybXkYtQhAiC9vp1iZ6eCeQjeX3v8m5ZtvXwfL56XF96WGn9Y7r49mzyQFn2pCH8kq2GKC9kni",
  "key17": "2LVpmMPGACodjXistNUkXXjVCWpUPqYZBoeje4HRVZ1RSFqguaTcDtPvFH5upGb5xyEvyYxiWvkUvgf5h3GFZQzL",
  "key18": "3E3AJADpjJ6kPHyDp6x1xdiyQzdQyy7zHHRDVLHhZWJvwQPXzPsk4wSjh3hGJ6pDiSRtxWxnXJYnmWYEVPNtatgb",
  "key19": "4hRnVSw6BXnvKML6BU4QYAswr94Um141TAWR2WDdSoQrzEnYfUuuMQGCFjnA4ujoB21ABwR2VT7eXWegpRYpZrvs",
  "key20": "5GScabjbeDEP7p25ttHuDHf9uygQreqrcZtzeYRLepF8PmNm3zvNY8HTWg2ZpMcEm5c664jmaRwrUF7avwA1LANF",
  "key21": "3zs66jhrveKLK3dddJyPtD5anwtRpRJjsaJuscaGMBVmUVpAtwxeACNXXTRQd6RmaRgJVBvZYCq3cb7M18ydNf3o",
  "key22": "63m5uDF3Wh3Mu21Jc4aZbMnhmTAN2X4BK4zymQqB3aMDuQNv8DfjJtoW3qrc487efGb3ifiBBSeVB24yPnq5Rse2",
  "key23": "2MHuuggXkHoWk61DyZZAR37PFGufvZjuhvYUiMNSjSVsaaMZjk5HNsrgcCU7BnqBkjbgTHdcVNUun2QAxhA792ns",
  "key24": "59syEb9pWKvjxvtEQUuWWAu1VC33t3e6NghKdKzuNZzdY6o98mPU8RfcNyDXVAAVLQWp4hxvLQpffDMcB1AHMy32",
  "key25": "9wtv1cZfSiMovDu9FgPPHfv2oS3nSvvPtVBAMCXeG3vAwvEkcpbFcwCn8b8qP6vCGKgYCzN2S5t3WZrskPfzX4d",
  "key26": "4dPv36yuZTpVXR873HEHRFkrzJz5GdD6yBbu1pbaH5pAfXeJBwotQRpa1bj5z3WQ9jTgYH1TpkfKwvG9zmyvnAmG",
  "key27": "ZzCbqxcZXGuQ3RPG11i31AfSievA3TBzomJJJeoySwoMPaFfx59NkXnvQDhq79xXkrntXkv8vjNhzzmHZ7QHw5x",
  "key28": "3bdqMSzagzFhpdvNYxURWPVyyNmCMw1jxxJRf9eYAknGHcRHNsFSGcptH9AbYYThYzixmkqA8pyEVLtjzE1VWPzh",
  "key29": "sEHxrG1DdrFQoxPvvUkDakDT2iZnGA2T8cbTTdD2bjhGiCEUJzXHLBaw7sEBooRSZ9BEozpZvaG5VkYcw9JcvAd",
  "key30": "67EeiS3xWiMcqdaxN39mVnSZ2NLK4Cw8rWHrFEbpBQrpZatZ2YkQ2JumagJComAi3Jvd4aPDTKnUgQRquYTneTxe",
  "key31": "3N5hMLBEpTum77r1ctSqzKUonK6QSRvwoyTE14d3LbVBSTxVYvBc5prCzdJKsgKafdsZ7GFC5GMTrUWdj5AsyX2T",
  "key32": "3erpsfkujZsZMaLSxs1kTwTF6vPsQydkW3VKDM932ZXdeUEAhNbdLBRSvm3SjadLsfTUGb9YqX1XBWC2nPo3mCS8",
  "key33": "55MfccShpU5JLRpwRohd9c3pmDGAZjp79YSiYs4tdPwjcZwNgAUzVUR12QnCqMaLFAvVdp9AmkxpMg5o8cFAFexC",
  "key34": "42wsAdUjnaoxBvZk8zeSgsJEvFEhwz2QhgtQ7bqwstvEuTERySYqWF2pSsQEUUJBxfdzLHe88jEs5x4xp7JoZy81",
  "key35": "2QvSqRk2Zo2wmn25Tzp5DZB1a2JBpnLyrPEksa4cXZKdmDRYHSaJnfssfQcKVbZQd2vLhnUkDYafRjp9wdPs6SMD",
  "key36": "4sxVAs39LhPuLwu84hzrFSpdSV8KFhScdctV4R9UX9ZS1C2ez7VgPHvR8uzNbpVAZDXMmczJeRj6hpMmNJ54Hmny",
  "key37": "29rRed3KrsGLM2YFEGTXKnojuWorf7aenuWd2Y6nkGXcsR3LzAVCoPK4ew6noCce4BsTASXvFT1AaSq3MDee5tA2"
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
