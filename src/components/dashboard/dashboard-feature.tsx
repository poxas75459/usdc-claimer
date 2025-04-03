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
    "HGfouCxcVNMXAUrKM6Jwg7MdDuvgtazRmrTmWsVw7pxaCFwcyq931wmTJRqPbAhjrAqAXTcPuMWmPhWkfqsXNKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kfeYFJ8UqviE5ns4Z9NYpomVumbQYSzv8qvuXaE6U91TsxaB2vgvE1RZmVhxkYEAju6k7cf3b32FsjeK4E1b1kM",
  "key1": "67ZnBUexhgxbyT5dtSGKqr566KAD4BsVQcCXckcsVrPLK4uNHbkUqG7JXHsDYPSTVM9KvSTZQ61Xv4WqaCkCb53o",
  "key2": "3pNQisp6KbLzKRrrspg9gsyyBuhunFARotS4WaH1kiZSJ13ubEb2XTratkDdn3PuLxu4bDBkSMiWaUcDnefucqYC",
  "key3": "3wJznfF2R5yPfwsndx5VuyzJf6HDLixopYLhXwqTT4u24PWteRzoqzZyajnUkojndD7oGGQyRfTwpXbzZYVfYcwf",
  "key4": "3R56mzWZFTZ44Kb7BmJXuGuSt4W7pxo36dRtgbxS54YLS2tud8YrHDbZDS6m3qkT5qhyTgjimjJZDa8X5oLFBMGY",
  "key5": "3moEmb7ryhoPTUPmiSfhQ8yaEpD4UHcmcAP9M4ghFyzY9JzVxZZ4CUKXks66BvxFLPmXS8zkrmeLyeuVbTXF9m86",
  "key6": "2xrme8Spnx7omEkryR6jwy5MMAdFqHfGAUaV3yDKhJ1GDMXEntuygP5aH7xTPSBKufMmUD6Qx9txnapzhKioniLG",
  "key7": "3f2KeJmqwnp6T6S9hi5m5PG4WgDtc8ifnaqWHSqPUoLCq5F9WqLqHRcVKjJVrWGMxPyftbrdqqYUvoS3TySEQSBP",
  "key8": "gvLVkr7dqy7itJqqguLcggGTWpGCkoXZ3VighC7a5y53jSUhjjtuVsupP1HiSNnKtrjrmudm3odxXPJqt2ADsRs",
  "key9": "2133ZoNsB4LetCk3k4gvM7X7PfvVKQM6K1b1eTAH2vnm8UxuuNYjzgUg3ixYWFuHgTRGr56aDKwhngfEVVot1Zgq",
  "key10": "3krHwRzmoQNeTqDDNprN158HbPNFErbH6zKVwS2qJbpmV9n5rV2QVUWtWXhc2jHq8WZSQXefcG7kCmNhn79YGqBs",
  "key11": "26AhEgmjRxQFxuB7WTANiR6UrQ6NgBqrmhL7orn2BJ3c1qMYasGuM685nogyRKuRjkbZAoPxTe1sdg253tqh66w1",
  "key12": "3qvyjRzGSWQZ6xXb3sa9VEjBppXEnqP1hWG1MzKK4Eum3BPbpLST2jEbZSBEc8i47gPytU9FoD6wcBrySTxcBqy5",
  "key13": "2zQd8saKPmvAgzChmehRNG96jfNVmjMvxjhB7CGdFpCeh3wxcz274hFo2rNxeh9cZHCVEf6ztHLrbND15ggCJ2MV",
  "key14": "Q1HdgmYowaYm9Ti8TbBAcp6GwRE75H8g7oDPQgLrZknUxuB65cs7MwtKjcAGWRnzjwy468XgcKs5PYsgRxPMuRP",
  "key15": "2HHCKfegWrtG6aCxFg8r65XnmMMxpyyG9meo5ubMvaAyhx36rYBeuLfJg7rUk3JecFxasoE7QbKe7VZQ7B6iwcH5",
  "key16": "3b24EKwzchgPjmVfUGBNN9hnn5ahV9UvisdPZfJrvCy2o1hQHWotFGmP4bHUtuZ6K3TSgJHgrAU8CJ6zjk9crWnY",
  "key17": "2E55yLvyjAhkPQZLjQxcNhH5gpDkVtpiHFtw5N14azaDpKiWVVar4vrPXjZ9QBYcAw6XCRpFdoUXD3igzB3EyeGw",
  "key18": "5fDJJ3UcSKvT1S3DP4pNHLAt6xM8uxtmBCni5dep7XKsB3Bc76XwZHaVefWAhBimuiSWSr1HmBdQXe6mYT3hpwq7",
  "key19": "3fBZEXgsxcbDZF66NDdS2K51EAFpnyPTfjJgeNevvbwLq8mVPng6u8R4VdtcNdp9Nya2uMWEbECPGrHKVHG1TtXv",
  "key20": "4YpSunPeu3QoHU7NYfYNv76bBCNfzRo6XJtiicMg8KaBiiEZGs34HjVqFcJmLdeB3JFuAELemSERo138d3ZmqWXY",
  "key21": "3NKLdpKB4njiL1L17NCPT2jj3jPfBTbaLCcZPeQAAXnH8PFaWWnLBr6523CuMQpmoVrG6nRdR1AcNnonmSd5zLcV",
  "key22": "5iLJ8Lnd6v7SLRpxsffcC2BZQwkTVPamDknXYENK6Ugq9TBraWPMRP2XKtw7LxMCUJH5P5dP2suL5ro2W4B2PNVn",
  "key23": "TK2p4CvFEP7vYyj9k8JtZPRBoGZfWhRJF36fijCEPdpjRHvdP1KU8zxd9P6QoxHzQVwRxXXvnBxzgurdghqLvzB",
  "key24": "3oeta3m4qSi3J4tkm81F55ctJzpAd1fkLLsA8Z5jMzeyhuhEF5XKrAR3rq3FwdybFVUA7oypzAnSQwsef2npXD5o",
  "key25": "5xHZnG673orVxBbYonGVkqx9e3SGmeekrTi5vTCijpK6hy5EeYuvNw2bbaBKPq2f2v27PiCUjRYLHUgz9wt4VLPX",
  "key26": "4f1xo7PZ2gjgMznQv1s9EXvKk6A9gKnNs2Sv9FKq3mCZuwedunYeDsGg4886sjSsRe5ig6doFB6LRsaFczBwRo7K",
  "key27": "4dXHZGcT7ZubzdHp5KnTkDAqfA4wiDFTVVSU5URtzgNuQN2mVjG9jE8s8m4Z8Bk5VbiXhNs5474j9eDQHPWWJnMN"
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
