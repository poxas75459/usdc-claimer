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
    "5zg5aahmfwMN7VU3aEVCj5HuaWA6P5Z56pE5zgh4rfqMdtoBNycdMujUUjpLgYi6gQmN23W6SSj43eEEjbqJV7jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YhYYue7U5mZhmwfqYgsXhd75fAEPs9U21KVrhguxdP4KrXruxgFNqM15LGDufvfT2ccRNJkx2GgQ48FRiqWn2ff",
  "key1": "2xm1WMFomVtAd1zWEymidT2xoM88hzupLKp5MdtB8couzYnkPUkQ8mh85SD1uo2AJLF7J47N9eUSAyfU8eCpcPat",
  "key2": "4gjZ34ReZeCLVCHypukULTTggVFdwG8uPsY4TuifVFCKeu7dd5UVVpyH6t4SuaZLrFMRpb8eapL2GEYQJhK4Qjc8",
  "key3": "2j6UXnV4t9mT1jZcLzUjivmVqp2UKTKYDjQQ96oqEeYeuuCKYNoLRGWTbJrx1ymGncWAghb44cE2t3nyuUMisorj",
  "key4": "3xpBeXQSnbNCmGgYrttJk7qJ6UzX9isiYjAuzRL6QpoFbA82RDUnsRpuwXiXdVxyVL6o6MeuTH5PRH1fkaLuHbFE",
  "key5": "2Yrcu2H6W3Suoco7zcxd8QcWihkjdSKpYJA9v17tMcr8upTU22FEGrXh7spvgHDHZR6gQSjR3kKtk8YJC6kpnHPk",
  "key6": "2skUFn1tbx32engNedTgtzwWNcMgsSp3LCVbwks8rUyFxeBWnCXQMvWxMkENJHnE7mTaq1JXhYAzjWXKDuc1kt3X",
  "key7": "3T2xdJgiHZgWMkFh68sAJHi37FQ8pjSaxuia44D5AkivB3YfhqPD4jCN1E1jy4cC9EsoQb4yKxaRAQo3uu4mg1jb",
  "key8": "3FTouWSxaHEs4YLhwaznXzmHuBDfhrnzk2Z6JBknCCgfes46AJTGT1o9K2fkS5NggseUd2Z1C8uHJeYy2fGmoULh",
  "key9": "DsDkeBLhzTdjWeRSaiX9ZsL5e5EPMTv1w8MgYq4tjPVZZWCCMFQ6rRUgyibL9Ji5f142vXtgqp9EsK7VRWW7JCA",
  "key10": "2jSxKtuzb9P5PmSBApoESHN2qwZBNFScuA9UVFMhoR66rY8Z3NdmAV3Sc89YKQPjif7435s2aUgJsr7qLLPG4DHJ",
  "key11": "4vUxZTf2YoLQE4k5cyUUZUxiCTXNujHBt67GAx2RUjvjjBxu4m1zfBd2g3BV3gQK1r4jwoFRGv8dLKQigpvCEKAD",
  "key12": "uDBfUGP8M7HFEcxLZ1w54xzuE72XapEPpzovgmWGYRfJFUkSQAwyDASvdPyGpGyNZPR5yMrxSnoijawAVhjMoCE",
  "key13": "56TVkG92cXMDTjSndRDHfsXdjsekAoLQHwEWgqLRa4iehUknSfYbDVwSsNrBxLucYLNmG6xyoYAGG5WCaxKcZaKm",
  "key14": "5geuash7TsSqyxhHQHwtngBgNEbbHEtFw2dMgURiV6VV9pQcc9T4iyGGxG3N6RupuB6rWrTtRKEoHmV8FuWgLtL8",
  "key15": "ue1L243q8Dsp4SeenSpLSYS7YQ4t1RFb8V3U8dK3AQsdX2Fcitxp1Xri4e7nATsRHejJy7KiLwLtBa3fAmzTUTs",
  "key16": "4aBL9XWvuNHYkVbfcp4GMtV3VAzzPs6kyVUXkXmYBHjfuueRDRqUuxBWggwanWxeAF19ftihndVLD7E9SzZjFNZY",
  "key17": "38ujMPcBaTs8hdcb8D2XwkJvxBohnHTvV69B2VpG5KGf8gBDNCELAz9KH8gE7oxU361bn3PCUdSuqHuMg6TVLRAc",
  "key18": "5DUdBxEnq3NCGS2MuN43VqWtpXP1JHXnxgDL6aaVcHuFbUmmj1xv87Sqidv5gA3we2unzCM6NfSxMNiMMD9hr1GX",
  "key19": "woMYMJ91fMvYq27CnBzYshEBDuexg5qmn8L3QNz3qw3mgUXcAuVnCZuWBBL2PAqGQZDtsmvoCeMWpeJSNQg6RcE",
  "key20": "4Y8xXj96y5STmnQ5YJ9m7AZ8f6NusyYmWc6shTbXi5N5dTmML7JxyRHc61N9wsqj23en6YD9qHeGAAvj5mTs4PLk",
  "key21": "1NS37wizhZqMdRwbWJPdZwfyN38DCdfJ4MGJUAU4nwgiMnB7H4LA8NWjpq6H3qsrhCza4WZjub67FVgcdB4xExX",
  "key22": "sM1u9ptYg8qUu9ugAiP9cwddnSHYviMPy7buWVzJaV27WBBPNDR18aazmpzSmgo3h9Y3RfK9u7SfpWaYEj8WN9Q",
  "key23": "5f8jBoUUEgxsp17G5NZ6tHntNxbkNZLyyrjF1XS1Qia4Kf8aYsbW4ooAjAjuhp4D4wrs8JQteSYiLwxBgWNh1dnr",
  "key24": "5xTYDj3DHJbRsfbVYrH23sBZq4SfJN6JcppBP53b6Lfb65c5EfQ9y2EGq6UySzL4rbCUuVZZEXNTBiGH3Lc1RcKy",
  "key25": "6382E6a5JJBzkDENgPwwxHknK3eHkQZVFUWVNipJzmdhMAv8Z3vr8EWWkxzpur4z5Q25cXqWrAmnQXHHDtXhQCbr",
  "key26": "2umScPFfDSfcz8pgYUCp7ZpjE6PewWu5epcYVPtwZQj7FwT7Ss9TfRtzCcuqJ6ioL3ZhsKEiJmfu8fW4ETQFQo5H",
  "key27": "4DPrxfqSc77ji7iVpcR7ZV58VBUHvGM87J6Cj8JdEhQgs9cHzNq3YPa6RFcB6K75jJu53HP86TgZH7NuPE9h1SHH",
  "key28": "3yQR2mSXaesBbJtxYyvA7PqhTho4nXSFHZL345VF6iBF4PCBs9cD48Z5H1Huzik6NZsjG1z3zMf3deDaEfi6R5H4",
  "key29": "3v5sNeNp4H95wDjqkKUpvYcxyottLySeCdWbmoEVHZZML1T5U9ETmw2MzGgfVZrPEGvbxvtVr9hwngyd771FevNz",
  "key30": "3JVQdAuxZMnAGrWkMDLPQKKTr9v9ua3jR17MGzFFPm2PbEcHwiSvzrVzFDDQCoV54dHhJ4DoieEJXngP9p8BMWxj",
  "key31": "5QN57ZutXrtybuxQBGK9nFut8JDZSnfnegMLvzv8mdSenF4JGdrpuqvKhDCv4TdBRg5JqGjCQ9iubWEnV3qxQCDB",
  "key32": "5fthjHc7vbjaRHYsjiD7cN6WPtSswxAakmCyHnLoMs3anxPGo5ERJ1ryHGoWoW7Zq6fkyVDXszYsqKwDUPBdj1ot",
  "key33": "iUwbuuxV42Wwr8EHxns6DWuYvmx4MY2xt8Md6MzRUHANnhnQsKizD1VjoLvW2dQhogHvdoNan1Cp5Xt2TXjafZY"
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
