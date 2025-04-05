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
    "22X6nZxzgDaZUTe7uRNWzJwYpwnpDnoxvrLznM4rD5A1Z2hxNZcK92XsuU4CRdEGh7hkXi6mtCvgwzBMxmEPTiQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qAUYcnjZkT5n7XUg61EHCTwgS4EeQQ86ihMip18odm7agraMXeQjTQK87kaCLhfJfbyTTfWuezCEDeY4XR7wu4s",
  "key1": "5a69X4iQ7c7k6jxKqRkWhwRsiCiuYLoCdUCmXRTiiMzeCpbvuJyNUjmRaa2BrwiyjbFsBW8QFC3Fau9BrmonEXAy",
  "key2": "4mLTqHwZNtJsEjUHQcJyuBnyEk6ttRULpJW1a4ncUW4jb47jEXAb9T6ZqGhrSTDf6FMiVrmzZhNUpB1okfZKKNVj",
  "key3": "48tTjyb6xz9Z7auEEE4DjBkwnWToin3EvdDE2rLm3K4rx5D33GjS3dG9d6HSVbuwuGWCZcpQFnZtiaMrXM63UjDN",
  "key4": "2vtDZGsYLyYb797ffyRXFFf9sSV35rRgb3N1fjRFm7efffHiLeYagK656fKdGdFgoTGhhBJ6D6iFmLUSUV6ekyZ3",
  "key5": "2cVmGoWMmX7DsJxmxCKwqvKL7pbWMTin6Vn9kUhjfJskodkbZpQyixVGJmcuyt1GS6cybY3X2xLUsa1KSkpedhQE",
  "key6": "5pnYEUR7qiQNcUCVTz389w24GfP3rEEDHHkB3YXjjdnfxCH3q1CBBrsLe95J4pQC2SJZ7gPuCVEXxdnXKo4iyeFK",
  "key7": "2nv1bvdb6BSVH9oh8UqcoLYKUnW13M3ciBB8WgEjCSRiGGNiDhDpH4NwFTo3tFxtHzBr6441ffKLxHejkig8dWGy",
  "key8": "473D6qNCfs4F86TY3kDs4KuxiacB692kJHt6oeUFyy6uoU4AwNS8vRCwS5XsWh5ZKPRPvd3B2d8QQxVb2YMefybo",
  "key9": "5uKfcBoedyLQBS4wnpQAXMq1PSszG4cnLnBwVkQWgqXvhXVhC3Lfb8Bs1C53PcrH76RQDkwZKfqwKA7RsZN4jrfu",
  "key10": "c6wL3EJNzJdpy2aVoYZkxcJ7zefLV8FaWEPaDWB9doG6CibSZrGSEMPcPADuWKwt7yLkmKxynwz6XEEyPf2156V",
  "key11": "3cyQGeJvsfHhfTExXKAqpE4m3Pu2r4UxsFDoA2EJuwMcU8d7ezTzN8rnG9LAbcoxnKpbGhLS5de9oABYAwxSQ15R",
  "key12": "5jyowaH1SiZP7KbkRPYyy4FmvLDjEdGmzKMmgfXMkVsvYxRC26GCsC88megzWraSL5e7c291ia2DNu6rdwxPA4SZ",
  "key13": "CpUWjZys3TXN1RWSb57CEaGKngQWwF954HLikozFU4jfzUet1gUEz1eZp7M3VB8uWnqjJwPNvaLRiAp2BtTzgkW",
  "key14": "3wy2jN3sjgm97FNTbviSaPyznTpzHTWUxUooBnwUdM8w1QoAFpZ6UkRrSfeoVLsjixmyb4oH1GMFFZAs3yeMM7Fm",
  "key15": "4FNW9es5kSU3sjoHdWTm9wpZFaE2rhdezaKxxBapRgcWGTbmyP53V39bp6H9JHohCBxKGwYnQS91Z1EBzvVoRqtn",
  "key16": "4kqPHN1vSW9XLXj76LZ2VirFLfu7ctCoQykA4BDbYnJ78yvesNw17kr8BZNjmDxNqrxwxKXYrdYGdTf1oTCin2L1",
  "key17": "3uXgL6ZN2PbV6uiPk6HfgJJcHQhk9U6GEXvTy8DVzaGfPrTFkk4fznWGHpLNHREVzT2Xk3twqffRmxEcjDyU3bsf",
  "key18": "678A3dguncbaKWX6PDqrGsaWNHzd7GPbkV42Xis7XE3o9MsprYJRobwCS4DYCZswJauqm88z65V2N5FTeuDaGhFG",
  "key19": "5t59rhLf7mhcZeazVHgZSQJFrvDnJMU8BUykCZ1vSfufzbGTXeAd5fUZHDgBhY2pFpRe6M3w24JjY8gZUac9LHcB",
  "key20": "3jnXN5W3bFTK9VdHj1doqrNvT13avLCX3fBUMoBLqM2PBwNmyZbwA4HHQFbXucvQL57K2tNfkUohJBrz4WqrFgBk",
  "key21": "4JVGuoqWnC16xfvVGsZUGNLoNPtYEKiwuxNiN9ykDPGfFxuBCHAp1pXGmTZBD2trfEfysoBMepv5eyV5d7uVy1De",
  "key22": "53qWrMH6dgWzR34NtiuZAX9vSNpN1wHQaNfMi3dAgftSu7nhJzSLQQvSW1BU56CkZJVbtQy8Bkunx6HTseWksctq",
  "key23": "43zZXkL7pctFiUk8zHyPmpDzArmzrVGNebNZPyydusUxSrLok7KUUxM9WV4fQ8qHSHjYM8MeFJJTnTURVG2HC6yA",
  "key24": "4TUgBBeR1Up65SCxYGPdV7J8uac3maRdWe7Hw1XVDpPF8qXToXxPn1VWjevzcjZDbqY4GwjwE1C1zCt551tuRNbd",
  "key25": "5NrbS2MzW4PSDb2Js6Aze8GGwhz9rksx9TbDxr9xvcYvZX8DjMUMVx9YRv1ggTPZGeAQZdHwnrjjWVvddTKr8A88",
  "key26": "5VLWiHUxcMbiTHujcucYYuaCZKV5KCYcLaHH49zBYc7rEFk9W7GJ4HnyVimdgBzh7rsCSwb79zWmT6rNnzvtJ3Vk",
  "key27": "4G94nTvuo3NRZuMZQfMnMYJhPpuAdkS6d2d5eAyfqR4aJZ12GRbUynZqbDjAYznXxGo3LRXHkFyMtjoL2CmBdCRp",
  "key28": "ded6HdbAa5gqrnbBNuhzMHNgETUixqnJWadxUjVvwS88sd3iyZrj6opmip3GAfR2nfxiDEjEVchhkSYtKfSQqGc",
  "key29": "5YrW5sQtfrz1a5TeV4XZF5HHxJ6QixZWuUfpb2GnQMUn9YGsVtw38B8n6esFmdqNTwuWUZRteUwwWfV4DJHEC6VQ",
  "key30": "64AqSFfKwBKEutN7wyNvzZ9r7B9QLnZ9vG4tEy6CJf3jFy22fuaioKJdg7XtgRQ22xzL9tYntPpDgXwzfX4JsLUG",
  "key31": "3v4afNeT1jmA3ZJ5VFWYZjd6RXidZ7tSwfuVsQ87fLvCPkMTfLJnqGzFNLrrAd1zs5QSp79vtMmC8f7v3g8AkiTp",
  "key32": "2JfrXnJUtwdS1N3W5JFmrKu2wxJmeRJgaNpSXaa72jmSmuua7WKA8TXiaYKUJaS7u5gpsr89C8k5o4ofT18Zf94f",
  "key33": "2hUQH5VC9rhwL73NG71fBH4Mo43RRAhrbkuSBFqXoPwRDHC2j1jgxkdHhx4dDDdHFWojdMCqts8wicPavuxf71Ch",
  "key34": "3hbDszwsJ2SsfreNbuu3nebpUjnPeRhCAbemnvM2D2uiWpBHrLjwk69HhrZxn5ia7w3FCHhDUrt3r4g9ULJbLaHm",
  "key35": "2F4y1fkkZp2o1KyJUwHPtm4RtcgUqrKWXCW44SkF87RD2h6Nke9GQJuy4LqpgcwrsAJWJxXaD9cbog3tBv5JJPNJ",
  "key36": "2ceuJRDTp9SZdCLLsfXWA4E8hp2uCFtMVMig7qJfo1yoLjSUMwmppbUxKAGD7jDEA1Q9NubyjucHJzLpiWt2uKJp",
  "key37": "vNHS6Nbvuk2Zx21CDEhiyLfXJQiJrx1VKw67ZCR1PjQ873noF72snbPKr1R5WfFyDyEaPzJh4fANt2DereuLFst",
  "key38": "4qN5SVurTcyumdKHMww3uUNe8Z5EzAmKCroqqFCoqJKyT9ps5LU7fBRTBvvSsX2bcoXVJ6Qs3LsoLi2UvQWCR61s",
  "key39": "4prA2RCk7FxaFn8BZvTZHVNTtjXBiVTa4rCM84UWAg234wdPUkQBwu6xe5hHJP9g4ASRHA72ssL8v497PxveTbab",
  "key40": "3dakNKzMsJzj6424Tg3ZLxg3QtCPZC5szgagwTAAP5hjEB2P49YGeMBLgv6udrDAn2Bmhzkg1CjHu8PgMmbbH4zE",
  "key41": "4Ww4UwiBdPVQHnpyWg9U5aBVG2dor7gELbFKvmXbHFYnaVYmz7V4hFPM5aTtTab7zqgkPqpGRqUFGYozLY32oGXR",
  "key42": "3MbrCGmdBQrVHRVDiRR2aeUM7Sy5qpooGkmSvuJFdXkUHWpXZzoTYRhRMCpsV784nCEDtsJxueAN2jE3C81PuNLC",
  "key43": "41M6iVVMRMAtzuAhCNp5VhTxfty9FjviaH2pLgFcsHNhQCCpvKTffEoyrfk4cRJGGvnHFcDoMyKsxhiPcaFjBoqE",
  "key44": "31jvXFHRg7aY6bvDbUYm5RE1hbZPP1P61U5ebtwTwHgihBLorXaAuPoSs2XZStRUY5BEAfuDbv8ary7kAmDARUfp",
  "key45": "5FXVWbpZab8U7Z7QFkLixQ1zpfqfqKiG28ZnRt4AqAsr5friuZT2kc7nNgWB8voyzS7ZRwARaqgJUHF3TH1vakv1"
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
