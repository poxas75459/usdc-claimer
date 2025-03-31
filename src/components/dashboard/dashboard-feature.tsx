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
    "3W2gqguuj84UAVoYJfG56oksTZKyaZC5fQgqJtG1tqdnyKrzpHNegeBYtcq6aDUzMavRg5vEkTHm5bacwHcZeC5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48oWcDotMccTQY6j4gVh2jLoFXaJDkfefjgfB8bL66SZoNYa3CtoW2UHUYYeM4CpyDnFZsWw4eTZmpXYFHeZhqNH",
  "key1": "5mVtfr4DSMN8XvndP8Q8cV3VNNzgQqdpRcrNzMSQYV2UD41PFdUQaD1qEkbBTYa836afF6AeRqWHcFKCHZZJXm2s",
  "key2": "3NuSi5WgoxB5PvgXscSR7iqm2YTQCxe5vdziaoA5FbvZ75dDoZ64HHEuaPj1yRXW15waj9uKu3K9NR6SEWnsXeBf",
  "key3": "3yYD2HiYWsQsabjMUByt2xgVM5sS5hWEPNxrDaS3Mry5VvEH3TLorzyATdj3S7bfhanDywDiXmRjSGhE8LGKy9Vu",
  "key4": "3D5zS1Fpp8jkNo9XeHHesbpRyVwBJdCTwrb3aTgdSMshd9zyfaCpAZFHiQGoSvoGeE2U31yBkQr8TpEvjP5Ya4fw",
  "key5": "3xus3kDhdLemXcR1yGSmzAPCLyCn6gurNXZKm6S9wMZ2L4dV8DJBi8rN9D9TGMh6TxPBC2qSQvQsru9vDgU8HcHb",
  "key6": "3DFWkwjQMaUsuzSef1b4R1UACvhdtoZ3BG1Xqb1SsJfCtz3VZeAzcZQzb1tJquHY97br7eFHKzH9RiEZAXsKn5qb",
  "key7": "43CjCUvnCv3Ka4jw5BbbHVNpDLMTNQvxwXTF7G4KdyZBGxHwJzDv99VcBp5coHQNUhCZdMWUv9fSz9cS8QuUooVq",
  "key8": "dkYPoLwqtzm9es12q1qKGiqeGmv2QBA7rVMjLr7fZzkfzCCQ7egsFERdBhk1s43H161VEh3ApzDzXjDUb8j6EWt",
  "key9": "5TqK7MkjGVnPL2Mm3qrWsa9J2aRSyKQqL9wu1vo7sq6wDD6DfcL7vUQokThHtZgAZcYUqmh2LsNFrqDFhpP5dhVS",
  "key10": "2CKWoC5E4JZScTs9tDt8JnW2qoDsYbzUuJKt3T4FhMMPnKE67W4JSmZqtozKnE895Srq8FpMqTurXYFcB3WFmXQv",
  "key11": "SUP9jYWi7RngW8bxpQPF6mriVy6YcEVmma5AF1vYEhBTs9LSHMhKAnVdY5wmZbRMsZSFCjTQmaUmNXhCMRXDyyZ",
  "key12": "4dSwQXKgvq8BwaPMb4viZktnQ9SuF71iZUN2TdsK26AEiS5bmvCJbmcyQRb8StG3kYs6pm3VfSpMuommozq8xyHM",
  "key13": "4AcmCCZiYuXBexL6kWbSn1mC8TShrbNhQvHdemUsqHKoLW3vJTTrexVZ1h6Jh792wUacxuLTnh1Hd9Gz3B3F6gJg",
  "key14": "4aLNtUA7P5RmtBvubVZFpji3hT81241JhPNt7inWCHQddua7LCxSqvwBSseybGS4XjyYq1KafN833dugKTK6YDUs",
  "key15": "hNssTL18E67Vo4E4mipckuqTysGEciz34NWgJXZHccbp2bYqWCrdkx8pbJ7LRKxJFCmgCxXN4a3Sd7bqJrCRpGE",
  "key16": "hqz5maXR6ekNjJA2vYNhA76PN22WEE5jjKCELTsCiS5pMeqcJ5bVidJj81xnmzbFZ9aKwji5wNnmkfniGbPqsbM",
  "key17": "2dd4XVgDRP52gPDG1EXUxDHekFNWHCG9WRh5bEK8ovBGZwzHBEnByfEfQBbagDShXPgDcf5zBVZvPCtwzRnyWvrC",
  "key18": "4Pisrb5dkYFveV6xjKEtsLiCM2SuqY2JkJXgYgHq5iowMLRFYED4PcEQ4KWBAkSYB6PNfziocKaCcqnQpz6CnqGa",
  "key19": "3w4sB5q3Kj2sbBmbEmWcC3oYn9BV2xpKrFq2ji6mR9QbHX633ro9xGa6Pm8ktUVoSLQDe3geoxdaCJzgrGqqZZTj",
  "key20": "yEjsFFeJ9jH5ZjfEknencABgV6PWguGzpAjTNfGDGwPg4EcjBwcKx5htSVsS3r1WdDQwUfCXekEcpdCpq47u1zQ",
  "key21": "2Sk9mdyjUyiSV8BKEN6VdMAoh8dSUDu6rrB1te5CQvsCgRAGf2fKfz9MqR91ahSum9hnpMSquQdcTTENABRraWWR",
  "key22": "4eGQwUk6ovy6LFeNCAtqAU7mo9aCtwpCnwETngPgTp2EZ3jyvyDSYCErTUJ7K8EJf6KzQ1X3CH3L3qSa5zHoDtTj",
  "key23": "554Cm5X7tm2n37f3fwuF6s3Zg4bpeN1XVZjeWrStD7HV64Ww8KFceqSKzVqoCr5xWDsg74FgUJiHeLQuGQTscDCy",
  "key24": "4ZrZvQbfJKwFqxcCsj8GMbu83tYSApBerR1zbKKAxo34CXvYyfR26dRx95wv9pNHh3oq5gPjT4rXNnzk7b7bdc6P",
  "key25": "4AgYfASppQKknAa7roYmuw1uznRhnK5mad5KrG9HbKcGtCEiUjPKNzSZpvVWB12TMNrW5dXcTho22H5tqCU7N7p8",
  "key26": "4VcwL6XjDQwXrKH8cAP1ZZaR9Ud6agQZyUd3fwtATyfQVmDxyHnLAnmDtqzKhnzfcbmTFktne2MxvKr6bWaKW3sq",
  "key27": "UtfHJ3r9Yj6HaACL3jMtAta1k7nPw1E69V1MXLe7W4TdBcLU8XZG7jWL5ghsQnUGNCQ7DdqXtxghchTM2BJB3ZB",
  "key28": "5saQXgijDe6HXHApUNZYrZcWJaqQN48jH2mSErJ42FjuEtp3gRDcYhwVpN2Le3pCN9nEjzT3yM32noussn23gHf",
  "key29": "4GayV2nSx21bXLowXU7j3YfmykRJYYV57tyQDUFG8AHGp9GgYLekzKFq67tfHBZvQHf6Knd89y42xzjG9bkgwiQY",
  "key30": "2m2wjih81vYf6my5vUEpQ7RsJm5865kzsqDBhTkW5EAceMa4cp1B2apte3VjqkYLuMi4tTLqySu1tAfC9d2vBWyU",
  "key31": "2UPMwJY62SwZ1PG1yNmvHFemuUMd7ANEeQKzGaFVZSte9nNBmDG2GCqJm7VtSUDRWpDqioLh4th4jDNeLxCnmNJW",
  "key32": "3Z4KMaies7yVgrgjCgCywHbyksB1Sab8Tqt93TDqwRy9mGh9bMqJQGFkFD9n5vSDHci9mrSbugd51JjVztTcCqpv",
  "key33": "3bF7YKfjXEsg8qeJ77aRndWBmjrmgZBm1nLGUjEHEhc9MGH45oRaSkBma4JPYyxdv5qWRBd5WD3jDPHL9pZB7WDa",
  "key34": "2Phm342C89jufUJspMmcptKgED3ypQFegbbvVFdALaRmf2F7hxDHxnKynaqKUTxzdVrXv3iXN3mJHc5nJverw74t",
  "key35": "4nMCdgQwPcKYQm5F9tx1UXgbUzgMFo78XKBT4tdJFqFxBmTkjedhbzpi5WCRJYbX1FJZ2s5txg4dir96Usa2KUP9",
  "key36": "25bY2HLj6bRZyjjQsAzy939FPo9z9DZeyJnimQesxAHkQJ5H6D2nGwVFLy1LyHynWLvzTD1Z8VZCrse86mCgfpii",
  "key37": "4jENXQzGa7B6HRjsAG89r4GA78knASizy1oHnpR9F2XcWSBjpbAQFsZZTxz7fqAWnq7fBRuibWQq3c1YKDD3f2Jk"
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
