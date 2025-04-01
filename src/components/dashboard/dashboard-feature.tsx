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
    "2mFetwSjXJSUFXXzMWFPTXkLTUuvYMH3x2xuP2osXfqwoxX6FaowAmHPAUp6UzQcE3YEeewkzaUgJidTsw52PoPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c4r5pBt8Vjk4AUMU1mxNxxTspkgKwpmSL3mUxVwP2vPVishK1jdsNpYtfzkUC9U8P9gDv1ub7sxd1agZLfmpWTh",
  "key1": "4kxhTfHcskgwT5Gttc2sgsyer6tDqhnMpgxYDkahEDnp2fzY6ifFuhMTSL3HpXUhXEX9vZkNsDfwjtMAy6EuM66f",
  "key2": "2PKngSEwCxpkvmsn9hP1k3WedzS2HaDveGW3PNXnXCSgtSqJgityfN7iyC67ioGyfsjLWaGpEqJwzi1wDdUMYVYK",
  "key3": "Lf5LkMw261n315L97RmpZBZDPQJFyyurcwxYHXYhYbNEDcJYPv4NVxrCtZC3WafrH3XZporWep9y66F8tGBxwBC",
  "key4": "5SWKcEZnrSmQXgu2YfNNza6EPUQpDjNau6oS1om4hrN6w46fuxzCYqqF8C8Koz6C9p9eePKwp7ZHroMWsvnpFhvw",
  "key5": "4oaS8EkTY3XeWzaaC2La3Cx1UEJapSAgysuAfPtgybc8UXFEvuEvGMkPV6rCtcGrR77jSeE2ssbqcTWp5mLgYgXM",
  "key6": "5ivDKQm4jtSuTxPbKnmAZN7LMcgpAtHx3pB3V1FqzHeHwnXNobWb6k5pskHxMBpGM1KWNNBJ1owcHe5DxfAr5Xuu",
  "key7": "fbxY4NwQyYyJB1RJBujkwmN11dXf5bXxEgcyQmtED4Xh5oKi8cVHqFdXnEAgD8DsqGiupabN9fxyYSP7iwTcSUD",
  "key8": "4n1vk29s37aqfrzsQGjGBQF3fq2rMrHsZeDHfDHejHghZUd2xtW2RQwXFAdbbaeyrB6qWYDXF4MVfGffor9UMKBW",
  "key9": "5C7aGi4YKZkTu2XmQVoz91YWiyZcDYpAdwLRFHQ5qyFFVKguRt7JgLFetLeK9mZuqRi1J7Zb99ohxvL5K4AH4qeb",
  "key10": "2JCHHirSKXsTTAMaU21vVmLEzxUMMJxyboF2CbsFbXgK8hLiex66t3UrA9dekgTN5RVwmuChWFN1owAG3SXRDjAv",
  "key11": "3nkMc7XnZz9Pi1w9D298v9WKSCBuSdRFgghS64vbaGXKpgFdLNDM5cMkuebY2A4xtuhja35G3Y8oapUZMrtxq5hU",
  "key12": "5Q3DJyCFjkQPer7ZpYUxDgXK9cxu49NB84cKrYESpXfna74bGNdsVWkvk7CiuRUxWzmqw3u5xGbwCdhoEQsgzdxs",
  "key13": "s8vb9MMpf3CRe5sgGR354jjwfeFHcxth3qhTCGTMv43cV9ktsKJH8zzayMDee8K42GT6QjDW1fAPDoxu8aLtMeD",
  "key14": "5zPJbMNCVmLmg7F7zhwWjQCKvHprFafxBb1caCJWo7uzPs6RTBs9nAdQHGMH5FEBQBBidVyFmKhRTyuojgqMyJHZ",
  "key15": "41N23Ua8LrLkXPGqBZYyAX1Z1MxAusfVKKqtS84AB8YjoBEL3zTSwCD6A4LzEmbpw4wD1MBjtPr8v38hYvwG2QHS",
  "key16": "56CdgL9kmUPFZkDSbVopN6GevfykauyAPguV1kw79PoTcF1xRoVSDVQQB127xUMKnAw1Tma1TBec2KHGv7nuBtS8",
  "key17": "2uxR4FTJLFBsQ7Dz43maB4RyUMoj9vfHtEBBUZpYDaCH9yeRrZ63k6UVrYE5jBRtZEgxpw9pajKwRYo858RueB27",
  "key18": "22TgbZJQWAoKSPR4BWN9fK8jpyarz6edht4UQJkCnn2JKoqaAXqhjtZDmThqmzxwqqdyc2wNNM7DZARKSjJ8NGRD",
  "key19": "3FRshEWCDFZvqvv1LbPhWFmy1MKtgjHn6dCBfwsf4aN2pXMZkcsskXBmpdtAD7CGXb64JUM5QfyuktukpjshALUg",
  "key20": "P5TyguJ67YAr4PtEYJa1kpjz9yWMMQgBG3pnJ14ftE53MNaodjMzpP99kpvQRiskgZafi5WHYMWjMXks9NfL85p",
  "key21": "gPHgCatX36d6P9mvSq6Y3nMgmSQSXjxnuZpY2VB9GTgyZHnvJVDEWEeRdiABi1NFQ2gFqZcFz4vcNwvdHEQgv2M",
  "key22": "49PbkJHLJsKJXuMpEqMdWuEHYrygmrGJAMnsrXCwfPoq2BEwXy4g7hFEUZdbf2V3C3i55jCnuYKs6iagqK7JkSaX",
  "key23": "3XC2EXMbM8cLeSGmkQdb692xjrHjJBzraBeJQE3iWypdr6oAcZGyY71MoiAaVVBpUv4U9AoMagNR9f1NYK3r7BdR",
  "key24": "53gWFPofkQPLQAcjG7331QTgzcSxbwBzZEaPe4XC4pvJnFEPgQvMrLryL7ZvveQrY6cg9cmFA6dPAdxhNgFRyEKd",
  "key25": "4nf2rfjLWaLMpnGxJadHrf749GiKDA1X7CPEvNxaxtxetzZNzy1PAhUN1V3HvoVpyZJhrnLQXMAADbbfegNcetZZ",
  "key26": "4bDKmqh3DiMz7gtcjPqmUTtAfLQnCnEooT9P8XEi6wmHtX1xdv7uaM7uRnRZAZo7XoHDLxSKNj11DjJMnNXKnCMj",
  "key27": "qbxpo18hLn131FR1SFAHzPheApCUt5ArcR1xPQd3v8wQxB9rQ9EcJ1YEJk25TojbnENCiYjN1y1SWmCbbDfu1YW",
  "key28": "4iEzbTFgS6K8fpEoAsN77x2ZLymgoL5Jp2Umnbb1HyshfMVuJ1Y434te2QKW1yNpVezGExzuRXk3RNHzAbjZ8obZ",
  "key29": "2wUpqiFJExVv3bQxYMjbe15pJcq55JCkgR8oEmPKFHK3g7sSAR9BPkq5rBimX9Yty5q8F8cwDDRprzJET88pKHE8",
  "key30": "h173VfHmXa1QD1Z7pqxkgKeVyGVyMbdRpuRMZJcTXXa46W5NCY3sg2CGyioRRTS9pExVKKZMsgmQ2QCpBwWutPr",
  "key31": "R9wjxtVaxNGMtE6ptg6DoHAQ6XR2i4KLNtucLe212UxDkHb1ugr4xeyYUH5sSkNJhXM3sQJjYyCxY9c9wMZ5E71",
  "key32": "3xZPC9jiLmFPRcTwQxgZA69W8QBNGrtdC9P8tECRb2EkfmfoDgSx3h2dJEoKTjvduu6MKCKxWDb8nc8Sy8SGRLZG",
  "key33": "2dxjmAECCGs9dZEYiv4AsmrX7uqvYzsLG35xnKYJGzNkh8T3UZp67cjr2NMQzjq8vw88ZfCnrPgX8ECgGxke3CB1"
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
