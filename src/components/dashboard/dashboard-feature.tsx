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
    "5WaG7PejVnB7woG6UbmohqRXJaoPKa7zYGGAyMeNNw7ueDYFU7eiVeDaziCiSX6MkBE6dr96u4AGibrQnLpsi12p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TUaVkRQjZeFtKyPjZkKoSpMazf14VKK46nxLY2oAaWeSgBsHbWPnxBGxiSx98VumwtQKZWtXHFMApNKj123zpA9",
  "key1": "5QR9FysSedkiAEMqCmyxch3R12kyXCBh8JDYhjQmtBUJ53M1RxbSLp7RkSCcBamQdkiokotSyUdShK4j5sJTsLSY",
  "key2": "4gaDkVtZbSyKyYBMgUoghdv2j1tcSu66cTPpXTv3pdRCxQVisQayPgF2Uh6NXLZPzVCLuK2KhvEuvzvVFMS8rMvR",
  "key3": "5KumqPQMSx9kRaTg9TimWaFR7e1AnvYvmH8coumdfThWZ56iMzH555wkvS91DwG2FwTMwEaUbsfh3FL81gWf9vTW",
  "key4": "3hSF7e3T9VTJhH21WnEJ1FmcbntKrPCPxf6U8szWwacWotcsny1e7mPj3aspWBGecTNNUwSEL3GS6szTD9hAD178",
  "key5": "2TMrEACd9jSNJU9CgzUEJpfsyVMxrjzdwPY19F9Hq5qox7LWaxH8TGH5QkjGRPmwkTxgUUGvEfx94ZMLMwh43zwn",
  "key6": "wZsAfgzNQykzYR5pY4pGJuCDCHfJBcvFnxbMvWQ9KP4wwkxigZYT6DwWVxg7dMJKt92M4RppKz8bgcdmLJUW5mb",
  "key7": "TG5esiJvGeMobJ3jFMfzRqouB73ttSx8gCGsVoxQp2esoq9z8pbKnfHchmBKyaozmFz3RqCBskLwKwcJwWnCHbX",
  "key8": "2ES9Jgv2bdMTbzXMRjYWQ46SQqnpNhovVSnN3VtpWMeYZsYbAgNsC954zoRXu6wXbJzNbL68nWcmmeRHWS7YFWaq",
  "key9": "2GoE1GBRDj3DovuXaXG57FygUDks1AP7wM7S57LJJgpNK4WpFwCdKMN4eTWWc4g4AUyCCFt3RtA6vwMVMLYjQZbV",
  "key10": "5F4QGpjjK7ZxgiHaQPFYomMf11fdsK5x6qYzjFruNR1Dm75cvmfScJjVzsroB9dwNZmruT9EM9WYDwoiaKC9R8hR",
  "key11": "2Mg3Dm5CSz9gxwxj4hUi1P6CoCei2r8KKhtEM51Cocczasxm4ePyHk6asZLP6YxCUni5AiprJh2QwH1xLZdLmvNC",
  "key12": "54c2prPhQqLW4PtJoUxKBavZu69yMxkZJD182aHo9NDEiTweGfaYrEfsWncb4nV45QUsnojxWXoG8o1Y8jCrCmb3",
  "key13": "5N8Ca4rTFzJZsEQaLjMmbmhhEVzN1umL3UHnNgtfjBXEg7j9oZmcjo7ReH1dJf9xLhVQLt3tRdddpf3rbc6DCxDQ",
  "key14": "43G3tNW7irY6gGqJd1cZzzr37RnbyjeH7y6Uy1gULou9GnN1KUwogNBPSdEAZRNDeR4ZcQARZ3t86EhURi7GN68b",
  "key15": "3L7Po6vbYNmLqQHPegHycjaGGLst3Cj2yVxFVzSbXBTUxy9tNyKPwHvgr4ZQ7RDXTHrc9j7iMnm6wArn1XWJprQx",
  "key16": "5yv9PemaPkq2UkNLySHpPiCf1Vsd5WNFgSu663Kdy6xrec5rfuUJYBnFmnfST2eDrSpPXBwgNvCCcaPPLc2CQC9L",
  "key17": "57NARQcgeWTZ7JtAg27otd9sMbTRRj1jTcm6ptrvYAjQPjg7A3r2ta3piaSHmNLM9VCNsZaUSyh5h3shQReTJwcv",
  "key18": "5hFXcmQCbXKhAMddcRNbJ5RhSXEWFPdcQjspgykKNab1DuqaGHuD1M7CTymoA8MK9UtbAWb2eXiJ2KfQpapVfRsd",
  "key19": "5UrygbxTNdB55xfpHVsMYSwyDjD2gisXLfhAxeM9ZiW7kZ1r6EBVcYWrJxnG8TKQqJw9yw5mUq1C6YeeLKdPkig1",
  "key20": "iqsoaWRPgmVgE39E9KnxKQozsTc2FNtzRTXHmq4HB6UVrDHSS7my9Mi63ocXb3szpBDoZyeQANb1QHUEqe1LTax",
  "key21": "4PWddgXdBNKR4zdngWkSz4RwMiKgjKfVm5DBh75F4SYg3PsRPiAYSzxM9RDHa7KHF6fux1PNtkR1awriSct3G6jk",
  "key22": "4WcBJDrzkewMZF4JuZ7jR93JEK5mKjuemBacGeFoqNRTDfWonGqoMUucd3sHShLYUPTRQvwMqEHLM4Bb5BB8wCWA",
  "key23": "3rPEBURrFtFZPuUAp5ak4UqnikYuuU56hKJdBgZJANRXoStBpe7T14Hkez36stYWYrp6W2SyhiK3pb5T7ZToqH3f",
  "key24": "5odQBgkd6pFxrurqq9UPkveNJEDzt5uT1JrN7HfnLr1TxgjRKrbcnhyyLZd4PxfR1Pksw8o2N2bExKWphNySeW8C",
  "key25": "3Fani56p955iqbMR9ot6f3VodZ4cCUGiYSS9nFdwa7gRHveF3MsBRFacVRqaaQxhZPWsej9Pa8GzNjKb693gwDvY",
  "key26": "4sw3emsAj9o2qgrgLhy2EVkHuFnf6tt6822aKGH5eg4Cw1GfRLJBhLSSQruxHX4bcVAqRAhgL6Q5hSimhxdLRbWQ",
  "key27": "425eLboimedQqgbRR3YiAxihBYJk6NLVzoZ5nYh2dCvKuhSoXmrL3xrLt5dhuhEMzDVQa4YBK4HSbpPvP2Kxkn7w",
  "key28": "57bKpLc1HAz2qSZsmFPg3JKacUFzyk8nuQrs2Soo8uYiZhg22h4DfNKK71xKGCVWLFCd7QTEMGsqLYh74No4vcQ3",
  "key29": "2dxhGkbCnJAGPiYxttxxqBR5VLWUfcErY8AszhuuLgxSi5BjM8FjRshM5rk2GYmfjjAXvDPcFZpeDRt6G5WuSWa4",
  "key30": "4Rx6CZ2nkpesFynvha8z7pWKp5JC29ZgEqpR5gnFnqa7jUcfZ9BJX3EbbrwLxUoPcGFAbVrF1eXXJ7TkRMZdnNBg",
  "key31": "2FD53a4Yc4JhUf65M7jKqE7ZoeBtjHWp5mxDxAX5hUjNUC3YWxzPnTDMPW4KtJJ919kLE7XWS2wnSgJRzEGwwvZy",
  "key32": "5hTU15HkarGADwRqLQhv1WGh5TgkwK5W3Uxm5SNAavKbZxp5SpAp8RfUgp2tqxkcTSsytWaa6MQdFrbWgfWTHHZE",
  "key33": "2jh9CHVt5KXoC4mZB8eeZTKULeyjcQCEajp36HmGYXDcxp4Juz2K7hN6zQQdt2F2qv26ngjSB8DY1hdCmuRW2Xwy",
  "key34": "XBpoTqz1V9SZ1TnaKoq7G3u4XSrUQgWcoNScQRSMKuffvCRtfvNbjqSCPEW71JrwrVtEkAX5M4Au29PAKFUaDm8",
  "key35": "2ysVLqyC6JVSpNGAB6jtyGHV1spJ1XNQexNioF71bA7GWc1YmvsZUdpD6o1fqvA2TuCinp1NPZMREtrc77dF3AZP",
  "key36": "5Lo6CSRwbCn8gvoHwKSPJ75dpPVe5PRzzdcAPtbwi9cvH5hiauyN1htMUF31wK695heoh22nNH7MEAXAtRomFjed",
  "key37": "4fp87JAAFJQqv9WcJQYevvwVs2uTK8ah8A3vs1pacBBMvp3msruPCWEV8iS3y7Mbfd1WkEM1e7kTUiL3i3HXnthu",
  "key38": "3QPhdmkaPVhAMoC9gJ8wkinTfLKDBJ4YbZBKxQcQhcH2yiKQsw4G43cKsE7H9Env6UWddXaduTYaQ8XNV8HDNENu",
  "key39": "4xzR2asqEpp7nh96ugLWzyJfHQ8WzZyHB85depWqGkbrbUF9cjxFCSoXVQ2L5X3foYupYTy632f8E57eDJX1YiuD",
  "key40": "4EyqaARr1sHvoYDyPZS4x2ujSwebeuTmVM4AvtPeZF4BuTEhujvvU4UUbUGT93KbQ79fwv2mXUHmFxEZW7WHpvij"
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
