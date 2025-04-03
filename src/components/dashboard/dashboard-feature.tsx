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
    "3ZU93HYHAaBhMJifAg3fHEqwxNWkNhUP5PtMbSFmLsjfQAQdLBPigP9nJGxWL1rPouoLbgNmayFdhAJBpR6J5ERj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PuhxTzVUENgpHixwhAQeM572D38s4zendtm3HS94NMVpHwUgn75njBV1pMdF69F8NCrVLL9NmFSnf8SJezeqaaz",
  "key1": "3sMo8qEeGjecMmcnmqEE9CTLGSTsSjkBqAbTbDKswvKcGAmndNsgmQXwVKrErzufaZfFQRw9WK1P9oTvCTopZzKR",
  "key2": "2884nJpECu2cuAw5ozQVKmpvqJxj9kxomR3QWo5ok3xNUPPJeVi2T9s1zQWLsAeusX5JuSaPHFGpSWQgKcyZQSBh",
  "key3": "3HhcyN6VW1M8vumWjC3KPssMT9KNgWcLkq1FcYaw5cWCMSgDUbfN16xuB6Eh25pgAQSBbWjSJZarerxMVx6SaUoq",
  "key4": "GJhevaskc4AUvrCsNUG6U3VUpd6gVBMcQR8Xrq8zNB8MEo8WWyxRiPr9sF5ZdpptFukSyk6L9QNe5e8799jhzEe",
  "key5": "2sCH3w5yRjAzgZABAQCEARDE1eEaR8ptCDZXmvLAyFSiRUCgfR217b4jfHuLsSwhNcYS6J2qhrZEHetEGGjz4gM2",
  "key6": "3dkoSiR81Zoujnm8qGdsmztFAu4XnJUytv7rgsAKMVVyo9VaPpPG7Ky2C3bQ9Sc32715oQiTVDB7h1gUmAFXxwht",
  "key7": "4ZkccFcpTQS27wjDhZwAk8gkWNWvbdPVqq4APbnKddbqM5pBd6KscR617ctLa18Fmo5HLLj4uMjCtGPGq3Dm8XTR",
  "key8": "62CeyxiHYDotTQcEqK5YMgfQ81WMTUC76sXwW1cTM2YpfJ3dHBPp39CUfnsUTkzb5mAP2XVLUcxkk2ns9seZM8Pq",
  "key9": "5r3G4PrKad4ZWp8DcZ9B4FnboX1kowvMeMoFNQDjpAfsn4zc82jwad83thoPqsfCxtvHpdmuDMUi4izwEsATiFSU",
  "key10": "37YTEzxnKFV4d4Gw42a3KDSyktUDEEPwL7WwJNiFQryFQebzpCxje8J3uadDuerCTmU1odRwTHxK9GeTFPeMy27E",
  "key11": "3KYiKc9xopmTMGXTy2gPfKWJcctLGm9s5P5F2Suru79kj3prYPKViYm3RiurBnuwsPQ3J9C7xQcitFh7bps9XbtK",
  "key12": "4jzh5UL8tJehWVrtbFCCgEaV27vHoSowW5p2czf1nr36g4jfJGGmQxPjYd2vzLrZKVMWqTYqacPpVYRRXXRQpT5z",
  "key13": "46gLH4cQYM4uFdyykmGkKHirWHrZjJHCT1QGnCYMKhNjjsYC5XRj4ojHyYkq21nvuhZLE5C6W5aRctdxXZFxKj3x",
  "key14": "5qHvQMzchEjSBmiot25u5JBddaMkd8qijwHJKmrYhiJBKqNayYPTGgkMCXUs6uDDPjd8zT5aMHg82uDy5T3e69Qo",
  "key15": "4jwV485PHfpYsWy5oa8YC9gqjGpmU6zvJzT7gGfhxnPBK1Whz9JqryMYYbFeWzCSWouwCX3DugubjbJajzp7KEnJ",
  "key16": "GubEzFsi4eYnCsvHX9twrYP7qkf2pweSqtZPnEpxVSdCsd3zEnmqGjKgq2GdLksWZytWMUvsWYmFArUpDuiU4tX",
  "key17": "2GBiFULiapcAzKJAFAD4F7uBzXJbDtW6fgF2qXWtmg5oeXNzTivBqqBLhjiQoz6cTGPhvHZs8snnmxvDiWDoJWwi",
  "key18": "3kucuyMgwtmHRhaEjkgEjEuQS3JZnReNCHur4pP2fbcCVrtNQVekczFqQb5fkYxFd3t4nmTFKmaFzjgccYwLph9e",
  "key19": "LstvkVT19QV1VzYjhmfx91rRzDs8546vmb7gv9HX6gkSVpn8VrbaGNiHn1rkWLpNngDdk71XguwX7CkFkUMQ8UJ",
  "key20": "3XxzWKoxRP38ccvh1Y3Y3peewbdhWkbiLiJvqgiN2BuwDCzcPdY7d56CxyGEicV8tc5UZMJfj8C5ngTr6nGaZjUo",
  "key21": "4BxiCysXwuq1VCB8tPLx5x3iqwUfg3MCDJnNnVgFPmsugqREwJxamFDkuQ2piYBEZgGfJcbH6kRY3KGazdCXAEkS",
  "key22": "ebmfjYWvBioUYnT42f7GTzRScnrXRTVy1zeRDUHLwpsDuSLNGimDthvdJ9VZquUKBY76UZP9asZnazBrUDeuUCF",
  "key23": "551RaL4wc8SeomweSJYU2qYmwbmTUfW2pkFit6SZC91eMjGVJvokBDA7oDypiS9Bzt1FFJaeRnVjuNUY42PBUSD3",
  "key24": "2h9i3eg2fAXMboRosLgqCjFkWC4WwLLVjjrGmTjiDU349q5xGuw9VFgkMHoCiuioKxdf3X6A77Q37DYrj36BSNwk",
  "key25": "5S1BkrhwDc9hBnwAC8zfWUU4QXJUYr3hjUbE8FB7PVfw7t8uE52Ew3CCEvD4sYD3NPv1GeZaNAet3y8ZiJh3J8pg",
  "key26": "24ky1iBXs1vdqeK3VM1HDUt2CcYNS7sQP9wGB9ZN5RsAgxaQBrW9PJ4V3cBq2XEjsbUJiTvDjeAACSEeqqkgjKLa",
  "key27": "4nG1gSXNNkTM7bXtCQEGVb1TkUiyyqKZxY2fPy7wb784YiG8d6Muuhx1GNXqLj6NPy6hYdQ394P4xhdhctqagETy",
  "key28": "3jxNfTN6WwNauYPQZUGW1ntoTyHtdwmpU5Cbc5wGaCf1ozrxhHx9DdaUMFGzKxr9ZcgM1JpKV6k8FEnoHYm9vTaA",
  "key29": "2bwe3XvBBGL2mm2GsfhMhJ9EbMjdG7RJLYyU6L1TN1T2tfgYg9VBrnGYrjAVEyqB2KGUewriBfUPb491onw8Hypm",
  "key30": "58K6JdBBpEM1VqrhZXftgLHsD4GfEnRoMFyGpQUAnNWb9Uxurcp6ggHEkeWPefN5N3aEqhaheTqXmZ6BKMs3GdB4",
  "key31": "2TPEvG6n7CHgpSu8RNB7MjGniQqLAjmDwUY2ZWkecXmoAXFHkDjHGitHANGREaEHUdNbPkd1fXSemRNPSVCK7D6N",
  "key32": "5jFrTCeFtwHAEXyCRDGq9qa55cjTBuuV68XWCZyMjPdNGEbHJsU19sBbbR9GJafj2Zavnu3whtSQ5NdBKEZ8z2p6",
  "key33": "hqNXbLbhtzBEESq9TMnrnE49DvX7wdc8Z1cM4EyMPALbQDJ6WWhGPmJdoS3QHh3XDJpSsydhmbwdoAQfDrWADXs",
  "key34": "nMPiBJjkxDqWurAmukXZo7z7hdAgBhwqKAVZRxZba9i6kAmjUoWLH5bv9HWDX1atNz9CJo3bejVJHw1CLLP5187",
  "key35": "4Xha1nZQmCLUenwThUDb7NWq7eDsuxZ5ftWWK7NpVT3U7yfyWfzFkX7NdkqruChHv4qkBjqewRB8z9HomcYuScKk",
  "key36": "5TBQigjDnP3RggR5oJKqdkFS2bYVVXgmaHE7wT7iBWGnGdgw7aCSCneRqUao9PrEoxHZnK42NWCadHjD3McnpU5Z",
  "key37": "5ssrcfKAiEiHrovC2QULC7RJohMiPWnC2x1SoujbJJUbm3bCp79SiiprBBQQXUZzJqKvt1BaBnLqrJib2Ldmchhw",
  "key38": "2oMm4tnwBNCPgtjv5wVsj2GejhtVALPXN7MaTvVHkMCcx5Sjs4v5jK22nzGHgz7Cjp4uynhhbvWPjk6SNUPbMHcc",
  "key39": "HRtt1ecjqsrbPP7hZ1BdFUN7grTPaTiARiMhc5wHuXaJtT4HKtNXghvihLu8Bk99V9HQgG58jm8hdfm3BoGLm6r",
  "key40": "2D5nZh6hkkacLZU2fpo8nBJ9p9jssdpJHaeqsfCyYhPHWoU6m8C1TWdnaoHtM3XAcqzGqBf4wBRgAEYU32kTQjj",
  "key41": "4w6rkdPZ8c1pfm9b6GieB7rTnUTnJChNwDqyjUZyDsVJPbGv1fdFKSZURLA1P1ZfcU2f6jtEVaiQJusbjj8sjc6G",
  "key42": "5cM6USoGNeuyJmWzF9PgcB199dntK1rkHdkLRGJcVS3vtmjeGacyP3MxePxJCxg5P9cxwkfusXbxAGUgCQp2qNXe",
  "key43": "32J5PMJdeSkdTLGxpgVpRXqvKtRdnJ4Dmm3fcLn1UYtrBFfecsGehHCAqxCPTPUsEERaycT5SpLhugtMRa7gWNaU"
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
