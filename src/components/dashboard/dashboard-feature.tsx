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
    "5zQ9433eMDPscTASkRSLXoNsSco3czFc53wQbtUTe5i4U1iret6RyR9mgVuSdb4C1AqjxyHJsx8SXQ8B7hnLtssk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xsc9GA794MkdVjzPEdPgqdxRpnvjYMo8wdeqJSrWxzyUE29NdanqUYSV4tiGsrFBZ5izWNw7QoD71fht4mkL6cf",
  "key1": "4m1e1kePAjWjmTVpEobK6EVVpgmaEApvxt85pgppYCkrqGxDFxEMLQXuB42AtoEnEeWfZzMvHpKky8qASycA1ssJ",
  "key2": "5JXZ9VxkeizhrLpfB6SsKGH58M2HVYC61h1MmkNz4NSG9Y4HU2JcpiVnCgGDhi8w2LUfMU8eTUJYfWAHpSaVDwKX",
  "key3": "DUuT96X3atXhNSLN6C3Dxzufva2HVAtdSLxmCLWhaBymac12bsNXpwsBSzxcsWh22cNDke9mJMgahqcMctmkXtL",
  "key4": "3hA7hUzhQ3UxhG3UpHQs4jLX7W9W3rsxn8qieJ9SywAVQRcWtTs3uJFdM3CBHToEvHmicjTS1NSt6pXzupHUNqQT",
  "key5": "5D4BBvGFVP6T7vaHRzxYQwpEGcArCubhkCGueLq2tKjoXN6doPdJfrgN34VW4K4ZxXupFYp725Ww5WSMFnZ3TZpQ",
  "key6": "4wYw8coab4uJfZFAocdKEf9Dx3FJ2Y3RmdZnGdjz5RfvHjmpgJC4u8Xn3FXWZrKE8wbJfHnRDjHC3FRh33iEpnN7",
  "key7": "Nq1wzmAtRFohoL3fuUW84XCRkABm5PfZzyAC44k3eSxGuhnwyZcRggfdvHpHTSLM7mYkpyNUKrFVybF1DnfforT",
  "key8": "vEaMPs6pkyp5kQ3DrB4sCY3Us9BW8NKfhUbBhDxY7hkeLe7ktq8Mke2kLUSSc5UrgAh4q6pnePA2qngZQ4N25KY",
  "key9": "WBPgeBu8DsFcFrEKDjYsjM2nAzmEq53ZUUYo3g9BK5PuAvSQzpxC7w53rXvtFGaXGAw86zfBQV7hPQb3c4cAmYq",
  "key10": "2uiirt3qArPMb9g7D2JSwG82jf4SDcjqdJbWTUvEuKPPVVTwgTuLutjnmQQ8GyK4sAPZpaPfuqd66frrNe2i7xXt",
  "key11": "5ah7QFHQCrA3D5RYageyNWHbzR5UHey5ruyTxjXDYE7tKVF8TknQVtXK2j6k3mUhQwDGiKpeFQA6KGLf9NMBfTEr",
  "key12": "3Z2HeNULYqnHPpdsdw8YMAY5Krgyc1nAy8597nou25PGJ6fEMMumQ95E1wy14jc26pqpeywb3GNzadxdWYA3LcQS",
  "key13": "52MUykVWKPrrWyxtSN6KkqQmMk4dvDD9gTpTRyvtbhTatfKnHdCkzo4qKDih22hLe2fqCKPzBKMbFHsetmNW2QJi",
  "key14": "3KjptzamorGo1GGgJkk617njCW5EBm8TrY9m1bgHNQuyZFpokzw1esKw7Sk66qLuDsRkq4VVS7RGiMRNSXVyzyVU",
  "key15": "5cxRS4VMWKJccB6Yvy8JvPkLYtmg9J5vWRweP52BAjNRzoeXrKQPsBwnAZJh95ipfrxS6ZeJGQFDFFSfPmZLAxXH",
  "key16": "5C2zyPnh4fvh1wCtvRdC5a9smRndjB6jZCEwnS1GpAEfPjp6kfbaS7soYcwd1qkz2kS5bYw7cWJ3yxnCtQtJEXtr",
  "key17": "46uvs2rDxf18jfYoxrkzxf4fRAiUFhXHCLznRXSscbBzPyJCjSyfdF9uZyJd2PXH4SA77ZbXyiFwHMkkbw947jVM",
  "key18": "2eSxRrtk7eQk92GfyBD4HmxbLimW7gpYG6nHTACzCYQwtxNWLdAdNVRH1pcCTMeb9xiNACH29sugUMVDXSAPtc1t",
  "key19": "4RGopzQWTuWEtpquSCKoU6V9K9Rn8TCmtskU43rsfb4D1LjHC2QUuysQSba6Sw7SGDBSufnVJeUqXj21sUTnJKuU",
  "key20": "48fcNYgcACHnApjHKdSGMGFjizW8bvTMKqCjySeSXpX5eBao7R2LHhKcTWi8rLXxiJZmtqp83qSSH7vxpnMbcCZc",
  "key21": "2KtqwS4UQP3ekAQ6a2vdkz2Dy1mm4Gwc2YbWEF5zEwExzhaxaSqDotpyZXL4HPymyALZAimNGjuPRzmVaQuf1AXf",
  "key22": "4WUKS1SatbnUSjbEgkZRoa862SFM4dhGpu4kqhrJXw5KnWYYWWVg1m2uKyxKW47MQ5kRgLHNVJw8fzCrbR42xbnT",
  "key23": "55vLJNm5WE6ZFCejxWDsjV8GYXSNL5GKNKSZgj7F36aAwr2KQDGypju4oD59okDaDyAMeLxoVDxAT4cLQNw2Ae5t",
  "key24": "34MFH1Ez3RZS9xUWwN56tYfJPjeMvhnQXjkPZL8NBJ6LWi6oVYFKiP97ydxWVS5xJaZAEc1b3CmB76BiujvaPrKb",
  "key25": "JKfVJtT9ngzkZjRhRJrqJFg4vh699x3chRWjm8MicNjLw3eDAeZwhLXUkt5aheFTM8heUoeJx2z3199aNpdNSLa",
  "key26": "4w9FX7LC7gpvBnQh7TRwdwG9qi3Tx8CR7SDbTQiSL5uPL9MmhHdNs1QQDWqskXs4GD1rCTGEUKGLETLiaL4UKD6",
  "key27": "49Ls9JQ6tB4jbiAdCyU52g1h2ocvZj6WTurs2x5svKYJ2hjSpRonufe3SgHbwxmtBdh1WZ27cD3TgqMT8bHvKeR1",
  "key28": "5TwX1FdLgP1pKh2JJMeTRwQjekx2L4eD8xheyZczRmkfGtgQ5sMcJtUW4ZTvfBkzUsWVTWabyUsT4yj4vELweEFi",
  "key29": "5UmLB2VZbciKTx4TzQB4GVhR2UeoUvETm4Rtsx5KXoieTi2hSgq6KGttgaLNxSt3DeyeW5eB1WvFm6gmrHuj6Ys1",
  "key30": "27njtDZjBxBN4UveWa64M4h6Peypz21W12egk9wAvGGQipfWZrWmYyFMDcjicnwcBFucmwwkvsvJv2fWCF3JGP1e",
  "key31": "32XJudio7eWByRKuBHRs2mHXXpMQcGCYjTut2a3K6YVNqoVHWxqPYptFDGUxvdmU3vGL6eWHmNAN9no1fynqkVyv",
  "key32": "2ExeEMn6G466VpzWjr1KyM2RYhFzByRqWdoGGkTTWrnRYsheQVMLKwtXKkLVq6tw7Q28CmjQcQRYXteiFKgDtarS",
  "key33": "hTYTrBkS4r7v3M56bipJuxgRZG2kbWR65F6dWM5KCsBxKFUB9zfGxZkoW1k2NYnnVjs2d7LhdwrQkYZ8GPsjuAG",
  "key34": "45TwUAHd2UaRkBuJMG9CknUantzwMHjmnRdKXGXJ12AwawGrpnKTTjx7fQpFy5J6fuyvpm2oWWy9uE2CtZdqSmYP"
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
