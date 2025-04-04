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
    "5QnEhRMFdzxAicqTF4MjTvXEgTBzHgp2vBDR4MiFVJYCwRUxsodP3Nu9X8miiDvXrGWpMw4GN6rAdkacM47BahM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VKkzhLLUDjfxfFNn3f82V4pvXLCtPLuaZpQ1Yw8BhtbAK35PQAZFrWsozRyqoHzYWt43D2yt5xjsAzyJbvMW45a",
  "key1": "3UA94ZrD9ZpQwG1LKZUivvsDMqdgLoeKz5AAmER5VYij85SszugH9hVQ35ypCWTxmHYHnQtUEgwxmWB67CRTC6mt",
  "key2": "bQpWdUo6i4FModjNTsD2jun4t4DLTEB1oU7wyRauP2D6bRwWAUi4UuxkCCFqVSZmLtU3NGj8oXMimHJiJSPXsUi",
  "key3": "2QE4uCnvjtdkJWH18eHvpAPDYB6cSeoTeRUuuPBoRUn8ufj13oNquTcTZ4zsqnUfQodyg5RPssXzoDSj1msTr63N",
  "key4": "35MmwrZoLNa7CnGExvSAa21rzv8hiTkfubiqpN1d3eH4xfNut8xcDXaDos3kpaYXwsnkYLnRxerH2aZnR3todYFt",
  "key5": "5brSN5S68N1gcgJHE7UKqqVrgU7cLLXPXtxSJ6YKsAYmD5tKuzomrQkqxPiiu5NJHAAVyVBhQM96LSibW33xSsNs",
  "key6": "3taWykfijQJz52J3FyDUa4HkT7DRgUd7zxSESGrmsHwPHN4UA5G4PRvoEQxMi4b9sofWnG8eCsrn59zXHP6uQFmo",
  "key7": "5A4GNJHfb5PYBHYuS7k7zUZaozjy8NWKb5u48BNxJLtdpjZGdmPg7DPEfDfPG44kkxEVrGHg3tHi5csJntexPP1m",
  "key8": "46Pr9SXPUFymauwqgibUygdVZPRVFqeD63doNhZ54H1WzHpNHv8ozPbRpRSJWSCNBo2U3QTA4rt7s9jcHWJAFaV",
  "key9": "2oNLAGozJJx84B3hN7PxYbmXeCq1WW1E2bjwNU7hB5GbuP51VWxLpR2q78s7d8Vh6NnsiMnEaCYtGrPLzD5dpGcT",
  "key10": "4NdMcmCMDEQNPMZibZ6hnb7HZFs1U5LsXdyW57dp4ZwXTEFVcNhjdipLZxSg5tcv2wXwxN5v4DdteoDLQrjjwUqW",
  "key11": "5x6tyQkAmwZ8aCEPXbDdQxkP8VZc4igKWV2yYhEneZCK4shkSob4S11qhHqusLRJZUNE2a8zoPPqT6ScjibqzKPT",
  "key12": "4QzEu29VGt1iX42uTQZBqCjfqcW57FZNnTuJpkjFXDv4VKjHAr4jKt97pXKFYExjCwYNW6gfXbPTVAHBvyuyBcHk",
  "key13": "4Ff4cLkh3RjSbq3H2GxrS2J6fgCTFA632MpfvAsBudRoBUcux5hPBBeGVC8pdLD8WXFRgxtVyiyikeH9yGtH6pZd",
  "key14": "5szp7mveu1PwfSoP2qPiGgj8wR2UPKrDzfQP1eSaq2NP3DtRdtgGni14b12SVUPRHoSMmpwkZmXuTC9ocirKH8Q3",
  "key15": "3vBUHtqBh3VDm8X6uDnWAqfEpi6ymRmKu6v1WyNXc4MVdee4UwKcUMb1MbTbNfeQTz1AeWKyjwVJA9rx4jw2JmRT",
  "key16": "5wCxoVxM1J8gcbaayn9xE1eCYCsGcNT3kxDmKohYfi5iCZPzA73SPN2K7fkamDCLsmqaKvTy33nPZeK5uiT3uMyn",
  "key17": "65e2bo1KELTbALCZftWAtYCoNqWBCJAHLgP3Z5SnPpusH4NSufPiMaYCkqcnXd1a1maGvkRg1aRAqcjQwxbtotfC",
  "key18": "3izp4MU2Puyi455CKtn5LAPu9RvEq6ir1kdLhuyPgQAsJBrDavC5t46Qu5jDCJcyM44A44e4Jnr2NupCovbKFy3b",
  "key19": "DkoPTbKQ6EjneZA9hcjZuvvnhz7Z8JXdbxUnqLc6rP6ez95gNGQd9KddNwNFGtCn8e89NeLWwRPeuacTics8YCr",
  "key20": "5Eg7yG2vYmB4Hjr5XsjnU7ZK5mwURH9TiVwMFXCwzToGCpsdrxBYvPNxACkmFQGAFPXywQWWPZNShgVz6Ut6Fk5W",
  "key21": "3m5tvZVVZWe2fK43mh3hXiimc9QdRrwf8GeXY8et7mvW86tVPeLnqHx5NoEapMjFtdNjn9Qr7qYhLcft9ph1bjg4",
  "key22": "3cGqYnCufNiJEAET3hTUk64p2yznXBYJhMmoq7G6ipPXoRp4hGSoH4DBHDHnTXvW1ghCzqAFstHJcujZwyeG6CnG",
  "key23": "3nAVf8n8TGDspGFaFiEoWaTsw88of6HEfX7jUP8mooV2hb8Q6EqMPr6ENqKfLJ1w73RAKwufLNKgSFiFhCqJk6fh",
  "key24": "3gARFQNSpxTZTXeMpZxLEb8HncsVdmAUB41sdZZi8xAnmyeKNKhfqVa8qk6h38kcV9rii2SCUJFoshsD7fCFtpeP",
  "key25": "2FnvffX5eZG9HRCLnsSHv5TKxTwDcEEhFhm64gmPFk5zmSSEQRM9uf3zUjsVUsXY5cdXyd7Uk36Px5PJFKJgPHGU",
  "key26": "2BP5FfXoa7z2pvMTALWQ5Jd8vVjefVYrAqp4NcYCGvHtrLLubsLmFaRE3BkRWEART8QQqpSYY2xqbP6zeNS8E5tr",
  "key27": "4vwWZHRniA4S9WaeECJrAud8yRgFUvoVpBoWmbxPJfnGGpqheyUSccxZWwdf6WQ7yudBWq4CHzH2mavoC8z7KkjK",
  "key28": "5v5nnyHju7Aj73zeAHLyd3u3VL4nL5fHHcB83HkVfGotbtCjqLiXwr3CNVzH8ixh3zrijLfW3zBheaGnEygkgSC3",
  "key29": "5vnNyWNfpQPuDgKKWFwn7bwB4QRY67JJFGA87JiBVDg8HNf6pdpMgeRBSoon92UiTv11diEA6GHzhFLe2CfP5Hap",
  "key30": "3fLeh7dyWYcuTTn9XssrK8ntfXyCRRDGEkNCVNiMUXGvLzmzk3p7g7r5UrHFdNRRS51uanAryUCFZuY2rB8wjpFv",
  "key31": "53JMe1m5F9N26xE8WQw2YVG56vs1H1feGFGAzktCS1D5EDDFb1SHMFZNTF7957WD8if6j3xVsRCZLdShgu8YRKR7",
  "key32": "2WBG6GV18fqDYJYEeCDx5hWxDy7nVMhZiWAL5eexhKAoZmccPtfhss6P8hFckKJ8iGWdx3po7FbqX8pja1etGp4t",
  "key33": "RtJM8DJCov7gPuwK9cdRDqmdiv3ieXnm9CkXZrEud2j5V6SV2wJvzP2T1gBbm2wFLTVV5GsPpEJb9y8sCurZi3T",
  "key34": "2G5Y5UMbJrSLS9hPnQRkWZ1qc9xPWbZH7PESBciUriqyM3GqeWUg7cDyTxe4LN2NkGNQXvTp3votQxSDK2QwQFUr",
  "key35": "2b2tuP4rfmbMoJg7u9MJ3VapdK9WBy1FyAx5igbdcRmkJ8NyaGhVYYuhGq1AEMfUwskzhBvSQxgGHLeao2FQUuoo",
  "key36": "sNz7uNBapEqqcdjWRoKvKxH6neq8Xn5YePpizFfeYT7x3xVFWTWLXErEx5Fd7eyvmn21iWe4CDFyruLfzeNfG1Z",
  "key37": "23ASr39RP2JZCgUcVykehdKMAWkQwUqHmHEqDmWtcvWv7M4MyWNgmpxgNAjwE2xX6u3AQUhcZWbe6CfhdMYNi6Vy",
  "key38": "2YaxHxZZg31Rwe4Bd2GackToVHAMtyD2JsXYDnmzKAoUzL3igbktQdEErft2WEVEHzhB6zq9maU5rJ3fnW3jVqim",
  "key39": "3pmFmGybm4crk5EW1RjDd1HPuPs4gpNzMb7cXQkvSCL1YxtXcMarUFPaGdSwMCcGjEdLA8kBj5b1kDPQR2FXWGcD",
  "key40": "2XVPSXxAUNm4CvA864AUpLZBwqLLDfNxJNFVHmwRJxeGb8vN7XRSLwH5oQoU4XtY3EvJ7Sx3mY1m21t61n8Upw7n",
  "key41": "5iM2fnxwdXav39jMyfTg5Ze2aezsJs3HmbRFF3y13CpDGHkWdmv1wUU5MjkJFvvjycTbqj5knTfGeFnakdJWPaKg"
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
