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
    "R9YJqqA8EJdJ8VTA4puCgWJK5M5E1QsZVKjWwxvNqZvszgLY2fLUUST7y7bnswn5w6pCooGvZjoFQQ8trvfm5W7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RaGrotWaJRfP2aUkRNU3v12GzKHZGTws43tBj4BJJ3amzp8vxsCEYRLKbHqR6abD2czd6LWAMcztqD9z78DJYMK",
  "key1": "33J31drKcPMJyjbUTVWR8sUeWEiB6s1LBTHXqRBmkaM2n3KvVgUV7aKtnX4Vc9AbgswHQCLTZCSQtB8D7BosZjaD",
  "key2": "4199Cajo8CmBc49WTr2q6Lpp5waevozBpXodXqpNGZs7Pnh5bJtrA59bANFBMpsp5Z5nHNpk8VptkWCaCUFRxbUk",
  "key3": "2PSyuBCbXn9GpJnX62k9CA8yfKeA5xm32Bwx3goA5QYGLML6QUgYwxKwJWEmNJ2f6gkPMxhFY2iep1i76ohwkEyY",
  "key4": "4TWcxjtVQiQYJ8xgLRhXSszhNRnXyKYJkuUoLRYsGJ8k49RRexapAPfjQNuo5pG5eovBFEZBuafK81zVcmJd1NwA",
  "key5": "HAaah8FTZBCZ7L7Pc7FMg4DMRxicMfnUBXTzWudmzAoxwD1D4epW5WFckoQxvpK2eCsiv7FNxqZFntHrVbdnF2V",
  "key6": "31maZGXXTuc3Vduyjd3a7bHMgvnwGsnqsugB9xrMdNhU65Mq1sT9SvQG8LRceFynLEUrs7Qoui6GMz85qDRJDWDf",
  "key7": "2sF4mAPckrKrNTv3om8R39FUihmMZQYyb91D3P5mWaxhjHczqzqWxrKzhhLWp8gVsQyH6YJjwuMNKgyYCe26MKC5",
  "key8": "3JAAc9RbNwUU6wE2tGpWNyaCC4NiTEKQaSEEkMGtiYKvWUYn8vmNXft45KDRVBSUwVP1N9UVbCV1dt1eGdBB3UDt",
  "key9": "9T7EH53daoJbqTaetKYhERQqUko1jw3PkdZmFM7Ujn5VrU36ppiC9HmLqBNEmiHtEyEgUy8ui7NMm3RtC9yDHmH",
  "key10": "bRR5KgNEx7fh5aLezjcnt3xdeAZMQuSicM2dMBwPUXaVo7whr2ACa3vM1ChonuQSo8kE9dDngzPTCc6HgQaB8jC",
  "key11": "2XiKk1hZLcaHcgHHMtZvDurq38fguezeEyRhpcSJLWsV8BUrdXPKRMP3gEjou75iUZYZFXsVTw9Njd7S2Y1LesFD",
  "key12": "2gGnh6vLNaYnxdt1ATF3MDkkvwqJGcjRfj9M9VMMNuhMLcuwf48Uof3yUNKN1JFDXuERiNuBVYSgWus16CWXEisg",
  "key13": "2RyHzQ3BWSGVZHRfFJfy1EtozZX1sGxTTvKPokPWCkoNQTkTs4S1xdoqiCe7wg9vZNQ5npYDH6ecTA4DZPQ1kmLm",
  "key14": "34nzYYuKQzSkBg9tbHdD5rWKoL3qM5DnKZC21vJr3W7wbrp9P3xec67LbqGFXXG9umQraPhRdAok1zzz9ESBoRic",
  "key15": "3Qyp16NdipaPp5V66uicnCHqaSdjmQGqrzPUFzFArjG75pc7X8J8PHXUjT7qEXuRBZ1KTY1gxdT7aHgqCCS52QGF",
  "key16": "3NG2Q4X262tgvLdCJxD2AKpxzm1CNTfwhGSLah4dN92zpHtnynZtMYdnuBSi3rCFXv4SWAqa7hXVJBfamz9un2KX",
  "key17": "4A69cyjbZHCDEdEfChXxQHPD4Jqaydk4usDJaXcnHvoDfpro81vsTrqwJ3aC7M3gJ3kmXKoCtjPF2BAVEGKDtmRK",
  "key18": "2cWNQivZCJ56yUzFhzov5GjyGg7G1vZShGCP6GyS713RU9jmTVhsEZp7mCwtSiygES8vHWnWCU7odvDZb6NndA5m",
  "key19": "4ba8YwZdwc4tPd1bqE9wSFyU2EzcMCqTyALMGNFpsbnW3tMHdGUACCW4kmVBfH59akEuYE56BtpCnJKd8KeiZLEy",
  "key20": "5cQSaXLvZSH4sfLjHxi9CsGgwhuL3maUMerZxNj1cGcaSb9zsMrY7ogZbPLyh1eiKaXmzupS5AVWA1bKHgtS2Qbh",
  "key21": "4SfKXiowAe6T2uLd5CFn3K7nKuEwNjupucBNoo7S9Q7r3nCvtkEdjZ7R2LkGkL8LxhzLCYxD7Nv8GvKYbomsBP7U",
  "key22": "4unXmgZLbn9SagNzo2rkPcSNCWWGJDWCDksieru1SuFdFb8QieRTP2BWKnz7mhjCQrTANEH1chDHDwZ1wCr1oPuo",
  "key23": "4W5RCLEzbz8rYhfCTn6PsmHqGMQZ8vnNHGgwLq5Mp1zJ7T2QYg4giPYMcZPtJxRtVcWy1PqKao7tisG35qyiaH3N",
  "key24": "2RxioYx8X2QKHXbD529Ad8N7VYiMVsR3Y8UhvETJdNxMLGrE5aVj48rtdCgu5w984rmK22HRySqubdiUTkbbZL1Q",
  "key25": "3ynFHWBZZ43ouUYtNWCxWgHuV8RFnmB8ZHG5wdhtqDBum5BJnUjyqtNJ21wPQFVQ7er3bxEKsYZSkhpBfmgj2Hfs",
  "key26": "4omWTou3BoNuKHZRy15HCw7kfjNqLy8ooioQ6w2udkMTEowRySn78gNcNLLiPWym5WSVWCtStKEbvf3EK1a4ZEug",
  "key27": "3sEhaAPpiUeVoZMshhVFwtCjkVkPLEatZA27Mxumc6ev4HivJVVMGhCcS6MwV9G3aGiGJEivuhzq1VZRXQZfGXnX",
  "key28": "3as4jfTRPqw98yfx5ytkLmTuhHbuvADrx7MBPyRHbXX5gSV8xU95nUpWKpjFf6oMPy31DikeRVSuhn6m6NGR8nkd",
  "key29": "5ajFJhY8oGAnuutW5bzEyUqsSWfiyjrowMRapypWJQWEz4y88vNheTTMMm8iaenx7DMWP96SantJAZTV7h6ZVK58",
  "key30": "2EUNKHZj2Ughb4s4uN4SbRuZ5rjmyV42stLXKac7r8ejsVAjS7ixBRnEZZThzje4nhbDVUJKhQDR7B9HtqKAgusf",
  "key31": "2ryeMJtBd35mSAeGK48xXErk9Fd2vvVAznaDkqRjLvTLFzx6FyaCKJQzjCmz6aXmZPvvQrww8wSGMsAX8MFz5uja"
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
