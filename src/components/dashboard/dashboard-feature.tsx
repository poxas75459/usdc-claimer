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
    "kyoiVLUyCp9rHvuNaiqhtH4C8eMy47HGWpKacQvM3gAmmEd1hjBytJ1fQFet81yseoyco1JssFLnUarHp6NPA7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o26rh2AKpbF95WRsxTBP3f7wB8Hi1R5jVHSvixXpJHEzasRunpYW1jizwWFdqR9C6iyDb65TTSe2aVGJNemWZbr",
  "key1": "hMagKQWNpEXG4CqWL2xhAiNnsziDSFDhZvsJptC9p33TQcrJsahBLyeYu84QFXux5MED4jfsbji7ywMfe4P11tG",
  "key2": "3yH8smaqcpiL6gHVhpnuZ1a8untzc5Wmx7uk6ndxQE4EiL4qdYBW3Nc8WRaJA23zpk8WtdqwyDzWeppVP1heZ527",
  "key3": "28WNjzC2fPvfkEuNJsWmd6GDPeGVTqczqa6hUg94KVJbmD9F5YafeneJPJw5kUaHn4R6PAiwsnBYeDmS8VSDsaMS",
  "key4": "2h7LgCanDffbtMW5hQi4KqKheyQFakNzg7yW45PRMg32BduVPJZDLP8fKVjVZ2q7oRnhkgPbLfkY2hzCekjzBukD",
  "key5": "icKvgYFaSBY8sw4zU5eUvnZx2qFU6wc3pVjvPjymkDnRCwTUamUjWPXTCmN5QqQWUoWKCtZbGSwzgojBghpE73B",
  "key6": "2CR5QJfcU5FiWjD1VunGhahMCiZWcjdn7AoSS78yKfGZxfCvAqTZBEzVHsrVZawzKhaVzQbiTKNoUkXqTU1FMXXh",
  "key7": "2zGCWLvQYDxpKxFycXr9oFQqrU3SXvkRT8LpiAH6yd3tvotw2r4QdoNBRY68PjhWbzt39J2kEVD2QxSA9KpHwyEq",
  "key8": "yFXFn85QnL5J9zvHZPBM95hPz6ptaefXd1DncVzjoFzEwU6ChJGyEwnMjjjDceNay2PniqnuN4reQ3wrKafUfLP",
  "key9": "53HbsdEPCaszGGS88iKXkG9zHfLiZuGbmA16ZzHHpmaBWYeue2s21K3Muh7rqwWcbDWhkifUi7ev5SSL6VSUaWo8",
  "key10": "81FFYZmWoepmP3ZyC2qDLS4G9LxBKDLEDZX4sMQprKATGwEvx87P9Z5RpcuHePUXoz5cMYktjdEnPUSP2EL9HGE",
  "key11": "2MrzUgb3AAUh8om7d2rJHKssTXWB3FxFWaPazNdixLVcDukbtqTGMtkJhfvWn4XDvJgNPrY4dw74fcDHYk816yyS",
  "key12": "3ym2CQspmitwEJv9nUBauAQTJHZpuhsA9wBsiGr1YUPPEA7TyvjvN9GviGh3UhioYZ9x9LB3mvtzdEWgiHbmkcES",
  "key13": "4NQhQYyfs8Fedzbfm92U9xdBL1NZUtKANgj3BaQ7J7eUcTitztv1iQhHzdNHDnxEM6Dn87eb94KiQ6JQ5rKE2Vb3",
  "key14": "47VXvYcswGrxVTRxV2XKcNqwXtELUX7sXyRCZfH4d8vmsAHcEW5eL3f7YgLmGL9NaHRB5UsAo2XvsMBQRhJ9WQwe",
  "key15": "2pGsoUW9sh7e9Mvi6BmZnj2XtkC3X8rcCEYAiqJcXypgmnZzopr85VbMRgVgwej11AXh4a9mCnHhZDG5BFNQGEeJ",
  "key16": "4Q1Fv3GhvKdomjo3tchosy2bmYF9eQxzWZuQ8cW88YrKePTjXNiwSsN1iSTUp9YAjpKYHFYxfTx852Ce4zXjTVN8",
  "key17": "chASdk67Mshs9rccoTFPCnPE9anoZZp6AJ8zvreWsCPm9KhPXK7cdHxdCYmaVadY7uXXcMX8MhpMG7a7tDRkBhs",
  "key18": "67iVyjdwXib1kGqq1pVFz1WGrrgbdVv67C6DqvcUojzQeNGnukBfuJg7bCBgmwLp6BeJkA3r5N1BDAW5ohvEcasi",
  "key19": "26AXN8TMbwkzyAZgf9z7vjh5EeJsnhXDkKcdLY4SEaw3fH22g1ErYuQbhRyFFWCRq97mud9BEGy99LxxgAYMJCVM",
  "key20": "4G9hGr7e2HkbZc2nzrfJq3ARxy7z5kHY2EAUpvjxLsdp3Vk4ZhD6RrQLuRuatb8kzHekSYrUPw8sNuRqB1XKRN6b",
  "key21": "5JaPJsSxND933DgBj5XbvDZUy4Muan8QHnmgVnyNCqi8NmGSibDysX61aHbrnsfqFYNVrFHxZQxjdmiwFMkRB5NR",
  "key22": "2WhiVmH4H6yBVesyYrzBMJ1q2B6LFk39EAWHFq4zJFMfNgTAKtfpJ8BbRSauakzi1muv5XeFoURWz8WvhD1yPaE2",
  "key23": "3169ita3nJxF3Ka47q9Hfp94EdxXcMPkgnjJnvvcwjqdTxQVir526Are5b2znc6YBNiQq9SjTNKA1oRCB15wefFV",
  "key24": "2bWMSo2zVdAWNrTQPsf42h8BFyCVJKmMo51zrY6napNf9Ji6DKYs8Jf7zLQMtPiZL9PLjo5nZR3jhS15n5v9Rksv",
  "key25": "qyTTE3SmGi3KDmC3H7hToooD4Bsncb6M2XQKLrhjB4hBxANJiWXEsRQE5nd1qiwEg2AmdwqJLKF8iVH4LzEfaSc",
  "key26": "2HEnS6R4cQ1hq9euNGGXEhaSvBpJZ2yrpUYiAmjMM4R7qmhJfnLRZU34tmErTRPuE5t9kiQSJfVL9eCsZX5Hj7mM",
  "key27": "2jweEDxygn6NVTjQJwLGreBA8bACVP4o9BdE3VsyKdKRMdCrgAXcguL7YP9JvcVu63pcdzE811sSoS6pScdyQyBW",
  "key28": "5TgKYwWZqTTbAQoyPUSEAdATPSXwmVutBZKJHeutHV1DRpCcwZMKGnknvKDa3uhP5QL5DkSsZZC2hkGD7YqNAjwW",
  "key29": "x4ef4MrbiemDBBSQcc6iHKMPEh2cDye1how7ozZyVSRccW4Pe9u8CGmAJpbVci7pL7pCztsedVuEnRpkAnuHF3e",
  "key30": "GjWMtSW1cAvkw34w2UYzLazyxpxZSdyzTP6nvkhzfayNdvP9xiTps8mDEJ3iSq3QoDRsaFgMwZtE7p6Une14zdu",
  "key31": "4ttFYeHVx6KWDt5ENa7sbZMmEWbu3DJa4G2vt9QVzizeiY7ynTP1NuY4fJ6gPXpYeVEZtKgmVMdTfCZiP5VjJ4a2",
  "key32": "46hbWFzFwBomgsGcvm8sNEtNRbsCaF523NBnFGepbEZWxtm518FKd36ERnLDGkv2qrDkHhmBu9iDe51dufbKWTG1",
  "key33": "5YdS9qcYPYZP94K5TmpaLBAsy4tG29vSDYjXxPzjxin6xzeubZVSR1yMxUa8A2kq7YmtsEZqB3FXMBHpKNUiCD88",
  "key34": "46E2GvSvbfQDuh9fnnqkC7KSBa8eoBYLzgQCVZnQWd6aAVJLTw91k1HhaGneYonNZA7pew5cA4gEg95T56Jx5CGd",
  "key35": "5byTxPp6nqu41gLWB7rVdLaoWpMBxvRrUnNwQWKxb3aajyGWWPg1zSJVvEZZ6LoDD37RS7zWeezoLMndVLBLeqEu",
  "key36": "XAheR4u4tWDJiLkkVftBgKj3f2SFkCG4VCdm8DyxNXkiy4jydvpoAsrTV25VnscMv3B9uPS7J18ecPjXR9YDpZd",
  "key37": "2VE3du9fz7bSf5Rne64kBvCK7wMF7pwBwsXgzQfb7sTv19HU1jZaoqTTTWyJrZskVaBQPNcm2yhc79Ub1iffMdi4",
  "key38": "5LPXDn8qVhFVPVrYoEMxGFB2Qs9Hi831gMLLnqEQHoNNu4PwMWMJNVHhCkPrj3sXicQ4ojCmEbDzNABvY68urMKW",
  "key39": "2SDXTssPN1RBqPoa6MNdrJdWuBdSWHx3mLxQ3rVEtgaKP3izAfW2bwASc93Q7qPQ1YZJcEYsWG78FeSVs5ms7W5N",
  "key40": "3kUj2gHf5KikbZeEUd1LTxik5EbfeVMXwiFsSr5LJ3BPyWRtf4arQNTc9qh8BqkfXfRDv5GfHh43cURSpSrzboLj",
  "key41": "27GyYVJBPx8hZLNuMhd8oWAjoyo9d5GN9eg1dCM6tjMsYrfKAxkkdqKyXHCLSpeyFTkU7qiLuVRaND4GtcRQxqej",
  "key42": "he1F7A99YzX3chmKtyYtrcRM4WtpmJ7oJoH4hvSMSV5Gs6jcMzTDxF8K64QuyjbuERNySTX2URQjo8LS3xR4Rfo",
  "key43": "5a5ti3VJerR6V6fyksm4MdScj7sn6yB26tVPAcLtpR9qx2uzV197NW2ETRw5MJHb2u5krmfB5QBRDGGk1iYHE8Lz",
  "key44": "45gTAQbvgE5PQXyNQgjDtSpAHnuXWbFZj38zScuCKwcXwfaf1GkSMuDpKzZX2FRogzgcNaSQThtntpVQeJqcgMe9",
  "key45": "4TJuxJYEmh79GpTL9FdtnVHvS27iHY8NkZMUhgPH4tdZeTFS29Ser8PKcQAeVmACn9CrVfe4UdpEL24PfaSfs34F",
  "key46": "52R2cfe5qiA3rqTZ8YBeTmzHW35XiQa5L6BCukZbpRUDzNxC1s8btACKX4n9gw4GcxrJvYv8SGCUsTS4SMJ1KH1y",
  "key47": "4LkVH9xMdgR4YioTpxLyVea5JpALTP9unYkG39kTYgMgzZwAfk6a3YQz3QrWNgiZMaeSThQ45Ckr6ovfHZtbxV2s",
  "key48": "2jMvaaU3ngDPYA5ur6mANo9X7HoR2seQyPTd4ZTB4LYifCvuVjJezDvgK5Mub6pHXE3ftf1oGp41VjSCUYeQx39b"
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
