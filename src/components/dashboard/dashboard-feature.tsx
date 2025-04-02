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
    "4cxrjXHchZrr4NnCB7bfEuXpiL92AA6j4gM82XwsP5q4zJzfg3RdXShUYFmtnXr4DkwuZUSFh8RKgJUSNrzWzu12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rHwRTT87yyzZ3A3xswr5SbwxCWJucJ9A9PRn2tPPfTPwGQHBvoF6Q8ZVAxubyQmSiunnTGSZmktdLziXzu1Czkz",
  "key1": "5MER1o8ickYZNdzbh5BwWvSon14mbASZ1ui5LDuu3cMzUWqkiskVNzRkmfbFKPkZZqpuhabtL7dY7M65XVNQuz6d",
  "key2": "4zeQiqY8y2N1KeKhwx8CzyUPymAsEtbWARwjSus7UDbue23YePt76MR3aw8Lrppkn3yMbHEovtHPfMQ4JP9GzbU2",
  "key3": "2sdQc8qV3cHaXveuFCLrhjbKjHbbuxhriABVJamwM6kQTvKPZhBYfqaPewRm8cJ7eoCPB5AKJjBghPAS568Gq9qQ",
  "key4": "3e4xLrN93EXpNXCX7pV7EE1PLoBpJWdZnigXzrpGRSZ2Dx6aMiLLrhbHED2ewSR9vkP1nYo1b7feZ5Hixbhsk6bP",
  "key5": "2QLResravVQRKvR4thK7WNYQgYmDZ7rapZMsfA1FiLA4hZhH7Rb99C6UrMGsmDMk9iBAvGELDzzj1w2Yy98r61SP",
  "key6": "28HHhCS9youQBZoEgvR3H82opvXzCNc6zKDXbW82S1EY9pFGxfG7SLLgLxM4taMdJbrXQqJkPJ2D3tZvPytd8cAT",
  "key7": "435najZ2yM49f6s6a7m7RGt9Rg48JLi4EXwLDYYPqMbidWBSFouxrQvDxz9qytLg8xvN9MzBMvWHKTmKTdR6XEBE",
  "key8": "Y7jKqkhwCKvsasgL5WXFoM7HVqLSTuCj8icbwfQca2jrhntUJNPWWhSGzF4gag8YsooLgVYe45k7o37FeRsaZwJ",
  "key9": "5KBAgFx9FmBMXpxh2zfKeGNN5MwaauyDuLjz43yBaejqhtomnMonMgo1pRJfaeSa2hJkgrWx9pFr4ygfUVMxdYru",
  "key10": "2mExbkv8d6U8TR7EL91u4jvfN3Tzy7ssAZYrVtX7DTE7v8eSRNmcQuzvyno5QyRyLhnyXwESS8wDCgZy68ow57hS",
  "key11": "3YWfMytnKFLxgMW5GHP9nUkNyBdSrSjrDaL3rczSHpmGamrScGqinRiYmBEtQFW9NbNmA7kFsSWYKgdb3Big4KRr",
  "key12": "5DRD3svr7ZwmjK79cRNavfww8WcpgRq4dfz4ohBaRXy4xXWBUpBrVxXXg8qP1U3VfZTB4JC2a9u2eGaCTc6aDv17",
  "key13": "4Tk4bASSGHZJKkxeoJ2cYKZP65xipe1shQRSLjnUkSZQGXH8wwuuVYAvs3mgGHc16YnVvFttYq3vM9A4yAZsXLSQ",
  "key14": "4LQGcumDcDQKmdeWSddxAqu6zWF1Dx3L3fR4sVC38ej6dTaageNwhjLMDhpsmhAu9pCD9QiJjJSJGRZ3NJpeAnq",
  "key15": "4jyNUoWBhtLLxMzxFzmVqgDouckwPesKs4hHQk1eZSFxMCTsvUkrakBQ8dMi1Tqc9vNdP7ue8KvpduS8fqHQ4TSk",
  "key16": "muWqcEfqsqVtqhTMqD1AqmWANvP6ftuEeZBq6yKC13exWbHVxwJrdkwphCpVHKNZWzYS1rcf4eewwfJUhDgbqBP",
  "key17": "5njAai1y6wfzVjjvCaXJzZ6iyym9uZdbi3AG8bGtg4bs6iQjFk83pUj1N3Gaw6UcGJnCcJhGWa5VbC26KQZZufKR",
  "key18": "1tVP8jU8EMMY7jfyMpL3DtnzWM3pduppQn4djdMjuFYgsrEghBSHdzP2rAJ1pjNot3Xb9QaSGmRLKFGqKtpcLBw",
  "key19": "4sbUnEt8aVfa7SzhH9Kp7u2NV6Z5GPxvz19DfWZCWqNkZ8dUzqnnP6mNkd2EEB23s7wT3KKfG3MbKaVkFBZXhBJo",
  "key20": "FCjPM6kMAxbfVPqEBUuoevGPmm27eGxYLu6UXZsYgkeMdPL3poC7ThJFmoLVUYwi6swk55H6KC4V9MW9gknYtDF",
  "key21": "2PeQxPrfvSEAAkuzXWHd1nW1HgSj85gCbw1U98yP9t5tnvv8gxAFbg97TdZpULWtQYs6VfWSwANNmTvj5j813odF",
  "key22": "4EMNmUqsHNtiahsY2Y1RFggmwnZsJp2fR5Q6BnevDuAR5hvy9LGHVuD7ErMgCNMZDKbjC6qTruwhoKpdUTkgW6PH",
  "key23": "44mujdomzhnn56bi5Ddp5keq4SKcov8LyviGj2wgiG5cyYt6M3G72sogbjBv1Svr21W2F5oKAh5DJN6DYkFqfVrn",
  "key24": "4C88VANMkBdKvDwPXnL6b7YqD2J6eQjDtLBr2zGrFGeargsRAVzHL5YVnj9bh8AFWFpiEQyG4o7iSzREs74UhZ4a",
  "key25": "4s4AC2A57Qd9zsxkHfBkpJo4ATeqwcYnfYMGHmK34ihQXYGJLr1Lu2e2SW4YGvcoVVfCWYrUynXWh9Uk6k8WUpSx",
  "key26": "4zTp9QwYksndUZYdYd2iP5szi9YfPbtBAqToQUC34TsMRQhAvXXeqourpQ8ie8CpbG1WJyeSpzbApPkQhjqY2iGK",
  "key27": "saBEkEDKcSEjpPUydKiM9qKQToaWehWYbCb1SoMSZxy9pdNvK3qDsGGxyUWkUwCsJkjLMrmyv1GNuXvxdtr3uQ8",
  "key28": "2Z8nZyaVrFWqHzFQWbgnMqjCuax2RRoadSWF5xy81z6fXcYnZ8AW2cJpFrw8fLvC3eoQH3rFhK3QAR7KSTd3pVb2",
  "key29": "4LwvBun8p8bL8Csnv1opdQEgcdpZtUaG5GXrAw1PsRNdED9ibsbPBT4gLcNAiKHxkpekQL3XtZEAph61Qg5Fc2Lg",
  "key30": "417DmFxrL5aYevhV9vnrgsgPx4PPCjgZ4SxdSTzmEobezDxi5G8jdZ4bbfYnbSJykQzmbakB8SyaHnoibycRLsnE",
  "key31": "5Hn2z1HWRLLZduW2rECKh68D1d16CSbHWLFML8y7oj8veDunpP2mmHMURiDb5ik9WcScxpfm9Rk7T7SPzm3UVTQh"
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
