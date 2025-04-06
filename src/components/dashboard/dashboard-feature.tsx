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
    "34EN7vGniaYQDG8e99PbU6MZ2ZwAavFrftwAGHesfVzWEFyQpLboPewDE9kbHoQmZYFqTEzqgoePKtVjgMSgkoHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WC6yUKPw85WDZbxpdxxvmS7xpXRtCr7BXxpxQo7XBTpfmcrvrwiKHxyCMFVPXjXfCzypHo34vvDQCYJGdJbm421",
  "key1": "4rDHR1wxUdaXE8Qt7EE7CRdhhp65Tgi7vh5oeTxgZMxUkTJJdmSeTb1fc2wC5evyWbt9ED9hgqcybmuAu9UrBHBx",
  "key2": "y9ycWZhBdqFrmAuEUfgvBHDXbZmd4Eep5b9MsdenL4QoVgck6u9gKdHSoymgTHKgXNsZiHpHwWVHE9ZaNzQNWtX",
  "key3": "66FWmUFkYYdFy4xDCNbGCiRFXcXzjt7pvns8j8qCVYDjXZa71WQNqGpDapPKYGxbJmG9Rv9uCoTdDtEJ86QGeFQo",
  "key4": "dF7kHcTLRv51CJdJ7Dv6DMnEqkYB5JK87T1zGKBJ9vXP9Gbu4MZGJpXfEP6q5zTGNudhgjdrNYtPh5JLSRg5B4R",
  "key5": "4UPPLsZqUkDLnf25Pcg1RfCVor3MaHa3Yjau19vUscPRzYCSeEyu7m5S9vspbe5AKwfdnLhpCK6yTLNA7STvizuS",
  "key6": "2PpZSavTnsDi435GGGGr2xT9CXN6rvYXDHKYFApAYDNmidfcpBtLN9bhwoNkpCHyUFz5qBzSZzUtihp7ic8VW9um",
  "key7": "39Hc3r8TBPSa1G26uaECGK5MxkqB5HcnpujnwPHdMGLRgo7GqikG8QUVvvMQfEcnJZzyrJwaQJjRZyRVs5DDrk2G",
  "key8": "5CegdW4JswhDY2nzVXUwiRDG3TcMcJr3tm2woiSSh5ZT9BKhxXyuTtPL53npVNL4oZv7QHB91tunQCZ15XxQ3tPb",
  "key9": "CeH6SBVD5ZZ3yzKP5UTc6su1FA874f8QLHrUeNo1wkD28edXw9cTAt1USJPrXJSZjgUjtntJFtbzXVjnjzB7y83",
  "key10": "246fXvMe7SpB7mbtbGowtnYWLojkryE5QsWWtZywfqNaPawS2wzcP6Uv2rrAVdYDU2WQbjtFPRC71kP5ZHrW92Yy",
  "key11": "3rVGSy8EzYGkMbDUHVCdynQoRBqxy4TYs2ugqi25rbefdKugeNX8zwVvp3mksVdEHBs5Yvtn7fRmnZ2bASjQ97BM",
  "key12": "3iqo87MW6UGC8LhHfFXiW3XKrunuh8mzkz4CMk1niFW2F7eXkLyazLckJXW5VNXWh5irSLiL6HwkW1y6F12XHMpk",
  "key13": "4Es3XP4cTjkUuzEkN2KTnSMSUfDmNB918irheTNJm6TjgUthxJMEUNUCqKiGQoNVtibDz8192jAUUWLPZfxijoNZ",
  "key14": "3wEK5odUYsskn2X6swVqfjyPUMb6vKmub3VwJBxRAzfWRNjcZkfrtY9Zm9KLBGY9WDscx2mAWUfqfJpAi2KMUoCA",
  "key15": "3xGiwGaSyqnA6cKLEaRdudwpURA463F5pj6UXH38iiJJGRVi7Sab6GFATP53pFw7jdLpaAdG6gEF9btDA1GyQVn1",
  "key16": "2G7WuCdi1FAx4C8LyezEUAYrKCMNCp5k9yZNESy98VEthXDdpY5f8zcy56NXpU7hRTksSSjSd9Y3VSiv5TpB4Ax8",
  "key17": "5hPv5xfcUcnMvmooUUKK44LwosLoN2VrUfM9ogtscQ2MsuoQCbLrxEzmeh4xHukSwBrWSQxQnSQWDwe6ZKoSEFBg",
  "key18": "49c8oQ1WvcRn4ojsjsXDXwpC5x7zgb8guM8ZBAG7TyoF4GmfFi4JRH86GeYWFDs2LTzhJctDztY1TwHmQmpDnQcT",
  "key19": "5D3cfqg3UMnGJ2hcg3aZkyMqf4Vs7bpiwn8Kp3dnpqdfpCjUzaYjaYsPBQJ2Bc7qy5w27DXNBeNwRTBpafrp6ADM",
  "key20": "SvszZVf3YvQvzGmsNKk1bfmKyHUvFyojwvJ3H4HNj9No565xDxJNF9exz7zXWAudwvv51mr9d1oE1PvDcW1izsY",
  "key21": "2TvgV4aPhQkUDdno9xHgfdDir5JYXDffF78Sv9pGKca16ThVYouv1Vh3FgmArNVQrFFRJtcxXVw4stWZaSDQNetH",
  "key22": "5K5ceJV1yQQHuMw7C6dii4hm9ExFAd3MWXgXpGE9GyaFZA1SiAktW3q63e2Ngr4dGxxqkcQoG1nXLNdpw11jbAAE",
  "key23": "2cbuH74zz4VL53UmdBdfwhiaKoJZRTwCiRUkPJZkPNAujoTEyw1gbjsNn32NmcYbpfTAb4oNeJEUarbTFftjhMqn",
  "key24": "wfWyE13G9C3gKKLjYMoY2UrhgmG9ori2kqxGtSKmzfqH8Yc5bHqihKU9D7YwbpSLsUVev4CabqD5NeXv7dTgDDp",
  "key25": "3pDBYUUjNNrSxXASCYx41EQNFNoqr557DzQkKkRV8N2i5RQX3C8jV9Ue7Ax9ki8Jb4mGWT633PHENFwWCMrArfUL",
  "key26": "3tjvx3tovev9vXqide2KxQ9ZhekKvmnq4RPrMeXJXpH9srMj8ijFX1cDjCrgTid9BXW16xfGyDDXpu3hhzU9vyYF",
  "key27": "62BPUoPdh7yAuKiVKtCXSupK8jCEoW8qVJhfo5H68u3Bay9CKpfQDtPzFxehen9byPQ4z6PiAvymTyi2FQpGvJZB",
  "key28": "39Z6T8sVMA7ERnzKau8iV2Agf3gLv2Ub62ywAwW4YTuQstsYmGXoysGJSxem7LbAD3LzkqvrAmR2Eoobd4PDCigR",
  "key29": "2wUgcAtyMeQs2sucCHVaTvLUez8ThnLmKfV7jhMZVaDRxUxgR9RGQBZ9fBnJ6sPgLbH8iTSX5mtiL5Dk4GckgD5R",
  "key30": "39j99AS47DJi7MBTz4UZB3yR8SuZH4SdwfrWKeCimc1ysLz6kCKmFqonVxcKj8N9dnA4xy4nGTBr4NTFMCBDoMk",
  "key31": "4VDqXtN1ePAR8D2iUUoJPppKxPwCcz8cUudc4seiy946KYAf7VQCJdKk9RQSKv1CFK2vABMCsbEfh5hFq5vxFBhp",
  "key32": "56vGEJ5J3WK41PthG6t12LpDySqhbHemrSVmdRajXLByM1mP6JjQZEDg4rbwHWw2uejgACaS2WoroaNDWNnxqEnW",
  "key33": "3fJV9AhT6G7rv8TeGNP6Dvvoc7paXuVCdUtfU1F3oX2ZnHRN72WJYmm6bwhRUHcDJywf7CcngVtc3yvbmkXmQBLi",
  "key34": "3Cx5hsstDJdmysJJEcHRWxFL2srak4ZT98c8fGiirP3oVUusUS2zBMS6iX4qorQHxQRnJ4s7ojnM8qBRUTughnRY",
  "key35": "3sNHSfgSNErk6fS34f1ey7DYroFKGjetCaC2CmEAsk6dKQDUxbsWrxSduRJjxYRuDZ8cyFfDu7EnQjnu4FcnQhhW",
  "key36": "3Jv69SMzugd1gHncns9Zw4zVHBM6JeL34m9UHxCM1Tmxmeec728gTbiyozcHGzkq1txe69Yjh81JovgBc1JWBm2N",
  "key37": "2t6SJbVuMJGVNRsVqYaJdtL2cTrFfpWcWYgXYF7pY3BBP2s1oC5pDmHvmjJ2DwHuW2SrY7fbwyPKws1eyfJomNxS",
  "key38": "5PeBsous6rBUPPTL4tKE3gGvm2fa2PHF76iE96QpaCU6FYd8MwpnE3dQk5SveMigb9hPeu2ZSniH8879Uy95rY8d",
  "key39": "5QYb1zTd7Yk8SL2FX7N6VzPWd7pRaYVP8nTrf19T82ceMx2EtC1kDYijg5EGEVV9YqF5R4oysv6Tita1o9TnVxGJ",
  "key40": "GP9st9CDLYGSreMwnLXQDxacfsNbC21mgH9zyaLDf4gKG45y238MK6CvXWWt32Vrvq9gJRv1ajavWQNEAi6aoNM",
  "key41": "2LAor29XEbGDENpUeHaKmR3XdzVdoPKUhoWBYbjXQdRBguHVWrayMbw1Cuz9JRtb98S98hkZPiAP76ZyzCEtY1ur",
  "key42": "2gx9WdNKx28VyvE4rvbb5moGGZXYoFa7gUzqrCDLWCW9c5wwHV2NQpCqGuKg33PjkERRfoVZMgq8whp6BN3iEL7s",
  "key43": "sFiJ1QpohCTgkMfxDbeheheMAEbK47uAcwhYafP3TJ4RBpoC1VtFzRVxPHSLHdyXjNR56xA6PpJLLzjJtsqNKNo",
  "key44": "4VRTGG7ZqUkecwwnymyB34Fy2XP3h3wjUDmuCeP57qLtidyFK48thrtntReTjrv2CqXsny3z9FovTWL5MfemSaEs",
  "key45": "2RqzfuKGnDyy51oy1JQoRXxSJHKqyjdQAV3SDv9SsyNUe4Seh9DN9GSEAdU5mEMFWRaQ4kLfL9SSeHkJ5wPNLUqq"
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
