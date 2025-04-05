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
    "4o9WzPsEnLWAQayy4H4vAYRR8Rmm3xyqNc5nqXxihLf3kNwysqU2ZhknWeM1SSexeerEY5yMduNRBARRb5tWQuVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ahFjoKT7eQq61QDsKRKArin1tqaY9xgyiSZhZp36PqsGjHXFBWPsJz6k7J5RMM9zFMTEHaA9Cc9597Lj29hNWqC",
  "key1": "4Rx6ArGdBJbeXbNkMTcuZ2rJuAix8DF6uVDEywCyNtM7HR7q9A5o5xzaoBAy8PAJ3yf2BSUwGDRPKFMtwM3e7UCQ",
  "key2": "3PPVjXW61fNRJiKHiwPxVtekZuncodLyGqfUaXKtwHA8b6mo5YJSdX7dRZ3fVD7irRkC4aUf4mv78WAWr8o1swct",
  "key3": "25C845K9EBxZxjVQUYyAJZgs6w16SasQ2xr4CjFHwpmxg32agCepnohQYyqsTpDnRpmKwJuiWsi8JBJ9JSsPTjHG",
  "key4": "4Z8dS2qY6jfBknLd8agcv7qhucoJ8vmSS7bnWUWABR6XN7sf1zUchvoS26DeLxhitkZqwU4spp88xMQcMobTQkNx",
  "key5": "38RfamRE32dfHtCyfbdm4fQJhPuTTe6oEjoWrNkBBkshSGqWVfophhBweDKpMuqXZMxiK92Tx3x9AZQ5ZPec47nQ",
  "key6": "5cMxs15i4ctgz4fQr33NTm6VpKRx3FkwF2XcCM3ChQo4jUmPbZgQ4monVAcn4ojkAhqcak1jnTqNXHyngzg54aUo",
  "key7": "54VhVBe5rs6vkWBePmJcxr1WgRotyZKJYCdaLgkqGm2xCrCczc7hcUhvyFS64UAmFghW5wPKjxBQiTRAgmwzhMCs",
  "key8": "48XVhbqq42Dhk3EsBtn8ZgbXn7W3c95jsQ6b2nLcEtds2eHvQLUuPdSf8VhuP6ZgRDQ33Q79b5tLvtsPd43NyT4A",
  "key9": "zMsrFPggedhztDjzAjZwgEz8XBRyE5YCNmNaRmNVVWcNesU4UFwMa75AViRU9gN5HPdSzCGrJHvY7cYmBQnyUBY",
  "key10": "4wzVvHxNWeamvx4Ecfgb941tVKe2XvziXo1rstiRaY2EpdJXsDjFJBAFzUcFKBy3EkcYWzKcDqC9pFe8qRCEMEer",
  "key11": "43fafj1PtwURz19qBz63SAZNrpV5xErCqoFWjijgfBk3TtQkgPBfCaNpQgARdbLZvSf7HZSpL1GYcTQHGgMjTRrK",
  "key12": "2ViYKzRCEStraECW6Q6DMJNSqxVWJUbyxWS62CANyjiLqoRQvnG13pqHLcVoThtCScCRMJ7zg87JPY7MwGuawtTD",
  "key13": "5yqfYvvHZFCjzGuHGgeDzzPKHLwM2VbH17MGqgqaQHYmyv3V5Y8zZPZw4LRYjoVTEyv3cJwSzx4Aew8YztLoMRrc",
  "key14": "4TVX5MotcuhDxdm47XawsStHsAr6CEvqaDm2HSodRTGdkgn3BxTxAVQtbXkvY6Hb3c7szBKS3Ps5ZU2iWcW28GBF",
  "key15": "5wV5mLwkRSXDtLG52aDfswtaA3u2LFwWrwfpWq5NzwdQ2RiVH26pN2tx52vbgyG19ZUpJPRGsGES1gnD1GVLs1AH",
  "key16": "2hPeNQ7ZMf3YwRAHPdf4CB7sUbdNExjcLJ7PyV8gFkcTzPtbHkghqRcahmxwD5W55E7tfLx29eaFFvkoYTeJx5Ft",
  "key17": "345yA18VFnapke6Ea1iiADjynaftdxpPvt6vuFEPDxC3u9RS6oKgQkEEhmthHJu2QSRBmNSgGdiq2VKfcEDt95kq",
  "key18": "5g85iwkabofgKmeVX1EZ38RbuCeRVs7fnN7iyJMHZE9qnbVpAPRCX7Mn5YrwWge6F4MkzbtXTZQQS7MymW8QPszd",
  "key19": "587zfbbp2zQiTgR9TBCz9gR6dbriKDPNrLM4VNMZiH4k57u9W5HF6S5Kp5gscamNQQTwVjB5UXktTNcw9hsDMMEz",
  "key20": "4iqbq6FBYH1EJP87Ai25A5Mz9fQvQnaWV2o41DFqeTRwnByJtjmnoLfohG8dAxnomg2QT1Sy6hjVozNtN2Mg9Wwq",
  "key21": "5MQjme5z8hS7PHyYeanUzAg8g8wpszcRJ8UoZMDdqvd5EFSQwoxyUVLjRXoVALTLmd7iTiSUGTaiMCa8coXgaKTV",
  "key22": "4MQuYhQDSk492KP2AXSHcwnTSxgvfspkfHVaXyiKTDwBeGsf9hkynLuqLSw2S5vDZhEzXSzWzr3hLYS13mYByFyW",
  "key23": "2dWUbmu7WJsGv6YWEM1sgEqMQn7gHQevLtkjnuMaKvi6FzmmqxTT3WpJ6YWb7At7cMEUUxJkxKJuhjRjK7Rsu5hx",
  "key24": "5hHqDtwnMvAqNQEE84n4FRYoaunx7Nzbq4R8xcCSxwtxci7MUArqgi4uEECntHRiNWgqzTduWnzqyXopjSbPvk8r",
  "key25": "57gauyLArCVfmBQtiDriqUusW8qhvne8qE1ZwkoEo4MbbFJZHrdaSqDqcn9KnvBvFYnTo1t2GprQpMck7HR8cQWp",
  "key26": "2GavbQnBP8dmGdSTgvjKKYKXK18SoYCjYrbZLj1HwXT2uLmMBJPgFDUVoAuzWtYPMN3bDQFKLKKTgDoB4JsLZ43D",
  "key27": "5fRYTtswHgo4kybWCSmkax8bEXC2nrUbnL8UAhGjRSEr9bCHounzgJyKo8nScwQJHhQH76fbFyJgTBM4AkRQDsGL",
  "key28": "3x3ofTasT91CiyxovcTsizmSSpa9XgL1o6SFWmChXkacyjaypFBoAzSYugXVVVnsYSzAuvWd6bbL4HDuP6mUi72F",
  "key29": "BN9ChrbREMiySxBTUfDRB46vVX2uqmZmd6tzssVr5mGNrsQetiAc51afaRpBNcx5rxF83hWLFUHh7Z8FeSZB31J",
  "key30": "5JX2U7k14q3ANXhm6WWXZEHqWV84azyjpXFaFnUmXTxP2irBuiazyCqXDih4KikY18kyUfGj9wGA5PsdavWj3Qjh",
  "key31": "3i5WF4KHwpGirHiYJkGn9fsFxwPf4baQK4M74PtYzAjRZpeAJQkesZQaHJWbDkAFyNrHef4dgQP2DvKGDqha39gs",
  "key32": "2fWd2Tz5vH9vYtTegMFhDyWcDTCiZYsRhm5K7E7P3zjmYRrt6U5jYFNcXWfk5EeRd5orAk5jSkTomoPRQojFxqDm"
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
