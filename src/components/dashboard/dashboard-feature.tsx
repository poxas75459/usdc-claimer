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
    "2b3SEfbk5SNcrSDg8ohYKwR7Y3hwokNA5L9fQozJVahYKAAtpo8EndTJBNTkK9jKRN7YYJ5Wa1uuT9MXcM4hAdqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KPAH66VffusRPTm8DbrvXtN44AWaXJc3Jykd5XNwYhTozcxz9VVeBtFVCwzenHHTa8ng9EWXCnVhuBNX7J24ASf",
  "key1": "2kKwPgNvyYBDfr2L3TquEs8x2SSmnEsPxDBYyZtY1PY5MxJyJDruebuAjGmnmFpesG2BHp53KcyYB4K3CpJmkbpX",
  "key2": "8ongV9y6KMbR1wjKxUvFY5RYSnwEuHWZpxx8WM7vKQBPAWFxdgMndrWPjnDFfabjj8sEqsyFBABmjVL8eJMVURe",
  "key3": "2jtpFxbcqyuAc8EjkBz4HkLKofbCeFCpuF5NpSnrMK5MA26EDveztJkuHanpB7AU22LBMP6ZPf2QVhdUZpFRx7h4",
  "key4": "5wvdKsryci8eKZe1mKEAdptEoc22BLsgiBCY7BPTJwmaynmiUgHJkVtjdsjixczQodpvrNrwKi3Bu3ePcasdGXkM",
  "key5": "5P44eCtbMFgMa6Nc5RjuXErCu8D9WwzFNbHqyTMhj635EdHA4KAbhWidtg2ehGeupf1uzFRdjpfns5WWMYNKsT6R",
  "key6": "48KYvK2h24ZkeEkEhW6GwP68m2bEETokSWsex4HW8ar9Co9KiBSKDuJBugZsFefYN5f9LTVqgkGSbGyZSvHoKf8p",
  "key7": "JNXuhyppqaAXeqDjK87vV2FsGbN7hABrnENF7Win8d7xeGYHaLgAKoPsdW9xZJkw3GGCd2uwShQzfMKckRnrWtE",
  "key8": "rs7QTvuwjYBFDwUn1HeByyeoKtBiDWVgYg77hMzVuVBctDcbU7fj12wHdhJkZniR8zchWV1vtWCvf4azzesS91X",
  "key9": "5P5r8q3HmSY1PWxTJ7mSVN8ZUgqhg6Urb7xoaBBfr9A1b6cM2foFMwPthz5XH2Ps8KiwKPsLtmho8wjog4ZgHcgt",
  "key10": "5hArHHCvqmBRKCmRBLtz7ecSu9DnJjhtR3jYWt92uRd9qtNyLHzE5GVxjkKTWC3s5eP5hSUTe8VxmFrAEMHRP8n4",
  "key11": "5NTNZAZcXPjBDPs3pzUimYGrSWEhGQuX2Ki2vdHcfw3AHcnTqQGjHqnvh3VcqPRoFxQPsneYQqATnLeNgpqHxsGB",
  "key12": "2M9eBR69SQY1USV66y888eEQxXjg6Tm75FkA5krmBnVvTGGYHWYVixZLU4tCZHxCQQH45AYJMRhZShMb7jTJSAux",
  "key13": "4GgpbAraSruTPQTq54i6cQCyuHtjX8XEBEPST3wm7RTdFLgvdJ7XL6nv4XGF5XRNKT9R61q2SXwuR3hFVh43sQUg",
  "key14": "3aFJdVDohFA7FkNs3FBdgNgXaRFZR3e9TfS7yrE6aeKFC9hrazVfsgoWi1RiuPucCo27JWPQjNb3JEfyg5sNEqVa",
  "key15": "2bK6zfBSBbf8keT2vQ6RmLuacVp54bhavwLCYjQu333dod3y3oDLYtcqajNWmRzYABotKBM28dXxYKfqjpPUSgZ9",
  "key16": "29SFbHtYZF79s19jhS9emvKi4D7eSsZ2M8npVbVoNFUL3VY15BLFzTFtcUfVhGQh5RDrhmrAZ8mYisVaxDR92MAF",
  "key17": "5MUwvizmFhKu7f1MfPg9NW3g69TydjJhXRrjs5fSqjtyX4uW633oT1pCAW6UAvxUyqmLBGaASUaV5YiB2bPDQXaW",
  "key18": "C545DdPZMrHndDBRQvcdqxxe9xPWLuEWpDtH7XeABigsAPCPFnPSnAYuEM3gUJJKBy9oaJJQqG5dU5uuUCM6UhY",
  "key19": "47u5u5uBqXyNDAVpeQ8m5SHBdy2zQjrXv7xuLz6pL6AXVr9Fy1NuxHZgSeZv2aEigWiDvBZPe8921CBBDEqi1zRs",
  "key20": "5JvR4DN8oPjJtbg2pQ1VUPvFwhqeMPq2d5t6JViaCP7b1rQqLKkxNC8Rj9x59GURryWSVeLAEEpJ2giYffRiJZKz",
  "key21": "5GQgAane39HrJPkKiWbUpfxDBTYRQiPLzxoysqWNLu8R8bwgyJ1C4N51L4rBtZMaf3qfPYRhB7MVszkJg6Y88iti",
  "key22": "DEsqXDx1gSZmS4dciWJK3kEGNH3G7qWq3wfsxuSwPfUDtwRrXA4WNx22fUfwJJKuwmfqM5PQJmcNV8xQ96hSnHB",
  "key23": "4Mi97rtJyqdMTo8dcKLSFTUEkQ3oJZ8j5gpwhN1VX1jCXBYPBagrF11BsEPhjTrmW5Xrom81bGHTn3QEWtYNeAJi",
  "key24": "579M7AfrjVBzAT1sQ96cTQxVKFiP3gR9ejARZtdBxE8GCVPCYJNhzv6EUAL5pSVw1rqB6TjaR9hRotMMvurNGdTa",
  "key25": "3v19yWFvhzrtgZMMjhncbX3PRPJourcnP2t6N4qoKfKF6SgMhSn9RAscwriQW4ePbEAK9E9JSrqN1eUukVhyPGPz",
  "key26": "4nR2wcUVEFcj5K46DgqzRmmvs5K9ehXG12Qiw2XfZgSi8Y3FNvA5mwCn3jF2PNE9jzDrnRFPfd8YeAy8HZZzgETi",
  "key27": "2THNa3k442T8qZf9GL4yBxhkJRUGHSLp9oGzbYffBVceAVk2omAs6J2FNu8ihUWS9A3U1dhdA8nuu4LRfRAi6CWJ",
  "key28": "3Lz8eKZUgm55TCxjhBvk2uLQgVeQfoyGAk4HwX8LSig7bsWERaRc3YPgTQqvX9tMdY9ZoPhvDi7r2C3pXQNAPJ7t",
  "key29": "61pRdJQXjeEC7REuxFvNQznYZWhGEerhBr51ABXHUr9MUvxNpvtBvLXdyqPVWtv4yFgP1KTE9br8YHGRFWTx6G3S",
  "key30": "2baEAwG8auoqz19jTdL3J7oz2RfhnYrb9tPUn5x6dBQbeHgKL4yhmb6GxDAtASCuwNRfyNFGjbdp8KvPt1RPCxU1",
  "key31": "4Cw9rGjWkKUqCsG4VCwGizqvnZSrqwVDVazYpDk9wqLweZ74xuBw58PgKJF8KMadPBmmMRMGDh2UK4rhBnKwTU8p",
  "key32": "4X1MshAkZE11Hxowh7KUK7bD4eCKrTBnv74LcJDjobj2RUAGqjdH2LzDYYQx6pJ2EXG5nYbwimicCaiVqco95CDE",
  "key33": "4K1F6cBYyT8Kb9a4SjvuN4pVMh1bS8VAdXyDFmbq5W8hktGDCTBVfcz51mGnA9egXVrkGQwNyoGVqwjiuEpxgsw2",
  "key34": "2JjvD4y2qZwfDAGtq1ozPqB5KZnmeMy59wU7jAGddmaoSXTasuKJESjpe57rtbv3ttWqoFy7y7tEXzBdJ985bqh7",
  "key35": "dHAWuKjLxZJrVd7Ub1bC4EMbkhoj2m3XhZaDBp7UCMcrJAoybTke1mFwuRmV5m9iH7Lb7dSAF4sKAxPZ4hzKgx6",
  "key36": "5ZfU484PkLR8Z6vECd8XNpsmaZM7oq7xpGpXrSgjkVcFHG6rSR2tioD6QCu4uB66qULWAiCm5a7cWYFg7K3AnRaE",
  "key37": "3JkCQxpjYDXCvs28iPYDGXTmKj3StBNLvuHDW7abNzLQSsJHsVULYGY2iMHz9nWQBGWEvx7qRT7rKnMTvaaafMtv",
  "key38": "tkTNRwBGC6u3hKG4J39KcSZjLPECtS9a9pAB7SocjUKU381HeKx93ACLq8Y9EWXN9WJ4bHRPoy4MFNLqiin4Qrw"
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
