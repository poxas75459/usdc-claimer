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
    "25pLXs768KhiGDzJhK6rb6q8oJ5xdLdBECasoNtqTWFEbcATjHpkfWNzU7c2bCeCaWQs5sqVJuUL5ndakG4smdAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eAvSojKYTg19dr1JnPqcQieW9NununoJKapNJfLHuPSL7v7LkumLCFSnW49AGHvq4mK95nJNZgp6yLQ5hp8wrmP",
  "key1": "j9w3xKq1NYQ97abAFUj7TKnVPKyK6ZP34ZhrQkxDkLYFWcthYkNos5x8yS8bBjjGF5PwoVLhqKmCFRGmXSEMfKM",
  "key2": "5C9ScENUubZBp71mdEzLgwPqTMSwhj5zgqkjYBqK626hAUGidRW3NB3roYHWMptAaHCT7755nqwjvMUyTVvdRcsr",
  "key3": "4S5UDyXu67sEGYFPKgANA5Ysx87YW2batdNY2iJ6G2gdRJ9de45og8MpuCsGk8NP1hJq59JrNcfeMoUD69mDZsMi",
  "key4": "BW15oAXQhxK7NhVJkDgWABYCtEULmsL8PHnNZCYWatvxZ6UcsQ1yshRMySpVmD7Nj9yrQJ81PBofxiDs8tRogFe",
  "key5": "5d1Swfzf2RiTM14VRTgoxrK2j9KSqfsrjgiNNYfXWNc1JyD8Ld6GXwtQuo7tV1FoXZPFSdVaRatiYnJJds25wgzp",
  "key6": "3zx6sUPXHFWs4SEGit3bMRvty5sgYEwrjDcy64GQzLXQezYGtKFSZuBwKKSKALwLU7y9Gki2KQb4c1bTMiD2n2TC",
  "key7": "5Er6FEbsahahwccFvhrG8VhqJDHFpnbeCDeUQruY2THazFun7PnSQF2PjpPb3bGtvYNKbzzF1ZP9PRdokQ48jvMg",
  "key8": "4hVxnJ9PLgGqf5uNFRsy8aJvYQGwSSW1HqbStuUtKomLq7xBg79TdHyCB5qNftn3us9UsFKq8x8oPKC9j6KmQrHY",
  "key9": "63PANMgcBNYw8qxDRAgwUpH6AXhBCFKuqBzdyKHNu5bDC6kUEktWPqVBdA1WW2XhWgCC5iNWSTmUnwfzLBKdo8kd",
  "key10": "4pKk8ojGsPUC51fxtFDttgBCS4d5QaxdeZAj13RPWiAEEk1DPqSQtBYJPm9dJBwPfKbDbdpvdTtDPNT58TWqvxB9",
  "key11": "33RAq7owEuhD7ra7zQhGYmJodvpKogchQwZVBJXoAiX11cgiwwQtrEf5YWFLaCgDtBNDqNGXzQ9gDuzoK8pzBsjg",
  "key12": "44GmEz5aa91SFRG6hQphDjREbrRH5h6WUMuw1g4Yeoi3HCyEvDKGVPNqnMPuQbimxJtTNvAqT5qoXJGBC6tWoRjP",
  "key13": "pysMUMGSWCK9P5zgBdZ3tkSKokrVnGZPmQnfvCHYfkgMWVrYrdA5wsP2r6uERfN3t5nY6WLBeqiaEWAHcY7tkcN",
  "key14": "2gQKR75MfPXVqSvNLunMeKWrTtGhbXa2d1BQfpu5yEQE2nYdo63XVRz8vRzUa4rxAyNMigmpw47pqUtHkQ5dvYJe",
  "key15": "2TdKEkKiiqHXPgjwrunuP1jH4UcYYqFwnBS1GY8W8Sfrm8tZ4ubajEy37Ctq2XmdCRwjwJDmsfeJdoxn4cuY78SE",
  "key16": "4eo4oBvEViG2Uo2ZYqwCz9SdVFxGaHwpV2TFgei85NnrpeURuTuzLReinNxQab5a6trTYkQG3xzWZyExtN9EzGM3",
  "key17": "4gKHQnw3UsRKWBBwWbcT5phqg7yaqXPrT8tqEGrfGmCJBkCoQuE9eJHhXbHxS27XohweRCj5curH3ggSP6qY1JDy",
  "key18": "2ksHmc685B4gXUr6gB6zh8WPaVmxG7sh72gdHmnqMHk8NN3Mzgm1kQEfEhJXthfuqHtBmdtwrvwJx5eb6VbzL3Dm",
  "key19": "4BUyyZvCQe6LYwMccvBWyvqMoRNcT2pgLfBmYToXqwkjgB76oJFpGDfqdQFAb6i4U4FqJyRaUZivyAtxpLMgwpqT",
  "key20": "2TNAYczk5oivy1DAcdgXydFXGPDEfKEX7657mQdSNKf5dV2iG6JNaKhpVmhWKiGfKYgxkTK5afQ7PNG48w2egmLf",
  "key21": "5DFqMKpZqnbcj6Xeg7YDmQTa7avV147NUjRsqmZFzcrMC8MJbfrMrwZjzGty4VwtBnjgzKJ6Uev19xjZSwvFXfaC",
  "key22": "2qAUE3GxTtycopqy4yFL2kJo2vRmrdySRyNdgsbQ3zDuWsKbBWSZYG4dbtbsw9iCy4zMbeofmMqd5zJA13Ewfa5M",
  "key23": "LZ7htBUZEXrd8a1b9Z774WidG4sMHWp8V4e9LXHAR4akShNR8JzYCXHFwsiwzjXf1Sk65Sm2Qgu3Z3ZSa331fu4",
  "key24": "FQnMcrUwTYeNtZQxoPRSHHRfsJVg4QEYyQDJAJpWxSoHGT8yLMDXVbe4Pxk8E6NeuoVr66amszKcJBCDdkBSZJ6",
  "key25": "2ztb6cR7qByH26qbx9zJAuYwBcKwBkMxi8ruJsHfcEcVVomUDSHRXCDrT2HwK3DfCaS7DgCR8F3vUFtZnwt4RK8",
  "key26": "5Ckwz1NEAmMszsHvxutMtNBWEaagRXGdi7eZi9bxiWT8HT9wivFG8582P89XgtxGxHHNRjfRRyZeGTyqEoRphVHe",
  "key27": "66ntt3QaJPjm9D7ysW3s8RQbhro4ZVNhDEmk97xV6F76aNnfpq29gKRWDe18ZS23Crnv7iXFqvjH7kNFTVJDvBVA",
  "key28": "4G9PzGiYPPLvKGvu7aBMTD2zqxXwSFLPtYJG86qn9DT61JHDyWtz1PPKSTCDZp4VwGPTKi3DaaRaZBNQaUdJ3cHT",
  "key29": "5vHkimoGFu3V9KhbNwZQtpQ2gupyg2th9tPtsFwv2w3pCiMkq96TTWtjQHdEx1KDWYwxTaApviZyoX5Q5CBXAuFL",
  "key30": "2hidtd9UuNpq9RBn1fAr9BWyFZ8zV6rW3iRt6rtP48vxu7dYE2uvb1yGLCA7iCT6YPFikiwtu3Qv6Sa9FiF1M6bb",
  "key31": "umJZU3jGPLj9MttqxgeHhjnTBVNRY6Xv2wUStrYN1NnS8RrZHdXV7SFWhMrnEgtd6q98yQBMgjQ56oXgTxE4Ck3",
  "key32": "4uBf3X8584mdKzhc6u6Y7L7W5oqdEcfrcjXtKoeoW4XL3yWfSYqkq1cW23Ww8sp7FsNZa8XuA4UL5ZodSynatMD1",
  "key33": "2huverXKJDC7d7CQh85swgriefNJp3dYVAo24xiz3Nf3q8fhBJBzMPiGXzf966XKvRhUh9aWw6Sot3w2yeDwYo7g",
  "key34": "4vhZgGv2FWbDgJEfQ779oVGPBAcBFUhypGAzCsW7hpKzuCYjTA1TyYmpRrZhgpQQ4KCb5U9GAmVVb1ZksjjLJuio",
  "key35": "2PZW2Y1qL65sXbCFmbDHyqLSjC7NqruhQX8fRhEHne2cm4E3YFoSkVxSYkxMDoHNUJsEypMNsP6nitgQEJsmUKLM",
  "key36": "4dSvWQYXdokktKr4BHuWWab8LjsuHXfPVUqXXiKSzwt1gs1ca6F234WgqzqJvpeV9pBmPFFS5QsRUPJxLjgSuNqr"
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
