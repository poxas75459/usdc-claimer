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
    "4NfDYDvz9fheCibq7LHXqCgyLLisQyqq3fR8HEKovdXcawiesRvnFmbjv1Uxh8Xr4WHBRzikQzwsdpd3atuQz6uH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WiywHwZNaV6Jd8fXHdfTbb1zAwh4Ca6KqoMvdGAKzVuvTWCuvgwYHpfZkUtyaGfeN7Gjjwzei16FpxDWYawNTz1",
  "key1": "4pmg6aSwToFQ1RdSjYJtMCXxe6g5ZsBKQdr2SToVAfwBfz5gQPtLoCzeKtC2ALcty177jAQRhLESc4pwnarirMEv",
  "key2": "3w2FjB1G36wPbNV4T2PhgF2554iXzapYGCsmWnBN22nBHKDKwF77BUcSJRLpgfqWkQsTHPykEcmkkQ6RMvx2HgkV",
  "key3": "PHP1ZUzMan2JQVQ7zwqxSvbqYgRBGCwBWLXqDdFSH79mN5TdG1SyD3tasrTRgU2s1LN9FKMt3yFe1o6bn4WdwfW",
  "key4": "5eBzK5fzpC4BMx7v9FkRbNxRNBTDBjc9kWi2rPMCWaNtUmgjzTw41QXy2UR6N6sQSu853Pvu1dZz5HLA7CxH57Eq",
  "key5": "4ghYVsRRxowW2as7KPuGERVKjmaccPWJ81YoWjfa7WYpS3GasTUeBoxxbK5MAJVujrZHDaBp7rngbbzx58kfcbna",
  "key6": "5XT7boDm85dhymDs1mqQQqpS5qm1CCwXmSXBH9vEKrLaKE6r983PMZFcTAvko9LwUc2uJcoywozkX8x4UW8uUtM2",
  "key7": "4XCRhqCQwhYVAE8Ynkh4wN91Ypsvmu6ESJRaSfmrwg7zYyVQAoYGFkZEABqBTQKeHfTTkf8GBmbpm3xpfdSJNFkX",
  "key8": "5tAAKGfuoXxDDkq4BvmLHTMQuZXZWw2GVa1DMKcDF8rRsHMYGkPTo3kAZDaVp41mb5roTbk7u2xw5duntAXLhXPj",
  "key9": "4aW9Kth5CV6NrzCGuoWMqSuh6i9zh9q9bBWRbxGbw2zr2BKkE8gBDHAzL46gLnky3u6JfxqSZCi8KxZPPRgxxzMf",
  "key10": "2ot5ZjXZs2DMx3NcdtweSWBhMgkjs9vLTAxWdBK1aAn3ggxMxkaiTX5jo5vnxXYz7iA15St25Rs2kfDTqX1mF8nU",
  "key11": "CE7N2yE3Ar7qCu8LNZxR7niZLBMFeSkpYceynvVq96jrvBfsgyhmj8qHxb9mVxRMuLCvmNadUiEANkem3BgZMyT",
  "key12": "26Cznp9KDbniBLrcVwHFdterk2AkAA7u7chCcyqfTJM2HMyBoFjH7G6UqdGmnESt2xAA5JqtsEPna32xC6tdxVvD",
  "key13": "WgqSGgM9LBmHRtH1d2TBaAsa2WoLpknSmc9TJriHJHGRAEdPKx5dQTcBnrWwPWYWnETRtZMd55Q2zSpEJEkAtRq",
  "key14": "4iJKE3YbihvmayNng1FAaz46GTaeWxnR5UpWkFxkCypY4eJD2WgasWvHo7Pk46XhP9TKAa5Q2xTEHDkZLpUQDtZC",
  "key15": "4jHYnjybzG3ML1iJBo8Zs7hJRv4zC4c13zbhQGTF9BSo94QjXCkfugg6NXX6wkVLqRxCvqHDT642bfm8biCY66ni",
  "key16": "2HWoQU8N6apVy27eNbay3GYr15QZchEV7gG1wkz2VHE36ZYdunshcxrU4XC7xR84LNcw34DiRPucJm7E7VLS2Gdz",
  "key17": "4fvnnkXy1XaV2ACTh3EKMr9784PR4zCMtxZ7f5YT1N99JgBbnxdU9G9kP2Ym1JimzYMrruXwX2uzPiW6nnxtEiPm",
  "key18": "5rMWkXdGE11264FXV6nU6b1ppurJ3PPDuqEB2dXgyXYXAPHAHcWESh5Zi95phhSwwnv9mCdKJNhgjvXWxkt1rFBC",
  "key19": "HzFKgMWJj93woKtS8MSr6qfMGmZsF6r6die73okuNvrUW6sBK6KpFPxmayCVuCmdeRYjgzVgbWAbndeJEuc71Ta",
  "key20": "4YYGtWtiKNPnf1FHnX939Un52o9HKzjZBNaUojjp1btmvTudZCpFXp7kzbTP3hazjfmP4owQ6eCwFzbwo9EPx2FP",
  "key21": "3pNPXefwMHgQJLsQh9Uo9MPCJoQai8XKViTmqJQ1Baa8bSZk6h3vEHXjPEveFwr2VDnB3CyMPW6zMTt6ca4kjzKa",
  "key22": "YLTQC3Jnou5WxkPVXL1uqCo8vRqSxtk3AUB8KmwvoV5yQgARQTTkDgcxGgyQbKD8B1boXZsXHdVP48rjogEheDF",
  "key23": "4NfJw6ULmhkaNyigTW6usRTEXjCi3iAnuLigwjMgZQMbvVajvbwfykYFen1XqbdBfruopNh8rbRK7g1WCNJakFzn",
  "key24": "2C1R5uwB8ZmrXmk4x7B4PPUS7izKzm8iKF4gvcb9VtHJJPLDmrPN5vdERXYizDE5uQQPU3VAsWpUFxvifgdDWhq6",
  "key25": "4pb2eiJBMa3cmGimyG9Am7Kh2H8XW7r93kGyg3Ddd733EH9eCPxNmu8R674q9yvB7HV9MRaPyrgRUziafrFErKCk",
  "key26": "afZfPSRv6P57wN7nyLqZPk5oovhn2AbnytBjf3rPtGHfJtR9n2oUdkgycnZSPjp1Zwy5VVFRvcbBbJhB2kNj2eQ",
  "key27": "43f3pPYhDK4vjBEFWqstv35i1wtsaEMexxCV67rjfwSGyyToUF6YivWp3uYfcbJqaBnyHhubxEGtLW8GoJFdrkAZ",
  "key28": "46UrNiHEEcY1Bq83Ptbvc88YQeXrLas87sqh1ZX6ykAL2KnXuTjKRnW5covQyVGjif73KGqYkfx7uWeMgRcspYwq",
  "key29": "4c1fnzaRs4dbeNwJyjeYiwWXAbRnb12WBxVJ82gVRw9WBNNEsMTCnBKpAxPpqs8fZzM3eYXwD4GTibb6VyaDgtW2",
  "key30": "2PhGrDWxoxbCJGgca4Ehw69JAdVfa3HmWdFFo1eXKx3U9yxSWTiPJK46Jz5HDemfjF5ZLn56gDtHSiVBSGLjsXpL",
  "key31": "3ZSwR1QVyi87q6RyZuJhT651arUmLtYpPonX4Ly3nNTsKNd1bRdWpUnf3vpkALr4USv4bNHWRj835uYJChc576UG",
  "key32": "53gLJsXgduKv9jHGg94AzaPDntNGxEaz1WKr6NKVZB9yZgq9wzQDMZoZNm18cbFGHMQkFkycJ4gNWqs9FSzRh1y9",
  "key33": "49JuXGo9RvfxMUnzGMcFpLB2hR3MHwhnyFaJdFiWjyAbQNPadnaP3CVVTae3nkzFFgHgqYMoxEzGwsJfeaFaizB4",
  "key34": "3hQxGNNALu7qqTHL3GT6dFBXB7pZveksa9Jv1swt3vT4U7Epyq25vrGDARK6H8YKnzGqjHKmbiXuFQQzR5nMXxnu",
  "key35": "x45oy5DjVUEZTQxztBsf1fWFvA7L2USzP7gdtwcpqELjDhzmwdKy2kh7STNo593hjHUDfd4LQqM7KfbEEjUFSVF",
  "key36": "pC7PCuqSnju1SA89VDhPuCpcfNLxG2x1dCEs4Gx5ToBtib5WT98ErDaDPqs87egsSS75YkWoqQSEwLXk7Vf77xK",
  "key37": "4PMps45ZM3zK2karWmFsVeE1oLNkjp86aarVVqUEX7uZ8HAn9Ymg1bQvbrviKbyWamAMVGszTf12C5uCLN9JBrgy",
  "key38": "4gWBK4z1xWVGxnoVqNouY9gLpdjo5eKKst3FCpyHbSygq4xESvEJC3tVNum46pjz1jUT2BgsBcwKGLhx2GH1s7Ad",
  "key39": "5nKVG2L6B4o27TnZikRCgWuzBxGohievTrdoik1sUwkcATm5UUyNPqTneoDZss4BcQy8XRNBuareFH1eTdAbpeTw",
  "key40": "3MXZbSvhX6iiMTY4M7C437KAoDa8dfnc9wRHKbjFeoeAmPxfQ2V3MxQBXENDRbHmaaYbnoFSC9k9MXyhYJ7sXjef",
  "key41": "5xsFKwyAQaQFZuWhTyhBU79Y3azMRGd8ShkUmoRuNaHugnTcjSogsqixcXLL9btoJPwcC8zWnzxUcSQ9gWq3RhZ9",
  "key42": "2uZH6sSLFge4FEEJ5iDJ8yEeg4fLnohQEjiufS2ueF1yTwpRd7kMYHaU9zSpb9hTgLLYZLgop9q6i35FpxG9mmnH",
  "key43": "3TEBME8yNfgX3pVcGe9ArHipSWpxbihC21C65RujdDqfC1YWB2y9m8tNepw1au35RzaWSsVbQoahF7j1gRNBDvh1",
  "key44": "5p1JqXTkwbw1s6y2jygzVB2F9k85ensngFuQBW4omRJLfhrLd4fLkJwSBtaiePs2oEjKehBkhqBHrxbodPtj7DNZ"
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
