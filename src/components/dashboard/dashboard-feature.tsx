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
    "66NLUXfBWCjMpGQxtzUBeWtkx98xGPtBAXZaXP61xWAymv15HU1s45figCNUv3eY3GsMKbQwsg9o5AYi9Nvt5et5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DyTQWrH57oGg3C4rw6wny9cviR8vD4scMiUiLYeCNMvTDGUxzs9mrNJKWgrHXjeFwbkd1ccZD7kkJRtXBuPsMd",
  "key1": "3XdKKfA3JMHjFpu7rtYggteKr87HUbT67WsvSLDkXeYSp6Pi9xpqUEDqMBSCqVcdZgdg6xCkhLt2qbrewc445WBt",
  "key2": "5JBMY2CinXFbrA5JWVdtYS7yMxqkZARu4mVhNy95Jpi8KJUKQULkm8KCMxt5SsbsbfB8TtuhnL9fZsp213bQ4NUk",
  "key3": "5gonsHkSXDdFW36Nd5Dc2hRJRCMFkPYa1JJj2tngUBKHg5wAs88fyV4bs48PgMVrL3BnDtKD8arGZYzrXsyPucDF",
  "key4": "sgVck8vj75nPdeV7RLJP323hayAtAJq6NdfQZzH52SkyCjCRkZAcRd2RysUxpWaGqbrBpFkMA86oqhJ2wQcBpGS",
  "key5": "3FFST8kt1nDJuUKGbb9LNBcMKUDLMtmv2fbNjugCp1itH8h9mQbbnhyRkekGJzzgc7RfefpGW9yTbKubMbL8tZqf",
  "key6": "5hndimfkQWrsGzr1sdkbwhNrGvKCFTt2vjuEZaQz57U3qEhodiMu6DaBazapxMZEyYzfFCjY6EotidQjA3nkA96a",
  "key7": "29JKiDw3c5MvYbDdPpqtDfaaBuNjbRSFoPaoca3Pq4TvR1SwnY3kvj2rKL9g5zqRaGxMzS3utoav36VFYg9C7Ns5",
  "key8": "5jtFtCrEVuPWC8vyjmDNmykjcQpqY5nUkwnLVtiXqZkaT2x5NcJNuaFNkFohfQ3bt6P3xdKZTvUaMJ1iq2xKS7Jk",
  "key9": "34WT2zG9X8TnVUF72d7VCFDj1mzYBBK1CcAWFJvAmHsEMcUwvKHf9mat45oqaZ1kt5WCn2nPeLRJf7N5EEwvi4h5",
  "key10": "211FipQNa7EJ5C6JN4CQ7SXbtRFD5JXNfK8vDGNPxBxhNmDPFGRqMpW8aCXruQHKaq1MC7nvWgnYXvuC38NKugMU",
  "key11": "36CnGsUdG9neM4cxcYdCcvLGWzCqaKUww2Eh7t3vfQyiEtPZsvJtBGruduGfk4PMqWfgjXHeiqRg3bJTUt63HqsE",
  "key12": "3Gg6bZG48YwmAbTt2RK7vsAcdVdyHZgrN3eSUEeRu5KHyLrYYYvQJW29FSyZATC9aVaFBH4pBVeSATsT7kw26gaB",
  "key13": "2X5mWwoTboBfZKWiCvTTBSiyKu2vfsJeK4YvYLiwvcJB5gVCUEhCXBZPwrbG91P1q2cxEar4iLZyFqTfq8uBXsrD",
  "key14": "26XVLbJesHASiN1vdyCz5bWqaBRR1Zr1La3G2BqdzaVNqjbogjqCwG7k3Nx5hxGoE817NTdXcUEeSg6HZ4AKA5YW",
  "key15": "4cNqepCEqBm1EWCX3iHqPdPvWkPTdcWZGx4edkQJr8mFbuT1dGbfLeTziCTNdhLKhJxC5Fdm2Sa8qLekYe8zpKN1",
  "key16": "5UGqo2bitCB8G67vfBvfDuDsRBhb4TnVdFUuvuaPiXfdLJW4k1ctPxpuWob6eBMECRBsmCWYgdzovmHouSmrtmGx",
  "key17": "46xcJieDJ3WQkozKdxa6wkYowygSJdsiBFgvmCfLWWngQAEDxtMihfQsZcRKFSS2LLNvTgbVcwGe5Bv78erXjrzp",
  "key18": "47QKHZmENGDDm9Enc9CP1FokF8CQX8FrnCT6TcuUWxu16Wzh23AbeAqojDSx5QgJMiLSpDqF6j8kv22HznDSfKcL",
  "key19": "5RNAPSkgfNBpcS81b8EhM9janqvNDARiFZawZdVusSWdC95K9U1YhJXPGvADLHYbWYGrGoZx98tufdfpJaMBdgFx",
  "key20": "3jdoHr3SV8U91hZWhUxB8o22Hrwn1KeBbq8ba88Vv4yRzF6CW6Cb5A8QsDCg1HM4ZNyWqsYfqjdwhYfz76sFq3gh",
  "key21": "9oWmw2d399bb2G9jJ1V9K7pLbWuoKZKy4HNgdXz387s3XtJTZGKFwoeJz9aSGYS1dpSn5UAjcMYRmYpoTRMZcDR",
  "key22": "3TEqbrfF6cSmPDWjfgPrQP1WzCjSkayT3jBfr1SPV44kXGtVhiWqY77RJYZGdzHrtm2pkiGTMLtzk4i7VWnaDpEG",
  "key23": "4BhVbNdyDszsRYtDf5LpCuh8sR4hUEVMXUNHjXQW9XFXuJyHs1xmZr58q45j9k3yRe2YkCBqXgDUctQdCuzib2kF",
  "key24": "2bF72VaxtpnGHNqnV9rSxjRuSd6kR9FKxQtQGo7V7w73D7B7NjX9axQmSZgR7i7v3j2qozCszqxqPsMjdZX8DwgV",
  "key25": "38xvxZ3teH3YumLBmdfPDNdnASq8Y5oC3gux7e8ZxKzREUG5GQnVDLV1zoqQzi5Dj5tViQDhvkjMGcgxPmv5ShV2",
  "key26": "2ZAzbm9k567wqWCycJ64n9tBW8qA2xbENzTtDUXQ7eKoB7dnpMSY5btJPigp7DBTcmNXQoLKUL4dZstmxjN78LQw",
  "key27": "4wk1okb7tQwRztA9JZaZr4zAeUud4JC9WtpMYZkDW2sAdNkzZ69zAyAo3vwDrjtHRifStDAYcdXjVP5A91s48p7E",
  "key28": "2v34yJ9ZmutHe8eck9HdekJKAV1vHmTzhZf2JezpTAwLpLyb7nkQxyfAQ9muNuq8o26BpromFkvAVTJf5pSwCj1S",
  "key29": "36eqGp3qLAdhtiEmGd4dak6LNXWFaN6C3AeJBkwBq1pbqcmarp2g2LEBbhM7x6R1dfv1m9qxr4mTJSvRKk68bsHi",
  "key30": "3eKHg7TtzgR7qsD8FMfUseqQUpWc4wv3iJTqsbN9M9jHt1WfXVXpzyL4cCN1ucKKBeJjYLtCFeNME2YpxaUr5jKT",
  "key31": "3ErnrZJt59WTBPNS23yXggCqzhHv5un5hvQWZWfzwuyFHTcRM1gZpkSihJLqyyGFhqkn3fwqaU1MyC2ojbCNkMPE",
  "key32": "4qsnquKYQLWSMMB1JJp94YFN4sw4FFtrwXYQrPzwydnpTxSNxoEdN3w5zk4i4PNPx42mk52SoLjNC8wtr8eWW7HX",
  "key33": "63ifWzayFv8GeYgVPqsydbhoFCB7jRZgPahtUc49JXcFqmsw41p8MNQGntXHkeB2uMSB52LeZXyD4qDstwm2v3e"
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
