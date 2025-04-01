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
    "2wgcfhMuYKnVyyDN65KqebRdJC9cT8drJk9viAEEC8hfZiyuBqzpf53gVT1hfWzYDcQDdBNpEDxUEEQkJtajromN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49LRh4whzmD5E1YxdRomduS75NsqAnF3ucUKJRbkGzPH6RERBdmF7srTBesV9u9t9Tda4hSFVWeHDXwUKc7hX3MV",
  "key1": "4KNvS43LYkaDLgBGniNxNrA8NgqeVAHKo9FRnYrccfpTLAa5PJc3uxbLyUGycYvng4Tamra3BXCXZQKX85iiRfnS",
  "key2": "j8fUMGHjkUN35AtKngEJWvAwwNgxbuYzXQQ5NsHWonQTXcL8Wv2ciqBCvfmxuSPN6rKgGgtvxVWtuiGe9nVRBgD",
  "key3": "5Ko5cfbVNqShESzAREpTLFwYr5ZUdRin28mqu9zkKtYiKe8wpgd2TcnVnGkchMFPYCiWYiG8ekQa8Lco5WzMfiJX",
  "key4": "4ZxLRZDmbx2L2BCJ8EGVonzrMAnwLEVm317mtTY7qZBa54anrBfYHKBoVH4zKoMLi4GtUuHHF4NemjqD5uBDjG9L",
  "key5": "5mztZyWmXAog1nkjz4cf7PVX2BvUVNZA7TsorMcKhB6UctLzRYasEAzyffjDFrST1nJYo1dteApwB87Er17YFAmp",
  "key6": "4NnxrQHU4Cwh6XdkJDSvmumVAk1kUFK9NCQVepAxfDRixFVNdwFZ7azYMjqMFkVrGybMtZyBHf4SZv8H2qqLvi5z",
  "key7": "21Famh63YNVMDtK1WvU5yB2env8Tug9wPmzuaGpeA6yq3s3dA1iwf9foxJynmUZQWNgeXuRDdk8TFbrYZuAhVnWQ",
  "key8": "3TJgMieJLozaVQUwXk5swFokV3twgC7woSCmSBKwpAwvSMyrBRidLEXiUMw4DNcKHraYzoZ9CjMLGfVwZVnPQPuk",
  "key9": "2MTPewMVQKL33py3djG3WUSjiK8M2d48YMLFNTnw1wNBBWXzQb3mX8f5CYUqeXDdtU23Gwja74B2WapXMhWv6sgW",
  "key10": "2kFVNiZyTC9fXsBaon676aSWvCfXy46sWykq7zJkUNFQnuh9rtiSESePhnAhDnve3PZaU9e854yA64jwQZ9Mg9iT",
  "key11": "VK56qLuz4BFVQG7aGJQiebmBE4XqoPNVhiThgti7xzSbeh9fRSrp8dK6aUVxkYF3Xybrb4XGfxtVQrPSzc5gQQF",
  "key12": "AsFmfMYUMfHtfZjVa53ctysKK54neos7kD1ZShr9eESAXWFQRT8bDisso81NMscGasvpYmfnQCNSeTpaRVKLypi",
  "key13": "2fbzgSe22TpWUfi6izP2yoxddr6SRyGzCSyRxLCLMdUfGhRoqVxDjTS3jdzRQWtajbfzXvp1XN2sfB8DtuLvgRvH",
  "key14": "ro9N4Fs8Grzr4f8i2JY1qoftPjmJk1ShtNM3wpJBDpYmQo411cqk2Nz74p93QQASYUrHrHnqKeqKdNH3SkwQLTY",
  "key15": "2AGkCUYmdZSzryqUAAHifPdSc4Xa8m9jMRHwBxL6zbcru9DBZHMQgGPHHZGzdFkMpuU1u4ARvpuo3JbDoV3WC1HN",
  "key16": "xWEEzbYYXxRb51QRVfRbZyvNkrkEzDjbRmSepsQFWNZW2zm5AQL4bbSxMgCHhFZVJ3WD4JXLu4KLaGgi7PHWdvi",
  "key17": "dkV5rcp48nzYgERLHr4A8fQtNnzy3Dxuo55xmzRcNJE32jaYypRF5kCGcBJG7pCJmgfTiCW5x4CKcdHJCgYux7Q",
  "key18": "3y1dy4QcdDNZFvpEcMEFj7ppxfWhsN5JCmLc6GXDWbT2qVbNJ8abm3T3LxDugAmukMb6EfsMePB5zVs4yUmTCVeA",
  "key19": "3TpFirZcNB9qkLrg8KLgpFUwmSQUcpfxnKH4aQEAS7sShWnj968S4S1bGqbJoHWLhq5mVnFtNzgeykgn8doAQ65Q",
  "key20": "5mXosvW1rh4Gm1XGhomQYikBQckn2nEHuYCng6h9CuG1pymsGpQL1kCaQKdYxQHpJrbVPPbotsFNkGRvUBDj7y2c",
  "key21": "47pe2CekRrp2UqqwLjoycfCS9iGUWxcuU7Yn4QLzAEZEMoJa5xYKhDh8J9px1bqSGp9uu7Yr5WRjbqtTbnWVvXU8",
  "key22": "3Rahcu2zEB2GR5VqjBtNV6FF1VTEzckSFXDdLmBPPsVpuA1V4AypM9DkzQE7xTSzMQqa2CaEvPk3Bvfbik4y9hXF",
  "key23": "5vjoUWGLxXkQXsCDC8aP3kLGpYYiRRrnmcqcjWkfD7zwdQjx3r5P35mWvBxCTixdRNix3ox5AGdXYNeVG5My2E9o",
  "key24": "2yLSp4DvTHzfBJepaK31GHe8M5ZmiPUyx9Uz3WcesbvGJKzETyzy2firnELBogPVb1w6q964EiyTxyf99CCkuz2z",
  "key25": "4W41KM2dUscojMki8L7HTEZD5FG5v5cEphEyDTTKdpXhhtrL8WTDkFWCy7gwGKfwAMdKXgxBKqdMg6CKYaghY7Pp",
  "key26": "3mZJNjvjveJ1pGqLNNL2GUviYzKZxPwCee1o9srC5NviSUrHgn4YgzLfBTz1bQPr8PvARNbAcmJrBVrmsUpsapBs",
  "key27": "Lz4CBTM19w4FpUafH6MDGEQWHumt92hWcdAEaRs1DiWPm2ctB7dD94Dqt5VQhwZXZdi67oHJZPYBCvgzg2PFqvB",
  "key28": "N42KV49WAQ9Hs2sYy4kWAUj5eq8TShovdC9etfaX5PtNVqbg7ppDBDub7W7KQCTRmgMWKmhFNvgZfdkkvm4438t",
  "key29": "5L1bTLR2doWYT4fXfjZFoFFabXWU37AXDug5u329FeM8MBMTzcEt2XBPC9xgiyQVz1FZrEsYgMCgnQ5TYzXwiK8Y",
  "key30": "2sVdacSvYUEdPgkr8zwJDYNyf6ivuw4z9jbsvEbpjcZUQrJNLmjTc4a3tAwDrtEz52mLGEMBQqehXPPqiv6oFNqD",
  "key31": "2tppeHHgxG9v3MpxU2BkCNGd4WQG9oAj1LZhWDmt93yTgr6FQu8ZJWQyJLt6UHF8Wj1cR28NC6oh3VgLaMxzrugQ",
  "key32": "5eis44xqcKVD1McpsCyea5bC9hT6sG5MpacCiPXH6owGMyBpcgw8cFvPRhNJqHxTjDHFpjweP6thdwMGwtD4QaB8",
  "key33": "2gquGVi4qw8p1NR9D2ZZoqkEmPR9E96CbfxVkiYK8sqXBXwuFii9QypzoeX5c5Wy1MTLr9E2uKDn4Rt92XNnxTRY",
  "key34": "2bVrsRSnUSRumYso8byky3wMsp7Yyc8PxjecbVXa8XiQiW6ruVWuN7tTrunVaXhoXUs3b9ELUHwEKU8N83odFDkK"
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
