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
    "4U3oRn42i7p6BZPmhotJpWmjbUg95LcCvB4rqS2S5TzoT6eiYcm5aqgDqo7yuAW6b7XCFAozphEeCxFxUmPcdEhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uojmXh1XCBMqWdLWMpFfesuD2ZLskxfb8y8fy8p6o5bzpT4nUPiGr4xnD1QHfiUyoz6NB55PdLw4Vv7kh5juHUJ",
  "key1": "2gUS9rYgQviodFFjsNMNtU7211dmqumuv1aAaJNapS3WwqJPa65j3XcfETufzsn6bRNjpfSFzi6DvsMCdbAXMqJq",
  "key2": "2d6p9okLKNpvRHvjt1RCei2RmMfDsCD9DX9PcmqYNrQGZ14QoA4DBm6f1CBiRhaNyvjT8MKBVTjx8MtoFLHabwmG",
  "key3": "2gRw82qM48dzs3dq2zizpMzmx6oK145iis1dPSTExFTZvzkPpHprWvRARxJ5fFXANLQg2o3k53xb4CXBMfKqym4d",
  "key4": "2h7NkXJfjLpqdA4LM3T6AcBK2hVFerV9ejVQ8p1NYEbmsFpDE4gtCm2rh7yBGQRzDVGkD9dKTizvKyBbyGgaRChW",
  "key5": "5wDMmF3sJ6LuAMZQh9dXbJg2XjKEwWBJHrivwfAPqpWvw88uYFCzvvUgoC91paX878vW59XJSxhCKoHg7YEUrsX1",
  "key6": "2Z21CRVcMf7tgrkeAy6D3Lum2EU67hrozxPhMr547nbStHdh4XWD6aQ8PLvvacjhRAyr9W9PWmxXcqRvnM4Mbpgh",
  "key7": "3bLb522Ev14GKdjUsMtz8cwW6bcqSh9cp2EAfThm6LkzgqWAQ9VNVKUBYXwS2BuSAGdD8ZV3iEaNhQW4SJJGTAcz",
  "key8": "xHpWz9SP39LovZbiohgk6sK1X3XaLMJr6JvyZnxQKR7dG46A9pjKPi75RSU5rfdohgKcC6vnUdyKca69F29kUxt",
  "key9": "2bijn4avZAavcdqJof355HHvCSSm3KrroSH27sCoubD9o3jHgYfLnmLe9eLGYhaQodHKh2u7ocWTtniAgREtxvZe",
  "key10": "2bXA4aPuYXH2B55DRh76wzA1tmtyG7uZbnocVEX2yb59SqzTGTugx3U7RxNVvQu77H5v9n4DJcwS2Q7zzMP7KPuZ",
  "key11": "51kFBwWVSxwrL7enoHszXJobLtQuhJbwTmD1sF5jSGXYnsYUQuVgo7cDH8yhzgGL8t1tfJcB4vKNMBkxee4FF1Rs",
  "key12": "XTjq3nsDC73EQ5FRdeNc5FUyL7PHVLaxSmvVaWAvuidAybmXoNouBu1ggrUTqL7Viqo5xHGUT3vDffLBg4ueYnK",
  "key13": "1sm2RMdLeMFPafzGrsPbFesmkqCCXpgoDzzMv4m5r73ZPQnCPRGw4gB351nHygRygwZo5uAZm4pQzsSZk4BuHoo",
  "key14": "5871C5a1sYxhJo59JegzmB26StuJd9dGnevrgqoLLStJGTRBtq2hz4YcXxtWB7cKmSpVL4rU9uYrC7jYQSknJvRn",
  "key15": "5wSARiJ61EG4XBcSX7WUwwVorSsAAWUnRW9FaoaNcjjjb88B2hjGAiS6z2GyW8bQiWY3EZDAYPzzHi7VyTkLTk4W",
  "key16": "4BtdX3ELTSuMaQyyWYJxbMec7uL3HyS59kmq5RW3de2BSA6wh5SRsy8zYpbYPno89hM5twVaarauAmDa4o2NbPST",
  "key17": "3n2a3BiGuR1g8rcsHroLmwPDLjiPE8GdktS5ynVGkdeNgWoi9u3huN9JvAX42xdD3Rv1Ky1hTMkpFg9d7s2tBqhh",
  "key18": "5eAJtrJZcdXp9MaY8hRZqF6EKjie6vrobaNqKZqrdkVCk9H1XSQLk9uh39zxUWtkaKVxtaT6Qh7Np5uCVK7S31Y6",
  "key19": "4hfgHL791biRjoGsENKcFbXdmFwJaZU9n77UpGdBUrN1qv5FbQ8JdRuqr8veJykFDXytqUn9CAW3USvUX26JHXVu",
  "key20": "62uDtNZHzw9cNNcqv5MiEJaBJu9cPfwx3Fa7VFyHYPTr6HPH5wf4HPrNPZVPsHnG89eE8fWG6oGLKyfCAHoR3sJk",
  "key21": "4t6PQVAtcqkp2CsWZLgRLUCw55y4pAUR5zsCUqLRsZ54qVVNDgr6a6ZLujzDB2vWNypMqUkfERpBref5KXRaw6uV",
  "key22": "gDL5Xo27iX4dMzehsHz871o9TBdWCXF4bAmhvpGJrYhvskmk4aG2G2cZrYpuhp1p27tdnjmxcp31b5YVNcDAfVU",
  "key23": "3DQkaTvXbX2QYXJrNrA9BKMfXQTtM74oeWGLPgTHgC3zbzWsJLnAAGMDPGN32QHcrdfvcziw1a4EW7VUy49wa94M",
  "key24": "37NK4uVc7UjhPdjKvDuX9MX5CAevUWCgfQNqNtuXS7jYbATqQWfNg4tAzMsBap8dAAVCh7yH4V8pFFoBRsogBLLc",
  "key25": "2ewQHNDZfjaup9RgVytRr9toZcnDU1DY8YJuG3JZjRvwdMGKTR9Pw53QcvSntN4UjEpGSrrddji2f9cFUY1WJfJn",
  "key26": "4xgGxjjZfJMeTKMveSEwGq48CtjucKvi2i9LTRm1myZx875JisgTRsFRnBJHVp1r9w2DSEkK3AqpsiXdM79van2y",
  "key27": "5yjKef6M4i2kWZBi48i1kpyDXc2kGHmbHpzS3fHv9LXE4SDGDeSSJ3uNfK4ZVTzfTxVoGJbxW938cAnZhLcdJPUB",
  "key28": "5cRLqAHy1sEWRy4TAH9R4HktXEWFbVLCh5BRn3dtV3jE1zR8D2ASSgX2vbzYkq36wQx81LnYRET6WaPZTyZRrrJ4",
  "key29": "3A9qiQPBSxuEnY9U5F2quDHRxzHtFLWQjMmUAiBYQGFpnBdXuHDcsqg3rFnjg8aupuriH2MPTdArPiVuJr9UK6SX",
  "key30": "4X3JQhMy5LAmgKVvf5RhdpoqUNX9sZeDySaRHycGde362zJCfBb6JaKhQfrvs52SgVBRHpYg3L2gDfGUstQKbRUM",
  "key31": "3GLdqx7R6gQfrr6HMeN8WSwSbuEociQeXo9YTsbfyswUsFXnbRqkvWdmw3bzJfqtjsDptCVyXbDn7J1F9dwSWwX4",
  "key32": "2dDfVDRFVaKZf4ZC5Zo4uZCnRRgJSh2bWGKArr1qGTti3kJf3NBrtJ3kinWvYUBdX1Tz1VnwLNcrr4kghaoHjMqJ",
  "key33": "4RjeLHd7hNrcrtw9aHoPqYtNpU1zfMYVYo5PmHrJph6vcE7pX9pSVGEVMyuorhuDuJKowvxJQyCmSZw3QjUiPcqk",
  "key34": "CH2FPPhi2pFbxCUtp17NqFhG3QZgLT1ptYCaxTX57mBBdFxx5gCgLmnFeR8bZ64kiMgxBJ2ZiCVMTmnuVKZnBrS",
  "key35": "bwXHNSEekCL8EFHEqXEdhhop6pV2dSeuNG3LEDgJZwi9TK1qN7QkHTZvxtfcDjBpxCQtyNZdvBfGhqRrn1J5hn2",
  "key36": "3CWfB7yJVKeb7RcEZKNQzC54nJoKvvamh1YCCz7YhVSpkCuDFcXTEUiNDLRceLinMmUFuxAgE13uvQgzDVF6rQEZ",
  "key37": "3QTphzutpzKb2XmKpHqyV6xV3FR1CRYc5GHWCWoR27hw4Und2XZZDqj95wNFSBQjj5xkuygS1zMvv17M2UFoFpqK",
  "key38": "JWRTz86bJX2Dm6Fd7p1gPhibw89vLim6sQVzPaRtt27W59VDrm946AtzBgoF8fSNi58zCmCZKyt8oUzzECUJkFR",
  "key39": "53CnXAmuqsD8jVuDE6w9PD39kUXjqa9ReTsn7V3BWJNF8sLNC3C2M2MZHQYLiCVVAaEY6gfbbUMcqVzNxJyBAjgg",
  "key40": "5iBGUTp1bzEQ294B4DipwmAkRRP9n85oVaWhspgQtamj8AqenWLi3ugD7T4gZVrjABcNmKW3j4Dz2mtk9JVyDVrL",
  "key41": "3JWaUgX56i9aUMVyHgaTqcCJ2vHuVrwTCtv1qiVzXigPETWfw2SnD3f7Zowy1F36MvMfT9L8Vo6qBVRbG5guiCbC",
  "key42": "3tATxiv3s8d9z9N4chSQopx3ghffA2ffWn895wqtDjDMDJWwSC5GN4iQdPp6qSwNmNDtXC4vguF9wbZ7UfDoupBJ",
  "key43": "4b8xTiHiviDdEn2aKLJpMLpvrvUGR99QxqN3Wm8CVQ9t6j7WUUnCxL9fVUVVb7nDMC3qXvaNnddMGfL4ZckaM9vv",
  "key44": "295cV98ogkP4t7ryqgVeV3eSXqd5yuzRa4nPSqd68E1ktYEz9W6s4vcsAvG63jfzFYZGFxsPUeQqJdQUPPiunbTJ",
  "key45": "4qyYXAubPFHx78psVo9js27BJZWey1MDbDFdBCX2n3bP4p8E1p13Ve8rZF5y9uG9y4WfJQ8YrnRrVc9FGzSpGHX4",
  "key46": "2pbsDWgsQRs6bGQwQcbQZu6wTR7dYKzGneZUdq1GLpdFetsJ6cudiZqc6oB3PH5ZuArhpz9E2xLXUz5pyLEP5d4Q",
  "key47": "N4XeAsavDiKnKcv9Mtp1r3LWLpZ82qmRgQmtBvkS5KeQWEBXMbkYFxaghn22mAwUq7VbdVbdfZ4tjBcu7d2GbrR"
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
