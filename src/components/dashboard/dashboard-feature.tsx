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
    "4Mcv5AFU1Ve3GbJYc81h8BKdMkUCjL5NRYaymVzLt3oi8mxfHQC9hpYMdHnve1GT9i8wLEyiSYEFRUyZMa4mVk5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jLWkbXi9EUrTv8dzUBNm8wiFGeHkQQpANJta7724akBA934DXT7cC8u5kc95Y89ytkf9nHgTJKxe2BonBqs85G1",
  "key1": "4beuwq7QEJtzLMmAU4ACT2Y6hkPoMwk4NfRP8BBGW9FnHLTykKFdaC4nTZ8PL1he3fCNjM9au3pnifS5SjkeNs9C",
  "key2": "5UkawaeU52cfANW7ng8krvDwUezuoAxpJKscPBj5Dv4yMy4SE7wuXqzof6bc9gifS7wHuPXzFx7dKXZHWAtJUxkM",
  "key3": "594cha87pQXo6PrPm5gvP6iFQeAUoaHJnqz64TtPB3DpgodPwAtczjETCX9qUz9uTS75XGjPx84xKuvXwUHmdko2",
  "key4": "5vfqd5Yv6FMoe7xheA6joxX3XvqfdpoShk8yLiF8xMPGSox9BdPTkLZMKMqUMJMubVAXgUq3QVof9ikQc85XyucB",
  "key5": "863EFSwDQhCZDAKNPUAJvTBtGgJxVqKNEFd1mBBjfDmcjvdVdCpTmJ5rqGjo8LbfHNPpXiCdzEmrEL1gmkMRGxe",
  "key6": "4hJz7ra1Sv66EoqPcTP79Ag8nEkWw9MGKgbp6voURzBgKbA8qLzN5s1oT5aHDaNjqiz5DYnYrkwMSjQgZxC2rvvF",
  "key7": "ThR1cg63evJqczUWXzZ7nmTc8Ekn3qMeDuazenMCmrJxmZJRUFdF3N9qodNTqzTahbasUwxw7M1ggsVGuxFEeWd",
  "key8": "36VAPgS8g3wkQfL9SuWYxW2tPbzENeaozkD1C39Apgx1jqtaCH5s4XAYrJYxvwoF51Smk9VBijUY83C52CUFaXoh",
  "key9": "4gfMvXSciBkNaqp52acrLM6RM7ewgZZsAyPaf7m4coGH5sh6K7kP6RDj7T5QSmiUeiK2GHRbfzjboGvfkRUfr5mD",
  "key10": "3DojKtFFQMpGp8zh13xDBKpnW1rsRZrXG81V5C8waKfExQzZ1GX3zyJa9ZbHeXkytbuWcLaMYqNzRM7tEbHgDSiJ",
  "key11": "2dtxnPQEbaZWzswJLYut76sRqssBNnecbrQuVBerjhMwBs83fTHfybPYwk9TYNro6jLRRYCdg7b9crYPUaDELKCe",
  "key12": "5w5BVMed5jqo273gB3vcQgT8EdjYkjoGb4qrXKwxq1JWDidwy7hoK4fhv57LWU5pWHXYMqvJjAsKdF2EXn7xsabZ",
  "key13": "4Zo7D4ViZw1EHU4HGR3qB2jJQCsCEG35wyPY6FFTXcbMk9Mj5DVZYxLA8Sz65A19q1x6jVWufeRFf34sq8JJhPf5",
  "key14": "5wuDATHJ9UhWsu42CWEmvc8WqGoJHnkxh5JJ1TJaHRoeLLQJqKopBwQExTDZXBCgMVFuT8nuTaUroPMNhkuAMCBk",
  "key15": "5KFYnmyNcRzbbWtxfZ1mTPdBZ5m4RSsQz8PgDZreUUkjpniCzjbXwuFJLzyo15KN26q6vj9svFzgV3wR6HmVhpNo",
  "key16": "3Ha6Z8BMgD7Fhch5NFAEDYxAQ3ZoJdFgzv21JSYKSebhCB8ZbFaLxhN41KQ4vHkbQBCnvdJtFB1FwQTEPeXxJ1rQ",
  "key17": "ZCc5iAHDT5M1SLK1h21DmxS9gwBif46mfUyqMUqdyTVSNWbeuSfuogW9GAs8mBndH41qMDZS6P81ZAab2RSwfFC",
  "key18": "287MqQcYDGUuV7LkcxCNMeSpVVNasghuSByk1QHU8umtg2HFNgTUUqiCtzhmwFQZM49YUSKPF4HVVTFSaLsCRYM8",
  "key19": "2qEMz1K5PaUpb9oAT6Z9DKeED3HipwAx2mafWBc4u1LZXbxhMY3vf5tHaxnWNCnbStKg6dV9kLFewQm3CnhyXWN6",
  "key20": "5WqPFxK8dwov1cZmzUtyf5YXya6wHaA4MH4t1Hk3WpS1P4HndN14opGpvz11xZgBeTqXqJutGk7TYoTgQD3ZTH4g",
  "key21": "2xxTW5Ma2MS4myr8it2yUGm844QbfSrpgunDe6JN3oPFzYZvmKwsVkuANrwW1CfePFFiYGJDVBKdkkwRTCJMe94r",
  "key22": "4T7bu2ggySRYYKFLiWuupSdkuNyQNzvdjKhf6vdjTjBnMfN692SNdb8X41wFZLqntJJQVjd6VNT8bUN5pBYBN2k8",
  "key23": "4Jx38iJgEwpL5oSHwEkQ2Mk724diTn7mgd4MSaMXZpCGBjxDM9e8ns6fKJ43e8JQfAH8wdH2dC1H7Em6tEdLL26",
  "key24": "56ZBrxodWiGCNroBx2QPJP25HKM97xi7Q2QJRjGC9iGxyc1cKnJq82b8qMRB72jBde3nqMqkW3P9qt26q1P3WJmU",
  "key25": "4g8oFgYvJ6TcHDHCvP3xx3k9HCzKUZV9MgeJ3hTp9Sw2xhRH68XLwiUpdLdrNWe9c4NvgYxb5cZhKYBoGnFKDWKg",
  "key26": "36xd4c2kdmgmMdwdU53Mkf19bc1JEs6jnugeKqDeXUGFPxzBJZon9dz4Ga9xXdU8UFeQxKv6NpVx6jwW7Y5GTmA5",
  "key27": "5i7Miytjk66bP1yDREQSwhMv8eLpBeTeXadcHj6hcJm9GF2zECra58FtLqGawHZ5AWULpCGun3AdbWWh8f3hm61E",
  "key28": "4AShUshhKznMzUFK273Lr4W6W8hsL4uPVx3k25Zg1g3WAnBzKM9bTVn6YBZr6WXMh8wvKxK96fDTViCXpmQeg5t1",
  "key29": "31XvhHtnrWGB1wgwYWpMF4uZjn2xMAKkSTktZK8JztbsxSA8tYPmTwSaxGeCVszeqHeth4MXekJEDegoKpYJcqHM",
  "key30": "4tn9LQUep11DYCU5BC7n8CjJVXSNRmc1rGki2k6JRKjvSQpBAjUUpJqf3JtXBzjVYzRM8V8Yo7u8WHE6epS7Xbvz",
  "key31": "2tnFZUnG45Pso6qzNswErdjBhudNc1aHpfAzadRvJv9JYhCfYZxchRinCjYtDu1mgMDFcu85DxK5QfRrjGDuWUTD"
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
