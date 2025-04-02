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
    "67nNGbPPKpVXYJZBr8WFZM2Mx8FKL9AYcJDxWhqKggZcP5ahHt2dNHnnTbVpF9Zqhks1YXhzsU4BZSCUYjsgQSDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JdT8CEWZyia72PycgotGTypSgZN8tUZM1VENnUySeMo1LHeS8ngALbHiRMKWRnqkNCBc6EfQkQWPqLjgcCe8QhN",
  "key1": "3c8LNGr2EMBpTg8cmMFHZHwknoiGCoti3WVauxYtREa2L5yVEaQQsYstURcirP1xt5wfG7UzVT4hCqujFRhJni4G",
  "key2": "5qb1dzVWQFuYrnXPXjEYvpnoTXavVYKPFc1GRgHz91mNXQkyG414cmNA7YXDGtbuMeNpAeJrftbE2Zx6NSrMc1wa",
  "key3": "27fCdGkjjkvG1fe7Gr87EnGUK2fBcY32xVdYusbSTWDj75knE7SdcaNF2aMqN9axt736wSJ9oJfvkLtDD9oiLeP6",
  "key4": "3qTWc7R7PbiQdkmT5NNWkDcQMZuUvFzpUkz3zwMTCUSWDz2fsHfkKpDssHZ761FsJVFs3o9wL14aXetXooCRpJfT",
  "key5": "2wKqDFE5d26TdZzCTt7GsFdwiENzWznkCtf9ZQDjwHPrWnRwDPVZ7YZPesknz9FU3xNpuR2i9RSfsS9DJBU9c2AT",
  "key6": "4ytEeQwXarGv6gRzqoVvbKxEJdZL8BuV4RUw5CHUxkXxebzPrCf7Y6Sfag7RfBCGBK58UjHCBAjmfEdMxXfqqh7b",
  "key7": "3sKqM9BgzR9GwaNPNKKfJApyobC2UFHrwfy3vhiXgEhAHThWMNASLvjVayC29ukJHWvjRqSV2WC7oJGwkHsHSgVT",
  "key8": "2zRUz6pfXQWxatKyW3AwoFz91ooGftT9UY7h5EHgXrxmrqwJRiB3R56ei2QcpaG37Z4yAuUXX781aJ5ZDVeSdVHc",
  "key9": "3wWK6HAiuenrq2FWQJUaFbbXbXLBcvc2cfH3Akv9jx2QBhbxKANyXEJMpS3fVqTXfE4zf56GsRa8RdAFa9fkSAe8",
  "key10": "nimCjMza3e3C2aZkbLCrhtbVMc5wo3jdJTKU6NMStYTmUAms3q4bhZiyyA5un1dVn6zwpNjBRvhVaDKMtnu7Twy",
  "key11": "5HBePqDqrJCQTEi4ViXXXeQgGXnTVxKXKbDJu5AXwt52bBXyTsUJy7PjaT3zSBP5Fe1WY2XJG5DND1Hc9x3SYKgj",
  "key12": "5u1k8zriWK7NrDULZZ197tdEhP2EKiEmp4VXZWUUtHBgWRmPrnQhgGVmNq3nhej2MgLHCVnEevUWst7mjqxvgYf9",
  "key13": "4ws4bCAXvu4yhWpzTvBiwYwTd2uyJkqdSdMtB9f8QYrWhXpf4WGrFU2VQegCbBM5DUH499A1eX2rpHZqzEijKCnh",
  "key14": "3dKXV5cw1JB2Cp2bwFpwohAvmVv2z28t3E45yMvSbWcRqVpKSJQJhyY29M1wpMu8q2CSTcNeRfx9WLBkcADfoLfo",
  "key15": "59EhQRPxZz8Pr7faLPzJRUC5aKFDZdwMsMNyG71EeYmVtg3n5Zirr3izJuW7c3v4bPoENRSAHwbyP5YFZ2WaFEx9",
  "key16": "3wx1XaC7zyhkqWyMki4sg3rML9xfesmbYjzmNUxDD6CTYNDLgrBkDMdyNDhDZGJJc7VoqCYsRZcgqdyaao2uan5y",
  "key17": "3h5FYpjYURXyeQ1GdiKMVSoG7ifS68Zj9bqkHZ3Y2d5DjfyVrRtpdtKFaczwbpNA4S4z3jaboAgci56L1stP1vki",
  "key18": "JvmXcyWZFpJeoJoF3erUeNcaiWvuNZisSrhtEhk3Wsdb1tMoynu4kTidv1NjGyrAtd6GotTJpjG6GmjaMCSVdfa",
  "key19": "2X7pnAsTeH7MhUp3whrg6X6zV6dg39PKsh4rZYhWcWGcS7xtZofZq3wfnbR2ffC46sgXisxu9xWx7K52UthaqjUZ",
  "key20": "546LwHkF9Bmnz4uSu6koQuM56mn7rVoTYxUx9BAkYJcDBkgwMUbWqS9NuKhw5EmGVJCnxN5LdKm4rYRu2xdEVXQe",
  "key21": "b4vnyXxiBosSBPMmcEjmLtvzbJakaxo3iSNoTweTCoUh8AdQfgc2eQtTJtC3A8b7vEEyGvoqVcwBU37gZxCULQW",
  "key22": "3UZ3yjg71E3JrdMNj2H4ZYYwf2vfENJdBFt61U88nV8w2gihEtnwLKr5rDHaULPuXcUoWqRKqJZcqxgaruFuwDHH",
  "key23": "4DL3W3LAYx6taJB5bB7xSB9LGvdnF1jeczDfxbyBwMkPK1vDqZ2vsgusipgqm6N28LYiW98bSBsUR9FBPYFFRT7U",
  "key24": "38kGCEgPU7PeFaxbWyM7XsBuSYRJwiNi1nZ8U9rGrAQindvcAkVhXFU7RkKYi3rXRz1i9HVhPYsWX1ofa8fvjBeF",
  "key25": "2pvoNcNUnq2fbbjdt24DHMhh7YqUdfe4BDZgLLYcz9juTebfkjx3YPFUi1BkThg41hXCgTM3RjVvgBw7mKz9k5Vk",
  "key26": "52n9gkAg4tDAK9FyGoTwBP2MDsubWbA3ZYVCtDb7BNXEMKY4JxBcFnqxyv5vu5tZC8v55RBAyxwU1k2vppQc2Wnj",
  "key27": "5eZP7v7eUDzYUAARCc6EVRikwUmPA6LuCnLfYGxBX82hghpZBkeoPwKhDvbqmPBUnncgu7NeUfmX2MSSG9CcPZMY",
  "key28": "3zWzVYak5xEMXqtKX7G2WPehFQVdhy7AX9x92CYyawu9JmuA4g2EX8smVyMEMWeSboWGfTXw9v3dPxKrkUhw5x91",
  "key29": "2JJgtPcWtouk1HF8Eut87svpfwKYYQxRr7yVvN3W2prHHrDefxo2arQVvWFgJdfpv98Vs3DFaEQw8dr8JaqN3eZx",
  "key30": "tSfvDbrUoQYu6GitG43VWnH8Y3x1rUsY8M5m75m85h9JbTy7srGpG5zQ79DtLdWb4Kao36piGxEZ1VLK32UuoKb",
  "key31": "2ZQEHEJxopjcoB5fYAjf3fnoEb5zsbbb642os3pB7rWdfnsALvGHC22XFKZWy4S3AP2Tb1xydmhqoVHYoSBtDfuU",
  "key32": "2N9gyEq5uNFtjKgGMBzd57LpEr4gad7EWLVXCtbZBjbuZ1LG2R9Zao1fpyLUExVFy3d3yS5AQ6whrheyhNNYJgoD",
  "key33": "3qoEsyLeQ5JcrE22gx9uu7egki7zyf4x99zbuHcCsDzsAb3EhzQwMTcP8fCytPdynTX3U5cyaYnSdB5MZpZ8bwSw",
  "key34": "2CbvSHADGLFrdmaijbJJs3K6xfyA7DMRRjSrsuKn5QbuPLt1eRxKugc7TLvUBBgC9dAvWJ11XhGCazw1K8852xSd",
  "key35": "3SCX15QrSF28q2oYegjaUWTUWVApXkEsZafd35SneJxdv4rUYucHf1RqzMnsqtrGdMEHR1iMwauxMJYPKwGcA3RW",
  "key36": "Vte6sETFSrVoAFwPzCUVjonoXHCbs3nFJALMPZ5DkSuUMXYUw2Kr3Q7gNzURT3Fpx7xndehoAZ4fB5xTNN7KKVt",
  "key37": "3xCoGVkofiVRA26ijdpnqVmG7o8AKm5ee4kxWZbNc16CUkd2Xddmxq9gaDp2ttjvcDj3FH6BNEmkM1FkSrfzRHaf",
  "key38": "KTobSuAx87ZSkUnhrfxDPJrnRYU47EKXCFpMGmUUtQ6v8Excwq2svjKwZh3Re7eDkbtoEQNCpaPLCT9Xv4aXdSj",
  "key39": "58WJdYu9rKfkxTrknEEyoaLTCbaH1PYCNH8bhKF3NWSi6SrkoyFEv5T8upFtCkZiVakiN8ELMqAAU5UxZNuRJvE2",
  "key40": "4KZ4ugaAuywJtznsg66CtMhz3vnoMH2HkwRWgbZZNo9izLfF3Jx9b2WizZCQUfkk7ZEM4G1AVxeerLr8sajaLJ75",
  "key41": "32vrvFFJmFfDapoGQz9sA4hbTmgAk2fBh3yghvmH3Xw11HayzniWwHZwEd5GMfBam9yQBYy1Su9f3ayJEo67963J",
  "key42": "4DMRKacXanmvLPyYdUFmWUtKNJoRuRucQ3fnFZr4jMcn7FwuA9vAKPgNvwhXCtuoYiAeFHW7aGhPzjfxPRJgkgUE",
  "key43": "2MGPF9Guau8ZiaLr2HUHgbjuXWAYYc6uxdz156iaARNd5TV4HqSoBa3L1VNxThCZfyVDZFVvBsE2YuV4f3YcGqFG"
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
