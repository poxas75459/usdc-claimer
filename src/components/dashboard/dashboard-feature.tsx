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
    "36xkCY86iJSeru77bvAT8eCKr6SerAL1ZBGT58MHHgqskiLpxNzDuNtsebDXVUD7NpqhY1QxPTXqfhU2PiSdAkhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ojKCqfFM7zAaNcwdAjWECX1yh7FL6Lp9b1A8vV9uFk4NZMeE5GUQ284ieumeeGBfAM9ZY9H1kv93Si7BWQfbwpU",
  "key1": "44LAeGhy6joVcx9pSKkrNiVBfedCJiWB264rZAxYhVDR7MggFymHBpYdHCv4VHLRYzKgf48zu6G3J7K16ejUN7R5",
  "key2": "2zzuphoSCs2F2NwJCe4WSt8Uj6Bh3pxXFeiK8MP3Dnw2FT5qu2rxxai5uMtD6XgpQGAfo23LXQDx5qf4NBc4WDCp",
  "key3": "DJztuFZqKKarQvpvfpB6E6PAnRxJztkj5q3oMo9xXZZkm6gY229GisvLx621cv9xYhCXVXvxTWXYKPPMpbcCfWM",
  "key4": "nGhGHw6YLYjWvNapkMxmDh4k1kwEAAPXyD9UZj3Z78crUsVHGMig3gomamqap1PCDqQsdR2LwmZVANKzMSr8NK3",
  "key5": "5YPKA8hVd4gHYLE1vrmpnVLaxNWP6HnY6QvQjpikQVcy2fnfHqasjoy4QrdU6tpeUJhDC7TfGuWUjxLUJStrYRJA",
  "key6": "5WtNTb3BZTTWMo4g8rpbr4fheJSTG7fxEG4toGbBM6yxsRu5ci1HgBBtB4rmsctzkXxyuXnd9Yrt48JfD6BFJL25",
  "key7": "2Nsc46upFgjz2xrVSJPY671Ssq9dsLEULq3LHzwyBdFgWUukZNbquRWzgNdfrfLpiEJvEBjLN9DxusMmp85ZjFvZ",
  "key8": "3PBeHPRSDmMHLfUAVqNpMS1KbfA5rPtqV1fgoafzHhaiEQfedkpzgFqeWZMChTa1LUWP5HSenZ5NEDdvqL5aWe5S",
  "key9": "61tGC4hNjbCsvhcoVK7Lo9TdTyWE3GZ9gEUv99mTKLvvfobQxd8MSUUBhrEwUTiLvzczSwKvWmozzAapHooRTWPE",
  "key10": "5o7entcsX9VJzEhwxKjyD5YhF5E1KSHK1Gu9jsr8uVbNfSWUkkoR483y41Az1w1LA9GAdscTh1WyBT7MH8tq5BRL",
  "key11": "jdBC1BgDLqjTR6gCK8cerUzMywweC5EvnaXrUgfZiUAusWC2vymKf37X3rYMxNumyouH1qMXrEMkeQMbZmrJyV3",
  "key12": "3PqZdFMko2Fj3QCKGH4RNvv5hGYz6G71TvtJnnFLQoWzHWR9ucSRvW1Wq1vLwv5rvcFNST8upePb85fMd1M85NZL",
  "key13": "4ALqFD4iUfhNg55RLvup6MbFGRjmtMn8npf3QtKr6ig3RocMssT6nrCiXtj4qyVqrBHnqMNntZcxxgqrFNFvbwyY",
  "key14": "3yf8QaZkmWReCRES9WXyjfYwPMqr5Wy999U9QmkAifhey1VXBibgMhKbgL389JDCkQfBnkHf35xUPCeHXosmkfnk",
  "key15": "SQp6ACJwa4QNrw1MjYFCVrKyb1jn9BW9cFyhnNdtP5v84DoCHF4a7oYQXXDG3vpG9tno5g3ZTwKyvRG6fuPjGK9",
  "key16": "n6wF9MCtZeVyx52Cdo73Cpj5F2DJpk3xL3SakPqE5HFW5rwCBTvzTe2h6uMgPiz9hmr9uFZURJM5ykoCymo6z6s",
  "key17": "59dWdrVob4UQRumWiFHSatFeqnfBd5kD1GUoAR27PLXgQpT1WLmAKPk7rX7drBGDp4BmAhzjk9FJv7H1a4dsUBa1",
  "key18": "2ogwjXNGXrKY5GUUpXR21vffnnkkLwFaYWDYhfqQMTUoYoxsnhPc5yqUqEs9VfpFW5yAJhR6caiMbBghqzCnZ3Tq",
  "key19": "2M2pHucZvs2LhU9gT2GoeMNuFLiVaJpYPENC8zAijQcvsMXVyjo6U4YeZVVusqvhtXSZ5suXoJfK1pXy3iShb7Jw",
  "key20": "2Y8cQuhsgCAamNukw3Dt8LAcSPUpZcDn1kXXS8wjD3n7qqcoS3Z2eNvnU1gLiy47XL5msRxDKmKjCuy6irCtbyuo",
  "key21": "co8rV4jaUB2bHga3a3bCTB9ifBFPafeecfMcFC1kKrcoDw3TASe48tpVfs7La7KC8yUbKjrAvEGob4ohMdAMVG4",
  "key22": "42S4JNpCWUXNBd1urB5XA8eCDEKLWTMRJLMKvZDHdfCWh542BmPpEjeY6nEVwPNqjHzpKnA6qgkVGhyaFgvg5pYi",
  "key23": "2daxm1UoEPZtdHZqrZ8n5oCP7GjANWECVM44kzsT1P8J4gR1S1R5e1SDCDRbr7TAwZKFbxYZKQiQ1WTJU38b1nd9",
  "key24": "48V9pwX6YLJUTznsJ4McKpkPsiErFJfnQwbNhu7czgjghe24cf8ashPe8RVS5NHL3HQzbhUd8iWpK1izxAHrLfCs",
  "key25": "26FMetkVx6ydMTPiepyC6W9Gnjb56jBuZjW4pXz69DKrpHvffUuNwAYTBSwqL18jvCSTt8gpKLYYJXRD1NH2xLxK",
  "key26": "5PEuD2XmCAG7rpAhEDhMn4eRozCyRUY4QK4MadQ6iKPfhNuBJYA8M3SCnp9D1uGFirkdQRwcj7Dw7op32NQ4D9Ry",
  "key27": "32ZDDCBRaypQEBpUKpHYsu489fPddoqP1eXm3GrGvfztRRo8E2LXfYSNgHQzQRopdG4ZJwwsYZt5tZKprurAwTZF",
  "key28": "3aTMJxxtdAJLxm9gkh7GbqyqeFmEzz3583q9KEbFBDFnqqopStbdYHaa27PgQ7d8Ne2g5fEYsBnhE5hVkaSn7XX2",
  "key29": "3XiTwHeuyGz7Wys6LCJxiqZa4VMw63knVPFMsZf7C8zQRBJwYY4qUVV8658eikpG92u1BtmTFHzrPPmYB2LSkJ4t",
  "key30": "4A2c79cFGYsLQ8KUHqNAW7WjQv1eitFKJ6wjspU5kdrRC8cBGGPeWAjtdhXBGAjjACYAGKiDMse5fjc7t5XxS8Vj",
  "key31": "3X28GhAWgwJxeZtp6agvUaStTEXNTpUHRepUF2PqDeBPGRtuPMrWjm46WUmtzsrFUY6244qH5kcf1uhrnPhnoxDC",
  "key32": "21riunanJRNffbMNL8PWvFX2mjA923umZJFnAX5QmTnFZ2GsRzV6uWCWT2H8URRJ2gA3mL1ziYcUnSXanp4dFeyC",
  "key33": "3F21w9JcF3byyRu1WjRYw6sNkGZfj23gHQ8896g1EPPFUFNLiwQvjPjormhi1Pn9sDqYA8ksDaC2EwafGUX5FgFi",
  "key34": "48b1qevCgEKh8zrn2KXcmKXYyJhmpFDsqR3DobwoxAqrpWZkj5bSKRFtbgWj5efEmFNrGsfnzD2xYztcuHupsAxr",
  "key35": "P7tHA7JcEUG2HCvgwcR6Tfcy6XhAoWuqAym7V1f2xroZCGRNzgUZCGNMpzcWHMayHsB2ZppknKSjijSnbWciso3",
  "key36": "5k5eGongZrgVXBK5L5T2rBxHBkAtGPxLS27L8j6gMwkGKV82RwCme6GHx4wzMaqn9MTFeCiZPq6ybA7L4hLgBQeh",
  "key37": "273yWNgWXcqExEvSj2ZTqEior3pzbLeCZXKDHR9q7epFSeKWBmxMrX9CoiWEZ9q4G2PzDD1hxAmUnWRHfdhbM2jE",
  "key38": "3vbsyqJFfzUxRj9zN2Gg25dQLbTcHuW8KL4Ba8SS8MeK32V3qNVjwmTVxGWeQPSQzvZE7z8YmgJJB28kX65fud3r",
  "key39": "2FRdP6Ja2USM43gTeyxFuAvLfjgxRwyxcrazDULupkQyemukwokq16AnzHoJqZucixJUPoNTrqWnBbYkK3QVLuYN",
  "key40": "V4hi1U9Wt8NM5SXFyzmozXdjWuNsy7XWGSLXtiLqRr29KWkxNm3Buo3RCUsAfGxhas1uVWiG5juif4eLra97k32",
  "key41": "66Fig2Erispo1dkbKBBSwkCSSuJeue2dTmTmvzHLKHVJue3J46LFZg4TD9gLAhdDBnc2yRk7CTYnCTZAmyJft1UZ",
  "key42": "fELZRkJ6HhB5jPWoQRcFHfYPsyDXcW8ZzDYJN5Cs3jBtodTP7bJ9rHo1djKhEHLsXm3MctFNYDNJbd4wjgs76KB"
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
