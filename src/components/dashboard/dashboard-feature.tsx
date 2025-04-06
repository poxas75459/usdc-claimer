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
    "HoQYpMWt6pi8MjQziaMfuNovMcASwjqsLU1uzyGZFzNqXsU5YzHmt5YXRstgWRjMi4B46BKm4fa57HxLzaHHsi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NP2NVK19WGwJKXbkveTVhqJRBc3tvsKkA2wPsAQ26U329hEdZyB4JAGU986dQzHntRr3kd3qaatLNuzuGy5yNxH",
  "key1": "5cumpEH3Dkp2DvqgLRh8LSDLTaRmkcxoc32UudwVyJSsDwkVRfRQQesLP8EzfDFHpmNBRUkJiFKY1D9Rjf8HrFj6",
  "key2": "36NdyVQiBnM9uFNtK1sJekqmPwFVp1juuGsMBZsdEfKzo6setb5wpmVGpuM1RDssh3uAn6YCNFeb2VR2Q4kBFUcx",
  "key3": "m1WnL7FN32Qp4yt7RFSnmCoXsMnPWqNy2KUZVtfbGwsbRNjCR56DUAxaBVXH4y7o1GhD38wppN5RQ2VxTf4Zq5j",
  "key4": "4fRThyBcjAwcLch8zhHRfnK1dbXJZmHHGTLfBWgGJoCKdkD1qEopCvcYDEHpPvtSXPtHJisS63LWjNd9vYcFTeBA",
  "key5": "3krbBAbTusy28pbLcyRcxhfS6a88e8HRPdP5XG9SgqBdfXpmW1eA5HvxNg7jNcdJBvagqqjBJns7dJUijgAaD2kE",
  "key6": "5LVtvbGhXMvCGduCtxyEvJpt5d3e4t67M8cikg9bEsRjqhuAsYH65t3tXobAKrNKbQUgMEYXGAuPgkXxL3VZx2BE",
  "key7": "ie1jXje76LiSxXxq3aY5JwkpRwpFMtKpNdY9jnuRGUr2PpqA3CKsiD5pAPnLQuQvjcjMUwUbfnNESAJMdtbH7Yc",
  "key8": "EvKRWNYHx7DZBQXomF71M1WNL9Sz8WHKGH2K3ub1t3JdvNcvFcKRN6YcujoffYfHT2HW9i59zkcijHgRQVRJk8R",
  "key9": "3ns5sNJR8FKLg1EjwBFkS4XErXkkES3vdXJ1Lwi6SPauUL9dVsGL7fUj5ZCitwKQq7iSka5Yi5v2txuLBzKQVmvr",
  "key10": "422tHoDPfqr3CPqWWyTG86AkSL8BHvJgV34SEsUw5ZL1maKfKGnnaAs8RcM6i5oKFu8eKeaYcWWGwajV5c2tAATT",
  "key11": "5Yt9hZzS4DRFGovMYtnBMRuTeSUX2oeFUYrNdRDGtKzUmrvVLtDFNdtpbaBcMtCAbYwVLc3ykhx8HvtWZesabxwx",
  "key12": "4RyfnPXdTDUz2UarTYpcPz95tNRCenmz6h2Gc9L5i6PH3287vUq5MAjTch3ak1AVm7PR5QTu8WiRAsoTjzWHLb9c",
  "key13": "FeszLHtKLo9geJCt4qAjEfxiywghYX4BavknLcCw51uRZHJtvZ5oNpi5f3u1zYLy9eVLJpkmFzw2NviP3ZvfPAp",
  "key14": "57f13hssfkxtLYefupVTCgLQZNPgSkBMGVEosoxHR9c6k1ruUdCdZNmr696qoF2Ztkny77yU3HzWNWNWgR3SCTYW",
  "key15": "57VvnyoVubuaWzvXxXVfLYJCRowWPfL1HgFwVGg6AeiswcEFnbxEyi6dLB8GNDLURZa46nyHtBtrXyfUjb9MrZ7w",
  "key16": "4VaYLqjVyvPBb5BYXFMZbdLjS72cCphRqwaPqUxnVqJ1DDZE9JedCPyEBL994VYcf9w2o7QLGEY7H3HLQYJk7Geq",
  "key17": "3e4RpMa1UytBTkez1KWsnF6TYoDky58x1bWveNXPTt676H7FiaRbXiTi541ZV5hLQpCD2ziMUWK5EevmNXjtF5ct",
  "key18": "33PRWmMMwY41httBPPi7F3WXEp16xYfUtwmJ2XY9xWsTSHhSoe2BkwqXqX75Vroz4BxELonrF5MUkqTjDKFL6A2V",
  "key19": "498KiQ69eV1xKZRQ3g4cHJEFiXHh9sj6WUdwRQ2HAgSohrV3WEoWN6SczATnC9Npby4QJkuPAkPAEJgxQenxjD6G",
  "key20": "5f5KFXoJGsxhLm6aN46264ftyR69VcPvVe4qnAo6T2TtfbnSMMdjLQNpzu3HsrrBDTEfSXRoo3p6xdfQ2tkVw1pg",
  "key21": "5uGKCg4uMMA2PzG8RaaNi9mXYQvJ4chQCdPtcWMo393RHaPyv6AmVQQSbEM9n5sisy7wLYXtEbAhrM9APj4wjdQv",
  "key22": "2kzfWxSvivebgzFJiJSgM7u1GrSQWTdoogR3Hgq41cxS8eMdM5U8qWD6VFQne6ojC7JmDue71Kd6F3QBBrag7z2q",
  "key23": "3kMYsCNXD69YH8rovkmrBAgn73oQhQVVTNtKDpYz5JYGqWf948dVckkAuv4SYw8uvER2HPkuMZcGwpm2uX5EBbXy",
  "key24": "34JZKv8RHP3BnW518wAGH4jF3gwoMRZPq92BbARG47TkWjERaz8SpFShKz2XFgLeEf1gZs281mKPpqGLF59R3pR1",
  "key25": "2Tb4BfY7D4h1HG4PLaiNfZQU5TtbGeu5bH9poBpqMBmFVQMwJRS3PNEMaT3Sxw8PcgR1dYpQegpgZV8yahP4MjbY",
  "key26": "2jf7yZqCApbQrykr7JLe4LVQbwTAgVkDGUnMh7T6fYLeEyiREujNwPFuCbZ6NmygtePrtishUNpCYiga8vcWCb4L",
  "key27": "2CbGcX1WXzQ8xa21TsVumedLXdoJmKpNkMyjxc3rCzQDTX3VRzFScgH7SLDoyLRt1B13G5qmRHYoomGmzHzutXWs",
  "key28": "5yJh1863kx1LpiN1VGveiuk7zUikRQ27uLx53zuefKp4htcriqGECBbygv22T56HQd4SNassSxnfw8XGGU2aibFw",
  "key29": "2qRgv5nPDSuaAXyxaxv9M6XzFaGYWbVRYD1kzY7TjtE622gZjXqAVA6Ekes8X4EcJFkzpQ1ZCSmePSTqqgHNUrjY",
  "key30": "3Z4YQGtuXH6g8jd3y3bmm7GGG68TNQaBYXStiyuhaGX5atEBh14fW6C4YtZpcT4StrvdhtNXejy2bUfbW7ZpALBy",
  "key31": "ss7RhU7xSxAGrzb9Gh4ZTM49B4iTGYNSEvwUNctYW1RggsBv3zbR6Des4jx4URMftxcmrhie3PePtDpdRxHWA9h",
  "key32": "4Yit6ef3q2Pw9vSudP9TPLoq9Rekci1y1qWnC3q9MNaAQTK8XpT1yniHkfLqqy6VKvgxPyySrLLZyPS5qEvUGHwX",
  "key33": "3oQfPKsfmPfEQnBHuL1EbMFBpxjUecVm8Zc4mYECRDBLE37Q1MH4bBgwkUh3uCacmdz4gX4HswfkY6WAMxjSW9SA",
  "key34": "4pcBLY7LiiyAcwnS44CfLe7maBVD3hj6LMx1tng5ERkv2pqiUCr1AUARurYt3ykx7Fv7USAjAzVCdDiDNe8onHBb",
  "key35": "5jfMcmd9Mm4PNk94Z4hrjDHtiPUeUsFENtbAcR9HrpgjmeMSwwpoAQ2YUTeSVDdsnSFfgpGdS8CYkMhvmNzMHQfA",
  "key36": "4h3WNFYePK8peCZnh99ua7YC4RdmwFcCLmLTpi7kTP7K2MJxXSvw9ZQAt8qaY1CRUpx5SnTsPh1Jp2f96pxyRUgi",
  "key37": "vQ6zMuAi5wGioptFhBJxp4LbgdGi7MUS3QX4e8Lqyw3a96Ty3Jqq2jsb4GuZ3Zkn84TepXSD8um7ThWUJMF2wGF",
  "key38": "46gxnrTdPya3LnbRJtJgYDaFxBhLSV3TYETaHFRSZ6gcewq6meL8pnCpXAiqgCf2xud4yD33oyLU9or8eKthh7UN",
  "key39": "43mobdaPxfpXq8MLbsSjNygWRca269TZfFsMCjnUEj6xrLTWsr4SiHv6bndvT9GzHRMQmH8NVm9qPgexn38MVBfL",
  "key40": "56PGdAqd51B22TU5MRtbgK2FHEQZkbkMjhQeEvvmmjXDdXSh96fMYwCNdgq3xnZ4w5Da8FJs3pmQxvaRuxbEkdzp",
  "key41": "TdBnkBNUQTmN8qM26vVW1iuJjAFoqPzJcnKrQHMiUcyCk2MPT1LFkPS1VzU9Sv6K9iMAmzi8V3pGyyonNpxpajd",
  "key42": "1G5bvi4ipedekncDEoaLfbxq292e4Agi7jkXwAwHKq2htqVfKUTPqAWmjdMH6qZuNufNXMYMt5NqvNGke8YQKn5",
  "key43": "5dhgGPvtQZMfhAXQGCe4JPNF5bsjU1vVcFpxRAfMRC5mjVrMMnGv6qgg5eeQu1qVr2uTYJbWFtBozwZgsJfYQinB"
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
