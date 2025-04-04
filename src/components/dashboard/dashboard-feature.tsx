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
    "3x48jWsDJC3zwV1jasZjY3L3K7HjbgsjKvPATzPQxUPPG2ZtTd1QiyTgMJ7fst4jV5GSmSNqi1mhvucjfmUyctv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WR63pUE2hcFTor4w2rpHwA6JgrY9XkSSL8TiuAS8X6v9p9WJyJ262pkqwfa5TTc6HUAjSqjm1EXEF4JXqM5agDR",
  "key1": "2YV2cYb4zW5zZjrWPALh3qgZVpqicN85fmrZcMkv1pTv3t7Fi4h7HH2GYpYSJj932uswPMsptStGeY73Wh4XdoHT",
  "key2": "47qLcvnM7C7WaEFTH4SVUFmv77g8L82yrrwjSQeuCYt4wFSYyVmZfLc6t5Mv6ih37E1s8KuSg36acqSFKaAcNh1s",
  "key3": "c7Genrbvt7G175mP44QAixGeuWuaE2uwK9yGt76e34hhZhG3um19NgGMPDVhcE5HQMzgZn4MG9msX2ki1Qze8cu",
  "key4": "4he7kn6XD9YDsdrrBzHQF47xi8yfo2B3r2a3uCYvv25X6khyv3ponoMQaoAE33F8NbsYvp5GGeybdWYvJ8TmBCBn",
  "key5": "2Sa7hP8jJfVrsEpn3vNvkE9DL11FzU558ApKdH2ErYE8FBz4uzS5g1pDfvkvLjP4zqhbnazc816TpdK94zfHH9Xt",
  "key6": "5fieupFVQrZVA3mQg9N9UUb4th3s3oPtbhWKSeSRJYb6ihxB3vRtGUSdjSQsPPEthPWZMmLbKA6BL9Lrm8KRy7Tq",
  "key7": "5P65tgEBwbyhP3JCxR9uzMLSAH6h9TvszpSWTCELFzNq6EVVkTNz25JLtzfBtW84ApZFSQw8rFe6ymPsJkm7F8S2",
  "key8": "A6FKn2uGRqxAWaSU8TN5Mjhmn9VFQjM8UJroZyYt5bB1tyEJ1LArDBES1aqcCuvmHvzjq5EZ6N7CVmyfM6RZeJ2",
  "key9": "5CXGH2z1bJhijg6GCPgL6rHJkvm9GTrieC1UL7AVy7MubK9zPkhUL4Q7YYqcbupvpheAkrzLw51RqHapKHm5zmMt",
  "key10": "5aH8HRyJXTZii4K1bpY7NvLkehRf8n5ohdvSj6iFTzHLkpRxicouhpu2dBHEdfDpc1U2FsQXNzeWY3eFBJ7Wc2Zz",
  "key11": "Hyje3zxfmZEABnmzwnZNk8KcaxoNBXyPaPUhNZwGXffW47JCi9Kz7x3tx8jH4Y2hTtuwpsEgQSjSyAxSmTQ8SSa",
  "key12": "5Zn5xSMHNkEZzMNNPsfoQEk4wAGUUdUEbCHCwsawi2Xsv1E6zGuytuusoNg7d3xQa9URvu9M1QUnxPWXrAZKZBG2",
  "key13": "Bj149a5yCMVFi7bL2fArciBNwt1d7MPrjgP3KNnyJYgZf4KsakrosdTANUpKqhaiJAhucGJM5bJXnRgaJN8Dp7C",
  "key14": "49DTeySBKeTHwVrD6oFwMcgm9dsXKPVFtCFCaczpV3p16Je9d6aUd5wm5ppEqNo1UxF2qc6e4sBRHRjKgrS2FpMX",
  "key15": "4txfDSeU7A7nVDpJWNwpZyZhvnseZBCzxJGCzT1PUN2zETu3xGFiJizCqLMMSu5bxZrnuK8g9fE4kkVYVm9crfdN",
  "key16": "2KnLLvR4quqAVmHhz5QTgqU2cSWKJ7QD7UY7eeYNKRZZ6ciurPAQWBKiCBxgA6maPJGEikSJ9KTAr38KjJChLx4T",
  "key17": "DShwg2Egozhz6jjGSskC3GrFo9rBUFotXtcFBM6WBt1kTV9GUnjUDPDH4Md4KyJFd7WzNnMiGMmxzsAqLEPNV5A",
  "key18": "3B1kurPrqMJD7Uuccvqep82e98Cgx53cVTVPLPX2PLhh9ye9WpN3pxGEwzUqbocQQhwpZJKumr9G5vL266uM3omc",
  "key19": "3UVfNXXfV9faPKjum4J3huhdrPjfu49Z9xNaKmycJGRTaW3H8xpPne3x3YbJEoXLaRuGY5HBwAbePXjMKMJ2an51",
  "key20": "4kKV7RvsUTjUHZCNYNMumb1saCsf2wGt9prZWDSprMBtsfRHeqezjVTLan4S9e8cCvfEESaer9sjE55F626vVMK4",
  "key21": "5Wrh2bbmRprnzB753MWgcwU8ECn1KYsoFH7b3BcR7AWvw6r1RiPANueUDCxan1v6qJ4Da4Mu2HyehxJFKN6MqWdN",
  "key22": "Lp7zyawWcnCKF7fxo1pNpWWdsWyTx8cejWLDgSd7LH2FzT5kRpiMgFZjjaZMByQTiPSDMKSHdckvjYLkJyVJroc",
  "key23": "3ub7uGGi2FJyMEY6CfCYrK6YoYy2VuMgJSwFYgKGdUSYgvmo18XciQe3ZuomCZX374u2RvhTJnwziJaxrkw7tHn",
  "key24": "3PYqqpBXxQmXQgz6T2a4vm9Hk8kccEJNRxXRSDVdUtw5RYWhX2Ch3s3A6njZmqpYD3MJPyAe6hxXZPnhrFsj113u",
  "key25": "4qttkBhDYryL4ka5o2i3wsk4yqF5wiZ2DJn6fFWwBBnVYqKdNcaBC2Gj7dsU8zDfdC2Tiq5pj32qNXBypnc1QSAn",
  "key26": "2w5wdmNYx5GSNirWQodZwphgjPDH4XiER6NTiFm8f1MYKdCrNvXyF5nMZVG6gxbzJzRAATHbcJNXBNiSuxeBwTDq",
  "key27": "9FLqRGdi7JZ2uTmREbWzwwZ138tcEwYD8T7kBSnao7doPye4W8wn4XD1f29bdPFXtCJHeM29ickuoxacv325qUV",
  "key28": "2RCJ7QsBP7MC14jq1bnJRoYZ7f2A5d3hncjCHvEMWZWGrqfpZUuznzk9TV7MQggqV4xLQ1YLdZ7L9S9pvC1vSxDK",
  "key29": "23RGPcYCwKNbHxTpGEtWzfPGJJ6d354oTox7f84XP51YegLTdwiLjYpNnvdX2j5DBwrYX5bfPebwMHyuWBeYZjYU",
  "key30": "3dafGcT2tZvRfEHtNnJjBexqKRgLNoFh4fUTrvQLwB3jwhcGRTkAPKYDyqyAT3xsczzyyyjJvJK7P9ZUzGTuXJd4",
  "key31": "3D4nTSJ7Asi2xPGyfN3SwjfpCVoQJsgmpv254RH4g1E9WjBzPzrLf1XmdFqFhA6TyEs8guKkKmG2SJZs2dCszNcG",
  "key32": "4HvQ5B814PAyY86g7opzPQJP41oNXVTbzwNGNtNhStLkPyKUzzKQk92iCxPKdEm5CJVZsSVtuHRumKmVVgq4S53G",
  "key33": "4rfjVB6od48fzVoZVvPwbUiyPzj22Z7NuN9CF8ux6UFR3SorEQ8HDxxvLmqg6destyU92X2YRBE7FXhxrFGfB9wa",
  "key34": "5DV5ShGLkgzYutV8MkXjNLBKrGz92wEi17xZ1F3H64BB2xeKR47uU5GyY7dBxqof7zv3dRt4MeFgkoon2jZqKB84",
  "key35": "5e5FUW2WqWea9Yga4CDQHgDws8CUTiCCm1beuUJDZ4gUagS7DsDVvdJF4T83aJQX21TqzpBKEpSeizX1hmohRDsC",
  "key36": "3cQ51ogmKkvYFAbF6LfP7U8dMScSJ7Lmgg7a5QRwHrriQRwpYXG4kdaGuvuVPoneH2GLGFoePdst9dTe7c6E5in5",
  "key37": "4Z5DwGUsQbJvVU1W9HBCivw7fBqALfwm8nXWX5jhW7mkorXhaQvwgTJHvFr6kc32JyYBB3TZ8u2QjFZg2fvUf4D6",
  "key38": "5rnoQEbPJhWVSjZHAbDe6vU4B7LzsfLMVJYYfsGTm9JLar3khq4FPNECBhA5hwgz514f8264H3NTWBjCcr4hStai",
  "key39": "2NuFP1vGqNksvwA6zemyNH74RuimrrGwnxSH2984hGRpgh946ZWZtBzaQqNu7mKxHt7YJVWmENEfASA3mexLDXuC",
  "key40": "2PJVpJubDxYosdZaCuFFzpZvz7mi6jRaZAMAYfJyXVxENAmi99TG94VZ44C3JT6eCY8xJiMBtx9nEsurA5tCpDX1",
  "key41": "6dBQx9QoYemo1Jw3PazXJGY2T3uMA3nxBL5967MAnpC4XBi3WnYY9gyRhSs2WLj1zbEkz57znK3bXWuB69gKMnP",
  "key42": "cDRKHFbaunq9Wg3YzpDnxgd3Ru2BA5RdCteJgRS3GqAr4f2tgoWKjn2N463gcoJkHB3qNyuVPbcghsbz18YxZPE",
  "key43": "4KyB3xU1eP5gLCaWx1Z9qNWQgYfukpq6UGU4uy7rq9Sw9HNRkX9gZyq6yHS3Ry2LfFoDYffym2hvCT6QfpAtgMas",
  "key44": "51LtsJhducHWPUBxr28pjhLWNMq1EKkYEQxwiPZD6MgFZ3furGB9TjdaAXaMboC2R374XrqJfuYxtRmPWME4s9y9",
  "key45": "5QnQxcMTPrrLPkTHKRWvHxELcqWnJzBL94viLY4caEZj9JFzwm1KzKm8417wfA2rWJKktXVbqCEHDteKeKWJdtAm"
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
