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
    "4n9Q4ZqE8T8k9LnJcCRvrBwwY9aGJiHQe9dLeE6SqyNj8r6mMbxchT88p5pZ5t3GYwZk5LFLMNCSRY2uaajDU48E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yA7hbc5fs6HGktXHX7qaTcuB8RfKMTnSG1hBmbWWWxdwDWZbAED74beCu6J2gv3pzYturnQT6XCNEoHCcdN2kb3",
  "key1": "2gsxKnVhrXBc5CmWYaMbVyrUd4h2HAr4Aod8z5JPZ1pUAqHV5Kf6vj19awPwbqwTWKPHGfNY7bqLGFsQx9RsQg5n",
  "key2": "5xQyJgYQjf6YR6cRhwYTMHytHnJdb1ZEz9VzF3pcyCosHjyrqEkjp2bGRXfAzZm65RgYnZ7wDEU1JexiFASefgeg",
  "key3": "4A47FZYDj8HnEr22D5hoNspqGkBPs4swu6raUWggmNnAqNnVEBwY5GYis5HoVv7wh1yz6KtLpeT5W2qoN83KmMVg",
  "key4": "5mvxGVKaSR1x4qXiHpTSQsVJLWt96Vxq9sHvkM4njWm4UkY7oUTDUWenhk3Ssv2MhoXeJnUCpqqYTCEsQTBsEUYE",
  "key5": "2cS6DpfaSQDTPRPTCr2K42pv4mEY5SxKmE5nSi1TYkjkgNxhyWsvv1GFi1zrXoikFtWu2hsEdJsLRk9H2KbZ2Nzy",
  "key6": "RVUFyCXgT6QnqKLnwbRuvq5tQoQUftjK5qwQauCsAi382XYHEASoNieCFrNmbVBdMahHihYFC5YTG4N7XCLH2ic",
  "key7": "2tH3NjxTH5v8CdqeS4FkBQuyVpsTHGUqxHFxH9iAE95fQMzp4VMjv6EGvyYUKMuouztN1sphGU4EMXRRVxUVoyA1",
  "key8": "5HqwMeWANRvkcEN9VEKWq1BAytJeFckPAPaR8fHEhA6gjRtJMYrE3te74hjE4eEaZvALwr1YKzDsyMtqS1zi68na",
  "key9": "kGjcEqnWYBYzfwT9isz9h6TDXpZdATt6ompbtkad3Pbuh2cemP7sZxoKmvPbMPcV47NoHpzcsacbpV7fBdhjiWR",
  "key10": "58uiRDzvWXPfcVHN4Q3B56eCSGMmqFDbiX6isZ55eZNbyLiZECYQ7vht5fzdL4kVBRfHKgYePXyFKF9QusEm1qKs",
  "key11": "3EqBS1p82EnSGQ6zvPushpEgKkZbPU6M5fK3xENPqbvpnjM3fwVi5Pn2dSyot6svenj5Eoqq4XbXKp2qujgwYVge",
  "key12": "qowScKS4N1mc4f8nhq1Jx7wZrnUNutNmdcow8F5No4jG9vjd5JVLsRCkUkLasLtP6WzrBrcUdf5THVGPxqiesBb",
  "key13": "2YqAhWTorauAnjxiBewYaT2hG6wMnhCA8PZrTpUrD6LhUiJ9a5doLUiVghPKp7APd4EDtJgQLk2VTSkE1pv6xFmF",
  "key14": "38k9B4qAbKaBQCz7vpMNV6nVqEGBkr6846AsDFJ4VX6QrSaoAibDB1KLvXKbTtcxDAbMbqVhkNSR1NzZWb3gYv9w",
  "key15": "2phE3TcT6eXnGrH5Ldrh9JDkp7TwxYT5xnzr5Uz2kvcdK243Egon6Lz2MJ1a8BWoJVBr9g6kk8GkZ7YozJa5WF2V",
  "key16": "2JJ9bjAnvYqdVCRmSn9qU78htDChWeZQdrNJt2F7UBkc8AMByXqEHWT9WVBdai4CvbbYNbhRA7y7RRib2VShoHv7",
  "key17": "3fdG4bMRuqe4Ru3cJrbfiNG4zbyzhnEQZwzE3WpCCAnWoKtGgrVH6dCKgt5Vc6SedV8Qwuda9uAoW2Cj8Snq8jKf",
  "key18": "2LZ4zmG6TWRXQgND4qK4by9cnd4311vuDiFE1QxXmpmxf1eSrihRtZuwi4HEjTdTxppPwuiT4uAjmAc8Twhs867E",
  "key19": "3XqWUqjdb6mkNvMPaSpS3CUQPc3APpyvxKpRN6ngaQNwZbyD3srwmaJFZPT6SgcMnWLmBqbs5xNNC74KrjH3Q8ee",
  "key20": "4CNdiXWaSZvTiBZgyRQ4cYkiVKX5T9acm2tyQxF8cXLBFtehTVzs87669twn9cndrj2Rg4r3RoaFCW6usumHXfp9",
  "key21": "5LtBRZ6RuwXBn2ZnR8CxDJSJqe59qFX5Ge3tYYHLW6oXvLLVC1MmLPofDvVTD2rUamxrdap3PMnMap8kZ5DrEFuJ",
  "key22": "cF3uMKsnu6mhUBCKjDjkHwKnNJbBe1j4MaqfTLbh8uq2MHYaS1Ze5w48C2tgiBrK9fA87S9wSHQYGExpGw33bNs",
  "key23": "4F7THrUWWUFP87ry797W7AUM5UkmBupBrgLWYrvWvo7UcMjJbs99iC5CkQqwCAKrFYqPjRhi7CJUvFRbmqWoM6V1",
  "key24": "2w7aQjvcJLNSL1kiwevcU5MQ4uuiH5q5eff8BriffzaSjLW8uZ3fguou6HTMxSbLuKSJTEKEbzAuZvBkgYBAp4Yf",
  "key25": "2hGpccmVXCh4YMKxZuYXE4MAy1nvmhwEeayfTY7uCJPPwn49T67mQmUo3cakGpwoLocp3Uz6e4yNZYDvQpjNSgC9",
  "key26": "3LvJ6n565FfqEQqbALYqV9HT4b1khpmK5pNHBTLbhzWjrnFFgh6LCkzMzf8eZoSQ5Cnn1YJWm5hNTUKHyGt8HhNr",
  "key27": "4RfTGAUQ6UsQDQDsb3w9RDTfF1y2SveYTv8pdjhG6L8P8Prv92YZyNKSXntafYQPQ1Dn3WaCM2g6RsWPmb2kqff7",
  "key28": "4XwEiqivQYLfXLXi4DiPtQqPib9QZo734nUNXTHx4gVHreMTi6XrA7oabFt72KEW5xfugyo1kboKRHprfHLUfzHf",
  "key29": "59CdFWgjDucRkawyBDDw2JgAFiaXRonypiZyBxohnzycD6CBMKCfBf9c7GAx16J7b2hGRWLST9db6aw5YxBnCHHw",
  "key30": "4aFb1mRvwuivMX6diatCaPtqF3sRK6hb9h4qfkYko3VKzK8TvCT9jbGwPFq345hYVPZEUqxZ27eKxn2bpaJpUMrC",
  "key31": "35hVCbEPGBj68b8MQ6iiwo2CKWKg7it4yUbeNVMNdbt47kkWYd153TdDJdSGRCrsJr4D5LDHtCfTk65MwtnMqWTH",
  "key32": "53kSGav7WxM54aLLrtkagBY9MUbGMn57U2iopGWY6mBto2JgyJzuGseoUH82YHz6virNcxWCXXzG2h7URSXh5Wsz",
  "key33": "2VQgNDiRAakEYigaLvCP9owCDe1kxLS2L54hxTkSqiiB5Qbot9JozzopZbv8EM49nTp54GvDz8ZdJNLMdtYZv6n1",
  "key34": "3FGTVTTNDzm8vFBLqvgyfx3wbGhkgUaaUe4K3F9qz97ny7cpMEgcmLf1KMNGbrNJYF2sWoT3tgPNJfFQoH8tdVtQ",
  "key35": "3BsDT2ZTs74yojydG8qKBBypHXi2g7fVLHUhmheJhoxfXwp3XMR8SiTJHNTWqra4ed3WG4ctVbyWWeeq8AJrswbo",
  "key36": "2moM3nZ4tsDv3QnJ2mBDyfwFMadn9gy5pk52zMD4hDAcDGqqVH1wvssYsqHXrzn23G6ncsHxEexvTiMfcrW31AzM",
  "key37": "gtLJPC5ovvDfqqiRUkc8DT9DJeAcwBLFQPGWH58ohNpQC1UHVnRA2iocLQPn3pw5wFB7xrgeenyo3msMNiAnCCR",
  "key38": "4JdS27za1pQoZb3zN1SPrPjMcZZxJRZJJrCepF73XFcQ5df1n2WKwUmmvWZCkh2hpqhoJ33ph93coquGEZnmTwWy",
  "key39": "2PtquZSkEynjp7akrsHucxuF1vKLYD5Yt5GrNPzwuxoEnCDMTvuxSWsrcoGLNtpyHDR7udBWSYEZfgJdwHFg3jef",
  "key40": "5yKdKmuKFMN3HAj7XLrCwa8t5sFKULhsLd24hdiDH3BDrWv3RrEG6uhsmwCUoaGzsjfcWSoKEPckg1Yvx7xYyT4y",
  "key41": "5fUfJVudY6M6wsXZCWu3DuUS4122Ph4ZJRv62T33R3a3UsRzt137pvWNK8Qu7sQhP3giQdgMB8UWWac1LtVHSp6r",
  "key42": "2XVpYHy69QGNCwdu18EyDyXez4s4RmUBHNniDn7EEyKbLiis7GWt2WaNYPT7MWAJvuq28LMju4zbZz82fcFcDWdE",
  "key43": "3tEYLq23ZDnqWvE4WHHVrWcYqf8oV88L7WCRy4QxRCg6XPiDChxubNTsheKQ2iuBZCrShxTi38oCRDqVWmN6ZGLu",
  "key44": "66QeB5ZXUVvCenXef75Q7c2fTpM85vVuVHo861kPv3Xyexh4XBn2aNaVzUvCKXxcjL9EyUAJmzvA5QghGaTijiKn",
  "key45": "4pvL3psZFRjUKrswAjkeRctztmccrZgs9LSiC1ErnDvSGLw3TneEykttesyMHMdBuE3CV7z9QEqgSsveoixmvUyb",
  "key46": "VsaGDeZiqcTJFZfVseKnvz5fAs3MW4WWKzq6uF1PtrqfNXmWwSym47hFM6qqxXuVikPfe1hH2wy3evkeApHUTXZ"
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
