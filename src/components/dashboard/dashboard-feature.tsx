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
    "5EjQfnD9jML6oSSuvjGzc7yio8Py9FUWeJY4HMDe1sd2FSJW5qkT3jJf7mNkdTSWZGSwZfXqhS69oqizBkSwz3yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J2jsuz3ZjwUWTdXv4WB4GX8vm48E83af2PXK2ZamaCUoKFsQb9SsromELykbF41GCT3qCvDDBriiGHjmfmFAMzU",
  "key1": "XMXFhYdgVZh1WYWRvBvMmyX4T4AVAoQz7H5hRHhgsoy1N46GH5sFqHZaVB1e4sadKXhEgzw3P48pGeq5b9hLEhU",
  "key2": "5Mq31uuS8opnbys3cpkz8ciqB26PbNWrHTtsFakDwCENE1C9x6JLbAE3ZJQu6EnKvhr1ZRR7G7GGdGdzdaKCFiVr",
  "key3": "5J2wrrvqcDFKR8gv9dNJ7Pmx2Jc24fYcQvWae6B7BYKGbDAC4yYVZZ7rwDGRNckBzyahknbXKdCVfe5NXJCkytCy",
  "key4": "4W4CeCssqcivnXcEAjHpjmsUVtzc6ZY9kMTvELy6CM4xrUE6yRRq1o1jTJd2KcwMw93f6JFb2J4yZKk7bbkTuX9y",
  "key5": "21ZmAFJLSH9aPSz5ma1YX9zTwWYNQZ9msdxmPzPXT49XY9gpDEhBXLU1CXgyRhHvnfFJxp3Yn8jvY8DdW9d6hwVL",
  "key6": "3LBoAdBAUy9UVb7B646arpVh6VtpNFMvQr5ToCTzS5agKd6d7URb1b57yy7eShZJgi4dZfYxApgYsiybWc77cdw8",
  "key7": "3ALuZxZJeTCKCYntEmmEF3ZSUq6HmT22s8STcEoyYEZBBUQq97CCHoXGQH3VcJ8LoeoW2AM6YerHfP6tXZFEbuAq",
  "key8": "5WfvwZhFBkndHgnLfyuFfKz865m9AuiYSr1AbkbBcUC9u7aafaexJVaJJLtjPag7jV7N7iu8aUEZMQ3fKbp4G8nP",
  "key9": "5GqHr4BwFhUYc81m4q251YBK3YtJrGaj3xH1oTXgNjCefK1rTKCsjUw218scJ2Nc2yMycieMyZLa79JH4VAigdGH",
  "key10": "2e7Wb9LNR1ZTE2EcjDFUvft56dGNYKt8C34svvwayr2wVHAqzs5VwctH36yKgspG5ETXA4FHDmXxnYcZDwKx3tfT",
  "key11": "2dhhtLPTHF17oPvMrpdrJr8R7in7h9twAKEV4SA6tNgChxXoTnYrZGR67ZDsDWKRBDUpUh2JnPPWyKnATyg38wad",
  "key12": "5GAeaJwwZRi9fw3A8HjQKDYjV7hrv1GpchvLTy66noHEkAQZC3yhC86XH6a3jnAn3p57TuDiTh7bE4S1VhWxuUhi",
  "key13": "aYpKCLh68PhvTgVv7M6sPmghuQFk335Y4FfMbUXRz2hU7shgWCuVWkv8JE8gSGv5rpmZvaaeERQHtpEnSKyFVUa",
  "key14": "2X6jovypWye73jL9oddbGop9YMK6Rea3BNwUeUyLE8doymPgJWepg8y2UNJCzdaP1sgr2U7GuQYWYJF4Z3XByFoX",
  "key15": "33kS6wDQcpBubYfASq8yxpkvkQZ3avE7BUxUEVJkLuG4wYnxyhSK9P9b1C3NfYFjZtR4RrHdw47X9S5NkbbFwyWh",
  "key16": "485yj1BrLW8SbCUwHiFrVoi7YPVkX2zjs9NT8jNiHhkLfkgWvBn34Von2srnFiDrMpZ3hLwpKm1fE5THoaeeCenD",
  "key17": "65EXVLL239Crb1bmqnLhDz42bYAs8Kvz5KoZANmrgHPSWZgE15DKcedVWDkH2wu7Kzmji6XiqSL52r3UrKFYg4zU",
  "key18": "yiSgUwvL51orv6vtyJkTs1PUjDzyNRHDD9esU8CeuqmuzDGcXtpDRvUBA2cijHrwJ7gxcr3je3UVKJkLt18JWXx",
  "key19": "2xQ6qwhHRbdSwRiQpxKXtYRKAyakrq7DboPsArEaXmLNLxx4RZZL293BdUGTKvFq12JGjaXkVWbCpoLcugnJ34cW",
  "key20": "322zy1xRXHPphrtEeArWAf6jtkzyXKF27GwXUjMZxqH5kenXsJNRrhxwZvjpvffKtWD9gvWAcUDypRfEQ64Bh4X7",
  "key21": "5Pc5Y8ZrtJDXHrKoD5W5ZXnDP25dXc8yfXsc5ZEuMjcVCjSm6gGwPtzfmYXxC6B9fPq8XfQXq3qxzn1TmeNn8pzM",
  "key22": "Ui56G57RF1jfpgbMuuB8BJ5zdhsueAn1Cek95E1XWPYcntb9sT7cH95y2Zq1A44yFRZ5cY694pUTmSn5fnkcuh2",
  "key23": "5GNupWCaSNpaNRQp4RViHxLhNNhqQAyPCLR3pyc8LAcvdCQCyQQAhqBWsRhxXDbM5KGxx8G7kJcj8myLKp44UYxH",
  "key24": "KSLP5wgfXztvpMchgHYoTvv14AEPJziSNvhhRE5zyUA16CCpyrPkb2juLjHKMdKE6Pvsh5jNcg4QPECdS3nqBjg",
  "key25": "4yTdeAFBMahQh75DcyAvmfEGsw9stYgCgnW29HAHFVfk1UVsjVBJwGFXhTt1JArvqPSpAjZpt4CkVSMx8EFvbLcK",
  "key26": "cbKrvaPsYWZJsRRjFYDNFCC6YwNe865gk8dYx9nFVKfBzAT5qsSfsBtvFfQTG14DGuBjUvH7ujzBFtj25FGHtEf",
  "key27": "cAt6T9VQaLUw2QGFMTppvKj1C7qcjt6BBhfj4h7ej9prub2o3SkzQR5oavGLvJ352gYjUiH6RJ9iwHW68rjpLP5",
  "key28": "3mE6nXMxquG33HvChkvvHS7H3EMgPChHqTBogPhcedUSuudA2SGKWxjFbiB6A4i6jb4RUQxyVjsibEVjTVGn1ve7",
  "key29": "5cfQxrEc5evhAps2wkHspLaDg45tpAVJfWDS8GH6oD4LzK9nUDHwwqV6W6raW4ZCKCbYRpVi4pciBtgDKG2AMWwT"
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
