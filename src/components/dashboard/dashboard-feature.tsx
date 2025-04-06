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
    "5CV1AACqKTANmxjUtroYUJtPKxhqm1dznNZHEVABWAv2PZrQQvV1oW4NWT49vNiX2R4NPxEVk7s5rrNYm3haGML1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XS9yidPsNXw3XP4psvrUGdPfMW5MPii19bgXkwdej2zYczgK253heJqMMyVukMzhss8kkkP4MwiBbVPQ2RCPYua",
  "key1": "4DTBLTmfzrLrAWcKH8kd6Vw9MomGHPwTkU5mPsTPsKd5nb1oo8SWWf9M5rf6RZZE5W7q4fbjf5xf9pEQjLNxGxN7",
  "key2": "2bS9zwmex1uSH8D7Upv6WdUrkJfeXxFw4Ax8YRjhbPtGTe1kQEUGUoaPkTQ6CPaivBnrDhZgdYxRkUtDQkdhADyQ",
  "key3": "65N3wHd77SKFp1bgQjbhW17hX8EV2DorJ4SofxvkwrtuNGQsZWiKHNzJVnVP3KqbYq9kfA5x81dCmr6nHs9McUv2",
  "key4": "drE2PLiB8BF4zss2UWugbarJfCNC6omT7ANLeVcnxGr7BQCsxWtdkJwFykdSVB76eTH1fKWpQeaZwW7k5FoFdgh",
  "key5": "39tYEZwMMLKAHmD34Upbk853Cqn1VuPnKX6Ue1SaAfBUC6fQByJ5VATuMRAZ23auAcU7KcAKMYKy6PPK7WcJnbA7",
  "key6": "ivsR2CEJDJrYCJecKYwfJ5UoPrYpmrvgXBTaeVtLg1sRruf5gdQnynEGfcikeV7tHLBmJzvFYzSNc2FciCaCbJd",
  "key7": "3M5LLAnfWCqXXB3yeV1ZH6o7fKCzkRgUXJpTPuBNS7HvVz3pTRPXqhLRnRXACJB9sgq3K37q9PBfMUNNdYTMwouR",
  "key8": "4EduWkqzZYm4zeYopKC7f4zKMvsZv35tJ5NorSSpcupb2uhX2KRMtcQEugRX3AH3pC1pmeGHrjDagwXkvVzvv9Au",
  "key9": "2stCNQGLMZgjYRCZfyfgyUNapvZYqu7zoFD2Kmiz5hqiZPUkrQjTdAVb1o7pjGWXTAxi8sxQonhkfstzXNVPaRG8",
  "key10": "eGSbzWwyyNPhm17jTD2XCPqfBKaHVA6ZKvbKW4ksyXaR1JTMjkh65GhKkJupxUdsBx2RBJ71JSRmZaU5zFNhHSG",
  "key11": "5st85aA23g2DViYAgxUwn782FTDmc3os8LQv3kAtd5ZiEz6UXs5pUa6PhCq4LDwZBmpHfeCh5Y5m3UptPrVZbLjo",
  "key12": "22YXFJsHLaLXCBv6boTipp31CrU21XUE2gmcaR9ygupPNEk4EWhNrNiVca8nv7TWWzWNr5oFdmMb7prQjpug7SBg",
  "key13": "5xP8f7g89res35R3H379wPhsNgj1Fx2nbXLRK61EuF7GGVCSUz1xJZ98CzQ5MntvPLMFH7vWBCddyBTvM1y3KpEm",
  "key14": "3etBbVR6nv49UwfhncDkLN3g6TJLz1JDfHD74TGxpbJGd8pLMrYdt1FRCTRmGbKVX6bXavKyYwDyKLDKBoRbCN9K",
  "key15": "2cwGvqqyAKXKXVr3gjZwmvYj5JJMJ8iHTeBDsoyQMetUqRk7PHp4gthwcGeg8ZW5FThdtnaxs3xSQWjFuJ8LvJos",
  "key16": "5HSQWT7DbjsdWsmVkKfZr7JHDk4aevjDhJwVV7F8H7M95ztmC4rgyErbZJnUbxM6AjsATJ96Ep69NAUPPCRPnCuo",
  "key17": "ThzQyTxcWW4ZAMptXrYA6Eo6CEYK7ymsE1i95ot4YYKYeffHKkhhv69PkwCgsWtLynHumJvGYkhgXgHg8RwHMNk",
  "key18": "4Z62gaJHWyFbnrrsVMHhaNHodjUX9dSMqV3fz4tK1FNFKj7o3eYsvy1umcC9ZRDizGBytqcc6fXavpZjGv8zMqFp",
  "key19": "3LCWdBEBKBqWmqy5G1MJ87DGxAiWVUXgmtbkR1aXsrKWWmz8aggvBVRy6VJmQHisF5VwTHuDLuhzrkfw4VWFAMoA",
  "key20": "2g91VY5p7FK1X1p9NqaQWdCo9oMCwbsX2SquxEopebpcZJXhyAnVwiWHpFZDBfUKWFYMC2AuSBLQJGaYKAjH8r8u",
  "key21": "5p6XVKFLXXNb4saTBPYA28qhMDdtSQJbmvNqk1vgzVQaeCwJ81hYcNCQMwyHFx1qo8vGpb9BQMChunoXPMmgrUdD",
  "key22": "RJrA7igArJUKZnSRdcbbqmVXiHAHtH2umScbF9bbnJRkmZM6dD3PeQfkVpedd5rpz4sBdSFbYm91vNh11RBpnZe",
  "key23": "53B7WuV5Mx23GugkhnKCHiBgN8sV4UffEdxUtjVecSkjQDBeAv87RRnbg7fUvshMFZXu84BZs8ozzatmn3UqttZd",
  "key24": "4ZXeBFY7eNZkfjYBjfCkDV53EjtG1JbCnPh3nqgxFPC3U4n8qvLWwoSqxWXehGxxvU7kEMHxkew7xDtGp61iiMv6",
  "key25": "4ihjzB3hvf8XQs5naJdMGznk8P7JdX8oYff5feyL4vLCFXLE3ntCJ3vF4FSV96N23mWNRQpfnN7hq6qd9PW2hHXC",
  "key26": "5MLgqWNZDfTcpmFJWBMKt3yDNCDeKHw8kDVhDSMiL5vzU4nJjALAYj5PdKj1U3E4yDvnbwnECVDKFRJGRFPDNnrb",
  "key27": "58jJP7wH1cNM3LEdYu59VwKxGRXpnHkws45uQCDsYEDfa79u9JFRoaTweueRhTTosxBsgcE8pJP4cZLJcb3k1hVw",
  "key28": "2VHtktYX1Y2bTf49h8Vy4Qb3B72BctsnWz2iKyfUkgZPJT16uw6x1VGJFLBfzrm1zgX5ZMPokKypQJmhSpuo5TEG",
  "key29": "9B2PP6dhcizJvpq2ErMWtrbsyb8PihKF8i9qszs1F1zk1p6jqHUUVWdyVcJ7qAx2PUXwutrExhsRH9G6qYjXp94",
  "key30": "3m1zDrJkaiS3E4hizf6bwu4bmg4RyAds2HXJFaovvBCfNjBHgfcEecHZVpM9TtrXBm5yzJxjuMWJVh7VEJBJmUB9",
  "key31": "4x4WxiLPWwGaUqciqAe49KXo5u2hswP1iQcDYPKMe7mm38hLy8EeBroPUX5sMKNoPv4CRuknXd6Z3G8LgN2n2PVt",
  "key32": "q1Cdh8axzgVunAcgfi3suazT2VgQUEFkQ66Ysg1ceBD1Bk5r9D9ui8CTBDK2CAs9Zt8kqwecK94g9cvG2buCmXD",
  "key33": "Q6Ak5KDjYULEjp9fAhSZS5kbX2RXTVNv9UYAEQTsCRK4i2FSkCvVBayEy82rg5VKxg8TRuzMPjFHpVVbi6dHrB1",
  "key34": "4CV4VAarHHeFmjgo2fNYeeGvrFP6L58rggba382CHxVjuKQTjsF4XfLo8Xa3V6TdCiNccT6J6GETSC7EvUNm1Yso",
  "key35": "o4F1hvCm5kPaHQyLZXo4qm34xhrs3FQMEo7WjrALL1wP8tBAgcoDJvcSqceidhThqHRPS214sG1oexUyBAieQTB",
  "key36": "4xskvFJmfxrKUFnXXtVBVC7FnX2JgJy9h9rdjd7ytxUkDvLfmV9jS62JYWqYfrp9yaPQJdyKRNoEgnVoMYQBtM36",
  "key37": "37A1ntjwyYSTjh5zNFHQU8a7seR7pTq5n6R2G7N45TVyxyg2DdepoaW6ifCEX9ND2qHZNtqa4TD62GkFVLRsyynz",
  "key38": "4TNWjGNJwUBtKrqncQUxLqWsbTEr4DWkrmuvoAZeXkKbbKsSV5taSg9CmhALyF9fwLj2ty9p32x3UYkbFWyoBNDY"
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
