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
    "5tJHWWTshYanVt1RbVRs6w42QTefQg6WfsdGHfXnPCAHrmgdN59K9egUiAqd1Fv9E4tKyc46xJEry7e9mHa43AiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t9b3UTCfxsqytrnuNEocTfVsAJX8fPySU4H4C1zTcuD3m4fUinJPHPK7ugqSL46ah7AVEnQb21FW2XgBT6HwyUy",
  "key1": "cPrBCFRu22y3y7Req7Fd9N4iXqWF6WjR7KLLZRiPjdyfsG1ek245FyHQymJLYvAXyrgwVL8DxADZYAvqSzzGoio",
  "key2": "5AYWdrJXhaFEvZkF42vYjPyz9X9EasdBW1nHeFTwrU4w51WG4p8EESgxG6Zb455apnMscYiWjSUpU3fuwcJQ6LYv",
  "key3": "2A8BFvzaZVkyE2Ec32a7mMD5UuhbtNEnaVYJkKbqZfqhfpz3hG37nbp1ZNrUPrpc1Uhw7e1mXkjiRuZfa45XWBpT",
  "key4": "2DbTASBpXPj1VUnKuSe2gpFqcC9ME5DHnyLmKMdbt3XDV9ntCjMSwJ4CPybMqvmUMMAbc4jGP8bRvXVkNkp3gQeg",
  "key5": "5ZWEic79xoMrQ4iA3drHbzRg2o83KfEGNU1wBsoXcLcG4KaSnhwhfNSQzdcZrrd4UkvxwuVyDZyTBqmsf6Gjpz4A",
  "key6": "4orj2pQJzE9J2iDLjtdo32SQSZcQAkEqwif1tHdmyDeGhR1WyXuRzppnM7ujcC7M4cxujMSGWpR5Lozfp9ip1k7p",
  "key7": "4bz1f6vLgCZ36ADYbLGspyQVndxMRhKRaAEr9znz9Sup2MBfHSjcWmooqLjAe5hYvhh123AEF6yveHyw2couW6VY",
  "key8": "3Q4mYxqvhka32QJyWdw6ZzBRJ5tSZSgcmNwrFi2g9driccJJdNXEkw6WZ5MnfKLvhdrYSyGyxScJJAVMG6esLWiQ",
  "key9": "5of3vGxas4dYyQTxcJwPb2hudDCSYKGKDf4afDGCGv7chbeuzvTjjnYD6rDBxjMME2fV6PbdJFsX7uMEdcUE4ecx",
  "key10": "2WwDRBp8JvbhZnN6MfbPsUZe9WR4FUVsb53QNST6ffVhY6d9YYTYLDiTHBQMiVbPfMPUMbfQ4inwAqiLukqxbdRy",
  "key11": "4tQAh1V1pUhYMRffiwESgQwWDDFLsqQWGHEiuUxqtFKssxRJ4Ewpb44h28UXPdXfgDwiALF8Qv3CGU8GSAPMFvZH",
  "key12": "29kvZrKmqRFvRXQ61r1mF1fVkrwZsmcxGyQoKDEvMq9xDXL2CBMpyg122TnTL32MU5covGvrdfrJC1uYMS4YNE1U",
  "key13": "324ADcerf5QXf7wYUDgwqENwZsE9d8FFS1Xg9aJXV4T6q4rAP7vFiBWjDexXyaqtePLdUsSgHQvG4DZB8jU4oUog",
  "key14": "wWoDd1QpGUAvM5tZ8Lu46eAnRBSGHs7MDZDnnqZR4i5ahc8TQwPKXSZhK6HnXzP8eQF9QhbYy5mgaDkjkjx9Xrx",
  "key15": "4bx1Dyfu7nYdhhDBAUh1apTuA8Mvr1qWfatpdvVRquaf52dHaQPXJjcsqg5gWKVAFNXe1kTonz6Gy2x1Wf1EY6gx",
  "key16": "3q4sazJH9CkQzkVP5ZjCurZf1aWrHkJ9YKt3Rd4hY3xtLit4ugFsACL8dTx3SCe3o983tuEUMCMVvtV1ZrpeJH6y",
  "key17": "3X7NEUosfA3JqgBVSgKHqZj4MwNht9BqubToWbXzn1XqgWF1xu9NiiRzFJWs2kZJUArNeE15LZ9YJNuYeaZmNyfm",
  "key18": "2KAwFZM7ovgKDqfgoEK1fz6bnomREzw6xkrk6DmofwCpJK5ST9MXu4TYpiBCP1UTTgKtD1YDLxR7KA2sgatBd1VE",
  "key19": "4Yn9fTNQtDpJaZ4ZQLVd8ZqEsKHnbuwXRoPGXuYt8EUeHg685qEKndNX79Y7G5rRUTDehJ69rqdns5YjDDojxMiW",
  "key20": "bV6YPdPzEnSGa7uSAcz3fmAeY6Y9uMZtTXuKm3ccavRqTcKAiTG8BxJiTsF7dGqeuSKq2pULN1UzDBcCDGEVyMr",
  "key21": "3jMQ9kgFpmAuzHWH2XivVK58S6YgtGSyMHXvZ3oBHKZmyaMowJSsxHdvcZzfutf1V7Fx7wi4oqzRbb4QKirft7Nf",
  "key22": "3VSbc7pj5gEMoXjNprB9GGufDFheRNbapDqvRdjURS63GKxazos8oed7YeyxKEbxeYvwvvQ8PR9deLJngx59Q9jJ",
  "key23": "5QxSPowhtDkicf1L22oR25VpsTYrBVdZc9Vo2gJzskqR8xyNPxqj8F8B8HVdikZxucEy6i4tRyRq9WBrxGruHjND",
  "key24": "2wQrV8KDHS2iR33ERG8VMVxeC8oH1x583XmpGS5fhTX3rnWwzK4diJSfkwg17RHuvVGNro5FmASuzasjgDJURHsh",
  "key25": "4dfYu4ZjaS176VeHBJsy5HAzWyr4BMUAAKT84GFMaxBF65rR62eYkHBcnGUcpu8JVJDwpE5C1vzCqWgLFeBxenzt",
  "key26": "2SbYeoKc1RpsWo12BqJaD2tMoiegAxtoobDuyuhn5DSHuxM6h8W8GRmFeLGKUBqXXSFH6KUFASa9TZQhQKScC6gW",
  "key27": "NTGiCavB9ByFUHAsgLTejEX4sWH2skA1JjdWkyPcdzaJcCjuStx4QetMxbHh79bJPqs9iqyWgdnKcbCUi3YAzLa",
  "key28": "2PR52BUyjUF2WEo76HTTaPy45kscbA12bapHurVsHQArA1xKYabHSJsw98JDZFTfifzg61aYXUbbXqnZgCJEVhEG",
  "key29": "3U26DN7VczY5Zx4GiUzT8Az1nRW4iwELHXvSGKqpRm778JY9MrpxLETqC8z5dJtYzZWPp4NJsjrfZ68pPrxCkV3r",
  "key30": "28ezV5jwWZxC6NGwQVLNBTZD9msPYap2W474GKBKsYh9kui7ZkKLdFKsT5Bgpg6HJ1SYGMJ3TkJf9Zy1VnhDCskr",
  "key31": "35a1W2U6YGrfxtnBU6HvtVScGy1cM4HzbowfVsLzRegjKxuyG8mRshNN71WtACLzAxeHYEfKdLtVBDX9sxcqvmTJ",
  "key32": "26wzAnn7zPCbiivd58m3ZxP6s1pMyNfpmwcbWS2TRamwKT5cbdjY2qsZVTfYp3TSpn3yuMNkKB999KTyFPrh5ikY",
  "key33": "65o7aYt2qC1wVQuqVLhnyRHhwc9CkeBTuXJHGMhuquJGRqdfHBDHRLFDk5B9zK1qRG8fGzwYw8i91unXfZcMzHWt",
  "key34": "376GepAMx53Vr8drsxpTakJCLCBKoHGHxRiqoRKp6LQjFxJ17Xit6bvUfK32A4ZeKUad8mksVEaiWtnqroFGRPtn",
  "key35": "34rdr5yDyWk3UYQzDizEHLGB7Rg2reKNYc7yqYVqXoFa2rFEG7x1baWkQzNXgaToQbQjArjnwWcK2b5dtDTmPcaN",
  "key36": "4Xvvsx4AyDDZmFeP4FwttSDQgjjMcGC6NeZisKcX35AGypE7xwbxtJssEf2iZx3u1BPPS33ganVC7cMkCUgVRk8U",
  "key37": "3rY2cooWcDjup6hcGMbhKs9nVdQMdQyu4AZSRDrEcH19UZtfEpePBo8p4EQmqJ85dkSENCzwt8KFaxus95hP2QSw"
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
