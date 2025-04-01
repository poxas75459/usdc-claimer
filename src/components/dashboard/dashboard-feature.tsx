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
    "3761NtmgPt1cArwR9YDHiGZpyW63MNKHkycp9iZKRjCZB225AxQVnfWRyN5qthGZY2dF8cVvkRdxc1SwFmaEPiTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59nHHkRydnaJdthNcLmcSFgx92as6hKJzDkCE5tPUdmbYm2E9Dwxe7QjxGt1pmpghjX5P2DDDYz3ceEetiJwPAVq",
  "key1": "4kQ5JFdpFR9KZMC9CioxmXdtENHDE8ru2tKw6XXwAVr3TCF6SXv3jYkQt9s3n2XrFpoWHyKs86zxAXDjXmP9PMge",
  "key2": "44nNfHxBiL8S4RjckEUFw9UXrfQJinG9LkVeWiV6pCLRJ6s5LRvHpWekr6ZQnav9qr9EHXe7hXMgdLCKVjfHVzMs",
  "key3": "5ZhdXqwDs7L5Zam34sTfnzotzkxrRR29qxedu5hHfQZb6bWanQm33ZL3kuyEjsUDEpbFLHc4eKKAAGJMbHgsd8qx",
  "key4": "37yxpC2dK4NsMVY7AN4BWmr4RvaQJwCZ4GGhRaKjudKP9ndXH6bqmg9jHv3Uf2fVe7XdrCyeGqMKxjt1Ard7LE3G",
  "key5": "21Ua9qCyWyTuru1jhkMfMzzvew4QjZhkssHjnaumPFmyd1Mghdkr9S51S1b2gBHFE3tgrR6WAT2E5K4y29peM6iH",
  "key6": "4zjeKnCz3WUXUuhKyz47ovkFtZFXJVEageWUw4vk4zXYpfLz4TfESgfF79SNRfXCqAixeu5hXgJYmR6eLLHHihz7",
  "key7": "gBEuQVKuPcKGh8YZdZNchRjpQkg5xpJygdFgtaiTKJN4Zau63ijoiu3HG6iAmdWfbzQxV1HPWBV8Dq8pkXYWkyg",
  "key8": "4j3sdDGam8YMPeq9NLCXQHDYPZjbiAYUpHX8QHTv2soHGumaTCcugRb8RPFF8VR1DbLj7UjkutPJaSEfsQantxXF",
  "key9": "4rjxb4ASuUabdjHouBg98vFUne2m5ueMKq5BTeMUXqMo4eNYQyBQLVXeUQGpuzp85dY97Ntf7kBoUReWSgfH8QTd",
  "key10": "5B1ixjuMwKHvi8jcqLcuPwqVmX7Z5qV1KH5zq14q8gP9MBcoPsm2uCCUR7LAJyUepSU8KEkYVLUqDt92sLFdUDX2",
  "key11": "kY6fy2FJQMSTtpNuw2K6bkUe7zHV5K6vycV4PYjRq1TLiFy4bDzi9m2BwPCA1fJqZ956XhuYtJx5NSDtPzEP1gZ",
  "key12": "358uyPomLPvo73hrLni9pGfJTR4vbsKFZ1vZrUumccWV9VnpUr6CDbjLmGNoD5ETcGTjtPaqqhvQhqVFGH39uCn4",
  "key13": "5QAE5Y8e465gBvBzAL9KCycqPeonanBE2mxxubCGB1RfopzPwphi2D2kHniqbnkzoDfqpyEbLe8i6w5YaS8oKBPJ",
  "key14": "4LsN527XTrMvDuDi4JdujgtwkmZFVZfkEBsExULRY7Q9fp6Wo2BHmoboJ85Kez3wjiyCFRUfWPtGZkFFvMUaaUs4",
  "key15": "2wwYMLsLLsSgmh4UNw6mcHHPBxQFm1VnF8UnV5xv1YD9KjiSMPczmKwaDrRkBcLv9277MLzEq6vgnSXoTXURC5TN",
  "key16": "3fLm2zvpqBd7kgtieCRTsMe27JPcgi2cfexXHmmH8WekNPEWNWPXoNNuM5ibs1AvP82QEN776F6FisMjGnuk2imA",
  "key17": "7Da5NR2mayzBw6MTugbWe8vTaFfj6UBQQbtUS1nznrQTKGGexkRkQC1eBWRE4zEJYRhiztMgWyamnBee5jXc3eQ",
  "key18": "4uJpC1F7YtCS8mJeeEdoQDgi3kiFpB5jmBKrsaDPQPTAq1cjQDPfhaGBYLHVfEHwRptktQBZFVmL7pwP6rKVzdDn",
  "key19": "53MS3BCmQY4CMnAAXEiAMMi3bWg6gxDeJbbtKW8u4GWk2myDrbqufY2dQWRmjQDiHuGL7QqrKouREYuYrhdsRGt7",
  "key20": "9bNSxHYRdFhHhscr3cy8fUYF2kbCkWWaVbouVrxDEFBgpwoMTHoy27Saiygj7ELsdmahTGV7bWouZS3ophEYErG",
  "key21": "3sT7d2irUfCua8JkuhhfjZpjugUR3dz1LcTzq5Ln6yYsaDTdyRUZbqeEXa94Afp2iTvubcWuYKZPtXo4JdGe6Gfc",
  "key22": "hQESEhCWFnie12hzfXWiBmGbHT7Yi55pNkBGNSeSM7aR3KJptAEMnrU1qndx3fZ1Xg7SY7iQaKcVSmoqk9BPgDF",
  "key23": "CZQk4za2AQW3A8fwZngDXWDcEKgaxMvydiMpWFsctTtiEShFF2AgXWy87EZXVRW89hYLCUJPkZjLYrGA8TRGHL3",
  "key24": "3NMG4zDiqUaoo6uZw6xakjENp5U1p22UTJ4J9BhzVfjX5rcxuY6AAWohcaeFSfAs1qjAdWaqjh2M1Yp6SvimCPQp",
  "key25": "3Si4AfnA1sUa7yZGSG9kHdSnuULiHUAoQd1SRkf4ahP6eQocB9NLBRNZA5KbyqvssvpFEsT7mw8eyziQkDcGaXme",
  "key26": "61bV4FAdrs55tf2tXZCFxfAXgdN4yCQnqA6LC6vUCgUR29Cqijb6Ps43xGdy3CGUkTJ22UBRhQmCntCDhAQYMP8J",
  "key27": "3QFcMT5ez3oCGPnR54MP2GABgD5Lr7xmz4MKMKAHwz8TFiTu9ss2DAGwVRzV5uPUwm8GQpiLJ2HhZezN5y612YUU",
  "key28": "2WRPm8DHtRmKeNJWi8NAfBeQ2Fb4Xw9amM7fAR9TgTDVBGWYdCrmvGbCo2goW4Ly3xjSQi52cRxX6egEjsbZmCZP",
  "key29": "3QMAsQEjZZGCbnk8uyP3KTFUWzSPkK8ibSgnRVrnXR5NUNq9XvhTR8YRzCy1pk5reT2xgKcP2mFz6GqKBygbDg2Y",
  "key30": "2xbjc415XFZMBYrU2n6YLYyzwNeTmwzbfzt8oqw5iWoFq4eDhpQvSkKuYq95JkFrGpKqqAG8wzSu82Saxw7rHwaL",
  "key31": "5K99LAuQhYr1LZaBeTW3YcZ5tsnf2zZnLP5T7E4pt6mUar9Gkf7mEygxVhmMRb6EieZz7X7GPwrCiWiXpa1StRA8",
  "key32": "28kRBAN74uHCjFNqKVF22QyrHDxj1tHC85VNY5wtDkPcarhNpRo1AZYaSbG8VMyDX6rriuWCFfd5zseb2j47zLvp",
  "key33": "Apx8isJu7fw6R3SXyimRqh2VtvoVjbhVCwAMF1S5JVPfv548CPoP61fyyqeXTs96cRhnwxFgrZHV4vPE1R57vf7",
  "key34": "278uaiQrpTCpd4ZQQnWZwrkMr5AJ3PBPrVWw5hzCdPtwTtPcQMr7b7NUXNHh7Bu3bnd24vz8XYhcc1UBB4iiCLCX",
  "key35": "2wnqTPTiNN8gJ8RW8bmCgdGZLTaF2xoE9CxQX7psYsxqVjqFi4ZNotCPjWcTQvWDQBGdcqqb67ytZK178DjQGJZm",
  "key36": "4hf6wCXratxLscSBihLEJCjZcNRmUpk342tNTTL86LmpvUPmN8C9Hx2CNZEECqPcgGxFhJ31i3YZcx2KenKDACnT",
  "key37": "4EdywchTrN8o59mXEmegbRJWGheaqA4fY7eHP91fJ6EpNVtJZsnqqKBqStEMsmAz1A4LCSzUq72CTaFnBhHgcJBd",
  "key38": "427JCkHF6BwWbqT19614Xs8FiS7dG9QC3JxD37obtSnBghaxVbzymsGuqTHnFkytoABkzEKPDXaDdULtTch2iux4",
  "key39": "ySb7z89zA5MMTMLAZmQgxmbGgBgajWPkXx4sQMSRBgTuoyW4gZummJndMQHdcV8APjKMAK142UWQ7dCkmAB89Ci",
  "key40": "R1iZTHXZ2PVxutYaNRYhdB5rherZCpY6wRfDf8hQtXKCXYabLvaaQtkkThzAGLR7QAQP2xsQ93wsQN1azgEsdCF",
  "key41": "3dCG4zKbtFC96CMQF6JLgnzn2JXRVr63HRnWYKewk23MnE1dSybQmExtZ8azaY9SB4Tz2ek8bNH1FKWtHBs66nak",
  "key42": "4nfUcFYzLJVuaS52PmG5GhiECN8uhDNY1U2WhpAxHwq2hb587TJ7PXmTFbqXxC2yvxTPMFwa1K8bwWFo65E2UsZy",
  "key43": "3s4kkth5KcNhqfjnPNumoxdXCVT2f6xd2GdcU8k2sHEhSAU2KGDjDhwPDwBFtZnovJ43uaa8A6hsWPPbcNNPJccx",
  "key44": "4zAF67XK87pSa3EkGpWip2rXHG7uinzLES4Tv386dwEKVoLFs6LgA7eCooQehVqeVHKpjjzZWYkZg4SwmQqZQNXG",
  "key45": "v3fkufg5d1ouatNER8ipYNXbYmykApGiM5shbhExnWLBEmfCE8Rgsqz9dgQbbCnFgbN1a6EN9SWreA2vpEwTmZc",
  "key46": "4o6JVr8u5GkB9kp1qgixX6iPtaJat2y6oyFGkvSHWNGyckS6xxPx9b7NSH3NRLwwzVszz1Nz494Zt6M992PQt2pJ"
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
