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
    "2ao36GSceQyqnjXBmsxQBq2K7BFi7pWBsx7m3xoVNuXPQfwWj4431tN2EshxFCoX1kRr2Kes14yDUuigCctLYgtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jw8QUUentZFteFmBtnC9oYgAhmFUVQDv8ULh2v6vdM7Yr69rWotZEFH2FVrKPLrnLc525mpr9CLUnWegMrU2ud6",
  "key1": "3yJZ3ZW7FTD4ex1bDa129drzEz5XvqdBAyX7i36qMDfxoaV41AjcF4ZPSzvc9oQoY7uZQM2boD62wvrgUMiTAViB",
  "key2": "25w9mwQZvFyuuPx2XujAqvcgMd7q9yDUnAWmWFgsQq8iPrFSWLxjMfzD4doiU3V6U5G1cpD3E9GLiACaeucrTLNG",
  "key3": "4mdXYjpNaseVSDdk1tQreMXhvMgTiGgs66DQ4tgfsx3q7QszRFcRxPReryRySAEQPeoCq8CBwTJae83JjUwmY6SW",
  "key4": "2DayjJSmjjLdmbWPwJhecHCzesfLox6Q9Qwf3imnsMAYGyrqn5WjrvXoEaohR8X7ppXnLsUqSD1chVvfNZnAFFLX",
  "key5": "KpujrQqU8ShwArnR3zDqjTxh9H9iNhUXCubnQfBfBBEP23SaGqJdptpiGwHmZcvwxPVaDsR9X5dhp44cpbopGN8",
  "key6": "3QKwBWvLxzPnEdSLspNRwDapbVm9NCPjrn3z9XGAahssetasuTUzYeN6YeniKR8co9GJfnTKCBgaeDiXwmye351G",
  "key7": "2Ve7EpJ4qhHximVvrn3Xed2KyDYqac7q8ekbEZ83z146QqnpnbZjEbVZqEX8nHpYSs2Ya3dmCaQtGwwdQPSQdGLN",
  "key8": "5sd2P4EuRJUvdazcMkFjgLu9WBCotH8y7AeJuheTb3ZEoSZGJd7zn3dBS8ckJW6xixBpfBqnXct79iUpmk3qYtrh",
  "key9": "HaqqYKXLFkpkCKNnWabJyrJx3DXR3rBXo1uzPWEck62xa4ZEuw5sF2Ng4kkRkqmvRCa7BDJFkDdDbah7odyasPy",
  "key10": "3tJyt8bRXxaPQfQH9aQhkSfPopT3hqrgocbRTaTCBMy2GkfZDgBq8pDU9oHcAyg57jp8TShHjAV31H1Gr4Q6Nocy",
  "key11": "4L8njGAuZchbt7MNnjLsjKpmYLFCJ9VHx6XzkHC6h2YE5zMUDseZLaKwAZTD3seVY3SoHHPZJ6SYZjRputsj5t38",
  "key12": "2hikP8E5i3k8etAFB97hB2hZTyacQZNaYmbVahhBmB9NprQLL5VyHTYBcaeVmd8qPFKt57jH9T2aviZrrBgNT5ek",
  "key13": "23HPo644M9DtEcPRtAAULt8LbiCjYQ1Ku5KKhzwjxejRQuNi8ZnfZfNHPMDgLSC7vidrH9fcWP2nc1ffh7BHexY6",
  "key14": "5nQWjMu8YuS6mtxCVwgGGSQCJa5D34irvQWdAkwLFUTehu7zZLRhnfPwWoag9C1jsyUbBUpZtWgs7Ht1EXWVKiMH",
  "key15": "5RgG7LLodBvg3Z9eJVTiy8EagfhTh9h4cb6XmrC5LRF1ckfT2gqLBwWmZCocsZktLSQ46Hp6sCkHBbfy1zx37Hrz",
  "key16": "Mi1UnvRyRChkvq4A9tuzs3cCy58VxUA8SW2mRKb3scbB21Tv1k797jLDi2BEzYob2viGBsQKgKBXQvufGyXwxx1",
  "key17": "gkGHmkS6BoAhEdoHETwDvZdydZmpmt29rXNSMEQCiBZxK4iPiYvUYtzXnwV4AW7Qu1h7nFuDAnu5XterJwNhMWp",
  "key18": "2Q3iyyoHiqHbHxqCxuu1VcuYaB6dp9iX3CXoA7L5LNZtc3TkCMmmvTAVHTtoN9fHQLWzWerK7vXtVddqTJFDXShs",
  "key19": "2Ae6dk3g74AVUWXgjLMBCsvyUx6CPX15AdV9h7o2Bmu1PbCaxKygVEoFRXndPHTEUHgBsqjsdCpKS4Wk8iWyYRR9",
  "key20": "mFYTGV8TzZrVAhKVNgQv3mHNMcgu3cecKdhVeUf5LUeYtjANSU4Qgnb2Z1Lzx3JbF7TvyxVWLMvn5DRhizcRy34",
  "key21": "5JauGdFnxmwd5QFNfBcBHBFeNNpk37b3YbPdrdfEiLdmEzPxRsxmxVW8PkoTm6cLaLLj9biNz7pStVkWHkpJNV7M",
  "key22": "41jecWdNnPEk3gqXJvjGmRj6xqjuAUArhFamEaizGVDgknrie64WRt3G72nDQDbroRT49D3iPLnCmFZzqikYGVc",
  "key23": "56sQ992mMQZHL6hMjModnSN5mM2S3ogECAhHsRmx9NfcPGJwFJg28ddG7vsE3ov12ADia5zAnzw6qXXCiLmrys9y",
  "key24": "2EC1bJd4JDGVEei2hUmG85wawQGWwgJ78Rhxa5acU4LumpggbM7KctEFPBa6EoZhhRgVqkANyXpCDgXqRbViWQVR",
  "key25": "QqZJAW5JYBdUdZp1Kq3xQDguh2mexjkPELLWLLf6fR4sSJLoozo8dFMsdroY4qkRiTLLRp16o7h7bUmqsgLs6Vf",
  "key26": "46XfFPM2kTKmgPqiuxZPEXFXzjWvMsNedL8YFYPezrD1P7hbaidDiLHsXujPyoFeH5VCweZNr8wGcbMuFKc66VXF",
  "key27": "29VFUJ9FRjQn9RUbrBqiPgFzSEoD5Ui4od2hsxS5iBD8QCcgr5P4pjxHzspLvsSJ96XXPQkMb5gQcoZxLt5BrTY5",
  "key28": "3xz7zueAFPMfRC2ZXKWQdFAdjf6GbDahQVncnB5UzrteWXLyB8uGfg53F22DLnnaV9tFqoj7gPcHEHcjdg4ExHxR",
  "key29": "4tv4GohCm6zSzjun2jZHtmnxSyTHZDgbxhUkChUVP9CmLWw5DAgweGtG4f4AHkPLd5TyFbephhxD5CySnYwceob3",
  "key30": "ffC29yM2sDyR72vTLQFvFKYF2TcidGqw83ms69XAsL36Ggc2DXGGwxagZdAvF3eDx6qLR61PDwHC4998hWHPiSx",
  "key31": "3RW6nYSFexWv8bTz3LVRVMgWsGGTe1GuMmuicRtiSat1AZofYccaXAX1fzvj6drHkDTxEVZR2Aha9rNqXyAj2TVc",
  "key32": "4xdPGwgDHFY1FeuqBKczSB6D9oq4cHqGVXdWmAiDnoY2ZAQ9VookJqJurLqaHp9TdSQW3Yr5RVbySADR5auKgzsV",
  "key33": "e6mfB5GNzwa9bsPZg8DvAmZtUWbW798gC55ADBf1rN7EVqFgq6bdywEjqGoY3Jk4MjXw3e33JF5YYLFK6tpquxS",
  "key34": "56ZBZEZTu64LXzBQkwbHf1vDvAfaCpr6qa7DcrKt4MreaAL9x61RJNCUWiNMH3Q3jUgR6RW41Ui5i9SXJVVVFQGd",
  "key35": "4XxbjLQyqek6UYNhC5JLQrGRENUYeUdXhmmoPDzKyrpCYifyGUeL71FMrBAmRcdBegkt8A7kxX1oVjLucgardVED",
  "key36": "Ex3MLHBsXfJ1wYJPkNsZd3M9Bf5HUjY53RJ8TFw4LkvrF9BFZYgMbHxBPZmR4vnNPFyfvQVt9AdonaRJiXRR2HQ",
  "key37": "3rAZL6RfufHAXkSg1MG2JuwMgo6LozSRdFV3Hy1y1dBYaxw72qoUBgCrzbsahK5rMePR9fhPpC1Peri29qBbsjms",
  "key38": "5YdHHNN4quJ5tc9kJNrtdQ9bSqvDeD25w4XLTa5JWQ5eR324HEGNsW8nqf46V3tKzArb5qEkkFgx1YBZKkLg6ENE",
  "key39": "2AWeTmhBk1xZbA7SqmzUxiPDGJGQD36qX5dWi4DgtVcSQde7i9QajTDzs62SJAkcYbzuvbMugP1KLTVPngRC39B8",
  "key40": "44AWXs34UWCQwSNe1tiBGFScnWVxNvNU67CDnivMbp5Ds2fSXkLx88SSgJFk2FBTt4bANtvGunpqHQ8RjpGdCpaw",
  "key41": "41rFddq2q5Na8MHv2WNU61PxFavytD5aj1F6GmDzFpoxAuF274eL1vYbMtxNQJ9mxnY1SpJgoxwy2fbarLehiLEQ"
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
