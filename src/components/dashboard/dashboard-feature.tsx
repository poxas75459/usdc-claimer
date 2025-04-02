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
    "4fJfoD5aUYo3SRTGEHuhJ1rtNcvRHoTBZvKwU7UPcK3PCXL1CxGZR2RJD3HphM2G4ZKZ8DHBsaGmJwTAmcu2SYmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FYRqcb7N2dXvjxXGHmupuqzZzjHjqiTPqFUUzxMBnXYYvj75dZS5j99DDtinXqurRFRezdGLLqoamBALRddswtu",
  "key1": "33LnVisoNdNFSxRGmARUjYR7gkCqfNYbiLRkQvNFSvbDJPiMXXTnVDsfD5m2z9RtNyV9eC22MYhRSA37Dj3q1Ciy",
  "key2": "2fvzh6BPT9JG4kEs893TwnM5nMu2eV1LsXuu12ogu2dNTyNp3dNHLvvtBSPANPCkBD2icVK2GBeHAbYtAmMZzUsg",
  "key3": "61acEdeztDGQ1x2BtkDrVXhYV1RDwncWu5oHLnCxaTxvkebApCH9FvSrU1gi4kz36YzxEEJyrxtoTVhgc1xEVtfc",
  "key4": "3WyJpjZg9XDfKSZ6F1UbzXtrQuGSGHxVSmoNdmwcUr87QKd8LxigfjqkuySvvqrWhMUUAgvFcudjAkoZiawmGoVj",
  "key5": "UX5Rn8aPnYaUz7bCGf9hSKAc8wJSVsYb2vrVE38tK1jnhTXWGwAUZKMFMVCWZTMLVFpwHP42Ujx4cqJv5PRiYCP",
  "key6": "3jTNNHwcWHjmCs1h3H4YdwJkbTKpDHy7BfeV4qkGjhRW3YN1nogpsmb8cwkCMJj7bmnNFtWmWFxnH3aEb3nfY7st",
  "key7": "4q4wStA2vEQDk5ak98LdkyspLASBmkP6udf75XAP26LbZVnTMKMNXT1C2wKiWJpQ91d3qZEQEx2VYe7ktKJ331P1",
  "key8": "24ZPszKGmjub6iwL6qj925ePzRvaFnTVqKSNsN7sRzVGS68rc8fu1hLvb7HEse6u8kFGRhNZabouw1snkhqywoPU",
  "key9": "4azCxsUwKbrB4tJRtYBMqna4Lqf7jmRYuUYWeca42StrHfDP7AmusHPEQpFJbd6hx3CYKQ7a7wFKNvJs816pRwUf",
  "key10": "9K5qjUfmbvLwPzLghmned67i4w5DdYSpkVheceTPvE7keuxUq8DM5xhQZN6rS9phQjB5wQbQbLnkRxrnykg7RJo",
  "key11": "4mYFY87hsWDhmmkgQVpYQrnGaTryWtKUnDS32VAoXANRS16Fc2gqpjGQNmsFjunHFpqgKK4vAogo44v1rBNkCMrK",
  "key12": "34EgLMDFroEMS6f7dLR893fSjWnhajw5RkCLzzHbaE6jDtcSM8G47kYKpxNMDiHwNzHntg4SmiPSppUHPXvgs2wg",
  "key13": "4Lr7tpzUQoMwe7YrZLUne1MDG4bT8DoXrb7gQhz6nTgbXcvtvk5at4rWqCkd2U839cT2mv3CxSTZR7yMUduoznPf",
  "key14": "5FQEJ3XjrH6MpAKMMfWfe93vjAPGkExxibQ5iXGebayny9tuXKzL4B4pw21NuE2U49HNZHVPfJ3XhLoUXXiZ9Tup",
  "key15": "4jXcr1Yyf7CEnbUhJ2ZPCaynoGhfzHpWyBJmttx6F2n438V54H8Lg5gw42TGGKyrqpzikAtCTQrYUzsoahj6Tjoa",
  "key16": "idhMs8iqEUZKGHSNdHFdojSjTGTPYpJVzbdSGx9PKqUYMu6sSgwCX4CQJYzX43AwF94wDYkkSzXKttSpwFGVWZp",
  "key17": "4xL8hSGvGAhhMfP1tGKFpeGwGkTb2gnmQ94s5RPjyUgrzDT2uPCu46uf2gfVeUDbrPzi9y6DCLAT79tCL6rKFn9s",
  "key18": "k6FFryUXVHaR2mL6oGcWYp9CfVmJQDhNYdE452hYgQyjQUYSDP1ivzCxHL9H9EVMyBViYP52LgoTqopMqhv5aKL",
  "key19": "2WxqHjFWjehds8jA1v5aggiNUNJoaSjWAyPD9weeqjMdKrvVgv1YSFeXBgHbKJdpo1ZtmQoQCt1BQRLQCDn6xjrz",
  "key20": "3apJGJSea7o9yqA7g1croWhTopmvGj3iaaU3sCeKrieqmqhpV5Lbg5VRzmLE3ina21CK4oh4X7RbUNjEaP7wjV99",
  "key21": "46iP4GJgDKzznghZCWfENyauHXkmy6KeskW45uCPXmWcSD2SdJ3BJRP5YHQ5LB81jDm6YsMFryW3ZMqLq3eA6P3D",
  "key22": "pqaexjJpu5reaVPmJvAsd7wgYDUdrPUpux5bnFMiAzagfeS71DDFoJfAWxuzrefU8gKS2oi2G1yGRfPzTmMfXWf",
  "key23": "3LZVDUYnrfcWzCJh4bKwrj6eyTdMxYYJWqcZf1uGtdyuBfWkLtSZz76khwYeUDUL1XDM6uX9jJP6i5ufANGwTvps",
  "key24": "5FAzKfrYqK9DkoYk1zf2fwrM5qs1mXGSXMzXmnjgRqn5a7oNQWcGcus9yw79brbyRMD531H57WhCV6ftarnuMouu",
  "key25": "52Ku22rUDexMAEuem7zUZZNSwN4pocEXTwkYHXHDDCK3ykX1NYabZYLBpyUMdcrKLraVNEZNknqwc83z3qLSn9F7"
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
