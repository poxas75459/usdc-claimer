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
    "UcFafXWGm5ywKVTHYu6yMkASczAhSg7MEdpwgG3nsDYiviMK3DHqXHyoixRBvhqBgyUik7yu2XbjetjcFdeSDxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uJV74iUk5J5F3REKq4dor6Rww2ihZtdy5TcM5w1877hHyD4jWo1jaYK9ct6y5Do6hRAfjZQsnXeNjYyJYj5MmGH",
  "key1": "2wMz9syEVGRv4AEHxGQotbrxiSZpYVcNcAKGdfvGibFmjKG2N9ghu5D8eTzLWs9BYk9ZB3bB7ZFveHtCTVNcB9c",
  "key2": "4EiFuqfDAmC4cyBhFsFJysDZJD6B9tTiNbv3Kr5BY8goLz2eGgw79ZuiWQgQewrqBQgEb13Cw2z1ZAp98UeiaxSe",
  "key3": "2ZhEM4KXRb73as543meRSVorshHHFCvgKtJyihdiF6UGKVsbAfXhb3K674qDHi2jEoQnqihbeNTLEwNus7RuK4uX",
  "key4": "3U29w1E3qKN7Y2YYgfEiTGjmRAJQjwoHd8wN3kMTDjb6EB5AsqG8gvFrRKTrhFUcQnKtwtdET4x2HN3mZ9r64Ssz",
  "key5": "4BhRzVP7u8UinXubmgMvT1azfXeKYNQG88rhrVoh1u2BGysoLn4ftFkejB5x44mqNi9SKP5cmNJsr3LnzUxmcw5W",
  "key6": "4HDC82TqPvTZrbiFSQoz9jLTvCNpWVBZrpPDvSoBXHvjDCFppQAqepBYRjuLaYbiRiJ88gjKAjYJNsGmrJSoenK6",
  "key7": "3Prk8Qe5bYc7hE2XSGRmozJgHDdv4H6SigFUARYQZhEigkihVhr1VuzyD8MYvuESrsYzNmCampKvFoP2ZxLy4wbr",
  "key8": "4Hj1PTkYwK8GGjyhfSVsRT7nS9LS7j1xYRh7qVw7iGBjaCC6JjKi2VLGgjyw9nToCwNk79UkHzHfTfjeCEdDaJac",
  "key9": "219RgCVyigQW9wEk9VM4uiqJvh5r76RDqg4KiNrMpJS5V6ANmNtJ2dCwqQdCgM8vKFeqnJ6NoahXbr7cFBKEVFhC",
  "key10": "JD6qw9r7gZzWULqYYPjpFWvYJZZgcAsqCcun42aTe1gW8kxsfPZJyBFtKZtBb32eXnpAatV5vWPjdkSq1sV11Vg",
  "key11": "kcXyeLJ7EP4GPseoK8zhn3ZaxQvTJibjb7imk1N7aVXRBrgSSuiXsq1KSfH15TYhBAbEstCNdmXfmnkSFgJqfF5",
  "key12": "42RaUGxNdeeUVk5efGDgjWVZVdTx3cwrTWXzvQwbri3eWoErNn36NznWnyyVLTytmfDj3RR5LMtnQdEUG4QNmDLJ",
  "key13": "57LSUeP9BcNrvWZxZjj5oVDDp2S9SjUaMu2aApJb3NzrLTm6VNKW7QNJMxANFd5mZh39SYzkF8hgCBzDN1rR6kga",
  "key14": "ZPSi4Y5jNzotk3BPmhpswrE4Q6eYE1ETNcyvNELaMpvdekHANffDBzeZctkxxSSKiXFGjW19TVrKZjCPRSBgqgU",
  "key15": "3J6KqC3ZdHzAo8T8mQKagycW9jDt3a96FW6At46ZVpWeumF9jREQY1i8mb5NzNYMaGV94BBqKenAfWpaLunW6Z8i",
  "key16": "HnudyfA8U8CQqqxrjcR7mq3FJiW4SpUGH8mDvBQ3bGxQHpf1HFbfeHKHXrVq6GnpV1GpbRfvPWfzAD65nBu5L9i",
  "key17": "2e3dzMcvM246UXoUQoCLYdqV6Q453kdwXhDqD6h1CYgm3DyUW2jcZ4VABnrmrjDUYucWrRAiohRuB5ffi2CTCfk8",
  "key18": "5pMmeSiEDAAR3PknSTeEThmWHDTMeVnMfTztE69gRX8YuiKzrSq8j8WrESfLcmaybv1LQD4C5SiBg4RUs3KEoHTi",
  "key19": "5YG2arzEGcozcpXszD4kpJm81wHwKsbaX2KMtdnov8G4HnMNBCguWDWpFV5u7n9PMY6LMxjfUUCXnSjwPmFvwLZn",
  "key20": "5ahZRfz27raFKaMowaYSbJLYNhUZCDAFWrWNnXwCMi9HHhmscwen26Lx7affsJJ2dJPr3b3teJjqh52XgN94Xgmg",
  "key21": "MiwWz5m9iZnXCYDgVT7sNVjuqEegSRVtHZvXHZZBVsYCvHMY12s6LJSeUoNyxA3AnybR4cqA71pj4y672s7KYt2",
  "key22": "2GYkvziWPX3Ewfw6fJmpM7iS56rCjKaqHpvnLT6tzbpAGWDHbuJf1Ht12amK1q9ebrH3NfrZMF4LTjkxcz2TvGiw",
  "key23": "4GzZL2CKaZcLEMQe8oP3b8beMp7iseYFsYsZwNpG92PTiykFYymRCTazoZYLAkc75dEwycwKMw676FXJEEQ16eCN",
  "key24": "2YNr6kNiNZeUpk418yQoHKaW1Noa1nqFbrRe5VVwMPi4gKhkrkmrRprWNbcEYMnJigZwR5p3g9duZ3KNC6iUVHri",
  "key25": "ceYeTyzxCrG9udkkKpd18KKhZBXhaqcFYphBzwzrcPCrYwFjDaWaRTZ4jv5PVPJ2srqfWB8WuV4KSBHz2TkgeCC",
  "key26": "2FeqBYH8TqiutdnxDe1kJ5wssSpfmjQjiR1vmvSD1hKgAYThDdm29BEjTDvBbtC5JHKDDyjxSEtsts6xoSwvNiRF",
  "key27": "3f4EaGhniwKbWzrUyQ5HsvZneYoLQa4ayjji6Tt3iDrgR1MseFHEuszmkSdQEbms5ZeGd3HYpzBSRBh71zCPZfmQ",
  "key28": "3Ck1uXtNiEVChrKcHPSD3A1z7QUaUBfG5gbFMaiRQHb7iZb7WpHFC8HptHyvREG9ygbmKHkJQP7hb5CQPL4Nfqgy",
  "key29": "4BDamHq9M9v9LZS93mczJvyhcH7gNTG7ub7JxCspDqjG8hcKNvCcUebczSA9PxFseKm8tFkq81HVJN87m8DTbCpv",
  "key30": "m3pPZyhMFbuY5Tcuv8p4AvF2JmSd3HH8dqW6Z8XRjn1s9S5YWJTwThmuWufNgZRQrE5n6Q9qHsNxjagcNpkRtRG",
  "key31": "4XWEESU14WEaf1g4FrunwVZZsob15HSahwH4r3f3rtxdN7P51CAfZSdwQcmKFuQyc8nLsMgSxC168hk2RHVHaDyx",
  "key32": "2Zk2FgcV7Ctsg2mitzmTiwhF6gFqPyarj9SPfWbjmY8CUF1v74v2faUL7HqJTDDkEm8fNMcxU4f6v9BKKiUpEHXD",
  "key33": "3g43a1udhMsbTDz9GKJqRSTccoNGifyCL3agZCpvnXrRgYa4i79fmtn17BnNrpQ9ekeeVYpjGzqUYtaRPoD1CZtL",
  "key34": "237uwSTQbPhwxB5gi7DqPKhUEHTsxui2ubdr1Sf8sFSGU9TRKKU3LV6B62Qyq9wM6Yq199Vss8uPzRPtCX5UxB2Q",
  "key35": "2zq9xBVijecV3MFpfxT59sJDtzg9y2s7ZqC4D4AXN7HPPxC2bj6pByEeeVRdZEjtVQaxPi1DTdoAfomo9EzGayMM",
  "key36": "2iAtKCteNPBUAR95j2KQYiNL8o2MFSuLhmfeoMhJzDJumzeoe3Dfnw9tZKswoibaX9UNwfhBaLe5BfRLRQAHDgB6",
  "key37": "3YPxkXwQf7ti6KM1wednuK1dv5HtNKaYkJovUWnwuspMdtCSWQnxQfLUjbKrRGzTNLq7FBJscZHh7iUYrfCUGGk9",
  "key38": "4myFuxPV4k7QktXFGKok3iExHdSTomSqgKTYJqkRbVA3gRHGxXDCybBVcNLCvJBc4UjAQUsUEuWLV7CRK8xAQ3YF",
  "key39": "64Rz2vLfdRSkTo2cuKYGS8yy2MECHQQSz8EMq25WZVzt1JJ7U8iyLiiSD7E1csBnW4j1HHZSazUocPi8a2FJkpZx",
  "key40": "5j9K2sWyivpFHZGki3KdQE3AG4BkcddjD2XWWc9D5SwpuRPrqPcHuJXM3YxD4o1FUA88gCYV4PMtqtkY4hDXrnM9",
  "key41": "4bs7q2BY9BRWWWeJTfZrZLNZ67KR48k1aEYoRrAkoDWtM8KLYRKkVKSnAwsmj4NMaDWQbARNSAckW92jeweHKgSr",
  "key42": "5ahVA5rqYxDHTFd1mJcWukmR23Wwt5TipSBfjfHLAcojouzsY8zD1FkuFFzR5sjZVfC5qmxKjLD48PfQ3M2qjnGK",
  "key43": "2qfEr53Bp28Hqi37WvBFx1YQbiSh5ZGEgtpvX6FC9ik91bgHMck4NWRfDdA2BbinsQncUzZrVzrAdWWWvoPJvtjB",
  "key44": "3iUWSvp8VpH3W9GNZ2vsfbKGtRWxXwS285Ne1QJAhqumo8ZHPc5EoWThCnsx9UwN4LL91tkfq4aMbkfoCdMhVf52"
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
