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
    "55ZiyvvRkEEWdcH8FbRfXByYV6JEaW5mAAGSprb8pcy7JsvjqHdRs6MULjSDzCGyvRetvsQBPNJrXEnubPW7iK7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LsFyqDN2YJ4YAz2E5ZDwvK89mCQuyRyGVeeYhkrmV8wCXwUTri9DguBKtmS1gaYet6gX8F9FC8NDXZQP8xqoxXf",
  "key1": "5SDAVhzw5oaZ9Q5iVjDcwD4eT8LQdqNMpu9FS29Db6TsYUYu8XTPf7gvgMHtZDvzT42C6zdBRhux3xYWbcMY1fD5",
  "key2": "bFMi6EPdYfpRYeN99yp45G3ZZYVuModesUxZMvNgUDFBFUL42mG3GPbzAtAkj2J854KGEKi9Dqjjf22qZHLHgao",
  "key3": "3Hswmv2fFkGi3bDjLYBkqgLkPuqAQGY5uhU9eRbD8FEZds9EbiJJX9fUBuXHyTybKw1C9eq3WvCXtpPauKfxu8x5",
  "key4": "2AMD7WZFtQh6Fv6NDThPtvMNw4x5uPvT5oGiP5ZDc3XiTWNCq3u8gDReUuRMjwhGBge23ijmyvZ8i5mhfjMYfxA8",
  "key5": "4HCZ4rv2FP5EVVhpHqjH7P5SJiiQ8PBrwfm4xcNp5YwHYEMuBPtStFeTSrF8rQ22nFWJHUqiVjf1mUNkRDzvMHj9",
  "key6": "2MatxpQqaWsUHmQHciEhSU9aq86YrxWtmTpG6SzZjjkKGqRu6acVjwy7wU6Us47zdb9ZCsmJEEkEEKzw29eauXEE",
  "key7": "2PkYzDYCywNrCDQeyb9KvE9SRfivHaJFD1Fi2cQxuwJh3K4fMu2o9YHndyuwwfSkum8ucVQYZmtjRPWigsYxz8dq",
  "key8": "2PvEAoYD1Q47HSMs9Abnh97sdLjDB1od8gShjU9oz2WN2LFAdt2h8X8LoS3HjohHFqstBr6HVMpVY7figW81CmXL",
  "key9": "vTdppedvwyEdcHpqr4GgqV8MLts6fUms7twdoLqMbSW64V9389fyy8hdCzNY4mMh5WdbZNQ7YXj5v1pCMAHu32H",
  "key10": "31ZZGYn2U2RUmrmhhP7iBQZwZr4QHuv4ymMBhw26K6FeuzkUa5JedfMaR1XgLgNCRwj1Sxwr8Feb2uMXzBztqBDv",
  "key11": "4QG7dx7fYeLrMzC3LQJJCVMKXB1WWvLP2B6tcTwR8UeSnvjtrZHm9dqHpQBNwQdmzJY2X5EkMqTz6tYvVBKbwqPH",
  "key12": "RFt8rCbaBsxFotTeL8ju3pf1UujNzGS29d2DcdVKU5npA2ZmCfvLkpnJeYiWUof9cSBSaK5sciPXf6HMHRJaEGV",
  "key13": "3HT997EmaXFkX6PZw5524bXDpQ6ki2xjDnEbf8NxXd9b7H3mGQ4AMHy3hjQxowsr9UbDL8U2i6K9f7dqLoHkmWag",
  "key14": "4mBMLezcyrirMrUySE33aRHK8RutMHF1gpveW6RJb7KEQQ2GPDCndR54i99Dh4qF8iEMSW7cXcN51AJtPU41rJRT",
  "key15": "3S1jw1Ln7uCqCMcUq4Q8o7Mh9fzAj1go29Ga3wA9qugE5jPipkbecruoZjYCu6J1SFpBY7tr5b1QAavADgQMhy22",
  "key16": "4pTTe8Uc5DB3v4Pi7VhDyYGeMe6pJNopuKWa5uL2ZFRpuULi6Zd5MRR6XAE4rGkDfD6BNkUKU8SCZDQYfj3tUtGY",
  "key17": "g5u6ArTSbsbunqwQiKdPAhfKYRFqSA2G7kZKacT17nFUJX2ne9Yvij1Yiv23PngpUGXhEaRVwoCZLDYvTjEvb6H",
  "key18": "5vUkEDdTiWkec11HFTJzQjE8HfciigsqT9c11opjuf86xEhgB6ucQta5GA4mAauUa5z11wxzgakHQTWV25mQuiv6",
  "key19": "5QjP1Spu3mER4yJCKodPuiHPdKk34gc8MvgfkXV4g4nZ4KcqUgrjn7hx31EvigewfRXqELez1RiwEEFYw3XND3DY",
  "key20": "4UnmE77vn3pMrWFdnyUFqotCm8AVcJTfdezdxmM8sBRpg4XSe3NZUR66p1uqFgUbVVat6KUyraC22ibUfMEizoR8",
  "key21": "4ZpN2a1wbFcXWZaNi1PEMtJHxsTLaynS88QsrNDJjnQKuWNkra4Gsqw2xuFQgdpzDfqPVyvfnZzfAKUwd4SRw88x",
  "key22": "5NBEtVeQnBi8cH3rKk5aTmguxwdtM5Ryx278btLyoNg68aAfwenQUnzu1ZrzNhdCH7FibzTo4WSkG2JLeoU5cJJV",
  "key23": "wMst7Hz8aDvSvh5PghtJ4r7vdvsn2gNU2YaBvXXFugL55pCJrFWCAGip7HWaPEkcw6SHmxVs8LKmS8wQuAnvLV1",
  "key24": "3KbLTHKFdLxGrJu98YwenL7Lpk2wcnH9Ug6ZfVMpLBXa4dH4nF4kKhetb66mbSbc2ijAfQ1nvLgaLArxi1CjEktY",
  "key25": "53Dq7pEwSGmQ9UV6U2ivYMTg5sKXREHDVWbHugUN8H74jQCv2XQ28g8TjetAh3j6gkQmN1FiyYnLFMdkwzULHBX2",
  "key26": "4w5B8xLgH2SuBNvLqFeAUQVn1yrpXyyJpYvKBcAMmaYWLZBRJWzK6cjXnsCsijVRzSnU1qkhzt3FZfWXXGbi2dcT",
  "key27": "3rALpuNV7Xs5NaLByCuJVL5XXJKo4KYpEoj7G9GXBF4siL5pdM4GTYNngDqzhLcFm9FE4fYBQoxCRAXAm2D58Tws",
  "key28": "hYHqE7p1xB13wSAw2Z18eE9CvPWXnGWu3VNpSRHmVrWSPiUBaMyv9TdRGnjrbLvvBAcHxisSscPDCf5ei9R1mHM",
  "key29": "3Ky6M8FQeh4Zfqg51Rqw65a8pGVgjH5ZEr1e8HXZCWicUUDZ7VjRBGVgKTmi89BxtcRHF38LKYXgTgQpXsNfxj85",
  "key30": "4KhugqDHnyeYiTtkhoCE3AJuqG5U6UzUbaBJ9AhwwkGc5PJhG2o6H9Dy1gwEeydW7QVQY9E86oA9W1tdqWnzbF8J",
  "key31": "25Z68QQmS9p37jqNZQRcyndcCvm54hEV55SBpXWLSJ7WnHjSnznTmDh9D9P1Qtt5XxhVCLtZJgbNqXQfyCcBa5vC",
  "key32": "2EHDhsDzwaW9TC87vNeL1FmaUSY7gSw4zPUsziWrj6YdVyYwueyvbtrm4awHbQAVwfExwBY9Ce8WBEbb7hsiy3D",
  "key33": "2t6cppHVRyxh3cQ4vbau9m3GWoNZc4k6p8rQhQuC1sYHonDg2J5jo4J7ejF1qhGnKeqx9qTzZdyFEo2HFnCBLGNA",
  "key34": "5dySxMrcjNdrcxo51Kv966qEjJf5J6Az2iqPfyxEMXGPzETio7ceMvtp41fvgWJi1TqmN1RTCYh9P7Wm13qVyYd8",
  "key35": "5YSCosXBPsxKeRG1yH7rEi9rM3TC2GAnjnEF4hktZ8EzoWyPZmx4q1uJAPK7KxQAvf8kL5Szfb4xfEqBsjzYQkvE",
  "key36": "3F8Eso5avKMZiqVdkKvSZDSYrH2syL6T7FBb9QkVUuP3zjnuUp7bW2hXLYT1BKTCHpUAh6LF4aUhy364d7ZLfDe1",
  "key37": "tSrWumnH4b9TWUfLNoLSBQL9aX24xY9nLknRNhkeEZ8ujopPsUDHuEYfADS9p6DXncXd8usLM9vJCyPuHV6SQzr",
  "key38": "3KeeyHYXDJdbbwKwTg4ew8nQMGCiEHivTBMv3d8DPdEN6REjPmUT6MgzWy8oT4vmysidcQD6myA8DYwxGpgo8QaF",
  "key39": "2fvhdkKJWCuQMYeJUfi14Y2NGnxcsEN4FviD5YnDoUotyPrizActEkk3o4vHyJYv6FEPkwBgn6HBACr7Ae9gNe7b",
  "key40": "4kmHD1xhtSey3KwhqEEm2XiCborP9gqCZxZdqBsL9dZLa8xXc7Bk51onppHpnffSFhm62jzepoAopspi2jcLFwvZ",
  "key41": "2efk2TsDCdLMbrsVn3E4jqeVroAAn2mEFEiZdNqv5ZacUZvMy43mMj8Hz682zYZFqUghqhKp2sCBaMYm6cMiKw9j",
  "key42": "2ik38APRfjew78fF6C7UUnJF2U66rNSm4F6DymY9fP3ZarfamzV42G7wV4RhUE4Mdzj2M8NGysD6SiKxGeRyDrPM",
  "key43": "28xTx4FFhsWpSTKvg6YaZyY8ogkTcXUmXf6Y5rJ2iGLCnZ9wA6UAL4MjU4vNb2b7DU5fHxKddGtU2nSACkcTsxRr",
  "key44": "4BTv2gBcyxgPaMBoVFoZna681wCzE4czBX3xaokscdSqXwDZNRRbadjPSbzCoWCXRuJjE5k9iJ1TmF2r5LjRP1wj",
  "key45": "4WiiFnQdWtwLx6CTiRqkHehFWkv3fE8CyTTKTzWPkKkWbnkcMhoMmMDSozwL7cN2smToh6uz5EkAhW7fG3GJLPM",
  "key46": "4ZWQ7fhNzJouwVBRK4EhMUHCuWHbJSEcMV7xjbcKhWUBScZ3vYHRgpbviyT7F8DWdCRCczVkfZ9nNwBHoctTn8us",
  "key47": "p5fJb9dcy83uA3onvLD9cZwLtfjH2WPMnAPqMW27C39Ji9AS4CobYqGmkySKtRSdcscbd9pBUbeEi3buHz2iLVy",
  "key48": "27DgvPNVgGPx3pYhZy3badF8fpz9KWoiGZ6NKqEKjStMmnCFrrhABURSXzgvLxFi99CvrPmqR61K2z5Bf6qq7Qk7"
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
