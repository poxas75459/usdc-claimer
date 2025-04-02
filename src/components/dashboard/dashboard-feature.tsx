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
    "2EuMrpLgc6BFcfd5NkmmWi3d9yVA8E1cj6J6P9zrC2Fti3hq4DHNj7GXYWsNvyin8WfmE229o45zGscHNMVi4Mwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUumtfr9sUKXsDcdV5cvzbkeXGBYWVHfdj2PbHnSKX461HbpSfkpDnoVw6VFESeEtpASY24uFQ9caC8gr7xttCB",
  "key1": "58Dm1Kyw5BDYLzPjs9nm3wvwQAiz6BxVuJApPBvjSWJcUhEFZ5kDVwmTuQ7Pmhfe1oLWT36XhRZgC2fanDTrjKaS",
  "key2": "2L79722f34e4y7LF5BirwMr5ccbRokB5VwdmSvGx76QQaVgQF1rwwc5icSJrZD2LFoP721hKwbwGDEy424d2nMcL",
  "key3": "56fTKnk9d19mBv6NFLuisUWSYLV6Dnh3Cx3ogEXYv5kpU4YTPUMGMieWrSqixswnCHw6ka8rWRFiqjvns6H6zBb5",
  "key4": "2xQHhjhrKyKuQ9TNhCghqofZCVbknKW85LBK3zozn1iqPoFFp38gwPFrdpgvBQQcsjVvP6zQv6LMcsD9Pp3JZid6",
  "key5": "5q5ExXXSzcLRb3LkBNgKtS43wL19cefzqVXeesyiXwRTxQQJHkRh3pzVZdWYjBWdRm97kdiCfmf57iTyHQX5A16P",
  "key6": "3aiUio3ynMHFPFkn6EHPTqtex8ngH77JNeoZHhdWmusW7SxtumMGvsADRPy5QEHaZmMwNmcRqCV9fozRDtgXbCkj",
  "key7": "2f2WtVyA5BU2533TwrjqHUc1nWcexMPmaX5zAGFpJho4ELuSpYWLgHcEjH1SKm1iM4N3ufe9VV4481iVxRtF61WX",
  "key8": "3LWphb4urkQG5xnRRQX9D2Tvcq1u2dZ1ESMS4fWAXzUZv2agapVT9efj3YC45hBzhVCRntJmZePsJEaswnbgcPk7",
  "key9": "2auKuAhRCanwmHCziLx5rVGZMQYnPZxs1qkkB4qzEqYVeEk5kF5FKnoqkUf7WSdd13kbVD3VBA1HQHuopzN2Sbyu",
  "key10": "3HmeZxfunrqc4kjDm9C8YKcJDcjCTtwVuhucasG7sSwrdgPeCAh3APs4vvMWYpbeQ6danpXsJa1HoEfhVqUAaEay",
  "key11": "4atKeifesUGdx13o9F9fn48xpR2jrpn1TAYBKKVZdz5DFzSi4pxXX78RDR7MtR9bGUVqrdyMaPqG6AoWB2YnRoCj",
  "key12": "5yZFEQQMGwo2ecUosGVNaEFFXZmmm9bbGVQmd7Fbd7fJJSs28aaUV1xTpk96KrPtTbNJwVaCBrdhpYigxijNF3TC",
  "key13": "2S28s1VgjE3g1dLu9GzjviBjyJqpkc3DjhRjPEwp59UWAzs1j7GVhYxJNNXJQSztf8JWHfu3gJaYP9RRmKpxSDd6",
  "key14": "2rfDqmWeYf4WcG2RVhDxoprKKpiAGeAcLPVxwZgruW5QAWUjK688frDuAA1KriFgnMKvF6JzYSBhHzQwisDX6ykj",
  "key15": "2U4RVYHQRhAsLAi6FuGraXx1878ytd9cESjJEiqQK2dLrKoKmkYtCnJJ5ZnixLEibA7TsbN6MZjAuJpAt8WeLDXs",
  "key16": "2d6CNdfXfiNte5hbgEGX7mmEumPEqfpuALknsxYNsnidvVsgRRNDH8YBdZBNKFuDnKsyzAPNHPCgc97rCRWCRpxd",
  "key17": "2vL2AxeXi2KGdbwcFG4RZ1EX6rck8dZxFJnQ1JoeYz6Hw16KgB1KafWLAALrx68HEhCGtDrbmYBvoiHZGkcWYsai",
  "key18": "3i8gPbPq88Rx5TC8xaRDx6YuMMnfrDaNhrUrRG1mAbzdz2BdYJEBsEVFMiSZrpz6adSxzSXDfdFYgA6HPdyFqUXP",
  "key19": "5QdmnBgJJqsHKfFnVnhZ6XSoy65TvC8VKmWr9iwGT4TKX1qCUfutqVYxGg3CeuNvKat143h9AApSLrvVTF1VJaGE",
  "key20": "4d1DioJpyVWC1NkoQhtATMy6n5DF2CxB6hyE4fqvhinu9gpu7nPxKe3UarQy3PCRJCzj7rKqUm74pFu5DRKDg8k9",
  "key21": "3mHZG9a3zP1skYqsgYbpN3W86jQjRz9CqUneW3iwQUDmjmZnHf7oU3LCYufx4hmsJBm9JV9nRosvjvDRGx9gRKk9",
  "key22": "5dmDkiEnTJChLsMM1s4scDPcRCBsADFPXwNQharZaEs2vpQUuWb28maddkd8LSqjhdewhCYWCRdg7KmVFYBxwja2",
  "key23": "2pAW8ZKzakxkQoTEqA28vzEMAvdDCuKmZKjNaqdXmdgSKJFtkaNrAkyCVFaT8XUKFH9g3PPDjBng718TnikQfDLj",
  "key24": "2HPi1VLBPkDFhP5Ayt8D8gDqWKkEroQD6BXoAr5r2YuHddVM7fFeTUn8WVrKKm292a7RKVtCxTULqoSYhQ8RCcrb",
  "key25": "2yLeBPNRCrEaWHGHKV7utzhnkNx3cySzcQrugQGq84HNmXaYqBFnWNfqM7YaaoqtFLvz6PY5Cyr5Xktm4tyauZFq",
  "key26": "3C7UpZbrkmYXLxUkT2FHrNfxeDroPagjmpkFQBhtbhiQin2Dn3MVkdKk1opum4xuPLvdAZJhGEPxQUGkuZQs5mXM",
  "key27": "GkTDLS77seHpqJKxrrWqMLKTDQBrPiM3zByS4AitAiNmGVbidvdQivP2dM9nhqRcPykqYDbMwFnxPmAbzWYmjne",
  "key28": "2CUDmn2NmQAVADJuCfoNddVGbdPBUPSbRhqEFjb2QSWkynZHUjHvG4G4PZ5vL5TsSCSupVrwJMA84MWZiwFThndD",
  "key29": "5sJNKNShtEQyLKZhBiUXuRCYcw1hQcc3xk4Uuij6pAi1hxo7kfm8G89XAHKqxKY1hos3bvVEskCBJxDYfemZmHdb",
  "key30": "nQeACigSFi2cjtqcGi85LCTcjr9DZ5mN49bBEssDr9oWdHFmQ8TmbUTwdkL5UHwwsvKCY3AUSTZ9nEYkPsqzQcL",
  "key31": "2ftPpNRV23kyjWNQGrBCr5CaRKqtmxmnc6D6KVJpNtSt1gLky1GVJ1n9xETzBcNTuUSumFUgbSFCfB8PwqsJbeLV",
  "key32": "4TgMm9oLAg6VF2gFTLbQmSMAwaqQKrSeuA7Y7KvwhGxAJYN3hihTrd5FWZWXS5AABoDrocXNZmgVbeMMgQ1Apim",
  "key33": "57q8VTGyKwtH341aSWA2ardygeCkxZ4PYD736NPL6mdYb9f4nB9sqSLZHpfB8Cjkmz2BX8cd88N48SiSofxW4XcA",
  "key34": "5FACACmkkMx79ugnR6oV6TxnpCKKvm5aFWbmZJD4gUX5PGSNALMh4BUQVV3UhJ1Sx7vdBGRMM8MbGmddzBcpaQiC",
  "key35": "4E7qihUayxjYjfpgKtd62hZ9XUHij6DPiYzQyHw94voJMyxS5UCqeAzz6VYgkzVxqjryoai1WeKnxAwA1oLcFoFF",
  "key36": "2h1uweTyzpkY5K4AVXPhR4twoEoE8ejbwPVLPCST3jKk22eKX4G6nJMFUQ6tmfT7orFRLM914CjyS3pQSuKe47Ly",
  "key37": "QPGTu5PgT6xnb2oQc8SgKwsyuioi6oJSdEYdrmDaETgD5QAo2tHcvn6JF2VWxpjSTctS7aKMZubLX3QdtytLTNU",
  "key38": "5DZeGJySXkPdWH1Q9WaiqpeKPGEwmLry3io5E1LAB2ZEYx5mRbKGdgWiz7q1se7kpA8KDS6QXuQBYVNasAQ8yBDo",
  "key39": "2LMAkxzVAAQnu3PQJwkhHdY1f92Pc9eqRezj58HdBjJzHpgUeN8kkZ2oVvjR6axJc1XGjDMZDBvuVAHCcDR86sEb",
  "key40": "4ZFAst3UEhSH6rQ9Y2gWoKoCJLy4xytUV4nvQqD9oL5BEwco8tonMBZWcoiaotuTk8z4oH46FC9HHpsVL17QQdAV",
  "key41": "GCbaNCchE3GBDgt73BFduwvh1Q1H6fQ2rhVQrLtXB9NPBZEWvctppiqQ8TTqk9m7gioxGBm7coELrnAahr2Y7Tm",
  "key42": "56t6b4AFhNwgseBiBkeRMSYbYPsgRnS6s4AAwQozzKgL7caGbwRdfFste1eVn2WMdry7azR2RT1jpbDZzkrkNAUk",
  "key43": "32dpwP5vZxHFHYzB3hkhPxToCMCv8x7VMvYFra1QMhhManssSzFWP8EabHDPYfi3pJUWDfxRevfiMEACAe7YbDVc",
  "key44": "4AjiSTyZWqup15tsuzAiM5pUP5qNyXBgNGohFaStzZC4n6PJqkU1GQTHsyA7dHgfPs3gkpcUy384NKGJawk5wgth",
  "key45": "336s3mvYkkTPf9a87zxaFsnqFabdVxJqZfLdUnqbTE2Lw5F6fcByiP4S5RuX7Q6N7cySsTJUY7hvw2QoJr4XiMEy",
  "key46": "4DNPynuGXoyADMmFL55RRXHPoeFv5kKW3xNUzY9o4c5UnxB2yDDeh69ZsbBPohYU1Cm89Fe82hZ1RHYaAsrwJZwc",
  "key47": "541A26XVVpdVqgYRebR2isnEmCng5TKUYHNTeQDhqwKMwetkJmBMVZt8XXSvFD7jYfgrRgi7XYNJWEsm9fQhS8hc"
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
