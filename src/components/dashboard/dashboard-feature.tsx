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
    "24YXz4Rbm7n5sWVzweiwefvCXRnG4zJww2EzxQTJeNDUYAgcWJEHTzdw33rttoS5YaixVVjXw99Pa1At4JVXcx1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cnE7T8sRktWktxjy36rakz9a12aM6vsRfQwYz5zKpW23RJHNDeTWgp3QdouTZ7F7BKUxzstqpW58P5YPAbJwHEU",
  "key1": "5E2ptiAtSwMkuonBdS9SESyAN2oyFAReZYhe9oKx4RCZpmfvLL2EdLiwFSTBhPzqnRVAYE16MXSeb1Var1ku7YMA",
  "key2": "2HZ6SahUQuXGTyfthBURk7eX85bL4euTRU35u67HL7yT3RFjCAdtx2g2tzWwj7DZm2DcpAptSPxysWQcTcu3niyc",
  "key3": "2r7mNEbxqyYxiXh98cseu3VS4JQzoHJGUvfUfafJhKdH98uwbHL22cPP68xDGpjGNwASWQFbHXABDGT9ZmywNi8j",
  "key4": "25XfvZcyHyupPmHPcwY1RmiKy3tq18Ze5awxsntJgU7o4B8fcLSE3vdxwLo6bh8gYYgM7sMN4s1c8845yBVmm9UW",
  "key5": "4KVfma7BqygkAWNgHPjLWehQZ6JPbvBnuTfhtBMgfWtG2VksdPmpef8g7TaFGpD6sC2j4HucxpUpx7Kvnqiqk5oh",
  "key6": "4rQRjCdgA36NUp8NXG9x86QeTNHmyKNByuscWjiSa1P6QBbBw7snYhEnXR5nzbBVYW3MWbrKiDu5SqqMqhYGTAja",
  "key7": "5EPwhLLkKpS22fqbPFcDtaBHw3jN3BBpetx7xqSZGB4YRTXmCQdhaVRQCFcvMNsa9DJC4kUGSJ8JnJv39MezjMVk",
  "key8": "deLU6JTy1P4LGYLNbNGN97DkkPEzLdvESqWVbNkf5x2TP3LAev5kJrX7TgWEKHMiwv1xZoz9sSorZUFBwK1L2cW",
  "key9": "58Nu6W7qS1GMVA6nX73HAXvUfkPvZUTfyjDeURF7o6uzTgYYmSzR6Ktub2EkGVUms6Di6ohSetMxN4cbmx1extyT",
  "key10": "3wcTT2Re6Fhjk2uTvu8SEXBA1wTkpESmqEEpfxnFYMDSfDk1yiR9PJjJK8uWroueWbuVVWBevno4ejrxcDHakBuQ",
  "key11": "3LxiiVyKpuyMpGmUQRY1iXFGcoFmWn4QJh6PYEskNpKGhDPGBbwoia6nmA8gxxtzHHiexm44y9rPgNyBgkoFvzV5",
  "key12": "37CGq4ceiPA2XPDt6sHRfzXhkxfWyFxWJcA31tRki2G2tfbJkHGjD1MAHJh64hYTBTjUNtmymKTeKkqKchvFvrmw",
  "key13": "2XCkjoYNRDvhFgwsqXjvWZeihySE2iRw3EGwpVdEv41EEiP7X6XFH3r4GBKck6QJ8TLuzondbXH4LqhiBBE6tpr",
  "key14": "541WFEQzxqeah6zB8E7Q2LYHeVRhxSYbSmJifi7oAvx1kduEVsBkaRQWgAnMobKPAwhxYYC5wusfdCegjzbdQhuc",
  "key15": "y5PBXGFALnNN3NNM3X2Z7zhkv2h67sKdDcG5e2HbNR2ZMNLS8oBfH8iJnkNm8sY9ZtaiiXYEfNbkM5jj2wZdQAS",
  "key16": "35iyW5BEv6Qmqsvx2Xc3j4o3NAdjHMHBRX2vTpfmthUdFryPfMnjVz4fiKvwPDj4k71DGAGWHAwL1cd9r3m3XuHW",
  "key17": "4yY1x6Trp5wjMoiabcHMVcbV5gkDcHGMTy6CSQjmBHktEo7drVzadNgKdB8aEvScG8p54hLa5rVquqQsAKDvqFg2",
  "key18": "2sFEt8yf9hDr9Q1YJdGaHTPxCkdnCNPvTyveuHMdJfWDrtNjPqaE1PGR3oUpPnzpFqwzbqhaUztyV42wduDgTJr2",
  "key19": "2jjyefJv3ogZV6HiTinfquUDh1ux5nxMkvjauX5sTLNkr43X2wwNot7f6gwk2wRMDsDrKYCmdeLELpD2oEPAGCLW",
  "key20": "4C7Spzf7ET6WxjPb6jgMYGt3cobXt8tSi1gFqsLi2dKoLStLqnVj3tCUibwfsPhMJ9T9DLopPTQZkpHR9My1oTaS",
  "key21": "4qpcR9BoZXN2eJBicj2yTkcdEv5ZENnbzt119RZqWh6jLuJhBZNKYwaZgPUqv17ZCj8R6dTDv9Rfksw1qymR7b3m",
  "key22": "4MUs82zNabkz9eriUv5ttinwjK7NewT3CzT8JDC1wNTE2VYQXCFPe1P9nwENPEJ4zBzL63CLXNaZ7gyrfn6xWuG9",
  "key23": "4u9sMPQZF8daCyiQBAbbwdvWYpDwf6dtvY5q6sFCgdb8DKJZUrvyAAKvHRWTmmBMWzGkcrsAqaUuoY1qxSxeS7TM",
  "key24": "2b98rU6PvvyffSqnd5tBDLALgWdvV2ULKJDuybS96WvnZoJmdB3kj6k9iNpAyr6UxKWzc7QsjEUQycKFKh2n5FEy",
  "key25": "5z9H94TiJpwSHgchmjhWh599ANQvVxmmiohqjgmYBcgY25dCksYEFksuFGNJ2KnHArWpdbSbYU5oAvF8PVButVH8",
  "key26": "3BUioHAWoqsPBPyX1j12nHbdmqz1M93X4ZaKfsRkkrpfyhtXhU62XFUU3jR56jBjUUoe6xR7R3L5n5o63u6zc382",
  "key27": "51xqQsQE3PiJycFQo9bU43dvKYoFXNML2VJg3xg5jzkygTDfz76SXmNkCkfXqAeNh69J9nZyZMyS6friRPv8Ybk7",
  "key28": "4w8FxL1uzJkFSJBaGW5ME5XW287kXnzgKexXvR4fZua7oAee4JqrnYjb74EVnJUwcdGAs79z6vDJARy9N3WaPWSM",
  "key29": "6331uCebGe3q5GQaa9fzvHaaudjRs8QJXD5tgd2cGgLn1D4gMLumWiCz1TSwrUjz3cCabM3hq8CQhwFXWphoajPW",
  "key30": "57BwoSk2ZTZYL4jGt19Je3vwFFDi6cy7qQGHe7UXXNQV8Yjze53f7eD44nvMi6JhPjZLTsamVNUCZrtp5j65gWRC",
  "key31": "5aAeyMqaiUwrcS3ozsDaWfemFv5rmsdqY3V4yNFwd2kUCixwem3pFGo6VEPRiUyDHS2v4iGNUGWSMNgTaxsMv3nn",
  "key32": "4dpESDoHakMeY4GnY8fQXTPHCw36LUqSVdBHsFN589DBUtjAZFJgfhttueG5Yvpz29LQfwKsEE8s6QpmX2kzMy6d",
  "key33": "3KWYHU6QBRaEdqt6nkxE8uP79c3PnAgAtKKDbkxvFnNdWZsMsg9JkB2nT5niyheTGoqperDq9sqwszzFj3bRvF8Y",
  "key34": "3zeed9Ue3nt5vpXJnC5xAqh78s8g4eL1JwRSZtSpbqsGKccqZUy5k6yx3MNDhqbiUrotYDhvwdtXUGNqHfXoJSLq",
  "key35": "JqEZuV86PjZNVBPti3YHqRm3nz3b2SzTGfnGeMXahEJLCGybaXSCydVVwKr9MysDQA4U93553AnRT2RJq2n9PjN",
  "key36": "2hnNkZiDUUMMmmhCZMtjh5zs6meTui3QqatG4hKFf8nbZ6NnQ8czbeNcp7cLmgSZSGnRQxYE5LPe8FGSqzTrn58L",
  "key37": "4skEfPNBE9Kh6Cchk5CAumMYwc5eYWDK3en6tsfZSdAVKDVQGS2wskiYCxisZ1UUwqW8emYyNBSHNx2hkQX4pYJU",
  "key38": "2U71RTcuzQgMQgz5KGjHCD8ivx2EGe7qtmvN7kHPjQHiQNXkfAMCAnTnCS6LS7HhScFnK48LjqaEBWMMbUKsi2wR",
  "key39": "42TnyaviWjLvhsBYZc5qtfExg5QRu8HgZt2uYaf8tFFfGLx4yCoAaoUJgFrWN9Mk9EufCvFXtYbAD5eozKrRmC9A",
  "key40": "4Ex8bzzGSfYzr1rMgBm8VZ8mRSoyCXmfbJKDY22PYdXYaiwFysfZ9WT7MaiScSH7e7B4W7Sq3aFiSrptKNaKTvAh",
  "key41": "Z3kV3FyuRprHQ1XVTfuP2ASPuXdTKJRuiEuFURRrurGr4o6PwBmZaMoZ8HB2fBg3Adt8AMRMgAy6em6SiggmuWh",
  "key42": "4af9BgaNydQph8V8fSNTpnimnrLVr6ugZoYN65PsdTGNS7yA9ppkEmQvs7hHCZRxhbeJiXRUJesyRBvWeL132keZ"
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
