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
    "4bkTcYytAzdMSdJoNy3gNcxemPPHRop5uEHBSxxzUNn5j81XPVUMTqYkuJjcoChjUcUHuQ16YxHWy95qunQPsFKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EN4HHJ77uk6AeL28ytf5zzb44EHkxG1wxcPvwHQQKCKLoRvokC3xwRw9o87brVgWSWsH82UxguiVgkGUQcNeb6n",
  "key1": "4MZNXqqebtJnRodLUG9W62dbYbxP5q8pxYmYwqJ7LQTXuj3kW4RnVketXhvrxGHMQGZURKbxPSGi3niMMeNoiK7e",
  "key2": "2WCLmzCFQwPgFFGGKusdU3sM8KDnvn2eqFLCcunQSAHiEqmmF3voQpCZHbmBxNm7bazZkEs6Ye2jce5ESaCcRAPG",
  "key3": "5jtSHKmVGCndt1LXUxeheVE9RnJwX4G5zixwVUpS9N5YeumMStG92vDAGeChndaoR9g45toVaMPq5vg59KP2jTt1",
  "key4": "3bpVNJonoJYmWJy6KZh8dkwufpf3dBDPefyuYUxNhmsdLaN2ND7uWSS9ymwuZqwscAyZVHxtoLgrF1HYz6DUjkLs",
  "key5": "5jWrYCNE3Ux2xt4Arp1Tdja2FpuP7qGZHWavn5XVWALdMgEodNRV29pj4CkyDejEvpkcdH6gHeBYeXhf6ttuywKR",
  "key6": "mr8gKjhLcJ3fXtFAFgXdbxrNG5pJgDCGMnSX1FTg97d6aFpx9QDaGbNDURaxJRS8AWsgwdKaNhRJAn7XMpsXu1L",
  "key7": "oXAum3wi1r8xaTGxkHBbF2392DFRjEVY3Mi7UXuGfQdabF3DLENN4QWDypo9tmeHdsttxQQVaAYxCjXBHmgASR8",
  "key8": "cQZgvk9ZvdFLRumprrtnXGBdkg2fY3B6T8BvZXS6HT33yPiA4BVMuvBMvrMKkZWXEWHSwCqKe4WFL1t6YZ4gkzT",
  "key9": "4ThLDQSXANZHT8ywPoUitRQMV8Lon56dCEaAH16tFbGggdQBxP9wEPXuGsfMVHmJ1ioiENCwWeB4RbR5rZeiB4z7",
  "key10": "2twyPj36wisekKyeSUeX4V88SKDwvDA9ptDjLH4YCsn7oDVxMkTvsmVwcL9qY8x78vkcUs8CffKCT4uNzZScptHF",
  "key11": "31HwZLDNdSpuRbUBbWKdWnKPezAS6v9LhkPZNa3aajDNmz26BrxM7jiEWcixXNBNTDdKU47jGSHKn1EeH7KYEeuU",
  "key12": "5r3yGmXjQ48WEadekGZq2xkwTsfYMkAcPtnDMM3o7MF7U1dXsR34QPQPoq6feanU4Cba3U9KA43v7BXdRjmFCJxv",
  "key13": "TjcAds1KKJc8NiQZUjHjhDNyFRRUh6Ji3EvuTyikgdmDnbv8yZAEq6dSeMA1RUPLLk9Myh1nEgMqkyj6Mbr1pMo",
  "key14": "3kQThNyyX2hNHEN6vKupDYrGNAFQ2E1eGc3fFApH3ZxVMhZpQAqXJKPNRH8Rnj99RJttk9msF1Enc2cH9vCNH9GV",
  "key15": "3ydbC3gswzseoipZEbHshR8mGz9FQYjjmDiBU5mNvZ26GetdBqqtPJ1trpJhwgd8QCtzgq1J2aZiovTDYugXocKd",
  "key16": "5R7P1ynCKLhbsLx9h9LBZseSxEHjRZFaqRd6CPAuLDrrdtojHRvnkZhwN6Qn289WCu5NBEkz53j9XTNFyWXqA8HC",
  "key17": "FX7d74zA5LEggRAeiQU6HRQn22MXyLMkVCg8USV32qUaC9rwpu5Wwb4XrKWVN7dDHnk94SzC4W83JxQUUPqJ9Uf",
  "key18": "b1R5jTuXW4VJSEyjVwwZDJfW27QqqPfBMBF8QENLCrvkF7TEmnRbKhoxJSk6UYU91qF1Zn3MkdioZUtVCtx4DNY",
  "key19": "3nGuyGwnfWqiEthyMXJcrVDf5euatSnJnW8kHsgkV5zx7hpBiLyyL4z1ps6LQ5MAJggYq5LU2SN11GwLR2JQqrb2",
  "key20": "4s5Dtvc7sEweCpXvpQ53E7Z3ufofVRJHPmniWmav8WAh1rcFZVTToPgsjwi9xi3daZehvLkCKPmiTfSS3SbSU5Ny",
  "key21": "2QNi2NXUuvGULi9GpFbMqWiSN78ZNnWMYjj14dNpZSnH8hQXXT1nn6QQRv6kkzSUJpFHSugL1118xoDBkD5ZCKBA",
  "key22": "3CtA5R4YxUsmFhxB9pvNvxrMsYTzj34vK242bzgHbNpHNLbbjBC9xYSLnt5e8npT3vahJCVPtDzYobo3Cswg5e1V",
  "key23": "52h2UQGWhAcxi6TGuHGngYzHxzw7PL7ugDPjBaGnujTrzUZrc8afFQZPyEZhVzZgBWwKWx68VPGk1MYd5QnPCF8L",
  "key24": "5RBaYvUURA6LGsQniy4n5fL182fZCh5nw9evHRaJyYjx2uJEYK8Yh1ns7ngqFY9YSD2rtw8xrhgJx5Ltrw7bvg2c",
  "key25": "5iL3wGhqdnPZ295HhJF1asMvM6e5Jrqthy9BQLQaKi8uJLegEp25CL8TxhDvkK1xaQmu2YunaEkHPvPnccaNhby5",
  "key26": "3oqUERbG3XwUFjnJWY3BzkXQcBBpYcprfX79sNSBh5iSQxirubJjc9fgqV4aKFo7iP71TjmaWUZpST3aUuBiX2RZ",
  "key27": "2mtoCaQTg8RxzBhdvW7V9jzDWH15kVhVBwHWnUUzCxdm5EKdkX9Bm9tMmCey6Ko7zFdrsyaXFZdcN7cH4SDKkEhY",
  "key28": "4iMo1hxRDYvrRT2SycB3EGi17sK2jnQi2Y9PezcSYj63oaJjsiJHoMHSjgnYNXCh2nLrJrqLnruV38xLxGdAujEm"
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
