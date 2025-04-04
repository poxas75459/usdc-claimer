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
    "3sXEiVRphuUs4YhgPjNabgwrMzzTopjU9r4Ztb6CPARybQyXVKschCvyt8zMesyJSbYTAQybadQcyf3jDCuzoSky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ve2RMRsrWUFf7DpEBUuQupXr2aCPrHrY8ox3CxYQttuYSuK5YaXSymPenoKMf5DSXt9sNaJy3Uxf8FZ8ygX6NMT",
  "key1": "2kP1i6X5Z7pQsPWmnZb2mCQPFYM9i8AsLANSiUuqUJv8oQXNCYvP6x4E2c7YiW8KM5T5fnUD59qhXsM3A23xbQot",
  "key2": "5U9NThVCHJxi8c8nCkFnerfheia524QUrxT5futbUmj2hLkTnCifkDHfreRNEGdtgoZFebAahZdWA5KuBQBgDJKE",
  "key3": "54zzpVvTvFkWWcJVMN7WkUDqdL9EHJ75mr6GSH9C1x1eMVbHjisrGRadPaT1J1DKWbSFHC8r9RqFjezXmFCqp1Fw",
  "key4": "3rZuYsoCBmGFse5vroPEwHJvnzA2WFVE4nYYnqTdAvGoF5Vz3t9fjW8pNmt5RhpVZe1bLxkMFyqU19Nj8KBJ7MrW",
  "key5": "4X2bqJ9zPGaK4r5TrSiASRgkxLCBWN7TuW4YpFeRMbGYXWcyDRFHhCRFFAjcXdL9dZ1FYCczuP18UCKd2fnSku3Y",
  "key6": "27uWXaJZL8oTkQis8Dzm5UDRDqysgpvykvcpzJNVKnqAGY9doYzWwJqs7D3grd7ddczr4Rv2dN7Zvitd3ensUVVr",
  "key7": "hsoECGoPwHWtEGUkR2Tbjwe8v6bGd2Wf1JYxbzajdeHXVD6Sh9PfYQAr8VcLrxPLyY8CHn7jZUSQitXL9j2NAy7",
  "key8": "2QjQiK99zffmQ4rp9tWyAcMVDCy5D4sgsuy6ejqFRwEyB53kq4gxnCczA5X8aWTUVTjD7s4x2UHrWoVSadg67QuW",
  "key9": "3RubjDfHPfU3yEe6MQcs5GnyPC72B5koZ4r8XVVeReyxUeBC7NhuYRCL1NmrG2Npu8UdVq9LtzNJvo7cQekFXhZH",
  "key10": "4kXNv1aRVDMgNaYukPGXTkE5dwviv87nXfzjM4dczk1jYJ5xQXWcw2CEShSegysEss3dSS164NbmGp321JT1qmmn",
  "key11": "4nMttrNZDX4zfECrF2NcVnR6tYA79DT9Sisc7vBTp1aUrCpQbfd9EvuVHiM6ASRVpQV7L2yEERzcjFvgaejNpeGV",
  "key12": "2t8gBKgDNGnMGzXnhgE929bD7GzA5vnsdGxMwuPdV4DKj9YN3UhNnskqtVqixNRVCLNGsUu7X75NPkkgotC66y5B",
  "key13": "UqeUPtUb95pibnrf52HhvTBb5nimdmCMAY3vRmnzFGdeN7qsAakv1T9r6m62oeZp7Qf9XBV8mht6ZUvMfvmw1CQ",
  "key14": "4GbehnR7cJdSj3DiDnBKQL84FCef84eSzwWQNSMdGTApdWsfyyujGr1SZWbJmRKS27RiBU2HBcs1gquDEhtuMT7",
  "key15": "36i6hvTp6YkUW79qZFjV8x8L61eeLP1ySYrXfawbYrzcx1fSQcdw885R3QYie9FrtKwqZcYi9Tk7sPqLKEMdApuA",
  "key16": "iSXdJHxupLjau7FoCN8M6eYMyveERtdsPJpADBFSRZDUjGKiGXojFncdW6bRaB4Ze46fXWv6Tvv7UdEPMaFg1wv",
  "key17": "5d8U2o43xZR9JESqeg1eXsfNuSxrbcrjA6Uu6uqvGhycXNHVKZhoDT5X7ppAXvr3JXVXGHH4jXyGnyHv6EmCRtTJ",
  "key18": "65Ww6ACC636SFd4Wn48koTMzgHXXhyVvPmyuW56LGmvk22ivyvgmURYtay6rhJUojWGVGkkkYCqyVrtaSuPga2Nj",
  "key19": "3ghTmGHaBQPVToQdwMMBJCqH3GFZabcyMWqZVb5qVwWZfeLQVySRtLL7pj1wVaLrhiPBu3jaMLR79qDaRME1CKXg",
  "key20": "5bk6enaLjAh7z6f7tbkT8n22xq71Gfya4L2hzo3hrjmppSWEG31U3eazpY2SNec2SsU6D1SasLELX1SS4mge8odX",
  "key21": "fKy572Ka6x7ukX8kL3MnwBkUUv8Y8x9ubuiry6AZrCrzr2ESdxE4hdEHYQBeK7fVkgwWWZat1FFabLyhW7eZXnx",
  "key22": "34XrhhHmWB2v9XvEbYpk4dGPyZECZ61zxCWNrd4YNyhS2L4JzwNrjH7PjurHLWhBARQn89akn1NNioMyF7ERUQBf",
  "key23": "5wVxDV7Wq4oqbSotm172t5qcrmHkUYHmhVGnpi4Nw6J76qbdeEou1nYiixaxkxrLcDbpBZhEqbHFKdfhpf3Seiuw",
  "key24": "2jRAvFVhh6yszKRCM439xazEtXJps6mNU8yiUWUTx3cYE1hNSswGwL2Ch1otFdYBM743g9v6Fv99gtkcgzheHQyy",
  "key25": "5Dk2sjnBkq3oMbu3jobs64zeMkiCoNmYGtTJzH1sNswibjTm5oVLJidzRrNvEeFX9m9zSn3QEY8U9TVTV5xMMca2",
  "key26": "2R1S8kTHkxHsr2Y883isPMxEhx3Xg7wCtLGQhwfmsdKCUrPweigHrNPJyDPveug3X6SsN5DXfkZppKtpJ2W72yDd",
  "key27": "3DNW95ydxZkruk4sZg5JQS6K7EJPRGk3gBhNj7ok1XKBSa8K7f9REyTHo67bZQaEvqepmbR6m7hMvtTJxVjKopwT",
  "key28": "2AxjG9AMDJiis6RzUS46SmrveW2J8EezB7jPMMLtiv21ynypduCAKgGh91fSqaCSpL8GSkjTMwExPBWT8gCPb2Kf",
  "key29": "2Z9Cn4vUwsahwJnB1GmWzgD88CnZH3vjsCZuZJFGXMcgE8iNatoMhGUsysVwfXK7XhciJwpwxf7yzcA3ZAhm3iCy",
  "key30": "5r7wW54Xu4ubq56fmaRwCtaQUatXeCLyqu7EJZ7i9siYp1jwpDhSEYST9Fd66R1PjjSWydppmeYjquqSFfvnJmRV",
  "key31": "3ngpEYvR8RdgZaY7EeQwNWdfrcdRLn7BRr2JGVKFEK1a7riqGjXzgUwRFS82RV3WLfb4bRCk5XQ3WMLLgdwHxi6p",
  "key32": "21yQuFHC7DCRPW5PG2iQH18wVYcwvfwW5nJ5eE7gdWwTQFda9Z9pemLwWW68WhungbXTB1LAZyXQwXufYkpqpuTh",
  "key33": "4bZVKYjsJmF4exmK28CEcbmsq4w3sViZBsHsMbCV7NWvK4aDBjvYtSQRedgxzVvXRE5XTHDkxj14BbTcyifHncXc"
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
