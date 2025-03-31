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
    "64U69XecpiqHT3FP1rSKM8vu3ctgrauMoYaZCDGB3fqepNBKu4qtp5pLyTvn32BTUj9cs1AXeG7PYRpkH2x2GYC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oLmfVvkrxZ5iiCLwnCETYq8QmjeTDXfnQ6XfjfahEGZg2bxx5JGgURCT6gUpz23ZmE1ZdZnxC9aZbXjmjL45UuU",
  "key1": "3yFt5hRJZ47Z6Ljqi16yC3Lw7sk5G7NiuXDbw6ssDhTwe6ZfogdyC6JPdCCz4G64d1VQ4Vxmr9vqx3t3kF8RdA7H",
  "key2": "wJZodVpsk3ncaNFvCEBpsZGAP18nHHAPhiHTXTKi7NrwYEn6ygBFujErvEHYY7PfEsTnmbFz8smGqjDMVJQHYYW",
  "key3": "2itn2AoGxPrhXhnba9L3XKT3gSky5XAnWjstxNX66x7cdoFXe6ZfFx6fNywUcjQ5NEQxh5HBMj1L5AcZUJMkqwGb",
  "key4": "rFXFcCUdkD5pwc7a9zhbFANnGfM4Zse3ahcGDJ5g2LbojkpYh9D3i7XyiL3gvLzGDAhn2k9ACgrf5MpvsEgRCZb",
  "key5": "2kLCZozNeqSUZwqLJE7nnRyDeKBWWxMWkWkqBujEkQvVAqx4wNiuZggyNpwVwySLhMnxoywfLpJRYg7qNFbf6ym4",
  "key6": "2SSxN3jCKTuREdJxqpdcL9mohQxWcXAUQrqReWDQu7q2nNXsPWW4VrYb6ou3xFzc4zhXYL75NVKSuePMJCiw4Pez",
  "key7": "cQX1H5SbEZjHsy6cQf8kUvNqCVVLp98LTRPUjtbfgxsQPsgSfwy3rf9w4FxbP81h3UFTdDjgEm8sGQstFU4tLJH",
  "key8": "4QrabtK18B3rsDVvEtJcy8e4n3M9euVr59mFaC8Qo4BYFUMkzrgouW8cWGNdppzi5FEcochxs5T41YJHF8rA8mDr",
  "key9": "rAzy9XuZxypH1fVaXGJkWr9oCtXpw8JJ6Fw9zaTfG48nf23vgtSVUHr8wba3GRgbD5iVxzTzwk8TuNntjwvTfeU",
  "key10": "31pvACpSV1FnCnbMmWYgqkD6zoyA6kw1JufFEMBPUtjXWuwtE8NkHkLEMES87gDYSS2ZmBBCtLaNqgCWU9YShZ5r",
  "key11": "2FbmFzuLGuhmdJXwUiR8yJMytVHbKdRbR24SLQJJj4ayuEqoTgkFmTaVn2K2TeTBj4fSy88prCEoZUCTEB19WPyH",
  "key12": "61gGKKPm6vStB9KVkJzZpMZ7Q8yp6K81TUh9V42rcsJRvXpczZUuh6G5tTs3w1ApbvaWzDnuKGhAHQyTJDjpqFqr",
  "key13": "2PNHEXQ7vhJBkrqqar2oe59XpYzBSBFZN5S7vdQhNbPpajnD2PZxfY8d3D7LTjtFo4CjqhnVobbFs2UBsh5uqZwU",
  "key14": "3WcsQyswakT3Z83SmWP7d9UjMtTiFmYKCwTt5pwtMCPZRRwuXAfpzUR8Heexnz8No6omRnrnxHpbnZXYTso177fa",
  "key15": "4jePgTQKtHwvttP3Za8p7tFkCkBADnEiQoSqgCj81WKtkoFafCT7ETGoKCrkTNFzT4xhhoDLKiP28M3txpjFR57W",
  "key16": "3aSgyoJetTjtBqjfGmpzcusvfhL64HK521RM1jo9JZRnybxkSKVUe3B2wMiVdyT1wr8UbeSFxBzu9YqJPGxzZ2dz",
  "key17": "fFQuNB28em98zJZk8uA4ysdy9uDMwECmGTGhWdigeuBdHzq9uCTnUMTji2jNxqfv9PtFyNcFgo8XX5rzZwLMgpq",
  "key18": "2ootJNKx5R7C2C4mWzvzkKdhwMkym8H6q7u6UwgKfMbZgc1x9SexkMoXi12dSMHLr2KDFfr8Uu8jRZYcLaxhKtPK",
  "key19": "2Nr6Sm5n4iDmxCnio7UJLeEp83LnWXnAjvgXZDAHz6dd6SaprhwT4ofeTqyn2QkRUW4V4XN5D6nx3kRfMdY536cj",
  "key20": "2f2TQmTaoM1YsHYy53oDwvgHxi75VcAt8ws8b5h9E67mDw3ErvoKPczdeFHKbzvgrL74mgEiHn1iVoGcyQuj8eyA",
  "key21": "4AkVfMCJ8t6pZq4L17mBfB6vF6xn8SDU8fjYafwjGU353nRaiRXrLy4BY8XYGfptQNUXxik3EoykUTUio4UZChzw",
  "key22": "4Qpk3LVoygjZoLujhyDtWcrRLWi9oW7j9eZgwKHVWntQFHrHGEuhXcgRSPXajXimMDQZiYetepcLLMMA72yCjWpv",
  "key23": "5x1QHtqwNm477oNvNcZAW8k73MXfz1uTTGZBY6pxMVFh4Mi95RNDpoVCF9aNpt62sTWZeQYJqjfb6F8c2Yw27qKt",
  "key24": "5TuQUBFXc1XJg53JFRTtBAirqssBKM2iwUEiEutMNrku6j5681ydUBJmeGChQCUFVkvpTPfpYPexQP6saEwZM2tk",
  "key25": "2wxRpLXSVc3D81XhFjLfehZ4av7SCuo7jZW6WdwUsVYjjR9AK5cuB8adXJvmQPy5nNT3dbScCyYPEY2jcNWasbez",
  "key26": "2ntJmAUvYAVABNRZEazrSU1sJCnirrqSN8cXKcJRvjTsQkLWC7RigtkYsEPiCRYfm3bWHpVbK7x3FbjSaMm8udUy",
  "key27": "vud2uGzTp5WFp1C7sevpzFdNPMwgG6LSumBJR5kyp2LvD2tMRoPuvRh4V3xJnMiRyydkCHjUiDXL7RsvML8UX3U",
  "key28": "5t8mszTWQ4rSx8g3heW8ejUKxSMdeHHeMDnmMrai93ZLiSa7ZbYZPetE3vRtG3Gp4dhFLqnugzF6DeTAtGnuJr2y",
  "key29": "3P2ajs93dQ6Aoixevir67zJXRrzeLW6oe2KNe95fVdkULqR61naxZwWphr4T82syCNwSE2LwZWttUkRAuFthJxXc",
  "key30": "dUjYhzwCnGMPJfEVSQFRmuKWR6zsPYZzBx918DhrFjMaYpYz3nVZH58x254AxryWp2HphCretWPpr2WnBAq8qg5",
  "key31": "53jb5qNbqvVwqNQqh85iGsVmF2tU7yq33oAjqkjpbj5MWNJHHpJavRzrqVuKv57yJp4i64ACSGe2tuXGsvcSb3Zv",
  "key32": "3amUapy3ktcypJb4JeyLmkQwyNjrm5GWPmju8nAAtghyowqTizZuEZdtKU1KMddJy25izgjdGFRHEJorfRWRpbeH",
  "key33": "5SLt64fNUZSza8kPhPcdDHLR3xpymhRLYF3tmG2UhickfGpJRUJhxJG32kxKpSPRUwiKhoBa9aD8DgyFaEpzefNC",
  "key34": "2FWCsgKGoS4gNVRPcJjV4RBzmqQo3QzEYGfFjbnKcsp13tLg75ktrourwS1Dgx6iEqmqqWtPWG34yWPLbesDUxY3",
  "key35": "2h6xVqsLFWCwXs3zkwVsJpSUBvfKzfk7gyzo4rGiWgr5KjKfLU1GLrVfnZTNaJSptXN6LqpRWMDDZKWK31tP4a4m",
  "key36": "3JKFHGdNzesDti4dd3YbhdzY8gh1UP443sACYvQ6tMTUfaYHjpS3CDww5MMysVLKXMSPTkPG8SupQrDcd1iK945H",
  "key37": "kyKa2i3EoZBx4sYkDz4yBts9FBtozXR3bVdmpGixsDZV6tV4rQxeWogyiX2Z7FaaqbJhRn9bRZ3cTBhqVJh1mCa",
  "key38": "vFnExMC7mj3fSvMjDuNcwYHk1dSBmE8QPJvD9KjdBiBpaDLuYn2XWKwBcaHqA5vNUJYAXQRhcmvmnrjxdydaAbv",
  "key39": "P9Pmc8pGCCx4VroHHff9C3XonFmpPWGkGjj4eX1Mm5h1GBK92p6Mz7FgE6k3SmZmSq1tSNb8JPPbXT73ev7Kp3C",
  "key40": "4LHWYvbk8r4kJpBFUP2Dx1JfD1e3HoPKwHp3TZuGdMa71ajUCi4z9rp3cmX2NaBEmLXSnyt2Q8LigqMYn1geytxW"
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
