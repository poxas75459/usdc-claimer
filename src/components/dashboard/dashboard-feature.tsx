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
    "2QT3PUsmyNYezByHZ9s2fcYXB5b33pdBYhFSSbKj1KUMVQxjcLfFAXkP4iUv8eP8a8jRyxnVthxj3wuDfBScs3h6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pweuXt5eADKq69Tj68MhmsAoTBoayeF2xGD5ZPhZEW9YNduUcQSLFjcrZmJhwg9rxXaqczYfXnNChvo6BJhuMiG",
  "key1": "2BXghjZBfTy6LqdZAhsdPv5CcVJpu8m1pJaCYYes1o99tKgi3NRp58ws7AizMYJ1mFTkxXQYsH12NQUnLuUNtKWK",
  "key2": "3UBvHuf749izsbzZm62XxeKyWihx84bFu5RESjfGyboGja9vnX2o3gNDdFDGjXkxyVa2m6eY9Nw4Q1EUMceQ9hLF",
  "key3": "2TUuW86tR8pt8SQKTbq2h4bS7dsbozWGxduWRej3Za2QSTCJi8hXbbHHh439JEKv8wV1oq1K3S8ekiDXhsMKuXWZ",
  "key4": "42dKZC6UUpuTwKTk8i1JgEtXEjXTtCXVBmyWz6G1b9usJTN6Fn75oWjRkp8QJqBzTaxeWyX7rxtvmkXbb9gexpp6",
  "key5": "ZrEggn3u7275QnfvoWg5ZrxqsaKiChk3zR9LNjBPEFnQPdgYGdJpYjG58FRHtTpNYrwQnXHcVdWfrgGMx74JFC1",
  "key6": "37XRxNhd4BStKbNwN8TY8JtLhiFf9wY8Kue3wd8CPXeSVidFZfEF8HMHrLEHA1uoAxrdnmFnSSxAv6F6ugtHWwph",
  "key7": "6VNXEWuTKMAAzD8e3C2dKzGkyNHrVhDQCsTkPKHxcwb3LaMUWhxUt8hdQvHGvWvBZhr59DVz2soSrGi5rCLzLUA",
  "key8": "2f9peM1QxyVjwXAgks3FGuM2DUaBqbqxuvnMHum7uMtKQhRXsSHYAsoXzyQKh7Q4E3akRx8A2RsWPm9bgWCeStS4",
  "key9": "5dpa2jvjvpTjTE4BTPPX76vnrSR4kSQHjHZziJA2MhWVmj2dPRisY3GYUXJwLDa2dRQgMqdxsZRYcF9sDTMxdkvF",
  "key10": "3s4U1UEeWfYjM6TpNWV4Mobk4DorWrHGtpmM8GH2Ro8gvxty4Bi1hWKoBL8ZnSCPhH685ZMiSvNqDJ5dX4imnr6c",
  "key11": "2TdWEXuacuW8i1gAiWbyju7L6ky36k8gV8UYMv2RhqZTmHTTo67AzfG6yQKrn4vGao7qgyfMFr5g3odFYip6Nt3w",
  "key12": "ou3erTxXYrgqWdcNfttmPw3ok1p3LB7mQzjQhd7PPgpMWFVkZTsYAeXYDswPBkx9gKQXL6Wg4McXyzgjrfJeG6M",
  "key13": "4m5LcFmEZZkmKhW7MNNuz5QcZfvJHbDSZ4skgTARMQr6AavysEafaJq3a86MptXvkNP8KG63qGbmNrduxkRxAxAN",
  "key14": "3sCWEiWL8JdpFCwzWLPwYJUaVnZsauHVzP17gN18nWje5W3UwY47srbT3NiMRxTRjFsPjHhBWpGMuoD9mDKvfD5E",
  "key15": "e3fhJnKQSwrKM9BQALkQjY5hRCZpMSDjjc9T5b2JERSV5tfLBxMKMbYbZCaAXLRCbsK1RSvkTVBPkyY1T8thisa",
  "key16": "SckehCqzXxTwmvYiUGqcw2oaE4sZdhzBKJ3CbHQmsmjWa38o6TuN8jGnP6THbcmMJeyntpPzMxBSmQSgLE5otyA",
  "key17": "5rsRVoXZte2pMnebNdnoH5VjpLxfsQYRSPaQNZv7vM4jymonN2vaLJz5wGVFeKXWvyZcrBM1CYZa8AnfzBRQcsc5",
  "key18": "4knDx7iPELat85X36HL8d7Xq7ehLtn13PYZVACLod5c7k9jiK2ysuLu7NVeeWMZMtanDEXpRfuGNqYDmcwUXPtt4",
  "key19": "3u5P2NqdxyCci55EaJjHoBgd3og7EUR7Ekeu5bWJurYXfREkwPZ7p8utVv8wzHtPSHRs2TN7D4KXk9xqyPtt2Wt6",
  "key20": "3LzheeAw73eGZDTpNZEoCxzgSoE5W5ZdydQjX8XBrCZbzpiciPvHEFGHKpCp648g8TfXWf26ePiWXwrhG8xrYCPJ",
  "key21": "mrXU9UYtxc7UmLtgij6U97SU9mQEhF1Jtum6HRSuyhzNyawXiJcpFFBpUnrySi55xHWb5noLQiQYaofttTdp8cp",
  "key22": "Y8jhG23B17eKJ3zV8kbqAchsmGWawdb34kCWD4D7yiaQH3u87bmcRAaKmLJnZe8p9Ls3QjnanUBCAhc3J4QYLrx",
  "key23": "6143cYiASxCpdAT8GAcZJRAZ4nEmYky6vd8xANoo3H6oNJnSVfEiZFkZFRxTxsCbyPj5EiHzs8UszEDz1NRHsnxa",
  "key24": "119RBqEQX5vQRKpm2m4W4RiEstCYjS5ncQ4BYGFzFcATSNCL9UnTkELrt9jmtqZ1oqX4d18R1r1DXsyDC5rHSDm",
  "key25": "559oyzy1Qd5NuCtkTmZnVTKRMCc1KvNDYRKcgfWN6qyk3eSKZMgK98moJof1PfHicKbZqDY5wBo1y7EsuiS4SBgT",
  "key26": "3VAQeMuAWCFZQq2bxx5S5jbRqiz5H2tLG8n8bGwd9pNyk2Se8Cs61UYkrbVKReSmP8d6VwMc4mJVwzqWTVNjCpNZ",
  "key27": "3d9jAgASj9XNWkS3Je3EyA3U63MvBfL71aWFQ1SWC3Kezio6hxZCzgQNLpDtczDBdYJu88FaVGAVQnqiBVNZdfCP",
  "key28": "6waTY5NGZiBW1BUX4HDau4tcMjVhLAyQpAPakS8gHPXGVQ7mD2Z6L1QqwUBQwbrUM6FbNuLXXYDpRdbyMgMyjHv",
  "key29": "4xxiBoYVTC8buVAUynG5s4UuZw9wxRCVfUqhBek8A8GedqHLzpVTc1pYJSGHAxQojg7pz1ND7bq7ce3R2RZqo1KS",
  "key30": "3wqayeuNbuy5ELYqhD7xTJ7cJVG1MDQUZX7ZRFGY7xqgDMy1r1L6iKaz6HCyhpSiEaom9gD9H6Rs9ucWRnE88wci",
  "key31": "3YPSjADmuQs14R1zDbYvEqDu7uvt1G7Hs49bf7iHTFrgbZLD4gcqqeYZvpRftx8bELgXGynwFPUGmLNMqgzjnUzR",
  "key32": "3G4yHYYZU32FXQAXNt27B3KDYbYD9E7egUjC2ePco17LFEJHtBP5u7umnFXU7Txui96gF4JJe8Lzk4NLBXpLCupT"
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
