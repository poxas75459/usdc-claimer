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
    "375Rx2KqaKabywPLNpsK6mMzi2zpk9XQDKyr7x1wj4ewBnCWDVq66ktBR4eThfA44BHM4V41eAa8B9bGMtqhNDAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bLEJMQuCXz6YN2bMhvMH1o3wwyvmC2BZxr2vB3JotUeHuExjQkPRDZGd6Jmy3WQ55z6R7QyRzLbeSVSiAUTt6rw",
  "key1": "XkNL4T5bCq41oTFd3rfCMSBAu7fye4tGy33xqtFLeQXSWzFMQ2QkN19C4vqcGommcbHS8JEnFVLZExthdXi3JkF",
  "key2": "2Bb8jnVuhoWmzRC1CMdhZMej3JPMVakGNY28MgHuVdM9kgSukiwcQzNH3gNz58wPj9X5RTqgWpdVSKzRuQEYqJR",
  "key3": "3JeSMgpMjcDKiWe8HSATmGdp8Ewtgqca2P8d6syHyjgysTGJcNg3RJNDqNNeLEFkCt8za2GMceZDXozWyvUT27Ka",
  "key4": "3LpYpRJftPMDHBMSzAsWtTSD7NA8FVaEjh2qbrfocTvbXwVQrZrba9Lyo33mHjEZKP2CySByRxobXqkFJ4mDNuYA",
  "key5": "4EAYfVGGRGWsheK3seuecCLPVdWV5bjr6hSH8iVYoyhjyZoziR54ffXLvmYipRQipUjYXPm16pJ4yy34CBg2vY8Z",
  "key6": "253aem5Pci6oKLpTdVt8RWAhZo2svzRTNa57oxkKcau81jqUMB2cDptyadQD8s8UAc5ikHNrPFS7jpBvZ8FqvVtf",
  "key7": "2gLqUaoKiyuPE93wYxQWY1yHeYa4z3zp5sTwZuBsX9Wm5SAdp97jQH9eNEuQb51eYUcy2maFwrtMVtuXQYz7zhGy",
  "key8": "3Vzp997UPNfq14RwrngpByLNdWShTfpRMeZYbnHqeDXMZzghGtaBeGyUqYTb8GHZr6yd7HAmjtWvqiuSz4XEsXhk",
  "key9": "4evDAcrUfjiVwU831ag3dPUYkARFRD3vLaDUyHQuebt6T56FCdMUgKKXekzBiJee8s7NytNqAWcqPrk4YYfCeJ4N",
  "key10": "ddVwx4DZBDtua71eYkTFCwqzUEV1pRpbCuqVvUxjWJnoHLz3LGFjQmeptE13qEYfphJjBfkkXA2rBaSFoQLideL",
  "key11": "wX3MPm1uZxe8gYAMLgcTVeS5UuS4u392x7o6eWJXme7R2Yze73RkFCdQC8LiNBTgMKZBs1XAbdAjcWEUa9sLPt4",
  "key12": "5pgkYZuRZNWwa5e5rzsyp369z9FPa611RS6a76uBVCsa28Y77PyqSEXHkCYsyZm5GqBNdigHMyfoJitJ5ippa9ug",
  "key13": "3V6VBsB1q5JQ8rjQc8nJYuxqJH1ZyLsebgyBd5WpERzHy9uHLs8d22rdgp9ynTfA7FqZZbpExXPxpMTSUtjpj7so",
  "key14": "eD2rEJUMnXYhkpAEJEgxjMQtAtsD5Kdez7bPHaqEbkLhV4AKZnBaSJL1oDGKb8BVJ1uhzFQtfVBuao5PAcxZHNH",
  "key15": "2zEvfjPVvQVrrdXv34X8YP5fy5k5gULTdQZpYCByUwLAwW56AQGA3tnQvyWyp4X48D35YGAJRiezNkYETLhLEc2v",
  "key16": "3HS6C1hzaiBaEKwMpsWMHLwnXGkZGEhfpejWXWpkrVC177VecBzU5dnSngxNXSHuyn1FiRBYGfJYjEMAexT1W27t",
  "key17": "5sscnQYAsNfjZDQgwms9u94xEQheHR39EyXKJdh7i9gSdkd7LsSsCea6FpvavaAKoYFSAQUCSbg5kCPp8xrouG4t",
  "key18": "3wvgnstua8FziZqDQQLHP5P7P7eav2cRGLmQpcfLkS2iGL7vsSaEwVK4sCsMbim8JfhPbDv9f4A8FSLj6J2bsZik",
  "key19": "5BTQYefJEFjzNvgE4XAn32nVDVoYnxU7kcHQ4jQcUMHpSBPVvikREpgb5SsWxyYqu3Dhr9L5GkCKgH9UsvADwDS7",
  "key20": "2MKLdYyLuBvfbX7GX4dqVqJoEPP59iXfVZjTh9daqabTPeBJp5D7w1mL5AtBuY1sbXeccGxvyGyjpnHfYcTvUYDr",
  "key21": "3JvZcSMifq663AqbnwBZW7iuTpSgQtDnwzaiE6nuhuBjkhStfzqinReBGmSuR38ZdfJNSTyHFqySeZh4wXFpJegh",
  "key22": "4sAbWmwp2pnmGMd2kWjzPKSrXriv5Efx4G6yWbjYov65piMwzuktvd5ZQz2wZT7vjE3a7HWdJwySoa6HNYpXifXg",
  "key23": "qvE52ynFsLK2rhGNPPoVKxHhg5iqxFhoboEjuvAwE4yzzMEYjSvWHUMj5E6bG39unf49aUEGJu1NT6dekmZ8vYr",
  "key24": "Nm9aKQiLpaPZeAs7eFw1p3kt8YY2VUiTArFrVoTHRCWTkiMbeg8kvZ7Sn3e8ZHPW9VhtFzsDAhxjcgthg2pbEpU",
  "key25": "2Y8ajAFqDZWpYhapVUH2msVJbuvFcmS7iFMKLamDp7hfNCTcAVW8neiaCRHq4zcjCpP2jAzo1evXyfJ7TRWKAhuf",
  "key26": "2cwpmBUwqipTMwGCaf4XdWAHCpWSFfyjkQvpeg5X7WuVEYJkWTudUURMxcqvDNmXX5JN479kYmAkE6vysuKscT47",
  "key27": "43WptmJeHetmyL4nhx8NQALf63BkRyU8F3BFCSQ58xqN3tW4Scvnruz4asdPjXjKaAkpZW8B9kPLyHZHLnGPNhqE",
  "key28": "5XEdBoQafQwb1wv5qvHYcKfHELPbVrxqreY65T3TfrPzXKtgfvPqqqnSFZtnTWAx6s9UFG4H9AQuraGnm7sy48q2",
  "key29": "QS3vcAQJ42mBX7MisJpPgdwU5dzLRX8apSrrVF5YAmDJ9BB376Ujmtn76GCQqcoKLZbZU2bCMMWS3i9gc8PCmQY",
  "key30": "5itKxWoWQzPywMe8aLJ34ZvauSjjbcxE2hnngTzsXDcW88fFVQMNVvmtdmFWqtjgYKVGGDt5dL2Nqck1UkZSTyA3",
  "key31": "3GKQnagporBgr1xGPYhNnJFzdjEysx3wxFRfAXNEmnGQmpQ2SReBA6xqBMP1FbtLEs2qZPKWXWyqsGBjSx3udVHp",
  "key32": "2axvYAVGE3h5x3ZuoFUEJm4pmjKBR4PNDaZ6mfyceW7mvEQ1FqjZpVdo2rY3EBriJGfvivDgDXANpmspcx2k1PZi",
  "key33": "5mF7wr2YPiKo8auahAaYZcyXoDLSNEGzREEUFD5s58ALdi15Rw2bUeNjjuuXiD63cK6mrGj3uK9SxPSNe1qBUVxZ",
  "key34": "3iuXty4RrHWDZdtcstmryLh5LDraaM64eSfM7QGaX3DgX1VQ87xhs837PB5DqJeJVH1ZLqZMNbiQKpW6Z3EHY7F7",
  "key35": "2w6ggzzSbPqxkfTuPgovsUgEEfNfZTFcqBZBzQxX17DZXayjw8Q5aWkbX6pxT4y8yZXvntViZxYfor5vukQtc8jN",
  "key36": "4aHosneAQ7padNnt6YWC5mwab5QtY5f91s6rsTKRWbjQkAA88cXmdgJ718bQmhfeKUBpLXDvhphbZx66RUbV1nvJ",
  "key37": "7jikibsQJaA5W8QtLKx2fwq4quo81sRf16dXH2y6aqY4bwfLwtgzjUu8PnQxSbsAmjdi8GBGWmFZEsMB7adqmue",
  "key38": "5EvgCbVam1WGaWxdWcUSDcwb7rMS6ybAwfeWxFoHiKEpLeZuqNQynPepdQYiGbryg6HNV3BgqacchUkrZFi2hhe6",
  "key39": "PdgegjMZhVeVnW78rF8ak7SPdEG2BWdJSozHEm3u8LoP8NXgvM2b5eCRbH9MbHmJSVkMpfFP5V6rGfRBn9ndk17"
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
