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
    "35brUYM4hLy6drMPvaWRz1mysA6kdsJefTFXdWxcMkT38Jd2xyxUpSeYvcTRYH85SgRxRdrrRCPbWhRSfPDeyNXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "294uVuykddJvw1zKXhdfCZitjq7HQTiy2d5cND9VMfrgQFkm5zUNeD1at68HyZGpZM3bSbras9Leegk9NAfPneXD",
  "key1": "5mN2ZNF9SGwDmA6W6irJusE2759F9Rn1NTiGn4dzbZNTMZY8sK2LiJEam1DuX1Hb9B73THrNKKz5WqWSkXCraWq3",
  "key2": "5AfxEEjyy4jp4mn8kEuyNbkGzof7t55VbG45L6osALiE9XhbjnPy1dmsyiGnWtBXgBW5LQr9iiChkBsB9bRtHPEB",
  "key3": "5QWorLFy1Lnc2VviQq5an6ufH5BgqEcfNEnVp6BfW4QoydaCmNvFwnBAugDpXzgmorN7s9SDm6BhnrQdYyw7FEiX",
  "key4": "5c1xtHJc7A4jBT8ZQqGJUXSWHDoXe1AWCnjLMa5EtqAX3N8jprUzsHWFYYSg8Y3iGtgVSJtAE86RDZPf3L1hqYGd",
  "key5": "3Sr8kqVZYFiYWw2uzoHLVTJu6Etdc8YTYxVfh6i6n3ctd1uCGTfbp6xAVVHWgF5q219Ru3R1LsjFWgCCYfwEnNCh",
  "key6": "dZSkLuXSYLEPZn4SnHAvbzfWJKyARzNphAxjkEKKMb6rXoDfHHz8AErZCcu1vTDEh8c5tiiNvdfsC6mWS27PGzh",
  "key7": "52fL1FA8B9cnpzCdGadZECL6p4vQxQ54naVD4DcYjE2inSxkGDt6RkPThdNwgiKESbqCTZTAWJk5mjquMgCDtwFa",
  "key8": "3EvJUqPQGRQ3GHs4hadHhob4172bqv3gPnFmzSqTjRkAbpPUTUbnUv5qviiyXTth63jJqscdE2oiG7YicR2UhYs1",
  "key9": "5HTPRK4ypQLcC9WckUVxp5efuHxGfy6Uz9sNSr21qAW7dQpUsBNu9wdqo8GoNdhRPsdD5XrjVFUMCEgJBKfsMrky",
  "key10": "mF21ryabd8SRjqywyVz5daWetdTt6oqsNv5pRgNevajeCF8en3yDvJKeZGAesFgqWdCyxnPygKJ6GdbQoWRBWQs",
  "key11": "5ZdmoGZEGjUA8L5XQvxYYQwXSRRtSJd8B2qZsJXCY6pP6NWaWWbjrZ8MLifjgH1yrcmK2aEDSFFHHGAJ2vrdeBJ7",
  "key12": "2RdJDDXSiuHLgHJKkxfE678H61dKk3KBRcvqsJqknfY8YC4mPMUmGHb2QHU4ksdzutowSKtqFhVtMrVEgiD2yCD4",
  "key13": "613ifW5W1MUvxsQFzQA4Zj785Jgi3bXccTSHQemqSGGLkQse9pvAa2d8xH4BDZwFiAA3GGE6c4BssRxYtNf833ET",
  "key14": "3YJAkDa9XMhP5urJeLmeqqxHbtBs779qaZgcTpFgb5Nfi4Ss7T4smEEXcqNrdj7odbPX8osignYrtgPU2GMuEUNQ",
  "key15": "4bJKXSgEp6YKH93g7mncqwkHkc2ZoxVBBdbrE74W5KAgxVNZugWkZmhKymJ24kFcF9KCQWBrEFqYuibEMujHgs97",
  "key16": "57FycPj73F3tEQwgASgE87FQj9g5sdyrfa9nchFBzoP5jc4UpscN34Rddm3pkrubuZNEyXahEQtAPDQtou1MPG8U",
  "key17": "2pg18HFueV1tkmGBwneFLLoo2jrx3XarSke3wwDjGU2NURQjR4x7pCo2ksHEBt8ohtz1J9mvYqao6eRvuwojDoyL",
  "key18": "7LGkp1qxr2TgGmVZWvVj7uiJSYEPgSczX9AfDccGiauaohB6aGZrsVwo63ouTm5gSq4uDAJ5C8DfNFXTPtNPspW",
  "key19": "5oSC3QbWhwPBNbmQaVnRu1V2ngXb8LHiFiFLYtUVUKT4TqqXkRJ39maug38YVYVrZEDAiUTSvmEUJWMum2iLw4Ai",
  "key20": "4pneZaGbquHNGgnxPtrrg71CVX3HMym2omJ4v9goMV82JSpvipiWQtbFaygUqjpjnV16h9e4QCyEdvjo2qeXyz67",
  "key21": "5dQFeNGAXiidDNjuuu35ETSTskLPHWUgZcHtrDqhztKKZGN1jYY2a8BukVK5MCdqTqQ5asqDPrw1A8rAbuJDYY7i",
  "key22": "4Kn4eMh5qDRTVhtRArcJ4omJA1nvM6QB89VifEwYxkMv7K8n5SUw4mSSPUXQLZEVBu75q7mQSThzDYq5tkuki9q7",
  "key23": "72vxZHsCC2NJrnhu2xoZDcguUiWn3TE9Fxt8NsoGKyZisQHUqBEd3UJnvS41DLTHHRdZ3Y5LyEWjzC2J2N8p9pH",
  "key24": "4Dq1GUDLGZriH2mZbnUd8FUZJna6PU3ymfgDKJH3BNkLV1ehxR4YKMj2fff1ZTQtZrTyESFXpkoK51R5EbAaJrdu",
  "key25": "3acakmxtWZS5mdUTWNdmQCid5XN5TzEno14ckfLE4FWPkDgbodcXJQHTSDhVHiPpzYocYrwRNjW6R5Fyk5zjzToG",
  "key26": "2i9eE1mf1C5NKJ7qBzaAvhPDE989E5CQoEd7sEj3JBjhUkRj9wwmZVwRumMnKiXQzmfXMjjwackxUbBSCMvrRGWV",
  "key27": "8GFvfriNZUbimirdzfZAvmeHG8D5f14KcA5xf8WzR34A93TAhFHptA5TDS6UF5PBX8XAnURLn3mDDZ8VBMNayWw",
  "key28": "3ei3NQMD5HWL6oVsWtUYU1R9JD11DmekFyvnP1NSCXm8JTzDwkxxSV2F783usxb8CAW2prGkEQyE3WZeo7fXW8uD",
  "key29": "3h18iyjEqPCmHms7Sr6obdKvPKMmNz7rMotp41bRm34WuWHAtakXZCbvwLNoQ4QNKiTYihtXQRfNY8esPDtQP6cp",
  "key30": "XfLwpaNbtAJ6S8dFXipVmccuSqUDgUKaDaKsQmzVcw3yFyovLf4nqQwEgL1UQKfhfTfPxuVhgXZH4eUBeNAKw79",
  "key31": "2Eyr4LeDnYpUW78sMButAb33ti4X7bHKmHu8UUXsSKvHJ8eWGUTruokWVKkp18t5bujHYCoUpdCBEY6nqZyMUXL2",
  "key32": "2bE66gRYBonrZerg7zCMZnPkjAXzCptRGEit7HGfPdGM3MgSHczGCcNnjywGn1n1nu2UJ5LtGsdRmASRRf7todhc",
  "key33": "4wCaEeNBfYe7Ru9odyqoMQ8JaHzEw8ST1FFFcCqE6VqPoFaK1UCJxdnKUvs4AzPCbJSCRWQCM5oDFDaK8tYyaCqP",
  "key34": "2raLq5bGiM1xG2EZ4tw7QCApZdxiadao7zXdYsNrGSFfiigyTbdSRikePWWkVmYqtESHdDgSd3gQsYo4UFqbo6s8",
  "key35": "uNMHfd19frr4cNLaq1PRAmYL3tSjzY8L29S6e4okZbLouSQV9iC3NL3v8yQGJg3mMp2keCfoSryhR1hGyHRPsPf",
  "key36": "2WWtVvYmWdZ8zS5BmKEmT4S6XUVqeWCRdKBLZb9jpU3rtLVVvtiL27KMJb3M2wHXPLCeqhPa34PXYFHfyRoCLJAY",
  "key37": "2GWFTiefTQTf6zTe7PVoKgg2hPHB2ZAnSabZ8SaGC5rzYQaH3nouEYgD52MzWpL6TuS5FtHpeUq6KDEszGRW9XTX",
  "key38": "vdVDxQnFH4m1u8z95owfLCLJ1qjApXrPQfV6Aevs2DjB8s9r91N8UnFk3EkWtG18732bbA8MBsuPakZkbUFCXw4",
  "key39": "2hQD3YCepLAukHGCgXqeHRBUnKxywUEp7fw5i1DE84tg5NTXSnwS3yaxRCP77Gc3sdVqCnpZRvnwELdbNzZAvb9G",
  "key40": "5b5ip4v99w9ECXBgGv8N6cuKfak9fjuHLUUwnjUL7cPShVjGZpbkMjs7xFVNiejYUXVgUjx916tBqFFhhWyRb3rD",
  "key41": "2KrAboVQ16jhxJeXSBYTGV3vJEYMwnvsxixD43gzepou4qv1g9j96S1YH5Msk33Pznf3p6LieqDhhP7xYCmUNKN4",
  "key42": "EsPEFFbHC5xTq67ajzzaLxEsDgQbpSQBxdHb71te5sKJSKmpVAimPLC3hBmLsKAR1A367o4tLvSdtFoixz6SXo2",
  "key43": "5rJihNJE5fj8xqEocEUXBeLVyFxgudKDtLcM9jFkCXNpSekWdRnvoEzJjB1xBBc5dwHy59o9Tof1ieVn8jNKsEWm",
  "key44": "2CqyFtsL5SNGtsUZVbRn7oJunxGtSsvXK77w9g6b54yyhD18dwNiqsTjqrAYeY5bdSmMwZYHKy2YMKHSsi8vzWEn",
  "key45": "5frwqFNYHHmmU2GAndv8ph5qMj3kkTCBbB7GKSCgUc3gtzHEFPL1zJRTL8AZnVsLsFfMU2oXVhTQixosVmHpd5b7",
  "key46": "4VkAijNQtpYEVyw3QHLuf3tHezWXaYe25r7G6gZMWtNNQVkvr1orgyR6UejD4ThM67JdsY5itGfupNvT5qdq2ooD",
  "key47": "2kvwsBcQhxLUBCDVxgASJvBGGt5FqGeGDUiNjBTNFtMfxpc4ybkmLVwfTAfsDnouChzTwaeU588oaJkEekmvUcG5",
  "key48": "4Pew1Y7MwK7nHMgrx7BQzV7BU2SsjxAvt3Atmed2N4fD1DhiSZrnvNdET7iRRUn9nbpFNFQZPTmyaz5SS9zWiyaw",
  "key49": "21TUDYkC3AJQ4FRo2XoPdW25PVb8ws7SJTP5g4gkkJ8XQjPTFMCME2DuT6PW2nD4WgNraDoGEsDGHgP91vXKbNZ2"
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
