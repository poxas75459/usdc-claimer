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
    "4882Qfg8LTrZhHYr4mmHJbkSNJsM5hXns6C86FasXy2QRAGcL2CeFRX8j43ao6spkkfvHUhL519xK4zBzVsVL9ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X3wvDevLS1SnDsrB8SSizN784qudxL7MPTn9g1ZYX69gNwsgqBifxcDn2cvo5TYLT27SB6pWsBGYH8XnvxpU5ui",
  "key1": "2mK9zyTv1nf35JXMSghEsB4Y1xuhE3qDN33g3ATdK7ACnn5AYndgRSsM948MVVWaHLA75v3kZajVKymbXss7dapK",
  "key2": "38SXsG2A3Fz6tELnqGoz34jL4TuHampVDoLPwLbr4xRva3Vp6qZhXf4XE4zNfzd3V6Atoo6t7LSc5pyqFuYgAsU3",
  "key3": "36YZfAwA3t94LuFBm8kRzE6fGU83VRpP1SjLufJbpTPaoJD9mn3ZJvvXmisXU3zaL7xjdvSa6LZP8vDGG4AMQMQV",
  "key4": "7N3rC6iga24M65DsDn5MLLdw19bqVpaYajEb6x1ZgCooZzrsWYVq5rAGAMstYyYuGDNhTnkcBVDAocJBBqvwqor",
  "key5": "3X62eXovNqxZEfpNCVMhXPpS62VrV8c5tB5RWFjL2abrZAyRCWtvnnYXWQfiEsfLJA6f4gr47VFcVpHaWUc7FUAH",
  "key6": "3X8gRtp7KiHcE3kRxndU4ShM2dMZyJRa3NmiNmQ8HzU7WWjZK8GZUYDgBFbTofZyT9SSiSqPNdqDskCEaz2UReim",
  "key7": "2849SSxeaSwyASDWyknyjUKhjfoapx5cAZae5LycmkCqaMf9dReH3hpGQJRuvMwx5AEvhwgXFU4nT3GiTz2ZR5PZ",
  "key8": "3xjkj8Vb98fVxS5REsWmUd5mxnEXLt2QHM2LwwboqV3mXYc1oHXZ36fffp5fr3RViafExqbzZ4f8vaJcSV6CdyZM",
  "key9": "5JdYA25ssxUeCrhp6L2Zxm8fVwjJ2CZHoMiYusosWv3txyA1Rs4RfCeXtgj8cMb8qU6g6pcmsU3Vo5oitzEgHprc",
  "key10": "ismZ8vCWkQMKtsaafx2M6JEzg63zcsSvuC5PjwE8Ei1DAxomKFwmAjvWH2VKKVGAgQKUG54tCgYqWmXviGsZLPa",
  "key11": "5AkZSeoMVhJ5D9SrL4YxDr7M6Pz8pkHZrEKFT8GgHF4sRa3KYHq4rw5xU6otZypndXa5R9hw1P1z8SWsRMpFA3Rr",
  "key12": "dcwPes8XsWywAC9XfhqT5CaTn9CL71arQTwgVAnchRmkzqa6QUF8dpM1JfJk9gug5A9dXz2z5GUUoQZwzbP7bLM",
  "key13": "5jZLdagyviqThS4KX3Z55J2GV1bQbEoxJt3n8ZsudvvR2fpeVHCAJ5nuHxL1cAHgyHYCwmkjr6MZKPmMByxRL6iL",
  "key14": "29Ehm78VqvMRrB9LA68BQNSPSXtf3Xud8ejvPRtGtujHskMx9WV3Bw2pjjK9LVYrwbTcaebuZ3gfG2e1pGrEnDmm",
  "key15": "3ZFTDhGciLdLeJ4yZTqFcMWJjRv8Pg5vmHQQXLSma6khpZKFVtEiM25mCT6ZmtFe3JQiBvzQ9q2EH756T2mk75zE",
  "key16": "62LsxZ9Bq6R6Zjp32N2RbTXrwtcdfppeFiSB9RGC7kDU6ippQBxERooeredpbyN4zC33kM2rgXWC8VzbFAWFXgiB",
  "key17": "3FXy4Yth13HzxmHTbRPEXfdntm9V4LtCEAuM2LYFKc2MCTwqEbSsFjGpNRkREx7yyw38thW8bHJXWBkFz5z2AZoW",
  "key18": "3djTC13GGcc8JfWgt9eaLWLCqtnu7TaW8sUeLMDM1ovFZJZbAYkJWdKcn4PckUX75WX3DrYkh48CfQn1v8iXbVGK",
  "key19": "qCGWebQdT5YQZ3c2oPSBhHYoZ8YQNuvXVtufoC1qzzVihfAHXHAy8Wd7HD93UJGAroN3gMqkWsVx2dhfSZYkKiU",
  "key20": "3c6xzUQkUYRB7AiefJ14VVxrKagwTTiLKrK8Kx5rQfBUDwLyGEQATVjSkBBvi9qdC36uS7PZMCQLAjFawAuXJdhA",
  "key21": "52QB15c8jgJy1mocLdyursiBLK1jXjSwqHTeafsjcSTYBpaDStHmy9WKsDLFXrtVAXVw34Pz2reBmXEB3DVNt83o",
  "key22": "3L5uyvqwt8T1TxGbitVv1EQ3vHjMjL8g1kPEegHZxYezkzMc8oikKKsHHomcRJ7xXEG13yEauMxS4Qgs3QL9XKR3",
  "key23": "2C2UzKgubgubYed7SHgqmThZesk7f3D3wTv2MF2GuhCL791Q8JusZnijSgUJqNc6Z7TUzjj866BUhbP84MuWZPxi",
  "key24": "35CngZSrJ5VimsrfSa2SsFfwU6sHuSdbVVetPZx4wteFkYibNUQcR1WMwX7p5fggkioGK39bugjozMLmbu3CDirZ",
  "key25": "RdDFehSvYPgZczADZLyQKomJGK6WWKPhVhYAez91M6aw7BiZUbBLAQuJ6yeUXXneFEhMUD7ED8GiVbmx6aH3ru2",
  "key26": "2wq8M43orEZvbZTgxQEKFnwuKQVvQgTTMWhFFuhoiUM8aYnWWiec5KNcnM4KKVp4kp9Vc5c5VgLMFyonUJucbv7Z",
  "key27": "4EU8UtdGidXpyq4QhwiQATJHQ5QnYzdcUYXiSJLfK7r5kW2SAeGoyzpoacvnHPT5MhVokf3fwbfctSaPgfEvDN79",
  "key28": "2pCzdLx2k1Rhiyf8i7jVSqmLGthVzKwS6X7ortdpmPq98hE2He9jgasug8P6PZTcossthSQwL8qPvg88TdMXko7Y",
  "key29": "m2YGKQjkPYMZe9dPSRc2Rkxx6b3B8bYdmLsEKHG4zAawyziUTZufw6tm1wE8L8G7avzKgZ2KaqWJaBgJJ3gNvxr",
  "key30": "2J7YKLoTio6gCEUGtdHJaeMDepDgpMXcSAeLDP3Cxm8FnWrVpx8TPWYmVZjVyGRvRQCooR4Ai76jwzv9qym3KNC7",
  "key31": "uBmKjM7C6byaQFbcvzoQnPcWSc7pob9Rgu1EmP373HvpbVa9bpHDrHBiUM9gHTyVwW21m59iFkK8VU3C8CE3dEo",
  "key32": "mwuFL7JGR6sd4szwopDX2WYf1KZPqHJKYWeHr8hXZEV8S7Wurw4f4YT4dkmHCCdRRovc6XZDsSBdzHBHPqTZDJq",
  "key33": "3gzweegvvpCAatdzA8UUBphLcniQwWheD46Pi3AmoUxkcdnMbuMXreKtkPcVyuRwEiu9Ucx6ZmjpboNTT7gUFHoV",
  "key34": "2QwymvQcuBfi91N5bxtuRxmq8AiQzMF8WuNfoXubsSBYQU6C6TYD7AukNS1a4oEpspekDUrqsGosTUBtGAG6Dy5e",
  "key35": "5TUjt3L7xY6onBSCndDM9JwWQdb2jVSgi4CNnSPm8qmkGrEdXNWYcRgje5hK9oCu7P4hoxhn5EUtqmJqucWjbsLn",
  "key36": "3oMJ3GRFQ2mMg8Mk8bbWosNuQCufNySUqYVg6SrBxQPeu6HQFyc4LYyWoY9TG81i1pKgXKAFmzhVEVdrmrXqati9",
  "key37": "A3ZDJhgxYaPvAPP16n8ZG5GjhTf99oqHSzBxKzfvaAxxtrdMyprLsH18veaJP6hqyfU4LnssgehTcA7PX5kiiC3",
  "key38": "vSi739dA9rXnhB1M2WzX4xDt4NaqM1oKHLoQh1bLUbGMixTvxjawnQdFzuU221UoQM4ytsYhZPuNnSPBCzXc53F",
  "key39": "5DFh6muRL8MdaHqT2jyVEoVutjrAKoxt5Gig7mHPeQZVn1nvPEzPsn7D6zrC3HSa1B2iuKMaZr3vTYx56JJAHqkA",
  "key40": "3mhdcCaDTXxBJPk3TGsAs84muH2U3aBYofFAUaXiQEL1aPqsTaKYV9mHkTDbFVRDqaMBFthuRECRwk2J3aWutNgp",
  "key41": "2f9E5JLFxBoYqadbRHqmiToWiW16JhyWqiXRg4uE4TuzBKAh3EiacZAes77cNyYhGvRdA5vKhLDFy1Xu1afK6Gpn"
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
