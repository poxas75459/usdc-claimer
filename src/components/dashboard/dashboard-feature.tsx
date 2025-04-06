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
    "2iqVJqZQj8o7ocniPBKGtgXLCHsek7Gi6jK8jZds7Cx1VymzMMqxPPPJvfePQMGHCTGvdPtwm2tkv7Hvhskk8Tm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QGsvvxmP45qu1UeyzXWTYW3DbkRadJyMosqDnGU76kbGXp3yGXvgsPDU48N5okvQEJfKeFcMeHHaBN8qxb5CiQC",
  "key1": "sVznJW7GQQGJPeJ5BxvBwmhGcXH9jwp7xiTaYcpaLwaAnwRPyvyj4Wk98fwGgdNjzN75P1SUVhyVZ4oyL6ZGkwR",
  "key2": "impiwkQJC7zYFUwb1n3WZzt9ztSVM7PYqrcviqK35hTVN4dCNwDWrpVo36TrHszhwridvJJFWc3J8VPW19CFSvs",
  "key3": "4CLrpoMdYVQB2po3YK81kZBzucYxmwEhyfEbeZBLVxaNpVdQ4c8dEXjG7Jsuvvad8JgWhsUohEtKvyUGzPFuzfn6",
  "key4": "21i4xLvUZkEg9KSLAT8i84KWR13mgrpvudQw4zyupur61SGWJFmLr928BNbCb7R3LQARNRNkxpuBuLpGFDdyc2E2",
  "key5": "2qVrsq56LisSWESLTfKs3LFycdyyh95G4cQLngzA6SnvyPiPuENhoaP99K5LnquJTfk292Y5dHL6iCets7Gxeouz",
  "key6": "4ah87d3nbqZ2ShBtNJSo1qKRhxgWLc86Gt9fUsUa47B5y3BHtLvyjWnpwGbtUbDrBwP8JJenTNyJVJfHpQzoSy2a",
  "key7": "4Vn1C2uQYUfAcWyzsEfmPf3oq7MYATWbTQFFoJHMaAmVNwrAYg9xFNREh9f2RsiUXTMzUTuaDNa5tpCmCYzjS5iG",
  "key8": "4XZhgBc7B1y7FBF8pkUitNWMPsDzrXa6Ktp4Q7S2AEjdKD1fgdJ2Tr5HiqhyoAutZZiMinKidwtBaCHi1ciwDMC3",
  "key9": "4ugQr1yRgdQp22YivzQmNTN4fpNjDhrcjmBzQwYcDurdvXPbnymPmsGf9Y4XzsU6FnGYWw1E6tAneDbKNv9sX1da",
  "key10": "3k5UN3FPvn6wk22LKJRTCV4XXYSSRcpFdW1SzRcP3yTgFPU5Mtvrxuoxij5orptFyKD91pwGob47F7sCr2QE6Q9X",
  "key11": "5xkXFBLvB1eA8w5q7xnbs9wqWNVeiYxpBxbczsgjSKofRgXsurk8XooetkeaA9NaviwoGFZ9iCLgD9PdS3SY4hHy",
  "key12": "4vY5zgEmmD99bVPUJrkjuYw265CjraFQcbTgoLfrzsEBTivxVNxAe6pXvkuPLTjyBFBdMXin6kj7cbsDTjmEhHWV",
  "key13": "4T3Xg4in7csShtCgTB2DczHdR45MxvTH6u7ChcqJno5jNrAHeHDEkZiktY9M3auBhFn6ZWQFjidLbDiVabtG7eGM",
  "key14": "4w88BQ8p4DzCL3z1B9cCdoFw1RAjsXetMwGs2mDxx6wsz5g6EKeV45WLWwJo59NnDA9Y1q7h2Z935PQd6SFtZ9h2",
  "key15": "4RynANNLZ5zf6JYoVvoRsvgRuEejacv5SqPmeVtgc529bDkTA3rXBu2m6oPR8o5TG8fVUiihNM3FEsej7xZ1rR9G",
  "key16": "4ig4aJFouzrisvFUGxCGv6isGwatm6DQ8BknozJEKbn9egbBEkaqtBL9dtS14Y2J1qDGRsaX3qBqdHsV7ecR2Aqc",
  "key17": "3Ac2GZdZvT18xX2u7PdVAnMcZFQZYugoExX1TpsmWGZmH7TS8ADJoSM7XhFAxG1QwG8NF3xPGmQePyTXGk8gCXqp",
  "key18": "2YjPkd7iDcefhQ9jFaUYKyGQdirYbn3HLpZifqg9JxNBRQ7sQ5csY4wJNuPCGnUb8BExdpUo5Ax6rNQrEoErc9fM",
  "key19": "3F8Kazu7MQxmykXLayTyqTkQ6dWqV9GmKxK4PT8V8QjfLW5rw35kkxN3oFBcPDVLHnZEGbWWXhYRYDzTDTezfDi2",
  "key20": "2CHhPEKeZBV8nmwVFba3AsAoeY5TbEsAHLXJWtMebJqYK6pQiTDkdrUX8omS8ecNSrs6uTnnxhRn2ycowqU8d8EZ",
  "key21": "5juBq5UuKzNDtvDT1y9Ry5kGkxSTr2HHsXum3yGSVzLrFiB9NvA8U1NySbq4ay2GjLtao6hmXjE6FsbJ7kCcR1p9",
  "key22": "37LhLdS6bvpRLbwmeTRz8TrJXrcDeqZ3ry6hvZ2kWwU6bPFZrBcZd7munGKNj5cLvkrtQzQRrq3PigpTpJ2WidwD",
  "key23": "4eiuR7DR2UBjbGrW7VUZU7smhNjp2g4cLmPdxe2m6ETFJRBx9i1b517HMFjqXJAJvPHmCggPDPh9t3TbsfjJQtCE",
  "key24": "5tF7UUSkcQAbApLvZrF8fq4mvK1N7JKkMT8yRCTQw3jHUYu7aj8dVVM14dkuFMPfPqyTHZ4V7JXw9bSyTo9NKBkD",
  "key25": "2Wst9S6CrsjaGNsN4TAuqh9K52dnaYEBwEDneMFfv7DBCZkGE4cUvQSBz35AmGzsvirnTdWT1qNPicJrB6tboHkG",
  "key26": "2UNUAPCG2ccw3EPuZEAFjV4hQJtDn38waTFZ1MMmbY2VvFHXm7ttQJ4vQw1FWjd2awURJX6soRMLYPxAmkg1AyUV",
  "key27": "53kx4Bg68mY3T5VQ4RkuXAV649ejGHc6ik9vgJT9Ew6NPHBubuuPsJZu7YByA5dTYscES9XQPfQQhD27RnQcesH8",
  "key28": "2uRXtF2ZvvcBtNgWuvCwsz2XgkRBFvUvBXeQ1z21764g5BxV1BxM6Jyth84U7jA1jWtcc2KRLmkkYtbVprWWxp1N",
  "key29": "2HJbuyWfMnBXRrCecJ8VXgvyC8RSUiQ5wqw5wUzKkutdCuyMzqmfAEy2XnLs2WKaPUrkttwGXzizLqod9i4VNSxo",
  "key30": "24sUHVR6SP17r6w65SbyrmU2WG9Fe9BjuiHdsJgp75cyTxt9RjQgLycACGPTcyfWW1XKYm2SZu6rAufQGbyxSWA1",
  "key31": "4vQgbqESPMEHvji8Zu88aqMgJXX3EvztmarKiwgeN4tSCnVDHnuk3JqXJGz5sPsZqv3evHXcBY13b9FX19w7yzvH",
  "key32": "4avQoQGMHRa59BWHxEkyA9pDwYBySw2BZZKFmJQSZouU81qkAgmc6ACq733mutkRsdG58688kr8kf3MxgMPQkuaJ",
  "key33": "3PTgfdjRnnuh58wkhyyL763s1GJZYjktCquJxtsoqp18e7ACKD1F3DJWG1SJNWJSuWT3sN2z8JMvKan6sbompzA3",
  "key34": "5bCwvmR4Z1uVrEBubfhQAX6nYjg7njtvyi1BjYPUAXixzARky44N5t2a83Ptt75Rtj8Pdu2sjmG4hpRvnJ3Li8TL",
  "key35": "62JWRBBde1GUvSLoXkf2wrAsnTrM9UvDmJg7tK27XzaGSDA9j8trdaGwGVSGHWGqagh2JR3FhHcHS2JNmNCD2fMz",
  "key36": "2b7HTGUVPjc3ZyvpJiS4y9oSKLKqM6ezkddZ8CMKbzqrx5t3viav5bBuUXTUjw7h2mAcqPsWPU377aNpBg1aPVdW",
  "key37": "37EWvnCZRdQyUDuPsAS7tKMNBiUaRATuGfqv9WzQLQiPb39i68VcX8TyxfEci4DcBq76R1642fpEebxHTZVqkaqJ",
  "key38": "2hXTnHFvoCjDrHH5i5PWRURumrHK5JgKy7yFPEdtCz9ZVobffyjAZnvtra5rcVmd9E88QRyU5g3X5twxCpT6kAFL",
  "key39": "613eMgHyuAgq81znZS7L8jW9mMA5mLiS8ELQAaSFkXgEdjruoXKdLdamimWBTdD3mck5BjChpHV3hnMFoAidMeT6",
  "key40": "2gwZ6fR78MjRzWuHeBLQNUKrszzS2Uw1QD6AaDZ9GgaSezwoQtVkYrhwAMokGgZBJJsLRGVjp4G3RkZ1pRoFkDfL",
  "key41": "5xQbdTT2m3iRWShbEQ8TZon9ADw53AtbNp8vHVqsBnP2FACWqWZewCw1Ds48pqcSbMFMyihGcxH4d2PK6ZhMuhBA",
  "key42": "4UHKCDaGLTaH5trNb4Jj3jX2h3xCG47utXEssQXMz2VMqvQsz7bSfmNXFZqHmEaS9jPy1ptV2PSmMiZ92EaPmmvs"
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
