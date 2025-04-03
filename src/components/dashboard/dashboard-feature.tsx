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
    "5SsGPnYaMmqE8yQsxqpYK48gVWzdj7FyxkFU5K4Mbo6vBhwVC61NMJc7dwfPj2izLj73csLHm3w1GjMHcHqUjQ5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iPq1dQQieQtaEcmvjYqRJTxNTtX3jBJYMPXzYnVEsV5UcQ8i2bqjmyydZw9q2BA99wpL15yiH4WASKYq3gHpoN9",
  "key1": "2RJ2VAQtUUbeuVggnVXAn5742kpAaRtvokybjQe67zvntS3RbqJsHhhvFFmkgZFXGPxURyVJ7VCmupKhn4ZHkawU",
  "key2": "559mCYaxrEYdSEoqS77idbjnPLv8LpWGwNa12tS1sAz37xX47atK7hj4rNMLQ9BAfyB3Ju6wYDqud314Za7wsTsg",
  "key3": "52QiLuJZ16KNsmWCJtjiXGjiAY6i4g67BJMVrA2TLD46nmsroXmC5Cq1X9Lwu4JhNqnNiNXWTx7LsD1c1AgAojSH",
  "key4": "49BEcPsfp4dryZmYkm6NbL1Dta3b6RMDYXMG4NzCRbNCUnnMd376UzwEefyALvti4Q6oojXJNkbaWi4K3YVggamx",
  "key5": "65Nj7USRcr6ptngm13uvecQ6RNthP5RrZiAk4ihgV2L69a1a4sW9hycwTecENfXoqeSWVdKAxtMtkArgwaoKuuFX",
  "key6": "3tEDjTmLAmmRGJcx8WWGhBwSswJLVRs9PUxm9qzPCemcV22diRNacjvkNTzYH8wMensnMcFM11b4myy5UqYCQquC",
  "key7": "2UKEpA5EAkUr4LhXRiMhV4Grgb5quMejUdGESTGnAXbY4YSB7h3ohiRr53pnoha7DH4QsPauHiHMiYKgUDoWJ1qP",
  "key8": "3tmxShgVzNj6Zze5uZJmdHQ5SsuDVA2S9Qw9fNQve3J2HeNP9P1SNpVj9Xd1k6pdRxv5N3Z8o5eYkuQGrJyfEAEP",
  "key9": "3SZe3LNrNQqMkHFJz62BxTVrGWiZz8Yz4TTg1YzAk1Dn5rS5PDNq1vxopzebTWY4oDh1E7XBFMHtJ2ZYjaBmdUN",
  "key10": "3e5qtwoUB6fM1mFhtAdzmfTSxY87L9FhoLCbKvqYQ7p8rHhnQ1zvTkwNxwTbnLtUkn9hongPmZ6G2Esr5gNYL63j",
  "key11": "3R7BwmircTuErXaZPP9izrtHtWu3F6bcQ5QKEEQadfvc4m2UmyLcfgGrzNVQkSmzfzH3DfbZXkK1M2F5qAfPjgXP",
  "key12": "3hJVuWoAB8XoAhGUMyGp7zD8jQJqkQzRSZJXXjc5H2Ls38GsPVfkN99qFXXRFUfXupk6YNg1TFQmVXJkgzJ3JvXL",
  "key13": "4VPWTiu7HD1VjipuA1ZcXYrNjACESDg9THAsJcLSYxwxqf9vmB4oyCNzwycX8EETte6iZH5qKpcyouhxDJBpwbu8",
  "key14": "4dCCg32Sw2e1127bkQEJzVvjY1FCri9YBh69afgUEQEh9WmRNXs8PoB3LzE6JXVAg3RokJ2FgKNEeXSmsJksnt3Z",
  "key15": "57mSAKnVZMaW3o7PbMaYu1YxhaC3WDhkQihoGzZCkf725LGw5fN3BPfsKp1GRGpMMjxyK6xpDNdawfhUcHoydvXb",
  "key16": "n15bdbqeaZoJ6au52BT25JqQ41DHFq9ma5JACVkcwz2TKng9RSczGfmmKqig9FAKrFF3itkyTUTxATp1NF9vkfX",
  "key17": "CwXXxv9vxtmwZE1pTGRSRJEFYv2tRq5JnyodZTQcFa8cwhCLJmnNybGgcXzysHxYrdbuUfT7T4eUg3omfaFQJ3z",
  "key18": "5HBSnF6NaLhNFuaEvpTA8APvSQrHFErFa9YmKDFiEeze9zYj2eQc77PVyRM1coU2Bctg7kSeGht6F7uSexPVidVS",
  "key19": "4iyxAZFNDu15FudS8n9cYPqiW3LvwLtNHyJTdEWezKJtsdradSXg3zyYASaBe1WdiNtbPwvEJjLUX9WETpq6q2gd",
  "key20": "22DnS2K2jzeWzqznn9UNa3JEBvvQBS4z4D9bw1AtM8GMXY6ZoutqM655sfq6xUR6rV7a6Evysf3tUBsQZeaVDX2C",
  "key21": "oDTqq67jFiTJgibrzTapVVYxoqgXBaAgW9Y6Vfk3fj3616ErMU9YbEAovfFwJX4difzYyCh12kckAHKQ2z1N5Bw",
  "key22": "4YMxM7uhrLsmuZXFHQJBuZoNRKh9cyZQUVRgCarWarmAvMHst6qR94D4dvRR8Qd8fBYCUKe8n2KQkznPw1NqYcJ2",
  "key23": "3tKU24UkegvFChezfAEj2d51T8R1by8Rnp1JTrJjHJtwWjU2iFJZyzorW4oHxK6APt2NPLJj7G6Y77sW3JUjmE7w",
  "key24": "5vU68rRL7Fk2Vx2Fak5J6nnBqSS4EAo5EfgwASGCqvFcaaTf62uDm2dawzwFwQg3VjLa4ziG81HPFhwPGopV49Zu",
  "key25": "5W6qhPyjhnY3McjBpmVJxMrndD9AwBcxcgRgnPCgvj82ETYrdqtfvrhE2mWnPH2P5DgoPBQDHmjTo6agxo6cxMHP",
  "key26": "3duQ2X3NcTZ5dT4NYRAzxSE8GxuoLG7JcWM9iHwcFG3oM9f6Gfe6tL5c7vfG8Qdvx5LBUrr94PZNtsiw6DandGnv",
  "key27": "2xSw1SobmxBYPdJSsNAYvLdwH4Ad7HJwTifE3Xt7j3Tm8b2f2GWz6M1v3Mf1j6Vmt2hFRDUwYJBxdWTm7r4DsZXM",
  "key28": "2KPDD6Qt6LPyJViejH9MVyigtZyQJQ8czw4L3thWMn8BgaejKH4u6upGbExswfKjmVcn8DSUBiaDmTiKCNvtKUeJ",
  "key29": "5LWWccDYNUzvchwfJr6Mvi8YqV5iMXeCt6YRZ1StAkwwHTZXRRCVt2Z1rY1AkgqXrBPezqGsfT2AUa7XuRCwyysw",
  "key30": "4tCDbZMjC6PBnwPRifvK7HsdD93GHFe6UcpWtTnL7fhzBczaBGfNyjDQq85ZdBq1PKhRXCEJ2GUEeQueaoN5Hh5V",
  "key31": "67X9wdxEngG4Qhue99ebcZHAf6KByhBVyQh1RMwMUW5yZbTJsKrahjPDYr4RNy8kTGUAJ2evXajsepZqEuw6BhfW",
  "key32": "5QXYipXJEaA5VVsnQ2JqWvdLheZmcn9QuHoV2mnzUcX6ecfYLpCyu91o411E4ioFDGSmhFixGfeh6jVc393vwsfX"
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
