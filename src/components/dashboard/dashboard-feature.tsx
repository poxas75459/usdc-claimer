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
    "5tDWLjyU3VF5iCTZ3qMD5SpQKpeWdrFEDtysu2FEKR7YjJbfBTvvuYGRkcD984EAkVtryoPVDp9CXvEFT9aGViSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UV3B9KDtB8zxDeRnwCGEjKMJCq1FNX1inYETCBxtpxAZgvYuEXKY7ThrbDBQ2X3PeVg2ygnkoTXaZE3eVqHsnn9",
  "key1": "hnCK3KFRQ923j4jXc6fwapRQergEeakbL5bViQZXjxBpyvuVxtGNNUHCwShG2PJfJpjygtVShM8DYSdEoMzLFK6",
  "key2": "5DiBeYApzWxEWoGBPzjXLMiA7ReYfrsgsYfdwyzpmVjRAHoHbsvRf9b7uzUx6MoWdJRR7pQJe2C8EkL8pPsEtAnV",
  "key3": "NkFvuQ4ThGJQeT24oJCrkcGKfKYGG9aA4MU9U6xNoebfZuGfE45bgvDqufCLcfBDus8AnEikP2bLzHKg5QMvnga",
  "key4": "2gsVc4FS18D4U5e3EaoFVAjf8ts95w23DiS2zNBbvHNFVNqKHujhYQU48vhKZRe8sMXB5H7CfanGcWwDAumETodS",
  "key5": "4tEKsHHPHyJj9udvEqSi8FvMrXvv8jw9GBpX8rYHEz258VFXTmZ32ZM8ZwkG9VMitQvQQfB8N28YiwRzjqftNwaH",
  "key6": "2m6Pca6oZitiojmdNDEYGkbcsjZejCHmkLsYVq3SmHPqP14LuvyhnGjhBLkX9QUc6HcXipTZf9LLYnyUvHi8KNqt",
  "key7": "TH9kHXBebqAPnSfTveKLy1cHwyRisQs7XKLzPJX9az97AmCo7BaWv5nsfe3TktwszJynT7Yx89CWVg1TWQpRH1S",
  "key8": "3DSbedeQMFWUiCYceq7gz69hpgwutsKgYxjjPsC9qkgYMkL8SJ5Tdmh4zHxpvAdNUvC3WzVDrpMHHb78LxYVYUN2",
  "key9": "4rgNkKrr4zTMGHTAnncdRnSrDUFYVdDFuRyEyDNEjrUyKH31yGAsnN3EaYgKPSuNwvAdBhZ2BEtBt1nwStDzU5Uz",
  "key10": "swt4gkrXmLJP1pASaxJ6G9SUa4YvSN2qVNzCSMgvk4Wm8GMEcS2eBUxHBnNSFgKMqb3ggkf6m6P9DqtLtGgWwQN",
  "key11": "5yjVZuuDEJxnBYL6eLdKHhEbDpNYbyV2bifsJQfHhqHtbDbnpspPJkrXP5AwkdRxXiVdyeWLEzRkmUmgEnYjzFK4",
  "key12": "5idLVq49GuQRCNd8cECcVTy6c1d4ewNLheZeNAfXX6STALUQBMARsQ81opRsbpgUK9YUKZPFm6cvnGMw8vmLa7Q7",
  "key13": "39cXRsmF9BvyAe3N6JEZDt3hzKV9hnuoGf9TdQ4nAcfciW6tiCTVqi6njuzUoKsG6Z2b14p5Bx1Svi8a1ZN8oUXB",
  "key14": "25t5oqWtzxNiRrGQ6Vwi9ymFfhx17RfLZ2JUiqkFrVHR3XpDKkvK9VLij4aykYgnkXCKerHGZVbb7XuwSJEJCEJH",
  "key15": "5cXFrJ2tVby3gChjFmi33cmRt9Q1mGxndYZRTdHgGK3D37PezrHJYXSuf6HnuqUdJbwyHFkg9Kr3M3tDPfB3fMfq",
  "key16": "4HwEA8aeptk91ZiScZCuoCFzppuFfLfsvXYoTA1YzMWMzwvPVGtQeAP6z2AYQPS61aPrEztHe7w5QGSrkrKo6Qon",
  "key17": "3i2tArjDnbGYGb1PNRr9YfEd3Sz8PHJMo5rwf1k85pmRhBTEHM6d6cjTKzaqkkUEGmNdnknNHLPh1Jva3A2zJ9Sb",
  "key18": "2Hvhn8SD9E2WrYpW98LNCQunPmBDDMbP5bqUD8sJvKrtYtmueXS1ZE92nYWD1vBddBC825WEcVJcHyeGgX5r7hnL",
  "key19": "4eBehoGPmeUA6pQDjUw61qQuCN4ecEEW3pPaHSTZ3RdbMo9ckzq5cjD2yRr5c3VEGyqWyPPh2Gk3h1vXarPnMNba",
  "key20": "N3TJC5YnMvUjfwvLpcy53ZVBvYQR1P4ktSsj2oNuW8k27y3mbiT7EQCv5HR4eHYPAfj28F76Ht6qQddLn5tS7ta",
  "key21": "5JCRvtfhHT1HMDitSePXkA2TGHBhEmYjTcdqU8WBM4BbRhrQqWmQQamKwzaptSNm5zsJvRJAssFtcFVWJSaRzt85",
  "key22": "4NEoCWPb6mR8kPKcSTNEQT6ADAULDSSXPHasbyoRkXDKgeg5VdCGQG4gnpfR4yeJWFRCU8GPYkfQEajUHKW485p",
  "key23": "2mxRT8doGEenifuUe8oVCaU57btk7Rvw4TKcUpKav1LwR5cNr72piRMP65WdMo7GwsN2Hk6Y8dZdxZmSTB7FVqfD",
  "key24": "2oD5p7w64Y9eyX68erfDxwfpxMC5FVqAkBJLzdj8fW8kyxF3Rhq76BrgUe8efLJD77ywH54vckYtCnsf1PdENJ4U",
  "key25": "bnGcAtiJwwJo5KxU4CcNLMpYqzvrTfpPfPzvXgWFMS535gTQszURiPpQXkqtLtYB8ew2Zp1ogJMsurH5c8CGbrh",
  "key26": "Fggc5dYmAXm6Lc1ZVskdQo1vzbQPEm5HYiE5v4mozFamtpQBaTjm5rDzUgrFxXKynzEMvWuaY7dKva4Thvsgsy2",
  "key27": "5x24TeC4w82F2QrF5ybhEDhGjUxnKNJGpdX34UN22TVA7t98dfh7XySE4fm7W6KTXXBJ7enUE5ats1zzrr6UNyk3",
  "key28": "3QYnqPZZiTWeLNrKLKfyPvLM46TnGYQxxuTGM4WtkkuEnUm1G5PzQRWoEishwj6ZQcPptRnqvqv7pbYVPp1Lj1B4",
  "key29": "KeJaR8JichbakH2v3vSNLHsNJmjfTS9QtddfnVAx9BNx4XmUiw6fzFhN7ku9hCddKBHPNdqBuBPN3YLUjd32gy7",
  "key30": "4W5sJx6gufjTH9LtGDEMF4FuAJwHcg6DFxzXZWrua7JPcc9dUFPKTnn8tv8Phm6jppuxuQr6iMZnaYuFot4AHBFv",
  "key31": "hLJxZJtye6QA2kzpYYGpjL7M9St8xiRsab5FocNa7g6upP43QSKQes6rBcnVhiLyS5NEjsHeZcUKnu1ssmNPwXk",
  "key32": "4Q9RSLoCVnzywCpzb32Szt5ZihKsXzCvDXpccXkvjw26WcVV58v6GrQTzPsCGWLuJjQXVrV8fk9Y4Eapr8L4dEFD",
  "key33": "4GogmAVdcqrUTY3dDTkAntQwW7Gu4N2bmeFecLECdHwkazNt55RNFSGENtTNW9gdC1pW8AvHGmxVVkMi8ApXpTJV",
  "key34": "2FDfEQHxhdf19NJwMqLq8CtwSZzX7ybX5ukTWQS4a9f2nEeA3oAGS8jcBzSzxv76ZV9jz72B32vnEHzMWwBhKFkh",
  "key35": "21Dt8j8Ygv8DfewaKPK6TzEtVNu6Vsth6m8YU7Jv1HMsAFFiXDNkaxaazHAfcbiensg4RhJycqL6fGqVrP5R3K6e",
  "key36": "5y2NfWqPGDySaFAEdZm1UFhLCiXZ8UCtoZ733YYhtK2d2cNFZ1e6vQhHEXs29A2qr9Vf1qTHp1mY1fYmNiGVkE58",
  "key37": "5aE1mZrX62VZ7Jx9Rcs7hhWzoMzemwXg2mEZyafZySzD2KthheGyAaCKU4RBAAJ9RRNXoHUC7PE4xG6zCgrb8Jct",
  "key38": "FYceKHHPz2YtHBGZcpR3Ynb721pEpjnQDdNM9sD4XsecBrp5EEHi2n2WZ3w8jeQkpfEJQgCRokPqV4mp6RXMsAM",
  "key39": "iV9a7f1wR5xSWhzUc9wnjScuhJhKe2Js4DZephQ7MBcgeNS1Wnk5U16JbzHsBgvRMdmkgitjce8yXXGjBMTkVLA",
  "key40": "GoTeHbZtS4AP1TKfbn21o9am78ZogijuYRrtFjLNBph2icZ6VVfeVw4PdciD2vN7LY7JRsvokj75eEPT2umjiKc",
  "key41": "62B3WVmrzw4GRMfqbUMgyd3iztje5wpQNFyAZa2hYBwLAwyraK3Q6txK5AmRWuKdcSXmTbTUaEzSGri57pSBkS7Q"
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
