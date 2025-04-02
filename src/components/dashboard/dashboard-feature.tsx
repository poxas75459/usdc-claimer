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
    "WYQiQWCRhiwhSsNxf2HGRBVypjsq1EW2pWXfSGg2qwpKNu3sbEDRbrj1hnBJV4TAuwUpH4Lf8GieEERYSS4YZqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NNrXXqbLvwX1xuxbSuPfihaRtDNsudChiqmznZ7KasWG7wYZsvyqW4XoSzcpBhemYG964espXdKiRCq4PapJoqf",
  "key1": "5GWhxvjwBHZNKMhpamt8QDWFz9agsKGDK9d23XJKhv7uTm7GarGtgu3fGcaC6dod5PYZgh7mZVpzSRrW1wZqEQ6i",
  "key2": "3YPLHAp31RULq4dcCp1nbS325VPAuJsYsaY5hap7jPJQHPzDVbnpSq4vfnY4R7bxZfAmJ9Kh4mBCczB4qXYRE7qn",
  "key3": "3wsQoL3nezqGn7MdQSddXNexZoHpHHFrNdtPm1aaKzyEwtwmyYwbnqdeZ9GGTcQLSb8AJGYp3fXZ7tiGvW4Vq2Yp",
  "key4": "4EUidws78xCR5Sd9jS3BKeMTSy6H7bXUPUVNf2GChgYKyT2QcVEbEyB91jWhu2GaeRD74mLhKSMr2bGW1sjS9gBC",
  "key5": "5UQ3Y8c9pvAKKyHV1fBBe6xr8aF8odCF8oma5kgA4F8tQhCpAsE5gspxtSaB4RXsPNEkMNzaj8L7AXzWud6ZXgS3",
  "key6": "3kgmpNUiWheVMd9e4JeAXQb4gH59WQBATFmmavPgY4WmkJAsK1yo41T1K9ySSx2hnwwFvULFuMFNrMdpShGGx36L",
  "key7": "5SfZwc8pegCMaQ11YS9GA141YonGxjgMGCJqXsCgxV6Vkaps1NLQ4en1ka7SuDHjiJS41c1eH4JSgTekYTVmPNGx",
  "key8": "onJW77EHaBVxm8Rm9pdVHemBDUcE5j5GiouhGwrgdgmD4BPtsdmQoTrPFAgLgNoQASYc7b2kBBJ7nvaasukrFor",
  "key9": "2cZ78cocSSAYfopMoULsSv2XApZRiuDGcNFzneXmCGRMbjfXnkuhFm9SqXwTRaj9mBSK8aZh5s7aNDoDR6E896vF",
  "key10": "3sE2eTnhwdwrTdR2LAzy2oW7NDykoXgtCokyqRormE996aZCxto9GThsNnZ1TuZh4mJrUirtpkywBvNYc3JNLhj4",
  "key11": "5VcLpKDCCSYsL3fGq22TQRsfJ6yfb4xKbY1MaL6RdmAjiLrbiHkwE3UMYoyEMVPKSvFHk2mKUfHAndduWjmz3hk5",
  "key12": "2FajE93De37X9bh9PR7sVDjyQZfcFA4pJiTSyiJk7hEzWnpYXPp3LMsYNDm5fH5Dgkab1uUGh5WadE5XdVxtK9Uy",
  "key13": "3P7tm41hMVp9jf8Ch9Ly7bLe68BszDkj6fyHEk5evJFmTr17efmos8wcYJNide1nedkyvv4pXMcKXxdGezq1RdJT",
  "key14": "4Ex5vpFwW3NpHftCX7PVWPkBMNj18o87TXSzFBnLnrFonBHU5nV2dP3YLo3LYfg4HRKvssQx1SZoV6Wqx3AWQ1ht",
  "key15": "48k8q3DYzvwXqtNTPgdrvmZ1uxC6CXotqgCBXCwMhPMUcPURyNLHvYsi8b4EJH1NuARTzC38QCAzzCWnKB4pPBEt",
  "key16": "joL9WSkQqT3rkXHUGWEq1bzbPHwXM74eKhNAs7YdxbJkQTbNpZxvTs4wQ6vKhgAaDfWiJ72b5wPLqsiU5KgrCB1",
  "key17": "4XYYaDuPrCAdudPKXRjM8yHCJn7TwsWuBFuDLewDc7krGtWcfe66ohtu2qRm8Y9Y9hLJVkAW1NG4H2endCp87zWL",
  "key18": "u1qrUmgEkPyobLqvS4uu8dQCZpS7CNXAmEkM4pTZLYHJTAkDkXJS9oMu5fTy5DtwG7PBV62H2fThSky4hyF7FAr",
  "key19": "5AgnBELrQGqem8pDrdza9JvEhA231y6zPEmdWCqQhwfx8SCdPd5mVNBBbNtZJYsmjWmRxThDRKjrMqFRGFNjLFb1",
  "key20": "P2rBj3ugRE89HX9cZiy3ih92c28VrPVEc3DTLfbjJc3X7qR2xtyGsqfpiX6WYAC2fjjBnfBSWaBSnfsTzn7vkZQ",
  "key21": "hygGE5m8fZ16JAsQ4BXpE8VHoRgfKRoYEyN5TWjxo7F9Vcb7FFs6SqKJERSbiS3KJrnigzCt2xWJk1X4XqDyKev",
  "key22": "27dBraKnomNHXpsNmVwEVvSoLoaCued1Pm6SLRZdBFPEqmMNKDPJRSQgWGdMQyPCwT57ZfjZn7aRHUGiTzvds3hX",
  "key23": "3wcdJhjrkXzyvaY9B3VvWTJfSwMT8JUa4UjfvXuEAQZyLDiH2ws8hNKPHzySNF6H6L77thSFSQw66tdxxW6x58vE",
  "key24": "3iappNyTXLEdFB2KjnqNX5TXNtxwaUhEfEvZgBeGAVk7Akiga4CvobTAhWpSQ2isarodfkZ8UCrvEg1H3RWNao2m",
  "key25": "DkdxvJ1LTfkToj319k87uSMvBNjbjVUq5kLKyW97ZPMf4T1FNKzvAJfxFcJCHZiP6vLGEb2SmZzfEEN2A2ayqY3"
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
