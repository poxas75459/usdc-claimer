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
    "3c1w2TdjR8xBFp7PSpA3pjeENiEDZHTTbRjN5DavxrASahHy7ciGEKp6fvNcudpz6u1a26GTnGr7KwB6eSkF4BSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oDU4eSXMPhAycguMuTAmpFyHojqGciaPW438GyLw9JCDTdXbNFWovEWR7XfefqS5BAS1GCtopy97TsnLpSGwtxF",
  "key1": "5zRMYQ1EJa4JdyJ44RK6fetQrRJEVd2U54vyLydtdLdPGoPZEaKwCfHFWDFboQyPxgRTYJEmc2wPWfJju7GUkBc9",
  "key2": "26xT7dZHYNUknmobkW2USq4qtgyEg3Xp729hyyWTg7cmot2pkZHBiWcY6oe7u8z1ceRth3HvS94wAfwBFbvuRqLX",
  "key3": "zmCUAspW1Ab2pZKb86KsroF8gMF9RXZaZ8d9wpzZihV9wt6VAd8JbipdJTUiUUapskzgMQWxiBjT7gvieiGNQ8Z",
  "key4": "2Hze9aZr9FGSnYvPXrFuGuwAUxuSAz6HFZFRQZPMLU5kvcjaiQKaAsCnrbesVqHSSEUtDq9inWvcvpQ6Tq9wtmYk",
  "key5": "2ckDRgcm91vF3uERhbrSresyg2Lfjr6q5iPbxBdDeDdYu9g9qTzFpM6wSt6BZ9dYHhrpbrePe8N6Ph98biDWAwZ5",
  "key6": "3qXrWF6xGoDEMpxTjResiPXbPSpN5LxXnzLWVxmWHgCtkuFjWbd7gak3kB1bv5FKCDPg6Xt1CYyngvkVJggM8KQ4",
  "key7": "5rdBZNE5CW2DQ69PojK43JNBrR7R5DnU4gNEo5DEps6VK7snV8JXKbKKKinvN3QwUr3PGqtT9XGgh3FnrsMvMNNR",
  "key8": "5V7tMgzoV92LXywGsEp4yx63ewyATWmYeyi9297YVJWHCuK8vtasxrZgdcQ43h2v77Vaw23uYUKtPtULrfQ9hyFM",
  "key9": "3STvSpoct3gAUicZjx6ZuAyWYHAQuy4d5XnmFvenTok5YBzRJzk72eYvkUmJRKqEYS3ruPcYrVbJyQ79Az4s3yhD",
  "key10": "5RyFCHE7fuj8zfzJTcCKrzBoNWysVybpzEjBUdg5YPP1j45YDQx7Jf8t2yzBi28JXKc4SujW8ZNBAfEc88YUHxo8",
  "key11": "4j1vQpnp8KzNWEMUGohUxgAzgyroREiLBNJACG7dHXCSxyqUHLkfFQLN4phqQtDeuveXszWi1iEpWTjwChHzmJs1",
  "key12": "4FhJVB8ZsdwbxkUq3mot39bkiCgibT24kuAH3eSDg5qCafoUFCyTU2jJE8cSqeYhkjvGFAnDGfpQ9DN17of15jur",
  "key13": "3cpQwuUBdZimVChPcviH6phRtdYGvZeu6F7bcnECbtTwVLuEApnynh2ynrj4fm15YhzNnLbJ5V9JMzLJdjoqa72C",
  "key14": "5gSJ42GvMuow79c7hHmgF9YgpcbmyCD94D5ZBeXPiaD2KVoTBgFhp3SVg4WjUoqDZRYnFtckB6nAYQXAxJyJ9q11",
  "key15": "scfgp1RtmHD6rzPwQMqRDLzNTnfc9pTLUxp43ezsGJ6Snjd42jE96KRSo8nmjNWVH6PZxGM6oCqtCi3frfJxnoU",
  "key16": "125ULqNj6RCVAg2opumqqEuzLYbHVeGSZqyQ6rDoKQ1E5zLKF2haSbJyqqFivzMAnSrRmrqhAV7q2UM5vGM2Pmfv",
  "key17": "523JeQabns2xGs8raARePkF5mEXWUXtqjz9NA1yitpDYCLj963nyYPj4BqAQVXsgLL2GxewXZ1ti8XwPix7AWf8C",
  "key18": "4brTf9Z4gv7CBiG78R2NzGHUaxUBugGKRsFJtDgsk3UZfzcE2GEymf5KLCAcpzjYtxrziqu2QNrptsHhCECnqPnJ",
  "key19": "2YtZ7acWzxQKKoEDUSe4Hu2es3rE3ioyYuw1cvAdEHwdWcuZ4PZ58HUCw9f7PRMx6epuPuVt4uD1y64XncfChgvG",
  "key20": "57w8XGmcwgWgxK99AsFazGJpLxkiotLAV9PUxYfkvV4WkozXRDk5KW8Xf6owf7qv1LbzXeRUYu2RPE1g8M8uzKYR",
  "key21": "36RHbn1gjZBFC9nQiHUGYTGihGXXYvieUbfmb4dDurYCYpxgrudSm12KYx6yLmsh78C1N6uK93WHjaLpc921ahri",
  "key22": "5a4NBQGNB7cmxcRZC9m1i9xkM5L5Xuv3nH4Z1EB3A1K95YNvr3619ZZ7KK4zhUvBW8RRKEzYaK9YGJQPPrMvwU91",
  "key23": "4Q76FQpwQaRGqVF3fNCb6FMqB959FVnZCYkkaZhtroEzTbfuGL1XSwiMbbLwA69e4bgLv3MyVvBrCqZyyghKAErM",
  "key24": "hQkdbXS1m4d9S5wCmjzsRroabNcRX3iGARUBQNuyPBMAJER9jxuDfz7cpGVBDrXnD4pgU1bQi3SXtnRwdH3Xh2S",
  "key25": "4xqTbpEsaW1AoXMHZjPfhDK4ae73YM7uQbXuuqUnpM1PbEqUFxmgQfYViQXx1KyLWQeNq9HaEVwt5ckH4j7DPYdR",
  "key26": "PeVJu35oWdEDKTppNxEg2uzdV1qfNk2bxKLAftRyb77zRJa2vAET6HDyjnQHz3zsnmoF98AcAUZigNYzeQq5wnQ",
  "key27": "P6t3gRDRUCwqVB1FYc9Ufpez642AhSzEA32q9CMsWDLaxwke9cHqoh7RfyNEHnQCN3pxBvHhqeg8Zu8fhJya5VX",
  "key28": "5LY4BSD2vgwuGjC7HGHHV5gtMioyXer1UHSVha7zvFcLQktDE6qHz6dLvj1bCT1VrMpYBTLpHTw61wXnUunQAqbS",
  "key29": "2CwemZcu3rKGfk5iHUyCewxDLasauaaTs4Enrg6AWWiFX6sGMGUNzNM98tCWCV5GT6W3qE36xMz73z79P5SvF3pU",
  "key30": "2taWVaaPvyqgR74FhWizqV519F7k72DXCoNS69X9Z1LxEjKCnHunhnbUTQu2MgMmFV6HFTeq9fTsRCi17BixtFwt",
  "key31": "4gaBd3iUQaazivjppEGcgQF7ZbNipXXbyPHwfCeM9XyYyxADG8BJ7NwLvYQmAzLtCJ27qyiKdQUzCx51GQGVzNoZ",
  "key32": "hFreT4aZWH4KUB871i9U5vczaKXMT72HU58BrkP4nrLiZSbMBq98FAX3k3V9TiDz2xtuQzeevceUEg1MSkfVfys",
  "key33": "5QQdixpQ5wWv6iuWbKR4Ay6ckuCTxVP5n3cPPbF4qpAby4Pn7Ahpv6RgwjqrbyhtXTTcn2mLzxDaZBugg6gwkJ5R",
  "key34": "2xZA85cdA5CUSQujTreP8DQHDtXai8XM9eMS5EDvGeS3F7AfZQBodjiwRFLGx2DiP6k3iwdg8Q3F3vmwSyzMf8za",
  "key35": "tHUkcE5KCDAyM4NLDSLgyyyMJVoRqXq6p5jsDcCySpXATSjxYTiRkaCTSm5fm7xWnqPRGS7iY4Drcv1Z5SHCBeo",
  "key36": "5SDg3Q9vWPeVaQLk89dNfRBH9WEFZaY2qh4P7dGLhSQdoy8kugxMrKmGFz6aoW7jRwYt8QyE3BDyxT7o9y7cjS1S"
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
