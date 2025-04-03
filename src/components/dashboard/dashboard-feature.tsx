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
    "442QuyWXNMCGSL68F1xpF6wc3WZ9XszQjesgD7UcFayWj2uS9tAZY3fSt1dgAeoD82CdHG8MWVs1R65EiK8mWgto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VouvY4o2Skq2JnAptPAQcwGMPjs2HaRizLKDKACqKmLiH68P394Yg1XT3km2BFNh7z6z9rah1LEdBa3DpgYrSgr",
  "key1": "22cPLNzybBSv3iUNKWmrbVV2wASMaD2XBYLSuBXFsvqZEpEYCToyh1aMNjUYwwetZ8CosR5Br4ASWuByYVZXdCf2",
  "key2": "sFButch6zXvEg1oPhxMfVpL9WSME4DLWXQmNGXcie4uyvSTAYSMsFHp1R36zfhW4HdGGkGsXF1QihXAdqQgNaBf",
  "key3": "5V9fp9RiqW76gRyVZfuPHpn61g6D9aaS6TT9jLgzi4hzoTWrdxu7wPDUY8Z1iYHV23vm4BRopd3kuY7byjXuuYpr",
  "key4": "43aMTBwGQvQR8Qx5MRpxDyUz6w8aSWe4saiVsPriUAaiEH4mTa3V7w2zq67oHGnvZrVzdrxkjmk49HHw7wnNcr5q",
  "key5": "58iQiZYyTcFdFZqv84Uwu3MwE4Hp1mFLXWKyfCHJmWsAWLMxWoaGWwtMTRN5XWNmpj8GNVZejbrvd5YGswwmZX2J",
  "key6": "3kG8RMmYUjtyfEz6bt5N9xG1BSFmkyqhRddcDvzTKqqaGEhQGCaLKBRKjRESspDbyVmWFZwSLWUv8qRK5i4cjcdK",
  "key7": "Wv8pPdsKWD58zAoCmnKeBeAwg18QnEvwYogp7G59JArUo69vVhUDUYoM7iCfU8YyiCRVRFByuao98vQ5Gh1vSXE",
  "key8": "2eZEEKbG3fDAPNFaAyZLkrzqXibtwxGyWQPpqx4yerKqhZ7N4M5Q3MfsgE7iWqdHk1Tib8JU2b67vSoiBqZHbiMJ",
  "key9": "xhNj99LorZWyGLKdZoGV1aKGr41YPAQnPMq1WcPPxbbKtFHsg25nHhoygsaGuwk13pquuTeqSmp4XWpA8MJ7WUq",
  "key10": "416gSwozkjgebZoh5cLUu58BJ19DnWaD6RbADaqQ8Ve6j3CoKFMQanEtFD1XyQxWTEj389UT4HyELiV666rKZjdL",
  "key11": "2zvc9m3siJXWrQDBWSHNKANy93YeJMVSSnCvjJDycVjuvZiSLVh84Xo816XNj9hcSHkTsKY2jSDCVCyUkid13jbA",
  "key12": "2khjZH9r3c8TWjTybKUVfFpSBLHAe2ot2sD9EKUhQb7Gk3EBrCb5Ge85DNK5FNkYTEvDTfqNoEtEqT8q6X5m8gyn",
  "key13": "5JTa5ghnbKbX4YHezAaRp2m87robMHPZkp24NwFvUzkzpHYoCdsCxMnA9wcTKiaeMuoRdreqnuKHPvycTZ8SAXmZ",
  "key14": "6kViKJzBegUm3B8R9xQdRPCUbN5P5n7keeYtqkjqQPB9DYpf78wBLDJp4pViLDqxFqLjXGHiWBXGf6b8y9kpmEL",
  "key15": "57ZNGxGA6HCFfw8313FzhdYwGZMBZ92kT3tUEravoGkbEn6a8Kb7fncp9BuqvgFo8beCwTgXpHTbYJDnMErsTgeF",
  "key16": "5UDSgaVByF7WkMLyRNhvnr7HZsxyLKYMV7aarAXE7T3HdJLUyqdZ5CbzLBRkeaAPF7D2Kj9wW77yNyk4kqsLbWG2",
  "key17": "2cUG8mUZMFn3Cs1fhTPREmtAv1buZGHMv7xUrGBEpNWBxN5gVBZ4vuJhKvx1siDeUbJ2Ngj7GrjBfnypHz6BztFG",
  "key18": "5P3YgbTpdTjJTaMjnxsgc9gydXfxeAHtHTXzA5XNHeTF4m9TvtZpcrGsHTgCQbNWMGqBQxdoUsy881mamXGVVqWp",
  "key19": "1hmZUuvstDPqMsvoNEjR2XjVeDuy8kZhcsLtx7WSq6wYNoC3s9mfcRzvVLiahVptGSsfAbPwfHW7g55Jxsb8K4G",
  "key20": "3v4wPnkw1GCKpzSpEYZWeixgmG7xdbs1tVbYfZL3wtKjf9H6en4fAd54HVxfwEY2MypkEz2xzMXVsHc3nonEAkMK",
  "key21": "2e9fjeYhJkSBoZZodckwiPwuj6phENeFuQWobSny5t4ko9BXNxqiYg5GQ9ijZCLm6G2ZpY8tccyd9a1AAZhwFoC",
  "key22": "4GCMGAG9mvu6axWFRxAJFCo67dhbiFGdbLXHXYmnS8yCMjSFpFi9sVNQWQ1puvcSJEPyApQTtPNmRBGU8K8U62uv",
  "key23": "a5t7KqFW2PamoR61WE7EYf6WxVWrRyFLMa7TFSxCCTkNTFZ3Z3XSidacNs6QrWaDd3JJrQv3HeuZAry3tgH5XUQ",
  "key24": "2AtRjCAjtzfFwhQh4Y5ucExA2p7BsjCEqKRRvXL9WVdwAKxV5KGS5GGS7qPP4oVWnR7qbQthuJUJQtdvVjMNe39r",
  "key25": "FE9hjdsngxjnVkN9s5Vpd9bGvtXcAXbduhDpHwEMW7NsP56vMzg2TVduatz71Y1gyZV9kQb6jPQ1Ljk6Rp7HJPq",
  "key26": "36qgmrDLXNiNJSqN5SG1PkFQyPg9pnKWtRgpQJnnUo7uEopm6GwCX74EsnfcxGUv6paTGeDANapxWYfpsyjHZ4PL",
  "key27": "wX6KafZM326iUZXeV1uSVcTPgQFrxnb5dHhCJ1Mfmty1Q7yQEuqJQ91BNdhrKvQkHynTSfjzq69pzJ4ojxHkvBs",
  "key28": "5nxXMBk7idXyuQK4vCyJVEw9e5cohL4azZ9opkJPda73zLHuWJ9ZzTmpVqkAXfiQXBQX1QYNKNJ5VBcRSpbT7qcb",
  "key29": "2KrEpdNznW4VPgzTrMGNLfWQwA3vAhNp6b8ZEfNGLESoYGaMfoNc77Yqvw9SBWWPSLRH7aTgndFHeEH8VK5tB2Pt",
  "key30": "4v6kksb1pKXtf6veNsWTwVxeSQnozTckTiESWnVcrCymGv28BV6NE7TcPcLMQm45CKs3N56rNb6rkPKGy9S9jB8V",
  "key31": "4ehxZ89eNSt2cmpkdRdvpYLBp8y3PVDErzMpRcGpJwRv2QK2ZZupmjqpWqDSp3MTUyR1gnBB9oWpwgUq9WUiN1Ha",
  "key32": "3qki8pTnFXUxYqbVCBa6jC4DRiymX7qUpi5c7wVSzcDeaAhuswXF7d4mPEaAdfZzzaJ38JKyWimenMGsn1ji3S1a",
  "key33": "39WzyFkdCBwk4kM1XgwvEqgF6UzvMoCZafhc66uJrSeyxNMwmtmFAKyo4X4WbniihMp7p9fZo2mb3zmdxTM2ateX",
  "key34": "4wnkEMEuGHQJMCcBMuz7TCbY995uF53AXDGKdjYhJiCrhaEUEgqpn2GnTBDP9VRHxE5xrcPF5Se33BwbtTTVYD2z",
  "key35": "5khsgHjdMWaR3gUg7X3S8XGb45dwSdFzmA87md5gXfLhSdy1VWRvnZtZe4mgLNp9oQPHY8sw5utzXBiGRQBsGMhc",
  "key36": "27CFhCeZVdB35LLhWzQqrVSWTGZZY4ihAG69k2qapr4c9Mziy3tbWC6uUnh3rf4JAdGKomT8x1MK9NkS2aJcdh7W",
  "key37": "2iejupxDJV5xuvxkNqTv2vJi23nbNaFMF6QaF55ehV9KMmArhaJLfpVeEmrFsa6ef9RbZ98mWzzEcPUZnAvHfYmK",
  "key38": "65UuvGd1PNEXzx4cXj5Q98DD8JKcwDwHGW5dTsM34LH2qoPuuVCU7mJtGYyUUCopZh6GSw3WDHhbwjgm3XwmXTDd",
  "key39": "3tm7xuDve2xGY2wQ9DTDQHF95cekmiS1ScRzsbkMYtfTnDsXjLJupN4wGBUMALjju26odPf32RMmSJg5dnfd2t43",
  "key40": "5kVAiKnYQhY5sDEtJWSn7YPrLNRrUwXVJv8eNsTsGRpZQjYspxbLBYfSXvArMdi2UwAJY6L2YXwfyr4mgY5s9WGi",
  "key41": "49BY7QUiVi4c4APKMdtM5kXRSBVNEENWx9jHoHrTmYYy2PRJFwsxvgMWPNg6ijRS4VJQEwsu5Q31xmgoBv98MGrt",
  "key42": "5gcDXQQzzUPUW4b9r8VnaLRE18HPdfccJ5D3v8pgYd8phaKt4gGGkzmnoAikdCCrNLPywtDE5qXiPU5VNUtWbaDm",
  "key43": "2qPhD9XinByPUhqTMZ4RwZFsZ95GkhcagqciptNyjYyZJTKpmixppX3cGDWeSYTSgALkkCkJoJasqCPNVs9b3sYP",
  "key44": "2ycXcSbxcLA1eYyu3ETtc5RqS1jPaMD4gxU6Aet51Hk5cG8rpFwb1UpQay8i74EAepRVMzXiFrAgN8gT1XJBKSA",
  "key45": "3jyaNmGT4ZRF7HUCRN9MJ2wVxu6jReYgt6KkYAjQLQYWcqb9SUL8cgDeeFnSHb6DnN5WZQ1ZEP9ssm7ciCxQtwiK",
  "key46": "2z9HVYKb6TGHmWezf1AzEBYr4nyLPtqS1dUErQzTFrBwHDtqiWxc2pj98A4xYAU5U67hzucsowYUS98zrRT31Dmn",
  "key47": "42oFPGRsPoVic2SfALbx3rBR4QkPCHghjDuzRaMqJ9FcxB4uEZqzRsWyW2s9H8VQKDF5x7C9C3Z2pjHdEUxXCWt9"
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
