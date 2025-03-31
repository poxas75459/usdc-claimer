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
    "cjUcYoNMNykMTQNwRRwHZXwhabdKStaWkns7K87roG451Z41foNJPfQU7uAc4rQ682suWUW4bcSZgfgZs6KdVJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wtg4Ch8ow2hfPkcGBtL1iMKCdzsYhMCSBUuqJJDBxoosQdFnTusYrcttGLWwgR5nkRyMnMjBtiY4cZ8kEMe4Xqt",
  "key1": "Be9cNSBnsmDgbQ2ANVjo5zzidxFo49CaV4YVCJZrhbnYHyPGMGSCqkHFKwMnKhgCFMA8JwJcb2qCgpTRdDGbt5A",
  "key2": "2FviaCGyHqUXeL82NC9e1W2MnProp3J1Urf4nCRpDpyxL9n9HQxhGHX6wMyVRX9ccBdcgR4nZffziGrxgSV9dorX",
  "key3": "34DhKgYbUND3KAx5goy3ZyzY6c6N3AEv5rzFUcJn86ym5WB6UMaXyYKQEkP2tdSkXErbnVvpHwjgsqAFZs7BUCxg",
  "key4": "5seoyu611FMZhXwZRxb8REXsQRJvt4XGFwVQrZrt45vR5VitkGfMq96k6UDv5736FUKFa19mpG79n2H3b2M6ySPo",
  "key5": "5q9wZiRKrYxaCGSRY9Xkmqd4vrjZWvtLwMDxeRypWKiAdyNrnAkWDFWihAsAVu2nHkeKQgKdA3pDFF9QynxPbFmD",
  "key6": "mS4A1vcFSo9iVhZswFuAMM8JQr9G7hLAQLvDJQv1ujpKZhP3ZbV51ZReCo2KnocRCADhhREGXNXvNSkfgF3xfno",
  "key7": "mMKbCwPkf4sXSBPaqm5HdZuSC1Mwqo6abZUcnBpXrAUiZdhFJgSTcb5SbPK6wZW7gZox3fMv9nnV1CbsRhRVRQ6",
  "key8": "5vAshfszfJTYxM8eaXj4zZLBTLWFK74vuRfSx9Wj16J1RJD6eqYHefXHccGa4QAkkKdvza91JcwfBAGCo62pdg9c",
  "key9": "ThrpkK1dCLwMinhchFc94y7NfDArmpJyJxjNZZV7FhS4JrSsRQVGV5UKZ3EDxWszSffJKxAhMdjyejVuDAH3H6b",
  "key10": "3Fi9jPxKsRABKejFtNJ2UM5iiemPPWAuUsbff4ZXc3ArLh5HPmGpUz75F3rSPgsh4WBKUKzTuVmR86bvAUhQjYU3",
  "key11": "258GWzctW18ByRosgczfTBdc2jYhFsC4ww2b8D1R4ot84uGpTW4qRrvF3uY8s8aGT6UQk23Mq1Ey26huc7vb5H9j",
  "key12": "U9MTS28gFdiDTNNe1XqGorcVWBMjqj2iNawuhY1DNdjnaEzb8TZLSvLKgNEipxiZpp7HoEXqBXGbo2DGBTPtgVX",
  "key13": "3daF7piMdzeNvkciDvR7WKLjhVS3zQF25KoKxaHDH17vcUx6PUqMv3mBRkFZBybFEGN2a3qq4ChpBfLK3qdoNJga",
  "key14": "4SJoWtZHssbmXjMSQGc7ZEfPuWAWbZGYkrB5z6boBDN9MYLWMzAQSs4G9jFRieV2UjBLnprRCwq9jyLm81iReJgd",
  "key15": "585cQSXRTi7A2kLFUnQA2HPZ4uwBhCbrHj44Gmh88KEcfd5H3mwNwZpemiSsw5FDYqxeBCXJbS5kHSQY9FmTKPHN",
  "key16": "3VVYUXmHdoYwUvGqfN1AePBtbha9mYcU37ovjSccriPWsf5znEagAwBPG4qnQABGJcYh8fEVqyx4J3qxNemMy88h",
  "key17": "5iVM1Y16LWyPM9oGDp9meg5tWZtDAeq8WzB9EikUoS6YTJqyTK7MTgekQxjPhg3dHLpFukbsFeWWM1sjxjFtDRdD",
  "key18": "3f6Qoe1GwQ4aJvkx1K9K4cGXktFU1jhnwwDLGwCkzrHwy9DcBijkEP59bVFbG5BspfK7vkBKCAPfHMUXdMdHENHJ",
  "key19": "4yDSRcXYkH3mWvmrFJgPs9WYbEzD8cxjytoP1JNJDH3SkuPnz58t7kQLkShDnr2GRFMxYuc7redfkLW6ydffy5i4",
  "key20": "3V7nodPMEyusNApUCaZ6j24k2MPaiC78cjm5D6zKQ15hbtw7xp6obLwoKqiaXJCoDtD2SLJP7uAPYGCaRLM1idtg",
  "key21": "63PXgVDnoVDAYP6j9r2ug2Q3UPnmnajSs2yEJWDucEDwkwLvbv5hGRW8H7kSt1HcEPD6c6L1KgnD3uCBZ9qsPfRf",
  "key22": "5AeZUkkhwochvonhGBACxNfAjf5tzUY8swAcPwMwfXcu1ZoVSqF5cJhi4uZNMTf1mgLmtkwMy6E5uDkLn8916QjU",
  "key23": "5xrR4xXc7x6hgNo1nvJqYfyam9MXdUtpCVKkE7hVSHg6cm1bNJLVpQ2HgLsSVukSJNGzDdhHijLBtkLGi6YuEdUD",
  "key24": "2RN7cszgBzj8wahmaQu63rfCSAp578mWzkE8xZ69mdLfUVarDmo9TfEq8Ph6VZiGwGPRRWCgKQU3wgLJwQkmMxvM",
  "key25": "2GkHYm52J19UMUmEMvs6twHNJQiw5g1zNxc2846x2UyXiqX44tWWHf3qNEPxudRiHEJyr4B93Wk9oEJ1qqBjkETv",
  "key26": "x9iKcpubNRw4EUbUWdeuSXDXJPTzU51Reba9maSJ6ziCGUrsfG77q9WXnp4NK7Mr2XJdV21xqXEAu1QV49EQiHc",
  "key27": "2ckDqFr6nYad9HW7Xxd7oNFcwseLj88YV25Che2eAABpCcrEPSMRrdaLk7p8C5LPeV4HNGMyrHc7LVBTP2UCzwqy",
  "key28": "3PfvEPx58mSRwDLYUJPzK7d3hnjDLktqAPoYmzEdyo6WjyKq9ybTwzJtwHovjSo7GU6wewVogbn257k4HpF8tCyq",
  "key29": "3HRkNDyAxgsKNdN8RVSqYcfR1x13j8HJPHYqA6QHkyCvRZFrYjmog5oKsMXnHiKDQnPDWfTxBUg5qW6exAh94ZFu",
  "key30": "4YRamaHpkyf14wDPZahtirq5PkE2z4DKSvM8Qzg4LfmcUN879rUtyiewMABQSagXo6ChBFTSBwzR3kBMZeRqT5tz",
  "key31": "55dsrjF3YXk77eNtTdMUrBtzPuE92mbW8pgxVcAq5hyHJHbnA5BLURsC1UWNxzTiF9NNtojJ59314NTpbNbyZpaV",
  "key32": "2kMnthnT82krY6Uv4y3cAcSynLjnPjpR5vGT4TksU3zqYqsAD8SbGEHNvZdTo5CuTPWzrEw3YeKURUzCDjLNojen",
  "key33": "3AxLfx6bdrBwU5NXpXdQ1iN9HCdizDUWGRTJQJ75VZrnfXxuUaATCbcDn9MgJJD7WvaAzsCwkahYPsPaX2BxhW4V",
  "key34": "EdxJvmCBaaEZkoixetQaBvbgxr32JsSo4vaHwM7buKGXDDrcHt3ES24b6SXWagVLWA6rrtATwcjHctdPH2mC84C",
  "key35": "4aCUmNxYAgFQah4HHHzp7mgBcqY8RqxyFLjdUcwXnekoEhjAcuStdnhhWhpShKhDZw4tmXpSGJXz3WVEp7SnwpgN",
  "key36": "2xa4xQhq7p2Ck9Hi3Yi5nj5iy8sKzr6UXHUq3ZtCn3goKdhtyMxRCZonvLKssmPMzW5c7UHW3oFNnvyqeFfaqRrT",
  "key37": "5JbHVcMwMXKGSPQrkJgsPcwt9oParERiSUNLnjNe9R5oZpctTjXg9jPMD4mndPwcQHyEz8NmMxD4KRhNouAhxSzT",
  "key38": "2rU3jmny2QFcMaaD2srMYuqQYSkVT7jC7hZEFDLMtZ5zzACmz5cjQEiuHuZPJ4H3CsSTNgDiRuAb7A21H7P5UUM7",
  "key39": "31CcFhYxVN5sjyBZubj9p8kK6diuPV7oa4HyT6xYJcz2uiCmPM1eTVJ1rTatPjtj8jtPwTcDwWd8a5f3kF92EXnR",
  "key40": "2GJc2YGoqTTDLNk3cdayDLBJP4752JNtLrzMXHFVHiXKqugDkFaCVGxXrTCAYJuFtWbevjvEfv5yB7gYdYGbgaE5"
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
