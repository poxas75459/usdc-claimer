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
    "4KoRAzg5ej3soEAhgGAym5fdK7xKiQJto1fDoFN66CU4PeoCSpmojUiv9cwzYfr6oPsQCfKVdGpjNsrJzSS5mxvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mby2s79c7dsePFGobaTdpFECHeqZAfN4V56oqBFxK5XkHBaYuhT2Pu1Za6rw8CN3cs2eCY3a7sTUnUQ3yGYHwdu",
  "key1": "5u4EbAzMV8fnsHaA6ufPVzy64HELqGzuB9pM4KcvuP2VrWmtjxsrReyPsYFYXr2bobJiojd4UfpyRVdkamYJh57s",
  "key2": "2tHQjSXSYpRoioTFtXd6RFfTm5DEejCebTaDAgkoWvnbzJ5H6556S3dCTjcxxYb6nFBcBDCfTK3hdv9t4ptoc1iD",
  "key3": "3n9ks8RwPGiTXcc3TM7CWwJJr55XTnumeWzJDxn6eyaPi5DB3VK2N9vpizw8sedhuFkzDBNAiEfowRfdYkN85vz1",
  "key4": "2Qe1SfC4Z5ZAJ6shU5yKvoKX4pFK6zyxuFhL2BMXzYbdyfFVHb3wUf91ARx9g4H3NFTvPqBVv1sP838LjDNpV26M",
  "key5": "3T71NLM81JHQMTy538uXDWJSPLxnsCyAs4yqzNbzwxF18JLfob3jpH1rywinEeaTb6YN3uifaDetVToMPbbBtkk3",
  "key6": "4fpmdMtT49YcVpn9S9AnCkVP7ZGpdw7ftefTe4JLV33pk2qkqmA3X4MEpDMmB2wDvkMcX8UiC4QCVwoKfGpRWQzq",
  "key7": "uCAKMvnU5ENbVFQsECwzuvzupqQ1gJFDAidaa8Erb6K5TB18RqdMZCS7fCia11xDdJM96fUK5hr2qM6r1eubufk",
  "key8": "47pQXxCiyrp34M6vWtHaamYKHxTRU62LpX4NbfpJryexgpYEmKQVG22kJk5mZHFgspSKDijAsD3ob14cMpxVtRHF",
  "key9": "scNRSAKNARZ1v5gf7wnociPjnek7KTPHUxsuHfisY8uTXbqhTRJUMDH43Ys3s9eZNMwphYpcsEHyBkHP2Mm3FCo",
  "key10": "5UtNYs4LHDuXTsW4a2TyDrNiFe134VyeRXzy7EXhecFaepEASKRGcKGygnrxPdHiRPLs5vaLLDv6AYXDPt3mCmsU",
  "key11": "x5ssVusfTtNd9xCpajQcy7CTEkGAeHnB1XjubdVJStCRh27FZqzGdKdzSEgRkM6DNYM1fZsRy8FGNHkeXJhwryF",
  "key12": "h7UimcRz3RvZaP7H2onwx5R9PrqDyjHjFotM6fFQvDmcUoaWELvbVuBA3NUtiFE9Yyu6ndDDgbwFwJpjJdDDSvV",
  "key13": "5p2tSRLQQudykJtrsLCFxE6xzePDt4XRyEHEyYBJTNWwzJ63sU78UVMPNhjZBjhdbcWrsZncU5q37HcwCe1wRG2V",
  "key14": "47wtYZ8BQGYQyZ1zDMmvTBR5Rjsr98KALsZhLzeALutfzzyAKAk7ojsz1uZLKBEbRkTk8rARoHnK3jRmcFa6ZVF2",
  "key15": "3r5Tq9BYGobKzakeiVJiqbc65xWJ3zEipH7DuG1254V4AQGkKvu2UKPqb2n8rimNzcLGTdxfx1SjZSrUAKE4BNk5",
  "key16": "LYArms79Z5M4X6MqCiDjQhjtUJSanDbNKGWgdBDkaTU6hM8B6ws9hhbtq5YKcAteZc5bupCqT3uBDuFpZJp2UCU",
  "key17": "56wWwB9PREBnqxBNiRA2qcNHgXanD9pRQv9UwnhKDmYKqFi5JZdti7WiDJuP3bJdUn7sSqxVLaTKspmsvodRoUEK",
  "key18": "5aQaRDhHmL7niFbCK9qrAP97sYkQ9jKoa1RJwTGDc7E3DQnzqVM949ZW2W4CHio5PT9vYpqjpa51DwK5GKw1cuec",
  "key19": "34oup3gzz6YHpNMfb2xxL4rdrHtm2RJnweuFbgSj9UwyFJioPLWrYoWpavPuT75XmPYCiZ9JDzMmDXwYjCMLRrtQ",
  "key20": "2yiCUCQmas3UgMwDSetqfg36JGWuMngh6u4dDdgUKpHL4rs7ude8SfwDhdid9DPHiSJwbyDLxme3PfJypRoqLnin",
  "key21": "4ALsyL3h2cNw1Rqb7dpEPKC82hEh851aKwEwgsaC58X35nxeQKw84PgMELfLADqX6yZm5Xw95Ve2Zj9NgcqNmVWB",
  "key22": "3w9xJ7q4LGwgejtp1mou5DNwjvNLMVEaVFzNTqEs2awvZrLctc8ALxgWwAMveGSUDYfXL7Fi2WVRi6ZiWBa6sx5Y",
  "key23": "krJjLBxi3gTJsArfxo8egu1WemSVh8vJB446efMzEfW3MV2ceGkNkhDks8wvetz5zkx4hc92VhJ8GJ2ATR5nn6N",
  "key24": "2TPTDffFqsgvBDabWcGpDo2uUPtH4hAFVmxcZon3rDajrCt7noUr61NYQ2EmZmaM8X1jcW3rkQSAkNpJfKi9LLE3",
  "key25": "biUggWnu62jViLig6NErMESmiCgq8RjYFS51DZjGDLKhvrpmfi2feVsBpwheo27rLUg8qMPue9C6Yp45sGCaXNw",
  "key26": "4SuRWLzK7iR5drU5oEHFAcQot3yKCjbYeZ4HJYEQxAUmC6arFdpaJ5be95BUGmsyes3ZFeNR73CVaJkSGBPA1pSo",
  "key27": "3KEQYKdNSm8crFf373EEmtggkQteVQaXyYs2REiX4a7YqgY1QqDVUPWrvtK8udchcqiZH4nMVTQpTc6MGGyNbvMr",
  "key28": "5jLUVsyXAqSkMmunburPBcZfTHhUKEUjyMYYigXVrvGesdGXBgFoWD5Q2xPk1fXe81wyKDyyDCPSrM2XroPqX5U6",
  "key29": "4jTuJ8skBMHHJwFnEkvRuhyDpojpMRc7td2kHWw4H5edV28UFqcZpC8PSp3R6XPqrUXkLnCC2NqnK81jUd79mfb7",
  "key30": "3UjMRKcQwQEpM15PQaRSpZpLwurBLt3MmWGptRfND3KWrwQ5SZJQxYTmUug7Xga2miDTvbPV2cVgzTgMfU6af63X",
  "key31": "2p5wMb2DpxqJETbHuX85uR4ELBPjw19SmhM53avJ8dUmfidrc3R2EzWLiuRYZnCuTTfMyYrDohnTPR8929P3sTo1",
  "key32": "2jT23K2PrqD6dj1FZUrn88wRu51mVGDhXHHeKJrrB3SxzipRFANKdqCQ4gZ8rjLKjs1gfBV6frr9zW25oCskNwmk",
  "key33": "4acidYzeW1fM5NKyQA94jKVinUsxuHhP8k7QSsRTwCXKxmbkNRmTX8gsVpFei4CGH5VYXZMoWcsgZsXCguzaKooC",
  "key34": "2srS3K5h59XDQqWVfmXtraRwAnDEY6taeN1V4Tj5K8QrKBSL7qL5ZVoUgxexDV5M24ct8YUpAtstxAxqDX9LDcws",
  "key35": "2mWZH3jQyCAdyJQWQA8prcGapjzm4PY2ksuvidBfqT9SLLLy2NDyxQyDQEoRhQKmh4k6MvA6B1aRgdVkPfEhWPWd",
  "key36": "4EZMokB4ky6ySj362eP8TMHxWBSF862RfrEto9UwHQFEjDVb7yVWSnC2c7pX9N6KQng9XwnLxrX4izNbt4s5TzVR",
  "key37": "3F6FLTz58YuKV1otQ2btQNe4Te2sB3qttYGRot1cbHq8Bhnw5jx4E94uzSwXAbfeJ6V64Hp3KJo8FUusskhmeC6W",
  "key38": "2qTPzQCXHnDgXzzXPQhngQKAubSGwYzrL1jL6yFKkvCD9HtyZsF7AanwMbPfQq1FiadVTngjAiNURSmQh8rgvcxM",
  "key39": "BgGxK6k8btBwSFqk3reYFSi7ufKY4UTh1TonYEDa9uAXeHRtxZbZ4ZovoryTokNwZRpiGNhLoXFPRHrSLbRG2xY",
  "key40": "2Bzhyyy6mnVADMQbmH8Fh2rgJkX2SqmVttGbnWtzXbKfEQLQ91kmy3sgv6obQB8YFtEtBPtS7YGvL52L71wDKPHF"
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
