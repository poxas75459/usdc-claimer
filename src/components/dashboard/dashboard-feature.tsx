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
    "uJ56Cv8ZzK1X2mhAcc263kHG93LbGAMJgxpZybXRD9DiBLVGTXW98B2vHuFjdik8fQknhUS1MWwhpi2RjgLSRqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C4yZmY3uuDtxdcBZ51RztwkfgTEf876xBtBC3XLEfrtKdP1q3k6bmccsWfwiHBdBG3exxzsSfHmuShqW4bgkFfu",
  "key1": "2SfwWVgGwghdS96njPrpRkk3H7NYFcURUTVGxU7n3YWvE3FbLHqSJM7ACEpJDrBcV1aHGfw2U8bXpuCap6FQJdgM",
  "key2": "3rvandMQwLyQurcWhcgx47z2ohebEYpqA6nMopcu3z91P3HvnfRZcYwmcYVWRQWzkm9EVWbPjGgTGtzfjjeC3xLF",
  "key3": "gqCnoVL7N1V3frLrkA9TCdGeyJL3u6f7PWD4c7PdgtbM7LyMsctgXQXi7mNTc8fWNv7Xv4iB77bXPuvRktFwLwu",
  "key4": "3K8r5XRHLYFoiBWedq8DG9RoScMA8WHvELz5H2D89E3XnkkeLTsWCUeT824hEJVJmJ6dFdespa7Hp1VYffXtpobh",
  "key5": "R118npuM1ETe9LrxUC9X39JHmzZ91LwtTrwhx3FugLQcuXEAVCnBuREH4bPicGECQyN6WFgKcpyCUMhvMUbERoW",
  "key6": "5Vso3covyYQwK4P1DnzZyQtVYMPNc5d5yuUuR3baAUPBridsrydktQCi5tUyG7qUp4zCQbmkNP8WRH5DiNtzmw69",
  "key7": "3StQpNrk4KgVG8kJyC5pBPAUpQcMFGHmFfjEhtxXy64BX5sn9jN5d5vvEHBnWefw3QTLPxgbE2Kskf6QWrC2ZQ4s",
  "key8": "4u49tPXZCU4Z8TtCCnjeSbjdbBawoyMbXeSwskoxyYackroxDaWTwLg42Birrp4VMpstuUGdg8oQw5WtGH9TZC9h",
  "key9": "rbjuSSVapgCYYiD1QcT7Kdi3Ekfbt6mPwQ3Z1giVXDs5haEdCuFZo4ix83wXnGDG8URTyJ2zrgLEv85Ssto813Z",
  "key10": "DiW23qhpVgDZaT6pu5nkRcwDLpurgsMBVtXGHpKD7wiPDQZb81tjbMGK4eQ8re2i8CXTYXnkPWAF6D6CyouGW5U",
  "key11": "4uCMSoYdiqgzWrrZJTnYvXpiEqazjmXmxEX5NQDpP7mRETpJNDASi56dtn8VGGXqW8eS4BXYR7PqwQvzjw91KTyt",
  "key12": "2VY9pqDmQGEwaZ2fNN4WKD38uk82d1JAyg5ASNutjjmN5hVrtgVUBKsuwmp5vL4yzUQu6nbqRgeU9mGSrHnCfLXV",
  "key13": "zK1tqsp7R2dS8NNzPVbq8jyfibW2e8TeYr69Hso7K4j8URXiWcz1KKXT9bcvKGfLD4HW9Y54cPJ7iRBq367srCn",
  "key14": "3i29snT4tC8DkC33ar3B3NU8LAVs2N1JjGuDYGeizX5ZnpPVyyRLwEWHQJk5KwikNGoE9qgWkW4TgaPTLG7eYUvV",
  "key15": "5qaikcgw4Vxyd52xQoZErkZwizf61XSbZybSYzGXttTDt18gWgY9F9JhzLnnzR8t5v9HYjombYSE9grFdj9vt92j",
  "key16": "5Voqk6ySf3BnwAvEHfpi5T1Up5eGmCK7iEmqKRhUG7tBYwqEhVae9HdKPRhjyH2W8FMjaemuDvS1PLa5WHWpt4EU",
  "key17": "26uCNU8NPR7dRMp59NzyKdA6PpyuiQGqJPUwLAqPzj3StBPVgvwRnf1Jn7NwmeSDYecDPm7BiubndQmEXvDTmJaG",
  "key18": "MLcAnnM2M8A3t9ZsbVCWhMjfiNeLbjVyaMNYRLZbwhCpL7it76z4jdCjA9LBo2UpPwoSnrSP8pXDDZma6QFms8d",
  "key19": "3yU4VoZyqgsBni9yF7qmKrPuKXRvQzje8ZXsdq8hDrYm993KzgWJ12315yjcMtG5JgPvxA3zWmUb3MU6iBVgGbQK",
  "key20": "4gppBr9utauXgKYJfRCzJteA9B3g7rxE6LSeiok2e4WaSv7G7QrsJeUH2JEU6MNgkYcffmN5bhFe1dgCR2NPdoht",
  "key21": "58uTFj3bUgLcRGn6AsNLh2B3jYTtuHu61mHMQ4Akf3Ds75TzWHxMWTVrWMq8SjPkucsdkQFe8f2avMWQbwW4tTny",
  "key22": "5Vft6d69x1jv3QvtfLgfgtwYZWaFvcBysYtSEtGtp4t72XofRzGjXT7ViNziJw9Vm3t5yv5tetLMRzEbd7vsP69C",
  "key23": "38WjWPxWkgC8iCSzdgcyyuD5AT3W61ouX6FWfognM1QjyBxRnV2SkZqasBKFWNsiwj6bSfmuAz8HpPLrfNSUso6d",
  "key24": "pA3mrcAZKsezLdr7YAzxC6D3qL4tcQ1LgmmvrhQW379Sqf7oMEJrvCJGtraD13yjAsQJqkRkNjocPqeRpJZoMbj",
  "key25": "Zg3SAneEgJsmoX5KooFNeJdV4RfUXvy6RSHiy3zUXBkLTdUeDr3vgadiXu8i2PZ5WT3ok5F4kCp1a6kgXjTFmFt",
  "key26": "4DrH2rxCaYa7HPGVKtvGLun2nWVAL7EJAPPrpAzD2fMMmDgmUZonYtWiJdSUbm1dzk5aSXUvQgYyvWbgp2hMfmrH",
  "key27": "v5TkVFF5CRgWjacDSD5RwqTA5bhRX6zhV27U9pbNhaTm7t7rq1wnZDmwVGbMpHLLmRiC3YnPH52VLtkNqcE31VH",
  "key28": "2XZd5RaE8WVQ5FR76NEG5trWCx82QmGz4gixF1tcMA9enB4bu2gTgSK2PRaeb5y9bW7oXXfoB97HAoqAZoNxbxrQ",
  "key29": "4RxTGfvsPLtnwQynC8QYsrgNnDkCq7CUBX7ChpbGvtaVrfFQxFG84ieWY3bmh8rTspBUqXi4LReg8wwgRAsChqRj",
  "key30": "2xhJuJbhmNqk7UrT889A7PyWuo3pAEwJBE3rhDf3kDr9mfYP89Tnjzge48AvNr1h1DDj8r6VmwPk4J6uQ7q5Ys5H",
  "key31": "62Su5Ge7eEfjKbMqpTG2iRyLS4AwEqBwFq71eZ97gsc9AkmXHt4az8xuQkodLDArp1yD8ipGuwpP6x9qCFShFCij",
  "key32": "G84GsJCy5We85TAtV5SWDuCQjihNDjn1H31bs5nS8m4BsPk1aybQL5GzwVNAyHswWF5QZKMGdcyiuau48EbHRis",
  "key33": "3Tn4fCt8TeGr9ExWC1ANvXQXXoJnFV3VZ6bntGqb8PfEjoLayc9ZDgL3j3rAEBb14uCUvGVc2mx3XfH73UV6NkoW",
  "key34": "56ex7KjykoMETqwkBLtvarweAbG1fBhd3kMtFvFm7rDgg6LuAFNvw7at5oCthctFonX7uSmQGC7srpkmpvbNSVad",
  "key35": "2SjgHc8icP14EEA3vu3aj3W9YX8zX37zpxjQavfRGktSGG8gpxtfH5HsLADZJQyXZ2SrVSuZNZVYo5bqSqp2Sne1",
  "key36": "4T1VscrzYKyWNeU8uVzK6Cbb52ewT6g8YqadmgPTJb4Ep8Vsnnotj2K52DL17Aq5t5kgXmHYaK5ZpNgMWr7nDYqt",
  "key37": "3P1MMr1vNnBkgDiXGXTPnMp6ZtehrJtEJNCfPAJYtW2d1anTgCpBAy7ovX2EhiTETQWYcwTLqEJdebkc59QcSe6b",
  "key38": "5bmyoovBtE6M9VSzd3wsQEU76HnBrPjH6wnAsyiSzVdBjGzxnFX49bBxwsUFeoUk9itbC8DGsR9jp1RXHvBKVYEf",
  "key39": "PQYUu87urJ15AvSx2TjWhuamZJ5q7Ai2rtGmkg5YpVEo8f2LzNtk3NLDya9oHp9CUrn7unqqoDZ9r6vTPUnZ13S",
  "key40": "4w6DVAyeGZCmE8P9jVLFFS9bUxYCGT67pJcLCwxxKGXEN9X2M8rytfSTNVmMn6VGJ3hDSkNn2QzGfnobWrGvM9r9"
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
