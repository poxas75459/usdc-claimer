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
    "3gVKWVrCu4zA57Ner3H3HpkSsQTZWWuHLWa8ECmJPEepaNwjauq7AGtSG7ApZHWWXS71ayqyrUPUhDS4ZokhVfZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qRJfg5aLEunnZYcKvgUWhX5kQpc8SKgNTp5SP2VadUFmRP3Xh7hfLLWPqUzgWuuKP3K3G9YggN5mAgMZK9EEJaT",
  "key1": "5Zv4oLq3VMnAPiw32EqMW3z4sUg9mtb8fAhsiFo3RrijzafvnCTu4xMDiUjc4DKLGWEULJTi84mMaPRezDTEMeJw",
  "key2": "35mZcdhRX2zeviJwoyQ6vLJd21wzBeHPLFEvmt7A1XWphTW6gPtVeNS5FrBKSQmtAHHiakVu1P36gEwmtatGaKVX",
  "key3": "3QddYXR5TjanmHrUsXKSwLnGK5S98yFpxUxgoxqQEcsyU4mH8pN5qNY2S6QptNoAZqFJ7QVqufdLRLz7FvESewcD",
  "key4": "2dfWHuWZbNxTp7Tm3nALGPRfFdsa3xPJeByspbmd2bU6zLtTkTHsrpJYg6xtFUg7gxm3oy7rbnTnhmutk6dStrnD",
  "key5": "2ypftBAvnT7bs1fKyPJN7XajCQcL9a6mEbRf1FhukpoF8h6KY7xx1SE4qrX8JoA2t1bGB6eSTsc33SUsiBA2sEWe",
  "key6": "E1cZnZbCiZLhPca4AhSUQ2QvDJMJXKMtjdpqT4BFoPgjjscyWCLHbiUdtKRB157ytxifqycVEa3n7XCiNT3tRq9",
  "key7": "4gkTZ1jDD8BQxzoS5xTw1DHyXpykETYnSHtavHnSJ4iDr2sSms1958GfC1U5x3nREFv8B778PJotYGji2vs2dHZ2",
  "key8": "67W1gnZkhWDqRqYkkWXy4nHWdPnW6TJE5kg1UNadtJn1FEdA2n32CothaSqDD4HyZDQRTs3xHnpRg1FiYfXDzEf2",
  "key9": "3nUXhUr5aVj8AizFdNfmn8jTEoP1HSuzPrRc247UmMYAstsVTNK6TojfECzZxLeqiP5VEcTYntLpTZK6UTgwEk3P",
  "key10": "25twH7LdgnJL86wgjJzMyFLsDA6Hgaj6xGWEpZv19hR4HEwmDD3CbHE295JZkD86HhhJm39QcCsG8mEfCMKzyNWv",
  "key11": "5Ay8e79dedjDJ6QfkuyoLeWMhxVua6AwTZv673CHuEcQQgy4LoxJmp9cCjBKXLdmP52sgVSv2ToiWH9K1wvwgMDr",
  "key12": "BX1DQY6hCoUh8QLqB56dXHr98QojqbwBuKedmErUNcPguN21ENoMWErryayBLG81LuuwJzb2PUHDsMp2Aqudu3B",
  "key13": "3qP2A3wgqyX3zkNUVoFazYaB5hMXsjRpDHksEhZgEWugNL9sCkN6FQonhDT9HWxDG1dMrTCLUSZ6CRiQQepEUz1Q",
  "key14": "5oCYce7msztP85TmurAneDsBv2BKmEqTsiJUCDAgbVrgAQvGwG3LiPt8YHHQ1ziF1GXEB2dFEYrZ2JZ6vzKWDGDn",
  "key15": "46dwqtguZrnWFuQyaXAcqt2Qq8EWC3UpeNzcDwkZeQmd95UcFiy3MwumsEpjbEFxLMsznHzWLyLj29pUwDjhLXzs",
  "key16": "PuUhj2df8UnccNinQKFJcGmVff1LNZbnojk4ahxXnVSub8g2cK79FuT5yCGSwgCRV82LNKQGLLiHogkq1nx5QZh",
  "key17": "4oHUW26zaF5jtGMvmQ54CbTVNuApZQxdR7qFMAQrAj5WexU13gGaibC78gMVm77TtfVWXFFr89ufaKMcXZkR9AAX",
  "key18": "5ikK7kP1oi7uggmJ9WincuYF1poBpkW9DRjz1EL1U8cFUE5haZEvQZmAz3zXCiiNrUYK222JV4pzRWe2dpBaRLcP",
  "key19": "q22CzbFJ38NrAxj3DKPWAJxDNCFciPMKWkRV32FEQELfq1hmiu3SWwBge5DJeAZ9gAA1du8uXLThz62mbrKzuhd",
  "key20": "3ofPyJRMy3XwJBipGppfjtCB1ZG7wEoFwRFyvHXpQya8qJKEF3VswuMVjy8tLEnrHj5QmV56Bb9NRiix6qHnphYX",
  "key21": "29XExYHXAfHFWQ4doCuSjwUcEhK9hzh8ySFGjHz1WijD7yXW8Sb8Rkgsjwk4HbZWT9Zq1J3NnbcybTwWcKujfgSJ",
  "key22": "5tpV6v3qYoT88zajfvfHgkdYcyJrXgXG8cpQGFoY9zVMvrh7jeGz5UzLpTfVX3PoBuEJrZAX4ZV78QmidA9EZmvd",
  "key23": "5TTv85UQHgJbYFyvsQ3y9P6EoUNRyj3uS5w7MKMXPQZaKoXcrpimfLpkRhztqjKmzT5TqqVi7UfhJSejLL3XemrH",
  "key24": "2VHS8K5MAJcGXkxbzqhVfTLPj8hA9FXsnVUGxV99U9tVSQMvSgg6zz2vNY9KXW6PFpWcPzKgjFxVTb38XLYbEnU3",
  "key25": "49kBEMajJ8TCZbdyooTPWzWDjbUeG8FqLg3M6X1LjnKWE7BkZ5w9UK6KHf9b3d4YkANcRaBCaokZC6xjvZzQrSxE",
  "key26": "2QQXA7LzLYPkrbHTiZUfY2viTEbfNo7NDq6a4qHRd5tixpzu4b5VoEJ1c2aWhgk81hcqgE2sXroFb3kAyLqDAEW3",
  "key27": "3odaDW57PZ2scKo2qtkebRNzXxMukzxDCJhUcTPcQuz1QkxKDo3y7MwaBhh1TDhbPZA4RXC2onqKkRRx7S3zTci6",
  "key28": "3ShQCwHUemUqGFpDRSUFTDCRo3gztWHnyAxPALbTpyR9pmo871SSZp7LmVvgAVTiGHPqXy1jXJt596FZwb2VXFja",
  "key29": "4kxepsLe6aQPZmFRFmKdxctRoQDN5XvUjnFToxv6hStr7hFZFJ99skyyC9oaFRB54jQz8bUJk6qJdcBS6PSkcKiY",
  "key30": "3jduvdv8M3wyRAdDN5zvdmYV9f6AryfUUuQjYE1aTV5ZGiJ86xF4A4VdxATmexmNZ38pcx85w3cYFFCzCQnBoZFk",
  "key31": "31obFZT7iZ93TZJgr4aeUweoiz9cseoMohZxmYBBvrmXducrG3zacQKDAd6gmbNnkWGEYYbmqfLtAuKwqtEXEFsM",
  "key32": "TVcRWUVpe4sENCZg9gsCL9Hv9aywyYPgaR9ocwPY7HRe5s4gNTMchTyYB8T6y9m7B7uJndLd5hTjfM9gYVnj49D",
  "key33": "4aQFdbFhSuknWPgSrdxToXT2WkXyLCc78T4vH3LzmPrMs2RRFj8diSZRVPKrs6P86PMqXH7NrEfHtPJb3L4427TN",
  "key34": "cb2tCd7XcmEw2ebhWiucXvADKfrSPHaUizW69wgyHobd1e8P4sTbPFE1CjrXYiLMB91ZKzkL6FNCwKcQMx36uoh",
  "key35": "4n1odDJP1yukt9JjRfoec8PifCnSV6fDJs937QWGcyjC1T1Kagt4b2ckXuFMEPfr8y1jSBAVHZfDWTbegki3KDJG",
  "key36": "3uyf1NDnH66qKUawsqq8iZneni1RSzTCPjpm5b6rTophMM63xxgbgY8NLLVBiYhWd4M1hu6HVBCXJyfBY8vswbxD",
  "key37": "4RXxc1WbMCG8jFuAJfpAU93uwUUNFMLDLmqDwAudVAN3WQmVnqzxV2S5FAt9SQwRSCTnMVjfYTUocodSRfG1V3V8",
  "key38": "2Z2hk3kXUtCYoqJcfuiWeUYj1YgEc2mAroRUH2thgnKdDXxjWYabCam2GXwSr1C3Yr4R1MuU3rBVWVf3DeuiKSWp",
  "key39": "2pTMq66A1GcXFxR2QS5d2aYMNnjiW4wxkEgfyJwPHtdJ9NZysAALN3bMZRFe9GoWgR6P5KqYLfdrqPHZyZvUsi44",
  "key40": "2FCBuNRQ45NtD6fkPy52s9dwjPgBr9ZWMQh3RhSHzPb73hFPvhFLRrci2cAZhYg6ZTGSTJZEPjwfxk8kjSqwftvv",
  "key41": "4pjXiPBCWjs4vqySDbLpqxCeVCD69fs3Y1c1BsoTwY39U3hy7LH5z2ikCZ4APxCmFiXsMT5Y7RYxyt7MMtohCx5p",
  "key42": "4K2jfoDK2VtteJM9jtxhoouiBnN1VuCWTYnGQcGdVJHRrjHiHz6WAo19AvYb7HTJZe3wggmVwbGC5ncD76s3VKTo",
  "key43": "5Ur6xe1GxCUzvA4Z4m1qMprFb3gpoSxt7Vo2Uxo5vMDVUwmxxZw3KSBSENJUHvrCsfqnF95wegvJVbQiD1NBiWhm",
  "key44": "3VVKZwatFaDETDCeTwKUsauD664PWCUwjVvYrHELogYUkvayP2udmiqRxBL3VQDmtrhJKnnhoEDH2UyjtvtqHppB",
  "key45": "5rqLR9u6kGxt4h6C51SFg9yxBXmVr4sQfDcsE1JUAuymq4yisLjVBWBYfbsKzV49iNiiR5MqyddQgrHsnDEcboxo",
  "key46": "4WFGFrxVKKMnxQRmJ2qgPscjNNdBA3WVgGHsxwh9uRKeDNrNjAwgTEiVN8to31YUHwmScPgE4d1quhPas4Qzk4tX",
  "key47": "2xmqkccKQbsSh6X6Ffi8e6VugLnunc2RFZLZWJSigAJGnWDR2JgYjWSb983DpGhhNwdhLfawBNUL2ev4hNS8rk9H",
  "key48": "3MDGyo2tGQmDLe6t2jispUv2MFWGEVSJEv8bof1ZWPE1fVBTz3L5RmTJvgxX8goeUDTrRSjTkBgSxbPwT7wEQiyA"
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
