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
    "59sw58vTeepi6MXa44M5iyvrWuk2weNxTfaAppka436LNcC634BiPRZHo2yKd31FXFzbdCWgmwdhmzuMHT4gAPpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irGXVzxpVquGwEZGMSPWj1LfLFN2RkSdcPgJyfTfUQR1fpyc1n9gkGwTUpAgNCaNyWXT34aBLbX44JKuo7aJE3t",
  "key1": "5weAfbn3spyhuD78Hgjqejw49r43AjjtxAG8ayMTS3KLynA8BMAKgg6dJ96uNuJPZRjsLs9x5ueJh59yztMfgFZt",
  "key2": "34SfWo6RMtJCUvk457Uft37AeSbw3oEtuddYv8BhPyQ95frtDTutTWhgg7Gi4scxnasqV5e5maBkqhkGcnZp5rEb",
  "key3": "5gwMyxy7Q99U88cf39QXRvFVsabJefkDUBw5dwEGge2TRghu24mzPaFUY7RbUqKayyMqby9rS1m1hoBZFQEL8FkV",
  "key4": "4h5B4cELJGMHUXP2ZZn2R5soUqFKoERuR6ziuxv13PAWSnHTaxF6m38CzXXbt9FWcpUugG8EE3zyUroFY7moh7pc",
  "key5": "5PZRoe8Vij1Sa9NhzPXqmxLhZWD4BmZnwBdafJMpN5ucj7P5dNupZB2Tw6pW2DRRT4vLgUdTU1XhQrAQsLrWVX1D",
  "key6": "37CYUe1C5NGYefjcBRCyNPk4N5cMTyN2A4FnunCjeZEZSMuoey3zZiduR698QGDLSV46vjjd9zz5XW3aPU4JwAN6",
  "key7": "4BoSkh4gmkrmzcCgZuHz5RMT865r6sFi7YRSNnudQGtiRJwroVCVi2U1iZ5uaFwccMeoeyGsfDeB9pVr8sh7Hk6L",
  "key8": "pnKKiNPHKvy8eLRkZVuGeLmawjt5x8afK9urrU6YFkoqKZpHWNz76ZQxCExEvDcMFBwHAGAgtQHm5dERCx3dsVK",
  "key9": "aoDXk7AaxTUZS18LnMmTvpLe8kCNJQnHMYW5fac3rsR7W1Adsv89ufjqcntwVQn6hk1nESBUX1xUvnn6EvVSuKd",
  "key10": "21eXft5GwSXWd8GedRJ2AgWyT2YUj1agW8hFbiwrKmP1Ap8smyFEMoyaEpXt9JhRzvuQswUdYJd6awpo6Xsb6E8H",
  "key11": "613PRrmb2fJchtni5p7kXmpqrNQ1Bd5BEhfFeXM5tQTLA6ujTMg9eNbLUvFo1vrWZNhrqJ2F3o8HgNb8fZZWbaJn",
  "key12": "34JCjySNbdeg7DGgGfxbmHj3YGVh7tsDdXK42rfixSi98iMFgJWYVNJDQPDV654ooeoR6CKoiq77XfmNMu2D3Wqm",
  "key13": "33VDdwUkWuYxGjhNETbhy5miWYv1CRrbu1XYUX8AAj4gnWSwE74v6GAmHQdEUCmTw9ec7d24H7MBYrmQWzrtys6k",
  "key14": "3gT7JmWn7c6xUW9LDCgeWc1cjAXBzXrKwqV1c4ACvZPHqchmYKR52nW1ZjjB5pp9nsj2GSBo34XeXYDf4Yn8f6Sa",
  "key15": "4jeEXeSmxTTYhaHEY2iqUSmtDeGxVB6zzoBPyhXqapntGDMvLtnzpoZTrt2FaHQKMjdwzdQJqzbmcRsk4CBZMi7W",
  "key16": "XxM19yuwbPRkXjRz4PFKGBoH7Ha4cNk67217JpafkVRGh2ECkZrbmGdCmDbm9CErDCFuhzFLC2diiLdnZAaNwZa",
  "key17": "66KCSH2fE7VBcJDtn2wEfSdbTdfEUFdAQqo7XcTwiHxH8vH8432Qf82uGwrEG1ShZmnXSidxnYuKZYbqCCAqN22L",
  "key18": "4Qmyskz4uHq4xX9N9xGMhfeUnZzVE61MssJK738eRVxeaLZThoTssNBLpHcx9bNvb3RTHNvhRgVA8yrPP6DyH28p",
  "key19": "2v6Z9mrKC4RyaRLWRkRnjApRtudwm4PrnsMXYcKQJP3hfrLf8NV2WWtKZYSfvyuNifHqpXm7JAH7XvauRrqQb3fP",
  "key20": "24zWX7t6h2pWbfTvFf7sUxfu1mpVUXLG5K1BkzLfCQdDsWHbVe8MB6bTNDs7MvLaCwkweYmHrRELdNdyRsMYfFb5",
  "key21": "3gnczrD2MyzpJmvD9notXMY6aKWSpQmhgLuJ79WfG7zReU2yncQeDmUjFNEKVcziT78PVRmVqUiXdpSexsmKByUh",
  "key22": "2SWJs6xtjDTHMHXmAW7NByYktdm98Ystz4FkseyzTR9cZPKnW87uQDvGYS5wbrszdUWDTwzrdvLbKZhstfv69jiW",
  "key23": "5Dvku31xCKuzf3UyqYp9S1BiMXkm2Ye2GCXK6n1KoioNUiHBUmjP8uuguEsZkxSJjhT5nmr2sLpsc35PutnscFGZ",
  "key24": "5LLXULEogRCQwufJmyxPCuao8UtJ7qjNzvLVTyAwjCSiGMP7av3aEUx59u632i39MkmiSp5HQzfKMgGQmY1CAd7m",
  "key25": "3ccbe9bYTJBN6zE2tnLDfX7RwuqJqqbwJk7foyHqW73jGefSVUbXGxfhPPDjAwnYatPQrR2bxxM4LXBnvFxreem3",
  "key26": "21jkMRQh6JoPr5HxcCdnS8WrfLGysUtKRSehsu4YdnKhk78YDy2SaTLXtcgUjhVdKJQu3zoAb3hgzrEQ3Qn6RFwd",
  "key27": "2RUp9tegZ2hk8uwqHpeM5yRXmMo7oAobWxdXpD2MwhJh8x4WDCjm6SENF9omukMCQ8LZDdajPa4BewMEQ4LsWjD3",
  "key28": "646F7vDYzXDJ7bTSTwHJHqRkf2HNYYMGBuEspcEg57ejNerG6UXakZSpgXskDsF7ifqahPHaSe3cH8JVvEAbz34f",
  "key29": "4QMfY7j61hbE2JKghz7aMt3S2aYEKoqd8VjoNjfWtupgAx7fzQXVQgdqbBzqCyA5LG9vYQUwFRfbrRdx96dN8Mzs",
  "key30": "4aqQT4PCwAfjgJ4L6hFY2jNe3sCSUgLGx45DJWDPGD5UUFch7n94EW36w23DAZu5LUsxNxCTHR224jkaYguyR5QG",
  "key31": "5Mcs6HoPAaTZWqL4vkUNFXxKqEgPiVcFZNvWLWKTdGJJA2qktZ1EFnDHHGUtJtKrJo9zVUeWpc3WpRbZWf6YRQyD",
  "key32": "3jUKxonEkuNmMbcTR4s1UFhcvPJjtJUEGyfCAg1BHNnLVTZKTLAxcoGAgHsJt3SLnrJPRdu62xoj7rTkpZkChSKC",
  "key33": "58Sstga5XwxVQdZKPC2Siwjt3aaGA92FaA2vWr55V6jzmWVVDRSA5oF5dNcLzMYkVqM7SvdgwiruDARFvHyMJvzv",
  "key34": "2h1RkYXon99wodbSBbBTGi9botv6mxQxB4gPf1gZRmBSQ3fBmtGvD5tajfYGNnSvs1NwNvVrMswSXwQej1HK1kce",
  "key35": "3e6g74VcgMLVbPeXm7g4rGbjRiyakKFFfEtbVs1rv9kdLLxdxczWED1ERTduFYK2ur968v3GZauvG4ngtPJXfbvv",
  "key36": "2cHWwSZjuPUYmCsm1Jt1vQ7MaNUMsDYVB5pS9tfL8FaPXXyhFMwMdeUNMasixDnTWu7ru9swptCUtBzTP1ifFPGL",
  "key37": "4dcBzNZTv8gCwAFzWqHwxx2FhrN3URNB59cbHA6csHan2jE9opnr4YtuLp21c341q5KQf2mf463uy6rteSShiJSm",
  "key38": "5u5SuWsRb2ku366psdXkLideENkyUZgtzByUdhzX3LpSFNz8gRK6mebkZCyN3hc1eKJyckez6vKV73JnH9N11pPU",
  "key39": "5fQeoajAAoZDSw37tgScMUvwHRuh5F6eRgixqpkP5M8JhfjhPQvo8xYxKXeJnSD4x67bzuLss688TC5mxCR5xFMZ",
  "key40": "2YcwUCx7XASwBVJsXHucrUukJhTpj6qZnK9g8aYC5qdcRkqShZ1YKb1NLk9827FD6hAXpASj17n3izF2FuHYLMXB",
  "key41": "3gJQQBpRBPTppQ4M9N5Aorw8FPBMsCg9zYHiThQo7t3cqagzVM14SZU7TzXdLqxNqvNFN6YuURjH7PEu2mGfp4Ud",
  "key42": "4wBcSCQw3BXV2Q6uobcTMGevC3mgv9XuaoYKtXyS9X9rPZbvrgHoRDuAMf91Q7HsqK1vMQquyzK85SgZVxdNZdRe",
  "key43": "2NtAgSG912CB4ZtkEpJb8nGcrxTjQotuuhJa1X8mWnVMXWPmrx8DgnKKkkQr9ngY1LPtYztTfRdQkF3b4YTNtC3V",
  "key44": "3fe1Admt5QbivD9vwKfMopYjytkADMNVa8gFRm5R7puhQR3HHgujumUNegPKo9qzNTkiL5CV1FM3C6T2gh6oEgC3",
  "key45": "2ZJgqMjXTukoyN3hgJFr4f93XndzpWZTeZoWakRHXHrGr4RybniNxBpHWAmcvsV5H3AJz81mMfCVs9pYEGUsEbrM",
  "key46": "5SKZ2XhneMt3gHi5DqjJdQAD39Cx8pYQoEmyE4qszfYzz2SHuCqTvfLoHuWFY3yRhUYHkWCfxp6r637XRBxgq8bj",
  "key47": "55tQUHXJL6cbZLwUfwwn82RQevzY3QTxUK3AJnRrXTmmgjpH9EoXQYCZKACyHUBBpH74w6JBJAoyaVAHzVJgcnJy",
  "key48": "4UVpy6D9GFKJadDpAXCTMFuqzHE1FqwBosx3Q8NL7pse1yg5MfCHc9tTTzVrTLgsDE4VZgeM6zosd9Dk6Dze5CZg"
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
