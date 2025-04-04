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
    "2mwaXBbF7cPmeSwAgEv2B88ruRag59jD7UnepWgQ9ReBGZZjzEM9hE6GRJUJSEV7GcSb4Yn8Hv2UoT6riAGsEUHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dAQzcxMiGACTVudgJg8NzNYSUHNrMqiY8KsizjRrWYAyLiGATYpKJc4NFUuooi5xYZZnSrTvfnXg3G7Q6CTNzvx",
  "key1": "5SqpjrF1PJ83c7Qkkq1wMT4KeVp11GTjCpJdUSgptDzAkMbjbrG58vvP6xS1zjFc97ZmBH6UTh7iRaJP2NrF2J6h",
  "key2": "2eQnWi3iXf3ueY7ebFFT9xkaXAvq5eCb9NbLCtKwBUGYiy2TQhKJzGiQDq7smrrPNPJS45HEokURSaVC8xSZvoYW",
  "key3": "5rzdioW4yVKWMyBiN1DhyY36TzArYJDfu9TDb8M6b7guYoCtH3v1dkRXy9M4Ehw7F9MM15Z8QFX9qcPpX5aEX1hw",
  "key4": "zAtk7VeKXRpoRQLoYd2ZroaHhEHLE7nAEc7jWsEUxrQYwWKbXNCwcuUR1fGcq1SGKDaibqM6Bxmpyubg5Hyu7id",
  "key5": "59WKwEwSJQF9uE3qa6tP1BkAE6gSv3LzWkJj9yfjzPL8n7ZV4ueGJnManMVX8j5yLJwDGbsj9mzHGCBCDELbPTfU",
  "key6": "2bL7eoYoUqF2txv4AcJBVhHZCn1GDMNXH2HEbDhuhfRa2YFSFWNfQYeQ2pnovz75UnYHexMK7UQkveGD5THrYMH",
  "key7": "5ZkTfPMC5E2VrPqtkF8gaj39cFqGQMPXCJSci4n1RNmVPTUVBnf6S6KMt1YDdCztR6nNC5NH2CHtykA4P1q9uWVk",
  "key8": "64gr7vk8SnBTmuHNzn144tC3pcaPpShaEpY5SfY6mWDHbZJcV31c6ykq3C5Z58133euTYxTYyQFRnBJyEgPwumLG",
  "key9": "3wdtK1JxXj9cyUxoEMEpJKpNHJLAKVuUrKruYHJjV9KmTMEzHAuwApSdoFMDV9v9tVsDXhbRCqUGyaRVCYHf7wbV",
  "key10": "5aB9L9ibUcCrAHPCvrWiMoAmvrJEyYgRS5wTd23thhAcfBYvBaz2NbnqjoAEUJzXYwCKKsT3QgHCDheXeuAgaRD3",
  "key11": "4pbH5B7E4bhH8sEGAHWYJhqmxRKmag6evsaWnmTRgGbNZnwNTtcvrLCtsaqMi5N8AeFXzAL5zQjeeiFzB3wabRJX",
  "key12": "2Y6SMF9NamU3rb5eKwGM9N9viCEvkNMa3n1R2dT6AMHZ6cavc6KeXUENxFghdwbqP6TUsiG8LdcM1o34CcnQJCvJ",
  "key13": "43X6mBqQPBM3QApcB5ku3XucfzWb74nSXSt5S39eJ94jBL8T8y8Q5zrTf4ZYuEkMwtnCZhFisdytPhdzSY3M2xXz",
  "key14": "4NpAngzz9pjFTbxSS1VATEcaYpH7neJqxmVCQv7iqYQxvXx3RtuYhXPRcmw7JaqTtaTTk4cx1wcUfMkPphHLQDaJ",
  "key15": "4Gco3wY25ubwWUc4uGexLsoLpgjJXrM9UCeKMNjiEk4uN5yycWrC9tmtSW9jC9tQuXHwGEdFsNTyB4RHCqov1dLU",
  "key16": "jDc6LYt2knyVkkLTxePGcD1n3Jj8DrtWqCaJ6ZYmKqu4BuwZ7V6p9NjgPvWSNgDY2graMMjsqgZuy1ZznESH4VT",
  "key17": "ReKtF1ekA8czEjyXPHP5ZSVa2vtyrjM8t7ZM7bdtGZm8ei263sasfqmKVBL8vfVEWvCSWXE8KAXmeofEZuN89DZ",
  "key18": "4ZvAvn5gytZDudFeabDgXSqv8dqqZoYgLonFhbebUJPDehmEagXCg1FrkFwELUczJD9caf93H8Dm5c1PMpGB2n38",
  "key19": "i22DHeJ48sUFqiB3oNeffAKJ3R8zHmV4RPL5fe7LnKZuHmu8cVbAfDuBTnVZkNuhF1fnZh5oKrx4w4N9Nz7KJCe",
  "key20": "23oaHLTTTS3HkYe9dtwXDxZ533RcNcDrfSKwgR9qPgtwzCMWCYxqpGTQYJuWcj3C4bAfQDknF84Jzg42FtGcVxye",
  "key21": "3y8vVEG6nBcTkwrwRRiT5GvU1p4emyAkLiPCUky81T185Qr9TB2bmffosUuMkaZ24vqTpnycPw9X9QfZvm5o1pJy",
  "key22": "3tC7PiD8kJ9xPYwucZgDnDhQM23eui7k4uWLfCvHzwSy1hdRAxKkCPWrwQevWJDFCCAL64GrBQw7Gmu9ufB28qbN",
  "key23": "2zsvNL1ryMaS6TybXCYf2FchrLzcvH8aGasfEGsn9iVRoQDU8vxMLWTNrSCs2tPdxtEuf2L1rdyB4MbSGcuTbNby",
  "key24": "mVYasuBTBY3oZ9QyUrMt6qHCCFezhc9PUvvyV34McCFz2Nvjm2FNSBKDZ7Af7t4DeourCc2HUcwkKox9USp9gFd",
  "key25": "4ZrFHjDJmwdeXSYRD4hkgSrDakcpv8Rf7CjKFDT5PHcz3wsMakQ33a2PmWX4Zxmf5J91jwHcfwZWsWQVDp3CUZMb",
  "key26": "48LSgXbnsk4GxFfEYw3J9GZHh8H1LhP19v6gQxdAdBQWtGszbXawrGJ5rQdwGJFcaGaW31fyf4mSkVN1q2jP4LBd",
  "key27": "3Q5kaUfiChytx9a9TxJz6nYowu9fE2eAdsR2niJNuMnt3Kn1b5Png4jDe717Uy2YpzpopYxmmMpS5N3LX31ssDvK",
  "key28": "2DeCPfWjDkArihe2hQAEphigiwa9vhVzfDNYfNthg3nxU7kYYom9SPEx4xjTnc9KsUnZeP9w98uPjoa3WCavcGmR",
  "key29": "3rKaynmT1Sq1ekApvAmFXyNjGkFvXAUUqsKZRBUSxgZrCfBhfi5JVWeL9WuVVF8M7sMgWMXw3AwJ8EUSGq7dyBNS",
  "key30": "iPziYMsqce72g37aFoQqV67wJasndkX27jH29tMUN9UdV4btHhhu1iK5WuFP97kXVaEaX5beB83u51P3FNVwZLm",
  "key31": "ZE1TitxVzyAJXpfS93kGsspdM9ieWE4stFBvRkSQFBqyLNpMeP6xtVxvCwzKfojwwC5aJ1jR5RysRrLar29PpFx",
  "key32": "3THioJqe1Ze84nY7gXoQXuQJc8JWP6GnBzQGtExxxgtDe8CfNwNV6pyEoFQVjG83GnG8hFp43CwDnVxWCRzs5qUE",
  "key33": "3S61JrqFJ8xS8qfWYH3nVGdWarv8WA9LW3Xmxb3iHCPZJa9WPxpwcPwW3NcKiBUFAZm1UcGtFuj8hpZtMf8fd14v",
  "key34": "2BAPj2rotdFJnsTyDBndXs92cD5iHzoKF5R1s8yUxS9ehyBnV1fH4tKW6R4mt6j7vbas72wbrMmKMEGVbPimnhY7",
  "key35": "5EMb3jMajztq6XQK1AqVApMFvTi6rPCQTCRDizPQsQYvmAmGYAavRHWFFc4UxxJwgj6qyefzV1hGh9xjZn3cUh2G",
  "key36": "4924JH9oLSqVSSZtnFwkLB8YEYsU7GEubAHDnSHy8bmDx1eioF7A6XEm5VhAez2xXGB1Y8PeyNeWbwxSYw1Ukzhz",
  "key37": "4JcroeNsVw8mABoqYdWKmZoUonUP9NCu4P4QKoBaXifi5C3Vc3KsNCUvCFzpKCeB5xL19HdjQcxsz4jhQjCvPqA2",
  "key38": "5kz8puV4hN2zmCHVrRz6MyhFV4R4Q4xgVsX7cyDcJYpinr2SnoPNtKbZjYc61NZ8YKy57wB3rshhTBkb22EkGwEK",
  "key39": "3at4Rzt7abgxuA8RMCh4vPkcta1BMtCCKwVWqRMnoVT3qiZjtAgazdNdxqZURBtqhdxneFxMgrHz98t3miHtrx2P",
  "key40": "jiBUbhpRnBeTvivZkNXUqV63p6fsF87xxUetDLWDL8BecGLPrRfPDuvRqRTk1m5QKBdjiHuMqGnSQ1qbAWZZdZ7",
  "key41": "Et3EJHoueqNJ6MKitcsKWvwtRjafq64RaCDZLgt6fFpnpBf6Q7jJS99rVh8vJMYcSwV4Dxnpi8hmgEg7QPmvpER"
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
