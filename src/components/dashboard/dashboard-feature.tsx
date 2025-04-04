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
    "324ENv5XfdCirDWEM7uX6XjWvJ1QgYWRcxgJSCKxrFpnf8YFq2Cw3kb3sQDzC9Pqm2tVwSkPbdksU4DtqbxChqJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzzvE4nTFTFYCFLK3AzA7MSmcx8sGY25eZo9CAF3EwkSiKHnB8PnYYHtRTvE3JVCWJ33qoHSCK4JdJEUnjtRfub",
  "key1": "3dfLRDrMqQJXh1h4G5a1wbEnA8ueCB3fTpx8tzkrwgH2xDDEo1iaW3wAA53cay2MST6apB421gTgwh9rqFnarwD5",
  "key2": "3z6YVgLEXaBJZtcx8ezvd94hkjp784F7VrAmPEwJnTvvXw53X6Vpqe6LFwTnKxnuGwQmTt3G6LHby4aDqjdKSAAZ",
  "key3": "fjd5qQ8r2oBNFUXFZMsFvgRMh3d1yZDffaFef9CrcEKCK52ZqAazdGVm7YmZ3vgQbqhMGvZ6oJbrsiBDrXFjFD8",
  "key4": "95GZd4DWhmJ39Bhdb3pZL2YjJqr6dgwL2pTgYrNH3yaz8Hq1HAs37Qt9EEXJA3cfJ5UACBqYCCYm42MrH5pAYg8",
  "key5": "4etodd4Wtb9A6soZJTZNGKVB9dsXKj7PjjpJeWEVuy1nDqCQS6KscAqdJxt5nAzDCnmGFmbXiBtf2SrY5rxxKN2k",
  "key6": "4gSnGW6oEME7dvCcz3e4jwhjPqj6eDXWT28aeCVHTZgtD4q9wr9s9Sn94ptPohprRZyusiBML1TKktd62Qge1aFA",
  "key7": "35N7YuZVGWWYZeMFyKF6RLnM3QAEEoFL9gUhvJYwgCAewLi9LSHFWcahMheYxL615GAfNYsqzVuXQJz4CHS6q6oF",
  "key8": "3XnpgpJJdk4aV7oZ8ihZCizeyNBKF7Tbe6zNwTeBDHkhW7AZTGoySBSwJGvKAdcqpDesTtqi6Qr2h1VZgFSNyKHg",
  "key9": "3EEuuCyX8iKvcS9YiWAmNHLk5RMW1bVkqaYFc93H9aVsEw3rvMkuzarz8zkexQzWFqA8GxYjvq4B1Jk8SKkabzj2",
  "key10": "5aftEaXnahRPLQqftnaKeZJKMeXwbwj6zwJKwqjsiwYFEn1SnvUczYc1u9NLNZV18FGFKyDb9TBbwkJeQzQfkW9A",
  "key11": "2NJqCHeYE427SyTf1qApZGghAnQu6GtxGXDjT178v8g3E2KenSngxd3FcMya4jvnHfShVQmcvpJh9ZC1u7gFHqvs",
  "key12": "3PB2uUS8m1ij9jH6JV4bkpRJq8WFR9wvH6DCG1DdQBpZAgYJ5zon5Ct5iogbdTXqJmmjLq41wEZURMTdyKo4DbCd",
  "key13": "3nQF6nXgputWAhbj4yfwoGk62vLNed7tU6P2AXzFkBmEevKkEYJtaZ5Le3oYaFxpXEfxyXNqWZMQhv1Y1UNPoCvc",
  "key14": "21YxdaKYT2kPRFt1b7xwG9ER35ynCHkECQYHNoTgx7XjFcBT89sidRoeeYLSEQQZoFFR7DXxoSZBh6aLcQgAuSKD",
  "key15": "qo9zN2n7RsvHtz9zwwjZgyggrczhhKFqNQ8t7zKXhw9wVLdPgpn3qiXf8gMtjZUNcy79b5zSrkThPcUzkF4YXcf",
  "key16": "3exoo9HhxcWBS1zZ9o48XCXvSzXSMWfTa9v1ytF5unH1Uj9LS6Rfvzbouoe3mbph84LLMxcrEiKmV2zGX5PxxHKY",
  "key17": "29W6uHCefbkeGLp9Xe98x3UyzDTxDKNSVfRn1EEjWfG2WTgcmVuzHpxhqik55fx5ErP3cqcv3RNSt2FqGqERnDRj",
  "key18": "4UKVeGPZeLo4zgMvnrG9a57E4SBnbGnTmeQZrDCnJdpcBXoG2hGYk4H74wBdo1B25q8Z83ZD7VsENfRg4ibncSLT",
  "key19": "5iMgE4XfhmfZejVTAKqcyNtmLzWhVwfrfTr9G5JHVoZE4sshrkJHHxUAjSZur1f1bNdH8344HZiibF2rKaszMhf1",
  "key20": "5THQnEWawGNuDXQzhEN6SH36cir9NYf9DpyfHkyAiAZTFkMZySaruJozMZ2WSyzCYX3Yf7m1V261C59tYeVRoHfN",
  "key21": "26QndkApBYDeNkc1SrK2n1w7rkxATLj5qppyprdMn4cbaDFu2LRip2rLD68YWLBb7ne9JHQy5DnLJNkj3vDntYET",
  "key22": "2Rd3aVHtEJcBgAscdLv4ymi6xaWmdse4KnnFQwVqjeHF5Eo2r6v5ScxP9R9aHhLZt8z4hho9uFE6ksBTwy9Ntdd2",
  "key23": "1z8MNFcppibAgHybmeduBfi17MRc4pvdwvy3jt4Q6MrFz5UZssW12gQ3AoUV9BddQGwdCgQhbKBjStyFaiaVM7q",
  "key24": "5FKf8e1CcS9m2arFaiq3kRenuyyUwTtWELgvg3GbZBwb46ufDKaaRpHLeBsNEdnQzEaQJfzvFoc1JRMWhtZBYtes",
  "key25": "3PXCwQowWzL6bFcmwxzLbLsKkvJmY5BKCGe8YfhREXvUKfwLyLmSp2Z78C2fAqz2hydm8EUT2KCs4um5ZiNVDbg1",
  "key26": "AiVuuoqsTV8YfMgxahGZugmba7aySMMrhUB8M8QAGvvXzFR1SnNKPW7D5xxpq2Wte2DAc5f755LQSs7KJJMFfKd"
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
