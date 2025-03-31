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
    "QhSqFbdvQG8EEbEqmG6zNGpCHdfoqtgAKRivQodT1HgocTpgR6NuZLSqtSgKvZaNKdoVc2Tqg5CHuKL2qWy6Vde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BsaGpKJPMPdkzzJnkhMjVnwfRQtHh4Hbi4o14uGAuVJqeDRJy3KcwrNjSaEGXen7VJLenj9dYzRnBuNxfBwgt8n",
  "key1": "VBtdTF3XxJXxFKRcZkS1T89DDoBCkwrBZ2mg8yqXPJ7ixn52dWD5FVz3exmzf7puvju7k35BLKdLPj2cM1hfNHm",
  "key2": "hDAHGXBK5efMf93i9Q3gorVEofHczMB7XiLKyRDYh8dpBVyTR2QmYuYWuPakkrQq15c6fzs5JaLECxdC7B5PSPW",
  "key3": "4TyJW3HMnNciDvQDSG4WaxSZ2wZkLoXdKP4w3Bu8ZuRQ1GhtzhCe5bCERqq8nqsU4BKJpGbnSgBX5msyFPL4bfVr",
  "key4": "3cdJdhn6gHeDdcStNMsUfEf7hUFtA3uMx4VkgSGA6CE8LrrsCRFuCyyJL1qjeBshmdDpM5QpjmJVL7LKav4UEUL",
  "key5": "34LQSGnpRRCZeDHnTHLwfndyqyozeSvPfPJmNxW1h3Qdqy8TxF5XGEw3pfLNtchjmKEz1m1yptK8zrF2yqjRwZcz",
  "key6": "Q2d5N3yrQin4Xd5gZ4hD53pPpbbvwD2pV6H6oqPqjPGjfZWW63Ln1M3hX9UEJ2KCqNKfmpY569wjnFpaoimsELE",
  "key7": "5tJ4RHew1xkoCgUm2M4cZ4F5w8aqnNgDpWQ6kxvSixsRnXyj95adymgodTguuoK6vnwDDZCFKbt8Thn4bgLxnPLD",
  "key8": "3gnhYXyiyU2cZxZgDxSpNrnFs86kYVifrAxXFXdehewdUZRMkJAboFK7WadFdq4fvgV9AxEe1U9Vzbz6ySJSLaVd",
  "key9": "2kxEYMvPLhrMmgmEY8ashoWwSyNN6Cngkgq3JU1vERhueprq9Z1k4JA9umpxr6c3ygBbyDBTfMbS3kjmKdR3XXY8",
  "key10": "THxyVur9HHhtrPRMhnkxmKzM9g7JXfjDBBQUuRPiCQHTt6kRU8i8mP6jmJQ4jy7XcS9yD95dG98K1PcpHPL8X8v",
  "key11": "2ymFQcAbFfnwwPFQcDxdSTUisTt1T1KkSKkVV8vpYJJ3Ct6rB8hPVM4sirAZr1NvCzDytSebYoFDF9kgJPQrDCMi",
  "key12": "4xBsyt97pCi7TnNDGfquVCkBUYZAxo6ziccqTKFCDA2bh56HwueQmJ8z9n6seM8knYRriKrm8zJFoSXmBXnqZ5UX",
  "key13": "2HapDZ8YCwHBuaxuBhe6LUmFxtGx5cg5kjERnUD9P4QCnM7dVT5rwg3UhZ4CjVZ6yCpwEPHPr39V87cmgfF9ADDT",
  "key14": "4yw9GiNAbySSUQMnQ5nC1Fvd21NZZHZYatxL9cn7LwH2r2cWfAi1vRnkCUtZSrz31WQQHMRSVZgdhQ3d43QT8FYA",
  "key15": "2uJPZhiPrpWw3PsEj3QjF4qvYhF5MGtXxBMWQQULeNmFToQ3NVpRvs3Wt3ypvnYc1PY61emRPC4r12MWegskKrRz",
  "key16": "3C9PhQYe2AJYFJif6E1KNy5cuqcd9nTuQ8v3yRSytWUCxuqGFYz4NxgZQXGbBNraNyD8qP9xh1JFRFbDTrvLCSdx",
  "key17": "21fEJAsCiP6FnNeBFCbXYmU1X8hNX2tGHvCN8YpxTVCEeqQzyQ1x2TkewbcyaQS8rYayJF3BTBJi1TB6gT6N8x61",
  "key18": "kKkqPpAwANWC1JLLeiJA5RVtNwa4pDJdZS5rVMp8rikuUMJ33v4hy3YnT19ZNgaWFa9BjSQPFUqnXp7fxfcYfJu",
  "key19": "65e6GdFQEVsCoReBFkjdwtNuhDgr8JHdyMp4tZ1Y6csYugZREsytCToNKnANtp6f3sjiTEduk9652gHzWRZ6Cacs",
  "key20": "4fY1ZVXFtQ5FuKSbuv6ZkrG366uhjR3sPDdHWTPbZnGEHR3FNtm7G9dV4qQJPqHQYVk3pGGLbZtQPCwDCM4boXEB",
  "key21": "C3MEsHMphHVT3HU15QyPiSXAyiQfo2xXWvELVhTgRzsVEKbzYykhavZ8eXNjWH7WDTfkNEG51mQcyqwiBV4sMDN",
  "key22": "4FQSH9mJNHLfZNk3mhhMB1mknrrtEvZmnMN9K32wiL2LYhFtnkaaPVRaUJZTHj3E93GXrnTecvDfqefY6gS1H8kf",
  "key23": "3aGbWyF34cgS1mJ4Gaivbot26v3XnGBSXrLf4yJ5dCspQTL5gaprpCBPmkqfcdir92XBsbtiwaQf7eqT3U1YkNuy",
  "key24": "4poydEhtphrdWQ83Hv6XPgpYUztD9CCNkbAgGBMz8YChPyYub9g35xqvHQFy5rpBkaPXNsJSvaQAWdN5NvCMscPP",
  "key25": "3h59L9aEtmtKiU9URkxeAeCj2DtCxFCvyUAZ1mhHEEAHjH6XePmdVYHQr5xdzegPvXweqG5hTPHNBkh2WwK6Rj61",
  "key26": "5gvF8muYs9SHL7BMuQaFR3eeSB6NJWv9KqZWaPB4SzfzDji59q5PtbtoSG9XAt2DxdUHCewrjwacifEPyHSKQaUW",
  "key27": "5HAgriWdkn1a7TeumV6yf7vY6VkTFYJPBQ78xjSxmnPt57hUAaasJFbQCQS3F6tUmxGpJ1qsUoXbR6d4bKKfsdq5",
  "key28": "3LsmBnRY71mGgpuu2NFqmYDPnPbc2Zkt7oaj4y7vTNQNxhfCQJsDT7WqAR77RQDUHFCB8sPWFWY3E9fnUyEoPZhb",
  "key29": "5yMe2ptNKKs2Leq82gApjPfuJnAjzjzV9Jp8wUR6gRpXMx13Y6NfHVFELzdWnEd7PvpA1xdWLR1v4Nx99Aa4oTmj",
  "key30": "5u2EnZwS3yuT6yh1XH9C3JgshiTwqF9UVm1acS1AwbPBJCPCDMMRYLMnmxye7jPqhf1VBkELtTNAGHpB3nT8teqP",
  "key31": "5zDzSmUgh2TVGMyJYnWFQe5tevixJp8KUvQGQki5PDu9q1NQFrC4wJJLUM7v5re7YCbtG3kto27MWfe4KagRw2P3",
  "key32": "343s4Hh1tS8LFgdzdHVBeTPeKexKwExcS8mq9y6zjuRNajkC6WUd8S17HbgPbPVRZw4wzsC3GMUxLZstDv7ZULc2",
  "key33": "3r7KV4nLe4MT5dZsPSbySBP7YYjDhW6T2sGPKSDe7vUDgXr1PTJTjBoRHse98Y8se7HPUsHHtgJLC7H9aJaBAMQa",
  "key34": "3rsKvm7uFvw62pdcy5hJzmBYFCeVeCaZaNZpCoWTZb8KN58JcxTS1q5PbKbpdV5DBmvX4RRhuT3CdJ6BSZLHvVCN",
  "key35": "VmPuZ1fwNBgnPwEZAhgs5qc7sjv1RieUxZdkmEeRTpQSN2YkqKfVaxYazMuBV2cS6rEV9KCBvvfCVUz53f92aQc",
  "key36": "4Lt8CFhgPUmigQrukvMyxecm8iLaZriHtBLmAaUWDNzhD7NEseRVwtXX9gjE5maZhtbuyM98Mq9VZFmUDnqekAtd",
  "key37": "2Ath4ySdcX7uzHZRo5gtY3HpVByteXrbrWDZ6WFQ3BmaVxieGyAYmX4ZjFgfo2HA2Q8bbpiK2rergUis9BTVeQgc"
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
