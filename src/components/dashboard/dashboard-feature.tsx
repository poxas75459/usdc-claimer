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
    "44d6jezNqrK7vmFSfYBCgusy73MASF5vAJLQm2Dd2QM7MHAGpayNMjzejQZKQrme3y7poHuKttFCU3FLzRbaz4JQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gTesmpivg5FK2nmGbuWew7wkfmAiHYP9LEjY178nvssLsyBbRiUMguzVTf9LByeHGvVjDwm8t6xrMbckbvvMv6q",
  "key1": "JxG8njsijmsX6qm2XtxW8Qu1YvvhLzSBcPeK4f3YtV2TKzPRA2PZxrDcBbiUUsUyhxeQZAUG3BNpNsMcf6EVmLj",
  "key2": "3E3xEzxws7qKAK5P66RtGqJMY24b9TNhZFWZDVEFdsAoMr9gepW1xZBAfLWDvoEDFEemvi2TzgFGQGJVi7hboAQs",
  "key3": "51JzbtRdVEemu15sbSj5eXQt1BcKFAdVFugdozi3bYygMccz4gcdiRhavmcDTEBWqjQexnY3oWZxctTkHkm3cMua",
  "key4": "32nyG9cfVeww78tHwx9LV1iZXyKkR6kCwjGfhRGLD9xDsJL1McjWDAKBfSshAoNmhv1tBZT8cVDxsJLorxY79aZt",
  "key5": "2WKXKTmVmNZCm8QkcVyVwtxAfhBKKaox8PPUJWLL5eqmdrwLArYui1gc4cWzQRoDjGXPHe9r6tg67YfaMjPouiw6",
  "key6": "5B53qqS1hSRgQ72o9LU5LwCs5Awd3Z2TNBkLNC9XTKKjyFGd13w61MFtGeAoktzLXCHJUxBCMMnFskAgN521DLm8",
  "key7": "4F2mxgxtqKxpG1AVFxFNQ9rfacuikLjT7hrH1W2mD1hB7NfybwoXtW7WuqHcU7xNfPFF59oQARdyicCT1q55w9aW",
  "key8": "2kDfaFWgCVZHSd1EyMx6AYE4kZFTW3AnKzvxtwwnnBedY6wxMP6kBdCe5Zbh5zHrihNDiynb9oFjbvqZBbYtQ4q2",
  "key9": "72nEkX4vpj7xfveDyULBqMCbyxZbmumd7b7uM1hdjbPSvyfVAmb6o2HZGX78e4LivHtuPEa1ikKXyrCsu4VakTz",
  "key10": "5J4QZDvL61RJP6R4PMCReUHiq1C2nsjB3SkCGZdkXoGV6uCWYWd5EbTMiXvQL7MYAvCXTaTPt7UbursZ22F4k7W",
  "key11": "no3UP3PGazDGT7XJii1z5U23823GScmtJVYYjUBM9tS8H1jA2R56rsYeUwyBbpckN8wi1qY3CYSeHbuzTSGDTZU",
  "key12": "2kjMcrRcWLMdkyfC6DY2PcE2QHDiuaUbenxZdAdn9BN4N8To3fBe6hHHQhGfaEjdCxNNCFKRSDW6miTJ2DTncAst",
  "key13": "3Xq2dBou8y6WPAYxddrhGBW65bSF28KdS4ApxeGHERqtkE25pTbygtbYmqQ7MBR8SCVvaSdTKSckef24sdjb5VCG",
  "key14": "3Q3uNRurduCephmRNagsNdsFoPXZNbvN2rEJYG2ub2NTVybadBWHcLQE4rknWQ15jFVUUBkyHspMafjAVz9NZ4ke",
  "key15": "2YKL9LoqzCXv6qRCATodJZc1ZaRNdLM1xyEKdeueAeDfkiTioJjzKLKj3GhLXpDsizBXvksL8oeFfzw1J6oMGzYx",
  "key16": "3WictfG7GwVsULSFUGTkLPD3uqo3d2vahMjp6MFPRYi7gPrtXBctAQM691jyTxEuExvhSxWJqg1jPgXPfrjxhRrH",
  "key17": "2MkNs7LLWyDosYUEDS66S46JKqAAkPr6Q8cjbrKm2SvCZB42oL18sMXnbPZHWgEmDQkSUaUJvTiLXN4oDxg2JQuJ",
  "key18": "5TKjXv93Cv13id584z3rkeCwWzSdpESZ99MLLY9bGqvcFVkaNudjqPy8WbUYW3sL8jWwS9ARTg2exbkkgqh3AcUf",
  "key19": "3AAy7RQiAudwwgfJ9qN7QDc9VuKU4P2AG61QusPZpm727xWCyiLfTA1DA7XoRgoTWKEBmRwCThXdAff5qdL7mdD7",
  "key20": "5QcQPpcpDh3sXd9MTCKS6GpN37dRRzhiWV8CqnY1Uc7hXTaE3KsXSU9C4K4YAFvRhdjSRn2HJ8ZTQjzYBDjWBNCB",
  "key21": "2DBp542iKQ3zsw2oVEf9eB3RQhFwKhQB8qvfaTQ8T6NzQLJ58C8CyHHnFsogqxDShX2gzhvLrVK7g1kQ4hhErWbZ",
  "key22": "4fVneqsWGUmjE38i4ejFBhhuhx126Dd1GkqE3NQDXcEoGdvWYhhYvSwtAfzvWwCVn273WiYGwjYwU43BFuGq3dGU",
  "key23": "2RbfJfw4YqCfzzahMuVCcuezA75qaNatQJ6YRMpWBreh5XNGEEp8ZjSKnDuqRgJxGuHEF3etvuxJsyRwcbWBjNd6",
  "key24": "4q9Lz96dcgc9ErqCuynJfKJufteHaKKGPUgKn3PYgKwVuFjtX3sv3mr7xHB3gTvAFfueof6ap59VMBGPPtfTEBWM",
  "key25": "2fGBWFKpTSuLEHtfmQwLqhxC1YnhfokPFQd9WbryuVnXpRfqLRJz7vVifvTmZCb88ZMvAabgeT4VuiE9gr1gkmWs",
  "key26": "31jJi9ed5kpw25wHE7AqUJwgv3ZWoCPCUaSEejApLwHfGEojF7JgX3bmV1FcNK7QQxBZUJFZYEphDAiDX5xss3Nx",
  "key27": "34fE7AGytWDffkabkhgrCaeXZvWwZZE8wY2tvqKVBGx8DyF2MAbrQY5xN2qNJofCbEF1KhatrYwWTU6QZ7MLTn7J",
  "key28": "3J7HrRvigxo9V5o8GKiQYegVewqgCKog5xT3TvtptX1T5yzzjrq5YJ7mnkq8tKNHzZV1o1n5eE9mRtDFZW46LAmU",
  "key29": "kD2RsArgKMQkwQ9GgVmVVF9cy3z4rKHiRA8LBA7DkWzrfLuiVUiPhAtDhgD43fRimPE12CGafimWP14ZEgKRsni",
  "key30": "4X6cFLxWkYKTtcxceSKYusrKhpaN4jTZznsXqN8qqpC8X4i2EWBNrt1Au1F4gSojLhsSh9YGmpiR79GbhSuoVev7",
  "key31": "5oLhoDSJKoEdhnEuTsygEaEd6b7A1MXqNDyFZYeaHQQt4VSmGaqbJ6SjFw2MuKhLiuqhVVK4bUjx29Htw45rfQzi",
  "key32": "Q612SDuyfr5jf5bAzzspKNKU66bZ68GuPqVL6EHePZWvpKgN7BpySXMJAJKmJwaMzxkGD6FicFLpbKCcQ17YVaD",
  "key33": "4YWbwPtewKa7NVrkU8E6C1fY7vQCdr8pShE6S6VV2W7GqEUP9Nsw6zw1kwKMBpkwUYXo8eHJ8ahJw6HNLW6ZFssN",
  "key34": "34ex2E9GfaRBZXs8g3WqP8naz1NTNdbYzNzaPVMK1Da4p4k2bYk3P7EHNYSeTHL79ksQ3vjvFg2NnRGtCfFME7rp",
  "key35": "4Zcxt5MLbbT7T87p7ZndyRWhbhaKQ9N9tJVZhjhcnwD4sKjKvGiB8iUUC8XXPA43i4ALWGqt26WsdnLYkMHtJRLu",
  "key36": "55a2c25PRoBWiDGjDuDsrMnZFq2mnaapFd7UgfQvuMkV1m9xqKZx9zr5LZwSqw6r9bs48G78rTbNjfcjxaCZ3MuH",
  "key37": "5HbXnuGzAW485QaxniHBTkUq8Gt3txF13w1NwpoYdUFwnGYGQD141VGqGak13JDcN71ApFiF6mGmewSDXQKUttqM",
  "key38": "bNfJmCFhNgBkz8JTuQSF52QokMnCyoNziV2vQvUGgoUYtATwiUDmyUhLtYH2gL27Jre8LkywBfypmHWVzFaAtDX",
  "key39": "2sGBUcK33t4jkS16frqaVbgSU6t7Ca2o1L74gR1kScLHkG9ZvPdnozQtc6RGkYh5mc8wVVCTirZYWwkEkxiHkxDy",
  "key40": "2KqE6sigXbYCF5kbpZzCZVApQzRcknRxoTaA8LxyVY1CVKXWmD3dLhTj76zzsLGenqmPFMJ9GEsVHbawazyugTU7",
  "key41": "jm1CkdGasuCHHxTZ5zWz6pcQKQ1aDi5s3gpQD8Myktuh1fF1Y63Ygg4zDPWrCuF6btngc7ahJgtv6DQLk3WYQBY",
  "key42": "5oTnVxxvp51KS3HUigMwfjM7zvNPb2xPL7RReYELyxCWq4HRM3CC3YU7cjFEbefk9ecSWf8B7c88DWhYbdcwTyiv",
  "key43": "4R5hNduoAy6U8TAoMnDRW1rxhD5wWTZwba8VqwMYEu1k61Gcn9dTxughVY6BWZfX7cwGd9kxyJ9PHrXBJsgNBxQJ",
  "key44": "2JMCgHi8sxysHF2GGc5Pw4gsjftbAneYGjbiRpVHt1E5gM2hatfBBZJHPuxe1zQtHawsmUXhJQJPpZZ3wALtJP5U",
  "key45": "4hDC6wfPYe4AtZ1MDdZ6MqZ9yDtt2arHb6uj5L2CkDKDjDgC8CxmeNHFcprujfTNGiyabp4jPfStJmpFwL1VMXzt",
  "key46": "jd7QkWxaFaXym4E2VYf3ySVHGrH99mD171jwWJMajfQ6E1WWeXtEgrE9x2ZFvqPuzgFDiD1wRn9i5CSDmQckk5k",
  "key47": "3qXGHAkHsqdx4YZ3Y8jAAKBj1oUbqTdDzLt9B6h2KEF1ou7Hw31wJiSisWuu3y2zc6qZVxJjtaiCGPiGttvtyU53",
  "key48": "yL8er9nAG2eBCzwjmuWxDi4Wufo2HApa7871UXgFAGFo6uFx5qvyCYqizSJeVSmWLe6EuNzZorocqEHmmNq71zJ",
  "key49": "2z4cMoN6oFvJZgox1czYXd8mpNJUHAnHvSZgZ7pbMVLoCFeYBKqqDgkJZznKKxVnTFaY8sMaMebmeEW3aUQm6nBh"
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
