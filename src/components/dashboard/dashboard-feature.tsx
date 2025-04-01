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
    "5WNRKHhf6qJAer9cbnMWerRWQew3FEMPzkCHrknbmr81ZUSjjQRkMbKWaHrQH2Rf6cPCtpCBEwzs5NL7yGt8yH5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dWuACDR1z3gcsZ3vJp8PGosTwicCksHWtfD353i19Asrcq2uPWL6g5Dxiuu6RX4z3oxACCYDo4uiGnoFzquxNPN",
  "key1": "3dgJMBJkTjj8i2mQa4fgsEjr9qs58f5Rv3f8ZekfLzTVvTcm7ycqmMue3SpnKkkpkB2FNrpLJ91Jne6CyQfCtbv4",
  "key2": "4yhKGdse7bucYnFAYdhMMkcfwBoiwTfwFUp2JdvGFYmrbqVmBm5phconpem8uR1tBkLF4CFijykNJ56TX2wk6GyN",
  "key3": "3ByJrsaHbjcNKKsu43ukcjELiUvX6fgrk4VF5gosVD4WwuFA9Z3yfqzufb8cNEZiR1HTszdsRGkeJsL5rqqUoWKE",
  "key4": "462ZbNkFjW3i2zuC6xDKiqgXteJ1Ue4PB4ChsFSKtEaEunxuHmuMJ8D2ABPo47mzxbsy6mUet8eQzZJESrzxKeSq",
  "key5": "5JAWnh9p29NpXURn9b91u5hmGW3hxxgdFfuAxXNdJvgeawnJbuUFN1m2cv6pcewxJRJhSjiaAdFVe1FbfNf4ZvZV",
  "key6": "3FCdSJydERvdRy4yDHbSPc3tmB7fTLjYTux64xYiqKLu5iLSXeC1EUqPhBCzRUF13G7EqMWdAbRsGmukT5Cf3V7K",
  "key7": "5WR2zc425mCfQMV8S1fyh5SweKKWCfM41NN8aoagbQSgKapuU8MGmEwSj8LamNvwM2asfh1VCzUYu9qQUx4Eg4TA",
  "key8": "3hDqdLe3boxkb2cphjXuhsva9hzBuTRkUsA5FqkA419QA35BeTqRH7ZETPAUsqRGFcfjfrekDDwBe1X9uwd2xbiy",
  "key9": "2rihdoJJvq9GF3wz6FjcqQ8WjxncnFMaLiNCAT5ABk9hAkafPua8ZhBTozzERz2Ya2jfQUpSrJdUw7dUNQ82a72j",
  "key10": "3BCs7UYJn8c3EZpCCVmHfWG1iN5mzrDRDXr8eJNkuZfivf6s5Ag28PWuoJdiznrArHZ2p5nq3eQ8ZuJUxAgZtErS",
  "key11": "2fUMy4VMtYnMecMGaQiJj3KGPiNkUbYjbka3nG93sSuKkZPZbSH7V4bpcLQaUQ5XMZEJqfuQKWDex5dW7wmY9ns9",
  "key12": "QSJmtzZ7B7hg9C7tawCJ9C68b4UWk3TV1oMZcWYxyseujc9iehErxLeTcCizxHeZdAZ6dU2jvCziMuSMZNmZbAp",
  "key13": "2keEbEiJPdC7qbTgma88QNL8nmN5buVuzkRfkuSdxpLRHVyvCQLV28jf64J4A6z6wm144fCKHySKHhMwzNio4syP",
  "key14": "3S9oq5fDu1eAP6gcsEa4d7SbHGta11L723Eryf8AVs1ekfgmK4R6HWQRT5JjgjDU5AfmUXQSVz97x57VxsY9LazD",
  "key15": "MpBNWgtagtBswrGzfsQ7Xu27DbRJMd7igHnDhdQQqjuZHSES6Z1Cn49tfDoPLDk79mPShkXcpvc75UW7nYxbEf5",
  "key16": "4pZAkLsTU6VSCYnUw3Up9PCdXJmSu4eEyocb8Z1SSPJuLwf1wkjJNMN6S1fx3sm8mUkDPVG1RChgr7P37AgGizXy",
  "key17": "3bj48SNagq6cFk9uEyaSVzC29MpdJY4SWsFu5ciqNjBQuoMkVBxbdwbDjWDA64Y58WAXB59MBRW4UkDzQg5tYPJv",
  "key18": "g9bnaS2UDJm5DBoDirAGHNZNQ2LNx1vVbNN2RTTUYQFgrdENKyQ78Bs23qM7pz5i89RhEsnKcTEzLQKd9jRyJdn",
  "key19": "3ybMaTPpGhjs9KTYeXJ7dg8FEuYctguTeME6YX4mf5Raa3irGE1T7ndhUm51A35KUiVdBZ4hjUFF4HHfbwmKPo5i",
  "key20": "4HW4goUd9VSCRC7EJ81KVde6nf7TB3S3RtzmzRcQv43Sph2eVGwSwqWLtW1Vg1dfWnsy9usNgpBoaPo57Rp4CMHn",
  "key21": "5pHV9U3VzrcWqtgjw28nnE8JMh7ocotfqS9VGo7JpvK7jM6hSMfQAFwQwpAeCpJ2ZwJFfAc2Hgat4W2KL5dWNehk",
  "key22": "61JRrYVVE7t12odxteRjuKKYKrMyzJg9yWAYpXMqrVZGPPJRimM7k7MRxG1zPy88YQypMnXdpw4WMSpJA7AWWE8w",
  "key23": "2cGJxmhUm2rUFNinmisUeCg2u6Gm5xNifPT9WHHXinGdUaNusGEvLXL1kXV1YbZDjKsMvmbSHnmgy7ZTWuwHETtg",
  "key24": "4tUQA23RLVL1z7SXvo7mbFD7wFYJhxGFXzSYRycV3GKz9bunYUArr2XafsEb522uzvv18URNQYjcDphgam4c2kNL",
  "key25": "4uT6YFmjrqYcWvKaL2RK55e2TeCrzXF4LpnaM9ruCdb6ZBrJAJHJRoWZWc48xofzjVMR6j55dGM4tNYYsB6wZ8Es",
  "key26": "2eEs3WQzwfrXZbvyZC8YPHFXAToFe5jrxnACggzHsTYtC6fCFasiimpH6ek8uef61jLmcASYsRgBB4RJKEFVSRV8",
  "key27": "3wCnunGMMJGjSBYMx1LWCfSBxZokQbUR2ySpcTXJncykz4Q6Tn1reg8LWQ4zLrvCWunQ2E7CSy57hGXmiS8QR1gn",
  "key28": "3wcjj2F7D2kZmvu6ASBcCYQgNDQT6sjeYRL2V7GmYz3Dbm5uPTMagCmyeFpExxUjqCGkBsp8pCcJdY9w6AXDgzQk",
  "key29": "46zQmmYZ5bg19ToDZiHbRGT8VbsvvQpDXxz28a63Q6GrkmmHSBnZGNe56fbWARvxpdNqtHDeCSPKHh1yJyd2nwTQ",
  "key30": "2tKNfMbLDpnAr71rHjRwjMmqSBoEjWuRawx7uM3Md1DNWSBqxF1AXUe22Trz8yXX6oTbp2DELa2QXkKdgEA9voow",
  "key31": "5G9HEdYgvghaa7fX8F9efouvvU5h25jn4qW4U7Qi6ht3Hr6U733XDkuoyqyDWR3u9PDFYqGKnAVsMxsBpgjg7H5",
  "key32": "5sQthrrwU1bcznaBcCtMujcpDDpV6PPs4rB3vcQso1WnQzNSFxjSEPHkb8WAYGh4Ws8Gprc58KEjwooBvoF3Y3VU",
  "key33": "3BS8X6WwSaRCVDXiNo1zJhRwLQEN1nDsmjxtbQDExi97tctjzunRr6rZJPoQrypQXXsoJoDVZ3eawwjzo2up8EZf",
  "key34": "2PuC283kv2vCBeS78YeFVgHD6rqmodFAU8GPYwoJuP9gGJjyHmDtYnVUf4Qe8wCNsw9tupURVyRBmZR37FnGApmH",
  "key35": "3jKhHw8cbR3JbfPydM9nPKanGgRZFbSDwu6PuwoWWgrPJEdDNPxJEn29fwEyLXkkMgb76Ccycv7BiZFg2Qzq3Fom",
  "key36": "51DdveSDnFnz7c22nkU2FQsDyVHhb2oSCHHAj9aRsNZmVBcgNSJPUa16di5vgpGVxGof9DZ7PuCaPu158fbWvcnb",
  "key37": "39GawJq2w2PynDXs5sw3pEU294wh2Du8KhWnxvdkbWiDiLsASb2WwuXxqhAn81QnnUWFiJ2se9CHRuVnFFu9EUZZ",
  "key38": "4SeKqRnRWPrQg7PirqB29oaWomXzTiDygxRjaES4qv35ucjEb5xMiG5J3e5NhKVdMy6WVi71Kkbng3P9m61bGYr9"
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
