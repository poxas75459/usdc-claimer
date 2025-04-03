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
    "3ipr6MpkPNHMJDbdN9arHxUy6DUCpzgFrYyzp82YSazaBB9AM22Gez5WbRYL3Q8WucHsBvCffnef8bhZsZmL2N2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TwsdQDqf6NiwJncvqtG9VfqgjGwoKyhDwgEwYXcqa34pzXehKiRN1p5McK9YKezzeSvrTwvDMphDCRPVckfFQdC",
  "key1": "3z594LSveQD39QJFRnDVzSfvm4KrA4WNXy4NDuDCoeaEuxVZPCsc2h223tgEuNZBnUEnH4k9z8wnGuHbEpHGwZk6",
  "key2": "47SmxfSZxSG5xGdewMGU3Q6YBzJ5zt6UWFb7pGo2z1pj9E1qLD69WgXaF1QPpTEUSEiMajFSaB8Ed9fjZUVXkTgc",
  "key3": "4Eb2P7QCHfqWFJJhw855atL62nebuqdChP1QMYU6YAEHB1mKQyJCrQpqbNcynCuFfHdE1mumncbc7MRRQrMr2apG",
  "key4": "b3kFkWVjT2qzZrC3SUGQt84o5STQw4R2ePPAPCM9M8c2i4Qt7gPmt6vikmQ3kxrPBM14pmBQszQGBeBHonCSKuL",
  "key5": "5HGWjYC4mwNVkUbNRm8ouXymBEbhk3bpYZopai854GAcHMWR2B6njvdXCgyrBzrHUtZc8ZHggJhLPXMuFnevUpMj",
  "key6": "3oBu1e8v3272JPQUUeHsjcHvAUhgh3jwrxLKsPbwJaHqUZcGqjNo6Au6Wq9CNJbGSSwYxvmi9XKYembThJUVrPJv",
  "key7": "EwiN93wad5c4AYiMcpbVJwfWzE31wvNYJt5NVjHhHJqW8cwFcQLDvwBNUkgvf6TfkiCY9n27KaWDA91HzZvoVL9",
  "key8": "45B5oYdJ4v8qHGS2MdZMvsVYcuYpLBPWTKcxvFuTWYFbtHxX3Yfi2R3xMNGmpcEjdoG47jcNvs5qiamoZAabEk48",
  "key9": "2PMPMyrsmTBYbqKSC6wsmSCFcqz3yhAimNeSV4FnJdRPL2K5PkdgWTbS4r8FdiqLZnk8cTRDSA7JzSvgTNTaVhDA",
  "key10": "qicuvBqSx3oxFWJj7Zu6BXfBVnnhHdoLm9iMKSrX7QnJBSQe73V8BiwkXpJ1eQhva2Na7miaU975M99j6fDCEDN",
  "key11": "VVbrJtA8eVE1Ui3dQqrDXiRGCmt5vnLFq4FUdtBr3Tt6NYc7rs3Yn7aqzTtMQGLBeLcDKBzMiSLmExoj7YK6CBr",
  "key12": "5hHYmXfQ7oZVjfpFQzTVS7kiG9ByUAFzBXUX1k9FmZZvUo2ioVi96qEyxniQyQH1oxDnLNe9cEmK1wjjHWu4Zan1",
  "key13": "5LLG3HvbD7Ymd49qHfEwjVjNVQGkz7XFYNMgB5jHgAtUaELCmUGESF2egbjzFbQj5bnWdCf6W4WKHYPRUEaTj6qT",
  "key14": "5auKjKDS9LgMCy1NAFvsJojrad7ESRCZ8Qd95qqUWsmyJRYLCYNeqfCajsNgBhJKB9VcSikLVHzc4TBcoVJh4BRw",
  "key15": "3NYYa6ghjpL7wGvTmrq9NNFvh3ox3GKcfkw5nHuT3FWmYzZreZ279HcKUu4pGLfmDVpYg3Mmin4KdKfpuaE3nv2r",
  "key16": "4DZmBNUv5eBqbSoTG15Kj2BZUnk6zQnbkfUPpw61tNWoKZ37ycZUMAYwWJJ4JqMW51Q46pqRkWkD8yBHLqa6fUXT",
  "key17": "4nGCE3JwuTb1gLQnZeBbWhQfxzKmMKPBQZwy6tznqgAvqXKZmHeVSBpcit4zahecGBn2NtjVJXefcRmAFMTc9PYy",
  "key18": "24J2ZAJAtXXgnuvoK5RE4zyKhrC7nHrN35L5PRrDfqbTcRxbSZAEwN6v4nfiDsrroNkj2p3EhBpdsxJotWDHJLQJ",
  "key19": "DTGjJHZiaohps2BCtX4cJVNpWFyMwBhTEut5QNn6vWsuD4DBkJMgWW82jrnA3Pt5HrQcVVQDDyMC8JvBucAo7Uh",
  "key20": "5nQ8U4Frt4uBtFM5Nw7TpWqQr5wHDtMdmZ7VbsT7AfcJoi1ACLw3aw84EMDuSAcL85wxGcUz9XJAkYLVGUo7v5XH",
  "key21": "5BioK7QTBKKYFU4V3eK2ho4Jr1FgUESTBcRWtVXj6ZMoNSDaRNRe8fajTf1QGAvjGysD2qWjFXaJtT7ZwCzXwnpd",
  "key22": "2ks6gkgzc5AgBKwsmaQWVsw8tWramSnjTPmueQMcNhdcpeDKScqAsRy761E3F2sz2xNzuTBKjzPHBJJj4DNhQepi",
  "key23": "8JJAksT1YWZJvpD43SkvndKensgxSz3ETqJ3QQVFuFj2gW4QeNqfSRWp3ByQmtAo16pDPU3yR4hLkcxziurghuj",
  "key24": "44CJQPrUTCqx5XhN4Yox5juTHvYykRSF12FmaN3nrxE6Z5kYQzUAnBoYfvW3AvwQhfYhkTkxJD9vML66hTUCeT5m",
  "key25": "4G1XALd4tUe7mPixLHLzLgXCPa17e4MZ7qvhRSvGY83gWDEKUJmFYBMsHekRFjahMHrfHtGrJigdxw3PQi3f8TsC",
  "key26": "2BcgvXVYVsMZfx89h7aQoonfV8zw73Mc6uc7crAoDUHD5xcLQ5XEozcV8pN9Qr8XCvk7CpTf45uV1GmfBcUc6z64",
  "key27": "5nUKGfBFpdWXxFUnekueBsi3S4LZVJhdw7GHwUeZ36wbLYd1RjD4vxLgvmnzcbugKBrck51Rqzr3fwtwJHqvkGQy",
  "key28": "2pJ9mLUtmmiSi5cvJeFZNk9avpjkm4Vmhw6WjsW28acaJQBBu8CYrzZAtAKc8vDmPZb9YDiu4zdTT8rGyxynvvrd",
  "key29": "JixWx52QhnT8Xqpt8o3bXKRywT5vn7rjS1GdscdVrR38Jwrpcri755QUsbrcGyG7rUZeYjbCG8mDa8hZH4U2VmE",
  "key30": "2Q9P42VR8T8cWQRbTZ6rEcqwuk5SyKSLsGYP5nEdcXM5RwZrgJtXCJg4JDag8ZGr56sGZjEjNXHqCzHUfvLJoQfB",
  "key31": "4rPhwfeetg7MarGabTrAPQzqYuQJDb1zDzCKUQQSGgp4gqo62DJM5fmGh8F5CrcPTbrQq8zdNapGLR2AwpU9C6S2",
  "key32": "4NDxRNGf7e6sL8sBeExNcELr2zLbqHY3nB5iQqeZedFvaXsXdUj32ucpGR2EvCxzYYVCNimWHUFvjMVFvCRD8fPC",
  "key33": "7NS1rdHXTWfyRVuZRukp5P4f9feCjZfzPQjQ67Rxb8DP8g6fVV6XUcgMfMSYCoy885PJkEgkVDid5DttN74F2Kc"
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
