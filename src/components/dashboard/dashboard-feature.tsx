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
    "2x1S2P1nBoYAwWGUJxBZyjEUoFzLYGekLxxEeVuGmyCBuyCCN8JvWgMTbESXK2XXfQvgB1CC7DUcGBs1fQuxC7mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VdBe8Tc1jSeR1UtnhRyrHpnFA2Maiy16DKa343m2m8xSNpUygEYRCALbzLiHRG5TUL4MLd3Q6dik2eL8FWPdYAZ",
  "key1": "3Y1ZWBkiBdkndguSYeNoVHuVGLn4Hqf4M6aBKzk15hKjF6YXHznZgqDYD5Vmk6skJjqqyHYDAHLPsgzwv7NE7HPv",
  "key2": "F8pSZ89bykiBs3XaZUUENKtrgZrWMurYaPsmJWcMeeeFH2FkHK2NK7eLsudyGKdT3u3qsC5YnqDPnctMJU3GxgW",
  "key3": "X95ZiZfhgHfwJ8iXZhDmGNRmQv7CjTE6mT2viXyYty53jLzjeXJJ21Ae8UyuG7jHaRfczmWTA77CDoqqMuMTmq3",
  "key4": "4ZNwTFSrYWeFQHwvPWYQre4d4qqyRTF5CLr8qjaF2GamcxTniQnUo2dpXFGKPvd91g65k2bVBZefH3pwmdudBgUy",
  "key5": "4miVtwztb76HKDSJkMmBbb446a7VkWMZVo3hSkQVnx1XkpNFA6NT8aiP5rTwvt22wUy9Vh5zQUy6bnfFQprnn5Qk",
  "key6": "3er6JUekxkdLKyDGZAZdNuCHqdDMewnr92cVu8aS2pWciRXEfkPbpA6hwDsAbA8dAr5DbiQdwQjXozTvNmoasjF6",
  "key7": "3prtYUiZhWBENgR8nw7YAGymCxiVZVUNxQoiAdfm1RPb87nPf7QHeN45Gy8yKgYZoYe8miKooae58UgPMogJkhLd",
  "key8": "5JgTziob75fXmLFi69oSmAf5waWmUgRvAa5kTeA4aprVpwNKq7LnMngc83Ge44DHUxsgGwansNEWeudqs1MJsC2v",
  "key9": "52MdBKB39h9Z3CLojJ7pA3zzZauyL4JPX6auhkUrSfaSpRoFQyBdpqXPUcgDSoqsoFg6rcENo55j4RbjtN4qw9Sm",
  "key10": "J1vBLJ169M3vcBZKDZk3X9xYGMhzm6saGRssuRvxiRucBDLexhbiYYmfeDkTQ5Wb5gGmH53LACKg84gk4Dw4NqE",
  "key11": "65ffQQ3xn3huvT8gYLtHDkvmnugS4VzfSw1c4EmZMQAwQuqDbKmvEFufWUEr4n8oruxrCQtPj2RU7tcUZFdjAdRE",
  "key12": "547SmkSS1e6aWpJwGA9RkCvDeBEo8fSsQ5sFvi9gmjr4q1JTiqW7uAYfwz2LiYihKRBNyhqX952rpjiQvmdrA5Hv",
  "key13": "Q5o6oKsQxiq52G6rP9azzRHWJaBqoVhLErTzkwAwS8HjaVVE2jLqxsFQQ5hQGiscRaYT4mLmtDkDJMtdxNapakx",
  "key14": "Pwre2GFsJ7uJEmNeTjXwVZttMtqWmoEac4mLTjXwezgDt9kWqdZxYo9MMTzgsArMBxhUDD9vVwEJyCQqLm6fib8",
  "key15": "4zC9fxqghr7AP8UhQMnSnGQ4pzZCzM1jaaLy3A1EWJQxKBBTBL5DLuH4DmP854VN2x1iyqFCp7A4i64oYNza3q5k",
  "key16": "3VzuHyp5qTgK2nj8wJeQzyVfLjqmekcrCKud1Z7Mwin2t8kuLp29PtTi8e82pLAXGyDv5jRVHayQpyc5DJnST6wE",
  "key17": "oPvow4aojKDqKxF61KrT9eKeRRdq4mwjsukm54RaCSubL4fwzw51FbgWUhLkJsoeS5CeGb81A6vJLJTkPrrr17F",
  "key18": "5ERydcv8goKiczjPmbzJZ22Ezkgxi1hypZDg3xACsMRVogbsUq4uHKKusq7vqgkbcFpGLMEMS3czSwbd84jqwq3U",
  "key19": "2cWabEEbmyhMrTbg2bUbSTGguBaVfm9oquxsvHGvEX6PfuXwbKgZ5rviciC5U11a27hfZmBrNABFuTafRcmhMHSK",
  "key20": "2THzFqZZix4RweeMwJD9PLx8aWd7hLGU9zssXgqjF4phJzC4jUPqqAjDZX832PdrGevmM9MPuxAGwMvrYSAH5eeC",
  "key21": "4ZJm7oKCBt6yWjC7MmM7URaTVmjsQyEqKGNrdEdLmNNBmT48pQucF9gUV1Q2Y4NVNxqhBLEHXk7Samj66XQ39C5d",
  "key22": "xvWvbgmZ3VL7hqAFcTDqeabjSASHcgR4kUrroWwabtNGfEcsaqSypLsHWGtCduQpaKWpJvg9gyHZg5TKkQoaDGm",
  "key23": "vVAHD6zTqXjRkM5fXyqXTzwdAJtGYfU8HsoirWtRV6KM9d3jVjXb5eA8N3kYqtqYyQjaTh9x7FsUbFddLPYxLwW",
  "key24": "2ec7cBe7r9TcrqMcim96aw6mrRdFubdb1Xrk5k2KsEugf1HUFN1HLMMZSk4nwUDCVyMKieBc8wtX2WE8TrLKNV3k",
  "key25": "5nnKuXMCqY9K7dC22ZfhqcJU8EVE3v1vF7LamxQkzvUnmkwWDgVhrmyenypP9AZiZdh3hgD6aDSdBDwzoqprz5ci",
  "key26": "5bDngjHZWzwJXDKcov5NCPuzsdHHcF8ZyxtyXirdkNtop6X7qU9MNE6AeV3Bri1nfb9Zcicm5qsbAfXTjgsRi4Nf",
  "key27": "5jsHCBTVKYZnEwYvupnXcnxCeexnrWYEMqez4J3iXPiuf88NVxziFfb4VNSE4ziC71jWXqyTvk5ePEEzbGsVLPsG",
  "key28": "3CfcJJCJ6ZNhhJpwu9QZ8hfXwwDXzuHMvYNSm3VF6gjS7QRaJbfev7iyypxSMmvJbtZt8TRa7bpHTSuBzeQXb6GS",
  "key29": "2xnFSnRoQa2ThYnGNhXs4HFQDnw6cniGeNZmRneCPK3SEiaMTPwt424uCTTTwLLjiCpCxgxV8KWsRx22nW3bF1Sw",
  "key30": "frndyHFM2xrxFkanEaczixakzW2hoHNqTDRwuVPbYyyTRD6BTqhnG3A2w7WJv7FZbBDqg2ewqEb8rw8xdbLKHTy"
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
