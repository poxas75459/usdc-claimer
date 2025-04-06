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
    "4uQZ3i5anDPMCXALsN4YnjyS37nx8323PeSckUCpzbLvsACmY1ZJSR4kwuhQd9eJ6cGE6bfv5h1VcrJjhQabmPvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q8Z8TwavMCzCD5qwVeoqVdEzqfdRFYMqsum4iqxjCCVVWZMmaorC3CCUFqjYAqnEvnitGXszMbbNxXuQxGoRGEg",
  "key1": "4ReNaadi8932vU3SigqHUuygx5Bj1LChs4Z4HUqrUipfdoWn5tzbLVgu8d2973Q9oJPdY15f27cCNj7FTL677Fnm",
  "key2": "4JjJEBDt6CawKoboWSbyDGEXpvzKuMyRAqXoSgCheTSrfM8L9Xiypq8PYKPmbAFHQHbydtm3R7YSYsEXPBcpZ3fb",
  "key3": "QjZzbm9TRwhu7WrQ3ezgzK2VfbnU9LqPiEwVuyz2F3M58qkndHh1pGpCy15oPvd8viPMbH1WXrcf6xqXJ1C8wVG",
  "key4": "4GxFZEfkGbqo6dbgwmfGcXe291EPxJ5uLu1QR1ovy4RFkRXv19UgJaGz564MrwfSnnzgioHh7wwKFXsnUx2V6bZC",
  "key5": "2HS3Rjzgj2sQCHXvKyT34chXFzxYwJPT6WDJpHAxnWcXQEpG6Ndh8z3MKBoqKWVnMynKZBfmcau9SoXkKojTynxT",
  "key6": "uMAhYDYhBgvbhjgapwVnpzx79NtdDykp6cFS4sJLhZx6wRNnuotUkMQLFGDhQv2cbiZiBa9Waa2wyf5UNLxERjU",
  "key7": "21Z6EqJnteu9WswQRiDLnR717mK22qygndCAaYTXE2zbEX5UkYg7KQxAfHaiu2ccFnq8pgTVYCHjb6cAAgjvfxMF",
  "key8": "k4jaieKGusd39ffqqwj6apy2EDrDaNSKZEVeGp1H42bDH667xZiKHQdDG2NnszJLjA86HDm3QazGv2rtnpvHa2q",
  "key9": "4Fm4vhwQKStdYd1B6BUgLd1RPagu793mgREabBkuYxbuox1rkGzdbon47yfJofxab85Jz9VLPCqyssaLWBHjt2ih",
  "key10": "BCjnbXZC9rnQ4yfLHqSYEvjC7PA52LaGMpBSbghB6ihxb17i9hvnuEj3k7M3gYkYXh4LL1WQdzQjRNGPQzV4mVB",
  "key11": "EPRm7dzb2J1GYUUnKBjmV26vp1FKRhxmhLMTBpWCzJ2RokzNBkUthjovF5kZf63Vd8d7WHgtY1Ur5YwPTjNoj95",
  "key12": "wC1uREyCvPTNZK9bqwhXhFy4jfZAH44TWDGuXUE44TZkuWPaq1D2wRvaNWfPzpzHcykXcMH3KmhTfyaTrP4JAPX",
  "key13": "5coimXfHVJo6jekvtH1RgNvXkDSKgxr98dagV3bLK7M8jGwVJav9sePg4UhgNnb72QY2ncCcNPPfnHQmKpgp8j1W",
  "key14": "2drQPhushhqP53hzEowFsGomYEv4hqFHZxbVv7baz8ETYkovbhV4BkM8yEarJDhtMUFHgbMPEM3cK3GsbgocvEzU",
  "key15": "58KFruF8TCbSHhpFs1M9Jf2gu2FztsAzff7rYEc6i5DCTaKVguKDdqJbqh6qcyBexEA4KFCXiiow9qeBcEaUTrot",
  "key16": "3ejMMEuxP1XJUaPXwJvSzYkCGp8NS8QmzmevNVicq3ofEPC9Q1ZTrfNDCpbsavaqRkuBy9rycaNRTEZm1skix2SQ",
  "key17": "46rX8UKPMdNQLV9TKKfKqHeCF3H9AbhRTBDDj8fP8yKmUNPKQPHnTCJns6Kr8p95rf3yUGVUe8kgnqNBEGZvngLb",
  "key18": "57sfCB5QhBwoTr53FpFw3vLeRGa5JdsLY45in4grz3EsUKQkXLWAJ5HTC2AupppRWGbqhFksuiMdawwsMMNs3DKK",
  "key19": "4mfSAXzR4gkFXQbtkBg3MXKkP9LEcy4M1L1bBThavqsAHvUxKfZsUM9tq5NwibQXdJWJfcSkEDSixkFKTwA6Rk8x",
  "key20": "26CkQaUHfctWHnbu1mFwkSbfSM5qqVjfuZieTtCykvvSxdg6RE9YK7KQyHCmeSdyj7njna98Mt6hJj8V14oEfBZb",
  "key21": "4KLmdjBXAPZCLD1bG7tTQ9o9JenYUauWbNsDdz4S9Anpm2nj5anGP1pjxkB61Cog7aDnK34U1khaKoKHBQV7UELM",
  "key22": "5sASB5Z4qkK9dBt3nR9F3mbTFv4FcZWPiHjtBFN1VuYGRRy8YaxAwetXvmTDCE8HEYv8SsCwiwvFA1Nuo8ro87rx",
  "key23": "4au7nCLNL9ydPFUsMCpDpPzgF65rGqcd21LgfNXAWRW1oc7ANz2buQDK2phz1CGq1Jz9vRbHHNfR3c5kWLebD7fi",
  "key24": "3qcyanDg8Su2UAowxHPCfSRFQZtSKJGStjFYywGsphKmMgtJthTMyAwmrgsUrMMVrNKKcYc7CctYF82uGUy1bCux",
  "key25": "3ESqGpLo6NoHfv4dFdo6tSMtDauKaS5uLxWACWEXfRJhTStugiByR8wsQwidiVj6wz367uvz1fVyYx3NBkLFanPu",
  "key26": "5ctoTxunvwKFadWTDFnqzPKTQYADxEckyrRg2HtyghJrbXcp7LmHriBzXGcG7j2kEyxcFsBf3AGs4fmPP4zKDgVF",
  "key27": "5j3YtUCzdLEDXomZdyeARZRymmDQiBFJSAZrFP554Ce2Ktbcz3vShz21KRJxAvDzceu9n6XWauwpykqgpEcvacTu",
  "key28": "2n3SHx8fxrrDamrUfn8XBbLwwYnXU4Fte2EqNisC6vLJ2C6EUfsNBwTymNbpYa9xaLznw8u5FBAf6WWh4znYys3B",
  "key29": "2nKHRDGXY4rMCsrwXpctGtEeJatsC4Eu2zG3r7JSZ5HXRZeT3jGHL3sKXsqGyVSL3fJgbPVzNr9zeuHBEfXJdeEX",
  "key30": "4LTq3Gtzf6qxaaKz6SUYgPGj1oKrzfMQoedm5Vjb6PwWe8VfWX7VPZWrBz9Q6eivhjT3L8erU3zNrvBVt6JFp1pe",
  "key31": "3i7NRfhhfayQnWCC6rSSH74Aoh5upptL2QX3cf8EGAMYgunPsu61YoEGS8mf48HjVdJnhtzY5pYssYtiqmsxC3CX",
  "key32": "59hoGW68Dt9uwF18ABAgLStukCm8Qvt4fDrSg98NCAHF928MSzTpJz8vWMV5afoe67SYC5Q9hsdJCiUxnooHWmK3",
  "key33": "ZsbU5XZQDYwptDRUFoy6y5LUgCNroSrQbp9F9HWeiyYxK1b2ALd6DPVDyCYqSktAXBDyxYTosEBJWrYmyX1y9kd",
  "key34": "4nT6idmomB58CbVKV2MgHZYQqBn2Z2mfHGHsiakdRXDBmNS746zPsyc9DQJX5AgZJ8mf7uUj6BitfU9KMQwdbETZ",
  "key35": "4MpFYAeUuTtcR8nk3sKdfcaXqkdfm43qUDdpBsPokR7HTTHmEkvSgdrTBXLxPS8dxDVSpgqCXK51B3NmpYZwMh9",
  "key36": "4VW7ZzyEyWE3U2xPekhptnHEeUFuzsxbTeLr4rKtePh14TBakV9KCKsCBvAjGnjyDUH6aBdFTbJdnZibWwwK17Fy",
  "key37": "H3vLt4xvGYXqpVSN1rmAB7ook8bmXUwbD33hR8oKB7nhDvHtcZVrYACLyhkd5GCBpWk1fjxkJ8qWELrFoT8k3yS",
  "key38": "9ZWn46XU42Cybw7TioqfsLDCtf85UMBVqg121eVhq5DZeQacXhaomwTkMjAf24yDubyJPaFTVKmt5qZhKRHM85K",
  "key39": "4QqBSU4nZQBirGRJdyk6yFwi8mZYf5Qp8Kfh8Mv4Cj22ziwec4sPqWLgwJKqf7H7B5f6mjSoWkHBNfiZe3mk5RgT",
  "key40": "5vCNTaHTh9yJSpTds1o2CZPDeKENLZDTsJXdjegVdNd2XvL3Edq1ZNpb46fxLjpVpLXfS9YVj77SW4Y5LxMn72bn",
  "key41": "5kq9fuFP5D75b3ZDV6nhyjA8SywQyZJynP332287NYZAoNqok6eS8Fsn62tZWtoxF4csWz3P6SqCSsbqeXqjsuga",
  "key42": "2Gm4f2wVAwwMjz3ZKsPdA7YG5Ua7DMdabZXeDzgM67LcGq3GrTzGcMvKW1dNXHcSuYs5mKhUUPkSZ3BgaCAmtzxn",
  "key43": "2Guiy47bKsWdZ4UxJyTXJpEiTJYyjP7PSn8Y5aHcbeh228qfw6SNLdyZ4EmBUgDVXSJN7dEc65dK7J8Z5AzUMMg1",
  "key44": "3ckzVjjrefLthsBeNGVkGofY1piQkGm6NRPsuTEm96A44QuF6BpxRkPq4m5vt3731QS8eGJbPS5mWkXdvSXQQGRF",
  "key45": "MNFaQUvzuSmTX2wRsGrMN9nwtLYLXtWYNtgnP5YHAzCGLDQjMfws5f8vHPQjAkr46ATKvBhTsr9UC6Xd8AiX9ML",
  "key46": "pRxMbjWAFnfQNhbhq4LdCBzzTTTefYRZpJeLDtWdRWyA1uzNmMs8LjPrgodPRnmj3pHNBZJj6wJEGCaY2HEnkk6",
  "key47": "4TrRtLXKk6ByJX81nwq1326xvSRsDo4hx1MgPMwFNTRAmTwr3AXuVMxTHzJFNa8UNVpnUFw5MUHXvQ7vrBZy6dQj",
  "key48": "5cah43rzaQLyVhBs9qdNxdzX2udpyHVSzryqAJExf8HvCnLWLmBNSH51WKkr4bqGggfaarJ4CffLXqaRmoPVzqND"
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
