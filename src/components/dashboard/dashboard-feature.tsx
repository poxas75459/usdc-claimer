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
    "4K8u5wxeRvjHicqTskA3YgT8UAotcoSpBAQPs6WmYKpeinwgYj6w9KycGKRJA9TWTLnGB8RsHzwbdu5CNHPpdoiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pg5wfLrupT6U5UoM8wDRNpup6su2PLChPXiotPchSAod1jrubDfdCjkLcMnWWSRPezwsCtWLT1PnBkdhXAkdVDT",
  "key1": "25rVa9gCj18jdYTrS7bBvZcvFU89pkq4GVzfzJBZhhhAXMLLJtaKLfAVrsBmfWP69LEPcJSHWc4yfJEAZ7Gpw4ro",
  "key2": "vgnrr1TRYrd3ninZHtsvfWNZYNHvKbcnhZPsDycbBzXswZKrB91kNmFQbHtVtLaUztAV4GKCLiXZ33f9zjAimTk",
  "key3": "5gU7RxKmMhWZ7F9GdSG42F2KzUZBb7gK2ESCPbZExJygrUMdpzoBwNA9ExEB2DA8LEBQGrcaGF1bxFqFTUNLngE9",
  "key4": "4FV1hJsEKL72KRY8PBSVw5uBUCHuHkwzASdpacQcC9GRkt7WXk5PDhEaAfAbgiv6cRVAZjCb9iUHHN5yGEEkUeaW",
  "key5": "4DwV3cEYnWAt8MvweXZ1Y8FrMXNuNfM4Zy8uzGY98eVmsXK8ByXGxmYwbUY1ip4qqCefHEuER3jeaQgy3iiiKST2",
  "key6": "4tbhvKs8QXQh4jJYda54M6AtLdn6g4a35Lf1UL9xMA8vfxxJNyvvgZDUVYrJCQqx7YZ4GZM2oRT2qxQfKLR4dYZc",
  "key7": "4EXBraBpWZL5d6wrwvomKcCVsDrkioVLSyEYLtVTyG3ZQgaswJZZKyEzrNRz6ZAezom513mvjgqMnPSjZKZF3JBB",
  "key8": "3awaJrmDEf82u4RoKHdgD3zi6qrhbPNk3kNNJH7mPfreDPCvacSDXdmvzSmkknd4zWQTHU3Ky4NB6d8AvGnK5PVZ",
  "key9": "2ws4xMkDGSkggo1sCRNZyotAeD7iJ6RZXBfte9G7FDuTfKufyYZugVsXKQhfuKKaiNCac7GHEpTpkKPRaVsZHGXJ",
  "key10": "wksGcKfWoGDH5CXceSBei8jmrLvtuzeXpQ2PShE1QyhbSyjSjhuKCkECULszELKXVkb7Cxhw9KFv1Rimu5Wzsve",
  "key11": "2CF4irem5SzmLhf1Wpzm7oveKT25ud6sZ6ZELKazdtCS7PoiVT4Kc1FPKoc2hDP7S93FgzYUoXnUvNsbEqwi9RkA",
  "key12": "5hjKvcL6DG2ne1SmbW6WDvdER3UtzNKzVCzA8XnW8fpLLECTtYhVTwz8JbsUoMboQgJLiuQiLLcJ7BS62sSumC3L",
  "key13": "3XdXLWTwU9z9xNXdr3yhA6nw1qajaK5ZfiTJDYEg82nHiwQvrjXkXre2xx5YziEVvvGaxLkU7EkEq4WZWaqeLyWq",
  "key14": "3noFhgURHrH82NB1XLjP3YjpLDhrjtcoej2NU1m8eL92h6woN2Ke7GpPs58P3u8bHger1Nt13iEZ9kCXTm3wSCu7",
  "key15": "4wcXkEgGndvJGijN9DCdWqX3gMAaCsDnmMcLFvBmSKCr87Kk3eb37ekKRjC1b6dSLDT7Zc59YGTTY9neYAFkc2SA",
  "key16": "4uM263n4bDWUHEYaHBUfdk2PhWDWofZ4hn2CqeMmA8QYheGSJ66GsiKCiShKgkXk7M7rr8x9BzjQ2Z5nckmRXAFW",
  "key17": "SHUQyNn7yWiYpBcqTkUiE5RziAUDkyrntAP6ogUeV1arMYZaMBYxsomtdwbZXPTAiBYkjRtaYSJYF9ccH4Mwsm2",
  "key18": "2D4HYG8oRQJLuYg4rgDTFFT9DEBAWuDKKv6mLVvRAdEZG4FJnsc5NSuuCqZby3y7Q5E8V7fNy7CEkjMMNLU3x4gV",
  "key19": "sBVehFeWbffxViyBWs9HNtdmkoY2Y8gtDzQjufih5pqNYPAAPdevbuECbvGcAeG3yWa9xGJGmFas9i6D7Ahe8QF",
  "key20": "4Us1TaxqSDcahHpjJpLtm4GavCf2exN63GeFmDyRbXyfTPAN9tHgxMLbETyfqE91mxKBAh36ETKtMNTWGuYmEbNB",
  "key21": "2UFgF7EpYhFSapD8ekJqWjD1ku4sXZXhjtU8cPSyBPX1ojJhb2iB863R9eeco4LLj7r6a6BLHJiFcMuHJ6jmQYts",
  "key22": "3mC4Jykv5ykMuchR54wmJMNBve5hvZjidHXWrKEJB9iHvYGJFgt7HraTeYzQZi51xzw3dJHxsovMSYasrTBNrpiU",
  "key23": "2R2VKaBJAGAJFYP47sG3ifjPXQMaEMkCEHZnaa3fWxTGrH3ecUppZUA6RWBQEzkhKGbyJ5rLk2tBqkzpZH9R8wA6",
  "key24": "JuoHmpnKz8UM69oJNLf3QCqRZZ98DGvbu1FJ8czT1LqJ2m3JaHkkxmJGAWGcmkdYuRotHyKq9PNqherrRV2G531",
  "key25": "4C61SA8AQHB3DEqtnZBg1haUt68HCgUmgGa18SQP36mfRPf2odRN7SppaQpbAQoT7D1e8XZALxkHbnJqbypXtj6P",
  "key26": "GjUajEt17UmwsxGS5pkjdjVsbuJspeXQ7LVSmLvSQnu8rGQvggSpyCuZzSdvnLMK9eibtehSeiD9rnBkLejQsaU",
  "key27": "4yNHEqdgPqi2kgzGj32EFgiGXY9oLq3vCUNgATLixq8T8ChsPJpsPxHdEhjVmaJJdU6UmNB9z8m1BbQ61QqkuvmZ",
  "key28": "aszpsQpokQdfV5rDzgbiHzAjBYCEpVV2ej5gw67N6vThXLwiEYy2J2ZMuNpS5e1Lef6VATjACT3vcoscSModSrg",
  "key29": "zAcz6Rsiiah9DbWYB1FHHaWiqnS3HLnMmeFSFvHzinj6jSJUyg3Ce8DggdavXCrZS1dxZS3pRzUDBUXcLHebEEs",
  "key30": "3wrcH94hxLnbLBtnnUurWAGVQNFW3ARaNx2iTeEjsxFBaUQBUp2VYW4E2pxfVRwtwxHzkPTaAVxFyAy9yrfPKes8",
  "key31": "362x5ciN3ALh2ARMFWMskQDCRMATzXDFsAfmYbXqFhPAZvkq5P5s7qo7VEUX4cwgLSFNPYZghiX2uSJuBSqZrWn",
  "key32": "5eu9bYHq5ReNVBJufymPevz8uw9qMr2RbtWXyh4Y3oHi4sRh78VmSPNZbQDT3VQkgcwbAZwdhahf5YXgzhnrYPLE",
  "key33": "2eNYwhM9PZdrXeEX2XERU4g5w8Z3jrpQyVnkKvwbFsXvJbsuoj1KQ2pYdWJ9NBBFH4PGBNs8QYVFX7iSaDxRMe2Y",
  "key34": "2wymaoR2XqTPjeMzsWPcu8bFpwDDDuMekbfJyoFQY73FTiuPhLqJtcPoAEuvnDwHT38rxX5EyKoiJ2QNp9TBaF7P",
  "key35": "2Gvi8PR9ojypoDJBkxwEwEwmgDYDjaAHjTCHWNUzNaJbzPj4rKL9vdrnYSoWQiny7rLykWKhXjDWGL49kX2vZaR2",
  "key36": "3E1JQbaovkojViDEJoKVpywe55NL1vkaR4NfSRGmjnWAoZMGBusCiUEUjT4camyp6gnMS7iQwnwFvTDo8kiu1FF4",
  "key37": "3mzdcNvUD3Li1qKcRZFEzPhMq165DDre84Va423dbLccRE6pqin7ok6gXgqNRT23YqYcVuehgfVVtZh4zmdGRGSY",
  "key38": "56KEpWJXND7EEdhb6wrAKgsnnPpisRmuSWRs3p3Expbrj2DkyYcRFq4VUhuykA8opVL529ktaFMRuaHBf9EAgGG8",
  "key39": "21PTMZnpLLFRwNpspLHjiPM4mBh7fbfvZnHjTBBZC1bjA9xaRufySw1y3YKgppJz6wpfREbZj53Gi7fmaaVVxv21",
  "key40": "2LYMqHikWUoQXgMJvkTzvHEp91w1BKJS7CEBFakZtymXzodJzaykdzXkeygPJ3TnHQviLhN6yY758ywtkunJFGnN",
  "key41": "3VJ2MkK7jtzWzDyDWwH77U3qhoG2Ditm8Bog2Z9ieSMEQuuJTaN3my4GQ47LMBF71AcKrTiEwM3yAr2u7EsZBUng",
  "key42": "3G4mniQWFT2TPkknpVKgXo3gPnXw7L87EwQho1Jmxv3AFtx1GhwuvpmHqWrTu27dSPWuoGEy87tWfxkUBPZF18Z1",
  "key43": "3X4G9QbJSC62b56HjBnizDqVyYtNMxkRfTrUnmKjVSkscYDvDGKDtD58aozfxKvMqNcoK6UFdjwnn4KBx2KBjwrT",
  "key44": "2MKuL6xyCz4KYEsxQu6hdDFbk5n74JkTh4rmzsMyqDUqVEPDFQP6Si9w1NeeR8gK7kirGFwHLdpcQCwaPKhNbrZP",
  "key45": "4YzpErT7WR2cBiJ6nk9Fr1Hm8cNMLawp4pKi46U2rfB124U67P81ffjmSuDznznoWbfb2gkqNs1BJUz6i8TrPuEh",
  "key46": "28jog5Tgf3q8zj2f8HgEwxVpds4uteY8k2vCdCYJZubD5CkWtM4zpvVpqp5ZekHRhYYndZr1UVRQtNXnP5x5wBFD",
  "key47": "5etht51QXdM4k3Toxrnk7TCGvoAY777jsK4CNGGRikwXaGgkKrY5EWM1UJ6YtA1VfjqvejH4Zys6JxspgKP8ymB1",
  "key48": "3wimsGB3TvyXm4nzFJkigdNfCu8BMGsBN9yixpUkBRdFLBW5qfRfKpHJzXzobjPfg6Y4fmrx8sbTysH31x469p2o",
  "key49": "3k3ERpdr7U1pTxgJQLvjT98zopWiqPGM2F6CkvWcpJgNhq4Wfu2JctQCLK7C4z3rAvqA1iLzhiKPKFoQHNnfS3Nz"
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
