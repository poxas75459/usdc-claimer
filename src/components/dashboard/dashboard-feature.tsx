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
    "36KJ8bww2DPmXNhg8grpthdv8kGDY2p6uVaGB3JFKQt8SL2R2nLUW8KRLmnnCN2byZpQ7s4gKieQ9ZPkun92bm6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M2vrvDpc7LJF7wcWXjdVV8dTxnncBFAgQjzTMqigUXiRYZLi2echjTz8Gbej8gATbvycEp9g6dcZSy8wjXUde1q",
  "key1": "47N2WhDUEGkrrPGNEbDGLS5rZdkCL4xPUCKgpDWdZYYETkz3ptXWyxnpS1uQAuXDmVANvY5hdceKLAFQfrK3cA6k",
  "key2": "48FPeKatQUPp5W24nKpkNuC2QVeBGF4PsXP55H9chofu8GZmrfvcq1a92g3bBDTt4vJddopNS6yFnqdT4wbxXYD7",
  "key3": "21rBJsvtJUA8DbbcU4wyrDEAmJVHUE3TrBVEqsJmBemtAZ67vKEsKegkdnbKa4cSBvJSqs8p9ZhJCNWwUS8K9iFt",
  "key4": "4HiVWUpDzxW6PgXRV5PHhmTxSy8AiHMm15rYX37RcpBGmF6YUj9PsKrHcuc5nDq2SNBGFJ5YSmDasZQexgnFXeZG",
  "key5": "5Qb2rWXNGsdgej9Rekx9XZYWVFJLcvUjS7FXQW78ELBZRAssSUpxZgC5DyvuDLbJhjcKugZQ93rDTcMUXn9ewXH",
  "key6": "4RbtNaiKha1pgFjQQ8KKQrGqGj9CTMHiv1fyUeAbTU2sGQnKD3BZunqfmw8wScoHX87mWqDDk4xJWHNFeB4gAysb",
  "key7": "59mmuC7wjBRyrU9rxTH41Hn4VLLRSLUdsDm2HUUWyowkoPCjcbX78vxazb1oXoo2WF6iMz4B2BY5tdC5y44MhTYJ",
  "key8": "49A5P3XsNQ2PSqXedSGa74LjBxGBFB3bCZFgsQ6quNTFJCW8iCiEm6m8rKZqfp7frumJix3BFeDV7puov2S1hs6r",
  "key9": "4fcxqd2SDxbh5BHPYvHra7y58yw1PuMxqBxVY46whdxcKJc1tm3fRMWyR3CZNCz92hywKwCLgw1DPQ8uLz7D1a1N",
  "key10": "2vLatssn3KbHV9mnRrQrWjpuAEuWAm2NPSzj6KRSwTVKPvYMv9sX4PYrX2t5hxDdUzZE51NdURNEnXK9A9yBEbjv",
  "key11": "jdeybc4BNALfDWaMXvpSFQfMZbWNt5XRiUz6eFSaXnTHXvfHmqLx7dNN6tSLvUqCttJ3XRTAutHW1gjUMn2F4kV",
  "key12": "4hHLiJSKydMLcmvwbC15993NouYsQi7a2pq6AM4FL1qrsJomFxQnjs5SSicqHwUeGMLT79WpcxALtySJAhr1Gb9Y",
  "key13": "4syzVDSXXwbx1YZ66Q1n3s1gopt1T5qJRhHidaCx4pmny6pc8jtqRirqDkWeXEjxyS3SSDUR1VAWXUa11SbZ2rNu",
  "key14": "q2dJJ7uvWBks89KymrvD9C4gWC4wkcaa6md8mCQQhtEf1A7oKBJL6dn2e6BTzi9svehEk8LPbAQbgRoA8TQcMGN",
  "key15": "U4dq8RHseTG2KrKBugUjsa3HasAWcn6zxtdLLcvh12q1SRrcDpFUk2DkHUKpgFJQf3ejU8Wvm8jzEMaiMBLnhQR",
  "key16": "4rihpHoMkvFjcG8WgbECR11K4guby7FLZgi3tMg7MbZm3brbUEzrzQRy6eHRr9mN8seceLEAEJCGHr8v3kYxAu36",
  "key17": "2chcTNX4E6HqxgJCVH62iJVo6tiRBGDeFJTRBi6xE5fbhZM1zfJozj7YVZBmf49LHqYztXMacmycP1D89J6Yjwri",
  "key18": "3h1D2N11S5WZmTP4fpDCfUG71xUrK8GK3vozos5pKaSTKTMstD5VSQq7VRUbDPUEERzWix6faM1k1hMWVhiQBgq5",
  "key19": "5gU2x4bKRcyGw7p4ndrDVVtqAzPB2CJ9rG9K8JwiqVvh19co3Tz19CTjhqcxzYkxwLfFpWQJKYKMPVNgruUVupBd",
  "key20": "4hxJd22GLCPU7DzqYtnSDRthhxbKPpZSZAvPxittxnppmVD8mRpeFdJDNNQrWTKBmUkmrUotf2nS6PFDvbgybngt",
  "key21": "5xuf2Ko1csjC4iPKPokuAyGKo3Vdah9UmCS8c45YYUo8tuZFiMN2wvvVgUTapgf3hGgN1Sg4EezhzYVMKJ1dUa7k",
  "key22": "4cMz681cMh4n8Cx5uMGCB8pjZ4M53WMtwBVn4K4yt4ERnzAzCCr4XPS75YooocWgh8BKg58wvSgBvzJzM2LD4iDe",
  "key23": "4h4omnebWCnJ2EgpMuNEERSTd6gcEmha8vrcKebXiTnnSTR89oBDSCvxFyqsDcZqw6jQZCtQ7xR3tA2qSB3RV9Ds",
  "key24": "3ip7tkHo4ZDoxmEQqoSpUobAcu5FQsw5rvx2HA7brhyWiBht2JgZT9YGnGRKgsUheFoB341phMZczRRDYATRKxBh",
  "key25": "23fu8xttvL6bBQtYH33HgYFKn9EXAgaqdH39KgxX92Z9fPmU9HRvagwRGPwPKxdVmWveQ7Ast59L77nGHaxt9fdr",
  "key26": "2T3zznwbpJgTdni6pvCXcEmpsMdkg3Rr6oPgBZdo8ZcYQqCyWjYYwenykVkndvKxz9VN8neiADSkqkQEWynD48B2",
  "key27": "3PSyPPHy6MAfUjNecAYRtmhSvxhGhTqNA2ga46kBLj96eAHpY3gzH4UaMBVPzqVt5XzwsYQxxJ1oen61x7gU8tia",
  "key28": "2cLjNPyRYM1MypoZ8m5fvPF8sjEwCHPHfNDi5Da6M6xX6uqEZTZKHaK6wdnRrQq3JPzN8dwLD3h7savburdUodCU",
  "key29": "4MMiZb6vpXhu7UL1rtxwW6e9BMtuQLDASEFDiP1Aj2tyu9VWVYY1qagS6Z4yfEJvYhoH6WAnwR21xr9Wqz8r1Fnj",
  "key30": "59qtDRyS4QDjXWQUiMR8fM5yTFA1Xhjf8D2T87UTNzGafnEHNuqShiwj8Uu87AeQvCN1Y8auQP2TB7Uuiexvufhr",
  "key31": "5TemBxabvPXpQpiwvBsNPTwWsYBDqWFMZSgZ9dk6zarzzXGomLJAkT6YSySPhdSPMrd1X9wd1rtjgNSxWtd8YLK2",
  "key32": "kE5BdVRJaTXSAqEbyT2E1sv9sLu7yobnCSFWNEDsGZdQKpdLBcZb3jwueboAjMPLcPdLbFKTkoLH2rSiHnZVHqm",
  "key33": "6TzKnY25exwvPRccxsFacztcb9CANop5kw6Wctwx1dzkT6TUzW4RTLqFG5j3QZptYdcffAsGLXQzcpqfR3nzZqq",
  "key34": "5jnR18sEQhQsDTrrdCM8aXvwQbxJ8maB9EGrJbX3oeG8wHx71G3ikbDw8ucKJsgtMCToQUNtoi4onF4kT6fPTBG1",
  "key35": "4SHiHeEZhhvo3A9hFqtq2DCxh4LGoD2t2bJTzFogLwHkTEV2QA3q97MJjWaqRq829sRMkFkPcg8tVgZHNppnTm3B",
  "key36": "2mRZyuqG5RbT1xxLfYejumvVBuzMcYh8tmfKoRTGuPrzpaDfZnfx87GMvu2KtyQB8nNurcoqvVvbxeagvtFUDY7Q",
  "key37": "23QBTGyULKPZkypkhzXzEMSWgSRJCkicUoS2Rt9X7bMHRYftRQtbPYwncGDvdpsbvcXGeQ1vCVumuZo2JNqi59EL",
  "key38": "TLEf757itZQqTYe5Sw2nrZxyq9Mcs7HnXSFKgBNwhMTfCSfJt1yGBMCHhS7P5tDyCMNh2u1yufkRCkjDCBAWuRm",
  "key39": "8KnNKdTBL6SrZ3Zwng27heSWuyqUAdTJsLX6MLHxCR8AqeeGD7cCDRmgtFfkycyNAyc3uKZTvAeWwAj2Y3FcJwb",
  "key40": "FxFhQcCkiBVu8KvBR6BqsezmwHAh65rvJwiBNnMqdHqS7ocfKfp9T9TkmXQ91BzqDGeW2xEvGexjHW8TEDCeWN9",
  "key41": "2tCotMzsyNKX7ooYbPTnVUnixBaYfQqGupWynGDQLszCMPaJb4GMLTW1sEF9Y4kNEALGjPLs5GLpkVQFEaDAbTsW",
  "key42": "67AH6W8AXdswYWPM8YpW7rPyHpkBDjfZWsQC9ksk7NsP5ajgYPPWvqzS7kseHr7yr124JW2T8GpQxANUEFHhXkVV",
  "key43": "3Z6iZtJmwKHVUnrNVJ7byfVJ2DEnbhi1nuasV5cdEWEV3hXKEReLv38QujeLZZmHwXrkuFmouGdFbG2GVHneqpfe",
  "key44": "5rFMidMahFF34k127GNgnnPh1TA3haQKwgZjiD6QEy7NwJ179hHswuZhHA8GKSD48guHjGBFbJNLa1oaxZxsZK84"
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
