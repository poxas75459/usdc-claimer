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
    "3d6ohb2mJyBqEgAaQShdtQqMMft32xTvXAGnM4iwKGYreXJWeM8WYiMQ7hYZFhYN3crYmcyYYhtCW8Nm7V3WrTYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W778gedqjxNykqj2uMwrb7Jd5qehBezBptHFa6NXWHTNceYEPwo2Mvmh6rXHH763CHHuKn9bKqA7z2fNZrZnp9N",
  "key1": "Qnc5hHxCy4CuwA21j2DL2FoD5Bp6XN4e6DkwcH5NkbVyLLn7jJqwVaPq5ykndT5VJx1iSepjmFGsngrfTTXuAX8",
  "key2": "wsP5AzHpmJP4Vg1ozehMVULU49RpPgUu1M7Sawd8oJ3XTyvLtjAmmEZn6eA6y275hXfnpMFD5d8XXGVSHBh9Ers",
  "key3": "2sqVHgJYYX9b6UMD6K7swUURXmfTL6m5WjBbRhQ8qi1uu15WhJBqL4fqF923Rzr8xDWvExAeGSMuMFFjStKxCma6",
  "key4": "pAdzgSAPmUjTWjMQLhJc1K5K7m6zUc2MarAiapaDP8kyFWTSgB2yZ4PCEcadCnWMMesAX4bve88coQtUpCTju7F",
  "key5": "26btsnPA7M5mrRwNJgeyCkD8oauWAiweL4xPD7nAT6GV2FfLgCvwJD6x7VhAMQnAjomRSxhBxuaKnZ56RnuZkJqb",
  "key6": "4jfuG8QjWsCnb7KHGFsJ3M13Vrst5cF77ZieuzQytyyrkhFdTYaYMxehQXJFjRdjRCstKku75MejRgZjv59ruZtT",
  "key7": "5bS8KACeryeybYHjnzB8vXkKdK1MoxYFBNPdhoWXcunk4WHcPbZNKEL5cFXy88BQLVqzDknJE5VS3G5TWu4YzKi2",
  "key8": "wtEkwoDHQN5pyVHw7ASoxrrZ7GBor2HrvSn3rYfqWerdv1qoAEUoPHkCghafdqWo4gjhPW9L1ocVehENzMZirGT",
  "key9": "36sVwc7MJNTJhapnqmXAnqkiXVNLprCvyLopTSRz4DC1gSj7iDWukcCTuSjJgawmNPaMyQignu2sAcwRHbnfHXKe",
  "key10": "BaPvmN2V1bMD1QXpqYkG6XSHzXRhhyxKtPDKV5d2N7F64hdSsjMoPjhAncSEmHXWEZ3sLEqS21mrDNDnKn54vrE",
  "key11": "5KiHmD2YDbLk77ci1LiustrtYFCncuyVJ5K6kV5NW7BdtDjm4cbvdNiPEhzKUJM68BD9aWCbKGF7phDEJLRPGJgy",
  "key12": "Tza63Q8kJSuisu9GK2EqSp4HLALQVRyjuUGW5eiuTdfWXfSZ1d4bQuypc9zyViG9XxbRHCv1AxyJDiN1KJdRuiP",
  "key13": "3NUYnCWKc2vXA5ZnyPsrs6ag9S2UGMS3PKvDYZAMujECnNxL2cf7wdt51cKi2NRRiJdBhi2Kh732spC9RpfsPPvm",
  "key14": "3JceaJbA15DKtcWH9ayDsr59fE7cCSMGEfjgKwyV71x9cJvEZs7EEwNuSEXX2i1vqWohk69ceF6t95oYsL9wKtPa",
  "key15": "3ge9VUkNxR1cynXoPvRkKELQi2xAWHJYhHHk1kWuWfqfwQ6dJ5S7DKnY7uGiceLHxeAMCPdMpFoKoMAjFJrRWcWE",
  "key16": "5fmb8mARirgzbuZnaRKSUXXGqdM34mWfT3y5rsmTDf7FjpSKLEkMxHE5gEtv1D78VhicpcprVD9YpKqjT2tpNS7u",
  "key17": "5EV4vsmbnP2NeZQpC3tWivvj8Xg2YfKwU582CKfnsGrofMXPREcqAyZ1tm7CrG3JHWbQdQVeVsgdsyXZ1oG8DifE",
  "key18": "3WwJEDytB2WV5KSSiqL8MDiX6whWbNhRbEk94HyGzfCVGJJ87WpmBGC8G4oUJLHKnRuBqivTHnSAnovrntFbEKwn",
  "key19": "txLf6fo1TYk8GyetENzhtPZg5QbvKXHjbYrWt3DYqjDLhr9chFEjyGELr6N2oXwccTfDpAH1L6dfDMBYJxVFoig",
  "key20": "5XrjNFNcwe8te9sqyZJvaCc4zio6UY36dnCKAknX35wKXKtgu1upHPfrBfFPCy586YgwcHsuH5qaHw6FBKKHQrwd",
  "key21": "3z8eXysGVJ9NiJ1eYwuiizh3EvjaBhSs8UUG3yorbxvAdyJbNEooKnn7SCyTLhdyHUKqDcdHTQyLzMVgUXJPR1Wa",
  "key22": "5KUkwRWYXAsebaw9qGRGMvLFpKJwRqKKXjKtJCy1fxnbHjsU7TkfPxoAGckkY29gmir7NT6YvyVdv58fhQUF6bKn",
  "key23": "2En8Uem9eXYVrMA6yu3bENJj6YjLmPPtz8jL2k6Sh3HLZTCT2mtqrJy48WNozUFawhLt7t4xf4vqGCS5boueCWVX",
  "key24": "mesbEeAtZHPHutRw7yC9hGgvDTvoYtiAoNWxvNHaKarZQdgDjLiztNUry5Cgy4qzhG9QNvoj6dfDMBAQWkeGEDv",
  "key25": "3vFF1gooRLkaWe1hcihSXB6fyt9SVpp9zdMmBgCavt1zGCCdfxhKBE55dmahixZubT7dZzYcWmXAQT2TEc5cYwhS",
  "key26": "iiiZhqogLrat6LknbbSN5ZX6YaKvD4XtPTLEwfZesK5z6LyvoGZy3RvLW3Qez54BEGVSbvE9Wyr8CeABpBYW1Gy",
  "key27": "sDZ6TFdi9wahzrVNmDbaGj6iFhAr4oYN45b2cVEhCS5SaoqH4hxkaze2NT4Xv92pvPCgki9uYbdomaCKycG6VFY",
  "key28": "3fHkZqqbjCANn8rHt8mpMbHGJ4BruJ4aVgGcBCTXzyotFY7Wx7UnubcVPVA4Nz88Ad2ejfbsgtGJy2ajs8FnCrKj",
  "key29": "4NJfwpRj2j1UpmPJrZdixAXnX6KG9aCNdZtv9J1DHheUwcPNuWcPsByDbiwMX7p2QXgUhce77ZCcuTrPZKtXqcSb",
  "key30": "298onmVFC4ZyBp3RFPPMJWyHP8tf2QhdsZd7snYj5a1baiwUybAPN3eU1ESwQUd164NQ1EAX3GzJ9zJRqPQAap9R",
  "key31": "4itcRz87mJPcS66svGTpjfhG1FegJx4qWTt4KKjV5u6xM3axAa3pGWEdQCtNxx94s2Qu8fC8U9eXsoB7DxWoH869",
  "key32": "4eaCsrtvdgvPgECqTYJpjXz6xd6JUUP6A6QR6gyc6frfwCSph1NjVzLXkiJe7HX8hPEGqoYMwMcmTiGZB7pf6MW5",
  "key33": "5XCM5M2euzXacTaKS2sk8sDqdGeH47aUBPTT4YCooW75EhzzJiAWGGtoihTomZMq62FYxFgKEqohnvdQZhue8iQw",
  "key34": "3iRer3d18ET6gtNjoSLPkv9cbQPybRhSCEpEVtgjXFF16T38uxubicKB937xJTPR7jY5VYwg7K7WczVGTZNCJDgK",
  "key35": "2SHXYJ4gsHSSid3obHLKmG89EFLpqeMArZgBTrRq5ABpqsqSZbmgQ9CsqvM7ravFV4VdpCZY5y1Gay6t993iX3fG",
  "key36": "3py2Nf6GhXru6XooWQPQFrfCtVGAQAsnGNNuNiMMeX8KxEdR2oobU2rwfBYXQHytSyhCcWsHcGkbbTDfq56DuS2",
  "key37": "3wtD6e6kcTvPX4oXXdFqUFTEsZFKCNrNudvzCC812Yp4VmqJWA5xBTLaJbZUstuLkumXkoVUoHqAKfypw5RBAZ63",
  "key38": "4tNWCwbXdtrLF1e2STAuy6Lm1qy8gu6yc8oFTyTnpYvHqJrKeymMkMVFw5woRLqmZ59kVyFpS57YaLLUB7Fo1WSY",
  "key39": "3v3SCQFLFBUucGeU7Cm5FtLBRGTcug97C2VUbVZ2R6xjaBDoBiKsH7AYtKr6YQEa1JPvi4vyxHXPsg1thJAKR28a",
  "key40": "23BWEgGiwjmEryEB8pjWtEiY5XiAmJCBMpbhrrEZ7RrwpCZeMwDyxASpTADG1j7Tar17W9eHdz39bPC5Pri5T8q9",
  "key41": "bDjgVWJLqgjQk1LWFbhHzXYoLxAM7XTn6P89XBdWDQ8dceizUwPC6H8biFbYMqdUHtxUT46xw2E8WhzzeyfzWFH",
  "key42": "4aoChi8tpsxYqUx4HwXK2SEKK8nHLfa2FibpuULurinByYbDUqEWF2JHPoKAxQ6MyCWEVNzHYvX6EZisstvGDwc4",
  "key43": "3YqMGHdgFpRCeMtJJGEBxHiEwhvrBBkqW9YmgvEEdeWwnuHzgmHXivLREA8QoxqNZ1p3PrESgF3stbHLRGKkn24H"
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
