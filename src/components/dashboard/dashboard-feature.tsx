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
    "3Hc1oggRNkBGYKnoHmqHehAAkbjrSZB9q61CSefKAnoDaZifQHDsRiFZZZ7yKFypzfJzp25W46HARHaiyfsu8AUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QQ71LaVNTWyKCDtxuSdYDquvfZ4SehnVhDQsFp1wyvAXVCAS2HrNFQLmsJCKLuijfafATjHJQBbgws3HRmaUBnR",
  "key1": "2zAAH7xdZGBT6xNeDDyV8phxT3b3KErT9mRhDsTpHc63drvEgWM3wUBKJNXZhCwfSFAGyTJceZUGJ6ymJpMssHSy",
  "key2": "3zrhpcSB3cjo6vu92tx41dwos7R4pviwbgXeqmTrNUbHJ2qDxzc2q8bpLQT5MYHJqEUZT5D7DzFm88QyTqkxEHLD",
  "key3": "59Nv1AQwriG44HTEYj5zTnaA9sHBQxWf5LqvNXxqqqT7mcuYP3UDbdZfunJ48pinasB8RKAfbfoynTZe2QkiqDKE",
  "key4": "V8fVnPmriuwuRCwwtixFgELPVzXgsRK9bqNae7qeueocCAkyt1FiKP52B16oVvtZsufjmXvLWUo8A8g12Cwrafw",
  "key5": "5rbcGRdsY6wVrSxRyzWE7qpRxQHqZrFUqva15pYjDqNzR7smQ24tcD7B8b4ZJ3CWNdVWoco69p5wrxpDehW4gpaM",
  "key6": "5wJgWuRYKDw1z7SHwKNPAUjueZ7iW2SBNpKDyeZpzKYZZTfWJbrfwBu1T1M7S54ACnALfgasUrJ7LVJcU6fLLqUT",
  "key7": "4kRvEFKzSbfp1xkzc4zTaCCZrNFN6wMoRaY7pEYqB9swtnLkyPpLRmgrzFfyifNtNg56q8ZpYJeFHmnWTXFWffzd",
  "key8": "52RLzeuEwNDDwaNS4x5XeCSPbYdF7YpVDUxL18Ej1v2GZLeZWVYAFpCJ5hfD6mY2fjuyzPf8NoZ86zH6TuvveuHy",
  "key9": "3rx2RkEbSuSTF64rDsWFud3CKG56QzNu4b5E8krQ7FxUkjxFd2DJ3mxpwd9BQ2HTEn13BseZLsZm3qxkr4rQrmc9",
  "key10": "2XTSdznoBeyy8cVq5P6NWZE8u7bqP2zJYpXXfiR4ewUMux5W296AD16KaP1kcANjf7XFYdyK3snRePYEiTG2bH4E",
  "key11": "62ELrzcPX83rGpNYLnVN5TX85b19FjgomW4X8QhgSXfSuAERCkHthXq56j8Y2p7hu2uEdUKDtLZe1T9vew2bssZD",
  "key12": "43ivCM2NxkvpsmZDDqmxx5HkHd6ezJpjbTHtpiCjZe5G8K5Vux8mMZFRNRZRUSJFFMKvGdTUweDjhKpZf5m7Yukg",
  "key13": "jMZhM14dBfD1RsYucuuTfzBdo1X37jBuTV8gMfn2o8Rd5RwxmWSioHUjHXBjPdzzDw9vnR9VNkthC5zVN1r1sT8",
  "key14": "5ABbNcZaXXxVmHcXg38k17tTj9L9xwGUJhEPbeRcfDAJzgsCKDZnrkjKkdSDaR4AZRnRHbjMRL1cBLpGUGnXX1t8",
  "key15": "2qwBEchk7MzjrS2r18HubgtSnkkz8fDCBTtJfU7oWckSNfc5D7WTzpvWYe3x4MV2zwbFnPyaVFiwB3f1VxRWPvbV",
  "key16": "2a57J9incxkehD2oDdKJiUgHHHRtGuPoGZ2MDBtdVccwKX8bcobfceHWoNPQKdPtL9k7TYnQUWdsW74c1zhZFXNc",
  "key17": "3NYy8veNvsL3e9hmNVNGcKK7Ar9T9CZSYjvYEFrwdYZbYA8MzxcP7Z3QfwnpsQsgHV5HT79AdrrjtgjgNe1CSwz5",
  "key18": "35UKigRr89xPeu5SDAkrfPL6ewgZVDp2KPceJYiZ9sbuzWBZw2ca2FhKUrMArRZuWKm1nRwU5YpWQjQcCyofimS3",
  "key19": "5CAkhdT9C8vEMERoScgUEQ38rd2cRNQp2ZXyqXotfWZEGCSX4R1cSdNW2HrG1Ra1ZRVgTQGTdoRXiFZkRLEVQyVb",
  "key20": "48nS7FiJhGXjvsX7mcGuQ32ArfVVn2ZXXUrvLd2j2pcFZZSzdVTBqq4egsJBczFRnbZyQdXLnq5DxKVvxqtghf8p",
  "key21": "3YRdzK5PhCPQkD4eJS7S1K4Paa7LJYJ9V3CLQqfQQ6ne9UXS5fkU4ciXGrRCDM872TJieac33jry87Kfm3C4XLMF",
  "key22": "4RWUp6NJkSpAvYmi5W78rm9ZH7sqvN4mTFA8DLz99VYADaD76zh6V9KD1mUjbsPJgXdwWDubQowDPQkjLoQp1VAx",
  "key23": "3bjJKcSFFHZgm2AyQZonSdpugBEPL7pNXQZnsKoDfee8Eg5Dq9zPU3T3KrdG8FyX3S4ywJBbK4S1SWAARPwqFF84",
  "key24": "nvzX3MsJzCSZiKUVWP7p6Z5Mm1pHeu7qSB2o53Q19Hcpp8bYng7oSxJx4FFv2PSUQfJnnWnTJW8LcK5E1e9zvXW",
  "key25": "78Rg2PoNQXeEkvS6do1T2tZvASrsf66ejwp4QaLXtaNPu7WU9zmFsgcyJAVsdgDrRiLm5H188dzpcakquTLvynM",
  "key26": "4ATFvNPcWLvAaB1PJ9WGwm6FFCKNJqrXaCUfe6oSzKGqQwfpWna2wEF5BLhRbntMFNa4iSLzuMPBuzA7Q6kKpg8s",
  "key27": "5tgXcHnCz4NSK5XPL2d7YZypMjL9S7aGoFNuXdpamuW8NqhfSSPeqf6N82xXtK4FqHbEwifaKPmiPGLeu8b2nfka",
  "key28": "5Jc4w24egCEYAg9jtmBk2rB1XVHijRkBn96hyExzorptmYXtrEv6FwX1cWjvq5M9B9akqsNFXaqcdN8CPZdFofxC",
  "key29": "2dMtc4ckRytDWgSAxmT8YEPxtyVs4Q1CWXVZHyhq6jFkBjgjjYkf5ReABMc3KjfdHGjDSswJwGkr3sfTRrc46qk",
  "key30": "5WYZV5bdde71BGvdK7GKXR33tDW795U43JYCzQcsh7Sj2i4WXMGVMDKNr9JPFcYWHPTkC3mFBTnYpVDdaY5Smsxw",
  "key31": "239wnaTVynbSu2WFDQi1Xk5sVHsWaeep6ooondEdNiQgm9ff6AZ5JiFiPRwYqQiJtLb4uh18Qo2cx9p3csVDivFx",
  "key32": "2Z6bvJdTjeBEc1uTTNJcRvn9qRHtFATMTqqtkS95DHDEktU1HHNLjB1WekBMmZy1dXSFzPTVqV6dkWcveDFqbhov",
  "key33": "5yokPCN3iZ7iFErfJ9NkxVL43p3sakq6sU2XpPAKxzPE3XED1hVycwJFiFXgq2Dxbds4fRc9iUNkG589PiedqqE9",
  "key34": "61dfUcXcG8wRfYCkJvAV5yMRSVeubhdJ4LNoDueP5pLgjpxL6kHu25NJNq42UbPKqwgHGF734JpcVADsLoL1qnW8",
  "key35": "5GH16xtbmz35cNKav3yf7KvCJqwgutRt6so5wvsJpJXvin1QZBUvaZ5gAenvM1hGmHxpQxEUKDcxmLKTYEh7xC71",
  "key36": "2Xdc8vh9BxY3jcvLJBg6gYM4uXXH3c325s9T5tc48FGXZtDzVcE6Zp8GzMWEbHR8L1BUjaNZnB99o83S9DphkmVf",
  "key37": "2rPBkmJx6HYAKqs9EmeaLmkZ7oEZUTfMrndcr3oywf7tXweFD5H9X9tzbgGKorTbtULYs89j8BRYJzbrcYieqv5",
  "key38": "4XfxGeXWab7x1ZEoAYBgnDENQPNQbMYdtPvN38HGG9zVX7dV4WWZjuwwWY268vHpaDPH42cGJKE8ZBZ2WCSEJavq",
  "key39": "43hxfdsb5a4PnpfovpTN8AECSg9uhETT8MEYiVwggNVm7yvF11k1KvzrpEtRyGTtcpB4qbTz7M2tsTCEyQCa71M",
  "key40": "3xZkucX1KH8EzWozkL93e9Q1kkNWEtR1a77F1uQUiQNWKS17kWwAhK9Ec1oksTkxtZoi99YHXFYb15TBTfoDncwN",
  "key41": "4XCMhTVTyX93wh3ELqJ5Z1S5biCww2FCpAykpcxH6BfJN3QkWsBgqSPSpGMKHwAnuZ98HA4RFLB8EDCE6ZzoW7FR",
  "key42": "5ZcBPhfCmTS2tNFiBik3PG3QWbYLqZDhyDVGLwuPC5kFZTtEdpVCeMs14MnW2mq1zMfWu61uqczEtPe8VcRTz5mB",
  "key43": "4D31joVYkU4RiL8RE1LVPbguKSN1uvE8zCN8bX1eksoZra6dCUByJ7AQicf7orBkzEznXSf62bxtFzF8pDapwq28"
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
