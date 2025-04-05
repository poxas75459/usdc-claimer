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
    "HwmQFH4yn5AyYJXUU3EWBVbfTZVCBCYSQedbLfqBwz2g3M8EjJ1FKgtJ3eanNg7mFjcTCcFQFV63Yi1t6MhcN18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gi2WPauq92Tk2PH2Yg154uFEg8nhFFvtmMprasqAeSozE7fTeVTFrv88LanDZdqsZG6v1bYEfRBxfBLK8n47n27",
  "key1": "3njVZ8WQFexFvidpKYriDYEckH3YweP9BsSPHNNBrYNdNimCPPMT9NN1179nY2rnMjJ7VShSJAdVYkF2JWdVY4KL",
  "key2": "vwxMxPX7t5RzLcTWGgYcdnJydBqksqVoKsYUgjAEuQ2cSjaoR3NiHmVEPMqLRNFoEWWRQ1f7CLNA6MgqfDDv9fY",
  "key3": "3iUxNvQmf8RAudLZtoWWTbYje8mneq4MVZsp41K4kKg15sKMpCG7RmkDJMSomy9cAKASqWC8XDZfygr1CqZDBT8L",
  "key4": "2WEvRrWhd9c5jPQSaG1TbNMUmAcL46tYHRcWVcWmpxwzR2jXsDLZVyvGEymFewAYG6Dg2DAtbJLuMAwq4oi28xZD",
  "key5": "4PedRPSCA1JKkoa1LgSa6JWzK7eLoVhXFt9KTh2whLySBAF8awwwP4JPQVRkPujiknM38Nrp5MaRcQRjtXaQ2io1",
  "key6": "3x9prNac27CH1qwrKNuQR6Z9EZEoCk8UQ593V1k1yX7oV2ondbCcXsXpCL5WpKyESmmMYDpGWiRPhDkW5VnetAeX",
  "key7": "31c7P1kYhcA8m3U252dj7apfW39FeKwQUshqk4a1TeRU1xi3NhrKQ8VaGHxtyqG6CiaBLVMDqUDMLpqSLyR4JEGc",
  "key8": "5K4VGwvhDYs6BuZFUvww9SvWm6mTFD4QU7GxcmjmiYRw9QJy39LE3kJ7TDgfnqt86iWAUCiDdSF9X4wn46v8EzNR",
  "key9": "LDyhK8Ah9piAM1zHGWvkQ9A4DJvxSPDZphn3y2S9kAvbVZEoGs1a5A6NBJAFXpac15D4zNLTqovQcA6eE5caUn3",
  "key10": "4M6QGtejcG2WX8w2sxdgm9NmhPE99UxLQK5D6Gop7PTep9DodNPZD7wWaaCVCrquF4Datg87sLMcVuJ7DT3WdgUi",
  "key11": "YMPVPxDiKGfhgVMeBpzcaPyAfZvNFWqcc2U8EomGxK5j95NGCA5kR4XM4ghHM8c9XySpMxEDdkAAbUBt3G86AzK",
  "key12": "2Pomhgm3mc8nqqgE8xbWC3cc7ZxLyj3UMAApyLU6yzEnwxG1GznHQtKNJsKjvF7UhYntnTQXRvp2EUz5EMh6EK9N",
  "key13": "46PXvSaY8BXiDbuvMKbG6j1sg6BARwaNw5y2d3oaCugyUMa8tR3sL8p7JyyRiFpQ9T8TtJS1AazDSAAB4WHks8RL",
  "key14": "SXAM91k77DoRd2CSyWxUhsggawa99TPeWnYUdrY3DNqy1YxPt9fom9cvcoSA14zwK85HFPfmcbzepgvxdNyEBih",
  "key15": "3M2bvSTPrskTrUvrFS3v8uKZw9Vs5fL5Jpztox2Tm91MKmPUJKUoNBuFqUH8wztpncGp96BHP8Epe7ozRjUeEMuT",
  "key16": "5cVaTsjzZgNjjcMUVcczS2qhYrdPiCu3bjEF8Zgx83QZHx727i9cqbiFGxNzPuNXGpWhrQ11M4pq3Xkoy4sVrSz",
  "key17": "2anfjkwJTLmdgjg41qSbyX69JoRQ3kRgzjy5gj2cbxvvbxLUFAcy4P4TLuoLagVsJcyz8A5hc3LzFc8UZyLAP5uw",
  "key18": "64mw3o89vNJKFb5JfXX7C9mQMEvsVLohjsMS4L69S1qG2iz7QL8xiFM8uRy4QXQrSPKThVkw94C9RUE1SZ2aDfqU",
  "key19": "4113ZbnnJF9Yp4YvTDpN346y9hkVB2RxB4Dz7nTT7f6SoJCkdUU512m6TXME1nMJuN56M3Sumj5rvtzHhdZzHXqB",
  "key20": "4mDmk7RyxuqEVzXx7XjPHkySmuQFe3fzTTznkC9ni2KYUnQXDA85gUEDzvhcAqn4ThR9qTCisMhEUmEzD5z3FWpF",
  "key21": "5uGL6SX86GQCLUr1HJ9aEBegUPospPiWHpWADBaTELz4kuBRig8bKRJHfj3W7Mn5cs21y13mV1NqZvvRjEnj9BSp",
  "key22": "7VhsviG6FS9jokAJBYvPeHw4d8jDw2N7M7QgyzUMFjKwvuKediFFd2g2g56jkfEjuZhk8sAkYWndqm6WE1GzhYH",
  "key23": "5LmJUMoZJL8N2cBBxNhqjUCXBwXraNCqXDVw5jpS9nqq5xoiRdYqBETm3cHQYnrVnj8oXmqsCyVwQ1S2cmHGDoQD",
  "key24": "59KRbMvQc4oTV5sP56nQfd9UoVNDRACiQ4fXoLnp7yF8a9RupXQVJgT2wUiMZiekQgeRJw8A4ydUAJXm44ph3aZA",
  "key25": "2T2zyB3s7aq6VB8u8iG8dWVHHbrimkeCyBcFe54Ed2CkuaKzVeRp3s5JTbXXyHwuxjFEiaLGoYvpy3Z4NBWjFVTc",
  "key26": "4g6o7aNw7dPqaArGa6Fq1tAhMFiTns1cseyT22K6wwvsT2capARpLkQGNNw7XrTe1XQisjEAW3SyYmE2128m4Pct"
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
