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
    "5ssQp6BqhEBtCRqr14Nkkb9BcuugwG4UtXZ2sQrb8WAYARLW4ZMFcAHazpiWxkEq1TExCHL9eLyunM9P5RvFEMAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPdJU68YhENw6McL9u6QwdjbovkChgrZ9Sm67Ua1wsW3xBu7qLY22e6pXDKG844AfvWypDL779aEFP79YrHj96r",
  "key1": "35fFgFPPoi17o57xHHb4gop9kgWficQBpE9cHFWgBY13cZJ9DBWZNWLPmN69qoDmEide58T6mWaLVWP9Z2KQY9B2",
  "key2": "5W8S5fSLcB2cL94V9RWqen3tDMuJVApev4zeotrHWLibgC7qSAY3NDRtYBRSvw36EJnERm2KVB4M4tNootaxfyz5",
  "key3": "Ymf4hoBKNLTXcRySv5BW8HVARraF2XhsXn7KH2mU58m9dZ8QWHkHDdSMCUgEh4EpKuYe9woe7NuMCkRvXsnZUY7",
  "key4": "2yCVD7DTBdQ8L9MyaowB1K2gKYEyNjB5Q6rkXtVePYZ3mjUoCUmTzLBpUsWXKa3gats7ZSBm4D4cNong1qRfmYkq",
  "key5": "5XxsmHvD3tUr4h6fJtDQyoi54a1z18GmSu8s1xCNEM13bNxoSwMhtvR4be4uAJiACr1ZUqKR3nZyFLZK3sGm1b4M",
  "key6": "Wj9zgN7CBT4hMbjuJPc5JKnZwVCvrW3tvBu4dbvMio5yzCg1N86AXUtwgSq32khe2vg5PveLZbCLsyVtrumrTms",
  "key7": "fwH4ppGgToo7LTZF4YcgHrUC2uQjZ8QEExoky4cKDwrLhbQ7v8vxM3yd3Q6XBsX2szBzo19PegtQSBC1JcDa2PC",
  "key8": "35cvPND2teGrGHVUXvWHrMbrbKwXvTTitKz1D3P6qnUoVyF29xzeBESB36Xyg4P3QH3TPY4SSsayZmJE84C8N6Ry",
  "key9": "5zMvpTeanG3NkpKcTTyXVRL4m6JTtb6LsdVXPavAKyfuNUrwpu9GfF1NqKw5tqb8JwWiagx1CPjZ3J2bSY1oQhwq",
  "key10": "5CVdyJ8jZni8kRkaau2vaa4emQJ2Xqaxuzz1Dh8YyJeD2wyn6Wo3Zo7ThJZuQS7dZo497XDD4aJm8YUWk66udozN",
  "key11": "2eRP4X6Tpmw7UDGe5Bk9JdK6rLWxJrPZRrpZBTa28jLdmmCmdr6AhjKjCs8RRbmpNyduKZNTS7n95Q8hx1Ew7KyQ",
  "key12": "37wiFZka27YG7fE4NyrgH6p8HbhtA7j9zona3DjyeA4K8cURTXEvzVsSNw2uSgqqkp3TuuqixWyTzV9FYVLe5a1r",
  "key13": "2iHBrjY6LLbwEfjT1gsuWsUZCYNZzhXTTepj71uC78STqt1jFoJJosrpLz3d2NrZNX5k4nFw7Gv8QeHUm884kPuF",
  "key14": "fbkZZf1JrxyB53uEun67hQGd6UnkP89TZf9tRa6rw2axJwDGAur9qwDWvKUGSiC6KxUB7jpB5Cjp9xX5UrkA1qk",
  "key15": "3AUVXvTEXSjoN9Q34ybntFaS5XWCUrtiq4aSBz7cK7XNfAguaXM7YzByVp9zCvWhRYLUM2n6SGCwCxmuTtjQ3LsB",
  "key16": "8SYaezoUcdTsD7xQJcMmcrLDJo2K4TKVB5DDTreSTPVjbBBfBos6kZjGSLqFSv8jyztp9ZQQaTmyjt54wYN7fWE",
  "key17": "3pqUw1f1k7uHtYUKUKgPh5uMgQr6mY2Kf1fwpj8RedR8HMjejFUAeeWCHVpe7YBy7EpbCL2Jq8KkRhrzzC3SwNsr",
  "key18": "aqPD2AvXP9XpXBA3uaQ3MpU6kz8xn9m1V7L8BTTnxgxZ3W1kruMrAWXRaDwksypm3zTRq29vRa1V3JoXWta27rB",
  "key19": "4d34b7Gfv844KKw73PavmqTKqAoZRAZgAHuPuRahFv9ph2wpUrCsVD8VcF2n95W4xcpYc8As817Aa3sojHxAdkYZ",
  "key20": "5514ZfTmjThaKfrP5REQu21ZfTcHPqumKevv9yc3jeXVDEZGqAEzpet3xWyJ6QWhCeL4vuaEFgAEY2rtjQ86sCRD",
  "key21": "RVEwQiVwqSDm4FVKiV1hmCoSr8Dgugsu4Yq62Qrskin7S4aF6LoBkoSyHZuJ9UuczqcX9ZmW4LD4cjZ2KBmKCJN",
  "key22": "3cbtC6j3eQ5AmV2HmaubKKUD9oikn8vkdN6X1uq2QqLNh5a2xBtAC5ZKG1Ras9igTVUa8koTjnNdEAZyA2AuCDSG",
  "key23": "29jyPWHhkqokKZRBre3Zu2T3N4Y3ARSkYQwQRWkhESELD2cFBQCKDTrdtCoTgpNNzUVDq8qrtnu6spVwXe4saMm5",
  "key24": "2UEXqmqsGxTbyaf2a7qNpRVSpQoNTop7Et3baxaC8REWaSGUqZemdt2Qbicg3c2VStfBzVBtMTmsnkXDP35BGFor",
  "key25": "5dawj5J6ZFfXJn9X9fYPM17hUGFqeg8kfLMyUx4MKcJ1Wuct7vnMgeQDBhG7VkJhGNgHgXj8mtth8mHi14hD7Hhg",
  "key26": "4pk3aUcgP4GbFrrKowzPqTSYeojLgZEJw8onoPP4t8CM4gocu4KmaG1KPkBMnq4urTRSSK7RJdkMYQQm7HQT1iRg",
  "key27": "5vfrHC4ztHPXssvc5BmngtLQbu6Y7zRJEd7fJknqWKzY4GxffWPb3mgLzxHDPgcj9TWJkGoQpBAMUnWQWtTobfNw",
  "key28": "4FTvHKkcR2iTcoRxNvsJ6B7GzvHUd78XLbAaXwYcRwHQJJiDs2CJyZeYzYtpuQ35UnxnmVP7dVPBcseBzGoJcbgS",
  "key29": "31Q23krLuoWaePxfUREJgoW4JJgBSj1MRbqPJnS7PrVT3FqFC1qWpaCpf9NnDAAR78WG7j5kPdCjeR6T3kVLFRfm",
  "key30": "2aRqrC7v8NFogpeWACFdmewpDTLqgCzf5jgdP8uMZt3FBWX8ugyJf3D7HED4wrfqEkbLSiFefLE9ugjgsJUsNgKJ",
  "key31": "66cJCuJCgM4SZLhpzJJXmwSfo3bF6qs3CMjtbb3CuFS4wdY77fCpFP1JGuoXTUwj8QNnUQBHWRYZArGXbhWFzbv6",
  "key32": "5Bu4cAuF2cbegfJ5HTSDAkAsUwWrAWYvPXHsmzcooS8Ugsnc8fQn9YM54pAMxSH3z4ZaeXxUqbUKMfbzkgYYUJKo",
  "key33": "A2ohGejDuJXnM2nVrjZMbAzzGGXctwPtuvoiyRcZz9Fdu2vWjBVyRe2mpyND3mgj1dW77WW6yE4vTU9r2BVUgnX",
  "key34": "3uwTxQfBSd9UFNPiwdsiJ2KUpeHdxe1QXzFW5k4TwYKPJx2xpugTx5vyqiXRbZ89NQ5dikGNQatfsbinJoA3mNMd",
  "key35": "56GodqkGp9Q38N6unhpqUgBVcAKPG3D92YKsEt82okuwxuYaH5bBmf9abcnpqFeqY2B8rfu9Q2uNucroJrK1wHBN",
  "key36": "HLMaNR6LZpLPh2nnirLkiykbBJxhkjTJyaymxa1wjynJQJgkntnEUgB4KQy3r36VVxnmVKizoS8mVE1HTRjSNLr",
  "key37": "5pfFm876Qd2MQMSKAdJ1dwSV4LaxHRoJdbVDUjBunVPvzgGvEHm3NLcmDN4aCWDBrc9Lkbjy2DqDv8J9BgKot5Z4",
  "key38": "4iPPFc6AEXgBwtQumNXU2CAYRCdUsQkXuVJJVAwJUMG76Qn7a9M7ZLjYpZxCY8RXmWwfQHqFMd7XM3dXHfW6BZzc",
  "key39": "3yqyFgT7P3TcQxUR3brAnFv56Ppys8SjcC1TPrqAYTj7SnqFEAZzCwzN5UoZR7anDFsRvwBjVbN7jrjssJTWjXo2"
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
