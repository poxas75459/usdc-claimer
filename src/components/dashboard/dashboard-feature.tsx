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
    "61MNvR8HSWHAYmToG4dPrrjBXXPQUvuUSUtpyZmNzDCmy1KZcnk5qrK4wF9ExM6HhbfnMWqYdr4rkyaCST5zyPN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "moXCLAjEvBsiaLQMmeWA8K6AK75ty2xQd6ysEtz1vc28K918WTn2zvj3kmWAzV5rd77UdqpSxB6SRYboLGV4cwS",
  "key1": "3G2p6nZJ2nSdFt9CW1eG2uk4r3UYgqNC3di3Ghg2xhpk8HWS9pPL3eDKMmkZZuGEZ6kwNJhKTc9qRJALPmYQHjrV",
  "key2": "5AM49hRrsN5DbPP2gsSKqLecFv9aE9zU1iGmtXoWhKhn1p3oTkm6T7T1WUHQUjmyM31Czju1yibKxLXm17S3azw9",
  "key3": "4SBzWYt1xtMaXn4eTWMNArer5p8u13w9uncL7kZ6HYsMdbQVfmmG5T6QzLA2h63x4xZTdy8GV3XBseoSJwEFptLy",
  "key4": "2xoXF1XTt31zyDm2wBCvQuRib9LKUnud97MHoodUakNqGAndEJ6e1QULVG1JWQVt1tt88CbqGkopuD7LJbcXAVD8",
  "key5": "36Z45uMSCzwb5X12HZBm2ni8rYJuQ2tAK8N7NdLCV9VdRQU9Xr5HhtYhQt7NQMbrxXX8oLxK6BHvK6vA7y4v5eU8",
  "key6": "3debvg7Df28dgNS8P62v1DyaNYXnUpedzbLwqUqp9ziyrQRMTc3PPGBYuiZw7JpkPz2zSDC7f3PNP3sQfp4XT9g7",
  "key7": "XWXnt6gDD4rhCUPpoD6QYBoF1QdGnPXG5D3hLzKnaeBPj6RCBHJZLR6Vaq2USuTE8nA98XAXDfmPzavPkgQXWua",
  "key8": "3FCz1HnNQvgp8A5Fsdc775to6DeYf2qTFLzB2UK4kPzpW3wtmvovuor8AWaSs2eisTmYGGqxhn1FQt85dqtoCmQk",
  "key9": "2gydS3gNU8mcTNcnmcbP3zHtTAweV5emmPLoBxBt7dDwBHkhXxbJYNW425AfejdGhDzVSad6wem2tLpt2gBk3QB2",
  "key10": "456HepHeitLitE7wyFCgYvC36S7EG2KhChkjyWMQLFasWWBRsZbLDD2bNEwhvdwnmtaAWeqfDn35P5uCMTgAnxw3",
  "key11": "3YPsBFui7Kyx1qiyXdtS1zGWn7pJ514cuQMVwWu4mLjEyhyTrLd66gi6Jgdf4Xq1GHGBYFrQq7YUyLePge13cf3N",
  "key12": "a7dTTXDNThX6gxgy36Dwe2UEYnKjReCKW7Yug8op2P7yeW6Ff2jBeTQSFpfoepFdMf2Ebw7ZEBFGjpTd43CNJVc",
  "key13": "4Zpqy5sjZRqwk7J3rpWcVENAAPoq3EjRuWtyBKpadyQ9DVjreuci2JRXH2psjvRxGWU3kQtHvv6qtXNabx5WTCgU",
  "key14": "2t3u6nqXpdGKbdWdpjxqB8BRXVkZaZKNPVsrWT8U4RvH79MEiE5vS1rqa7ef69phfiyLcbgi5jcLjDMjJ16Sprtn",
  "key15": "3nqrLoif8i3MMa2kgDCPKsFZhWEBfU3mCdPKsS9bWkwiR8yCt3gvy4ouoiPoM9yGfyhKh5vxjK6iU3VMP9paShTS",
  "key16": "2bVC7AGK5n8twCd7VLQWRJ6wWbcPcMtFuJnX6vHeGQL6V1k4LtGGsfXdLzuzDHidA3rPncVvwwuaEZQoaE345QNn",
  "key17": "66bKkbqNBD2ZBYHRxE18cQdGTQ4vrXEA9R1YU8gxHP2xhFtmWE1yzLa9TNHVXJQPPQ3WxBnYzdQULEhAjwLnyBuh",
  "key18": "256YpH8ToeoR3FC5Q7rPfaEgBhbAZDXjFXMFjSKuFHGjpgreNYihJPdqoxfXMsYbXVerfjHdns44ZEVaF98kNExX",
  "key19": "aGjK1JjcsG6FGqC24whdAyBdPYYaFcWLKdhLpEuwwEhNPWhWzqmxXCN8p75sUmAvX35zbWzzMsWTxrcGLaMsd2T",
  "key20": "2ra2aB733GTvYRAuQBkk9JVjPx8FxKDNHNNaqpzV8UnstfGT2DMvnd1VeRHxodoxLFUa1TMywQHWL7fNXXjaDGNz",
  "key21": "2s2tzA7t5yhN21uY1FqtFe3ppQhiDg5TLR5HSFMNq8Gi4LrGPjDduKFnAxFjYmggwVCr5NnZ1u8krUESSZnUcZnm",
  "key22": "2siHADnviA5S9CxW6XF542weB9ycdtucpWsAHUWKrADRPRfQjYzsouU1BGe3mm2bhKDnmwbhQCJ2mBS6yrCCTDGu",
  "key23": "8F4sjCML9C2AgS29UCKvnr4iPmFbbSrw6JjBHjVrmG1XXuqUcBxBdpcceuoN1zQidCYgjmPzESHCG7nT2yxXVPZ",
  "key24": "3y9AkWUt4zqxZQoJhRS1mb74L5b68fhRvCxqVx8jJsW8LX755MCbFMp6AfyqT53zxskdUg3X1Lze2nE4cxt9Nkjj",
  "key25": "4eN9HXqVcYDmMWsQFi2GqVaN5JxCjWSVxN8GXWesZB8wnSSx1H5fYQ9VBH8m1edZEHd6B8RCafuxNxeCSjbgcwLM",
  "key26": "3uXiqmfyew1hFasxNvBfDL4tWMzMGfnyGvkrUhKoSEbc3MVfvqN36NQJY2g5Nocte2jDyqbmJq6esCHV9aMvr9H9",
  "key27": "2dKVNqSa6KzAxnPBoi5SspdnBj6V7H2Yp99ZwM4b8bkQv19z534qLUCExFnkCRQhR5ydCnpWp8FJJn9yXwvPL4e5",
  "key28": "2fcsM7GrKYTaHdgk73r9kn3Ro3aYz3nmqVfuL9DGX39RYQvp5Y34gWWdzivT55cMp1ttE6EdoZTzpF2DNLxcUuP4",
  "key29": "rfJDQCCYWvoHU8nYDQugtUpFUt3i3py2vVGhZa6BernWiMD4sgZxoHqWoDV2h3pKfkskHXzjamvvxdVyZL4DEsn",
  "key30": "53W4abgLFoF5phMQGqyrL8cM4CbR8VMyrres3pLauLdN54YeoDKtFvNFxdB8vpd6hJqqrT8BUPG16MnWtfXQv6jG",
  "key31": "3rJbt2pLPPrXzv22BWet2NGK74w6EDkMqiVmkCkcGy3kaS2UaJ7VPfbPCigV7AVbuHGRaFpJoBDC1UB7uRTtADDL",
  "key32": "pzoAapCgFLNwUeFTDAG8QPLqrE3fWYr3LApwB88PH8JTzSTetsDywz7Mnu56BL5oDuy6bBXzy6oyLZqy2V8ULxD",
  "key33": "5rpHPTgts8n91kArpymXsChX9jcKKrYqLBj2rtoWB5wkk6d2HskX1eZmgJSt9Ebh1gsrHrobY93wfeWgsuPKCrTf",
  "key34": "B6Ju6x6pURfitrcF6K5cByh8qNnhJW5yas9KQ8hTD8BEYYBfT2mBSGziq6GQimXtwqM83gRoZwmiYmLpASPX4SQ",
  "key35": "kVz9HsiecKWtC89KfU21i17QRaEgzSSug7DW7g7j5PQYf4Dpx1EVaBWQS5N3o9ydouqzFTeteutvny62B6yDXS8",
  "key36": "4vxyVSyRH8pJzP1avx4kGdwsmCo98pAQwMjaU6LeRGEt87H3AxtQC2MpC3g1mmUAwLcoMv3v9nnDEP8uKiUicaH6"
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
