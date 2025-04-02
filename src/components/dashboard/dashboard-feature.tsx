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
    "3fpN7ZkAyPGBcSdKFbQ1xX33YV7KEnXo747hXMA4znBrkhrp7AUgeF4rLnez53RQ5K4P9MPBgvaT7HzUtGYW2F9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44JVQ2YLmkAv8KKnESQX5V2qwxkemvYn8aE2Wtw87Him6MWKWZiZfgFmHf4ku64K5TnUzpKzz4oqXqdyTBywQCLb",
  "key1": "5PSh4EX91DozcEidmozbZnVAMorPste8YLgP13QjJ5iez59QSDArGUFwrou6g6uxaxQfB2rZQRTaGzri5yQXuYKB",
  "key2": "36p5bs24fYvyLLtndQrUsPizHKsoiFqdfr13aK26DQ7H1CnvfgkBM9RnVrTeM9UECmPKMnHtQ8ArUye7QB59LCVW",
  "key3": "2eL1N5j63uUjhuEdfPxdD6ZxxKZeZ3Nt3t7K5bwbnapF3w7HcFpiqNHBiu6aafxHDvckJHQAKzoMmtM6FEnZh68d",
  "key4": "3U9WUP3BaD94pN37Us91eWoeZt86VFfYMLLxcNqKxvn59Au1jwve5NWv4Ve2kxtiy2Bt4huaHeLYHZJ21fsEr1ty",
  "key5": "5hZJKm2qC93QbhyE74z1F18eWFSRHzFYpWG67B3n9rxwybDZPqp7mo3arGn4qMx3o4oL11rDeq48SUruZXCDuUyR",
  "key6": "4UYES66QnRcegJeG3A2W6Q9Ndx8Ntamp3bHbwXesnFnT5SvMaF1bwxMXeoA1PoBwqa77t1eBc1KgaPASBVnUCxPt",
  "key7": "2VPgMcXnhucXT5Pvo4TgDfVzDDDdwMhWmLXbu5LKC1THy7tMW78TdoJFZetR3mQqPrnfmmkqin6J6DYQf5CNCuAm",
  "key8": "53w1KPZSWVftHB32SCP8u6vFNBzxqbjXEuJKCkt9iEQ5Rv4YaGACKYDfAYh1budvTADKK9R7T97GzTgjVo8Fsnrj",
  "key9": "2frAZHznruNUU1c7z3YNUbM2chQYY8dMHa6cHXQN4zA2zssP76NqfNqUaMas7fbhtRk6w6QQBVzrE8N5A2tuFA7C",
  "key10": "2bpiho6aujGFmEkrVEUK3oTTgdEKmiTf9kJKFCD3j6HzpT4Goafw4NqVesFDdZj5oQRe6TgtChPQqr8SG67KEAjv",
  "key11": "5qPijqPgV9JEuRrJfHejup2XUa7R1StPw8kg9U4tCjoipssviC6d14WNUGDjFPyvrR6ApVQZY7PiecEfjS1DPrrX",
  "key12": "vt8Ed5Hv4UoVXWDqMauNNGbwohc3KRGpKNbcyP5FDVxvpKdCZGmQkJpKJGztwDFBHr9ZbhcZ9awiqoMPiXyECD6",
  "key13": "L4PfsR8MvSSCECHyUwUES4Hfaw7jtXYPQ4pXRZsJMFL8qCbZjhQSMHxoc3pNeSGxszD1VSgRXpn93WHxh3rE224",
  "key14": "5HdQszzPZTp6QZ2NoAQR4fByNKP53QNZ2mmYxw7W9wtm3hVMmrfsFcij19DKgU6py9EEJzzqw8oMTg5JmB5RHV97",
  "key15": "51VaDuQhsgLaxpSdrX1SwEDWcxFtP6jDPDdFDz8t9B44BX2fmhRpY5jCbhz2jCmX8L64RdWU7Rb5mgaw7dDqPWHc",
  "key16": "3RrTpqFHxwKbRban6yB2PJNGoM5QsyMkvzGaQz8jvMB4XfGVn1NZ2D9yX5uXFTMfJK5jFw9gKUq8XSQj4XdPMjai",
  "key17": "3s6U92QHKaAGCDd9KWYPcfyBupfPwdtrorm8MUyojVyNs39MjTkw2e4RoHnSdXWuBij4WFgbHEevRc4x7eAQgLBd",
  "key18": "22fHxXBE5vyiy7YGht2RYwSewKhHXLKfSvSmCach92Lz5dKVUefCdQcxKTw6MCJGYuHQBEWGYVyQaKnWcdhzp1h8",
  "key19": "FH8FGbsQNaVSnZmmXnZYRynTLwkG71Dav79G4KBbU7p7KZhMzavv8xWse1siujwZMiwDCFqg8KVM2N1YS3o8nbT",
  "key20": "3fuVeLBfxS6Kead1m1jTJhVxyFTtHUhbRzrw6ptFDq3jXs3wrEVM17wZoixJugVokwqE2mRhMHRUUSwg8YeQZpGY",
  "key21": "3xtwozKWm9FnqAnqzAjvi7uGFafQSTKeVdEjoFnF6uKYUNUdddj6pX8eDuyz2BNc6S6LkeYX6zeAAqkCSqyShzrr",
  "key22": "gR6X8Ca8Adibn57izC8z7r7jsAVQJrmsRLimEAontU1LfTBuXPkQTemGUErG5EgQxk8haNB5DjS78Sp4aNYNE6V",
  "key23": "3ci88jbZBUW9XNHbVdu1wAMVYfZFWgpSYXCvsHmBY5uWENxXhw8cTzoBp7FxVEoc52GAywd2vyYuPmTa4oKJDMv",
  "key24": "mMRFpWE8Pnr9CjLKqiESkhob727ntMEcnfpSwm4KkMirU959vJN78Jz7t5nSDtVkZCrycX1d5xQh8JSwviKqU9t",
  "key25": "2krojXapREB9mGsbHDpGhg7oNmPzNNfq2jpfJuhsCvnAznUifok9YTPLp1W3N1REjsYZHTFJsoZCoJKnfudVEQ6k",
  "key26": "5G3zCjEA4AgWDeUFB44cQXa1pNEeE4yyEPisMFvTUP1Jv271hFcvH7GNMLtqtA3hrRGm22GRrwpMVAwpNsnYxgHq",
  "key27": "4P2GsVQr6cEgt9p6KVTitfkNmdweVzSKeTb3LjHhbEhm897qKWfGCTjVAwJRXhoovWLMRYMuNBzWwoSP8cgbNw67",
  "key28": "5rBv1TzFZU8a1m7qZYHJYNFUF3c82NEh3mmmPGzXJvu8LFcJsgfkKLnQoccJ3xk16rY1S4dmquEJYWHHzDaWWpt8",
  "key29": "2fNN5YSvUrGiD6ydt4o67WoExD2cMpuvvwHVCNB2gvtnXCz8ZMNaec9sxNzCNFfPgvPUUGzzrFDsHxeKvExawAFW",
  "key30": "v4DCcpkkoUybofvorCvEkHadfBKcZSrhMQZikmwpC5Ya1xVFzhZxHDmDS6gsL6DvAjkr6aoAntSciCs1tKukriT",
  "key31": "4nnnCFApBBk2RV9r1SPNfcL3XNvaUeKXhvcqrupEbQCMdPW3cojTKmnTbF6Zj9HzFDwfHxfQGM1sfH7Z4g8Ykxem",
  "key32": "vbejN1vKw2WBU8dsmWifVUHSEtnRYEzjTrJBdaP7BHZ8TSxPVXjVTPwdyMRCuEdT5CRcQ1P3jK4VD5f1dd5e1Yw",
  "key33": "5GCNRGJnF3SmrSX4EhUb7YxeLPUcGapEVTLvPAp5K89LXnqgc2TBz2xXoFE7nqFkMXdyaBh4p3VpF6YNmVYJaqyo",
  "key34": "44vWaUjLEo2xk2aDNf5MABrj5ea1jdgk1zrPxRBRp6rfEzAH7A5f2dvp2bk43NMaM3bMosT4nHmnxEb89a5jVCU",
  "key35": "QaAe9kkFLBENXUM9ncVJsDe9j7rLDcQRcH6d2FsBnFazhhvJywvduz28BfSRtWW6oQT7UBy4k2onhvmy5Rv1pyo",
  "key36": "5MftxJbSNuewNxWYYQ8JTH9FcbyYyfqoQm231zUSfrH19ngwW1G81fNxRkvBfLfxxstUNYa2Pbn41gh4C5LrRWFK",
  "key37": "67U7E86dRQm4cEHNdZaafobkbYSgoS3Hwjt9GbucekLBgmKiG77zN4TtRZVCdRP1PG4SKCsyHAbGmkCitZ5Q6Han",
  "key38": "5AToL9Ao1Ex476rd6DsicWRXdW6gh8tzX17RDvcRye3ki2PTiuLnorxwxzS2vbN81RdPcSTBEo73oxS5qqgpok2h",
  "key39": "qKmkmPbAmQScrJxFhAbnDHxnALy7N8pkjQXbBeDitCGGiEcyJfZiCAhFGnqvBWfxRWjND5GyX2JrUr5ct3YJsVy",
  "key40": "5RFncrGx4DKuDcrah94sWt56VmQfyM5g4hcBjykkgk5WCpc41FZpTmFTiAemVM2NvUp3QJVFW7GghsofT6KmmC7N",
  "key41": "CQQShammTJZs9qqgiDMFV8g2xKgPsV9u7BHR2odDKKTi5MThCkQ7TmaGPSsEsvDHMficrgqcqZcsY99xDtvmT29",
  "key42": "4g69RqaLymC1rUzEpUdmmzeWoiRnBH1WtzpuRhUj155Jax4EfHReWZGYefhkivVawTs4rAZvRcTwPtaYBb6uxnkU",
  "key43": "3217og6C36tk4zd9vKPwvtJaQWxW9nSr7PGp3CmLArZczyWsZaATew7wmDrZPXp1PdsiWrVsGZHnZAUyK9mr63qX"
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
