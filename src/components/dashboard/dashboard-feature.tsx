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
    "4oaQQQBRwDxv2dHvDs4G3KC2j7pZsy1ica7sTweWrqtDSkcnqPxvcFMaqPcBZTVtaupdwoANbCSVzDZKyERDdM3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z15mBZ4GSTkqgeaj82cJwTPdwogXzRJSbmiQ3EhzNPqq5nPek5T5VL1qhE761kg7We2uYfmmnrv3wHRKcD28WEm",
  "key1": "5Q9DmermkYfZNk81o3Q3ETWpjQPfGM4vAhnCtLrp3BaqyzBia59FRPoHf2dmeDk5RLQ71mSTcjFKYMuN3APEACVd",
  "key2": "42dFk5VYkN3jksBm57HE8cdrASFXjLSn4BsK6TzZFreBiZrDMRKxY4YXB4UFrsegm4AXZm6D2cfknbBFarisCxSD",
  "key3": "3uD9DSjvQSWtgxURnZUNZvBTu2uWD6ygFxZTRW13FuWzYmDC9ruTEC9wDyoH7YbZkXx9MBA3U3rzLFLAbXVDAhjX",
  "key4": "3SVmCqChBuc5ZYdAfszDYJPhX1mYRrccatULjM7HevKjYuaz9kb2e979zazGXtknUtV4utVBvJfo7iwuK499QUaL",
  "key5": "3v4yBczBNDGY7dUxWJgKv89wSvPWjSQauLtYm1EPxpQ9JxpqeUQMaQSSYMN2353WFQ44kYR7pyN8C6g4Ls95KQPh",
  "key6": "4rvJRngLBeZTvXTZqEmxku1wDwCoSz4nCiuqCHC5JxGMWegvoioLNEgZ8QhPkJKCtTvzu9DjxSYQJJBSPnvqSRVs",
  "key7": "5u9Q9bKm1NNpfEgnDekPz99TmVxumgCi2idah4TFia4U9ab1KUqhzACfcnBguzvT49Nz68dtRygZ2v864pAmQAeo",
  "key8": "3QtctNKWxej225KGpTpc8Cn6H1HMsHePCguQpTJBqxmmu85SZrjo6Bw8qgSNwhdXG54oZXC2Myq3JTskKZ9sBfJg",
  "key9": "3wR7BDATyk9moWipp44ScZ7cPEu2XHut2WNXRyH41gnQC1nP1i794Rp7xb8p4gFvZruB8jqAYCjHiswQcbbF8tFP",
  "key10": "5YUbMnWNxe1jXYRm4c1PHwHoSQLy4mWWEyd9yDYoZa72e5ixCC9J49ruS3SxupRxaQchoVBn9kEZck5krr4kkmbn",
  "key11": "5uJCvPV8AaB6SgwRE5YAJdiXw8C9Tqroy84oeFjCtmjT67ETNcrJ3oR9nxWi4cZM3R6ur5YcdaXKghxqdeTeQ2wT",
  "key12": "4SzdFWSr4NfEAwvQqnuHJjAL2byLHyNWuhudz3ntXEhzCo5vrEu1H96AQwhBYLqLtdxi4M6nGw3sLZvwuV7vTr7V",
  "key13": "tumCPPDkU4i8a5UA4qDsastp3fjs5GVCFiwbJRfD2AgWL42LJXgppMS6gcKm9Vu2aVJpoUJFM6x1wEzrgi5c1iZ",
  "key14": "62rainsqGVedc1XH4r2kymkJSDSKPV9t6ZFv5psqxyziQsCh4dFfUmGSSe6PPh8WiA8o65A1doUGHztCpL5yShSz",
  "key15": "5P7qa6Tijw38YoX6vSwUiFQmZwvyPC2J2wPZ8xyt3m9CRPXD8uAkv94c56FoyWHom6YPbaJJqMP3NgydJNuRzYZR",
  "key16": "4FiueK9UAebGNVFdwkij6WfAw2mKWupwQfoBiKe6cmD8KkwYYgqJS4ae2tnp6QQyLfVyVq7tXaZuQQzzuV8LzVHo",
  "key17": "2fR3cdD3L22vnjLJFjB23e8X5jBsidWz1jbfmMZhQv4iZA6YmsJt9eEhLVvPS2tXXd21GApKwen6aYuw26V68e4S",
  "key18": "5N6NLD4qFc7yBV4gffb9W5fLEFonU9ccKrhHThF2VpgTodhx7oFk9zDDta4ruFPzg6pmDFVnsb4LGxZE3z6wp4d1",
  "key19": "2paaKouFZDTgsqchKW4MsPGYZKqYeguRfuwoY8oHvadc8iLsAxZaZo5DmapHdLA6SUFpwXhNqEMGgYBLPryG1na9",
  "key20": "25Wn9s9bZLvHbDRQRNxVx5vLEbPf812cSTTHJ8NM6Azn6NjgsHRWUL8JKuBVmKrefvCd8cGJeL8XDSh1CjQc9DSN",
  "key21": "4RbfBpvv4MAm41rL7qoUYjstyDMWC64SApvqVH3Lg1wxKAQi39xNmDYuUqvPh8DcFkPZnXVxNnyAebn7oeKtpaLc",
  "key22": "4hXocG4Vdg3FhctT28hg3pu6NHgs7Rk3ashNwvuD6LKYJeK9JzSf8Pw8XAW429Yyuyx9trq8X2PT6vfv6otE4DB8",
  "key23": "55sFRqArhZcWzBxUAsSY69zFtrEciiWgaj7zn82W3D5kmnRD3sZw1dzT16VM4eZ1ZJgC6hYH7BPNmn9TgebctWRf",
  "key24": "3hNswnV5q3zUiX6SehydHPiSMoM7n161saxgtxKnT4nJQdRqdJK1iShxdTJfybd33aiG4VP4aB3XAnYcNZGmdLrw",
  "key25": "sTXGwN2HZXT51hZET4wYdYdGXjP7JhuUM95FqMQiguHduLn917C2EGS3ZBf8ing1rN5W7ryCn2X133hZhU1SAcK",
  "key26": "26cj1HfSQhDbRs2KAUd6Cbh4ELmm8RjHagVqYcjTKqpyE8m7M4AH3iM34s98KkWH9RYPkRPxWCETUPugTJzrZtE2",
  "key27": "3zXDGmUJpM7TLqj4SmPgXDjyE3DXePQAtfVSUzsCecp1QcwEYzDMrBhbzNnBtW3GPRERAmkEVTNucyXw55Ch93yW",
  "key28": "4dSNk4EqCZJmoqLkqcqqtZDMo3BUrj3tkXUvfawSWF2cJS2LbMgtAkyUfgrnuJ2v5onttMAbryfjgJYF3PkwZttc",
  "key29": "3K6dueZEvpVPfC1nCWmkk8schq97NgsHrfVLshhdKedLUKoABoYV6bEWbS54YoJ3ksJmVppoS45nSGjF7naBmdG2",
  "key30": "2jPEhqvuufKJoHdfn2x3euJTzUvUiT4SAaJSe7qaytmuU5fd2sZ2SknEq4T3xUUvhMFzXwLktuTNWqM1xHZqPKUT",
  "key31": "4XNovVH8VAaFrooaLUDKch5y4mGTFEnoj4qPhfF8uqEPEwYuQK2ZSvzGEmruA3AKTzvhiTJHGn8EWW5LgPmekoRv",
  "key32": "2vXFWrmfohuYLo5yZbjdznbV9Gp1zmiMUWbNbJKnSrV9EJ5XZUcbvKEPdDTBmz2HwKPvZNZELAVKkfoRgN9ptyt3",
  "key33": "251g26FgNPyJYgwDBjCKnaXFDRAo9nT2SYQz2sq37cFPZTq75bsNqHqs3wZ3y1NU7Z5MW8VFhhWRtznCfXM6roPT",
  "key34": "2vaYYCbGLLBWimmiYC3uTfyfJS3vEmFLJ4pjEAnMXxUzM7sFDzL2Ly1zv9UDwFTQ9Wwsuf7QPhMghR38i8rZME3h",
  "key35": "5Q8TcbQpDRhWREwUbVdBaN8ZnXAqeC7HXJ6aDYuc5bUYYgFmfYVLJoU1jSeyVLP4G5Wsz6fmTg2ZTML2kgMdD9Eu",
  "key36": "5XfCeh4PR2whQBekz6VvWvj1e4oGjyUEENcqZ5DzD8X6M7qXVvcc2rY6tRt4hQsH611cdtZGSYrzzvKx837cmckh",
  "key37": "EhpjsntT3JLTJK3VcJwYcgX4ADzy4rE6ZFZkYJNGMtJZJ2MXV1njqdrJFKQ63fKDm3XVBK7SFcwoh3vpyU6BByk",
  "key38": "5zRLsEn9PJfnQQnrTfVZ4rp4JekgkoL6z2nY4VZrSBHmcTpemn2FgCFRocgymy486TfCsKrqVUUMjeyANtuuBvnQ",
  "key39": "z48NTgFE3XxKbTb6PXzVbsmenvkHyoTV43c58CpfJhsf2enkrCr9BCVSJAfp8g34eSxfEXYkHg8RWEkR7AkWEXs",
  "key40": "4rqaEuPyn7MCbvKMJpeQ4SDZ9PevT7KJaWSguJoQLR2RE4uxAsSX5G2nZfY6du8BJQzm2n8HUEWdqQ87B8d1Az6h",
  "key41": "2RSwVV3ECtUQ4Rcpuj4YnQ9tUSnqizvvX6iXex1WiW5JHgmEgEx9QBYR4X3A19XpwPJQt6M2WrJj8fUxFwTkWYdi",
  "key42": "4k98bN2qHiEDvchpCJ5yQQu1Y6z96279XCWUZHWooh7uJvoS99ra5TWcrtnxr8dc2FUEZqvH2YthiaUJoysjxCsB",
  "key43": "3zcjivbDKxaB9xAGse8773HifkPhc7R93XfCkrZYhDTeLeShdncTSnxD8xpr382LxBV3Tzhjg1uJcWwPqUb7ti2U",
  "key44": "4oo2n98VU64bdrihaiPR3PEpgUb1G2VFtDs67M26KAjFAfF5vcSTy8iR3HTsHMUhaqn4gXN8zaF6cKLVxD5z6RjR",
  "key45": "isdJnDZD8U2onXZh1omw4kLr67gMVebudYBfTwf2n88CXCZ12WnhaiDuH54nLf7QVzFRaPQS3y3M1TTs3H6avzo"
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
