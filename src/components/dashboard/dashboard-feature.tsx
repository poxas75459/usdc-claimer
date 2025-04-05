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
    "bh86pLCGHVhDSSipJsSfyM7AnQN9jhMrtkGgknnTQcYZpoQx3QrV1ZFXHppzCjJQGDadoycEeShLWbyrB5vUJv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L8asJ6oDkZQB59wLvQ7d14KcJCmy4bgVuq4gbQ71p4ANsx6r6r9YNGkiyxSNdhERTRLVLVHGTntHAujbLGmPnw3",
  "key1": "4iNwBkGomceZPYNaRarKjwMiYccxN1Ev8bdwuA5JuhKPpQZjQBjt2BoFxvXG9dZ2KJypqmgasC8ZzVmnjg1812PW",
  "key2": "5TbDo4Kng9teuzDXG6TN8rmRx33KXxa1uL4wRa4G9zPWLo6yizqj7QizHJUTGsmp582HpzHMcSSMmeqwts5sYWWH",
  "key3": "HrJBxgDHJim2ZEwjqNw4dC9WrPzE3wuW7KVpFcuxW5ridHrauGA77tn1m2xoCDg2kkfJZ4JHUGTLBTErP41wBFf",
  "key4": "32DmvkknPZYAyHixGuWZy8TV4VVPwawXBbkH4yNhBx1SREnzmMrq88LLqeqDDHdEDt3KrvCkmVooMtdoLpxSH9qn",
  "key5": "25zJzT6bZnDcEA3rdny1TTsehSyNKyRZWLYAHsWvciwhSgHKdRRUfL18nonLVhDdWqBfnoWrbtx9T7PNp5vD5VZ5",
  "key6": "4zDuM19YXLuGqYCfz7XBoAmceMLqsYQYKjKUmbtX1MUBXYEoT58M9kYNcfSqqafdXb1RL2Cv87X4UQq3VtkqMQzc",
  "key7": "4MDecNWeHmTdoT7w6L3YsUhkDVQhVHBsL9uvzbNxiT2a17jABsAxhJLGGAjQ92vcepoVRtUGfWmrX45aTSyuAW8z",
  "key8": "4zVPuBxcMtBcVKYsLL1Sc6F3UNCv1FxFY1jUZZmDSwxuPhGN6VLxpfwgsVF58hZWSkKaemxQeU8B8Fzh4RPHMn7w",
  "key9": "3YBf4SdHuA5Qroxw2DC9FBAmVjKvHgVgTfxbjJe3hcHrmkKzwE5GjyUSVShAmBYXbQ4o6HuUEcVDVXDjmtr8nYfz",
  "key10": "2h4SWPbpiMLhNtjep1cFyJw2SuYEYuBmvLzygz3QKrFvhK7CXUMiyFa45oQo5eNfX2TJFhJjeibctoxnH3Rzgzmt",
  "key11": "5zt424qXVEyzoyt2VerGyayne5rYFD1uz5Dcvyqh3M8vYMKndjtbtQ9vddGTZcWwU4pgyfUtcg5CJ3AGwdSDK32d",
  "key12": "4aknUCQcDp4EQCPqdAac4NFQmru45uDy2sGn3dopbtfotD7nvc6HHUZtutvJSqyfR5rAuKtMwnkJa728yCDo2emc",
  "key13": "3EHPrZgxLdS8b1675j2zR1oz5dJYhoVSHgP7E7v8knffpgwJggY9UTtiYKjR8FfvMz4etePUtfcBbVgkjeNipeML",
  "key14": "2hnaf2jZoyGCfCay1dgmFrW3jTon9DmSxia6X34Vuh7rR7JrVwe8FkYp3QmGaw2YjE1nWN5oQNCL9YbSbVJHk2Az",
  "key15": "3XaB2tBsuKX36EX2XFt9CzBjpSx11bR5KfRDsW1ZwzPkQ3RaMWGwHFDpeVpzJfMwMhDExSpPSzqsw7hpsYQRLgor",
  "key16": "4zV1M8atFVuicHKBHwBu1Gtd4A2UbUbUCAsFZFL3hF356kDiWVNfUEBZDvRooiBfZB3dgFCQajcfattYXQjeK3ak",
  "key17": "3EG3j9Mb7ZnV8KFcm2H2zgyyLfm5Suys41FcLcWSjFp2cQp9FbgjCo4d32D4muFzwSHSnKVffCAebLae6WoCETeK",
  "key18": "f5moqzgkWrBwNAtLFNAzmssbgPARtCJBxSGXwvcXtnaCaMADqfsvLoTJSZCCHJ53F69tQpcARKqneFqSfZFqLNo",
  "key19": "5XHjAmCxymYoo3DBzuo21AUN1nisGcub9Di8ST8CvxtXWhdRxaykK8Ws99CNmniw2TGFkhMDM3wiZbB2d7pQRdSp",
  "key20": "5tW7xwtFNJaV2sxU1zvicFqgXmNbS59qqsUyNaiTU8WSQwAHVyrNkDexmCH9Pa6tS9VdJDD6Z6urmwAcAGeBEjVz",
  "key21": "67r934CjfDAc91jk7pjMnLuA6tmAxPBucYRmsakVpH2UFRKAhguNr34uE1D5RubixT2E6aWAewhgBBGP8n1nYsA7",
  "key22": "2h9FJixiYnztJkPHRP6UrxAs3r4RUhYzRY5jeV3DRfL73ycT9ZVeUA87GWDdRgbH3CfikEYBrn95eJLjJK4UFuqL",
  "key23": "2o9emEfHjBLNu3bsXPXLKrzuhXN7XJKrjQwaRPk287mSEC2MGoUwj7SA8MHvnM14ZbRsZNbFaXfLGiCpeh2dtAUg",
  "key24": "3dj3AeeGr5nsWShurBzV6PUeN6knstbeggKkAy2jemLhsza8pZQJhtkjyodx1PPK6grXyKnAZZXoRHghcSMxo4no",
  "key25": "3su1CPmvwMg2cUkvrUE4bF3v7t7zWqZTbyxKMc1cJHH6JaxXtVjG3fvXmq4yj13DrdcfhUX94SedQFv5ccYnBV6X",
  "key26": "3HJf7wcHNBE4rCom4ZUHXt5mVHKzvsgMBFg2YZR5DMcfF6ELWqZEJHhg37kCq5w9mB7aZGJD1fEe1MymyQmZsRYP",
  "key27": "5k8aEVK7vBnEPhZk95YkiYsqCzqD8d7cFQ3eWke4ocbd7Yuf3YUxSTQBaBtsgzME2Vsk9N2gvkx6jyT9eCsJVS6H",
  "key28": "3R8yFV4vJzsT1e1YNW26xy3CsHpeSVxB7bRTsZdEyYTvxsrumasdKGxaF2nfGhNiGnWhpeS3rDquQXR4KKbnSY5Q",
  "key29": "4FdXWmCj3HbaW2JYgyBtB4DL6dDipyo2cf68ykeo4WKxwaLdsP1hDTESj3hSB17gE1AGuZssKWtZ1JDd5SuPPgDZ",
  "key30": "4jpUNNsQzqLHwLWhbpEJXWv5AHbGUimU2Suu9g3WppxRu2UURzNGiBpjtHaka7MJNZ4Pp9BFb4GY5Q6g7U35fSBc",
  "key31": "hWuLkjoCKKjYNmfCwcGf4pbaEkfwAbjf1Pp9yszCABuN86JZFdS9RMS1pJi3PNz6EreUibduqYJV4zPPGBGgf1t",
  "key32": "wfBErg1t9vh7pa2NhfFzB8oeRMLjmU656zJh5yUxQ6a6qcAfqqKfoSWp5GpYUmnzTwcrHTDGzCEM6aZAHeHcYxY",
  "key33": "5heiztmUXvdsLPhPrCTjVPqun1iF6Q4YwtcffmXYsxhyZkBHzKUkNGr6rR4VobSXqYPfXZwbdcp6QcC3PzJYSRic",
  "key34": "5n9QqzBAaMqiVQqPiy3T7nveHoTgMJqFhqWkiaC4zf1FUyojAY8VhE2sKy7NuxhqdiymhH1j9HzGBpJmCXAj5zoT",
  "key35": "5zebx1QmTSzcpJD6fBL21MgJcNJNd2pndCfUUbiJ4QZVX5VPmM5AZTm3DJQhWuSZKuJCHYgfMhKgJxEvJBmvUEFL",
  "key36": "2Dp2iQfUrNsetmcuCVSNCCde6BNN5M7B8t23fKX4ktesNd5yqLfPFPod8gvaJSh66uQ1zEHgc1pKjT1JZmvwe4mk",
  "key37": "2ube8VmfwKDkDBQxWnaTvz8xKqTbRHacR9rBH4muQu622bsTwcNKdQgytpFijXdzDZpzBz6r44CxS98Cf1s7BN8Z",
  "key38": "3hL2rGHseSMAZPrrvuoe5MaqfaKGMNZZYcpnqekhJz5m7i8UZg2vQhxmWyMKoA2MrYZ6ngK4gnby1d3K2ZoeAjiW",
  "key39": "Jzv85f4wY1HjW4Y4vaFvzmp3AbhoRbg6pSjjXHP8YMWVvqGZ7reFnoeJiTCSZrnUMzj2zzgeZ6JTVvRMdSLedWL",
  "key40": "5bDuJqXiLD6kRdCNgCidHuvwk7YXjUZYkrthtLkKvEjs6FUTtVzXG7MbPg9Rxyu56J2U1qmBVwdvzE6vHuMrVPCS",
  "key41": "4YKruts5eXZDNfhBozaaHHRxkzbuPpgESGX3hCSAb4aHzoFrPwgUzW87dcWTrqt99yG2HCvYy2R7hdcK6oa6UFvs",
  "key42": "5f4EXsFSjBLNyGS9XL1m2MCLpzxKGzEYZTMdLCR5uyxMu88k4RAzuhyP8VbvxGK3d9XcPK4mgw2VNkJtVV7AkKSW",
  "key43": "4VE1hD4HXCPW76RoDyvaXFt3573ainBBqqhw58aTJiEXHLa6i2SvtWSLNypKbLRCu8iHooe56LQkDrpwGrkgPPec",
  "key44": "3YwcYBWMAuVp7LrpGUNg6z7o4KnrJWQ5vGyBZvbUfKgcTC7mHP83Kg5FkQiZpvfSzUbr7w6uivbSHVatneWkLGbo",
  "key45": "35CTnCwxPD6z7JEfeoJ37zFCfvpzpCUPJmthw3ZNkVBP4qicm2mRux4zDAH6hHHMnuWCm2XpTxBqb9ThyD3DsZND",
  "key46": "zZpmi4Nb7YyTqRA2GaJbRSxZWSaPpHASknrTCKuThWxz3gSRvi5DqrXJd2AuLTc7mCkuqxSVHJL11o5xGfocqrR",
  "key47": "2ngRcJWM9XNUnsR6W1jVhFsQECKM23Q7KJwZEkmm2FD89oJqahFFXVBXrSPPLuSyndBYLhNUuwVWu6LjhUWX9j5c"
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
