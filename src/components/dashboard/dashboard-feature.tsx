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
    "3LKvaU2zEEkq5vJ6ZS9UN4UuaQtX3ivS9qFUTnWLzv9rAxWYPkTxkwEZVhzmy9QjwtX7iRFXZTqVRcu4dApr7LN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jULcmpmSDTZpGRGuBWGjPsryZv8w1sbrHLL5WZngVJmAL9NUzGV1HhM4yTST3MWVFJh4XeMZf9jyZ7ugYnezgUY",
  "key1": "47vENG5ZrZheh193F4cb9xZLDG2SrNGRMmgHNfsg1hsjEtmgaaye5JHkg9kJTXkbtnh2oNRozwoYcKSvJpKCpAkZ",
  "key2": "2ZFFHFWPMTF74qTyXGwK9RxUtujLWChDtufRcEtjjA9aenrizDVUvTdJmwaFqYcjQs2X2VcsVPd2diW1ouNXR1FQ",
  "key3": "432BwNyaNHjJY1SLy2aw1iKqkvprCyEtRXKR8TQAHNjWXnGR7H176LtNNwJGbSmoPEtoyd2UwF8W6ReqBgE8UqSX",
  "key4": "3oxhDiauqLiowu4GxpfUQeNZpCSURAFGHeVP1TB55K4g5qNxyqxZG8fXvDBw84JHY71cHG67XFuXbmTzhmZF5Rsg",
  "key5": "pX7uTbRPJbbScAMSYfkuUjDZp4Ze5UKKvXX1X7Kit4in52NYRQJ8f9wmnWWKuRC6bFfb1nJWoc9kK6SptvpWGdm",
  "key6": "57umADbp7pJabj1uuo1proVzHoWLAUY5SdZ9DsMuHNVFha7iKcysfNzp3auftjkpxm5oA93gSWV8XnU5FuZV8EAs",
  "key7": "5nhHyYpKnjEwuJMkrCaUiQ92ZqcgCMDG8kSHhJ3W2jGWbXfzGzs9hw33PApoWRhKAYBZB14MngKdoZ3ijVCfXrV3",
  "key8": "3SowdU9mW125q5wUGzFuCu8gJa1vq6T1Avhq9sDdvqYvSi3sYZ2Co83DjhcLDYwL7Ymgdiqkg9B35YeaHrp54NT2",
  "key9": "2cFTVCbrGq4VgVcS5zShCwiUvvs69tS5c6Yn8y4B353q5p92TXRhwB6PWQXyGXMjrc466HEaGfgiGXboYA8qyR1c",
  "key10": "28QBayT5ARc7eyKDSsBc1SmyK7aCoXX6NeQS3hUskuy8Yneb4QcYtRvScbaUj4T1VH95hmx1v3gJjZTaruRpzz2J",
  "key11": "25MQwofRxyFf8A34AvA3uKjiGzPVRw1ZH5FDYT3oEkJ31UsnVc5S3MF5qT7w2TmA5eTGA4s4wGm2bJLyxe2jq8x9",
  "key12": "3RywfmnCGWH3jgorZtfwcpYZ54yvsEMRcKfarnRhiEa6D2EwawcV6MJfRrGX43dXZzeyhK4KT38t74wE85RVWXFC",
  "key13": "32bp5qKb7VfUECDtPPFVx8PoxrAN7FdPGxGwiX1B4vdaAmAk87Swg6rKQzvXGzhbutdVBuzysSnJJgiRNyiUpQa9",
  "key14": "2SeqxXS8KNkN5pcB6ntNbB4bpYsKQH5McC3Y9XAhCTyRWb5VFf9uSX5ouMtc1pDLEUdGhLoCjgkyK1RjK2eA2V6T",
  "key15": "TXRxt3LqSozu5nsaPxJEZ7HDzRuTYu699VWRXNk1NaSUN6sBc4j8uyGVKSwhUgEHCWc42x5DgZU7QiVnj3Zn95E",
  "key16": "2uchL9MduuXdZviKQ3kCiFtoDET3pL8AqaJn1p1oXLMnpYovg4pbAQsHNvoD2GUHAFRKPtzD2JLtuCZz8xbxMbio",
  "key17": "2vq4yRZNqUtHC8Hg3dv5VzUJA7nM9e6Rw2XoRpPwaesDd4YnJCAbdwFkSr1w6YNEGpzkWHmzoqqqmcEhAUzjJZJm",
  "key18": "4hEaP8zf9bvp7odcfqVuDgednkp7wgdUcj34jPrx1QpgJKzqdmMkwyCcKV1sx5hkGruBDgWy1kTKFJawRmC6PpvZ",
  "key19": "3akiT8kERbAUkahGHWF9p86Ej41Aa617rbhchUtz72LdwHvGaWu9oGk5EwCvPBpdpGnk3i64waobwLZHxRCf9NBU",
  "key20": "393pYF6DfM4V9bnfmbhD61gj7tffrisN5tgBPRAHCf4CKfMm7Z7yYLNWKzV3Amy6wD1ARSCZ2X7wEHbmY4vj6qPf",
  "key21": "ikfoQaXmNPQktpX7rAkW2Pn79wvzc6n8nanb6XPug9o7FtpPu9Rq67rJnYJ2skPb9ZGq4cxFqoANEK2YvwAJuKq",
  "key22": "2Zdfzduafe7URaBWTGe91pgWXp7XAXmuYyeaecKGbpPFkQayoeK8eDKchEpmchi97r3PQ6x5GkuYQxRdDprstCTg",
  "key23": "3AiqhYp3aR1tFMWjjXPsk4ShZgPznhZfYKsGjDooTXxjiYLimU5zXEBwLvnoN2dtC2gyrURie4S7qEZWWoqmsWWC",
  "key24": "5KGA5Bpwy4AssF15yYyRmfQW2m9XyaQwjE9qQRNWxFMqHHauDtqtn1aWijdvWcXNeEUWdmdmK66CQgqyXxPcHYSF",
  "key25": "65NuJS2Rp9RjiTX17rGiJpU5mLUfvpbNYz8NPipfbZ6cWKzMAFmg6ZAFZoVXSCeVCpZYvgLxUeeu9SmfN1AfgMWi",
  "key26": "zDfetWW3XYBPHHutezyYsjYSGVmQsU3zuaYz2Nf5LfrBorgKaosJ4khMqK3oEetjQbMerw4L8tS5hDZb7HD7iQH",
  "key27": "3R7CXyDgFoespDkwu3MCpd28cQSCZVFu78QPPjeFh3dXFpMxGN9q2nfHff7nRH3XtGFRaridr3bYjosvhnGb79k2",
  "key28": "5hWfUUuQxyDsNcM9ZxzHmxXEBGZKSGBuzs6fpyKvnsE8qfPLDz8bcNHcVi1FReYsQGLg55KU7kLb43hfoserm6sD",
  "key29": "55rFTs1hvh5SgueeGot76eZikKqhYp2HpVy4UptjNxR2oCjXQAhZmHo8P9AfhKjzwxgrnJWhYVfkNVDYpzec4LqH",
  "key30": "2fTPnMhE9xaLCJjMSsLT18XM28gaA4rBwp2GGGbR1F5JU2ammGc5bj9SuqLwYC7utppryKuDFkeGdpJbrJK1tkA4",
  "key31": "3rZFqRZUDTpkuJUK5jjhsd7HLhtKxE57zeZCLZ1tD2ak33K57RyYYj7pFFTyXgjePX7115crzDm2fTuzssKbgHpi",
  "key32": "3Y5XRLhFS2CeSsaGfiySSECeu1bwTBtG58GJZruA4VLy16ktkEPyvx7yn3TdxJKe8cMxsbjmyziXA9KbBWco5zym",
  "key33": "9bUcffgVSQRc2AXbEUudrrFMcgEeCrTbHjivtcuahsXpQp6t3DMB94Qx2R8QMsrh8ANUcbqwc1TVk7shEkTiFUc",
  "key34": "3iY5U8ofAguUkFgHUXHdWpmCVJtBt96rudRNniVB7bWZGpxVhDcJ51aCmxT5ZKmhirbwcxB2mXA9iHkYs9kdkhpq",
  "key35": "b4E8UHJ4EeUsn3cMw7P2fkx3kirrFXPmfcGpV1YhNPftaxi3AuyLP5LVq4fe5M5jQKGWZsF5hqT6KCXANAAhyij",
  "key36": "64Qo4Lcw9iGEvW9q5rsmADLv2N6wRjA3mmVvhfbjVqRjFPnGvqmA1aGbDxZfBVdfqbdbGUsyWxvkZs32uwk1GVhU",
  "key37": "4idWGnSP9w4Bo9f2MfNecm3qq8GhtLjDM4zL9dLKuyMd4Sedg2of6J1vNyH2skn9r6vV5RSk4KFN85jj3WgXyuAP",
  "key38": "Pbo3pcFubxeXEN2JYRSvAqUoZQeirBVfvEkuP9aPXxYehZPNNz8PpUe4gJoz9HAEvwfHQmPATtv6Y1SeDForh16",
  "key39": "QZeZhB8npNHywaY7EbTBhRh5GwtYLNaGh1dnEZKcGDAdxdeMuZUEYc4ZfLuKVkS55NpiZAubBWMv2YWRdq7GFr1",
  "key40": "2YvAcCZKMdTKPqWqu3yegYQV14BezRCHqizwdWwgeKyvsXFysYhpCdsJw3dm2Ef3tm1Am53c3su4FLr5rVadnwY4",
  "key41": "3gAJ9QDmZajWPM5GPYx92vMsH9fFVCzaQYvmYsK2McAk1uR9aXRi7rtvXc4Ct3W67kXeTrUgaYccGXHVqCS93mL8",
  "key42": "4N2jiK757bJuHfFAZtAydD2jsYYNjHYyrsBNaw3UwW3LRvJMWJwsinvhs2TFResU1qRUhemtTQQZ4GEyDcVKmU9T"
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
