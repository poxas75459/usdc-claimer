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
    "5EuC57KqPEhyBpZgRrei5sujK88DrUh2Md6SFwQ9AJMCsEus6xXAS7EvHpBBbWKaKbgJpC8KBdEnZMBSPn94argS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34NwVx6FS3tUKdv93vvWKAKAA1HzgbMtyG9MqwwuGyxMqEHBnUrLQUMxNiJqqqdxza71zXZVdHKzPy15wGvAnUqR",
  "key1": "2s9QUSubbUyUHbNHr5mi2i9JzwSWAqJPFqBPKqwohgvomn7hD3W63fQYt1owRjALT2Nb7FWyPUVXknF9G67oEpwK",
  "key2": "51RZCDDxnGtijaiVZPFGTReaMd1tTxoygdnSeu8GUEChZ8Ws8RDYJSDDqvddjhAgnzvfn8uAPjmZMbDQKZqommP9",
  "key3": "28JdBjWk9G3cRf1fSTwUiGSSTFrZHREMA6qa38gDgz21L6YCcvuewsu5knSn6MPuSRujxUB6wgKDz3XZ4UCDgiKm",
  "key4": "5kYkXvDKHgjVq212wH1cNs5CPbCBH3Bnqm7dx8KwCa3Dn6yvJ1dv8w1D3KajKFLx6KUHabNfo1mNsCVfwzMdxpTV",
  "key5": "2ddLPwxWLUT4mYJKmwttZQcAEDPYWa2W9dexGT4ppYvSKaK25uucMps5c3NjqnUJf4L3zrUzUDzDydHitKCbBQ4W",
  "key6": "4VzrAECTAeG9kkUaUW7BnSuN7NavKMAcroy7LKVZZKhtxvcHswoYzNyaqPK1iC9QRNQhGvYAsKquy2YTMert69So",
  "key7": "3DELSr3qHJG5XmM1oYByehNsRMM8seeNYewPwTA21wcVxHXUEUGep13sVkeZWnrLmQrbKK9h4V1VeGpjEKLfEQ4M",
  "key8": "37Bbi1XUjnnT3J1FBuKhrtNhx9EzC24EptkTyWzGfgrv19TwypyqmWD2iX8qTyMyJ89sFUAo5FjXvFES3eWuRPBk",
  "key9": "2CKeuYBkfa9jp173qgwBHCoSda2LEZ74g82craZkTc2P4qLmGjmWgbnqvMBfG76aD2qcAyRZnY6WHWmbS6Fw7ffK",
  "key10": "38ttzZYNsTmMxRyL93kpbRAexLDzj4sLxohTGHcMeucioT4QdTWP8xRhbkDJxb9NFa7BnShZmRgNNFQKGq4srTDx",
  "key11": "4KDaCsMYRbk6VkkZV4QWo6fFNqA5mNbFuKCW1NuSHbyRjBTUGZFJuCfybiLsCqW6aLavXpSprZnYcS3bNHNx7r1M",
  "key12": "5SwmKGRNMRLPM4Sn8UKyCvGuHAYg1PuVLju9W4kJgxZZQnwqtKkV6vETDLNFZftbEBC6UGdABSTM25Jq9jAhaPD7",
  "key13": "3x9vXQBaAEBharRsCoRPP9D7ybS6LxgxypfY2EnV69G7m45ucC8UTcZJoyGjYphQBjG5uXzsKqFuhu5qbxKzxZX4",
  "key14": "2PuAfXNiR3Vx1MPQxgXQaEqYg6wWSk5zcDajNpD39XYgRtnyRfKHSgfgsufWa211rtHwaL4VgjVc5HPYuM76N4ZL",
  "key15": "4BmCYaM4yHKLR37hp9XVC4rrkDooEWfTNdQUNdX8CcTMjN72DdEyh2BtoZiVsrtsLscXmruWRKa8yEgztoUnhfPX",
  "key16": "4myK7X2aw1jjwdTgsUY6xCsCFwBJ12ErKPc3GB1fpGYBi77cHVH7up3KTJsxaoxURoY3beQD74EJzxbAsp6GfNPt",
  "key17": "DrSjfp38d6YYTEbqPpzndvBnXxZWMjG5p73JuSeukd3WZLkT6HwxyLkbb3uB21TB49kJg2XgWyLDSKqGDSrBWeY",
  "key18": "5KT8BNn1uYDvSRqnM11fRv4PvVwXocZkJ7ysvHvPJHHn1DEtCXQXHoyepjV3hsz2VbUysNL75UeJAucZQT5ZUEJX",
  "key19": "3KfjcxBiFd3XxG65EDpvAAWzKCs9ZxqWjhi9tzNefjsBwNodGjReFeZ6Di2SPz8m5yHwVxnvcBdHg5NLbCbLo6KF",
  "key20": "2ddsHt4fotWfts5AdSer2DULk3VknxMghexGaFBYJfmAKTYXaqufedkRF5UGdmLHJKM9qFD8j44N1TvCnvwG1QNN",
  "key21": "4qYyN9CV3HQkfpwU1eixhVQBAqgmhMwpHX2Go9KA9QhfWEmL8mRr26CQRSq6sQh2AZ6PtfpmnJutoo9ncdMrUEv8",
  "key22": "5Q5bXZnmFUXzywGjMNHTRFMJEQvHoAqQhnxsybHb3AfRRop4DWwZ5XcnYgxAZUaCo1jtnqbmXNvWvJ8g9U6YXNSN",
  "key23": "4vQaf5oanTcgdRRUYi9nwSnETyBvZ6WaGJdEsGb7a4GdVGVehen8pJ823hZnM2r1748Q46nFWEfqJtLPu55pcB7i",
  "key24": "5kk1aYuzMsU1DFn4TGRniwimDptKGTKM4FXYKyWBJqtP6J15grEGgRQzwRaTvBgFdC13AV25PGkK1yG6fMcqzZbD",
  "key25": "4osyHB2EaGL4FHQucbgumdDhffeXCQZn17tdUvRrwxYydUjxaDws3sbsY31tStXAJ6SUPU8aVMwpgPHMm1pLJGQd",
  "key26": "2NGQp1qDpd8mcc3MjpNZAwPYZtHcBvKmQnTwE8Efd7C8HQsEMLCZh65Roxh6QzxzqsZ6C48qKa7dt6TnCMwm96FK",
  "key27": "3KPGE5Zwnoi7ymPMKApCKRvDWfiacgyDo9Xcu4Z5ZdDtM8FDK8DLfbbFiAKFGLZ83XisayKHAnX24fcRX5a6gynD",
  "key28": "5xnt9me2HW5HyBArywkoRKck2Pfb6t5kVghX5qe7DPv5E9LWk1DytHRGzXqrQKWHoWCSMX5dpimQi3aWg1P9JH6H",
  "key29": "boT5M7zVV13BijVDnrP3S2g2uxoNBDFhDntGgb6i7U5KHZChM7YG37mroe8JMnYCNEbQo2aSw7ZzrC94ehpnfaW",
  "key30": "64SzZhXtsdDBXCuaJwaxqWavqXma1f1xU6kBYMA9ZK89XevniJdpME6WUx6oAp1uLXpPB4uKugJYnqYdJ22kheEV",
  "key31": "c65WsnsMbCCTirkYwA4ZB1bgMzdrvLEp7KPaaVvy956H7NUb2mHR839K91XjCruBuea8PdbwikN7NZw4rK8pxTY",
  "key32": "4Dz7RJoNhZSkiV74uq5Kgr5iQ8obJQYrWxiQAiciAG31vXPNyPSZb5p4W3zWuChwGz5n9h7qGAkSLE7jVHSNQjh",
  "key33": "AQgCw3Y9G8u6ab5esY6DGVkhV2AjUVv1oWDVaebXH2om6hDNSfLaFGqMXSHijhRfDp2GdPa6GpWYcqLAv8UQYaC",
  "key34": "YXoyZR8EFzqp3WsgLfa4bFx7Q16UeHkXv9HQhLMMahHtwb5tkDzhuJUaA3znaN3rSUF832SXMGhzCMqZEjfkRhZ",
  "key35": "5XpzQ2hkPeaF1qLqFBa52MUj44koybaEagUr8gfDgPb7Qhm48iv3MDno54d6MYRhBY4Gp8ATRKK43Ki7N92Y8vJb"
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
