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
    "2Tr1MtNoJKRkKrwXArdN7XD5ozJCaLXrHRzdutXFNVm8gUAfyRkdrF2vJB9i5xCpsp8nFcuuLzJuDayothDJJKWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DV4yWWhUFY9tBEoaLZNw4Dhc9zrVLm5A8yxAMMAz3r4w8ez8jZ6mz222uJH3ju4yXUpqrVVgd19EMHgVJLvgh9p",
  "key1": "5MwtUkye88SNip9Zng3Tq6ZFb5rCAYt6BNtgvvpA46nNqM1uR1Lqyqa64G9SXG9XZ14q8SExXHobUyd9F827p3i9",
  "key2": "3ggYGftugvS1ggxotGLbeJMLFeqa6cWV5rN8X3pkaFGq2L3LSWAH91AZuxH6ndrGAjnwTFRr4YELJyzgugugR2tq",
  "key3": "Vf6sEFoXDddShuweBmrdyykp19E68ekAJBNym6R8C2ctTrTTFVncyoT7pLCx8HGuyDSyTCJn9pWGwgjXFSp7kmw",
  "key4": "5eH3xjJ5pyevb8bj7xdmD754bqeW7D4n7P78wBUEEq7Nwo13b3vas2mNXzj3pFzqMj71tUAPmeRUFpVUdRYfpNq5",
  "key5": "3MgwtdjciwvtjE71fVw2pu5j2dnJUafeM2dG2ggxFTaJJJmU7hkNdfJveSZU7DE5UonVDdTUhu4kvEHnSiWq5Kjt",
  "key6": "wfGpBVzxKoW8TLks2XL3YUo3HNwLTd9B43GaGt7PXZ6bdjL5dMEFi9FN1TZTDgc24py4ESgQJc7vwLRN72iZSac",
  "key7": "2MVEi1wbw4PgWsWWrnE9dfzjgVikuugAYEVEkRA7HgncdxMcv78xK5NaHDhzQcRYSAQBr7SgFZ283FY9NBSAkNtU",
  "key8": "4NdBkJkmcWoSvEyrSxuwfj7QWCgxzYvmjN1iLn2iXgUVGuzDes5GQ664SPoxeSgsSpz4z8eVcBbFQt2HK3ZL9mfu",
  "key9": "2kVPZhQuhHJTThRsSkhm91963xw6ytSh7N5x1RkziVqPVjK1sG3mqniXp9Y7b9bHuoxobHTU3ZL936n6Zw8dvcH5",
  "key10": "53uiM9gA1KZ8tLULVc2xetWLRW3ZrXxTwJnW1uAqVUAEbXFNmie6qkBMk26mEV9raBXkh4tPdAkotk8ogUjNVgV7",
  "key11": "4DA5eCyJizX8XjyXoDuZwLbjykNBK4T3fdTqG4mn784XJKYSmCGSoGEHqH7FW2TwiMi36M1XFzG5nnQecfdfABpt",
  "key12": "HGBx4t3F5pKekrND37uwPrWctS4PGce8J9SzeCbii3EotEoeugwQULdLgwX5Zisyfhyg4uvrqqDYCtWWvJWpJQV",
  "key13": "66UjQoPjH4MnsRvwSVct1fEeeUenLbDn2UU4xsTxjz2eBhCPVJVtinmm2NZa7MLriyYJdtijFPPxTXCz6zP2W5Qz",
  "key14": "4NiusNWk7jNqXZPGZPgDKBcefDYoFU7VvK6MnXhtH2x8NJoqdYRTgnqX5pmjcP7Ws8y6gM1qrAtMJTZPaqKBuyw1",
  "key15": "3swfMagnhSHzjCWzj2wvhZ8Esa3y2kBgPZnSyaN3xnPnYtVbfBbjRtnvZGmtFxZ1SbvGaw3L7ckTPjL3j95GYuc",
  "key16": "36RKqsQMRk21d1zZ4mkcy2LKkjTrxfoVW95eHuZ7fxh53EUkRhWhFxG6NNJEVrgqLJG3ae1LfjNfVrtnV1mZ9Z3b",
  "key17": "4CS6mWrLLbMAdYjdSC7eVEMXKirHfuyyrBhJEQ9kbNJu3JW2FAdQ6cGGVZcptqLGpZ8VSdQYSW6d87CKvcZ5mQYR",
  "key18": "3VEcS3wnJoyuN6NT5oTyCEtQRwZugkxTzFTm7fFdTcoZeoqCqcoEQnviDtrWPG6HMmGF245Ld713q3LgDANLiZ6N",
  "key19": "2u1dLjksryZKFBHD7aSfy4GB2kn3LZP2VsgNSzTDYVUrgGSkjCUiaayPeMtA3P1HkkSgw8gmTnX1MEXXqEbX58A",
  "key20": "4rCwHdYVGVqMbxrTYbjpwy8YAEATTVgVpkP5PdyMwLn1UobMXMjGHFkjbpJZg4XQ2jUbdPXFAmDZxR26arGcwxqC",
  "key21": "3y8LD33y8emNDWiK9o9qnCJhxFJiNvfaqmtAnaU2EndWavfQUwQcZUAJXLxcbavzSEwBNRbcXm7iGnFvzPiRvCaq",
  "key22": "5qvPf1fd71QzBRruhYhGF2dCDzJrzAJtEUoCCHN6Dpoxdnp4GtKJP85gEJzGPLkCm7MJzgALKWGWohWSyadSHK6h",
  "key23": "3Rz6qa8YSwq8CsEshDp5qCs6gKFMhpV1YYagNaDkTH4NQrW9zX4QESrdUXGgS5tpSQoKdyb2F8EznNUN6i8PTgcH",
  "key24": "3yaQupyRrjqqyajZd4WWiykiqMnouQZ6M23jdh8tspDLzY6sNU9xtsekrHUqC1U1ron7Hv9TkxGN6uALTZNPYBum",
  "key25": "2kpR3Nq3hqw97VsYeSvdzSgw5anoLKV8HvyXkaYHbJA3GLiSHsNwjkhgWBLEztRw94wYCVsSd9pqDmqH5mZcmpnY",
  "key26": "39gvNQdsMgKnMkZ6mjLpyNkMoyGxT9i2MW5da7p1pSx9XiB1KDkishSaQqkMjrQjbaMT6mp8t7URV4j2UVhMpimX",
  "key27": "3sE7Ly1qurNe3t8eGoNr6ksDzHzczhWrd3ZvMbgGkxac7XTaEa8X5UeKmQTktZgQtEqobynK9g8iLrbLKpArw9Ks",
  "key28": "8xXCRTdtCha8kDhwR8SJg3iPgZu2FGPxovRCWWsX2SEAHiUy7ckhHFt4FLb7DS6JauKeDnuZBRMyib4KHxRvoQg",
  "key29": "3hPv7robTFGfBHRRtMrhzXdXjQyWbS6xo3dLtfAMPafLxY21yuCUiiGhKWq6GH3cVo4Af7B3f3kbbtASgvy3BygQ",
  "key30": "3kbGZ8aUjfgXvZihX1NQiK2NBg2ino4ePAYJARNvdhxnTe6mRHRSTzFTwkEp36wfTepgMkkpibnYfWF55qVtLLcZ",
  "key31": "5hwkSBuBq3DwkTCJWQr9edevb96qSX2JQAzVmWj5jbRRiVDeL8Yp51twvKii6AuSSWXJpiqe4vKxYzFGytANQSHD",
  "key32": "5WPsH3urBgZu4GXGth61N6xv4KERgiHDQNcXPkQq46KkdJPr9CJeFnTHf9CGyzLxjgiqnaUXWVBHu47vvZ2EYmzq",
  "key33": "2cqnAA7XguCkQ7z8DKzTuGE9fQ3JASJtET49a3BbmWHbE2y1sLh1oQwt1SGiKCMGcprLhmcHzuM94VhN3yqfPFfL",
  "key34": "284ajVzwYD3GdtPGkSMrNCfNdMzL3Unex9Jp9u6iLMz3Cw9HSYM4TEtFMonHdC8kKVm2JeFabHjq3cvHNgSVkP3F",
  "key35": "26CKaT4fVG48De4hB2KF4Vt51aYtCqbqV7YzU9QGWj134KPhhBJiGqpfruecWrjwYPufVFcX6v1Q6ZMM5JVExzN5",
  "key36": "5SrSrVFk3G47FfSHZ5q1N6skp4Cg5DiDG2qfimTTsSzb6Mqmq2RxYBnGvfKUL43KQJxWfu3YRXSiARqSpNBoiq61",
  "key37": "4f2zWu5dyY4rRuFXHdtauRHVF2gHkxvkRbj3Q4BYrF6h76B6mQKSsZ5o9TwPa97a3FWW1sXZ3Qt5zJjWaarSRfYH",
  "key38": "3XMJQ793t6vpzEdA3mg4A3NQ8jzXuCK1FJKgwmZ3yjzH1yrdq2DemwSThe8L1f7wfP4k8XWVHHzdmGXnUandz5or",
  "key39": "Snj4Nt58RCKv94XJ5dn5bFMGA27aRfnoLBqhppfvRZnET6hsA4R1KYjgkNCosb7psNXLfGVGJttz8WzMvdQPoM8"
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
