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
    "3Q2udwyGdZ34zNVuFc7shFF2aWzBna753KrMSfLUm4TKPTtQjhcPzsTHnZk4gb2RQU4a2SCBeaKHtxHez9TH4gde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QdqAF4DraRwhBqitKSELCWmSiFPAaAAzEHqU5FE7mrUj6Ej2GMJndaXBAp5sRG1gfBrALDQEnbyNUK3gfVgXwUS",
  "key1": "2aSq39aMA61JEUKK6ijyrGopHYjM2vUkag5vWeMdjStbbx3yuwTwkkjJcFDHMBeSgKC7oG4bQ7Ct9A5JXuoMM86q",
  "key2": "4SSEEJokDGFGTSwhzmnCqqXs3Chvgz6xAUQoBy512WXmQ9bd2uy5CPEMtyRaNsgPyo73Ssh8pDkHeRDg2ABKzLre",
  "key3": "2MzTdyrYbG4CeaM9PtpcAdb3jQk9MJHTvmUV1bxv7uwatLTQJCnx4Qn78fUeLido8xnioao4nKiMfZFu1rVxSBms",
  "key4": "2p7i2xVPt47AaoXvDgohJ5XgD6UH9MMUB9vTZrPD8cbsQfGD1rHZEqWsFQ44aGzdjRiMqCY5mNNoXkqAxvmqtpKm",
  "key5": "3UZjVyWMSELfEYqZzA1Mr6FzepX25XagusRcp3b3EiMbU9gJ3M5XhsLWxshhYQiFqKzqibuMokE5v8J84nJnCMM1",
  "key6": "ArcRCgBq8cUYqpyrPXrpjXbPxuzD8aNTF4PXA7q4a3qVGrtFuqyDR9UW3pUgPobgWt7iKMZjtMgd1xVDBtqfvBR",
  "key7": "1YFp56Vzzk3Xo1pvxgQfag9UH3m6dW5TH8CjNg7C1fzqTVsagxV3ifujfTBnyDLHpxy7RG9FpFQFMtEmWJrqZjA",
  "key8": "5mQtxSjm2EGCv3b9oGoKqvCsAB1YZtrT9HjwNJWJvPUKyQhkbdLEYkzGWGaKiBmuFTwp6dS4GND3YJHjAVCHUskU",
  "key9": "24ZSgfC1TJrDRnXQw83mVWSrHLYNhCzzn11kiqJkVtfUT2oDoS4qqZhBxJp5wEMuhWVv1sLszXXRiQna91GWxnwn",
  "key10": "2RT5am76xxb3ccCTXDHaff2RJDUYiwGRXYGeo7DDpkrGUQmdUUbMbRZjV35514vpHQqFvYd8H1Vk29HRxHN1VHTf",
  "key11": "2b9qQqLrgTYgfHZEjSgcjLguom7hYwtcrU8AUdf1iYq8b8SAWGcswkkD9Rvfa6xPJJ4NKB35kYDW12VvWGizD19J",
  "key12": "ZwmW63MrZ1VPKsXZLrU6HnmhKeaWqaBPJXTzVJnCb42eJ1X3ohhPao4LG2yLrUcRMNDWmVGy65sRMpke9RmERjk",
  "key13": "4ZNQnPEVSheWwaVQHCyQCnX2RUUKxe9rUJbDB5uuo9dDeghUEP4vJJxZRLQuK1k7REWgtqFQGsZrUbDg6CjEXSzv",
  "key14": "4JoXDCQHAHg2T1iuSVszGjUwfZ8hEDBkxsviyZWkaLRkKZz5vgP8XqqFxFA4NsmZ59WFh7U71bskE94MEYDjvhYc",
  "key15": "424oQh7GZjmrbHR9ELMPH72nmkPYB7nqSaPW4Nzr3fkLgQkJgWLFfr1HTigJWSRpHy1nAsvwVevLaJ2e7RRCcbjB",
  "key16": "3pjqUYjDodfUJpuD2wZVwJJwP37ysf5fru4WSGDNqXMgX1Vjy1RU2adY9YSVDAvUbBog2sV8oagieR5dfEyympgE",
  "key17": "W1Dm1o5mZcQQyrbAd1fhfhR4BYA3mKCKbougX7TbaiqEunwgWb5yrEyfway7SjoDkZYYnAeAMubFgTUiorfvpeJ",
  "key18": "3B57rs53xFAUyDcC9HiVt6xzEDJyRyx6kvR2BsmiXD4fysHiWVeNViCaFCKuXNwPs7v4fe5aiCyTK2ScvdDaCcKV",
  "key19": "5JyFkZATVBzPu4hnpQmZRedd3rB1kva3HtWxXYZQgvsMtRXZCFe3btQoimC5GqU1bWV1qMLbXPRujorxGcDGx6WZ",
  "key20": "5qCD4GKA8rpq81hevBQvg31MpeDNZ2DYGCCtNJ4PMvfL3kWgiehuHpHnkvmoYQUjLVa3ArhtA1QRthTrwoYtdoGo",
  "key21": "4kQ8ZSQf9eNDnASimp9gVsYzq9Frqeu7RQ2K6ECu5KAGMEaiCJAVZRovRw7npmyguaUeGyrhBxJjEWzpj9HpZNtf",
  "key22": "2f9dy6oNDFNPt3DtZzpXfKQShPgEDzNwLRSd3BWJkXNYt3LMVBQ15kfsAFHVzTaxVy4NrnUxqGQiyCxbycDt5oFn",
  "key23": "5FaMbmQpPW3KKGrFgJ5AMzELsoesub6PgLgE6YYkAFfvnZc1n8dRpvumg39r7qHTt5D8qPdciYZU1KPkK9Gr7QFp",
  "key24": "67Cym3ZapQLwV12NU39YysaYLe1Swv1NuSXRkimjUtadLNDkHBF1y8v6XUQTtQETjuN8jv7KtCcHKFfdR31zB4K8",
  "key25": "4TWNT96ej5ATavz5yhDKPczzS93pMQzZBbc8tZgBoqbbZh5KGGJ3VL2dvRRvkC2MKGP3L5UPg4wSyTHPr897CibR",
  "key26": "5cp44uGuRdUSHjvG89QWN6tifs7aCm1VhxEzMjGAk2e6zUkHp9w4EaomgjJaY834sgUg5fYwqCt4MXMBSTFYCaet",
  "key27": "4UXUBWYpPn58gMKtUfQzQobXjVQhkyyqtsNxGo71HPSti6NbXCSQvB4L1wBoqbM51fcQrXSqGPQejhZ9pUATCy2W",
  "key28": "ejeFMqo3KqcBfoBgqKzwQSyoyoP7hq4ztLpipdHTqb9yEhdfCV7itxwnAM3o15fVPBk8ozEUmN4ofWBJHcRWuD1",
  "key29": "5X7n2tAzgMCHGx47k5j9rZMcyRjysXksJWEHuXo1DNgK1TeXRHGLxvromrhM2AJEB3eTbYQzyYNLwuUoGzScQ3bg"
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
