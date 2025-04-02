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
    "j9cF8HAcapns3PKu3CaWbu2ZCemBHWzdnVizRp51o8J2jBG3YrTyiwvjPDm6UJRGTCv82gE2EHgRs8v6W5m5H1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jc8mjeguyNP24h4U65nLSx8oa9ngRYUtfYnNjn21vxW9Cj5DnjH8SehVCX4xcxWC5Kv11q3buSfQHnkdLjvBb6q",
  "key1": "315Ba5MpxZqBqf4LxzFrm2zg9o3D6dXpxtzxnJSHMn7GcLUF3WTZPfcc3A6KT7v4uiVc7YNYzVgTQ2UYUz8jkSde",
  "key2": "586W7cXFhFcanzsjnbWg13kkdAqnsL9xhoN5Uok7jVoSPJok27C4eUFzWdSyPPUN7vMYcMvYxfmC5DDVZafqzpf",
  "key3": "wRAjNi5ousASVj3ktbXC9DMF9MEzZK3V8UsPtwHtRDDwHVcKy6tZuTCjoHEsM6BFQxLTUbTXhonwJxHDRDp5Xyn",
  "key4": "2y8p1ZrPN6avVVZGWv85FsH3CXLiqE4Vo529chEQs972DACRrGVmvPCTonK5PYUfWJeA9eXoReCbsjxNxaDw7HBd",
  "key5": "5sUwzhmFvNkUj4jFAcjqCV3Q1PC64m1qUkH7APhPnE1KMiDZFRzKe4eqiaRSAgemUz46zbtA4Y7uX5jnY5TM79Lr",
  "key6": "21LT9anfK3Nwsp3e9Z3ZqRsxhsWTJZDXGdKUbMNcsvuo7S6mwAWbkdpzZnNez7C2Q9iUTj72VJpFPzLGv9b1D5Z8",
  "key7": "44k2zTcNK8pSHuEdE9dzSgZDUu38UjfV2JFjB3hdiWZKczuxrg1NXZwFpBrDswSWZ7AU8SmtySjxyWC8S4w6pvAY",
  "key8": "2GcDUHTPej4A28CSNU7CxNN2pjmnc9uZ8mBChqimLNWLdiKzPyGRspqT6UR33dg3mH2fUQCR99BDCyRvf1r261y1",
  "key9": "4AgQ5d3vLBJ5XJRwLGKeXE67vr8TE3UhsshH4BRZ1vqiVJUJSrwUcniaXLn4XYgVLV3r8WWJUEyyusxFS3oikz8u",
  "key10": "utpGNCudpHfv7zHzHFCjY9soC8bBfCi8Ghg2MfRLHJUsaGdjNSVRcNcTLX7vLoEaoTdkpwZCCStFE7yuTXsSm5t",
  "key11": "4esM4iu9rV8VEFxmipnEd5NXPtuMpoUJRAumg4QmYq99JLTeE2iNRyqvgoyeKcwmMnFrk17WHPAih12boGgvbPrc",
  "key12": "6tJxjUDoYqmE1vjP4n7aGSMCFXH6qUXgMtUREUnDG4mZbCdfDDn8t2rmTbRbZTSyyw9hNkBiLhT7oYfMuuYNWFX",
  "key13": "66gK73RnN4k6BWdGyANUhSxb12nbL3toKg5fW8YVtDgsx9NYCFFVBHQh1mDyJgsMZkW2sAfv1uaMLJ7hvfJmFvqj",
  "key14": "414ugMVMriKWBW9EskZpFHKNDEkgoRQMHFfwAtHNst2suYtQhqR4x9nvvMnkkPpVxtTf5qxKQhuQxECFgY2iFcLi",
  "key15": "4XFbtqRcM4t8ZFNdwhVgQz6n3CCgdZQHukRvCSUsYA1wLyUFKDJ77oeNaZZ1LmefLYfkkEZFgbMRkp5JK9HnXWmx",
  "key16": "2ijGwbau8konNkhsyzF8Ab8hMFwpWd7jXtKLpqNwGgXh6Cn3yTthC8x8pKVZsQtnMpkLjtfn3vDqD8zeywnEgpDn",
  "key17": "3pKiz7urqYA2DPKGdTXymoqK7uEXjeJWBGHqkHAEazKzhxNatT79JwebotMZQuLLvsZHFFP4TgJ8tbPBxiXL3kKW",
  "key18": "Czv52UP1Wmbyrpieie4LyxU8U2hCmWecHid5Hy5QpXzFLqZ8G1qxyChUsT4QYKPfgSrpvVTnd6vCHJsTLMQVHW2",
  "key19": "3RhyryE58T4XpCTViKqCyYJE3m3JY2Qb6SXRn76zeRGDYx6uBn7aqNQTk8bgQjqdatG641wsvXZGNKn94nVCVx1s",
  "key20": "3EgBCKNRHoZx3XGuW8J4tbGijsm7P9kk8y9S62NowtgXgBdz8KGaJmUjD6WBQFsHVSvQL43LhybYwDf3dSDxt8GL",
  "key21": "5neo9c6EDV5bE1FqQzDNcnib7ocsMCNhgoR1WYx88TyGt7NHnkJhubSZwJxxYFA7sRNb6Ec9pkCYjzso6jZjjcaq",
  "key22": "58RqZvMvSAPtPZCfxga8CKzcTerpRgMjsUTJW9FHH2BREwRcfJJp2LsvZzWq2i4eAovyTFFnzgypietgzd6MthXP",
  "key23": "48HSUebBXdNzSRPaHdQXCyHXmjftW5EGMAqeLE2eM6CwdmA7mFgqsf1XtVpBfMMaQJdxi2z9Au4Seoq8VKbjm3gu",
  "key24": "3zTr6p9wPvpjRFNmyNmrfZKhW6ntw8CcNYC6vJ8wnDJuCgYarVsriuJMErDVcGpU1nQkDKeWdB6mQU7vZLY2Rrei",
  "key25": "5JjPLigPiPUmGAvACGZhQT8scvTeS4mb96WBsju3xYGc8FXpKjjQVDwRLTXa16RSg4tPP4qXWroi6tUT4JSYwNDs",
  "key26": "5mC8kNNVXo4oH5ZmTp4dsckgM9DGFsqFZCPRNvz1jrnttdrGDaGAFszFSRSpQdfbhuSqjYChdnchAd5j53GDGFUm",
  "key27": "59eiy4spM57a9A1TA2qjdTfs1Yd3K2TxsXyaT7c9dh9PPc27MN4af9dFVrqBUAa4uEEUeD79LZKZVuGo5Pb5XStD",
  "key28": "222di5dnRUdEusT1CSAgpaCNLz3LJFWhq3c9H21nHvm2FkcSjakJ9wiaAK2pQ2bvXNYBn665C4JdSWofDHHxv4EV",
  "key29": "P2NCJN66tpTXej6gwAy6mRPWZVUwvuM1Td8kGAnu1WenEEzZLY7E2Ep1mftGP9oAwJhrqhnDMtWCBnV4EesGrii",
  "key30": "539Ko1T5w2VVybzAxHhPEi68G72xKE6vAw7fgfV6cGtW5y1H9sZfQnoWEefs23XFoiyLp7JVx85VJajw9oqHVj51",
  "key31": "4fAqcJ5RUD8RtemeMUaBnMs4sbGxC5BiQMGeE6MouMTpRsNmRuUQ5aHe1oetrf3Cg9LoWxgidYF21RKYUyAMFo8W",
  "key32": "2cRzaGcJXvezLd8FVQ2LiY3YEf5iJnwKSXSXvAipBXF95GsovRV7yiT6VXqJypBeN8vCTWxTo92F7967PkW4A65x",
  "key33": "myewczNgDQjHpHW3GmKYB5uXppLkf1ZKGcdHT3Wp8i3iZ4o2CS2Goavs7cR3bqzRQkc3QjE5j3KwQiuGjq7khSp",
  "key34": "3tDizGHdqnBchwpAuqJG5ddDbANCM8kMaHu13hnRikqA2saaRWs5uC4CaHqCvmvEqpD5EkJdqXhoq6VcTQDZgYEZ",
  "key35": "38LYCjix7WzpHTz1E9nM7kP7FBy4vNaE5v2QhGkAkKkVQNGsdXU3VFrXgMwWYQXnHSofyzQkf9mf5niiWkLK1dYT",
  "key36": "sbhTQJQfj8gd7AWbiYUVi5LzYT5GA23t2sBmz3w3RpaJad5thvRu49dgj2omdud4CYVFu4WGi4jZLevKtMBBRYB",
  "key37": "3S59BWQsvqcfvkfuhimHQJ4qVdXsofG5pWMEbYpsjh8FsP8sDcZNk9L16trVny95119VUnJXxrkSLL2AktmtnQxX"
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
