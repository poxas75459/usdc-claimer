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
    "3VGQfebE5qh98jMgK89u1naFUCsk9K548L4V9QkZNQ1MtjH7YfuAS7j89dzTm169XcpYUPuUMWREf8HUbQQxryGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pi1fYHBKPD5fyCUWoaShCdf7Axfiu4TgGf2JGHsAE5V6DKSmtimW1iuUrHa9dHfmZTRP1fyHBB1Yfw91DM32vbz",
  "key1": "1ykCjeUgo43ADkkiHiG4oKyHGu9PbTCYRUYtvvWwTvG7JUC4kxifYgQ3ZLF9yLwtSW76k1GG8R1n59a9vH2TPVT",
  "key2": "2bMvT6Tvb7dWK3xujdgqAke4CCmTynGcwKFeYCkJNtSX9fy2YTWHEokhcjw2QKeKfywZPuNrRo19pa9T5SAARois",
  "key3": "2cbj7dh3QL9AhsDCqy4whcm3X5KNCr2hP2tmKpcTT69PMNEX69hMdfDtREbyCgRR3zQAVXGbzyHPVPdAvWB4SSQu",
  "key4": "2WBHPmo22fXb9wAusvr6WUV77MEFoS3FQUgsRxLXsmFYUXxZzuDkK7uLfnpCdGhCvpuLwcJmSCkEW1cetcQWgxZN",
  "key5": "4aBUtNuRKcU8AkhoKhdd64VwuzZUgArc13iNBqqSWkT6USXwXv1cLk6pJVDYUtcK37BcxMZ3yE828U9zFHhNrFFb",
  "key6": "X2phMeR4Pz9Q7UPrjKuywPVXdVKh92Lcs1FqXs4G7X3tR2WQWEVsneK3PQr6gC8GpnMWDeFCCtLvKkjAmdGxwRg",
  "key7": "2yb2RX6sakG58LH96obp5DPHtxx8Ee78RoTMxD7NZEkqbm6LGiZcytKNxqv3fNbNeXzpspCtjaMLiL3zcLejLoQ8",
  "key8": "5rmzc8EjXxT2SoQj1ESXcTRqN7vu4ieW9SFQA9ZKPvXfB4AHkEsRtbRHXca1B7Aa2uLkHw8rSvi3g8cvUJpBQSDn",
  "key9": "2uidgcRycSN54GYqKRiq2EPvTDf6Fj5R2RFGjESycvSXmqpWH1sSZKDat8mQ1gR6TDuhWbbgQxv52HV6BtdjgVCK",
  "key10": "38ozqG922FAEv8b9hpWPwHJvynnsV8KCpGyoaWPbMVYfPHxiNNjCxMM2gYzhorTrHHorV6r5E7aAA9TngBzXq3ZW",
  "key11": "568SYvpGDp1wNQpWT1GGto7pMaFDcUJpwPYrVhFHgcueTB5ZoK9YAreqZPCqv7LFB6JbysTkpyfa6MovooEgGsWa",
  "key12": "4xLpgaJ1QxHH6pCtvoYMo7xUJyL87BWyVirNRADUsPntSz4vrLeeUMsEoq1YXRDkRACw25vAh1EqkhYPTTY6SKPY",
  "key13": "453oxC2oNNC2uQj4ndLmCFAcQ9HCeYCYkocU9D9dqHuC1b4tRtnEruFQACJGMPf4dNk8QwDAsNj8DLYCqYZZciCr",
  "key14": "eHrCiPGs6buDi9qgAWH8LmkFryxbC3VsMcDsthiCyzX1qAPnDEYLfPJUJSoAoAThWheL54m13XpUVsuVwVvzFdG",
  "key15": "HMBVFrnJ6Y9DM4QuC6ai5YA3ceYAwwS7yEcF2JKMGFcFKpcf2tDG1CPoW4vGxUhoKperGaKKFY4ycZ3NbDkh9wK",
  "key16": "3i5Bhj6qNSxgmhxVgLVDWV7JvSYjuRPk1F7XNUXLi8NVn5AfkorLNonCnatCbfqHoEZFCLEusG1bkRcMD4gS2Woa",
  "key17": "673tbXCDbadjphFsH7ZeYMc8zaeTuWhva8ufcUy22sGVuLwJyfpg4yjMadF6c1ULECxyx9VHRjnWGstHzyMj9XyT",
  "key18": "Dv8nnr5HQuX5CfQ1KZoFikwyH5qoZPbE9WeT5Y1Gef3sZEV9Ji1duXu7QV4Puat3Y7kFUGAeATs7FCbs5xVCo7Y",
  "key19": "3sbPgt3bZqooWWAnyvV9fLF4cSbueR6SPQSTcvvp63BTeVG3gE2cavFpMh4bVUCt9fCSkKLZHyjgg4igYgDty5wk",
  "key20": "3cEEYUNLQEx5hUCf1pNn3AizHoLHYeg7iRiikXwxHFGKAfxzUeGEgd1hodYBFzMiifu63QTHqcAw4jqDPajGB7yc",
  "key21": "y5z3Dv6kApzRjkaUeRZ53bzFSA6xQ8UY7Vvv8oCi2nYg4WjXto9j6sE41p92gCVmx2UpH3BntSuRvGwsByNwyf9",
  "key22": "3bgRYb3dkG6Ljjceu3tbCPJwKixPLisRufMNWty9xhbcHfKp6HbUFgZCgqAtss3c4h3Bf2FJtEigg528X8A1Yr8F",
  "key23": "5Z1FzktWGkmTdMhJp8YysfzVryq5dg8zGwA56MPLqsqcmyCcW64D1ptksCVACgUJZcstmBC9UzmdYWEPddwDLudR",
  "key24": "35mPEGoWEz1GxsfFy14qXiGzRX4RyMJP8AJtqmyTeE85LpmujrBFivMa1FaLRFDT2SjnDL7VxnPK3B8tbFpNj9Sx",
  "key25": "zEdcdiVMtsC5z2nTrGnbxja2w7WE41pcjkYMtmW24bYMxynTBWfTDw3s2EkdRp5fuP7TXv8LaH9eBUqdd91WMDw",
  "key26": "2VnLDPibr2ChXrNr91JXieQFLD5DHnLdiotz5tGM7z1BAQ8pdMeXMgPji5hZr3xpN1Ci4St6HYQMq7iZJDgvch7R",
  "key27": "2xB7fWfc2qHm9kx3DbZmheT9hWHAojT64GuVv1QocrowujGkbkJKESf7mbGM4g3SpTWCockhWCrWM969ECP3jfdT",
  "key28": "v6QNq99oqkLW6iZtfFEpxMGkM4KjqbJR9woBfrJXYtQSRrfPB3jBHtECpiJkyp9Zg5LZvN79ovKf9mYb79m3Ufm",
  "key29": "CjzVb6UQ9PVQFkFWbXZa64J2rDYGYbCDaAB9DsM47cXEXQx7eY2zBGanLNWzXcgRVMeHnH7LoU6B6diQZmuwcLA",
  "key30": "rfJXogf3hpsQ4PZhYCpwMnoV68yzxLjJU7rYeikyik8caJypR5mbhUgeQ8ehV7XrWBXHxQ86FHWzb2rQTo9SaUs",
  "key31": "32aVtiZ1kEkdtcuMfyuzy61bnRfREoL7Nx4ZNuQrKQ1DenDw1WR5yAokWiFPjFZj2dVQVMAem8oCvyWjoFnyX29E",
  "key32": "3Lb5JidG7VEKNsi9Z4dnyJ4dUP7Ff2eJqk4GQLzSdRP1pfSbPMx7X2rgx6n59p1TAkWJmmhYfXvJSwgq6iJe8KV8"
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
