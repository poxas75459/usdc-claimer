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
    "qCvaPdZhBKDZLv2GKbECq3GXjxA97xGMXjUuKGcnYiJ2rChe5ZmYjM6dw1Ruupc1yd5vaTfa1rBGtiVRAtfovW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPMHFAJV3CcXGneUmJx7JC1rkdyPkQBJtNBjco39zhGdhUhbc2ymbUjdJTkR8K5rjamJAnmHkbXx7CQmGidrzHF",
  "key1": "5WFzR2B5vWe7gMbpxZtkZ9Go1xLyXYsK7AMBQ3gMC1X3ReLqvS899WbwmkUPqj5Tbp2JAUHbdYucN449fdWW5uWo",
  "key2": "2ZDospC2nVfpzMdRB4f16tLLhNyxhKb2NDoaME4JqThufqWcgB2xah2Z94p3oKJdQTmMDwo8NGGGWDXmrBwEFtnX",
  "key3": "HdkrzktDCyZF9fQighUNtiL2CdAJaDEg81SmSaAG5wTHZ3bocfsZNYMnSc8UeujVR4Lm9fnzTP4HAr7UywCt9Ac",
  "key4": "5x6uHuoZGS4mEPXQAKTdkfcy7qyn52rLhd6m76jUnczVEJnUY5cJtoMDqCKB4SgiDzqULJ4TdnXzf44HE7gH69nV",
  "key5": "5PSaJRNxbgGB8dg21rXVba8caLQdr9UCXGZDZn6JGv3oYmCBonN4tDnCYjQh43NymaQ84QDG2wCMEbCFUYBvB2kZ",
  "key6": "3h74R6ikM6BB7Xag3BKfUMjFxVbV1VaBoiNHzjfiSDbqPoX4GfusfRwLqu88LuPdu7r4cNfeJPodKbVDrjuSLwkZ",
  "key7": "VFxAMm9Sb5kbRYZDuyZZ7szcxAoDaPBuGXUxcJQ2JfRi9avny5nfXf2vAEvT2ZoDceuEmQDBTQacq1qt9nmiLPy",
  "key8": "vsGv8q1pjsdh7w3phb26D4aAgY9k7ayQDsuaXwjaABquk4T5S58UtcLhVsjtHUmTEigGaJeMs6MMM3S6hPPuhdD",
  "key9": "4HaJvDupwq8X9ibRmPK4W76p3ffNeqSeh1qoPhR2dWqQwvNd32o6Ay89U3VFbTwuJgZvVrikEmD1R8vwS3JFY8HU",
  "key10": "4yWkKtzxKUJc3QPm6gZ1afxHDJsWCiayz7RNXj3jwYtP7fJmaSwRXuzKazvkxaHGc8fh8qF8b4D9kpPLc5jGeuzd",
  "key11": "2WRD81VohAsB3dZoXZhCFbbNNwuFRBDvgVKRWTQjptsvmTS5fNbQoYDUboV8FqXyx4ScaZrhHriQUFzh6aUEB57t",
  "key12": "43GFDeNvRjfi7RzhJtai8pQbkreCAeg124yzQMdWyZB4T4T2ytXwjzRsSVFBTYFwzakfRMr5TM4ErshV13AQJbKL",
  "key13": "3VT7thkBMMMdRigXYwQQvnJHNrKg5rGy4uDJxW2ghTjbrPGN3LNsSPVnfPw8NgrfBTFyXZ68tg6q9imbYGYN9tgh",
  "key14": "3sryTcXTNqVrRfWevBf1pmHRDrVnC1KShLJey7tSqV4FcHX9hFS7mw6gbgPb1BYJ9mo3qgDvnthUDqFWRVju8eHX",
  "key15": "4iCePsp6K5MB1iVrB6AzU3QQKJQSC8pvmVmq7i4HGQWc9M7B72S8Uon7UA9FfnVeBYTH3sUCCuVAUFMnDJQMB15z",
  "key16": "3DYQuJ6R8sDs3WgjU6BCKJyqjGPnefLrgZBK6Zp1kqZ7V7tDMEgTUgkZ1kJVK5w5N3ffVs55PUKpD9NJXrRBTyDN",
  "key17": "4LNfXdTpyDhy3GdwA5ccoXimyvtgszPruhcj4sKNyiCAW4vQGuGnhYUorcRTjrbqdPU7pNcj28BDeW38P8VouYCu",
  "key18": "4uUctjadSCrVa7QF59Haarj7TZfT1Z8at2Q5ew4q9LzrcByEkYcGYBJVqjHqkgnmV8ZhUsE3eSrPmapN7XnPF7cE",
  "key19": "2XJE9JVRcoBqFQjgaW4ZfJyf7p83DXwEsWsRYo1Sa7Z3vV3JefZApyDAJBi5qo9fmVtUmq2DPMti1xrPGSxyTkuW",
  "key20": "3g8MARpXCZExNPENxeHzAqEqaqWmEBPR6bEqNsttxDFQTZY7UZPQDqeEmfBhwQAmw6h5vJZTqvYRdFUMPHgvMYYr",
  "key21": "5qCb2MLtPwzxqMDhEMg2uBCfn1GL7pkQyNzrorvjBPdKJSjTrLvmAUDZ2r4JJp7Z5sLPKDnW3txuGyeHRaHd3BiU",
  "key22": "cDJUi9C5nxeypbs9mNdR3HrVetEqnF7XGZi2NhoSzYpKiHkLSpkqswEnVkDy26LaZmiFSc6zLMVV1ydJAvLS7Ld",
  "key23": "4pkUJKCq2XZ7Aj1qavcSWexG6xpztxHaCezoBt44eYjfnNySva5hcDj5dDczqnF1aMUU8PxitykNgjKrr79kyZRi",
  "key24": "5UubcgDHy2Lwev5mjXXqaWtupeEbsfL6nBDjrawtdEmV1eCtHRhuCJk7EvmGP1oHVPEbcPtCRNrhENHQpmdKSv7K",
  "key25": "5dQsuVsfJnnqzhpLMcWWobzbKVSXbpaFgkjyxydtDy9keCSNeBJQw7YvByfZVZgy2mmbUSX9Qck6jpjs6en7qVox",
  "key26": "59yFarCRpa8NER8vohLC5W2Afhw3uLhYvG7D5uCtH6yFKxg7svdjydJzGnWECyf23qqaWrtCmtY8nwS415a3N54X",
  "key27": "49VBS6UyNBDG82Y5TBMsjMbHsM8FJLPSHs4JcQ38XGJZjn72bEDoc8rfZKfPDoJbk4hsGwL7cCdNJYeF1UTRB57p",
  "key28": "5SiybQwQLi5ArUq3m8XQpzMDPyANWPcBBGNJ17U62sSGVc3T7ks8gTUC2JUPaT9mQDaqiwJTiKjBwq4eZ3VU9vNA",
  "key29": "5q4zVnjFvc9XUMUK3DH98TyKwGUvwVfSSFtCt4R5rU7HvFCC9Q7w4vjzonzQnjDQ6zm43Wap9tmNSp735CTNYrBn",
  "key30": "GhX4YmdWRYDjnkraYeT3uoGJNtpZRHBpPPca48VTJCPeHcNkUMyctmmhvuQFSHTasFQRHdMA3fMbFZ4QzHbvKyW",
  "key31": "VXYr7Vq9mE4f9DSKPxTiqjLRtCD8PwdJEp4eeMHQMmWfaAsKX5qHWk76FrY88t9o6G3Mz9XJteASSwrQe3X87PS",
  "key32": "2XKPHRC5FYsiDFgRH9nZEQNj9jGEiU4fH29wCZoQgnAEGykNctcCkUpstqMNjnLEEJEh25ZMwvpJKvx4PFtfaA7",
  "key33": "3orZZYVe47EHsj8n1ZEXPW3NHtteoQ3ynqSVYC1ezqDt6qE6GDR8SMzZgbGfWQCZh3SbfismV4267fgUZUN6K1n9",
  "key34": "4PYE7zk534Kb6otpKf3DyCd7Fdag6Q8ado2tE3AeiG32oYwQvgrxq2imUB2Fw1q9L8YjWfdgVgdTnWdxYW7ieF61",
  "key35": "28YSMFW54JN5V4fXw7QL2ZDonVkmtrQsdeePS71FNxxSZbDRUxS7H1EdHvfA32JaTgHA7hbEinmSMWQXLKVsg6uz",
  "key36": "4AJtDneR4sGJYStPqEaVxGe9HeAj4C7Fc5e73H2BsTkqp71b8TxAEWoHyMoKAjkMjdXXcUmy2bGdij9WAPuyEzGn",
  "key37": "5oijpm3uHNoACGFHNskXB6KJGFuaHsa1ccbE27EB4vaepDkevd9bkaKkxWBbYJrBHhJ28mKREyRSn2oMHBFTEadM",
  "key38": "49dLEeA26oPXvnX5kzkS24Rj6RZxnTJxDTs65t9WgsNb4R1FU6iVKnHddJdwDMtz8NzXCAMZBAAEZCDyZUB8mdEn",
  "key39": "2TKYt7K4Ti2Y9txPkbSNhX31dYtjxCZDirHV83Z2vusGR5YwJm1mbbEstCvXUyh31vBYweASHTZBfgcLb8fo4dUf",
  "key40": "4bVoiYeJ3b1hKdwfQ4ehRBy28BC7bb4SSWCYQjPJKd6M88Xej3RjvybUmo6UVBFept7k4x8fg8jN1sjJ8oVaJJXy",
  "key41": "4jcnkD3LqjvWEzrwCChGX5HjxqdapKrb3ZHswsWoU3YMFUXPx6YoHbrGqULtqZjf6m9UzrstCZuvMow1o3t5ar2o",
  "key42": "UQtUH3ZqVwqTVVqLtGbnSQ8BAhHUnCvApMzW7ajRCmbEXfuCFFb75fR6dw7aEMWDQuPvhPCGKBawbZ3KSAivm7b",
  "key43": "4VHsrWjs52H5GLfQA3nJMuitVED3u6qCimr29kTcE5zcmgzcBYYaA1c4XF5i4jtzecmtg6maEV5nZB8H62hxHC33",
  "key44": "3FmpTTHSkCVHDfd8e2TzYs2bQqkfXiMNqmYJyLDqaKCyXX4rn3ZCPnSPrfWfWxzobQos1TEDEx9Hkc9D53Lt1veQ",
  "key45": "237reostmwaCAn5cR5MT9hMRy7SXqdizdUzo3NBuNXcii8B1zuJyfV6DPeduBtdA81a4XCH9dWDqjfuhTBE67SW3",
  "key46": "4wDnq5s41Z9zbUGhDnmjs4iD3zswG6pzYQ93XVwGmmQfhYhC61tjK869tTRdzZgMqwmVNzPenzzmgBuQTYwohmDj",
  "key47": "2fUH2SgU2NeELGvEsYC1ksxXJhKvoSNXEhv6JA6dQGdVcbkf7fBWvni2FnVs9wj1kRDySoP6tjfXhnwjdwWUGfTj",
  "key48": "2nG3GHfE2eTWj8SGnxfLBsEKojqqHggiBTwNqAVvyoQypbgB4F3KVxy5FwC3VuiJTM2qRkmCoujYKo9TPphA7mRq",
  "key49": "3hQer9GdJhGm39frYokQ8bTRXf7iaVRiZyjPm6wyzsztgFMcDYCMgSaYD3VHNA17o6c1jRwrqyQcvq9Edwnf4EPP"
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
