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
    "4wDv8C3eX4QjcwmV1edz7P4BkBXKjxN2aKTiQTR8xVVfbPyyjik3YNSqG6sbK8gdW1P1SrK3TCnZxX3REuQrHtLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bohiHR2MLnPncvGfeMS4dUBv4pbX42KDAByQ24Rd8fkZvnX6rEN9USDc8P7EahJeveXihHgm4CpXd2hfYgCe4d6",
  "key1": "3XwnUnT8PTgou1x7UFGpVfJyaoQS12GCGxDbyPRYWZiEnc7ouTbsBt8aA9odDY2VKsyb2YQ3DYMSY9PkQLGHy6Xf",
  "key2": "47wCL28jJTWy2BvnbuKwVhGbGAMMMXouy9Frbdh3sJVwkRD97BMWwHKvPdW1c7bvUduaTQm8vawa5cqa9xy2z75d",
  "key3": "8kMsvYSfvKHm28MXXhfjA821GKvhFpprTG488WbrfweHvtidaKFqJvC8BbVW7GijvSDJGxJdhPqzDqAM6rb28E9",
  "key4": "2L1nDJFXoDeQYgU5JSRcCbLAbqFeRSwkHR3Si8VAKxdvVLRf3Dg6kNZ3kHqdhZoKJkKb84uxB7cQHavTVuqRpSST",
  "key5": "MCsub6o95YFDjHv1WBnpPSGeqVDBjBAnZqULaQPbiJRab75AB8m8i6ghUQSfH4rdZuKcSMSY6kutDodEGAHaATw",
  "key6": "3fu6oJgYFnH25Y1XdGuFWMHkS9QLH3fTg5ae565H7LRzq1igA2BbrwmtPjD7LmQmVyikiMqkWmdD2ZrEpUC1tGDm",
  "key7": "5PaXEYSGD8Cge7fbH4HKtwUN7sZFGRnNKGYCbDE6vHDiBDmgjRbvP4T4638krXFkX9Dv7K5YJmTFeZYURWiFLyAE",
  "key8": "5iEWv1yRyotydijKwYJwVCxDJnUhfKB9d8Hur6Q1iRcDhv5YvHFNAHM1fahA4fucV8kijxbFak61jKiRrRSeEhTT",
  "key9": "3FYhmKJTVnNxBsiEaSAa21AvYAbxkiYEndsrgHVa1JqaqAgMh7iSpUYAbEm4KUMdwdauUG9gUmRc7NtJqdTu6ycU",
  "key10": "nrZy9ZvBfxHWM8ywnwvSmPkEWdErg5S58YSmj4hQBQ3Uc2i4Htm8wfX3HW9oP27UPr8JM9LrhXd5waCa4PHbCq8",
  "key11": "2HppCLcGM597CXx7T7U2Ygb1agww1UDot1z5Czhoo437XrL8nNhRRiGdfmE5hruasNRQkPJhcd1Ufduc1egMfvDu",
  "key12": "2xyCF5roFyptJYQcRNjB74TUnS35LBdAhxEzPGsj1Zg3xu1qj1yK4WxaYcGG2nkrfaWE7bkVUBCaTdZjd83z9VXi",
  "key13": "4AachpGF11sN8SDJ4Q3eTPMsiPHccDSfBCXTRYNB7Wtzk6KWxrvBhFmTXUH1Hw8DCCC3LQeGakwWJEnCp9qz1gXi",
  "key14": "3Qb8FWQRgQfQ2Ctj73EH2CBNJT3mwZ7QrL5Ka4E64je2ephmeaeWYK1vqEJi8xpEVJuJvPEcwW67MbX7ci6T17SB",
  "key15": "5BDhBPk6uPuTbyorHf3wejaM8jC3ZU1GP6uP8z3iRKsDcdhNuq1WZ6YMmaVMbc3PBfFrgZxQgQUGVwzA8v15ZbAG",
  "key16": "4QHcTuEsKzeQ3iMrM3Vi4DoCmQR4G21x9ZYoSYZ2nPfrJ4mPAQd2orDai5r38YU6gCajH8k3uZ2FUPvwGPr7CFFr",
  "key17": "5CkPFGPH6arjraNXeisfbL9z4DCuVH784637Hu82DM4gzjQBY6ejFBW3ySMJbU7VykmfyZV8iv7FMoECFv6onqQ4",
  "key18": "3XH78auVk6UPFZNS5xnz64QMjUWm5cYhn63EUrU43SoqyDWhiSyoZfSry8a2PkTKkTYHwsjJAsHjbj21nX6u9fLn",
  "key19": "2wCVkammGywykVAbNoWJKgrhUuX5CZ1AvjpK9oEG9dzZjmsWQaV9DAH6Yh52ds1c9giJipM771fAcWCVhLPmoBDa",
  "key20": "YJfRzR4ijzDahnxpm4PhBrHUwV17uhp4MyyJCAE7qLww8eRdLnCRMrkFxpnkZ2hjh8vqKdMQ1hje7yosnkYES33",
  "key21": "QxiSDUPdK56q1mxHJWzoPhjzPV1mjzwwoQaDKdHSc3jmKes1KExkc2jwaWHzYrLxGXvUsHsMD3pXZ2hPFjcETBq",
  "key22": "4o1gV1GuHbjdPhN7SaaFhKNzjnYQhhWctWDxgcUqRXbqm3Noojg6JNTPvfBFeph3yeKZ1mUw9D8ikSodD45nxQMr",
  "key23": "28UvLyDzNZezSSEBJwpd1zJQRmX3gdshsSUH3sUCZ6iRpNM3RFfRjk4WD5vaPGTEaLdCxVUofo3ZxW1j6ukXYiwJ",
  "key24": "CnUdmude5rk6G2xfHJyc23hntUcQjmFvUycLBoFszojGxeskW1Wx1YNTriaHKijfEFbNrwRQBetnwMGEDCFWxW2",
  "key25": "5xQZrZ5VDSeggmq25KxvRmkxdt969mXvQoYNMvDEnCeRECy7o6kjHWTBv4unHWnnAmsHZwJ6mK4pv5FQ4recfE8S",
  "key26": "5dkPL9AtQoZqpgp54Mzc6U23briwqeoq25H4Cuz6A4jLRy9y4x3VAbYDUrTbm537gwRA7m5YzdcW5GnCM978Zus7",
  "key27": "3zrTcNFJSH39KBxYB3uDK5LmRhr5DxZo1fKofxuXG9EN6c7KGW3HeKLFKxYq12bKE5rNRAshaaP4vfJQzDCzUkMb",
  "key28": "5GBuLiZdKAkGhWGphAprvSumZJunJovxqpCP8Hva7NZrQn5qSdjy29CMX9ZeSd8f72DGZAfHFQaupRCjdzSqwz5H",
  "key29": "5tWqzWAA7zH6696vJxy1Tq76BgPEP1C5jjpoRrBXgmray4TBzjDzs6oRRY5EFQxJTGNkz4s6cDuZazDEdedok6Qm"
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
