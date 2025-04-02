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
    "7CqufejDnM7d4XYGCsgSYKJJsRT1j1pxfPRsHi6TrG8RbZEVyUBGufE2mK6uCgdQo74qRDEw3rpVTHHiUw8Uyzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cK16iUarEcSp3nkPCQSkXBD2FZyX21BSiZ8rLNKJfzdDtVxTiFd8WqrnTVauqKqaEwCCg29m9EVhKLJxssv87ni",
  "key1": "2pEajexXF8Lmtx8UhNyRvvXKa5GuDgXJyHVCBpdu5XoxRjRdm9SuvXBUyT2AzN52BT2MuBdbn7B9Q71SrWBcpVaz",
  "key2": "5qFLjiprEo6CZgp5fXodYLEe2QJXqYsxx35r77wWqwppoNZnwATbtYxfBVRAFb4tAJpbmAvcA7Pftm1bVX6p7RU8",
  "key3": "H89cgWDZuMjjzQQAWy6QztH33SZu1VXn7sAunZggqRunK5SsZo9VfPfZ6pvFFAYhiGkJgYG1uq5jPWN2A1daoRw",
  "key4": "gkk9mfraGnfZq8MioFYwmU6HbpVHpibYTFqAAvzc59opQUWWkAySPUkWALwyqSLx1GZ5Thpd3Ht3siG6Y5XkXP1",
  "key5": "3ZzrrENUNo4XhYDzmc3ESvaQsMeVMMYYVdLSxjLpHSN28L42bB4DaKPxgs8dKmt1pRD67tbG5H5s2KvG8hP5TdAd",
  "key6": "H8hs5h1FEa5HEyjzpmKRDvYMSR4Xb22pqM4A5oEWodHeJQ8GoQMp5iHFQL4omFRa43MPjsGNBN7DtagJbHzMG2a",
  "key7": "5uhA8JeGKVqcpUsFtMe3Jk52jadGBy7WaBFakPT1S5fbSxv61LzRBy3yxRjUWGdmz8RUMxQuTiBPaFQJvrRupcAB",
  "key8": "2SNzndu9L672GmnKr2njbS7qi1pbAMo9CAM6WNZn2iWX4Cuj9MpzrpSGZURRmCMwq39DKqMBU4ugaMrtgUvcLj4J",
  "key9": "67grQ4HbG46eUNK3GguzGUujG5ce26vkH5c6eKmzYiU4BVvdfrZXTeKVyAVuNksAGATBvmR24DZrSjd9dnVzKC1Q",
  "key10": "51FPoyxTVeSDKhMfK2oSw7TQk1YejPbc2NZz7TGueM5tD6BQFeDheRTWVTw4J1dekkV2qMc7J8bcUjr1JgiJQeuH",
  "key11": "2HVXowVTkJwujbMXPXLdBeA4LvSrEkEZxgtYDRpgJr2UFf5AW1BWWCo8fGcHkVwXP3iDdGNnNukKpx2jn9kQUzAk",
  "key12": "Wd6aZGgN4XTjkekFhFLUbmA325FQKxUfHyPyXWK6vpQG3UdEdUi14q3mgJiGqZE3htVh1EQZZJE2D8xLMUGjrE7",
  "key13": "5aBGBU8rPYf3PUCpFCC31sThhhNR3wkQuYQQXSGY3MGtjBGRAEgbaEJsiwLgMk9bkVms9qBoWRsJtEv1v2wEmmNw",
  "key14": "6UK7few5dNsUeAhrhvZq2SWcaUnbYzogXkubU376hg4AHw7PbVRfM3qRZBidxFe59ptYN5SN4rNUY3frVKVHsYs",
  "key15": "3VUmhUV5GQNEeqyHnAfVeWYa52H61DZtHqVdDd6h2w3eDu5D3F26jsa4hpSYRzNPtiJQJGkDkmitjUt7ew21JrxC",
  "key16": "5rmN5BkG9VTgn3zd1v1PSnvqMJg1BjnT21FxBxsYa5Cv1hmpg9E42YsVtSYf1YpkCYESPG2dzi7Ft2gE6huqjVAC",
  "key17": "56gdCxTXu4JabpLNP1in2NzzxMhqi9DucGjuJF1cGMrd9Us3o6EY5pWbNvQzne1DJAWxQvjrurVq49MVe3BEsmGu",
  "key18": "43Swvn1S5ayb5kARETBfVbypcUhhnyecCRfYDqKj2iJix24xg6Bzm3zxVxvbkAuwR7zfiL6ZcY8sbNMUYFfokxFW",
  "key19": "4hxZvuR2dHE9QzWycDLoiVNN6JS2kwRqaycpJfRg5cqrYH186dMiGpf49UwS5qQLc6yw2Hvf6iH5sSmLACKkf3bB",
  "key20": "3GkbPCcBL8FX4Y3JWAdv82xb4v8Ce92b46Vieydbf5dcTbiJW42xUxUc3d8ULxDM57vCqCmxBXYxTEUBMvGvsyRu",
  "key21": "oUzJggWsKS8gSSjDmY97D1Vxb6Ho4CQTgJ3Gn5vRy8CA67AKsb2ktE8BP8PLMxT2GuC5X69VqvtJ23ooekhHhtH",
  "key22": "5h8vSaNs5DkEEHPqhtnbLT3XgWCkxd4N5yHrE2ff73SmUbFeaywdBUgYVUY94zWGfWehMNVGM3Jtpu3JPcfrGruv",
  "key23": "2KENGBVhAv8tTfa59p8MdjgczrYZNBdz5aKG968T741tWoJcMxB4U5HYuT57TXtPykajCLknBUAY6ughrJMtnquD",
  "key24": "5nbLA1o9tNpWoeqtzaH9b3My9JE9LXjcsvCJvzGjMHo1VCwgnyPWp6EN33cZ7YxXEY5mUMpmqjjPpNRHmCgMiWHH",
  "key25": "38bVXdhVR2BQRURESTPkoyF5Pr7EGyEZD5wE7r3d8LuWAxr7pxizSoRCUu1bUPXkeBThHGnucK7FDjqjh2mgAwzw",
  "key26": "4gdKvQoBXi1vAnmjpcATArYDrMc6WV57MucKmVYh8jUndgCKHfyT4VDmRhQY4YyrKk4y5MzXWiXy3SeD7jT33yGL",
  "key27": "2aN5qAMAmtup1onQGAE71UZBcT5MZahaeMNUKRBL69NH3ZPYjRw67ayCVJrkRDmVgJX4b6mGScLmxNvZoEoCdkgo",
  "key28": "4jeCZpAoRaXZ3EF5ZgHiHaJjzBV43G29TjFuR2K1CKzQphBRWkaGCgwFAFYp9YxXY6E7sVB2EGezg2WC9t6joo4t",
  "key29": "3sDrGZPQEnzNXdMbNAwq1tRaBC3ztR87e9Bc8ensjgTe75kuMaD31mokAhB5bsspn9Sin8ADUya375NaESeEm9Xe",
  "key30": "4i61nsUkkk6e1NNTCzT4NV2Z9kLwsp8UVw7UTPN9kBZyKhYF7jEwZ1gV9tfxiW5cspZZTNuHEaYBu7o1eVVJ385c",
  "key31": "56Leruuq3jKKsWuYudU6cNy54cQQS8JwhWcpnrxZh82Yk9ogSgXTodqHtQBfLY4WwkcgHkxxLNccFfriecq1rg3H",
  "key32": "fRXTJpB5R1EuDnUibEbEoabXpEcRrWDNTaBR8h8XDhAU7HT9qBRK4Bku73tkFtRpLqSoLFFFL4nHAU1N467c496",
  "key33": "3DASBS5NJo2oBVQaE5JneJZyeL4cfzU9jiB8rKdWFiuqL3XcBnawZjmMeZnotVHBTzAEAbLSXfzLrmVbMHJS7shM",
  "key34": "2YTJdKNWPoeW7H9yp5qhj3A7yEhwPBTja3TbQBRxj3Ys8z5CKbXfkHZcs87KzvVqGU4UWhwgWWw7hiTeutY53eFZ",
  "key35": "4iYpMPqfLaiYdRa7rNzVHGGo7oKwhvBtWjHUPTawcS7vYT9mBB8WkVff76Pa4sHNFHS9UD6Afp4gwcL2UnGSwBLv",
  "key36": "hTzyxo9kWCXCroPphmzNoAwjxNTsYLM9d4k3FLDN5dprWGqgV9Luj5v5gWABC616ovbdrSBg9Mu78MfbQU2zZWY"
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
