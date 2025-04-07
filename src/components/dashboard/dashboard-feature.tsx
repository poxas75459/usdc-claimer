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
    "2SrrcVSUaFaBoVDsy6KQNadccmrp58hhEG8hHR38jGw3pmX5we1AoStQYeuichFV24tyVvt2dN18Lj6GYjSiN8TP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hhLbFC7uS7FZePM8ekgKu97CqgCkfZkzTNNt5pbXpVfkfBr6b7syzCcNofdyoaef6wEu3o65ZPwbvgwa582Zv54",
  "key1": "4PxRWbSSfCyyf9n59rkzzp2CQKRBGGE2Y6k3HP6ytuT6Yeh19MQXS24Q2XmWQTDMdcSoeDhHfjhhxYnzvASrTGRK",
  "key2": "cehDsVy3cz5UT93zRSNDTjNxAb43gbGBeZF4kF2PEqAAgt6me5ehq4WJJU6gDcAaQ8DVhNcPDij4G3RdMTYkT2m",
  "key3": "WMoDKSj8UYToB8QwoZRiAQsUbhmtJBBESfXbwgw9VtyzYq3c6YRoMEbUwnZJpSij5FzrNPPXsR4Nk8aDzLjFro8",
  "key4": "3wVxXNgRSvBL2XEBEkj8furEWnWnPJYPzYNymFeRnf6b7n32jGqTU4zETvWWbfveZVrvDgQv8Ws8SwM61Kes2yVb",
  "key5": "3s1GML3asjbWGjXhS8WK7QTVr9YLdGnobUXApdWMkY4E4AxxkWCM9PgtFuszQUHyecpYnB5u9YPFgY8RtJHJFCgG",
  "key6": "4PbFL715diriBYknkaEL8SjSLeJ8KEMsQHnejLLHtre1J6eoHpnkZjmcUqim4xaHp1GXnQWv46yhJWVd1fEFm5cG",
  "key7": "2dhd99e8uHWc1Qbw2uymYX51fJmpDiNZFSAFYokSSGB4oqWQRzYzimwdDyZupxpofQZv8zngBapczMfQfYU85TeF",
  "key8": "29Pz1PiU3VwHniAjPkD7UZg81Wof9Bbv22cGjAAMQSoXBsPX4Seoma2K6sTm1GDh177VTTMLUBStmHHrVjxqf7nD",
  "key9": "2yzLdDARaUaeY3dahrXcpsxwpzUWQCMJwgmDzeSegnVchFZbvrUEF6XfH9jdkd8A5m4VRUGkNRwFPQMewZPSy9m5",
  "key10": "MNasdF78Qv8ict1pUPqfvRwWsYmvE4u19CgTnRpDoXJQwW1GqfJn9BSnLvQjjqZz9Qh8Riae2NtEfMD62AxgS1P",
  "key11": "49CJy48ATLBEEJnxKV6jVfSr6J4msgBTVB3R6CEedef1iKNSReod3r3hjfB3BRDDrN1xxJoJEgWoL2TGKy4C9Ywi",
  "key12": "58eE45WZoMM7WJiYzZcefTpLAtBUCWFKbgz2ZUnx57WSSwYYS6NLVXXhSBSJJPTnESH4KGPpTC4TzvgQ32eUqXar",
  "key13": "BbUDsymMV3ZWzw4Ym9n8oweeKrSgkACZHrktzJvwrr7PPxUujXV4YoobAQSUW6mTSNDYzbH3RHBG8oNTWKsu77q",
  "key14": "63P2roBqcL35hx5v1KhqsVcBKw9oDD4AGPa5JV3YMTe4mLkBS78DkLtXRSEGFdpkpM8f9odYKPsAwusbzV4LCHA3",
  "key15": "RJw8i24ZUKqEHG9ntKjAZd5vBV9kdrGXMsW29YwvD2LnDarbsB3kfRZiPm4EPNnjoA8J181FFhE5ovZ1s3MfgAY",
  "key16": "33bxT2MQZrtfEYcmCp9k3U19CTmXpqMuNnptNVZyLTBLP4vdiUsUteS6g1M46PPQQmqimDevQUAKj7nrn1eR453v",
  "key17": "45VKi42BiSwCg6prwt46eYCVxbZ79gehpvygaixU8XTzLjtLBUEUhe8z5Ss35T34zg17pveo85UpAwQchAjBywCP",
  "key18": "nQS2UpznT6eZjM7Ro7KJXiex12t2Wzr6FcWeAV1bH8Fh9aBin2bk7N3mHpiTGQbrkm1YLDqoz3XjxC7BnQB5DEu",
  "key19": "45q9f5V6aDsJbDez7NyS8vLnbzNjpSxNhbK6zHCrKbwzbiFZiDvPHC6WxejaLNaWW8MJ3yQQLZ7j49Ej4BVyt4wD",
  "key20": "2RCBj2wK5uytWxWGtXf1s2HeCfaEEbBNmiCwtMASL2Pyfrer8yccAfmB4Kkqq3RigAjifCFrmzr1a7EYGMHD2FuA",
  "key21": "ZSq8wXZ7fK3G3iJprtpqMbcZ1EZq5Q2fmcY8yCz2X4Rw6rWKYAvxcsinyG3XCc9jHQs5Kpn37sq2ZuDESvRUGbH",
  "key22": "yf7PqdkzdJUWJitbg44Gi9V3FHBbwZPvofAhubbBWf8AH7aPRnvGsk6tUeYwxU7HzNSNvU4QBqtZv5u8n7Qi5EB",
  "key23": "29C7zKzP8qrvLTTxfm2UYkuf4BvWBn3PpUukHVttYyhVcgGQcYWaoW9vT9yWFDHiv6YAzhrvNNFSFQiz3ZjuQu71",
  "key24": "3ABe1WyERf5o6wbwkB2WdPfax42n8gfuHVRFAQA2gGzSA9EHZDDG5Sb1xsNH2sdijHLR3F92t1f3iaDTY4zFFyJK",
  "key25": "2PVAcRawcLHF1EVWQ2hiC5UWiUmFPoJPkomd7W8n6oVDmvLJzh5e81a1UuDdqVeU2kAkEhGEY6vYi4crZCfeUWLT",
  "key26": "4sixZgHWy7Bphivkqhniytp4zbFpp5jVD4J25BXLuzwCvRkFDCfboveqrzJEN3caUCFb8wZqbSRD2eKq2s9msk1g",
  "key27": "nrBvDFBSMAdfwgXFtVorhYdSTUXAy89njJwtnZT2rGreZf8Xv6e5wsM5BRBLE8rTRXPiBr5thZpZxtutyxwPpic",
  "key28": "2zdRezanCBuyA3BV1navHnxDvt1DzBPvyEhNQWZ3H5fGhzyzz5wuEu5uVvat8yQV4tFB65yYEiA4bnu8DAbtLSCC",
  "key29": "XKmDLy8kfim31saUF82kdKinHsERH7pW92cMJSBvqEktob2ewn8aiCoZDutmxFSDkih2f2zL7r5ArKeRVmmYa5E",
  "key30": "5UmXkbs9x2J9nqTE2WreQkW4R6jgbGj7P2FkzsP4eRMPCm1vvWaR9okqfXHSiUCXhxKo5DZ87fqXSE1ddRGNePFz",
  "key31": "3Ups3Rtj3hR2kutXzUKgdEee5r6rxfg5Hb268BMqv5e8Jfy2Ai6hNWcgfxm6vXtRGvzB64TL2UyFjss4ftV4NUNS",
  "key32": "38bcRx6bj88xzB7Gke9TUHZyrrAgopBkLSM2NzvVw6CwSeadAHGLZZ8Q885B8umFyLkdwxm3xLxCeq2Nzs5Yx1Pt",
  "key33": "4QYR6UdaMuBn1cFZx7fbV6SZT8z19D5fYz9yA41UAJoA3CAzSoh7euyGufVEGxYfuBXET29V8y4YBJb6jvZDUFq6",
  "key34": "5cR3vPepJ131AwDb5zqEiPFg2baD83tgaid8NJ9H5ikA4san3W3JF2BbGdFsiSqxb1PdEjyHZMRuc7gufWEaWnd4",
  "key35": "2dJXYsZrL9YfiNZWnqtN1AuZHZeUGYeCXMYFSvfyL2huqG7yWkCaocTFfdmDSEzPVvajy1uutizwgBty5TVsfqxP",
  "key36": "29Fm1W9SQjMMDSvXGijTVBJnNWDACVSMCp5Cg7BLtKm4A1jVEJ7MwKofAaorm7v92TjDUbr2aviEWSdGntoqDRut",
  "key37": "2iFysMwriDRonA7N127EVEa79yzzxKTgUmne4dAcV1GghLmdmeesQMu9BC5N2x7A1TGJ3h9LW9YtQKACcjF14JGz",
  "key38": "2e3C5obtgwJoLppw9nk2KgNuuCyLWiKbqroomu7qWXPUDrd2hMr1rae4DZh9GN4UVGbPtQxnri7g6sVvnkyChYpM",
  "key39": "54SSG5B1sRhXoDrWhBTwR2ZNJu7NoxdJk3a4Fa4p9fD6iz92YnLWjr8gqSfgNEBVvF1L6TrZAK1i943bjfgCxJqF",
  "key40": "5SiCHxiSyQjfAFZjwD22X5ToxpUT8F45y8uk7mBHvTanuS5b74QPe7RFsvX7t28wibyCcJJ8LtNZSFBtbGRgaeKp",
  "key41": "5qrA9z26puFxWTGUUciJipugNWNeQhqu7d8vntsUYJaf8pWRZJJcZEDQYZyX8KwMc8JBxQX67diW1wspXTyeHiwW",
  "key42": "3iC6urKdiotYL2aAUUcv6Wb4UrgYd9QfQBQ3yLksCC63DPbwiMZEjXJM1BWG5W88zzddt8FKGm4ZwhstrfLFgRg5"
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
