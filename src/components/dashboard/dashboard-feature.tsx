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
    "4WwTrwU5Uc17gkjNf7DDfysioLWR2pHP5FFJXo94zyVKV7mfioTM9UqidizZN6zNhfsxDB8rbcYpDBiksP3xazXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ma7mNUjnfzBnakSPP5RQXSavQUEcveACvmGHufN6qFtRos6HSJ7LKDNG1VJZbw9hNbVgJbmVGggX3uH5DAtXjz4",
  "key1": "5kEZsjBebtciDR8c14M3fhjFF5dwGF2Su1dab5eEwABQAYyfhN2bS9VbM4EW6WDt83wpwvqypzweL6Goj9oibjdR",
  "key2": "LfxibBemwqfPKB83M4Bc1yu1Bs394XZgsdUJFUmYvRXq95NWjYnM5DpNNcebhXYL8gBV2CP1s5oMgpoAaqckyr6",
  "key3": "2ZoB9tp2gfpUY9uCZ7fJqQ9a27FcYRRUAjmqyYHMindRe7UhGEV1694E7AFz6uaT1r1xmQkzHuhfE46zFZKP6hd2",
  "key4": "54fN9JSaCFLPAGhDENiMC1co6pQnT3X5Wxa7yY38KDTjWcSmSkpCaitDGF7z1iH41sjk55mJk8oNzz14sKF2jFCr",
  "key5": "646Fz8SZ2DrLQboTmwpZc4LwnH6ynz2WK3qe7WNFdvZXg9NFaCsPeaFfC5h4AJ6fhmwVFkQHhdwAGAs1nAF2NZpp",
  "key6": "47oJFmLJjegTEpeDPPS2jmVySbRCQFZ3c7y4qofyNjVFihQJhYTwX6awQVHpDzWhVfDuGcUZxnR24P3Xq2RuUQQo",
  "key7": "2nTaMTwzNjSSEbWYChTXwPG6qumonFixk5Bg3wc5VFn7EgkXhgKp6a59NxwbmEkZ9m9aAkQM1xGDXZwd6uzmRFzy",
  "key8": "3cs5uRa5fCYucfxCH29SZfGDS5XGMgngVDTbzMCwPpHPzwXjTuc3sDgzdHFSYTZi8c78DsrQkd3NKJWK3sCwUPKb",
  "key9": "25MSDALJKFnMQRxspVFcukPibUkmFfJZyJVFq74Zq55U9wLi5RpKDSSvJ8XipVqmy9fN8HMhBebna95MhAadWsgY",
  "key10": "eq8QRtK24xdbMjpUoFPsh53j2HVGPddGvfd57teQfjb8embgxDLzekz1tgncSFVhU5pLz65yxqtb1a1SquMD89Z",
  "key11": "3ZoqunhBTJ7mgiVNir8uQdN367umqpEGz2R7zDngJq8NVYPT4XMqdzH5zd6MZe8qU2AuyfwZFj96FX6F5PDWTYfM",
  "key12": "2x2BgZJCj1xCWmH2hkUBdGbpbUbZ5Pgdj8N4cH8114iampEJzixMYZrqRKobVMAov1qLN9ZNr838fd7SCDGrqMDg",
  "key13": "2cVhjxZk1bGESN1DG5Y3Fj3Tgf8YsAkRw2nq3diH6MnVrUpYaGfGAUhnp3McwdegpiTGHtsgBGGo3948siB1VgkG",
  "key14": "2eWSW69CsoBJycJkinxatddd6PYPio7Ch87goUVGsDiNCYebzxPaqfDxKUVe49zX5S8BstcMSyx8PmRqNrsdi4rE",
  "key15": "3f4qCzpohvpkcSxq97j2QKiDFegEcrr1ZUXkyZRsf18oruUPF8FPgWt4xJ3FQngpShT35Ag5m6Un6enQtJra3vYQ",
  "key16": "45STM6CdKRwMnbajLCssE3NyU653pN1muRbE4VFAFw5kK63RtEFxup8jMCncfy8qEgU1AqdTWZeGTsZ6zmBYAdwP",
  "key17": "LuuwppfaAx6VeTK3A4tRcUgv2LhwMFaTSLbYSMokDXShycwG79Fwm3jP8xMpTVn1BYSciD6XZZQ9CRKqx3PfwbL",
  "key18": "71oBeAo9RvsXbDHmMTLt9AzK8eM5C62hJP6spfNTouZa74NBB4Q1QVZEN5BGGW6wVwS9aopTExwHinhfw2nrZe3",
  "key19": "325zgw5r7wn5yEu8dhwzjdcuptM8Y5LEuXRzwtUXQaZGzDiUMJipmZD3tF4rDZhCzUN5ymMd6uCygATEcDNKkRr5",
  "key20": "2JAQDLPhqXFyF2vWCf1fWwxWe43e7BGVjWQAsAcdd93ntf9kRN2EDoauWte6ZU16GVwoEvUTUzwZkq6Z42jdKqM1",
  "key21": "4CmJW5WGdNXvLpmsFfuS2XX3j8agJEBUtric9okFuHx6ixRSsKdM34dqnC4jj6HmMcgzmKED5HeSEs3Rmxo97YPh",
  "key22": "4Xc3srwndpgbiXUyJVhzXv4kSEV3U8W85uAH1QaJpyeDwSebwvr8ozfJ9mJG2gCR6WH34qM2eJTr8kGJsyeLgH7s",
  "key23": "5TVQTurorvTsLHykCty7ognuex8eyeee6HuHW2mcoeBWujsQ1SvqLsK1mgH945EGCr6db1NkLsKVePCw6eY6JHxK",
  "key24": "2WYsTURQcAyUwEzg9s9r75SXA3KLvAci5wM5jMpkpVJX6MZZdYG7MHRCfWrTrF1kbTwvYkw7x6WBV73xktBex733",
  "key25": "rqqpwv8v3jXdp1yzSzamXAB2U1ax9RfHbNuP4rx4QDXXJJcCmj8YzLvpgPj7L7LTA34wy8NZi7f9vN5gB1Y2uR6",
  "key26": "3PUyxfdEVuJ1zuUEnVy3jS6kcGRyHqu7cgutohKgm35dLdwKU7SmPpb2jqQy4WBH9Wes3hpQqdPVnAh738C4KDML",
  "key27": "4mpzEtWsY4YG2MYC6WSvXMCsP6o3fYhsj8kqJ35mtsmexPd4i9SC8Gd1CJpTYsqPkJCUo9KZsM31Xf1QXzkdh8zt",
  "key28": "Hgo73oZyYwMpvSNdDRFDF9cimAcairs3geSDfHQqnJJKYrJbi1Je7tCiLLe2EDdGZDR2rgKU1WKynWSRwHWoqDW",
  "key29": "41jtvYpvQcgGrKMg7NJU8xxbZ1hyGkqt6WwqwdfJNfWCGVk239YR9syrEV5voexwzLLzXCZioVuEL2wJpAhSRkUn",
  "key30": "5L51E3V2DnvapkLPFFzr9umxhmnFsQrQajX91tfDcTZnmTEE5aiCAex6L18MrDLW2iHZqsoV1JUNtYJpNAokJTAX",
  "key31": "57WoH1roZg9psV6HWMXvY7P4QFCooPmfUJQ5xXj3vR6NNYaKb7UDxFWH2SE1xAUCSKJ2vCkWdNCbC8M36reF1VBy",
  "key32": "2p3cA5Jw2zKAKtUxs4zdPvoEuJHi1eKLNncidNEUeAaq8MtCYefoA47SJBwozHk5MYFCZPzMQrhhv2HVeWYbj6Cn",
  "key33": "4MPy4f1bK5yT43mNFh9mrGUcRSCTFSBJNkQgKXrEHKgr1qJKquAsAEK83JTZ97AyLZV3k3TDgvUQKWaSMHMuQiSx",
  "key34": "3CDGWK4nNBhBTn8j4uxeS8ftB6NLrmEdbYXFDUuoiJfJFmanm7yWatSW1cazJqBjengLRwpf1ZKebDZjmyTu3QLy",
  "key35": "4Gocu4FfQQLLPv4WcM4mxjyZ4AHWxW5c1s3t9QNF7VJgpYNMK3Fa7GLfvKc8TDPwYEuo6XBr2Wf4drKv6jpysMXg",
  "key36": "2NRscAF6QCEJwLRW8Nazpyn5GqyGn5YiM1beSMGYA9aTPapGegpeehPinphmzU2nDKXn8NZNmFt9fMQdJcAT2Q5o",
  "key37": "2jeUvHfpsDVNrS14VSAD7WuRRrz5RxU2uk7PmnCAPYgBTyWLJfkCr82qT3C41GB62NYiwz96AahUndzdKss54CLf"
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
