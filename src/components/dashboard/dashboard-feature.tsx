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
    "3Dj58tw7RJwYMamLCcjHgSiuLF1sTboMvNNNVvDGhR6pjcgbrXVRqKAPYYwatfhWEeSdrb8DRSR5hfX5qw1J5JtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yUykG19EtXmWuxj3BRzdhwtUQXMQqDHQ76X6b9tgBzCriQHB9DnnxHcUSCdMCtM5qoQ5jShPDWdKp3BWQWdbBdH",
  "key1": "M6Jpf8vJAZEbxBjFyvx65PYjKfAsnwGYbLq6BRzqFpcR4RZ95zo6gQqbEBcwGnLu1aj28m4TjLVXba4FUUCMkKo",
  "key2": "43oMXaCQCPUfDJCmfuwoaJj7Fi8SzxwmVt7GTxDVxRX5TZKUzz6pxD8Ubj4qJYCvaJQa3HG5rYDWsKRujcDS9DGc",
  "key3": "ZwZqP8EDqU32h9LKBdvboDxHxWhjLEyJae7b3aHFTQWNVmHNMosfRiLrUwSLvvyWEp648T5r7S7dcwunbtWJLmG",
  "key4": "4n7hXDcHMCaMySWaqeELhoj5LXsRE8yQgmZpZHRxieKK4Q3RXdxRuFQUCWUTDmJuemV7nhdmBmdeFpmaQKwsBGvt",
  "key5": "39R74GeQMqenroDsKP2HaVMfSAiieXuRoxn1k69APTSyRLJ7gmwpD9x98eaSHwSuSXrNMkXwLYaGUQYBsWKo4TXw",
  "key6": "4i1NbqJuDJmNazV4hy8ryJjfUkrrDCYxYqpSEH5F9i3Pfs5fjxeitvKdZK9MeEXFu3Y8d1VcWMv6qXJu3G1nUzLX",
  "key7": "591cRrkVbGFfxZWXJ1ssvi72KPKvkG1NWZEknoXsPwxdMHsh32dEvK2cKnfUdTAZewiG8Y3KGQaBhKQt8UUZGHp8",
  "key8": "4CAmbFknDntg9X7rkTawtpo4e1C2vpMJwW3N3PDdYHEt5Yd3CgrZq4SXVZNakC6TVpwDJN4xUBgWei6G9ZrFXxFC",
  "key9": "4JWbDeRdaRXdhwkhmcUYhAqaNWMWv1YQUBwAnmLacCd3QVR1TJuMw15AqAsRn1vHZvou8Ck1KqdwwDVhKGmNCkvE",
  "key10": "2tKLKV5QQy8Xx1rB4daHEehR3QxbV2XhgkD7PncEpKwEdA1fqwtFuXR2NE1nKazD8p9WCJkdA3PZpvRXfrFpCfmp",
  "key11": "HrpMZ8GeBLbhcCJxpeVuhhLzHbYqpj7ZT947BybuBqfhYqMk7njdv49LYzEtS48bRVFmuqjjK555barT5hiQAGG",
  "key12": "3R4DBJcQuvcyA6fhRrpH2eEboRb1FqwbfWCzsWkoEpEMqbr6r2v2n1WvR6aCeELgvLa7zLaRpeiVZ8MXvP7Yo5JM",
  "key13": "2xsNQjkPoUCy58FEPvkwruXr7MJWNzjdKedtsYNzakxCQtH8xzgGR8KpirZfMkNPWUTEVhFtFanGNRAznicNQpz2",
  "key14": "3vgnbD5UxSxH5Xmc9QEUGpMagx5sLLb5Qeb7moX3vUNBMsmFtzV5eZonQmmT6WaEfWGE81NWTD75S1a8QHVwZatg",
  "key15": "2bA4mV2rMnHepAWXdfuTTyATJ9VWXQYUZKRDCNwi2MuYPAdgYF7kcb9wDtQfNPnaWofKXsRRCrdSC3xPzkrgEMVQ",
  "key16": "5K6axKXDY7VWRrxDQALYdYw27aYJjhNMMn5SR6zgQag3XKDAMsy6zUbtVveZrzZ13q6nAc2vEGqFpyy72zkBRgBG",
  "key17": "4wjVfpT15t4DGDNS9mh1ynFBRvLMnHMEMNEgXwo2T5Rp4kRzJ3h8KDnNLtweivN9w9uPGWYK61fWhAz7qqXRUFK8",
  "key18": "2q5nT4SWn9dyoxVG6cm21JUxMPvTUGSp7BVbM2fKhazpi6mTrJScvCeJERvySM3JNnD3CVVN8MzhDpivqEMbJSLa",
  "key19": "3zRwgku8QBitKFgnjouSXQQ81KN8dnHVfKAeP2dquJ4CXbq2g2Re9iUVVH4tWcurfSYNX8abvfrAJqtBCYtzQkB4",
  "key20": "BgFnhViMWezevTYnhqcFGJ27EqTebEKLKL2H5KXdsREA14xDziphAfCLzwsCi9Mm1nhuCUC7pjVxu5hCdtXCvNV",
  "key21": "5ZGdujTpRGNRyNDJqbNHm4Mt63ZqMDVw7dKYnZ3cFrpfyKHfD17kG1ojHvUWqk9aT8mwrT2oWavUCKdhdgXq4rDM",
  "key22": "TP5X3t63mau79LSfSKTM4R5Q9Dn61G9NKu4ikMMYEYXWRP5rQEvaFqZ32gMJB8LtEPYjYVdbDiiPEFqgjKvxJhw",
  "key23": "3bZb1bbvYgy5Jx4jKWfiaW95bPVUev82CVVCBCBy83vetxkDR2GKewxeWF5QAVt9P3TsNiC46n93KmjX6tBC56mK",
  "key24": "592FHHyFyLWxyuvh7dqRQAM6psNzBFEg74APpzLrs1VQ9gwDt4dG1f86prUbCyBhSg1pBEWjBP2JxMxqRwt4WvJb",
  "key25": "5YcpZs5xw86bUPAvawb4CYvq6CB1n77WjM8nyzBrk3xtiGNPzdMxEnEa19AMq8YtQrJZoDbwVShUaZ3h5BFbkqit",
  "key26": "EX3jgMR67W6JL5W8XESRAgyCYhBLAzSQgiqRt3VnBxhbrShSXC11hAfa9qqdfStBmgRdHuM63PvwVKC6nTEA3Rs",
  "key27": "4bMV4V7Q1Kk3dwLF6oS5QAD5JW1zcZ9H2xjEk7S2863b6npVcMtEiMLkffrvjckFdZKdQPpsvJan9CM1AsMSRVLs",
  "key28": "3GeMWGAotK5QWcqXH6WJWVvTyz72j73t4UxkGy3kRLxGCA1iGywvtcoPZksEeTUoSB9se7Hmp96Mfd7TsJzXDBLw",
  "key29": "5GxkZZSMCx7YXJSZbYSUJnePSoa7sgooH9eCTFV5VXvLuWL7vvmKCzCZJLmZfHzUmcukKZ7k6gQAUyhUKjXCGfdB",
  "key30": "FtZv4oeQdWrup7YWouMzJy8vhd4HRkZVpq4Tmi6cGX3yN5P3vc97JoK1AmrQetJ5s5HhryW5KkWxRJn2ZsoJwey",
  "key31": "614qGwjJ4GnvUJcgVfoZYgjUvHtBhGHdoqgQMfkAiciz8LMXz1xHYDPWXjx2FgL6v7j1WsQ1jBDQR8P5dukYMEtH",
  "key32": "3vSF2VfM5CpPmhWno1rC1TdZpsqXKjYc1nF5PzfMgN6oyH9D8kgPnrQQcPfkWHDCdJMpGxFiRDZSxW2gCEErXNba",
  "key33": "3nGLH1WaP3Wroqpris5Fa4DyDNk5iL62AxXPntLfDGK1zyNDzqX9A7JJxCC6vv2bdbVqzBPWrFnSW6zciTztTFA5",
  "key34": "eaHw65uYvdaCeYqcGjNNJnyRZpoC28JkrRRXUzJR7a5XyLxnMzrfKMpXMAXDQR46UAuVnhVqE2qEzNGCw8j48t3",
  "key35": "5tqwgjQH93wayaTwW43wnJgNvaVfErmTftiiTKCoqXTBCJZjnH7DUvEeiCEMUVW3r6XFXN6UKmHPdnVEfgEjBPR",
  "key36": "5qRcnY4PeHwpEqcZVoWxwqiRp8Wfk7ZAFaw7QQoPnuZbphf43g36YdAsuoFoHZ2MG3gEdhXKQK12KFgPkicaWpT2"
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
