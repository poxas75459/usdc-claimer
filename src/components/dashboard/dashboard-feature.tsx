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
    "23wiNsfkhm6SvMwiMse34v9S1cbkRoaYmw8pVg2G39E7syFkAVxko3eWQjmkG5UNUVPE2vUPynZT3YF9zmKUgw6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U5qy1upgUoASWJi74VFiWctECjpUNkb29MhM165xBkz8SuF5thH1bzmFZ7qR5kozhUQRukQgpd7aUBBHT8HRH8q",
  "key1": "5bh367h91Bq1w62VDYpCxZtr5DRmEjeXh9CjzPQpRvjro6CFeUwxEdK9EqvxMF6pDWFLgZdypN7ELtpBe7iQvFrU",
  "key2": "4xu5AGjpXSGy7nkuK1GXP6LkjjRqG9aSgTVZpBmSEqDvkoVCiGFvAYfN3kbStW7yJGmHsHFAyhDyPC7ybZcbiKLb",
  "key3": "2ezq64rKa3zWecAAoFKvmDNdojirco8nEhTbdFubQZwFM1pe3uZ1nCdzWfqJ4NLPm5Y6g8Lk3qtuakqHwYCUjB4s",
  "key4": "2xsFht4WkzUepLGKaEmcVbQbnK4PzRJtJ5A6tv7z1EULu5BQk39ashCmXaC9pFNdzyoSi3qgvb2d34zxhMXcBBCm",
  "key5": "NZig8bp7DRdnYDSFvpen22aKJrQF9bXYK3D7rvewRMTydMnUnWU3BGiBQMBtAqmFADpiECrej3VgcKz8ViXED8a",
  "key6": "2BwtST41wKuXpFYtmXdAjWBtyWFrBoPF1cuBQpyQKtwMg3kj1FarnD5EBmRVqujN6cTpnV514jcapi5WXk2iuMws",
  "key7": "2punW5LuRxbzFwoiAxMTQaHQ1Dgsa4S1GSdVpUTwBRVgUjp7bi7fp77Fmz15HedvhuUye2eoS1MCN4upmi9dffoL",
  "key8": "5DPfvWwV3BvKJ2yBuuXPC7JcKCxujU4LoK5S38dtraj29BEhaL9ehhM2t8nem8Qg6zVGyiGG7VteZVvwyi15op4U",
  "key9": "4f2Vxf9bt2Q7h8T9nSSNeT9kC6nxcXdnni78xZwXK9U7xXgRc8jLVFubNZyPxsFjyaU9E34zNf6uxVpRks5jhqHk",
  "key10": "BM6YzpktAoz3wz8wT7XMXvsJhqGd7VVThH7MPSTSRM3Rw9MqeRBh9ujxG4Fe4HD1xqx3NTfbMjfgGkAbqGewo1t",
  "key11": "TEgtcfqgQRcu6vgKc7HnE39NXhW77f9sdqsARwTXbdL9EeuEV5BhQkSE1iAcqKKbXUpZET7Pv97URr1dpd2HgfJ",
  "key12": "w8CSqFg27jMKUsg1wwMee7SVQCJMcibQd5mnM4E6uQoBRdJPZYY6Uk6yqGKgscVcbaMaapc36x2Hu3EB4dNym4E",
  "key13": "5UqbYdATUSDZ7vQSKn5vVKb4ZRasXPSuQzMuZtoeoxBv8yk5YYUWmZeYuotGmrhK8WrbQ4kC9KwA9v6wLSZc8oRj",
  "key14": "2ejKy1KpJVQ73jt2UGE7Euq6Fm2pv4DZAZ9AqhTbaFp18cGNBfNN2vZKpMTyyURgE6rzkD8oSF7eBmBpe49XEZdP",
  "key15": "62D2NHCcsoNZ57tWhNTiSdH2c6pPcufFMwNAnotsxHrJpEBC9TAgPCn6PdtK6xwJFUbrFd6CuF4Smoyf4L3TgARA",
  "key16": "3kjHTMmrwtAD4ZZ9VyJLmNEf3HXvp2bKvuLVT7uWxna1j1eKRqntYLjcYKMDvwfKpB6ri662tSJ5U3gTe2pV75Xa",
  "key17": "2r5T9TJQH2EU8S3P4gzJDnXVqwjRuueCn3SnUmksLNk6FwQaZBkk8E6pzgyYcFpcFN8mob51SPTDJb9bP8gfStJR",
  "key18": "59y4TaDB3PupuxiwNsiF6iKkE1oHFMcgQrtp9EVnshCFs5ob4m2MELTsdG1wZtch6JxucU7ZUQ4G6rBs342urxU2",
  "key19": "3AWNEoRgeFQKginn1vgrAH75JPoNp2Bt6knGf3gHkwPpUxtNYZtD4vsL3PNqKTnrp9xgb9T5gzYmbyZGZrMURFUh",
  "key20": "44V6PUSZmekWMwgACYun7c49jdWuAG4AwMJNUVKXwAamqaGEdN7gTMNqjb6XS1JiaH3Xx9KaZgogPWhoFpYm9rkH",
  "key21": "J2ZRnq9NxwZjFkJkt2F8AvFkWstbv2S9Zd6dynKXiyt5s1Q5UmZiJKDBJuMxKiHmPw2s57Cpdsmviu1YpHx769s",
  "key22": "3fCg5eyDcWd2adx7n8eZYWVe6kMfmSW7rzBZPXGZsuxwfSxkm4pgNEmFncG5hsbEHT42UPdmCe2FtQpgwgsviz38",
  "key23": "5UhQzBanJMdZ9Y1n3fewfdWukFmjz1nEYW3218n5bF4PkDNNjZaTiVLDG3wsaaUcdvT9ZXux4dDHVie4gz3XSYm2",
  "key24": "52tm1veNDqmUwvxnncgJSEsckXVxqmwxxo8qXy2rajjuSaXWwcczvctSatfkgTHnYx4D65hKpAa4KyEAXAbh54Ee"
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
