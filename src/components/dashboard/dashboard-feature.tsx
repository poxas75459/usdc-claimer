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
    "2B7fkScnixhPHwiPVPxi89zBVHUvVdZB67vGxcwsW7pRGTNRKdfZRCx3SxGkP49DvbTvmTLoxtwhwttB8y39fD8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24kbjRomMAJeV9umYrEk8ww7LLsfE1DRkb1EdRwareE9iKHQvdvMvfyDiFQWDi8iDEHfts8cbcXLwmPfdRT97msL",
  "key1": "5aT6uWBiqdcUMz6maaDJcZ1jPeMkfMhU5Q3E96AsPJPumw8GcTaFmXV8kG5vAcn1ikstnhhsqcuAr2ahsUyfCE8h",
  "key2": "2wwGZgpF4X2ycNG6XfwkmnVMXvcLcHczJEu6uYAXZ7srsdbzEB4RMxx4u2TCJQkz2sWoBxzP8818BjJWuSF3tqx9",
  "key3": "aRbdB3o7brBbD1agRuGqnSLcE5Kh3MVV5MjQxfbQTPEpSSspjUr9NCcf1T9wG2SNaUZ2MS72C32z5RRoTQVVyYX",
  "key4": "4ji2rsyoytPSWvycMm6Rhq3L7zb7naro7QEyPyCtq4mddYFgyfaJomGqZUBms8ydox8Q3g6TAoEoX1AwexUx3yCa",
  "key5": "4gkM5afSbBA6V85foUoZ6jm3bJFQ482uGyhRmcyqTBkRGNCoWo9StYqJhgpdFfHjQMNevtmk42yYC6M6d5HceZ9F",
  "key6": "uTmTchuzDTGeq2Ha4R6ZjjD6dvxYbvjbin8bYfVNpuJSFLrzjx8KnrfphtvpabLoNSrS41KQAto3qUaNhZsMghD",
  "key7": "yLquKrf8omSMdfAi67ja79R4T7fw8qjc78m5xmykhYw3CwnhxwVCK6XsDsvRxKUzaaUT22hUsJpaF12A9Rbm48r",
  "key8": "3Dyb4LaQLFiwacv492H3YpqyKsSzK1bTfCUF83A3JjvwYR1Rn1KB8PgugoNJ6FJWVPxNrb3CVB3QQai3QZxnvqQa",
  "key9": "WLJJF8rL6pRxvfWf4em9dbuAt4cvm6CQoXi4wn7e9X8CwRaHqotmQ8ahruHSpjoccmUm2TV619QwbZe39kUfBz9",
  "key10": "5kXRsw9WEdJzzpQWYVEjYZdqKeZiCoP4y5eUj2rySBB2EQ5qWWyFLprDiTUyJNT29tTjFgAYU1mpnZmhyYc7uNZQ",
  "key11": "2MAyKhLFbCzLQWL2QzqPTwG4SmSWgeHeLpQcnAUzkKw6MyBVxFeaqKPnNCduypE1Kg4Kd3zDc33GM2T8pHBaNyte",
  "key12": "2boLtTHqZvqvBz7bC64Z4x2R6eXF3kBPWiL4wFHUEHAjJ5yrUQF4PBYoNUwXxUAwKsoB1XxCezhbtnFCu6XaKT6U",
  "key13": "4BJjoHXn2jZi6SZrpgBFzh81TjiTZH1jUvQV7GdZTr2mZwcdSvPzzMKtJNR7JZU958WE2hipkq7njpWKgGGgA4uo",
  "key14": "551TELtz97w36oM1DKkELworCWPcaCyAEnmrjxuGUQKLzqXY7Cm1CUVoDZBSauWdEG464UZxm4sNByBwFEPdbXLF",
  "key15": "4iygfFqMVDAGyG8sZX9piDptBV78fessWvTetT5sPXksyc55thSEnWXjpNxqp86RjFvnyMdSSBJpwRk79s7J6Dfh",
  "key16": "LiD2hTDLWWTrDBk9FU34YXHN29GRb1FG5SfzSPwNxVCAtGCgy41J3nX1hfosvfysgwYTt4R7crgCUZvJVdQSs7m",
  "key17": "2br5oeRrat8cpTcYo3hNuieJtTtd7cNFmyGjxrv7rxjkUes46hL4cEvTZN7C6Jm7Zxu4ZmBHwrdwJFvAc8AemFoz",
  "key18": "SuFbhbkGZSpfpmk3F4LRMpuZGqmFhg6JGhNb5oxJEKZgJHvLFijuBT8Fg2Rj3bJNaKXKqafDaSUvGZRm8p9cb1q",
  "key19": "5GwgU3EG32CtQKruZjEBNBQbL5RRRrA6GdVVhxs7w5v6Hc9Kq47u91vmwgVyYu4wHp3xHzdJPwavgWR7KybkTdu",
  "key20": "2TQsL2ftvYKJi7n8Aw8c7BepHAVCVuQmCsT3fHwGU7QeMmb4NorzC64obV9i1VVdwTJV82Xp3NATrgrCyfH2h6TU",
  "key21": "5kXHfjfUJNNAqqdRpKXiKi2uWStffB41Z3LwcpxkPXjcSVXRPRv9XFP9yfnEMKJHVDdHM2MwRyT2x89NKtHNCAW2",
  "key22": "2m76rE7yav7EY5T6PyVK57DT1BMTPqBd9NkSntDmk4ZXgtdqiHHXa4Jt2hnBXUakyUBDJjbYnqkQXGsjCmwPkncd",
  "key23": "5Nh8aGTEV9ozC2bzjg8LiVCFcEd1KQnb1eGvFoaNzBqGBohgcPiowLNFdR6tpweQUUUYaiE5y26fjJUH2maGUhT5",
  "key24": "5bRQQutkdRK8u35JrKveymZBZ3een3v3PEhG7Zpwy5XrAz9tC15tE8PErMdrqAEcuCGv3k14zvQwWdUSAopi1C7S",
  "key25": "2ArV58SMno1ZN7xhyNdJeHQMg1jANV5XcZbFJk8RQsXR61QwGqLCrvCgsucyDC3w8rhXTdXpHpBBK8uafHfqKykr",
  "key26": "2oCpmNsTJUuofQUYf59ddbMDp226RnRjwnRXVW6hEEK5wZMaqBjC5DcQmx5cp2YVCdCzvPmjuMYUtCgB6yg7unwR"
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
