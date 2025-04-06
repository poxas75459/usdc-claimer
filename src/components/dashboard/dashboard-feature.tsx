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
    "5QbNXMQYZzfANE7pvc7H1f5Zozjz8Cx2W9jaxFtHxdVF2tsbZWgzLo7rkbKPf9RvTzCUsaZeC2kNQpUXRQmoK157"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HWhmA5TXQB6V7NKPGAY1tAXyYWzL2cHYJzEM83zvr5T7U2MesQvLomut1zMJYg2CiWFeJuY6GUVKntb88DApVmv",
  "key1": "5pSnsCumLMptBzUMoi5ETmQrnpiSHWzvrgMd4ooPC4MXKiAzehF2ockPSJUSNPvjw6t7pkxYf51NrqNnW9xvUwQD",
  "key2": "5PpXL7EUJPBL6221uZbL6FUkKwnCFLmq1VjGSH9DAv4MGJTi9fT4ackmvAptbK7K8FWQAESCt42NJC2u4kqPCCB8",
  "key3": "3pDojJKVzrCKuQgfnamEqpMQGX8sMpDEgWqAoskPFj6vvvym2gfnF3D97KFgYhPFEsFq3iP28kkpqM3RxqMK6XSU",
  "key4": "2eXpUriR8pnq1kwvi1c6thbF5GwUeSyRjGaDy46wAdHmdadcjhkCjgVnC82VXKeuWFy2nroPzbYj3MEfoxY2Vnnb",
  "key5": "552KWFpXaCz4ZLsSQxm8o8JhEea6A4JkvHBEjYGuFVwaNforY85VqaXQdByPLeAXHjjKJ5Ss59KsvSXnLsYNHrMS",
  "key6": "9woCWyynBt6Uk6nNCrgwEoyKZcKcDdtuXHHkpGzkbvgUE9wrhbbvdy8C8dWCk1gkjiG1D6wjD8v5coFmL5N52eW",
  "key7": "2sS15pJB7ViCEHcqmf5ZPE8sqKiEiedTs7mGAnEuyQovHcVioPU5iexFNDwmYyRrkuKk5oGH71A4Pu42jsAyHqGh",
  "key8": "2aHinqFqbNcCp3RtvRiUiukU9yUErqtYx3YqDx1mJU8nFcxpAXV8KduGwf57Ckf5wjWgXnqBTAcTx4Zyg4dHwxms",
  "key9": "3kA1DrXgDbZjLyMARbPFYLE1WioxY6tKwrExnsfqetLonJ2vtE2ssFn32tA6DLeXxPHL7wyqcRmEiPjk3ADsugnn",
  "key10": "2kXEBf18kxTNj7cBWrPKas9mXhTPGKkPdqA1nd2cnCretkAE4NbcgR5L95Hc4HFZQkoEhDosE4jrRqfNAocvMVn5",
  "key11": "5EwyaiQJAT1E162Q9cohM1qoLtkmm8xH3UPyi8ofzARSKCRbmAFkBHHyfHWHFip289JC5gudGv3yUeR5meFdXXoj",
  "key12": "2iKhhGXuhD2zbAsjcFyhjfQxnoJPUVX3JroMbMCHa1LC7FiSPB9xA7iAABtZFhp1Vr849891pSZYeh5xAsLS2oxg",
  "key13": "583ewPn5NHzPHGUzFwLTCzXtuVVDd93xXM69QhAkcPct4cRLpkQarhLSzmnvWk5DpyA7VViJiUBtzz1oxCXbkGQy",
  "key14": "5V655yuoypqCtjtdt6i5r6Q8Xe6Vb6TQx4jdR4Q2PwxZ5fJ5rqnPzn2Wm65CPRDbkHqR4wb3ZrqhArHff7f5UWgJ",
  "key15": "3QVBcaFUBA6i5c6cTBdKF2B19mhzzPSK6q6xJHuqE14UARKXtTBavAqfD9iovZ8gLKEXJxKV7nC3AjcuXKSfebB2",
  "key16": "5fmUhjXvJ4Rb2CDPthg9zMeBMwrNJQy4gDKDRkgT8WwLfE5A1uzLGt38vnQXw2FmK78tZFLaD7VRJeqnpeZkoeFx",
  "key17": "3YgD1D2YNLhr4kPX4SXbcdFvtBjRKnmUTopFBrskTauEW1u2shusWHjiJd4CpcVbRcv7tWqaSRmorQ86DfKLwsmy",
  "key18": "kEYd2nZNp1gxFBMUzJe1nvGVDtfrNyEr3zf4UKwUGSFFv8s5sEVXh1jbodmnxhrz4pNggZHp3AJVoJXKg2qEzGW",
  "key19": "2fjBzvDvWbrkoJ67373R4m7DXj4JwmpU1K9j14CGXnbyNiCLNLZWjyaY62J2qMjAt4t3w2N84Nig9rRTGCqhFvco",
  "key20": "NYnhtuC4w1K7qnvJwQGe4GCBGqPsUN2dPCFaBbjR86efqvxfG51AHarzDJwfNr5qBtki59oL7oZVY1fNzcHWLRX",
  "key21": "2wfbPFYjMPey556phZfTj5eTjALhojbN6j8furcC21i6MrHYndoJD3M7bYBYDnPtKuywYefs1tEJoTfgGDQB4RZ1",
  "key22": "1Ybt9r7sdmQmWZybpMS14suEPzi9vD2Srjk7zGfoBX1jTQiwKznpAQdF28HDCW6USV2jDw6jjE97xdwkuahRyTi",
  "key23": "38CQtMSDVAhjgHsKLKCm9ag1KytiRQkUX1Qf3aue6Z621VWcV4u1E1anCbEDj9rvtiY9UVKzy9uzd791hKXJk1Lc",
  "key24": "2khp9A4QoSBGcLuxVNGGnrMZdk6vyq2oAJBJ6cwbdCSQqY2q9Qpv2KKJfDLGb8sWzjLb4c8X21Tkjo9VnnP3RCnT",
  "key25": "1r8EATS7Bsepy9tGTf4wWRwcA6a1o7gM3iK1RPwoNTDiT3hx666ucVVVD93ki9RU4EZRJEsiCfNUz6nTjmvPKV9",
  "key26": "674ixDp8JGFtEZ4DvCgvfU8RY3hgHJJcaCqLUXjKXCFnNrca9eBUVAR68HhENc1YMBEpAh5Nyu5Rw6BWBTB4VQtu",
  "key27": "5yY7MovCyTHbmMgvxKTLsUC4aCRB3rLRpr1FNhuU4wQh4aNFeN7nAAaMkN8XdoKiuvVHcpY3ybtu2DvzJXkeXE5U",
  "key28": "P9s8oQmd16JLfShSsPSrmMcaaAfsGTtSzqwWjbfRZVTgJiATdZSJSqZ59GPWMgzEQ16t1v13bnp6wwC6muytmXd",
  "key29": "ZXP5HQ3UiFphF13ZWj8nTCEpRM7mPmvCFV8Uod31UB8Zj2bbDRN29MQepzGY97yFsRMbXDHDbbxtXukowTWCwXQ",
  "key30": "2zfeEr1NRdTaVxmg7tmYdPnAaqknnzqyg817RDhSUh4GC9BmLmCQpeKAJwPqLbeWbr9rfn9Hmip3QRFC9qx8tFs8",
  "key31": "2DSJXqgSPHx5HDHbFzuX248WDKiYeF9pYNvgiofqaRwQb6AHNDjUj7XZoJqLvVostDNCqFjPQpESVAucQnCUjEJU",
  "key32": "adocsS8SVh35915QqdqNSYGW9vg6eZUmfxuT3SF4u9qrojnL4Tmgt6YVtCvR3AApwsLdzfFvmxjgb8H6twq2KdH",
  "key33": "5BRb41jWiwGr3p2x7pVy4qFT3BdjmLpFCPFaPfXx2grPkiySnNEnyotkWRPziPWJ7iPmN1SvxS9WQkvcU2EEak2F",
  "key34": "3sCepzryWeHexVx3SJSiQpbfv9Xh6Zk6tikX9Fs5xVWHcqMP6epCSZrBbncCBJ8GostmRbLbwwHjgSSQXzcexFjB",
  "key35": "5nVZSRWFqV14DacCVqYWZWdtAUjhkbFahvBQnKcUBXbERe7pa2JHVzCZ7X77KCxFvVFN86eYXcoiQKksQtDXQjVU",
  "key36": "2VxSCmUz6EXNcPGJT522iuKswKcmi7Q4S64keNyh9RPENs6SdHiXrfMbw81vAX5bFUrmzbh1AdVLZJanKeSyK7Gh",
  "key37": "21pAA2WSSY4h4d8py5AfT2W5k9CpKZNzFT4FdS3St834pcNsGvQCpmpP8MaYhDBg9WV2hEPZnK6dg4rfmischMzC"
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
