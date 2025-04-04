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
    "3nkibxWoFtfUrJb4SdMeCaJdVFpEEftKrzi4coshJuzjSYSUtHpxQAuARez3GX3JhmppGFhPrV7Ruy6Wpg1U7EKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GzXrS3dKwxWkWM1xxvRKW6TvQQXofMcNW5MLGBFRspvdxMctEtfECFobhWqckrjymegmk1dr3HcJQeNmVfBwPeV",
  "key1": "2Xnzy3jWXJ9HVgUHzAYHzZA3dxLACd2she9nMsT556Go2KPEsUnet2MEXT5jXfEpo4YmwPXmhz6gpiqhnsZJFUvb",
  "key2": "PUK14u9VVaJU5uvcZaYPUPxdVu6We15d3GQUU9wkzQZhV3LGqSrz5EGmLAL7N9z7nDGJSRwsf9Szv4ho9at1Apg",
  "key3": "5QdBY4DrLFKsMA1EcsQY1Cj9smMNMMkDR9gQPmgAskBorh9vSQ4CM6saDSpg9S8q4N67cmBgXiHprR3UqVykQGmq",
  "key4": "4Tb8YzKU79AmEcm2vdNYp9U1Bzyj1yo8CXcAoFsoiThJzdFEetVjkTaZviLewAEYLksSPUqQJeUf9yV5JsE3R81k",
  "key5": "4FNGnUzy8nVq7td6QWasmRfUcQnu5vKHKBZL6BTatW4sTvxnztDBVjt5PDRfS14eZkJuBD1zgwjLSBuqXSXgMPBm",
  "key6": "DMTKtZcWS3jAwZ3R48qprRpYZVomCLg3yGBTZouwzsMRsF591EF8kyuufk7ghL4N2EgTTMxtzHaAHXdeeq68cMo",
  "key7": "2b9BSjpbCig2P9rMKv5rLHetoabpRTpTZ15SvXPTUaWQixUemuDFrBNqfLwpb6rGym7vuJPVWZJAjGzeW6YXEjDZ",
  "key8": "3GRvjw4xFC76wX6BxwKoPRpdAjJEq6gqK6y6RCaDympifgGzbtyAfJw2oXayBhUtWgHxpxyRMQGMpF8CrXZmZCwC",
  "key9": "51eCp9syu1iVE5KQySfTbTh2AMH1sWE9UuHb1sgUNHKSBM2Hg6KKwY5ZbvjqticqtR8Zt92W3QoZQ6aZzuTxnYC6",
  "key10": "4VXauftVrxD8c1ARfzLr4oET7BiNYKtjEVnAHs4at9UBmFMUTsfDjhX6UQwfb1MMwK9XR3f6pMZZSxrUVLh8u251",
  "key11": "5KCh1ToHMdbywtR1P4okbJK7f14YS8sjxKStgSB4qiEcHzwFqRiHcwvqVWGqzY1JdUXvGKGdA4izB6Wt4xk97pQH",
  "key12": "5J7GNnhprURXD7CJSTwqva5dc1dHVvuEJ1fUSLmhDkXuP9eGPxLTLLZjdoo6q8G9MperbZfSZFFgryxk5ezGdFrD",
  "key13": "5fhCA7KFMMzNLvqoTFDFCk7eDGWUSeweWWrD6KNKL5rLXAQfjrUJH2MvhKmhU4MiZab1aTx3V8YHdhL1R67W7FR9",
  "key14": "2w2gq8SVTZk8jH12AvdnLKXpqZJj9z3dh1qasi84pixhwxvZXjJy6mcUBeYwKo7Bt3LgLt1sTzQ915JdhSS8eGLs",
  "key15": "2T5qKUYPuByzGNuSTNCVv9JzGLV3MQdK5Fbk1hGUijabHu2PPQ7mmFgohAWTrvy4w2ss2rRzv9LppFupi2RNPkCS",
  "key16": "4ToAWT416ffpdP6WD7WvdBDjq1cHqZ4L5oqLth5cGpGFSLc2UMCRvRJxPXz3mtNYtPPevYLB4RJG9LRHpeFrL5Lk",
  "key17": "3Lwz6QbRGq7buPtEZj3S6V4kHtgHScSYYn6cJvTAdD9nEYoX4DsXhVMqwCqaYaSQKrbqfQ2p2T7HB9uwuWKuGdGf",
  "key18": "2yvpZumvQW6xfuoN6MhLxNYwyLH19qqbx1WCoxoZhvPMJND2XxK6Bw9PSywqJEjjTk8etRUmz7Srmk3G3VxGUwuT",
  "key19": "mZsn4i1A5TmQsXtjGZEcUb877HbA7C2sejoy3EoHw1w61h9cZmkHjZhFejjFisxoPyGLv3jVeP2borWRuogWq4k",
  "key20": "GmAxuLhhG5KzoyzDZBGCS57BvphdKMWBAzVq7ZiGYMPsrtZHRUiB2vCypXaQVQuShaBEAiFxSYMgthN4eb2Edwi",
  "key21": "RNfJ4G4EYo6LEE3fRJ4f9Z64ZSjg19P9jVfqHmRiA2KE9A3VwQP7CedSxq49PH9ZQ2zY1g6eZJRGBv4sf51QrH6",
  "key22": "B8Gh9dR73dPT5xoA6Jgm3vSCsbfjoAWmX9TKJeRF4UirgFHRi5tTEA6dfufPKk8GA5Uez4zUcR2scGtyJBq2buN",
  "key23": "vvhfgVL5449mNUKg6XSc8MNaWZic2gEpab9JUQNrccaMjEXzSvvBcvWMPPacqQpQzRzULUKKwok8sMoomeDYKMc",
  "key24": "38vipWhswqi3vGv9BrmZz8EpQ8iqUcvJys9kMBQTehwg6Q8FVr8HQRMRqei8gTzPQZRT977N9yaG8bnzisfuYVvV",
  "key25": "3qKGi3Quue6S2Rcq3cNJTgDU8XKznNaVkNa7HJSb1tdWCdYyyJxU6YRMoKV1BAVeKd4Wv9Z3irmAesfw99CiMPBf",
  "key26": "4ro41RWTfqrRhKrwWh7uEMoeqPUqEx2VGbbY4Lz37TVeLCricJw98GfDcMwebu5FjsJoh5ks7vF9tTXaCfvLozzL",
  "key27": "sAST4ZWdeVWh6ZcxcdzaiopmnvJMBWMPHtC7T6hPgmrf7pYKC4yny2Wsodp6zP9vdeTQvfNm3kNqRUkoiTD9vje",
  "key28": "Udah1hBri9gfhidZwmyBUVitcWBzwkJsJXiqktfMpEn2MppHHbZ4d1qPFvKohD2YTMdwFffc7SUWhXwEDEFvAkx",
  "key29": "4Gy822Aniqav5F1saSc9CcLPdrQmxfzXXtFXT3kPAeVWzZnyynhSuxchCVzd9A5xVthh89eohnE5TWwkeBG7Zyxy",
  "key30": "2k58HKo7nVeZoKZmNYx5F8hsJsyEdtqu15UoSESwSfgEeUJzfGA7WjT73NFAErQHxXqUtWks1JXcjhjLJ98AFFtz",
  "key31": "5pH8XVtHjwzWJL9rWGegGdhdimCvoKUDXqHdAd4BdWfdXaJi9tSNbPkTVkqYxZ9iTHm4pfs9m3bEoh21smdcf71P",
  "key32": "5AqoouJrvAN5kAusBLvai3REE26qgimuxMvTLbYZgHUc2Qpx8juHNxgSVRB8NJj9JrgtEHXy4oYPCoZWmiiPC7YL",
  "key33": "5Z9AAG7j8em9nuzLfFzbwQSnmfishkyK9PmiM4LREHZg6iJyUiFjLCLdxQeDN8k7siF3HhVgEJ2HVemFGk1qRDRg",
  "key34": "5AfMfU7w8J63n7YzY3o5hrZaGn4Qi1cJZ7vLmTsjRYd4zdj7bUJUQu8b856quRSxvZ4dm98p33Vy1Fz4V38wA5P2"
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
