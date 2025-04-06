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
    "5B3JJQJPzhtrCfhaFt2Z4zBjfFFz6YT17dCb6LWf4R5heHo6nZhgA41vPmYHAwPfyu1P6xck27oG59HoqidJ7rJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQkKY8J61YGUzfpcaHbHLfNy455mfYxTDhNUS8iHqwf2kzwXpzy2ffukzviJAfzWbwL6wXYfSqb8mVUUbXwyd7N",
  "key1": "2YZuXW2CSCyMsLTKderAz67xQC9ie8ErWDrZL3RWoDJcf1KkdieT8GnNCTmtyxJS7KCozXcaeRgnxoB4Vv9eobiq",
  "key2": "3ygmRGsVYkQ3CTZzW3UJax9KdQ8CGu57LM7SBTTqxQPqpZmY7AtuX1iwHFMTTsAP8Zu6dDsw5y3vd9NFm4Bv3fDY",
  "key3": "3UyaqQ2AfyRey8YpD5pu2mEmvJgq6LMwnmFK7tCccNbjVCTj7dubRxSYHj5RyvbX529HKKsKPhw9LDBTShKfnktQ",
  "key4": "2kYpvXxcRqkvzoseS3aT8x6wbyRRGxtZBYNGEMFrCvBWcZMxEcMoksjZ6hTy1pq7PMebWuTHuxHYihmJ3TJDKS45",
  "key5": "3yzZkm94PpAbHVJiSeE7QssWUuFLJ427WN46XtKUMo2DMLPSy1oj6QQ5SKUNGyieujbQEPr3Mgmy9w5owHJCaftE",
  "key6": "459vPpUxWrZt6QrCMdhZxPuAduGX2yRmp54LoSMTKfpytejzJq92oBfm8Z9Y18QV7hRovX1iD2R7iCqjEnKVfPhs",
  "key7": "2TWyTG4DvbccHCwxBBBoutHZpSnHMGvUMUaHQRCxK4Naw43wHzbvAC8PJqEFGGh8KXwu4UzQTvNtkAakrLFBDvBd",
  "key8": "3do2df8qCgkXFExpB6MoS6AjpA2P8Df3JpLxDzGuPmbHWNK1MCQStKYRToKzfdbQhR2SiQRcaAu8hva2TGcLAr49",
  "key9": "2a7ra6WX87Bv4wJuticjZpqEV5BEewP6FgaWbtq5eA66dsCNy9wCs1y9P7obeMU4oA2dNhCHiCCwKjGVynDZ4apx",
  "key10": "3LZThYXiZJJLtvEA7uCkSeCkrjes3N5wkQYtmJ8d8mkumyroxAanEpe9SXDywE4DszmE1KKhr1T99wLPHEZ8o8Uq",
  "key11": "5tzjH593mHVzxjs4refUhyfsaAWirh9mhRjCNShP1pHMVaZgqMNB6nKRLp9yzYE2YnGChUNa954Scqo6z6vBJepz",
  "key12": "2SDqqgnUNR3kJQJH54VpaB2gF1syvwNijukCTJVw52gt2NcMYdwUP2asdZ8TNzpbauH3VR1KXHbujzhwvLfCegBG",
  "key13": "5TYdkEP8FWq71N7MZo69RXsdVXY1pGtNxy3Su1CMaFGbwk9h5H7vKVJo8boYgNofQgn78u2bURwFY4xuFhaDKf83",
  "key14": "3uoBrqbEWrx3erYpP9zPCwYEHckrpSziNyMBoLqm7asrWAvpWVDo48yNYLZW8hBusbxVSGSwKzDyerD51Ys9Zv59",
  "key15": "65Mzah9qvLMg2hxCPVbDgerTZBPErYohKp1DcvWsPcApvgy1t9vros1cqTegPdQZbdqM9rREjkhs78Z9GdcAzpmY",
  "key16": "2j6fDUtCTesUqaiqKr6BZsg8npkdfwCNdKKNCFZSbVoLRCMygYkrG9NfS3ohoeCLkg25qR3yq8deXHnd8ApH7EsZ",
  "key17": "5dKKmozkAK4kp7VyM5B5PmLUaw1hqtcBby8Lei5LYNfBiuB3gXKmo4jk7xH8Ds4dfUfZKHrBpiQmcsUxEy6jW51o",
  "key18": "3P2ztJbcy27Kke3WHij1uTjVeBRJGyyrhSdpbshnkuq61dbFBb27ahis24SmF6iMvLr2sKXD15TcuoxnKyQfc7n",
  "key19": "5NraEifsj8GXv91VDYpqehVJbXr8e86DCSFs6CK9ZSuZ1ZGSKDnD5aPG3RQs1jmomGSLbwEu3wHwFyVdA1wbbT4R",
  "key20": "2n8wsfVvSYVeD7o66b6zCncnfMyRdskmHWDPwkUGUMX4EHstfvbrixKFcC96wLooDvbxx8E6jstZBYNk5bRu1kY7",
  "key21": "TUpy7citUnunAirSaP2duGLd9zC3gQtGu2Wp9MHiWKvGhvLSMotzGUHeGmoLJFFZZTBZkKsUfMDugPNVwdeaMgQ",
  "key22": "CgZqrmurBTw85Pix3kMAdSRbarQkSp3GP1KJUzQsFFJ5X99KjjW1tYQAqUkvKdyzpaojvZFqqpLcfkTvj4GgE6N",
  "key23": "MuQvcAtAREw7KVLJjfw15XjwL4x8wKkdrse8EZo5anVbsKvzg9pFuy65rsuUaRtLY6XTRzEunTfHXb4XpUcdSMt",
  "key24": "LJApw2rzZLfumMtqqRRq6HmYg1LXVtiusLsHCo42b7dDLfWZayZnCbiTQSY6mEG6y2jPJEQiN5KLf65TLdV8A71",
  "key25": "4aXacBrUs4CQrNqwXW9seB8wUixk1bvxQrQ41MHbVZvjKkzbXxC5aJXsLGxi3N6UH4pPmgSR7BhwBGFN8BkzzD5o",
  "key26": "4N3itKwN8MQSiwttU6JnBbr6peqKYrhS3229dqDbW1QMcisSGH1mbvviMnZE42CrQGhkGc9tysEx3yxtf9a8eURE",
  "key27": "WNXXNQ2BBBapZTb2vsFaG3mN2a8LZHfkbZdDyEZCt8N5XvmYdV9Q7vSV4LAtHr5kubmywPGYaPmmkByRkE2h5RQ",
  "key28": "3Zj2tW5wXL2RhQvYS6TDT99L79TsrtDpiKdJSwhpiDBz3q2282hKcAJ99H6LQKamJuaYySk2UB5E5WZhboaRbfxv",
  "key29": "126wHk5fB3tTaw9QzGGWodaHnaVgXgkat4Jsb34r3bS8XREg98BmbXpCBTeVWgTUj8gDGWGHujghYx3aJYNXkNNV",
  "key30": "Gj3AsYwau4t8uMj9AZGA1njNmm7V1x6XvkpE2NzLBt5ihRMyi6CsbE1kCtav6YByEaSia8iCPEeXZZpnb1WvZo5",
  "key31": "sBnn9geJ2eo64matuWz233qDbFPJKZA8iLi1s6vdCbPHY4TbptvdZHCqTxTygUsnFk312aMrJSrPxsY7jLYFvcH"
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
