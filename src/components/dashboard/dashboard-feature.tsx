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
    "3y87fLiX6hUSRxrsV4deXfYqGirxSdPyn9N67ZoKbmmyh8cqWirPJpeEy46NW7UdzFzWibVH8uSSJPpVdFWP8aqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rLWHp44jPuwHUBQkvQXdGpvFh8i1ipRAnbhVYrrTEGLvX9BqtJyyBhfH3iQHASpkJiXwymq88fbLfzHRjpnacsv",
  "key1": "5LXaMXzhpc2sSuZuCyhRa12KvQXRJiRTMcbfTF2oMusz64Dj1a4uqTvWRVsiDj4Bwk28wm14mbqZeEXUvp9STM3B",
  "key2": "3sMRDQJKeoarccBKMrshBLzECqbdZjoZ64Yc2xkGWSNhwoVskbasyZp88cuSdVKeSrUQLHD12wVMmiE39m8UM72S",
  "key3": "dtustV61suaN6Vx5Fx3qxHQH8pjVhnxf3L9xvLkJSc8U12B2hPg1cyBQYy7j2WsWiZgCtRVTaPyXVvHzqfgFsVA",
  "key4": "3yAPMgX33vgXzZSo8GaX9tWvpViGigCiPpKmf9878z8WucHRsrSR7EWbCEuaKzmaMKn1DVHsqVRZ3ZcBMrD1cjGT",
  "key5": "4ZnPv8DwgzopXCj5mekEiUNofCqBYJGV4z9uKZoGpvwXobStUXSXUs539MrMsqwKhWBufbwTijoGwv52UkGzwPwE",
  "key6": "4f4ph9xGucsW8Ks9DgRZZjfPazS2HqyBZhvUXVqXc71mBDG28CUvaLSrMoqVSRqr3LKLr4zXH4qtiweqkqUfL7dW",
  "key7": "4tZoLXgZEa9HchPRq6GB2TRCwVE4LaigDsWgr9NY78kEYbKctMn8K4yNN9y1eCY64VUtjmhWFvRFkpZorGLL5UAd",
  "key8": "5f2CfAxMuiYhXYK3tXDLtJdaReCiCRojN8XXZicZLW9rNXTpwjR2NdjFccAjovaqi1gsVPXYoExmR2sb2ksgYSgg",
  "key9": "3pKD93kGQsZeVxMT4ebnw6HGomUR7TTjJmvcgAfrVjR6PyEHUZz8beubzzBh2GybqffGt5NRRjvnv2zKTUbKSsRU",
  "key10": "4FC3zXAR4BPN9ZzWiX3Enmwftqb6pTxd59AUZaoLwYafg5EdxTzv8Ee5GnfMdFgfTjit5UYEAcTkb54jdBsJDmjV",
  "key11": "5b6iYJTsPwk5k2cPahWpLXrXmSsmSgnb4ZHvt6ENaMWwZdQZihFQ1KNc6wJbxbbLReSj9xZvcJVMk6gcestMRAUo",
  "key12": "5TBmxW3YoQeUYeSpH2xfPmSoqEaE3BcKnndv7bqvfiiNZ2KttS8K39gDxqBzmYnTknpreoTkuu92RxzJViGz6fda",
  "key13": "3qRieBfiQAy4Yihdui7JBM5NS2tATQzToiQvXzHTYp9Tz7esvRet1Qu1WtpMj1gMjkELoeFrBsBbAta7g6m8MK1W",
  "key14": "2DekCSwpMbXfYSxRJH4Kp6EJhWGYtdemEGXjaCQEroerS4MeooC9fsSjP67PhEy3PBLLfxaCnN1pcnpo8c28y77K",
  "key15": "2mWktFxwBBYNSQMTVaB7Lo62433jJHsesstvaznXX4YrgkmoZXxf1Hxmsw7FSgE7uuHuun9EnSqbmVZtEWYshiN8",
  "key16": "4kpNbSHwifiCYxNv6ks2vY8AXPjyc4ceTAK8mBAQyyrqdWHixFdpLFxfSzPh4dtdH1MU6SbeqBhq3ZCLqmAGGNbd",
  "key17": "3P4zFh8vMooHHVTAhjxRStTfRnv4xGCkFn7LLcJqFuXWyetQQ4TpsLwaiKAki8BKNqpCYXDVWxy2aGLSBXBFBQv9",
  "key18": "3cgsJGcSZK1ksFnWw8w5Cnw5ZS2LNL8cQor2oQawWRDXDY59fwqEQ5i9W7ajLxiSHAXdCGxuvLRtYXcK5Dp3Xyoy",
  "key19": "21fB9jHmSkPoLV9jwYkH2FCM4J6bZbP8XXUBerMxput4msvtBiBgcDVFNnRCvKzZSMLwzNReUHp85ybi9fLvJKHZ",
  "key20": "2m4Jj5qgH16sWRoYFuRKBbzL3dCtaZ3wT5fS9LMLg9RixfLLfpwRqL17ve5yp2UAAdejLypS7yoTLtCA63zKET82",
  "key21": "S565AAkTT92f7hRUs5QRbFKkEWA1DVAofRP2AsjR55Sc6sAbcM9xNgvAUEgT15tNfRYp3Lm5UaSRNcKMK5LENYg",
  "key22": "Fz5qzJNsPAV76uJKRunCZikS1tvs8QVhejLBBnagkAxB5zUhiPrdstVqjSKjoCqGC5CtoxdEcP1HiXBbN5z6tdf",
  "key23": "akqWedJwBNn44qH2ZLZ5aDJzjN7tt43H7sdUxAWwH1G6k68XkcNkERqisVqVHAY8SbpD628jbM3oPKLbNX5Lve6",
  "key24": "5w881kwXKEpiNpgE9WN6JmudxmG8KbWyT3tqLstWiYnHLQRHjJy4sdtpvfz6aVyNzmMKfL2fWRZSLEsRVY46Zo8A",
  "key25": "DCdcVMWxWaSA2zSEtJn7PpkEvmmsiRGqS9C3FkZfuTvDpGZgNYoX1iPNGd1sCdgqiPv2SVApjCMZg4EJniRDWxP",
  "key26": "26FUQVERvHHfgkYjuDLQriBndqk1nRVJzmudv9H7ptwas2m3AC2G5tp1nMiSCmXzFMyM1NGA2Bd6GH11pqCZdeNL",
  "key27": "5qzMzpriJJHxy4vyCAZaTw9pRNMF4mzEEuj5ysYKXkgRMRkuCX1qBghEEdRzADqxpH2TuhHsjaX9djYx1QHRcjAq",
  "key28": "4DZm2TKze7SXXSAgVAjySWR3djg14SJ1kBK96xCTTYPS4fxM99ZRk5MR9xZZFvipa5W8HeaekgJkAXjMLj8zAzXr",
  "key29": "rnBVkYFf4M9Q7Mr1pjK6wwwj7Rtkv8vKirdW63Ja7pL7dcDAoXCg7DKaArpbW4KYmvdFMKXLtW7AJRpK6sKj3D6",
  "key30": "5y14vZb6yc8S94STnerWyp9yt5xhAy5mDd7cysXz5y58fhJznxsxUeAdxdzjhchDmrkRZdr3xAcETXfQhDegPM3q",
  "key31": "1G8bLSERaD67ppVeX1FH7yrrn9utV1AiZxo1cZoRqtdCDRNZ66mpBwjeai79BWBf12DpJGgJph8pkZQP6gQxwzb",
  "key32": "3gJFf3SpWgG9qawXabpwWUWrCz88wDnQE1gjEwpWvJYpfL7ZaF3NCFD8YbrsZiqdQDHYjGp878ZpRakLQVJobfoS",
  "key33": "3AsCVzDMUraPrTj5a7xXfF7Xn8iv9LAAoGTMackV4cJx7mNmNiKVVUPCQK1VyoxK7eBWrLVr2KreiSJQBcGLQat2",
  "key34": "5GzPc1fd3L1VDmGfBHT7aVdyUGb7dp6ppBUcYdwgUubfLYjy2QGrdZNwwJ4JWDhybbvwMwmfk2DBsP5257pWBbka",
  "key35": "3XK8QQDKTgHkmG8e1EegCriDSuQuJqoheT63wHUwbDVtC9wcS27eX72hzuZJJdD4CetWP7QSGzJyAQNWjT6dDrsS"
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
