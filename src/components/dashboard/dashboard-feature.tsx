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
    "42vWortZb3VS5Xm8rBP7cAcDoPyD7jZgbL4UiJAxBC8Xri9pVpY3BwXkGBJ8HSacKBx6jcr6xTyAb5scRFnN2d54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJD9vucQAKg2CFqhuokqSRUvTtgWT4UPoWPRtNk2U4hAW9xuxiYyj8Lu4MR1eGaE68hmSrnafui5rvjyStncmSv",
  "key1": "3YEMKrNvDxz8Yv3b7nHzgMwJgzEM7V9rxnLZbPazK94bELDVKPEa9LKVovrHf3gK8Xh5ipBocYMNHFgbUc9o1ZAu",
  "key2": "4pBqbpBuP55iMeDLDCgtAuZvC113PsGGhmBQvpwfAS6452oM187wayGuU7vSXgwC7JzvMDpvhGrGR7fkC1FekY7w",
  "key3": "K4mQYjR1Ca3Sqi88tTmrDkrr2kLWjgbrWMTpskWCCtrnG8AYBqDWK84MU7jynersVTPtXEaj65B6nkg3Ak5oHKZ",
  "key4": "a7aBjvb9cfRoSxCrGf4tGRrvZkuUh3SAAGbjcw4yqqdu3vc74DmnUQB1d9fkZptzNPK3CfwAb6f4Uir3obgRq5J",
  "key5": "jey6XmbFg4qXG3SWkKSDLVyTXaNBvUGnVh9RAhkDt7sJ1rapg3K1cBUos4Kn1NSLuz7L1tiWGWSiDHJBcqrDQpr",
  "key6": "VySmucZCHLGeZ7gUf4ttHx5S89ELxgv9ji4Chn13K1Zo3W1gkdDVHgVK34rZQqJM3QeCUx8D2SV6badsSV7x9JB",
  "key7": "2xPtB1St97LEegachMd9q9LAN4XP3BYcRoKpSznDCZjmASi6gUWY9xmuFfFobJBRmH2AB3vLMcQirjUJgWMpHQXr",
  "key8": "5gNTJqcEA8oqEDQxHLy2L8bFgxuPiipYKg5pGzXPoj7MEyGmwYw2XWnhHsuqXUachAggQNDWjzgg3khawbMBVmXi",
  "key9": "ACPmiw626VM3HJfUtZqhRnYqt59kqP6JxzJLFkXD7CRfmchq4A2SakRBAWg1ZeNwN8QbxXpr2vHBPPM6vqWt9TR",
  "key10": "pjn6yBrEmt1MoEY99RTZ3jVGnAcEwgKvPwKJ6v8X4r6Txv86AwUXSdKW272RwNZvy37YE86AQVsVxq7M5RB8vP9",
  "key11": "5ACUg2yAW3PSHbSMMKt9xQeA7mQniuJjw7uC5bSoXHxuGrTJ9fyc4GQMPH1V1hXDUdAannRC6ZygkCDZsLNT4idz",
  "key12": "5o2bSXhtBSxuha2TZ1mqpWSQx6DmZm3fnPaAtdwkxFpCKjaQzAY9oVH7mUUdRuvSVSEJJy5UmBsmRieedfF1YT5D",
  "key13": "4UHkTCY6LngS3nsJmz7r673f9vTbtavDTEfQHWbh8s9a9Vo6dSEhho5EhQKu4GKjsSpqit6uSzcfQz7QJAYW6fmx",
  "key14": "5RzqW7w2xzy72GkgK3FFpnCWAfPyrbHMQPESijVQpDfmw24XrmFNDTHxuTrZPPUXEdCxPebv7wojuhbvosC5hnet",
  "key15": "3b8ZDxtj54xp6BXtyuK7L6fSUXuQWqtc17sP6aH2qBAQoXz8zvAeYXWRj5z1FzjXUmms5Qzp1BvG3urhcPYZSWmH",
  "key16": "qRCEV6RdjoUZHJ5iCJGhgN1hxR6bW5VU2WCap2pWe6EqZKPotdsg9pgy9fLVCmZjc34Gd37XV8Zqkcvbjk2nDE8",
  "key17": "4zRptHUXQYT5RnAZNPthE9Xa5C5K65quLtyJ6WEvyX9CBJwtiQk8x9buKfToCTkpvCanTAJ3aSTcnSyDyF3jZ5GW",
  "key18": "4Hs5EhE1CLZEAruAUVfGoUQPJ1c88HEwKXa6L42zyG73ioAX3NBc6FkYioV4mkKPv3z2hbtqtVTQSjsfx2F2nqAF",
  "key19": "52gGXVc36zM2tD8YTRXm1xZcjGAe8zyMqPVq4w7AzyUd1vZ3nuX7hcWVVDTGhURm2ZEzN9hfJH7pejtLUAk6PLTr",
  "key20": "33sVJSAcrrf5DnZXtcpTJLrer5aoaDiWzeD42GzJnPxphkVvbKP1t6xzKRznYrueRZ8FtkEMU5bzuQomqJn6kXNQ",
  "key21": "28sirivZpLNGNPrW9BqhjPsSTcvo7q4dchRMpQXokTem1V7YTpn54j3kH2f1U4n3LQ2qLqmAwomDeFJyKpozSSiU",
  "key22": "2bYQvxaqLBXoaqcNdjKgXSatBTGT2wLxyP71GYSXLk874W1s1GHZFyWhxmoMcK71cmTBYmqGhkkFZXhkPFK58y1w",
  "key23": "4f6GSQ4EakogwRMFmtua59Us9H2XHzfbSQfuakXYhCwwvTZzdbefEAMChiV1rjH2SqwaPdqHss379GWnHNDpEWzZ",
  "key24": "31BMUCWN8LpdNc5dMsfToSkYVsvkLQHBooJEfNNZyh3VaZMuGYojZqfbg7oykRFA5nHTGfh77EHqE5d91UzVsfxY",
  "key25": "3G2ZCCvLA7vwkjoUQgMZ2yMYztcyvT2EwP5dnY8ceBtU6vRRsBDakyogd4KspgNTyDub5NcgALieVDoTihiRUuTa",
  "key26": "3h6C8nuNhqNjEzDWLRsSFa9izUfmCHhFQCctmrGPMXC4ood9o7DKorDGRXfkhyPswZR3ESm5Nqx1qTnFrE9mckxg",
  "key27": "47iXsn9zqiywtZKfea7qRBoCS74k8eBTNeaKZgBjsdGUiE1wJq76G5GJb1jtNPcbW5cRuUPUyJfwpeZxxjLC7RZ2",
  "key28": "3QBqmVoob2aj6x8UnSmi9gf7mXojWdH8Er3cCgZmwaNpGpQNZgzRb6jVKXR8HTmoEt3Y8JYSeiE3AePAVTWCMoWJ",
  "key29": "5qKRQBKj9jpLJi2BQnFm4TP6GdFbkqn2fg9knaZ2epN7MsjfDdhx9FGRjESm9rpdUr1A7aLyDy4cRwWK3pRc1jPi",
  "key30": "5nP26J3ZFZnbKSa9Jndyfd5khVbNsCwLikV9NNJjaSJeVQJaBknthSaAMD2zdDq44i6Rc1JVat3QDWXoJyExowRG",
  "key31": "2SKM2jWguETj259PLjfXgcgsWA6KMyGPrRobGXTGuPpfjFAf1CEuB4FMgaqgoaGbquvKr6CHeU1CkKqxhKGxxCgR",
  "key32": "4qkxM7P1Kv5uJXfEGFu4yhTrgMw3eMXxAPxsuJnLAtyhA3DF3pyhU8sUSxxNLsHzxMLGpY4BrGZYKXCu8iJb93gP"
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
