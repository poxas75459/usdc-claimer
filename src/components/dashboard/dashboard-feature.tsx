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
    "5HYJTVbEdFLtBSmNRMR5KQ5xg9iuxNztQ6GQHcFPaFcXTntJ17GVcR3awjjXHPEqGZAFhVyXcfEFo9aqFfjC9QgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28sTRFrx2ur4KXduqQacnVAZaciR42TeCTirKyf92yFF7nCJH1wGDR7faRNXLXY2VWZeYmvvXC3jCR5ixZmUTWe5",
  "key1": "CMhJ1WnaGKc4yZdD7uE56CupTunsVfdUPcn6sFGt1c3rVxJS5DAFboSiVxUfLCtaZjC3Qo9GfGjLv86QepfcHXv",
  "key2": "p7WbRMkhS8wvKdHsbR4T4cWsV1emWYrUfRzNBHWYgcCGTh7h3aENnYjcF9VfhMeDPdKiLs3YXn85Jb7KaRcS8Qy",
  "key3": "HNJKMyevDSQsr1GRHk9dcGVK2HEvCcMAZajfqiqrqLNTNVRm5jP9qxw9YXwRXobU6qVxx5QEs9HwVmQZm1f7QH4",
  "key4": "59Xh5eduDdDE5Vth6rjAFjXENT6BK1zRsoS7bXHwbsY7VvkWUVXYJhg4ircK4YFe1rsTrWv7atAVVUWvgjs76bLt",
  "key5": "2nTRpYYCMB3u599t7f3azKjEMH4dEHT83AWRodrBCcz1sDEs1JdrsQD2MzEQjwcg5hfaBBKVS3fGeEBwRV854rsp",
  "key6": "2H3MQWhkKyMFvhmG96MDAXstTApcv6RCCxm6xy1tsyqPayMy3Wvk5kiFJ254simUyJAcoUekZhTrYEGRZkoZFfpK",
  "key7": "26C1oaSyvspqXERa3ndycqf59G6c3MT4iH82NtoWe8oBgBkPEgBBhkh5TKKG74oxdKDQAQLsE3hq16TYKyXkggXy",
  "key8": "4uoEVNKAiLS1bNXh6yBimmjaVdGugm2dzPfdZQv8yjt9S6FwJu9Q4VHzigJUMC7UuNCxtzkEjVe28bWwsnWQLftA",
  "key9": "5xka7uRbmAp8BAP4Tmmu7RiBrjQ7NMPUoEs7nFJqjSeF7S7L5FHpF1XbjoHbyP7hnCRXLobSSZ7rUAssg9hHsiBL",
  "key10": "4MbxHcwL7ukwQQFinEs9vx9SatqJ7RYuZ3mLnT33mdYpV4hNwD17WozoHPhY3QUaWZ5pAT7hC6cpddMpG4baA4pW",
  "key11": "3UvDwkc4aTEiSURKxc2Usd6ukrXnH8meUTmYbbyYPD2CBXnsSP6g3KzSEQQEvNX3yrfPhpZFyhNyieTh6bhmNWyQ",
  "key12": "2xnyCWJp6ig8rEmf5kaNsTVHMePGSBBDJKJsxurGEGwcsaHzokbiBkWQBEWFyFVqEzHpmgiKiAQyjp89NWy159JU",
  "key13": "4Ptm5HqoWTRDAP1t1yxk4z93qo9ab8ukBjYmP3fL4Yg1jFRw6isqSPQKiLvozfcxF2DqMTSP9WM59gmmqZh3xs9N",
  "key14": "44bdZpuqtCwfm9Acjka9SM5Yz3PutSsFpnqDaxWq2BHVCjMh8JBFEMXD4JXSPLuL1oPWTks7EYfyHKAt7ZCbs7vi",
  "key15": "44Z7s8d959rhFWfoDRdnNTWbHxKiqqurdaK2FKLs8ea6C7RfuKUCK5KFxcu84rbx93HoucXRJMrDT7Ue3g4B5iSd",
  "key16": "5k56zbujnQUEzJkSMVzAPG8B4SPKtG6Td7FNognN2xJNRu6RqNo5me2fp2M5FtcZ6VhmfeDoYrTe9LyJ7gadtRWU",
  "key17": "3DqvHMtLjH7ztfDihL2vURrCKdtH8HqhHBXh7ZBDGMWcZXqJYsSCqVXURnL9hQALwFBY3p88cgx19267ngxHum9L",
  "key18": "39i9oFjCpWuHnKoTpgRXTy1vo2t2dwCZ6LmcfMPksGHi5iupYUAup6RtcrWMVxbTbBsXUKRhmbikzWjCwH1tQZn5",
  "key19": "27sznbgJmNZKCDm3TsgLs4SniZEYNSRrsJWhbttQ88wirrD1UF7HS1JJUs82vsSGqfrmYr9YtbbBGMLUEUaKfN9r",
  "key20": "2thPpi3sMVJCAcsKp7Q5Gy8c8Uk9km4qDtEgyocnuBw68UadUXRnVmuZN9Wevkur7kF3cVUXiHvuwUVmLoRhCjt2",
  "key21": "2uiKR5FFup71Bp2uQkkpLWJCv8j2PY1mTEmVMQ6m4oWY2p4GqLAzWDgzU5CxAdab4i4nCq4RfU2oLreCA3HNwQLg",
  "key22": "2Qa1nGwc4Aat4TgbGesvzgsu3h35HD1zBdFZNwaCc5TjvTbR2VUZbUPgA7GwJzbvY5PiBsnE4ZB54P2XZ8t1osTN",
  "key23": "4FHDRoU8UgQyD1PyvYQaCDoEBi7kRPTSd1dRiAp4KgiU6a3MfA4b6ZTvkfzqd8d4LBgoocs55skUgGpXFMufESs9",
  "key24": "3f8SrA2BJ4DifqP7paCuEwrzpJDejhzoP7PJrKdum2v1DzDupVgL74ebc3aHvm3srALZFxj1CdEzxSWEJ7ZNzQ8V",
  "key25": "X9JTtkfqayH4xwNhJoxsfxBYqNLKzZ9SB7k5aX8viwoNA8Qy2AubLMfQtQSzxqehidNo2xkXTGcjNk6cuR59dGy",
  "key26": "4UdzTtkwkgMiJxR1knhG1KfBi36jpgyeQriYEt9eVKxvynxqkY31rCiuvugaZPmoMKaTHfe2AXSDiLEc3ZTUWTyC",
  "key27": "3K9mADK4ZkvqNHVt2ViXdLmpQA3KrYnBPzPUopF4jA1MuUb8Esd2NFNuWSdmrVV2CXoroUqQ4h6dyWcdeZ4WgLzy",
  "key28": "4SMrshVgY56hvkHhZ55vb22byC12BuK1YarPTR2cK2VW335idGakvmatroPpwA1RALXNKF2nnpBub644UWsRfbHB",
  "key29": "vx6UoZLr4EYB3vt5k5od8TDQzxTPeWVfthx2fEXfE88yQxzGMRTnPFWLzRWXjmr7nKhmtq42Bmv6gLSjRjzXga6",
  "key30": "2k1YeNSS5sKy1JBhPopfGxCUmtqaj258gzGoRxvESgPKhtdbKxzjfsub78VBHjwMxgiTfNZundUrRUyat1FjyYfL",
  "key31": "2FyfDgJPDEoiv26aBSggPG7Awbxe2HKMgqvqBrRVb9QSwiEVZDRRdkqVvdwcahG1XtiBNmBbgkUPTjGJoBFP2RKx",
  "key32": "4cmxYVhqTTSn4XC8mZp4xBWfQcix1qxB8FrA1dj67nae1Wu7Q4xNbg1Q4Vg4S5DfrEcPyU2oBAWatEe7GF3fZKWd",
  "key33": "368PqYchVHuy5sjeYwF8kogYe1DG5ZYbgqWdLbD8Lpp8AgieHiJ8jWvPRmgg5fcm41qdmYN2uhZ9WDz6h8aGd5Rv",
  "key34": "2kjUs5iDRvYeAVDZg2mZqvMmHKZcbX1dZtcFKq3p9cp1hxAxxAM4NSqjpxpTyj4r4ohsewP2C9z4SdhHWfL1xuEt",
  "key35": "3QhdcsUeSrncx22NNjMxidbzigb3cCKvU5ig2Cg3pRmvvaFrDUPAAL5zjyjTUSuz78HQjrsP68ojbYRVyCxp4Hgn",
  "key36": "4LLQBJZwnynSVcphErauUuCrp51kBPD1z4d3XcDwN9k3pEy4E2vZZ6dRdm9c7cYhMWQu2dDcCnSueQ1fjNjYHRsq",
  "key37": "5C4csRh4shpoLSDSUzbz9vCaE9udbDd8Jzmzqoo5KkTRmE9ZoEvKbZzZ7xS5csg69AEUU11ZjDNzBT5ASq3BG3cA"
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
