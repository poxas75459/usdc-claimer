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
    "3VJNqVER3nf11o2f2NTPYRbDaTbvqrATtL1twhJKJEZB1BsD57KxcuhZuutmt5G3WPcpQYgWDSiUwskARndVhd16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8d4b5PRgP2xv3p23ixBci4VF2HXvjenhUF61ekv3nwFJZDwho3MNnw3LHK9UB6MpdphWm99RJfoGLyrfiUxkeM8",
  "key1": "UR5Yg6FtsXo3AfWc742pjH5vSvHhgFGr6MEqKQHEjbwbrJYEDFTocMaKdi8CsYeS6cQVYTDZVtquaM2wdFjp6Bk",
  "key2": "5rM88Gmpsc3YCDVJmVipucpGisfpikwRViQmmnqbaH58nb7dJvjLMEbEjHZTurpTsA7E19CNwmuXjEsF4oLsEUWu",
  "key3": "3QhEDTURHB5XxLbDRux65cEs1SZmHEHq1DDapSMYE3m4DJJ4h3FKsXhdjiZm8mcoeHmiDcrRZwYPBrLvrz1nexCF",
  "key4": "375BikD41t626VFXRauzGZF5UiXgTi572irBKs79UMjFYfkpewU4ACmcwDEjjSaMRdeRxcQuBAspkKUmzgWscgEf",
  "key5": "2qnehwQgF6eH6Wz6rGoRgKHLz9jET1AGo6rTReq5MzDDwt976nC2NLzRDH96ojci8YGg7guJHzkNbUF5TRtMQFcU",
  "key6": "3BA8adhuq9PCg2YnVs3tBHtUWjXU2jNmb4T1cHCqTFCMN7iG3XoCekrNzLiYcqHFNEXrS9xNzzawBVpjRwwUfyuE",
  "key7": "2M7j6jzEwXjskdqshH8ukrLojr6dnPviRQeX2aYfc7a74UJHSFQT6HQ7yAoeXuVJ8Jm92jMpaXq11rRNHy6cLdc",
  "key8": "5kAKPFYxzgqkchGV2yaKeYDPws1KPgsZXaFYiGV2NeAMXAvRwY3at34nRqFFD6SjCA5KRngTWfHmovk9nvfKEPK",
  "key9": "2iZyrcrADP8b9Csav6EDwEvjFE6DDacq3tyBvRNaeMSCqJpAGxPBAJL19t6KyjhVuMGxB4qYqR4hT9WF7rmSSBmM",
  "key10": "3bupPxo7DWwYmDD6fz6YfSgj3bNiRrG5P5oaMpBqfq1E3QoTnasstvHyi3bW2XENfXcc7d69tY1b8HxtB4bJ9CBU",
  "key11": "4c2UUFFBFm9JXfprqtzcK6cmyF8vnAwwcADoMrg5ZkXBAEGhLtzRNnsh2WNNwTfsj8H3CY3bxp9qnjToJQHTnaj8",
  "key12": "yEBjZ322zF1P9PGH9nY8Zh1hGiYPKqM9K4CogcYHhUxFJG3XiiTpb3uRMAsc23ydKgQCo8GSt8TWg83GRcukymU",
  "key13": "3SiaPUpMQ2pAJQMYiYBCfNouLJgtA1P8VRriRAACbimEjNfmTJt5iXRTRYMjJfqhFs3HRdhMWEJu9kGew1NLwetM",
  "key14": "56oD5cG8jTRkJcWWgcEe6QHL3y543BHCUVUDUoxXHFEAn7VmYLsEF8xj6vwyziwTiN1gQqdMeogud4QNMZK6ZMDF",
  "key15": "3hX1dTie9dk38eRVqDTvRdwrxjrz7aoom7s79Tv5Eahrko1iF1smpFwCHnCJba5eVdBAg6sZYMUpx9NpivF8yabX",
  "key16": "bKy6wUbkgjCKd6CYfFvTWGD2DbAnXDiZ3ZP33EzzESLfdrSDFBXwiu7pkQLLCHnxjQSCKP9Kumq4BDizLemA8ff",
  "key17": "3LHePHPo8imHjn28PMmNQiKWUGD69KDUTFEcTfxHdwVadWGrWPGaAZ59tyGxF7yaz4R7vZJPGUpixK6gVW4DZ7tF",
  "key18": "66Kg68ZmieVcQ5VDYoHZbUmXvva9jQcUtSWQ3v1U2sp5dHSYDwzyCDZ8zasWuHrJGkriko34NRVCros173HDUVwB",
  "key19": "28Y1ScKQmumbRB38AwYg3bqQCh2kkpVB3zR5xXroUM2pkK9dEoU1TZLuBXkstCZkhciXoWea7mavTjHdaPQSpwkh",
  "key20": "5DgHd1nBAQAN2JcZD75fVkbhDLFy3Aw7mpiCjabZPgY6d9Uuwzqy1rbSfUkKVvKTHucoScobKpspEr3pfKeniBNf",
  "key21": "3kXbTjPHBT9LgxNdYRzUBfKmHgxkDTHqzqPfnktMgTcupermShkbFCgTbuCwjkkU9jZTT5rCG5o9U3BHTWjC2vbG",
  "key22": "5zdLius1SHFLyJ5Q3KM1affonJGULheWxbdaRUx4NY2jjmKXA439haMy1DqJANLgQVzEyNFZCX6Ro3X6STWmstY8",
  "key23": "3isiHJEjvR9HJ4dRGPrDBzrAjS7beDXr7hpFBb39ZRcLab4hadnL4dzngpJZvHPuDp9wq9RdnG8iThwfbyMVgwWK",
  "key24": "4zSNYW792FrLwyrz9qtVNrBaT9UrkZyTzMqpQ4tGXhBSyCyHPode9qcqAyKGsNRV6ZNPgza9HaHyACxE3moUXaPv",
  "key25": "59ybvv8c6vs4RGhR9WTFRvUC6eNNhPWp8AVCrKounAtiQZ3m31xTJAmMBwfit3s96r2Ln8nMTjmnKGJCxJqBSTvB",
  "key26": "4GTfyffZR8mJvoUkupnoyGqasSGZyDeUSL6NXP2TsmhiPoDCYoU5sdLducWVeCPC31qGLUUFHvzG51vGMG95AVoj"
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
