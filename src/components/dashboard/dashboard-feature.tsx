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
    "goH7CmJjWzeptvSTAp5EfSQUSnx2FHPvk7w5ZTmserRFVp7qWCVWb4a12byR62WBxyE9u3863fmgbT2H4SrutgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dkLXAC76uvep8kKBBENdqXvANJTrcbnKPa2GGPr3GhNckyZdWwtT7LR4FTRAx748it4ijdA689oBqvPz6bghr11",
  "key1": "3L79c2uvsATwQTPYawpmsanrzJ5WG5e3XTbbTUGBT8KfScFaLqXwF7ck88iSKrhQ1paDMN9CdYmH9QRqdpuVW6r5",
  "key2": "4SmPdgNZXhR5jWpUS6nQkUYQiPiKaTfwXCji3AoKiStaZv6WWWatApAPUHqbXKfmdyhRQYDPxXanJXppBUW9zdtr",
  "key3": "4Sny7rbb1kMA3yGe2JvUt7tYrJjsBAwxEh2kA8KdRxqYV6VDY2BsHtqcjMkAQg3nqAb5naan81gDjY1ghicTfE5f",
  "key4": "6xxHMtLPn5WnZwHpYh3btrkh5o9PNns8vYtFiZ8bbeiF8XVfReLbiag7ycmN4DsDMWQRGVjgXMkDozJqH6iGngN",
  "key5": "52qbb4JE4SVL7AruQReHW5vxK6Pq5RhLd5gToMhPXAjPJt65HNixxDF8uhcss9atKJFx4FSjDGAv2r4d67tGGbij",
  "key6": "8oKoLei822kmtvnCk9AJGEjnzsUX9zxUxwCNV5JmR4GbRZESU6bBNJ4jyVKiSr2pn72QkuPWYGYqCwsPdjNRBZx",
  "key7": "5jdvo3VPYEsWcRsMqwxTLP7WEtdisoAm3zMAohjowDN24oqKNfNziwtTQuGBnRiGbgbJPRPupp9CYY5BD4upu1FC",
  "key8": "4ZtyK3LJFv2UnQoP7E83igYNrkb8aMfCNagx9xmhpSMdo7utnRSVQAvGMJ3aDZ2Wt4WzZA8YjUowTqc5UXp7gbST",
  "key9": "2cndTa3363KRMDNYbuw5ZdHSdXm5aNTaVBhdLunEcj1te49eHq3dHNvuxaZV6BjM7ApiBuA9xFKqYzxdhRCveS6s",
  "key10": "38nNK7ztMn9gPfcRAKm2exLUe6JnBmGx4MLi4corRq5X4LP7U8CRjQX5HJWtVMTFAjUVYwz8YKDMrcW8jCwrTc9n",
  "key11": "2ytcmFR1GwSfCSKXum64iiBSwzxDXHUPESbBHf377XU1cSR8zLjWAZBe22eBqrBuSoXSFfdbRp6VQL6ymH9f88QY",
  "key12": "5THWboCRmeABdGeFFYxYcSV1FCVkmaygPomMvoZA6Jz33uLsfUG3YYRPBpzfguKD41rFqBcnNjcsvvRz17pybEmv",
  "key13": "32pZbzPtbCxrM5DNMnn6dcyqTCcaUu9FRC2yvVvJxWGTE5NBYWnAJZMk9v9onWgdDKxLy5bA8me1ACoceWGJMoUQ",
  "key14": "5gEXF4aXDp29RZFAFzLZtRYjAASAVdgFGf5x6C9dYXMKtPStv1eaUi7NcNfLzG6YamyLPu7SYQA55Cvi7e7uvJXc",
  "key15": "2JLSsC52aMyw1yYJQMjKXVVqMWQnq8P3TSAUGjbBkNszHimEaGjAo73q6nxeGubkZNa9QnGBFgfyQc5CzrUNj1Ns",
  "key16": "3NAombc6eYZW3jDp5u7dFQHWEhuHFXL59rABcTxow9m9Ed673roDDaQio6aTzRzFvFabwt2ovr9DWj182LLNxfSA",
  "key17": "63fjBomQzgayPwE3UiJPR11PWeVr1YuryGPp9ymj1MauGzFLKnggFgVUKsAXyi3CDzF6cUpNW656rPmwUbECwRWE",
  "key18": "2smDDbVjznKRUfKvfa7s3DXy2LiLdjZ8Jxc2ZCynSMuqxrvQwpkHMTkGuauxPgL5ePF96B9FcKDBc17umYHew9o6",
  "key19": "ZjPFUEe6hg4SHGxwaHhkAC6GpcWgvjMMKCewXUjBFxgwcYyQ4mrjw1cPqzbh4mpQrqRTHkKYdn741tm3CRdy2ZJ",
  "key20": "5jBmvezy9qYfLUsdff4DREvBGzVbCXwbS7YQwiJSgufLhHgKaSKMUYA6mZGRnwbqKdLiFNv5LTYsA9VQYHy1u46b",
  "key21": "4j8ASrovZqtmYsQWMiYAurvD1Qs5q7CM3wj2HsAErkkD23k2WZQDzfKffCMFs3eQnRWBfWjhyNFeZQo4GTHz8Au8",
  "key22": "5LeWAH4jkYAcQeMp6UyWhenWa3NM1dN4GS4hGgT5Kppi2gB1DjmqH5AF8FhhikKi8Bw1DHagdaL4K5jdCYf8WB9S",
  "key23": "2CHU7CU2i4x9kQD5ZSZrn1w3RS4AC9ifGg56TYirGet7T8BR8jCDGz4x33oGtM6jtD9Z7eZ4vBn9BciUPeALbbnY",
  "key24": "JkcuVkcjYFAZCGFKRjHGAMnfQmoAW9A6PKohJtxiBf8TgDgVtaL6kZjVRcy4Q44waZdTJJyHe8woVKW225jvmVK",
  "key25": "2wMFRaaUsbyppREQqE8o1Pps6uyG1UfSTt9h7LsLHcL45F7gb9FjZahtUSZxkUUo5b1Za4CCEgHRd4WrYihtcRQe",
  "key26": "4dSLVbGQksK99vHEt7qPCo5qeEWkG6WaMw3adNca85Nj6Ad7SrtJehgiHE778ANaS9PHmGP2mLtxrZdxEXWxjDFR",
  "key27": "66sHRjT5YzbZap58u9MHUT8dF5Pp3tFn8dUTP2KgycVMd5hnUs9v556nTuppiZDzVzyAcg2MXoFYCRVQYSz5SDEk",
  "key28": "FGUqp6kvVmZsL38LNJkaCwTVjFWYR3B8RGr21yGD9peyY9BLBbnW91TDxe7RxAQFdXwTBuC99EYoedtkr1hWJ9y",
  "key29": "2vAwvQ3KXtzHv1cwjsjEGfh7caM3JChmuDs6pD6bHEYbpEC4MYbUsrsoNWCVhq7WjadFC55vg5jH4rcsazDBhzce",
  "key30": "Ga6Tcr1WV2QLTocnNnta5hcZMC3ZXnityLaTHodEaqGg35rmQJ1oBeY462beKpgAf98bpuVntaqmfnX8FqULnSh",
  "key31": "5TQYuxuS8J2v26HRAWszf11RThZEH5nGEE2f1vNHX5CMXiUNFVXemYmEQF1ZeZyvZBWD7HkwqxtvwBscDUCzJ1ex",
  "key32": "5gUFc4Z1uEoNWwt3313q8McwuCvv4M9rKF9cB7GGuJXsnexi1r9EbZ5QP58Lq4CjybCi7Jnnqgz1CaRVD2didgpJ",
  "key33": "4odFurL1aBDywjWevsBiaQtoiJtkPKHy2Mw3tQyeUUaztEi4bTrxSzgtQ8AAm81z5F3GDiY5EGDd9N1xVtyhbgN2",
  "key34": "32Fi7ujEWxZibFD1utxvKFgBmgaTNEoFCTfm383tsyuEUYN1jDdWCjr2AgayS2f3khKfNgvymnZodaKoHF7VYhJ7",
  "key35": "2nznudyKTioFye2iUnEyC7SyrAicGziZzstZmrFXTQ9nndq6BheWKyNxJUaeyppb98eAiTPAvAyab5nqESVU99Bd",
  "key36": "5KsqxGsFmvmbc615mbVhJnuAiYu92Yct6BE3Pp1rRBkHeDwKJFCLyA2ZeZswLCn4QsVoQcYHg1xw4NhCWQdu79Sy",
  "key37": "4L4FQo8P2Dv3QwC2MAsn4TMwGt3kA8WNfQ3H6hFdcM314zRArdCuFPq1EteimkienERPc5Pg4KpvACY77NiRTdrE",
  "key38": "2ViNdF3GRVZXNcQ2BdsBxwsVZV55C7CbF6EDCj2MgQ8s89aAW1bLz8cJPisjW7WY97TsubDwtzKuzLVQAUYBESew",
  "key39": "2HkEEzn1rTJ7kkzjNygWpH56t5pSn4TyWfgDSgrpgL96y5t8V3WWdsjAPHbhSUT6s83Gc5tn8dNVThhss7uDeHcH",
  "key40": "2j61rUPzD1QAuGrfwLMBNFui9w4Xqqaj62qULFZzRAZYvWoXyFLMgPj4aN4aCB96oFh4V1H2FoufxtDumxDbYdS3",
  "key41": "2Kic8phZA144th5FxaJBw7J5d2rDNzXGhDZzTGrsTF5dCCxfvPCV4gMiAvjChb8ToiSgaR2Hs7knckyys8rGzknU",
  "key42": "5nUYETbLLh6hHaouGB1dSsNdmoPHhF2YXxhXtXMBwi7eJzkVYbYWNVmJaDNuTNBr3mMnG6ftUVa6WYUsrAJmVT5u",
  "key43": "4wWnno6rqPfJZ824BBFJTgKmXLmEqfBzER3ZQbtVv96RGqMEVmbAPu55XobkFMwnV1uXifrKed2PnUHxNFmy83w5"
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
