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
    "Cj18v5rKKNVKcb8nSRzUYF1FVB8J6vHw3bgTXQ3RxhEvrKdgJt2fGveDc8dDzVvPCjoNcw89qRk6SKgUL6txnkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TYaT5jykofD36HpgA3cpEr6fxsucoB5Do26fuFPEksCy3nR9vJfXhbmYopTa6ZHBLoscZULGLknktBFRgupj18U",
  "key1": "3q4CnG1VsjxfiwTVfUTpJNnnMYkHW7umjVosNthb7NHDyqZ8Cx3W1UtGywcJhga3XsHDfRYwMZGSEQ5nWFVvDtkb",
  "key2": "3kBTkzXN37eRMapxPswDggLQ3KGoC3jQRviv4dmYg3Zc3Tb7ZeBcXPvqkBtkRy9FTR7choER3X8YTgSvM52XhYXg",
  "key3": "3fD1N1nkpEJp14YXkM19BQHgNwucbk1ASK2KjyNvUZpmTNBDP1fhsc88154YuLPwJGmZPUfkgAaRVFsrasenWjx2",
  "key4": "5NtSBPsyF3uy7tSLha3SiqTtCKv9pfUJySDzyv2JvNCw11zVipaszb8w94gRN9WkP3eSzF6xgabZRZeVVbcusa9D",
  "key5": "4wnwirq3pNPhRMzFKMigPygBrmo4sKU5RCYmWkHL8qZSBD1dA3mzSkCsQkzChBtLrULWRCQ3nYT8TLJU48bAzEx",
  "key6": "4HUVVB7u9gHFKpPgNw52X6ZvUMNizB9BkPHadhoePRQUjse1wKX3dQVNoTzHRgbf79pAav6yA7z22fcYnTgg8YjN",
  "key7": "5X9dTA4GJzZsii7VyDTFFazXzt5sWjQxbbn8y1SyZwvbHb7Tf77RpCNUMWxYtVXdfC3mbWZbGTwwikfUTBWKu1jB",
  "key8": "4ruqFHdxhrir5Q19s3HgDU6gmmz87cBiWuJJuKMgVnzVHUsG1XvbVyQ3rrHfvSUNmtDd5LqH1NgyrHEniKV78gWN",
  "key9": "4EVi3ykhXbNJ5THTM5o4jbhM1ZAiZWKWfCVVWt5NpTCoiw3uNceJzqr7yvPYGuVgdetbywW6N4fpfyehXYTGPrsA",
  "key10": "3gpipTSXdTMFcWJLcrGYcdz6zoaHsK8FNMBV1zieccDdKHEbJUh9grUoP9xsdRhzMEyuSNAZGgG8LBYdXsw4Ucqz",
  "key11": "RB23Zit3REZdW3RrCsYnGdwgu6DqNhna3rb5jRYgmufuvtwv4TZP2RP5uVqq372QEmF2oCSwQ93NQS7yeNhpmoy",
  "key12": "3k9R9h9RX2Xpo4sizEnjMg9MRnxkKy7QaDgiSf5k4zrduSui6RUequneuCixYqLho8HXtLko1BR42fSn4aqSBdwr",
  "key13": "52nH3tZgSrHPsj97ZPoXAY5FgtLMWHB8mXdrcctLpRLLjCGqiGKCTTc2bh9zTMpe9ttPZ6aXoRZa3ZU5Uxf4yWVR",
  "key14": "4qrSNURoQfjbGKtAJdncfg9koKp1TSuYfo5HeEFhe45HVHRKLyVMbgjMgm9qoLY8NEYNmRUA54jE6e4VFvwPt163",
  "key15": "3MSkvbYA9ZeLCMeL34eTWHRSyFCU8gL2QoKNSv2W7sGJnfjBdyMj4AnYLbftYaPvT6824zQSpF1ZdWwC2Jn4GPrg",
  "key16": "5Xr9bi7JaQKac9wX29j79KHRretqqH75sHp8VGuivDyVNsLgtJpbKZxPd2gdrnoxfXHVvMNsDVViifwg95SNdBU6",
  "key17": "3sdz7x7psctx8zfxusLQNdzXsumcmg1ufofEsVYU66f5sYqSmy4fAx9D3tfCbtG7guiHGtu8ng6Ubb2aGTcEyCgC",
  "key18": "5vTktZ9e5kYALsQegnb7XGJj4bUboesssXtHQEZm5Qdib21yzxWNbskNu6fg2wvC3cMu5HM4QTDJjfnoD2kkyt53",
  "key19": "3vRZaLsurtwkKJijE4JDB6aQDyZtPqZNvVKDqAYiDSC7q84CUrfTUxoxEs6upMgeNhyBcRjCY8cAtWtDJp1GRVLE",
  "key20": "37SqSdwySzVTtepku1crcv3bfYs39gzX4V4VKbsN1uxMDiWGmV4LiSD8KoYgwi4hrDT1Bpq2BpKuttW9hpDf8SwF",
  "key21": "YHCUecyWMVjw8q5bD4umWXvv1qfU6mkHMAYfM6P5Ba8RfMjjVcGH71JiJr1yAKUYTMFubvrofgAFS7yPxhQ2FJ1",
  "key22": "3wqGMEAcYMjM6u22fCbceKj6rt2vCZS2fNGZcLtW7yHyaHPmFr9khRVjVSKuh2a2SV1EqXEuUb4cuUTdTfoJFYfH",
  "key23": "56WD5nPnJ56mJy4TeJW6ei21ENshJXo79z7a6Ci9LYNv3Cn3EtUenp5gd79APvBKPJuVLbuH8ViFeytQDzSuf55g",
  "key24": "5wUQsZxWVf29bD5uZTqMwPXS4WtTrCzGjiSgVStZqBruoPLJPqbwrLv1pvomsPgnLBWACRqAutw3cSTS9bj5j3k9",
  "key25": "4qhJSXrezYezwqjDArXjuq15Li5N9HTc7gKJdqDd5YNZdgSYvkk1GeYZKv5kKQexDQfPBYuN8hAs3cqa5iAH9cdK",
  "key26": "5fXaPdGM7cFVVReG6PYyo2bPMSE6fnobbC2j9XhDFR4ksYUbnGawjAeVX6HFGYULuDq4kfoN4vTcsy8wcEC2Hsq4",
  "key27": "3uK5WdrwLe1ofD4wHLqJG5yW7e5e6rkyVCMReZ8gTAYac3iVGqX1Gk6fQub8CLwuSjRuYnuXudzxAH8JnYD1oVtC",
  "key28": "2Yd5APz8Ph5CCtvxrYWmv6TQemTtSMNtGbKHqVWrHxqVqEEZCGSLnzRKhWY3iq8jw8k5rjPxpcJaFbKBgWnXnfXg",
  "key29": "54c6H98MwiryYvi4oJdc74gcUraNUJCSUh6m8uUjMxYnXwskLBBpkhoPi6B8TpqRYpsXnhrc6YFki5cHXiU6y96h",
  "key30": "2kLvdWqiSSEEKi4HW65FsYcXDyASzceLYSxPJ9XNtbqKhtcZEctM5Rh6TyTHtbcLiuxPbjBgstFYf7jTcpTSjgug",
  "key31": "2tsXf4ymrteVFCPiwXKyv4z8TNaE5yNdgHuKDnw2BPwZPRA4AQRBk5o7rMmEsTFJk2uvmYa9EUaJz8f34RycoGX9",
  "key32": "4cwdkRe4HPP9pGBc2bRYBcSELYZqNNewSCHG8hL82pyBsCz9MtyPtALZLqPumad9FtCNgygsciDfGjEcEapS6Djz",
  "key33": "5HrSVJugXQApTumRmtdd5pLP1aVfBzDYXkeVcT9gdhuha9HqnULaGeU2T2ifn6CESYA8NHtw5mTuNNhyTa58L1Fk",
  "key34": "iVcCbiKUPCqk5meJ49LFhYqCzQbnTvtq66yTyg89kw3KnuafpkjZodhsW7XyRp3BnaXfHvxa8qAcMuhJQDzrz5W",
  "key35": "5DYev3xzBrvQciU6oyXpiCmRaNo5Q92bD2JKrF36cxWM9Q6zpxGWp2hLpNfekvMEhJhHW3uKSewyGnxrkkoMffpr",
  "key36": "54aW6pQPY3Ye6BNu9atNW4JYvhRmkLQJWPgdvArT4rTEuXPmTgL4M5CDrS8cq3x3PqJ7BF11ww3ZN3fKa3kVqdBP",
  "key37": "4iZjas5ZdpnVa34uhYDGZmU4q14UJBgEmpfWddfUVH8Axfe2r6YZUyQUJ6WicMsmgBj5q6zwYJwgPZtXg6GHbpxJ",
  "key38": "ezvDbhBFTRCYqvinvx1XBySKYCa33AJkW1qqn1nMuhEHMVdpvmeDDvCWEaVQw8JXupeYxRzTmuSKUj1g6hLfF1N",
  "key39": "2bR6DRewfzyjpa1HJvhnNi4LrCceV3FFsYeB6MYTbLgLwPw4rG7hdJ72DTt1tpsVkmMSUC6cVtDgebh9EcL3rQiR",
  "key40": "27Ke1gYpwc7v2U3SwoPuFmb4qutGU2Mybcr84L7wGxcEAkvUfFyMf9oeBLEkUV7ug1Sn3KezNDrQQ6LDmM5Q8mg6",
  "key41": "5UyMJyG4tPjbs6pGPy88r7tzvwqZSG57LoatVj6HuzKkZfQwpoE7F3YXHyWFnBKL1boFr4ANSY7yGnLYYysGnnY3",
  "key42": "21maZeveLA7QKM5ofSkfz6GZgipxMbU7JB4X4ogcHM2bDBHHskN4J5Kz4sFvC4CttHsQQNkM8VysVzh9CcLEZ1xW",
  "key43": "wney9Xq8uuGPsG3RkJjrpgdT1fwMHgCoML7suRRKYCcYZbnkTJYtZnTgnePDHr4yHp2bhXV5swx8Y6Z1in34Pec",
  "key44": "4SAkhbpJwSh45tU9F3VceLmiNfERBMcefR8jD1SrTZfcJmG2vPC5Crkih7F6q497YuQB7b7PsNABrrwcuuWKDoRj",
  "key45": "4dDrEE1vgHd8yRHjfwRbQhfsqy8YbnbVoYRsrBQYkYbgqfnCh7Se7gUuewTM6LAPPwjf25RwYuBLjECcKxk1dQ6i",
  "key46": "2keK2KQxr6iX9AsM7qiQgdRKpLZ4PYbS2RCgR1e1sdWdu2KgVfMRjssCcUJiLsqQhBmE7f9MZxoGrYr8rUxEj7Aj",
  "key47": "35ZqqKmin2mGXNpWzKKywHTZVaR8MzPWDSwSke1uS4mcx7tf6iUjTAqv3rhgmndktRkHJTeFGzhcEmm7CLhBUk6H"
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
