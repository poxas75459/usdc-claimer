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
    "5XYdSHkifQRLQBizCSHsa2XHWfvkmjMGqStHnJSdy2KxwJcmhqYvz1ko11S73KjCrBfcX5csakFncmx22mvAMARk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TxWeg47dKrDScX37poGrjeN6zWAekbDXavqDnAm4oENKib6k7qHkoC79z1rYTML6PKVo1RdfEkW6dGPaTn12Bvi",
  "key1": "4n8g2YnyTmkoPwhS938kNr9gtPKzKGam1MHkhyVoDw4JFL21qnoqUKAJFK3pURAeakSFCeRxnKRJiY215FuBNgLb",
  "key2": "4QcQ5mb5ZsKQvxSPRcGMme9SB9Gx4MoBR3aA73VMNmQ56Ygh4NXdQF48Y1Dvxr1j6CF3RPX4PuXAev2bNjoyXNxJ",
  "key3": "4CiUriNDbidYwi5MzP9w4rb6NaftktVWUHMSiu1p62yzygseTXfE2pv5J8eGmw2zEsfaKDDAsP5RZFc5AQDV7HuB",
  "key4": "5YibJsK58iFKMF2nRxRqKuCoku26LhmzKRxLJ2RyBY6jfxAfrHfTzv3Q85cKw2H6DnqVqBEbL8YpMktth6UqgPfu",
  "key5": "3x5sipHAsqmZBAtox58iTTzYYm3QN2kMGqamsD8sS4gg5Fjgwt324w5R7CTxSPnDYxRC3KCULqHKLBZB5nar1Ytg",
  "key6": "5aHL8umhG8BUBRgYsVgEFoXk52aH3guU6fAysMV4TmiQLobBEvqUHdpf3Ha8D9KrgFs4PsuCtzkM515j7oWJGp9X",
  "key7": "XBqt3knSuTck7givupLHtxGbW5j3LLcrwwgRrRGnSj2pUYR7NQF1JbRTFsNqLaS4JaDqAS8ZUcoXPHLzBnTKXqy",
  "key8": "iqqfTEpQG1jEix5p49bkrqq1E8x83sofrvg6wFe8a9A5yqjf6LiqSAsnXpKGxqHeCQKWAFctudqNdG4b1E8owBx",
  "key9": "qQFKrjqJrEqQP3ABKKbT2mQheEE7FnFt3rGDFmjm4ZGm7RbHfinYtPdUohDBN1oWot3JyMnTYHvrfEHpiSHKH5X",
  "key10": "tJn6WiEjcRysjWkemQTzRKeYKpByLaVtK52xJuhoSSXjriU9SqVZQLxKywcx6fimxiHdiJ657zDsgPPPghpvwjE",
  "key11": "4yNPKGnipdvNe4Q2sYriRXmq8Mi6CJLdLgfgrpgZQA8G4iYTsoSzCDyZsLR1eKRhqa7k3vCWsyeR7aiJcSdGBEoz",
  "key12": "3FBBDQYWKNc7KJMbNLmNzuJvFqjjs96a76nEVF3r3WzA9HGoF4NkKz6NQgXdcqYhTCAHiUc97BVLcS5WwZ8jqTrq",
  "key13": "2pziux46i85Yebd3mCJdGD2CbPZXgCXwWeuqBDp1rouLirysJewEWGzMrhF1tADLP6MeannKeVqXQeKGCA29i43h",
  "key14": "eaVQ7MHkNXSPWD35ebpEXWNFUkPvrhgrow4R7Tc3sDnkJ4rp4NFcNw7gvszDN6MpM2GGx99Gp9Jq9pHwxC7jh8a",
  "key15": "ZdJDs1kiKTCYKv2RouazMf2nkoaAgqdZ3oxXjBF96SxwQsxKih6aWn1Ls7QM2fygngr6Lhv5pp8AS7777yoGyF7",
  "key16": "5iMNYSEJjFHT4EixUbDXnnb38uuq5SYE8HTQFWmH36hA6rGtv3GYc94i5UtcKKrYnfiHnvPjLZD8kmPRBGsMSQoJ",
  "key17": "22ZT3VFcWaTULs5GaTVHUygNwgSfwCs4fsXLcoAVCgU9Dx2UNGdidaT5AyjDSf78MtkatNHQSYMZJ5X2jpZ4U7Za",
  "key18": "x2F1uw9E6gPnMfgfYKXoFQCypbw2NxMTujfNBmkoqK6brJ9aezPQYL9Ui9jxcd7w9c4o6vFR3JJpaqLEZ1pEyzz",
  "key19": "5aLnTKWCNi61apezF38Ph6dmikbWwcudy6qMu7iug1jYVQPBt6fxE27NksmTGBNBRhGJpvwZNRTXoiprRfTfsPs4",
  "key20": "22wEnuygJS6V4hsroV2ycKNg25AjEr1TZazrJKJJcixJzR8j7Bj61Rvf2v8fRLPbGrEv1u2bGp68a2Si4wZaHdfW",
  "key21": "677PHZSgZQvJctbaxZQN3cB7P4YP1tczumRTPL8oLSqCsD2LN7zxCLUW9XDrxjkJEtoUBSTctxQLGV2hB1Mnpsky",
  "key22": "4D6WADZ8eKsmGBKu4W9J3AzAgDaVLNSTosp8CL8SM7Eky8nshuFWgbBUhiUesYjp2tV1fazJPwUy4T7nuEZkr8b1",
  "key23": "5f6cxiRy8XqrZvuFNnyYc3mCbRz3FGWggJz7xXgaGhfvjhMNH6nNoLjqwtSkkeCMTjJLsmuV8sEDrGU3h6GxPtm8",
  "key24": "5hQGCNeQ9sxvf6zsPMkJuYXea6PP7jXV5Gmg8frRnoXKV6AAfng6DzM85MUjrc76SZs57zvvQ97JnTQU4To1j68",
  "key25": "4iuwzM79Hs6KFzK1Nq6YENsHDfK8YNs56txq4qqwPmFizEsABEzU4Z2CLXTR5zr3SxAj74ZmHupUdMMh9LuRTyjP",
  "key26": "5f9ArTnqZCxLdvU1qmZnhyd1DQBHDCrVHwTSHkeLPBuDMMfB68ULhPTz7dHeHUJSJShKd5V2m6pt3Z2vGNCz4kfi",
  "key27": "577Et5d8D1f1mGNj5fVMgWcdLRKhVj9pHcXNB5YzEm1SRCzqsUVDjnAE59XpsyGYwwCQbcwtuPMkQg8Kn775S3Gi"
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
