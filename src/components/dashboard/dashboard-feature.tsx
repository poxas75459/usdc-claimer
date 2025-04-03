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
    "2UER9FtXQx4vZqFJ8Z7iRW1rY6kZw99viVgmUqzFcWoBMRfgEoY4pag6S486A8c9c993ZpfnK1J6v4PsHCNb3eAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RjLvMxWB97TzfccnbYxEE1hEkqQ2w1ZQ9Xcn1tFJe5guj3ffCEQfWSsDEfsZJ31hAeiMERYCyk6ouBEEwcvPDJp",
  "key1": "5UBLJHpFvyTcyqAMoBTUjD1nQfcjMGFqZE7aBRQrvBS5D4qpMttM23uFZuCDjTDr14XBT2UZjLVfjkzP7JCMK8wu",
  "key2": "FnWje1w2AynR4zcKet176xwNqrUmUsFA4FFSqoFDz6bbbvRsWpxJPaEmnrPfTWibHqGom9LS9SVXXeCCbpvEJmX",
  "key3": "xExtER8gZyAd8Xn8K8fPQ3DnMEFARrYHLJdyjddU8DrMK4L21z2U3in6dUAG1nCGFF9XE9cy1FWYVhC1gRMsMr8",
  "key4": "aPMQohqqhqfgZhGZzj2Yp4utj2ozJuN4Pp8HrDFyLuaJ7wZ2PbnN5PG6us5Skns8Wo3nNvUWAxzX1zwXAdVJJfF",
  "key5": "2SkkFn16gu57m6T3DhzjTD9dmwVRgzAKJqC5RAkXEnuGegnABumMWDd3QVHbHp15FHKyFyffjF8K6saDfFs8ZExg",
  "key6": "3u9cs812fj2hMAk459KrE2unCpHXdhpVNupVsweGfqGGxXpDpGK1JDcPf8m9bihvxAsASJcPi3DiL9Tba8ZdhT4B",
  "key7": "3kqTVz1ygqdVTY9UEVCjNiDCcTwcRHDwMrWgXzzd1uceHG8HjwK8r1nLBiMcEuM7pe79g7vEWrCme338qjfLSuXz",
  "key8": "4KuBpmGffUFrvWT9VGzCyERHGbBpnGy3owJFsoUSLZbAN7Uj4U2FVmaXAHe5guKjEPc1AF6bWhkd46zq2SrXTQ9C",
  "key9": "5R32MJedN8QpqyUJ43NEm7oqhDKsZ6nVLn1mDGJtbwgFB5avP1w9rYKn1Wh7s34Pgjy42ejbbTb4LjrAEni5JbjB",
  "key10": "4vEfGViiJtu4VusHbMhKF7S4V7S2DdW7wY5NtRGu8HS2UiAW3Ssm46Q39eM7Y238KB44xBAbdZw2DMGFTwNLG2fw",
  "key11": "2VRAiivacxpRFBiE2WoV1nATzVm25rHCwL52FwUPwjCYAzV2X3sy2YTSfePSkLzB7BKT6HUcoX3Gr8MUpZjHwrez",
  "key12": "EgNExS1dHb4dTCSNKUJ4iA5DXKGibnaMZsNRMbvX83FYWjQNXtySG1tmt3Hf9RDR5FvbATn6TmWNeKyYSCSfEPj",
  "key13": "4mACRChxVQh1G659x8XR5LV3aiaStzU6Pvjnwh6LZ7qSdJaszAgk3xv8uPSYxbkjjSbKDzv4diMVGwaS6PeS4MeY",
  "key14": "4WEcM1XeGpgoWkZZRShDrHGoQyHJHEUGMUTzG6sb9pvGSArzTUXAjPCtz72bA8yQXCyL3qt5gazSpSPMFAGQkP6L",
  "key15": "5maTMKSC5KUnf5aJLNpLV7TWj4eLuAMvNNEuTQyiVddZ5YYwzqC5AdsJGQRyuyNS11uxwMgXkPJLvEu1mqgh2GBj",
  "key16": "4ZcYpwSZTCvPcGXQ7DtcTPkFZf9tEFgB9hq8dsqANbHKAgiNZJkaMGfH7vAjp3kMLyNcDpFF8cucZRZiE8iN3kJt",
  "key17": "3SGqXJgQWNfh8ynJp7dLh5kfp4UCyoecuq2is1MBx4QY8bZB6NBZL32LbcajPwx8c1npDznhCvU38vGwBT7MRjpJ",
  "key18": "4SBjCn99oXfbnDxMSf9tiKnKWNRia6SvHB1Uz3PULtZbkiaycGgF8ADsEHCFkTi3qqwdX26qjace96xyb3iBfCp4",
  "key19": "4Ke49KngWtvTSUsU2ejZhYkVGoGNGNVFmLCtqFMNWoD9d5o59X6xjqeAqndgwq4emSAK7vTZsct3xbBwW95QgcBC",
  "key20": "33Cvq3zkst1DbKEJm7XpkVJxSguaa6d96LpDnCZ3WRak6RoMw5zRzzi51yF9FZ9arPfhRotVJ9MpcfXsZ6cASDib",
  "key21": "TvZfTdYhxWZEiP8EZM465t5f8YYVkJo537YUA8behpY7Hqswax6skRALFAeQHsjkdTViqaufSzKbgxMrsDELNjN",
  "key22": "2iq2L9QhjtQ6WxaJ1TRJUuqcjk2EgbAdjv67bgxCy1bePCCeovWsCDsCyZ4ycXAxHRcQuVWuwHHca7EFmDiBPiHf",
  "key23": "3LNBCUoFFmpRquB4vn8ZgSNQ2sdzKqCFRuFUeZxWF7b5kmv1q1VyQor3kS77J8dxXfzWfUYsiT84jPj3V6kPSNEy",
  "key24": "3aBKBZmXQxoimHw3TnsUSZVL91twG9CjM7sYVjSPVG4ZpDdGeB7SD6Y6saDjwagVfi9hv48oZ6qbJtBUXveTiCDT",
  "key25": "BvW47xY8V5ibM9sVz8yLsNBjw1BqrMXKFVfcwjnTT9NtbysPZz1TyLLVZsL1TASxYGt9yTQw2hktTRwC7xWKqeH",
  "key26": "61uhYCXHY2DKEhruxuCz2pAhS3GtWYFxQcuE8tgaWeJR6shtF2ad4y2bKqzxqAjpHPMYL5aSb1eA6gFNAhU2sFDY",
  "key27": "4WRFKx6z5YVCHL4J2qv1U5sucYLR3LHtMaSCe2iTaAEiZF2cT1tLJc5SzZahMVri5iAd82japeRmsFvSSGKS7BKn",
  "key28": "9zZskH7u1GXFQyFYz6dyiFASVu4AvanssFBLtemsXwxXjK4KV4QTgqSq2zDgU2rRXFyJKYSCyynRXnRPc7qgh8T",
  "key29": "3DdXgsF4WgvCnchmKMSKHsTFfJJ5D72kgXy5fjbRGA5BxYTv2VGXeML83vXwuHuQu7SEWFR3oDi784JzLkeregX8",
  "key30": "56j4bDvAD4tmYjr9ATYzptnnSADZAGWvb5TrpZYWMy2QN4zijDrJNqW3xZoBDvTF2eRdJTKSEUDGMSiurAzAfSMn",
  "key31": "GTp2q3X18pTLYHScbxazpRwCMgi4XrPkrgYes9AugANH4aAeZKfzBmZAKPbar72ft5v39oQ1DwmHqird9LosDWF",
  "key32": "32RcDrxksPABnemvc6bKgoSTNkGehi1pfzGKEHHMx1Li6jzQs7GNDyH9bm2WL7iwsP6PbUkPCb98VHEWZkMGauE2",
  "key33": "3vNpkR3nFjC8zSv9FkRMR6MR3TEzbtNaqWrFt8Gwx8br4uMFM7huZFTz3gnAK2pFUX5qR3CCujvkQRznJZKtZTpP",
  "key34": "5TC6e5R32hNXAppgsZJUZqnseoMi35qijTZXdmS9yoywg23b4ErkwwgjTeBnGiakyzuz5FLEfF6UGi3dTsrHpAbn",
  "key35": "34NHYJrm2ipwbGnEWvUhBD85brkmG7iP6NVEaBaNxF33W63aTNayqq5s7nLKDQsZAS2HE3Z72JBBJrtXtZeqMVXo",
  "key36": "BXFHy3LUq196sAKGSxfkczs273yFRnk1eUoD5X9iZcURaocpV8SbEW5uhJhFvFgroeXd8QKM8YLb2USXozKsDHP"
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
