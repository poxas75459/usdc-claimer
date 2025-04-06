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
    "BDjLcbHdeKWWEEtUB6NwkNgq1Dyrksdwp1nKJmYCeFtwmg91gnHXF6RzhL6jNDuFTUvXii5kL7orbLtAKRY3S1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZsWnAvK8cuZejjZDRntrS34BR5DBy69dLouD1eyer91Hfg1Xp3TBraKo8ADNqYYDrYXTmZzdGdXsXfGhECpna5B",
  "key1": "5Xpay6StVLZoLbRfTfCTwZhAJ7j2Tc7CKMAsA1NbfmECoMLRRgVCepyHnRvFdrEXRHvejHTYg1iHcRoMtGKwkSUh",
  "key2": "2CazoVJYdgvzkQV5arcdAmDCzPoxzxT9TgRbk8x98dsxjC9mnTQUapQcYWtbqGMGz9NLJYaJMP9suQWdZyJQ5emJ",
  "key3": "3ZEJ1mHqTEvhWmMHDnQhFRRGa6oJLpC7nzhkfkkHGedNWMnSdQfpgP83VzouJ6kfAxnJf2f9hU2FRQbrqMfp2w3m",
  "key4": "2UagqUpBmJ6j1vpbP7RiPMkwCJoQBQUtC7FJUS7QcD4WxAAk3EFHQpioHygACoJ4wddyQE1P189JH35uJP4ic8ni",
  "key5": "386pMsPkcSyQFQs3xvUKuW12kwXun6bjkZpcdQdAgaZ7qpWnRKbNMYh2Lbu1kQaCJrjoQ8WJLffLYB1wLGpYC3pY",
  "key6": "3oksy9ddmkFGPb4VWniW4pxKTDCVTA8HNXBSMHcgc2WzLjzePGj3SQdrY5N5rwX7CH4ort6HBV5dUs8cCnuuaiei",
  "key7": "Ziv5YXkXyMg7oeWwDzbm2sJB4MrXYXTRc9NmwwnZya93w1ejMVLEAisLHGPTEDh6pBAuVnZAtYi3jW1yYPWmnf4",
  "key8": "39vjbfrtDgsAuNcd5gGzbfhnwxovMAeFXmVFyGqQ8w6GuB2PTwgNtzK7QPB9ozFRCFaAUJWjoe2KqaKXtQoGV5ha",
  "key9": "2GDvbAQQBDRJud9VbQwgHyutFvpw5zkPUgbokh33PSH2dcnodPfgRdfTg2a6QAFn5oNfkTq5rCiZauWmqBgUB3us",
  "key10": "4eNXFct9sqUPakpUPvhch5tJ8nzoB5DVxRBwbhrCDRWJg6XaE7yQGY3wPHiR1swjG7FNKim11iLkMbnSspucie5S",
  "key11": "32NAavS93fC2D5RoConwcJaNm4gQP55oiB6FgqKTKLgHEcxiUPwvzndayQaheq5nMms4cLi6sTJoifo4PKgtAGLD",
  "key12": "5axnAof91XZANsQGrR24yxgU7wrjY3wtzJi18PuvqKawWfp12GpJ4392e2Q4Dpn25BQEuSQxFTbn257TGPg5YM1N",
  "key13": "qKz99xNaSYYubjUZpbvAvrJtsnwhJWjGR1588wc5PQWNH18b3EzVYtcTjfixxUepExDM8mfmebbCA1HNbSgmcDu",
  "key14": "5nrz2SMtJ39RTgQfdoFxYLHNVKBNSQvhgawavt4GACFqfwoxuZkb2UgvLwd4vCBjUkBFYMLmsRFVY8wi75ESvngk",
  "key15": "45jA5bHVRMxyFnoz8shP66fg6H1CUaNB7qPZCv8YKR8pMo97rSUnCp72MaSyo7L52ydZZddz4zNuDDcSjPgU7cfY",
  "key16": "YjXgkVJA46LZf7pfErbhvMXmnfvTFgZFrU2mAAGZPJBs5v6EA69bg9PkY7qP8nVcrWex8aydAMReoikLGLzzgvH",
  "key17": "3monqW7L8JJPTDhVwit4mw7fajJAj59Chc51N9apBxtdFq238nUQYa9DRxyq9eQqeZwnDS2jzhJncEgB7k8DM5RQ",
  "key18": "oak6ukYs7q1HE1xquZaTrj7NCeaN2vZSGDuW4XJKNLmvC8czFCUvJJvj1LnUFRvjaa9aGBNhL4GkhHqaEbaBgbQ",
  "key19": "3aSdhFJJXdLAossHZUUymBWbiBv28kgYoLyToxXTh3eGL22KXMQ9UcUQpeB5fWyjGPzbVoKc93XLkxKuGx5ZTw3D",
  "key20": "5bWYHdqaAaf39fnqPWDZiqqm9pivw4AVahwNdvrbMvfECA4G4bCW5NRCBkDMx2FFb2nhaFmYBvvLuHpr3V1xsiji",
  "key21": "4pmqwbWu4bpPvmJ4LjjrsLN5G2VDkoJPBB4AWeQxeZgjhMAa6DEctyEW12iV5AJNsVc6oQZJkfYvBmtezDUjkgN1",
  "key22": "D6xE3ubbweF6j1LQzYkLgb6BjTL5QYhwTzA68XCM52BZUdVPBaoER1FnGvLTxahw38LfPGRn7Jf2tctuVCMKNrv",
  "key23": "3TDLbbzrQemAE3nyYRS6mnXXSYT8ntKaLjd1wqyokFveHZSkmqsUHZKgwuVFMzBpztMdv2LWqAUV9ibDtXTDUdJJ",
  "key24": "3vuV8cUdQRGzdYMLbkFPDuhyipZwx7wUDt4CDs4Db34esSkiR6SunFrBMsDFManZauS6TLU8PMFtTXxnU6H6MKfg",
  "key25": "4JiGxtaEAPnwycfMMo9SWCzqmcq9mSWVYG9PZY5WJ6ahJemdHLHeoJyYq556Um5kdpNmytPJcMATsdUfVpAVSRp2",
  "key26": "zeXqhFgxp2uxzxVAVxxjARbv3hkGm3fBhBgYsnNs36c2obZFTsaQYYnkxV41Qt25bLuVcMW9nQBgt9zXZ5xk9xv",
  "key27": "4uRKn9Qn25xaD2DdWtJpba47MGQccNxyRY6BK9Yi9z6wDeBAhC538sxdVddJWuVwiCQHabQJthGKSUB2DscDtRbg",
  "key28": "6214wfFGdU97kMLSFy6JoEzhyxqtyUUro9CBNJUduvKNweV83pG2UkFu2DJHM4vu2jRPS7H7wwH56XZCYjqpDr5N",
  "key29": "4bdA5sBPjWc9UiBxaye9bm7wzcJw6DnvoSSoPrsYJudQZqqiBvrz7Q1UJoXd4HU5UFeya1LnrzepYxvVapU3VGek",
  "key30": "64TqVTtpV6PMZDVFdneysv7gZcYzT4axgMd9N1tWoo3Jitmj72oDBvKd1WyVo6XRmksqzUxGtkDm5rPW2Ej3pxVL",
  "key31": "3DTc29Ukr4Npb9gGZLxsiiajAeDJEZeu9SeRHxH8bwd3ZQgJ2UktZDhaAutnL7XeKkYGWxtFU9d6TC4bzJktWxXc",
  "key32": "5xbNSFVTpZiMkHt98eYWR5LoJPtdPLx4jyiSKUBEEnUWxx62gMxgZ4SwvAzAVcroC746AwekEJXcKUKXV4pQBzoE",
  "key33": "5nR2fu1SbdGmpLhY1jpQRDBG5m46UiimEtKGoKn2EaRAtGJMWGVSa6PGRV3fRTVAsk4UrH77annWWaAFTH3CvYzb",
  "key34": "3JvawNiaJeKqRsSpeqRE5BQ1d3bGTaYmDP7m5K5fUHSNRTwfKkTbLAPeJyRvJHdVVTPhwGPbPs1Gr9ou2XAKTdM3",
  "key35": "5XKB1iiy2WqZbW3SNzdaWjbXREW5NRCf8d5TMGrx3W1qgBTsMKDKmXBF1r6L5JxuZhJpfYW9v58odHs6EucjpvMT",
  "key36": "2TW1Kz9Qfcyd6a1rdNtAmZQPyVEnkKHpAKKBt9yJmjnyoaSzPASuqGkz8BqJcWXtLAhpV7FQogkzKytbc8Mjzm13",
  "key37": "3LFLP8a7CzPprm8Q75uqQWMvmLqVpHxgBVtAqcH2E4FuVxsNNtrGiFB7d5RyLTnHDnC9YwTfW9SiCyE9PbQRPGwB",
  "key38": "2dvgnbtumKG5WFhSwhhcyBrZ1B79KFusHM7LG2CUakbhRHhSApjTcFZbyx59uixZjo391geKMPgKsMEMGDaFVthN",
  "key39": "5otnGCd4i5ss2VLto9VEh56BbgkNtN8pUNjb5AcgdFuufkZqHzmCAD6jfL546hi4n7Sjqr5i3cNob7V5a1gxu7Lw",
  "key40": "4iqSWmxoqhGSNeg9re5kQ71DMig8Sa5R79yM9FPmwYBoVQBgsTN67kZGrxzDjK7sHbV3E1EKXZX7jhr7sFsZPgxa",
  "key41": "4ozzR6jnGAgHer5qsUYjTnMyk15kXedazg8Y63pJH65e6LoXPP6ShxrsM1W4rHqVkw71u6i53ow4UCsTqs3u96hS",
  "key42": "3HzxgyyWEsPynZzgvp92PeGFC7LQ2X6PtT7x1teA4iQsyL5PwCH164eSnke6rZa12L7zLYEDFJit6JFQa4WBYLUh"
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
