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
    "34hJeXAXNob5u3QMmxHdLhgxLKaz4dn9A89yH4kEToFTVHQ3V63uzs3VTCwPGgAYGwRYEtRfHZ6d9T3VhicRjXyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b8fbbLiQzcr1XPNhDFtShYkbBBYp778LCcTi3wnVrrXsbxxwSKgjuJWvm8Rjm6QJ9uWxgrxp8PCp9sfcA15v47V",
  "key1": "3ds9rj4T3XT1hZk71ua9urHMjQ3BkUYRWV3jZ87QMANsQqTUvTMaca1K2hmQgkYAtxCJUS95yPMqqYjbfGVBvG4L",
  "key2": "3TQgcraLoVuQezbB5rdnet2QdSTvsm7QRc8uBVydK7V3XkMrHJ8pyVV78P7JGAeVp2NaNM9hZ8CbZT767cKaoRsk",
  "key3": "TLfXf3dHebGjxKcJAiQbSYjFJnbzzf6NzsuBwU6JGv8HPyyEPbdqNAz8rKF2f95547W9P72hMhUXLGfZWvqW9Cm",
  "key4": "Khh14KBYmKNuHqYRnPza98WgrzJ37bhzqbbwJJS7by5udmZqk9x1k3nk1NNyjJJg1She6UgKPjhYjZcPtAh4yk6",
  "key5": "4darGmGhPqujk7QnXA5z7gvQA5zLht67hfyoQhMSPNHbK8JPJfNdGCEip96qx9j1ZxktwhJspzZHoJNSbZkd48eg",
  "key6": "4nZyvubGdtfrvC66zD2r8zp1NmnbhyPwxwXCDBu7g5Qw4L4xdjKxjN2ttoEmgu5fx3ZxgE5ZBqvMR1perw8xCY98",
  "key7": "49R4hGpQwm92kgT4ceDTGMY8pYAjgV7DnXFMZmuoF85nLdQ6jcwRMBHgdafKgVRdJuVeYb4BXF7ruSESg9J3JMmM",
  "key8": "3mbHmLh1SKgGjqAVmNYYB2PTYWVTzcPNo9mVhn1B9DkBmfydJSTfh8PJ997PtGFuMaeaP9kcYyCze3x22zgugocb",
  "key9": "4qNdu6FLnY6rQed4sfi3UXf6U6mubijrj5mnCAYDaTkiCFWkDYSDZ7iZwxSoGxk9HNXQNH6WbPL7cW9kK9Yt8oJX",
  "key10": "5Z2dy8rH6Wa1L4rYtzSDR7Tp6HxF6kSkGiMbzZVP6H1tQyG3skkeoiohEGa97ASxSsz3KesFMb7Rq18sLrvLF5t9",
  "key11": "5eV1QHf6SZr9QN8ws1SSS873oWLqQFX6do9NM77zUUnaAHiXkjWGQ7NSTJSiTopVSLXPnFn64S7fsoFUy4tQduNz",
  "key12": "64JWSCnvcCp47xeoznRDKuhwHQcinpvC8aRyW1d6Fi4MmQ2v5myvQ41N4BcRLny5t4wDZwXbQHFg9cVcGWXFejBp",
  "key13": "4J3wcJvPrMkuTeRJcneyZncTxmB3oDirenyxWHsvWCboxDkHfrg4gZ4xfW3hYZaN6A17Kjg6ykvrChaS8rAEhTi",
  "key14": "4tvxGiLz9SvK2cmVShXvY8CSWyoHCrrbErWsbt2Xv3bgMgKLK2bikgaEiGoLCnxEq42CUQDjMr1pt7xf4gBxJ9d",
  "key15": "yKvS79gqpUfdmKo8CDYzhkVQKGxa7yw3vHybyBaKixsxAEyhXKLFM8QgHft8m1xb1xX2Vo9sVd3j3GJwVFfyQH3",
  "key16": "2b2XoJ9y9h5zKA5stSAzMcZHThPorxsKo7ifZ1CLNv6ZXfiKYAU7YucaESky3U9zcTvxaHcypVwUvbXE2iGB5PmD",
  "key17": "j5dovLmxxiKWbTQyz4QsnyTQVbmm2jGGWq6aq583tzmH6Dt2Do8LipMhkko5r6Xm7CRquK4jbQMAaAhMUxKQwLu",
  "key18": "46fHqStVT8hb8exxQRaGMM9B2whBPDa4bTkRNAfeTTu4QRcJM36M3FccvHdtXL6KyddGUfecfizbEKFHRP2Fh5dm",
  "key19": "2NY8peSKz6wFEHTrkw37Uk6qc2L3wxQ1uiJL3vE8drN2NYPxJS4kGDpsHUgtii59KhoRj6minrfBgefG7zUoqibH",
  "key20": "5QTipobaW5ug1V8r1JgVVSr8irucvd1GAUzp4gtbdFJyQkSGN5w9v5QkFiSEsGNzBsJjagPtyNa7DJF8pFQahuvH",
  "key21": "EbVAohcArbxtfbbV7XkizHFxiwt6MWZGjVSTMzmbD4iHrppN89GWTUV2YUHezUvmLh51ETbxWFzfYKFgq2ZesSf",
  "key22": "BV8eazny3PDF2pNYsDVX9cyyXRRgdT7Pjjrgk6nYcCtakV6wCU7Ho1wciqpv93S7qpg7XDHKxnY6PvKYZS6QUzS",
  "key23": "3Cm34YqrxMMiC5vGjPuLJizobQXEa5R7pKRVuP6r9yfz3hxn8kqBecx6bdwzjSF7JxLx4GboJtYRxLgZ37TyDzEq",
  "key24": "hfDymaZHsPYvzVv1y9AeUFU8n6uEid6EqLez56vehwnCmF3naaJCcoA2yeizkFyUiep87vi5bXseW5pWfS51AAB",
  "key25": "5k3TkSXaC4V2t4MiipeC3xYGrNJyPkH21Q3AueFABrqT98P9gTWRGU1wVafYYmKB5YAN4o5DSzQpzsW2wEhCuxEf",
  "key26": "5rfQQb6f9dgns1V9WmgKbXpFQGcPX7ERXhAB8JPD8R5VWFZ123bBYAzJYq21vZNRaeRBMBFDQ3FW3derA4LpouWS",
  "key27": "4gC4TsDbKksXwYxutsbNo9MzDWp7K9CycJiGVrE5FsNgeGVP2ZVda5rbWzGCcAdE5Fz4DGSxQAcGPBA3zw3gY4Pc",
  "key28": "2Hft44ZmksyCL8TFcUvi4KpWaciE28SfPoe3ZefZfSPAhfQQsHuC71c9iVEn8Mn6FsSFLUdST6mqN7zqJWjRzuc6",
  "key29": "28DPCDRtU7eJdPNdyGRPqWKaaj21fmPNoXCoac5udbBz997Pf9GVDCSu9nr4oWnNWxCcuJL9oL6K64gVKSP3zmd1",
  "key30": "47BBL5WP2r3jjB81iumw9JvFsywZnJRdui5StYJxZ94D1vMk8pe6vT6ij2a6Ze8136H4zyFT89SqhxVkRiCBDSc9",
  "key31": "2yTRqDY1qexWLVp4Wc7e3skpGZDen6wFCgwbuNYpvWeWzZfF8LAryYpYeWE2Hv6nMvjDLFzpSjE2uCssQajhmH6K",
  "key32": "Wpvh7MhaUrj5GXXhv5dn347T8Vkv6JzMBLHQjVfY7L4fSdPM8yrvpf4mDGRugR2hHu4dGwxKpr3Nj2Vfj9HAeHq",
  "key33": "2fohxSeBo9jahwHArXU5DDoUVZ9GoWFGYs6wMuHtWCWot9EdR2f2i2tT9cf4FXDZr7EWiuE3mvuRS7jeHdSWw5Q1",
  "key34": "D6MvENJNNwVP62pPrBBHxwa9JG8A51aPXFByJc6rXS69EanMMkmLyYU9b5h2FJpLBFCr64PMHjUrGXnk863xtSW",
  "key35": "2zJtj6P6Ra9aCTxWCz2B56YxdjPnaKehK37RLu9SWE7xak5JPDXx1resBXBHUDE6nhx184kJu2CmPvXgG5TaAfUF",
  "key36": "3gm6PdgKse3SwCY2Xm8cGAm1WKgbLpsGcbpq4bUwNUdahGvepEZmTpw51z9VmBYf2ehEbfyqfTGc9r9DsNQSXRkK",
  "key37": "5LR5C9b8pdvYxpeRazMzmfT7ZSNpMb1toAmhnwGzNiYkY6WPngD5Xonn6WivD8g2wWXFjRFqQUAnP7PLDaksr5MG",
  "key38": "cSJ9MyZJzBpV2YTCwrj7FSPFxitBbBuJZsmrHY6Nyeex54u9qyxzXc62z1PfNunw6BAejw8iLhjHqNmMjiToeHE",
  "key39": "5vMxJLdkkiwRw9b3PdfzJegqZSnhnwJR1Rq42SifhiwPxHQSWfH6ixpFkEoSLFWcDKtRAF2Tj78deT6AfAiU2vcG",
  "key40": "2kr9fLwUBkxuMPAvxjJJ1iaGkubpuzzA1HCYw1u8Q1MX1tJqZkioEXKGoK76C6kWZE7bHcLDdpZPtmciawb78sYF",
  "key41": "5J7Fpw1g31hETdtScjccaa2da4zYFkfrfexYAaph6mf6R67tw5mBa39MSeGVieNDVCYA3Vy1m4Bh3XM1s1WjfQHJ",
  "key42": "4x3vmhLyJGrECBD2Svv3wzDpPVgu1VXuUUpTKGRWNJDCgyDXbJq9DF1dV3VtXPYAW9itR9dNfw8PysLZ7hm1uJ6x",
  "key43": "gJEq3uMAnMAMtBSX15NVZD1QjrHTC3tzm3Wfi41S6ZRYqY6q4XkrdXjeTby8u4jTF2KYsWbap2MuT7kUdLdaTLS",
  "key44": "5N6kLdhNCmNfU3mgu31tST7PoiuKkHDL9XS3Pr5Q5XJ2S6ejDrrFz2vxH1o8AnRdoF2DnMmgNbr6XLwEKeAzGpxf",
  "key45": "42ae1bhps7dRuUdkZnQo7PxekMgzQvADvq96UHXtsTfJeYzoZPsurLMrfdSwiBXzax7Kpj9gHFGwck7C2sJq4kPY",
  "key46": "4TVY14LVvpw7bvSEwQEirAxABhtiJSRooXZAx9zy5mPrngv1spFUFq2MoLy2FVdFDUVSCCxawJnexZCGBrVVfDB2",
  "key47": "2oy7qNAkkZx8aAko3aXW4NW4a2vei7uhSZLp8Um7PfgJuHrKELuTPjY4EdQ21ZrCDVPaujzfDSvzbBcV6g1GdgHe",
  "key48": "snq5VN84b9sjLdM4jSHbi3tjkPjesQNM7dQHB8sm6iCDJVcD6yYKe3ESQozrBuyCNELh33mmq79oPHg5MSV6aHY",
  "key49": "5RURBbkcdFcT3eRNReAmMXqcVvVhu5iYzUMJ3JQi8GEgPhy4rf9NRnFx4crCDLUaS8HUtaDi6kc5TqyfJqWSJUZP"
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
