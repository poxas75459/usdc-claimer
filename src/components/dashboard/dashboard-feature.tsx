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
    "jdP1VByRUuZnDGxGBorFXoEjEc3Ke7UxGmUkizG1N3qfirAsohiCVANSZZUFz7nB5ECTtFYMtYSCWiMsRh7WZpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLMts2XD7TE41jiaNMowQpXDyPLm27sJ92bzjXt5CsrSxGaVJyDb78hdfzruT14fJQeog4QNcKfyGtC9fMVdcwb",
  "key1": "jXR8WtU5AD1LVsPnZN4a2SyETH66MZqh2R2d2Enwsk1KQRMXbo2pEhehdzWCnxLP1Kt41EsocSgQeKNTTnUvWQH",
  "key2": "MmoiToc7uhDbNWD6bkjb2FDdXrbEVgLGzaDHkkyZ1wwHebR8CjSktJ8146SToRqTMrVujEAwjnUzy97EMwydHDx",
  "key3": "4vjGtiu4XGoKuHFBacyiMvcgEnka5PhCW7ht1o2nbrEpv6txz3x1r8V4wjLYgG9yQ5JsJ8tVxqwZPHyPfYimK1Jo",
  "key4": "44ZvvSTZ9nqJwkiN4NupChBcYTmf5fmbb5KVB4yq42E7jHS1AuggPQpaJnnyCodFSrUsoXd9PfPYJ8NhM6kqZCqd",
  "key5": "5hMdr79hUruWcRPsyyWq9ybBaJq8Ha6UJWpTC2nyNCVBCsdr2enkTo1QjMd32zD8g3SBB6mU9HtJNyPRN3szYRwk",
  "key6": "5kKoa1VFibSFSXi7FnN4gDZm3NiJzTNJvLyQAWEmpYtmeh1yZpAGN6DCPZtSiCdzgBJqxA9oBAjvwQHyiofswgEt",
  "key7": "4bxBCRZKaoxovRSPxSXZRb52Nf3vKyxRbarXDcP9p4PnuhSJNSARC2UM5tCi99ao73s9dZbvybwjxcFhfdH2MQjV",
  "key8": "5Wu522s3UbFLdHj96abAhuEViowaRo7TLyvvTQ9J3L1f5oGpWSfPbwKM3mEE82qU6Zn6JJ6VZweMp3phejepsc6S",
  "key9": "4LnsvHUUGbqTAgYvios25ZaMdVwhkuHfcxjBT99KDifhNEgvLJ7orQQy42gGKdUA2g16P6566UMGAG6T62NyEYLB",
  "key10": "3gMJWnTYmaTBm1EwTdotayUkgM71Z6yZHdGN4qxXoJRECTd8xcKTNzrgXgtjdZoQDNCpsdW9JsXrrXeGHvPtdAw8",
  "key11": "5aBq8a6axebbJFWYEx3zYPRanictoDcHWZ6WLSHHcjRqgggEhe5j5QeLNSUXmV1TDaatkTYpC4yynUYhmJf3TYxu",
  "key12": "5qjZc8Z6R12mv6RGzvTunDpGZZkgViMqM16A6bt2f5zBBq5u3zuxGqiT5KXPTF5SzK4rhEmXK8jqGHsKPcD63d3Y",
  "key13": "3Sgg2zbpaxnZC3sYBqJMbHKQLasHgqhnqSofySuyXD2SFkwWFyzskZ8FyTakpzqTsHYEWHDdfGiMWMfBPVwJhMW7",
  "key14": "5gGz3mYSwew3Aav2srg9KqdJLHE5o6D8JYMuvt5Xyd7zn8tbXhPKWT5UJdodA25aNFwMMzeiy6yuuF5pX1kFMaKL",
  "key15": "4ZFZgdhMiw3vvY4LMH6cTg8QJf2eCeXVCHSwqGSzBoGWEjLqTJKPhfC8pEVGNCSiveQhda8WWPwwpkwCmKRxioyd",
  "key16": "5KaucxkxvHNM1pEnHvQvBmAjVRhUyTMhahTnTqCFAKKbvJKqVRimGjVSkCHDyZrUQQGEGAp4EXMffMhspLPLTaPJ",
  "key17": "5uhoeorm5QdkznvWBHb9LHA4cAjbFRQKtMhdjAY2TPhihALfcVZP46RjeWeAHuM6zE3k34HUhQV8CvMMcuaBL7UH",
  "key18": "X4c3mdXhUqLKiqHr3mTSk8d33Xk8c1vyG2M1YKQCa4f9cLEXVVMr28A5daNMnwrcDGGmyrZcPvLVWqzb3S36qEM",
  "key19": "5N3GYPY1t4tfMTEivS8fDCZqwF4SAyS64P6KQaMUkPM7pnYh5WR8EBn1VrLuqZnJoNCRSwWv7xNUoL6GtquW1wnv",
  "key20": "2rVKjV2grqJcxHoxDJ5Qp4bezY2U4pYouy12ZcVChwaxwvzumGWtntJesYdqrnuQS2T1SFumHonAdMPwd4wj5RG2",
  "key21": "42jmtQvn7fFxWM5CkQSMd4JfxUfLnbSFMmXodipwKrxLGb53rrUZsKZqyYgatcYcy8yjvYVwC8HDQAYYHVKBLKSo",
  "key22": "4dJQNp8e9c1cZ5KvtzRKrW2jFm8FcABxMJ8PvEExD9HjFRNKn2EpeZC1efK7ctG7hSm5FG2gM8nXj1h5F5Sht1aW",
  "key23": "31ewBe7R7QEgMHYXndf5LyYq3Ad2Bn2GMjejUEp8SQdqy85tuFp4AmK85NeNDd5cukUPuqWKiX4cKTWM45tVx8uY",
  "key24": "v8feE78UVcp6uNCsjy8dKG7S3CLAuyENRMeagVfSfjDgg8gJQEqoM79sMnzxWq2AKJ8i7Cy5gscRHXMvfrKAB4c",
  "key25": "2dmPNzXEqRFRXbTWq7pam68AxGHkiSK5JckNDBHEEUwyEqBTtFB89G3ufR6PbzsMfFJSM43pUTNoZgQtua6LYMvV",
  "key26": "5wEpVdxzevdxoeMDNoywCENhroDMVmdYyVXYBDtB7x1LhJjF4C6KoWvCN63bsmw1rwuwYxzhMWVbAHhFc6cMorw5",
  "key27": "21tfkLv6SrsTSjDwfF9xwhWfrN86jdGYuxj51jppGugBWGtaEzJphh9HuiVjVBfBYqNp6J5kosGdkEEU8k2W3M33",
  "key28": "5MYCLA5Bv1cRysr4jTjwxXpo9kFovx7KFKbwb2fdAy99UkedzUpFq2wyPw3q7PYGWGfWHarfCxbdD8TQfbguehPW",
  "key29": "3U8FjTyiReSY5HjBxbhxyWMA2BkMH4ehtisUeXA6NbEhB4S6Mq2y1ioPLboq32Zq7L37PQPdke6nkLTi6bhqdkMa",
  "key30": "3FHyQxturf1H1BwUXNdHREgj56nW72aEdEDSr2T96CTPTNSmvz28T9NHxYUssXX6nbXtsz8RvHxndFBsgAJfa1sa",
  "key31": "4pS8YHkoxRYqfvAJyZe5pfKNu6smdRNvVjTBgtESEALmDzFz9hQwKqj8gYJtHVBKCKtroJh8kZsPmGi9gibNfS1T",
  "key32": "3k77MgutBd6NEUueTbnBBqWdVUCNSQ5HnWQWdqXqhR8xk6avFZH2U5bJ5foU39o7UtcDcJQArGMdf1ibesP9mNq",
  "key33": "3ZKJ5y8taw6oJCsKR4AoDRQVbpZCT6QwY7G1ZChz4XxnSEpSAERYdtfJkN15o3PBkM9dfzGaMh3PAbAWmG9m7uZP",
  "key34": "2feeCHyDdyEg1nwaSK5oFRYwQAmrHRQtcGwCBxCftFhhY7EBMxvTA8DfR59Ugu4ngaRM1G5oR8B8WGg6kSKReHuk",
  "key35": "47PrFTugh76TJsUEKEzjeicxF6UyFLWRjGGRRviphLxtrYcJ7NnJKEXaZrYN1vo8GBiLTgtSd47TSSbd5mfd6H2Z",
  "key36": "2RKwVZpe6eZmVMyoYK7B5qQGc9Tk8up9giMnUyA2SrzeR18V8jJ8wKeKaPwMHTLikqijE17vA1msjBo7CqrQBxaf",
  "key37": "ryUsLeS8V8RKgFaPJ9f6hYtnpw9xssrxTTjmvsL1g36vHNL7en5pMVFYJ5JXbq7nTxdsbtDwUgcDbixE8ms37Eh",
  "key38": "2NK8g4b91Lx9ib2oZDbM2A8Fen1m1d1wDGToEvWC9JrS6YCsgfKmtbZ6HnbYkmQyj3rcq89m4KtHU5jVd4NQnG6S",
  "key39": "3bpkzaPJaTJXaXXnm6eDQayd7u1VJezTYa4fp619iMYVwzRZSu8gzkF8v3fM1JPm7VkMKo4NsVMoJ5wSWNBjRoeL",
  "key40": "2Ase4KMJfcjyvRsn9BuR15oZUYjeQ3oWaLrnJduLNBkPMa3kiNQwfYMHMkJs4A55D81aBwEWttvCcMjpB6Gm3KDC",
  "key41": "WzZ63G5KqEzvp16ceZxwAWkJDdYzzMdFVuGdPa73qqBq3QjE1kkJnNfR9nasqxt9hxyzw3XNizLtMZZnJfwrp3T",
  "key42": "3NF9cMsvmwAtD6Ye5wNuRkuEkXCvFGH5L6x4gYHQpkwT6X27oazT42MCzGykxYaTPZsxJkbgXpAB6DFrr7oCdfC7",
  "key43": "gXy1AeNP8MYrmwbXRhWd5GZNvJ5f8He8zginVKRK3qmJLE7f4SQtTX8VpnEZQ4DX5hnAinXTnCwW5ioNKikUNDq"
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
