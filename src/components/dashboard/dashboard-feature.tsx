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
    "DhgJbY8ofwNxEAfjzcjE542J6yWg4XKHokEAczhBKuJkxdfv1sVLxnB1rwgz7qXRQwFi6w3cNxnCPpxkXMZHcC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ubwkdjpfcieCxrjebFgWRBYAwEnmnGVDi8ng1y4cEjckjbt7oQp6YLr6Yd7nrew88reWHmbGEquocjZcxpDwYu",
  "key1": "4CmWYQMuuKX3Yc8LPmz79PsPGE7Ajm94Bht4Su41PLzoCpz5x6b3JWZBHfexRESo4bsvfEfo1r1Yae5QzzTbQHb1",
  "key2": "3xh8BqJUrS3Z7Ep8YYzyteiv7hHuzvxMc5uLiBGphbz36dWTWb1Xp5SHv44V7zH2iEMgf2k6gvzrN3hF7EnkdR7J",
  "key3": "39mWwepEpyngJ9Vvr236hg4PWxe7mB9S8tMdJ1nW3QHLSnk5DLmDLUREW8vko1p4C2hMfcXJZAaLW9GMfhcQafbg",
  "key4": "4RsLQGCuZuew1s7BochsD7iTXbh8UotZdtv89uHJA3xBPQi757eX9Gkj7oKYiRG7aZANBFv9uR6wdycxarzVdegn",
  "key5": "5PDwWes4rwS4pEShojNNBzrd27eAYUABPQYMXkc4doHP21QacsHvVDYPr7XSaPeyvkw1sNpMDPkdzhtM1AQWqnLx",
  "key6": "5BU93uZmHJJQfcizF571FLUuz1QM8fYgXoM1Gfx51n6X24U6M3btcJjJ9W6MJbzGfNQ95nMxiZxftJ7aSFEB8CyY",
  "key7": "2Cs47qSiUyDdxgEER8iTTTruoKfnHtTnJshYFMQo8hPcMbbpYYUrEmxkXpbxJcgTtQiCVa35q61cFBEHGXXtZia7",
  "key8": "4wYuSJLzKB9hR5ExW3WkaEtioiwforQwXg6ftKQp4ji3bvLQmPnrpamJ6XRYQtbeb9Za66NqdJwWVafrefDB7yPA",
  "key9": "4rzHErrjd4d1Dz8TLfcafe8twjvzgDCyrVPz4mz7uySpQaiicPRvdJYUJ9jsenusBGxL1aeo9wWP9obm4tvUqsCm",
  "key10": "3fXRMdRWyMPABXvSHrojbR5ERgknrKStm2FD5KFVVUiS91Z1uWoovkBbTyo5sNu8tiND6jLtqKsbJQ1wZzW7gDwv",
  "key11": "3ApLPGjVQwYxbyiqu5AQbDMVf6Ac1qtFJgQx5fKzEztZwtjihrTTLF8MVkfbvw1MavNP6vxr2vpupU2wGYebvwis",
  "key12": "4Dzc7efhVCBcVHmrQjSA3twNLaJGh6CGzB7YzmTGxgaiax2t82iWg7dCbhQzMwEoTPnYzcG2njTjnKw9e24TXLUx",
  "key13": "81NEUGwHzpHGBqfCxcnHUfQ2YdDrYdquoSJJPQEhCtfhK5kiRj74etspgH8u9dcUvhvveXxDuWDvUeYSFXBwiQL",
  "key14": "3RjnWUUdpr6TwhVK9UaSo4RyVSbxy3X5mRfkkwFfdtZgXXGSRmZoxR1eSYgXpZESBFxFAmC8aYWbiJkijboKfSxg",
  "key15": "2uck5S7X4ixb8UbY4d3fLuN1zLMJ7qu2ytwtP8G1DPQY7zYVYPbc4A8qmVnPNwiiQUcUMKQwidg1Ma4EAxVAND5d",
  "key16": "zJ98Qb52NdYXVC4sFZV6TxJsnfbreTyvE2Xfeser9PncbHFrfsGDzhoaVNEFk6yP8bDaiR5d28BiENE9KApiHxp",
  "key17": "49vYKCNt6xVafW3wQ8DzX5Z2YBHD7iK3PiJYSWTuNkzNE7WfxB3cFkmbgLPt5Rb87Bf7cp1yoMLRpLH53TALwjgH",
  "key18": "3Efy1LVfcVFo1kmTTxA29MbpiYNqvuxGo1iuf4YNA5SkjXgfARyx8uGrX2JmXXJWJ1f8LKkY4gtSMKHhVrDUxu24",
  "key19": "SKqY1boetbVmjCNY7bbr22pfSGLaeboXcsCghWZ77hSipfq3CMfwSo9DWUfbiHvpm7scKFsmbSBwxkSed34RqCR",
  "key20": "2Nt9hqnyPm4BFokYZA671sQ5MBS38pY4BvvKXkn5hBZvxfPM86YVSSkf9b5bXCwVq2hKDn5TFnneZSYvBUsPGrdQ",
  "key21": "4w1vSRMQwExPnhGeCRaL8BXbb6VKaswkNggD96CAyvJPZedaHHPAn4LtYHn6gnu82PgfaQ3NJsVHPHtbeaqWD6CX",
  "key22": "5qhorEmHqLrmKFEu51Cb5AyWGVw7DmnbSQn1cwuz1pWZqrs48ZmwPpWH9kjGyDgi9scMZ5prJ4F1g1A8wnGBWoEM",
  "key23": "gd2VNdSaCGW7pyVfKRCosnqAkSFK3FaoMU5S7Z2H7UpeRiXTwc3TvGEvnaVfkfoEoYnsFhDHZL3tR9dUY6Au4qd",
  "key24": "2s94fME9bdoGdrLasAVUU3d3svWQqtYDdrLhVLaM3b4ioEoDqKNysHxQAay3AvydFdt1PGJRPQXoDypbHm2xHGx4",
  "key25": "38hPr1qSTfnPDz7fZY8ny6griz2stoSDi2d1t7ZjKCrXNcm4TqeVxVNEpY8vUpmXCoTrCoT83eznUqqWyG84T65g",
  "key26": "3SbBS2BoLatmDzQqotw3zbYg3pL5KSayZKJvQQtBapVUMQoHQjtqBLEHPyvnVcrsK3WihpyvsK9FhZfo4YxNFqev",
  "key27": "5UiH8FSLCB1wo6VsqfAn3niDRhQtEMu1uPhdzFSaMrPPzEWwCaVePYGVQR6qkmvwPW1g5oSSocbTyeEPpkFpkuEn",
  "key28": "3T6imiNrAk9okkhyYZ4SL9UUBTo96ihd4Pt3koKw5vRjEGYM47p1YqdZC7AoM6rir7icxqox5sNPebpmb3oYv7om",
  "key29": "4LFURQEcKcLCE8eSrDsyG1vH9zR45c8nAadMtRbwACBkUPNcDEFJoF2qfTHxZRsXhLRRix7ynmBWyihzFt523r1y",
  "key30": "3f6dVQqBtZDu4AB7azdJfJxJHvZx6yp6wFPCHggtrrzSKYPRLj1dBCZUe8NwqziyQJfCRUYFtxvVGULcwyFzaSbE",
  "key31": "652o9qeCn9AxxcgWPTXKWVcz2bTasHiVWA1bsoBtjsEjMC7CLHeThS74tSAM3Up8nLdZWaYd9AZzTMDD1XW34Qgy",
  "key32": "3YAKNtQPj35QgBoEU5WyM9rbDbz4rfDyXGKFoZBoxuPxAngBoHTKJgytUSUQrs36EVPfRCHJKE1PHe4gh6kw4bVq",
  "key33": "34hgPdPwV4NbSs33Nss4cQfCjgaNcV9ieExSfUD7M7MWcTApYTkPDwxvmzhrjMwQd8ByzG9qukj3UHUTXrMpuFGt"
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
