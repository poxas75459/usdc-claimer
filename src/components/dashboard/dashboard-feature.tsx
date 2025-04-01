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
    "4dgi7nE9HE5AhqAKyn6puATETWpDrYgL9pQfbR53q2DYuiJWNbZZWYmEywZzW5DYpHV2DAGCPFTfikDnat3UD4Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iHUD64RYc8oygUst39hrPkuBLgXTeDyxNaGskpFJ8q7a7rknDUhZG53bpX1jFavvMXhyB5bQzVtX7nvYHKz3sQU",
  "key1": "3GdWHKDLbXupsGH9ZPTwEanBvkyZ9fh8Z4WWwdLhFmc4xePHGruHb5yWUrbjye4dA26EP8sDZ5vZYF9A8VpiwBu8",
  "key2": "kmXCu5uGEeZqaGzZ8FHeUJdoBoYUALBy1NhP3C4VVThzxVK7trwBYenbCX9baX79D4imeSzSfSJAfhHJ6NoZqGz",
  "key3": "8k7pq7YdkKUvV5SgpvQNFgv6JxeMDwExFHes3ofnFNFYazMXDx3PicqXYzfSaACE1kQCZvVxXupQTJyZPpfHJHq",
  "key4": "3bE8rwByU8FiAnDUEaYGDSG9wmS3QnH9VTX6mXyDv9putGicNfUUst7z8fs5sxs8gnQVW7HJi1KuAz1MS5HwJRqu",
  "key5": "52SAwmebcdgJ488zUFioCG8VcrM7bU6QFWMrXqJui6rJJDs5dCYnnQaADS6vLyNFraJGFWEkEUrBEjetVCzXxkE4",
  "key6": "17EusYAgGP2QQjbr8cXibkdVrqkoycVJPEXnp9UNsm4KKQR5BZqwdqz66s7XoaL2bm6CXPurLec7621YVXE2i9a",
  "key7": "42AiBxkDBCocT7Ky6eiSEMxq3nWYLRvLgpKsxgrwnv5gyMD7qg5qZn5UMjqP3DhxAbtrzZz2Vn8VMV2HJpvab5BC",
  "key8": "E1eMnKZYkErsNxNYCtnNohSMy22cvpsX7zkQemaHiYHVEkFQZE42Uh5DZv6zGTCA6hk9MRGWvsgYhcNGea8b3Xb",
  "key9": "8AGXapCaxtnhYrfHdMZc6P5fohf6kSmthSTAzK33BDWfAP6qAMyBV5xwEM6jix3ti8sKL5SmJJ67SKgzx5yhwWB",
  "key10": "48JCrVgvxwEAHUKUZEorRmXvHiAd4VkeA3RCGvD6goFV7hnJvUwbzqggqbTdPBwvGWuYviBDJagTuHCfWYU5cGGM",
  "key11": "by4MS489HXFmMr4DTPAKQhG97fabr5wmxz7mFvTBDk4G9XDt7Kxj2Ru1ePovzS9QzXHL8KGf5LCPqyZs3HmtLRC",
  "key12": "5RJvJqALyrLeUYam8vrEkx82W9ukLuYjfcDeuhGFrnvTNrexvACUPW9dtHY5QvsAavCH8cYCK6kQkS4YZkcPL9kS",
  "key13": "3vBbTSK2uY8zJPk6hWD3fecZXZXvUGFBUTuVhX78nrN11aFfUpRxo1qVrLtmoE8uGY3NDfLy9bsQX6ZjHYUG2hCf",
  "key14": "49JfZw3Hn3V5edy1heX7VYga61KmP5aMCEyRNtaj7BPjTW7X5o72g8g1TbJspmzgcwq3mUSHwTAXCGZfdxe4KYLY",
  "key15": "5yuX5SChQxe9YWCEZd1Sg8v9qzqomRzdixzUevaBnoE8zDXmpGemoXQ8GxqNcAZ7rff6uE1zKcVPDDEeEFCExuWV",
  "key16": "63qyHVmUdoQpiDFLdhD7ta453hiqFb9WxkLMR5atdfvyXNe9oDRhNYY97NgqUDtCaJhKJz6eiFSqDssc2LpgSxrK",
  "key17": "4iYZoLke2DCutZPQdzNx1udW1y7ePMSCfM1uKvT36QKXCRjbff92rAZZMK3PZat57qXSPfPb2VAhNn3iWn48PsXw",
  "key18": "3XjPiYnge4B2y1HcuGzRWWv31V8p8jYAPBVxbTcs4Xkbops1xveAi2846vkvUV6KP9vR6Y6CUCLxSQY3RTvv9RV6",
  "key19": "4VrVshCdVJUdCrUCxYYyfg7cq4oENga75xYf1TrEG783CyvMJEqyVVZEFJyreV6sVRHDvVbkYXpYzk6Nvbcn3yjz",
  "key20": "2Vn2i8UtD9PW1eyVVbghyBkoiQtnZFGNuidBD346P1mQ7XYEvDRs1SZcHVA5jYucA9e7qtkaPFQmLaU2pZ1444SJ",
  "key21": "4bvEjxARZtKZoLmDy6cEAjnsxKsUQtCA9BgPCNEaAnBpasvCeVmEVL2YRE7V64AQ8DD1HuW7dXV5ZdLPVeJm5Npg",
  "key22": "4nxNRArcKBBQyn1pvPX3MWn45RcoBHWvxPEDTgvYxHiLoGpyMsJ4sAZQccsyDfa5LcBUvMh4UCeee8b5aKmM9XCp",
  "key23": "41e2Vbd7mZoFhgqfbDxLDadQFXe8ZRx3zkT915aXsotkx5DCy2jYNdKb3S3HeRK6qtfBivmKGYBLYDi9uukptBaV",
  "key24": "2GWeQaiKQqKxhEAGiSEVkbSrps8e3RVzG9bveMDT9XCxJ3g3mxfGkFQLHhBVmggSLyENbq1zcVLmcHFSxj8xbWJD",
  "key25": "4HoWtZa5mgesDPSZRXJdwc7fDiW78C72YnMMVsRgeP8NxFv49XAFzB3FTzR92B1AZT1hqBhRb6QLqimqQRQT5tNc",
  "key26": "4qCCGP5i3gKYji3kWjn2bbEw3FkzwVUa5DM5MzQQHmJ85maBaTfyRNNDBvxcjDghSpyD9NDFELft57iGXjHs3AMM",
  "key27": "4zr8dex5otLaTQfXTqyVhxHGyALPvECu4UxSqXwHM8jVkCwdUxvdcMGaq4ocJUAVRLEFrgLzPZ8PR8vVkmS7CK4T",
  "key28": "XrDsiDZ3p7f5yme85FSZFxCojx4GY1KP88yFKLmbkyUNtc2XosG14kLDo1UceSPE4oqKuETHe7xs1aZxj8tgsWC",
  "key29": "3dzsrhB8gUBdmeZ9duk5ZMNSas9zzpptLaTeFiQAWws8wZetfeUwx5smUqAtXwPcwqpsnAdZVR34uKpJcGUQhV5E",
  "key30": "Bch7uGMxK3VkWVEq4L5PRYWE1CJbBVZwaZSLCTjSvTGU2UYxDC3T7DNtySyALfXY5pAxPVMDfSkXbWCooiFwymr"
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
