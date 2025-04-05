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
    "BJgoEDzLksdfSk8zTyLGmEwbvhvFqA1JkRLcK3EWoPvrtEGeyUkBxXfAvbmc6vCCBvytZ5wrMQsXNr5jWiyXojE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQa76wCSpm7RB4iT1pyMnG7iWkYqy2SvaL23qshTkQbdwPsj4oRxdKmvBXbT5X23ew54ZxEovrNWFyopw7QSMLG",
  "key1": "SPnYwPtzqDKxsX6LjbuzUTKRvpnsHV16A7adiBdN1ghQbPwQsuZqncxc25PBYJZSXnuGCzqnVv9UJCUVs1tQZtX",
  "key2": "kMAbkYEFydgYU7YFW21jxd8KMUDfrWQDdZSUv4aSCcin5L5brwH2HeMJLQfY2JeGRSgKSrCvS6aH3uDVUzDQ7vV",
  "key3": "3QGgF4fu3V2arJyS51KBbB7RD5NUDDJ5aUv3TYz9mQ69m5JT9A3RaYXjWAfJERNXqJqeCZRHTwj96vt4zDUwxq9M",
  "key4": "2CuGB4U5NauHNXFgcra3n5zaVh51mi1hcKmiDiDXFcn9BSJaVBgWBQ3VXRxxj4taUYyD31XpkqWvbQwJPGn2CSUH",
  "key5": "DejzXYwfVHn2eNNjKaR1SxPQJcKLGA21VpARN82rTPscyZkoreK62QEyzJo84Tx8T9eZQ5mLdpWmG3W2hSBbB8w",
  "key6": "4dJcx1zubGGRfetZUxqFjN36SgNDhquSBd4WvjcFvDwwGdugkfMqSN2RJzK8XF6hKPgiwhKLsWBjLWMLgSBU7aH3",
  "key7": "3tQTVWR3yGkk1trvzmnys2Rs1g3D7LynuG3dZsNpAxvDCE5kokAChKktdaym4BmmCatpoCNoCp6mbcVnUnRixcVV",
  "key8": "4QFsw75eqw2zDikguvhJCyjbpo9878Y9JmH8gy3tMqzpyJ4gZsXSLLUgxrCaEgQ9s49ipupLGUHNTVNyA4w5AhSo",
  "key9": "4eq5BnhoaEpYbHTULRRJ3Hj33igZZoEd69dzdzqP9y8gzN3uiyf3gbmUoyJUc9Wqf4ANJG7i77EzzucprR8QSCfN",
  "key10": "5RGGna1ZAtcpgVr3roC7P4fCuGpUTaDzQM1z3FSmq4gyXgMoVwq9apoZ5GzeRRas5boDfTTpCnxFrkjaPXAVpRNN",
  "key11": "2gk4uic9C8j1hDGHpJcHgvxXTvdSjZWc7nZ3CNydJCM7D2ZeBzUnZ8faqyVVgkdoX4rTdrX2nDyKrVo1wcYCsTSe",
  "key12": "52GkmzPMGhp6Bi5BCazoh4wytaFKHRyrgNQey3QP4MQBEmBvWYqsmpLGyjuZZ5xmwGsWpVbuy31jmDYNfuiCjsiR",
  "key13": "4Nee3UiYXSAARj4ZdnnNL7JFEoycHRnAQRtJG1oJNMGPwAtgzXhkrwAfXnpBs2xTzphDYGCkutoJeJ44baEUchd",
  "key14": "4i5VU8GHTCvFraqrSRPv9ZccLJeko6wC8SNdUqM8wCuboKV37Hquqge2LNKzNc3Jsg1HrS8MMgVzgTW4h1jCeNiM",
  "key15": "23XyDMdLBY6ZhPdso7RZ4wr76mAYze7XG4u7eHTCz1y4TQDJk3AHgaHxN2cBJFH72MNCTDrkdcMQtZCf2C36ujjn",
  "key16": "3Qy2NSPGx9Njsreh1FDmrAX6ZH5Wvz874JsgRqBTAKjPW43RyjikZkkcj1SWnGJE5UFQRoewNd3iu2JpZgEXmTcs",
  "key17": "4AGLczuVgsmqmrKtAyNVRUcTDZE6AtomfsALZG22tWuUhUVfgU4F7zAkjrLq65cJodj8YM9rqP42563DkHUXo8tz",
  "key18": "3V6Y5xypjFJBCky4am6pR3NMBgvnwmnfNST5nRAHUDowvrdZQkztZQTWMqDRergaKXW9vGj94E9DeVTDnTeiBStH",
  "key19": "3c4vCviwQuTFNjxxcPY5Fzj6rBSwsmUaF5iEHdeozXJfPKMujqcQZYRtMPaf8GTqWkJqgYzDZ1NvCMTHjTNMRZXa",
  "key20": "3MQAVNEzMfoLPeZUjW55CFzDFGH7ZWsBHjQ37Q5Q9E5UMJ8GToDcKphFo8GHtWmC1aV9EasEgn1io1RTGe1DeAaa",
  "key21": "XY987eJN4Gi4xq5KjthGCX7WF9kVdj2uusjvhJqnXQfi94Th6dNgXgzqpLY6UG7B68K889QzvnAaUCMFy5WWSB6",
  "key22": "gGHWxdEgphnYLULLudmAifHikU6RDk2cdKBnQ3q43rdZaKnMX6byhkMHk3SQKstdDo6So4MTUatCaJt3tDz9jbS",
  "key23": "4woFoNrKEo7iNuSywt9UK49eqpnVL2j98Fii8BcUeeyLgVvHmLVb1sWgLfwBVo2AtbcxJGUfmsb3NjAwZpHmBHNk",
  "key24": "4tf7ePQxv2SVV7D2tAoHkwvjQMAY55mu55GAZQjdr482Ch5nhrSE65PATTshR346PsqpTUrXPw7ooKHNNwC1y9X3",
  "key25": "5kaS7yvY9Z8MxxLGVKH1m4EGcHPqEBUshdgam11XE2v33g3PH2Ytr5rC52hbtsRshF8awWJVzCZ1QqeQGNEHzE8K",
  "key26": "4NBdZwYyUbbNyzZfnfjoLgAMGaBw4ZQsy4YWVrJBkMLznEeNDBFhPikKjGXpwVGGFf8QyGZdSg8WVvJL2eySTVqg",
  "key27": "34RBtVXeFnKoSiwmPbBBniTVKvvokpFYEAfTq98ujafwvsSmcvw1Sj6jqo1Yf2MTQxactB8YGGH3eCaMsGEvXpLZ",
  "key28": "5rZQoebAP1Gjd3mKW7Mg6YzcVmiGyu6Cphq4QSfKjLCo5mBEtTGg9KhCXaHx1SM7tFqnP917FKraxEE9gt7pGcRk",
  "key29": "QQaMH8Qn2cJWqaubzhg1nkCoRcjRtALF9HyQ6Qa325ifRiDtGhsF51QaJ8KGuqqmN7DLeR9UzvBgeNMBtWd7iYz",
  "key30": "3d6WaNssWBAPE6KNaE41uS5EDLu94e5FshKae2fvDiyecTGsKKRGYHRkmPTRHgpFqrfcNeC5oR8Sax2upqhTv9nP"
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
