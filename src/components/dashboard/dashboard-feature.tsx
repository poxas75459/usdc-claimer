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
    "5da5KQhf6xsGKMYWVei9dJYfG8PUhNZS9Xcq9zrcVWkPdRNMnr4rswqGKm4T1EP13wJUcDxXFfjbRM34CiZk3sPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FXdYJmdP1dJPQeF42SqQoyvPE7CCY4ct2mKYi3tQGMrApytRLVo9P6DqCv5CDQHQao1kzi87sfXJFKDPt2FN1Zf",
  "key1": "5VA98fYecxmjA1yMGsUvykqska9ukJCw1fRQ4qAWH4oQxu9CRkjjCP6h8a9thJnPUZwKDH6c34dig4ucAaHweEkz",
  "key2": "5v6dYT7rPZfUyBaR2xopW6JDHkY3MW4wuJEKz8GJn3miCvYMumS2kthAkKhYTWWQddVefpSEYYcFUxdf2honzm3G",
  "key3": "29CkXdwmr3eT4Rgxxv4F3CS6TFCod8Tg2PJ9bK7tu8enXT3K9DBbbsRrYwBRhcvf6nfExT6eJgYLzLCu9ucNtiTV",
  "key4": "2KEHbebQJCx1GFfavdQCwGzpMuZLDhFca5sw9H1L5fSsdkUaVLREoGvxQ2HpN7KbZyPqA8Q121CB1GqpBTBAxCeA",
  "key5": "36Hi1CVKHqr2GZNtLBcx7T68otFMGvUCJNTx3DnsXb2TxbCM7RVgmfgz5M9kyVjJDvvNRiaofKLS5yZK8SuRw6NN",
  "key6": "2HJBC9diQDheSg2RqAurvP4QZ7B57Fhc6k93vHq1B4NmEekpitcD5yswanZv8W18CKkJ9nZawsGyeYHgRpB96h4N",
  "key7": "4MKVarHAfrrGYC9hNPgAi1umuw5q3m9kpoVseBW8DAa1NGuPUhfVim5F3Jxi5YxuZtwshyoaTCTWPmquLGcn4v4Y",
  "key8": "4Chswykkg8KzLtnz8Hveyf4e73xm8MzQYu9nu59JXnERLNVcALTFRyJ5ThEcioLaPbttZVgCFaF9dEnc3AXhVEVc",
  "key9": "5XX5XfgXYait8XFrCYzDTjJLs7m7jf5JfCa7sN57tDosvYYKeq55d9maobgb7kZWFaPgjjpxLFj8XcC2qHNRvTMB",
  "key10": "5843StyjxsHCk1FP39s6QFkEQ4RxhQPsudp2hrcVkyMUGS1AeWsaG26x9gYcoxLq89N1Z5PmDcqLLCqt1aS3p6GL",
  "key11": "27yybmyrzA8mvmFwgHxFd3KfN7GEMRcEB78THAPJKabFM2Gz8qr6vHFRJqNoeouHssMasJMV8QvyRyprdCXAQjij",
  "key12": "3HKYu2fzmWuoL1v8Cq8acz1ubYtaxJdnye5ZikKLZgEsp7bWYrCzRykio9QjmSKb52HPSVUBQwsZFkrktATkR548",
  "key13": "432YG4QmBm2E79kGSbYy1Lr2bdnYouF31FDY9uN3zyFQi9QoU3sLs1AvxSmFtPUmumNd1iUoJLkqD2uXGqgDn4RH",
  "key14": "4JvofHt2ULC5YAsj8g2GRC9Wdp1UwkKDd4Tnw8edp7ahw3QeB92hfXyxHiLdEw6L5EdYvtHEjTD6rKWZHJkbUGbd",
  "key15": "2zFf6ZzSCraXWoJ8bfYcpAhMLUGg7P5ha8P3En4bRRKGqQUDU7MnQJt5JAdRtQ1weM81PhGGmwjNpp749UqoPmXu",
  "key16": "5v2jiSiTJetxnuz4X5cbWKnnsL1V7eTa75FiQQqVcTC4Ndcgk3oAnp3RP41nKnixxuXrswnuLNFQ5wiBDYGNNnJ2",
  "key17": "iiL1STpBLb4DRk6jiJZRKd21N1nf2a2hPSpaT4Vzz6orTzRaJxpFpK9m2XST9saPhPNE9bTmQ1eoXbSbMQEFKNt",
  "key18": "4JmiYuLLhmm43TgxddpkLQv3iemEE9gB4jxtSek5FUBoReqSX3RWnVXiBk7dffyUCQKdGN2vurbedLwbbVq8Zf75",
  "key19": "5dLBUeUYsEZJyy1KXz8JxuURcsSwDcftmei4iLs3gfVeuh3ZHXsP53THUP5F8vuUTYxCuYntb5RSp9QiD5Bw1iPx",
  "key20": "67cWQcrVtixg2KAjSTzBpaQP7fDDo8gUASqr6U64KwGSwbo6uDVvvN9ih9ZkkEz5vvYwCV8cTYiRS7DsZiAfP75A",
  "key21": "2XPo6vd3UNmEG7etaJT5ZoaNjeSug9Tyw9CTQjjJPrRRjx5dS7AqsrZYWbJeo9XN12B9ZhjbMd5mj3hsEpLSgnGn",
  "key22": "5H6BWh6wSR9tpPggvdcCevaRnUUW7e3FqpTCYoT989MmE5uywWN3uCRHGLuY1nQJzKtTcZxUR7krWAvohipsva5G",
  "key23": "3aW96rRCcqnV4JihWrurYydpAADNY7Grd6fVN5Fa7Fr6TeGafMyJDvT2Y7QraAhZKsojgyMmSPNyRNLfNvLib5EU",
  "key24": "3wo4cmKFX8SnMZ34k3iCGdj4MJ9RHaK57jfhfHAVqBzPzi7zPpDaGww4rmdXfNVWfQFeQtYgqSBN6agcskEyzMtD",
  "key25": "39wpMLYS7V2DM68ABhEUi4N8DtsrJfspTz1bT7TDxy4fiyKm9MvkyXA5sVBfGVAkgpieMRcywEMjJcuCzskbkrEs",
  "key26": "5akkU84FE5zKpT8rPHeUaPHRt3jyrJVAWr7d3tg1KJYfagFHMAt9s9on2a1YuRas13seaqSNDQjeFanPhNMMSwm3",
  "key27": "MAGWfTxdKXvQGcZs8ayR8vA7uPU6mqCCQABH41eVRZRiGYMuFxa5eWJH21AN5pvkojhHpeqqpX3sfAbPbm6vUYk",
  "key28": "5LDTyzPwHoChGR67p2BVSgBx8gBBQVUA5ngUPapojC3nXEtRqH18McDPrvv5VeBfLV1zjcbgJUqZYNBpCoJsjpK6",
  "key29": "2iZvc3QFqmjKeRZF967qLUSFAxdqJb6e5nCRY3DMiCoctQVnLNbRnhbucB2EtW7We21wTrYwW9qa8fDKbsybzrfu",
  "key30": "2ZtYDKz3DF8To8gn6UhfqHzf7nrrUWw2sPKVZwTxxukJVprwawyp9h4CHAUYPhQUuwBaRBnz8nXfc5me2rsz72Et",
  "key31": "3Uev9dh7mCYwGE5an9ptbA81o3DczyY4AZDi5p5jWT6Zn4xnYx55HtKVxZg2CxjmDcDWmw95sudioLeodYoEph4L",
  "key32": "4Uw5uV18y7DoJ285crcaGGiwhH6p8cRVUQ2mkPAFY4CqmUmb2S112vX7d1HbW1ZqFBKpSzPRKYEnByzTgoUHZwQc",
  "key33": "56XMsKe9SLiDTM3Q4iAssxJaiQvEPGfHuFkMEHQNT5jiLL1muKHWxh7qbixSF1Rtcxn16TK1Np25mE12KLVjSYq6",
  "key34": "3q91uVHWJad9zfk4z7nytjBzYLnUAkQYjF971Cb6v1cw2P9VKgUe4wZpaKjiZFkPAyb4G3Yt4Ygp31UjfjcsYamU",
  "key35": "55VKH1ayuzZsCtfMrGn7SNYgugdoUDciPDvZnZ4mnoAE4TgL2qHukZkjS3ZcfdhHfCX6VqTGmvm1JVyX1s4Y1U6u"
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
