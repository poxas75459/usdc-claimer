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
    "B5NbSFZCEghCSatySZJgqrdRTi3VgRTdK2o33w4rhCER1H3NsaQY6Uyk2zPkBHUPwe3Ce7TR3gqizBbE6R7m6jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ChKo6Ynp5u9168nS4XUrKn1X8MCCEk6Zsxq9D1p2bqmY62g7Ks2C5X2KSd75rbL7eQQSF3rm3JdLjANQvN8Ud5",
  "key1": "38XZmGMX2ZtKkdwqnmc5ZPxTxxogBn3zwsiRAeXBUb3LXFAPN5F3UZ3Tq4vFPwb2vxSHZccUTyjXr1zt5rYbpf4W",
  "key2": "B5Jws4aFZL1ojbjUdBP8VMGuKM3dZMVwozMiX9AEuupbCmttjLqZiaLoiyid7mn3J2WFtkFje7d1huX9aydHhNc",
  "key3": "5RFACDhPb9QhKZaJezdRxcUkg9iDBJ9AiKBVhm49U4kmwyrWgNfRvx5z47ssaCHTM55Di385FZme281f1p2QCkxx",
  "key4": "5uVgjJC4694gcqyhbKPbkeXzRmJjCLCPAwLUoYZQYThbKxje5GeMrL1SU2juTMsmkG1qj9UAnZq1cAWDE2myVvQa",
  "key5": "4T8tyxnY266CvtymsM4pW6rAHy6pYN5ZR9CfqQoo6kn84tgEezEJK7pFHgtP3C9BMW6C3sqPfFbdxVauEuB2w19t",
  "key6": "5PW2zUSFG9GNP1ovimyo1szT9W9UH4iW9e4dDpjCvpEoq141KAPzUikzeDu1Y8K2LntnSHHmMJdXV8oe8U74E8k3",
  "key7": "4Ngy4bvqrKv63PC3ixf5k6N8chUw3Tr2gFyYRSy8pYi64DkQcdygNMrsD4aT4Bz5FNU4MVxthNKd52yzmG3uH5xN",
  "key8": "5Na1h8X97WqLQVEHpwedg18imz12Eyf5AH2ThAXoZjucyNVXerWr74k6rbBmWyQCcZBMbXJpmhq25cJYp4ZusLNR",
  "key9": "2EooyZJQdBR65Mj9wUhjC6KL7JPF6HdrJCjqTXZ84CmdbiHF8Cuhz1HdrYgVFCFohkH5sX93YMn9Vb3sxgDERxLB",
  "key10": "5gj19gyAEeY85X2SADFsNrRw3bojJRWY17DD1Jh51n51RJRfWG3hGXqh72DeKgtN6UVq2rdmUQHQD98pimiKW3TQ",
  "key11": "5kyLP4gvpNL8mAJdqz3A2fG6jZSL3oeQYvAxHAqKChNBq9ySfxrNNDHLYYyKZnLevjnF9vXZ4F3Ue4SZHpGPHXJa",
  "key12": "3ftqZ6onNnMfYtffsHQa5tqMAgXSSsPxsyTBEzRmX4dYkbZBHACajhZiwUULqqbVAT1dRzw6RVyaxbFm5DFeogYN",
  "key13": "4iVaLAe8qUwFauqTSsizXsR2esNyqgkpEf6ctL7gAoShcK7tebj1BhLs5scawaBmPWXv5mrTgcW8JZwTCWkGzrF1",
  "key14": "3oU6eUxwn1FCf6nJf9f1GDECC4tKNWsJKypYbBdARSGXjgdXKBbcjZEvxVb9gj5TTujEGJ1VNy2uB4YQzbf2RL5p",
  "key15": "4YpfhgWJXrvpLfidkkTo2gN3BuFUKg2RD83tucMpLprwvVeq41gX1zQUPMaDT7cSqaikGDGfsgWNJ4iPbmi9S9HJ",
  "key16": "5767e1sbHWaxLqgvA7nqnbtcqawo8oFPSBM3fLmgFT8osQapuBj4BDqSwPQa4CLq5SHrZXbdcgZ3rpxYepyNf79r",
  "key17": "adQdpyhNSLXKmyxTJ19wSBA21BbwRcyzeW6UXdh7eb3Tf1zedFoLqQ4xqLgcijg6Z8kp9JnpTdwJa1iZ3AXX9g2",
  "key18": "5XHp7qfYcyba1tFQGmfo5xoWN5GgGP8eeKzoPiLnABxpf1yH6S8LTxkihptKT22SM9VbpBpYFFyhenqSzzXv7YBC",
  "key19": "3YVC5YMGXRpVChpf2RnNztP2c3VU1Xj2Jpv72g8W82vn1fAkZmEX49jyffZmwj2utCaxsDSEiPQ1YaRJaZ9ztg3R",
  "key20": "Va6YvC1yLsMk5jtjx6Yg85oUu9G7RaELvM4rXQn5ocMJ5nPLAMwLtUGiR5jgQdS6FCEvvsLPPfrZzYm4TENmeNL",
  "key21": "5hzUo8YW5PhuNszuuYTucQ5Fp8TqzMVBDkmVeCRnDL4PC3xBtYTst6Ng13UngdYBFsiD7U1KEtZwvsuLBxZDyM8z",
  "key22": "3wj5zk5EXQkLtBC8R4UGKdzsTSaD6c1LRJGBueTQsRrkmxyCVbqRjW4s9XSYLnQy8c8pdJbTQDZb5an89ZDGrVtq",
  "key23": "5djkMQnQZGpAM2KgkiJGS8nuNc82rtkSMqVeGrb7b7W78fAGdHL5hBP8et9Syt7Y4mnsGeFad1enNh1KEcpDDbiZ",
  "key24": "WnJL81fw69oumDQ8NsvqtYMMYUosNeso3aeSyp5C6Cu6Gce2WwK22J6gz3HMjv3ssffBwGGUrgZ18uEgk4B6yJH",
  "key25": "uPjkW9E817GwiFXDMVaXEwNZbbvrPzKUBB1b2rMWNxFJcimUU1urdFUSc18QSgaHCPPwU88uYKqUMEspPTfGAtM",
  "key26": "4Li5gKzyrhVv9aYMoKwAKNaefxi1TeLCPixchA5xvTVWFf6WrsHuzQk6z5vMwmE38GeUqkspJTPhwpoDoKStrCoH",
  "key27": "3s1thA23aUc5LkpWZdt3AkgEArmcWKrdU6Tmm9Zhcv3tntXDQKEumQwSKYY4qEquaUAjbenLUK2SYRMpnpXjaB3e"
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
