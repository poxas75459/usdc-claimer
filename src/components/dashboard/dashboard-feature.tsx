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
    "3vxGfW2cMBFB3hY4o8ZfKUg89rkdMmAhQqiDfWvP2t9sqGKDp9Lkz7eUkYrDGfeKryTxsaHeFY5buGeHhXJtDqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ccUQonDEi92qW9pxRbyPnhxXwE386jpenJkPXYxPTpjqnPBsn8Jbv5jfUMho13scirnm9o2SiQr8ockbqR43gSn",
  "key1": "4AWswP2LdKtmYc3rxWrQpTPZpVhqPccKJ4TBmekmk51GmnMLkipSTeGgZLVjfj3H444RGFDpJbab3HwV2q7rKYPv",
  "key2": "X2WVMhfvLeye7doKaodEAHNdbi61aLCby4sdZtV3KRDXKCkYqRSMi3DW6HLPVZrwaoL5rA9BRFxNspFYc149oWY",
  "key3": "2Zzem8qdwkacix69MVS34u2JP9xtQHfbR5VwCqRLpEKt3j9nS7x48T8LzXuCRYviKi9aSWVQS5RPAiaYFmGQyZT1",
  "key4": "5wvVdND6PMebNKJS6W7w8yu9zzf4Qtx6Wgm6UcoXrvp9b5XSfz4jRVSTBRGH5ou6bbCeSB4RL9XMgrfGCwA4r5km",
  "key5": "5VuzSzmCkamF7Z1rCp1MurbQwQo3Adiir1wPWpFmXMZCVoDge5jKcThE2UTR1eeoQTgznQZtqaYmhUxoEqhViykz",
  "key6": "4pkGutsLqMduv2Lzr6swg5GkSoNorxgeo1i7k82uphyW89FdKhUdrbAYus6LTGqBHp6LSzcP2hdvKqLY48VhvyUQ",
  "key7": "5d9CSzzb2cCdcn5XaQniUB7ZQMpaeJMFisiHYDh5B4Nv2m2mbxBeFJiMJHWJJHTYhN4dySDJDu6kyuwmKgSwXMZr",
  "key8": "5MKgC6KVYY6q8TSvmpBz4iFb6UrYg86Vp7HPUEEor61wbeCpZi8AMa33mKMzQ8SfoShq4wQCrnAAaxCuJC4ENaG4",
  "key9": "54WGJCrmou4ocELNtDPStdHgzDzEhAxcx6eTeP8ENWACuVYWePBuUYqQqdDHHCyNdRf6gvF8vW5HGbCCvnu8eUH4",
  "key10": "2oHJNsdrZdUHbQWazpX1DWJkn9brD9JccnArqfrAaLw4RtdX1N4idr1Rf9TSCMY7szw7uCHN5BYjTH679khbozvy",
  "key11": "5eaerVv1KsWvpXREdiAEngBef8Tj3AY95t389c65W6ZJonbUFNe7E8x8QrAdA4dcUbdkCE96JNWmscBx1XSWSwCe",
  "key12": "4cNuEDYuFWtfeoY727LEnU32MyLNsRw6sJbGJJwVjQsEnexAdeDAV1qyDn3wpvqSupGSczp6QMtNZoobH4S9Y4pn",
  "key13": "gwx9bSz71eJ4nUUsXs9ThJUsCZMMBgqBDhnrqZTRRYkCckVZ1SRUc9k2jfwDh5ozMidXpbKepeofdTLn1Py6AsH",
  "key14": "5p8LvDa5wFUPQjFgoFtJLfPA4ALZWuFDu28Qb3aXBsrdkp4sJvBYT6BS5damu9Wd7iT3dSY7EPmKHoSGbP7RvKth",
  "key15": "4tM3hcMddLKQm1CqEmReJLfUsFnR43HUJ74BNirRbvJXqSLEwxgGnGdu9Ke8DUBniYUJCK8QfkFWatZ4Zrq7JvcR",
  "key16": "5M9iiZRsnLiWxyKRPwng4Tb3yJGuFKjCo2s9QnEPKoTs9kJaMoyxRwYAguUEW6VhN3BPrBmJM6zKMH7zFnDKXKnL",
  "key17": "3gfAwso27DcN3rK6rJdNk3eYJhBPnCRebz4mupjnG1fKK1isLYLdJCqTt3gBLh2hGdvxaHNGF39HggCg6NUSVmAH",
  "key18": "5k4wjANfniwoC1x69N8Zum5wb9akHuFfSBYiRnYscgb6mdjTQvVm5hGfeRri1W7oD2Yj1xyKZdb9cG2uvrfzDves",
  "key19": "4krkzhxUwniUN3CiMAVcm3dZr97wFQW9M5xMdtaHpE7oJN1x7VJV3Eo1otgvt3z3R9jPtziTmwA2LW8TjcekR9tp",
  "key20": "3JRpSAniVoEZqzs9gMB4smGG3er1bdZzK5kiQB8TfJd2mVAXnA979ULBAFjaaoqzcVQ1EbSkMzZDHzQLMEZpmvNq",
  "key21": "4MAa38i3jp59ZgK8HyVzUQGNYRHHJsnP8YjFnzCnSM8fkeEbp1jzEpr3ULGxooeBV2oRT16RVRHUpZesjgZfQ5tr",
  "key22": "9pESw7JkG8QrmwsGB3P7ZjMsZ74dSM6MwySxH9nK866YWgguuF9hPcdRUWaDcrFBmdUbuj1CJncSMq1tCjCxVa6",
  "key23": "t6zLQQpNnQ6szyPNfExwnSrAkBFe1j9XTqQvzkvxKjeG5qRzurdTe8yeUY9V3DanTc6Pkcp3Hn6YEbSYch3zAvj",
  "key24": "41sPKJxFCkvRdXow7iU5rWo9e6i7KFusK75AWBbiXwos2MmeRaEE7jxoDimkbvzBCWwsYdyL6u4voWqR4wLxEZaV",
  "key25": "RTHVmeCjiwPGNGd6cEAVfpC9f4pAZGAwjhizYx8dz9f39afnQ1UJF6ExM9nH1HerqyYxvYyssADweebj7YiNjKc",
  "key26": "2zrYevnNM9uYnoTMvejJTHiMgat2zA9E8yZRmM2YJy6soBfdR3B64dsnhigRZUCmchFi7MYDEupx8NS6wditLRtg",
  "key27": "26HyrAGxWWxHQ7b5Q2XCACVzDyfSwzQaZS1EkiKGJjMnABKap4r49fEigFTfXJVWDQd9tbPvikEJ65BM5yAg7ZQ5",
  "key28": "5BvKUU5cSDSfsesdruPFk7166Nb24c9xu6nEeV6t8HDJWnv8J7udZNDvxgJ5tvjsoxgj2PiSq4GHEYs1Y42sss93",
  "key29": "3m5AkwCL8xtidooYRhaUncKWPcVAiJG5Z9emz5PKfN8hREWgdDHZ2xmXpePvsNEQtpWzKKJa22wjce2wZSLzknz4",
  "key30": "653sa14syserbJjpTkgdyj5XspruwhZTLWE4TydArDoccej4SgmC15j5GZjSKy7DgxyLBsdKJTBo2Am31DTyigb5",
  "key31": "3F9sVbTPn8bLZziokaTwJenSeBq1nsTXzbYZn2Bfca31ZGKRtHrAgJvZJ2hUyW2mwNtZYMvBLHze555A9BKm4New",
  "key32": "5zezPtdoVvBZEuqVgw9FHnAYjqvvnshDrgEQDhBnNcydNMWFsZNnkKtDCXNvA2gJfUL9sctTvqgo5U7pLUmfwBk7",
  "key33": "3PkWnWiXcVqFtvbbpjeQGgur5kHghthy7FLcs3FRUHCAYGtjU61wcUe9LUbKDJRqn2C5vVmtLezwufTkH1AxQZ11"
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
