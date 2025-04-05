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
    "4GVpFcYyezz6PKfZd5TAJoUW5RLKzC2zR1qjkTv22ZRG1qUL3mCweahn1y7vEToergY2hUphMVvjRUURJdABkiWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b9TzHufWMaLQ9pkLo6YF6FMtWg2kjRRCAjtzQa1WQB7cNjU9x781pZvXcpDYBb3NEcHqAvbxsoEDRxNsAgFJgyJ",
  "key1": "42jhugqijjBqLxopTzbJqKzMvmVMpadWsEBiPYhVmHCgntASee9QdFSeLg1VTP9qowroquREhc7dsUxNu2FqMz21",
  "key2": "iG1uTr4YdBeyuAr4GStiQ8H65u1BTbapCZSxoWaSVm2vSzXnGyj5FDMXmZHxvsmpW9DgYwytdhbJSsEWgHGtXBk",
  "key3": "KcB9JiQCu8o5zhDyJkpWNjXEvTFxx59riDzrct4LxpSVJNbEbp5phe9qxfZPg4MMU3YNMp4bK6x6wStm7CsndVF",
  "key4": "4eA17WodYKpVhFAJWa9kktMVLNGGNZcQfVymek5jkYdUyg7U3rsWNPKRTAMHnjtf3NDrJDcBAKQvwAqedQ7bFxKy",
  "key5": "5q2Pxu5BiWEgW4CcUmubKyNAXrpxouf6sSweCtvML6R5XA1yYsZV5wuui5D9jy5gnKy4nUy25cL9PPUH5zBUDd44",
  "key6": "3i4gpoN59Smoh5q3fFn9zKgm1ngFXmYNYCCvA1B6hfPoAoYrH7Sikj4xctvvpmuVnmABLkMx2c4mkX2em22VbBGS",
  "key7": "5chFNzAwksXGz3WyELTJEZrw7eM7D6yLPNwE8v9waEB16JKreyDvikEZHVmTMTKqyP99RJ76pZ5A4YrJ5iJz7zUN",
  "key8": "4KbaRDxNZdy6f8s92VD9PmCphRb6hNWefyKCFWwge4TGeFutMzYXvjnQoEdY4h713mz38G4KdjjDTF2x7dG1gDCs",
  "key9": "5nBdKJiDRDZeYSJLzf38cX5cEocHr2u5SUzkZwiGsaqd613tsmy5vWSrSNhC1XznUrLo5yXetykRsjWhB42ebhEX",
  "key10": "2TSPJHZ3TJEtFV1zbdsAFb6gju5wa53nohv1DMzr2KDz7umA1HbvesRRMx8L9wM4rPrLsVzAYqMgK2E5umvUYoz9",
  "key11": "45U33jNWzmDbdzk9W1oP2ijEw4ULpufz1Cq7Uyw3TeYQDRwHs8abpQRoiT6MUHkPcLgkfs79d6qFMmibcLXje2V8",
  "key12": "2Dak2tMZ6Su3a8QbDaPDEpMmFdyFkaP1aH13wfAGu8Y3P1WVWJP84DRPrqzLX1L9Xyi8UKy6Wj8S2XcEoyC2MUYf",
  "key13": "3N2CgrwtANuxBuvt76k4N5yNaYn6fnfycyU35Fhu1ARKNygiLZHNjYLxCLs6ebkpDQSbAnNY2A8HmDwRbRnpGEAs",
  "key14": "4JUqGhEy4WaYQ794UcJPAVGyiuiZhDceExgrfV6tWqDGs7dusvdQYMN25qRR7C98sPY3pikUUvmXs1BVSGN1ZFFi",
  "key15": "DABBCv5Zp1T2pu68rgEea7uAqQHcW9p1mfwzsrUYmjfNXMVm819sqEzpuNM5cwQy87oPfLobxke85qdFCTYZzq5",
  "key16": "3TfiWToaCsHPGWYhgzdNRyYtAZjY4bmRr3iDBj5eVSNUJdGgPvXUaiwvatTWnj7oiU1enNeUnrK1hSJFChamhaPm",
  "key17": "53Vk3JDzJCQc6sXdyzJ8TvzTxXPq5Vi4Szbob2X4Z1XyirKSxfRoQh3F2LfMGmAoLZihP9nfCKgFqskCAkvQnWc6",
  "key18": "5e3VjBVoocRefft7akUv1hQCTZN6jPRyurbL4Gc19L6txSD2nQdXtEQWjFrz4m4pRWKoP3s6pVYTQSon3W8SxK14",
  "key19": "2e3yNdafe8tbS2XAFv1udYYZBTqq8X44D3qFoSnD2AAzEgnCrchSzDGh9deE75pG4ZAcf4Qij9f8sGYC9bpyQbVG",
  "key20": "3QZ38xHYmEZQG1PcK6it4daXMhHcGPEEBkzZ1jHKmsL48JkH6G4Cm4yG17nabym57ETJz9FeS5FzVwmJYVs5VYXt",
  "key21": "45B18oY3TtKHTNQyvYj1S93mnNokpeVkSPM9nQQ73b2MZHMkHkAHABq22E2nLFW41HQfv8qcE92zGnkay7yvoUXL",
  "key22": "5HoMFX48DYBdR4MHd7uY8o4RuNYA3c73AkrEpptNZoR9XZ2CuxU5yNchrhoE7KmKfcQVFQQUrHbpPdJWcocUNZkC",
  "key23": "5KMGL6TKLdJVuVhfvWxmyKpxQpZJip33qYjK6FyqJHr43BuWtTvqjgK1L5N9WRkWgEkgeu3STMCv88P1g4iDWkJf",
  "key24": "fhWvt8PgMjB48KhjE8PKv7bpnHvDffUXy7nseGpuvnkNpEXDXzgUDeofquQUp7PxsPYot2r5fwCRok1kYGyxhzK",
  "key25": "4qahh4TekWua2aithxUQY9EgUBP6prdPzsJn8dX4T9zWzvauZ3Fr1UMFdLgjURKbikgEgjYTiVLYTqWEGN81gqdX",
  "key26": "4oKW5jASMtD9CSyQX8KWpaFSujqJv1HskiAv6MHPz9sXMVdnrUGFRCfxwGiUPPZ73ULLGuBceKpTGp7HdrwzZE2",
  "key27": "4Eb4sYeDCWPmzvepJYuyE3pvPWzNeYmjPTN47pfMd2m6sDzEFLnq5dGoYGLHY6ubeVcpPF2fzquJKibSrBUb7wrV",
  "key28": "2VabxN6qfqag5DWJRPDiEksbzbrQoFTyFcch3pNqZTJDQtukgZZLAWVooPrBEc5sfYFBEgDnZDgFjVBS9m8CdisY"
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
