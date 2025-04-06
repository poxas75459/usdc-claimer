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
    "4SbS8RYmpmcZCz8dfwA8yCjYWUnirnUucbkVPfw1kGX99CBuGkxpMqx24KLpfFyr95R6Fq7yE2UaENNHrcqLTAcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQgZh3FxdATJHQvEg9ycoGueyoMT4jq1a4vBBR9AoEotYSdQ2cWSgN7eziFqCYnijq4GbLxMfynqGqQBBoMZDWd",
  "key1": "3NZtRtnAXMQdYujUbVJfEvXFqSsj6XmaPTyaUso2qLyWxyFXEMG4RXbSgUafyYMUtycCTTK4FFqFp3RPu9uKWC7G",
  "key2": "5kPZC1dbmhoJHtAPUPGG7YuGRKEspz9ZK4baE8vbQq2QuXak6vYeQaavvfsitZUwCfkcYAxLxaLtTY7942JpXjaJ",
  "key3": "5TwQ6QXoXHj92P2QZX4uGzve5f7iGXwrqY5iRiwoS67JqcfZgBzGzs8hJT1YxQhKRZkga5cCuw6KksT7WZmGuM2r",
  "key4": "449yzZHx2dwaDmuhFnwZxBW8TyGRzUris62xwS9eDcqfC4MXGxvdYY9C3AdqrLVvgbZUKdjjfnQkSQcMyLysAB3y",
  "key5": "3jYk5CnrFEieBEF7LHMSfZCneKvcCVR2TS2CPgEKJNmFCEcv7754E2QcZRiMK5TPcvYJG1ZFFKPPggNJ3DjoVXPd",
  "key6": "xSVNXjqgR8EwnTE8ZmKuymhdR4yKqACo2DkjYuKCH7oRjCRr1fFChNN67AV2MJMxFx4sT3ydvXRqPVDMgr4BECJ",
  "key7": "22qhDRJdGjDacWiBt5eYj4vyHQiGC4dSQJjAAud6ePbWgJcxXcejYswuqpFWYgkJB3Qrs7AUaaAgmB9vvXnSMrko",
  "key8": "tH8pcXMaYUkxuW9CzNqYyq8A821bKz6bwYT6Jgzsgf5WpJVvg9SxXqjCm6txV8LeP9q95XXyLkst7QMej9y22uU",
  "key9": "2j7h9A7pcmXXXvtsDHKxvunauz9SjmZxyaB7Fe6kk1MgKpumDeZZZWQwjyJwKQeAY67R5benrKvYicEAVUUk72Fp",
  "key10": "3uHZPr2J3rxEfjQhnknZY6fUmnRUea6kYVe8cXKvjfo2yPbambJXGn9q9YgJxzZAWv12kF3uw5vfdsiWbUuk2m1c",
  "key11": "3wWyWokgk4uojTUrmaH6nZdmf9LUCSFX33mzrxEPsj1fWi19bDHx7uMYptAfqpK9rKGr5YcFTmHkGGZDftRvrzTF",
  "key12": "re22SWa3dKGkxmzJGDu3TK4JTmjvBAYv1nUPNWPCEkAXWTL39DWLNsAr5rRjB846Rh4cR6C2o6nztSjW95fuTPX",
  "key13": "5FK9eQC8FqxjQaZxirsx7NPt4FX6FqZdGzx2Jja2KcaxmhC5Enn3GwHaoVakX46tiBPt9dxUBc13KyVHQZnP2GXm",
  "key14": "3Rom3VppzeuoqbvKWzgdZs1vSdPREcPo7CdbMRxfK89BeeEEvwEorzFkV9oLyDmo92KYYdhP5MFyycmYvvPC1xAB",
  "key15": "TvXB8gHReNd8o2KqbrjwQQJfPTm455x6MiFGHB8Chv3rEYirpmhTZnJN59ADzMDqZyWi5ybcmtDnAti8vR84k26",
  "key16": "57twudB1ycjWQikwydo9afKfZ7eRwoUrE8DUydMZHBd9ZaGL2a8YUQgCjZCukKPFbsgSnFQAK4sfVzAJYH7WxTmE",
  "key17": "JsrXif39sVnmTWQzoLAxaBe83cpWNm1mSHbj3JJS23EvCFYtJaqJ82YKL8uf7ipzReABh9nDZuTCmmixdjD3nbb",
  "key18": "5XUVixiZZbhSor6ob8rHSNAuGdHEefMqyfseFPx8XQ5VEw82VWKiSpRY36K92SGVbPxxxLBwWvVA295b7zmFYQ1i",
  "key19": "Te4RWumUmVLPB9TRXRUYctTXEnz9D2V5msYLUY8gbiFMRyKJ4vZcVvtTssSzwE1cc2HUDQudERDEprJM9gZghbS",
  "key20": "q42LfbcJwNULLS4RDftKE1xwPMYo7QhUuQmCB3LjQQ28cVqXHvYm8y65xMwtVVnfT4rrEs9G3zAP9DxXAZ9Fdt5",
  "key21": "4kyn1EGZzX8zJPaipNtAt2re4fdNxc3xaeqDZu38VL9hMjM555r7ARjLMkXsQtuqnJ9EHrwNEo7ewjtJ7n7H1e69",
  "key22": "2oJHKBpZg8mwS2Y3A6HJdRD3dee2LFfEXKRB8swGszt6XL4e5NW2PU7qE8rFBjWq5bthzuYQrhB4R4Tk3p45u7es",
  "key23": "2fji8EosWL9icRw7Sm3fh65dAJhw4wiUfXvfijJvXgo9TeEW9ii5nnUSCHMRuoWw5VTGhz5W7DQ6mFMYMirCgM5B",
  "key24": "4HrCN4ypaE67FhNmr8AQd6VBnCK3TqxB56eXBuAqJABUsQsmMy5giZNhJ2tkbwSXDC2SeLq85SqV7xVrzCDfjmcp",
  "key25": "t6xcZy6kduao48KYWUCCBPvCMDU4kyF9ec2S6zeZDFF7Tn9b8u7fYECcHki1sWrmGDfb8Do17nb4u91Kio5fk8i",
  "key26": "4QhfudVXikiUnNcQr21SWZ8rGt7hjcwzv6yVqk1UScVVyHyqx95mPmAxeV111yUWF6fYSQ4qUbqmA7LKXtRMapBY",
  "key27": "128wYcvrXwu1U6BuBMKZ6fywWuytoNsovibJP6ZkDZYmyw2yFFRxu9mSsm5SeKondRBursDr1XCt9EerBqHYVbW7",
  "key28": "GxsestQXxsL7FfG37koLtAwj7FFhLZubkrcbtTvC7tmUbvJmacQcxhuZgva949jFQLhKYsgxJbLpvCq2Exen4mH",
  "key29": "yrysomY6H3NSvtH6f6TfNvjc2TfvBXWwaz5DxauDKfZWkC36hGqRBnuQgjxw2Bko7fg11eds3dPnX4dWsB9KSuY",
  "key30": "2XjkHxXzGYRJ4K3vsp6UdBRKf3Y5LBXPh23S4U7jCLKwMTG8nLTJaosJxmZGpGMHKr79W3StfvsbYqwXCFAuR1yx",
  "key31": "5Q2JeRKJPPwudfubpu6YjSGv6wkghtutZ5DwCdiJzjjkUTmxaz1QBRmT3Fk5dhKXT9puAYSEuxcS8e1ey7gi9Ji4",
  "key32": "5R6G32TbBXCJJHcCtoPNr1hLpgiM3sCXEqYfpTGRF4KUgMBwUosnZh9Avvb9zSrKk7bpjkLfJ3B4LzxUYdjZAsu2",
  "key33": "2tHb9hmTZ97gm8Qi7FS7xw4oikpuTVbGe4zGdancUv9penY8w4Bn35dQHrJb8bZj2hVXNnxEoR2UCXWy1ALrg2Sg",
  "key34": "3GZ39dcfuQviAwvQbbkcgfQdM3eNZn65Wy3NndhQkpxPqBVvzaNQDpndguVVYcyDhRHTjazvVd8koNbppZp6JxPM",
  "key35": "2k9BKC7r7o1N8hCue7VMrmKASDPWBRpvP2TV1KCKBnJNpQfm5DjThdZkKwcz3RT64waDsVSXCzGyb5Yq9nh6imRM",
  "key36": "4QRTPS8YPF6ZuQtafAdEGofisZyRdnrKsgDfsZL8vfShPfG4GSmxj73So6xdEVRQo5KC3jFRzh3jd2Ar3b3WcRLD",
  "key37": "2L6F3G2j9a7dQL94h8CU1r6htV96S24qLsL7PzCyPNLyTjbE3eJeqoxG8rUQv6J8LPtsAKqicUMgwQRG3DrV5P3X",
  "key38": "2xFNaNRx54yY7qwmHF71tmAnTZ7BMoaNaXEa4TDLYeApYPd93THQn2gHkaS4dizWRhjYSEC5pn7EyNnxAVYmM9vn",
  "key39": "3a7sVK4Q32yyw8sZjz4uF2pbCLXYy6fUwxTMAF4u1ir7b3EonzffhNVy16qyModuTBdWqdfRfxkdxesrqzZmDUCS"
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
