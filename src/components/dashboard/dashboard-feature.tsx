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
    "4LbbcraPirszi8FkeAeecNHiTQBQREFB52NbNfWLNzPMMR8NtMwqbcc46uAEBg9mtRugnAmbY9BftzqaqFD1htds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jSAzbyoK2b4zyrf3pMiDjGLEv7AeHhRRMdgptXZVwSQTs1S4KKkkhTvNyBc7Li6kH7MwM5etxFMwNCQsyEw78T8",
  "key1": "4KqKD5Moew63QEk9PDALbfbbtaBdV6MbjJr9f3yxkL6ahPL14MzgoPZtdHEo6Fz1jrTyijGGXWkSrnsvhiiYcsNc",
  "key2": "2GKwqX55tuPZiXfw4Jt2XAykpHx61xk7hkt1psLQkT3UzJz4ju5excRpGWPkxVGZPbZQRrpr3SW5B6obwbtz2zk2",
  "key3": "WE2JSteyjJWj6Y88q5nQkahQ7nBHJWMJVQLaW8zJv15oEHNxZnf6ds1mEHYpwUEAM3nDzaHW4yp3P5scF3hVBpV",
  "key4": "3eV2pGEXEKW8MSisjohgjNgPyUnXcoQH9XcEEF4BCU4Z2eXP3U4t6i2MxryGDFYS5XYHJrHXknbCZhHjQPrreGpd",
  "key5": "p2CCkDKvDwoDmnYeaayN2ZZ4s2pmktQVQqgzLdSJkcWnkf3zgV61SjhnUJDBxVSX333gJYKff4vgpsTPbbUHuft",
  "key6": "2gPdKqdW8zNa76yVfUn159hrbpvBTagD8hoBkwrwx1nCD9SAcjWDw1NL9ui17q865EfUoNWb32KouMazY9R8fcL2",
  "key7": "2q1EAcw3qandzS8Fkni3sdKMjERCpq2RhfdAwDYGS5iLu4QCMHA26ge6XbtBhpFV9d5wjuTZhQZza1e4LJVyh95Z",
  "key8": "4szFqjQfiYCTahY5M5m3X7EgchG1zivFRn6SfHofTsFGksDkx4cYYTW2RcJd9tE26oBJG68RMpzfqBaL7RntE5Ey",
  "key9": "1pyv7KcRgauHg1Y8RbFfHNrRqxgJYx6x1DaRzRsQqLUibzYH6SWLQKEFmB8XtD3v7cNSt7zTc7j95ejhM2oKryh",
  "key10": "2arpzAq28dFf9m8o3DXhDiNz17iuNMub9LpbB28zQUUk2RDZhJFyZ1n8BfvKzTHnrZxhGGjB5awNBua1EaXdkXKz",
  "key11": "3XG2pKvtfVQFsJfeUo3qzNccX3tTotLGX6niNpwUsLCFUB3MwRf4Vz9PVsVjBaKoqHznTL4pKinM871RnhBZcb76",
  "key12": "5dGfjVAsDMAXDWnMhuHttsLv4BM6UoP8RZKEgrp4T5afhiZRN8atpMiPKYLbM7bjTX6Nqohe92Z2RvuEqWUjzGSg",
  "key13": "3ofBBpyvUgYDTLxpNM2B9kcQ2mVU1e9Vm9yzLQsawsUzHTA24JBwZnpM2htvLzxFrkvYr7XQYU2Uz9mKbW8FfmEZ",
  "key14": "QNQB3D3UFmpjSa3hv5BoUadfHSfeAc7N67Z2VzQAYobnauHF1wwNJL2EVH7L5XijEaPrberJZvfFGe7CTRMu1qS",
  "key15": "2Ug9n8nN7DepBCnXmynmLdDtKbnYvzXbWRY4fCKmUbGkKzoXFYY979Kn2r2EiRtWUs5NNRGB9MvK1UCsxhPjQUJ3",
  "key16": "2jmgU6eiaYvWT2UvFePfPfpopdKrnU9kZGB2koSoCERCycgnTL2LqGd3UCdWzBappubtgTb24guK1PXZvnZd3bet",
  "key17": "QQxdpVmMCXXaJh2dRwgRrTYMxtKvAdkyDEqn528KXD4FLkNi8fSbdsywFABbHuddmVoz8Wd5x4BGiBvSrnxSoSM",
  "key18": "KTi4vHWv4zRgGpVVTrFN8rnxnAhtAvGa211zguNrYnD624Vbh8VXzNK5E6x4pxzpJTHJ86N1fYe8NbNfjiei1tj",
  "key19": "5MAxH6iJRQT5XcRdaky6krYD82pBnDCMyLUmuA9WLm3hkKVZkAgFksDfaGeSXLriaNYXnErLj3ZMcxygcYou9BFF",
  "key20": "3syM4czGBngDTGdnbb89nx4xEqUp743KQ8tP33JQnT8Yah4rhEk7anKBn46vvX5UvKmxfDc3yYNfW3cm1WEvX7i",
  "key21": "4jsko7q9K75rborg4dU5MhV4TCk4inqPXfSrmUoWuSfWmexrnWRnUZebmYQwWaTKcukkkn9agQhLqwvTa6ufQZ7G",
  "key22": "VYdrNE9xJVXTDgW3vQSXNgP6Kh9WNfR5yiMVJzoYf23yiXxtK6cSox8QEq3BsNYoBiSWXSqX1kMLqaKP4XzpX9u",
  "key23": "22FQshWFJeTHd2gJh1bo6zAjLGDdHGx23pFhrSwHFhCPo2Ukiq2RwbUe13MGzem66zdPwg8TkVSaVFY6yFbpHJqd",
  "key24": "5v1FtLDEfx2NPEcjggebTBuJ4kkZLtJkpDNBLMX8Mr11E55BvCp6rCcqnivoJKDSwSTaamEechVjPgaMGHyLeHCx",
  "key25": "4JSWey6N1Dj5azD8odru6DR5qWZjyNV2NNiauEeYyXq9o3ByjjfMgx8LG8uSr7rQ1Xn9PUK7cobxgQGcSasGviVZ",
  "key26": "dbCeLBQRyszRGP3LXaMhKy9QfZNxJFHTzTz44R1DEVT5HuTkYxNRHKUmogBQdFH65PJGPVL8bLE7swCh35aR4fE",
  "key27": "3t31GLTcCXKYkXwsrCTQTwPDb6ftZgM8SEbVJzk5QQjvV8h3LScxNMNkaCSXkEg1qJwXRi94emTq14QnhMshCXMH",
  "key28": "3KepKgKVRHJsGQSHp9Kqm19d3rpja3csaaz1umVwBEpJeFWLT9wpQ3Sk3SZxwq7jyVpEBqsKPw6yeUPrt2WPZrgb",
  "key29": "58EV9ydGBqmaJrASeu8FnEp6BoRPH3qfqk1Kw6fFfXqeCVAXdnWHxZf4B6ZrEGCKqiDA44LUdrzW6v6Yt9iGjtCM",
  "key30": "4MNkFm98VvSPhaKpZ2WvUUcNLvAgqjgYc8oTcemTNoDFdrfFiJtxB9m2t312UcMYvvcNWprFmTzBPgfGmcYjHbQb",
  "key31": "2PPvJFYRNgt61bbAJsRjp2YWcKPvS1BTsETWV4Che6Abo5rE18UJmY8qZsFeEqoehLKjdbEthTuVRbXbJ2bTz6wa",
  "key32": "5sQGuWWVzU54khkXLnzNm1HCGNuvsTvPcLUeEzEpWmLFKXuwWkEKGyFa4BgfYN5VKAcRcVgDuhNUAyZRHCSKAhQw",
  "key33": "56NMqZFhkYbm56KCL9zXTwmYVDEmdiMU1eQkrSqxaGNxG7ZzE1n4kmTHT2TTuefawM6ebHjD6aAWbynGM1vz3WPB",
  "key34": "5ErvKrsTb2aw88y3XNH7ibT7yuM4osorFMrT7ZnuXdg47ZmthABHdV4YMjh3Ub5oY8oiJpN8H62K58mn4mNXLMqm",
  "key35": "2SyJwoAnNq2goGXy4j5k2MABNg3iavHWcYk7bRo7A1KLdmnTcow7pUyqWBdP3rZQjcnkzTTchFRyJBpDXzFbxr1J",
  "key36": "49vMhmqByjE3Q76rJ4q89DoR67YKgBJrPtB4nvfv7ynvzmTZZUaW9g3VBNZbGT9mwBjPoXY8NGcH2gS3pzzqVL2v",
  "key37": "5uQheDZfmAfqxvjQGtVeifSf6sepHvxQy8GbasKvmD3nMKJeaYUE7UkkcSp49gDsDb5zhef18zEkt2CFjjHrohnA",
  "key38": "2aXdWPeJrUy7S3AA41BrwJ9ZCuenEXTXL74prYc4xkUoUWJiF8rcRXf7bEsW2F3ZaFi3zB46mTteHsqxzpji4eo3",
  "key39": "2TTAXLuLa13ijjNt6bZspoaT78gbcFNiCx8UE4wjjoxvFTHN2ngRTozagYixniEBRKoGY1Nf1fz6LYoDA5uVEmZ3",
  "key40": "2bK922y2yaD2PhhZJpNC8U8KP9bbEtuapArY5FWbJp7b5hGAqi23F8Vtty6F73aVav3wN6Jx6LFKGmBJncmZpHRF",
  "key41": "qXGx8dAHZPyCRX9pR1jGLm4XFEbRPm45MGjWE6sbWFZBWh5AYffHCSAUqDZYsA54GLTgb6EZhhAqXG6914vs3Ud",
  "key42": "63TwNPXi1mca56N3E62V7pC4s3stR5i39QLVdF3xtfiaGBxefej868sErXCETNKyqbhLNa4zFATsChCzMGV3xXit",
  "key43": "4WrzAFFwvL7mhq8yX9DNWuf4vTzkK5vVVSZbtoLRLXXVfF7A3sexv9W6iWKsWNEMnrXYXSNnAfgKBdUYdfRNghSQ",
  "key44": "Snr2Mw4YZvq65BFhz4NmNsNPXm4oyRgEyZ639reCXyFBYE6oF4ZFDJLXNv9ms7kiRkgiZYXqHU9TR1J8a6YNjsu",
  "key45": "21L6c6NuCHNsuJ61w5X8RfRz3f369WGbnwZAWc9XwpDdksnYoGcynR5r7J6nJKbrmGe6szo5pcQNGBajboGALvTM",
  "key46": "2eEbKwsanCwowj4DYecNNr6eGVaixwaiPt37hP31GwApubKmKRA7kFMtMW8VaJkZg8nVve4UWucfvFimLZdU32M6",
  "key47": "3gwBziGvvhpaHRkMMSNkd3FAkb7msFeihPfGLdbgMzQmq5jX7bUHv1FTC7URjuqYcpVpXh75vWoi7d7rS5jKCPrb",
  "key48": "7h6dVHRcrc3Sd9e4owRFg4WrnMuuT1SksTv45info4crRjvN6k6xgxc9Kz9ovCM6cCv5UGywVBCeu9kwnVv4UqL",
  "key49": "3WURgM7Ww618Nj2HiZjcEqVNr2veCSnaB8haP2m3MspY89EE63ALtgMSG1XHNA4cW12j5T1Fuhouu5ngxaqyevHV"
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
