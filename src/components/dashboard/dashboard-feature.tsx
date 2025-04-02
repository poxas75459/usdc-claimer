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
    "rM78ciREepBKBWeKF4oDimYrTv73nfHwnKyC1jyEZgsoWvwWtzcZEXboef7iRXYVT7e8BRbCFNhnh7Jtd5Jw3qM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJd43LXKpvbQ91pr52hwJvE9AedxBefRaSHyMinv2vZsc1W4BxRbWD2dhaAEjcDPRgS3qsR2JKRnAGhyMSpFh3V",
  "key1": "3uPth3GwsbL4VKUeXWFjZa52cfxcjmvNgsokaaL2RnhdQvPF9MHe1JrehFtPybqaM7hp6LK9bwsNG2EvaM2cKet2",
  "key2": "SL9rBW1T8VL293fwswX7Sh686H5z64zH7T9wnLS1Vyy2ktyGeZXdnxtjdNVNdhX5VG6MxCqkyFQrfRvgPwCUonM",
  "key3": "2GospriPowya3TJRspdEtsjp94G7JKcBbePrR1pKYF3MdBsH5ywQGzd8LiN98nC2UcqgBLTcTYuvjHEmfegP1rad",
  "key4": "9hnhvqmMuDMwEAD7hEEU2Sjd5HLerP85mTNRdEevBHqdBb11bDpuVU3Hrk99EE6JUH1XkjHxM4jjD5xLpQrRZdX",
  "key5": "3wbLC8zkmR3ndenvRfwdg37tGNqGL2vATjA6yKXTPSeqdNpponjffMscB32ZZXoe69spZRoi6mq8VmMTpshWah3p",
  "key6": "4QCbQWPRQTMXFniJARYExf5JyWAnVz1Gp6SKc3rhRwu1JDaScueaVCf2dWx8jAViKkfvrk7jnYpiy7MUSvsJrh3A",
  "key7": "wUxuA8hGFQhgReWPoU59hfvQ6snAYxaFXPa4p3VUP2qw6W6uKCgJG31k7NNTABQXeUFGgwwUGx1qp8PKwgCjaxz",
  "key8": "2CEaQY349vY9bTJUibym3ceDkuiAK7XUrhXiuHZXPToGrSRzF1baoACV6SXzK61oqaiw89SXieWfWFhmGaSiSEbq",
  "key9": "3kjVrhqHQX857E8kSYuwBbfHgwkATcFrUuVvd7154x6khXhbSZquwe9aBuwrabzcGWddv849b7e8PSkexVbxEh7v",
  "key10": "2VoDGQBUxQK6qUd61X4Q1CwF3ztrxmZwRcgvfCDxrtXSN2K1qzU9tUVKFRtwWo6owdPtPHpxHjphByinGeyiAGms",
  "key11": "62sCYJZXKwLsATJhydqrrGCT1r8sN1dmZKJUPgEk4vvjrXJpVNNyEdqmyDBxU9ZCCgA7rKh6YDGpavgXpyrp5i5d",
  "key12": "5AcWVB1h8kAXKTgDjsPtNxC2ntE5acHgQ8dPSg63CsGFg6u49WBpMQn8hk6WFpU7n4CvcbTMEjtC9GCyEZvCx7dd",
  "key13": "2hMyF8xWpciaBshT3NNBTjKXuExMXU2aNDqavqtBENzC2xHs98xGKNnTwDJTNM8H8DeQickbKJmQDyxS8QtgpMdP",
  "key14": "5Ax7c2cQAxzJ59fJKDNWvM8E5vhFq2U8aGQdRim923YukPkGgKnoJSpcsjQhHU9X5Uofb3gxPvnwRnLwA4ae6VYr",
  "key15": "257SuBUL2jwKQhT4T6rpJ3VJ645XRZoTWLT2QPrKfCDsJG6XbLvENffVBVpNcxn2vYTr9YndzmmERvLFoUzvGdVF",
  "key16": "4rjy6CAhnftXe1RXDC9gDG3sDCX2Vy2woBKTbBAMuvyJSDM9HHb7f9nQsuCHgMrE4eQWf4PKSnXyQpR6h9j66wtG",
  "key17": "3iLigaRUQDAhoTjvKWzCtiE8VcwESgviagYUDdXtf1gzV4n32q6tB8HFkZoN65mKWA3ukWg9v6xY6bvJ9tiptDQ3",
  "key18": "4DsAXkhsygRsKCUJaQ1FLNMxnb21V4E5sceRBqi592uLJXgbfAsTDehy7WpDShUmdEv4DrFR4gxjUm73swZxXV9C",
  "key19": "N5PerBmzsLuayRFTHvQVSmjKiuvSuYNNhKqMX3qXZQq9grTJPibUbxVwJfAqa4j92mrYCrM6DV3V29NWo669ReX",
  "key20": "3ZTuTiCxk8hx8kNsYPtPc8FzXtFDqKEh4ryXKjXeuN2UNRjw6ehLjKxtXH6PxaZQHrdW2gkDZK36cfq4UGYUBkvL",
  "key21": "3gkdyGc4qgGn5iGB28M2tx1G36wd1G9jSir6efz1qDvF6P3AWw3oUMRKYNZjU4hNSm1tPnhRWhP8EyWHmPguc8cR",
  "key22": "35py6Nh1TAfBYX3EazK4jRiK7KMDo9vpTCg7WzDxV4Lgxjfha6L4HFSXf2pbo2RnV3RFoZAcW18kMtWs5X8jqwm2",
  "key23": "5amqDCCzizZfebz9k52VgPDmpVdnd3YD1TZycnTDUEbRoY56AzmZVpi44zhStH3rYYEJboEVq5kWUxMD3rminJ2J",
  "key24": "5ZKBvRVrMkJ4ED946kjE4A3xxkEzQoPE1bDSgF9VXkiB5yM8FRJSViCCTNahUWqwmahGaeYBPDCxSDtsEBq6bJ6S",
  "key25": "65SorPHLaswBPPw6iKwBuGA3aWZVQ944ST8CbSonKSjqkMggr5d1JCNXRFSg3e8JAWE8oPwEyfiEf8qHZFbQ6SJk",
  "key26": "5WSRE4Xf1iiMP5eTtnj1EzCjMNHj2oniYjTCP6mfeFJCRjXTmYfMWzMvfpdLbrTPXowejTF2bucShuFWDJPxEsHL"
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
