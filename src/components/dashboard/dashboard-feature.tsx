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
    "2iap4BxX8mcdrJfU1eZL8PbgwU4nMTkoo2gjvPDjNS2eTNmiDy5k3ZiNjTiA6BEwD9ehcxsvsYsAmCQmPvrvJf5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dis9CRATzbgYFzLpVwf8QnRo56Un1dRYFAiiY5DUPbDTTMZQ6ehS3twXCiA72qkPb3FCxYLtFFSK4wL2pBULtUW",
  "key1": "3sTuooMVx87ENuTCsL2piKugmsxe1npUgXgrDqPrNQQjBYUivf875MDjmKLpN1Axqj7pzskaejmZrw4Ay7niEFrC",
  "key2": "4cB2241WeBHcskXQogJJVU2N2wfm8fUttc9rwdCJMtewrktbxTvi2EqGGRm9qw45AvELuJFB6ksxqEs6DZsGV6gj",
  "key3": "eh6C5nDFE8hdF2GuhKMRVGpGT6hRavKPjhLmqY4PVyHL7r6Xq3udzwe34dBe6PbvJ1kxMMDGUxrpqbswAexp3Kd",
  "key4": "2nzAvv9xFvXGabQSz4bHr9KjwTGrfWtXzCZr2euKAfCQYgcncY69nzDt5AP3R76pjgY88i7M3mkEEiajxPS6RrHi",
  "key5": "3CrDwBG9N7PE5yqGErpUsKqc4MAVQxgfTWTzHcqYmsFkhLiiwL1TfaSRieUf7aeTC2KXg43wPajWiE9V1Qv4NZ44",
  "key6": "Yo4Z2tZdTnnsj7aBmGphaEtoRJAJcrieTCFJAYKhbs4NkX5fVjzbMXBWPh9W8x7h3isQH6hH9hsR3PgopQuuQx7",
  "key7": "4bhg5cKugqgvxBo1Su962btLcpbVKH2nmKZUmW6cE9vC39VcmbesmvqWVNGaFgTD4Y6BJtsPu9hUEh7tXDtPtiiA",
  "key8": "2MUYK2jZA3UmwyoKj5bx9CQYGAhyqz8y6NVgGkdzdP6TLdsmDRRAH15GZAwTdEC1VEWEwPoKfdDpXU6Nx1W72nmX",
  "key9": "LU5vrY7r5U6dtXSpGmLHUW2aW9DzvxKY9snRMGoxGZvowYxM91wqyQp6cCCvtXnVVDFa3o65dFfXSQW48YkXDyG",
  "key10": "4TLDeV9ppJM22EersCjf1JevdNQiRa4dcS6UpuCAXezDg1P2cwRSasxDLLtSWa6AdWTi3cLhPFiDXDUusVQ1wT4T",
  "key11": "41bdjXVoPPrHu7zyrujaLRvE1sdTd3ft1fSZVdAPYXu2cGD5vczDMGdzi4Gt2mSbAcNqpip6E9DM2MxtFapUkfD",
  "key12": "2Jq3byRd5FDRHPXSzuanA47ZorcWEywn8mM7yd6FFMUatZu9pb3RijY2is1jPt3A5KSAFHg7bd2XNj9ZgKpSV5oj",
  "key13": "5xXVBy7j9Y5RtR6uqx3AFn3MFrwb8hqZorHbsxiFmmUNGqxGgGqNvFDyHFedEA9ppykZrGCk4jiCoUj31YATELyu",
  "key14": "55P5XvZVxeauWJYtqakcz45hPxNuGS6Qxoq1b7v644vSN1S9dkSprQqQGmCLQsEook9JWebMQa272yCZeMNecpdU",
  "key15": "5GPvzNV4D11pjFju7fDympt7jsbZkHNxcYuuiojVDkBhGYGatyhDaPAGcd5Fgc1vLJdHwVf2mhbEr3y7DykLCgKs",
  "key16": "3Hwi1PBLmZJfymy8N9tWRBDdi9msmJG3EzhJ9FMbgVd68wZcvtLrCEPCRzTyFFmu2vvxPpssfzEuYyP7VjPjj7PW",
  "key17": "4upT6fZ5SWHqPWAV9LVmsZgXdKhSyfqBnCKbJTLxnVinnmSCZkYmUwH7oAreZY5ZPGgQMJYy1M7a9NjEHiB6WzSF",
  "key18": "4Tugk6UPYs4P6xLbudSeJpMiEdHjUr8j8Pnw95jRdZthq72Ehsid9QHzyEvbDHRwNFHrzmXStA17cmNaNbSatDNe",
  "key19": "5JiQrWdBE4bFmYmbTZhPRbD64XVAqnjwfDMoWSNUUYDjT6cqQtkxJzX3G8pUsHW1nUXMCywEmJdH7Haxbw1rB92R",
  "key20": "27MFcqLyz5RZfJmvB3yb4X388PF3Xf8wbM3VKKpeVXDybBpvfssNYfyzDhw7Xtp7Db98jMYeLvCsaonWAoVUhHgN",
  "key21": "oCNP6RfL5JPR6ZbvUXiRD9uAF15t5Q6frwEYn92ruv1pK3hM7FiBQaKFcSd7qaHMhh8QAwoZsHeZRrNpBHTF8pu",
  "key22": "3m1iSiDLzDepHhoVYnkHzwdNVAUJWPQ3FV6f4uwBWU6KnWToqQZx49tWWY2rpqUHHuHWVJYP2EVERDmodFecDmDf",
  "key23": "hfWPNMpp7zzXGF9WejuS9wacHg9RvLQVYuZVb3HUaJXWkPAdWeJYR2wtnbHgXUy48vyBYn4UQJ77FPR5ivhPEmD",
  "key24": "4igpCGcXMdjMRAmDHp8wApkLWuGJzdjoPfayhi1b5ZALoYU91kbbDZzMADHgEesJ6GE7xLKpyP1oJEvfnsbXqgnf",
  "key25": "5wwhjDvi2AVNFB4rftPUrSabMp3AdEUKfYdqSBb8k4yDJw9fk7o3zupRjtJnPWDLuBDAWryGVxmjoghDYCMUYExQ",
  "key26": "3AxC5GWAwuNpXPTAPUce3bauD6zTMGuo66mLPJR4wDHRJ7v1b45ghYfXpfDjDdh9UvjraJ3v44nreRb5J9McCxRP",
  "key27": "3NSbcPxkESRq6uuQyo6B8S5ycxdRrdaWEXFMKYTrLd9XATwxUKUGdWFX171TfBrrBCiJJR3DtCc4Ppez23ifAGPs",
  "key28": "22NHyPAuRRVaTC7oGzbvzAY2TYwTqCMtv732zmQp7rfqFnEtRK7jfh2AUBnCgTKfVSEwBcySKCVsAKY1Z76PGcLU",
  "key29": "QF9NrHZEarECRowgsk5v5tpQXftJ3ccDcR5ujDizGDyJaSsS1mK87Rw2eEmQvHh4fBS84r6yjvwYee2cJVoGYP4",
  "key30": "3WQPGM3huyDUZbN54yzsio9UeYWC4bxSTkYoEmLPBpHiBZCPakJk7QTDwGDV3NbfaJoyqqVtbwVejHF561ZxtBmR",
  "key31": "9tnP3F1NPsT73yPkMmn4Rtb27CsJ6hyrjaruNEKfsoDNWfvc2RxpACr18DnyPwYWB34Rvsk3CVSFJ5iv3hpzrbu",
  "key32": "3C2CEARvUrYx1ez6cVB7MfFDKbKmWd9GBYLm6wjHHu1Fax1dGSiupdw7WNB9uxQ1Kqti9cLYVD6akdnWyfgUHFmH",
  "key33": "58Qi89GRqY1BAAa9j8hs43EPxsLNuFpY6DAyD9hra77YBLbGFqbTKAVEVXPFLab884MDYhsTN41RSHU4iFkkXeR9",
  "key34": "4xprPSas55BWkdj5A3LQt5X4s9283gvysqsToDHB9QZ6EMvXJEgct67UTmdQ65rNyySyNKwnAh5ot5k2o4QMYCY5",
  "key35": "5VPeGkW6L4CvgVXFcaaDrM6jAazdubQjdopGmAuuVbr2DhqMErBg4uZfgmQd8XG7LR3kwChiaFRM4vgiRzsXA8Wo",
  "key36": "5jmnBV7EF6Hv6kBvLU4EpgcAvDiiMWXzGRBenXmGHmTY7nGoseLC1bgGVmN53Tk4sCTR8mBdR9DHmXsx6WSSxhAM",
  "key37": "2ARRZnh8jd7rcLVz5jDsRWVQqVi63rjF3MrHXPXBU5BhauMhJi1W9biWvtFzkUDDsFo6eFNyQzRodSTLjobEp6YR",
  "key38": "cJ65wy5Qc1PzRmciwEKUjTBNb5j5hMpDUEtqYNgx13kxb1JbDiVEnNkNigPC9HRXEq3rdAyKthkFB2fUHwH1VND",
  "key39": "yBxezXdygVZ8dpG7UtUf2gsJxnj28hYiocFjm1PCghzm2Lnp7JKXmHQEkVvQFTCGT4tuSNTsTemknbGUcsBCTem",
  "key40": "3moQW9VFrQdgp6vyq7cHwae7NrEFT9qa2yEnyMpkvP3wyzrT8GUgQ5J4t2pRj4ZDyGkYXQ15M2qTbiBgKWRYpzrP",
  "key41": "4gMf5rUJCLuBrrGAqhPLjNpVBgRK93e3GRdPsb8ZPxet5QNoUfEF6k718xMr3zcsQirMnXjMjNpVKZU1DFtEjneA",
  "key42": "5K9bHtZap9GFRbdD4xKyfBx4DaE6CtWPpyh8jQyG24hPEMtZrFBsL1Vq1pXgza5FJHATwkKxFw1sSfazuZYiFFRi",
  "key43": "5UUd6tzUPCeXQsu5YxnWbdy1H5UvrDw34QnQBTWjxCjgU9bvgiPKchSM6N47E4jQ7Y6Ln6WYaBmffD5u7jy2Bdug",
  "key44": "3ggdbrmgfByxaK79XcrotUa7JoFN748iBFX1jLzzmvCHktXHUG3aZhAHogA2dDye71dY9zbm29TbL9FgqV6n4z77",
  "key45": "46Npa2W7K3DPvTLrBvXu8fxxTKGX6SNwQRz9Db76SygqV9wPAfuJXWTBA3Je5pW7jd53jUbrxcQH2finwGnp4BLe",
  "key46": "T4uFDYwWy3CXdDY5kjdGZHNjPuhT5M5kFVN8h1uSMs92RZKDbyNWEtaxsbC9iSkxeX6sHq5Ea7UWC9UaBbtaKda",
  "key47": "2bwsiQjqrDQFVbRwVNWfpNgVZcv28zqbZ2CHEFTpjQnnJD34Q4zGVRGTdfyj6bFKvBUfrJaPf98uA3okoCpbv853",
  "key48": "515aieMRLjcePmfPeQN5ydAA7Fnyc8guZiD4hhQnUNZghcxYBpvyqSLUeu7botaiqoPQnMe2vDt6vme8dYPv3g63"
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
