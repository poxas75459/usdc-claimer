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
    "5hY1qym2YfMdsLnpuf8fwWrGi6tFvsfNF7TAZFUFmw3D5sZg5aWZ5jcXWqF296YXhsGnW1rJqycBvcFBu8zb4nN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65YuFteroKun4jir64CWrKccZNE4fXk2r7f6bEDYseTML698beS2mVMqZBt8S3SihnZjQMTh1j3KYdb6kfEtfm3h",
  "key1": "26JeFcZ5tHgBPHeSbYPJePFPmbHz6Nm6obf24NZRnVEWhkrJ1EukPXsjpdEESztEGeBqdPoajrQhWqWM3aYwP8v7",
  "key2": "2wAS73dMqMp6prW5LHFQ9c4pk8To2PFWdFJkCPo5VdWyY2LKReTyq9RYsATSPrABduLXUKi6MBucx24n3FUkKNLA",
  "key3": "644WEPKif9ZtAPoyNQxqxp1E5JahvxowuTcozkaFx4P76NNXguvXukrKKhTTPzgTFekPT5iRf6K4qaS6Ku3N35DA",
  "key4": "5mw8Q9XRLSxYQ3rmPp45PLze4droE56Dz7SQtNk14jv4Sove6yu9dPZy88JJHmMS1vCTQrfVCm4ZV6q5RzptMqBd",
  "key5": "32gdvLWszZqxS7tjeHVbKm5giWfUJASeupgmPcMGSZihZozF1ooyztDFM6Z7DtNnSyzKhG6EjQh18eFHs8h1122H",
  "key6": "36MabgzH22t39MSdMRa3pw8KJM2x95HKg335YdcLvUjq5rrdBqYyghpkFfZbTCi4tpwNBAkCJF77yYvThf75mt8R",
  "key7": "2UBbPkpw4Cp4NAY759zWLKqX1NvXjVk6NBKERbPZfLy3Gt8H3TZRELSmq8hEeJmzHYs5gzSuhLudBEdP7bTYLMhW",
  "key8": "5WyusCkRMYsMx4GmrvoEwx4Jk85QaZyXiMdu2V1Bapkt7Y8NEbKxecmZ6saUs9y2QwAq3HufQizBJfFFV1zb1K4A",
  "key9": "znFfEot1GQiGchqr9c42Kk6xtq9ncF8GGMnDQSBXsz43e9TFcNCyx4gjEKoyYB95uwUtZpZ5atsWnRpin74LJYx",
  "key10": "5Ph7vvT5YhVVRY4rda5wFUirp6pXZ4QQbtMctzaS5QCnDepxP6SAnQPUEonPXB15z9FoPUcBwUZd2uEF76p8G5iL",
  "key11": "j77WV1nT4JQWcLtLwsQN2fUsJvW8p8xHNEyLJrXPpbrgwHS8JudiMUckiKe7AwjZsd58cAHxqFjRxccyG8XkPm2",
  "key12": "B2dguy6mXNq69epaSG8WWxPezg9y1wj8ETxprNw86mQ1DUrykwvAAeWBTLHGz7dcSXt87MJceq1Cadej4BqBQE9",
  "key13": "5PxEcs7YzB9NXNNWoVesfPN59CpEyamYDtEiwD2Wm5q3KfTLGoLHSmw2qpTxyXzfWU5H9SoDSRnZTo5tZYoJc6c7",
  "key14": "rugBrAwE3EwCqMJZHTCXvjCnPrwQoyxXgtQzTZo43jQ4erewX3pBhuDb752EPFXWEYW3qi8qLCVfswXrVCsaQAh",
  "key15": "3h8VSn526KXF8qVVctpygDXcLE86XbowY6zY5wRUJBSL635tkZ6hoUoemJ4t2KDQ4ibCZxBVjyHQ6B4HB3MvZaZ7",
  "key16": "2fTrG7XmfX2cgtm5L4ubk3tcNQQaT6rFayP7GkT7rsCCKHueGM2EMxLEDUTPv2HP1r4U6YLqNYYm5nHHaZwN3zVd",
  "key17": "5Wgv1xXGjRpH6cYmevziVqQ3iUyZfk8MdjQ1efcUJEhPPmxmVxUmXazc6ngiwUfDrV4ubw5SGNKn1gsNmP5hQeLD",
  "key18": "2fSVEu2hL3PjqxeUzP7nywCtQzotb7Uo87F7fLBWHMwobM1nnL24y6y6oYcT5GvTQGDuYMg2tAdLU1Z3YhZBzpKL",
  "key19": "2YZZdzzUAk3N85zBTfw8FFb3UETLC4BGzsJKGeyqL7VGyAwjcch6vv6AitEqmYMMjydSfPY2LZ2WqamDH36nAG7u",
  "key20": "3NjLmaMSDmzfJzZUHzJUWb9aCN2YBGDuexNvyQa514iuciWHhMntGGqZAGcwzzFFyh5cd4xxNPqYw6LLWFUoZQyw",
  "key21": "3hkuhmjRhJt1av72a7EXLZQ2NcTD5FL3Kc2THETDg424uJMcQ1C8DVxEWyvNgmRBLnQiiqkG6Toa8JimreAfCyrF",
  "key22": "4eYBJijVreTux3Yro5KLhnXoMahdc85rpah7362UQsYCq7kTMoyYvFdwa7PPEuRw7bgvjUmErQMR2dxYYQtCG9fK",
  "key23": "5afJdcdf7FHn7zDsDKrZhgVbgJEqGVnK83BgV1rZgnk6gvCe9vSztCazougWDh1Tzonm4qpQm2k9qSyphGuEWoCU",
  "key24": "5jnMUew1Du3kaJaewFGsyYH9hEwnD4gJtgY6SX1HFPawUujsgqTzh1dVvBxqFjZWqexzHPCzthdMWAwGNb9Zh5D5",
  "key25": "5fXDrnDs5u84Kqb7jWuB6Bs5WyQeek79BDG6or3FKcYYcG6nLdjGhkxGM3nuEGALh91c5UoJKomNpNPsHx8eRSiW",
  "key26": "5QUuUG6UC3zfyWSohqyJwgTzcZ5MpbX5SXQg6LfL7SCiALfbbtVGEV7YuBuoMH3X4htiYr3pUTkjb9KhfdMe89m1",
  "key27": "4tAbfACyDG36EPqvubfFMKfCGN9g8QsJAUzFYr6H8qr6t3TKjxzFmrMcd5dqQahyoK1NiGkWLUU9qSLDaAprZCEy",
  "key28": "26p2U1bQAZfnTmBzCYJmQmLdayifCMPkg6MvLYxRCW2bhriYqKmkKz4b34XPBLeWh5CQtsw9g9iAsV62HFfeWxnM",
  "key29": "5y5e2XqYgLgAon5oePSvHK1BxBTrRpYzivYryNpPsfK95wAcLtKTDK4RMvp7Au62BxRGiQd89NN9tWpK9YdRwooM",
  "key30": "5KUEi132o2oQkzD6RSDV5Hq4S5oqDyXPJsLNYiZW3ee8dwtQMxbh9t33G21rroQvewpk7cHREWGQTSTKZtScWGs8",
  "key31": "5UMqi4kLjEsEU8CcPBe8eNVgVyKqxiY9tfN2ma3P1RuZdkfjCnsxYYuxGFm2Vc977kDXtQuaxuNsKCNBPKqsAJ2a",
  "key32": "3jQdDem1o7R4WkEaZbiHedo7eHDK3RcRUUefmGLm1suBEdzcAdLfgNWDniJxvVaqwzoUWuYkAMitQaqXeyeRfHd",
  "key33": "5D99cS2dSx7EzvxAE7nnireJ7f1yrKuVfNvqYzH6BbQpdn84La3UQNWbne5oDwnX5kqfdah3GppJYCDp5CPAeoZ1",
  "key34": "38iaSzjPLG2VuvFvrEft2m33pHiCVcvoensbfxuGvAUbpx7YT95g2wAjuDYoW9rqwNDJVQzbexd3gHgkVoczthTo",
  "key35": "5ZE9uKLejCabSyVSf123KVBUZCjEdtm6RwZWi1hjpuKobMgWrE2o1xiBMey3SEhz2dqDcfU3eS2ctHsfxkJLn72F",
  "key36": "4JnGAicgBM6fw8jn7jHuGZS4Louf4UmArogVRtB3wuBiTReqsD4aZHFbS151GLGxRnQNmLQxtcgRcvwgYEJ1A62E"
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
