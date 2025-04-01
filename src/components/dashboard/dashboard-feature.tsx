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
    "5kMpjZYFnsm9fZJTwCizWhaHhoGnbqgDgwToCxsUQxWdDgF6MZQs9YXNrc1ND9CeTSwLhnHLtsWpp2Wnt3qcg33k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "euDd2236kstew2AdRPLKhHPbss2MidcB96MnbweEKindEoq15WuAQS5t6gqUq8snP7MxgjJoP38siaS2bx143MC",
  "key1": "34Kv2WNuae6YTucf9V4i6Eus8NbhA4MgR5c93xW1VfvTh6iLZysyCV24axLSVbDum5kJh5aYV7SQxYePeiXVgTZK",
  "key2": "3P83bSGhFPqyQr7aWYPLrpLrEEpSukQDT8UiyuzxYDMNZUqmKoBVxhvSLo1JVMFYcceykUY6Fz2XKCADQvaqvwRt",
  "key3": "4qYMqTYbU1jTfNJows2MkRn32888mWgYYLJo1bdyCLFSfmRrDJ2gSghhXB86MugZoqtHQsAQMe33rhHJAnvgmBC4",
  "key4": "4LBEznLdW69vod6twD8QrKAwJPQVdoog78akULDRimB2Dv8MxqgoKdWwrD5XnSdSqmuajZfkDy35KSMyNYqjKPSu",
  "key5": "5DVzT7YfZsda3XopkEd9zJHqfRkPy2wLY4phxwZR4yPmkaRnHQiSTrQQEsjAbUSMKAQ2YUQUm9Kse8ivbvPGHfH1",
  "key6": "5tT4DQxojUSrZBnYNTAYweKY1Nn17Gh7G2N5eHmxz9gVjyPgLdzNinkPrmMEnvBieESzrYWi1bjZH1xJeonVuMsQ",
  "key7": "2z1j4A1s3mangsWsG33na8U9rwBX4xa9irm1sFaWC7cJsvRN7PXLzQSxC7MSVRKCXvqLaFRqhvbBbkTMydU2x3Hu",
  "key8": "jwWAGSH7Hb2v8855tBBraHRrE2HrEjPEJEKxDsqb1qRg6wPHRnoXxLbbS2ZDxcFxmVhET65PgRc31UvKrtHY1hA",
  "key9": "5b1mb1ZzUpsVMJpy4n5rCzxNFWkQXHwYDwye8J3ajH5p2uTM4f9j6rXn4SEdehNpNScbaymPjUuRywSENb5Db6t4",
  "key10": "5rxFWBB2TydcSEahYVzRb6awyWVQ3PS5qW8Qiz2zy1ugfxqhoVcieSfGpF3NfuDWxgsVH8kYPj2FcWDMydmSXCgo",
  "key11": "4zgsJZVzbid3n5YT7t4Y5yXVU2vuHoVe8Bi3U1JArCX1bv2uutPGJz7sPQJ8AfyUiHH1X3Vm2yYVpFrsJ7foSjBd",
  "key12": "4y6g4j4ziw26majnBgmfswXDBHuysy9ySbAioUjmkSe962DpTdkfVtrRWRThNEgduY1LEbETbRKbD1bkFN8un5JY",
  "key13": "zkpYH5mHsnmF2WEYyP7D4UHcAnYdyoVFaUfyKdSDTuvrEnYNxYk4iCsQaGpNvVUPMx52D3ChHbJ4B3nizaZr5zZ",
  "key14": "VpePRtUoR7wXkzNHGpq7t3M4xgJUEWr44TwtgAKAz9Fit2W9UPBAPJGDRQtzorn5gEb1HDqCxZPfejqgH92Xg4M",
  "key15": "4Bpa6SnPUCr95FYU7ixxdfCUMdZHu6mNhpU6jS4rDmUfG4eBQhbkuY4KZkJazgaP2vRBYg58HYyT9M9qpd9Kq1nx",
  "key16": "5YspQTa9EdZ5JrMcM8xeYJ6rRYUQSojXKnCtoUMjnhHzKe1XRZdxYSh2qNUTFGi6kqNnynwEGTELgCN66d9azRaC",
  "key17": "4EmisXyPcsvbsv2k2ghak6DjG2keNKrzRevyLFapQBbb3rD5yYr1UjSWCGukEtqfguEFxJyYLcbZ39gGhnvhrWya",
  "key18": "4ZNKXGHrnimiU4SgFXz2kasC2h51wViMvtUriLXAs4mtKpRye35oKbvxRfaY471JJNRwnoogonFLwSuhYrJ8cUrE",
  "key19": "2bKBiW8ct5mT3P5LKAY6ee7jYYkFfVtBuEn97sgy4svi7cu7PP83vGq7d9is8LuSHnZFNDXYaMW6rPzfDNvguMpT",
  "key20": "TY97sUwzQ6XjF3drUen8BZeZwovWwdgoLwqgJVJy5sWzZa8VgzRap9kLyEQtRfLinWUBbftLj91CNcX3Ue6F7om",
  "key21": "3FpdEHrmjQhnoZWSt4igChFqkbumDZ95KiHE9NRtaS8UFiBDt7ivaYh55CevsMKyY2ZTxA3yTiDF22WqYPG4bmeW",
  "key22": "5yAfsU4v6Jk7s9rJ1GBa5ec7D2mreERvQRSHteJcHMJyurhtUiEMx2b7zK1WT16UjX5eHMVgUW55wudWSVrZ1EPE",
  "key23": "4Cz6LjkqjoQ4upr8Q3QzPbsoM4dVLVKbpGLpoC7mXok9yvZhFpNPRr4CYFjHzds9pnuD28M1sS78e15igX1KTHvv",
  "key24": "2kK15v5gwobHxFvksBKNHTspCbvKjC94Knf2hARx6uArJSeCjBJAjZgEdL3htU5de7spZgHvwpKDK2LAUevy1SAs",
  "key25": "41wNGHJyx9iDBoXM84RFzrTC5KNE4K4uLvQ8Z3NeAchLUND9UySDguF2Uj3z5ysGDjPZzYcEUYQvdq28C1D6peNi",
  "key26": "27RqjZLvvwwN36A4w7S1YJayTi9nmxzNkeciC5wLP1GFV6pW39c5B8uDRRaMYUu2npeuqX8yqV77tLFjvixGbZTc",
  "key27": "3hMX3wvLkNDgC7BnHdo4jkB4pddhmmbEBcUYZWGeY9KiWMgoKBGLdtsDvHRKHdCuxqeAyttXiDyJVc1WriLPcBJJ",
  "key28": "2oyayM3qw38iik25Nf48uhCRLnfv5rtcpZnXKXnewXkjozY4tsJsNNirbafKEngPEZ1Gj4NXXyq8uyBpdA3m1xD8",
  "key29": "hT4jzrRSAtt96bdLkdS64APjxoAUKaGRq9biCt2xpcj8DQ2i2puKtFY2RDmdGvcYMg1yLTgx9TnPARcYEY3gtSt",
  "key30": "36MAXgX4uV1wzQkbY2MtGUGvRkEzzrBuUb3suxbDUUQXzDCtDM5cQcf5S45MsPgCrzsNpLYZ2WUh92QJH9PWywx6",
  "key31": "2D31DPEPG16yKvBXwMDpEvG9usyUMToj3nQ3YwygHFz2693K6ST2HXqfFars9fbHsrARknjoe5jaea7WTtcN72Qg",
  "key32": "5ZDGjfBUqwqid4RfH57CsjJTRR63f6u9wys7inqu8ZHno2ccUDxwRTjfL5hAgQnADTQry7L2CD6aMy6s9suECikv"
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
