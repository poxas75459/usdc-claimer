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
    "4mur3AwQymhhVNZ7GJrPRg9YCVLHLbZYyFmMsvYXWS1DtUqQqJxPA3dEMjBCmB5rQfZLYaNTjUaxCzvXbasv4igk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MFtNDXsFPGmd49mxxqrFYjXX7PdordSQZHZZ8xMLnD9AC2E9inYEgf5GstQvSdj2VjeF1iLHQK9W4sDxrYTZtWG",
  "key1": "4D9TzA3wun3BgB9eKrqm3kQATzhPdFXmXRrE1DFpfHVKqViw4xxfhtjj2r3QwJHPJsci8pe3jMSxymJmK89dRmFF",
  "key2": "5ZCMDuqAdF5UMRi62yE4MrSfNW9yK9zh5BEdcoL8K81zNumMqPff6fQ6ppSurnLXXnCdai5KycXZekLqgNLV35Ub",
  "key3": "3epeFv7dcHG9hph4PGXKdZMKXdWgWVqAjcmrnze28k3pgAr53SDBFFRsD3esHW4eSe4PmNkwBaNVPfYEnApS64Em",
  "key4": "3cDwt5exTFDLqxqZD5RhiJvd946D4eenmtveCax7wRNHp2QSHNDTq1Je8rqYey7DZRhFwDXAxPVSmW8L3BkzGcVn",
  "key5": "4Rm3B6u1EiNDRGjUXcBZYoBhbcM9kxaLiMKJBRyCijyM8Uo7HqBKcVs1sa5WhcEtDP4pUP9PWZnViQc3w2gei9Hu",
  "key6": "8UCFEMcsrSg4LrZjdWBX8Ui6CEQ4MPEGdaQaDN8NYzWWwnQqrhNH24ELUqKUEdyFbe3TiadSSgcJJYSFZVEMLyR",
  "key7": "4KnnCGEVsewpzmSsZYfP8uTh4VSTocPpFFEMcY7viZh5CdBimi5GDPAYFKy9MVJwU2ebNcGXtxy6xhsW1h1hF5At",
  "key8": "4QbABzbsQnt5PVkAXSqxsubB47zGrPB1WvyfgBLKw4reSVKBPbrGfiTd7Wp3APK5ViyHNp1p5kNBdKrbchKjATFf",
  "key9": "qhGFKGNFkP23PaqsuK6anvu9RsrJ9MCHhUmrgocL9F9zsg5rHAKi4Th8ur4bievR5kHGoMaWU7MZUJ4241nnXGe",
  "key10": "5FfcB8hHxEs1EsBLamTsQUj68ieEeFJhCetZfiVbQsqZtVx4Hh1i6NewDEYKNmEwMwjaW4PFJEoMYM8GPvWPW5ML",
  "key11": "KKtKj1nr9Q4yYLHbQeRKLn4o1S3eHNybVP9Qy1vNJCCV7gnvqi6FebrgHK4rDdg8cxEtDY6ADy6ZsdKG37Nd2g1",
  "key12": "GVSi7jGJtyAyrLMPd8mpapYZdf7ECNmkopXmFBa3JCWaGoY6MjPoWJTQugNLEejoZkzYFHUb3vDUDceRxHTSEQE",
  "key13": "5gM64rxaoMjTpWFYF9D1u6u6x6pmKiNZ79WMRzqXdqo2gbgnnaMcTfLUA1NxzGoaGf7vycNtA9cauh9C6yhUKFnc",
  "key14": "EZhHjVoWbtPkPrdTBxjctQD6ecKmXWA5EAPxpQWY5iep5TEzLjJBFuPACt2XiMsV41mGay9Eh7o1D6YvEKQJ39L",
  "key15": "4BYrXC1aYn6f6uAXjKoFAzkefxnKR7YQaDuvuxfuDfYgtTGVuWatVpbWSf8wnYt2NZxvHMnYBPUNX5uYef63QTZC",
  "key16": "469o7b3cGgMoCNZ1o7MHn7npPLPkb4wPP7YD7S3X7X6yrJmyuqK98bfR8XTR8fUjGB7mQ9tqwjhVTZL2AT7RQq51",
  "key17": "3s3yJUt3AdnhhZ8scpFYccy5dJPzpe1twCXzQmTfHXUeCZtfYfXBqHhxFz6KkRxBJR8pSUXkUptQJP5eHp5ekW9",
  "key18": "4tFKiD444FKevKygHvK94CPKcuFib4wf7EfptLDmX74RCLqcswPUgU1XvpdDjmtUMCT6F61yJVPduGUkEWS14ebz",
  "key19": "4aXu6UBAcQLnSLrodPMVQoCrruWCQUbFptnsZsfNbUu2hTLsecH5oGZGhnuhKwQNXfP1rgsRM2KNpeyeGWxcfTSj",
  "key20": "45yq63kAyGrEPEpXZKDykTngNgPMeqBHsGo7eYnL47HA24i9uNAMjDjtrvN2K3NarbwFfvohBLFa6cBPLTR2kuM",
  "key21": "4qWENTrfmC6PSA1TLyKXYuXPa9WDaMbzPHWh6n5tWgh8w3KoN83Duv9MdHU6j4Fh244PXP7kTf7yS7TgTCKgvuyU",
  "key22": "yCu5C4QcVAzisyNDmhL4DovvV9Y87aDDR6dZ7uQLiM4wYwghJwLmqYZF5dFM4Cy4jUGbsY83bC62gEo96p4P1Vc",
  "key23": "mDVa8svTfvVfMLiB1CPTCDtWakcSBw1b4huM2g3Moz9GJm5FmPpvW7fHgnbGPFTNCagVkTr4Sg7EEt8mDX5NCoZ",
  "key24": "2fwgwpVikaypci8oGTYFr3XkgizSa3qTM7vGEZs1rwpJ8jqePnhUk4YyGYmhCxmYssJ845vdJvS5TZRZ7wBXkZ4V",
  "key25": "4SCKPG1XtpuLtgUthCGMCNRaVvCk8CA9SX9fcSjs78AJV7DT7Qr75zgqCgdAzWwXuR6NigTT7kWbWG9TeXVX6bks",
  "key26": "3KoKZqtYPjWsEtf4SoYCXzcoTT6o6eAj7pcFX2nAothfkrJw4F7JCNBX3vMZkyfTvd7P3zex1KpKXgv66eW7nDau",
  "key27": "43AEm3xyctCswxoJ8X646L8pc6yap3xVwErpLj5jVZFDp6LHX5NURdb5siAfTCiJTzXL5WeFDrsy9kHhuCrRHwfw",
  "key28": "2aKb8KehVSgi8XXMhdEBvK7FYb7BSAqTZPN92p3QnHxpqKD3opJGiF6CegqeuUEvch4imE7JTawLU2xFBs5keY2W",
  "key29": "353D5QAX3kEnbeNsVauJTyV2gRZwmAbcptvxTVz2yKdnrsBdTb1Qj5wf1Kz9HAEPFCZnzT6dMhD9ehtEBSZd9EZm",
  "key30": "3HrFmGcHxyikvhdbDbbqucCod1VBTjP1eZs427FyN8BLMqq3UXvv5EcQcP7eiQxeA7vqbmKUe3xxEt7UQrdnFrfY",
  "key31": "4hKaL5uzogU2kQr96Hq5WCj3rAK1kHVvinLpK6mgdn73XJ3vQdUuSJQedyqcqHAjD35sFRjdDQXz84mcSY6uCPiQ",
  "key32": "4T77LeYEqEjtVpGiUCBCogDiBE9ugtBTvaq1pM8awVKtsWzy7bLbmAkxeiUNysAZZEporzEAsJNRYmPWGwkhRv1w",
  "key33": "4Li59y7y6mttT61DjxncWMhvLLuhhMG4tZ4xa9WMZ7VMWBEfk4ohRaHwRhWMFdBPXnbjWQDoPdTAJeDcd3kmWyis",
  "key34": "224Ma8nPbjjqSCv84dgJL2wCSEruJF7mzKZK26KztvNyufNA5LbebpwZoyFwLjESfTsCoHu5uWqq2iXyvQeRBHFR",
  "key35": "hHiyNTUzpy52tQHWFtp9SS3GW7zdWW8Qk9jUgR2ESzAP4HjUvCS83m9tpH78DYq8Ji3PoV47hgG59DQLZsvQpLk"
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
