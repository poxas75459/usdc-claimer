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
    "dczycb7sP9mEHTx4Hqn1g38XWgsbKSA1M5kJV2kJZUUAWdore6trwy4VCBuyVeu4ULaRG6tYjQAgJufYrkWJYo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WXUmnvqZsXWENdtrXChvSasM7js4L5Z8m3JxwHgfWik8c8FcwzVTjR2jD9PjUQubk9VP3N9x24qTjq4cmhaW9nT",
  "key1": "28ur9bDC6YCTWxykG5dCXZuyydir1LyaFQXf9D6VKPdUVAhTSDKHiY6LyfGQNvfJEViEQPT4iTdvPM4pVwm7xYu6",
  "key2": "3jogKwoeGozHXFHQH6kAZXZBPVXadzy3scSdqiBfFbPwm4yY3Cmrh4KsTX6b84hPcSBzgGY1pN5rHvXvv1ufZAjq",
  "key3": "4orU3zu51vfrUVghkcLVmaThbPEs6EbM5koycQzoNETvXohph1k8XHTozTz4ho5ouDjrnuVZBegRpNaPXXmWu282",
  "key4": "5UXrBA9nAxmXgr33vyv7zQFDZW8nMjwyYFYWp9ntK83yitZw1j6eAib8mDyiJSB7CfkZuoe7QZfL4zgSEASENurE",
  "key5": "4wdbxEUwHgmnYetmQa9TDDvfEZjsWde3RVDd4g3YKPEH6prcbJCVVqi1borpp7393ZiKCN2aW18SakzLY1JrgbNs",
  "key6": "oC2aWFKbk4CLZLLMxJGCx6xBgFhju7WhyeT1rsLgG4L4gcaRhFGD5jGapMALkkHvuBaMgGpq4NtgeFzYjAPdbxS",
  "key7": "5bXYG8ntmrKW1gUTrKy6EiR6v7gJGhBmtLbzegb6VdneZ8GUfSAZoTp58nT7mmgoDF6HLLyJQEc79J17jPTsuPeX",
  "key8": "3n2cxx1BapSC6iPm2kMATBycYRHY8oTPrepuVBuyS1kyyZThkDzCqHZGVxTPVfn7HfVcVGhKFWczyLrs4q3TNHQf",
  "key9": "5SDrUsQFsnSbb5jx7JFjjQCubsm3nVwcbZLvCD9vkStT9NuDZHKKJQtazaSLz5a3UDXBBq7V4Qo8RDPq7FxMwEqh",
  "key10": "2hqxMBwZKXGzSfLWbDYU6dDcVpygzAcyqcoYuxvjGpfXBaFSbqU1QE62qMv156tQjEV39ievoGA3bS4qDBHcepo7",
  "key11": "29Sqzmcs99gbFw2wQaqdYHMCpZNS7E6Qss2TvL1h1Q2p6MDWpqXF1Fz7FC2wrbhVth99r6bxdSvhzPbuoNAbU91T",
  "key12": "7JPemVLeWTcvFtydnrb9JXtUXdD4Mf2x6YR4GhQY47cBqdhmJrRcz3ynPfjMFEGS2sNhPPaxZGxHVEeDrXegd7D",
  "key13": "2rQLL2Rf1HEq8cFoJ5ztUpYsyhBvAwukrYHHzfaPP9qHM6DB4j6Z1QrJrPRQr8ggfXM67iNKkD5iWkdwBEPeDQUq",
  "key14": "5EYnZBMGyF6G5saxkfnFqoKfYRomvF9qBU2M8vP4xKZHEu8BNg9CmTmLFGzXM3tHbty7o1XoHeCzAfifd6Mj2S6S",
  "key15": "3mftTr5TV3uwRX9vaU8ZryhZ5u4mS1NksmdUBsWiriLvdPHaafVX1rgaTtLnGeHz5FDJAnjYfsYSFZnidV2hB9M9",
  "key16": "2QGkCJbuhXiq2VZhQ9FzJoPk7HMsF9nNs8rBUHi9Wbg5gZBHoxyW3HoatwKUApTiQ6ccTJeJMB3epP5L2KEJafej",
  "key17": "26tmGVS4tYeFLr1MWQSqy6NuJ9y96gKCDyaSasb4Rcqg76KnZcUuAm2WhBYvmE9ppeUv9Loyz5EEdH29AN3BD8Nu",
  "key18": "51QKidWFqLDLebuYtaU9bX8BaihzzeHnH8vz174zma7FuWavEnVpCr5HX2LZK2Nj12MpTDDf6NdwfeGj7Bu9nFSi",
  "key19": "475wsV2uWw2j5SzjpydQ4ca5mHd4CrieU4XtAPv68Ff1dahehrxHradWi67uYN9TSpqwb5fHN3VuxaAPEJQRUo8j",
  "key20": "5qNeYuN7UkRd8XjmD1M81pGXecpeYzxXZwwWmR9beVEqg5QUEo4UFNXP8VsJ2JpT3uXGLZSJsUcNnrDDU3nzA6xv",
  "key21": "4fC7mAyoZYEj3UpZazKfsE5jFmQnEzNpVJj93HnUYd1L5CuGrmQVbm5prDGf4pTmS1J3zQQEXbiiB7aBYdfgbbyv",
  "key22": "3v1fEnPUkgRA7cTqSSjTTwKN8X1CCS3g9XjNTW4AJrncp6unKt1rRnGBqoiHtb65FkTCn2DMkHb4SvMxTr9wvmzc",
  "key23": "5Z6hgNBa6tR7vCkb3vwZe4TwXtJFyNG9A31wL1fVZRdm3sB15srLVZXs2hfmHo42RH7wtWPSr9QfXzQQtNAmXGH3",
  "key24": "2k6v8BuDMkGE5TfojbavtxvK3s9Gv5SMs4M4gWxp1FFxyLqGBJkuttryUdt3oyWtuFWf5eQMq3RTsCerJmQPfzbM",
  "key25": "3EwdqYMakmFsRUnNZxzYSq3S59bFqK9ymV3BnFya5B4DQgR34ZXtr1UKibT3UoLHnrnHozKXpm6YXZA9quHcb83Q",
  "key26": "TXconPL1byVE92HqQtFV3ST1ydwrEhKf2dBYmiSYTEc2nsm1fsfnpfXPng9N4ypwKLYVXGMmvcRXiN27JcbWBaL",
  "key27": "2DF3EoPmmxMofSVVA5e9gBnWPCR7QiERoDTsbK5czFnLYAWcUCdHggZgerf5G92UujzG24eCcKFuoJyZbjeBYN4C",
  "key28": "NwsNwQvvVycGnnghJJEnkLpKiLsn2BZLitJhbKajgZA549uKguXBSb8jaiMZmuKc4PNtfH1cVPzSPdrd7o5PEK7",
  "key29": "GXyqU4WoGRqom8dCMYGDueComSM2tHDVM7nrdqAWFvtfkPCG1Eih9QPRU1bq716sPpai2Ag9GJgQtvtCkpkyB2z",
  "key30": "dQwLT4p7hCWtDG7P2J2H4vLEn6STQqQ9ZiahGUNer7sD57q9NBXvqxti7uA9XFMvbpKUX6HZ6t6kioDN6MjLQuy",
  "key31": "5MvgNSNRbCtQDfGTZzUTJPFKmks4CFxTwzy8NZJVo4Du2ERKvaFYdTfUf4ZweCe2WUbasbAHRZAXS7DYZznf6Mva",
  "key32": "2BsNebMsAQwUEnzwfbJKY2T6F7X53Ggbg9QYwjopkgd7Z92tn26VCutzjtEzaSt9NgeZRYEp4wgdWYNMQDWoEcUW",
  "key33": "2nkoAyAYMem45RyLqLZ2ZBcchUn5mBjaCU9HW6GsH3WVLmt7oz8b4hpJ4HL7YPf5y8Pw2svDg3PBTtvTkWfQEWHR",
  "key34": "4y1o5HpXBvbbKgBYPjJQMb7ND86CpzvxD67gJvQ4P5PV2sDCRo7Vy2xk5BDrBxa5N1r8sZJvPNB3ZizVtmz8hsmh"
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
