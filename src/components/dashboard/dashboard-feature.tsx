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
    "3THKox9tpquKet8cjpehSx62w3U3NhdFtiJmrr7KQhymrpuL7E7nS5pPrciw1ohx5FB6Bsi2xYo94y26e5sfUkjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkQGqCkJZs4NpDWUxcM1wK9ZvonvvbbisjwqLY1HjZKqBkBJS5ThbP5Len2X283nxhQWp31LM1xoMeb3DG8jiRx",
  "key1": "4QUeoK2r59VbmSSwTS7A2vd6KtXDgzBqxeK8EHhF3x3oQ6eqe3SxSYgxaYszPv5PenNwK49gT4ZkSjXvbvPWD9Yy",
  "key2": "pE4Vn9fAN4mFCM5zK1T8nra7QPhnoizaRZL2FWgav1pZkFzmd7EjEM3vYzRgnSCgFvQRsEzNc5nUhjGjE61ZgEd",
  "key3": "UbCaTdWaADQqJhWqY2ucjjrc8n42xzTRk7NS5Jdm78y7HemMU9Aan8sGLAAgbkGUNXgi3B8HShvz8Lx8Ho43wD3",
  "key4": "3zAc3c5w1Lce1W5gaCjszTZ4uw4eTWX1GP8r8WYANSoDYD9jYNvCUmw6BLrbtywBtBeHZkkpZkvKZ7npDrCNXpCq",
  "key5": "21JFz7Qgtgo8rAVR6E6cHGMYnzr453Med6HpU1fckGg8HhWZ2pccs46cjxN2SPG7io2HhS6Vgij7SEAnE5mevtzk",
  "key6": "4Pc3nqE7FA7gMY8wQGKhEzKQtihBS2HyQU6fEZwgzurzEvwLFeHHPE3BjsHdrFMVkAuWreDTHc9DeQdjJVc7RgvE",
  "key7": "2JGhp3XUMi9EgJb2nFV38hYmyV4BEDT4jwcAca5BZdsr6embTAeAcYBpvzqUo1PXFe4RHDfX4NgAHjAhnV254w36",
  "key8": "5D6ZoGXTf4HiaJFkB8rCfxUhCtovR5sSiW9dJ982TvDo1SR5DRf3wzAJvwtkZUzHUzPGWXScAzQ1waTWVGhyRKs8",
  "key9": "ZoY7aQMWXj3ucwTpcjXNSKQELenjWXqGDfzY3vgME1KAHNGm8z5WYnVcKXidd941WChjBSVARZj987XXZjJWoa9",
  "key10": "5rSKevps7apiCJjVmdXRjoVQQTZzaXm8GAczkPBhsMipMisDKiqjEjTM63gctbnV6Xqafe3q3hATDsL3DB9xYMBx",
  "key11": "5v8tSZnoHEismxiVeoU8YpXnow9ih41bEatSsWghsFSwFUCFj59xwxPCUgQ8TwBdVuBq7z5Dwc6sXrFDtytF2vC9",
  "key12": "3JF8tFYeVtFButx6h6qbMbpzomkHLSj5HyHMTdiudS7u3CCf4wMgfDpfWjLhCTUCs7iFM435S2WhX5191hq3Kh4K",
  "key13": "5yNzn41CUHDnPRBRoE8uwakmSzPSafUo2G2xDBhUFqahPXQRcdqDrBiakA4n73RtzAqooH7whGt6H27VoEG3hsUr",
  "key14": "Z6BL4pUU67qs97Bye5ubVk91DGkAY9KjeanqtpCt8an5Gp6ANLGBXCZbSxrD3qMYyjGpNbzSecykuzN71DCsRv2",
  "key15": "3Ks7y7gZZzKPnxhn4sPTfPb1z2sPJYH2m4nGtZbvo39b6HzmyvrBg8ShhaPQm1x3HP647X5tUqBXcxPHCV1vrQtF",
  "key16": "4fmeaD93tYW7oAms6VQqhV77PZZzLCP1RY3b9Fp33P2FJQTgszHUkKpVfrQ9yGkMPddEcWAsMUiBMLbJumjvw4m9",
  "key17": "4GeNztMmGaWQM3LqPTzMrATSpvXUS4aRHaaaGLy9fM3cgBiVGpLtR25mp3dmZBdMdHBdP8MGLmvuBhhn6ucV4G6Q",
  "key18": "49QrPuWtvGzaiqzTkggFTNDbrReW8PqVRjfabu33EmpfJNZQnGywU1ZyXechp54LHgkWeQvUQ5G3oZXsrBMB7dro",
  "key19": "UXawWHxnnJs2ve3oJr9hZc2PobRuermbCqkxDqN8p6p3yjQnk1PWtb37eeGifUEYEXxuTxMSD6kGm24BqTxXxeA",
  "key20": "3vcCcCQ9gVREJpjAYiTxW1ZGyZGM2YUnpUNw7BBtoa9N1cx8uhQFrYcCqYgAHAaCTfvjStFfgx5jrKrweus2aZyt",
  "key21": "4dpxi2m89TXhWFriYwAgvJ39dWntJX4K5We75f3yGVzCF8ujrHSsTdyqWLPWg6zW9c3uoVoNhRxLH1qsvF29Yn5t",
  "key22": "4MsP4Znmdqp9XAFTDN5cVFxoNjnJgpXVQF5VAmGwJGsyznm7cNuUXxoi55oe46h8LroyMgMWCV4cW8or9syQQw43",
  "key23": "cRZfeu58AZvT3PYQTVjdQNnE3vwZQRqMByoEbgd9X9xsrcc1mrcjxv8VdrRo47nmcpQvJMma38Nd9Ak5L9fTbk4",
  "key24": "5TyFmR4sh8itfPFDWpkoebsUeXy3ssyEYfX3bHUmPuAJa7KFBXJD8vAoufZv6Ne4CHf9Kd6QSMw1D43UmTzT1jiu",
  "key25": "48PnkuiuvHPCbXXf11omjUYF8YhZwYdqKmNmr2nxNRirb3bDDtFPj17U3FEq442csrf1hGPG8rKKBCVQnSLVt6oG",
  "key26": "2AtWCx4bEy7RGoq4QA3nCW5uYiJCbhfcVqTNbBpbvQuu88cLKE9Yyj73fwwdMb6VcMyH3bp6qDn48rQM7QhnCoPM",
  "key27": "6FMWq8e1XSmjVzf3bp9SoRkegUSp1hr2aaNmy46okhHqYQegFymeguAFD8HLXNhwhB6XeLjtWEXTJZtbc2WGLMv",
  "key28": "5fDTeSZSdiVbRtbSCNc1cwnsXg2A9MqfTiuiEgevAgFBHXMZ1VVZaSi5eemwFR1eVaQXEW1zQoEyoeGu9F7kwDjB",
  "key29": "5hJQf4fCXUM7rndkr8Quu9LKnvTKft1WKtGV16UUwZ18YgeiAcNghQwPsCauJsCLo5HMUsGh3oJxtPC6Q5SEi64c",
  "key30": "i4mV8LXwgbTRLCxJAqHFHf3GXa13VUgdKRwirVRm2NyRSnYdDzfSB6Y9PtwTJpf4drBKoyGhHxv9Xe73uhGJBvc",
  "key31": "46q92tFYRFTk5kScrhX1yVq9jUacnVfo7d8r6jVuACNRqeTQgYUDP9mAhyytKaxraYEd9NJxi26X6qBuFWMjAdP1",
  "key32": "H3R6Wp5eSrD9qQfQahycTH8UGhAQ9VpeqFqYTiq38QKmXeUNZbQ4z7HGMA7UhHXpKevhdYjdiZ4WPLrfGoRjcFP"
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
