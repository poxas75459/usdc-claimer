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
    "3g4ujezj39YUDFppZvx916iwNgSYMmiL1YUnDXcqTPcDvj38GJYPtt6VYaCEojfyXRAbeTSYnVJcVuT1Q4UL3ZkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TSuZndjfVf1bPTCC43zoUwXpr7R7kotSx59Mjt5Rcnr12pYUYtcBvSkVvDDe5A4HNKtxKejkzz6q2PLuXM6BjWN",
  "key1": "5jkkWrUgovCm6DreNPmBw8gU1zRHaXDqCUdRX9yNt2fgpETkRGusRiakjmBgg93QduN114nyinVSEo99ebqdfUms",
  "key2": "mzUsrwVxS85iVVHUzPdvRbo8GaLALfNSwtbFR6hpZGX1gAyYuAwNsjebms9WL2WCGV8y6UKQhXEbDQ4d8eFcBoN",
  "key3": "gLhSY35qTxWd78jZpxqcoxaAAtSUcJXUBLVPvXh6TmNifRFKoUGATqVdPn6GSPLnM3xntUnKRiEpYjMtoWP2ixZ",
  "key4": "C7iZRiT9FbdGxdhUN6HLDy6CN1mSwKg1zKQXqRQWoTx8A21FpugB8Fe5uyDbJDV4tTTaR3opQa2CbDnJKRSGfDT",
  "key5": "35f1CrgQfQXLPodr9YFY5rdC4qBNGtrPVfCfSzfpH1njfSabwLq8cNSf2DJUafBGfddNr2YmbUgq4VnHgCFotpH1",
  "key6": "5rwmatxh9UVmas5hbbT3AVqCkzXrwLcvxDY4EFZUXX4vHPigTSWEQjoToPzQbyKebNqxBQnpzfbBZ6hTNPNuxQjy",
  "key7": "3VHEQwUmys9puXnVfwKXwoQvqTMw4c2gdKHXXYfPH9RcJgEXjsSbibYsPtt3aus2yZ9JYzX4tXWrhnGAGJjw5kVx",
  "key8": "5biJcUNJ9imEiVH635BZfCqfupAVccZdyuqLfRnmUXv91qAgx5fuLZUhVVGn8DyTy6VBXY5fpxPxEsZbu1yJqFN3",
  "key9": "4danfQyd7xnzUPVemGsCsaA639nDb2bwsr9n2mAVsVpR83FriagXzdvw7pVp8EufGVKUmwPuj3hsTXjnNFnMxckT",
  "key10": "4Q9jMcG9qmFh4npeQ3Ws9YYVZ9HUK7V5FT8uDKWneLB9aSbRTucHAwQEiZoQJthfN4HPecUNWKZ6gN6SZCV5DUUQ",
  "key11": "9Zm9SWxLHGKznZbQxGMUWTLZqPrsLMsHT9eXU2tBmY8W5Fab5zgWUwdC15RJgNKHqefcityJjTQei2HEcsHFZ4v",
  "key12": "3aAQCwH5f5ouGhfLvvTGheEXMJFn9bFfoqPXw4Tg9YFmKuzwmhPSzNgz6LcBVRRXdKW4zThbUr5m7SFabFvhdgE6",
  "key13": "eGXjwVzvEfUgBtm3qyZVatHrauTW8UZMk1Eu1Kr6MczGFaqPTK4U6uvDSxYu3oajDjpudsCFsnDizqMo2AhXkL3",
  "key14": "5xxdtcbCcwpRnZJXGtW1B5g8F2uRn7v9GtHnUjD2fP1S4vi9DwKmkmojL42MAbomcbEAWR9JNayzTeCgbc1sfWx1",
  "key15": "4Ge4KmZCKWNiDf4fMthfVhrAmQQW2C74CcsQxxqfSmyFBcNupavL1EWkYqgqqmAUsHniYdDiS1Y2yXPkEAssVex7",
  "key16": "3BSk5sZqNzE1fLCxtCiNpP7wHdovoqbHYcYcAAoydt5dGVJkLuhxpHZkq5PpuGxULKgjnW9sxQwu7JVgG1W9Te1h",
  "key17": "2XchUTiQHe94q3DZdSYoMxs1tGUK2uxPxJG1PQvMrKFuGk3jTh2AdJKib35NvvcwwPWSNwo4QhpKiCR2KQHXEU6K",
  "key18": "4XsdWwZ9vhyGYPi8SKtC8sfJWRYgprP3EkXWRKfmXns8f9Za18BnLvibCE84t97zC2hZhFeSeafkBgKbYzFMX2iv",
  "key19": "3hXgfrMqGSAdBUP8Z4LhJ6ckP94M1hSgWCuR6Zh2ibTchH2SSf6oTeQdAEfWyCgjR18mZP8MxyipVigLV4K25HfV",
  "key20": "898UB4LFe54tz1Y3FriwHoN6GUoEHvM4FZL69Dqd6b67U4gobKUmH4aAc5y8FpHHsJEhaMxLKoU4HmYTSPRngRh",
  "key21": "4JtrhY1WqqqLgup7qpfVrm3NMmF9XQpbAheQZz8TY5cHNLFFb2CYm4VyVdFrh5ga3asa667aw6nUg9oynuHuWHqo",
  "key22": "sCQKPU388gwM1MeXZeRttqJNQWQDnvdSTxtgBNSfwDeNnSVBm2ACJdL3gyMw5KAdrSLZteTpEG7nHFkdGQ8vPFG",
  "key23": "3YdRKQBsMwZ8dwN2jHcqCCgzfv9XBMCcVzJpYbvzNqifc7UfrWnjoPSenU2hdWXRrh6cqdf8bExc1ZDmSekfRg84",
  "key24": "21XfsEFRJEQiPg3aQiiX5h7t6ji3XGWt3RydkzEx4udzS3QtTQhtuGk7gkiMUFrFUr8eGQTdPn4uajErEQccFjyt",
  "key25": "64v9BGV9rG3Ret7jBRmDYnJF3hanf5PZ6yuPreyzX1sQnp7Euud13SMsCo4KRtJPjGMcM5rqkFYh84E6CTzNd9JY",
  "key26": "2jXP2XDGpDkovCemGmvY5JvkXTFgSJzQvf3w4U1uML5Vo4RGW9JXHg2VE1jTR7UTHQSx5sBeTUShc8bKtDybaiSN",
  "key27": "3XJ2pARCEAq1woXsRo2A8qpVhzQ3trnt8NZqeu4rZ3WBFuV1mhKkndbxzAhYi7wFQjSLPWDQdStgW6fjTqvboEJv",
  "key28": "2vEsF8NrgTLZRc9LNMhPkd74kNc5cNr8c9dSzCB85HLbZfcLmCYxbiWP4enwSLoN1oucjmUK6D7RWCnMPhrdeqUh",
  "key29": "3vvBmiwwMXufydZCqSMEFwbRbXjmAqpjmMsFDzC6byxu3ktVZy7Miwaun1QhSzPMvbixCVJXtgJNoiP6CdA4tSJN",
  "key30": "5Zy8EHqiiupM84UxBdZYKQtg9QiJexbpdMRMgeGBAHFaT5dfsQmM2iV96xWFyuRPv1Dj3aQXEHZNVo97GL6PMeJr",
  "key31": "36uCp9D6LStPJBTTbFibL5V9MY4gsrFz34c2DLXj1hPn4poXPLf9bEfoqqms9AZrtSFEML91jvxNoUmp1fRQw76r",
  "key32": "MxxRjChPsgYMomMjnupY3mnKLwL2ki1wiuvtvbo5q38HqeuDyZwU4HJbqts7hS35KBqooUQdrnAtVtHnxwypPoa",
  "key33": "3acUKgvMVSFtZnnmywZpk5AMfxK7AEh44Fc2jmbGr7j4yY3sxMzKp9iXhdKDpBaBqZv4QQ8uV7GcMQZgZD27Rt8N",
  "key34": "2afDBC6h6dTuEsr4AGw4JipxpeZyWj5sXFNVfhFwsLFDNFt8KwryCXz3RZ5G9TP9rVQSxqhtV6P9QqWusJcEmaoa",
  "key35": "3ABRtHDjm1oy8xpSedKpkuukhTjftJUyZvFaEZwEXGVaaMJzaBoWYVwh24HEu8znTjU6gkg3U9kysWhLitGdK3Kx",
  "key36": "2t4zZUG59Dcg3xkwUga5esXCP22EzSN9DxSTTN3f12QkvRJPhWMYS4Mrpcbuz8L52BJgrjKT9i4akoGK3b5egLWm",
  "key37": "4fpZWTK5m1WwAdFoRZwRRpYNRVGHnc7SHeg7HKrbRQyLbKouUKVCH3Mtt5hqu2R3XYWB79peCxkVUvbZFDzqgbVb",
  "key38": "5Q1JrdaweuwmRrDjv6R2A9FDvuyDqpnPdadat2oBmzvs4G7vPofRpRFwwZd4UFd9SKxxvP6YfvZEPeyvxruz7BJT",
  "key39": "3ikohSqdDimzcoNpe2smE3sNudnFtJeg8cSeyenwHX5KWgbBDCcahaF1dPoaxTMDZ4yN8yVpu9FDNEeG7Aq8VU4C",
  "key40": "5GSPmCKqf4sPcoXPkuhuoyUR7hCo181XdAxYPt3MpGUVWcRR6cAfxGS8oTRbTRfZ6UU2msEyoWXak4oErthX8ox1",
  "key41": "43pYb2dDTfjQwFjMEEf43kBSBfGhdRrKSbgLX2Z87eLYssnz9zwCVH7aShHVTnpX5Z6Gen3CgJ95Jr1YHf8tZVMF",
  "key42": "34hcAYN4CgQB5dn8dZL1ekSrZnAhzGSyoTKjTtDyvhFwRgKVHUVNLPfFXa3yZ6t7ZPXaffrFuifFCuiv1Tv72uTJ",
  "key43": "5y97VXsAk7MsYXwg7bYQZMzj86VdZDBrRM3HbNNriAo4tRhLZDqXpg9sMbyX9FQNZr6Yh3xmrauT7FH8EzMTRqmy",
  "key44": "2zphDpoLULvFov8bWjf6bHyznwzhKtgv5wjkhGw32XhbrxpSx1jFqntb45c2DWFvqF3vwVEcGZBPVxDLaa86um9Z",
  "key45": "59DRdkYkYBJYFcJbs1xPKtAAyMmzGUxe8DZhWkEnNb2b8NAif1w8hrvFmJrijgGDMpoXrLKsb31SNSmC6xwN1rjk",
  "key46": "2uH7VwMLUNgnTTjcN7tYKkGv8N8h4jcvkvz5yc74YBsXjfSKPnN5FR3KKJsyyLVVgwPZ3Qnwo8Kpua52ZZMaXPvZ",
  "key47": "5TDaBqLVbAUjKz9A1kNzX5La3QwjznCTDow4HQuCj9tmT7v4diPY3KCmNkvcnaCF5cquvt5Jiq7JBoDSKUNSVyUU",
  "key48": "knmsHYFeaBYa2vhNAXRXpqywt53oAdhe2jh3nNGu9Tb99YSQwAFNSL4Cywvu1cgqd55E4kffTTCPguXkN9hSX8r"
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
