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
    "5LZ6tbQ5933bbiEzLtN6JTtBQPa6fRzprEm6JviSTm3fx8XCLqqHwHUQkMNaFEHjTWYqPRbXJehb4gJ1N3vkmzjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B9KuJ4YoxQwHvm7WZ2cAohNa2Nf5v1U9ZUygkuVTzsXqEJud1MX9wLBK5QYiDX71hLPJBV6r41Tzp5hCfoAWphd",
  "key1": "2rGSeJs8MZ2yMfatTMhkVXBpmpaNiPnTg5SKPRBuJv6GJ6VnLJvdtJi9XN9UPm96kWZBGsNnqok244GfQdeH9CCf",
  "key2": "4S58MyGA1Lfzxp2VFhshcm3pU4Rfca4xLCx6n6P1YtqLFjvL4E2FhiT1SwQzvph36TkTP2RJosU7PdGZZHSfKSG1",
  "key3": "q4d8wrvxos4CZ99yCS1JxJcJPVZeF2HB37Qc29xJtxrrfqowEQ6JFeHSUB4VZnzt4MYPr6GaVrEnxgxKdQrypWU",
  "key4": "4hy5SMRLGaUsBeBL93Q8bfEhvUNbXKwfKhkMAt3ngBMv1deM5Kp2vUa96D7ZeEqRcjACUjBTSwVP3NA6gCSXsj7g",
  "key5": "5qJwQbBSB1fFu6U4p3v3nKb6an2AFNFtMQPyBHRT7DeZZZr3bVWc6FeV4H3VuhdVQqZ1x92FjASz4T4KG2VecigG",
  "key6": "26PHmdLHGjeo6GXSM8KrCys3R9fbX3kKn68ZzKfc6B53jQw2UEfRm2MiYyi4xwbRZ1KcGHsfVNJ9Pws7gfWQ5gba",
  "key7": "3TFdinAqbcDVSBnRuue1BGRyZnVwsyo8FrQuQez8RshRS1QvGNWxoVieNLZsp5YQ82s3ztGtPVmS5cijoPLZGnVr",
  "key8": "66ytzWjRyKs7mFcySA7Z4MSB1wvTcwKS6pjyiwAKTGwNZdYfjUstSfbPvJ7eY6ef33Srg4yeS2ecq4LMvRxcKtj6",
  "key9": "3fM92rSCxd1fm7DcK9mdWncqG2aj7KvYkECAeW7JX8qUWq6D59kuCJCaPzW9QzhkWZohoT4JQZUK2E7vntUnewcU",
  "key10": "drZhTgWj7foAredLiyTEH9CTXkybc1Xj8H9bQF5edWrS3pJBvB3T7TeviXnmFSCnz7e5MS8waacYbNuB6jt4HQb",
  "key11": "4aXxu317VDeM6VzjVkcyYskt5EyGdH1uM7kevW5Wh9BS84xKmT8EJMJvUzEjkb4jcgRAr5MvjZCrt4UQ9Kfcrx8b",
  "key12": "2e5wf8poVUfTQBgsWvqEBY6csKShKyxt9yWuJu7kVRK6kFB5nx13jPp9XjUqaBveKMzT5RxNem1QDH3V1v1SdTD8",
  "key13": "2kEoTCzqaRNaVkaKVdX4qHkeL5E27KP3Sc4TpUJhp1gY9kbrNK5bXFuWfAYBA6kwg8utkcsXaXKnBromerGkBC82",
  "key14": "3ndjDiJWznnRH6fYf6g3SENPwE9K8tiesVHrF2SAdWjK9csZ72wBdcu4Wta24X1ebjEFwfi5vLyNPE1xVCZhiMiz",
  "key15": "SX8V3oLFcR2dyqfYuyxNgf7u4hNLPfRQWSS7ELHYBnac7sLHHRGZY2WzXyvdwkQvram3oTNFWx2UeuTiRjyMBMr",
  "key16": "5EWCxnnACENm1xwk9SHex4WFkb5agmAkjXU1SCy4aDbsdAiQKvdnRMEHAVQQhe64kw4tNkyxeZ512f4kW4KfDpMr",
  "key17": "2RqqfQ2d3rbcv6Rhs8FJ2WMN99GyJTFjAf67ELx1Ti7G6rhhRmfnD5X6Dw4hnMB6g3Atd8frkccXf4eE3tifby97",
  "key18": "2qEnqksQGTisxEXLSRTWHsumDz2WyNGntLwRa2RuhfzCKDQtZb4bszGBknJ3gbWD6sVW6goEzyc61hsJvWzD1sFS",
  "key19": "45LQx2KCPTpfrt6zf4X7xkC8BG8sprZGLiTbbhxqqL16YEdJifRRNzngfpHNdXwoFfQeWxa8gT7KdY6RLbEfFqXn",
  "key20": "22TH2e9oVV9pGyadHhCPwXF9L42PG44p3i3JHZJcr7mQGBrLJW7Pf8wMVW57GcGmH9USuQMq5whirS5pmWufhzHL",
  "key21": "3eX4yUVKhrXrYZKNFnSnn4gQh2JuDHoLggCpFo5HFbzLoZdbnHpyW8DxL1KawN1P8YRS2Rj7JVeXR4duzaMKyTpr",
  "key22": "4Q1YfgMDs3wruBvBbTgcqpAt3JxAQ2GqzkkPVd69CpZewXZxnuPCGBANPGMmrY4cs454r5v21RQFML8EQ7GPWbCN",
  "key23": "555iR9WptDBvMsQzeL8GnKLtTcHDURiukL6CLcum9BnjuKRgxdRTBFCbv6SFFKQ53TuoCt33w5hCefTt9gRPibiz",
  "key24": "3FuLQj2znXbPzTU7HD8zPWApHXh8AMW9LP9Qv8rBD6BGtvRGvrLYPcnBaDegCdzDsJNojt4iNV9be6aafWgX1TuQ",
  "key25": "3Zvp8f9rULar6FCNgPgrrKCG4BEY5QbfM7xWUEQtJUchi3PE6ec7VAGTVtuMwwkcKWjDrCfY1GqBUt5XEaAYPxTG",
  "key26": "5jhRZiUbzG5UJjqWaQEehftQ85wcNuf63QDRHdYaL2TuyHozgWUnymtqyD759vhPkkERU2FAedaErPe9rwWf1zGm",
  "key27": "2ebAijReHUDyKPYRWZ2GWAKph9ZaRCsNStYryMuSmhnEAheosu3UipMAcUpoBGeMwuLacDVzr2EnzymGXJWXix42",
  "key28": "3swduHiUTtanyoFoyMwaiqQzUKYA4XuLVtag88KC3bhqv6LERsNntCLSfzHsx4TS5FpTQkeeSpS9C53akAN52py8",
  "key29": "2g245r7tz3WKgh8KFUUwo6ejjdaqpBioGEHdce7y3BGu5oPvuGfLCatPuC7yWPZmyC9SQwirsnZKU3Z5sDh38eda",
  "key30": "BUN1XSExU1sP8umvsU3KfkP1hPT6dcMDtSThfn4WUGhKBwxSk9EpFndk7N5c95YoTXY7ag4vZecTrfyhvdd1Ce7",
  "key31": "59AFyQDGjQzcJ2g2m9k5dtkZYWAd25KBVfrLunVjFdgQegezTejNLGsw3Y5hVFJPFBxb8jpPiooGGVkN1tLnPid3",
  "key32": "3ETnH5Yd1LF8fj65jwmqb3AMmJyGTVegeH5pY2msUhnutrBFFMGXxBkZSQn42u8ehNKs85uzRS5zMZBEehMwbHjg",
  "key33": "3iJ2Q6wJUZYtPPLeujfTEJhSKYnjTgq7GqG4cibUuMRbT5EVDmEd6BjRgqvFqwbmbeu9BqzVs54paG3x2QfEMxsW",
  "key34": "4ubWbQB24Rq4GwhzzC5w5XPfCRr4pYDNvyoDQWKghUAkzvBnVVRKdR11iYcvPfRdEuYUKZNRoWexY3aBYUdrSiCz",
  "key35": "2AMvpCFC83D4Xq8yUR37gwUR43E3vLeMT6bKC7XnLiVHy7XByYVMkV1nNZMSXUwKAKJdwsc4ocu6MQwNTuiVpoj1",
  "key36": "2SyfAGMUPnNczNZ3aTTJbutwDx8TyRW4jC4oEudkJR9Ksn6o5ULQsoe49Ppxm7mvcuoZAAxVMWneGJA7qMExtgbt",
  "key37": "2c3p7F9uCABsZg2FH5dq8UoqaH4xngYBsw5TqsGGCwsmJZ9NWWjn857zRQUCPHn7CN7An3xeYAtYe39u6No1o2wQ",
  "key38": "2k5GjiVqZoJroM1sfJop2zHRF8yQoGJ2k5V6fEqSyKjji2HNER26M9TBeBWsph4qAUn6Fd2MWND53vR49CWAMYPx",
  "key39": "2EdaVYYtp657E6iL69AwuVE11RqX6hQeKy9BoppXS3nLWSrkXcSDAgX8C3yNzDs6YFFe14spWc28ayZU19BGsnVq"
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
