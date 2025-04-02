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
    "2k2v7bDJKwQP4YrpYswJMP5Y5anTYpSKnfd8GSU7WWMDEJxP7qt8qWQGACgomgK5Scg2nePVhhftZu1Hb1PT6zP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vsrHfoEd7JWPTEma87zXQMmGhSBJpxmy5qDnmNQ9jRfR6LvKvuDnRnHHf196tRRMPA8yziEtTHuq8G367RN54ex",
  "key1": "28x7BBvybow8Lf56BSm89cWPe3S2MxYKrqBQg7rSMDEWTVtDaREugQwBkkhCnuFM3EFy2i8t6jQaBdqPr1hN43yX",
  "key2": "5BmdMDC8EAf8Tw76Q6yFmSwZVq43QuBfEDtRoPNfgwm62wV3wchJeo2pwWw6Qh6wtKLJk1TxfgGiXngRFwzjqesx",
  "key3": "YMV4ALvHSwpH94shqMHnERGjC9SUKi7Pr4vNMLa2soUd4gsM5EGXtF9WtHHREigFooqiN3McxEXMDfZUPqFQnQA",
  "key4": "658xrs2nU1WHY4iTVZkktTqoHbzS64fEecsZabNLpaEyhNbwYNkdMSdXRpEBktLo7bcZzTBTfCZLYKnyBuWqEXnc",
  "key5": "3QFHrxeQ62FC8ufoYFZ1WJgkwD5qaRAAJmXUCwNDZH7bYH2WyDTX2ezCV4NWTngqa6Bzc7YCSLfZAt5E3DxUbJP8",
  "key6": "BtSDaz1DeD7fBVHf596UL21eKp1MAERbUkWptShQzH82JrL6inyHVNuFUvtQz6gtDihVtpS9YNgnjpArHHPuLQ5",
  "key7": "zvFziCbFPWWxxEVx18WzmamZ3sxDHGL3u5vDy4xVQxmfDf2yCiqd4bSPd5kv2Eo2DpT44sdvUQXbmqQj9FZxiUj",
  "key8": "kEbL7h8MMkrq7Erdbcb4BVVFX4yzV9QhpUXpLE5o5UkSReBY2hLccFMm1W5b8Z54Z8rpgtED5fw5avqWxwDe31W",
  "key9": "3XUxdg65q78yBXouD4wj4GCrvfpSpUXzh9A7hyfK16oVa1ECzB7Zu8dFuspCGexiaD2NritByVTUofKYxvJJbBN8",
  "key10": "3eKgzoH7tRL5tbQvZbc5nM2F3RhULTdTFrjG4j1PbnnCPTqfULQPg2NZUdfBoiKjd74APutKryaDPvKc6mUV35DZ",
  "key11": "5hcKVHfoAr5ahdRRM4WrSMGzU1MXU6ndhjsvnxHC44Qk87JMyiMSohoQppxGr4jr2yx9piKCdUZmzHG8Wycm5Y6a",
  "key12": "RpNXmLUYq4ke1MUMkcCcpE8b7K9AYRT4s3kFYy1Z2mumPpzaofhtv8ieFy1BuwccthWtewfbzc48dyQoh17Aaqf",
  "key13": "r9qpZhCJR361km2gPJnGkj5R2uL9kk3Xco4QvBkx2yHV2p7T3pY6PTDUmxv8NzfXG2FJNSHF2qYiUbGHnJN9FhR",
  "key14": "2f5t7j5mtrwB1Q8TaX4DH8CZMvnwwiDzDNFuPvcd5PGykTSMM6S5E9nwWqHrFNpaWx42vdtikRerXmUDkttQDWMc",
  "key15": "4sLDUs4CAdp5JZ5y6wtrpFr2ixDNNxYPSoKbnxq6caWPsq5NKzo4eJW7rM4oeEvTqstGMFtTUCminGWCs86Let8W",
  "key16": "61f1PUQrgXaNvnaAT77CeJnd5sfb6hEh7ED5jNzkmPHTjPwwC4XJB26DavXyqHupwRuZ4ZqG8ermSrcjAWnc51vW",
  "key17": "55mUHMt8RK8tgaqh7aHdCGp3Hpru3WXdahgwA2aYcrCyXV7GzSwHfWS7Xnewc2t9HKnhfF8VfS4AYJCcqYwhxSk8",
  "key18": "56EQwrWB5HVag3ZJPveShmW7fvj3ZJSn8wkZ5vZunpfrvX7QfF3FgnaSpLxi1ghgXmXenQoSh1p7UA8f9mM4RR1W",
  "key19": "3KuaYPxi5mgQ1Kvogzgc8jnptS1f6pYHJP3pvEXfmz7d8L8yFu8HkzMPvY3zgCqLoEB9Rg1Tust5TvV2QfA2eYJv",
  "key20": "5ia2TkSJsybphqM2iE787pF9CtS4GDv3rfnLWoUbs6ZabvmXAEd4awataAnDeMQRgumtcBr68fz7ppZNhZoYJFth",
  "key21": "5uV5Q766ND6H8FVThQXjsxVMyQRqbUwfdf98bkaNPEejERHAazSvZJUibYm9V1eYzf41zQ4bqS55MLLXtWhiwPAe",
  "key22": "3pvXcSK3D2GnMWNUgUvfcgyLBr9N1SXwKCcj5cBxjPhxeq8HZnvXWEFxxbqJjCbTy9pcvTWppXUByHhf1eg7ThyB",
  "key23": "3ooWwgDi5hUfU33cLXdR7H3t8TWf1mmhPsRT4GJfsT9owffvPqVDD9TZKcSpzBQZi5mqmkRExds96VVV23vKZmv1",
  "key24": "3w41MoVfJGp71vgntc1kAcn7RLv6CocTaZG6kbgdihE2kxA9HBzoLuQMpn7YNbH4GbEoQW3519THVRvqYFXsh1GU",
  "key25": "2uL46nHGLrjL8fipf5eE8rNY3dbvznYMRRp8x4BZSHg6VToEyZ9LVyJfLmybXTxX8Hrn9FKYWzn8aTctMmkU1uP7",
  "key26": "2zs2MpFqFJyQ56Gdj53se7ouxrELT9bMtkrDMf9TYjWvyUgpTpdGXTgJsPqxKBqqyKJQEtWA5SUQdUsRcve41uSh",
  "key27": "sbKLRJgVgxZMPB6TXUh5ofmMqw5PNBc3T6PoeLb8zAhkSP6KCytjv3ReJrrCZWpasXfGiTQas8PAWaWmLFrVax7",
  "key28": "CRhYWQQniJDuWtjTxUPZz1fTVHaRoaSWnSxVpu2KiPPSPpQYrju5X1PwbdWdGvDKtussapvLVTZJ36cHCQayvwS",
  "key29": "3Feqesuthbs5kcWfWvmgGYCeidRZ7JSUsmddSeYUaSCWTkKszxTwpxiEUts6rPGCC2oHjaLRhbtA7dEYwZVDFoNc",
  "key30": "2C6FaxjFTkw7PEJZKqznoioVK8XJWNBNaQtbQ6quHhuy7mkpF2N43xTPKZtHRFjwtYtteTRbcwh91eH2jhWTv8rK",
  "key31": "3uwU8bwdaeqLpY4hbDfwhtfR3PkTPPvRwJD8L7BzXEkTnrnGDpXv67Qti3XB5K7fRUDhjxjiuA7Cr8EibSibHbiE",
  "key32": "QEetez2w7kRdverQf8M4zCvYdJrEas6Cnuq7bcYuijf4o5UmS7kTNqBiLS7YoTieutcn2xy9ZkkKJudaMgA6qmi",
  "key33": "2z48dmc6P9csxqb3w7zxU59JDFRAqAo6TeAroyFSr8zksdPDRNNtCbqNmtEhsfYtVhP5XnqkKu82jZBgrTS7s5J3",
  "key34": "5mPNxbo3esetbyVHq6Ume9iEmJnirJRVPXhg9PfBNFXhGwZ4cqWLvtsXEyJKJmcpT6XusRSV3MQdGsoYUAWRzUaN",
  "key35": "3h3RdEdrgrASNdXi3Vv1iecz78XX2cwK1T6Zv8maRtygKTXQoZm3qnZcoAxnzWYPwbVLHiQFPYR1qaCSdSgFnk2B",
  "key36": "58upFtW4qASbusgYVdgotpDzWsYGrQs5NPqHKmup6KaMBj5MjbdeSsRoPwSCWQaQmaFnFudybzKQxUYxzSRm6XGm",
  "key37": "4zTCKw8i1jhwBwXUJh23aHWA4dmKBVTi3xAmPHt6YXomsTonGPfiSHKh9bvEYCmp11GQm2hViducQbUrGjGrGPvQ",
  "key38": "gq7FthX2aK5XVXr4GNhP7myDjCVkQR3b7jwxws3AaoJH9EE2CUir4gYEiwXyFbpshR9t2xvNKTQBcqn5WNfLSYc",
  "key39": "2wwTFJYURMdBz3KZySmesVY8FqWptdJX6taAXvD2Tx7pcKn1jHS7scUjLzytaxx38DRdY35YM5hTduyA4LF94pGg",
  "key40": "3UUmwBp7CaDYhghUQqDJ7cmcAbJ3CvYuaPJopseZYRZLmHSCGrPjA42miehsJqDMLpvTwmiTtpF99Tv57HRdVbe6",
  "key41": "5CRTHB3fcD38sVNCYqQDHgJ16Awd43C6svwwbxtmey5PXao7frmrZnq1xWkmyap35uZFXrz8SKhpxXPgitrcwG6Z",
  "key42": "4tVhri3c1vVmffUXjzv1fYSKFmfYCLpGfj6NbEPVzNQtzts9mdGy4L7VVqQ1Jtty18G3NqC75W3VsszRSjL1vxQk",
  "key43": "97xjKzb2zatum1VhynHc18wUuDDWnbK4MDmHRwNR4AB3iHC94sD15fGYgfCi6d5MfeGPr4ADTJgAo45HxHT2dGC",
  "key44": "H8AGHqaN6Tk8KPbRVVyxVAKV2wubjnouge4m27JWFV5SAjX6fRzJSjBQmiDKjS6q3zYjzFcFExq8Qqie7Rw4vPa"
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
