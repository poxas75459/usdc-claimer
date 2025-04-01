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
    "3Ed8eRKiXpDRqDPtRyZotwNAgDvupNtqVQKvcektRVCSCWFwacaQZGjjoBNdeCBwkm5NrKx8pSzwbzvCPLUMSWcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rC51w5MUczpKckv4FmMLcLXuJsn4YjaD3sr2T9yfmqQD32monYRfZrEpkomLNbMBq1YovQ1LvhhVHV8wigjpvdg",
  "key1": "Y5pY7fisJWUyX8qxrA9ACB9BeLLtG9pny7mjDiLnaV4ytKTfK7WB8UAtXeqSe6MWLs2Umgwe5dfgmRkkpWSQAzs",
  "key2": "2geE3TZudejT3tq5EXk48sYSB96MMdgpk2xuiwngj1DnjQts3mAcoBhckSh4DoD8KyQUdyaXLYVWKLE9s14p6tpi",
  "key3": "cjxzf9oh3VLav2qt2xuExpCt5SvwzBp11oe1Tj6udQUKmRMWMdKt6uNxc6CEVjVqVcNa84VXxUKdQ3WFN6CtBcJ",
  "key4": "31pQ2EZd3k1MnX6deAXRFcPH1SDZ6zLvYCutR8PadHVxcWZhKQAzA5pJuS3uwthx3Mr3uB2uyheiFgyvBL7ZJFdK",
  "key5": "2RRtmuABTVB7CwVuYDW5bsUVDHhTjSKgjghHQqdNhRWEmYTCKmot6B1QZp47b8oeJ9bieqPKv5D8atjtFuGcTimB",
  "key6": "5GVzd7RWYbawQKH43gHV5noWtybLxZWkz4aUSxdtatAvxsv6aX3mPwvZG1w2HmrjYALd5Ls7LBbKqsugfwG7GVLQ",
  "key7": "5LvFVft9WCRkTv7DsBaYXYiUZobPUWW3tfbwgiW5xd3q2gS4y3y7gbWGjWqNMNNPUS7szsYoPdk6HxDfLbdgArAQ",
  "key8": "3p29nshYc5wMKKPr33EkLNJpKMsnfP86ToF5Yn2PysTeGYtcLHJmuH69WJUTLcn8ntP5dxrWZ5AvjpUTm74JrkAR",
  "key9": "3ja6GFpasoSH285MgwRJVVcm48piEWZDSuLMjeq1jrGhkfTcwBhGzLrhR8cMXbiXbZDqwy3QUrhED1nPSiRuMZQ3",
  "key10": "3Z1xtNY8trfGr7rBmsoc4PH3MazWFtUZBdkcoAzVgFFgXgRiM3hZnpFuLhe5LyLGKzPFkgk2R9LQTrnwNrpxUg5w",
  "key11": "tUx3TNEwcSMv5mfgHGGLBfMves8BzCn5jaXz5NfGyVA1YbMUVFxRqDtk92rgm8M6SnhxqHvDBLn5wvcEJTHjjgJ",
  "key12": "3LqoEgUqSa39yjB8ZxUaaH3QmeP1nDJXrQnFCnokDwfBmug9bKmWJmrUtqTwB1dArztmkhzpZvk1fDnFRV6qP14y",
  "key13": "62xiBbY6ppzUtJD99EEUaiKFDdo6uue9Pr95WxsfpUo2nXxn4JqD8HaudFNz1B4p9CgHrn8D8NBxmyGEegvFBdyX",
  "key14": "577eY9n9Cf9jtQcLa9PfXCtGRwfGVumKu4wVErYE8tuAq1z35B3ZQr93bzcyqdJ3DjVTABTYEirSrLEmkfxuxvXD",
  "key15": "5BMewoqS7yhd3U4AFYcHpGP146NnEKmbFzBKJxUGqS1TaAQ4UwScTQdYmSnfJ6ckE4F2qpnuDoVQ6szV5VsCMYqh",
  "key16": "4eVnjojBdkHrZQerh4ti1QXUp1QbKb6yXRqSUd7P1Mruxyadj2KHJoCQ3WnGNM9TR1DcfUM7uZKLEtcxqY3WRnsd",
  "key17": "3SKSpsNsBWhYYLD9BM7Jq94wFciFqAu3miQ69TBtPb8vJQ3cyM1rDWVuVEXvAqEusRNnpae8k5mQxxfvNCxZvfGA",
  "key18": "5J834ptNqudYZoS1ZHkR7iV8RNYqk8jwQ1rrWj7PEZSckWYdu6wyufUd1Djdditnm4QLtqPxbYhgSbPJ63kK534V",
  "key19": "2A9ssfhq8TFLNP9wGkGbBRfWrXRTBSsfXdsR6Fnscev4ByVDr5d6p1LKam6wCV8KV26wgmGM3i2UK7FT5T8LGA6N",
  "key20": "5mXTu37S6rAeF8keQD7WDbLq7x4PMGJrfr1Dtth5yCF7HUg6P2LWbEEdXZh5h1TM2YTG72isJdTzUob2qz82qHQH",
  "key21": "5RLh9nHMRbcxBHsyBYjVcms68esVYe1KsBtWcPs3sZHLfx391YsWuv6T9GjctyT3G418ZWMvWZu1LQF6wzow2c3H",
  "key22": "cES8yDXK7AbXpgGAeEuQzNYDg1GqT7NdaUvJEggsXEWy1TiRWVZ5qe2UhNGRc6DodF9ovbfJFYMGtHyncjsm1po",
  "key23": "5zdQhDX44M6J5mg95ZyphzYBepJmc1m1mgvfm67gsedPS43Zj3HGRDNzU1unaRQ5kpeSqMMpLnntUHFuL6idw4HK",
  "key24": "4ZrEdYvHh41F7a8Ghcq2AGPTWwiXSXhfcobwCdxazDVFgENmVFNB8aUxQMhc9T4snM2BBPf3hHPt3NjLSZogN49P",
  "key25": "4WtcPZmfe6MuDtcUVe2id3EBQM5Jw2MyGmid4Thzs8AitbSRnKwZJELLjEMVq1BAiHmLmkQ319W1mZpWikNBa4FZ",
  "key26": "2jQsfhTjG2HBfdgZqTjnguCzo99M2jt9s8EfHfFkpaFVhRuWKR29b43hN5wv125YepQhSuCVdYbShQ7oWkdZunrg",
  "key27": "2rpMzEpCq6ixoFxqd99vNWzjGnPVrYB7Nqsr1oCjJ9PFwfP4t6TSwUs6vWLevLZkjXhD59sL6fNQeK5KETemTnzG",
  "key28": "4iT1r3VUT1bJhJEgChA5GQUDAf1FyPhgx3JePNXVWkwcohw2U5F9CAPSGrVsD6oh4TB54utiG5SeZ6gJYEQCPWHT",
  "key29": "22upqTM7vMPz1vH12cHWWNeLVF5n996mQib4uchBvttSm5vEYbgQgNWyJLsqSz7ZwswbmUh2x4S7Rj4FEtwfEkKx",
  "key30": "5pPULpgaUftGhmdQhWTehiNjoCdDTc4zThTU4FYq3FLNPA5t47kLhr2DjSUBbruBUmzQpNt3ANwhPL8Ei1WfQd53",
  "key31": "4MumrHggztSLin9BpBHbL2XgcbH2JRX1RNfQPacd7d3wiCzhTVJMDG7PYxXqYNrmZ8Mz5wzN8zUSPJm2KYvTgLN1",
  "key32": "4SWax6jYtUAuUH2ZNvU8sZv1ZduTSVUpanGQNUMZieYGcZ4PorH7wiXQfSW7ced2vYxi1aHNiCRHNAffZmNRUViX",
  "key33": "2BBK95NDHpAPEf28zPXJctf5z4Mzgif65DDTDCe7WonumkNbjL4fnp2GZ5WUt6j17EefWvuP3xSfETDkUKGnaEVk",
  "key34": "24W9Vn8MZfeSPWcBXeENmaXp7KjSKx1mnQRBL6rs646eV5UiKg3VQUq2FXtHLSDqTWCTEcxU5E3j142QktmXdJiY",
  "key35": "4b42KsH9ArEm4UePdFNUVicMcdYSzvh1yZzkESsSjGHaRPepwiba58foq61tkncQjvHpvJdbMgF5oL6wyn2V7uW6",
  "key36": "z5m3VeT1fTPDA3rZCUQfU4hbq31kzWuZREjmMcSuQ2ZNm34MtyKkfgyJdxKo3N379XPCkvb3jHYDFN8GaCTngA6",
  "key37": "22n91tdgkzjJxRKMA1ZEtT2gikYDb1p2n7rKcQrdont6wQ3TMjqFAef4eL4srjggmpy1xhZ6MqMbmFM3e2qBhNTy",
  "key38": "29m8SW9uABJ5ht4GNRFB5S5ggAskwQQoHvdY2iEntHbsXedNE3cfLcHu5nW22As4aN8dojbcRipbN7gCx9KW7McC",
  "key39": "2KbuaAMevcZsBb8aubFa1JrAZ15vTKLjr2Hf3pAtkbAq2GER88c17Avmh5KVVArxr5garj1TJT15STnV7YUEh3nN",
  "key40": "27VFjFcCtzX38yKPgnRozdfeNpNMzSM1m5HRF6fpTfGi39zW7QmATTYdtDAhGFfVkBLNKEh4imAXNmfGfxnL4pVz",
  "key41": "641r4hc83d3WCdnJeCPGCtvmsjzmenc5MKvyBpgQALKUrz2hsYxXQYkyUoqoPsW9ScmRNkrWJGRAcZT3qX1hzkcm",
  "key42": "5XJjTDjaq86BkucnjsiwPeHoYWCRjzcCidraAXh2gg1jy5sX4kH4XPvE29qFffLMfqr5S4YHGSLoBbQDaeNUBRNT",
  "key43": "53iwv75weZBzReT41HUbcJF6u5wMVVQZr5REVbRSFPpBoAwxbtSSb7JJpwDvvkHcyvFTEyHefLTi8BTRSVBwGSk6",
  "key44": "4BZbpqNnsCg4ztKeWo4iEk8fXm3LE6QqSLM5jo152UMXmrfVkdDGx26qdXUxYqS8Eqo91dNkfgjAjcqvY9PhRt29"
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
