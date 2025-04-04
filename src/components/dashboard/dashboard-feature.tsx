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
    "a4aedgbFstqkfmbVSEGyqxKtkWjYprS6ztTSmWk3yu9jU6xqjXf8aBxLN1o6s9J3ZCnbAqo2usWDBvzrGBfd42U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oMqcHvnBiYWkJFzVfqCmDVsKSJ5H1RqJuUpGcHnVRcupujs9FuBJfX8er8oRhEAnrSC7eRxp2rXDUuHC3XiSyD8",
  "key1": "2YzXmShe8z2tvY9JdopketUwZejuET7rhonFcAHPtLqkLnr5Q2aDiM1SQG7yBrSSM1J3H1imeREPHtYQUQC6Povv",
  "key2": "2d17XTmhhQNWgcNhnAs6a8kCvhDGrPdJJsqrPNycpfRNxCqiWR1PYAi8xfXcZHaFS198Q4dUcjRex4FYpcY9fkDe",
  "key3": "47xqNoKNSMd2t6A56rkiRuc9MmVVNdkxdB6KguvReEvZFE7RFxy3vuk5je3sXcfEwzqu9PhTFNHKFa74PMbq2KM7",
  "key4": "BrX4uBnM1aPGGJH8KdSwVaKDBL96XAxFK1XeYaCE3tghEFD1otB9njpR3uxdGCvUyVDTDQSApyi731Gn69rQMrF",
  "key5": "2h3pTycahuS8cVmsDNcHmdvZpkpau7BWXVNNayDdC6PPJNfyMMYSUbNEdYVdPQVABUj1JA2ipc7hwaZyfq87P4Fc",
  "key6": "46vix1qyTyBYSP6KFMRTwzp3PfHWZjsXTpinCfvhQW2mvS6HH2NGykjvLz3RLFMcAuSCikXXYkRf5aJQqqdy62Pk",
  "key7": "2jY9Pg2DFm8HzgDyzBPaUHt3rjgrpcD8fDT6niGNsyHuu3XcnaWkb6vVBWEUKv7e4fNvcGEMxAdDDWhChqFYyBty",
  "key8": "2R4Y2HU3Dr2SfVUzqZ9kJRQvxze8n3uB7nNWtEzhr5r1mH2ntqtpo7Uw9RerSbTSZhcNJAcUWYrHAjzkAKe3q2i",
  "key9": "d4VjqMeVvdiEUBwABQtDtcjeA3Vs7ZXbwtWBMsiYojTEneHUVSHiKvHMQaYkz4qSS6zuWUPxpypMQySRxsQLnGQ",
  "key10": "wVXgKLQEBBnoPkF3yGKt3TkbBaFZEZueNsMFEUtc85vXSjWKtV61hqqHCbZkkEroDU5fH5ZanMruKxZFS3uFSZL",
  "key11": "4LPN1wXRL224azHVjCDfmzK6gT9j9VRmWS4qPYXgj32RC2jmE8BRGuHw42knBtpdmXo294NZuKb2kMifMntSn7dY",
  "key12": "4147HBnSpcgXDXtxJ16EBcXrXzAXJtZMYfpL8EPj1Uq6vHhgpBgpegYFXkEKKZxrsbwBmr3uX9Ter5Z3icZ9Ht7m",
  "key13": "VpoWkvo8tNMD4WekiBaaAvLoUcxTJqVmnF2kLk4MeX1ycDG2nYRwJ5g5UgJPtnyopM8PFcVE9g2bFzcACEGJq5c",
  "key14": "45jF6sSbaDdfUL3to8fgScARgLRGMJQ2phEXx3exfJkTE7jvkCfAKPrjk5XrBMJ2XBRD1Cj4GbMkDaPdCxhpaBTF",
  "key15": "3rFLfeUuhyGosp9TY6ZYGXSemauuJKp7gbp75p9hFaVTdXVUT9ZRpL8kdi6KhqmZCRHmroRzrYo2N5r3RWeSkV4q",
  "key16": "3snECGH4TpJv24bvDZujdAerWSrmDrDptRaYrF6vMHvXiECFfHEyhVgdU5aa5KjyXPWxpJGSDnqpVEHdyNq9Twqs",
  "key17": "5CnHmoB8qGbBFPjnMrboTAgYH3goNjVJARRHZy1shqEpGtHP2Hf7kxZiW5zH5VqgMqVPdr8smBg9qupLowBhiJbY",
  "key18": "J28EDEDxVqPv1GmP7gm6akngnL9SW44Epcpvh88ssSu6rNk26vHz9rykMPmxXNwgmbyTDReL6m1eZWStW9q2nRC",
  "key19": "5YRiGu68VLhauDoh6uaz5LcQbDNmJtHrBmFUiYhBtbuNS7s9Tq9DTU9C3rB9WKZrbRp7mPgM3g8UXoWwYgxkghib",
  "key20": "3MvuiztemVkN4hAFjLEuEhpS8yGZXY4C7T6NzzPp38GdmPfSYQecHUVwxwF7oWTJs4NUFB3xaW2mMuF7rXLBucuY",
  "key21": "5E16W74fKcgPseEMRVAEPUVC1SN4d4zCnrWQG7NdkLoXm8r4kDyWVCPeFXgHpaUuZ7ZYxyi4Q4AUQc9pGNf8S6ik",
  "key22": "4YfchyxWjUGGLnvHRdiEdawrkHUH22bDipGgyvkbgxGLou1ji6NeZMA44Z6Wvhg6Wb92M642kF69ZHVKEnPGhQJu",
  "key23": "5sRTQiCSATJXn22hDFXixPzfisKt6Wy2jRxKS6igUzxsKUPvuYkCbeP4i5nF89nDKGPB7R8eHQz5QKsEVGEApymV",
  "key24": "8SjwoWYpYL58oZpz7z4Sr3XfS1WPgq7sSQDeyvFQeJdit223JyVoXmuVh3WRj1ZTqPESPLzA2NwsmqzJ3yTPmws",
  "key25": "R8RWC5nBhSKdkFZDe2FaH6by8HfJEawSJ8ewi5xDt1zaNr27iACGmuhSUruqbZzQmafthy1b7175Mkg2xf12DcQ",
  "key26": "5r1VGPPaG9PufrUVu1wyFxb49VZ7gEu3Us3tNfPCP5q96Vw9rsWJxWt231iU4zBH2sbPNXm38j7BtpT6H4JaSMiK",
  "key27": "3mHS8AxNEosBoRbhHtV1Scj9NR3otpGrfwEqqqvTwXn1xyFWWFnCZvuuN6WsciEGiCriYKqXVgUdyYeHfTeDBWwc",
  "key28": "29L162jXVC8odWQwaRRG6JtcyK8bz8yynEJAHq8hbkAY8e6DjCEnV8xo9CYUDu6QcuPo5jhSuoYtHMYVeQf6ZuBn",
  "key29": "5ubThCxSAFPE4eHXmjLkDrSkL9LP32MnTmpFu2N5J6BAbucUscbaxJoprskRbqtcq7zub4YMUEBSBJPNX7EGqZ3Y",
  "key30": "4DeKfrfa4SxSJioDLfse8cj9NURAjJ6BNb4guXbkAaTdW9sH95dphfYoBeCCPSQW7gUrJN5Coe5YBYkovTDpUH9Q",
  "key31": "3bK5hKZvnVqVQhYdcLojx5o4saj7zZxgC1noduSkMLCNYJLspVA4RcesThMhFd2MmERjEkyr9FgG1xUtXYrjYbuc",
  "key32": "4ZWVXcCsKHkRZixZi8kYeTHz1HNoqckTvpehutsoEQKnewgTzpgBSdrY4dnGnCNJLcDSvjfz8NJCT85pgxSFekn1",
  "key33": "4d1zcstDg7Hgaazz6MVPWnVF5gRso6NaRaMKe6dLBVKGBWYEAU2GyBKk9ADcTwF4MjwXH9cLFrasA1ffxvGHwrKP",
  "key34": "4rjiZYqxaxg61CHgZ58TMePb4BSacVnrZXTGFfyT7xm9pu4qFdoa8S8meDQx3x2fQGWCfDAzPoiSK97cdT1U4BGy",
  "key35": "mrgtYJNHAvLjWskWHxxBEcJAPBsQYr2XQ9isHnerqJknoY1Yeqgitci3NUcNCT6He8xKDMo9MNUCU5rPffC24nj",
  "key36": "DaDqh4wf92hgrNx3KJX2drgPSz98ic84fWA5sEJmZS9rGevuCimG2hGEBSU6xP6ChF42QURCPeRZ2qZ6TUjmwdn",
  "key37": "2mEVoz8HX2y2vWoU4wVrumNkgrQe5KZibwH74YwjFAZ2F9otdEHZSuLeAg42DZnP2vUeicdyurt2VFLpZkPhycYT",
  "key38": "2HPKPg4S2urQnXQepeec4RNwH8XMfXUyvZufoxKJv4t6zi8ZcFrcZ4zfu89jwJtQtuzcVT1c1YpDj8bfVHxamswv",
  "key39": "39SM6WPCxgRhSHLrnCzSzNwniru7gsqQBVGgP3Jcb8MxZEJd3U4PcKom2hWyuytcLd56m93G9vCsu7bgURFR51Ua",
  "key40": "51y7a4Ge6AfUmfM6phAjSuZRgivFSefP3pyVv8w1eN2dm5UY6HLzoNG8pPJsWK7tkV5L2JYd48oXA1FJUsTwVe6E",
  "key41": "4JKkU44ZUnhK2GVZsAgJAF48XK71K3pxbcgwp4BKfwPLMyDMx2Ak7u1zus1izYqg7aH7izFAk71KGf7VR4iJgFZq",
  "key42": "3GdPb3nkYbKDQga1JeWWX43ZcE7JeoVH62xgff5sUp5RWjCtEPLUEAchHK6KCo6EGKBi7pgDiuy8dF9wgoEpznGS",
  "key43": "32xLh7joQ5AgNDSgssFf1hTeTc8DD7v9YDLoygi8KaPFn7te1nqQwmxwrkE3618vDxRNUJWoLLywgen4sw1KeMcR",
  "key44": "VMVzWTE9iHLScVLFupviRbFT89k1UaPVWdtqkJcHG1BuWyoCqBjphLNpmgHPjbaUYh4qgMHrNuHNN5Mmb22VRFB"
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
