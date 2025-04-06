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
    "4j1kyg9MmiH83GVkbrVSykDVJL3LvATwAnQW7NxDJBJh6hZyYmfGcTs8CVZ6h3dRwMt4WsJQSnc9XVXuVsjNKTb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ShXLBrcNyX7x6jGu85jBZpV1LY1Xx7fX34y2cUGXDVth2N4gG27E7VMU3hwKjWyqHTJFyFBXwaTwMBF6chCEQaA",
  "key1": "UH9CU8mZ6Tn6pfywURA6ipABCRU2PzpEX6M5wqH6WF3WYixoPJL4mddMDaKg9osn8BxA34RjfYHMSaAXapWjsZT",
  "key2": "RnLpVaY2qET8y19MRPZNBAEPusQBcQ7xWPt9YLzB91wBhzQ5NP5WoiHMsiqkSK6n2St2gSny2NxDiG2nrepaJU9",
  "key3": "2tsV3TgrXJEP8cXRutuWEMUBibbCSuwBvHavW1Tfoy7qdQ3oFbkiSU5qAdn85DwhRfD7ujtuFtziKj2PHACWL3Jx",
  "key4": "55vd2Q2U1QCgggyvJRcGJfDTBjteyj7ueiDNwCvttky6nTmP4HCpcAEghpnNvdXb1uyHZngTMCtSmKuSw94Kx1us",
  "key5": "5b6tdpEiDJjavoVzd1sMnCv5YwDN2yVgwrEjeKsLBTozVKTTD45YmwABTh1oWWztm6hRooN3uFi72acsGPc1e8RW",
  "key6": "3sPhv8Q9RuQ7a8EKXy4ZNGeZM67VDYcfztJLc2NEuR1rjMFUaorZc81nWHz5KhX8TqqevRz5MV9p6arfKm96xVev",
  "key7": "2T7J4s4yxBQRxKkcYNRu3aNDaSQszA79DViXUF2MPCsxecdQmjFSPTQEbrA8EW3E97ZPjjVprrm4kxaNN4qmz9Rm",
  "key8": "42MNc6SF2kbQpcDPibJEX4hyJR1yP2gg6EkFYnfJHzKgYpMXc7fJJtFZuS1JZim7eXZ9k9TyeEuCBVhDTSvz4tof",
  "key9": "2efcHRumTf1HcDtruRWBbcck4hmxbpoAJFwAFG2snA5vSNyZv79AC3fyv6k7ezBCdFRmcAjFE2PimvbAjzhqFWuQ",
  "key10": "2y488MD4iFkC6NopvEhXWP4rP3ZFGWtUA1mgittBrdEKNMmLZ4ivk57RAtYAafhmM2GxgbHFSDpB3VZCbwPeCTBW",
  "key11": "2ncuiq2GtanffMEW32Ub5p4N5fm12LpTuEgPSzjwzRZUFLjmujHg6szd4X2Rny2BR1gvpx5zvdn8mLSjLBYqVbEq",
  "key12": "4zEGpxNkiy7zB4fsbWH5soXzRH1hqqVZUth93ivpW2upfhz2mcBkudNkKKAoJXWpzJS5xcb5EkFpiKt2LSDVxRFL",
  "key13": "5aRYaiKdsiTeeVAgarrk8YSh4XgidTCoWejZpE2Ee8UR34fe1iXh5fctk7hWSaG6B8vjkDn2EMTmnAnjpYQa293P",
  "key14": "5yCvWs2mbpNGWZyZUH8z6PXEPmahfy8Aq2QZLt8LJnnRyENtyhaCeyGqnY8vFX97Z7hF5iN1gyoZRR36CjKFRQGu",
  "key15": "4HX7Qzxjj2suxC1PNbAdjbjwasoeXiq6EtcnabeK1ijz5fR21m8Zs7ryueeUJe2k5pocJuKAvRvkYv6rCdEJdPWH",
  "key16": "2gGDFJzuCHBHSwsFcTnujiWdgvUdtqQq6Za5XopkBDLkZWsgm7VMe8mHUPMVsV2n2FDdMkisQX6RQTxVGKyaMDXQ",
  "key17": "41vDFxs1ViJPNAWPZz2GyctwH6giN4wYPRy73XfZ417zZ96pwzA4pdt7Mr2qhhH7ymDvoqALnWPxSbMaaMoNDbm8",
  "key18": "4RY2UrJa3GVnWYHxBj9ekvacozEKSYPCfzXokidV6mmZztomRS6qJT5nYRczyoDMTzUkbCaTZetu8XChzDbv1TzQ",
  "key19": "55pwNYN7L46zZrCfVa1nXjjM5oFJkoA7JHz2JbdxbSbfN7PF4w81tWSwhuQsbM2wUhCNUJT8zyxEoo7nPSEmJho6",
  "key20": "foaiMfeE7bhWtmW4V9uURvJ5nuysuL65DRhSR9stBgdwuiGEjYMggJSBytyu9pvauK7HiZdsbtCtxrzhamdzrEX",
  "key21": "4MgqtbWZ449mhVBnS6qsYiE261qk3yrT5dWbuhiWuQLFAojEkSn8AVor1WH9yak5caDWxxdJSiHvQziTpoWva4PN",
  "key22": "2srDfhnhabMKXiFCZniSjMqJfExBNYh8NSwrNqQ8zkETqEo2rWdcuhLLt58pxvnMxPhFsFTC1i3VEEkvA4ReFFjh",
  "key23": "57YdsmcPo9g5GBZqaK3LSwkKmmGiRvPLWpZV3QQRzoAfpsxHA39dtBWvr87yyxmQdYJLq9BxkApe3mbwSeUCjTMm",
  "key24": "5Zme3F7Q9FLApQDAPtXBgFskdmPbxdGMHRNNmxE1LVZAEkJzYYurmpqc2dm4DVabBuAa52BVqHaWBc2CftWTrq2q",
  "key25": "htEWW12ro6Ab6kVjvwJH7B1gVgUs38VzDM1EjzvXcrm69T6RrDbtWBswzD4exRVRX5iUctFvEJmFRL1TnGq2sBD",
  "key26": "esEZZ9R26zvnxxX3hCsYemvNpiJ5juHqM4xkMNfRmhqpUAN7JbWyHYhqf1hq7GWBHv5pmcSqDxfZsXRTRVPiNhi",
  "key27": "G2TZWLJEScSuBNaPV5EPh5AP1tPUyRbbHtFCnkeskdEjtve5suBCm9SBFbZT7oxTz8NHMEqPqhYacXPXH7oYvy6",
  "key28": "55kTQ8UqE8WGi6is59FneNBMRDt5D1X6NNyfmcesnSjtSN6iLaZWjzVPBq88PDcmDgdAmGkq1QNXRmnvKBK8pjyA",
  "key29": "24dPSco7UmwoK3W3ZsMsLMkEuH4BPnYEkNq8qpXpCcNPZ1c1L35UhPz62WWE31nry4D1HqRNGBDiPYUQJrfvr8Tr",
  "key30": "4bbWut2S3DKa29tE2QJt54rdQVS7i8ZUzR9vJuVpiFNcLWBX2c6chAyb5oF3pDZ9JGX39BAiWfv7eWSra2jVrSFG",
  "key31": "8SsWeuNmwuSR6RorQWg2HYWzvc3JPqjQra6tiQy4KU4DkWj5WNXdMEx2sRcyAxUHqBhe2Xv3vyqfx78NbwRxPMM",
  "key32": "2tiL2r6nGFkqLJehgZMHUbJaU6CepZzef8KcpvAU3ny9LeU7iwCUhDs47HMXMh9LBeMxhoz9KMoYWmHtw5DJ6FpL",
  "key33": "5S7mmZ92AiciGEjpaAkfRn8d7tHiJnnNZqTFe5jPifYuND81K2JuhbR73dNvx6jpa9Kn8XJqYubswBGxTvs9bdic",
  "key34": "5zi9nvF7jCJjMB39ecoVt3WkCwg9KXrCRDWzPjVG853SJdUyDnVT9MCGARmKL3bDhNmj3CvSskrW76GXTBcsi7KT",
  "key35": "2gXZH8dKDMYBTERFm5d5uF7SgMiJvRwYvLFrx8Teb76ueBpS72KQtBRFadDBoh6XvSyf16aqUG5HzbYhBn61fvPW",
  "key36": "2dM55YLKg6km1AFC4GSpakjRY8z7hMb17vTcpofq4KDZiCqVkpQTwWZCh4b8SzKpCdSqGeWDyendRSnAjFQkxRDX"
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
