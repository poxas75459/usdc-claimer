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
    "47jNHxoYm7fJGZfb7Pqvm6k3ca1KDdnATWtaiPPtE4NSjZVCg258A4w4GHNvxx6HGPA47KeFpoY7dRBTRQYbsAw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttHGNMLoJe4Nej12MzGGqRFbKHKf4SBMyRecNSddT6A1J4dcRdggtHX25bEj6DxuuGxze9B2JSo5SQwccx4rygf",
  "key1": "26eT1P43y69ddBGCWdFAumFiAzEPYMEtabcY7JysgWQASB1KpEjNugUhBryqR4joDcggHdLcufXjatBmiTvs6Qrx",
  "key2": "5SVW7k1xvhywxA18ncrBFwhvKNASyw8FWqgGTrCZZvc6APqMSuGHvhDnKrk1mSUYSuvixZz2uYWuWxhs8TTuhTyq",
  "key3": "HJyYB4dWTb1x8LeqtGWEZ9dUMVKTmFpFCte6onAsxU52uARmMFn6zn1BT283kcbJ7WaeY8PiChjvJjTYJePuaVC",
  "key4": "SjqUxMdtVNTE5QT34ysrZyZYx4gaHeRmCXw4eUxGYUXToCAgU9G1A7tXsQRWkz7wgg9heN2q3aLnRdJZ51VJYuj",
  "key5": "5LWJS3WtSakMLxJGb49SRSTrPSyo5yzTNKRz6Y4SQKJQD3hGwNL8MKqnc9gcqQCaxUPKL2kvsreGLrEdDvMkzahj",
  "key6": "3BESyzWzk7gqhb4aP4PQmaGRQXhnKS3c2dsLBQyxVLRTZQZy57sNftL6m2YxBWWm84PURMdFx5vyQCuScGNnoYs5",
  "key7": "5s8SGXY2wJTTDEfat4pUyaKmytNF6EX9riQGr4ZYek81V9CHWdouw6dVAvJvfxXqktKHwtnXgeqX8w2DLdNRv6q9",
  "key8": "2AxX9YVhthvza9knv5EtDGXxKUWL1GCZK6Egg3udevjRFSgnscVyEQBy6XeRMSGNMydVUNdysrDPomByXt1rRz5o",
  "key9": "3AcbFZrdELANhyEAii5M4UhFYsdnAvhBSG6cqvv64bs2ve1GbabStUoRZAq5bnYPpvfDfEuU4tuJDF3kbSeLntky",
  "key10": "4yZVmkei9r9z55HrLRf9fhznuce6HQu9yqFRPk8TvL9qsZHhaoHMFwgGfARrJFeMmQHwqaKhnonZWsBk9h8iziTx",
  "key11": "5NQ2mNJDKtzRmrEm37Ko65BoF5V2bP1Qij6QzQBAjCVMfa7woijPykaWf3NGXqkBw3u6zTaTadXhrzmQuum8LU3k",
  "key12": "2quYkP5hpEcBa3fuEKq1C2Kngzn3SjBKdLGmdSpx8tN3yN9CSPeEFtWp8eXy7oEAF1Mquy4jnCxcSqomV2Up3mAx",
  "key13": "onY5rSmaFj3LG1NCH3wzaKftifuxJLWzX8xCCPqTm3jsiH7roVA1YEhjrQDnEB7LR9tdRHcQzTSRSHFC8rR3DCv",
  "key14": "2EB6ru4sUWP59TPzdtxnqwPg4f61p81jaXWa8PJZQ2AEMXn37Y2uTgxuQaWTRDUDv61TTanLaS4aicX9rHzY2pZN",
  "key15": "3j3baMsDPPieKpy8mNLw619okxduwAz3yD2FksktspttHzaFRtxA91EiuwPA1b3oFmyg12xDsGguZttRV8ykwcsw",
  "key16": "2NDrJjkwu61NHCjVzukei84nmj76TDQCL3ro82vUfVHAi6DNjMq1yKo77ZuTwtxoJdx9dDUp2ibXdGUKNZoYt5fj",
  "key17": "3queqyMTbuay1fgdkf9ifSdLkDYMZsWq2Xm2Eq3VY5VQnSDTT17NqKzEKZ3yuTQa1vvwYZ9cjtqKCdyKCQEZWnv5",
  "key18": "3GDY6bccdGHVyJbcSgX2xv2mn9Ju4QHfGSRttrD3LowX6S29rrGGWH26ST6uzCun9aCZgAjg4K8GLLhmYcNrHiKy",
  "key19": "4R6drvKdHL9RGC16BfjqYFLiAK96rx8L95EiCMAqEixn7m56cZtPizEwyAD6k4GBm7hj4uefpHrUdd7vHZGYy9EC",
  "key20": "5R1K3j286wzPEu4q8pUsyL1XgHvdzNKHyYkXAMWX1wTPr6Ezk9p9xRYH5qdW8oQbvWt4qi3YazZMaCruS1WMEAyj",
  "key21": "yh2MkhW55FLniymMXwcyTso3Mzy97uvVKfuD8YpuToUjz7XLPcSXEewhnysjgSd999jtziVTncmDEMuNqe7xVqY",
  "key22": "zXFKjqYfnZbSusegSi1KyB8nPW2WKKuvTRKDDD8jZx1qM54nnn12jGEW7ey6NjTRntGD7RrCJq6uHHpCew6EfUp",
  "key23": "FeYMfDe3zv6VcHJZZ2A16H94sRTfzNXMfGYfxYzy4b16Aqk7xkXdwkeXhwrZP9puc2xQbaLPvYv97JcQAuS8zMb",
  "key24": "42Di8NzUi44uaENu7qGocDzjaKLnaJe7d8ooJ3KSfSMk5GcbVNZkPe8pwHs93CB4ttRKemvKeTPhYenWEwoRx2A8",
  "key25": "5VMNF1vPqn6nogczbSbaKL2nXZh65uMSMu2H4xSAbjLguafec6NrTwbRqx5DvpoyfgBVtUqXEjD8hydsp23JwGzs",
  "key26": "3kSPZFLkm6yJLJWE5t9qduzD2V9ZnwSDYwHmtmpJAvk5GZywEoHbCw3UvrKvYsewjtW5n83wNkanQZjXr5T5H9m1",
  "key27": "5d2YNJ1p3WbtnBNAz2sdwUrK6hxCJu3P5yTBPEV4bS6mj61Jf9vcfUvuvT43iP2VHC8LPfsUc1x9TDWkxBGG7TXR",
  "key28": "eRzhdvjXG5Qa4532t2jeJrLVCxZYeXzgyq4JDwgHr1E6sx3uLFi5ijsw1hXRXiRfKvxf8BH83gNrtgk4DnDjxuD",
  "key29": "2HXvWaVWKoMZSWnxxSxfFwTaHMYJjFavVooym92sqeBojeEGJbpPkosC4uuRH4y6D1nys6keDpLrSifaFaZAs4Je",
  "key30": "5ppDmQ8U5ZZzwGiy87BGCjjRaB8gRqBcA2izjZt44nFn1Wu1LxkV29G2KAFk2wehfP7oT1jYYGxSEePoY19VNL91",
  "key31": "2u7Zv5mnzGpAzsJBGf88u9vyz3ytk867HtYzXbzqSoX42iXgRQXn8DtdwP83oFnrmuDg8ygkubHQQZnSy1vDKrLh",
  "key32": "4HYzbJsymYX1SHX4SuVuwjh7TqAjUayV7H7BLsveMhBRRcucWPa7ihwS3BMteyLCcDZ1tzhku63tLJ13rx68AoJx",
  "key33": "3J6iBMpd7XYWooJcus4X1DZ43YJnuFt5Z9iQDvsQ5jYazJ9WSd7BH2uh8Fcxtx2Qrebc8PFm2ViNunXeNBApwDBd",
  "key34": "4fNsEqt3CcoLiXgwXfUM7VN4X5742eFezhYnqGfZ3WBRfK5Vuhjqa2WUdFoyp5cDFJimqXXiY6nyGmtpnLDiuStd",
  "key35": "2qjtJut3DRkTYF2CLqZhp6pooagB5qC7TABWUwCuZT4YVJKUkz4UcB9XNELXBtmBobtKYjVPhNae4Hd81zm6rf9d",
  "key36": "4uBbJ1bHsK4vVbnnaARg7Ui2dD8q44enqsPJY4rsYkihjnsebcufAkPpMKkpCQQZHV27stE5tcEW3Gu5c5fwcojb",
  "key37": "a2VURhJ9VhVChyGFBnMnXcNDahFqgcR3Rbfr1WARTHpwUoDfRx6Q5LCihoho2AX6rNaHSid2fMykZQVohvK68oz",
  "key38": "5PbSMPgafC89DWFzxtrw9SGZALSknUpZhtM6gP7Qkfma7x9Rf81vcpuU1uk79kNo742LV8itvJkVm98u2RpNSi4r",
  "key39": "yxiyP7TUbnaVM2kPSJa94WerXGNbYMuYDWoxJXRk6EQTKe2UikjPTMrhGaBS2EwYoVDEsacCHPvbT4LaVjNXgBT",
  "key40": "4Ecyapi9tg3Ski93SySq2tyayHAqRzVWTVjU6WXN7wCikGitCthJj58stiMMj4eRSSdsnCuJCW2WpZ9n5wgkAyq9",
  "key41": "4CXMBHci5GmUYFpaMZvem4NzMUV2Sb9WkE3wswotEqdYDu8buPqgUg619B8meTizCE9uCyLrpygfHMvNy5VGGcVw",
  "key42": "5vZGaDeiWLfLjB6SzGxs9fyHGSVjS8yn3bX8SzRzw7xp82byMHv3JcjfcUViBvqdP3CTJbyLZtW9DpRvq9GyJAZu"
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
