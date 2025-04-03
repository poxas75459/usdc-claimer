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
    "2xFdVZsNSJW9ZAyUpCdspvq4ppkcVyhWtruASCswRq47pCkLQESLfrfM9mZUpnzYpZW6BtJdo75ycUDZJKfEbDxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V3pFGjPrB85nJEeGnS3QMLVg8YEhep96tSoPEtPJBZ6tDNo6pyX7LTN518d8zuRPLLYd4dBYUg8AaciTvt5UXKj",
  "key1": "3qrrp9eA5iVsZp3JkCJHm9r7QZqSTcbFLSmv37K7SreLg56t52pXKCvnwJhTiXpm2RnaCeetosP8baEtLn8CZFwu",
  "key2": "4SJpkXs6NBcxdNn3yGdWEBHQqSodSgcjHZAxTwJFNjA667bAjo9kCxQx8BLvkkZ66eociaukq1anLRLo6Rxvk5zC",
  "key3": "4Wpf1B8zpdKy2qeKYBc838VaND99Nto12z43HGi7ZvA5jxS3GYWzXz8bdwykrsE2s35dnGxPyzjKb76dbnkhSd6T",
  "key4": "52EZ52hbwwRNVaFD9cvCZx8QAQ9sT9xxEEasw3NsRyTdiaXmUET9NA19dCDaCFZuHehnPCanW6Dun5nSCA1B7xXG",
  "key5": "39GRfiazNcZ8Kn2kmYbFeHpEj2w5B6PdFdmtNCZpGq6Fu194BX3zaPzHmBTBDKwkjCrN3qSFE1rhbNhJ2PvaJtSw",
  "key6": "38QrPRsUy2AUZbaL1zhyEbdT1Uytuux6igMv8tijRQSLUC4VRQ9AcW1batW4uxQXVedvfy5W6BoFM2CLRPC2EpgT",
  "key7": "eo3zZZXjokQyNomvyJSqXdZXe7vMgS93ukAHD5n1ttu2cdqB1NHohgmjKWCtx4WpJYYyruEDV1qec6QvJmu6qeT",
  "key8": "fb6S4pA1AhGNqWdbCdMXkzF7tfmc4dhhP1pgD6F4PE7HpARsXEPcSXCVGV8WDLudLiwPiQwg9RKfPGiFMzSuRGh",
  "key9": "2jhLK6xAVdMzJ1g1pd82Fhd31Y2quEKx8XvcnTFUTUih29ZW3mnf2rqx6wg4TW42fnE6RKEnvRRaFxn31F62V6Qr",
  "key10": "eBWVnDt8BMC5PxpzqWKJrW1YiS4Qdz1exe8j66E8HbxsfGrDVZYczhKHGeMvf7DMkT9WigpgjFyz8W9La1f9W8k",
  "key11": "4o7vthY5bVQN1h8UwG67L6ZdNK2hYEHZCBX7y79Jq6s5jJ4uqwaXASqyUSoHw9NSPeuasX1ZzEtvM58zxPpJSeKP",
  "key12": "4XZpxf6MpdWvPFc8LpL9nVdCc1MUuhoApLZXf84m7iwCUXpQ8Aqg5nyPWFEXAA6LwjGevnhd5guUCkd6fWFw5vt7",
  "key13": "Pw5eiGEH5VSM9hpFmZLcRVnjtBqNrDZ1nYQnQFRCETZHUmByB3UjwXavfn5sBrq5uwbfEA5H6D4N4GQCv62cE5q",
  "key14": "3HdfoAtFL7DPmYeapdsHWEUGKdTnqe7S85z15ZfdjQyhtzVdLejNouFrUQgcYx4oTpYPGkdSeyV9mnbjr9nwpSkF",
  "key15": "4JhEsFVtW8ckVSPMhqcvaoNbuB2ehTCEPADYiCkDHBCeoG4YE25XYsMEU6raz4SMqSETEwcJ8bSzr2yC3G6kzhdZ",
  "key16": "2g4t5186t2zwL3gpt3fT27dWgdPnMo4pz2eGKRbpfanD13PPiR6RiiuyBPMhGwQyfER1zyeEXsf9mPqFJErruKPV",
  "key17": "3ixA2HjFNfLk5QpwyXUo3LrXr4WNn7oP87iAUJBG2FS2Rq4peYjqP43EZ61MpjGC4nCQh6oR5fg4BCfiqa6MBQJX",
  "key18": "x42mSRCcev18oopU11tiH9uzHupFdN8uX2Z2Yfd4v1Z6KaGGv7wZ2aGp4HNXDPkmw6TXkeZLdc3a49ajqobjXmz",
  "key19": "2iX4VCbmLgit8BfgaD1e95LoGHqKSmJtjTc8mk2kd9EeERuBw3TF9Mw4yr68UDPQcdfJwM9QCrruiuCzHAwPSMkV",
  "key20": "2MbeNrRGedSrg7UdhYWvekKTcN6mDkZRchrPtG5Sjahjd2DTebu5UuDyCJH1egf2acinyDJiqwbRghqqrDeo5PyJ",
  "key21": "FSfeUxNvwZCuwVe2UzNHqE9R38HLrMnXmy68p9Ta5uqvD4hX4ABPF1TiGYg72Pda9Di1gBtfMaVdLuQNvBvFuT6",
  "key22": "3exZwr4MNyXwoW7zwGkoLciqmV7wDqm7xrHrS6cXF5uQ7GuamXCw7ghLzTgrCHYLuVnv27rVrbyUFqYNuxauHNzo",
  "key23": "2w1hg4K2Yao2ZHq1xniqHsntxtU2hKvMjxxHUoGUuoeGQtUS8EfioW76JM8c29ms2bfHnaYV68sRJF4DbmXrYAGC",
  "key24": "2LSESLnf3c2q3ERqZUFRqzWHLRvDu9oKK7PTXRCheehQ98qTgd8o7UAwekCVwAf9zth8uBWGGbENqLjf8wqjRk53",
  "key25": "5HAAJ4L8esyiE55Gcy5rbpQjJFNKkPbBCVBSKDzELHDU4wSXSXhQRWVCkTN9fxeEybr7YRmkmTshffTsDnzAUKY7",
  "key26": "EtS9Y4WsWUD6s2W9hkLiCirSSBwqc7wgSgCXj5Nbx8ua5aZY67sa1xULSK38ywUsShU3RzgYwvuYrxNrqJLTva4",
  "key27": "ns9RxYsfRjQDkQUzfh6AQui85vNWSNSwheUGzHbgDmq6DjE6c1miKpqfzk2srB7PYpXT52EguMEKFMpieWccdH1",
  "key28": "2QDcDcXgCABCofoMDMnM9YWF1Ln4zZPJoThZMhxuFB8LUPvbDkX1b9ip78rpNew4sLde1w1C2a4RjgYUiUbh9fbu",
  "key29": "2MJTa3emXWiQ4g6MAw6eGN3WGJdRzMEi7PciUMHSJoioyNJwXqa6cTX1rre3Y21fsR6KdDqoyZWkCGKgVo7pbrFo",
  "key30": "3x1wpJaEasqa6YNXoEs8mf85LZHxXGBhbQ9XAB9Cu8XnkRn31xEv99iq523EqPWZ6nfwrpN3Jvt5PqnNcCDXBoNS",
  "key31": "3j8RxPqmbodkZzFGcLTFMTY1hnCUGvSzcEDuFQuNw26FoXus2QpNEsWedZ1M2HnJ8f7wkn4m3J3iyvW2gP8MT6Ae",
  "key32": "4XRm3dJB7q1VN4PCRcp9uZyExAz5PsJSgmr5noPWDsY7MraEa4DP698FZPXqdbVh6zJ9GNgkFep2YK8nQNEUXtRb",
  "key33": "xmKcfZ9FFY45rS9g6iWmLGFXVrhrMPxP8X4xqrL9y5PK3ng4smmkMjK2P2B4YtcTuWavAojXc2SqzB3ZHuczh6j",
  "key34": "44f9yjTRib3b2yKmtNCEyomRySHRLVTrCpZDecfA89c9UxdNonFinhZpDJgiW9FXGr3XmroWe5LnrLK7jG4aUtHF",
  "key35": "3JHx84rNH6kCn4i7jxamVBv2zHxSj8q3Dkkq7fM3n2aHEuRSu9pxD5N1p8gcGx37iVswUSKoqhob1HZucs2YeL4V",
  "key36": "3mXWvRyt7koownrQjQfzzrPdQ4rztBddaARaNMwa4rTCP7vdjYuWdnMNCQvVy8TqjhYs7ap2mSYRzZRaS1bJa3Lj",
  "key37": "3dBUpDtci29vhD8CmztSJpqW7iPx4r86z1wdkQ6V5pz3dMpyJtjYqjWRHn8Xk4XwENV9hUXvespwqwzZyTYUKKgt",
  "key38": "5wQ6seiXFE7ZbFRCsg9edm6dBScf3xBjytQ5rkCtUNxtusFGKzLVkYyABLixePZjS2nSE6jWWbG6qukH98nwmfVK",
  "key39": "4s4fhnrBf3xxUcfRGXGgxKDYkE9FjHqwexbiv4yU1RhQQ4CS1aZeWdGmyeau3d42twzeth9PMHaA9QwZXDpUbN6D",
  "key40": "4yGsBHKKJiNgeLACzGGgNnxbdVYiV1b5EJGBW9YQnJm3LwDsrQ2928yodDZ3dHQkX86KLK7CYFf53ZVQHph3Tv7T",
  "key41": "5q5gPdNPaLHLUipYcgjfJveEKtb29WgufSHygEqtWfSYfibLzUSa1FHgpJuBfpL9G7Yk22gzRYUgKQMwJyWmUucc"
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
