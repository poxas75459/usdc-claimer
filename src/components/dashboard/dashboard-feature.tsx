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
    "4iQARtZpNueLWWt9ospVdxF3KBfRnHzU57YRaMiwwRY13hJ61kUgsNxgqWLPvwJK9VTpLvTAFqERxEgHRuEXi8xL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N2B3ZE4MmfSrharDt9t74Ug3ZxAsirXuKdkB8zGUn2fGZXZdeqDvKEd6vrCnUedbbCpMte6ANVauA88MxfbakNU",
  "key1": "4hz9UQCKW7nev8t6NMkCiBzWkGSJwDyPdkpXjx6XuPbjVvsEEJdHaZfBLPWLmcoyJdFwbVfXZze6Q6u3bhfpUGVs",
  "key2": "476prCiKStxNTzDDVYKC7LcSBxo3dLBS47SH5rbc3NbhtbQHaYSLkdXmZhrZhhFPWEhVjJWXsEErEqxkQ4t4Ce2u",
  "key3": "3FcG9TdgXfJt6XWXdkPUhuFRihsYehqVNomZ728spyY6UTyTTsKKh6Gjc4fMaX8Bp8Rkf3hyL9Unmyameh3Q3cs4",
  "key4": "5geexWKAwGR9tr3s2eUVLLRAnrRDSkZoCkz3uvNTDde8SuRXGxdcLGxwVFn1zAXmPy8fiYiwXovQbhLuFWWNPvZM",
  "key5": "5FXemnoZxvU6V2AZkuiPRnHkMBMMAmhxuvB95wLupYdDmYiBhXQhxGPuBPx9SXKnRMRo3K9BpCX5UAPyGW8hsWvr",
  "key6": "43rd17HdjxvMEJ9DKYFS6CjPgHkGREdp4BnLDk111vXVtDeJ19jwfFJf3nqcYNcLXb64J1ei5jhcfmwLv66zquLa",
  "key7": "3UMvuzNZMHUEktdV2fPrT94zCQqEprh5vtB5U36h5emKGcxSb13A4d6cb88NdJmduw8HUyijd3QpTAA3g3f6eL7E",
  "key8": "2Sw6U7cEt99CbLYm5rBBi92xETPmT4WJ7TJdqDkXLRQX4mmjkRtdQye37S8XeLYkWw3eK4B89AzTPCEE4dnnEuPd",
  "key9": "2YkDub3XFWQvaoLxBhbSBjMSHNp24qToERVMxzYdPTiPPH8e8P64CZ9UucNUoiy8895VDxAtXaW65yWBt8GjkiSG",
  "key10": "2ATGSNW6zK93bNAbudyaJi9XMHCWtC1WsYaYFhuKEtUkp1iqZxDcixypo1SzcW2r1Pb9kAwHbc3EZMjafYzxKB2g",
  "key11": "47rUd2nGxYemcH47cm5H1cUNU9gHR8eNH4a9v7x4MMre1ayy1B4GcHGBrRWSjJRA1UyFp8zC7126Pn9zkxf6KtFj",
  "key12": "5n2dBWS4EWJAoR5sYNovizUBxoZLW6ugf9E2WMafkaWEiij5kHmntv5AysmNvVK6VEWikZnVfRMkd89GaKCA1H2N",
  "key13": "63YKb17CKwsQg7HAthGB1QQYysfMKfo46WoeQWAPQDPv8TPdC682zkvBMvV1doi2FMS5VuXheWzNu1zSXTeV53i1",
  "key14": "4kHeb7yGkxymSY8EozbHGAyjDNaw1i6pXi3FQcPgLXC1jfgzCRuM4p9TTRsyC31Xognq1W3TyPsQ9qZ92U4FeqGo",
  "key15": "1dRFPRQA9zJ7MQJQybyieXvqN9xsHsLnNKqw7C37FmAbhEvo5gnnG3YaAt2GKCdSjX7uDLoR1qT6MWYGGd7WP41",
  "key16": "3NDB7jzsfScEbHyaR7ohVzHDZnTcsuMs5H9nqkaqsmTf9Usmy66MREv2LnvV7VjNwB8z8fUHRfeJxpyhbVurM8xr",
  "key17": "4uuEFNTuH6X3ycUFHXcbGBQeNS8S6hqz5YXCo77mdRA9rYS61YCGkDTqGwwuHQhH4YrFkwQYsuBLpJStwfpnK4uF",
  "key18": "5yia6UPQbimKThcHv3imguPGGMsfRygwffev8M71QyJeHNZrnSARAAZqej6efjHtmWJSe7UgZxQkHv9CtSukDnPR",
  "key19": "5q1rw9kiHYwrTxqDJ4Lvyc6So5wNRb7ZdGGN6opd47vyv2Mo7dpArCo2ktWqhKgnuHyDDBMK6XbcynKJrhtmy5e6",
  "key20": "5NfZAeKgPNxD4XQuDt9gTJX3pPbDH3sM7oe1aHpoTBUzNoJBh5VQnkW2g3qMF7iBMXfTPKbzHYoJhSmb5ona6xSg",
  "key21": "29VGqNi5cc7ToazFaUYUNQT1gRH9nbE6qafsGp7SxwDen3Bi2G29cFw1pvTDBmv8EGg59MnUFe5vaQdFMn1iWeNs",
  "key22": "6L9VmW965wrSQWB2yUCuT2y5Qyz7HYaUFrgL95LubkNcXyt1fhAwWFzJHTNA38kaaLwGaXwyxwt8bnctoXBmHXK",
  "key23": "34zo8rovrH7RXrv7pWGMudSjDbSNskMwuJNvxzSeTG1v2PzMUJk1ADhfMvZ1Hbijfg73XYjZpPbLhioZv7wgg1SZ",
  "key24": "3sG6J7kyTLwyZBgUWNQeNjLwudKBuDeWGyfahtP27b772a5Tdmnj1bYMQWMHqgeyrvuo7TVbFAj3VA6mzA8rfEP4",
  "key25": "ZQqAZVXKFxArY3U69QqT1xD41miuAdFYHGAj4n5iwt69Lmm283YHr4gVvbERwqqVLHA7NBFgsCxoeejYtBJv4sv",
  "key26": "3iws1w21RHEUz6hZicyT76zoQstBBv4sieZEAWXejmoHkXC7xXvsum7BGzKA16pQgaanbtMfZo691tVJPWa8ohpW",
  "key27": "VVqCkWQNiTeYjgDXtakbmJx7qQs38VtfBJBwCwtQuPi4NqWsvLjNbASgqKddr4g3Ubpn89ECQHBF9ta8oDcG6bZ",
  "key28": "5EHPdX56CjexQ4ie8PkCeyiUNn5JGfmvSdTj2swQoRfLVtgTZd38x4KHVpbm5Be6XX7MjYJYtuTdR5fuPYhe1iF2",
  "key29": "2Gh8b7s2t6RC1EPthvxQR9Ds3hHoCfUYTLhJkFSR9RR1FxcBTfPksmELCcJ921JBQ5kYVB64dcjxujRVqHhRLXPA",
  "key30": "27dRQfWikaJmUZWz3Yy655kJyfveEbqc8tGHzbCM49MMsBoDeo84PLGr16xa8ErcLVSQNaTVJDjp9xQaj45L55wD",
  "key31": "2rLEq49mbDKmhbBkMd1mfbkpFAZpr76DRWX3eBZGXN2rarR85Dp15FpRVfHw87vNSVnTMUovvDufAwNYTqg6pYfr",
  "key32": "3bT44MLjrMQGWmjnAbw1ZcejpZjMWFUjwL9f8kehv4aV3HMeVKPKb4pfmk6KCLf25XC9YGGdbTDxP6hGZmF3zdzp",
  "key33": "3vawQJxzZ8Yrd3AziaCL9beY6hYutuQzZ2wTbMDEjNSmnz4Vu2FR7wCj255arB4DKYF1HCYpdNevcAe9G3iDMomY",
  "key34": "3WkCxQBWzw5wKf2Sd6qnZfDovG8rq4F3yrBYueHtY1CLm6v382DRQDWu6ASrSBaGgFPrpL6FtKN3ixhYLpFhmoQ8",
  "key35": "5VcvmTtmKvaaPTgxHLUNiPQddqCHcTer1rBESCGm649QGMsUqy3VFLvz3jQQ4aGJrtBLRUxetLWtfgxntEzJz4a8"
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
