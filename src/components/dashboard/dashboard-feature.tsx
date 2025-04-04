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
    "4KNJXwPd4c62yAPpbuhG6nVTa6aEkB2BzPYSLEjTqwQYCdKJYsumnp9SKPzHqcxgzLxaydogW7R7RBsgmDUmWGQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKfEpusYSFDopvJ2sd7Rh3yXZX5TLk55PQbMW3xp26yjPh1JBNHdRqwvE7a1CvvvBaUP3rVutujRbKAfwxpgEeX",
  "key1": "2Aa5kVwjkeyBUshZ8WdX6ZKy3JseRk5S1bm43yvAueF4wbH7fM8ZPSsgy5fAHoGMoL2m9qciCYMjDARN62Nzhhgu",
  "key2": "empBWcriynx5bwPC1Lkia3o5yaMN9YEbCuXPwUCxTuiJtZjpvnsf7d7ungsNtzaMtVkAw8eiTDn62L2Qo5L3tjt",
  "key3": "2WMreExwmYWxUj7bkwdkkf6JSCNRs5w4zb8h8TFk5hESw2q4BZ2oqZKVS5u3Xc6L5q824LXt9Lo8dszeHzv9SBwU",
  "key4": "32V53wQpK1dDVLgWJnxRGGtUGTDuRXsmVDhuPnNz985duc1Z7PWdhwDfwr4NeCMAnGPaLCs3qQv9xsbXoyxWm9kc",
  "key5": "4YfK88p1MBL6ijcSjmzvKSd6YJv6PRxXcEiaCCVNmCq1a26rDXMBxrHx9RSXQ2rssZoo5jQkPKgJeuzF5w7r72ER",
  "key6": "5wH87PHZsXqSXsBUTC2evF9Q5GPgpbsJaoNbNuTtf61wEeYtSmexw5Lvcxt4svCUR1xVzAzsciqvWgGrUwdo66wk",
  "key7": "2HZDwx8YUE74tZQt3nDNSdeP5F5qmeRK6pCCvAmqeiX8S5qhZKnrkRfV89B4Bb1Xmbr2Q9g4FaFgMiPoUh4AJVAX",
  "key8": "62Xc5cfkaZF1MhzRc7dRzCUkn8TUrEuc6Cas7ZgQckwjvDktAVavYFjAaA7oGz4tEXfmBY95rQVVSZuuohEu1tgB",
  "key9": "4o2XW94W14wnPky2YpG1cS2PbDSuUwsM1s3L2DxD1WpPFTj4mBihF9fmZbB8yvXEsc6Kwx4ojtM4oLX9P5th57wF",
  "key10": "5PKTam3zQavCyUcpe95iqANX7xmPwsFBz8qhgZ2YX7JUd5XgdZqh2owxkfzbapjECsvyLLxx741ArSbMNwbmveSM",
  "key11": "x9BkKWqWNaAhNFFscVN7884HwyeuN3fZVstW7TydMaMqnyaZQbyUBbCeQuQiy9JHWmpigFewimC8gFXoMGbPAFo",
  "key12": "2MZrhfEV7XnMMKetJZey7MYiTJ9hc3ThjypExBnxzU31UHysHWV7j3WF1frTqYRVFLvjaLGCgiqUtsQeoSWgRUGB",
  "key13": "R8uXAr6TKpBHbu5ijF51t9UrjjSCuFVtM7YRmeQEhcvdEfdm2z8TLHLRcSUMe9sRJ4qnPSVXYh8eDXSxAb7vD7Q",
  "key14": "FXXWyhxmNstdo1ZutDNYmo1TERG6CzphzYU3erke1qXaonRtcMVuT3z9B7Q1eFjMTenBn79A3JvxVWyQyqsUpMi",
  "key15": "5B4jA8EnY3CqsJrzScyS35GN6r5ULNQpiz5r3g1kzBa4Nrtpvv3TDT6aE4Ti6YmBLqUMSwMDRCTyEz5v15eByCDA",
  "key16": "3YrYR9PqRY1ZWsspvD4uQffZ8rgqJnA7sGHyrhCuDZkP7axiuX2ci3fuVitu6WBD22FzhbC78bsdWamLpuvJxxkB",
  "key17": "4WR1bUP43PTmSVorinnZ4GN7UDHwz6pMvJkCnyHXRHizGThng95TsK7hsmUActkXvsrqeJnE4mGfSe5qtLt6kSaR",
  "key18": "5m44nyn7HMnfqqb2gedBC5oeQjetq1roKeRFtKiyp2odteDVetJ3nupAodSLPQVYm11d3ZPmjnmhzJyd9sSMJ99q",
  "key19": "44adubxzabBc6MezmNRzpmkadJbasPy4iMKonzyxhEWXUkD2LWyucb1WyJg2XSE2raNH7aLN8Xmt6PEook5zXNwj",
  "key20": "4pw7PcB62mX8Q8vmeiMkDDS36awJuLfJanJbhPJ2qxUSwwAXfcgSi89tPu2RvcFEN42X2kLdKptpZdwzmSvYAazU",
  "key21": "5wqFpCy17vBXU2qermeW9eEBqXDqLSDML6d4HYQYawXNnsBMfaFnws3mSem8G2pcyHt4akD66kGUbRwVp4PEmo61",
  "key22": "3o1nCwrEpCMCzGTeL8iwto6Pw4edAmvsFZFKibnTAjHqLy8uvDVQKUoSGxFLyMChyTfXKDZmYAAoX9ZhjdogRdtP",
  "key23": "5R5EexxcDCd34W4tyMTQVRdC7XDUcwCmgzEGfLX4R1QLo6FrUvq81YDpiBEgXWjjVHFgQ8e4ouNEYcgfAZETXuBu",
  "key24": "NBFoCDc4W1VHJecrr2VkGiYsMnmCBMapHxUPHczawv76k3PhHeMbwkr111JgNsbXfy7PPoFaV5hL1EZ8xQMuB6u",
  "key25": "uCgDxCBdtyMvCG371cpW3M6A6RFaaBxNNSZfqA9SQPpSG8yRxRcmQSE9arzrMyT9MFcpp6RgbQS1RzAGiFFW9k5",
  "key26": "2C9oYkf6UQF4gAAxAAJfGk3gRyrmsraWfpH3Rk81z9GFY7eCcTMQedD2xwiwxUJcmRK4cpDXqXV7igfDYvxMijjg",
  "key27": "4CP3ZPneB5XjowNRaiJjswF7nQKQyzxDpm4Q1pqYUu31iqJS8WwChhmBDuKw6S224zLCccYTyuXautQDmtbifMhU",
  "key28": "tjvyuT3cAwxDHDYd7j7F395mMQv9X9dnmoXC5iB5kvM7BirBxCfzu1KW31JcSB2KnL9MSXva8KayG7Do1THBCJx"
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
