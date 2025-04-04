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
    "PbS6XUm6S8SC8MJW32NvUdE28Hf1KQ2Wc3SfjAv2iim5XCZ3ZHFDUwWU1z6HMfaGShaZC437xEpjc9feKDvNBCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rf9bfTpk3due2uxMUhGyhPH8XRK4tSvWKPjGGqD5ogwQPk94hWmEffG6kT5pZ2aWfJH9whAgDvP7Kx4jKaFUmKy",
  "key1": "35P1KdsaGp8F2P2GRLq7Xr7ubiL1ao1xZVfvmH7FgvxejUvhTFL8rCnpyodWPWfa3poHbQe8oSwrY2441cuxPh58",
  "key2": "2aooonZivvmfpwQR5XPVkj5EVrLC5wr4D67kQZrZK4WyRFofQWyWhg5QWZVE81ytv4LxrKP8BxrXHjEYLA3Z4iB5",
  "key3": "674TJui4xAeBTE91doosgLCZ8HAv7JExcCFezV6cnY726WUjGubgkxBrecheDfVU1Yfa4TSCpyMsruoBFoZTYppG",
  "key4": "Ku3762ctDFGUNpkNJGuHsGnpiPxpj3L67NwDqMUiB33CR1uHuYJc1EGJbJND1RuWxogwe6x8KmrDKu2FWrLfKoR",
  "key5": "5Tm5i5M93bxCqXBP6cakNwWjczu6SZhfU859PHuQUT2JKnh5tzg3sJAzpE6irqMqx5bGg7wG1n2v5FkDDN7ozvnY",
  "key6": "3ZLRLhssi9wnnXsKtfJeE3pS6wEZkFJi35g19M7x7t1ZJ23X63xdNFpPSGwzZCFSqyboLmsZKunzj7u4rGtinSAe",
  "key7": "2bnZ7i8FSN9MFLA3sd9TSQ9rh9tm3S1aZjQZtWKiddQwsnrDznXjFBFiss4FfvW137KqELYUWsY8kcUtGS2a6yPh",
  "key8": "3dqMKGDaUx4xcixUJHTt4fTWE7pCYWs9Lsv48J8hQrjVLgSsi1GeeNJDz9867P4ZJ6jJFqshC62oC5k3YzxUVXA6",
  "key9": "3voMAQPQAVPmi1ZDvXU3CdaNWipQKUXmwWT5RLQC8BZtdnGtJov99WcGDwVCBioELRxCs6WmQxeUAqszX58gXJGr",
  "key10": "4fmUshHuzkbMHwFywcS8vCoJetL9CbnNgziSCJ7bdkRcS3MChh5kgxtb264ZAxvzb7v45tgDh4D7LTfgUsgWbcNA",
  "key11": "2V2VvucR8jVNhcLsrNveqLSBppJy6ap9ezX3EpyUBMLQeEZ4BK2YfUJNrpeJ3fw9487oA9kUM7gkxhpnAjXujsXv",
  "key12": "2i5R1mtpqZiuYq1cqmaiyL2mnWYJ4zStpWKV6kdhyYx4Zf4EmzneuJQgm83pt4oiEJjkiaWYBdFDBtZ4TBB9YwAY",
  "key13": "5UufqGXSLzR3jS7aiAgfPMBwLv5STGdTAjBFaJKE9Q1V4d9nnX3n7xzicD1uKEXUzM3CDVmmDD95APPZrn1gYD69",
  "key14": "juCNBq5UTvdGY5kkJYTLutiYobnJx8HqJ4WY4qLSiQJP2HhZM48HsGuf5QvQzi2zdHHCj5fi9tWWTgLegMJFjyj",
  "key15": "2Av8aCquwtBRafjqFVHPFpfX6NKMmqmze2EHD11HQX1wJCJ72ybasdfF5u6dSFpmAeiuw9Yf5x6AnKYNW8QKWr2D",
  "key16": "4movUy9wfnYC1RE4R49w1EDe2vZ755bnbLPNvWmuUFw56SzMrGDk6fLuxQMjJ8bsX19GiADopd9tcFXV9wQeXYVd",
  "key17": "55v3s5YzcAiAkKchUA5zMx2vQdoJ4pb2dfCyT4k3A136ceKCvy522nmDqSvT9DWn9XATWYdA1f7gfxM4kbDoTbFF",
  "key18": "3Ns7LvRMz8mXgBe81CWbhLPdwUZfNz3Cqo5KSEJj5cS7w5TimK1XCvABfszmJjTts7m9eHt3wDyzH5BgVpkZUJ9B",
  "key19": "4NzcuwurG5XcHd4CjtZeR7NCqgtMXD2Xk8wA9LwPcYnn9mXbcoVuWARbL4t4mTHadksrtL8MDZBSq4g6BSFLhc35",
  "key20": "4uDhokceUuB9vPdLuyLqQCfqfWfGuXJAFiWFCyixUL6MazRhCy5dwqBQKuYoHsRvUKBJmaqH2uE3KaHRByQtHwzF",
  "key21": "4P8q4D1LWfGzoofxez6YvRKnKRAYMNPNHz7qRwLhH5vcEiFNr7wdgChkWUmqtZQqVLZW6B7VZCRybh6A9ao1TZXb",
  "key22": "G5spnr7W2WoVnGPKyHHVfsEoa9Qhi6sbxnnkWFjPZJH56JoYh5CVQB4NqGe5qnbknE5YbqUG43qurKJJcKXpBfx",
  "key23": "2jUt3mkrsQyovfhhaBrEZb7csNrqGssJYBKLwbqeHLCRMRCpwQAinm7KdNCvRstDo6y2uinyS8xc5WDqaJNgvwMD",
  "key24": "5NjrspG4V4pHFLUXJ3xKrvvxF8G9S38nVJFys8iy2LdNdGgGKW9BixHzY7y6K23QAvwGwVRTEbmYmJTqAJUmz3Xe",
  "key25": "3HmALnHx76LWYbT8JJ5Py6uBVWs2EWj68AjrAXY6mxZ4JUJJQJwsnBE3qfF4bTGiMiPpTdcNLvkrrfEkmYeKLK9D",
  "key26": "5mk9HgUSLDApKYDur2YyZtyTMtJddazVg192S3s6rQcvegDa1iNbf9qc7kWvDK6S53XxH1dPZ34a6ZvgvQ8Zeki2",
  "key27": "3EHdtJn17BZ2tYZSR5PhjG8fuVwkGhswfjPnCZwqqgi2DgZicGb3UACmGnz2q6cWhYAbtjvw7W4wQEarXjf7RmjZ",
  "key28": "2EZSd1VvZdrKYt1h8diYcaawXN1AXE11RU4WxkTxJen6V9aTg8fRUr8U8MK9TvQhpEf34w83vAyswNFEtdQwxV9C",
  "key29": "3xpMcZSvr4vAg5PhBjVSVrkHMra1Cmze1xh6yQVptjb5SbM3vuSNXxprGfHX4VnX2epKmqMQW9fJQ8vJXcHiWpqc",
  "key30": "42PvHYyiPHuWLFno2ZEQQ3yv5vP3SZyP49yaKg2D5Yp9vxVV1SXSBZ8JJjwnvWBUSDXQWn4SbCSQzqLJivPZhQzW",
  "key31": "4m7k5DeWXJhYpfW1cG7W2rNLqmVyCM2tujEfAoBLHoJvQPDdTpAvwnQLPrvjZ2eaw1HqaTv7sjry2k5bqJh4J7CU",
  "key32": "2vwBkHyep3RkAaubiUSBWz59617e4KxAhPzV8YNpDPoHDosq4EK3xCcdzUnMZwbWLaNMMBkZExjDey5aqWEL7NAb",
  "key33": "38FJtw7p3e9ExVq7PfbvoN5Buos1Szpz7wWuQidt6TNzgEzAewyrLVpeAbrtCrqrANbXTNvjLLyaTZTtBr9aQQCp",
  "key34": "5o56PFL51YKFqXUVunmuH34h7pE3Nwy5EtPQSJRBAmbre5cT3kwb3e9uc2Z8F9Z7saQLkmtfBiuhu9jNGY1fTYMt",
  "key35": "5BeAbUYBVoSy93hmK2oxRZfD8bS1o4vjm74dgTGjUNBe41HaYtgEkuwkBKJTtFcN4ABiwvY67GVXv9raKxL1pJz6",
  "key36": "2xmtrRUGoGF4riFP1Rpvy7jL64YPmBD9f38cVP64Gf5hd94aeyydbtPM6VX7cxJLwdZMudKRS2EfAVrc7omq4sen",
  "key37": "54EA1WZBQ52AWYEX3befqqNQa5uetKypzwauUnBwSv1DcrpiedaMpdqTSuDkHmbbTEWikgTSAwq5Tifs5Twn3Mtt",
  "key38": "2uzx7DYYkL7i7CevSs6nRuVfJyGjPcQBDBnzoo4h6WDAzodVvBXcqAGofSJ6ddaVejp8G5NKyULn2UcHK9Q2Q87D",
  "key39": "5B8rQnzmqm35vspUYe5YaQ4LQyL54RXVgTMzqsj21ZxLZynVSZ4X232ZAMuvii14G143dYZYxojbo67YLyka4xUq",
  "key40": "2rU3fDzQTnEFVgxv7mgRemxYhLSat1L1A7frUhqZKnGorG1x6HqcQwtjKU7S4dYnQAdD9JXd2XsQg2nAs8G2sJJJ",
  "key41": "D38h9vRLFtSiG67xgFB1s5p5kdPxECXtajN6cjVjXBLt9GnV1tLR8gxwqwDxt26KfNpG4ounPF4Rt3pP7uiy5y1"
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
