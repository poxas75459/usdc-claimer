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
    "2NdCF1qJWkiZF4rqKw7BBhvDWiLxPKZZS6HQNizqr2V4DJjPA8Y54qBX6WEF5k2nBMHEfJsFXjY2bhjqWRnwjCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ghwd4j8FqvGpk6SjUiR47RMsNj5qqyaZAZRoisjjd7f2dzBiiaCZtFheKL4tEvGGmDLRCen6iCt7DyFnMcuqJph",
  "key1": "5bB3guK4Upn1uMDH93yWaJi3nFqJpxnMBYaJeUYyh4E937P9g712Y4YRqjBdUsWhZbrFXmpyDEYyh87SWSMw8ZQR",
  "key2": "376NVyV42K9YkAwDHwzxDoRENCUxrEUy43ErPHMytFFwQfEZs2usioKAnDjErqTTeCvWwo5kphZuFuqQ7fc3Btkx",
  "key3": "4nUXJgQFqLwTd3wjXUu43XqmYCM91dGkycDXGCsMwm4R3boWctZ8DW4EXCSMRC6PBzgqaBuW4uVs2ijxj1XDx7V",
  "key4": "hCaQLfFFH2czziNV61sHHwsom2wQbEdu7h2tpYrU8agDyRuGqS8JyuiE89V3xNbomZGKYj1GKYcLh3gk92oPjzh",
  "key5": "2XpMu1ZSS3A4tgzre6rXEwYUMMqSzf1wVhKMZiwA2NvKfFKv1y9W6DrNCbSv5NpxyGH13Tjatr2GFNBftdx9hV2V",
  "key6": "ziKHGbg9beFnvAqPFwFHQdYShGWRh7pZEMEMN7a7fstBaCXy2H1A8Lb5w5HagYDPhdV8i1aVGxjRKb8yXhgqE2D",
  "key7": "jZp7pcKcSa9WcLGRNUqso6fbEiWk4cuzMC8hxfkWC6T9hzJmtVbJ95TgxNBeE72BeA2yuSxB6H6K45VW4gX4kHM",
  "key8": "m6b86XEjxKMN468j7tidaeL7mPgro8eguUhdy8VGKUcYzaVnWVyo9Vqre2TkvFY7bj5zSRcaSxFfQpxXpDmE8MN",
  "key9": "5YMAtME5kicL24yvhKZWTzfDPSmbffckMPpdx624ZcaNLbPEU6ePFrgXWXjag4EbKaHJNKi64vtJHA2DZdQWnWpJ",
  "key10": "5jgiTiXKSG5RtZcrAbj61NoA2ShF673u1RZXWvfDydaxkkmZCR4nGzC6en8B3V8EYX68bTo91qQVD2Ww2zJ8f7mP",
  "key11": "4i1ojDGsvVU9TAFUdRYD88w1bjoAwid93r3CnnH8o6E6uzMgLJrzhB5WWh7BK8qQ2egXKo8v9bhUj8aYuFkTASuK",
  "key12": "2btD2zYTg5wCT25tLr7LukhPtNyXMi4pk4hUE5mAgqLLf53M1U3Qxe1E8GMi3MxgMpSmmpRAHD2zw923t8SBqrx5",
  "key13": "3v5cQFSworM7hNZQDmX524nBrQDEYeLyGf4VgArN1fFQhvrmhS9gQkD1STwx9UqD8REYDJa1yZK9c6u6QrcWj63B",
  "key14": "5a6XoHPk3gNit2aYRZwAxy32wN6J88ZY3iGyB6Vut2ZgxkPnxHQSwg5Cr4cA3h8DyDnSoPUiw9bsGh9cbGjEZyZ7",
  "key15": "SPmxJJxLWKori9wBXsVHhCG4w7ised8vZYQKxXSWy8yVmGAjExyWaq1W2uFRRmdp32yZ79pe1gLf6zTDBfUPv7d",
  "key16": "4DEUBy9c2FbUr8n2Bo1MzT6xyB5PCKC6QbuAS86VUxvBa8jWqdXhfzP1KAXJboeohMehggAAyY4GjQh29rB6CNDb",
  "key17": "rSKmCEedkXWZL2c7PH5dbS2fDQgNASYbgqExv6NNhbtzgxobehhSptS2W9ZWCz8zrRKukNEXz6Z3hjkEjZZoN95",
  "key18": "3cKgcbR8ERcrDktk4mfekNkhKQ3H9HsRp67XvCxHFdiixBT61HZzE9D5Dy2D8Yb3pt9BwQogFfJ7gvba2PSXb4o9",
  "key19": "2JufVHA1EqnBoZ1fHGEQBnL9eDAG3CE72QhGYqqhwX9QazFMKYF5ApBrKX5H1sW1mUSzTkukxRzeg4pKZ9cVBdfX",
  "key20": "394PWjV8NuDjjZF9u3g9WHxdVuWfh8u8Fqcbv26P3k3rKDrtxbfvDrMSfv2xg38j5HdBeBHUpUJxPptZY8Miuw9P",
  "key21": "52VHnEh6pvDfKKGcJMV754sNCYghhGnTBnZY3xh9P1YiLS2Gtdzx3oRzbvYL7Ro3dq4tX4BtRa7gFiye54UGbmo8",
  "key22": "5r5GsvXR7btnwkdJCJ9GV8QNa6WztQT7uhjxE9bzyAfS7tpZaa1z44fkxZRnT7mNX1VPryjJ82rCVReepPhTZ89o",
  "key23": "2mNKNfPUGZnmXmMdcsRSXcBvvhnoSmASkHw3ovX6y7sRojiiPkbnCRDEWSHHk5nsVXRvtytGpQeUHr7qSZqbC8TW",
  "key24": "2huvuMRkBPDQy6q2BPfp6XJVDfutf6CJfRVNB7Q8Wj4hHPACGt6b8Y742XV8YiwuqaySGEmKrqT8oB9rgEEyHhkr",
  "key25": "wukwTgCcFpzes2WHKBZkh5yZnSCyUHr7fW7DtrLJNo9ULp8xc1HSGDusFhhQFwMiJMHfjXVT6kyVbEjZBRdfVPf",
  "key26": "4GWHHrN2WsN9mRwV5mnF4z1LZAJ96q3hYoNr7fwjkd1r5zFqv4TBuUoVRh8degf7DaFJxkT57zhXG6NrjHQqqrT8",
  "key27": "3nypLjFPvnBbgqaFZsMvdv6HWF9NDGzWLSHHyM3zC6fCxMnx5J4cv7wRBjBZ1UF9rBNtgodPdboF76ctYH2UpHCo"
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
