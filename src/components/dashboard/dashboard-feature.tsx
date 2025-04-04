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
    "ysAwbeHbgYk713ioQUbxRFQCDxKnYLFkcT4tkRnwSTKgBmi4gP2Xf27Wtr8LSpfCY3n1bEnnau91ynrwPcnEaeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42pgdw2hZkeXWeFyThCG4kYddsbNPHibYLEiCnMGkjZZMN5H3VD3BEusJhpqoPgR8RbsUFWPMmndjHQ4qis2AmHZ",
  "key1": "3DQUUuuiJi3ssHVMK8vYsyL9RUz13PrWiqHCyQhAF8jq5YVjH4kFwRcJnaPDrtzGFissAU4RCNxrTZnBVU9WfwJw",
  "key2": "5XV2yFWuQhJB5ntd6jfEq8RK15yHQjgafyxMRKGhnKwJNaZNrG2P4ag1Y9GSLSHJRrgu16M2qPPWVPPQUyt1i88w",
  "key3": "WPjqJaeTvTLZGpZXD8cJUW9eiSxErhj57BwVpShkE5HArURBvJuyF71otBsJK6kDSjfdDrxhsLTG3Z4TD1xogUP",
  "key4": "2XMbh9Lp3XRkfStpPWXN7kQqzSrHRxdUadEaPmqkyfQpWFuwVjEJRagXtdgkoiYpCL9qreLxF1uocgDPUJtcMx1f",
  "key5": "DSMhrpweAZ6B9hDg53e2gnqTCkyUM2JU9NSzVK9tqiC6qM8JZ76wbcBbyha32LG4GGdovMmdd8HmqY7oxN57YNs",
  "key6": "4d4G5nYYkbZdC1AGRpmDoHDRhg32BdSD37iGxT1ZKoxRBrrcn7z5RQzAkqiKPUzyjziaWt4vAt4GeKk8TDAULF9a",
  "key7": "5zf69RxZbaUV2c9UW39BquSsY6yRWBBG5j9a3XgwQkiHnxgWDBC8wQYhU5S8RtzjyozNhnKUYo545fyDpm9j6RZE",
  "key8": "2meRGDqDw95tHvBrHZ2Xa5iQA2agzCa3DkhBviZRYmZDMe8BXsT5jeqyRDzwue4bg2xeYCERGdWBbVgLhJjbrmse",
  "key9": "4154HqeaR4eiWhK2zbrvofuD1a4GNsbf3TqcwxTPq3655iDGE4WeFakqxwfUAgWvvRw2MBip3nVtW7tiQiwHqpAS",
  "key10": "QZPk11H4kLTpP7ek6Ye95scQsqwPK23Bnneaj8eYYpxmyWQvC743kMYZbQ4JY6epnq86uHa3LB3ZoZCU2K5Pujr",
  "key11": "SgpEv886Yi8Q4jkkJN6YSi5EC1CrzTYf2dG8A5Q26JV4Rxxq1SvSdAJ2jHwcn1H1CGFTVLojs7qMa7jLxAffUTG",
  "key12": "LFhPwu91wf4rvjGM5JRRUz5K3uauTXhBCvpo2NiWpWjhJ92g6QgWsZ1m4pvmyArJ7rNEdRp8EbsZN2N3SBeKdUQ",
  "key13": "44MmvVD26vq8k4eDwjo72zMEkTs1X88E5yhBKtEjJkYC9DZWpYo95953pDQ26eiCa3dZaEsDTzTRogN6C6fnQt21",
  "key14": "58wLHAGEXqtyrX6GPQVdDxPSrFPxG7oWScz8UNkkcCPF66HTUVbvrkRVXzuCT2XcQoRWwTZptU5jLG5t2rj6HtSL",
  "key15": "4NLymFWmwUovdUB4mM5B2ic1hJ27Um1hDtZkNQECdL4MsrrXjacbeNPtLk2y815DA7WBWwCWponsFiS1RY7eqZsZ",
  "key16": "mCrUvJvuTtU5erRhaoLChDBDWF1GeizszygnizmDPep7soRxVYiG3TE5eiaGvRYuvqUSJg9LDZUeh1mJFu4idbb",
  "key17": "cpBkwSRF976XzxjwPuTuCFHJvRgGWycx1bJ8W2qYaHM2VzvE9KjHdVqTmbKmVX1pMD8ceCjbeUKwnEMQG5azcAB",
  "key18": "3nNVyPQuMktDv9oS5qXzpLv3yV3MKjyoDnu7tBofCnZowgCGWujjsiETAWyMeJbxeHjrozVY8wegypXc9qbQjEeR",
  "key19": "47xnqrvQxRq13Qshr32x3MxZxr4BdQnvMJ6krcyGM9MsC6597Zn2UMsxESBqhQ6pSAzoECoQ47ua6dWtYyg98G5n",
  "key20": "31TwHM4WZSxfgVt29qzst5mCNajpCWb9UTB444UcwjJ8bLATWidNBBYgNqjxyUTWWFZPsRXAFdzzXeNzRKWdw7DP",
  "key21": "3uJtZZ6QwVm6GDk2zygLvvBEsVH7v3oqNySuMXbF9GajhPYAAae1psypnXxVyiXT6Ccbi8jQz1nKtcFY133ETSK1",
  "key22": "328ow8o5oc9mSj9HCysyhMuunqKKeQA7aLY1r84UZJc1G538pm3iNEBAhHSof47X8JG6qNcvENoVFT8Bc2iarC7o",
  "key23": "3qf7J79b1QXLmrCf5kzmtMffbDT1Zi8LJWX3D99c7fxykN9MGSxFtDCkVBMK9GANUoXdYoKmSd4n697JKMwC7bt4",
  "key24": "3PP7PsYZDHMhrjLgNaDNHM3odsvGY2rKB9fsvRMTACEeuYVcMA1e3UgmoYZr3V94gb3ZhsHejJT2GZopq4nkMh5J",
  "key25": "3gLTdJyfJtg5obgiz84qyPFwno7J2HGzp88WqeQdJebLfRUhuqchhy9sZZfivZL9tN2idhYLYaMs2QbseZ2rfjXm",
  "key26": "CMSzihuLnZVhvSq7uHxuFhJcGi7JME8ynhLTrSCHvwKaLwktgyGfp4mtqsWYuVzKSf8UnpPjadM1FFr3i6GkR1S",
  "key27": "41GZxhhEiGcMNcFWqbXg5Ep4cwg7fWds5wNrFWARsNKwiYZWycqLfWhxioUq6ui9g598qtFAQcwRjBzB5Y5WxhTV",
  "key28": "UbCFuYsVkAzRy26jGc3bixPPiR8BsQ6JrAv5UDuY1fJCTqVQ1pNaqJcFWKofWdtoxKmLyZiFg2oMQiTzrQvcymi",
  "key29": "5LtA2yUfcxaFKVsyzMvmLZPnvuJYYE6Yi7LxbaoRTCsgD8iCsg8KnheRFdy43vpndMppxsUuSUfgBxhLdxrcvBuS",
  "key30": "2xxqeibvHYti9YFvV664PK1Af94V2AAWsqCds4wP2cyHhjtKmRFybb6MBCLgR9jD6cnBa4o72miAsJab1xLBTMj8",
  "key31": "5Xd4J7HBmC3499wCKx5rUpj2uBYkMNEsNUmixTL8njKv7onEzgKj6DrnPwHEhCdFiqHzoM7KRVZiLQx8hKcomb25",
  "key32": "3uj3QNpEsBw2hQAvFVbsqgnSva82Xu5X1dMYScZzeecWm4eFHQJJkTHuGK2bPsTmEndBjQepxBz3c7As78KYieE2",
  "key33": "DnTXCwHMG5MFLsz3hKXXdmfwMkyQ2vDP6sxgAuVsym3HSyqZ3F1ZUW7YNz7mhgK6xS4ZDMBfusuDu8DiwNaBRAm",
  "key34": "5hoCtZ2ojhvYvutKfA8zU7UpX3k4ZymnzFhTut6F32nb1LaGFp2Rui3dhrquSPnxRcknAR9hJrxa4QkUunw9KNxM",
  "key35": "2ie5SqD1LDUTiWF8YsAjgwMvj6D2VgNk55ZqkKeS23D551n6Xy3Mf8tkyydcTcQ1xDTrsueFasaz48TWQxv4LQGo",
  "key36": "5AFoKPsDvtvd38R1iVSjgkQuZn1KggGRuXZE9sES6K8kKpZtU2XGLtqSvAFiZxcyvRERa1mqsvUB6G1SxukAXFmZ",
  "key37": "5vdNDKRjn9Ysrwoiobfo7RsLXnQ5NRVWEM1cfZ4snqy1Kt4N1T5Wriu59HWQaWAyzkuffPWgRurLjmyUBM2Pi51j",
  "key38": "3AoV29dTKjp6TcCQyqpF2pfCRCaF5eZ3Y8gQUEURPFkC6uVZ53qf86Lm3nBTWmeD7wXYWjJJUgX1RuSc32bXvteN",
  "key39": "4qvL3RmTUrN3HfLwnzA3xWy2v5avjanUcAnLQaN1SrPcSEtWC4pPNpA38PXkDZsihQYfuJRG7A4M52E4epUZdjHE",
  "key40": "nCjZSrpH2v4VTM2jvNaizE1yZiHe6n6Bv9Q1TDmaRsYSepHprNMogDpQpLG8TG166d1axnJu5M8CDU4wmKqdkd7",
  "key41": "v3qZf2g18MCSALHj2qLy6Z85wPkodqDWkqikxBAJNpEH79NBxZXWLFYh7jced377Pf8prP66rZrRBgpurWn3frQ",
  "key42": "4gzXmTwBs8s2HVeuGvt7feLo2B7q2YUNwKQGdg4ZSeqUf2UNP62LLnnDoZ49CspmyR3eCHLhZvR2BJiLmKZP4WeB"
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
