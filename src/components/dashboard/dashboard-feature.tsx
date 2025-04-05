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
    "KQoCVXAq11rRCiBn56R3JRZadsbuZNaW23TkSaqgNmXeCX1YqkkAtuGdHxzPzyMgxMwsZH1JwvHrfWGVPumHYaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yto5ykZfadUBxkAaxkGFU3QuVwb238Z3xEoCosXSdLyBgeokWPWSnPaTX8zUnmysEhWsmhBjGX8GiVarbiUD3U6",
  "key1": "3GwPjyjSA1jrEZqQVxhiCB9SWvNHyA157q3GnsCqeS6nycdiyL1aCsf6Xpyi8rnz5ipUDTYQnwQXhFTuSugHrNsY",
  "key2": "2BZn3rwbT9kRBk23jsGk5NChyuiijDyk5LPDsXj2du4XVYgqGsUjVHg9ZLrBBYUemnjZmetoZcdyhP2qhBPCq31K",
  "key3": "3J8Hj7FeJyeFTBby2MvdTRNMjeycS5PvMgHt4xk21gWSo8YMaqPKZnRk7pRDnwdgC4rmigw8dv9pNCqVWEmhgt1d",
  "key4": "4ipvcH7rFhNiuJSqG5fsrHHcKaxHHoJq7Zt1d64bYkhheGB3q6JeK6b6SoDec7PkFqxAFLzgVerQ3AptBUbT2uuT",
  "key5": "5u6EAKRJ52qigZTTNETC89KC59Ppe8ntgbZQPMU1cmJp3gKA5oUhA8psurUFFfbEHdYJaSsuR1bQ5owr7LZCMWLv",
  "key6": "3CsUKxqXM6CN7i2N8mtb9CeuXjkUKWY7te3qfj47XZVeEitiG6FrMTtJbq3M68KcLPJ7tSH2wp7tKycCKqwomefr",
  "key7": "3LSnmNLRm6GjSzTEQ7Y6pbEtmasY81uBsHNLUSSAbX7u5J6vnW7pxYNqDtjHNCGRcLsd8rFjc52B4ycbVRVkxu21",
  "key8": "2EKKAM8ZE23kfSmnt6HBG67DFpfGAC1XbaCzFxmJ7e16QoYMc3h5BPqt1vBDvUqzPqkmyBPaWrTnJSQPLtwGfZP9",
  "key9": "g48fFgoKRPWHDNhUdnvhBYpj6d2csFLp2EJCcsskExNnGZJhy6T5EqQf3TYMuqXbFasEYtxNoUoz5k1JteeUPSX",
  "key10": "2ZCRpkr5UEK9mWhf8Ba2XDD2x56yspT5hxV62jAK3heiSwuTMuNr6zwsHa45qLpnFN8cMPUFeEf6H7skuUv7pJsS",
  "key11": "2mnttRrk8Y2j7VeJ2nkAkvtf9wDyYNR7xSzduezhc25M6YYHsdFAeyGmU9PcqZmXkRKqrViJHHbvRSdupNehetDL",
  "key12": "2s4Gsg7R9M169V9Byt7uJCDF3utBPCN4UjKPmAoNuz7YKMUHe1gspu6mF8xucBpHhX4gbh7KzWaD7DFJDwLfP5Lv",
  "key13": "3t5ePNs4ymFHSynagoFTHMUnSG4ndY4B8psm8kXiQjfb5bhXEKrPoULb6Ns4miyFqppigmXHqjmzeV6xk4Dwe3P8",
  "key14": "2qWA5wPGeUPpDeWJ11XGL7Dyzkm4FBKg6HeJqmo72W9SThSdHeLwGZzVd8gqThhB2QTFmRYmVYHRS3VfcHqJqzhS",
  "key15": "2DEtaaU5MubMYnWfG773GueRSQAfx14Up4gP5CABvGGy4kYC9BBgwW4jLSwBCpHoQjwX9nKrEQT9sLp8FBihdHxy",
  "key16": "mK78TgteuKe3TTExe6cnwPUHXmbAq842cmVBgo4G2SaAsZHhiqbP5CCCAbbokSSQwfpSPpQs4ABtThau5vck9yu",
  "key17": "3CF464pU6v3F5jkQ8bqHvrfC9A7exK8Xx7qu3GKxTT83qya5gjGnXrCADPFRk1TcsxHRtA8wXS577RkYwuCGJexk",
  "key18": "ZTEzxk1qmANax6DG9u7ZsRbtSUi1idvxsTt5XZ8m6W9eo1AyDyPuappzLRFsKk8vTzDhhLLpccY8yWE9xQVKztJ",
  "key19": "2JdLb2weJkwCRUBKhHEGaM6KBzEbcGNyY2LrdB84jMfyfB1YZZpB3rW8GZZasS5jwvp8YDW3EgjSa4iThknZHczY",
  "key20": "5rghD5vUxuUy6yZSsdDxDRGMGhf37mRyEtFMiPRaM6onZbsmoEEvW4RUjPSny9aEpQeDh7D8nmF7pFjYw8S49XYJ",
  "key21": "2Lqw8n1JQ1xLGEynNr7dMMepPF9CEr5PcxxfSorMKCg2SiuEmQheDtdTdPC6DDLZjGN3Zhs3waaUr6Yp6WVAEo7e",
  "key22": "3zTqcMeEJbXZqVYqyDmniHEvT8bbQbnoA1t1xqgLLjQ1WnH5gGpJbxWgKQpak19TMo2Z2JrVFwHNW37abRZ8vNZX",
  "key23": "3kzTPaUzHLXp97mqARUdoAkeYBUfeiLgT9kkxKNeYUwc2KB1VejzSa1dZr5GZzA1Lf9qEJ1SszyTMLWVNXyj9LJC",
  "key24": "5Styi46eCUBHhXbWxM7ddUjuh7gZhc6qUkZsjsS59LdZ9CSH4b39uSgSs467rFfAJX94esrZLi2U2jxV6ZF8HFFi",
  "key25": "47LDGwgkuWpswkAtAMf5wxLcbY3Fc5iCS1zW2mMfZUuCmMRbqdBMiwJFyzqtqKRng1LszsVBP3G8h9zSqAJRFa3z",
  "key26": "ZCvgxAjZ8tqrZG2foWX4f2SqbY8ZNbffZTwmLBvZy8eneqGLaub6atKHgVhS4V9JbACZrGJPT2UA4x4t2LJRTsZ",
  "key27": "i9Who6B9tfZAsXL8FkfZagbwUvQeaWZvz1YYkxCwS2QVuBDNju16sDgFzCppDhnWKezg6PYsM2BRAZKvEgXX1yu",
  "key28": "3FQiBFMfWpCq5CoKvkfmAaTVzE5swwp7fok6dG4Z3xpAZBiQfApv5dfgC7Rci6AU2dSBd4dq78dBx8QeNi6QLTon",
  "key29": "4pgq8qtwszzFgJYh5gpSsG6KKYm4dstDR7pSFLuKZxfBagqgSK1xcHs6KtBcnYTEKsBKbXax5SXNqwFow9ybmpao"
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
