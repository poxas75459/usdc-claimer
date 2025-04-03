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
    "4krgt4YnT5EBDzKbYfS8Cu7FHZUjsE7Uux33G4BR8TJwty7qMwj1U2duLvmLmq5pLMvfpA9a3DFEySGX1EWBk3cG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37iDdcibf8nUatemVVrwRcAyZYD34az4zCqqGMbrVsYibgNmWXi4PcHd4W4H7qyw6k2YRrePjP7PCMacMxweoU99",
  "key1": "5LZihW1AYJa6jFpqn2iBMVhqFJDv9AEX4ZGqc4LLBY26t3AxQxGjt1TAc3ZLKHT93P6KcAgQFzXSzQPxhHVrTKQx",
  "key2": "4tTDbHWZKaksYQ6YJaWsV5j3DLddS3TyHZf9wqk3c53m937EpRvn4mJiB9CFnBN9Hnn8pjZM21kxxzdMcguCBmj6",
  "key3": "2rfLL2awYbhoGgE1QTMmHJ44WhbyjZpWrKCWdNbC1nbw5jbPTCE6HeTdueDtfTXSzR88JhjPtG33JSabFfeuHPw8",
  "key4": "4cGM4HffRVMsN1dfHgUaU2GmT7oBig7Zy3RMR2F1LnTH7QkpU5nKLjmj9VqRnLQtYyxHrBBMfuSSZkBApuT4fACD",
  "key5": "4CAJRvDdXpTCmXHoC8W6bDsALsecu5EoJkyfP9hSXGWAuDkHhrykMccLQeyjw2aLFgJnrCQbQQqAAnkdnJVN4jdA",
  "key6": "3te6hutFcaZkBYyuCJoywbUsw1HfxN7r1BK2Bvxphj4m7nkRe5BaVT5cZ6tLRHmR3NYAxhwRBCDNMgDreYbMbyi7",
  "key7": "39RHJkwmZdCpHjXoRStd15LPZR5jKVgtLoD7kG79YmJupNxAW5iGqNG86REx6oFC3uwHFdKoGzaCxJg3PUrba9Do",
  "key8": "52iTHAd27wTCqosUffCPWmi9PzHe3w3TvKcQb4Lp4TyUkutmFBoUXRwcYZDm58gWNVeSeK4ZisLZcfizvx584GGz",
  "key9": "5EwUBEtKsVd7j9M4Vggy1JntmQYBqtfZCdL81DZjcntJtTSEhdYZQTrnBroJNbmdv1oWtiJgef1yMfXAQipDAcE3",
  "key10": "2hF6vJjnvFp12c15J8un6z7bPP8LQS5LypfMRRuyydMggand8ZVtAu6zDJ2XKvoLbTShg6D1etDNmj98MKpwNvdo",
  "key11": "4F5RXhhR9zgdMzMZG4G2o44A24u8494mb7goneEKBCRUoE3zqiX8YVR6nChTjMWWWJpRzYkLM46PRf1VisKhDsae",
  "key12": "3SdfSUkSKP4pk5PhfBWvmQ7uPdBnj7CPJrDNQKC2SsZ7XNs6EG4GniDHoG86sZ1geN7N9xSHLQ7pPjSoLC5cYaU6",
  "key13": "31ykWWokqHe5893VXSF4mcErfLoHzmGTrptEqcoFKYSs5DmApMoxbjZ171D39AbS3cD3LPcJpbfnsUtwRiUPwx7C",
  "key14": "35FZyJrwHPPBVtEKRMrT1LUVPL8vbs7mrZdehE97aAfDL238exodCSd6z1icroAVu2TjSe8RunzG94cgU45tghbp",
  "key15": "6ZsR7DptqNsVRJuMxnESyvohpg26vU1tsir1PfnftDdHTLAtFKw8EZMzKpyqzgAV3sHnZ56XjbptLCY37cCfbi4",
  "key16": "3mjQmViKheoEwpPNdngbf2VnLhjAosSxUKsQk1F1eSYFgUYzhv4dgUk9wXw1iNvS7AK4dGjkCrt1C4GA9zMs52zb",
  "key17": "3PumyNZwUp1KFbcTYCW5CVVjrJk5eiUGP2sCEFHKav61nX4yDaYzGNLQpEJeWjnj8UAukR4Zwuoh2Vq3DUs6BaMv",
  "key18": "2UFWxckbdnsP1LDxHCJ89ZKbuJMHEX2VXFdN1NqupTmct7pTiqRuJjhLHnYP6wYbQP1oRkt6fMfueedCh2zjn27h",
  "key19": "4ctFcE8TDrvEA8cx4azaGHicA69orbEbYohKy3fMSDWurBSFFMDPmGGh79g1FhC3RrL9JMwserweWdMxKV8Fp5Nf",
  "key20": "kUV5LHgoVecq4Ry5farvisiP9RpyFcKTCTPGahyx35KCAdhkfqbfDYQTQWknRDYHpxSzAms4upNE5M5CAYinzd8",
  "key21": "2tAr6bxHmWh4vi3ZKJANd1wQB8L9RZJtPFE5aqNvr3rGzz9D1ZnrKL1rT1arozwZpmTBc4hURy6Ko2C89yMfaXuh",
  "key22": "4WsbGcZLbHunECqZMvmBT74ndRvNGGJFNXzskEDqCXVUUgB7dVeXXwy2H4dS5HrmjTArsG483SCXqJPLGDQSQbLQ",
  "key23": "2kPJCt2M3NfrBVwuvdCTcwVEz9BgEVUdmjSGZeaUCkXahwyC5v5V3FnRLDfKDdCxYRE2GnY5KeqUwdSM5aFgq2DC",
  "key24": "3RuiEX6w4WjHtrv3jWLAnH4VapyLJj1f4S44pYiEyFjD2VtrS8NJt1sayUyCjrdPwqqRkaM2ETzqcpio8J97E5Kf",
  "key25": "3cUtTRzmhgLAhPQM3qHjKiEfdR64Bk98tTGduwaxECccq6s9Jx4auyVvCa88rfoedF2G6kyKi8b5GccfTzpYdkaY",
  "key26": "2pEPSAGyF6U7HserDrcEQykdRBr5rU8kikSLzcCJWcKXDzRYR1fUBcej5YTw5jCTPJSPTuXyCefu815YQA3vXSdX",
  "key27": "XiM4jeVxZMAg7f64ufUsCJeasrdGpRD3mbNMeZzD1gVPBdeHHdS7tsUZ5FpohBquAgzwtj38m3k5tyUfWS61Nn5",
  "key28": "51zmhXZ7RMSPCAxqRqAroeP7fx5K9SqM2D7betd8uFLQyYPizuL4wySKQJGNuVEuuUpe79BYmzMU1E5FFYwCgucv",
  "key29": "2gE5pAmKYK2687eVNeQdwTeWeWYWQZrm3YKLTFXanGLvGeRuCWEuaocKV6EU4ZN54MRAwDieoXax8zwR19GaW8ND",
  "key30": "FCL8cZuHTa2TGp1VLBjd6jJL7VXKEmfAVRyn2uhHc95kHfGGNbqadvMnYPTfmc33gK7L1aq6LDKRSkr5U7yW476",
  "key31": "4QcuTiFxW3djFSZrcVaNNrwLsKjiGX48JvGhT9VNWAusdzU3SWUwmkAQJV6ejeuWz2zzLbW6jTETtjMpMQyAzN1X",
  "key32": "CGzWP1ac7bwdQiJBCDqHFhuD9hbphS5eBCcSX4i2q6FCUGPKox3uWqNuisUUYpsHM3eV28FH1BNhDd7FJf3tQyV",
  "key33": "32VcHYuQxq8ubCVMBXeWiSZeJTazHV1RU62o3PbLeCLTesLqyTjXvL9MnWUeL2vG6Dq13jxHa7gPQna6iJgK7KhP",
  "key34": "5zCJoAVTnwZUusK7D9ZUow1ebN6fGni1VpbhQ7xZ6D7TukoN99bM1C1Ebj7djbmM8cGc44LL4ZzdgnALMSPEmgAy",
  "key35": "rucTHYPCB9kjbnZftw8EBvTwR35NAeJEhPxYLiJCHp8ZWqmzWM4vAAYh9NmaxBVwmVdpVa7Yor2SMMyMnAVV4tJ",
  "key36": "5brHMEGEuBkaCzWqxQsRKUayYC2B1iUxSXsFeT2vph8nMwrDRJDu1jGFJcCQf3yrQkZpJYtZrprTAGCuyyZeTNav",
  "key37": "375K9EPJKyveEehP4NJF3Ky7jK1jhCkeAwK7ebBLHUzCvs5rP6ykX1L9KhXQmUMvsUQuRS4dhZYwf88PybmVE5ww",
  "key38": "wgK9ptxFx7bqoGPBMa3AshhxjykNtiCfWkmvsp2jjNYjMrnWjEsP4MamWbQsHjyWom1Bdds3mcG8LYgpQ8xhZ1T",
  "key39": "3fSQuuoG9UFGHD4qBxERuBpAjMgD2wV6GH3sbZ96FKWPhS3eGeBNZdxDuLXuEHMscRdpmJwpvgXzdP9krdfLMXg6",
  "key40": "51LvL3jnQK9m6TTihA34jEvfT8pqVwgjhRRHewhtG79yJX7HTZhSGetcX51K5XSQhNZ65S3ai8YGY3aeistDZ7vS",
  "key41": "4WJ6K6UiuGZ1kEaTTrWsimimjdB8iebeE41xm2MzANFvtC89xa2oSEkM7fgkynPTKrQorqoBvgnXviTz56HMTqkP",
  "key42": "3v3PGMwaUyM6nDPNTXLTBQVkAsAVxM6dH2trLh7QCSRcuU9otVoHCnUaTMzFqyS8NjfQP3jBBRNwd2mo64PbiMTb",
  "key43": "3T9e9hJykHxPvZrGfDecq3utd7twsS4YW5pdh79dhc4FaMkqTnwN3PAworgZbmz7ZKGsUXZvVJ7fiLAY4NXVot2E",
  "key44": "x2kPzvGjEUz6YdUSR3hg3guVJuKedxYJMyUJLGqkK2U7dEfeAET8C1TPvYAThDKatyxX7kGUS6m2ogPQbRWJGn3",
  "key45": "2euwET4XioVGNRve42cEETgQmsvix21Xg9eeds36AWwd5cxBTp4zFXne2QgGaJZDSCgGHwahm9zVfp4WCQvhdJGP",
  "key46": "2xT8kExpAExtrVKFgEQokZi4BPCpLxSbHg8xoFcvcuaNe6TMKuQEuXgTkEbLHdz2nGfvZTZGhm2M1qBCsSnx6RTx"
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
