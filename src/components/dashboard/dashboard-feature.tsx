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
    "VnoEaSTgUX2JwbJZmvPXu63Tg9TraeSp3AecpmnZ3goJgjac8UhMWc1x7dZaxqg6P9e4gnR3xM1KAqR9PTtYFcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VektbYHVSQ9SetXw5sa46QYoG1yHF6uzrVHKZ84nMWQC7ubARKRWHTX6DwrcwWQr7s7tKg1m8423xWhUwtoktAo",
  "key1": "3V5qAu1vq9CZ5Tkd4QqNaxTCrAmtSTCfgkCBqKAKxCLUaD9wyjYBKxm9HdvZ8APFNWTjpk3yFYymABDU7c3KV7HV",
  "key2": "rqvuZQctpy9K195zYFV1wB2NXpTSmNnHjnrZJ24JF3qHuPPCaEbSXDo6V9Ymf4t5WYZzb1yLJskRzDWHWW5cGLu",
  "key3": "ptJTnLMiQyGFx96jNWzZF6Ddo5K1QRWet7vLWPrUdh2sBsDzxvHzaXnvsYTLrteauJZRZvuhGm7SE17St8EFKAN",
  "key4": "yx1Tjsqbtx6FEBtzrucLoPopqFFppYg8DjeEp5jq2VdQBNUaT77KagstgGwio5vDZT5HVxYht5uGP7YXdjZUQGn",
  "key5": "62T4ipmojJ2NyEeqnoyeVyAz7MAjMCAUcNqQ8NTYWpSzMPzEYwTRiWsfuc217mhkvDkvmZtREYh3BtXxCQpeu3hR",
  "key6": "298yNigTBYx8NeX9gYnRxxcn7nUMBwvaKX1yMSBH5igfRgp8f7H6EXfpQFH1YqYZDGm1vS4trmvpqnEFT5cJm1zc",
  "key7": "22pvZB2Y61mVWbJY2j17V2LEYfDFh97yYrBK4EupWzMYGEohALgjaz65dEDEJxwpJcTbNX4z8my4McA6GhEjZQqC",
  "key8": "3cR3wyFuiDkaG2QpYkHSRoKDYshztMN653Gcix3y3z3JgyyoEqxKZ5PMinVX4pn1JuExZ1Db5HjpZWb9fXnALpmv",
  "key9": "5Mu8rSVYQxjRSNqeEbgKeJux2aarxhRrkdKmAyGFiGScmwCv3min1DXuGSs7mTMPt8fDQg6BYhPFpzNYGfz5WzrQ",
  "key10": "Zen4qVJ3bWTTvndtVJAWdixWydxxQik6ovNJdqBjw9hQFTmRjZeUKSTRJb5DxUsgnfGskLtd77eEvS3vCHr6uZ3",
  "key11": "R91WuCpFWgP5mxX5VL19NMjJaGrjb579aujGoD9fAbrDotCfz6f7JQ1d6txXRYwrbuEjZoUJgKYKjHGWnMMQYfL",
  "key12": "kVe82cjCxgDbuaYKpmGkjVzw4mjdaziJtR9EhJ7cL7tivXDEsMGLGUtM38hs5dSQ466JK2fxkCdL4wVWTot1JRf",
  "key13": "5HgyQs5rKB71Mzd7mb2JS7sxJ3czVgUCCRLkxruSXDqSu23HxC4HNncvu1nCctwfbpSfeHT75CXkrwmSUmXAToTr",
  "key14": "2tb7XzKzX94jEMjeWPqfDU6Uw3NRay1wYSqo5tRvmQ4E9VYMoWzGMq8VvDwcFQuxXLfze7LrmaLydXhrYiwS2zrj",
  "key15": "GnHEpSR9pq3KMy4HSwD5chot1Mp3PdEfTrAR1xzYdr3AfPHtFfW9RKRzKAqsngxCRiNzhXHwchZqAK9paVUcrqC",
  "key16": "4rSziSfQDnfPGGy8rXNAjFyuYXibwJnyVv4aRXcrKsqMnwFttkBEFtC1nSgSWJFKuNGHZS6ffLJzbGjpEuwZLJTS",
  "key17": "5HJNayWF7hKdUUpp5Jhw2FQBdiuhMRHTNhPmBSn98XiSbhheJdsBTwq9wefTFNfjfs5x3EgRp26DSithPZE9pkKT",
  "key18": "SFeddJZ75s7cVH8cdkcWkweN9AcYk8ZFsHG45mtyKj8MGCnqi5pVgMufngGdzTfiMSwPvQX5YkrNns4Rwjcgb3N",
  "key19": "3AVtMkzDwDE5qsPdK3dMNuqrGcidegwxxmMQhH3aaubqVV45tqb2xD5FEzXa8ZjPc8KCWioui6tAg5ua3bTyoUjx",
  "key20": "48nQ7xNXGtT9DLJbqoJaDj3rqmkLMh185jVjQgiPUC2iQrVgzanncLahnJc2c2eVTrfUx2kr6wCFJo28W4Pp1GYq",
  "key21": "4jiMwfpw19x7nRAAGUHSVi2QbvzRW9Pbdi8zGAEpdnrYnBMr2h51ckQW3DKV43mTFPwc2n3HVbuQiyJdAc4oFrpy",
  "key22": "2ReqCV9Bgfz5itSc98zsx75thLAWT2qNgrbn8PDvqmmLDCy6PXTAqk7vPbLDSTVfqdLQMEWgSh7D9xKGXDwpuMhr",
  "key23": "3zFvFsd5jciemLuwDp2Dr9w5denY66YvGMzC6Y6DR6maJgUBKa3eDnUncVkndMJdBXZDiTsQpmAudsVz1bjzbo3L",
  "key24": "5uSBfPT8Uz94qELLTrHAuqyN8tXUEaKrWkGNGVYmyfjBq5JVm2eRrhSqVW9qZydrujVfJJMjCne2VCTjp91HrdVR",
  "key25": "35rpPyQ87MS9av3N3v5nbyFogKABqvQ1GYemdUpcBLmYhSM9tdTrSjE1Z3wgHEMQ6xkm9RAebAMoxD1JDKNssNoA",
  "key26": "4GVxxo2QahAzHHu6etUAj8FFjHNdSk5qTFLrGdQbiarboHkeeAyDBA7aEqjJqjJepNoA7tiA1fFu8TfAMYHPWerc",
  "key27": "aHqpKtM7rRUN44UNjJ2AAD24KeabnRRdqTpYhSMAiHLVSUfLRRecTyzAdZKkLzJEmvQcJEEcrrH54skkWNTz5Ab",
  "key28": "5AUn3rsWkVPGcmmtUS9HPj49DUTXf6DZHFg6JsPsqkMmSaqXJ7SFPJiid96WZA7H4btyenADez8VNVPusSbmtkXo",
  "key29": "5m9rPqcLjYoVwQqBTZASp4g3ncU3WJWfH8KZSXNDNhotxSvoHgW35WuW76exhXu33LeLekDVwkasGr78G1pW7VbF",
  "key30": "4hgnxCyUN7r8DJg8TQzrMCyUbJPDKzUm4x5QCRWmMFm2KrYWXiFxvAXPbpEGDmsb7x58xicQ1Mk5Z1jK3aRL3ziS",
  "key31": "5a3v77ywD7vAKm9dbAMvLLr1gsH5bfsBkQDfYoNL2jtuPvJA86iioVuh63KqmygZewmGGsjbhSpYtqnHn3nr6vem",
  "key32": "4EiwSJXeqNiNacNs1YqUWe97E21rfp11qhpHZ3tAmdxwjb8pyE5VE7FHPszBbDztuSAqZK6raWJPKZJ2Pt1gChEV",
  "key33": "52KbaPTzhgukpyKxefYkjpCQLmMX1HSXMSzXLr91yvw7ptd3S3g9mpfBUMKom59JjhPmcZ9t91fLUoqbQB7tcmro",
  "key34": "x6jjgj6Z8TdKRF7G7NoRn6QE7xLKpx8exC4s4Mmmp3WsSSVQ7eoCrLxMrzJ54v8cDtQu95TK8CvYnchqo59r8qj",
  "key35": "JAJVmYiQ16HVnxDRrYDZbQMuPp2muJjoTjZPskup3US1QgLh1bMb9BFT2tWiSUydYokaiBbXrR4zAgxBJwjiqCm",
  "key36": "2RxhvFATdzP6ZvvaHmqovmuqpcDYESWsyY9rjyPETqadgEfUQHL9ZPQaeCR4cPKu6hJFuV3w6mZSo9vRbYvFWbtp",
  "key37": "4GDd7ebzuSWagQCuoNkJTPq7Mw8pWgwvCTsRdd7QRWh7Mo6B2SvpsWT73NR3PMdaSqZBNu7q5uP7RCmXdvdoEKzh",
  "key38": "cVCaQzU2JPfnDoHgCt2A6gRh9h6VCQg2q7RvAi1x2cnHjXcUJp9owXku3wGAXGjWfQrbgLCo3Lne72iLcvkfKWy",
  "key39": "2mYXdsb9PMddiX2Hcq3fSQ9nFtFc2CftTSZD8mF17Vrt1jsd9X2JdxYkgmesS8BKQk8SWFvkipoUEmnoprNxtkmP"
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
