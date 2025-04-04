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
    "2p3GkqQqkzxwpPnLATwR2aZWdSMtHdmwsNLrkJBgtYUbbpyXw91sQhkpiC8mZqxj9bjoSaJDicPQhcVq9VPPwqmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FDD2awdfxMRvUKemqLD8aE4JCBAMQqeLxJuUWqvk69rktrfqYJLpikb25CSpBtMJYtESP33g25WkvHYis2GfjAG",
  "key1": "2EaoTctm9akyqJevbtuKZvybAY3X9XVQpi692U3se7UA2PGVuDNSbSNzzJ8ZbYKiqMjxurNqED6hozzLzzn1aJ7W",
  "key2": "36fuimcURdhd2DrbeFBnsdUrGdZ4EYca28LZbKdptitsU25dpMHJwKx4mdjHZW5xeSnuTrzwXcKdsaUX7zpB6z2m",
  "key3": "2c7qy24hW8riJ1Chu9nr19i4WxcUpuzVsqAAe9XpqUspkT5MXhRY3Lu3dZxhMG3nFYbJ1oUVLJyKTT3BQshCcSdU",
  "key4": "5hgBmaNoBjVqELAGYi3zBoMeUgZKY1Mv65ckKtZzr6a9fKcJ51utyqpeFJLjYEfPH6rXJ9hBjqAhKskBjJENy3y6",
  "key5": "VzKdearaYMRrC6AmKoscWtU386qaGZmtnxWYAR6XS6h2xrX6XeWGaqc4Fn1g8a7EbBMrQ8jUe1U1WZKSuMcdbNT",
  "key6": "4ekXPLg1Nqfn3udK7QmQMhxVDRik37FqpYGRZyW2Y43136zk9bK1VzgTCK8zRc8Vai39f7eDXKzPr36gNiisgtEy",
  "key7": "3SBZYdxevgC3jcVVFGmGL5WnUtBhYFv9fEJFgCeom4T4oUXAaUGFjtpFMP88K6PDzVPPwxfyrqDrTU2eZzj9C35H",
  "key8": "4QKTCrPnp4PXZNst1vAXtBEcjtLFLCDzyBHfHHUNQ2UavUtTJNWZu9ENUpN6WnEnH6EGAwnvwctRDwKdLJTmEaXB",
  "key9": "3QNyUSk5mCuY4GhWofdgivTM356dkRMcaFnZAi7gKCcYt2nnevFABgwqP9zxPq81ES6Unyhf69UjVoXkZGAjACUL",
  "key10": "HMsG7bm9zKYm5iJVHUgbwMycfYRYh1vu3834o1D1hNwKuYNW8ut6mgGvgLKFczrn9rssKq93SBV1WvPGdSwS4hs",
  "key11": "5ZzHhYoXwnT7LFrMwLAVV76ZPXX5NBauqJdj1vbzeWDzoVM2eDRRHvNoNevncjhPttt1dcp6Bm1VtXatyHtAAcbq",
  "key12": "4ojZdAfSqEQAMWxueRvB679P7oM3dym4LBUYh6kd974NeKcaCFb9Jjavcb1NHyfzzCXEGobVKAjXeKQGhC7fP3fd",
  "key13": "2anoJwvqsPwfAWDZv8PD3ph468KZi6rGUmHpe89a4QWkDjFYeUyHJrTcGkPdHzb9zXNPRQxTzXZCBhDjpYVZvs6o",
  "key14": "3za4trJcFXqCfkzLueK8uycZmmjDxuP63jsN1pk7AsZenuT1v2A2sFYVUiB82bTf6wCiGAWVKDFAEXVPDVw7Lm49",
  "key15": "63hM34SKBB7UxidcKf3LpHHcgBQfCk24HLZwb9rXiTs6HpaqwoviwYLWM6hbKFVSvuzzyAxGVN8JvA2ZnZ5BrTDa",
  "key16": "y8cKBuuUQy4ZWQvgixKWSzF3Gw59cFZcKYiJrrwVGfHnV1Ut2BM5orHuRifuRLCi1PJiP9vhBksPkKCSu3Zw3mE",
  "key17": "38MsQyTmKC1ZoxUBUELQAKaN2A5gHjA9SWk2TvgrgjXe6RWaMqrrTxfnErtGVk4gvuyKvwKJwW14NRzLmXFTcDec",
  "key18": "5rpSEPJaTqjGyRsDwzVz4Lx5izAa6HTDTba4DtfhpEZemxnjCNixmp8ibi9nhLD78pvGmqJvjMyBzussKbRkuFWm",
  "key19": "2iSnRHqawZwZjzAKg6if8tMegVYVxHweihnsS1JGjahSoyu92M2Mac1W6uFaKpaAvrrFEVy7QTtQ35wjykd11JfK",
  "key20": "4P6NmVku6rrfvps1uaKy1Lz5VaGNe9dgyTCRngn9xkT9ehF1wL9RpSfESL9wEC221NxwYVTY1J8uaCrqGG2mPbNk",
  "key21": "5NkzxVeKhipZiHTon9NbHjpZPfJMiUh18avaBFnJEXQjDjVLFys7nBnN4LfoCEERtgRf2sbcjLshDed8exV8kRRU",
  "key22": "4Kcv8kzV3QCXAmN3unDGqMRwVGLD9jiYycCApiG9Zcf7qQiA6BSkFAg3xVCsqVZw3pTmzZ2sBYfye7RtGSd17Szo",
  "key23": "Yc8MDFpboPFg4TgmjNZhRMGLTvctqzHJA752z8LNhy1zqvkVPApz5MSrgYgq8uhV7PhECwAANKeunWAw3ammytn",
  "key24": "57VJ7EdMNhhZ9oFBbksrE9m6Rwi8AbLGBV4huCZxRgDJHmingv6QrvPhKkT934KH5RLy1Xi3EPYsrryAi11XDD6k",
  "key25": "5do7jRtpbYUfYVib7LqcHps3LbKxDYBFD51wdy7h4mAT3WUV7EmjbrvoLLFY7XvfB2Gbkjoyw94cr4BTNyW7ctYs",
  "key26": "25KDXcstBKqsvYPYkEaJyJFGBm66JXs5AoKZq32kNj4A4bMach9jMbuTguYm6VtNtsSwUr7Uuy46EYdicro8fsS5",
  "key27": "4PNTNmJ312t5EQNG8herGMrpSyvM4iGwF1LPbSxrmZAidQ8bKd8xxAqMdU1FhQwm5gy1ow3T638XrEUqYvqRYRir",
  "key28": "fCLRmumcCVu19zUW2D82jJrXo46yoiEQaEsvjaBE9oK5sjc6dZxa6rUzbDe3yLtZXfXnrtZcDKf6F6SEoNE6ZVk",
  "key29": "32J3nkkaFbUbG6XAdDB5kj44tu5tavZQsweuNrtDnvbuAB4mLsMLzYmVyDsEvcybPQECsL6SFrAfmqoG5vxUsVba",
  "key30": "2Y8mXrNzrBXFrF7wD4nuyXoSdWE8YNGcCtpsFpLwa3A2rTd96CU7kPp3iB8ypP7mgxorLANa1qabC91cuAbxM3eD",
  "key31": "44zwUDintMwgLiUJ1NvNYukv13BDzTcFeV3xiJdy6Hg7sZL5zjGVqBwaZVuEqjNYwssSrj7J1CE8axE8yec6CwBY",
  "key32": "5rXQHFSVw7FfE6wJBaGsKyeemvVAxm8jb1TkCpaBf67ix45MpF29YNABVqSHTtqJPQhPYbqHvJVFvRhQ1YXRkCkX",
  "key33": "55t9Jrxm8sXDAqpB32UunDdMy84HChgS4fvpBsw3tWQS2NkZjDjCJ2YLpkRWu4AAixb7efgXkjQEqj4PFMqLCkLN",
  "key34": "2unQQvdwi8kHs3agSxzS16r9GhDcQ2vHeaBXzkTNzYFatujacyShZYLQLQTqyxmMxPgNUush7ZG4NqTi3N8HGFWj",
  "key35": "5aJyrPzSFzzxfoKEqX63weyEFje8Gf3LZ3B3pSJdnQs7XsA1SCAjaUfRv6NPtcJmb6g8jvqVrsa2Ka9jzdvEmzkx",
  "key36": "3FNM4TS8PWsgnw35bfd9fhvPiUdBVkap4CgiLUy3VNqiMdaw7u78tjHqitSEa57QfeS6EJLtMAcZcwJMRTiyUmV8"
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
