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
    "5FFNWbKC6mDvk9r7qZf7fWsW4uDPQqqhL5rxoMFeik3E2MkD2LC7oFF8GLXe5zce9nxhHSXTSpsnQ9VA3fFApQBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tuqi3oGajxa8Lg49AEHfycx1Y5Dyo19Hm2VkbLMjckYyLTMhgatJcjFuA47ZxAC1CrQjSG9bDkCuyxzpDDYruCc",
  "key1": "2uU9ZZ5qkxWGKAgpao64xJpnt5hrMKk8awPDvGCBwNs6wcVkdntWaQJgjCoWPbqpnNKrBcFXnuCfvkHiRANTs8Vr",
  "key2": "3gpCFowXvzr5GVWcgszKmgYEbnZHk2udKeBYGnRRhiKX5xz29CoFod1MT3mjtQZsooCWV587zUfPhfEBmC7N4Y5q",
  "key3": "3fEt7GrRJG5GPHpRmQtr68VY9W8JUbB5khYFNndggFGid29LiTqeQRTkZWagX6XW1APLm7uihnAW73fRbtVTp8Bj",
  "key4": "2y8vK9T91X7iyR35ZRVqF3ivNo72jmsA4F9LEjzMTfvR17mz1wpAS18pHsfu9enJypv7XBWPQmQEdTJW3ahvgdNV",
  "key5": "Jz25RPZUFp47fxxsj8hb51qrZWNHzV9eTBfoCA2LPfED92PWJ4cd2Y63JbL6VcCNfDGcXhRzthMvgrzw6U6Ubc2",
  "key6": "2HwuvLUkUT28pkt5VZwCQsRnvkkTPJaEfoiy6sHNe653uaBe7JXT6BxztH6GVYvr2iCyLtsdTK34owSqgrXAiQvn",
  "key7": "21UMA9s5k2mwuqRzoUCjGHWe4hhVyfSsSoufTk1BH1tRqZA82acuaDTzunXvaxnNkD6RbUzgiVTHZokd8r5ZrTdA",
  "key8": "61yS17UVzzhGzaFW7XtP5kMoCVBU3tutpxBa9v2qT92G8gnusFna2DxtwzUUXBzp9CE94ufxDDupuRfGEtmwc9Nh",
  "key9": "4CXpa8PrnLgnK3XoF1NwDZhXNC9oze9Z2x15hqmKNV3a7NcRhB2m3dhnumJKAYCSrs7BedKCBWWycdvXbczyw5ud",
  "key10": "2rFafRQ6tukCa13rowfnDYZfAQVVzoDYwaYfErmowLCrQLxJy2uYDB6rXtRMdAWUXbwcByRR1GrW42P3qMwJpTu7",
  "key11": "3ZmBcop1Ds8tFE2ETx8HqZmpnL18QoA3DmWm3RsPZFksLjwZMayCLVY4J3UzoESZa6cWFaQWxNiW8G5YmoXqenq6",
  "key12": "2cZpxQwNynzHVMwpKgD2qiLd3Ly8b3tt8rqQZBeAuQWtsa88gLu3MfR6D1DfbQ6fetDziJx7rcHTW5P19tc2M4Mx",
  "key13": "2Atz6e1PDfPs4PZYoRtkoG7iobg4BMsG32RLHw48SSq16q5L4x7Kt32u2NQ5Nubv2riSbshu1DCkJmfM6u16KD2P",
  "key14": "41vpQNfw6BBKJxbkrh8UYDReEDhyP27a7HgsWDHHJyBdaDJy89zfSWwBcVcPaoCEVFv4fXTq6MEc5EomTqDk7xW9",
  "key15": "3bUZ1p5CazzyaNvTwKdYxSTpdEPSKeUm7vRTtyGpr42WcNGHhMGyceSQfd2Y49dYpKiS8bu1QXtzu6csMTXvA8dq",
  "key16": "4CKjJkAuMeiK7uxpvHU5yctA1C2cQ75bX6NPJu7AXMEd67f321mVeYCq9RJVzdUXRGrmSa1RMWgTrVEVeEWQE5cC",
  "key17": "2CAbrKkbxeQihgrzDXHWCHaVW8dp2caSqbnfXjrzJnzmTpZkEDGUGBhQ7HmD4HURCYrYZy9CDtDBsDPLSxG87QfB",
  "key18": "62T2ePKrjv5jsm9jYGuTWETX92HCKPmWEtsQJesvaEhkVVzxGLnwbjxQHhyj7m1BjKV2397Z2UJkagCWogwTUT7f",
  "key19": "5LZJ1f3kStqBrUXYyq2EkhPgbHRCe9MVcg4RS8Ss2DCCRRH2A34p4Yss5LBXpCAkdRHJFDJ4bmCWZw4Y8gKsHL2h",
  "key20": "526vnuez9gdmSTySLK1jX9zCMiRX7fFUWcBL13ZzHPfYQ4vFngUqbfQZDQN8uLqHa9ZiScXKcGgFBGtHv36Xy8HK",
  "key21": "5LoRtRkDTZSqw3U6Rj6RLZ4tuyqrWqUXha9tc6pXZcKnHHJTAVAHpBL92m5LPZ4TnAnFEx5Fs9r1UAwg6JhHNxqG",
  "key22": "679mDB5WpFZa2s8fSjZu7uD7o6Aajs4MgtLW7DQ43VxbNYSeCDMeJBma5q6uShGb4Zg9jKurrf2ScSkbDma6V9ry",
  "key23": "2Eh2kLbcTDp1W18aWyWWHXXwhDXw5jCtrU9FYUcdrVC38NBBNXS83eLHEfchQeW5fd7TAXEn5TjMaWngrvh3cpmT",
  "key24": "2Pf9HLUSuf3pqESXfgkrq7DG6341V5zRFtrAoeNyUSJFDRYSmzFFTFtr9jJ8Y1A58pT2ZjjGqsvTJDDyga8vUwEd",
  "key25": "5D8MGycNYAo5JxRQwmPHdX1KtwrKu8wy65eVjR6AHwqCixfuaU1daLTN4nAFNUX4VSZmUGqco2cecjJcZSQMpdjt",
  "key26": "5Wr5KZGV6aoXeWfStE3EBCFzBGuG6wbmC23k4ehe24XVPVJNhCHxFohbsa9pAEjYuKqNGcqgDAmwvAUdeN1boS8q",
  "key27": "Vt7FNriZFc8FQEpdp64i9aMMgsdybe1RfTtQR1YbMDfpfjiDbT2pdhCV2SGCeReYMSMuzhKXhFv4GPmzkfexNRp",
  "key28": "2EWBAKe1N64UUP6tZ1LL32Hs6Jk3rZJirhSgncYmqginvESNwqHcuoiZ9hsHexB3scxqoKomvoYiRCX7QTJa2EGz",
  "key29": "5Ud5PcknpMxs9uHSQ8EJGsAVcjPNp2JZo7SL33wcHGBTiJFLWEnYpV83s7JobB1F3bJGbmkFetPSKdqCe1v2w8o6",
  "key30": "4aouUCEa4JKPbDnJ8kRBy9g7EpLzjsJtBFP2s77iRrCsAK4XhyWW2LWvLy1zGThEVQNw3epND2pM6Ft4v9d1KTwZ"
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
