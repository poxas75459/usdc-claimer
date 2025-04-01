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
    "37Qjgbyg3f7gC8BrFVuH3i6JDn3XpBEWZxi8sgEVFT4Uvi2gFQ2ueetQ8TVpJDxjk4e4qvr16TF6UEZ6gm1fksKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uxs5qAfDpKSBajpXHYQHKriUSz48Adiho94vwDfbdTPC8rwmeZV7m4cRNpb1BPo4FRJCTgvPJLe7Wop2NTvKTnD",
  "key1": "2xDqZz6k16svGGxRxr5b6JDyXGVJ7y9G84XLYfBFTAni3deXvC751Xbh2hSG5BqsGKYcBVWgwSe2jhJHdQBNK9hE",
  "key2": "31vKkHdmcU8ZdHY5J5njrErWz8FDaGziZegxJaAEpN15K2PXjGLu5kEqg6hfv5aAhrjbVeG3jTZp8a24HVnJ89mY",
  "key3": "3HWSmhg1KtJ3inhiBfiCLNkW57EtTyuswgrFvYtDTJK9UatoVAN2xjyEnMFPgQcgDVnuVPM3Tasg3Tq99iL5kYzb",
  "key4": "xPUjprRm41Nac9G1PWNNi86YyxMSbSyD8fwJGHqzCFRKKWM1BS67S2CwbSQ9QwRTjH9MbgrskcYndWsUYmXVDH1",
  "key5": "3DDVVeQZihnoxCB7KweZf67kmN745fH9BCNwN8TgZQdPbatu6L4WXZnJa9XQdNVjHQqviTESeN6ijocH4ewvZuN8",
  "key6": "5yPVXNFbsxXGvGrun9jKTCLyyZtQ265cFUwhYXNgMCTxVmYaVpRoH9NhfEWsqLFvFLrMgakBfKVK7tb2aRmLjMZy",
  "key7": "vEwgfUZWPNMAb3vFJKxxQFiahg9ukk3oms2y5j8rvNWE5xFJuNjq4b9ELim18ZT4twbsEdbJraff87GL4foruQV",
  "key8": "5pefusTsK2cMNegiFKG4B64jeshJXohFSqUy1Xw1LbGwa39TPr3FdNe3DZLvHrTVrQQNZBEw9Vz6resGHSdCQhag",
  "key9": "31dt4LAo7L5tiTaDrtLMg76dQ4KjjZ4uu3fP4yA83xZhzwV8qTaryXsLVeA2WStvhKxb5dz7LYamLK17aM3645x4",
  "key10": "4gYpWSvvbCUiXUt7Rf87ieXcBVHNjZfUtAEDZzczXn6jPejnjQjyLY2kJat8TDyJGJWgsfeFyfwzuz55HUF8EzSr",
  "key11": "4Q46cfvR18sgxQZ32jamYdepg65vLxB9HYfNM2WMGZwKxZTdG7DxW8Nu6u35VwZfxeQCEYDb9Ctzt4wewja9vQuJ",
  "key12": "2hLPRsua4njymP7SyTq5FMgPRfX3QWHJkCWDKG8TU1ykPRFAM3QrK1Qi9XfpmquBv7THZMz2ReHd8DBx5DVYSLwF",
  "key13": "dDSkiqgAD7qbQNjKq2Q8bRCuFvrPsFno63xmWwRSi9ip34CjbsY7WgZjmmDyFMRJwYYF4D68WUqKJWG2tyN72Lt",
  "key14": "5ytcHKfuXSFFmJnCUFNZ2QyzcwuUkJ35825LSvxLCwfvox7PWz5wRBKorp8AMh5NanqMHoDTatZMGnXbqjkecYAk",
  "key15": "5Ak61ak3SsdqrWvAqocPfuitpi1AQmZCRRZ3LXxL7CdJtccr8J5ZYQ59bv9FG3NQGrzKBna1KXizxa9VoW9Ye9Jc",
  "key16": "3zf12KrKftJ3rjTfBUYTuiiKfoV3UkaxQwYpXeGVuBJtXjW4QEApZc1or85Xoq5PJUvFMVSJJJuR4F57QZNagGdG",
  "key17": "2kd3EjGFu1oFQuv5ryAzZF3HT8tLzJzTXtbDgpkPfcRTYUQkDxGZQeK9aV8AcYHaXDrZfkATJKhjM9jMLCxDgSnK",
  "key18": "EHYbCZd9eciiibXTUete3W7QDNnADcwjaHsVKQGqjUgbhj1uWLZEoh2GUGzXExFDXrMCP2a8jNGCFpVR8BsVpBy",
  "key19": "4DJ3WBXvpbkAVcAfcbkYdm86v6Xfj514q4bFakb8gwXjZ1dKEX1ZSczuuiz9ndnj4WepZ3SWvMBJYeAxi4tHHDA9",
  "key20": "2o1hqC3Md2U3mmbjTkX7s5zzZAfNiE1yX1K9HD67Fyw8L7KaDJH7THebppiqsHrDuqtnjLsTTjY5PHN92R9DBByY",
  "key21": "5HL2pmtG7TPe3Kx4SRgKKb5XixwxchRyEdPL4zK5THs1EVe7ByhP9wDcRmZT3odK6yFDFUf2GHjKdXQiawngziuD",
  "key22": "5z75xxCEH2u7zUjNHccMBaoacgwBcpwEPcRjEYzLBimXejHVRkfM2CC7Mn4o7cuvQpkQC5XZ46QKz1bdRVrBBUe2",
  "key23": "57raAAnyVPnWVJ9Nq5VRAa9yMwNHbXFJTQzLae8htU1pmiqdqPtKK1yoNUa2p8nmxVXUT5DGEj2wEV3oPhC7SHXQ",
  "key24": "5kyLXHVRUkopmUZU6fYEQFqimjFair2sE7YUxrrrdDEqeB4LYHLgkZUPuibBmAgxHXe8GF1u2RRFpQmfsfASdSSB",
  "key25": "4Vp2UxCADjzwmNieaNYk5ZfFbjVMivwLpVVPiMkZyxjxQHAWwMNbLKJsxd3o7qo5DNNKYCM6F3DEKVecJW8L8NJ8",
  "key26": "4rJDqBhMcWuB48f77hUBA6ditBQD59hvcxT3sR1dcFaBTGn2TXCrHoxApAPZ62FirNnYQ4Ge68XEjA9qt8a9YQ1U",
  "key27": "2cwfzzE4efUHEkBmqXVwmSrz5jNfrGJiUyZNfn723qVcZiMVXjKyDu1AGHpmvpV3J8QNFSb1KWW8zkj9yK7fuJjG",
  "key28": "2yPg81az1665qS2xSufLdBQyBtNBwYUec8xG81vW8gHVKmFkWLZmGYmrYkMkMrfrTfsbTMgwRNVZReMd9LB6NTqj",
  "key29": "3v78TTpVkJzvmWeEpoxZ4pzBgYpStqFFcJ875srk47yyDoZWsGiAngdAfGXEKepXQGUzD6tGBiChqe1md5v2RRaV",
  "key30": "8iBsfKfhPD6fdwetBMxKQonqpvxnTRbgHAKtXWRBvnUNN11fheoHZ5qKRNcXchs3qpdgTie6YrEia9zdLmqaNtW",
  "key31": "2eB6MDeXB4CEYRG8uSwrHKnFiWYE1uypv5gfo8PfanMzbJtTSNfZ8ELF4zdjbVSsU8svopJLdWR7hvpVkkDVCHXS",
  "key32": "3Euf9itLALKVwSHqkD1ySa3wAR2rbkCfaVQYc3498sh8UfMND4u98ax2m8r1aMB77UefRiH8hD5YoF1g9tjxZH1H",
  "key33": "2254BH3ohM5oMYmrFycPmB3QVczf9ApNavDktmznuifGqJe2TjvQScABeEf4vnFQhC9H2SyvokE9fuonB3mH78RA",
  "key34": "48D5yn5yu88HQNKvcoyjcLqHqf5mYQBQJki17dScUXmjhiFnr8fNQVLg4YLLYsDMjk8dxN3JyecvRSuRCwnS1W55",
  "key35": "66TWSZvN1MvSfUZwVtHWkt7ybjuctvhnWUvPxQr6wPEAKu6KV81v5KSzprHSwESyfi1y2usyaK6A91Anu1HawSeo",
  "key36": "4H6GWFpNLid11Fu1578t9jLCi3B2QWCormYGrKzzQ5R2momRTTr4G5zxE2kXURiZJeZuEY6q2K4QsSBrJzhHMhzS",
  "key37": "2QtHJ5YHJn2KFYk8GEtL5jE1ZDA56x1rKqacic1Euen33RbWjocRMyDhpYFMGZhiUB7Ugaow6vGeXTXFRrb2vpTY",
  "key38": "jEybG1rJEVKQGWB38nLc6eSMLXX9L8L7UyfBho3gS48yY8osuVXeN8njskJfbniTBUjrToEarwBTUPw7fbxKv6v",
  "key39": "vdUvMkX4PyvEH7Vp9tkpi4qa2UgkfcqHLKuU2u75ur8SVcCtdHfvQPo75Z5pRzFeGbzpSqKWMcc6hugrsam4xmK",
  "key40": "4sDgsvR19gk5Q9uGN5Co4wKuMS8T8GxHY27ynrHkQNbeQpguk9XzVHAfQUneCLWCYyyDjo6cmzqBSbbDMuafrobT",
  "key41": "2ybdwi2mqHqRWov5YWvgtVsLsK6b53VaKbDQ85zwLd7xX4ZQv4pjELYEWvxXBCTSMEj83sfHcnEmpd58Es5X4WTU",
  "key42": "1RaoR1nYiq5Yo7yjWtvtXpeCtzL13SxGxeKmu7rrPN3btJxd3ejffj22cmqxkMqSweNMF8jbtUwXBniLFsvncNu",
  "key43": "5S6zL1kXu8CwLvQjqhPAYShe9sEn21doEkTzhxRhTAYrutWsQrrK1KxHAZbJeZUGE8MEstiS5QofeASy3eYCfQY4",
  "key44": "49frxBa1Z6qUHrNujegqL5ceoJX3srRp3NAAVss7iknCMrtsWzzZHX8JcURVEnw17feS5bTqHNJXfQ9iKUzPzuif",
  "key45": "3cuDdty3YagwwVRQVKCJBtPnA7LCY5HKp67CsR1CLmn5Me4Kb7YgqRTPPBuYDQ1ok8rWqdAH8YBpt32SpAZmRPX8",
  "key46": "2StPf6Heyo2xMmctZBKusv2WtTjqkkicGyQ2cGM1iCrf5EqW2nqnkgbZitmk73PGnqMQVyyyC5hU5AY2Zd5Xmfbd",
  "key47": "2Wsrj6CRVhErS5V8Nv4jMd1D945sEr8sK4FCPr7AtQAFquWiMK1KpbTU1pW4Kx1Yr73QBJoDtSSWCHVee6ZavHBC"
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
