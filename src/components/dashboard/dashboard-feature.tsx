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
    "3x9EAr7bmQxxgzBoyjeDeatLnhsTfQiNNv6Txvu4KtUWaUPwfpFCi9wTERf5KLTq3SbXu3HZHsi23f6LrNK3WuFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m9S3euFZa6i12iawsLRWWibMLQkbVmoxQWW4i3vnLUsbfaHUPT4qqEkAcXpaaEputjgyGV5U5tH8PNdd3cYjoTn",
  "key1": "8LnMUKCLBG8XTD2LnjVhLXG5Ait6jBibEAVFR4r4Sb4VKSswa3ibLvQ3WbhAL72d8kEdzSsHjemE2PWCLkpELKw",
  "key2": "fHZhjHA3irURDgjhnsJEtsobT7Xw9r18Xv8g1aPaZLgV5ZeLiY7LWM84dbfeNqFrsGE3TAB2teWdgZduMtgyHDJ",
  "key3": "2DagFAVscb1M8i5ywEEXLh4wCHAsNDJ22NgsBmsaBnoWxbvDeeB4iPDRbwHNaMN2pAnfPvNazK7uMoqhVJMkbAjm",
  "key4": "nL9HokpTueku1imydKfQf2ig2NynQQnw8yhKdiRiih743QCPWhqRHBdNG4Zuovx18UtUfE3WDyz4c1PcEnRA3VW",
  "key5": "cK9YxYs4UMF6DM1Nb56hAK5PWJFbNSoTMz8m6VMh9sqeo6X9YL3EeEDX9bbbJpo5P3oDF6UH3eVcNRBAHhQUAgx",
  "key6": "2e35J8BrDxZP5iVZv7DNGGHkJ4xYAaWUR1ktQUiMDHymdQpsKrx9HsBc6mXS8wxjUyKHY3ecFvAPrG2WtBGYuj3R",
  "key7": "2UgiqjudAZuiqmuxWriWQPJwJSg7CfKqi4jGZ9onAmVY91PgvASW6oVELZAfqfpcfN7pcKcYgj2Xu7Mu8UKNk6Yr",
  "key8": "3XHfkTzRe6JXsPhWifZaZbLiJ7DFwLdiCCfe7Di7jy11xrvWapc9xZuRzs4bMA5Uj3mCHpDX7AajP48updrt2axi",
  "key9": "4xP6ddAQUrFijLrgEexkgpLVY1ento9Yi7rPyWrktCNoGHnJVv18HnFD4YLQWtzFfTrnDEkZuHWWRibTUsMgCxw5",
  "key10": "3UvSKjsfqhZkJitUBD2FzQUkn3xbQJVcZqxCXsFxUmo2rvANyQWNnbcejw8PerncretLjt6ec8MaVrohU3PAPDpP",
  "key11": "2fGb4oGcsG5ha44wfhBJtWMsat1VmgG75EsbrjRmT53uGzaoJMVZLxp5jMGeor4LFPwb89oXMv7NBAPgh5MWBnjD",
  "key12": "3aj4vdQ8m2Kt8HZVpG2dLFj5gqPNQ3kw4LZFysLfJqX8TTbgWNP2oe9pEuzeLairNjGdy8D7LSf7N96qPCKYi8ub",
  "key13": "4dpjpXzxCpVTwiQvQEwrQ5Tf8n9hj63ME4BkjZA4oPLfx5AY2WXnUmDeKux9CbeQ9bsLaLqFG5gAdpFzVhEY2tbP",
  "key14": "41ihc9shcFUSfv6VdURgafKUe63QCFtx36Se35qZv25fghRVrQVuxpXBoMEgQygCovLpmQuL2QeJ6ybZrxjWeFvW",
  "key15": "KWi5DSS37gzsUrF29r5jrKQYL5UeSdsqYA9mNxiXGwtRKhpFCKYyDEBnEZWMNhPjS13zKGxc5G227gB91ryD3wE",
  "key16": "59RBrXuvKh1tFVFVPNZrqJyt2bXZneVywJmc8Rpj4RCK9HySfX8KJgMxuDe95aKdtP6ZinT9Wtf6pGHHvzvTD8jj",
  "key17": "5hFQriaz1cDbEEbNHJLR6weiyvgC5ikjiDw9Y8hpygvpgukrhLc1Q7xPFURvmW1YVxRTstJbYf9w4g5z3Zj3PNZE",
  "key18": "4RtK8xeCCDxiRpNqt1UrLp7jQiYLVSsY6rAFYiDtsYDywEfwy9xsUpxTARKqnSagsLiQu4iz2nBgj8Y2bfzNiNDj",
  "key19": "5rac6ahNjobYMdFZPK4BgV2yb5qZoXPugq6CweysWzKNxqwugx7DmEvxffDNc78H5UUzJFZZTvs7vBLq46t5DqCD",
  "key20": "5jFr9idJ67t9i9QpMH35Nuq91RvSqpyprbBPoqYvEmgavNZhVpBUPsvDVhzUTfqnLDPTjhYURsBGJuDCeg8oaMJy",
  "key21": "2uFtUhKST3kEEmHBmobh5adgxJEtrzkNaqtF5ySdABfCZqEcq1FHWKLARvEZixF1oZZ2Rmm5iTfBF4C39xKPgoLj",
  "key22": "F5NHDGPSLvQSkJmpgEsk8QLnwB7JbjHVjqeusxhdbpLeJxogxDRDrX3YUf8i8hNK3JSA9Ugg7XfgAkNhJAHBdPN",
  "key23": "5p2RnVWvQntDMeYCsewXzJ3u2Z9ka7K6p5sB8t4wjvUm1DzyrYL2EQJdAYxUuLCPJSshMT8DXrJZC6tRsPdG72i2",
  "key24": "4j5iLxLsDpxhDhma4hG8Nt1gdkGFAiZee85WsZBr1KLTgi25bd5Si7vHMVXLqN3GkRPCj2LkE1EUQgmhG2iYPhsr",
  "key25": "HSSn5976E2K8AM3yhb3mMUsUJ2H3nKhbKpU6VRLejKzH7w5eEpd4FiRXQBE2BxAqkpUeoRkL2EpPavNibBD5WJB",
  "key26": "5HFTsu2yV8ESDNhVaQg7HDvhzxDW7yYecAob1xWSXbwEVPVmVGPhFQ954nH1uSmGrV3LNdHJZBVMabjB7EMnWB9n",
  "key27": "ATAWUXbR6sMWQNm2BNUBxgpxegZKbUjiBVwXEBdSZKjNqqFUiF4EWgaN5mezwKjAYe58ojUcZwfmVEmxMFFM2MP",
  "key28": "5gqcckecZc3MV3TJeLnK1ufABBaB5jaqftiMX2hRkRakPDCNSmieVeB87CnoWyKa5C7wk1ZrjHorXD7FASAY3h5u",
  "key29": "V8W1qTTYrSarfbENZv56Mgxhw8A7yhyNZVhF2NyxyEuaL7tcWmAzyVy4svmNp9LfmJHGpWJU2SdG12EjDxsjnbq",
  "key30": "5rRXCQRUL3FD2JiSJgMUqWE5BnhXaci2Rp9rtnwtJvhUfWojCXrCjN9ZNgK5Udnk5GXKawJkHKaoGSyP9NDisRfr",
  "key31": "4nRBWj1e5wqFVDaUE1sUMHsM5iPFVJnNrS56hBQEsE6Zuay2MxAB3atWaqcN4iNEyd8syzHn6Ngb9dXZVT9ghgSE",
  "key32": "3KmGaSrgJsBdQHEySMg8ADwdMes2CSES1nhJ9iNHvySZfoRiRnuD4Uw6tFcwDZfJLnLTKywV55vGuEXoJG6dnXCJ",
  "key33": "5Kf94JpNHVaJMY7Psmq2sSra9PCekMr3qDCAWVyd9YYByCvLK33csRAHCGBWEoQr9FwCbspeLLdwEZHYBkWQNmvq",
  "key34": "2nLdyJWN9igFpmzrv2GQhrWgRBp82BymzTB89wHZcTedoDwkB3RD22ZgiNJkpfccVrUwV1CFhreWhxWo6g6ATsa4",
  "key35": "5T38VejGKcaEaCzWTAsnw62th2cD22u7JdJ1HB4itn3QRFxXUAf3t7yHdiHbEzmBcieiUrFeesmt9QxgwMLWMGcX",
  "key36": "59R9jomWj75m6HHhTLwPhNgFXGLy2F34usFoBnXrdhe8GCQuKC62TKVGK1W798VFxpQDiDz7mqnL8phJqkVK4sh3",
  "key37": "5xSTJ4nmzNQDE1qHKTibACtVL1KnV9NWnjfWUurCCQzYRMdY1deU3o4VNGA6FUNhLwqheGdD4i9dNmnkTtVUpFZ8",
  "key38": "5DuSTwfRE5HzeLAgSk8txSphfPV2uMFsQRGrGcZ8UXeirnTiHHsWuU5TSAs8AmEMzp1vF1EkQMWe9z8nMR82xVbj",
  "key39": "2SrmuQq6zdd1qrSkmBadyA4buEosRvoVH2kspwCxvyDvderG5vLSo1is9Wx1KAXYRXt4HYzWdQV9qNk6zPbBGMwk",
  "key40": "4kXHEKr3YEQNVnf4oZ5CdKPpxWqunvregMhz1xBHTV9pDWsqS5dbPGZP1U5CLCe3qG1AGmjenSQWBeYEu628q3ff",
  "key41": "cEr5wQQEVixpppgRELb4mrD6A6kKAMVM8yJfn5QDAUeWMTgwXGLqJGxcx4vsBWSfnuxhoQqLmTm1HAGTY7qkwim",
  "key42": "Z9uJ7DQWdSXCeGSKFvFgodaZQgfD4dVzwnXWQUEPUyFKYdFqFWYJbmcj2pFRfNe94c4ygUR8313BPtYxXd8nRem",
  "key43": "3aGYj3seYuKLqf36ddfWwV9fiUQRFEctC3ieFqtXTfoNCguurDG3xsV7iMP2Y9tqofjCb7s78PaRZgZDS8gEdaXM",
  "key44": "V9hPmFMW8BBcPWDPNFJcxHGd8KqHkvjrv7ABXhWsA9Bx11R8Lyjik91MqQXBxVy5y5gW1v6JfWgvosH9HdVtR3m",
  "key45": "24jP4rJ6ZkMW2tTJFjqexaWEK5y2jGShsuSjmSTnHKk1MuU8YnWgVdQK6HhP6dfiuoiuE8QcJ27E6yzS8SkopxX2",
  "key46": "5SMmW2du74gJt6hkgSah5JGotz2atLpJMjswJDnpA23NwrL6WTNDQnJDvkVWGquXEwe57yxgD8yhGcwuo8qgvaHy",
  "key47": "5ooxBhAKhe1C8Zj5hFaBxK7i8rPkXNmdMFNbd6z8mxrX7HRCFvr5er12yHcFNXQshbkCF9nCijg8fKPv76TToPhY",
  "key48": "duUmYJhgMMpH1wu5Ecz1thRWKcfYaiaeNLUn2Nvp8TqpsE1LKYEj6xLZ3puk9R2ySkX3MxEQxmGSD8QdEzVeXnE",
  "key49": "5rQuwtAXmd2WaZMrz4g2Rrfo6VJ8BsTsR7KfUKgvy9nStLa7RWmWZh6UHtGa8GmvirTZDDDWceEweQL1LVjDa9uP"
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
