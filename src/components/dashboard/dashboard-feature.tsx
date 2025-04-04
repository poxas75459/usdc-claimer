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
    "2hYGCYVp2ejFM9f6LypL9kyEFLiM9j8rANNTDBkyY6GhD2TtT2Ct9sQpGwNjtmxSX3M6jf54fDFbHG4TN5m66e49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DHGMzeokDmDKZEPbnvZHJ3ko19Nz1KPs2T4DYKvXFbi4Z8NhveG9DHmfMAW2LWw5mTmzviDa91QtHrVt4bztVGC",
  "key1": "FhzDUFER6w2bXtXWWxuPep49HWcew4WzhwMRcDNLqdP95prQZHqC9wTEqKZUyZ7fVYWjRv37cab7E3zkDFYHsJ3",
  "key2": "L3GKW9Ew8zUXqhg1qog3Yce3MYb3YcCRnUvtvBRVaVTLtBExKoBukoN1QJZxTu4oLxdFA7zrjxqHdf4ArwnCSdU",
  "key3": "3Qpwhscc92PUfNgbQSLfdmbx4Ra3XVw6rYxbyCsLY53D2dYqsUA5DQTafYUvTHk6wAf6YAmSouQPTCXLpVJM64Qz",
  "key4": "46BaeoDerHoqnGKhtrgsDktuHYawER9JZKikfg48KLcz51k4bWNcbH2ykonBwybfuyKJrbEZ9ffHS7ha6M25QqLA",
  "key5": "3naBeiRaKzK86yHXNzmxhZEDNZjBmuuV6NLWJQhmjDkef7muTXZJGRwCoQ5174dL1htBngpTsnwY8GhPAWYNNKkS",
  "key6": "58k4Dup3tMtZruZBnX1MXvPM5ZJaumct5fiGZMcf7mKVuEdncuo3n7tzpVJhZkHcYJ7GEeSAZtZ1r8mRmoRccQ3m",
  "key7": "5QDWhAcAyKjH89KaaAJdKejrsiRPn5c4RXcWC2ms4kFKFBR9bweNLTcV8ZMLsrMyQz96akzBuXf2YUJZzDv9U9Q1",
  "key8": "4mdcYmdfzoHabtVRVAtP6pGnALHBfyS1Y4AXBz6XBH2uhE7RnJ3vwgWUcFgseG8uzkPgKAeXTzJTGFymzaXY7g55",
  "key9": "EG2XxvJXU6PTpXkzx7eQZv418wrYoBUbvcuWRAZpR2yZPjJAa31dBiHu3kRRc43ZJGsu91JbrMMmxUgcUa3AZHG",
  "key10": "kGdhEU99mVbsEmh8nMg7BsoC3BndMFmnivDHpKJ29kAmsZATP8feM9Wu6N7cjix9mpPBBoCN25swXH4LbSzkkev",
  "key11": "2RcgMrKGvb1GhN3m2xfZWwmmFMR5xh7Y5orfgRPEk6XcjgWsFtC7snCBDLMzxTXJdphcqPAb4yxFnRiV1tsdBQVv",
  "key12": "3kxfHt2EcppXSs8XecbwNUjefPRCgZgKwkLxNRgAFsTAAqnkHe9MvMoKWhdF7hzK5tUL1dEqcXdB8mNEuS4MX2Tr",
  "key13": "mcWdoANHfBKheBPYuJc1y54bc9FiXBqzoknBwzJJJ6RC1FC3BnnHtKTeLL4kkZe3mmLdxNFsevkbFnxqCPSyjs1",
  "key14": "7pW6zWCEuu7DGnsTZyK2ER6kVSsax8iLiSuUpGNoBL5nHcMmM9Y9fxdZXjry8pRNGudgnypJtSrhfEd7anFfAu2",
  "key15": "7pbSztPAicnM6rgNgDDFXQVsf5iVb5YmyAhp5nHBgiD5ncUS5tukK6AkfGDowSzqV56UvcQtYfdb4sa7nBgXbST",
  "key16": "5gbZrmHJD8aECn6shdHn6XMsWTpM3hPgxxCGfSgDKaWsVmozGszEoLrTULW8bYD89WNw9w9WiRPbNXQDXdvkg89e",
  "key17": "4PDXimFxp4jFVNavCHsw7Z6UAJXHqjfmkuTGL9wHq7UCk9nsJRbu9h4R4WvkpEko9V8wLeSKdrcZkzspRjTVBJ3S",
  "key18": "5GDwj5pDTZSQRXsUFkpMERaDjLnt27twbghT74rqxQUvUC7q6wy1MPdX614hZXAMWAMjt8wjVLRdt9VqNhPQ1LL8",
  "key19": "5GPaZteq4FGwfNgmRYuL6rWK2atCU66oLD2Gi4NCNWA5yyEQMn6iBwKivSP7oQRdvNpxvpnkeKZnqXDZSp5y9dTb",
  "key20": "5P7cZZz5HDhs63h5PWjXae3bnnbiuafK5wXXGGHpumZ96MiJ9ZKynF2B9RbXobJ344eeV43Dpwa1pGAW96P5d8Pf",
  "key21": "3jMuefL9ENLSw9T7P3WTaTVoAUGz4LrSy6RAKVwFi98Mbegtb2keDH6spBEHb62PSqhvJdLCKoAU1CxS8vDuFF56",
  "key22": "3izMHG35BbPpggZudUYQ8tZQpgCRQYB7eKUtCjAbfy538PctrAJ94vbmbcyvQnSHy2a3Vwc9qt7izwPC8Hic7qdD",
  "key23": "4hzeEg9rcUbKBNCLE9r2w7b2CUJ3bEJyxfnsta98kAo2ArpV62S4CVA8B2RCfHo7jDH7Z4AULijWqFo5i2gk1BBi",
  "key24": "4vrHiCiRcc2ic4TgjaKQUWpMvv8w33KKRoQhoyvvAZsyYYetmVVZ5oY8XC37ZYSRArNxaBrkGEhfbytHs8TW45aZ",
  "key25": "65xv4aNWQtJCaeFuHU5PGvSDTERe9vuTHMso1tyf3RRWSu8qucb4GLj448T82gNmCWkTHTdR9eCgYYyzWD4wXZST",
  "key26": "2yatXA2Cfay3GV8H72EX7XTYoQi57jaEpL2NdaArcwkLdDmsWT3ySygSnVNTnWQxESu2wKTC694UJiBEGuEhyzRa",
  "key27": "3ZjR4HhGnzaG3smyiyJc71FBFHpvwq1v6M7JBzEJnQePp6Mt2xPYfnDSQerNgZCf1PgPJeqyzDxi6AUb2CveKM6a",
  "key28": "4YMewJXruRAyHFsJmWuhSYHYiZEDDRSiy6bFg9i1eKyYGV8W18wS5oNx53a5UZ7UY1DDx7BiSbpSqE7H3ZmuYK9w",
  "key29": "2LHFm3WQeJcwHuFKu3aUfxn98xYwgRae7asAkNNiS78EWUafJvjbxDLor1XURmAJ1yNauwapQryifrGU5vV2LZyh",
  "key30": "3qX8CxBQQmX8dgmooMjTPmBrj5D581mYFXWkig8CuohtGf8xuuNUMfyDatDGy7w4oMNrGb8xVLy8yawpWVf7JYdv",
  "key31": "2YGoCUY6Q9nAB8b6SvWtoxusMzxuGCMsPpLbUMy1Srvq5ognrCRRtKq6aXnfBnrrSZv1y38g1bVrSEk3SNgmkP9S",
  "key32": "21cHxuqKzNooWFBWVKeKBnwE3Ur6fdgQ5RCcXmefNTiPTv3szdisg9dYXz3Rn689sqYUauFmG87pK5eXRxb7kihn",
  "key33": "6565Kz2STRgRG2MbteKs6o1AFBxxTJ5j8v2j4St7EF2R13k5tx32ZEjMrQBWDUz3h8hSR24W7YyvBQnnM5iQK4vg",
  "key34": "2gCV6EQ3x7rSaFbjrHRJ6Apxzp5wzJwEWkfCGqUFxqy7y1jTgRoDtetGVQWLdRonwvhrsk4idYrfKpLCGbpZPmcs",
  "key35": "5SJKcqXWqQkeaLNXc56qjiV9vCr95twajj2DoeveVuZE8pJfWZhtKL6ddzufeg3osywuzjKSSJ3Ca4bARqtRMEJY",
  "key36": "5mJuzGAmk8mo1Wj8n5d9g21E1der45Qh1KBwXAFXRTeVpAv1vDrukGu2QBwtbwLr1Ckczkakfd3CR9ehbcuEbjBn",
  "key37": "45369x78A2xy1KyMbxn6sJwoZXQqNb9J4KVehVKiwXwRmKhVUcFqHv8FGrGR5hW3jFgE8xmnZzpgHYMpJdPhT5ck",
  "key38": "4S1ydP27ryZVnWE8jgdv3Fnr7CipaRxHGDed4VL7Su8zQzLp7NNECjjnwxJsWmKXfXQgdsEsrsJ8tqUz4toiRakA",
  "key39": "3nDQ8nauedTdXPpa9mSaWULM71kf7fSmTydyqPGg3AHS1757AnFn1y4ZnRUbCvzfyzeCKPmj4R4eiJHMgdM3tD5L",
  "key40": "4bBTHsNpghpi1BiuPoWjdXoBsAXa5qmeDPmdAVycHCCnRPgHVXwsPtKCyaCjoc8FEYRGp6XDZ3xaYwLWm5LnbS51",
  "key41": "3LLE1oaNzMnWjjr6j2jb2HbFzF8jcjSSqF8G1u4Twen1R9T1DgEey9ExgkF3sBXFVL6y2rjkfNDaf78sM7aL5DJj"
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
