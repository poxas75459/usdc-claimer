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
    "UPXZbD9ed2q3iu4W4RNGYF8hbJdzrQbiADc1jdXpJEswDPTuDo5ZNkL2tcYpRYycRYjBEsPweEHXvYw2jtC3iGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fsACfgDAStDNaRH73Eqm2kWXzT2xfrRBueD2zpkbsbv3GYETa29dkvXtmL5kZTWkkEox4JrfCDB4Cj2qbGZDhCe",
  "key1": "3W6o8araTqADMjaAnRpjAX6bs2Z4tBENz5Q9W4Emi7CtcrmJ72ZmxvyrXt1WrxgVB6FeW1rkAGopTs6U81b5c2SR",
  "key2": "2msjonSZjoTxgqzjypSSMESowpe3bgrSGBUwLtbPvofpwQY5jsMcoTzUoN3FrcnX7KSqVxmt4okWpUkEifterRzx",
  "key3": "4t1w75Jh6w4z1WWKVAJqJoShm3acBYHXp3FQr7twaG3JsRsZzCzZ8V4hbvUjc5zti5PCR3Esiwm3myHCS94fK3He",
  "key4": "43wvzKGCPtcW13pCjTcChVrm1Vwj9mMT3fFjKNgvqefSyJT7mzCjsjhSpDd7aK3DB92P6VdunG7GxB5YkTBhRL7P",
  "key5": "3BpFni18KRK41QdWAJzJLLUuQjUnSWkLstdYdSUT3ri9biGLdtxh2PzMxnJdpy4p7pxahNCxgDb5X3f4agGsUBXu",
  "key6": "4RmhKWQ2uoKQhYmAX2RgL7N7AtxETdHq1HQd27GWJ6RMTz6MMq8bYWvf8ty7pFhrCJpJWBSQN5Mbg1KzBveqDYjB",
  "key7": "4AJmYxMnGddbvJeGWXN5k4z7pTXMuZGoq3kJPVE8oHNTKuWuWNYmDEFTV6wGHmm3wqGqD26Dt2ntdQU9pMi9LrCJ",
  "key8": "4kY6pvJmwYeu2ur5V1dv4hALxz4sZchee6RkZLU2M7B1D3neyGUbBmE8KqZ1qdsP9H8yuckDUJh5X21ZV8WVZNvi",
  "key9": "3AaL49vdh8cGYsAHtkGtrdeZRNvxykPnR93uv2BqebrqhjDdS1CJscNhJaRydC1iP4FkRdJunQ2UPX2P7EwHuyUG",
  "key10": "2qCXuwfgPVzsZc1RLt5MLUtvfy5TPu2NVbdB1Fdd6PkcaQv7LQobnWnmhWCSPqQT1TvsCGnKfRYdMkBASR3SkTa4",
  "key11": "pRVPqZ4KaY5txVFu3CvhjskDL7YEXM5XstS8znQxzrfmFJvgrA2Fr2cMoQsJLJsNNa21Juzsy44NWTFZXJ7oWVc",
  "key12": "59RXXXnpFLCytqytmCsgHpW3g1zLeVcxtH1i83YbfejZTvDJFcPAREBe5HxbqEX7MdHNsszvtxKN7Mrz1Reg7vgU",
  "key13": "Ge3tppDLUMV3TdJVXYe77TpcUd6W9MhUjWbzYzfxBcv5hXyTdfCtnFDfUkX47xo3BonbiaEvyj3nfoDEc6uc7GL",
  "key14": "4ogjJhU5ZER3gBd6mESEebJacWD7YigbWF11h1yLjZNgM9gRHp2hYcyW3EHj28qmnKXfE6aMwwP9gHqDNhY8He5i",
  "key15": "4HrrfMoExDaWzoqWo7hdBzFbMpQFSsurKekcNE37D5VhStBXQnCQvysxjKcERDh5SzpW8hsja35LS8Wr9oJwcPd",
  "key16": "5LKMhDt4J1K7yR4hsKfxFT5j5d4DWvhcV645c5HkSR8PCnxCRMRLo94meQY9NysRC9PBdxtmovmLFATsQ3aKWDYu",
  "key17": "dfpcYS19t6gMBG4KX4bpg8Q18NkF9HBUvyjDv9tPiHraWfgzkXr8uS4NBK4guoxbFhJSTcRaUZaPYjTsiJD7z5U",
  "key18": "5MCKr9KNfGTL2cv7Tmtbv768gaUMH3woaJHEiaLRWfEraUpLmccXchbJ2K17QjyZ2ZfQBpU1jSexpRUTj9k64xNt",
  "key19": "dhn7RNSDdKkg41Et2oS5mJX4DMFNswgfQdm4mi1W1PWaVNEK9LW9N8FbFQkCPwjDp2nrZA4UbtofN2UrDbCzoNM",
  "key20": "SXPmJbf2gdTDdbZbfCQnUCK8XuVXv25m6BVbWcM98HDL4722tyiBaPX4NoGk6iJG2MKDZzQcLJ5oWesqWEe7Rga",
  "key21": "328nNU2zZR3qQt6JtGyJdS16PxwxqJde8RS89TXnMHcXw1mnWUPJGj6CmSZnEAC1jwvCsFLoyDCj9yQZqJunB79j",
  "key22": "QebseqwZs7RM9sdH29U7wWJ3uccTEzH2z8pJa1VPm5MfhtExrqqJ6AvqyURbGeoNpj6opKgZfacCM8JU8Z6LxDs",
  "key23": "3taXyFtNFXBhYwKEaSvYUNDvavgTVF6Da2BdLET3b6MrnqXW6vegcaxLBBARTLBKHodxYbW5u3o9rHsMmrRccT5k",
  "key24": "eT5XtDJgvvysjrpN6QGz2GgvJwK9b1SFgnujwrZ4hHjgR62sMLaP3dq8q4rJ2vSHAVz6CjEhHArskstaGCEgfnC",
  "key25": "336zJgqjuN4hKgzPhTpqojsUci8G3T71Avu6qbuAhTrmiEgx6EypsJKtacSoJ33SivANCA2NqLUowWJi6FXKh81y",
  "key26": "4qpm17dDAzRGhnMz4CbAWFwiKWBDBPNE3Gc2S1RmpVyZKpJDRmizCqfadyj2dwQABucV7VKUYNmiCBbt1BjBiSzh",
  "key27": "NPLhR9gyPUNQmpbfnJnK12ryYNHEghT6wS5zwVa7dFj5TZLzuwfxfEJGPgh1pkPGBvvdcheCJa4PMzurnzzmNV8",
  "key28": "4M2ixUL54qB8ZpX98Vvz3Xp9VYAVFNJd5oZ5jbMaXu2sCR8mZKopF8gu6ToDhGdCk7djqTCYcnUqSMZho44vxKLx",
  "key29": "2RGH4NFYrUaVr7mjRXexLCGpXwPGtjvavLpnA5UXgnNUYLD7E68oYwnRJrY33VrQ7amn3oUHSpp9iZRtkPwxCr7T",
  "key30": "4aZePekcdWKSkuiv8PiyFmTqTfSB1Ff8953CirqbhjrUHdV88qxYP4PLQ73NKLoe1MhTMiMCARyDHZiTqe7MCWss",
  "key31": "3yha32D25Yyfk1TTSYoiXyVvTTdviaZ1veyMVYJZT6WPdRGBQbZubVirchtxMA93gNNPV4MhF3ZuT8mLQH164gxd",
  "key32": "pgEgMArREYDE7rxK6fctCcJJyopFwbS5FTExfWtV19ECBFqCJACQhXtwVhUeexk7jF2aZonsbiUeQBTf5gp1DHt",
  "key33": "a8WxBkMZkjMVwj36zh9dAnm7tUgsisXMKbraV9fBojzfFeSSFQw3TiHGreLNVQQNNEw3uxJ5ru7oBPPmeSEo6Yr",
  "key34": "GjvENcU4i2z7YG6TiWZECBw523ev6XoB66akLsL691h1NSAA5PTzXHnZj37jm6ib4mBmzZcPNJF4kcThopXP37E",
  "key35": "qqAj9ZkjPqz7VAZmMLJeDq1nZey6gJSx1ivbCFohUnXwqFt1YkWNFbkrwQBfMXxC9qZqWcpmC1SkxvAkcJB1Bb4",
  "key36": "3dhUcZoZ7Gs3PuohqRd1AxZuc5apsoc2thW7GtowvrGt1UoT9tu232782cpN8J2g8BC2xmrfM8ZYjcvgrVq5EDuM",
  "key37": "UnruhzPwVDHFHp6urc2V9gzD6o8Ayh7NbcLbnTwWPJRgrpt5iS3EBXaSd8hawrxctnEfc9qzmABRTBMuyuvwUST",
  "key38": "4DhXEhj3DBFmJYkhyqHkjjgU6fZ3pXgr8QEEP5WngtouMysd2B1h3YiHCMbYFWzLtdJ8KxWNW6AgMYcmKbyQqT4X",
  "key39": "CrmaZziquViyGnefpYNmPnVpQNACxitrdLAZmdfsm3UFJbGWgmMQPS284s8XxMsK3aL1G338hubaGMURa1UrRum",
  "key40": "qudGiT7AHt1iLFFtc5PDD6ya1GadARaXEeegfCp7MMHVc3jsU9hjBxhwjojnFioKJqViucHpaje2LQEYvdRQzf6",
  "key41": "NmQ33ziC7CdasmNbfxD2EGsTqbHWNVAte4yD5yoAopmGq7DXhAfMFMqAQZZ4T2ek7nYPKXg3sJgZ8nmvsUozzWe",
  "key42": "5D2veUtkz2NCMbeAcwNEtKCguziG9e27MD82kwoYLMSWz1ughQ66vVYwLh5xFYj65cLk8WD1EuLBa8Avmk4W83fT",
  "key43": "5QgfrFWNhcNXGfkpjoKNwLnt6y7Z1E1uHn2BmrPsiUXRhnGZPB7f8hUGEEWCC5wvvwRfC1rZ9d14S3BnooxiA2xo",
  "key44": "5Y4ZsvVZtzwrimwYKdTaiZ6awKHsH8kmmfrsNpeDBhUzVWdi77ePPge12E3qQTehvbxXVoKXNsin1ZNeDMW1AXp4",
  "key45": "3iNgCfXnLNdyDmWKDtS7GAXH5ANgbD8mQLcS6kW5SvgnpPtf1cCkoukSRnzjDtJNkYryKG9rJg9JcKts2zwM2jCz"
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
