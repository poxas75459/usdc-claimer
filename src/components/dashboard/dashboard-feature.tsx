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
    "477z3ghEFFZfu46stWMp4xhgpYnR2FXiK7HXLZ2Tjh4LMSGKtyBdD8P14noaZ9U9E9HKkYjfxA6Xf5YJbDN8cu4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bA52kGY1LTEqGzk1haUib3k56VjxkAzr3W5ryckxfAD8e7DTy5WV74Fcy6cyQ8CjJCCHFHsWKRo298fc8pMr5uW",
  "key1": "2swbqnFiw2wg1HHNeCNu89bnatRD9ip4U7cVEbWWjVYjJW1eUHcMY7JSmxci5byMXNFPQGb6p34YdsYMtxuqNsN8",
  "key2": "2aqUXsJPnJHhXepUMVpBpahbxVKMXrxhnZ4f5ikata9asuCSqik45toKG7SHDnS3vX3Vs1ugAQdABr9pwLkQttEp",
  "key3": "2mqd8qU4QhY3RK2n7bp7NiNH3Kif2Rt2EPQP34HDvSaNoveUniCEJTn7reGifJFMeg7D3me631imH2SVUiHTvs1u",
  "key4": "4X5sg4NgBcibPdNYpHytKAqq6gBw963gkTV9uBEiGoiGyf4mghUeuNbLzpCiFmba1cwuaUKpt4Q4mpQkUfvwvq8V",
  "key5": "2Pr3pbKA7sod2ijVTGyybakVUJT74LZEp7ZPwcEgCRxcuPW7FGh8cKzhizx9x5PUNvaWjCdGprQ4mcVtHwQbB7xf",
  "key6": "42stmSomhyQnajSefhxRowE3irRCbsCtAKGHhWFGCcBTyRKYptN2sDFobqNqKFFTXJEuDsDWgvPeZo2sFjDkXgeU",
  "key7": "2WSe4E9ymSoAkfdRC1heh6Ud7m5L5VwoHwjpu4XyFw7VznGhoM8zuTtXhag8YcXyQqREbyTfHobAXkjLzA6GToqm",
  "key8": "26YmgbVfaxffYeqBHX1t1pLPerQbjR7c4kZ7t7wZRk3448SwB4R3Wk5c1KPj1K7D5Jf4GfxZd2h2YvBm2HzkmuBw",
  "key9": "2MegcAhZQowqeT2hjpS68Co9TkVwE5AVT12kjuuDwDy2yhBh4Mz7L15Tq8d1X1urXTRaMZ5KkU7MrojvNanCiZwE",
  "key10": "5soHf93xe6aJHLcB4DnWrRfoDEFF4GPzrpGHGFGJEMqF81C1qvyzdLG6KVpDfwwo62w8JUF2uMusCNQwKcqVTvwj",
  "key11": "2zZqH6J7GFtjEqkzWQ97aVWU5nZ1adqgcn2qgZkyfMUfkMxahYvUjPuvuByoWtthLCvQQ3EgXuPZmJF4cmDhDcbc",
  "key12": "2DTQj9LKq6dxf14ZxsTs2P2AWtJ3BWAANMMKmtupTYCuatR87H1CxXDdEhuKDvhkhi3GeZk4GobpapyWqDsGTWvC",
  "key13": "4arMzxMBjwSsiatbTNtCsdG7jXTkzrHdKZmf1E4dNKf9orjb5tRdUzN2m81bMUJpF8Y1Eyguc7Wy1daWJsnYLJJH",
  "key14": "2wACJbjhiCRco5Zo7cPwJ9mmHgwPJtcEB6T6xSN7TNy4F3e1Tn6yjSAsHeyuBxr9C6fUG9SJPzsxMRaftkBdn4sx",
  "key15": "MMJCJ22YsjWerBz8MqoksU3LqdpH9Vvu24aK8H587m9apGod8TWT6wZ4EJ8nenAa618uCnKBZjPcn2jrNf3MTs4",
  "key16": "2Jd9fhhZRhmo3icGSGkWMpkJ8wuMLBWvjiYoCMtCRVBqUcsTkzFTpQA4ngZoe6yLDBxWoPLpp2V73QfixpU7H5p9",
  "key17": "43rjCsuWnPDUJn1WAa2Mm8ohvcNTgP4eG1tFNfdozWzq7CnUbVBgzM8PQNQyKzXBkjVwYuiMvMrcjCnKeojXGFdC",
  "key18": "6wBVjMqqtL774ntWizzhWswEw5ATrdifsNVEat1Sf3H4WiuJk48aTJYivrjjnak4B36rbWNYrLJidYMZyJkj7b5",
  "key19": "2rbdMD7ou8fxSSSM3dGFmk2gd46h3siN7XWBC4v3DLwbyXd7HSceHrDah2v92dnuhWuiNqeeFkBTmW44zn6yHCJt",
  "key20": "2KFiuTbMoR8aB1MPtPbvagHX2eStBjMgjsXrsmz3gMDtJp9bWyURK4HDxbA6MeCL6NEDGtMZyTA3gUCLLorEoERR",
  "key21": "53hoPrQEWoHFiciw7TCTNLuzbTbua9DvJWZw6riBnZr8D2d8ENTVZYizcmDcM5WbfB8hbdJ3eYtPzqv8ZYooz1wt",
  "key22": "4HgWhDJo9Ue3eYySBpnaPScCd7F9LXWL32kKB1tZ9ZnT3zTEzZSUTnUAyh2dvE1gfzJuAV7qot3HFfnQsRdXDFNY",
  "key23": "3rYCzENVfTbeT2VwukiQ7c6LLjz8UobZBZtRH1gGEuACDymHjyu9QAAeMBgjNWMUmztSApStMtMCkZuW9oiea2Ei",
  "key24": "3TW8RnckgtGdxijwb2T5rx5sLpLKH3nNQ1iHckTZx8BBGPpMsCiEXjak9sGJ9FvDGSwVRoKHCn3jy5fvMxAotRYt",
  "key25": "3wxP7tnuN3N7hevxjYAk56rgVHoSC2vXPgn8AaqUZtFmwS3qFC6pbpuC3fNGiq4M5BLSmidUN3v2U2eg4J34qeBX",
  "key26": "Bcsw4GYPyobDbVheiWZ6s2yL5oftPyzyu5ed1wJhSDxXqHazn3kAdEcDLoZyd9WVVsGP1GogT4mvvTvbGAycicJ",
  "key27": "4tYQyqKGHP7b5NB7Zs9sgdx4UBDpPeNJWRJ7bKQH874Nm2jRXhaUP8ABjBUcpHR5uH7gLsGc9WqGhaFGwzgViNff",
  "key28": "5iKtdoVTLUXiH4eQF4ATkTVoS2XFmpuNnE942qzkyTn82XyBvURFAQ9fTNQab7yeY5pNWjBzRJe4TsUbCbyyMbLG",
  "key29": "5WMHxqS99ZVqK58Lrw2rBPTGsxJo3z2j7h9n4ohw5mnCc6px3SawuXjGnnEXJEX84mq8cMVa9YigcrZa3X6Domev",
  "key30": "3d8BRDQEjc3AfistexMtDY7mpVTtEEJKot5SF2T6zcZD15de9mihYiZNSgcY1odt2bmbcSRZdWwZUFcLcHAqJn6o",
  "key31": "Ur2LvcGTCG9NdH4fWT1HSbCz8fyAKnXZcZAZdcFuhD2n4qpSgLDedFwnR9KeDTCqigNbY7qXYPfNXLz1ZyrFrCj",
  "key32": "5KN81tZf1yf5UmrBt5FdK6riC6DAoqDh42KqGFFERJpNxyTCfaSuXV9B5yVwySABCFLScWx89bdKGx8CD9FPkLrC",
  "key33": "3sF5J1KJDpTiYkLQYzKG2DsXN1oEg5k7R29L9srymXvpAnQWiiqTy22L46HHVQqKfFkrC58QWovVdh8FdTGV8mxg",
  "key34": "3sZtKF1gRhvecssZMyJCX7aPDsbqWRekYNuBgnghhxr96XrS39WExWCNDrvYpU31Xwb82fp28ptkwGvvmvmVQiyU",
  "key35": "3VwiaM3eq2qq9EWQdqfgpmWWMDUWUAWrLPRip9CEBdCpHTy41M9max1jfP4t9KD1SELkdiJWUJGf1ziXSAjsBwyz",
  "key36": "4BuGqZZ8A8jHLvB2tydCAiqQqEBaxHejEgTyQMkTzojg2ExhNjX74YLLZyZbTB6kymoG68ziRZEecMZubsYPChEb",
  "key37": "65X5TPESqaAkJV5hv6zWtcPpidYMJMz9SobqGgfBkjCNBEoHxAbdU2gePZLKL6eKFTTNhpXoEVboHdwkYbg3RP6h",
  "key38": "5MKF5WLLdECELhQqbBqX1da75eQqb8eQYag3j4iSZGtkWvjUEZeuYxznwi31F4MMVTjkPqPvTCXpfPPZxCJ8gsN",
  "key39": "5syXSppP7nRdGHGimekpRbQEfCFNdf8ePZ8aBajefS4VqzNA33FDEMSWz74aLBG8iJ73xWhgkYZgNnmo3vUJXVU5",
  "key40": "4ykyCHUqiHRdrG8NJ3xVHjoLbC26zajKuiQwsVPSFXtEFxKgCfRekXTQvJe3vj7Si9nQddtqXVX8yZa2ZAozgeQM",
  "key41": "DVrMSj27ht8FGL9y76SuEGHtL79pNhCf4n6kce9RMDCnMbsuNFLeRYL83UVcoHaTyyAf8vjh4ASVtzMDBTV2nFJ"
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
