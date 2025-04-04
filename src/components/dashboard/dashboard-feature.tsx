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
    "3KKViTqKzFGYm3aDu1A3f1v937xPq3Z7C9a9zVqRupdABCXtU7MfbGY7WZ14UqtNQ7FzpStHQ3eUsGu6s2HBpntn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jL2Uzx7Md67j1AwbEWVuTwss12MFsHaxQPWM3VHHXLhJAZksFkdBTYuctr9SQ6ft6XTasrk8T6reGjUBmHQGQdE",
  "key1": "8CAR5SeSqQBKNSzZW4T6mRSqEX6UYsG4jbHEqSK1WosvfqLLgVBoXYrXJb5g6V8683kTzmXVgzoXJd3YLiuyYws",
  "key2": "2vo7dTEh72DU1YKVCUqhSaB7Zyf7Jp7xfNNTz3eiWrXHnoghW54x41tDU1J8sytxqNv7NbHkLtE4wWDWcZQVuL24",
  "key3": "2CXCmmuBvnZQjLZMSZbhbjTNSusfvq5r81cSwrdXjtMYTnyzWJFn82B5jB4qrmduEaRnfknXqc3st3D3J28sgDo2",
  "key4": "qA3nTvJZYLqez9BKGfFFnyLt9tyfpUz5XGPRVQSypHx3p58yyZLwwpJ5Jnp7SYk775r9o9RXzREamUV6WkDaZg1",
  "key5": "4bT7gEWjSKnBryGcaY7howyrH9ykW86YU9DeXbT5ckijRN92Cgvu64ypgcQo2QGe3knU6AT6LvMdSSvKZnJTEstB",
  "key6": "CntCA8Lq9ZqN8u5XugLJ1AsdZiSKAdgnAv4Vi9PvCTDnoCpP5jRVqrtaewiMYkUpye5MM2hXcE97aFZVCU9eP2c",
  "key7": "4V85jpwNVktRMxsFm3UB97Sf8JN4dJtPh5YiU3K9BfpexDYHU7w6PhjvgMFEkH6bjWUnQUPYp1C3Lrd9sCxmyjsz",
  "key8": "41UEMPitQG9pdta7JKiYpwTBfbY3ZuUKmqTFSRoG3wa6jok7TowgxMKpNxraEswzK4crBp2S2srYXeKH5nH4S4pC",
  "key9": "38wyV7Nef96bmYzPkTuBrpirn9qtFjkUR1eFB2kcpBryspXBhYfY7fKGY5jFU876YxN8k3JzA19U2bNxujPPVD9d",
  "key10": "5B23tzr3xXtbwzfNytsaFxrnYcpdXozUQXCZtGWFbRkEhsEdLuEDfb62MHHnHB6kcki2sAotPLfSD49Cyth8sPUz",
  "key11": "5dNV5aGudVAJf9Sat2t6z97kSCsFe4NYAUpZrqwVBCBNAq4Kw5fuRDx3ZbnVqYJFSmx3YAq6ijvZGtghLjFWWadq",
  "key12": "3CgZcy39kjha2gHCg6hdDXNmt7YohRZAbaaQxJN6dyLLy2Ab3NoEQx4NPUk77CGzFXspLb9j5oVDNFakdhh2Ro38",
  "key13": "4MJVvk8aq35P77RXGDzPoorZrVCab8HfBmqNNjQiKXT6UstKbA9e5kvE7SJRnuqnbLhGxWXbR9rcUzD1LPNTCxjR",
  "key14": "34oRVD2L1AP4brNT2f2XHn9fkUHJHzDLBYGTRf2r53U78Gv4KdsCEehNab5e5Mx9uDgDvegW6PJ8YCL8tux7M7Dv",
  "key15": "49ob4i5WutDq1mcUp1QevCGbEbSkiyoQ2X6F7X8HdvYKah9nzUbJJdzCMZVu2YduXJjLKubxqAuqwgQpjmjyxS7o",
  "key16": "34X7GsPkyxA8CPu2DrniHQF289GhmjHitSv2SqagFPXLeS3guv3HnfNFgqsRhCNT6nQJmTJTk6x6nv6KULRgbpCc",
  "key17": "NdjBW3ai4rkLohVWPDAFeNYrui4QjMzETvXH2Fqfvy8Z8pqwJNnjdgjmkgzkc9gjVzhi88NsXuyVTgwwBmATrWz",
  "key18": "2qABzebY4XdGaiViKdGYWzrjpDNNPw3NsqfZbXAacitTfQwimJLVG88RKCyzLZjVhuh1jK61A3ckUVnZ9xLrJyzw",
  "key19": "2oZjTdrquEwJYKfZicdpkX5DcymVV2Lzf5vrFfVFScBpmtbDodasnDsP5nWjJNeLHbzzJ2Earubb6puCupbdjxsu",
  "key20": "3oG4q2YGwip6eabF2pytRftUt4DLeiWznHWz9ycD6UwijFa9s8YMCNtmfXkBPagJYvzqjCkrPUfhz1qUUjq46gfD",
  "key21": "4rhCq2Sn4WQkBNz2miMAnZ9DyZipGcTo5ehK7XP9qd5zn8iWk3szZBMEXv3XVH7SUF42FbKA3hbojv1GornEhry3",
  "key22": "46MQL5Zh6ivogj2AGnHJhB2BWix8kA9nGaf1qbYke2MkBvrWfNmZW19g3b5WwtZf1MzL63sv7h8ocHPeH6AtaweH",
  "key23": "3PLSxtEJkNMk6dGCf3TFzNzicyoBe5uEnuzG3Fvq81rt4qR2gwTzX1yxEEdxhxKuPUcsjbEq6jGRUTLgxGRs6bew",
  "key24": "3Y6VSrhPrfB7xRqb3gF4FbjFyP9gFhZXbUWWDoUsibFGioDyaSymEYHM9wmT6w1uSP1vdkWNGxzU4FfagZNwLCYb",
  "key25": "5h1N8JvJ818pEQYu2jnv3dA6zJxNMZDehsMjVF6Qn8j1AiY35157fywPTRChtf9GiZNjno7QZP8QUnu9gCjuB3Zf",
  "key26": "4r5NKDMizKQm6XNnXa86WGn1msPsW5Us6SUJ4DMbrEmX89Sw4MqYL5WP39dWbiwyWFeQSta7f2NHrC1wbKyG4CvV",
  "key27": "3RtbQKZDfjaWQgDoYpbGfmwS5Xytwj1xoRzXK5BDur834FYHyLMZxhPJP2VVQyqaRzUsz516gEng1CkxgcUpvBA6",
  "key28": "45hou5Tw3gRFNjFe1LNdzwgPjumAEnshWyUbY3owBBspCycb3s8vD5cXN7VU3RfrHgBazWSXgE4ZAGfKWe2F5ub3",
  "key29": "3AekekESCrmCTqUsg3zZuKani6k8euMred39mQH4iWoD8eHkpUscbpGtw4Q5FNmeTcGvu5YQPcJG2ThyQngsJJpM",
  "key30": "2GywzNHcqAYjZnkq9aymMevhfDfSqyL8FyCp9aPWFNBcHQRuwHtM2JoZWG6zEyDgBdR8Rom2SZ4ugszUbLhVttVA",
  "key31": "2197y6a43f1yK6GYajqmut4RcJD4whiGNtBVuxPMUF8sadEHWEGSD9LnWYssbHmTCUwn5EF9itYaYC4K9ELPQHBr",
  "key32": "4dAvZZeTjPq9dnDcEAQsbKaeZgrBSbcke93szS3iewSPf3ctrXY3womBbpXen99W8TgntkQwYoMF6wiyEZVGc1C",
  "key33": "fhUGUzL5g86vhNxpHSu5bnXrnN3M8QDQvhtytM6x4fQjF2qHzKytDFu49rWpjSqtNNdCUnYz6ptcJu5G1QAk9Wm",
  "key34": "2SAsu8EQRqaxyP7rxvwPb2hmNNQhy6GXNFczXUQWcLDkeHQyen4yMKrpUkhMAXmzCbauV8yfaFZn4UmvQA2gRNQ4",
  "key35": "o5p5KWLkeZquabENe7tAFNBZSNubwttq8B1jr61ui3CqrXMpiH2nggVC9Er75RFTWrciTi8Dsty9xUSfNYPNzUu",
  "key36": "2aiDaLs92CahynRevZThgSNLzscdx7HQzRd54a9P5QsD3wNbuxKkZfoxZdRrFqC87x4NDRpZBR8K4v5cNw1EWSRq"
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
