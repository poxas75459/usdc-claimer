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
    "3p7ez9XE51LyQo2J9maWicU2EtwNTZqnAuKEDweiDLzEi319GcLCSPh6uaKEuFgu9hfw4fMnwbbrE3aSkLDTLwDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mbXwuVd99T9iG7vScBK4VzDzz76XiwZr638UotkBkR9CgHafUgFgXRzEQqWW8E1ZKZnWpsR9bCmCuQnicExg2Vj",
  "key1": "T2CdvV49GXaHGiPU6kNzcquee2YTN3L1FuZ2jKnLk8Ghmkn4BaAHuaNE89i951sij8uGhn9aLK24NGTBM5E3PdH",
  "key2": "3BWWYo8av4DCZudT4gpU6DSptWbNwoLvQTzQp2SkXJWVcixhNzE2zMTxxC88V1FvU7KpNjmokj8RR7ZPRp6rd7tr",
  "key3": "ZC7NCW3sMuXhJ2x6o8daEeXQV3LNoPafGNXoKMxwmfcdRouGWnxEPyffgajWPTi5eHYT5JhKV3xCrobvFYL9uDv",
  "key4": "2sHkJQ4CDMccmZP5sPJxkHoWcCPJgwg3otRqSuq65HhrxSvbRCPmdezjq2opcZDgroUuMQKiJfrggEuNW6WcJA8J",
  "key5": "52JRZPhvQWdSSvx5LRGM7RvG36EM8xAw1usT1hNe3UzLDamFfirA8MeisL3skB6XLqrDvaPDmZphZrEevuUNyWn6",
  "key6": "3Ma4tnNBSkhAoKArdjjgLasfLhVcxLVYyiUULSLfExW1FhAmX9TBinngUwGoFWR15riutzvfMKN3mS3tjCdmpYpm",
  "key7": "3ASX58BZ1sbq92U9N4zGSNPPDXejgLM6hKotWWr9b5Mo1WgYWvJcKPkKXfupRU2BDcgpUsoGLjhETj5m8Wpn3MgN",
  "key8": "2HQbJsmPmj16APYGYCEUhhEWQatG6Y1MqHcg6jYmpdLpWD4VFCGnQLoq2MjJNbpWHTTFSH4vdHehv7vfhjxwSABx",
  "key9": "2dXejvsivVEPhTq2MMdqSJ8ApPr8ufEhZExESEftduk6UHpaFMMmcMW558WEF7m9E3icrsAf4c93gXfjqyQRQPoV",
  "key10": "2cvyswvtW2T9Hk5e9d2AnfM2WR3iSL6N1fRsAUU3WRmE6XZYgPErLFzUFsUMBDTL18JjutvPYpw8tUT7H8ySRPYw",
  "key11": "3REoomcx2TG3gfnQdqP5A7X6GdKuYqGRQyD2ib5njp5781PDMGdCkoVzTDRcQQcSjdQbRBN482YnY6XKnZvta9jz",
  "key12": "4pv4xqwfG2fejpP6hdcxPQ9L6sQoF94ZS1U9X6EFXthYnP5FfV21DeobdF2z8U6FkvsMvfvCQctYzW7WgyRtrhHy",
  "key13": "3kbs1hVmSmGWZuSdDZaRkgyGBDaBnALMqGaodQskQXcYLG2CNE6w7kkQcYiLAyKJRmAcMM91UJa39e3B7a9SnSwn",
  "key14": "2rx18ZDi2vB8VbKf1KP2Nbe5dnQYRYXAD7hsStVQoo4S8GEjt6xmPqt68oAHPgyv5F6VFEnikmRxAxPTEWVFArDU",
  "key15": "28VB8yJhkpz3a5FruB8iDG5Aq7zLxoWupQPE8DVjcjEc7zW9BeCZzr4APyQmxKACpXg8PESfj8bJuKxqsFXvxNfU",
  "key16": "4WFyuSgS4qywCXXtPRftL4ejvCj8i7frerU74Rp51kdewAYLwU2eAHaFKjmLaahMr2Chn1eQxLmHRR35zWT2JDYM",
  "key17": "36P1HpCkf16g5NKkLy3cWtLvp6qXmWETfE2WxZQN22my2jWWXxsneK1WaN9SnTWjbSrzayJRQ9k2TQZQfUEaCTDc",
  "key18": "3sjeFzTzu4K5g2PukhpCPMS7RnBx8RBX2GnzKMJbziYfBXa85LKDYd2mSdvYH82kZEo5vRubWao7rdu1UXKDB1mk",
  "key19": "5a4UdaEGCQB875QvrpPfQWMTMugCNPLEhezWRsxwNSsArwABSwoUSCcn8y585RzcEoh5MZbcmeWWkKqVJiC1PkEB",
  "key20": "5jFZrko8R17wxGQXC2i4QBe4TLfuRx4BQ9fcsgbKmFu4cQHCg1ziSD3SSFybwAyRc5fGqBJTTkqJkQAfDzeqAKNY",
  "key21": "5NhBrzqvzgA46uWdbBeiR4hSWngdK46Ej6gW9PgMKpNiWXEAjpWeHkuQqBEU7tj8pcfoQgiTY4jgTqcqSLRimiwu",
  "key22": "42YjyM1c2pmrKW2MJTdhwZTmrGJg93qyocuW5Kfq1P3LNZkMEQKV2fLxKijhnYD39DiihhKQ57LoYpLrftmqSJnF",
  "key23": "2hiqVwqSjAKEvdf87zK18DJWmSi7HyYq1zARFjkKgYuSyU9awEuqaDnGP72zoKyQ9vQvYd2nT2VS5PhGB8GQ3XN8",
  "key24": "33BsjsfqyLXooEp56oABceuGuMoVXNXgnzd1yGnuwyo1JBFEpA2XyHAbttXbSEfAmDo1NYXbBmVKX4tRBL1pRLGW",
  "key25": "4331zLW6CMsas4E6tsmTgUanqKYVHirPHYCrVz57MxQSbtMMuFpv2jrPYYw9ayUcDCR4zCdd7zfBGQdLgHCBVGTn",
  "key26": "3DXKk1KK33UnvbDdMR6fKgeZuTXXZGMvdo6thiJa1znv1dWfMpCPVCBgAUqZrSJSbG4obnAtEYD3KPTh8t8LGxXA",
  "key27": "kiXno78Y7JPmDJjHsPnQY6GM7xBsAXz37fVarregQbxE4Mkouykt6FgMNoTYruJtMtWWvTbEEYGCEgSAB5iWchG",
  "key28": "sGAqd4ki2gPd1wYdE6hPpTF7hYfpxTnS53xpu8cA3cjpckh52oZXGYYogh1S6R2cGqXSdfSESxFNwcwYzZhh3wo",
  "key29": "5pV856UNJBrpHqdq6fftAjSDD3R5d5wSmP8LSfycL4xK3SVEM4JzxP4dB31YeSSt2Z5ZeRKra5nDbJMnh4hjM9rm",
  "key30": "3Lha2trhP7EuSS4K1Buouh88iuyu91B4FDMckn6yPSE5vSHTh7ytmGmqq6knEd2DjqaJY1CWVu4F1Ui9DV72voJ2",
  "key31": "3uV8SzT1hJ2URt5Q1cFhAFPaztzQERiJ2s1yzv8yJSgS51A236j3prkDxjzgc81HzVdjngsadu9H3uPxBa1obbsd",
  "key32": "P6Gdjp4uSQkdcy7BsSMdkxy1hVhSjCXZAPotQKubtbsSHxhueBuz9nk1CfLkWukrfHGDWVGNojeQd5rJncYChxx",
  "key33": "597zuk6NFVbEQeVGZmARGsnv9BygQNuDY1PTnc4WPagQcPtBpHqWNghtzYCvoDUcQrhxELfaXCoBTFjVLmcisjbP",
  "key34": "5N4DysjHeWt8mEjAXNrwRRAMEi2KjfmNJNhmbPy5Ko3ZrjAk5GT3M2yd4iRS4V9Wee9tD887TZTNMq8fU3Jzqvyi",
  "key35": "QdUuiprukLGonc9h1Unp6hmW6EytxATMngTiFiSZZWAa4YM2imxhhYMYZGaxxLuNCBfHgqvu9ycg3HpUEBWp8fK",
  "key36": "5vz5MHQbfykoEBBBCxWAzhwkuNbdHzzYPzJGA381NWqD7DqrYA1FoW1MG1N4hKYB8Qw7a3RgQ1mio3ZY1nRAvuEY",
  "key37": "2pt1yf2GDpi1qWqQxi93ELbqKxzUEnWMvzAJ4cuMkXv5Vc6jAD2qNNeKiFXZQGWQ8Vp7AMw5pbw2javERUBktPKv",
  "key38": "2jhWv49gWVByheMdee4ZPHfX3e9zpPJteukz3wy6SPUXAjGAzgcz4XrwBHdaehn1M2GutMDxzzcVZyLpFydNhihh",
  "key39": "2sDyQGjJnrQZoJjBjFuoYVZjpk9Poyf9H53AdBaJfz3MEFKP4PyzCuEeMVYuHoe59rqN6kfSBQMKv7w5sL4u4qXs",
  "key40": "4waxzkqqyFAViJSemUKbLFqfL3792MMCZB36WR9ySpb3diNbWaJjNkjF6wiuFLhwi3oNzRMcQ5DwUYzqt9muSFMr",
  "key41": "37vGcTkY3Tc4671K9Hm1bp3mqfnSmhFG8PboeqN4SszPuDVPosJ4Ndf1ya6eyXMhuFrm9SQrBoUUZV76GkZNK94p",
  "key42": "4bpcxWhT6ZRKckJ7CUS7U9SawNRBH3A9gfQjidpdJ3PZQF23J3gZ7fJyCbM8W2rcQWRgS9SDcEeqWd6paKRPsRS9",
  "key43": "22wCNEyTzBD3CRjHy1qJB8hB2shbX47tEkH17JwA9dHz7rnnMx91KxackGLBmB7xDPW9SuwSUjfD8ZdpVzyovU5P",
  "key44": "5DTvkjJKVfi5aF44nNM8NuauYhvKiGJZsXt2FYnsShrr2WaD1tSP4WbxYbVB2SC8wLhK1RTC2izJVYnjaLAgvgyb"
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
