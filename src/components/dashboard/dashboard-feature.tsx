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
    "2nArZPtTkDUqBL9arMNcnxRd6k4prW7hs7Qe5VGDfKejNnKvR9eCCCbMpKhEVRpNA6nA2mtm2SbizSbDjAvnH7SJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56cYZ6LWkPAUZsYv8NcNuyAXNPUKHeAxS4Bz6G7WtWTaetF16fp39f2rmmQaJHaW83aNNjnvA9LcxBfbtunRYwMB",
  "key1": "48eEP86MWN19UhuYaBnQcrwu6fAFhdge3sugbHeqWmQCSzWng5kg3K7s6jCUcEvHwHFzvQ8C8WG8zGa5wWfDGtxW",
  "key2": "3MfDPtqVvmNLyps5eQVxCYgwiJ7xaFwk8K9xnNjtVGBeGkCptmBt5LE5xiWgjwWMZdrtF6gn6eceUbwAw8fHFLgo",
  "key3": "43w7rGbZYSLsW2AHkUdo5M5D1DjwxUsgJzeyoJGJn7W83SQMGfYzWavYAMJr2iAeox4fDJTZvgbyvZMKxBaxMKXR",
  "key4": "4djJTxhArQCM55pCBeQ3hZbLPKzVZbMbyxiKVwfVn1iKYeddV624UmFQPp1z29evHc5ctDXpHopU8fSciNhtFGiH",
  "key5": "fbggBSfVt57bGV4b3jX9rfcAg4hRvWJNQvs9dD6c6KmGjVSnGCUTuYRbpQV4WrUkY5J2C8EVsScZaNpFEANSYuf",
  "key6": "4tt9iNBN3f5AKSJunRWbZUuQBaMSWkUTLSu6xcoPWLeZBhbuGSmYRgLYdekpAudiMpLqVG6ZDSgkPyjEksu4ggxJ",
  "key7": "31iQuCnXyBnSh1SAgWrTWFUNq5PZeyQgUVVc2ZfrpxVr9up7wxvjcKHHi6sS85UtiEoaeymYg82oFq9i4NoMwkdS",
  "key8": "5mJekJ7VFV485NdbTMdkc6pRvJct6TaAXKpQdnKRSakwzZqrGZCr9a9jLxBo9eV5TzbLEnM3KbFRqrZnHr7yW8pa",
  "key9": "RPd5Y2D1MdLSNu38XhUuXb8sdqRbbMyjzwsVPiTvdhGbyKLeP2fmFCQVyrQ3urL9GNFKVf3GjirhcZdvC9HcD8T",
  "key10": "2PeYN2QtN8QuGiiK2hpBF37vBdBdUgXuRNzEJtE59YLrVkRAxs8YdnLpgUzcrM9Miv65EUbdJ5m6aQVthfWZYzoy",
  "key11": "Le8e1ULt1wyRaGnamHTqtj3CpAkuEcgHGM5BKU2TJ6SCoCxWKxYMfSszZfuJdZDrvGt1uifKANR3ZymDxTybwWr",
  "key12": "3ewXVgU76un1CVnHHnSx7xFQqmEmbtgLvtdDVU2DwxwvFGy5JMycu6yN4RWkXcuidLqDLSaVxNuhE35zpfKZ56rq",
  "key13": "4Xu6646zPcXZbyhDHGXJhGChR37T8MEuaTr18HxN57dskBEwzpoxENyoPNy24fn5m3igkQEevYqFumfdkd8Xjgdf",
  "key14": "BwbCw9d2WGxidgktFJ9KhWdynozsGLHzRePGX6hGzezfCRo2ESkY2aTY9uETzWdv8vR5q6TKrY8VneYPg695Q4M",
  "key15": "TzXaykZaiq4tyHdbszE426brcyG2YXrwQ7TQwnrXKVcouxEU9zEmcqAA3xnCU4atLfQbuVdYaYFQYDmp6NhPz3T",
  "key16": "2ZEY5QdJN8tAhMFaqm7mrwTVm1g4UuQVZ9CmUg4eqg2yFeaAQFeBa7VvsavqoaetoTyzQ2Ah8YYsxdGjkzNCZBBs",
  "key17": "2A9Ce8rBU8FaPRFNmmh1Du6XuvnyhFZUQWMZ8PKPLgVNuWVtn2RiULdMuBrb5S27PQzeZQqVyrxspbJ374GZUfqB",
  "key18": "5SaqqDfqFL5jcHdfiwsLYA9PFpU3BZz7ohgEAnx3ygD2dZ6TzcBcH7HwfT8iwdRnLWLWJdX7baHCT5URtRAS98mq",
  "key19": "2YtVR9HvD5R5sDRSCXvboW9rkSsymocjdsxoxJNMDoMBrDWE3HN525ba7toFSbjWJuXyiWAkmEANv4LiWobpMtCA",
  "key20": "4neDtUoCQmvFmUHrDsmMvPbSnNA919d6GjhjkXknTnuFCv8QLt1KpX4TRBdbJUe2tu13oTZNc14J71QyJPquzMu3",
  "key21": "48vM5i5vBhfL1XdMZM7vvAWvyp8upDRshCR2Fu7uneGwYyBLWNW2jXcwk4r73mpcntcX76hThEgbQ8NxYGDZjfBi",
  "key22": "2JMjJvcvMSuRJMm6uXK1Gb5MsjgBSg2N4TezD8wDTJSs6h6PQLgnz2d5RZkcUjFSynHB5BzjpgntuoaFSbe4egbu",
  "key23": "3MD2bo5gohaHtTEE6vxdEdKDVFuccawfLz4bFaW1XD68iGWHDEc5XRxgd9mtcKx4bAWSsGeo8gTyef36NP3hutUp",
  "key24": "2qt3mg7cG2ZEu593DHmmGJSPdPYNhkGbviBHUisP5E3TzynXh5jhPzTPrUTJYo1UuobYK6QPcmMqmtwFwTmEUvFy",
  "key25": "2ckxjFTWyTWJTvWRhVW97w82aiiZc74pKX59cRRBUEbhcGGYD648vmQuap9aUoXbjCLGwA7YSm1ux8zxbieDAEVj",
  "key26": "4P16MHmZHgvJkMKTcvUWsYyv9Pk3LJLwg5BpXDWt9FdEpU5X5DmuA1v9Bh2PFEu8gppzX21bU1u3vZ7jrrGrUZqQ",
  "key27": "3QBsRtrZc3ZWEhT6RmWK3DAHiTqse5LviaiCVReRf446ara2uf7QzFFcACV5iLPBWniJ5gJyUc1UXC6qGKDUKTyH",
  "key28": "5n6bWHCwd7TBKqpAFRc6VZNXTqnYhdGLW2S3NWAceVJ7R41nT4VFc2z5QZHkk1U5cMBB2R3M8273XCEhrpSb3UPH",
  "key29": "89FbKPbZpV5biQ9LMW1m4B2HPxAf7U7JnGc8ykfknGZJyFQ5PtBcEkb7aawnED8EQ47vsp4eWWxdqNinSSFjZpe",
  "key30": "2pr7u1AsNBtrjRVnLhfBNV9hbBGtnaHqQtSxrJApWB1hF3QYEp2EJVFmaeY91ifSpokBNoCHYTdiS3QHa142vhnf",
  "key31": "gBNKrGQFhis9dgN5otVHUN7CFsevmArqNPLaE6M8i7egxh7gd6P4ADMEarbkzFSSmmrjmDfiERsc5QBirowrJoj",
  "key32": "21nXWnj6vKmAF2jbGLUfvFjnc5P6wMWWvEhgSUvbeH5iBNdKT5FU3Zq3pakpxJow3BvZJ5mw7fuujyvrivMqBiyR",
  "key33": "4PHARPmNqq2SsrUDRcHKm2qeeP7sNQvtWAfFFqKv7kgYzepBUJDt982Vv3KnF856JchbuyNXopjQeQSfRd9F88WW",
  "key34": "3yqzPuLjJKg8PugpyWzgK1rvfFqXbzn5cEkHqUtfYLL3tB5wvHycuXz7LEwHLmhR43kaGWSiZEEEHHfN1qXYm28",
  "key35": "aRdBMfNa2GjRdwe1VgNabCxVANhpQzWYjZGE4Zy1KVaM7Yi6urRsXCP7Qd8DqCgCVpeUMs7NQzZ6ng7z76tNHQT",
  "key36": "3qLgZb6acrppGaDSRRyKdQeQnQdyaJ5CdynEESNVuYx8e6kAXXPvWxAhYw1orUiiMAerby4nSeQjZTLLGuY6LGmw",
  "key37": "2bziGUfca3bVxEK9BZfc8XyAtmr7FEUzKWsUo3MXMsFLqeBDSjo4x6jEtpWXxCHhX7iDT8ChWvLjN4bMugkLXg2f",
  "key38": "37Dffv7jidVXbkvrCigPWAk51HCSCfHaQe85N4mAStiT9fNgpevSmsGNb6fW53sBqswupQ25yajHDQUWz6maVKxW",
  "key39": "2dYbMyx8GLPjqPSRbUfDvcJgtibwAjJYspp2bqCHbh9hFxTPs4rk2WjRUed3ym2En1nHANo67cVPvxfdjdWiGoa8",
  "key40": "3WTf63cB6dTHoLjpgQADEu5vHSs5ZjibDmyE3kf7GrrACoSzKv8SP5DgH7kR2fjvwM58GDa1B27WEpasrmNEAjJq",
  "key41": "3u8eqUPoB1DKC4yzmiSQhjQuu5RRgjJDWfbvTNVBo4ic6ZBAaJ7ZDMGsLVfe6CJiNJW65Kox1piJuD8R2RD4DdsM",
  "key42": "3UcZJvGqoNewpXzNwxf5WiPJ368m3YuvSPM7fcG76Y3bcLP9yFPyk2C8NibmQVch2Xkiy3MBNErV8W9MW95bnRP1",
  "key43": "ALk3a961bAvTHJqhprWWq3ruAyjsvJtCHdUytwyn3cdHuAfu3WxCRfxfTWC7uxtKCPWAFBcq9SGmizDoWA2mvbH",
  "key44": "4bpaUiJvfdeLKiy5sMUDfePvpHAQU7PHpD5JSMgkRGYvJKCwaTfjagw2ZzCfaGC78cf5g3eGVYrYuayirPnfiT1P"
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
