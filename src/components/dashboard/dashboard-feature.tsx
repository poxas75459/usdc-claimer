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
    "5wCu8DhC9eHMqRmu5iDk9eMmcLdFyiqvjpwFKJpKZmUVB7twfADtxB8EGncnAW4CBhT3DTUdj8ConjDD8zRX1Kwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jSrjPmbgiB3MECaezPquE4xWS8i7dwL3iVRz1F4apiNV9cgsHbavhuEmssvBm9SnRhQgQDgKFEJvPSDFpXkTBpW",
  "key1": "46HfyX1RcdKK3mHdvCgvKaDpp8CiPfbvMNfNMhcoMRPKHSf86s43bxENHmRXtRfGzDxhtXgsZj127FFeYXLkEbeW",
  "key2": "62RTKKiT3A6enZTK8Wba2UZFeWTMftdLoCcfPnSbc9kTjA2FH8KErZh7N8wNyHuGjVop6UoPdcWq3FPe8PtjfYt3",
  "key3": "LtXRudErqpi8DxfdG8rq3PB2jjauS5tXJbF4eLssJczFSAkpN71VhNq8Drif5zmhK6BhbiEgGVUAHfmjkzsXJUj",
  "key4": "4gKtXiCH7uTFzD8Z9YTLS1o6jCWBduu6SDXEsuBimQjXH3yhWZd7U4acy8WRKfUWFrLNyXiyJFs347SuvScex19a",
  "key5": "3UZ83p4H82Fo5dAC9dXY6aP9ZBcrTfFqnH1KfXkAfZLniemRZzS1YMzJqjCb3f8LSB2ykQqNWJjatFXiMiGn3mxL",
  "key6": "2uZwn2NBhg7Y2zQ23NtkSjWmrpWXEiBtSLJ84pBpCuEKu88jd6RaT1pB8xsAgamVvQd3uc9FJA2v2BvEnyJAMW9N",
  "key7": "5k5QVBepzAnSGMUbq5nz1wec9mKNgRb8QTVDeZ1UMqz8XrRPH2eqjc8EemktC5V7U2tvzjtdX9yKLyPqW3ZYbXxT",
  "key8": "N4XftJarrUebfVKuvv8AVxW46ZYqyKp6gpfvGfMeUiuCsTj6XeSD5U9cSN7gX8kW8QVGzZnBWivQBMxa8aGQhwK",
  "key9": "49QyRa3NMFCiMDNHUt8YkFbADwv9gyimEGuz4P6kcsPKqtTQQnpLjAVqYJU4mPQsJC2o96vUr8TxRYp24tVPrfXY",
  "key10": "95c4kpn6Ygw9jZDfXm24CYR5knS2XwGpAJdNosYvoLoVLBkKMt5xVunK6VUxuDEFibqfXCPnPuwACaCZA6JShw1",
  "key11": "LsKN7nVW5SX3LU9vJv6dA5NYg2DKxdRDV3m6hyviZdbsg8Mrota4rDVc4T8CfG25ZqaGG8bzjWhZKk5Fxegpjs3",
  "key12": "2vGqD1ajdK65WQC4fJ7NMtiPWcg3oYQHvLTmkYmv9H8GYWq9X5A89esWFxyDEL6CmjcBhPVPFRVTJE5MafyRCo1p",
  "key13": "64tveBNSFLW9wjYZvzRRx5xxdo7ukeVgbkBZV1b5yURNLbsgbFyt4VWN4zfooJy66kcZoyVLTxN99PXqPEqX9B7w",
  "key14": "4xbLgjuiqvt88mWJ8tub6VZTajN4rZif2bK7SnmBQtRtoBtst1eWSRtGpMBZHyxFJyk8gWyuLWp61upoQXq2MWJd",
  "key15": "qSvj6aSTLACQAiQq1EzgPKcrUUKdF3okEeZ9YDzV35kayo9NFijLnPmEECS22DcDrJwTibscsmzQuSUZpvU9hRf",
  "key16": "2vU9oxeAZT1R74sqeQEKpm2iPPwqFXpTcehsr2BhhjA5VYXb3imHYB6zHc3BcsXK3kpHueQykFKQo3drxV2YM6te",
  "key17": "2EpFfqHhLvFtY5r1cg1rWxLoR9rpA9p7CXx7LV6eiEeDJZw2vTRrLUdikBzVB4oAogSLyxjdEg3mRMQUsoxzGnFM",
  "key18": "L5d5gmCi1svVr3Mc6vHSc3wQD9s86kepzHgffBUjagXDDEpuCE5LhznGouH59ZGVAegHRPwXyWn5TFTbJGG88yB",
  "key19": "siWtzvRi9t44vj3oJxCRRJZL35t5HLfNQt8K18Uym6WmvVBEUdNvWgarNkqBEE8bG2gJ5SKDf8FKefVX8eMXvgZ",
  "key20": "3PdtLz4Awg4iB5q4eW73bxR2XeM7ffVRhX6afs3BoAnm8MJGiqYwKDNMcCDrMr94cJ6NaUbGDEjXgcVViSd2CkKV",
  "key21": "2nReu46hwvsQBrKWqxRbE5qcH4TEKbmBuitHezzVp3zNnQJW3Xgywsr694iJHbDexK4VqDfzt6YDpzsYdHGeUfsy",
  "key22": "3rxZPq9PqvG9LX5awSiKrWbhb9d9mqDd7QrAkaK2jrgdtJgUBbFYwhrgYERe26uPFaV5EjYN9M8kRLG7es6F45P7",
  "key23": "2USGJr33K7tXmscEkWTWfdQpqvfhUSmbQVaED9Gmnc365EunUEoWPbpdrenhHPUzUjkVeDXGuiRJeyp46VNEbALT",
  "key24": "H9FzgdEzVU5anbocBN5wcEDhMz3FSLVD5kUxFMHBhJHX5w8Kmaw1RUHhtjwCwXLXzAc3vByPB1x2nVQzUBiD9RS",
  "key25": "pL89dKdZX3iPXxZkWR1QhZ4k8mLL1RXxnC1VBVbbCHwFPZJqL2dfCVMAy4UstySLSUHpp5YUE7CsJ1SeGW6uU3W",
  "key26": "3hbVArWJWfifuYpNx2VDMkd1wRMpk43xi7uNsPtboPv7jcfqRYLPRkjVnx4WUXPRDyowovmF6UCFV8MuJ8kFKaj4",
  "key27": "3vtgta1q9ixSJSjM8hVsjT6K5qTy4SNQJCP35jBoFhfsgf4oT5Qb4XuTk4zzzUxovG3xmAuqbctEsHhSH6rZWeXc",
  "key28": "4p5Da52LHoz7K1nc4yWSDos8GZ25fddmE1thEMfi5dQ56QyMcSBzVfdovqnHGzv1x2VCEBEkD9e5NbrqCLA6NnR3",
  "key29": "Ykuf663n5hLqfDXFkbZEPguAtR7u3B6XjfoX1uN347KBVSmrL9CKKBgMrtGjNDA8K26mT2joYBhTgqDWGUxyJxR",
  "key30": "534yKZNKPj54FF5J11qvboV9xWsaMtwVvMNU5Mj9zMv6txwbsm8iJxXDQoVZVAmwZzYpGAbftMp9FU1NnVDW9UDd",
  "key31": "Brj2diPV1VSfA71aZTkPyL4brncKht1huBtHs5ufJ9tZA7SUfj5xyDWy1HdjmFAGFV5yU6ANGnAbuQu89iFJ4FC",
  "key32": "4MsZ6d4aCBRBms6ZXQJrh56LN1oSWZPRU25TTEiXgZrJPDiovxuDpDDUjkkSUJR9Z1N7yGQ5fUe5GxVb9Cn9nuEa",
  "key33": "4kqwt6eiEuVTMmGXMmYUd34Pue3Ue99MHdY6NTiPQejG9MLDFH5YXJY8iNhd94mybTUg9e1VhvU3RFufrXwqZAhA",
  "key34": "5UocGkq1s9uQHaHQiQzFiMonEescL8Rd8GeGjaPyrZQY5kBiASCjMSZynNj5fNegGMm5UnfzM39tdAkcRx2RfGW4",
  "key35": "4YFeg8ghx3ejQ7vMnq9qrRAKXPeY49vsaBfowFoBGKPLgAUjBV7QKe8hKPtTy7o2VCiJ3HJyqV8Vu3C7G9dYyyzU",
  "key36": "GcPuz3Fe29UGnrzwE1pGSe5U4WLHKccxVQnqBeaEHn2nHrZM5eGMPTsc8wNRDrbtCzgPsu15YPs3KCq5ri9V7cn",
  "key37": "4pJeAQjjCPNJMzBcb4cJCBhXsjvo5qLzAYuereUcFt8aJZyGHmxaG5iQ7hAaEHe5qWSieVm55zNTudZ7qmA66yme",
  "key38": "4kV2r8g8HpBfggVecgHL32gNnDv5K2fQRf1BMU6vSEc77vGkg46C6EYzHdiriQtTFDvG2VBSvWj7w6Tb53upcK5o"
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
