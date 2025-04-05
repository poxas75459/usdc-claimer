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
    "4Hi75Txq2giym1bcZtCKiy7ti8txEjR1bdxqdUotzcM6N9HaGVbx1LeMZtKZ8TBETHvAnK8XFtCeyB7SJ1sKDTMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ud2mJNxbVictTwFUDSFCKMxgbZToa6R6unLZD3NZNzpuAZ7eBWQvxZjEKzsLT9oNASbf2zA4d5PxvjQQJaRfWtC",
  "key1": "5WwEyXqXFKVxacmY1XUJ9DFPj8chHu7NfiVCXutNsNouktw7KEQskot5uirsUdwqvFMfTtxrYLK2bxKx8z7hsDQe",
  "key2": "5KcytfGdQk98dTNLw6eUzbsnmQm8icJ1Y3pkBG7gK6vefHJ4GRThAvgXLefTf7F995xy2fBmkEub9azzKvbjM15t",
  "key3": "5ipS4AqC2v74dNUKGWwSdbWJSHcpkV1ZDcenrKyHpHpw84joy1MxyGNNYmX63ZALRDTjyUBTK2XQ823UvS5pVCgi",
  "key4": "5wyR1kKt6LGnNA6ALi9h9L2w9LSkMJcyDDjzUoxNVdsQUMomZw2NYp1m5vasi7gzWZUPR2ScbsR7gKH2D2NMAzio",
  "key5": "54ur9qYCVL8hvpvHgdjyqDiD2y8SspamRoP4X2CL51pYK6samnaKiW1US7A9KryouegRJLX9WrcnsG3z6myyiybf",
  "key6": "46JoE1jKifknH4EN5Qr5PW5BvZFgQGeHsc2k3qyGZuf8gtZJKP5XJWHvAqAhsUkBezoDcx8yGbnCjNQJiRVYCd74",
  "key7": "5yrURKKefpqupGu9r6ZyScDbYxUP3YzebeFEHpaJfUpGU6XWxJMcNa9VUQQxSYYCkP3XmkHeupsScfN1qpgL242X",
  "key8": "1BBt7ZmEa6WFXstA2i3Y7KLtmGckVfR1ZsRosjAdwK1h97AChqz1UEg6JLC7JyCwY3ajusWHnyukgdNxYbFsC6A",
  "key9": "2LbcerdcWEy5fNGQnGykEhcPWWDMxvkmr4N6gobzhCbMVxq5gPnoxUF81EAg3cb8L6WXHRY2sjJP2M1bhqqHJSVq",
  "key10": "22XJ3mDQ82Kg6P2L3PkKkz2XB6ZtonJr6WUGNM8cymZo2PHXtUQuMwQFcNbHvgAvgehHref1vvR7S5EF92X8aiVb",
  "key11": "2WNyykBpsREW6uEHiQhrLfzLf6ZFSRRzdhbF8SVNpLo3xSVMZ27AhziyhCRomMAUPvQ2y3BV5LohKvnQatJ2ho7j",
  "key12": "4JqmyhL3vd8GkUj7VYcXHsLbyWcdhSmKYgDSioiysmpBp81Sv7VVP5M6h9bw9yseEsuEq3qxqsgLJwuD4Eh1jYhc",
  "key13": "2WthXMNqVaTB12wR7SUVPc8yGhXTzYA5FxBNtXSHdg8gDnFLYiHMCTJDUExa576J6BjkQmu3Z1M4bsiGZXEhfUon",
  "key14": "5E9yvAvAAompdSAuhjMubJLQkXNktjL6bCzezF4qpxg8X5a1zgzHSxQxNSRxPCRxvpCUfLwqYX5XJiymbKq4utBN",
  "key15": "5w71cCTTkKcHXF6RHgKTHvoAQZtmGvikwxgd92z7SzTAduW58iJ9PT2H6HEkoAr4sKUzFYpuDpv6BMC2ZQQNAT7n",
  "key16": "eaYG2Ksd4BeyNf8Mv4DY2zPQjxuohenqj3tZartuFy31mFENAiSvWXJFC2nhqnoQGBdCWYxLJwPCWDfE6QnNGmC",
  "key17": "332RwRaSQoBKsAieniDEuv1TTPPg7thAUd9E9fU1Y6UdLTgduzHcbf88zLd7kqv5iJoLvi7BNvcGb58ddYVhH3LE",
  "key18": "47wYTdN6QCjFRTCeGpuac3s5BeMDxx7rgpH9ToL4AnbQWs5aMtya4pmy9YDdwSqqD9dAH7VRz4ydnzer99icoSds",
  "key19": "4qd1XS4WYnhxBSt8f1uDr9uXYht3vwd5r3P8fknabQ19FP1GrqLt7nHErZAR97y7wFWUTsSyZvaDKApa67drXHW8",
  "key20": "21zZqhNRUx5ugJjR6KCR9J2U2pHnwpHSg4PTKqs8tsDuAKsVpELVPHJtiRgBX3E4FmBtNkRGBLg8NrhF3CaMyEv5",
  "key21": "tqqn8D3kEZ7chkCQzyMLN5kJtCfJa6JDPWfEhVW5vCCRFwpUeDbGTbWiraeVxS5nsYw7QbjWRYp5hnGD9Pi8FYz",
  "key22": "3D2PGC6kUYT55pCpG2ADHhLWkeqwJJYmiBzBEsZLJRTNS4UUfKWoJ25Q147CSD7uvCrg88UAHc5ttC1NoYbhJ8Q6",
  "key23": "3m6hVrdwxmg25Q5KEU2wHtMggZrLGQbLiWuMem8ATc4kiXG3V5Y1GMh6aSUwUifxyygPwt9Z1DYUvCM95H6kr4Gk",
  "key24": "268xgETFGPkWBNeh8VfwoBwxkGSeWVd78M7Qn5scSqmYF4MphvkNDuQC3MYqoqbRyafqYrdkTCiMRhuieZrMd3QP",
  "key25": "23EGm6fpeC2kiaca2Hg7dwrnAF4kmu6sddckwXQNRNyoh2sC6t6uJ5gDrbyErNSRAmrcCshfw43fqP8TufGz1c7t",
  "key26": "5JdKTjQ1WNjYqLoPF8sDs1R3N4vCCiX7FBZSmij535KcjPAmL2TYUCb4xYD9GH1TX5up4xmvnbC7HBURBr7HFcAR",
  "key27": "4D1VLeZj7nMMU7LBe4Rj41Cmfc21wiBGNRvk3tePR74gctNNwuFoUW1BxmgKGAAeuxxddMgE2T7zG5WiTe1ejaGi",
  "key28": "4LcnR41FvYSZi6G9WHxX8icUn62exLb7DxCfJRPJ598pUgAprzikvVx16LtUsCnwCQ3S7Fg2dDrKXboXHE7YmEGZ",
  "key29": "5wNc4boLnfCKi38ZGdXvGqDBz6vC8XZAR8o7h1mZZvVCg5YdZvC8Fz31cDyw6n45swx8wfMqVi5JdgjUrfWb84Jw",
  "key30": "yVeQBw3r37EFCXVNyc7NaXGGNd5fZYo6xyniuGrgc4kvjfxzq1N5T3G4DKzNBfrx8ssgemEjT1c7GdxoVc8YNE6"
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
