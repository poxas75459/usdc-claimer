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
    "54x6Av6RDhiYCaWbjJjKsH24mgQkQQkyzc2gKkfzyGAsyfRhBFUuwbcBQKMfMCkHLKYiAy7u6hNpim1iQmKnqq9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vqPMdipmuboXv1ydeFj7cYZTH6Mr6FbQ8zKnRFrYoiy9odxqpEmMBda1pLMxvh67FFeeoswy7hskRuEbsg8n58E",
  "key1": "5MAbCDQDtM68dC35bhrvHVv6CVQzUxHsmqa6LUbn4m7rdoyu23cNqSfLQ8mGFcFDnW5RrFYMsnaksPwnQ1wHWDfW",
  "key2": "5Wg7zjrUBuqeddtXmpLDKHcqjuRoqxaCECWwN7iSyymhfPhMoUzUEoPgRbcq7Ft6n3YwYrzjcm8o3bstZHyDiT2w",
  "key3": "5Rwnx3MCkprvhxb2nAGD1R9tyPHTY1mFd6FfkxD8TttE9LN7NXFU92ChFW26jrS2modMTgvgoBMPs1vzbNwM67mV",
  "key4": "34CiYiVeJwrnKUoah2suzN9ZKYYMK2EDEJsFZUPbqouFBCsBtTVQ7pzN9YbbfH8ETsxXfbDxqMupSHBUVjaCMUKX",
  "key5": "5zN7xA3hwQMZcuGxpDsP7eGoieonvWGuTDX4z4wPayykkfvP3wu9Q8mQHFBUociTrbK4HXb5AzgvvkhG2w2zErkg",
  "key6": "4zPiPgQB9NbJeEGaXoG3RgPe9uxuAxucJEEQ9pkrVZdzpA8zqJMKe4MLNpeVSrjvxuxw7Wt3otwwVmeRYFpn86oC",
  "key7": "hdRFYV1xTCGmqPBLEGkoeBa9VgfopHs9cnUfrvAwYxNuKv59qqG4WnCM3C3PgyXTnZmGmGWPrR8xLPQiqPy9aLe",
  "key8": "4SFAPWWv6E5uvwxgKrr5m9CpVaoU6fLVGV7u8gVaJu6mifpdWaoDdSJe4PqydokJgJosHaQwUubuYarVtJMr2qCd",
  "key9": "4wGfMRYbcibiSPAV4HLNzeyeu2asxSBNNfZQ9CyCFhzPJX8Ui57xhu7X5xDjYcSaP3fKqe6uuk8Z7AJztofyquo7",
  "key10": "4CtSrwPEpvkutAQ5takYdFYpCzAErRFezxJPdVwvuTtecGcj94hbkcxeiZ7EtbCmwRSzVKohL1iC3yR9QZnUV8bg",
  "key11": "4GT1L5vJBPGaCdCMRWYVmwcr8nZdtcPTuLzsbXXFi4rSp6q5YvoHEwEMFnn1WvWNdpaH5wbc2aGMGC93C5wKiqJA",
  "key12": "36o1Vkg14zCDRoXy63bEV5cc45uTaraNrA8tKoVLC9ZCMjCL7gLLbaSoJiBRNN29pDkccjJHannNQWXP9fmPikwA",
  "key13": "56su5FNwKnBz4Lh1RKUbDWYr78YoWy5k8T7Q96Em4difg87gHtsZ7dL3vL33jbFPB9SDo82bEV9ybmaHphBdaJxS",
  "key14": "5m3wE1i5HnKVG9VvVMJQZUFzW2VXr3JRjnHitM8V96HkhgFihafYAt3nc6QnJ2q8q5jPJHvgAWEZXyeKBvTWiMDF",
  "key15": "2JtovtqDpjLZ6r16caNZYYVixNLLAV5w2ECGEV2Ki5fibPAHtQpaVZjuK16yLmfQfQvEEenZf3o72WxmYykpREcA",
  "key16": "5fxjRXFzasszLmcN7EJbRJWh14JdSjo6yXvP48LVUXiwkZUGvDbpQi5RymWmP2HgYXYp8yh3hRkt3FswcXyKVAyT",
  "key17": "3jyKkdSr5M6mY16eVjKUyPoXxLydgxyo2LAV6gzoP8xpBTdxFtDSJuzVhAXP3jn6sCZvoUrvZEkbp1KEBijLrM2D",
  "key18": "ushnwS37AtwtgX6yZuViJTWrZw4SraXTMjDNEpArpSvNUCbh4MXTnMZNht78f3uQex2VLqrRdrogsg1uVHnKTWY",
  "key19": "4uyPWVaFT7ZokxnkgvSpFrb6k6JH2d3tsPjnRpXKzGKqPYur1xoS7BdWH66ovLviMk7xv1JMCeyCY99caE9d3sxX",
  "key20": "4BUW4oLjvt5ziD2aoaiAwjcvqGWyHt91p8Zep453B5fuXjSxbMrHVZEydtoUSkAbM8CoBSPfxxyj3AZYPUCXeCNo",
  "key21": "47Dnc2YFYcrmgd5HseVZ7Pmd2YVnrW9LhwpD5HEpbNBEg17yr7ARbDKJLJ8zNPQHdJo1rDJEJuE1ArNmkJ5AUjCh",
  "key22": "SQtSS9ttHvRbKLcnyYEvRDobKZpY3JKs7dU67iLgZd1QTBkbfp2nRbeRmeVsCeKXSPfWQPQN1pLdMcWwHjtYbsj",
  "key23": "4B86JgftaVP1JgFaGGTb26zns6mNmgt5tR2F3KZja4h8WdLfoXoKUvFuQ3P8xEB6Y8PPYUwRZ9Xg2qCXLb43fFoR",
  "key24": "5ZqoR5moPeLZpGLS5P2hDtaPXnZAB6tFs5i8fRMtVcrhrMMqNCEMbDwJyms1UgkUAUcde56WfcNwYJv2oL4PQpoN",
  "key25": "2u2fHthoHH23SiyFDv4d5Bjtz5MYNsg5aph1CTXhe6Xwrpjo52xDDVxxidgiipLyabcEuwQ1bzy8x5sDBumV7BUG",
  "key26": "2KGwHPgAjXfNeyXhnQw4Vqe56kJYwMdHjgkSwnJYgk92Tvc9TzyKxrWDgmQtmgqKu5JzFxjHowtW1F2JLbXhxNz1",
  "key27": "2To9mWXJAS6PybMFBcuhrB1We7CiuV19deoAPeutY4XoqxJgGYQGnMrsH8HaMqHtPAuCo1AqGgzbRWjA7Fit2PXA",
  "key28": "2jA2brK4K5R972AfpyC4za6qtEcWjyeehCmYVckQNADrQm7uYP23pCEbS1nMhw77PQHnEhoTFn1GJRhD6kAA9dgW",
  "key29": "4sHD1YXZK7xmnAYyj5NUiwnufRMW8ZKybEm3tj8LHTvV7qH52ZTSFRybcTSL2poPDNMTrY8DR6AyAsrjr9P2VaH3",
  "key30": "5NQjWRYFMr9dbn9zTpDKxmGkM7dyFvm5EthDetLExADNb2bdd4JpBod9N9BTc21FekM6Qb7kPfRsd9t77cLPwmM6",
  "key31": "3jzd5DidijTHM6Rq3qxcEUJ3huBaYhhCMs2L6H9Js8YiBrcCYVsRmQZFniMDmvYZEGCqRpq1wDwgmb9frCpmUraC",
  "key32": "2u2RtC81hpUrtq4MrTb86SWRyB1avZYnAW3izd2qyaSjcu8GGEdhB5Hmtdipow1RSy7jXbRaBAJVt7mNYfiouD6M",
  "key33": "2gyhMb8YZAMRn9ewgyzgYgSvYVb72nzjfLDGFTG6PDVMDJ1iZ5n6U34Wcxf5TTr8q2JbSEijJAnN87uenKfg8nM3",
  "key34": "TQQb6wBUpAwYJfie47oiaKUec1a32SLRu5YGNwFE3GcervwEEMEfsX7H4cVZAXMamh5GcqPq35s2UHWgX6L74sz",
  "key35": "4MQHgSD2zWfkakpMzaBTar97NfzkwPVj6gB5fNoMqQDEQrfUem1EUQDmFUgaZgqPqvwLvjZaVdNHkA9E15x3WP8d",
  "key36": "42J6cftMTXMDcWc4vph4wMhSJrwvfe7GwHNiMHbZ95ZNK1rfsQTFmyZyCxa72rcv2c3uT6myScuf2ArfgNwhXyxb",
  "key37": "3376VgGkjyKgjajDXGJUsqMAVBQho7ZqvcRPdXWpT7aK5e8Wxf14i3r8mYWbqU2JHS8EPWSXGgbSPq9GCBPexY8m",
  "key38": "gse6gx5ptfRtAnKUyQk2XJ5rwVA7kkEpffUAucNv8w4znEqkzTyGsGRCRWpxQrb8FY7t6MuQBwMKYDCVAeUHwiq",
  "key39": "2pQPzW4SWhQGWsLLWZ9fyrF8Keyc7RZeh3pLhRYVNSoJqiW2M2FXguBYrPznFU4gMooD5aUt4MwrCNdh8cmCZXwt",
  "key40": "5fgHmfZMw7P3xukVFJKpDkK7NoM7WqakfRYkenKptstSgZfhpmeWXskGwApNfBD2gMnsQ9A8BySoDNqDo1d5s2KY",
  "key41": "2rmD2xZD9981Zm38vnJG76FyoQhrcXDbmc7n5jy3o89nkH72E9FkJHmkLncqorW4YgAtwtbBbeJeDYfZicvqR1GW",
  "key42": "2kw4bMqmx6b7biYZb2NotJfq8gTYHv8cGAR8D8KXGSZfC34PYdzzfjf9Sm6R34TN3CnJhj84pX1UtdEtyKotdzPE",
  "key43": "aS8pKLMvPR42va4XiHiyJHgF9nJ7RAK4fYPBuACyc5xsuyEYcy389mUaRRCi4xcrp5XRQNcVVpe45DeQ17zH8mZ",
  "key44": "33bdhfqpr1YSc4ZPgRsNWQ8ss3s2kGRMCQwD7XGjcDQZPzH6X4XAHmCZcGqJzufj61qKZvjJ3L7iz1dVNU9t2Rcb",
  "key45": "YCLJoBPKH97S6mjFys2JLTvjJ3dBLBN6hmyvRMdECaK6N8EfZ1v8Znjax9EEm4HzQm8RqXX5xDXLQnYaXFTXU59",
  "key46": "q2MSna8sndNjrGKDKABU9YmwSpZL9qEXk3ryAs7ZuX6co6EogYjfAQJG7ic3nR7vCSwEcEVFbPDXNssaVBuTedx",
  "key47": "3qRN1LfAFHdwgFKd4k8RdwcNsmsetUxvcbE1Y3geQx5NqfnoHKCTB2f9NpMpimjYzBZSaMCif5rZRbqTYgsADyVK"
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
