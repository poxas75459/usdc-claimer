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
    "5VYkzUANUAeofEHyKHScKrYVwGVnMujGEsCneHRd6EdVWbNNa7QUanW2BDZBcwup27j5i7m95EKaNKR76SdjKopm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ymgyttZjf2b41DTyizzD6EwDk3spJXhFd245APRwo3izkv9uQCuP5oPPoGpeyvBeJ51Cga9B4CYJeGXdEBVJuHd",
  "key1": "5PDnWs58M2gbcystdGyBm4k9G382jDzrmar8V8sEb1n6HuGmuxUmi3jaJuccv2fDztKcTzqr9RmibE2CLU5rp2P2",
  "key2": "5W57kwtVdTPdZ72mhRdnBmeNsKJ3sqqE2mN7vC5r3Up8F762jBL81HrRahZBuaTDs1EHJTWzpbWFe6KbJmmJVfUp",
  "key3": "4vWbTjuGbNVEyTyyh2fHmNHmj5enGu5e9cnpPKxRNaYaXHBtXkMtZRu21TBdsEHvtpx7nNjd8KdEgqh1s7fn8hP4",
  "key4": "kR3UsBCE1WnP3tQ4DFxtdFkC6wzEdZxymYReEXxCPySykEfiNfayWjZh1MMuDiizhubFKwfrEr1cL4CTNk1NxTH",
  "key5": "62vPaNnsaVzNdgZxDvrtcTQUMHYUZeJrh1m6Rt5XEqTySLF9MeB2NJio5kuK3BGd1CD8GgbtoEHuzPmpRxZvcQ6A",
  "key6": "3nybU7B9wkRG1qy9V7q32N3L7MQaVvHpx4WLkY2GgqpPUdREWeMKwDffSWGEyRXQYTRskxiLmBVFhJVDo2uHaVdv",
  "key7": "2HReNhDRv1LzLrJGdp4dDiN9su61HevXKZTNcWkSBvAe3hHiMYpvma5uk3Q5Uop5P1d88qrsDjZbg2rtpsFagyn3",
  "key8": "5uPC565uWVBhV7q25RibJVCvUUbB74deU4Vvy2zQcrVYghGz1Qd9H8JRZtTWvAS5G878edo3vKkNqpWA1xeTLEXD",
  "key9": "41Sem4XhegAjoe3UVAZYXpudCB9yoVQyx1tScMP53iiY646WKKSRbETDcG4gDHeTxyNpd8LFCQabP6LALXqsknUh",
  "key10": "2XKTgmhUnE6FBf2ux3L34pN6s4YfLtALHXT7Tmjc7h3nomJ5to2Cg366V1JFKUZUgZ2WTXMvguam9rpPivpSaA3b",
  "key11": "gvSGch86Qw8Ucpc1kY5wGudTJ6ExWTF4SZXegEJ8ddCrhfs9NybtxB86fZLvKEebQtsmFgBcAc5hWoGDn6ERB6c",
  "key12": "4Q55V4bdZvEBbG4AHNzjfUC4DpVNDAuTN5XAce6AithfPmssPFAtxTxDkhdg8EBZ5enB5QsnwFFpwVmGDoJNdAFU",
  "key13": "46jkdvcQXBr9ePDGCUeifMks21tk96FzDxzSsdamUhHSgiKKgMon1fzRZ7wVigrLR9LPvhdJ2vjNQGog6TpisXoN",
  "key14": "seZfqbi9DQDyhH3TMswMKSoBJsNg9EXTZo9PsGddzZYrKqLREBBF1BgaJFMroXaruTmSXf7uyWkbgJCNesb5CjL",
  "key15": "5buRvfn3ERdaTQY8gcD8YsQixy3462mFQHEsE1GiPNMpMFZ4srQMvkNPLCBUyH1Mi57Mqd78umSTK5ytaEDbiwJN",
  "key16": "2df7YAqntyEtdCJQZEoU9eioYoYCqxp7NWz5MfaiW1zaSeKxDdAiamk8s7QprWvPy9CKNseK2UjVVbSJJ9ooX1Ci",
  "key17": "3uhBLHJSCAiYUh5iJ5j1Yd84mRjqaNRjCK9hbNEDJ8BAYj59kop6VDogmgvwmyWYufDudSGXsbX6zxjkq4x6wz9Z",
  "key18": "3Hyxrt6VfCxNz1bT4eqgXs3kszC7uWZ11dicGH5iyKMj4ty2HqLnfywt5QnNjzysiaXoBWUoW2KpmYXQxPGucSs7",
  "key19": "pALvnRPtFtR1MNbXv1EAUQY9YNxmzaQLKdAzLYcNoWqG8Q4yGqJ5SA1RQc1EPzJiTJcbmEM8YigidVQLAqvzmW5",
  "key20": "AbgsR4HmNzvjCcXZZS8Zemadorqu8aMVyHMb2DkfvueQJDj9TJCZWwspMbjz3coN73hPbYfc7pYsUAn9ogdaKJv",
  "key21": "2B3AqTgFca6ujZFZGPRYn3Yg3xRZYkNqWoJyNT3RVYKd6G46WeuBpz4yj7MmULg79ahxHbihb1HVwJex37bUJ3wk",
  "key22": "CYWArrZvkGXciFVoNX1E6ubs4CxmLo3aAgBc5pyhF6zPFHvLj7KWxjUuVT3svBCsYV1XR1JHY4kbqEE2qWkmwrL",
  "key23": "2Kn9m8GTXt2TM3dicmFZwGHcx4f7hCoiJcaXgWXxs9NPwAcsMVT3Mb9NY75TxJK7vAPJNqtUAyfwV2wwd5soHk2a",
  "key24": "4Sx2SR8T4vKfwaRyTnX3W5Ui1cBZqWb8UzYWLX4CCisWm7dk9faRaomuJZjxedGQ3p6SiEx4MQtZuN63erSFCBBf",
  "key25": "EfzQ1Fx7xfhsVmnSit27SVRfazMPP76pCk3kyuWEixG5FHhdRWkSPvLYEW4qLFwo3a97ZUReEHnJrgtuJaRZpUn",
  "key26": "4zjuCDDfJRiftTzHZSjkrbqLYSSPZYQHcMDirdwfKXg7PBgS3VGWCik94gn9bu5wps8zRxMEBPfemNF1cxLYJmuz",
  "key27": "kqeEwt1w744EcvQG8ngo1Jn3KD7iszEApEjr9b4b6y7LRKGzydoxjiS2hNGkSopRTS1gDogSRiAyrswTntVuKEE",
  "key28": "YszW3ZY1ZPPGgw2hkspGKN4teygJhLVABf3bTwBayj7DtTg8Qkp182ixYK9qQzbvxwQZeNn7mvJrN8KJT9hx2cF",
  "key29": "2KRfpWfgdABjgGPr4iJNHmwofxxwAa333m9SpkSW8HbdGH4JGFM4xmWgaXx1RQ96cw979Hf6Xx3yYNdJMQaEMWsZ",
  "key30": "5ydevHT7ke4s34NiiGcyDTX9J2aLh8sHVxxw5seTuWPxKzQPNL5ujmXCbtKqYp6Lr2LzGY26BLYncaqPzEHunu3r",
  "key31": "3LgsRiRUsi5MhuimS4unbR2EJQN6N3KvbqkoUp9JKAGbHJ7ermL3b5gXhMYix9uSm9xv8HqP8wdP2nssidyUvim9",
  "key32": "4knXuSoKy2aqaXtyFF1DHq35p5jH8SYZqn59isvvf6urtGnjUUGk5NqnqabAycPQ8jDoZ5gJbNAogW1cBhC78UZb"
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
