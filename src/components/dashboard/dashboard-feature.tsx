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
    "3P5fTjqbVUy6gqvzPaZ4UNSfVYY3tzZBH3Tjt7cASgbZWHcT2WCoHssgGd6oStWDBuSYoQUBHEQByMAHQEL6A6CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SPXLf3ZPiUdwoST6i5UmzSLgcdT3kxRdv5sT2rA7bwm3W3iudNz8yft7nVa9aGtAYdQoYejmxsshXm3jN4sXQg5",
  "key1": "5HgvFDuC9hAUbUwf5mLhsD4KQkg8jiJFFmucxQwfW2AC8ERsXthUz3mz51fa1xnVJXd4d6B7smfr9EXohfBYpuLp",
  "key2": "4unFe7dF1XhNhZCmEFSdbvWb4Bdi9yxmGeptzkNmZA2bHPemyGRWe88m1UdVEeXPgCriAkJAepzmeGjQxUEtJgMq",
  "key3": "2xvnyj1dD4qwoSYYKjfedEYjzbDeLrgDvTry5CKMakDG249Svc8a8QGecESHutuCjAmfB9VmTyC46qDZ4xdLA2E2",
  "key4": "4nMwVgpFy6yUV3yyBp6XQQCpavBMp6ZMRUZP1Lefy6zhJ23GkvaSQpAvUWpHN1kJyugDUv4XZX5mk1tSYs1Y48rg",
  "key5": "38QWuhJ6ku6wYvi5y8efPZojqsXTMTDPSr4yThRkAAePZEQTxu3XpPoGWtBdamkVqQKgbYhTdWNrnVr5MAnsyoNS",
  "key6": "4V1hj1g8HxLz2fwdWbPkQYvLWdKfzejBEFjXrNHqKqYxkRZZs1uFpswTn8wVkqEWV6iEBMyYfb6KHe3iAZGwLHAq",
  "key7": "x22KcrbLHyiE7gqTHBJhx1Do4impmjSSPU4HCm2J88Xm6EXgX7cCpCnFUrgAbmzvrDWeC4bsXkbDujZthXFAwjR",
  "key8": "58aHyZVWVNExcDizZnThAjmUUR6yfnQQe9aUQBENBHaGMMaJdorhbjVDMdeNHuxTC36hJL7zv81Cz2GLDoekfTfN",
  "key9": "66kU3hFARPo532Emg8DCBCmbZH9jphKioyUvjyEJmwLY9EbbYBdpqSRR4ZFeGbKfN6BYaeKGgBDfy9NY9pBELJJp",
  "key10": "3QFKjYzBV8YfC4ngJKUb3KPo6UZ1NXiYcH7HzBBvN1mxsBQyZxQkZzcThSqFWgcoE135MeDxCoeKaBNX7F8iujGB",
  "key11": "LZmzWjeutprNxUYkS6h8YBJEpTaVTfz3b5KaHJx7ewTEky23arkidAoudKe6jHL2zRAd6u3Wr43Gf4GY8AQHUwk",
  "key12": "3jHruURq2jEP33tw5N8ua2aCHZvmksVKokydD5N4AvVaKXqQj6VRhVHzh9xn25m8VeQh4ezTuWYwQ2mSiuhDksgy",
  "key13": "4atkLsuZYJcuK6FLEqYTqVbafNcbzqE5uYFEo2PgmjW7nD7gsNnXzgAj8sVha5haTzQ1F7JsgvY6UG1TB3ihuiPW",
  "key14": "gkr4D9vngqLfcbQMgNdjXUm3w28aKDYEq7zKFYWfPWTi7hVb9PJSD7h11MLRiMauQNGkuY4L32doYF671giEXtJ",
  "key15": "2xx8whuDa2n8f5QzeeSaRQqjoL93fh8ns1y3fenQ9RF81yVFTzUEc7CPhKnv4JXTjNEP5q3z4yxeofhHnmu2nVpn",
  "key16": "xCTbghZbEjFmrrGmjRV73DaQ1CaCBMGYVccapnhJ3WZvAyi9mfGXj9dnCmWAxf5Ppm82krb9uPCqPwLoqjB3L6v",
  "key17": "4ShZzFvxK4baRwZbHKnhyqddpPGFrnqfJeZmj7kugC4AriZR4PZt7fYpk5StAtE8k89JpsAhwvmHy7xrdF3Su4cW",
  "key18": "2BJD6gfjuFLh9HsAGm8nsEfXt4H1yPwMxB841xD5YQ73gv1ftz6438PgMMPbPFgjwRquTBfMucB41dJL3G7xj7Rk",
  "key19": "3aditTmMYYNJ2zx6se5MVNcjPypYksra9dxoSzYw7goAvKgmmcLAQkD1bLKS1mmfuy3CeRg7Wfp9Wend8gtvrByy",
  "key20": "2nbzphmxetr13xvXYaR8UohTaTa1Yt3U3jijUaLzFGHyVrR5NFnBqbgEGrWKVJmnvrBGxJF77XZxyVcdL3nTXNA9",
  "key21": "5zoLTixyQkkhVLbr529JFtPTunRBmYe2NwtGtY9noeYRp7JSnfB9hvZ4QAKMisJqk4rMryA8yhmkxJxy6rsCSwvv",
  "key22": "2YgHG6uJQXWLkdVCEQCbUFLj2bLvkt541bsXXEQgqNnKCRQgctfKnqeBvnVFmD4p4arThoev6ktEto8WvAjU6a21",
  "key23": "3DBepLA4sAFfnmPnz7PoLFSJYe2xCcucCB1ZscknJLxchi9FNptWg8kMxAqdLQwMeT8HSvt24p2ZJxLiDbcN6SrR",
  "key24": "5q83HDvRzhnoBCZ5Spvbdp7YGPJmfhQM4XrZRCyxooX6jy2gBAg1WUMBCSGgxHfkg7ukCtQfkdu3AFwJNJqfaGAs",
  "key25": "3GPCwY1EVU8Mf3n4jkw7gfkAMWXDbCK9r92MfAQgYC7Y5Z536AYaSB5Jv6fhDw5uJteVaL8cMXeghE5aYywfvNSJ",
  "key26": "5WpffM11immF6mPniJdmMRTuxUJUcjtMZf7vU4FnzyCWY74EK7f8psshQLoEcwqbJJjbg1KgHurTjLLR2VeDJtrr",
  "key27": "2oPGGwjWHt2zXarkNP5tpTrgocc5Ubc8qZXSSPqRmeuFD4cMWFadjyM3xD1gs1cyMP8Pvd9WnRH5t4nAQFAWQPXE",
  "key28": "243aV9dsNhurX4sJ6GNhUjuiyjhasYkiDtpy6vLKyKsBwkxHvi92hcsbtqsDTEYGWR68H6oCwU64Ec5k5bSNH845",
  "key29": "4YVruRq6HBVHa7KhrSi6iCUxKg6ciUSTbT9FetbL4Wo26HwMbVLwL65U6NxbvXxVsjDg5P9LKFdksDnQSLmJy7N7",
  "key30": "5FeMuRy4vFdViSKXngUiuhnnwrfuAcaKyj9NNy5n2iVi5vZEF8Eza8uP2JT7TYUvhqUE451aVSYbC7yjdpX6Uu6e",
  "key31": "qE6KHqycJK8vcJWfQouq9wyo9DtdAt2ftiBYbxkcxdJiBBb41LrNaJrTH5bhcomc3NveNymksCVXNVZh3hYM55k",
  "key32": "5f3F3PYUDwD7oVcH8TGfWSpM2cShcHG7MWhknGTnCYEWeZseecEJivh3Tw1YXEorgqo4VxXSZis6CThMtsz35QH7"
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
