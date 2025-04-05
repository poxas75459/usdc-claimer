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
    "qE1KBGT6PzXDYowfb3Gn4CsZRZwbTmpKPBavUyxjBVAr9zsJbYJy5qvdLSw64Yi3kNUTNW75ymwoAkyDWbxn8hA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PAwU8PgM5h5nLEHVNPRSfgDYTadV3NojD7dj1bfiQaZ39HbPgmy1yU2Ms19N3NNvEPfZS2oKvBCXGpbnyvqBdno",
  "key1": "2vxKPakM9uKDkCk9TS5pDyng4TwcXeZ4ob2egcQrpERxzD9FiTYUhoKz94vryehQuWg3yWYohcQVLWFXXviYBDRo",
  "key2": "61KoeJWEaTXWAvQqTToqKTR8DpgZpYKJZnRiocQvRJX82P1Kj5Wkwx3vqUnjtJTisMfiw7ytGC5rogZA6dvfMX9G",
  "key3": "3qkXGDAnw6diac1t99pzY7DsWyNGphydz6Yp52UcHMwyjU5vE6iuWZxxH9kYzocP3LBs5bCA3GTVc7Pt9N2vZTrz",
  "key4": "2rtsHi61Td9HMgngidYpAWumTJqR3siwVZ3FCtXt6zrARcLbcZ9V1T1o2q4xHBnWEhrgirVjJivdKFqUFR774fPC",
  "key5": "4khmoZ2314d4EuMmXRLSXJwRVHnLSApqjJHLGD8r8kEavBKg2TpFL8WyMJ1rcVHrw5GumK1Q4RZvrhM3frScUMRF",
  "key6": "61LY6gTHirQvmMjsQqjHE5x4gWLXV3dk3dKyMAHaASyMqaaHWCxpB8Bzq9oazmbASzNJfsGFLUERv4xgiHwvNMM2",
  "key7": "5MsTmzc5zzQLQ13b9XVF5rctKg6RFjpGhaysCw8W3ViY4KhqQ23fobtQEkv9qmkoWsjWz7PyU1AnNXrZ7ZYmm1yY",
  "key8": "3BRKiHU31cpoGj7fa86bP2inv7kjzVRCbmcYTrYMcsRbGYyNFqkt1r3skiGdKFxn5MV1Jso9WqE57t4M57bRZBXY",
  "key9": "wKreQFMULgMdGgpzJUB5hGgwNXThyhtfrC3DsmTtC3Mf8GSegXfbrhgFHJat3s2u1mZeuq3uZwf9zviWbnvTmz5",
  "key10": "34ivenmmnpW8FxbpAhBPTHG7o3PzQEjAMmCEakmkBJ3hMTqhZza88a9oqKCCPiMPJa5hanL8X4xSjr7cQNVVg6Dy",
  "key11": "4mwJ5wFCtDhrvCvdLtqiPkYiuVbXiofLnSHuW57EwSqJuqULVp9WtPcyojKbj1DooUQUKDtVojJbMiN9nRr8ajMf",
  "key12": "vz33yHo1S8dPMKpNZUcasQEVvhRM8FMBWN41ckXCL3B4h77izQ2TD6HYajb9zquFMpE6QHvjZ5nBWMqeRMZTGYf",
  "key13": "28QffXE6iwsoLcWsa4rDNjJaUkMc8vu31gAEWGs8g6dsFF62Nt7NPq9X1eYitdB8uxGTECUKp8KpEtToa7EbsEDC",
  "key14": "2rg1cNSgJFo3EQjHfBqadX3jPhzhcXoj8UFZsWfdJafdMX7LYuDJMEbAgKx1s2ht3ANgr5mSa3dt9ujEVT7KR3GZ",
  "key15": "5m3L71nkGPFojMaJQU4Uo1LMFqi4XYTxjmhm4g3zjiWSfusFmreR5wGnXbXavunqrmxC18tJZNpx15zeVDme2Bph",
  "key16": "4LRGPm2FTXGjQeHc8tjQ8bVUDUWbSFqhxW945f9hvL5MsGzhs46N276ExGoJWpQCbLHdqzDSdu23cDy7m1UJftat",
  "key17": "XWhofyQUXKwMaFEjyWD5566izSWF9rfbzj74tBukRVGVB3PWiaYZQNLGvg1mAJPRuM61cb3o8wAjLzatuMfMWmA",
  "key18": "3CYgUL4n6nG73dFo8rS6EEi6k3ytPohGiPzVU9rF7BYS1BZCVJx8hkLGV45rCXhTKXUWC4b2PqtFXBy8oEv6TCvk",
  "key19": "4fju2rXNDyJ2nVWzNyf7oSNx5s8vtVixhWNAoS9HUpTueciGye1u3EZ8i5vPUoN6pQpkQy8tJ8T2uPHuR3ma57b1",
  "key20": "Yeyz9hgxoBjVLv3HsTGswaBtELsb5BkwzKp2GZj1o7LuaBfEKtwk1Eyfi64rvKHRcrDczhYYTXEhgheMGVKheHX",
  "key21": "3m2Q8kXDkiwXSWfE1r7FpQufiNAqAb4QDrveemfTdHkyo8uSjph78wcU7Xe8WrXS8WiAPswMhZNwz6cwgXGCgcrM",
  "key22": "8M8chKkxPgwTuWPjf4YgFh63ezbG3RCcFaNfrrjByVR1ZFAdVDeyu93jGGRAqspKDGbw8ruV8KdnS9AHz3Gvat2",
  "key23": "2LQS3LzSrYe9pzbdJ5QXV4McKji27z5Hr783jKgbq9MEhPjP6SK2JV8kPTkh57H95AAfU6sWzPqcNoCazKHjQA1i",
  "key24": "brwtrVbgsmUgqGqErvyHEwCUVX14898xAoxhyuZGz9rb9Xoej7ExufSTCUJsr8Xbjoir1TG3u925HcYCV3Cbsha",
  "key25": "2JmXLyx36mBPHRVg1dYTkGBRTrNAA4Rx9MEqHHTTBErQDN7K4uwN33iWwrRzgJHQizaC7yXw45pZcwc9kqoHHoD6",
  "key26": "5ZKJM3mKtLpk4vgEMLCrQmWXg2f3zvsyc6RgWdaJfeagFSVmfDfz9dBBhBR278Sjuo4bKZV9FZ1NENPuHDwmxGUQ",
  "key27": "31CMrY3yMrZNMYJzbZEE5MP8bF41pXEo8dXBH568fNMzSiHfNsbLEhcqcS5samZpsy8XfZwyG2yCKiMKMTghcnC6",
  "key28": "DSFPEo1URWtjsFPoHc2vDt5kcP1pMXTzsSjZkv1FpjN2orXRejHKGQM16gjyxqosz51j3QEm9SMhdMCTivnwaet",
  "key29": "55BBv6LTwiQM2eiBRm4ynWEeBQZN9vSN7JeAdnB1jW6sMgpo1gchpYqoMLFUPgB9fN4hvBb4wguBwsA2kM5vBQvH",
  "key30": "4urQgipddNb2TpmgSBBkHU5LYPz2cJaEoLRcv1SWeHFyxExeintqizrCEHtMxGof8sfuBgAPRa3Q63oawcV1mzLG",
  "key31": "38vw8M9TbK2xrbufKpz8oWKkbw1CqUHgSDGtBqfxchHjfQgz3ybzWNweV1qUHCWb1onR1eLpFp6qseVZTz8YyVQo",
  "key32": "2QsCFpZRWNrqnQchH3Dn1LPasR88dNYHYBJadtR8L5Zu3V4QseEjd1cF5sDjMKLU8sXQ3ZYaQYS1cJ2sdd5Sau2m",
  "key33": "2LqFGy1HTtBJCCfjjMTL5XpjReFWdcwGwNLA5WrGD2pYiMTufEL55RgFGhSpuwpvjaWn8cR3SSVE3FKDh9xpN9N8",
  "key34": "4kvxwLANJuYwfXWLmNe7ax9r9kHyqHRxSSv4WLcFoW4Mn3VF89tkQCJFZc81665MdGjJeGV8Aygo4zpqRoUjLyhQ",
  "key35": "3AVaRsYvPyaG5Sk9U4XAD5qFyAcQ9yLdgEJRL588k3VnfSgF3kEb9bUqUSwMkUt7QyTxGePHZNHa3nsf2b4GzBMD",
  "key36": "3D45CLSMEBavm54aXw6dDhngkmM25kinFbWimprDyRrUc8AsrhZcFoMYrqnsErEvArdzhsJQYKezSfQpBPSqjtiU",
  "key37": "5wHuemkff4TtEGwJCdK4cuCBcVjoTTSw6JrAtGGEoBao565ERS3JSdcs3peEufGnnGSDETdC26EkwUSDJVghPzxP",
  "key38": "R3dNzwaVq7x4ods4S2HjNXrgct33v6Y9Z9UqCfUj2rGGBJH5RbAG4zygxvgsTETezHrX25ZCE7cnKF25EnTQXaz"
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
