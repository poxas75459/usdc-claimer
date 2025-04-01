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
    "4hJDCgjpQs4wqbogNJ2gYZEuq3vxPXWkSjbpZjLcGnn9W99NRcayr9uXp3kUrkmRkvuFjAGLNdDdUJj2epM4qF6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j6WQrD6zvYJE72F7S9APt7LyJwjVBFs1cbTqCvKFrKW8Ysz37u14w4t1VspeLxhnv1tSvMuopzrmvEoywZttcST",
  "key1": "2hTTULjifqgsBtxec6khvkxGLYz38gyozhNzDX1ALNkv4phhfQQuCTbBDavWSA2MRaDbNgxVKapTNCNFpK9P5Ydz",
  "key2": "2YUHNEqHzT38xPHMH31jRjEADtGWNS8Z9Lq9rfEKJmWTYoLyMEh2kQGaivZhg32hRMPKGxkdaWHWpYTcKUn679Ja",
  "key3": "2tTLqGgAqnHafTkwKF4uSHtmprSDwYBgZX1tTbmj37AM4uAbvh3pAJCqihtmcLLEhw8EQ8HkUBeKRBzcGXMuYkRV",
  "key4": "iBeUXz4Z1nNV7boZCzyWgvZ8UV7Kg6e3pcFhxedxN5tDwVeCZTn1TuC2JJKZvVTB98KuMmjDTRmfnwyydNntTwm",
  "key5": "5V4dBFk5Hf5QM5MkqS3UnJmaujLdtVN781yz9mHPSxhXg7XZPi6fbdhuUTi9XAj4efKf7ZxCFDsvYQ2qKnpE25eh",
  "key6": "d1PbfXD7uzY5DMnYXhvDFoX1LtAoow7zJeFJV6uNnDH44T1bPwUjXBJ5sXDFH5QaaAyon3SnohMoSB4oBNzpbNg",
  "key7": "8AsjjU7WueRz1LX3vzUA56cqBonrRt13bCh5XPrD9igUyCzZNAkNWVJwsh3YU3NocLZuyY5GFHtKNpzY8UVV45d",
  "key8": "WUU674WbLH6QxY79VHBDZm5b4cZoKR35vgCwvuE62AqFjCrGiPdHmcX7QxoAmwKmBfwgDTCcNNidvD6pUvtTdvi",
  "key9": "2YWmgADrcLNeBAqKPEsWaP22B4xUa6X11ohb87wkKyAvSB4tceFJAp9NwQr8Jqo13RX2brhsdpB8zxjv1spU5azC",
  "key10": "3ws2H6bUUGZvM1tUbyEg9uYSJakKf9kXwddoaqoKL7yQhDQNk7m4U7NZNRPnWsihsaE8mcjGTeGTiQc5MTe4Yexg",
  "key11": "3Q9UgfGhKZw2BuBiNavSoeKZM3L31niYPjxH1V28DWBXgvS1utk1tiJhpZx9t1u2sxo5JdxYjpApW8Uiv6KqhbND",
  "key12": "4SfxE48JSQrphnQxu7FzHMLndGwWwB2HjECAuEcRMDe98tDzxwPSXmA2JtiTHxebf4gQ267wmC5ijwhkGo6aMcu8",
  "key13": "42U8fosw5xrEUNzZDv6XAeoxMo5HNpHycwtTVHjbsRMpUxKw19oN2fD4X1zSiE8qvvU39Z9wvscrrusmSU5HWDKH",
  "key14": "4dVFfCQcsyGs7S38BR7D8wt8PPQtGrqDo5c6jvMY4TyL9djVK4TfqQm9TkuhGLVYU9WLDjJF8M6z7xwti2ekmT39",
  "key15": "61UYzEFVaRvUAaYmEsQnUMYKPLdhC8PhqjvLxKg8qqLBCrJXpFCKcSiEPjXfNG5TeKNGQwutF8gabyaED71KpjVW",
  "key16": "4AiandqggDJJXp6JbZbF4xtwSHw1kVWgRxwUddoL4cVnsrx3mmsbPmaFbtf3j5Wuxbfq6eGMWDdqzv6Q5Y2yZaWv",
  "key17": "YD5fWKjMGPLJtw5J6pBxtCQVgQSfg6mC5fs29KPaKHRfgeqwoSa7PR2HXu9iik6VmE3nWjcWdi16LoHuhCFsWxZ",
  "key18": "3bYVawCuh2U9bXuiWoy5CmD2TxiS2ZnUM8e3hnvncAjv8DAAkCUXcCk7T2BXaZsE3vYw7eBZYBJ1MWaYENPYQKow",
  "key19": "Vzq37tZGMqdkuoaLD2qXrfjaikThjgqRAAMnaPZcP2xwssXWLoqsAnQtyZnxFcagqexo2CRM1giH2wGs5wyiGMz",
  "key20": "2o6WGPKVHWnNiewJoPEveoYhgP2uZwfdgrSPTRMq71qppssKedyCbMbnSQXgQ6e2XpRCq7JMSAHsk4Mqcob3NUi7",
  "key21": "2ecq2YhhdYdpAtYHgaFmgHoignEqyzzUAjkTouLKGcYYPasUEydScgcFzWFoCpsWA3FTtuGY3Dh2k24ryR5AsFoJ",
  "key22": "2qgLQuf9gryvAFS41ep999rjbRzZ653Cg1wnek9rRhavxAKEVthUoEguEw6yz6EKR5ShN31rC2hYB6biWvnFcpC7",
  "key23": "5FcWtvLw8Nf99xjpGdbRmZXLxZrMZyKpyakoo4AMDycCEcZAkFiDKjnwqUMpYioUEfeVruFh9ZiV44mBA5zknZtY",
  "key24": "5ZYGvGpQHMtiwJAEB5E6m6F7AKyEGxsa25JexT6We8YEXv8NnGumrNDEcBL8thAmutg7cCSq5X1q3YTmT1Ga8Hy5",
  "key25": "2V3zr3sRa6DpNwiKQMmvHj7TtN7QsZL8LYhoDAvhz4QxGhphUf6t9xeEncd7UWj6j9gzLD65sFM5uUQnRGiqYP1B",
  "key26": "4V38Fz4wzfCbVNX4BmXzmDpQ6u7fgxDWuusCArdcMSuRtekPxrnDMYeQrv2ZB11H7q9m2uiVHJ1LEcNu1pvsZpXm",
  "key27": "229M7gD61bo7nMRw7bJ7s6KybJ7bxekxspdy4x2jLELEEFtU6ECBi87ncH9EabtBxZm9Ee1kU16m6vNYAQuMocxW",
  "key28": "vJt3FMFrU1JPkhRG16VSjNnHnCV6zNRfcGAUTM22dVY1zPXbQRYobEpGJv9tfyjQxMHhMxYr4rQq9DxK2H43kCc",
  "key29": "CugLicgJnzJc7nLmmSwTtTLdA64p8dXFHRsyJ5skkkpz5crXgDap4Ku2YFkRB9MjGS8YTETeUAG1MASv8cR1wzU",
  "key30": "4MCCtjgmcyNHFuTtCM8ksATuBxAG91tvDRZKHUHCdd3vEVkyc7x6kdpYSV7es7HAFC56NYL8T3aMNYgcEhSxPErd",
  "key31": "3eXe8kkb7s4ttc5Yr1s868rMG21S3LshWpERmfgui3vgTggusR8fPEhCSvZZPWuJpG2YgF6jT3QqdKHAJpt22kQg",
  "key32": "3EWZhacWuSBXDki53FE4vN9imAWYYsxtEr6U9EGKEd8ow2Yd1PntehUiNJy6XMzWSHfzMHZMrE2e6op1gqA2gvVT",
  "key33": "4cX1BFR4MXzvNAWhx2VEe8aavEwqT5opJy2JTthMwvDad4ceDRT5i29tvkcbHzAaaxhodohtuE5B48dURwmYQ1Vj",
  "key34": "59LuQ6KV5qye8yG6abhvMAK5tUYNCdoJQRQSKygqnXh7x9KzWmLRqvd3nKuUyfchRpohYorDPbXySmhUGjxx9nNP",
  "key35": "s1hofTvgbCSVfszqu1oqFzJH2xPXNC94Rwt97KNJWqaibs9LJHsnuf45iufzDxVPGVLAgNEz8nKcp8st9xcPfuH",
  "key36": "VNeDG4kYpFn228tc62UbXV5uYeqAoUJgsHV8oRSc2yLHtaeai2FvE93DSnBtfT5GZumBws2GoG2YH6TqtaAa74H",
  "key37": "3jhUDTgvzUrtV1LBs41BU5bv4Nv4q9VGmFZyku6Hwc6pG9mHbDzPDJThs2FrMzPgVzZKC9ZRpFESzuuCLPrdCCDL",
  "key38": "412tUc9r5kF23BUhDmkRQpnoEQCBNDf55fUMMdNoNxhXmYKSuQaDTARQsCV6fwdz1iREihVWWZzkVPGhRdnWFfH6",
  "key39": "Luy5qsJJ7Rn2awLgTaDxckEEuKYQkdRxx6b7bb72zyBwxcGwC9g38d1EvTjZrCm51H55q4Ziye3czhSPbrsGWEL",
  "key40": "3Wnsip95BfiSrSYgGgdjGpTdS115apr23NnqsMCbs5ouqX8noqEtasQ94m1286UZYdGom1oSxybWw8RzsT8jPLwr",
  "key41": "4uQm5NVE4VRKLVKWCY69qSE6axFv67GHj538EwVCF4xpUHHFZJLrjwuHrwQJAGoGd7g6Z4oEkPHau6rPSDCeZoyj",
  "key42": "5Pt51vRwSxXLXaxJ32tC6sLsfRepi2qFyyWfDVnvjCT1oexynXDt37WyHbrXy8nmCQ3epg2bjtuahe8HhkSiWP1s",
  "key43": "2B7VNRwkzvAJgbbs3QoJHGAeaXjm3XVYLDx4YgbcuQW3Y53hnp9oPnpQ6UCwVnv4M1enT2KLMjNJAo4Js6zr4bpE",
  "key44": "ckqx3suvmGNFsp5Guv6jXnea6SbAxEmjTKWJDPeGgq6jYybY4srbSxtY5saUbMsgd8RKsJTCKt6w5ySSsv5QE1U",
  "key45": "5EPndMi5QoirCvu45MjMMcnssG2bw46vkSngX7BPh2TD7Qg5v1QcNQ96bE36wRP6vvGsuEWb3fcuoxeDU9Brrngg",
  "key46": "5YA2G5jp5E5oBSug9iqFojF7Hn3K1w2aDSxpdsg7bN2t6mcAKpFVfgdk7N1oENGfTQTydkaf57RbUZUBKs7PXujS",
  "key47": "3CkuPe6zYg42JECzMvT5oFwcCRNuNndSqShhViNoPa5Ucn2awLR44WcPMRHPxzqdaMZ8nWM3ean7RsSrMFdyKGvp",
  "key48": "5gRLfnJhGpPM7Rkt7bYLgD3uTNez9P5eVRZgZkNBwzPPmH1utKeAk5jzbxuRnLL6x92LBDMoyEvgWqnWtNEBMBy8"
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
