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
    "4satbNz8rmh5nNGM2poBWXcZMA8o5UfGDxMKu9ZsZafZY44NZuFPSvzaFwFvzqi4uVLo6ZBLXFER8GNz3xoZRzXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qR5CHJb1t5SacEYnydaCSMp7awpfB36LCjPswJxNMqtrYHZuSbQQm1M8jvhtafE5MUfycFPQePnMMb5uqL8BxPW",
  "key1": "2zc5iwJ3x6qhBYxDk3W26fVg39qqaqihn8SkjZMBJhMWs5jK2iy7sr2dUKUG2Ycwmp5dFGTSE9EAt71SLHACWESj",
  "key2": "49b7fRXBQdkfkdmbKGiymuAmeAdV6z1YdfZ7eZNQT2jR6CAz5NXsdDP13eAXVaq8hhyW5caJkwBQ24t9d5ioEmzB",
  "key3": "3MWEybqkjFX3grQ6oAkK7LQbkxj4p1WRq4BYFCTdLmRCm2veCDdtFpuXMnitJCULHVJMGPRgFGdBMU8s715gsG3X",
  "key4": "5D2WxhGKkPFh83q6TfpKhdhped8e6vgddAvjz5Ex9TVKXhNXXNEqaLm3v8Zub7icLG6tmAnb5DhiPTCKg25yUuxS",
  "key5": "5uLHYGFyw5ngMThR6sGBiBevMPXr4DVPaxAbVbBjnsBAVSPHyRJjkLQ7TXUP3ahVW9xGufnNYDMHieCG2rH3oCHf",
  "key6": "3WwFodyUBGWmvNrUsCxrr35uegbqPsCc4Zhwk1SXudNyPg1F1ABnNK6tVzUGfRKGoPK87NPvQK5a5sS4aee1Jdyp",
  "key7": "3mPqfCbseMVRXDq7V8Kx8CsLodRbnEPthGv3eQ4vuXwAMGwUS956sCyxpSgFgur1hRUMzotpaUpqRu3u2vWAu4Qi",
  "key8": "5cuL2hj6s8wcdmLcWRWq8uTHfhd2gz842S4RapNR41P1a3E3SMFJNTPx5AJnCkC84TRkTjnTBBGDoaErrX3Azs4Z",
  "key9": "3G5x1xgCE356hhPwBejiCW8KerR1uqu6aknSpfuCDFLFPBgwAQnt3paRzTMgsrH9s1eSyMmXU8PqEdPCEU4Ryjjr",
  "key10": "5JdpXXjvjnnyFMsrrvq2eqC7uLZ4mRVsrPdo5YUmTv5AbtZzXG2YLsqcNNLnu1MyosD9jHB2wgefPmzuLa2HEhFQ",
  "key11": "4CdC6yGbAp4iHJ1pX1n27wAh7qnhNr5UHF1XDEBkxy9oMhTXUDB9uXmakjyTS5NMnFFuKncVEqaRyUaExKExz6gX",
  "key12": "5JXSQbVUqmNJkL75AYMqBEaoZzxXrMGXW5x24n6S3oj3PKbfYNi8hQfDvLjPKrrdV9dvchug2hYMFQ1UdQuSZfgt",
  "key13": "4nSAaoFrKtXzgZgodsQFh6SeFkVEsRLYKt8fgQ97GGxtSMob2XwDYHTDDn9jQZW4XbtkkcBbQajBEoXLu1hVxrUk",
  "key14": "2oDhm4pUSkrY6B2VoK1cyDep2CwYGu7kebyLfDbCSsP7hWoYSAgP5uYapVtvxqphUz7BUgpbxZTvMTHvHBDrSXeF",
  "key15": "2CEz7SK64imkdHfNc2yUJAmXnrHTq5FakiwHDRrRqvy45mj31y33KGMvRPXrK2xZCWwjm1GUWZxqYotJ6X5ECk8X",
  "key16": "4w6Eb8bVijpfgS8jBfN82zZdfGUqPmHwkviFxn1e6UNm43qwKYx3oxB3yct7A3EwGfQcgRNvVunhHSpa3y5wMzkc",
  "key17": "43u9bUEovyAUG3Tnf8DQHm4k4jQgy8EVTW6anxK3TYqjAJ2nr74p5ps6ei8Y8Ebzt5Fb6VaPTo99CJLQJ5EWaWP8",
  "key18": "YDw75rEKBmyWCGb9JchfqLVFcRzkyVRoHBmbq1t2KdAfroVhUd6sKg5ezr1jWHypgfawfHW3LwtFQd4tiXk5cmX",
  "key19": "PvtcyxmP1Wa9WtV3p8otaS2vXW6aEAkDqnoCmTFG9NHzSavJwqq8wdSdAmmw466MvJW76HDeTBGEt7pGUyeJu71",
  "key20": "5ShBtjNvbj1V1tUZadz59g9N5GS9cxjpAsXQhrG3UT3n9ZJB8Ab49sC8vUS2XJNNnVGRhfU2PxKfbpdVeGmf2Umk",
  "key21": "4jQBEtKZXTQxit6vnNKedEMM9iU7VBqWxrrU6R5Y4b3bcGu9wLy6KTo52NwNerRLkFawi5PgMjqFwNLdJZG95MUz",
  "key22": "4esbCeeNuMr87pnFkiALCfgEoMvEKdo2jbnydWAmmqBLKr3MKUJf1yWQRUAQQXHW8pHVFqTnY6ShRRjmBqTLDBEp",
  "key23": "3bVhv1s6qJz7FEWsWgqcAHuVyFeXkPWoFz3NCoN9FA7oPQSSfRpreChZfVKVisqBdLQxYwjkUtX3vhCLaUD28beY",
  "key24": "3ULW8R89x4AvfzM8AjJNRbzaKoWUzDudgcsxExjCsswShp9KkNt97WHUeiRbFx1S94pzr3PHWTJH3n74oZZzQTCS",
  "key25": "4viH84oa3sSCnMCTsTSoGwDXc2FgpyjgzcZ25wSjvQjb8ShQUVSG4GYgiSY7hh6zS3dMMTjBDWG8PEm3eNYgGe9r",
  "key26": "41gmRjkoZYXTBijH91qGb5pbWwJ5bBVbcZHo1LAsxRb59xEffg1FN8kHeeierkr2fuPscNE7dxLLk8pVHRa98zeL",
  "key27": "5VW8DdrMbXXkTFXcgC9oSC24Jy6qFDHepWKeaRLnPwCLRDiDvUXECfj2N2QorPAHN3nFHWb7Hzzb5SDZqgZF97kS",
  "key28": "2yhaxRpJXcdwXjGGyHknLz4GrAfSjx3D1QRedYQzyVkoaSFDuWnApWN1ndaTqBD6BAWE1rXGsaknMfZqUGyhsci3",
  "key29": "2ufZojSHh5VfX4PdHGji9k5Zo6ZTvjNvNoFRfbCTMSg5HX49ygpe2KbEV1FtCnHYYaX4k3AFQh5jxmzqBSy7dxE9",
  "key30": "39SpKPW2QZmGJozK8uhoGStUUAJeapV2TwjSWM7bErskZpz2R368KDDa5MLKz1ZsGKddZhKEzvSKmNiDbuUguTyr",
  "key31": "36h1D4fRmMtFwiR4zHWusNdepNVQP4zEesbwczBaS6okH7dCz9xGKU4rkoBProVCpTLDSsVt6Gsf41h77xmPWqJA",
  "key32": "3v1QuoZbDXsujSvNXkYhF4btSyspdhMPmuhB6htCcsWK8pZndXWY2qvDZcuhDMyzL8gUP9tj37sxAdd8LU9h41Qs",
  "key33": "sbnGAhajPsGmGVMrwVde1aRRCY1PDS5mgUd9EX5t85xkfdjLCPy243wQKV9wyqetj7wVnptCMc8kyuF6VuGGcFq"
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
