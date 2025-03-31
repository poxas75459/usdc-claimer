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
    "2ha87argv5TYGSZDzCgZe4RGTyToRnRQnDeTftFQ4tPq7ksJDgEKFMLYPshGEJ6g2Nksyi6ekrHWX2RSkiXMiQ8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B8rJZaL9n25VnQohdntF6vdhjQwCBuDm4hiSDpW318YbkbFiCqaHx3ofr2PSQaQ4dPg3QeRGhPD6PPJtGPpnNUD",
  "key1": "3Hrg7tGPHiQvCdjAJH6PRxfpHzh9AqccBwGw8bRMQzSkEpRuDyMEDuJHqh5N9xpUKJwyK62c4s2ZM9x6TsPWdZvj",
  "key2": "2xoWBwaBxBfAtRDF59Yhj5rq2RdgZfFGPG47NUiv4tuKYJrPm6ApgNiYMYrGBeddZHMygcXcVZdX1HPUSF1T3sQU",
  "key3": "47Lyhot7eMwBQHbFU9rQFfRnBtsx7CsgPGBrgdrqPmdX61zgpgcpBx4gyctZBbtgU2Pu1Mgisnmqve8F6zM4u1cf",
  "key4": "3huzcbMkhDSTCdW692o6piwv5xvGbwXwNtcHu5rQrAPuD4q5B4wEcsh9sBYy65PQHNVprAoHoYMsssFZBNL4kPkS",
  "key5": "52w1UYJbgawYebGAsHaafDMHfpXT6JFoFAH2zqNtnQ6GSRBiBSTEWCmweome1fmFFKNRwmD1Fj6rsC3H9CmvW4Va",
  "key6": "3NcpYnh9G71wUw6kdgQFsjc4jpgd6CHfF17Xoy54cCGcoAUWH9iJ9xoeq9kVy5v2fuhiWdDb1NtJz14kN3MKDhW1",
  "key7": "72jFwLay9YgZkAAXfoiNqbKMHsbXVLSYy66J3eWizGvfnc4kS9ebnRdUhA9ZNnsHFuG9gBXZUNfN92D6zsDYGk1",
  "key8": "5X6R87D9gzD7oJL8asHVXwAsomMvvqbBYC6ZcZj4q2Je5LqmhzQ5F6zswUTufervU4rWza423hM4qLud3bGwG1hk",
  "key9": "hFduXZ4JDi4rqWqxeWFbMPZGAgZHSBvWgqM2aqhjCmyb64oZFdWYDGZ9EXgXNo3MYThBGYDyGjFSKksRVC9msxa",
  "key10": "5GbU7rEqBRdEMYHzhkqWgCoW38D5gm137CkZ7GRyiQoMhCN1xywRJx9CsE3M9S2SxqXwfhJ6HAJQvxuiXMkoMcBP",
  "key11": "3bFsSdhtSCu8x2dDPoSk5MkUepgkPRC82NJ8Ar6ymDcRMid8Ws8mrD9VoJD8nBAjVKPq69nUMjNKsF4iS5yewffo",
  "key12": "4ZRw4AETdrzSbXXZoUvZapW3KUrr5jkU3hex5YgX1osNPYKpKRCytd1AjZ4F1xWnjnCthNMHpcEnv2VbWU28sYMu",
  "key13": "4s7Sab9jkGHpwr7LCz3hAWxfBgNxpAXMc5QxDADJsFg4kwhVSoYgyfwfpkxZWLBTREScSj2um4Q53wddFfATh62T",
  "key14": "2zXo5uR7FFr6vrtSH6mp2ACZmijxSwqEhvw1pKNRMmifSrmqrthdkcQmZuTak5uRevhc8jdMpR7BrTijaZgPLGYc",
  "key15": "4XXtkjrh1iUcVsAJNHV57acawaMP1BGrVoU7AKUUdNg8Z3YnPpSTAb9vBMQSbhdVS7hPdY57KhiBGme8KpMfSkU9",
  "key16": "3feEMrjDubvGai7CtdpVYGpagu8roTu66xDkoeFSaEFYkkyNYXRmKTHXDPw1EeJdSadDDwcgpZ3ZUKMhzHmNEDkk",
  "key17": "5PvaXwVrvmNF2NuBqWrpUJXP4axZ3vdR7YmexUTtYUQ5u83ob32muFKMYMr8iFzoXbJ1oJa7Wonx5hcoFZTiRySs",
  "key18": "5iBEHerKSVTa1tpnSrdMUaWwKn6YmgyUo2TGWrf2v6fgqyNKiwfcy2Zw8mZ1YrCk4Mb7EQjVHj8Deg5FKkGfXvMv",
  "key19": "m6jhgo5zUfzb555pAE9Y5mamMwLh91jQw9BpYnZbdx7XoSgdEJiUgkg62fxdbFJikmNvaz7VQpVmzi6rkJpP3VG",
  "key20": "5dq9CcxxdjtqCge8axSeFbKxwWG2XAAv6rsuC4m81U4h1wRwK8YAfEpAtX7fso1jVSa9v7e2C3559nEnkqsi68rb",
  "key21": "3oHNhE28CVzB8FdMVkU6yyXz5aJvZouzDijiLx9i6VxT1fxrEdc2kth4LLYfSYLcQQVu99sxxFDJMYoMX7BswyiX",
  "key22": "yMffAE2zvk2RVAfdfL8FnFskNqfPyc7HDsRvJU2QCr7XHryaSTSZarEHuD7mXZNXXMeCV3ioWqKEc2n3V5jgsgP",
  "key23": "fPPuCCt5nv4suwYF94UXXWKAv1REh7QAbmGD8FpdEg7Q9h6rRjzooD3K7hZq2CSUFHt3Ao89mRKfrEJ9UirFy41",
  "key24": "2V74g3evjSYxox8amEoALjtoXH7qVPWP3smoscFTAbZ1tnEgsoaSH13JAVxt47gQBbXSgpCyqT8GbAeyA8TeR1eT",
  "key25": "33Q3anjAxKd4PNwqbh8yJxFDmBMP6YorMbNTFTdKy93zbHAEwMBRb8qhtDf33xXgGSK2GBhPYz9nTehy7gGr6B29",
  "key26": "4FZVBpNLqmTxSYLZspzt1397QAmZTe7mqWpVk3DW2wgKaisbU1UKmS3gsnN5FHgyBoYG7rFepsw18dpQafLFZxjF",
  "key27": "4gT3MAGSJZ2i2Uo3Ao6Y4NQjAybdLsZL58QtttgnAR9RsVVGfpQBpKLdtbjRFDmrXZNvUZf3gfGULrahNmnV4CNJ",
  "key28": "2FQLQoovgNtUVyoXX8w3kSdTwieQLTycibGZDyPnBH2KDAUbPgUb71e1PkLaaZ1zeXsKvL4HovDjdeHeE4kC92Ff",
  "key29": "3oQS2a1q73s4A2PtU7UmxiRaKyJSjnL77G7TLDXUUr5r5PuypmQhJ2XEVsk6iaE5vhiJf1UzSsvyueryDF2MfvvC"
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
