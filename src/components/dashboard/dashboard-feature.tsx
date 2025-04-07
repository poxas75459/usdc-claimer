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
    "29MkX3CK6Re88t8CLqvReKn6zymq1STyFWsGzwxLZpfo4fpLU1zknBEoYcti8N6WVMKtuDhuoSnafUjXWHWDCLrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JvuheyD86WWNgq3gm9nZf4qJ5m7bETZqzJSN38Y9DrovMH7EkrAGpfFfVnbusJ7kqYRyJSH8RDJFwj82VegtL4U",
  "key1": "5rDByS3Dgwg1RfvE9AU761HioHKyEBMA9n37y7r4DKBTT2qbmC8jZ7Ddv2M7NY6Qrey1hJPbiNkAEfUN1BHqEsjs",
  "key2": "2mktHhHGqj9B8NUhEe2GkxeQn54vNhahJiFm42CTz2wW94xAEfGx64MxupFL12dQaYjtnbJtosQrM8NAJf79A2UU",
  "key3": "5ggqJgXDY7vo2aT8eRJdpkEz7LBZ1o2ryeCnhxL7dgL4rY86tanrPZqGyTpPWuvEWt6DENxcKftoniZvPfpDgT8F",
  "key4": "4aifvAT2JSwKk7GBusGme6JJDML4mTAqrDFMUJ8KUMmtJUPPsXpyWxYwTchBVuC8xeQKq2eu3TJwULNyRNeedAWq",
  "key5": "31mxNCk6ZEhjcSrUFiC55FbkwZ5diWGu9cUu5nCqnLxDtPhsvJviBgNraozMbVVaBe8kxveRrCWnpGEX7pLUiaiP",
  "key6": "46cE15pBrxUUiNyUeva5WNwNQC6zKAR9MdBAj4sBV2xyfbXNWxmVCnfhPScSQS9WDCvhma7nqF855CQWTQxLvEtw",
  "key7": "R6ta6uujiFcVirADyP3vbLtwTrQqubENFqeCz2zBYwzFunauECQ2aySijaXY6JpFRdqC3hGLjTNi2B1kfjpWT2J",
  "key8": "3i4SFp7wyjCbcktfs8pctHtgDuV1zSNgSmyXVg7LzkXibuBtsqRQGAYcBa5DUiVnXj2EqQwnZC45BAr9ebv7hfGh",
  "key9": "M5Hd9k11qKwRhj4Lp49QpTg2EnRJyciqX7dUHbyBnkv1Xim714RsjfG27iGV12dzMTtv3WvvDuvFWp3X6Sm2Qv4",
  "key10": "464LLZFhciCa6iJQyjnX8ingni3BSohn842H74waSHZUQgkjAGcpSLP3uKNrmwLUJrckW7WX7Re8kkegvNtC8E8i",
  "key11": "zq7hcnZMjoNX6YmUuzGsG6N5vaUiUEGeo6XbwqDjRsLqc17iUHgoDQkKWVafihCLzg1c7Kf9SHkbkEghdMh3Cag",
  "key12": "XWbb1W73141pHJzrRRwdykjuadbvDJts5kKraAEt1941tszTWViuwqHfV8mkrKVxznsLV5t4yDHTyNW5hD2LumL",
  "key13": "2Xkasd7hj7UEEpkd6BK84uZtGHmRWcGFXjfDbmcBXe6YVPnori16hTY4nsUHdTADQPdYSbfJWwCytKaXhFwJfzxf",
  "key14": "629JdpbadacZTfEx7tV6JsDRUF6mRvNdtc1n59HZ3Scrf5jXs6cNGhqqPtuyZgL3zxcLPW7jp36LtiXftjZWPB3W",
  "key15": "3GiPq2TDwFBRpEv7qMs4x1zmrozM5frJsRAfQ8JcnQNr5dkfABucMZWpXBWugyS8MANUnvTYE4n7B5RM1sM9UJxG",
  "key16": "5WoDT4MoQP2nkHWMKH4sEhAdp6BNZn7egtju79onCVKsgqjaBXD7FzbpxWmQLqXqZYTsUBkzpvAyo4HqmDJVJrZG",
  "key17": "5BNYT6N2Fn7crAjjqt4vHq1j2bV35xahDJhxeb7A2YwsdbxkvNA6bbAUNTThmRFVuzhbwTm9cdpWS35d1Wi1svu7",
  "key18": "4xoh3zWh1oQNEfeH9dLAVZyYs1wgeKB4ooRrmp7GvK3bVUfGRomA7NiqBBnFwMQgAaYdt312CkfgXmCcG93MgFsd",
  "key19": "6Kuo75E1SuS449j9nE1VVVxajMtVYtFDq4FyxuiS3ovYLK9wPrjEFC211MoWDvs5efnLjSdRJbYRpmxt67HYXVc",
  "key20": "66RzyLKExvkuaw5QrJZCfPFF5w2SiMPaftwVxdF5vrRiN2rdTZuseEiLQTJfed5JJcN9SZFJfyKYbKzSJEi1WibD",
  "key21": "2QmGhyhSD6jyzoV2Lf4MpWVqKCJ9fbWqxZj3ktirQDe9emhRS46aXL95dkGVPzNXyypWr6mSWbgNAB6CZ32q1w3g",
  "key22": "7LdKf2e19YQZE3QpBgFcu9mjFt8fc73ELb9zREnVzPGULpHTnASg2uzfcq3tgaFsrMALi5DkzEwdKvszWUKUZhQ",
  "key23": "4o8XnaopzTt9Y68oZS5sRThnf6hh8so8KvkisvqtjsECbuoFv6NG4WPbcjRwUcR6JmkcenCsEunyd4DjSYL2z7xi",
  "key24": "36iwzSYcKNWEXCfK4xqFkt7rteoEgEfE7KTUuWFb75jetH4HYtmSyf2CRFLWEAzR7mcBGbbyPQsLY6bitHWvSzsh",
  "key25": "3TC3UW4d7GzxbBffjbzADSwRSvwzDWC6NN4mACdAoiknmvxZw5iYPupatoUhKBW8Fsq9u4WQK1taUw7t8wM7LnzK",
  "key26": "5cdZ6cL4rz2GUoGU4Me5eLugVxU3J6LdPV939xcZjV2ND4UrkbVKViy45HPrCoZzuozjDsccthiLSdNjhbmhin5W",
  "key27": "3HwjYda5Kg1aQmD54t71fUiUTGzsqk2X81pj3W3y4YnAbkdKVE1yekiNjecG2jCUnHB1xLD577f6du8Fw9Teoynu",
  "key28": "4By8CgHnbmK2AAEeYphCveAs3zdDp2x4ZeEqvx8mdCuwG9YcgZfFfX8ULimsTuwAEpmZHCeAtvT2XJYeq2HKf18u",
  "key29": "5PoyEXZcgWBDM7PEJu456QDkTtCciU7bitcyHEcf6WvGKfZqsSyns2g9p3eAC3dpHjXTuag4LN98aH52ZRf4LU5o",
  "key30": "5YMAAMaueetUvY42G9m52t3SLM7gBwNp4a8cX7rv9if38sH4vXvVC6tj4pY1y3Q2GCEZGi8EseBnkd9pdpGcTAiK",
  "key31": "4nniCDmVuPzL5oKcxnrD6cauTN7shsFqQk4wppKWnoHWEZjXYB2C7mUFqNM7pVixCYfqs7P8aQgB5c8u9TYnYznh",
  "key32": "2vpbtWcG1TYXtArvZnKK8N67eza112N6QeJm3N7aWoJJbHvcVBKSPwTYmnL8wRGEx2Z8fyoTnGC9GhgBQwAoBWJi",
  "key33": "5phmQbf4FJAzis9zSYxKDSAQemf6tE3TPokuitCjySYv2b4BDzXbyHNNE9c7oHpRxU5V2QzEYf39gz6iDR87ihnh",
  "key34": "5fKkx22g9WSGBCFuUGYa6SwZLKVxQ6z2trDEYonWZLv2R93VKLm3qwnoT62YPmwwUZ7rpp7Awy192m272wRQMJd9",
  "key35": "3bA7wY4aqW1hjLv4ywySLcL5oLPtZp4X31mJyLSfwomhLvTXzCFo8hRevBjHGLL6Ztg1mph5bWAw9ctj9q5HcBLw",
  "key36": "4nB8BrTWk3yb5ts3TpoKD4G1xommK8ojnCADrRvkLkEDLguB8Nv3czZg3qygobNxx2UuaNeLoso7EGAFkpooyGG",
  "key37": "JiVgcFTLFUG9FzaYmtwwwBWpwePsFYZGz66J4HajS4cthKdsTaNwdEgAkmgPtxZjtq7KS1ZofRYGACYLeupyMAg",
  "key38": "2DUqfhrRkjSyBjQFyjnsXQxxwFouSY678o4y3GLnXZgQvuo3dLKWm2FpNSds9oFPjy7y3wxjMKw6ixixmFMHrSDU",
  "key39": "4ncYBsRbFBhot7KYKL33ZMF5Sry2RRF6vmYexhv3Juh7jseGRrSJjnVsX4hhi8Lcr3Mxwvw6ffnNp8AGneiTMqxE",
  "key40": "4KX5ZkzcPSFmNYPHPewqPUkv21viJSmq3ngsnPkesipi1pMAoRCksaoeNUBwAgvphrknt7jrZUax1hPW9aJihNcE",
  "key41": "23TYT7Kgu8XKmWFtDZ2aST7yLf23Ty3xMaUFGbhB7yoztMjhHJHM4ix6XzZqYLrKbz9jdaZgHFK1EathNXZbrhaL",
  "key42": "5z6FJgQrLzymczWqYfTWoLqb4a6ADzEEiguwySh69gW5TaHVZhk6oyE4TZDgFLvamQ5fGiHMYbUAET6784HXHB8W",
  "key43": "4rAW2wzmV4EQFGnm1Qof8T2ia69gjX7CAfRdoTJJ8Tenujauy8axfmW9w3fC7mDCjRtSsXyAFeJEjXNSUKvTpgk1",
  "key44": "4kpikdEVwsM9U4YmJyfVUBDuXNjWM1ocgW98jwriptrDNGu8vojCvzt7rytG13rbsWqLxuQZnkVcoJUZxqi3UkZe",
  "key45": "3nzuRR2pvW7sqTryunx9qbo48DZXk4ns7uDiMaaRHjTFVqXMSjpbFFjnv4P2RLpUKt5QXPN4MhnNc4XcWTTU1JVb",
  "key46": "4UHbKDAFwC29HVLXcNcbAH28WoUaZ2fJsWK6Eoy9rzuE3vpNmEzHPdDTBe9ACLK4D3bA8XPvbzBHEXvNcMRoMNPh"
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
