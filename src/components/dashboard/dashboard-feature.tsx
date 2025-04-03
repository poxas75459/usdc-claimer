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
    "5TGcmT2h5gm9SMz2o5962rzPvt12mW4JaDA2P6rwcjPttdM5FuoBEc9Pnd4wqxEFcnMxeimQjE7gyqDrHwUporAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M6i63x2znrKk3oqEPbzeSgizwncfxM467Su5aF2vFsUBeywhXwRBghiUhhgfazqaXfk3BMkZgutcY5ubpCeB6dJ",
  "key1": "4mHLrWtXvhuWpwef6doMrxrzbVk8MDMHXbJoozTXYwupbGqVRP4JwH4PEsxkKUFWUQPXp6CgFwCT7mHPsoEUPhrv",
  "key2": "5hd2gikqvXsZZRJqygT3UJznn2VDPmC8w2ziL2L1sAReXX51tWWZ3zMJeZSB99pztWFABBBV7nzTnV99kSFQYnn3",
  "key3": "48ShcRXAn3C7gQjj4SAx17s5GExHT7WzZfeB2fD9uxBe3Qsc2qXeF7Sbb2X6kt7HJndZmpkV64wEBs3czrQaqsvb",
  "key4": "2UzyYrUDQdxwzFqopZscPuwi2FuggDMCRUDCkh2mAyKRseqFPxs2uUrUiSNxUjkGS4iyanFKLmroK867aPvF5GZw",
  "key5": "2XN73iAMjveemNRpCYgzYLyKoTpECRoZ2xhmmomFFxdHdj1HRd16M6tmASq2xTSYd8HouihWtx2Qyd11nmmRBa9e",
  "key6": "3QfotyN5ris2xL1PL4ZiovdDydcvMxqToWKnjK7xncMzLeFLPLeBgybpbZPYJeFVWaaKm3TMy9eomi8EgTUb8kt7",
  "key7": "5GD1UYNPmSUD5MZHATBXFG584HT4cZqqZASEzU8N4ZecvCWPp6ttBdTrwC3Xe9PCFNT8Tpos4zb9DSSsKUh1FdJ",
  "key8": "MRBGeHsBDpURTXWUHNVNADctUtY6sLtXjuUDoNNh28WznUGzMprnDkFEvWMVPTRk9rNGWV1C9Lb2tWk7Pywf7Qu",
  "key9": "TufwBoAAuxoNurs8nssP4aK3jJ9WDK2Qvkq6xbq1bxqJAMPpcuWYMfdypt8gjm7uFc9k527oWTwK2N8R5HRxZXR",
  "key10": "3wMtWTq5kSsD4WvgxRubZedC6S6BntfWRDaQL2f4CEgLThv1Gc1een98K6Ci2eWehpDHJSLVcbZiKagse2vAnbp9",
  "key11": "3tirJ3JDDzWisrBEUWyqSsFbpMetbFfgUP2RTuvmyhmT7AQFM64nJ5FZWwXKTZGX4KzRABBQGtE7EB3mfqgqmshX",
  "key12": "4T8PgnT5rm2kPCx1nV6bnEZKpV1ZRSp7JMTJLLz3zskiQsesHCicqgCgEfLHPvFoXwNTwYsZ7NvwcC6AEC8aR6xc",
  "key13": "4heACzzc5ajbTDtxHmoU8yYsykMaE23nUyHLLfddwLTM9Vy1Q1YhtRnURGCwyiEk6ABuJxZbLkG6XYiA92EMnr5g",
  "key14": "2riHuZTpFEuL44jMNfT9TqLB8knKK5rB1Lf2EwNLZgJN4GrPqC9jwUU7kixkeG5urCQNZPdELcqmgA15kfiJDmQV",
  "key15": "31VUKf1cp1oJEhETTBhDHLH5MBhs4QQZfKts1ofmuryfSdZbhvRdSsQQW9wopzyLJ9UBFa8B6VJcB5GbtzeKMFaZ",
  "key16": "qeJWta9RiUZuuw2pS5qTMEhxu8NBmGLENJrWN92DiaSXrMoQkDFhUmrQB1RiHgEdnUNAtnVS1MVhroHcAGn6B8G",
  "key17": "wuEAp4XJQkHTSfEwxeKuGuimJWtEuwYbwVbhLbXwCieHbdvp2Pj678BJC2YLDjr7xfkaa3ELNFfe5TctaCx1X4m",
  "key18": "5xLQTkdfuhaiwdE44UDBEx3cG2svNNeuSVnPyaGSKr6Qx6YWrwEGHyoCNanq4DzJu9xWNSnHVAXzHSjkKVhXdeVi",
  "key19": "638PUYPQjpvxsLW659JUKoPva2cRbRDfggDMqiJEkFcyYajeHo46SZbSWbyXcs3qwArmcGnDE47ZcSCrc4iQtjHu",
  "key20": "3Ve8ntjtof97s7QrfHcrZpLXGoRoBLgRcUp2GkwpqckPVAdJrjRkP7A9ogEZC95QNp5h3t38RMpCKLS2WzZU4Moi",
  "key21": "grcZt2Q656egMzwALFup9QpongY12VdFKTb59cohL34KvwrSEegSMaNH5tTKKQ7aG6d9xipxLj4Cv6oVbcfMbzg",
  "key22": "4iEjDuJdv8gyorqmjYvr8Rh88W1XTb6ouwfd4t26Aohyad5ojRMC4Vs9Ntg416fwZ8h8aHpNmfTQRhffbuEJraAc",
  "key23": "33TnLc7drccziRyStKK4brzVtrihTbR1SAtTKeSH9Upz6A3xGnCEK4ndSkgikTUH2bmwxw1wNNHhSccaS8mDAu4e",
  "key24": "43LfHYWX1fV9fWawfv4AtgQrhoQzDauXiX9Nu7u5Ai7KNKnWU4j6UW27565UU2YYRnXYzM2a4W3LAdNfvFix3Rkz",
  "key25": "4A3nBRbVAmMSA6DMnMgSZKqnDXt1pKbKkaArPyMyShFzWLkj5sRMtDSDmtq3MX9Pf7qdKEbopYijxKq5nf2t3Bpu",
  "key26": "3KQyygyMVG4LEW9KzqYKk5uADSyVa8keXtA7UeeFyf36vtZ2Wv2yDuwkcxPN77rBJ1vXzaxtt32WbEcFmrKMFspk",
  "key27": "31fFK29VhEqssW3c8vwVEFggBU9ehzExjG8mD6wFKWacqZXkXy4SerrcUZeZcQY8VwP4VQ9UoyrXq81XKcXe8jkC",
  "key28": "258LZZzNNiB6FxU1o5NwoPSBeuGCqNtPTBuBCHdQ7JgmPocaHbCHj4XFKk1nZkGmoE1pTgrdA1Gc3aS1w1USCkwY",
  "key29": "5bWQigB41ivtU5afJmu5Y9QG8gZRghRLxHcCYbwD3CHfE6t3HtYMq5TXnmdkvj47wRZ6GUtnPJTLv8Ae4jn5FBQy",
  "key30": "Wccf7mvaw3j4YPHh8ajdoGa5ENkKEdmDa65SmVKe83QLQzhC3FpMJJhred5VFpBJnZ86y6BnWziGge1KsjsXpx3",
  "key31": "29uSTTRhax81dWPWfP74jVmTdp5892mW7NKuBZ3mxfnichC4bqcNCEueSBHbji9PuheTeGPYBafBmxon3wmBpKR2",
  "key32": "d8DHGGj5HcrnbuBBqUJmXpZgnD483PbyvMvmUfBFEykwFC5Pt4BcFTdrtZgzUfAq8ThH9iJS9GfPyGFD2sCZ5ia",
  "key33": "kZD3WQrxT8jUbyvFNveHaS1jVP8jZPmYmXeLsF6Sn5p5amw4NrBHYEZwhitSB41FD2F2tronVc52x6PA23caE4t",
  "key34": "355yfsoDGP11QNYiMZaG8ShPPsmXnNi18CAwu5d3ZNUrvVkrzK1gmGo9PbGiPYbMJ3w69QsA6ZgzNf1GmV8iLGwW",
  "key35": "G99DmPsB1caHdwyheK85VqypJ2XfsTgdcBgYMtKEGeQKvsZGehRndv1XocJnB9pkddBzX6mvko6Xfqvq9T7b5Ej",
  "key36": "3hH9eWmCskWqHgFuunAE3bQktwNXT7yuTnCX1xmDjDvz27LVJTyaHWNcxjjGBjGVn9gSiD9BPFGGN9MkicBbiif",
  "key37": "5DSMVwoCxPyG6UynZuvcy1V8nzH2ezZSmr8dJpq32i2VgeHRGzRX3ogcoTqB7QBsPSeEKUnYMMT4Y7uXSabxQNrE",
  "key38": "5makRUH6LH4qQBw77Rsjv4ZfCUtFA4Kwu8TXqpXVDtUhYFydQhvhX1uBvFUxJsHedttBrAU1qwjHBKx6DNxcmy6C",
  "key39": "ATEuV26C774oxKjpbxkN2hnMxa17zwQLZqj6BBYMBmqYxoCQbqXQy8FLczpUdSYC3i1yax9fzbhu2TM9YUXv7Ya",
  "key40": "2zsJKh3Xr75PnWpk8tHFnqfwqVJjuWfk8jQ9YD843oPf11zDmJzTsBCEZcqaAyBLnRm9bHAQdiZsdET1iS7ngFEY",
  "key41": "3o1EPg31puyaF9zXF1MtFXjUePym4ExZjWZQRdh1KAuCidsYS8C1mBvTDrfS9EKSguUyp6p2QuRWtPTuM3BexbJx",
  "key42": "4rEUoQHeJVEoZxcjaDbzKgvN2VrA54nHsVZFSC5t3tw8emsYjS1xDtmL7evDNekDVoJfqpvVDNYu8V33a1oqMG7f",
  "key43": "3F5B9x9auzBVZtGAAS4but8CD97FdzAiirmorwpt6of7nJJvxmB1LH3RxXmRxnwJRRVNwmNvgj3bEnNLG3TwmVEj",
  "key44": "3y9eJBkE8aQNTieso6e4TwexwvaEJPsfm8CGyE19LA76xYPXtz4Xx5hdmL2c8iTsfqH9HxMsm4YQ7LrTc2jpnKX9",
  "key45": "36xNMoZ9TWhearCidEgDmeXF7svUonyMbUoDHPptg9oBJJAdh13reXyd5jJ4JGr3thpJ8Tis2U3Q7dML1mHYCj9Y",
  "key46": "5iLdMBHmuwVokP7NTNyZgiP9ed1XwqGkvqWjAttWFrkBdNDWpN41LZUs4oj4vrR4qpDyfxVBveRjoEkw6Zn2tNrH",
  "key47": "3e5zacLYEB5ks64aYgoxSS5aMPY1ZGDtraBk9KhesxdDFvpddKBXYYtYLBaiiWYrJLFMc8F8bQECoYe899wtXSJt",
  "key48": "3CrawpztmwPah5XTsPJRfv83eqD2sUpy68eaxsrtCYJECAL9qrQ1Kdk5KtGsHWdbCxDHNnwS6i3M56yoZNmWUz5c",
  "key49": "2mwe2HWbQR4wrBBCC8k6R8UeqLFYvQfLRySfyVtg4YRTR1YB3W4ctAZGX1XDJFDEpJSj9VfY3UJFrDTk7FdGv6tV"
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
