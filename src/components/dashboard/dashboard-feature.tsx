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
    "2JUuKkTsgf9YEk8x8WMy5jGqbfY5C6xhCJ7CPz64Lvc622GTRHkWRjpVK1FJepG6tW1k1BWNs2kay9kdEJSD9Wmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PFYX3LpWotN7jQxWiiqKCY7c3kHF99puB5i2W4TJRFbsDKT7QH2QPE5WxJ9R9qkrtswYTeoieSDb2hvin4Dt7Sy",
  "key1": "2qnX6Sc4aTKG9DTsqucxGrboZCqh6nXXJqg8En656nWpvbNya3jbT8yyqgrX8tK2WT4TpMcWMYy8VLdGyy5XCT3n",
  "key2": "3xAoM55cWCbBeF7ZoZYA5zELsPGzsrrqcj6fGmfenSR5nAM4crHxAP8muVK8e1eHFzegYV39AnyuLB6XxcqrpgRo",
  "key3": "Y6C4LNnXpkT3pVheFWof2hc2ZCT9Anp6Tt6UoSUaPhZq1RMxuXjUiFquLkGLf2nEnK4XyLSM9PHisH8JPtg1AND",
  "key4": "2RwD1z59Qfv5RNztCbaLLQ45TedgFcDqY6AWrdHsHS5gYpNvNHVvkwEb2LKkMk9oyCyzsrxedBLQ7BZvPSvug2qJ",
  "key5": "5ZqJvgp8TYGCwpVDqmtxswMqm6XMkk6p6T8iPqXjUmGe3vBr4uYF8TtpiwccqKuAokEBwPuAeQhTzQEYDSakDQA6",
  "key6": "22D1iGymR34Jy8qE4yoPiQnQWbNMNnZgpTrb6zDc9yogsEaau7FZ2kYNqn2Wp6JdhMoFAAGhbpvDBebU7u2mwKVv",
  "key7": "5fFtG7rMm7h8TtZt8jm1iYxWEbTfTqMAUUSajoAQ32kRE4nZRZe4D9KUeQL3E7sX2nKznQe7zcGRKpBixBnA16oQ",
  "key8": "3SuGnBLAU9KSxCGKDx425QVq75r7K9PdYbtGzJM2dBGX6rYw5qphAV4kDxUEWQPhQthzpnvqtJBsG2fBHFXjL6f6",
  "key9": "2WXAtQATzysf7PxaxTtjvDhc5KhmxuofJdEJ29Y9Fm6uTxcJmweSYMNRGFb8KjPHEyWUkEyj7GynUJFEPpRRr53K",
  "key10": "38CwEvLJG8fKThXQpy8eyufCXhFqqpYUmkfGksgdQEDgbrPCK7nvwtfZX8WS4w2naHPoV9KU9wYsHVLN3JFwqhFi",
  "key11": "5r2RrryY3aN36K9AJPVJCYnEEhsKwAuaSxp8QUx655Tg1DHNdzsFrz2kp9Yf9qMyTqkSCH1fZEoN2FMyutN27HD8",
  "key12": "RyuSPWHZRYARJBwWK4YikFLuMu5h7ZzjCxXkuYbd2pUoLhG93pXmBT422yMA822pguRr1AcQc2fGMN19DJRYsR1",
  "key13": "5qWEdUwe3popa9KFSmpXmCPaMLx2UMcEQWtfJ1ezN68sA1c3ihd3CTi9TtG7xzmcy2jEVdYLY8kSEjF9eiTV7gDZ",
  "key14": "2ZxG8up3VoBSxLnAutFTXjnEJeq7JekgjBgK9rGzoYHB6PXzWSiUadCNoGWpiNS8Bw4qs2kqprE2vopegr6iNkYu",
  "key15": "4pkRNSHsLDnA2SY1Z9k4kvpadqmGkbgDC5ncWsmxBtEjki75jKvEBMmMhZYmia3d3XTPZv3BNJ1pwBNcxThaDALt",
  "key16": "3BN4V8VjUk5cwZ21Yro17B4B2VeVgrxFa1j2y72w3MKgq4SgiKVoDjzFVfR9pcuWt57FREzrCTPpwYR5uMGhTZqT",
  "key17": "5KXhXdCib9zpsmoUSkuNQPGC7G4rw1ujQJ34UHDVPq2jviAERxTVA1FMTEMANBFcwfuCvZsvFExEhjR2GdeQjrUJ",
  "key18": "28gSBnrmUhN1XSZeHy41FrJ3X8m4ED35UyApubYDsM8w7V5nDbGz29TX4Cc94uuto15cLK9iDks6oSHTC6PV1mSR",
  "key19": "4uP8VHoenpnNqAcJ48Kxdjg6pfLNCU2gHemELG61a2fVrkQQ4Mtmmzf9hizJknzK6MxaDwUVrxFsmERF5C2dvepT",
  "key20": "4gnp7FZBwtvMaKutB3Qy4DjcbABGvF6xJP1p1bQAyA4hZw3yAzghovcFGy3Wedrmg3XRZCvBpopLSkDyppeFDDZw",
  "key21": "YYyHDtGJq4d7Mi6gJrt8jMrKCXR7Mrb4yDTnThzwEEN5rnvH9ijrwtsuAEdXdEei5ZA2W7J4bLmYC3jqH8ggvVs",
  "key22": "5HRPtQ4JWbQfFptRHX69Jv4BGHx2XdFYPemWHCHs64jggtXeJKgMp8De6fBNCCXoSn2WX86SmZ9qfKotNfMg7iYr",
  "key23": "5jwMjmHtxf83BuWgHg8A8bPDY5hZhgzRhwJAbnFZWz4rVBSgQP8WgUsg6oPTTcuFUSfGRcjofhyKge6MW2dM16gk",
  "key24": "2SVnNLUwQrn8e8sePgT6F6Xpwrpsn2BYtBgiraPf7mMYuGHT5mGMC4DmQagN1bepMRQUZy12wrtGqqytPoCRQQCg",
  "key25": "3TCCy37oRmzxqRSjKm37zsqCgjsVHSHibLwNnZTAFCjs36nssUzWDrsnLrVry74XGXuTCC7VcXkCiJYQJEttwhrv",
  "key26": "4iJBqFEgZLbHf5nqwd7h8NX9RyViiFEujp59WGN4vRsbpSzwRb6AN7Zqj3a7F8JLJ7qcF4rUX1rVzYSYvPCBXRiJ",
  "key27": "3mh7CrGZwabga4kdMEdXf8P9KcN3FnQCCDYSSZ7trkxLzhhuCkE8B42R9sGFnCRBeGPQhUNCk5tQdh9VxCQudiFe",
  "key28": "4p9ZsbFSrEDQ3WP8Eo7N37e8xsCUVWwwQXFrUddLAkStgHYU4SNerVcS8qUYQpT1BdRXHxNKGcq6G8fR2o6rVmuN",
  "key29": "2k86yq3sFYn5JdrLk99myHHQdSr9jAPzfjib94k6SYnTV2XTjCyhYkGoWzesrqATYibXRBqao7C29PyW2Na39hQ7",
  "key30": "4Fm8mna1A6aHh6qaaDpaBTrFUVu5pdrkknqqbQbGA4VMKzjQCPfKFxTmLeBwfRx8TujbS7NdURYZZd3iqojLhggU",
  "key31": "4G3sJbZe5sHM8c56cJBEetG1wNqtAYX37EyhgqPfzmAh3fN3BxyJFtzzFxU3etdJfzYdpNurDfAcY1YdE8E614mN",
  "key32": "1AwRXXAH7LWGWBFEVF9A3YqpB9Y4VR1MoG8hXWdtsVc74LQLUFwdvAw1XrVKpGBuPeAFDw61FUStDbokfbWVgRT",
  "key33": "31jGTPRisre5mkqbWWFhu71pZoskezrAXFjQ9bfJmfdP7caFALW9Q94Lz73mMHz8zZ3axSLz26gJg1gR9opvaFyt",
  "key34": "41zftwJHq3ANwmQuFFdyRYcaY3Y7htVuXWqyrwmB9BzDqQjdDPD9XRgMVfHVk4v3s27K5aAeB1wT56dML8X58fTW",
  "key35": "4pTgasehTeDxYfueMr9GF7kqm2kdA85FRFjF7Cht97zZ4k8Zzoi1DTC1RxWY1yYnqdzKx721H5Hc7J5mcQUuPGqB",
  "key36": "3CwKvmqCJxx5ehDg9es6bCxNY8AMmpXcRo3427oFHY7nXC8xW8KSyBZWycxs7wcBPcPwcpo2kqsig1FXdwRhYCCi",
  "key37": "4HE3bUYcQqmi9pJGPqEG9UCgFGVSyxMT8RfTyp8Uh4w8eTBAU46y8T8eqjcMkqZ2g3KjrQq5ZnppFkrmaB5L9cT1",
  "key38": "dWezmb1snFMpfno9hdaV5tDgnn3zKx3B7GYE3HVMTToD8R7dgCP3zQqFDVFFBUZ9eQ14U7AbBAjfCnRGaeDRa3H",
  "key39": "4cwJgELsrCivVsbX3xmMDiP97k943D8RBbr8m4nhz3bHcJaaRqNBXzEtMvpvjzzJAf53d4W3v7xvqJvzSXEErsv4",
  "key40": "2xvsCQH8jDn3cKhGQFUvMxx6QxHJaUb9YUZ8qHRywZYoL3XkcfCaohHGmM5LAcxweoXcZzjDsLEL6gZJ4owhuBrs"
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
