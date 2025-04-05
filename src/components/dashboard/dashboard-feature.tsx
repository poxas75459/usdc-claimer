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
    "8LH2CtZweyD5rpbwEksaSv3TXjn1uvCpnn35GNFhDTArCeRe7crqAhnKaSxYjrCT1EzzkD75v8EWMXLic6Ps2wD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r31Z17nxbtkxoz3WvRayFYqm6CYPP4Rf4xFtytsBrnqQ6ywzVuTu5oERck8Mk8xx7tjXEWweAPzJNtnx2hVjy2f",
  "key1": "5F7DWEhnHRDrM4gLhrXxFJ53oPGtw4H8BemPxouVszBAZsrg56FqubQPLcsniKCf2FLTH3APYkc5a9tiGRkx3nLw",
  "key2": "4YsozzmPWKchkMJT6mK34oj9e2w5aBxmQrWgvfKhZoPWDNxCqgVR7HkJYuzCtGkNKz32W6QXxYZxFS7pZTS9mFan",
  "key3": "42owN2rJ4ZvvYtkXhzKorixNaJzccKXqytkC6cY3hdhBSnZZdLsdj6T1SmaZ1vSbYGm5Xg6U2WchwXVkQ5MM6DTx",
  "key4": "XTRNF1ojF95WTBxu7ZwTDtxD54Bvz5qkbRw1FaYHhRBLc2edZzqX4JmDVKBdck5uzbK9k1xuVYz3X9vRPdistdd",
  "key5": "4jNbehcfBpMb3na6QKGBMr7tZRRjkm8aNLj9iS9h3iTJXBZ7uUNp8bzh6ENNbiDWcdF6dQeEahCteH72VajRA922",
  "key6": "5m5vNXVF9cmtkBfjXzsFFpcvQUnmGoUACQPDx39pdE7RDTcwJTRkWVx4hfdv4bjaftjYNpvrdB5uHMZwsrnhPCvp",
  "key7": "3K7uvMQBavD8nCCkHBo4icoyDkhGkv45GfnwyXxah4koLRJJmoKi4TtCP6xo6mx4ynDeXpKznn5ttiziGfCgR6Q7",
  "key8": "3o47r7ZosfU8Er5RG41vrxDZTLfMw6YJBGPHoxuT3zVsfmvokUG4xcCxigRtALVSJntUmCJUNwhMkpHdxEakqV6h",
  "key9": "285PTc5NvAeYAf4GP2di8VL3SHJwFexNCUzfYKHruccfdqEXftM6SYAFRLhC7T37GMhmBAqQ4WCn4TGSjnqMZu4y",
  "key10": "cWXRWkkG6PK6x4zHSa86vsynumDKBLeNrs4YRvE2bc4siVQasi9HEAHFhUohQ5o9enZ8xGB4gP4Q7mxi8bEnHCS",
  "key11": "24hHcQkXhvhRL8GWm9W24W46WrSvpe2YagdDH1aYuTq6AMg8nq2vmnGphnzBNro4693Yv2qXVRSWQvPiu9qMWs3c",
  "key12": "pe1UE73NNjVgcZ7XDxHatB3Af2g5Sb9V4u32N65CR2o3hg9PcLeGfDr2U2eeYjZ4MN9ggk6umSb4N81TGi8yiKQ",
  "key13": "3cCc7Fi2YKTF6x7xA5kw9djLfrGCqyywVp8wFRGPNDPb2U7RNbbLRuMhKEz47P6dXdDz9mXdgwUhYzvoQLaVmctE",
  "key14": "3aGfs62b7S633u6saU11iwZWZUYvQb55qDM3DL4Kr586vPgdt6h2GcMSDeZpcrgLDKBcoHh5T9SQfvwGzNmNq2G2",
  "key15": "4Z4qTZEhU6m6eU9hfrbWUxgLhCMUqx5iviXmeiWRZbhZzmKvN6rU37hcd8sP5ZvKgFQachX5vnovEAFQX9mNjyae",
  "key16": "H6o8CpBx52MKs43PR17AyDMgswFskLEZEUtaYNHenHGkXLQyFK316MLTJPvZgDodRgwRMCMdA3m5RRaSVf6ev4g",
  "key17": "23JjQA5EyQFETcLDyP77auN2YGDWxLLhzoHmTUTF4rppc7BsgXmVFKQqiVfFdBtR9MWtgk5mMYLZ3NPe7omNn6gV",
  "key18": "4BqTXr5QGV1JwMzvSPSp4qDd49trMXa4vaSWXGhRMgXxqZUJwgtSg7HrroaebLJwibTimU4TvsnUhtBcKEUCPWT7",
  "key19": "HfpWyUu4FYTXMFDx6RAJ8AiHZNfqYGzj6UUzVRZ7i1pmpEfkYQSKntkK1FKUkc62ZeHhi1FVMD3JzkgSdAfp2tV",
  "key20": "m7GfQswfcxzvgHyXVTXwxgnokDSsXPQbhdvDzfooLvdgMKEdw16wHLH5x3rKktFUuKD1j7d5woLvkKmj48gN63v",
  "key21": "33JX1wTfwcEzN7AqjX3m6VfiMRaMzTgGikZpdBLnbBjJ4XrjMMycum7ALzYXUZ65qUwFuMuU494Qg45B2k9NfLSV",
  "key22": "mgisSDcb6LE8rJezgBq6p9FTV44J77a5SCsV8YM3aSraiJufbSBeY1zhBS2moiTGf1drrfo9mKZqo1XcZ6gtKcW",
  "key23": "2BxrLWdkgvqxsmPNMtU5EUh2rmptndQ9qpAALa7iNEM7ZTWKshiSUmQe2C3uRS2tfH8H9sjPMgkTYaK1kdyQBXfp",
  "key24": "3t9a3uaP4h43UUmvU6TVrp7wSA4C6s3navtkVqZJBrsaPUoefNENPDDZpVFnQNiTTgxu64Kj3EkkMABjcvpyJgKN",
  "key25": "35AsYhkAs5vTGgXM4rTrLkN7CGe9bq5sLMLJEnfnnTBLayDsRSLktG7dLt5UXQyo3MJYoxuXdDYGwBDi5HWNRLbr",
  "key26": "4HANxXCoQPAeUUzkNitpHWFCXrFybG7YWhADwTt2YctxZMv7A5SvwZoHmus6AQeZSvhd5JoDX6gfCrPm9YgmAZM9",
  "key27": "5qZGtmozWhDzzvGsJCV3VCmiXkCtBSCinWxF42ZV2kpRmNEtSRjkUNm1jdcEv1rhXzM5NTKCnFWTVRHJRtNa5JYu",
  "key28": "4bN3HDnuCtorxcmMSPvnFPCc5EcKPk91pXmJHAmN2KU6uGbq5fviMdvvXtzi1nfbW8SUYorDSgnqTFoioqzvd7co",
  "key29": "3JYeAsegEjMTLfJ7cpMhKwmD9w4wfyTjTdNYyHtPXN9WiBL8faqAfh6ghqFgy6Nba2BGrczrnHW8RbYRyzJqEFsW",
  "key30": "jBwYcZvFK1ZErbiPGNYa8yedS8kUhm7HFj4pQpUZVSSfgPfiVe21k8tdABHkY1rsfKXquQJYQ1hEo5MADQVSNxV",
  "key31": "5G9PnLp99zmW3smP9NXzrHbgU5jd69XYjQYYZPPMK9fRTP15YTa1psSxUVSErpTuJAMRcWmSKxXNMizRkS88k8sC",
  "key32": "3txEiJDgZuFanT6tcFpCKTgs7WPZ4J1DPM99Z8ZY8eEfHKiuKEb4xsEkwA8ZUimtgPvQaahnoN7Vuhfi3G2we5G",
  "key33": "577dAZAWPi9fXiysES3Zj4nN8zfNbbmTZEx4JxcPMJZ3h4uvtT2pHnoiqYFPDHUBmX4i6B91K8xc8Y7zDJNos1AK",
  "key34": "3gfygVQefLdDpBP2EL63UZm4WQbVCTWpTf6bAgE62skNZqt9xm5saGRMb9TWxkGUbSZ2WEXGzRvFaFvjEeje763a",
  "key35": "3raG9cLtJiv3a3WS5G2tpEG1wQ9nWAYyUcMmk8mHXJfUr3oPtgKANabPupCwWyZjKih6YGfPu9TjWefhuZ7fy9bj",
  "key36": "5R61hX1ZT5jVpjHCswCQSU1Ev27ZUsB4MkaXPpK3KwJ7NZQSmsx22gK4JueKF5E93eWFUh5Rfmh3oTEVZt5tYmFN",
  "key37": "5qmnFxUCPkoCRaXELfFbSgNNTbYQa4F1wEn2QAxniy5tzRKMRk2cFqj2a6n1wST44UGnLXH33c2EnaFxtondcfrK",
  "key38": "5f3Hy9U6kbLU41ogjmwH7q5SRYYWvQqTzNMe1Q1ceWSETjGwsaJEbFRLGy3s8Aj9DKiEtq7nwfGPZysGMoam2d63",
  "key39": "2rj5WsPpc2jTjo2u1jLank5cVSGhqfR8qVMXqTM8cxiiHLNVLsxDFoEANL2Tz7JaqsZuV9PSmxXS85E4KZvrPaju",
  "key40": "SYjwSKQ3M9SbQi9LgW3NR9SAAtoPwhj6mR7eJsLdwYUzK7BkxKru5SW16LGdcVkRWeYBmPNQPPj1uXTx81zNk2d",
  "key41": "d9D92vB16fYs7GYQav3ysfsU7dRgWnmEmcWbCuLtCdEpGmF852BnAQzPD3jXKiL2nZzHHJYW7TZ9DdfsjzpMsJC",
  "key42": "2M9vJqTaU4W3DWomCPvyUToGK5nzfifD9RxcXckVCQrzWRdHtywpBYJGmfypm6RjMwj7RzSeTEbkE6X1Q5X2SrmL",
  "key43": "5F4iRYEbtb87KP7WwTov6Ya1QEPFrizoN9uvEBokZJD6SgTwiPXdhripmCdw7qku14Fz3WWo2bLrnuhL6UUr2Wd8",
  "key44": "23tkFBhJQ89JDtZqRfMsLvAQjsMoYUBSx895VSQ9HC4Z7Y2LY1cBBv8VUUctAw5g3A5f231Q4rAfDEdGv8fjiBjE"
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
