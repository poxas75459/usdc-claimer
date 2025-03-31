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
    "4BGcdJiRaXYoctGpPW2YJ47AZu6FfFBdhodqP5CmHsA9HF99tGRxLkFmPourk5uDstZRWMAYzNoKe5haZXwPxdJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N8feXnMC2U8vUcDY1F87qTmneLPoSdXYHqxdWCfDvRyfpa5sxioT7Bi2PSBegE98h1BXqPYVyuguC9pDMSYkRAe",
  "key1": "4UWVQH3M2kXK34YhgmysNDsXyU8vZ99iHemURYwC9QVi4xnrEx5tjE3XJJtJwd4HeYweka8Z3nSoagnCzp26wjMB",
  "key2": "9bbCrpGvVTPQhbggVFBJnPWv3c28ivkyCfnzvGHCXwR4n44k1NazjYchy6p532JgnMLsieB1ugJdhdhyHeQJHA3",
  "key3": "2nXLfmZu3ReHMTU7dLVJUyLuWmWNDKftZv5W8pBKtCWjbaQ6Fsa1sXfXpgQ7sa7otCTKKir3v15zd3rkEiyabAEN",
  "key4": "5tnwwWAHNNEiy3r5xhTxitj3of8fJWFLxe3boAdgZkvv4hHxG2DMdQ4u8mAQuik9Q8CA82Y4NW8DVeBiyVjzra3v",
  "key5": "b7reR4XLnA4W49fLvvUBMAxsUDP5N4JXFEASbHF9MeT7kK8ivpqbcj2Xyv8H9RHGysi7EkgenmNM2dM6HyWjQFb",
  "key6": "2XKVs4tgy5mN9bcVHszsYZsZpWcouqunJ89VybJuokhgce1LXdiDc3gCCJcgvonGcAeuAAD3q46nQp2FSc3gurr7",
  "key7": "5U4t47YDWReNdPeMgW9guPeUSaxqXGhZhqw1abmcY8WdCmD8vDhrKXAB7iszS2R4LJ8o8EBWRGZTVH5AXo5cAqUR",
  "key8": "gsvWJ8rwt1TGFYeruUtBoHTx3gCS1wbDsxwXBP3G4UxyRqZC8e3ZgsaSCDg6iekwdA5ffX9AD98JHhhbg33m5do",
  "key9": "5fxFAg4ronfZmtXPvpjibA5M2JNH9h9EpXTthh318335u8Yc4bYE6Q6yEU5cabmhUtKUxM61RMkf1GuAyPxUVAwh",
  "key10": "4CxMzdPYScTPefX8q12pT3SK9YXFdtJzJS4sdqzn1Z84icnGWsAG92DwNLkVHQ7Rn4LaCavKnMJ3PYEH3kVAQd7x",
  "key11": "3TDxQ9pcztd9oCk8NhU9Hkp9jZBAzd7FbRYXM7bhaSqyVGNqKbh82WNjsT7VrXmkQ8VAnsaTdFNwJfCcugnGwDok",
  "key12": "cKUGBy5uNdgxWBZfp3K4g8L8jvRDdQdmhcvswDu5f8cF34zdTrRLfBeAoCMBG5CEroW8EtkynE7QSVCJtjrY5kX",
  "key13": "2uBasqLN4C562mXhzU6CqJVc5AD6ULXntgLqg4sWLFKPyxFkD12YbeRKL96sL1X1gEk6fUHUnzwMJT9HW8cp5oB2",
  "key14": "hWzpQn193iFAB8HB8C65yAKSnioPdYJ1et7Yy1A3n38TXEyEwdyHc9jmQgjCWtrcNfQ1vCUPabQfPHZoMe4g6SE",
  "key15": "2Fke2tUqZYNJYLJrUVMkkigbU7qVayawEa37oQFbBGg492C6DQMDtEfWvHep81zP7BnfpEECh1uKsgv5V34yeBkn",
  "key16": "2Y3EjUjhWcdqjq65akuQ3WjBHWxMKpUfehhJmfbTaKzWundDER2MLtgkyXEB4p5WD3g2WrBDtNM8G2sp9VnJWHJi",
  "key17": "4RmFnAZynjh1HWnFz9QQQFq8yp3rvNNr5cdtiRvBoNbaMaD4Cw62ueJH1VCj6TLtrgVUCLJF2ND6m4mw1HTuhJ3t",
  "key18": "5xotBkomMMPU4coGp2SDw1otrJVupV7WztuvUQrcfJbPiLhPF9SimFxQ7avir2qEUoFRSUttB33VnXwvKYsBgqSi",
  "key19": "3GY7U194sUgNCEdAjwEZJTzYmM59aPmTw1kH8EW8oWQwzFNoydUj3h355dhhtwcWNou9wRto7TjstazgTSQHKbMQ",
  "key20": "4D5j6Q4ExkYm1Y3XtCGjVBzKjXn7dnb4PYHFMqbh641xuKjiewuUQ2agLd5oNcyQzcqTVLmiCnbKukHSftS2PqFP",
  "key21": "2iMTUeAk3m7XE7Ytks8ZSvjc3FigcB3BQvAQSzvtXP478zssqmzUkMfuQpVxiVcnFHQrpScnwFKHL2TuiXRQf3AV",
  "key22": "24HcXEPPFE7bhJhjZ4PbUY85Ziq22ykLyj7edtk3UqgsKJ6dnHvkBaVuEdMaBVajHaw7P4kdWfw4pBLfAxD49JjD",
  "key23": "GK2bTFXGbaJxgKtpTrUAu5mfhZCFnWCB3kaURXG9xmiLSKkwBSsGWyRL61Gp6YTGJRCTzHJBbaBuhKPcsBBceSe",
  "key24": "5CKcTm1NdCAFLxTbLiTjrNKbdEof5gg64QH5oHuJBJH1c8hxqSMVzMhw3JHgCaDspBXhqDTMgSG6UwNMm8D413Mt",
  "key25": "25e4vEBKbBSJdXUx5yDoF7ZgokpRouqo56CsX34uVD5hVbmgszDDRYRx7jwN9zMaUCkAnHpi7kWcTfHJ7nQHChtK",
  "key26": "34MKwTofkBi9UTsKg9dQoZqsqiWTdniUNz1Bh7gefphbRHujmsBw3KWqXFYyVjBXYSLYSomJpv6A5gQbW53GfWvE",
  "key27": "5WhEmyqF7GZWWDn218KjFDNAXTpBUStnsnRfTyBcYJ95VNRTNyyxfNbSgAUYRYUfjiLwiMgSQfHakiTEbLaFYirL",
  "key28": "3d4G1uGqAsut7T2k18AC9dCQPoFqRLZdWzE9fwPkvaZiZBfPTduQts3jb4qYcAgiS8UNfhDZf7X9b5iRik1wn7hz",
  "key29": "Q9d6zBfYXt5rVXBgVeoLxetsULBFEYnDK321oyFpxLJN7VuC9VJwjq4nX25mHLhMWk88Dsp8wuxUiaGPrFGWEYo",
  "key30": "2AubcdRSAtdjNWwMqsWg1uZ73w1NYMAkp3zf2Qoda4NbDR2RxbJkauyMstYxhdcKbCDS5sBgTG3ZicZXvo5ssu6x",
  "key31": "2M2UqWym5n2Y2GG29a2RrEYBkC9YyXcs4GLc98EZX26KHn1v1opXjjdFUp3QmKUL6bSR766b6KxAaL7y1mxJNrRb",
  "key32": "5a2MKRnBGft98zp2aFzTixRyFJfpJQ6JQsGnPPiZPTaj857YdDsKxhd4c1ZwgQqPhCmi3LfocJbmug2pFApmCjsk",
  "key33": "2UFkJCvtRJGP3ugLcWBExjBAZQVuSnKnbx75YXDk8PbybmsWtS6YHXGkxWpEj9nzB9KtfqhV23ZC6R3u5LdqN1hn",
  "key34": "37Q981tXpTZYT5bQvjJh1yu3sNb45EDpcXmLgYkHbqT5Zak9crnvLi1FAbuGC1YMERywG7TJ7Erd8FPgQJi4hqFp",
  "key35": "5GYMiKHjffJkhm9N8NUL7U6SatSrc5XVKrQpjs1CSdmTbfeKSv8sgbnPyjP73pwjbsDYGZiPwKtrfWuFGPPqoT2R",
  "key36": "4cNGym1VaNmngrM5Hb7a68EmqAFmzXDiES15x64hbE1wdL7PEGsvsdAi6JLK5wSX5G5VkMndPxJVPWJ2QsE1dyT6",
  "key37": "4K5HxDmfh9KnpgFBDDezFWmTKWu2ESET5jPPSCegX9vxYLFtUce1jZqiUncmRuPMHYpgth9WcKcCJN1CcRVkpgBH",
  "key38": "5J8Vnqq3vj6ztcpXUFR6JaJ28JpGqzJta7aqfs36ofGti22u4jF6gyfLUh3AzLtu4rYbPQzyST5M3r4cWNe8Wmzz",
  "key39": "Tt1B15DGKc594dpSGi9eV153QLNGdXwxXir8WtkHJehBTmtcwY7qoWnMWxWh3Y4iiM83UbtB9mCv4gNMzd98CKQ",
  "key40": "2edsaS24LeKEi8X2njywZFuKMaJVLo7u7zA3tQah5dSdyWAQHksTd2SwZNgjSHYP1sKDNvMNvsy6B2thspT6kfg3",
  "key41": "4aCvCaY7FT3pQZ5poySqvUdqMcTGFAL2DmTCqyH8GJhZ4RXDrQ4jpyAvPMiZuPAoy7Ze4wU1rMNmFoDe2c44GWnQ",
  "key42": "4DFTu1rYDxDzoiuGNTHU2RsKikynBRsXzPpXMesaKjxfUTCtpi16EgZUs7YXvmTAjyxdVwPbgieCwDFLW2EAJLdK",
  "key43": "kWUuaWQ2nwueBpYJuo4KaKwqSp77Usw1yAkq3nBwwH1d2XWyEodUJeeA9a35k2izRLkYUShJSPdHxkESfPwE68a",
  "key44": "5L79XPzznURuWprD7vVshXGLjq5eN4eGeUHn3uP3mekd6Mxx4a7QcvHEgqsSBHxjTBmtW6ggQCPyTNeydmwo51V7",
  "key45": "5iJJ5jG9iRVUUdCC4vZLC9prsDAKn5QN4pd4HFC98wqXrCZkpmapaybUhcHhnBMg51bT2TL7RLg8ExMZ6QZJFg8q",
  "key46": "4pFfhyeEEkKRUNdZoyCJjPo84hfPGvazBtP3F2BPrgGBgcGSA5boSNsGaCa1HzNZ8Xbv5tdXJsHUcREFbGWfkPy3",
  "key47": "2dMsSM4tDU6A3Dx7HAJfGSvJDJKn3kwyyZwhoAz3ZSkXJ3DChuZJskJ3sd37NQ6qhd6uKcHthw4bpBmwq9s1mmnX",
  "key48": "3ZS3V1dRxv6dgJfxMH9pMxoWUzbcLMybrkNrn2Hz5s6x5KoAB7qx7nthDJPsSwDYsA7ruVnksM5VY7YvMQEHzM76"
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
