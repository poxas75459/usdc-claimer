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
    "5dP6DvGxVaGx7bw7UR2p8XnBg7dJNkASSEdpvzmDpkq6B8xG9CE7FYW9EMUsyUCKDEXKLgnMe6pxRNYLoMT1M5eQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oXsuT1Zi9sDgcJr6n2un19TcV7dQFkEoUgmupwUetzFaTbxKbyvaVSNN3qZvfvrejzuao45sN42i3C1bdr56fVW",
  "key1": "5LvCLAaW5YRG8M9LgzcEBmFaTWK93hEy83QC6aevnz6r5e5hxJieN4ed38m6EHEdU1edshnXadaymaq7SaqGsKJa",
  "key2": "47wwng9LtBTk9PvVHSznrbPxpx3iPGuCF1zibQP8mTKGx7MKETvJaqCJMtSm8ZBnekPv8FkX4YM4G8p8eD21VzFQ",
  "key3": "2AS4EvDN6qJpkHbsK9xvqnt6YPXbMGPQcV81x1HQYQRiAgmCwYj62CMa5PUy9QiPpXsHBDjGcKszDrNdKU4rV5Fn",
  "key4": "62Gy9kfHg9s3hdK2fwgtvHcEHrcdYqry73G7GCDbGA3qE8cDk1ZV34362NJRnT4Do9YQGGDYG9bFnMMGdYVep8QW",
  "key5": "cKBgGazFWuTfQt6SF5YeQnq9QvHLQbVbE2DUb2fkWULMEcv6RYmQFPBQisdacyHKRBC8dtFsUT9C34uuKj9b6Dt",
  "key6": "5TmitVcqaZdxDiRe7SpfBkYD78tih9kmS9SrSV5dLxS7oAAuez3Dhm3Gysf4u5WR7VuvTcZwTybSmYiDCxTLZddY",
  "key7": "3kN1RjAG7DarefrC6846dHuLN1vTTcmejGgrzqVwg7wWwLij9B9VqAPTMK7DPXVsaWCtvHsD7A9VJtCv9vU7ppo1",
  "key8": "QuyknNz8hZeAWK6ppRpDuq1EYYBavoe5UKmjcf5Eh97iLcG5PwsigcCz1rw1Czy7YZ3Hmbctdn69HZWEjFLBrcf",
  "key9": "iJN5C5XAmJBB96BEzGPFwDoj6Z9nSue8RYtXnejzfCzRaByYyjdkqYYZzptE8AtmsTiiMZNj5VeWzhvrDAuqVin",
  "key10": "21RB3pHqC6tkxAxmg5phoosoqsUwBepD7Gds4UrAKAkMHuBJ6egiMkCajfiExyfPA9krZhgDc2r94oWYhdhLAGnQ",
  "key11": "28KR7j3rHnveEMUXK5KiYamiWsLdMRPvxyLrktxGsDzadgmXXGyGEzvx68bJDjxGxNagF462EfB3e4TcsDRmA5KS",
  "key12": "54gmd75JrHqFETCWDASys6gCn56R77wkTMpqJFxZnCpQ2f6askPty8EJedpoYqnQLPF8qUegYTexiwqXsfKnqzNM",
  "key13": "3ucCxsuWJGaQ5z3EQiQ5RhRaqKmcVFSL3ecyoKRiRXnQszZ8TRPgxWFZRr7q5hJSVDSGQvydvv1ut3snv96rid4o",
  "key14": "4eR8EJW8eQFn8YJdHse1ddAJvdsVw9NB8wPFCTWerftmjZZwRNkiRXKxmdoTCpdyCJoACLgmRpRjufA5nuNoscyA",
  "key15": "54MpLuhhiz14DGiPT6M6GXZ1Y6zfPbXGzisDWJXfBxzo6XW6fYxRiu2awMnN3Ub1t9wDer4GmPfU1a6rt2cwBtKN",
  "key16": "5k2JFzJEJJmTDY56sxozKKNnUiuT6T5MuRWmdUXeJncgisGmZibAWLA3zAKn8x6MfXp5SPcQD8g1ysbDCTEFxRTA",
  "key17": "459YyLuBEwPmhp41F8ftU7MKvisKwb2QCex2rY8FZwnS5S9M9y5SKTbcyA6FoTzgWMVoaC2cDw5THX5V22WH3ymi",
  "key18": "2MQpziJ413Ec8TPe4rnHLHwhHjnqRewUbCGwRvzB3HmpT9AeSJ4TEniWVPBFDpyTd9tkXnFKVkqAEV9wEVSKZBn",
  "key19": "2B8yBdT7sQ9fVBCgrDik8M2m77gN1As1F4DLR8unhB1LKvJG69iArYnMAVGQcxoEjGEaMjwPiP1649i4SwfJeL4z",
  "key20": "36HGgDjpRBVYDLaZWWdifk31BcJ87WNy3eiia8RJ8EK1KPx8ihybRtv9Dv9dNPjdnMeYJ1sHEHazfyRPfK9ryyRC",
  "key21": "3KYJfFbmRCbuyymFd5At3Jb4CpcpnrdDNmSjuLSXGpEZHBTiQi1C7FBFN2SfCBEpUXJwQy74egrjP6snHHwW2Kpr",
  "key22": "41XpmL9swx9ZVqDFmLjFNoi7rsh3Jennddk1M1F7e2wWoYhSyF9RfVqrFZAHZSyatH8ArQUPEbE6stTeHsAd3smy",
  "key23": "3H6y2Vbtw4kUbzqsEnzeHKDrbt29cmfEcu18kKCmqNFdtZ7VpsXhUFzH5fFKBaJ7KCr6uuevuTKYSJbLzktRJLQ9",
  "key24": "31tZVJdediAcpAHjsVuPcXudh79qM1kxUC2x9ebTmGZQLGixrQHhttP3xLe1CTkiX8mSwSc1YK979aBZVQWfSJqJ",
  "key25": "4o6chLt9AECqv4y92pR6BJNAFgyszCGRbJBd3zPuVBd1gSAym2VHSVhU8S9nYoZbC9XkRaDSJwrpJzaHBB37X1LX"
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
