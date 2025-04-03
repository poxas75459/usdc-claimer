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
    "3zdymY7tnqFiJafGMZuN3ZMTCg9e7MXu6bZmEJLuQon9cx3s2Z3w9rcH52mm2gUSH1jhMRuazu1TY23GE8iQGVW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sma2g164b8Gc2Cfhi5XvBYgNXASCmTtVVjHAUNEXq2NhhSsi8GK46MVQzifadJqvchCFefGDsUbDQNZb7ySKUWd",
  "key1": "29nXvBEbEsBKMS6Q5xxvuxMGRTRzGmL7UX93NbwXpM1mqNn1SwcpWaEv3ffczXKL5Pa6c9qtnyJiN31ntP9aaMSA",
  "key2": "5k47XytXAvfCF99XRfR8m9hyhj78T9jrWZ8kH1eT9zAcZhRSx2mQApAJVrApB1Te9sqjpPJ4zdsLnV9r1Sh6vgaP",
  "key3": "5Z3P6x2cdFzyTYKHEW8p3ZxN9812gVawn7ubtyw3gpHgRxNiyTKVMZteB3B4CG2WNuWa9RqX7sD3Jo2GYiHP2fWm",
  "key4": "51VWcFVtE3bHgucHxb2QrfCoCjbroqT5qB4ApqDLH4JuKhf6LuouC67a57EV6mwU4RgsCSuSqfM1JdyUQExyR3ut",
  "key5": "4i4ujjKktorzQABVyeYoFRnweGCBcoETsdMpai7YnS3ydWWSg7WFXmMQM9bJZz4S3VARmghLWhsu5JGQAupkJ1tf",
  "key6": "2x9kbrxNgzjZgzaj43jMPce1cN76ajxvrLbgFgeEqigLePwND7ntpQsDPEn1JNoy5P945R8wJ3xJbsCa9vmSWh4s",
  "key7": "5QxubcjyoXPSeVU7M5EeGRYVX3AD7YPu4adPWFVSuQ6vmPco3sbtD6yBEXkv9FqRcvTkvP4r3KXJoQU9pdhgoiVW",
  "key8": "283othK5vPHFwzYWfEoQDonFxvphvuQxZL9p3p9k2nBcJgrNB1dt2WEoYt7BfRgXih63nZvH53QfjV7vsHBSMKiF",
  "key9": "3bDBRTFeAXi16zsJ6vhnQR48BBHWBekLemWWR8ZCiPbBZVRYm2x21w597LunN5DAYDSEvYXwjNyXjKZbdr4Qp7zV",
  "key10": "2cJoNFRFQDRj68Qu9XKQbGnpJr9m4nEbxxYk7Wqqrighq3ezM3ExnmuhirvdaYEUwuptEoRjveyCtNzrURMH6eHt",
  "key11": "2GWZHNf9Ts6DLzqA1QbUXYeRj3vkmHuHNXiFjzwJcMCr1VGZQkbFxo5hRWNEF5pfRh3ZCKhjTGmBmJTM92ksBEXr",
  "key12": "s5dGQMQuSbUQaoy9SczcJ2X3jz2FukxyiVdtYxMsCG5j9bnhuzEkUkzpRyeQxULqAoCY5yH8YKC5zCTYq4DKKcz",
  "key13": "4JvYYT469gq8HBPua1991jFKhADRM1VRXSVVveit6mH4KWP4xf1QpsyVQ9rx7hTWk5NW694WmnHi93f5EVvbniSn",
  "key14": "4Z7tGHJHSP99RMzmRQJcgsNWYLue6vZv1Az9Zas5NPN4BBnX5EzG5TRCagFV6qjhVGWhyGMfxqp22eYJA4GXACLM",
  "key15": "3YnSbhnUP3J3gBc6Y1MfHu8ni6SF6m3uNMJQKt2pV5b14GX4T9Kobj5QYjX2RdpKvkv2FHuNjeU9bi9TcubtTrd2",
  "key16": "4GnbE4jUWf3QiDcMwTVqdZRdfVPNBqNtbx6iUAjp7WjJdPPkscZBdwS88Hff4N94A5VUyQLQVBfi6n3dupXeqKY",
  "key17": "2oJCpQFVSejEH1fkL6N9V4KEXGUcVCmuEVyFfJDVqjwLexdMEQ9fSXU7QDwjmKYZgpp7UgVJpkC4wzYxExVdbTqo",
  "key18": "3Qf6sSgHHHqUQt5FRuN3bZZ714crvXoT4bhRjmZDoaagKBqXQBRGYvSdwJoZdVBo6F9yVUfQiVJZiTe1pPFNCwKC",
  "key19": "3jcugHVacJpwyHXS9tqiwfza1fQxgs6Q3WqoBDW7yA3cfDY4iB4Xj3wWWTEd3SiRRuiQ7D983Zh7oJJ3TpMsnfsx",
  "key20": "2zVhn9jTngECD1axCDiMLUG2maD75kdfQfyN2wW7URSx1XZRST5h8tPX9quJkT3UUweyqod42C6hR51knHp8zrhp",
  "key21": "5HUmwnsNGTENwbWL3pZE4VM6DHagWN2ouG3afJ9a4AQgBUk5Bz2cYYuPJnzx8mxMox7BeUduBxU2PtBKowUAF3Ji",
  "key22": "dNyGhyUReY6CYVTUGEDin5uWPSP8fCkcG1NNezf6KYMttqkV6Q5a54nhSMUPwuqEQssESkHNqYabShfH13jS5Lj",
  "key23": "4Qsu1xMXQ2p39apmkQhbz6LHaqzG2wwCJiJ6e7zy4H4WrwFX9DopzRkCcbosKWGEkoAm9yTDjBP5SzkejYF99SBu",
  "key24": "21sgHiELqS55SnJt8NK8yHRHH8Pv12gvmcJXamqPkCCbEZ9V8eEt97wuUMpsEgtypbWSuyAxdF84ukQoKU75hMzV",
  "key25": "9UhiGRbCuXZbtHii4y3hX74VD6EYWttChpt99Jtev8BQRZP7aGEEMgthkPqavMwsjBk6cUQPZx5EjTxxyJCubyP",
  "key26": "5kLUGTZ1o8A2qiGBXfpSchPFc7QeFuVM8mBwRTjPkvQ6zyEudEnBrQ5JCLr9cmpUDVwq346ZT7CLeSyi1ZzfxdgQ",
  "key27": "5d7WZB2aPrK7qgzacNY2XVuFMqVedCcak2nyuZhJjQDR8QR9rKWCjTF3h45adNqPv7rMrg3PuPPPLWdZeN6MCAyr",
  "key28": "kRAz6Ldrn9k9umEx98KnPA3vRsqvsK4V6PawtdRg7BRAUMpWaDCkbrazdg1pLqegjvQWw1tzDCQy7cNJ6L6eteH"
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
