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
    "3kHrYZmA43HB8jqhMtaoYetBsVEcARgDaGWxyNBeeiZgxmRth6t6iYW98BE4ErjbDjUDHgswTkqy4vcvo8hZ1hxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i5fUQZN2Zsvm5DYr7NdjgDS6NwKEPWQ23TCVgjdXHXuTP7AnFoQq73ZWf1QovhB5Q8VqmNhoBVDY7nqT5ovAbEt",
  "key1": "2rYQQ7AZm8bhhnjzMqJP9jc4txMGo9vLENY26gqhaQs2LY1mEzb2NAKwpgdikuUFgHLxq9f7xU2CoM5NPJqpK6Nn",
  "key2": "2cH1og4QxgLf5FdLZZq6S33zzjC8toraGbB5CADzmVDrjdSwasJgPr2ZqsZrg9diSvnGL2PF56MLF4GoFpcwLcnf",
  "key3": "3pzcz5gdmVjwnbfuJEWYH8TukBdK7vkHqBRH9NKJLKDK1KqwqWw9P7FNUWNWiU2Rrut9spKzTqwJotZeXKYnvFvz",
  "key4": "4VQgKMNj5NMLV12HjqgoEXVcQKMmnQUPY46Abkf7HBpYxv8wKhLKDSzrPYtdFy2N4D5dyyGSDatqPQ8PVsh6fD6T",
  "key5": "3qK5EqjHvQ132t6nwpbimWXb2Uh6mPxi536onhxtxZFtNFqffYTLBzDfjP7eaQcarKBK8g2e7nWCFf8R7VKpn9ia",
  "key6": "5orGcuq9xNWowyQvA7xidMgbZqUG9ZdqkSCsgopyQeKSrvw1jQFg2Sacdx3nKxMZoLtCNXMTU1xsLuU3q7muHmLN",
  "key7": "4azgCmJvAyVUpRyvumU1T2dWSzpwbSVihXcnEE4i7wU7DRhggmumk2HNUyXJDpDaz9LvseGJizeXiaoH2s8FFc39",
  "key8": "3v9VhRXSwDDxXnN3iCUFcPorMNrdwE8weyyuobqv6eFgBMTtT1A8DgmLS1UHr4P4cSeaDeFTvUFgzvQ4rb3L6kcy",
  "key9": "42T2JzWAgrt9uyA34zFjL6CdL3dhhyyb16PfKenyhZnzRqGpNFy3xpGCzmXZDxq4iGgWBRdB6RNsh4poSasr7D7C",
  "key10": "FnxBxtFAFaBok8wjGey2f8jrG32um4BJxcPZ2MjgwAw6z5LkDoQ2tdonjbNxZyFgr8BL8Fg9BCk5GXqgxeUZBT6",
  "key11": "dvLq668WKEuwzk5hVoCeY2618L5WpQzMqSZtHfLi8c1yyN6s2E1F1KgYdSKhEHj9v93c5ePLweNH61wCNW9WUm7",
  "key12": "3rvQeK9LGWRocgvpHrARNfx6Wthz5nxRSX3ZQ8rdF1v3WeRbcgEnKZrrJGsev6VQ43LFCxQEzFYeptkSXpkHnJKa",
  "key13": "5ZneAnq8QGjvewzMgNGTsGVT9tiAAxZNfZwhtB8SNnya5ysbqG79yKFYDx7AmzfGnwBoLisPiG9PVG3pJaNabfsw",
  "key14": "6ikbu83oKcjdU4zNDkcM9rK46e9oow2En6f7GJQQBJJCizscKusG5miqgSAqi9YFX9kqGXZ8YMqPBBFPepfA7uE",
  "key15": "aZE6ptoYKi5YaUsm4CguuzrV939Nr1eCswPWeDY9UnCNbWew5wACqAfktFY2LF6FqNSDXT6D4MqfibxcxuNVqcK",
  "key16": "4BXkbPL2QxFPBcjinPndjnGcjzUczkXYcis4TN5YfXutYWEvcDStzXUDf8NXmJet1XrxwbmMKe5C7m7jVKpELMKd",
  "key17": "2TLpX4RiM8X5pPmcv2yzCyV1q7nvuy7tQxaL3QWpTRvG5moQU635nbxKUYagXsSZddQEBMVrfjnYVuWe15yJ96VQ",
  "key18": "5hDXwSeFvzaDmfLU5jM4hWBYgwKmeCey2vygMa2mDq72fJN5cM4fja3VNv9tMqcLaqNKm23MUxLjcQFm1awnK1tK",
  "key19": "2qafv88Wscs84yabHkcRda2pSxunwqCgsQ6S4V9mzgsd7yk8SEFm2Uym35LdZDjQg4rjwhfF7bHsrrxfns6R4Pb2",
  "key20": "2VF48LpifbmbEQqukm9FtFdja5Gx17uyZVNAUvEEmUc6LGmwjnEJmcG2tqkV5ox5fjPxtmLKwTFjFhETd55TrFHv",
  "key21": "51x9LzakgH34NZtx7hBwbuT3SH4AkHsEj163tiuL8gkei7Ho3buKxj6GJ2pnZwuRLhzmcRRKPfDXmLLYj4Z6mFaE",
  "key22": "5bXuVJt4YG5JUDV2MYmNedFEgY2p5N3iJ3ckHbEvZCVwri26f7LNuH9AYDb76UMAZZJj6rUNbsfWorR1nyER1tGW",
  "key23": "2NbiCUMH3n9kFKW2SfRoWuhfpZ6etguDoZ4kZJ7cioUwu5eG8p7UXwvdt1MQnfXKine5reJppYX3XRAtVz1A4Ehm",
  "key24": "5AYM7f3zs1oxcVXeR5NZtziRF42vYNWamEyUVQTdqp67gAcfCJhp3qXNJojqRVUDQSuDFssLfnrSBRPpnQmXMAGS",
  "key25": "4hcBn3Xdo7JYjBpDNtqfV58RHv1RtuDT2YUGBz2wQA5RBo18RQto8moQdc3eXW6eZtrKCgHkTWAbP91giXFcPWPA",
  "key26": "PL9KMg6pPhNPReur38tXiaVyxwUiTyU6Te6BXwhxmCKHQs4ik8x6YmRrgx82vLUy8Pj6m6KXNXawKNShUd3XKSa",
  "key27": "2wpT4UY8eGi5J6yHnDQPfyywqTzvhK8jkq5x1BGAVDfvZmRgrEgi7sLL1pyFW4EWjWzSdgQ7bPxt78F98Ff4g5jN",
  "key28": "4sohWqD5H4CwLBiq3Y3iWUq5ucd85RRhpnRLHETPa48mQPfxsAcHfCisseAtsH2ktFRcf5UU4ak14mczzkBWUr9a",
  "key29": "45rsFCZSX4fzRgntoj2ENwU3wSAj87CeoVLd8b5Jhy9xoszXfR9DkL5LLjKAzA6YjoBYYvbstaEVijng2CdM4Nge",
  "key30": "2mpwzPywpjEq4ZteW9uVsKek2zb8PCprKsKY6mNVm6HPexCVy4jCpPxhTjxoRuFic27FYSyHoyzzgoSWjmSGgiis",
  "key31": "3W4ozZSVMCwrdNGcDjUKB3newTXGU1NbQvS7xRHvJxEwrtrxymoLZaqb9yb81QMhNVmwjHHfNaywHV8nXjpssUrz",
  "key32": "3NxfzDTbXN9G9FnQvmFbMi6bWdoXEBSmx4BGCEBbLuBgnvitvWNhehCvThpF9YDFFVZQMEqvei4wpURFVN3ufpwp"
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
