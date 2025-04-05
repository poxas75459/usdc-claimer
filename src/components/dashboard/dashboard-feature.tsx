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
    "5T6mpEFHJJ1JPrU2xCtdsk8rdAbuE3bmcVLGDHFGewnUvkE8YHadpeXjKQ6uZZ7sx2AHgi4Wx6PtQAiDU21Lyznw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PanVRiCz7ziSjpNCd5XaHqVRpKxsVMi9S78RDHWTrAhBFkbK7SXq5ppcCJzgvZrZLhWZfs2eP5JaWyw6WsBn9RN",
  "key1": "5pN8ZnfcDTP7HXNsBpxyCj63w8fMkBwbLg35unGpUV4UChRHCi9KW1W5jhmq4Pq1ojoPEW9vZywQpdHtqUJ1DtXa",
  "key2": "5JvGE93zKaA1VA9aBNiV4uC6DfE6eJuMG5EdiRQNi9ph3oWfEMZFxn8tBX52XS2NNUcxSEya23cQEsy7MKchGSBd",
  "key3": "KsE1VhvfvTYawFWHeJ2nJ4AmTBBEPTFLbWH9UaNFcgnf1itDH14XrWP2DAkw5UoE4WNBqm6c5dcPRHp3U9CDcn5",
  "key4": "poUGZAYvxiM4FLF1DfkuXMF1uRUPQmQJZ5iY2ahHtZ62z6fngU6JHZWr5hV4C1Vke3Nd5CYMuDa8bgQNFcRwpfg",
  "key5": "5n9RS4qmRVM9HfZQS9EHaeL8Z7ANdghB93iJ2FUpiwiqrM5UFi2nPAEj3QXv89muRDsFhENLoWHZpW5wUPzjsBT9",
  "key6": "4EFjzB2r6NBvZHLLYd9H8gpPGUJTHSvRVmrEWEVJuBkci6q2LDQo2QzG1gNzhzHPjcBxQd77PaD7R2mM57WxFSAS",
  "key7": "aMz9z18z4xPyyTiJTV4iETuu19wEBaTz3ncZkQsg8ZQNs26qRmo4p5UtoKPtp8qnMS4MHBByC7kLekWZuEfL22D",
  "key8": "2VmEcA59xUTtY5N8kh7VsSuXAeYpJWLid5c6muUHyMwoo82NKtV6P556qvKBzVds8fio2Yy2rPLGGfaBmgxLvpoW",
  "key9": "5rtMuS837LRzFBJ6hFcGvP5gyPKVUrA1KTvEA21qEMyDUcsTs42kcoAmd8GrDQuqJZahkuMfTKFpDq1U6QgTZnsC",
  "key10": "5YgvNdZvYqGd3M3QtC4ZiB5ajXCD67C5zB6i3RNZmqT2KjckKt1DkGPxDA7nUU6x51HedvbHJFnGuET8G9Q5t928",
  "key11": "2UyfeZASHJgah4Cn34TveFk1NkNBrqi1XjvBsGLy1xG7Xwo3vjwVv73gV1Kmvk6ffPe3qdUNGoiCLY99uxVGv9xV",
  "key12": "9pVAdcjSCFSvxVDRamL4HhJyLQpcYLyLUG7KyZRegSPGNxbadXJ9UEHukuHqHaygsohft3LGqihtCvZFkxCosXE",
  "key13": "3rJ1mMNfEGW1gxxEaTazJa1eoXU44kq9yRfLNivMLVF3Gvrfxoip3prSJsncqn1EoPEnq13ec94hq3sSXYNWKwQP",
  "key14": "znBYLFfSMfYbyfEbYwaMPwq2K2qE6y5rjaj1SB3Apxn8b8h2kW4zghgh48MVGFSjv1vQhnRzVPnXkr2cNtARS6G",
  "key15": "2EML3zsqc3D5jPWrYdJdVTZksNryTGtznakpb2Sybj9NpczLa4BcnDuMKC5e29bkQrpQDTgAfKmRBXHBfik5A6E8",
  "key16": "5NCeVG8ViS6xqXNtjrK8wBeFWNsW5WXAXxA1H8No7NjSPLWD3NDJhFxSb6MZ525HF948Y7SQ5Erh8FVFbUKfgd6g",
  "key17": "3hBFasrNdzqMab5uNEFzkxDE4Xk3ZMiccsErzacL6PTAZAdBCDGheFbseJUyyb5o3N1rBHa6egwZYXqnpCKPov83",
  "key18": "2EsP2psSgRgPFhjA5qHUEERv8bkaubvHmGufSiA92NxXvmQbVLShyPjBPFcx9aDFfQhWskBU2bDBsCp413zTQLYv",
  "key19": "47yGAWaaMBZ62mDc2dw5xbrtwsqa78BHvPYvtbxFJwQftRmxsapC9gNx66ckka42bNjWCWuPsr5SPXNbZBfauCjU",
  "key20": "66BSkRuqP5e9Ui3X3euNAcMpGSoD1cBJFv7H5kxJSVtZwgYpYrqA6To9EVpvEZnw9KfvAnQ1kNu3iMFyRYMknzB2",
  "key21": "5SAVJwP2K7uBgY3bkGZ2UvAn9PskT41dcVzGT68bZupF62PmeXQSvWUPcviBWucRxUMUbnyYKvWDguNmcp92ZV3q",
  "key22": "5ENGhscSVDH7j6fzizV1VkvAZ7rTuFmbocDcmUFuS2Uy9fyKR7tPo9jd9Uy4KwS6qv7e21KhEKH6BHaBPMbfrjqW",
  "key23": "ZmQRoCyATDxkFEitS5ymHqUd5iDP9mKFEb8wARkHWT7K2379S5p1jPqEUVduNrZz4ysFmZw5S3AWmCuEmmxQZrE",
  "key24": "he3eaSAYswwcYzMCT8nRzuxVavkq1SskPWTBcWr4KFKQdyZLruxjHWi3YdYGybveHpucXgs3MCfhnSoSiXjrDA9",
  "key25": "3eb6cZTrrF4sP15NuqDHLKNyvGvTooz3vfaQ9ixnsxRdT8PqFACoXJYREFfXuhM4FYmoKrqcrbnHJZbpTAzvns1S",
  "key26": "2BhAANxxBpuCkHxN8EjRwEHnVozQQ54Ya1Jov6ADQZJLip3CoQgsmZ6bGTnw8mhdY1wBQxumAXisRcrK39BJSmHX",
  "key27": "3t2DdcQ2du6vhh1wEZRe1cdQYg7PPpWX9QoFQspM5jEH1bPdksqb7cBFepCVR8PrhpPfRTBWgdmuiG9h725XpvU3",
  "key28": "4pizphGEFgCuqnBjYgqzpwX7b1Y6CEGrWFWLhec1SN9pt3e8WEJYXk8dSi5RwLn7g5HjbBjeR8siVyFTchemdq64",
  "key29": "4UerqMmFvo3kCrsqnSpPmNYEgTBsadpKogw7xfQpKvKoiwZWnUyBmWXYiJDzkvDuvofeB9XUFFkWCkz9tKgSYJCo",
  "key30": "4SeLn9qWrZBguodPTxM4ymTMdUnzyEhFGthUotktMWaSV8CSonkJjG6zGwkooZRW55JgpMvDDDe5TzsvcKL4aCsU",
  "key31": "567Q95h17ehDuKBnHdFzJ3krLd7JW1hUJJo3XBi4wTRN3PYq27rkUiJ8LVAGn21T2WNpVBK4nkvyioZtuEuZUzVD",
  "key32": "4jBPaN3MiuxcLK9CgaeWqgWc5rvRtgjGSxK4WM6TM18S7MS7NhkECrSU4JwEHkCVkDvWYcWJe9JgQQvMgVKATEHR",
  "key33": "4SJbCqxeWyYwJR8W7RuS1JZ6Mq2jK1u4jdsQJWoa3JriiLV33cddwyA63XK2LMbozXLprEtNGbU8UDMNGgouCCgL",
  "key34": "3PKh8qbZ3kPrQv8Pq3UU22k45mi8hCQdXsMwBuxU223HQKCyMLb79nnsG7Ni4Tx4qoM294c6jDTGHVNzCdjondsL",
  "key35": "5zjzkuYFjgcBcPKi6kaARdHjipoUe7noHZZKnA3wc59YFKoUq46yyLFpB7jCtLamH9WoRG1R2DoJfKpqNGVxiPa8",
  "key36": "4GpFFw93sjU298vCZwjQpGgsQFuoB4oNuDuziXTWdr2P26e7tgfhK2s6bXyGiEUyBZWVsR1urfpZDXWLhz4pCiyy",
  "key37": "3Qu1JWARy5TGBRQRG41Eb1rwQEX4Wa9qoYrZwbs5nvCKjzpVN837iWrDLQHPGXghohDnvS8CRtc1dkzK16RKUrg8",
  "key38": "4ctAymW9WFmPLS3zvoRnTx2KC1Vc58TghSjeGqWPsCAEZW7qqFrT8RTxER5SLCETGXEYD2VxWiVhGMq1x6c4BFTN",
  "key39": "LZ98i9J3soxnSp7GNiCyZtEVUEtcFEXiSEmfimxu1HCobXYD4zGtbuyaxewXffHKmpiE1gqbPhzL2eCmVKh4fWA",
  "key40": "4hoEFdtRGtkScaSei1j1nnbATaiZ558dm7NYFiYJPb6PaGh81ZsW8t1WDetzttiY6nsEU3ByJBNjSQrjS2ab3NT",
  "key41": "3MD4viyHHGEtFBVW2oJcezQRkXhzJZB8Rnv3qd7RxNGWjwohpqeMNfz94RQwiWwGmDuuWCqaARTeL8KBtQpt1a8h",
  "key42": "jYsmTdzuou2uaAtGvJ3sYDnfk4c8tyxfNHXMYQFNGtoXhhPcBaNaQjGgViwrhZFRBW7jkCKHnFm551VuHsCT8Po",
  "key43": "5eTtp2RGhFRemNcda6bV9z7u88YDo1VfW8okTtvyU1WZ8YikvfEqZDYag7BzYzwCpD6wK6vTg2V6BR9veE69Shio",
  "key44": "4JTSUV5pUK2zgdsQehUFCP5U2zujBdy73MdpGF93xmDwN1CeXaCnSfZSSiQYFSbjYLKXW18M8B6ampvCZXAoEWqj",
  "key45": "4djkNBCfzvePxWE4r1GiGZK7pF1pTvAqSP2thsFF3Gm2y3TKax6vuVCe9s3BoCuxzthcHswGrPiYjwyzm7JDHg9e",
  "key46": "3SLCDF39tBwjDb3UV9JGNpFeFQ3CXcWNXT3b4PsjwsuGfRBftnCRfZo5ZpitKNK5Ancet8yGuiD2U2G7YbbvW4bq"
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
