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
    "2meoC8EvwxUg6gvfdUrQ6idfi4HZJ9SUgek35JBGmR1rFVhveVD14bQam9dJKCDwMBLuqpmpUdw9poSqj8VojBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5miiiWWGNYv5EtVgNPRnCz3CyK78MyMeCBpnp2UUQAUbcVmbN5LVwZYKU1vQ2EuWipi3dDLJijhqZdqU12SHWpQg",
  "key1": "zDTHAH6vkbPa4RZ1q6rdEWB3X2Nqk4TxcD15AS8oaw3j7u6RpqA5kF5ickweMVdVFARU66JW47cFW6dVhEiR3FF",
  "key2": "4MLZMzgffEZWga6y2uCarG9aKGERQNYR4TxwY2j84xVR3m6FHw5JR4pSXCaBjbMzrgNxChvvGrWZqcV2WEYccLQB",
  "key3": "3knVVhV1oZS2nUXNa6FC31sfDYehLrBN6QxHCriY8x2ytDYoQ232q4Qf3Ux1yuVcEvGW6T78AxYMZmUShfvrHE8Z",
  "key4": "3DQfuoWGxz4uqszq9wagm5Ds5DgJ4H4QKfSCNhN3Yukmh1r1Uh8jQxXDJXqVcvhi9J2gy5xYgjHPtFfkRTpbwQyj",
  "key5": "b3SqMqV7VpJd6AJCie9D6mg9vebK1NAzMmoSLpFTu9h4FQ1H1zLba3DVeQgYLZt3UTxz41NN5qW9yZF969Birmt",
  "key6": "3zQ7fPjFALYxzjyEYTcdK93VMg3qKyKdCY5q2WYGJvNnkH7y95GFAjE1GtmmWgfzZoKTVJMD2qnzTciEYaqZtcD5",
  "key7": "3z5hfnqqkKRnn21HMSTy9EJ8q8BDFumeueP6fhnqc5cPT1vYp14bVdCmLUFyAV3aN9Pk1hPFo3bZgPZcVZTfBVj8",
  "key8": "5H35E2BTaLCxaZYg2jEEido5dWH51RezePLLjZkZghtHMRtbnbsD5YfuYr9nWwzn9egHrkbKHbJAsV2q7dEnneLT",
  "key9": "5rTFbxqiX3ry5DDkWnMCPwt4WhBbw93r5PYFjEHA6NRkN1TYoKfiPu23uaGZ8atq5RS8fons6XoPnvhAEZyQNVYR",
  "key10": "32umsU5NXk5hGfq2tMJvqW2mGvqtmn6bmc1zScj2dTfEXUcWVeemdqzH4AQusJraJzjyYkPeco6ys9YYvpHsRBg5",
  "key11": "LphHwK7auYSqLEoXs2eNAVYmbtEMLV2cvr2hMeHShdW4AMPjcVodX4rT9FvqSXn23rWq21sZEqwyEPy3rHZftRk",
  "key12": "5oj2Jj1ei2iKKQHbFL6B2dt1tLdKrJPDCZeD5hyBtpM7xtiqHNvCHnsannUUYDb9JDv2JYXYzDr6VGoQWBKfVJ1q",
  "key13": "39kR9ihGtR1omZHQVi3XifH7C1jdeuHC7n3Ueoc6BiqeFYaXPcvyHZ5X8s9NhLm3jgynhNj8vukSc3yhTDgNsJLb",
  "key14": "49riT7dsyt7RkBWgaWCERo778FkkNYpWcArMun6hr6cpNUf7pXknhcPpwjuUhLSTgp7R5PYfPudQvhwYdaDaS3aR",
  "key15": "3fDC4BJa5vnFZ5up69aoBz56aQWWf3spamyF1q3tyDxiBXy1shStjqywE15F55h8p3bKKhfrue6QsNz6tKit8foi",
  "key16": "5dibFAE1ZpNx6WGhcx7ySx4WXWRGd14eGxLQJXumQGdP7XfKVZuFLruzk4L5mvufZ3KHYPBLujcykA9p4zqwGXm1",
  "key17": "3T5AdxjmYxSkM8sU6kA3rGQeXzLT5wCPtagh1oiwynQSgLT85iSHcX3B7cDenXna6GSWApSmZgSkW4PU8e4yXjL1",
  "key18": "4zGkv3PKj2ek79h7ufyveBZNTa6g35cm2ASQWX9G5MRJwifhyX1bZHRi3wejL2WRmcv7ZxSq7sBzNTeQnXBTbg9B",
  "key19": "2jDAnxBWr4Q3ohjqmSZ24b7PUpyhnjgnBDZr6Mf5itp94aDudeT7N2AkaPb7VSXPRLVxr5yKAj869tjvE9gESUtu",
  "key20": "3GDtK46vJdZmyR69GWYQwHHmqZVhhkPrCYGXtf7QUyHNMVf2UouHFQee3fQd5e2jj3y47d2oWM4zz7S5LaH724yC",
  "key21": "3Vq7a6a64KGXtRjqY6W819rCgdDBMxXkncbL7suiNjAD1aeAcKe7NNZyKrEU3gD4WL6DezLjR748Hp3z1kiQDgrT",
  "key22": "2sAU3df5ABrgeXiG91YGHxFN3g1BirAdnPmsXNVsGbGF5K1iyEK5yV63fBFJEqTnymRd9pNDfhiyYLCZ4LtKiLXC",
  "key23": "3iUUn7Tyvz8AFPjUJ7arR2wkcEmm5qQYBQgEDn7r5b6BF1ApkHHbchPrzC5pnj4HCW5NX3JYiWRQK7JwCL8HWaSL",
  "key24": "4bA6rHsXvREs1rn2bH4nTJiY2qeYBsAECWd4N4JAUJEuqQ3b532KqyPvhiMeyUz9WhitRV8Ug82fj1yZ2PvU2nkP",
  "key25": "RAB1RkJ5n4fqBf9f6v5PrRomz5C4pRW5b4TARNxe2LNrbGtrEsWxaD3me6j9G4wNKkeynFMSHvCDLQ5aQQQBZ68",
  "key26": "67W7N33F1a7vreAfHeUtNmV61jA7MCQ1PpPkTX6baiohriHs2KTXiHZJXt6W2jtxNK1ADMUxgseiRw8egt2L5arv",
  "key27": "4BnSVgENeWP9dJerMdaTRoia23wYNTx6Tg63HGedJsowivSfHoQnZT9v2bF1aQyUh12QoZYWXpeBDtGndeUqKfm7",
  "key28": "5uwGjsJqR3viAb3YL6jwVzPKQzQcc2UmbpqzdWHnuLQ65Z7dHu78oFHEcTRd9WqfNaxTdNc5xZQ5c3QUBJMtEm7B",
  "key29": "2bDL8uebqvpufKQbSBwzjPpdfh2L1zBXmFqc1UHEqjUaCUaZZTjPcCEydXWBBx8wXywDaTETjVrBshfSV9Z5JJ7v",
  "key30": "3RLMBVXnJcaKQgBHwje6RyJjEsXWfYsgf2ddYRa3CeBipDaZV8ZH4XAim9DtmcagZwCHkcMfm1mSrPPyHLaoYUot",
  "key31": "41suq4Lai7Aa7KE3T4AomW3rXHFbwVke5b9JtcS8i5VDf8VQZ46ZLcRzFrDN2qbLXnaZzguomU3iwh2Xzc8NhKWR"
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
