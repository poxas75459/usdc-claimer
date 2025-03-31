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
    "5jTUucZKXaXUbK4zsMdRY3AAU6jA4zfJXT1PcM41Ym6rNX68r61wqxxbbZQimgqD6sCnAwp4yom9hWoj5m5jwCSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jRPCdwivauQj3hcjAk6FyNLuBZLa6Xkp1t26LuX72avwpf2fZNiJxPkmbXRaLyj91ivq5fibuFN6iWeR2icaqVP",
  "key1": "4TrkpkBk9aBunTFxUUiXJfuZ4bqYqsFCG5HwfcRSBnsYbThfR65EA2vRuSG3NsJL8K5t2bWFDpph1gNKi3zz9D4G",
  "key2": "2bFgsAa5HT1S5yEEMxS5wiqiyAKU4AzwYgRWJDnY57UdiXBBsaE3MbNgX9yj5GYwvRWpK465FRTFyGmTtEKGLSV1",
  "key3": "3cXNgCSqoXdRoNitNMds4of1uQdQnFMvENXKxdQW7qA7csU9zvavGSffn2CCmWDh1kizyMfwtm11M42JDhLfMwdW",
  "key4": "2TUX5LL3yeYXm3uFFUBoQd5998r7MQsPhempq86WUbpiV6iL8rP93KSHDMaFa8KAns7KAPTmoTgjX3EJBnDNQgsn",
  "key5": "RQvJE9g61SAWojswqjjiCsL3zSiae2NEeEQQdqEXSv2kPhJ1UMEamMuMY69FHUKVAXWvp57JUSVGKWgHUf9z9yH",
  "key6": "2Rw17vGX6ym8PF4tAk3rmP88o7fuj1DmV746H8KXiAseen9ex5fZG81sR2t3zs1VZ3oBo4VdZGpZoGXobmjmStYR",
  "key7": "PDAYgCs5qb6uRaWFyasg6TAHzXV4ZqBsCcZdcmaawK8XZhR76X1uqGdTa6NbcWLkF3EWXmJY3ABMi5d7fpmKkoJ",
  "key8": "3cfwvoDPuZVjCh38GD628EKWwPa3hwpi1dAyxhtXxqGC4XN3SjuzmeybTa1Ay5inN3phaeYek8TPkuo2ubAioCBo",
  "key9": "36zEtYHdt8ibDUE4UacvacRUd7oghwRYFNThxbWerM5tKLzntDDXq3Bq4ZiWGzMscs8JzqAhcMJAM9e3rtA6Y9UM",
  "key10": "5SNHbMSJRRm1HdiCLzCTTeNpD2DpWvArPMJ4yfymnMP5qJiyWFmi74mLWfcNXdJRRtQyyQVdrPWpR8td3g2VaGDw",
  "key11": "3pfH7LvLPHfY4MBp6bREwTCGZmvEya5o97e83nRr3Ynu85y5A7hH8N3w6whaUyqRwGzR9ZNGqsiAPKnm6kSmJ9z",
  "key12": "VtLtRqYuH3tuCNeJSQ2YMYey64H3FnnG8rXrPX6WXWCLUxnUNKHCeGjxrmWyeX5UJeHVsvC8KytwtqGE9qKU96k",
  "key13": "4YmZEmakwS6W3SvDL9qjHcTMAt42f35TKzTGirktGqa1uBfv84CoWTFDLPeUsEv4KonU5F9k5Q4atWUXd919roDP",
  "key14": "5yjBNrn556NajaT9ucsvJCQTxx8jbLHxURzuWnA9M1syUxBzEAvRoeisBTr5vRejGVsJdLvuRGq3ByB489gPVysb",
  "key15": "t8jpmthug3F78oAkbwVcgUMt4M9A5c67aUCZXJsdDV6ZjVYdJbooheT2JuFH84wUrniHZHdNHZRCaa2yekjs2jZ",
  "key16": "3kKAm8CYvEbv8FzCdFamNohKSEkDjZUG3hk7mkJR1ejXbgcu1S8Jrft6d1F3D6iByGYy76VmQjcfZsPYaDkfjtFR",
  "key17": "4UtHQUnRZBmg1hoxro5m55JVyu9D5CCx5AKHQXqCkunjUxUizAVLCd1zfZtnhTJ6A59NGVwnfzxc33t9seLaD3a",
  "key18": "53UVcpEpxqCxkkgnH5sUEBaQFd9CNWS16rz7HZjcVgtP4NmxxNJU3ZQ5rBvCxsBVu9Z52VkTjEcQuj221ah5C1Hs",
  "key19": "3ikTSouYrP5GwQeQRLE6rd737wQAuw9RbDBqT7c2kY73n693M5mungNvdZKyNhie6dud5xQJMytUH6SnpV8U7NL6",
  "key20": "3vcPaVEfadKBQCAEyHLF3FmCCas8224LyqEkK61FKYTXA91jKxN3TSsnUWuZjYb4JfWPcxki9po8EN3GAx92STNn",
  "key21": "5hPa9Ps3juWwCwnoXs3LnbrBkZAcxzgBDqiWEC7e1hw8dAi9GK5tK4zKVGCGa7ZAswRreMpFLjPbxbGui9wZ7Dj7",
  "key22": "Ca2RdXH8BSoQ9VLpqiQPpd4X7Ehmv6ps1PpAvLDhWdFSQBe471h9G7VdC8d7iRDVsbzgXoUTd8q6WC9Ms2i8AjK",
  "key23": "2auVqJKrtkh1yTE3sPHzCFJHcD7c4tvH64VqvmLHvCL7hMXwveg6HuvNLeMPu3kC5PpbL38sifLzYhqUwPyG4sdE",
  "key24": "SXZWpZrjfyDwE5SNi2ZbEcvgR52TDMbW3meyJKY78y1WSA2b7cYebpAtGrLm1mb56JRfSaWwDEYiSYVHpdpmhTd",
  "key25": "32cV1qCfZQD2Dphgt86cqMqW7KieUuAbqc7ZSYQH9zaGPNB1D5UYU5cAByiRTwXSH6E3etgB8ciA8gXnYm8HTz2Q",
  "key26": "2MSW5yxaAHnUiv43NkbZ8Bs4M5HVKM1zxKqpSeZy8xXSr35g2tSpPYbiU9vP1aaBky6qWSWi22vctf1Kpq2h7W3h",
  "key27": "6ABmMvT9Kcx9c7Xi8QjL6zEfnaoPi8cKSrahNPrEiesJenvaH1vuFEubbMaPKWmqEz16rZCrK7EMm32vR4zwLMw"
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
