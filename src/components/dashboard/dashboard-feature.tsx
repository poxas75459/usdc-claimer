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
    "2YsnPApQNRdC5AKaaMoLZgds1isDUgyXqjBWe8twwFWZZrtcR8QRoa21fcmaDRQvF2fvrb8SY7DRFqVgvoHFq2Qd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49c1cQmj3eyaMke6nUdj6zEJGUmcjv1qyGbRo1QjiMgDTJtsxaw81CUFN7UXkD2W3Sydxhixcj7DDu7oFWJNFVaW",
  "key1": "2CkKWoHn1rYAEa3bsf9LhNU2Z4ZhGSA6qjPaamXjWBjLS6ojqRDodPe3jg7uDK7cAW33iVXUQEUFf1r4G37Lpja5",
  "key2": "MdBZVH6VSC9rTubG1ms1aKyfXvPKWQRD1oyB58KDdTz5fkQwGgz8vZ4LZaMTAYWzhwtfh7WPBpcQXdmkzbCHKDm",
  "key3": "4SVhrXRn61Dyy6xd1AbXygmpeZWQHQhxUsFWsbmxCBx7JifZavULuUrkUgjgdV32QPLRnv9xRahjAkDbMjb2q1Si",
  "key4": "51hNLjg8PeBB8h3fGY9KBUKsoSZ8vwMM8L664bBy5T3Fu2UTRxeqrgY4YPTByWTR2F9BXWRmLtuUfR6E2V6fHgYw",
  "key5": "5X2LNVA2ohV5HbxxuVTNgyDTrUc4FokA89YMX13rKxhN44CbyhBVsWKsdGJs6YdsrDKBsWHpranPHrAMEh5arqcU",
  "key6": "34mPXaFyBRYJHP4SQCBMJ7s2yxvgqWGz3cx1fR7dEz42J3wAPKeF3rnYAJ5CV3QabkDK8JMzKSrbmWD31mr7tvBE",
  "key7": "4jnDrpBaBgUjT9GJwh9KhhJKEBzTScqoU2ty6f91FDNCUMyXwtEFvzgVjkTLCE1gNkpm2pPVBcVYwmCMjJ3wJHS1",
  "key8": "3Zrt6vZWJZJTr5oPcC8jpMUavQ3cKm7o7EpTBKPfQgQ7g7qktJwcEFNs914yVXB29ubDUXbbiis1CqwfXWLx6hA3",
  "key9": "WN38uhbtoNtbCHo5exhgoKooY2KQ8tpGQq5oSfUSqbMWNMRySmXThPxjB7Cmq3nvK96wzrH6G8grukfbvbBukx9",
  "key10": "3FzWD6o8kysSLRvcZrYz7XcC1NocBxFX6uJDmeXDxw9bwddGsQ4aLGSUbxw8oCjYgPszcrWPRumypU4HpkMHrKLA",
  "key11": "23jia6CKKDG4YdZCAt9UdM34mmf8nMqYsMgPkdmFbEVwtYvBaANhM8TS1wRxVg1JEEyjjCn716PXuxu9YnoxoxkP",
  "key12": "4YpLXnykoPbQUKGcdLzgQBtsXF4TEFBkYtQSjBzup9ZZbvnaJxBqzQDrvHc66BZdKPgnGd8CiZmhpoWmSpqCM5Ja",
  "key13": "fKGbpvwJhGt2MX4HEvGzyJnvHe9TXVkTzD7z8mmrm4pWo7KfADdPsf7w9YtJgPqTRWWCF6f6SiK3NuSXUvCZZae",
  "key14": "3yLQKwt6fC6dVPj6ZuACRFeJmCG7JPefGvK9eQx3SRUE6yXCmdxfULn9eGxQ6Yg1kMP3wMGnZXjG3eU1BXCRL7qW",
  "key15": "4Gd9nsiFX5MeD4zha4L5PeWhcPPJeJrGmYSSMX9b5WsW8bNTs5zmadcrRDEioCoLDqSrcre4wBEAR5FTq49Y6bgR",
  "key16": "34BAtxgKUsiAouVyLh1TZGzvteh2pFyUxFeHSHg9UY9GkAy8HUeT7uP4sjeC7wCAqxvRdcXmZxRmHjytxd2hpUWe",
  "key17": "5Y7V8kboZLFqcZXfv95hK5kSHLrTKBmPzMepZPiys45PSkt5m826THJ1XUU4cSCtEs93JvTj9TH7pXLeHXCiebwD",
  "key18": "5iWt5qWpvPgJ7n2aYjUsUYyLtD9syjaBTbNszcC3VvJwNj66Ra8bZpArW2N9ksL5DoqSeebpH2kig6ydEHkEFDDE",
  "key19": "4wc2zSNoSdoFvE8t16j8j1ncdP32A1SVqRdq8oTz7Jzpje59oBxiStD2sf7hHCxGoSyuQNssgnN4uU2HZrYiLjk1",
  "key20": "3VEe6KH2bV9nNakb6jDNnEhoeMoW6Pa35X3ZHbBHbFFxcXJeai4z45WX2ZycMqBLM3cquvFtvcCow4ogXrTHBgEG",
  "key21": "3BMx4sgSJhuVjaQFfuLqbdFNQ4hHJ5DZyPHXqRjfmvaY48G3Mq7AtvP3tRq1KSnwn4gnox2KhQDS2prKiBHbyGQs",
  "key22": "5kG5ScfnGrwZPnF5P4dpCiJPmTiXqVQrXpncSvrrRx73dQXpD5iAbUkAH6Hdc6deMkXJgBx3mZUZwj3ZCvESFaiZ",
  "key23": "L5UrCzzhGcUpBkVcERsp3NsR4rWLcJVRnqHCphgTxsVWCHEQsWv7eroVBVfjxrwTzRcmjticeLMEnegnVLHa76m",
  "key24": "MmTDCVCHNbYmPWaSk5rbub2GyyhrUYoupLbggzXPrWJHNjqp4A9hPpsACwm8nceZ13yogzo5ei5XjrfQjZYzF2N",
  "key25": "46NhZQ8exPQ5DBrj7H9Cyhk1Epu4tHSCrCCesdu8XDGR6yKLtp8TK1qfgFBzk7hT5a9mfrVo2uBemUSjPGtSsXYp",
  "key26": "2q7pL86zU2ZvBVrFKoDSgv1ki7Qzq1RZNHpycS4E7o9XXHnoobW1dAAhJ3NNkdWVzATLML3EX9tKvukcH6L5Um4e",
  "key27": "59BCpTm9Fx98JReK7ZnoXNvYRSVkmbdshS3Cd3K8NdkSQ5DmpkvMVB1cTf2HcyCo2XCCNh7QZNLtHGTnRAcSpXqm",
  "key28": "2Xyrfd86QVYbywL4BAU6oiBaoBJxAYoKvNCz2tzbVS3K7K3Ufi95tbrBbncsJe7dDFmydhShfAEUqL7uJK9ZzyTx",
  "key29": "DTkpNmXKGdCuJyS3JTSq91Z2tNP3ycUtoWR6XAJ4p2XtDUgoKcK5vDvQXN3xx9bHXKSBAHvpz4Ygp7XRiUL2tD4",
  "key30": "5LBRMS5pDcfAFdJhNkazpjKhwUvFVoLwCzfHPTervHv2XpwmcrijxjmmY7hxrECrEX4TVALJdcX4GyWzQsLmoBWu",
  "key31": "4THW33LSstbKTTZ5HSveVp3MH9vZcjqLXdeFycKSg3cSwpsjhd48q7NJJhZQPTwdhbwcB8EorsKP8nXyWmzvzmug",
  "key32": "3dWjoKuAALovrRas4nmPG2XBAQHKLZc1AUcynmDX8h6SfwTkScqhnghjCEBrGHM8MY8m2v5sgapjUChd5BzatVkH",
  "key33": "qjEx7r9QpfW7EtZJGxgRsyKNkimJhvwWisAwW5tztaQ4H1rvmkNh2rN6doXk97vmarr64edjVS6pxgeHy7KUt2T",
  "key34": "3KT6599nsiv6daQvVHxwGr6TjvoW3vuHy5Y5NpP6oENittFutRkgzGSXqAeibzZBGaZRJfq1XzauKHf1PkNpiRsU",
  "key35": "36Ln9g17L1MNQ1Z7T5FxRZZhSQ7auvhoRygVcpfB3cUQspurZhPaFkKMjoXQkXAGe6TnifeAZYx1PYT5bXsqwKob",
  "key36": "257ma5Y9wPgzD2wHhNFBPLpHaSKkhNMFwZANUuSnAzrwTJX1Y7mQw9GAJf4dwB3qnAxMjXjmfQxhPddHonfXyxHu",
  "key37": "2xPFKzbweNCFKAMQAyRAoEfcJWaHG7npEhTpLEj4gdBnswxuyMwbz8iimwEY9vbWtUuWpuKy4KyuLu5VjR7p5XLj",
  "key38": "2VzcNSXeV4jEnsfXA25Jx3yH7QjDLQ2FnKdtV2hQxKGGqddbJwHevEQ4izAP1oSqkkEhaMfdFSinbfnMmpjEnD6W",
  "key39": "59SNgQTVpwoRKC4Gv6ntmYDFHRXhdkTLsHDJf1AxKuqn3k7Qtuauo4wVvqRpbxJdMfem1FRzr78nCu5zQwHHTM5o"
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
