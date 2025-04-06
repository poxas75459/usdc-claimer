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
    "xnbhAcji1pJjyLBDpLGY42mSx3nA5tmY1QANi1bZbWWTphrFqa1y8UuKrmE3JPeswG5dT6FUDwC6a4CjMTNTCz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XWLmWDtokw4rKqAkxZ17HaSaLr3awWegNKc3UPnQi18ar5P4pv2dqs8Jwwiz1oR2ggbpMeZCn32tpKtBRXsPzNk",
  "key1": "M1S9bj5s8CtnMeYbrnrX2DvCQuh4nKpAoGurWfdCvRderz36rieGtcV9Xzuaq9ryrARwhASKUE3JYc1N5DgBKTL",
  "key2": "3HBMBYr37tqrzW9hHXuEeDKgWF1fMeZNx36zie3kVDLjaRsjKNrhy5dEUeuyPQff3ttwZ1ViTfLKpNCMjuNCFzLc",
  "key3": "3RQyNs1Jz55Qrq4UAGTp8XAskVKTpVYCzmUkaEeGMySW57DFrA4kPJCGNZQRZnLvf1RHePd2xKjM5Jobd61CohtJ",
  "key4": "NFyub12jJ1hzUgq534GaD2jo6RbWr3b4Jd81srcca771ne7buuAANPJU9D5nzkVtCEGjn2KXSMfWvE3uCnhD5A1",
  "key5": "5pRbP9qrVXjCeo9huJtBdRe1dAfVvb2T7paJUyy9ZrqrcGBovKdWNM8QipyTFXfpEK2T7316QnSu7kpRgVimtrvd",
  "key6": "2FW5pJjnGK8j3nDhNA2PAUzbHnrfFStVnfJ2Yd3SUQ19hzqCMnLpw2DzKNUXCnTLhZQXrpxpi2UEucMquyr2CGAe",
  "key7": "32S8bgVPR7wM4pQBE7GEV6AjNuHY1bYxfHxGnvcxGUrwnkPi4g5sG2ACZgp1kh1gNvX7xFAbYn6nCVVTQW1nHztw",
  "key8": "2CmDVQj3N5vBKvv7iwKuC9byqTgvAfZg5RHC76J8Kuxko5mf3Q5zSJFEiK4iVUWH6JWyMiPkH8o6WVYEEVM47rcv",
  "key9": "5hLLWJmE5NYFVktmE5U4S16GfEZ72eEQXZ9PLKWoKiBwDBnuD6HHKbXbt8yWNYtssyiP48V3hTHysh8zd2EEKg4k",
  "key10": "AjyeHuSAfjTjhvR9V15qJnR5BjMs7oUb88vCvHtcBhqyMMXYxaPXbCBED29DKSLpPz68qaNR3eUnuYj8WTxVoDW",
  "key11": "5ThbYBh3EmsuoBcz6da7ukVfnt3E6o5PxYhtDoegfqVBJ2JqcvW8r5XSLftnNnY4AbRhSgKzM1pGkcAGi6WphRud",
  "key12": "3RwQ2M3CW5VoiCbuW3tEJDQPfSnCbZ8dYhdLVeA1vQVQYALwLV4LD5eStamS5ChvcUhknnZJnJByCVJCQfUxH81u",
  "key13": "5kNLTCtobosEy1W5pXGLAWdNnoidPqeZ5qJUB9YM3eMLtRKDtZErwhqhNSFhxbEhnri33rDuaFT7tu4eoBdmnzvs",
  "key14": "59zMSxsV3JqSDeA7GGVeXFExLwfjFCyk4M4rkzry22VJXFYzaordxkfdvA1Ph6FCEb47tdgiJLAmjKmnn9JWBRTb",
  "key15": "3xeQ4Uh1Y1akxPAJRXVbzaxVBgv6cT6Xp19oQwEBmK769zSW6YJ6q29yg97WoFf6XQ7xRdLxxwNp6m4FVx94bFaz",
  "key16": "3qkokAehDs7ejwRTNv3F8xBCbMdzBwhpP54Uy5QwmkEjiJhgksQbyybcdYxLynVJHR1aok7DofMF8gUuC8bdjap3",
  "key17": "UDyy2j7o4YEG3ofem9W4VLED4Zs8XEpJf2dm8NgezbBT9eeG78iKP8FzD8cATbtRrCpACfrnNxr6Ggcxv899FBe",
  "key18": "me8AHZRCHWWpMEsXLUZ1bGrF9tSgfGvWyfzqaCdE6roYuRijpSnpESCN8U5YsxZ35fnrEXuoRfK6sJNQQ7jXDP3",
  "key19": "3EZeUW6SN9zFnZGLKYon3JRHzcjopR48HFpVBwirCJMs885WhisbyECJ5PMbnbUv3AfGj5eRQYBfFNfAp2SLPJZd",
  "key20": "LYYJqw37SPkHbHg71ACRsabJMnYtbh1wnsrj5utASGFM3dCJnMMCyyVh14N6UZ1u2t74VPpQ7khSYT5SgQ2iaoC",
  "key21": "3bidApw2ba6RjTBPAtsS5c3vXujm3u8S4Aq9ucvmAAWoqA8zmEzbNBANbxox11u2pnMzfwCebG2XbGQDhPQpMMUw",
  "key22": "2otT4NdVDo4K6Hu2F4bDCieWYGz4PVccHYa7uyJHjWCATppMeUTxCGeWJkoxinyAbFmimZbbCNZNqyDSLdfz547M",
  "key23": "62SvMDzsLRJti4UE289zL12UGUStFLNyRkEnmVXEJc99K4PNLdDPxx3Fn7eD37gC2DVpVt6RnGACGfpScA3CEMF",
  "key24": "3okww3zXzDJS2RjhNThbGgrMexadyrukxJucvQq87Q9e7THoijSvCuVVVG3sWgEVbQb44xidaMVAPymJnJRpn7Bd",
  "key25": "2uC8d6EwTWSd9jbCK3phHrQs7ZEGcGkqBtLAdhXH38kE7TPXniedXSBnQxVBA5gTiAVWzDqd8fcG3BtGyuM2VFmd",
  "key26": "43VfSEP7mfwQFouMBwfJ7ecJV2fHhumMvV3LqK7jaYeUTVMUvGFewSLft1nFQMdtu7KKTmx1u6Q4DAzPySNMRFrA",
  "key27": "4mG2SNhGbGpfBAjXJ6LgRmEE1yQr6xRn98bRknfKHheyVk6mmR3Ut4SMSYk5xnbn992M9Y84ieqipH3mymz6wJvB",
  "key28": "48YzSmzxmsCKh44AqvMHEVpozams5A89po4XUpDdTd3nf3djmFz86JKFZXGYnvstp6UXzkVswjvES5LkcWpNhwfj",
  "key29": "j3Qtz7cAR2LQd2G3a3VdQYzWkqztDvsCHsRsuUySTeWp5ix3qvx86dWmKJ2oPNZom2WYTDSFmZZBZ4Q4JwRENGG",
  "key30": "2zk6KH8xUuZCeoNBztQfhggkqrckJouU2DYKAkRAUyDt9F54TBHE8UrF1acAyTsjvNAmsuUAHDRkZvpo4L6K9bzw",
  "key31": "3mq3VVQvQt3B8WALzzuMsfipZpBbLUbRmsVgDTD2ENfBxMhdkur4zc8kvHri5YD8pAMCCT1KN3iHBMdCW8b5hW2G",
  "key32": "3h6XUyWoB64hXAXCYRPzUakFareVKbjNzcmABpzFpMhRxizMQjRBzbSEBzqSNRiYg9rufqPDbSxZhnWU6cqShDCQ",
  "key33": "3iQsoq5UgxoSjT76NBvusUehYkDCGiDEFgMd2tUtdQe2qv8bqybmF66kjyytANJjk8BmTgXNMTf9u8gkdvHratw4",
  "key34": "2VuubAHHneAu8CPxYCWs7RTH81AJNreNGbPzGGfwbyn1c1C8ydZNTooJQr9NE3qqSg4gZRkArzj5Rj8TSA8cKZZ7",
  "key35": "ctRWY98eJPbRWrzYzbwGDgTpwfhKGpDrrmmNm4cnrDqK8FdDk4uaiw4bmXQThy6oayiRNJDAiKd8uT8DsnmsbU3",
  "key36": "vy44BJugACXtWikAU3BctJb3c471xu8nxmPBmw6YfcETjsm7nmgB1KMgk5eE1D6oHimfcGtMYvEo2ADmzXiGuqA",
  "key37": "3MubrMyqoW5HADMNy8AAmz34n6qu1A9ivDSWHWwe8aLS3MUJqaZZd78LnMDdZ2CYhRxMnnNxPRoHUub5vvt4GDY3",
  "key38": "2mEy4aDhRMpJKcU24HcjAyYNJnTiJ5bjVpHLTa9ibdFRU52scYpPbmKDbrFhK1yXNmHnENYvpWzd2TbdcnbBKcFR",
  "key39": "3wiCZszjzbDA7ThyeSgyDpFwjjwf8eGnzva8quZUjfFoxtkw1vqTUZxxxGatmpu59oXFtP8EqbnfsbnYUft64Ka8",
  "key40": "6qdH7LjcWkNSd9coaf1r6gCrN1SvXBcgGCcSeUckMiK2LqUgD39yZqPFhg2bXJoe3nAMEvWLHzdEvADEnaahvB4",
  "key41": "2tJA1iTYgUQKvirNHawwj9d6HjUTro4C3WXZ3GmbEXuf3o4qYBvw5czeHCqwz6PZts61VMPgztt5VKtMBPRjTcWp",
  "key42": "327cgXJraU6G5Zhr5N1qC7fJSojrAVSLfLDWjFZq9g8xCeooEKcCix8Ec48ZTokQqsH8PRzhRY1cnhJfBgM8Yq9M",
  "key43": "4wPDTipZ1Qt9m7xAF2Jbimy5oW3siVWzbzLeVc5tZsSWvNjCS5cYp2kMDMm9CJELUGSwgpNZoWLJ7QD6GXKnYVFT",
  "key44": "cR89eZy2CQZHjVe5xXxnBowdN5AyXhtbvdmZf9nPd3mB3yyBNkkcZciff6uRYH2jp2qLdd9C5GEtj3g7m68cn5K",
  "key45": "XnGMxrwYbnBh2rd5Nk8tPWTQdxzcaBVUJPxyLYJACncjpevVnxmoYinsgzGFSVjX2dKveoShXPGCVxf59vnU87o",
  "key46": "35t4uPnJs5pPuDsttZaJzwL6uYweCDqktuYSYdDxFr1kfRrDPe6U58MfGrCmy7HU73BjPfZJvq5WgstpUeWGc2xN"
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
