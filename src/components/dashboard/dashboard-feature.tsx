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
    "3ogAcSGab2trqFUsT6ZoPnYEZQi26EJSNi8NqpGqZLYYrHGd3kZ5nTQ9g1CeVLgTjp9yVta5wMJSYXKuBHJ5NkgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dfiEBf56a4rp3eJbMSLynh33Tozk6szu7BXyK2eBu9cA8JfWqU9RCdoWomwfP3DWyJYjdVj7CYFMMn9pJPjNhTf",
  "key1": "4EJiVi7WHYtK6UK4cGaM4cTdJDYYmcV3uAXjYKwP4y9CoV9iAt9dxqfbmpqzbMfbq7qGAE2oeHK1xTpiweWLj4Gd",
  "key2": "zfq8Y1T3R6hbvbEB6CnPN76AAz4bPSCwEkDPVxW8XGWpu59qWVjyz6aJa3jMa4dDWV1SBmbkGTkbTnrSonML3Fy",
  "key3": "5c1KCX2zB2sCjZ9eirUZ71MSgg2D9hqPSNtJmDH21ffHiCvLMND5mCsjr3YeCs2anyYypwqxWoB3oJBaETYbvssf",
  "key4": "2VZfnNG94cArZmjj9A6ge74bufnpZ1x5478TZRwUxiqBLB9iqjjrQphkbgnF7vTAG3Rv8f6uYMcxLy31NHz5nhFH",
  "key5": "4D6PWuSDz9MVfjFs15s7kBZvCcmwwqotwcUbWeDhLPWPQ77uQYPicBVAsGYQSZj8tVrahYQu1SL744EhZuHaRNLU",
  "key6": "4U3v6nxHgi1HKmQ1T4TfNrhq7GE8ELTcn8WguM9hvNunNYHt1TNGeCgWAT3XEck8bPChDL5yZEEAb8b4TdqUNeWR",
  "key7": "z9dBHwg15UPkb3iM7o3hy4suQ65ESmavWqsVS7jjtYSU18ctGc6tGtE4F4Qv3tHjp4QZarL5VMj2ynVDyU3veTW",
  "key8": "2Cx3RGkNesgzppp3WQhLqoiER427auKPtDF3StYFBm8AGBYXC2GYGVfeuStRC41Mdv3xnYS3xdHkZxgaXt1hBwvP",
  "key9": "4cAMXeRu393XebxLuy8cvpVkPo8WzvmS5QbRrRGEqiux3rTS4HDFGgXw2YimJTZFguY5qFEeRBHUNZEAmcr6KcRi",
  "key10": "3M8STHTGV89njAPVpt8pqHGNvmy6u3EnfSTkvspdZ3WNiJ6QV4MX6HwJUZu1gDUfqGKu5erVxqTq1iT9tXrjMuAz",
  "key11": "26o6ezq2A15gineRSe4JBqdBC8pQrvPTVKZHFN6imVEAfn5Mn4ZVnaHFkmGTznEgcPd3puKYo4HVCSDZo9WUh6mV",
  "key12": "46w4nr5fVTcwuM5LzQUCRLrgyb9ezLUj9U1fWKLnGN1VFy7oKkp7mfs26n9HWWH4MMcaBAM74C97juypo3wUCQLj",
  "key13": "2MAZxCkLG1PTvVR9szzMjucZqNfzrm9k496MicHVQi4LNBX2MMgGTSMAEBCoQtx698jo1f9KGQgsnKozijvzLYve",
  "key14": "3prz4xu8AaGwcoUGJq94G69AZQgTYcMBqcksDwvb4JrSXSEJcp7RbfNpRtfnVYwKbvKAxTqpizco6RapyhPrZ6Zx",
  "key15": "AkvMz1RMqrzZoJLXW1m6sdT3SpkX6hzRnBMeyCSWq27AsyYrZAX3JJQbP78vBdbTL22ywmqhKtgSV41NLXgeHTZ",
  "key16": "2Xb8RPWeVFvHw8fW4vRMhiH5RUCdpCTAm7x3gZ9yvzPsHrEqb87VCMZs62Jtxe4W42JxpeX3dE54ybY7Xgk83XMV",
  "key17": "44oEPEBnek38zrFQBKapAJMqSW9nHE4EDzn5zTtDgCemxBL7CJHHMXrNhtoUiqMyPisB6XfRZf1oic5dhv2XCR8C",
  "key18": "26BJMex81QtQLBRfa65SWknHfNVwgZtx1Zo5G8YVVM8jW83VamLrofVLGNQJh75zEY4VgpBJUAySaczZ1eppJ1RM",
  "key19": "3Q3PHPNzLDrq56EaBJSfxqfZeE84ourPYAx8tA5cmSvqkcMP2gXk3jzhsRDPaMAfx7cUGkog9Ficuuk13jEy2woE",
  "key20": "KU9rMdrY2hpZJ834qUg3WEyBW2w3Mpt8jRgdi6GVTHGiNw2YA2pu1LxnWKrdsteNP2YiTqvwuwTrJnbMb4bgwSK",
  "key21": "fMxwKtRzrPzWDMzN8crKm931M2mvvmBLY9PCWug4gDxgy6GF6hK3JfZQXeyB8GNsc2QZFgZLA7ygdvtQsYBjZZc",
  "key22": "44kqzYiJziHi4XpsRwGmeQiLCJ8phoRnnwEVscDAjP85Z3QiMefBqQNCQ4siA2xGKoa2UDviMLXh2yU4CNNJmrNC",
  "key23": "55VqUmDSw8wXWQNdVfvaZcRhUnCbpfyRz9wZ2k3n1B3tw7UX6NNgY5m7eGRkCUhHPvbQyFvtsXcQmA3amAhqWHbD",
  "key24": "4d94L7toF4wMEihw5UysPhpYjaWYtdG1sQHEx4YohsG1fKSM9KqW24h85WBWjxiz7Yp9m4RqzkScLfWupwHjU92H",
  "key25": "3oHippLvYf4DjuFthn6F5zA1HQvtPczdtdWhyTJCb1XdYpMdNZUC9T6YeGJEaQSfstmVVeKuKQPgyyCyXTRthFcF",
  "key26": "WRBWac4GU7jP8kHNjac8NXtXjT89J3JJXTcvbXgJGKCvs8fCiwnxnSt1UtrHY1J7GSP45uAVh7zackDqXKtAqEF"
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
