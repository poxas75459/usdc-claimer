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
    "3rc8rEac533JJ8w5GJ9WXFoUkLYVrjKAATYV3aHhBU7GiddK6ofJo3BQ6MiPAREich8b5ub3YuVVDHt7FisKWJ7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gmq9XjtMjTCe32nTPHLJgi52KeuDettgKdYWVCTiX63mnu5yrnQA1Nx9Xe7tUKkVLMtiRJV9Q899neVSt4jXwqK",
  "key1": "3YvM4tSZfTBPaRAP62gto24gPJVqJpGR2cmEp48CqWS4Lj4c5k6mShUNEEw4ZSB8zGmh94ep2A6RrzWXUdLs3Ar5",
  "key2": "2L2Kn8gXJFtjCVTzZpwKfZSWDupjPZM5G8dXFnJCj9rvRqgMhkgygLBkxp1gQWcEoUbc4JajZBuko43gpw4y3Cxw",
  "key3": "39xpmUwChmAjqVAGSYAjBxHQPttn8fAcngz8dhhhu66h4CvHTexoYzdLoGHsUuJdnsyz8z9vMcuUMq6LYs3VxqnX",
  "key4": "2oWyXahfNxuN6QdmFeodZcUBfnTVcqy1pJy764xAk38XRswRqMCtXCzgqQhiBtY7Ri3aDD2PsMWc7pD7pcMLvtCx",
  "key5": "5NmF4ocWHSQqUQKEDLpruC16qZZnxJ1TFzvgYQBjAHX4jNVKX13SkQPxyKGEp4Jq5QEbVFBZ4c2m6YqbDdCPngzL",
  "key6": "5tyzF4R9nztyKBVtFfZynP5oC5QBVDuy2zmMjgcfN3gPnCjzTGgQYXCgaN3UdY6BQwrrGm45C5nRx7FbR8d35egj",
  "key7": "5FrYYxgZk2MPv8QxQYhXBbBqVhoqt8ELNBbHc6NbwYuW31RJMDA8nGNTov81h7DiafQcWYbYVamKWVpeiT29nrgn",
  "key8": "VRBn2F1rxPqmNQoG1CMQUThGR4fsLT5u8dnh9CT2daqsbSukmXt6aLpDsES1k3EzfWRkt35Di7xUVbkBbP93cU9",
  "key9": "67CPKjZwLCeaeUfHK6hACQu1GCugNhwL74REajZa4WA9wjhsRPKBJZiGr39996uJtDgxZ93VGWNzyrirVZvEtDKq",
  "key10": "4yMzRYkRt216Esh5iryymVNYvFLD4EY7wxmTfbESSu7qdMNqFTwQmMBKDkmXrvx5eXKzGYvFfydPb3hGJ2qcYphM",
  "key11": "3yS6ZsQ8fm7WYBhwUxz8Y23Tgn838XTyenrjyviWJU7c6cLFd1hU1JfF9qNEzJ52uLYRHC7BMvwFugPYMaQZ7nNG",
  "key12": "42uVtQFEgdvVRu1udEPTU7kyzLJ25wKAHUDnKAfuoHr8vtEsQCyqB79YUs35kJxFLd1GTv8Ddi6bEL8UeUEFnwcC",
  "key13": "5G9Kp12nkzJFCeUsbyMangNRsuqMc3UqoToaUYZejWjTUbVtTG2SFVPAXzxuhTGyAwDzx3DZYiNMWemho5Un7USo",
  "key14": "392fruqLQYscq57WbLjvbfhBYLXQouuudGhZ4hnjaNeyXR3sRqquuoz2jT8wPcnHYdck9ZxyPzSSvNnWx4e1hRah",
  "key15": "gvFospgc9354jW6nLXEA5aNsGaWX5ASv6SxzuYJ8481cbNgNxqbQvBYboAxWwnRXEYETmXSFb19H8Vp1L13V8b4",
  "key16": "7b196NFuBqxTfKqGsGZVZbjPt2NCYhm81YQ8wCs75fdMKSiZtiwEhtGRp6FvmPJsVBpWHwC4RthaftkY3XsJTHo",
  "key17": "5iQmxB2GAwEkBdRvSUFfp1neacYu8Zj41ZeNEHg8jPm7sFf4e12mzXcpKsnvNZmiRdamCfn1vNMydbiFWLZw9svB",
  "key18": "2RCkUZLWd8nYYNw8AR6wS8Ju2pPF7zx5Tr4TP49wAgZFkZcjqBqiJ1BPC4DRMi4N5qLgx5ANkaNiuPfwg5tJrKAM",
  "key19": "3FDLPbKifzaQuAFJ8YqKnycoAjA63VTKbuWdRe1jgfnLMVsgg6kC3y9TZUEPuYh7pgbe5B3dtrPQjiXW5Q6uw8Wf",
  "key20": "5VtGwMhJ7JwMSZLL82LN7ATSNwikner4Vign9cR929bhBYW2HvpyRRGK1RshG2fNGcpqNoUCN131g5RoHbCTvtqh",
  "key21": "5PPfx5LaZSaXsvPjZu8atXyq2vK1zvRao8CxgFZbFChtA8h8Bji7sJdDmwNsdSTx3fAs5gKKiLuDAiWo87Z55Pv2",
  "key22": "51pxB3jM7FNnWFZtjQm82BTZGQPsxKzm4gyqiZrE7PxhHuwzMwfenHnRyp181azyYu635gfTzkVELrdVnyMmBfUQ",
  "key23": "2pZVDxA2YUHpYMEdZJFpytS27JZQstWqe5ZJPD1hJ1cEye54y9g4eXLsWkSfbLCF786bhdK65tw7zb2dyucM2M9S",
  "key24": "28vGy4QpgMsBRFzatDwdYA5j4hJNTBfam7cacym5kTpJX5ZjkeuTwgMs1BbUSGvSW4gHKzModvnG2Lot8TFrP8EW",
  "key25": "5EFCTx4nBRxwaYs1wNbahef7Ufs6YVUrD3Agk2XCdivGgu31QrZTMiLFMeczK1mFE4ea3YY6ZJkJCBbfqmfUCF9V",
  "key26": "4tWAXn7DNFD718gF5oEeLn5DpVSTGbPeEdx27AioGwzu78v4P1waakpYgD8wYBiRgQX9LqQ3iCukLbKk5CeVBfWY",
  "key27": "5w9dLNeQUuBCZDyyRjdZR4YcKoDLjzsp6pjL9Jvex5TYXbA9HxTWADhht7pn9T1qwgZxh3BFrqAqUfcfk3GqTNdS",
  "key28": "2KwJG2aEZdxJrdnQ7Bcxz9HF19fYf7Z3mB7PVs3jMX25LiwEnBXRWJuAP3aaUwb3WNVFfBBZJkjCwuD1pLLxLaUR",
  "key29": "3T1toBq392E6yu9gJQeAxu9uGEaXpkoUpSBEc4ywwk26rrwycLJ7R27pYspLHKdbvsLLchsQE4XgPyGLRuL2iN65",
  "key30": "5ZSSbqCcqSnFNLJFWrZBzzhFg2XoFYfpbYnykTCHfYp4tfaGG6AXtqX32ftXUB9dzv4NoovT9BeLsLfm5CsVCtEm",
  "key31": "36CJ1Z5EyBgHRpa3HQdLQnh7Ykt8MKivtD6MMKNiZ3tF2qUF34db5NdLbSsXG9952LjQ6LiZ7c1uwFhF16DjZM5",
  "key32": "3bQhk1s4Dm6R1Qh3Kxk62yat2sPboFHPcgVAiLxNtkCfcCqft9azG1P17dTgvTUjJ84TuXAHdWvG54G73u5DVy46",
  "key33": "4unTmPimcbvHgS45SerSh1gUnyDH3YSkR8PfZT7j5bfhrgAVgZcyg7AoDvoLNr9ZepFgZY19d83QV2XC2AxE72Y9",
  "key34": "5BojphoDZXjKXQQRFb8pyJNaU5SiuLU8ExdVXSQFY7yYdDpokkhcx4VgadkmSYD8WNsJjbr98Q3Q3qXovKcuzAH5",
  "key35": "5TukfwbH9hxr6oRbrYn16t1vgUK3WGv7iWvvpyghNhtzHoxo75oaC2pLeRbzW7fWeypCWCxdWCpJMNZhcypoaDAM",
  "key36": "iV7pUEjvNksde25iE6Vaq1zTTGQXQH1X2V6FFxRqUTVXpS75ntnZTgXese57KRduBA7VHYCawTgW8VRyBq93gV5",
  "key37": "5Yruy56BxPbKggPtGyaUvxaQ4JVDFHyLrBs6xmBM7MprRMo1UaWfhTaZVK1nuXyVQ8DQiXc7gM7ZB1GsrwYGuk2t",
  "key38": "2ejhMCu8DRx8Qd1guhe6cKGcsLhfwda9KgXHejby8RgyC1APsEC5SsAKqUQDLemZWeSBX23uc9DqXhoJYFgqZYoh",
  "key39": "2QyKV97PUfJZkPySZ3qQo4xoanAdt92Vbv4wp1Wk7df5u7p1XB1BZHL5n2AtsLiDjL1LXDVDwD2CEHJygfQgszem",
  "key40": "22LSj8umKKzWrAKvSUMTqAzMzL3a9gaWZ2pLSgPNogWaGiVpR3X8gWoLaFSiNxtVw6aBZWDD3nrjio9i3pRWwCJZ",
  "key41": "2XYoRq5zXMyUxucrm2Zyb89JuGtBxyexdtpskxGQas7QPono8zPSjy58AHaQBm2BEAnb3NLKszKCabRsAsMjju4K",
  "key42": "3mLeqh2kUE5ZUZ495gSJzkypJtshBra2X3iX3YVM52vBB3MipQYrqTkMhGvu6govMKKt9Cd7yFnJR2HpNz5eHVjP",
  "key43": "4766vaViei4yfoNjCrULhEYwT7FieurxTrUxkrXPTasTM7FKmD6QXLzrGhumeAjttpViT6C7dntCNFHB9Aumytse",
  "key44": "4VD88rJu8WW8BgtRxoY7Ut5z9YShFuXVRiWNjbmpr9BPC3bWpa94VsJTTZD8X22BfNK5GzWGuKQGwWBWySWmqvf8",
  "key45": "5fVyuFPaZRbwTh6UegkgFbg6aA15iTkGcMCLFeXgL99UF46Xr9vqgTbuoQWcwPrWU4gftkuLyDYmTw4SSkr1RaZ7",
  "key46": "4HCqd8Vp9ti8rDbraet5MPEbFCKzyLi1saPH4siemsR5WeGiKaog2veMoriiB3WpMq7ATiVv66aNam5XrWRUH8bk"
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
