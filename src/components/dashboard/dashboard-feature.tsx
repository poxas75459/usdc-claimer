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
    "23ZQGzyFkK1jw9hbsoGQ7HnFwTRLsp89ft5mzCqu1Ery69VgrffjUXGkadKJiXKs8U7yFvDG2cuvvu2ATzjwphSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26qUEPDWMvqsU348PMcCzWXuQsu3uGJZuY3DohMXurPoubC3FpoPULzzgfzHtrAP7yHg3PQV7B3cE5N5jGwaiCTo",
  "key1": "62H7a6MjVYQo9DRyiFHt4NW5ZFm6vUMgzYVKf3EjLNmAoV5eKorqkgiU6DPhogJhqhmjAVAgpyDNYYhk4b6xoKTC",
  "key2": "4Cgy72p2MgkQznKFREi1SdEs3BH55cxMfbXoyJfNwFHMPXtd9PUkvk5wNsEEvvDAJXNViHdFtGFy42Tpn1F6ADp6",
  "key3": "39wq7vJwTSpDesHUVzq2hmSdY71kPm8ryomtSqUn9386xHsJaucwHaM88t4ESjzDic1ySJpLiFoVVMsZgMk7wyGr",
  "key4": "4kwrAqz8moFcaro4D18qSMAoGgDtm9R6s3y6bEfFt1n1RtPx3NjdkjHRVkpCG98fkLyz8E7HTp99GPHLBFVnCQh1",
  "key5": "4UoyCD6cc9yaNfft9so7fspap1jeyKEHe5ESkHUU9e8yPerUL1f4P5H3be7SGnRBym8xnz9ZBaWQU7GTuLUWY5sG",
  "key6": "3UQKHJtkxi5ZFppGakN7V8YR2td7ciW4DZwJ23pumGHpqzhsRheQM5mCjxNZ4cSu4HMnMG4wHax4hFJDwkZtgL2T",
  "key7": "HDuLcbTfqYN5hgPjmLjqzENXhQNJdtoLXztHywKtjDAeucnpVsWDbYoAfhG94vbL1bND8TMiVYVbgwHBa7L4zyy",
  "key8": "3DTH2qWmVLGJGh5jiUStcnzGsiKS66CSU4PDxQr4yDPDvM48thzZnmdCiJbwYbya3cWie4Gd3CXvSeWisVXC3v3C",
  "key9": "7yqPoLSs3L92Yotz11FeeQK6VUerqfYBtufQ5qd5PdRh3E4iNfN13DHjShtGRa1et75NKPeC5nk1W2o23df5XQ5",
  "key10": "4FpDC4XPxZBGpo2NJWZeL5qdB4KRCsU6hMfCZaqeMdzURjghwcpS1maaAuFu3vUjRixYo43x5Md2VgbKMt8g8Xw3",
  "key11": "8K3aVH3ijVLEQQ4ofMRERT88M9tc9Tk3FiAbMhohL9W2ZxNWC9zAjdE8FMN144gNwDThsmUybxmqnQ2xtZX7N8a",
  "key12": "2ZftyMSmSp4reYRvdHrcsRQ3X9oKeV2vcvLk2iRH9XZFVqAPn4kfwReKZJGunswm792dFGtojQKWhS7ixCeVCDCo",
  "key13": "eUAmWrEwCLVShfYevJCKMCrtwxgoUZQAtakzWS8gkkDhSPs791Z5oFyfmcVHDToLv51zpq7WKsbiNMSKgzAdvHR",
  "key14": "43uunwknH3Z1buYVzuBG7pNo1MzyfwWpZDwquKodHKJTAHAQMjQv2nLzEC1fk5wfZPcu2ELdCx3uf6GDpMxsJry1",
  "key15": "3BMibUS1MZ1kk7miGpcDRGyFhrFi7wZRWfDZiQg4aCStUwuiudYNFgfmnaukvYJZsUgypEaw9dKVnNVAugyWBmu8",
  "key16": "4aHqdtzrgaCYh3ezi99LitqnRw5FS5UWM6FQtHBux7MH4gebHmurifyWpAA3SHv6q5hHEXEYn4bkgtquhCLk1nAo",
  "key17": "3aoW9uXNGV3xdYXVinSguVrAxFutQxgW1TkKT8MVBdW7XrJHMBUVK2J3yGGmeB9WS5zecvXqm8BtEtpgGTw4drtF",
  "key18": "2aHpLER4TL8y6GqWbwMwZeyqW5H5mjpTyKRZC3gBDJKpFvejd2HXH1KTt71haVL4ysRqzW7LrRCDKvCTFPQU6RAv",
  "key19": "397ZTdve95XKTuLj6vTvikLhDb5akHQGFv1MGqNfxa1t1rcAhJnufwe42HoxJ9RJtEFDSVtd1Netn8iW9gZmyj2",
  "key20": "2ycm22zTp4yY2gi6uDW789YDGbYfJCpi6CkrpxduSMKdXhnZLPWdcY2b4CucwUVVJTxVAwvxPVxQRxHUMMxa9fyz",
  "key21": "5XZGA4pGNjqPxiX2it8sFQ8NKJMcxFF7b2cMmui9kXtwic1rQ3VKmvgR3LESM9TMaxH62Vk6PV6URC3dULQaxuQy",
  "key22": "3TR8RuxJ9syJTZLBtHdqn8U7zdQBDxNSxHE3X8fYzNDA3YD7JoFQbtJTuznjUAmvk32TwdsGtLDRfWa4ARUL7Dds",
  "key23": "3nEfjDwYQ6RS25WoEaDXYRVF2WFt2ssCrfnecJHUxTyXrn1XBHbYFgJFDxxwz1XjKemeoBM5Bfyh4ZiCfwwKnTyK",
  "key24": "4tUehbQbc18XxUvgQWChqcZ9xrtLdgMbSqthkvsJxNE5PCa118sRQuwQkD7WmhSuUGaaWBXj9rwy1DK9JMNeQfse",
  "key25": "Ein5a9WEgXz3AveZCHTeY2ufYdqanTHxwDg4EWF84DoPoSrAncZ6B3F9cfMhHzGsiBwnUdbbuUh56yx3GmoU1AC",
  "key26": "TFgvMAEATsrySB2DHaCVgyN16XKczBmAMWstTTLD7aCzgmknJUnmSQSFsj5a9Q7ktNsZFjTSqbVL955HLvyoPGB",
  "key27": "4WuWtuyU3cF2LWLhNKTNnPnvuMhAg9571fLktphjFVL7LZ6ZRnU49oUZGuA4vxr5hfGiVy1hdQ9Wgnwd91o5i46v",
  "key28": "cS7ph2LgrcpsPfUUeP6oWP16Hpq1XiEPLkbWYKy3Dq5vtfrbbjwMmtQHeHijgfwqsFqYfg2bXhkQsXrrmzcgW8S",
  "key29": "5n2i3mxxwwaJxrf7JW5gxsPDrmU5KNd5ZgH8MYapjU33CFTdgZAR7tniVqinDb9jyCtaxFkfwGgLRRrsDxSmCtbR",
  "key30": "5scCaFsGC24yxsdAtsmrqVH8jD8nMdQ3841HBvBJNGkQEXHM4WbP8Lkj3CxN9SJ1fMkVz6UmrWphTQWW2CxjqgTP",
  "key31": "5nEDp2NMxqRainuNBsELLFJvCBpKjQCdbMW1CJbkXdJByX5z3hKLxeT77SvtRtvfwgT6X11Vto8oNdynanHvryv8",
  "key32": "3sXaGz8R8wr9grbBPpgBxDniZiBpSwfNowqfhBXHSL328jpneEpRGa5Mq3juJiVBwE9o2VVCSiKL6c2i1Z2ssWm8",
  "key33": "1et8PYDbGNsxpBMS5Sc5WGghBNPHhhRWyRmRoYk1H2Hdikz699BepJigBFbJxK5ncVrCdVJedHPxcCCvGMrgvin",
  "key34": "236hhZeQzDNiK953b6zjWJwNtr9pJieJL3HBfpjdjqRVYivL3tX4DGeXfg6ScRjA6NdCzxHLc1j3xVoUyED7U7cD",
  "key35": "2SdQHdYpcFrV4UCo83sANAsNtF3fUz5SzTPCu2zLKD7mnBE4T32BnwCyhnyCZNvq4Rz6thv8TxPGFJUL8V2BexXK",
  "key36": "s4aKcM2aW1EhYkWXT8jNpZsKStgKHn7G1YfECCjsTvwh6UN9qg2v3jj2o9oZ9RYkidDpytiQWbdNTcv942QXTVj",
  "key37": "3NbZQVqmfUKExrMz1oeorNKohQ3FHPkJrnfPUXTumCSEeVDpuu2CutcAJqffo23vbGvPp33w2H2T7Fm5jNoJqfCB",
  "key38": "4pizfWhR7weBaMRAimzQ1Lmgq9Rd5ytMHNcS5aaGBieX9w9RaZvSQgtdJBfSox3uS7QdKanczzF9iVfUBivZGoFR",
  "key39": "4EbLV6PV7t9vzNm8b6b75MZFV6ukJRnJRHQpw6fAcqLh6iMDXwUbTAvNGyAqoywkgM9fVsxbpR38499ccbgsYHcT",
  "key40": "3JrinLmgWsSfNyQyqwuZn6gXMXgJzLWEeBGnw7zzy3ChjNhHwERsnTTKhWAwC6ApGijDvUJ1SW8ShbSF7tdcT3AR",
  "key41": "3rpRfTJi1s7h4VkbPTVrdCmtuJaMvCYA4LcnhvL1gmg7sjdCZGHuKkUazTGQVBzRJnKrTZrquyig1DX3g7yJNsWB",
  "key42": "2paUC9nbuFGJrifstnGNuifaz9xMfptFMe12e9pHaEx3VBpQLX67bXKtnmShHbjmYtVZzqGXZNFQNzM3tPsmtwJL",
  "key43": "23rLbfZYNDhsWAe4EyEFb986HEEFTX4uMwgvsB2A3GZbB6M9EaGWmLjdjbZ9Uepj1B9eNuMgxFSqQugvDsErNTKL",
  "key44": "2CdmB7wnsC7CueVvjJi9HKpeCCG3DVcq3EoifrBZLUicwERkhAq5LXCXXUMXtGZfSEd1FpMH6CLFxAae54wu7TmQ",
  "key45": "348P3X9oZEnepFRU2uiEwoGn8gbXPou4KAmXqgyx1jZqhpWXEdPcHPKaPDbabMxHNnKKNjNqFTebZoWc9C5REMJZ",
  "key46": "5WHrth8DhgJWBY685QRpxfiNHvAsYhgkv2pLKBM2WMvJ4SLNc5zMxoAMTTf5xNCine3W7y8pHkfYbVF8zjotkZfn",
  "key47": "2FHEK4ctXbQi49ZjD5uYcMMbyiciDF7MArAVraRNuiX1EoiLtSfzznzA951x515YDtW47RwAHJjkCTPybbBrieNB"
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
