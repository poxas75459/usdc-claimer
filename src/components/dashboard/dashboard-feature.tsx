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
    "EbKxMVcWoVveZzWUNj6M2GxGBezecxGsog2Peb4kXEoozDLQ8iqEDubsd6PjgMVeMFucWqiYaPTBfcPwAdZot6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjxezMrJWEa7YY35Tav9UDrS5ctmLNk5YcWzijMjS6YXALeUrBdPCo5EdyWxF9F1Se37rZMC2gBKgSZVwWgLdxp",
  "key1": "TEeHDaWTc8vbL5T9PnAUtoAV4fi2XG8xTRJDynPzjMcfYqYnAeXsYuKt9Aow1ffhw3aREweBYZc2ok2hN7N7Cjr",
  "key2": "3n7PjtjWcJFctFixDnqPvPAoKQ6yynU2kiawBSrWihwNRqiCq5kb2DHXRkiNrr49mVUbUdwTS3K9iijGvH28Aurf",
  "key3": "623ytowngzCWYJZijVN3fsWJj3HQVefF9TefK3wcmXKHvbiC3TWWzbYX57qu2FPRynJjdM1KeM1mbcv6w6gT8oyf",
  "key4": "4oG21WbLd8u43iNvBCYjkPcv9t2YBfjt3dA5L7Yuh55MNfBb3DBAbyB7WygcvFJHnU3doSAkQhpbx1HbWicCHzwB",
  "key5": "2jPHYtG84FMbr51RYEZ5wpuGAYAPRJNdMX9jtZxJWTKRL2eTLiy1dRE29EPT2ju25TP4n3pzNVdvUpcFAQ387AGi",
  "key6": "628ETdy8ZqiGKwrrh5rQwjRZ8tK1fHQdaNdvuH1ZqpkE9GJ86tj35g4qYdNHcwHGBMWyFVX4pPjBcJPMCLmLpACM",
  "key7": "3oevKcacb93vH1H1inQVmvjajbaNqHXerwwKVCXywQr6eyumd1bVvFdPJoToqbVNVQRbWMt1xULqWVkCxkqVHuZP",
  "key8": "2UJ7SzGWDgtqHA4gi7sZEabtDxZENofP9woPdYbxcoE88Z17gs72D8pxuiusfPhssPisyrw6tvKxagYupsMTRR42",
  "key9": "2R4Hr82oUy8b2ehXsi792H9vx2SMGDMYBWBWzwRM3FCrwKpbW6RyB5BvyhRFNnn1HqyTd5BhZpZADefPN4xZscTD",
  "key10": "3PjZzbnLrYcLQwYTimQqeCZgy6NMeMRbep2goNkgq8ZMpEbFx8noqRaBqXvn8UKAFruxQPZg4CXwEHTKtopwHpgd",
  "key11": "3RUybkGYkarXPGeLSgDtkwQ5E7kYLpEaNFV6ouPJKV4geGg8RFY3c9fxrfqC2P7Yy9hnNeHmjZ8RdjjU57fBm8Qv",
  "key12": "XAtRRHvfzuHfxK2gNwSMXf8JtJNep787ZZEkRxZB4MAu4ZFeP3opKY288sgpE3BGDu55tHQ6KMAND2ytgiUA4nH",
  "key13": "3ACJBfYA1G5itQLPByMUFaD3N3PFtGTY7fKh122GAmL5FpnJRP2SGktZDd8bTVJkxTxQyMW1ohaGK2s3Dg8mkAZg",
  "key14": "4Q73UEDSABwurF8Jn1w8vBSn1QkAUsoicy5QK1da3WdYuNCQrGN5sXvhgS4tMUSynj9Q3frcYFLYBgSg433Quup3",
  "key15": "4E1tsuMLX4g9nfoV3JkSiUWdeHBTjQoeyBQSk1oYGgyfCNYzzEAGEd3yTGiPBs93MywnfDgocHQ6au6HaiULFPfr",
  "key16": "3iCxWdx61XL3ZaLTZnjVDnFNQqoPCKXAkNpNwngxn7U7HSYR8yGyia4JULbkVuRin4riWN6g85rAAX9RSKubr7PC",
  "key17": "3Mz5KHo4UQt61KEyRKCmwVBL8CKf41GTGqX3ksPPii39ikdEN41DmBtU75z16AdsEgWRwr3nqSf8gE95eiRzXuyN",
  "key18": "5pD7omf2yC2bo856aiwpESUzfyWm67qgVK2gAmi9tQkafHZdEVSUQzEEUahg3gsBPuGSbHCmZL6tF1CGW29FYrbE",
  "key19": "5FJauhcrsz85YoYQA88xYQH2EsYMrW9dENHQ2yXyWJontV1qntWvgjKp6RuJWPHPYvmi5SHubyXJmDDoNLUzc7dM",
  "key20": "3qH1NjLNWhtot2if1AvDZYGTwgQVLNrg5kjSwSbvajBfB1ZC4Hb5EKBHti3yttbhn4C2ZExPLgShnBBheyFFn4c5",
  "key21": "23ztU4Dnj2qJU2A7RzytQVmpqHiom3DqGzoXueZn5VLfj9WmSQp7fYGRjM54aJsvDu1K3bXyHr4ozd4xCnB61BAd",
  "key22": "5QPB6XupH4b6RjTuxibk5LumT4ATgFMtqKoKHXZqc8XpZ4TzxuewDwUTVWk3FAmb1yAXeBDTdhpHSdXBXmmbpL3f",
  "key23": "JqNR8H9GiCNG35KGkiF4Yujborfg91PmtLyTXLKCMeP5o6395kTVSoatMMRjuNRVkEnVc4uFbRod2bzgvjHnhWo",
  "key24": "sVkXL7FvsWiFFc3cxumcYJBZ3XnZpSWXYxShGKNmWtRLUfcYmtVhExv3qPcpe78LomK4crTxuRrsJGGuRDLSp2x",
  "key25": "5MQZBSZ7VBpPfHx79MicSYBWUtueRBWoqV1Bxi5vSt4ybTfmqNMejRC9RWCTR16t8h8eG1GrFCuFnZi7TpzF9wmd",
  "key26": "2ToXPjfNLxRgt6dvtQRdgHv4udModUjStnPA6316Rv7cF7zNVqdMNm7us2yT4H1Ns5Mn1yxJPmKnUuAftwgu8YMb",
  "key27": "3jjEBhMpSH2eJLViMY1tBUURvEcxUuGRhy3cZ65QP3tAxGY441Txue1hAm9TNjeBJwmBqkKQpP1qFfxGP6mxUgnE",
  "key28": "2tLNMQULEbvwEb5cuZCBgiEviFvYNm6PmfUku6wk2yqqpTBtfUQpAfSojaLTHQLdbRsbiScKwirQzMGyDSUvjHnr",
  "key29": "4BQXvMHxVzrjmPbQ6LWZHHXBzQBrPjziyuWo4W7S97CrQYjUFrQd3roAFPrbb5gsVKty5X9ELQ78g1ypryFNawZ8",
  "key30": "3dZ88hyU9ViyF66Ni1pKHSnhHi4e8AYZiAkKTyjcjciURtQgSdPDmyV2xi3mZRACSSz3BoX98Siic3rSJMBEBy3H",
  "key31": "cL5tT3f3fkjmUyPuFW1PqzG3KQHS5S67LRjbzDTWXb6gPj65MAT1dojqqYtnHfaEhPWxahJ2YfCzcSUx2s57wcA",
  "key32": "2hhRUgAg2wwJw5i2PTuCqmvbTnCKfvjqBNhEukoJQ5TesGwtxe9WDWakmd3iZgPMj7uGL5AiU8uPr2QyzXs5uQ4L",
  "key33": "2rTRT5MZpat2WbsXCY9SX3MXJ63fkyLZqtq45G71DHpNawG1CRRGBgq4iZYzUahkHdFiPKDDKWMm6FnX6jYbSw2L",
  "key34": "3fDatRB5LQQc96qJsyuXcRYjZEBHWSfoopsEWRjLeEXS9Xjr31eyuee1C1zfKDrwRw7qFUmY1sS98hT1JmToGZrq",
  "key35": "5BGzaSKSZL443dZoE8Bgpq7cMpyfyorrimBHZgXLPtWcYrtoderVA4kSxyXqkH7KEUSfsgjbpjbJ5nuXCT3FJVA9",
  "key36": "2ngLZV3AkJxh6bnmdp8Ata4kFZGoVQ7kC1MLihoPzjuCoPTb86cJC3Ae6t3po2hAHQjLEb7ZJDAXeYVBG3yT731L",
  "key37": "2Lsf8FB88WFwERennY9cUhtwU8BFhKAjqNSrJ7AdTz4xdEmaSXFAy548NAVDVXRVY54RePgLULJ8ibzHgQx3J4er",
  "key38": "55FWwHhTV8RbPf81XpKnRrkp7aWvWqZJMJfQg2VFJa8m2U64UAHJYCGUoftu3JvhG9xMjMPLXBWjN7haaqZuai3A",
  "key39": "3awZzeDzVDFmxKShDd1eZQVY2BGBXZJDktZpwJg7UR6yYetUeQhqhEDEeUzyfeW1hcAs2b3wpEg4sbZdBL7N7mUf",
  "key40": "4cUL8dGzuT6BjS5xNWbfmqeJeJ2CYvgpVsWqLXUyjETcrfh2UBf83DJjbr2DYYoFYznEwZG8gAoMJtz51jPAS35t",
  "key41": "5TqEJuBnStUEkhT2gRyz5fj38re5uxobW6Pei9QjLu3PfeH82AA1ZA56kxK66pXcichBBo9ZXA3aPX2qGznps6aQ",
  "key42": "9ouozz8U4rduFkh9EwVCDW34STobXNkixAx8BUJ6DtqZFX6rtkqTJm6Cte6JPHGJ59K1qBmY4BzgBaqiWE2LsCt",
  "key43": "3vnTpTxXiujHcCNT3avkcqyagWe2CDyeNCbZNxrJ4Bt49xgu3bjMfcD9WYtJ6nv7eKVQ5GUnGK49JjYm3jvcYrKY",
  "key44": "67JLz1AQWNdqd9b8aLR8q8nbncEYzzJF7WFu3GuxvMfTVLfnrD46TDJPaWUt4b8KWgzkKzBAVD4CHvu8jdgoawWt",
  "key45": "mcLF8zh6CKFRrhBHrkwovAHgTcD25D8ixkxnmLnV96WziwHfBj3kAoEnHkPjH8suTiCCRMYuXFjodJhWtD3YNWC",
  "key46": "55Wnkyj6piLJQJEWkSNNTzbGq1FJL5Ynw5KtTzxqCYFcyGSB6iyRKQWKGUTGLocRtSAYbjYHiKEWpkz6nhEFJXhk"
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
