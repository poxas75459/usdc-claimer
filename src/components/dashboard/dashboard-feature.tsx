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
    "3VkZsSA8wSiotdUvRuH3Weo8MpYhs7R4EAqysQNHyBUt91ZMHTDjkCcpLTFrdgSqgoF6KchtYUhxE3Rw9SMLxWsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dbjrhMJE4W5vVh5GXkmXdCeDiYFtkiZ7fEFbte4BhWD51A6QTVoSp5CSBykTiscde5qF3qRSdw4Gd2UpxdHuo8J",
  "key1": "2kzW3JXmoKUB8X8Q8q4gMKAKXvrk6LVwEfvvZ1oCLJQyyG1vTAB3UrWEgKEubfV9GXUmqHVhxQ54d5P9zwgiRVqS",
  "key2": "4PaYHtyzqWqkePh6TbCgBLFqcdzUQESaVqe1zDKw6akc5rRYD1i5a2mBBfA7Jfq4kk4K4nX2nj729BBjxxf73DMS",
  "key3": "5ysgviKvQ3HjC24J99zYeUoqjGBw9bgzCzcSMjk2SXHBg4chSTRd9q3TNEyocF5nwnQJo43uo6eDNBXE4DVQSP79",
  "key4": "2UJZrVAbj7akSA3wD8w39GtUnZpatjku7BBA25Nm9SRQK1TJVV4h4q9VV6w2PhXaeudxHu8eDTfMjVjsjAC5zNbN",
  "key5": "5ky3rCPxY3Ydm495bz53jTawATq1Y9hyZqD39UALqDkPXVeSqoow3N1QnwAgp5ngBaqvKzejBdMMWwaj9NcEWzC9",
  "key6": "4FzTDRF3aB7K3DEFz9UkNcfgkZRPaNiuvkZm1XSrpoRwpfcQEeWwSyXjQtZAmGGmyDktTdYjVRPP5MRsCRfs9Wxe",
  "key7": "4XSKJ5y1T4bn2w4JbNhbA8jiCdoxa7etkTPVSSRyis1jTc5yG3wzdNiYXFkYpg6m7mMqmQtpnjFYeD3oiggBEdAn",
  "key8": "2LG13Ao4fqMx1P2EBHQCbWFvush1a13bZVxjSHhnNjqavKz1bkDfo9ChGmD2wLTRrC3fm8fqUkqx3yVMdWXuy2jB",
  "key9": "39GjKocjypYCTpQoF6dct3DoPKdNVH6QTKhXofdhtZsgPjszvgDgcAnkDHa2V7C71Jy9TiAukGsBrdzw8SGtjzqa",
  "key10": "frJZH7mFfh1afw99MdSdY8etuieqYViKnVdj4fBQhGFMM1pQKMriCpfN6DMLErssbYy9uL5pwNwc99VPA59tuzK",
  "key11": "2vtQRDuftVE9Ws5KCKm9wYZdHhoJX2UHrnQzL7oqNpE6BLrcPJihzRu5EGaurqnd233eAmuTWy7NCqYEwkuTCmN",
  "key12": "5XjzYGGCgVdohAHGJSEg1ADcyBCwWo93ub9z7KaCdsuggUeC6UJJiG6B4brd7HjHTN6SQz3122VEg4GmhrePPQr",
  "key13": "v85CJURD52vDbhMhyp1ZAbNeZudugez4dkST8WJqSySc22eDEByFn4uB2r36pfEgBixEXqGcHXZwPX2obnGsTcT",
  "key14": "4JSBGeGeqj2K57V7VBZZYezCMQ6iLjhAV8ZHCF6kGvUmpshNGXSfMGHz13LaUhiVx6sCcTnyfctAR6patnTNc7z5",
  "key15": "54W8Z1HVvqaVqqnFHnQgBkK2bB55wMK68cboTwuTZJ4JxmnAd2LpdqHfBxnccC1SdNaNoHitoUokDakCb1qy2ob6",
  "key16": "3bCv1kipRgp2BVMZwyc5UrReuW3Gat2MsWZ3E1iqhgAk4o35M6YtXVP2GfmACqGRt5HeE9Moi5saKjMv1QUa6j1t",
  "key17": "56N9U28PW869wAJ8FHA4ioudqXSDMF61Fmkc1ggqV7zcN3muGgZ79DcLR2RL8eQQenpkohFcCHoJSGxrpTsJxUoB",
  "key18": "46dsGJAcvSCYJ9XkKRetPE21pweDRDPQ7Y8JQ4UvuLoUsAu18P99gs19BxvoaQpen7yyxwUFQjzgmYej5s8hFGfF",
  "key19": "4dtDWzfTKHyc6uU4uag6AqE6AxzFaT9yZ3pXzZKeCwhmLzpPHTF4bkRtVupGMzhZDpTjVEBAmxsCLYuAMaGMgG34",
  "key20": "23mMhJfy3gmaUM3PkrZNPnchUqY9yRUYu47bGg4JK3CGutch3ZzkLyijTpzdw6qFSvF7vSpBzTQ39fiMQ9LgyojH",
  "key21": "5WZmsEJ4a8s4wcHzjHxo4E8vog67wFjZ6wHiRKo3H34XY9gPhvWytwxKvvQtz7Qa7BUzij2Bj7KQtDXtNnw8QheR",
  "key22": "4kfw5EzpQ8AwD8xyBZZF6pRpaPK8NKf5c7AQKvFFFxvvSbiLekGvPNRKuJJ7XQxNBXvjywz7GAoHQzc5w8S327sZ",
  "key23": "5txywHk75bCbDnm3yuEXwD21pAfKsXVL7rEfFE4fCgwZoaHsS7hPAwrf8FxRKtwiGHTT2u9Q2Dz2YjXuB7GjHGjy",
  "key24": "56rR9we6zTb9icRnY4ZHmDL3mhcY7UDmR1R9JVWb4wgEJmGYW6p4EXQygvFMJ2hX19jTDo5gU3pUWdSDRKsHpPYw",
  "key25": "3rwEshcFcPX4Wd9uVo6zpodWX9xQCgKVXMuAD2o6iQcD8imWTgsfmUQVsRdYXo12eukqrRjzvJkY1Zs98f8XKwgo",
  "key26": "2o8UHCpsFxkDi8SLyWzCerhRV2dy2UeoE9Ld36DAk6H852To6smfiQYTZ3eTWnWYkaAffWuWbSx44MDyA8rRrwXr",
  "key27": "3Z5j7U7uzNQ4ipvFUxn3pQV4ob6XXHJEp8TD6UJ8CRDX3siQfegG9tFUG1cAWzjQqVGwpgy8wqcfbYm7qXL5iRgS",
  "key28": "4q4jFGTgUdkTbm1VZZ8HJsKKij7jdF4EQkb5JXzhvHSi7ua7q7gwTPCpvvsUhEpWsksLEG4ZJ5tijDxpqLGCESiS",
  "key29": "5ayBFFoeAkwBRE7ZXAhjsbuMgY2HAdGp9DDGYfsppmSorrviGViKRp37xF7pTGiq2r4tePhfbaXRmLbRXBR3njac",
  "key30": "4F1nC8Ge8bDU2gkYLoJX8bvvRMpR5KtHnsBSCMoJgyfoaiMihqbLkrWiNnSVCeMxhzh7eQ7SJaQi39xvSP4psDqp",
  "key31": "5e8my15e34s3RXU1SFnt8aqd3hLxdTvsF1WdGpjRkdDPNv9wBtTBd5VqkLNqkSbegyczg5nq3njeGeCwC3dBnH94",
  "key32": "3sqcsG9BYTSE3EVXuiLhLTfjtqJziNm9zzWba4t7LGoQJNANkXp13N5NFcdXNhEuEz4oFEoQhWtQMrDMuePEWzkS",
  "key33": "FqruGqzA3Jaz7AhXQbcn2vNeEcjS71aVYcq465j6f7ftgfGtS6VkC5qL2oDURPae7fqmTGLb7T8QsxUg1QWBAZm"
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
