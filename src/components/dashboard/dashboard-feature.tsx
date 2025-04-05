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
    "5B333MoSRGeVLLbWZcbi5hxNekFMStwoAMTXLDujHX2XT3zmuXEZ1KWY91VYPw7HbJnEPkzQjQZ7vti5oyLyMPP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Smq1B2XuKGShwYvcdwV6JeMp8WGkwk61aA5SmKEjwP8vkpDy8ScGXpQCoko13524ZhjYMDVAe3wTJaKXKxuMRi6",
  "key1": "4qoMgictBVij4voKS83XpDecmKKffKF3RjxmAc7psVBRYy6Xd3UZqc2DaaDs9YTqVJEC8qqgzKAZXL2Fy1SWiEhv",
  "key2": "5Qu3XbsW649ZrNFSoUWJmTp2rThYeVh56q6xJHjQrZberTE9wCFZNiUqc2oCd8m136J1ctbtdCBHNo2ejL8ay4bS",
  "key3": "dAv9ymeT31sqRcUAe15PBSqwocD3UM7HUrhWkPFB5W4HjRgE8CGdDgYvmJZTuVCb9Kwg6rNoBhugGYMUXcqsQU9",
  "key4": "5JgBYPTvwsQpsyNyKYzw15pcDHeoV3AJnGqrFrBdpEJNBTiZRNUaA1NtiWTE2FyKjs54C2N6ddmvnpVtP8eeaa9d",
  "key5": "5bvuoj9hiTyLvLYKiszoju1bbFhnPeyEzep3dAs17cAE37apYbn5EUGZXEFUbCkqbemmqF1X7EwzYF2JHD8Tm9pS",
  "key6": "2neXJeka8nzRnE91QudDCpsim7Jm6d3oG8DSxrhGnizZGhbCqgMajY94S9u6qLSx6PqjDX91ef3rBNNzdPKG2y2J",
  "key7": "2uGHnT2YFuMYB3Himd9HSu2SJircmWmT8QQ5RK52yrmnPy3KSQgH8H7YevkY7U2H9dMmuYsLFvwjJHTmfffXC8Tg",
  "key8": "3YMcugAjRtgGPAU23NVKrgy9orRuePxWMw7AFFddJmWYBzWUV3wwzzQS7EwcarfU5XvhV5LYo6jkEAdDUFzHLZyp",
  "key9": "5EkrMB1HqmpjyCbQt8sFYsomycejESdfp3GMnZ45PgKsPhViAN5jF6sSxM2yfHPnaw1ZKnpXJZ8nRSF1Mbm36Fvh",
  "key10": "4pCsXKbCG4icvKDZGNi7itNerK2bGqtSHk9x8CfyeEaLNXcv8guChb3XAF1aVb9R9KSsW8uQLQuzTM5bfwda5wU5",
  "key11": "LM5jJhDpWvnsEf5kpxBz1eQc6GNvt3zdrDmo16f1LomnrrJ9QNjV3jJ7AQ77cr1F8g35Y8NP8bjkcJCNny5c3rG",
  "key12": "5f9VHR9i7wEPJ7iQisBxgaSgihoE6SAmvkS3c1NbUZRDHgJYn1WfFse1rQx1YwbEM7sjyxfPM7GpCL6yNXQaMBbF",
  "key13": "2WvjwkioDjQHzsDFtsHSM9FWwzW8CuxzNQ7qAy4uiUP7AjwbBVPCnCYkbn1dpYP3QJNPxonmhWVg4pbYAdoMPrBG",
  "key14": "2FQGXT31VXKSD658xe9oWXvGkPEUb8LNmTxi45B8ZX2T8Aog5TVNNigYWWR18femSMWehfSGsXzmeAKodPpqKrLT",
  "key15": "5ZneBy5p3JWVGnw34Zv36GWzBhqtnE2QMUyUji8ihtohWFMB98fLL1sKqW6k2dcKgTDP5xYrx3NhKL4RxvtFgA6R",
  "key16": "3uSGd8jQdgTkfznv6YX68VDqBbiQjinNLgg9o1LKfuN3oDih31ubrSsBdNH22WBYC9w9fc5fS3JSwN6HqPxZiRuA",
  "key17": "3ATPxo51atqRVb8TFZi5mR4p6cLrHb8w6ndAxthsnifFHTLMWutpY7nMKUC16sPgnGu8d19UXUb5H4AdySKwSbTe",
  "key18": "3MDRjKJQsp9WEAFLbVtZLmmjy555Kd2YaPwZsb4o9Qj1fw3PinT5h8budbjGMCY3ftCrKEuEFrW98NkhhUvD4xb6",
  "key19": "4qQTRfpgoe3Cvqd8K7THhN7nVFvU2Heu34JiyhQ35pjnPGHRPXGm6HNhz2TLvmnhUpYkQBKrVkrRmD6ceN3Q3U3p",
  "key20": "5crJ1TvDqm7DSFUfPoBihMkULYLqqKzEuMPLLG45848nvoUF677t3qo9VqatPEKzNFjTpRfvghJ3rK8iy8h7AnTj",
  "key21": "3EyN4vFVSQxpWtEuTwdj7nxbGdZTcFYLswCKjKSWoVqq5buWqwLBXdmsoKdzRXFAcFAh15UyH4gxZ9nAcHUS5BbY",
  "key22": "3a28RNiP5cp88LMqZGKHa6KFsNnEkJg9B4fqz3x3PYX789uoUQo4RhkZ5B9mHDiEDLkf2WMzKLosrGa6fV1sk9QF",
  "key23": "5a9g3YE7mST9ZkmSZK1KhhipWe7actBBKbN3kaXgT5gJCNgFSw3Vf6uaiZuWYU7vT69eaJjvaVbyYAGhk2K5Fd6y",
  "key24": "5W4quHmfqc1suuqYbQmzqUaVsVHhB9rvy8dG6MXoZJVv1hLseV7fsvypDrsVUjeEgdnkMMnb4FZ1YRQ4xN5BNUDE",
  "key25": "4gFhQjHGEDCqrNrxTBiA9z8aBnHGJe1ibZU2ZuLUWMo6a3k1jqGYa23E6w1ZG5kyEpzYvvgNGmvvZVrSpTfQDngD",
  "key26": "3B37Eca3u72uHJAmkLHJmuVHYwhTiUbaXz1Y5nfTTkMKGYeq5e7WrSBdnQipUBn5a7oqt7Q7RYPjgmKhcUNVva7W",
  "key27": "2dQRgDvPqoX8QjWuYMuJe77Nsf9Lp5qsg7NUBzhdcJXmvzZsUL5VjVxsLL7sMwvjvjL7djAuTFcL1jKsFpztDmB7",
  "key28": "2Fn9wBouEk9mo3vcGBdsd1AZXeFRFpQEHWN8e4Em4TneErfEfBTUSujn8YcM88i7s9XuvBEUa7LpfeC615TMzctt",
  "key29": "5ePpqvtx3budYCq1AFF8bjBKpGU96Bh2Amxf77ScoTTiqfMQfffjWskDjzvpvkNw4qmDS5Az8mPgiPNbMe6pTXY6",
  "key30": "2p8bXydCmPf1cw1QwagHAaGxEvB98wrogvqaJxqUskevd6Rw8dvFeDYFcdF6o9K1PKwyCTHxL5QSebtbEnNz23Zw"
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
