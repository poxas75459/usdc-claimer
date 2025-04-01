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
    "2QDhfLQANtRQuEQLSTu9Wpmi8MhNysDZPiTs74CFePp7L8P7vW2PxbXg8iuk5kK9YepcWM4yR3ipp1u2D697zGoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fx2uuzmVsRphnUfhye6RvfHfb26PV37sV692fGmBPdGaUSerMnfNAKSsgqpHB13DyuUy6AViabk9Pz6G9t9QkW7",
  "key1": "q8zQszdmPR92CkQgBazypSbGy8rbKEdoPuUvZWAsa437HJC4FN4PaVseSWNdjqoYvuzQNakz8JJTWTUuVS62iPK",
  "key2": "4TLUDoe7vNcVEcvgFDgZVyig3EVMjYYPbQWBiTbtAhJPhhsRduLyjotTUrDtx7vHkc7MKs9tReJLk15urc86jLjd",
  "key3": "Y8teLpaEwJA849Z75cZxruHK6rJdGDBBMzcqhqpBesjCbV2p4ZbBKnrDeatFNZ4jUg2WF5tUX1t6YdWe2wEAdsj",
  "key4": "5g3zB987cMxJVuzYLN4o8yP39DM9uDqWHbUHeE5HJstuZA5taupKQEMysV5WTgKi611WMozU9vzW5HSjUb1sKqYY",
  "key5": "3ubiHs46WmtRBH54GsDpopRQGEg7pzqftgN9o8VAvK3oRcqC3xGDL8vATE73tKpinhr8LAnrmntjHwTLY1UWiDCm",
  "key6": "4QYGve5sZ63hxqYQGcUyVXGkFW8sqBFX8eB8bwTup8Jd55qSfio8DEzwmFfop3MQCuATprseqkqZcSCTTqsqH6wF",
  "key7": "3UbkvPBRjufgM6nqiMk6vwXwxuyExWEDLVC3nVViCkXcQdAW4x73Wt2uWi4qtbFqyNSF6Z4vqJS1t8Ty2S9V8tX2",
  "key8": "4jafZDXBsXe8STA4YzUdnQKvFXrNh6JG5WPZSNa4wmKTLLp7DjDi8asZaW286RacVDUfwVX27kFvcsyhPJDcc4gw",
  "key9": "4HUxcxZoD6AsQErjvd1WTzudneTDwGPvSKLGFQEnxDMM9zxAD5jQ86bXZ8cQHDQ7VYffCb7N5Te6rGTDZXFwkAhw",
  "key10": "5MHB8m2HBWdFZj1SBSN8xVpL9jBcpK3JWnVt3VCPA591rMKYHBdbwZ5yZQcu7b792SrEDUBDiyEoNb1LGU1XVg2G",
  "key11": "129hoYuzvZbCy4At5C3fynqiQfNkknE1nzGvzDEQW5dKqi7dJceu7n4xeWnE4BazLgFHCmqqudNqgR5bx3tTcokY",
  "key12": "3AKkmrDA6mEwUd6sgiV9WCfdSS99ktQM7kx64Xnyzio6xFj3Y58TSWr1c15eKWurVTdkNuMN9tDGxjiLBQFsm8PN",
  "key13": "xMdgMyYmbepr8YzCCTPqrwkJ7cZW3PrqtDecyCXfw9LzGHBJjQ3AdTicySbDda9JmMaZqyZSY2R6WuVDMMWX182",
  "key14": "4vKE3h3YwMhYfBrqQQ5tWfitNgg2RbEBFs5HDtiHauWcVESjpjtoiZNzZZ74zog2QBoZ4vXon7VzJwQd2ohUJoTn",
  "key15": "2rHeBfP4UwUEjk3VmN3AQj2xyHFBKyZ4j7Dpcar9dUKCjQegA7feprA5VcQBcGZnGXumotSgy6keLv1fiKz4199S",
  "key16": "Wfg1Ak47ScWvdok3vPuKBeT46Gf1Ss34HysGCEmRbWcEQZ11UkGn3Q87tsuy4VYnnbz2yGgRXf7QGEJckcErSKb",
  "key17": "2rHvbFzzWa5U6xft1mvUWBcerZgFdk8WHKrp6UbGA8Lcp7RZNy1sdbFY11sTDyQXU29cW1VNx6oMrhcJoD6LFHib",
  "key18": "2UoZxYV8Qg8WPFiudRybFcHoYN9wbB1J3EXzbQUTZJufbenDAgGNvhDeSovh3vwkAxWdSfWfwKYBEgr6P5WrAybY",
  "key19": "5TVH4FXvNXbWrN8ijsScxsqFy96TFA6niUnNgNVpswaqWh6wBQoGRFysiTrH53xTAsfHv54bejn5vjqqFg8srz7v",
  "key20": "3tsyqYagxzkLm1hBC36fxYefxUcaN81DZ2tZKmjUb5Cbh5QF5KAzZjMtwQPrLmEqXn2nq9DL6bWZH7bTYUJqyDbq",
  "key21": "3FXA7ABeZP8rVhGR6Cf9aPGfaATU98HruZuejjaUjwQ8Tzdd4H8kThsVUW7x6iC9YDcmxNAAktCwUPfew58mA1fU",
  "key22": "5V5MafxmDeumRSjs7enwEXBz5c6gqqRjTJKxgjNsGZxH89ZQXSD1AH28NRHzgEVgmvqNCEGBjAb3teiaQxuyBcvm",
  "key23": "4xQSmQo4jc5eQtEEJR5dBDpiC2rftUMYLptwnddLskV2LC8uaZQn8Ps4Yvcfaaj2NQK6NGCXPZoHyLjXaavmfDHv",
  "key24": "4hfBUeXWpZYKnNYx93iCnumrXk3DTjwBncVBX2ZLa7svcvQrAQsBBqKAjPcd3LQDXJJ63fXvb1toBkTbcJHMx28A",
  "key25": "5eU7NKAror9qwBzgxfcbt3b5fGSEevrRhirRyJGzPhTnHqkQbvDqEcu2Jsopcawzi52PVLYe648KLY2mTZT6cyzG",
  "key26": "3vno7PwKhU9JaFnSLvzPLf6idBsFDyz7mgyKmV9P1ertECythCEYkNpdbtLByrvsfKoQEbbeFPwnCEmVSmgd4cw3",
  "key27": "5pKqXPRokaxZfUAq76GzdXZwsZhePiBqnuka73Zbegjhxr8q9B7NfCCmcGLN3A5gD3ptQ8kxkfBEhLNDZSuRhWEJ",
  "key28": "4dEbq2gTGQ7uE7wBvQYSRkSZVtj4ySwezrbeHNKM6dEdLorLJ5JCqffJK5pLebgieyGZDGjiMaZVe1KPJ3DthLnc",
  "key29": "5M5fxnkrd9Xic9ynMPfw4HgQeMbi7dNdYDEc88YXm9PQKXaq3YrMRPxFZtMgUXXo41RePehdKygVinZXtujmzps3",
  "key30": "5LSrQ5NR9ksXqmP1A57zcPyv3t2JaS5S3DpeAWhBCD2kWEkf9Ar7XXiUpNvh6Mnp6kZUr2nkAp2Zr5PCsKrVWdyJ",
  "key31": "4idykGP5uU97gVr7ET9zwR5tcRk9X1NjPrZNM6PvrLV9Xv6mfFvLwUtbRGpmwf3SSXydVm8JDXZMuaLoF1tpVmWS",
  "key32": "xjqe2EathNU8BR9NRrYMcsja1J7Ag4ubRHk1Xp6eRZ9mVKyiS8zihvoweC7fTi2WkrwiWuW8WKbsz5dP3PCMUk4",
  "key33": "43VsKjcxiAAg8WWuAPzABRZg54JPDzyUJ8im5TCs17RHanwgnCQgiwEF2BP1X1CMAM9SfBftB82zkg24chL6f2Xd",
  "key34": "Wukm9r9ZQjZKPieCXtH3LseSThQyYVNxFaRh2DLM4oF1GtbbFnMi6GVuoakgVKyuBfNSgSafDQBeCntGsr6nion",
  "key35": "3C8UwP1pYNh89fYE4TqrChMr6WYmcmkKHjGXNhuni2Vvnc6R7Lp5rvq6iM8TDf4n261MSvZhQuNsm9AF7TxFk5xh",
  "key36": "4C64Fuof1NE52g6cNo9AurVjcsBJFbsZ6fscyYyVLnpAvUw8rm3XonhGasUoiyjKwKyXWtjk5HRzXy2MEzrwykkn",
  "key37": "2LxxgYMRGo1Ybc2zG8gfc4ph18wksjhazMoLNw1u8hnhtyjo8cMQ49e746X8wAMgmFgu7rMbCcNs9SjZfjVsiz9U",
  "key38": "5Wmc1bFF2moUG59FaFUpN7wbVNLDspJKG4N9aSZCXpXtcByLTKHkDkjRiWm3g5F7BssqPSbk1upDaFJefVD5vecD",
  "key39": "3tsAUuX2AW17ZKBvvgVsbvMwYszamgF5onCqmPG9Je2tVgfwm1W4DDvGZxq4A1WebiuRM45xMDrJGB1DLNgXoUkN",
  "key40": "5esWYkvNPKiWSTRBVKxhAQiEzG54m1SfEm4zoLrJHdDeMnLdiSTNhWU1mNVFTCKk7UPm2hCEoYNXdehqQNxtdbRH",
  "key41": "38is9C8UM4qrVXgPNkimYwqCzvjWqabdF4BTnp8MqRzKwHi2DhSTXREonyfhu1kUHftw32X2wFcU6HZbmYjcft8C",
  "key42": "2CuAYhgGonfoAdBnzYoS5dtFFWHgcRwUo3ET4n3n4SEMU9t1bSKCKi1TQQzAZHh8PUVA2KmQ3pf83rABnQUv2JyM"
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
