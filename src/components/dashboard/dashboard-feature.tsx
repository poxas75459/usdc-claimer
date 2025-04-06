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
    "cWTBQ4rzoe5F6eSUwnD7FHTfYZMw2MmekRb29J4ZoKa97U8qnuUWiFPRsXWQFXY9Cd5ewCQikAPFNYgVn8qNsKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DUrgJMP6xw7Y3wpsyaCe7ShRJUmJKsscZtt11GeaoQtrN82XsQHdhtdxDpUZw6ouAQNzWweWHDSXAAtDy7w5uBH",
  "key1": "3rwBUKQRsFAUz2oC6uVj2gPNM41LjQunA7bho88tMQie7Q9QvvG43svQHaK1wrFxDfWf2fpeWTLofk769MmESyac",
  "key2": "2tfpr5kX9Brt7R7LimovqweimH1zarncTxgMFXd7GVrqwRe8VdPn92Q7hk4vQUSUi2C3NdNZ2s92eB2BnFRMuNvd",
  "key3": "2fkVFG2whXurqXgZEXUbnwunXLDUk8pdkGEuAG3m1p9zQcSEdrwPY5qEPCvGcWDh33XLTN76BwZANTxjrr3Q9fTN",
  "key4": "5b9re8f5wTAMGxqVstRrRYtoC2fCpjSEAZcWfBCu8S6hduHCNrhmmHEaGo13Knj33qYK11g3vo1L49N9dosD5wVT",
  "key5": "RiNN44hFGR4GYDuakWPqmra5YQke6oAk15qW4QZYovnEnYNnBMV4qW2cM9ZVe1VpZDddUqGMUWZETnt6WPvDHLL",
  "key6": "hHRjW3YcDBZSbJFQQNrSgkhSsRrVqYHWpcaLnRVRx47Fs46UHh27q5mAxaEY8Gfwg4hdmogWp4afxjymZeCNijq",
  "key7": "5wDRTj6WY8VZaG4STKfjaQcK4mNZgsD9983oNM3RjpgfzMH6grKHmfe1QVyWvsyFwy7rfx46RmG2w7MQM1dFw3HH",
  "key8": "BmWesyw64LaWSsQ2dnKPbFuLRj15qwm8FDpfz8Mx4Xm9bHvw4pGnq8WLrKubhPhZZzrGP9RvdBe11J95nj4SFjK",
  "key9": "2691F5wX4smskhDB659uzANKWGvEhCfZt7SqieGk5kehTdNXpT3kyey1AQavH4ugkqbiBZedj9tFYXPAzAxQqb42",
  "key10": "58mWJothDXT9DWafnaAezBzmu2avBeKWrfAJ6hjWrExbjbcuYAxfyed895qyy5f1XA4kRXCC4TkmbY4gU6mjEPAR",
  "key11": "46z5AL8YyXmEKUQn1puW3PsKS4YHATRzXdZmaVaXRCAyJic7KyVjZXPcLXr7RdLYAauQa7BUL3d26ZN5Jwnk4t4T",
  "key12": "3ausnB2o3oX7ycCx4t8nX2MwM5dGwypDAgQeuiJYsuswcUhtCXim2nCVGrnw8gsRXmLMyN4fNxMksxt3CkXoCTGq",
  "key13": "3RupDQvjUeq4uhmu4TuCfvEg69gXJgc4ruuwPxiaVJwf84iEG8fZWbLGt33rxrK6Z6TsXXQQ22V2QVX1QCzZ26rq",
  "key14": "3cQQvZzV5bZYSTiWUWzMzBrnHNEYsgj68ij1aNQDAsmUouJExL8WL7Ws9ou5XQG6fXX8wCpGtecwLtnkgAZtGH8S",
  "key15": "35yuAicH4HvP6hMasUB4ZhskHHdx4cYT6J3v1gfGi8x4D4cKTEz9jovZ8BTU4t6P8KChzdB8SYqRzZGb7AQEiD1C",
  "key16": "3PdZNz5RcmKEhcteQRCfWwJr29YuSHrufD6r9wGmeHuJiR37BVUaTZq5XQUR4eCEnHEtzZapCYdrajSEacdyc1LP",
  "key17": "3tfo4qiQnXMw9jvvdPh5qdRVmFLeBLpanXdkwUeJ78BoXz7qUFeNvhNyDPtACkPSDxH1HJmm7iXsTLyiaSc75n3L",
  "key18": "26W9wLkVu3dpnX1ZArXgj4ts3KNNCuqn8THiDeYmQEE83txKfY3DiWmn6MHhVZNGCT9tbVcP8Wfbgm3hNBcTjEL5",
  "key19": "3oRkhpWj2pfwefgeupxYBsGbA2uMnwnRyZ5WvtFgwBpkMng4TZMhygMqDcmrSyzvzfhVM3HxugVXSmsiJjz6ystA",
  "key20": "4JCpqJ2sC5ijaeDvtsfQy56f8Dao4sPoMYemarBZyVDRXwY5qCrmWThjoVQMUbqr7bJfiUNNRh3JfRvTfPcmrjUk",
  "key21": "CMtTmHYGBVaNr3MgfDec3bcTHZuf84Y7SFVPc2kTpiV3gE5JY2sE9r4Tmmjn5VHALu2x4juaYUTpnBMvVeXyKyX",
  "key22": "5b3ZwWYSSu3NfNsK2hKh3y54WLdL73t6rVRGQML1co5XSzLUJPfbvHacPU7o8XkwmU1Mp3cSpoQaE7Wuxg4ZDobS",
  "key23": "xp6U6rbp3qP1rmCxRRb4Nt1Wz8AuPom2Fz6KvmQyBhBLNnDZpia9LkJ7nXHJfZ3v6FmceZtGPK11jrPYXGirBQn",
  "key24": "7Ng18yBEMNSgx2JNW7pw97SKGH4DNVtJXCeMhoH9fyaak5duLV6MMWS71LabEi5n2Bf5uKk9mt1XoDAKcv9wby6",
  "key25": "4GNmBTCX2bkt6j8nzPiiJgfs1mvmvJpLGfjHCgoiYXpcu9JhXaSz2zhEzYaY4VmHaAVwh6ff1iiqDVtnhYDn8eNs",
  "key26": "ZmSdMcf3digcKV792PqJCrnpPWNprrbEn9EaFoQEXFPmZ39Tf95P9hrJzUKpfHqLodot5PN4w2wihsHp6W5YH5V",
  "key27": "4evxPoNX6RAhpNweYKgvsoXh6vuiDjDMPYXAaJKbkTe5qDp9gK9U7wE4sLrevDLFAe4diPWfoJ4KEYn9BDw1ixka",
  "key28": "5FgFJekRuGVjbGcKgWeK3uZjTreoc756jxnQ6MkZPerV9yypPmBCkwvUrBAg2yKUezm6DMzS9F8EWeWk8rvbGdg3",
  "key29": "kXaBNJkcXtHNTmDbN6B4LK5RbvQj6pwVEtR5ESGXqBW42D6sygNahXjf8wEPQPMJdqDyHGJYTtRtvfVFDtineKe",
  "key30": "4uouRxMeva7gWQZpk4FbJ4w4JLJmaunGE93GS8XH7zMAo3Xkzxf5ia9j1LCpnqDW9fWyY7ooHa4co6DqQ4JjeSC3",
  "key31": "5ieA1cxTwBV4XxAsdiJHSbLKaYTwkHb86XW4Mu7oFdkHYVN1fWyXzw2XP6dtawoP84sBXRYSuwsgw2cuyKQFeR6w",
  "key32": "6C1BZTzXovg4rg4c1mKjJbcrZSFgAxt8WCgq3gfjSgnB7wZPdqudqmaMJaxPiEPXESYGWdis63dLpht8dCBzxwH",
  "key33": "4w3V4eUQAk6gzk8U6ygCUxiRrtigVfFEZUrz1nBMaRxnkGzB3HRE8km8fkVvkiLcyRyTWFsCD3tPxqTqikeJjPhm",
  "key34": "FYbPrAmV6pnRy7GjAqZEFEk5hSRFfoE5SJctS164vAD7uQRCcrXp5ZVJG8wdd9qHeMeLt1uwmjmRVCyZhweKM3y",
  "key35": "3xhqsijJzRnjU3qCmcWkJ4QAETta1C9Mfv1Vj3ZwszMm6ZHHQn5PqEeC2XaiCRdthDNB3pu9jDcjd1UGnNNPCDWA",
  "key36": "dfXMnU3c4sedXhb4xNUJvkYu1iK1mVHbd2MzpCTmhX4iMvCgPwgUsDDWee9DV8rJoEV3w9LvfeZigGK2k7hc246",
  "key37": "ndawtn8V6tqMaobX23UoNuWgj8Ci8Nc8WpLFmaxuL2fxL8tvLgga861m6ATpfEHVDWtPpbS6SPiPETikScgx7kf",
  "key38": "3MjGrKp7vVSQB2y8yy8GCVTbQQE3XPgTkskiukg3jbaoweiYXTWyuUD5jLsGwDLEkYCqDGBjZYwkz1GQtDcmyAVT",
  "key39": "DNy3rcqNyeQaFrVUKbiUB3vB46uFqWPaXFjLNpq9ntEWBVwW39owZ56RuMP3scJxbPSYQQxc5CuvrpSFBuGVJ9g",
  "key40": "2bEDtJBbcAbPWJXoeSpFHCuNuRL6bF6fqVKGJF651frSvZxQ5BPizUjUE8Q49fFGxP71PsApHssZzGySagmN7LFg",
  "key41": "2k4GM1HnSSLekSFQts8pfAH2HQPiMTARBPhAwyUP2NRcJ3BX9Suu9HkECCfqkGR7nFBHzma3W3iGbh9xiKhXMSu3",
  "key42": "FijrBVbL5gyU9bbKPq1VcpLXPDCBHApxKfZS1Tco3wncriDdA8BDRwzvtA2AeiaD6NaUad8J3WUBfkoJPSHCJZe",
  "key43": "5A8bhkeSK55M8xyNYMVYeayfP1AYEG5VTE5f2M6UZJ2MQitZf8LM9ykmyjUw5W5NJECJd6Mz21Ywopp8qVSd4BbK",
  "key44": "3DgsXD7heszite7159uzy3zsyXzaMohRsxBtEX1GRcgJiXK6K4L9euR1jdQ13N6UjAsD6d4qFzmpECHjJZkB3upz",
  "key45": "5SdWkR15nbEAavEFh7sBMNRScxGSD452CzptsCbDYnxWWKs9TtDPp49xHFYARtkxGANspgYt8sGGX2ghF9oQKdJq",
  "key46": "62C1s2dAd5ReJGngq7ezNASx3zSePmunQbU64Xk6kZjWdGpN6h6QBJCXYwjuuf7f9SKKE1MbQqVzmdeCs3npkQtM",
  "key47": "49mvW7hUY6ezj23bWxL72q85AoAbizVSdficJY8vFx1MeKCasiLib5ovSpVSo7Q59iwabTU3QAKgnbvyPRfcadBY",
  "key48": "39mnyzj5ErWwJJLPAun7M2wytVP7W1KfxvXAEmKd9BPFDZyg4RS8PwqTooSAn4xEnieNTz8nqYvW1MvMhvdvj3kd",
  "key49": "5dosFBdPLCPUYRYRvBSBAEkF64uD6DTF7uveHaRgBbisLBGXxF1aT7TRPLtDVE2UwovpW5MkH1BysDyfkbcRFBy1"
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
