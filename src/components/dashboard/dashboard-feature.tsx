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
    "648zp4KPRx9qDBHQ1RLkF1XhYBEpyUcKvjk4oUE1BFrhVoYTo9izL1D52xyiUr1anWsiEiKJzuJSifo7xcLjSnTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UCo6PntNGZXSjJ7RaWo9tnWT257uk6o6N5Y9LxgU6A2UgQCMnP9DYWFdmFyCrkNKFn2Fc1o13u5XiqMN7fwRDym",
  "key1": "32j18L2tKTSUtZLus8auZrgWNEwU8urYZy2CYcqyYE5FZLRFa5WZCc7HHCKBSydWp2fHYDhTxHdH5N6VbxzKAoB8",
  "key2": "5tFu1tPGrYPfb22JkLVrvfW8vMex4uSUyjskJdoVKTE6Uc1536rsaHpbXUrbYZqdZ26YNgk85gn81t5xEF5yNnDz",
  "key3": "4GvEJDcvcCcad2maZxDSjcA1kfet572bqj6TrViRw2c4d2cjfT5XXhWQJEYmus44KfW79DABUwv81usdXwH9FxiC",
  "key4": "4v9n7n6bATvukmyLjjfckWJNdv2bRy24Z4mqrooS3U1ZuiAaTAzJJpnMyAU3WQ8BCmVnW2o6JQeAXDu27hZsN7pr",
  "key5": "4C6Z5Ux3GhYtqeuNFXdrpG3oK2LMUSh9cpJpX5H2eynWsHhHAUyh3b3RTUyNP61bpxzdgBS5cCWAWRdLEcid6wJc",
  "key6": "5vGtEJeEUzL7FPbj5CBM6tkMs5u5hPyzGrFasQ9REx8TZjDpobjscYv9NctffK2VtNQcWfKBeNaV1PMs13BSEsTU",
  "key7": "6488gBuhk2hA4yb7uX9oBVhmGQkghzHszQdRzg1WNSfxfVCoAyZ2XBtAnYVa7XNYA23Fx8LZZXKzaRZswWnSXLd9",
  "key8": "4Hb89QA6Q7mrHry59wH7nnfgb2aC6Z9diCXiYbeHTuC4c7PxTQdCvZw8jWutTRdteNF9vz86Nh8JkS169xQmXbZp",
  "key9": "4NeSEndxp7jZkspa2D9wBmxstxP2K8k6JeKwyrNmCuabPgo3KCtJBCdCUXh5MmA14LBEXWVw57GkAbKgYRRfRbeR",
  "key10": "gek6kTtCAtiQCpdBcqEjrR3FBnKsgstnV3hphyeEhezX7AuRq4Te6Y7N6V1NCFVHiThq9DkKnkMZ4AAmqBiUNET",
  "key11": "2p5cWcE8WPN8YxC53fs7FtJB87okCB4MfJT6Qx3tibD1yXTshVi5oCyyK7L3UESAbiPErAZ2fjcWGA8q8qRwuP2N",
  "key12": "27eNo7utj6X9Yfa22L7i95w6MA8jg9CkaLrsxN9nHQSg9VnxbU8PqmcycQmmwU66hUzQequr6BYkBUxTxakgLRr1",
  "key13": "unuUf7mJDjXhAfCBoemwvypgcL3csQpWjXSMDecPxLagBBJ23mMy86pT3ca1cDKb9BUKrWVAoRMYDc1dArY82S3",
  "key14": "5Gpg2ji4b5u7H6AgkCZnj3uYxpQDc9YijnAVqSC81V5ZcLuqJrJQUHgWfBbjd8JrYfQzBsdwWv1xwY7AKMCjB5CR",
  "key15": "k9VMQDrGxW25BHqhhvZUUvUZd3w1zrk4s3pkAYJvffzk3tvc1au5UMXy6t3XfkgX9k4Gc39K3vRtDXmVYkK3mp7",
  "key16": "3287tfn4m5RSrx5qrgrWPz4D7nvGqbb7n8Zs13rX1g9sMJGwS497MzZYVHcGG2vyGbTreBrQ99FLoExVDugTMK8r",
  "key17": "3JRorbkbynA6gPtBMfKuFB4Y8pBhetVbDQjjpFcJf8C2z3LpvugXXyN1wZvY148LsnrYHdy144sj5c35PCA8qAko",
  "key18": "3LgqbSBvDiRKu7NNKhgFhUDd45uMZem9VXKHEoGBkddvKAydkH5aNPtcXvQyRfxFeB6MqS2qAYP7VTwPCmqvyrWV",
  "key19": "k7ZoFjXDTHugkfdWkZYyzheovUGBqxtkbZGG69wNkksxkcpPgQV7CavVwtsrNrxPP8A78jEagF8GCzxx1aDn2gu",
  "key20": "2Y9nCiNi396tqLyfShkPyh3UaZS4SJVrc3BwLgZqU6qorEjGR1f1DFCn7Xa8HGNsjmZF5icUXNSaiFjMLVkfERpD",
  "key21": "gNaKw34ZHSR9sMzRnDFncjem4baVBuuGqjqrgvvvC6f7ikwVCEuJvYS8QyD43KRzj8fhj4KksmkEjqKDRGtrQ7r",
  "key22": "5P9jjnL3W8KHX4GrtX7HfVdaJJXmGR4VYNiF23UxV3yyR33UHexfGgN74jmuCje4x2GQzFE3k91q3KuPu9nsxA49",
  "key23": "5DLXKQFzXuKmBCU8dqCvNag3ptuWZaK85MngoAmsBNTSFBinJHFPLqwaVvXuM3HDFUQpTtn9vtrEHip8wGgibs2h",
  "key24": "4NwUoY88C4nNCC5EBtrmQ7mabRu8aR3XvAQnWSggW81gruxmrZdsZ5JFdjof5eEQoUjvAdLieRZwvzQBmi2keijf",
  "key25": "3kJKrbEoKmELvKFucCwNiP2bxw5nWNYCsgGEDyzrh93cgs8mCcaTRKixFnQbq9iq8qByzc7pySKcDtYexCeuw2pD",
  "key26": "27vg5aiRgZNL4cYdEo7tU7pxeVn2ctnfi5TAfFW1kxD2SZxNUb5ACvHnDhGS2d1io9GZ9njThBZeZ99iD9WCfy7m",
  "key27": "3vDnNx5rEQTt9EZbAbXN1bW5c39cGKbHmZsrjKh5UJEK3mJaNVhji4MeGkv5Bzcz48yP72HuKysqZXfYgnuqR8Py",
  "key28": "UqGccAHVHnJ1wyHHLd4FkRYf1VA6EKhFmByeYwC1ixoh797wEDZUUYheNudsGpwLKk4c8MeN2yJEU5ZnAuCzjW8",
  "key29": "4dwcfQmcEF4rqXYe2uN1mMPLtkkuJyuKkvdqNDBYB5qrmYsxK7kH3JcniY4mBmeSxmNASbHsvuS3qTTxDyjb4pHY",
  "key30": "4UTPEdaBvyqaK9yLy3U8NnGCErSmVYkDPzGjLiE44UD3S7apD6CggyWqJmYrGcwNMP97yCgi5DZZR7ycSjbDgRYd",
  "key31": "554L7cBjJxPRTbcnyENUt3GrL1zNNoKHUnfrC33Vh8hzkMQyttoQbZk7X7PAqcvDv2iXGEXmBKw46F32zMbqxfXi",
  "key32": "8UYtFSNZr2HA1prGSzM4gwyqdH1fJDDSMu5Ga91PHVkhSyy2JoGjfCJjAF6m2aZdU5NpQXzWmQdb5mqgxN7ycko",
  "key33": "3r6RQ9nf6K4SFJCJdSaHYnoV8SGWq2FEKeEbrmh8b1Lzophrq4mLYVAvdqyL3EnCnYyzDVHY6aj2z5rCkaLSEUSs",
  "key34": "5ofsCm6bgG8aAiQ5cEftfB7WN63WjMhDeKJuBSnfpvSrBdQpBijX35cjTRDQpCgs6RWu6myZoPYtH6fYLEpRLgE7",
  "key35": "658R8WdjjmmCisXzayvrCHrQ44QZdpW1QTfuxNG4zKvUvnrnqu3cyW2QTNJy9X3SefLs9eRjGbr1EZXwf7h35Axv",
  "key36": "4PDxVhWQ8xQ7hDZEXHpv3mZf4A1f4sLbXH6UoN8Xc3xpdKpjtk9pLkRGnBw6DRyPo6pBEhYVkvAFDX1E2rbXMAU4",
  "key37": "3jzcAGyeqmmyggZwWDGsWg7syfMPocnUAk6GSAEBcresR9vvjGovjiXScn57XdDYPw4Xc9Gjns3ptC8BL4XxSh2k"
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
