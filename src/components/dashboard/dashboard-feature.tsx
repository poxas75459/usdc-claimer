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
    "52JwC785tsdtxwVJxP9ikyQ9hfmcZYfeTNZUg5HBpstweGXrhLmXcbNz61fjRAooQCd9uNcndBZrR1vcn4zUrQ8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52XaTU6RsiXwVSTjQbWn9rRc58Yfq179Uwk6d2QMq1dvnLspLtNEA8J2FUbM75T1zYnic3XfnvaT9pE5hRheon6q",
  "key1": "5mBvfNPqYKirEoQiBGmpoKf9D96zMEwbrSfyyYZgQKAzokfoNKzzfY6fDf6RtcX6xKdE2qrcVXjCHDFY4MV84Dg6",
  "key2": "3svsMquqvqdvtFsEB64Hj4BxPzxs2MjvWJKBcW7RTNbRQWGbtuz5oBR7mpe9W4JojR4R5zkNqHPWDViiN551ooVQ",
  "key3": "4d1vL53UhZvJSHAjDTMAAGJJfyqSyp1LuAntdzaoBpKBLNjLr7xFyxv1c8Lm5pgi5dts9vQqkuohYDnUwZzsUfd3",
  "key4": "4ewrCrh2zjWqMgQCohvYU4YudQgb9SpT6xS9uRfYrxrCPMyxFpbk7arrGQB2fPUgjeLYwvjED7ULvkruBCDsusrf",
  "key5": "4kNVBJpCnU3NiA9bEYqqfZ4UzjdRtVdu7UsPPAzyGEkH4qWA1jTxqrnUaVYgTyB5wpA2CDLwpu1sWm1kUw6Drh1V",
  "key6": "37eS7hkXDbhRiYrpReKuu6bhs9FZiPV1XPfnRcsTnwMLhWZTptrtWuD4ZbUEuvx7dmMJjzzw8xS4irkTPryiD4gB",
  "key7": "4VqMfZp2vhrY4sTFm3NLEL6XtD4yrrWVLTHCzsb9FrdG8i3J7U2RJvf3JiXQtVbvCoLWQR976gj8qbfWQeHuiP6W",
  "key8": "2aSLB8eghPjV9sMERnk1ziHhoreudsPkAFUACwDxkheHSDmoPDT5z1pRYF8aGNvXdG5zK6gNMbGz9zvXdW5XRE1j",
  "key9": "2wtyYcVeyH6e9vappUvPBD5dkcu1kXHwQNNqkSYrghS9JE9DtbFetwSnE9yyPhQUfiqenTV8EsSF3yyVcn85DucD",
  "key10": "4pkjDcwwEePpEn6A6o2wzC2Q4wWBizmwVYTfVer35vvpeWxSXuQf1Pt2St5RpaCp9tk8r3pfUjimHURjRQAroyQW",
  "key11": "3SqupGWQ69br1hkC9i49hEHehWHskNwLTqvxfhHdeMwLgenaZucfzUUDJYUfD59th3BvhACeh7dp3icQbzMPh9E7",
  "key12": "YQoSsgEatyVQ8vWGJD28jVsPK6cJp6z2pXgH31MYNqWabc2XJV3pqGA48om1zUxviwVjsmmrrDcGjX5P6rzL4Lg",
  "key13": "49KbKRg7M2KqFrAWjK7YrYnrUg5Cdu3kfxEbgVbPaqZ4jf4p4RsaKK8M8MB814CDWfHc2n32jS71jGurmMsA8DWw",
  "key14": "2ZrEViJScPSANmdUVLgFqBWtshfXVFsB4YzoHuQtQvzHmdZp319PNYcvv8EUBoAx2buuizfvoi4febBQ87M5ybBr",
  "key15": "2T5TVVpg2S3Ne6dRdNfvdDUPpeakKXDi58d8x1qtbdrZWWBJtKPVCvj8o2MRiG7kSGJHzyKKV9gVG8psH8syA7BJ",
  "key16": "2V3u924AAZHmyoXPEdEZWsB3HsYagLDsX28ixJ3zps3tMb9VmzhwtGvFSpu2rkMXe3Y3xex7c7C6p3pi8hFG7r19",
  "key17": "wdaeXRSDBbzgoYe52kZHfrBaQ8d5kVznGk7vnmaZZ8uZRK22MLc5pZ9MnFUCEf3YWdjMnhRTBgK6WMbhsE4Tq4n",
  "key18": "5WDv1RquqioUKcj4C3chAXdKUT4jnwdSZpDG8mAZHzmNWEhYxwKpzZKNHfFzUdhmMCUS7DapXGmv3DNXWrNJsTrA",
  "key19": "3cMPER781TKoziJPNZEb9qiRbSJTZxYxpm1xedmqHzsKDXeWK72xRUUyEpMtk1Qz9ho2CvVcMWazMb6t2A61C63m",
  "key20": "7vronP2EbZvhNCMaf2Yp9zy7U1Lz5CedLKYtQza2Yf5ybYws2DkvFuCKAyxb4wrdJaNK1HX93eyCdGxTyWkV7vT",
  "key21": "J9k8ptuWXBm5YoYWHNJ5W5tHThPwG5wHKC42SZP1mmtpLc6xDxnRGxbcSGVxnqmA8iMsSC7eCTUo22Zx1UBmNhx",
  "key22": "5ZHoPqZmfYMSRRDmM57ycr87m5JtritykiQfu7j3tBV5eAZX5f9ajmCPrRbDKCGNn3U58GReX9gj2s3epgWmVWJu",
  "key23": "3aG5eYt2SVgZE3M1K3HnUBdWoDT538TMuziEKeCCRBPFMw2N9JrU4FhooghsDwD1mbuYfLmK5Fw53WdXpWBwDLJM",
  "key24": "5eGsAfQr3Gcwn9jZWZpQMo878AUM9LCScESqhwffYoeUezXu4finHkbVBKP3AoFbrYyMxx9JRL49AD1Sw19B7WJm",
  "key25": "kKdezZt7TRbxR9J2zVwxwTim8AKnpihd9HtzXUxn69sqAWRra66JpGt5DY3cBp8KHNscdb9uZiz6nz9SQhAUAuB",
  "key26": "4mq3hZpkhfwysMcwo78AbAX3aoaG7RfThD5SpzjMEgznnqDedpMwWc1U65ff82ejbEnGzUh21AbumA4Q9DgKUsg3",
  "key27": "LdRVNbBD1t8Lv3mmV1pYERsrAP7U26CNT9hvuAkBQCzJp49QM6yswBPW7cRTSkaHoS42KZDp8bDzdLTT6XDmeTk",
  "key28": "5wAZ6G3kxKad5a6GjEeFX2LFatVqe9ayei4bWw1q25AbJ3o91EGKqTMsPuJp5TqHnxxLL56yjrVMtrpcHnbiMNrm",
  "key29": "3LCTeUvnJgnH4cWKuCns8JbF87nrZhgJy4RuXq1zRtdGRHFD3rniNgXV4gtwbX2dG8k28ptrgHwdTyLJXoFQTT3t",
  "key30": "21bbsWBG2MrZGUaL32tmCQ4gojs6Ey4SRgbb1abWz1amsZvQzSFaRJyKKLsQSF5avaN64DX1qR5hmZ8jy46LhKVx",
  "key31": "59Y95uR3wj5p61F5cYCCA5X6HFgmrcG2SYjEHBPJxC62sZFEHbSpQSgDTeigxPEtHtKA375S5AvWn6eUY5kpMjYw",
  "key32": "4Eei9sKPcFaSdnoVRLh8TAE4KCR6Eay3NRuCthEQwZucmTFDDfiPQ9bVb6zJXoatJ93yM52gtiuGaBmvBUAbL3uA",
  "key33": "67dRCTFDfByMntGheZeG6BMgDaAbb1UmhKGaQtKrTc1asD2dZwM6RQDXat7rWKJ14jmg6Uh4rMRmtJv4yQidbKvQ",
  "key34": "4mzxvhBvWia1VbYEQK6KYy4CYYsw1yruKihTK2bRQSymBoLZEzCrrKfFvApTEo438cPWiLCZYfpHX2DuomKtJV4a",
  "key35": "4TWZTFCK5VURhLu83dPLAQn1KNwMRWhyEELn76SYvRJJtbXcM33Rr6S3169EMZcxwnsxjrA3QFNnwmfKD7GJrSxw",
  "key36": "4LHcE7i5n2B5CR1WShL7aRDWWwnZGmVRXZRSrgvJ1AM2X6LVtgRsi7vLhtWRGdr4H8gqNjATNYzfb1rEJjudfqd2",
  "key37": "4g3ScvxJXDMyLbZWzBHsLb8mZhHSXbxaSJpFdS7cgBqyu57e3pXraCv2EouaDce8mmvQ2bWRxYJnWTxYW3xm53Ai",
  "key38": "2vpBS9Bw6gDbKDnH42UURvMYLUMRK7fxLgrhYjWDw5oUaXdMWX1Ch9bFgyMbzfHCxxhb54b3XxXGk1dxDsjLvTR",
  "key39": "5Hrrz3V26sW9HBm6qXXUwYbYma3QH2zeNfCBD2VDf3Kh8tdZF4c4HZ2ajFhBotbADseGVuv6Ycji79bQYxrtzGe8",
  "key40": "2m2REyjhB1UWnoiZzNT9HF76iqZQNphtF8m1tQH8tybuqwSMJ4gy7jqrbqwyTZJMQtDcUr2bEZ3S22gQvFQ3FkHo",
  "key41": "4Mb6k1mwuuhgnKdnot3goRnkr1dG7vR9eEsgiyidSj2Vj1B1BzwqF2RitYNuKSGBJFsawUZhDwVjNAd3tyMsJcZ9",
  "key42": "oCefei1aKN4btZuDdpNRmRrgiT1ibmsfMWNQrik9HEeoHtb35sMMCBsbsszCXJ2xzX7tUqs3sEgLhxxdMeZfXNS",
  "key43": "5Mqk97XeG9CCp8dUQ2YwrVDf3xMscCH3H2msKFGTTptGTKuBNnZVYB2BtpU7VQEGnYmBYFnuL4k7TCuoxRBNozfm"
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
