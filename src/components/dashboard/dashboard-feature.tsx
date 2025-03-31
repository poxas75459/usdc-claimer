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
    "3Cca9eUunWXeJpUAZs4sXrKTuwV6wY7HQLRnVvnHSPiKpfvHmMiL4HpV3tmpKiDc4WD8vLPE9j1y8pLYuSDa546J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KCVFAHoo79jE9eyum5NQEsUDESyjbZcQW8Hhf4m8nX1iS7LgP9kpf4KHysprh7QUFun55Tn6tKjSPHmPyoHZ5C6",
  "key1": "4fEMfz26UwaEsfaeMkhhT7Ufkz2CMwBstKJnRdL7iXwh3KFFaLDUUA6zRMVfuS2sMDWYLVp2Z7cd9C9uGfvXXqem",
  "key2": "8n2toWqE7setb7ghRwaeAatfSHEY4ds2txL5co8wdg2n3n4jCu9Bkuc5iFy6TeaB4DpEjr59GKsSqkAEs15NRJA",
  "key3": "2BTRXucAdAdHWeNkCgKJ7rGQ6iuFpVZagMvpe1rVrBj95ZfH2dQpA5inDWmhqGBjWqmTnAWCUT3MfqLBFwCjyVE",
  "key4": "jBJgJBmzuiBpPrW2UeUod698aPsYgRt34pNjtiLkz7HkkmtYp9QxojQ9ZVfAAUySG5RsGbYUHipHJNEdz552Ckv",
  "key5": "3ZN3sRtwKSmtoc1LkqgC7WZEPtQs7JqJCqCjpspUg8UxEnxgmti1SzyYiX68SYJddfPqwSGtXGszkXFr1qyruNG2",
  "key6": "36QnXwF6PT3dCSUcpvhcVeXD2Gqe89mukzxaQuS8WR1ay6Goxj4QPmd1pdD7VrS2HbTGz8Q2vumfdFfiJNSkgmpo",
  "key7": "3NoqgD7fvrKX1z9hETTiAAgx69UAhML9ki2xzDXxght3JcThLDhVwMZVgaYCfS2ThcvLXw3yfa6sYj2t6oaTZEFi",
  "key8": "FiWdoRdWgJzUfRcAjFXSEhmc9eoHXPX6HcwWWrjBEim3UiAzaYveqQuojHtgST151yfGU5ZtkA1FbeSVzrRj8Ti",
  "key9": "6o7HdLfsV4sx89oda8wtnfXvyPypjdVMFMoCXKWgqxDzQBZPmgSHsTpzvaFRgwWw7tFaC6VmER4asB3ARZHKekx",
  "key10": "3Wy6f1gDvE4VVXxA1iQHSBEVbEsjqsixTxSZvWVuyM8Ce9UE98fYK57qtbYoohCo2dPgi19RyjEzfongxwAwZEoL",
  "key11": "5ehiXdQU7M7PPG1pt8P5pXtj9igFUY7jMjbrHo9CnSKmv1JYm5FhGVCf73fBPSifzEeVacvzyTBHLq9R7wH523Rx",
  "key12": "3UH4fMyWqrtvDjXaP8fFnW8tUrQgAvrjCRcwgDj62xMQWKRu3bgdkXHRZCm3m5YGwVxHRZfbXX3e74No3vwRN97p",
  "key13": "4vavsAdQqtwwrNK35awpv6YuqXbTkrcTJykVAhMDNJMnqMLq7sMrVw9KkDDxzbhVErAZ7gf7h1QUcB5whVbJmuJT",
  "key14": "3aa4qgGMV1XR2LsTCQrdCVAqHtyKEehepYVDwjcfYA4KwPUtzqqZw9xcJ5vqf3UnK3JzvSMw72Q9gtdz41Xfi6Wb",
  "key15": "5XmetfP26JWGa57P3YuF4GBNp7onD26svSU1JNRFSEQDYoyMShAYKBDgotrp4esAkpbMWhX1pap8wnAFRDpXQUnG",
  "key16": "8i2fxbJANV3pYcH7VrwNwudMutwQbh96NiZM4UbbqJ2yfYC37DVCmn1DRekbe5EvMUJkApFJsD474rY48trgn4S",
  "key17": "4QWVFBRMC3tnAE35qixXzd2w3AMvBmBX7TyFvuiqpm1d4G6R9NnKJGr4UnFq79bgTKmvevmCBwiQba1rL9eJuW7V",
  "key18": "6R6PZmoio31vFNzHeFeSzLH7EE1MsDmJTcCoB887W7DUF2b6xKNDvcxbYPkXx4msDZCTA5pX2TK61CiRhtYHV9p",
  "key19": "2zatmUuRW51DpQUk2kvhyz4wuv1F3zcHgxdSaczNCs5sBJpkQ86yhNd5iScZHgLLHLy5wumKBfm6wB7Vsx5skZRd",
  "key20": "4HmqhqUxyN4f18Fo3mmLpYxZVRK69DpvAw1sRcvQAswPJztLgEjZ5Uu5pXjcmYsKWc8475JY9EGdtBbeyMmznVDd",
  "key21": "4iftQLR9BRWxjtEftrDJrLj4WE5TXSQEvy3CiFXLRTu2ZNHBetqCBDuFtGH7uTCNDKdGkabyQ14D8fVWvyL1UQGL",
  "key22": "3jZ8aoK299jFVsnVaaYBcY5dhJup6iJGiJ2btLQCDdyiNMFs8dZqL9NZ4UPFmmm1Tu8vCEsrvz2eDFXWXCAPLxrU",
  "key23": "2fQABBsmJW7jhCCVTvD5TZEL2kSQXhk4K67AUSfpM2R4d6vYa6TVZsUoBBwz6k9AeBqaAuPDzJ1urBTWk4ZcBzoR",
  "key24": "4GVBh4EScUcktshZ82aY6o4ksdSuCzGCx4UMRUrgFcwhWKLe5wbtrcJgv5Zg6NGmG6wqAPmJrEepy9VLHqWoMBsT",
  "key25": "39B1PqhKGLfcRjkz1XLZJd2fanmEDMA1HUoKUru9yThUyy3qfbrMkfGyFrySDWGbEfbJAJzqUuNLWZqdu3dJQNkd",
  "key26": "3QgD8ryEY97onLstU3ApGPVVHHi9bM1pvLWGuv88hbSXD6iRNHUJ4X3VLRYcpjau37icDhHekW8eQm2uoZTzAhkC",
  "key27": "4sNzsqFeNk8XkdwFrAyvmj6Qf4x1KtXTSQc721gh7ZW2yBfSFATg31QFCVAk9b8t7Avs1c4A8JpxZMaSuoBHACwY",
  "key28": "3U6di4W48bmF9j3MPK3mHqfuGWco49QzTrzY35DRYCYXrzz5cTwHMyxoeAJrtJDDe1Zv4z1XsntTxNf9sV2ELHny",
  "key29": "2JARZpXaYVq4kfG3e6rkBkExVZCcCPtmDVPyM8DfTwTUpFiRgYKCW3MVw9bJUdTga4FngYBHJKLKxX8Y1vXWnGYE",
  "key30": "tzDd8BTS9cpkB2xUU2qAzBkFU6dB5FzgAhdqYgSskSiAiH91jTaDDumQVGJZobFupu2ZQahCYxVRUjvt4d4XrsE",
  "key31": "5szdm4QJtQMDFPuFZ544K3x4gRRwxpiq869Xjob97xaJnPLCwHzZaKd8NU851a7BkwkPxXEuLDXd7nLgKGaMCjji",
  "key32": "4WcSfHvqtXujoaC6rBWh2X8Pyw1HfiASeZi98P4hkMeaRVGgSC8XyRB51Z2ip5vXhAZw3VicLunW5juqDcuJjjty",
  "key33": "4UULsvvSH8e2kwWkMArpJ3xgGzoapETX3KzodwDdCKx6dKSobQv79AmE78KaDGnT9ttb5jSZicXnxSDjV41PcELu",
  "key34": "3ZrK8RHaJGmx5zow5JRjeWBfhwsYstz6j4AFTzXwDe8TAb47CaGXyX2aGwHZnYHWKw9Fu871njdRfJYpeWE8HpG4",
  "key35": "1gYrQaAzmVTWSGKyz7QYUpZSDkbKNhTBupwvV7KPxhCckpAW5KQBi6cYyiTPEAKYRYpMhq3ukwFHbY4QK9M2dcd",
  "key36": "4kCyGEg5L8MyrU1EbAjgHLPGkcd25m3ZPhAEknp7fBcT9h4zmw91bYrvresNVKfn9b5h99zBSdU8GDxkwJ4Jv7BE",
  "key37": "4uVWjKkXSvjsNy6vTAQzDdavxNcHgAW4nES8sueS9MPa2UmBq5BkLs4TS33NmGkiZ3n4kJEmiYDgtBJNiBfDZTZN",
  "key38": "43qB7yc2otoTms9KogG2dpTQ1dHJ4hPnvJfzwjjdf6Gpk4eCxNCSQNyubyJPWHE8vzddfjAgqCzcJdrmujhBUjEB",
  "key39": "397thX8wM79K8UZLvbBuWqprh4A8YkEg6jqmhMZpieyc9hh9J7RWtJwNHo3KrkunMeiY9wEr8Jcn3kGfpKzLTsqk",
  "key40": "sLYckaDQobXYybus73ZGTxVZcVc87i4wEZXVPrU74nxf4tUTzRCYRtpXcyvtQUz1y1EoeUiZjUt3q5jb2bWerHX",
  "key41": "Ch9TbAFGoMVfbjd3Q1hrFXto2wZt7mW7Qs5Ntv4VJn1oqaP36v3yfgPTBzkAbsLSkwp8u3krawU1HHnT6SJ8qjB",
  "key42": "8S5v6Yk14vAUkZx3qxJw8qLeqQU7AQ35d3TY4sAxt8G4kmpRP7ZgMmHSUbKnZv1Lzna24wscMMLk2k9LZrDJBJB",
  "key43": "4vCV895wqYLvk1irvzk4YbBxP66nsPL2HefunrGtx2agZj6J6xZEdU4UYxvkJ3xVuyA8ukRDqp1rjzXyavjzuFiD",
  "key44": "2uXoXVeS7KP8YUqd6ewgrC1NPJzoCW6H3jaCLj4JroVs2tmSR76awpJKPoTR7aVKw86QMjDgoAsrYofaTBCUhhkR",
  "key45": "4YSHGoF3dUSESydbV6jMGtdqxgRmkNtzDynr8WT3hRN7vKygDbCiuA4TxUM2JLuWjtwP5dDsArxjWCh34eW9bUpA",
  "key46": "5s4Hs6jsAPJK8MQq7rnYS2ZenCKx5kwXhjZ6sJb9ghJYxHsSfNy5SNNqTx1MZZ8fzfR6ujb7ZRPabCLMX7eFHDm6",
  "key47": "5KX5kmmVQFoXtHeLXmwdWVtGK8DABM1bzpaM97eeT42omJvtMgHSeEQsZB79EKJdbV3moyHmUDs2AqoA64g6MWK7",
  "key48": "2sYpYw6xDzjg4KFGANoq4eUWeiEigbnNCaXFtqsFCrAFE7gZm71eN7e4A3BM5WWb7hVkdB7xNLsNfGD9PPRd13jd"
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
