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
    "5Jvs7AYbJtN1mCEQGq2jE9d9f8cF29KLFxGqypnKN22ESdw2wY2aMtciztZqJxVXMCSjzF12MRjAdh1DbpbdYxT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XvZfY7ceuJKe3hEnyuTywSV2kTQkKQpLsitpETxcney4gMeEMSFkrFDJgoBd1pHWT1RXUYYkZ3PuuSnNZ42WnHm",
  "key1": "3t4mjQ8Vnga1QYvgqFLAppPkJA5RMKM849PnUk3MdMEaV3nbZ4MdGAtPmVWg7nX8Swi7JEEG8cSvHUmdNCtLAV9V",
  "key2": "5e5GBeCGUXHb3HKeWkdjN3SDJ6j4rQonuPAG86CNSGootR9zKH4qYbjXeRJhdppQrxMeV6ASkTMJhthJKmGdtaeX",
  "key3": "3rsBityHfqUL55VFvMPDz1hVyDmPMy1ukUXtVdci5bQLpEBWxZVm3KmUNxmi5e98bbSUVQ9pFSwCvU3hjuVg1Kn9",
  "key4": "3YSPKXZ4HYkHWXy1E8iZZvDCXbsqX2ZMLuSWu4TzbjrUsnZaKFmGTDgrG39D1M6EPeQhwGHrNMVpMTdfNCr2G3oL",
  "key5": "5dTUiNRkTwcYRyb783Whyg2DvuDRp7mLzaJPHg8YtXFNFexAmtGMwF1Te36GgndhFz8z1ZhHQwd7ERzdHpcYLtC1",
  "key6": "2NhBW2nSYX3sPqivDLqZK9HaLaXoqEGLAFJ6d1owfbZK2jwPfQ6vHQdSjLWAsdAjimsA6F28DycNfYKwzbNrdBjY",
  "key7": "HXwrd1ksPBfArR88NNbENtJWY9MSk66bTFD1Hmwe8sDiQYAt23iFJCF75e3uoT2EswqYyQXsAHYFtxKaJSDwE8z",
  "key8": "5gS3JTyTU1XpNH5nMuL5z3Vwj1wG2mmwkPLGZ5PR8nefK721ExKYbuaJemAadWzSx6P5ZR9aeigaSstSbqTRZfaK",
  "key9": "3tJGTFQ2yUsADYcUbUWhS8ojnqjsaEtqRQaZwEAczkk7Z8ckH4azKnJBp3huR2ZSkUa2eFzqced85bSsHsfxNYpk",
  "key10": "5zCsik2sov8ju55zBLPAcGRqaK6Tv1vM12vWcda6SNcmQTx8WBdcTSn7SA5ELsK6BRCTTyxtm2jQvWepGXgAchef",
  "key11": "4fQBJacdW87c9YEN5qrB4wMBrUfzjyGQxhLZh9gHa8Ep2xXvKo3qbAUyfVTdMLbFS91urNKasYtJKwrJJG8pXdF3",
  "key12": "4eZYeCctvV845oAwdBrx567o79b2KBM7eBANJd1wMcEu6ZN7jh8tiMhXLb3So43aMaFdRQ57tPbYWgmo33DaNBJb",
  "key13": "4HtAvSQfvw6HYbJ68EMbg3y34y65RZ9Hw6Mb44nrpFJHrKNcTiHzavBP5qVTStKvuQmSjWsCWFufLAk6fhdXgjtH",
  "key14": "3LtKiCjHvCPBorLbobeGFEpCWPyEijB5vcnQTx1mjc6vJgSVs3XNtv8GaV2UhWeGE4Up8jz6GQzKxtmz3cepxw5i",
  "key15": "5uFofuh3rHtDhHbeDjNnZLiQe33pxPJc4RGT4Rqfb3Szze7CWNMquNkULY7aTzodCH5qwFVirRNFu7viBDMpwzeL",
  "key16": "6EFNWAcHfDWdNt3Ko4fcf9qsUs7c3bz5CCth5dgdtMBAq848P9hHtph5ErWQfnA9dHnEXeks8XWPtmCQ6CvZNmn",
  "key17": "5MEAh2hUCPQpHjABSy7Mo1RpXbbb6HFzXa162aPiDHV8xeBjfiFeoLP2HtjzFsYtxjoqo3ebW6GWjSSZDiUCFjBR",
  "key18": "CHERZLRFUHMSAwAoBQ96aG1WyFV1LKMhq9bFe6UHgaRqgf9t3DNxQXRRyZpAju655Vj9fU2ShCJ7nyG4UiKweV7",
  "key19": "7188A8kBjLNNazpmqyWvLLSWSQWxWSK2gKUreZKR8NhRHkisPbnJoGFfoqALeRTV3UhV4hkeBn4gKaekFS6tnyc",
  "key20": "TWSzrRt9KRENQGtdyXbpDW3xcGv45KywxLWrSH2FJ9sMnYypPM2UmQMmpjRX9ZGeyR9KmT1WQNMmbm4ontPq73Y",
  "key21": "3USJrKX48jGTgEEtT33T6Zhzr2fgT1mcHe7L28UWuxD9AiBLNiSVkvR8j6AhSmjBLEbwBENjgXg1sFYSe8mhJBqy",
  "key22": "4wTMMqoSAPiP4CqeEDN4WCzJ4HcULE4wm7WW3SAQkdgb6gHt2x5zkHNrod2uFPyvgj8fmifgY7GwFsE5CD5PmgDh",
  "key23": "3CeK8Y9tWZjYiebZMd3U5M4GpBBCLtDQWpAsBL643wi4gYf2VAUU5ikbmKm8eCh8FbknBobwdVZZ7syJsFwEpWcj",
  "key24": "5RS4avCqUHv1K9auKrqjLbCjUpEaLYbrv6SmbqJGkH4vHPCGWvXtTEPy3bkJHa221P9xrYVYmhMkhS23qwpm91mH",
  "key25": "QZvCobPwp3cxtaEZbbeD1R8dTGxJcMz4zLsHAvL9ECEXE69cXtpnyHyy74DoUbUdJTBbKqwLpJg5xChz5g93fm5",
  "key26": "3SbnDRWvDFe4bf2jHzjxKbYKZ4ZUm2ZNPar6T93fMFJBu8rffyF5iLW5yniGzuny9CEB3A2Drp6ypGTqHyupMAXz",
  "key27": "5JmGyPUaM4VGUMxNoXGCA3s9ovRZNvHGC3XvQs3Nv98UwyF2qXfPZERUQ8KeBNK3VUhEMQo3iZW7YEGiWWabzNJN",
  "key28": "4ka5YfceZgq3Gy6zoEE4SQQhoWVV6zzTJkWSohJtyAibWUdA4jxq5sev67hjiyKzpDMokZm6ENuPcfD33iKcAhck",
  "key29": "5MThtMY13EMhqwjBsZ5fnZpUgdswuCsoTsyPHuuwhaa5kggBj4VSGM3poqX7HRDGtvNQceB3U8sDZHeiEXTQia2Q",
  "key30": "5B5sfFMkrCDAikACHCCAdewfuksDZyow7ktQicwvNcGqcP9EeQDr5WLc1Jah1te1LRoeEemKQoLDddzuvTP7du5Y",
  "key31": "2zLayNs2yuru7gBPXm2KjAe7hzfu5tX22GVFbF2bQfxvuCY6TLyc6YMd4akYz8rx1WpeVGiG6uJXBmfiphvPRyv2",
  "key32": "4FWZ4rrQwe9StRmkuPAgVgsyuYep5qanuBiBUyRYjzvaaQjgkJuzsfa9ro9BnxjgkvF31Lb8qqQxLkrvAMRdeZ4h",
  "key33": "4LFVJ6b1k1rgzfZKYbMfUmtrsGc9357PcXUZZc5fKZmzWV9mnhXzDM3nJP8Y7uUxddm3gNeAqWcxvE5xp1h8HVCw",
  "key34": "5pGMmeW4nUDpVRByCqLQPZN9VpV3mXCrBTALarxsKGiGTtntGTdPoYZ4jof6h5XARtF2u4u9Pw6mtjM341XjbDSd",
  "key35": "4tnHRTSW7a2wXwJueZC37VVQSSYMNSUni3Nvb2yZG8mNBJFUmHzkBUDMhTxpt69JUSB3AjJPjaUEJ1jueL7neDKs",
  "key36": "48Y48faEWWuu3SH67yb8ZQoDmBKaFqzZGEkrEuxyyuBPqYWLYgPJKW6teTUQMnmANRBX5jCcrofjfffvXkXhijet",
  "key37": "5iNKDRJncwVrH23EFQNPNc3QkMip349BdGE6EH9DhKhVjAEd7uXYHsbutdJFnBcUj1PfzsmXnZNoNLtPwtvNj9mS",
  "key38": "35CBupr1sdusEvj25ckcC72LdbN7nVZ9ez8kBSogLGmaVVvikNm4EfmX8oJfegcxBrLJ3myAdBPDVXfdBkVk7wV2",
  "key39": "ymKpcgG9JjyjNXHh8aZ5zd68ShL6XGBed9NLnzqmdxVuzUL5NxDwGpTdJS2vB2q8RTziKkpLeFBtDNwPiStVfyA",
  "key40": "2SBLSfNXGMosFifFs1MdZGPDKVUr66JQ2fMMKedE2W9MDFULSz7xunMfazk5kR3obkJaE5eHd2z4rsQysiLyYkjg",
  "key41": "4vgBFUTH8ahGibRpHj3KzhmHAC1RgWy9VJQdaTiWRhsMXtxByBA76DkFRaFtHfrBiQGKnQvSvTCmFiJ9VnHZgiXE",
  "key42": "43DvTYjqB9bxzm4YAgdRYSJ7uAss6bXgg1CjbHmw8kjNoNPhGSjXY1eKaipCq92roSgnqcZjhXmLSzcicz9Zdfbw",
  "key43": "zhNHUdLmtzrokoj5fbPmd1GTp35Bkxso7v5A5A7QELYuHnZggyy9akLrBrKykK5o6p85oiadBDucLfGNScUrE4n",
  "key44": "2h5htovSSUyT8nZAFiTkTH4rQ2kdGawCp2gUoZDL5VVtoZ2AMwrKjZWb8x3Q2uJc7fK9y4B51D4WYH1D524ZnaU8",
  "key45": "2Ms8MaLYApMHGRMPasPmYRCB1cKfdLaWrdNiu5nnR8o6dF6fgUf5mgSfgeWKGeRRcVnjgGxz25mG7kWHtAnrk323",
  "key46": "5xJeq75wSu27tpCLK42G3pBKTMD9QtCrDhaDjtp3gFS3Fse9hEZhgcRNqGeurQgFbKHrDLj4c26yJjna1njUrCHi",
  "key47": "8RjypN61XbS7CnQsEweJbQQe6WaJiKsLPqhdSELyuiPL2bLaTcdUv9LbjvR4RV33pFZJo5iYq4BrMEY2ZUfKmGD",
  "key48": "3ed4fyyAgsPQVsba1TGsoH2FsGNLaKQzh4JDfwsBCij2FvaGynf7DAN5Tb42vURw37apfrhSq9KKFQZHUnDpb8ns"
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
