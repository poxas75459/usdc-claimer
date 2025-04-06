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
    "WkkQgMxTvxDJWnLfHWeGUHXiZpMyhXTuyjsmLfhVZAG2LF3y4pcVmpMUS8887gg5SpsJ3sGhJpirUbsiqCPgCCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44N6nd3jhkZ7DsXkFj3DJi3vMv1rh8ttWfeYWSAdVuD9Tmc4V6uvQZvkniutX8pJx2Zjs18PFEyJbw3bZnyyTUHg",
  "key1": "52E52oK9TpM8628zSA9oqaZLxZ1nHMrBHAygkqE5NsQ5afLkJWcgS8kLkCRqwRqeYrd1ZAjrTMFm6aZYncHYaMqU",
  "key2": "ThKVcWHhuAFYUWunTed2oUZhyq7zrsrRUwpfGnHJnTstN8TrVKniJTgGjsq9fRSvr2Wwy1raHZK8a1QQ11pynjz",
  "key3": "5mMmX1qrWsjM23Uab1bJ4rF2Ena4qMLLDx1eNp5bN8DKJqkLdwRBmRm4T4BgqvFmckmQ86GbQvdL7weToduTjsJY",
  "key4": "KQoDr4XiTdajttdziUTqA8eKFEc4aScvoiLZK4jXqHSxFUKNHNjtqqF16uauZV4cTRhYPVpFoajLjdu5S5puCx9",
  "key5": "3PPPPpFLhJ7wJUU1q2BR8WfzZ1qAXLuJzgDZS8RJAcZErtsuTgbbsA5DV8rwagXPK5L6yfa4NqABqKifQ8bpWSQ5",
  "key6": "2b1ss7M5HzVP42SqxzWRTNyZkEMwTjMMfdn19KaSi1PsACRas9ub6G3UEoepAMdo1DfPK2GMD6m5spYVE3oZf7ib",
  "key7": "3Yi5upLv3CqCMrySLH7E3nD5acNvVDc7qJrKmzMCATuQpjq6PBGsUkwXLdnjHBCu483EVWrXHdeEXajgeBbKGoVk",
  "key8": "kHExBGxnRScpFqGyDxKsXNQnVcUHSwmM6k3juhSRCSTj6hCkLjE4wCbVMigtGapyfPTwbAsrQmZ4WUnD95qMP1z",
  "key9": "2FyHyhrwSFTNujDi2qQw8QV89NU26ycbQ9DVrHhge9jGYycsouoZ66oh9qpFzJtbbbJrKv4iLmte1pXQxKLoN83S",
  "key10": "QLfE2GCj537Yh1Vh6LE2y4EKAyjcvFtBC2MCBMcVnUoXMVeHAwggMAJ8j8BMMKYdPtxvy39F8bTiQbfofdNCMts",
  "key11": "5xQ4d4nMeFzwgjYirWHzarU6JJiFkSFXwhpVmXvpe16yzNsP8ioxm6RNf9kCPcvCNkMR6D5wQuxjxnFTC5dHvnt8",
  "key12": "BbSz2MDp9ndzPSdZeit3incuuw4g3gei2iBAoxAnAHVgPAxivoqcKUHNBCtk2nQFe7m8nWDN3B6zW4MRkRXwybY",
  "key13": "5nUkWCvRfiJ7fu9yM8R5a7aAAoYkoR7iX8EnvJTjQg3EyvumU5D3WWf5VLPK4psuLoTJ3qd3RutFh7xJh7TbXUYb",
  "key14": "5SVpU6f5xxobsNn4ApxDL3dMGFXFD1Bd4X7zLZLkHbnBi5R3Xv1gXUGRMKKuKYRBu1z2A9tag8nRNZYiZWqfhyn2",
  "key15": "2eTUscFnMLqzEUYQo9QdHgcX4NrPhfG6rWsc9yabjpNwebNuvV6uXynMEhSN3JobxCK8QSpEP3Vv17ihA7beiPaX",
  "key16": "26T2tg68GYrcB8mDosCurj2kryDioK1bbEWEWJeJbdgimCjXwcza1AM1D6a3KKECyJD16MSGtoHVKWRjprAU6adA",
  "key17": "589rHDx8YoFjt14VDrdey3Qq4KdTrSfRzKBaahoW5Mz4QVL7RxoQJMa72qqQQJm5W4Eoh59grftgQm8PaKUVRct4",
  "key18": "Q1RjniR7SGyEigdg2Z1t3Nm9RrfxLueyVPk5yYRLzLXc1HsKCASeDm4gJJYni4ToJUAUGJjoXV3HML9ZpJCogRu",
  "key19": "LYzh2svrxfQSiRvvfbjGSRNyVqPNfjEUAr3oSQYAB898uaDx1v6pZ9rLfaHnZZDZB1PoHNu58nsaCkwXk9ctANJ",
  "key20": "66fRp9t185KFYwKydQRgxyvAq73kPZSVYNsSvj33X9ReQQrgc1SX5U2v9kguxYP42Wh3QNcso116tqCBEZoJ7oNH",
  "key21": "3vqfZNzGyFhcr5zFG6sWxJ4Yv9gP3NZi9yi1a1aKs9daEVKRvnWDLexLxVW75oy94eVDYCNkdZerFiKg8G99GHM9",
  "key22": "3g83efxSFiPQp9tMV8BVN3kdFVHCL2VxUYGwtqeHmZ7hDWEYHLecVfhdzroMmqEv26TSowK1yLHbrZq1umayM4Dv",
  "key23": "2GGjC3deG3ZjYEwrc9Lg6gG2cbtv9DgNMB8mLLSBesGR52wAayHnTMf4YaaUyDNkDie9Jt6KB5wg5GN1Sf7NWNER",
  "key24": "2WnWztDPALAfdrSzmZwD5dXNyD2uFd9DZXppUXsshwEA9MjzjsCnCfLj2hx2NmC1KckryaEYkm6Thrwt5n3aXC8q",
  "key25": "3NTudzM3Xj5CZwYepftuPjHmFkHPFYC5tT8r3t9T9YxFuNvoWsFgyXyKKKqJbyjuotdmw6F6Y1HwcYHPHLr97rPG",
  "key26": "4LaXbusaqkG2jVe46g4pMdeAmwJ5KNKfbcncqmv295V1L1r6ATdfxMBABWU2WeYfs35LhBiKbDxe5FEHza2yTSo4",
  "key27": "3DCnDhxesK6cJvcxmvtwAZyTjBAbLwEQAfUS1TMUrKp9TYzXUuMoQXzuV8kFBSNEySbSfe2pX9mwfy6PYa5cUV2c",
  "key28": "3hb91mFXtS3u3TJv6APW8SDVDJsxngf6s6hL6LSzcGUyeZ2bXMVnLdpJzbmrjkP7HWyVy4TKoZrKNiLwPcV2oNdU",
  "key29": "5GMc4K4YUVeNBZBzVhymqCeZ5ge1AMHsiUnyhoR89G8VJUPFGJJxTg9YKLVJXy418jTKhwJ9bKhJCMSmLnKF3FSE",
  "key30": "4G19dFankBk2nwimeQD2jFcdLHqDcqDMpCL4V3otah8TgbsBtuq8bnDzG9ApUC1hmiiqQ6qcsrq9P23ArhnxNB5R",
  "key31": "4tnVAnHyqdaB9Uk9LZeD2UY9EbGuifLSWZThuUxQfPcHxrGqvizKmDME2caBdushka3NbSB3qXhE44MhzaVkGXyC",
  "key32": "35edQjERECz3GQSWDBkF8uUNJmtsk6EFHm7KnhkF7jRTgDEG5P6Hb6FdZyAQ2Lesub2nuDkjCCopkV19TeodPAMF",
  "key33": "BiLR843NDhRruCuQa5oiBj8CJ4n5y3DX486WpNFeVoYStzToRRbn46Zyrhgf3UHi2DVhzvTrDnDVbiUFL7aXGma",
  "key34": "4P8m8CTZv7WYzFxs6hGsgPa23744L9FX96J81Haz793cZKQiEJ3Vq3Q8YZKceXfLuxknSxxQVSQWavQXRqxFMeor",
  "key35": "p25F1wpC9e9PmiuuYdKA9UWZTCS38LpmF4MJjMszjeFboGx83XBPmTmKfmefSs9698nz8v5yhP9wFfuGr6DZ9tT",
  "key36": "4vcSRFyye9crbwj1AuD9nxSZAL6hNiVNPspvqFXZ8bBDmzbxVYHqmvXJxCPzLWqRbbGjQP5WPDpRFFT8TUzAr5Mx",
  "key37": "2t6Ym5Qj2h4P6D36aQc5s4yjafUz7Z3zm7ZfVNuqmnKCwXR3ZuDixBK3WLY7C1HBAHTctPYU4YszB6WNuzzc3XQR",
  "key38": "3gAuyyYLkdkZscMD6xeMRyNeGidfMHvr9uHcLVdsbqUNkdypaWmf9SS8V14mCnsZE2ogBX2puCnmxEEco332GCLk"
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
