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
    "5Zn3F4Nad8x8Ah5JJXfgVuMsYiF32RFZmKLrzBtUmQyAVBxY3pp85csyNno5JLSq9RbBVVYmW91H8fyDUaKkQFPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vj5vNxPQV4NNB36Ds1kHge3TYj4fRwGt69yUBsNJGjJWRqWjT79kcYuk4tNNjnphLdqBher48PkqgwPTUXUsCa9",
  "key1": "31ucCGbxrnUvSu5USh9uK8dRzd5ssqmGXaJ5L3wdDXvqPNCeNHAmDvGbn9FVehEqS76BTqALb7pDk7QAHXhUa9sY",
  "key2": "44QSuN2VpfPdPfFyU1xotNTG1u7HaRk1A8YEsntKyLrPyu1Tgyxqkd976qwYJR6zTT9muX1HXXisUXPb7xmfvFjA",
  "key3": "2VGTFTYeQ5jRTi5EuvnmXV5NWRwqWZtpDwjj9k8e1SkWJLrJsvF9UX9mcNeqEXykeiEUJ2xvnnZcSJWqdUBP3tv3",
  "key4": "46wAttCcxaPUubNyFoTDTMBpkTppWC7rWv1TSj3Y8yUKtPFjjhBj7hLD4SL5KwY1Fi4gJAvGZx7KMk62UXLBzi2b",
  "key5": "3vku6PHASWDmkSLxGwxPrQzmhxWLuJXU9qw9cWPmWL7b6q3JQ95G9TKDfk1zoGRXCryAnTYWNcd1YEMC6rAAVa1r",
  "key6": "2RMTkLEaBRMnJsgJv71oQVUPBj6LYEBfVcMXC4UWqiRNMXzrGz8BVstGmNEdfALVQm2mFAHKivigpbKTfweG1GMh",
  "key7": "isu4JfYX6oCYzgb2CgCfY9y681h6NWWR2rpBPJqdBZpa8z4GfYX5tzTeZgCJd6eyK2yJ93EE8boDs6JDxAv3695",
  "key8": "4ShpHDjrYy4pKa1E5Zc4LFFruqsa1gDFTZStqMNA8RAN8N8vF3KDaZMt8J4noXK1merZ7ECN43v7SASXXqC6tCwA",
  "key9": "2xwDyEGij6W3TvDbMwsuSJLYvHipsw7BLingxLc1Xvxrbf6FDiKKtBbqcycRWWem8XjJ49wp5tXaK4FPcuFaCzGv",
  "key10": "3wxibZchtiFNb9y1jvaJrpAzY1KVHwjEDS3yWGpNVoDmvStPbMCXbHhLYuX1LATgabqwy4ofXDAksKUNjTrFhZHP",
  "key11": "49irvRoVMTHyJpsfgtKCH4HdivZf2EKGrxMYKfxHcFVcnjsM1y197cMi6rN3KchbGwH2R7zdjPxg9SMhr5szhKzn",
  "key12": "3mthWEHNrX4t6fpKjqyFW7mjKcDzrxFUGZRmMHZM5zSTaHBcTbem6wW9tgnhFDj7wwRvCTX2YFc43T6TQYm4Tvpf",
  "key13": "K8zMsuDrvD7NtCQDbiZEYGWnFVzPN923gRa5PWHXpqwqVgZQWJHxetC3GXfW6AveHcUaEpibiRd7fLi3C8C6f2Q",
  "key14": "2SJWmr74goVfvXpHrGMRvSNBLWPwikNgE7b9pYxRabPJ4eJxTqi9oUYn1RWU8qsPydfP98YAG57CdPZsebhoy3Hs",
  "key15": "4svaq8qvztjZuSjGBaEKrmZ3f5DnNvXmnDi9Si5jV94eSEXbJuuTv6WbQpiSFW8tqmCF6vsjXq5VCQiwybn15qSw",
  "key16": "63DdNVCPz3AZfSa4jtJ6m8qNbvuhwaAyVdxY6pze2yX4FoEWzCLTxJuwiGXZtQuGQuKAxPtczYxaCo4qwkWeK3tq",
  "key17": "5jxc1khd2ZKfZ1naUmLCeo5JRSaui7Fwb7raq6pmqzUF2hw9a1n4frSg6kVZziwHKHvpLS7ikKfYW4PvodRpaAN1",
  "key18": "aaGxkNuX8GWt2XzGhFkx3YGpUKKFUks3vYzggKY28j91V4aZUfsrBWzyKxjLB68uMuXCegXoX6TWWwC8F2jDtQP",
  "key19": "5jYsm35tWJgdTeoecC1gcYRVCgTVNcswyJM5ghMVUyhL71KaasM6ERr5MYh5bTNoeWLV89d7mGtqGzNqPhj21Jv6",
  "key20": "66XiUe7zY8CR3gSQRx2TVuakMUYTp9Dw3w4D64Ce2ioq3Vj8skvLs23SsPmnJiBKV52Xi8HK5F1e3tbQKNxpP4h4",
  "key21": "33EtnrV9oYYSweQBsWpCssaPfz6ZLvTYeZHXqeC4DGegt8fyZY3yEa1HPmGg5GEuKdREGBzi5XGkU9q74a5pXxvM",
  "key22": "5dxztXmHs5P9DYnqFfpYqsBRfoizhQjjHAH6uGjcLdjuV8pS5dB4iqJ1aGGxZ1cZvwXQY7x8JqJHAkwBbXC1s2KK",
  "key23": "2xYmKWk7LcSth3uMTviv2PhEskrYmEX2TArXMJMJaPw1o8WL3uKSdVJF8Ea2fRwgsNo7JfUb9Vgn9oucCA8WpoB9",
  "key24": "2wxVreEzRRX2hD9mW7dJRPacRHrcvqb2M38eTqjPhH7yyVgbQVrgk8SH4Wm7E3ATTz5aEHJwi1FmTTaXNg58MoZd",
  "key25": "4piTXg16w9dmfv4SPwCLTPV23BndwUn1ZPsr1yNz4TvbtPKqBMaEB6afzSXFGYVEtASY2zZkV22sqyankYpEgtD9",
  "key26": "4GvPJ2qacp3zxyynNm5WvEq95youFEPtJFx9pRLwYMjZnXpBdhMh9Hr1CKSZmLpbPKdrt7dCtqj4xbAtejby2JrY",
  "key27": "5CEu7DVgtCPXXsVusXodU27DJtB13jE2Nn16EGE8wJJLgjK8s24voD9iepyxqjxewjB6D1v7c8oV4b4H2JaQwFXn",
  "key28": "3DXjC6iXuUcvQnXkqxKZoy763eqNAkgzDy4Gf4xAJQqdU4RUFB9UD1cAd8xFHBqWaqVCVdSumdLYg1zHsdts8qTL",
  "key29": "2dUe5UxHjx1tCVgkxY2e8o1KUJ9NDPjRbra2fBe6HfxcCTiMQN93BobuaDaTcKR5rMzV6b5VoNnBBFGcgKcvTSfE",
  "key30": "5AgS8ocmEr4kmgQFtkLesgreK5nuc7TWXqWc3Wm19eCV6GqU1rvrpaMRmTS3W8ufqB7TLyFT2sarAJ3zACa8PjNt",
  "key31": "3tSZGFbEauGa73PdL5AE1Zo9ee98KEUTuXUKUFTgweJ7NyTwoxbyFaFRBrwKDEs5AZgGHJiQg2xNxkvhyGJ8iHdU",
  "key32": "3ViFjvS4UbUr8nLkyb7EMstr5SagBr2rvKLHqoLutxtWVstQCReRf6t7ruSkkrpR9Sac1ydgvo3Q9cT8TaT7gwPu",
  "key33": "4TGwPFVCGk3QUjKJytoQJo4KdUv9MX2jhX59UYqKC5w6t8r9ra8uBBKro4RZWWkSy4tTqn3g4JmCynLtvbUwjLT8",
  "key34": "Es6ec9VFFyx5adEK77VWCeDhtutMWTqqMtGfXSEYukw72ABFBobyd72Edsmk7HMiiWcmHJVn5QA4s77XgMYKnUg",
  "key35": "3ea2zvYK3vUwfLyPEwU7N9ZjJQksqD33ybBExnY9AfshRXUfVECJvPFLQVMvrfN1Y8EL6Sn2L5rTfWZr8JhkkEXe",
  "key36": "66dVDwmgGNBrG4A7JsANNG45JwAqwpsUFWtaKP5zRhGz7pFNC58h1Lrr6wz8h1sNn5oUZ7u3mnXcc8pP3QChZq5Y",
  "key37": "3QrxDCdPxypkqBam3Pt16mSiwLGQxAJKJNxY5CSGVXZYLRWMB5bmHe7YkajQ8cSYMrcDdkFpFVbBPcPH6PRrWPZY",
  "key38": "34Dk6bJhFb9nVaGQSSoU91tyqZxf65BDKdrp9ZzAJZ9CECrX4DQ9K1JCEfwn2WpPA29fNTW58fJLLLJQACjpgahb",
  "key39": "3ksr346h7RgvSZTEoEZnaMc28eFSNxXjRf44wXmCqUQBMHnCaUAxJZvPdN5p6hKaDLRkzinr4r6xby4pKxnu3ZoY",
  "key40": "3tArJChJEqZmSDojihCF6Hfg6AUf1bkcxEPr7goR6GUrSwRDDv4PmX3pbtaML7yvdp4NxUvZBCkLdS8ccybgg8Th",
  "key41": "4i7CBMrNRDdkJUVaTc1gBZvk5bKUGnFB8Kz9n7aytZEkPMnMepbUma6hLuhoN7tn8fyrEiHEeTULUX1uidGJTNpG",
  "key42": "3RFuyj8xZQGjBxRzwgTJ57XBbKNQeAX6uftfRDEhxQwFrDxq27Q38CSPecbXrUroAz4Z46Kw47KGB1j5t9MANafC",
  "key43": "5muWSzYdJWZA4u2se4tHrpVFN7d9fVcKdN1hkbG5Kx5xoEQwqnenvU1M7mDzGBBnDj7UgEwMBeBk4kvg8YY4Mmt7",
  "key44": "22k8AdSFpLggU2DqET6HkdUng3pnBck8gtWnYCSKqwbfzootH65cGDJkAVZPTM4fp1V6N38nyvh9JBqayQCimpHv"
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
