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
    "MGMP17ZAAy2qs5YUBmDBnjsz8Bf3w6TTUMnH3NxT3o2dNBQcwCrgw1ju6WqFhuDp9LcKfJtjTpnJC82vLhpXKT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y9opDWoErDdo1Z8LcPdxqmDSXVCraz958iUTddozsbPkfiyavBLfnpjgzUgjE59ufWHxVZVAeg8pBxbwMCyGsm1",
  "key1": "NdoGyFJ7czmFzd5RrANypHRmNeMbKvxXZrVUYUzUvFYy9K5o8WaJ97eYCNptgxxTSnwKQv2SgCtHMWXsEabbAWF",
  "key2": "5j5uLhAJzmUbFkVy6fj9BKvhmxYyopuBjScXH7WBUrW7qi7cTuHxinRCzT7rkPifMuJqhKzEqoaqtVszcbrtNrnc",
  "key3": "2aaB725j5owCJuB6HTN6ACQJrV5SgjBTdLLQhWQCySQ1JZ5ZsdNirzbgyofqohGD8uvaY49wxjdWpM8KXm7X8Jni",
  "key4": "3DqvbnXpbJgQFRrDpDKhyG3j3HAbvCHQ5bypijei6sxo3HVvUK2YDVjmDHe86kEG8HZ1zR6r2Do4Cz8g6XGSetgN",
  "key5": "pkP8F7nz4YRzAMxCnQGPhey6YYQDPVvMcTeE9oAtb6axi4wQGtAJXMiJsCsUeJY66kEoZSmS2TTtg3ehwRnCiRX",
  "key6": "3c5oZa4wWgZ9T9W3F38EFCXnzFUGPB5FQ8eta3pQ3aCVT2PrngyT6HDKiYgsgPPJbHR6WoyJYhi3YUyJKbXKEwp8",
  "key7": "5zM6bgHvNmxQDz8bxmM9UeXstuJdx3qHEvR1oYeTb1g1fRmwjXSpxnJJvNyvrQF1nFCEnake2nZa9qw4NyijngBs",
  "key8": "UKkUDuaWR9QLVjnCtpbuTGdUmXW2d3bYLhHjGAWWJW71MyEGinfrvDPkp9kCT27P5Bws62fXs7gbkQDx8BaUttm",
  "key9": "47VKwGv46cvyXeUt9AcMwVVEQNaCYaHBje29Wav8kv5PZBW1QqYG5p3JHZhYsvzfxXXg6bA44iaFUim8ULHtnp9E",
  "key10": "VMsuexHMvyLkSpMCMzxAsW1M9gFeCGCfo5S1tJSV2vk6FDzzJC8oHBuW3rt1FGR9Yf9mX3JNv1y7uCywCw5MpLe",
  "key11": "5guU5DrGBDCKk2V1UYaRJea3TJuNEKKmGNxTetcupYaxsB7ZwVwwQrUuF8hJXzbnDiuqbsxxNv5Vv9gkmsU98qDm",
  "key12": "2HAdkDqYj72viV3b7xMhpNCXv1kBaJZxYGtMbLYkDY5qKBackBCAhpcG1CTU3hJhcNmyGHnmZ5f2tuttRoGHcXe1",
  "key13": "5NZyd6g7yEQxSjkCqcqCPqjPgPLc2dUJYvBjxvtyM6vfC5EBZcUVEWVGigiDPmTenZx8aKr1v76Ew2vvf2JfMSvr",
  "key14": "TDVpeycwVJnJddThqQnDcbPkCy3MmikTN4fACFAH8wfaipKKz2eH85XG3JtQNcCirKRCJVeL5e5g9QW5oTg7Fri",
  "key15": "4E5LiLPnmEVy248hfxntn485zzBdv8jmrdFojhGAwcmqmBwNLVCsAKbgtVAeRsXMpViYYecMFNmxpwyCzupRQRGi",
  "key16": "3ZhD53cpZnVqjbfT5L51YAZXD7rcJtTXrEYzmZzAumq3BaZ23hVnkUYeyiQuomVuVo1dm1oDTGGmUK6dEkJ8Fdbx",
  "key17": "4a9HUPZprcqZweGFiyJ4P7Yuu677p9SCKa2sXoxsBFNaWvCqoac3XnhiZm82rsw7KAGb8YCgVYionNqfMxudw9Rf",
  "key18": "z9u9gK9o7uMzm7svjbdQB9xykk6ygCdmyHq7kFxB45WaNrbzzs8gvfw7ebDMyTnzwre8EcGEjZV4DM8xaELcihj",
  "key19": "4XcZEeaBKCsJLckEXQruj3R8dfRQ5JQ7HS78xpxujBF6XCkF3R6JFaXU8g4yqGWG2oNsiHKcvyui7td9mMzsERET",
  "key20": "3yZqHU2NSBgHTKCNTXcZR3x9AEwdUGH3QvknP2Ym7iFN32rJ1JQau1RjXNV7eshS2jWcjE8n3zgmSXPHeUkNJruw",
  "key21": "3d3PEhnMR9qNGxxpm3V14ZyhkNdn7oUTb5upf3mzF2wwP9L1miCxFAoB9JbTzvwFaEcoBzKZgufMwGpFAS3NKwyy",
  "key22": "58a2CiiBJycrcF8rFsMLZt3LCnHnBT354VdaSMnhZj9vV3hShG23ttdQRhAedLMCermN1i2PfKWCJSw4vJrYPcwu",
  "key23": "2MQ5EXi4kTkxmAZBD4bzp2tx3d4YoQRnrvrG4p6NCZ5BzqijxiAUkPFPyi57bhHMLbGiDzbaq49TwbB5En7w8fux",
  "key24": "3QeH572GTaom7fH22nVPtAzdLKqHGoM4jpzDKHCdjRqPuUktKaAFKs3ypsCoat1FcUEKm7y5AJoGVZAMqCR8Q9oe",
  "key25": "2FcnYsYRjKQEasdqd1GNmwXTXN2nKPpx9fKpry1c69Qif6gv2ktvjTXq4r2ip4D6D1WxrJPNCpGBLidqaSC6iZV4",
  "key26": "3cR6AoYWLTawASnxFH3vBMbZbFYGGZvwstTaENLxnxJ7kSt2ArMn1p7rcWrAz68tgt7cYuBsZVvYRE2si8REsQLu",
  "key27": "3i8TtjM3tSpRHjDybo5MQ32ULS9eo2cu7sx7NdMnet5kE84ucbWnUw18zBpaystS7QmxUBzbrumVF24j82SvrwQh",
  "key28": "4vDwi2X3zc8qf3WydvGCQQ76jHoUY1AfaDCtqAGkrV5jHcVbjPW8MczhvzVRsQMLidjtPiG8BoC3FhxiUVeMuyeL",
  "key29": "2nqbvGgfdyJcmU7TSLyd7ADqtxPMirVn9toBh8AjaKny3AJnevi9GWcBEkHL6dhBwxLJzYugamH59dBhgGoMVwQB",
  "key30": "4twqWcuJBVicEuPjqiK5gqhZe2eZAJM2kUy2znZN8tAuScaj1p9RCCeZY7gvrTdbaSjqefAiztTLxJRfe3x4buaK",
  "key31": "4HoaxsJs2K68gqkcwZZBTWsipyD3TDw5gKyPpSoHJybXNbLW3w7bTcvhYGJ1rYjm4HHYR2KufUogvMmbxN21pRTr",
  "key32": "3vtrRmmULV833huzTGZXQ4D4XyPcn5LnS55Kto1PWc63DvZ665fHvm1LMDcZmEHPgCVXHfP29XaV22tQe1MNtkLz",
  "key33": "4mLbpmGTNKV8BbWpwY7XzmvmBjkaqtmhrBhVEZxwG7PYTxgJyoUCKTkTJUT3prss9UD3VoZZkGvuzetJDRCTurgo",
  "key34": "2SjaBxvRyuo4jhJrg4wZXxqX2g3ByhBNTpERxd9nZ3wKcbLajM8BbW1g6A7ByybU3h7aq3KiLv5TWkrR5haq4juk",
  "key35": "2SDqWqCk3EW6CMfwkeAwWjErWha4cMwvzFdB6GNoSTGiC94R3kFUSMqtPRbYCu394BdP2ia6tEuRnhnhthMqFrzg",
  "key36": "49GG1qFw3yC7hrEFvJtxwMsLvgWmWQs2stPzWKAr1gFtmFTj39AyJqnxbxpdfJMSoJUHiJsgKgMo2HeN6Q6oYAJi"
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
