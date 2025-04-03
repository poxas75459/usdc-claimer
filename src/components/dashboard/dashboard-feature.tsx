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
    "2ivzFfMXA17urBDbyhNd673z8wayX1kT8iXs7GyYo1w839Bv63jBESsRDgXtMm5Y12rXs2voS9XQTWG6R6KMSHz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqfs7FKaggavjSuGYiW4yZqJmPnHkwndPH5CzoWQSb2PFtbPKWkhvi7s31tLnXQDWRYNUhKmu4EMuyxaRSRxjYm",
  "key1": "5zL8H2HwPyJ9YqQof7ToH2bdok6Wq4uEyT9ebunNsUpNtJELv7vvxChsAFUyuDt4jtcNjft2c5xEHBGcHC4JukTE",
  "key2": "2qsGq3WBUdrKwAqWJK8SJkrtzKCvQnKU5A1zR7KimAYumCPWQE22kWkeundBEBY4ZhduGbTNYhGsaEwmRnFXQKgW",
  "key3": "4D1NjMGbdJZo9BDXf7vUTM9puoE4X4V4VimeMyTmLtozMxHQYV47ntArkkhJCGQ71s8aDfVUcs2jzA1qwyMUWeen",
  "key4": "xPxZHaJPDDAsNTFZWUdPWZxvRJMmn1Qjf7bP1YTt3Xba8zPfmUL5eNNrxpBcdswS7cLuZPBgnQPmo8RN6QBFZNL",
  "key5": "3e8T1uLnQ7jU8YKzBreTeBqn2G4ppb9fYYoyuPQo8p4G4tJVqnxbE6XpMWU7Ru7r7mPu5XfKkdiRAh8Hnp1zRvJK",
  "key6": "ShnosDWmKtehrcB1ip4bLN5uBb15gqvVWdDNr3fWzrJqqYyq9Lrdyaba2V11yGWe7bHph2P6V2NSptAyg3PGizF",
  "key7": "VK5mbFEhQoFLXKqwhG44RVi59wK3J8pK47bkULeoA39cSv5kKANRxZXyWUzmH3exLLVo6s7XpTZBu3k1mbUro9b",
  "key8": "3G5B91oEHxBYZ5U1ZcvB6f8PEVrGWmvxMwo3xGQXK3mHvg3s72fCaVA7p8ddWHez5hcqNJvZ5t5dywQ2A3QcWaYV",
  "key9": "5iKqxJKXtyzvWFNyRBrtjcBTPrFYBFAQjuvtHPbzqn5rPeJnWpspG9ME1NbEvAKc8tHcWomTJUugbWi2aZTW9a7Q",
  "key10": "2wGjnmNZs4W41wd5v5wFKcFuCMsdDSoBwZ8ay3Wqpk3Bu7WcBQwDAKs576qs8NKJywQ4oxttDMVWmshhuz2HcWfg",
  "key11": "4CjSnwq6fmoCYuwm2FpQnMpFrycTMM3Qdb85Zz8o4QQbEtRM7xBnwMX5hdGFCq1Z5YeNLhrHLajTcWjMpMiaPEYS",
  "key12": "3g6ZF6LuooZpd4vCPQpfsMKBGceCbjfhJbF8NffimJTDSL3Mq1Rb2M1USTvaKnAQQ6tfxHQi9sHjPSmJ3JMsaoGX",
  "key13": "3k3uHuzMowsWz5LsuL91HT64R1aaxvezpxUfvM93dpg1dLMadD72RFrjSWre5R4MWQeiewG8jQXAJ9jVrYiugUGa",
  "key14": "5hAFYRwHSWXBC32ZSvpJMAxw2LsxZXzpmPL4vn9bcmvZt5nqnvHM5ED2ggiHyVQQmzVWL7fLv9bkjTVfpapYKR7n",
  "key15": "2dhAzwMSDcqrzFzja4dCQ4VedV6BfxD7XS6V1RQcNpsiKtFg7undk3uG2sN62cK8fkQQYcQdGbrYkXx8gV2oBcLo",
  "key16": "5xz3ig5ocMGXGt9AiyXJ9HfHrfpgfUfjPJSSMFFuFhwvnKZTZULCJnFcavt4hrEcGAsEyR954LWnXc5ytnwhsao5",
  "key17": "5n4wMoDbUWSwMTYkAHoqkXfLkRJT8gSxedVw4w7YfFARrRYrpNVizC9mqYBrDT2o2BNJ9tjCK51c4cfbmfEyiz1k",
  "key18": "2hKrxNUamkdwQef3ngK4PSVJXE8CEBnbiijkxuHZoVxbC5Yxud2YDybjNX8e5mpmjzRRDVKyeEVCjS1sJnpEmyP9",
  "key19": "4JAeMhPK5ZtdPE3arB4w3G3ZvumKKmshyqf7xsxnwGYVkwx46cmeWd1ZSwxqCEwwAmLogRgdgwujDmFYCPv2jXMA",
  "key20": "3No9aA6UTsdj7fU2dUPcZSY3yfktnuDpqtBtuvFktFPajreJfRS6nS1TFxhJKUS8mj37QaxEPLPEcqWfDcJBLjej",
  "key21": "3ReME9xWgo7M9JWdznyot2Sr9UE63iZPFDT1MLh8U7RTquRm4g3LHywUm5uPh8Nv2Se3PPurpsjvdnWc3HZ2suWS",
  "key22": "2C3bLpKKzZJSWtrji2LifxZKPZcXpRqNF5C2gyW5SskG32eRgu97gfsG1G6BhCgspZaHpHzQLd5MTk6Z84PeHi1j",
  "key23": "dSGrw9EGkWMRnn4Ud9H3wy5j8fw4ZEPeCdjaQQb25sWM5vmobveruHjkhSEkmsf3ZBRXqSSbRQQso2Ub7nwd7Ku",
  "key24": "2pbdRVgedQ222hfgUS9xaBc4CtypveRkFZFarQp12kQ3cSjGeeM5CQck67BaJ9AUnzQYJChNreCNcAVtiGfGyH4h"
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
