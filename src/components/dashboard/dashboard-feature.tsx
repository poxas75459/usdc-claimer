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
    "52SDSNpZJ3Wzme6LpkExCwgSe1GBNYg55o8GYSALxPkDGzvETG4nwydoLk5UZWaYrqcwLYKT93JBByfGTL6mSBie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EiWGVSCx85Vm3pV84SrrboceVY6rvDumWJQZ14EnNFk9qRbEoj6jfrtTAsVFP68RhEsCutfCV6YPocYfEY4EMdb",
  "key1": "KGZVhMABfvXcddA4pxttFkwTfNYuzPDLw6uKnKED2BDni3fPvRtYBpYvxwfCS9Uyq6WANuFufXVX6k2hqJE9PPe",
  "key2": "2jRPuR1wzHFg1SCEoGcQSr36UMZkLDw8doEyWDk6hLs2AANDrZKKUivU5ifFnNzGshevbhSGxqLZzSorgirxyH5w",
  "key3": "3VrSHZ876k8WHE66rVE3c7km3PXdBHaNrvNAEK4CWoCFP7JEQrqQegeauy1NPwjCHFXQNZ3y339kaXpnyoBxybjw",
  "key4": "DpJ8TYKA1DrnBExgwKGVdHcCoL2CRT1Voq7Cm3fw3VyF4HewC3vd3ME93D5wq2ZyT32GEbnubKpscoAdGx8x5cM",
  "key5": "54XnJZJ5w34y9SGRecPYWbNT1oYzZLEyUTvaDNjhH3StCCmY2RRWoUEe38kQs7u618DjN2j48cWKL45MifmmKw8E",
  "key6": "5R1L1fYq1sS63z1XqhmC3v5zKwTezZmCdMoQGaSUUugek8n1y24oYBnJcbkespbN66MSd4vsBkEWdcmrGvWMwTqg",
  "key7": "2efhy48xruQTGbonBNppMozWC14oThe7YBo5YpgsVnPffUy8v7zJawAvSrxtHZzrxeQ9b5qra8jyQJWsR4Wp7z6e",
  "key8": "2RkF5PaUnSFEp4iMcP9rVyiNfafqPdLHid1qrU3A6BDCXFybjsWVtCTQXdBNRHQjPLu4YusGFNtvZJc7wm9nvAgG",
  "key9": "3c9s114y4AJr8rKRCPyNUiWpNsWzJ9yqNj1HYffLeLAFZnfmeGK3CZ2QA4Et4JVLJ2DFEDRkDCWiZhtNqa4V3g4C",
  "key10": "35GcSsbx4qSw1LrymbTv1MREPvbQHu9LBpjsZ57PY5j2F3DgfZ1iL3T4chpGgfVV5jLRumQK59B5R5pfiUTU4JRW",
  "key11": "3ecuDdbJi7LL1SmTJcq6hQDFdXYRKJDBHQ5LkNvExot7Mf8a8sxBFuszot3tJgLzuvhkeiekpiuXKbvBbUxkHDMw",
  "key12": "nrqCfMijoZVM52QK9LWaATF7A4QALVt3btiUdZyjTPGYHYhrdtX9FtfqUtFMpDiWinZQibUfkfzuNUwPnYRFu1C",
  "key13": "kpqzpY3VSEKy8s3RWBKDx2Jkb5cuk1XxJbL8JsYi7zRwXt6DJ6aSYsbC7rmjurxv8tUHSKF8WPZ6CsuTejxDgTx",
  "key14": "5DsZJXvyRzrXUm58VcDBuZ1ZsVRY9siAy6tQwxkJqYuR3ttb3rphj9FPuwTUsH3DHa5ZFchPVwMj6vkwwvq26Xa1",
  "key15": "3vwPVMKeGUCeBneWTKV7p2CXjY9tyro88VzraBmxVXWyAJvfL2J3fiXriBa7J6tRDxHHbJqEZ5r9jgrt7h6d1c2x",
  "key16": "3VmvZCPm9heZdtwCbiGFbcLaRDSmwGm1kXHL6YEo2azFjrHbFsMEuDvYDEniL6PRcASYATkiHpzuaxo23YJzWQt5",
  "key17": "49qYSqNAtdSH8N2GgeNwVA7WDYhBxAF5s7xrsSnjuweLcdPKTqBtfDYNwXNVsVhoLGnFDjN3uCRrGaK4b9N3q9Ya",
  "key18": "LjkPKjb3aDLL2zMb4kKhqhfSLUVV1TZSXioNpVeSGSTgPLuvq7is6CJ6XQcQqPZabHVahGPi37zpJ7HzBgvTm1R",
  "key19": "5z6UTa4os9Jzvaz9k9jLUzLMAzc7BmJMaTfS1SMv3H7UwLPFV7rfQQhgqWCfWKJY6hqj78BV5vVnNhtnf1fEg9pa",
  "key20": "2GzAob4t8xWyEuanzpz9AceEeoxQFoDV7ubAe6SjJmGrgFe8fbsQdcnoML2SZC6bKjjJdMqkDiWuhZ1JFigsr9m4",
  "key21": "5Cy44mZgthSW27h8dkq6iZuKXnqFfkzrvzAjjLD8abJnnYiLnFRC6hd2ooRSQs2ZCVzxvvnoGAg2Kac61usBAwg3",
  "key22": "3QZXrQxcfnmfmxexm6xrxPou1T2Wi5Tj5s1wCfVKmYLqLYcdbdFU9KR6q41aa4i7CvkGrKDbUDPkH6yneZSUpn3h",
  "key23": "4PzGCvUEYbTFHBNqjF7b4g4PAf5umsacm8eN41E4uhde2pxRPJmGCYQsgHUBRP4qhD7vrCKJwU4cXjSj5gLM4q73",
  "key24": "5MdNccfKfWRC2tAkYoAVGy4t6u8374vsMQeyZY4swxN6nKpb1WAFFfimgiWBVpR6PKsHtsf9MX64DvFPDAzGbJqR",
  "key25": "5PcSRUqXbPWmGL5Rbg1pM1bmi2kjbmYY6Fbs9rv7boNNTFYwNBHmjHVy2Z1unnjEfxfnYtWokEsbbABvELhBMbKA",
  "key26": "QHLR6aZkTzFRUne349L2hckf6LEx8ouSaMMBmvrauzXripd6iJA9H1bgn8NjGRCC3Y4HML86wiA8KSbi2nCCwTA",
  "key27": "2DJLwBjAG1RJdsTsbhpevwdTqRdoJ6uWMJgdgd3dSqXhWmPGLhgQ96gzBkMURvPoBwrG7d8tu5eSC73aXxWqZQ7z",
  "key28": "4PU2uLw6e9VhX28svc7KJ8UKC2q9kJna96uFBkNXTrJiEmTVN1ZWaGJXyyFroraGjBkGvRNJNxqRdENpXDf12G4H",
  "key29": "2zYS7HAJjZVC92nYXmwZ8Ry3uf62VLu7fYtF7wmuSdCzFmTfbkPPumtyjmQE16HqSSVnLAqFvKU9uPHL5N3mMqto",
  "key30": "5vZbG4JWS2a6Bbvo9c4Bwxe4QBDNamrB5WVLUCU2KjVgVgR1R8zzfKFLU18mu1rWeMb9i7m3LKJ1Srsg1fbbPfj2",
  "key31": "m6EPmQ13MmUyqvgyY4iXLC6tw3Z9mYBTSaofvmWFZfxTYEuznJi8EywqBctqwMCUdDxiLTjnk1hy5w3sZxYWvjM",
  "key32": "5xutb5qEBZ8xoEsabmRucPpXNjXMH3zCfprPAeKQcSMV4xtPFtTAGmviPpdhVTgchieKMwu96AZDwmVzzUaSchXE",
  "key33": "5ShhgL7wmS4p5Ch4piQXwyjVDQHYo6XkKRwXpae93e2hY34ERiKdcKzPoBcMCEJacpumaFW1z1nqFWbP25P26rCR",
  "key34": "5uT6kjXFRV1ds5K5EFho35qgezmVwUrGYJ2ikX6bc42udPRQtTNVJcNKYndyGmnPFdTNrHssgiGBKfG5KUsGCu9R",
  "key35": "5KSgX7LLSVE1Fzg5d5BPbkYNNZooWzgWe3SMsNPVS5A96ZCannfhgvhy5LFUkjmEfosd3iQfmxnmg9NuEGpP1MLn",
  "key36": "3UAFyHm9xx5A3bbNq1gBAd7LVPK1jdBkLAqTVremhSiauNVKFrntW4GyRkRiq8hZUv5xqVeXPjqGXNoQJH3bxe3c",
  "key37": "4y8nKgiNSaEb82VBVW5Q4m9trt6r38W9xCa6iUrMCQLXsbEP4EEfT5qPNTPCBCRrG1oYsqzGQYHgZAGD3upZqRgR",
  "key38": "3Lx3rjdvjyk89QQeTJoRqJRVRZc2bMaX5dddXdKZ21TZKTyicvC1vcbza7VoViUqCq2ij5sGmJNPKhCzC7BHMNwo",
  "key39": "27nXUAQw98AyykH54GpVZdWxmj7FhjFuG7TTE5ebdqK7j7tSkZ8WmiMxFgoi1ADRxMzbpunnq22TroYntLZwBSd7",
  "key40": "2XNH1bdkT9X2ApwYN1oSiFP9WA8aAuSG69ADPenBUKxcrR4MuzZWWWKC3iEB8gvuegjCpjUhgkj66gSY4dZZaRu9",
  "key41": "4upZCaC6odRHbjD3P9jGCRKN6dy8Xrs6VuMDkQsS5QiruMASe3gj7VKGPPsMa2md3X7Q1NBf1WEwnkvZvaVD3gte",
  "key42": "2VCctiPfyb3BpPUuWBG1ULyELxxBV1hbikAvVN781LC16j65teP6nVuSWecP3NVPkzPh87Zxa3huH7mc9wHQpAUB",
  "key43": "4JkQ9jdt1Laxjw2J4aYS4XcDm72eJrQDrxec5uR5jgH68JZ8ydiXtFjywky7n9tuFpwycUbk3eX5NQQnALBrpq2d",
  "key44": "2tJz62iqmHKXVRhdCL7XBZN3anhn2p5UShRnvnLdQ1tn7QrzSHnsWgSp6ki5XFaATRcTvYGomBbjpdqFHRZ8nVSR",
  "key45": "2Cc33C5eotq76k97Bfr3TuyCDK7bS39HQFjGncXust1zE3LTGZjiUBpFxeU6TnSY8kKtPcHfA6PAEW9C83uwz5N6",
  "key46": "58jFNQ8qLLubRuCGspgNB5xzMVegS8kksm9PoxxmQPnPbsfx6yoUTssefpuTRabNKccNvJ1G9z7smTi2nVrzA48U"
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
