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
    "KAXMDKuZi3sTraPWSpQPxMXHtnRjDdY95sutodJrznYgM1iSqTFNwFLKFRdwcN9A7FTWkLNvSiokKYvxPuzh8on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dch7Nus5GYPBrmiAd5taPkaqEtBmozx2XzTkvXdUKQZ1RMDEu7gu8gHGAzABfNVrDmU3mvY3QSCPTNcq3dDxuVP",
  "key1": "2gBodPwXR5o93QjZD5XGAm9nnAMfoEDa589RZwc8ua8vyZGnKCJiFNwsVUv6py7s1rRjjJQF4iiJtokF1FCZ8dbR",
  "key2": "4Tvy6ge6xaaFxE2M6LGXvmW27gL6cgWhVAWg6Q8MZ9ownekpFGLWvf8padWEE78aa5K6RqgwEGBKrX2r1CLvBDcR",
  "key3": "4GMpBBzKDMNmZVL6ovDAhQcmdTW2maYULsnhxdVawzNFjMMFNUaf9hmgqMmJmcqE3TQ7GGav2LoH9V1Z1hX7wgSn",
  "key4": "3avk5jBGqrw9wprLZLg8tKiq9CyshcyQkiAbMXePaMY4TzJWkHfMk1hvSx6vwt7ohSWxRFMMicYLDciZVbuiXZgN",
  "key5": "5F6pE8z8ortyvmD5qQcKXvQRuNNgmrowTBMJzqmUiJ7UMCT8fe4sRoSdFaCj9AvYhYjm1DXDNvY7WEnfNHyUWxDj",
  "key6": "4QnZ9jSUNYFLkmudHvp5s5MxcyVGf7JHgitCdfiGTkidmGvQDftZDKWGYKSe3KdVcp11YdhY7evxmud6PaZtwwP4",
  "key7": "2CdXXDtLmoE3WVRFGtuSyuYZcTgjycrtuL3ZuVi9VrjSp8GXhketa9QZjKr91ie4dBd8tjCTDigJWUpFKMUdYhqd",
  "key8": "2ydfBFoqkrocwoLMfCmxeVZrrttPpvhHMYVGmxgv3Qq8RrGzQ4WkApJtG1QMwAp9tC9FDYzuW27ppLfya12pApX1",
  "key9": "2uYarH997UV8UWmiqMRXaZDYth2pDFbQNKmsuuDmU7nUDES4woojeJHYtKAmH9zdArHskcFMnDS8E3FHxKZL4SnN",
  "key10": "4Q5YdjeecXkEgF2kCETzo9g2gGNggpJDiyhqStU1gkQ7LyXTnCsX7kTeUaNX5KEZyJy8SdsxzCnWNhyxUhrhTUG3",
  "key11": "3Dr6dNjP7Xko9hBY1TR4ZGugSiMZJSBqXhBvzsEdmDpLbX8sSyJ7mmacd4cRcCbKoheGmp3yTMnJM5KcnJ1VobTL",
  "key12": "3WtM9jjiMtfP3y7v6XRqCRTJnxathB5ANmvBqShVDGJHEaQLuBSnzkdoHcEpSPYrfW7TEWDkm4Pp9tEySZ6iTHb4",
  "key13": "4k3wu9BKMiMsLX7nRbVwWShdWuvMwSi2JKsKPbnoHWYCChpbMxa4HhHm36PciBAtXB17csZYkTLXqeZHj7dxdijX",
  "key14": "3yPqyQXcbXShqNV8qGzfWkoepcwmPPNdEmxaJUaaSiEVSf8sUdUFqaUCVG3CnNjBNYezqSMbwVCdmUYwgAhSTekh",
  "key15": "3a7eFEqpEqhchATVuoLrqa5j1i348z1ApVS8J9GTWLszb7RNBLQ43mLddZXCF5b6msfWgEBZ5PJqaRc8XPssMMg4",
  "key16": "5SLrtGfBPHh1vba7w9rTDKJPd5qZdGm7a6QnKvjis9YHan7THW79d396xn8qE2wSz9dM8utSq6rxRPWAKyuMkw2Z",
  "key17": "4tcDvuPQdSHbdny5JdX3thoc9oD5JA69NpyQTAVfEGR54mxkygYVvYqjNwuJmn1ngordxYHmouT5EJSYdn3uAfFw",
  "key18": "5m9o4oPhhPzV5z561cpZzehPrir6MtXv5Yn1PCwanSfyTLP9AJqpqxvBPWooXLqkvSYzNa9HjG4ETWb2abz9YeYE",
  "key19": "2QRqkNrocSamtzWcqHVuwfzTV7xBqjKxLQUVrWa9hhHyagpywg3jboQjqpqQpRPm379ai8KUhQPvJFiAt8HvQke",
  "key20": "54ZAytu5yPBMfiaafAH9XDUToC96fidE7c6wwFqsuQjXYazfhXm6gXKAzo3ytQct3q7mM26rRMzxvxAKGXUHoj6A",
  "key21": "5pr8ETC6uo1U3PdfLfXGbgAb3ajnSMh9W7N9NWG2HpYfNAssgUeiqBwSVA2bibhDgAWX4ApoJDTmGzEQBM9ef5Kh",
  "key22": "4ApwymvXpHnL6fbRY72ZmwHqbGZaRVyF9gwZC4mSawTghDim15jiTYpC8rzJYcCVFkstnm7RnixxAtAye1uKKR1A",
  "key23": "427U31g5rejZFXkQ7LGFLmyYjJFCGXdhiwg8eSfe77Jw4rV7MrXAnGJUQ6AmhU8ypWqzbQYaNDxiUkt443LYvoJr",
  "key24": "sDFxNRk1gcLerK5vR3QUGijimWJ5hrQvuKqKPQ9bZoAtSsjRqQBrFeLnMmPpwuGCvr6zp491AA3JG5FrntGpuTf",
  "key25": "2AHyzmW94d81PchRDq7k4Xd1TgMzCRGqZHFVZjxU44HtUjV8mQEA2yNDUwSC2frD9nWBCopzKUG49QK51gd8cMFt",
  "key26": "4bNVje6f6qUVJJNg9obgZ8yyXc14sv2q6VGVfQEYbRHUBPcgwg4VfRnoXnBb9Krxk7dGxjg39CewGgEgMtD2X7gC",
  "key27": "5zA5jZGmVowGXb36MyUAUYUfjudXSjoTQAe8ArY4FkxKYLDPz1HNKpx9hXMeH3zNWSjoFmogPnhUCiEAYEjSHMAc",
  "key28": "5kcjgyQ6ZzhWFyGPM1nQs4oZYZnxt1bTNjXdnRxM4kuVqs4KwmZaPGamF8J6Ho4UKUbBi2MgVrGG1djiGsExxvv9",
  "key29": "5nNhhnAZ42EgW85hNdUovQxbMTBTi12mexNJsuxJed9EmyXrfzz3VBFwqhDtKLwR4ismosuJAtRGvwBHqwho5uEV",
  "key30": "4HvMkNDNvjeS5PB3zJfPWYeGQB2w3o6n9EPxNXcHsyi8po9xToGpqsyRmEgFocxd8yvyceu7dFwv2wYTNWkC1zGk",
  "key31": "iQgj2bm22mGKNgK2mu9DHaf1p9QzivRbR63dAnvRx8rDmfFxyMrQAX1k6mobtvhFPyjqUdMSFsrTT5Kr1bKAnHF",
  "key32": "4dWKFpbXksCQuqEoyVeuLLBmQB9dct8VarB91WGnbNgaa6SQsmphxLSLjLLzDYmt1DquRRwLeQiChUk8xpTW5GnH",
  "key33": "5SuKePutHmFdgxCXAcHK7asTUPvusXyfoKg8PZgBa9EDdg3fz3QgP7MmvK6aXyoW3QyibvrY6LUBsyXkhZQqvFQK",
  "key34": "2tJk9YcV1h9JSLUevCdkiXuUXc7FGMjGYMoUxBnRmGPfJjtuWZQKyZXLPJVMR7cy8vcrby18ZrLCFu5tYfKwqcMc",
  "key35": "4tELJqq6so42dcjTo1hw1VPz5gM8wMwSkuj3DezonexhxvKT1KWumikksq2aS3eDvZqoEXbRyeRuUzY9eonYRW7C",
  "key36": "DhBw9o1bAvwhk5wgafg2jEhb2Sy9EmJVeie81V5899HjtaBXyQz2WJnGCecVX8fpdBmGPnrbj9kgKRgoE59WDy1",
  "key37": "4DW8WdUAtfKEgEGfPSHejwGAPdY9RvoBjvTLKBZnSHHw2h9mZ2EbGk26nCJfevvr3zMkQdhvwwjoFCFXKvgtYhJR",
  "key38": "4FAYcGYJKNvTJkF3wYExB96JYGdFWP3naqFkN5YMFxuQFFdf1eH71evE8bKC83wtCeedKuXU66SAHQEd3ZjHBfX5",
  "key39": "2bpcW4BTrVLpH6j12utrxxzpiRSeLgbSkLad8h2QDgs3FFkMRAASTVr1vDmDjnsK7buKkbAxUbsHu6EAeyt6E9kK",
  "key40": "airhBJ5hUw4MevkwB1P9xiFvgh3zoNDYtC4yjzdiEmMq9EiPJLeD7RruimGJNb4Udkb8q8Qvq3yG2qEvkErUfsZ",
  "key41": "58YAPxTaUSUNBcWQCMjQ95dtus4gRC26Sva9Pg3Wmmxt9kAMzL2vtrczefEM4j35FXdfKdEowcw7zis9esNaTLpZ"
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
