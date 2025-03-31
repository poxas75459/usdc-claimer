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
    "2z6QqZ878yzEP3K3zkAEbwW9boQrusFXf3bAEumbwXFkRhxTtPnQzd9393zFe32Mbt7dwApk2r79i7np6Go6UPJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YqDpBkHsGR6neLVd4FgTHJYaBL9BFK79ev7fDJV1jJRVUj2N45HX1kDpiDxsUjCYnnSpJ1QdrmRdeGna1s4BNzM",
  "key1": "5uCGZkaqPP4biGt4FzqvZMG9aTQU6j6oi7V6PdSXUUs3N6dFW7EGXeuVfv4Aq5oZHonX8vTHEBcBkGhPynaDLTab",
  "key2": "4SucEHhuksPkARxDnCnBs9rN9uYeyPX6g2CtoD4T5DE9S95Mb2RMJEyEsEPXsqYnRnFV5GAgVZfFujwzUTE9P2vG",
  "key3": "5nNL2SCF2fBcWbFiniusufnTvScWRC6vEkVwUXemEzovjKU6EHksmMdbWCXvAoARzySNnj5cCJ88x9DxWfv17gWr",
  "key4": "5FB3tqnAH6sK3jNn5YVQtG6hdQU6UvvFEG4B4UkEqiV3Y4XUgxuJkuBVB7YFozP4pKMkLV6xdTbyS5eXjixpZQXm",
  "key5": "R8jGXasPBp5fQenRMGwhmoxYCf8nhrvKazcU18Ecz8Yv8QTNFSXEnqxVuJguoFrKvd27cFXUhgmjwM3Z2kCCTqq",
  "key6": "4iygPyvEX57GruqEw1r9e3U2YWExpJrnETxsALsStscCbiai3ADgimABfRGXSZXDYhZaqiYuVFc49gTQ9tybehQi",
  "key7": "4EfET5r91sAaFEwv6QXFPQhLSC8qsdMxfmRbjrmXMqbAHrr62YRsjPENsz7Bab3dXa4ym2v5tnnKsWDSVRRr9opW",
  "key8": "2CMd1QqomEfTggUDS1fDKHzabeWHW17FzSanXTBeoimz8VndZe4N9VmBQsbx1fLj4ZTbfsovB7kTSSkaWdVRP6E7",
  "key9": "KmY8Hns65u3jMntRC4LYKtrfNnZ8arN3G1SrddMRmoFLzsFL8AzQBEnLgpE91vdhT8HRHpNEUuaGUP9kkJxmMcE",
  "key10": "7z3q2PD5RtpjvfSskn6qermgD2bHpmxmWnHQgz6y66dwdJddEUaRwaJYNRz6rvieZtW9xqqaBhRoSPCDs1yHQg4",
  "key11": "3fFykfMRJUxH1C8gaJ1sp7R7HN2LxhzUod9XxwteNcBkZMvU5sY95onYnUffvRnfoUdJxmv4g4C3p2zPxpXZUVwK",
  "key12": "46KMgnkeooP66aV3SanquJtFhPMep5yhQwQviyayz1cqa9JaH7UX8TRPXFscLAaQZkFYAWgi7CzcnTsr9GUQ5Nix",
  "key13": "3c2CJir4F29C1s9TpHJs7DpiPUc8yHQBuLLsQ63EEoDbRAsBYDCqYHyRdUVGSFtxRB8cj2vQuQtTpgXXTqSzyCLV",
  "key14": "3PoBqyBrSvVSMHoDHTgFXG7z4Tr2s6mdYmbf3xWXxSLCgkSGD8ucPpRPsLQRGuXTjAcVLwEAMZSSoYXVzi7K6yc4",
  "key15": "tFTfub4sqmxwSVbDxeYY77kCwEkUGdp1nUmURYdkYfP6oECWeSzMo2HrzDLiyX2Gmc4m4BP2vaNqpjvKpoB8L6i",
  "key16": "3YT92pUKbcQXfxge2qTQA9Cos3BdEVFL4PZhYCwrtG9hcXPvyXSh4BDhisM5zo6ZpH7ySfVqn3nAnqSBnkQAbkxN",
  "key17": "3DxSqttfJ1XJ4NpuBVkBZmya5kmcQ47Cyz74aSDKkN69mi6w4qvxb88eGtLu7nhfRoVcyhBdzPhKX3RQa9Fn1JP6",
  "key18": "ResCavfAdSdv3ou9ht664oSpsDB8hTJjaPMBMqWhJGbt7ZbsLQUaeNc9QCzEfSZdFBeszQYtWpV9WwG9j8NRY8G",
  "key19": "4VQ2HgDv2FK3pXfxgkm2fyJQz44saMgy85BpKHJ8JzJbgkNoP25DXzSFBAG6Ae7DKW6XZhmbmp2cT4qyosPpNWpe",
  "key20": "2vThuNJnT3BszwAivKeKxiYRwMe93DAqaUAdMATD2ET8T49zDwZw81iNc2gpQc7KbNCPLWCmeTwzmtnk7UehY61N",
  "key21": "5Eus1tMKwQ1EhWCquLCLxmusPemNaLnKcEzLmpiEEHBqcoSUsceLLf9auTXnrVb6PYm9JoKzMDGhYGLDUQ5RD2uY",
  "key22": "5AgDwA3kCfyGDyDNN6bgGbaMUHXqcDqcRz2YvqFvU1iYoifTbp5zWiipSa1wT8Vu6soysxi57C4ozt6LPsrssn6W",
  "key23": "eAWTL3YQfbnDj9FbVCjPv15DqfGxnyL7WKc7f5EHzXuB5qkBektaR57a8NsGKszH3SvRK5C9gFmamUjhYe967Pr",
  "key24": "3p1tNtPkhT9ZJfGtgqZvEU2twnozqwLy4zkfmz1PuBDWJ3iUkkjj3UH47nWXoaLdkqxUQhL5XCMgirXjWF1QFv7o",
  "key25": "3uFSFttERuKNY4s8Efz8aquqcLCKeJJzje49kFDhE1djVZyXUSpsxqkMbnK4WATHQtE743vDoY4e7XWo56L6E2d9",
  "key26": "2GtNbRarKtvac8TT6AFGBTLdBPnMMGnbuxBsxbcH889i9FvCNJrueuC8QbYujbD8ZW4d1uHak4f3Jr2NBXyyc1ab",
  "key27": "4em5w33zyUc6KkEDbvcXEU9xVEBYtTBt7A66eYSjY5WQVQeyR4LKFvnRVwRKqZtvSYBn6Dik5XxmE7E55Ad6aE8V",
  "key28": "3ED6RRMXTxPStiq2UX6WBgnM4wUmMGr8t19sh4dfxFCSU7s2BXzgvuaEBiyhLSk24rBn8rvEHjiQ2PnNGVw28Vr8",
  "key29": "5zQDXi1PXPaEmBPpVG6SHan4Zh2r8LDXPupKJ1mVw9NUMYBp4cTnbVr7h685cwbwbMRocrrcQPCSNPmjtvMLTQjz",
  "key30": "yaRhwVgpazxR1DqE7nw76fHqJukaquhYrfUzQ6xXoJfu1uqCr4v85MjPsMKEyzMndTTkqUtPJuPMGNfKWeQn7i6",
  "key31": "4Yt43Mkcx4n7TbXGcn1a1HyoCkqE8HsZhZV7E3xY3xZXycPrttkRPZDc6iaCFsrweSmEv1wNDqekZQpapgLG3L8c",
  "key32": "2L8eNY1GYfL6hP4FKgHY5LaVbks4cAGvcqiuFnrGYDZyvXY41ecHyzQUTi3pk4iqcVMU3cuN7VsJi7jGLjV7XuMT",
  "key33": "63z2rSt3vhBp3NBykzTLqZh1mQc3Rxs7QXi1sn7S7M6iHwt5a1TYB7eWEqpmKp3CqG6atVBJk275LxsL6tW1x8xu",
  "key34": "2BnqD2uKd1NHH5jtrp8HddUN8rYC9sKQg68uqYzs1aWQajMvQjMG4a8EUcKk49dxbgEUoJTdiVGGe43yNzN6hwMp",
  "key35": "4SEZojjETkeEyR5h19YnctUQ3VuQehjQzk5Sxp5QjJAezVfnxk1Gf4puo9syQeCD588LTFHxMxBMQPwkVSuPYepQ",
  "key36": "3qENXVbHEN5C8RLJEWZc3K1wQ5y3HpxVk1j7BTu3sKikBYh3pwZXpi34KpGS8W6LBsbtJS3S3DpQNFvkk2EqD4sg",
  "key37": "3dEV8phci7BZokBj8DqY2avzV13GZCiStXUdQh2dsMSXk77HXuk3JY6LUoEomtBzxjt4xtfzA64UndhbqQVYqV8u",
  "key38": "5j2rmEhr6gtgMxwqA4gkwmBTF5NjGeBLivb6WxifusicAyA8DtgfbMei59wo2VfZfm3w1fjneAmMQxfj5Ztg8G1r",
  "key39": "5SNcYyX2fZ3fxjf81NpXkbgvQyj9dnznMZ3BaQ74ezFSMFLSvqnYumfDjURYvVXPSkpWTaEREPrrnMdSSoxhFde2",
  "key40": "57D6snoSd4Qv7jXipxzyvFH4Kqs2dTGKVDMfmWT6br6sJihskP69PdALb81ovXa786v3d1EyJnD3MzqttysNcjby",
  "key41": "3tVbDfH1vdtNx8UkLWmPKBmA8y9eJyjmtF4LxSCpA4WCjf8A4cX5RYmvRVFah1t61CjDcZRvALsQ9oGHNJcQsxhw",
  "key42": "316ANLxYqudzsuYUfxxfshAQbaYYGzctptskD2Vkg1UVdJqzLGu2pyj64G8FPsNtAsktEjaDfU72XM7TzjMu517m",
  "key43": "gg4YyRXAquoHLdXacCyxvZmhhx5aYPeBw6eCB3g1o64s3AWELUCo9rzbPv962wB79pDYvq7z2tZ1mNQfrGPvUdP"
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
