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
    "4A5dY9a1E8VzNWcfRhAZACCeiM2gP8xYe49DZLCY9DZRvnb3XzCZcB6XJyKdQkrjV6KmRfdHcyyYohXAmJ3Ka4n6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rdpC5MSoR6ycpKQ8CXLMj357cK77Hpzoh81NoYwB4NS5g977grJhgiS7gNG9TUm67PdvF7bXcGtGcsxSdj27asr",
  "key1": "4k4t79tHazHRSGrvWZnpNzFD2WqANuUU2L8ZiGMBEL6qHEdaUoNe5P9t4YwV5rHbHYZVvdj17gmuTMqaJC3iuSkk",
  "key2": "PiPX295kM5zZtD1Z2BdTys2e5XaUHaS1tppF2jd8UPR6B9DicEkbPy7HdBMvojx5AA1xjEvPYUhWwT8LUbjUQtk",
  "key3": "3nXunAxx5rXHdbCR5SD2AkfsVPEDmqFvqzAxS2B2XfKyvkVVy644P2CaHv89rMfqaCZ3fqWXZXhaPYjUdULTthxB",
  "key4": "2w4v7mwimUq2eBnCe2dYAMjMnuyKgsgfxAiC3VksZw1wS9MzVorsnAycgMsGHpKsSCN394MRRSFDiB1z8Y6zx5ED",
  "key5": "5vjR7XNbYHxbZjxWeAXRVHuosSxqw4UZkALS5ykiFm3hAbYXW73yAbWe6AZMWYN435TiaoBQgJorZpTH14ja5kPX",
  "key6": "5GkR3jc4EUopV8KRRCkWP5wDSgGknJvZ9WCvUN1EJJzUkStjnmco5fAZ1r64XnKmo3UESboC3wggddUqco6mQUk5",
  "key7": "EMGaJDZyDwmn2wMsRV7QrSLN94ziTToF6TeFdcESQxPcEjQVinVbeMFUuECFygN6CcbGnucdmAVBy5p8k2oYwE5",
  "key8": "4MPx5Sndwoq7fQwoBVW53eMWDpQkXHqPgrzMco5vSwzNiYcrH8mVgwZtPHw9VNxTZiMnfvMqYFTqkFzQTBhLEz3r",
  "key9": "5s6CpaveDN4mrV5CbxkE6PwDgfQYQFcFRUnRrUYH8BcmWdjEXntXVNFD9AAbR92Uqh8pZJvCk7ht77JBh1U7P4MU",
  "key10": "4paU8ZbNWpC4TADQ4Xu6ttNCFhwxyVE43oj9Dn36GBxSmKPdskspaGrB64pNYHJ21UyJf9TJM7rFAz5UFY1u3cka",
  "key11": "4WyfiC8mpiJ4iJxsXJXN3kLitJ8v4cpWN5XDQKsrB1ZgBeYsveUFXHTzAJzBkYXzubX8Fr3DC4RS8opZLzGpWiZg",
  "key12": "5BroYkdZUiytBEf3nHNYvQPgKfzBWb523P9UC227X2agrW9g39szGzH5oNDNQ4E8RQFh2ZjKJZY5vgErcbsHTnyE",
  "key13": "3RDqv4aDx9d2qxXzHXSqzwAkuMAouNSUvpKSaKBVuQq9RVY8BBWa5UYrNfAzVKPMwKRZHmnKyvfVUZqx2riqKggG",
  "key14": "2sYuXJSCm4vpuJyzwBwZkfUcZDZSaKv8ZTZhuyGWMWHBC5ie9kXZzPH2DYJ7kd1bf5Rj1R7NarapJH68ggM9qjPY",
  "key15": "LzaBffn737LME4bkhv3fARYjeCV1jHPR5azk8FSFDrJWEw6xLHZpkSn3VCE6yz5ECvwqe8ZR8dYrn7sSbgCisK4",
  "key16": "36avzcoHHXn3yAPojEGDciDgSp712LajDirDMYfh36QxmNtR4ZdhCRDPigCK6BiZP3CaMytyfeHVXp2kZVjG6bSb",
  "key17": "4QSQr9Mmm1rbh4tKVMGH7u521SEbYWRUbBDNtoL7w5KCda7GAmyfSofk2YSARqA7ZNe1eT4BPAMPRdvBbdaMEvmj",
  "key18": "3AWrftTz4nCPbGm85nSCQkzhCD5i2dFeVz8HGS9WDnYmfMFodnigCQYR8VLvPty1geu2Vmv9sXq1nnaUe5A1J6Ph",
  "key19": "35pf9YKbYGihQALfhMyZzUJH1QSPb5cnJ9bdzBNAkTUgfRP7A76jHjBZ5AXtRj42DSSC68uChpXJA7PamAj3TBSp",
  "key20": "61g5wQMR9zfeTFbubW5hC2z7zXuEPt3vzTj7LGri81FuUk6Vwd1RCmJHheTiFtUvBRJfDFxscJAhePq1RsPpxA6M",
  "key21": "3C9cT1u2Bkwft4vUYcUHTSkEMLiLH4h773f1j6oJEhiRnx4pvkoeFCxMDA8u8C2nR5tviWaEM7wEWZnLF24juaJo",
  "key22": "2sv5ytpx6cjpVBAKSBMGapV7QNv5bgEQ9JwLRQfvTC3Zx8rVWvKTUHENt5GDMpQMXZKvPnyhBZuVCHUYoKkXWgdT",
  "key23": "6k6acLXpduAMLsDMsB6XT2B5F67srXZd4SMqRua5r4mt594BYEdWpZY2sMbC9xpkkwHLeRPrnmemUZj37crccyA",
  "key24": "3J21TfGwZ819kVN4xtGSmDnZAog3bWgVmQDG5CNXvGKsYuRj9MNfdcZz7Tz4CAmcuVmqs3HHdN9VxFuCJZrA7o9E",
  "key25": "oaiaponVrQcQfi7mqRzvU3Q4MTytdmUW17RXc3t3LLr8vSdCnf8y5LfohNuGWQqcXWejzucZdWbxJsjLg28jxEn",
  "key26": "2drESCm1Sbj2echcuynVMtz8uokiCWjYuDqo53u296UVgzjLbs1YgsA17x72WUCa1rvdmu4ESZ6ukvxmjwPTZR3p",
  "key27": "5drEKUE23LVcuVDiwon8JbC2849R1sxPuiZBsdMcvPuuDdj9FZ2d44vSjWSwiRPWY9SAEJE3K4LLyFaeQUCrQWYU",
  "key28": "2TctEVmJDfC7hETgQdDUr8T9p85UzPv6T8n59msacf9zHHkJGKXwh1tepFD6iH732igXRYdtTiuxV7ZfgWYFhZ1h",
  "key29": "4jSGMVnxdk56CmSGWWe6ZoCg3yAf9L3jnkY5WBb2b9ipSYUY2Qhk7qywLGVnmaABtpBQt8SHUTGsoH3Q48BZiZug",
  "key30": "Kr2ueEhgVoQUppk2kjE84WvC9LxrqXN5FyruF9JhHa13mBBTrtdp2Y1oTvFykuDpUT8qSSvqjKk6VcZwJ7F7gLd",
  "key31": "5a12RkHBzLwZk18x5ADbzTdAYkodJFQFPHbKiYjL3azFU4B5Bos5nVQGBGvXrnodFxYTtsvcLwtNyjZcpzbaEv2Z",
  "key32": "4wTGzcxvq2e8WQWy2s4AtpbQC9z7GnLtMhDvb6yCGVxRxeSzSV5CfvhKb2fg89ij2fWhvqtFoYeEN8PZVSmfM2oD",
  "key33": "3piryUbE9kLh36g7aUWDh8FMytJ9sSdmrTYbF43wAkzuUpVDyikpqNwTY64Bvk1U8r98VRrvCYM1WX8wPbkPFJEf",
  "key34": "26dUfgGE4d2wShr5oQQ1r5KPUztAoRyWErBUNGwyQgUeXQdomUuuBvVBoJqTYf9eKpvj2o2wNLXr7ZiaG6iQ4r23",
  "key35": "5dzgnaa5GsMy1PBpDMDGdgcTdCsz81vxQhp32eXRwj5kFD8eMkeFtsVsQHk5LbpM4y6QWGJ4K6227uTTvnXj2Yaq",
  "key36": "3QUwD3fnaizTxNfhYCjtcP2NuFU9arGkAXvuifGPY85kWDnpe7kx6bZE5rE597bfy2yxyaeAS6Y1jbQjaa2BQp2i",
  "key37": "3JetaXSqKJJ9iGZdKELCT5KLZ6MvbmirrQsv3S6kHTe8NSBYqWF6xRqJ9MqJSo1TGUEFQtQDpwyZKEgRVDXdGP1g",
  "key38": "27uizxy67yvLRRRdweKSCPqwwrbY3A8sSU7hf73688pUgkt6kLABRX2oCFwQohkK5E5VyUVL8pEQq412PjmiVopZ",
  "key39": "57e8V63qGAJdigSLEDEijqtxVZNuP17wuVyYLvc6wysTdFy5TjuUiycMnk3WqTpaexEuDCbZW7atuFC1ZEKpoiVd",
  "key40": "4fszdq77pEE2o5yW9rYkyQaHRpZjLX1KUwN1gPXMKzaieq2ZedFWXxJftfgnjLihumt2ME3Td9R3Sb1NB9HNEg7Y",
  "key41": "4LYwtYSVV7PYzdMqri17sY2oq86KEzQKhh13hDhGWPHqndM3U9pzPqaDJfJ1NANb1NK4kUnG1kBNedor2mBjofvM",
  "key42": "4aSUho1tHHoKHur3Rj3QTjdphKLPF5CCVBJeZAZgr6WQCE2L2TPdXrx8WdqdNBeqZ8wS21JptxnS4uizHybvX8jq",
  "key43": "3hstj5oXrQmZiW5DJJhVH4q5kfF1GAdLk2uShmtRrSuf14jpcpsi3XV22uMxL7CffgkDfyVoaG9uNceDhUomKNJC",
  "key44": "4BuQtEhMmbHxsyJBU1ptFBnmfirwc8dYLLxXEuwKcJk95Lg8byVkuC2NoL7uYYBYf2BsU79V4c9jpD32sBRRsKS",
  "key45": "4canCoXssjZxBvEBV4xiCqUduon4cqob5MjgGyNqcQCR7SZTJ2srMub3tcLbgT5G3MwTDtCT2zEbusXohZxAFi7E"
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
