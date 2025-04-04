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
    "h4BHb9ZmK782h6CcJ6JYHV873KJHgP2TvFaP9cW6ed1yJazo5fRK6tPw7qeSmj212am7tSEi6vh98cEothYVAtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67dKf8tTqTyMBZwWBeTk4ABnbrjUUq4L7UrK4jb9AWKzM4jyafBXZL7VyW6r4Z8w5oQxajdW5keAPxsF9FWAbG7A",
  "key1": "GXFHdBLUUaK7UKG3uZb1BrEFbRXnT5aQgHahFY3ceWFc6JKrJkBnfdhW99kWmcXcramv5UcVLS7qBonzWURB9kK",
  "key2": "3C1VdEV8cf7uqngbPWfPW4jQZzW6TUH5pUmhr4s2SporM66fhsGMDdUBUcdFiT26DqGRVvtCnL1gVLbHbTmp9uUg",
  "key3": "5wrr9HDeUiEDnH63MsEXbHkrMJkU12fxaDCU7yUann4dZt3YJD7DoLQydv2m3X2efhuCzwqTqMg6VpDJE4Xwv9TB",
  "key4": "34gkmJKtsbAmkCsnLTQcZTDb9DDzw6rEPzrf72NSCtQJxAn9V5UrCiC3dpZJjk6q95BWYx1bVnC877syHFAsMUZh",
  "key5": "5mW5rbz5NV2pMgYFcCiTm2GRXowoPiwswCRk9R9DU3GZFXR4ziB1YcjTK1GccuUYqgV5fuxA62wG4hnUoxs3NZEK",
  "key6": "2NwGpwPX1N4yVGC2Gfek2wRdEbyNXHVS3nW8GkNBxZgs1M4GYonrYmt2EjcyPWvkK8o58ZSvAAzMmu6Pusk2iZhu",
  "key7": "5onq7jR1ssp6JAL52122bCaU2TYhz4diNryyzTAQqZM9K292UptGWpeVoLsGkYPKEBdSBdkUwifSyShjS4XQHVsp",
  "key8": "3r4Ltd5GvHeipmZSLYP8v1L8hJmG8DgGcmj9Kgjq2KUVKvWiyJBzXakFvNzjhk1iWZw3aeidgrGuNrAAiVKjdMHY",
  "key9": "R78ZcBnoKE3pyr457ugQRtrZFKjx5mBm5oU3m86L7YC5gopSNeUiWr5jPZGkyGg88Ypyp2YRzQx7PNfwwCNDckS",
  "key10": "tMF5b9zTi8FCtkR3YuoyhDtgwrTWwDHDsSp4yzsmw737TX2d68mS38cgFTgebqNTaptzwLBxXbibFWMxusryicG",
  "key11": "2sS6Dg116rjBnhxNgbosJFsPRKWndJKjX9EegKv5w1Qgk6wgmxQsunyUrbWNVKi14UDokrRBUFZfaGPEUCfgXCmh",
  "key12": "2gsqwNaksGoevS4omHGVqk332p2p7pcDXwKG2Egc792VRALQ9fE1ZZRYYto9Mxd4TtJ3ejwQ9LAASFiBng9sTYWN",
  "key13": "2oeyxZRvkRhr5AJwXoCihSszGDasGdYDw9kB22zuKt2Kv8VobeoPx59vz2Zj7NfYqL3afXZdRSF7eZsyRDPmDd9T",
  "key14": "oAfZM8MY6K4HDbm25QxE4etUDjYKpqkpyAwEXvCBS7NH9uQCS7rq1Z6X9dDcxYRprLGFAHLPHnE9TQ1GdxhTXAs",
  "key15": "SQD9rSwW6VAfAQNGuxg1JBFL3a3Hnt27xcoFKD2yGcbTW7RNowCjbj2WGUREwEbc8ApEZdq66j9NSmpuF4EGfw7",
  "key16": "2QjqSMGHbdnkKyD2tdQEcscoHMKgoDroi97nrRTU27UnFNkXxn2AvnENvn7yz2t9x9Rfg7zdq4G332nUT1MdLCs9",
  "key17": "LBtaYPw2LpeMPQRsKAiCvVxFAxp8PxyNjgjaZMCJ3pzDsmnRhmDd6wkKC2Pg85hbtNBb5ZM23ubdFV3oCmv125r",
  "key18": "4zEHxTM6SEP2xwFzaR7kuCQ6qu6fxLx7ekULQz6QjauHAXJbibUmN4tcRKW1HPZc4VjBVNEfB5MCBWpQ66VSTKEE",
  "key19": "2z3LZUsXLWWzVNa4ZPvSYbZnsByvQTgh1MYHsgqtv6QMP4yQYdQnQrXwwVG3Pa8kbzB2hCFayYSrdQLsEB91PXPm",
  "key20": "VWs2hyyBKZU9pzRq3XisWvy565rLou9rkJgJ3NMQFQp8YxfW4faargCtMSNv5SCLd5NrkLZd2Wm6t8eMDVEtVSA",
  "key21": "46Zz1gSYaSqbZWDBYWdmFojiVJPeHvDpcR6WzVr26my53zz83tjPozZD3pwmMBEQtq3qnYjkKRHSXUc2ULxhPkpB",
  "key22": "3366WPswXXTJfYBAEUXcaeUnNxUwzunHdhKvcgfaQCZyocNyS8iG9gw95Q93dRPqtN2VJrjusUrj2Ym92F9X2tJ4",
  "key23": "4mG3Hzh7HSQTevAf55UBTEC7EbFSWbA8fKUq2vcAYthxuhVu6vrvtEwPRPqVHaWrUCWggnjDfQ9oLBSGBXAjC6G4",
  "key24": "3VnPoXrNdMEfrV9ub7tww94xLTAfoTBGngYdEcM6qmFUzFesNNnpKyR4tFi4wSFMznmBSfjJK2TW8w5wArtp9o11",
  "key25": "3yEEziizrDhvDiSG7BbUNXFmJsLQqdRjX89EkYc7bQUM8cqSZbJLEMRaRvwQAACUwR1mVe6jiTTHPB5Mmdf1PdC3",
  "key26": "53TMdmfkisC755u79iuegL5trMgj1yHKKgTYfAbQDWqojEJ23pqgwSHsd9vCGeB5Sd4X2LZYWvm5J2Uw9SCXUsfJ",
  "key27": "3GgVcwP4zFDvv7eZuShnVaSgpYnMMjCXvufEMB4NZ3aKRKWgL8tD8XxHh2rzVWxsyVuEikAQ7LkMtm821CY6EYNd",
  "key28": "AmmaAZos1d1N3qs1DvLe2JCjWheS4jbCNm1KQi4fuRqqHy2Xfi7q1DHQySzV8gGT666yzyrMXJEdSd8uu2miRqF",
  "key29": "2qxQtj1CwMcpSMFZcqbTYBDRVQnbExnmWjqucfbfF8PLm5VQVPRyMMfPLLdLrngAfvmrmqAYeuosJroKBSMmNWo4",
  "key30": "4vguqU1eqpjtHSE741d4onUuVLFiSicJxnAd98MqDvsLD73vvpUjGuZsz9GJaXBp23wghvvytibMugtEX6kit9me",
  "key31": "4VP6PsWbw2orNeRgrM1xYFvWtbX2BAU1WcfMr6aGbnFbfKkiSusCP1xfmAynDkVsyKnZxRYfuaJjbiLKLPrqxqGC",
  "key32": "2cLtboFcLpPLAW4FVBKBTTY7axm8gWmUJna6Zytb3wUPG3ZJU1pdCKcAvaPL4dTCGYoqWo1zL2bsdoeSqsMUV9og",
  "key33": "26n6cSJQQYtHUFSA4kDYgr322kc4pEA7uUK8LdtnDnXRhiGsa3ARXBZfipMVkY1go4qZqPrmc2TvVriYAdntETse",
  "key34": "5z8E4souaGHQbugpXtNnTu5yKbgiCUzW4ZTZPjEm7DhYdjAZnt14ZszRFjyoWDfvciFR4QFiP6yqWh8QPK99GLUs",
  "key35": "5r22srpeePHgGAp1bZGG2qGCD3qt1GWb1QLRwCzJge1dNLakaKkTTwSXwUGrErkShoraqiTQshaEWtH6sHfWCZm1",
  "key36": "3FmxyRTrG6WfCWhZAWLVb13N776xwesN5mkXde6SsqyQeqZhMbncUV2dbZ7QVT4GStEa9DEMrUd53KiospNqdjfx",
  "key37": "3NwaojuCTXmU6iXr46sGETvFY7ux7GyDYbQRtqHgxvbQuTT55P39dNPvzeYDAc2CCYGpbtRncXgxUhpvsj624qbM",
  "key38": "5h7YUutgQm3kza7rty2jyghgCNwRXfL6hrwgoyaJPWrSfPXrTNTxH4UHMF88Zj9BwcQ6jLKpK5WaqaYyBsHVX7Wu",
  "key39": "3rs3rRQD9qVPerYovEjGEbhs6PJTGnv3ScHJYFRFd2pHiUUMJUMPcSLeD2dG2rqxG2ipAwHNU6FmD7pYqg3rGFze",
  "key40": "2ukC5TKsfrbj7EU5jBzh6tX1KckaHqtP7wbHktYqu6qUeuGiaWXadrk29Ecu7JP3Yu2ToVUV2AMHkyoSYnqVB6UL",
  "key41": "237WfwkJNeqZ46aJBeZkuCuPUt15251MUf3F6h2doEJTQDcEUrjwpA7HtrKnDad1HAQgprb7Soy579J7CbmUi1xg",
  "key42": "DdXNkcBbj2YzCi4ovMn5L6qnkjdncKMCVgGYxccg2CMSAbyQj5GPJrbxZEma72Vdpp12ajr8yqUrGZJMan4tdw7",
  "key43": "38dSCRZqUcWUHxeqHPMfX3UkesAr9XRmKQaCNBSvpPpxFEM5e9xK6vPECZd74g5n3xugY4KiBWmsGtkxSn4Wffnw",
  "key44": "3sMrER2qfALM2Ss24UhAg9zSscxMn7iZnDmTEKde2ypraeVNxpyAwJcygKctizJ6nuycfZucuukRYsSsXmk8sSpF",
  "key45": "vfKMQBCNxtM2VQQg7c5cdmfFzMLVp3kFHQPfXFd6TBgUUC8Cpo2WcXPn3LJkhJBDuh1CYWE1wQGZfjEm1wDt2Lm",
  "key46": "3VwtfG3e6aZqYPWMxGRrmrYxsxPGmMby5gGymEKR6jDhhVXBYywNLJdC7uA8vjJgZxL1GbWRRXdpDfLTvZ8pgLLE",
  "key47": "2iPPa3Z7B59EYfUMNGuG1bGABEGUXNZLaL9Est5ELSUFRCZfX67UPWnXdWCv9ostFAjDX6MkcBnh3XdNKasCuQHc"
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
