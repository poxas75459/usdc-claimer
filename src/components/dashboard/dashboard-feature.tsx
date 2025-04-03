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
    "5JkoCQbqkxRysWg54GBJeK9YnRz7zCDur36pjgFdF9qxe6srxXe8JgfqbehxiEtUMBTFc3a6hVbtYtFKrHmTJ2y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aASKj5eo1HBk7AWa6zFL9VWNqoLx1XCHd8S7nYoSJy8hkzQXWurpHbknjG7LdY1KU48eZg8UJbK8b4rEGMmtZRk",
  "key1": "4TtNsJBgz7ct6LQW7iKLeK91H8E6C1skcmedxgpwN22KT73dgNm8RpjLDC5FvQTxvB7LxzrJKPqyaqTLBjKUZrkP",
  "key2": "SjYQbvsRYeTGnUMN53Giihc3q95LuFn8zpHMLxThSLfFrNbDBiUJ8JbAu7jRzVUtLyfg3ezNay6JCkoj3TCZaYJ",
  "key3": "5H1mWTfjZySdiZgHwEowBsByW37hJ2vTDa6HivM2Qruhreuhue8A3TMfZpxH4Ee4HRM9stNGgKUBqmxDhryMfie5",
  "key4": "2pG9MouJHnjkTiCmaHnpFjRTE2cup5BSbavDJsAm8ZZPykgFwaa23UH7nwwXW2FhJQjSkJFeihmwb5YMC7L4cjfm",
  "key5": "2LnmZc78qjWuJQqhDspurB74PN9YsVFUt3JRHXjW1nHGXLA12NbfhxW1hYvCDbeeRkaabSoohSx6pBpSrGfZmKDi",
  "key6": "3x1jQLuQQm3DY2X5hs2AFfFAuvxTEfzicXzR18j5WpwbQMB3pa6HqHDj6k5xGRbBanSPwve2op1kgZDWQiVUrfPw",
  "key7": "Q2659dB42eFbktU2wbpU6ShPAc8gG4j8m58gmudroSnorXTk8FHM2ipjTQjjTjYkyCUqxtUgGvJnNexPsMHDfyT",
  "key8": "5BGVNTsa5ST3mFBQKgQmmACWmHzafJs7gxt5UqhmiYLVzSbY821ZZd6X58nC6miJcttqK61eKhJPRCDiKucQv586",
  "key9": "31BQhZzkx9aELqAFwjqKJUFpaNFCuoaXBdJDwtWqjqEr7X9XAttqXpaCwnRmrF7ip2DhuoPq69EnPmtfNob877Zr",
  "key10": "4nyyGWDg7jqJJ8Uvd3WBHTsrzdixVnn9mFrr4qFj6ZGNFMpu33XFjXgj6SsMzDbghDubbnSwvkWjrEwpdHSMvGin",
  "key11": "47W4aQCUDExpUwcjZgz1Jf6CPhvoYyVXQUBVUF8eAd6in6DJu9GCfRtCBLfCNCKanFh2R5es7RpXNpjuuRU9FxVL",
  "key12": "4fjiCmSBmhnhifAvVXKaVnJDoEtksHtsYRgkhgdXC7eUCsqq9WUcb1qH8jzCP5WXd1VF8pEXRRHJJVKgHWrLiuHy",
  "key13": "2KUD3emJJMTRhUcBNqo5nPy7SNdyUokdgrr2Y8x8JF6Bu6cVYWqnmubGPbhA5uRPm8Fk4oaw7kiQ8uofWn78dNiU",
  "key14": "2vxKGoL9VyFgYH3KSKqag4JudTA3BcYvdfy6EoP3DFZFkN9AUCgmQ6TQswLmwJBAdot63yvPRYFESqAsDCvRU73G",
  "key15": "4KcXYPRd7x2u8Q6BDUbPHnngDc33DkkBpyRvRT6kRkS6ovUDhYthrjYn6uGNNwLTvog3u4BbJv6t138ayQidU1ee",
  "key16": "5oaS9z6dpBDawEekrvvMSANvnaXJCCqTMffuM1o6C5Gj9zEzFou6WBfXkSWCaXuyNh8RjmCk2RBoxCgWvLiWhSWp",
  "key17": "rwmtp2pZkp4HSso5CdG786cUzgh2WaenDpe9A5evFipvXvCXKkYAUFyz1TFi7QcRH7eYzDJwAfU1HavX1SbRpCD",
  "key18": "3R33mQuLxRnLgfWh2UZUG4s2jo4AhDeTsCRh2PcAvtEhCVyVxDBGA3UfZvEsMCwB4THdAuE2VebFVh7MAP2RnVMW",
  "key19": "JJjXzqRX2yxatCQXZNRBMFfr2g24wAca54Ry9MZftcSBBVd4vPtTC5UsHE9jzS6VybD4bhYcwKicbNWCB2r3vCx",
  "key20": "RpRV473eH5EEteJRWDVBQ49i5aZ5dgSaWQMfserak82kryXzczvD1gkLzBFJy9A9zSFt6Bf8GMRkMPmntwXLH2r",
  "key21": "YRpGQeaky8cXm6WyJEYAA2215rcyerYnYJdZr9WJDtJELZsDgVgCY1q5HEyBYwLrJeH6x2aLvQRo9SBSMhGqPXM",
  "key22": "pdiPGv42bBsQqE2EpWDthfC89Rxp9cmNEmyAYodKRsoSp5DFsZeohNfbjaHyySRv8zBCduoFQkwRnsVHy4RzMmN",
  "key23": "3yPTFrTd9BqmvC3uNnidYjLYrSitVGU3H4vbNBGxGdu3sYnNsxn8xDNW8HyTLpJZLfG8bTtiAnEGVAbav9ckym9H",
  "key24": "4st5ZCB1tqSZkv1ge843p7Dri1rVJtCr2YXWc4E4X8HSgQx67LbrtTyTsTewVNteoo2gvNnV5UgWne6tcZEDsT4W",
  "key25": "sQqJJjfuPyhYU3QzRCGT1wcPjNpD2mY1jowfD4rztkrHAiJutkHAXPKqQZ95wmYX7YSUBJcrNRtyiSHzde7dqsj",
  "key26": "NUkuvLqssESMdBTBwjxZmLFn6ZRgjK1tgczmiWRcL4emMiEdnNqEDonGKsAPRxNnDrBxy4Wnm3u2taPFJsGAmwv",
  "key27": "Hh8sfE1xUKSoWmEDXUwtwDkQRbvT3YoWSNjPK1p8zQfmxeGcLfiQbY9NT2D6WELMkSetSvVq42LavX5a7niigGR",
  "key28": "2Gh3Yd7KVUWK1zJweTyaJhxZX7e6mGW2GRS8fLqK2trmLzMd9feyDjx9mjPEPzMYrAqVTXrZdDRqr51e5CDDMU28",
  "key29": "2y4i4EwxT2h5bvwi4GBYUFN3wQXKKQmX8mnu6UZajQ5YWaJoQGBhm4uDdGxTj3DDgsmUF5fE1vKu2Ji72mEPdZyc",
  "key30": "3ceksTkXCGZ8v6pHLAVyAYwxJEFeEeKAT9CQSXGMp4SWA6vcb9Y11sZrG658itFraGZkQvcitdaEL1TJ4nTLMLFV",
  "key31": "abFpksKQsF3EyXSVyvJ7NkGYoHP75Qq2evjHjeNAFivTFVVsHyZfVMz7xwZhVkp5uhezCt2N82exawvK1NmbxFb",
  "key32": "2PN4rE5AoEkwrThh7HZn2Z9imfrtTVrjidySenEoumBtU5MkVKHN3pf4Nf1yohc33QwqRFaAp9hDMnpoHMdxCTAG",
  "key33": "3rNrBBWxSmeUBWkLK6cbVDHPoZvosxgL4ChML819j9EsqXB56y4DCBZYpJGBJwRdp7NUc61nGtqq5WDZMsptKE2G",
  "key34": "2iD5cf7DoYsNjpgKTmAdfP7sGdPNwoS5y5ka1U7hD147q4BKxDV6KsYxQtWyYCpGdqpDMB7TEdWxBfvd5VtTUttU",
  "key35": "4ZC1Y6jLmDmqGJz8Adw3cpjkgqz4ozjLPa5wm12KvZrGiG9aybFJdybioJ1PxsEqPmZeTbU7AgLdtbD9dW2eL4SB",
  "key36": "5J9Se2ndVfrmeZm4UDAZJrGFZkWLRTLXXn84VfQ84fenvb3iNwqnWmu3Y4SFvdG3ZijkJPFSQDzFpQSVBvtPozNZ",
  "key37": "2zT67YynQQt4mzKfmaYbEMRxrxPSh2FcXGPu5hkt263fUAKrAj4tKbvFDRVLehDa5M5Yy4JHwR4nAN6GhbsuWjoz",
  "key38": "2Nu42bHLgSqUCBp32bEKDwUmub7Yzd3FtDRmU8LJM94Pq6BbnMnZov5rUSeKPCh7VTdAXL3E3L73CdzWg17jmRJn",
  "key39": "2n3WkD1PskJbExjaKPY7Y5N2x2NTXr1dysRLb6y369vZvqkDr6hWWruZXZHD3WGPDA5gNP71Syxxz4ngnKbV6chB",
  "key40": "2gR5oCHk4pS92CcFExsHTk6qiQUTrJywrqKyMRzCyqpzapSRArsS3YMFieBp1GCC5hNtB63VQrDBNNgYuiFa2xg",
  "key41": "3oxkUqYXC3sKJHQuFpbYrp9J2bHFkRwZKKbRw2N3fAPe5SYXtCYdUtpHtdznGEGk4FqfE7V1XfSLANzEJ6Wsaz59",
  "key42": "5ZQCyeBSFTf633qSpsczSv5uwo5MX8JpnJTwxmdGY8kZh8vy2SgQCMtVwFTELtTZYh9YBZqbk5Qb8EY3ZATcK9Yh",
  "key43": "4YknRDHygzFvvhCmQBGkdbM8TemR82wijzdM8MBQMLdo1xu2qG4GmFRDmQ7ej6CPTFk8ANePSx4VNVFAwYub286i",
  "key44": "5WXZoFf2xqXi5Kwn8Dut4zw9xk2YDbkypfxoLpjBSmX84NKrstbASHi73wUGgEoRn8bwAw26rvPBQvNBZPQMWzMm",
  "key45": "5Qmjj7skk4BkHt5EPqBYtCiyzg4QfQgB4kw3gsLefmMd2Efo4KgJNK1vAWi3eBVGxC392NYv25oCiH3urvREAVLX",
  "key46": "4uEgTKb5FcgF1goZxoA4vBKovwvZyBFWNURwWcYRSrFKApwit1TMjbfJn5oHppzcbLD14qx8d5EzpVxKGZbnb4ab",
  "key47": "3iGWyMPXDnTC1mnLGBaW5P4cys1Kk3rM8W5YWnx43CNiCG8ru51J2BcmBFACyCRqcNUPLXFYVMFonq1nqSSkmNhY",
  "key48": "4SfLs6Ggt6JnQG8SBJ3a88PcHWYP6KLPxdVGXCCW1BwFgChopBuKffPuiMZqdRbhFhqAkchVxnvHFdD85A5MRFMz",
  "key49": "5qNZFN4EzrFkyeLnnVrPioatWjwYVAS5ZNCSgWN8EZCBhXyJ59LTs4nZyaexuby9bUybPAmTRkUHwkCAQmRMbfzL"
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
