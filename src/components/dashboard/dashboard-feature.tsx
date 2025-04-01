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
    "2ZuqoypxXhHHpWiifvAupznUxEYThznhmQmLeH43XftnA4tz4A89U5gGBqgYpZc1yFZta8YQeR4YASN8FsUFxH2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ph16DcT1gcVnPJsawiysdxhyeEXCMTRee8fVVaskpe7JxB3opz1b4cGbfLXDNJfU6TFo3yDDbj6AUwi9hWmUdLQ",
  "key1": "38REJNpzKgYwKsNmrzZ7Aoj2ATqvS4kfmHpKaUyMp4FZA4Tb2w4uV3sPNNMKMrFeGrt3tCYmGA5ZEjLandmgn2yy",
  "key2": "3QKdARcyJhitksNkW3AqV7EwRtM5oqnbZJiPMySfjhdBHY9cLWkM6s5kJmLZKEB1uM2PNMbRWKF1wrdFtJ7XSH5V",
  "key3": "zy5Y1RS6gbxKV6aknQWH2kPQ9t6nU2eVcxssiqTWL2Uhm8D7numNwXxysmdWXHMWQyFuB96o8xUUSfuCA9nEunC",
  "key4": "5cg6pXuUbTWFvW6dLErCk9bYDMqLpg281skLFP5pYGvJ3eLojohG1R5p2j1c4hW8ayHKp29CAXCGhjDfRcjMy9sQ",
  "key5": "BC6wvVgxym9gGJgaEjdJUAN3NNeQCxEMN5VqBxHiUUHhKJWbpnMxtb8a3pXN8dMiMXEuyX1GsYSWSSHa2BKZcDq",
  "key6": "uvgdYu7QWAqiSuNPw3bujJP9FqJZic7bNTKrJntSjKBzFRbCTo6GiWLaBsfqu8R4wSV5zfUekvdL2iChS2kPdBb",
  "key7": "2AdFZtjfiF4Uu9PvYD4GissdpMzukGdATRbufP7512yRNsSBpYdLeULhYTizvc4xh5hp2gqpxDbLzFziQppCDmEw",
  "key8": "4PuvbwPjg3GwnwdCqgW8UKEHc4VgBTrBkt45aas7K1vfo1cB8Ggy6WqggCvZcq6BDZ3Kz6M8oJ84g9ooD8CyDkEa",
  "key9": "2HfYdGCZFLLECvDXNgqZEvMfi4Wps3ua7jgqms6rNzcmopGaZDkYQz1BZgX3EtPRSW9tFcn3mMHuP4iS76FF7aY2",
  "key10": "5R86VvciuYouVtsQC2TqEJeMAGzuLmLkMk9cDbPochyzjvpS3LTmyeswc53bNZLfxFBoEN2kuPnNugrJkm6P6KFc",
  "key11": "4Z9qmX7yv6BUN1CR56z4PMg1dzVSDFf3BkJXb3i74DhuhYsBgMXmUeR5fYFN2NZfNfHKZJYrhMqo4mSHARktx8SX",
  "key12": "p8TFrrisTxx3D95BWDkQxQrVyW9BEQzm37HQ5CDfJP6b29XPSqDmWRuVkBa821vJm81hc5MXhAAKQ1yCJe1gvzX",
  "key13": "46bESv6524QkVigwhhVNG9fPXrsXUWSujKm4LPY8VAMsV1CG3Z5F2g9AJ5iPqYHTqfYwWFY1jwrgCVGjsTwnvoLb",
  "key14": "4XTHJJTY7zoMjhCpM2DkwGgZDRnmrouDu1kJEjUYRp5xEuGWcxEybTxbqV1jPpM7aSK3W6L9wKZGptMKLY2tgAbX",
  "key15": "4cffYpxuCPWqAiNTpLzNFWbWbPTdvbuaZmSjcJ2ZM7uiLNXBQvjpm6a8zA9KTMUNiw62WWYdbqVXKzrXL9QeYwQd",
  "key16": "Zbin71VX3Y3xb7BhdURrQ3uTg46E8bKHYC3McEWhj4QBTdMSF3mZhUf5DtAGAau3bgrwYwc7fWGDxFP2ECW1LFf",
  "key17": "qWyqnj9k6fP3Fuc1f7ky7cwtZSNJmgFsEXWEgb4zfkZwgQKmAoK9Tnn5Hi7u6Qj5AjQwceQbyg4uL5ZYTNeroev",
  "key18": "GWuS7xk8dP19EaXTYpwqFvX8SvNcx81Y1ZXRN19S1edznixEPHzXkvW2KQN66Cu3itaZLsY8YjauVfjZX31Y3ee",
  "key19": "9zZHhKcw9sdN76CuXazwPzV8C9yYrHEUipHdciR6hK3psN1vtbHgdzFDgiy9aXVRQifHqnpVTAja9DdUyfN6P3D",
  "key20": "5VWWmGzte6YxhDWHmZH8T1QzLRMW5pmTHyQmnoX6kg2QKTUQcSMoT4DFcpjDnX9CfHRWKbthVDmnD7oERGKaPpN7",
  "key21": "5weGrxz1trHomt5ZC3BUd6VgwJrEjSYaSZzKa5SSrcQaJ82fRCEXSJ6uZi6btXmVEHAmBLeCQ9155LoWYX7TvZ4q",
  "key22": "5ivc5scu7zuJB7PeuJa34FnNAaa2TK9g9arvfPfoA3CEYJDnYVXa93Kv7suxmVRmXjqpmpMJweLVfrXUaH7siDVB",
  "key23": "3tGDXKYUCKy3qA6Ft1BqDgoyBProZdjfSBgWWcQitTvwnK4fQECaAqfwLyFKYVFhVnHaB3NFExBCTvx1ArAW2ZFW",
  "key24": "2Jp28gSYpsEAUJT868VW985uyyo9o77r7gpnBVQAEHr5NUGbw6SwhWxarkYVspBDp1HZqnw19iaHLnhhUFBvy36b",
  "key25": "5rVppH7Ry6kkBrF2fFQBhXwUuv7SqEjdbMBVzRXLykzwz3zpJiwQRr4SMwyucJx3gjQssjRsRjrdFH15NK4AV47r",
  "key26": "oDdtUjYzoqscu4McQsiHetFbF8bhVzy9dJP1cFHDSf5AJsJyr8yJ9vBLDiLAPmcadnQrbsva7r5yegwHos5h9iX",
  "key27": "59prSKBhE7t72B3vQkixpEPqXDSTEr7jq4bSLMJcEGP6iCL4JijyQB1Du3BDZV55SN4aYj7awDAmxyLEV8Y79sqv",
  "key28": "Axw761yQCzSXyABwXeaqB3zm55uN4ZA7UzZK4waQE2rRRUMchKr2DF865Rr9BQ8hepTd7ESbQmrMmW341FQGr8x",
  "key29": "5iTbq71WZ5cJHYagJi6vTUJNEwGKQYHgZJeV7Kfh1M9TCELtdz6oefEL2gBkGnem96PCuyZ3EumzvuqhkdGw5jV",
  "key30": "4Y449z5KG4n8PYxmzaK9Q8BwBtiF7asY3Euc4qDgYK1cueRCXCMbvvFk7L31A6N9SiaGvsrJEDCimG78T4C8KK7o",
  "key31": "4ew2AvpoybafoXdMyGH23yjMgBEiVLB4ewgRegnV67QQCVVp3bSEu9ejKFknfhoSEXErxMXoVGNEAjqjqLDjYaFr",
  "key32": "44hJoPAHELrHw9vySWFD5uj1N2n8MNh9VHEqSEXXLkkbvPMEsq2k6gbnKus5ddUk16Kcg16BLywW76z4JwPfvvTb",
  "key33": "4XFsmDbRXXEbq9nMZ9Sf2mq7kTe74n5FYVMCa6sBqXmanifn3eWrffnogRJoqnnFMNtcWmTh2Fi4RJuWT69eGBRB",
  "key34": "QqRR3n4FAjB5saSsjPD9ZFjYwTZHnf4KaGkqcv7TuEnkh65UjzQZsoHdtvV7DimZWnNf9MVMNGDWk5VzDaMXPCL",
  "key35": "YD5mDm5fr9Ehpyxu5xtW2AFjcWdtgNJ8UFraXQ9Af8YiBPewJ3D1hrccVKiiGzLdEMsigPVMHygJcrJaq1hw7o8",
  "key36": "4Mav6kZTqujg6pqRRbWAR94AVX4GFwcMDkHoVobSRMFrdvwKg2UD5sAv9XQXgeuG61NGDi9FnoLp3mAPpUb2hdwm",
  "key37": "21GyJS5JVTK7MJC2bq1dG1dWPieNPo4VN6BN7K3JVVWEV8sYYYgkzY7GCCqSoUufRoJaWm9NU4DUFaaTv3BZeaYR",
  "key38": "2HQHBk7yqwyuNLXhXJtKNX5M5gVrSLjQ9QewdW83PDZUoJ6mMtdUMRfEPbuowSJBExB6QDAffcBqs4kXJxwDg3Uv",
  "key39": "31jYoNm3MXcmmhpGC4hj7k9odE4QkQCa5bysqETXi8S3jwYC7FDx4Gx7DaPNF4gP22pAMeEn1EZfTbXXq66U8HVD",
  "key40": "43oFt4pyxWcbhd1sVz9vhX72bJARb5vHr3WmvtP66BdQPebM2AodBrGqQB3WRWgCm9gjDn8jwaRLxWAN5hFHonSA",
  "key41": "4K6cif57MaSoCHhzKAQdsKmfYYmAqP74ehTB3MePvcijXtubq7oFujHSRwvWEmgm4yQG5bcRhn2amNzNZBeBnUHS",
  "key42": "2zPGVLJasmYnno8DozsVdtkbbR3oxWf8yjKRNGZxWF1qdtgY47Sbv25yAMeFRLty4LnMu7jwDxLQCRLJR6FRUkkD",
  "key43": "48yvSK3ovLrLVu4aDoS2DQZzfid68iZKgATp4zSDfghuhSskJmM2qK66MmtZfkyG9snCTDaF4CMzebtJtqFs5J3q",
  "key44": "4QUFwKxU2kS8CyUV76ZAyBiNWddywMi7Cs7ZeFE7pfFkGG6yLcoHYnoGKe68FTqKamohyVJXQHjXePPWBo8cve1F",
  "key45": "5Cy1feFTpU4JdcPH4dwjqg3S9d6P6GRAyyhfgRrXNKQpYfAMD71oU6QjajCoTyXWXPks1AxsLXcFYxygQvyNXa7o",
  "key46": "4KoMXnPqA219GmWzSAdjZ75un9WhZ7Xj7tRH5bts5xiUQYiQBhxuopUEHrqsh588iV28nCVGcohreT81eBi87oRN",
  "key47": "5zHovxFxEm81HV7USqBXpo9aFmKkCF1SGXyzjxvt1YpkaDivmkapnsTeCYT2GVR2655cTjMRHgeZD84p6Dnpwqz3"
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
