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
    "4enNoyNHoCGzmgU6Kj3PrrA5kq9vv1N3rYG4RGWXzvbWBgkuu1yUJQh7kCJHokPx6V8crfQk1esbXKugs6eZTCmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EGoXHfspjYXbSoTTurdCRxT5ESb6NEeECKxummRL9xb7Q3KBjhCQ6pgUS8W1FEvoYxdoyebojCNbyZVRHjyuKzF",
  "key1": "3UxRxs2fEZrE3EPhSPmNJDHfgaQoRcxqVCmgfFDkDsDiHw8hRbfUx6GLSpgug6vqHtHoMSQun4N5rqGnC3LHMuxS",
  "key2": "4oJMK6QvSgyvxPL93sBNgcbcRPL3hWNJCFoDp357CHQ8f6XHAK54PMuyThW4B3VYdFdXTspmgEYRFdKZPtyEZU4s",
  "key3": "5T6kP6QfAYGJoxt55sKs8cKe1mw1w8t91siwpQjnaWq1XXkCX6ZxzY3y8FWP8dSMgoffn2E6ZPBdrkjthrKHpwfA",
  "key4": "3ibKn2BU6MmYtvAWcQhJtHfcTndxDBJVoBGAi8tz1ocx5fAoAtAzdPjQQZME24aAVaZVgkx4tYQa5AyhghK7WEbd",
  "key5": "3TfmpJC7fEaQFBgn6uSaaMnvyqLG9nQZwhFoBS2BfN9NNeZv9Aa9u38xRzDMn8gtwAAXRkKDmEndWtTC8sqr5T8u",
  "key6": "5S4RrVkqbGFsdBvYgUrzYPmxLJcCEEJEwGs9sSpHmFrD22PRRJ8dcRU5ET2vd55yTBJ1v1Jdn4N9rFnZu9LR69TL",
  "key7": "2TFsgHyWNqsz5FgrGKNNNeQc34KR4DU26Lvy32Xvw4f9fC1RceEWYoCW8mLT8v1C8RZ4HgsM6zBvsjEUTnKbSmjR",
  "key8": "5GqfvotVvPcJTvWyoqqUL8qtMocuvUXxXwiQMzr2M7MkqCEC4MbUGg8CTn331SrXCXZ6PdQ4JBScS588ohjtzeAL",
  "key9": "w3eDiD9NqDjhzC3K44R6iX1wwwfFnUjfVK9aVQT5xmvtxPJDgUYVVeWdTynZMxsSSobZcxpcPSV3sADQ4xduNPZ",
  "key10": "55hBQNu9vqe91amaVQGTbqxCiKGypwyfgiMiE7NcWeJ8LEQW69UJLnEnknJs2F3xRh19yPE72Zd2i8FJChMzfmnw",
  "key11": "3hynAqmHciadP7unqrUvEpMuakP8gQMnBxpYj17gnJQqQ5bcc5sNZhkCCCgzj15dcb1v6dtWXLKv9RoacWPg3UsB",
  "key12": "2C5YcPEWSgSfopaZ97j5f42dV3xN3RXQAGeEurKEd2uv62VGAqKizMnDg4HABUnL2HjhCyUQZR2WBtSS9YeHzGYP",
  "key13": "NUk5NxGBP9oNvWwVNqUQrXiJZUUMHWiCaojEXeBogTtEE1xrjEhCCGpvQbbs14xk1YsFxGqayRYpAwHnMzUMz5b",
  "key14": "3QDyZiZzGzRvhf5z1K5VYMAvsB3mx5xtGyJDXvxTsj49GUXHRzko5unVQ8cT8cmwGcPRKERrb4mBekcCakyCm4Do",
  "key15": "2G7s7uXSojKSdAnEc4rgDVq5pbBZe44XXBRrTMsJivUbTRNBpTzKthDb7XavEK1CEX3LE88bHFZJSuU49yiJzEMa",
  "key16": "2QErYYjz3VQTc9FZC1QtB1nczTfd1XWpWiwen6pwY2uz6p1BMu4nMaBQCCe1BUhM6TjwwL1r79w398kW1ukZg44k",
  "key17": "3HFGUegHjArzPsYq46fnNm7f8vEUqEdLJJXu6v3HrFnSA9HeeaRxcLS7SFLyEMAqgvkQ9HZDDvbFK8p3HYsAyh8E",
  "key18": "3uGNurqC98oiCFGMA2oCgUkRZaiEB2m1SbCZu1EbH6ogRBkZnt3pwPxSapqQxre3EjpgnEoaetZ2HjADmfA6cUwZ",
  "key19": "44ja8QkQ9wc9KtfnL1shAFvW8PBVYsDCEEYf3CRRnLvMmmr6MMbhPKkpjz6ofVT12f4U915MeJvDYqaJu6KXeU3U",
  "key20": "5SPGU8YXMq6TicaLDK5RKEr9qtsJtSgsYQ96eUikLSQk2zc3MFyVTbuxDZq3V7zheUvuYneW5ZTB2Qj673g7KQ4t",
  "key21": "2rBdxKSJYzeKqmhrk6hY53AcNCepbQ5nwpK3b7YMjYkyjR3cbRvUiPmCwpzFg1eq7irhjPMB3oeNVsebMYCt8C7G",
  "key22": "3K6PTfuwE92fsTrYJ3puRppjysUvmxkoGwanAA3Y5NQWzs384MY2yG9dXoaLrLH3vntFMSHZFtg2ndJgFh8HK91n",
  "key23": "21ny4Wcm54hP6NvXdBV2VQp2U1G9bEjrvXeGasJrvku2xrR4taHj1po4pHSh8bZKiRkH2V6RKqGyvKTf1htjf2wp",
  "key24": "9YpcX2hpiKF8N4Y1m1ywN4si318EGSJwBVTrdR84oWaMXh9J6axFFc3ZZG4JAedpqeU4wTVWvZrzBnn7qumBAz1",
  "key25": "5CFhdzxyecx8HTgiSx5utf1tkafx6hDzmJVPNhzmTAPWZLz3p8M72S8hK1j8Q4S8vdzEL37knnvTuPGXZjPjumMr",
  "key26": "5xqtg4ZCG66PZd7r25wLGjVDE175o4FK6VRQ9Yqb8SMh1uLQt2NtVyg8DQpu1tinnJGT9L8mnAEfHEvUn7XNbGCk",
  "key27": "4hEj8dipSptTMT7bKAZuE5g3FB3n22Z5pexv7rY843DYh8ghmKDY2YtM1JpcSNGcssXcBpN1rYq3BSqnM2NV3nEv",
  "key28": "4MKeeZ3oxydL6oCMXZVhVLuQdRUKVnj9uFSYoKjcMTwqeY3noWtcikPmctUFjkJQiBPirYJ3mgevUZLiJrc5XVma",
  "key29": "4fQvCfQMWYJfhftwZR9wXnuZPDaL8odSkhgrNvTvKBczEk318rkbSYTuscW7UoWWK4WFHSvsYqcPpYNWLsZzSfSV",
  "key30": "5g4CCbJo5aaNEH5di29gJjkALYfQ3DCVtKt7VXvZf6CTR2R6rYkV29ssBQhpm5vf2DbAmR614gyy2dEhRrRGf2ZV",
  "key31": "3KU49wEhTigtVjjnuLu8ZZdkz2UFPL2s1j4Jvu16zfLdw8hoh6zopywAB7u3PjcDEf6n96tdtP7cxz1zE31paMS6",
  "key32": "2VTZT1Am9izkhu27vr3VKScYxa1FYYjnkDLVGc4ap2fid7y1H8EyggpzPX3W1mipgxFWLHhPnHajNQukdsow9RMS",
  "key33": "3Huvd4Eq8BGEdeFYaLZoCTphG1DsE5QHG5czvV8cHk2fyboLBYENpj7sPHFDdqb66gF4bfVwahBmmZvHCq6UfRdj",
  "key34": "4omHjc16cbDAvbEZTwjGrLyFEE2aDYpMeRJxoCb8VhBj5BwYERcTCPwoG4Z9KdJZqKhLEtqXz41uB6TY2RmADA7V",
  "key35": "5JKVD63ouejn9ydDAp9TYdA3VseymreQ1oVUmS64soLDC8bRvLC6f5MvKEMEmLHtPrAjSFEahsEgS3tPy7RrUG3a",
  "key36": "4BNcDVu9WyhbkeDoFucKZ6ickLb1m1mcWx2dasi1MQacP9n52qQgw85G4dztaefNwTmA48VwynHRR563fhKs1vNf",
  "key37": "2fo2pNKtFSAZ7fs81gohguiTYuYLBJdGnx7s3SwbuC8fcchHPxczMcZCuwgRPmE9oyLQpEsmsA9aKRCHztzHjtUF",
  "key38": "23rAw5VPnq9bvPhZx5vT9oX8VHAS7gdD6oAL2MFrTqQRbfKtJfxMFfL7s94hfzKJ1ya3Z4uN9VSBKgvpTPsDoQQa",
  "key39": "k4srF3zXTZxjZPTpbTPJ6ipLAPPZxu4wwixxABXmqQR3eovgVufAwRnh82aSoYBVrXPBjATFtPiVEA84RwHAtuW",
  "key40": "5aMGg11FGxnr96f524pwc9cRjtaFyRTGjBCErnbzt43VStNK1wWg9BDkNEZtDNtWskynsU7kJm9oKf8iHhzgiuf6",
  "key41": "3XknpPWQd3yFxmQvH1JnnwSKn7UqMoJLvzvdcx3K6ibuXjcKA6xZFfefxjCAjJb2DyeWs7ZzesjggKoWK88avT4j"
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
