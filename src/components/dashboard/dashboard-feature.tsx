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
    "3w2v2bavQm7Mn7rSBKckJVTURsfTS8L5X15XuzU4Pt4yuM4gWM8aCa5RFiBF1z8UXwJTEgr3N8HcnGeeNYCagzzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ybYDrwwUc8jD97gdLbYcUimDBe4c35mszL9LSCdVdk88wvaqQitS8dmf5prmaoCFD1k8XXQAAG37SPqMSxhM4Fu",
  "key1": "FFNZC6euZrytUcME39ALjHoBYrSqbvoGMDg6UNmCBBnLjUkWBo21rdtPdoNYqaiFNkRDxATL9LwRxcoSa3Vosxz",
  "key2": "2dSF7iW3aybVknLuFCQFJ1pLz97vrz5C2fapWvsRWtedKz2TBxgaV3BSWGNzfr5XHFGneq791kiMmmqH92xcgyGp",
  "key3": "SQ5gMnUTsKaQGA6L7mvTBcK4g7kkoKh4dE77Hek7vWVPqkW182bwA5jgKsviNPubpXiKGfYZwnSZncLUSxyEM3r",
  "key4": "2NBprmmNHK7enWFkYmCBNVFFZajcmdiLUdSFP4BRoNZswh8pZfU3voMfYvuJLyhtBE5g2y5WEXMX565Fwg85kxZb",
  "key5": "3RXR4XctiBsDLkMDSvKyCgMaz2JS1ZyJX6yUpoG1TYhCjEo3vqcn3wY1HNEyoZEQvFSRAF1ViAHTUWNLKxTgFnEM",
  "key6": "3fJwc3iVLDc6c3sCtgybBbWrrSzJLc1MyoqVRD1WZ3QipkeyvtBs9U7ceF2m22qjws8EQjmYVtkQj1z6aqyRhq5c",
  "key7": "3qNrLU9dA1eFJekiN9K1KLSNuLuGacjKwrn8c3jp7chJCtpaokdPvUzkdExjayaQQio6csUF2Bj1jiewqFs5nhi9",
  "key8": "4EDbg7AiZrJHfZDBnnkE5KDWpmn3bpvCU3ig91jGZMVJg2mUeJPeCNHS7XyTwX9iDDMxkBRt21Ww8DtwzX7joA3o",
  "key9": "wGVb15sYYMYY2rGUrPDxzJT4tGnA1pJVShm3KMzJKSZCTJWc7SPL9WqTvER5J2XbFENMcjtdwT3DWq6uvuLr9Aa",
  "key10": "3UGPjniX95quoikLCzAEwAN4Y5LgXB2jip8BabkenJ4XkSQXbHFS2E1cDmLBPSekZ5rwqaSLWrRjVoPjJMpZJF8D",
  "key11": "56rGcSfviTWE5JTNiaEPYQm9TwevMJZupAfHTsbV2gr9tkBtGSAxv3uFTtiHzqyw1AHLs2Dhs7sPrR2wfFjWNrnH",
  "key12": "6azwoWZxRRet16Sx6s6nED7r39CsRai1YzfsKWZQA2hAG4pFtxaVGtE4H5Me2Ha3oo4g3Gs9YqwvC2FeydJEitD",
  "key13": "2S8naRdVPJJ2GzjexqgLgY7BC1bYPxHXgTma9s8DsXqmu26zyb8uVEGG12rLAb7u9cMCng44SvfHwasQ9adDfaXR",
  "key14": "2fCvKsdHVcmR6hPFWx7RNbbrn7ez1sZyM3BSsjFxPU9teodfFrYiDJPeZGdtYb7UYQx6vubweMh43vZkafWT1JyV",
  "key15": "ziNwezQzQ6uDmSJXzourDLqibkfhT4bxGmr333JV6Ap2Xc81UiG5pPkd3Z4JxVCTgr8PQo3yatdRGpDeojn8qvV",
  "key16": "TFH34FbkbT7Hce1b2aVSWLSiRAUikKpAqzKr1yPmHkQhFs2FrUEJhwY2ijWHxRLmPRmzduCV18Xg5gGrSVqESzf",
  "key17": "K14zgDy2rMYqEry5RkF2np4Y1QMyp5fwzCQQztVXSocwTWjUjX7rw7ZkATTBRUCBPFRhonv9ASfDMKXRM5mwu4j",
  "key18": "4n4yLnnoMTyLkwerqLUn1hdfxbEYyPdzTr766kWGgMft8j8MnaTqAc4YXnuzUiy7UG499zb9yKDNG2MtNwQyo19X",
  "key19": "3mF4ksstMCw8L2gxz6x2bKvFCfMePi5AQXouTVSigUeve4BhneMAJMZB6gNsLDha93YwrwCK3WgVtt1HUaQx6BNc",
  "key20": "3n2cMUkqr5diDaSMd9wCPemHZVua1XV2vnNuLHPX1aQwo3GeaxY7k4rSvCLrQ7H2GJv3DWkHQbG8QYV1tpkf21hi",
  "key21": "5gNbYB6qjHVhMPcPgHZqUuiz7qx4WSd8trs9n9mwPV77VPfhshRE11ksp9YHNx9cAZxQS8tTFhhFHnhBHMnNrnfh",
  "key22": "4UN3rmvNe7DgxbvN1tBgQjU129yKga3mDyn29ASbosAPsntWc2BjTD6tMyPJjZ4D67Gm64WaqcJGnGELh1kzg5qf",
  "key23": "5LyodcrRBiM91BBdK5ygNkNcq9H7E7Xe6LAQkKCpABuwUbeCMMGVSbSx1HbejiojiKaZYmYWjbkTovLbPHYC7KQ4",
  "key24": "BhGkxxnDJb11CC4Ktywb3kQ89NkrUoQgjmJ78YToM6aYd5c1zbG3xUhpRnHaehLYio2uTkaQ49yMnvy9w1k7pm6",
  "key25": "2P6kYkHsnKmvBRuiJoxknGKa6xgjieVy8615bi1JzkTvQMyRUQRxVrBW4g1c1uss1dTEzT269pi9uw5G5ZoCiSUF",
  "key26": "2dyLZuT9bVNbyd6YSoHnWtqmUV1fqq78yLJpg6ZLoYYm5ukiMKCWRcVmtjKUXzxfBigC74AszzWSZTEeyJvVaqKK",
  "key27": "UswptGYDW2hCQzCZkKEtaEaz2iT1WgheZu8zNHKYaky5XDcNegqRbY9DV7udHjSiNWPV1wWzeBeRhRGx2qQ87WB",
  "key28": "555qs4GgdPS6xvSSrMTYHnhpaAY1NeUL4RdboeULCsqtLZXPkqrXutnKtLbhYgp2dZ8gidst8cEqDisaVPYFu5Hn",
  "key29": "42ZVbnjp2HKuJjobJwetvhrT93YGrjrZ1ZUHP7kihqvjqcFruoARxnwRtneRXvBdCFEqCMPXJJEDrVSTQ1QDi7Tq",
  "key30": "5T9ddyNU1gLokyXeBz4PMstyHteheNWHowknNcwhCPjPaiDDfqpQfP3Ym5AkZ9kwFTc9VvHBFNuHTVMwuobGg1V5",
  "key31": "m4LbYAc3NCmpoLmpQQQCqUJu1b8JycX9CqaXctza8rFietcKcgUjNq3Rnv5fPZoHVamSnqoCSsCjpZ52p5SmzZQ",
  "key32": "4mT3sNRot24oE1df17kpxy9BF6VSRBUXHpWx2aW4PtqA1aSMxhcmESCfWShcEzcMFW9JhASRctNXiRMcrZQaVHUK",
  "key33": "4Pqa1aALfdTFVHXK53aZwxcjNTTgQmpAmHQiPR4qzdc6DkHHZqUcaWP6i2hch6jSkwwSDAyAs86PJFes68zxeMe9",
  "key34": "4taszgExLNiW8jHuBgBG1p8utE49zsWqLc3HSxMz1Js3BAyQtTseNtv6QYXRzpWa4sz8kRbR1BX3Y1Hc47HHzPN6",
  "key35": "3BgXgbHDjAKXmner8pHBb1eTbdU458qbtF6hgX6jASRnogvVGTxfxZN18tAutkT5LfNRoxEE55Hufv6FLcfdH8G2",
  "key36": "3tV9DLWBYrrkgSLDbXiLY35rjFiSRMWgP2iwhvnawhC26N38x2dqMd4eRC1HdowRtHUQVjotK7QJ3jqitnPoaYHN",
  "key37": "5gjX2LWtKEKx21Gw2JnpG9A65sdxPeFJVHBsJ6ibh6jvgce6GtMaBoe5TNe69SZZDCjzMYuhZxi9nggVLctWBSVJ",
  "key38": "4rBVqQofeXWQEu1b6cRKewdHPXDARynwWyNZwXFjvM8Thaivnv1kmWdRAEc9sn5khSoZRj6oyToyK9P5P7vaoYiB",
  "key39": "ec8TAdEjuPtqqm3QStNHtuPrTPVuLZ98DjzgRVcXCGpUKQp5sh4fNFXDgmFzgs6hJSWDnr5dRGWFxkKS8ccikH4",
  "key40": "5iGETvBH6SHZfcMXJLsWsJoBvLC5ho6am8czMgbPG4eXkmYUXs9xwG9HchLZPKNeGEqcx7vksfb24AqKWMXMz9aG",
  "key41": "2mgqXUx3ksWG2a6293BGWjDve9TLMMFYaDy9317yVrLUMZzLqPnYE1kJ2pwoFyWshd2SfRdsoNhEZnNmJNS7exTv",
  "key42": "AURznxATW3KFazuzyYqyGgPXPmc8DmQcWGBuTgxkLrdfmGva1bmkAFWXitLasZY4WfBHDku9rNzcEbaZNph5qSp",
  "key43": "5MNe2XWEaG8SBMbhiBF72bGPiaXkFvWeE4b2PW4thX1bt5bRSsAoHtCTtqfpiimZAyDnycf5giwFBQKjwcJYf3VZ",
  "key44": "5UoyfdjCJiexWqNW5W1MmZHLGmkhxckVmXyCENj8UtpgbPiYJvgvnUrj9Nj1XZY3U8xiBtnuFjaLzYycoPR8dMqa",
  "key45": "4pgNcB9qPxdm84TnijqyFY1iYiAFTt4WJ3feWKUXkbcLaTvJGkHy67ZCeMxYrTr63soGY9kpQimnvF4Tyhp7tCTo",
  "key46": "5g6q98GWbQMMFwbDzNXNw8zDdaSYymbLgbjDyVcFw7H7ZBZgWYALripSV3YURZRdsg4QRyNRCKGpC6Y96MQFuAn5",
  "key47": "3oQPAiMVjryCNR4GHwioPeHtrCcgVKcA1p9R6E3SdwKUSWZ8HkkYWRD17wwM4DE2KrB7vp3sWDGxeowQVjGn4fjz",
  "key48": "4vCesxqPdFzvQ1USYQ49ZmLzP4pvgryxmiFJZqjJAw5QDoTKYCf4bDPmtn18MLfUYqJcqgspwzrnpaTkEVemGwuG"
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
