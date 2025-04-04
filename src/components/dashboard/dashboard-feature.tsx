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
    "81HFQYCfj5y5qWSB1P7UuwAFnfrXTaeZboWUQ1EN6TtzwtaaZvveM6LwQhNKyE9m1sEVMtDVGcLCbbKjePp8tJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A2xh995zDi2P8zR3rjVvW9vLPuf3DwxodopmyteXpytzFGSwzfAxQTUy3VzCJD7oeUNJ5SjhTdU9yfiewLCt8B2",
  "key1": "AeQRfRaUKVg44z183Xo4HekQ9PumQh4q1EnkaucMaVk8LT2YACoSdDCmJtq7MesQyQoXCz9ALnJ7QuT3jPdWwD7",
  "key2": "4GbcR4wQoLVku3RYxuQq71T9jZA8pHCdQjzNqtzphvWctMMKwUKmQNgJ9FY82Bhu4n1mCEBiXM2z4FPtJkLEKFo2",
  "key3": "5WtGuQxjCpJSwFGskMAHFioDEPSPBwoQZbv5XcGfW29msCNVjobe5DcumySn7giNYkbhMJhZzqCqAm95qNtpDf4L",
  "key4": "wg2qj8SkGSEFECVRFMSNHUhHt6hVPMLzZyA6Hi8ZMXN3RmWPEhR2V84a6v4skd9Wbt4ZMG8nwKcVb4CDgzH191U",
  "key5": "2XZX5fdeiJnyWCanTWGBszDuY3YubSFfvPCA7JJNj2mFGX3fQruMFnJLwxUyL3nguBJpFKxJpVxJQ1zywSgfZBKL",
  "key6": "2G4Vy1ioRZQFtsgBDVZTsxA8ztfba28LATdJmmpyh8xZiATQi3RAHoGbf5Z6TT7FiXa2L6pPVHqUVjREPpLjCQ2v",
  "key7": "4DBGoGAnrXs1utLfW32ui1PCoZyGMQfh7GiG6ZXRqk4NJF3b8Eau1eVBhC6Ve2uKg3bv4y9ah4pLzt4Ub33wMDxK",
  "key8": "4WkCfYfdDtb2df6kJnjccc4KLLQrTmMYbUJ1pYyLPKSAFzrhCNY9jos5bzdRMP85fqKsRNNAajNvce8ykA5i8rc2",
  "key9": "5HDFuaK4ecdrMArTRUaz664qY3SgySMtyHTZ9CGZKsLwbYUQRDT5pb2gsEiZs1Fa9YGTN9u87Mb7GPxTacNB7abb",
  "key10": "5BvH3PFaNppr2B1bkETQHxTgj2CQ5ZVGWawbsEVHCM4AWpcqmhTngvPrTxQgnebDgrqVTuzkPC5xMY6Q5fSJcG3P",
  "key11": "3F5ha3kasX9CuFHhn8ooePiLCDGfYemJAcfcq8rc5QbyZYdJVCXzM3gm2b8R1z87g71rB4xJUPWRebdVJUDzj1nv",
  "key12": "4VKXUB6FtYjuLgVWRTDjFc15Rrbj37R7zn6ytmecZEoYTw4v5XeRzKRzjQxAnseNX6YZS2K1uDieWnxdvHJRPnyF",
  "key13": "2v9Vi5KsLscS3gAPEFFyrmapt5qtpkprMkFzvq9aRscfGbCAjg2w5idueiQYbAceMPd7NLyM859rmB9egfE3d9Sg",
  "key14": "431G84rFfUxEGYyr1ngQcN7k8k71hmyZihwZYuRbqSs2W13L6AEZB5pzdd8TCkQ6YmtqoV3KfmJi6zBqoDbQix7G",
  "key15": "3LkGnEDFUo3DpoDy76TC94JpNy3YCJaUK4kUZ827sYDyKWpyxd93mE6MfZzvJeTWAzBazTgsw8iThqQVGzhquuz",
  "key16": "5LaBw2hCGpDsZjsuaxuS6vAfycqFJXqfE237y6j1HGywNizp4dX6wd11AWjoi9LADwydY4yJf4DGnNk7mfWwdu1q",
  "key17": "5XmGGGLbZ4Qi3tsmNhCmACnLRr63cXxzDhmgnGh6179teb6eEXXkCCmtf8gqiFoEq1jjdVecRcvvVZDnRVioFyr8",
  "key18": "nNpRGYHpt3C2LJB6koHrWjxg2dNULHq3WvHMStxAxQ25ZZP2YjJb3ewtsrDW1e3ob3gTKjJ35oWcV6BnPo4qfmA",
  "key19": "2AZZ1QYZJnAvihZBmgSUwUSe8kXwNQ2Z28aqmZ7ksjNBVHLXRPUajyKRXh8CWU3SzKhWkiz14sHP4k5CDKbiKuJR",
  "key20": "5XBmwby3wFRsLLnDL2y3QQp7cngmFQE2M34uAihWECFEXgVWL7nJ3HbfcCUeJJPKjxWSRJQrkkvA6XQWfZmfywm3",
  "key21": "4H2LvKyzSPmKBECZvdrGvagmZfhcqs51Zn6LUW3uxwFYXWs77WHxi3QBQqoNvvtSerh1ueNSc9CBBtDvgKLTciwa",
  "key22": "5PDagLf24Jr49jWZv6AtHNAY2ZpJLF8vCcofKnAMs5HFHJeC7ohUW7dLFAY7V9EADGHJRGuojVcfKRU3QLHx1tmk",
  "key23": "22Zxhjgz3Zajhe3y9rk5XDNAPVTEj4p5BWfox9ysBsGhreCP5fiXFdgaXNbSKUbuvqfHHSoZakzga4ByUgYzhpiX",
  "key24": "4fjb4GJ4c79EYrqve5iM3847ckdFeBGub6MkNuiBG5TKiWkMCcUEGmSAZWBePCGr87v9L9buXVjCL5jbdbYULhyb",
  "key25": "2BTtuXcYLbQVVGpsiA9Fy96jd7j1UmmN87YMwsHcMuwedwnB8MEzcSxhTLuPRYqDMaBTe64VyDYYKJWM2nNhsXFM",
  "key26": "cD1vTSeMkBWqrmZtt1PPx72gwc2b294LTvyqd435sGbvasBeQWi8bt3RaK8rzhJrXeYnSipL1qPuKNWDi3mijWq",
  "key27": "FtVgFysiqtDfMLydJe2cwRzCMoRgu7GQyTnaCotXAziKz6ELHDvvKujbZNq4DoifbGdme4j2HpiKFymsFiczuRr"
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
