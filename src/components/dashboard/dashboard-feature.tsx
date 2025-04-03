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
    "4BLYoJTd11tx9DwMxbDUtaMcWboYwHwwacPQ5ibfEjSpRUtg5cMbRAehHHYNVHGciLpQxXdwE6j4FcUzVssNXvPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33qzbSsFuXAt56cJYiuuUnjqumsCuQGsQrZKtXJwWwjiHaoeESa7c629x1MsYswuu8qDtK9nkZHuYu9swDFQTDsd",
  "key1": "3xj454Q7h57AVVPvqknMfaXDQc9jwVUaKMV2w7DN64MF7Tj9cLjqoA2YwXFbEUKsPXBuboGbdSkRcdtU7HpYdDAQ",
  "key2": "WGXECSDukGC9su3fzrZoKZsXvCBi9Bvuucd7s95Nw2DnUW98g3BqfPYKHuZnPMLBjzH52zdw2sXFM9FVCg2gszG",
  "key3": "41Ysff8yFQ3xxsGWpjTAkSuZVeiU2rbnP8Mp6HJMr56YNenpDrcepjdjofBB9g4RphTCkFh3P3APuJCyow3Dn9SG",
  "key4": "4KufMZjgLC5MLBSqqmUqGtUE9wkQ69UZwKexSJffqGnoFJT4uB72esf5grfRzebAkb8iVz6tW15RE2cJhNRgvRS3",
  "key5": "3D7TUtnjVK7JncYSHW88pPHwN1331155gPPDXqLTCEaUXzmft2UCrzWNoWbZxLsD6HL8PXg4TVDEEk1qfeBURMeW",
  "key6": "376vnPvWtNdvTeGhCb5dXsfFR2AeoPPMMmWBhHYRyboTxoXZcFSQ12rK29KPUdQPoZMswHwWxr2uq5goqVMgJqtv",
  "key7": "2SAfKHAc1H9SVFS2TDekiFSJzthu7rb2PMb2VnPYWpwyBKp2ByegDntYessXnAQrXSFnufSgVzYQy7LQHncHkUY",
  "key8": "4FWdYiPbuZ216iyT5ahWed2UmbQzXnTB5NqmvTGjZ2PXhVJFfToQFCVjzB5mZTke4rryqq2NZnf96CumCypRAdNB",
  "key9": "i8bDp5VKw2n3t7JzooCY6bMrERgMH5c8rXk9FweGLFmSEMfx5ajCf7Hq2vua9GJiXF9gBVH6JD9jbYRrhySkqAz",
  "key10": "2MFRPjZ1Hi3pojRj8D1maTfCteGXXt3rddeZWgb9VXPUa1iQ1gbDYs5GbRagqisERsxQZcrdJRvch8hC5y5LG4Zq",
  "key11": "fPt2q9f52RmxyMDw5H1K9SHJsw6AsN2i4o5RMGyi12qdFcfzo4tkd69d8TR8muCEjhTP597G77Hae4AGRYjFx9i",
  "key12": "taLc11AHk7jT3YmRuqF4Vf9nxNAw4RGtWna3Kk6wZ9Eid9MrXZbKvamjQPSqR4VZWRRE2JnSTHQG9MdP7NAx7bq",
  "key13": "5ZvBXxXVdA1tXXaRWAGvDN9ESAyQf6ZDbzVvVszoyWLzWGtd8uCxxEsXw8VVZuBjmVr2bQ4dSienuHMdGpaD3wWH",
  "key14": "42eDGphj2GEgerTyjvVFiKyDYdKJZQ4e3Prs5kZTf7sTwMB1tGxq2HSS1kztZdraoYeKCfBNnxpYEKheCrgQM8Zv",
  "key15": "2Q3tyGZ7XC5x9UoktF2in5udjZApHc8X7ckK6vtKXQ4TsqpJvWVPBksC26niyyVHnKp3DkDqRkJGi43xKPupHF9V",
  "key16": "JhKrAUpZLH6npvUtD4KKTSgF654e5unRgpisTZkTWATcRvH1QjLcVaWUmp2hVhx2LAWhhiqb5q32ADntD1vr8Lj",
  "key17": "rFLCtyb9eLRPVKcUubToCQpCn8WVfDzLZuKmgCZEKzP2krJaQ6SANnH8dEG1mK23szg59EpGcX85zFAK3PbMXsw",
  "key18": "VeUZAYmSQMs316Peedm4PXgFbtQDd49VXgJ3ier6hnWzty9TXdgvxnZL4LkWk4XXy3k6uhGTzDmHN1F8111dvL4",
  "key19": "TD8eeZAbmqGfdAMM7o6sqSEd1spvEfFwXGY9G5f6G8pp1ynnmCeNBtvejULAY3SXwHc2ULnZiCRd2oKeNZcE1ze",
  "key20": "19UBWG6rdU1dLoWRq4VnpSX8KpdY7Kbo3LsGgtJ2C1bQ6QiM5i8DM3SNKAQiAgnSem3yjioJytuSm6LKChKwiTS",
  "key21": "2e8MtYFTW6rxfrhtMvFNg67Y5ceYtRdMEn41uYjwsAnL7JsWnCebGqqAJ1u5merFekFaQBLj3A69scSUfWy9MpXi",
  "key22": "4mAMFKPgkrpyCmapHF5wK4F8FCVeCH3G9NJEERfuaUSLwe2FKHHSGDC8FNYHjAMwbSGMFRzQ16pGudynSnhqn1ny",
  "key23": "3XxJhAL4ph8d2T4uf5wpwAKxrhBNcR6EnyNGYJwFYW9zLURy4QnexJuexSBo4MWvc6VEyoCjk2CYPr6exbrQPXub",
  "key24": "4R87LUqiHRySVBEyvXtkuU2QinzFDGJteRVia8cUE6efEMCw7Ui7XUUSsTUYfB4hWqveaWW8r655mqzZ28b2UbVF",
  "key25": "4TBjGQ5Z1iDJgVwY1vNxeuuMjnNpeYkdrxymVPFUHreSe436pxkjbcnXSv3fRdxU38neBb5gCE3qDHfJnxm4Vjp9",
  "key26": "zxLm1iajJCyxdYPKefg8kjKAC3FYxtDwxDLPjZepYAovEEH4qk9AF54UAWkQAuWVLwZs8WufVBMHUCfYF1o4ApM",
  "key27": "2F8ih736pWaHo1RFoYE3WGvXUEK5FJ1zG3jZg7W4bWm2NkBFPXMuceP1gfFibme68VEkx1kCGs83VNamZt3vWL6u",
  "key28": "4gbWmHdjC5xDWHT5uW98eWFuoXJeBehgmApwqnkURBpNL5ZLgWJz3Tp6wDtEH45oCJUaKsJB1onZ1qkVjynRUuUw",
  "key29": "4bGxW8j4jfcUh8ddGatkYomg4CkFYTBSLU3SxcgA5ADMbCdSejtdWJeYc7asgGRsLcxBP3A111HB3z9xNLmXfTLF",
  "key30": "3UJ7CyF63QY92oB8Eeh2FsqueTpbhEW8vLbBL3eJi6V6HaNRkxPTnS84y37tsMxjR2FBNuLLwWQU3K9weRGsmZT8",
  "key31": "3MpAFLEuxLAUFGEWq8ir1co7K9j7SstH5jPCZiPs6PCVZvFz6bP96QSwXTTuE9C6YaPVru1MykVC6dgFc8fPYQRE",
  "key32": "3HRsauNhAscnna6KjLP4JhP75WtwwWNkF43TwqhKrztASmRNx7Sp1Vp2ni1kJXxhJUGRb4SLDSHqJjoADxWkGRoe",
  "key33": "5yWZtcBipXen1hsWNVCX7BQnB6SsrpXHNSfkFcxmffpQEwpi9Po6gpCmhfArkitKkq1EJ545UtxNNa4pdv7wnzp7",
  "key34": "CAStPGgAFByib71t19yyYNRPoB8JJGY5gTBPsfypTSFQ5e1TiK5Mg4J8pzeScVAma9mp6uLfmiFsJyKBxWei2FA"
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
