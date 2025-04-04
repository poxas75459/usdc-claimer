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
    "5EDWoADjJYeQSbX3fYHvBDqLNnYecaSUMMHg444eNMphtm9kB82yroVVzthPh94ALabMRNde3TVf3b8LVGSM8FH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U98h3yVibKewLcC5Z51JarSm4MKxexrFRWEdxc3FvyguBQGNaaT9pbSxuXgHhxCbkEKsjaQpDJ1tw4M8ifU5jXo",
  "key1": "uHY1qc5yhStQbzEBQmeKCWkMvKZGHQXkoHhCN8p1HZ3CFLEKgLCKJBBG6P1EucD1SRe8RYb54hqqu6M3ceVfW8H",
  "key2": "5ThvbGFmQUSK7Qw4QLiKL1NoziDZRzicBzCZ87P2yxNSzb7RJTWFW5Syv3PzsUQccHuvfoF89psyZ5eQMoSbrtXv",
  "key3": "2ThxWjqbxDyiu1CVhms2Xw9guputuJ6qGAin365kfBbg5CRuWrPQVTVxhM4TgnL942T1nuhYWijvsbYca1ZL8rTw",
  "key4": "3z88hhxrULA5PvrzqA7Kj5D9ykjeejkWqtGpPp9gbcFweVc1LKeUvHDD1aDwqkXurVnmqtJakT1UterwA1D5Hug5",
  "key5": "34iYP2fsGiVUGtc1LA68nxLbhJ6QtrdRUdiAQufrcz4jguHt9osThcd4qCh9Y5hexdkfs8ExsGNRA7W196wntyKM",
  "key6": "4MdKf5NcU3iiDqocpPRe8dUuZcHEHFhQc89fEMFoYYxsnKZRifHQjJcipnDBBAT2Zudraxr5p7tP1GMfrW1AX8qo",
  "key7": "4biCVeej7vJ4Bu5GPuQN6d8QrJXjv1byPzB5dZpGHZ9fsaUqgjq2KktvfTC9HQApWAd1dhCgC7SQVv75yxNRUBQX",
  "key8": "Cu6sPFKHJQzbfsR3bf9jzV4T4WP2aDjSWUZX8v8nGt6BLoFZvBuaoyEv1Hx8EKC31g5h4MXXTpR3FHqzGb57Zoq",
  "key9": "2WFUwJkRcGRfZvr7dYmkWba8uxyi5kAQKng6pkBpFJPANvnmdSu6KUCiiQSxAvXKfpSH7Sx1rqUMqGwdrQ7sEEki",
  "key10": "4gG81GvXC61pLPgKEXa9T96uqf6bUGEAbQdY1yttJkm9mL7iHgUqX3ANicJEyzr2enb8ZNDVriMPSYVS8jyt364L",
  "key11": "4siSQhCEjpRELAvxrG2tP2noY23u6qTgqZmQz7LN4dym3PHhnQU1ozJZuWpgB4vXVmuCvVpsqa5iqDCTur81NWKt",
  "key12": "52g3Dq2uttW3kv1Ngpu3bwzk5nzi9gxkJ1gqQ2Sd352WryrTURJnDRnrDsdb2TaZYPxLxfNBuTvxQiDYWfzxbN5C",
  "key13": "QfgSXRdaZ7CbtxxeVGvQrmu9KnEbcXaBnjzBhJaZnKgSvvfSCFFQ4YNhePXF86hFVyvqjK8dhVZH2qUAaNKh7Mg",
  "key14": "5KMxjwSzRW19Cta2XzxJV38Lih1EWjGSYcXcoSrBpR77wcWrM7vXcJHxBVyXq5p6qfKaGYQxt7PVFBYx5HRP4mVU",
  "key15": "J83wGaJ1bjnyYbZa6FsK4Y4E7YbZ6XS4Q9ZZCyijbjRzW73GsuJXciNDZJvSHMkz3qxJ74KRM8CQqsfS11RAPJf",
  "key16": "rKJbnyVCwt1ghAaSzGwRFGGWKjrj8Bf339MDiSNVAw8XLmQH6Umyymw2Y1AjbDuzq4JtxwKJAiRqFL6pP5sez3S",
  "key17": "5PC2DLQ4M6gC4RyR2c3y7qsAy7VXX9zJeMic8aW84TF1Mjnvqww1QJs5jzy45KkRqHqvvJfFCpXsJbUdhDScD6Cf",
  "key18": "4nVd2MC1XzLaQXtmMEvKZexJeYUr3tordeFq3xfg1GUZL79h8rcchXEJemL8Tb6eM2AfrvZWNjNfuyyenPBU8jqC",
  "key19": "2YaVQGWpgur2DXhtLL3kejBfU8VCx1yVyoMRFu5jrGJ7qwVQQRuhzUE4RxFbVATBhtQDwQT9jeYk9XyeFbXWw8kP",
  "key20": "5SAexo4M1RUumfLzWjz8eQ7mWdyNnQfFnkCBwy8PxXmrDx3mgjCFZNN53vwCcQ5vYSBkvC1XWqaCg391GrmS7B7H",
  "key21": "4cc6cxTE1cC6zwVrWjdGANcEBDuXvP6bnLEwZWvtpCnMcrKRknFRinTsbX9QuC2SVBbKHiFmzLYv1n5W6bD1h2WL",
  "key22": "NHncfNMQN685uzJisMkHW922qUGgY9nCPvcLPuSiVbTj5Q6DwAFCrfz6BGTh2aJrUGmWsKETzmNmUUv5HgP67cY",
  "key23": "3LGXgKyHwXZ1zE1eBBynAuVW38uXFRDRK9MP1FPc8HkcyHKhbmrW7GeipGEDhywSz5mas5KCPdqMsZ9r1uUkdJHj",
  "key24": "Z4CL4q352BMQK7mvBTv6hUMYLLkR4aYNg7Z5DKdi4h11t8PyMqUcjdcLWiUXhgeg3kLuAMYdpsAVAMVGLESojeJ",
  "key25": "R8jnA43QzfWMNiteGFS3f5TKKvNkZUyQTLb75XFAjXzNnMBu3ZUrC8LBS63AxNJLtSR5t26iAKoVjNKjiZoJUkT",
  "key26": "3ZpMn4SsBmSfytbpM1k8zXJcGzeKDZE8ycvDBMz85mSagEEY6H5r1XNCZ4y1xRwRUV9vxdTYYuSx8ScEjNyaLg7F",
  "key27": "2oiKRBRnGt1kYYgsieftRDYx2Z8T2JCtCQUq7npFaPeWWawxj6NZNnrw9qwth4XhsfYFoYnXZRKZ6W3Kzm4dfvCA",
  "key28": "3kHswpxGDTrDSEDksmAkP7EL6X28ipSuQEXNqbBDu3YqyWawH1z5zXT4UEHVyZ9n5kxACyqpu2XiHP9H9H2JrhhB",
  "key29": "5NprMrSLfBvDiCJmrg3oiSU3cWtYRRA7RCAgSm8bfGMMWhCrFb9tNcmbv4VGEU4ay7vaGcRihLW1ZcoKwbNg2Fdu",
  "key30": "5vyqRk6xpjNJ8JPmeNTDRigCtAb1gcTruz81zvVJFcDJFNsA12PpXsnJddwijViF3jS4AetDNLFMVUDBtc3zsewx",
  "key31": "2NXyzCyARukqaBeVucFQH52Quzb56BjTstHBsPnrWyh12bUup8xZPsGM5YAWnYLFbk9wfXG9YmWGTVY9bUqhHJuF",
  "key32": "jeYyHL9Wsdaxq2sevV2CaxSyGRZktx7eQZDjuFNMdbMk5VwTTqbPr989fFYQ6eTdZhDYtRpP8MbjC54jg72Qu2r",
  "key33": "3rwWE5C9Vx9USxXVP9XrE7tKJJTMvk6foq6rFG9yWXQTbruKhEuvqqgcVLwF7mDfUBPHTzLLY1bLCGTe4QwFUyss",
  "key34": "3NSa3wehJZk9a8p4oUjwbASQ88yiHbY1RjcePCAAq5V9grArR128zUZ4xcgdYMV17BN2qrMhfpESJ2dwLjmsAzYC",
  "key35": "2hURmSym9mSKAJzBaRLfyzh48zXeqmFqnkdiyxZvy8171ptvPDLGLWSDb5oxFawDJF8YuFJhbjxvLU7ZZsLSgaXk",
  "key36": "2AMNnLrGhUgzNxEVmNPYKo2bJa7te2VyGh6wSBjiMwnnsr3tqnP6SWiXWk7TDzh8sn2skVyA6rdBxkiuZV53Bq1g",
  "key37": "4SSu9d4rhEJHjJQFG7LYf8C1eopLEo3zBCWbSmxTJueicyXqvFCpkpE284ywBaPrPaczaNC6zpd8XM4zWBzvJf5F",
  "key38": "8Qp86NsrQx8wdBZJhUy7piiD4YSNUGV4nmLCk7vs46qqEXjia7TdXegPBB6xCmUR8s7vHJ7ukXyv7ozcFehytLM",
  "key39": "4zEAxGegmNMJVB58WWL94vsneAuAo9XhWTEeeupXWHxRrfYsFt4axB6XVuXhoEEnym16A3sS4S953cZQVAUG6iEN",
  "key40": "5aKyytg9PxKRnaXUJvcKWSM6woqy5qwkKDEXi3EbxXRK2R9yMJ5awc5brMeLGgxfvR45tBwC7CZ2rRzCMKnZnHMg",
  "key41": "4UKLCpFaA9pGMkLQqSJVXGDotF2xEuXT7urwiVyysHv7SPfZNxNkMToXD5MXVC1XyMsfUUd2MCe6cm7Yr57xopgg",
  "key42": "41DPAweYE5no7PSRGuzgAkGsgAnRKXeE63AyEEAo3D8Et5aadfkz8cRFi9XJjob9Lck2Ycb6GoDETynDfsv5izYd"
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
