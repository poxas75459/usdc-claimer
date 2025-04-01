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
    "m7QmaYjzbXF5fJvuLmcUdGztq2Pjz9BqVMzZgbzojZkCBNtfHyXkWN7L36aoAG6a5vKGnMjRHVEg5iCRf1FuK1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KMoTfiHpw3tjXPmbRJrajvsFHUD4Fzc9WLcJ1FVTkk5Qrd5eXja1oEGbZ2LBbR2c6roKwqGyFY9CnXzy4wK5aMD",
  "key1": "5RaHg4ivMtmKuXVrYqP8dWnyNwxEFuN1Ym8kGzNkauWapYRQwgFCgd8JTUtz7xEwHqKXpmGZ8Nh1sB8cYHpbg7uq",
  "key2": "58J5LD9GDXpieMPVoRti9rQyDusww9B9RUDGR6LMeXB4oU1D8DBgqkMvZZfz1CrRzoF8M2puchwto6Sq12JmJrxw",
  "key3": "2yJ8CW8g53EJCALrNo1pEqPh57cJLFU9DJ77zUEiFx9fJoc3HzYzA63Gvf37zspjJJ3NGFuKWebBzWADiET16SrD",
  "key4": "5n17zbhxsy3nRn1rZyn45HjZNAeUSDJmAn2LmgFkDaxEL74MGqtZGkZfpWRqcQMLthg1fP4ED4oR2Byv9jRzuiH4",
  "key5": "3QMWw8yRGxY1VVZeTGtndZ7CrNPuoWWtpwkdsTFnjhJoYnyZWKAmhiRRoogqJjNUQxdP34earKMkRF9FSMFyxqzK",
  "key6": "63DVMDWuUv6WwqeV8wCiRyn7iTE6zYaubgiyJjs1Dt9ebtWgWrYnMsQCJhLqxbLgfw1ZLq8UfDzGMQJELDqN53Zm",
  "key7": "3NnHh7gGwKNs3eP3Dd5WembPdtMNxcP4BrpC8Uxndbt3eFfi9aAg45cBmX1mtii1JtHhN3gLpmfKSv8RESvM6FkN",
  "key8": "2pDXhs13yYYHKJqwad3Y7ws7Ze5QnfcPCZu7kdZpJeV6KGhLThXteGPot3QKY5jcqwG7D1GSdvrMS8dpKm4mRKYL",
  "key9": "4Ma9AJnMtSLGvZ6gXYFnJegcqi8SJgJ99YWs8T4MxWRsrthsv1wpmbnWQkfS6wRbNPwc1rGpxFC2m3qxT6ozxsg9",
  "key10": "588vfjp8Ska9RsRTfZTi86FB8nHT4nxXRECqn5FfzLWtiWzXZXbfkoycbQ7PU2Bejo4SQi7esb9SnE8d1qjjiatA",
  "key11": "twKzBfadDiBydc2AeHQXhohZpyKH6YyPRG9gMn412Dh8W14FAkGv9mmpdssGqdBqQzSMaXHP5gE3eq7rWdBh3L2",
  "key12": "3WdgiU7oRaNx2WY8CzAXB9R8rH2g8iZ7FDCxFXdRhRKGXAjbsoWHDXNbbKoCXfuafmb5poCZptbyZnqBugHfS5aN",
  "key13": "32qmifY1ZXyn9ceRSe31KJ8L3qsHJN2pNdWDL75oCnH1MJs3TCN2Tg2oMWCopSadouiE6Y7V9JgNgshVvjMtXnEx",
  "key14": "2bfLLmvQ7zWJjCcYpEN2WpCoYPQMokfv3aKeGjFymNzJifNGeu3s5iPKdiuXMSKCG8ckF3ZwQgru7ZopqB85iK24",
  "key15": "54E3ioxQJP6U5JcUFw8EMoDGGCGn1EuvMXyk3VoSRPew1pVXeacn3ru9meBM4NNFzVz5TVHaxcbyQdo2WydgZzAu",
  "key16": "425CC6oaSMdPR5BobPmMh2X4U2PByYMLBETcP3fN8B2MsVuZ4AD1Aco5Lvyo7gTLUeiNr8BAafhkzPZ25pa8NupX",
  "key17": "quGqTncZDgGb154QWgb2ihoWhQdto77wyj2gHJ3vz7da55eL4U637RUuvJiqEHN36dAtjpNPqt1VGrARExeEvZY",
  "key18": "4cvVeM4MpMyRZQ8ynkiBVYLVbq1xfH9kA9igw3tPuHGUTX3iYPLfxcaPbXxMvnB2ms1FFUxbwzmnxWJMmiB5B6CW",
  "key19": "4hzjdvQvnD4LHKmrtJwapHuZjNktT7TNZHRASw86nY4FGhxeF8x3ig7J74obkUiSB3t83pGkHgDJ6nLjAGXQch3a",
  "key20": "BWVDVmJQkRmpQXzxPgFgkNxo9vtii6dQLDVFbF21Cjb4HFypT45Wbk1xy71vkt1KGLtADm2wiiyJmhLceE5mKUC",
  "key21": "2e7Cxz28KViBKmjR4M4p4oEf1PVFwJLfJwkRy8pCyhKERocMrX3vUd2MDqHTjQVtU3xhWh47c5raZ7MXCDrduHSV",
  "key22": "3CY8QUpjsZAfCHbewRL6YyZ3WQGvq9gsPT3pRsvs8vdUPGggLwQoBVxzCYUbtCHargUzjd9sN2hQQEWAUsHEK3FD",
  "key23": "5kTySZT6DabjXP6d36me8DouvKgMJQj3fG5Y1FRGYEd2vKBAU1fPXhY7uSkfy1JqT19MGWgw9NfwjTBUHd8pxdvx",
  "key24": "fqEoWnjAipnDa3YXqDwLDFJ2VtfRiekfFv5uWc4JUipHaDfvzjWou1KMy6CxQMCi9eTYkn835t25bu2sz1UExfu",
  "key25": "4zGh2Vwxn9ptPB6TeWynoMUEMW9vPgjt8cxRtjtzGE4Gnpptgp2qwF2Yr31BG8aeAhAECytjBEZdBQZyJemw7sX7",
  "key26": "4YczYTQqPpCzmNab2W7HpvY9QJu32dusoC8aDa7MFQRnDHv1hJJcFNvReLnLr2Qat1ZC5Z3wLM2pLyTgGAdy1LHg",
  "key27": "5kKTDBBiiteFfDhhKFyH7aniW54Tbv1XxXSny1jbZaZHDeMMwYBgFfQYKy77hZagMP8T2KKZzjpRr5pfpKq7aJas",
  "key28": "2qWTYKKVBg2YgpaZuUMCwzL9W7h28jTMy8dLZZXT2Ukw5g68pq9QFWmb1FnyjMq6K2mM1P1DgHEBxp6sD53yBqFk",
  "key29": "Y9w36qDyNiPbbW9toc5VpNn6Fi5dpAWHdoPG5JyFYhKKYUHXAMsjXm7tT1ja5LF4zRX8wvZhXyk6d5m5uABQuvG",
  "key30": "2D5SuD6Vpuu6cpGiHKth6ni7SWpXxMjQTo4TNjWWirBhTsxka43aqc7kJVc9V1fDqkz8p6qoqwZ3zpbCzvjox2an",
  "key31": "JqSbLDk39ETmzfJBqPz8DjRcvyGopH2iNxd5MjHEYjrkoBLi3qC7EwcwSqh7AzXp5mcjHv8yFb3YgY9CAgUmwnc",
  "key32": "5s698HFGDKB9yEffpvY5guY1dY71YKEdgVYFEt23MQnnUFwWsWWhvLY7yRsRJKuMryWjF64RMmhvdLt4mx2RRMpZ",
  "key33": "4bmWzyx6ApxEhhUAtah6dxRjDmxQUyVZjFDeWbPkHkSCy9t6cjyJzwTd51Y3UiMwd7e5ZRWG5HAVko9az9iHiRbS",
  "key34": "65GSRUPG8Dq6jEVypQeuQZyK3kqNTRsjA1inCNrgEaMqdBynsM4zhGsBUS5tp7pfTLkmcrbWunc2Lb8aD8iHpswa",
  "key35": "3xC8qvGDiZkDkZVgm3ZkQnQg2VqKhGcUFJQsiDsBmJ4RKrM8yaDebNHpLgs9WSPnxpYoZg1MDUP1L8uvTPKjJ9xT",
  "key36": "2Ukk5HrmeSj6B51ygVghjVrUDGLzJ4i5crd2UT8UNM2pskrXQfH5oQjP3XkiJxyg3UKpeME7kvk5XYhvSBz1f8Rd",
  "key37": "32eLD9pZFzU3QX54N7djTN7Kw2H8LVdFuGA2Wt2rjg8saJkiiwozwSUMgGYx4io6627hkDbZCFLjp78ttc4bj5eF",
  "key38": "36u6c4euqkDHrkLmwxBsLGwnvG2t8P4SSMfqANhmjb4hAPfdTynnSPvfXpGhytk9c6mKGtKkFCcADNpb7ZZR2SRA",
  "key39": "3RZPB4WxZ3q8HbBs22TsjYn1KDJDtC7yR6a3f2ABc6wdKmLTbZZdEvWRPw6oh4dnmf7DsqteUuqhASSvSpc2d6Vx",
  "key40": "2Lb7wSdiYWoDZ9WpZPsnocBBqvUJwj6XH64bH497ZxBbURmRzB6jjyqq8EAGAxaLbSMaW3rkMPFLiKcbv5JqMyAj",
  "key41": "4B2DVTtNoKhAjPYxzUW6QUVkyrtPTjtKj74wUr9BsyLy5mmiCeXogKPkR6TC57pMsMduYaQWt2mJ9CPUh3YWsbT4",
  "key42": "2c7UtR7hopR4qW2Ng4FcUvpSTqt2hQhikAk2zqegq3SuFK2WBSFg4ZH5xQCPW6GoRcR59x6vF4KzfmYUnywt5qE5"
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
