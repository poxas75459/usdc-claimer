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
    "44HDCDc8TjV3wVDvmtqYZu4wL7LzurLooZwBvB3AkjbzycM6L2Ukz3uGJUy2MuPTvqbafgLutvWtrKxd8rjfMVmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w5ifK7Vi27dddLFEYSHs1yaEiaeuDMNHgtyfvtgyDgwXWVf6bUxuNogwLvB4PtTrYmXjYt8aMxJ7SVV2hbvjYSh",
  "key1": "3ozZgtvkdj8RBDGkbYbyJ3B3Jyz6U7hQvLVzGj1wu9SqULKW4ypAuLnYUU5PgyQRYRjrSFjiKKpY3xr95WWCHM9o",
  "key2": "4jcie9JEA1hfko4v2TC7xYNXQe4bXWk89LG4nt5fVRVZpxja7ZJNsxEhuuy9p6kzLbG5MWYS1yA9s4xCA6sVJK73",
  "key3": "vwynMyXJDnDZQMWRqmwA538b6v1BS82vxcNK5HBse66K9QvDoGhxu6v7WF3efkj4kbVUCeAAa7a8EugP3ms35QS",
  "key4": "52eJsdu1wiHpw3X91ynPtW1UA6RgsGGxKR6wN2rC5JuChVLzNs2q3gBQBq43Xi5MW2o299rBjMpj6CbZvS1QXhy4",
  "key5": "357YbF5kCNXje5sYNJj4kK96RjixbgzTuVoYGEPMwRbgKy4n6DgBHQKkEnHBpu2LBqXfaB4QTqgAj1QYoZdsyLc5",
  "key6": "5KYtNftSJnSuaVrkXMbFyf1WaXFviiMWHKJGuDzCXwbJMXcmdBvfNAARiaqV5vtxPVz77Crf38gWq8d6ERyWMhZz",
  "key7": "2ED5Kt3nZXwNWh4UqJAnmiHGtFgbSokitDtYGKGHZ93d4MSDcKhwkiJEn7D4afFG3gaLTWCdsh2YK5jrNZw5FTJ7",
  "key8": "4Lr1FNo59SFqUCCcUv25rouSeWysAVZZPSVBxnMsfF4zkuV5kb1rPaBaxhSKSBtDVoxFN6DAKMU5BPCGcZVJ4qgE",
  "key9": "5wH3ZNVthpmFmKuMjxiFVg9P71CoCT8gUoavKRhAgHQaLccMTXWdizv2nnhX13ACFUvSmDYmL5cNo9FymCmzMQ4t",
  "key10": "2SuiwvZtwBe9QCrTsdNdZWmkG82HnXGuR73ZrmdVy5WhRNf2QiWAdK5zVzac26WbB7LSnqUMFcWwqRjvD8AZYJ5C",
  "key11": "5qVeVgbdQmN8GxdHdinP7kevx9i7JpsLLgAsXkH2jH8y1vfuYRTo2WGjjLEK4c41HRfedi7gqFtj8A9v4KuZaVz4",
  "key12": "3aYLzU1RKUeupJhDm7Xnc3F4ae9BRiWYjQ4b8YR3ntaBZQTh5MsmYTYJrQwqsynBMCq767oVFTHBYzDadrgCum2T",
  "key13": "5D39SugmLj4HE8jUtCnozGuGoapE9NLfsypbXEvbPRtU2MdrMKaqnfrbQP9BcxNXuEZPtMdME8ZEPyYaakNCQLcj",
  "key14": "6FsGgd2Rfsa33vVRAjx5isMvxyzNmVMBSCBXbGo8kz77Sg3nkzNJBTDp3gbrUoMKQBG2W8BRLK8KqgmevQyeckb",
  "key15": "2PqiHWVq3vMhUVXmZPmv1jiqqighmZiEoKpJkDv1E7aALH9qSE9nBYcxjZMJTPMoT2E2ubb6BWnTF3hbeWA2R2gu",
  "key16": "2JsCriaDGcM5ZxMEBKZxrM6zbhKE1hNKwjCxbcmr3on3PjhmBuE9H3xvzsPX1iizBFZEayHoXC3jPkYxojMdCixF",
  "key17": "5WDzS1ubpbh5dxbFPHEKmM3VKfBHUesHkBSra4kZ6Pp9xMhzZpRi2vgYbuumPVvPgW3uPUV19NLf8yWjhazvo1kc",
  "key18": "5SR1WjsNWWKQy3dHTdXZMyNCXH1V1gVnXJFuf2nG8aAsWqUUXwwFSno3UaHf9jJcEEgW27aWGV1C8UKrPSkGUhB1",
  "key19": "5sdDhRZ6yZCFb1BDy5h1TNLUWz9Mbk6MrA4Kqoi1iVNHLYDtvMTy1vzFcVhoJinjdGBDkLdAJkcUXMR9ihzudRUW",
  "key20": "JZ9LQYeinr8tUArXuyRhDHBcACbby51nYCjfh4BvdyuX7h6cjd3qQZWKLjxDwWBEhsKa3RMiUnBFbakwhPuvQUH",
  "key21": "3wwtmyXuUke1HBcvDmJkyvgr3FMwQgFmnqw98gVyFVJ8ReSqZ9mpTC5LVQy5vSgnH9CxvE5awNDBwnXf3BDqabTv",
  "key22": "4Rb7j5B4iJW8c6nopt5QwxZEZnwFeastqrxjyV2hampjpy4FRmNuFXEEkYqdmrxoNCmwYRjWjXDrmEqgZwqdgk73",
  "key23": "273AtWv4TTDLZHmktshiAiG1h9HVGFNynnVjpCDvm1TDKgKuGqZ8oj6XWyvxDnnCJzr6r9xYYLFE6NmaKmBDw2HL",
  "key24": "irBuLGY241QLacqirD4BPiJx23tcKKqYrhmh9UcRPHBKHXAQvjhoCvK3rDDfTd46MgbPd7dnzEMGiTtXuG6w1zo",
  "key25": "Z23TdmeQyvq8RmY9n5q7J8oyEQxzfPP7ELijzV3f5m6Ez9oSS3Bxd5raq8ebEAi6Fcacv64J3LRrwow8qmaL26W",
  "key26": "2ng6pLzy9gDCMc48rWF3Kny73jfok1hKv3Q9a8wy4Vrz3YgKWXESXSzWUqDL6Cu52dipshpZeQkHmDu5T7MCT2Nr",
  "key27": "5aHdiSUF5Gf2yx92Yvw4RnXqkY6WoNoG1NenzPqmbpsQ1VhrTNZtBn6UZYQd8Qq466k3dCMzRbcF9XL9JqGJmTWz",
  "key28": "5jEUatps4rMAj24kx9WyqKLqZjib8beKCDVah5Y32LoVdGJcMnEuM9JX7FzbHepqa26aBVe3kB7Boa5VFYVD3Poj",
  "key29": "z8o6UTZnSVazjQatRAYRsH8iTcA5QewhiarP129sp9uAiMTNSpMX6mLZL4hL5g6szECaN4tZfk1tc3A3a2WSCKg",
  "key30": "2sHLmTkTY9itAUaXtQ9hGQAzvD9kQJMEugko2RjkMMx4K36wVkKfN1cQSpEt7k9GXsfGmvRG5ZxqstBCXK1mNBmo",
  "key31": "2XnqJbH1pdpiXKkpiY5nuM1ZSCi6LqpwF9RVD3eVWHMftUdQz6YWcaAK9DdB9LaRjih2CPyG9XuhibQSjmkVWjpu",
  "key32": "2crGAQCPnqfMX2NAfLuCH9Et7iBAGW9BVDSxjRLorw7A6azQG5KxTj1Vq71F1dLDyfob4N3TXx9jDYQwsZSbpQf3",
  "key33": "5KiJfNJLyR7ZuBPBHsDTARPnD9mvzEaUDbzS7AiD8c19wb4JiF7ytZTUU91nCzhtbncfLphhnUw437SZBqguj7xV",
  "key34": "5fRx291oiH1ZTsxueA7DfWHadvXQY1nfFwsR75zKNqVmnHKt3dKQuLWCJo9kZ3vfPv837gXkDCyCsyzXwhV1hXEX",
  "key35": "3gXFx8sFqGLMM25fi7m7dQwUhS4C1ppjDo5CYW3zmPFHN8QMJPy27wjgwe9fACiiXvTeM8NMKCXjJKSmzJQNB91s",
  "key36": "2MgZRcZ5ghptt4sn2ddo7WiGEbpnAQXcSi47fzip8YaywH1KvDjjK1Qypn5paZvkbA8w6KqCAvAp5rANPSoFyUQ6",
  "key37": "3caxzivSFshtvcXJbqoacUvM2u4AnbNucmDkYmJRQhku82Eq8L86iyTz9HqX1xdqyHbNc3WriQyR7AX8A4PFahzo",
  "key38": "2xdiVkXLtX5fst6XedrhHi3Xyzp2AFxPYnzbA4yDwFBV8wk5BXcoSUqGMzHUqES7cWvrxPxFCrPgZfwXWf627bCb",
  "key39": "4WsBwNHicAHRLo9zNgsysbZihtEvZsmt1TTxim8dgQkv9AsMf8hoLVriHGw7DvPuf5Nz3BSdBock9jG3rN8K6yuN",
  "key40": "4EyJZ7QQBA1BoYvatxR6jQiqKpTNJfBjHaH8gkYeZRBqaijfHohmpcTgxskoqGy9zCkKNhoRGhz6ie49dd9BMhKJ"
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
