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
    "3WWdYRF3FBvMm5SQF6cKdvpPw7n54BNLJD6bCnsaX6iKpgW9uMhVCugMXcbu9jsRWxuLRbNaD234mTqRjYMx5tgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QoZeVWswrbVHeabCzDeTQrhm5mFp1rw5xqRDMgtpg8UzLm6HRH1FZYn2HEejUMRCHaAdqvCfVL7KG8V3mVj8mTL",
  "key1": "Xvq6PGfqdVRhur15deN2MB78BhAMbGmsFAH2UaNw7GevwKpYvuL7iPPLDQxKajA6T1EE38LVEY4F8oFdTnArevY",
  "key2": "tYZHpnMKHLeNYFWRgrDacz7CJXX23rAVSp6KmnNQendJo5BgE7rpPTb1AskhNegAEoHak2p3XPSzKEnUS3712jT",
  "key3": "4QA5u5M7qVudh2mAWrYKp9HEwyTBbiJnirgtLif4jpkRApYE6MJY45hfC8Jtgv5abASh1zFX9sCJ9hxoYworVyCA",
  "key4": "5CvwuBuxenXJB8smbnRSTHk3RwPx7ppC9TiqQ9upR5j9Muzfrh9xiDXhF3XYU45GUaiPdrTVcsj2DMTzRwg6kVGP",
  "key5": "Z2PpFpdsuux5pGMc9PGqJ1JHEiHMv8mv8yQHCGWoRJPBiseggYEdGNcW9jasAGckm9JxHgWn5z5B35yUoKTAF9C",
  "key6": "5v9tcGr9fjX2ymHpBhcjMLxPE2yjkjFC8WUZA31LLAuztLtHtPgRwDEMkzRAK3BWeQCfPWzE5oGiXNgDEherzomY",
  "key7": "3o26YgeB9hM2k19isvLLTWpMXQbP9Vsxp6Y3u6rmP2w6UhecDa2gZ4xw9MEPTKs4HXGmu1AVk1gWnusL1fHiTzaD",
  "key8": "3xeGzbUfDhiBzk8nKWKCBgHs2DUaQFGWM1TkqxRgWtuJvE5FGGB4oGLKQXz7VPp4H94CfKBSts5NC9gEWfZv4ZZz",
  "key9": "5kz5WTFcRRgESJP9QhCEtxQZVXFgDGZHZjLaMDzS83UhP7YAjqu7cJnMQEYYbkwDJFB9ZXPtCBrAat4b37XCP4BW",
  "key10": "3fXw77rRRUjmYjkuPbpZQwg1sMW4NVzSr35ijnirSqGC6r4hxYvsnffrNK1riby5CGaGDxGdqXSjqbwJh8tANSkt",
  "key11": "5FigaNh9DhtfaurFLyaEVe1KofAqCshb4pQEKP1j1BCnCKEaRQKGw63zmV6RkGqGbLoLJcqsYLXB8GaqVbtJNdQu",
  "key12": "5KcoCJcHpsk3uAa898kcB68dMbStBHfWSFZWw4FPdPnuS9icymP1FdvAt6yU5SGFP2v3Ct8JCDQXuL6SJMXKa6fz",
  "key13": "5X4d3JdXW2MNnq5NCSHmpGCB5P7E3U7U2MHQgpRwqNJeKfyiSpJvwwuyDMCUkx295QefksGDgHqF9DCLZ3uJYQ8a",
  "key14": "4jmXsqgudJUJdZunAaEvdmaRT7WqYdSyzM9NcesHWFDda8K3Yt4BxkZfMCedNyooFV9enc2APWfY5rp5hxfuZHPh",
  "key15": "39ucbkbQhfn4tnMrWxrBQGxbgqC3boWQ5Hk1QCfTbZKrSkyHRirPCxrzq2GM6HjshDkbKQLL9wUnoJcppStinYZv",
  "key16": "4UuHScbvsExLFtJ5FHwMG7MuJMXMqAxg7asCcf5k9pDEZLFVrWA15bEkp7RuHXtFuPQD5X4HsfbQ8jS1ng1EQKGq",
  "key17": "3YHJVjLjkztG3btSF5AZ29KLCAZ7BFZ5xVQBpKnMqGL1RkP1U239T92f6kczeZtwTgG6g2bDocrVuiC4a7TaCZsJ",
  "key18": "5QECAcAD38K5ajRmQWrciVAeDnTZxMPqRL4fqGpCWz2LJ3hCYUt767abjBgMFoxWSdG7G3hHpLB4dEMfhesZTn6k",
  "key19": "5Hmtzp4zWFgTXMdc8eeyvUgJqawgeTSAaWEKqd8tQFJCa7qEd1n7KZhDzXGTUHcQ141fafTjciLGiSe97p75gH6Z",
  "key20": "4RobkU7eEhTzCizKrDgb3L5cvbnyqCW2TX2sDUrXnaky8vuXhEZV3YDkFMtSLd2jAGDKFujz7Erm7wZqgj6f6drS",
  "key21": "M1gLH7HxgiJPA96Bpq8fdowPKJGEPxRHpxz1xpzSvdWEah1auTPN4UXL6tgeHijPMm6fBMJ5QdSGzo9qzriPw3T",
  "key22": "5A5QMgxAy1jGWQao5w2P7MRjSCFwDuutn3JbkQRSLyZLVxEY7TGju1LCD5DLHusLxSx3ep8VehVdgeU3aPxFGkya",
  "key23": "5F8ncdDroSb7hgSufWb4oD4WN4ZQ1XLJWJnEWFSy1uXKytsTaYiQVtQm41ZLfKMdUWuUtMU3w4UkcBtcCckyoCvk",
  "key24": "5joaMbyTczwAgN2t2SJ6iDaEk69YJSL8iFmZAGoj85P1QVBpbeJdvzToJXrvqRcXRcq7vNHHLCh7E7j5JF3u4ket",
  "key25": "4ahk7WVqCBkezJb1dstXB418hL3YcXREz7HjrFyQZCQfGcKwvnr5ohtTDGEpq8iXBWZ5kig16jHAq6SZsSoRWfYS",
  "key26": "7TkyCz1uQNGRUwBszNtWpmAB9LUHkfbtJQkGgh835QVKsu4mFTWEyUgokxNW35ypvfLe1jPMhK5MCH9oQZowUKU",
  "key27": "2vfLo1jb46YiTkYC9qs2XhikAwWY5eKi3rotHTy8m6vbUgX5V5Mo7qeNyezTWf9vSJ4Jq77nmix1sXnbCkWMk8Mg",
  "key28": "kJzrHe281BDkfKyBHaLxPVt3zL7jhkqoJmU9vaYkRX2K44kqNKqjJkSjiGHt9rrzJM1N39UheiaY6ktAt4GYvBv",
  "key29": "2aqy1gPmqfVF5SczxmtDrYmNSQSUtZKmxqXyY1AVprGbn9KHMRfuBrbmEnNXQAsHmRrz7WSJfZX2dFnDtubqp1L8",
  "key30": "fHHM2vKBHRmb1emDcuxmUZXDYc4v5y7bxcqLek84oNZFFfXnFmg9poZ4Ty87XPrBhRwqrKGwGCcr2qPzLQz7Q5z",
  "key31": "3jRw6txr2SLRb7k2whaaNjLtvuFGA7GQk53ECKJjTAtwHY5tay4k7mW7vFhhxKYNy2kx82ACdErAMhHMvo84Wqgv",
  "key32": "5uHeo41GBuGyY3SCS8kLG3ixXvYUuJvXsLXFaqD2hjUSPwN3xhi49C5cWzcwSckUKmBsJPUQ1AjAZS48eVg6vrGT",
  "key33": "5Cu2KDLKkLddXttc1wqtJ3Rv1vBrDbJfcVDGMGVwQKZ897VXxq83CmE68zgKFQzdAcnBh2HimwAtieq2xnubMu2B",
  "key34": "5WtoQwvLMeo6NDSHeWWhx7XRY3rshqCTdNXUzwh6cQc5WxURYVyjrD3PyZCjKq8Djt9Naik8iwFidvDAkoj8QY5C",
  "key35": "3saft5SZQbET4JwtX5XR3T2wLL68wTTFyPZ83o9atusJDtQoLzoLbgUsYqBDEQ54cyqwN7FAACKFGN5C8Wi9X79",
  "key36": "66bu6rZMULV5ZHinUV7d9G1XGkYYdC1q4bpHs1bCwGQJqxsiwksojU81U7muuztxiwvNZiHiNLUJa3YbFZtm91tm",
  "key37": "3WS6v8uqpBQah4byEwsrTrZD2vKZPJS53A4idAqjFY97maaydr15tg4F8uFBaCdUHiLbfAkaR7KvfHsxLsb597dc",
  "key38": "2WSveK53HZtgi21fWkYqW2KG6CRAgAtUZnSsMCeRb6VCPMsQsLad3uAu7zxN6BnJiSDkactEndhic5imakoXLwVD",
  "key39": "3i5K8ayWBNMThczfUFqHxGoEMYMGG4CLbfuQzQFh6sJskAJBXXaan7inmNDbpFwh5MMaakBnHmDi1UD5sRrr5Jxe",
  "key40": "598Z4yxzbv27HRccqn1aMrVjqd4x2vkNVQbpXPFt5dJ7Vk3i3dcY7GWSmNjnFJRpgtWHZWdhPrkxJcV1esgTWTGp",
  "key41": "5v5A7fJGptEExfcCp5rfB7kFTkSXX4T64UMMkZFTGkiyFp5nga6gHq3PDm2xvBUXfKfhx1kK5MR7LPMstzbYCVhH",
  "key42": "J58qGD2PzdgWHUzBqY8asMBT9YKs9qVsU3P5HLCbRWc64fSrXH3QUqJ8EnHfgbp99XkToe77xbjFX8d7GXfL5j9"
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
