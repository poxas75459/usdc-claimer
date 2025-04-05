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
    "3gUM9QqnMhzuv22iYAXyG6dWUs5rXFEDbi4tYykHN4YmBg5RoEySawo1FoKbm71zfoRXdKgeDMsjtXVewAkSSLSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nem82qJvN83Cc6ima9cUY5zwzQZmEiNuga68ny3swDcUdh8V2Ykm9ttezwnuqQTUTMoDYUNozqr6dt5AZFJkE3L",
  "key1": "3jVnXTea418mpQ1ZViw6oPQ479Fi1TRGisn9aorjLP4ALTutPSfeT8Ax8aQjeWgFCHGoLa2uz1PzUZtinbMLnaRs",
  "key2": "3iGcw9xZCCsxKAWs8iUcTayifhUAEV23uRy94xoSKTrNUtkgbcuqZgfoLRRwcJRTFcCMpTZBeudigU1191qATmyS",
  "key3": "329sdgSVSfq9xqD7k2eTAvHFcG5gPcWnjsrLpC8DkRQub2RNbWVf7RoWd7F52cxF2ChV3JhzHz2SwgtUQKSUUX63",
  "key4": "3mU4GD1KNGwUoAWT3kMgUBMqFHrtMzVYer22wuj6y9M4Lu1g2Uy6VCx7yRartWvaTESwQ6sGSG8bxWf725tmzv9H",
  "key5": "3ajyJju4q2VLc4ywBzaeGotQ2FgJ1bx14m4gbvCwEeQ8pH9b67T2VyVKTPqH3JDfhdbT6Ap2WMrMMwQhiBRzYMA",
  "key6": "24ySEcPgBQMV6DGYDDvvRy43J6Xcwc72fKnDx9JDNDDmeoab21gGU783qkgSLcxQN2TRDPsT4rZpYxhE1myo3XRk",
  "key7": "4rdF4nYwBRdApBuTqfJuM2SKL5kYvyJiUiY93SCcJR36ZH8BdTANWJsRX8SxdaBkCXdvC8mjPnJs4a4xMjsY2tHC",
  "key8": "E44SbrpQSYxSae3tFzaT7mh7m5aufjzAjSaTi1bCPezDnnAheaFpE2HRFXH3b9SrYn45TZY3DMg3Jk5rxrxsPue",
  "key9": "3QnTSgv4KxE6Yddn7xHhkYqLReKVQ4JWSkukRtUBsqowPnVC4Z2gYKfcQj4xwcXHKRPpx5fNnfaYw6R85RLkvBRJ",
  "key10": "4AChB4TjKoRn2wts6Di8vecSn3LoTJqTXp4YnroEaoAHh4TuEyyvWFBDFtiXCu9XQJpCrrdwnXXRLDN7XxaQiLaE",
  "key11": "3dXavJeatnszWXwbhr3xZAQR173B6yHFjXUJHXYnjnU69QseZNBUddcBRvYRHc278DGU3LwS6azwKYeX19SUcm2L",
  "key12": "37SZ7vPFCiDHchrAiee5W6BCemgRmAUG7TKK4ukMsZEnDQr6K2bFTdmC9WNYgmgW6E3AJ24V3MA8aLeApnb4iUNY",
  "key13": "4XiYiNDP6J6Z3jTdTDN6dn1VrFVW98TAqwEwgDembAiFpwyERanWge7CKKcPzV57PTkvTcq7QRkoF2XjkVwUDNEz",
  "key14": "4Z3fDJJV3GqvaopfNs2DJpJ9RqiFTokGzS7hDRfzsi8tdVJsZPpAt9Yv3PvHbgE4JLTAx1MhKSXEKDhCHyi6MN32",
  "key15": "4iJjppS6mVcdmV4MYT18HzvBqZfVyC9pn9CWF6uzeJ8qLAAUgzNuBepiKRRkLyNEnfrYTsjApcX6QnAAWkm4uwN",
  "key16": "4Czjm3GjRF2Qx1BmaBSCNaokyyVAc1RdZt8Zz4TzVXtg4Mgi6ziHbUVBQmZ7M4V58iCSiXHwGVwqv3u6xvRSDAw1",
  "key17": "4m7TZEmSyeB5NohyoeBCWDh7KKjafP2jZMQcrX8v79b1tupypDLLmHgm4k5TPQ8fRA86WU96PsaVKQj2JCuZ3kTq",
  "key18": "5beHHDr3pGiVcFuLTdApNS9EsRkeKwiBdsrxvNVga9YCP5hQVrWmidHNxKVbrSyYiQreNpQ9RVJuvCHjCEFGJ9aJ",
  "key19": "435hZn95jKaDeJn1UW5otCxzDhksYzgE9NPfKJt1aViHtLwpj8qiuZ9qwd3UHkuL6Ge1natFQQdsDt1kKKqMn7Q8",
  "key20": "2W2khE2qiz4xKck88p1stFQtyDUXcAdmJkoBxqNqqPrAswf2A9wZumUvLCPCKPYo82K2h2atpndnx3qSBcfDtujH",
  "key21": "5ucEt2vLcB7py1i8ERJEHTXJ8QTY9C8SNsTpvWVTzr7jB4GEifRGuNyDGtky1pHkoFsuGdNqaFavQDhibLELYuT3",
  "key22": "itBozkA1TABu727272jLoNGbMYqUym4tb5VwkmETWyaUjgLsLhVj5K2hKz5yD1BCFCGCYHGNYd6WnFeJc5YJFQW",
  "key23": "3FqD53tdRUXQTx3sMKjdDRr8J6pikuwXyX4oGLvzVYKs1AyTwnEUa4Yihkgs45425WN8f5MTZR5TXFP2uy8UteMd",
  "key24": "1kGQfktED1sER7aPQph9Z8JEaeMVYAp16Wp34R2C2vBV9NLDiQwib3fyHmRLcLmuKjCMQ8Ft25Riei273NKpeLR",
  "key25": "2vBR9ixKNkQ7NaKGVap64sY2djWhV7wyK9dtbAY8GkVBi6DN8tnNyvr13XbbcMEzFdQ1DjwvbDabvuYSgZeidpTN",
  "key26": "3mUxy4AwSTu46EyJpUcPvGqQCAvfWpeSJyUTbckFVrakpsRGvDzfav1zR7XHjabxC5TwBW2nzpv7AH14bHfDMJPp",
  "key27": "2AHUYe2HzaWBiSBsHD9xNAf5P7AAMbYDYaQSB8jUNfyLEdx2F5oNEfYfR6dfxrkiRHkXFjL66nCrgxipe3rVm53Z",
  "key28": "3S61ZDKfUt4wtBS52cdVnLni9zMK3fX8F8ChqA1oFbRez8b2rNjJDz5Ttv3N7ZqjkTubWG5pFjZwGbtck1eU85xQ",
  "key29": "5vSDPyEDNU4dB43Vr9xHz6gbh7nXbpjfSySPtN7JUVhzQMSZeY4RjEPvRyKkKtpg8RAGzA2PVGFcRarD1CjeMmqd"
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
