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
    "2Ykiug4aN8KB4N8Y2viFCbArJbdir1t7FSvEmkWi16ZVe2vQbHSf9SYwnJjdXzKWiMkuZBXNAPjeQxuVND9iLCF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327ECMaTLz5hMtwhSgrytcq6sqy52V6oiN8PUrwGxN46qJGWrsRjMJAVVcvcKiGR6svN1QRD9aPMXpDh78bmKFJZ",
  "key1": "3T79E3HD8Ey1iaMLH1Khdpz5LbKWMGnqXdTAATM2wopRfgNaFQ7JWzBhWwL7cfoXtAiidN51YR5emGEjKcaYGBmd",
  "key2": "exfN7PsyYZYJQakKp9y3Nwy829WE1oSQmdsppx9ketYFVTWWRA1P3pHqC92szibA1EPtLoBRwvtukTZ7kqX3Md8",
  "key3": "mSbidoXTLCEXLqcD4ESCpopAay41RptHzyeQMTToTVBdewdpt1ENiyKCkW9GGno3DHgdh8wwbkYEQkmTANxzbFE",
  "key4": "5y2THGuc1vjGqSPCxiG8wFk1PdsG7si8CvRFPLxdBMWMDWtEU3ZU1XgaVnfn8mZrK9qzK4AQZj9xNiQCvkRsHKXg",
  "key5": "2XMmb1caycThBG2tUUoXcZLucdemKJNciBD6TM2o1bpJBsYVRhFa1WrgFnADKzwHYDyUYcpBLg6L8Afz9sbBSY1S",
  "key6": "45VSu6E1nYNr3skWT3qdENF1aomw4aw51iosmWcfUbNxnQqDSh6qdbE68ac8aEJ5BTe9u4cGjeZFkYBk5KHM6YrU",
  "key7": "5NVgsRZTw3zHhQR5vR73AE6PBnedQUNEhdz792GGrvMSWwBZTrQWe4KJKW2AtdT2N564zQE7JD6jT8g8GtfZGcxm",
  "key8": "4CeYEhxd92BVhdgtg7A1SvC4y4UXF1QzNDucYYHoDUT54wbHHgdRBgrCuKnrYiwPLLgRL6KHiqCAmCFmHTj1Sp9P",
  "key9": "5DwtpFL3ubWspLoArXNnY7TpLBAfTUPenNocgW6HbWg361qcapj4UnQGRMxCgCzCEUpMbYtnGsGFJikSXzh4SHBx",
  "key10": "4r1bjakTMR8YYtdife8F6NSRAqGZ6e8fuCUDV1WTmhNBQDoGPZMdwUzTWa6EBMpZEPDsAPwshUyauH1ckZubPeNk",
  "key11": "Ky9Sxh7kwdxBFa4q2xPfzEctH2zBvmhhydFa8hZRQRue8UrB49uAPz1m3PFMhwcTHYpaN1ivztjLLEpRZmg6Lp6",
  "key12": "2B1ik2pawbR5JMoJyaAbPTGJgmqUyrknrznufbA4dBLQQU53QSEM5Hn4oMzm8xJNH4iRFJkHS23282E5JXseYcgw",
  "key13": "XptBHMhJ7ZtyLRgLi84qqhA46xgpQywWC7amWQoqujwRJ643xU46qHjkWhCL5MuVyvCeaf72u4RqBUX7FhsV7kJ",
  "key14": "3vfgQMQHrvHeLZ8tJLiAaNthetajs8mWkHyVZhQ8Q1RnH5pnJvd1ADoNWUysjTVXNdhd7mNaGxHn9M3JmjNzytkm",
  "key15": "o99qujJZvFLChbHctfkqMKGvStxGfyXDxVqx8kMDvrHAZJ1TH9ed75cqk6qnKcTT1ZNaztFbKyGZFRcBoKsxria",
  "key16": "HNDnckzBjrQNoxMxUZVb6e8Qsopx5fYxC4mk5zdypRHnUxSnnnbPAuyMyRvNzEfFX2v1F52PDCJysqhDZdN4JWX",
  "key17": "2oJKHr8W7TGDVUZnFE19vPVQqNNi4fmJ3vTKxTErKinTwxvT8giE41qGu3oLWxrVpA43WCbKCeV7AysKCpcZhH3z",
  "key18": "2jXpusoNWkYyfDuyrNjYJJXD7LpVanzix7vkbAunBE2Yq4zCTVvU7JUBKdWZpaxLJxTjx6EyqHamk6xTBowEztYf",
  "key19": "41Z4Wk1YqcFCfftjUGyNUR24JJeAd1MpGqMtt6g1gQxESSxQsecxdrXrmLMY7fijTqm3owt5mZ6mvV1BvB5RJL3z",
  "key20": "5u9RWFtGSxPuPeYg2tmr5r7cP5bXmdiGmhc2xyoD68LyNYjUBkgWRJErGf6wjG3EjY8c1nDV2ektKfBBqs9yu1YC",
  "key21": "4HLq4LQRqkv4UdvY8u8PEsrkFtSZcCx3qxHM5u97o6VfUX9idwv2zRPBbsJhYTSyhU4woAvMxp6KHZac8RC4oQ6E",
  "key22": "4pyfh9Hxn8HdoDmuP577LTq7BRCU4cyu5LrBewYrsABiNVGA1HzrKydk42evLKxSCeNsdVt7pS91sH5KDFvXc1AP",
  "key23": "2f8yvMWwihHcymnJFxpmFjYKnSPvsogrQhTXp5ptroXF49EkcHvo1wRuqz5xQBr693E6Zq6zMu5BeRLNZEZ2tUaJ",
  "key24": "SsvtsfnEQ2MP6GK5hPpi5D4VRQ9KZLCez2ZTDwnwiyBV5oYMPCmVCdcEu9oHZAcTg1fUaye2aC4Me2iio1tBEhJ",
  "key25": "TWZGV7fwEGPdg8LgqLrVAQfwvuSEBDcyohKMcQkFXfeoAsp7B9WJGsUsUhoDNZdSDqt5dd78nhTSLSAGdxQs1rw",
  "key26": "xqD4Pd1VvEC2RBGjhsCH5FcAaJHUsrxw5zxyAtiTZ8CJgrTuArABwPJEFaz3U4MCZBwwukc5c3MfqbGVyDrhh6d",
  "key27": "4V3BtbSHkQgzbqJWua9in7Z1SQ5HiBGQ14t83pHYN5Z8jxxdWeLmwfXRgsv4JfKvBMTQRZNayNy5eUy6CRkAjiVa",
  "key28": "27sW8rUxApbCGSnD3TPTuvzXc8SyXHW3pdhW3RPnF3Ggx3ntyHksbAExjNgdWUpBcon4BhyYTDnzLA5zaqvMSjmR"
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
